import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { t as n } from "./jsx-runtime-BQExFN_X.js";
import { N as r, P as i, ct as a } from "./getDiffFileInput-DNKgimbU.js";
import { c as o, i as s, l as c } from "./appendItems-C5MDJzmY.js";
import { Bc as l, Jc as u, Pc as d, qc as f } from "./main-BZa0O6xN.js";
var p = new Set(),
  m = null;
function h(e) {
  (p.add(e), (m ??= requestAnimationFrame(_)));
}
function g(e) {
  p.delete(e) && p.size === 0 && m != null && (cancelAnimationFrame(m), (m = null));
}
function _(e) {
  let t = new Set(p);
  p.clear();
  for (let n of t)
    try {
      n(e);
    } catch (e) {
      console.error(e);
    }
  m = p.size > 0 ? requestAnimationFrame(_) : null;
}
function v(e, t, n) {
  if (e === t || e == null || t == null) return e === t;
  let r = new Set(n),
    i = Object.keys(e),
    a = new Set(Object.keys(t));
  for (let n of i) if ((a.delete(n), !r.has(n) && (!(n in t) || e[n] !== t[n]))) return !1;
  for (let e of Array.from(a)) if (!r.has(e)) return !1;
  return !0;
}
function y(e, t) {
  let n = e?.theme ?? d,
    r = t?.theme ?? d,
    i = b(e),
    o = b(t);
  return a(n, r) && v(e, t, [`theme`, `parseDiffOptions`]) && v(i, o);
}
function b(e) {
  if (e != null && `parseDiffOptions` in e) return e.parseDiffOptions;
}
function x(e, t) {
  return (
    e?.start === t?.start && e?.end === t?.end && e?.side === t?.side && e?.endSide === t?.endSide
  );
}
var S = e(t(), 1),
  C = e(n(), 1);
