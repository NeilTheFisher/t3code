import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./x-Blp0Exqg.js";
import { Bn as a, Dr as o, Vn as s, Wn as c } from "./utils-CPoejuy5.js";
import { S as l, r as u, v as d, w as f, x as p, y as m } from "./dialog-BjeWpelT.js";
import { pa as h } from "./main-BZa0O6xN.js";
var g = n(),
  _ = e(t(), 1),
  v = e(r(), 1);
function y(e) {
  let t = (0, g.c)(13),
    { label: n, children: r } = e,
    i = h(),
    [a, o] = (0, _.useState)(!0),
    s = (0, _.useRef)(!1),
    c = (0, _.useRef)(null),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (e) => {
        e || o(!1);
      }),
      (t[0] = f))
    : (f = t[0]);
  let y;
  t[1] === i
    ? (y = t[2])
    : ((y = (e) => {
        e || i();
      }),
      (t[1] = i),
      (t[2] = y));
  let b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, v.jsx)(u, {})), (t[3] = b))
    : (b = t[3]);
  let x, S;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        s.current = e.target === e.currentTarget;
      }),
      (S = (e) => {
        (s.current && e.target === e.currentTarget && o(!1), (s.current = !1));
      }),
      (t[4] = x),
      (t[5] = S))
    : ((x = t[4]), (S = t[5]));
  let C;
  t[6] !== r || t[7] !== n
    ? ((C = (0, v.jsxs)(p, {
        children: [
          b,
          (0, v.jsx)(d, {
            className: `fixed inset-0 z-50 flex items-center justify-center sm:p-6 lg:p-10`,
            onPointerDown: x,
            onClick: S,
            children: (0, v.jsx)(l, {
              ref: c,
              initialFocus: c,
              finalFocus: !1,
              "aria-label": n,
              "data-slot": `dialog-popup`,
              "data-app-modal": ``,
              className: `relative flex size-full min-h-0 min-w-0 flex-col overflow-hidden bg-background max-sm:pt-safe max-sm:pb-safe text-foreground outline-none transition-[opacity,scale] duration-150 ease-out [-webkit-app-region:no-drag] data-ending-style:scale-[0.985] data-ending-style:opacity-0 data-starting-style:scale-[0.985] data-starting-style:opacity-0 sm:max-h-[60rem] sm:max-w-[80rem] sm:rounded-2xl sm:border sm:shadow-2xl/40`,
              children: r,
            }),
          }),
        ],
      })),
      (t[6] = r),
      (t[7] = n),
      (t[8] = C))
    : (C = t[8]);
  let w;
  return (
    t[9] !== a || t[10] !== y || t[11] !== C
      ? ((w = (0, v.jsx)(m, {
          open: a,
          disablePointerDismissal: !0,
          onOpenChange: f,
          onOpenChangeComplete: y,
          children: C,
        })),
        (t[9] = a),
        (t[10] = y),
        (t[11] = C),
        (t[12] = w))
      : (w = t[12]),
    w
  );
}
function b() {
  let e = (0, g.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, v.jsxs)(a, {
          children: [
            (0, v.jsx)(c, {
              render: (0, v.jsx)(f, {
                "aria-label": `Close`,
                render: (0, v.jsx)(o, { size: `icon-sm`, variant: `ghost` }),
              }),
              children: (0, v.jsx)(i, {}),
            }),
            (0, v.jsx)(s, { side: `bottom`, children: `Close (Esc)` }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { b as n, y as t };
//# sourceMappingURL=AppRouteModal-B1ND9wxC.js.map
