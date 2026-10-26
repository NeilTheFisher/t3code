import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./mouse-pointer-2-C5HMODFm.js";
import { t as a } from "./paintbrush-8qp4voUt.js";
import { t as o } from "./plus-B20TfFan.js";
import { t as s } from "./x-Blp0Exqg.js";
import { Bn as c, Dr as l, Vn as u, Wn as d, _r as f, t as p } from "./utils-CPoejuy5.js";
import { n as m, t as h } from "./MorphIcon-DCVwjy7i.js";
import {
  C as g,
  D as _,
  G as v,
  K as y,
  M as ee,
  W as b,
  _ as te,
  d as ne,
  et as re,
  g as x,
  k as S,
  m as C,
  q as w,
  s as ie,
  u as T,
  y as E,
} from "./themePalette-CDKZ8Aa5.js";
import { i as D, n as O, r as k, t as A } from "./color-picker-CmmC9zEa.js";
import { Bs as ae, Rs as oe, as as j, es as M, rs as N, zs as P } from "./main-BZa0O6xN.js";
var F = m(),
  se = n(),
  I = e(t(), 1),
  L = (e) => (window.addEventListener(`resize`, e), () => window.removeEventListener(`resize`, e)),
  R = () => window.innerWidth,
  ce = () => window.innerHeight;
