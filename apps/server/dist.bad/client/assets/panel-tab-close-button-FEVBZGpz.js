import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./x-Blp0Exqg.js";
import { Bn as i, Vn as a, Wn as o } from "./utils-CPoejuy5.js";
function s(e) {
  return /^term(?:inal)?-(\d+)(?:-[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12})?$/i.exec(e)?.[1];
}
function c(e) {
  let t = s(e);
  return t ? `Terminal ${t}` : e;
}
function l(e, t) {
  let n = t?.label?.trim();
  return n && n.length > 0 ? n : c(e);
}
function u(e, t) {
  let n = new Set(e.map(s)),
    r = 1;
  for (; n.has(String(r));) r += 1;
  return `term-${r}${t === void 0 ? `` : `-${t}`}`;
}
var d = t(),
  f = e(n(), 1);
function p(e) {
  let t = (0, d.c)(14),
    { children: n, label: s, onClick: c, tooltip: l } = e,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = (0, f.jsx)(`span`, {
        className: `relative flex size-3 items-center justify-center group-hover/tab:hidden group-focus-visible/close:hidden`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = u));
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, f.jsx)(r, {
        className: `hidden size-3 group-hover/tab:block group-focus-visible/close:block`,
      })),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== s || t[4] !== c || t[5] !== u
    ? ((m = (0, f.jsxs)(`button`, {
        type: `button`,
        className: `cursor-pointer group/close relative flex size-4 shrink-0 items-center justify-center rounded-sm hover:bg-muted`,
        "aria-label": s,
        onClick: c,
        children: [u, p],
      })),
      (t[3] = s),
      (t[4] = c),
      (t[5] = u),
      (t[6] = m))
    : (m = t[6]);
  let h = m;
  if (!l) return h;
  let g;
  t[7] === h ? (g = t[8]) : ((g = (0, f.jsx)(o, { render: h })), (t[7] = h), (t[8] = g));
  let _;
  t[9] === l ? (_ = t[10]) : ((_ = (0, f.jsx)(a, { children: l })), (t[9] = l), (t[10] = _));
  let v;
  return (
    t[11] !== g || t[12] !== _
      ? ((v = (0, f.jsxs)(i, { children: [g, _] })), (t[11] = g), (t[12] = _), (t[13] = v))
      : (v = t[13]),
    v
  );
}
export { l as i, c as n, u as r, p as t };
//# sourceMappingURL=panel-tab-close-button-FEVBZGpz.js.map
