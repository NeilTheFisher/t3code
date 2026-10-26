import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Dc as t,
  JC as n,
  Lf as r,
  U_ as i,
  cp as a,
  jc as o,
  np as s,
  qf as c,
  tw as l,
  yu as u,
  zf as d,
} from "./utils-CPoejuy5.js";
import { t as f } from "./runtime-CY2dlMEg.js";
var p = e(),
  m = (e) =>
    e.join(`
`);
function h(e, t) {
  return r((n) =>
    d((e) =>
      n === ``
        ? []
        : n
            .split(`
`)
            .map((n) => e(t(n))),
    ).pipe(c(`${e}:${n}`)),
  );
}
var g = u(f),
  _ = h(`web-environment-session-states`, g.sessionStateAtom),
  v = d(s());
function y(e, t) {
  let n = (0, p.c)(5),
    r;
  n[0] === e ? (r = n[1]) : ((r = e === null ? v : g.sessionStateAtom(e)), (n[0] = e), (n[1] = r));
  let i = o(r),
    a;
  return (
    n[2] !== i || n[3] !== t ? ((a = b(i, t)), (n[2] = i), (n[3] = t), (n[4] = a)) : (a = n[4]), a
  );
}
function b(e, t) {
  let r = n(a(e));
  return e._tag !== `Failure` && r !== null && i(r, t);
}
var x = r((e) => {
  let [t, n = ``] = e.split(/\n(.*)/s),
    r =
      n === ``
        ? []
        : n.split(`
`),
    i = _(n);
  return d((e) => {
    let n = e(i);
    return new Set(r.filter((e, r) => b(n[r], t)));
  }).pipe(c(`web-environments-with-scope:${e}`));
});
function S(e, t) {
  let n = (0, p.c)(4),
    r;
  n[0] === e ? (r = n[1]) : ((r = m(e.map(C))), (n[0] = e), (n[1] = r));
  let i = `${t}\n${r}`,
    a;
  return (n[2] === i ? (a = n[3]) : ((a = x(i)), (n[2] = i), (n[3] = a)), o(a));
}
function C(e) {
  let { environmentId: t } = e;
  return t;
}
function w(e, n) {
  return b(t.get(g.sessionStateAtom(e)), n);
}
var T = d(l()).pipe(c(`web-prepared-connection:empty`));
function E(e) {
  let t = (0, p.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? T : g.preparedConnectionValueAtom(e)), (t[0] = e), (t[1] = n)),
    o(n)
  );
}
function D(e) {
  return n(t.get(g.preparedConnectionValueAtom(e)));
}
function O(e) {
  let t = (0, p.c)(8),
    r;
  t[0] === e ? (r = t[1]) : ((r = g.sessionStateAtom(e)), (t[0] = e), (t[1] = r));
  let i = o(r),
    s;
  t[2] === i ? (s = t[3]) : ((s = n(a(i))), (t[2] = i), (t[3] = s));
  let c = i._tag === `Failure`,
    l;
  return (
    t[4] !== i.waiting || t[5] !== s || t[6] !== c
      ? ((l = { data: s, hasError: c, isPending: i.waiting }),
        (t[4] = i.waiting),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
export { y as a, E as c, D as i, h as l, _ as n, O as o, w as r, S as s, g as t, m as u };
//# sourceMappingURL=session-0UrRHIau.js.map
