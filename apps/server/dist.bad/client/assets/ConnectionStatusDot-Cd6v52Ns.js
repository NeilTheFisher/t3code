import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { Bn as r, Vn as i, Wn as a, t as o } from "./utils-CPoejuy5.js";
var s = t(),
  c = e(n(), 1);
function l(e) {
  switch (e) {
    case `connected`:
      return `bg-success`;
    case `connecting`:
    case `reconnecting`:
      return `bg-warning`;
    case `error`:
      return `bg-destructive`;
    default:
      return `bg-muted-foreground/40`;
  }
}
function u(e) {
  return e === `connecting` || e === `reconnecting` ? `bg-warning/60 duration-2000` : null;
}
function d(e) {
  let t = (0, s.c)(21),
    { tooltipText: n, dotClassName: l, pingClassName: u } = e,
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u
        ? (0, c.jsx)(`span`, {
            className: o(
              `absolute inline-flex h-full w-full motion-safe:animate-status-ping rounded-full`,
              u,
            ),
          })
        : null),
      (t[0] = u),
      (t[1] = d));
  let f;
  t[2] === l
    ? (f = t[3])
    : ((f = o(`relative inline-flex size-2 rounded-full`, l)), (t[2] = l), (t[3] = f));
  let p;
  t[4] === f ? (p = t[5]) : ((p = (0, c.jsx)(`span`, { className: f })), (t[4] = f), (t[5] = p));
  let m;
  t[6] !== d || t[7] !== p
    ? ((m = (0, c.jsxs)(c.Fragment, { children: [d, p] })), (t[6] = d), (t[7] = p), (t[8] = m))
    : (m = t[8]);
  let h = m;
  if (!n) {
    let e;
    return (
      t[9] === h
        ? (e = t[10])
        : ((e = (0, c.jsx)(`span`, {
            className: `relative flex size-3 shrink-0 items-center justify-center`,
            children: h,
          })),
          (t[9] = h),
          (t[10] = e)),
      e
    );
  }
  let g;
  t[11] !== h || t[12] !== n
    ? ((g = (0, c.jsx)(`button`, {
        type: `button`,
        "aria-label": n,
        className: `relative flex size-3 shrink-0 cursor-help items-center justify-center rounded-full outline-hidden`,
        children: h,
      })),
      (t[11] = h),
      (t[12] = n),
      (t[13] = g))
    : (g = t[13]);
  let _ = g,
    v;
  t[14] === _ ? (v = t[15]) : ((v = (0, c.jsx)(a, { render: _ })), (t[14] = _), (t[15] = v));
  let y;
  t[16] === n
    ? (y = t[17])
    : ((y = (0, c.jsx)(i, { side: `top`, className: `whitespace-pre-wrap`, children: n })),
      (t[16] = n),
      (t[17] = y));
  let b;
  return (
    t[18] !== v || t[19] !== y
      ? ((b = (0, c.jsxs)(r, { children: [v, y] })), (t[18] = v), (t[19] = y), (t[20] = b))
      : (b = t[20]),
    b
  );
}
export { l as n, u as r, d as t };
//# sourceMappingURL=ConnectionStatusDot-Cd6v52Ns.js.map
