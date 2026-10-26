import { i as e, n as t } from "./rolldown-runtime-COiEfhsA.js";
import { t as n } from "./react-BP46yLMB.js";
import { n as r, t as i } from "./jsx-runtime-BQExFN_X.js";
import { G as a, l as o } from "./useSettings-N-JG2LFZ.js";
import {
  B as s,
  N as c,
  a as l,
  f as u,
  i as d,
  n as f,
  o as p,
  p as m,
  r as h,
  t as g,
  u as _,
} from "./useNextRenderData-JbRG-cVc.js";
import { tt as v } from "./getDiffFileInput-DNKgimbU.js";
import { t as y } from "./DiffWorkerPoolProvider-BENB1zWt.js";
import { n as b, r as x, t as S } from "./renderFileChildren-CwiHlgqc.js";
import { u as C } from "./contextPresentationRegistry-bLqqn4rn.js";
import { Bc as w, Qs as T, Vc as E, Vs as D } from "./main-BZa0O6xN.js";
var O = e(n(), 1),
  k = typeof window > `u` ? O.useEffect : O.useLayoutEffect;
function A({
  file: e,
  options: t,
  editorOptions: n,
  editStateKey: r,
  lineAnnotations: i,
  selectedLines: a,
  prerenderedHTML: o,
  metrics: c,
  hasGutterRenderUtility: l,
  hasCustomHeader: h,
  disableWorkerPool: _,
  edit: y,
  onEditChange: S,
  onEditComplete: C,
}) {
  let w = d(),
    T = a !== void 0,
    D = (0, O.useContext)(p),
    A = u(),
    M = m((e) => S?.(e)),
    I = S == null ? void 0 : M,
    L = (0, O.useRef)(null),
    R = m((e) => {
      let t = C?.(e) ?? `reject`;
      return (
        t === `accept` &&
          (L.current = {
            file: { installed: e.file, stale: e.originalFile },
            annotations: { installed: e.lineAnnotations, stale: e.originalLineAnnotations },
          }),
        t
      );
    }),
    z = C == null ? void 0 : R,
    B = (0, O.useRef)(null),
    V = f(),
    H = j(L, e, i),
    U = g(B, H) ?? { file: e, lineAnnotations: i ?? E },
    W = (0, O.useRef)(null),
    G = m(() => {
      if (A == null) throw Error(`File: EditContext is not attached`);
      return A(`file`, n ?? {}, r);
    }),
    K = m((n) => {
      if (n != null) {
        if (B.current != null)
          throw Error(`File: An instance should not already exist when a node is created`);
        (w == null
          ? (B.current = new x(
              P({
                controlledSelection: T,
                hasCustomHeader: h,
                hasGutterRenderUtility: l,
                onEditChange: I,
                onEditComplete: z,
                options: t,
              }),
              _ ? void 0 : D,
              V,
            ))
          : (B.current = new b(
              P({
                controlledSelection: T,
                hasCustomHeader: h,
                hasGutterRenderUtility: l,
                onEditChange: I,
                onEditComplete: z,
                options: t,
              }),
              w,
              c,
              _ ? void 0 : D,
              V,
            )),
          y && W.current == null && (W.current = F(B.current, G)),
          B.current.hydrate({ file: e, fileContainer: n, lineAnnotations: i, prerenderedHTML: o }));
      } else {
        if (B.current == null) throw Error(`File: A File instance should exist when unmounting`);
        (B.current.cleanUp(), (B.current = null), (W.current = null));
      }
    });
  k(() => {
    let { current: n } = B;
    if (n == null) return;
    let r = P({
        controlledSelection: T,
        hasCustomHeader: h,
        hasGutterRenderUtility: l,
        onEditChange: I,
        onEditComplete: z,
        options: t,
      }),
      o = !s(n.options, r);
    if ((n.setOptions(r), !y && W.current != null)) {
      let { current: e } = W;
      ((W.current = null), e());
    }
    let c = N(e, i, L);
    (n.render({ file: c.file, lineAnnotations: c.lineAnnotations, forceRender: o }),
      a !== void 0 && n.setSelectedLines(a),
      y && W.current == null && ((W.current = F(n, G)), V()));
  });
  let q = (0, O.useCallback)(() => B.current?.getHoveredLine(), []),
    J = (0, O.useCallback)((e) => B.current?.getAnnotationSlotName(e) ?? v(e), []);
  return { ...U, ref: K, getHoveredLine: q, getAnnotationSlotName: J };
}
function j(e, t, n) {
  "use no memo";
  return M(t, n, e.current);
}
function M(e, t, n) {
  return {
    file: n?.file != null && c(e, n.file.stale) ? n.file.installed : e,
    lineAnnotations:
      n?.annotations != null && t === n.annotations.stale ? n.annotations.installed : t,
  };
}
function N(e, t, n) {
  let { current: r } = n,
    i = M(e, t, r);
  return (
    r == null ||
      (r.file != null && !c(e, r.file.stale) && (r.file = null),
      t !== r.annotations?.stale && (r.annotations = null),
      r.file == null && r.annotations == null && (n.current = null)),
    i
  );
}
function P({
  options: e,
  controlledSelection: t,
  hasCustomHeader: n,
  hasGutterRenderUtility: r,
  onEditChange: i,
  onEditComplete: a,
}) {
  return {
    ...e,
    controlledSelection: t,
    renderCustomHeader: n ? _ : e?.renderCustomHeader,
    renderGutterUtility: r ? _ : e?.renderGutterUtility,
    onEditChange: i,
    onEditComplete: a,
  };
}
function F(e, t) {
  let n = t();
  try {
    return n.edit(e);
  } catch (e) {
    throw (n.cleanUp(), e);
  }
}
var I = e(i(), 1);
function L({
  file: e,
  lineAnnotations: t,
  selectedLines: n,
  options: r,
  editorOptions: i,
  editStateKey: a,
  metrics: o,
  className: s,
  style: c,
  renderAnnotation: u,
  renderCustomHeader: d,
  renderHeaderPrefix: f,
  renderHeaderFilenameSuffix: p,
  renderHeaderMetadata: m,
  prerenderedHTML: h,
  renderGutterUtility: g,
  disableWorkerPool: _ = !1,
  edit: v = !1,
  onEditChange: y,
  onEditComplete: b,
}) {
  let {
      ref: x,
      getHoveredLine: C,
      getAnnotationSlotName: T,
      file: E,
      lineAnnotations: D,
    } = A({
      file: e,
      options: r,
      editorOptions: i,
      editStateKey: a,
      metrics: o,
      lineAnnotations: t,
      selectedLines: n,
      prerenderedHTML: h,
      hasGutterRenderUtility: g != null,
      hasCustomHeader: d != null,
      disableWorkerPool: _,
      edit: v,
      onEditChange: y,
      onEditComplete: b,
    }),
    O = S({
      file: E,
      renderAnnotation: u,
      renderCustomHeader: d,
      renderHeaderPrefix: f,
      renderHeaderFilenameSuffix: p,
      renderHeaderMetadata: m,
      renderGutterUtility: g,
      lineAnnotations: D,
      getHoveredLine: C,
      getAnnotationSlotName: T,
    });
  return (0, I.jsx)(w, { ref: x, className: s, style: c, children: l(O, h) });
}
var R = t({ default: () => B }),
  z = r();
