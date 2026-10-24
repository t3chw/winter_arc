/* Winter Arc: standing cardio, quiet versions of the HIIT moves (no jumping, soft feet). */
(function () {
  'use strict';
  var H = window.WA.exHelpers, P = H.P, def = H.def, STAND = H.STAND;

  /* Front view: squat, then stand up driving one knee across to the opposite elbow. */
  def({
    id: 'squat-knee', name: 'Squat + knee to elbow', view: 'front', scene: { mat: [200, 240] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var hn = { ua: -135, fa: 60, ft: -80 }, hf = { ua: 135, fa: -60, ft: 80 }, ik = { nLeg: [296, 392], fLeg: [344, 392] };
      return {
        base: P({ x: 320, y: 205, n: hn, f: hf, ik: ik }),
        squat: P({ x: 320, y: 274, tS: 0.94, n: hn, f: hf, ik: ik }),
        cN: P({ x: 322, y: 202, t: 162, h: 165, tS: 0.85, n: { ua: -135, fa: 60, th: 160, thS: 0.45, sh: -5, shS: 0.85, ft: -80 }, f: { ua: -52, fa: 148, ft: 80 }, ik: { fLeg: [344, 392] } }),
        cF: P({ x: 318, y: 202, t: 198, h: 195, tS: 0.85, f: { ua: 135, fa: -60, th: -160, thS: 0.45, sh: 5, shS: 0.85, ft: 80 }, n: { ua: 52, fa: -148, ft: -80 }, ik: { nLeg: [296, 392] } })
      };
    })(),
    rep: [
      { key: 'squat', from: 'base', to: 'squat', dur: 900, word: 'Squat', breath: 'in', sub: 'hips back and down' },
      { key: 'up', to: 'base', dur: 450, word: 'Up', breath: 'out', sub: 'stand up' },
      { key: 'knee', to: 'cN', dur: 500, word: 'Knee to elbow', breath: 'out', sub: 'crunch across' },
      { key: 'back', to: 'base', dur: 450, word: 'Back', breath: 'in', sub: 'foot down softly' },
      { key: 'squat', to: 'squat', dur: 900, word: 'Squat', breath: 'in', sub: 'hips back and down' },
      { key: 'up', to: 'base', dur: 450, word: 'Up', breath: 'out', sub: 'stand up' },
      { key: 'knee', to: 'cF', dur: 500, word: 'Knee to elbow', breath: 'out', sub: 'other side' },
      { key: 'back', to: 'base', dur: 450, word: 'Back', breath: 'in', sub: 'foot down softly' }
    ],
    ready: { pose: 'base', text: 'Hands behind your head' },
    guides: [],
    note: 'Squat, knee, squat, other knee. About 4.6 seconds per pair.',
    tips: [
      'Hands behind your head, feet hip-width apart.',
      'Squat down, then stand up and bring one knee across to the opposite elbow.',
      'Foot down softly, squat again, then the other side.'
    ],
    adjust: [['Too easy?', 'Squat deeper and move faster.']]
  });

  /* Side view: kick one straight leg forward, opposite hand reaches for it. */
  def({
    id: 'kick-toe-touch', name: 'Front kick toe touch', scene: { mat: [190, 360] },
    bend: { nArm: { x: 0, y: 1 }, fArm: { x: 0, y: 1 } },
    poses: {
      stand: P({ x: 330, y: 204, t: 178, h: 178, b: { ua: 6, fa: 8 } }),
      kickN: P({ x: 330, y: 206, t: 136, h: 128, n: { th: 84, sh: 84, ft: 172, ua: -40, fa: -30 }, f: { th: -3, sh: -3 }, ik: { fArm: [512, 214] } }),
      kickF: P({ x: 330, y: 206, t: 136, h: 128, f: { th: 84, sh: 84, ft: 172, ua: -40, fa: -30 }, n: { th: -3, sh: -3 }, ik: { nArm: [512, 214] } })
    },
    rep: [
      { key: 'kick', from: 'stand', to: 'kickN', dur: 600, word: 'Kick', breath: 'out', sub: 'opposite hand to your toes' },
      { key: 'down', to: 'stand', dur: 500, word: 'Down', breath: 'in', sub: 'foot down softly' },
      { key: 'kick', to: 'kickF', dur: 600, word: 'Kick', breath: 'out', sub: 'other leg' },
      { key: 'down', to: 'stand', dur: 500, word: 'Down', breath: 'in', sub: 'foot down softly' }
    ],
    ready: { pose: 'stand', text: 'Stand tall' },
    guides: [{ type: 'text', text: 'Shin is fine\nif toes are too far', at: [520, 120], anchor: 'middle', show: ['kick'] }],
    note: 'One leg, then the other, about 2.2 seconds per pair.',
    tips: [
      'Stand tall.',
      'Kick one straight leg up in front and reach the opposite hand toward your toes.',
      'Put the foot down softly, then the other leg.'
    ],
    adjust: [['Hamstrings tight?', 'Kick lower and reach for your shin.']]
  });

  /* Reverse lunge, then drive the same leg through into a front kick. */
  def({
    id: 'lunge-kick', name: 'Reverse lunge + kick', scene: { mat: [150, 360] },
    bend: { nLeg: { x: 1, y: 0.6 }, fLeg: { x: 1, y: 0.6 }, nArm: { x: 0, y: 1 }, fArm: { x: 0, y: 1 } },
    poses: (function () {
      var A = { ua: 6, fa: 8 };
      return {
        stand: P({ x: 330, y: 206, t: 178, b: A, ik: { nLeg: [330, 392], fLeg: [334, 392] } }),
        backN: P({ x: 302, y: 272, t: 172, h: 176, n: { ua: 40, fa: 70, ft: 60 }, f: { ua: -30, fa: -10 }, ik: { nLeg: [204, 380], fLeg: [334, 392] } }),
        kneeN: P({ x: 330, y: 206, t: 172, n: { th: 72, sh: -8, ft: 85, ua: -30, fa: -20 }, f: { ua: 40, fa: 90 }, ik: { fLeg: [334, 392] } }),
        kickN: P({ x: 330, y: 206, t: 140, h: 132, n: { th: 84, sh: 84, ft: 172, ua: -40, fa: -30 }, ik: { fLeg: [334, 392], fArm: [512, 214] } }),
        backF: P({ x: 302, y: 272, t: 172, h: 176, f: { ua: 40, fa: 70, ft: 60 }, n: { ua: -30, fa: -10 }, ik: { fLeg: [204, 380], nLeg: [334, 392] } }),
        kneeF: P({ x: 330, y: 206, t: 172, f: { th: 72, sh: -8, ft: 85, ua: -30, fa: -20 }, n: { ua: 40, fa: 90 }, ik: { nLeg: [334, 392] } }),
        kickF: P({ x: 330, y: 206, t: 140, h: 132, f: { th: 84, sh: 84, ft: 172, ua: -40, fa: -30 }, ik: { nLeg: [334, 392], nArm: [512, 214] } })
      };
    })(),
    rep: [
      { key: 'back', from: 'stand', to: 'backN', dur: 900, word: 'Step back', breath: 'in', sub: 'lunge down' },
      { key: 'kick', to: 'kneeN', dur: 450, word: 'Kick', breath: 'out', sub: 'same leg kicks forward' },
      { key: 'kick', to: 'kickN', dur: 400, word: 'Kick', breath: 'out', sub: 'opposite hand to your toes' },
      { key: 'down', to: 'stand', dur: 550, word: 'Down', breath: 'in', sub: 'foot down softly' },
      { key: 'back', to: 'backF', dur: 900, word: 'Step back', breath: 'in', sub: 'other leg' },
      { key: 'kick', to: 'kneeF', dur: 450, word: 'Kick', breath: 'out', sub: 'same leg kicks forward' },
      { key: 'kick', to: 'kickF', dur: 400, word: 'Kick', breath: 'out', sub: 'opposite hand to your toes' },
      { key: 'down', to: 'stand', dur: 550, word: 'Down', breath: 'in', sub: 'foot down softly' }
    ],
    ready: { pose: 'stand', text: 'Stand tall, space behind you' },
    guides: [],
    note: 'Lunge back, kick forward with the same leg. About 4.6 seconds per pair.',
    tips: [
      'Step one foot back into a lunge.',
      'Push off that back foot and swing the same leg forward into a kick, reaching the opposite hand to your toes.',
      'Put it down softly, then the other leg.'
    ],
    adjust: [['Wobbly?', 'Skip the kick: lunge back, then just drive the knee up.']]
  });

  /* Jump rope without a rope and without leaving the floor: quick heel raises, wrists circle. */
  def({
    id: 'rope-skip', name: 'Rope skip (no hop)', scene: { mat: H.MAT }, anchor: { point: 'nToe', at: [370, 392] },
    poses: {
      down: P({ t: 178, h: 178, b: { ua: 14, fa: 64 } }),
      up: P({ t: 178, h: 180, b: { ua: 10, fa: 80, ft: 62 } })
    },
    rep: [
      { key: 'skip', from: 'down', to: 'up', dur: 220, word: 'Skip', breath: 'easy', sub: 'up on your toes, wrists circle' },
      { key: 'skip', to: 'down', dur: 220, word: 'Skip', breath: 'easy', sub: 'heels touch down softly' }
    ],
    ready: { pose: 'down', text: 'Elbows in, hands by your hips' },
    guides: [{ type: 'text', text: 'Toes never leave\nthe floor: no noise', at: [510, 150], anchor: 'middle', show: ['skip'] }],
    note: 'Fast heel raises with small wrist circles, like skipping rope, but quiet.',
    tips: [
      'Elbows by your ribs, hands by your hips as if holding a rope.',
      'Bounce quickly up onto your toes and back down, circling your wrists.',
      'Toes stay on the floor so it stays quiet.'
    ],
    adjust: [['Too easy?', 'Go faster, or alternate feet like running.']]
  });

  /* Front view: quarter squat, feet step out-out-in-in fast. */
  def({
    id: 'in-out-steps', name: 'In & out quick steps', view: 'front', scene: { mat: [190, 260] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var n = { ua: -24, fa: -168, faS: 0.6, ft: -80 }, f = { ua: 24, fa: 168, faS: 0.6, ft: 80 };
      function sp(x, y, a, b) { return P({ x: x, y: y, n: n, f: f, ik: { nLeg: [a, 392], fLeg: [b, 392] } }); }
      return { inn: sp(320, 211, 300, 340), outN: sp(306, 216, 236, 340), out: sp(320, 222, 236, 404), inN: sp(334, 216, 300, 404) };
    })(),
    rep: [
      { key: 'step', from: 'inn', to: 'outN', dur: 230, word: 'Out', breath: 'easy', sub: 'out, out, in, in' },
      { key: 'step', to: 'out', dur: 230, word: 'Out', breath: 'easy', sub: 'out, out, in, in' },
      { key: 'step', to: 'inN', dur: 230, word: 'In', breath: 'easy', sub: 'out, out, in, in' },
      { key: 'step', to: 'inn', dur: 230, word: 'In', breath: 'easy', sub: 'out, out, in, in' }
    ],
    ready: { pose: 'inn', text: 'Knees soft, fists up' },
    guides: [{ type: 'text', text: 'Light, quick feet', at: [320, 433], anchor: 'middle', show: ['step'] }],
    note: 'Fast feet on the balls of your feet. Small steps, no stomping.',
    tips: [
      'Knees soft, chest up, fists in front of you.',
      'Step one foot out, then the other, then back in, then the other: out, out, in, in.',
      'Stay light on the balls of your feet.'
    ],
    adjust: [['Too easy?', 'Sit lower and go faster.']]
  });

  def({
    id: 'squat-pulse', name: 'Squat pulses', scene: { mat: H.MAT }, anchor: STAND,
    poses: {
      stand: P({ t: 176, h: 178, b: { ua: 6, fa: 10 } }),
      bottom: P({ t: 140, h: 162, b: { ua: 55, fa: 150, th: 88, sh: -30 } }),
      pulse: P({ t: 146, h: 164, b: { ua: 55, fa: 150, th: 72, sh: -24 } })
    },
    rep: [
      { key: 'down', from: 'stand', to: 'bottom', dur: 800, word: 'Down', breath: 'in', sub: 'all the way down' },
      { key: 'pulse', to: 'pulse', dur: 300, word: 'Pulse', breath: 'easy', sub: 'small bounces, stay low' },
      { key: 'pulse', to: 'bottom', dur: 300, word: 'Pulse', breath: 'easy', sub: 'small bounces, stay low' },
      { key: 'pulse', to: 'pulse', dur: 300, word: 'Pulse', breath: 'easy', sub: 'small bounces, stay low' },
      { key: 'pulse', to: 'bottom', dur: 300, word: 'Pulse', breath: 'easy', sub: 'small bounces, stay low' },
      { key: 'up', to: 'stand', dur: 700, word: 'Up', breath: 'out', sub: 'stand tall' }
    ],
    ready: { pose: 'stand', text: 'Feet shoulder-width apart' },
    guides: [
      { type: 'line', from: { p: 'pelvis', pose: 'bottom', dx: -50 }, to: { p: 'pelvis', pose: 'bottom', dx: 146 }, show: ['pulse'] },
      { type: 'text', text: 'Stay below\nthis line', at: { p: 'nKnee', pose: 'bottom', dx: 54, dy: 6 }, show: ['pulse'] }
    ],
    note: 'Down, two pulses, up. About 2.7 seconds per rep. Your legs should burn.',
    tips: [
      'Squat down until your thighs are level with the floor.',
      'Bounce up a little and back down twice, staying low.',
      'Stand up and go straight into the next one.'
    ],
    adjust: [['Too easy?', 'Do four pulses each time.']]
  });

  /* Front view: step out into a wide squat, bring the feet together, travel and come back. */
  def({
    id: 'side-squat', name: 'Side-step squat', view: 'front', scene: { mat: [150, 340] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: (function () {
      var n = { ua: -16, fa: 128, ft: -80 }, f = { ua: 16, fa: -128, ft: 80 };
      function sp(x, y, a, b) { return P({ x: x, y: y, n: n, f: f, ik: { nLeg: [a, 392], fLeg: [b, 392] } }); }
      return {
        c: sp(320, 205, 302, 338), wL: sp(280, 272, 222, 338), l: sp(240, 205, 222, 258),
        wR: sp(360, 272, 302, 418), r: sp(400, 205, 382, 418)
      };
    })(),
    rep: [
      { key: 'squat', from: 'c', to: 'wL', dur: 900, word: 'Step + squat', breath: 'in', sub: 'step out wide, sit down' },
      { key: 'up', to: 'l', dur: 700, word: 'Feet together', breath: 'out', sub: 'stand up' },
      { key: 'squat', to: 'wL', dur: 900, word: 'Step + squat', breath: 'in', sub: 'step back out, sit down' },
      { key: 'up', to: 'c', dur: 700, word: 'Feet together', breath: 'out', sub: 'back to the middle' },
      { key: 'squat', to: 'wR', dur: 900, word: 'Step + squat', breath: 'in', sub: 'other way' },
      { key: 'up', to: 'r', dur: 700, word: 'Feet together', breath: 'out', sub: 'stand up' },
      { key: 'squat', to: 'wR', dur: 900, word: 'Step + squat', breath: 'in', sub: 'step back out, sit down' },
      { key: 'up', to: 'c', dur: 700, word: 'Feet together', breath: 'out', sub: 'back to the middle' }
    ],
    ready: { pose: 'c', text: 'Hands together at your chest' },
    guides: [{ type: 'text', text: 'Two steps one way, two steps back', at: [320, 433], anchor: 'middle', show: ['squat'] }],
    note: 'Two squats one way, two back. About 6.4 seconds per round trip.',
    tips: [
      'Hands together at your chest.',
      'Step one foot out wide and squat, then bring the other foot in as you stand.',
      'Twice one way, then twice back the other way.'
    ],
    adjust: [['Too easy?', 'Stay low between squats, no standing up.']]
  });

  /* Front view: quiet skater, a curtsy step behind with a reach down, side to side. */
  def({
    id: 'skater-steps', name: 'Skater steps (no jump)', view: 'front', scene: { mat: [170, 300] },
    bend: { nLeg: { x: -1, y: 0 }, fLeg: { x: 1, y: 0 } },
    poses: {
      stand: P({ x: 320, y: 205, n: { ua: -8, fa: -4, ft: -80 }, f: { ua: 8, fa: 4, ft: 80 }, ik: { nLeg: [302, 392], fLeg: [338, 392] } }),
      mid: P({ x: 320, y: 214, n: { ua: -20, fa: -10, ft: -80 }, f: { ua: 20, fa: 10, ft: 80 }, ik: { nLeg: [304, 392], fLeg: [336, 392] } }),
      skN: P({ x: 286, y: 262, t: 196, h: 196, tS: 0.86, n: { ua: -120, fa: -130, ft: -80 }, f: { ua: -20, fa: -20, ft: -60 }, ik: { nLeg: [262, 392], fLeg: [282, 362] } }),
      skF: P({ x: 354, y: 262, t: 164, h: 164, tS: 0.86, f: { ua: 120, fa: 130, ft: 80 }, n: { ua: 20, fa: 20, ft: 60 }, ik: { fLeg: [378, 392], nLeg: [358, 362] } })
    },
    rep: [
      { key: 'skate', from: 'mid', to: 'skN', dur: 550, word: 'Skate', breath: 'easy', sub: 'other leg swings behind, reach down' },
      { key: 'skate', to: 'skN', dur: 200, word: 'Skate', breath: 'easy', sub: 'other leg swings behind, reach down' },
      { key: 'skate', to: 'mid', dur: 400, word: 'Skate', breath: 'easy', sub: 'push across' },
      { key: 'skate', to: 'skF', dur: 550, word: 'Skate', breath: 'easy', sub: 'other side' },
      { key: 'skate', to: 'skF', dur: 200, word: 'Skate', breath: 'easy', sub: 'other side' },
      { key: 'skate', to: 'mid', dur: 400, word: 'Skate', breath: 'easy', sub: 'push across' }
    ],
    ready: { pose: 'stand', text: 'Feet together, space on both sides' },
    guides: [{ type: 'text', text: 'Step, no jump', at: [320, 433], anchor: 'middle', show: ['skate'] }],
    note: 'A speed skater move without the jump. About 2.3 seconds per pair.',
    tips: [
      'Bend one knee and swing the other leg behind it, foot off the floor.',
      'Reach the opposite hand down toward your front foot.',
      'Push across to the other side and repeat. Keep it quick and low.'
    ],
    adjust: [['Too easy?', 'Take a bigger step and touch the floor.']]
  });
})();
