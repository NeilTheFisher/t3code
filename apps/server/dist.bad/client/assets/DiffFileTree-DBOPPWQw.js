import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { Bn as i, Dr as a, Vn as o, Wn as s, t as c } from "./utils-CPoejuy5.js";
import { n as l, t as ee } from "./MorphIcon-DCVwjy7i.js";
import { K as te } from "./useSettings-N-JG2LFZ.js";
import { t as ne } from "./useStableCallback-XvXMCrxI.js";
import {
  c as re,
  i as ie,
  n as ae,
  o as oe,
  r as se,
  s as ce,
  t as le,
} from "./fileTreeExpansion-BmZC-68G.js";
import { a as u, n as d, t as f } from "./pierre-icons-apai9Vrm.js";
import { $s as p } from "./main-BZa0O6xN.js";
var m = n(),
  h = e(t(), 1);
function g(e, t, n) {
  let r = (0, m.c)(8),
    [i, a] = (0, h.useState)(null),
    o = (0, h.useRef)(null),
    s,
    c;
  (r[0] !== n || r[1] !== i || r[2] !== t || r[3] !== e
    ? ((s = () => {
        i !== null &&
          o.current !== i &&
          (i.scope === t
            ? !e?.getInstance() ||
              (n && !n.includes(i.fileKey)) ||
              (e.scrollTo({ type: `item`, id: i.fileKey, align: `start` }), (o.current = i))
            : (o.current = i));
      }),
      (c = [i, t, e, n]),
      (r[0] = n),
      (r[1] = i),
      (r[2] = t),
      (r[3] = e),
      (r[4] = s),
      (r[5] = c))
    : ((s = r[4]), (c = r[5])),
    (0, h.useEffect)(s, c));
  let l;
  return (
    r[6] === t ? (l = r[7]) : ((l = (e) => a({ fileKey: e, scope: t })), (r[6] = t), (r[7] = l)), l
  );
}
function _(e, t) {
  return e.length > 0 && e.every((e) => t.has(e));
}
function v(e, t) {
  return _(e, t) ? new Set() : new Set(e);
}
var ue = l();
function y(e) {
  switch (e.type) {
    case `new`:
      return `added`;
    case `deleted`:
      return `deleted`;
    case `rename-pure`:
    case `rename-changed`:
      return `renamed`;
    case `change`:
      return `modified`;
  }
}
function b(e) {
  let t = new Map();
  for (let n of e) {
    let e = p(n),
      r = y(n),
      i = t.get(e);
    t.set(e, i === void 0 || i === r ? r : `modified`);
  }
  return [...t].map(([e, t]) => ({ path: e, status: t }));
}
function de(e) {
  let t = new Set(x(e)),
    n = new Set(e.flatMap((e) => e.toLowerCase().split(`/`))),
    r = new Map(),
    i = new Map(),
    a = { ...f.byFileName },
    o = e.map((e) => {
      if (!t.has(`${e}/`)) return e;
      let o = e;
      do o += `​`;
      while (n.has(d(o).toLowerCase()));
      (n.add(d(o).toLowerCase()), r.set(o, e), i.set(e, o));
      let s = u(e, `file`);
      return (s !== null && (a[d(o)] = s), o);
    });
  return {
    paths: i.size === 0 ? e : o,
    selectionPath: (e) => r.get(e) ?? e,
    modelPath: (e) => i.get(e) ?? e,
    icons: i.size === 0 ? f : { ...f, byFileName: a },
  };
}
function x(e) {
  let t = new Set();
  for (let n of e) {
    let e = n.split(`/`),
      r = ``;
    for (let n of e.slice(0, -1)) ((r += `${n}/`), t.add(r));
  }
  return [...t];
}
function fe(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      t.set(e, n);
      let r = ``;
      for (let i of e.split(`/`).slice(0, -1)) ((r += `${i}/`), t.has(r) || t.set(r, n));
    }),
    t
  );
}
function S(e) {
  return (t, n) => {
    let r = e();
    return (
      (r.get(t.path) ?? 2 ** 53 - 1) - (r.get(n.path) ?? 2 ** 53 - 1) ||
      t.depth - n.depth ||
      t.path.localeCompare(n.path)
    );
  };
}
function C(e) {
  return e.split(`/`).filter(Boolean).length;
}
function pe(e, t) {
  let n = new Set(x(e)),
    r = new Set(x(t)),
    i = new Set(e),
    a = new Set(t),
    o = [];
  for (let t of e) a.has(t) || o.push({ type: `remove`, path: t });
  let s = [...n].filter((e) => !r.has(e)).toSorted((e, t) => C(t) - C(e));
  for (let e of s) o.push({ type: `remove`, path: e, recursive: !0 });
  let c = [...r].filter((e) => !n.has(e)).toSorted((e, t) => C(e) - C(t));
  for (let e of c) o.push({ type: `add`, path: e });
  for (let e of t) i.has(e) || o.push({ type: `add`, path: e });
  return o;
}
var w = e(r(), 1);
function T(e) {
  let t = (0, m.c)(60),
    {
      entries: n,
      onSelectFile: r,
      selectedPath: l,
      revealRequestId: u,
      ariaLabel: d,
      headerAccessory: f,
      footer: p,
      className: g,
    } = e,
    _ = l === void 0 ? null : l,
    v = u === void 0 ? 0 : u,
    { resolvedTheme: y } = te(),
    b = de(n.map(he)),
    S = b.paths,
    C = b.icons,
    T = x(S),
    E = fe(S),
    [D] = (0, h.useState)(me),
    O = n.map((e) => ({ path: b.modelPath(e.path), status: e.status })),
    k = (0, h.useRef)(!1),
    A = (0, h.useRef)(null),
    j = (0, h.useRef)(null),
    M;
  t[0] !== S || t[1] !== r || t[2] !== b
    ? ((M = (e) => {
        if (k.current) return;
        let t = e.at(-1);
        t && S.includes(t) && r(b.selectionPath(t));
      }),
      (t[0] = S),
      (t[1] = r),
      (t[2] = b),
      (t[3] = M))
    : (M = t[3]);
  let N = ne(M),
    P;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = []), (t[4] = P)) : (P = t[4]);
  let F;
  t[5] !== N || t[6] !== C || t[7] !== D.sort
    ? ((F = {
        density: `compact`,
        flattenEmptyDirectories: !0,
        initialExpansion: `open`,
        icons: C,
        onSelectionChange: N,
        paths: P,
        search: !1,
        sort: D.sort,
        unsafeCSS: se,
      }),
      (t[5] = N),
      (t[6] = C),
      (t[7] = D.sort),
      (t[8] = F))
    : (F = t[8]);
  let { model: I } = ce(F),
    L;
  t[9] === T ? (L = t[10]) : ((L = (e) => le(e, T)), (t[9] = T), (t[10] = L));
  let R = oe(I, L),
    z,
    B;
  (t[11] !== C || t[12] !== I
    ? ((z = () => {
        I.setIcons(C);
      }),
      (B = [C, I]),
      (t[11] = C),
      (t[12] = I),
      (t[13] = z),
      (t[14] = B))
    : ((z = t[13]), (B = t[14])),
    (0, h.useEffect)(z, B));
  let V, H;
  (t[15] !== T ||
  t[16] !== O ||
  t[17] !== I ||
  t[18] !== S ||
  t[19] !== D ||
  t[20] !== E ||
  t[21] !== b
    ? ((H = () => {
        D.update(E);
        let e = j.current;
        if (e?.paths !== S) {
          if (((j.current = b), e === null)) I.resetPaths(S);
          else if (e.paths.every((e, t) => S[t] === e)) {
            let t = pe(e.paths, S);
            t.length > 0 && I.batch(t);
          } else {
            let t = I.getFocusedPath(),
              n = t === null ? null : b.modelPath(e.selectionPath(t)),
              r = I.getSelectedPaths()
                .map((t) => b.modelPath(e.selectionPath(t)))
                .filter((e) => e.endsWith(`/`) || S.includes(e)),
              i = T.filter((e) => {
                let t = I.getItem(e);
                return t !== null && `isExpanded` in t && !t.isExpanded();
              });
            ((k.current = !0), I.resetPaths(S));
            for (let e of I.getSelectedPaths()) I.getItem(e)?.deselect();
            for (let e of r) I.getItem(e)?.select();
            queueMicrotask(() => {
              k.current = !1;
            });
            for (let e of i) {
              let t = I.getItem(e);
              t !== null && `collapse` in t && t.collapse();
            }
            n !== null && (S.includes(n) || T.includes(n)) && I.focusPath(n);
          }
          I.setGitStatus(O);
        }
      }),
      (V = [T, O, I, S, D, E, b]),
      (t[15] = T),
      (t[16] = O),
      (t[17] = I),
      (t[18] = S),
      (t[19] = D),
      (t[20] = E),
      (t[21] = b),
      (t[22] = V),
      (t[23] = H))
    : ((V = t[22]), (H = t[23])),
    (0, h.useEffect)(H, V));
  let U, W;
  (t[24] !== I || t[25] !== b || t[26] !== v || t[27] !== _
    ? ((U = () => {
        if (_ === null) {
          A.current = null;
          return;
        }
        let e = b.modelPath(_),
          t = I.getItem(e);
        if (t === null || t.isDirectory()) {
          A.current = null;
          return;
        }
        let n = A.current;
        if (n?.path === _ && n.revealRequestId === v) return;
        ((A.current = { path: _, revealRequestId: v }), (k.current = !0));
        for (let t of I.getSelectedPaths()) t !== e && I.getItem(t)?.deselect();
        let r = ``;
        for (let t of e.split(`/`).slice(0, -1)) {
          r += `${t}/`;
          let e = I.getItem(r);
          e !== null && `expand` in e && e.expand();
        }
        (t.select(),
          I.scrollToPath(e, { offset: `nearest` }),
          queueMicrotask(() => {
            k.current = !1;
          }));
      }),
      (W = [I, b, v, _]),
      (t[24] = I),
      (t[25] = b),
      (t[26] = v),
      (t[27] = _),
      (t[28] = U),
      (t[29] = W))
    : ((U = t[28]), (W = t[29])),
    (0, h.useEffect)(U, W));
  let G;
  t[30] === g
    ? (G = t[31])
    : ((G = c(`flex min-h-0 flex-1 flex-col bg-background`, g)), (t[30] = g), (t[31] = G));
  let K;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, w.jsx)(`span`, {
        className: `px-1 font-medium text-foreground`,
        children: `Files`,
      })),
      (t[32] = K))
    : (K = t[32]);
  let q;
  t[33] === n.length
    ? (q = t[34])
    : ((q = (0, w.jsx)(`span`, { className: `ml-auto tabular-nums`, children: n.length })),
      (t[33] = n.length),
      (t[34] = q));
  let J;
  t[35] !== R || t[36] !== T || t[37] !== I
    ? ((J =
        T.length > 0
          ? (0, w.jsxs)(i, {
              children: [
                (0, w.jsx)(s, {
                  render: (0, w.jsx)(a, {
                    type: `button`,
                    size: `icon-xs`,
                    variant: `ghost`,
                    "aria-label": R ? `Collapse all folders` : `Expand all folders`,
                    onClick: () => ae(I, T, !R),
                  }),
                  children: (0, w.jsx)(ee, {
                    className: `size-3.5`,
                    icon: R ? ue.ChevronsDownUp : ue.ChevronsUpDown,
                  }),
                }),
                (0, w.jsx)(o, { children: R ? `Collapse all folders` : `Expand all folders` }),
              ],
            })
          : null),
      (t[35] = R),
      (t[36] = T),
      (t[37] = I),
      (t[38] = J))
    : (J = t[38]);
  let Y;
  t[39] !== f || t[40] !== q || t[41] !== J
    ? ((Y = (0, w.jsxs)(`div`, {
        className: `flex h-10 min-h-10 shrink-0 items-center gap-1 border-b border-border/60 bg-background px-2 text-xs text-muted-foreground in-data-[preview-panel-mode=inline]:mb-3 in-data-[preview-panel-mode=inline]:h-7 in-data-[preview-panel-mode=inline]:min-h-7 in-data-[preview-panel-mode=inline]:border-b-transparent`,
        "data-surface-subheader": !0,
        children: [K, q, f, J],
      })),
      (t[39] = f),
      (t[40] = q),
      (t[41] = J),
      (t[42] = Y))
    : (Y = t[42]);
  let X;
  t[43] !== I || t[44] !== S || t[45] !== r || t[46] !== b
    ? ((X = (e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.altKey
        )
          return;
        let t = I.getSelectedPaths(),
          n = t.length === 1 ? t[0] : void 0;
        n &&
          S.includes(n) &&
          e.nativeEvent
            .composedPath()
            .some((e) => e instanceof HTMLElement && e.getAttribute(`data-item-path`) === n) &&
          r(b.selectionPath(n));
      }),
      (t[43] = I),
      (t[44] = S),
      (t[45] = r),
      (t[46] = b),
      (t[47] = X))
    : (X = t[47]);
  let Z;
  t[48] === y ? (Z = t[49]) : ((Z = ie(y)), (t[48] = y), (t[49] = Z));
  let Q;
  t[50] !== d || t[51] !== I || t[52] !== X || t[53] !== Z
    ? ((Q = (0, w.jsx)(re, {
        model: I,
        "aria-label": d,
        onClickCapture: X,
        className: `min-h-0 flex-1 overflow-hidden`,
        style: Z,
      })),
      (t[50] = d),
      (t[51] = I),
      (t[52] = X),
      (t[53] = Z),
      (t[54] = Q))
    : (Q = t[54]);
  let $;
  return (
    t[55] !== p || t[56] !== G || t[57] !== Y || t[58] !== Q
      ? (($ = (0, w.jsxs)(`div`, { className: G, children: [Y, Q, p] })),
        (t[55] = p),
        (t[56] = G),
        (t[57] = Y),
        (t[58] = Q),
        (t[59] = $))
      : ($ = t[59]),
    $
  );
}
function me() {
  let e = new Map();
  return {
    sort: S(() => e),
    update: (t) => {
      e = t;
    },
  };
}
function he(e) {
  return e.path;
}
export { g as a, v as i, b as n, _ as r, T as t };
//# sourceMappingURL=DiffFileTree-DBOPPWQw.js.map
