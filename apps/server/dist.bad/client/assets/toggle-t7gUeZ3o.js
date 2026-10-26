import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Ha as i,
  Ma as a,
  Mo as o,
  Pa as s,
  Pr as c,
  Ya as l,
  do as u,
  mw as d,
  t as f,
  wo as p,
} from "./utils-CPoejuy5.js";
var m = e(t()),
  h = m.createContext(void 0);
function g(e = !0) {
  let t = m.useContext(h);
  if (t === void 0 && !e) throw Error(o(7));
  return t;
}
var _ = e(r()),
  v = m.forwardRef(function (e, t) {
    let {
        className: n,
        defaultPressed: r = !1,
        disabled: o = !1,
        form: d,
        onPressedChange: f,
        pressed: m,
        render: h,
        type: v,
        value: y,
        nativeButton: b = !0,
        style: x,
        ...S
      } = e,
      C = s(y || void 0),
      w = g(),
      T = w?.value ?? [],
      E = w ? void 0 : r,
      D = (o || w?.disabled) ?? !1,
      [O, k] = l({
        controlled: w ? C !== void 0 && T.indexOf(C) > -1 : m,
        default: E,
        name: `Toggle`,
        state: `pressed`,
      }),
      { getButtonProps: A, buttonRef: j } = i({ disabled: D, native: b }),
      M = { disabled: D, pressed: O },
      N = [j, t],
      P = [
        {
          "aria-pressed": O,
          onClick(e) {
            let t = !O,
              n = a(u, e.nativeEvent);
            (C && w?.setGroupValue?.(C, t, n), f?.(t, n), !n.isCanceled && k(t));
          },
        },
        S,
        A,
      ],
      F = p(`button`, e, { enabled: !w, state: M, ref: N, props: P });
    return w
      ? (0, _.jsx)(c, {
          tag: `button`,
          render: h,
          className: n,
          style: x,
          state: M,
          refs: N,
          props: P,
        })
      : F;
  }),
  y = n(),
  b = d(
    `[&_svg]:-mx-0.5 relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base text-foreground outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:opacity-64 data-pressed:bg-input/64 data-pressed:text-accent-foreground sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
    {
      defaultVariants: { size: `default`, variant: `default` },
      variants: {
        size: {
          compact: `h-7 min-w-7 rounded-md px-[calc(--spacing(1)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3.5`,
          default: `h-9 min-w-9 px-[calc(--spacing(2)-1px)] sm:h-8 sm:min-w-8`,
          lg: `h-10 min-w-10 px-[calc(--spacing(2.5)-1px)] sm:h-9 sm:min-w-9`,
          segmented: `h-6 min-w-0 rounded-md px-2.5 text-xs before:rounded-[calc(var(--radius-md)-1px)]`,
          sm: `h-8 min-w-8 px-[calc(--spacing(1.5)-1px)] sm:h-7 sm:min-w-7`,
          xs: `h-7 min-w-7 px-[calc(--spacing(1)-1px)] sm:h-6 sm:min-w-6 rounded-md`,
        },
        variant: {
          default: `border-transparent`,
          pill: `border-transparent rounded-full px-3 font-normal text-muted-foreground data-pressed:text-foreground`,
          ghost: `border-transparent text-foreground shadow-none [:disabled,:active,[data-pressed]]:shadow-none before:shadow-none data-pressed:bg-accent data-pressed:text-accent-foreground disabled:opacity-100 disabled:text-muted-foreground disabled:[&_svg]:opacity-100`,
          outline: `border-input bg-background not-dark:bg-clip-padding shadow-xs/5 not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:data-pressed:bg-input dark:hover:bg-input/64 dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] dark:not-disabled:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/2%)] [:disabled,:active,[data-pressed]]:shadow-none`,
          segmented: `border-transparent text-muted-foreground shadow-none transition-colors before:shadow-none hover:bg-background/55 hover:text-foreground data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-xs/10 dark:hover:bg-input/32 dark:data-pressed:bg-input/72`,
        },
      },
    },
  );
function x(e) {
  let t = (0, y.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: n, variant: a, size: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] !== n || t[6] !== i || t[7] !== a
    ? ((o = f(b({ className: n, size: i, variant: a }))),
      (t[5] = n),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o))
    : (o = t[8]);
  let s;
  return (
    t[9] !== r || t[10] !== o
      ? ((s = (0, _.jsx)(v, { className: o, "data-slot": `toggle`, ...r })),
        (t[9] = r),
        (t[10] = o),
        (t[11] = s))
      : (s = t[11]),
    s
  );
}
export { h as n, x as t };
//# sourceMappingURL=toggle-t7gUeZ3o.js.map
