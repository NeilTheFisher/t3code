import { b as e, y as t } from "./_chat-LvMSbSFt.js";
import {
  A as n,
  C as r,
  D as i,
  E as a,
  F as o,
  H as s,
  I as c,
  L as l,
  M as u,
  P as d,
  R as f,
  S as p,
  T as m,
  U as h,
  V as g,
  d as _,
  f as v,
  h as y,
  i as b,
  j as ee,
  k as x,
  l as S,
  m as te,
  n as C,
  o as ne,
  p as w,
  r as T,
  t as re,
  u as ie,
  v as ae,
  w as E,
  x as D,
  y as oe,
} from "./renderScheduler-jVJkjl9h.js";
var se = class extends f {
  constructor() {
    super();
    let e = new w();
    e.deleteAttribute(`uv`);
    let t = new x({ side: 1 }),
      r = new x(),
      i = new d(16777215, 900, 28, 2);
    (i.position.set(0.418, 16.199, 0.3), this.add(i));
    let a = new m(e, t);
    (a.position.set(-0.757, 13.219, 0.717), a.scale.set(31.713, 28.305, 28.591), this.add(a));
    let o = new p(e, r, 6),
      s = new n();
    (s.position.set(-10.906, 2.009, 1.846),
      s.rotation.set(0, -0.195, 0),
      s.scale.set(2.328, 7.905, 4.651),
      s.updateMatrix(),
      o.setMatrixAt(0, s.matrix),
      s.position.set(-5.607, -0.754, -0.758),
      s.rotation.set(0, 0.994, 0),
      s.scale.set(1.97, 1.534, 3.955),
      s.updateMatrix(),
      o.setMatrixAt(1, s.matrix),
      s.position.set(6.167, 0.857, 7.803),
      s.rotation.set(0, 0.561, 0),
      s.scale.set(3.927, 6.285, 3.687),
      s.updateMatrix(),
      o.setMatrixAt(2, s.matrix),
      s.position.set(-2.017, 0.018, 6.124),
      s.rotation.set(0, 0.333, 0),
      s.scale.set(2.002, 4.566, 2.064),
      s.updateMatrix(),
      o.setMatrixAt(3, s.matrix),
      s.position.set(2.291, -0.756, -2.621),
      s.rotation.set(0, -0.286, 0),
      s.scale.set(1.546, 1.552, 1.496),
      s.updateMatrix(),
      o.setMatrixAt(4, s.matrix),
      s.position.set(-2.193, -0.369, -5.547),
      s.rotation.set(0, 0.516, 0),
      s.scale.set(3.875, 3.487, 2.986),
      s.updateMatrix(),
      o.setMatrixAt(5, s.matrix),
      this.add(o));
    let c = new m(e, O(50));
    (c.position.set(-16.116, 14.37, 8.208), c.scale.set(0.1, 2.428, 2.739), this.add(c));
    let l = new m(e, O(50));
    (l.position.set(-16.109, 18.021, -8.207), l.scale.set(0.1, 2.425, 2.751), this.add(l));
    let u = new m(e, O(17));
    (u.position.set(14.904, 12.198, -1.832), u.scale.set(0.15, 4.265, 6.331), this.add(u));
    let f = new m(e, O(43));
    (f.position.set(-0.462, 8.89, 14.52), f.scale.set(4.38, 5.441, 0.088), this.add(f));
    let h = new m(e, O(20));
    (h.position.set(3.235, 11.486, -12.541), h.scale.set(2.5, 2, 0.1), this.add(h));
    let g = new m(e, O(100));
    (g.position.set(0, 20, 0), g.scale.set(1, 0.1, 1), this.add(g));
  }
  dispose() {
    let e = new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (let t of e) t.dispose();
  }
};
function O(e) {
  return new i({ color: 0, emissive: 16777215, emissiveIntensity: e });
}
function k(e, t, n) {
  return e === 1 ? { x: t, y: n } : { x: n, y: 1 - t };
}
function ce(e, t) {
  return (
    e.width > 0 &&
    e.height > 0 &&
    Math.abs(e.width / e.height - t.width / t.height) <= 1 / e.height + 1 / t.height
  );
}
function A(e) {
  return e ? `${e.screenId}:${e.width}:${e.height}:${e.orientation}` : ``;
}
function le(e, t) {
  let n = e.getObjectByName(`left-half`),
    r = e.getObjectByName(`right-half`),
    i = e.getObjectByName(`cover-display`),
    l = e.getObjectByName(`inner-display-left`),
    d = e.getObjectByName(`inner-display-right`);
  if (!n || !r || !(i instanceof m) || !(l instanceof m) || !(d instanceof m))
    throw Error(`Duo model must have two hinge groups and all three display meshes`);
  let f = { 1: [i], 3: [l, d] },
    p = [1, 3].map((e) => {
      let t = new v();
      for (let n of f[e]) (n.geometry.computeBoundingBox(), t.union(n.geometry.boundingBox));
      let n = t.getSize(new h());
      if (![n.x, n.y].every((e) => Number.isFinite(e) && e > 0))
        throw Error(`Invalid Duo display bounds`);
      return { bounds: t, size: n };
    }),
    _ = new D(),
    y = new D();
  (y.add(e), _.add(y));
  let b = NaN,
    ee = new v(),
    x = new E(),
    S = new E(),
    C = { 1: new a({ map: t[1], toneMapped: !1 }), 3: new a({ map: t[3], toneMapped: !1 }) },
    ne = new Map();
  for (let e of [1, 3]) {
    let { bounds: t, size: n } = p[e === 1 ? 0 : 1];
    for (let r of f[e]) {
      let i = r.geometry.getAttribute(`position`),
        a = new Float32Array(i.count * 2);
      for (let r = 0; r < i.count; r++) {
        let o = (i.getX(r) - t.min.x) / n.x;
        ((a[r * 2] = e === 1 ? 1 - o : o), (a[r * 2 + 1] = (i.getY(r) - t.min.y) / n.y));
      }
      (r.geometry.setAttribute(`uv`, new te(a, 2)), ne.set(r, r.material), (r.material = C[e]));
    }
  }
  let w = new c(),
    T = null;
  return {
    root: _,
    setAngle(t) {
      if (t === b) return;
      b = t;
      let i = ((180 - Math.min(180, Math.max(0, t))) * Math.PI) / 360;
      ((n.rotation.y = i),
        (r.rotation.y = -i),
        y.position.set(0, 0, 0),
        _.updateWorldMatrix(!0, !0),
        S.copy(_.matrixWorld).invert(),
        ee.makeEmpty(),
        e.traverse((e) => {
          e instanceof m &&
            (e.geometry.boundingBox || e.geometry.computeBoundingBox(),
            e.geometry.boundingBox &&
              (x.multiplyMatrices(S, e.matrixWorld),
              ee.union(e.geometry.boundingBox.clone().applyMatrix4(x))));
        }),
        y.position.copy(ee.getCenter(new h())).negate());
    },
    restFrames(e) {
      (_.updateWorldMatrix(!0, !0), S.copy(_.matrixWorld).invert());
      let t = (e, t) => {
        let n = new v(),
          r = new h(),
          i = new h();
        for (let t of e)
          (t.geometry.boundingBox || t.geometry.computeBoundingBox(),
            x.multiplyMatrices(S, t.matrixWorld),
            n.union(t.geometry.boundingBox.clone().applyMatrix4(x)),
            r.add(
              new h()
                .fromBufferAttribute(t.geometry.getAttribute(`normal`), 0)
                .transformDirection(x),
            ),
            i.add(new h(0, 1, 0).transformDirection(x)));
        return { face: t, center: n.getCenter(new h()), normal: r.normalize(), up: i.normalize() };
      };
      if (e === 1) return [t([i], `cover`)];
      let n = t([l, d], `inside`);
      return b > 20 && b < 165 ? [n, t([l], `left`), t([d], `right`)] : [n];
    },
    leafRotation(e) {
      return (
        _.updateWorldMatrix(!0, !0),
        x.multiplyMatrices(_.matrixWorld.clone().invert(), (e === `left` ? n : r).matrixWorld),
        new o().setFromRotationMatrix(x.extractRotation(x))
      );
    },
    hingeLeafAt(e, t, i) {
      if (!Number.isFinite(e) || !Number.isFinite(t)) return null;
      (_.updateMatrixWorld(!0),
        i.updateMatrixWorld(!0),
        w.setFromCamera(new s(e * 2 - 1, 1 - t * 2), i));
      let a = w.intersectObject(_, !0)[0]?.object;
      for (; a;) {
        if (a === n) return `left`;
        if (a === r) return `right`;
        a = a.parent ?? void 0;
      }
      return null;
    },
    cancelInput() {
      T = null;
    },
    screenPoint(e, t, n, r, i, a = !1) {
      let o = A(r);
      if (!r || !i || o !== i) return ((T = null), null);
      if (
        (_.updateMatrixWorld(!0),
        n.updateMatrixWorld(!0),
        w.setFromCamera(new s(e * 2 - 1, 1 - t * 2), n),
        a && T?.key === o)
      ) {
        let e = w.ray.intersectPlane(T.plane, new h()),
          t = e ? T.triangle.getBarycoord(e, new h()) : null;
        if (!t) return null;
        let n = T.uv[0]
          .clone()
          .multiplyScalar(t.x)
          .addScaledVector(T.uv[1], t.y)
          .addScaledVector(T.uv[2], t.z);
        return k(T.panel, n.x, 1 - n.y);
      }
      let c = w.intersectObject(_, !0)[0];
      if (!c?.uv || !c.face || !(c.object instanceof m)) return null;
      let l = f[1].includes(c.object) ? 1 : f[3].includes(c.object) ? 3 : null;
      if (!l || l !== r.screenId) return null;
      let d = [c.face.a, c.face.b, c.face.c],
        p = c.object.geometry.getAttribute(`position`),
        v = new g(
          ...d.map((e) => new h().fromBufferAttribute(p, e).applyMatrix4(c.object.matrixWorld)),
        ),
        y = c.object.geometry.getAttribute(`uv`);
      return (
        (T = {
          panel: l,
          triangle: v,
          uv: d.map((e) => new s().fromBufferAttribute(y, e)),
          plane: v.getPlane(new u()),
          key: o,
        }),
        k(l, c.uv.x, 1 - c.uv.y)
      );
    },
    dispose() {
      for (let [e, t] of ne) e.material = t;
      for (let e of Object.values(C)) ((e.map = null), e.dispose());
      (y.remove(e), (T = null));
    },
  };
}
var j = [`portrait`, `landscape_left`, `portrait_upside_down`, `landscape_right`],
  M = new h(0, 0, 1),
  N = new h(0, 1, 0);
