import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./plus-B20TfFan.js";
import { t as a } from "./x-Blp0Exqg.js";
import {
  Dr as o,
  QC as s,
  Qm as c,
  _r as l,
  eb as u,
  mb as d,
  pb as f,
  t as p,
} from "./utils-CPoejuy5.js";
import { a as m, c as h, o as g, s as _, t as v } from "./select-CBCDohvC.js";
import { t as y } from "./textarea-C9Xds9D7.js";
import { Rs as b } from "./main-BZa0O6xN.js";
import { a as x } from "./settingsLayout-2i87rQY9.js";
import { t as S } from "./draft-input-C3knK-UD.js";
import { t as C } from "./SecretInput-CtEGQlh1.js";
var w = n(),
  T = e(t(), 1),
  E = e(r(), 1);
function D(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
    .replace(/[-_]+/g, ` `)
    .replace(/^./, (e) => e.toUpperCase());
}
function O(e) {
  return d(e) ?? f(e);
}
function k(e, t) {
  let n = O(e)?.[t];
  return typeof n == `string` ? n : void 0;
}
function A(e) {
  return O(e)?.providerSettingsForm ?? {};
}
function j(e) {
  return f(e.settingsSchema)?.providerSettingsFormSchema ?? {};
}
function M(e) {
  let t = u(e)(void 0);
  return s(t) && typeof t.value == `boolean` ? t.value : void 0;
}
function N(e, t) {
  let n = e.driverKind === `acpRegistry` && B(t, `source`) === `local`,
    r = j(e),
    i = new Map((r.order ?? []).map((e, t) => [e, t])),
    a = i.size;
  return Object.keys(e.settingsSchema.fields)
    .map((e, t) => ({ key: e, index: t }))
    .toSorted((e, t) => (i.get(e.key) ?? a + e.index) - (i.get(t.key) ?? a + t.index))
    .flatMap(({ key: t }) => {
      let r = e.settingsSchema.fields[t],
        i = A(r);
      if (i.hidden || (n && t !== `source` && t !== `commandPath`)) return [];
      let a = k(r, `title`),
        o = k(r, `description`);
      return [
        {
          key: t,
          control: i.control ?? `text`,
          label: n && t === `commandPath` ? `Executable` : (a ?? D(t)),
          ...(n && t === `commandPath`
            ? { description: `Executable name or path on this environment.` }
            : o === void 0
              ? {}
              : { description: o }),
          ...(n && t === `commandPath`
            ? { placeholder: `e.g. dsh` }
            : i.placeholder === void 0
              ? {}
              : { placeholder: i.placeholder }),
          clearWhenEmpty: i.clearWhenEmpty ?? `omit`,
          ...(c(r) ? { secret: !0 } : {}),
          ...(i.control === `switch` ? { defaultBooleanValue: M(r) } : {}),
          ...(i.control === `select` && i.options ? { options: i.options } : {}),
        },
      ];
    });
}
var P = 0,
  F = (e) => ({ id: `provider-argument-${P++}`, value: e });
