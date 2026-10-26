import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { Bn as i, Vn as a, Wn as o, t as s } from "./utils-CPoejuy5.js";
var c = n(),
  l = e(t(), 1),
  u = e(r(), 1),
  d = `abcdefghjkmnpqrstuvwxyz23456789`;
function f(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n += 1) ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  let n = () => (
    (t = Math.imul(t ^ (t >>> 13), 2246822507)),
    (t = Math.imul(t ^ (t >>> 16), 3266489909)),
    d[Math.abs(t) % 31] ?? `x`
  );
  return Array.from(e, (e) => (e === `@` || e === `.` || e === `-` || e === `_` ? e : n())).join(
    ``,
  );
}
function p(e) {
  let t = (0, c.c)(16),
    [n, r] = (0, l.useState)(!1),
    d,
    p;
  t[0] === e.value
    ? ((d = t[1]), (p = t[2]))
    : ((p = e.value?.trim()), (d = p ? f(p) : ``), (t[0] = e.value), (t[1] = d), (t[2] = p));
  let h = d;
  if (!p) return null;
  let g = n ? `text-muted-foreground` : `select-none text-muted-foreground blur-xs`,
    _;
  t[3] !== e.className || t[4] !== g
    ? ((_ = s(
        `min-w-0 cursor-pointer rounded-sm font-mono text-2xs leading-normal transition hover:text-foreground`,
        g,
        e.className,
      )),
      (t[3] = e.className),
      (t[4] = g),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = () => r(m)), (t[6] = v)) : (v = t[6]);
  let y = n ? p : h,
    b;
  t[7] !== e.ariaLabel || t[8] !== _ || t[9] !== y
    ? ((b = (0, u.jsx)(o, {
        render: (0, u.jsx)(`button`, {
          type: `button`,
          className: _,
          onClick: v,
          "aria-label": e.ariaLabel,
          children: y,
        }),
      })),
      (t[7] = e.ariaLabel),
      (t[8] = _),
      (t[9] = y),
      (t[10] = b))
    : (b = t[10]);
  let x = n ? e.hideTooltip : e.revealTooltip,
    S;
  t[11] === x
    ? (S = t[12])
    : ((S = (0, u.jsx)(a, { side: `top`, children: x })), (t[11] = x), (t[12] = S));
  let C;
  return (
    t[13] !== b || t[14] !== S
      ? ((C = (0, u.jsxs)(i, { children: [b, S] })), (t[13] = b), (t[14] = S), (t[15] = C))
      : (C = t[15]),
    C
  );
}
function m(e) {
  return !e;
}
export { f as n, p as t };
//# sourceMappingURL=RedactedSensitiveText-24HhEgVA.js.map
