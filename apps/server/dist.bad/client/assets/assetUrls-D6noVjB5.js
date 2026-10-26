import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Gf as t,
  Gp as n,
  Lf as r,
  Ry as i,
  Uf as a,
  Vy as o,
  Wy as s,
  ap as c,
  ip as l,
  iu as u,
  jc as d,
  tb as f,
  yy as p,
} from "./utils-CPoejuy5.js";
import { n as m } from "./filesystem-DxEoLhpA.js";
import { c as h } from "./session-0UrRHIau.js";
import { c as g, d as _, f as v, t as y, u as b } from "./assets-C17tnlzf.js";
import { t as x } from "./use-atom-query-runner-BjEAL53C.js";
var S = e(),
  C = f(s([p, n, i(o)])),
  w = (e) => !l(e) && !e.waiting;
function T(e) {
  let n = new WeakMap(),
    i = r((r) => {
      let [i, o, s] = C(JSON.parse(r)),
        c = JSON.stringify([i, o]),
        l = e({ environmentId: i, input: { resource: o } });
      return t(
        l,
        (e) => {
          let t = n.get(e.registry);
          t === void 0 && ((t = new Map()), n.set(e.registry, t));
          let r = !t.has(c),
            i = t.get(c) !== s,
            a = e.once(l);
          return (
            i && (r || w(a)) && ((i = !1), t.set(c, s), w(a) && e.refresh(l)),
            e.subscribe(l, (n) => {
              (e.setSelf(n), i && w(n) && ((i = !1), t.set(c, s), e.refresh(l)));
            }),
            e.once(l)
          );
        },
        { initialValueTarget: l },
      ).pipe(a(0));
    });
  return (e) => i(JSON.stringify([e.environmentId, e.input.resource, e.revision]));
}
var E = T(y.createUrl);
function D(e, t, n) {
  let r = (0, S.c)(16),
    i = m(e),
    a;
  r[0] !== t || r[1] !== i ? ((a = _(t, i)), (r[0] = t), (r[1] = i), (r[2] = a)) : (a = r[2]);
  let o = a,
    s = h(e),
    c;
  r[3] !== o || r[4] !== e || r[5] !== t || r[6] !== n
    ? ((c =
        o !== null || e === null || t === null
          ? g
          : n === void 0
            ? y.createUrl({ environmentId: e, input: { resource: t } })
            : E({ environmentId: e, input: { resource: t }, revision: n })),
      (r[3] = o),
      (r[4] = e),
      (r[5] = t),
      (r[6] = n),
      (r[7] = c))
    : (c = r[7]);
  let l = d(c);
  if (o !== null) return o;
  let u = s._tag === `Some` ? s.value.httpBaseUrl : null,
    f;
  r[8] !== l || r[9] !== u ? ((f = b(l, u)), (r[8] = l), (r[9] = u), (r[10] = f)) : (f = r[10]);
  let p;
  r[11] === l.waiting
    ? (p = r[12])
    : ((p = l.waiting ? { waiting: !0 } : {}), (r[11] = l.waiting), (r[12] = p));
  let v;
  return (
    r[13] !== f || r[14] !== p
      ? ((v = { ...f, ...p }), (r[13] = f), (r[14] = p), (r[15] = v))
      : (v = r[15]),
    v
  );
}
function O(e, t) {
  let n = (0, S.c)(6),
    r = h(e),
    i = r._tag === `Some` ? r.value.httpBaseUrl : null,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { reportFailure: !1, refresh: !0 }), (n[0] = a))
    : (a = n[0]);
  let o = x(y.createUrl, a),
    s;
  return (
    n[1] !== e || n[2] !== i || n[3] !== o || n[4] !== t
      ? ((s = async () => {
          if (e === null || t === null || i === null) return null;
          let n = await o({ environmentId: e, input: { resource: t } });
          if (n._tag === `Failure`) throw u(n);
          return v(i, n.value.relativeUrl);
        }),
        (n[1] = e),
        (n[2] = i),
        (n[3] = o),
        (n[4] = t),
        (n[5] = s))
      : (s = n[5]),
    s
  );
}
function k(e, t) {
  let n = (0, S.c)(13),
    r = h(e),
    { canReadFiles: i } = m(e),
    a;
  n[0] !== i || n[1] !== t
    ? ((a = i ? t : t.filter(j)), (n[0] = i), (n[1] = t), (n[2] = a))
    : (a = n[2]);
  let o = a,
    s;
  n[3] !== o || n[4] !== e
    ? ((s = y.createUrls({ environmentId: e, resources: o })), (n[3] = o), (n[4] = e), (n[5] = s))
    : (s = n[5]);
  let l = d(s);
  if (r._tag === `None`) {
    let e;
    return (n[6] === t ? (e = n[7]) : ((e = t.map(A)), (n[6] = t), (n[7] = e)), e);
  }
  let u;
  if (n[8] !== i || n[9] !== r.value || n[10] !== t || n[11] !== l) {
    u = [];
    let e = 0;
    for (let n of t) {
      if (!i && M(n)) {
        u.push(null);
        continue;
      }
      let t = l[e];
      ((e += 1), u.push(t && c(t) ? v(r.value.httpBaseUrl, t.value.relativeUrl) : null));
    }
    ((n[8] = i), (n[9] = r.value), (n[10] = t), (n[11] = l), (n[12] = u));
  } else u = n[12];
  return u;
}
function A() {
  return null;
}
function j(e) {
  return !M(e);
}
function M(e) {
  return (
    e._tag === `workspace-file` || e._tag === `media-file` || e._tag === `draft-workspace-file`
  );
}
export { D as n, k as r, O as t };
//# sourceMappingURL=assetUrls-D6noVjB5.js.map
