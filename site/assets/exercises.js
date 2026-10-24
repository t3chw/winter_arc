/* Winter Arc exercise library (weeks 1-4 versions + test day).
   Each exercise: poses (segment angles, see engine.js), a looping rep of timed phases with
   breathing, and guides (hint text, rings, lines, paths) shown during specific phases. */
(function () {
  'use strict';
  var WA = window.WA = window.WA || {};
  var X = WA.exercises = {};

  function P(o) {
    var p = {};
    for (var k in o) if (k !== 'b') p[k] = o[k];
    if (o.b) {
      p.n = Object.assign({}, o.b, o.n || {});
      p.f = Object.assign({}, o.b, o.f || {});
    }
    return p;
  }
  function def(ex) { X[ex.id] = ex; return ex; }
  function variant(baseId, over) {
    var b = JSON.parse(JSON.stringify(X[baseId]));
    for (var k in over) b[k] = over[k];
    return def(b);
  }

  var STAND = { point: 'nAnkle', at: [330, 392] };
  var MAT = [250, 300];
  var HANDS_ON_HIPS = { ua: -25, fa: 45 };

  WA.exHelpers = { P: P, def: def, variant: variant, STAND: STAND, MAT: MAT, HANDS_ON_HIPS: HANDS_ON_HIPS };

  /* ======================= STRENGTH A ======================= */

  def({
    id: 'squat', name: 'Bodyweight squat', scene: { mat: MAT }, anchor: STAND,
    poses: {
      stand: P({ t: 176, h: 178, b: { ua: 6, fa: 10 } }),
      bottom: P({ t: 140, h: 162, b: { ua: 55, fa: 150, th: 88, sh: -30 } })
    },
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 2000, word: 'Down', breath: 'in', sub: 'push hips back · 2 seconds' },
      { key: 'hold', to: 'bottom', dur: 1000, word: 'Hold', breath: 'hold', sub: 'thighs level with the floor' },
      { key: 'up', to: 'stand', dur: 1000, word: 'Up', breath: 'out', sub: 'push through your heels' },
      { key: 'top', to: 'stand', dur: 500, word: 'Top', breath: 'out', sub: 'stand tall' }
    ],
    ready: { pose: 'stand', text: 'Feet shoulder-width apart' },
    guides: [
      { type: 'path', point: 'pelvis', from: 'stand', to: 'bottom', dx: -30, layer: 'back', show: ['down'] },
      { type: 'text', text: 'Push hips back', at: [262, 186], anchor: 'end', show: ['down'] },
      { type: 'line', from: { p: 'pelvis', pose: 'bottom', dx: -50 }, to: { p: 'pelvis', pose: 'bottom', dx: 146 }, show: ['hold'] },
      { type: 'text', text: 'Thighs level\nwith the floor', at: { p: 'nKnee', pose: 'bottom', dx: 54, dy: 6 }, show: ['hold'] },
      { type: 'ring', at: { p: 'nHeel', pose: 'stand', dy: 6 }, show: ['up'] },
      { type: 'text', text: 'Push through your heels', at: [343, 433], anchor: 'middle', show: ['up'] },
      { type: 'text', text: 'Stand tall', at: [398, 40], show: ['top'] }
    ],
    note: 'One squat takes 4.5 seconds, about 6 to 7 in 30 seconds.',
    tips: [
      'Feet shoulder-width apart, toes pointing slightly out.',
      'Breathe in as you push your hips back and bend your knees until your thighs are level with the floor. Hands together at your chest.',
      'Hold 1 second, then breathe out and stand up. Heels stay flat.'
    ],
    adjust: [['Too easy?', 'Take 3 seconds on the way down.'], ['Knees complain?', 'Go a little less deep.']]
  });

  def({
    id: 'chair-pushup', name: 'Chair push-up', scene: { mat: [60, 300], chair: { x: 432, facing: 'left' }, wall: 556 },
    anchor: { point: 'nToe', at: [118, 400] },
    bend: { nArm: { x: -1, y: -0.6 }, fArm: { x: -1, y: -0.6 } },
    poses: {
      top: P({ t: 120, h: 122, b: { th: -60, sh: -60, ft: 30 }, ik: { nArm: [440, 306], fArm: [440, 306] } }),
      bottom: P({ t: 108, h: 110, b: { th: -72, sh: -72, ft: 18 }, ik: { nArm: [440, 306], fArm: [440, 306] } })
    },
    rep: [
      { key: 'down', from: 'top', to: 'bottom', dur: 2000, word: 'Down', breath: 'in', sub: 'chest to the seat edge · 2 seconds' },
      { key: 'up', to: 'top', dur: 1000, word: 'Push', breath: 'out', sub: 'push the chair away' },
      { key: 'top', to: 'top', dur: 600, word: 'Top', breath: 'out', sub: 'body in one straight line' }
    ],
    ready: { pose: 'top', text: 'Hands on the seat edge', at: [425, 374], anchor: 'end' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'top', dx: -13, dy: -23 }, to: { p: 'shoulder', pose: 'top', dx: -13, dy: -23 }, show: ['top', 'ready'] },
      { type: 'text', text: 'One straight line,\nhead to heels', at: [60, 200], show: ['top', 'ready'] },
      { type: 'arrow', from: { p: 'shoulder', pose: 'top', dx: 18, dy: 30 }, to: { p: 'shoulder', pose: 'bottom', dx: 18, dy: 30 }, show: ['down'] },
      { type: 'text', text: 'Chest to the seat edge', at: [425, 374], anchor: 'end', show: ['down'] },
      { type: 'text', text: 'Push the chair away', at: [425, 374], anchor: 'end', show: ['up'] }
    ],
    note: 'One push-up takes about 3.5 seconds, around 8 in 30 seconds.',
    tips: [
      'Push the chair against a wall so it cannot slide.',
      'Hands on the front edge of the seat, body straight from head to heels.',
      'Breathe in as you lower your chest to the seat edge, breathe out as you push back up.'
    ],
    adjust: [['Too hard?', 'Use a wall instead of the chair.'], ['Too easy?', 'Take 3 seconds on the way down.']]
  });

  def({
    id: 'row', name: 'Bent-over row', scene: { mat: MAT }, anchor: STAND, hold: { n: 'bar', f: 'bar' },
    poses: {
      hang: P({ t: 135, h: 140, b: { th: 25, sh: -8 } }),
      pull: P({ t: 135, h: 140, b: { th: 25, sh: -8, ua: -58 } })
    },
    rep: [
      { key: 'pull', from: 'hang', to: 'pull', dur: 1000, word: 'Pull', breath: 'out', sub: 'elbows back to your ribs' },
      { key: 'squeeze', to: 'pull', dur: 1000, word: 'Squeeze', breath: 'hold', sub: 'shoulder blades together' },
      { key: 'lower', to: 'hang', dur: 2000, word: 'Lower', breath: 'in', sub: 'slowly · 2 seconds' },
      { key: 'lower', to: 'hang', dur: 400, word: 'Lower', breath: 'in', sub: 'arms long' }
    ],
    ready: { pose: 'hang', text: 'Hinge forward, back flat' },
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'hang', dx: -17, dy: -17 }, to: { p: 'shoulder', pose: 'hang', dx: -17, dy: -17 }, show: ['squeeze', 'ready'] },
      { type: 'text', text: 'Flat back', at: { p: 'pelvis', pose: 'hang', dx: -26, dy: -24 }, anchor: 'end', show: ['squeeze', 'ready'] },
      { type: 'text', text: 'Elbows back', at: { p: 'nEl', pose: 'pull', dx: -14, dy: -44 }, anchor: 'end', show: ['pull'] }
    ],
    note: 'One row takes about 4.5 seconds, around 6 to 7 in 30 seconds.',
    tips: [
      'A dumbbell in each hand, palms facing each other.',
      'Soft knees, push your hips back and lean forward with a flat back.',
      'Breathe out as you pull your elbows back, squeeze, then lower slowly while breathing in.'
    ],
    adjust: [['Lower back tired?', 'Lean forward a little less.']]
  });

  def({
    id: 'glute-bridge', name: 'Glute bridge', scene: { mat: [130, 340] }, anchor: { point: 'shoulder', at: [196, 386] },
    bend: { nLeg: { x: 0, y: -1 }, fLeg: { x: 0, y: -1 } },
    poses: {
      down: P({ t: -90, h: -94, b: { ua: 95, fa: 90, ft: 90, th: 150, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } }),
      up: P({ t: -62, h: -92, b: { ua: 95, fa: 90, ft: 90, th: 120, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } })
    },
    rep: [
      { key: 'up', from: 'down', to: 'up', dur: 1000, word: 'Up', breath: 'out', sub: 'push through your heels' },
      { key: 'squeeze', to: 'up', dur: 1000, word: 'Squeeze', breath: 'hold', sub: 'glutes tight' },
      { key: 'down', to: 'down', dur: 2000, word: 'Down', breath: 'in', sub: 'lower slowly · 2 seconds' },
      { key: 'tap', to: 'down', dur: 400, word: 'Tap', breath: 'in', sub: 'touch the floor lightly' }
    ],
    ready: { pose: 'down', text: 'Lie on your back, feet flat' },
    guides: [
      { type: 'arrow', from: { p: 'pelvis', pose: 'down', dy: -30 }, to: { p: 'pelvis', pose: 'up', dy: -30 }, show: ['up'] },
      { type: 'ring', at: { p: 'nHeel', pose: 'up', dy: 6 }, show: ['up'] },
      { type: 'text', text: 'Push through your heels', at: [418, 433], anchor: 'middle', show: ['up'] },
      { type: 'line', from: { p: 'shoulder', pose: 'up', dy: -22 }, to: { p: 'nKnee', pose: 'up', dy: -22 }, show: ['squeeze'] },
      { type: 'text', text: 'Hips up to a straight line', at: [300, 250], anchor: 'middle', show: ['squeeze'] }
    ],
    note: 'One bridge takes about 4.5 seconds, around 6 to 7 in 30 seconds.',
    tips: [
      'Lie on your back, knees bent, feet flat and hip-width apart.',
      'Breathe out and push through your heels to lift your hips until shoulders, hips and knees make a line.',
      'Squeeze your glutes for a second, then lower slowly while breathing in.'
    ],
    adjust: [['Too easy?', 'Hold 3 seconds at the top.']]
  });

  def({
    id: 'seated-press', name: 'Seated shoulder press', scene: { mat: [300, 200], chair: { x: 300, facing: 'right' } },
    anchor: { point: 'pelvis', at: [246, 300] }, hold: { n: 'face', f: 'face' },
    poses: {
      low: P({ b: { th: 90, sh: 0, ua: 20, fa: 175 } }),
      mid: P({ b: { th: 90, sh: 0, ua: 60, fa: 178, uaS: 0.3 } }),
      high: P({ b: { th: 90, sh: 0, ua: 168, fa: 172 } })
    },
    rep: [
      { key: 'press', from: 'low', to: 'mid', dur: 500, word: 'Press', breath: 'out', sub: 'straight up', ease: 'lin' },
      { key: 'press', to: 'high', dur: 500, word: 'Press', breath: 'out', sub: 'straight up' },
      { key: 'top', to: 'high', dur: 400, word: 'Top', breath: 'out', sub: 'arms long, ribs down' },
      { key: 'lower', to: 'mid', dur: 1000, word: 'Lower', breath: 'in', sub: 'back to your shoulders · 2 seconds', ease: 'lin' },
      { key: 'lower', to: 'low', dur: 1000, word: 'Lower', breath: 'in', sub: 'back to your shoulders · 2 seconds' }
    ],
    ready: { pose: 'low', text: 'Sit tall, dumbbells at your shoulders' },
    guides: [
      { type: 'line', from: { p: 'nHand', pose: 'low', dy: -22 }, to: { p: 'nHand', pose: 'high', dy: -26 }, show: ['press'] },
      { type: 'text', text: 'Straight up', at: { p: 'nHand', pose: 'high', dx: 26, dy: 12 }, show: ['press', 'top'] },
      { type: 'text', text: "Don't arch\nyour back", at: [176, 236], anchor: 'end', show: ['top', 'lower'] }
    ],
    note: 'One press takes about 3.5 seconds, around 8 in 30 seconds.',
    tips: [
      'Sit tall on the chair, feet flat, a dumbbell at each shoulder.',
      'Breathe out and press straight up until your arms are long.',
      'Lower slowly back to your shoulders while breathing in. Keep your ribs down.'
    ],
    adjust: [['Shoulders feel tight?', 'Press a little in front of your head.']]
  });

  def({
    id: 'heel-taps', name: 'Heel taps', scene: { mat: [120, 380] }, anchor: { point: 'pelvis', at: [318, 388] },
    poses: {
      table: P({ t: -90, h: -94, b: { ua: 180, fa: 180, th: 180, sh: 90, ft: 180 } }),
      tapN: P({ t: -90, h: -94, b: { ua: 180, fa: 180, th: 180, sh: 90, ft: 180 }, n: { th: 130, sh: 48, ft: 135 } }),
      tapF: P({ t: -90, h: -94, b: { ua: 180, fa: 180, th: 180, sh: 90, ft: 180 }, f: { th: 130, sh: 48, ft: 135 } })
    },
    rep: [
      { key: 'lower', from: 'table', to: 'tapN', dur: 1500, word: 'Lower', breath: 'out', sub: 'one heel down to the floor' },
      { key: 'tap', to: 'tapN', dur: 300, word: 'Tap', breath: 'out', sub: 'lower back stays down' },
      { key: 'back', to: 'table', dur: 1000, word: 'Back up', breath: 'in', sub: 'knees over hips' },
      { key: 'lower', to: 'tapF', dur: 1500, word: 'Lower', breath: 'out', sub: 'other heel down' },
      { key: 'tap2', to: 'tapF', dur: 300, word: 'Tap', breath: 'out', sub: 'lower back stays down' },
      { key: 'back', to: 'table', dur: 1000, word: 'Back up', breath: 'in', sub: 'knees over hips' }
    ],
    ready: { pose: 'table', text: 'Knees over hips, arms up' },
    guides: [
      { type: 'ring', at: { p: 'pelvis', pose: 'table', dx: -36, dy: 8 }, r: 14, show: ['lower', 'tap', 'tap2'] },
      { type: 'text', text: 'Lower back stays on the mat', at: [250, 433], anchor: 'middle', show: ['lower', 'tap', 'tap2'] },
      { type: 'ring', at: { p: 'nHeel', pose: 'tapN', dy: 2 }, show: ['tap'] },
      { type: 'ring', at: { p: 'fHeel', pose: 'tapF', dy: 2 }, show: ['tap2'] }
    ],
    note: 'One pair of taps takes about 5.5 seconds.',
    tips: [
      'Lie on your back, knees bent at 90 degrees above your hips, arms pointing at the ceiling.',
      'Breathe out as you lower one heel to tap the floor. Keep your lower back pressed into the mat.',
      'Breathe in as you bring it back, then switch legs.'
    ],
    adjust: [['Back arches?', "Don't lower the heel as far."]]
  });

  /* ======================= STRENGTH B ======================= */

  def({
    id: 'rdl', name: 'Romanian deadlift', scene: { mat: MAT }, anchor: STAND, hold: { n: 'face', f: 'face' },
    poses: {
      stand: P({ t: 178, h: 178, b: { th: 3, sh: -3, ua: 6, fa: 6 } }),
      hinge: P({ t: 115, h: 118, b: { th: 54, sh: -5, ua: 0, fa: 0 } })
    },
    rep: [
      { key: 'hinge', from: 'stand', to: 'hinge', dur: 2000, word: 'Hinge', breath: 'in', sub: 'push hips back · 2 seconds' },
      { key: 'stretch', to: 'hinge', dur: 400, word: 'Stretch', breath: 'hold', sub: 'feel the back of your legs' },
      { key: 'up', to: 'stand', dur: 1000, word: 'Stand', breath: 'out', sub: 'squeeze your glutes' },
      { key: 'top', to: 'stand', dur: 500, word: 'Tall', breath: 'out', sub: 'stand tall' }
    ],
    ready: { pose: 'stand', text: 'Dumbbells in front of your thighs' },
    guides: [
      { type: 'path', point: 'pelvis', from: 'stand', to: 'hinge', dx: -24, layer: 'back', show: ['hinge'] },
      { type: 'text', text: 'Hips back', at: [238, 196], anchor: 'end', show: ['hinge'] },
      { type: 'text', text: 'Dumbbells close\nto your legs', at: { p: 'nHand', pose: 'hinge', dx: 28, dy: 34 }, show: ['hinge'] },
      { type: 'line', from: { p: 'pelvis', pose: 'hinge', dx: -10, dy: -24 }, to: { p: 'shoulder', pose: 'hinge', dx: -10, dy: -24 }, show: ['stretch'] },
      { type: 'text', text: 'Back flat', at: { p: 'pelvis', pose: 'hinge', dx: -22, dy: -26 }, anchor: 'end', show: ['stretch'] }
    ],
    note: 'One rep takes about 4 seconds, around 7 in 30 seconds.',
    tips: [
      'Stand tall, a dumbbell in each hand in front of your thighs, knees soft.',
      'Breathe in and push your hips back, sliding the dumbbells down your legs with a flat back.',
      'When you feel the back of your legs stretch, breathe out and stand up by squeezing your glutes.'
    ],
    adjust: [['Back rounds?', "Don't go as low. Stop when your back starts to round."]]
  });

  def({
    id: 'split-squat', name: 'Split squat', scene: { mat: [170, 290] },
    bend: { nLeg: { x: 1, y: 0 }, fLeg: { x: 0.3, y: 1 } },
    poses: {
      top: P({ x: 300, y: 222, b: HANDS_ON_HIPS, n: { ft: 90 }, f: { ft: 46 }, ik: { nLeg: [380, 392], fLeg: [210, 372] } }),
      bottom: P({ x: 296, y: 294, b: HANDS_ON_HIPS, n: { ft: 90 }, f: { ft: 46 }, ik: { nLeg: [380, 392], fLeg: [210, 372] } })
    },
    rep: [
      { key: 'down', from: 'top', to: 'bottom', dur: 2000, word: 'Down', breath: 'in', sub: 'back knee toward the floor · 2 seconds' },
      { key: 'hold', to: 'bottom', dur: 500, word: 'Hold', breath: 'hold', sub: 'front knee over your ankle' },
      { key: 'up', to: 'top', dur: 1000, word: 'Up', breath: 'out', sub: 'push through your front heel' },
      { key: 'top', to: 'top', dur: 500, word: 'Top', breath: 'out', sub: 'stand tall' }
    ],
    switchAt: { text: 'Switch legs', mirror: true },
    ready: { pose: 'top', text: 'One foot forward, one foot back' },
    guides: [
      { type: 'text', text: 'Back knee\ntoward the floor', at: [196, 296], anchor: 'end', show: ['down', 'hold'] },
      { type: 'ring', at: { p: 'nHeel', pose: 'top', dy: 6 }, show: ['up'] },
      { type: 'text', text: 'Push through your front heel', at: [360, 433], anchor: 'middle', show: ['up'] }
    ],
    note: 'One rep takes 4 seconds. Halfway through, switch legs.',
    tips: [
      'Take a long step: one foot forward, the other back on its toes.',
      'Breathe in and lower straight down until your back knee nearly touches the floor.',
      'Breathe out and push through your front heel to come up. Switch legs halfway.'
    ],
    adjust: [['Wobbly?', 'Hold the back of a chair with one hand.']]
  });

  def({
    id: 'one-arm-row', name: 'One-arm row', scene: { mat: [190, 260], chair: { x: 440, facing: 'left' } },
    anchor: STAND, hold: { n: 'bar' },
    bend: { fArm: { x: -1, y: -0.2 }, fLeg: { x: 1, y: 0 } },
    poses: {
      hang: P({ t: 100, h: 106, n: { th: 30, sh: -10 }, f: { th: -15, sh: -15 }, ik: { fArm: [452, 308], fLeg: [244, 392] } }),
      pull: P({ t: 100, h: 106, n: { th: 30, sh: -10, ua: -70 }, f: { th: -15, sh: -15 }, ik: { fArm: [452, 308], fLeg: [244, 392] } })
    },
    rep: [
      { key: 'pull', from: 'hang', to: 'pull', dur: 1000, word: 'Pull', breath: 'out', sub: 'elbow back to your hip' },
      { key: 'squeeze', to: 'pull', dur: 800, word: 'Squeeze', breath: 'hold', sub: 'shoulder blade back' },
      { key: 'lower', to: 'hang', dur: 2000, word: 'Lower', breath: 'in', sub: 'slowly · 2 seconds' },
      { key: 'lower', to: 'hang', dur: 400, word: 'Lower', breath: 'in', sub: 'arm long' }
    ],
    switchAt: { text: 'Switch arms', mirror: true },
    ready: { pose: 'hang', text: 'One hand on the chair seat' },
    guides: [
      { type: 'text', text: 'Elbow to your hip', at: { p: 'nEl', pose: 'pull', dx: -14, dy: -44 }, anchor: 'end', show: ['pull'] },
      { type: 'line', from: { p: 'pelvis', pose: 'pull', dx: -4, dy: -25 }, to: { p: 'shoulder', pose: 'pull', dx: -4, dy: -25 }, show: ['squeeze', 'ready'] },
      { type: 'text', text: 'Flat back', at: { p: 'pelvis', pose: 'pull', dx: -18, dy: -30 }, anchor: 'end', show: ['squeeze', 'ready'] }
    ],
    note: 'One row takes about 4 seconds. Halfway through, switch arms.',
    tips: [
      'One hand on the chair seat, the opposite foot a step back, back flat.',
      'Let the dumbbell hang, then breathe out and pull your elbow back to your hip.',
      'Lower slowly while breathing in. Switch arms halfway.'
    ],
    adjust: [['Too easy?', 'Pause 2 seconds at the top.']]
  });

  def({
    id: 'hammer-curl', name: 'Hammer curl', scene: { mat: MAT }, anchor: STAND, hold: { n: 'bar', f: 'bar' },
    poses: {
      down: P({ b: { ua: 2, fa: 2 } }),
      up: P({ b: { ua: 6, fa: 160 } })
    },
    rep: [
      { key: 'curl', from: 'down', to: 'up', dur: 1000, word: 'Curl', breath: 'out', sub: 'palms facing each other' },
      { key: 'squeeze', to: 'up', dur: 500, word: 'Squeeze', breath: 'hold', sub: 'elbows stay still' },
      { key: 'lower', to: 'down', dur: 2000, word: 'Lower', breath: 'in', sub: 'slowly · 2 seconds' }
    ],
    ready: { pose: 'down', text: 'Palms facing each other' },
    guides: [
      { type: 'ring', at: { p: 'nEl', pose: 'up' }, r: 14, show: ['curl', 'squeeze'] },
      { type: 'text', text: 'Elbows stay\nby your sides', at: { p: 'nEl', pose: 'up', dx: -36, dy: -4 }, anchor: 'end', show: ['curl', 'squeeze'] }
    ],
    note: 'One curl takes 3.5 seconds, around 8 in 30 seconds.',
    tips: [
      'Stand tall, a dumbbell in each hand, palms facing each other.',
      'Breathe out and curl up without moving your elbows.',
      'Lower slowly while breathing in.'
    ],
    adjust: [['Swinging?', 'Slow down. Only your forearms move.']]
  });

  def({
    id: 'knee-plank', name: 'Knee plank', scene: { mat: [60, 480] }, anchor: { point: 'nKnee', at: [230, 393] },
    poses: {
      plank: P({ t: 105.3, h: 102, b: { th: -74.7, sh: -90, ft: -90, ua: 0, fa: 90 } })
    },
    rep: [
      { key: 'hold', from: 'plank', to: 'plank', dur: 4000, word: 'Hold', breath: 'in', sub: 'squeeze your belly' },
      { key: 'hold2', to: 'plank', dur: 4000, word: 'Hold', breath: 'out', sub: 'body in one straight line' }
    ],
    ready: { pose: 'plank', text: 'Forearms and knees on the mat' },
    guides: [
      { type: 'line', from: { p: 'nKnee', pose: 'plank', dx: -7, dy: -25 }, to: { p: 'shoulder', pose: 'plank', dx: -7, dy: -25 }, show: ['hold', 'hold2', 'ready'] },
      { type: 'text', text: 'One straight line', at: [250, 300], show: ['hold', 'hold2'] },
      { type: 'ring', at: { p: 'nEl', pose: 'plank' }, r: 15, show: ['hold2'] },
      { type: 'text', text: 'Elbows under shoulders', at: { p: 'nEl', pose: 'plank', dy: 37 }, anchor: 'middle', show: ['hold2'] }
    ],
    note: 'Hold the whole time and keep breathing slowly.',
    tips: [
      'Forearms on the mat, elbows under your shoulders, knees down.',
      'Make a straight line from your knees to your head.',
      'Squeeze your belly and breathe slowly. Do not hold your breath.'
    ],
    adjust: [['Too easy?', 'Lift your knees for a full plank.']]
  });

  /* ======================= QUIET CARDIO ======================= */

  function marchDef(id, name, knee, dur, sub) {
    return def({
      id: id, name: name, scene: { mat: MAT },
      poses: {
        mid: P({ x: 330, y: 204, b: { ua: 8, fa: 30 } }),
        kn: P({ x: 330, y: 204, n: { th: knee, sh: knee > 70 ? -5 : -20, ft: 85, ua: -35, fa: -12 }, f: { ua: 50, fa: 125 } }),
        kf: P({ x: 330, y: 204, f: { th: knee, sh: knee > 70 ? -5 : -20, ft: 85, ua: -35, fa: -12 }, n: { ua: 50, fa: 125 } })
      },
      rep: [
        { key: 'march', from: 'mid', to: 'kn', dur: dur, word: 'March', breath: 'easy', sub: sub },
        { key: 'march', to: 'mid', dur: dur, word: 'March', breath: 'easy', sub: sub },
        { key: 'march', to: 'kf', dur: dur, word: 'March', breath: 'easy', sub: sub },
        { key: 'march', to: 'mid', dur: dur, word: 'March', breath: 'easy', sub: sub }
      ],
      ready: { pose: 'mid', text: 'Stand tall on the mat' },
      guides: knee > 70 ? [
        { type: 'line', from: [392, 204], to: [470, 204], show: ['march'] },
        { type: 'text', text: 'Knees to\nhip height', at: [480, 198], show: ['march'] }
      ] : [],
      note: 'Steady rhythm. Quiet feet, no stomping.',
      tips: ['Stand tall and march on the spot.', 'Swing the opposite arm with each knee.', 'Land softly so it stays quiet.'],
      adjust: [['Too easy?', 'March faster and lift your knees higher.']]
    });
  }
  marchDef('high-knee-march', 'High-knee march', 92, 400, 'knees to hip height, arms pump');

  def({
    id: 'step-jacks', name: 'Step-jacks', zoom: 0.84, view: 'front', scene: { mat: [200, 240] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: {
      mid: P({ x: 320, y: 206, n: { ua: -8, fa: -4, ft: -80 }, f: { ua: 8, fa: 4, ft: 80 }, ik: { nLeg: [302, 392], fLeg: [338, 392] } }),
      outF: P({ x: 322, y: 210, n: { ua: -150, fa: -160, ft: -80 }, f: { ua: 150, fa: 160, ft: 80 }, ik: { nLeg: [302, 392], fLeg: [392, 392] } }),
      outN: P({ x: 318, y: 210, n: { ua: -150, fa: -160, ft: -80 }, f: { ua: 150, fa: 160, ft: 80 }, ik: { nLeg: [248, 392], fLeg: [338, 392] } })
    },
    rep: [
      { key: 'jack', from: 'mid', to: 'outF', dur: 500, word: 'Step out', breath: 'easy', sub: 'arms up as your foot goes out' },
      { key: 'jack', to: 'mid', dur: 500, word: 'Step out', breath: 'easy', sub: 'arms up as your foot goes out' },
      { key: 'jack', to: 'outN', dur: 500, word: 'Step out', breath: 'easy', sub: 'arms up as your foot goes out' },
      { key: 'jack', to: 'mid', dur: 500, word: 'Step out', breath: 'easy', sub: 'arms up as your foot goes out' }
    ],
    ready: { pose: 'mid', text: 'Feet together, arms down' },
    guides: [{ type: 'text', text: 'No jumping: just step', at: [320, 433], anchor: 'middle', show: ['jack'] }],
    note: 'A quiet jumping jack: one foot steps out at a time.',
    tips: ['Start with feet together.', 'Step one foot out to the side as both arms swing up.', 'Step back in, then the other side.'],
    adjust: [['Too easy?', 'Go faster, or add a small squat as you step out.']]
  });

  def({
    id: 'squat-calf', name: 'Squat + calf raise', scene: { mat: MAT }, anchor: { point: 'nToe', at: [370, 392] },
    poses: {
      stand: P({ t: 176, h: 178, b: { ua: 6, fa: 10 } }),
      bottom: P({ t: 145, h: 165, b: { ua: 80, fa: 85, th: 80, sh: -28 } }),
      toes: P({ t: 178, h: 180, b: { ua: 6, fa: 10, ft: 60 } })
    },
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 1000, word: 'Squat', breath: 'easy', sub: 'hips back, arms forward' },
      { key: 'up', to: 'stand', dur: 800, word: 'Up', breath: 'easy', sub: 'stand tall' },
      { key: 'toes', to: 'toes', dur: 500, word: 'Toes', breath: 'easy', sub: 'rise onto your toes' },
      { key: 'heels', to: 'stand', dur: 500, word: 'Heels down', breath: 'easy', sub: 'lower softly' }
    ],
    ready: { pose: 'stand', text: 'Feet shoulder-width apart' },
    guides: [{ type: 'arrow', from: { p: 'nHeel', pose: 'stand', dx: -26, dy: -4 }, to: { p: 'nHeel', pose: 'toes', dx: -26, dy: -10 }, show: ['toes'] }],
    note: 'One rep takes about 3 seconds.',
    tips: ['Squat down with arms forward.', 'Stand up, then rise onto your toes.', 'Lower your heels softly and go again.'],
    adjust: [['Too easy?', 'Go faster, or hold 1 second on your toes.']]
  });

  def({
    id: 'shadow-box', name: 'Shadow boxing', scene: { mat: MAT },
    bend: { nLeg: { x: 1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: {
      guard: P({ x: 332, y: 214, t: 176, h: 178, b: { ua: 30, fa: 165 }, n: { ft: 75 }, f: { ft: 90 }, ik: { nLeg: [290, 392], fLeg: [372, 392] } }),
      jab: P({ x: 334, y: 214, t: 174, h: 176, n: { ua: 30, fa: 165, ft: 75 }, f: { ua: 88, fa: 90, ft: 90 }, ik: { nLeg: [290, 392], fLeg: [372, 392] } }),
      cross: P({ x: 338, y: 216, t: 168, h: 172, n: { ua: 86, fa: 88, ft: 75 }, f: { ua: 30, fa: 165, ft: 90 }, ik: { nLeg: [290, 392], fLeg: [372, 392] } })
    },
    rep: [
      { key: 'jab', from: 'guard', to: 'jab', dur: 250, word: 'Jab', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'front hand' },
      { key: 'jab', to: 'guard', dur: 300, word: 'Jab', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'front hand' },
      { key: 'cross', to: 'cross', dur: 250, word: 'Cross', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'back hand' },
      { key: 'cross', to: 'guard', dur: 300, word: 'Cross', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'back hand' },
      { key: 'guard', to: 'guard', dur: 400, word: 'Guard', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'fists back to your chin' }
    ],
    ready: { pose: 'guard', text: 'Left foot forward, fists by your chin' },
    guides: [],
    note: 'Jab, cross, guard. About 20 combos in 30 seconds.',
    tips: ['Left foot forward, fists by your chin.', 'Jab with the front hand, cross with the back hand.', 'Snap each fist back to your chin. Light feet, no stomping.'],
    adjust: [['Too easy?', 'Punch faster and keep bouncing lightly.']]
  });

  def({
    id: 'knee-elbow', name: 'Cross-body knee to elbow', view: 'front', scene: { mat: [200, 240] },
    poses: {
      base: P({ x: 320, y: 204, n: { ua: -135, fa: 60, ft: -80 }, f: { ua: 135, fa: -60, ft: 80 } }),
      cN: P({ x: 320, y: 200, t: 162, h: 165, tS: 0.85, n: { ua: -135, fa: 60, th: 160, thS: 0.45, sh: -5, shS: 0.85, ft: -80 }, f: { ua: -52, fa: 148, ft: 80 } }),
      cF: P({ x: 320, y: 200, t: 198, h: 195, tS: 0.85, f: { ua: 135, fa: -60, th: -160, thS: 0.45, sh: 5, shS: 0.85, ft: 80 }, n: { ua: 52, fa: -148, ft: -80 } })
    },
    rep: [
      { key: 'crunch', from: 'base', to: 'cN', dur: 600, word: 'Knee to elbow', breath: 'out', sub: 'crunch across' },
      { key: 'back', to: 'base', dur: 600, word: 'Back', breath: 'in', sub: 'stand tall' },
      { key: 'crunch', to: 'cF', dur: 600, word: 'Knee to elbow', breath: 'out', sub: 'other side' },
      { key: 'back', to: 'base', dur: 600, word: 'Back', breath: 'in', sub: 'stand tall' }
    ],
    ready: { pose: 'base', text: 'Hands behind your head' },
    guides: [],
    note: 'One knee then the other, about 2.5 seconds per pair.',
    tips: ['Hands behind your head, elbows wide.', 'Lift one knee across your body and bring the opposite elbow down to meet it.', 'Stand tall, then the other side.'],
    adjust: [['Too easy?', 'Go faster.']]
  });

  def({
    id: 'lunge-reach', name: 'Step-back lunge + reach', zoom: 0.84, scene: { mat: [170, 290] },
    bend: { nLeg: { x: 1, y: 0.6 }, fLeg: { x: 1, y: 0.6 } },
    poses: {
      stand: P({ x: 330, y: 206, t: 178, b: { ua: 6, fa: 8 }, ik: { nLeg: [330, 392], fLeg: [334, 392] } }),
      backN: P({ x: 304, y: 252, t: 178, h: 182, b: { ua: 172, fa: 176 }, n: { ft: 60 }, ik: { nLeg: [228, 380], fLeg: [348, 392] } }),
      backF: P({ x: 304, y: 252, t: 178, h: 182, b: { ua: 172, fa: 176 }, f: { ft: 60 }, ik: { nLeg: [348, 392], fLeg: [228, 380] } })
    },
    rep: [
      { key: 'back', from: 'stand', to: 'backN', dur: 900, word: 'Step back', breath: 'in', sub: 'reach up' },
      { key: 'return', to: 'stand', dur: 700, word: 'Return', breath: 'out', sub: 'arms down' },
      { key: 'back', to: 'backF', dur: 900, word: 'Step back', breath: 'in', sub: 'other leg, reach up' },
      { key: 'return', to: 'stand', dur: 700, word: 'Return', breath: 'out', sub: 'arms down' }
    ],
    ready: { pose: 'stand', text: 'Stand tall, feet together' },
    guides: [],
    note: 'Half-depth lunges, one leg then the other.',
    tips: ['Step one foot back and bend both knees a little.', 'Reach both arms overhead as you step back.', 'Step back in, then the other leg.'],
    adjust: [['Too easy?', 'Go deeper.']]
  });

  /* ======================= WARM-UP ======================= */

  marchDef('march', 'March in place', 50, 500, 'easy knees, swing your arms');
  X.march.adjust = [];

  def({
    id: 'arm-circles', name: 'Arm circles', zoom: 0.84, scene: { mat: MAT }, anchor: STAND,
    poses: {
      a0: P({ b: { ua: 0, fa: 0 } }), a1: P({ b: { ua: 120, fa: 120 } }),
      a2: P({ b: { ua: 240, fa: 240 } }), a3: P({ b: { ua: 360, fa: 360 } })
    },
    rep: [
      { key: 'fwd', from: 'a0', to: 'a1', dur: 600, ease: 'lin', word: 'Forward', breath: 'easy', sub: 'big, slow circles' },
      { key: 'fwd', to: 'a2', dur: 600, ease: 'lin', word: 'Forward', breath: 'easy', sub: 'big, slow circles' },
      { key: 'fwd', to: 'a3', dur: 600, ease: 'lin', word: 'Forward', breath: 'easy', sub: 'big, slow circles' }
    ],
    rep2: [
      { key: 'bwd', from: 'a3', to: 'a2', dur: 600, ease: 'lin', word: 'Backward', breath: 'easy', sub: 'big, slow circles' },
      { key: 'bwd', to: 'a1', dur: 600, ease: 'lin', word: 'Backward', breath: 'easy', sub: 'big, slow circles' },
      { key: 'bwd', to: 'a0', dur: 600, ease: 'lin', word: 'Backward', breath: 'easy', sub: 'big, slow circles' }
    ],
    switchAt: { text: 'Backward', rep2: true },
    ready: { pose: 'a0', text: 'Arms by your sides' },
    guides: [],
    work: 60, rest: 0,
    note: 'Forward for the first half, backward for the second.',
    tips: ['Stand tall with arms straight.', 'Make big, slow circles forward.', 'Halfway through, circle backward.'],
    adjust: []
  });

  def({
    id: 'hip-circles', name: 'Hip circles', view: 'front', scene: { mat: [200, 240] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var arms = { n: { ua: -35, fa: 40, ft: -80 }, f: { ua: 35, fa: -40, ft: 80 } };
      var ik = { nLeg: [296, 392], fLeg: [344, 392] };
      function hp(x, y, t) { return P({ x: x, y: y, t: t, h: 180, n: arms.n, f: arms.f, ik: ik }); }
      return { pr: hp(336, 208, 188), pd: hp(320, 212, 180), pl: hp(304, 208, 172), pu: hp(320, 204, 180) };
    })(),
    rep: [
      { key: 'circle', from: 'pr', to: 'pd', dur: 450, word: 'Hip circles', breath: 'easy', sub: 'hands on hips, big circles' },
      { key: 'circle', to: 'pl', dur: 450, word: 'Hip circles', breath: 'easy', sub: 'hands on hips, big circles' },
      { key: 'circle', to: 'pu', dur: 450, word: 'Hip circles', breath: 'easy', sub: 'hands on hips, big circles' },
      { key: 'circle', to: 'pr', dur: 450, word: 'Hip circles', breath: 'easy', sub: 'hands on hips, big circles' }
    ],
    rep2: [
      { key: 'circle', from: 'pr', to: 'pu', dur: 450, word: 'Other way', breath: 'easy', sub: 'circle the other direction' },
      { key: 'circle', to: 'pl', dur: 450, word: 'Other way', breath: 'easy', sub: 'circle the other direction' },
      { key: 'circle', to: 'pd', dur: 450, word: 'Other way', breath: 'easy', sub: 'circle the other direction' },
      { key: 'circle', to: 'pr', dur: 450, word: 'Other way', breath: 'easy', sub: 'circle the other direction' }
    ],
    switchAt: { text: 'Other way', rep2: true },
    ready: { pose: 'pu', text: 'Hands on your hips' },
    guides: [],
    work: 60, rest: 0,
    note: 'One direction for the first half, the other for the second.',
    tips: ['Feet hip-width apart, hands on your hips.', 'Draw big circles with your hips.', 'Halfway through, switch direction.'],
    adjust: []
  });

  variant('squat', {
    id: 'warmup-squat', name: 'Slow squats',
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 2000, word: 'Down', breath: 'in', sub: 'slow · 2 seconds' },
      { key: 'up', to: 'stand', dur: 2000, word: 'Up', breath: 'out', sub: 'slow · 2 seconds' }
    ],
    work: 60, rest: 0,
    note: 'Slow and easy, just warming up.',
    tips: ['Same squat as Strength A, slower and without the hold.'],
    adjust: []
  });

  def({
    id: 'reach-hinge', name: 'Reach and hinge', zoom: 0.84, scene: { mat: MAT }, anchor: STAND,
    poses: {
      stand: P({ t: 178, b: { ua: 6, fa: 6 } }),
      reach: P({ t: 182, h: 186, b: { ua: 174, fa: 178 } }),
      hinge: P({ t: 115, h: 118, b: { th: 54, sh: -5, ua: 10, fa: 14 } })
    },
    rep: [
      { key: 'reach', from: 'hinge', to: 'reach', dur: 2500, word: 'Reach up', breath: 'in', sub: 'tall, big breath in' },
      { key: 'hinge', to: 'hinge', dur: 2500, word: 'Hinge', breath: 'out', sub: 'reach toward your shins' }
    ],
    ready: { pose: 'stand', text: 'Stand tall' },
    guides: [],
    work: 60, rest: 0,
    note: 'Slow and smooth with your breathing.',
    tips: ['Breathe in and reach up tall.', 'Breathe out, soften your knees and hinge forward, reaching toward your shins.'],
    adjust: []
  });

  /* ======================= COOL-DOWN / STRETCH ======================= */

  def({
    id: 'chest-opener', name: 'Chest opener', scene: { mat: MAT }, anchor: STAND,
    poses: {
      soft: P({ t: 180, h: 182, b: { ua: -25, fa: -30 } }),
      open: P({ t: 186, h: 192, b: { ua: -38, fa: -44 } })
    },
    rep: [
      { key: 'open', from: 'soft', to: 'open', dur: 4000, word: 'Open', breath: 'in', sub: 'lift your chest' },
      { key: 'relax', to: 'soft', dur: 4000, word: 'Relax', breath: 'out', sub: 'stay tall' }
    ],
    ready: { pose: 'soft', text: 'Clasp your hands behind you' },
    guides: [{ type: 'text', text: 'Lift your chest', at: [380, 120], show: ['open'] }],
    work: 40, rest: 0,
    note: 'Slow breaths, gentle stretch.',
    tips: ['Clasp your hands behind your back.', 'Breathe in, lift your chest and draw your hands down and back.', 'Breathe out and relax a little.'],
    adjust: []
  });

  def({
    id: 'hamstring-stretch', name: 'Hamstring stretch', scene: { mat: [230, 260] },
    bend: { nLeg: { x: 1, y: -1 }, fLeg: { x: 1, y: 0 } },
    poses: {
      light: P({ x: 296, y: 244, t: 150, h: 156, b: { ua: 20, fa: 30 }, n: { ft: 150 }, f: { ft: 90 }, ik: { nLeg: [410, 386], fLeg: [300, 392] } }),
      deep: P({ x: 290, y: 250, t: 125, h: 128, b: { ua: 15, fa: 22 }, n: { ft: 150 }, f: { ft: 90 }, ik: { nLeg: [410, 386], fLeg: [300, 392] } })
    },
    rep: [
      { key: 'hinge', from: 'light', to: 'deep', dur: 4000, word: 'Hinge', breath: 'out', sub: 'flat back, toes up' },
      { key: 'breathe', to: 'light', dur: 4000, word: 'Breathe', breath: 'in', sub: 'ease up a little' }
    ],
    switchAt: { text: 'Other leg', mirror: true },
    ready: { pose: 'light', text: 'One heel forward, toes up' },
    guides: [{ type: 'text', text: 'Heel down,\ntoes up', at: { p: 'nToe', pose: 'deep', dx: 14, dy: -34 }, show: ['hinge', 'breathe'] }],
    work: 40, rest: 0,
    note: 'Half the time on each leg.',
    tips: ['Put one heel forward with the toes up, back knee bent.', 'Breathe out and hinge forward with a flat back until you feel the back of your leg.', 'Switch legs halfway.'],
    adjust: []
  });

  def({
    id: 'childs-pose', name: "Child's pose", scene: { mat: [140, 400] }, anchor: { point: 'nKnee', at: [360, 393] },
    poses: {
      out: P({ t: 90, h: 55, curve: 14, b: { th: 73, sh: -90, ft: -90, ua: 70, fa: 90 } }),
      in: P({ t: 86, h: 58, curve: 16, b: { th: 73, sh: -90, ft: -90, ua: 70, fa: 90 } })
    },
    rep: [
      { key: 'in', from: 'out', to: 'in', dur: 4000, word: 'Relax', breath: 'in', sub: 'breathe into your back' },
      { key: 'out', to: 'out', dur: 6000, word: 'Relax', breath: 'out', sub: 'sink a little lower' }
    ],
    ready: { pose: 'out', text: 'Knees down, sit back on your heels' },
    guides: [],
    work: 40, rest: 0,
    note: 'Slow breathing: 4 seconds in, 6 seconds out.',
    tips: ['Kneel, sit back on your heels and fold forward.', 'Arms long in front of you, forehead down.', 'Breathe slowly into your back.'],
    adjust: []
  });

  def({
    id: 'breathing', name: 'Breathing', scene: { mat: [190, 260] }, anchor: { point: 'nKnee', at: [380, 393] },
    poses: {
      out: P({ t: 180, h: 180, b: { th: 73, sh: -90, ft: -90, ua: 6, fa: 30 } }),
      in: P({ t: 180, h: 182, lift: 3, b: { th: 73, sh: -90, ft: -90, ua: 6, fa: 30 } })
    },
    rep: [
      { key: 'in', from: 'out', to: 'in', dur: 4000, word: 'Breathe in', breath: 'in', breathText: '4 seconds', sub: 'slowly, through your nose' },
      { key: 'out', to: 'out', dur: 6000, word: 'Breathe out', breath: 'out', breathText: '6 seconds', sub: 'long and slow' }
    ],
    ready: { pose: 'out', text: 'Sit comfortably, hands on your thighs' },
    guides: [],
    work: 180, rest: 0,
    note: '4 seconds in, 6 seconds out. The long breath out calms you down.',
    tips: ['Sit comfortably and close your eyes if you like.', 'Breathe in through your nose for 4 seconds.', 'Breathe out slowly for 6 seconds.'],
    adjust: []
  });

  /* ======================= SATURDAY CORE ======================= */

  def({
    id: 'bird-dog', name: 'Bird dog', scene: { mat: [40, 500] },
    bend: { nArm: { x: -1, y: 0 }, fArm: { x: -1, y: 0 } },
    poses: (function () {
      var down = { th: 0, sh: -90, ft: -90 }, back = { th: -90, sh: -90, ft: -90 }, fwd = { ua: 90, fa: 90 };
      var base = { x: 250, y: 297, t: 90, h: 100 };
      return {
        table: P(Object.assign({}, base, { n: down, f: down, ik: { nArm: [368, 396], fArm: [368, 396] } })),
        reachA: P(Object.assign({}, base, { n: Object.assign({}, down, fwd), f: back, ik: { fArm: [368, 396] } })),
        reachB: P(Object.assign({}, base, { n: back, f: Object.assign({}, down, fwd), ik: { nArm: [368, 396] } }))
      };
    })(),
    rep: [
      { key: 'reach', from: 'table', to: 'reachA', dur: 1000, word: 'Reach', breath: 'out', sub: 'opposite arm and leg' },
      { key: 'hold', to: 'reachA', dur: 1500, word: 'Hold', breath: 'hold', sub: 'back flat, hips level' },
      { key: 'back', to: 'table', dur: 1000, word: 'Back', breath: 'in', sub: 'hands and knees' },
      { key: 'reach', to: 'reachB', dur: 1000, word: 'Reach', breath: 'out', sub: 'other side' },
      { key: 'hold', to: 'reachB', dur: 1500, word: 'Hold', breath: 'hold', sub: 'back flat, hips level' },
      { key: 'back', to: 'table', dur: 1000, word: 'Back', breath: 'in', sub: 'hands and knees' }
    ],
    ready: { pose: 'table', text: 'Hands under shoulders, knees under hips' },
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'table', dy: -27 }, to: { p: 'shoulder', pose: 'table', dy: -27 }, show: ['hold'] },
      { type: 'text', text: 'Back flat', at: [310, 250], anchor: 'middle', show: ['hold'] }
    ],
    note: 'One arm and the opposite leg, then switch. About 7 seconds per pair.',
    tips: ['Start on hands and knees.', 'Breathe out and reach one arm forward and the opposite leg back.', 'Hold with a flat back, come back, then switch.'],
    adjust: [['Wobbly?', 'Lift only the leg at first.']]
  });

  variant('glute-bridge', {
    id: 'bridge-hold', name: 'Glute bridge hold',
    rep: [
      { key: 'hold', from: 'up', to: 'up', dur: 4000, word: 'Hold', breath: 'in', sub: 'squeeze your glutes' },
      { key: 'hold2', to: 'up', dur: 4000, word: 'Hold', breath: 'out', sub: 'hips high, ribs down' }
    ],
    ready: { pose: 'up', text: 'Hips up, feet flat' },
    guides: [
      { type: 'line', from: { p: 'shoulder', pose: 'up', dy: -22 }, to: { p: 'nKnee', pose: 'up', dy: -22 }, show: ['hold', 'hold2'] },
      { type: 'text', text: 'Hips up to a straight line', at: [300, 250], anchor: 'middle', show: ['hold', 'hold2'] }
    ],
    note: 'Hold the whole time and keep breathing.',
    tips: ['Lift your hips into a bridge and hold.', 'Squeeze your glutes and keep breathing slowly.'],
    adjust: []
  });

  def({
    id: 'side-plank-knees', name: 'Side plank on knees', view: 'front', scene: { mat: [140, 400] },
    anchor: { point: 'nEl', at: [236, 396] },
    poses: {
      hold: P({ t: -110, h: -105, n: { ua: 0, fa: 90, faS: 0.35, th: 70, sh: 0, shS: 0.05, ft: -90 }, f: { ua: 180, fa: 180, th: 70, sh: 0, shS: 0.05, ft: -90 } })
    },
    rep: [
      { key: 'hold', from: 'hold', to: 'hold', dur: 4000, word: 'Hold', breath: 'in', sub: 'hips up' },
      { key: 'hold2', to: 'hold', dur: 4000, word: 'Hold', breath: 'out', sub: 'straight line, knees to head' }
    ],
    switchAt: { text: 'Other side', mirror: true },
    ready: { pose: 'hold', text: 'Elbow under shoulder, knees bent' },
    guides: [{ type: 'ring', at: { p: 'nEl', pose: 'hold' }, r: 15, show: ['hold'] }],
    note: 'Half the time on each side.',
    tips: ['Lie on your side, elbow under your shoulder, knees bent.', 'Lift your hips so your body is straight from knees to head.', 'Breathe slowly. Switch sides halfway.'],
    adjust: [['Too easy?', 'Straighten your legs for a full side plank.']]
  });

  def({
    id: 'side-bend', name: 'Kneeling side bend', view: 'front', scene: { mat: [190, 260] },
    poses: (function () {
      var legsN = { th: 0, sh: 0, shS: 0.05, ft: -80 }, legsF = { th: 0, sh: 0, shS: 0.05, ft: 80 };
      return {
        tall: P({ x: 320, y: 297, n: Object.assign({ ua: -8, fa: -4 }, legsN), f: Object.assign({ ua: 8, fa: 4 }, legsF) }),
        bendN: P({ x: 320, y: 297, t: 205, h: 208, n: Object.assign({ ua: -12, fa: -6 }, legsN), f: Object.assign({ ua: 200, fa: 225 }, legsF) }),
        bendF: P({ x: 320, y: 297, t: 155, h: 152, f: Object.assign({ ua: 12, fa: 6 }, legsF), n: Object.assign({ ua: -200, fa: -225 }, legsN) })
      };
    })(),
    rep: [
      { key: 'bend', from: 'tall', to: 'bendN', dur: 1500, word: 'Bend', breath: 'out', sub: 'slide your hand down your thigh' },
      { key: 'up', to: 'tall', dur: 1000, word: 'Up', breath: 'in', sub: 'tall kneel' },
      { key: 'bend', to: 'bendF', dur: 1500, word: 'Bend', breath: 'out', sub: 'other side' },
      { key: 'up', to: 'tall', dur: 1000, word: 'Up', breath: 'in', sub: 'tall kneel' }
    ],
    ready: { pose: 'tall', text: 'Kneel tall, arms by your sides' },
    guides: [],
    note: 'One side then the other, about 5 seconds per pair.',
    tips: ['Kneel tall on the mat.', 'Breathe out, slide one hand down your thigh and reach the other arm over your head.', 'Come back up and switch sides.'],
    adjust: []
  });

  def({
    id: 'cat-cow', name: 'Cat-cow', scene: { mat: [40, 500] },
    bend: { nArm: { x: -1, y: 0 }, fArm: { x: -1, y: 0 } },
    poses: (function () {
      var leg = { th: 0, sh: -90, ft: -90 }, ik = { nArm: [368, 396], fArm: [368, 396] };
      return {
        cow: P({ x: 250, y: 297, t: 90, h: 135, curve: -16, n: leg, f: leg, ik: ik }),
        cat: P({ x: 250, y: 297, t: 90, h: 45, curve: 24, n: leg, f: leg, ik: ik })
      };
    })(),
    rep: [
      { key: 'cow', from: 'cat', to: 'cow', dur: 2500, word: 'Cow', breath: 'in', sub: 'belly down, look forward' },
      { key: 'cat', to: 'cat', dur: 2500, word: 'Cat', breath: 'out', sub: 'round your back, chin to chest' }
    ],
    ready: { pose: 'cat', text: 'Hands and knees' },
    guides: [],
    work: 60, rest: 0,
    note: 'Slow, with your breathing.',
    tips: ['On hands and knees.', 'Breathe in, let your belly drop and look forward.', 'Breathe out, round your back and tuck your chin.'],
    adjust: []
  });

  def({
    id: 'hip-flexor', name: 'Hip flexor stretch', scene: { mat: [170, 290] },
    bend: { nLeg: { x: 1, y: -0.3 } },
    poses: {
      base: P({ x: 316, y: 300, b: HANDS_ON_HIPS, n: { ft: 90 }, f: { th: -12, sh: -90, ft: -90 }, ik: { nLeg: [410, 392] } }),
      ease: P({ x: 330, y: 304, b: HANDS_ON_HIPS, n: { ft: 90 }, f: { th: -21, sh: -90, ft: -90 }, ik: { nLeg: [410, 392] } }),
      stretch: P({ x: 340, y: 306, b: HANDS_ON_HIPS, n: { ft: 90 }, f: { th: -27, sh: -90, ft: -90 }, ik: { nLeg: [410, 392] } })
    },
    rep: [
      { key: 'push', from: 'ease', to: 'stretch', dur: 4000, word: 'Hips forward', breath: 'out', sub: 'squeeze your back glute' },
      { key: 'breathe', to: 'ease', dur: 4000, word: 'Breathe', breath: 'in', sub: 'stay tall' }
    ],
    switchAt: { text: 'Other leg', mirror: true },
    ready: { pose: 'base', text: 'One knee down, other foot forward' },
    guides: [
      { type: 'ring', at: { p: 'pelvis', pose: 'stretch', dx: 8, dy: 26 }, r: 16, show: ['push', 'breathe'] },
      { type: 'text', text: 'Feel it here', at: { p: 'pelvis', pose: 'stretch', dx: -30, dy: 72 }, anchor: 'end', show: ['push', 'breathe'] }
    ],
    work: 60, rest: 0,
    note: 'Half the time on each leg.',
    tips: ['One knee down on the mat, the other foot flat in front.', 'Stay tall and gently push your hips forward until you feel the front of your back hip.', 'Switch legs halfway.'],
    adjust: []
  });

  def({
    id: 'cobra', name: 'Cobra stretch', scene: { mat: [10, 460] }, anchor: { point: 'pelvis', at: [250, 388] },
    bend: { nArm: { x: -1, y: -0.6 }, fArm: { x: -1, y: -0.6 } },
    poses: (function () {
      var legs = { th: -90, sh: -90, ft: -90 };
      return {
        down: P({ t: 92, h: 94, n: legs, f: legs, ik: { nArm: [354, 396], fArm: [354, 396] } }),
        up: P({ t: 125, h: 138, n: legs, f: legs, ik: { nArm: [356, 396], fArm: [356, 396] } })
      };
    })(),
    rep: [
      { key: 'lift', from: 'down', to: 'up', dur: 2000, word: 'Lift', breath: 'in', sub: 'press your chest up, hips stay down' },
      { key: 'hold', to: 'up', dur: 3000, word: 'Hold', breath: 'out', sub: 'shoulders away from your ears' },
      { key: 'lower', to: 'down', dur: 2000, word: 'Lower', breath: 'in', sub: 'slowly back down' },
      { key: 'rest', to: 'down', dur: 1000, word: 'Rest', breath: 'out', sub: 'relax' }
    ],
    ready: { pose: 'down', text: 'Lie on your belly, hands under shoulders' },
    guides: [{ type: 'text', text: 'Hips stay on the mat', at: { p: 'pelvis', pose: 'up', dy: 45 }, anchor: 'middle', show: ['lift', 'hold'] }],
    work: 60, rest: 0,
    note: 'Opens the front of your body after long hours of sitting.',
    tips: ['Lie on your belly, hands under your shoulders.', 'Breathe in and gently press your chest up. Hips stay down.', 'Hold, then lower slowly.'],
    adjust: [['Lower back pinches?', 'Lift less, staying on your forearms.']]
  });

  def({
    id: 'seated-hamstring', name: 'Seated hamstring stretch', scene: { mat: [190, 330] }, anchor: { point: 'pelvis', at: [280, 388] },
    poses: (function () {
      var legs = { th: 92, sh: 90, ft: 180 };
      return {
        sit: P({ t: 172, h: 176, n: Object.assign({ ua: 25, fa: 50 }, legs), f: Object.assign({ ua: 25, fa: 50 }, legs) }),
        mid: P({ t: 138, h: 134, n: Object.assign({ ua: 45, fa: 65 }, legs), f: Object.assign({ ua: 45, fa: 65 }, legs) }),
        reach: P({ t: 122, h: 118, n: Object.assign({ ua: 55, fa: 62 }, legs), f: Object.assign({ ua: 55, fa: 62 }, legs) })
      };
    })(),
    rep: [
      { key: 'reach', from: 'mid', to: 'reach', dur: 4000, word: 'Reach', breath: 'out', sub: 'toward your toes, back long' },
      { key: 'breathe', to: 'mid', dur: 4000, word: 'Breathe', breath: 'in', sub: 'ease up a little' }
    ],
    ready: { pose: 'sit', text: 'Sit with your legs straight' },
    guides: [],
    work: 60, rest: 0,
    note: 'Gentle stretch. No bouncing.',
    tips: ['Sit with both legs straight in front of you.', 'Breathe out and reach toward your toes with a long back.', 'Ease up a little as you breathe in.'],
    adjust: [['Very tight?', 'Bend your knees a little.']]
  });

  /* ======================= SUNDAY ======================= */

  def({
    id: 'walk', name: 'Walk', scene: { mat: null },
    poses: {
      cN: P({ x: 330, y: 214, n: { th: 22, sh: 22, ft: 112, ua: -22, fa: -12 }, f: { th: -18, sh: -38, ft: 60, ua: 24, fa: 40 } }),
      pass: P({ x: 330, y: 206, n: { th: -4, sh: -4, ft: 90, ua: 2, fa: 10 }, f: { th: 20, sh: -30, ft: 80, ua: 2, fa: 10 } }),
      cF: P({ x: 330, y: 214, f: { th: 22, sh: 22, ft: 112, ua: -22, fa: -12 }, n: { th: -18, sh: -38, ft: 60, ua: 24, fa: 40 } }),
      pass2: P({ x: 330, y: 206, f: { th: -4, sh: -4, ft: 90, ua: 2, fa: 10 }, n: { th: 20, sh: -30, ft: 80, ua: 2, fa: 10 } })
    },
    rep: [
      { key: 'walk', from: 'cN', to: 'pass', dur: 450, word: 'Walk', breath: 'easy', sub: 'easy pace around your home' },
      { key: 'walk', to: 'cF', dur: 450, word: 'Walk', breath: 'easy', sub: 'easy pace around your home' },
      { key: 'walk', to: 'pass2', dur: 450, word: 'Walk', breath: 'easy', sub: 'easy pace around your home' },
      { key: 'walk', to: 'cN', dur: 450, word: 'Walk', breath: 'easy', sub: 'easy pace around your home' }
    ],
    ready: { pose: 'pass', text: 'Music or audio notes are fine' },
    guides: [],
    work: 720, rest: 0,
    note: 'Walk around your home at an easy pace.',
    tips: ['Walk around your home at a comfortable pace.', 'Listen to music, a podcast or your study notes.'],
    adjust: []
  });

  def({
    id: 'neck-rolls', name: 'Neck and shoulder rolls', view: 'front', scene: { mat: [200, 240] },
    poses: (function () {
      var n = { ua: -8, fa: -4, ft: -80 }, f = { ua: 8, fa: 4, ft: 80 };
      return {
        rest: P({ x: 320, y: 204, n: n, f: f }),
        shrug: P({ x: 320, y: 204, lift: 14, n: n, f: f }),
        tiltR: P({ x: 320, y: 204, h: 158, n: n, f: f }),
        tiltL: P({ x: 320, y: 204, h: 202, n: n, f: f })
      };
    })(),
    rep: [
      { key: 'shrug', from: 'rest', to: 'shrug', dur: 1200, word: 'Shoulders up', breath: 'in', sub: 'toward your ears' },
      { key: 'roll', to: 'rest', dur: 1600, word: 'Roll back', breath: 'out', sub: 'and down' },
      { key: 'shrug', to: 'shrug', dur: 1200, word: 'Shoulders up', breath: 'in', sub: 'toward your ears' },
      { key: 'roll', to: 'rest', dur: 1600, word: 'Roll back', breath: 'out', sub: 'and down' },
      { key: 'tilt', to: 'tiltR', dur: 2000, word: 'Ear to shoulder', breath: 'easy', sub: 'gently' },
      { key: 'tilt', to: 'tiltR', dur: 1500, word: 'Hold', breath: 'easy', sub: 'let your shoulder drop' },
      { key: 'centre', to: 'rest', dur: 1200, word: 'Centre', breath: 'easy', sub: 'head back up' },
      { key: 'tilt', to: 'tiltL', dur: 2000, word: 'Other side', breath: 'easy', sub: 'gently' },
      { key: 'tilt', to: 'tiltL', dur: 1500, word: 'Hold', breath: 'easy', sub: 'let your shoulder drop' },
      { key: 'centre', to: 'rest', dur: 1200, word: 'Centre', breath: 'easy', sub: 'head back up' }
    ],
    ready: { pose: 'rest', text: 'Stand or sit tall' },
    guides: [],
    work: 60, rest: 0,
    note: 'Slow and gentle. Great after long hours at a screen.',
    tips: ['Lift your shoulders to your ears, then roll them back and down.', 'Tilt one ear toward your shoulder, hold, then the other side.'],
    adjust: []
  });

  /* ======================= TEST DAY ======================= */

  def({
    id: 'pushup', name: 'Push-up', scene: { mat: [40, 420] }, anchor: { point: 'nToe', at: [100, 400] },
    bend: { nArm: { x: -1, y: -0.5 }, fArm: { x: -1, y: -0.5 } },
    poses: {
      top: P({ t: 107, h: 108, b: { th: -73, sh: -73, ft: 60 }, ik: { nArm: [362, 396], fArm: [362, 396] } }),
      bottom: P({ t: 96, h: 97, b: { th: -84, sh: -84, ft: 60 }, ik: { nArm: [362, 396], fArm: [362, 396] } })
    },
    rep: [
      { key: 'down', from: 'top', to: 'bottom', dur: 1500, word: 'Down', breath: 'in', sub: 'chest close to the floor' },
      { key: 'up', to: 'top', dur: 1000, word: 'Push', breath: 'out', sub: 'push the floor away' },
      { key: 'top', to: 'top', dur: 400, word: 'Top', breath: 'out', sub: 'body straight' }
    ],
    ready: { pose: 'top', text: 'Hands under shoulders, body straight' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'top', dx: -7, dy: -25 }, to: { p: 'shoulder', pose: 'top', dx: -7, dy: -25 }, show: ['top', 'ready'] },
      { type: 'text', text: 'One straight line', at: [60, 250], show: ['top', 'ready'] }
    ],
    work: 60, rest: 120,
    note: 'Test: as many good push-ups as you can in 60 seconds.',
    tips: ['Hands under your shoulders, body straight from head to heels.', 'Lower until your chest is close to the floor, then push up.', 'Count the good ones. Stop when your form breaks.'],
    adjust: []
  });

  def({
    id: 'plank', name: 'Plank', scene: { mat: [40, 480] }, anchor: { point: 'nToe', at: [110, 400] },
    poses: {
      plank: P({ t: 98.2, h: 100, b: { th: -81.8, sh: -81.8, ft: 60, ua: 0, fa: 90 } })
    },
    rep: [
      { key: 'hold', from: 'plank', to: 'plank', dur: 4000, word: 'Hold', breath: 'in', sub: 'squeeze your belly' },
      { key: 'hold2', to: 'plank', dur: 4000, word: 'Hold', breath: 'out', sub: 'body in one straight line' }
    ],
    ready: { pose: 'plank', text: 'Forearms down, up on your toes' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'plank', dx: -4, dy: -25 }, to: { p: 'shoulder', pose: 'plank', dx: -4, dy: -25 }, show: ['hold', 'hold2', 'ready'] },
      { type: 'text', text: 'One straight line', at: [180, 300], show: ['hold', 'hold2'] },
      { type: 'ring', at: { p: 'nEl', pose: 'plank' }, r: 15, show: ['hold2'] }
    ],
    work: 60, rest: 120,
    note: 'Test: hold as long as you can with a straight body.',
    tips: ['Forearms on the mat, elbows under your shoulders, up on your toes.', 'Straight line from heels to head.', 'Stop when your hips sag.'],
    adjust: []
  });

  /* ======================= DUMBBELL STRENGTH ======================= */

  def({
    id: 'goblet-squat', name: 'Goblet squat', scene: { mat: MAT }, anchor: STAND, hold: { n: 'goblet' },
    poses: {
      stand: P({ t: 176, h: 178, b: { ua: 22, fa: 162 } }),
      bottom: P({ t: 140, h: 162, b: { ua: 48, fa: 168, th: 88, sh: -30 } })
    },
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 2000, word: 'Down', breath: 'in', sub: 'push hips back · 2 seconds' },
      { key: 'hold', to: 'bottom', dur: 1000, word: 'Hold', breath: 'hold', sub: 'thighs level with the floor' },
      { key: 'up', to: 'stand', dur: 1000, word: 'Up', breath: 'out', sub: 'push through your heels' },
      { key: 'top', to: 'stand', dur: 500, word: 'Top', breath: 'out', sub: 'stand tall' }
    ],
    ready: { pose: 'stand', text: 'Hold one dumbbell at your chest' },
    guides: [
      { type: 'path', point: 'pelvis', from: 'stand', to: 'bottom', dx: -30, layer: 'back', show: ['down'] },
      { type: 'text', text: 'Push hips back', at: [262, 186], anchor: 'end', show: ['down'] },
      { type: 'line', from: { p: 'pelvis', pose: 'bottom', dx: -50 }, to: { p: 'pelvis', pose: 'bottom', dx: 146 }, show: ['hold'] },
      { type: 'text', text: 'Thighs level\nwith the floor', at: { p: 'nKnee', pose: 'bottom', dx: 54, dy: 6 }, show: ['hold'] },
      { type: 'ring', at: { p: 'nHeel', pose: 'stand', dy: 6 }, show: ['up'] },
      { type: 'text', text: 'Push through your heels', at: [343, 433], anchor: 'middle', show: ['up'] }
    ],
    note: 'One squat takes 4.5 seconds. The dumbbell stays against your chest.',
    tips: [
      'Hold one dumbbell upright against your chest, both hands under the top end.',
      'Breathe in, push your hips back and squat until your thighs are level with the floor.',
      'Hold 1 second, then breathe out and drive up through your heels.'
    ],
    adjust: [['Too easy?', 'Take 3 seconds on the way down.'], ['Knees complain?', 'Go a little less deep.']]
  });

  variant('split-squat', {
    id: 'db-split-squat', name: 'Dumbbell split squat', hold: { n: 'bar', f: 'bar' },
    poses: {
      top: P({ x: 300, y: 222, b: { ua: 2, fa: 2 }, n: { ft: 90 }, f: { ft: 46 }, ik: { nLeg: [380, 392], fLeg: [210, 372] } }),
      bottom: P({ x: 296, y: 294, b: { ua: 2, fa: 2 }, n: { ft: 90 }, f: { ft: 46 }, ik: { nLeg: [380, 392], fLeg: [210, 372] } })
    },
    ready: { pose: 'top', text: 'Dumbbells at your sides, one foot back' },
    note: 'One rep takes 4 seconds. Halfway through, switch legs.',
    tips: [
      'A dumbbell in each hand, arms long by your sides.',
      'Breathe in and lower straight down until your back knee nearly touches the floor.',
      'Breathe out and push through your front heel to come up. Switch legs halfway.'
    ],
    adjust: [['Wobbly?', 'Put the dumbbells down and hold a chair.']]
  });

  def({
    id: 'floor-press', name: 'Dumbbell floor press', scene: { mat: [130, 340] }, anchor: { point: 'shoulder', at: [196, 386] },
    hold: { n: 'face', f: 'face' },
    bend: { nLeg: { x: 0, y: -1 }, fLeg: { x: 0, y: -1 } },
    poses: {
      low: P({ t: -90, h: -94, b: { ua: 100, uaS: 0.55, fa: 180, ft: 90, th: 150, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } }),
      high: P({ t: -90, h: -94, b: { ua: 180, fa: 180, ft: 90, th: 150, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } })
    },
    rep: [
      { key: 'press', from: 'low', to: 'high', dur: 1000, word: 'Press', breath: 'out', sub: 'push the dumbbells up' },
      { key: 'top', to: 'high', dur: 300, word: 'Top', breath: 'out', sub: 'arms straight' },
      { key: 'lower', to: 'low', dur: 2000, word: 'Lower', breath: 'in', sub: 'elbows to the floor · 2 seconds' },
      { key: 'touch', to: 'low', dur: 300, word: 'Touch', breath: 'in', sub: 'elbows touch lightly' }
    ],
    ready: { pose: 'low', text: 'Lie on your back, dumbbells over your chest' },
    guides: [
      { type: 'ring', at: { p: 'nEl', pose: 'low' }, r: 14, show: ['touch', 'lower'] },
      { type: 'text', text: 'Elbows touch the floor', at: [300, 433], anchor: 'middle', show: ['touch', 'lower'] }
    ],
    note: 'One press takes about 3.5 seconds, around 8 in 30 seconds.',
    tips: [
      'Lie on your back, knees bent, a dumbbell in each hand over your chest.',
      'Breathe out and press both dumbbells straight up.',
      'Lower slowly until your elbows touch the floor, then press again.'
    ],
    adjust: [['Too easy?', 'Take 3 seconds on the way down.']]
  });

  /* ======================= SWEAT MOVES ======================= */

  def({
    id: 'thruster', name: 'Dumbbell thruster', zoom: 0.84, scene: { mat: MAT }, anchor: STAND, hold: { n: 'face', f: 'face' },
    poses: {
      rack: P({ t: 178, h: 178, b: { ua: 20, fa: 175 } }),
      bottom: P({ t: 142, h: 160, b: { ua: 48, fa: 172, th: 88, sh: -30 } }),
      mid: P({ t: 180, h: 180, b: { ua: 60, uaS: 0.3, fa: 178 } }),
      press: P({ t: 180, h: 182, b: { ua: 172, fa: 176 } })
    },
    rep: [
      { key: 'down', from: 'rack', to: 'bottom', dur: 1000, word: 'Squat', breath: 'in', sub: 'dumbbells at your shoulders' },
      { key: 'up', to: 'rack', dur: 500, word: 'Drive up', breath: 'out', sub: 'stand up fast' },
      { key: 'press', to: 'mid', dur: 300, word: 'Press', breath: 'out', sub: 'straight overhead', ease: 'lin' },
      { key: 'press', to: 'press', dur: 300, word: 'Press', breath: 'out', sub: 'straight overhead' },
      { key: 'back', to: 'rack', dur: 600, word: 'Back down', breath: 'in', sub: 'dumbbells to your shoulders' }
    ],
    ready: { pose: 'rack', text: 'Dumbbells at your shoulders' },
    guides: [],
    note: 'Squat, stand and press in one smooth move. About 2.7 seconds per rep.',
    tips: ['Hold a dumbbell at each shoulder.', 'Squat down, then drive up and use that push to press both dumbbells overhead.', 'Bring them back to your shoulders and go straight into the next squat.'],
    adjust: [['Too much?', 'Squat less deep and keep moving.']]
  });

  def({
    id: 'mountain-climber', name: 'Mountain climbers', scene: { mat: [40, 440] },
    bend: { nArm: { x: -1, y: 0 }, fArm: { x: -1, y: 0 } },
    poses: (function () {
      var arms = { nArm: [398, 396], fArm: [398, 396] }, back = { th: -72, sh: -72, ft: 40 }, knee = { th: 55, sh: -100, ft: 0 };
      var base = { x: 280, y: 312, t: 100.8, h: 104 }, up = { x: 280, y: 305, t: 99.5, h: 103 };
      return {
        plank: P(Object.assign({}, base, { n: back, f: back, ik: arms })),
        kneeN: P(Object.assign({}, up, { n: knee, f: back, ik: arms })),
        kneeF: P(Object.assign({}, up, { n: back, f: knee, ik: arms }))
      };
    })(),
    rep: [
      { key: 'climb', from: 'plank', to: 'kneeN', dur: 350, word: 'Climb', breath: 'easy', sub: 'knees in, toes land softly' },
      { key: 'climb', to: 'plank', dur: 350, word: 'Climb', breath: 'easy', sub: 'knees in, toes land softly' },
      { key: 'climb', to: 'kneeF', dur: 350, word: 'Climb', breath: 'easy', sub: 'knees in, toes land softly' },
      { key: 'climb', to: 'plank', dur: 350, word: 'Climb', breath: 'easy', sub: 'knees in, toes land softly' }
    ],
    ready: { pose: 'plank', text: 'Hands under your shoulders, plank' },
    guides: [],
    note: 'Fast but controlled. Land on your toes softly so it stays quiet.',
    tips: ['Start in a high plank, hands under your shoulders.', 'Drive one knee toward your chest, then the other.', 'Keep your hips low and land softly.'],
    adjust: [['Too hard?', 'Slow down, or put your hands on the chair seat.']]
  });

  def({
    id: 'db-swing', name: 'Dumbbell swing', scene: { mat: MAT }, anchor: STAND, hold: { n: 'end' },
    poses: {
      hike: P({ t: 115, h: 120, b: { th: 50, sh: -5, ua: -25, fa: -30 } }),
      top: P({ t: 180, h: 180, b: { ua: 92, fa: 92 } })
    },
    rep: [
      { key: 'snap', from: 'hike', to: 'top', dur: 600, word: 'Snap hips', breath: 'out', sub: 'arms float to chest height' },
      { key: 'snap', to: 'top', dur: 150, word: 'Snap hips', breath: 'out', sub: 'arms float to chest height' },
      { key: 'hike', to: 'hike', dur: 650, word: 'Hinge back', breath: 'in', sub: 'dumbbell between your legs' }
    ],
    ready: { pose: 'top', text: 'Hold one dumbbell with both hands' },
    guides: [{ type: 'text', text: 'Power comes\nfrom your hips', at: [238, 196], anchor: 'end', show: ['snap'] }],
    note: 'About 1.4 seconds per swing. Your arms just hold on; your hips do the work.',
    tips: ['Hold one dumbbell by one end with both hands, feet a bit wider than hips.', 'Hinge back so the dumbbell swings between your legs.', 'Snap your hips forward to swing it up to chest height. Arms stay long.'],
    adjust: [['Lower back tired?', 'Make the swing smaller and squeeze your glutes at the top.']]
  });

  def({
    id: 'burpee', name: 'Step-back burpee', scene: { mat: [60, 430] },
    bend: { nLeg: { x: 1, y: 0 }, fLeg: { x: 1, y: 0 }, nArm: { x: -1, y: 0 }, fArm: { x: -1, y: 0 } },
    poses: {
      stand: P({ x: 330, y: 206, t: 178, b: { ua: 6, fa: 8, ft: 90 }, ik: { nLeg: [330, 392], fLeg: [334, 392] } }),
      crouch: P({ x: 290, y: 316, t: 108, h: 112, b: { ft: 90 }, ik: { nLeg: [330, 392], fLeg: [334, 392], nArm: [404, 394], fArm: [404, 394] } }),
      stepN: P({ x: 272, y: 306, t: 106, h: 110, n: { ft: 60 }, f: { ft: 90 }, ik: { nLeg: [86, 384], fLeg: [334, 392], nArm: [404, 394], fArm: [404, 394] } }),
      plank: P({ x: 262, y: 316, t: 104, h: 106, b: { ft: 60 }, ik: { nLeg: [86, 384], fLeg: [86, 384], nArm: [404, 394], fArm: [404, 394] } }),
      stepIn: P({ x: 272, y: 306, t: 106, h: 110, n: { ft: 90 }, f: { ft: 60 }, ik: { nLeg: [334, 392], fLeg: [86, 384], nArm: [404, 394], fArm: [404, 394] } })
    },
    rep: [
      { key: 'down', from: 'stand', to: 'crouch', dur: 700, word: 'Down', breath: 'easy', sub: 'hands to the floor' },
      { key: 'back', to: 'stepN', dur: 400, word: 'Step back', breath: 'easy', sub: 'one foot, then the other' },
      { key: 'back', to: 'plank', dur: 400, word: 'Step back', breath: 'easy', sub: 'one foot, then the other' },
      { key: 'plank', to: 'plank', dur: 400, word: 'Plank', breath: 'easy', sub: 'body straight' },
      { key: 'in', to: 'stepIn', dur: 400, word: 'Step in', breath: 'easy', sub: 'one foot, then the other' },
      { key: 'in', to: 'crouch', dur: 400, word: 'Step in', breath: 'easy', sub: 'one foot, then the other' },
      { key: 'up', to: 'stand', dur: 800, word: 'Stand up', breath: 'easy', sub: 'tall, chest up' }
    ],
    ready: { pose: 'stand', text: 'Stand tall with floor space in front' },
    guides: [],
    note: 'No jumping, so it stays quiet. About 3.5 seconds per rep.',
    tips: ['Squat down and put your hands on the floor.', 'Step one foot back, then the other, into a plank.', 'Step back in one foot at a time and stand up tall.'],
    adjust: [['Too hard?', 'Put your hands on the chair seat instead of the floor.']]
  });

  /* ======================= SESSIONS ======================= */

  WA.sessions = [
    { id: 'warmup', name: 'Warm-up', note: 'Start of every workout · 40 seconds each', work: 40, rest: 0,
      items: ['march', 'arm-circles', 'hip-circles', 'warmup-squat', 'inchworm', 'reach-hinge'] },
    { id: 'strength-a', name: 'Strength basics A', note: 'Dumbbell and chair basics · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['goblet-squat', 'chair-pushup', 'row', 'glute-bridge', 'seated-press', 'heel-taps'] },
    { id: 'strength-b', name: 'Strength basics B', note: 'Dumbbell basics · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['rdl', 'db-split-squat', 'floor-press', 'one-arm-row', 'hammer-curl', 'knee-plank'] },
    { id: 'sweat', name: 'Finisher moves', note: 'Used in the all-out finishers · fast but quiet', work: 40, rest: 20,
      items: ['thruster', 'mountain-climber', 'db-swing', 'burpee', 'high-knee-march'] },
    { id: 'db-more', name: 'More dumbbell strength', note: 'From the 30-minute dumbbell workout · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['sumo-curl', 'alt-row', 'deadlift-squat', 'overhead-extension', 'side-lunge-raise', 'curl-press', 'reverse-lunge-curl',
        'db-leg-raise', 'bridge-press', 'renegade-row', 'pushup-climber'] },
    { id: 'plank-core', name: 'Plank and core', note: 'Planks, back and belly · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['side-plank', 'shoulder-taps', 'plank-updown', 'inchworm', 'kickback', 'superman', 'superman-pull', 'heel-touch',
        'flutter-kicks', 'seated-punches', 'heel-bridge', 'side-crunch'] },
    { id: 'hiit', name: 'Quiet HIIT', note: 'The jumping moves from the HIIT videos, without the jump · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['squat-knee', 'kick-toe-touch', 'lunge-kick', 'rope-skip', 'in-out-steps', 'squat-pulse', 'side-squat', 'skater-steps'] },
    { id: 'cardio', name: 'Quiet cardio', note: 'No jumping · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['high-knee-march', 'step-jacks', 'squat-calf', 'shadow-box', 'knee-elbow', 'lunge-reach'] },
    { id: 'saturday', name: 'Slow core', note: 'Used on the core + stretch day · 40 s work, 20 s rest', work: 40, rest: 20,
      items: ['bird-dog', 'heel-taps', 'side-plank-knees', 'bridge-hold', 'side-bend'] },
    { id: 'stretch', name: 'Stretches', note: '1 minute each', work: 60, rest: 0,
      items: ['cat-cow', 'hip-flexor', 'cobra', 'childs-pose', 'seated-hamstring'] },
    { id: 'stretch-more', name: 'More stretches', note: 'Warm-up and cool-down · 40 s to 1 minute each', work: 40, rest: 0,
      items: ['standing-side-bend', 'knee-hug', 'lying-hamstring', 'butterfly', 'seated-glute'] },
    { id: 'sunday', name: 'Reset day', note: 'Easy day', rest: 0,
      items: [{ id: 'walk', work: 720 }, { id: 'chest-opener', work: 60 }, { id: 'hamstring-stretch', work: 60 },
        { id: 'hip-flexor', work: 60 }, { id: 'neck-rolls', work: 60 }, { id: 'childs-pose', work: 60 }, { id: 'breathing', work: 180 }] },
    { id: 'cooldown', name: 'Cool-down', note: 'End of every hard day', rest: 0,
      items: [{ id: 'chest-opener', work: 40 }, { id: 'hamstring-stretch', work: 40 }, { id: 'childs-pose', work: 40 }, { id: 'breathing', work: 180 }] },
    { id: 'test', name: 'Test', note: 'On the reset day every second week', rest: 60,
      items: [{ id: 'pushup', work: 60 }, { id: 'squat', work: 60 }, { id: 'plank', work: 60 }] }
  ];
})();
