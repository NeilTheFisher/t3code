import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./utils-CPoejuy5.js";
var i = t(),
  a = e(n(), 1);
function o(e) {
  let t = (0, i.c)(8),
    n,
    o;
  t[0] === e
    ? ((n = t[1]), (o = t[2]))
    : (({ className: n, ...o } = e), (t[0] = e), (t[1] = n), (t[2] = o));
  let s;
  t[3] === n
    ? (s = t[4])
    : ((s = r(
        `pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded bg-muted px-1 font-medium font-sans text-muted-foreground text-xs [&_svg:not([class*='size-'])]:size-3`,
        n,
      )),
      (t[3] = n),
      (t[4] = s));
  let c;
  return (
    t[5] !== o || t[6] !== s
      ? ((c = (0, a.jsx)(`kbd`, { className: s, "data-slot": `kbd`, ...o })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function s(e) {
  let t = (0, i.c)(8),
    n,
    o;
  t[0] === e
    ? ((n = t[1]), (o = t[2]))
    : (({ className: n, ...o } = e), (t[0] = e), (t[1] = n), (t[2] = o));
  let s;
  t[3] === n ? (s = t[4]) : ((s = r(`inline-flex items-center gap-1`, n)), (t[3] = n), (t[4] = s));
  let c;
  return (
    t[5] !== o || t[6] !== s
      ? ((c = (0, a.jsx)(`kbd`, { className: s, "data-slot": `kbd-group`, ...o })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
export { s as n, o as t };
//# sourceMappingURL=kbd-C7it_Fud.js.map
