import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./plus-B20TfFan.js";
import { n as a, t as o } from "./square-split-vertical-DT-N_WAD.js";
import { t as s } from "./square-terminal-Ct5WzL1i.js";
import { t as c } from "./square-Bnspdfnl.js";
import { t as l } from "./trash-2-Dt6v2wPw.js";
import {
  Ay as u,
  B_ as d,
  Dp as f,
  Dr as p,
  Lc as m,
  Op as h,
  Uy as g,
  Vy as _,
  Xl as v,
  iu as ee,
  j_ as te,
  jc as y,
  jy as b,
  t as ne,
  uc as x,
} from "./utils-CPoejuy5.js";
import { l as re } from "./useSettings-N-JG2LFZ.js";
import { m as ie } from "./server-3D32GveR.js";
import { a as ae, r as oe } from "./session-0UrRHIau.js";
import { t as se } from "./use-atom-command-DGAuqAck.js";
import { l as ce } from "./rightPanelStore-DEayojei.js";
import { a as le } from "./fileLinks-2WxYEZAK.js";
import { n as ue } from "./localApi-CWy6n-K6.js";
import { _ as de, h as S, i as fe } from "./toast-B4KPIJDZ.js";
import { t as C } from "./toastHelpers-CSQRKo4F.js";
import { t as pe } from "./observeResize-SVLLrLKP.js";
import {
  C as me,
  S as w,
  c as he,
  d as ge,
  n as T,
  s as _e,
} from "./browserHistoryStore-heVS6T5j.js";
import {
  b as E,
  c as D,
  d as ve,
  f as O,
  i as ye,
  l as be,
  s as xe,
  u as Se,
  x as Ce,
} from "./keybindings-b_9MjE1R.js";
import { t as we } from "./preview-D-juEBB6.js";
import { n as Te, r as Ee } from "./browserLinkTarget-pMsWWdTa.js";
import { i as k, n as De, t as Oe } from "./terminal-links-CRwQIG8L.js";
import { n as ke, r as Ae } from "./selectionActions-CG8IoIVz.js";
import { n as je, t as A } from "./panel-tab-close-button-FEVBZGpz.js";
import {
  Jo as Me,
  Vo as Ne,
  Wo as Pe,
  Zc as Fe,
  _o as Ie,
  as as Le,
  ds as Re,
  es as j,
  gs as M,
  mo as ze,
  ps as N,
  qo as Be,
  rs as Ve,
  ss as He,
  vo as Ue,
  yo as We,
} from "./main-BZa0O6xN.js";
var P = e(t(), 1),
  Ge = n(),
  F = new Map(
    `Unidentified.Backquote.Backslash.BracketLeft.BracketRight.Comma.Digit0.Digit1.Digit2.Digit3.Digit4.Digit5.Digit6.Digit7.Digit8.Digit9.Equal.IntlBackslash.IntlRo.IntlYen.KeyA.KeyB.KeyC.KeyD.KeyE.KeyF.KeyG.KeyH.KeyI.KeyJ.KeyK.KeyL.KeyM.KeyN.KeyO.KeyP.KeyQ.KeyR.KeyS.KeyT.KeyU.KeyV.KeyW.KeyX.KeyY.KeyZ.Minus.Period.Quote.Semicolon.Slash.AltLeft.AltRight.Backspace.CapsLock.ContextMenu.ControlLeft.ControlRight.Enter.MetaLeft.MetaRight.ShiftLeft.ShiftRight.Space.Tab.Convert.KanaMode.NonConvert.Delete.End.Help.Home.Insert.PageDown.PageUp.ArrowDown.ArrowLeft.ArrowRight.ArrowUp.NumLock.Numpad0.Numpad1.Numpad2.Numpad3.Numpad4.Numpad5.Numpad6.Numpad7.Numpad8.Numpad9.NumpadAdd.NumpadBackspace.NumpadClear.NumpadClearEntry.NumpadComma.NumpadDecimal.NumpadDivide.NumpadEnter.NumpadEqual.NumpadMemoryAdd.NumpadMemoryClear.NumpadMemoryRecall.NumpadMemoryStore.NumpadMemorySubtract.NumpadMultiply.NumpadParenLeft.NumpadParenRight.NumpadSubtract.NumpadSeparator.NumpadArrowUp.NumpadArrowDown.NumpadArrowRight.NumpadArrowLeft.NumpadBegin.NumpadHome.NumpadEnd.NumpadInsert.NumpadDelete.NumpadPageUp.NumpadPageDown.Escape.F1.F2.F3.F4.F5.F6.F7.F8.F9.F10.F11.F12.F13.F14.F15.F16.F17.F18.F19.F20.F21.F22.F23.F24.F25.Fn.FnLock.PrintScreen.ScrollLock.Pause.BrowserBack.BrowserFavorites.BrowserForward.BrowserHome.BrowserRefresh.BrowserSearch.BrowserStop.Eject.LaunchApp1.LaunchApp2.LaunchMail.MediaPlayPause.MediaSelect.MediaStop.MediaTrackNext.MediaTrackPrevious.Power.Sleep.AudioVolumeDown.AudioVolumeMute.AudioVolumeUp.WakeUp.Copy.Cut.Paste`
      .split(`.`)
      .map((e, t) => [e, t]),
  );
function I(e) {
  return F.get(e) ?? 0;
}
function Ke(e) {
  return I(e.code) || I(e.key);
}
var qe;
function L() {
  if (qe) return qe;
  let e =
    globalThis.navigator?.keyboard?.getLayoutMap().catch(() => void 0) ?? Promise.resolve(void 0);
  return ((qe = e), e);
}
function Je(e) {
  return !e.shiftKey || e.ctrlKey || e.altKey || e.metaKey ? 0 : +([...e.key].length === 1);
}
function Ye(e, t) {
  if ([...e.key].length !== 1) return 0;
  let n = t?.get(e.code);
  if (n && [...n].length === 1) return n.codePointAt(0) ?? 0;
  if (/^[A-Z]$/u.test(e.key)) return e.key.charCodeAt(0) + 32;
  if (e.shiftKey) {
    let t = f.get(e.key);
    if (t) return t.codePointAt(0) ?? 0;
    let n = e.key.toLowerCase();
    return n !== e.key && [...n].length === 1 ? (n.codePointAt(0) ?? 0) : 0;
  }
  return e.key.codePointAt(0) ?? 0;
}
var Xe = `/assets/ghostty-vt-DdA0Zryv.wasm`,
  Ze = `/assets/ghostty-write-pty-hgyAvVbe.wasm`,
  R = new TextDecoder(),
  Qe = class e {
    memory;
    layouts;
    exports;
    memoryView;
    ptyWriters = new Map();
    nextPtyWriterId = 1;
    writePtyFunctionIndex = 0;
    constructor(e) {
      this.exports = e.exports;
      let t = e.exports.memory;
      if (!(t instanceof WebAssembly.Memory))
        throw Error(`libghostty-vt did not export WebAssembly memory`);
      ((this.memory = t), (this.memoryView = new DataView(t.buffer)));
      let n = this.call(`ghostty_type_json`),
        r = new Uint8Array(t.buffer),
        i = n;
      for (; i < r.length && r[i] !== 0;) i += 1;
      this.layouts = JSON.parse(R.decode(r.subarray(n, i)));
    }
    static async load() {
      let t = await fetch(Xe);
      if (!t.ok) throw Error(`Unable to load libghostty-vt (${t.status})`);
      let n,
        r = await WebAssembly.instantiate(await t.arrayBuffer(), {
          env: {
            log: (e, t) => {
              if (!n) return;
              let r = n.exports.memory;
              if (!(r instanceof WebAssembly.Memory)) return;
              let i = R.decode(new Uint8Array(r.buffer, e, t));
              console.debug(`[libghostty-vt]`, i);
            },
          },
        });
      n = r.instance;
      let i = new e(r.instance);
      return (await i.installWritePtyTrampoline(), i);
    }
    call(e, ...t) {
      let n = this.exports[e];
      if (typeof n != `function`) throw Error(`libghostty-vt export is unavailable: ${e}`);
      return n(...t);
    }
    layout(e) {
      let t = this.layouts[e];
      if (!t) throw Error(`libghostty-vt type layout is unavailable: ${e}`);
      return t;
    }
    alloc(e) {
      let t = this.call(`ghostty_wasm_alloc_u8_array`, e);
      if (t === 0) throw Error(`libghostty-vt failed to allocate ${e} bytes`);
      return (new Uint8Array(this.memory.buffer, t, e).fill(0), t);
    }
    free(e, t) {
      e !== 0 && this.call(`ghostty_wasm_free_u8_array`, e, t);
    }
    allocOpaque() {
      let e = this.call(`ghostty_wasm_alloc_opaque`);
      if (e === 0) throw Error(`libghostty-vt failed to allocate an opaque pointer`);
      return (new DataView(this.memory.buffer).setUint32(e, 0, !0), e);
    }
    freeOpaque(e) {
      e !== 0 && this.call(`ghostty_wasm_free_opaque`, e);
    }
    readPointer(e) {
      return this.memoryDataView().getUint32(e, !0);
    }
    attachPtyWriter(e, t) {
      if (this.writePtyFunctionIndex === 0)
        throw Error(`libghostty-vt PTY callback trampoline is unavailable`);
      let n = this.nextPtyWriterId++;
      return (
        this.ptyWriters.set(n, t),
        this.call(`ghostty_terminal_set`, e, 0, n),
        this.call(`ghostty_terminal_set`, e, 1, this.writePtyFunctionIndex),
        n
      );
    }
    detachPtyWriter(e, t) {
      (this.call(`ghostty_terminal_set`, e, 1, 0),
        this.call(`ghostty_terminal_set`, e, 0, 0),
        this.ptyWriters.delete(t));
    }
    view(e, t) {
      return new DataView(this.memory.buffer, e, t);
    }
    bytes(e, t) {
      return new Uint8Array(this.memory.buffer, e, t);
    }
    memoryDataView() {
      return (
        this.memoryView.buffer !== this.memory.buffer &&
          (this.memoryView = new DataView(this.memory.buffer)),
        this.memoryView
      );
    }
    setField(e, t, n, r) {
      let i = this.layout(t).fields[n];
      if (!i) throw Error(`libghostty-vt field is unavailable: ${t}.${n}`);
      let a = this.memoryDataView(),
        o = e + i.offset;
      switch (i.type) {
        case `bool`:
        case `u8`:
          a.setUint8(o, r);
          return;
        case `u16`:
          a.setUint16(o, r, !0);
          return;
        case `i32`:
          a.setInt32(o, r, !0);
          return;
        case `u32`:
        case `enum`:
          a.setUint32(o, r, !0);
          return;
        case `u64`:
          a.setBigUint64(o, BigInt(r), !0);
          return;
        default:
          throw Error(`Unsupported libghostty-vt field type: ${i.type}`);
      }
    }
    readField(e, t, n) {
      let r = this.layout(t).fields[n];
      if (!r) throw Error(`libghostty-vt field is unavailable: ${t}.${n}`);
      let i = this.memoryDataView(),
        a = e + r.offset;
      switch (r.type) {
        case `bool`:
        case `u8`:
          return i.getUint8(a);
        case `u16`:
          return i.getUint16(a, !0);
        case `i32`:
          return i.getInt32(a, !0);
        case `u32`:
        case `enum`:
          return i.getUint32(a, !0);
        case `u64`:
          return Number(i.getBigUint64(a, !0));
        default:
          throw Error(`Unsupported libghostty-vt field type: ${r.type}`);
      }
    }
    async installWritePtyTrampoline() {
      let e = await fetch(Ze);
      if (!e.ok) throw Error(`Unable to load the libghostty-vt PTY trampoline (${e.status})`);
      let t = (
          await WebAssembly.instantiate(await e.arrayBuffer(), {
            env: {
              t3_write_pty: (e, t, n, r) => {
                let i = this.ptyWriters.get(t);
                i && r !== 0 && i(R.decode(new Uint8Array(this.memory.buffer, n, r)));
              },
            },
          })
        ).instance.exports.ghostty_write_pty,
        n = this.exports.__indirect_function_table;
      if (typeof t != `function` || !(n instanceof WebAssembly.Table))
        throw Error(`libghostty-vt did not expose its callback table`);
      let r = n.length;
      (n.grow(1), n.set(r, t), (this.writePtyFunctionIndex = r));
    }
  },
  $e = null;
function et() {
  return (
    ($e ??= Qe.load().catch((e) => {
      throw (($e = null), e);
    })),
    $e
  );
}
var z = 0,
  B = -3,
  V = 1e4,
  H = 16,
  tt = 768,
  U = {
    cols: 1,
    rows: 2,
    dirty: 3,
    rowIterator: 4,
    background: 5,
    foreground: 6,
    cursor: 7,
    cursorHasValue: 8,
    cursorStyle: 10,
    cursorVisible: 11,
    cursorBlinking: 12,
    cursorInViewport: 14,
    cursorX: 15,
    cursorY: 16,
  },
  W = { dirty: 1, raw: 2, cells: 3 },
  G = {
    raw: 1,
    style: 2,
    graphemesLength: 3,
    graphemes: 4,
    background: 5,
    foreground: 6,
    selected: 7,
  },
  K = {
    keys: 0,
    values: 20,
    graphemesLength: 40,
    selected: 44,
    background: 48,
    foreground: 52,
    written: 56,
    size: 60,
  },
  nt = { wide: 3 },
  rt = { narrow: 0, wide: 1, spacerTail: 2, spacerHead: 3 },
  it = new TextDecoder(),
  at = new TextEncoder();
