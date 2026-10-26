import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { Or as i, t as a } from "./utils-CPoejuy5.js";
var o = n(),
  s = e(t(), 1),
  c = e(r(), 1);
function l(e) {
  let t = (0, o.c)(20),
    { text: n, collapsedText: r, className: l, collapsedClassName: d, expandLabel: f } = e,
    p = r === void 0 ? n : r,
    m = d === void 0 ? `line-clamp-3` : d,
    h = f === void 0 ? `Show full error` : f,
    g = (0, s.useId)(),
    [_, v] = (0, s.useState)(!1),
    y;
  t[0] !== p || t[1] !== n
    ? ((y =
        p !== n ||
        n.length > 180 ||
        n.includes(`
`)),
      (t[0] = p),
      (t[1] = n),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] === l ? (x = t[4]) : ((x = a(`min-w-0`, l)), (t[3] = l), (t[4] = x));
  let S = !_ && b ? m : null,
    C;
  t[5] === S ? (C = t[6]) : ((C = a(`whitespace-pre-wrap break-words`, S)), (t[5] = S), (t[6] = C));
  let w = _ ? n : p,
    T;
  t[7] !== C || t[8] !== w || t[9] !== g
    ? ((T = (0, c.jsx)(`div`, { id: g, className: C, children: w })),
      (t[7] = C),
      (t[8] = w),
      (t[9] = g),
      (t[10] = T))
    : (T = t[10]);
  let E;
  t[11] !== b || t[12] !== h || t[13] !== _ || t[14] !== g
    ? ((E = b
        ? (0, c.jsx)(i, {
            "aria-expanded": _,
            "aria-controls": g,
            tone: `muted`,
            className: `mt-1`,
            onClick: () => v(u),
            children: _ ? `Show less` : h,
          })
        : null),
      (t[11] = b),
      (t[12] = h),
      (t[13] = _),
      (t[14] = g),
      (t[15] = E))
    : (E = t[15]);
  let D;
  return (
    t[16] !== E || t[17] !== x || t[18] !== T
      ? ((D = (0, c.jsxs)(`div`, { className: x, children: [T, E] })),
        (t[16] = E),
        (t[17] = x),
        (t[18] = T),
        (t[19] = D))
      : (D = t[19]),
    D
  );
}
function u(e) {
  return !e;
}
export { l as t };
//# sourceMappingURL=ExpandableText-B3D1_vq-.js.map
