import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { Ay as i, Lc as a, Op as o, Um as s, _r as c, zm as l } from "./utils-CPoejuy5.js";
import { a as u, c as d, o as f, s as p, t as m } from "./select-CBCDohvC.js";
import { K as h } from "./useSettings-N-JG2LFZ.js";
import {
  a as g,
  c as _,
  i as v,
  n as ee,
  o as te,
  r as y,
  s as ne,
  t as b,
} from "./FontFamilyPicker-boEpB1n_.js";
import { l as x } from "./settingsSearch-CrEaqXdW.js";
import {
  Jo as S,
  Ko as re,
  Rs as C,
  Uo as ie,
  Ur as w,
  Vo as ae,
  Wo as oe,
  ba as se,
  qo as T,
  va as E,
} from "./main-BZa0O6xN.js";
import {
  a as D,
  d as ce,
  g as O,
  i as le,
  r as k,
  s as A,
  y as j,
} from "./settingsLayout-2i87rQY9.js";
var M = n(),
  N = e(t(), 1),
  P = e(r(), 1);
function F() {
  let e = (0, M.c)(7),
    t = O(),
    [n] = (0, N.useState)(ue),
    r;
  e[0] !== n.sans || e[1] !== t.fontFamilySans
    ? ((r = t.fontFamilySans.trim() || n.sans),
      (e[0] = n.sans),
      (e[1] = t.fontFamilySans),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] !== n.code || e[4] !== n.sans || e[5] !== r
      ? ((i = { sans: n.sans, code: n.code, interfaceFamily: r }),
        (e[3] = n.code),
        (e[4] = n.sans),
        (e[5] = r),
        (e[6] = i))
      : (i = e[6]),
    i
  );
}
function ue() {
  return {
    sans:
      re(
        `-apple-system, BlinkMacSystemFont, "Inter Variable", "Segoe UI", system-ui, sans-serif`,
      ) ?? `System default`,
    code:
      re(`"SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace`) ??
      `System monospace`,
  };
}
function I(e) {
  let t = (0, M.c)(18),
    { preview: n } = e,
    r = O(),
    i = j(),
    a = F(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = x(`interface-font`)), (t[0] = o))
    : (o = t[0]);
  let c, l;
  t[1] === i
    ? ((c = t[2]), (l = t[3]))
    : ((c = (e) => i({ fontFamilySans: e })),
      (l = () => i({ fontFamilySans: s.fontFamilySans, fontSizeInterface: s.fontSizeInterface })),
      (t[1] = i),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] === i ? (u = t[5]) : ((u = (e) => i({ fontSizeInterface: e })), (t[4] = i), (t[5] = u));
  let d;
  t[6] !== r.fontSizeInterface || t[7] !== u
    ? ((d = {
        label: `Interface font size`,
        min: 12,
        max: 20,
        value: r.fontSizeInterface,
        defaultValue: s.fontSizeInterface,
        onChange: u,
      }),
      (t[6] = r.fontSizeInterface),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n ? (f = t[10]) : ((f = n === void 0 ? {} : { preview: n }), (t[9] = n), (t[10] = f));
  let p;
  return (
    t[11] !== a.sans ||
    t[12] !== r.fontFamilySans ||
    t[13] !== c ||
    t[14] !== l ||
    t[15] !== d ||
    t[16] !== f
      ? ((p = (0, P.jsx)(V, {
          ...o,
          description: `Everything outside code blocks and the terminal.`,
          defaultFamily: a.sans,
          defaultValue: s.fontFamilySans,
          value: r.fontFamilySans,
          onValueChange: c,
          onReset: l,
          size: d,
          ...f,
        })),
        (t[11] = a.sans),
        (t[12] = r.fontFamilySans),
        (t[13] = c),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function L() {
  let e = (0, M.c)(16),
    t = O(),
    n = j(),
    r = F(),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = x(`prompt-font`)), (e[0] = i))
    : (i = e[0]);
  let a, o;
  e[1] === n
    ? ((a = e[2]), (o = e[3]))
    : ((a = (e) => n({ fontFamilyComposer: e })),
      (o = () => n({ fontFamilyComposer: s.fontFamilyComposer, fontSizePrompt: s.fontSizePrompt })),
      (e[1] = n),
      (e[2] = a),
      (e[3] = o));
  let c;
  e[4] === n ? (c = e[5]) : ((c = (e) => n({ fontSizePrompt: e })), (e[4] = n), (e[5] = c));
  let l;
  e[6] !== t.fontSizePrompt || e[7] !== c
    ? ((l = {
        label: `Prompt font size`,
        min: 12,
        max: 20,
        value: t.fontSizePrompt,
        defaultValue: s.fontSizePrompt,
        onChange: c,
      }),
      (e[6] = t.fontSizePrompt),
      (e[7] = c),
      (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, P.jsx)(g, {})), (e[9] = u))
    : (u = e[9]);
  let d;
  return (
    e[10] !== r.interfaceFamily ||
    e[11] !== t.fontFamilyComposer ||
    e[12] !== a ||
    e[13] !== o ||
    e[14] !== l
      ? ((d = (0, P.jsx)(V, {
          ...i,
          description: `Only the box you write prompts in. Mono works well here.`,
          defaultFamily: r.interfaceFamily,
          defaultValue: s.fontFamilyComposer,
          value: t.fontFamilyComposer,
          onValueChange: a,
          onReset: o,
          size: l,
          preview: u,
        })),
        (e[10] = r.interfaceFamily),
        (e[11] = t.fontFamilyComposer),
        (e[12] = a),
        (e[13] = o),
        (e[14] = l),
        (e[15] = d))
      : (d = e[15]),
    d
  );
}
function R(e) {
  let t = (0, M.c)(22),
    { title: n, description: r, preview: i } = e,
    a = r === void 0 ? `Code blocks, diffs, and file previews.` : r,
    o = O(),
    c = j(),
    l = F(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = x(`code-font`)), (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === n ? (d = t[2]) : ((d = n === void 0 ? {} : { title: n }), (t[1] = n), (t[2] = d));
  let f, p;
  t[3] === c
    ? ((f = t[4]), (p = t[5]))
    : ((f = (e) => c({ fontFamilyCode: e })),
      (p = () => c({ fontFamilyCode: s.fontFamilyCode, fontSizeCode: s.fontSizeCode })),
      (t[3] = c),
      (t[4] = f),
      (t[5] = p));
  let m;
  t[6] === c ? (m = t[7]) : ((m = (e) => c({ fontSizeCode: e })), (t[6] = c), (t[7] = m));
  let h;
  t[8] !== o.fontSizeCode || t[9] !== m
    ? ((h = {
        label: `Code font size`,
        min: 10,
        max: 18,
        value: o.fontSizeCode,
        defaultValue: s.fontSizeCode,
        onChange: m,
      }),
      (t[8] = o.fontSizeCode),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === i ? (g = t[12]) : ((g = i ?? (0, P.jsx)(v, {})), (t[11] = i), (t[12] = g));
  let _;
  return (
    t[13] !== l.code ||
    t[14] !== a ||
    t[15] !== o.fontFamilyCode ||
    t[16] !== d ||
    t[17] !== f ||
    t[18] !== p ||
    t[19] !== h ||
    t[20] !== g
      ? ((_ = (0, P.jsx)(V, {
          ...u,
          ...d,
          description: a,
          defaultFamily: l.code,
          defaultValue: s.fontFamilyCode,
          value: o.fontFamilyCode,
          onValueChange: f,
          onReset: p,
          requireMonospace: !0,
          size: h,
          preview: g,
        })),
        (t[13] = l.code),
        (t[14] = a),
        (t[15] = o.fontFamilyCode),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function z() {
  let e = (0, M.c)(22),
    t = O(),
    n = j(),
    r = F(),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = x(`terminal-font`)), (e[0] = i))
    : (i = e[0]);
  let a = r.code,
    o = t.fontFamilyTerminal,
    c,
    l;
  e[1] === n
    ? ((c = e[2]), (l = e[3]))
    : ((c = (e) => n({ fontFamilyTerminal: e })),
      (l = () =>
        n({ fontFamilyTerminal: s.fontFamilyTerminal, fontSizeTerminal: s.fontSizeTerminal })),
      (e[1] = n),
      (e[2] = c),
      (e[3] = l));
  let u;
  e[4] === n ? (u = e[5]) : ((u = (e) => n({ fontSizeTerminal: e })), (e[4] = n), (e[5] = u));
  let d;
  e[6] !== t.fontSizeTerminal || e[7] !== u
    ? ((d = {
        label: `Terminal font size`,
        min: 8,
        max: 20,
        value: t.fontSizeTerminal,
        defaultValue: s.fontSizeTerminal,
        onChange: u,
      }),
      (e[6] = t.fontSizeTerminal),
      (e[7] = u),
      (e[8] = d))
    : (d = e[8]);
  let f;
  e[9] !== t.fontFamilyCode || e[10] !== t.fontFamilyTerminal
    ? ((f = T({ advanced: !0, code: t.fontFamilyCode, terminal: t.fontFamilyTerminal })),
      (e[9] = t.fontFamilyCode),
      (e[10] = t.fontFamilyTerminal),
      (e[11] = f))
    : (f = e[11]);
  let p;
  e[12] !== t.fontSizeTerminal || e[13] !== f
    ? ((p = (0, P.jsx)(te, { family: f, size: t.fontSizeTerminal })),
      (e[12] = t.fontSizeTerminal),
      (e[13] = f),
      (e[14] = p))
    : (p = e[14]);
  let m;
  return (
    e[15] !== r.code ||
    e[16] !== t.fontFamilyTerminal ||
    e[17] !== c ||
    e[18] !== l ||
    e[19] !== d ||
    e[20] !== p
      ? ((m = (0, P.jsx)(V, {
          ...i,
          description: `Terminal output, independent from code blocks and diffs.`,
          defaultFamily: a,
          defaultValue: s.fontFamilyTerminal,
          value: o,
          onValueChange: c,
          onReset: l,
          requireMonospace: !0,
          size: d,
          preview: p,
        })),
        (e[15] = r.code),
        (e[16] = t.fontFamilyTerminal),
        (e[17] = c),
        (e[18] = l),
        (e[19] = d),
        (e[20] = p),
        (e[21] = m))
      : (m = e[21]),
    m
  );
}
function de() {
  let e = (0, M.c)(12),
    t = O(),
    n = j();
  if (!o(navigator.platform)) return null;
  let r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = x(`font-smoothing`)), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== t.fontSmoothing || e[2] !== n
    ? ((i =
        t.fontSmoothing === s.fontSmoothing
          ? null
          : (0, P.jsx)(k, {
              label: `font smoothing`,
              onClick: () => n({ fontSmoothing: s.fontSmoothing }),
            })),
      (e[1] = t.fontSmoothing),
      (e[2] = n),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === n ? (a = e[5]) : ((a = (e) => n({ fontSmoothing: !!e })), (e[4] = n), (e[5] = a));
  let c;
  e[6] !== t.fontSmoothing || e[7] !== a
    ? ((c = (0, P.jsx)(C, {
        checked: t.fontSmoothing,
        onCheckedChange: a,
        "aria-label": `Font smoothing`,
      })),
      (e[6] = t.fontSmoothing),
      (e[7] = a),
      (e[8] = c))
    : (c = e[8]);
  let l;
  return (
    e[9] !== i || e[10] !== c
      ? ((l = (0, P.jsx)(D, {
          ...r,
          description: `Use thinner grayscale text smoothing instead of the macOS default.`,
          resetAction: i,
          control: c,
        })),
        (e[9] = i),
        (e[10] = c),
        (e[11] = l))
      : (l = e[11]),
    l
  );
}
function fe() {
  let e = (0, M.c)(12),
    t = O(),
    n = j(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = x(`word-wrap`)), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== t.wordWrap || e[2] !== n
    ? ((i =
        t.wordWrap === s.wordWrap
          ? null
          : (0, P.jsx)(k, { label: `word wrapping`, onClick: () => n({ wordWrap: s.wordWrap }) })),
      (e[1] = t.wordWrap),
      (e[2] = n),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === n ? (a = e[5]) : ((a = (e) => n({ wordWrap: !!e })), (e[4] = n), (e[5] = a));
  let o;
  e[6] !== t.wordWrap || e[7] !== a
    ? ((o = (0, P.jsx)(C, {
        checked: t.wordWrap,
        onCheckedChange: a,
        "aria-label": `Wrap code, tables, diffs, and file previews by default`,
      })),
      (e[6] = t.wordWrap),
      (e[7] = a),
      (e[8] = o))
    : (o = e[8]);
  let c;
  return (
    e[9] !== i || e[10] !== o
      ? ((c = (0, P.jsx)(D, {
          ...r,
          description: `Wrap long lines in code blocks, tables, diffs, and file previews by default.`,
          resetAction: i,
          control: o,
        })),
        (e[9] = i),
        (e[10] = o),
        (e[11] = c))
      : (c = e[11]),
    c
  );
}
function pe() {
  let e = (0, M.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(I, {}),
            (0, P.jsx)(L, {}),
            (0, P.jsx)(R, {}),
            (0, P.jsx)(z, {}),
            (0, P.jsx)(de, {}),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function B() {
  let e = (0, M.c)(11),
    t = O(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, P.jsx)(I, { preview: (0, P.jsx)(g, {}) })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, P.jsx)(v, {})), (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] !== t.fontFamilyCode || e[3] !== t.fontFamilyTerminal
    ? ((i = T({ advanced: !1, code: t.fontFamilyCode, terminal: t.fontFamilyTerminal })),
      (e[2] = t.fontFamilyCode),
      (e[3] = t.fontFamilyTerminal),
      (e[4] = i))
    : (i = e[4]);
  let a;
  e[5] !== t.fontSizeCode || e[6] !== t.fontSizeTerminal
    ? ((a = S({ advanced: !1, code: t.fontSizeCode, terminal: t.fontSizeTerminal })),
      (e[5] = t.fontSizeCode),
      (e[6] = t.fontSizeTerminal),
      (e[7] = a))
    : (a = e[7]);
  let o;
  return (
    e[8] !== i || e[9] !== a
      ? ((o = (0, P.jsxs)(P.Fragment, {
          children: [
            n,
            (0, P.jsx)(R, {
              title: `Monospace font`,
              description: `Code blocks, diffs, file previews, and the terminal.`,
              preview: (0, P.jsxs)(P.Fragment, {
                children: [r, (0, P.jsx)(te, { family: i, size: a })],
              }),
            }),
          ],
        })),
        (e[8] = i),
        (e[9] = a),
        (e[10] = o))
      : (o = e[10]),
    o
  );
}
var me = new Set([
  `prompt-font`,
  `terminal-font`,
  ...(typeof navigator < `u` && o(navigator.platform) ? [`font-smoothing`] : []),
]);
function he() {
  let e = (0, M.c)(15),
    [t, n] = a(ae, !1, i),
    r = ce(),
    o = (0, N.useRef)(null),
    s,
    c;
  (e[0] !== r || e[1] !== n
    ? ((s = () => {
        r !== null && me.has(r) && o.current !== r && ((o.current = r), n(!0));
      }),
      (c = [r, n]),
      (e[0] = r),
      (e[1] = n),
      (e[2] = s),
      (e[3] = c))
    : ((s = e[2]), (c = e[3])),
    (0, N.useEffect)(s, c));
  let l;
  e[4] === n ? (l = e[5]) : ((l = (e) => n(!!e)), (e[4] = n), (e[5] = l));
  let u;
  e[6] !== t || e[7] !== l
    ? ((u = (0, P.jsxs)(`label`, {
        className: `flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground`,
        children: [
          `Advanced`,
          (0, P.jsx)(C, {
            checked: t,
            onCheckedChange: l,
            "aria-label": `Show advanced typography settings`,
          }),
        ],
      })),
      (e[6] = t),
      (e[7] = l),
      (e[8] = u))
    : (u = e[8]);
  let d;
  e[9] === t
    ? (d = e[10])
    : ((d = t ? (0, P.jsx)(pe, {}) : (0, P.jsx)(B, {})), (e[9] = t), (e[10] = d));
  let f;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, P.jsx)(fe, {})), (e[11] = f))
    : (f = e[11]);
  let p;
  return (
    e[12] !== u || e[13] !== d
      ? ((p = (0, P.jsxs)(A, {
          id: `typography`,
          title: `Typography`,
          headerAction: u,
          children: [d, f],
        })),
        (e[12] = u),
        (e[13] = d),
        (e[14] = p))
      : (p = e[14]),
    p
  );
}
function V(e) {
  let t = (0, M.c)(76),
    {
      id: n,
      title: r,
      description: i,
      defaultFamily: a,
      defaultValue: o,
      preview: s,
      value: l,
      onValueChange: u,
      onReset: h,
      requireMonospace: g,
      size: _,
    } = e,
    v = g !== void 0 && g,
    te;
  t[0] === l ? (te = t[1]) : ((te = l.trim()), (t[0] = l), (t[1] = te));
  let ne = te,
    [x, S] = (0, N.useState)(l),
    [re, C] = (0, N.useState)(!0),
    w = (0, N.useRef)(null),
    ae;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => {
        (w.current !== null && window.clearTimeout(w.current.id), (w.current = null));
      }),
      (t[2] = ae))
    : (ae = t[2]);
  let se = ae,
    T;
  t[3] === l ? (T = t[4]) : ((T = { value: l, generation: 0 }), (t[3] = l), (t[4] = T));
  let [E, ce] = (0, N.useState)(T);
  E.value !== l && (ce({ value: l, generation: E.generation + 1 }), S(l), C(!0));
  let O;
  t[5] === E.generation
    ? (O = t[6])
    : ((O = () => E.generation), (t[5] = E.generation), (t[6] = O));
  let le = (0, N.useEffectEvent)(O),
    A,
    j;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => () => {
        w.current !== null && window.clearTimeout(w.current.id);
      }),
      (j = []),
      (t[7] = A),
      (t[8] = j))
    : ((A = t[7]), (j = t[8])),
    (0, N.useEffect)(A, j));
  let F;
  t[9] === v ? (F = t[10]) : ((F = (e) => ie(e) && (!v || oe(e))), (t[9] = v), (t[10] = F));
  let ue = F,
    I;
  t[11] !== ue || t[12] !== u
    ? ((I = (e) => {
        (C(!0), (e.trim().length === 0 || ue(e)) && u(e));
      }),
      (t[11] = ue),
      (t[12] = u),
      (t[13] = I))
    : (I = t[13]);
  let L = I,
    R;
  t[14] !== L || t[15] !== x || t[16] !== l
    ? ((R = () => {
        let e = w.current;
        (se(), e !== null && e.value === l && L(x));
      }),
      (t[14] = L),
      (t[15] = x),
      (t[16] = l),
      (t[17] = R))
    : (R = t[17]);
  let z = R,
    de;
  t[18] === x ? (de = t[19]) : ((de = x.trim()), (t[18] = x), (t[19] = de));
  let fe = de,
    pe = re && fe.length > 0 && fe !== ne,
    B;
  t[20] !== o || t[21] !== h
    ? ((B = () => {
        (se(), S(o), C(!0), h());
      }),
      (t[20] = o),
      (t[21] = h),
      (t[22] = B))
    : (B = t[22]);
  let me = B,
    he;
  t[23] !== o ||
  t[24] !== me ||
  t[25] !== _.defaultValue ||
  t[26] !== _.value ||
  t[27] !== r ||
  t[28] !== l
    ? ((he =
        l !== o || _.value !== _.defaultValue
          ? (0, P.jsx)(k, { label: r.toLowerCase(), onClick: me })
          : null),
      (t[23] = o),
      (t[24] = me),
      (t[25] = _.defaultValue),
      (t[26] = _.value),
      (t[27] = r),
      (t[28] = l),
      (t[29] = he))
    : (he = t[29]);
  let V = he,
    _e = y(),
    [ve, ye] = (0, N.useState)(!1),
    be;
  t[30] !== E.generation ||
  t[31] !== L ||
  t[32] !== a ||
  t[33] !== x ||
  t[34] !== pe ||
  t[35] !== z ||
  t[36] !== _e.status ||
  t[37] !== ve ||
  t[38] !== u ||
  t[39] !== le ||
  t[40] !== v ||
  t[41] !== r ||
  t[42] !== ne ||
  t[43] !== l
    ? ((be =
        _e.status === `granted`
          ? (0, P.jsx)(b, {
              ariaLabel: `${r} family`,
              defaultFamily: a,
              selectedFamily: ne,
              requireMonospace: v,
              initialOpen: ve,
              onSelect: u,
            })
          : (0, P.jsx)(c, {
              size: `sm`,
              "aria-label": `${r} family`,
              "aria-invalid": pe || void 0,
              autoCapitalize: `off`,
              autoComplete: `off`,
              className: `min-w-0 flex-1`,
              maxLength: 200,
              onFocus: () => {
                (ye(!0), ee());
              },
              onBlur: () => {
                (ye(!1), z());
              },
              onChange: (e) => {
                let t = e.currentTarget.value;
                (S(t), C(!1), se());
                let n = l,
                  r = E.generation;
                w.current = {
                  id: window.setTimeout(() => {
                    ((w.current = null), le() === r && L(t));
                  }, 400),
                  value: n,
                };
              },
              onKeyDown: (e) => {
                (e.key === `Enter` && z(),
                  e.key === `Escape` &&
                    (e.preventDefault(), e.stopPropagation(), se(), S(l), C(!0)));
              },
              placeholder: a,
              spellCheck: !1,
              value: x,
            })),
      (t[30] = E.generation),
      (t[31] = L),
      (t[32] = a),
      (t[33] = x),
      (t[34] = pe),
      (t[35] = z),
      (t[36] = _e.status),
      (t[37] = ve),
      (t[38] = u),
      (t[39] = le),
      (t[40] = v),
      (t[41] = r),
      (t[42] = ne),
      (t[43] = l),
      (t[44] = be))
    : (be = t[44]);
  let H = be,
    U;
  t[45] === H
    ? (U = t[46])
    : ((U = (0, P.jsx)(`div`, { className: `min-w-0 flex-1 sm:w-44 sm:flex-none`, children: H })),
      (t[45] = H),
      (t[46] = U));
  let W = String(_.value),
    G;
  t[47] === _
    ? (G = t[48])
    : ((G = (e) => {
        if (typeof e != `string`) return;
        let t = Number(e);
        Number.isInteger(t) && t >= _.min && t <= _.max && _.onChange(t);
      }),
      (t[47] = _),
      (t[48] = G));
  let K;
  t[49] === _.value
    ? (K = t[50])
    : ((K = (0, P.jsxs)(d, { children: [_.value, ` px`] })), (t[49] = _.value), (t[50] = K));
  let q;
  t[51] !== _.label || t[52] !== K
    ? ((q = (0, P.jsx)(p, {
        size: `sm`,
        className: `w-22 shrink-0`,
        "aria-label": _.label,
        children: K,
      })),
      (t[51] = _.label),
      (t[52] = K),
      (t[53] = q))
    : (q = t[53]);
  let J;
  if (t[54] !== _.max || t[55] !== _.min) {
    let e;
    (t[57] === _.min ? (e = t[58]) : ((e = (e, t) => _.min + t), (t[57] = _.min), (t[58] = e)),
      (J = (0, P.jsx)(f, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: Array.from({ length: _.max - _.min + 1 }, e).map(ge),
      })),
      (t[54] = _.max),
      (t[55] = _.min),
      (t[56] = J));
  } else J = t[56];
  let Y;
  t[59] !== W || t[60] !== G || t[61] !== q || t[62] !== J
    ? ((Y = (0, P.jsxs)(m, { value: W, onValueChange: G, children: [q, J] })),
      (t[59] = W),
      (t[60] = G),
      (t[61] = q),
      (t[62] = J),
      (t[63] = Y))
    : (Y = t[63]);
  let X;
  t[64] !== U || t[65] !== Y
    ? ((X = (0, P.jsxs)(`div`, {
        className: `flex w-full items-center gap-2 sm:w-auto`,
        children: [U, Y],
      })),
      (t[64] = U),
      (t[65] = Y),
      (t[66] = X))
    : (X = t[66]);
  let Z = X,
    Q;
  t[67] === n ? (Q = t[68]) : ((Q = n === void 0 ? {} : { id: n }), (t[67] = n), (t[68] = Q));
  let $;
  return (
    t[69] !== Z || t[70] !== i || t[71] !== s || t[72] !== V || t[73] !== Q || t[74] !== r
      ? (($ = (0, P.jsx)(D, {
          ...Q,
          title: r,
          description: i,
          resetAction: V,
          control: Z,
          children: s,
        })),
        (t[69] = Z),
        (t[70] = i),
        (t[71] = s),
        (t[72] = V),
        (t[73] = Q),
        (t[74] = r),
        (t[75] = $))
      : ($ = t[75]),
    $
  );
}
function ge(e) {
  return (0, P.jsxs)(u, { hideIndicator: !0, value: String(e), children: [e, ` px`] }, e);
}
var _e = { artwork: `Artwork`, pill: `Version pill`, none: `None` },
  ve = { comfortable: `Comfortable`, wide: `Wide`, full: `Full` };
