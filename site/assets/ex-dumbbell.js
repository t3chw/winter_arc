/* Winter Arc: dumbbell strength moves (from the 30-minute dumbbell workout, adapted for home). */
(function () {
  'use strict';
  var H = window.WA.exHelpers, P = H.P, def = H.def, variant = H.variant, STAND = H.STAND, MAT = H.MAT;

  /* Front view, wide stance: knees push out over the toes. */
  def({
    id: 'sumo-curl', name: 'Sumo squat + curl', view: 'front', scene: { mat: [190, 260] }, hold: { n: 'face', f: 'face' },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var ik = { nLeg: [250, 392], fLeg: [390, 392] };
      return {
        stand: P({ x: 320, y: 212, n: { ua: -8, fa: -4, ft: -80 }, f: { ua: 8, fa: 4, ft: 80 }, ik: ik }),
        bottom: P({ x: 320, y: 284, n: { ua: -4, fa: -2, ft: -80 }, f: { ua: 4, fa: 2, ft: 80 }, ik: ik }),
        curl: P({ x: 320, y: 212, n: { ua: -6, fa: -170, faS: 0.55, ft: -80 }, f: { ua: 6, fa: 170, faS: 0.55, ft: 80 }, ik: ik })
      };
    })(),
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 1500, word: 'Squat', breath: 'in', sub: 'knees push out' },
      { key: 'up', to: 'stand', dur: 900, word: 'Up', breath: 'out', sub: 'push through your heels' },
      { key: 'curl', to: 'curl', dur: 900, word: 'Curl', breath: 'out', sub: 'elbows stay by your sides' },
      { key: 'lower', to: 'stand', dur: 1200, word: 'Lower', breath: 'in', sub: 'arms long' }
    ],
    ready: { pose: 'stand', text: 'Feet wide, toes out' },
    guides: [
      { type: 'arrow', from: { p: 'nKnee', pose: 'stand', dx: -10 }, to: { p: 'nKnee', pose: 'bottom', dx: -24 }, show: ['down'] },
      { type: 'arrow', from: { p: 'fKnee', pose: 'stand', dx: 10 }, to: { p: 'fKnee', pose: 'bottom', dx: 24 }, show: ['down'] },
      { type: 'text', text: 'Knees out', at: [320, 433], anchor: 'middle', show: ['down'] }
    ],
    note: 'Squat, stand, curl. About 4.5 seconds per rep.',
    tips: [
      'Feet wider than your shoulders, toes turned out, a dumbbell in each hand.',
      'Breathe in and squat down, pushing your knees out over your toes.',
      'Stand up, then curl both dumbbells with palms facing in. Lower and go again.'
    ],
    adjust: [['Too easy?', 'Hold 2 seconds at the bottom of the squat.']]
  });

  variant('row', {
    id: 'alt-row', name: 'Alternating row',
    poses: {
      hang: P({ t: 135, h: 140, b: { th: 25, sh: -8 } }),
      pullN: P({ t: 135, h: 140, b: { th: 25, sh: -8 }, n: { ua: -58 } }),
      pullF: P({ t: 135, h: 140, b: { th: 25, sh: -8 }, f: { ua: -58 } })
    },
    rep: [
      { key: 'pull', from: 'hang', to: 'pullN', dur: 900, word: 'Pull', breath: 'out', sub: 'one elbow back' },
      { key: 'lower', to: 'hang', dur: 1100, word: 'Lower', breath: 'in', sub: 'arm long' },
      { key: 'pull', to: 'pullF', dur: 900, word: 'Pull', breath: 'out', sub: 'other elbow back' },
      { key: 'lower', to: 'hang', dur: 1100, word: 'Lower', breath: 'in', sub: 'arm long' }
    ],
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'hang', dx: -17, dy: -17 }, to: { p: 'shoulder', pose: 'hang', dx: -17, dy: -17 }, show: ['ready'] },
      { type: 'text', text: 'Body stays still,\nonly the arm moves', at: [238, 120], anchor: 'end', show: ['pull'] }
    ],
    note: 'One arm, then the other. About 4 seconds per pair.',
    tips: [
      'A dumbbell in each hand, soft knees, hinge forward with a flat back.',
      'Breathe out and row one dumbbell to your ribs. Lower it while breathing in.',
      'Then the other arm. Your body stays still.'
    ],
    adjust: [['Lower back tired?', 'Lean forward a little less.']]
  });

  def({
    id: 'deadlift-squat', name: 'Deadlift + squat', scene: { mat: MAT }, anchor: STAND, hold: { n: 'face', f: 'face' },
    poses: {
      stand: P({ t: 178, h: 178, b: { th: 3, sh: -3, ua: 6, fa: 6 } }),
      hinge: P({ t: 115, h: 118, b: { th: 54, sh: -5, ua: 0, fa: 0 } }),
      squat: P({ t: 140, h: 158, b: { ua: 4, fa: 4, th: 88, sh: -30 } })
    },
    rep: [
      { key: 'hinge', from: 'stand', to: 'hinge', dur: 1500, word: 'Hinge', breath: 'in', sub: 'hips back, legs almost straight' },
      { key: 'up', to: 'stand', dur: 900, word: 'Stand', breath: 'out', sub: 'squeeze your glutes' },
      { key: 'squat', to: 'squat', dur: 1500, word: 'Squat', breath: 'in', sub: 'now bend your knees' },
      { key: 'up', to: 'stand', dur: 900, word: 'Stand', breath: 'out', sub: 'push through your heels' }
    ],
    ready: { pose: 'stand', text: 'Dumbbells in front of your thighs' },
    guides: [
      { type: 'text', text: 'Legs almost straight', at: [238, 196], anchor: 'end', show: ['hinge'] },
      { type: 'text', text: 'Knees bend', at: [238, 196], anchor: 'end', show: ['squat'] },
      { type: 'line', from: { p: 'pelvis', pose: 'hinge', dx: -10, dy: -24 }, to: { p: 'shoulder', pose: 'hinge', dx: -10, dy: -24 }, show: ['hinge'] }
    ],
    note: 'One deadlift, one squat. About 5 seconds per pair.',
    tips: [
      'Hinge: push your hips back with almost straight legs, dumbbells slide down your thighs.',
      'Stand up, then squat: bend your knees until your thighs are level with the floor.',
      'Back stays flat in both.'
    ],
    adjust: [['Back rounds?', "Don't go as low on the deadlift."]]
  });

  def({
    id: 'overhead-extension', name: 'Overhead triceps extension', zoom: 0.84, scene: { mat: MAT }, anchor: STAND, hold: { n: 'hang' },
    poses: {
      up: P({ t: 180, h: 178, b: { ua: 174, fa: 178 } }),
      down: P({ t: 180, h: 176, b: { ua: 166, fa: -52 } })
    },
    rep: [
      { key: 'lower', from: 'up', to: 'down', dur: 2000, word: 'Lower', breath: 'in', sub: 'dumbbell behind your head · 2 seconds' },
      { key: 'press', to: 'up', dur: 1000, word: 'Extend', breath: 'out', sub: 'straighten your arms' },
      { key: 'top', to: 'up', dur: 400, word: 'Top', breath: 'out', sub: 'ribs down' }
    ],
    ready: { pose: 'up', text: 'One dumbbell overhead, both hands' },
    guides: [
      { type: 'ring', at: { p: 'nEl', pose: 'down' }, r: 14, show: ['lower', 'press'] },
      { type: 'text', text: 'Elbows point up,\nclose to your head', at: { p: 'nEl', pose: 'down', dx: 34, dy: 4 }, show: ['lower', 'press'] }
    ],
    note: 'One rep takes about 3.5 seconds, around 8 in 30 seconds.',
    tips: [
      'Hold one dumbbell overhead with both hands under the top end.',
      'Breathe in and lower it behind your head. Elbows point up and stay close.',
      'Breathe out and straighten your arms. Keep your ribs down.'
    ],
    adjust: [['Shoulders tight?', 'Do it sitting on the chair.']]
  });

  /* Front view: wide stance, shift to one side, stand, raise; then the other side. */
  def({
    id: 'side-lunge-raise', name: 'Side lunge + lateral raise', view: 'front', scene: { mat: [170, 300] }, hold: { n: 'face', f: 'face' },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var ik = { nLeg: [214, 392], fLeg: [426, 392] }, down = { n: { ua: -4, fa: -2, ft: -80 }, f: { ua: 4, fa: 2, ft: 80 } };
      return {
        stand: P({ x: 320, y: 228, n: { ua: -12, fa: -8, ft: -80 }, f: { ua: 12, fa: 8, ft: 80 }, ik: ik }),
        raise: P({ x: 320, y: 228, n: { ua: -86, fa: -88, ft: -80 }, f: { ua: 86, fa: 88, ft: 80 }, ik: ik }),
        lungeN: P({ x: 272, y: 264, t: 182, h: 182, n: down.n, f: down.f, ik: ik }),
        lungeF: P({ x: 368, y: 264, t: 178, h: 178, n: down.n, f: down.f, ik: ik })
      };
    })(),
    rep: [
      { key: 'lunge', from: 'stand', to: 'lungeN', dur: 1200, word: 'Side lunge', breath: 'in', sub: 'sit into one hip' },
      { key: 'up', to: 'stand', dur: 800, word: 'Centre', breath: 'out', sub: 'push back to the middle' },
      { key: 'raise', to: 'raise', dur: 800, word: 'Raise', breath: 'out', sub: 'arms out to shoulder height' },
      { key: 'lower', to: 'stand', dur: 1000, word: 'Lower', breath: 'in', sub: 'slowly' },
      { key: 'lunge', to: 'lungeF', dur: 1200, word: 'Side lunge', breath: 'in', sub: 'other side' },
      { key: 'up', to: 'stand', dur: 800, word: 'Centre', breath: 'out', sub: 'push back to the middle' },
      { key: 'raise', to: 'raise', dur: 800, word: 'Raise', breath: 'out', sub: 'arms out to shoulder height' },
      { key: 'lower', to: 'stand', dur: 1000, word: 'Lower', breath: 'in', sub: 'slowly' }
    ],
    ready: { pose: 'stand', text: 'Feet wide, dumbbells by your sides' },
    guides: [
      { type: 'line', from: { p: 'nHand', pose: 'raise', dx: -24 }, to: { p: 'fHand', pose: 'raise', dx: 24 }, show: ['raise'] },
      { type: 'text', text: 'Shoulder height, no higher', at: [320, 433], anchor: 'middle', show: ['raise'] },
      { type: 'text', text: 'Other leg stays straight', at: [320, 433], anchor: 'middle', show: ['lunge'] }
    ],
    note: 'Lunge left, raise, lunge right, raise. About 7.5 seconds per pair.',
    tips: [
      'Feet wide, a dumbbell in each hand.',
      'Bend one knee and sit into that hip; the other leg stays straight. Push back to the middle.',
      'Raise both arms out to shoulder height, lower slowly, then lunge to the other side.'
    ],
    adjust: [['Shoulders burning?', 'Skip the raise and just lunge.']]
  });

  def({
    id: 'curl-press', name: 'Curl to press', zoom: 0.84, scene: { mat: MAT }, anchor: STAND, hold: { n: 'bar', f: 'bar' },
    poses: {
      down: P({ b: { ua: 2, fa: 2 } }),
      curl: P({ b: { ua: 8, fa: 162 } }),
      mid: P({ b: { ua: 60, uaS: 0.35, fa: 176 } }),
      press: P({ t: 180, h: 182, b: { ua: 174, fa: 177 } })
    },
    rep: [
      { key: 'curl', from: 'down', to: 'curl', dur: 900, word: 'Curl', breath: 'out', sub: 'palms facing in' },
      { key: 'press', to: 'mid', dur: 400, word: 'Press', breath: 'out', sub: 'straight overhead', ease: 'lin' },
      { key: 'press', to: 'press', dur: 500, word: 'Press', breath: 'out', sub: 'straight overhead' },
      { key: 'lower', to: 'curl', dur: 1000, word: 'Lower', breath: 'in', sub: 'back to your shoulders' },
      { key: 'down', to: 'down', dur: 1100, word: 'Lower', breath: 'in', sub: 'arms long' }
    ],
    ready: { pose: 'down', text: 'Dumbbells by your sides' },
    guides: [
      { type: 'text', text: "Don't arch\nyour back", at: [238, 150], anchor: 'end', show: ['press'] }
    ],
    note: 'Curl, press, lower, lower. About 4 seconds per rep.',
    tips: [
      'Stand tall, a dumbbell in each hand, palms facing in.',
      'Curl the dumbbells to your shoulders, then press them straight overhead.',
      'Lower to your shoulders, then all the way down.'
    ],
    adjust: [['Too heavy overhead?', 'Press one arm at a time.']]
  });

  def({
    id: 'db-leg-raise', name: 'Leg raise + dumbbell hold', scene: { mat: [130, 400] }, anchor: { point: 'pelvis', at: [314, 388] },
    hold: { n: 'face' },
    poses: {
      up: P({ t: -90, h: -96, b: { ua: 180, fa: 180, th: 178, sh: 178, ft: -92 } }),
      low: P({ t: -90, h: -98, b: { ua: 180, fa: 180, th: 102, sh: 102, ft: 192 } })
    },
    rep: [
      { key: 'lower', from: 'up', to: 'low', dur: 2000, word: 'Lower', breath: 'in', sub: 'legs straight · 2 seconds' },
      { key: 'hover', to: 'low', dur: 300, word: 'Hover', breath: 'in', sub: 'just above the floor' },
      { key: 'lift', to: 'up', dur: 1200, word: 'Lift', breath: 'out', sub: 'legs back up' }
    ],
    ready: { pose: 'up', text: 'Lie down, dumbbell up over your chest' },
    guides: [
      { type: 'ring', at: { p: 'pelvis', pose: 'up', dx: -36, dy: 8 }, r: 14, show: ['lower', 'hover'] },
      { type: 'text', text: 'Lower back stays on the mat', at: [250, 433], anchor: 'middle', show: ['lower', 'hover'] }
    ],
    note: 'One rep takes 3.5 seconds. Arms stay straight up the whole time.',
    tips: [
      'Lie on your back, hold one dumbbell with both hands straight above your chest.',
      'Breathe in and lower your straight legs until they hover just above the floor.',
      'Breathe out and lift them back up. Lower back stays pressed down.'
    ],
    adjust: [['Back arches?', 'Bend your knees a little, or stop higher.']]
  });

  variant('floor-press', {
    id: 'bridge-press', name: 'Bridge hold + chest press',
    poses: {
      low: P({ t: -62, h: -92, b: { ua: 100, uaS: 0.55, fa: 180, ft: 90, th: 120, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } }),
      high: P({ t: -62, h: -92, b: { ua: 180, fa: 180, ft: 90, th: 120, sh: 30 }, ik: { nLeg: [418, 392], fLeg: [418, 392] } })
    },
    ready: { pose: 'low', text: 'Hips up, dumbbells over your chest' },
    guides: [
      { type: 'line', from: { p: 'shoulder', pose: 'low', dy: -22 }, to: { p: 'nKnee', pose: 'low', dy: -22 }, show: ['ready', 'top'] },
      { type: 'text', text: 'Hips stay up', at: [300, 250], anchor: 'middle', show: ['ready', 'top', 'press'] }
    ],
    note: 'Hold the bridge the whole set and press. About 3.5 seconds per press.',
    tips: [
      'Lie on your back, knees bent, a dumbbell in each hand. Lift your hips into a bridge.',
      'Keep your hips up and press both dumbbells straight up.',
      'Lower until your elbows touch the floor. Hips stay up the whole time.'
    ],
    adjust: [['Hips dropping?', 'Lower your hips, rest 2 seconds, lift them again.']]
  });

  /* Front view, on one hand with straight legs, top arm reaching up. */
  def({
    id: 'side-plank', name: 'Side plank, arm up', view: 'front', scene: { mat: [120, 420] },
    anchor: { point: 'nHand', at: [214, 396] },
    poses: {
      hold: P({ t: -113, h: -108, n: { ua: 0, fa: 0, th: 67, sh: 67, ft: 112 }, f: { ua: 180, fa: 180, th: 67, sh: 67, ft: 112 } })
    },
    rep: [
      { key: 'hold', from: 'hold', to: 'hold', dur: 4000, word: 'Hold', breath: 'in', sub: 'hips up, top arm reaches up' },
      { key: 'hold2', to: 'hold', dur: 4000, word: 'Hold', breath: 'out', sub: 'straight line, feet to head' }
    ],
    switchAt: { text: 'Other side', mirror: true },
    ready: { pose: 'hold', text: 'Hand under shoulder, legs straight' },
    guides: [
      { type: 'ring', at: { p: 'nHand', pose: 'hold' }, r: 15, show: ['ready', 'hold'] },
      { type: 'text', text: 'Hand under shoulder', at: { p: 'nHand', pose: 'hold', dy: 37 }, anchor: 'middle', show: ['hold'] }
    ],
    note: 'Half the time on each side.',
    tips: [
      'Lie on your side, bottom hand flat under your shoulder, legs straight and stacked.',
      'Push the floor away and lift your hips so you are straight from feet to head.',
      'Reach your top arm to the ceiling and breathe. Switch sides halfway.'
    ],
    adjust: [['Too hard?', 'Drop your bottom knee to the floor, or go onto your forearm.']]
  });

  /* Incline push-up on the chair, then two climbers. The chair stays against the wall. */
  def({
    id: 'pushup-climber', name: 'Push-up + climbers', scene: { mat: [60, 300], chair: { x: 432, facing: 'left' }, wall: 556 },
    bend: { nArm: { x: -1, y: -0.6 }, fArm: { x: -1, y: -0.6 }, nLeg: { x: 1, y: 0.3 }, fLeg: { x: 1, y: 0.3 } },
    poses: (function () {
      /* legs use foot targets so the knee travels forward above the floor, not through it */
      var arms = { nArm: [440, 306], fArm: [440, 306] }, back = [98, 365], kneeIn = [317, 366];
      function ik(n, f) { return Object.assign({ nLeg: n, fLeg: f }, arms); }
      return {
        top: P({ x: 261, y: 271, t: 120, h: 122, b: { ft: 30 }, ik: ik(back, back) }),
        bottom: P({ x: 284, y: 304, t: 108, h: 110, b: { ft: 18 }, ik: ik([105, 362], [105, 362]) }),
        kneeN: P({ x: 266, y: 268, t: 120, h: 122, n: { ft: 50 }, f: { ft: 30 }, ik: ik(kneeIn, back) }),
        kneeF: P({ x: 266, y: 268, t: 120, h: 122, n: { ft: 30 }, f: { ft: 50 }, ik: ik(back, kneeIn) })
      };
    })(),
    rep: [
      { key: 'down', from: 'top', to: 'bottom', dur: 1500, word: 'Down', breath: 'in', sub: 'chest to the seat edge' },
      { key: 'up', to: 'top', dur: 900, word: 'Push', breath: 'out', sub: 'push the chair away' },
      { key: 'climb', to: 'kneeN', dur: 400, word: 'Knee in', breath: 'easy', sub: 'one knee' },
      { key: 'climb', to: 'top', dur: 400, word: 'Knee in', breath: 'easy', sub: 'one knee' },
      { key: 'climb', to: 'kneeF', dur: 400, word: 'Knee in', breath: 'easy', sub: 'other knee' },
      { key: 'climb', to: 'top', dur: 400, word: 'Knee in', breath: 'easy', sub: 'other knee' }
    ],
    ready: { pose: 'top', text: 'Hands on the seat edge, chair on the wall', at: [425, 374], anchor: 'end' },
    guides: [
      { type: 'text', text: 'Push the chair away', at: [425, 374], anchor: 'end', show: ['up'] },
      { type: 'text', text: 'Hips stay low', at: [60, 200], show: ['climb'] }
    ],
    note: 'One push-up, two knees. About 4 seconds per rep.',
    tips: [
      'Chair against the wall. Hands on the seat edge, body straight.',
      'Lower your chest to the seat, push back up.',
      'Drive one knee toward your chest, then the other. Then the next push-up.'
    ],
    adjust: [['Too easy?', 'Hands on the floor instead of the chair.']]
  });

  /* Hands on the dumbbells, knees down; row one side, then the other. */
  def({
    id: 'renegade-row', name: 'Renegade row (knees down)', scene: { mat: [60, 440] }, anchor: { point: 'nKnee', at: [196, 393] },
    hold: { n: 'bar', f: 'bar' },
    poses: {
      base: P({ t: 127.7, h: 124, b: { th: -52.3, sh: -90, ft: -90, ua: 0, fa: 0 } }),
      rowN: P({ t: 127.7, h: 124, b: { th: -52.3, sh: -90, ft: -90, ua: 0, fa: 0 }, n: { ua: -62, fa: -4 } }),
      rowF: P({ t: 127.7, h: 124, b: { th: -52.3, sh: -90, ft: -90, ua: 0, fa: 0 }, f: { ua: -62, fa: -4 } })
    },
    rep: [
      { key: 'row', from: 'base', to: 'rowN', dur: 900, word: 'Row', breath: 'out', sub: 'elbow back, hips stay level' },
      { key: 'lower', to: 'base', dur: 900, word: 'Down', breath: 'in', sub: 'dumbbell back to the floor' },
      { key: 'row', to: 'rowF', dur: 900, word: 'Row', breath: 'out', sub: 'other side' },
      { key: 'lower', to: 'base', dur: 900, word: 'Down', breath: 'in', sub: 'dumbbell back to the floor' }
    ],
    ready: { pose: 'base', text: 'Hands on the dumbbells, knees down' },
    guides: [
      { type: 'line', from: { p: 'nKnee', pose: 'base', dx: -7, dy: -25 }, to: { p: 'shoulder', pose: 'base', dx: -7, dy: -25 }, show: ['ready', 'row'] },
      { type: 'text', text: 'Hips stay level', at: [120, 230], show: ['row'] }
    ],
    note: 'One row each side, about 3.5 seconds per pair.',
    tips: [
      'Grip the dumbbells on the floor under your shoulders, knees down, body straight from knees to head.',
      'Breathe out and row one dumbbell to your ribs without twisting your hips.',
      'Put it down, then the other side. Knees a little wider makes it steadier.'
    ],
    adjust: [['Too easy?', 'Lift your knees and do it from a full plank.']]
  });

  def({
    id: 'reverse-lunge-curl', name: 'Reverse lunge + curl', scene: { mat: [170, 290] }, hold: { n: 'bar', f: 'bar' },
    bend: { nLeg: { x: 1, y: 0.6 }, fLeg: { x: 1, y: 0.6 } },
    poses: {
      stand: P({ x: 330, y: 206, t: 178, b: { ua: 2, fa: 2 }, ik: { nLeg: [330, 392], fLeg: [334, 392] } }),
      curl: P({ x: 330, y: 206, t: 178, b: { ua: 8, fa: 162 }, ik: { nLeg: [330, 392], fLeg: [334, 392] } }),
      backN: P({ x: 300, y: 284, t: 178, h: 180, b: { ua: 2, fa: 2 }, n: { ft: 60 }, ik: { nLeg: [198, 380], fLeg: [352, 392] } }),
      backF: P({ x: 300, y: 284, t: 178, h: 180, b: { ua: 2, fa: 2 }, f: { ft: 60 }, ik: { nLeg: [352, 392], fLeg: [198, 380] } })
    },
    rep: [
      { key: 'back', from: 'stand', to: 'backN', dur: 1200, word: 'Step back', breath: 'in', sub: 'back knee toward the floor' },
      { key: 'up', to: 'stand', dur: 900, word: 'Step in', breath: 'out', sub: 'push through your front heel' },
      { key: 'curl', to: 'curl', dur: 900, word: 'Curl', breath: 'out', sub: 'palms facing in' },
      { key: 'lower', to: 'stand', dur: 1000, word: 'Lower', breath: 'in', sub: 'arms long' },
      { key: 'back', to: 'backF', dur: 1200, word: 'Step back', breath: 'in', sub: 'other leg' },
      { key: 'up', to: 'stand', dur: 900, word: 'Step in', breath: 'out', sub: 'push through your front heel' },
      { key: 'curl', to: 'curl', dur: 900, word: 'Curl', breath: 'out', sub: 'palms facing in' },
      { key: 'lower', to: 'stand', dur: 1000, word: 'Lower', breath: 'in', sub: 'arms long' }
    ],
    ready: { pose: 'stand', text: 'Dumbbells by your sides' },
    guides: [
      { type: 'text', text: 'Back knee\ntoward the floor', at: [180, 300], anchor: 'end', show: ['back'] }
    ],
    note: 'Lunge, curl, other leg, curl. About 8 seconds per pair.',
    tips: [
      'A dumbbell in each hand by your sides.',
      'Step one foot back and lower until your back knee nearly touches the floor. Step back in.',
      'Curl the dumbbells, lower them, then lunge with the other leg.'
    ],
    adjust: [['Wobbly?', 'Step back a little less far and go slower.']]
  });
})();
