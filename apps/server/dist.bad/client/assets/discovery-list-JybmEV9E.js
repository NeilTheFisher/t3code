import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
var r = t(),
  i = e(n(), 1);
function a(e) {
  let t = (0, r.c)(2),
    { children: n } = e,
    a;
  return (
    t[0] === n
      ? (a = t[1])
      : ((a = (0, i.jsx)(`div`, {
          className: `flex flex-col divide-y divide-border/60 overflow-hidden rounded-xl border border-border/70 bg-background`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = a)),
    a
  );
}
function o(e) {
  let t = (0, r.c)(18),
    n,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]))
    : (({ icon: o, title: c, description: a, action: n, ...s } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c));
  let l;
  t[6] === c
    ? (l = t[7])
    : ((l = (0, i.jsx)(`span`, {
        className: `truncate text-sm font-medium text-foreground`,
        children: c,
      })),
      (t[6] = c),
      (t[7] = l));
  let u;
  t[8] === a
    ? (u = t[9])
    : ((u = (0, i.jsx)(`span`, {
        className: `truncate text-xs text-muted-foreground`,
        children: a,
      })),
      (t[8] = a),
      (t[9] = u));
  let d;
  t[10] !== l || t[11] !== u
    ? ((d = (0, i.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col`, children: [l, u] })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== n || t[14] !== o || t[15] !== s || t[16] !== d
      ? ((f = (0, i.jsxs)(`button`, {
          type: `button`,
          ...s,
          className: `group flex w-full items-center gap-3 px-3 py-3 text-left hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-64`,
          children: [o, d, n],
        })),
        (t[13] = n),
        (t[14] = o),
        (t[15] = s),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
export { o as n, a as t };
//# sourceMappingURL=discovery-list-JybmEV9E.js.map
