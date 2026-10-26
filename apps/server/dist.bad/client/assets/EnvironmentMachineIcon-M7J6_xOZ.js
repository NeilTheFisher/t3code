import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./cloud-H2DGA1t_.js";
import { t as i } from "./laptop-Db27nO_Y.js";
import { t as a } from "./monitor-DSwTf3-j.js";
import { t as o } from "./server-jaU8uTDW.js";
import { p as s } from "./Icons-Blot99re.js";
var c = t(),
  l = e(n(), 1);
function u(e) {
  let t = (0, c.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, l.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `24`,
          height: `24`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.75`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function d(e) {
  let t = (0, c.c)(4),
    n,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, l.jsx)(`rect`, { width: `18`, height: `12`, x: `3`, y: `6`, rx: `2.5` })),
      (r = (0, l.jsx)(`circle`, {
        cx: `7.5`,
        cy: `12`,
        r: `1`,
        fill: `currentColor`,
        stroke: `none`,
      })),
      (t[0] = n),
      (t[1] = r))
    : ((n = t[0]), (r = t[1]));
  let i;
  return (
    t[2] === e
      ? (i = t[3])
      : ((i = (0, l.jsxs)(u, { ...e, children: [n, r] })), (t[2] = e), (t[3] = i)),
    i
  );
}
function f(e) {
  let t = (0, c.c)(4),
    n,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, l.jsx)(`rect`, { width: `18`, height: `14`, x: `3`, y: `5`, rx: `2` })),
      (r = (0, l.jsx)(`path`, { d: `M7 15h.01M11 15h.01M15 15h.01` })),
      (t[0] = n),
      (t[1] = r))
    : ((n = t[0]), (r = t[1]));
  let i;
  return (
    t[2] === e
      ? (i = t[3])
      : ((i = (0, l.jsxs)(u, { ...e, children: [n, r] })), (t[2] = e), (t[3] = i)),
    i
  );
}
var p = { server: o, cloud: r, linux: s, desktop: a, laptop: i, "mac-mini": d, "mac-studio": f },
  m = {
    server: `Server`,
    cloud: `Cloud VM`,
    linux: `Linux/WSL`,
    desktop: `Desktop`,
    laptop: `Laptop`,
    "mac-mini": `Mini PC`,
    "mac-studio": `Workstation`,
  };
function h(e) {
  return p[e];
}
function g(e) {
  let t = (0, c.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ kind: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = p[n],
    a;
  return (
    t[3] !== i || t[4] !== r
      ? ((a = (0, l.jsx)(i, { ...r })), (t[3] = i), (t[4] = r), (t[5] = a))
      : (a = t[5]),
    a
  );
}
export { g as n, h as r, m as t };
//# sourceMappingURL=EnvironmentMachineIcon-M7J6_xOZ.js.map
