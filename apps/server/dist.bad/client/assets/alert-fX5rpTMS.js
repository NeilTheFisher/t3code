import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { mw as i, t as a } from "./utils-CPoejuy5.js";
var o = n(),
  s = e(t(), 1),
  c = e(r(), 1),
  l = i(`relative rounded-xl border px-3.5 py-3 text-card-foreground text-sm`, {
    defaultVariants: { surface: `default`, variant: `default` },
    variants: {
      surface: { default: ``, glass: `alert-glass` },
      variant: {
        default: `bg-transparent dark:bg-input/32 [&_svg]:text-muted-foreground`,
        sidebar: `rounded-lg border-sidebar-border bg-sidebar-control-surface px-2 py-1.5 text-[11px] leading-4 [&_[data-slot=alert-description]]:block [&_[data-slot=alert-description]]:text-sidebar-muted-foreground`,
        error: `border-error/32 bg-error-surface text-error-foreground [&_[data-slot=alert-description]]:text-error-foreground/80 [&_svg]:text-error`,
        info: `border-info/32 bg-info/4 [&_svg]:text-info`,
        success: `border-success/32 bg-success/4 [&_svg]:text-success`,
        warning: `border-warning/32 bg-warning-surface text-warning-foreground [&_[data-slot=alert-description]]:text-warning-foreground/80 [&_svg]:text-warning`,
      },
    },
  });
function u(e) {
  let t = e.props[`data-slot`];
  if (t) return t;
  let n = e.type;
  switch (n.displayName ?? n.name) {
    case `AlertAction`:
      return `alert-action`;
    case `AlertTitle`:
      return `alert-title`;
    case `AlertDescription`:
      return `alert-description`;
    default:
      return;
  }
}
function d(e) {
  let t = (0, o.c)(36),
    n,
    r,
    i,
    d,
    f,
    p;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (d = t[4]), (f = t[5]), (p = t[6]))
    : (({ className: r, variant: p, surface: d, controlAlignment: f, children: n, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p));
  let m = f === void 0 ? `center` : f,
    h,
    g,
    _;
  t[7] === n
    ? ((h = t[8]), (g = t[9]), (_ = t[10]))
    : ((_ = []),
      (g = []),
      (h = []),
      s.Children.forEach(n, (e) => {
        if (!(0, s.isValidElement)(e)) {
          g.push(e);
          return;
        }
        let t = u(e);
        t === `alert-action`
          ? h.push(e)
          : t === `alert-title` || t === `alert-description`
            ? g.push(e)
            : _.push(e);
      }),
      (t[7] = n),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _));
  let v;
  t[11] !== r || t[12] !== d || t[13] !== p
    ? ((v = a(l({ surface: d, variant: p }), r)),
      (t[11] = r),
      (t[12] = d),
      (t[13] = p),
      (t[14] = v))
    : (v = t[14]);
  let y = p ?? `default`,
    b = m === `first-line` ? `items-start` : `items-center`,
    x = m === `first-line` && h.length > 0 && `min-h-7 pt-1 sm:min-h-6 sm:pt-0.5`,
    S;
  t[15] !== b || t[16] !== x
    ? ((S = a(`flex gap-2`, b, x)), (t[15] = b), (t[16] = x), (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== m || t[19] !== _
    ? ((C =
        _.length > 0 &&
        (0, c.jsx)(`div`, {
          className: a(
            `flex shrink-0 items-center justify-center`,
            m === `first-line` ? `h-lh w-4 [&>svg]:size-4` : `size-4 [&>svg]:size-full`,
          ),
          children: _,
        })),
      (t[18] = m),
      (t[19] = _),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] === g
    ? (w = t[22])
    : ((w =
        g.length > 0 &&
        (0, c.jsx)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: g })),
      (t[21] = g),
      (t[22] = w));
  let T;
  t[23] !== h || t[24] !== m
    ? ((T =
        h.length > 0 &&
        (0, c.jsx)(`div`, {
          className: a(
            `flex shrink-0 items-center`,
            m === `first-line` ? `h-lh self-start` : `self-center`,
          ),
          children: h,
        })),
      (t[23] = h),
      (t[24] = m),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] !== S || t[27] !== C || t[28] !== w || t[29] !== T
    ? ((E = (0, c.jsxs)(`div`, { className: S, children: [C, w, T] })),
      (t[26] = S),
      (t[27] = C),
      (t[28] = w),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D;
  return (
    t[31] !== i || t[32] !== E || t[33] !== v || t[34] !== y
      ? ((D = (0, c.jsx)(`div`, {
          className: v,
          "data-slot": `alert`,
          "data-variant": y,
          role: `alert`,
          ...i,
          children: E,
        })),
        (t[31] = i),
        (t[32] = E),
        (t[33] = v),
        (t[34] = y),
        (t[35] = D))
      : (D = t[35]),
    D
  );
}
function f(e) {
  let t = (0, o.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = a(`font-medium`, n)), (t[3] = n), (t[4] = i));
  let s;
  return (
    t[5] !== r || t[6] !== i
      ? ((s = (0, c.jsx)(`div`, { className: i, "data-slot": `alert-title`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function p(e) {
  let t = (0, o.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = a(`flex flex-col gap-2.5 text-muted-foreground`, n)), (t[3] = n), (t[4] = i));
  let s;
  return (
    t[5] !== r || t[6] !== i
      ? ((s = (0, c.jsx)(`div`, { className: i, "data-slot": `alert-description`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function m(e) {
  let t = (0, o.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = a(`flex gap-1`, n)), (t[3] = n), (t[4] = i));
  let s;
  return (
    t[5] !== r || t[6] !== i
      ? ((s = (0, c.jsx)(`div`, { className: i, "data-slot": `alert-action`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
((f.displayName = `AlertTitle`),
  (p.displayName = `AlertDescription`),
  (m.displayName = `AlertAction`));
export { f as i, m as n, p as r, d as t };
//# sourceMappingURL=alert-fX5rpTMS.js.map
