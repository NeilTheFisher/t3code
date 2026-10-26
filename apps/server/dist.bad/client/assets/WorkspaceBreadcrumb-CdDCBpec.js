import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./utils-CPoejuy5.js";
var i = t(),
  a = e(n(), 1);
function o(e) {
  let t = (0, i.c)(8),
    { ariaLabel: n, children: o, className: s } = e,
    c;
  t[0] === s ? (c = t[1]) : ((c = r(`min-w-0`, s)), (t[0] = s), (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (0, a.jsx)(`ol`, {
        className: `m-0 flex min-w-0 list-none items-center gap-2 p-0 text-sm sm:gap-3`,
        children: o,
      })),
      (t[2] = o),
      (t[3] = l));
  let u;
  return (
    t[4] !== n || t[5] !== c || t[6] !== l
      ? ((u = (0, a.jsx)(`nav`, { "aria-label": n, className: c, children: l })),
        (t[4] = n),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function s(e) {
  let t = (0, i.c)(10),
    n,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (o = t[2]), (s = t[3]))
    : (({ children: n, className: o, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = o), (t[3] = s));
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = r(
        `block min-w-0 truncate [text-box:trim-both_cap_alphabetic] supports-[text-box:trim-both_cap_alphabetic]:py-1.5`,
        o,
      )),
      (t[4] = o),
      (t[5] = c));
  let l;
  return (
    t[6] !== n || t[7] !== s || t[8] !== c
      ? ((l = (0, a.jsx)(`span`, {
          "data-slot": `workspace-breadcrumb-text`,
          className: c,
          ...s,
          children: n,
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function c(e) {
  let t = (0, i.c)(7),
    { children: n, className: o, current: s } = e,
    c = s !== void 0 && s,
    l = c ? `page` : void 0,
    u = c ? `text-foreground` : `shrink-0 text-muted-foreground`,
    d;
  t[0] !== o || t[1] !== u
    ? ((d = r(`flex min-w-0 items-center font-medium`, u, o)), (t[0] = o), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  return (
    t[3] !== n || t[4] !== l || t[5] !== d
      ? ((f = (0, a.jsx)(`li`, { "aria-current": l, className: d, children: n })),
        (t[3] = n),
        (t[4] = l),
        (t[5] = d),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function l(e) {
  let t = (0, i.c)(5),
    { className: n, children: o } = e,
    s = o === void 0 ? `/` : o,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c = r(`flex shrink-0 items-center text-icon-muted`, n)), (t[0] = n), (t[1] = c));
  let l;
  return (
    t[2] !== s || t[3] !== c
      ? ((l = (0, a.jsx)(`li`, { "aria-hidden": `true`, className: c, children: s })),
        (t[2] = s),
        (t[3] = c),
        (t[4] = l))
      : (l = t[4]),
    l
  );
}
export { s as i, c as n, l as r, o as t };
//# sourceMappingURL=WorkspaceBreadcrumb-CdDCBpec.js.map
