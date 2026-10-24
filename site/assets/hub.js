/* Winter Arc home: a cold night scene (falling snow, mountains, one figure training in the snow with steaming breath),
   a few words of motivation for the day, and the doors to each part of the site: workout now, food and care next. */
(function () {
  'use strict';
  var WA = window.WA, E = WA.engine, X = WA.exercises, PROGRAM = WA.program;
  var NS = 'http://www.w3.org/2000/svg';

  /* Short lines, one per day. Original wording, kept to a few words. */
  var QUOTES = [
    ["Don't think.", 'Start.'], ['Cold outside.', 'Fire inside.'], ['Earn', 'the warm.'], ['Show up.', 'Again.'],
    ['Quiet work.', 'Loud results.'], ['Small. Daily.', 'Forever.'], ['No one is coming.', 'Go.'], ['Breathe out.', 'Begin.'],
    ['Discomfort is', 'the price.'], ['Today', 'counts.'], ['Be the one', 'who shows up.'], ['Winter builds', 'what summer shows.'],
    ['Stay hard.', 'Stay calm.'], ['Motivation fades.', 'Habits stay.'], ['One more day', 'of proof.'], ['Less scrolling.', 'More living.'],
    ['Tired is fine.', 'Quitting is not.'], ['Your future self', 'is watching.'], ['Slow is fine.', 'Stopping is not.'], ['Do it', 'for the quiet you.'],
    ['Strong body.', 'Clear mind.'], ['The cold', 'makes you.'], ['Hard now.', 'Easy later.'], ['Make yourself', 'proud.'],
    ['Thirty minutes.', 'No excuses.'], ['Every rep', 'is a vote.'], ['Calm mind.', 'Heavy breath.'], ['Begin', 'before you feel ready.'],
    ['You promised.', 'Keep it.'], ['Snow falls quietly.', 'So does progress.']
  ];
  /* The figure in the snow does a move from today's workout. */
  var HERO_MOVE = { A: 'goblet-squat', hiit: 'high-knee-march', B: 'db-swing', burn: 'squat-knee', full: 'thruster', core: 'reach-hinge', reset: 'walk' };
  var DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'], MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pad3(n) { return ('00' + n).slice(-3); }
  function shortDate(d) { return d.getDate() + ' ' + MONTHS[d.getMonth()]; }
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /* Snow cap that sits on a peak: follows both slopes down a little, with a ragged lower edge. */
  function cap(peak, left, right, f) {
    function at(a, k) { return [peak[0] + (a[0] - peak[0]) * k, peak[1] + (a[1] - peak[1]) * k]; }
    var l = at(left, f), r = at(right, f), pts = [peak, r];
    for (var i = 1; i <= 4; i++) {
      var k = i / 5, x = r[0] + (l[0] - r[0]) * k, y = r[1] + (l[1] - r[1]) * k;
      pts.push([x, y + (i % 2 ? -7 : 5)]);
    }
    pts.push(l);
    return 'M' + pts.map(function (q) { return q[0].toFixed(0) + ' ' + q[1].toFixed(0); }).join(' L') + 'Z';
  }

  /* Static landscape, drawn once: sky, a low cold moon, three mountain layers with snow caps, a snow field, footprints. */
  function sceneSvg() {
    var farCaps = cap([230, 452], [140, 540], [300, 500], 0.4) + cap([600, 430], [520, 488], [680, 486], 0.42) +
      cap([760, 452], [680, 486], [860, 520], 0.32) + cap([1090, 446], [1010, 512], [1160, 492], 0.4);
    var midCaps = cap([300, 506], [190, 574], [390, 566], 0.36) + cap([660, 520], [560, 584], [760, 580], 0.36) + cap([1060, 532], [960, 596], [1200, 590], 0.3);
    return '<svg class="hub-scene" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#02050a"/><stop offset=".45" stop-color="#081523"/><stop offset=".72" stop-color="#16314a"/><stop offset=".86" stop-color="#3f6582"/><stop offset="1" stop-color="#8fb2c8"/></linearGradient>' +
      '<radialGradient id="hs-glow" cx=".68" cy=".8" r=".55"><stop offset="0" stop-color="#bcd8ea" stop-opacity=".45"/><stop offset="1" stop-color="#bcd8ea" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="hs-snow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f1f6"/><stop offset=".5" stop-color="#c9d8e3"/><stop offset="1" stop-color="#90a7b8"/></linearGradient>' +
      '<filter id="hs-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>' +
      '<filter id="hs-vap" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3.2"/></filter>' +
      '<radialGradient id="hs-moon"><stop offset="0" stop-color="#dcebf6" stop-opacity=".22"/><stop offset=".35" stop-color="#cfe3f1" stop-opacity=".08"/><stop offset="1" stop-color="#cfe3f1" stop-opacity="0"/></radialGradient>' +
      '</defs>' +
      '<rect width="1200" height="800" fill="url(#hs-sky)"/>' +
      '<circle cx="772" cy="300" r="190" fill="url(#hs-moon)"/>' +
      '<circle cx="772" cy="300" r="26" fill="#edf4f9"/>' +
      '<rect width="1200" height="800" fill="url(#hs-glow)"/>' +
      /* far range */
      '<path d="M0 560 L70 520 L140 540 L230 452 L300 500 L360 470 L450 528 L520 488 L600 430 L680 486 L760 452 L860 520 L930 470 L1010 512 L1090 446 L1160 492 L1200 476 L1200 640 L0 640Z" fill="#203b52"/>' +
      '<path d="' + farCaps + '" fill="#7f9db4" opacity=".6"/>' +
      /* middle range with snow caps */
      '<path d="M0 600 L110 548 L190 574 L300 506 L390 566 L470 530 L560 584 L660 520 L760 580 L850 540 L960 596 L1060 532 L1200 590 L1200 660 L0 660Z" fill="#11263a"/>' +
      '<path d="' + midCaps + '" fill="#b9cbd9" opacity=".85"/>' +
      /* near dark ridge */
      '<path d="M0 640 C160 610 280 628 400 618 C560 604 700 626 860 612 C1000 600 1110 618 1200 610 L1200 690 L0 690Z" fill="#0a1825"/>' +
      /* snow field */
      '<path d="M0 676 C220 660 420 690 600 684 C800 676 980 664 1200 672 L1200 800 L0 800Z" fill="url(#hs-snow)"/>' +
      '<ellipse cx="300" cy="740" rx="260" ry="16" fill="#a9bdcc" opacity=".45"/><ellipse cx="930" cy="760" rx="300" ry="18" fill="#a9bdcc" opacity=".4"/>' +
      /* footprints leading to the figure */
      '<g fill="#7f97aa" opacity=".7">' +
      '<ellipse cx="96" cy="784" rx="9" ry="3.2"/><ellipse cx="150" cy="772" rx="8.5" ry="3"/><ellipse cx="204" cy="764" rx="8" ry="3"/><ellipse cx="256" cy="752" rx="7.5" ry="2.8"/>' +
      '<ellipse cx="306" cy="744" rx="7" ry="2.6"/><ellipse cx="354" cy="734" rx="6.6" ry="2.5"/><ellipse cx="400" cy="727" rx="6.2" ry="2.3"/><ellipse cx="444" cy="719" rx="5.8" ry="2.2"/>' +
      '<ellipse cx="486" cy="713" rx="5.4" ry="2"/><ellipse cx="526" cy="707" rx="5" ry="1.9"/></g>' +
      '<ellipse cx="600" cy="700" rx="78" ry="7" fill="#6f879b" opacity=".45" filter="url(#hs-blur)"/>' +
      '<g class="hub-actor"></g><g class="hub-vapor"></g>' +
      '</svg>';
  }

  function showHub(root) {
    var now = new Date(), n = Math.max(1, PROGRAM.dayForDate(now)), today = PROGRAM.build(n);
    var q = QUOTES[(Math.max(1, PROGRAM.dayForDate(now)) - 1) % QUOTES.length];
    var startD = PROGRAM.start, endD = PROGRAM.dateForDay(PROGRAM.days), planDay = Math.min(PROGRAM.days, n);

    var ticks = '';
    for (var i = 1; i <= PROGRAM.days; i++) ticks += '<i class="' + (i < planDay ? 'gone' : i === planDay ? 'now' : '') + (i % 7 === 0 ? ' wk' : '') + '"></i>';

    root.innerHTML =
      '<div class="hub">' +
      '<section class="hub-hero">' + sceneSvg() + '<canvas class="hub-snow" aria-hidden="true"></canvas>' +
      '<header class="hub-top"><span class="hub-mark">Winter Arc</span><span class="hub-date">' + DAYS[now.getDay()] + ' ' + shortDate(now) + '</span></header>' +
      '<h1 class="hub-quote"><span>' + esc(q[0]) + '</span><span>' + esc(q[1]) + '</span></h1>' +
      '<p class="hub-readout"><span>Day ' + pad3(n) + ' / ' + pad3(PROGRAM.days) + '</span><span>Week ' + ('0' + today.week).slice(-2) + '</span></p>' +
      '</section>' +
      '<nav class="hub-menu" aria-label="Sections">' +
      '<div class="hub-row live">' +
      '<a class="hub-door" href="#/workout"><span class="hub-no">01</span><span class="hub-word">Workout</span>' +
      '<span class="hub-sub">Today · ' + esc(today.name) + ' · ' + today.minutes + ' min</span><span class="hub-arrow" aria-hidden="true">→</span></a>' +
      '<a class="hub-start" href="#/day/' + n + '"><span>Start today\'s workout</span><span aria-hidden="true">' + today.minutes + ':00</span></a>' +
      '</div>' +
      '<div class="hub-row live"><a class="hub-door" href="#/food"><span class="hub-no">02</span><span class="hub-word">Food</span>' +
      '<span class="hub-sub">Pick a dish · follow the steps</span><span class="hub-arrow" aria-hidden="true">→</span></a></div>' +
      '<div class="hub-row soon" aria-disabled="true"><div class="hub-door"><span class="hub-no">03</span><span class="hub-word">Care</span>' +
      '<span class="hub-sub">Skin, sleep, posture</span><span class="hub-tag">Soon</span></div></div>' +
      '</nav>' +
      '<section class="hub-arc" aria-label="The 84-day arc"><p class="hub-arc-head"><span>The arc</span><span>' + shortDate(startD) + ' → ' + shortDate(endD) + '</span></p>' +
      '<div class="hub-ticks" aria-hidden="true">' + ticks + '</div>' +
      '<p class="hub-arc-foot"><span>Day 1</span><span>Day 84</span></p></section>' +
      '<footer class="hub-foot">Earn the warm.</footer>' +
      '</div>';
    document.body.classList.add('is-hub');
    document.title = 'Winter Arc';

    var hero = root.querySelector('.hub-hero'), canvas = root.querySelector('.hub-snow');
    var actorG = root.querySelector('.hub-actor'), vaporG = root.querySelector('.hub-vapor');
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- the figure ---- */
    var ex = X[HERO_MOVE[today.kind]] || X['goblet-squat'];
    E.prepare(ex);
    var S = 0.72, TX = 600 - 330 * S, TY = 694 - 404 * S;
    var stage = el('g', { transform: 'translate(' + TX.toFixed(1) + ',' + TY.toFixed(1) + ') scale(' + S + ')' }, actorG);
    var fig = new E.Figure(stage, ex, { guides: false });
    var front = ex.view === 'front';

    /* ---- breath vapor: soft puffs from the mouth on every breath out ---- */
    var puffs = [], spawnAcc = 0;
    function puff(J) {
      var hx = TX + S * J.head.x, hy = TY + S * J.head.y;
      var dir = front ? { x: 0.15, y: -0.5 } : { x: J.hd ? -J.hd.y : 1, y: J.hd ? J.hd.x * 0.6 - 0.25 : -0.2 };
      var mx = hx + (front ? 0 : dir.x * 15), my = hy + (front ? 10 : 2);
      var c = el('circle', { cx: mx.toFixed(1), cy: my.toFixed(1), r: 3, fill: '#f2f8fc', opacity: 0, filter: 'url(#hs-vap)' }, vaporG);
      puffs.push({ c: c, x: mx, y: my, vx: dir.x * (26 + Math.random() * 14), vy: dir.y * 22 - 8, t: 0, life: 1500 + Math.random() * 500, r0: 3 + Math.random() * 2 });
    }
    function stepPuffs(dt) {
      for (var i = puffs.length - 1; i >= 0; i--) {
        var p = puffs[i]; p.t += dt;
        var k = p.t / p.life;
        if (k >= 1) { vaporG.removeChild(p.c); puffs.splice(i, 1); continue; }
        p.x += p.vx * dt / 1000; p.y += p.vy * dt / 1000; p.vy -= 6 * dt / 1000;
        p.c.setAttribute('cx', p.x.toFixed(1)); p.c.setAttribute('cy', p.y.toFixed(1));
        p.c.setAttribute('r', (p.r0 + 18 * Math.sqrt(k)).toFixed(1));
        p.c.setAttribute('opacity', (0.8 * Math.sin(Math.PI * Math.min(1, k * 1.6)) * (1 - k * 0.7)).toFixed(3));
      }
    }

    /* ---- snow ---- */
    var ctx = canvas.getContext && canvas.getContext('2d'), flakes = [], W = 0, H = 0, dpr = 1;
    function size() {
      var r = hero.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      var want = Math.min(260, Math.round(W * H / 6500));
      while (flakes.length < want) flakes.push(newFlake(true));
      flakes.length = want;
    }
    function newFlake(anywhere) {
      var z = Math.random();
      return { x: Math.random() * W, y: anywhere ? Math.random() * H : -6, r: 0.6 + z * z * 2.8, z: z, s: Math.random() * 6.28, a: 0.35 + z * 0.55 };
    }
    function drawSnow(dt, t) {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#ffffff';
      var wind = 14 + 10 * Math.sin(t / 5200);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += (18 + f.z * 52) * dt / 1000;
        f.x += (wind * (0.4 + f.z) + Math.sin(f.s + t / 1400) * 9) * dt / 1000;
        if (f.y > H + 6 || f.x > W + 8) { flakes[i] = newFlake(false); flakes[i].x = Math.random() * (W + 60) - 60; continue; }
        ctx.globalAlpha = f.a;
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    /* ---- loop ---- */
    var raf = 0, last = performance.now(), t = 0, alive = true;
    function frame(nowT) {
      if (!alive) return;
      var dt = Math.min(60, nowT - last); last = nowT; t += dt;
      var smp = fig.sample(ex.rep, t);
      fig.draw(smp.J, 0.4);
      var b = smp.phase.breath;
      spawnAcc += dt;
      var every = b === 'out' ? 140 : b === 'easy' ? 520 : 0;
      if (every && spawnAcc > every) { spawnAcc = 0; puff(smp.J); }
      stepPuffs(dt);
      drawSnow(dt, t);
      raf = requestAnimationFrame(frame);
    }
    function onResize() { size(); if (still) drawSnow(0, 0); }
    window.addEventListener('resize', onResize);
    size();
    if (still) {
      fig.draw(fig.still((ex.ready && ex.ready.pose) || ex.rep[0].from), 0.4);
      drawSnow(0, 0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return {
      destroy: function () {
        alive = false;
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        document.body.classList.remove('is-hub');
      }
    };
  }

  WA.showHub = showHub;
})();