function ue(e, t) {
  let n = [];
  for (let r of e) {
    let i = r.normal.clone().normalize();
    if (i.lengthSq() < 0.5) continue;
    let a = r.up.clone().cross(i).normalize(),
      s = i.clone().cross(a).normalize(),
      c = new o().setFromRotationMatrix(new E().makeBasis(a, s, i)).invert();
    for (let i = 0; i < j.length; i++) {
      if ((r.face === `right` && i !== 0) || (r.face === `left` && i !== 2)) continue;
      let a = (t === 3 ? Math.PI / 2 : 0) - (i * Math.PI) / 2,
        s = c.clone().premultiply(new o().setFromAxisAngle(M, a));
      if (
        ((r.face === `left` || r.face === `right`) &&
          s.premultiply(new o().setFromAxisAngle(new h(1, 0, 0), Math.PI / 12)),
        t === 3 &&
          e.some(
            (e) =>
              (e.face === `left` || e.face === `right`) &&
              e.normal.clone().applyQuaternion(s).z < 0.04,
          ))
      )
        continue;
      let l = r.face === `cover` ? Math.PI / 9 : Math.PI / 3;
      if (t === 3)
        for (let t of [-1, 1])
          for (let n = 1; n <= 60; n++) {
            let r = new o().setFromAxisAngle(N, (t * n * Math.PI) / 180);
            if (
              e.some(
                (e) =>
                  (e.face === `left` || e.face === `right`) &&
                  e.normal.clone().applyQuaternion(s).applyQuaternion(r).z < 0.04,
              )
            ) {
              l = Math.min(l, ((n - 1) * Math.PI) / 180);
              break;
            }
          }
      n.push({
        rotation: s,
        face: r.face,
        orientation: j[i],
        center: r.center.clone(),
        yawLimit: l,
      });
    }
  }
  return n;
}
var P = C;
function F(n) {
  let i = [1, 3]
      .map((e) => {
        let t = document.createElement(`canvas`);
        ((t.width = e === 1 ? 784 : 1600), (t.height = e === 1 ? 1140 : 1125));
        let n = t.getContext(`2d`, { alpha: !1 });
        if (!n) throw Error(`Duo display canvas is unavailable`);
        return (
          (n.fillStyle = `#080a10`),
          n.fillRect(0, 0, t.width, t.height),
          { id: e, canvas: t, context: n }
        );
      })
      .map(({ id: e, canvas: t, context: n }) => {
        let i = new y(t);
        return (
          (i.colorSpace = l),
          (i.minFilter = i.magFilter = r),
          (i.generateMipmaps = !1),
          { id: e, canvas: t, context: n, texture: i }
        );
      }),
    a = new ie({ canvas: n.canvas, alpha: !0, antialias: !0, powerPreference: `low-power` });
  a.outputColorSpace = l;
  let s = new f(),
    c = (() => {
      let e = new S(a),
        t = new se();
      try {
        return e.fromScene(t, 0.04);
      } catch (e) {
        for (let e of i) e.texture.dispose();
        throw (a.dispose(), a.forceContextLoss(), e);
      } finally {
        (t.dispose(), e.dispose());
      }
    })();
  s.environment = c.texture;
  let u = new ee(36, 1, 0.1, 150),
    d = new ae(16777215, 4);
  d.position.set(-6, 10, 14);
  let p = new ae(13098239, 2);
  (p.position.set(8, -3, -5), s.add(new _(16777215, 2.4), d, p));
  let m = null,
    g = null,
    x = ``,
    te = ``,
    C = 0,
    w = !1,
    E = { width: 0, height: 0, ratio: 1 },
    D = { width: 0, height: 0, ratio: 0 },
    O = `inside`,
    k = null,
    j = null,
    M = new h(),
    N = new h(),
    F = null,
    de = null,
    I = () => {
      (de && clearTimeout(de), (de = null), (F = null));
    },
    L = () => (m ? ue(m.restFrames(g?.screenId === 1 ? 1 : 3), g?.screenId === 1 ? 1 : 3) : []),
    fe = () => {
      if (!m || !g?.supportsPhysicalOrientation || !n.onPanelRequested) return L();
      let e = ue(m.restFrames(1), 1);
      return z > 20 && z < 180 ? [...ue(m.restFrames(3), 3), ...e] : L();
    },
    R = T({
      choose(e) {
        let t = P(e, fe());
        if (!t) return e;
        O = t.face;
        let r = t.face === `cover` ? 1 : 3;
        return (
          g && r !== (F ?? g.screenId) && n.onPanelRequested
            ? (I(),
              (F = r),
              m?.cancelInput(),
              n.onPanelRequested(r),
              (de = setTimeout(() => {
                I();
                let e = P(R.rotation, L());
                (e && ((O = e.face), R.setPose(e.rotation, performance.now())), $.invalidate());
              }, 5e3)))
            : g &&
              F === null &&
              t.orientation !== j &&
              n.onOrientationRequested &&
              ((j = t.orientation), (k = t.orientation), n.onOrientationRequested(t.orientation)),
          t.rotation
        );
      },
    }),
    z = 180,
    B = 180,
    V = null,
    H = null,
    pe = NaN,
    me = !1,
    U = b(),
    he = new v(),
    W = !0,
    G = !1,
    K = `open`,
    ge = 180,
    q = new o(),
    J = 0,
    Y = typeof matchMedia == `function` && matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    X = () => {
      if (!m) return;
      let e = H && pe !== z ? m.leafRotation(H) : null;
      if ((m.setAngle(z), (pe = z), e && H)) {
        let t = e.multiply(m.leafRotation(H).invert());
        t.angleTo(new o()) > 1e-8 &&
          R.setPose(R.rotation.clone().multiply(t), performance.now(), !0);
      }
      (m.root.quaternion.copy(R.rotation), m.root.position.set(0, 0, 0));
      let t = m.restFrames(O === `cover` ? 1 : 3),
        n = t.find((e) => e.face === O) ?? t[0];
      (N.copy(n?.center ?? new h()),
        m.root.position.copy(M).applyQuaternion(m.root.quaternion).negate());
    },
    _e = () => {
      (u.position.set(U.center.x, U.center.y, U.distance()),
        u.lookAt(U.center.x, U.center.y, 0),
        u.updateProjectionMatrix());
    },
    Z = (e = !1) => {
      m &&
        E.width &&
        E.height &&
        ((u.aspect = E.width / E.height),
        U.setBounds(
          he.setFromObject(m.root),
          (u.fov * Math.PI) / 360,
          u.aspect,
          performance.now(),
          e,
        ),
        _e());
    },
    Q = () => Math.abs(z - B) > 0.01 || M.distanceTo(N) > 0.001,
    $ = re(() => {
      if (!w && m && E.width && E.height)
        try {
          let e = performance.now(),
            t = Math.max(0, (e - J) / 1e3),
            n = Y ? 1 : 1 - Math.exp(-14 * Math.max(0, (e - J) / 1e3 || 0.016));
          J = e;
          let r = Q(),
            i = R.advance(e, Y);
          (r &&
            ((z += (B - z) * n),
            Math.abs(z - B) <= 0.01 && (z = B),
            X(),
            M.lerp(N, n),
            M.distanceTo(N) <= 0.001 && M.copy(N),
            X(),
            Z(Y || t > 0.5)),
            i && (X(), Z(Y || t > 0.5)),
            U.advance(e, Y) && _e(),
            (D.width !== E.width || D.height !== E.height || D.ratio !== E.ratio) &&
              (a.setDrawingBufferSize(E.width, E.height, E.ratio), (D = E)),
            a.render(s, u),
            (r || Q() || R.needsFrame() || U.needsFrame()) && $.invalidate());
        } catch {
          n.onUnavailable();
        }
    }),
    ve = e({
      load: ne,
      onError(e) {
        (n.onModelError?.(e), n.onUnavailable());
      },
      install(e) {
        let t = e ? le(e.asset, { 1: i[0].texture, 3: i[1].texture }) : null;
        if ((m && (s.remove(m.root), m.dispose()), (m = t), (pe = NaN), m && !w)) {
          if ((s.add(m.root), X(), g?.screenId === 1 && K !== `tent`)) {
            let e = P(R.rotation, L());
            e && ((O = e.face), R.setPose(e.rotation, performance.now(), !0), X());
          }
          (M.copy(N), X(), Z(), $.invalidate());
        }
      },
    }),
    ye = (e) => {
      (e.preventDefault(), n.onUnavailable());
    };
  return (
    n.canvas.addEventListener(`webglcontextlost`, ye),
    ve.set(n.model),
    {
      setScreen(e) {
        if (w) return;
        let n = Q() || R.needsFrame();
        A(g) !== A(e) && ((x = ``), (C = performance.now()), m?.cancelInput());
        let r = g,
          i = F !== null;
        (e && e.screenId !== F) || I();
        let a = k !== null,
          s = a && e?.screenId === r?.screenId,
          c = e?.screenId !== r?.screenId;
        ((k = null), (g = e));
        let l = e?.hingePose && e.hingePose !== r?.hingePose,
          u = H !== null && !l,
          d = r?.hingeAngle ?? (r?.screenId === 1 ? 0 : 180),
          f = e?.hingeAngle ?? (e?.screenId === 1 ? 0 : 180);
        !e || u || l ? (G = !1) : r && d !== f && (G = !0);
        let p = G && !!e && t(e) && !i;
        e && t(e) && (G = !1);
        let _ =
            !G &&
            e?.screenId === r?.screenId &&
            e?.hingeAngle === r?.hingeAngle &&
            e?.orientation !== r?.orientation,
          v = _ && !s && !i && !u && !e?.hingePose && V === null;
        if (
          ((W || l || v || p) &&
            ((K = e?.hingePose ?? (e?.screenId === 1 ? `closed` : `open`)),
            (ge = e?.hingeAngle ?? (e?.screenId === 1 ? 0 : 180))),
          (B = V ?? e?.hingeAngle ?? (e?.screenId === 1 ? 0 : 180)),
          W || l || p || (_ && !s && !i && !u))
        ) {
          ((H = null), (j = e?.orientation ?? null));
          let t = ge,
            n = ((180 - t) * Math.PI) / 360,
            r = K === `closed` ? 0 : Math.PI / 2;
          (e &&
            e.width < e.height &&
            (e.orientation === `landscape_left` && (r -= Math.PI / 2),
            e.orientation === `landscape_right` && (r += Math.PI / 2)),
            e?.orientation === `portrait_upside_down` && (r -= Math.PI));
          let i =
            K === `laptop`
              ? new oe(-n + Math.PI / 9, -Math.PI / 9, Math.PI / 2, `YXZ`)
              : K === `tent`
                ? new oe(Math.PI / 2 + Math.PI / 18, -Math.PI / 9, -Math.PI / 2, `YXZ`)
                : new oe(0, (Math.PI / 2) * (1 - t / 180) ** 3, 0, `YXZ`);
          if (
            ((q = new o().setFromEuler(i)),
            K !== `laptop` &&
              K !== `tent` &&
              q.premultiply(new o().setFromAxisAngle(new h(0, 0, 1), r)),
            e?.screenId === 1 && !p && K !== `tent`)
          ) {
            let e = P(q, L());
            e && q.copy(e.rotation);
          }
          (W && (z = B),
            (O = e?.screenId === 1 ? `cover` : K === `laptop` ? `right` : `inside`),
            R.setPose(q, performance.now(), W),
            (W = !1));
        } else if (e && c && !i && !u && (O === `cover`) != (e.screenId === 1) && (a || t(e))) {
          let e = P(R.rotation, L());
          e && ((O = e.face), R.setPose(e.rotation, performance.now()));
        }
        (n || (J = performance.now()), X(), Z(), $.invalidate());
      },
      setHingePreview(e, t = !1) {
        w ||
          (e !== null && (!Number.isFinite(e) || e < 0 || e > 180)) ||
          (Q() || (J = performance.now()),
          (V = e),
          e !== null && !t
            ? (H = null)
            : e !== null &&
              !H &&
              m &&
              (I(),
              (k = null),
              (H = g?.screenId === 1 && z > 20 ? `left` : `right`),
              R.setPose(R.rotation.clone(), performance.now(), !0)),
          R.hold(me || (t && e !== null), performance.now()),
          (B = e ?? g?.hingeAngle ?? (g?.screenId === 1 ? 0 : 180)),
          e !== null && t && ((z = e), X(), Z()),
          m?.cancelInput(),
          $.invalidate());
      },
      setInteractionActive(e, t = `touch`) {
        w ||
          (t === `orbit`
            ? (e && (H = null), R.dragActive(e, performance.now()))
            : ((me = e), R.hold(e || V !== null, performance.now()), U.hold(e, performance.now())),
          $.invalidate());
      },
      rejectOrientation() {
        if (w || (k === null && F === null)) return;
        (I(), (k = null), (j = g?.orientation ?? null));
        let e = L().filter((e) => e.orientation === g?.orientation),
          t = P(R.rotation, e);
        (t && ((O = t.face), R.setPose(t.rotation, performance.now())), $.invalidate());
      },
      frameUpdated(e, t) {
        if (w || g?.screenId !== e) return;
        let r = A(g);
        if (!t && te === r) return;
        let a = t ?? n.sources[e];
        if (!ce(a, g)) return;
        let o = i[e === 1 ? 0 : 1],
          { context: s, canvas: c } = o;
        if (!t && !x && performance.now() - C < 1500) {
          let e = document.createElement(`canvas`);
          e.width = e.height = 8;
          let t = e.getContext(`2d`, { willReadFrequently: !0 });
          if (
            t &&
            (t.drawImage(a, 0, 0, 8, 8),
            !t.getImageData(0, 0, 8, 8).data.some((e, t) => t % 4 != 3 && e > 3))
          )
            return;
        }
        (s.save(),
          (s.fillStyle = `#080a10`),
          s.fillRect(0, 0, c.width, c.height),
          s.translate(c.width / 2, c.height / 2));
        let l = e === 3;
        l && s.rotate(Math.PI / 2);
        let u = Math.min(c.width / (l ? a.height : a.width), c.height / (l ? a.width : a.height));
        (s.drawImage(a, (-a.width * u) / 2, (-a.height * u) / 2, a.width * u, a.height * u),
          s.restore(),
          (o.texture.needsUpdate = !0),
          (x = A(g)),
          t && (te = x),
          $.invalidate());
      },
      resize(e, t, n) {
        w ||
          ![e, t, n].every(Number.isFinite) ||
          e <= 0 ||
          t <= 0 ||
          ((E = { width: e, height: t, ratio: Math.min(2, Math.max(1, n)) }),
          Z(!0),
          $.invalidate());
      },
      screenPoint(e, t, n = !1) {
        return w || Q() || V !== null || k !== null || F !== null
          ? null
          : (X(), m?.screenPoint(e, t, u, g, x, n) ?? null);
      },
      cancelInput() {
        ((H = null), m?.cancelInput());
      },
      orbit(e, t) {
        w || ((H = null), R.orbit(e * E.width, t * E.height, performance.now()), $.invalidate());
      },
      beginHinge(e, t) {
        return w || !m || !g || (X(), !m.hingeLeafAt(e, t, u))
          ? !1
          : (I(),
            (k = null),
            (H = g.screenId === 1 && z > 20 ? `left` : `right`),
            R.setPose(R.rotation.clone(), performance.now(), !0),
            m.cancelInput(),
            !0);
      },
      resetPose() {
        if (w) return;
        ((H = null), (k = null), I());
        let e = L().find((e) => e.orientation === g?.orientation);
        (e &&
          e.orientation !== j &&
          n.onOrientationRequested &&
          ((j = e.orientation), (k = e.orientation), n.onOrientationRequested(e.orientation)),
          R.reset(e?.rotation ?? q, performance.now()),
          X(),
          Z(),
          $.invalidate());
      },
      dispose() {
        if ((I(), !w)) {
          ((w = !0),
            $.dispose(),
            ve.dispose(),
            n.canvas.removeEventListener(`webglcontextlost`, ye));
          for (let e of i) e.texture.dispose();
          ((s.environment = null), c.dispose(), a.dispose(), a.forceContextLoss());
        }
      },
    }
  );
}
export { F as createDuoViewer };
//# sourceMappingURL=duoViewer-BQGNcZqN.js.map
