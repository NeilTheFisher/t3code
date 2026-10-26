import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { N as r, P as i } from "./runtime-CY2dlMEg.js";
import { t as a } from "./standalone-page-CmUrtGk_.js";
import { ga as o, ya as s } from "./main-BZa0O6xN.js";
var c = t(),
  l = e(n(), 1);
function u(e) {
  let t = (0, c.c)(6),
    { children: n } = e,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = s(i)), (t[0] = u)) : (u = t[0]);
  let d = u,
    f,
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = d
        ? (0, l.jsx)(`div`, {
            className: `absolute inset-0`,
            "aria-hidden": !0,
            children: (0, l.jsx)(o, { variant: d }),
          })
        : (0, l.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(136,204,255,0.5),transparent_38%),linear-gradient(135deg,#2468df,#172f82)]`,
          })),
      (p = (0, l.jsx)(`div`, {
        className: `absolute inset-0 bg-[linear-gradient(to_bottom,transparent_20%,rgba(7,18,55,0.46)_100%)]`,
      })),
      (t[1] = f),
      (t[2] = p))
    : ((f = t[1]), (p = t[2]));
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, l.jsxs)(`header`, {
        className: `relative h-24 overflow-hidden bg-[linear-gradient(135deg,#1e61de,#17348e)] text-white`,
        children: [
          f,
          p,
          (0, l.jsx)(`div`, {
            className: `relative h-full p-5 sm:p-6`,
            children: (0, l.jsx)(`p`, {
              className: `text-3xs font-semibold tracking-widest text-white/80 uppercase`,
              children: r,
            }),
          }),
        ],
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  return (
    t[4] === n
      ? (h = t[5])
      : ((h = (0, l.jsx)(a, { tone: `brand`, masthead: m, children: n })), (t[4] = n), (t[5] = h)),
    h
  );
}
export { u as t };
//# sourceMappingURL=AuthSurfaceShell-o7M6DX0Z.js.map
