import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./utils-CPoejuy5.js";
function a(e) {
  let t = Number.parseInt(e.slice(1), 16),
    n = ((t >> 16) & 255) / 255,
    r = ((t >> 8) & 255) / 255,
    i = (t & 255) / 255,
    a = Math.max(n, r, i),
    o = a - Math.min(n, r, i),
    s = 0;
  return (
    o !== 0 &&
      ((s = a === n ? ((r - i) / o) % 6 : a === r ? (i - n) / o + 2 : (n - r) / o + 4),
      (s *= 60),
      s < 0 && (s += 360)),
    { h: s, s: a === 0 ? 0 : o / a, v: a }
  );
}
function o(e, t, n) {
  let r = ((e % 360) + 360) % 360,
    i = n * t,
    a = i * (1 - Math.abs(((r / 60) % 2) - 1)),
    o = n - i,
    [s, c, l] =
      r < 60
        ? [i, a, 0]
        : r < 120
          ? [a, i, 0]
          : r < 180
            ? [0, i, a]
            : r < 240
              ? [0, a, i]
              : r < 300
                ? [a, 0, i]
                : [i, 0, a];
  return `#${[s, c, l]
    .map((e) =>
      Math.round((e + o) * 255)
        .toString(16)
        .padStart(2, `0`),
    )
    .join(``)}`;
}
var s = n(),
  c = e(t(), 1),
  l = e(r(), 1);