function w({
  scrollTop: e,
  scrollHeight: t,
  height: n,
  fitPerfectly: r = !1,
  fitPerfectlyOverscroll: i = 0,
  overscrollSize: a,
}) {
  let o = n + a * 2,
    s = r ? n + i * 2 : o;
  if (((t = Math.max(t, s)), o >= t || r)) {
    let n = Math.max(e - i, 0),
      r = Math.min(e + s, t);
    return { top: n, bottom: Math.max(r, n) };
  }
  let c = e + n / 2 - o / 2,
    l = c + o;
  return (
    c < 0 && (c = 0),
    l > t && (l = t),
    (c = Math.floor(Math.max(c, 0))),
    { top: c, bottom: Math.ceil(Math.max(Math.min(l, t), c)) }
  );
}
function ee() {
  return o({
    tagName: `button`,
    properties: { "data-utility-button": ``, type: `button` },
    children: [c({ name: `diffs-icon-plus`, properties: { "data-icon": `` } })],
  });
}
function te(e, t) {
  return e.lineNumber === t.lineNumber && e.side === t.side;
}
function T(e) {
  for (let t of e)
    if (
      t instanceof HTMLElement &&
      (t.hasAttribute(`data-utility-button`) ||
        t.hasAttribute(`data-gutter-utility-slot`) ||
        t.getAttribute(`slot`) === `gutter-utility-slot` ||
        t.getAttribute(`name`) === `gutter-utility-slot`)
    )
      return !0;
  return !1;
}
var ne = class {
  mode;
  options;
  hoveredLine;
  hoveredToken;
  pre;
  gutterUtilityLine;
  gutterUtilityContainer;
  gutterUtilityButton;
  gutterUtilitySlot;
  interactiveLinesAttr = !1;
  interactiveLineNumbersAttr = !1;
  hasPointerListeners = !1;
  hasDocumentPointerListeners = !1;
  selectedRange = null;
  selectedRangeHighlightSide;
  selectedRangeLineNumberOnly = !1;
  editorActiveLine = null;
  editorActiveLineSide;
  editorLineNumberOnly = !1;
  proposedSelectedRange;
  renderedSelectedLinesState;
  renderedEditorActiveLineState;
  selectionAnchor;
  pointerSession = { mode: `idle` };
  constructor(e, t) {
    ((this.mode = e), (this.options = t));
  }
  setOptions(e) {
    this.options = e;
  }
  cleanUp() {
    (this.pre?.removeEventListener(`click`, this.handlePointerClick),
      this.pre?.removeEventListener(`pointerdown`, this.handlePointerDown),
      this.pre?.removeEventListener(`pointermove`, this.handlePointerMove),
      this.pre?.removeEventListener(`pointerleave`, this.handlePointerLeave),
      this.pre?.removeAttribute(`data-interactive-lines`),
      this.pre?.removeAttribute(`data-interactive-line-numbers`),
      (this.pre = void 0),
      this.gutterUtilityContainer?.remove(),
      (this.gutterUtilityLine = void 0),
      (this.gutterUtilityContainer = void 0),
      (this.gutterUtilityButton = void 0),
      (this.gutterUtilitySlot = void 0),
      this.clearHoveredLine(),
      this.clearHoveredToken(),
      this.detachDocumentPointerListeners(),
      this.clearPointerSession(),
      g(this.renderSelection),
      (this.interactiveLinesAttr = !1),
      (this.interactiveLineNumbersAttr = !1),
      (this.hasPointerListeners = !1),
      this.setSelectionDirty());
  }
  setup(e) {
    this.setSelectionDirty();
    let { usesCustomGutterUtility: t = !1, enableGutterUtility: n = !1 } = this.options;
    (this.pre !== e && (this.cleanUp(), (this.pre = e)),
      n
        ? this.ensureGutterUtilityNode(t)
        : this.gutterUtilityContainer != null &&
          (this.gutterUtilityContainer.remove(),
          (this.gutterUtilityLine = void 0),
          (this.gutterUtilityContainer = void 0),
          (this.gutterUtilityButton = void 0),
          (this.gutterUtilitySlot = void 0),
          this.pointerSession.mode === `gutterSelecting` &&
            (this.clearPointerSession(), this.detachDocumentPointerListeners())),
      this.syncPointerListeners(e),
      this.updateInteractiveLineAttributes(),
      this.renderSelection(),
      this.placeUtility());
  }
  setSelectionDirty() {
    ((this.renderedSelectedLinesState = void 0), (this.renderedEditorActiveLineState = void 0));
  }
  isSelectionDirty() {
    return (
      this.renderedSelectedLinesState === void 0 || this.renderedEditorActiveLineState === void 0
    );
  }
  setSelection(e, t) {
    let n = !(e === this.selectedRange || x(e ?? void 0, this.selectedRange ?? void 0)),
      r = t?.lineNumberOnly ?? !1,
      i =
        t?.activeLineSide !== this.selectedRangeHighlightSide ||
        r !== this.selectedRangeLineNumberOnly;
    (this.isSelectionDirty() || n || i) &&
      ((this.proposedSelectedRange = void 0),
      (this.selectedRange = e),
      (this.selectedRangeHighlightSide = t?.activeLineSide),
      (this.selectedRangeLineNumberOnly = r),
      this.renderSelection(),
      this.placeUtility(),
      n && t?.notify !== !1 && this.notifySelectionCommitted(e));
  }
  setEditorActiveLine(e, { lineNumberOnly: t = !1, side: n } = {}) {
    let r = e !== this.editorActiveLine,
      i = n !== this.editorActiveLineSide || t !== this.editorLineNumberOnly;
    (this.isSelectionDirty() || r || i) &&
      ((this.editorActiveLine = e),
      (this.editorActiveLineSide = n),
      (this.editorLineNumberOnly = t),
      this.renderSelection());
  }
  getSelection() {
    return this.selectedRange;
  }
  getHoveredLine = () => {
    let e = this.gutterUtilityLine ?? this.hoveredLine;
    if (e != null) {
      if (this.mode === `diff` && e.type === `diff-line`)
        return { lineNumber: e.lineNumber, side: e.annotationSide };
      if (this.mode === `file` && e.type === `line`) return { lineNumber: e.lineNumber };
    }
  };
  handlePointerClick = (e) => {
    let {
      onHunkExpand: t,
      onLineClick: n,
      onLineNumberClick: r,
      onTokenClick: i,
      onMergeConflictActionClick: a,
    } = this.options;
    (t == null && n == null && r == null && a == null && i == null) ||
      (this.options.onGutterUtilityClick != null && T(e.composedPath())) ||
      (L(this.options.__debugPointerEvents, `click`, `FileDiff.DEBUG.handlePointerClick:`, e),
      this.handlePointerEvent({ eventType: `click`, event: e }));
  };
  handlePointerMove = (e) => {
    if (e.pointerType !== `mouse`) return;
    let {
      lineHoverHighlight: t = `disabled`,
      onLineEnter: n,
      onLineLeave: r,
      onTokenEnter: i,
      onTokenLeave: a,
      enableGutterUtility: o = !1,
    } = this.options;
    (t !== `disabled` || o || n != null || r != null || i != null || a != null) &&
      (L(this.options.__debugPointerEvents, `move`, `FileDiff.DEBUG.handlePointerMove:`, e),
      this.handlePointerEvent({ eventType: `move`, event: e }));
  };
  handlePointerLeave = (e) => {
    let { __debugPointerEvents: t } = this.options;
    (L(t, `move`, `FileDiff.DEBUG.handlePointerLeave: no event`),
      this.hoveredLine == null && this.hoveredToken == null
        ? L(
            t,
            `move`,
            `FileDiff.DEBUG.handlePointerLeave: returned early, no hovered line or token`,
          )
        : (this.hoveredToken != null &&
            (this.options.onTokenLeave?.(this.hoveredToken, e), this.clearHoveredToken()),
          this.hoveredLine != null &&
            (this.options.onLineLeave?.({ ...this.hoveredLine, event: e }),
            this.clearHoveredLine()),
          this.placeUtility()));
  };
  handlePointerEvent({ eventType: e, event: t }) {
    let { __debugPointerEvents: n } = this.options,
      r = t.composedPath();
    L(n, e, `FileDiff.DEBUG.handlePointerEvent:`, { eventType: e, composedPath: r });
    let i = this.resolvePointerTarget(r);
    L(n, e, `FileDiff.DEBUG.handlePointerEvent: resolvePointerTarget result:`, i);
    let {
      onLineClick: a,
      onLineNumberClick: o,
      onLineEnter: s,
      onLineLeave: c,
      onTokenClick: l,
      onTokenEnter: u,
      onTokenLeave: d,
      onHunkExpand: f,
      onMergeConflictActionClick: p,
    } = this.options;
    switch (e) {
      case `move`: {
        let e = O(i) && this.hoveredLine?.lineElement === i.lineElement;
        ((D(i) && this.hoveredToken?.tokenElement === i.tokenElement) ||
          (this.hoveredToken != null && (d?.(this.hoveredToken, t), this.clearHoveredToken()),
          D(i) && (this.setHoveredToken(this.toTokenEventBaseProps(i)), u?.(this.hoveredToken, t))),
          e ||
            (this.hoveredLine != null &&
              (c?.({ ...this.hoveredLine, event: t }), this.clearHoveredLine()),
            O(i)
              ? (this.setHoveredLine(this.toEventBaseProps(i)),
                this.placeUtility(),
                s?.({ ...this.hoveredLine, event: t }))
              : this.placeUtility()));
        break;
      }
      case `click`: {
        if (i == null) break;
        if (oe(i) && p != null) {
          p(i);
          break;
        }
        if (ae(i) && f != null) {
          f(
            i.hunkIndex,
            i.all || t.shiftKey ? `both` : i.direction,
            i.all || t.shiftKey ? 1 / 0 : void 0,
          );
          break;
        }
        if (!O(i)) break;
        D(i) && l != null && l(this.toTokenEventBaseProps(i), t);
        let e = this.toEventBaseProps(i);
        o != null && i.numberColumn ? o({ ...e, event: t }) : a?.({ ...e, event: t });
        break;
      }
    }
  }
  syncPointerListeners(e) {
    let {
        __debugPointerEvents: t,
        lineHoverHighlight: n = `disabled`,
        onLineClick: r,
        onLineNumberClick: i,
        onLineEnter: a,
        onLineLeave: o,
        onTokenClick: s,
        onTokenEnter: c,
        onTokenLeave: l,
        onHunkExpand: u,
        onMergeConflictActionClick: d,
        enableGutterUtility: f = !1,
        enableLineSelection: p = !1,
        onGutterUtilityClick: m,
      } = this.options,
      h = m != null,
      g =
        n !== `disabled` ||
        r != null ||
        i != null ||
        a != null ||
        o != null ||
        s != null ||
        c != null ||
        l != null ||
        u != null ||
        d != null ||
        f ||
        p ||
        h;
    g && !this.hasPointerListeners
      ? (e.addEventListener(`click`, this.handlePointerClick),
        e.addEventListener(`pointerdown`, this.handlePointerDown),
        e.addEventListener(`pointermove`, this.handlePointerMove),
        e.addEventListener(`pointerleave`, this.handlePointerLeave),
        (this.hasPointerListeners = !0),
        L(
          t,
          `click`,
          `FileDiff.DEBUG.attachEventListeners: Attaching click events for:`,
          (() => {
            let e = [];
            return (
              (t === `both` || t === `click`) &&
                (r != null && e.push(`onLineClick`),
                i != null && e.push(`onLineNumberClick`),
                u != null && e.push(`expandable hunk separators`),
                d != null && e.push(`merge conflict actions`)),
              e
            );
          })(),
        ),
        L(t, `move`, `FileDiff.DEBUG.attachEventListeners: Attaching pointer move event`),
        L(t, `move`, `FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event`))
      : !g &&
        this.hasPointerListeners &&
        (e.removeEventListener(`click`, this.handlePointerClick),
        e.removeEventListener(`pointerdown`, this.handlePointerDown),
        e.removeEventListener(`pointermove`, this.handlePointerMove),
        e.removeEventListener(`pointerleave`, this.handlePointerLeave),
        (this.hasPointerListeners = !1));
    let _ =
        this.pointerSession.mode === `selecting` ||
        this.pointerSession.mode === `pendingSingleLineUnselect`,
      v = this.pointerSession.mode === `gutterSelecting`;
    ((!p && _) || (!h && v)) &&
      (this.clearPointerSession(),
      this.detachDocumentPointerListeners(),
      (this.selectionAnchor = void 0),
      this.clearPendingSingleLineState());
  }
  updateInteractiveLineAttributes() {
    if (this.pre == null) return;
    let { onLineClick: e, onLineNumberClick: t, enableLineSelection: n = !1 } = this.options,
      r = e != null,
      i = t != null || n;
    (r && !this.interactiveLinesAttr
      ? (this.pre.setAttribute(`data-interactive-lines`, ``), (this.interactiveLinesAttr = !0))
      : !r &&
        this.interactiveLinesAttr &&
        (this.pre.removeAttribute(`data-interactive-lines`), (this.interactiveLinesAttr = !1)),
      i && !this.interactiveLineNumbersAttr
        ? (this.pre.setAttribute(`data-interactive-line-numbers`, ``),
          (this.interactiveLineNumbersAttr = !0))
        : !i &&
          this.interactiveLineNumbersAttr &&
          (this.pre.removeAttribute(`data-interactive-line-numbers`),
          (this.interactiveLineNumbersAttr = !1)));
  }
  handlePointerDown = (e) => {
    if (
      (e.pointerType === `mouse` && e.button !== 0) ||
      this.pre == null ||
      this.pointerSession.mode !== `idle`
    )
      return;
    let t = e.composedPath();
    T(t) && this.options.onGutterUtilityClick != null
      ? this.startGutterSelectionFromPointerDown(e)
      : (e.pointerType !== `mouse` && this.revealUtilityFromGutterPath(t),
        this.startLineSelectionFromPointerDown(e));
  };
  startLineSelectionFromPointerDown(e) {
    let { enableLineSelection: t = !1 } = this.options;
    if (!t) return;
    let n = this.resolveSelectionInfo(e, { source: `event-path`, requireNumberColumn: !0 });
    if (n == null) return;
    let { pre: r } = this;
    if (r == null) return;
    let { lineNumber: i, eventSide: a, lineIndex: o } = n;
    if (e.shiftKey && this.selectedRange != null) {
      let t = this.getIndexesFromSelection(
        this.selectedRange,
        r.getAttribute(`data-diff-type`) === `split`,
      );
      if (t == null) return;
      let n = t.start <= t.end ? o >= t.start : o <= t.end;
      ((this.selectionAnchor = {
        lineNumber: n ? this.selectedRange.start : this.selectedRange.end,
        side: n ? this.selectedRange.side : (this.selectedRange.endSide ?? this.selectedRange.side),
      }),
        this.updateSelection(i, a, !1),
        this.notifySelectionStart(this.getCurrentSelectionRange()),
        (this.pointerSession = { mode: `selecting`, pointerId: e.pointerId }),
        this.attachDocumentPointerListeners());
    } else if (this.selectedRange?.start === i && this.selectedRange?.end === i) {
      let t = { lineNumber: i, side: a };
      ((this.selectionAnchor = t),
        (this.pointerSession = {
          mode: `pendingSingleLineUnselect`,
          pointerId: e.pointerId,
          anchor: t,
          pending: t,
        }),
        this.attachDocumentPointerListeners());
    } else
      (this.options.controlledSelection === !0
        ? (this.proposedSelectedRange = null)
        : (this.selectedRange = null),
        this.placeUtility(),
        (this.selectionAnchor = { lineNumber: i, side: a }),
        this.updateSelection(i, a, !1),
        this.notifySelectionStart(this.getCurrentSelectionRange()),
        (this.pointerSession = { mode: `selecting`, pointerId: e.pointerId }),
        this.attachDocumentPointerListeners());
  }
  startGutterSelectionFromPointerDown(e) {
    let { onGutterUtilityClick: t } = this.options;
    if (t == null) return;
    let n = this.currentSelectionEnds(),
      r = n?.bottom ?? this.resolveSelectionPoint(e, { source: `event-path`, excludeUtility: !1 }),
      i = n?.top ?? r;
    r != null &&
      i != null &&
      (e.preventDefault(),
      e.stopPropagation(),
      (this.pointerSession = {
        mode: `gutterSelecting`,
        pointerId: e.pointerId,
        anchor: i,
        current: r,
      }),
      (this.selectionAnchor = { lineNumber: i.lineNumber, side: i.side }),
      this.updateSelection(r.lineNumber, r.side, !1),
      this.notifySelectionStart(this.getCurrentSelectionRange()),
      this.attachDocumentPointerListeners());
  }
  handleDocumentPointerMove = (e) => {
    switch (this.pointerSession.mode) {
      case `idle`:
        return;
      case `gutterSelecting`: {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        e.preventDefault();
        let t = this.resolveSelectionPoint(e, { source: `coordinates-first` });
        if (t == null) return;
        ((this.pointerSession.current = t), this.updateSelection(t.lineNumber, t.side));
        return;
      }
      case `selecting`: {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        e.preventDefault();
        let t = this.resolveSelectionInfo(e, {
          source: `coordinates-first`,
          requireNumberColumn: !1,
        });
        if (t == null || this.selectionAnchor == null) return;
        this.updateSelection(t.lineNumber, t.eventSide);
        return;
      }
      case `pendingSingleLineUnselect`: {
        if (e.pointerId !== this.pointerSession.pointerId) return;
        e.preventDefault();
        let t = this.resolveSelectionInfo(e, {
          source: `coordinates-first`,
          requireNumberColumn: !1,
        });
        if (t == null || this.selectionAnchor == null) return;
        let n = { lineNumber: t.lineNumber, side: t.eventSide };
        if (te(this.pointerSession.pending, n)) return;
        (this.updateSelection(t.lineNumber, t.eventSide, !1),
          this.notifySelectionStart(this.getCurrentSelectionRange()),
          this.notifySelectionChangeDelta(),
          (this.pointerSession = { mode: `selecting`, pointerId: e.pointerId }));
        return;
      }
    }
  };
  handleDocumentPointerUp = (e) => {
    let { onGutterUtilityClick: t } = this.options;
    switch (this.pointerSession.mode) {
      case `idle`:
        return;
      case `gutterSelecting`: {
        let { pointerSession: n } = this;
        if (e.pointerId !== n.pointerId) return;
        e.preventDefault();
        let r = this.resolveSelectionPoint(e, { source: `coordinates-first` });
        r != null && ((n.current = r), this.updateSelection(r.lineNumber, r.side));
        let i = this.buildSelectedLineRange(n.anchor, n.current);
        (t?.({ ...i }),
          (this.selectionAnchor = void 0),
          this.notifySelectionEnd(i),
          this.notifySelectionCommitted(i),
          this.clearProposedSelection(),
          this.clearPointerSession(),
          this.detachDocumentPointerListeners());
        return;
      }
      case `pendingSingleLineUnselect`:
        if (e.pointerId !== this.pointerSession.pointerId) return;
        (e.preventDefault(),
          this.updateSelection(null, void 0, !1),
          (this.selectionAnchor = void 0),
          this.clearPendingSingleLineState(),
          this.detachDocumentPointerListeners(),
          this.notifySelectionEnd(this.getCurrentSelectionRange()),
          this.notifySelectionCommitted(this.getCurrentSelectionRange()),
          this.clearProposedSelection());
        return;
      case `selecting`:
        if (e.pointerId !== this.pointerSession.pointerId) return;
        (e.preventDefault(),
          (this.selectionAnchor = void 0),
          this.detachDocumentPointerListeners(),
          this.clearPointerSession(),
          this.notifySelectionEnd(this.getCurrentSelectionRange()),
          this.notifySelectionCommitted(this.getCurrentSelectionRange()),
          this.clearProposedSelection());
    }
  };
  handleDocumentPointerCancel = (e) => {
    switch (this.pointerSession.mode) {
      case `idle`:
        return;
      case `gutterSelecting`:
      case `selecting`:
      case `pendingSingleLineUnselect`:
        if (`pointerId` in this.pointerSession && e.pointerId !== this.pointerSession.pointerId)
          return;
        ((this.selectionAnchor = void 0),
          this.clearProposedSelection(),
          this.clearPendingSingleLineState(),
          this.clearPointerSession(),
          this.detachDocumentPointerListeners());
    }
  };
  clearHoveredLine() {
    this.hoveredLine != null &&
      (this.hoveredLine.lineElement.removeAttribute(`data-hovered`),
      this.hoveredLine.numberElement.removeAttribute(`data-hovered`),
      (this.hoveredLine = void 0));
  }
  setHoveredLine(e) {
    let { lineHoverHighlight: t = `disabled` } = this.options;
    (this.hoveredLine != null && this.clearHoveredLine(),
      (this.hoveredLine = e),
      t !== `disabled` &&
        ((t === `both` || t === `line`) &&
          this.hoveredLine.lineElement.setAttribute(`data-hovered`, ``),
        (t === `both` || t === `number`) &&
          this.hoveredLine.numberElement.setAttribute(`data-hovered`, ``)));
  }
  clearHoveredToken() {
    this.hoveredToken != null && (this.hoveredToken = void 0);
  }
  setHoveredToken(e) {
    (this.hoveredToken != null && this.clearHoveredToken(), (this.hoveredToken = e));
  }
  ensureGutterUtilityNode(e) {
    if (
      (this.gutterUtilityContainer ??
        ((this.gutterUtilityContainer = document.createElement(`div`)),
        this.gutterUtilityContainer.setAttribute(`data-gutter-utility-slot`, ``)),
      e)
    )
      (this.gutterUtilityButton != null &&
        (this.gutterUtilityButton.remove(), (this.gutterUtilityButton = void 0)),
        this.gutterUtilitySlot ??
          ((this.gutterUtilitySlot = document.createElement(`slot`)),
          (this.gutterUtilitySlot.name = `gutter-utility-slot`)),
        this.gutterUtilitySlot.parentNode !== this.gutterUtilityContainer &&
          this.gutterUtilityContainer.replaceChildren(this.gutterUtilitySlot));
    else {
      if (
        (this.gutterUtilitySlot?.remove(),
        (this.gutterUtilitySlot = void 0),
        this.gutterUtilityButton == null)
      ) {
        let e = document.createElement(`div`);
        e.innerHTML = s(ee());
        let t = e.firstElementChild;
        if (!(t instanceof HTMLButtonElement))
          throw Error(
            `InteractionManager.ensureGutterUtilityNode: Node element should be a button`,
          );
        (t.remove(), (this.gutterUtilityButton = t));
      }
      this.gutterUtilityButton.parentNode !== this.gutterUtilityContainer &&
        this.gutterUtilityContainer.replaceChildren(this.gutterUtilityButton);
    }
  }
  revealUtilityFromGutterPath(e) {
    if (this.placeUtilityFromSelection()) return;
    let t = this.resolvePointerTarget(e);
    E(t) && t.numberColumn && this.showUtilityOnLine(this.toEventBaseProps(t));
  }
  placeUtility() {
    this.placeUtilityFromSelection() ||
      (this.hoveredLine == null ? this.hideUtility() : this.showUtilityOnLine(this.hoveredLine));
  }
  placeUtilityFromSelection() {
    let e = this.currentSelectionEnds();
    if (e == null) return !1;
    let t = this.targetForSelectionPoint(e.bottom);
    return (t == null ? this.hideUtility() : this.showUtilityOnLine(this.toEventBaseProps(t)), !0);
  }
  showUtilityOnLine(e) {
    this.gutterUtilityContainer != null &&
      ((this.gutterUtilityLine = e), e.numberElement.appendChild(this.gutterUtilityContainer));
  }
  hideUtility() {
    (this.gutterUtilityContainer?.remove(), (this.gutterUtilityLine = void 0));
  }
  currentSelectionEnds() {
    let e = this.getCurrentSelectionRange();
    return e == null ? void 0 : this.selectionEnds(e);
  }
  selectionEnds(e) {
    let t = { lineNumber: e.start, side: e.side },
      n = { lineNumber: e.end, side: e.endSide ?? e.side },
      r = this.selectionPointRowIndex(t),
      i = this.selectionPointRowIndex(n);
    if (r != null && i != null) return r > i ? { top: n, bottom: t } : { top: t, bottom: n };
  }
  selectionPointRowIndex(e) {
    let t = this.getLineIndex(e.lineNumber, e.side);
    if (t != null) return this.isSplitDiff() ? t[1] : t[0];
  }
  targetForSelectionPoint(e) {
    if (this.pre == null) return;
    let t = this.getLineIndex(e.lineNumber, e.side);
    if (t == null) return;
    let n = this.mode === `diff` ? `${t[0]},${t[1]}` : `${t[0]}`,
      r = this.pre.querySelectorAll(
        `[data-column-number="${e.lineNumber}"][data-line-index="${n}"]`,
      );
    for (let t of r) {
      if (!(t instanceof HTMLElement)) continue;
      let n = this.resolvePointerTarget(A(t));
      if (E(n) && (this.mode !== `diff` || e.side == null || n.side === e.side)) return n;
    }
  }
  attachDocumentPointerListeners() {
    this.hasDocumentPointerListeners ||=
      (document.addEventListener(`pointermove`, this.handleDocumentPointerMove),
      document.addEventListener(`pointerup`, this.handleDocumentPointerUp),
      document.addEventListener(`pointercancel`, this.handleDocumentPointerCancel),
      !0);
  }
  detachDocumentPointerListeners() {
    this.hasDocumentPointerListeners &&=
      (document.removeEventListener(`pointermove`, this.handleDocumentPointerMove),
      document.removeEventListener(`pointerup`, this.handleDocumentPointerUp),
      document.removeEventListener(`pointercancel`, this.handleDocumentPointerCancel),
      !1);
  }
  clearPointerSession() {
    this.pointerSession = { mode: `idle` };
  }
  clearPendingSingleLineState() {
    this.pointerSession.mode === `pendingSingleLineUnselect` &&
      (this.pointerSession = { mode: `idle` });
  }
  selectionInfoFromPath(e, t) {
    let n = this.resolvePointerTarget(e);
    if (E(n) && (!t || n.numberColumn) && n.splitLineIndex != null)
      return {
        lineIndex: n.splitLineIndex,
        lineNumber: n.lineNumber,
        eventSide: this.mode === `diff` ? n.side : void 0,
      };
  }
  resolveSelectionInfo(e, t) {
    let n = this.resolveSelectionPath(e, t);
    return n == null ? void 0 : this.selectionInfoFromPath(n, t.requireNumberColumn);
  }
  selectionPointFromPath(e) {
    let t = this.resolvePointerTarget(e);
    if (E(t)) return { lineNumber: t.lineNumber, side: this.mode === `diff` ? t.side : void 0 };
  }
  resolveSelectionPoint(e, t) {
    let n = this.resolveSelectionPath(e, t);
    return n == null ? void 0 : this.selectionPointFromPath(n);
  }
  resolveSelectionPath(e, t) {
    let n = t.excludeUtility !== !1;
    switch (t.source) {
      case `event-path`:
        return this.pathFromEventPath(e.composedPath(), n);
      case `coordinates-first`: {
        let t = this.pathFromCoordinates(e, n);
        return t === void 0 ? this.pathFromEventPath(e.composedPath(), n) : (t ?? void 0);
      }
    }
  }
  pathFromCoordinates(e, t) {
    let n = this.hitTest(e);
    if (n !== void 0) return n === null ? null : (this.pathFromElement(n, t) ?? null);
  }
  pathFromEventPath(e, t) {
    if (!(t && T(e))) {
      for (let n of e) if (n instanceof Element) return this.pathFromElement(n, t);
    }
  }
  pathFromElement(e, t) {
    let n = A(e);
    if (t && T(n)) return;
    let r = ce(e);
    return r == null ? this.pathFromAnnotationSlot(e) : A(r);
  }
  pathFromAnnotationSlot(e) {
    let t = le(e)?.previousElementSibling;
    if (
      t instanceof HTMLElement &&
      (t.hasAttribute(`data-line`) || t.hasAttribute(`data-column-number`))
    )
      return A(t);
    let n = M(j(e));
    if (n == null) return;
    let r = this.targetForSelectionPoint(n);
    return r == null ? void 0 : A(r.lineElement);
  }
  hitTest(e) {
    if (!Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) return;
    let t = this.pre?.getRootNode(),
      n = N(t) ? t : N(document) ? document : void 0;
    if (n != null) return n.elementFromPoint(e.clientX, e.clientY);
  }
  getLineIndex(e, t) {
    let { getLineIndex: n } = this.options;
    return n == null ? [e - 1, e - 1] : n(e, t);
  }
  getCurrentSelectionRange() {
    return this.proposedSelectedRange === void 0 ? this.selectedRange : this.proposedSelectedRange;
  }
  clearProposedSelection() {
    this.proposedSelectedRange = void 0;
  }
  updateSelection(e, t, n = !0) {
    let r = this.getCurrentSelectionRange(),
      i;
    if (e == null) i = null;
    else {
      let n = this.selectionAnchor?.side ?? t,
        r = this.selectionAnchor?.lineNumber ?? e;
      i = this.buildSelectionRange(r, e, n, t);
    }
    x(r ?? void 0, i ?? void 0) ||
      ((this.selectedRangeHighlightSide = void 0),
      (this.selectedRangeLineNumberOnly = !1),
      this.options.controlledSelection === !0
        ? (this.proposedSelectedRange = i)
        : ((this.selectedRange = i), h(this.renderSelection)),
      this.placeUtility(),
      n && this.notifySelectionChangeDelta());
  }
  getIndexesFromSelection(e, t) {
    if (this.pre == null) return;
    let n = this.getLineIndex(e.start, e.side),
      r = this.getLineIndex(e.end, e.endSide ?? e.side);
    return n != null && r != null ? { start: t ? n[1] : n[0], end: t ? r[1] : r[0] } : void 0;
  }
  getSelectionRenderState() {
    return {
      selectedLines: {
        range: this.selectedRange,
        highlightSide: this.selectedRangeHighlightSide,
        lineNumberOnly: this.selectedRangeLineNumberOnly,
      },
      editorActiveLine: {
        range:
          this.editorActiveLine == null
            ? null
            : {
                start: this.editorActiveLine,
                end: this.editorActiveLine,
                side: this.editorActiveLineSide,
              },
        highlightSide: this.editorActiveLineSide,
        lineNumberOnly: this.editorLineNumberOnly,
      },
    };
  }
  resolveLineRenderRange(e, t, n) {
    if (e.range == null) return;
    let r = this.getIndexesFromSelection(e.range, t);
    if (r == null)
      throw (
        console.error({ rowRange: r, range: e.range }),
        Error(`InteractionManager.renderSelection: No valid ${n} rowRange`)
      );
    return r;
  }
  getLineRenderColumns(e, t, n, r) {
    if (this.pre == null || (t == null && r == null)) return [];
    let { children: i } = this.pre;
    if (i.length > 2)
      throw (
        console.error(i),
        Error(`InteractionManager.renderSelection: Somehow there are more than 2 code elements...`)
      );
    let a = [];
    for (let o of i) {
      let i = o.hasAttribute(`data-deletions`)
          ? `deletions`
          : o.hasAttribute(`data-additions`)
            ? `additions`
            : void 0,
        s =
          e != null && t != null && (e.highlightSide == null || i == null || e.highlightSide === i),
        c =
          n != null && r != null && (n.highlightSide == null || i == null || n.highlightSide === i);
      if (!s && !c) continue;
      let [l, u] = o.children;
      if (!(l instanceof HTMLElement) || !(u instanceof HTMLElement))
        throw Error(`InteractionManager.renderSelection: missing gutter or content element`);
      if (u.children.length !== l.children.length)
        throw Error(
          `InteractionManager.renderSelection: gutter and content children dont match, something is wrong`,
        );
      a.push({ content: u, gutter: l, renderEditorActiveLine: c, renderSelectedLines: s });
    }
    return a;
  }
  renderSelection = () => {
    g(this.renderSelection);
    let e = this.getSelectionRenderState();
    if (this.pre == null) return;
    let { editorActiveLine: t, selectedLines: n } = e,
      r = !P(this.renderedSelectedLinesState, n),
      i = !P(this.renderedEditorActiveLineState, t);
    if (!r && !i) return;
    (r && (this.renderedSelectedLinesState = void 0),
      i && (this.renderedEditorActiveLineState = void 0));
    let a = this.pre.getAttribute(`data-diff-type`) === `split`,
      o = r ? this.resolveLineRenderRange(n, a, `selected-lines`) : void 0,
      s = i ? this.resolveLineRenderRange(t, a, `editor-active-line`) : void 0,
      c = this.getLineRenderColumns(r ? n : void 0, o, i ? t : void 0, s),
      l = n.range == null || c.some((e) => e.renderSelectedLines),
      u = t.range == null || c.some((e) => e.renderEditorActiveLine);
    if (r)
      for (let e of this.pre.querySelectorAll(`[data-selected-line]`))
        e.removeAttribute(`data-selected-line`);
    if (i)
      for (let e of this.pre.querySelectorAll(`[data-editor-active-line]`))
        e.removeAttribute(`data-editor-active-line`);
    let d = o == null ? void 0 : Math.min(o.start, o.end),
      f = o == null ? void 0 : Math.max(o.start, o.end),
      p = d === f,
      m = s?.start;
    for (let e of c) {
      let { content: r, gutter: i, renderEditorActiveLine: o, renderSelectedLines: s } = e,
        c = Math.max(s ? (f ?? -1 / 0) : -1 / 0, o ? (m ?? -1 / 0) : -1 / 0),
        l = r.children.length;
      for (let e = 0; e < l; e++) {
        let l = r.children[e],
          u = i.children[e];
        if (!(l instanceof HTMLElement) || !(u instanceof HTMLElement)) continue;
        let h = this.parseLineIndex(l, a);
        if ((h ?? 0) > c) break;
        if (h != null) {
          if (s && d != null && f != null && h >= d && h <= f) {
            let e = p ? `single` : h === d ? `first` : h === f ? `last` : ``;
            (u.setAttribute(`data-selected-line`, e),
              n.lineNumberOnly ||
                (l.setAttribute(`data-selected-line`, e),
                u.nextSibling instanceof HTMLElement &&
                  l.nextSibling instanceof HTMLElement &&
                  (l.nextSibling.hasAttribute(`data-line-annotation`) ||
                    l.nextSibling.hasAttribute(`data-merge-conflict-actions`)) &&
                  (p
                    ? ((e = `last`), l.setAttribute(`data-selected-line`, `first`))
                    : h === d
                      ? (e = ``)
                      : h === f && l.setAttribute(`data-selected-line`, ``),
                  l.nextSibling.setAttribute(`data-selected-line`, e),
                  u.nextSibling.setAttribute(`data-selected-line`, e))));
          }
          o &&
            h === m &&
            (u.setAttribute(`data-editor-active-line`, ``),
            t.lineNumberOnly || l.setAttribute(`data-editor-active-line`, ``));
        }
      }
    }
    (r && l && (this.renderedSelectedLinesState = n),
      i && u && (this.renderedEditorActiveLineState = t));
  };
  notifySelectionCommitted(e) {
    this.options.onLineSelected?.(e);
  }
  notifySelectionChangeDelta() {
    this.options.onLineSelectionChange?.(this.getCurrentSelectionRange() ?? null);
  }
  notifySelectionStart(e) {
    this.options.onLineSelectionStart?.(e);
  }
  notifySelectionEnd(e) {
    this.options.onLineSelectionEnd?.(e);
  }
  toEventBaseProps(e) {
    return this.mode === `file`
      ? {
          type: `line`,
          lineElement: e.lineElement,
          lineNumber: e.lineNumber,
          numberColumn: e.numberColumn,
          numberElement: e.numberElement,
        }
      : {
          type: `diff-line`,
          annotationSide: e.side,
          lineType: e.lineType,
          lineElement: e.lineElement,
          numberElement: e.numberElement,
          lineNumber: e.lineNumber,
          numberColumn: e.numberColumn,
        };
  }
  toTokenEventBaseProps({
    lineCharEnd: e,
    lineCharStart: t,
    lineNumber: n,
    side: r,
    tokenElement: i,
    tokenText: a,
  }) {
    return this.mode === `file`
      ? {
          type: `token`,
          lineCharEnd: e,
          lineCharStart: t,
          lineNumber: n,
          tokenElement: i,
          tokenText: a,
        }
      : {
          type: `token`,
          lineCharEnd: e,
          lineCharStart: t,
          lineNumber: n,
          side: r,
          tokenElement: i,
          tokenText: a,
        };
  }
  buildSelectedLineRange(e, t) {
    return this.buildSelectionRange(e.lineNumber, t.lineNumber, e.side, t.side);
  }
  buildSelectionRange(e, t, n, r) {
    return {
      start: e,
      end: t,
      ...(n == null ? {} : { side: n }),
      ...(n !== r && r != null ? { endSide: r } : {}),
    };
  }
  resolvePointerTarget(e) {
    let t = !1,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d;
    for (let f of e) {
      if (!(f instanceof HTMLElement)) continue;
      if (d == null && f.hasAttribute(`data-merge-conflict-action`)) {
        let e = f.getAttribute(`data-merge-conflict-action`) ?? void 0,
          t = f.getAttribute(`data-merge-conflict-conflict-index`) ?? void 0,
          n = t == null ? NaN : Number.parseInt(t, 10);
        se(e) &&
          Number.isFinite(n) &&
          (d = { kind: `merge-conflict-action`, resolution: e, conflictIndex: n });
      }
      if (s == null && f.hasAttribute(`data-char`)) {
        s = f;
        let e = f.getAttribute(`data-char`);
        if (e != null) {
          let t = Number.parseInt(e, 10);
          if (!Number.isNaN(t)) {
            let e = f.textContent ?? ``,
              n = t + e.length;
            (e.trim() !== `` || this.options.enableTokenInteractionsOnWhitespace === !0) &&
              (c = { tokenElement: s, lineCharStart: t, lineCharEnd: n, tokenText: e });
            continue;
          }
        }
      }
      let e = o == null ? (f.getAttribute(`data-column-number`) ?? void 0) : void 0;
      if (e != null) {
        ((o = f),
          (u = Number.parseInt(e, 10)),
          (t = !0),
          (n = I(f)),
          (a = f.getAttribute(`data-line-index`) ?? void 0));
        continue;
      }
      let p = i == null ? (f.getAttribute(`data-line`) ?? void 0) : void 0;
      if (p != null) {
        ((i = f),
          (u = Number.parseInt(p, 10)),
          (n = I(f)),
          (a = f.getAttribute(`data-line-index`) ?? void 0));
        continue;
      }
      if (
        l == null &&
        (f.hasAttribute(`data-expand-button`) || f.hasAttribute(`data-unmodified-lines`))
      ) {
        l = {
          hunkIndex: void 0,
          direction: f.hasAttribute(`data-expand-up`)
            ? `up`
            : f.hasAttribute(`data-expand-down`)
              ? `down`
              : `both`,
          all: f.hasAttribute(`data-expand-all-button`),
        };
        continue;
      }
      let m = l == null ? void 0 : (f.getAttribute(`data-expand-index`) ?? void 0);
      if (l != null && m != null) {
        let e = Number.parseInt(m, 10);
        Number.isNaN(e) || (l.hunkIndex = e);
      } else if (r == null && f.hasAttribute(`data-code`)) {
        r = f;
        break;
      }
    }
    if (d != null) return d;
    if (l?.hunkIndex != null)
      return { type: `line-info`, hunkIndex: l.hunkIndex, direction: l.direction, all: l.all };
    if (
      ((i ??= a == null ? void 0 : k(r, `[data-line][data-line-index="${a}"]`)),
      (o ??= a == null ? void 0 : k(r, `[data-column-number][data-line-index="${a}"]`)),
      r == null || i == null || o == null || n == null || u == null || Number.isNaN(u))
    )
      return;
    let f = this.parseLineIndex(i, this.isSplitDiff());
    return c == null
      ? this.mode === `file`
        ? {
            kind: `line`,
            lineType: n,
            lineElement: i,
            lineNumber: u,
            numberColumn: t,
            numberElement: o,
            side: void 0,
            splitLineIndex: f,
          }
        : {
            kind: `line`,
            lineType: n,
            lineElement: i,
            lineNumber: u,
            numberColumn: t,
            numberElement: o,
            side: F(n, r),
            splitLineIndex: f,
          }
      : this.mode === `file`
        ? {
            kind: `token`,
            lineType: n,
            lineElement: i,
            lineNumber: u,
            numberColumn: t,
            numberElement: o,
            side: void 0,
            splitLineIndex: f,
            ...c,
          }
        : {
            kind: `token`,
            lineType: n,
            lineElement: i,
            lineNumber: u,
            numberColumn: t,
            numberElement: o,
            side: F(n, r),
            splitLineIndex: f,
            ...c,
          };
  }
  isSplitDiff() {
    return this.pre?.getAttribute(`data-diff-type`) === `split`;
  }
  parseLineIndex(e, t) {
    let n = (e.getAttribute(`data-line-index`) ?? ``)
      .split(`,`)
      .map((e) => Number.parseInt(e, 10))
      .filter((e) => !Number.isNaN(e));
    if (t && n.length === 2) return n[1];
    if (!t) return n[0];
  }
};
function re(
  {
    enableTokenInteractionsOnWhitespace: e,
    enableGutterUtility: t,
    lineHoverHighlight: n,
    onGutterUtilityClick: r,
    onLineClick: i,
    onLineEnter: a,
    onLineLeave: o,
    onLineNumberClick: s,
    onTokenClick: c,
    onTokenEnter: l,
    onTokenLeave: u,
    renderGutterUtility: d,
    __debugPointerEvents: f,
    enableLineSelection: p,
    controlledSelection: m,
    onLineSelected: h,
    onLineSelectionStart: g,
    onLineSelectionChange: _,
    onLineSelectionEnd: v,
  },
  y,
  b,
  x,
) {
  return {
    enableTokenInteractionsOnWhitespace: e,
    enableGutterUtility: ie({
      enableGutterUtility: t,
      renderGutterUtility: d,
      onGutterUtilityClick: r,
    }),
    usesCustomGutterUtility: d != null,
    lineHoverHighlight: n,
    onGutterUtilityClick: r,
    onHunkExpand: y,
    onMergeConflictActionClick: x,
    onLineClick: i,
    onLineEnter: a,
    onLineLeave: o,
    onLineNumberClick: s,
    onTokenClick: c,
    onTokenEnter: l,
    onTokenLeave: u,
    __debugPointerEvents: f,
    enableLineSelection: p,
    controlledSelection: m,
    onLineSelected: h,
    onLineSelectionStart: g,
    onLineSelectionChange: _,
    onLineSelectionEnd: v,
    getLineIndex: b,
  };
}
function ie({ enableGutterUtility: e, renderGutterUtility: t, onGutterUtilityClick: n }) {
  if (n != null && t != null)
    throw Error(
      `Cannot use both 'onGutterUtilityClick' and 'renderGutterUtility'. Use only one gutter utility API.`,
    );
  return e ?? !1;
}
function E(e) {
  return e != null && `kind` in e && e.kind === `line`;
}
function D(e) {
  return e != null && `kind` in e && e.kind === `token`;
}
function O(e) {
  return E(e) || D(e);
}
function ae(e) {
  return `type` in e && e.type === `line-info`;
}
function oe(e) {
  return `kind` in e && e.kind === `merge-conflict-action`;
}
function se(e) {
  return e === `current` || e === `incoming` || e === `both`;
}
function k(e, t) {
  let n = e?.querySelector(t);
  return n instanceof HTMLElement ? n : void 0;
}
function A(e) {
  let t = [],
    n = e;
  for (; n != null;) (t.push(n), (n = n.parentNode));
  return t;
}
function ce(e) {
  let t = e.closest(`[data-line], [data-column-number]`);
  if (t instanceof HTMLElement) return t;
  let n = e.closest(`[data-line-annotation], [data-gutter-buffer="annotation"]`);
  if (!(n instanceof HTMLElement)) return;
  let r = n.previousElementSibling;
  return r instanceof HTMLElement &&
    (r.hasAttribute(`data-line`) || r.hasAttribute(`data-column-number`))
    ? r
    : void 0;
}
function le(e) {
  let t = e.closest(`[slot^="annotation-"]`),
    n = (
      t instanceof HTMLElement && t.assignedSlot != null
        ? t.assignedSlot
        : e.tagName === `SLOT`
          ? e
          : void 0
    )?.closest(`[data-line-annotation]`);
  return n instanceof HTMLElement ? n : void 0;
}
function j(e) {
  let t = e.closest(`[slot^="annotation-"]`);
  if (t instanceof HTMLElement) return t.getAttribute(`slot`) ?? void 0;
  if (e instanceof HTMLElement) {
    let t = e.getAttribute(`name`) ?? void 0;
    return t != null && t.startsWith(`annotation-`) ? t : void 0;
  }
}
function M(e) {
  if (e == null) return;
  let t = /^annotation-(?:(additions|deletions)-)?(\d+)$/.exec(e);
  if (t == null) return;
  let n = Number.parseInt(t[2], 10);
  if (!(!Number.isFinite(n) || n <= 0)) return { lineNumber: n, side: t[1] };
}
function N(e) {
  return e != null && typeof e.elementFromPoint == `function`;
}
function ue(e, t) {
  return e === t || x(e ?? void 0, t ?? void 0);
}
function P(e, t) {
  return (
    e?.highlightSide === t.highlightSide &&
    e?.lineNumberOnly === t.lineNumberOnly &&
    ue(e?.range ?? null, t.range)
  );
}
function F(e, t) {
  switch (e) {
    case `change-deletion`:
      return `deletions`;
    case `change-addition`:
      return `additions`;
    default:
      return t.hasAttribute(`data-deletions`) ? `deletions` : `additions`;
  }
}
function I(e) {
  let t = e.getAttribute(`data-line-type`);
  if (t != null)
    switch (t) {
      case `change-deletion`:
      case `change-addition`:
      case `context`:
      case `context-expanded`:
        return t;
      default:
        return;
    }
}
function L(e = `none`, t, ...n) {
  switch (e) {
    case `none`:
      return;
    case `both`:
      break;
    case `click`:
      if (t !== `click`) return;
      break;
    case `move`:
      if (t !== `move`) return;
  }
  console.log(...n);
}
var de = class e {
  static resizeObserver;
  static managersByElement = new Map();
  static getResizeObserver() {
    let t = e.resizeObserver ?? new ResizeObserver(e.handleSharedResizeEntries);
    return ((e.resizeObserver = t), t);
  }
  static handleSharedResizeEntries(t) {
    let n = new Map();
    for (let r of t) {
      let t = e.managersByElement.get(r.target);
      if (t == null) continue;
      let i = n.get(t);
      i == null ? n.set(t, [r]) : i.push(r);
    }
    for (let [e, t] of n) e.handleResizeEntries(t);
  }
  observedNodes = new Map();
  onResize;
  setup(e, { disableAnnotations: t, columnVariables: n = `apply` }) {
    let r = new Set(),
      i = n === `apply`,
      a = 0,
      o = new Map(this.observedNodes);
    this.observedNodes.clear();
    for (let t of e.children) {
      if (a === 2) break;
      let e = (() => {
        if (t instanceof HTMLElement && t.tagName === `CODE`) return t;
      })();
      if (e == null) continue;
      a++;
      let n = o.get(e);
      if (n != null && n.type !== `code`)
        throw Error(
          `ResizeManager.setup: somehow a code node is being used for an annotation, should be impossible`,
        );
      let r = e.firstElementChild;
      (r instanceof HTMLElement || (r = null),
        n == null
          ? ((n = {
              type: `code`,
              codeElement: e,
              numberElement: r,
              codeWidth: `auto`,
              numberWidth: 0,
              applyColumnVariables: i,
            }),
            this.observedNodes.set(e, n),
            this.observe(e),
            r != null && (this.observedNodes.set(r, n), this.observe(r)))
          : (this.observedNodes.set(e, n),
            o.delete(e),
            n.numberElement === r
              ? n.numberElement == null
                ? (n.numberWidth = 0)
                : (o.delete(n.numberElement), this.observedNodes.set(n.numberElement, n))
              : (n.numberElement != null &&
                  (this.unobserve(n.numberElement), o.delete(n.numberElement)),
                r != null && (this.observe(r), o.delete(r), this.observedNodes.set(r, n)),
                (n.numberElement = r),
                (n.numberWidth = 0)),
            B(n, i)));
    }
    if (a > 1 && !t) {
      let t = e.querySelectorAll(`[data-line-annotation*=","]`),
        n = new Map();
      for (let e of t) {
        if (!(e instanceof HTMLElement)) continue;
        let t = e.getAttribute(`data-line-annotation`) ?? ``;
        if (!/^-?\d+,-?\d+$/.test(t)) {
          console.error(`DiffFileRenderer.setupResizeObserver: Invalid element or annotation`, {
            lineAnnotation: t,
            element: e,
          });
          continue;
        }
        let r = n.get(t);
        (r ?? ((r = []), n.set(t, r)), r.push(e));
      }
      for (let [e, t] of n) {
        if (t.length !== 2) {
          console.error(`DiffFileRenderer.setupResizeObserver: Bad Pair`, e, t);
          continue;
        }
        let [n, i] = t,
          a = n.firstElementChild,
          s = i.firstElementChild;
        if (
          !(n instanceof HTMLElement) ||
          !(i instanceof HTMLElement) ||
          !(a instanceof HTMLElement) ||
          !(s instanceof HTMLElement)
        )
          continue;
        let c = o.get(a);
        if (c != null) {
          (this.observedNodes.set(a, c), this.observedNodes.set(s, c), o.delete(a), o.delete(s));
          continue;
        }
        let l = a.getBoundingClientRect().height,
          u = s.getBoundingClientRect().height;
        ((c = {
          type: `annotations`,
          column1: { container: n, child: a, childHeight: l },
          column2: { container: i, child: s, childHeight: u },
          currentHeight: `auto`,
        }),
          r.add({ child1: a, child2: s, item: c, newHeight: Math.max(l, u) }));
      }
      for (let e of r)
        (this.applyNewHeight(e.item, e.newHeight),
          this.observedNodes.set(e.child1, e.item),
          this.observedNodes.set(e.child2, e.item),
          this.observe(e.child1),
          this.observe(e.child2));
      r.clear();
    }
    for (let [e, t] of o) (this.unobserve(e), t.type === `code` ? fe(t) : pe(t));
    o.clear();
  }
  cleanUp() {
    for (let e of this.observedNodes.keys()) this.unobserve(e);
    this.observedNodes.clear();
  }
  observe(t) {
    let { managersByElement: n } = e,
      r = n.get(t);
    if (r !== this) {
      if (r != null && r !== this)
        throw Error(`ResizeManager.observe: element is already owned by another ResizeManager`);
      (n.set(t, this), e.getResizeObserver().observe(t));
    }
  }
  unobserve(t) {
    let { managersByElement: n, resizeObserver: r } = e,
      i = n.get(t);
    if (i != null) {
      if (i !== this)
        throw Error(`ResizeManager.unobserve: element is owned by another ResizeManager`);
      (n.delete(t),
        r?.unobserve(t),
        r != null && n.size === 0 && (r.disconnect(), (e.resizeObserver = void 0)));
    }
  }
  handleResizeEntries(e) {
    let t = new Map(),
      n = new Set();
    for (let r of e) {
      let { target: e, borderBoxSize: i, contentBoxSize: a } = r;
      if (!(e instanceof HTMLElement)) {
        console.error(`ResizeManager.handleResizeEntries: Invalid element for ResizeObserver`, r);
        continue;
      }
      let o = this.observedNodes.get(e);
      if (o == null)
        console.error(`ResizeManager.handleResizeEntries: Not a valid observed node`, r);
      else if (o.type === `annotations`) {
        let t = (() => {
          if (e === o.column1.child) return o.column1;
          if (e === o.column2.child) return o.column2;
        })();
        if (t == null) {
          console.error(`ResizeManager.handleResizeEntries: Couldn't find a column for`, {
            item: o,
            target: e,
          });
          continue;
        }
        ((t.childHeight = i[0].blockSize), n.add(o));
      } else if (o.type === `code`) {
        let n = t.get(o) ?? {},
          r = a[0].inlineSize;
        (e === o.codeElement
          ? (n.codeInlineSize = r)
          : e === o.numberElement && (n.numberInlineSize = r),
          t.set(o, n));
      }
    }
    (this.applyAnnotationUpdates(n),
      n.clear(),
      this.applyColumnUpdates(t),
      t.size > 0 && this.onResize?.(),
      t.clear());
  }
  applyAnnotationUpdates(e) {
    for (let t of e) this.applyNewHeight(t, Math.max(t.column1.childHeight, t.column2.childHeight));
  }
  applyColumnUpdates = (e) => {
    for (let [t, n] of e) {
      let e = n.codeInlineSize == null ? t.codeWidth : R(n.codeInlineSize),
        r = n.numberInlineSize == null ? t.numberWidth : z(n.numberInlineSize),
        i = e !== t.codeWidth,
        a = r !== t.numberWidth;
      (i || a) &&
        ((t.codeWidth = e),
        (t.numberWidth = r),
        t.applyColumnVariables && V(t, { codeWidthChanged: i, numberWidthChanged: a }));
    }
  };
  applyNewHeight(e, t) {
    t !== e.currentHeight &&
      ((e.currentHeight = Math.max(t, 0)),
      e.column1.container.style.setProperty(
        `--diffs-annotation-min-height`,
        `${e.currentHeight}px`,
      ),
      e.column2.container.style.setProperty(
        `--diffs-annotation-min-height`,
        `${e.currentHeight}px`,
      ));
  }
};
function R(e) {
  let t = Math.max(Math.floor(e), 0);
  return t === 0 ? `auto` : t;
}
function z(e) {
  return Math.max(Math.ceil(e), 0);
}
function B(e, t) {
  e.applyColumnVariables !== t &&
    ((e.applyColumnVariables = t),
    t ? V(e, { codeWidthChanged: !0, numberWidthChanged: !0 }) : H(e));
}
function V(e, { codeWidthChanged: t, numberWidthChanged: n }) {
  let { codeElement: r, codeWidth: i, numberWidth: a } = e;
  if (
    (t &&
      r.style.setProperty(`--diffs-column-width`, `${typeof i == `number` ? `${i}px` : `auto`}`),
    n && r.style.setProperty(`--diffs-column-number-width`, `${a === 0 ? `auto` : `${a}px`}`),
    t || (n && i !== `auto`))
  ) {
    let e = typeof i == `number` ? Math.max(i - a, 0) : 0;
    r.style.setProperty(`--diffs-column-content-width`, `${e > 0 ? `${e}px` : `auto`}`);
  }
}
function H(e) {
  (e.codeElement.style.removeProperty(`--diffs-column-content-width`),
    e.codeElement.style.removeProperty(`--diffs-column-number-width`),
    e.codeElement.style.removeProperty(`--diffs-column-width`));
}
function fe(e) {
  e.codeElement.isConnected && H(e);
}
function pe(e) {
  (e.column1.container.isConnected &&
    e.column1.container.style.removeProperty(`--diffs-annotation-min-height`),
    e.column2.container.isConnected &&
      e.column2.container.style.removeProperty(`--diffs-annotation-min-height`));
}
function me(e, t) {
  return e?.cacheKey != null || t?.cacheKey != null
    ? e?.cacheKey === t?.cacheKey
    : e?.contents === t?.contents && e?.name === t?.name && e?.lang === t?.lang;
}
function he(e, t) {
  return e == null || t == null
    ? e === t
    : ge(e.customProperties, t.customProperties) &&
        e.type === t.type &&
        e.diffIndicators === t.diffIndicators &&
        e.disableBackground === t.disableBackground &&
        e.disableLineNumbers === t.disableLineNumbers &&
        e.overflow === t.overflow &&
        e.split === t.split &&
        e.totalLines === t.totalLines;
}
var U = {};
function ge(e = U, t = U) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n) if (e[r] !== t[r]) return !1;
  return !0;
}
function _e(e) {
  let t = document.createElement(`div`);
  return ((t.dataset.annotationSlot = ``), (t.slot = e), (t.style.whiteSpace = `normal`), t);
}
function ve() {
  let e = document.createElement(`div`);
  return (
    (e.slot = `gutter-utility-slot`),
    (e.style.position = `absolute`),
    (e.style.top = `0`),
    (e.style.bottom = `0`),
    (e.style.textAlign = `center`),
    (e.style.whiteSpace = `normal`),
    (e.style.touchAction = `none`),
    e
  );
}
function ye() {
  let e = document.createElement(`style`);
  return (e.setAttribute(u, ``), e);
}
var W = new WeakMap();
function G(e) {
  return W.get(e) ?? e;
}
function be(e, t) {
  W.set(e, t);
}
function xe({ code: e, pre: t, columnType: n, rowSpan: r, containerSize: i = !1 } = {}) {
  return (
    e ??
      ((e = document.createElement(`code`)),
      e.setAttribute(`data-code`, ``),
      n != null && e.setAttribute(`data-${n}`, ``),
      t?.appendChild(e)),
    r == null ? e.style.removeProperty(`grid-row`) : e.style.setProperty(`grid-row`, `span ${r}`),
    i ? e.setAttribute(`data-container-size`, ``) : e.removeAttribute(`data-container-size`),
    e
  );
}
function Se(e, t) {
  if (t == null) return;
  let n = e.shadowRoot ?? e.attachShadow({ mode: `open` });
  n.innerHTML === `` && (n.innerHTML = t);
}
function Ce(
  e,
  {
    type: t,
    diffIndicators: n,
    disableBackground: r,
    disableLineNumbers: i,
    overflow: a,
    split: o,
    totalLines: s,
    customProperties: c,
  },
) {
  if (c != null)
    for (let t in c) {
      let n = c[t];
      n != null && e.setAttribute(t, `${n}`);
    }
  switch (
    (t === `diff`
      ? (e.setAttribute(`data-diff`, ``), e.removeAttribute(`data-file`))
      : (e.setAttribute(`data-file`, ``), e.removeAttribute(`data-diff`)),
    n)
  ) {
    case `bars`:
    case `classic`:
      e.setAttribute(`data-indicators`, n);
      break;
    case `none`:
      e.removeAttribute(`data-indicators`);
  }
  return (
    i
      ? e.setAttribute(`data-disable-line-numbers`, ``)
      : e.removeAttribute(`data-disable-line-numbers`),
    r ? e.removeAttribute(`data-background`) : e.setAttribute(`data-background`, ``),
    t === `diff`
      ? e.setAttribute(`data-diff-type`, o ? `split` : `single`)
      : e.removeAttribute(`data-diff-type`),
    e.setAttribute(`data-overflow`, a),
    e.style.setProperty(`--diffs-min-number-column-width-default`, `${`${s}`.length}ch`),
    e
  );
}
function we(e) {
  if (typeof HTMLStyleElement < `u` && e instanceof HTMLStyleElement) return !0;
  let t = e.tagName ?? e.nodeName;
  return typeof t == `string` && t.toLowerCase() === `style`;
}
var Te = void 0,
  Ee = void 0,
  De = void 0;
