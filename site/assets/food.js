/* Winter Arc food: the dish list (#/food) and one dish (#/food/<id>).
   A dish page reads top to bottom: name, what you need (each ingredient with a screenshot), then the steps.
   Screenshots are optional per ingredient / step: when the video has no clear frame the row simply has no picture. */
(function () {
  'use strict';
  var WA = window.WA;

  var MEALS = ['Breakfast', 'Lunch or dinner', 'Snack', 'Drink', 'Side'];
  /* dishes that need flatbread or batter work: hidden by default, the owner has no time for them */
  var SLOW = /\b(roti|dosa|chilla|cheela|paratha|pancake|uttapam|thepla|puri|naan)\b/i;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function byId(id) { for (var i = 0; i < WA.dishes.length; i++) if (WA.dishes[i].id === id) return WA.dishes[i]; return null; }
  /* WA_IMG is only set by the single-file preview, which carries the pictures inside the page */
  function src(d, name) { var p = 'assets/food/' + d.id + '/' + name + '.webp'; return (window.WA_IMG && window.WA_IMG[p]) || p; }
  function img(d, name, cls) { return '<img class="' + cls + '" src="' + src(d, name) + '" alt="" loading="lazy" decoding="async">'; }
  function meta(d) {
    return '<span>' + esc(d.meal) + '</span><span>' + d.minutes + ' min</span><span>' + esc(d.how) + '</span><span>≈ ' + d.protein + ' g protein</span>';
  }

  /* ---- ingredient tags and the pantry ("what do you have?") ---- */
  var T = WA.foodTags, PKEY = 'wa-pantry';
  function loadPantry() {
    var o = {};
    try { (JSON.parse(localStorage.getItem(PKEY)) || []).forEach(function (k) { o[k] = true; }); } catch (e) {}
    return o;
  }
  function savePantry(o) { try { localStorage.setItem(PKEY, JSON.stringify(Object.keys(o))); } catch (e) {} }
  /* what a dish needs from you: everything except staples, optional extras and anything you can swap for something you have */
  function required(d) { return d.ingredients.filter(function (i) { return !i.opt && !T.isStaple(i.tag) && !(i.alt || []).some(T.isStaple); }); }
  function missingOf(d, have) {
    return required(d).filter(function (i) { return !(have[i.tag] || (i.alt || []).some(function (a) { return have[a]; })); });
  }
  /* the chips: every non-staple tag that some dish uses, in the groups from food-tags.js, unknown tags under "Other" */
  function pickerGroups() {
    var used = {};
    WA.dishes.forEach(function (d) { d.ingredients.forEach(function (i) { if (i.tag && !T.isStaple(i.tag)) used[i.tag] = true; (i.alt || []).forEach(function (a) { if (!T.isStaple(a)) used[a] = true; }); }); });
    var out = [], seen = {};
    T.groups.forEach(function (g) {
      var tags = g.tags.map(function (x) { return x[0]; }).filter(function (k) { return used[k]; });
      tags.forEach(function (k) { seen[k] = true; });
      if (tags.length) out.push({ name: g.name, tags: tags });
    });
    var other = Object.keys(used).filter(function (k) { return !seen[k]; }).sort();
    if (other.length) out.push({ name: 'Other', tags: other });
    return out;
  }

  /* ---- search: dish names, ingredient names, other names (dahi = curd), meal and cooking method ---- */
  function norm(x) { return String(x).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
  function tagText(tag) { return norm(T.name(tag) + ' ' + tag + ' ' + T.aliases(tag).join(' ')); }
  function wordHit(words, tok) { for (var i = 0; i < words.length; i++) if (words[i].indexOf(tok) === 0) return true; return false; }
  function lev(a, b) {
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (j = 1; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  /* precomputed once: what each dish can be found by */
  var index = null;
  function buildIndex() {
    if (index) return index;
    var tagText1 = {}, tagCount = {};
    index = { dishes: {}, tags: [] };
    WA.dishes.forEach(function (d) {
      var base = norm(d.name + ' ' + d.meal + ' ' + d.how + ' ' + (d.tools || '')).split(' '), ing = [], seenTag = {};
      d.ingredients.forEach(function (i) {
        var tags = [i.tag].concat(i.alt || []);
        var words = norm(i.n).split(' ');
        tags.forEach(function (t) { if (!tagText1[t]) tagText1[t] = tagText(t).split(' '); words = words.concat(tagText1[t]); if (!seenTag[t]) { seenTag[t] = true; tagCount[t] = (tagCount[t] || 0) + 1; } });
        ing.push({ words: words, tag: i.tag });
      });
      index.dishes[d.id] = { name: norm(d.name).split(' '), base: base, ing: ing };
    });
    Object.keys(tagCount).forEach(function (t) { if (!T.isStaple(t)) index.tags.push({ tag: t, words: tagText(t).split(' '), n: tagCount[t] }); });
    index.tags.sort(function (a, b) { return b.n - a.n; });
    return index;
  }
  function searchDish(d, toks) {
    var ix = buildIndex().dishes[d.id], score = 0, has = [], seen = {};
    for (var k = 0; k < toks.length; k++) {
      var tok = toks[k], hit = false;
      if (wordHit(ix.name, tok)) { score += 3; hit = true; }
      if (wordHit(ix.base, tok)) hit = true;
      for (var m = 0; m < ix.ing.length; m++) {
        if (wordHit(ix.ing[m].words, tok)) { hit = true; score += 1; if (!seen[ix.ing[m].tag]) { seen[ix.ing[m].tag] = true; has.push(ix.ing[m].tag); } }
      }
      if (!hit) return null;
    }
    return { d: d, score: score, has: has };
  }

  function showList(root) {
    var all = WA.dishes.slice().sort(function (a, b) { return b.protein - a.protein || a.minutes - b.minutes; });
    var have = loadPantry(), state = { meal: '', flags: { hideslow: true }, open: false, q: '' };
    try { if (localStorage.getItem('wa-food-slow') === 'show') state.flags.hideslow = false; } catch (e) {}
    var FLAGS = [['hideslow', 'No roti, dosa, chilla'], ['no-cook', 'No cooking'], ['pressure-cooker', 'Pressure cooker'], ['air-fryer', 'Air fryer'], ['quick', 'Under 10 min'], ['high', '20 g+ protein']];
    function hasFlag(d, k) { return k === 'hideslow' ? !SLOW.test(d.name) : k === 'high' ? d.protein >= 20 : k === 'quick' ? d.minutes <= 10 : (d.tags || []).indexOf(k) >= 0; }
    var meals = MEALS.filter(function (m) { return all.some(function (d) { return d.meal === m; }); });
    var groups = pickerGroups();
    var staples = T.staples.filter(function (k) { return k !== 'ice' && k !== 'water'; }).map(T.name).join(', ');

    root.innerHTML =
      '<div class="food">' +
      '<header class="fd-top"><a href="#/">← Home</a><span>Winter Arc</span></header>' +
      '<h1 class="fd-title">Food</h1>' +
      '<p class="fd-lede">Pick a dish. Follow the steps.</p>' +
      '<input class="fd-search" type="search" inputmode="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Search a dish or ingredient: curd, paneer, oats…" aria-label="Search dishes and ingredients">' +
      '<button class="fd-have" type="button" aria-expanded="false"><span class="fd-have-t">What do you have?</span><span class="fd-have-s"></span><span class="fd-have-x" aria-hidden="true">+</span></button>' +
      '<div class="fd-pick" hidden>' +
      groups.map(function (g) {
        return '<div class="fd-pg"><h3>' + esc(g.name) + '</h3><div class="fd-pchips">' + g.tags.map(function (k) {
          return '<button class="fd-chip" type="button" data-tag="' + esc(k) + '" aria-pressed="false">' + esc(T.name(k)) + '</button>';
        }).join('') + '</div></div>';
      }).join('') +
      '<p class="fd-assumed"><b>Always assumed at home:</b> ' + esc(staples) + '.</p>' +
      '<button class="fd-clear" type="button">Clear all</button></div>' +
      '<div class="fd-chips" role="group" aria-label="Filter">' +
      '<button class="fd-chip on" type="button" data-meal="">All</button>' +
      meals.map(function (m) { return '<button class="fd-chip" type="button" data-meal="' + esc(m) + '">' + esc(m) + '</button>'; }).join('') +
      '<span class="fd-chip-gap"></span>' +
      FLAGS.map(function (f) { var on = !!state.flags[f[0]]; return '<button class="fd-chip' + (on ? ' on' : '') + '" type="button" data-flag="' + f[0] + '" aria-pressed="' + on + '">' + f[1] + '</button>'; }).join('') +
      '</div>' +
      '<div class="fd-results" aria-live="polite"></div>' +
      '</div>';

    var results = root.querySelector('.fd-results'), pick = root.querySelector('.fd-pick'), haveBtn = root.querySelector('.fd-have');

    function card(d, miss, has) {
      return '<a class="fd-card" href="#/food/' + d.id + '">' + img(d, d.card || d.cover, 'fd-card-img') +
        '<span class="fd-card-name">' + esc(d.name) + '</span><span class="fd-card-meta">' + meta(d) + '</span>' +
        (miss && miss.length ? '<span class="fd-card-need"><b>Need</b> ' + miss.map(function (i) { return esc(T.name(i.tag)); }).join(', ') + '</span>' : '') +
        (has && has.length ? '<span class="fd-card-need"><b>Has</b> ' + has.slice(0, 4).map(function (t) { return esc(T.name(t)); }).join(', ') + '</span>' : '') + '</a>';
    }
    /* the ingredient chips for what was typed; tapping one adds it to what you have */
    function tagChipsFor(toks) {
      var out = buildIndex().tags.filter(function (t) { return toks.every(function (tok) { return wordHit(t.words, tok); }); }).slice(0, 14);
      if (!out.length) return '';
      return '<div class="fd-tagres"><p>Ingredients · tap to add to what you have</p><div class="fd-pchips">' + out.map(function (t) {
        return '<button class="fd-chip' + (have[t.tag] ? ' on' : '') + '" type="button" data-stag="' + esc(t.tag) + '" aria-pressed="' + !!have[t.tag] + '">' + esc(T.name(t.tag)) + ' <i>' + t.n + '</i></button>';
      }).join('') + '</div></div>';
    }
    function suggest(toks) {
      var words = {}, out = [];
      buildIndex().tags.forEach(function (t) { t.words.forEach(function (w) { if (w.length > 3) words[w] = t.tag; }); });
      toks.forEach(function (tok) {
        if (tok.length < 3) return;
        var best = null, bd = 3;
        Object.keys(words).forEach(function (w) { var dd = lev(tok, w.slice(0, Math.max(tok.length, 3))); if (dd < bd) { bd = dd; best = w; } });
        if (best && out.indexOf(best) < 0) out.push(best);
      });
      return out.slice(0, 4);
    }
    function section(title, list, miss) {
      if (!list.length) return '';
      return '<section class="fd-sec"><h2 class="fd-sec-h"><span>' + title + '</span><span>' + list.length + '</span></h2><div class="fd-grid">' +
        list.map(function (x) { return card(x.d, miss ? x.m : null); }).join('') + '</div></section>';
    }
    function draw() {
      var n = Object.keys(have).length;
      root.querySelector('.fd-have-s').textContent = n ? n + ' picked' : 'Tap what is in your kitchen';
      root.querySelector('.fd-have-x').textContent = state.open ? '–' : '+';
      var list = all.filter(function (d) {
        if (state.meal && d.meal !== state.meal) return false;
        return Object.keys(state.flags).every(function (k) { return !state.flags[k] || hasFlag(d, k); });
      });
      var toks = norm(state.q).split(' ').filter(Boolean);
      if (toks.length) {
        var hits = [];
        list.forEach(function (d) { var r = searchDish(d, toks); if (r) hits.push(r); });
        hits.sort(function (a, b) { return b.score - a.score || b.d.protein - a.d.protein; });
        var sug = hits.length ? [] : suggest(toks);
        results.innerHTML = tagChipsFor(toks) + '<p class="fd-count">' + hits.length + (hits.length === 1 ? ' dish' : ' dishes') + ' for “' + esc(state.q.trim()) + '”</p>' +
          (hits.length ? '<div class="fd-grid">' + hits.map(function (r) { return card(r.d, null, r.has); }).join('') + '</div>'
            : '<p class="fd-empty">Nothing found.' + (sug.length ? ' Did you mean ' + sug.map(function (w) { return '<button class="fd-did" type="button" data-did="' + esc(w) + '">' + esc(w) + '</button>'; }).join(' or ') + '?' : ' Try another word, or clear the filters.') + '</p>');
        return;
      }
      if (!n) {
        results.innerHTML = '<p class="fd-count">' + list.length + (list.length === 1 ? ' dish' : ' dishes') + '</p><div class="fd-grid">' +
          (list.map(function (d) { return card(d); }).join('') || '<p class="fd-empty">Nothing matches. Try another filter.</p>') + '</div>';
        return;
      }
      var buckets = [[], [], []], more = 0;
      list.forEach(function (d) {
        var m = missingOf(d, have);
        if (m.length < 3) buckets[m.length].push({ d: d, m: m }); else more++;
      });
      results.innerHTML = section('Ready to cook', buckets[0], false) + section('Missing 1 thing', buckets[1], true) + section('Missing 2 things', buckets[2], true) +
        (buckets[0].length + buckets[1].length + buckets[2].length ? '' : '<p class="fd-empty">Nothing close yet. Pick more things you have, or clear the filters.</p>') +
        (more ? '<p class="fd-more">' + more + ' more need 3 or more things you have not picked.</p>' : '');
    }
    function syncChips() {
      var cs = root.querySelectorAll('.fd-chip[data-tag]');
      for (var i = 0; i < cs.length; i++) { var on = !!have[cs[i].getAttribute('data-tag')]; cs[i].classList.toggle('on', on); cs[i].setAttribute('aria-pressed', String(on)); }
    }

    var searchEl = root.querySelector('.fd-search');
    searchEl.addEventListener('input', function () { state.q = searchEl.value; draw(); });
    results.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.hasAttribute('data-stag')) {
        var k = b.getAttribute('data-stag'); if (have[k]) delete have[k]; else have[k] = true;
        savePantry(have); syncChips(); b.classList.toggle('on', !!have[k]); b.setAttribute('aria-pressed', String(!!have[k]));
        root.querySelector('.fd-have-s').textContent = Object.keys(have).length ? Object.keys(have).length + ' picked' : 'Tap what is in your kitchen';
      } else if (b.hasAttribute('data-did')) { searchEl.value = b.getAttribute('data-did'); state.q = searchEl.value; draw(); searchEl.focus(); }
    });
    haveBtn.addEventListener('click', function () {
      state.open = !state.open; pick.hidden = !state.open; haveBtn.setAttribute('aria-expanded', String(state.open)); draw();
    });
    pick.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.classList.contains('fd-clear')) { have = {}; }
      else if (b.hasAttribute('data-tag')) { var k = b.getAttribute('data-tag'); if (have[k]) delete have[k]; else have[k] = true; }
      else return;
      savePantry(have); syncChips(); draw();
    });
    root.querySelector('.fd-chips').addEventListener('click', function (e) {
      var b = e.target.closest('.fd-chip');
      if (!b) return;
      if (b.hasAttribute('data-flag')) {
        var f = b.getAttribute('data-flag'); state.flags[f] = !state.flags[f]; b.classList.toggle('on', !!state.flags[f]); b.setAttribute('aria-pressed', String(!!state.flags[f]));
        if (f === 'hideslow') { try { localStorage.setItem('wa-food-slow', state.flags[f] ? 'hide' : 'show'); } catch (e) {} }
      }
      else {
        state.meal = b.getAttribute('data-meal');
        var bs = root.querySelectorAll('.fd-chip[data-meal]');
        for (var i = 0; i < bs.length; i++) bs[i].classList.toggle('on', bs[i] === b);
      }
      draw();
    });
    syncChips(); draw();
    document.body.classList.add('is-food');
    document.title = 'Food · Winter Arc';
    return { destroy: function () { document.body.classList.remove('is-food'); } };
  }

  function showDish(root, id) {
    var d = byId(id);
    if (!d) return showList(root);
    var estimated = d.ingredients.some(function (i) { return i.q.charAt(0) === '~'; });
    var ing = d.ingredients.map(function (i) {
      return '<li' + (i.img ? '' : ' class="noimg"') + '>' + (i.img ? img(d, i.img, 'fd-ing-img') : '') +
        '<span class="fd-ing-q">' + esc(i.q) + '</span><span class="fd-ing-n">' + esc(i.n) + '</span></li>';
    }).join('');
    var steps = d.steps.map(function (s, k) {
      var pics = s.imgs || (s.img ? [s.img] : []);
      return '<li><span class="fd-no">' + (k + 1) + '</span><div class="fd-step-body"><p>' + esc(s.t) + '</p>' +
        (pics.length ? '<div class="fd-pics fd-pics-' + Math.min(pics.length, 3) + '">' + pics.map(function (n) { return img(d, n, 'fd-step-img'); }).join('') + '</div>' : '') + '</div></li>';
    }).join('');
    root.innerHTML =
      '<div class="food dish">' +
      '<header class="fd-top"><a href="#/food">← Food</a><span>Winter Arc</span></header>' +
      '<p class="fd-meta">' + meta(d) + '</p>' +
      '<h1 class="fd-name">' + esc(d.name) + '</h1>' +
      img(d, d.cover, 'fd-cover') +
      '<div class="fd-cols">' +
      '<section class="fd-need" aria-label="What you need"><h2 class="fd-h"><span>What you need</span><span>For ' + esc(d.serves) + '</span></h2>' +
      '<p class="fd-tools">' + esc(d.tools) + '</p><ul class="fd-ing">' + ing + '</ul>' +
      (estimated ? '<p class="fd-note"><b>~</b> the video does not say the amount. This is an estimate.</p>' : '') + '</section>' +
      '<section class="fd-steps" aria-label="Steps"><h2 class="fd-h"><span>Steps</span><span>' + d.steps.length + '</span></h2><ol>' + steps + '</ol>' +
      '<p class="fd-done">Done. Eat.</p></section>' +
      '</div>' +
      (d.credit ? '<p class="fd-credit">Recipe from a video by ' + esc(d.credit) + '</p>' : '') +
      '</div>';
    document.body.classList.add('is-food');
    document.title = d.name + ' · Winter Arc';
    return { destroy: function () { document.body.classList.remove('is-food'); } };
  }

  WA.showFood = function (root, id) { return id ? showDish(root, id) : showList(root); };
})();