function B(e) {
  let t = (0, z.c)(22),
    n = a(),
    r = o(V),
    i = `${e.name}:${n}:${e.text.length}`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { overscrollSize: 600, intersectionObserverMargin: 1200 }), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === e.cacheKey
    ? (c = t[2])
    : ((c = e.cacheKey ? { cacheKey: e.cacheKey } : {}), (t[1] = e.cacheKey), (t[2] = c));
  let l;
  t[3] !== e.name || t[4] !== e.text || t[5] !== c
    ? ((l = { name: e.name, contents: e.text, ...c }),
      (t[3] = e.name),
      (t[4] = e.text),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u = r ? `wrap` : `scroll`,
    d;
  t[7] === n ? (d = t[8]) : ((d = T(n)), (t[7] = n), (t[8] = d));
  let f;
  t[9] === e.onPostRender
    ? (f = t[10])
    : ((f = e.onPostRender ? { onPostRender: e.onPostRender } : {}),
      (t[9] = e.onPostRender),
      (t[10] = f));
  let p;
  t[11] !== n || t[12] !== u || t[13] !== d || t[14] !== f
    ? ((p = {
        disableFileHeader: !0,
        overflow: u,
        theme: d,
        preferredHighlighter: D,
        themeType: n,
        unsafeCSS: C,
        ...f,
      }),
      (t[11] = n),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  t[16] !== l || t[17] !== p
    ? ((m = (0, I.jsx)(L, { file: l, options: p, className: `min-h-full` })),
      (t[16] = l),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let g;
  return (
    t[19] !== i || t[20] !== m
      ? ((g = (0, I.jsx)(y, {
          children: (0, I.jsx)(
            h,
            {
              className: `file-preview-virtualizer min-h-0 flex-1 overflow-auto`,
              config: s,
              children: m,
            },
            i,
          ),
        })),
        (t[19] = i),
        (t[20] = m),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function V(e) {
  return e.wordWrap;
}
export { R as n, L as r, B as t };
//# sourceMappingURL=ReadOnlySourcePreview-C3rcPeWd.js.map
