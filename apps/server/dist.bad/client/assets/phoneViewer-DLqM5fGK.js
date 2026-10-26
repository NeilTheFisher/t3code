import { b as e, x as t } from "./_chat-LvMSbSFt.js";
import {
  B as n,
  C as r,
  E as i,
  F as a,
  H as o,
  I as s,
  L as c,
  N as l,
  O as u,
  R as d,
  T as f,
  U as p,
  _ as m,
  a as ee,
  b as te,
  c as h,
  d as g,
  f as _,
  g as ne,
  h as v,
  i as re,
  j as ie,
  k as ae,
  n as oe,
  o as y,
  p as se,
  r as ce,
  s as b,
  t as le,
  u as ue,
  v as x,
  w as de,
  x as S,
  z as C,
} from "./renderScheduler-jVJkjl9h.js";
var w = 2.2,
  T = 0.075,
  E = 0.026,
  D = 0.004,
  O = 0.008,
  k = 0.042499999999999996,
  A = 0.07799999999999999,
  fe = 2076 / 2152,
  j = (e) => Number.isFinite(e) && e > 0.75 && e < 1.5;
function M(e, t, n, r, i = 0) {
  let a = t === `left` ? -e + n : D / 2 + i,
    o = t === `left` ? -0.004 / 2 - i : e - n,
    s = -2.2 / 2 + n,
    c = w / 2 - n,
    l = new C();
  return (
    t === `left`
      ? (l.moveTo(a + r, s),
        l.lineTo(o, s),
        l.lineTo(o, c),
        l.lineTo(a + r, c),
        l.quadraticCurveTo(a, c, a, c - r),
        l.lineTo(a, s + r),
        l.quadraticCurveTo(a, s, a + r, s))
      : (l.moveTo(a, s),
        l.lineTo(o - r, s),
        l.quadraticCurveTo(o, s, o, s + r),
        l.lineTo(o, c - r),
        l.quadraticCurveTo(o, c, o - r, c),
        l.lineTo(a, c)),
    l.closePath(),
    l
  );
}
function N(e, t, n) {
  let r = new C();
  return (
    r.moveTo(-e / 2 + n, -t / 2),
    r.lineTo(e / 2 - n, -t / 2),
    r.quadraticCurveTo(e / 2, -t / 2, e / 2, -t / 2 + n),
    r.lineTo(e / 2, t / 2 - n),
    r.quadraticCurveTo(e / 2, t / 2, e / 2 - n, t / 2),
    r.lineTo(-e / 2 + n, t / 2),
    r.quadraticCurveTo(-e / 2, t / 2, -e / 2, t / 2 - n),
    r.lineTo(-e / 2, -t / 2 + n),
    r.quadraticCurveTo(-e / 2, -t / 2, -e / 2 + n, -t / 2),
    r.closePath(),
    r
  );
}
function P(e) {
  return N(e - E * 2 - 0.02, w - E * 2 - 0.04, 0.07);
}
function pe(e, t, r, a = fe) {
  let c = w - 2 * E,
    d = (a * c) / 2 + E,
    ee = new S(),
    h = new S();
  ee.add(h);
  let g = new S(),
    _ = new S();
  h.add(g, _);
  let v = new ae({ color: 10726322, metalness: 0.9, roughness: 0.28 }),
    re = new ae({ color: 12896976, metalness: 0.95, roughness: 0.16 }),
    ie = new u({ color: 724240, metalness: 0.1, roughness: 0.2, clearcoat: 1 }),
    oe = new u({
      color: 2896439,
      metalness: 0.35,
      roughness: 0.52,
      clearcoat: 0.4,
      clearcoatRoughness: 0.6,
    }),
    y = new u({ color: 1711650, metalness: 0.55, roughness: 0.3, clearcoat: 1 }),
    ce = new u({ color: 397346, metalness: 0.6, roughness: 0.1, clearcoat: 1 }),
    b = new i({ color: 15919830 }),
    le = new i({ map: e, toneMapped: !1 }),
    ue = new i({ colorWrite: !1, depthWrite: !1 }),
    x = new i({ map: e, toneMapped: !1 }),
    de = [v, re, ie, oe, y, ce, b, le, ue, x];
  g.position.z = k;
  let C = new S();
  ((C.position.z = -0.042499999999999996), g.add(C));
  function D(e, t, r) {
    let i = new f(
      new te(M(d, t, O, 0.1, O), {
        depth: T - O * 2,
        bevelEnabled: !0,
        bevelSize: O,
        bevelThickness: O,
        bevelSegments: 3,
        curveSegments: 12,
      }),
      v,
    );
    ((i.position.z = -0.0295), e.add(i));
    let a = new f(new n(M(d, t, 0.01, 0.095, 0.002), 12), ie);
    ((a.position.z = 0.0385), e.add(a));
    let o = new f(new n(M(d, t === `left` ? `right` : `left`, 0.01, 0.095, 0.002), 12), r);
    ((o.name = `${t}-back`),
      (o.rotation.y = Math.PI),
      o.position.set(0, 0, -0.075 / 2 - 0.001),
      e.add(o));
    let s = new n(M(d, t, E, 0.076));
    s.computeBoundingBox();
    let c = new f(s, ue);
    return ((c.name = `${t}-inner-screen`), (c.position.z = 0.0405), e.add(c), c);
  }
  let j = D(C, `left`, ie),
    pe = D(_, `right`, oe),
    F = 2 * (d - E),
    I = new l(F, c, 40, 48),
    L = I.getAttribute(`position`),
    R = I.getAttribute(`uv`),
    z = new Float32Array(L.count);
  for (let e = 0; e < L.count; e++) {
    let t = L.getY(e),
      n = F / 2,
      r = 0.076,
      i = Math.max(0, Math.abs(t) - 0.9980000000000001),
      a = n - r + Math.sqrt(Math.max(0, r * r - i * i)),
      o = Math.max(-a, Math.min(a, L.getX(e)));
    ((z[e] = o), R.setXY(e, o / F + 0.5, t / c + 0.5));
  }
  R.needsUpdate = !0;
  let B = new f(I, le);
  ((B.name = `continuous-inner-screen`), h.add(B));
  let V = 0.15,
    H = new f(new m(A, A, 2.188, 32, 1, !1, Math.PI / 2 + V, Math.PI - V * 2), re);
  ((H.name = `hinge-spine`), (H.position.z = k), h.add(H));
  let U = new f(new n(P(d)), x);
  ((U.name = `cover-screen`),
    U.position.set(-d / 2, 0, -0.075 / 2 - 0.003),
    (U.rotation.y = Math.PI),
    C.add(U));
  let W = new S();
  W.name = `rear-camera`;
  let G = 0.46,
    K = 0.2;
  (W.position.set(d - 0.07 - G / 2, w / 2 - 0.08 - K / 2, -0.075 / 2 - 0.002),
    (W.rotation.y = Math.PI),
    _.add(W));
  let q = new f(
    new te(N(G, K, 0.07), {
      depth: 0.02,
      bevelEnabled: !0,
      bevelSize: 0.008,
      bevelThickness: 0.006,
      bevelSegments: 3,
      curveSegments: 12,
    }),
    y,
  );
  ((q.name = `camera-plate`), W.add(q));
  for (let [e, t] of [
    [-0.14, 0.05],
    [-0.01, 0.05],
    [0.105, 0.036],
  ]) {
    let n = new f(new m(t + 0.012, t + 0.012, 0.012, 32), v);
    ((n.rotation.x = Math.PI / 2), n.position.set(e, 0, 0.030000000000000002), W.add(n));
    let r = new f(new ne(t, 32), ce);
    ((r.name = `camera-lens`), r.position.set(e, 0, 0.036500000000000005), W.add(r));
  }
  let J = new f(new ne(0.018, 20), b);
  (J.position.set(0.185, 0.045, 0.026500000000000003), W.add(J));
  for (let [e, t] of [
    [0.52, 0.16],
    [0.2, 0.3],
  ]) {
    let n = new f(new se(0.02, t, T * 0.45), v);
    (n.position.set(d + 0.008, e, 0), _.add(n));
  }
  let Y = new s(),
    me = new o(),
    X = new p(),
    Z = null,
    he = t,
    Q = r,
    $ = () => {
      let e = Q >= 90;
      ((B.visible = e), (j.visible = e), (pe.visible = e), (U.visible = !e));
    },
    ge = (e) => {
      ((Q = Math.max(0, Math.min(180, e))),
        (g.rotation.y = Math.PI * (1 - Q / 180)),
        (H.rotation.y = g.rotation.y / 2));
      let t = g.rotation.y,
        n = Math.cos(t),
        r = Math.sin(t),
        i = -0.0010000000000000009;
      for (let e = 0; e < L.count; e++) {
        let t = z[e];
        t < 0
          ? L.setXYZ(e, t * n + i * r, L.getY(e), -t * r + i * n + k)
          : L.setXYZ(e, t, L.getY(e), 0.041499999999999995);
      }
      ((L.needsUpdate = !0), I.computeBoundingBox(), I.computeBoundingSphere(), $());
    },
    _e = (e, t) => {
      ((he = t), (le.map = e), (x.map = e), U.geometry.computeBoundingBox());
      let n = U.geometry.boundingBox,
        r = U.geometry.getAttribute(`uv`),
        i = U.geometry.getAttribute(`position`);
      for (let e = 0; e < r.count; e++) {
        let t = (i.getX(e) - n.min.x) / (n.max.x - n.min.x),
          a = (i.getY(e) - n.min.y) / (n.max.y - n.min.y);
        r.setXY(e, t, a);
      }
      ((r.needsUpdate = !0), $());
    };
  return (
    ge(r),
    _e(e, t),
    {
      root: ee,
      orientation: h,
      width: d * 2,
      height: w,
      innerAspect: a,
      setAngle: ge,
      setDisplay: _e,
      screenPoint(e, t, n, r = !1) {
        (h.updateWorldMatrix(!0, !0),
          n.updateMatrixWorld(!0),
          me.set(e * 2 - 1, 1 - t * 2),
          Y.setFromCamera(me, n));
        let i = U.visible ? [U] : [j, pe],
          a = Y.intersectObjects(i, !1)[0];
        if (!a && !r) return ((Z = null), null);
        let o = a?.object ?? (Z?.visible ? Z : i[0]);
        if (!o) return null;
        if ((a && (Z = o), a)) X.copy(a.point);
        else {
          let e = new p(0, 0, 1).transformDirection(o.matrixWorld),
            t = new p().setFromMatrixPosition(o.matrixWorld),
            n = e.dot(t.clone().sub(Y.ray.origin)) / e.dot(Y.ray.direction);
          if (!Number.isFinite(n)) return null;
          X.copy(Y.ray.direction).multiplyScalar(n).add(Y.ray.origin);
        }
        o.worldToLocal(X);
        let s = o.geometry.boundingBox,
          c = Math.max(0, Math.min(1, (X.x - s.min.x) / (s.max.x - s.min.x))),
          l = Math.max(0, Math.min(1, (s.max.y - X.y) / (s.max.y - s.min.y))),
          u = o === U ? c : (o === j ? c : 1 + c) / 2;
        return he.rotation === Math.PI ? { x: 1 - u, y: 1 - l } : { x: u, y: l };
      },
      dispose() {
        ee.traverse((e) => {
          e instanceof f && e.geometry.dispose();
        });
        for (let e of de) e.dispose();
      },
    }
  );
}
var F = 450,
  I = 850;