function I(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function L(e) {
  let t = typeof e == `object` && e ? e.commandArgs : void 0;
  return Array.isArray(t) ? t.filter((e) => typeof e == `string`) : [];
}
function R(e) {
  let t = (0, w.c)(21),
    { value: n, onChange: r } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = L(n)), (t[0] = n), (t[1] = s));
  let c = s,
    l;
  t[2] === c ? (l = t[3]) : ((l = () => c.map(F)), (t[2] = c), (t[3] = l));
  let [u, d] = (0, T.useState)(l),
    f = (0, T.useRef)(u),
    p = (0, T.useRef)(c),
    m = (0, T.useRef)(void 0),
    h,
    g;
  (t[4] === c
    ? ((h = t[5]), (g = t[6]))
    : ((h = () => {
        let e = p.current,
          t = m.current;
        if (((p.current = c), (m.current = void 0), I(e, c) || (t !== void 0 && I(t, c)))) return;
        let n = c.map(F);
        ((f.current = n), d(n));
      }),
      (g = [c]),
      (t[4] = c),
      (t[5] = h),
      (t[6] = g)),
    (0, T.useEffect)(h, g));
  let _;
  t[7] !== r || t[8] !== n
    ? ((_ = (e) => {
        ((f.current = e), d(e));
        let t = e.map(z);
        m.current = t;
        let i = typeof n == `object` && n ? { ...n } : {};
        r({ ...i, commandArgs: t });
      }),
      (t[7] = r),
      (t[8] = n),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y;
  t[10] === v ? (y = t[11]) : ((y = () => v([...f.current, F(``)])), (t[10] = v), (t[11] = y));
  let b;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, E.jsx)(i, {})), (t[12] = b))
    : (b = t[12]);
  let C;
  t[13] === y
    ? (C = t[14])
    : ((C = (0, E.jsxs)(o, {
        type: `button`,
        size: `sm`,
        variant: `outline`,
        onClick: y,
        children: [b, `Add argument`],
      })),
      (t[13] = y),
      (t[14] = C));
  let D;
  t[15] !== u || t[16] !== v
    ? ((D =
        u.length > 0
          ? (0, E.jsx)(`div`, {
              className: `mt-3 min-w-0 space-y-2 pb-2`,
              children: u.map((e, t) =>
                (0, E.jsxs)(
                  `div`,
                  {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, E.jsx)(S, {
                        size: `sm`,
                        font: `mono`,
                        value: e.value,
                        onCommit: (t) =>
                          v(f.current.map((n) => (n.id === e.id ? { ...n, value: t } : n))),
                        "aria-label": `Argument ${t + 1}`,
                        spellCheck: !1,
                      }),
                      (0, E.jsx)(o, {
                        type: `button`,
                        size: `icon-micro`,
                        variant: `ghost-destructive`,
                        onClick: () => v(f.current.filter((t) => t.id !== e.id)),
                        "aria-label": `Remove argument ${t + 1}`,
                        children: (0, E.jsx)(a, {}),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            })
          : null),
      (t[15] = u),
      (t[16] = v),
      (t[17] = D))
    : (D = t[17]);
  let O;
  return (
    t[18] !== C || t[19] !== D
      ? ((O = (0, E.jsx)(x, {
          title: `Arguments`,
          description: `One literal argument per row, in launch order.`,
          control: C,
          children: D,
        })),
        (t[18] = C),
        (t[19] = D),
        (t[20] = O))
      : (O = t[20]),
    O
  );
}
function z(e) {
  return e.value;
}
function B(e, t) {
  if (typeof e != `object` || !e) return ``;
  let n = e[t];
  return typeof n == `string` ? n : ``;
}
function V(e, t, n = !1) {
  if (typeof e != `object` || !e) return n;
  let r = e[t];
  return typeof r == `boolean` ? r : n;
}
function H(e, t, n) {
  let r = typeof e == `object` && e ? { ...e } : {};
  if (typeof n == `boolean`) {
    let e = t.defaultBooleanValue ?? !1;
    return (
      t.clearWhenEmpty === `omit` && n === e ? delete r[t.key] : (r[t.key] = n),
      Object.keys(r).length > 0 ? r : void 0
    );
  }
  let i = n.trim();
  return (
    t.clearWhenEmpty === `omit` && i.length === 0 ? delete r[t.key] : (r[t.key] = n),
    Object.keys(r).length > 0 ? r : void 0
  );
}
function U(e) {
  let t = (0, w.c)(31),
    { field: n, value: r, inputId: i, size: a, className: o, onChange: s } = e,
    c;
  t[0] === n.options ? (c = t[1]) : ((c = n.options ?? []), (t[0] = n.options), (t[1] = c));
  let l = c,
    u = l[0]?.value ?? ``,
    d;
  t[2] !== u || t[3] !== n.key || t[4] !== r
    ? ((d = B(r, n.key) || u), (t[2] = u), (t[3] = n.key), (t[4] = r), (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== f || t[7] !== l
    ? ((p = l.find((e) => e.value === f)?.label ?? f), (t[6] = f), (t[7] = l), (t[8] = p))
    : (p = t[8]);
  let m = p,
    y;
  t[9] !== u || t[10] !== n || t[11] !== s || t[12] !== r
    ? ((y = (e) => {
        typeof e == `string` && s(H(r, n, e === u ? `` : e));
      }),
      (t[9] = u),
      (t[10] = n),
      (t[11] = s),
      (t[12] = r),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === m ? (b = t[15]) : ((b = (0, E.jsx)(h, { children: m })), (t[14] = m), (t[15] = b));
  let x;
  t[16] !== o || t[17] !== n.label || t[18] !== i || t[19] !== a || t[20] !== b
    ? ((x = (0, E.jsx)(_, { id: i, size: a, className: o, "aria-label": n.label, children: b })),
      (t[16] = o),
      (t[17] = n.label),
      (t[18] = i),
      (t[19] = a),
      (t[20] = b),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] === l ? (S = t[23]) : ((S = l.map(W)), (t[22] = l), (t[23] = S));
  let C;
  t[24] === S
    ? (C = t[25])
    : ((C = (0, E.jsx)(g, { align: `start`, alignItemWithTrigger: !1, children: S })),
      (t[24] = S),
      (t[25] = C));
  let T;
  return (
    t[26] !== f || t[27] !== y || t[28] !== x || t[29] !== C
      ? ((T = (0, E.jsxs)(v, { value: f, onValueChange: y, children: [x, C] })),
        (t[26] = f),
        (t[27] = y),
        (t[28] = x),
        (t[29] = C),
        (t[30] = T))
      : (T = t[30]),
    T
  );
}
function W(e) {
  return (0, E.jsx)(m, { value: e.value, children: e.label }, e.value);
}
function G(e) {
  let t = (0, w.c)(4);
  if (e.variant === `card`) {
    let n;
    return (
      t[0] === e.children
        ? (n = t[1])
        : ((n = (0, E.jsx)(`div`, { children: e.children })), (t[0] = e.children), (t[1] = n)),
      n
    );
  }
  let n;
  return (
    t[2] === e.children
      ? (n = t[3])
      : ((n = (0, E.jsx)(`div`, { className: `grid gap-1.5`, children: e.children })),
        (t[2] = e.children),
        (t[3] = n)),
    n
  );
}
function K(e) {
  let t = (0, w.c)(113),
    { field: n, value: r, idPrefix: i, variant: s, onChange: c } = e,
    u = `${i}-${n.key}`,
    d =
      s === `dialog`
        ? `text-2xs text-muted-foreground`
        : `mt-1 block text-xs text-muted-foreground`,
    f;
  t[0] === n.label
    ? (f = t[1])
    : ((f = (0, E.jsx)(`span`, {
        className: `text-xs font-medium text-foreground`,
        children: n.label,
      })),
      (t[0] = n.label),
      (t[1] = f));
  let m = f,
    h;
  t[2] !== d || t[3] !== n.description
    ? ((h = n.description ? (0, E.jsx)(`span`, { className: d, children: n.description }) : null),
      (t[2] = d),
      (t[3] = n.description),
      (t[4] = h))
    : (h = t[4]);
  let g = h;
  if (s === `settings`) {
    let e = n.description ? `${u}-description` : void 0,
      i;
    t[5] !== n.key || t[6] !== n.secret || t[7] !== r
      ? ((i = n.secret === !0 && B(r, n.key).length > 0),
        (t[5] = n.key),
        (t[6] = n.secret),
        (t[7] = r),
        (t[8] = i))
      : (i = t[8]);
    let s = i,
      l;
    t[9] !== e || t[10] !== n || t[11] !== u || t[12] !== c || t[13] !== s || t[14] !== r
      ? ((l =
          n.control === `switch`
            ? (0, E.jsx)(b, {
                checked: V(r, n.key, n.defaultBooleanValue),
                onCheckedChange: (e) => c(H(r, n, !!e)),
                "aria-label": n.label,
                "aria-describedby": e,
              })
            : n.control === `select`
              ? (0, E.jsx)(U, {
                  field: n,
                  value: r,
                  inputId: u,
                  size: `sm`,
                  className: `w-full max-w-full @min-[32rem]/settings-row:w-56`,
                  onChange: c,
                })
              : n.control === `textarea`
                ? (0, E.jsx)(y, {
                    id: u,
                    "aria-describedby": e,
                    className: `w-full max-w-full @min-[32rem]/settings-row:w-[min(24rem,50cqw)]`,
                    value: B(r, n.key),
                    onChange: (e) => c(H(r, n, e.target.value)),
                    placeholder: n.placeholder,
                    spellCheck: !1,
                  })
                : n.secret
                  ? (0, E.jsxs)(`div`, {
                      className: `flex w-full min-w-0 items-center gap-2 @min-[32rem]/settings-row:w-56`,
                      children: [
                        (0, E.jsx)(C, {
                          id: u,
                          "aria-describedby": e,
                          size: `sm`,
                          className: `min-w-0 flex-1`,
                          configured: s,
                          value: ``,
                          onCommit: (e) => c(H(r, n, e)),
                        }),
                        s
                          ? (0, E.jsx)(o, {
                              type: `button`,
                              size: `icon-sm`,
                              variant: `ghost-destructive`,
                              onClick: () => c(H(r, n, ``)),
                              "aria-label": `Clear ${n.label}`,
                              children: (0, E.jsx)(a, { className: `size-3.5` }),
                            })
                          : null,
                      ],
                    })
                  : (0, E.jsx)(S, {
                      id: u,
                      "aria-describedby": e,
                      size: `sm`,
                      className: `w-full max-w-full @min-[32rem]/settings-row:w-56`,
                      type: n.control === `password` ? `password` : void 0,
                      autoComplete: n.control === `password` ? `off` : void 0,
                      value: B(r, n.key),
                      placeholder: n.placeholder,
                      onCommit: (e) => {
                        c(H(r, n, e));
                      },
                      spellCheck: !1,
                    })),
        (t[9] = e),
        (t[10] = n),
        (t[11] = u),
        (t[12] = c),
        (t[13] = s),
        (t[14] = r),
        (t[15] = l))
      : (l = t[15]);
    let d = l,
      f;
    t[16] !== n.control || t[17] !== n.label || t[18] !== u
      ? ((f =
          n.control === `switch`
            ? n.label
            : (0, E.jsx)(`label`, { htmlFor: u, children: n.label })),
        (t[16] = n.control),
        (t[17] = n.label),
        (t[18] = u),
        (t[19] = f))
      : (f = t[19]);
    let p;
    t[20] !== e || t[21] !== n.description
      ? ((p = n.description ? (0, E.jsx)(`span`, { id: e, children: n.description }) : void 0),
        (t[20] = e),
        (t[21] = n.description),
        (t[22] = p))
      : (p = t[22]);
    let m;
    return (
      t[23] !== d || t[24] !== f || t[25] !== p
        ? ((m = (0, E.jsx)(x, { title: f, description: p, control: d })),
          (t[23] = d),
          (t[24] = f),
          (t[25] = p),
          (t[26] = m))
        : (m = t[26]),
      m
    );
  }
  if (n.control === `switch`) {
    let e;
    t[27] !== g || t[28] !== m
      ? ((e = (0, E.jsxs)(`div`, { className: `min-w-0`, children: [m, g] })),
        (t[27] = g),
        (t[28] = m),
        (t[29] = e))
      : (e = t[29]);
    let i;
    t[30] !== n.defaultBooleanValue || t[31] !== n.key || t[32] !== r
      ? ((i = V(r, n.key, n.defaultBooleanValue)),
        (t[30] = n.defaultBooleanValue),
        (t[31] = n.key),
        (t[32] = r),
        (t[33] = i))
      : (i = t[33]);
    let a;
    t[34] !== n || t[35] !== c || t[36] !== r
      ? ((a = (e) => c(H(r, n, !!e))), (t[34] = n), (t[35] = c), (t[36] = r), (t[37] = a))
      : (a = t[37]);
    let o;
    t[38] !== n.label || t[39] !== i || t[40] !== a
      ? ((o = (0, E.jsx)(b, { checked: i, onCheckedChange: a, "aria-label": n.label })),
        (t[38] = n.label),
        (t[39] = i),
        (t[40] = a),
        (t[41] = o))
      : (o = t[41]);
    let l;
    t[42] !== e || t[43] !== o
      ? ((l = (0, E.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3`,
          children: [e, o],
        })),
        (t[42] = e),
        (t[43] = o),
        (t[44] = l))
      : (l = t[44]);
    let u;
    return (
      t[45] !== l || t[46] !== s
        ? ((u = (0, E.jsx)(G, { variant: s, children: l })), (t[45] = l), (t[46] = s), (t[47] = u))
        : (u = t[47]),
      u
    );
  }
  if (n.control === `select`) {
    let e = s === `card` && `block`,
      i;
    t[48] === e ? (i = t[49]) : ((i = p(e)), (t[48] = e), (t[49] = i));
    let a = s === `card` && `mt-1.5`,
      o;
    t[50] === a ? (o = t[51]) : ((o = p(`w-full`, a)), (t[50] = a), (t[51] = o));
    let l;
    t[52] !== n || t[53] !== u || t[54] !== c || t[55] !== o || t[56] !== r
      ? ((l = (0, E.jsx)(U, {
          field: n,
          value: r,
          inputId: u,
          size: `sm`,
          className: o,
          onChange: c,
        })),
        (t[52] = n),
        (t[53] = u),
        (t[54] = c),
        (t[55] = o),
        (t[56] = r),
        (t[57] = l))
      : (l = t[57]);
    let d;
    t[58] !== g || t[59] !== u || t[60] !== m || t[61] !== i || t[62] !== l
      ? ((d = (0, E.jsxs)(`label`, { htmlFor: u, className: i, children: [m, l, g] })),
        (t[58] = g),
        (t[59] = u),
        (t[60] = m),
        (t[61] = i),
        (t[62] = l),
        (t[63] = d))
      : (d = t[63]);
    let f;
    return (
      t[64] !== d || t[65] !== s
        ? ((f = (0, E.jsx)(G, { variant: s, children: d })), (t[64] = d), (t[65] = s), (t[66] = f))
        : (f = t[66]),
      f
    );
  }
  if (n.control === `textarea`) {
    let e = s === `card` && `block`,
      i;
    t[67] === e ? (i = t[68]) : ((i = p(e)), (t[67] = e), (t[68] = i));
    let a = s === `card` && `mt-1.5`,
      o;
    t[69] === a ? (o = t[70]) : ((o = p(a)), (t[69] = a), (t[70] = o));
    let l;
    t[71] !== n.key || t[72] !== r
      ? ((l = B(r, n.key)), (t[71] = n.key), (t[72] = r), (t[73] = l))
      : (l = t[73]);
    let d;
    t[74] !== n || t[75] !== c || t[76] !== r
      ? ((d = (e) => c(H(r, n, e.target.value))),
        (t[74] = n),
        (t[75] = c),
        (t[76] = r),
        (t[77] = d))
      : (d = t[77]);
    let f;
    t[78] !== n.placeholder || t[79] !== u || t[80] !== o || t[81] !== l || t[82] !== d
      ? ((f = (0, E.jsx)(y, {
          id: u,
          className: o,
          value: l,
          onChange: d,
          placeholder: n.placeholder,
          spellCheck: !1,
        })),
        (t[78] = n.placeholder),
        (t[79] = u),
        (t[80] = o),
        (t[81] = l),
        (t[82] = d),
        (t[83] = f))
      : (f = t[83]);
    let h;
    t[84] !== g || t[85] !== u || t[86] !== m || t[87] !== i || t[88] !== f
      ? ((h = (0, E.jsxs)(`label`, { htmlFor: u, className: i, children: [m, f, g] })),
        (t[84] = g),
        (t[85] = u),
        (t[86] = m),
        (t[87] = i),
        (t[88] = f),
        (t[89] = h))
      : (h = t[89]);
    let _;
    return (
      t[90] !== h || t[91] !== s
        ? ((_ = (0, E.jsx)(G, { variant: s, children: h })), (t[90] = h), (t[91] = s), (t[92] = _))
        : (_ = t[92]),
      _
    );
  }
  let _ = n.control === `password` ? `password` : void 0,
    v = n.secret ? C : S,
    T = n.secret ? C : l,
    D = s === `card` && `block`,
    O;
  t[93] === D ? (O = t[94]) : ((O = p(D)), (t[93] = D), (t[94] = O));
  let k;
  t[95] !== v ||
  t[96] !== T ||
  t[97] !== n ||
  t[98] !== u ||
  t[99] !== c ||
  t[100] !== _ ||
  t[101] !== r ||
  t[102] !== s
    ? ((k =
        s === `card`
          ? (0, E.jsx)(v, {
              id: u,
              size: `sm`,
              className: `mt-1.5`,
              type: n.secret ? void 0 : _,
              autoComplete: !n.secret && n.control === `password` ? `off` : void 0,
              value: B(r, n.key),
              onCommit: (e) => c(H(r, n, e)),
              placeholder: n.placeholder,
              spellCheck: !1,
            })
          : (0, E.jsx)(T, {
              id: u,
              type: n.secret ? void 0 : _,
              autoComplete: !n.secret && n.control === `password` ? `off` : void 0,
              value: B(r, n.key),
              onChange: (e) => c(H(r, n, e.target.value)),
              placeholder: n.placeholder,
              spellCheck: !1,
            })),
      (t[95] = v),
      (t[96] = T),
      (t[97] = n),
      (t[98] = u),
      (t[99] = c),
      (t[100] = _),
      (t[101] = r),
      (t[102] = s),
      (t[103] = k))
    : (k = t[103]);
  let A;
  t[104] !== g || t[105] !== u || t[106] !== m || t[107] !== O || t[108] !== k
    ? ((A = (0, E.jsxs)(`label`, { htmlFor: u, className: O, children: [m, k, g] })),
      (t[104] = g),
      (t[105] = u),
      (t[106] = m),
      (t[107] = O),
      (t[108] = k),
      (t[109] = A))
    : (A = t[109]);
  let j;
  return (
    t[110] !== A || t[111] !== s
      ? ((j = (0, E.jsx)(G, { variant: s, children: A })), (t[110] = A), (t[111] = s), (t[112] = j))
      : (j = t[112]),
    j
  );
}
function q(e) {
  let t = (0, w.c)(23),
    { definition: n, value: r, idPrefix: i, variant: a, onChange: o } = e,
    s,
    c,
    l;
  if (t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== r || t[4] !== a) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = N(n, r),
        u;
      if (
        (t[8] !== n.driverKind || t[9] !== r
          ? ((u = n.driverKind === `acpRegistry` && B(r, `source`) === `local`),
            (t[8] = n.driverKind),
            (t[9] = r),
            (t[10] = u))
          : (u = t[10]),
        (s = u),
        e.length === 0)
      ) {
        l = null;
        break bb0;
      }
      let d;
      (t[11] !== i || t[12] !== o || t[13] !== r || t[14] !== a
        ? ((d = (e) =>
            (0, E.jsx)(K, { field: e, value: r, idPrefix: i, variant: a, onChange: o }, e.key)),
          (t[11] = i),
          (t[12] = o),
          (t[13] = r),
          (t[14] = a),
          (t[15] = d))
        : (d = t[15]),
        (c = e.map(d)));
    }
    ((t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = r),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((s = t[5]), (c = t[6]), (l = t[7]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let u;
  t[16] !== s || t[17] !== o || t[18] !== r
    ? ((u = s ? (0, E.jsx)(R, { value: r, onChange: o }) : null),
      (t[16] = s),
      (t[17] = o),
      (t[18] = r),
      (t[19] = u))
    : (u = t[19]);
  let d;
  return (
    t[20] !== c || t[21] !== u
      ? ((d = (0, E.jsxs)(E.Fragment, { children: [c, u] })), (t[20] = c), (t[21] = u), (t[22] = d))
      : (d = t[22]),
    d
  );
}
export { N as n, q as t };
//# sourceMappingURL=ProviderSettingsForm-Bsf4x-U6.js.map
