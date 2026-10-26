import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./search-BrluOr7L.js";
import { t as a } from "./chevrons-up-down-DdmMCCVA.js";
import { t as o } from "./x-Blp0Exqg.js";
import {
  Dr as s,
  Mo as c,
  On as l,
  Pa as u,
  Wa as d,
  _r as f,
  t as p,
  wo as m,
} from "./utils-CPoejuy5.js";
import {
  C as h,
  S as g,
  _,
  b as v,
  d as y,
  f as b,
  g as x,
  h as S,
  m as C,
  p as w,
  v as T,
  w as E,
  x as D,
  y as O,
} from "./combobox-HagV04Wz.js";
import { t as k } from "./scroll-area-B6188Bq9.js";
import {
  S as A,
  T as j,
  g as M,
  h as N,
  p as ee,
  v as te,
  x as ne,
  y as P,
} from "./dialog-BjeWpelT.js";
var F = e(t()),
  I = F.createContext(void 0);
function L() {
  let e = F.useContext(I);
  if (e === void 0) throw Error(c(18));
  return e;
}
var R = e(r()),
  z = F.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, items: a, ...o } = e,
      [s, c] = F.useState(),
      l = F.useMemo(() => ({ labelId: s, setLabelId: c, items: a }), [s, c, a]),
      u = m(`div`, e, { ref: t, props: [{ role: `group`, "aria-labelledby": s }, o] }),
      d = (0, R.jsx)(I.Provider, { value: l, children: u });
    return a ? (0, R.jsx)(v, { items: a, children: d }) : d;
  }),
  B = F.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, ...o } = e,
      { setLabelId: s } = L(),
      c = u(a);
    return (
      d(
        () => (
          s(c),
          () => {
            s(void 0);
          }
        ),
        [c, s],
      ),
      m(`div`, e, { ref: t, props: [{ id: c }, o] })
    );
  });
function V(e) {
  let {
      openOnInputClick: t = !1,
      value: n,
      defaultValue: r,
      onValueChange: i,
      mode: a = `list`,
      itemToStringValue: o,
      ...s
    } = e,
    c = a === `inline` || a === `both`,
    u = a === `inline` || a === `none`,
    d = n !== void 0,
    [f, p] = F.useState(r ?? ``),
    [m, g] = F.useState(``);
  F.useEffect(() => {
    d && g(``);
  }, [n, d]);
  let _;
  _ = c && m !== `` ? m : d ? (n ?? ``) : f;
  let v = E(),
    y = F.useMemo(() => (s.filter === void 0 ? v.contains : s.filter), [s.filter, v]),
    b = String(d ? n : f).trim(),
    x = F.useMemo(
      () => (a === `both` ? (y === null ? null : (e, t, n) => y(e, b, n)) : u ? null : y),
      [y, a, b, u],
    );
  function S(e, t) {
    (g(``), d || p(e), i?.(e, t));
  }
  function C(t, n) {
    (e.onItemHighlighted?.(t, n), n.reason !== `pointer` && g(c ? (t == null ? `` : l(t, o)) : ``));
  }
  return (0, R.jsx)(h, {
    ...s,
    itemToStringLabel: o,
    openOnInputClick: t,
    selectionMode: `none`,
    fillInputOnItemPress: !0,
    filter: x,
    autoComplete: a,
    inputValue: _,
    defaultInputValue: r,
    onInputValueChange: S,
    onItemHighlighted: C,
  });
}
var H = D,
  U = w,
  W = n(),
  G = V;
