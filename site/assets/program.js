/* Winter Arc program: turns "day N" into one continuous ~30-minute session (a list of timed steps).
   A 7-day cycle repeats for 12 weeks. Work/rest gets harder every few weeks; the session length stays about the same. */
(function () {
  'use strict';
  var WA = window.WA = window.WA || {};

  var CYCLE = ['A', 'hiit', 'B', 'burn', 'full', 'core', 'reset'];
  var NAMES = {
    A: 'Strength A', hiit: 'Quiet HIIT', B: 'Strength B', burn: 'Plank + cardio burn',
    full: 'Full-body dumbbells', core: 'Core + stretch', reset: 'Reset day'
  };
  var DESC = {
    A: 'Dumbbells: squats, push-ups, rows, lunges, presses. Ends with a 4-minute all-out finisher.',
    hiit: 'Four quiet HIIT blocks, no jumping. Heart rate high the whole time.',
    B: 'Dumbbells: deadlifts, split squats, floor press, rows, lunges, leg raises. 4-minute finisher.',
    burn: 'Planks and standing cardio back to back. Up and down off the floor. 4-minute finisher.',
    full: 'Two-in-one dumbbell moves for the whole body. 5-minute finisher.',
    core: 'Easier day: slow core work, then a long stretch.',
    reset: 'Easy day: walk around your home, stretch, breathe.'
  };
  var LISTS = {
    warmup: ['march', 'arm-circles', 'hip-circles', 'warmup-squat', 'inchworm'],
    A: ['goblet-squat', 'chair-pushup', 'alt-row', 'reverse-lunge-curl', 'seated-press', 'plank-updown'],
    B: ['rdl', 'db-split-squat', 'floor-press', 'one-arm-row', 'side-lunge-raise', 'db-leg-raise'],
    burn: ['shoulder-taps', 'squat-knee', 'plank-updown', 'skater-steps', 'flutter-kicks', 'high-knee-march'],
    full: ['sumo-curl', 'renegade-row', 'deadlift-squat', 'overhead-extension', 'curl-press', 'bridge-press', 'pushup-climber', 'side-plank'],
    hiit: [
      ['step-jacks', 'squat-knee', 'burpee', 'knee-elbow', 'superman-pull'],
      ['high-knee-march', 'squat-calf', 'kick-toe-touch', 'in-out-steps', 'glute-bridge'],
      ['rope-skip', 'lunge-kick', 'inchworm', 'side-crunch', 'heel-touch'],
      ['skater-steps', 'shoulder-taps', 'squat-pulse', 'mountain-climber', 'kickback']
    ],
    core: ['bird-dog', 'superman', 'side-plank-knees', 'heel-bridge', 'seated-punches', 'knee-plank'],
    coreStretch: ['cat-cow', 'hip-flexor', 'cobra', 'butterfly', 'lying-hamstring', 'seated-glute', 'childs-pose'],
    resetStretch: ['chest-opener', 'standing-side-bend', 'hamstring-stretch', 'hip-flexor', 'neck-rolls', 'knee-hug', 'childs-pose'],
    cooldown: ['chest-opener', 'hamstring-stretch', 'childs-pose']
  };
  var FINISHER = { A: ['thruster', 'mountain-climber'], B: ['db-swing', 'burpee'], burn: ['burpee', 'mountain-climber'], full: ['squat-pulse', 'in-out-steps'] };

  /* Harder every phase: more work, less rest, same minutes. */
  function params(week) {
    var w = ((week - 1) % 12) + 1;
    if (w <= 2) return { work: 40, rest: 20, phase: 'Weeks 1–2' };
    if (w <= 6) return { work: 45, rest: 15, phase: 'Weeks 3–6' };
    return { work: 50, rest: 10, phase: 'Weeks 7–12' };
  }

  function info(day) {
    var week = Math.ceil(day / 7), kind = CYCLE[(day - 1) % 7];
    return { day: day, week: week, kind: kind, name: NAMES[kind], desc: DESC[kind], test: kind === 'reset' && week % 2 === 0 };
  }

  function step(id, work, rest, block, label) { return { id: id, work: work, rest: rest, block: block, label: label || '' }; }

  function warmup(out, n) {
    var ids = LISTS.warmup.slice(0, n || LISTS.warmup.length);
    ids.forEach(function (id, i) { out.push(step(id, 40, 5, 'Warm-up', (i + 1) + ' of ' + ids.length)); });
  }
  /* rounds of a list; 60 s break after each round (water, breathe) */
  function circuit(out, block, ids, rounds, p, roundWord) {
    for (var r = 1; r <= rounds; r++) {
      ids.forEach(function (id, i) {
        out.push(step(id, p.work, i === ids.length - 1 ? 60 : p.rest, block, (roundWord || 'Round') + ' ' + r + ' of ' + rounds));
      });
    }
  }
  function finisher(out, pair, sets) {
    for (var i = 1; i <= sets; i++) out.push(step(pair[(i - 1) % 2], 20, 10, 'Finisher', 'Set ' + i + ' of ' + sets + ' · all out'));
  }
  function list(out, ids, work, block) {
    ids.forEach(function (id, i) { out.push(step(id, work, 5, block, (i + 1) + ' of ' + ids.length)); });
  }
  function cooldown(out) {
    list(out, LISTS.cooldown, 40, 'Cool-down');
    out.push(step('breathing', 60, 0, 'Cool-down', 'Slow breaths'));
  }

  function build(day, mode) {
    var d = info(day), p = params(d.week), s = [];
    d.phase = p.phase;
    if (mode === 'short') {
      /* "No time today": still something, never zero */
      warmup(s, 2);
      if (d.kind === 'reset' || d.kind === 'core') s.push(step('walk', 300, 5, 'Walk'));
      else circuit(s, d.name, d.kind === 'hiit' ? LISTS.hiit[0] : LISTS[d.kind], 1, { work: 40, rest: 15 });
      s.push(step('breathing', 60, 0, 'Breathing', 'Slow breaths'));
      d.name += ' · short';
    } else if (d.kind === 'A' || d.kind === 'B' || d.kind === 'burn') {
      warmup(s);
      circuit(s, d.name, LISTS[d.kind], 3, p);
      finisher(s, FINISHER[d.kind], 8);
      cooldown(s);
    } else if (d.kind === 'full') {
      warmup(s);
      circuit(s, d.name, LISTS.full, 2, p);
      finisher(s, FINISHER.full, 10);
      cooldown(s);
    } else if (d.kind === 'hiit') {
      warmup(s);
      LISTS.hiit.forEach(function (ids, b) { circuit(s, 'Quiet HIIT', ids, 1, p, 'Block ' + (b + 1) + ' of 4 ·'); });
      s.forEach(function (x) { x.label = x.label.replace(/ Round 1 of 1$/, '').replace(/ · 1 of 1$/, ''); });
      cooldown(s);
    } else if (d.kind === 'core') {
      warmup(s);
      circuit(s, 'Core', LISTS.core, 2, { work: 40, rest: 20 });
      list(s, LISTS.coreStretch, 60, 'Stretch');
      s.push(step('breathing', 120, 0, 'Breathing', 'Slow breaths'));
    } else {
      if (d.test) {
        warmup(s);
        s.push(step('pushup', 60, 60, 'Test', 'Count your push-ups'));
        s.push(step('squat', 60, 60, 'Test', 'Count your squats'));
        s.push(step('plank', 60, 30, 'Test', 'Hold as long as you can'));
      }
      s.push(step('walk', d.test ? 480 : 900, 5, 'Walk', 'Easy pace'));
      list(s, LISTS.resetStretch, 60, 'Stretch');
      s.push(step('breathing', 180, 0, 'Breathing', 'Slow breaths'));
    }
    /* a rest right before a new block becomes the break before it */
    s[s.length - 1].rest = 0;
    var seconds = 10;
    s.forEach(function (x) { seconds += x.work + x.rest; });
    var blocks = [];
    s.forEach(function (x) {
      var last = blocks[blocks.length - 1];
      if (last && last.name === x.block) last.seconds += x.work + x.rest;
      else blocks.push({ name: x.block, seconds: x.work + x.rest });
    });
    d.steps = s; d.seconds = seconds; d.minutes = Math.round(seconds / 60); d.blocks = blocks; d.mode = mode || 'full';
    return d;
  }

  WA.program = { build: build, info: info, params: params, lists: LISTS, cycle: CYCLE, names: NAMES, days: 84 };
})();