function u(e) {
  return Math.min(1, Math.max(0, e));
}
function d(e, t, n) {
  let r = (0, s.c)(9),
    [i, a] = (0, c.useState)(!1),
    o = (0, c.useRef)(null),
    l;
  r[0] === t
    ? (l = r[1])
    : ((l = (e) => {
        o.current === e.pointerId && ((o.current = null), a(!1), t?.());
      }),
      (r[0] = t),
      (r[1] = l));
  let u = l,
    d = i ? void 0 : `left 80ms linear, top 80ms linear, background-color 80ms linear`,
    f;
  r[2] !== n?.current || r[3] !== u || r[4] !== e
    ? ((f = {
        onPointerDown(t) {
          o.current === null &&
            t.button === 0 &&
            ((o.current = t.pointerId),
            (n?.current ?? t.currentTarget).focus({ preventScroll: !0 }),
            t.currentTarget.setPointerCapture(t.pointerId),
            a(!0),
            e(t));
        },
        onPointerMove(t) {
          o.current === t.pointerId && e(t);
        },
        onPointerUp: u,
        onPointerCancel: u,
        onLostPointerCapture: u,
      }),
      (r[2] = n?.current),
      (r[3] = u),
      (r[4] = e),
      (r[5] = f))
    : (f = r[5]);
  let p;
  return (
    r[6] !== d || r[7] !== f
      ? ((p = { thumbTransition: d, handlers: f }), (r[6] = d), (r[7] = f), (r[8] = p))
      : (p = r[8]),
    p
  );
}
function f(e) {
  let t = (0, s.c)(31),
    { label: n, value: r, onChange: a, onInteractionEnd: o, className: f, variant: p } = e,
    m = p === void 0 ? `inset` : p,
    h = (0, c.useId)(),
    g = (0, c.useRef)(null),
    _;
  t[0] !== a || t[1] !== r
    ? ((_ = (e) => {
        let t = e.currentTarget.getBoundingClientRect();
        t.width &&
          t.height &&
          a({
            ...r,
            s: u((e.clientX - t.left) / t.width),
            v: 1 - u((e.clientY - t.top) / t.height),
          });
      }),
      (t[0] = a),
      (t[1] = r),
      (t[2] = _))
    : (_ = t[2]);
  let { handlers: v, thumbTransition: y } = d(_, o, g),
    b;
  t[3] !== a || t[4] !== r
    ? ((b = (e, t) => {
        let n = e.shiftKey ? 0.1 : 0.02,
          i;
        bb18: switch (e.key) {
          case `ArrowRight`:
          case `ArrowUp`:
            i = u(r[t] + n);
            break bb18;
          case `ArrowLeft`:
          case `ArrowDown`:
            i = u(r[t] - n);
            break bb18;
          case `Home`:
            i = 0;
            break bb18;
          case `End`:
            i = 1;
            break bb18;
          default:
            return;
        }
        (e.preventDefault(), a({ ...r, [t]: i }));
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = b))
    : (b = t[5]);
  let x = b,
    S = `${n} saturation and brightness`,
    C = m === `edge` ? `h-36 rounded-none` : `h-32 rounded-lg`,
    w;
  t[6] !== f || t[7] !== C
    ? ((w = i(
        `relative cursor-crosshair touch-none overflow-hidden bg-[linear-gradient(to_top,#000,transparent),linear-gradient(to_right,#fff,transparent)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-inset has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-popover`,
        C,
        f,
      )),
      (t[6] = f),
      (t[7] = C),
      (t[8] = w))
    : (w = t[8]);
  let T = `hsl(${r.h} 100% 50%)`,
    E;
  t[9] === T ? (E = t[10]) : ((E = { backgroundColor: T }), (t[9] = T), (t[10] = E));
  let D;
  t[11] === h
    ? (D = t[12])
    : ((D = (0, l.jsx)(`span`, {
        id: h,
        className: `sr-only`,
        children: `Use arrow keys to adjust the focused value. Hold Shift for larger steps. Use Home and End for the minimum and maximum. Press Tab to move between saturation and brightness.`,
      })),
      (t[11] = h),
      (t[12] = D));
  let O;
  t[13] !== x || t[14] !== h || t[15] !== n || t[16] !== a || t[17] !== r
    ? ((O = [
        [`s`, `Saturation`],
        [`v`, `Brightness`],
      ].map((e) => {
        let [t, i] = e;
        return (0, l.jsxs)(
          `label`,
          {
            className: `contents`,
            children: [
              (0, l.jsx)(`input`, {
                ref: t === `s` ? g : void 0,
                type: `range`,
                min: 0,
                max: 100,
                step: `any`,
                value: r[t] * 100,
                "aria-label": `${n} ${i.toLowerCase()}`,
                "aria-describedby": h,
                "aria-valuetext": `${Math.round(r[t] * 100)}%`,
                className: `peer sr-only`,
                onKeyDown: (e) => x(e, t),
                onChange: (e) => a({ ...r, [t]: e.currentTarget.valueAsNumber / 100 }),
              }),
              (0, l.jsxs)(`span`, {
                "aria-hidden": !0,
                className: `pointer-events-none invisible absolute bottom-2 left-2 z-10 rounded bg-popover px-1.5 py-0.5 text-xs text-popover-foreground peer-focus-visible:visible`,
                children: [i, ` `, Math.round(r[t] * 100), `%`],
              }),
            ],
          },
          t,
        );
      })),
      (t[13] = x),
      (t[14] = h),
      (t[15] = n),
      (t[16] = a),
      (t[17] = r),
      (t[18] = O))
    : (O = t[18]);
  let k = `calc(${r.s} * (100% - 0.75rem) + 0.375rem)`,
    A = `calc(${1 - r.v} * (100% - 0.75rem) + 0.375rem)`,
    j;
  t[19] !== k || t[20] !== A || t[21] !== y
    ? ((j = (0, l.jsx)(`span`, {
        className: `pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(0_0_0/0.4)]`,
        style: { left: k, top: A, transition: y },
      })),
      (t[19] = k),
      (t[20] = A),
      (t[21] = y),
      (t[22] = j))
    : (j = t[22]);
  let M;
  return (
    t[23] !== v ||
    t[24] !== O ||
    t[25] !== j ||
    t[26] !== S ||
    t[27] !== w ||
    t[28] !== E ||
    t[29] !== D
      ? ((M = (0, l.jsxs)(`div`, {
          "aria-label": S,
          role: `group`,
          className: w,
          style: E,
          ...v,
          children: [D, O, j],
        })),
        (t[23] = v),
        (t[24] = O),
        (t[25] = j),
        (t[26] = S),
        (t[27] = w),
        (t[28] = E),
        (t[29] = D),
        (t[30] = M))
      : (M = t[30]),
    M
  );
}
function p(e) {
  let t = (0, s.c)(21),
    { label: n, value: r, onChange: a, onInteractionEnd: o, className: c } = e,
    f;
  t[0] === a
    ? (f = t[1])
    : ((f = (e) => {
        let t = e.currentTarget.getBoundingClientRect();
        t.width && a(u((e.clientX - t.left) / t.width) * 360);
      }),
      (t[0] = a),
      (t[1] = f));
  let { handlers: p, thumbTransition: m } = d(f, o),
    h;
  t[2] !== a || t[3] !== r
    ? ((h = (e) => {
        if (![`ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`].includes(e.key)) return;
        e.preventDefault();
        let t = e.shiftKey ? 10 : 1,
          n = e.key === `ArrowRight` || e.key === `ArrowUp` ? 1 : -1;
        a((r + n * t + 360) % 360);
      }),
      (t[2] = a),
      (t[3] = r),
      (t[4] = h))
    : (h = t[4]);
  let g = h,
    _;
  t[5] === r ? (_ = t[6]) : ((_ = Math.round(r)), (t[5] = r), (t[6] = _));
  let v;
  t[7] === c
    ? (v = t[8])
    : ((v = i(
        `relative flex h-6 cursor-pointer touch-none items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-popover`,
        c,
      )),
      (t[7] = c),
      (t[8] = v));
  let y;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, l.jsx)(`span`, {
        "aria-hidden": !0,
        className: `h-2.5 w-full rounded-full bg-[linear-gradient(to_right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)] shadow-[inset_0_0_0_1px_rgb(0_0_0_/_12%)]`,
      })),
      (t[9] = y))
    : (y = t[9]);
  let b = `calc(${r / 360} * (100% - 1rem) + 0.5rem)`,
    x = `hsl(${r} 100% 50%)`,
    S;
  t[10] !== b || t[11] !== x || t[12] !== m
    ? ((S = (0, l.jsx)(`span`, {
        className: `pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(0_0_0/0.4)]`,
        style: { left: b, backgroundColor: x, transition: m },
      })),
      (t[10] = b),
      (t[11] = x),
      (t[12] = m),
      (t[13] = S))
    : (S = t[13]);
  let C;
  return (
    t[14] !== g || t[15] !== p || t[16] !== n || t[17] !== _ || t[18] !== v || t[19] !== S
      ? ((C = (0, l.jsxs)(`div`, {
          "aria-label": n,
          "aria-valuemax": 360,
          "aria-valuemin": 0,
          "aria-valuenow": _,
          className: v,
          role: `slider`,
          tabIndex: 0,
          onKeyDown: g,
          ...p,
          children: [y, S],
        })),
        (t[14] = g),
        (t[15] = p),
        (t[16] = n),
        (t[17] = _),
        (t[18] = v),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
export { o as i, f as n, a as r, p as t };
//# sourceMappingURL=color-picker-CmmC9zEa.js.map
