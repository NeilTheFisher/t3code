import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { To as r, t as i, vr as a } from "./utils-CPoejuy5.js";
var o = t(),
  s = e(n(), 1);
function c(e) {
  let t = (0, o.c)(15),
    n,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (c = t[2]), (l = t[3]), (u = t[4]))
    : (({ className: n, size: l, unstyled: u, ...c } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u));
  let d = l === void 0 ? `default` : l,
    f = u !== void 0 && u,
    p;
  t[5] !== n || t[6] !== f
    ? ((p =
        i(
          !f &&
            `relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] has-focus-visible:ring-inset not-has-disabled:has-not-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] sm:text-sm dark:bg-input/32 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:has-not-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
          n,
        ) || void 0),
      (t[5] = n),
      (t[6] = f),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== c || t[9] !== d
    ? ((m = (0, s.jsx)(a, {
        render: (e) =>
          (0, s.jsx)(`textarea`, {
            className: i(
              `field-sizing-content min-h-17.5 max-h-64 w-full rounded-[inherit] px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] outline-none wrap-anywhere max-sm:min-h-20.5`,
              d === `sm` &&
                `min-h-16.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)] max-sm:min-h-19.5`,
              d === `lg` && `min-h-18.5 py-[calc(--spacing(2)-1px)] max-sm:min-h-21.5`,
            ),
            "data-slot": `textarea`,
            ...r(e, c),
          }),
      })),
      (t[8] = c),
      (t[9] = d),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== d || t[12] !== p || t[13] !== m
      ? ((h = (0, s.jsx)(`span`, {
          className: p,
          "data-size": d,
          "data-slot": `textarea-control`,
          children: m,
        })),
        (t[11] = d),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
export { c as t };
//# sourceMappingURL=textarea-C9Xds9D7.js.map
