import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { t as n } from "./jsx-runtime-BQExFN_X.js";
import {
  $r as r,
  Ao as i,
  Do as a,
  Ga as o,
  Oo as s,
  Qr as c,
  Ua as l,
  Wr as u,
  Xr as d,
  Zr as f,
  aa as p,
  ai as m,
  ba as h,
  ca as g,
  ci as _,
  ea as v,
  ei as y,
  ia as b,
  ii as x,
  li as S,
  na as C,
  oa as w,
  qr as T,
  ra as E,
  ri as D,
  sa as O,
  si as k,
  ta as A,
  ti as j,
  ui as M,
  wo as N,
} from "./utils-CPoejuy5.js";
var P = e(t());
function F(e) {
  return e == null || e.hasAttribute(`disabled`) || e.getAttribute(`aria-disabled`) === `true`;
}
var I = `data-composite-item-active`,
  L = [];
function R(e) {
  let {
      itemSizes: t,
      cols: n = 1,
      loopFocus: a = !0,
      onLoop: s,
      dense: l = !1,
      orientation: u = `both`,
      direction: m,
      highlightedIndex: T,
      onHighlightedIndexChange: N,
      rootRef: I,
      enableHomeAndEndKeys: R = !1,
      stopEventPropagation: z = !1,
      disabledIndices: B,
      modifierKeys: V = L,
    } = e,
    [H, U] = P.useState(0),
    W = n > 1,
    G = P.useRef(null),
    K = i(G, I),
    q = P.useRef([]),
    J = P.useRef(!1),
    Y = T ?? H,
    X = o((e, t = !1) => {
      if (((N ?? U)(e), t)) {
        let t = q.current[e];
        M(G.current, t, m, u);
      }
    }),
    Z = o((e) => {
      if (e.size === 0 || J.current) return;
      J.current = !0;
      let t = Array.from(e.keys()),
        n = t.find((e) => e?.hasAttribute(`data-composite-item-active`)) ?? null,
        r = n ? t.indexOf(n) : -1;
      (r !== -1 && X(r), M(G.current, n, m, u));
    }),
    Q = o((e, t, n) => (s ? s?.(e, t, n, q) : n)),
    $ = P.useMemo(
      () => ({
        "aria-orientation": u === `both` ? void 0 : u,
        ref: K,
        onFocus(e) {
          let t = G.current,
            n = h(e.nativeEvent);
          t && n != null && S(n) && n.setSelectionRange(0, n.value.length ?? 0);
        },
        onKeyDown(e) {
          let i = R ? j : f;
          if (!i.has(e.key) || ee(e, V) || !G.current) return;
          let o = m === `rtl`,
            T = o ? c : r,
            M = { horizontal: T, vertical: d, both: T }[u],
            N = o ? r : c,
            P = { horizontal: N, vertical: y, both: N }[u],
            I = h(e.nativeEvent);
          if (I != null && S(I) && !F(I)) {
            let t = I.selectionStart,
              n = I.selectionEnd,
              r = I.value ?? ``;
            if (
              t == null ||
              e.shiftKey ||
              t !== n ||
              (e.key !== P && t < r.length) ||
              (e.key !== M && t > 0)
            )
              return;
          }
          let L = Y,
            H = w(q, B),
            U = p(q, B);
          if (W) {
            let r = t || Array.from({ length: q.current.length }, () => ({ width: 1, height: 1 })),
              i = v(r, n, l),
              s = i.findIndex((e) => e != null && !g(q.current, e, B)),
              c = i.reduce((e, t, n) => (t != null && !g(q.current, t, B) ? n : e), -1);
            L =
              i[
                b(
                  i.map((e) => (e == null ? null : q.current[e])),
                  {
                    event: e,
                    orientation: u,
                    loopFocus: a,
                    onLoop: Q,
                    cols: n,
                    disabledIndices: E(
                      [...(B || q.current.map((e, t) => (g(q.current, t) ? t : void 0))), void 0],
                      i,
                    ),
                    minIndex: s,
                    maxIndex: c,
                    prevIndex: C(
                      Y > U ? H : Y,
                      r,
                      i,
                      n,
                      e.key === `ArrowDown` ? `bl` : e.key === `ArrowRight` ? `tr` : `tl`,
                    ),
                    rtl: o,
                  },
                )
              ];
          }
          let K = { horizontal: [T], vertical: [d], both: [T, d] }[u],
            J = { horizontal: [N], vertical: [y], both: [N, y] }[u],
            Z = W ? i : { horizontal: R ? x : D, vertical: R ? _ : k, both: i }[u];
          (R && (e.key === `Home` ? (L = H) : e.key === `End` && (L = U)),
            L === Y &&
              (K.includes(e.key) || J.includes(e.key)) &&
              (a && L === U && K.includes(e.key)
                ? ((L = H), s && (L = s(e, Y, L, q)))
                : a && L === H && J.includes(e.key)
                  ? ((L = U), s && (L = s(e, Y, L, q)))
                  : (L = A(q.current, {
                      startingIndex: L,
                      decrement: J.includes(e.key),
                      disabledIndices: B,
                    }))),
            L !== Y &&
              !O(q.current, L) &&
              (z && e.stopPropagation(),
              Z.has(e.key) && e.preventDefault(),
              X(L, !0),
              queueMicrotask(() => {
                q.current[L]?.focus();
              })));
        },
      }),
      [n, l, m, B, q, R, Y, W, t, a, s, Q, K, V, X, u, z],
    );
  return P.useMemo(
    () => ({
      props: $,
      highlightedIndex: Y,
      onHighlightedIndexChange: X,
      elementsRef: q,
      disabledIndices: B,
      onMapChange: Z,
      relayKeyboardEvent: $.onKeyDown,
    }),
    [$, Y, X, q, B, Z],
  );
}
function ee(e, t) {
  for (let n of m.values()) if (!t.includes(n) && e.getModifierState(n)) return !0;
  return !1;
}
var z = e(n());
function B(e) {
  let {
      render: t,
      className: n,
      style: r,
      refs: i = a,
      props: o = a,
      state: c = s,
      stateAttributesMapping: d,
      highlightedIndex: f,
      onHighlightedIndexChange: p,
      orientation: m,
      dense: h,
      itemSizes: g,
      loopFocus: _,
      onLoop: v,
      cols: y,
      enableHomeAndEndKeys: b,
      onMapChange: x,
      stopEventPropagation: S = !0,
      rootRef: C,
      disabledIndices: w,
      modifierKeys: E,
      highlightItemOnHover: D = !1,
      tag: O = `div`,
      ...k
    } = e,
    {
      props: A,
      highlightedIndex: j,
      onHighlightedIndexChange: M,
      elementsRef: F,
      onMapChange: I,
      relayKeyboardEvent: L,
    } = R({
      itemSizes: g,
      cols: y,
      loopFocus: _,
      onLoop: v,
      dense: h,
      orientation: m,
      highlightedIndex: f,
      onHighlightedIndexChange: p,
      rootRef: C,
      stopEventPropagation: S,
      enableHomeAndEndKeys: b,
      direction: T(),
      disabledIndices: w,
      modifierKeys: E,
    }),
    ee = N(O, e, { state: c, ref: i, props: [A, ...o, k], stateAttributesMapping: d }),
    B = P.useMemo(
      () => ({
        highlightedIndex: j,
        onHighlightedIndexChange: M,
        highlightItemOnHover: D,
        relayKeyboardEvent: L,
      }),
      [j, M, D, L],
    );
  return (0, z.jsx)(l.Provider, {
    value: B,
    children: (0, z.jsx)(u, {
      elementsRef: F,
      onMapChange: (e) => {
        (x?.(e), I(e));
      },
      children: ee,
    }),
  });
}
export { I as n, B as t };
//# sourceMappingURL=CompositeRoot-CdXTuOFh.js.map