function ye() {
  let e = (0, M.c)(167),
    {
      appearanceMode: t,
      refreshTheme: n,
      resolvedTheme: r,
      setAppearanceMode: i,
      setTheme: a,
      setThemeHalf: o,
      theme: c,
      themeHalves: g,
    } = h(),
    v = w(),
    [ee, te] = (0, N.useState)(!1),
    y = O(),
    b = j(),
    S = se(),
    re;
  e[0] === S ? (re = e[1]) : ((re = E(S)), (e[0] = S), (e[1] = re));
  let ie = re !== null,
    ae = (y.glassOpacity - 40) / 60,
    oe = `${ae * 100}%`,
    T = `${0.5 - ae}rem`,
    ce;
  e[2] !== oe || e[3] !== T
    ? ((ce = { "--settings-slider-progress": oe, "--settings-slider-fill-offset": T }),
      (e[2] = oe),
      (e[3] = T),
      (e[4] = ce))
    : (ce = e[4]);
  let F = ce,
    ue = (y.appearanceContrast - 50) / 150,
    I = `${ue * 100}%`,
    L = `${0.5 - ue}rem`,
    R;
  e[5] !== I || e[6] !== L
    ? ((R = { "--settings-slider-progress": I, "--settings-slider-fill-offset": L }),
      (e[5] = I),
      (e[6] = L),
      (e[7] = R))
    : (R = e[7]);
  let z = R,
    de = (y.panelAnimationDurationMs - 0) / 400,
    fe = `${de * 100}%`,
    pe = `${0.5 - de}rem`,
    B;
  e[8] !== fe || e[9] !== pe
    ? ((B = { "--settings-slider-progress": fe, "--settings-slider-fill-offset": pe }),
      (e[8] = fe),
      (e[9] = pe),
      (e[10] = B))
    : (B = e[10]);
  let me = B,
    V;
  e[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((V = x(`theme`)), (e[11] = V)) : (V = e[11]);
  let ge;
  e[12] !== t ||
  e[13] !== v ||
  e[14] !== ee ||
  e[15] !== n ||
  e[16] !== r ||
  e[17] !== i ||
  e[18] !== a ||
  e[19] !== o ||
  e[20] !== c ||
  e[21] !== g
    ? ((ge = (0, P.jsx)(A, {
        id: `appearance`,
        title: `Colors & themes`,
        variant: `plain`,
        hideTitle: !0,
        children: (0, P.jsx)(`div`, {
          id: V.id,
          children: (0, P.jsx)(_, {
            appearanceMode: t,
            customThemes: v,
            initialAppearance: r,
            refreshTheme: n,
            isImportOpen: ee,
            setAppearanceMode: i,
            setTheme: a,
            setThemeHalf: o,
            theme: c,
            themeHalves: g,
            onImportOpenChange: te,
          }),
        }),
      })),
      (e[12] = t),
      (e[13] = v),
      (e[14] = ee),
      (e[15] = n),
      (e[16] = r),
      (e[17] = i),
      (e[18] = a),
      (e[19] = o),
      (e[20] = c),
      (e[21] = g),
      (e[22] = ge))
    : (ge = e[22]);
  let ye;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = x(`setting-appearance-contrast`)), (e[23] = ye))
    : (ye = e[23]);
  let H;
  e[24] !== y.appearanceContrast || e[25] !== b
    ? ((H =
        y.appearanceContrast === s.appearanceContrast
          ? null
          : (0, P.jsx)(k, {
              label: `contrast`,
              onClick: () => b({ appearanceContrast: s.appearanceContrast }),
            })),
      (e[24] = y.appearanceContrast),
      (e[25] = b),
      (e[26] = H))
    : (H = e[26]);
  let U;
  e[27] === y.appearanceContrast
    ? (U = e[28])
    : ((U = (0, P.jsxs)(`output`, {
        className: `min-w-12 rounded-md bg-muted px-2 py-1 text-center font-mono text-xs font-medium tabular-nums text-foreground`,
        htmlFor: `appearance-contrast`,
        children: [y.appearanceContrast, `%`],
      })),
      (e[27] = y.appearanceContrast),
      (e[28] = U));
  let W;
  e[29] === b
    ? (W = e[30])
    : ((W = (e) => {
        let t = Number(e.currentTarget.value);
        Number.isInteger(t) && t >= 50 && t <= 200 && b({ appearanceContrast: t });
      }),
      (e[29] = b),
      (e[30] = W));
  let G;
  e[31] !== z || e[32] !== y.appearanceContrast || e[33] !== W
    ? ((G = (0, P.jsx)(`input`, {
        "aria-label": `Contrast`,
        className: `settings-slider min-w-0 flex-1`,
        id: `appearance-contrast`,
        max: 200,
        min: 50,
        onChange: W,
        step: 5,
        style: z,
        type: `range`,
        value: y.appearanceContrast,
      })),
      (e[31] = z),
      (e[32] = y.appearanceContrast),
      (e[33] = W),
      (e[34] = G))
    : (G = e[34]);
  let K;
  e[35] !== U || e[36] !== G
    ? ((K = (0, P.jsxs)(`div`, {
        className: `flex w-full items-center gap-3 sm:w-52`,
        children: [U, G],
      })),
      (e[35] = U),
      (e[36] = G),
      (e[37] = K))
    : (K = e[37]);
  let q;
  e[38] !== H || e[39] !== K
    ? ((q = (0, P.jsx)(D, {
        ...ye,
        description: `Adjust the contrast of colors and borders across the interface.`,
        resetAction: H,
        control: K,
      })),
      (e[38] = H),
      (e[39] = K),
      (e[40] = q))
    : (q = e[40]);
  let J;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = x(`setting-glass-opacity`)), (e[41] = J))
    : (J = e[41]);
  let Y;
  e[42] !== y.glassOpacity || e[43] !== b
    ? ((Y =
        y.glassOpacity === s.glassOpacity
          ? null
          : (0, P.jsx)(k, {
              label: `glass opacity`,
              onClick: () => b({ glassOpacity: s.glassOpacity }),
            })),
      (e[42] = y.glassOpacity),
      (e[43] = b),
      (e[44] = Y))
    : (Y = e[44]);
  let X;
  e[45] === y.glassOpacity
    ? (X = e[46])
    : ((X = (0, P.jsxs)(`output`, {
        className: `min-w-12 rounded-md bg-muted px-2 py-1 text-center font-mono text-xs font-medium tabular-nums text-foreground`,
        htmlFor: `glass-opacity`,
        children: [y.glassOpacity, `%`],
      })),
      (e[45] = y.glassOpacity),
      (e[46] = X));
  let Z;
  e[47] === b
    ? (Z = e[48])
    : ((Z = (e) => {
        let t = Number(e.currentTarget.value);
        Number.isInteger(t) && t >= 40 && t <= 100 && b({ glassOpacity: t });
      }),
      (e[47] = b),
      (e[48] = Z));
  let Q;
  e[49] !== F || e[50] !== y.glassOpacity || e[51] !== Z
    ? ((Q = (0, P.jsx)(`input`, {
        "aria-label": `Glass opacity`,
        className: `settings-slider min-w-0 flex-1`,
        id: `glass-opacity`,
        max: 100,
        min: 40,
        onChange: Z,
        step: 5,
        style: F,
        type: `range`,
        value: y.glassOpacity,
      })),
      (e[49] = F),
      (e[50] = y.glassOpacity),
      (e[51] = Z),
      (e[52] = Q))
    : (Q = e[52]);
  let $;
  e[53] !== X || e[54] !== Q
    ? (($ = (0, P.jsxs)(`div`, {
        className: `flex w-full items-center gap-3 sm:w-52`,
        children: [X, Q],
      })),
      (e[53] = X),
      (e[54] = Q),
      (e[55] = $))
    : ($ = e[55]);
  let xe;
  e[56] !== Y || e[57] !== $
    ? ((xe = (0, P.jsx)(D, {
        ...J,
        description: `Higher values make menus, dialogs, and the composer more solid.`,
        resetAction: Y,
        control: $,
      })),
      (e[56] = Y),
      (e[57] = $),
      (e[58] = xe))
    : (xe = e[58]);
  let Se;
  e[59] !== y.environmentIdentificationMode || e[60] !== ie || e[61] !== b
    ? ((Se = ie
        ? (0, P.jsx)(D, {
            ...x(`environment-identification`),
            description: `Choose how Dev and Nightly environments are identified.`,
            resetAction:
              y.environmentIdentificationMode === `artwork`
                ? null
                : (0, P.jsx)(k, {
                    label: `environment identification`,
                    onClick: () => b({ environmentIdentificationMode: l }),
                  }),
            control: (0, P.jsxs)(m, {
              value: y.environmentIdentificationMode,
              onValueChange: (e) => {
                (e === `artwork` || e === `pill` || e === `none`) &&
                  b({ environmentIdentificationMode: e });
              },
              children: [
                (0, P.jsx)(p, {
                  size: `sm`,
                  className: `w-full sm:w-40`,
                  "aria-label": `Environment identification`,
                  children: (0, P.jsx)(d, { children: _e[y.environmentIdentificationMode] }),
                }),
                (0, P.jsx)(f, {
                  align: `end`,
                  alignItemWithTrigger: !1,
                  children: Object.entries(_e).map(be),
                }),
              ],
            }),
          })
        : null),
      (e[59] = y.environmentIdentificationMode),
      (e[60] = ie),
      (e[61] = b),
      (e[62] = Se))
    : (Se = e[62]);
  let Ce;
  e[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = x(`diff-color-scheme`)), (e[63] = Ce))
    : (Ce = e[63]);
  let we;
  e[64] !== y.diffColorScheme || e[65] !== b
    ? ((we =
        y.diffColorScheme === s.diffColorScheme
          ? null
          : (0, P.jsx)(k, {
              label: `diff colors`,
              onClick: () => b({ diffColorScheme: s.diffColorScheme }),
            })),
      (e[64] = y.diffColorScheme),
      (e[65] = b),
      (e[66] = we))
    : (we = e[66]);
  let Te;
  e[67] === b
    ? (Te = e[68])
    : ((Te = (e) => {
        (e === `red-green` || e === `blue-orange`) && b({ diffColorScheme: e });
      }),
      (e[67] = b),
      (e[68] = Te));
  let Ee =
      y.diffColorScheme === `blue-orange`
        ? `flex shrink-0 flex-row-reverse gap-1`
        : `flex shrink-0 gap-1`,
    De,
    Oe;
  e[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, P.jsx)(`span`, { className: `size-2 rounded-full bg-diff-deletion` })),
      (Oe = (0, P.jsx)(`span`, { className: `size-2 rounded-full bg-diff-addition` })),
      (e[69] = De),
      (e[70] = Oe))
    : ((De = e[69]), (Oe = e[70]));
  let ke;
  e[71] === Ee
    ? (ke = e[72])
    : ((ke = (0, P.jsxs)(`span`, { "aria-hidden": `true`, className: Ee, children: [De, Oe] })),
      (e[71] = Ee),
      (e[72] = ke));
  let Ae = y.diffColorScheme === `blue-orange` ? `Blue & orange` : `Red & green`,
    je;
  e[73] === Ae
    ? (je = e[74])
    : ((je = (0, P.jsx)(d, { children: Ae })), (e[73] = Ae), (e[74] = je));
  let Me;
  e[75] !== ke || e[76] !== je
    ? ((Me = (0, P.jsxs)(p, {
        size: `sm`,
        className: `w-full min-w-0`,
        "aria-label": `Diff colors`,
        children: [ke, je],
      })),
      (e[75] = ke),
      (e[76] = je),
      (e[77] = Me))
    : (Me = e[77]);
  let Ne;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, P.jsxs)(f, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, P.jsx)(u, { value: `red-green`, children: `Red & green (default)` }),
          (0, P.jsx)(u, { value: `blue-orange`, children: `Blue & orange` }),
        ],
      })),
      (e[78] = Ne))
    : (Ne = e[78]);
  let Pe;
  e[79] !== y.diffColorScheme || e[80] !== Te || e[81] !== Me
    ? ((Pe = (0, P.jsx)(`div`, {
        className: `w-full sm:w-40`,
        children: (0, P.jsxs)(m, {
          value: y.diffColorScheme,
          onValueChange: Te,
          children: [Me, Ne],
        }),
      })),
      (e[79] = y.diffColorScheme),
      (e[80] = Te),
      (e[81] = Me),
      (e[82] = Pe))
    : (Pe = e[82]);
  let Fe;
  e[83] !== we || e[84] !== Pe
    ? ((Fe = (0, P.jsx)(D, {
        ...Ce,
        description: `Choose colors for additions and deletions, including change counts.`,
        resetAction: we,
        control: Pe,
      })),
      (e[83] = we),
      (e[84] = Pe),
      (e[85] = Fe))
    : (Fe = e[85]);
  let Ie;
  e[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = x(`composer-context`)), (e[86] = Ie))
    : (Ie = e[86]);
  let Le;
  e[87] !== y.persistComposerContextStrip || e[88] !== b
    ? ((Le =
        y.persistComposerContextStrip === s.persistComposerContextStrip
          ? null
          : (0, P.jsx)(k, {
              label: `composer context`,
              onClick: () => b({ persistComposerContextStrip: s.persistComposerContextStrip }),
            })),
      (e[87] = y.persistComposerContextStrip),
      (e[88] = b),
      (e[89] = Le))
    : (Le = e[89]);
  let Re;
  e[90] === b
    ? (Re = e[91])
    : ((Re = (e) => b({ persistComposerContextStrip: !!e })), (e[90] = b), (e[91] = Re));
  let ze;
  e[92] !== y.persistComposerContextStrip || e[93] !== Re
    ? ((ze = (0, P.jsx)(C, {
        checked: y.persistComposerContextStrip,
        onCheckedChange: Re,
        "aria-label": `Keep composer context visible in active threads`,
      })),
      (e[92] = y.persistComposerContextStrip),
      (e[93] = Re),
      (e[94] = ze))
    : (ze = e[94]);
  let Be;
  e[95] !== Le || e[96] !== ze
    ? ((Be = (0, P.jsx)(D, {
        ...Ie,
        description: `Keep branch and worktree controls below the composer after a thread starts.`,
        resetAction: Le,
        control: ze,
      })),
      (e[95] = Le),
      (e[96] = ze),
      (e[97] = Be))
    : (Be = e[97]);
  let Ve;
  e[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = x(`chat-width`)), (e[98] = Ve))
    : (Ve = e[98]);
  let He;
  e[99] !== y.chatWidth || e[100] !== b
    ? ((He =
        y.chatWidth === s.chatWidth
          ? null
          : (0, P.jsx)(k, { label: `chat width`, onClick: () => b({ chatWidth: s.chatWidth }) })),
      (e[99] = y.chatWidth),
      (e[100] = b),
      (e[101] = He))
    : (He = e[101]);
  let Ue;
  e[102] === b
    ? (Ue = e[103])
    : ((Ue = (e) => {
        (e === `comfortable` || e === `wide` || e === `full`) && b({ chatWidth: e });
      }),
      (e[102] = b),
      (e[103] = Ue));
  let We = ve[y.chatWidth],
    Ge;
  e[104] === We
    ? (Ge = e[105])
    : ((Ge = (0, P.jsx)(p, {
        size: `sm`,
        className: `w-full min-w-0`,
        "aria-label": `Chat width`,
        children: (0, P.jsx)(d, { children: We }),
      })),
      (e[104] = We),
      (e[105] = Ge));
  let Ke;
  e[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, P.jsxs)(f, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, P.jsx)(u, { value: `comfortable`, children: `Comfortable (default)` }),
          (0, P.jsx)(u, { value: `wide`, children: `Wide` }),
          (0, P.jsx)(u, { value: `full`, children: `Full` }),
        ],
      })),
      (e[106] = Ke))
    : (Ke = e[106]);
  let qe;
  e[107] !== y.chatWidth || e[108] !== Ue || e[109] !== Ge
    ? ((qe = (0, P.jsx)(`div`, {
        className: `w-full sm:w-40`,
        children: (0, P.jsxs)(m, { value: y.chatWidth, onValueChange: Ue, children: [Ge, Ke] }),
      })),
      (e[107] = y.chatWidth),
      (e[108] = Ue),
      (e[109] = Ge),
      (e[110] = qe))
    : (qe = e[110]);
  let Je;
  e[111] !== He || e[112] !== qe
    ? ((Je = (0, P.jsx)(D, {
        ...Ve,
        description: `Set how wide messages and the composer can grow on large screens.`,
        resetAction: He,
        control: qe,
      })),
      (e[111] = He),
      (e[112] = qe),
      (e[113] = Je))
    : (Je = e[113]);
  let Ye;
  e[114] !== y.redesignEnabled || e[115] !== y.sidebarProjectIconColors || e[116] !== b
    ? ((Ye = y.redesignEnabled
        ? (0, P.jsx)(D, {
            ...x(`sidebar-project-icon-colors`),
            description: `Show project icons in the sidebar in full color instead of gray.`,
            resetAction:
              y.sidebarProjectIconColors === s.sidebarProjectIconColors
                ? null
                : (0, P.jsx)(k, {
                    label: `colored project icons`,
                    onClick: () => b({ sidebarProjectIconColors: s.sidebarProjectIconColors }),
                  }),
            control: (0, P.jsx)(C, {
              checked: y.sidebarProjectIconColors,
              onCheckedChange: (e) => b({ sidebarProjectIconColors: !!e }),
              "aria-label": `Colored project icons`,
            }),
          })
        : null),
      (e[114] = y.redesignEnabled),
      (e[115] = y.sidebarProjectIconColors),
      (e[116] = b),
      (e[117] = Ye))
    : (Ye = e[117]);
  let Xe;
  e[118] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = x(`math-rendering`)), (e[118] = Xe))
    : (Xe = e[118]);
  let Ze;
  e[119] !== y.mathRenderingEnabled || e[120] !== b
    ? ((Ze =
        y.mathRenderingEnabled === s.mathRenderingEnabled
          ? null
          : (0, P.jsx)(k, {
              label: `math rendering`,
              onClick: () => b({ mathRenderingEnabled: s.mathRenderingEnabled }),
            })),
      (e[119] = y.mathRenderingEnabled),
      (e[120] = b),
      (e[121] = Ze))
    : (Ze = e[121]);
  let Qe;
  e[122] === b
    ? (Qe = e[123])
    : ((Qe = (e) => b({ mathRenderingEnabled: !!e })), (e[122] = b), (e[123] = Qe));
  let $e;
  e[124] !== y.mathRenderingEnabled || e[125] !== Qe
    ? (($e = (0, P.jsx)(C, {
        checked: y.mathRenderingEnabled,
        onCheckedChange: Qe,
        "aria-label": `Render math`,
      })),
      (e[124] = y.mathRenderingEnabled),
      (e[125] = Qe),
      (e[126] = $e))
    : ($e = e[126]);
  let et;
  e[127] !== Ze || e[128] !== $e
    ? ((et = (0, P.jsx)(D, {
        ...Xe,
        description: `Typeset LaTeX math, such as $x^2$ or \\[x^2\\], in messages and Markdown previews. The composer keeps TeX source editable.`,
        resetAction: Ze,
        control: $e,
      })),
      (e[127] = Ze),
      (e[128] = $e),
      (e[129] = et))
    : (et = e[129]);
  let tt;
  e[130] !== q ||
  e[131] !== xe ||
  e[132] !== Se ||
  e[133] !== Fe ||
  e[134] !== Be ||
  e[135] !== Je ||
  e[136] !== Ye ||
  e[137] !== et
    ? ((tt = (0, P.jsxs)(A, {
        id: `appearance-interface`,
        title: `Interface`,
        children: [q, xe, Se, Fe, Be, Je, Ye, et],
      })),
      (e[130] = q),
      (e[131] = xe),
      (e[132] = Se),
      (e[133] = Fe),
      (e[134] = Be),
      (e[135] = Je),
      (e[136] = Ye),
      (e[137] = et),
      (e[138] = tt))
    : (tt = e[138]);
  let nt;
  e[139] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = x(`panel-animations`)), (e[139] = nt))
    : (nt = e[139]);
  let rt;
  e[140] === y.panelAnimationDurationMs
    ? (rt = e[141])
    : ((rt = (0, P.jsx)(ne, { durationMs: y.panelAnimationDurationMs })),
      (e[140] = y.panelAnimationDurationMs),
      (e[141] = rt));
  let it;
  e[142] === y.panelAnimationDurationMs
    ? (it = e[143])
    : ((it = (0, P.jsxs)(`output`, {
        className: `min-w-16 rounded-md bg-muted px-2 py-1 text-center font-mono text-xs font-medium tabular-nums text-foreground`,
        htmlFor: `panel-animation-duration`,
        children: [y.panelAnimationDurationMs, ` ms`],
      })),
      (e[142] = y.panelAnimationDurationMs),
      (e[143] = it));
  let at;
  e[144] === b
    ? (at = e[145])
    : ((at = (e) => {
        let t = Number(e.currentTarget.value);
        Number.isInteger(t) && t >= 0 && t <= 400 && b({ panelAnimationDurationMs: t });
      }),
      (e[144] = b),
      (e[145] = at));
  let ot;
  e[146] !== me || e[147] !== y.panelAnimationDurationMs || e[148] !== at
    ? ((ot = (0, P.jsx)(`input`, {
        "aria-label": `Panel animation duration`,
        className: `settings-slider min-w-0 flex-1`,
        id: `panel-animation-duration`,
        max: 400,
        min: 0,
        onChange: at,
        step: 25,
        style: me,
        type: `range`,
        value: y.panelAnimationDurationMs,
      })),
      (e[146] = me),
      (e[147] = y.panelAnimationDurationMs),
      (e[148] = at),
      (e[149] = ot))
    : (ot = e[149]);
  let st;
  e[150] !== it || e[151] !== ot
    ? ((st = (0, P.jsxs)(`div`, {
        className: `flex w-full items-center gap-3`,
        children: [it, ot],
      })),
      (e[150] = it),
      (e[151] = ot),
      (e[152] = st))
    : (st = e[152]);
  let ct;
  e[153] !== rt || e[154] !== st
    ? ((ct = (0, P.jsxs)(`div`, {
        className: `grid w-full grid-cols-[5rem_minmax(0,1fr)] items-center gap-3 sm:w-auto sm:grid-cols-[7rem_13rem] sm:gap-4`,
        children: [rt, st],
      })),
      (e[153] = rt),
      (e[154] = st),
      (e[155] = ct))
    : (ct = e[155]);
  let lt;
  e[156] !== y.panelAnimationDurationMs || e[157] !== b
    ? ((lt =
        y.panelAnimationDurationMs === s.panelAnimationDurationMs
          ? null
          : (0, P.jsx)(k, {
              label: `panel animations`,
              onClick: () => b({ panelAnimationDurationMs: s.panelAnimationDurationMs }),
            })),
      (e[156] = y.panelAnimationDurationMs),
      (e[157] = b),
      (e[158] = lt))
    : (lt = e[158]);
  let ut;
  e[159] !== ct || e[160] !== lt
    ? ((ut = (0, P.jsx)(A, {
        id: `motion`,
        title: `Motion`,
        children: (0, P.jsx)(D, {
          ...nt,
          description: `Set how fast panels open and close.`,
          control: ct,
          resetAction: lt,
        }),
      })),
      (e[159] = ct),
      (e[160] = lt),
      (e[161] = ut))
    : (ut = e[161]);
  let dt;
  e[162] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, P.jsx)(he, {})), (e[162] = dt))
    : (dt = e[162]);
  let ft;
  return (
    e[163] !== ge || e[164] !== tt || e[165] !== ut
      ? ((ft = (0, P.jsxs)(le, { children: [ge, tt, ut, dt] })),
        (e[163] = ge),
        (e[164] = tt),
        (e[165] = ut),
        (e[166] = ft))
      : (ft = e[166]),
    ft
  );
}
function be(e) {
  let [t, n] = e;
  return (0, P.jsx)(u, { hideIndicator: !0, value: t, children: n }, t);
}
function H() {
  let e = (0, M.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, P.jsx)(ye, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { H as component };
//# sourceMappingURL=_chat.settings.appearance-Dy4O7xYj.js.map