function K(e) {
  let t = (0, W.c)(30),
    n,
    r,
    i,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (s = t[4]), (c = t[5]), (l = t[6]))
    : (({ className: n, showTrigger: c, showClear: l, startAddon: s, size: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l));
  let u = c !== void 0 && c,
    d = l !== void 0 && l,
    m = i ?? `default`,
    h;
  t[7] === s
    ? (h = t[8])
    : ((h =
        s &&
        (0, R.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `[&_svg]:-mx-0.5 pointer-events-none has-[button]:pointer-events-auto absolute inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 has-[+[data-size=sm]]:ps-[calc(--spacing(2.5)-1px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4`,
          "data-slot": `autocomplete-start-addon`,
          children: s,
        })),
      (t[7] = s),
      (t[8] = h));
  let _ =
      s &&
      `data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7.5)-1px)] *:data-[slot=autocomplete-input]:ps-[calc(--spacing(8.5)-1px)] sm:data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(8)-1px)]`,
    v =
      m === `sm`
        ? `has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-6.5`
        : `has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-7`,
    y;
  t[9] !== n || t[10] !== _ || t[11] !== v
    ? ((y = p(_, v, n)), (t[9] = n), (t[10] = _), (t[11] = v), (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === m
    ? (b = t[14])
    : ((b = (0, R.jsx)(f, { nativeInput: !0, size: m })), (t[13] = m), (t[14] = b));
  let x;
  t[15] !== r || t[16] !== y || t[17] !== b
    ? ((x = (0, R.jsx)(g, { className: y, "data-slot": `autocomplete-input`, render: b, ...r })),
      (t[15] = r),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] !== u || t[20] !== m
    ? ((S =
        u &&
        (0, R.jsx)(ce, {
          className: p(
            `-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
            m === `sm` ? `end-0` : `end-0.5`,
          ),
          children: (0, R.jsx)(C, {
            "data-slot": `autocomplete-icon`,
            children: (0, R.jsx)(a, {}),
          }),
        })),
      (t[19] = u),
      (t[20] = m),
      (t[21] = S))
    : (S = t[21]);
  let w;
  t[22] !== d || t[23] !== m
    ? ((w =
        d &&
        (0, R.jsx)(oe, {
          className: p(
            `-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
            m === `sm` ? `end-0` : `end-0.5`,
          ),
          children: (0, R.jsx)(o, {}),
        })),
      (t[22] = d),
      (t[23] = m),
      (t[24] = w))
    : (w = t[24]);
  let T;
  return (
    t[25] !== w || t[26] !== h || t[27] !== x || t[28] !== S
      ? ((T = (0, R.jsxs)(`div`, {
          className: `relative not-has-[>*.w-full]:w-fit w-full text-foreground has-disabled:opacity-64`,
          children: [h, x, S, w],
        })),
        (t[25] = w),
        (t[26] = h),
        (t[27] = x),
        (t[28] = S),
        (t[29] = T))
      : (T = t[29]),
    T
  );
}
function q(e) {
  let t = (0, W.c)(24),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]))
    : (({
        className: a,
        children: i,
        side: s,
        sideOffset: c,
        alignOffset: n,
        align: l,
        anchor: r,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  let u = s === void 0 ? `bottom` : s,
    d = c === void 0 ? 4 : c,
    f = l === void 0 ? `start` : l,
    m;
  t[9] === a
    ? (m = t[10])
    : ((m = p(
        `relative flex max-h-full min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg border bg-popover not-dark:bg-clip-padding shadow-lg/5 transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]`,
        a,
      )),
      (t[9] = a),
      (t[10] = m));
  let h;
  t[11] !== i || t[12] !== o
    ? ((h = (0, R.jsx)(S, {
        className: `flex max-h-[min(var(--available-height),23rem)] flex-1 flex-col text-foreground`,
        "data-slot": `autocomplete-popup`,
        ...o,
        children: i,
      })),
      (t[11] = i),
      (t[12] = o),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== m || t[15] !== h
    ? ((g = (0, R.jsx)(`span`, { className: m, children: h })),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let v;
  return (
    t[17] !== f || t[18] !== n || t[19] !== r || t[20] !== u || t[21] !== d || t[22] !== g
      ? ((v = (0, R.jsx)(_, {
          children: (0, R.jsx)(x, {
            align: f,
            alignOffset: n,
            anchor: r,
            className: `z-[130] select-none`,
            "data-slot": `autocomplete-positioner`,
            side: u,
            sideOffset: d,
            children: g,
          }),
        })),
        (t[17] = f),
        (t[18] = n),
        (t[19] = r),
        (t[20] = u),
        (t[21] = d),
        (t[22] = g),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
function J(e) {
  let t = (0, W.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: r, children: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r
    ? (a = t[5])
    : ((a = p(
        `flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base outline-none hover:bg-accent data-disabled:pointer-events-none data-selected:bg-accent/50 data-selected:text-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground [&[data-highlighted][data-selected]]:bg-accent [&[data-highlighted][data-selected]]:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='text-'])]:text-muted-foreground`,
        r,
      )),
      (t[4] = r),
      (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, R.jsx)(U, { className: a, "data-slot": `autocomplete-item`, ...i, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Y(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = p(`[[role=group]+&]:mt-1.5`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(z, { className: i, "data-slot": `autocomplete-group`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var X = `px-2 py-1.5 font-medium text-muted-foreground text-xs`;
function Z(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = p(X, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(B, { className: i, "data-slot": `autocomplete-group-label`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function re(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = p(X, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(`div`, {
          className: i,
          "data-slot": `autocomplete-group-label`,
          role: `presentation`,
          ...r,
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ie(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = p(`size-full min-w-0`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(T, { className: i, "data-slot": `autocomplete-list`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ae(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(b, { className: i, "data-slot": `autocomplete-empty`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Q(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`not-empty:scroll-py-1 not-empty:p-1`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(k, {
          scrollbarGutter: !0,
          scrollFade: !0,
          children: (0, R.jsx)(T, { className: i, "data-slot": `autocomplete-list`, ...r }),
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function oe(e) {
  let t = (0, W.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(
        `-translate-y-1/2 absolute end-0.5 top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-[color,background-color,box-shadow,opacity] pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, R.jsx)(o, {})), (t[5] = a))
    : (a = t[5]);
  let s;
  return (
    t[6] !== r || t[7] !== i
      ? ((s = (0, R.jsx)(y, {
          className: i,
          "data-slot": `autocomplete-clear`,
          ...r,
          children: a,
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function se(e) {
  let t = (0, W.c)(4),
    n;
  t[0] === e ? (n = t[1]) : (({ ...n } = e), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === n
      ? (r = t[3])
      : ((r = (0, R.jsx)(O, { "data-slot": `autocomplete-collection`, ...n })),
        (t[2] = n),
        (t[3] = r)),
    r
  );
}
function ce(e) {
  let t = (0, W.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: r, children: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(H, {
          className: r,
          "data-slot": `autocomplete-trigger`,
          ...i,
          children: n,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var le = P,
  ue = ne;
function de(e) {
  let t = (0, W.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, R.jsx)(M, { "data-slot": `command-dialog-trigger`, ...e })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function fe(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = p(ee, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(j, { className: i, "data-slot": `command-dialog-backdrop`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function pe(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(
        `pointer-events-none fixed inset-0 z-50 flex flex-col items-center px-4 py-[max(--spacing(4),4vh)] sm:py-[10vh]`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(te, { className: i, "data-slot": `command-dialog-viewport`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function me(e) {
  let t = (0, W.c)(16),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: r, children: n, onBackdropPointerDown: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === i ? (o = t[6]) : ((o = (0, R.jsx)(fe, { onPointerDown: i })), (t[5] = i), (t[6] = o));
  let s;
  t[7] === r
    ? (s = t[8])
    : ((s = p(N, `pointer-events-auto max-h-105 max-w-xl text-foreground`, r)),
      (t[7] = r),
      (t[8] = s));
  let c;
  t[9] !== n || t[10] !== a || t[11] !== s
    ? ((c = (0, R.jsx)(pe, {
        children: (0, R.jsx)(A, {
          className: s,
          "data-slot": `command-dialog-popup`,
          ...a,
          children: n,
        }),
      })),
      (t[9] = n),
      (t[10] = a),
      (t[11] = s),
      (t[12] = c))
    : (c = t[12]);
  let l;
  return (
    t[13] !== o || t[14] !== c
      ? ((l = (0, R.jsxs)(ue, { children: [o, c] })), (t[13] = o), (t[14] = c), (t[15] = l))
      : (l = t[15]),
    l
  );
}
function he(e) {
  let t = (0, W.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ autoHighlight: r, keepHighlight: i, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = r === void 0 ? `always` : r,
    o = i === void 0 || i,
    s;
  return (
    t[4] !== a || t[5] !== o || t[6] !== n
      ? ((s = (0, R.jsx)(G, { autoHighlight: a, inline: !0, keepHighlight: o, open: !0, ...n })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = n),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function ge(e) {
  let t = (0, W.c)(11),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ className: n, placeholder: r, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  let o;
  t[4] === n
    ? (o = t[5])
    : ((o = p(
        `border-transparent! bg-transparent! shadow-none before:hidden has-focus-visible:ring-0 placeholder:text-placeholder *:data-[slot=autocomplete-input]:ps-9! sm:*:data-[slot=autocomplete-input]:ps-[calc(var(--command-shell-inset)+1.5rem)]!`,
        n,
      )),
      (t[4] = n),
      (t[5] = o));
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, R.jsx)(i, { className: `translate-x-0.5 text-icon-muted` })), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== a || t[9] !== o
      ? ((c = (0, R.jsx)(`div`, {
          className: `px-[var(--command-shell-inset)] py-1.5 [&_[data-slot=autocomplete-start-addon]]:ps-[calc(var(--command-shell-inset)+0.0625rem)]`,
          children: (0, R.jsx)(K, {
            autoFocus: !0,
            className: o,
            placeholder: r,
            size: `lg`,
            startAddon: s,
            ...a,
          }),
        })),
        (t[7] = r),
        (t[8] = a),
        (t[9] = o),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function _e(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`not-empty:scroll-py-2 not-empty:p-2`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(Q, { className: i, "data-slot": `command-list`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ve(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`flex max-h-[inherit] min-h-0 flex-col`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(ie, { className: i, "data-slot": `command-list`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ye(e) {
  let t = (0, W.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = (0, R.jsx)(re, { className: n, "data-slot": `command-group-label`, ...r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function be(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(
        `relative min-h-0 overflow-hidden rounded-t-xl not-has-[+[data-slot=command-footer]]:rounded-b-2xl bg-transparent **:data-[slot=scroll-area-scrollbar]:mt-2 [touch-action:pan-y]`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function $(e) {
  let t = (0, W.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = (0, R.jsx)(Y, { className: n, "data-slot": `command-group`, ...r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function xe(e) {
  let t = (0, W.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = (0, R.jsx)(Z, { className: n, "data-slot": `command-group-label`, ...r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function Se(e) {
  let t = (0, W.c)(4),
    n;
  t[0] === e ? (n = t[1]) : (({ ...n } = e), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === n
      ? (r = t[3])
      : ((r = (0, R.jsx)(se, { "data-slot": `command-collection`, ...n })), (t[2] = n), (t[3] = r)),
    r
  );
}
function Ce(e) {
  let t = (0, W.c)(12),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: r, active: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a =
      n !== void 0 &&
      `cursor-pointer hover:bg-transparent hover:text-inherit data-highlighted:bg-transparent data-highlighted:text-inherit data-selected:bg-transparent data-selected:text-inherit [&[data-highlighted][data-selected]]:bg-transparent [&[data-highlighted][data-selected]]:text-inherit`,
    o = n && `bg-accent! text-accent-foreground!`,
    s;
  t[4] !== r || t[5] !== a || t[6] !== o
    ? ((s = p(
        `py-1.5 data-selected:bg-foreground/[0.06] data-highlighted:bg-foreground/[0.09] data-highlighted:text-foreground [&[data-highlighted][data-selected]]:bg-foreground/[0.09] [&[data-highlighted][data-selected]]:text-foreground`,
        a,
        o,
        r,
      )),
      (t[4] = r),
      (t[5] = a),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c = n || void 0,
    l;
  return (
    t[8] !== i || t[9] !== s || t[10] !== c
      ? ((l = (0, R.jsx)(J, { className: s, "data-active": c, "data-slot": `command-item`, ...i })),
        (t[8] = i),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function we(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`ms-auto font-medium font-sans text-secondary-label text-xs tracking-widest`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(`kbd`, { className: i, "data-slot": `command-shortcut`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Te(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(
        `relative flex items-center justify-between gap-2 rounded-b-[calc(var(--radius-2xl)-1px)] bg-foreground/[0.025] px-[var(--command-content-inset)] py-2.5 font-medium text-sm text-muted-foreground [&_[data-slot=kbd-group]]:font-sans [&_[data-slot=kbd]]:bg-foreground/[0.08] [&_[data-slot=kbd]]:text-foreground [&_[data-slot=kbd]]:ring-0`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(`div`, { className: i, "data-slot": `command-footer`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ee(e) {
  let t = (0, W.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = p(`h-auto px-2 text-xs hover:bg-transparent`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(s, { ...r, variant: `ghost-muted`, size: `xs`, className: i })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
export {
  q as S,
  G as _,
  de as a,
  J as b,
  $ as c,
  Ce as d,
  _e as f,
  we as g,
  be as h,
  me as i,
  xe as l,
  ve as m,
  Se as n,
  Te as o,
  ye as p,
  le as r,
  Ee as s,
  he as t,
  ge as u,
  ae as v,
  Q as x,
  K as y,
};
//# sourceMappingURL=command-CK0UTU7B.js.map
