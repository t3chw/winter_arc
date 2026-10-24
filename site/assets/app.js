/* Winter Arc app: today's workout picked by the calendar date (one Start runs the whole day), a month calendar,
   exercise library, silent follow-along player, and a pose check sheet (#/check). Nothing is tracked or saved. */
(function () {
  'use strict';
  var WA = window.WA, E = WA.engine, X = WA.exercises, SESSIONS = WA.sessions, PROGRAM = WA.program;
  var root = document.getElementById('root');
  var view = null;

  var BREATH_TEXT = { in: 'Breathe in', out: 'Breathe out', hold: 'Keep the air in', easy: 'Breathe steadily' };
  var BREATH_SHORT = { in: 'Breathe in', out: 'Out', hold: 'Hold', easy: 'Breathe steadily' };
  var RING_LABEL = { in: 'In', out: 'Out', hold: 'Hold', easy: '', none: '' };
  var FLASH_BLOCKS = { 'Finisher': 1, 'Cool-down': 1, 'Stretch': 1, 'Walk': 1, 'Test': 1, 'Breathing': 1 };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function itemId(it) { return typeof it === 'string' ? it : it.id; }
  function sessionById(id) { for (var i = 0; i < SESSIONS.length; i++) if (SESSIONS[i].id === id) return SESSIONS[i]; return null; }
  function newSvg(parent, label) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 640 440');
    if (label) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', label); }
    else svg.setAttribute('aria-hidden', 'true');
    parent.appendChild(svg);
    return svg;
  }
  function thumbPose(ex) { return ex.thumb || ex.rep[0].to; }
  function fmt(sec, long) {
    if (!long) return String(sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ---------------- Dates ---------------- */
  var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function longDate(d) { return DAY_NAMES[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  function todayDay() { return Math.max(1, PROGRAM.dayForDate(new Date())); }

  /* ---------------- Home ---------------- */
  function blockList(d) {
    return d.blocks.map(function (b) { return '<li><span>' + esc(b.name) + '</span><span>' + Math.max(1, Math.round(b.seconds / 60)) + ' min</span></li>'; }).join('');
  }
  /* Month grid, Monday first. Each date shows its workout; today is the big one. */
  function calendarHtml(y, m) {
    var now = new Date(), tN = PROGRAM.dayForDate(now);
    var first = new Date(y, m, 1), lead = (first.getDay() + 6) % 7, nDays = new Date(y, m + 1, 0).getDate();
    var startD = PROGRAM.start, endD = PROGRAM.dateForDay(PROGRAM.days);
    var canPrev = y * 12 + m > startD.getFullYear() * 12 + startD.getMonth();
    var canNext = y * 12 + m < endD.getFullYear() * 12 + endD.getMonth();
    var html = '<div class="cal-head"><button class="cal-nav" type="button" data-cal="-1" aria-label="Previous month"' + (canPrev ? '' : ' disabled') + '>‹</button>' +
      '<h3>' + MONTHS[m] + ' ' + y + '</h3>' +
      '<button class="cal-nav" type="button" data-cal="1" aria-label="Next month"' + (canNext ? '' : ' disabled') + '>›</button></div>' +
      '<div class="cal-grid" role="grid">' +
      ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(function (w) { return '<span class="cal-wd">' + w + '</span>'; }).join('');
    for (var i = 0; i < lead; i++) html += '<span class="cal-cell blank"></span>';
    for (var dd = 1; dd <= nDays; dd++) {
      var n = PROGRAM.dayForDate(new Date(y, m, dd));
      if (n < 1) { html += '<span class="cal-cell blank"><span class="cal-num">' + dd + '</span></span>'; continue; }
      var info = PROGRAM.build(n), cls = 'cal-cell ' + (info.easy ? 'easy' : 'hard');
      var title = 'Day ' + n + ' · ' + info.name + ' · ' + info.minutes + ' min';
      var inner = '<span class="cal-num">' + dd + '</span><span class="cal-what">' + esc(info.short) + '</span>';
      if (n < tN) html += '<span class="' + cls + ' past" title="' + esc(title) + '">' + inner + '</span>';
      else html += '<a class="' + cls + (n === tN ? ' is-today' : '') + '" href="#/day/' + n + '" title="' + esc(title) + '">' + inner + '</a>';
    }
    return html + '</div>' +
      '<p class="cal-key"><span class="key hard"></span>Hard day <span class="key easy"></span>Easier day <span class="key key-today"></span>Today</p>' +
      '<p class="cal-note">The plan started on ' + longDate(startD) + ' and runs 12 weeks, to ' + longDate(endD) + '. Each date has its own workout. Missed a day? Just do today\'s.</p>';
  }

  function showWorkout() {
    var now = new Date(), n = todayDay(), today = PROGRAM.build(n);
    var html = '<div class="home">' +
      '<header class="home-top"><a class="work-back" href="#/">← Home</a><p class="eyebrow">' + esc(longDate(now)) + '</p><h1>Today</h1></header>' +
      '<section class="today" aria-label="Today\'s workout">' +
      '<p class="eyebrow">Day ' + n + ' of ' + PROGRAM.days + ' · Week ' + today.week + ' · ' + esc(today.phase) + '</p>' +
      '<h2 class="today-name">' + esc(today.name) + '</h2>' +
      '<p class="today-desc">' + esc(today.desc) + '</p>' +
      '<ol class="today-blocks">' + blockList(today) + '</ol>' +
      '<a class="btn btn-main today-start" href="#/day/' + n + '">Start · ' + today.minutes + ' min</a>' +
      '<p class="today-hint">Press Start, put your music on and copy the figure. It runs by itself to the end.</p>' +
      '<a class="today-alt" href="#/day/' + n + '/short">No time today? Do the 9-minute version</a>' +
      '</section>';

    html += '<section class="session cal" aria-label="Calendar"><div class="session-head"><h2>Calendar</h2><p>Tap today to start</p></div>' +
      '<div class="cal-body"></div></section>';

    html += '<header class="lib-top"><h2>Exercise library</h2><p class="lede">Tap any exercise to practise it on its own.</p></header>';
    SESSIONS.forEach(function (s) {
      html += '<section class="session"><div class="session-head"><h2>' + esc(s.name) + '</h2><p>' + esc(s.note) + '</p></div><div class="cards">';
      s.items.forEach(function (it, i) {
        var ex = X[itemId(it)];
        html += '<a class="card" href="#/s/' + s.id + '/' + i + '"><span class="thumb" data-ex="' + ex.id + '"></span><span class="card-name">' + esc(ex.name) + '</span></a>';
      });
      html += '</div></section>';
    });
    html += '</div>';
    root.innerHTML = html;

    var calBody = root.querySelector('.cal-body');
    var cy = now.getFullYear(), cm = now.getMonth();
    if (PROGRAM.dayForDate(now) < 1) { cy = PROGRAM.start.getFullYear(); cm = PROGRAM.start.getMonth(); }
    function drawCal() { calBody.innerHTML = calendarHtml(cy, cm); }
    calBody.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cal]');
      if (!b || b.disabled) return;
      cm += parseInt(b.getAttribute('data-cal'), 10);
      if (cm < 0) { cm = 11; cy--; } else if (cm > 11) { cm = 0; cy++; }
      drawCal();
    });
    drawCal();

    var thumbs = root.querySelectorAll('.thumb');
    for (var i = 0; i < thumbs.length; i++) {
      var ex = X[thumbs[i].getAttribute('data-ex')];
      var fig = new E.Figure(newSvg(thumbs[i]), ex, { guides: false });
      fig.draw(fig.still(thumbPose(ex)), 0.4);
    }
    document.title = 'Winter Arc';
    return { destroy: function () {} };
  }

  /* ---------------- Check sheet (for reviewing poses) ---------------- */
  function showCheck(filter) {
    var html = '<div class="home"><header class="home-top"><h1>Pose check</h1></header>';
    var ids = filter ? filter.split(',') : Object.keys(X);
    ids.forEach(function (id) {
      html += '<section class="session"><div class="session-head"><h2>' + esc(X[id].name) + '</h2><p>' + id + '</p></div><div class="cards check" data-ex="' + id + '"></div></section>';
    });
    root.innerHTML = html + '</div>';
    var rows = root.querySelectorAll('.check');
    for (var i = 0; i < rows.length; i++) {
      var ex = X[rows[i].getAttribute('data-ex')];
      E.prepare(ex);
      Object.keys(ex.poses).forEach(function (name) {
        var cell = document.createElement('div'); cell.className = 'card';
        var fig = new E.Figure(newSvg(cell), ex, { guides: false });
        fig.draw(fig.still(name), 0.4);
        var cap = document.createElement('span'); cap.className = 'card-name'; cap.textContent = name;
        cell.appendChild(cap); rows[i].appendChild(cell);
      });
      var cell2 = document.createElement('div'); cell2.className = 'card';
      var fig2 = new E.Figure(newSvg(cell2), ex);
      fig2.draw(fig2.still(ex.rep[0].to), 0.4);
      fig2.guides.forEach(function (g) { g.g.classList.add('on'); });
      var cap2 = document.createElement('span'); cap2.className = 'card-name'; cap2.textContent = 'all guides';
      cell2.appendChild(cap2); rows[i].appendChild(cell2);
    }
    return { destroy: function () {} };
  }

  /* ---------------- Player ----------------
     cfg.mode 'single': one exercise from the library (watch, ready, work, rest, done; then "Next exercise").
     cfg.mode 'session': a whole day. After the first 10-second get-ready it never stops: work, rest (showing the
     next move in its start position), work... until the cool-down ends. */
  function showPlayer(cfg) {
    var steps = cfg.steps, N = steps.length, session = cfg.mode === 'session';
    var READY = 10000;
    var suffix = [];
    for (var k = N; k >= 0; k--) suffix[k] = k === N ? 0 : suffix[k + 1] + steps[k].work + steps[k].rest;
    var TOTAL = suffix[0] + READY / 1000;

    root.innerHTML =
      '<div class="app" data-state="watch" data-paused="false" data-mode="' + cfg.mode + '">' +
      '<header class="top"><div class="title-block">' +
      '<a class="back hide-in-focus" href="#/workout">' + (session ? 'End workout' : 'All exercises') + '</a>' +
      '<p class="eyebrow"></p><h1></h1></div><p class="meta hide-in-focus"></p></header>' +
      (session ? '<div class="sess" aria-hidden="true"><div class="sess-fill"></div></div>' : '') +
      '<main class="grid"><section class="stage-wrap" aria-label="Demonstration">' +
      '<div class="stage"><div class="svg-slot"></div>' +
      '<div class="phase" aria-hidden="true"><div class="phase-word"></div><div class="phase-breath"></div><div class="phase-sub"></div></div>' +
      '<div class="breath" data-mode="none" aria-hidden="true"><svg viewBox="0 0 100 100"><circle class="b-track" cx="50" cy="50" r="46"/><circle class="b-fill" cx="50" cy="50" r="20"/></svg><span class="b-label"></span></div>' +
      '<div class="flash" data-kind="work" aria-hidden="true"></div></div>' +
      '<div class="tempo" aria-hidden="true"><div class="tempo-track"></div><div class="tempo-row tempo-labels hide-in-focus"></div><div class="tempo-row tempo-breath hide-in-focus"></div></div>' +
      '<p class="tempo-note hide-in-focus"></p></section>' +
      '<section class="panel" aria-label="Timer and instructions"><div class="clock"><div class="ring-wrap">' +
      '<svg class="ring" viewBox="0 0 140 140" aria-hidden="true"><circle class="ring-track" cx="70" cy="70" r="60"/><circle class="ring-prog" cx="70" cy="70" r="60" transform="rotate(-90 70 70)"/></svg>' +
      '<div class="ring-num"><span class="num"></span><span class="ring-unit"></span></div></div>' +
      '<div class="clock-info"><span class="pill">Preview</span><p class="clock-line hide-in-focus"></p><p class="next"></p></div></div>' +
      '<div class="controls"><button class="btn btn-main" type="button">Start</button>' +
      '<button class="btn btn-second hide-in-focus" type="button">Skip</button>' +
      '<button class="btn btn-beep hide-in-focus" type="button" aria-pressed="false">Beeps off</button></div>' +
      '<details class="howto hide-in-focus"><summary>Form tips</summary><ol></ol><div class="adjust"></div></details>' +
      (session ? '<details class="plan hide-in-focus"><summary>Today\'s full list</summary><ol class="plan-list"></ol></details>' : '') +
      '</section></main><p class="sr-only" aria-live="polite"></p></div>';

    var appEl = root.querySelector('.app');
    var q = function (sel) { return appEl.querySelector(sel); };
    var slot = q('.svg-slot'), eyebrowEl = q('.eyebrow'), h1El = q('h1'), metaEl = q('.meta'), noteEl = q('.tempo-note');
    var tipsEl = q('.howto ol'), adjustEl = q('.howto .adjust'), howtoEl = q('.howto'), unitEl = q('.ring-unit'), nextEl = q('.next');
    var phaseWord = q('.phase-word'), phaseBreath = q('.phase-breath'), phaseSub = q('.phase-sub');
    var breathEl = q('.breath'), bFill = q('.b-fill'), bLabel = q('.b-label'), flashEl = q('.flash');
    var numEl = q('.num'), ringNum = q('.ring-num'), ringProg = q('.ring-prog'), pill = q('.pill'), clockLine = q('.clock-line');
    var live = q('.sr-only'), btnMain = q('.btn-main'), btnSecond = q('.btn-second'), btnBeep = q('.btn-beep');
    var track = q('.tempo-track'), labelsRow = q('.tempo-labels'), breathRow = q('.tempo-breath'), sessFill = q('.sess-fill');
    var CIRC = 2 * Math.PI * 60;
    ringProg.setAttribute('stroke-dasharray', CIRC.toFixed(2));

    if (session) {
      q('.plan-list').innerHTML = steps.map(function (s) {
        return '<li><span>' + esc(X[s.id].name) + '</span><span>' + esc(s.block) + (s.label ? ' · ' + esc(s.label) : '') + ' · ' + fmt(s.work, s.work > 99) + (s.work > 99 ? ' min' : ' s') + '</span></li>';
      }).join('');
    }

    /* ---- current step ---- */
    var cur = -1, step, ex, WORK, REST, longClock, next, fig, readyPose, readyText, UI, finishInfo = null;
    var cache = {};
    function load(i) {
      cur = i; step = steps[i]; ex = X[step.id]; E.prepare(ex);
      WORK = step.work * 1000; REST = step.rest * 1000; longClock = WORK > 99000;
      next = steps[i + 1] ? X[steps[i + 1].id] : null;
      slot.innerHTML = '';
      fig = new E.Figure(newSvg(slot, ex.name + ': animated demonstration'), ex);
      readyPose = (ex.ready && ex.ready.pose) || ex.rep[0].from;
      readyText = (ex.ready && ex.ready.text) || 'Get into position';
      useRep(ex.rep);
      cache = {};
      h1El.textContent = ex.name;
      var timing = REST ? (step.work + ' s work, ' + step.rest + ' s rest') : (longClock ? fmt(step.work, true) + ' minutes' : step.work + ' seconds');
      if (ex.switchAt) timing += ' · ' + ex.switchAt.text.toLowerCase() + ' halfway';
      metaEl.textContent = session ? 'Move ' + (i + 1) + ' of ' + N + ' · ' + timing : timing;
      noteEl.textContent = ex.note || '';
      tipsEl.innerHTML = (ex.tips || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
      adjustEl.innerHTML = (ex.adjust || []).map(function (a) { return '<p><strong>' + esc(a[0]) + '</strong> ' + esc(a[1]) + '</p>'; }).join('');
      howtoEl.hidden = !(ex.tips && ex.tips.length);
      unitEl.textContent = longClock ? 'minutes' : 'seconds';
      setNext();
      UI = {
        watch: { pill: 'Preview', line: session ? 'Press Start. ' + cfg.minutes + ' minutes, one move after another, all on its own. You get 10 seconds to get in place.' : 'Press Start. You get 10 seconds to get in place.' },
        ready: { pill: 'Get ready', line: readyText + '.', word: 'Get ready' },
        work: { pill: step.block === 'Finisher' ? 'All out' : 'Work', line: step.block === 'Test' ? step.label + '.' : 'Copy the figure.' },
        rest: { pill: 'Rest', line: 'Follow the breathing circle.', word: 'Rest' },
        done: { pill: 'Done', line: next ? 'Next up: ' + next.name + '.' : 'That was the last one in ' + cfg.title + '.', word: 'Done' }
      };
      document.title = ex.name + ' · Winter Arc';
    }
    function setNext(upcoming) {
      if (upcoming) nextEl.innerHTML = 'Up next: <strong>' + esc(ex.name) + '</strong>';
      else if (next) nextEl.innerHTML = 'Next: <strong>' + esc(next.name) + '</strong>';
      else nextEl.innerHTML = session ? 'Last one. Then you are done.' : 'Last one in ' + esc(cfg.title);
    }
    function eyebrowText() {
      if (!session) return cfg.title + ' · Exercise ' + (cur + 1) + ' of ' + N;
      return step.block + (step.label ? ' · ' + step.label : '');
    }

    /* Tempo bar from the active rep */
    var rep, lungs, phaseSeg, segEls, playhead, activeSeg = -1;
    function useRep(r) {
      rep = r;
      var L = 0.1;
      for (var pass = 0; pass < 2; pass++) {
        lungs = [];
        rep.forEach(function (ph) {
          var a = L, b = ph.breath === 'in' ? 1 : ph.breath === 'out' ? 0.15 : a;
          lungs.push([a, b]); L = b;
        });
      }
      var segs = [], total = 0;
      phaseSeg = [];
      rep.forEach(function (ph) {
        total += ph.dur;
        var last = segs[segs.length - 1];
        if (last && last.key === ph.key) last.dur += ph.dur;
        else segs.push({ key: ph.key, dur: ph.dur, word: ph.word });
        phaseSeg.push(segs.length - 1);
      });
      track.innerHTML = segs.map(function (sg, i) { return '<span class="seg" data-i="' + i + '" style="flex-grow:' + sg.dur + '"></span>'; }).join('') + '<span class="playhead"></span>';
      labelsRow.innerHTML = segs.map(function (sg) {
        return '<span style="flex-grow:' + sg.dur + '">' + (sg.dur / total > 0.09 ? esc(sg.word) : '') + '</span>';
      }).join('');
      var bsegs = [];
      rep.forEach(function (ph) {
        var last = bsegs[bsegs.length - 1];
        if (last && last.b === ph.breath) last.dur += ph.dur; else bsegs.push({ b: ph.breath, dur: ph.dur });
      });
      breathRow.innerHTML = bsegs.map(function (b) {
        return '<span style="flex-grow:' + b.dur + '">' + (b.dur / total > 0.12 ? esc(BREATH_SHORT[b.b] || '') : '') + '</span>';
      }).join('');
      segEls = track.querySelectorAll('.seg');
      playhead = track.querySelector('.playhead');
      activeSeg = -1;
    }

    /* Optional beeps (off by default; music plays separately) */
    var beepsOn = false;
    try { beepsOn = localStorage.getItem('wa-beeps') === 'on'; } catch (e) {}
    var actx = null;
    function unlockAudio() {
      if (!beepsOn) return;
      try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) {}
    }
    function tone(freq, dur, vol) {
      if (!beepsOn || !actx) return;
      try {
        var o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
        o.type = 'sine'; o.frequency.value = freq;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + dur + 0.02);
      } catch (e) {}
    }

    /* Keep the screen on while running */
    var wakeLock = null;
    function keepAwake() {
      try { if ('wakeLock' in navigator) navigator.wakeLock.request('screen').then(function (l) { wakeLock = l; }).catch(function () {}); } catch (e) {}
    }
    function releaseWake() { try { if (wakeLock) wakeLock.release(); } catch (e) {} wakeLock = null; }
    function onVis() { if (document.visibilityState === 'visible' && isRunning() && !paused) keepAwake(); }
    document.addEventListener('visibilitychange', onVis);

    function flash(text, kind) {
      flashEl.textContent = text; flashEl.setAttribute('data-kind', kind);
      flashEl.classList.remove('on'); void flashEl.offsetWidth; flashEl.classList.add('on');
    }
    function tick() { ringNum.classList.remove('tick'); void ringNum.offsetWidth; ringNum.classList.add('tick'); }

    var state = 'watch', paused = false, remaining = 0, total = 1, switched = false, restWord = 'Rest', restSub = '';
    var animT = 0, idleT = 0, clk = 0, lastSec = -1, last = performance.now(), raf = 0;
    function setText(el, key, v) { if (cache[key] !== v) { el.textContent = v; cache[key] = v; } }
    function setNum(n) {
      var str = fmt(n, longClock);
      if (cache.num === str) return;
      cache.num = str;
      numEl.innerHTML = str.split('').map(function (c) { return '<span class="' + (c === ':' ? 'colon' : 'dg') + '">' + c + '</span>'; }).join('');
    }
    function isRunning() { return state === 'ready' || state === 'work' || state === 'rest'; }
    function syncButtons() {
      if (state === 'watch') btnMain.textContent = 'Start';
      else if (state === 'done') btnMain.textContent = session ? 'Home' : (next ? 'Next exercise' : 'All exercises');
      else btnMain.textContent = paused ? 'Resume' : 'Pause';
      btnSecond.textContent = state === 'done' ? 'Again' : 'Skip';
      btnSecond.disabled = !(isRunning() || (state === 'done' && !session));
      btnSecond.hidden = session && state === 'done';
      btnBeep.textContent = beepsOn ? 'Beeps on' : 'Beeps off';
      btnBeep.setAttribute('aria-pressed', String(beepsOn));
    }
    function enter(st, dur) {
      state = st; paused = false; switched = false;
      if (dur == null) dur = { ready: READY, work: WORK, rest: REST }[st];
      if (dur) { remaining = total = dur; } else { remaining = 0; total = 1; }
      lastSec = Math.ceil(remaining / 1000);
      if (st === 'work' || st === 'watch') animT = 0;
      if (st === 'ready' || st === 'rest') idleT = 0;
      if (rep !== ex.rep) useRep(ex.rep);
      fig.setMirror(false);
      appEl.setAttribute('data-state', st);
      appEl.setAttribute('data-paused', 'false');
      pill.textContent = UI[st].pill;
      clockLine.textContent = UI[st].line;
      syncButtons();
      if (st === 'ready') live.textContent = 'Get ready. 10 seconds. ' + ex.name + '.';
      if (st === 'work') {
        var prev = steps[cur - 1], fresh = session && prev && prev.block !== step.block && FLASH_BLOCKS[step.block];
        setNext();
        flash(fresh ? step.block : 'Go', 'work'); tone(988, 0.45, 0.3); live.textContent = 'Work. ' + ex.name + '.';
      }
      if (st === 'rest') { flash(restWord, 'air'); tone(988, 0.45, 0.3); live.textContent = restWord + '.' + (next || session ? ' Next: ' + (session ? ex.name : next.name) + '.' : ''); }
      if (st === 'done') { flash(session ? 'Day done' : 'Done', 'ink'); tone(988, 0.45, 0.3); live.textContent = 'Done.'; releaseWake(); }
    }
    /* In a session the rest after a move already shows the next move, in its start position. */
    function afterWork() {
      var r = step.rest * 1000;
      if (!session) { enter(r ? 'rest' : 'done', r); return; }
      if (cur + 1 >= N) { finish(); return; }
      var prevBlock = step.block;
      load(cur + 1);
      if (!r) { enter('work'); return; }
      var longBreak = r >= 45000, newBlock = step.block !== prevBlock;
      restWord = newBlock ? step.block + ' next' : longBreak ? 'Break' : r <= 10000 ? 'Next move' : 'Rest';
      restSub = (longBreak ? 'drink some water · ' : '') + 'next: ' + ex.name.toLowerCase();
      UI.rest.line = 'Up next: ' + ex.name + '. ' + readyText + '.';
      setNext(true);
      enter('rest', r);
    }
    function finish() {
      if (cfg.onFinish && !finishInfo) finishInfo = cfg.onFinish() || {};
      UI.done.line = finishInfo && finishInfo.line ? finishInfo.line : 'Done.';
      enter('done');
      nextEl.innerHTML = finishInfo && finishInfo.next ? finishInfo.next : '';
      q('.back').textContent = 'Home';
    }
    function nextState() {
      if (state === 'ready') enter('work');
      else if (state === 'work') afterWork();
      else if (state === 'rest') { if (session) enter('work'); else enter('done'); }
    }
    function mainAction() {
      if (state === 'watch') { unlockAudio(); keepAwake(); enter('ready'); return; }
      if (state === 'done') { go(session ? '#/' : (cfg.nextHref || '#/workout')); return; }
      paused = !paused;
      appEl.setAttribute('data-paused', String(paused));
      clockLine.textContent = paused ? 'Paused. Press Resume when you are ready.' : UI[state].line;
      if (paused) live.textContent = 'Paused.'; else keepAwake();
      syncButtons();
    }
    btnMain.addEventListener('click', mainAction);
    btnSecond.addEventListener('click', function () {
      if (state === 'done' && !session) { unlockAudio(); keepAwake(); enter('ready'); }
      else if (isRunning()) nextState();
    });
    btnBeep.addEventListener('click', function () {
      beepsOn = !beepsOn;
      try { localStorage.setItem('wa-beeps', beepsOn ? 'on' : 'off'); } catch (e) {}
      unlockAudio(); syncButtons();
    });
    function onKey(e) { if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); mainAction(); } }
    document.addEventListener('keydown', onKey);

    function secondsLeft() {
      var r = Math.max(0, remaining) / 1000;
      if (state === 'watch') return TOTAL;
      if (state === 'ready') return r + suffix[cur];
      if (state === 'work') return r + step.rest + suffix[cur + 1];
      if (state === 'rest') return r + suffix[cur];
      return 0;
    }

    function render() {
      var key, J, L = 0.1, mode = 'none', pos = 0, word, br, sub;
      if (state === 'watch' || state === 'work') {
        var smp = fig.sample(rep, animT), ph = smp.phase, lg = lungs[smp.index];
        J = smp.J; key = ph.key;
        mode = ph.breath || 'easy';
        L = mode === 'easy' ? 0.5 + 0.3 * Math.sin(clk / 900) : lg[0] + (lg[1] - lg[0]) * E.ease(smp.f);
        pos = (((animT % smp.total) + smp.total) % smp.total) / smp.total;
        word = ph.word; br = ph.breathText || BREATH_TEXT[mode]; sub = ph.sub || '';
        var si = phaseSeg[smp.index];
        if (si !== activeSeg) {
          if (segEls[activeSeg]) segEls[activeSeg].classList.remove('on');
          if (segEls[si]) segEls[si].classList.add('on');
          activeSeg = si;
        }
      } else {
        J = fig.still(readyPose);
        if (state === 'done') {
          key = 'done'; word = session ? 'Day done' : 'Done'; br = 'Nice work';
          sub = session ? (finishInfo && finishInfo.sub) || 'see you tomorrow' : (next ? 'next: ' + next.name.toLowerCase() : 'all done here');
        } else {
          var c = idleT % 10000;
          if (c < 4000) { mode = 'in'; L = 0.1 + 0.9 * E.ease(c / 4000); br = 'Breathe in'; }
          else { mode = 'out'; L = 1 - 0.9 * E.ease((c - 4000) / 6000); br = 'Breathe out'; }
          key = state;
          if (state === 'ready') { word = UI.ready.word; sub = readyText.toLowerCase(); }
          else if (session) { word = restWord; sub = restSub; }
          else { word = UI.rest.word; sub = next ? 'next: ' + next.name.toLowerCase() : 'slow breaths'; }
        }
        if (activeSeg >= 0 && segEls[activeSeg]) { segEls[activeSeg].classList.remove('on'); activeSeg = -1; }
      }
      if (paused) { sub = 'paused'; mode = 'none'; }
      fig.draw(J, L);
      fig.air(mode === 'easy' ? 'none' : mode, clk);
      fig.showGuides(key);
      setText(phaseWord, 'w', word);
      setText(phaseBreath, 'b', br);
      setText(phaseSub, 's', sub);
      if (cache.mode !== mode) { breathEl.setAttribute('data-mode', mode); cache.mode = mode; }
      bFill.setAttribute('r', (14 + 32 * L).toFixed(1));
      setText(bLabel, 'bl', RING_LABEL[mode] || '');
      playhead.style.left = (pos * 100).toFixed(2) + '%';
      var n, frac;
      if (state === 'watch') { n = WORK / 1000; frac = 1; }
      else if (state === 'done') { n = 0; frac = 0; }
      else { n = Math.max(0, Math.ceil(remaining / 1000)); frac = Math.max(0, remaining) / total; }
      setNum(n);
      ringProg.setAttribute('stroke-dashoffset', (CIRC * (1 - frac)).toFixed(2));
      var eb = eyebrowText();
      if (session) {
        var left = Math.ceil(secondsLeft());
        if (state !== 'done') eb += ' · ' + fmt(left, true) + ' left';
        else eb = cfg.title + ' · complete';
        var fr = state === 'watch' ? 0 : 1 - left / TOTAL;
        if (cache.fr !== Math.round(fr * 400)) { cache.fr = Math.round(fr * 400); sessFill.style.width = (fr * 100).toFixed(2) + '%'; }
      }
      setText(eyebrowEl, 'eb', eb);
    }

    function frame(now) {
      var dt = Math.min(100, now - last); last = now;
      if (isRunning() && !paused) {
        remaining -= dt;
        if (state === 'work' && ex.switchAt && !switched && remaining <= total / 2) {
          switched = true;
          flash(ex.switchAt.text, 'work');
          if (ex.switchAt.mirror) fig.setMirror(true);
          if (ex.switchAt.rep2 && ex.rep2) useRep(ex.rep2);
          animT = 0;
        }
        var sec = Math.max(0, Math.ceil(remaining / 1000));
        if (sec !== lastSec) { lastSec = sec; if (sec >= 1 && sec <= 3) { tick(); tone(740, 0.12, 0.25); } }
        if (remaining <= 0) nextState();
      }
      if (!paused) {
        if (state === 'watch' || state === 'work') animT += dt;
        idleT += dt; clk += dt;
      }
      render();
      raf = requestAnimationFrame(frame);
    }

    load(cfg.start || 0);
    enter('watch');
    render();
    raf = requestAnimationFrame(frame);

    return {
      destroy: function () {
        cancelAnimationFrame(raf);
        releaseWake();
        document.removeEventListener('visibilitychange', onVis);
        document.removeEventListener('keydown', onKey);
      }
    };
  }

  function showLibraryItem(sid, idx) {
    var s = sessionById(sid);
    if (!s || !s.items[idx]) { setTimeout(function () { go('#/workout'); }, 0); return { destroy: function () {} }; }
    var steps = s.items.map(function (it) {
      var ex = X[itemId(it)];
      return { id: ex.id, work: (typeof it === 'object' && it.work) || s.work || ex.work || 30, rest: s.rest != null ? s.rest : (ex.rest != null ? ex.rest : 30), block: s.name, label: '' };
    });
    return showPlayer({ mode: 'single', steps: steps, start: idx, title: s.name, nextHref: s.items[idx + 1] ? '#/s/' + sid + '/' + (idx + 1) : '#/workout' });
  }

  function showDay(day, mode) {
    var d = PROGRAM.build(day, mode);
    return showPlayer({
      mode: 'session', steps: d.steps, start: 0, minutes: d.minutes, title: 'Day ' + day + ' · ' + d.name,
      onFinish: function () {
        var tomorrow = PROGRAM.build(day + 1);
        return {
          line: 'Day ' + day + ' done. Tomorrow: ' + tomorrow.name + ', ' + tomorrow.minutes + ' minutes.',
          sub: 'see you tomorrow'
        };
      }
    });
  }

  /* ---------------- Router ---------------- */
  function route(override) {
    if (view) view.destroy();
    var hash = typeof override === 'string' ? override : (location.hash || window.WA_START || '');
    var parts = hash.replace(/^#\/?/, '').split('/');
    if (parts[0] === 's' && parts[1]) view = showLibraryItem(parts[1], parseInt(parts[2], 10) || 0);
    else if (parts[0] === 'day' && parseInt(parts[1], 10) >= 1) view = showDay(parseInt(parts[1], 10), parts[2] === 'short' ? 'short' : 'full');
    else if (parts[0] === 'today') view = showDay(todayDay(), 'full');
    else if (parts[0] === 'check') view = showCheck(parts[1]);
    else if (parts[0] === 'workout') view = showWorkout();
    else view = WA.showHub(root);
    window.scrollTo(0, 0);
  }
  /* Real pages route by the address bar; a self-contained preview copy (data: or about: page) routes in memory. */
  var canHash = /^(https?|file):$/.test(location.protocol);
  function go(h) { if (canHash) location.hash = h; else route(h); }
  document.addEventListener('click', function (e) {
    if (canHash || e.defaultPrevented || e.button !== 0) return;
    var a = e.target.closest && e.target.closest('a[href^="#/"], a[href="#/"]');
    if (!a) return;
    e.preventDefault();
    route(a.getAttribute('href'));
  });
  window.addEventListener('hashchange', function () { route(); });
  WA.go = route;
  route();
})();
