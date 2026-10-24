/* Winter Arc figure engine.
   A 2D pictogram skeleton driven by poses (segment angles), with optional anchoring,
   two-bone IK for planted hands/feet, props (mat, chair, wall, dumbbells) and guide overlays.
   Angle convention: 0 = pointing down, 90 = forward (+x), 180 = up, -90 = back (-x). */
(function () {
  'use strict';
  var WA = window.WA = window.WA || {};
  var NS = 'http://www.w3.org/2000/svg';
  var RAD = Math.PI / 180;
  var W = 640, FLOOR = 404;
  var LEN = { torso: 118, neck: 12, headR: 19, ua: 60, fa: 58, th: 96, sh: 92, foot: 40, heel: 16, sw: 30, hw: 18 };
  var FAR = { x: -8, y: -3 };
  var LIMB = { ua: 0, fa: 0, th: 0, sh: 0, ft: 90, uaS: 1, faS: 1, thS: 1, shS: 1 };

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function dir(a) { var r = a * RAD; return { x: Math.sin(r), y: Math.cos(r) }; }
  function add(p, v, k) { return { x: p.x + v.x * k, y: p.y + v.y * k }; }
  function sub(a, b) { return { x: a.x - b.x, y: a.y - b.y }; }
  function unit(v) { var d = Math.hypot(v.x, v.y) || 1; return { x: v.x / d, y: v.y / d }; }
  function ang(v) { return Math.atan2(v.x, v.y) / RAD; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function f1(n) { return (Math.round(n * 10) / 10).toString(); }

  /* ---------- Poses ---------- */
  function norm(p) {
    p = p || {};
    var o = {
      x: p.x || 0, y: p.y || 0,
      t: p.t == null ? 180 : p.t,
      h: p.h == null ? (p.t == null ? 180 : p.t) : p.h,
      curve: p.curve || 0, lift: p.lift || 0, tS: p.tS == null ? 1 : p.tS, ik: {}
    };
    if (p.ik) for (var k in p.ik) o.ik[k] = p.ik[k];
    ['n', 'f'].forEach(function (s) {
      var src = p[s] || {}, l = {};
      for (var key in LIMB) l[key] = src[key] == null ? LIMB[key] : src[key];
      o[s] = l;
    });
    return o;
  }

  function lerpPose(a, b, t) {
    var o = { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), t: lerp(a.t, b.t, t), h: lerp(a.h, b.h, t),
      curve: lerp(a.curve, b.curve, t), lift: lerp(a.lift, b.lift, t), tS: lerp(a.tS, b.tS, t), ik: {} };
    ['n', 'f'].forEach(function (s) {
      var l = {};
      for (var k in LIMB) l[k] = lerp(a[s][k], b[s][k], t);
      o[s] = l;
    });
    for (var k in a.ik) {
      var A = a.ik[k], B = b.ik[k];
      if (A && B) o.ik[k] = [lerp(A[0], B[0], t), lerp(A[1], B[1], t)];
    }
    return o;
  }

  function fk(p, view) {
    var td = dir(p.t), root = { x: p.x, y: p.y };
    var neck = add(root, td, LEN.torso * (p.tS == null ? 1 : p.tS));
    var hd = dir(p.h);
    var head = add(neck, hd, LEN.neck + LEN.headR);
    var J = { view: view, pelvis: root, neck: neck, head: head, td: td, hd: hd, curve: p.curve, lung: 0 };
    var perp = { x: -td.y, y: td.x };
    ['n', 'f'].forEach(function (s) {
      var l = p[s], sign = s === 'n' ? -1 : 1;
      var sh = { x: neck.x, y: neck.y - p.lift }, hip = { x: root.x, y: root.y };
      if (view === 'front') {
        sh = add(neck, perp, sign * LEN.sw); sh.y -= p.lift;
        hip = add(root, perp, sign * LEN.hw);
      }
      var elb = add(sh, dir(l.ua), LEN.ua * l.uaS);
      var hand = add(elb, dir(l.fa), LEN.fa * l.faS);
      var knee = add(hip, dir(l.th), LEN.th * l.thS);
      var ankle = add(knee, dir(l.sh), LEN.sh * l.shS);
      J[s] = { sh: sh, hip: hip, el: elb, hand: hand, knee: knee, ankle: ankle, ft: l.ft, faDir: dir(l.fa) };
    });
    return J;
  }

  function shiftJ(J, dx, dy) {
    function m(p) { p.x += dx; p.y += dy; }
    m(J.pelvis); m(J.neck); m(J.head);
    ['n', 'f'].forEach(function (s) { var l = J[s]; m(l.sh); m(l.hip); m(l.el); m(l.hand); m(l.knee); m(l.ankle); });
  }

  function footLen(J) { return J.view === 'front' ? 0.55 : 1; }

  function point(J, name) {
    if (name === 'pelvis') return J.pelvis;
    if (name === 'shoulder') return J.neck;
    if (name === 'head') return J.head;
    var l = J[name[0]], part = name.slice(1);
    if (!l) return J.pelvis;
    if (part === 'Toe') return add(l.ankle, dir(l.ft), LEN.foot * footLen(J));
    if (part === 'Heel') return add(l.ankle, dir(l.ft), -LEN.heel * footLen(J));
    var map = { Ankle: 'ankle', Knee: 'knee', Hip: 'hip', Sh: 'sh', El: 'el', Hand: 'hand' };
    return l[map[part]] || J.pelvis;
  }

  function ik2(base, a, b, T, pref) {
    var v = sub(T, base), d = Math.hypot(v.x, v.y) || 0.001;
    var u = { x: v.x / d, y: v.y / d };
    var dd = Math.min(a + b - 0.01, Math.max(Math.abs(a - b) + 0.01, d));
    var ca = (a * a + dd * dd - b * b) / (2 * a * dd);
    ca = Math.max(-1, Math.min(1, ca));
    var sa = Math.sqrt(1 - ca * ca);
    var j1 = { x: base.x + a * (u.x * ca - u.y * sa), y: base.y + a * (u.y * ca + u.x * sa) };
    var j2 = { x: base.x + a * (u.x * ca + u.y * sa), y: base.y + a * (u.y * ca - u.x * sa) };
    var s1 = (j1.x - base.x) * pref.x + (j1.y - base.y) * pref.y;
    var s2 = (j2.x - base.x) * pref.x + (j2.y - base.y) * pref.y;
    var mid = s1 >= s2 ? j1 : j2;
    var end = d > dd ? add(base, u, dd) : T;
    if (d > dd) mid = add(base, u, a);
    return { mid: mid, end: end };
  }

  function applyIK(J, ik, ex) {
    for (var key in ik) {
      var tgt = ik[key];
      if (!tgt) continue;
      var l = J[key[0]], limb = key.slice(1);
      var T = { x: tgt[0], y: tgt[1] };
      var pref = (ex.bend && ex.bend[key]) || (limb === 'Arm' ? { x: -1, y: 0 } : { x: 1, y: 0 });
      if (limb === 'Arm') {
        var r = ik2(l.sh, LEN.ua, LEN.fa, T, pref);
        l.el = r.mid; l.hand = r.end; l.faDir = unit(sub(r.end, r.mid));
      } else {
        var r2 = ik2(l.hip, LEN.th, LEN.sh, T, pref);
        l.knee = r2.mid; l.ankle = r2.end;
      }
    }
  }

  function solve(p, ex) {
    var J = fk(p, ex.view || 'side');
    if (ex.anchor) {
      var ap = point(J, ex.anchor.point);
      shiftJ(J, ex.anchor.at[0] - ap.x, ex.anchor.at[1] - ap.y);
    }
    applyIK(J, p.ik, ex);
    return J;
  }

  /* Turn IK targets of a keyframe into plain angles so poses can blend smoothly. */
  function unwrapNear(a, ref) { while (a - ref > 180) a -= 360; while (a - ref < -180) a += 360; return a; }
  function resolve(raw, ex) {
    var p = norm(raw);
    if (!Object.keys(p.ik).length) return p;
    var J = solve(p, ex);
    for (var key in p.ik) {
      if (!p.ik[key]) continue;
      var s = key[0], l = J[s], lp = p[s];
      if (key.slice(1) === 'Arm') {
        lp.ua = unwrapNear(ang(sub(l.el, l.sh)), lp.ua); lp.fa = unwrapNear(ang(sub(l.hand, l.el)), lp.fa);
        lp.uaS = 1; lp.faS = 1;
      } else {
        lp.th = unwrapNear(ang(sub(l.knee, l.hip)), lp.th); lp.sh = unwrapNear(ang(sub(l.ankle, l.knee)), lp.sh);
        lp.thS = 1; lp.shS = 1;
      }
    }
    return p;
  }

  function prepare(ex) {
    if (ex._ready) return ex;
    ex.view = ex.view || 'side';
    ex.resolved = {};
    for (var k in ex.poses) ex.resolved[k] = resolve(ex.poses[k], ex);
    [ex.rep, ex.rep2].forEach(function (rep) {
      if (!rep) return;
      var prev = rep[rep.length - 1].to;
      rep.forEach(function (ph, i) {
        if (!ph.from) ph.from = prev;
        if (!ph.key) ph.key = 'p' + i;
        prev = ph.to;
      });
    });
    ex.guides = ex.guides || [];
    if (ex.ready && ex.ready.text) {
      ex.guides.push({ type: 'text', text: ex.ready.text, at: ex.ready.at || [320, 433], anchor: ex.ready.anchor || 'middle', show: ['ready'] });
    }
    ex._ready = true;
    return ex;
  }

  /* ---------- Rendering ---------- */
  function drawChair(g, c) {
    var seat = c.seat || 318, w = 108, top = seat - 118;
    var x0, x1, back;
    if (c.facing === 'left') { x0 = c.x; x1 = c.x + w; back = x1 - 6; }
    else { x0 = c.x - w; x1 = c.x; back = x0 + 6; }
    var front = c.facing === 'left' ? x0 + 6 : x1 - 6;
    var cg = el('g', { 'class': 'chair' }, g);
    el('line', { x1: back, y1: FLOOR, x2: back, y2: top }, cg);
    el('line', { x1: front, y1: seat + 6, x2: front, y2: FLOOR }, cg);
    el('line', { 'class': 'thin', x1: back, y1: 372, x2: front, y2: 372 }, cg);
    el('line', { 'class': 'seat', x1: x0, y1: seat, x2: x1, y2: seat }, cg);
  }

  function drawScene(g, ex) {
    var sc = ex.scene || {};
    if (sc.top) {
      el('rect', { 'class': 'mat-top', x: sc.top[0], y: sc.top[1], width: sc.top[2], height: sc.top[3], rx: 10 }, g);
      return;
    }
    if (sc.wall != null) el('line', { 'class': 'wall', x1: sc.wall, y1: 30, x2: sc.wall, y2: FLOOR }, g);
    el('line', { 'class': 'floor', x1: 24, y1: FLOOR, x2: W - 24, y2: FLOOR }, g);
    if (sc.mat) el('rect', { 'class': 'mat', x: sc.mat[0], y: FLOOR - 3, width: sc.mat[1], height: 6, rx: 3 }, g);
    if (sc.chair) drawChair(g, sc.chair);
  }

  function Figure(svg, ex, opts) {
    prepare(ex);
    opts = opts || {};
    this.ex = ex;
    this.view = ex.view;
    this.mirrored = false;
    var outer = this.world = el('g', {}, svg);
    var z = this.zoom = ex.zoom || 1;
    var world = el('g', z !== 1 ? { transform: 'translate(' + f1(320 * (1 - z)) + ',' + f1(FLOOR * (1 - z)) + ') scale(' + z + ')' } : {}, outer);
    drawScene(world, ex);
    this.backG = el('g', { 'class': 'guides-back' }, world);
    var fig = el('g', { 'class': 'fig fig-' + this.view }, world);
    var side = this.view !== 'front';
    var farG = el('g', { 'class': side ? 'far' : 'far front-far' }, fig);
    if (side) farG.setAttribute('transform', 'translate(' + FAR.x + ',' + FAR.y + ')');
    var nearG = el('g', { 'class': 'near' }, fig);
    var self = this;
    function limbSet(parent, s, armsFirst) {
      var o = {};
      function arm() {
        o.ua = el('line', { 'class': 'limb arm' }, parent);
        o.fa = el('line', { 'class': 'limb arm' }, parent);
        o.db = el('g', { 'class': 'db' }, parent);
      }
      function leg() {
        o.ft = el('line', { 'class': 'limb foot' }, parent);
        o.sh = el('line', { 'class': 'limb leg' }, parent);
        o.th = el('line', { 'class': 'limb leg' }, parent);
      }
      if (armsFirst) { arm(); leg(); } else { leg(); }
      return o;
    }
    if (side) {
      this.f = limbSet(farG, 'f', true);
      this.torso = el('path', { 'class': 'limb torso' }, nearG);
      this.neckL = null;
      this.head = el('circle', { 'class': 'head', r: LEN.headR }, nearG);
      this.n = limbSet(nearG, 'n', false);
      this.n.ua = el('line', { 'class': 'limb arm' }, nearG);
      this.n.fa = el('line', { 'class': 'limb arm' }, nearG);
      this.n.db = el('g', { 'class': 'db' }, nearG);
    } else {
      /* Front view: torso first, then legs and arms with a thin outline so limbs that cross the body stay visible */
      this.torso = el('path', { 'class': 'torso-front' }, nearG);
      this.neckL = el('line', { 'class': 'limb neck' }, nearG);
      this.head = el('circle', { 'class': 'head', r: LEN.headR }, nearG);
      ['f', 'n'].forEach(function (s) {
        var o = self[s] = { halo: {} };
        o.ft = el('line', { 'class': 'limb foot' }, nearG);
        o.halo.sh = el('line', { 'class': 'halo leg' }, nearG);
        o.sh = el('line', { 'class': 'limb leg' }, nearG);
        o.halo.th = el('line', { 'class': 'halo leg' }, nearG);
        o.th = el('line', { 'class': 'limb leg' }, nearG);
      });
      ['n', 'f'].forEach(function (s) {
        var o = self[s];
        o.halo.ua = el('line', { 'class': 'halo arm' }, nearG);
        o.ua = el('line', { 'class': 'limb arm' }, nearG);
        o.halo.fa = el('line', { 'class': 'halo arm' }, nearG);
        o.fa = el('line', { 'class': 'limb arm' }, nearG);
        o.db = el('g', { 'class': 'db' }, nearG);
      });
    }
    this.airG = el('g', { 'class': 'air' }, world);
    this.airIn = []; this.airOut = [];
    for (var i = 0; i < 3; i++) {
      this.airIn.push(el('line', { 'class': 'air-in', opacity: 0 }, this.airG));
      this.airOut.push(el('circle', { 'class': 'air-out', r: 3, opacity: 0 }, this.airG));
    }
    this.frontG = el('g', { 'class': 'guides-front' }, world);
    this.labelG = el('g', { 'class': 'labels' }, svg);
    this.guides = [];
    this.dbStyle = {};
    var hold = ex.hold || {};
    ['n', 'f'].forEach(function (s) { self.dbStyle[s] = hold[s] || null; if (self.dbStyle[s]) self.buildDb(self[s].db, self.dbStyle[s]); });
    if (opts.guides !== false && ex.guides.length) this.buildGuides();
  }

  Figure.prototype.buildDb = function (g, style) {
    g.innerHTML = '';
    if (style === 'face') {
      el('circle', { 'class': 'db-plate', r: 14 }, g);
      el('circle', { 'class': 'db-hole', r: 4.5 }, g);
    } else {
      g._bar = el('line', { 'class': 'db-bar' }, g);
      g._p1 = el('line', { 'class': 'db-plate-line' }, g);
      g._p2 = el('line', { 'class': 'db-plate-line' }, g);
    }
  };

  function setLine(l, a, b) {
    l.setAttribute('x1', f1(a.x)); l.setAttribute('y1', f1(a.y));
    l.setAttribute('x2', f1(b.x)); l.setAttribute('y2', f1(b.y));
  }

  Figure.prototype.draw = function (J, lung) {
    var self = this;
    lung = lung || 0;
    ['n', 'f'].forEach(function (s) {
      var l = J[s], o = self[s];
      setLine(o.ua, l.sh, l.el); setLine(o.fa, l.el, l.hand);
      setLine(o.th, l.hip, l.knee); setLine(o.sh, l.knee, l.ankle);
      if (o.halo) {
        setLine(o.halo.ua, l.sh, l.el); setLine(o.halo.fa, l.el, l.hand);
        setLine(o.halo.th, l.hip, l.knee); setLine(o.halo.sh, l.knee, l.ankle);
      }
      var fd = dir(l.ft), fl = footLen(J);
      var sole = J.view === 'front' ? { x: 0, y: 4 } : { x: -fd.y * 6, y: fd.x * 6 };
      var heel = add(add(l.ankle, fd, -LEN.heel * fl), sole, 1), toe = add(add(l.ankle, fd, LEN.foot * fl), sole, 1);
      setLine(o.ft, heel, toe);
      var st = self.dbStyle[s];
      if (st) {
        if (st === 'face') o.db.setAttribute('transform', 'translate(' + f1(l.hand.x) + ',' + f1(l.hand.y) + ')');
        else if (st === 'hang') {
          /* one dumbbell held in both hands, hanging straight down whatever the arm angle (overhead extension) */
          var h0 = { x: l.hand.x, y: l.hand.y - 4 }, h1 = { x: l.hand.x, y: l.hand.y + 32 };
          setLine(o.db._bar, h0, h1);
          setLine(o.db._p1, { x: h0.x - 12, y: h0.y }, { x: h0.x + 12, y: h0.y });
          setLine(o.db._p2, { x: h1.x - 12, y: h1.y }, { x: h1.x + 12, y: h1.y });
        } else if (st === 'end' || st === 'goblet') {
          /* one dumbbell held by one end in both hands: 'goblet' hangs below the hands, 'end' extends past them (swing) */
          var fe = l.faDir, pe = { x: -fe.y, y: fe.x };
          var c0 = st === 'goblet' ? add(l.hand, fe, 6) : add(l.hand, fe, -6);
          var c1 = st === 'goblet' ? add(l.hand, fe, -32) : add(l.hand, fe, 32);
          setLine(o.db._bar, c0, c1);
          setLine(o.db._p1, add(c0, pe, -12), add(c0, pe, 12));
          setLine(o.db._p2, add(c1, pe, -12), add(c1, pe, 12));
        } else {
          var fdv = l.faDir, pp = { x: -fdv.y, y: fdv.x };
          setLine(o.db._bar, add(l.hand, pp, -22), add(l.hand, pp, 22));
          setLine(o.db._p1, add(add(l.hand, pp, -17), fdv, -11), add(add(l.hand, pp, -17), fdv, 11));
          setLine(o.db._p2, add(add(l.hand, pp, 17), fdv, -11), add(add(l.hand, pp, 17), fdv, 11));
        }
      }
    });
    if (this.view !== 'front') {
      var mid = { x: (J.pelvis.x + J.neck.x) / 2, y: (J.pelvis.y + J.neck.y) / 2 };
      var perp = { x: -J.td.y, y: J.td.x };
      var c = add(mid, perp, -2 * (J.curve || 0));
      this.torso.setAttribute('d', 'M' + f1(J.pelvis.x) + ' ' + f1(J.pelvis.y) + ' Q' + f1(c.x) + ' ' + f1(c.y) + ' ' + f1(J.neck.x) + ' ' + f1(J.neck.y));
      this.torso.style.strokeWidth = f1(32 + 5 * lung) + 'px';
    } else {
      var a = J.n.hip, b = J.f.hip, c2 = J.f.sh, d = J.n.sh;
      this.torso.setAttribute('d', 'M' + f1(a.x) + ' ' + f1(a.y) + ' L' + f1(b.x) + ' ' + f1(b.y) + ' L' + f1(c2.x) + ' ' + f1(c2.y) + ' L' + f1(d.x) + ' ' + f1(d.y) + ' Z');
      setLine(this.neckL, J.neck, J.head);
    }
    this.head.setAttribute('cx', f1(J.head.x));
    this.head.setAttribute('cy', f1(J.head.y));
    this.J = J;
  };

  Figure.prototype.air = function (mode, t) {
    var J = this.J;
    if (!J || this.ex.noAir) mode = 'none';
    var hd = J ? J.hd : { x: 0, y: -1 }, face, nose, mouth;
    if (this.view === 'front') { face = { x: 0.55, y: 0.83 }; nose = add(J.head, { x: 0, y: 1 }, 4); mouth = add(J.head, { x: 0, y: 1 }, 11); }
    else if (J) { face = { x: -hd.y, y: hd.x }; nose = add(J.head, face, 21); mouth = add(add(J.head, face, 16), hd, -11); }
    for (var i = 0; i < 3; i++) {
      var q = ((t / 750) + i / 3) % 1, ie = this.airIn[i], oe = this.airOut[i];
      if (mode === 'in') {
        var p = add(add(nose, face, 52 - 34 * q), hd, (i - 1) * 7), p2 = add(p, face, 11);
        setLine(ie, p, p2); ie.setAttribute('opacity', (0.95 * Math.sin(Math.PI * q)).toFixed(2));
      } else ie.setAttribute('opacity', '0');
      if (mode === 'out') {
        var c = add(add(add(mouth, face, 8 + 52 * q), hd, -12 * q), hd, (i - 1) * 5);
        oe.setAttribute('cx', f1(c.x)); oe.setAttribute('cy', f1(c.y));
        oe.setAttribute('r', f1(2 + 4.5 * q)); oe.setAttribute('opacity', (0.9 * (1 - q)).toFixed(2));
      } else oe.setAttribute('opacity', '0');
    }
  };

  /* ---------- Guides ---------- */
  Figure.prototype.ref = function (r) {
    if (Array.isArray(r)) return { x: r[0], y: r[1] };
    var ex = this.ex, poseName = r.pose || ex.rep[0].from;
    var J = solve(ex.resolved[poseName], ex);
    var p = point(J, r.p);
    var off = (this.view !== 'front' && r.p[0] === 'f') ? FAR : { x: 0, y: 0 };
    return { x: p.x + off.x + (r.dx || 0), y: p.y + off.y + (r.dy || 0) };
  };

  function arrowHead(g, a, b, cls) {
    var an = Math.atan2(b.y - a.y, b.x - a.x), s = 14;
    var tip = { x: b.x + Math.cos(an) * 5, y: b.y + Math.sin(an) * 5 };
    var l = { x: tip.x - s * Math.cos(an - 0.45), y: tip.y - s * Math.sin(an - 0.45) };
    var r = { x: tip.x - s * Math.cos(an + 0.45), y: tip.y - s * Math.sin(an + 0.45) };
    el('path', { 'class': cls, d: 'M' + f1(tip.x) + ' ' + f1(tip.y) + ' L' + f1(l.x) + ' ' + f1(l.y) + ' L' + f1(r.x) + ' ' + f1(r.y) + ' Z' }, g);
  }

  Figure.prototype.buildGuides = function () {
    var self = this, ex = this.ex;
    ex.guides.forEach(function (gd) {
      var parent = gd.type === 'text' ? self.labelG : (gd.layer === 'back' ? self.backG : self.frontG);
      var g = el('g', { 'class': 'guide' }, parent);
      if (gd.type === 'text') {
        var p = self.ref(gd.at);
        if (!Array.isArray(gd.at) && self.zoom !== 1) p = { x: 320 + (p.x - 320) * self.zoom, y: FLOOR + (p.y - FLOOR) * self.zoom };
        var lines = String(gd.text).split('\n');
        lines.forEach(function (ln, i) {
          var t = el('text', { 'class': 'co-text', x: f1(p.x), y: f1(p.y + i * 26), 'text-anchor': gd.anchor || 'start' }, g);
          t.textContent = ln;
          t._x = p.x; t._anchor = gd.anchor || 'start';
        });
      } else if (gd.type === 'ring') {
        var c = self.ref(gd.at);
        el('circle', { 'class': 'co-ring', cx: f1(c.x), cy: f1(c.y), r: gd.r || 12 }, g);
      } else if (gd.type === 'line' || gd.type === 'arrow') {
        var a = self.ref(gd.from), b = self.ref(gd.to);
        el('line', { 'class': gd.type === 'arrow' ? 'co-arrow-line' : 'co-line', x1: f1(a.x), y1: f1(a.y), x2: f1(b.x), y2: f1(b.y) }, g);
        if (gd.type === 'arrow') arrowHead(g, a, b, 'co-head');
      } else if (gd.type === 'path') {
        var pts = [], A = ex.resolved[gd.from], B = ex.resolved[gd.to];
        for (var i = 0; i <= 24; i++) {
          var J = solve(lerpPose(A, B, ease(i / 24)), ex), q = point(J, gd.point);
          pts.push({ x: q.x + (gd.dx || 0), y: q.y + (gd.dy || 0) });
        }
        el('polyline', { 'class': 'co-path', points: pts.map(function (q) { return f1(q.x) + ',' + f1(q.y); }).join(' ') }, g);
        if (gd.arrow !== false) arrowHead(g, pts[pts.length - 2], pts[pts.length - 1], 'co-head');
      }
      self.guides.push({ g: g, show: gd.show || [] });
    });
  };

  Figure.prototype.showGuides = function (key) {
    if (this._key === key) return;
    this._key = key;
    this.guides.forEach(function (gd) { gd.g.classList.toggle('on', gd.show.indexOf(key) >= 0); });
  };

  Figure.prototype.setMirror = function (m) {
    if (this.mirrored === m) return;
    this.mirrored = m;
    this.world.setAttribute('transform', m ? 'translate(' + W + ',0) scale(-1,1)' : '');
    var texts = this.labelG.querySelectorAll('text');
    for (var i = 0; i < texts.length; i++) {
      var t = texts[i], an = t._anchor;
      t.setAttribute('x', f1(m ? W - t._x : t._x));
      t.setAttribute('text-anchor', m ? (an === 'start' ? 'end' : an === 'end' ? 'start' : 'middle') : an);
    }
  };

  function ease(p) { p = Math.min(1, Math.max(0, p)); return 0.5 - 0.5 * Math.cos(Math.PI * p); }

  /* Pose at time t (ms) within a rep; returns {J, phase, f, index} */
  Figure.prototype.sample = function (rep, t) {
    var ex = this.ex, total = 0, i;
    for (i = 0; i < rep.length; i++) total += rep[i].dur;
    var m = ((t % total) + total) % total, ph = rep[rep.length - 1], f = 1, idx = rep.length - 1;
    for (i = 0; i < rep.length; i++) {
      if (m < rep[i].dur) { ph = rep[i]; f = m / rep[i].dur; idx = i; break; }
      m -= rep[i].dur;
    }
    var e = ph.ease === 'lin' ? f : ease(f);
    var pose = lerpPose(ex.resolved[ph.from], ex.resolved[ph.to], e);
    return { J: solve(pose, ex), phase: ph, f: f, index: idx, total: total };
  };

  Figure.prototype.still = function (poseName) {
    var ex = this.ex;
    return solve(ex.resolved[poseName], ex);
  };

  WA.engine = { Figure: Figure, prepare: prepare, ease: ease, el: el, W: W, FLOOR: FLOOR, LEN: LEN };
})();