function ot(e, t) {
  let n = (e, t) => Math.floor((e * 155 + t * 100) / 255);
  return { r: n(e.r, t.r), g: n(e.g, t.g), b: n(e.b, t.b) };
}
function st(e, t) {
  return e.r === t.r && e.g === t.g && e.b === t.b;
}
function ct(e, t) {
  if (t === 1) return String.fromCodePoint(e.getUint32(0, !0));
  let n = 4096,
    r = ``;
  for (let i = 0; i < t; i += n) {
    let a = Math.min(n, t - i),
      o = Array(a);
    for (let t = 0; t < a; t += 1) o[t] = e.getUint32((i + t) * 4, !0);
    r += String.fromCodePoint(...o);
  }
  return r;
}
var lt = class e {
  runtime;
  terminalSlot = 0;
  terminal = 0;
  renderStateSlot = 0;
  renderState = 0;
  rowIteratorSlot = 0;
  rowCellsSlot = 0;
  keyEncoderSlot = 0;
  keyEncoder = 0;
  keyEventSlot = 0;
  keyEvent = 0;
  mouseEncoderSlot = 0;
  mouseEncoder = 0;
  mouseEventSlot = 0;
  mouseEvent = 0;
  ptyWriterId = 0;
  ptyWriter = null;
  scratch = 0;
  graphemes = 0;
  graphemeCapacity = 0;
  style = 0;
  cellQuery = 0;
  scrollbar = 0;
  rows = [];
  disposed = !1;
  keyboardLayoutMap;
  constructor(e) {
    ((this.runtime = e),
      L().then((e) => {
        this.disposed || (this.keyboardLayoutMap = e);
      }));
  }
  static async create(t, n, r, i, a, o) {
    let s = new e(await et());
    try {
      return (s.initialize(t, n, r, i, a, o), s);
    } catch (e) {
      throw (s.dispose(), e);
    }
  }
  initialize(e, t, n, r, i, a) {
    let o = this.runtime.layout(`GhosttyTerminalOptions`).size,
      s = this.runtime.alloc(o);
    (this.runtime.setField(s, `GhosttyTerminalOptions`, `cols`, e),
      this.runtime.setField(s, `GhosttyTerminalOptions`, `rows`, t),
      this.runtime.setField(s, `GhosttyTerminalOptions`, `max_scrollback`, V),
      (this.terminalSlot = this.runtime.allocOpaque()));
    let c = this.runtime.call(`ghostty_terminal_new`, 0, this.terminalSlot, s);
    (this.runtime.free(s, o),
      this.assertSuccess(`ghostty_terminal_new`, c),
      (this.terminal = this.runtime.readPointer(this.terminalSlot)),
      this.applyDefaultCursorBlink(),
      (this.ptyWriter = a),
      (this.ptyWriterId = this.runtime.attachPtyWriter(this.terminal, a)),
      (this.renderStateSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_render_state_new`,
        this.runtime.call(`ghostty_render_state_new`, 0, this.renderStateSlot),
      ),
      (this.renderState = this.runtime.readPointer(this.renderStateSlot)),
      (this.rowIteratorSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_render_state_row_iterator_new`,
        this.runtime.call(`ghostty_render_state_row_iterator_new`, 0, this.rowIteratorSlot),
      ),
      (this.rowCellsSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_render_state_row_cells_new`,
        this.runtime.call(`ghostty_render_state_row_cells_new`, 0, this.rowCellsSlot),
      ),
      (this.keyEncoderSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_key_encoder_new`,
        this.runtime.call(`ghostty_key_encoder_new`, 0, this.keyEncoderSlot),
      ),
      (this.keyEncoder = this.runtime.readPointer(this.keyEncoderSlot)),
      (this.keyEventSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_key_event_new`,
        this.runtime.call(`ghostty_key_event_new`, 0, this.keyEventSlot),
      ),
      (this.keyEvent = this.runtime.readPointer(this.keyEventSlot)),
      (this.mouseEncoderSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_mouse_encoder_new`,
        this.runtime.call(`ghostty_mouse_encoder_new`, 0, this.mouseEncoderSlot),
      ),
      (this.mouseEncoder = this.runtime.readPointer(this.mouseEncoderSlot)),
      (this.mouseEventSlot = this.runtime.allocOpaque()),
      this.assertSuccess(
        `ghostty_mouse_event_new`,
        this.runtime.call(`ghostty_mouse_event_new`, 0, this.mouseEventSlot),
      ),
      (this.mouseEvent = this.runtime.readPointer(this.mouseEventSlot)),
      (this.scratch = this.runtime.alloc(16)));
    let l = this.runtime.layout(`GhosttyStyle`).size;
    ((this.style = this.runtime.alloc(l)),
      this.runtime.setField(this.style, `GhosttyStyle`, `size`, l),
      (this.cellQuery = this.runtime.alloc(K.size)));
    let u = this.runtime.memoryDataView(),
      d = [
        [G.style, this.style],
        [G.graphemesLength, this.cellQuery + K.graphemesLength],
        [G.selected, this.cellQuery + K.selected],
        [G.background, this.cellQuery + K.background],
        [G.foreground, this.cellQuery + K.foreground],
      ];
    for (let [e, [t, n]] of d.entries())
      (u.setUint32(this.cellQuery + K.keys + e * 4, t, !0),
        u.setUint32(this.cellQuery + K.values + e * 4, n, !0));
    ((this.scrollbar = this.runtime.alloc(this.runtime.layout(`GhosttyTerminalScrollbar`).size)),
      this.setTheme(i),
      this.resize(e, t, n, r));
  }
  write(e, t) {
    this.ensureActive();
    let n = typeof e == `string` ? at.encode(e) : e;
    if (n.length === 0) return;
    let r = this.runtime.alloc(n.length);
    this.runtime.bytes(r, n.length).set(n);
    let i = t !== void 0 && this.isSynchronizedOutput();
    try {
      for (let e = 0; e < n.length;) {
        let a = i ? n.indexOf(27, e + 1) : -1,
          o = a === -1 ? n.length : a;
        (this.runtime.call(`ghostty_terminal_vt_write`, this.terminal, r + e, o - e),
          (e = o),
          i && !this.isSynchronizedOutput() && ((i = !1), t?.()));
      }
    } finally {
      this.runtime.free(r, n.length);
    }
  }
  resetAndWrite(e) {
    if (
      (this.ensureActive(),
      this.runtime.call(`ghostty_terminal_reset`, this.terminal),
      this.applyDefaultCursorBlink(),
      (this.rows = []),
      e.length === 0)
    )
      return;
    let t = this.ptyWriter;
    this.ptyWriterId !== 0 &&
      (this.runtime.detachPtyWriter(this.terminal, this.ptyWriterId), (this.ptyWriterId = 0));
    try {
      this.write(e);
    } finally {
      t !== null &&
        !this.disposed &&
        (this.ptyWriterId = this.runtime.attachPtyWriter(this.terminal, t));
    }
  }
  resize(e, t, n, r) {
    (this.ensureActive(),
      this.assertSuccess(
        `ghostty_terminal_resize`,
        this.runtime.call(
          `ghostty_terminal_resize`,
          this.terminal,
          Math.max(1, Math.min(65535, e)),
          Math.max(1, Math.min(65535, t)),
          Math.max(1, Math.round(n)),
          Math.max(1, Math.round(r)),
        ),
      ));
  }
  applyDefaultCursorBlink() {
    let e = this.runtime.alloc(1);
    ((this.runtime.bytes(e, 1)[0] = 1),
      this.runtime.call(`ghostty_terminal_set`, this.terminal, 23, e),
      this.runtime.free(e, 1));
  }
  setTheme(e) {
    this.ensureActive();
    let t = this.runtime.alloc(3);
    for (let [n, r] of [
      [11, e.foreground],
      [12, e.background],
      [13, e.cursor],
    ])
      (this.runtime.bytes(t, 3).set([r.r, r.g, r.b]),
        this.runtime.call(`ghostty_terminal_set`, this.terminal, n, t));
    (this.runtime.free(t, 3), e.palette && this.setPalette(e.palette));
  }
  setPalette(e) {
    let t = this.runtime.alloc(tt);
    this.runtime.call(`ghostty_terminal_get`, this.terminal, 25, t);
    let n = this.runtime.bytes(t, tt);
    (e.slice(0, 16).forEach((e, t) => {
      n.set([e.r, e.g, e.b], t * 3);
    }),
      this.runtime.call(`ghostty_terminal_set`, this.terminal, 14, t),
      this.runtime.free(t, tt));
  }
  scroll(e) {
    this.ensureActive();
    let t = this.runtime.layout(`GhosttyTerminalScrollViewport`),
      n = this.runtime.alloc(t.size);
    this.runtime.setField(n, `GhosttyTerminalScrollViewport`, `tag`, 2);
    let r = t.fields.value;
    (this.runtime.view(n + r.offset, r.size).setInt32(0, e, !0),
      this.runtime.call(`ghostty_terminal_scroll_viewport`, this.terminal, n),
      this.runtime.free(n, t.size));
  }
  scrollToBottom() {
    this.ensureActive();
    let e = this.runtime.layout(`GhosttyTerminalScrollViewport`),
      t = this.runtime.alloc(e.size);
    (this.runtime.setField(t, `GhosttyTerminalScrollViewport`, `tag`, 1),
      this.runtime.call(`ghostty_terminal_scroll_viewport`, this.terminal, t),
      this.runtime.free(t, e.size));
  }
  isViewportActive() {
    return (
      this.ensureActive(),
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_terminal_get`, this.terminal, 32, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  scrollbarState() {
    this.ensureActive();
    let e = this.runtime.layout(`GhosttyTerminalScrollbar`);
    return (
      this.runtime.bytes(this.scrollbar, e.size).fill(0),
      this.runtime.call(`ghostty_terminal_get`, this.terminal, 9, this.scrollbar) === z
        ? {
            total: this.runtime.readField(this.scrollbar, `GhosttyTerminalScrollbar`, `total`),
            offset: this.runtime.readField(this.scrollbar, `GhosttyTerminalScrollbar`, `offset`),
            len: this.runtime.readField(this.scrollbar, `GhosttyTerminalScrollbar`, `len`),
          }
        : null
    );
  }
  isMouseTracking() {
    return (
      this.ensureActive(),
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_terminal_get`, this.terminal, 11, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  isMouseAnyEventTracking() {
    return (
      this.ensureActive(),
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_terminal_mode_get`, this.terminal, 1003, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  isSynchronizedOutput() {
    return (
      this.ensureActive(),
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_terminal_mode_get`, this.terminal, 2026, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  endSynchronizedOutput() {
    (this.ensureActive(),
      this.assertSuccess(
        `ghostty_terminal_mode_set`,
        this.runtime.call(`ghostty_terminal_mode_set`, this.terminal, 2026, 0),
      ));
  }
  isAlternateScreen() {
    return (
      this.ensureActive(),
      this.runtime.bytes(this.scratch, 4).fill(0),
      this.runtime.call(`ghostty_terminal_get`, this.terminal, 6, this.scratch) === z &&
        this.runtime.view(this.scratch, 4).getUint32(0, !0) === 1
    );
  }
  isApplicationCursorKeys() {
    return (
      this.ensureActive(),
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_terminal_mode_get`, this.terminal, 1, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  encodeKey(e, t = `press`) {
    (this.ensureActive(),
      this.runtime.call(`ghostty_key_encoder_setopt_from_terminal`, this.keyEncoder, this.terminal),
      this.runtime.call(
        `ghostty_key_event_set_action`,
        this.keyEvent,
        t === `release` ? 0 : e.repeat ? 2 : 1,
      ),
      this.runtime.call(`ghostty_key_event_set_key`, this.keyEvent, Ke(e)));
    let n =
      +!!e.shiftKey |
      (e.ctrlKey ? 2 : 0) |
      (e.altKey ? 4 : 0) |
      (e.metaKey ? 8 : 0) |
      (e.getModifierState(`CapsLock`) ? 16 : 0) |
      (e.getModifierState(`NumLock`) ? 32 : 0);
    (this.runtime.call(`ghostty_key_event_set_mods`, this.keyEvent, n),
      this.runtime.call(`ghostty_key_event_set_consumed_mods`, this.keyEvent, Je(e)),
      this.runtime.call(`ghostty_key_event_set_composing`, this.keyEvent, +!!e.isComposing),
      this.runtime.call(
        `ghostty_key_event_set_unshifted_codepoint`,
        this.keyEvent,
        Ye(e, this.keyboardLayoutMap),
      ));
    let r = e.key.length === 1 ? e.key : ``,
      i = at.encode(r),
      a = i.length === 0 ? 0 : this.runtime.alloc(i.length);
    (a !== 0 && this.runtime.bytes(a, i.length).set(i),
      this.runtime.call(`ghostty_key_event_set_utf8`, this.keyEvent, a, i.length));
    let o = this.runtime.call(`ghostty_wasm_alloc_usize`),
      s = this.encodeOutput(o, (e, t) =>
        this.runtime.call(`ghostty_key_encoder_encode`, this.keyEncoder, this.keyEvent, e, t, o),
      );
    return (
      this.runtime.call(`ghostty_wasm_free_usize`, o), a !== 0 && this.runtime.free(a, i.length), s
    );
  }
  encodePaste(e) {
    this.ensureActive();
    let t = at.encode(e);
    if (t.length === 0) return ``;
    let n = this.runtime.alloc(t.length);
    (this.runtime.bytes(n, t.length).set(t), (this.runtime.bytes(this.scratch, 1)[0] = 0));
    let r =
        this.runtime.call(`ghostty_terminal_mode_get`, this.terminal, 2004, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0,
      i = this.runtime.call(`ghostty_wasm_alloc_usize`),
      a = ``,
      o = this.runtime.call(`ghostty_paste_encode`, n, t.length, +!!r, 0, 0, i),
      s = this.runtime.view(i, 4).getUint32(0, !0);
    if (o === B && s > 0) {
      let e = this.runtime.alloc(s),
        o = this.runtime.call(`ghostty_paste_encode`, n, t.length, +!!r, e, s, i),
        c = this.runtime.view(i, 4).getUint32(0, !0);
      ((a = o === z ? it.decode(this.runtime.bytes(e, c)) : ``), this.runtime.free(e, s));
    }
    return (this.runtime.call(`ghostty_wasm_free_usize`, i), this.runtime.free(n, t.length), a);
  }
  encodeMouse(e) {
    (this.ensureActive(),
      this.runtime.call(
        `ghostty_mouse_encoder_setopt_from_terminal`,
        this.mouseEncoder,
        this.terminal,
      ));
    let t = this.runtime.layout(`GhosttyMouseEncoderSize`),
      n = this.runtime.alloc(t.size);
    for (let [r, i] of [
      [`size`, t.size],
      [`screen_width`, e.screenWidth],
      [`screen_height`, e.screenHeight],
      [`cell_width`, e.cellWidth],
      [`cell_height`, e.cellHeight],
      [`padding_top`, e.paddingTop],
      [`padding_bottom`, e.paddingBottom],
      [`padding_right`, e.paddingRight],
      [`padding_left`, e.paddingLeft],
    ])
      this.runtime.setField(n, `GhosttyMouseEncoderSize`, r, Math.max(0, Math.round(i)));
    (this.runtime.call(`ghostty_mouse_encoder_setopt`, this.mouseEncoder, 2, n),
      this.runtime.free(n, t.size),
      (this.runtime.bytes(this.scratch, 1)[0] = +!!e.anyButtonPressed),
      this.runtime.call(`ghostty_mouse_encoder_setopt`, this.mouseEncoder, 3, this.scratch),
      (this.runtime.bytes(this.scratch, 1)[0] = 1),
      this.runtime.call(`ghostty_mouse_encoder_setopt`, this.mouseEncoder, 4, this.scratch),
      this.runtime.call(
        `ghostty_mouse_event_set_action`,
        this.mouseEvent,
        e.action === `press` ? 0 : e.action === `release` ? 1 : 2,
      ),
      e.button === null
        ? this.runtime.call(`ghostty_mouse_event_clear_button`, this.mouseEvent)
        : this.runtime.call(`ghostty_mouse_event_set_button`, this.mouseEvent, e.button),
      this.runtime.call(`ghostty_mouse_event_set_mods`, this.mouseEvent, e.mods));
    let r = this.runtime.layout(`GhosttyMousePosition`),
      i = this.runtime.alloc(r.size),
      a = this.runtime.view(i, r.size);
    (a.setFloat32(r.fields.x.offset, e.x, !0),
      a.setFloat32(r.fields.y.offset, e.y, !0),
      this.runtime.call(`ghostty_mouse_event_set_position`, this.mouseEvent, i),
      this.runtime.free(i, r.size));
    let o = this.runtime.call(`ghostty_wasm_alloc_usize`),
      s = this.encodeOutput(o, (e, t) =>
        this.runtime.call(
          `ghostty_mouse_encoder_encode`,
          this.mouseEncoder,
          this.mouseEvent,
          e,
          t,
          o,
        ),
      );
    return (this.runtime.call(`ghostty_wasm_free_usize`, o), s);
  }
  setSelection(e, t) {
    this.ensureActive();
    let n = this.runtime.layout(`GhosttySelection`),
      r = this.runtime.layout(`GhosttyGridRef`).size,
      i = this.runtime.alloc(n.size),
      a = 0,
      o = 0;
    try {
      (this.runtime.setField(i, `GhosttySelection`, `size`, n.size),
        (a = this.gridRef(e.x, e.y, e.tag ?? 1)),
        (o = this.gridRef(t.x, t.y, t.tag ?? 1)));
      let r = n.fields.start,
        s = n.fields.end;
      (this.runtime.bytes(i + r.offset, r.size).set(this.runtime.bytes(a, r.size)),
        this.runtime.bytes(i + s.offset, s.size).set(this.runtime.bytes(o, s.size)),
        this.runtime.call(`ghostty_terminal_set`, this.terminal, 21, i));
    } finally {
      (this.runtime.free(a, r), this.runtime.free(o, r), this.runtime.free(i, n.size));
    }
  }
  selectAll() {
    this.ensureActive();
    let e = this.runtime.layout(`GhosttySelection`),
      t = this.runtime.alloc(e.size);
    try {
      if (
        (this.runtime.setField(t, `GhosttySelection`, `size`, e.size),
        this.runtime.call(`ghostty_terminal_select_all`, this.terminal, t) !== z)
      )
        return null;
      let n = this.pointFromGridRef(t + e.fields.start.offset, 2),
        r = this.pointFromGridRef(t + e.fields.end.offset, 2);
      return !n || !r
        ? null
        : (this.runtime.call(`ghostty_terminal_set`, this.terminal, 21, t), { start: n, end: r });
    } finally {
      this.runtime.free(t, e.size);
    }
  }
  selectWord(e, t) {
    return this.selectAt(`GhosttyTerminalSelectWordOptions`, `ghostty_terminal_select_word`, e, t);
  }
  selectLine(e, t) {
    return this.selectAt(`GhosttyTerminalSelectLineOptions`, `ghostty_terminal_select_line`, e, t);
  }
  hyperlinkAt(e, t) {
    this.ensureActive();
    let n = this.gridRef(e, t),
      r = this.runtime.call(`ghostty_wasm_alloc_usize`),
      i = this.runtime.call(`ghostty_grid_ref_hyperlink_uri`, n, 0, 0, r),
      a = this.runtime.view(r, 4).getUint32(0, !0),
      o = null;
    if (i === B && a > 0) {
      let e = this.runtime.alloc(a),
        t = this.runtime.call(`ghostty_grid_ref_hyperlink_uri`, n, e, a, r),
        i = this.runtime.view(r, 4).getUint32(0, !0);
      (t === z && i > 0 && (o = it.decode(this.runtime.bytes(e, i))), this.runtime.free(e, a));
    }
    return (
      this.runtime.call(`ghostty_wasm_free_usize`, r),
      this.runtime.free(n, this.runtime.layout(`GhosttyGridRef`).size),
      o
    );
  }
  clearSelection() {
    (this.ensureActive(), this.runtime.call(`ghostty_terminal_set`, this.terminal, 21, 0));
  }
  snapshot() {
    (this.ensureActive(),
      this.assertSuccess(
        `ghostty_render_state_update`,
        this.runtime.call(`ghostty_render_state_update`, this.renderState, this.terminal),
      ));
    let e = this.getU16(U.cols),
      t = this.getU16(U.rows),
      n = this.getU32(U.dirty),
      r = this.getColor(U.foreground, { r: 229, g: 231, b: 235 }),
      i = this.getColor(U.background, { r: 0, g: 0, b: 0 }),
      a = this.getBool(U.cursorHasValue) ? this.getColor(U.cursor, r) : r,
      o = this.getBool(U.cursorInViewport),
      s = this.getBool(U.cursorVisible) && o,
      c = o ? this.getU16(U.cursorX) : -1,
      l = o ? this.getU16(U.cursorY) : -1;
    (this.rows.length !== t || this.rows.some((t) => t.cells.length !== e)) &&
      (this.rows = Array.from({ length: t }, () => ({
        cells: Array.from({ length: e }, () => this.emptyCell(r, i)),
        text: ``,
        isWrapContinuation: !1,
        wrapsToNext: !1,
      })));
    let u = new Set();
    if (n !== 0) {
      this.assertSuccess(
        `ghostty_render_state_get(row iterator)`,
        this.runtime.call(
          `ghostty_render_state_get`,
          this.renderState,
          U.rowIterator,
          this.rowIteratorSlot,
        ),
      );
      let a = this.runtime.readPointer(this.rowIteratorSlot),
        o = 0;
      for (; o < t && this.runtime.call(`ghostty_render_state_row_iterator_next`, a) !== 0;)
        ((n === 2 || this.getRowBool(a, W.dirty)) &&
          ((this.rows[o] = this.readRow(a, e, r, i)),
          u.add(o),
          (this.runtime.bytes(this.scratch, 1)[0] = 0),
          this.runtime.call(`ghostty_render_state_row_set`, a, 0, this.scratch)),
          (o += 1));
      (this.runtime.view(this.scratch, 4).setUint32(0, 0, !0),
        this.runtime.call(`ghostty_render_state_set`, this.renderState, 0, this.scratch));
    }
    return {
      cols: e,
      rows: t,
      foreground: r,
      background: i,
      cursor: a,
      cursorX: c,
      cursorY: l,
      cursorVisible: s,
      cursorBlinking: this.getBool(U.cursorBlinking),
      cursorStyle: this.getU32(U.cursorStyle),
      dirtyRows: u,
      rowData: this.rows,
    };
  }
  selectionText() {
    this.ensureActive();
    let e = this.runtime.alloc(H),
      t = this.runtime.view(e, H);
    (t.setUint32(0, H, !0),
      t.setUint32(4, 0, !0),
      t.setUint8(8, 1),
      t.setUint8(9, 1),
      t.setUint32(12, 0, !0));
    let n = this.runtime.call(`ghostty_wasm_alloc_usize`),
      r = this.runtime.call(`ghostty_terminal_selection_format_buf`, this.terminal, e, 0, 0, n),
      i = this.runtime.view(n, 4).getUint32(0, !0),
      a = ``;
    if (r === B && i > 0) {
      let t = this.runtime.alloc(i),
        r = this.runtime.call(`ghostty_terminal_selection_format_buf`, this.terminal, e, t, i, n),
        o = this.runtime.view(n, 4).getUint32(0, !0);
      (r === z && (a = it.decode(this.runtime.bytes(t, o))), this.runtime.free(t, i));
    }
    return (this.runtime.call(`ghostty_wasm_free_usize`, n), this.runtime.free(e, H), a);
  }
  viewportPointToScreen(e, t) {
    return this.convertPoint(e, t, 1, 2);
  }
  screenPointToViewport(e, t) {
    return this.convertPoint(e, t, 2, 1);
  }
  convertPoint(e, t, n, r) {
    this.ensureActive();
    let i = this.gridRef(e, t, n),
      a = this.pointFromGridRef(i, r);
    return (this.runtime.free(i, this.runtime.layout(`GhosttyGridRef`).size), a);
  }
  dispose() {
    if (!this.disposed) {
      if (
        ((this.disposed = !0),
        this.mouseEvent && this.runtime.call(`ghostty_mouse_event_free`, this.mouseEvent),
        this.mouseEncoder && this.runtime.call(`ghostty_mouse_encoder_free`, this.mouseEncoder),
        this.keyEvent && this.runtime.call(`ghostty_key_event_free`, this.keyEvent),
        this.keyEncoder && this.runtime.call(`ghostty_key_encoder_free`, this.keyEncoder),
        this.rowCellsSlot)
      ) {
        let e = this.runtime.readPointer(this.rowCellsSlot);
        e && this.runtime.call(`ghostty_render_state_row_cells_free`, e);
      }
      if (this.rowIteratorSlot) {
        let e = this.runtime.readPointer(this.rowIteratorSlot);
        e && this.runtime.call(`ghostty_render_state_row_iterator_free`, e);
      }
      (this.renderState && this.runtime.call(`ghostty_render_state_free`, this.renderState),
        this.terminal &&
          (this.ptyWriterId && this.runtime.detachPtyWriter(this.terminal, this.ptyWriterId),
          this.runtime.call(`ghostty_terminal_free`, this.terminal)),
        this.style && this.runtime.free(this.style, this.runtime.layout(`GhosttyStyle`).size),
        this.cellQuery && this.runtime.free(this.cellQuery, K.size),
        this.scrollbar &&
          this.runtime.free(this.scrollbar, this.runtime.layout(`GhosttyTerminalScrollbar`).size),
        this.scratch && this.runtime.free(this.scratch, 16),
        this.graphemes && this.runtime.free(this.graphemes, this.graphemeCapacity));
      for (let e of [
        this.mouseEventSlot,
        this.mouseEncoderSlot,
        this.keyEventSlot,
        this.keyEncoderSlot,
        this.rowCellsSlot,
        this.rowIteratorSlot,
        this.renderStateSlot,
        this.terminalSlot,
      ])
        this.runtime.freeOpaque(e);
    }
  }
  encodeOutput(e, t) {
    let n = t(0, 0),
      r = this.runtime.view(e, 4).getUint32(0, !0);
    if ((n === z && r === 0) || n !== B || r === 0) return ``;
    let i = this.runtime.alloc(r),
      a = t(i, r),
      o = this.runtime.view(e, 4).getUint32(0, !0),
      s = a === z ? it.decode(this.runtime.bytes(i, o)) : ``;
    return (this.runtime.free(i, r), s);
  }
  readRow(e, t, n, r) {
    this.assertSuccess(
      `ghostty_render_state_row_get(raw)`,
      this.runtime.call(`ghostty_render_state_row_get`, e, W.raw, this.scratch),
    );
    let i = this.runtime.view(this.scratch, 8).getBigUint64(0, !0);
    ((this.runtime.bytes(this.scratch + 8, 1)[0] = 0),
      this.assertSuccess(
        `ghostty_row_get(wrap continuation)`,
        this.runtime.call(`ghostty_row_get`, i, 2, this.scratch + 8),
      ));
    let a = this.runtime.bytes(this.scratch + 8, 1)[0] !== 0;
    ((this.runtime.bytes(this.scratch + 8, 1)[0] = 0),
      this.assertSuccess(
        `ghostty_row_get(wrap)`,
        this.runtime.call(`ghostty_row_get`, i, 1, this.scratch + 8),
      ));
    let o = this.runtime.bytes(this.scratch + 8, 1)[0] !== 0;
    this.assertSuccess(
      `ghostty_render_state_row_get(cells)`,
      this.runtime.call(`ghostty_render_state_row_get`, e, W.cells, this.rowCellsSlot),
    );
    let s = this.runtime.readPointer(this.rowCellsSlot),
      { size: c, fields: l } = this.runtime.layout(`GhosttyStyle`),
      u = [];
    for (; u.length < t && this.runtime.call(`ghostty_render_state_row_cells_next`, s) !== 0;) {
      (this.runtime.bytes(this.style, c).fill(0),
        this.runtime.setField(this.style, `GhosttyStyle`, `size`, c));
      let e = this.runtime.call(
          `ghostty_render_state_row_cells_get_multi`,
          s,
          5,
          this.cellQuery + K.keys,
          this.cellQuery + K.values,
          this.cellQuery + K.written,
        ),
        t = this.runtime.memoryDataView(),
        i = t.getUint32(this.cellQuery + K.written, !0);
      i < 3 && this.assertSuccess(`ghostty_render_state_row_cells_get_multi`, e);
      let a = t.getUint32(this.cellQuery + K.graphemesLength, !0),
        o = t.getUint8(this.cellQuery + K.selected) !== 0,
        d = i >= 4 ? this.readColor(this.cellQuery + K.background) : r,
        f =
          i === 5
            ? this.readColor(this.cellQuery + K.foreground)
            : i === 3
              ? this.getCellColor(s, G.foreground, n)
              : n,
        p = ``;
      if (a > 0) {
        let e = a * 4;
        if (e > this.graphemeCapacity) {
          let t = Math.max(e, this.graphemeCapacity * 2),
            n = this.runtime.alloc(t);
          (this.runtime.free(this.graphemes, this.graphemeCapacity),
            (this.graphemes = n),
            (this.graphemeCapacity = t));
        }
        this.runtime.call(`ghostty_render_state_row_cells_get`, s, G.graphemes, this.graphemes) ===
          z && (p = ct(this.runtime.view(this.graphemes, e), a));
      }
      let m = 0;
      if (p.length === 0 && u.at(-1)?.text.length) {
        this.assertSuccess(
          `ghostty_render_state_row_cells_get(raw)`,
          this.runtime.call(`ghostty_render_state_row_cells_get`, s, G.raw, this.scratch),
        );
        let e = this.runtime.view(this.scratch, 8).getBigUint64(0, !0);
        (this.runtime.view(this.scratch + 8, 4).setUint32(0, 0, !0),
          this.assertSuccess(
            `ghostty_cell_get(wide)`,
            this.runtime.call(`ghostty_cell_get`, e, nt.wide, this.scratch + 8),
          ),
          (m = this.runtime.view(this.scratch + 8, 4).getUint32(0, !0)));
      }
      let h = this.runtime.memoryDataView();
      (h.getUint8(this.style + l.inverse.offset) !== 0 && ([f, d] = [d, f]),
        h.getUint8(this.style + l.faint.offset) !== 0 && (f = ot(f, d)),
        u.push({
          text: p,
          wide: m,
          foreground: f,
          background: d,
          bold: h.getUint8(this.style + l.bold.offset) !== 0,
          italic: h.getUint8(this.style + l.italic.offset) !== 0,
          invisible: h.getUint8(this.style + l.invisible.offset) !== 0,
          strikethrough: h.getUint8(this.style + l.strikethrough.offset) !== 0,
          overline: h.getUint8(this.style + l.overline.offset) !== 0,
          underline: h.getInt32(this.style + l.underline.offset, !0) !== 0,
          selected: o,
        }));
    }
    for (; u.length < t;) u.push(this.emptyCell(n, r));
    return {
      cells: u,
      text: u
        .map((e) => e.text || ` `)
        .join(``)
        .trimEnd(),
      isWrapContinuation: a,
      wrapsToNext: o,
    };
  }
  gridRef(e, t, n = 1) {
    let r = this.runtime.layout(`GhosttyPoint`),
      i = this.runtime.alloc(r.size);
    this.runtime.setField(i, `GhosttyPoint`, `tag`, n);
    let a = r.fields.value,
      o = a.offset,
      s = this.runtime.view(i + o, a.size);
    (s.setUint16(0, Math.max(0, e), !0), s.setUint32(4, Math.max(0, t), !0));
    let c = this.runtime.layout(`GhosttyGridRef`).size,
      l = this.runtime.alloc(c);
    this.runtime.setField(l, `GhosttyGridRef`, `size`, c);
    let u = this.runtime.call(`ghostty_terminal_grid_ref`, this.terminal, i, l);
    return (
      this.runtime.free(i, r.size),
      u !== z && (this.runtime.free(l, c), this.assertSuccess(`ghostty_terminal_grid_ref`, u)),
      l
    );
  }
  selectAt(e, t, n, r) {
    this.ensureActive();
    let i = this.runtime.layout(e),
      a = this.runtime.layout(`GhosttySelection`),
      o = this.runtime.alloc(i.size),
      s = 0,
      c = 0,
      l = null;
    try {
      (this.runtime.setField(o, e, `size`, i.size), (s = this.gridRef(n, r)));
      let u = i.fields.ref;
      if (
        (this.runtime.bytes(o + u.offset, u.size).set(this.runtime.bytes(s, u.size)),
        (c = this.runtime.alloc(a.size)),
        this.runtime.setField(c, `GhosttySelection`, `size`, a.size),
        this.runtime.call(t, this.terminal, o, c) === z)
      ) {
        let e = c + a.fields.start.offset,
          t = c + a.fields.end.offset,
          n = this.pointFromGridRef(e, 1),
          r = this.pointFromGridRef(t, 1),
          i = this.pointFromGridRef(e, 2),
          o = this.pointFromGridRef(t, 2);
        (n && r && i && o && (l = { viewport: { start: n, end: r }, screen: { start: i, end: o } }),
          this.runtime.call(`ghostty_terminal_set`, this.terminal, 21, c));
      }
    } finally {
      (this.runtime.free(c, a.size),
        this.runtime.free(s, this.runtime.layout(`GhosttyGridRef`).size),
        this.runtime.free(o, i.size));
    }
    return l;
  }
  pointFromGridRef(e, t) {
    let n = this.runtime.layout(`GhosttyPointCoordinate`),
      r = this.runtime.alloc(n.size),
      i =
        this.runtime.call(`ghostty_terminal_point_from_grid_ref`, this.terminal, e, t, r) === z
          ? {
              x: this.runtime.readField(r, `GhosttyPointCoordinate`, `x`),
              y: this.runtime.readField(r, `GhosttyPointCoordinate`, `y`),
            }
          : null;
    return (this.runtime.free(r, n.size), i);
  }
  getU16(e) {
    return (
      this.runtime.bytes(this.scratch, 2).fill(0),
      this.assertSuccess(
        `ghostty_render_state_get`,
        this.runtime.call(`ghostty_render_state_get`, this.renderState, e, this.scratch),
      ),
      this.runtime.view(this.scratch, 2).getUint16(0, !0)
    );
  }
  getU32(e) {
    return (
      this.runtime.bytes(this.scratch, 4).fill(0),
      this.assertSuccess(
        `ghostty_render_state_get`,
        this.runtime.call(`ghostty_render_state_get`, this.renderState, e, this.scratch),
      ),
      this.runtime.view(this.scratch, 4).getUint32(0, !0)
    );
  }
  getBool(e) {
    return (
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.assertSuccess(
        `ghostty_render_state_get`,
        this.runtime.call(`ghostty_render_state_get`, this.renderState, e, this.scratch),
      ),
      this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  getColor(e, t) {
    return (
      this.runtime.bytes(this.scratch, 3).fill(0),
      this.runtime.call(`ghostty_render_state_get`, this.renderState, e, this.scratch) === z
        ? this.readColor(this.scratch)
        : t
    );
  }
  getRowBool(e, t) {
    return (
      (this.runtime.bytes(this.scratch, 1)[0] = 0),
      this.runtime.call(`ghostty_render_state_row_get`, e, t, this.scratch) === z &&
        this.runtime.bytes(this.scratch, 1)[0] !== 0
    );
  }
  getCellColor(e, t, n) {
    return (
      this.runtime.bytes(this.scratch, 3).fill(0),
      this.runtime.call(`ghostty_render_state_row_cells_get`, e, t, this.scratch) === z
        ? this.readColor(this.scratch)
        : n
    );
  }
  readColor(e) {
    let t = this.runtime.memoryDataView();
    return { r: t.getUint8(e), g: t.getUint8(e + 1), b: t.getUint8(e + 2) };
  }
  emptyCell(e, t) {
    return {
      text: ``,
      wide: 0,
      foreground: e,
      background: t,
      bold: !1,
      italic: !1,
      invisible: !1,
      strikethrough: !1,
      overline: !1,
      underline: !1,
      selected: !1,
    };
  }
  assertSuccess(e, t) {
    if (t !== z) throw Error(`${e} failed with result ${t}`);
  }
  ensureActive() {
    if (this.disposed) throw Error(`libghostty-vt terminal has been disposed`);
  }
};
function q(e, t) {
  return st(e, t);
}
var J = `rgba(72, 122, 191, 0.35)`,
  Y = ``,
  ut = ``;
function X(e) {
  return `rgb(${e.r}, ${e.g}, ${e.b})`;
}
function dt(e, t) {
  return (
    q(e.foreground, t.foreground) &&
    e.bold === t.bold &&
    e.italic === t.italic &&
    e.invisible === t.invisible
  );
}
function ft(e) {
  return e === Y || e === ut;
}
function Z(e, t, n, r, i) {
  let a = n + i.width,
    [o, s] = t === Y ? [n, a] : [a, n];
  (e.beginPath(),
    e.moveTo(o, r),
    e.lineTo(s, r + i.height / 2),
    e.lineTo(o, r + i.height),
    e.closePath(),
    e.fill());
}
function pt(e, t, n) {
  let r = t + 1;
  for (; r < e.length;) {
    let t = e[r];
    if (!t) break;
    if (t.wide === rt.spacerTail) r += 1;
    else {
      if (t.text.length === 0 || ft(t.text) || !n(t)) break;
      r += 1;
    }
  }
  return r;
}
function mt(e, t, n) {
  return `${e.italic ? `italic` : `normal`} ${e.bold ? `700` : `400`} ${t}px ${n}`;
}
function ht(e, t, n) {
  e.font = `normal 400 ${t}px ${n}`;
  let r = e.measureText(`M`),
    i = e.measureText(`Mg`),
    a = i.actualBoundingBoxAscent || t,
    o = a + i.actualBoundingBoxDescent,
    s = Math.max(1, Math.round(t * 1.35), Math.ceil(o));
  return { width: Math.max(1, r.width), height: s, baseline: Math.round((s - o) / 2 + a) };
}
function gt(e, t, n, r) {
  return {
    cols: Math.max(1, Math.floor((e - r * 2) / n.width)),
    rows: Math.max(1, Math.floor((t - r * 2) / n.height)),
  };
}
function _t(e) {
  let {
      context: t,
      snapshot: n,
      metrics: r,
      fontSize: i,
      fontFamily: a,
      padding: o,
      forceFull: s,
      cursorOn: c,
      previousCursorY: l,
    } = e,
    u = e.focused ?? !0,
    d = e.selectionBackground ?? J,
    f = e.hoveredLinkRange ?? null,
    p = e.originY ?? o,
    m = s ? Array.from({ length: n.rows }, (e, t) => t) : [...n.dirtyRows];
  (l != null && l >= 0 && !m.includes(l) && m.push(l),
    n.cursorVisible && n.cursorY >= 0 && !m.includes(n.cursorY) && m.push(n.cursorY),
    s &&
      (t.save(),
      t.resetTransform(),
      (t.fillStyle = X(n.background)),
      t.fillRect(0, 0, t.canvas.width, t.canvas.height),
      t.restore()),
    (t.textBaseline = `alphabetic`));
  for (let e of m) {
    let s = n.rowData[e];
    if (!s) continue;
    let c = p + e * r.height;
    ((t.fillStyle = X(n.background)), t.fillRect(o, c, n.cols * r.width, r.height));
    let l = 0;
    for (; l < s.cells.length;) {
      let e = s.cells[l];
      if (!e) break;
      let i = l + 1;
      for (; i < s.cells.length;) {
        let t = s.cells[i];
        if (!t || t.selected !== e.selected || !q(t.background, e.background)) break;
        i += 1;
      }
      if (e.selected || !q(e.background, n.background)) {
        let a = o + l * r.width,
          s = (i - l) * r.width;
        (q(e.background, n.background) ||
          ((t.fillStyle = X(e.background)), t.fillRect(a, c, s, r.height)),
          e.selected && ((t.fillStyle = d), t.fillRect(a, c, s, r.height)));
      }
      l = i;
    }
    let u = 0;
    for (; u < s.cells.length;) {
      let e = s.cells[u];
      if (!e) break;
      if (e.text.length === 0) {
        u += 1;
        continue;
      }
      if (ft(e.text)) {
        (e.invisible || ((t.fillStyle = X(e.foreground)), Z(t, e.text, o + u * r.width, c, r)),
          (u += 1));
        continue;
      }
      let n = pt(s.cells, u, (t) => dt(t, e)),
        l = s.cells
          .slice(u, n)
          .map((e) => e.text)
          .join(``);
      (!e.invisible &&
        l.trim().length > 0 &&
        (t.save(),
        t.beginPath(),
        t.rect(o + u * r.width, c, (n - u) * r.width, r.height),
        t.clip(),
        (t.font = mt(e, i, a)),
        (t.fillStyle = X(e.foreground)),
        t.fillText(l, o + u * r.width, c + r.baseline, (n - u) * r.width),
        t.restore()),
        (u = n));
    }
    for (let n = 0; n < s.cells.length; n += 1) {
      let i = s.cells[n],
        a =
          f !== null &&
          e >= f.start.y &&
          e <= f.end.y &&
          (e > f.start.y || n >= f.start.x) &&
          (e < f.end.y || n <= f.end.x);
      if (!i || (!i.underline && !i.strikethrough && !i.overline && !a)) continue;
      t.fillStyle = X(i.foreground);
      let l = o + n * r.width;
      ((i.underline || a) && t.fillRect(l, c + r.height - 2, r.width, 1),
        i.strikethrough && t.fillRect(l, c + Math.floor(r.height * 0.55), r.width, 1),
        i.overline && t.fillRect(l, c + 1, r.width, 1));
    }
  }
  if (c && n.cursorVisible && n.cursorX >= 0 && n.cursorY >= 0) {
    let e = o + n.cursorX * r.width,
      s = p + n.cursorY * r.height;
    if (((t.fillStyle = X(n.cursor)), !u))
      ((t.strokeStyle = X(n.cursor)), t.strokeRect(e + 0.5, s + 0.5, r.width - 1, r.height - 1));
    else if (n.cursorStyle === 0) t.fillRect(e, s, 2, r.height);
    else if (n.cursorStyle === 2) t.fillRect(e, s + r.height - 2, r.width, 2);
    else if (n.cursorStyle === 3)
      ((t.strokeStyle = X(n.cursor)), t.strokeRect(e + 0.5, s + 0.5, r.width - 1, r.height - 1));
    else {
      t.fillRect(e, s, r.width, r.height);
      let o = n.rowData[n.cursorY]?.cells[n.cursorX];
      o?.text &&
        ((t.fillStyle = X(n.background)),
        ft(o.text)
          ? Z(t, o.text, e, s, r)
          : ((t.font = mt(o, i, a)), t.fillText(o.text, e, s + r.baseline, r.width)));
    }
  }
}
var vt = `/assets/SymbolsNerdFontMono-Regular-aK5vsLov.woff2`,
  yt = 12,
  bt = 6,
  xt = 32,
  St = `"Symbols Nerd Font Mono", "Symbols Nerd Font", "JetBrainsMono Nerd Font", "JetBrainsMono NF", "FiraCode Nerd Font", "Hack Nerd Font", "MesloLGS NF", "CaskaydiaCove Nerd Font", "PowerlineSymbols", monospace`,
  Ct = `"SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", ` + St,
  Q = 4,
  wt = 18,
  Tt = 500,
  Et = 500,
  Dt = `iMW0@# .`,
  Ot = [`normal 400`, `normal 700`, `italic 400`, `italic 700`],
  kt = null;
function At() {
  return (
    kt === null &&
      (kt = (async () => {
        try {
          let e = new FontFace(`Symbols Nerd Font Mono`, `url(${vt})`);
          document.fonts.add(await e.load());
        } catch {}
      })()),
    kt
  );
}
function jt(e) {
  return e
    .split(`,`)
    .map((e) => {
      let t = e.trim();
      return t.length === 0
        ? ``
        : /^(['"]).*\1$/.test(t) || /^[a-zA-Z][a-zA-Z0-9-]*$/.test(t)
          ? t
          : `"${t.replaceAll(`"`, ``)}"`;
    })
    .filter((e) => e.length > 0)
    .join(`, `);
}
function Mt(e) {
  let t = e === void 0 ? `` : jt(e);
  return t.length === 0 ? Ct : `${t}, ${St}`;
}
function Nt(e) {
  let t = e === void 0 ? `` : jt(e);
  return t.length === 0 || !Pe(t) ? Ct : Mt(t);
}
async function Pt(e, t, n) {
  let r = Mt(e),
    i = n?.load ?? ((e, t) => document.fonts.load(e, t));
  try {
    await Promise.all(Ot.map((e) => i(`${e} ${t}px ${r}`, Dt)));
  } catch {}
  return (n?.resolve ?? Nt)(e);
}
function Ft(e) {
  return e === void 0 || !Number.isFinite(e) ? yt : Math.max(bt, Math.min(xt, Math.round(e)));
}
function It(e) {
  return e.focused && e.cursorBlinking && e.cursorVisible && !e.reducedMotion;
}
function Lt(e, t, n, r, i) {
  if (!i) return t;
  let a = e - t * 2 - n * r;
  return t + Math.max(0, a);
}
function Rt(e, t) {
  let n = Math.max(0, e.total),
    r = Math.max(0, Math.min(e.len, n)),
    i = Math.max(0, n - r);
  if (t <= 0 || r <= 0 || i === 0) return null;
  let a = Math.min(t, Math.max(wt, (t * r) / n));
  return {
    thumbHeight: a,
    thumbTop: Math.max(0, t - a) * (Math.max(0, Math.min(e.offset, i)) / i),
    maxOffset: i,
  };
}
function zt(e, t, n, r) {
  let i = Rt(e, t);
  if (i === null) return 0;
  let a = Math.max(0, t - i.thumbHeight);
  if (a === 0) return 0;
  let o = Math.max(0, Math.min(n - r, a));
  return Math.round((o / a) * i.maxOffset);
}
function Bt(e) {
  let {
      bounds: t,
      clientX: n,
      clientY: r,
      cols: i,
      rows: a,
      metrics: o,
      padding: s,
      originY: c,
    } = e,
    l = n - t.left - s,
    u = r - t.top - c;
  return l < 0 || u < 0 || l >= i * o.width || u >= a * o.height
    ? null
    : { x: Math.floor(l / o.width), y: Math.floor(u / o.height) };
}
function Vt(e, t) {
  let n = e.cells.map((e) => e.text || ` `).join(``);
  return t ? n.trimEnd() : n;
}
function Ht(e, t) {
  let n = 0;
  for (let r = 0; r < t; r += 1) n += e.cells[r]?.text.length || 1;
  return n;
}
function Ut(e, t) {
  return (
    t?.text === e.text &&
    t.range.start.x === e.range.start.x &&
    t.range.start.y === e.range.start.y &&
    t.range.end.x === e.range.end.x &&
    t.range.end.y === e.range.end.y
  );
}
function Wt(e, t) {
  for (let n = 0; n < e.cells.length; n += 1) if (t < Ht(e, n + 1)) return n;
  return Math.max(0, e.cells.length - 1);
}
function Gt(e, t, n) {
  let r = Oe(t + 1, (t) => {
    let n = e[t];
    return n ? { isWrapped: n.isWrapContinuation, translateToString: (e = !1) => Vt(n, e) } : null;
  });
  if (!r) return null;
  let i = r.segments[0];
  if (i && e[i.bufferLineNumber - 1]?.isWrapContinuation) return null;
  let a = r.segments.find((e) => e.bufferLineNumber === t + 1),
    o = e[t];
  if (!a || !o) return null;
  let s = r.segments.at(-1),
    c = s ? e[s.bufferLineNumber - 1] : void 0,
    l = c !== void 0 && c.wrapsToNext,
    u = a.startIndex + Ht(o, n);
  for (let t of De(r.text))
    if (u >= t.start && u < t.end) {
      if (t.end === r.text.length && l) return null;
      let n = r.segments.find((e) => t.start >= e.startIndex && t.start < e.endIndex),
        i = r.segments.find((e) => t.end - 1 >= e.startIndex && t.end - 1 < e.endIndex),
        a = n ? e[n.bufferLineNumber - 1] : void 0,
        o = i ? e[i.bufferLineNumber - 1] : void 0;
      return !n || !i || !a || !o
        ? null
        : {
            text: t.text,
            range: {
              start: { x: Wt(a, t.start - n.startIndex), y: n.bufferLineNumber - 1 },
              end: { x: Wt(o, t.end - 1 - i.startIndex), y: i.bufferLineNumber - 1 },
            },
          };
    }
  return null;
}
function Kt(e, t = navigator.platform) {
  let n = e.key.toLowerCase();
  return n === `insert` && !h(t)
    ? e.ctrlKey && !e.shiftKey && !e.metaKey
    : n === `c`
      ? h(t)
        ? e.metaKey
        : e.ctrlKey
      : !1;
}
function qt(e, t) {
  ((e.value = t), t.length !== 0 && e.select());
}
function Jt(e, t) {
  t.length !== 0 && e.value === t && (e.value = ``);
}
function Yt(e, t) {
  return e.length === 0 || !t
    ? { preventDefault: !1, claimWriteFallback: !1 }
    : (t.setData(`text/plain`, e), { preventDefault: !0, claimWriteFallback: !0 });
}
function Xt(e, t = navigator.platform) {
  let n = e.key.toLowerCase();
  return n === `insert` && !h(t)
    ? e.shiftKey && !e.ctrlKey && !e.metaKey
    : n === `v`
      ? h(t)
        ? e.metaKey
        : e.ctrlKey && e.shiftKey
      : !1;
}
function Zt() {
  return /linux|bsd/i.test(navigator.platform);
}
function Qt(e) {
  return (
    e.inputType === `` ||
    e.inputType === `insertCompositionText` ||
    e.inputType === `insertFromComposition`
  );
}
function $t(e, t) {
  return e.isComposing || t || e.key === `Process` || e.keyCode === 229;
}
function en(e) {
  return e.getModifierState(`AltGraph`) && [...e.key].length === 1;
}
function tn(e, t) {
  return e && !t.shiftKey && !t.ctrlKey && !t.metaKey;
}
function nn(e, t, n) {
  let r = e === `motion` ? t : ``;
  return { send: t.length > 0 && (e !== `motion` || t !== n), nextMotionData: r };
}
function rn(e, t, n) {
  return { tracking: t, motionData: e === t ? n : `` };
}
function an(e, t, n, r) {
  let i =
      r + (e.deltaMode === 1 ? e.deltaY * t : e.deltaMode === 2 ? e.deltaY * n * t : e.deltaY) / t,
    a = Math.trunc(i);
  return { rows: a, remainder: i - a };
}
var on = 50;
function sn(e, t, n) {
  let r = e < t ? e - t : e > n ? e - n : 0;
  if (r === 0) return 0;
  let i = Math.max(-1, Math.min(1, r / on));
  return Math.sign(i) + Math.round(i * 14);
}
function cn(e, t) {
  return e === 0
    ? ``
    : (e < 0 ? (t ? `\x1BOA` : `\x1B[A`) : t ? `\x1BOB` : `\x1B[B`).repeat(Math.abs(e));
}
function ln(e) {
  switch (e) {
    case 0:
      return 1;
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 4;
    case 4:
      return 5;
    default:
      return null;
  }
}
var un = 4;
function dn(e, t) {
  return {
    count:
      e !== null &&
      t.timeStamp - e.time <= 500 &&
      Math.hypot(t.clientX - e.x, t.clientY - e.y) <= un
        ? e.count >= 3
          ? 1
          : e.count + 1
        : 1,
    time: t.timeStamp,
    x: t.clientX,
    y: t.clientY,
  };
}
var fn = class e {
    canvas;
    input;
    scrollbar;
    cols = 1;
    rows = 1;
    mount;
    context;
    core;
    options;
    visible;
    hasSize = !1;
    metrics;
    fontFamily;
    requestedFontFamily;
    fontSize;
    fontEpoch = 0;
    pendingFontEpoch = null;
    stopObservingResize;
    scrollbarThumb;
    snapshot = null;
    frame = 0;
    synchronizedRenderTimer = null;
    cursorTimer = null;
    compositionInputToSuppress = null;
    compositionSuppressionTimer = null;
    cursorOn = !0;
    renderedCursorY = null;
    forceFullRender = !0;
    scrollbarDirty = !0;
    scrollbarState = null;
    scrollbarPointerId = null;
    scrollbarPointerOffset = 0;
    disposed = !1;
    resizeNotifyTimer = null;
    originY = Q;
    mountHeight = 0;
    selectionEnd = null;
    selectionAnchorScreen = null;
    selectionEndScreen = null;
    selectionMode = `cell`;
    selectionBase = null;
    selectionScrollTimer = null;
    selectionScrollDelta = 0;
    selectionPointer = null;
    mouseReportingPointerId = null;
    mouseReportingButton = null;
    linkActivationPointerId = null;
    linkActivationLink = null;
    linkActivationOrigin = null;
    hoveredLink = null;
    hoverPointer = null;
    selectionClickSequence = null;
    selectionMoved = !1;
    composing = !1;
    focused = !1;
    resizeNotified = !1;
    canvasConfigured = !1;
    canvasDevicePixelRatio = 0;
    pendingCanvasConfiguration = null;
    theme;
    encodedKeyCodes = new Set();
    pasteShortcutToken = 0;
    pasteShortcutGesture = null;
    copyShortcutToken = 0;
    clearSelectionAfterCopy = !1;
    primedCopySelection = ``;
    wheelRemainder = 0;
    touchScroll = null;
    lastMouseMotionData = ``;
    mouseAnyEventTracking = !1;
    dprMedia = null;
    reducedMotionMedia = window.matchMedia?.(`(prefers-reduced-motion: reduce)`);
    inputLeft = -1;
    inputTop = -1;
    constructor(e, t, n, r, i, a, o, s, c, l) {
      ((this.mount = e),
        (this.canvas = t),
        (this.input = n),
        (this.scrollbar = r),
        (this.scrollbarThumb = i),
        (this.context = a),
        (this.core = o),
        (this.mouseAnyEventTracking = o.isMouseAnyEventTracking()),
        (this.metrics = s),
        (this.options = l),
        (this.visible = l.visible ?? !0),
        (this.theme = l.theme),
        (this.fontFamily = c),
        (this.requestedFontFamily = l.font?.family),
        (this.fontSize = Ft(l.font?.size)),
        this.installEvents(),
        this.watchDevicePixelRatio(),
        this.reducedMotionMedia?.addEventListener(`change`, this.onReducedMotionChange),
        document.fonts.addEventListener(`loadingdone`, this.onFontsLoaded),
        (this.stopObservingResize = pe(e, () => this.fit())));
    }
    static async create(t, n) {
      let r = document.createElement(`canvas`);
      ((r.className = `block size-full cursor-text`),
        (r.style.touchAction = `pan-x pinch-zoom`),
        r.setAttribute(`aria-hidden`, `true`));
      let i = document.createElement(`textarea`);
      ((i.className = `t3-ghostty-input`),
        i.setAttribute(`aria-label`, `Terminal input`),
        (i.autocapitalize = `off`),
        (i.autocomplete = `off`),
        (i.spellcheck = !1),
        (i.style.cssText = `position:absolute;left:4px;top:4px;width:1px;height:1px;opacity:0;padding:0;border:0;resize:none;pointer-events:none;`));
      let a = document.createElement(`div`);
      ((a.className = `group absolute top-1 right-px bottom-1 z-1 w-[var(--app-scrollbar-width)] cursor-default touch-none`),
        a.setAttribute(`role`, `scrollbar`),
        a.setAttribute(`aria-label`, `Terminal scrollback`),
        a.setAttribute(`aria-orientation`, `vertical`),
        (a.tabIndex = 0),
        (a.hidden = !0));
      let o = document.createElement(`div`);
      ((o.className = `absolute inset-x-px top-0 rounded-[3px] bg-[var(--app-scrollbar-thumb)] transition-[background-color] duration-[120ms] ease-[ease-out] group-hover:bg-[var(--app-scrollbar-thumb-hover)] group-focus-visible:bg-[var(--app-scrollbar-thumb-hover)]`),
        a.append(o),
        t.replaceChildren(r, i, a));
      let s = r.getContext(`2d`, { alpha: !1 });
      if (!s) throw Error(`Canvas 2D is unavailable`);
      ((s.fillStyle = `rgb(${n.theme.background.r}, ${n.theme.background.g}, ${n.theme.background.b})`),
        s.fillRect(0, 0, r.width, r.height));
      let c = Ft(n.font?.size);
      try {
        await At();
      } catch {}
      let l = await Pt(n.font?.family, c),
        u = ht(s, c, l),
        d = gt(t.clientWidth, t.clientHeight, u, Q),
        f = await lt.create(d.cols, d.rows, u.width, u.height, n.theme, n.onData),
        p = new e(t, r, i, a, o, s, f, u, l, n);
      return (p.fit(), p);
    }
    setVisible(e) {
      this.disposed ||
        this.visible === e ||
        ((this.visible = e),
        (this.cursorOn = !0),
        (this.forceFullRender = !0),
        (this.scrollbarDirty = !0),
        e ? this.fit() : (this.cancelRender(), this.setSelectionAutoscroll(0)));
    }
    write(e) {
      this.disposed ||
        (this.core.write(
          e,
          this.synchronizedRenderTimer === null
            ? void 0
            : () => this.cancelSynchronizedRenderTimer(),
        ),
        this.synchronizeMouseTrackingState(),
        (this.cursorOn = !0),
        (this.scrollbarDirty = !0),
        this.requestRender());
    }
    resetAndWrite(e) {
      this.disposed ||
        (this.cancelSynchronizedRenderTimer(),
        (this.lastMouseMotionData = ``),
        this.core.resetAndWrite(e),
        this.synchronizeMouseTrackingState(),
        (this.cursorOn = !0),
        (this.forceFullRender = !0),
        (this.scrollbarDirty = !0),
        this.requestRender());
    }
    setTheme(e) {
      this.disposed ||
        ((this.theme = e),
        this.core.setTheme(e),
        (this.forceFullRender = !0),
        this.requestRender());
    }
    refreshLinkActivation() {
      this.disposed || this.refreshHoveredLink();
    }
    async setFont(e) {
      if (this.disposed) return;
      let t = Ft(e.size),
        n = ++this.fontEpoch;
      this.pendingFontEpoch = n;
      let r = await Pt(e.family, t);
      this.disposed ||
        n !== this.fontEpoch ||
        ((this.pendingFontEpoch = null),
        (this.fontFamily = r),
        (this.requestedFontFamily = e.family),
        (this.fontSize = t),
        this.applyFontMetrics());
    }
    applyFontMetrics() {
      ((this.metrics = ht(this.context, this.fontSize, this.fontFamily)),
        this.core.resize(this.cols, this.rows, this.metrics.width, this.metrics.height),
        (this.inputLeft = -1),
        (this.inputTop = -1),
        (this.forceFullRender = !0),
        (this.scrollbarDirty = !0),
        this.fit(),
        this.requestRender());
    }
    onReducedMotionChange = () => {
      this.disposed || ((this.cursorOn = !0), this.requestRender());
    };
    onFontsLoaded = () => {
      if (this.disposed || this.pendingFontEpoch !== null) return;
      let e = Nt(this.requestedFontFamily);
      if (e !== this.fontFamily) {
        ((this.fontFamily = e), this.applyFontMetrics());
        return;
      }
      let t = ht(this.context, this.fontSize, this.fontFamily);
      (t.width !== this.metrics.width ||
        t.height !== this.metrics.height ||
        t.baseline !== this.metrics.baseline) &&
        this.applyFontMetrics();
    };
    resendSize() {
      ((this.resizeNotified = !1), this.fit());
    }
    fit() {
      if (this.disposed || !this.visible) return !1;
      let e = this.mount.clientWidth,
        t = this.mount.clientHeight;
      if (e <= 0 || t <= 0)
        return ((this.hasSize = !1), (this.forceFullRender = !0), this.cancelRender(), !1);
      this.hasSize = !0;
      let n = window.devicePixelRatio || 1,
        r = Math.max(1, Math.round(e * n)),
        i = Math.max(1, Math.round(t * n)),
        a = !1;
      this.canvas.width !== r ||
      this.canvas.height !== i ||
      !this.canvasConfigured ||
      this.canvasDevicePixelRatio !== n
        ? ((this.pendingCanvasConfiguration = { width: r, height: i, ratio: n }),
          (this.forceFullRender = !0),
          (this.scrollbarDirty = !0),
          (a = !0))
        : (this.pendingCanvasConfiguration = null);
      let o = gt(e, t, this.metrics, Q);
      return (
        (this.mountHeight = t),
        (o.cols === this.cols && o.rows === this.rows && this.resizeNotified) ||
          ((this.cols = o.cols),
          (this.rows = o.rows),
          this.core.resize(o.cols, o.rows, this.metrics.width, this.metrics.height),
          this.notifyResize(),
          (this.forceFullRender = !0),
          (this.scrollbarDirty = !0),
          (a = !0)),
        (a || this.forceFullRender) && this.renderFrame(),
        !0
      );
    }
    notifyResize() {
      ((this.resizeNotified = !0),
        this.resizeNotifyTimer !== null && window.clearTimeout(this.resizeNotifyTimer),
        (this.resizeNotifyTimer = window.setTimeout(() => {
          ((this.resizeNotifyTimer = null),
            this.disposed || this.options.onResize(this.cols, this.rows));
        }, 150)));
    }
    onWindowPointerRelease = () => {
      this.disposed ||
        this.resizeNotifyTimer === null ||
        (this.fit(),
        this.resizeNotifyTimer !== null &&
          (window.clearTimeout(this.resizeNotifyTimer),
          (this.resizeNotifyTimer = null),
          this.options.onResize(this.cols, this.rows)));
    };
    focus() {
      !this.disposed && this.visible && this.input.focus({ preventScroll: !0 });
    }
    async pasteFromClipboard(e, t = () => !0) {
      let n = ++this.pasteShortcutToken,
        r = await e();
      if (
        this.disposed ||
        this.pasteShortcutToken !== n ||
        !t() ||
        ((this.pasteShortcutToken += 1), r.length === 0)
      )
        return;
      let i = this.core.encodePaste(r);
      i.length > 0 && this.options.onData(i);
    }
    pasteTerminalSelection() {
      let e = this.getSelection();
      e.length !== 0 && this.pasteFromClipboard(() => Promise.resolve(e));
    }
    hasSelection() {
      return this.core.selectionText().length > 0;
    }
    getSelection() {
      return this.core.selectionText();
    }
    selectAll() {
      this.clearPrimedCopy();
      let e = this.core.selectAll();
      ((this.selectionAnchorScreen = e?.start ?? null),
        (this.selectionEndScreen = e?.end ?? null),
        (this.selectionEnd = e ? this.core.screenPointToViewport(e.end.x, e.end.y) : null),
        (this.selectionMode = `cell`),
        (this.selectionBase = null),
        this.setSelectionAutoscroll(0),
        this.options.onSelectionChange(),
        (this.forceFullRender = !0),
        this.requestRender());
    }
    getSelectionPosition() {
      return !this.selectionAnchorScreen || !this.selectionEndScreen || !this.hasSelection()
        ? null
        : this.selectionAnchorScreen.y < this.selectionEndScreen.y ||
            (this.selectionAnchorScreen.y === this.selectionEndScreen.y &&
              this.selectionAnchorScreen.x <= this.selectionEndScreen.x)
          ? { start: this.selectionAnchorScreen, end: this.selectionEndScreen }
          : { start: this.selectionEndScreen, end: this.selectionAnchorScreen };
    }
    getSelectionEndClientRect() {
      let e = this.getSelectionPosition();
      if (!e) return null;
      let t = this.core.screenPointToViewport(e.end.x, e.end.y);
      if (!t || t.x < 0 || t.x >= this.cols || t.y < 0 || t.y >= this.rows) return null;
      let n = this.canvas.getBoundingClientRect();
      return {
        right: n.left + Q + (t.x + 1) * this.metrics.width,
        bottom: n.top + this.originY + (t.y + 1) * this.metrics.height,
      };
    }
    clearSelection() {
      (this.clearPrimedCopy(),
        this.core.clearSelection(),
        (this.selectionEnd = null),
        (this.selectionAnchorScreen = null),
        (this.selectionEndScreen = null),
        (this.selectionMode = `cell`),
        (this.selectionBase = null),
        this.setSelectionAutoscroll(0),
        this.options.onSelectionChange(),
        (this.forceFullRender = !0),
        this.requestRender());
    }
    scrollToBottom() {
      (this.core.scrollToBottom(),
        (this.forceFullRender = !0),
        (this.scrollbarDirty = !0),
        this.requestRender());
    }
    isAtBottom() {
      return this.core.isViewportActive();
    }
    dispose() {
      this.disposed ||
        ((this.disposed = !0),
        this.stopObservingResize(),
        document.fonts.removeEventListener(`loadingdone`, this.onFontsLoaded),
        this.dprMedia?.removeEventListener(`change`, this.onDevicePixelRatioChange),
        (this.dprMedia = null),
        this.reducedMotionMedia?.removeEventListener(`change`, this.onReducedMotionChange),
        this.selectionScrollTimer !== null && window.clearInterval(this.selectionScrollTimer),
        this.resizeNotifyTimer !== null &&
          (window.clearTimeout(this.resizeNotifyTimer),
          (this.resizeNotifyTimer = null),
          this.options.onResize(this.cols, this.rows)),
        this.cancelRender(),
        this.compositionSuppressionTimer !== null &&
          window.clearTimeout(this.compositionSuppressionTimer),
        this.removeEvents(),
        this.core.dispose(),
        (this.canvas.parentElement === this.mount ||
          this.input.parentElement === this.mount ||
          this.scrollbar.parentElement === this.mount) &&
          (this.canvas.remove(), this.input.remove(), this.scrollbar.remove()));
    }
    onKeyDown = (e) => {
      if (
        (e.repeat || this.encodedKeyCodes.delete(e.code),
        en(e) || !this.options.beforeKey(e) || $t(e, this.composing))
      )
        return;
      let t = h(navigator.platform),
        n = t ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
      if (e.key.toLowerCase() === `a` && n && !e.altKey && (t ? !e.shiftKey : e.shiftKey)) {
        (e.preventDefault(), e.stopPropagation(), this.selectAll());
        return;
      }
      let r =
          e.shiftKey &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          (e.key === `PageUp` || e.key === `PageDown`),
        i = e.shiftKey && !e.altKey && n && (e.key === `Home` || e.key === `End`);
      if ((r || i) && !this.core.isAlternateScreen()) {
        let t = this.readScrollbarState();
        if (t !== null) {
          (e.preventDefault(), e.stopPropagation());
          let n =
            e.key === `Home`
              ? -t.offset
              : e.key === `End`
                ? t.total - t.len - t.offset
                : Math.max(1, t.len) * (e.key === `PageUp` ? -1 : 1);
          this.scrollViewport(n);
          return;
        }
      }
      if (Kt(e) && this.hasSelection()) {
        let t = this.getSelection();
        if ((this.primeCopy(t), e.shiftKey || e.key.toLowerCase() === `insert`))
          (e.preventDefault(), document.execCommand(`copy`));
        else {
          this.clearSelectionAfterCopy = !e.shiftKey && !h(navigator.platform);
          let n = navigator.clipboard;
          if (typeof n?.writeText == `function`) {
            let e = ++this.copyShortcutToken;
            Promise.resolve().then(() => {
              this.disposed ||
                this.copyShortcutToken !== e ||
                n.writeText(t).then(
                  () => {
                    this.disposed ||
                      this.copyShortcutToken !== e ||
                      (this.clearSelectionAfterCopy &&
                        ((this.clearSelectionAfterCopy = !1), this.clearSelection()));
                  },
                  () => {
                    this.copyShortcutToken === e && (this.clearSelectionAfterCopy = !1);
                  },
                );
            });
          }
        }
        return;
      }
      if (Xt(e)) {
        let t = { code: e.code, readText: `` };
        this.pasteShortcutGesture = t;
        let n = navigator.clipboard;
        if (typeof n?.readText == `function`) {
          let e = ++this.pasteShortcutToken;
          n.readText().then(
            (n) => {
              this.disposed ||
                this.pasteShortcutToken !== e ||
                ((this.pasteShortcutToken += 1),
                n.length !== 0 &&
                  (this.pasteShortcutGesture === t && (t.readText = n),
                  this.options.onData(this.core.encodePaste(n))));
            },
            () => {},
          );
        }
        return;
      }
      this.clearPrimedCopy();
      let a = this.core.encodeKey(e);
      a.length !== 0 &&
        (this.encodedKeyCodes.add(e.code),
        e.preventDefault(),
        e.stopPropagation(),
        this.options.onData(a));
    };
    onKeyUp = (e) => {
      if (
        ((e.code === this.pasteShortcutGesture?.code ||
          e.key === `Meta` ||
          e.key === `Control` ||
          e.key === `Shift`) &&
          (this.pasteShortcutGesture = null),
        !this.encodedKeyCodes.delete(e.code) || $t(e, this.composing))
      )
        return;
      let t = this.core.encodeKey(e, `release`);
      t.length !== 0 && (e.preventDefault(), e.stopPropagation(), this.options.onData(t));
    };
    onWindowKeyUp = (e) => {
      e.composedPath().includes(this.input) || this.encodedKeyCodes.delete(e.code);
    };
    onWindowKeyDown = (e) => {
      e.repeat || this.encodedKeyCodes.delete(e.code);
    };
    onFocus = () => {
      ((this.focused = !0), (this.cursorOn = !0), this.requestRender());
    };
    onBlur = () => {
      ((this.focused = !1),
        (this.pasteShortcutGesture = null),
        this.refreshHoveredLink(),
        (this.cursorOn = !0),
        this.requestRender());
    };
    onDevicePixelRatioChange = () => {
      (this.watchDevicePixelRatio(), this.fit());
    };
    watchDevicePixelRatio() {
      (this.dprMedia?.removeEventListener(`change`, this.onDevicePixelRatioChange),
        (this.dprMedia = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)),
        this.dprMedia.addEventListener(`change`, this.onDevicePixelRatioChange));
    }
    primeCopy(e) {
      ((this.primedCopySelection = e), qt(this.input, e));
    }
    clearPrimedCopy() {
      (Jt(this.input, this.primedCopySelection), (this.primedCopySelection = ``));
    }
    onCopyEvent = (e) => {
      let t = this.hasSelection() ? this.getSelection() : this.input.value;
      this.primeCopy(t);
      let n = Yt(t, e.clipboardData);
      (n.preventDefault && e.preventDefault(),
        n.claimWriteFallback &&
          ((this.copyShortcutToken += 1),
          this.clearSelectionAfterCopy &&
            ((this.clearSelectionAfterCopy = !1), this.clearSelection())));
    };
    onPaste = (e) => {
      e.preventDefault();
      let t = e.clipboardData?.getData(`text/plain`) ?? ``;
      t.length !== 0 &&
        (t === this.pasteShortcutGesture?.readText
          ? (this.pasteShortcutGesture = null)
          : ((this.pasteShortcutToken += 1), this.options.onData(this.core.encodePaste(t))));
    };
    onCompositionStart = () => {
      (this.clearPrimedCopy(), this.clearCompositionInputSuppression(), (this.composing = !0));
    };
    onCompositionEnd = (e) => {
      this.composing = !1;
      let t = this.input.value || e.data;
      (t.length > 0 && this.options.onData(t),
        (this.input.value = ``),
        (this.compositionInputToSuppress = t),
        (this.compositionSuppressionTimer = window.setTimeout(() => {
          ((this.compositionInputToSuppress = null), (this.compositionSuppressionTimer = null));
        }, 100)));
    };
    onInput = (e) => {
      let t = e;
      if (this.composing || t.isComposing) return;
      let n = this.input.value || t.data || ``;
      n === this.compositionInputToSuppress && Qt(t)
        ? (this.clearCompositionInputSuppression(), (this.input.value = ``))
        : (this.clearCompositionInputSuppression(),
          n.length > 0 && this.options.onData(n),
          (this.input.value = ``));
    };
    clearCompositionInputSuppression() {
      (this.compositionSuppressionTimer !== null &&
        (window.clearTimeout(this.compositionSuppressionTimer),
        (this.compositionSuppressionTimer = null)),
        (this.compositionInputToSuppress = null));
    }
    onPointerDown = (e) => {
      if (e.pointerType === `touch`) {
        if ((e.preventDefault(), !e.isPrimary || this.touchScroll !== null)) return;
        ((this.touchScroll = {
          pointerId: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          lastY: e.clientY,
          remainder: 0,
          moved: !1,
        }),
          this.clearHoveredLink(),
          this.canvas.setPointerCapture(e.pointerId));
        return;
      }
      if ((this.focus(), tn(this.core.isMouseTracking(), e))) {
        let t = ln(e.button);
        if (t === null) return;
        (e.preventDefault(),
          e.stopPropagation(),
          this.clearHoveredLink(`default`),
          (this.mouseReportingPointerId = e.pointerId),
          (this.mouseReportingButton = t),
          this.sendMouse(`press`, t, e),
          this.canvas.setPointerCapture(e.pointerId));
        return;
      }
      if (e.button === 1 && Zt()) {
        this.pasteTerminalSelection();
        return;
      }
      if (e.button !== 0) return;
      let t = this.recordSelectionClick(e),
        n = this.linkAt(e.clientX, e.clientY);
      n && !e.shiftKey && t === 1
        ? (e.preventDefault(),
          e.stopPropagation(),
          (this.linkActivationPointerId = e.pointerId),
          (this.linkActivationLink = n),
          (this.linkActivationOrigin = { x: e.clientX, y: e.clientY, clickCount: t }),
          this.canvas.setPointerCapture(e.pointerId))
        : (this.clearHoveredLink(),
          this.beginSelection(e, t),
          this.canvas.setPointerCapture(e.pointerId));
    };
    recordSelectionClick(e) {
      return (
        (this.selectionClickSequence = dn(this.selectionClickSequence, e)),
        this.selectionClickSequence.count
      );
    }
    beginSelection(e, t) {
      let n = this.cellAt(e.clientX, e.clientY);
      ((this.selectionMoved = !1),
        (this.selectionMode = t >= 3 ? `line` : t === 2 ? `word` : `cell`));
      let r =
        this.selectionMode === `line`
          ? this.core.selectLine(n.x, n.y)
          : this.selectionMode === `word`
            ? this.core.selectWord(n.x, n.y)
            : null;
      if (r)
        ((this.selectionBase = r.screen),
          (this.selectionEnd = r.viewport.end),
          (this.selectionAnchorScreen = r.screen.start),
          (this.selectionEndScreen = r.screen.end),
          this.options.onSelectionChange());
      else {
        ((this.selectionMode = `cell`), (this.selectionBase = null), (this.selectionEnd = n));
        let e = this.core.viewportPointToScreen(n.x, n.y);
        ((this.selectionAnchorScreen = e),
          (this.selectionEndScreen = e),
          e
            ? this.core.setSelection({ ...e, tag: 2 }, { ...e, tag: 2 })
            : this.core.setSelection(n, n));
      }
      ((this.forceFullRender = !0), this.requestRender());
    }
    onPointerMove = (e) => {
      if (e.pointerType === `touch`) {
        let t = this.touchScroll;
        if (
          t?.pointerId !== e.pointerId ||
          (e.preventDefault(),
          (t.moved ||= Math.hypot(e.clientX - t.startX, e.clientY - t.startY) > un),
          !t.moved)
        )
          return;
        let n = an(
          { deltaY: t.lastY - e.clientY, deltaMode: 0 },
          this.metrics.height,
          this.rows,
          t.remainder,
        );
        ((t.lastY = e.clientY), (t.remainder = n.remainder), this.scrollRows(n.rows, e));
        return;
      }
      if (this.linkActivationPointerId === e.pointerId) {
        let t = this.linkActivationOrigin;
        if (t === null || Math.hypot(e.clientX - t.x, e.clientY - t.y) <= un) return;
        ((this.linkActivationPointerId = null),
          (this.linkActivationLink = null),
          (this.linkActivationOrigin = null),
          this.clearHoveredLink(),
          this.beginSelection({ clientX: t.x, clientY: t.y }, t.clickCount));
      }
      let t = this.synchronizeMouseTrackingState();
      if (this.mouseReportingPointerId === e.pointerId || tn(t, e)) {
        (e.preventDefault(),
          (this.hoverPointer = { x: e.clientX, y: e.clientY }),
          this.setHoveredLink(null),
          (this.canvas.style.cursor = `default`),
          this.sendMouse(`motion`, this.buttonFromButtons(e.buttons), e));
        return;
      }
      if (
        ((this.lastMouseMotionData = ``),
        !this.selectionAnchorScreen || !this.canvas.hasPointerCapture(e.pointerId))
      ) {
        this.updateHoverCursor(e);
        return;
      }
      (this.clearHoveredLink(), (this.selectionPointer = { x: e.clientX, y: e.clientY }));
      let n = this.canvas.getBoundingClientRect(),
        r = Math.max(n.top, 0) + Q,
        i = Math.min(n.bottom, window.innerHeight) - Q;
      this.setSelectionAutoscroll(sn(e.clientY, r, i));
      let a = this.cellAt(e.clientX, e.clientY);
      (a.x !== this.selectionEnd?.x || a.y !== this.selectionEnd.y) &&
        this.extendSelectionTo(e.clientX, e.clientY);
    };
    extendSelectionTo(e, t) {
      let n = this.selectionAnchorScreen;
      if (n === null) return;
      let r = this.cellAt(e, t);
      ((this.selectionMoved = !0), (this.selectionEnd = r));
      let i =
          this.selectionMode === `line`
            ? this.core.selectLine(r.x, r.y)
            : this.selectionMode === `word`
              ? this.core.selectWord(r.x, r.y)
              : null,
        a = this.core.viewportPointToScreen(r.x, r.y);
      if (a === null) return;
      let o = this.selectionBase,
        s = o !== null && (a.y < o.start.y || (a.y === o.start.y && a.x < o.start.x)),
        c = o === null ? n : s ? o.end : o.start,
        l = i === null ? a : s ? i.screen.start : i.screen.end;
      ((this.selectionAnchorScreen = c),
        (this.selectionEndScreen = l),
        this.core.setSelection({ ...c, tag: 2 }, { ...l, tag: 2 }),
        this.options.onSelectionChange(),
        (this.forceFullRender = !0),
        this.requestRender());
    }
    setSelectionAutoscroll(e) {
      ((this.selectionScrollDelta = e),
        e === 0
          ? this.selectionScrollTimer !== null &&
            (window.clearInterval(this.selectionScrollTimer), (this.selectionScrollTimer = null))
          : this.selectionScrollTimer === null &&
            (this.selectionScrollTimer = window.setInterval(() => {
              if (this.disposed || this.selectionScrollDelta === 0) return;
              this.scrollViewport(this.selectionScrollDelta);
              let e = this.selectionPointer;
              e && this.extendSelectionTo(e.x, e.y);
            }, 80)));
    }
    updateHoverCursor(e) {
      ((this.hoverPointer = { x: e.clientX, y: e.clientY }), this.refreshHoveredLink());
    }
    onPointerLeave = () => {
      ((this.lastMouseMotionData = ``), this.clearHoveredLink());
    };
    clearHoveredLink(e = ``) {
      ((this.hoverPointer = null), this.setHoveredLink(null), (this.canvas.style.cursor = e));
    }
    refreshHoveredLink() {
      let e = this.hoverPointer,
        t = e ? this.linkAt(e.x, e.y) : null;
      this.setHoveredLink(t);
    }
    setHoveredLink(e) {
      let t = this.hoveredLink,
        n =
          t?.text === e?.text &&
          t?.range.start.x === e?.range.start.x &&
          t?.range.start.y === e?.range.start.y &&
          t?.range.end.x === e?.range.end.x &&
          t?.range.end.y === e?.range.end.y;
      ((this.canvas.style.cursor = e ? `pointer` : ``),
        !n && ((this.hoveredLink = e), (this.forceFullRender = !0), this.requestRender()));
    }
    onPointerUp = (e) => {
      if (e.pointerType === `touch`) {
        let t = this.touchScroll;
        if (
          t?.pointerId !== e.pointerId ||
          ((this.touchScroll = null),
          e.preventDefault(),
          this.canvas.hasPointerCapture(e.pointerId) &&
            this.canvas.releasePointerCapture(e.pointerId),
          e.type === `pointercancel` || t.moved)
        )
          return;
        if ((this.focus(), tn(this.core.isMouseTracking(), e)))
          (this.sendMouse(`press`, ln(0), e), this.sendMouse(`release`, ln(0), e));
        else {
          let t = this.linkAt(e.clientX, e.clientY);
          t ? this.options.onLinkActivate(t.text, e) : this.clearSelection();
        }
      } else if ((this.setSelectionAutoscroll(0), this.linkActivationPointerId === e.pointerId)) {
        (e.preventDefault(), e.stopPropagation());
        let t = this.linkActivationLink;
        ((this.linkActivationPointerId = null),
          (this.linkActivationLink = null),
          (this.linkActivationOrigin = null),
          this.canvas.hasPointerCapture(e.pointerId) &&
            this.canvas.releasePointerCapture(e.pointerId),
          e.type !== `pointercancel` &&
            t &&
            Ut(t, this.linkAt(e.clientX, e.clientY)) &&
            this.options.onLinkActivate(t.text, e));
      } else
        this.mouseReportingPointerId === e.pointerId
          ? (e.preventDefault(),
            e.stopPropagation(),
            this.sendMouse(`release`, this.mouseReportingButton, e),
            (this.mouseReportingPointerId = null),
            (this.mouseReportingButton = null),
            this.canvas.hasPointerCapture(e.pointerId) &&
              this.canvas.releasePointerCapture(e.pointerId),
            e.type === `pointercancel`
              ? this.clearHoveredLink()
              : ((this.hoverPointer = { x: e.clientX, y: e.clientY }), this.refreshHoveredLink()))
          : (this.canvas.hasPointerCapture(e.pointerId) &&
              this.canvas.releasePointerCapture(e.pointerId),
            e.button === 1 && Zt()
              ? e.preventDefault()
              : e.button === 0 &&
                (!this.selectionMoved && this.selectionMode === `cell` && this.clearSelection(),
                this.options.onSelectionChange()));
    };
    onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      let t = an(e, this.metrics.height, this.rows, this.wheelRemainder);
      ((this.wheelRemainder = t.remainder), this.scrollRows(t.rows, e));
    };
    scrollRows(e, t) {
      if (e === 0) return;
      let n = Math.abs(e);
      if (tn(this.core.isMouseTracking(), t)) {
        let r = e < 0 ? 4 : 5;
        for (let e = 0; e < n; e += 1) this.sendMouse(`press`, r, t);
      } else
        this.core.isAlternateScreen()
          ? this.options.onData(cn(e, this.core.isApplicationCursorKeys()))
          : this.scrollViewport(e);
    }
    onMouseDown = (e) => {
      ((e.button === 0 || (e.button === 1 && Zt())) && e.preventDefault(), this.focus());
    };
    onMouseUp = (e) => {
      e.button === 1 && Zt() && e.preventDefault();
    };
    onContextMenu = (e) => {
      tn(this.core.isMouseTracking(), e) ? e.preventDefault() : this.options.onContextMenu?.(e);
    };
    onScrollbarPointerDown = (e) => {
      if (e.button !== 0) return;
      let t = this.readScrollbarState();
      if (t === null) return;
      let n = this.scrollbar.getBoundingClientRect(),
        r = Rt(t, n.height);
      r !== null &&
        (e.preventDefault(),
        e.stopPropagation(),
        (this.scrollbarPointerId = e.pointerId),
        (this.scrollbarPointerOffset =
          e.target === this.scrollbarThumb ? e.clientY - n.top - r.thumbTop : r.thumbHeight / 2),
        this.scrollbar.setPointerCapture(e.pointerId),
        this.scrollbarToPointer(e.clientY, n));
    };
    onScrollbarPointerMove = (e) => {
      e.pointerId === this.scrollbarPointerId &&
        this.scrollbarState !== null &&
        (e.preventDefault(),
        this.scrollbarToPointer(e.clientY, this.scrollbar.getBoundingClientRect()));
    };
    onScrollbarPointerUp = (e) => {
      e.pointerId === this.scrollbarPointerId &&
        (e.preventDefault(),
        (this.scrollbarPointerId = null),
        this.scrollbar.hasPointerCapture(e.pointerId) &&
          this.scrollbar.releasePointerCapture(e.pointerId));
    };
    onScrollbarKeyDown = (e) => {
      let t = this.readScrollbarState();
      if (t === null) return;
      let n = 0;
      switch (e.key) {
        case `ArrowUp`:
          n = -1;
          break;
        case `ArrowDown`:
          n = 1;
          break;
        case `PageUp`:
          n = -Math.max(1, t.len);
          break;
        case `PageDown`:
          n = Math.max(1, t.len);
          break;
        case `Home`:
          n = -t.offset;
          break;
        case `End`:
          n = t.total - t.len - t.offset;
          break;
        default:
          return;
      }
      (e.preventDefault(), e.stopPropagation(), this.scrollViewport(n));
    };
    installEvents() {
      (this.input.addEventListener(`keydown`, this.onKeyDown),
        this.input.addEventListener(`keyup`, this.onKeyUp),
        window.addEventListener(`keyup`, this.onWindowKeyUp, { capture: !0 }),
        window.addEventListener(`keydown`, this.onWindowKeyDown, { capture: !0 }),
        this.input.addEventListener(`focus`, this.onFocus),
        this.input.addEventListener(`blur`, this.onBlur),
        this.input.addEventListener(`input`, this.onInput),
        this.input.addEventListener(`paste`, this.onPaste),
        this.input.addEventListener(`copy`, this.onCopyEvent),
        this.input.addEventListener(`compositionstart`, this.onCompositionStart),
        this.input.addEventListener(`compositionend`, this.onCompositionEnd),
        this.canvas.addEventListener(`pointerdown`, this.onPointerDown),
        this.canvas.addEventListener(`pointermove`, this.onPointerMove),
        this.canvas.addEventListener(`pointerleave`, this.onPointerLeave),
        this.canvas.addEventListener(`pointerup`, this.onPointerUp),
        this.canvas.addEventListener(`pointercancel`, this.onPointerUp),
        this.canvas.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
        this.canvas.addEventListener(`mousedown`, this.onMouseDown),
        this.canvas.addEventListener(`mouseup`, this.onMouseUp),
        this.canvas.addEventListener(`contextmenu`, this.onContextMenu),
        this.scrollbar.addEventListener(`pointerdown`, this.onScrollbarPointerDown),
        this.scrollbar.addEventListener(`pointermove`, this.onScrollbarPointerMove),
        this.scrollbar.addEventListener(`pointerup`, this.onScrollbarPointerUp),
        this.scrollbar.addEventListener(`pointercancel`, this.onScrollbarPointerUp),
        this.scrollbar.addEventListener(`keydown`, this.onScrollbarKeyDown),
        window.addEventListener(`pointerup`, this.onWindowPointerRelease),
        window.addEventListener(`pointercancel`, this.onWindowPointerRelease));
    }
    removeEvents() {
      (this.input.removeEventListener(`keydown`, this.onKeyDown),
        this.input.removeEventListener(`keyup`, this.onKeyUp),
        window.removeEventListener(`keyup`, this.onWindowKeyUp, { capture: !0 }),
        window.removeEventListener(`keydown`, this.onWindowKeyDown, { capture: !0 }),
        this.input.removeEventListener(`focus`, this.onFocus),
        this.input.removeEventListener(`blur`, this.onBlur),
        this.input.removeEventListener(`input`, this.onInput),
        this.input.removeEventListener(`paste`, this.onPaste),
        this.input.removeEventListener(`copy`, this.onCopyEvent),
        this.input.removeEventListener(`compositionstart`, this.onCompositionStart),
        this.input.removeEventListener(`compositionend`, this.onCompositionEnd),
        this.canvas.removeEventListener(`pointerdown`, this.onPointerDown),
        this.canvas.removeEventListener(`pointermove`, this.onPointerMove),
        this.canvas.removeEventListener(`pointerleave`, this.onPointerLeave),
        this.canvas.removeEventListener(`pointerup`, this.onPointerUp),
        this.canvas.removeEventListener(`pointercancel`, this.onPointerUp),
        this.canvas.removeEventListener(`wheel`, this.onWheel),
        this.canvas.removeEventListener(`mousedown`, this.onMouseDown),
        this.canvas.removeEventListener(`mouseup`, this.onMouseUp),
        this.canvas.removeEventListener(`contextmenu`, this.onContextMenu),
        this.scrollbar.removeEventListener(`pointerdown`, this.onScrollbarPointerDown),
        this.scrollbar.removeEventListener(`pointermove`, this.onScrollbarPointerMove),
        this.scrollbar.removeEventListener(`pointerup`, this.onScrollbarPointerUp),
        this.scrollbar.removeEventListener(`pointercancel`, this.onScrollbarPointerUp),
        this.scrollbar.removeEventListener(`keydown`, this.onScrollbarKeyDown),
        window.removeEventListener(`pointerup`, this.onWindowPointerRelease),
        window.removeEventListener(`pointercancel`, this.onWindowPointerRelease));
    }
    scrollViewport(e) {
      let t = Math.trunc(e),
        n = this.readScrollbarState();
      if (n !== null) {
        let e = Math.max(0, n.total - n.len),
          r = Math.max(0, Math.min(n.offset + t, e));
        ((t = r - n.offset), (this.scrollbarState = { ...n, offset: r }));
      }
      t !== 0 &&
        (this.core.scroll(t),
        (this.forceFullRender = !0),
        (this.scrollbarDirty = !0),
        this.requestRender());
    }
    scrollbarToPointer(e, t) {
      let n = this.scrollbarState;
      if (n === null) return;
      let r = zt(n, t.height, e - t.top, this.scrollbarPointerOffset);
      this.scrollViewport(r - n.offset);
    }
    updateScrollbar() {
      let e = this.readScrollbarState(),
        t = e === null ? null : Rt(e, Math.max(0, this.mount.clientHeight - 8));
      ((this.scrollbar.hidden = t === null),
        e !== null &&
          t !== null &&
          (this.scrollbar.setAttribute(`aria-valuemin`, `0`),
          this.scrollbar.setAttribute(`aria-valuemax`, String(t.maxOffset)),
          this.scrollbar.setAttribute(
            `aria-valuenow`,
            String(Math.max(0, Math.min(e.offset, t.maxOffset))),
          ),
          (this.scrollbarThumb.style.height = `${t.thumbHeight}px`),
          (this.scrollbarThumb.style.transform = `translateY(${t.thumbTop}px)`)));
    }
    readScrollbarState() {
      let e = this.core.scrollbarState();
      return ((this.scrollbarState = e), e);
    }
    requestRender() {
      !this.disposed &&
        this.visible &&
        this.hasSize &&
        (this.deferSynchronizedRender() ||
          this.frame !== 0 ||
          (this.frame = window.requestAnimationFrame(() => {
            ((this.frame = 0), this.renderFrame());
          })));
    }
    cancelRender() {
      (this.cancelSynchronizedRenderTimer(),
        this.frame !== 0 && (window.cancelAnimationFrame(this.frame), (this.frame = 0)),
        this.cursorTimer !== null &&
          (window.clearTimeout(this.cursorTimer), (this.cursorTimer = null)));
    }
    cancelSynchronizedRenderTimer() {
      this.synchronizedRenderTimer !== null &&
        (window.clearTimeout(this.synchronizedRenderTimer), (this.synchronizedRenderTimer = null));
    }
    deferSynchronizedRender() {
      return this.core.isSynchronizedOutput()
        ? (this.frame !== 0 && (window.cancelAnimationFrame(this.frame), (this.frame = 0)),
          this.cursorTimer !== null &&
            (window.clearTimeout(this.cursorTimer), (this.cursorTimer = null)),
          this.synchronizedRenderTimer === null &&
            (this.synchronizedRenderTimer = window.setTimeout(() => {
              ((this.synchronizedRenderTimer = null),
                this.core.endSynchronizedOutput(),
                this.renderFrame());
            }, Et)),
          !0)
        : (this.cancelSynchronizedRenderTimer(), !1);
    }
    renderFrame() {
      if (this.disposed || !this.visible) return;
      if (
        (this.frame !== 0 && (window.cancelAnimationFrame(this.frame), (this.frame = 0)),
        this.mount.clientWidth === 0 || this.mount.clientHeight === 0)
      ) {
        ((this.hasSize = !1), (this.forceFullRender = !0), this.cancelRender());
        return;
      }
      if (this.deferSynchronizedRender()) return;
      let e = this.pendingCanvasConfiguration;
      (e !== null &&
        ((this.pendingCanvasConfiguration = null),
        (this.canvas.width = e.width),
        (this.canvas.height = e.height),
        this.context.setTransform(e.ratio, 0, 0, e.ratio, 0, 0),
        (this.canvasConfigured = !0),
        (this.canvasDevicePixelRatio = e.ratio)),
        (this.snapshot = this.core.snapshot()),
        this.blinkEnabled() || (this.cursorOn = !0));
      let t = this.readScrollbarState(),
        n = t !== null && t.total > t.len,
        r = Lt(this.mountHeight, Q, this.rows, this.metrics.height, n);
      (r !== this.originY && ((this.originY = r), (this.forceFullRender = !0)),
        this.refreshHoveredLink(),
        _t({
          context: this.context,
          snapshot: this.snapshot,
          metrics: this.metrics,
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          padding: Q,
          originY: this.originY,
          forceFull: this.forceFullRender,
          cursorOn: this.cursorOn,
          previousCursorY: this.renderedCursorY,
          focused: this.focused,
          hoveredLinkRange: this.hoveredLink?.range ?? null,
          ...(this.theme.selectionBackground === void 0
            ? {}
            : { selectionBackground: this.theme.selectionBackground }),
        }),
        this.positionInput(),
        (this.renderedCursorY =
          this.cursorOn && this.snapshot.cursorVisible && this.snapshot.cursorY >= 0
            ? this.snapshot.cursorY
            : null),
        this.scrollbarDirty && ((this.scrollbarDirty = !1), this.updateScrollbar()),
        (this.forceFullRender = !1),
        this.scheduleCursorBlink());
    }
    scheduleCursorBlink() {
      (this.cursorTimer !== null && window.clearTimeout(this.cursorTimer),
        (this.cursorTimer = null),
        this.blinkEnabled() &&
          (this.cursorTimer = window.setTimeout(() => {
            ((this.cursorTimer = null), (this.cursorOn = !this.cursorOn), this.requestRender());
          }, Tt)));
    }
    blinkEnabled() {
      let e = this.snapshot;
      return !e || !this.visible || !this.hasSize
        ? !1
        : It({
            focused: this.focused,
            cursorBlinking: e.cursorBlinking,
            cursorVisible: e.cursorVisible,
            reducedMotion: this.reducedMotionMedia?.matches ?? !1,
          });
    }
    positionInput() {
      let e = this.snapshot;
      if (!e || !e.cursorVisible || e.cursorX < 0 || e.cursorY < 0) return;
      let t = Q + e.cursorX * this.metrics.width,
        n = this.originY + e.cursorY * this.metrics.height;
      (t !== this.inputLeft || n !== this.inputTop) &&
        ((this.inputLeft = t),
        (this.inputTop = n),
        (this.input.style.left = `${t}px`),
        (this.input.style.top = `${n}px`),
        (this.input.style.height = `${this.metrics.height}px`));
    }
    cellAt(e, t) {
      let n = this.canvas.getBoundingClientRect();
      return {
        x: Math.max(0, Math.min(this.cols - 1, Math.floor((e - n.left - Q) / this.metrics.width))),
        y: Math.max(
          0,
          Math.min(this.rows - 1, Math.floor((t - n.top - this.originY) / this.metrics.height)),
        ),
      };
    }
    linkAt(e, t) {
      let n = this.findLinkAt(e, t);
      return n && this.options.canActivateLink?.(n.text) !== !1 ? n : null;
    }
    findLinkAt(e, t) {
      if (!this.snapshot) return null;
      let n = Bt({
        bounds: this.canvas.getBoundingClientRect(),
        clientX: e,
        clientY: t,
        cols: this.cols,
        rows: this.rows,
        metrics: this.metrics,
        padding: Q,
        originY: this.originY,
      });
      if (!n) return null;
      let r = this.core.hyperlinkAt(n.x, n.y);
      if (r) {
        let e = { ...n },
          t = { ...n };
        for (;;) {
          let t =
            e.x > 0
              ? { x: e.x - 1, y: e.y }
              : e.y > 0 && this.snapshot.rowData[e.y]?.isWrapContinuation
                ? { x: this.cols - 1, y: e.y - 1 }
                : null;
          if (!t || this.core.hyperlinkAt(t.x, t.y) !== r) break;
          ((e.x = t.x), (e.y = t.y));
        }
        for (;;) {
          let e =
            t.x + 1 < this.cols
              ? { x: t.x + 1, y: t.y }
              : t.y + 1 < this.rows && this.snapshot.rowData[t.y]?.wrapsToNext
                ? { x: 0, y: t.y + 1 }
                : null;
          if (!e || this.core.hyperlinkAt(e.x, e.y) !== r) break;
          ((t.x = e.x), (t.y = e.y));
        }
        return { text: r, range: { start: e, end: t } };
      }
      return Gt(this.snapshot.rowData, n.y, n.x);
    }
    sendMouse(e, t, n) {
      let r = this.canvas.getBoundingClientRect(),
        i = this.core.encodeMouse({
          action: e,
          button: t,
          mods: +!!n.shiftKey | (n.ctrlKey ? 2 : 0) | (n.altKey ? 4 : 0) | (n.metaKey ? 8 : 0),
          x: Math.max(0, n.clientX - r.left),
          y: Math.max(0, n.clientY - r.top),
          screenWidth: r.width,
          screenHeight: r.height,
          cellWidth: this.metrics.width,
          cellHeight: this.metrics.height,
          paddingLeft: Q,
          paddingRight: Q,
          paddingTop: this.originY,
          paddingBottom: Math.max(0, r.height - this.originY - this.rows * this.metrics.height),
          anyButtonPressed: n.buttons !== 0,
        }),
        a = nn(e, i, this.lastMouseMotionData);
      ((this.lastMouseMotionData = a.nextMotionData), a.send && this.options.onData(i));
    }
    synchronizeMouseTrackingState() {
      let e = this.core.isMouseAnyEventTracking(),
        t = rn(this.mouseAnyEventTracking, e, this.lastMouseMotionData);
      return (
        (this.mouseAnyEventTracking = t.tracking), (this.lastMouseMotionData = t.motionData), e
      );
    }
    buttonFromButtons(e) {
      return e & 1 ? 1 : e & 4 ? 3 : e & 2 ? 2 : e & 8 ? 4 : e & 16 ? 5 : null;
    }
  },
  pn = 0;
function mn() {
  return pn > 0;
}
async function hn(e) {
  let t = ue();
  if (!t) return !0;
  pn += 1;
  try {
    return await t.dialogs.confirm(
      e.length === 1
        ? [`Close terminal "${e[0]}"?`, `This stops the running process and clears its history.`]
            .join(`
`)
        : [
            `Close ${e.length} terminals?`,
            `This stops their running processes and clears their histories: ${e.map((e) => `"${e}"`).join(`, `)}.`,
          ].join(`
`),
      { variant: `destructive` },
    );
  } catch {
    return !1;
  } finally {
    --pn;
  }
}
var gn = { environmentId: _, threadId: _, targetOrigin: _, cause: b() },
  _n = class extends g()(`TerminalLinkPreviewOpenError`, gn) {
    get message() {
      return `Failed to open terminal link ${this.targetOrigin} in preview for thread ${this.threadId}.`;
    }
  };
async function vn(e) {
  if (
    !(
      !e.forceBrowser &&
      Te(e.url) &&
      w(e.threadRef.environmentId) &&
      e.threadRef.threadId.length > 0 &&
      (await Ee()) === `app`
    )
  ) {
    e.fallbackToBrowser();
    return;
  }
  let t = {
      environmentId: e.threadRef.environmentId,
      threadId: e.threadRef.threadId,
      targetOrigin: new URL(e.url).origin,
    },
    n = await ge(),
    r = me(e.threadRef.environmentId),
    i = await e.openPreview({
      environmentId: e.threadRef.environmentId,
      input: {
        threadId: e.threadRef.threadId,
        url: e.url,
        viewport: he(n),
        profileId: _e(n),
        ...(r === void 0 ? {} : { runtime: r }),
      },
    });
  if (i._tag === `Failure`) {
    if (v(i)) return;
    (console.error(new _n({ ...t, cause: i.cause })), e.fallbackToBrowser());
  } else
    (T(e.threadRef, e.url),
      x(e.threadRef, i.value),
      ce.getState().openBrowser(e.threadRef, i.value.tabId));
}
function yn(e) {
  return {
    ...(e === void 0 ? {} : { platform: e }),
    context: { terminalFocus: !0, terminalOpen: !0 },
  };
}
function bn(e, t, n) {
  return D(e, t, yn(n)) ? (e.preventDefault(), !0) : !1;
}
function xn(e, t, n) {
  return e.repeat ? bn(e, t, n) : !1;
}
var $ = e(r(), 1),
  Sn = 180,
  Cn = 0.75;
function wn(e) {
  let t = Math.max(Sn, Math.floor(e.viewportHeight * Cn));
  return e.chatColumnHeight === void 0
    ? t
    : Math.min(
        t,
        Math.max(0, e.chatColumnHeight - (e.headerHeight ?? 0) - (e.composerHeight ?? 0)),
      );
}
function Tn(e, t) {
  return Math.min(Math.max(Math.round(Number.isFinite(e) ? e : 280), Sn), t);
}
function En(e) {
  return e?.closest(`[data-chat-column]`) ?? null;
}
function Dn(e) {
  let t = typeof window > `u` ? 0 : window.innerHeight;
  return e
    ? {
        viewportHeight: t,
        chatColumnHeight: e.clientHeight,
        headerHeight: e.querySelector(`[data-chat-header]`)?.offsetHeight ?? 0,
      }
    : { viewportHeight: t };
}
function On(e, t) {
  e.write(`\r\n[terminal] ${t}\r\n`);
}
function kn(e, t) {
  t.type === `reset` ? e.resetAndWrite(t.data) : t.type === `append` && e.write(t.data);
}
function An(e, t, n) {
  if (t.version === 0) return n;
  let r = We(t.output, n);
  return (kn(e, r), e.clearSelection(), r.cursor);
}
function jn(e, t) {
  if (typeof document > `u`) return t;
  let n = document.createElement(`canvas`);
  ((n.width = 1), (n.height = 1));
  let r = n.getContext(`2d`, { willReadFrequently: !0 });
  if (!r) return t;
  (r.clearRect(0, 0, 1, 1), (r.fillStyle = e), r.fillRect(0, 0, 1, 1));
  let [i, a, o, s] = r.getImageData(0, 0, 1, 1).data;
  return s === 0 ? t : { r: i ?? t.r, g: a ?? t.g, b: o ?? t.b };
}
function Mn(e) {
  let t = Number.parseInt(e.slice(1), 16);
  return { r: (t >> 16) & 255, g: (t >> 8) & 255, b: t & 255 };
}
var Nn = {
  light: [
    `#000000`,
    `#cd3131`,
    `#107c10`,
    `#949800`,
    `#0451a5`,
    `#bc05bc`,
    `#0598bc`,
    `#555555`,
    `#666666`,
    `#cd3131`,
    `#14ce14`,
    `#b5ba00`,
    `#0451a5`,
    `#bc05bc`,
    `#0598bc`,
    `#a5a5a5`,
  ].map(Mn),
  dark: [
    `#000000`,
    `#cd3131`,
    `#0dbc79`,
    `#e5e510`,
    `#2472c8`,
    `#bc3fbc`,
    `#11a8cd`,
    `#e5e5e5`,
    `#666666`,
    `#f14c4c`,
    `#23d18b`,
    `#f5f543`,
    `#3b8eea`,
    `#d670d6`,
    `#29b8db`,
    `#e5e5e5`,
  ].map(Mn),
};
function Pn(e, t) {
  return {
    ...t,
    get visible() {
      return e.current;
    },
  };
}
function Fn(e) {
  return e
    ? JSON.stringify(
        Object.entries(e)
          .filter(([e, t]) => e.length > 0 && typeof t == `string`)
          .sort(([e], [t]) => e.localeCompare(t)),
      )
    : ``;
}
function In(e, t) {
  let n = e?.trim().toLowerCase();
  return !n || n === `transparent` || n === `rgba(0, 0, 0, 0)` || n === `rgba(0 0 0 / 0)`
    ? t
    : (e ?? t);
}
function Ln(e, t, n) {
  return In(e.getPropertyValue(t), n);
}
function Rn(e, t) {
  let n = e.trim();
  return n.length > 0 ? { family: n, size: t } : { size: t };
}
function zn(e) {
  let t =
      e?.closest(`[data-thread-terminal-drawer]`) ??
      document.querySelector(`[data-thread-terminal-drawer]`) ??
      document.body,
    n = getComputedStyle(t),
    r = e ? getComputedStyle(e) : n,
    i = r.colorScheme,
    a = i === `dark` || (i !== `light` && document.documentElement.classList.contains(`dark`)),
    o = a ? `rgb(14, 18, 24)` : `rgb(255, 255, 255)`,
    s = a ? `rgb(237, 241, 247)` : `rgb(28, 33, 41)`,
    c = getComputedStyle(document.body),
    l = getComputedStyle(document.documentElement),
    u = In(n.backgroundColor, In(c.backgroundColor, o)),
    d = In(n.color, In(c.color, s)),
    f = Ln(r, `--terminal-background`, Ln(l, `--terminal-background`, u)),
    p = Ln(r, `--terminal-foreground`, Ln(l, `--terminal-foreground`, d)),
    m = Ln(r, `--terminal-cursor`, a ? `rgb(180, 203, 255)` : `rgb(38, 56, 78)`),
    h = Ln(
      r,
      `--terminal-selection-background`,
      a ? `rgba(180, 203, 255, 0.25)` : `rgba(37, 63, 99, 0.2)`,
    );
  return {
    background: jn(f, a ? { r: 14, g: 18, b: 24 } : { r: 255, g: 255, b: 255 }),
    foreground: jn(p, a ? { r: 237, g: 241, b: 247 } : { r: 28, g: 33, b: 41 }),
    cursor: jn(m, a ? { r: 180, g: 203, b: 255 } : { r: 38, g: 56, b: 78 }),
    palette: Nn[a ? `dark` : `light`],
    selectionBackground: h,
  };
}
function Bn(e) {
  let t = e.start.y + 1;
  return { lineStart: t, lineEnd: Math.max(t, e.end.y + 1) };
}
function Vn(e) {
  return [
    ...(e?.canAddToChat === !1 ? [] : [{ id: `add-to-chat`, label: `Add to chat` }]),
    { id: `copy`, label: `Copy` },
  ];
}
function Hn(e) {
  let { hasSelection: t, canAddToChat: n = !0 } = e;
  return [
    ...Vn({ canAddToChat: n }).map((e) => ({ ...e, disabled: !t })),
    { id: `paste`, label: `Paste`, ...(e.readOnly ? { disabled: !0 } : {}) },
    { id: `select-all`, label: `Select all` },
    { id: `scroll-to-bottom`, label: `Jump to latest` },
  ];
}
function Un(e) {
  return e.actionPending || e.openMenuRequestId === e.currentRequestId;
}
function Wn(e, t, n, r) {
  return r > 0 && (e === `closed` || e === `exited`) && e !== t && !n;
}
function Gn(e) {
  let t = (0, Ge.c)(10),
    n;
  t[0] !== e.cwd ||
  t[1] !== e.runtimeEnv ||
  t[2] !== e.terminalId ||
  t[3] !== e.threadId ||
  t[4] !== e.threadRef.environmentId ||
  t[5] !== e.worktreePath
    ? ((n = JSON.stringify([
        e.threadRef.environmentId,
        e.threadId,
        e.terminalId,
        e.cwd,
        e.worktreePath ?? null,
        Fn(e.runtimeEnv),
      ])),
      (t[0] = e.cwd),
      (t[1] = e.runtimeEnv),
      (t[2] = e.terminalId),
      (t[3] = e.threadId),
      (t[4] = e.threadRef.environmentId),
      (t[5] = e.worktreePath),
      (t[6] = n))
    : (n = t[6]);
  let r = n,
    i;
  return (
    t[7] !== e || t[8] !== r
      ? ((i = (0, $.jsx)(Kn, { ...e }, r)), (t[7] = e), (t[8] = r), (t[9] = i))
      : (i = t[9]),
    i
  );
}
function Kn(e) {
  let t = (0, Ge.c)(133),
    {
      advancedTypography: n,
      threadRef: r,
      threadId: i,
      terminalId: a,
      terminalLabel: o,
      cwd: s,
      worktreePath: c,
      runtimeEnv: l,
      providerInstanceId: u,
      onSessionExited: f,
      onAddTerminalContext: p,
      autoFocus: m,
      visible: h,
      resizeEpoch: g,
      drawerHeight: _,
      keybindings: b,
    } = e,
    ne = m !== void 0 && m,
    x = (0, P.useRef)(null),
    ce = (0, P.useRef)(!1),
    S = (0, P.useRef)(null),
    fe = (0, P.useRef)(h),
    C = r.environmentId,
    pe = ae(C, d),
    me;
  t[0] === C ? (me = t[1]) : ((me = () => oe(C, d)), (t[0] = C), (t[1] = me));
  let w = (0, P.useEffectEvent)(me),
    he = ae(C, te),
    ge;
  t[2] === C
    ? (ge = t[3])
    : ((ge = (e) => k(e) || oe(C, `orchestration:operate`)), (t[2] = C), (t[3] = ge));
  let T = (0, P.useEffectEvent)(ge),
    _e;
  t[4] === C ? (_e = t[5]) : ((_e = ie.configValueAtom(C)), (t[4] = C), (t[5] = _e));
  let D = y(_e),
    Te;
  t[6] === D?.availableEditors
    ? (Te = t[7])
    : ((Te = D?.availableEditors ?? []), (t[6] = D?.availableEditors), (t[7] = Te));
  let Ee = Fe(C, Te),
    De;
  t[8] === Ee ? (De = t[9]) : ((De = (e) => Ee(e)), (t[8] = Ee), (t[9] = De));
  let Oe = (0, P.useEffectEvent)(De),
    je;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = { reportFailure: !1 }), (t[10] = je))
    : (je = t[10]);
  let A = se(we.open, je),
    Ne;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = { reportFailure: !1 }), (t[11] = Ne))
    : (Ne = t[11]);
  let Pe = se(Ie.write, Ne),
    Le;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = { reportFailure: !1 }), (t[12] = Le))
    : (Le = t[12]);
  let j = se(Ie.resize, Le),
    Ve = (0, P.useRef)(!1),
    F = (0, P.useRef)(0),
    I = (0, P.useRef)(null),
    Ke;
  t[13] === b ? (Ke = t[14]) : ((Ke = () => b), (t[13] = b), (t[14] = Ke));
  let qe = (0, P.useEffectEvent)(Ke),
    L;
  t[15] !== w || t[16] !== f
    ? ((L = () => {
        w() && f();
      }),
      (t[15] = w),
      (t[16] = f),
      (t[17] = L))
    : (L = t[17]);
  let Je = (0, P.useEffectEvent)(L),
    Ye;
  t[18] === p
    ? (Ye = t[19])
    : ((Ye = (e) => {
        p?.(e);
      }),
      (t[18] = p),
      (t[19] = Ye));
  let Xe = (0, P.useEffectEvent)(Ye),
    Ze;
  t[20] === p ? (Ze = t[21]) : ((Ze = () => p !== void 0), (t[20] = p), (t[21] = Ze));
  let R = (0, P.useEffectEvent)(Ze),
    Qe;
  t[22] === o ? (Qe = t[23]) : ((Qe = () => o), (t[22] = o), (t[23] = Qe));
  let $e = (0, P.useEffectEvent)(Qe),
    et;
  t[24] === n
    ? (et = t[25])
    : ((et = (e) => Be({ advanced: n, code: e.fontFamilyCode, terminal: e.fontFamilyTerminal })),
      (t[24] = n),
      (t[25] = et));
  let z = re(et),
    B;
  t[26] === n
    ? (B = t[27])
    : ((B = (e) => Me({ advanced: n, code: e.fontSizeCode, terminal: e.fontSizeTerminal })),
      (t[26] = n),
      (t[27] = B));
  let V = re(B),
    H;
  t[28] !== z || t[29] !== V
    ? ((H = { family: z, size: V }), (t[28] = z), (t[29] = V), (t[30] = H))
    : (H = t[30]);
  let tt = (0, P.useRef)(H),
    U;
  t[31] === c
    ? (U = t[32])
    : ((U = c === void 0 ? {} : { worktreePath: c }), (t[31] = c), (t[32] = U));
  let W;
  t[33] === l ? (W = t[34]) : ((W = l ? { env: l } : {}), (t[33] = l), (t[34] = W));
  let G;
  t[35] === u ? (G = t[36]) : ((G = u ? { providerInstanceId: u } : {}), (t[35] = u), (t[36] = G));
  let K;
  t[37] !== s || t[38] !== U || t[39] !== W || t[40] !== G || t[41] !== a || t[42] !== i
    ? ((K = { threadId: i, terminalId: a, cwd: s, ...U, ...W, ...G }),
      (t[37] = s),
      (t[38] = U),
      (t[39] = W),
      (t[40] = G),
      (t[41] = a),
      (t[42] = i),
      (t[43] = K))
    : (K = t[43]);
  let nt;
  t[44] !== C || t[45] !== K
    ? ((nt = { environmentId: C, terminal: K }), (t[44] = C), (t[45] = K), (t[46] = nt))
    : (nt = t[46]);
  let rt = ze(nt),
    it = pe && rt.version > 0 && rt.status === `running`,
    at = it ? rt.output.generation : null,
    ot;
  t[47] !== C || t[48] !== Pe || t[49] !== a || t[50] !== i
    ? ((ot = (e) => Pe({ environmentId: C, input: { threadId: i, terminalId: a, data: e } })),
      (t[47] = C),
      (t[48] = Pe),
      (t[49] = a),
      (t[50] = i),
      (t[51] = ot))
    : (ot = t[51]);
  let st = (0, P.useEffectEvent)(ot),
    ct;
  t[52] !== it || t[53] !== C || t[54] !== w || t[55] !== j || t[56] !== a || t[57] !== i
    ? ((ct = (e, t) => {
        if (it && w())
          return j({ environmentId: C, input: { threadId: i, terminalId: a, cols: e, rows: t } });
      }),
      (t[52] = it),
      (t[53] = C),
      (t[54] = w),
      (t[55] = j),
      (t[56] = a),
      (t[57] = i),
      (t[58] = ct))
    : (ct = t[58]);
  let lt = (0, P.useEffectEvent)(ct),
    q = rt.output,
    J = rt.error,
    Y = rt.status,
    ut = (0, P.useRef)(Ue),
    X = (0, P.useRef)(`closed`),
    dt;
  t[59] === Je
    ? (dt = t[60])
    : ((dt = (e, t, n) => {
        let r = X.current;
        (n > 0 && t === `running`
          ? (Ve.current = !1)
          : Wn(t, r, Ve.current, n) &&
            ((Ve.current = !0),
            On(e, t === `closed` ? `Terminal closed` : `Process exited`),
            window.setTimeout(() => {
              Ve.current && Je();
            }, 0)),
          n > 0 && (X.current = t));
      }),
      (t[59] = Je),
      (t[60] = dt));
  let ft = (0, P.useEffectEvent)(dt),
    Z = rt.version,
    pt;
  t[61] !== J || t[62] !== q || t[63] !== Y || t[64] !== Z
    ? ((pt = { output: q, error: J, status: Y, version: Z }),
      (t[61] = J),
      (t[62] = q),
      (t[63] = Y),
      (t[64] = Z),
      (t[65] = pt))
    : (pt = t[65]);
  let mt = (0, P.useRef)(pt),
    ht;
  t[66] !== J || t[67] !== q || t[68] !== Y || t[69] !== Z
    ? ((ht = () => ({ output: q, error: J, status: Y, version: Z })),
      (t[66] = J),
      (t[67] = q),
      (t[68] = Y),
      (t[69] = Z),
      (t[70] = ht))
    : (ht = t[70]);
  let gt = (0, P.useEffectEvent)(ht),
    _t;
  t[71] !== A || t[72] !== r
    ? ((_t = (e, t, n) =>
        vn({ url: e, threadRef: r, openPreview: A, fallbackToBrowser: n, forceBrowser: t })),
      (t[71] = A),
      (t[72] = r),
      (t[73] = _t))
    : (_t = t[73]);
  let vt = (0, P.useEffectEvent)(_t),
    yt,
    bt;
  (t[74] !== pe || t[75] !== a || t[76] !== r
    ? ((yt = () => {
        (S.current && (S.current.input.readOnly = !pe), pe && fe.current && He(r, a));
      }),
      (bt = [pe, a, r]),
      (t[74] = pe),
      (t[75] = a),
      (t[76] = r),
      (t[77] = yt),
      (t[78] = bt))
    : ((yt = t[77]), (bt = t[78])),
    (0, P.useLayoutEffect)(yt, bt));
  let xt = (0, P.useRef)(he),
    St,
    Ct;
  (t[79] === he
    ? ((St = t[80]), (Ct = t[81]))
    : ((St = () => {
        xt.current !== he && ((xt.current = he), S.current?.refreshLinkActivation());
      }),
      (Ct = [he]),
      (t[79] = he),
      (t[80] = St),
      (t[81] = Ct)),
    (0, P.useEffect)(St, Ct));
  let Q, wt;
  (t[82] === at
    ? ((Q = t[83]), (wt = t[84]))
    : ((Q = () => {
        at !== null && S.current?.resendSize();
      }),
      (wt = [at]),
      (t[82] = at),
      (t[83] = Q),
      (t[84] = wt)),
    (0, P.useEffect)(Q, wt));
  let Tt, Et;
  (t[85] !== a || t[86] !== r || t[87] !== h
    ? ((Tt = () => {
        ((fe.current = h), S.current?.setVisible(h), h && He(r, a));
      }),
      (Et = [a, r, h]),
      (t[85] = a),
      (t[86] = r),
      (t[87] = h),
      (t[88] = Tt),
      (t[89] = Et))
    : ((Tt = t[88]), (Et = t[89])),
    (0, P.useLayoutEffect)(Tt, Et));
  let Dt, Ot;
  (t[90] !== z || t[91] !== V
    ? ((Dt = () => {
        let e = tt.current;
        (e.family !== z || e.size !== V) &&
          ((tt.current = { family: z, size: V }), S.current?.setFont(Rn(z, V)));
      }),
      (Ot = [z, V]),
      (t[90] = z),
      (t[91] = V),
      (t[92] = Dt),
      (t[93] = Ot))
    : ((Dt = t[92]), (Ot = t[93])),
    (0, P.useEffect)(Dt, Ot));
  let kt;
  t[94] !== T ||
  t[95] !== R ||
  t[96] !== s ||
  t[97] !== C ||
  t[98] !== Xe ||
  t[99] !== w ||
  t[100] !== vt ||
  t[101] !== Oe ||
  t[102] !== qe ||
  t[103] !== gt ||
  t[104] !== $e ||
  t[105] !== lt ||
  t[106] !== ft ||
  t[107] !== a ||
  t[108] !== st
    ? ((kt = () => {
        let e = x.current;
        if (!e) return;
        let t = ue(),
          n = !1,
          r = null,
          i = null,
          o = [],
          c = null;
        return (
          (async () => {
            let r = tt.current,
              l = Pn(fe, {
                theme: zn(e),
                font: Rn(r.family, r.size),
                onData: (e) => ue(e),
                onResize: (e, t) => void lt(e, t),
                onSelectionChange: () => pe(),
                beforeKey: (e) => se(e),
                onLinkActivate: (e, t) => ce(e, t),
                canActivateLink: (e) => T(e),
                onContextMenu: (e) => {
                  S.current && re(e);
                },
              }),
              u = await fn.create(e, l);
            if (n) return (u.dispose(), null);
            (u.setVisible(fe.current),
              u.setTheme(zn(e)),
              (i = u),
              (S.current = u),
              (u.input.readOnly = !w()));
            let d = tt.current;
            (d.family !== r.family || d.size !== r.size) && u.setFont(Rn(d.family, d.size));
            let f = gt();
            mt.current = f;
            let p = We(f.output, Ue);
            (p.type === `reset` && p.data.length > 0 && kn(u, p),
              (ut.current = p.cursor),
              f.error !== null && On(u, f.error),
              (X.current = `closed`),
              ft(u, f.status, f.version),
              w() && fe.current && e.contains(document.activeElement) && u.focus());
            let m = (e) => {
                let n = e !== void 0 && e,
                  r = I.current === F.current;
                ((n || r) && (F.current += 1), r && t?.contextMenu.close());
              },
              h = () => {
                (c?.cancel(), m(!0));
              };
            o.push(h);
            let g = (e) => {
                let t = e === void 0 ? null : e,
                  n = S.current,
                  r = x.current;
                if (!n || !r || !n.hasSelection()) return null;
                let i = n.getSelection(),
                  o = n.getSelectionPosition(),
                  s = i
                    .replace(
                      /\r\n/g,
                      `
`,
                    )
                    .replace(/^\n+|\n+$/g, ``);
                if (!o || s.length === 0) return null;
                let { lineStart: c, lineEnd: l } = Bn(o),
                  u = r.getBoundingClientRect();
                return {
                  position: Ae({
                    bounds: u,
                    selectionRect: n.getSelectionEndClientRect(),
                    pointer: t,
                    viewport: { width: window.innerWidth, height: window.innerHeight },
                  }),
                  clipboardText: i,
                  selection: {
                    terminalId: a,
                    terminalLabel: $e(),
                    lineStart: c,
                    lineEnd: l,
                    text: s,
                  },
                };
              },
              _ = (e) => {
                (Xe(e), S.current?.clearSelection(), S.current?.focus());
              },
              te = (e, t, n) => {
                if (e !== F.current) return;
                let r = S.current;
                r && On(r, t instanceof Error ? t.message : n);
              },
              y = (e) => {
                e === F.current && S.current?.focus();
              },
              b = async (e, t) => {
                try {
                  await de(e, `terminal selection`);
                } catch (e) {
                  te(t, e, `Unable to copy terminal selection`);
                }
                y(t);
              },
              ne = async (e) => {
                if (!w()) return;
                let t = S.current;
                if (t) {
                  try {
                    await t.pasteFromClipboard(Jn, () => e === F.current);
                  } catch (t) {
                    te(e, t, `Unable to read the clipboard`);
                    return;
                  }
                  y(e);
                }
              },
              re = async (e) => {
                if (!t || !S.current) return;
                (e.preventDefault(), h());
                let n = g(),
                  r = F.current,
                  i;
                try {
                  i = await t.contextMenu.show(
                    Hn({ hasSelection: n !== null, canAddToChat: R(), readOnly: !w() }),
                    { x: e.clientX, y: e.clientY },
                  );
                } catch (e) {
                  (te(r, e, `Unable to open the terminal context menu`), y(r));
                  return;
                }
                if (r === F.current && i !== null)
                  switch (i) {
                    case `add-to-chat`:
                      n && R() && _(n.selection);
                      return;
                    case `copy`:
                      n && (await b(n.clipboardText, r));
                      return;
                    case `paste`:
                      await ne(r);
                      return;
                    case `select-all`:
                      (S.current?.selectAll(), y(r));
                      return;
                    case `scroll-to-bottom`:
                      (S.current?.scrollToBottom(), y(r));
                      return;
                  }
              },
              ie = async (e) => {
                if (!t) {
                  h();
                  return;
                }
                if (I.current === F.current) return;
                let n = g(e);
                if (!n) {
                  h();
                  return;
                }
                let r = (F.current += 1);
                I.current = r;
                let i = await t.contextMenu
                  .show(Vn({ canAddToChat: R() }), n.position)
                  .finally(() => {
                    I.current === r && (I.current = null);
                  });
                if (r === F.current && i !== null)
                  switch (i) {
                    case `add-to-chat`:
                      R() && _(n.selection);
                      return;
                    case `copy`:
                      await b(n.clipboardText, r);
                      return;
                  }
              },
              ae = async (e, t) => {
                if (!w()) return;
                let n = S.current;
                if (!n) return;
                let r = await st(e);
                if (r._tag === `Failure` && !v(r)) {
                  let e = ee(r);
                  On(n, e instanceof Error ? e.message : t);
                }
              };
            function se(e) {
              let t = qe(),
                n = { context: { terminalFocus: !0, terminalOpen: !0 } };
              if (
                bn(e, t) ||
                O(e, t, n) ||
                Se(e, t, n) ||
                ve(e, t, n) ||
                be(e, t, n) ||
                ye(e, t, n)
              )
                return !1;
              let r = Ce(e);
              if (r !== null)
                return (
                  e.preventDefault(), e.stopPropagation(), ae(r, `Failed to move cursor`), !1
                );
              let i = E(e);
              return i === null
                ? !xe(e) ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    ae(`\f`, `Failed to clear terminal`),
                    !1)
                : (e.preventDefault(),
                  e.stopPropagation(),
                  ae(i, `Failed to delete terminal input`),
                  !1);
            }
            function ce(e, n) {
              if (!T(e)) return;
              let r = S.current;
              if (!r) return;
              if (k(e)) {
                if (!t) {
                  On(r, `Opening links is unavailable in this browser.`);
                  return;
                }
                let i = () => {
                  t.shell.openExternal(e).catch((e) => {
                    On(r, e instanceof Error ? e.message : `Unable to open link`);
                  });
                };
                if (!oe(C, `preview:operate`)) {
                  i();
                  return;
                }
                vt(e, n.metaKey || n.ctrlKey, i).catch(qn);
                return;
              }
              let i = le(e, s);
              (async () => {
                let e = await Oe(i);
                if (e._tag === `Success` || v(e)) return;
                let t = ee(e);
                On(r, t instanceof Error ? t.message : `Unable to open path`);
              })();
            }
            function ue(e) {
              w() &&
                (async () => {
                  let t = await st(e);
                  if (t._tag === `Success` || v(t)) return;
                  let n = ee(t);
                  On(u, n instanceof Error ? n.message : `Terminal write failed`);
                })();
            }
            function pe() {
              S.current?.hasSelection() ||
                (Un({
                  actionPending: c?.pending ?? !1,
                  openMenuRequestId: I.current,
                  currentRequestId: F.current,
                }) &&
                  h());
            }
            ((c = ke({
              element: e,
              onSelection: (e) => {
                ie(e);
              },
              onDismiss: (e) => m(e === `interaction`),
            })),
              o.push(() => c?.dispose()));
            let me = new MutationObserver(() => {
              let e = S.current;
              e && e.setTheme(zn(x.current));
            });
            (me.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: [`class`, `style`],
            }),
              o.push(() => me.disconnect()));
            let he = window.setTimeout(() => {
              let e = S.current;
              if (!e) return;
              let t = e.isAtBottom();
              (e.fit(), t && e.scrollToBottom());
            }, 30);
            o.push(() => window.clearTimeout(he));
            let ge = o;
            return (
              (o = []),
              (i = null),
              () => {
                for (let e of ge.toReversed()) e();
                (S.current === u && (S.current = null), u.dispose());
              }
            );
          })()
            .then((e) => {
              n ? e?.() : (r = e);
            })
            .catch((t) => {
              for (let e of o.toReversed()) e();
              if (((o = []), S.current === i && (S.current = null), i?.dispose(), (i = null), n))
                return;
              let r = t instanceof Error ? t.message : `Unable to initialize libghostty-vt`;
              e.textContent = `${r}. Close and reopen the terminal to retry.`;
            }),
          () => {
            n = !0;
            let t = e.contains(document.activeElement);
            (r?.(), w() && t && e.isConnected && e.focus({ preventScroll: !0 }));
          }
        );
      }),
      (t[94] = T),
      (t[95] = R),
      (t[96] = s),
      (t[97] = C),
      (t[98] = Xe),
      (t[99] = w),
      (t[100] = vt),
      (t[101] = Oe),
      (t[102] = qe),
      (t[103] = gt),
      (t[104] = $e),
      (t[105] = lt),
      (t[106] = ft),
      (t[107] = a),
      (t[108] = st),
      (t[109] = kt))
    : (kt = t[109]);
  let At;
  (t[110] !== s || t[111] !== C || t[112] !== a
    ? ((At = [s, C, a]), (t[110] = s), (t[111] = C), (t[112] = a), (t[113] = At))
    : (At = t[113]),
    (0, P.useEffect)(kt, At));
  let jt;
  t[114] !== ft || t[115] !== J || t[116] !== q || t[117] !== Y || t[118] !== Z
    ? ((jt = () => {
        let e = S.current,
          t = { output: q, error: J, status: Y, version: Z };
        if (!e) {
          mt.current = t;
          return;
        }
        let n = mt.current;
        (ft(e, t.status, t.version),
          (t.version !== n.version || t.output !== n.output) &&
            ((ut.current = An(e, t, ut.current)),
            t.error !== null && t.error !== n.error && On(e, t.error),
            (mt.current = t)));
      }),
      (t[114] = ft),
      (t[115] = J),
      (t[116] = q),
      (t[117] = Y),
      (t[118] = Z),
      (t[119] = jt))
    : (jt = t[119]);
  let Mt;
  (t[120] !== J || t[121] !== q || t[122] !== Y || t[123] !== Z
    ? ((Mt = [q, J, Y, Z]), (t[120] = J), (t[121] = q), (t[122] = Y), (t[123] = Z), (t[124] = Mt))
    : (Mt = t[124]),
    (0, P.useEffect)(jt, Mt));
  let Nt = h ? `${_}:${g}` : null,
    Pt,
    Ft;
  (t[125] === Nt
    ? ((Pt = t[126]), (Ft = t[127]))
    : ((Pt = () => {
        let e = S.current;
        if (!e || Nt === null) return;
        let t = e.isAtBottom(),
          n = window.requestAnimationFrame(() => {
            fe.current && (e.fit(), t && e.scrollToBottom());
          });
        return () => {
          window.cancelAnimationFrame(n);
        };
      }),
      (Ft = [Nt]),
      (t[125] = Nt),
      (t[126] = Pt),
      (t[127] = Ft)),
    (0, P.useEffect)(Pt, Ft));
  let It;
  return (
    t[128] !== ne || t[129] !== C || t[130] !== a || t[131] !== r
      ? ((It = (0, $.jsx)(`div`, {
          ref: (e) => {
            x.current = e;
            let t = () =>
              N({ mount: e, surface: S.current, canOperate: oe(C, d), visible: fe.current });
            ne && !ce.current && ((ce.current = !0), Re(r, a));
            let n = M({ threadRef: r, terminalId: a, focus: t });
            return () => {
              (n(), (x.current = null));
            };
          },
          tabIndex: -1,
          className: `relative h-full w-full overflow-hidden bg-(--terminal-background)`,
        })),
        (t[128] = ne),
        (t[129] = C),
        (t[130] = a),
        (t[131] = r),
        (t[132] = It))
      : (It = t[132]),
    It
  );
}
function qn(e) {
  fe.add(
    C({
      type: `error`,
      title: `Unable to open link`,
      description: e instanceof Error ? e.message : `An error occurred.`,
    }),
  );
}
function Jn() {
  return S(`terminal input`);
}
function Yn(e) {
  let t = (0, Ge.c)(16),
    { label: n, className: r, onClick: i, children: a, disabled: o } = e,
    s = o && `opacity-64 cursor-not-allowed`,
    c;
  t[0] !== r || t[1] !== s ? ((c = ne(r, s)), (t[0] = r), (t[1] = s), (t[2] = c)) : (c = t[2]);
  let l = o ? void 0 : i,
    u;
  t[3] !== o || t[4] !== n || t[5] !== c || t[6] !== l
    ? ((u = (0, $.jsx)(`button`, {
        type: `button`,
        className: c,
        onClick: l,
        "aria-label": n,
        "aria-disabled": o,
      })),
      (t[3] = o),
      (t[4] = n),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== a || t[9] !== u
    ? ((d = (0, $.jsx)(Le, { openOnHover: !0, render: u, children: a })),
      (t[8] = a),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === n
    ? (f = t[12])
    : ((f = (0, $.jsx)(Ve, {
        tooltipStyle: !0,
        side: `bottom`,
        sideOffset: 6,
        align: `center`,
        className: `pointer-events-none select-none`,
        children: n,
      })),
      (t[11] = n),
      (t[12] = f));
  let p;
  return (
    t[13] !== d || t[14] !== f
      ? ((p = (0, $.jsxs)(j, { children: [d, f] })), (t[13] = d), (t[14] = f), (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Xn(e) {
  let t = (0, Ge.c)(37),
    {
      terminalIds: n,
      splitDirection: r,
      activeTerminalId: i,
      terminalLabelById: a,
      resolveLaunchLocation: o,
      onActiveTerminalChange: s,
      onCloseTerminal: c,
      advancedTypography: l,
      threadRef: u,
      threadId: d,
      onAddTerminalContext: f,
      visible: p,
      resizeEpoch: m,
      drawerHeight: h,
      keybindings: g,
    } = e,
    _;
  t[0] !== r || t[1] !== n.length
    ? ((_ =
        r === `vertical`
          ? { gridTemplateRows: `repeat(${n.length}, minmax(0, 1fr))` }
          : { gridTemplateColumns: `repeat(${n.length}, minmax(0, 1fr))` }),
      (t[0] = r),
      (t[1] = n.length),
      (t[2] = _))
    : (_ = t[2]);
  let v;
  if (
    t[3] !== i ||
    t[4] !== l ||
    t[5] !== h ||
    t[6] !== g ||
    t[7] !== s ||
    t[8] !== f ||
    t[9] !== c ||
    t[10] !== m ||
    t[11] !== o ||
    t[12] !== r ||
    t[13] !== n ||
    t[14] !== a ||
    t[15] !== d ||
    t[16] !== u ||
    t[17] !== p
  ) {
    let e;
    (t[19] !== i ||
    t[20] !== l ||
    t[21] !== h ||
    t[22] !== g ||
    t[23] !== s ||
    t[24] !== f ||
    t[25] !== c ||
    t[26] !== m ||
    t[27] !== o ||
    t[28] !== r ||
    t[29] !== a ||
    t[30] !== d ||
    t[31] !== u ||
    t[32] !== p
      ? ((e = (e) => {
          let t = o(e);
          return (0, $.jsx)(
            `div`,
            {
              className: `min-h-0 min-w-0 ${r === `vertical` ? `border-t first:border-t-0` : `border-l first:border-l-0`} ${e === i ? `border-border` : `border-border/70`}`,
              onPointerDown: () => {
                e !== i && s(e);
              },
              children: (0, $.jsx)(`div`, {
                className: `h-full`,
                children: (0, $.jsx)(Gn, {
                  advancedTypography: l,
                  threadRef: u,
                  threadId: d,
                  terminalId: e,
                  terminalLabel: a.get(e) ?? `Terminal`,
                  cwd: t.cwd,
                  ...(t.worktreePath === void 0 ? {} : { worktreePath: t.worktreePath }),
                  ...(t.runtimeEnv ? { runtimeEnv: t.runtimeEnv } : {}),
                  onSessionExited: () => c(e),
                  onAddTerminalContext: f,
                  visible: p,
                  resizeEpoch: m,
                  drawerHeight: h,
                  keybindings: g,
                }),
              }),
            },
            e,
          );
        }),
        (t[19] = i),
        (t[20] = l),
        (t[21] = h),
        (t[22] = g),
        (t[23] = s),
        (t[24] = f),
        (t[25] = c),
        (t[26] = m),
        (t[27] = o),
        (t[28] = r),
        (t[29] = a),
        (t[30] = d),
        (t[31] = u),
        (t[32] = p),
        (t[33] = e))
      : (e = t[33]),
      (v = n.map(e)),
      (t[3] = i),
      (t[4] = l),
      (t[5] = h),
      (t[6] = g),
      (t[7] = s),
      (t[8] = f),
      (t[9] = c),
      (t[10] = m),
      (t[11] = o),
      (t[12] = r),
      (t[13] = n),
      (t[14] = a),
      (t[15] = d),
      (t[16] = u),
      (t[17] = p),
      (t[18] = v));
  } else v = t[18];
  let ee;
  return (
    t[34] !== _ || t[35] !== v
      ? ((ee = (0, $.jsx)(`div`, {
          className: `grid h-full w-full min-w-0 gap-0 overflow-hidden`,
          style: _,
          children: v,
        })),
        (t[34] = _),
        (t[35] = v),
        (t[36] = ee))
      : (ee = t[36]),
    ee
  );
}
function Zn(e) {
  let t = (0, Ge.c)(31),
    {
      terminalGroup: n,
      activeTerminalId: r,
      showHeader: i,
      terminalLabelById: l,
      closeShortcutLabel: u,
      canOperateTerminal: d,
      onActiveTerminalChange: f,
      onCloseTerminal: p,
    } = e,
    m;
  t[0] !== r || t[1] !== n.terminalIds
    ? ((m = n.terminalIds.includes(r)), (t[0] = r), (t[1] = n.terminalIds), (t[2] = m))
    : (m = t[2]);
  let h = m,
    g = h ? r : (n.terminalIds[0] ?? r),
    _ = n.terminalIds.length,
    v = _ > 1,
    ee = v ? (n.splitDirection === `vertical` ? `Stacked` : `Side by side`) : `Single`,
    te = v ? (n.splitDirection === `vertical` ? o : a) : c,
    y;
  t[3] !== te || t[4] !== g || t[5] !== ee || t[6] !== h || t[7] !== f || t[8] !== i || t[9] !== _
    ? ((y =
        i &&
        (0, $.jsxs)(`button`, {
          type: `button`,
          className: `flex h-[22px] w-full cursor-pointer items-center gap-1 rounded px-1.5 text-2xs ${h ? `bg-accent/50 text-foreground` : `text-muted-foreground hover:bg-accent/40 hover:text-foreground`}`,
          onClick: () => f(g),
          children: [
            (0, $.jsx)(te, { className: `size-3 shrink-0` }),
            (0, $.jsx)(`span`, { className: `min-w-0 flex-1 truncate text-left`, children: ee }),
            (0, $.jsx)(`span`, {
              className: `text-muted-foreground/70 text-3xs tabular-nums`,
              children: _,
            }),
          ],
        })),
      (t[3] = te),
      (t[4] = g),
      (t[5] = ee),
      (t[6] = h),
      (t[7] = f),
      (t[8] = i),
      (t[9] = _),
      (t[10] = y))
    : (y = t[10]);
  let b;
  if (
    t[11] !== r ||
    t[12] !== d ||
    t[13] !== u ||
    t[14] !== f ||
    t[15] !== p ||
    t[16] !== n.terminalIds ||
    t[17] !== l
  ) {
    let e;
    (t[19] !== r || t[20] !== d || t[21] !== u || t[22] !== f || t[23] !== p || t[24] !== l
      ? ((e = (e) => {
          let t = e === r,
            n = l.get(e) ?? `Terminal`,
            i = `Close ${n}${t && u ? ` (${u})` : ``}`;
          return (0, $.jsxs)(
            `div`,
            {
              className: ne(
                `group/tab flex h-6 w-full items-center gap-0.5 rounded-md pr-2 pl-1.5 text-xs`,
                t
                  ? `bg-accent text-foreground`
                  : `text-muted-foreground hover:bg-accent/60 hover:text-foreground`,
              ),
              children: [
                d
                  ? (0, $.jsx)(A, {
                      label: i,
                      onClick: () => p(e),
                      tooltip: i,
                      children: (0, $.jsx)(s, { className: `size-3 shrink-0` }),
                    })
                  : (0, $.jsx)(s, { className: `size-3 shrink-0` }),
                (0, $.jsx)(`button`, {
                  type: `button`,
                  className: `flex min-w-0 flex-1 cursor-pointer items-center gap-1 text-left`,
                  onClick: () => f(e),
                  children: (0, $.jsx)(`span`, { className: `truncate`, children: n }),
                }),
              ],
            },
            e,
          );
        }),
        (t[19] = r),
        (t[20] = d),
        (t[21] = u),
        (t[22] = f),
        (t[23] = p),
        (t[24] = l),
        (t[25] = e))
      : (e = t[25]),
      (b = n.terminalIds.map(e)),
      (t[11] = r),
      (t[12] = d),
      (t[13] = u),
      (t[14] = f),
      (t[15] = p),
      (t[16] = n.terminalIds),
      (t[17] = l),
      (t[18] = b));
  } else b = t[18];
  let x;
  t[26] === b
    ? (x = t[27])
    : ((x = (0, $.jsx)(`div`, { className: `flex flex-col gap-0.5`, children: b })),
      (t[26] = b),
      (t[27] = x));
  let re;
  return (
    t[28] !== y || t[29] !== x
      ? ((re = (0, $.jsxs)(`div`, { className: `pb-0.5`, children: [y, x] })),
        (t[28] = y),
        (t[29] = x),
        (t[30] = re))
      : (re = t[30]),
    re
  );
}
function Qn(e) {
  let t = (0, Ge.c)(171),
    {
      mode: n,
      threadRef: r,
      threadId: s,
      cwd: c,
      worktreePath: f,
      runtimeEnv: h,
      visible: g,
      height: _,
      composerHeight: v,
      terminalIds: ee,
      activeTerminalId: te,
      terminalGroups: y,
      activeTerminalGroupId: b,
      onSplitTerminal: x,
      onSplitTerminalVertical: re,
      onNewTerminal: ie,
      splitShortcutLabel: se,
      splitVerticalShortcutLabel: ce,
      newShortcutLabel: le,
      closeShortcutLabel: ue,
      onActiveTerminalChange: de,
      onCloseTerminal: S,
      onHeightChange: fe,
      onAddTerminalContext: C,
      keybindings: me,
      terminalLabelsById: w,
      terminalLaunchLocationsById: he,
    } = e,
    ge = n === void 0 ? `drawer` : n,
    T = g === void 0 || g,
    _e = v === void 0 ? 0 : v,
    E = ae(r.environmentId, d),
    D = ge === `panel`,
    [ve] = m(Ne, !1, u),
    O = _,
    ye = (0, P.useRef)(null),
    [be, xe] = (0, P.useState)(rr),
    Se = wn({ ...be, composerHeight: _e }),
    Ce;
  t[0] !== O || t[1] !== s
    ? ((Ce = () => ({ threadId: s, height: O })), (t[0] = O), (t[1] = s), (t[2] = Ce))
    : (Ce = t[2]);
  let [we, Te] = (0, P.useState)(Ce),
    Ee = we.threadId === s ? we.height : O,
    k = Tn(Ee, Se),
    De;
  t[3] !== O || t[4] !== Te || t[5] !== s
    ? ((De = (e) => {
        Te((t) => {
          let n = t.threadId === s ? t.height : O,
            r = typeof e == `function` ? e(n) : e;
          return r === n && t.threadId === s ? t : { threadId: s, height: r };
        });
      }),
      (t[3] = O),
      (t[4] = Te),
      (t[5] = s),
      (t[6] = De))
    : (De = t[6]);
  let Oe = De,
    [ke, Ae] = (0, P.useState)(0),
    A = (0, P.useRef)(k),
    Me;
  t[7] !== O || t[8] !== s
    ? ((Me = { threadId: s, height: O }), (t[7] = O), (t[8] = s), (t[9] = Me))
    : (Me = t[9]);
  let Pe = (0, P.useRef)(Me),
    Fe = (0, P.useRef)(null),
    Ie = (0, P.useRef)(!1),
    Le,
    Re,
    j,
    M;
  if (t[10] !== y || t[11] !== ee || t[12] !== w) {
    let e = [],
      n = new Set();
    for (let t of ee) {
      let r = t.trim();
      r.length === 0 || n.has(r) || (n.add(r), e.push(r));
    }
    j = e;
    let r;
    bb0: {
      if (j.length === 0) {
        r = [];
        break bb0;
      }
      let e = new Set(j),
        t = new Set(),
        n = new Set(),
        i = [],
        a = (e) => {
          if (!n.has(e)) return (n.add(e), e);
          let t = 2;
          for (; n.has(`${e}-${t}`);) t += 1;
          let r = `${e}-${t}`;
          return (n.add(r), r);
        };
      for (let n of y) {
        let r = [],
          o = new Set();
        for (let i of n.terminalIds) {
          let n = i.trim();
          n.length !== 0 && (o.has(n) || (o.add(n), e.has(n) && (t.has(n) || r.push(n))));
        }
        if (r.length === 0) continue;
        for (let e of r) t.add(e);
        let s = n.id.trim().length > 0 ? n.id.trim() : `group-${r[0] ?? j[0] ?? ``}`;
        i.push({
          id: a(s),
          terminalIds: r,
          ...(n.splitDirection === `vertical` ? { splitDirection: `vertical` } : {}),
        });
      }
      for (let e of j) t.has(e) || i.push({ id: a(`group-${e}`), terminalIds: [e] });
      let o = new Map(j.map(nr));
      (i.sort((e, t) => {
        let n = (e) => Math.min(...e.map((e) => o.get(e) ?? 1 / 0));
        return n(e.terminalIds) - n(t.terminalIds);
      }),
        (r = i));
    }
    M = r;
    let i = new Map();
    for (let [e, t] of M.entries()) for (let n of t.terminalIds) i.set(n, e);
    ((Le = i), (Re = new Map()));
    for (let e of j) Re.set(e, w?.get(e) ?? je(e));
    ((t[10] = y), (t[11] = ee), (t[12] = w), (t[13] = Le), (t[14] = Re), (t[15] = j), (t[16] = M));
  } else ((Le = t[13]), (Re = t[14]), (j = t[15]), (M = t[16]));
  let ze = Re,
    N = j.length === 0 ? `` : j.includes(te) ? te : (j[0] ?? ``),
    Be = M.findIndex((e) => e.id === b),
    Ve;
  t[17] !== Be || t[18] !== Le || t[19] !== N
    ? ((Ve = Be >= 0 ? Be : (Le.get(N) ?? 0)),
      (t[17] = Be),
      (t[18] = Le),
      (t[19] = N),
      (t[20] = Ve))
    : (Ve = t[20]);
  let He = Ve,
    Ue;
  t[21] !== j.length || t[22] !== He || t[23] !== N || t[24] !== M
    ? ((Ue = M[He]?.terminalIds ?? (j.length > 0 ? [N] : [])),
      (t[21] = j.length),
      (t[22] = He),
      (t[23] = N),
      (t[24] = M),
      (t[25] = Ue))
    : (Ue = t[25]);
  let We = Ue,
    F = M[He]?.splitDirection ?? `horizontal`,
    I = j.length > 1,
    Ke;
  t[26] === M ? (Ke = t[27]) : ((Ke = M.length > 1 || M.some(tr)), (t[26] = M), (t[27] = Ke));
  let qe = Ke,
    L = We.length >= 4,
    Je;
  t[28] !== c || t[29] !== h || t[30] !== he || t[31] !== f
    ? ((Je = (e) =>
        he?.get(e) ?? {
          cwd: c,
          ...(f === void 0 ? {} : { worktreePath: f }),
          ...(h ? { runtimeEnv: h } : {}),
        }),
      (t[28] = c),
      (t[29] = h),
      (t[30] = he),
      (t[31] = f),
      (t[32] = Je))
    : (Je = t[32]);
  let Ye = Je,
    Xe = L
      ? `Split Terminal Horizontally (max 4 per group)`
      : se
        ? `Split Terminal Horizontally (${se})`
        : `Split Terminal Horizontally`,
    Ze = L
      ? `Split Terminal Vertically (max 4 per group)`
      : ce
        ? `Split Terminal Vertically (${ce})`
        : `Split Terminal Vertically`,
    R = le ? `New Terminal (${le})` : `New Terminal`,
    Qe = ue ? `Close Terminal (${ue})` : `Close Terminal`,
    $e;
  t[33] !== E || t[34] !== L || t[35] !== x
    ? (($e = () => {
        E && !L && x();
      }),
      (t[33] = E),
      (t[34] = L),
      (t[35] = x),
      (t[36] = $e))
    : ($e = t[36]);
  let et = $e,
    z;
  t[37] !== E || t[38] !== L || t[39] !== re
    ? ((z = () => {
        E && !L && re();
      }),
      (t[37] = E),
      (t[38] = L),
      (t[39] = re),
      (t[40] = z))
    : (z = t[40]);
  let B = z,
    V;
  t[41] !== E || t[42] !== ie
    ? ((V = () => {
        E && ie();
      }),
      (t[41] = E),
      (t[42] = ie),
      (t[43] = V))
    : (V = t[43]);
  let H = V,
    tt;
  t[44] !== E || t[45] !== S || t[46] !== ze || t[47] !== r
    ? ((tt = (e) => {
        E &&
          hn([ze.get(e) ?? je(e)]).then((t) => {
            t && oe(r.environmentId, `terminal:operate`) && S(e);
          });
      }),
      (t[44] = E),
      (t[45] = S),
      (t[46] = ze),
      (t[47] = r),
      (t[48] = tt))
    : (tt = t[48]);
  let U = tt,
    W,
    G;
  (t[49] === k
    ? ((W = t[50]), (G = t[51]))
    : ((W = () => {
        let e = Fe.current;
        e ? e.drawer?.style.setProperty(`height`, `${A.current}px`) : (A.current = k);
      }),
      (G = [k]),
      (t[49] = k),
      (t[50] = W),
      (t[51] = G)),
    (0, P.useLayoutEffect)(W, G));
  let K;
  t[52] !== fe || t[53] !== s
    ? ((K = (e) => {
        let t = Pe.current;
        (t.threadId !== s || t.height !== e) && ((Pe.current = { threadId: s, height: e }), fe(e));
      }),
      (t[52] = fe),
      (t[53] = s),
      (t[54] = K))
    : (K = t[54]);
  let nt = K,
    rt,
    it;
  (t[55] !== O || t[56] !== s
    ? ((rt = () => {
        Pe.current = { threadId: s, height: O };
      }),
      (it = [O, s]),
      (t[55] = O),
      (t[56] = s),
      (t[57] = rt),
      (t[58] = it))
    : ((rt = t[57]), (it = t[58])),
    (0, P.useEffect)(rt, it));
  let at;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          e.currentTarget.setPointerCapture(e.pointerId),
          (Ie.current = !1),
          (Fe.current = {
            pointerId: e.pointerId,
            startY: e.clientY,
            startHeight: A.current,
            drawer: e.currentTarget.parentElement,
          }));
      }),
      (t[59] = at))
    : (at = t[59]);
  let ot = at,
    st;
  t[60] === Se
    ? (st = t[61])
    : ((st = (e) => {
        let t = Fe.current;
        if (!t || t.pointerId !== e.pointerId) return;
        e.preventDefault();
        let n = Tn(t.startHeight + (t.startY - e.clientY), Se);
        n !== A.current &&
          ((Ie.current = !0), (A.current = n), t.drawer?.style.setProperty(`height`, `${n}px`));
      }),
      (t[60] = Se),
      (t[61] = st));
  let ct = st,
    lt;
  t[62] !== Se || t[63] !== Ee || t[64] !== Oe || t[65] !== nt
    ? ((lt = (e) => {
        let t = Fe.current;
        if (t && t.pointerId === e.pointerId) {
          if (
            ((Fe.current = null),
            e.currentTarget.hasPointerCapture(e.pointerId) &&
              e.currentTarget.releasePointerCapture(e.pointerId),
            !Ie.current || A.current === t.startHeight)
          ) {
            let e = Tn(Ee, Se);
            ((A.current = e), t.drawer?.style.setProperty(`height`, `${e}px`));
          } else (Oe(A.current), nt(A.current), Ae(er));
        }
      }),
      (t[62] = Se),
      (t[63] = Ee),
      (t[64] = Oe),
      (t[65] = nt),
      (t[66] = lt))
    : (lt = t[66]);
  let q = lt,
    J = (0, P.useRef)(be),
    Y;
  t[67] === _e
    ? (Y = t[68])
    : ((Y = (e, t) => {
        let n = Dn(e),
          r = J.current,
          i =
            n.viewportHeight !== r.viewportHeight ||
            n.chatColumnHeight !== r.chatColumnHeight ||
            n.headerHeight !== r.headerHeight;
        if (!i && t === `column`) return;
        J.current = n;
        let a = Fe.current,
          o = Tn(A.current, wn({ ...n, composerHeight: _e }));
        (a && o !== A.current && ((A.current = o), a.drawer?.style.setProperty(`height`, `${o}px`)),
          i && xe(n),
          Ae($n));
      }),
      (t[67] = _e),
      (t[68] = Y));
  let ut = (0, P.useEffectEvent)(Y),
    X;
  t[69] !== D || t[70] !== ut || t[71] !== T
    ? ((X = () => {
        if (!T) return;
        let e = D ? null : En(ye.current),
          t = () => ut(e, `window`);
        t();
        let n = e?.querySelector(`[data-chat-header]`),
          r = e ? pe(n ? [e, n] : e, () => ut(e, `column`)) : void 0;
        return (
          window.addEventListener(`resize`, t),
          () => {
            (r?.(), window.removeEventListener(`resize`, t));
          }
        );
      }),
      (t[69] = D),
      (t[70] = ut),
      (t[71] = T),
      (t[72] = X))
    : (X = t[72]);
  let dt;
  (t[73] !== D || t[74] !== T
    ? ((dt = [D, T]), (t[73] = D), (t[74] = T), (t[75] = dt))
    : (dt = t[75]),
    (0, P.useLayoutEffect)(X, dt));
  let ft;
  t[76] !== Ee || t[77] !== nt
    ? ((ft = () => nt(Ee)), (t[76] = Ee), (t[77] = nt), (t[78] = ft))
    : (ft = t[78]);
  let Z = (0, P.useEffectEvent)(ft),
    pt;
  t[79] === Z ? (pt = t[80]) : ((pt = () => () => Z()), (t[79] = Z), (t[80] = pt));
  let mt;
  if (
    (t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ((mt = []), (t[81] = mt)) : (mt = t[81]),
    (0, P.useEffect)(pt, mt),
    j.length === 0)
  ) {
    let e = D ? `right-panel` : `drawer`,
      n = D ? `h-full flex-1` : `z-45 shrink-0 border-t border-border/80`,
      r;
    t[82] === n
      ? (r = t[83])
      : ((r = ne(`relative flex min-w-0 flex-col overflow-hidden bg-background`, n)),
        (t[82] = n),
        (t[83] = r));
    let i;
    t[84] !== k || t[85] !== D
      ? ((i = D ? void 0 : { height: `${k}px` }), (t[84] = k), (t[85] = D), (t[86] = i))
      : (i = t[86]);
    let a;
    t[87] !== q || t[88] !== ct || t[89] !== D
      ? ((a = D
          ? null
          : (0, $.jsx)(`div`, {
              className: `absolute inset-x-0 top-0 z-20 h-1.5 cursor-row-resize`,
              onPointerDown: ot,
              onPointerMove: ct,
              onPointerUp: q,
              onPointerCancel: q,
              onLostPointerCapture: q,
            })),
        (t[87] = q),
        (t[88] = ct),
        (t[89] = D),
        (t[90] = a))
      : (a = t[90]);
    let o;
    t[91] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(`p`, { children: `No terminal sessions for this thread yet.` })),
        (t[91] = o))
      : (o = t[91]);
    let s = !E,
      c;
    t[92] !== R || t[93] !== H || t[94] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-4 py-6 text-center text-sm text-muted-foreground`,
          children: [
            o,
            (0, $.jsx)(p, { size: `xs`, variant: `outline`, onClick: H, disabled: s, children: R }),
          ],
        })),
        (t[92] = R),
        (t[93] = H),
        (t[94] = s),
        (t[95] = c))
      : (c = t[95]);
    let l;
    return (
      t[96] !== e || t[97] !== r || t[98] !== i || t[99] !== a || t[100] !== c
        ? ((l = (0, $.jsxs)(`aside`, {
            ref: ye,
            "data-thread-terminal-drawer": !0,
            "data-terminal-owner": e,
            className: r,
            style: i,
            children: [a, c],
          })),
          (t[96] = e),
          (t[97] = r),
          (t[98] = i),
          (t[99] = a),
          (t[100] = c),
          (t[101] = l))
        : (l = t[101]),
      l
    );
  }
  let ht = D ? `right-panel` : `drawer`,
    gt = D ? `h-full flex-1` : `z-45 shrink-0 border-t border-border/80`,
    _t;
  t[102] === gt
    ? (_t = t[103])
    : ((_t = ne(`relative flex min-w-0 flex-col overflow-hidden bg-background`, gt)),
      (t[102] = gt),
      (t[103] = _t));
  let vt;
  t[104] !== k || t[105] !== D
    ? ((vt = D ? void 0 : { height: `${k}px` }), (t[104] = k), (t[105] = D), (t[106] = vt))
    : (vt = t[106]);
  let yt;
  t[107] !== q || t[108] !== ct || t[109] !== D
    ? ((yt = D
        ? null
        : (0, $.jsx)(`div`, {
            className: `absolute inset-x-0 top-0 z-20 h-1.5 cursor-row-resize`,
            onPointerDown: ot,
            onPointerMove: ct,
            onPointerUp: q,
            onPointerCancel: q,
            onLostPointerCapture: q,
          })),
      (t[107] = q),
      (t[108] = ct),
      (t[109] = D),
      (t[110] = yt))
    : (yt = t[110]);
  let bt;
  t[111] !== E ||
  t[112] !== Qe ||
  t[113] !== U ||
  t[114] !== L ||
  t[115] !== I ||
  t[116] !== R ||
  t[117] !== H ||
  t[118] !== et ||
  t[119] !== B ||
  t[120] !== N ||
  t[121] !== Xe ||
  t[122] !== Ze
    ? ((bt =
        !I &&
        (0, $.jsx)(`div`, {
          className: `pointer-events-none absolute right-2 top-2 z-20`,
          children: (0, $.jsxs)(`div`, {
            className: `pointer-events-auto inline-flex items-center overflow-hidden rounded-md border border-border/80 bg-background shadow-xs`,
            children: [
              (0, $.jsx)(Yn, {
                disabled: !E,
                className: `p-1 text-foreground/90 transition-colors ${L ? `cursor-not-allowed opacity-64 hover:bg-transparent` : `hover:bg-accent`}`,
                onClick: et,
                label: Xe,
                children: (0, $.jsx)(a, { className: `size-3.25` }),
              }),
              (0, $.jsx)(`div`, { className: `h-4 w-px bg-border/80` }),
              (0, $.jsx)(Yn, {
                disabled: !E,
                className: `p-1 text-foreground/90 transition-colors ${L ? `cursor-not-allowed opacity-64 hover:bg-transparent` : `hover:bg-accent`}`,
                onClick: B,
                label: Ze,
                children: (0, $.jsx)(o, { className: `size-3.25` }),
              }),
              (0, $.jsx)(`div`, { className: `h-4 w-px bg-border/80` }),
              (0, $.jsx)(Yn, {
                disabled: !E,
                className: `p-1 text-foreground/90 transition-colors hover:bg-accent`,
                onClick: H,
                label: R,
                children: (0, $.jsx)(i, { className: `size-3.25` }),
              }),
              (0, $.jsx)(`div`, { className: `h-4 w-px bg-border/80` }),
              (0, $.jsx)(Yn, {
                disabled: !E,
                className: `p-1 text-foreground/90 transition-colors hover:bg-accent`,
                onClick: () => U(N),
                label: Qe,
                children: (0, $.jsx)(l, { className: `size-3.25` }),
              }),
            ],
          }),
        })),
      (t[111] = E),
      (t[112] = Qe),
      (t[113] = U),
      (t[114] = L),
      (t[115] = I),
      (t[116] = R),
      (t[117] = H),
      (t[118] = et),
      (t[119] = B),
      (t[120] = N),
      (t[121] = Xe),
      (t[122] = Ze),
      (t[123] = bt))
    : (bt = t[123]);
  let xt = I && `gap-1.5`,
    St;
  t[124] === xt
    ? (St = t[125])
    : ((St = ne(`flex h-full min-h-0 bg-(--terminal-background)`, xt)),
      (t[124] = xt),
      (t[125] = St));
  let Ct;
  t[126] !== ve ||
  t[127] !== k ||
  t[128] !== me ||
  t[129] !== de ||
  t[130] !== C ||
  t[131] !== S ||
  t[132] !== ke ||
  t[133] !== Ye ||
  t[134] !== N ||
  t[135] !== F ||
  t[136] !== ze ||
  t[137] !== s ||
  t[138] !== r ||
  t[139] !== T ||
  t[140] !== We
    ? ((Ct = (0, $.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, $.jsx)(Xn, {
          terminalIds: We,
          splitDirection: F,
          activeTerminalId: N,
          terminalLabelById: ze,
          resolveLaunchLocation: Ye,
          onActiveTerminalChange: de,
          onCloseTerminal: S,
          advancedTypography: ve,
          threadRef: r,
          threadId: s,
          onAddTerminalContext: C,
          visible: T,
          resizeEpoch: ke,
          drawerHeight: k,
          keybindings: me,
        }),
      })),
      (t[126] = ve),
      (t[127] = k),
      (t[128] = me),
      (t[129] = de),
      (t[130] = C),
      (t[131] = S),
      (t[132] = ke),
      (t[133] = Ye),
      (t[134] = N),
      (t[135] = F),
      (t[136] = ze),
      (t[137] = s),
      (t[138] = r),
      (t[139] = T),
      (t[140] = We),
      (t[141] = Ct))
    : (Ct = t[141]);
  let Q;
  t[142] !== E ||
  t[143] !== ue ||
  t[144] !== Qe ||
  t[145] !== U ||
  t[146] !== L ||
  t[147] !== I ||
  t[148] !== R ||
  t[149] !== de ||
  t[150] !== H ||
  t[151] !== et ||
  t[152] !== B ||
  t[153] !== N ||
  t[154] !== M ||
  t[155] !== qe ||
  t[156] !== Xe ||
  t[157] !== Ze ||
  t[158] !== ze
    ? ((Q =
        I &&
        (0, $.jsxs)(`aside`, {
          className: `flex w-36 min-w-36 flex-col border border-border/70 bg-muted/10`,
          children: [
            (0, $.jsx)(`div`, {
              className: `flex h-[22px] items-stretch justify-end border-b border-border/70`,
              children: (0, $.jsxs)(`div`, {
                className: `inline-flex h-full items-stretch`,
                children: [
                  (0, $.jsx)(Yn, {
                    disabled: !E,
                    className: `inline-flex h-full items-center px-1 text-foreground/90 transition-colors ${L ? `cursor-not-allowed opacity-64 hover:bg-transparent` : `hover:bg-accent/70`}`,
                    onClick: et,
                    label: Xe,
                    children: (0, $.jsx)(a, { className: `size-3.25` }),
                  }),
                  (0, $.jsx)(Yn, {
                    disabled: !E,
                    className: `inline-flex h-full items-center border-l border-border/70 px-1 text-foreground/90 transition-colors ${L ? `cursor-not-allowed opacity-64 hover:bg-transparent` : `hover:bg-accent/70`}`,
                    onClick: B,
                    label: Ze,
                    children: (0, $.jsx)(o, { className: `size-3.25` }),
                  }),
                  (0, $.jsx)(Yn, {
                    disabled: !E,
                    className: `inline-flex h-full items-center border-l border-border/70 px-1 text-foreground/90 transition-colors hover:bg-accent/70`,
                    onClick: H,
                    label: R,
                    children: (0, $.jsx)(i, { className: `size-3.25` }),
                  }),
                  (0, $.jsx)(Yn, {
                    disabled: !E,
                    className: `inline-flex h-full items-center border-l border-border/70 px-1 text-foreground/90 transition-colors hover:bg-accent/70`,
                    onClick: () => U(N),
                    label: Qe,
                    children: (0, $.jsx)(l, { className: `size-3.25` }),
                  }),
                ],
              }),
            }),
            (0, $.jsx)(`div`, {
              className: `min-h-0 flex-1 overflow-y-auto px-1 py-1`,
              children: M.map((e) =>
                (0, $.jsx)(
                  Zn,
                  {
                    terminalGroup: e,
                    activeTerminalId: N,
                    showHeader: qe,
                    terminalLabelById: ze,
                    closeShortcutLabel: ue,
                    canOperateTerminal: E,
                    onActiveTerminalChange: de,
                    onCloseTerminal: U,
                  },
                  e.id,
                ),
              ),
            }),
          ],
        })),
      (t[142] = E),
      (t[143] = ue),
      (t[144] = Qe),
      (t[145] = U),
      (t[146] = L),
      (t[147] = I),
      (t[148] = R),
      (t[149] = de),
      (t[150] = H),
      (t[151] = et),
      (t[152] = B),
      (t[153] = N),
      (t[154] = M),
      (t[155] = qe),
      (t[156] = Xe),
      (t[157] = Ze),
      (t[158] = ze),
      (t[159] = Q))
    : (Q = t[159]);
  let wt;
  t[160] !== St || t[161] !== Ct || t[162] !== Q
    ? ((wt = (0, $.jsx)(`div`, {
        className: `min-h-0 w-full flex-1`,
        children: (0, $.jsxs)(`div`, { className: St, children: [Ct, Q] }),
      })),
      (t[160] = St),
      (t[161] = Ct),
      (t[162] = Q),
      (t[163] = wt))
    : (wt = t[163]);
  let Tt;
  return (
    t[164] !== ht ||
    t[165] !== _t ||
    t[166] !== vt ||
    t[167] !== yt ||
    t[168] !== bt ||
    t[169] !== wt
      ? ((Tt = (0, $.jsxs)(`aside`, {
          ref: ye,
          "data-thread-terminal-drawer": !0,
          "data-terminal-owner": ht,
          className: _t,
          style: vt,
          children: [yt, bt, wt],
        })),
        (t[164] = ht),
        (t[165] = _t),
        (t[166] = vt),
        (t[167] = yt),
        (t[168] = bt),
        (t[169] = wt),
        (t[170] = Tt))
      : (Tt = t[170]),
    Tt
  );
}
function $n(e) {
  return e + 1;
}
function er(e) {
  return e + 1;
}
function tr(e) {
  return e.terminalIds.length > 1;
}
function nr(e, t) {
  return [e, t];
}
function rr() {
  return Dn(null);
}
export { bn as a, fn as c, xn as i, Qn as n, hn as o, zn as r, mn as s, Gn as t };
//# sourceMappingURL=ThreadTerminalDrawer-GjGtrcWP.js.map
