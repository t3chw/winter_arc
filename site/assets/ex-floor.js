/* Winter Arc: plank and floor strength moves (shoulder taps, up-down plank, walk-out, kickbacks). */
(function () {
  'use strict';
  var H = window.WA.exHelpers, P = H.P, def = H.def;

  def({
    id: 'shoulder-taps', name: 'Plank shoulder taps', scene: { mat: [40, 420] }, anchor: { point: 'nToe', at: [100, 400] },
    bend: { nArm: { x: -1, y: -0.5 }, fArm: { x: -1, y: -0.5 } },
    poses: (function () {
      var legs = { th: -73, sh: -73, ft: 60 }, tap = { ua: 40, fa: -140 };
      return {
        plank: P({ t: 107, h: 108, b: legs, ik: { nArm: [362, 396], fArm: [362, 396] } }),
        tapN: P({ t: 107, h: 108, b: legs, n: tap, ik: { fArm: [362, 396] } }),
        tapF: P({ t: 107, h: 108, b: legs, f: tap, ik: { nArm: [362, 396] } })
      };
    })(),
    rep: [
      { key: 'tap', from: 'plank', to: 'tapN', dur: 450, word: 'Tap', breath: 'easy', sub: 'hand to the other shoulder' },
      { key: 'tap', to: 'plank', dur: 450, word: 'Tap', breath: 'easy', sub: 'hand back down' },
      { key: 'tap', to: 'tapF', dur: 450, word: 'Tap', breath: 'easy', sub: 'other hand' },
      { key: 'tap', to: 'plank', dur: 450, word: 'Tap', breath: 'easy', sub: 'hand back down' }
    ],
    ready: { pose: 'plank', text: 'High plank, feet a bit wide' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'plank', dx: -7, dy: -25 }, to: { p: 'shoulder', pose: 'plank', dx: -7, dy: -25 }, show: ['ready', 'tap'] },
      { type: 'text', text: "Hips don't rock", at: [60, 250], show: ['tap'] },
      { type: 'ring', at: { p: 'shoulder', pose: 'plank' }, r: 20, show: ['tap'] }
    ],
    note: 'Quick taps, steady hips. About 2 seconds per pair.',
    tips: [
      'High plank: hands under your shoulders, feet a bit wider than hips.',
      'Lift one hand and tap the opposite shoulder, then put it back.',
      'Other hand. Squeeze your belly so your hips stay still.'
    ],
    adjust: [['Too hard?', 'Drop your knees to the floor.']]
  });

  /* Forearm plank to high plank, one arm at a time. */
  def({
    id: 'plank-updown', name: 'Up-down plank', scene: { mat: [40, 480] }, anchor: { point: 'nToe', at: [110, 400] },
    bend: { nArm: { x: -1, y: -0.5 }, fArm: { x: -1, y: -0.5 } },
    poses: {
      low: P({ t: 98.2, h: 100, b: { th: -81.8, sh: -81.8, ft: 60, ua: 0, fa: 90 } }),
      midN: P({ t: 102.5, h: 104, b: { th: -77.5, sh: -77.5, ft: 60 }, ik: { nArm: [372, 396], fArm: [434, 396] } }),
      high: P({ t: 107, h: 108, b: { th: -73, sh: -73, ft: 60 }, ik: { nArm: [372, 396], fArm: [372, 396] } }),
      midF: P({ t: 102.5, h: 104, b: { th: -77.5, sh: -77.5, ft: 60 }, ik: { nArm: [434, 396], fArm: [372, 396] } })
    },
    rep: [
      { key: 'up', from: 'low', to: 'midN', dur: 550, word: 'Up', breath: 'easy', sub: 'one hand, then the other' },
      { key: 'up', to: 'high', dur: 550, word: 'Up', breath: 'easy', sub: 'one hand, then the other' },
      { key: 'top', to: 'high', dur: 300, word: 'Top', breath: 'easy', sub: 'hips steady' },
      { key: 'down', to: 'midF', dur: 550, word: 'Down', breath: 'easy', sub: 'one forearm, then the other' },
      { key: 'down', to: 'low', dur: 550, word: 'Down', breath: 'easy', sub: 'one forearm, then the other' },
      { key: 'bottom', to: 'low', dur: 300, word: 'Forearms', breath: 'easy', sub: 'hips steady' }
    ],
    ready: { pose: 'low', text: 'Forearm plank, feet a bit wide' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'low', dx: -4, dy: -25 }, to: { p: 'shoulder', pose: 'low', dx: -4, dy: -25 }, show: ['ready', 'bottom'] },
      { type: 'text', text: "Hips don't rock", at: [80, 280], show: ['up', 'down'] }
    ],
    note: 'Forearms to hands and back. About 3 seconds per rep.',
    tips: [
      'Start in a forearm plank, feet a bit wider than hips.',
      'Put one hand down, then the other, and push up to a high plank.',
      'Lower to one forearm, then the other. Keep your hips as still as you can.'
    ],
    adjust: [['Too hard?', 'Do it with your knees down.']]
  });

  /* Walk-out: fold, walk the hands out to a plank, walk back, roll up. */
  def({
    id: 'inchworm', name: 'Walk-out to plank', scene: { mat: [100, 400] }, anchor: { point: 'nToe', at: [170, 396] },
    bend: { nArm: { x: -1, y: -0.5 }, fArm: { x: -1, y: -0.5 }, nLeg: { x: 1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: {
      stand: P({ t: 178, h: 178, b: { ua: 6, fa: 6, ft: 90 } }),
      fold: P({ t: 40, h: 22, b: { th: 15, sh: -5, ft: 90 }, ik: { nArm: [232, 396], fArm: [232, 396] } }),
      pike: P({ t: 60, h: 50, b: { th: -35, sh: -35, ft: 60 }, ik: { nArm: [352, 396], fArm: [352, 396] } }),
      plank: P({ t: 107, h: 108, b: { th: -73, sh: -73, ft: 60 }, ik: { nArm: [432, 396], fArm: [432, 396] } })
    },
    rep: [
      { key: 'fold', from: 'stand', to: 'fold', dur: 1400, word: 'Fold', breath: 'out', sub: 'hands to the floor, bend your knees' },
      { key: 'out', to: 'pike', dur: 900, word: 'Walk out', breath: 'easy', sub: 'hands walk forward' },
      { key: 'out', to: 'plank', dur: 900, word: 'Walk out', breath: 'easy', sub: 'hands walk forward' },
      { key: 'plank', to: 'plank', dur: 700, word: 'Plank', breath: 'easy', sub: 'body straight' },
      { key: 'back', to: 'pike', dur: 900, word: 'Walk back', breath: 'easy', sub: 'hands walk to your feet' },
      { key: 'back', to: 'fold', dur: 900, word: 'Walk back', breath: 'easy', sub: 'hands walk to your feet' },
      { key: 'up', to: 'stand', dur: 1400, word: 'Roll up', breath: 'in', sub: 'stand tall' }
    ],
    ready: { pose: 'stand', text: 'Stand at the back of the mat' },
    guides: [
      { type: 'line', from: { p: 'nAnkle', pose: 'plank', dx: -7, dy: -25 }, to: { p: 'shoulder', pose: 'plank', dx: -7, dy: -25 }, show: ['plank'] },
      { type: 'text', text: 'Bend your knees\nas much as you need', at: [300, 120], show: ['fold'] }
    ],
    note: 'Slow and smooth. About 7 seconds per rep.',
    tips: [
      'Stand at the back of the mat. Fold forward and put your hands on the floor; bend your knees if you need to.',
      'Walk your hands out until you are in a high plank.',
      'Walk your hands back to your feet and roll up to standing.'
    ],
    adjust: [['Too easy?', 'Add one push-up in the plank.']]
  });

  /* All fours, one heel pushes up to the ceiling. */
  def({
    id: 'kickback', name: 'Donkey kicks', scene: { mat: [40, 500] },
    bend: { nArm: { x: -1, y: 0 }, fArm: { x: -1, y: 0 } },
    poses: (function () {
      var down = { th: 0, sh: -90, ft: -90 }, kick = { th: -102, sh: -188, ft: -98 };
      var base = { x: 250, y: 297, t: 90, h: 100 }, arms = { nArm: [368, 396], fArm: [368, 396] };
      return {
        table: P(Object.assign({}, base, { n: down, f: down, ik: arms })),
        kickN: P(Object.assign({}, base, { n: kick, f: down, ik: arms })),
        kickF: P(Object.assign({}, base, { n: down, f: kick, ik: arms }))
      };
    })(),
    rep: [
      { key: 'kick', from: 'table', to: 'kickN', dur: 700, word: 'Kick up', breath: 'out', sub: 'heel to the ceiling' },
      { key: 'squeeze', to: 'kickN', dur: 300, word: 'Squeeze', breath: 'out', sub: 'glute tight' },
      { key: 'back', to: 'table', dur: 700, word: 'Back', breath: 'in', sub: 'knee under hip' },
      { key: 'kick', to: 'kickF', dur: 700, word: 'Kick up', breath: 'out', sub: 'other leg' },
      { key: 'squeeze', to: 'kickF', dur: 300, word: 'Squeeze', breath: 'out', sub: 'glute tight' },
      { key: 'back', to: 'table', dur: 700, word: 'Back', breath: 'in', sub: 'knee under hip' }
    ],
    ready: { pose: 'table', text: 'Hands under shoulders, knees under hips' },
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'table', dy: -27 }, to: { p: 'shoulder', pose: 'table', dy: -27 }, show: ['squeeze'] },
      { type: 'text', text: 'Back stays flat', at: [310, 250], anchor: 'middle', show: ['squeeze'] }
    ],
    note: 'One leg, then the other. About 3.5 seconds per pair.',
    tips: [
      'On hands and knees, back flat.',
      'Keep the knee bent and push one heel up toward the ceiling. Squeeze your glute.',
      'Bring the knee back under your hip, then the other leg. Do not arch your back.'
    ],
    adjust: [['Too easy?', 'Pause 2 seconds at the top.']]
  });
})();
