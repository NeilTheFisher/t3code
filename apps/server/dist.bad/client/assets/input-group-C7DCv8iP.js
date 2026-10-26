import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { _r as r, mw as i, t as a } from "./utils-CPoejuy5.js";
var o = t(),
  s = e(n(), 1),
  c = i(
    `relative inline-flex w-full min-w-0 items-center rounded-[var(--control-radius)] border text-base text-foreground ring-ring/24 transition-shadow has-[input:focus-visible,textarea:focus-visible]:has-[input[aria-invalid],textarea[aria-invalid]]:border-destructive/64 has-[input:focus-visible,textarea:focus-visible]:has-[input[aria-invalid],textarea[aria-invalid]]:ring-destructive/16 has-[textarea]:h-auto has-data-[align=block-end]:h-auto has-data-[align=block-start]:h-auto has-data-[align=block-end]:flex-col has-data-[align=block-start]:flex-col has-[input:focus-visible,textarea:focus-visible]:border-ring has-[input[aria-invalid],textarea[aria-invalid]]:border-destructive/36 has-autofill:bg-foreground/4 has-[input:disabled,textarea:disabled]:opacity-64 has-[input:disabled,textarea:disabled,input:focus-visible,textarea:focus-visible,input[aria-invalid],textarea[aria-invalid]]:shadow-none has-[input:focus-visible,textarea:focus-visible]:ring-[3px] has-[input:focus-visible,textarea:focus-visible]:ring-inset sm:text-sm dark:has-autofill:bg-foreground/8 dark:has-[input[aria-invalid],textarea[aria-invalid]]:ring-destructive/24 has-data-[align=inline-start]:**:[[data-size=sm]_input]:ps-1.5 has-data-[align=inline-end]:**:[[data-size=sm]_input]:pe-1.5 *:[[data-slot=input-control],[data-slot=textarea-control]]:contents *:[[data-slot=input-control],[data-slot=textarea-control]]:before:hidden has-[[data-align=block-start],[data-align=block-end]]:**:[input]:h-auto has-data-[align=inline-start]:**:[input]:ps-2 has-data-[align=inline-end]:**:[input]:pe-2 has-data-[align=block-end]:**:[input]:pt-1.5 has-data-[align=block-start]:**:[input]:pb-1.5 **:[textarea]:min-h-20.5 **:[textarea]:resize-none **:[textarea]:py-[calc(--spacing(3)-1px)] **:[textarea]:max-sm:min-h-23.5 **:[textarea_button]:rounded-[calc(var(--control-radius)-1px)]`,
    {
      defaultVariants: { variant: `default`, size: `default` },
      variants: {
        size: { default: null, lg: `h-9` },
        variant: {
          default: `border-input bg-background not-dark:bg-clip-padding shadow-xs/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--control-radius)-1px)] not-has-[input:disabled,textarea:disabled]:not-has-[input:focus-visible,textarea:focus-visible]:not-has-[input[aria-invalid],textarea[aria-invalid]]:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-has-[input:disabled,textarea:disabled]:not-has-[input:focus-visible,textarea:focus-visible]:not-has-[input[aria-invalid],textarea[aria-invalid]]:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
          popover: `dropdown-glass rounded-2xl has-[input:focus-visible,textarea:focus-visible]:ring-0 has-[input:focus-visible,textarea:focus-visible]:border-[color-mix(in_srgb,var(--contrast-foreground)_18%,transparent)]`,
          ghost: `border-transparent bg-transparent shadow-none hover:bg-muted/40 has-[input:focus-visible,textarea:focus-visible]:bg-background`,
        },
      },
    },
  );
function l(e) {
  let t = (0, o.c)(12),
    n,
    r,
    i,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (l = t[4]))
    : (({ className: n, variant: l, size: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = l));
  let u;
  t[5] !== n || t[6] !== i || t[7] !== l
    ? ((u = a(c({ variant: l, size: i }), n)), (t[5] = n), (t[6] = i), (t[7] = l), (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== r || t[10] !== u
      ? ((d = (0, s.jsx)(`div`, { className: u, "data-slot": `input-group`, role: `group`, ...r })),
        (t[9] = r),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var u = i(
  `[&_svg]:-mx-0.5 flex h-auto cursor-text select-none items-center justify-center gap-2 leading-none [&>kbd]:rounded-[calc(var(--radius)-5px)] in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4.5 sm:in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4 not-has-[button]:**:[svg:not([class*='opacity-'])]:opacity-80`,
  {
    defaultVariants: { align: `inline-start` },
    compoundVariants: [
      {
        align: `inline-end`,
        inset: `pill`,
        className: `has-[>button]:me-0 pe-1 [[data-size=sm]+&]:pe-1 gap-0.5`,
      },
      {
        align: `inline-start`,
        inset: `pill`,
        className: `has-[>button]:ms-0 ps-1 [[data-size=sm]+&]:ps-1 gap-0.5`,
      },
    ],
    variants: {
      inset: { default: null, pill: `[&_button]:rounded-full` },
      align: {
        "block-end": `order-last w-full justify-start px-[calc(--spacing(3)-1px)] pb-[calc(--spacing(3)-1px)] [.border-t]:pt-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]`,
        "block-start": `order-first w-full justify-start px-[calc(--spacing(3)-1px)] pt-[calc(--spacing(3)-1px)] [.border-b]:pb-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]`,
        "inline-end": `has-[>:last-child[data-slot=badge]]:-me-1.5 has-[>button]:-me-2 order-last pe-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:me-[-0.35rem] [[data-size=sm]+&]:pe-[calc(--spacing(2.5)-1px)]`,
        "inline-start": `has-[>:last-child[data-slot=badge]]:-ms-1.5 has-[>button]:-ms-2 order-first ps-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:ms-[-0.35rem] [[data-size=sm]+&]:ps-[calc(--spacing(2.5)-1px)]`,
      },
    },
  },
);
function d(e) {
  let t = (0, o.c)(13),
    n,
    r,
    i,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (c = t[4]))
    : (({ className: n, align: c, inset: r, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c));
  let l = c === void 0 ? `inline-start` : c,
    d;
  t[5] !== l || t[6] !== n || t[7] !== r
    ? ((d = a(u({ align: l, inset: r }), n)), (t[5] = l), (t[6] = n), (t[7] = r), (t[8] = d))
    : (d = t[8]);
  let p;
  return (
    t[9] !== l || t[10] !== i || t[11] !== d
      ? ((p = (0, s.jsx)(`div`, {
          className: d,
          "data-align": l,
          "data-slot": `input-group-addon`,
          onMouseDown: f,
          ...i,
        })),
        (t[9] = l),
        (t[10] = i),
        (t[11] = d),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function f(e) {
  if (
    e.target.closest(
      `button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox'], [data-slot='select-trigger']`,
    )
  )
    return;
  e.preventDefault();
  let t = e.currentTarget.parentElement,
    n = t?.querySelector(`input, textarea`);
  n && !t?.querySelector(`input:focus, textarea:focus`) && n.focus();
}
function p(e) {
  let t = (0, o.c)(6),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ className: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  return (
    t[3] !== n || t[4] !== i
      ? ((a = (0, s.jsx)(r, { className: n, unstyled: !0, ...i })),
        (t[3] = n),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
export { d as n, p as r, l as t };
//# sourceMappingURL=input-group-C7DCv8iP.js.map