function L(n) {
  let i = new ue({ canvas: n.canvas, alpha: !0, antialias: !0, powerPreference: `low-power` });
  i.outputColorSpace = c;
  let o = () => {
      let e = new v(n.source);
      return (
        (e.colorSpace = c), (e.minFilter = r), (e.magFilter = r), (e.generateMipmaps = !1), e
      );
    },
    s = o(),
    l = n.source.width,
    u = n.source.height,
    f = new d(),
    m = new ie(32, 1, 0.1, 30);
  m.position.z = 5.5;
  let te = new g(16777215, 2.4),
    ne = new x(15003135, 5);
  ne.position.set(-3, 4, 5);
  let ae = new x(16777215, 4);
  ae.position.set(3, 1, -3);
  let se = new x(10464468, 2);
  (se.position.set(-2, -2, -4), f.add(te, ne, ae, se));
  let S = null,
    C = h(S, n.source.width, n.source.height),
    w = n.profile ?? t,
    T = n.foldAngle ?? null,
    E = T !== null && w.id.startsWith(`android`) ? 0 : C.rotation,
    D = null,
    O = null,
    k = n.model ?? null,
    A = null,
    M = null,
    N = null,
    P = () => n.source.width / n.source.height,
    L = j(P()) ? P() : fe,
    R = (e, t = C) => pe(s, t, e, L),
    z = (e) => {
      if (!N) return e;
      let t = Math.min(1, (performance.now() - N.startedAt) / I),
        n = t * t * (3 - 2 * t);
      return N.from + (N.to - N.from) * n;
    },
    B = T !== null && w.id.startsWith(`android`) ? R(T) : b(s, C, w);
  f.add(B.root);
  let V = !1,
    H = new a(),
    U = ce({ choose: (e) => oe(e, [{ rotation: new a(), yawLimit: Math.PI / 3 }]).rotation });
  U.setPose(H, performance.now(), !0);
  let W = re(),
    G = () => globalThis.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches ?? !1,
    K = { width: 0, height: 0, pixelRatio: 1 },
    q = { width: 0, height: 0, pixelRatio: 0 },
    J = null,
    Y = (e = !1) => {
      if (!K.width || !K.height) return;
      m.aspect = K.width / K.height;
      let t = new _(new p(-B.width / 2, -B.height / 2, 0), new p(B.width / 2, B.height / 2, 0));
      (O && M && t.union(M), t.applyMatrix4(new de().makeRotationZ(E)));
      let r = t.getSize(new p()),
        i = r.x / r.y;
      (i !== J && ((J = i), n.onFramingAspect?.(i)),
        B.root.updateMatrixWorld(!0),
        W.setBounds(
          new _().setFromObject(B.root),
          (m.fov * Math.PI) / 360,
          m.aspect,
          performance.now(),
          e,
        ),
        me());
    },
    me = () => {
      (m.position.set(W.center.x, W.center.y, W.distance()),
        m.lookAt(W.center.x, W.center.y, 0),
        m.updateProjectionMatrix());
    },
    X = () => {
      (B.root.quaternion.copy(U.rotation), (B.orientation.rotation.z = E));
    },
    Z = le(() => {
      if (!V && K.width && K.height)
        try {
          (q.width !== K.width || q.height !== K.height || q.pixelRatio !== K.pixelRatio) &&
            (i.setDrawingBufferSize(K.width, K.height, K.pixelRatio), (q = K));
          let e = performance.now();
          if ((U.advance(e, G()) && (X(), Y(G())), D)) {
            let t = Math.min(1, (e - D.startedAt) / F),
              n = t * t * (3 - 2 * t);
            ((E = D.from + (D.to - D.from) * n), t === 1 && (D = null), X(), Y(G()));
          }
          if (N && `setAngle` in B) {
            let t = Math.min(1, (e - N.startedAt) / I),
              n = t * t * (3 - 2 * t);
            (B.setAngle(N.from + (N.to - N.from) * n), t === 1 && (N = null), Y(G()));
          }
          (W.advance(e, G()),
            me(),
            i.render(f, m),
            (U.needsFrame() || W.needsFrame() || D || N) && Z.invalidate());
        } catch {
          n.onUnavailable();
        }
    }),
    he = (e = w) => {
      let t = h(S, n.source.width, n.source.height),
        r = l !== n.source.width || u !== n.source.height;
      if (
        r ||
        e !== w ||
        t.aspect !== C.aspect ||
        t.rawLandscape !== C.rawLandscape ||
        t.rotation !== C.rotation
      ) {
        if (r) {
          let e = s;
          ((s = o()), (l = n.source.width), (u = n.source.height), B.setDisplay(s, t), e.dispose());
        }
        let i = P(),
          a = j(i) && i !== L;
        if ((a && (L = i), !O && `setAngle` in B && a)) {
          let e = z(T ?? 180);
          (f.remove(B.root), B.dispose(), (B = R(e, t)), f.add(B.root));
        } else
          !O && !(`setAngle` in B) && (e !== w || t.aspect !== C.aspect)
            ? (f.remove(B.root), B.dispose(), (B = b(s, t, e)), f.add(B.root))
            : B.setDisplay(s, t);
        if (t.rotation !== C.rotation) {
          if (e.id.startsWith(`android`) && !(`setAngle` in B) && !G()) {
            let e = Math.atan2(Math.sin(t.rotation - E), Math.cos(t.rotation - E));
            D = { from: E, to: E + e, startedAt: performance.now() };
          } else ((D = null), (E = `setAngle` in B ? 0 : t.rotation));
        }
        ((C = t), (w = e), X(), Y(!D));
      }
      X();
    },
    Q = e({
      load: y,
      onError: n.onModelError,
      install(e) {
        let t = V
          ? null
          : e
            ? ee(e.asset, s, C)
            : T !== null && w.id.startsWith(`android`)
              ? R(T)
              : b(s, C, w);
        ((N = null),
          f.remove(B.root),
          B.dispose(),
          (O = e),
          t &&
            ((B = t),
            f.add(B.root),
            A && (O ? B.orientation.add(A.asset) : A.asset.removeFromParent()),
            X(),
            Y(!0),
            Z.invalidate()));
      },
    }),
    $ = e({
      load: y,
      onError: n.onModelError,
      install(e) {
        let t = e ? new _().setFromObject(e.asset) : null;
        if (t && (t.isEmpty() || ![...t.min.toArray(), ...t.max.toArray()].every(Number.isFinite)))
          throw Error(`Device accessory has invalid bounds`);
        (A?.asset.removeFromParent(),
          (A = e),
          (M = t),
          !V && (O && A && B.orientation.add(A.asset), Y(!0), Z.invalidate()));
      },
    }),
    ge = (e) => {
      $.set(e?.modelId === k?.id ? e : null);
    },
    _e = (e) => {
      (e.preventDefault(), n.onUnavailable());
    };
  return (
    n.canvas.addEventListener(`webglcontextlost`, _e),
    X(),
    Q.set(n.model ?? null),
    ge(n.accessory ?? null),
    {
      setModel(e) {
        ((e?.id !== k?.id || e?.url !== k?.url) && $.set(null), (k = e), Q.set(e));
      },
      setAccessory: ge,
      setFoldAngle(e) {
        if (V || e === T) return;
        let t = T;
        if (((T = e), !O)) {
          if (e === null || !(`setAngle` in B))
            (f.remove(B.root),
              B.dispose(),
              (B = e === null ? b(s, C, w) : R(e)),
              f.add(B.root),
              (D = null),
              (E = e === null ? C.rotation : 0),
              (N = null),
              X(),
              Y(!0));
          else {
            let n = z(t ?? e);
            G()
              ? ((N = null), B.setAngle(e), Y(!0))
              : (N = { from: n, to: e, startedAt: performance.now() });
          }
          Z.invalidate();
        }
      },
      frameUpdated() {
        V || (he(), (s.needsUpdate = !0), Z.invalidate());
      },
      setScreen(e, t = w) {
        V || ((S = e), he(t), Z.invalidate());
      },
      resize(e, t, n) {
        if (V || ![e, t, n].every(Number.isFinite) || e <= 0 || t <= 0) return;
        let r = Math.min(2, Math.max(1, n));
        (K.width !== e || K.height !== t || K.pixelRatio !== r) &&
          ((K = { width: e, height: t, pixelRatio: r }), Y(!0), Z.invalidate());
      },
      screenPoint(e, t, n = !1) {
        return V ? null : (X(), B.screenPoint(e, t, m, n));
      },
      orbit(e, t) {
        V || (U.orbit(e * K.width, t * K.height, performance.now()), Z.invalidate());
      },
      setInteractionActive(e, t) {
        if (V) return;
        let n = performance.now();
        (t === `orbit` ? U.dragActive(e, n) : (U.hold(e, n), W.hold(e, n)), Z.invalidate());
      },
      resetPose() {
        V || (U.reset(H, performance.now()), Z.invalidate());
      },
      dispose() {
        if (V) return;
        ((V = !0), Z.dispose());
        let e = O !== null;
        ($.dispose(),
          Q.dispose(),
          n.canvas.removeEventListener(`webglcontextlost`, _e),
          f.remove(B.root),
          e || B.dispose(),
          s.dispose(),
          i.dispose(),
          i.forceContextLoss());
      },
    }
  );
}
export { L as createPhoneViewer };
//# sourceMappingURL=phoneViewer-DLqM5fGK.js.map
