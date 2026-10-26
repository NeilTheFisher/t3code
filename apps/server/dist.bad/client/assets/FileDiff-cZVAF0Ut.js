import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { t as n } from "./jsx-runtime-BQExFN_X.js";
import {
  A as r,
  B as i,
  C as a,
  E as o,
  F as s,
  H as c,
  I as l,
  M as u,
  N as d,
  P as f,
  S as p,
  T as m,
  U as h,
  V as g,
  _,
  a as v,
  c as y,
  f as b,
  g as x,
  h as S,
  i as C,
  j as w,
  k as T,
  l as E,
  m as D,
  n as O,
  o as k,
  p as A,
  t as j,
  u as M,
  v as N,
  w as P,
  y as F,
} from "./useNextRenderData-JbRG-cVc.js";
import {
  B as I,
  E as L,
  F as R,
  H as z,
  M as B,
  N as V,
  O as ee,
  S as te,
  V as ne,
  W as re,
  a as ie,
  b as ae,
  ct as oe,
  d as se,
  et as ce,
  f as H,
  g as le,
  h as U,
  i as ue,
  j as de,
  k as fe,
  l as W,
  m as pe,
  n as me,
  o as he,
  ot as ge,
  p as _e,
  r as ve,
  s as ye,
  t as be,
  tt as G,
  u as K,
  v as q,
  x as J,
  y as xe,
} from "./getDiffFileInput-DNKgimbU.js";
import { i as Y } from "./appendItems-C5MDJzmY.js";
import { n as Se, t as Ce } from "./cloneFileDiffMetadata-zVRGqYgv.js";
import {
  Bc as we,
  Gc as Te,
  Kc as Ee,
  Oc as De,
  Pc as Oe,
  Uc as ke,
  Vc as Ae,
  Wc as je,
  bc as Me,
  cc as Ne,
  fc as Pe,
  lc as Fe,
  mc as Ie,
  pc as Le,
  sc as Re,
  tc as X,
  xc as ze,
} from "./main-BZa0O6xN.js";
var Z = e(n(), 1);
function Be(e) {
  return e === `` ? [] : e.split(Ee);
}
function Ve(e, t, n) {
  let r = e === `clone` ? Ce(t) : t;
  if (!r.isPartial) throw Error(`hydratePartialDiff: fileDiff must be partial`);
  switch (r.type) {
    case `change`:
    case `rename-changed`:
      return He(r, We(r, n), Ge(r, n));
    case `rename-pure`: {
      let e = Ge(r, n);
      Ke(r, n);
      let t = Be(e.contents);
      return (
        (r.isPartial = !1),
        (r.deletionLines = t),
        (r.additionLines = t),
        (r.deletionCharacterCount = e.contents.length),
        (r.additionCharacterCount = e.contents.length),
        Je(r, null, e),
        r
      );
    }
  }
  throw Error(`hydratePartialDiff: ${r.type} diffs cannot be hydrated from loaded files`);
}
function He(e, t, n) {
  let r = Be(t.contents),
    i = Be(n.contents),
    { hunks: a, splitLineCount: o, unifiedLineCount: s } = Ue(e.hunks, i.length);
  return (
    (e.hunks = a),
    (e.splitLineCount = o),
    (e.unifiedLineCount = s),
    (e.isPartial = !1),
    (e.deletionLines = r),
    (e.additionLines = i),
    (e.deletionCharacterCount = t.contents.length),
    (e.additionCharacterCount = n.contents.length),
    Je(e, t, n),
    e
  );
}
function Ue(e, t) {
  let n = 0,
    r = 0,
    i = 0,
    a = [];
  for (let t of e) {
    let e = Math.max(t.additionStart - 1, 0),
      o = Math.max(t.deletionStart - 1, 0),
      s = e,
      c = o,
      l = 0,
      u = 0,
      d = 0,
      f = 0,
      p = [];
    for (let e of t.hunkContent)
      e.type === `context`
        ? (p.push({ ...e, additionLineIndex: s, deletionLineIndex: c }),
          (s += e.lines),
          (c += e.lines),
          (d += e.lines),
          (f += e.lines))
        : (p.push({ ...e, additionLineIndex: s, deletionLineIndex: c }),
          (s += e.additions),
          (c += e.deletions),
          (l += e.additions),
          (u += e.deletions),
          (d += Math.max(e.additions, e.deletions)),
          (f += e.additions + e.deletions));
    let m = Math.max(Fe(t.additionStart, t.additionCount) - i, 0);
    (a.push({
      ...t,
      collapsedBefore: m,
      additionLineIndex: e,
      deletionLineIndex: o,
      additionLines: l,
      deletionLines: u,
      hunkContent: p,
      splitLineStart: n + m,
      unifiedLineStart: r + m,
      splitLineCount: d,
      unifiedLineCount: f,
    }),
      (n += m + d),
      (r += m + f),
      (i = Ne(t.additionStart, t.additionCount)));
  }
  if (a.length > 0) {
    let e = a[a.length - 1],
      i = Ne(e.additionStart, e.additionCount),
      o = Math.max(t - i, 0);
    ((n += o), (r += o));
  }
  return { hunks: a, splitLineCount: n, unifiedLineCount: r };
}
function We(e, t) {
  if (t.oldFile == null)
    throw Error(`hydratePartialDiff: ${e.type} diff for ${e.name} requires oldFile`);
  return t.oldFile;
}
function Ge(e, t) {
  if (t.newFile == null)
    throw Error(`hydratePartialDiff: ${e.type} diff for ${e.name} requires newFile`);
  return t.newFile;
}
function Ke(e, t) {
  if (t.oldFile !== null)
    throw Error(`hydratePartialDiff: ${e.type} diff for ${e.name} requires oldFile to be null`);
}
function qe(e, t, n) {
  return e.cacheKey == null ? Ye(t, n) : `${e.cacheKey}:hydrated`;
}
function Je(e, t, n) {
  let r = qe(e, t, n);
  r == null ? delete e.cacheKey : (e.cacheKey = r);
}
function Ye(e, t) {
  return e != null && t != null
    ? e.cacheKey != null && t.cacheKey != null
      ? Re(`hydrated-files`, e.cacheKey, t.cacheKey)
      : void 0
    : (e?.cacheKey ?? t?.cacheKey);
}
var Xe = class {
  isDeletionsScrolling = !1;
  isAdditionsScrolling = !1;
  timeoutId = -1;
  codeDeletions;
  codeAdditions;
  enabled = !1;
  cleanUp() {
    this.enabled &&=
      (this.codeDeletions?.removeEventListener(`scroll`, this.handleDeletionsScroll),
      this.codeAdditions?.removeEventListener(`scroll`, this.handleAdditionsScroll),
      clearTimeout(this.timeoutId),
      (this.codeDeletions = void 0),
      (this.codeAdditions = void 0),
      !1);
  }
  setup(e, t, n) {
    if (t == null || n == null)
      for (let r of e.children ?? [])
        r instanceof HTMLElement &&
          (`deletions` in r.dataset ? (t = r) : `additions` in r.dataset && (n = r));
    n == null || t == null
      ? this.cleanUp()
      : (this.codeDeletions !== t &&
          (this.codeDeletions?.removeEventListener(`scroll`, this.handleDeletionsScroll),
          (this.codeDeletions = t),
          t.addEventListener(`scroll`, this.handleDeletionsScroll, { passive: !0 })),
        this.codeAdditions !== n &&
          (this.codeAdditions?.removeEventListener(`scroll`, this.handleAdditionsScroll),
          (this.codeAdditions = n),
          n.addEventListener(`scroll`, this.handleAdditionsScroll, { passive: !0 })),
        (this.enabled = !0));
  }
  handleDeletionsScroll = () => {
    this.isAdditionsScrolling ||
      ((this.isDeletionsScrolling = !0),
      clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        this.isDeletionsScrolling = !1;
      }, 300)),
      this.codeAdditions?.scrollTo({ left: this.codeDeletions?.scrollLeft }));
  };
  handleAdditionsScroll = () => {
    this.isDeletionsScrolling ||
      ((this.isAdditionsScrolling = !0),
      clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        this.isAdditionsScrolling = !1;
      }, 300)),
      this.codeDeletions?.scrollTo({ left: this.codeAdditions?.scrollLeft }));
  };
};
function Ze(e, t) {
  return e.lineNumber === t.lineNumber && e.side === t.side && e.metadata === t.metadata;
}
function Qe(e, t) {
  return (
    e.slotName === t.slotName &&
    e.hunkIndex === t.hunkIndex &&
    e.lines === t.lines &&
    e.lineCountKnown === t.lineCountKnown &&
    e.type === t.type &&
    e.expandable?.chunked === t.expandable?.chunked &&
    e.expandable?.up === t.expandable?.up &&
    e.expandable?.down === t.expandable?.down
  );
}
async function $e(e, t = 300) {
  let n;
  try {
    await Promise.race([
      e(),
      new Promise((e) => {
        n = setTimeout(e, t);
      }),
    ]);
  } finally {
    n != null && clearTimeout(n);
  }
}
function et(e) {
  return {
    theme: e?.theme,
    disableLineNumbers: e?.disableLineNumbers,
    overflow: e?.overflow,
    collapsed: e?.collapsed,
    disableFileHeader: e?.disableFileHeader,
    disableVirtualizationBuffers: e?.disableVirtualizationBuffers,
    stickyHeader: e?.stickyHeader,
    preferredHighlighter: e?.preferredHighlighter,
    useCSSClasses: e?.useCSSClasses,
    useTokenTransformer: ee(e),
    tokenizeMaxLineLength: e?.tokenizeMaxLineLength,
    tokenizeMaxLength: e?.tokenizeMaxLength,
    diffStyle: e?.diffStyle,
    diffIndicators: e?.diffIndicators,
    disableBackground: e?.disableBackground,
    hunkSeparators: typeof e?.hunkSeparators == `function` ? `custom` : e?.hunkSeparators,
    expandUnchanged: e?.expandUnchanged,
    loadDiffFiles: e?.loadDiffFiles,
    parseDiffOptions: e?.parseDiffOptions,
    collapsedContextThreshold: e?.collapsedContextThreshold,
    lineDiffType: e?.lineDiffType,
    maxLineDiffLength: e?.maxLineDiffLength,
    expansionLineCount: e?.expansionLineCount,
    headerRenderMode: e?.renderCustomHeader == null ? `default` : `custom`,
  };
}
function tt(e) {
  return (
    e.isPartial && (e.type === `change` || e.type === `rename-changed` || e.type === `rename-pure`)
  );
}
function nt(e) {
  let t = { ...e };
  return (delete t.cacheKey, t);
}
function rt(e, t) {
  if (e.isPartial || t.isPartial)
    throw Error(`FileDiff.shouldResetEditorForExternalDiff: diffs must be fully hydrated`);
  let n = e.lang ?? Pe(e.name),
    r = t.lang ?? Pe(t.name),
    i = e.type !== `new`,
    a = t.type !== `new`;
  return (
    e.name !== t.name ||
    n !== r ||
    i !== a ||
    e.deletionLines.length !== t.deletionLines.length ||
    e.deletionLines.some((e, n) => e !== t.deletionLines[n])
  );
}
function it(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function at(e, t) {
  let { oldFile: n } = e;
  return n == null
    ? t.type === `new`
    : t.type !== `new` && n.name === (t.prevName ?? t.name) && it(n.lines, t.deletionLines);
}
var ot = -1,
  st = class {
    options;
    workerManager;
    requestOwnerRender;
    static LoadedCustomComponent = !0;
    __id = `file-diff:${++ot}`;
    type = `file-diff`;
    fileContainer;
    spriteSVG;
    pre;
    codeUnified;
    codeDeletions;
    codeAdditions;
    bufferBefore;
    bufferAfter;
    themeCSSStyle;
    appliedThemeCSS;
    hasAdoptedThemeCSS = !1;
    unsafeCSSStyle;
    appliedUnsafeCSS;
    gutterUtilityContent;
    headerElement;
    headerPrefix;
    headerFilenameSuffix;
    headerMetadata;
    headerCustom;
    separatorCache = new Map();
    errorWrapper;
    placeHolder;
    hunksRenderer;
    resizeManager;
    scrollSyncManager;
    interactionManager;
    annotationCache = new Map();
    get lineAnnotations() {
      return this.renderedData?.lineAnnotations ?? Ae;
    }
    managersDirty = !1;
    deletionFile;
    additionFile;
    fileDiff;
    editSession;
    renderedData;
    pendingData;
    forceRenderOverride;
    renderRange;
    pendingFiles;
    appliedPreAttributes;
    headerCache = { lastRenderedHTML: void 0, html: void 0, fileDiff: void 0 };
    lastRowCount;
    mounted = !1;
    enabled = !0;
    editor;
    refreshViewTimeout;
    lineStateRefreshPending = !1;
    deferredSelectedLines;
    deferredEditorActiveLine;
    constructor(e = { theme: Oe }, t, n) {
      ((this.options = e),
        (this.workerManager = t),
        (this.requestOwnerRender = n),
        (this.hunksRenderer = this.createHunksRenderer(e)),
        (this.resizeManager = new f()),
        (this.scrollSyncManager = new Xe()),
        (this.interactionManager = new s(
          `diff`,
          l(
            e,
            typeof e.hunkSeparators == `function` ||
              (e.hunkSeparators ?? `line-info`) === `line-info` ||
              e.hunkSeparators === `line-info-basic`
              ? this.handleExpandHunk
              : void 0,
            this.getLineIndex,
          ),
        )),
        this.workerManager?.subscribeToThemeChanges(this),
        (this.enabled = !0));
    }
    handleHighlightRender = () => {
      this.rerender();
    };
    getTheme() {
      return this.workerManager?.getDiffRenderOptions().theme ?? this.options.theme ?? Oe;
    }
    getHunksRendererOptions(e) {
      return et(e);
    }
    createHunksRenderer(e) {
      return new me(
        this.getHunksRendererOptions(e),
        this.getAnnotationSlotName,
        this.handleHighlightRender,
        this.workerManager,
      );
    }
    getLineIndex = (e, t = `additions`) =>
      this.getLineIndexForDiff(this.getDiffForLineIndex(), e, t);
    getDiffForLineIndex() {
      return this.getRenderedDiff();
    }
    getLineIndexForDiff(e, t, n) {
      if (e == null) return;
      let r = e.hunks.at(-1),
        i,
        a;
      hunkIterator: for (let o of e.hunks) {
        let e = n === `deletions` ? o.deletionStart : o.additionStart,
          s = n === `deletions` ? o.deletionCount : o.additionCount,
          c = Fe(e, s) + 1,
          l = o.splitLineStart,
          u = o.unifiedLineStart;
        if (t < c) {
          let e = c - t;
          ((i = Math.max(u - e, 0)), (a = Math.max(l - e, 0)));
          break hunkIterator;
        }
        if (t >= c + s) {
          if (o === r) {
            let e = t - (c + s);
            ((i = u + o.unifiedLineCount + e), (a = l + o.splitLineCount + e));
            break hunkIterator;
          }
        } else {
          for (let e of o.hunkContent)
            if (e.type === `context`) {
              if (t < c + e.lines) {
                let e = t - c;
                ((a = l + e), (i = u + e));
                break hunkIterator;
              }
              ((c += e.lines), (l += e.lines), (u += e.lines));
            } else {
              let r = n === `deletions` ? e.deletions : e.additions;
              if (t < c + r) {
                let r = t - c;
                ((i = u + (n === `additions` ? e.deletions : 0) + r), (a = l + r));
                break hunkIterator;
              }
              ((c += r),
                (l += Math.max(e.deletions, e.additions)),
                (u += e.deletions + e.additions));
            }
          break hunkIterator;
        }
      }
      if (i != null && a != null) return [i, a];
    }
    setOptions(e) {
      e != null &&
        ((this.options = e),
        this.clearReusableHeader(),
        this.hunksRenderer.setOptions(this.getHunksRendererOptions(e)),
        this.syncInteractionOptions());
    }
    syncInteractionOptions() {
      this.interactionManager.setOptions(
        l(
          this.options,
          typeof this.options.hunkSeparators == `function` ||
            (this.options.hunkSeparators ?? `line-info`) === `line-info` ||
            this.options.hunkSeparators === `line-info-basic`
            ? this.handleExpandHunk
            : void 0,
          this.getLineIndex,
        ),
      );
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
      return this.appliedThemeCSS != null && !oe(this.appliedThemeCSS.theme, this.getTheme());
    }
    getHoveredLine = () => this.interactionManager.getHoveredLine();
    getAnnotationSlotName = (e) => N(this.editSession?.annotations, e, G);
    getLatestAnnotations() {
      return (
        this.pendingData?.lineAnnotations ??
        this.editSession?.annotations?.current ??
        this.lineAnnotations
      );
    }
    getAnnotationsForDiff(e) {
      let { pendingData: t } = this;
      return t != null && q(e, t.fileDiff) ? t.lineAnnotations : this.lineAnnotations;
    }
    isNewAnnotations(e) {
      let t = this.editSession?.annotations;
      return e === this.getLatestAnnotations()
        ? !1
        : t == null || (e !== t.provided && e !== t.current);
    }
    setLineAnnotations(e) {
      let t = this.editSession?.annotations;
      if (t != null) {
        if (!this.isNewAnnotations(e)) return;
        F(t, e, G);
      }
      let n = this.getWorkingDiff();
      n != null && (this.pendingData = { fileDiff: n, lineAnnotations: e });
    }
    syncEditSessionAnnotationsFromEditor(e) {
      let t = this.editSession?.annotations;
      return t == null || e === t.current
        ? !1
        : ((t.current = e),
          this.renderedData != null && (this.renderedData.lineAnnotations = e),
          (this.pendingData = void 0),
          this.hunksRenderer.setLineAnnotations(e),
          this.renderAnnotations(),
          !0);
    }
    canPartiallyRender(e, t, n) {
      return !(e || t || n || typeof this.options.hunkSeparators == `function`);
    }
    setSelectedLines(e, t) {
      this.lineStateRefreshPending
        ? (this.deferredSelectedLines = [e, t])
        : this.interactionManager.setSelection(e, t);
    }
    setEditorActiveLine(e, t) {
      this.lineStateRefreshPending
        ? (this.deferredEditorActiveLine = [e, t])
        : this.interactionManager.setEditorActiveLine(e, {
            lineNumberOnly: t?.lineNumberOnly,
            side: t?.side ?? `additions`,
          });
    }
    flushDeferredLineState() {
      let { deferredEditorActiveLine: e, deferredSelectedLines: t } = this;
      ((this.lineStateRefreshPending = !1),
        (this.deferredEditorActiveLine = void 0),
        (this.deferredSelectedLines = void 0),
        e != null && this.setEditorActiveLine(...e),
        t != null && this.interactionManager.setSelection(...t));
    }
    flushManagers() {
      if (!this.managersDirty || this.pre == null) {
        this.managersDirty = !1;
        return;
      }
      let { diffStyle: e = `split`, overflow: t = `scroll` } = this.options;
      (this.interactionManager.setup(this.pre),
        this.resizeManager.setup(this.pre, {
          disableAnnotations: t === `wrap`,
          columnVariables: this.shouldApplyColumnVariables(t) ? `apply` : `measure`,
        }),
        t === `scroll` && e === `split`
          ? this.scrollSyncManager.setup(this.pre, this.codeDeletions, this.codeAdditions)
          : this.scrollSyncManager.cleanUp(),
        (this.managersDirty = !1));
    }
    shouldApplyColumnVariables(e) {
      return (
        typeof this.options.hunkSeparators == `function` ||
        (e === `scroll` &&
          (this.lineAnnotations.length > 0 ||
            this.pre?.hasAttribute(`data-has-merge-conflict`) === !0))
      );
    }
    getCodeScrollLeft() {
      return Math.max(
        this.codeUnified?.scrollLeft ?? 0,
        this.codeDeletions?.scrollLeft ?? 0,
        this.codeAdditions?.scrollLeft ?? 0,
      );
    }
    setCodeScrollLeft(e) {
      (this.codeUnified != null && (this.codeUnified.scrollLeft = e),
        this.codeAdditions != null && (this.codeAdditions.scrollLeft = e),
        this.codeDeletions != null && (this.codeDeletions.scrollLeft = e));
    }
    __getEffectiveCodeOptions() {
      return { ...this.options, ...this.hunksRenderer.getEffectiveCodeOptions() };
    }
    cleanUp(e = !1) {
      let { editor: t } = this;
      (c(this.handleEditSessionRender),
        this.emitPostRender(!0),
        t?.cleanUp(e ? `recycle` : `discard`),
        e || (this.editor = void 0),
        this.resizeManager.cleanUp(),
        this.interactionManager.cleanUp(),
        this.scrollSyncManager.cleanUp(),
        (this.managersDirty = !1),
        this.workerManager?.unsubscribeToThemeChanges(this),
        (this.renderRange = void 0),
        e || (this.pendingFiles = void 0),
        this.isComponentManaged || this.fileContainer?.remove(),
        (this.fileContainer = void 0),
        (this.mounted = !1),
        e || ((this.renderedData = void 0), (this.pendingData = void 0)),
        this.clearAuxiliaryNodes(),
        this.annotationCache.clear(),
        (this.pre = void 0),
        (this.codeUnified = void 0),
        (this.codeDeletions = void 0),
        (this.codeAdditions = void 0),
        this.bufferBefore?.remove(),
        (this.bufferBefore = void 0),
        this.bufferAfter?.remove(),
        (this.bufferAfter = void 0),
        (this.appliedPreAttributes = void 0),
        (this.headerElement = void 0),
        (this.headerPrefix = void 0),
        (this.headerFilenameSuffix = void 0),
        (this.headerMetadata = void 0),
        (this.headerCustom = void 0),
        this.placeHolder?.remove(),
        (this.placeHolder = void 0),
        (this.headerCache.lastRenderedHTML = void 0),
        e || this.clearReusableHeader(),
        this.errorWrapper?.remove(),
        (this.errorWrapper = void 0),
        (this.spriteSVG = void 0),
        (this.lastRowCount = void 0),
        (this.themeCSSStyle = void 0),
        (this.appliedThemeCSS = void 0),
        (this.hasAdoptedThemeCSS = !1),
        (this.unsafeCSSStyle = void 0),
        (this.appliedUnsafeCSS = void 0),
        e
          ? this.hunksRenderer.recycle()
          : (this.hunksRenderer.cleanUp(),
            (this.workerManager = void 0),
            (this.fileDiff = void 0),
            (this.editSession = void 0),
            (this.deletionFile = void 0),
            (this.additionFile = void 0)),
        this.refreshViewTimeout != null &&
          (clearTimeout(this.refreshViewTimeout), (this.refreshViewTimeout = void 0)),
        (this.lineStateRefreshPending = !1),
        (this.deferredEditorActiveLine = void 0),
        (this.deferredSelectedLines = void 0),
        (this.enabled = !1));
    }
    virtualizedSetup() {
      ((this.enabled = !0), this.workerManager?.subscribeToThemeChanges(this));
    }
    hydrate({
      fileContainer: e,
      prerenderedHTML: t,
      preventEmit: n = !1,
      lineAnnotations: r,
      fileDiff: i,
      ...a
    }) {
      if (!this.enabled)
        throw Error(`FileDiff.hydrate: attempting to call hydrate after cleaned up`);
      if (this.fileContainer != null)
        throw Error(
          `FileDiff.hydrate: hydrate can only be called before the instance has rendered or hydrated`,
        );
      let o = be(a, `FileDiff.hydrate`),
        s = o?.oldFile,
        c = o?.newFile;
      this.hydrateElements(e, t);
      let l = this.editor != null;
      (l ||
      ft(this.pre, ut({ fileDiff: i, oldFile: s, newFile: c }), this.options.collapsed) ||
      pt(
        this.headerElement,
        dt({ fileDiff: i, oldFile: s, newFile: c }),
        this.options.disableFileHeader,
      )
        ? this.render({
            ...a,
            fileContainer: e,
            lineAnnotations: r,
            fileDiff: i,
            forceRender: l || a.forceRender,
            preventEmit: !0,
          })
        : this.hydrationSetup({ fileDiff: i, lineAnnotations: r, ...o }),
        n || this.emitPostRender());
    }
    hydrateElements(e, t) {
      (this.fileContainer !== e && this.emitPostRender(!0), m(e, t));
      for (let t of e.shadowRoot?.children ?? [])
        if (t instanceof SVGElement) this.spriteSVG = t;
        else if (t instanceof HTMLElement) {
          if (t instanceof HTMLPreElement) {
            this.pre = t;
            for (let e of t.children)
              e instanceof HTMLElement &&
                e.tagName.toLowerCase() === `code` &&
                (`deletions` in e.dataset && (this.codeDeletions = e),
                `additions` in e.dataset && (this.codeAdditions = e),
                `unified` in e.dataset && (this.codeUnified = e));
          } else
            `diffsHeader` in t.dataset
              ? (this.headerElement = t)
              : t instanceof HTMLStyleElement && t.hasAttribute(`data-theme-css`)
                ? (this.themeCSSStyle = t)
                : t instanceof HTMLStyleElement &&
                  t.hasAttribute(`data-unsafe-css`) &&
                  ((this.unsafeCSSStyle = t), (this.appliedUnsafeCSS = t.textContent));
        }
      (this.pre != null &&
        (this.syncCodeNodesFromPre(this.pre), this.pre.removeAttribute(`data-dehydrated`)),
        (this.fileContainer = e),
        this.hydrateMeasuredScrollbar());
    }
    hydrationSetup({ fileDiff: e, oldFile: t, newFile: n, lineAnnotations: r }) {
      let i = r ?? this.getLatestAnnotations();
      ((this.pendingData = void 0),
        (this.additionFile = n),
        (this.deletionFile = t),
        (this.fileDiff =
          e ?? (t !== void 0 && n !== void 0 ? X(t, n, this.options.parseDiffOptions) : void 0)),
        (this.renderedData =
          this.fileDiff == null ? void 0 : { fileDiff: this.fileDiff, lineAnnotations: i }),
        this.fileDiff != null && this.adoptRenderData(this.fileDiff),
        this.pre != null &&
          (this.syncInteractionOptions(),
          this.hunksRenderer.hydrate(this.fileDiff),
          this.renderAnnotations(),
          this.renderGutterUtility(),
          this.injectUnsafeCSS(),
          (this.managersDirty = !0),
          this.flushManagers()));
    }
    rerender() {
      !this.enabled ||
        (this.getInputDiff() == null && this.additionFile == null && this.deletionFile == null) ||
        this.requestRender() ||
        this.render({ forceRender: !0, renderRange: this.renderRange });
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
    onThemeChange() {
      (this.hunksRenderer.clearRenderCache(), this.rerender());
    }
    handleExpandHunk = (e, t, n) => {
      this.expandHunk(e, t, n);
    };
    expandHunk = (e, t, n) => {
      (this.loadFilesIfNecessary(), this.hunksRenderer.expandHunk(e, t, n), this.rerender());
    };
    loadFilesIfNecessary() {
      let e = this.getInputDiff(),
        { loadDiffFiles: t } = this.options;
      if (e == null || !tt(e) || this.pendingFiles?.fileDiff === e) return;
      if (t == null)
        throw Error(`FileDiff: loadDiffFiles is required to load full files for a partial diff`);
      let n = this.loadFilesForDiff(e, t),
        r = (this.pendingFiles = { fileDiff: e, promise: n });
      r.promise = n.finally(() => {
        this.pendingFiles === r && (this.pendingFiles = void 0);
      });
    }
    __canAttachEditor() {
      let e = this.getInputDiff();
      return e != null && !e.isPartial;
    }
    async prepareForEditing() {
      if (this.__canAttachEditor()) return;
      let e = this.__prepareForEditing();
      if (e == null) {
        let e = this.getInputDiff();
        throw e?.isPartial === !0 && !tt(e)
          ? Error(
              `FileDiff.prepareForEditing: this partial diff cannot be hydrated; provide a complete diff`,
            )
          : Error(`FileDiff.prepareForEditing: a partial diff requires loadDiffFiles`);
      }
      if ((await e, !this.__canAttachEditor()))
        throw Error(`FileDiff.prepareForEditing: the diff did not finish loading`);
    }
    __prepareForEditing() {
      if (this.__canAttachEditor()) return;
      let e = this.getInputDiff();
      if (e?.isPartial === !0 && !tt(e))
        throw Error(
          `FileDiff: this partial diff cannot be hydrated; provide a complete diff to edit`,
        );
      return (this.loadFilesIfNecessary(), this.pendingFiles?.promise);
    }
    async loadFilesForDiff(e, t) {
      try {
        let n = await t(e);
        if (this.getInputDiff() !== e) return;
        await this.handleFilesLoaded(e, n);
      } catch (e) {
        if (this.options.disableErrorHandling === !0) throw e;
        console.error(e);
      }
    }
    async handleFilesLoaded(e, t) {
      this.getInputDiff() === e &&
        e.isPartial &&
        (Ve(`merge`, e, t),
        this.setHydratedState(t),
        this.installHydratedSessionDiff(e)
          ? this.rerender()
          : (await $e(() => this.primeHighlightCache(e)),
            this.enabled && this.getInputDiff() === e && this.rerender()));
    }
    installHydratedSessionDiff(e) {
      if (e.isPartial)
        throw Error(`FileDiff.installHydratedSessionDiff: diffs cannot be partial for editing`);
      return (
        this.getInputDiff() === e &&
        this.editSession?.outgoingDiff != null &&
        (this.installEditSession(e), !0)
      );
    }
    updateInputDiff(e, t) {
      if (q(this.getInputDiff(), e)) return !1;
      let n = this.getLatestAnnotations();
      this.fileDiff = e;
      let { editSession: r } = this,
        i = r?.outgoingDiff ?? r?.diff;
      return (
        r != null &&
          (e.isPartial ? (r.inputDiff = e) : this.installEditSession(e),
          this.editSession != null && (this.editSession.outgoingDiff = i)),
        this.editSession?.annotations != null &&
          t != null &&
          (this.editSession.annotations = _(t, G, this.editSession.annotations)),
        (this.pendingData = {
          fileDiff: this.editSession?.diff ?? e,
          lineAnnotations: this.editSession?.annotations?.current ?? t ?? n,
        }),
        i != null && e.isPartial && this.loadFilesIfNecessary(),
        !0
      );
    }
    installEditSession(e, t, n) {
      let r = e.additionLines.join(``),
        i = t == null ? void 0 : Be(t.contents),
        a = n != null && at(n, e);
      if (n != null && !a)
        throw Error(`FileDiff: retained session cannot resume against a different old file`);
      if (t != null && t.contents !== r && !a)
        throw Error(`FileDiff: retained edits are missing their diff session state`);
      let o = t == null || (t.name === e.name && t.lang === e.lang && t.contents === r),
        s = nt(e);
      (t != null && i != null && !o && ((s.name = t.name), (s.lang = t.lang)),
        a &&
          n != null &&
          t != null &&
          i != null &&
          ((s.additionLines = i),
          (s.additionCharacterCount = t.contents.length),
          (s.type = n.type),
          (s.hunks = n.hunks),
          (s.editSessionDirty = !0),
          ye(s)));
      let c = this.editSession?.annotations ?? _(this.getLatestAnnotations(), G);
      ((this.editSession = {
        diff: s,
        inputDiff: e,
        annotations: c,
        outgoingDiff: this.editSession?.outgoingDiff,
      }),
        (this.pendingData = { fileDiff: s, lineAnnotations: c.current }),
        this.hunksRenderer.beginEditSession(s, o && !a ? e : void 0));
    }
    setHydratedState(e) {
      ((this.deletionFile = e.oldFile),
        (this.additionFile = e.newFile),
        this.workerManager?.cleanUpTasks(this.hunksRenderer),
        this.hunksRenderer.clearRenderCache());
    }
    render({
      fileDiff: e,
      deferManagers: t = !1,
      forceRender: n = !1,
      preventEmit: r = !1,
      lineAnnotations: i,
      fileContainer: a,
      containerWrapper: o,
      renderRange: s,
      ...c
    }) {
      if (!this.enabled) throw Error(`FileDiff.render: attempting to call render after cleaned up`);
      ((n = this.forceRenderOverride ?? n), (this.forceRenderOverride = void 0));
      let l = be(c, `FileDiff.render`),
        u = l?.oldFile,
        d = l?.newFile;
      this.editor?.__postponeBgTokenizeToNextFrame();
      let { collapsed: f = !1, themeType: p = `system`, expandUnchanged: m = !1 } = this.options,
        h = f ? void 0 : s,
        g = this.hasThemeChanged(),
        _ = l != null,
        v = _ && (!lt(u, this.deletionFile) || !lt(d, this.additionFile)),
        y = e != null && !q(e, this.getInputDiff()),
        b =
          i != null &&
          (i.length > 0 || this.getLatestAnnotations().length > 0) &&
          this.isNewAnnotations(i);
      if (
        !f &&
        ge(h, this.renderRange) &&
        !n &&
        !b &&
        !g &&
        ((e != null && !y) || (e == null && !v))
      ) {
        let e = this.applyCachedThemeState(p);
        return (e && this.finalizeRender(), e);
      }
      let x;
      e == null &&
        _ &&
        (v || this.getInputDiff() == null) &&
        (x = X(l.oldFile, l.newFile, this.options.parseDiffOptions));
      let { renderRange: S } = this;
      ((this.renderRange = h),
        _
          ? ((this.deletionFile = u), (this.additionFile = d))
          : e != null && ((this.deletionFile = void 0), (this.additionFile = void 0)),
        e != null && y
          ? this.updateInputDiff(e, i)
          : x != null && ((y = !0), this.updateInputDiff(x, i)),
        y && this.clearReusableHeader(),
        i != null && this.setLineAnnotations(i));
      let C = this.getWorkingDiff();
      if (C == null) return !1;
      (C.editSessionDirty === !0 &&
        this.shouldSelfHealEditSession() &&
        (ie(C, this.options.parseDiffOptions), this.hunksRenderer.refreshHighlightedResult()),
        m && this.loadFilesIfNecessary(),
        this.hunksRenderer.setOptions(this.getHunksRendererOptions(this.options)),
        this.syncInteractionOptions(),
        this.prepareRenderData(f ? C : this.hunksRenderer.getDiffForNextRender(C)));
      let { disableErrorHandling: w = !1, disableFileHeader: T = !1 } = this.options;
      if (
        (T &&
          (this.headerElement != null &&
            (this.headerElement.remove(),
            (this.headerElement = void 0),
            (this.headerCache.lastRenderedHTML = void 0)),
          this.clearHeaderSlots()),
        (a = this.getOrCreateFileContainer(a, o)),
        this.applyCachedThemeState(p),
        f)
      ) {
        (this.removeRenderedCode(), this.clearAuxiliaryNodes());
        try {
          let e = this.getTheme(),
            t = Le({ theme: e, lang: `text` });
          (t == null
            ? Ie({
                themes: Me(e),
                langs: [`text`],
                preferredHighlighter: z(this.workerManager, this.options),
              })
                .then(() => {
                  this.enabled &&
                    this.fileContainer === a &&
                    this.options.collapsed &&
                    oe(e, this.getTheme()) &&
                    this.rerender();
                })
                .catch((e) => {
                  e instanceof ze || console.error(e);
                })
            : this.applyThemeState(
                a,
                re({ theme: e, highlighter: t }),
                p,
                typeof e == `string` ? t.getTheme(e).type : void 0,
              ),
            T || this.applyHeaderToDOM(this.hunksRenderer.renderHeader(C), a, C),
            this.renderSeparators([]),
            this.adoptRenderData(C),
            this.injectUnsafeCSS());
        } catch (e) {
          if (w) throw e;
          (console.error(e), e instanceof Error && this.applyErrorToDOM(e, a));
        }
        return (this.finalizeRender(), r || this.emitPostRender(), !0);
      }
      try {
        let e = this.getOrCreatePreNode(a);
        if (
          this.canPartiallyRender(n, b, v || y || g || !q(this.getRenderedDiff(), C)) &&
          this.applyPartialRender({ fileDiff: C, previousRenderRange: S, renderRange: h })
        ) {
          let e = this.getRenderedDiff();
          e != null && this.adoptRenderData(e);
        } else {
          let t = this.hunksRenderer.renderDiff(C, h);
          if (t == null)
            return (
              this.workerManager?.isInitialized() === !1 &&
                this.workerManager.isWorkingPool() &&
                this.workerManager
                  .initialize()
                  .catch(() => {})
                  .then(() => this.rerender()),
              !1
            );
          (this.applyThemeState(a, t.themeStyles, p, t.baseThemeType),
            t.headerElement != null && this.applyHeaderToDOM(t.headerElement, a, t.fileDiff),
            t.additionsContentAST != null ||
            t.deletionsContentAST != null ||
            t.unifiedContentAST != null
              ? this.applyHunksToDOM(e, t)
              : this.pre != null && (this.pre.remove(), (this.pre = void 0)),
            this.renderSeparators(t.hunkData),
            this.adoptRenderData(t.fileDiff));
        }
        (this.applyBuffers(e, h),
          this.injectUnsafeCSS(),
          this.renderAnnotations(),
          this.renderGutterUtility(),
          (this.managersDirty = !0),
          t || this.flushManagers(),
          this.finalizeRender(),
          this.editor != null && this.syncRenderViewToEditor());
      } catch (e) {
        if (w) throw e;
        (console.error(e), e instanceof Error && this.applyErrorToDOM(e, a));
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
        this.options.onPostRender?.(t, this, `unmount`);
        return;
      }
      if (t == null) return;
      let r = this.mounted ? `update` : `mount`;
      ((this.mounted = !0), n?.(t, this, r));
    }
    getInputDiff() {
      return this.fileDiff;
    }
    getWorkingDiff(e = this.fileDiff) {
      return this.editSession?.diff ?? e;
    }
    getRenderedDiff() {
      return this.renderedData?.fileDiff;
    }
    __getNextRenderData({ fileDiff: e, lineAnnotations: t }) {
      let n = this.editSession?.annotations;
      if (n != null)
        return {
          fileDiff: e,
          lineAnnotations: t != null && this.isNewAnnotations(t) ? t : n.provided,
        };
      let r = this.getWorkingDiff(e) ?? e,
        i = this.hunksRenderer.getDiffForNextRender(r);
      return {
        fileDiff: i,
        lineAnnotations: t != null && q(i, r) ? t : this.getAnnotationsForDiff(i),
      };
    }
    prepareRenderData(e) {
      this.hunksRenderer.setLineAnnotations(this.getAnnotationsForDiff(e));
    }
    adoptRenderData(e) {
      let { pendingData: t } = this,
        n = t != null && q(e, t.fileDiff);
      ((this.renderedData = {
        fileDiff: e,
        lineAnnotations: n ? t.lineAnnotations : this.lineAnnotations,
      }),
        n && (this.pendingData = void 0));
    }
    syncRenderViewToEditor() {
      let { editor: e, fileContainer: t } = this,
        n = this.getLatestAnnotations(),
        r = this.computeEditorRenderRange(this.renderRange),
        i = this.getWorkingDiff();
      if (e == null || t == null || i == null || i.isPartial) return;
      let a = (a) => {
          if (
            !this.enabled ||
            this.editor !== e ||
            this.fileContainer !== t ||
            this.getWorkingDiff() !== i
          )
            return;
          let o = this.editSession?.outgoingDiff,
            s = this.getInputDiff(),
            c = o != null && s != null && o !== i,
            l = c && o != null && s != null ? rt(o, s) : !1;
          e.__syncRenderView({
            highlighter: a,
            fileContainer: t,
            fileDiff: i,
            lineAnnotations: n,
            renderRange: r,
            externalDocument: c,
            resetHistory: l,
          });
        },
        o = this.getTheme(),
        s = i.lang ?? Pe(i.name),
        c = Le({ theme: o, lang: s });
      c == null
        ? Ie({
            themes: Me(o),
            langs: [`text`, s],
            preferredHighlighter: z(this.workerManager, this.options),
          })
            .then(a)
            .catch((e) => {
              e instanceof ze || console.error(e);
            })
        : a(c);
    }
    computeEditorRenderRange(e) {
      let t = this.getWorkingDiff();
      if (e == null || t == null || ce(e)) return e;
      let {
          diffStyle: n = `split`,
          expandUnchanged: r = !1,
          collapsedContextThreshold: i = 1,
        } = this.options,
        a,
        o;
      return (
        W({
          diff: t,
          diffStyle: n,
          startingLine: e.startingLine,
          totalLines: e.totalLines,
          expandedHunks: r ? !0 : this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: i,
          callback: ({ additionLine: e }) => {
            e != null && ((a ??= e.lineNumber), (o = e.lineNumber));
          },
        }),
        a == null || o == null
          ? { ...e, startingLine: 0, totalLines: 0 }
          : { ...e, startingLine: a - 1, totalLines: o - a + 1 }
      );
    }
    __acknowledgeDocumentUpdate() {
      this.editSession != null && (this.editSession.outgoingDiff = void 0);
    }
    __acceptEditorChange(e) {
      let { lineAnnotations: t } = e;
      t != null && this.syncEditSessionAnnotationsFromEditor(t);
    }
    emitEditChange(e) {
      let { onEditChange: t } = this.options;
      t?.(e);
    }
    __captureDocumentSessionState(e = !0) {
      let t = this.getInputDiff(),
        { diff: n, outgoingDiff: r } = this.editSession ?? {};
      if (r != null && t != null) {
        if (!t.isPartial && rt(r, t)) return;
        n = r;
      }
      if (!(n == null || n.isPartial))
        return {
          diffSession: {
            oldFile:
              n.type === `new`
                ? null
                : { name: n.prevName ?? n.name, lines: e ? [...n.deletionLines] : n.deletionLines },
            type: n.type,
            hunks: e ? Se(n.hunks) : n.hunks,
          },
          hasChanges: n.editSessionDirty === !0,
        };
    }
    __attachEditor(e) {
      if (this.type !== `file-diff`)
        throw Error(`FileDiff.__attachEditor: cannot attach an editor to a "${this.type}" diff`);
      if (this.editor != null)
        throw Error(`FileDiff.__attachEditor: an editor is already attached`);
      if (!this.__canAttachEditor())
        throw Error(`FileDiff.__attachEditor: a complete diff is required before editing`);
      let t = () => {
        ((this.editor = void 0), this.finishEditSession());
      };
      try {
        return (this.resumeEditorRendering(e), t);
      } catch (e) {
        throw (t(), e);
      }
    }
    __resumeEditor(e) {
      if (this.editor !== e) throw Error(`FileDiff.__resumeEditor: editor association changed`);
      this.resumeEditorRendering(e);
    }
    resumeEditorRendering(e) {
      let t = this.getInputDiff(),
        n = this.editSession?.outgoingDiff;
      n != null &&
        t != null &&
        !t.isPartial &&
        this.editSession?.diff === n &&
        this.installEditSession(t);
      let r = this.editSession == null && t != null && !t.isPartial ? t : void 0;
      (r == null
        ? this.editSession != null && this.hunksRenderer.beginEditSession(this.editSession.diff)
        : this.installEditSession(r, e.__getDocumentContents(ct(r)), e.__getDocumentSessionState()),
        (this.editor = e),
        this.getInputDiff()?.isPartial === !0 && this.loadFilesIfNecessary());
      let i = this.editSession?.diff;
      this.hunksRenderer.editorRenderReady()
        ? (i != null && this.hunksRenderer.diffCache === i && this.adoptRenderData(i),
          this.syncRenderViewToEditor())
        : this.rerender();
    }
    finishEditSession() {
      (this.hunksRenderer.endEditSession(), this.finalizeEditSessionHunks());
    }
    __completeEditSession(e, t) {
      this.settleEditSession(t === `install`, e);
    }
    settleEditSession(e, t) {
      let { editSession: n } = this;
      if (n == null) return;
      let { diff: r, inputDiff: i, annotations: a } = n,
        o = a?.provided ?? this.lineAnnotations;
      if (this.editor != null)
        throw Error(
          `FileDiff.__completeEditSession: detach the editor before completing the session`,
        );
      (this.hunksRenderer.endEditSession(), this.finalizeEditSessionHunks());
      let s = a?.current,
        c,
        l = null,
        u = null,
        d = !1,
        f;
      if (t == null)
        throw Error(`FileDiff.__completeEditSession: editor is required for completion`);
      let p = Ce(r),
        m = { name: p.name, contents: p.additionLines.join(``) };
      p.lang != null && (m.lang = p.lang);
      let h = {
        fileDiff: p,
        editor: t,
        originalFileDiff: i,
        oldFile:
          p.type === `new`
            ? null
            : { name: p.prevName ?? p.name, contents: p.deletionLines.join(``) },
        newFile: m,
        lineAnnotations: s,
        originalLineAnnotations: o,
      };
      Object.freeze(h);
      try {
        if ((t.__emitEditComplete(h), this.options.onEditComplete?.(h) === `accept`)) {
          if (p.cacheKey != null && p.cacheKey === i.cacheKey)
            throw Error(
              `FileDiff.__completeEditSession: an accepted diff must not reuse the replaced diff cacheKey`,
            );
          ((c = p), (l = h.oldFile), (u = h.newFile));
        }
      } catch (e) {
        ((d = !0), (f = e));
      }
      if (
        (e &&
          c != null &&
          this.additionFile != null &&
          ((this.deletionFile = l), (this.additionFile = u)),
        (this.editSession = void 0),
        (this.fileDiff = e && c != null ? c : i),
        (this.pendingData = {
          fileDiff: this.fileDiff,
          lineAnnotations: e && c != null ? (s ?? o) : o,
        }),
        e && this.fileContainer != null && this.rerender(),
        d)
      )
        throw f;
    }
    finalizeEditSessionHunks() {
      let e = this.getWorkingDiff();
      if (e == null || e.editSessionDirty !== !0) return !1;
      let { collapsedContextThreshold: t = 1 } = this.options,
        n = ue(e, this.hunksRenderer.getExpandedHunksMap(), t);
      return (
        ie(e, this.options.parseDiffOptions),
        this.hunksRenderer.setExpandedHunksMap(he(e, n)),
        this.hunksRenderer.refreshHighlightedResult(),
        this.escalateEditSessionRender(),
        !0
      );
    }
    applyDocumentChange(e, t) {
      let n = this.editSession?.diff;
      if (n == null) throw Error(`FileDiff.applyDocumentChange: requires an active edit session`);
      (this.detachAdditionLines(),
        this.hunksRenderer.beginEditSession(n),
        this.hunksRenderer.applyDocumentChange(e),
        t != null && this.syncEditSessionAnnotationsFromEditor(t),
        this.rerender(),
        this.interactionManager.setSelectionDirty());
    }
    applySuspendedDocumentChange(e, t) {
      (this.applyDocumentChange(e, t), this.hunksRenderer.clearRenderCache());
    }
    updateRenderCache(e, t, n = {}) {
      let r = this.editSession?.diff;
      if (r == null) throw Error(`FileDiff.updateRenderCache: requires an active edit session`);
      (this.detachAdditionLines(), this.hunksRenderer.beginEditSession(r));
      let { shouldRefreshDiffsView: i, lineCountChangeInFlight: a } = n;
      this.hunksRenderer.updateRenderCache(e, t, a, n.changedDocumentLines, n.documentLineCount)
        ? (this.refreshViewTimeout != null &&
            (clearTimeout(this.refreshViewTimeout), (this.refreshViewTimeout = void 0)),
          (this.lineStateRefreshPending = !0),
          this.escalateEditSessionRender())
        : i === !0 &&
          (this.refreshViewTimeout != null && clearTimeout(this.refreshViewTimeout),
          (this.lineStateRefreshPending = !0),
          (this.refreshViewTimeout = setTimeout(() => {
            ((this.refreshViewTimeout = void 0),
              this.options.diffStyle === `split`
                ? this.refreshSplitDiffView()
                : this.refreshUnifiedDiffView(),
              this.flushDeferredLineState());
          }, 150)));
    }
    detachAdditionLines() {
      let { diff: e, inputDiff: t } = this.editSession ?? {};
      e != null &&
        (e.additionLines === t?.additionLines || e.additionLines === e.deletionLines) &&
        (e.additionLines = [...e.additionLines]);
    }
    isLineRenderable(e) {
      let t = this.getRenderedDiff();
      if (t == null) return !0;
      let { expandUnchanged: n = !1, collapsedContextThreshold: r = 1 } = this.options;
      return le({
        fileDiff: t,
        lineNumber: e,
        expandedHunks: n ? !0 : this.hunksRenderer.getExpandedHunksMap(),
        collapsedContextThreshold: r,
      });
    }
    getNearestRenderableLine(e, t) {
      let n = this.getRenderedDiff();
      if (n == null) return e;
      let { expandUnchanged: r = !1, collapsedContextThreshold: i = 1 } = this.options;
      return _e({
        fileDiff: n,
        lineNumber: e,
        direction: t,
        expandedHunks: r ? !0 : this.hunksRenderer.getExpandedHunksMap(),
        collapsedContextThreshold: i,
      });
    }
    revealLine(e) {
      let t = this.getRenderedDiff(),
        {
          expandUnchanged: n = !1,
          collapsedContextThreshold: r = 1,
          expansionLineCount: i = 100,
        } = this.options;
      if (t == null || t.isPartial || n) return !1;
      let a = this.hunksRenderer.getExpandedHunksMap();
      for (let [n, o] of t.hunks.entries()) {
        let [s, c] = se(o);
        if (e < s) {
          let c = K({
              isPartial: t.isPartial,
              rangeSize: o.collapsedBefore,
              expandedHunks: a,
              hunkIndex: n,
              collapsedContextThreshold: r,
            }),
            l = s - c.rangeSize;
          if (c.renderAll || e < l + c.fromStart || e >= s - c.fromEnd) return !1;
          let u = e - (l + c.fromStart) + 1,
            d = s - c.fromEnd - e;
          return (u <= d ? this.expandHunk(n, `up`, u + i) : this.expandHunk(n, `down`, d + i), !0);
        }
        if (e < c) return !1;
      }
      let o = pe({
        fileDiff: t,
        hunkIndex: t.hunks.length - 1,
        expandedHunks: a,
        collapsedContextThreshold: r,
        errorPrefix: `FileDiff.revealLine`,
      });
      if (o == null || o.renderAll) return !1;
      let s = t.hunks[t.hunks.length - 1],
        [, c] = se(s);
      return e < c + o.fromStart || e >= c + o.rangeSize
        ? !1
        : (this.expandHunk(t.hunks.length, `up`, e - (c + o.fromStart) + 1 + i), !0);
    }
    shouldSelfHealEditSession() {
      return this.editor == null;
    }
    escalateEditSessionRender() {
      h(this.handleEditSessionRender);
    }
    handleEditSessionRender = () => {
      (this.rerender(), this.flushDeferredLineState());
    };
    removeRenderedCode() {
      (this.resizeManager.cleanUp(),
        this.scrollSyncManager.cleanUp(),
        this.interactionManager.cleanUp(),
        this.bufferBefore?.remove(),
        (this.bufferBefore = void 0),
        this.bufferAfter?.remove(),
        (this.bufferAfter = void 0),
        this.codeUnified?.remove(),
        (this.codeUnified = void 0),
        this.codeDeletions?.remove(),
        (this.codeDeletions = void 0),
        this.codeAdditions?.remove(),
        (this.codeAdditions = void 0),
        this.pre?.remove(),
        (this.pre = void 0),
        (this.appliedPreAttributes = void 0),
        (this.lastRowCount = void 0));
    }
    clearAuxiliaryNodes() {
      for (let { element: e } of this.separatorCache.values()) e.remove();
      this.separatorCache.clear();
      for (let { element: e } of this.annotationCache.values()) e.remove();
      (this.annotationCache.clear(),
        this.gutterUtilityContent?.remove(),
        (this.gutterUtilityContent = void 0));
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
    async primeHighlightCache(e = this.getInputDiff()) {
      let { workerManager: t } = this;
      if (e == null || t == null || !t.isWorkingPool() || e.cacheKey == null || ve(e)) return;
      let n = this.options.tokenizeMaxLength ?? 1e5;
      Math.max(e.additionLines.length, e.deletionLines.length) > n ||
        (await t.primeDiffHighlightCache(e).catch((e) => {
          L(e) || console.error(e);
        }));
    }
    cleanChildNodes() {
      (this.resizeManager.cleanUp(),
        this.scrollSyncManager.cleanUp(),
        this.interactionManager.cleanUp(),
        this.clearAuxiliaryNodes(),
        this.bufferAfter?.remove(),
        this.bufferBefore?.remove(),
        this.codeAdditions?.remove(),
        this.codeDeletions?.remove(),
        this.codeUnified?.remove(),
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
        (this.codeAdditions = void 0),
        (this.codeDeletions = void 0),
        (this.codeUnified = void 0),
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
        (this.headerCache.lastRenderedHTML = void 0),
        (this.lastRowCount = void 0),
        (this.mounted = !1));
    }
    renderSeparators(e) {
      let { hunkSeparators: t } = this.options;
      if (this.isComponentManaged || this.fileContainer == null || typeof t != `function`) {
        for (let { element: e } of this.separatorCache.values()) e.remove();
        this.separatorCache.clear();
        return;
      }
      let n = new Map(this.separatorCache);
      for (let r of e) {
        let e = r.slotName,
          i = this.separatorCache.get(e);
        if (i == null || !Qe(r, i.hunkData)) {
          i?.element.remove();
          let n = document.createElement(`div`);
          ((n.style.display = `contents`), (n.slot = r.slotName));
          let a = t(r, this);
          (a != null && n.appendChild(a),
            this.fileContainer.appendChild(n),
            (i = { element: n, hunkData: r }),
            this.separatorCache.set(e, i));
        }
        n.delete(e);
      }
      for (let [e, { element: t }] of n.entries()) (this.separatorCache.delete(e), t.remove());
    }
    renderAnnotations() {
      if (this.isComponentManaged || this.fileContainer == null) {
        for (let { element: e } of this.annotationCache.values()) e.remove();
        this.annotationCache.clear();
        return;
      }
      let e = new Map(this.annotationCache),
        {
          renderedData: t,
          options: { renderAnnotation: n },
        } = this;
      if (n != null && t != null) {
        let { fileDiff: r, lineAnnotations: i } = t;
        for (let [t, a] of i.entries()) {
          let i = this.getAnnotationSlotName(a),
            o = `${t}-${i}`,
            s = this.annotationCache.get(o);
          if (s == null || s.fileDiff !== r || !Ze(a, s.annotation)) {
            s?.element.remove();
            let e = n(a, r);
            if (e == null) continue;
            ((s = { element: w(i), annotation: a, fileDiff: r }),
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
      let n = r();
      (n.appendChild(t), this.fileContainer.appendChild(n), (this.gutterUtilityContent = n));
    }
    getOrCreateFileContainer(e, t) {
      let { fileContainer: n } = this,
        r = e ?? n ?? document.createElement(`diffs-container`),
        i = n !== r;
      return (
        n != null && i && this.editor?.__captureFocusForDOMReplacement(),
        i && this.emitPostRender(!0),
        (this.fileContainer = r),
        n != null &&
          i &&
          ((this.headerCache.lastRenderedHTML = void 0), (this.headerElement = void 0)),
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
            : a(e) && e.hasAttribute(`data-theme-css`)
              ? ((this.themeCSSStyle ??= e), (this.hasAdoptedThemeCSS = !0))
              : a(e) &&
                e.hasAttribute(`data-unsafe-css`) &&
                ((this.unsafeCSSStyle ??= e),
                (this.appliedUnsafeCSS ??= this.options.unsafeCSS ?? void 0));
    }
    ensureSpriteSVG(e) {
      let t = e.shadowRoot ?? e.attachShadow({ mode: `open` });
      if (this.spriteSVG == null) {
        let e = document.createElement(`div`);
        e.innerHTML = R;
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
            (this.codeUnified = void 0),
            (this.codeDeletions = void 0),
            (this.codeAdditions = void 0),
            t.appendChild(this.pre))
          : this.pre.parentNode !== t &&
            (this.editor?.__captureFocusForDOMReplacement(),
            t.appendChild(this.pre),
            (this.appliedPreAttributes = void 0)),
        this.placeHolder?.remove(),
        (this.placeHolder = void 0),
        this.pre
      );
    }
    syncCodeNodesFromPre(e) {
      ((this.codeUnified = void 0), (this.codeDeletions = void 0), (this.codeAdditions = void 0));
      for (let t of Array.from(e.children))
        t instanceof HTMLElement &&
          (t.hasAttribute(`data-unified`)
            ? (this.codeUnified = t)
            : t.hasAttribute(`data-deletions`)
              ? (this.codeDeletions = t)
              : t.hasAttribute(`data-additions`) && (this.codeAdditions = t));
    }
    applyHeaderToDOM(e, t, n) {
      (this.cleanupErrorWrapper(), this.placeHolder?.remove(), (this.placeHolder = void 0));
      let {
          headerCache: { fileDiff: r, html: i, lastRenderedHTML: a },
        } = this,
        o = (n !== this.editSession?.diff && q(r, n) ? i : void 0) ?? Y(e);
      if (((this.headerCache.html = o), (this.headerCache.fileDiff = n), o !== a)) {
        let e = document.createElement(`div`);
        e.innerHTML = o;
        let n = e.firstElementChild;
        if (!(n instanceof HTMLElement)) return;
        (this.headerElement == null
          ? t.shadowRoot?.prepend(n)
          : t.shadowRoot?.replaceChild(n, this.headerElement),
          (this.headerElement = n),
          (this.headerCache.lastRenderedHTML = o));
      }
      if (this.isComponentManaged) return;
      let {
        renderCustomHeader: s,
        renderHeaderPrefix: c,
        renderHeaderFilenameSuffix: l,
        renderHeaderMetadata: u,
      } = this.options;
      if (s != null) {
        let e = s(n) ?? void 0;
        ((this.headerCustom = this.upsertHeaderSlotElement(t, this.headerCustom, De, e)),
          this.headerPrefix?.remove(),
          this.headerFilenameSuffix?.remove(),
          this.headerMetadata?.remove(),
          (this.headerPrefix = void 0),
          (this.headerFilenameSuffix = void 0),
          (this.headerMetadata = void 0));
        return;
      }
      let d = c?.(n) ?? void 0,
        f = l?.(n) ?? void 0,
        p = u?.(n) ?? void 0;
      ((this.headerPrefix = this.upsertHeaderSlotElement(t, this.headerPrefix, Te, d)),
        (this.headerFilenameSuffix = this.upsertHeaderSlotElement(
          t,
          this.headerFilenameSuffix,
          ke,
          f,
        )),
        (this.headerMetadata = this.upsertHeaderSlotElement(t, this.headerMetadata, je, p)),
        this.headerCustom?.remove(),
        (this.headerCustom = void 0));
    }
    clearReusableHeader() {
      ((this.headerCache.html = void 0), (this.headerCache.fileDiff = void 0));
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
            ((this.unsafeCSSStyle ??= T()),
            this.unsafeCSSStyle.parentNode !== t && t.appendChild(this.unsafeCSSStyle),
            (this.unsafeCSSStyle.textContent = B(e)),
            (this.appliedUnsafeCSS = e)));
    }
    applyThemeState(e, t, n, r) {
      let i = e.shadowRoot ?? e.attachShadow({ mode: `open` }),
        a = r ?? n,
        o = this.getTheme(),
        s = typeof o == `string` ? o : { ...o },
        c = V(i);
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
          : ((this.themeCSSStyle = S({
              shadowRoot: i,
              currentNode: this.themeCSSStyle,
              themeCSS: de(t, a, c),
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
        (this.themeCSSStyle.textContent = fe(this.themeCSSStyle.textContent ?? ``, V(e)));
    }
    shouldGuardRebuildScroll() {
      return this.editor != null && p();
    }
    applyHunksToDOM(e, t) {
      this.shouldGuardRebuildScroll()
        ? x(e, () => this.replaceCodeColumns(e, t))
        : this.replaceCodeColumns(e, t);
    }
    applyCodeColumnsInPlace(e, t, n) {
      let r = this.getColumnPair(e);
      if (r == null) return !1;
      let i = Q(t[0]),
        a = Q(t[1]);
      return i == null || a == null
        ? !1
        : ((r.gutter.innerHTML = Y(i)),
          (r.content.innerHTML = Y(a)),
          n !== this.lastRowCount &&
            (r.gutter.style.setProperty(`grid-row`, `span ${n}`),
            r.content.style.setProperty(`grid-row`, `span ${n}`)),
          !0);
    }
    replaceCodeColumns(e, t) {
      let { overflow: n = `scroll` } = this.options,
        r = (this.options.hunkSeparators ?? `line-info`) === `line-info`,
        i = n === `wrap` ? t.rowCount : void 0;
      (this.cleanupErrorWrapper(), this.applyPreNodeAttributes(e, t));
      let a = !1,
        s = [],
        c = this.hunksRenderer.renderCodeAST(`unified`, t),
        l = this.hunksRenderer.renderCodeAST(`deletions`, t),
        u = this.hunksRenderer.renderCodeAST(`additions`, t);
      (this.editor?.__captureFocusForDOMReplacement(),
        c == null
          ? l != null || u != null
            ? (l == null
                ? (this.codeDeletions?.remove(), (this.codeDeletions = void 0))
                : ((a = this.codeDeletions == null || this.codeUnified != null),
                  this.codeUnified?.remove(),
                  (this.codeUnified = void 0),
                  (this.codeDeletions = o({
                    code: this.codeDeletions,
                    columnType: `deletions`,
                    rowSpan: i,
                    containerSize: r,
                  })),
                  this.applyCodeColumnsInPlace(this.codeDeletions, l, t.rowCount) ||
                    (this.codeDeletions.innerHTML = this.hunksRenderer.renderPartialHTML(l)),
                  s.push(this.codeDeletions)),
              u == null
                ? (this.codeAdditions?.remove(), (this.codeAdditions = void 0))
                : ((a = a || this.codeAdditions == null || this.codeUnified != null),
                  this.codeUnified?.remove(),
                  (this.codeUnified = void 0),
                  (this.codeAdditions = o({
                    code: this.codeAdditions,
                    columnType: `additions`,
                    rowSpan: i,
                    containerSize: r,
                  })),
                  this.applyCodeColumnsInPlace(this.codeAdditions, u, t.rowCount) ||
                    (this.codeAdditions.innerHTML = this.hunksRenderer.renderPartialHTML(u)),
                  s.push(this.codeAdditions)))
            : (this.codeUnified?.remove(),
              (this.codeUnified = void 0),
              this.codeDeletions?.remove(),
              (this.codeDeletions = void 0),
              this.codeAdditions?.remove(),
              (this.codeAdditions = void 0))
          : ((a =
              this.codeUnified == null || this.codeAdditions != null || this.codeDeletions != null),
            this.codeDeletions?.remove(),
            (this.codeDeletions = void 0),
            this.codeAdditions?.remove(),
            (this.codeAdditions = void 0),
            (this.codeUnified = o({
              code: this.codeUnified,
              columnType: `unified`,
              rowSpan: i,
              containerSize: r,
            })),
            this.applyCodeColumnsInPlace(this.codeUnified, c, t.rowCount) ||
              (this.codeUnified.innerHTML = this.hunksRenderer.renderPartialHTML(c)),
            s.push(this.codeUnified)),
        s.length === 0 ? (e.textContent = ``) : a && e.replaceChildren(...s),
        (this.lastRowCount = t.rowCount));
    }
    applyPartialRender({ fileDiff: e, previousRenderRange: t, renderRange: n }) {
      let {
        pre: r,
        codeUnified: i,
        codeAdditions: a,
        codeDeletions: o,
        options: { diffStyle: s = `split` },
      } = this;
      if (
        r == null ||
        t == null ||
        n == null ||
        !Number.isFinite(t.totalLines) ||
        !Number.isFinite(n.totalLines) ||
        this.lastRowCount == null
      )
        return !1;
      let c = this.getCodeColumns(s, i, o, a);
      if (c == null) return !1;
      let l = t.startingLine,
        u = n.startingLine,
        d = l + t.totalLines,
        f = u + n.totalLines,
        p = Math.max(l, u),
        m = Math.min(d, f);
      if (m <= p) return !1;
      let h = Math.max(0, p - l),
        g = Math.max(0, d - m),
        _ = this.trimColumns({
          columns: c,
          trimStart: h,
          trimEnd: g,
          previousStart: l,
          overlapStart: p,
          overlapEnd: m,
          diffStyle: s,
        });
      if (_ < 0) throw Error(`FileDiff.applyPartialRender: failed to trim to overlap`);
      if (this.lastRowCount < _)
        throw Error(`FileDiff.applyPartialRender: trimmed beyond DOM row count`);
      let v = this.lastRowCount - _,
        y = (t, n) => {
          if (!(n <= 0))
            return this.hunksRenderer.renderDiff(e, {
              startingLine: t,
              totalLines: n,
              bufferBefore: 0,
              bufferAfter: 0,
            });
        },
        b = y(u, Math.max(p - u, 0));
      if (b == null && u < p) return !1;
      let x = y(m, Math.max(f - m, 0));
      if (x == null && f > m) return !1;
      let S = (e, t) => {
        if (e != null) {
          if (s === `unified` && !Array.isArray(c)) this.insertPartialHTML(s, c, e, t);
          else if (s === `split` && Array.isArray(c)) this.insertPartialHTML(s, c, e, t);
          else throw Error(`FileDiff.applyPartialRender.applyChunk: invalid chunk application`);
          ((v += e.rowCount), this.adoptRenderData(e.fileDiff));
        }
      };
      return (
        this.cleanupErrorWrapper(),
        S(b, `afterbegin`),
        S(x, `beforeend`),
        this.lastRowCount !== v && (this.applyRowSpan(s, c, v), (this.lastRowCount = v)),
        !0
      );
    }
    insertPartialHTML(e, t, n, r) {
      if (e === `unified` && !Array.isArray(t)) {
        let e = this.hunksRenderer.renderCodeAST(`unified`, n);
        this.renderPartialColumn(t, e, r);
      } else if (e === `split` && Array.isArray(t)) {
        let e = this.hunksRenderer.renderCodeAST(`deletions`, n),
          i = this.hunksRenderer.renderCodeAST(`additions`, n);
        (this.renderPartialColumn(t[0], e, r), this.renderPartialColumn(t[1], i, r));
      } else throw Error(`FileDiff.insertPartialHTML: Invalid argument composition`);
    }
    refreshSplitDiffView() {
      let e = this.getWorkingDiff();
      if (this.options.diffStyle !== `split` || e == null) return;
      let t = this.hunksRenderer.renderDiff(e, this.renderRange);
      if (t == null) return;
      let n = this.getCodeColumns(
        `split`,
        this.codeUnified,
        this.codeDeletions,
        this.codeAdditions,
      );
      if (!Array.isArray(n)) return;
      let r = (e, n) => {
        if (n == null) return;
        let r = this.hunksRenderer.renderCodeAST(e, t),
          i = Q(r?.[0]),
          a = Q(r?.[1]);
        for (let [e, t] of [
          [n.gutter, i],
          [n.content, a],
        ])
          if (t != null && e.childElementCount === t.length)
            for (let n = 0; n < t.length; n++) {
              let r = e.children[n],
                i = t[n].properties[`data-line-type`];
              i != null && r.dataset.lineType !== i && (r.dataset.lineType = i);
            }
      };
      (r(`deletions`, n[0]), r(`additions`, n[1]), this.adoptRenderData(t.fileDiff));
    }
    refreshUnifiedDiffView() {
      let e = this.getWorkingDiff();
      if (this.options.diffStyle !== `unified` || e == null) return;
      let t = this.hunksRenderer.renderDiff(e, this.renderRange);
      if (t == null) return;
      let n = this.getCodeColumns(
        `unified`,
        this.codeUnified,
        this.codeDeletions,
        this.codeAdditions,
      );
      if (n == null || Array.isArray(n)) return;
      let r = this.hunksRenderer.renderCodeAST(`unified`, t),
        i = Q(r?.[0]),
        a = Q(r?.[1]),
        o = () => {
          for (let [e, t] of [
            [n.gutter, i],
            [n.content, a],
          ])
            t != null && (e.innerHTML = Y(t));
          (t.rowCount !== this.lastRowCount &&
            (this.applyRowSpan(`unified`, n, t.rowCount), (this.lastRowCount = t.rowCount)),
            this.adoptRenderData(t.fileDiff));
        };
      (this.shouldGuardRebuildScroll() ? x(this.pre, o) : o(),
        this.renderSeparators(t.hunkData),
        (this.managersDirty = !0),
        this.flushManagers(),
        this.syncRenderViewToEditor());
    }
    renderPartialColumn(e, t, n) {
      if (e == null || t == null) return;
      let r = Q(t[0]),
        i = Q(t[1]);
      if (r == null || i == null)
        throw Error(`FileDiff.insertPartialHTML: Unexpected AST structure`);
      let a = i.at(0);
      n === `beforeend` &&
        a?.type === `element` &&
        typeof a.properties[`data-buffer-size`] == `number` &&
        this.mergeBuffersIfNecessary(
          a.properties[`data-buffer-size`],
          e.content.children[e.content.children.length - 1],
          e.gutter.children[e.gutter.children.length - 1],
          r,
          i,
          !0,
        );
      let o = i.at(-1);
      (n === `afterbegin` &&
        o?.type === `element` &&
        typeof o.properties[`data-buffer-size`] == `number` &&
        this.mergeBuffersIfNecessary(
          o.properties[`data-buffer-size`],
          e.content.children[0],
          e.gutter.children[0],
          r,
          i,
          !1,
        ),
        e.gutter.insertAdjacentHTML(n, this.hunksRenderer.renderPartialHTML(r)),
        e.content.insertAdjacentHTML(n, this.hunksRenderer.renderPartialHTML(i)));
    }
    mergeBuffersIfNecessary(e, t, n, r, i, a) {
      if (!(t instanceof HTMLElement) || !(n instanceof HTMLElement)) return;
      let o = this.getBufferSize(t.dataset);
      o != null &&
        (a ? (r.shift(), i.shift()) : (r.pop(), i.pop()),
        this.updateBufferSize(t, o + e),
        this.updateBufferSize(n, o + e));
    }
    applyRowSpan(e, t, n) {
      let r = (e) => {
        e != null &&
          (e.gutter.style.setProperty(`grid-row`, `span ${n}`),
          e.content.style.setProperty(`grid-row`, `span ${n}`));
      };
      if (e === `unified` && !Array.isArray(t)) r(t);
      else if (e === `split` && Array.isArray(t)) (r(t[0]), r(t[1]));
      else throw Error(`dun fuuuuked up`);
    }
    trimColumnRows(e, t, n) {
      let r = 0,
        i = 0,
        a = 0,
        o = !1,
        s = n >= 0;
      if (e == null) return 0;
      let c = Array.from(e.content.children),
        l = Array.from(e.gutter.children);
      if (c.length !== l.length) throw Error(`FileDiff.trimColumnRows: columns do not match`);
      for (; a < c.length && !(t <= 0 && !s && !o);) {
        let e = l[a],
          u = c[a];
        if ((a++, !(e instanceof HTMLElement) || !(u instanceof HTMLElement)))
          throw (
            console.error({ gutterElement: e, contentElement: u }),
            Error(`FileDiff.trimColumnRows: invalid row elements`)
          );
        if (
          o &&
          ((o = !1),
          (e.dataset.gutterBuffer === `annotation` && `lineAnnotation` in u.dataset) ||
            (e.dataset.gutterBuffer === `metadata` && `noNewline` in u.dataset))
        )
          (e.remove(), u.remove(), i++);
        else if (`lineIndex` in e.dataset && `lineIndex` in u.dataset)
          ((t > 0 || (s && r >= n)) &&
            (e.remove(), u.remove(), t > 0 && (t--, t === 0 && (o = !0)), i++),
            r++);
        else if (`separator` in e.dataset && `separator` in u.dataset)
          (t > 0 || (s && r >= n)) && (e.remove(), u.remove(), i++);
        else if (e.dataset.gutterBuffer === `annotation` && `lineAnnotation` in u.dataset)
          (t > 0 || (s && r >= n)) && (e.remove(), u.remove(), i++);
        else if (e.dataset.gutterBuffer === `metadata` && `noNewline` in u.dataset)
          (t > 0 || (s && r >= n)) && (e.remove(), u.remove(), i++);
        else if (e.dataset.gutterBuffer === `buffer` && `contentBuffer` in u.dataset) {
          let a = this.getBufferSize(u.dataset);
          if (a == null) throw Error(`FileDiff.trimColumnRows: invalid element`);
          if (t > 0) {
            let n = Math.min(t, a),
              r = a - n;
            (r > 0
              ? (this.updateBufferSize(e, r), this.updateBufferSize(u, r), (i += n))
              : (e.remove(), u.remove(), (i += a)),
              (t -= n),
              t === 0 && r === 0 && (o = !0));
          } else if (s) {
            let t = r,
              o = r + a - 1;
            if (n <= t) (e.remove(), u.remove(), (i += a));
            else if (n <= o) {
              let t = o - n + 1,
                r = a - t;
              (this.updateBufferSize(e, r), this.updateBufferSize(u, r), (i += t));
            }
          }
          r += a;
        } else
          throw (
            console.error({ gutterElement: e, contentElement: u }),
            Error(`FileDiff.trimColumnRows: unknown row elements`)
          );
      }
      return i;
    }
    trimColumns({
      columns: e,
      diffStyle: t,
      overlapEnd: n,
      overlapStart: r,
      previousStart: i,
      trimEnd: a,
      trimStart: o,
    }) {
      let s = Math.max(0, r - i),
        c = n - i;
      if (c < 0) throw Error(`FileDiff.trimColumns: overlap ends before previous`);
      let l = o > 0,
        u = a > 0;
      if (!l && !u) return 0;
      let d = l ? s : 0,
        f = u ? c : -1;
      if (t === `unified` && !Array.isArray(e)) return this.trimColumnRows(e, d, f);
      if (t === `split` && Array.isArray(e)) {
        let t = this.trimColumnRows(e[0], d, f),
          n = this.trimColumnRows(e[1], d, f);
        if (e[0] != null && e[1] != null && t !== n)
          throw Error(`FileDiff.trimColumns: split columns out of sync`);
        return e[0] == null ? n : t;
      }
      throw (
        console.error({ diffStyle: t, columns: e }),
        Error(`FileDiff.trimColumns: Invalid columns for diffType`)
      );
    }
    getBufferSize(e) {
      let t = Number.parseInt(e?.bufferSize ?? ``, 10);
      return Number.isNaN(t) ? void 0 : t;
    }
    updateBufferSize(e, t) {
      ((e.dataset.bufferSize = `${t}`),
        e.style.setProperty(`grid-row`, `span ${t}`),
        e.style.setProperty(`min-height`, `calc(${t} * 1lh)`));
    }
    getColumnPair(e) {
      if (e == null) return;
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
    getCodeColumns(e, t, n, r) {
      if (e === `unified`) return this.getColumnPair(t);
      {
        let e = this.getColumnPair(n),
          t = this.getColumnPair(r);
        return e != null || t != null ? [e, t] : void 0;
      }
    }
    updateBuffers(e) {
      this.pre != null && this.applyBuffers(this.pre, e);
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
    applyPreNodeAttributes(
      e,
      { additionsContentAST: t, deletionsContentAST: n, totalLines: r },
      i,
    ) {
      let {
          diffIndicators: a = `bars`,
          disableBackground: o = !1,
          disableLineNumbers: s = !1,
          overflow: c = `scroll`,
          diffStyle: l = `split`,
        } = this.options,
        d = {
          type: `diff`,
          diffIndicators: a,
          disableBackground: o,
          disableLineNumbers: s,
          overflow: c,
          split: l !== `unified` && t != null && n != null,
          totalLines: r,
          customProperties: i,
        };
      u(d, this.appliedPreAttributes) || (P(e, d), (this.appliedPreAttributes = d));
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
function ct(e) {
  return { name: e.name, lang: e.lang, contents: e.additionLines.join(``) };
}
function lt(e, t) {
  return e == null || t == null ? e == null && t == null : D(e, t);
}
function ut({ fileDiff: e, oldFile: t, newFile: n }) {
  return (e != null && e.hunks.length > 0) || t != null || n != null;
}
function dt({ fileDiff: e, oldFile: t, newFile: n }) {
  return e != null || t != null || n != null;
}
function ft(e, t, n = !1) {
  return !n && e == null && t;
}
function pt(e, t, n = !1) {
  return e == null && t && !n;
}
function Q(e) {
  if (e != null && e.type === `element`) return e.children ?? [];
}
function mt({
  fileDiff: e,
  metrics: t,
  disableFileHeader: n,
  hunkSeparators: r,
  expandUnchanged: i,
  expandedHunks: a,
  collapsedContextThreshold: o,
  canHydratePartialDiff: s,
}) {
  let c = J(t, n),
    l = c,
    u = i ? !0 : a,
    d = e.hunks.length - 1;
  for (let n = 0; n < e.hunks.length; n++) {
    let i = e.hunks[n];
    if (i == null) throw Error(`computeEstimatedDiffHeights: invalid hunk index`);
    let a = K({
        isPartial: e.isPartial,
        rangeSize: i.collapsedBefore,
        expandedHunks: u,
        hunkIndex: n,
        collapsedContextThreshold: o,
      }),
      f = (a.fromStart + a.fromEnd) * t.lineHeight;
    if (((c += f), (l += f), a.collapsedLines > 0)) {
      let e = H({ type: r, metrics: t, hunkIndex: n, hunkSpecs: i.hunkSpecs })?.totalHeight ?? 0;
      ((c += e), (l += e));
    }
    ((c += i.splitLineCount * t.lineHeight), (l += i.unifiedLineCount * t.lineHeight));
    let p = ht(i);
    ((c += p.split * t.lineHeight), (l += p.unified * t.lineHeight));
    let m =
      n === d
        ? pe({
            fileDiff: e,
            hunkIndex: n,
            expandedHunks: u,
            collapsedContextThreshold: o,
            errorPrefix: `computeEstimatedDiffHeights`,
          })
        : void 0;
    if (m != null) {
      let e = (m.fromStart + m.fromEnd) * t.lineHeight;
      if (((c += e), (l += e), m.collapsedLines > 0)) {
        let e = U({ type: r, metrics: t })?.totalHeight ?? 0;
        ((c += e), (l += e));
      }
    } else if (n === d && e.isPartial && s) {
      let e = U({ type: r, metrics: t })?.totalHeight ?? 0;
      ((c += e), (l += e));
    }
  }
  if (e.hunks.length > 0) {
    let e = te(t);
    ((c += e), (l += e));
  }
  return { splitHeight: c, unifiedHeight: l };
}
function ht(e) {
  if (!e.noEOFCRAdditions && !e.noEOFCRDeletions) return { split: 0, unified: 0 };
  let t = e.hunkContent.at(-1);
  if (t == null) return { split: 0, unified: 0 };
  if (t.type === `context`) {
    let e = +(t.lines > 0);
    return { split: e, unified: e };
  }
  return gt(e, t);
}
function gt(e, t) {
  let n =
      (t.deletions > 0 && e.noEOFCRDeletions ? 1 : 0) +
      (t.additions > 0 && e.noEOFCRAdditions ? 1 : 0),
    r = t.deletions > 0 && e.noEOFCRDeletions,
    i = t.additions > 0 && e.noEOFCRAdditions;
  return { split: r || i ? 1 : 0, unified: n };
}
var _t = 3e3,
  vt = new Map(),
  yt = -1,
  bt = class extends st {
    __id = `little-virtualized-file-diff:${++yt}`;
    renderType = `virtualized`;
    top;
    height = 0;
    metrics;
    cache = {
      heightDeltas: new Map(),
      measuredHeightDeltaTotal: 0,
      estimatedSplitHeight: void 0,
      estimatedUnifiedHeight: void 0,
      checkpoints: [],
      totalLines: 0,
      fileAnnotationHeight: 0,
      ghostTextRows: vt,
      ghostTextRowsByIndex: new Map(),
    };
    isVisible = !1;
    isSetup = !1;
    virtualizer;
    layoutDirty = !0;
    currentCollapsed;
    pendingHydratedDiff;
    pendingExpansions;
    pendingRender;
    constructor(e, t, n, r, i) {
      (super(e, r, i), (this.virtualizer = t), (this.metrics = xe(n)));
    }
    setMetrics(e, t = !1) {
      let n = xe(e);
      (t || !g(this.metrics, n)) &&
        ((this.metrics = n), this.resetLayoutCache({ includeEstimatedHeights: !0 }));
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
    setFileAnnotationHeight(e) {
      let t = this.cache.fileAnnotationHeight;
      return (
        e !== t &&
        ((this.cache.fileAnnotationHeight = e), (this.cache.measuredHeightDeltaTotal += e - t), !0)
      );
    }
    hasFileAnnotations(e) {
      let t = this.getLayoutAnnotations();
      return I(t)
        ? t.some((t) =>
            t.lineNumber === 0
              ? e.type === `new`
                ? t.side === `additions`
                : e.type !== `deleted` || t.side === `deletions`
              : !1,
          )
        : !1;
    }
    getLineHeight(e, t = !1) {
      return this.getEstimatedLineHeight(t) + (this.cache.heightDeltas.get(e) ?? 0);
    }
    getEstimatedLineHeight(e = !1) {
      let t = e ? 2 : 1;
      return this.metrics.lineHeight * t;
    }
    setOptions(e) {
      if (this.isAdvancedMode())
        throw Error(
          `VirtualizedFileDiff.setOptions cannot be used inside CodeView. Update CodeView options instead.`,
        );
      if (e == null) return;
      let { options: t } = this,
        n = !i(t, e),
        r = n && Ot(t, e);
      (super.setOptions(e),
        r && this.resetLayoutCache({ forceSimpleRecompute: !0, includeEstimatedHeights: kt(t, e) }),
        n && (this.forceRenderOverride = !0),
        n && this.isSimpleMode() && this.virtualizer.instanceChanged(this, r));
    }
    setThemeType(e) {
      if (this.isAdvancedMode())
        throw Error(
          `VirtualizedFileDiff.setThemeType cannot be used inside CodeView. Update CodeView options instead.`,
        );
      super.setThemeType(e);
    }
    resetLayoutCache({
      forceSimpleRecompute: e = !1,
      includeEstimatedHeights: t = !1,
      resetRenderRange: n = !0,
    } = {}) {
      ((this.layoutDirty = !0),
        (this.cache.fileAnnotationHeight = 0),
        this.cache.heightDeltas.clear(),
        (this.cache.measuredHeightDeltaTotal = 0),
        (this.cache.ghostTextRows = vt),
        this.cache.ghostTextRowsByIndex.size > 0 && this.cache.ghostTextRowsByIndex.clear(),
        this.invalidateDerivedLayoutCache(t, n),
        e && this.isSimpleMode() && this.computeApproximateSize());
    }
    invalidateDerivedLayoutCache(e, t = !0) {
      ((this.layoutDirty = !0),
        this.cache.checkpoints.length > 0 && (this.cache.checkpoints.length = 0),
        this.cache.totalLines !== 0 && (this.cache.totalLines = 0),
        e &&
          ((this.cache.estimatedSplitHeight = void 0),
          (this.cache.estimatedUnifiedHeight = void 0)),
        this.renderRange != null && t && (this.renderRange = void 0));
    }
    applyGhostTextRows(e, t) {
      let {
        cache: { heightDeltas: n, ghostTextRows: r, ghostTextRowsByIndex: i },
        metrics: { lineHeight: a },
      } = this;
      if (r === t) return !1;
      let o = this.getDiffStyle(),
        s = new Map();
      for (let [n, r] of t) {
        let t = this.getLineIndexForDiff(e, n + 1, `additions`);
        t != null && s.set(o === `split` ? t[1] : t[0], r);
      }
      let c = !1;
      for (let e of new Set([...i.keys(), ...s.keys()])) {
        let t = ((s.get(e) ?? 0) - (i.get(e) ?? 0)) * a;
        if (t === 0) continue;
        let r = (n.get(e) ?? 0) + t;
        (r === 0 ? n.delete(e) : n.set(e, r), (this.cache.measuredHeightDeltaTotal += t), (c = !0));
      }
      return ((this.cache.ghostTextRows = t), (this.cache.ghostTextRowsByIndex = s), c);
    }
    reconcileHeights() {
      let e = !1,
        {
          options: { overflow: t = `scroll` },
          metrics: { lineHeight: n },
        } = this,
        r = this.placeHolder == null ? this.getRenderedDiff() : this.getLayoutDiff();
      if (this.fileContainer == null || r == null)
        return (this.height !== 0 && (e = !0), (this.height = 0), e);
      ((this.top = this.getVirtualizedTop()),
        (e = this.applyGhostTextRows(r, this.editor?.__getGhostTextRows() ?? vt)));
      let { ghostTextRowsByIndex: i } = this.cache,
        a = t !== `scroll` || this.lineAnnotations.length > 0 || this.isResizeDebuggingEnabled();
      if (
        this.placeHolder != null ||
        (!a && this.cache.heightDeltas.size === 0 && this.cache.fileAnnotationHeight === 0)
      )
        return (e && (this.computeApproximateSize(!0), this.setPlaceholderHeight(this.height)), e);
      let o = this.getDiffStyle(),
        s = o === `split` ? [this.codeDeletions, this.codeAdditions] : [this.codeUnified];
      if (this.renderRange != null && ne(this.renderRange)) {
        let t = xt(s) ?? 0;
        this.setFileAnnotationHeight(t) && (e = !0);
      }
      for (let t of s) {
        if (t == null) continue;
        let r = t.children[1];
        if (!(r instanceof HTMLElement)) continue;
        let s = o === `split` && t === this.codeDeletions;
        for (let t of r.children) {
          if (!(t instanceof HTMLElement)) continue;
          let r = t.dataset.lineIndex;
          if (r == null) continue;
          let c = Nt(r, o),
            l = i.get(c) ?? 0;
          if (s && l > 0) continue;
          let u = this.cache.heightDeltas.get(c) ?? 0;
          if (!a && u === l * n) continue;
          let d = t.getBoundingClientRect().height + l * n,
            f = !1;
          t.nextElementSibling instanceof HTMLElement &&
            (`lineAnnotation` in t.nextElementSibling.dataset ||
              `noNewline` in t.nextElementSibling.dataset) &&
            (`noNewline` in t.nextElementSibling.dataset && (f = !0),
            (d += t.nextElementSibling.getBoundingClientRect().height));
          let p = this.getEstimatedLineHeight(f),
            m = d - p;
          m !== u &&
            ((e = !0),
            (this.cache.measuredHeightDeltaTotal += m - u),
            m === 0 ? this.cache.heightDeltas.delete(c) : this.cache.heightDeltas.set(c, m));
        }
      }
      return ((e || this.isResizeDebuggingEnabled()) && this.computeApproximateSize(!0), e);
    }
    onRender = (e) =>
      this.fileContainer != null && (e && (this.top = this.getVirtualizedTop()), this.render());
    flushManagers() {
      (super.flushManagers(), this.lineStateRefreshPending && this.flushDeferredLineState());
    }
    updateCodeViewLayout(e, t, n, r) {
      let i = !1,
        a = !1,
        {
          pendingExpansions: o,
          pendingHydratedDiff: s,
          options: { collapsed: c = !1 },
        } = this;
      if (
        (s != null &&
          ((this.pendingHydratedDiff = void 0),
          s.expectedDiff === e &&
            (Object.assign(e, s.nextDiff),
            this.setHydratedState(s.files),
            this.installHydratedSessionDiff(e),
            (this.forceRenderOverride = !0),
            (i = !0),
            (a = !0))),
        o != null)
      ) {
        this.pendingExpansions = void 0;
        for (let { hunkIndex: e, direction: t, expansionLineCountOverride: n } of o)
          (this.hunksRenderer.expandHunk(e, t, n), (this.forceRenderOverride = !0), (a = !0));
      }
      let l = this.updateInputDiff(e, r),
        {
          pendingRenderDiff: u,
          layoutDiffChanged: d,
          renderedDiffChanged: f,
          annotationsChanged: p,
        } = this.updatePendingRender(e, r);
      return (
        !this.forceRenderOverride && (l || f || p) && (this.forceRenderOverride = !0),
        (n?.resetDiffLayoutCache === !0 || d) && (i = !0),
        (d || (n?.resetDiffLayoutCache === !0 && n.includeEstimatedDiffHeights)) && (a = !0),
        n?.metrics != null && ((this.metrics = xe(n.metrics)), (i = !0), (a = !0)),
        this.currentCollapsed !== c && ((this.currentCollapsed = c), (i = !0)),
        i
          ? this.resetLayoutCache({ includeEstimatedHeights: a })
          : a && this.invalidateDerivedLayoutCache(!0),
        (this.top = t),
        this.computeApproximateSize(!1, u),
        this.height
      );
    }
    getLinePosition(e, t = `additions`) {
      let n = this.getLayoutDiff();
      if (n == null || e < 1) return;
      let r = this.getLineIndexForDiff(n, e, t);
      if (r == null) return;
      let {
          disableFileHeader: i = !1,
          expandUnchanged: a = !1,
          collapsed: o = !1,
          collapsedContextThreshold: s = 1,
        } = this.options,
        c = this.getDiffStyle(),
        l = this.getHunkSeparatorType(),
        u = c === `split` ? r[1] : r[0];
      this.approximateLayoutCheckpoints(n);
      let d = J(this.metrics, i),
        f = this.getLayoutCheckpointBeforeLineIndex(u),
        p = f?.top ?? d + this.cache.fileAnnotationHeight;
      if (o) return { top: ae(this.metrics, i), height: 0 };
      let m;
      return (
        W({
          diff: n,
          diffStyle: c,
          startingLine: f?.renderedLineIndex ?? 0,
          expandedHunks: a ? !0 : this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: s,
          callback: ({
            hunkIndex: e,
            hunk: t,
            collapsedBefore: n,
            collapsedAfter: r,
            deletionLine: i,
            additionLine: a,
          }) => {
            let o =
              c === `split`
                ? (a?.splitLineIndex ?? i?.splitLineIndex)
                : (a?.unifiedLineIndex ?? i?.unifiedLineIndex);
            if (o == null)
              throw Error(`VirtualizedFileDiff.getLinePosition: missing line index data`);
            if (n > 0) {
              let r = H({ type: l, metrics: this.metrics, hunkIndex: e, hunkSpecs: t?.hunkSpecs });
              if (r != null) {
                if (((p += r.gapBefore), u >= o - n && u < o))
                  return ((m = { top: p, height: r.height }), !0);
                p += r.height + r.gapAfter;
              }
            }
            let s = this.getLineHeight(o, (a?.noEOFCR ?? !1) || (i?.noEOFCR ?? !1));
            if (o === u) return ((m = { top: p, height: s }), !0);
            if (((p += s), r > 0)) {
              let e = U({ type: l, metrics: this.metrics });
              if (e != null) {
                if (u > o && u <= o + r)
                  return ((m = { top: p + e.gapBefore, height: e.height }), !0);
                p += e.totalHeight;
              }
            }
            return !1;
          },
        }),
        m
      );
    }
    getEditorViewport() {
      return this.virtualizer.type === `simple`
        ? this.virtualizer.getRoot()
        : this.virtualizer.getContainerElement();
    }
    getNumericScrollAnchor(e) {
      let t = this.getLayoutDiff();
      if (t == null) return;
      let {
        disableFileHeader: n = !1,
        expandUnchanged: r = !1,
        collapsed: i = !1,
        collapsedContextThreshold: a = 1,
      } = this.options;
      if (i) return;
      let o = this.getDiffStyle(),
        s = this.getHunkSeparatorType();
      this.approximateLayoutCheckpoints(t);
      let c = this.getLayoutCheckpointBeforeTop(e),
        l = c?.top ?? J(this.metrics, n) + this.cache.fileAnnotationHeight,
        u;
      return (
        W({
          diff: t,
          diffStyle: o,
          startingLine: c?.renderedLineIndex ?? 0,
          expandedHunks: r ? !0 : this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: a,
          callback: ({
            hunkIndex: t,
            hunk: n,
            collapsedBefore: r,
            collapsedAfter: i,
            deletionLine: a,
            additionLine: c,
          }) => {
            let d =
              o === `split`
                ? (c?.splitLineIndex ?? a?.splitLineIndex)
                : (c?.unifiedLineIndex ?? a?.unifiedLineIndex);
            if (d == null)
              throw Error(`VirtualizedFileDiff.getNumericScrollAnchor: missing line index data`);
            if (r > 0) {
              let e = H({ type: s, metrics: this.metrics, hunkIndex: t, hunkSpecs: n?.hunkSpecs });
              e != null && (l += e.totalHeight);
            }
            if (
              l >= e &&
              (a == null
                ? c != null && (u = { lineNumber: c.lineNumber, side: `additions`, top: l })
                : (u = { lineNumber: a.lineNumber, side: `deletions`, top: l }),
              u != null)
            )
              return !0;
            let f = this.getLineHeight(d, (c?.noEOFCR ?? !1) || (a?.noEOFCR ?? !1));
            if (((l += f), i > 0)) {
              let e = U({ type: s, metrics: this.metrics });
              e != null && (l += e.totalHeight);
            }
            return !1;
          },
        }),
        u
      );
    }
    getVirtualizedHeight() {
      return this.height;
    }
    getAdvancedStickySpecs(e) {
      let t = this.getLayoutDiff();
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
        (t || !q(this.getRenderedDiff(), this.getWorkingDiff()));
      (this.fileContainer != null &&
        this.isSimpleMode() &&
        this.getSimpleVirtualizer()?.disconnect(this.fileContainer),
        e ||
          (this.resetLayoutCache({ includeEstimatedHeights: !0 }),
          (this.pendingExpansions = void 0),
          (this.pendingHydratedDiff = void 0)),
        (this.pendingRender = void 0),
        (this.isSetup = !1),
        super.cleanUp(e),
        n && this.virtualizer.instanceChanged(this, !0));
    }
    expandHunk = (e, t, n) => {
      this.getInputDiff() != null &&
        (this.loadFilesIfNecessary(),
        this.isAdvancedMode()
          ? ((this.pendingExpansions ??= []),
            this.pendingExpansions.push({
              hunkIndex: e,
              direction: t,
              expansionLineCountOverride: n,
            }))
          : (this.hunksRenderer.expandHunk(e, t, n),
            this.resetLayoutCache({ includeEstimatedHeights: !0 }),
            this.computeApproximateSize()),
        (this.forceRenderOverride = !0),
        this.virtualizer.instanceChanged(this, !0));
    };
    async handleFilesLoaded(e, t) {
      if (this.getInputDiff() === e && e.isPartial) {
        if (this.isAdvancedMode()) {
          let n = Ve(`clone`, e, t);
          if ((await $e(() => this.primeHighlightCache(n)), this.getInputDiff() !== e)) return;
          this.pendingHydratedDiff = { expectedDiff: e, nextDiff: n, files: t };
        } else {
          if (
            (Ve(`merge`, e, t),
            this.setHydratedState(t),
            !this.installHydratedSessionDiff(e) &&
              (await $e(() => this.primeHighlightCache(e)), this.getInputDiff() !== e))
          )
            return;
          (this.resetLayoutCache({ includeEstimatedHeights: !0 }), this.computeApproximateSize());
        }
        ((this.forceRenderOverride = !0), this.virtualizer.instanceChanged(this, !0));
      }
    }
    loadFilesIfNecessary() {
      if (this.pendingHydratedDiff != null) {
        if (this.pendingHydratedDiff.expectedDiff === this.getInputDiff()) return;
        this.pendingHydratedDiff = void 0;
      }
      super.loadFilesIfNecessary();
    }
    isLineRenderable(e) {
      if (super.isLineRenderable(e)) return !0;
      let { pendingExpansions: t } = this,
        n = this.getRenderedDiff();
      if (t == null || t.length === 0 || n == null) return !1;
      let { expansionLineCount: r = 100, collapsedContextThreshold: i = 1 } = this.options,
        a = new Map(this.hunksRenderer.getExpandedHunksMap());
      for (let e of t) {
        let t = { ...(a.get(e.hunkIndex) ?? { fromStart: 0, fromEnd: 0 }) },
          n = e.expansionLineCountOverride ?? r;
        ((e.direction === `up` || e.direction === `both`) && (t.fromStart += n),
          (e.direction === `down` || e.direction === `both`) && (t.fromEnd += n),
          a.set(e.hunkIndex, t));
      }
      return le({ fileDiff: n, lineNumber: e, expandedHunks: a, collapsedContextThreshold: i });
    }
    invalidateEditSessionLayout() {
      (this.getSimpleVirtualizer()?.markDOMDirty(),
        this.resetLayoutCache({
          forceSimpleRecompute: this.isSimpleMode(),
          includeEstimatedHeights: !0,
          resetRenderRange: !1,
        }),
        this.isSimpleMode() || this.computeApproximateSize(!0),
        this.getSimpleVirtualizer()?.requestHeightReconcile(this));
    }
    escalateEditSessionRender() {
      (this.invalidateEditSessionLayout(),
        this.enabled &&
          this.getInputDiff() != null &&
          ((this.forceRenderOverride = !0), this.virtualizer.instanceChanged(this, !0)));
    }
    shouldSelfHealEditSession() {
      return !this.isAdvancedMode() && super.shouldSelfHealEditSession();
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
      if (
        !this.enabled ||
        (this.getInputDiff() == null && this.additionFile == null && this.deletionFile == null)
      )
        return;
      let e = this.getWorkingDiff(),
        t =
          e == null || this.options.collapsed === !0
            ? e
            : this.hunksRenderer.getDiffForNextRender(e);
      (this.isSimpleMode() && (this.pendingRender = void 0),
        (this.forceRenderOverride = !0),
        !(this.isSimpleMode() && this.requestRender()) &&
          this.virtualizer.instanceChanged(this, !q(this.getRenderedDiff(), t)));
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
    applyDocumentChange(e, t, n = !1) {
      let { renderRange: r } = this;
      (this.getAdvancedVirtualizer()?.capturePendingLayoutAnchor(),
        super.applyDocumentChange(e, t),
        this.getSimpleVirtualizer()?.markDOMDirty(),
        this.resetLayoutCache({
          forceSimpleRecompute: this.isSimpleMode(),
          includeEstimatedHeights: !0,
          resetRenderRange: !1,
        }));
      let i = this.getRenderedDiff();
      if (!this.isSimpleMode()) this.computeApproximateSize(!0);
      else if (n && r != null && i != null) {
        let e = this.virtualizer.getWindowSpecs(),
          t = this.computeRenderRangeFromWindow(i, this.top ?? 0, e);
        t.bufferAfter !== r.bufferAfter && this.updateBuffers(t);
      }
      ((this.forceRenderOverride = !0), this.virtualizer.instanceChanged(this, !0));
    }
    computeApproximateSize(e = !1, t = this.getLayoutDiff()) {
      let n = this.isResizeDebuggingEnabled();
      if (!e && !this.layoutDirty && !n) return;
      let r = this.height === 0;
      if (
        ((this.height = 0), (this.cache.checkpoints = []), (this.cache.totalLines = 0), t == null)
      ) {
        this.layoutDirty = !1;
        return;
      }
      this.applyGhostTextRows(t, this.editor?.__getGhostTextRows() ?? vt);
      let { disableFileHeader: i = !1, collapsed: a = !1 } = this.options;
      a
        ? ((this.height += ae(this.metrics, i)), (this.layoutDirty = !1))
        : ((this.height = this.getActiveEstimatedHeight(t) + this.cache.measuredHeightDeltaTotal),
          n && !r && this.validateComputedHeight(t),
          (this.layoutDirty = !1));
    }
    getLayoutDiff() {
      return this.pendingRender?.diff ?? this.getRenderedDiff();
    }
    getLayoutAnnotations() {
      let { pendingRender: e } = this;
      return e == null ? this.lineAnnotations : this.getAnnotationsForDiff(e.diff);
    }
    getActiveEstimatedHeight(e = this.getLayoutDiff()) {
      this.ensureEstimatedDiffHeights(e);
      let t =
        this.getDiffStyle() === `split`
          ? this.cache.estimatedSplitHeight
          : this.cache.estimatedUnifiedHeight;
      if (t == null)
        throw Error(`VirtualizedFileDiff.getActiveEstimatedHeight: missing estimated height`);
      return t;
    }
    ensureEstimatedDiffHeights(e = this.getLayoutDiff()) {
      if (e == null) {
        ((this.cache.estimatedSplitHeight = void 0), (this.cache.estimatedUnifiedHeight = void 0));
        return;
      }
      if (this.cache.estimatedSplitHeight != null && this.cache.estimatedUnifiedHeight != null)
        return;
      let {
          disableFileHeader: t = !1,
          expandUnchanged: n = !1,
          collapsedContextThreshold: r = 1,
        } = this.options,
        { splitHeight: i, unifiedHeight: a } = mt({
          fileDiff: e,
          metrics: this.metrics,
          disableFileHeader: t,
          hunkSeparators: this.getHunkSeparatorType(),
          expandUnchanged: n,
          expandedHunks: this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: r,
          canHydratePartialDiff: At(e, this.options.loadDiffFiles != null),
        });
      ((this.cache.estimatedSplitHeight = i), (this.cache.estimatedUnifiedHeight = a));
    }
    validateComputedHeight(e = this.getLayoutDiff()) {
      if (this.fileContainer == null || e == null) return;
      let t = this.fileContainer.getBoundingClientRect();
      t.height === this.height
        ? console.log(`VirtualizedFileDiff.computeApproximateSize: computed height IS CORRECT`)
        : console.log(`VirtualizedFileDiff.computeApproximateSize: computed height doesnt match`, {
            name: e.name,
            elementHeight: t.height,
            computedHeight: this.height,
          });
    }
    render({ fileContainer: e, fileDiff: t, forceRender: n = !1, lineAnnotations: r, ...i } = {}) {
      let a = be(i, `VirtualizedFileDiff.render`),
        o = a != null,
        s = a?.oldFile,
        c = a?.newFile,
        l = o && (!Mt(s, this.deletionFile) || !Mt(c, this.additionFile)),
        u = t ?? this.getInputDiff();
      t == null &&
        o &&
        (l || this.getInputDiff() == null) &&
        (u = X(a.oldFile, a.newFile, this.options.parseDiffOptions));
      let { forceRenderOverride: d, isSetup: f } = this;
      this.forceRenderOverride = void 0;
      let p = u != null && !q(this.getInputDiff(), u),
        m = p || l;
      if (((e = this.getOrCreateFileContainer(e)), u == null))
        return (
          console.error(
            `VirtualizedFileDiff.render: attempting to virtually render when we dont have the correct data`,
          ),
          !1
        );
      p && this.updateInputDiff(u, r);
      let {
        pendingRenderDiff: h,
        layoutDiffChanged: g,
        renderedDiffChanged: _,
        annotationsChanged: v,
      } = this.pendingRender != null &&
      this.pendingRender.workingDiff === (this.getWorkingDiff(u) ?? u)
        ? {
            pendingRenderDiff: this.pendingRender.diff,
            layoutDiffChanged: !1,
            renderedDiffChanged: !1,
            annotationsChanged: this.syncLineAnnotations(r),
          }
        : this.updatePendingRender(u, r);
      if ((g && this.resetLayoutCache({ includeEstimatedHeights: !0 }), f))
        ((this.top ??= this.getVirtualizedTop()),
          this.layoutDirty &&
            this.isSimpleMode() &&
            (this.getSimpleVirtualizer()?.markDOMDirty(), this.computeApproximateSize(!1, h)));
      else {
        this.computeApproximateSize(!1, h);
        let t = this.getSimpleVirtualizer();
        if (((this.top ??= this.getVirtualizedTop()), this.isAdvancedMode())) this.isVisible = !0;
        else {
          if (t == null)
            throw Error(`VirtualizedFileDiff.render: simple virtualizer is not available`);
          (t.connect(e, this), (this.isVisible = t.isInstanceVisible(this.top ?? 0, this.height)));
        }
        this.isSetup = !0;
      }
      if (!this.isVisible && this.isSimpleMode() && (!m || !f))
        return (
          a != null && ((this.deletionFile = s), (this.additionFile = c)),
          p && this.clearReusableHeader(),
          this.renderPlaceholder(this.height)
        );
      let y = this.virtualizer.getWindowSpecs(),
        b = this.top ?? 0,
        x = this.computeRenderRangeFromWindow(h, b, y);
      return super.render({
        fileDiff: u,
        fileContainer: e,
        renderRange: x,
        lineAnnotations: r,
        forceRender: (d ?? n) || v || _ || p,
        ...a,
        ...i,
      });
    }
    finalizeRender() {
      if (!q(this.getRenderedDiff(), this.pendingRender?.diff))
        throw Error(
          `VirtualizedFileDiff.render: rendered a different diff than its prepared layout`,
        );
      ((this.pendingRender = void 0),
        this.isSimpleMode() && this.getSimpleVirtualizer()?.requestHeightReconcile(this));
    }
    updatePendingRender(e, t) {
      let n = this.getWorkingDiff(e) ?? e,
        r = this.getRenderedDiff(),
        { pendingRender: i } = this,
        a = i?.diff ?? r,
        o = this.options.collapsed === !0 ? n : this.hunksRenderer.getDiffForNextRender(n);
      return (
        (this.pendingRender = { workingDiff: n, diff: o }),
        {
          pendingRenderDiff: o,
          annotationsChanged: this.syncLineAnnotations(t),
          layoutDiffChanged: !q(a, o),
          renderedDiffChanged: !q(r, o),
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
    getDiffStyle() {
      return this.options.diffStyle ?? `split`;
    }
    getHunkSeparatorType() {
      return jt(this.options.hunkSeparators);
    }
    approximateLayoutCheckpoints(e) {
      if (
        (!this.layoutDirty && this.cache.checkpoints.length > 0) ||
        e.hunks.length === 0 ||
        this.options.collapsed === !0
      )
        return;
      let {
          disableFileHeader: t = !1,
          expandUnchanged: n = !1,
          collapsedContextThreshold: r = 1,
        } = this.options,
        i = e.hunks.length - 1,
        a = At(e, this.options.loadDiffFiles != null),
        o = this.getDiffStyle(),
        s = this.getHunkSeparatorType(),
        c = n ? !0 : this.hunksRenderer.getExpandedHunksMap(),
        l = St(this.cache.heightDeltas),
        u = J(this.metrics, t) + this.cache.fileAnnotationHeight,
        d = 0,
        f = ({
          rowCount: e,
          startLineIndex: t,
          preSeparatorHeight: n = 0,
          postSeparatorHeight: r = 0,
          metadataOffsets: i = [],
        }) => {
          if (e <= 0) return;
          let a = d,
            o = d + e,
            s = Tt(a);
          for (; s < o;) {
            let e = s - a,
              r =
                u +
                (e > 0 ? n : 0) +
                e * this.metrics.lineHeight +
                Et(i, e) * this.metrics.lineHeight +
                Ct(l, t, t + e);
            (this.cache.checkpoints.push({ renderedLineIndex: s, lineIndex: t + e, top: r }),
              (s += _t));
          }
          ((u +=
            n +
            e * this.metrics.lineHeight +
            i.length * this.metrics.lineHeight +
            Ct(l, t, t + e) +
            r),
            (d = o));
        };
      for (let t = 0; t < e.hunks.length; t++) {
        let n = e.hunks[t];
        if (n == null)
          throw Error(`VirtualizedFileDiff.approximateLayoutCheckpoints: invalid hunk index`);
        let l = K({
            isPartial: e.isPartial,
            rangeSize: n.collapsedBefore,
            expandedHunks: c,
            hunkIndex: t,
            collapsedContextThreshold: r,
          }),
          u =
            l.collapsedLines > 0
              ? (H({ type: s, metrics: this.metrics, hunkIndex: t, hunkSpecs: n.hunkSpecs })
                  ?.totalHeight ?? 0)
              : 0;
        f({
          rowCount: l.fromStart,
          startLineIndex: (o === `split` ? n.splitLineStart : n.unifiedLineStart) - l.rangeSize,
        });
        let d = u;
        (f({
          rowCount: l.fromEnd,
          startLineIndex: (o === `split` ? n.splitLineStart : n.unifiedLineStart) - l.fromEnd,
          preSeparatorHeight: d,
        }),
          l.fromEnd > 0 && (d = 0));
        let p =
            t === i
              ? pe({
                  fileDiff: e,
                  hunkIndex: t,
                  expandedHunks: c,
                  collapsedContextThreshold: r,
                  errorPrefix: `VirtualizedFileDiff`,
                })
              : void 0,
          m =
            (p != null && p.collapsedLines > 0) || (t === i && a)
              ? (U({ type: s, metrics: this.metrics })?.totalHeight ?? 0)
              : 0,
          h = p == null ? 0 : p.fromStart + p.fromEnd,
          g = o === `split` ? n.splitLineCount : n.unifiedLineCount,
          _ = o === `split` ? n.splitLineStart : n.unifiedLineStart;
        (f({
          rowCount: g,
          startLineIndex: _,
          preSeparatorHeight: d,
          postSeparatorHeight: h === 0 ? m : 0,
          metadataOffsets: Dt({ diffStyle: o, hunk: n, rowCount: g }),
        }),
          p != null && h > 0 && f({ rowCount: h, startLineIndex: _ + g, postSeparatorHeight: m }));
      }
      this.cache.totalLines = d;
    }
    getLayoutCheckpointBeforeLineIndex(e) {
      if (e <= 0 || this.cache.checkpoints.length === 0) return;
      let t = 0,
        n = this.cache.checkpoints.length - 1,
        r;
      for (; t <= n;) {
        let i = (t + n) >> 1,
          a = this.cache.checkpoints[i];
        if (a == null) throw Error(`VirtualizedFileDiff: invalid checkpoint index`);
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
        if (a == null) throw Error(`VirtualizedFileDiff: invalid checkpoint index`);
        a.top <= e ? ((i = t), (n = t + 1)) : (r = t - 1);
      }
      if (t == null) return i >= 0 ? this.cache.checkpoints[i] : void 0;
      for (let e = i; e >= 0; e--) {
        let n = this.cache.checkpoints[e];
        if (n == null) throw Error(`VirtualizedFileDiff: invalid checkpoint index`);
        if (n.renderedLineIndex % t === 0) return n;
      }
    }
    getExpandedLineCount(e, t) {
      let n = 0;
      if (e.isPartial) {
        for (let r of e.hunks) n += t === `split` ? r.splitLineCount : r.unifiedLineCount;
        return n;
      }
      let { expandUnchanged: r = !1, collapsedContextThreshold: i = 1 } = this.options,
        a = r ? !0 : this.hunksRenderer.getExpandedHunksMap();
      for (let [r, o] of e.hunks.entries()) {
        let s = t === `split` ? o.splitLineCount : o.unifiedLineCount;
        n += s;
        let c = Math.max(o.collapsedBefore, 0),
          {
            fromStart: l,
            fromEnd: u,
            renderAll: d,
          } = K({
            isPartial: e.isPartial,
            rangeSize: c,
            expandedHunks: a,
            hunkIndex: r,
            collapsedContextThreshold: i,
          });
        c > 0 && (n += d ? c : l + u);
      }
      let o = pe({
        fileDiff: e,
        hunkIndex: e.hunks.length - 1,
        expandedHunks: a,
        collapsedContextThreshold: i,
        errorPrefix: `VirtualizedFileDiff`,
      });
      return (o != null && (n += o.fromStart + o.fromEnd), n);
    }
    getLayoutLineCount(e, t) {
      let n = this.getExpandedLineCount(e, t),
        r = t === `split` ? e.splitLineCount : e.unifiedLineCount;
      return Math.max(n, r, e.additionLines.length, e.deletionLines.length, this.cache.totalLines);
    }
    computeRenderRangeFromWindow(e, t, { top: n, bottom: r }) {
      let {
          disableFileHeader: i = !1,
          expandUnchanged: a = !1,
          collapsedContextThreshold: o = 1,
        } = this.options,
        { hunkLineCount: s, lineHeight: c } = this.metrics,
        l = this.getDiffStyle(),
        u = this.getHunkSeparatorType(),
        d = At(e, this.options.loadDiffFiles != null),
        f = this.height,
        p = this.getLayoutLineCount(e, l),
        m = J(this.metrics, i),
        h = e.hunks.length > 0 ? te(this.metrics) : 0,
        { fileAnnotationHeight: g } = this.cache,
        _ = m + g,
        v = Math.max(0, f - m - g - h),
        y = this.hasFileAnnotations(e),
        b = t + m,
        x = g > 0 && y && b < r && b + g > n;
      if (t < n - f || t > r)
        return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: f - m - h };
      if (p <= s || e.hunks.length === 0)
        return { startingLine: 0, totalLines: s, bufferBefore: 0, bufferAfter: 0 };
      (this.approximateLayoutCheckpoints(e), (p = this.getLayoutLineCount(e, l)));
      let S = Math.ceil(Math.max(r - n, 0) / c),
        C = Math.ceil(S / s) * s + s,
        w = C / s,
        T = w,
        E = [],
        D = (n + r) / 2,
        O = this.getLayoutCheckpointBeforeTop(Math.max(0, n - t - C * c * 2), s),
        k = t + (O?.top ?? _),
        A = O?.renderedLineIndex ?? 0,
        j,
        M,
        N;
      if (
        (W({
          diff: e,
          diffStyle: l,
          startingLine: O?.renderedLineIndex ?? 0,
          expandedHunks: a ? !0 : this.hunksRenderer.getExpandedHunksMap(),
          collapsedContextThreshold: o,
          callback: ({
            hunkIndex: i,
            hunk: a,
            collapsedBefore: o,
            collapsedAfter: c,
            deletionLine: f,
            additionLine: p,
          }) => {
            let m = p == null ? f.splitLineIndex : p.splitLineIndex,
              h = p == null ? f.unifiedLineIndex : p.unifiedLineIndex,
              g = (p?.noEOFCR ?? !1) || (f?.noEOFCR ?? !1),
              v =
                i === e.hunks.length - 1 &&
                a != null &&
                (l === `split`
                  ? m === a.splitLineStart + a.splitLineCount - 1
                  : h === a.unifiedLineStart + a.unifiedLineCount - 1),
              y =
                (o > 0
                  ? H({ type: u, metrics: this.metrics, hunkIndex: i, hunkSpecs: a?.hunkSpecs })
                  : void 0
                )?.totalHeight ?? 0;
            k += y;
            let b = A % s === 0,
              x = Math.floor(A / s);
            if (b && ((E[x] = k - (t + _ + y)), N != null)) {
              if (N <= 0) return !0;
              N--;
            }
            let S = this.getLineHeight(l === `split` ? m : h, g);
            if (
              (k > n - S && k < r && (j ??= x),
              M == null && k + S > D && (M = x),
              N == null && k >= r && b && (N = T),
              A++,
              (k += S),
              c > 0 || (v && d))
            ) {
              let e = U({ type: u, metrics: this.metrics });
              e != null &&
                (k < r && k + e.totalHeight > n && (j ??= x),
                M == null && k + e.totalHeight > D && (M = x),
                (k += e.totalHeight));
            }
            return !1;
          },
        }),
        j == null)
      ) {
        if (x) ((j = 0), (M = 0));
        else return { startingLine: 0, totalLines: 0, bufferBefore: 0, bufferAfter: f - m - h };
      }
      M ??= j;
      let P = Math.round(M - w / 2),
        F = Math.max(0, Math.ceil(p / s) - w),
        I = Math.max(0, Math.min(P, F)),
        L = I * s,
        R = P < 0 ? C + P * s : C,
        z = E[I] ?? 0,
        B = L === 0 ? 0 : g + z,
        V = I + R / s,
        ee = V < E.length ? v - E[V] : v - (k - t - _);
      return { startingLine: L, totalLines: R, bufferBefore: B, bufferAfter: Math.max(0, ee) };
    }
  };
function xt(e) {
  let t;
  for (let n of e) {
    if (n == null) continue;
    let e = n.children[1];
    if (e instanceof HTMLElement)
      for (let n of e.children)
        n instanceof HTMLElement &&
          n.dataset.lineAnnotation === `-1,-1` &&
          (t = Math.max(t ?? 0, n.getBoundingClientRect().height));
  }
  return t;
}
function St(e) {
  let t = Array.from(e).sort((e, t) => e[0] - t[0]),
    n = [],
    r = [0],
    i = 0;
  for (let [e, a] of t) (n.push(e), (i += a), r.push(i));
  return { lineIndexes: n, prefixTotals: r };
}
function Ct({ lineIndexes: e, prefixTotals: t }, n, r) {
  if (n >= r || e.length === 0) return 0;
  let i = wt(e, n);
  return (t[wt(e, r)] ?? 0) - (t[i] ?? 0);
}
function wt(e, t) {
  let n = 0,
    r = e.length;
  for (; n < r;) {
    let i = (n + r) >> 1,
      a = e[i];
    if (a == null) throw Error(`VirtualizedFileDiff: invalid prefix index`);
    a < t ? (n = i + 1) : (r = i);
  }
  return n;
}
function Tt(e) {
  return Math.ceil(e / _t) * _t;
}
function Et(e, t) {
  let n = 0;
  for (let r of e) r < t && n++;
  return n;
}
function Dt({ diffStyle: e, hunk: t, rowCount: n }) {
  if (n <= 0 || (!t.noEOFCRAdditions && !t.noEOFCRDeletions)) return [];
  let r = t.hunkContent.at(-1);
  if (r == null) return [];
  if (r.type === `context`) return [n - 1];
  let i = Math.max(r.deletions, r.additions),
    a = r.deletions + r.additions;
  if (e === `split`) return i > 0 && (t.noEOFCRAdditions || t.noEOFCRDeletions) ? [n - 1] : [];
  let o = [],
    s = n - a;
  return (
    r.deletions > 0 && t.noEOFCRDeletions && o.push(s + r.deletions - 1),
    r.additions > 0 && t.noEOFCRAdditions && o.push(n - 1),
    o
  );
}
function Ot(e, t) {
  return (
    (e.diffStyle ?? `split`) !== (t.diffStyle ?? `split`) ||
    (e.overflow ?? `scroll`) !== (t.overflow ?? `scroll`) ||
    (e.collapsed ?? !1) !== (t.collapsed ?? !1) ||
    (e.disableLineNumbers ?? !1) !== (t.disableLineNumbers ?? !1) ||
    (e.disableFileHeader ?? !1) !== (t.disableFileHeader ?? !1) ||
    (e.diffIndicators ?? `bars`) !== (t.diffIndicators ?? `bars`) ||
    (e.hunkSeparators ?? `line-info`) !== (t.hunkSeparators ?? `line-info`) ||
    !!e.loadDiffFiles != !!t.loadDiffFiles ||
    (e.expandUnchanged ?? !1) !== (t.expandUnchanged ?? !1) ||
    (e.collapsedContextThreshold ?? 1) !== (t.collapsedContextThreshold ?? 1) ||
    e.unsafeCSS !== t.unsafeCSS
  );
}
function kt(e, t) {
  return (
    (e.disableFileHeader ?? !1) !== (t.disableFileHeader ?? !1) ||
    (e.hunkSeparators ?? `line-info`) !== (t.hunkSeparators ?? `line-info`) ||
    !!e.loadDiffFiles != !!t.loadDiffFiles ||
    (e.expandUnchanged ?? !1) !== (t.expandUnchanged ?? !1) ||
    (e.collapsedContextThreshold ?? 1) !== (t.collapsedContextThreshold ?? 1)
  );
}
function At(e, t) {
  return e.isPartial && t && (e.type === `change` || e.type === `rename-changed`);
}
function jt(e) {
  return typeof e == `function` ? `custom` : (e ?? `line-info`);
}
function Mt(e, t) {
  return e == null || t == null ? e == null && t == null : D(e, t);
}
function Nt(e, t) {
  let [n, r] = e.split(`,`).map(Number);
  return t === `split` ? r : n;
}
function Pt({ hunkIndex: e, lineIndex: t, conflictIndex: n }) {
  return `merge-conflict-action-${e}-${t}-${n}`;
}
function Ft(e, t) {
  let n = t.hunks[e.hunkIndex];
  if (n != null) return { hunkIndex: e.hunkIndex, lineIndex: It(n, e.startContentIndex) };
}
function It(e, t) {
  let n = e.unifiedLineStart;
  for (let r = 0; r < t; r++) {
    let t = e.hunkContent[r];
    n += t.type === `context` ? t.lines : t.deletions + t.additions;
  }
  return n;
}
function Lt({
  fileDiff: e,
  actions: t,
  renderCustomHeader: n,
  renderHeaderPrefix: r,
  renderHeaderFilenameSuffix: i,
  renderHeaderMetadata: a,
  renderAnnotation: o,
  renderGutterUtility: s,
  renderMergeConflictUtility: c,
  lineAnnotations: l,
  getHoveredLine: u,
  getInstance: d,
  getAnnotationSlotName: f = G,
}) {
  let p = n?.(e),
    m = r?.(e),
    h = i?.(e),
    g = a?.(e);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      p == null
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              m != null && (0, Z.jsx)(`div`, { slot: `header-prefix`, children: m }),
              h != null && (0, Z.jsx)(`div`, { slot: `header-filename-suffix`, children: h }),
              g != null && (0, Z.jsx)(`div`, { slot: `header-metadata`, children: g }),
            ],
          })
        : (0, Z.jsx)(`div`, { slot: De, children: p }),
      o != null && l?.map((t, n) => (0, Z.jsx)(`div`, { slot: f(t), children: o(t, e) }, n)),
      t != null &&
        c != null &&
        d != null &&
        t.map((t) => {
          if (t == null) return;
          let n = Rt(t, e);
          return (0, Z.jsx)(`div`, { slot: n, style: E, children: c(t, d) }, n);
        }),
      s != null && (0, Z.jsx)(`div`, { slot: `gutter-utility-slot`, style: y, children: s(u) }),
    ],
  });
}
function Rt(e, t) {
  let n = Ft(e, t);
  return n == null
    ? void 0
    : Pt({ hunkIndex: n.hunkIndex, lineIndex: n.lineIndex, conflictIndex: e.conflictIndex });
}
var $ = e(t(), 1),
  zt = typeof window > `u` ? $.useEffect : $.useLayoutEffect;
function Bt({
  fileDiff: e,
  oldFile: t,
  newFile: n,
  options: r,
  editorOptions: a,
  editStateKey: o,
  lineAnnotations: s,
  selectedLines: c,
  prerenderedHTML: l,
  metrics: u,
  hasGutterRenderUtility: d,
  hasCustomHeader: f,
  disableWorkerPool: p,
  edit: m,
  onEditChange: h,
  onEditComplete: g,
}) {
  let _ = C(),
    v = c !== void 0,
    y = (0, $.useContext)(k),
    x = b(),
    [S, w] = (0, $.useState)(),
    T = A((e) => h?.(e)),
    E = h == null ? void 0 : T,
    D = (0, $.useRef)(null),
    M = A((r) => {
      let i = g?.(r) ?? `reject`;
      return (
        i === `accept` &&
          (D.current = {
            fileDiff: { installed: r.fileDiff, stale: r.originalFileDiff },
            filePair:
              e == null
                ? {
                    fileDiff: r.fileDiff,
                    installed: { oldFile: r.oldFile, newFile: r.newFile },
                    stale: { oldFile: t ?? null, newFile: n ?? null },
                  }
                : null,
            annotations: { installed: r.lineAnnotations, stale: r.originalLineAnnotations },
          }),
        i
      );
    }),
    N = g == null ? void 0 : M,
    P = Vt({
      acceptedCache: D,
      fileDiff: e,
      newFile: n,
      oldFile: t,
      parseDiffOptions: r?.parseDiffOptions,
    }),
    F = (0, $.useRef)(null),
    I = O(),
    L = Ut(D, P, s),
    R = j(F, L) ?? { fileDiff: P, lineAnnotations: s ?? Ae },
    z = (0, $.useRef)(null),
    B = (0, $.useRef)(null),
    V = A(() => {
      if (x == null) throw Error(`FileDiff: EditContext is not attached`);
      return x(`file-diff`, a ?? {}, o);
    }),
    ee = A((e) => {
      if (e != null) {
        if (F.current != null)
          throw Error(
            `useFileDiffInstance: An instance should not already exist when a node is created`,
          );
        (_ == null
          ? (F.current = new st(
              Kt({
                controlledSelection: v,
                hasCustomHeader: f,
                hasGutterRenderUtility: d,
                onEditChange: E,
                onEditComplete: N,
                options: r,
              }),
              p ? void 0 : y,
              I,
            ))
          : (F.current = new bt(
              Kt({
                controlledSelection: v,
                hasCustomHeader: f,
                hasGutterRenderUtility: d,
                onEditChange: E,
                onEditComplete: N,
                options: r,
              }),
              _,
              u,
              p ? void 0 : y,
              I,
            )),
          F.current.hydrate({
            fileDiff: P,
            fileContainer: e,
            lineAnnotations: s,
            prerenderedHTML: l,
          }));
      } else {
        if (F.current == null)
          throw Error(`useFileDiffInstance: A FileDiff instance should exist when unmounting`);
        ((B.current = null), F.current.cleanUp(), (F.current = null), (z.current = null));
      }
    });
  zt(() => {
    let { current: e } = F;
    if (e == null) return;
    let t = Kt({
        controlledSelection: v,
        hasCustomHeader: f,
        hasGutterRenderUtility: d,
        onEditChange: E,
        onEditComplete: N,
        options: r,
      }),
      n = !i(e.options, t);
    if ((e.setOptions(t), !m && ((B.current = null), z.current != null))) {
      let { current: e } = z;
      ((z.current = null), e());
    }
    let a = Gt(P, s, D);
    if (
      (e.render({ forceRender: n, fileDiff: a.fileDiff, lineAnnotations: a.lineAnnotations }),
      c !== void 0 && e.setSelectedLines(c),
      !m || z.current != null)
    )
      return;
    if (x == null) throw Error(`FileDiff: EditContext is not attached`);
    let o = () => {
      F.current === e &&
        z.current == null &&
        e.__canAttachEditor() &&
        ((z.current = qt(e, V)), I());
    };
    if (e.__canAttachEditor()) {
      ((B.current = null), o());
      return;
    }
    let l = e.__prepareForEditing();
    if (l == null) {
      B.current = null;
      return;
    }
    if (B.current?.promise === l) return;
    let u = { promise: l };
    ((B.current = u),
      l
        .then(() => {
          B.current === u && (o(), (B.current = null));
        })
        .catch((e) => {
          B.current === u && ((B.current = null), w(e));
        }));
  });
  let te = (0, $.useCallback)(() => F.current?.getHoveredLine(), []),
    ne = (0, $.useCallback)((e) => F.current?.getAnnotationSlotName(e) ?? G(e), []);
  if (S != null) throw S;
  return { ...R, ref: ee, getHoveredLine: te, getAnnotationSlotName: ne };
}
function Vt({ acceptedCache: e, fileDiff: t, newFile: n, oldFile: r, parseDiffOptions: i }) {
  return (0, $.useMemo)(() => {
    if (t != null) return t;
    let { current: a } = e,
      o = a?.filePair;
    if (a != null && o != null) {
      if (Ht(r, n, o.stale) || Ht(r, n, o.installed)) return o.fileDiff;
      a.filePair = null;
    }
    return X(r ?? null, n ?? null, i);
  }, [e, t, r, n, i]);
}
function Ht(e, t, n) {
  return d(e ?? void 0, n.oldFile ?? void 0) && d(t ?? void 0, n.newFile ?? void 0);
}
function Ut(e, t, n) {
  "use no memo";
  return Wt(t, n, e.current);
}
function Wt(e, t, n) {
  return {
    fileDiff: n?.fileDiff != null && q(e, n.fileDiff.stale) ? n.fileDiff.installed : e,
    lineAnnotations:
      n?.annotations != null && t === n.annotations.stale ? n.annotations.installed : t,
  };
}
function Gt(e, t, n) {
  let { current: r } = n,
    i = Wt(e, t, r);
  return (
    r == null ||
      (r.fileDiff != null && !q(e, r.fileDiff.stale) && (r.fileDiff = null),
      t !== r.annotations?.stale && (r.annotations = null),
      r.fileDiff == null && r.annotations == null && r.filePair == null && (n.current = null)),
    i
  );
}
function Kt({
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
    renderCustomHeader: n ? M : e?.renderCustomHeader,
    renderGutterUtility: r ? M : e?.renderGutterUtility,
    onEditChange: i,
    onEditComplete: a,
  };
}
function qt(e, t) {
  let n = t();
  try {
    return n.edit(e);
  } catch (e) {
    throw (n.cleanUp(), e);
  }
}
function Jt({
  fileDiff: e,
  options: t,
  editorOptions: n,
  editStateKey: r,
  metrics: i,
  lineAnnotations: a,
  selectedLines: o,
  className: s,
  style: c,
  prerenderedHTML: l,
  renderAnnotation: u,
  renderCustomHeader: d,
  renderHeaderPrefix: f,
  renderHeaderFilenameSuffix: p,
  renderHeaderMetadata: m,
  renderGutterUtility: h,
  disableWorkerPool: g = !1,
  edit: _ = !1,
  onEditChange: y,
  onEditComplete: b,
}) {
  let {
      ref: x,
      getHoveredLine: S,
      getAnnotationSlotName: C,
      fileDiff: w,
      lineAnnotations: T,
    } = Bt({
      fileDiff: e,
      options: t,
      editorOptions: n,
      editStateKey: r,
      metrics: i,
      lineAnnotations: a,
      selectedLines: o,
      prerenderedHTML: l,
      hasGutterRenderUtility: h != null,
      hasCustomHeader: d != null,
      disableWorkerPool: g,
      edit: _,
      onEditChange: y,
      onEditComplete: b,
    }),
    E = Lt({
      fileDiff: w,
      renderCustomHeader: d,
      renderHeaderPrefix: f,
      renderHeaderFilenameSuffix: p,
      renderHeaderMetadata: m,
      renderAnnotation: u,
      renderGutterUtility: h,
      lineAnnotations: T,
      getHoveredLine: S,
      getAnnotationSlotName: C,
    });
  return (0, Z.jsx)(we, { ref: x, className: s, style: c, children: v(E, l) });
}
export { Lt as n, bt as r, Jt as t };
//# sourceMappingURL=FileDiff-cZVAF0Ut.js.map