function le() {
  let e = (0, se.c)(3),
    t = (0, I.useSyncExternalStore)(L, R),
    n = (0, I.useSyncExternalStore)(L, ce),
    r;
  return (
    e[0] !== n || e[1] !== t
      ? ((r = { width: t, height: n }), (e[0] = n), (e[1] = t), (e[2] = r))
      : (r = e[2]),
    r
  );
}
var z = e(r(), 1);
function B(e) {
  return (
    {
      canvas: `Background`,
      toolbar: `Toolbar background`,
      toolbarForeground: `Toolbar text`,
      toolbarBorder: `Toolbar border`,
      toolbarControl: `Toolbar control`,
      toolbarControlForeground: `Toolbar control text`,
      toolbarControlHover: `Toolbar control hover`,
      accent: `Accent color`,
      errorForeground: `Error text`,
      errorSurface: `Error background`,
      warningForeground: `Warning text`,
      warningSurface: `Warning background`,
      updateForeground: `Update text`,
      updateSurface: `Update background`,
    }[e] || e.replace(/([A-Z])/g, ` $1`).replace(/^./, (e) => e.toUpperCase())
  );
}
function ue(e) {
  let t = b(e) ?? ``,
    n = t.length === 9 ? t.slice(7) : ``;
  return n === `ff` ? `` : n;
}
function de(e) {
  return (b(e) ?? `#000000`).slice(0, 7);
}
function fe(e) {
  let t = Number.parseInt(de(e).slice(1), 16);
  return [t >> 16, (t >> 8) & 255, t & 255];
}
function pe(e) {
  let t = e
    .trim()
    .replace(/^rgb\(\s*/i, ``)
    .replace(/\s*\)$/, ``)
    .split(/[,\s]+/)
    .filter(Boolean)
    .map(Number);
  return t.length !== 3 || t.some((e) => !Number.isInteger(e) || e < 0 || e > 255)
    ? null
    : `#${t.map((e) => e.toString(16).padStart(2, `0`)).join(``)}`;
}
function me(e) {
  return fe(e).join(`, `);
}
function V() {
  let e = null,
    t = null,
    n = () => {
      t !== null && (cancelAnimationFrame(t), (t = null));
      let n = e;
      ((e = null), n?.commit(n.color));
    };
  return {
    schedule(r, i) {
      ((e = { color: r, commit: i }),
        t === null &&
          (t = requestAnimationFrame(() => {
            ((t = null), n());
          })));
    },
    flush: n,
  };
}
function H(e) {
  let t = (0, se.c)(82),
    { label: n, value: r, committer: i, onChange: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = de(r)), (t[0] = r), (t[1] = o));
  let s = o,
    c = ue(r),
    l;
  t[2] === s ? (l = t[3]) : ((l = () => k(s)), (t[2] = s), (t[3] = l));
  let [u, d] = (0, I.useState)(l),
    [f, p] = (0, I.useState)(s),
    m;
  t[4] === s ? (m = t[5]) : ((m = () => me(s)), (t[4] = s), (t[5] = m));
  let [h, g] = (0, I.useState)(m),
    [_, v] = (0, I.useState)(!1),
    [y, ee] = (0, I.useState)(s),
    b,
    te;
  t[6] !== u.h || t[7] !== u.s || t[8] !== u.v
    ? ((b = D(u.h, u.s, u.v)),
      (te = me(b)),
      (t[6] = u.h),
      (t[7] = u.s),
      (t[8] = u.v),
      (t[9] = b),
      (t[10] = te))
    : ((b = t[9]), (te = t[10]));
  let ne = te;
  y !== s && (ee(s), _ || (p(s), g(me(s))), b !== s && d(k(s)));
  let re;
  t[11] !== c || t[12] !== i || t[13] !== a
    ? ((re = (e) => {
        d(e);
        let t = D(e.h, e.s, e.v);
        (p(t), g(me(t)), i.schedule(t + c, a));
      }),
      (t[11] = c),
      (t[12] = i),
      (t[13] = a),
      (t[14] = re))
    : (re = t[14]);
  let x = re,
    S;
  t[15] === a
    ? (S = t[16])
    : ((S = (e) => {
        if ((p(e), !/^#[0-9a-f]{6}$/i.test(e))) return;
        let t = k(e);
        (d(t), g(me(e)), a(e.toLowerCase()));
      }),
      (t[15] = a),
      (t[16] = S));
  let C = S,
    w;
  t[17] !== c || t[18] !== a
    ? ((w = (e) => {
        g(e);
        let t = pe(e);
        t && (d(k(t)), p(t), a(t + c));
      }),
      (t[17] = c),
      (t[18] = a),
      (t[19] = w))
    : (w = t[19]);
  let ie = w,
    T;
  t[20] === n
    ? (T = t[21])
    : ((T = (0, z.jsx)(`p`, {
        className: `truncate text-xs font-semibold text-foreground`,
        children: n,
      })),
      (t[20] = n),
      (t[21] = T));
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, z.jsx)(`p`, {
        className: `text-2xs text-muted-foreground`,
        children: `Choose a color`,
      })),
      (t[22] = E))
    : (E = t[22]);
  let ae;
  t[23] === T
    ? (ae = t[24])
    : ((ae = (0, z.jsxs)(`div`, { className: `min-w-0`, children: [T, E] })),
      (t[23] = T),
      (t[24] = ae));
  let oe;
  t[25] === b
    ? (oe = t[26])
    : ((oe = (0, z.jsx)(`span`, {
        className: `size-7 shrink-0 rounded-full shadow-sm`,
        style: { backgroundColor: b },
      })),
      (t[25] = b),
      (t[26] = oe));
  let j;
  t[27] !== ae || t[28] !== oe
    ? ((j = (0, z.jsxs)(`div`, {
        className: `flex items-center justify-between border-b border-border/70 px-4 py-3`,
        children: [ae, oe],
      })),
      (t[27] = ae),
      (t[28] = oe),
      (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] !== x || t[31] !== i.flush || t[32] !== u || t[33] !== n
    ? ((M = (0, z.jsx)(O, { label: n, value: u, onChange: x, onInteractionEnd: i.flush })),
      (t[30] = x),
      (t[31] = i.flush),
      (t[32] = u),
      (t[33] = n),
      (t[34] = M))
    : (M = t[34]);
  let N = `${n} hue`,
    P;
  t[35] !== x || t[36] !== u
    ? ((P = (e) => x({ ...u, h: e })), (t[35] = x), (t[36] = u), (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== i.flush || t[39] !== u.h || t[40] !== N || t[41] !== P
    ? ((F = (0, z.jsx)(A, { label: N, value: u.h, onChange: P, onInteractionEnd: i.flush })),
      (t[38] = i.flush),
      (t[39] = u.h),
      (t[40] = N),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let L;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, z.jsx)(`span`, {
        className: `px-1 text-3xs font-semibold uppercase tracking-widest text-muted-foreground`,
        children: `HEX`,
      })),
      (t[43] = L))
    : (L = t[43]);
  let R;
  t[44] === b
    ? (R = t[45])
    : ((R = (0, z.jsx)(`span`, {
        className: `size-3.5 shrink-0 rounded-full`,
        style: { backgroundColor: b },
      })),
      (t[44] = b),
      (t[45] = R));
  let ce = `${n} picker hex value`,
    le;
  t[46] !== b || t[47] !== ne
    ? ((le = () => {
        (v(!1), p(b), g(ne));
      }),
      (t[46] = b),
      (t[47] = ne),
      (t[48] = le))
    : (le = t[48]);
  let B;
  t[49] === C ? (B = t[50]) : ((B = (e) => C(e.currentTarget.value)), (t[49] = C), (t[50] = B));
  let fe;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = () => {
        v(!0);
      }),
      (t[51] = fe))
    : (fe = t[51]);
  let V;
  t[52] !== f || t[53] !== ce || t[54] !== le || t[55] !== B
    ? ((V = (0, z.jsx)(`input`, {
        "aria-label": ce,
        className: `h-8 min-w-0 flex-1 bg-transparent font-mono text-xs text-foreground outline-none`,
        onBlur: le,
        onChange: B,
        onFocus: fe,
        spellCheck: !1,
        value: f,
      })),
      (t[52] = f),
      (t[53] = ce),
      (t[54] = le),
      (t[55] = B),
      (t[56] = V))
    : (V = t[56]);
  let H;
  t[57] !== R || t[58] !== V
    ? ((H = (0, z.jsxs)(`label`, {
        className: `grid min-w-0 gap-1`,
        children: [
          L,
          (0, z.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-2 rounded-lg border border-input bg-background px-2 focus-within:border-ring`,
            children: [R, V],
          }),
        ],
      })),
      (t[57] = R),
      (t[58] = V),
      (t[59] = H))
    : (H = t[59]);
  let he;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, z.jsx)(`span`, {
        className: `px-1 text-3xs font-semibold uppercase tracking-widest text-muted-foreground`,
        children: `RGB`,
      })),
      (t[60] = he))
    : (he = t[60]);
  let ge = `${n} picker RGB value`,
    U;
  t[61] !== b || t[62] !== ne
    ? ((U = () => {
        (v(!1), p(b), g(ne));
      }),
      (t[61] = b),
      (t[62] = ne),
      (t[63] = U))
    : (U = t[63]);
  let W;
  t[64] === ie ? (W = t[65]) : ((W = (e) => ie(e.currentTarget.value)), (t[64] = ie), (t[65] = W));
  let G;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        v(!0);
      }),
      (t[66] = G))
    : (G = t[66]);
  let K;
  t[67] !== h || t[68] !== ge || t[69] !== U || t[70] !== W
    ? ((K = (0, z.jsxs)(`label`, {
        className: `grid min-w-0 gap-1`,
        children: [
          he,
          (0, z.jsx)(`span`, {
            className: `flex min-w-0 items-center rounded-lg border border-input bg-background px-2 focus-within:border-ring`,
            children: (0, z.jsx)(`input`, {
              "aria-label": ge,
              className: `h-8 min-w-0 flex-1 bg-transparent font-mono text-xs text-foreground outline-none`,
              onBlur: U,
              onChange: W,
              onFocus: G,
              spellCheck: !1,
              value: h,
            }),
          }),
        ],
      })),
      (t[67] = h),
      (t[68] = ge),
      (t[69] = U),
      (t[70] = W),
      (t[71] = K))
    : (K = t[71]);
  let q;
  t[72] !== H || t[73] !== K
    ? ((q = (0, z.jsxs)(`div`, {
        className: `grid grid-cols-[1fr_1.2fr] gap-2`,
        children: [H, K],
      })),
      (t[72] = H),
      (t[73] = K),
      (t[74] = q))
    : (q = t[74]);
  let J;
  t[75] !== M || t[76] !== F || t[77] !== q
    ? ((J = (0, z.jsxs)(`div`, { className: `grid gap-3 px-3 pb-3 pt-3`, children: [M, F, q] })),
      (t[75] = M),
      (t[76] = F),
      (t[77] = q),
      (t[78] = J))
    : (J = t[78]);
  let Y;
  return (
    t[79] !== j || t[80] !== J
      ? ((Y = (0, z.jsxs)(`div`, { className: `w-72 bg-popover`, children: [j, J] })),
        (t[79] = j),
        (t[80] = J),
        (t[81] = Y))
      : (Y = t[81]),
    Y
  );
}
function he(e) {
  let t = (0, se.c)(26),
    { label: n, value: r, onChange: i, onInteract: a } = e,
    [o] = (0, I.useState)(V),
    s;
  t[0] === o.flush ? (s = t[1]) : ((s = () => o.flush), (t[0] = o.flush), (t[1] = s));
  let l;
  (t[2] === o ? (l = t[3]) : ((l = [o]), (t[2] = o), (t[3] = l)), (0, I.useEffect)(s, l));
  let f;
  t[4] === o
    ? (f = t[5])
    : ((f = (e) => {
        e || o.flush();
      }),
      (t[4] = o),
      (t[5] = f));
  let p = `Choose ${n} color`,
    m;
  t[6] === r
    ? (m = t[7])
    : ((m = (0, z.jsx)(`span`, {
        className: `absolute inset-0 rounded-full shadow-sm`,
        style: { backgroundColor: r },
      })),
      (t[6] = r),
      (t[7] = m));
  let h;
  t[8] !== a || t[9] !== p || t[10] !== m
    ? ((h = (0, z.jsx)(d, {
        render: (0, z.jsx)(j, {
          render: (0, z.jsx)(`button`, {
            "aria-label": p,
            className: `relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full border border-foreground/30 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring`,
            onFocus: a,
            onPointerDown: a,
            type: `button`,
            children: m,
          }),
        }),
      })),
      (t[8] = a),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g = `Choose ${n} color`,
    _;
  t[12] === g
    ? (_ = t[13])
    : ((_ = (0, z.jsx)(u, { side: `top`, children: g })), (t[12] = g), (t[13] = _));
  let v;
  t[14] !== h || t[15] !== _
    ? ((v = (0, z.jsxs)(c, { children: [h, _] })), (t[14] = h), (t[15] = _), (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== o || t[18] !== n || t[19] !== i || t[20] !== r
    ? ((y = (0, z.jsx)(N, {
        align: `end`,
        padding: `none`,
        "data-theme-editor-panel": ``,
        side: `bottom`,
        sideOffset: 10,
        children: (0, z.jsx)(H, { committer: o, label: n, onChange: i, value: r }),
      })),
      (t[17] = o),
      (t[18] = n),
      (t[19] = i),
      (t[20] = r),
      (t[21] = y))
    : (y = t[21]);
  let ee;
  return (
    t[22] !== y || t[23] !== f || t[24] !== v
      ? ((ee = (0, z.jsxs)(M, { onOpenChange: f, children: [v, y] })),
        (t[22] = y),
        (t[23] = f),
        (t[24] = v),
        (t[25] = ee))
      : (ee = t[25]),
    ee
  );
}
var ge = (0, I.memo)(function (e) {
    let t = (0, se.c)(58),
      {
        role: n,
        value: r,
        onChange: i,
        onSelect: a,
        onToggleSelected: o,
        selected: s,
        label: l,
      } = e,
      m = s !== void 0 && s,
      h;
    t[0] !== l || t[1] !== n ? ((h = l ?? B(n)), (t[0] = l), (t[1] = n), (t[2] = h)) : (h = t[2]);
    let g = h,
      v;
    t[3] === r ? (v = t[4]) : ((v = _(r)), (t[3] = r), (t[4] = v));
    let y = v,
      ee = y ? r : `#000000`,
      te;
    t[5] === r
      ? (te = t[6])
      : ((te = r.trim().toLowerCase().startsWith(`oklch(`) ? (b(r) ?? r) : r),
        (t[5] = r),
        (t[6] = te));
    let ne = te,
      re = m && `bg-accent/60 inset-ring inset-ring-ring`,
      x;
    t[7] === re
      ? (x = t[8])
      : ((x = p(
          `flex min-h-11 min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 transition-[background-color,box-shadow]`,
          re,
        )),
        (t[7] = re),
        (t[8] = x));
    let S = `${m ? `Hide` : `Show`} ${g} usage`,
      C;
    t[9] !== o || t[10] !== n
      ? ((C = () => o?.(n)), (t[9] = o), (t[10] = n), (t[11] = C))
      : (C = t[11]);
    let w;
    t[12] === g
      ? (w = t[13])
      : ((w = (0, z.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: g })),
        (t[12] = g),
        (t[13] = w));
    let ie;
    t[14] !== m || t[15] !== S || t[16] !== C || t[17] !== w
      ? ((ie = (0, z.jsx)(d, {
          render: (0, z.jsx)(`button`, {
            "aria-label": S,
            "aria-pressed": m,
            className: `flex min-w-0 flex-1 cursor-pointer items-center rounded-md text-left text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
            onClick: C,
            type: `button`,
            children: w,
          }),
        })),
        (t[14] = m),
        (t[15] = S),
        (t[16] = C),
        (t[17] = w),
        (t[18] = ie))
      : (ie = t[18]);
    let T = `${m ? `Hide` : `Show`} where ${g} is used`,
      E;
    t[19] === T
      ? (E = t[20])
      : ((E = (0, z.jsx)(u, { side: `top`, children: T })), (t[19] = T), (t[20] = E));
    let D;
    t[21] !== ie || t[22] !== E
      ? ((D = (0, z.jsxs)(c, { children: [ie, E] })), (t[21] = ie), (t[22] = E), (t[23] = D))
      : (D = t[23]);
    let O;
    t[24] !== i || t[25] !== n
      ? ((O = (e) => i(n, e)), (t[24] = i), (t[25] = n), (t[26] = O))
      : (O = t[26]);
    let k;
    t[27] !== a || t[28] !== n
      ? ((k = () => a?.(n)), (t[27] = a), (t[28] = n), (t[29] = k))
      : (k = t[29]);
    let A;
    t[30] !== g || t[31] !== ee || t[32] !== O || t[33] !== k
      ? ((A = (0, z.jsx)(he, { label: g, onChange: O, onInteract: k, value: ee })),
        (t[30] = g),
        (t[31] = ee),
        (t[32] = O),
        (t[33] = k),
        (t[34] = A))
      : (A = t[34]);
    let ae = !y,
      oe = `${g} hex value`,
      j = `${n}-hex`,
      M;
    t[35] !== i || t[36] !== n
      ? ((M = (e) => i(n, e.currentTarget.value)), (t[35] = i), (t[36] = n), (t[37] = M))
      : (M = t[37]);
    let N, P;
    t[38] !== a || t[39] !== n
      ? ((N = () => a?.(n)), (P = () => a?.(n)), (t[38] = a), (t[39] = n), (t[40] = N), (t[41] = P))
      : ((N = t[40]), (P = t[41]));
    let F;
    t[42] !== ne ||
    t[43] !== ae ||
    t[44] !== oe ||
    t[45] !== j ||
    t[46] !== M ||
    t[47] !== N ||
    t[48] !== P
      ? ((F = (0, z.jsx)(f, {
          "aria-invalid": ae,
          "aria-label": oe,
          className: `w-28 shrink-0`,
          font: `mono`,
          id: j,
          nativeInput: !0,
          onChange: M,
          onFocus: N,
          onPointerDown: P,
          size: `compact`,
          value: ne,
        })),
        (t[42] = ne),
        (t[43] = ae),
        (t[44] = oe),
        (t[45] = j),
        (t[46] = M),
        (t[47] = N),
        (t[48] = P),
        (t[49] = F))
      : (F = t[49]);
    let I;
    t[50] !== A || t[51] !== F
      ? ((I = (0, z.jsxs)(`div`, {
          className: `ml-auto flex shrink-0 items-center gap-2`,
          children: [A, F],
        })),
        (t[50] = A),
        (t[51] = F),
        (t[52] = I))
      : (I = t[52]);
    let L;
    return (
      t[53] !== n || t[54] !== D || t[55] !== I || t[56] !== x
        ? ((L = (0, z.jsxs)(`div`, { className: x, "data-theme-color-role": n, children: [D, I] })),
          (t[53] = n),
          (t[54] = D),
          (t[55] = I),
          (t[56] = x),
          (t[57] = L))
        : (L = t[57]),
      L
    );
  }),
  U = [`background`, `border`, `foreground`],
  W = `data-theme-inspector-match`,
  G = `data-theme-token-probe`,
  K = `#01fea7`,
  q = `#fe01a7`,
  J = `theme-inspector-spotlight`,
  Y = `theme-inspector-spotlight-mask`,
  _e = `theme-inspector-spotlight-glow`,
  X = `theme-inspector-hover`,
  ve = `http://www.w3.org/2000/svg`,
  ye = {
    background: `canvas`,
    foreground: `text`,
    card: `surface`,
    "card-foreground": `text`,
    popover: `surfaceOverlay`,
    "popover-foreground": `text`,
    "surface-raised": `surfaceRaised`,
    primary: `messageAction`,
    "primary-foreground": `messageActionForeground`,
    secondary: `secondary`,
    "secondary-foreground": `secondaryForeground`,
    muted: `muted`,
    "muted-foreground": `mutedForeground`,
    placeholder: `placeholder`,
    "secondary-label": `secondaryLabel`,
    "icon-muted": `iconMuted`,
    accent: `accentSurface`,
    "accent-foreground": `accentSurfaceForeground`,
    destructive: `error`,
    "destructive-foreground": `errorForeground`,
    error: `error`,
    "error-foreground": `errorForeground`,
    "error-surface": `errorSurface`,
    warning: `warning`,
    "warning-foreground": `warningForeground`,
    "warning-surface": `warningSurface`,
    update: `update`,
    "update-foreground": `updateForeground`,
    "update-surface": `updateSurface`,
    message: `messageSurface`,
    "message-foreground": `messageForeground`,
    "message-action": `messageAction`,
    "message-action-foreground": `messageActionForeground`,
    "message-action-hover": `messageActionHover`,
    sidebar: `sidebar`,
    "sidebar-foreground": `sidebarForeground`,
    "sidebar-muted-foreground": `sidebarMutedForeground`,
    "sidebar-control-surface": `sidebarControlSurface`,
    "sidebar-row-hover": `sidebarRowHover`,
    "sidebar-row-active": `sidebarRowActive`,
    "sidebar-row-selected": `sidebarRowSelected`,
    "sidebar-border": `sidebarBorder`,
    border: `border`,
    input: `input`,
    ring: `focus`,
  },
  be = {
    background: [`bg-`],
    border: [`border-`, `outline-`, `ring-`],
    foreground: [`text-`, `caret-`, `fill-`, `stroke-`],
  };
function xe(e) {
  document.querySelectorAll(`[${e}]`).forEach((t) => t.removeAttribute(e));
}
function Se() {
  (xe(W), document.getElementById(J)?.remove());
}
function Ce() {
  document.getElementById(X)?.remove();
}
function Z(e) {
  return document.createElementNS(ve, e);
}
function we(e) {
  let t = e.getBoundingClientRect();
  if (
    t.width <= 0 ||
    t.height <= 0 ||
    t.right < 0 ||
    t.bottom < 0 ||
    t.left > window.innerWidth ||
    t.top > window.innerHeight
  )
    return null;
  let n = t.left - 5,
    r = t.top - 5,
    i = Number.parseFloat(window.getComputedStyle(e).borderTopLeftRadius) || 0;
  return {
    x: n,
    y: r,
    width: t.width + 10,
    height: t.height + 10,
    radius: Math.min(18, Math.max(7, i + 5)),
  };
}
function Te(e, t) {
  let n = we(e.element);
  if (!n) {
    Ce();
    return;
  }
  let r = document.getElementById(X);
  if (!r) {
    ((r = document.createElement(`div`)), (r.id = X), r.setAttribute(`aria-hidden`, `true`));
    let e = document.createElement(`span`);
    ((e.dataset.themeInspectorHoverLabel = ``), r.append(e), document.body.append(r));
  }
  ((r.style.left = `${n.x}px`),
    (r.style.top = `${n.y}px`),
    (r.style.width = `${n.width}px`),
    (r.style.height = `${n.height}px`),
    (r.style.borderRadius = `${n.radius}px`),
    (r.dataset.placement = n.y < 32 ? `below` : `above`));
  let i = r.querySelector(`[data-theme-inspector-hover-label]`);
  i && (i.textContent = t);
}
function Ee(e) {
  let t = new Map();
  for (let n of e) {
    let e = we(n);
    if (!e) continue;
    let r = [e.x, e.y, e.width, e.height].map((e) => Math.round(e)).join(`:`);
    t.set(r, e);
  }
  if (t.size === 0) {
    document.getElementById(J)?.remove();
    return;
  }
  let n = document.getElementById(J);
  (n ||
    ((n = Z(`svg`)),
    (n.id = J),
    n.setAttribute(`aria-hidden`, `true`),
    n.setAttribute(`focusable`, `false`),
    document.body.append(n)),
    n.setAttribute(`viewBox`, `0 0 ${window.innerWidth} ${window.innerHeight}`));
  let r = Z(`defs`),
    i = Z(`mask`);
  ((i.id = Y), i.setAttribute(`maskUnits`, `userSpaceOnUse`));
  let a = Z(`rect`);
  (a.setAttribute(`width`, String(window.innerWidth)),
    a.setAttribute(`height`, String(window.innerHeight)),
    a.setAttribute(`fill`, `white`),
    i.append(a));
  let o = Z(`filter`);
  ((o.id = _e),
    o.setAttribute(`x`, `-50%`),
    o.setAttribute(`y`, `-50%`),
    o.setAttribute(`width`, `200%`),
    o.setAttribute(`height`, `200%`));
  let s = Z(`feGaussianBlur`);
  (s.setAttribute(`stdDeviation`, `5`), s.setAttribute(`result`, `blur`));
  let c = Z(`feMerge`),
    l = Z(`feMergeNode`);
  l.setAttribute(`in`, `blur`);
  let u = Z(`feMergeNode`);
  (u.setAttribute(`in`, `SourceGraphic`), c.append(l, u), o.append(s, c), r.append(i, o));
  let d = Z(`g`);
  for (let e of t.values()) {
    let t = Z(`rect`);
    (t.setAttribute(`x`, String(e.x)),
      t.setAttribute(`y`, String(e.y)),
      t.setAttribute(`width`, String(e.width)),
      t.setAttribute(`height`, String(e.height)),
      t.setAttribute(`rx`, String(e.radius)),
      t.setAttribute(`fill`, `black`),
      i.append(t));
    let n = t.cloneNode(!1);
    (n.removeAttribute(`fill`),
      n.setAttribute(`class`, `theme-inspector-spotlight-glow`),
      n.setAttribute(`filter`, `url(#${_e})`),
      d.append(n));
  }
  let f = Z(`rect`);
  (f.setAttribute(`class`, `theme-inspector-spotlight-dimmer`),
    f.setAttribute(`width`, String(window.innerWidth)),
    f.setAttribute(`height`, String(window.innerHeight)),
    f.setAttribute(`mask`, `url(#${Y})`),
    n.replaceChildren(r, f, d));
}
function De() {
  Ee([...document.querySelectorAll(`[${W}]`)]);
}
function Oe(e) {
  return e.matches(`input, textarea, select, option`)
    ? !0
    : Array.from(e.childNodes).some(
        (e) => e.nodeType === Node.TEXT_NODE && !!e.textContent?.trim(),
      );
}
function ke(e, { forHitTest: t = !1 } = {}) {
  let n = window.getComputedStyle(e);
  if (n.display === `none` || n.visibility === `hidden` || Number(n.opacity) === 0) return null;
  let r = [];
  for (let [e, t, i] of [
    [n.borderTopColor, n.borderTopStyle, n.borderTopWidth],
    [n.borderRightColor, n.borderRightStyle, n.borderRightWidth],
    [n.borderBottomColor, n.borderBottomStyle, n.borderBottomWidth],
    [n.borderLeftColor, n.borderLeftStyle, n.borderLeftWidth],
  ])
    t !== `none` && Number.parseFloat(i) > 0 && r.push(e);
  (n.outlineStyle !== `none` && Number.parseFloat(n.outlineWidth) > 0 && r.push(n.outlineColor),
    n.borderImageSource !== `none` && r.push(n.borderImageSource),
    n.boxShadow !== `none` && r.push(n.boxShadow));
  let i = [];
  return (
    (t || Oe(e)) && i.push(n.color),
    e instanceof SVGElement && i.push(n.fill, n.stroke),
    e.matches(`input, textarea`) && i.push(n.caretColor),
    n.textDecorationLine !== `none` && i.push(n.textDecorationColor),
    n.textShadow !== `none` && i.push(n.textShadow),
    {
      background: [n.backgroundColor, n.backgroundImage].join(`
`),
      border: r.join(`
`),
      foreground: i.join(`
`),
    }
  );
}
function Ae(e, t) {
  return U.filter((n) => e[n] !== t[n]);
}
function je(e) {
  let t = document.documentElement,
    n = t.hasAttribute(G);
  n || t.setAttribute(G, ``);
  try {
    return e();
  } finally {
    (window.getComputedStyle(t).color, n || t.removeAttribute(G));
  }
}
function Me(e) {
  let t = document.documentElement,
    n = x(e),
    r = t.style.getPropertyValue(n),
    i = t.style.getPropertyPriority(n),
    a = r.trim().toLowerCase() === K ? q : K;
  return (
    t.style.setProperty(n, a, `important`),
    () => {
      r ? t.style.setProperty(n, r, i) : t.style.removeProperty(n);
    }
  );
}
function Q(e) {
  let t = e.map(Me);
  return () => {
    for (let e of t.toReversed()) e();
  };
}
function Ne() {
  return [document.body, ...document.body.querySelectorAll(`*`)].filter(
    (e) => !e.closest(`[data-theme-editor-panel]`) && !e.closest(`#${J}, #${X}`),
  );
}
function Pe(e, t) {
  if (e.includes(`:`)) return null;
  for (let n of be[t])
    if (e.startsWith(n)) return ye[e.slice(n.length).split(`/`, 1)[0] ?? ``] ?? null;
  return null;
}
function Fe(e) {
  for (let t of U)
    for (let n of e.classList) {
      let e = Pe(n, t);
      if (e) return e;
    }
  return null;
}
function Ie(e) {
  let t = [],
    n = e;
  for (; n && n !== document.documentElement;)
    (n.closest(`[data-theme-editor-panel]`) || t.push(n), (n = n.parentElement));
  return t;
}
function Le(e) {
  if (e.closest(`[data-theme-editor-panel]`)) return null;
  for (let t of Ie(e)) {
    let e = Fe(t);
    if (e) return { element: t, role: e };
  }
  return null;
}
function Re(e) {
  (performance.now(), xe(W));
  let t = Ne(),
    n = performance.now(),
    r = je(() => {
      let n = new Map();
      for (let e of t) {
        let t = ke(e);
        t && n.set(e, t);
      }
      let r = Q(e),
        i = new Set();
      try {
        for (let [e, t] of n) {
          let n = ke(e);
          n && Ae(t, n).length > 0 && i.add(e);
        }
      } finally {
        r();
      }
      return i;
    });
  performance.now() - n;
  let i = new Set();
  for (let e of r) i.add(e instanceof SVGElement ? (e.closest(`svg`) ?? e) : e);
  for (let e of i) e.setAttribute(W, ``);
  return (Ee([...i]), i.size);
}
function ze(e) {
  if (e.closest(`[data-theme-editor-panel]`)) return null;
  let t = Ie(e),
    n = Le(e);
  if (n) return n;
  let r = je(() => {
    let e = new Map(),
      n = new Map();
    for (let n of t) {
      let t = ke(n, { forHitTest: !0 });
      t && e.set(n, t);
    }
    for (let t of re) {
      let r = Me(t);
      try {
        for (let [r, i] of e) {
          let e = ke(r, { forHitTest: !0 });
          if (!e) continue;
          let a = n.get(r) ?? {};
          for (let n of Ae(i, e)) a[n] ??= t;
          n.set(r, a);
        }
      } finally {
        r();
      }
    }
    return n;
  });
  for (let e of t) {
    let t = r.get(e);
    if (t)
      for (let n of U) {
        let r = t[n];
        if (r) return { element: e, role: r };
      }
  }
  return null;
}
var Be = [`canvas`, `accent`],
  Ve = [
    {
      id: `foundation`,
      title: `Foundation`,
      families: [
        {
          id: `background`,
          label: `Background`,
          role: `canvas`,
          roles: [`canvas`, `chrome`, `toolbar`],
        },
        { id: `surface`, label: `Surface`, role: `surface`, roles: [`surface`] },
        {
          id: `raised-surface`,
          label: `Raised surface`,
          role: `surfaceRaised`,
          roles: [`surfaceRaised`],
        },
        { id: `overlay`, label: `Overlay`, role: `surfaceOverlay`, roles: [`surfaceOverlay`] },
        {
          id: `text`,
          label: `Text`,
          role: `text`,
          roles: [`text`, `toolbarForeground`, `toolbarControlForeground`],
        },
        {
          id: `muted-text`,
          label: `Muted text`,
          role: `mutedForeground`,
          roles: [
            `textMuted`,
            `mutedForeground`,
            `placeholder`,
            `secondaryLabel`,
            `iconMuted`,
            `sidebarMutedForeground`,
          ],
        },
        {
          id: `border`,
          label: `Border`,
          role: `border`,
          roles: [`border`, `toolbarBorder`, `sidebarBorder`],
        },
        { id: `input`, label: `Input`, role: `input`, roles: [`input`] },
      ],
    },
    {
      id: `brand-content`,
      title: `Brand & content`,
      families: [
        {
          id: `subtle-surface`,
          label: `Subtle surface`,
          role: `secondary`,
          roles: [`secondary`, `secondaryForeground`, `muted`, `toolbarControl`],
        },
        {
          id: `highlight-surface`,
          label: `Highlight surface`,
          role: `accentSurface`,
          roles: [`accentSurface`, `accentSurfaceForeground`, `toolbarControlHover`],
        },
        {
          id: `accent`,
          label: `Accent`,
          role: `accent`,
          roles: [
            `accent`,
            `accentForeground`,
            `focus`,
            `update`,
            `updateForeground`,
            `updateSurface`,
            `terminalCursor`,
          ],
        },
        {
          id: `action`,
          label: `Action`,
          role: `messageAction`,
          roles: [`messageAction`, `messageActionForeground`, `messageActionHover`],
        },
        {
          id: `message-surface`,
          label: `Message surface`,
          role: `messageSurface`,
          roles: [`messageSurface`, `messageForeground`],
        },
        {
          id: `code-surface`,
          label: `Code surface`,
          role: `codeBackground`,
          roles: [`codeBackground`, `codeForeground`],
        },
      ],
    },
    {
      id: `search`,
      title: `Search`,
      families: [
        {
          id: `search-matches`,
          label: `Search matches`,
          role: `searchMatchBackground`,
          roles: [`searchMatchBackground`, `searchMatchForeground`],
        },
        {
          id: `current-match`,
          label: `Current match`,
          role: `searchMatchActiveBackground`,
          roles: [`searchMatchActiveBackground`, `searchMatchActiveForeground`],
        },
      ],
    },
    {
      id: `context`,
      title: `Context`,
      families: [
        {
          id: `sidebar-background`,
          label: `Sidebar background`,
          role: `sidebar`,
          roles: [`sidebar`, `sidebarForeground`],
        },
        {
          id: `sidebar-controls`,
          label: `Sidebar controls`,
          role: `sidebarControlSurface`,
          roles: [`sidebarControlSurface`],
        },
        {
          id: `sidebar-selection`,
          label: `Sidebar selection`,
          role: `sidebarRowSelected`,
          roles: [`sidebarRowHover`, `sidebarRowActive`, `sidebarRowSelected`],
        },
        {
          id: `terminal-background`,
          label: `Terminal background`,
          role: `terminalBackground`,
          roles: [
            `terminalBackground`,
            `terminalForeground`,
            `terminalSelection`,
            `terminalScrollbar`,
            `terminalScrollbarHover`,
          ],
        },
      ],
    },
    {
      id: `status`,
      title: `Status`,
      families: [
        {
          id: `error`,
          label: `Error`,
          role: `error`,
          roles: [`error`, `errorForeground`, `errorSurface`],
        },
        {
          id: `warning`,
          label: `Warning`,
          role: `warning`,
          roles: [`warning`, `warningForeground`, `warningSurface`],
        },
      ],
    },
  ],
  He = Ve.flatMap((e) => e.families),
  Ue = new Map(He.flatMap((e) => e.roles.map((t) => [t, e])));
function We(e) {
  return Ue.get(e) ?? null;
}
function Ge(e) {
  return { ...C(e) };
}
function Ke() {
  return { light: Ge(`light`), dark: Ge(`dark`) };
}
function qe(e) {
  return _(e.trim());
}
function Je(e, t) {
  let n = C(e);
  return T(e, qe(t.canvas) ? t.canvas : n.canvas, qe(t.accent) ? t.accent : n.accent);
}
var Ye = 8,
  Xe = 280,
  Ze = 220;
function Qe(e, t, n, r) {
  let i = Math.max(Ye, e.width - r - Ye),
    a = Math.max(Ye, e.height - 48);
  return { x: Math.min(Math.max(t, Ye), i), y: Math.min(Math.max(n, Ye), a) };
}
var $e = () => ({ width: window.innerWidth, height: window.innerHeight });
function et(e, t) {
  try {
    ee(e.id);
  } catch (e) {
    try {
      y(t);
    } catch {}
    throw e;
  }
}
function tt(e) {
  let t = (0, se.c)(136),
    {
      open: n,
      onOpenChange: r,
      onSaved: m,
      editingTheme: _,
      initialAppearance: b,
      seedTheme: x,
      seedName: C,
      restoreTheme: T,
    } = e,
    D = _ !== null,
    [O, k] = (0, I.useState)(``),
    [A, j] = (0, I.useState)(b),
    [M, N] = (0, I.useState)(!1),
    [L, R] = (0, I.useState)(at),
    ce;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = { light: !1, dark: !1 }), (t[0] = ce))
    : (ce = t[0]);
  let [ue, de] = (0, I.useState)(ce),
    [fe, pe] = (0, I.useState)(!1),
    [me, V] = (0, I.useState)(null),
    [H, he] = (0, I.useState)(!1),
    [U, W] = (0, I.useState)(``),
    [G, K] = (0, I.useState)(!1),
    [q, J] = (0, I.useState)(null),
    [Y, _e] = (0, I.useState)(null),
    [X, ve] = (0, I.useState)(null),
    [ye, be] = (0, I.useState)(null),
    xe = (0, I.useRef)(null),
    Z = (0, I.useRef)(null),
    we = (0, I.useRef)(null),
    [Ee, Oe] = (0, I.useState)(!1);
  if (Ee !== n && (Oe(n), n)) {
    let e = _ ?? x ?? null,
      t = Ke(),
      n = e ? (te(e, b) ? b : e.appearance) : b;
    if (e) {
      t[e.appearance] = { ...e.colors };
      for (let n of [`light`, `dark`]) {
        let r = e.variants?.[n];
        r && (t[n] = { ...r });
      }
    }
    (k(_?.label ?? C ?? ``),
      j(n),
      N(e !== null && e.managed !== !0),
      de({ light: !1, dark: !1 }),
      pe(e !== null && e.managed !== !0),
      R(t),
      J(null),
      _e(null),
      K(!1),
      V(null));
  }
  let ke;
  t[1] === O ? (ke = t[2]) : ((ke = v(O)), (t[1] = O), (t[2] = ke));
  let Ae = ke,
    je;
  t[3] === O ? (je = t[4]) : ((je = O.trim().toLowerCase()), (t[3] = O), (t[4] = je));
  let Me = je,
    Q =
      Me === ``
        ? null
        : (ne().find(
            (e) => e.id !== _?.id && (e.id === Ae || e.label.trim().toLowerCase() === Me),
          ) ?? null),
    Ne = Q ? E(Q) : [],
    Pe = _ ? E(_) : null,
    Fe = (e) =>
      Pe && !Pe.includes(e)
        ? `“${_?.label}” has no ${e} palette. Create a theme with the same name to add one.`
        : !D && Ne.includes(e)
          ? `“${Q?.label}” already has a ${e} palette.`
          : null,
    Ie = D || Q === null ? null : `${Q.id}:${Ne.join(`,`)}`,
    [He, Ue] = (0, I.useState)(null);
  He !== Ie &&
    (Ue(Ie),
    Ie !== null && Ne.length === 1 && Ne.includes(A) && j(Ne[0] === `light` ? `dark` : `light`));
  let Ge, tt;
  (t[5] !== A || t[6] !== L || t[7] !== n
    ? ((Ge = () => {
        n && ie(L[A], A);
      }),
      (tt = [A, L, n]),
      (t[5] = A),
      (t[6] = L),
      (t[7] = n),
      (t[8] = Ge),
      (t[9] = tt))
    : ((Ge = t[8]), (tt = t[9])),
    (0, I.useEffect)(Ge, tt));
  let ot, st;
  (t[10] !== n || t[11] !== T
    ? ((ot = () => {
        if (n)
          return () => {
            T();
          };
      }),
      (st = [n, T]),
      (t[10] = n),
      (t[11] = T),
      (t[12] = ot),
      (t[13] = st))
    : ((ot = t[12]), (st = t[13])),
    (0, I.useEffect)(ot, st));
  let ct;
  t[14] !== A || t[15] !== M
    ? ((ct = (e, t) => {
        (R((n) => {
          let r = { ...n[A], [e]: t },
            i = !M && Be.includes(e) && qe(t);
          return { ...n, [A]: M ? w(A, n[A], e, t) : i ? Je(A, r) : r };
        }),
          !M && Be.includes(e) && qe(t) && de((e) => ({ ...e, [A]: !0 })),
          M && pe(!0));
      }),
      (t[14] = A),
      (t[15] = M),
      (t[16] = ct))
    : (ct = t[16]);
  let lt = ct,
    ut;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (e, t) => {
        let n = t !== void 0 && t,
          r = We(e)?.role ?? e;
        (J(r),
          Be.includes(r) || (N(!0), W(``)),
          n &&
            requestAnimationFrame(() => {
              xe.current
                ?.querySelector(`[data-theme-color-role="${r}"]`)
                ?.scrollIntoView({
                  behavior: window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
                    ? `auto`
                    : `smooth`,
                  block: `nearest`,
                });
            }));
      }),
      (t[17] = ut))
    : (ut = t[17]);
  let dt = ut,
    ft;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (e) => {
        J((t) => (t === e ? null : e));
      }),
      (t[18] = ft))
    : (ft = t[18]);
  let pt = ft,
    mt;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = () => {
        (J(null), _e(null), K(!1));
      }),
      (t[19] = mt))
    : (mt = t[19]);
  let ht = mt,
    gt;
  t[20] !== A || t[21] !== L || t[22] !== M || t[23] !== q
    ? ((gt = (
        q
          ? M
            ? (We(q)?.roles ?? [q])
            : Be.includes(q)
              ? re.filter((e) => L[A][e].trim().toLowerCase() === L[A][q].trim().toLowerCase())
              : [q]
          : []
      ).join(`,`)),
      (t[20] = A),
      (t[21] = L),
      (t[22] = M),
      (t[23] = q),
      (t[24] = gt))
    : (gt = t[24]);
  let _t = gt,
    vt,
    yt;
  (t[25] !== G || t[26] !== n || t[27] !== _t || t[28] !== q
    ? ((vt = () => {
        if ((Se(), !n || q === null || G)) return;
        let e = _t.split(`,`),
          t = () => _e(Re(e));
        t();
        let r = null,
          i = null,
          a = performance.now(),
          o = () => {
            if (r !== null || i !== null) return;
            let e = Math.max(0, 500 - (performance.now() - a)),
              n = () => {
                ((r = null), (i = null), (a = performance.now()), t());
              };
            e === 0 ? (r = requestAnimationFrame(n)) : (i = setTimeout(n, e));
          },
          s = new MutationObserver((e) => {
            e.every(it) || o();
          });
        s.observe(document.body, { childList: !0, subtree: !0 });
        let c = null,
          l = () => {
            c === null &&
              (c = requestAnimationFrame(() => {
                ((c = null), De());
              }));
          };
        return (
          window.addEventListener(`resize`, l),
          window.addEventListener(`scroll`, l, !0),
          () => {
            (s.disconnect(),
              r !== null && cancelAnimationFrame(r),
              i !== null && clearTimeout(i),
              c !== null && cancelAnimationFrame(c),
              window.removeEventListener(`resize`, l),
              window.removeEventListener(`scroll`, l, !0),
              Se(),
              _e(null));
          }
        );
      }),
      (yt = [G, n, _t, q]),
      (t[25] = G),
      (t[26] = n),
      (t[27] = _t),
      (t[28] = q),
      (t[29] = vt),
      (t[30] = yt))
    : ((vt = t[29]), (yt = t[30])),
    (0, I.useEffect)(vt, yt));
  let bt, xt;
  (t[31] !== G || t[32] !== n
    ? ((bt = () => {
        if (!n || !G) {
          Ce();
          return;
        }
        let e = !1,
          t = null,
          r = null,
          i = null,
          a = null,
          o = () => {
            i !== null && (window.clearTimeout(i), (i = null));
          },
          s = () => {
            (o(), (t = null), (r = null), Ce());
          },
          c = (e) => {
            ((r = e), Te(e, We(e.role)?.label ?? B(e.role)));
          },
          l = (e) => {
            let n = e.target;
            if (!(n instanceof Element) || n.closest(`[data-theme-editor-panel]`)) {
              s();
              return;
            }
            (o(), (t = n), (r = null));
            let a = Le(n);
            a
              ? c(a)
              : (Ce(),
                (i = window.setTimeout(() => {
                  if (((i = null), t !== n || !n.isConnected)) return;
                  let e = ze(n);
                  e && c(e);
                }, 140)));
          },
          u = (e) => {
            e.relatedTarget === null && s();
          },
          d = (n) => {
            let i = n.target;
            if (!(i instanceof Element) || i.closest(`[data-theme-editor-panel]`)) return;
            (n.preventDefault(), n.stopPropagation(), o());
            let a = t === i && r ? r : ze(i);
            a && (s(), dt(a.role, !0), (e = !0));
          },
          f = (t) => {
            let n = t.target;
            n instanceof Element &&
              !n.closest(`[data-theme-editor-panel]`) &&
              (t.preventDefault(), t.stopPropagation(), e && K(!1), (e = !1));
          },
          p = (e) => {
            e.key === `Escape` && (e.preventDefault(), s(), ht());
          },
          m = () => {
            r &&
              a === null &&
              (a = requestAnimationFrame(() => {
                ((a = null), r && Te(r, We(r.role)?.label ?? B(r.role)));
              }));
          },
          h = () => s();
        return (
          document.addEventListener(`pointerover`, l, !0),
          document.addEventListener(`pointerout`, u, !0),
          document.addEventListener(`pointerdown`, d, !0),
          document.addEventListener(`click`, f, !0),
          document.addEventListener(`keydown`, p, !0),
          window.addEventListener(`resize`, m),
          window.addEventListener(`scroll`, h, !0),
          () => {
            (document.removeEventListener(`pointerover`, l, !0),
              document.removeEventListener(`pointerout`, u, !0),
              document.removeEventListener(`pointerdown`, d, !0),
              document.removeEventListener(`click`, f, !0),
              document.removeEventListener(`keydown`, p, !0),
              window.removeEventListener(`resize`, m),
              window.removeEventListener(`scroll`, h, !0),
              o(),
              a !== null && cancelAnimationFrame(a),
              Ce());
          }
        );
      }),
      (xt = [ht, G, n, dt]),
      (t[31] = G),
      (t[32] = n),
      (t[33] = bt),
      (t[34] = xt))
    : ((bt = t[33]), (xt = t[34])),
    (0, I.useEffect)(bt, xt));
  let St;
  t[35] !== A || t[36] !== _ || t[37] !== q || t[38] !== fe
    ? ((St = (e) => {
        if ((N(e), e || (q && !Be.includes(q) && J(null), !fe))) return;
        let t = _ && E(_).length > 1 ? [`light`, `dark`] : [A];
        (de((e) => {
          let n = { ...e };
          for (let e of t) n[e] = !0;
          return n;
        }),
          R((e) => {
            let n = { ...e };
            for (let r of t) n[r] = Je(r, e[r]);
            return n;
          }),
          pe(!1));
      }),
      (t[35] = A),
      (t[36] = _),
      (t[37] = q),
      (t[38] = fe),
      (t[39] = St))
    : (St = t[39]);
  let Ct = St,
    wt = () => {
      if (!O.trim()) V(`Name your theme first.`);
      else
        try {
          let e = M
              ? L
              : {
                  light: ue.light ? Je(`light`, L.light) : L.light,
                  dark: ue.dark ? Je(`dark`, L.dark) : L.dark,
                },
            t,
            n = null,
            i = null;
          if (_ && Q) {
            let r = E(_),
              a = r.find((e) => Ne.includes(e));
            if (a) {
              V(`“${Q.label}” already has a ${a} palette. Pick another name.`);
              return;
            }
            ((n = r[0] ?? null),
              (t = y({
                ...S({
                  version: 1,
                  id: Q.id,
                  name: Q.label,
                  appearance: Q.appearance,
                  colors: Q.colors,
                  variants: { ...Q.variants, ...Object.fromEntries(r.map((t) => [t, e[t]])) },
                  ...(Q.managed === !0 && !M ? { managed: !0 } : {}),
                }),
                ...(Q.collection ? { collection: Q.collection } : {}),
              })),
              (i = _),
              et(_, Q));
          } else if (_) {
            let n = _.appearance,
              r = n === `light` ? `dark` : `light`;
            t = y({
              ...S({
                version: 1,
                id: _.id,
                name: O,
                appearance: n,
                colors: e[n],
                ...(E(_).length > 1 ? { variants: { [r]: e[r] } } : {}),
                ...(M ? {} : { managed: !0 }),
              }),
              ...(_.collection ? { collection: _.collection } : {}),
            });
          } else if (Q) {
            if (Ne.includes(A)) {
              V(`“${Q.label}” already has light and dark palettes. Pick another name.`);
              return;
            }
            ((n = A),
              (t = y({
                ...S({
                  version: 1,
                  id: Q.id,
                  name: Q.label,
                  appearance: Q.appearance,
                  colors: Q.colors,
                  variants: { ...Q.variants, [A]: e[A] },
                  ...(Q.managed === !0 && !M ? { managed: !0 } : {}),
                }),
                ...(Q.collection ? { collection: Q.collection } : {}),
              })));
          } else
            t = g(
              S({
                version: 1,
                name: O,
                appearance: A,
                colors: e[A],
                ...(M ? {} : { managed: !0 }),
              }),
            );
          if (!m(t, { created: _ === null && n === null, ...(n ? { mergedAppearance: n } : {}) })) {
            if (!_ && n === null)
              try {
                ee(t.id);
              } catch {}
            else if (Q && n !== null)
              try {
                (y(Q), i && g(i));
              } catch {}
            V(`Theme saved, but it could not be made active. Try again.`);
            return;
          }
          r(!1);
        } catch (e) {
          let t = e;
          V(
            t instanceof Error
              ? t.message
              : D
                ? `Could not save the theme.`
                : `Could not create the theme.`,
          );
        }
    },
    Tt;
  t[40] !== D || t[41] !== O
    ? ((Tt = () =>
        (0, z.jsxs)(`label`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-center gap-3`,
          children: [
            (0, z.jsx)(`span`, { className: `text-sm font-medium`, children: `Theme name` }),
            (0, z.jsx)(f, {
              autoFocus: !0,
              size: `sm`,
              onChange: (e) => {
                (k(e.currentTarget.value), V(null));
              },
              placeholder: D ? `Theme name` : `e.g. Aurora`,
              value: O,
            }),
          ],
        })),
      (t[40] = D),
      (t[41] = O),
      (t[42] = Tt))
    : (Tt = t[42]);
  let Et = Tt,
    Dt = (e) => {
      let t = Fe(e),
        n = (0, z.jsx)(P, {
          "aria-disabled": t !== null,
          value: e,
          children: e === `light` ? `Light` : `Dark`,
        });
      return t === null
        ? n
        : (0, z.jsxs)(c, {
            children: [(0, z.jsx)(d, { render: n }), (0, z.jsx)(u, { children: t })],
          });
    },
    Ot = () =>
      (0, z.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-center gap-3`,
        children: [
          (0, z.jsx)(`span`, { className: `text-sm font-medium`, children: `Appearance` }),
          (0, z.jsxs)(ae, {
            "aria-label": `Theme appearance`,
            variant: `segmented`,
            value: [A],
            onValueChange: (e) => {
              let t = e[0];
              (t === `light` || t === `dark`) && Fe(t) === null && j(t);
            },
            children: [Dt(`light`), Dt(`dark`)],
          }),
        ],
      }),
    kt;
  t[43] !== Ct || t[44] !== M || t[45] !== U
    ? ((kt = () =>
        (0, z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start gap-3`,
          children: [
            (0, z.jsxs)(`div`, {
              children: [
                (0, z.jsx)(`h3`, { className: `text-sm font-medium`, children: `Colors` }),
                M
                  ? null
                  : (0, z.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Two colors, rest derived`,
                    }),
              ],
            }),
            (0, z.jsxs)(`div`, {
              className: `flex min-w-0 items-start gap-3`,
              children: [
                M
                  ? (0, z.jsx)(f, {
                      "aria-label": `Filter colors`,
                      className: `min-w-0 flex-1`,
                      onChange: (e) => W(e.currentTarget.value),
                      placeholder: `Filter colors`,
                      size: `sm`,
                      value: U,
                    })
                  : null,
                (0, z.jsxs)(`label`, {
                  className: `ml-auto flex shrink-0 cursor-pointer items-center gap-2 pt-0.5 text-sm font-medium`,
                  children: [
                    (0, z.jsx)(`span`, { children: `Advanced` }),
                    (0, z.jsx)(oe, {
                      "aria-label": `Use advanced theme colors`,
                      checked: M,
                      onCheckedChange: (e) => Ct(!!e),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
      (t[43] = Ct),
      (t[44] = M),
      (t[45] = U),
      (t[46] = kt))
    : (kt = t[46]);
  let At = kt,
    jt;
  t[47] !== A || t[48] !== L || t[49] !== q || t[50] !== lt
    ? ((jt = (e, t) =>
        (0, z.jsx)(`div`, {
          className: t === void 0 ? `grid gap-2 sm:grid-cols-2` : t,
          children: e.map((e) =>
            (0, z.jsx)(
              ge,
              {
                label: e.label,
                onChange: lt,
                onSelect: dt,
                onToggleSelected: pt,
                role: e.role,
                selected: q === e.role,
                value: L[A][e.role],
              },
              e.id,
            ),
          ),
        })),
      (t[47] = A),
      (t[48] = L),
      (t[49] = q),
      (t[50] = lt),
      (t[51] = jt))
    : (jt = t[51]);
  let Mt = jt,
    Nt;
  t[52] !== A ||
  t[53] !== L ||
  t[54] !== M ||
  t[55] !== Mt ||
  t[56] !== U ||
  t[57] !== q ||
  t[58] !== lt
    ? ((Nt = () => {
        let e = U.trim().toLowerCase(),
          t = Ve.map((t) => ({
            ...t,
            families: t.families.filter(
              (t) => !e || [t.label, ...t.roles.map(rt)].join(` `).toLowerCase().includes(e),
            ),
          })).filter(nt);
        return M
          ? (0, z.jsxs)(`div`, {
              className: `space-y-5`,
              children: [
                t.map((e) =>
                  (0, z.jsxs)(
                    `section`,
                    {
                      className: `space-y-2`,
                      children: [
                        (0, z.jsx)(`h4`, {
                          className: `text-sm font-medium text-foreground`,
                          children: e.title,
                        }),
                        Mt(e.families, `grid gap-1`),
                      ],
                    },
                    e.id,
                  ),
                ),
                t.length === 0
                  ? (0, z.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `No matches.`,
                    })
                  : null,
              ],
            })
          : (0, z.jsx)(`div`, {
              className: `grid gap-1`,
              children: Be.map((e) =>
                (0, z.jsx)(
                  ge,
                  {
                    onChange: lt,
                    onSelect: dt,
                    onToggleSelected: pt,
                    role: e,
                    label: e === `canvas` ? `Background` : `Accent`,
                    selected: q === e,
                    value: L[A][e],
                  },
                  e,
                ),
              ),
            });
      }),
      (t[52] = A),
      (t[53] = L),
      (t[54] = M),
      (t[55] = Mt),
      (t[56] = U),
      (t[57] = q),
      (t[58] = lt),
      (t[59] = Nt))
    : (Nt = t[59]);
  let Pt = Nt,
    Ft = le(),
    It;
  t[60] !== ye || t[61] !== Ft
    ? ((It = ye && {
        width: Math.max(Xe, Math.min(ye.width, Ft.width - 16)),
        height: Math.max(Ze, Math.min(ye.height, Ft.height - 16)),
      }),
      (t[60] = ye),
      (t[61] = Ft),
      (t[62] = It))
    : (It = t[62]);
  let $ = It,
    Lt;
  t[63] !== X || t[64] !== $?.width || t[65] !== Ft
    ? ((Lt = X && Qe(Ft, X.x, X.y, $?.width ?? X.width)),
      (t[63] = X),
      (t[64] = $?.width),
      (t[65] = Ft),
      (t[66] = Lt))
    : (Lt = t[66]);
  let Rt = Lt,
    zt;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (e) => {
        if (e.target.closest(`button, input, a`)) return;
        let t = xe.current?.getBoundingClientRect();
        t &&
          ((Z.current = { dx: e.clientX - t.x, dy: e.clientY - t.y, width: t.width }),
          e.currentTarget.setPointerCapture(e.pointerId));
      }),
      (t[67] = zt))
    : (zt = t[67]);
  let Bt = zt,
    Vt;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = (e) => {
        let t = Z.current;
        if (!t) return;
        let n = Qe($e(), e.clientX - t.dx, e.clientY - t.dy, t.width);
        ve({ ...n, width: t.width });
      }),
      (t[68] = Vt))
    : (Vt = t[68]);
  let Ht = Vt,
    Ut;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ut = () => {
        Z.current = null;
      }),
      (t[69] = Ut))
    : (Ut = t[69]);
  let Wt = Ut,
    Gt;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gt = (e) => {
        let t = xe.current?.getBoundingClientRect();
        if (!t) return;
        e.preventDefault();
        let n = Qe($e(), t.x, t.y, t.width);
        (ve({ ...n, width: t.width }),
          (we.current = {
            pointerX: e.clientX,
            pointerY: e.clientY,
            left: t.x,
            top: t.y,
            width: t.width,
            height: t.height,
          }),
          e.currentTarget.setPointerCapture(e.pointerId));
      }),
      (t[70] = Gt))
    : (Gt = t[70]);
  let Kt = Gt,
    qt;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qt = (e) => {
        let t = we.current;
        if (!t) return;
        let n = Math.max(Xe, window.innerWidth - Ye - t.left),
          r = Math.max(Ze, window.innerHeight - Ye - t.top);
        be({
          width: Math.min(Math.max(t.width + e.clientX - t.pointerX, Xe), n),
          height: Math.min(Math.max(t.height + e.clientY - t.pointerY, Ze), r),
        });
      }),
      (t[71] = qt))
    : (qt = t[71]);
  let Jt = qt,
    Yt;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = () => {
        we.current = null;
      }),
      (t[72] = Yt))
    : (Yt = t[72]);
  let Xt = Yt,
    Zt = D ? `Edit theme` : `Create theme`,
    Qt = X === null && `bottom-4 right-4`,
    $t = H && `max-h-none`,
    en;
  t[73] !== Qt || t[74] !== $t
    ? ((en = p(
        `dialog-glass fixed z-[110] flex max-h-[min(42rem,calc(100dvh-6rem))] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border text-popover-foreground`,
        Qt,
        $t,
      )),
      (t[73] = Qt),
      (t[74] = $t),
      (t[75] = en))
    : (en = t[75]);
  let tn;
  t[76] === Rt
    ? (tn = t[77])
    : ((tn = Rt ? { left: Rt.x, top: Rt.y } : {}), (t[76] = Rt), (t[77] = tn));
  let nn;
  t[78] === $ ? (nn = t[79]) : ((nn = $ ? { width: $.width } : {}), (t[78] = $), (t[79] = nn));
  let rn;
  t[80] !== H || t[81] !== $
    ? ((rn = $ && !H ? { height: $.height, maxHeight: `calc(100dvh - 1rem)` } : {}),
      (t[80] = H),
      (t[81] = $),
      (t[82] = rn))
    : (rn = t[82]);
  let an;
  t[83] !== tn || t[84] !== nn || t[85] !== rn
    ? ((an = { ...tn, ...nn, ...rn }), (t[83] = tn), (t[84] = nn), (t[85] = rn), (t[86] = an))
    : (an = t[86]);
  let on = D ? `Edit theme` : `Create theme`,
    sn;
  t[87] === on
    ? (sn = t[88])
    : ((sn = (0, z.jsx)(`h2`, {
        className: `shrink-0 truncate text-sm font-medium`,
        children: on,
      })),
      (t[87] = on),
      (t[88] = sn));
  let cn;
  t[89] !== M || t[90] !== G || t[91] !== H || t[92] !== q || t[93] !== Y
    ? ((cn = H
        ? null
        : (0, z.jsx)(`p`, {
            className: `truncate text-xs text-muted-foreground`,
            children: G
              ? `Select an element · Esc to cancel`
              : q
                ? `${M ? (We(q)?.label ?? B(q)) : B(q)} · ${Y ?? 0} ${Y === 1 ? `use` : `uses`}`
                : `Select a color below`,
          })),
      (t[89] = M),
      (t[90] = G),
      (t[91] = H),
      (t[92] = q),
      (t[93] = Y),
      (t[94] = cn))
    : (cn = t[94]);
  let ln;
  t[95] !== sn || t[96] !== cn
    ? ((ln = (0, z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-baseline gap-2`,
        children: [sn, cn],
      })),
      (t[95] = sn),
      (t[96] = cn),
      (t[97] = ln))
    : (ln = t[97]);
  let un = G ? `Cancel inspecting app colors` : `Inspect app colors`,
    dn = G ? `secondary` : `ghost`,
    fn;
  t[98] === G
    ? (fn = t[99])
    : ((fn = () => {
        G ? ht() : K(!0);
      }),
      (t[98] = G),
      (t[99] = fn));
  let pn;
  t[100] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pn = (0, z.jsx)(i, {})), (t[100] = pn))
    : (pn = t[100]);
  let mn = G ? `Cancel` : `Inspect`,
    hn;
  t[101] !== G || t[102] !== un || t[103] !== dn || t[104] !== fn || t[105] !== mn
    ? ((hn = (0, z.jsx)(d, {
        render: (0, z.jsxs)(l, {
          "aria-label": un,
          "aria-pressed": G,
          size: `xs`,
          variant: dn,
          onClick: fn,
          children: [pn, mn],
        }),
      })),
      (t[101] = G),
      (t[102] = un),
      (t[103] = dn),
      (t[104] = fn),
      (t[105] = mn),
      (t[106] = hn))
    : (hn = t[106]);
  let gn = G ? `Cancel and clear the selection` : `Pick a color from the app`,
    _n;
  t[107] === gn
    ? (_n = t[108])
    : ((_n = (0, z.jsx)(u, { "data-theme-editor-panel": ``, children: gn })),
      (t[107] = gn),
      (t[108] = _n));
  let vn;
  t[109] !== hn || t[110] !== _n
    ? ((vn = (0, z.jsxs)(c, { children: [hn, _n] })), (t[109] = hn), (t[110] = _n), (t[111] = vn))
    : (vn = t[111]);
  let yn = H ? `Expand the theme editor` : `Minimize the theme editor`,
    bn;
  t[112] === H ? (bn = t[113]) : ((bn = () => he(!H)), (t[112] = H), (t[113] = bn));
  let xn = H ? F.ChevronUp : F.ChevronDown,
    Sn;
  t[114] === xn
    ? (Sn = t[115])
    : ((Sn = (0, z.jsx)(h, { icon: xn })), (t[114] = xn), (t[115] = Sn));
  let Cn;
  t[116] !== yn || t[117] !== bn || t[118] !== Sn
    ? ((Cn = (0, z.jsx)(l, {
        "aria-label": yn,
        size: `icon-xs`,
        variant: `ghost`,
        onClick: bn,
        children: Sn,
      })),
      (t[116] = yn),
      (t[117] = bn),
      (t[118] = Sn),
      (t[119] = Cn))
    : (Cn = t[119]);
  let wn;
  t[120] === r ? (wn = t[121]) : ((wn = () => r(!1)), (t[120] = r), (t[121] = wn));
  let Tn;
  t[122] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tn = (0, z.jsx)(s, {})), (t[122] = Tn))
    : (Tn = t[122]);
  let En;
  t[123] === wn
    ? (En = t[124])
    : ((En = (0, z.jsx)(l, {
        "aria-label": `Close the theme editor`,
        size: `icon-xs`,
        variant: `ghost`,
        onClick: wn,
        children: Tn,
      })),
      (t[123] = wn),
      (t[124] = En));
  let Dn;
  t[125] !== ln || t[126] !== vn || t[127] !== Cn || t[128] !== En
    ? ((Dn = (0, z.jsxs)(`div`, {
        className: `flex cursor-grab touch-none select-none items-center gap-1 border-b border-border/70 px-3 py-2 active:cursor-grabbing`,
        onPointerCancel: Wt,
        onPointerDown: Bt,
        onPointerMove: Ht,
        onPointerUp: Wt,
        children: [ln, vn, Cn, En],
      })),
      (t[125] = ln),
      (t[126] = vn),
      (t[127] = Cn),
      (t[128] = En),
      (t[129] = Dn))
    : (Dn = t[129]);
  let On = H
      ? null
      : (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsxs)(`div`, {
              className: `min-h-0 flex-1 space-y-3 overflow-y-auto py-3 pl-3 pr-1.5`,
              children: [
                Et(),
                me
                  ? (0, z.jsx)(`p`, {
                      "aria-live": `polite`,
                      className: `text-sm text-destructive`,
                      children: me,
                    })
                  : null,
                Ot(),
                (0, z.jsxs)(`div`, { className: `space-y-3`, children: [At(), Pt()] }),
              ],
            }),
            (0, z.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2 border-t border-border/70 px-3 py-2`,
              children: [
                (0, z.jsx)(l, {
                  size: `sm`,
                  variant: `ghost`,
                  onClick: () => r(!1),
                  children: `Cancel`,
                }),
                (0, z.jsx)(l, {
                  disabled: !O.trim(),
                  size: `sm`,
                  onClick: wt,
                  children: D
                    ? Q
                      ? `Merge into “${Q.label}”`
                      : `Save changes`
                    : Q
                      ? (0, z.jsxs)(z.Fragment, {
                          children: [(0, z.jsx)(o, {}), `Add ${A} palette`],
                        })
                      : (0, z.jsxs)(z.Fragment, { children: [(0, z.jsx)(a, {}), `Create theme`] }),
                }),
              ],
            }),
            (0, z.jsx)(`div`, {
              "aria-hidden": !0,
              className: `absolute bottom-0 right-0 z-10 flex size-5 cursor-se-resize touch-none select-none items-end justify-end p-1 text-muted-foreground/70`,
              onPointerCancel: Xt,
              onPointerDown: Kt,
              onPointerMove: Jt,
              onPointerUp: Xt,
              children: (0, z.jsx)(`svg`, {
                className: `size-2.5`,
                fill: `none`,
                stroke: `currentColor`,
                strokeLinecap: `round`,
                strokeWidth: `1.2`,
                viewBox: `0 0 8 8`,
                children: (0, z.jsx)(`path`, { d: `M7 1 1 7M7 4.5 4.5 7` }),
              }),
            }),
          ],
        }),
    kn;
  return (
    t[130] !== Zt || t[131] !== en || t[132] !== an || t[133] !== Dn || t[134] !== On
      ? ((kn = (0, z.jsxs)(`div`, {
          "aria-label": Zt,
          className: en,
          "data-theme-editor-panel": !0,
          ref: xe,
          role: `dialog`,
          style: an,
          children: [Dn, On],
        })),
        (t[130] = Zt),
        (t[131] = en),
        (t[132] = an),
        (t[133] = Dn),
        (t[134] = On),
        (t[135] = kn))
      : (kn = t[135]),
    kn
  );
}
function nt(e) {
  return e.families.length > 0;
}
function rt(e) {
  return B(e);
}
function it(e) {
  return (
    e.target instanceof Element &&
    (e.target.closest(`#theme-inspector-spotlight`) ||
      e.target.closest(`[data-theme-editor-panel]`))
  );
}
function at() {
  return Ke();
}
export { tt as ThemeEditorPanel };
//# sourceMappingURL=ThemeEditorPanel-G-Q8EAfW.js.map