function K() {
  return (Te ??= /macOS|MacIntel|iPhone|iPad|iPod/i.test(Ae()));
}
function Oe() {
  return (Ee ??=
    (`safari` in window && `pushNotification` in window.safari) ||
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
}
function ke() {
  return (De ??= /\bFirefox\//.test(navigator.userAgent));
}
function Ae() {
  let e = globalThis.navigator;
  return e?.platform ?? e?.userAgentData?.platform ?? `unknown`;
}
function je(e, t, n) {
  let r = new Map();
  for (let i of e) {
    let e = G(i);
    r.set(e, n?.slotNames.get(e) ?? t(i));
  }
  return { provided: e, current: e, slotNames: r };
}
function Me(e, t, n) {
  for (let r of t) {
    let t = G(r);
    e.slotNames.has(t) || e.slotNames.set(t, n(r));
  }
  ((e.provided = t), (e.current = t));
}
function Ne(e, t, n) {
  if (e == null) return n(t);
  let r = G(t),
    i = e.slotNames.get(r);
  return (i ?? ((i = n(t)), e.slotNames.set(r, i)), i);
}
function Pe(e, t) {
  let n = e?.offsetHeight ?? 0;
  if (e == null || n === 0) t();
  else {
    e.style.minHeight = `${n}px`;
    try {
      (t(), e.offsetHeight);
    } finally {
      e.style.minHeight = ``;
    }
  }
}
function Fe({ shadowRoot: e, currentNode: t, themeCSS: n }) {
  if (n.trim() === ``) t?.remove();
  else return ((t ??= Ie()), (t.textContent = n), t.parentNode !== e && e.appendChild(t), t);
}
function Ie() {
  let e = document.createElement(`style`);
  return (e.setAttribute(f, ``), e);
}
var Le = `::highlight(diffs-search-match) {
  background-color: var(--diffs-search-match-bg, light-dark(#ff963288, #ff963266));
}
::highlight(diffs-search-focus) {
  background-color: var(--diffs-search-focus-bg, color-mix(in lab, var(--diffs-modified-base) 45%, transparent));
}`;
if (typeof HTMLElement < `u` && customElements.get(`diffs-container`) == null) {
  let e, t;
  class n extends HTMLElement {
    constructor() {
      if ((super(), this.shadowRoot != null)) return;
      let n = this.attachShadow({ mode: `open` });
      (e ??
        ((e = new CSSStyleSheet()), e.replaceSync(i), (t = new CSSStyleSheet()), t.replaceSync(Le)),
        (n.adoptedStyleSheets = [e, t]));
    }
    connectedCallback() {
      let e = this.shadowRoot ?? this.attachShadow({ mode: `open` });
      r(e);
    }
  }
  customElements.define(l, n);
}
function Re(e, t) {
  return (
    e?.cacheKey === t?.cacheKey &&
    e?.contents === t?.contents &&
    e?.name === t?.name &&
    e?.lang === t?.lang
  );
}
function ze(e, t) {
  return e == null || t == null ? e === t : e.top === t.top && e.bottom === t.bottom;
}
var q = 1e3,
  Be = q * 4,
  Ve = [0, 1e-6, 0.99999, 1],
  He = { overscrollSize: q, intersectionObserverMargin: Be, resizeDebugging: !1 },
  J = 0,
  Ue = -1,
  We = class e {
    static __STOP = !1;
    static __lastScrollPosition = 0;
    __id = `virtualizer-${++Ue}`;
    config;
    type = `simple`;
    intersectionObserver;
    scrollTop = 0;
    height = 0;
    scrollHeight = 0;
    windowSpecs = { top: 0, bottom: 0 };
    root;
    contentContainer;
    resizeObserver;
    observers = new Map();
    visibleInstances = new Map();
    visibleInstancesDirty = !1;
    instancesChanged = new Set();
    reconcileQueue = new Set();
    scrollDirty = !0;
    heightDirty = !0;
    scrollHeightDirty = !0;
    renderedObservers = 0;
    connectQueue = new Map();
    constructor(e) {
      this.config = { ...He, ...e };
    }
    setup(t, n) {
      if (this.root == null) {
        ((this.root = t),
          (this.resizeObserver = new ResizeObserver(this.handleContainerResize)),
          (this.intersectionObserver = new IntersectionObserver(this.handleIntersectionChange, {
            root: this.root,
            threshold: Ve,
            rootMargin: `${this.config.intersectionObserverMargin}px 0px ${this.config.intersectionObserverMargin}px 0px`,
          })),
          t instanceof Document ? this.setupWindow() : this.setupElement(n),
          (window.__INSTANCE = this),
          (window.__TOGGLE = () => {
            e.__STOP
              ? ((e.__STOP = !1),
                (this.getScrollContainerElement() ?? window).scrollTo({
                  top: e.__lastScrollPosition,
                }),
                h(this.computeRenderRangeAndEmit))
              : ((e.__lastScrollPosition = this.getScrollTop()), (e.__STOP = !0));
          }));
        for (let [e, t] of this.connectQueue.entries()) this.connect(e, t);
        (this.connectQueue.clear(), this.markDOMDirty(), h(this.computeRenderRangeAndEmit));
      }
    }
    instanceChanged(e, t) {
      (this.instancesChanged.add(e), t && this.markDOMDirty(), h(this.computeRenderRangeAndEmit));
    }
    requestHeightReconcile(e) {
      (this.reconcileQueue.add(e), h(this.computeRenderRangeAndEmit));
    }
    getWindowSpecs() {
      return (
        this.windowSpecs.top === 0 &&
          this.windowSpecs.bottom === 0 &&
          (this.windowSpecs = w({
            scrollTop: this.getScrollTop(),
            height: this.getHeight(),
            scrollHeight: this.getScrollHeight(),
            overscrollSize: this.config.overscrollSize,
          })),
        this.windowSpecs
      );
    }
    getRoot() {
      return this.root;
    }
    isInstanceVisible(e, t) {
      let n = this.getScrollTop(),
        r = this.getHeight(),
        i = this.config.intersectionObserverMargin,
        a = n - i,
        o = n + r + i;
      return !(e < a - t || e > o);
    }
    handleContainerResize = (e) => {
      if (this.root == null) return;
      let t = !1;
      for (let n of e) {
        let e = n.borderBoxSize[0].blockSize;
        this.root instanceof Document
          ? e !== this.scrollHeight &&
            ((this.scrollHeightDirty = !0),
            (t = !0),
            this.config.resizeDebugging &&
              (console.log(`Virtualizer: content size change`, this.__id, {
                sizeChange: e - J,
                newSize: e,
              }),
              (J = e)))
          : n.target === this.root
            ? e !== this.height && ((this.heightDirty = !0), (t = !0))
            : n.target === this.contentContainer &&
              ((this.scrollHeightDirty = !0),
              (t = !0),
              this.config.resizeDebugging &&
                (console.log(`Virtualizer: scroller size change`, this.__id, {
                  sizeChange: e - J,
                  newSize: e,
                }),
                (J = e)));
      }
      t && h(this.computeRenderRangeAndEmit);
    };
    setupWindow() {
      if (this.root == null || !(this.root instanceof Document))
        throw Error(`Virtualizer.setupWindow: Invalid setup method`);
      (window.addEventListener(`scroll`, this.handleWindowScroll, { passive: !0 }),
        window.addEventListener(`resize`, this.handleWindowResize, { passive: !0 }),
        this.resizeObserver?.observe(this.root.documentElement));
    }
    setupElement(e) {
      if (this.root == null || this.root instanceof Document)
        throw Error(`Virtualizer.setupElement: Invalid setup method`);
      (this.root.addEventListener(`scroll`, this.handleElementScroll, { passive: !0 }),
        this.resizeObserver?.observe(this.root),
        (e ??= this.root.firstElementChild ?? void 0),
        e instanceof HTMLElement && ((this.contentContainer = e), this.resizeObserver?.observe(e)));
    }
    cleanUp() {
      (g(this.computeRenderRangeAndEmit),
        this.resizeObserver?.disconnect(),
        (this.resizeObserver = void 0),
        this.intersectionObserver?.disconnect(),
        (this.intersectionObserver = void 0),
        this.root?.removeEventListener(`scroll`, this.handleElementScroll),
        window.removeEventListener(`scroll`, this.handleWindowScroll),
        window.removeEventListener(`resize`, this.handleWindowResize),
        (this.root = void 0),
        (this.contentContainer = void 0),
        this.observers.clear(),
        this.visibleInstances.clear(),
        this.instancesChanged.clear(),
        this.reconcileQueue.clear(),
        this.connectQueue.clear(),
        (this.visibleInstancesDirty = !1),
        (this.windowSpecs = { top: 0, bottom: 0 }),
        (this.scrollTop = 0),
        (this.height = 0),
        (this.scrollHeight = 0),
        (this.scrollDirty = !0),
        (this.heightDirty = !0),
        (this.scrollHeightDirty = !0));
    }
    getOffsetInScrollContainer(e) {
      return this.getScrollTop() + Y(e, this.getScrollContainerElement());
    }
    connect(e, t) {
      if (this.observers.has(e))
        throw Error(`Virtualizer.connect: instance is already connected...`);
      return (
        this.intersectionObserver == null
          ? this.connectQueue.set(e, t)
          : (this.intersectionObserver.observe(e),
            this.observers.set(e, t),
            this.instancesChanged.add(t),
            this.markDOMDirty(),
            h(this.computeRenderRangeAndEmit)),
        () => this.disconnect(e)
      );
    }
    disconnect(e) {
      let t = this.observers.get(e);
      (this.connectQueue.delete(e),
        t != null &&
          (this.intersectionObserver?.unobserve(e),
          this.observers.delete(e),
          this.instancesChanged.delete(t),
          this.reconcileQueue.delete(t),
          this.visibleInstances.delete(e) && (this.visibleInstancesDirty = !0),
          this.markDOMDirty(),
          h(this.computeRenderRangeAndEmit)));
    }
    handleWindowResize = () => {
      e.__STOP ||
        window.innerHeight === this.height ||
        ((this.heightDirty = !0), h(this.computeRenderRangeAndEmit));
    };
    handleWindowScroll = () => {
      !e.__STOP &&
        this.root != null &&
        this.root instanceof Document &&
        ((this.scrollDirty = !0), h(this.computeRenderRangeAndEmit));
    };
    handleElementScroll = () => {
      e.__STOP ||
        this.root == null ||
        this.root instanceof Document ||
        ((this.scrollDirty = !0), h(this.computeRenderRangeAndEmit));
    };
    computeRenderRangeAndEmit = () => {
      if (e.__STOP) return;
      let t = this.heightDirty || this.scrollHeightDirty,
        n = this.instancesChanged.size > 0;
      if (this.instancesChanged.size === 0) {
        let e = w({
          scrollTop: this.getScrollTop(),
          height: this.getHeight(),
          scrollHeight: this.getScrollHeight(),
          overscrollSize: this.config.overscrollSize,
        });
        if (
          !t &&
          ze(this.windowSpecs, e) &&
          this.renderedObservers === this.observers.size &&
          !this.visibleInstancesDirty &&
          this.reconcileQueue.size === 0
        )
          return;
        this.windowSpecs = e;
      }
      ((this.visibleInstancesDirty = !1), (this.renderedObservers = this.observers.size));
      let r = this.getScrollAnchor(this.height),
        i = new Set();
      for (let e of t ? this.observers.values() : this.visibleInstances.values())
        e.onRender(t) && i.add(e);
      for (let e of this.instancesChanged) i.has(e) || (e.onRender(t) && i.add(e));
      this.scrollFix(r);
      for (let e of i) (this.reconcileQueue.delete(e), e.reconcileHeights());
      for (let e of this.reconcileQueue) e.reconcileHeights() && (n = !0);
      (this.reconcileQueue.clear(),
        (n ||= this.instancesChanged.size > 0),
        n && this.markDOMDirty(),
        (n || t) && h(this.computeRenderRangeAndEmit),
        i.clear(),
        this.instancesChanged.clear());
    };
    scrollFix(e) {
      if (e == null) return;
      let t = this.getScrollContainerElement(),
        { lineIndex: n, lineOffset: r, fileElement: i, fileOffset: a, fileTypeOffset: o } = e;
      if (n != null && r != null) {
        let e = i.shadowRoot?.querySelector(`[data-line][data-line-index="${n}"]`);
        if (e instanceof HTMLElement) {
          let n = Y(e, t);
          if (n !== r) {
            let e = n - r;
            this.applyScrollFix(e);
          }
          return;
        }
      }
      let s = Y(i, t);
      if (o === `top`) s !== a && this.applyScrollFix(s - a);
      else {
        let e = s + i.getBoundingClientRect().height;
        e !== a && this.applyScrollFix(e - a);
      }
    }
    applyScrollFix(e) {
      (this.root == null || this.root instanceof Document
        ? window.scrollTo({ top: window.scrollY + e, behavior: `instant` })
        : this.root.scrollTo({ top: this.root.scrollTop + e, behavior: `instant` }),
        this.markDOMDirty());
    }
    getScrollAnchor(e) {
      let t = this.getScrollContainerElement(),
        n;
      for (let [r] of this.visibleInstances.entries()) {
        let i = Y(r, t),
          a = i + r.offsetHeight,
          o,
          s;
        a <= 0 ? ((o = a), (s = `bottom`)) : ((o = i), (s = `top`));
        let c, l;
        if (a > 0 && i < e)
          for (let e of r.shadowRoot?.querySelectorAll(`[data-line][data-line-index]`) ?? []) {
            if (!(e instanceof HTMLElement)) continue;
            let n = e.dataset.lineIndex;
            if (n == null) continue;
            let r = Y(e, t);
            if (!(r < 0)) {
              ((c = n), (l = r));
              break;
            }
          }
        if (n?.lineOffset != null && l == null) continue;
        let u = !1;
        ((n == null ||
          (l != null && (n.lineOffset == null || l < n.lineOffset)) ||
          (l == null &&
            n.lineOffset == null &&
            ((o >= 0 && (n.fileOffset < 0 || o < n.fileOffset)) ||
              (o < 0 && n.fileOffset < 0 && o > n.fileOffset)))) &&
          (u = !0),
          u &&
            (n = {
              fileElement: r,
              fileTypeOffset: s,
              fileOffset: o,
              lineIndex: c,
              lineOffset: l,
            }));
      }
      return n;
    }
    handleIntersectionChange = (e) => {
      this.scrollDirty = !0;
      for (let { target: t, isIntersecting: n } of e) {
        if (!(t instanceof HTMLElement))
          throw Error(`Virtualizer.handleIntersectionChange: target not an HTMLElement`);
        let e = this.observers.get(t);
        e != null &&
          (n && !this.visibleInstances.has(t)
            ? (e.setVisibility(!0),
              this.visibleInstances.set(t, e),
              (this.visibleInstancesDirty = !0))
            : !n &&
              this.visibleInstances.has(t) &&
              (e.setVisibility(!1),
              this.visibleInstances.delete(t),
              (this.visibleInstancesDirty = !0)));
      }
      this.visibleInstancesDirty && h(this.computeRenderRangeAndEmit);
    };
    getScrollTop() {
      if (!this.scrollDirty) return this.scrollTop;
      this.scrollDirty = !1;
      let e =
        this.root == null
          ? 0
          : this.root instanceof Document
            ? window.scrollY
            : this.root.scrollTop;
      return ((e = this.clampScrollTop(e)), (this.scrollTop = e), e);
    }
    scrollTo({ top: e, behavior: t = `auto` }) {
      let { root: n } = this;
      if (n == null) return;
      let r = this.clampScrollTop(e);
      (n instanceof Document
        ? window.scrollTo({ top: r, behavior: t })
        : n.scrollTo({ top: r, behavior: t }),
        (this.scrollDirty = !0),
        h(this.computeRenderRangeAndEmit));
    }
    clampScrollTop(e) {
      return Math.max(0, Math.min(e, this.getScrollHeight() - this.getHeight()));
    }
    getScrollHeight() {
      return (
        this.scrollHeightDirty &&
          ((this.scrollHeightDirty = !1),
          (this.scrollHeight =
            this.root == null
              ? 0
              : this.root instanceof Document
                ? this.root.documentElement.scrollHeight
                : this.root.scrollHeight)),
        this.scrollHeight
      );
    }
    getHeight() {
      return (
        this.heightDirty &&
          ((this.heightDirty = !1),
          (this.height =
            this.root == null
              ? 0
              : this.root instanceof Document
                ? globalThis.innerHeight
                : this.root.getBoundingClientRect().height)),
        this.height
      );
    }
    markDOMDirty() {
      ((this.scrollDirty = !0), (this.scrollHeightDirty = !0), (this.heightDirty = !0));
    }
    getScrollContainerElement() {
      return this.root == null || this.root instanceof Document ? void 0 : this.root;
    }
  };
function Y(e, t) {
  let n = e.getBoundingClientRect(),
    r = t?.getBoundingClientRect().top ?? 0;
  return n.top - r;
}
function X(e) {
  let t = (0, S.useRef)(e);
  return (
    (0, S.useInsertionEffect)(() => void (t.current = e)),
    (0, S.useCallback)((...e) => t.current(...e), [])
  );
}
var Z = (0, S.createContext)(void 0);
function Ge({ children: e, createEditor: t }) {
  let n = X((e, n, r) => t(e, n, r));
  return (0, C.jsx)(Z.Provider, { value: n, children: e });
}
function Ke() {
  return (0, S.useContext)(Z);
}
var qe = {
    position: `absolute`,
    top: 0,
    bottom: 0,
    textAlign: `center`,
    whiteSpace: `normal`,
    touchAction: `none`,
  },
  Je = { display: `contents` };
function Ye() {
  return null;
}
var Q = (0, S.createContext)(void 0);
function Xe() {
  return (0, S.useContext)(Q);
}
function Ze(e, t) {
  return typeof window > `u` && t != null
    ? (0, C.jsxs)(C.Fragment, {
        children: [
          (0, C.jsx)(`template`, {
            shadowrootmode: `open`,
            dangerouslySetInnerHTML: { __html: t },
          }),
          e,
        ],
      })
    : (0, C.jsx)(C.Fragment, { children: e });
}
var $ = (0, S.createContext)(void 0);
function Qe({
  children: e,
  config: t,
  className: n,
  style: r,
  contentClassName: i,
  contentStyle: a,
}) {
  let [o] = (0, S.useState)(() => (typeof window < `u` ? new We(t) : void 0)),
    s = (0, S.useCallback)(
      (e) => {
        e == null ? o?.cleanUp() : o?.setup(e);
      },
      [o],
    );
  return (0, C.jsx)($.Provider, {
    value: o,
    children: (0, C.jsx)(`div`, {
      className: n,
      style: r,
      ref: s,
      children: (0, C.jsx)(`div`, { className: i, style: a, children: e }),
    }),
  });
}
function $e() {
  return (0, S.useContext)($);
}
function et() {
  let [e] = (0, S.useState)(() => {
    let e = 0,
      t;
    return {
      getSnapshot: () => e,
      subscribe(e) {
        return (
          (t = e),
          () => {
            t = void 0;
          }
        );
      },
      forceUpdate() {
        (e++, t?.());
      },
    };
  });
  return ((0, S.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot), e.forceUpdate);
}
function tt(e, t) {
  "use no memo";
  return e.current?.__getNextRenderData(t);
}
export {
  ve as A,
  y as B,
  we as C,
  G as D,
  xe as E,
  ne as F,
  g as H,
  re as I,
  T as L,
  he as M,
  me as N,
  be as O,
  de as P,
  w as R,
  Oe as S,
  Se as T,
  h as U,
  v as V,
  je as _,
  Ze as a,
  ke as b,
  qe as c,
  Ge as d,
  Ke as f,
  Pe as g,
  Fe as h,
  $e as i,
  _e as j,
  ye as k,
  Je as l,
  Re as m,
  et as n,
  Q as o,
  X as p,
  Qe as r,
  Xe as s,
  tt as t,
  Ye as u,
  Ne as v,
  Ce as w,
  K as x,
  Me as y,
  x as z,
};
//# sourceMappingURL=useNextRenderData-JbRG-cVc.js.map
