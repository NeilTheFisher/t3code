import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./jsx-runtime-BQExFN_X.js";
import {
  A as n,
  B as r,
  C as i,
  E as a,
  F as o,
  I as s,
  M as c,
  N as l,
  P as u,
  S as d,
  T as f,
  V as p,
  _ as m,
  c as h,
  g,
  h as _,
  j as v,
  k as y,
  v as b,
  w as x,
  y as S,
} from "./useNextRenderData-JbRG-cVc.js";
import {
  B as ee,
  E as C,
  F as w,
  H as T,
  I as E,
  L as D,
  M as O,
  N as k,
  O as A,
  S as te,
  V as j,
  at as M,
  b as N,
  ct as P,
  et as ne,
  it as re,
  j as F,
  k as I,
  nt as ie,
  ot as ae,
  rt as oe,
  st as L,
  tt as R,
  x as z,
  y as se,
  z as ce,
} from "./getDiffFileInput-DNKgimbU.js";
import { a as le, c as B, i as V, o as ue, s as H } from "./appendItems-C5MDJzmY.js";
import { a as de, c as U, i as W, l as G } from "./DiffWorkerPoolProvider-BENB1zWt.js";
import {
  Gc as fe,
  Hc as pe,
  Ic as me,
  Mc as he,
  Oc as ge,
  Pc as K,
  Uc as _e,
  Vc as ve,
  Wc as ye,
  bc as be,
  fc as q,
  gc as xe,
  mc as Se,
  pc as J,
  xc as Y,
} from "./main-BZa0O6xN.js";
function X(e, t) {
  return t.cacheKey == null
    ? e.file === t && e.sourceContents === t.contents
    : e.cacheKey === t.cacheKey;
}
var Ce = -1,
  we = class {
    options;
    annotationSlotName;
    onRenderUpdate;
    workerManager;
    __id = `file-renderer:${++Ce}`;
    file;
    renderCache;
    pendingHighlightResult;
    computedLang = `text`;
    lineAnnotations = {};
    lineCache;
    pendingStructuralRows;
    textDocumentCache = new WeakMap();
    ownedRows = new WeakSet();
    editSessionActive = !1;
    get fileCache() {
      return this.renderCache?.file;
    }
    constructor(e = { theme: K }, t = R, n, r) {
      ((this.options = e),
        (this.annotationSlotName = t),
        (this.onRenderUpdate = n),
        (this.workerManager = r));
    }
    setOptions(e) {
      this.options = e;
    }
    mergeOptions(e) {
      this.options = { ...this.options, ...e };
    }
    setLineAnnotations(e) {
      this.lineAnnotations = {};
      for (let t of e) {
        let e = this.lineAnnotations[t.lineNumber] ?? [];
        ((this.lineAnnotations[t.lineNumber] = e), e.push(t));
      }
    }
    cleanUp() {
      (this.endEditSession(),
        this.recycle(),
        (this.workerManager = void 0),
        (this.onRenderUpdate = void 0));
    }
    beginEditSession(e, t) {
      let { editSessionActive: n, renderCache: r } = this;
      if (
        ((this.editSessionActive = !0),
        n || (this.pendingHighlightResult = void 0),
        (this.file = e),
        r == null || (n && r.file === e))
      )
        return;
      if (n) {
        (this.clearRenderCache(),
          (this.lineCache = void 0),
          (this.textDocumentCache = new WeakMap()));
        return;
      }
      let { options: i } = this.getRenderOptions(e),
        a = r.file === e,
        o = t != null && l(r.file, t),
        { result: s } = r;
      if (!r.highlighted || s == null || !G(r.options, i) || (!a && !o)) {
        (this.clearRenderCache(),
          (this.lineCache = void 0),
          (this.textDocumentCache = new WeakMap()));
        return;
      }
      if (a) return;
      this.renderCache = { ...r, file: e, result: { ...s, code: [...s.code] } };
      let { lineCache: c } = this;
      this.lineCache =
        c != null && t != null && X(c, t)
          ? { cacheKey: void 0, file: e, sourceContents: e.contents, lines: c.lines }
          : void 0;
    }
    endEditSession(e) {
      if (
        ((this.editSessionActive = !1), (this.pendingHighlightResult = void 0), this.file == null)
      ) {
        (this.clearRenderCache(),
          (this.lineCache = void 0),
          (this.textDocumentCache = new WeakMap()));
        return;
      }
      let { renderCache: t } = this;
      e != null && t != null && t.file !== e && l(t.file, e) && (t.file = e);
    }
    editorRenderReady() {
      return (
        this.renderCache?.options.useTokenTransformer === !0 &&
        this.renderCache.highlighted &&
        this.renderCache.result != null
      );
    }
    recycle() {
      (this.editSessionActive
        ? (this.renderCache != null && (this.renderCache.renderRange = void 0),
          (this.pendingHighlightResult = void 0),
          (this.pendingStructuralRows = void 0))
        : (this.clearRenderCache(),
          (this.lineCache = void 0),
          (this.textDocumentCache = new WeakMap())),
        this.workerManager?.cleanUpTasks(this),
        (this.file = void 0));
    }
    clearRenderCache() {
      ((this.pendingStructuralRows = void 0),
        (this.renderCache = void 0),
        (this.pendingHighlightResult = void 0));
    }
    hydrate(e) {
      this.file = e;
      let { options: t } = this.getRenderOptions(e),
        n = Z(this.getOrCreateLineCache(e).length, this.getTokenizeMaxLength()),
        r = this.workerManager?.getFileResultCache(e);
      (r != null && !G(t, r.options) && (r = void 0),
        (this.renderCache ??= {
          file: e,
          hydrated: !0,
          options: t,
          highlighted: !n && !W(e),
          result: n ? void 0 : r?.result,
          renderRange: void 0,
        }));
      let i = this.getHighlightWorkerManager(e);
      i == null
        ? (J({ theme: this.getLocalHighlightTheme() }) ??
          ((this.computedLang = e.lang ?? q(e.name)),
          this.initializeHighlighter().catch((e) => {
            e instanceof Y || this.onHighlightError(e);
          })))
        : this.renderCache.result == null && !n && i.highlightFileAST(this, e);
    }
    getHighlightWorkerManager(e) {
      let { editSessionActive: t, workerManager: n } = this;
      return !t && n?.isWorkingPool() === !0 && !n.shouldHighlightOnMainThread(e) ? n : void 0;
    }
    cacheHighlightResult(e, t) {
      let { editSessionActive: n, workerManager: r } = this;
      !n && r?.isWorkingPool() === !0 && r.setFileResultCache(e.cacheKey, t);
    }
    getLocalHighlightTheme() {
      return this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? K;
    }
    getEffectiveCodeOptions() {
      let e =
        this.workerManager?.isWorkingPool() === !0
          ? this.workerManager.getFileRenderOptions()
          : void 0;
      return {
        theme: this.getLocalHighlightTheme(),
        tokenizeMaxLineLength: e?.tokenizeMaxLineLength ?? this.options.tokenizeMaxLineLength,
      };
    }
    getRenderOptions(e) {
      let t = (() => {
          if (this.workerManager?.isWorkingPool() === !0) {
            let e = this.workerManager.getFileRenderOptions();
            return this.editSessionActive && e.useTokenTransformer !== !0
              ? { ...e, useTokenTransformer: !0 }
              : e;
          }
          let { tokenizeMaxLineLength: e = 1e3 } = this.options;
          return {
            theme: this.getLocalHighlightTheme(),
            useTokenTransformer: this.editSessionActive || this.options.useTokenTransformer === !0,
            tokenizeMaxLineLength: e,
          };
        })(),
        { renderCache: n } = this;
      return n?.result == null || !l(e, n.file) || !G(t, n.options)
        ? { options: t, forceHighlight: !0 }
        : { options: t, forceHighlight: !1 };
    }
    getFileForNextRender(e) {
      let { options: t } = this.getRenderOptions(e);
      if (this.getReadyRenderResult(e, t) != null) return e;
      let { renderCache: n } = this;
      if (n == null) return e;
      if (l(n.file, e)) return n.file;
      let r = U(e.contents),
        i = e.contents.length === 0 || W(e) || Z(r.length, this.getTokenizeMaxLength());
      return this.canRenderFile(e, t, i) ? e : n.file;
    }
    canRenderFile(e, t, n) {
      let { renderCache: r } = this;
      return r == null || l(r.file, e)
        ? !0
        : n
          ? (r.result == null && r.hydrated !== !0) ||
            (this.workerManager?.isWorkingPool() === !0 &&
              !this.workerManager.shouldHighlightOnMainThread(e)) ||
            J({ theme: t.theme }) != null
          : r.result == null && r.hydrated !== !0
            ? !0
            : this.getHighlightWorkerManager(e) == null
              ? J({ theme: t.theme }) != null
              : !r.highlighted;
    }
    getOrCreateLineCache(e) {
      let { lineCache: t } = this;
      return (
        (t != null && X(t, e)) ||
          (t = { cacheKey: e.cacheKey, file: e, sourceContents: e.contents, lines: U(e.contents) }),
        (this.lineCache = t),
        t.lines
      );
    }
    getLineCount(e) {
      let t = this.getOrCreateLineCache(e);
      return this.textDocumentCache.get(e)?.lineCount ?? t.length;
    }
    updateRenderCache(e, t, n = !1) {
      this.pendingStructuralRows = void 0;
      let { renderCache: r } = this;
      if (r == null) return;
      let { file: i, result: a } = r;
      if (a == null) return;
      let o = n ? new Map() : void 0;
      this.pendingStructuralRows = o;
      let s = this.lineCache != null && X(this.lineCache, i) ? this.lineCache : void 0;
      for (let [t, n] of e) {
        if (o == null && s != null && t < s.lines.length) {
          let e = n.map((e) => e[2]).join(``);
          s.lines[t] = D(s.lines[t] ?? ``, e);
        }
        let e = {
          type: `element`,
          tagName: `div`,
          properties: { "data-line": t + 1, "data-line-type": `context`, "data-line-index": t },
          children: n.map(([e, t, n]) =>
            e === 0 && t === ``
              ? n === ``
                ? { type: `element`, tagName: `br`, properties: {}, children: [] }
                : { type: `text`, value: n }
              : {
                  type: `element`,
                  tagName: `span`,
                  properties: { "data-char": e, style: `color:${t};` },
                  children: [{ type: `text`, value: n }],
                },
          ),
        };
        (this.ownedRows.add(e), o == null ? (a.code[t] = e) : o.set(t, e));
      }
      ((a.baseThemeType = t),
        (r.isDirty = !0),
        o == null &&
          s != null &&
          ((i.contents = s.lines.join(``)), (s.sourceContents = i.contents)));
    }
    applyDocumentChange(e) {
      let { pendingStructuralRows: t, renderCache: n } = this;
      this.pendingStructuralRows = void 0;
      let r = this.file ?? n?.file;
      if (r == null) return;
      let i = n?.result,
        a = this.lineCache != null && X(this.lineCache, r) ? this.lineCache.lines : U(r.contents),
        o = U(e.getText());
      if (i != null && a.length !== o.length) {
        let r = Math.min(a.length, o.length),
          s = 0;
        for (; s < r && a[s] === o[s];) s++;
        let c = 0;
        for (; c < r - s && a[a.length - 1 - c] === o[o.length - 1 - c];) c++;
        let l = i.code;
        i.code = Array(o.length);
        for (let e = 0; e < s; e++) i.code[e] = l[e];
        for (let e = 0; e < c; e++) i.code[o.length - 1 - e] = l[a.length - 1 - e];
        if (t !== void 0) for (let [e, n] of t) e < o.length && (i.code[e] = n);
        for (let t = s; t < o.length - c; t++)
          i.code[t] ??= this.ownRow({
            type: `element`,
            tagName: `div`,
            properties: { "data-line": t + 1, "data-line-type": `context`, "data-line-index": t },
            children: [
              {
                type: `element`,
                tagName: `span`,
                properties: { "data-char": 0 },
                children: [{ type: `text`, value: e.getLineText(t) }],
              },
            ],
          });
        for (let e = 0; e < i.code.length; e++) {
          let t = i.code[e];
          if (
            t?.type === `element` &&
            (t.properties[`data-line`] !== e + 1 || t.properties[`data-line-index`] !== e)
          ) {
            let n = this.ownedRows.has(t)
              ? t
              : this.ownRow({ ...t, properties: { ...t.properties } });
            ((n.properties[`data-line`] = e + 1),
              (n.properties[`data-line-index`] = e),
              (i.code[e] = n));
          }
        }
        n != null && (n.isDirty = !0);
      }
      let s = e.getText();
      ((this.lineCache = { cacheKey: r.cacheKey, file: r, sourceContents: s, lines: o }),
        this.textDocumentCache.set(r, e),
        (r.contents = s));
    }
    ownRow(e) {
      return (this.ownedRows.add(e), e);
    }
    renderFile(e = this.file, t = he) {
      if (((this.file = e), e == null)) {
        this.pendingHighlightResult = void 0;
        return;
      }
      let { options: n, forceHighlight: r } = this.getRenderOptions(e),
        i = this.getReadyRenderResult(e, n);
      ((this.pendingHighlightResult = void 0),
        i != null && ((this.renderCache = { ...i, file: e, renderRange: void 0 }), (r = !1)),
        (this.renderCache ??= {
          file: e,
          highlighted: !1,
          options: n,
          result: void 0,
          renderRange: void 0,
        }));
      let a = this.getOrCreateLineCache(e),
        o = e.contents.length > 0,
        s = !o || W(e) || Z(a.length, this.getTokenizeMaxLength()),
        c = this.canRenderFile(e, n, s),
        u = !l(e, this.renderCache.file),
        d = !ae(this.renderCache.renderRange, t),
        f = this.getHighlightWorkerManager(e);
      if (f != null) {
        let i =
          this.renderCache.result == null && this.renderCache.highlighted && !s && !u && ne(t);
        (c &&
          !i &&
          (s || this.renderCache.result == null || (!this.renderCache.highlighted && (u || d))) &&
          ((this.renderCache.file = e),
          (this.renderCache.options = n),
          (this.renderCache.highlighted = !1),
          (this.renderCache.result == null || u || d || r) &&
            (this.renderCache.result = f.getPlainFileAST(e, t.startingLine, t.totalLines, a)),
          (this.renderCache.renderRange = t)),
          !s && o && (!this.renderCache.highlighted || r) && f.highlightFileAST(this, e));
      } else {
        this.computedLang = e.lang ?? q(e.name);
        let i = J(),
          a = i != null && xe(n.theme, i),
          o = i != null && L(this.computedLang, i),
          l = !s && o,
          u = Number.isFinite(t.totalLines);
        if (
          c &&
          i != null &&
          a &&
          (r || s || (!this.renderCache.highlighted && l) || this.renderCache.result == null)
        ) {
          let { result: t, options: n } = this.renderFileWithHighlighter(e, i, s || !o, u);
          ((this.renderCache = {
            file: e,
            options: n,
            highlighted: l,
            result: t,
            renderRange: void 0,
          }),
            l && this.cacheHighlightResult(e, { result: t, options: n }));
        }
        (a && (s || o)) ||
          this.asyncHighlight(e, u)
            .then(({ result: t, options: n }) => {
              (s || this.cacheHighlightResult(e, { result: t, options: n }),
                this.applyHighlightResult(e, t, n, !s));
            })
            .catch((e) => {
              e instanceof Y || this.onHighlightError(e);
            });
      }
      return this.renderCache.result == null
        ? void 0
        : this.processFileResult(this.renderCache.file, t, this.renderCache.result);
    }
    async asyncRender(e, t = he) {
      this.file = e;
      let { result: n } = await this.asyncHighlight(e, Number.isFinite(t.totalLines));
      return this.processFileResult(e, t, n);
    }
    async asyncHighlight(e, t = !1) {
      let n = Z(this.getOrCreateLineCache(e).length, this.getTokenizeMaxLength());
      this.computedLang = n ? `text` : (e.lang ?? q(e.name));
      let r = J(),
        i = r != null && xe(this.getLocalHighlightTheme(), r),
        a = n || (r != null && L(this.computedLang, r));
      return (
        (r != null && i && a) || (r = await this.initializeHighlighter()),
        this.renderFileWithHighlighter(e, r, n, t)
      );
    }
    renderFileWithHighlighter(e, t, n = !1, r = !1) {
      let { options: i } = this.getRenderOptions(e);
      return { result: de(e, t, i, { forcePlainText: n, lazyLineAST: r }), options: i };
    }
    processFileResult(e, t, { code: n, themeStyles: r, baseThemeType: i }) {
      let a = this.getLineCount(e),
        { disableFileHeader: o = !1 } = this.options,
        s = [],
        c = H(),
        l = Math.min(t.startingLine + t.totalLines, a),
        u = 0,
        d = j(t) ? ce(this.lineAnnotations) : void 0;
      d != null &&
        (c.children.push(le(`context`, `annotation`, 1)),
        s.push(
          M({
            type: `annotation`,
            hunkIndex: -1,
            lineIndex: -1,
            annotations: d.map((e) => this.annotationSlotName(e)),
          }),
        ),
        u++);
      for (let r = t.startingLine; r < l; r++) {
        let t = r + 1,
          i = n[r];
        if (i == null) {
          let n = `FileRenderer.processFileResult: Line doesnt exist`;
          throw (console.error(n, { name: e.name, lineIndex: r, lineNumber: t }), Error(n));
        }
        (c.children.push(ue(`context`, t, `${r}`)), s.push(i), u++);
        let a = this.lineAnnotations[t];
        a != null &&
          (c.children.push(le(`context`, `annotation`, 1)),
          s.push(
            M({
              type: `annotation`,
              hunkIndex: 0,
              lineIndex: t,
              annotations: a.map((e) => this.annotationSlotName(e)),
            }),
          ),
          u++);
      }
      return (
        (c.properties.style = `grid-row: span ${u}`),
        {
          file: e,
          gutterAST: c.children ?? [],
          contentAST: s,
          preAST: this.createPreElement(a),
          headerAST: o ? void 0 : this.renderHeader(e),
          totalLines: a,
          rowCount: u,
          themeStyles: r,
          baseThemeType: i,
          bufferBefore: t.bufferBefore,
          bufferAfter: t.bufferAfter,
          css: ``,
        }
      );
    }
    renderHeader(e) {
      let { headerRenderMode: t = `default`, stickyHeader: n = !1 } = this.options;
      return re({ fileOrDiff: e, mode: t, stickyHeader: n });
    }
    renderFullHTML(e) {
      return V(this.renderFullAST(e));
    }
    renderFullAST(e, t = []) {
      return (
        t.push(
          B({ tagName: `code`, children: this.renderCodeAST(e), properties: { "data-code": `` } }),
        ),
        { ...e.preAST, children: t }
      );
    }
    renderCodeAST(e) {
      let t = H();
      return (
        (t.children = e.gutterAST),
        (t.properties.style = `grid-row: span ${e.rowCount}`),
        [t, E(e.contentAST, e.rowCount)]
      );
    }
    renderPartialHTML(e, t = !1) {
      return V(t ? B({ tagName: `code`, children: e, properties: { "data-code": `` } }) : e);
    }
    initializeHighlighter() {
      return Se(
        ie(this.computedLang, {
          theme: this.getLocalHighlightTheme(),
          preferredHighlighter: T(this.workerManager, this.options),
        }),
      );
    }
    onHighlightSuccess(e, t, n, r = !0) {
      this.editSessionActive || this.applyHighlightResult(e, t, n, r);
    }
    applyHighlightResult(e, t, n, r = !0) {
      let { file: i, renderCache: a } = this;
      i != null &&
        a != null &&
        l(e, i) &&
        G(n, this.getRenderOptions(i).options) &&
        ((a.result != null && a.highlighted && G(a.options, n) && l(a.file, i)) ||
          ((this.pendingHighlightResult = { file: i, options: n, highlighted: r, result: t }),
          this.onRenderUpdate?.()));
    }
    getMatchingWorkerResultCache(e, t) {
      if (this.editSessionActive) return;
      let n = this.workerManager?.getFileResultCache(e);
      if (n != null && G(t, n.options)) return n;
    }
    getReadyRenderResult(e, t) {
      let { pendingHighlightResult: n } = this;
      if (n != null && l(n.file, e) && G(n.options, t)) return n;
      let r = this.getMatchingWorkerResultCache(e, t);
      if (!(r == null || this.hasHighlightedRenderCache(e, t)))
        return { file: e, highlighted: !0, ...r };
    }
    hasHighlightedRenderCache(e, t) {
      let { renderCache: n } = this;
      return n?.result != null && n.highlighted && l(e, n.file) && G(t, n.options);
    }
    onHighlightError(e) {
      console.error(e);
    }
    getTokenizeMaxLength() {
      return this.options.tokenizeMaxLength ?? 1e5;
    }
    createPreElement(e) {
      let { disableLineNumbers: t = !1, overflow: n = `scroll` } = this.options;
      return oe({
        type: `file`,
        diffIndicators: `none`,
        disableBackground: !0,
        disableLineNumbers: t,
        overflow: n,
        split: !1,
        totalLines: e,
      });
    }
  };
