import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./utils-CPoejuy5.js";
var i = t(),
  a = e(n(), 1),
  o = { readable: `max-w-4xl`, wide: `max-w-5xl`, expanded: `max-w-6xl` };
function s(e) {
  let t = (0, i.c)(10),
    n,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (s = t[2]), (c = t[3]))
    : (({ width: c, className: n, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = s), (t[3] = c));
  let l = o[c === void 0 ? `readable` : c],
    u;
  t[4] !== n || t[5] !== l
    ? ((u = r(`mx-auto flex w-full flex-col gap-6 px-5 pt-6 pb-12 sm:px-6`, l, n)),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== s || t[8] !== u
      ? ((d = (0, a.jsx)(`div`, { className: u, ...s })), (t[7] = s), (t[8] = u), (t[9] = d))
      : (d = t[9]),
    d
  );
}
export { s as t };
//# sourceMappingURL=WorkspacePageContainer-D3An2RdA.js.map
