import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { mw as r, t as i } from "./utils-CPoejuy5.js";
var a = t(),
  o = e(n(), 1),
  s = r(`bg-muted-foreground/15 motion-safe:animate-skeleton`, {
    variants: { shape: { block: `rounded-sm`, card: `rounded-lg`, pill: `rounded-full` } },
    defaultVariants: { shape: `block` },
  });
function c(e) {
  let t = (0, a.c)(10),
    n,
    r,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (c = t[3]))
    : (({ className: n, shape: c, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = c));
  let l;
  t[4] !== n || t[5] !== c
    ? ((l = i(s({ shape: c }), n)), (t[4] = n), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== r || t[8] !== l
      ? ((u = (0, o.jsx)(`div`, { className: l, "data-slot": `skeleton`, ...r })),
        (t[7] = r),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
export { c as t };
//# sourceMappingURL=skeleton-BRqz2fzS.js.map
