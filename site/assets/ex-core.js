/* Winter Arc: core and back moves (superman, heel touches, flutter kicks, seated punches, heel bridge, side crunch). */
(function () {
  'use strict';
  var H = window.WA.exHelpers, P = H.P, def = H.def, variant = H.variant;

  def({
    id: 'superman', name: 'Superman', scene: { mat: [10, 560] }, anchor: { point: 'pelvis', at: [250, 388] },
    poses: {
      down: P({ t: 92, h: 94, b: { ua: 90, fa: 90, th: -90, sh: -90, ft: -90 } }),
      up: P({ t: 100, h: 106, b: { ua: 104, fa: 104, th: -97, sh: -97, ft: -97 } })
    },
    rep: [
      { key: 'lift', from: 'down', to: 'up', dur: 1000, word: 'Lift', breath: 'out', sub: 'chest, arms and legs up' },
      { key: 'hold', to: 'up', dur: 1500, word: 'Hold', breath: 'hold', sub: 'squeeze your glutes' },
      { key: 'lower', to: 'down', dur: 1200, word: 'Lower', breath: 'in', sub: 'slowly' },
      { key: 'rest', to: 'down', dur: 300, word: 'Rest', breath: 'in', sub: 'relax' }
    ],
    ready: { pose: 'down', text: 'Lie on your belly, arms forward' },
    guides: [
      { type: 'text', text: 'Look at the floor,\nnot forward', at: [470, 300], anchor: 'middle', show: ['hold'] }
    ],
    note: 'One rep takes 4 seconds. Small lift, long hold.',
    tips: [
      'Lie on your belly, arms reaching forward.',
      'Breathe out and lift your chest, arms and legs a few centimetres off the floor.',
      'Hold, squeezing your glutes, then lower slowly. Look at the floor.'
    ],
    adjust: [['Lower back pinches?', 'Lift only your arms and chest.']]
  });

  /* Chest stays up; arms reach forward, then pull the elbows back to the ribs. */
  def({
    id: 'superman-pull', name: 'Superman pull', scene: { mat: [10, 560] }, anchor: { point: 'pelvis', at: [250, 388] },
    poses: {
      down: P({ t: 92, h: 94, b: { ua: 90, fa: 90, th: -90, sh: -90, ft: -90 } }),
      reach: P({ t: 101, h: 106, b: { ua: 106, fa: 106, th: -95, sh: -95, ft: -95 } }),
      pull: P({ t: 103, h: 108, b: { ua: 246, fa: 152, th: -95, sh: -95, ft: -95 } })
    },
    rep: [
      { key: 'reach', from: 'pull', to: 'reach', dur: 900, word: 'Reach', breath: 'in', sub: 'arms long, chest stays up' },
      { key: 'pull', to: 'pull', dur: 900, word: 'Pull', breath: 'out', sub: 'elbows back and up' },
      { key: 'squeeze', to: 'pull', dur: 500, word: 'Squeeze', breath: 'out', sub: 'shoulder blades together' }
    ],
    ready: { pose: 'down', text: 'Lie on your belly, arms forward' },
    guides: [
      { type: 'text', text: 'Chest stays up\nthe whole set', at: [470, 280], anchor: 'middle', show: ['reach'] }
    ],
    note: 'Like a pull-up, lying down. About 2.3 seconds per rep.',
    tips: [
      'Lie on your belly and lift your chest and arms a little.',
      'Reach your arms forward, then pull your elbows back to your ribs as if pulling a bar.',
      'Squeeze your shoulder blades. Your chest stays up the whole set.'
    ],
    adjust: [['Too hard?', 'Rest your feet on the floor and only lift your chest.']]
  });

  /* Seen from above (top view): lying on the back, knees bent, bending side to side. */
  def({
    id: 'heel-touch', name: 'Heel touches', view: 'front', scene: { top: [236, 40, 168, 330] }, noAir: true,
    poses: (function () {
      var legsN = { th: 6, thS: 0.45, sh: 2, shS: 0.38, ft: 0 }, legsF = { th: -6, thS: 0.45, sh: -2, shS: 0.38, ft: 0 };
      function hp(t, n, f) { return P({ x: 320, y: 236, t: t, h: t, tS: 0.82, n: Object.assign({}, legsN, n), f: Object.assign({}, legsF, f) }); }
      return {
        mid: hp(180, { ua: -6, fa: -3 }, { ua: 6, fa: 3 }),
        reachN: hp(198, { ua: 0, fa: 4 }, { ua: 22, fa: 14 }),
        reachF: hp(162, { ua: -22, fa: -14 }, { ua: 0, fa: -4 })
      };
    })(),
    rep: [
      { key: 'reach', from: 'mid', to: 'reachN', dur: 450, word: 'Reach', breath: 'easy', sub: 'hand slides toward the heel' },
      { key: 'reach', to: 'mid', dur: 350, word: 'Reach', breath: 'easy', sub: 'shoulders stay up' },
      { key: 'reach', to: 'reachF', dur: 450, word: 'Reach', breath: 'easy', sub: 'other side' },
      { key: 'reach', to: 'mid', dur: 350, word: 'Reach', breath: 'easy', sub: 'shoulders stay up' }
    ],
    ready: { pose: 'mid', text: 'Seen from above: on your back, knees bent' },
    guides: [
      { type: 'text', text: 'Bend sideways', at: [420, 200], show: ['reach'] },
      { type: 'text', text: 'Head and shoulders\noff the mat', at: [220, 110], anchor: 'end', show: ['reach'] }
    ],
    note: 'Side to side, about 1.6 seconds per pair.',
    tips: [
      'Lie on your back, knees bent, feet flat. Lift your head and shoulders a little.',
      'Bend sideways to slide one hand toward that heel, then the other side.',
      'Shoulders stay off the floor the whole time.'
    ],
    adjust: [['Neck tired?', 'Rest your head down for a few seconds, then keep going.']]
  });

  def({
    id: 'flutter-kicks', name: 'Flutter kicks', scene: { mat: [120, 400] }, anchor: { point: 'pelvis', at: [300, 388] },
    poses: (function () {
      var arms = { ua: 88, fa: 90 };
      return {
        a: P({ t: -90, h: -100, n: Object.assign({ th: 118, sh: 118, ft: 130 }, arms), f: Object.assign({ th: 102, sh: 102, ft: 114 }, arms) }),
        b: P({ t: -90, h: -100, n: Object.assign({ th: 102, sh: 102, ft: 114 }, arms), f: Object.assign({ th: 118, sh: 118, ft: 130 }, arms) })
      };
    })(),
    rep: [
      { key: 'kick', from: 'b', to: 'a', dur: 320, word: 'Flutter', breath: 'easy', sub: 'small, fast kicks' },
      { key: 'kick', to: 'b', dur: 320, word: 'Flutter', breath: 'easy', sub: 'small, fast kicks' }
    ],
    ready: { pose: 'a', text: 'Lie down, hands under your hips' },
    guides: [
      { type: 'ring', at: { p: 'pelvis', pose: 'a', dx: -36, dy: 8 }, r: 14, show: ['kick'] },
      { type: 'text', text: 'Lower back stays on the mat', at: [250, 433], anchor: 'middle', show: ['kick'] }
    ],
    note: 'Legs straight, small fast kicks, feet never touch the floor.',
    tips: [
      'Lie on your back, hands under your hips, legs straight and a little off the floor.',
      'Kick one leg up and the other down in small, fast moves.',
      'Press your lower back into the mat. Breathe normally.'
    ],
    adjust: [['Back arches?', 'Kick higher, with your feet further from the floor.']]
  });

  /* Sit, lean back, punch across your body. */
  def({
    id: 'seated-punches', name: 'Seated cross punches', scene: { mat: [140, 360] }, anchor: { point: 'pelvis', at: [290, 386] },
    bend: { nLeg: { x: 0, y: -1 }, fLeg: { x: 0, y: -1 } },
    poses: (function () {
      var legs = { nLeg: [420, 392], fLeg: [424, 392] }, guard = { ua: 70, fa: -132 }, punch = { ua: 78, fa: 78 };
      return {
        guard: P({ t: -140, h: -160, b: { ft: 90 }, n: guard, f: guard, ik: legs }),
        punchN: P({ t: -136, h: -158, b: { ft: 90 }, n: punch, f: guard, ik: legs }),
        punchF: P({ t: -136, h: -158, b: { ft: 90 }, n: guard, f: punch, ik: legs })
      };
    })(),
    rep: [
      { key: 'punch', from: 'guard', to: 'punchN', dur: 250, word: 'Punch', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'across your body' },
      { key: 'punch', to: 'guard', dur: 250, word: 'Punch', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'lean back, belly tight' },
      { key: 'punch', to: 'punchF', dur: 250, word: 'Punch', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'other hand' },
      { key: 'punch', to: 'guard', dur: 250, word: 'Punch', breath: 'easy', breathText: 'Breathe out on each punch', sub: 'lean back, belly tight' }
    ],
    ready: { pose: 'guard', text: 'Sit, lean back, fists up' },
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'guard', dx: -20, dy: -14 }, to: { p: 'shoulder', pose: 'guard', dx: -20, dy: -14 }, show: ['ready'] },
      { type: 'text', text: 'Lean back,\nback straight', at: [150, 250], anchor: 'middle', show: ['ready', 'punch'] }
    ],
    note: 'Fast punches while your belly holds you leaning back.',
    tips: [
      'Sit with knees bent, feet on the floor. Lean back with a straight back.',
      'Punch across your body, one fist then the other.',
      'Keep leaning back the whole time. That is what works your belly.'
    ],
    adjust: [['Too easy?', 'Lift your feet off the floor.']]
  });

  variant('glute-bridge', {
    id: 'heel-bridge', name: 'Heel bridge',
    poses: {
      down: P({ t: -90, h: -94, b: { ua: 95, fa: 90, ft: 150, th: 150, sh: 30 }, ik: { nLeg: [430, 382], fLeg: [430, 382] } }),
      up: P({ t: -62, h: -92, b: { ua: 95, fa: 90, ft: 150, th: 120, sh: 30 }, ik: { nLeg: [430, 382], fLeg: [430, 382] } })
    },
    ready: { pose: 'down', text: 'Lie on your back, heels down, toes up' },
    note: 'Like a glute bridge on your heels. Works the back of your legs harder.',
    tips: [
      'Lie on your back, knees bent, only your heels on the floor with toes pulled up.',
      'Breathe out and push through your heels to lift your hips.',
      'Squeeze, then lower slowly while breathing in.'
    ],
    adjust: [['Hamstring cramps?', 'Bring your feet a little closer to you.']]
  });

  /* Front view: same-side knee and elbow meet at the side. */
  def({
    id: 'side-crunch', name: 'Standing side crunch', view: 'front', scene: { mat: [200, 240] },
    poses: {
      base: P({ x: 320, y: 205, n: { ua: -135, fa: 60, ft: -80 }, f: { ua: 135, fa: -60, ft: 80 }, ik: { nLeg: [300, 392], fLeg: [340, 392] } }),
      cN: P({ x: 330, y: 210, t: 205, h: 205, n: { ua: -20, fa: 160, th: -100, sh: -5, ft: -80 }, f: { ua: 135, fa: -60, ft: 80 }, ik: { fLeg: [340, 392] } }),
      cF: P({ x: 310, y: 210, t: 155, h: 155, f: { ua: 20, fa: -160, th: 100, sh: 5, ft: 80 }, n: { ua: -135, fa: 60, ft: -80 }, ik: { nLeg: [300, 392] } })
    },
    rep: [
      { key: 'crunch', from: 'base', to: 'cN', dur: 600, word: 'Knee to elbow', breath: 'out', sub: 'same side, crunch sideways' },
      { key: 'back', to: 'base', dur: 600, word: 'Back', breath: 'in', sub: 'stand tall' },
      { key: 'crunch', to: 'cF', dur: 600, word: 'Knee to elbow', breath: 'out', sub: 'other side' },
      { key: 'back', to: 'base', dur: 600, word: 'Back', breath: 'in', sub: 'stand tall' }
    ],
    ready: { pose: 'base', text: 'Hands behind your head' },
    guides: [],
    note: 'Knee out to the side and up, elbow down to meet it. About 2.5 seconds per pair.',
    tips: [
      'Hands behind your head, elbows wide.',
      'Lift one knee out to the side and bring the same elbow down to meet it.',
      'Stand tall, then the other side.'
    ],
    adjust: [['Too easy?', 'Go faster.']]
  });
})();
