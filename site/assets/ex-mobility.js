/* Winter Arc: warm-up and cool-down mobility (standing side bend, knee hug, lying hamstring, butterfly, seated glute). */
(function () {
  'use strict';
  var H = window.WA.exHelpers, P = H.P, def = H.def;

  def({
    id: 'standing-side-bend', name: 'Standing side bend', view: 'front', zoom: 0.9, scene: { mat: [200, 240] },
    poses: (function () {
      var ik = { nLeg: [296, 392], fLeg: [344, 392] };
      return {
        tall: P({ x: 320, y: 205, n: { ua: -8, fa: -4, ft: -80 }, f: { ua: 8, fa: 4, ft: 80 }, ik: ik }),
        bendN: P({ x: 326, y: 206, t: 202, h: 206, n: { ua: -14, fa: -8, ft: -80 }, f: { ua: 200, fa: 228, ft: 80 }, ik: ik }),
        bendF: P({ x: 314, y: 206, t: 158, h: 154, f: { ua: 14, fa: 8, ft: 80 }, n: { ua: -200, fa: -228, ft: -80 }, ik: ik })
      };
    })(),
    rep: [
      { key: 'bend', from: 'tall', to: 'bendN', dur: 2000, word: 'Bend', breath: 'out', sub: 'arm over your head' },
      { key: 'up', to: 'tall', dur: 1500, word: 'Up', breath: 'in', sub: 'stand tall' },
      { key: 'bend', to: 'bendF', dur: 2000, word: 'Bend', breath: 'out', sub: 'other side' },
      { key: 'up', to: 'tall', dur: 1500, word: 'Up', breath: 'in', sub: 'stand tall' }
    ],
    ready: { pose: 'tall', text: 'Feet hip-width, arms down' },
    guides: [],
    work: 60, rest: 0,
    note: 'Slow, with your breathing. 7 seconds per pair.',
    tips: ['Stand tall, feet hip-width apart.', 'Breathe out, slide one hand down your leg and reach the other arm over your head.', 'Come up as you breathe in, then the other side.'],
    adjust: []
  });

  def({
    id: 'knee-hug', name: 'Knee hug', scene: { mat: [130, 340] }, anchor: { point: 'shoulder', at: [196, 386] },
    bend: { nArm: { x: 0.3, y: -1 }, fArm: { x: 0.3, y: -1 } },
    poses: {
      hug: P({ t: -90, h: -100, b: { th: -148, sh: 110, ft: 200 }, ik: { nArm: [272, 300], fArm: [272, 300] } }),
      ease: P({ t: -90, h: -96, b: { th: -168, sh: 120, ft: 210 }, ik: { nArm: [292, 280], fArm: [292, 280] } })
    },
    rep: [
      { key: 'hug', from: 'ease', to: 'hug', dur: 4000, word: 'Hug', breath: 'out', sub: 'knees to your chest' },
      { key: 'ease', to: 'ease', dur: 4000, word: 'Ease', breath: 'in', sub: 'arms long, relax' }
    ],
    ready: { pose: 'ease', text: 'Lie on your back, hands on your knees' },
    guides: [],
    work: 40, rest: 0,
    note: 'Relaxes your lower back. Slow breaths.',
    tips: ['Lie on your back and hold your knees.', 'Breathe out and hug your knees to your chest.', 'Breathe in and let them move away a little.'],
    adjust: []
  });

  def({
    id: 'lying-hamstring', name: 'Lying hamstring stretch', scene: { mat: [130, 340] }, anchor: { point: 'shoulder', at: [196, 386] },
    bend: { fLeg: { x: 0, y: -1 }, nArm: { x: 0, y: -1 }, fArm: { x: 0, y: -1 } },
    poses: {
      ease: P({ t: -90, h: -96, n: { th: 178, sh: 178, ft: -92 }, f: { ft: 90 }, ik: { fLeg: [418, 392], nArm: [304, 320], fArm: [304, 320] } }),
      pull: P({ t: -90, h: -98, n: { th: 194, sh: 194, ft: 284 }, f: { ft: 90 }, ik: { fLeg: [418, 392], nArm: [296, 322], fArm: [296, 322] } })
    },
    rep: [
      { key: 'pull', from: 'ease', to: 'pull', dur: 4000, word: 'Pull gently', breath: 'out', sub: 'leg straight, toward you' },
      { key: 'ease', to: 'ease', dur: 4000, word: 'Ease', breath: 'in', sub: 'relax a little' }
    ],
    switchAt: { text: 'Other leg', mirror: true },
    ready: { pose: 'ease', text: 'One leg up, hands behind your thigh' },
    guides: [],
    work: 40, rest: 0,
    note: 'Half the time on each leg. Gentle, never bounce.',
    tips: ['Lie on your back, one foot flat, the other leg straight up.', 'Hold behind your thigh and gently pull the leg toward you.', 'Switch legs halfway.'],
    adjust: [['Very tight?', 'Bend the raised knee a little.']]
  });

  /* Front view: soles together, knees out, lean forward a little. */
  def({
    id: 'butterfly', name: 'Butterfly stretch', view: 'front', scene: { mat: [170, 300] },
    bend: { nLeg: { x: -1, y: -0.3 }, fLeg: { x: 1, y: -0.3 }, nArm: { x: -1, y: 0 }, fArm: { x: 1, y: 0 } },
    poses: (function () {
      var n = { th: -100, thS: 0.8, sh: 75, ft: 150 }, f = { th: 100, thS: 0.8, sh: -75, ft: -150 };
      return {
        tall: P({ x: 320, y: 380, n: n, f: f, ik: { nArm: [314, 384], fArm: [326, 384] } }),
        fold: P({ x: 320, y: 380, tS: 0.84, n: n, f: f, ik: { nArm: [314, 388], fArm: [326, 388] } })
      };
    })(),
    rep: [
      { key: 'tall', from: 'fold', to: 'tall', dur: 4000, word: 'Sit tall', breath: 'in', sub: 'hold your feet' },
      { key: 'fold', to: 'fold', dur: 4000, word: 'Lean forward', breath: 'out', sub: 'knees drop toward the floor' }
    ],
    ready: { pose: 'tall', text: 'Sit, soles of your feet together' },
    guides: [],
    work: 40, rest: 0,
    note: 'Opens your hips. Slow breaths, no bouncing.',
    tips: ['Sit with the soles of your feet together, knees out to the sides.', 'Hold your feet and sit tall as you breathe in.', 'Breathe out and lean forward a little with a long back.'],
    adjust: []
  });

  /* Sitting, one leg straight, the other knee hugged to the chest. */
  def({
    id: 'seated-glute', name: 'Seated glute stretch', scene: { mat: [190, 330] }, anchor: { point: 'pelvis', at: [250, 386] },
    bend: { fLeg: { x: 0, y: -1 }, nArm: { x: 0, y: 1 }, fArm: { x: 0, y: 1 } },
    poses: {
      tall: P({ t: 182, h: 180, n: { th: 90, sh: 90, ft: 180 }, f: { ft: 90 }, ik: { fLeg: [330, 392], nArm: [300, 296], fArm: [300, 296] } }),
      hug: P({ t: 176, h: 172, n: { th: 90, sh: 90, ft: 180 }, f: { ft: 90 }, ik: { fLeg: [318, 392], nArm: [290, 300], fArm: [290, 300] } })
    },
    rep: [
      { key: 'hug', from: 'tall', to: 'hug', dur: 4000, word: 'Hug', breath: 'out', sub: 'knee to your chest, twist a little' },
      { key: 'tall', to: 'tall', dur: 4000, word: 'Sit tall', breath: 'in', sub: 'long back' }
    ],
    switchAt: { text: 'Other side', mirror: true },
    ready: { pose: 'tall', text: 'Sit, one leg straight, one knee up' },
    guides: [],
    work: 40, rest: 0,
    note: 'Half the time on each side.',
    tips: ['Sit with one leg straight. Cross the other foot over it, knee up.', 'Hug that knee to your chest and turn your chest toward it.', 'Sit tall as you breathe in. Switch sides halfway.'],
    adjust: []
  });
})();