function Z(e, t) {
  return e > t;
}
function Te(e, t) {
  return e.lineNumber === t.lineNumber && e.metadata === t.metadata;
}
function Ee(e) {
  return {
    theme: e?.theme,
    disableLineNumbers: e?.disableLineNumbers,
    overflow: e?.overflow,
    themeType: e?.themeType,
    collapsed: e?.collapsed,
    disableFileHeader: e?.disableFileHeader,
    disableVirtualizationBuffers: e?.disableVirtualizationBuffers,
    stickyHeader: e?.stickyHeader,
    preferredHighlighter: e?.preferredHighlighter,
    useCSSClasses: e?.useCSSClasses,
    useTokenTransformer: A(e),
    tokenizeMaxLineLength: e?.tokenizeMaxLineLength,
    tokenizeMaxLength: e?.tokenizeMaxLength,
    unsafeCSS: e?.unsafeCSS,
    headerRenderMode: e?.renderCustomHeader == null ? `default` : `custom`,
  };
}
var De = [``];
function Oe(e) {
  let t = { ...e };
  return (delete t.cacheKey, t);
}
var ke = -1,
  Ae = class {
    options;
    workerManager;
    requestOwnerRender;
    static LoadedCustomComponent = !0;
    __id = `file:${++ke}`;
    type = `file`;
    fileContainer;
    spriteSVG;
    pre;
    code;
    bufferBefore;
    bufferAfter;
    themeCSSStyle;
    appliedThemeCSS;
    hasAdoptedThemeCSS = !1;
    unsafeCSSStyle;
    appliedUnsafeCSS;
    gutterUtilityContent;
    errorWrapper;
    placeHolder;
    lastRenderedHeaderHTML;
    cachedHeaderHTML;
    appliedPreAttributes;
    lastRowCount;
    mounted = !1;
    headerElement;
    headerCustom;
    headerPrefix;
    headerFilenameSuffix;
    headerMetadata;
    fileRenderer;
    resizeManager;
    interactionManager;
    annotationCache = new Map();
    get lineAnnotations() {
      return this.renderedData?.lineAnnotations ?? ve;
    }
    managersDirty = !1;
    file;
    editSession;
    renderedData;
    pendingData;
    forceRenderOverride;
    renderRange;
    enabled = !0;
    editor;
    constructor(e = { theme: K }, t, n) {
      ((this.options = e),
        (this.workerManager = t),
        (this.requestOwnerRender = n),
        (this.fileRenderer = new we(
          e,
          this.getAnnotationSlotName,
          this.handleHighlightRender,
          this.workerManager,
        )),
        (this.resizeManager = new u()),
        (this.interactionManager = new o(`file`, s(e))),
        this.workerManager?.subscribeToThemeChanges(this));
    }
    getAnnotationSlotName = (e) => b(this.editSession?.annotations, e, R);
    handleHighlightRender = () => {
      this.rerender();
    };
    rerender() {
      let e = this.getInputFile();
      this.enabled &&
        e != null &&
        (this.requestRender() ||
          this.render({ file: e, forceRender: !0, renderRange: this.renderRange }));
    }
    requestRender() {
      let { requestOwnerRender: e } = this;
      return this.editSession != null || e == null
        ? !1
        : ((this.forceRenderOverride = !0), e(), !0);
    }
    get isComponentManaged() {
      return this.requestOwnerRender != null;
    }
    getTheme() {
      return this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? K;
    }
    getInputFile() {
      return this.file;
    }
    getWorkingFile(e = this.file) {
      return this.editSession?.file ?? e;
    }
    getRenderedFile() {
      return this.renderedData?.file;
    }
    __getNextRenderData({ file: e, lineAnnotations: t }) {
      let n = this.editSession?.annotations;
      if (n != null)
        return { file: e, lineAnnotations: t != null && this.isNewAnnotations(t) ? t : n.provided };
      let r = this.getWorkingFile(e) ?? e,
        i = this.fileRenderer.getFileForNextRender(r);
      return { file: i, lineAnnotations: t != null && l(i, r) ? t : this.getAnnotationsForFile(i) };
    }
    getLatestAnnotations() {
      return (
        this.pendingData?.lineAnnotations ??
        this.editSession?.annotations?.current ??
        this.lineAnnotations
      );
    }
    getAnnotationsForFile(e) {
      let { pendingData: t } = this;
      return t != null && l(e, t.file) ? t.lineAnnotations : this.lineAnnotations;
    }
    adoptRenderData(e) {
      let { pendingData: t } = this,
        n = t != null && l(e, t.file);
      ((this.renderedData = {
        file: e,
        lineAnnotations: n ? t.lineAnnotations : this.lineAnnotations,
      }),
        n && (this.pendingData = void 0));
    }
    isNewAnnotations(e) {
      let t = this.editSession?.annotations;
      return e === this.getLatestAnnotations()
        ? !1
        : t == null || (e !== t.provided && e !== t.current);
    }
    updateInputFile(e, t) {
      if (l(this.getInputFile(), e)) return !1;
      let n = this.editSession != null,
        r = this.getLatestAnnotations();
      return (
        (this.file = e),
        n || this.editor != null
          ? this.installEditSession(e, n ? void 0 : this.editor?.__getDocumentContents(e), !0)
          : (this.editSession = void 0),
        this.editSession?.annotations != null &&
          t != null &&
          (this.editSession.annotations = m(t, R, this.editSession.annotations)),
        (this.pendingData = {
          file: this.editSession?.file ?? e,
          lineAnnotations: this.editSession?.annotations?.current ?? t ?? r,
        }),
        !0
      );
    }
    installEditSession(e, t, n = !1) {
      let r = t == null || (t.name === e.name && t.lang === e.lang && t.contents === e.contents),
        i = Oe(t ?? e),
        a = this.editSession?.annotations ?? m(this.getLatestAnnotations(), R);
      ((this.editSession = { file: i, inputFile: e, externalReplacement: n && r, annotations: a }),
        (this.pendingData = { file: i, lineAnnotations: a.current }),
        this.fileRenderer.beginEditSession(i, r ? e : void 0));
    }
    onThemeChange() {
      (this.fileRenderer.clearRenderCache(), this.rerender());
    }
    setOptions(e) {
      e != null &&
        ((this.options = e), (this.cachedHeaderHTML = void 0), this.syncInteractionOptions());
    }
    syncInteractionOptions() {
      this.interactionManager.setOptions(s(this.options));
    }
    mergeOptions(e) {
      this.options = { ...this.options, ...e };
    }
    setThemeType(e) {
      (this.options.themeType ?? `system`) !== e &&
        (this.mergeOptions({ themeType: e }), this.applyCachedThemeState(e));
    }
    applyCachedThemeState(e) {
      if (
        typeof this.options.theme == `string` ||
        this.fileContainer == null ||
        this.appliedThemeCSS == null
      )
        return !1;
      let t = this.appliedThemeCSS.baseThemeType ?? e;
      return (
        this.appliedThemeCSS.themeType !== t &&
        (this.applyThemeState(
          this.fileContainer,
          this.appliedThemeCSS.themeStyles,
          e,
          this.appliedThemeCSS.baseThemeType,
        ),
        !0)
      );
    }
    hasThemeChanged() {
      return this.appliedThemeCSS != null && !P(this.appliedThemeCSS.theme, this.getTheme());
    }
    getHoveredLine = () => this.interactionManager.getHoveredLine();
    setLineAnnotations(e) {
      let t = this.editSession?.annotations;
      if (t != null) {
        if (!this.isNewAnnotations(e)) return;
        S(t, e, R);
      }
      let n = this.getWorkingFile();
      n != null && (this.pendingData = { file: n, lineAnnotations: e });
    }
    syncEditSessionAnnotationsFromEditor(e) {
      let t = this.editSession?.annotations;
      return t == null || e === t.current
        ? !1
        : ((t.current = e),
          this.renderedData != null && (this.renderedData.lineAnnotations = e),
          (this.pendingData = void 0),
          this.fileRenderer.setLineAnnotations(e),
          this.renderAnnotations(),
          !0);
    }
    setSelectedLines(e, t) {
      this.interactionManager.setSelection(e, t);
    }
    setEditorActiveLine(e, t) {
      this.interactionManager.setEditorActiveLine(e, {
        lineNumberOnly: t?.lineNumberOnly,
        side: t?.side ?? `additions`,
      });
    }
    getCodeScrollLeft() {
      return this.code?.scrollLeft ?? 0;
    }
    setCodeScrollLeft(e) {
      this.code != null && (this.code.scrollLeft = e);
    }
    __getEffectiveCodeOptions() {
      return { ...this.options, ...this.fileRenderer.getEffectiveCodeOptions() };
    }
    flushManagers() {
      if (!this.managersDirty || this.pre == null) {
        this.managersDirty = !1;
        return;
      }
      let { overflow: e = `scroll` } = this.options;
      (this.interactionManager.setup(this.pre),
        this.resizeManager.setup(this.pre, {
          disableAnnotations: e === `wrap`,
          columnVariables: this.shouldApplyColumnVariables(e) ? `apply` : `measure`,
        }),
        (this.managersDirty = !1));
    }
    shouldApplyColumnVariables(e) {
      return e === `scroll` && this.lineAnnotations.length > 0;
    }
    cleanUp(e = !1) {
      let t = this.editor;
      (this.emitPostRender(!0),
        t?.cleanUp(e ? `recycle` : `discard`),
        e || (this.editor = void 0),
        this.resizeManager.cleanUp(),
        this.interactionManager.cleanUp(),
        (this.managersDirty = !1),
        this.workerManager?.unsubscribeToThemeChanges(this),
        (this.renderRange = void 0),
        this.isComponentManaged || this.fileContainer?.remove(),
        (this.fileContainer = void 0),
        (this.mounted = !1),
        e || ((this.renderedData = void 0), (this.pendingData = void 0)),
        this.clearAuxiliaryNodes(),
        (this.pre = void 0),
        (this.code = void 0),
        this.bufferBefore?.remove(),
        (this.bufferBefore = void 0),
        this.bufferAfter?.remove(),
        (this.bufferAfter = void 0),
        (this.appliedPreAttributes = void 0),
        (this.lastRowCount = void 0),
        (this.headerElement = void 0),
        (this.headerPrefix = void 0),
        (this.headerFilenameSuffix = void 0),
        (this.headerMetadata = void 0),
        (this.headerCustom = void 0),
        (this.lastRenderedHeaderHTML = void 0),
        e || (this.cachedHeaderHTML = void 0),
        this.errorWrapper?.remove(),
        (this.errorWrapper = void 0),
        (this.spriteSVG = void 0),
        (this.themeCSSStyle = void 0),
        (this.appliedThemeCSS = void 0),
        (this.hasAdoptedThemeCSS = !1),
        (this.unsafeCSSStyle = void 0),
        (this.appliedUnsafeCSS = void 0),
        this.placeHolder?.remove(),
        (this.placeHolder = void 0),
        e
          ? this.fileRenderer.recycle()
          : (this.fileRenderer.cleanUp(),
            (this.workerManager = void 0),
            (this.file = void 0),
            (this.editSession = void 0)),
        (this.enabled = !1));
    }
    virtualizedSetup() {
      ((this.enabled = !0), this.workerManager?.subscribeToThemeChanges(this));
    }
    hydrate(e) {
      let {
        fileContainer: t,
        prerenderedHTML: n,
        preventEmit: r = !1,
        file: i,
        lineAnnotations: a,
      } = e;
      if (!this.enabled) throw Error(`File.hydrate: attempting to call hydrate after cleaned up`);
      if (this.fileContainer != null)
        throw Error(
          `File.hydrate: hydrate can only be called before the instance has rendered or hydrated`,
        );
      this.hydrateElements(t, n);
      let o = this.editor != null;
      (o ||
      je(this.pre, i, this.options.collapsed) ||
      Me(this.headerElement, i, this.options.disableFileHeader)
        ? this.render({ ...e, forceRender: o || e.forceRender, preventEmit: !0 })
        : this.hydrationSetup({ file: i, lineAnnotations: a }),
        r || this.emitPostRender());
    }
    hydrateElements(e, t) {
      (this.fileContainer !== e && this.emitPostRender(!0), f(e, t));
      for (let t of Array.from(e.shadowRoot?.children ?? []))
        t instanceof SVGElement
          ? (this.spriteSVG = t)
          : t instanceof HTMLElement &&
            (t instanceof HTMLPreElement
              ? ((this.pre = t), (this.appliedPreAttributes = void 0))
              : t instanceof HTMLStyleElement && t.hasAttribute(`data-theme-css`)
                ? (this.themeCSSStyle = t)
                : t instanceof HTMLStyleElement && t.hasAttribute(`data-unsafe-css`)
                  ? ((this.unsafeCSSStyle = t), (this.appliedUnsafeCSS = t.textContent))
                  : `diffsHeader` in t.dataset &&
                    ((this.headerElement = t), (this.lastRenderedHeaderHTML = void 0)));
      (this.pre != null &&
        (this.syncCodeNodeFromPre(this.pre), this.pre.removeAttribute(`data-dehydrated`)),
        (this.fileContainer = e),
        this.hydrateMeasuredScrollbar());
    }
    hydrationSetup({ file: e, lineAnnotations: t }) {
      ((this.renderedData = { file: e, lineAnnotations: t ?? this.getLatestAnnotations() }),
        (this.pendingData = void 0),
        (this.file = e),
        this.fileRenderer.setOptions(Ee(this.options)),
        this.syncInteractionOptions(),
        this.pre != null &&
          (this.fileRenderer.hydrate(e),
          this.renderAnnotations(),
          this.renderGutterUtility(),
          this.injectUnsafeCSS(),
          (this.managersDirty = !0),
          this.flushManagers()));
    }
    getOrCreateLineCache(e = this.getWorkingFile()) {
      return e == null ? De : this.fileRenderer.getOrCreateLineCache(e);
    }
    updateBuffers(e) {
      this.pre != null && this.applyBuffers(this.pre, e);
    }
    syncRenderViewToEditor() {
      let { editor: e, fileContainer: t, renderRange: n } = this,
        r = this.getLatestAnnotations(),
        i = this.getWorkingFile();
      if (e == null || t == null || i == null) return;
      let a = (a) => {
          this.enabled &&
            this.editor === e &&
            this.fileContainer === t &&
            this.getWorkingFile() === i &&
            e.__syncRenderView({
              highlighter: a,
              fileContainer: t,
              file: i,
              lineAnnotations: r,
              renderRange: n,
              externalDocument: this.editSession?.externalReplacement === !0,
            });
        },
        o = this.getTheme(),
        s = i.lang ?? q(i.name),
        c = J({ theme: o, lang: s });
      c == null
        ? Se({
            themes: be(o),
            langs: Array.from(new Set([`text`, s])),
            preferredHighlighter: T(this.workerManager, this.options),
          })
            .then(a)
            .catch((e) => {
              e instanceof Y || console.error(e);
            })
        : a(c);
    }
    __acknowledgeDocumentUpdate() {
      this.editSession != null && (this.editSession.externalReplacement = !1);
    }
    __acceptEditorChange(e) {
      let { lineAnnotations: t } = e;
      t != null && this.syncEditSessionAnnotationsFromEditor(t);
    }
    emitEditChange(e) {
      let { onEditChange: t } = this.options;
      t?.(e);
    }
    __captureDocumentSessionState() {}
    __attachEditor(e) {
      if (this.editor != null) throw Error(`File.__attachEditor: an editor is already attached`);
      this.editor = e;
      let t = () => {
        ((this.editor = void 0), this.fileRenderer.endEditSession());
      };
      try {
        return (this.resumeEditorRendering(e), t);
      } catch (e) {
        throw (t(), e);
      }
    }
    __resumeEditor(e) {
      if (this.editor !== e) throw Error(`File.__resumeEditor: editor association changed`);
      this.resumeEditorRendering(e);
    }
    resumeEditorRendering(e) {
      if (this.editSession != null) this.fileRenderer.beginEditSession(this.editSession.file);
      else {
        let t = this.getInputFile();
        t != null && this.installEditSession(t, e.__getDocumentContents(t));
      }
      let t = this.editSession?.file;
      this.fileRenderer.editorRenderReady()
        ? (t != null && this.fileRenderer.fileCache === t && this.adoptRenderData(t),
          this.syncRenderViewToEditor())
        : this.rerender();
    }
    __completeEditSession(e, t) {
      this.settleEditSession(t === `install`, e);
    }
    settleEditSession(e, t) {
      let { editSession: n } = this;
      if (n == null) return;
      let { file: r, inputFile: i, annotations: a } = n,
        o = a?.provided ?? this.lineAnnotations;
      if (this.editor != null)
        throw Error(`File.__completeEditSession: detach the editor before completing the session`);
      let s = a?.current,
        c,
        u = !1,
        d;
      if (t == null) throw Error(`File.__completeEditSession: editor is required for completion`);
      let f = { ...r },
        p = { file: f, editor: t, originalFile: i, lineAnnotations: s, originalLineAnnotations: o };
      Object.freeze(p);
      try {
        if ((t.__emitEditComplete(p), this.options.onEditComplete?.(p) === `accept`)) {
          if (f.cacheKey != null && f.cacheKey === i.cacheKey)
            throw Error(
              `File.__completeEditSession: an accepted file must not reuse the replaced file cacheKey`,
            );
          c = f;
        }
      } catch (e) {
        ((u = !0), (d = e));
      }
      let m = e && c != null ? c : i,
        h = e && c != null ? (s ?? o) : o;
      if (
        ((this.editSession = void 0),
        (this.file = m),
        (this.pendingData = { file: m, lineAnnotations: h }),
        this.fileRenderer.endEditSession(m),
        l(this.getRenderedFile(), m) && this.adoptRenderData(m),
        e && this.fileContainer != null && this.rerender(),
        u)
      )
        throw d;
    }
    applyDocumentChange(e, t) {
      let n = this.editSession?.file;
      if (n == null) throw Error(`File.applyDocumentChange: requires an active edit session`);
      (this.fileRenderer.beginEditSession(n),
        this.fileRenderer.applyDocumentChange(e),
        t != null && this.syncEditSessionAnnotationsFromEditor(t));
    }
    applySuspendedDocumentChange(e, t) {
      this.editSession != null &&
        (this.applyDocumentChange(e, t), this.fileRenderer.clearRenderCache());
    }
    updateRenderCache(e, t, n) {
      let r = this.editSession?.file;
      if (r == null) throw Error(`File.updateRenderCache: requires an active edit session`);
      (this.fileRenderer.beginEditSession(r),
        this.fileRenderer.updateRenderCache(e, t, n?.lineCountChangeInFlight));
    }
    render({
      file: e,
      fileContainer: t,
      forceRender: n = !1,
      preventEmit: r = !1,
      containerWrapper: i,
      deferManagers: a = !1,
      lineAnnotations: o,
      renderRange: s,
    }) {
      if (!this.enabled) throw Error(`File.render: attempting to call render after cleaned up`);
      ((n = this.forceRenderOverride ?? n),
        (this.forceRenderOverride = void 0),
        this.editor?.__postponeBgTokenizeToNextFrame());
      let { collapsed: c = !1, themeType: u = `system` } = this.options,
        d = c ? void 0 : s,
        f = this.renderRange,
        p = this.hasThemeChanged(),
        m =
          o != null &&
          (o.length > 0 || this.getLatestAnnotations().length > 0) &&
          this.isNewAnnotations(o),
        h = !l(this.getInputFile(), e);
      h && this.updateInputFile(e, o);
      let g = this.getWorkingFile(e) ?? e;
      if (!c && !n && ae(d, this.renderRange) && !h && !m && !p) {
        let e = this.applyCachedThemeState(u);
        return (e && this.finalizeRender(), e);
      }
      ((this.renderRange = d),
        h && (this.cachedHeaderHTML = void 0),
        this.fileRenderer.setOptions(Ee(this.options)),
        this.syncInteractionOptions(),
        o != null && this.setLineAnnotations(o));
      let _ = this.fileRenderer.getFileForNextRender(g);
      this.fileRenderer.setLineAnnotations(this.getAnnotationsForFile(_));
      let { disableErrorHandling: v = !1, disableFileHeader: y = !1 } = this.options;
      if (
        (y &&
          (this.headerElement != null &&
            (this.headerElement.remove(),
            (this.headerElement = void 0),
            (this.lastRenderedHeaderHTML = void 0)),
          this.clearHeaderSlots()),
        (t = this.getOrCreateFileContainerNode(t, i)),
        this.applyCachedThemeState(u),
        c)
      ) {
        (this.removeRenderedCode(), this.clearAuxiliaryNodes());
        try {
          let e = this.fileRenderer.renderFile(g, pe);
          (e != null && this.applyThemeState(t, e.themeStyles, u, e.baseThemeType),
            e?.headerAST != null && this.applyHeaderToDOM(e.headerAST, t, e.file),
            this.adoptRenderData(e?.file ?? g),
            this.injectUnsafeCSS());
        } catch (e) {
          if (v) throw e;
          (console.error(e), e instanceof Error && this.applyErrorToDOM(e, t));
        }
        return (this.finalizeRender(), r || this.emitPostRender(), !0);
      }
      try {
        let e = this.getOrCreatePreNode(t),
          r = this.getRenderedFile();
        if (
          !this.canPartiallyRender(n, m, h || p || !l(this.getRenderedFile(), g)) ||
          !this.applyPartialRender(g, f, d)
        ) {
          let n = this.fileRenderer.renderFile(g, d);
          if (n == null)
            return (
              this.workerManager?.isInitialized() === !1 &&
                this.workerManager.isWorkingPool() &&
                this.workerManager
                  .initialize()
                  .catch(() => {})
                  .then(() => this.rerender()),
              !1
            );
          (this.applyThemeState(t, n.themeStyles, u, n.baseThemeType),
            n.headerAST != null && this.applyHeaderToDOM(n.headerAST, t, n.file),
            this.applyFullRender(n, e),
            (r = n.file));
        }
        (this.applyBuffers(e, d),
          this.injectUnsafeCSS(),
          r != null && this.adoptRenderData(r),
          this.renderAnnotations(),
          this.renderGutterUtility(),
          (this.managersDirty = !0),
          a || this.flushManagers(),
          this.finalizeRender(),
          this.editor != null && this.syncRenderViewToEditor());
      } catch (e) {
        if (v) throw e;
        (console.error(e), e instanceof Error && this.applyErrorToDOM(e, t));
      }
      return (r || this.emitPostRender(), !0);
    }
    finalizeRender() {}
    emitPostRender(e = !1) {
      let {
        fileContainer: t,
        options: { onPostRender: n },
      } = this;
      if (e) {
        if (!this.mounted || ((this.mounted = !1), t == null)) return;
        n?.(t, this, `unmount`);
        return;
      }
      if (t == null) return;
      let r = this.mounted ? `update` : `mount`;
      ((this.mounted = !0), n?.(t, this, r));
    }
    removeRenderedCode() {
      (this.resizeManager.cleanUp(),
        this.interactionManager.cleanUp(),
        this.bufferBefore?.remove(),
        (this.bufferBefore = void 0),
        this.bufferAfter?.remove(),
        (this.bufferAfter = void 0),
        this.code?.remove(),
        (this.code = void 0),
        this.pre?.remove(),
        (this.pre = void 0),
        (this.appliedPreAttributes = void 0),
        (this.lastRowCount = void 0));
    }
    clearAuxiliaryNodes() {
      for (let { element: e } of this.annotationCache.values()) e.remove();
      (this.annotationCache.clear(),
        this.gutterUtilityContent?.remove(),
        (this.gutterUtilityContent = void 0));
    }
    canPartiallyRender(e, t, n) {
      return !(e || t || n);
    }
    renderPlaceholder(e) {
      if (this.fileContainer == null) return !1;
      if ((this.emitPostRender(!0), this.cleanChildNodes(), this.placeHolder == null)) {
        let e = this.fileContainer.shadowRoot ?? this.fileContainer.attachShadow({ mode: `open` });
        ((this.placeHolder = document.createElement(`div`)),
          (this.placeHolder.dataset.placeholder = ``),
          e.appendChild(this.placeHolder));
      }
      return this.setPlaceholderHeight(e);
    }
    setPlaceholderHeight(e) {
      return (
        this.placeHolder != null && (this.placeHolder.style.setProperty(`height`, `${e}px`), !0)
      );
    }
    async primeHighlightCache(e = this.getInputFile()) {
      let { workerManager: t } = this;
      if (e == null || t == null || !t.isWorkingPool() || e.cacheKey == null || W(e)) return;
      let n = this.options.tokenizeMaxLength ?? 1e5;
      this.fileRenderer.getOrCreateLineCache(e).length > n ||
        (await t.primeFileHighlightCache(e).catch((e) => {
          C(e) || console.error(e);
        }));
    }
    cleanChildNodes() {
      (this.resizeManager.cleanUp(),
        this.interactionManager.cleanUp(),
        this.clearAuxiliaryNodes(),
        this.bufferAfter?.remove(),
        this.bufferBefore?.remove(),
        this.code?.remove(),
        this.errorWrapper?.remove(),
        this.headerElement?.remove(),
        this.headerPrefix?.remove(),
        this.headerFilenameSuffix?.remove(),
        this.headerMetadata?.remove(),
        this.headerCustom?.remove(),
        this.pre?.remove(),
        this.spriteSVG?.remove(),
        this.themeCSSStyle?.remove(),
        this.unsafeCSSStyle?.remove(),
        (this.bufferAfter = void 0),
        (this.bufferBefore = void 0),
        (this.code = void 0),
        (this.errorWrapper = void 0),
        (this.headerElement = void 0),
        (this.headerPrefix = void 0),
        (this.headerFilenameSuffix = void 0),
        (this.headerMetadata = void 0),
        (this.headerCustom = void 0),
        (this.pre = void 0),
        (this.spriteSVG = void 0),
        (this.themeCSSStyle = void 0),
        (this.appliedThemeCSS = void 0),
        (this.hasAdoptedThemeCSS = !1),
        (this.unsafeCSSStyle = void 0),
        (this.appliedUnsafeCSS = void 0),
        (this.lastRenderedHeaderHTML = void 0),
        (this.lastRowCount = void 0),
        (this.mounted = !1));
    }
    renderAnnotations() {
      if (this.isComponentManaged || this.fileContainer == null) {
        for (let { element: e } of this.annotationCache.values()) e.remove();
        this.annotationCache.clear();
        return;
      }
      let e = new Map(this.annotationCache),
        { renderAnnotation: t } = this.options,
        { renderedData: n } = this;
      if (t != null && n != null) {
        let { file: r, lineAnnotations: i } = n;
        for (let [n, a] of i.entries()) {
          let i = this.getAnnotationSlotName(a),
            o = `${n}-${i}`,
            s = this.annotationCache.get(o);
          if (s == null || s.file !== r || !Te(a, s.annotation)) {
            s?.element.remove();
            let e = t(a, r);
            if (e == null) continue;
            ((s = { element: v(i), annotation: a, file: r }),
              s.element.appendChild(e),
              this.fileContainer.appendChild(s.element),
              this.annotationCache.set(o, s));
          }
          e.delete(o);
        }
      }
      for (let [t, { element: n }] of e.entries()) (this.annotationCache.delete(t), n.remove());
    }
    renderGutterUtility() {
      let { renderGutterUtility: e } = this.options;
      if (this.fileContainer == null || e == null) {
        (this.gutterUtilityContent?.remove(), (this.gutterUtilityContent = void 0));
        return;
      }
      let t = e(this.interactionManager.getHoveredLine);
      if (t != null && this.gutterUtilityContent != null) return;
      if (t == null) {
        (this.gutterUtilityContent?.remove(), (this.gutterUtilityContent = void 0));
        return;
      }
      let r = n();
      (r.appendChild(t), this.fileContainer.appendChild(r), (this.gutterUtilityContent = r));
    }
    injectUnsafeCSS() {
      let { unsafeCSS: e } = this.options;
      this.pre?.toggleAttribute(`data-custom-styles`, !!e);
      let t = this.fileContainer?.shadowRoot;
      t != null &&
        (e == null || e === ``
          ? (this.unsafeCSSStyle != null &&
              (this.unsafeCSSStyle.remove(), (this.unsafeCSSStyle = void 0)),
            (this.appliedUnsafeCSS = void 0))
          : (this.unsafeCSSStyle?.parentNode !== t || this.appliedUnsafeCSS !== e) &&
            ((this.unsafeCSSStyle ??= y()),
            this.unsafeCSSStyle.parentNode !== t && t.appendChild(this.unsafeCSSStyle),
            (this.unsafeCSSStyle.textContent = O(e)),
            (this.appliedUnsafeCSS = e)));
    }
    applyThemeState(e, t, n, r) {
      let i = e.shadowRoot ?? e.attachShadow({ mode: `open` }),
        a = r ?? n,
        o = this.getTheme(),
        s = typeof o == `string` ? o : { ...o },
        c = k(i);
      this.themeCSSStyle?.parentNode === i &&
      this.appliedThemeCSS?.themeStyles === t &&
      this.appliedThemeCSS.themeType === a &&
      this.appliedThemeCSS.scrollbarGutter === c
        ? (this.appliedThemeCSS.theme = s)
        : this.hasAdoptedThemeCSS && this.themeCSSStyle?.parentNode === i
          ? ((this.hasAdoptedThemeCSS = !1),
            (this.appliedThemeCSS = {
              theme: s,
              themeStyles: t,
              themeType: a,
              baseThemeType: r,
              scrollbarGutter: c,
            }))
          : ((this.themeCSSStyle = _({
              shadowRoot: i,
              currentNode: this.themeCSSStyle,
              themeCSS: F(t, a, c),
            })),
            (this.appliedThemeCSS =
              this.themeCSSStyle == null
                ? void 0
                : {
                    theme: s,
                    themeStyles: t,
                    themeType: a,
                    baseThemeType: r,
                    scrollbarGutter: c,
                  }));
    }
    hydrateMeasuredScrollbar() {
      let e = this.fileContainer?.shadowRoot;
      e != null &&
        this.themeCSSStyle != null &&
        (this.themeCSSStyle.textContent = I(this.themeCSSStyle.textContent ?? ``, k(e)));
    }
    shouldGuardRebuildScroll() {
      return this.editor != null && d();
    }
    applyFullRender(e, t) {
      (this.cleanupErrorWrapper(), this.applyPreNodeAttributes(t, e));
      let n = (this.code = a({ code: this.code })),
        r = this.fileRenderer.renderCodeAST(e);
      this.editor?.__captureFocusForDOMReplacement();
      let i = () => {
        if (n.childElementCount >= 2)
          for (let e = 0; e < 2; e++) {
            let t = n.children[e],
              i = r[e];
            ((t.innerHTML = V(i.children)), (t.style.cssText = i.properties.style));
          }
        else n.innerHTML = V(r);
        t.contains(n) || t.replaceChildren(n);
      };
      (this.shouldGuardRebuildScroll() ? g(t, i) : i(), (this.lastRowCount = e.rowCount));
    }
    applyPartialRender(e, t, n) {
      if (t == null || n == null) return !1;
      let { code: r } = this,
        i = r == null ? void 0 : this.getColumns(r);
      if (r == null || i == null) return !1;
      let a = t.startingLine,
        o = n.startingLine,
        s = t.totalLines === 1 / 0 ? 1 / 0 : a + t.totalLines,
        c = n.totalLines === 1 / 0 ? 1 / 0 : o + n.totalLines,
        l = Math.max(a, o),
        u = Math.min(s, c);
      if (u <= l) return !1;
      if (!this.trimDOMToOverlap(i.gutter, l, u) || !this.trimDOMToOverlap(i.content, l, u))
        throw Error(`File.applyPartialRender: failed to trim to overlap`);
      let { length: d } = i.content.children,
        f = (t, n) => {
          if (!(n <= 0))
            return this.fileRenderer.renderFile(e, {
              startingLine: t,
              totalLines: n,
              bufferBefore: 0,
              bufferAfter: 0,
            });
        },
        p = o < l ? f(o, l - o) : void 0;
      if (p === void 0 && o < l) return !1;
      let m = c === 1 / 0 ? 1 / 0 : Math.max(0, c - u),
        h = c > u ? f(u, m) : void 0;
      return h === void 0 && c > u
        ? !1
        : (this.cleanupErrorWrapper(),
          p != null &&
            (i.gutter.insertAdjacentHTML(
              `afterbegin`,
              this.fileRenderer.renderPartialHTML(p.gutterAST),
            ),
            i.content.insertAdjacentHTML(
              `afterbegin`,
              this.fileRenderer.renderPartialHTML(p.contentAST),
            ),
            (d += p.rowCount)),
          h != null &&
            (i.gutter.insertAdjacentHTML(
              `beforeend`,
              this.fileRenderer.renderPartialHTML(h.gutterAST),
            ),
            i.content.insertAdjacentHTML(
              `beforeend`,
              this.fileRenderer.renderPartialHTML(h.contentAST),
            ),
            (d += h.rowCount)),
          this.lastRowCount !== d &&
            (i.gutter.style.setProperty(`grid-row`, `span ${d}`),
            i.content.style.setProperty(`grid-row`, `span ${d}`),
            (this.lastRowCount = d)),
          !0);
    }
    getColumns(e) {
      let t = e.children[0],
        n = e.children[1];
      if (
        t instanceof HTMLElement &&
        n instanceof HTMLElement &&
        t.dataset.gutter != null &&
        n.dataset.content != null
      )
        return { gutter: t, content: n };
    }
    trimDOMToOverlap(e, t, n) {
      let r = this.getDOMBoundaryIndices(e, [t, n]),
        i = r.get(t) ?? e.children.length,
        a = r.get(n) ?? e.children.length;
      if (i > a) return !1;
      for (let t = e.children.length - 1; t >= a; --t) e.children[t]?.remove();
      for (let t = i - 1; t >= 0; --t) e.children[t]?.remove();
      return !0;
    }
    getDOMBoundaryIndices(e, t) {
      let n = [...new Set(t)].sort((e, t) => e - t),
        r = new Map();
      if (n.length === 0) return r;
      let i = 0,
        a = n[i],
        { children: o } = e;
      a === 0 && (r.set(0, 0), (i += 1), (a = n[i]));
      for (let e = 0; e < o.length; e += 1) {
        let t = o[e];
        if (!(t instanceof HTMLElement)) continue;
        let s = this.getLineIndexFromDOMNode(t);
        if (s != null) {
          for (; a != null && s >= a;) (r.set(a, e), (i += 1), (a = n[i]));
          if (i >= n.length) break;
        }
      }
      for (let e of n) r.has(e) || r.set(e, o.length);
      return r;
    }
    getLineIndexFromDOMNode(e) {
      let t = e.dataset.lineIndex;
      if (t == null) return;
      let n = Number(t);
      return Number.isNaN(n) ? void 0 : n;
    }
    applyBuffers(e, t) {
      t == null || this.shouldDisableVirtualizationBuffers()
        ? (this.bufferBefore != null && (this.bufferBefore.remove(), (this.bufferBefore = void 0)),
          this.bufferAfter != null && (this.bufferAfter.remove(), (this.bufferAfter = void 0)))
        : (t.bufferBefore > 0
            ? (this.bufferBefore ??
                ((this.bufferBefore = document.createElement(`div`)),
                (this.bufferBefore.dataset.virtualizerBuffer = `before`),
                e.before(this.bufferBefore)),
              this.bufferBefore.style.setProperty(`height`, `${t.bufferBefore}px`),
              this.bufferBefore.style.setProperty(`contain`, `strict`))
            : this.bufferBefore != null &&
              (this.bufferBefore.remove(), (this.bufferBefore = void 0)),
          t.bufferAfter > 0
            ? (this.bufferAfter ??
                ((this.bufferAfter = document.createElement(`div`)),
                (this.bufferAfter.dataset.virtualizerBuffer = `after`),
                e.after(this.bufferAfter)),
              this.bufferAfter.style.setProperty(`height`, `${t.bufferAfter}px`),
              this.bufferAfter.style.setProperty(`contain`, `strict`))
            : this.bufferAfter != null && (this.bufferAfter.remove(), (this.bufferAfter = void 0)));
    }
    shouldDisableVirtualizationBuffers() {
      return this.options.disableVirtualizationBuffers ?? !1;
    }
    applyHeaderToDOM(e, t, n) {
      (this.cleanupErrorWrapper(), this.placeHolder?.remove(), (this.placeHolder = void 0));
      let r = this.cachedHeaderHTML ?? V(e);
      if (((this.cachedHeaderHTML = r), r !== this.lastRenderedHeaderHTML)) {
        let e = document.createElement(`div`);
        e.innerHTML = r;
        let n = e.firstElementChild;
        if (!(n instanceof HTMLElement)) return;
        (this.headerElement == null
          ? t.shadowRoot?.prepend(n)
          : t.shadowRoot?.replaceChild(n, this.headerElement),
          (this.headerElement = n),
          (this.lastRenderedHeaderHTML = r));
      }
      if (this.isComponentManaged) return;
      let {
        renderHeaderPrefix: i,
        renderHeaderFilenameSuffix: a,
        renderCustomHeader: o,
        renderHeaderMetadata: s,
      } = this.options;
      if (o != null) {
        let e = o(n) ?? void 0;
        ((this.headerCustom = this.upsertHeaderSlotElement(t, this.headerCustom, ge, e)),
          this.headerPrefix?.remove(),
          this.headerFilenameSuffix?.remove(),
          this.headerMetadata?.remove(),
          (this.headerPrefix = void 0),
          (this.headerFilenameSuffix = void 0),
          (this.headerMetadata = void 0));
      } else {
        let e = i?.(n) ?? void 0,
          r = a?.(n) ?? void 0,
          o = s?.(n) ?? void 0;
        ((this.headerPrefix = this.upsertHeaderSlotElement(t, this.headerPrefix, fe, e)),
          (this.headerFilenameSuffix = this.upsertHeaderSlotElement(
            t,
            this.headerFilenameSuffix,
            _e,
            r,
          )),
          (this.headerMetadata = this.upsertHeaderSlotElement(t, this.headerMetadata, ye, o)),
          this.headerCustom?.remove(),
          (this.headerCustom = void 0));
      }
    }
    clearHeaderSlots() {
      (this.headerPrefix?.remove(),
        this.headerFilenameSuffix?.remove(),
        this.headerMetadata?.remove(),
        this.headerCustom?.remove(),
        (this.headerPrefix = void 0),
        (this.headerFilenameSuffix = void 0),
        (this.headerMetadata = void 0),
        (this.headerCustom = void 0));
    }
    upsertHeaderSlotElement(e, t, n, r) {
      if (r == null) {
        t?.remove();
        return;
      }
      let i = t ?? this.createHeaderSlotElement(n);
      return (t ?? e.appendChild(i), this.replaceHeaderSlotContent(i, r), i);
    }
    replaceHeaderSlotContent(e, t) {
      (e.replaceChildren(), t instanceof Element ? e.appendChild(t) : (e.innerText = `${t}`));
    }
    createHeaderSlotElement(e) {
      let t = document.createElement(`div`);
      return ((t.slot = e), t);
    }
    getOrCreateFileContainerNode(e, t) {
      let { fileContainer: n } = this,
        r = e ?? n ?? document.createElement(`diffs-container`),
        i = n !== r;
      return (
        n != null && i && this.editor?.__captureFocusForDOMReplacement(),
        i && this.emitPostRender(!0),
        (this.fileContainer = r),
        n != null && i && ((this.lastRenderedHeaderHTML = void 0), (this.headerElement = void 0)),
        t != null && this.fileContainer.parentNode !== t && t.appendChild(this.fileContainer),
        i && this.adoptReusableShellElements(this.fileContainer),
        this.ensureSpriteSVG(this.fileContainer),
        this.fileContainer
      );
    }
    adoptReusableShellElements(e) {
      let { shadowRoot: t } = e;
      if (t != null)
        for (let e of t.children)
          e instanceof SVGElement
            ? (this.spriteSVG ??= e)
            : i(e) && e.hasAttribute(`data-theme-css`)
              ? ((this.themeCSSStyle ??= e), (this.hasAdoptedThemeCSS = !0))
              : i(e) &&
                e.hasAttribute(`data-unsafe-css`) &&
                ((this.unsafeCSSStyle ??= e),
                (this.appliedUnsafeCSS ??= this.options.unsafeCSS ?? void 0));
    }
    ensureSpriteSVG(e) {
      let t = e.shadowRoot ?? e.attachShadow({ mode: `open` });
      if (this.spriteSVG == null) {
        let e = document.createElement(`div`);
        e.innerHTML = w;
        let t = e.firstChild;
        t instanceof SVGElement && (this.spriteSVG = t);
      }
      this.spriteSVG != null && this.spriteSVG.parentNode !== t && t.appendChild(this.spriteSVG);
    }
    getOrCreatePreNode(e) {
      let t = e.shadowRoot ?? e.attachShadow({ mode: `open` });
      return (
        this.pre == null
          ? ((this.pre = document.createElement(`pre`)),
            (this.appliedPreAttributes = void 0),
            (this.code = void 0),
            t.appendChild(this.pre))
          : this.pre.parentNode !== t &&
            (this.editor?.__captureFocusForDOMReplacement(),
            e.shadowRoot?.appendChild(this.pre),
            (this.appliedPreAttributes = void 0)),
        this.placeHolder?.remove(),
        (this.placeHolder = void 0),
        this.pre
      );
    }
    syncCodeNodeFromPre(e) {
      this.code = void 0;
      for (let t of Array.from(e.children))
        if (t instanceof HTMLElement && t.hasAttribute(`data-code`)) {
          this.code = t;
          return;
        }
    }
    applyPreNodeAttributes(e, { totalLines: t }) {
      let { overflow: n = `scroll`, disableLineNumbers: r = !1 } = this.options,
        i = {
          type: `file`,
          split: !1,
          overflow: n,
          disableLineNumbers: r,
          diffIndicators: `none`,
          disableBackground: !0,
          totalLines: t,
        };
      c(i, this.appliedPreAttributes) || (x(e, i), (this.appliedPreAttributes = i));
    }
    applyErrorToDOM(e, t) {
      (this.cleanupErrorWrapper(),
        this.pre?.remove(),
        (this.pre = void 0),
        (this.appliedPreAttributes = void 0));
      let n = t.shadowRoot ?? t.attachShadow({ mode: `open` });
      ((this.errorWrapper ??= document.createElement(`div`)),
        (this.errorWrapper.dataset.errorWrapper = ``),
        (this.errorWrapper.textContent = ``),
        n.appendChild(this.errorWrapper));
      let r = document.createElement(`div`);
      ((r.dataset.errorMessage = ``), (r.innerText = e.message), this.errorWrapper.appendChild(r));
      let i = document.createElement(`pre`);
      ((i.dataset.errorStack = ``),
        (i.innerText = e.stack ?? `No Error Stack`),
        this.errorWrapper.appendChild(i));
    }
    cleanupErrorWrapper() {
      (this.errorWrapper?.remove(), (this.errorWrapper = void 0));
    }
  };
