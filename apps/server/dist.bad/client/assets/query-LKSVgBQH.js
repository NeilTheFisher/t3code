import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import {
  Ac as r,
  JC as i,
  MS as a,
  Mc as o,
  cp as s,
  jc as c,
  np as l,
  qf as u,
  zS as d,
  zf as f,
} from "./utils-CPoejuy5.js";
var p = n(),
  m = e(t(), 1),
  h = f(l(!1)).pipe(u(`web-environment-query:empty`));
function g(e) {
  let t = d(e);
  return t instanceof Error && t.message.trim().length > 0
    ? t.message
    : `The environment request failed.`;
}
function _(e) {
  return e._tag === `Success`
    ? e.timestamp
    : e._tag === `Failure`
      ? (i(e.previousSuccess)?.timestamp ?? 0)
      : 0;
}
function v(e) {
  let t = (0, p.c)(18),
    n = e ?? h,
    o = c(n),
    l = r(n),
    u;
  t[0] === o ? (u = t[1]) : ((u = i(s(o))), (t[0] = o), (t[1] = u));
  let d;
  t[2] === o ? (d = t[3]) : ((d = _(o)), (t[2] = o), (t[3] = d));
  let f;
  t[4] !== o._tag || t[5] !== o.cause
    ? ((f = o._tag === `Failure` ? g(o.cause) : null),
      (t[4] = o._tag),
      (t[5] = o.cause),
      (t[6] = f))
    : (f = t[6]);
  let m;
  t[7] !== o._tag || t[8] !== o.cause
    ? ((m = o._tag === `Failure` ? i(a(o.cause)) : null),
      (t[7] = o._tag),
      (t[8] = o.cause),
      (t[9] = m))
    : (m = t[9]);
  let v = e !== null && o.waiting,
    y = o._tag === `Success`,
    b;
  return (
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== f ||
    t[14] !== m ||
    t[15] !== v ||
    t[16] !== y
      ? ((b = {
          data: u,
          dataUpdatedAt: d,
          error: f,
          failure: m,
          isPending: v,
          isSuccess: y,
          refresh: l,
        }),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f),
        (t[14] = m),
        (t[15] = v),
        (t[16] = y),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
function y(e, t) {
  return c(e ?? h, t);
}
var b = new WeakMap();
function x(e, t) {
  let n = b.get(e);
  n === void 0 && ((n = new WeakMap()), b.set(e, n));
  let r = n.get(t);
  return (r === void 0 && ((r = f((n) => _(n(e)) >= _(n(t)))), n.set(t, r)), r);
}
function S(e, t) {
  let n = (0, p.c)(3),
    r = e ?? h,
    i = t ?? h,
    a;
  return (
    n[0] !== r || n[1] !== i ? ((a = x(r, i)), (n[0] = r), (n[1] = i), (n[2] = a)) : (a = n[2]),
    c(a)
  );
}
function C(e) {
  let t = (0, p.c)(7),
    n = (0, m.useContext)(o),
    i = e ?? h,
    a = r(i),
    s;
  t[0] !== e || t[1] !== n || t[2] !== i
    ? ((s = () => e !== null && n.get(i).waiting), (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = { refresh: a, isPending: s }), (t[4] = a), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
export { y as a, C as i, v as n, S as r, g as t };
//# sourceMappingURL=query-LKSVgBQH.js.map
