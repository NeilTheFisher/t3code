import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { mw as r, t as i } from "./utils-CPoejuy5.js";
var a = t(),
  o = e(n(), 1),
  s = {
    compact: `min-h-64 gap-4 p-6 md:p-10 [&_[data-slot=empty-media]]:mb-0 [&_[data-slot=empty-title]]:text-[1.0625rem] [&_[data-slot=empty-title]]:leading-6 [&_[data-slot=empty-description]]:text-[0.8125rem] [&_[data-slot=empty-description]]:leading-[1.125rem]`,
    default: `gap-6 p-6 md:p-12`,
    hero: `gap-6 p-6 md:p-12 [&_[data-slot=empty-title]]:text-2xl sm:[&_[data-slot=empty-title]]:text-3xl`,
  };
function c(e) {
  let t = (0, a.c)(10),
    n,
    r,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (c = t[3]))
    : (({ className: n, size: c, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = c));
  let l = s[c === void 0 ? `default` : c],
    u;
  t[4] !== n || t[5] !== l
    ? ((u = i(
        `flex min-w-0 flex-1 flex-col items-center justify-center text-balance text-center`,
        l,
        n,
      )),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== r || t[8] !== u
      ? ((d = (0, o.jsx)(`div`, { className: u, "data-slot": `empty`, ...r })),
        (t[7] = r),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function l(e) {
  let t = (0, a.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let s;
  t[3] === n
    ? (s = t[4])
    : ((s = i(`flex max-w-sm flex-col items-center text-center`, n)), (t[3] = n), (t[4] = s));
  let c;
  return (
    t[5] !== r || t[6] !== s
      ? ((c = (0, o.jsx)(`div`, { className: s, "data-slot": `empty-header`, ...r })),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
var u = r(
  `flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  {
    defaultVariants: { variant: `default` },
    variants: {
      variant: {
        default: `bg-transparent`,
        icon: `relative flex size-9 shrink-0 items-center justify-center rounded-md border bg-card not-dark:bg-clip-padding text-foreground shadow-sm/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='size-'])]:size-4.5`,
      },
    },
  },
);
function d(e) {
  let t = (0, a.c)(21),
    n,
    r,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (s = t[3]))
    : (({ className: n, variant: s, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = s));
  let c = s === void 0 ? `default` : s,
    l;
  t[4] === n ? (l = t[5]) : ((l = i(`relative mb-6`, n)), (t[4] = n), (t[5] = l));
  let d;
  t[6] !== n || t[7] !== c
    ? ((d =
        c === `icon` &&
        (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(`div`, {
              "aria-hidden": `true`,
              className: i(
                u({ className: n, variant: c }),
                `-translate-x-0.5 -rotate-10 pointer-events-none absolute bottom-px origin-bottom-left scale-84 shadow-none`,
              ),
            }),
            (0, o.jsx)(`div`, {
              "aria-hidden": `true`,
              className: i(
                u({ className: n, variant: c }),
                `pointer-events-none absolute bottom-px origin-bottom-right translate-x-0.5 rotate-10 scale-84 shadow-none`,
              ),
            }),
          ],
        })),
      (t[6] = n),
      (t[7] = c),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== c
    ? ((f = i(u({ className: n, variant: c }))), (t[9] = n), (t[10] = c), (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== r || t[13] !== f
    ? ((p = (0, o.jsx)(`div`, { className: f, ...r })), (t[12] = r), (t[13] = f), (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== r || t[16] !== l || t[17] !== d || t[18] !== p || t[19] !== c
      ? ((m = (0, o.jsxs)(`div`, {
          className: l,
          "data-slot": `empty-media`,
          "data-variant": c,
          ...r,
          children: [d, p],
        })),
        (t[15] = r),
        (t[16] = l),
        (t[17] = d),
        (t[18] = p),
        (t[19] = c),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function f(e) {
  let t = (0, a.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let s;
  t[3] === n ? (s = t[4]) : ((s = i(`font-semibold text-xl`, n)), (t[3] = n), (t[4] = s));
  let c;
  return (
    t[5] !== r || t[6] !== s
      ? ((c = (0, o.jsx)(`div`, { className: s, "data-slot": `empty-title`, ...r })),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function p(e) {
  let t = (0, a.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let s;
  t[3] === n
    ? (s = t[4])
    : ((s = i(
        `text-muted-foreground text-sm [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4 [[data-slot=empty-title]+&]:mt-1 [[data-slot=empty-description]+&]:mt-1`,
        n,
      )),
      (t[3] = n),
      (t[4] = s));
  let c;
  return (
    t[5] !== r || t[6] !== s
      ? ((c = (0, o.jsx)(`div`, { className: s, "data-slot": `empty-description`, ...r })),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function m(e) {
  let t = (0, a.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let s;
  t[3] === n
    ? (s = t[4])
    : ((s = i(`flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm`, n)),
      (t[3] = n),
      (t[4] = s));
  let c;
  return (
    t[5] !== r || t[6] !== s
      ? ((c = (0, o.jsx)(`div`, { className: s, "data-slot": `empty-content`, ...r })),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
export { d as a, l as i, m as n, f as o, p as r, c as t };
//# sourceMappingURL=empty-CgJfsiJ2.js.map
