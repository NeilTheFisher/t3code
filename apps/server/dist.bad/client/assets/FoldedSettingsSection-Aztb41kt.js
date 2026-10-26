import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i } from "./search-BrluOr7L.js";
import { t as a } from "./utils-CPoejuy5.js";
import { n as o, r as s, t as c } from "./collapsible-Dp2CGco9.js";
import { d as l, p as u, u as d } from "./settingsLayout-2i87rQY9.js";
var f = n(),
  p = e(t(), 1),
  m = e(r(), 1);
function h(e) {
  let t = (0, f.c)(50),
    { id: n, title: r, summary: h, control: g, headerPlacement: _, children: v } = e,
    y = _ === void 0 ? `inside` : _,
    [b, x] = (0, p.useState)(!1),
    S = l(),
    C = d(n),
    [w, T] = (0, p.useState)(null);
  if ((S === n && w !== n && (T(n), b || x(!0)), y === `outside`)) {
    let e = b && `rotate-90`,
      l;
    t[0] === e
      ? (l = t[1])
      : ((l = a(
          `size-4 shrink-0 transition-transform duration-150 motion-reduce:transition-none`,
          e,
        )),
        (t[0] = e),
        (t[1] = l));
    let d;
    t[2] === l
      ? (d = t[3])
      : ((d = (0, m.jsx)(i, { "aria-hidden": !0, className: l })), (t[2] = l), (t[3] = d));
    let f;
    t[4] !== d || t[5] !== r
      ? ((f = (0, m.jsx)(`h2`, {
          children: (0, m.jsxs)(s, {
            className: `flex min-h-7 items-center gap-2 rounded-md text-sm font-normal text-foreground/70 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
            children: [r, d],
          }),
        })),
        (t[4] = d),
        (t[5] = r),
        (t[6] = f))
      : (f = t[6]);
    let p;
    t[7] !== g || t[8] !== f
      ? ((p = (0, m.jsxs)(`div`, {
          "data-settings-scroll-target": !0,
          className: `flex min-h-7 items-start justify-between gap-4 px-3 sm:px-4`,
          children: [f, g],
        })),
        (t[7] = g),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]);
    let h;
    t[10] === v
      ? (h = t[11])
      : ((h = (0, m.jsx)(o, { children: (0, m.jsx)(u, { children: v }) })),
        (t[10] = v),
        (t[11] = h));
    let _;
    t[12] !== p || t[13] !== h
      ? ((_ = (0, m.jsxs)(`div`, { className: `space-y-2.5`, children: [p, h] })),
        (t[12] = p),
        (t[13] = h),
        (t[14] = _))
      : (_ = t[14]);
    let y;
    t[15] !== b || t[16] !== _
      ? ((y = (0, m.jsx)(c, { open: b, onOpenChange: x, children: _ })),
        (t[15] = b),
        (t[16] = _),
        (t[17] = y))
      : (y = t[17]);
    let S;
    return (
      t[18] !== n || t[19] !== y || t[20] !== C
        ? ((S = (0, m.jsx)(`section`, {
            id: n,
            ref: C,
            tabIndex: -1,
            className: `outline-none`,
            children: y,
          })),
          (t[18] = n),
          (t[19] = y),
          (t[20] = C),
          (t[21] = S))
        : (S = t[21]),
      S
    );
  }
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, m.jsx)(u, { divided: !1 })), (t[22] = E))
    : (E = t[22]);
  let D = b && `rotate-90`,
    O;
  t[23] === D
    ? (O = t[24])
    : ((O = a(
        `size-4 shrink-0 text-muted-foreground transition-transform duration-150 motion-reduce:transition-none`,
        D,
      )),
      (t[23] = D),
      (t[24] = O));
  let k;
  t[25] === O
    ? (k = t[26])
    : ((k = (0, m.jsx)(i, { "aria-hidden": !0, className: O })), (t[25] = O), (t[26] = k));
  let A;
  t[27] === r
    ? (A = t[28])
    : ((A = (0, m.jsx)(`span`, { className: `shrink-0 text-sm font-medium`, children: r })),
      (t[27] = r),
      (t[28] = A));
  let j;
  t[29] === h
    ? (j = t[30])
    : ((j = h
        ? (0, m.jsx)(`span`, {
            className: `min-w-0 truncate text-xs text-muted-foreground`,
            children: h,
          })
        : null),
      (t[29] = h),
      (t[30] = j));
  let M;
  t[31] !== k || t[32] !== A || t[33] !== j
    ? ((M = (0, m.jsxs)(s, {
        className: `flex min-h-11 min-w-0 flex-1 items-center gap-2 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring rounded-md`,
        children: [k, A, j],
      })),
      (t[31] = k),
      (t[32] = A),
      (t[33] = j),
      (t[34] = M))
    : (M = t[34]);
  let N;
  t[35] === g
    ? (N = t[36])
    : ((N = g ? (0, m.jsx)(`div`, { className: `flex shrink-0 items-center`, children: g }) : null),
      (t[35] = g),
      (t[36] = N));
  let P;
  t[37] !== M || t[38] !== N
    ? ((P = (0, m.jsxs)(`div`, {
        className: `flex items-center gap-4 px-3 sm:px-4`,
        children: [M, N],
      })),
      (t[37] = M),
      (t[38] = N),
      (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] === v
    ? (F = t[41])
    : ((F = (0, m.jsx)(o, {
        children: (0, m.jsx)(`div`, {
          className: `border-t border-border/50 [&>*+*]:border-t [&>*+*]:border-border/50`,
          children: v,
        }),
      })),
      (t[40] = v),
      (t[41] = F));
  let I;
  t[42] !== b || t[43] !== P || t[44] !== F
    ? ((I = (0, m.jsxs)(c, { open: b, onOpenChange: x, render: E, children: [P, F] })),
      (t[42] = b),
      (t[43] = P),
      (t[44] = F),
      (t[45] = I))
    : (I = t[45]);
  let L;
  return (
    t[46] !== n || t[47] !== I || t[48] !== C
      ? ((L = (0, m.jsx)(`section`, {
          id: n,
          ref: C,
          tabIndex: -1,
          className: `outline-none`,
          children: I,
        })),
        (t[46] = n),
        (t[47] = I),
        (t[48] = C),
        (t[49] = L))
      : (L = t[49]),
    L
  );
}
export { h as t };
//# sourceMappingURL=FoldedSettingsSection-Aztb41kt.js.map