function je(e, t, n = !1) {
  return !n && e == null && t != null;
}
function Me(e, t, n = !1) {
  return e == null && t != null && !n;
}
var Ne = 5e3,
  Q = new Map(),
  Pe = -1;
function Fe(e, t) {
  return (
    (e.overflow ?? `scroll`) !== (t.overflow ?? `scroll`) ||
    (e.collapsed ?? !1) !== (t.collapsed ?? !1) ||
    (e.disableLineNumbers ?? !1) !== (t.disableLineNumbers ?? !1) ||
    (e.disableFileHeader ?? !1) !== (t.disableFileHeader ?? !1) ||
    e.unsafeCSS !== t.unsafeCSS
  );
}
var Ie = class extends Ae {
  virtualizer;
  metrics;
  __id = `virtualized-file:${++Pe}`;
  renderType = `virtualized`;
  top;
  height = 0;
  cache = {
    heights: new Map(),
    checkpoints: [],
    fileAnnotationHeight: 0,
    codeWidth: void 0,
    ghostTextRows: Q,
  };
  pendingRender;
  isVisible = !1;
  isSetup = !1;
  layoutDirty = !0;
  currentCollapsed;
  constructor(e, t, n = me, r, i) {
    (super(e, r, i), (this.virtualizer = t), (this.metrics = n));
    let a = this.getSimpleVirtualizer();
    a != null && (this.resizeManager.onResize = () => a.requestHeightReconcile(this));
  }
  setMetrics(e, t = !1) {
    let n = se(e);
    (t || !p(this.metrics, n)) && ((this.metrics = n), this.resetLayoutCache());
  }
  setLineAnnotations(e) {
    this.syncLineAnnotations(e) && (this.forceRenderOverride = !0);
  }
  syncLineAnnotations(e) {
    return e == null ||
      !this.isNewAnnotations(e) ||
      (e.length === 0 && this.getLatestAnnotations().length === 0)
      ? !1
      : (super.setLineAnnotations(e), !0);
  }
  syncEditSessionAnnotationsFromEditor(e) {
    return super.syncEditSessionAnnotationsFromEditor(e)
      ? ((this.forceRenderOverride = !0), !0)
      : !1;
  }
  hasLineAnnotations() {
    return this.getLayoutAnnotations().some((e) => e.lineNumber > 0);
  }
  hasUniformLineHeights() {
    let { overflow: e = `scroll` } = this.options;
    return e === `scroll` && !this.hasLineAnnotations() && this.cache.heights.size === 0;
  }
  getLineHeight(e, t = !1) {
    let n = this.cache.heights.get(e);
    if (n != null) return n;
    let r = t ? 2 : 1;
    return this.metrics.lineHeight * r;
  }
  setOptions(e) {
    if (this.isAdvancedMode())
      throw Error(
        `VirtualizedFile.setOptions cannot be used inside CodeView. Update CodeView options instead.`,
      );
    if (e == null) return;
    let { options: t } = this,
      n = !r(t, e),
      i = Fe(t, e);
    (super.setOptions(e),
      i && this.resetLayoutCache(!0),
      n && (this.forceRenderOverride = !0),
      n && this.virtualizer.instanceChanged(this, i));
  }
  setThemeType(e) {
    if (this.isAdvancedMode())
      throw Error(
        `VirtualizedFile.setThemeType cannot be used inside CodeView. Update CodeView options instead.`,
      );
    super.setThemeType(e);
  }
  resetLayoutCache(e = !1, t = !0, n = 0) {
    if (((this.layoutDirty = !0), n === 0 && (this.cache.fileAnnotationHeight = 0), n === 0))
      this.cache.heights.clear();
    else for (let e of this.cache.heights.keys()) e >= n && this.cache.heights.delete(e);
    (this.cache.checkpoints.length > 0 && (this.cache.checkpoints.length = 0),
      (this.cache.ghostTextRows = Q),
      this.renderRange != null && t && (this.renderRange = void 0),
      e && this.isSimpleMode() && this.computeApproximateSize());
  }
  applyGhostTextRows(e) {
    let { heights: t, ghostTextRows: n } = this.cache;
    if (n === e) return !1;
    let { lineHeight: r } = this.metrics,
      i = !1;
    for (let a of new Set([...n.keys(), ...e.keys()])) {
      let o = n.get(a) ?? 0,
        s = e.get(a) ?? 0;
      if (s === o) continue;
      let c = (t.get(a) ?? r) - o * r + s * r;
      (c === r ? t.delete(a) : t.set(a, c), (i = !0));
    }
    return ((this.cache.ghostTextRows = e), i);
  }
  reconcileHeights() {
    let e = !1;
    if (this.fileContainer == null || this.getLayoutFile() == null)
      return (this.height !== 0 && (e = !0), (this.height = 0), e);
    let { overflow: t = `scroll` } = this.options;
    this.top = this.getVirtualizedTop();
    let n = this.editor?.__getGhostTextRows() ?? Q;
    e = this.applyGhostTextRows(n);
    let r = t !== `scroll` || this.lineAnnotations.length > 0 || this.isResizeDebuggingEnabled();
    if (
      this.placeHolder != null ||
      (!r && this.cache.heights.size === 0 && this.cache.fileAnnotationHeight === 0)
    )
      return (e && (this.computeApproximateSize(!0), this.setPlaceholderHeight(this.height)), e);
    let { lineHeight: i } = this.metrics;
    if (this.code == null) return e;
    let a = this.code.children[1];
    if (!(a instanceof HTMLElement)) return e;
    let o = this.code.getBoundingClientRect().width;
    if (!(o > 0)) return e;
    if (
      (this.cache.codeWidth != null &&
        this.cache.codeWidth !== o &&
        (this.resetLayoutCache(!1, !1), (e = !0)),
      (this.cache.codeWidth = o),
      this.renderRange != null && j(this.renderRange))
    ) {
      let t = Le(a) ?? 0;
      t !== this.cache.fileAnnotationHeight && ((this.cache.fileAnnotationHeight = t), (e = !0));
    }
    for (let t of a.children) {
      if (!(t instanceof HTMLElement)) continue;
      let a = t.dataset.lineIndex;
      if (a == null) continue;
      let o = Number(a),
        s = (n.get(o) ?? 0) * i,
        c = this.cache.heights.get(o);
      if (!r && (c == null || c === i + s)) continue;
      let l = t.getBoundingClientRect().height + s,
        u = !1;
      t.nextElementSibling instanceof HTMLElement &&
        (`lineAnnotation` in t.nextElementSibling.dataset ||
          `noNewline` in t.nextElementSibling.dataset) &&
        (`noNewline` in t.nextElementSibling.dataset && (u = !0),
        (l += t.nextElementSibling.getBoundingClientRect().height));
      let d = this.getLineHeight(o, u);
      l !== d &&
        ((e = !0),
        l === this.metrics.lineHeight * (u ? 2 : 1)
          ? this.cache.heights.delete(o)
          : this.cache.heights.set(o, l));
    }
    return ((e || this.isResizeDebuggingEnabled()) && this.computeApproximateSize(!0), e);
  }
  onRender = (e) => {
    let t = this.getInputFile();
    return this.fileContainer == null || t == null
      ? !1
      : (e && (this.top = this.getVirtualizedTop()), this.render({ file: t }));
  };
  updateCodeViewLayout(e, t, n, r) {
    let i = !l(this.getInputFile(), e);
    i && this.updateInputFile(e, r);
    let {
        pendingRenderFile: a,
        layoutFileChanged: o,
        renderedFileChanged: s,
        annotationsChanged: c,
      } = this.updatePendingRender(e, r),
      u = n?.resetFileLayoutCache === !0 || o;
    n?.metrics != null && ((this.metrics = n.metrics), (u = !0));
    let { collapsed: d = !1 } = this.options;
    return (
      this.currentCollapsed !== d && ((this.currentCollapsed = d), (u = !0)),
      u && this.resetLayoutCache(),
      i && (this.layoutDirty = !0),
      !this.forceRenderOverride && (i || s || c) && (this.forceRenderOverride = !0),
      (this.top = t),
      this.computeApproximateSize(!1, a),
      this.height
    );
  }
  getLayoutFile() {
    return this.pendingRender?.file ?? this.getRenderedFile();
  }
  getLayoutAnnotations() {
    let { pendingRender: e } = this;
    return e == null ? this.lineAnnotations : this.getAnnotationsForFile(e.file);
  }
  getLinePosition(e) {
    let t = this.getLayoutFile();
    if (t == null || e < 1) return;
    let { disableFileHeader: n = !1, collapsed: r = !1 } = this.options,
      i = this.fileRenderer.getLineCount(t) - 1;
    if (r) return { top: N(this.metrics, n), height: 0 };
    let a = z(this.metrics, n);
    if (i < 0) return { top: a, height: 0 };
    let o = Math.min(Math.max(e - 1, 0), i),
      { lineHeight: s } = this.metrics;
    if (((a += this.cache.fileAnnotationHeight), this.hasUniformLineHeights()))
      return { top: a + o * s, height: s };
    let c = this.getLayoutCheckpointBeforeLineIndex(o);
    a = c?.top ?? a;
    for (let e = c?.lineIndex ?? 0; e < o; e++) a += this.getLineHeight(e, !1);
    return { top: a, height: this.getLineHeight(o, !1) };
  }
  getEditorViewport() {
    return this.virtualizer.type === `simple`
      ? this.virtualizer.getRoot()
      : this.virtualizer.getContainerElement();
  }
  getNumericScrollAnchor(e) {
    let t = this.getLayoutFile();
    if (t == null || this.renderRange == null) return;
    let { disableFileHeader: n = !1, collapsed: r = !1 } = this.options;
    if (r || this.renderRange.totalLines <= 0) return;
    let i = this.fileRenderer.getLineCount(t) - 1;
    if (i < 0) return;
    let a = z(this.metrics, n),
      o = Math.min(this.renderRange.startingLine, i),
      s = Math.min(o + this.renderRange.totalLines - 1, i);
    if (s < o) return;
    let { fileAnnotationHeight: c } = this.cache;
    if (this.hasUniformLineHeights()) {
      let { lineHeight: t } = this.metrics,
        n = a + (o === 0 ? c : this.renderRange.bufferBefore),
        r = o + Math.max(Math.ceil((e - n) / t), 0);
      return r > s ? void 0 : { lineNumber: r + 1, top: a + c + r * t };
    }
    let l = a + (o === 0 ? c : this.renderRange.bufferBefore);
    for (let t = o; t <= s; t++) {
      if (l >= e) return { lineNumber: t + 1, top: l };
      l += this.getLineHeight(t);
    }
  }
  getVirtualizedHeight() {
    return this.height;
  }
  getAdvancedStickySpecs(e) {
    let t = this.getLayoutFile();
    if (this.top == null || t == null) return;
    if (this.options.collapsed === !0) return { topOffset: this.top, height: this.height };
    let n = e == null ? this.renderRange : this.computeRenderRangeFromWindow(t, this.top, e);
    if (n == null) return;
    let { bufferBefore: r, bufferAfter: i, totalLines: a } = n,
      o = 0;
    if (a === 0) {
      let t = e ?? this.virtualizer.getWindowSpecs();
      this.top < t.top && (o = i);
    }
    return { topOffset: this.top + r + o, height: this.height - (r + i) };
  }
  cleanUp(e = !1) {
    let t = this.cache.ghostTextRows.size > 0;
    t && (this.layoutDirty = !0);
    let n =
      e &&
      this.isAdvancedMode() &&
      this.fileContainer != null &&
      (t || !l(this.getRenderedFile(), this.getWorkingFile()));
    (this.fileContainer != null &&
      this.isSimpleMode() &&
      this.getSimpleVirtualizer()?.disconnect(this.fileContainer),
      e || this.resetLayoutCache(),
      (this.pendingRender = void 0),
      (this.isSetup = !1),
      super.cleanUp(e),
      n && this.virtualizer.instanceChanged(this, !0));
  }
  computeApproximateSize(e = !1, t = this.getLayoutFile()) {
    let n = this.isResizeDebuggingEnabled();
    if (!e && !this.layoutDirty && !n) return;
    let r = this.height === 0;
    if (((this.height = 0), (this.cache.checkpoints = []), t == null)) {
      this.layoutDirty = !1;
      return;
    }
    this.applyGhostTextRows(this.editor?.__getGhostTextRows() ?? Q);
    let { disableFileHeader: i = !1, collapsed: a = !1 } = this.options,
      { lineHeight: o } = this.metrics,
      s = this.fileRenderer.getLineCount(t);
    if (a) {
      ((this.height += N(this.metrics, i)), (this.layoutDirty = !1));
      return;
    }
    let c = z(this.metrics, i),
      l = te(this.metrics);
    if (
      ((this.height += c),
      (this.height += this.cache.fileAnnotationHeight),
      this.hasUniformLineHeights())
    )
      this.height += s * o;
    else
      for (let e = 0; e < s; e++)
        (this.addLayoutCheckpoint(e, this.height), (this.height += this.getLineHeight(e, !1)));
    if ((s > 0 && (this.height += l), this.fileContainer != null && n && !r)) {
      let e = this.fileContainer.getBoundingClientRect();
      e.height === this.height
        ? console.log(`VirtualizedFile.computeApproximateSize: computed height IS CORRECT`)
        : console.log(`VirtualizedFile.computeApproximateSize: computed height doesnt match`, {
            name: t.name,
            elementHeight: e.height,
            computedHeight: this.height,
          });
    }
    this.layoutDirty = !1;
  }
  setVisibility(e) {
    this.isAdvancedMode() ||
      this.fileContainer == null ||
      ((this.renderRange = void 0),
      e && !this.isVisible
        ? ((this.top = this.getVirtualizedTop()), (this.isVisible = !0))
        : !e && this.isVisible && ((this.isVisible = !1), this.rerender()));
  }
  rerender() {
    if (!this.enabled || this.getInputFile() == null) return;
    let e = this.getWorkingFile(),
      t = e == null ? void 0 : this.fileRenderer.getFileForNextRender(e);
    (this.isSimpleMode() && (this.pendingRender = void 0),
      (this.forceRenderOverride = !0),
      !(this.isSimpleMode() && this.requestRender()) &&
        this.virtualizer.instanceChanged(this, !l(this.getRenderedFile(), t)));
  }
  get isComponentManaged() {
    return this.getAdvancedVirtualizer()?.isComponentManaged ?? super.isComponentManaged;
  }
  syncGhostTextRows() {
    let e = this.getAdvancedVirtualizer();
    e == null
      ? this.getSimpleVirtualizer()?.requestHeightReconcile(this)
      : (e.capturePendingLayoutAnchor(), (this.layoutDirty = !0), e.instanceChanged(this, !0));
  }
  applyDocumentChange(e, t, n = !1, r = 0) {
    let { renderRange: i } = this;
    (this.getAdvancedVirtualizer()?.capturePendingLayoutAnchor(),
      super.applyDocumentChange(e, t),
      this.getSimpleVirtualizer()?.markDOMDirty(),
      this.resetLayoutCache(this.isSimpleMode(), !1, r));
    let a = this.getRenderedFile();
    if (!this.isSimpleMode()) this.computeApproximateSize(!0);
    else if (n && i != null && a != null) {
      let e = this.virtualizer.getWindowSpecs(),
        t = this.computeRenderRangeFromWindow(a, this.top ?? 0, e);
      t.bufferAfter !== i.bufferAfter && this.updateBuffers(t);
    }
    ((this.forceRenderOverride = !0), this.virtualizer.instanceChanged(this, !0));
  }
  render({ fileContainer: e, file: t, forceRender: n = !1, lineAnnotations: r, ...i }) {
    let a = !l(this.getInputFile(), t);
    a && (this.updateInputFile(t, r), (this.cachedHeaderHTML = void 0));
    let {
        pendingRenderFile: o,
        layoutFileChanged: s,
        renderedFileChanged: c,
        annotationsChanged: u,
      } = this.pendingRender != null &&
      this.pendingRender.workingFile === (this.getWorkingFile(t) ?? t)
        ? {
            pendingRenderFile: this.pendingRender.file,
            layoutFileChanged: !1,
            renderedFileChanged: !1,
            annotationsChanged: this.syncLineAnnotations(r),
          }
        : this.updatePendingRender(t, r),
      { forceRenderOverride: d, isSetup: f } = this;
    if (
      ((this.forceRenderOverride = void 0),
      s && this.resetLayoutCache(),
      (e = this.getOrCreateFileContainerNode(e)),
      f)
    )
      ((this.top ??= this.getVirtualizedTop()),
        this.layoutDirty &&
          this.isSimpleMode() &&
          (this.getSimpleVirtualizer()?.markDOMDirty(), this.computeApproximateSize(!1, o)));
    else {
      this.computeApproximateSize(!1, o);
      let t = this.getSimpleVirtualizer();
      if (((this.top ??= this.getVirtualizedTop()), this.isAdvancedMode())) this.isVisible = !0;
      else {
        if (t == null) throw Error(`VirtualizedFile.render: simple virtualizer is not available`);
        (t.connect(e, this), (this.isVisible = t.isInstanceVisible(this.top ?? 0, this.height)));
      }
      this.isSetup = !0;
    }
    if (!this.isVisible && this.isSimpleMode() && (!a || !f))
      return this.renderPlaceholder(this.height);
    let p = this.virtualizer.getWindowSpecs(),
      m = this.top ?? 0,
      h = this.computeRenderRangeFromWindow(o, m, p);
    return super.render({
      file: t,
      fileContainer: e,
      renderRange: h,
      lineAnnotations: r,
      forceRender: (d ?? n) || u || c || a,
      ...i,
    });
  }
  finalizeRender() {
    if (this.getRenderedFile() !== this.pendingRender?.file)
      throw Error(`VirtualizedFile.render: rendered a different file than its prepared layout`);
    ((this.pendingRender = void 0),
      this.isSimpleMode() && this.getSimpleVirtualizer()?.requestHeightReconcile(this));
  }
  updatePendingRender(e, t) {
    let n = this.getWorkingFile(e) ?? e,
      r = this.getRenderedFile(),
      i = this.pendingRender?.file ?? r,
      a = this.fileRenderer.getFileForNextRender(n);
    return (
      (this.pendingRender = { workingFile: n, file: a }),
      {
        pendingRenderFile: a,
        annotationsChanged: this.syncLineAnnotations(t),
        layoutFileChanged: !l(i, a),
        renderedFileChanged: !l(r, a),
      }
    );
  }
  syncVirtualizedTop() {
    this.top = this.getVirtualizedTop();
  }
  shouldDisableVirtualizationBuffers() {
    return this.isAdvancedMode() || super.shouldDisableVirtualizationBuffers();
  }
  shouldGuardRebuildScroll() {
    return !1;
  }
  isSimpleMode() {
    return this.virtualizer.type === `simple`;
  }
  isAdvancedMode() {
    return this.virtualizer.type === `advanced`;
  }
  addLayoutCheckpoint(e, t) {
    e % Ne === 0 && this.cache.checkpoints.push({ lineIndex: e, top: t });
  }
  getLayoutCheckpointBeforeLineIndex(e) {
    if (e <= 0 || this.cache.checkpoints.length === 0) return;
    let t = 0,
      n = this.cache.checkpoints.length - 1,
      r;
    for (; t <= n;) {
      let i = (t + n) >> 1,
        a = this.cache.checkpoints[i];
      if (a == null) throw Error(`VirtualizedFile: invalid checkpoint index`);
      a.lineIndex <= e ? ((r = a), (t = i + 1)) : (n = i - 1);
    }
    return r;
  }
  getLayoutCheckpointBeforeTop(e, t) {
    let n = 0,
      r = this.cache.checkpoints.length - 1,
      i = -1;
    for (; n <= r;) {
      let t = (n + r) >> 1,
        a = this.cache.checkpoints[t];
      if (a == null) throw Error(`VirtualizedFile: invalid checkpoint index`);
      a.top <= e ? ((i = t), (n = t + 1)) : (r = t - 1);
    }
    if (t == null) return i >= 0 ? this.cache.checkpoints[i] : void 0;
    for (let e = i; e >= 0; e--) {
      let n = this.cache.checkpoints[e];
      if (n == null) throw Error(`VirtualizedFile: invalid checkpoint index`);
      if (n.lineIndex % t === 0) return n;
    }
  }
  getVirtualizedTop() {
    return this.virtualizer.type === `advanced`
      ? this.virtualizer.getLocalTopForInstance(this)
      : this.fileContainer == null
        ? 0
        : this.virtualizer.getOffsetInScrollContainer(this.fileContainer);
  }
  getSimpleVirtualizer() {
    return this.virtualizer.type === `simple` ? this.virtualizer : void 0;
  }
  getAdvancedVirtualizer() {
    return this.virtualizer.type === `advanced` ? this.virtualizer : void 0;
  }
  isResizeDebuggingEnabled() {
    return this.getSimpleVirtualizer()?.config.resizeDebugging ?? !1;
  }
  computeRenderRangeFromWindow(e, t, { top: n, bottom: r }) {
    let { disableFileHeader: i = !1 } = this.options,
      { hunkLineCount: a, lineHeight: o } = this.metrics,
      s = this.fileRenderer.getLineCount(e),
      c = this.height,
      l = z(this.metrics, i),
      u = s > 0 ? te(this.metrics) : 0,
      { fileAnnotationHeight: d } = this.cache,
      f = l + d,
      p = Math.max(0, c - l - d - u),
      m = ee(this.getLayoutAnnotations()),
      h = t + l,
      g = d > 0 && m && h < r && h + d > n;
    if (t < n - c || t > r)
      return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: c - l - u };
    if (s <= a) return { startingLine: 0, totalLines: a, bufferBefore: 0, bufferAfter: 0 };
    let _ = Math.ceil(Math.max(r - n, 0) / o),
      v = Math.ceil(_ / a) * a + a,
      y = v / a,
      b = (n + r) / 2;
    if (this.hasUniformLineHeights()) {
      let e = t + f,
        i = e + p;
      if (!g && !(e < r && i > n))
        return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: c - l - u };
      let m = Math.floor(g && b < t + f ? 0 : (b - (t + f)) / o),
        h = Math.floor(m / a) - Math.floor(y / 2),
        _ = Math.ceil(s / a),
        x = Math.max(0, Math.min(h, _)) * a,
        S = h < 0 ? v + h * a : v,
        ee = x === 0 ? 0 : d + x * o,
        C = Math.min(S, s - x);
      return {
        startingLine: x,
        totalLines: S,
        bufferBefore: ee,
        bufferAfter: Math.max(0, (s - x - C) * o),
      };
    }
    let x = y,
      S = [],
      C = this.getLayoutCheckpointBeforeTop(Math.max(0, n - t - v * o * 2), a),
      w = t + (C?.top ?? f),
      T = C?.lineIndex ?? 0,
      E,
      D,
      O,
      k = C?.lineIndex ?? 0;
    for (let e = k; e < s; e++) {
      let i = T % a === 0,
        o = Math.floor(T / a);
      if (i && ((S[o] = w - (t + f)), O != null)) {
        if (O <= 0) break;
        O--;
      }
      let s = this.getLineHeight(e, !1);
      (w > n - s && w < r && (E ??= o),
        w + s > b && (D ??= o),
        O == null && w >= r && i && (O = x),
        T++,
        (w += s));
    }
    if (E == null) {
      if (g) ((E = 0), (D = 0));
      else return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: c - l - u };
    }
    D ??= E;
    let A = Math.round(D - y / 2),
      j = Math.max(0, Math.ceil(s / a) - y),
      M = Math.max(0, Math.min(A, j)),
      N = M * a,
      P = A < 0 ? v + A * a : v,
      ne = S[M] ?? 0,
      re = N === 0 ? 0 : d + ne,
      F = M + P / a,
      I = F < S.length ? p - S[F] : p - (w - t - f);
    return { startingLine: N, totalLines: P, bufferBefore: re, bufferAfter: Math.max(0, I) };
  }
};
function Le(e) {
  let t;
  for (let n of e.children)
    n instanceof HTMLElement &&
      n.dataset.lineAnnotation === `-1,-1` &&
      (t = Math.max(t ?? 0, n.getBoundingClientRect().height));
  return t;
}
var $ = e(t(), 1);
function Re({
  file: e,
  renderCustomHeader: t,
  renderHeaderPrefix: n,
  renderHeaderFilenameSuffix: r,
  renderHeaderMetadata: i,
  renderAnnotation: a,
  lineAnnotations: o,
  renderGutterUtility: s,
  getHoveredLine: c,
  getAnnotationSlotName: l = R,
}) {
  let u = t?.(e),
    d = n?.(e),
    f = r?.(e),
    p = i?.(e);
  return (0, $.jsxs)($.Fragment, {
    children: [
      u == null
        ? (0, $.jsxs)($.Fragment, {
            children: [
              d != null && (0, $.jsx)(`div`, { slot: `header-prefix`, children: d }),
              f != null && (0, $.jsx)(`div`, { slot: `header-filename-suffix`, children: f }),
              p != null && (0, $.jsx)(`div`, { slot: `header-metadata`, children: p }),
            ],
          })
        : (0, $.jsx)(`div`, { slot: ge, children: u }),
      a != null && o?.map((t, n) => (0, $.jsx)(`div`, { slot: l(t), children: a(t, e) }, n)),
      s != null && (0, $.jsx)(`div`, { slot: `gutter-utility-slot`, style: h, children: s(c) }),
    ],
  });
}
export { Ie as n, Ae as r, Re as t };
//# sourceMappingURL=renderFileChildren-CwiHlgqc.js.map
