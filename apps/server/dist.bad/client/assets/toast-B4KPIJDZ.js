import { i as e, n as t } from "./rolldown-runtime-COiEfhsA.js";
import { t as n } from "./react-BP46yLMB.js";
import { n as r, t as i } from "./jsx-runtime-BQExFN_X.js";
import { t as a } from "./circle-alert-BdjXOepq.js";
import { n as o, r as s, t as c } from "./triangle-alert-Ca4wixX0.js";
import { t as l } from "./x-Blp0Exqg.js";
import {
  $i as u,
  A as d,
  Bn as f,
  Ca as p,
  Co as m,
  Da as h,
  Dr as g,
  Dt as _,
  Fa as v,
  Ga as y,
  Gr as b,
  Ha as x,
  Hr as S,
  JC as C,
  Jr as w,
  Jv as T,
  Ka as E,
  Mi as D,
  Mo as O,
  Oo as k,
  Qi as A,
  Ta as j,
  Uy as M,
  Vn as N,
  Vy as P,
  Wa as ee,
  Wn as F,
  Xn as te,
  Yi as ne,
  _a as I,
  ba as L,
  da as R,
  ga as re,
  ha as ie,
  hr as ae,
  ja as oe,
  jo as z,
  jy as se,
  ko as ce,
  kr as le,
  pa as B,
  qa as ue,
  t as V,
  tl as H,
  ua as U,
  va as de,
  wa as fe,
  wo as W,
  ya as G,
  yi as pe,
  zi as K,
} from "./utils-CPoejuy5.js";
import { n as me, t as he } from "./MorphIcon-DCVwjy7i.js";
import { t as ge } from "./useStableCallback-XvXMCrxI.js";
import { t as _e } from "./useParams-JSmvSNOU.js";
var q = e(n()),
  ve = q.createContext(void 0);
function ye() {
  let e = q.useContext(ve);
  if (!e) throw Error(O(73));
  return e;
}
var J = 0;
function be(e) {
  return ((J += 1), `${e}-${Math.random().toString(36).slice(2, 6)}-${J}`);
}
function xe(e, t) {
  if (typeof e == `string`) return { description: e };
  if (typeof e == `function`) {
    let n = e(t);
    return typeof n == `string` ? { description: n } : n;
  }
  return e;
}
function Se(e) {
  let t = new Map(),
    n = 0,
    r = 0;
  return (
    e.forEach((e, i) => {
      let a = e.transitionStatus === `ending`;
      (t.set(e.id, { value: e, domIndex: i, visibleIndex: a ? -1 : n, offsetY: r }),
        (r += e.height || 0),
        a || (n += 1));
    }),
    t
  );
}
var Ce = (e) => e.toastMetadata,
  Y = {
    toasts: K((e) => e.toasts),
    isEmpty: K((e) => e.toasts.length === 0),
    toast: K(Ce, (e, t) => e.get(t)?.value),
    toastIndex: K(Ce, (e, t) => e.get(t)?.domIndex ?? -1),
    toastOffsetY: K(Ce, (e, t) => e.get(t)?.offsetY ?? 0),
    toastVisibleIndex: K(Ce, (e, t) => e.get(t)?.visibleIndex ?? -1),
    hovering: K((e) => e.hovering),
    focused: K((e) => e.focused),
    expanded: K((e) => e.hovering || e.focused),
    expandedOrOutOfFocus: K((e) => e.hovering || e.focused || !e.isWindowFocused),
    prevFocusElement: K((e) => e.prevFocusElement),
  },
  we = class extends D {
    timers = new Map();
    areTimersPaused = !1;
    constructor(e) {
      super({ ...e, toastMetadata: Se(e.toasts) }, {}, Y);
    }
    setFocused(e) {
      this.set(`focused`, e);
    }
    setHovering(e) {
      this.set(`hovering`, e);
    }
    setIsWindowFocused(e) {
      this.set(`isWindowFocused`, e);
    }
    setPrevFocusElement(e) {
      this.set(`prevFocusElement`, e);
    }
    setViewport = (e) => {
      this.set(`viewport`, e);
    };
    disposeEffect = () => () => {
      (this.timers.forEach((e) => {
        e.timeout?.clear();
      }),
        this.timers.clear());
    };
    removeToast(e, t = {}) {
      let n = Y.toastIndex(this.state, e);
      if (n === -1) return;
      let r = this.state.toasts[n];
      t.skipOnRemove || r?.onRemove?.();
      let i = [...this.state.toasts];
      (i.splice(n, 1), this.setToasts(i));
    }
    addToast = (e) => {
      let { timeout: t, limit: n } = this.state,
        r = e.id || be(`toast`);
      if (e.id) {
        let t = Y.toast(this.state, e.id);
        if (t) {
          if (t.transitionStatus === `ending`) this.removeToast(e.id, { skipOnRemove: !0 });
          else {
            let { id: t, transitionStatus: n, ...r } = e;
            return (this.updateToastInternal(e.id, r, { resetTimer: !0, markUpdated: !0 }), e.id);
          }
        }
      }
      let i = { ...e, id: r, updateKey: 0, transitionStatus: `starting` },
        a = [i, ...this.state.toasts],
        o = a.filter((e) => e.transitionStatus !== `ending`);
      if (o.length > n) {
        let e = o.length - n,
          t = o.slice(-e),
          r = new Set(t.map((e) => e.id));
        this.setToasts(
          a.map((e) => {
            let t = r.has(e.id);
            return e.limited === t ? e : { ...e, limited: t };
          }),
        );
      } else this.setToasts(a.map((e) => (e.limited ? { ...e, limited: !1 } : e)));
      let s = i.timeout ?? t;
      return (
        i.type !== `loading` && s > 0 && this.scheduleTimer(r, s, () => this.closeToast(r)),
        Y.expandedOrOutOfFocus(this.state) && this.pauseTimers(),
        r
      );
    };
    updateToast = (e, t) => {
      this.updateToastInternal(e, t, { markUpdated: !0 });
    };
    updateToastInternal = (e, t, n = {}) => {
      let { timeout: r, toasts: i } = this.state,
        a = Y.toast(this.state, e) ?? null;
      if (!a || a.transitionStatus === `ending`) return;
      let o = { ...a, ...t, ...(n.markUpdated && { updateKey: (a.updateKey ?? 0) + 1 }) };
      this.setToasts(i.map((t) => (t.id === e ? o : t)));
      let s = o.timeout ?? r,
        c = a?.timeout ?? r,
        l = Object.hasOwn(t, `timeout`),
        u = o.transitionStatus !== `ending` && o.type !== `loading` && s > 0,
        d = this.timers.has(e),
        f = c !== s,
        p = a?.type === `loading`;
      if (!u && d) (this.timers.get(e)?.timeout?.clear(), this.timers.delete(e));
      else if (u && (!d || f || l || p || n.resetTimer)) {
        let t = this.timers.get(e);
        (t && (t.timeout?.clear(), this.timers.delete(e)),
          this.scheduleTimer(e, s, () => this.closeToast(e)),
          Y.expandedOrOutOfFocus(this.state) && this.pauseTimers());
      }
    };
    closeToast = (e) => {
      let t = e === void 0,
        { limit: n, toasts: r } = this.state,
        i;
      if (t)
        ((i = r),
          this.timers.forEach((e) => {
            e.timeout?.clear();
          }),
          this.timers.clear());
      else {
        let t = Y.toast(this.state, e);
        if (!t) return;
        i = [t];
        let n = this.timers.get(e);
        n?.timeout && (n.timeout.clear(), this.timers.delete(e));
      }
      let a = 0,
        o = r.map((r) => {
          if (t || r.id === e) return { ...r, transitionStatus: `ending`, height: 0 };
          if (r.transitionStatus === `ending`) return r;
          let i = a >= n;
          return ((a += 1), r.limited === i ? r : { ...r, limited: i });
        }),
        s = { toasts: o, toastMetadata: Se(o) };
      ((t || r.length === 1) && ((s.hovering = !1), (s.focused = !1)),
        this.update(s),
        i.forEach((e) => {
          e.transitionStatus !== `ending` && e.onClose?.();
        }),
        this.handleFocusManagement(e));
    };
    promiseToast = (e, t) => {
      let n = xe(t.loading),
        r = this.addToast({ ...n, type: `loading` }),
        i = e
          .then((e) => {
            let n = xe(t.success, e);
            return (this.updateToast(r, { ...n, type: `success`, timeout: n.timeout }), e);
          })
          .catch((e) => {
            let n = xe(t.error, e);
            return (
              this.updateToast(r, { ...n, type: `error`, timeout: n.timeout }), Promise.reject(e)
            );
          });
      return ({}.hasOwnProperty.call(t, `setPromise`) && t.setPromise(i), i);
    };
    pauseTimers() {
      this.areTimersPaused ||
        ((this.areTimersPaused = !0),
        this.timers.forEach((e) => {
          if (e.timeout) {
            e.timeout.clear();
            let t = Date.now() - e.start,
              n = e.delay - t;
            e.remaining = n > 0 ? n : 0;
          }
        }));
    }
    resumeTimers() {
      this.areTimersPaused &&
        ((this.areTimersPaused = !1),
        this.timers.forEach((e, t) => {
          ((e.remaining = e.remaining > 0 ? e.remaining : e.delay),
            (e.timeout ??= p.create()),
            e.timeout.start(e.remaining, () => {
              (this.timers.delete(t), e.callback());
            }),
            (e.start = Date.now()));
        }));
    }
    restoreFocusToPrevElement() {
      this.state.prevFocusElement?.focus({ preventScroll: !0 });
    }
    handleDocumentPointerDown = (e) => {
      if (e.pointerType !== `touch`) return;
      let t = L(e);
      G(this.state.viewport, t) ||
        (this.resumeTimers(), this.update({ hovering: !1, focused: !1 }));
    };
    scheduleTimer(e, t, n) {
      let r = Date.now(),
        i = !Y.expandedOrOutOfFocus(this.state),
        a = i ? p.create() : void 0;
      (a?.start(t, () => {
        (this.timers.delete(e), n());
      }),
        this.timers.set(e, { timeout: a, start: i ? r : 0, delay: t, remaining: t, callback: n }));
    }
    setToasts(e) {
      let t = { toasts: e, toastMetadata: Se(e) };
      (e.length === 0 && ((t.hovering = !1), (t.focused = !1)), this.update(t));
    }
    handleFocusManagement(e) {
      let t = de(B(this.state.viewport));
      if (!this.state.viewport || !G(this.state.viewport, t) || !I(t)) return;
      if (e === void 0) {
        this.restoreFocusToPrevElement();
        return;
      }
      let n = Y.toasts(this.state),
        r = Y.toastIndex(this.state, e),
        i = null,
        a = r + 1;
      for (; a < n.length;) {
        if (n[a].transitionStatus !== `ending`) {
          i = n[a];
          break;
        }
        a += 1;
      }
      if (!i)
        for (a = r - 1; a >= 0;) {
          if (n[a].transitionStatus !== `ending`) {
            i = n[a];
            break;
          }
          --a;
        }
      i ? i.ref?.current?.focus() : this.restoreFocusToPrevElement();
    }
  },
  X = e(i()),
  Te = function (e) {
    let { children: t, timeout: n = 5e3, limit: r = 3, toastManager: i } = e,
      a = z(
        () =>
          new we({
            timeout: n,
            limit: r,
            viewport: null,
            toasts: [],
            hovering: !1,
            focused: !1,
            isWindowFocused: !0,
            prevFocusElement: null,
          }),
      ).current;
    return (
      oe(a.disposeEffect),
      q.useEffect(
        function () {
          if (i)
            return i[` subscribe`](({ action: e, options: t }) => {
              let n = t.id;
              e === `promise` && t.promise
                ? a.promiseToast(t.promise, t)
                : e === `update` && n
                  ? a.updateToast(n, t)
                  : e === `close`
                    ? a.closeToast(n)
                    : a.addToast(t);
            });
        },
        [a, i],
      ),
      a.useSyncedValues({ timeout: n, limit: r }),
      (0, X.jsx)(ve.Provider, { value: a, children: t })
    );
  },
  Ee = (function (e) {
    return ((e.frontmostHeight = `--toast-frontmost-height`), e);
  })({}),
  De = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, children: a, ...o } = e,
      s = ye(),
      c = fe(),
      l = q.useRef(!1),
      u = q.useRef(!1),
      d = q.useRef(!1),
      f = s.useState(`isEmpty`),
      p = s.useState(`toasts`),
      m = s.useState(`focused`),
      h = s.useState(`expanded`),
      g = s.useState(`prevFocusElement`),
      _ = p[0]?.height ?? 0,
      v = q.useMemo(() => p.some((e) => e.transitionStatus === `ending`), [p]),
      y = q.useMemo(() => p.filter((e) => e.priority === `high`), [p]);
    (q.useEffect(() => {
      let e = s.state.viewport;
      if (!e) return;
      function t(t) {
        f ||
          (t.key === `F6` &&
            L(t) !== e &&
            (t.preventDefault(),
            s.setPrevFocusElement(de(B(e))),
            e?.focus({ preventScroll: !0 }),
            s.pauseTimers(),
            s.setFocused(!0)));
      }
      let n = E(e);
      return re(n, `keydown`, t);
    }, [s, f]),
      q.useEffect(() => {
        let e = s.state.viewport;
        if (!e || f) return;
        let t = E(e);
        function n(e) {
          L(e) === t && (s.setIsWindowFocused(!1), s.pauseTimers());
        }
        function r(n) {
          if (n.relatedTarget) return;
          let r = L(n),
            i = de(B(e));
          ((r !== t && G(e, r) && I(i)) || s.resumeTimers(),
            c.start(0, () => s.setIsWindowFocused(!0)));
        }
        return ie(re(t, `blur`, n, !0), re(t, `focus`, r, !0));
      }, [s, c, f]),
      q.useEffect(() => {
        let e = s.state.viewport;
        if (!e || f) return;
        let t = B(e);
        return re(t, `pointerdown`, s.handleDocumentPointerDown, !0);
      }, [f, s]));
    function b(e) {
      let t = s.state.viewport;
      t &&
        ((l.current = !0),
        e.relatedTarget === t ? p[0]?.ref?.current?.focus() : s.restoreFocusToPrevElement());
    }
    function x(e) {
      e.key === `Tab` &&
        e.shiftKey &&
        L(e.nativeEvent) === s.state.viewport &&
        (e.preventDefault(), s.restoreFocusToPrevElement(), s.resumeTimers());
    }
    function S() {
      let e = s.state.toasts.some((e) => e.transitionStatus === `ending`);
      s.state.isWindowFocused &&
        !e &&
        !d.current &&
        u.current &&
        (s.resumeTimers(), s.setHovering(!1), (u.current = !1));
    }
    q.useEffect(S, [v, s]);
    function C() {
      (s.pauseTimers(), s.setHovering(!0), (u.current = !1));
    }
    function w() {
      v || d.current ? (u.current = !0) : (s.resumeTimers(), s.setHovering(!1));
    }
    function T(e) {
      e.pointerType === `touch` && (d.current = !0);
    }
    function D(e) {
      e.pointerType === `touch` && ((d.current = !1), S());
    }
    function O() {
      l.current
        ? (l.current = !1)
        : m || (I(de(B(s.state.viewport))) && (s.setFocused(!0), s.pauseTimers()));
    }
    function k(e) {
      m && !G(s.state.viewport, e.relatedTarget) && (s.setFocused(!1), s.resumeTimers());
    }
    let A = {
        tabIndex: -1,
        role: `region`,
        "aria-live": `polite`,
        "aria-atomic": !1,
        "aria-relevant": `additions text`,
        "aria-label": `Notifications`,
        onMouseEnter: C,
        onMouseMove: C,
        onMouseLeave: w,
        onFocus: O,
        onBlur: k,
        onKeyDown: x,
        onClick: O,
        onPointerDown: T,
        onPointerUp: D,
        onPointerCancel: D,
      },
      j = { expanded: h },
      M = W(`div`, e, {
        ref: [t, s.setViewport],
        state: j,
        props: [
          A,
          { style: { [Ee.frontmostHeight]: _ ? `${_}px` : void 0 } },
          o,
          {
            children: (0, X.jsxs)(q.Fragment, {
              children: [
                !f && g && (0, X.jsx)(U, { onFocus: b }),
                a,
                !f && g && (0, X.jsx)(U, { onFocus: b }),
              ],
            }),
          },
        ],
      });
    return (0, X.jsxs)(q.Fragment, {
      children: [
        !f && g && (0, X.jsx)(U, { onFocus: b }),
        M,
        !m &&
          y.length > 0 &&
          (0, X.jsx)(`div`, {
            style: R,
            children: y.map((e) =>
              (0, X.jsxs)(
                `div`,
                {
                  role: `alert`,
                  "aria-atomic": !0,
                  children: [
                    (0, X.jsx)(`div`, { children: e.title }),
                    (0, X.jsx)(`div`, { children: e.description }),
                  ],
                },
                e.id,
              ),
            ),
          }),
      ],
    });
  }),
  Oe = e(h()),
  ke = q.createContext(void 0);
function Ae() {
  let e = q.useContext(ke);
  if (!e) throw Error(O(66));
  return e;
}
var Z = (function (e) {
  return (
    (e.index = `--toast-index`),
    (e.offsetY = `--toast-offset-y`),
    (e.height = `--toast-height`),
    (e.swipeMovementX = `--toast-swipe-movement-x`),
    (e.swipeMovementY = `--toast-swipe-movement-y`),
    e
  );
})({});
function je(e, t, n) {
  switch (e) {
    case `up`:
      return -n;
    case `down`:
      return n;
    case `left`:
      return -t;
    case `right`:
      return t;
    default:
      return 0;
  }
}
function Me(e) {
  let t = E(e).getComputedStyle(e).transform,
    n = 0,
    r = 0,
    i = 1;
  if (t && t !== `none`) {
    let e = t.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (e) {
      let t = e[1].split(`, `).map(parseFloat);
      t.length === 6
        ? ((n = t[4]), (r = t[5]), (i = Math.sqrt(t[0] * t[0] + t[1] * t[1])))
        : t.length === 16 && ((n = t[12]), (r = t[13]), (i = t[0]));
    }
  }
  return { x: n, y: r, scale: i };
}
var Ne = {
    ...m,
    swipeDirection(e) {
      return e ? { "data-swipe-direction": e } : null;
    },
  },
  Pe = 40,
  Fe = 10,
  Q = 0.5,
  Ie = 1,
  Le = `${ne},${A}`,
  Re = q.forwardRef(function (e, t) {
    let {
        toast: n,
        render: r,
        className: i,
        swipeDirection: a = [`down`, `right`],
        style: o,
        ...s
      } = e,
      c = n.positionerProps?.anchor !== void 0,
      l = [];
    c || (l = Array.isArray(a) ? a : [a]);
    let u = l.length > 0,
      d = ye(),
      [f, p] = q.useState(void 0),
      [m, h] = q.useState(!1),
      [g, _] = q.useState(!1),
      [v, b] = q.useState(!1),
      [x, S] = q.useState({ x: 0, y: 0 }),
      [C, T] = q.useState({ x: 0, y: 0, scale: 1 }),
      [E, D] = q.useState(),
      [O, k] = q.useState(),
      [A, M] = q.useState(null),
      N = q.useRef(null),
      P = q.useRef({ x: 0, y: 0 }),
      F = q.useRef({ x: 0, y: 0, scale: 1 }),
      te = q.useRef(void 0),
      ne = q.useRef(0),
      I = q.useRef(!1),
      R = q.useRef({ x: 0, y: 0 }),
      ie = q.useRef(!1),
      ae = q.useRef({ x: 0, y: 0 }),
      oe = q.useRef(null),
      z = q.useRef(null),
      se = d.useState(`toastIndex`, n.id),
      ce = d.useState(`toastVisibleIndex`, n.id),
      le = d.useState(`toastOffsetY`, n.id),
      ue = d.useState(`focused`),
      V = d.useState(`expanded`);
    j({
      open: n.transitionStatus !== `ending`,
      ref: N,
      onComplete() {
        n.transitionStatus === `ending` && d.removeToast(n.id);
      },
    });
    let H = y((e = !1) => {
      let t = N.current;
      if (!t) return;
      let r = t.style.height;
      t.style.height = `auto`;
      let i = t.offsetHeight;
      t.style.height = r;
      function a() {
        d.updateToastInternal(n.id, {
          ref: N,
          height: i,
          ...(n.transitionStatus === `starting` ? { transitionStatus: void 0 } : {}),
        });
      }
      e ? Oe.flushSync(a) : a();
    });
    ee(H, [H]);
    function U(e) {
      ((ae.current = e), S(e));
    }
    ee(
      () => () => {
        z.current?.abort();
      },
      [],
    );
    function fe(e, t) {
      let n = e,
        r = t;
      return (
        !l.includes(`left`) && !l.includes(`right`)
          ? (n = e > 0 ? e ** Q : -(Math.abs(e) ** Q))
          : (!l.includes(`right`) && e > 0 && (n = e ** Q),
            !l.includes(`left`) && e < 0 && (n = -(Math.abs(e) ** Q))),
        !l.includes(`up`) && !l.includes(`down`)
          ? (r = t > 0 ? t ** Q : -(Math.abs(t) ** Q))
          : (!l.includes(`down`) && t > 0 && (r = t ** Q),
            !l.includes(`up`) && t < 0 && (r = -(Math.abs(t) ** Q))),
        { x: n, y: r }
      );
    }
    let pe = y((e) => {
      if (e.pointerId !== oe.current) return;
      ((oe.current = null), z.current?.abort(), (z.current = null), h(!1), _(!1), M(null));
      let t = F.current;
      if (e.type === `pointercancel` || I.current) {
        (U({ x: t.x, y: t.y }), p(void 0));
        return;
      }
      let r = !1,
        i = ae.current,
        a = i.x - t.x,
        o = i.y - t.y,
        s;
      for (let e of l) {
        switch (e) {
          case `right`:
            a > Pe && ((r = !0), (s = `right`));
            break;
          case `left`:
            a < -40 && ((r = !0), (s = `left`));
            break;
          case `down`:
            o > Pe && ((r = !0), (s = `down`));
            break;
          case `up`:
            o < -40 && ((r = !0), (s = `up`));
        }
        if (r) break;
      }
      r ? (p(s), b(!0), d.closeToast(n.id)) : (U({ x: t.x, y: t.y }), p(void 0));
    });
    function K(e) {
      if (e.button !== 0) return;
      e.pointerType === `touch` && d.pauseTimers();
      let t = L(e.nativeEvent);
      if (t && t.closest(`button,a,input,textarea,[role="button"],${Le}`)) return;
      if (
        ((I.current = !1),
        (te.current = void 0),
        (ne.current = 0),
        (oe.current = e.pointerId),
        (P.current = { x: e.clientX, y: e.clientY }),
        (R.current = P.current),
        N.current)
      ) {
        let e = Me(N.current);
        ((F.current = e), T(e), U({ x: e.x, y: e.y }));
      }
      (d.setHovering(!0), h(!0), _(!1), M(null), (ie.current = !0));
      let n = N.current;
      if (n) {
        z.current?.abort();
        let t = new AbortController();
        z.current = t;
        let r = B(n);
        (r.addEventListener(`pointerup`, pe, { signal: t.signal }),
          r.addEventListener(`pointercancel`, pe, { signal: t.signal }),
          n.setPointerCapture?.(e.pointerId));
      }
    }
    function me(e) {
      if (e.pointerId !== oe.current) return;
      (e.preventDefault(), (ie.current &&= ((P.current = { x: e.clientX, y: e.clientY }), !1)));
      let { clientY: t, clientX: n, movementX: r, movementY: i } = e;
      (((i < 0 && t > R.current.y) || (i > 0 && t < R.current.y)) &&
        (R.current = { x: R.current.x, y: t }),
        ((r < 0 && n > R.current.x) || (r > 0 && n < R.current.x)) &&
          (R.current = { x: n, y: R.current.y }));
      let a = n - P.current.x,
        o = t - P.current.y,
        s = t - R.current.y,
        c = n - R.current.x;
      if (!g && Math.sqrt(a * a + o * o) >= Ie && (_(!0), A === null)) {
        let e = l.includes(`left`) || l.includes(`right`),
          t = l.includes(`up`) || l.includes(`down`);
        e && t && M(Math.abs(a) > Math.abs(o) ? `horizontal` : `vertical`);
      }
      let u;
      if (!te.current)
        (A === `vertical`
          ? o > 0
            ? (u = `down`)
            : o < 0 && (u = `up`)
          : A === `horizontal`
            ? a > 0
              ? (u = `right`)
              : a < 0 && (u = `left`)
            : (u = Math.abs(a) >= Math.abs(o) ? (a > 0 ? `right` : `left`) : o > 0 ? `down` : `up`),
          u && l.includes(u) && ((te.current = u), (ne.current = je(u, a, o)), p(u)));
      else {
        let e = te.current,
          t = je(e, c, s);
        t > Pe
          ? ((I.current = !1), p(e))
          : !(l.includes(`left`) && l.includes(`right`)) &&
            !(l.includes(`up`) && l.includes(`down`)) &&
            ne.current - t >= Fe &&
            (I.current = !0);
      }
      let d = fe(a, o),
        f = F.current.x,
        m = F.current.y;
      (A === `horizontal`
        ? (l.includes(`left`) || l.includes(`right`)) && (f += d.x)
        : (A === `vertical` || ((l.includes(`left`) || l.includes(`right`)) && (f += d.x)),
          (l.includes(`up`) || l.includes(`down`)) && (m += d.y)),
        U({ x: f, y: m }));
    }
    function he(e) {
      if (e.key === `Escape`) {
        if (!N.current || !G(N.current, de(B(N.current)))) return;
        d.closeToast(n.id);
      }
    }
    q.useEffect(() => {
      if (!u) return;
      let e = N.current;
      if (!e) return;
      function t(t) {
        G(e, L(t)) && t.preventDefault();
      }
      return re(e, `touchmove`, t, { passive: !1 });
    }, [u]);
    function ge() {
      if (!m && x.x === C.x && x.y === C.y && !v)
        return { [Z.swipeMovementX]: `0px`, [Z.swipeMovementY]: `0px` };
      let e = x.x - C.x,
        t = x.y - C.y;
      return {
        transition: m ? `none` : void 0,
        transform: m ? `translateX(${x.x}px) translateY(${x.y}px) scale(${C.scale})` : void 0,
        [Z.swipeMovementX]: `${e}px`,
        [Z.swipeMovementY]: `${t}px`,
      };
    }
    let _e = n.priority === `high`,
      ve = {
        role: _e ? `alertdialog` : `dialog`,
        tabIndex: 0,
        "aria-modal": !1,
        "aria-labelledby": E,
        "aria-describedby": O,
        "aria-hidden": _e && !ue ? !0 : void 0,
        onPointerDown: u ? K : void 0,
        onPointerMove: u ? me : void 0,
        onPointerUp: u ? pe : void 0,
        onPointerCancel: u ? pe : void 0,
        onKeyDown: he,
        inert: w(n.limited),
        style: {
          ...ge(),
          [Z.index]: n.transitionStatus === `ending` ? se : ce,
          [Z.offsetY]: `${le}px`,
          [Z.height]: n.height ? `${n.height}px` : void 0,
        },
      },
      J = q.useMemo(
        () => ({
          rootRef: N,
          toast: n,
          titleId: E,
          setTitleId: D,
          descriptionId: O,
          setDescriptionId: k,
          swiping: m,
          swipeDirection: f,
          recalculateHeight: H,
          index: se,
          visibleIndex: ce,
          expanded: V,
        }),
        [n, E, O, m, f, H, se, ce, V],
      ),
      be = {
        transitionStatus: n.transitionStatus,
        expanded: V,
        limited: n.limited || !1,
        type: n.type,
        swiping: J.swiping,
        swipeDirection: J.swipeDirection,
      },
      xe = W(`div`, e, {
        ref: [t, J.rootRef],
        state: be,
        stateAttributesMapping: Ne,
        props: [ve, s],
      });
    return (0, X.jsx)(ke.Provider, { value: J, children: xe });
  }),
  ze = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      { visibleIndex: o, expanded: s, recalculateHeight: c } = Ae(),
      l = q.useRef(null);
    return (
      ee(() => {
        let e = l.current;
        if (
          !e ||
          (c(), typeof ResizeObserver != `function` || typeof MutationObserver != `function`)
        )
          return;
        let t = new ResizeObserver(() => c(!0)),
          n = new MutationObserver(() => c(!0));
        return (
          t.observe(e),
          n.observe(e, { childList: !0, subtree: !0, characterData: !0 }),
          () => {
            (t.disconnect(), n.disconnect());
          }
        );
      }, [c]),
      W(`div`, e, { ref: [t, l], state: { expanded: s, behind: o > 0 }, props: a })
    );
  }),
  Be = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, children: o, ...s } = e,
      { toast: c, setDescriptionId: l } = Ae(),
      u = o ?? c.description,
      d = !!u,
      f = v(a);
    ee(() => {
      if (d)
        return (
          l(f),
          () => {
            l(void 0);
          }
        );
    }, [d, f, l]);
    let p = { type: c.type },
      m = W(`p`, e, { ref: t, state: p, props: { ...s, id: f, children: u } });
    return d ? m : null;
  }),
  Ve = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, children: o, ...s } = e,
      { toast: c, setTitleId: l } = Ae(),
      u = o ?? c.title,
      d = !!u,
      f = v(a);
    ee(() => {
      if (d)
        return (
          l(f),
          () => {
            l(void 0);
          }
        );
    }, [d, f, l]);
    let p = { type: c.type },
      m = W(`h2`, e, { ref: t, state: p, props: { ...s, id: f, children: u } });
    return d ? m : null;
  }),
  He = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, disabled: a, nativeButton: o = !0, ...s } = e,
      c = ye(),
      { toast: l } = Ae(),
      u = c.useState(`expanded`),
      [d, f] = q.useState(!1),
      { getButtonProps: p, buttonRef: m } = x({ disabled: a, native: o }),
      h = { type: l.type };
    return W(`button`, e, {
      ref: [t, m],
      state: h,
      props: [
        {
          "aria-hidden": !u && !d,
          onClick() {
            c.closeToast(l.id);
          },
          onFocus() {
            f(!0);
          },
          onBlur() {
            f(!1);
          },
        },
        s,
        p,
      ],
    });
  }),
  Ue = q.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, disabled: a, nativeButton: o = !0, ...s } = e,
      { toast: c } = Ae(),
      l = c.actionProps?.children ?? s.children,
      u = !!l,
      { getButtonProps: d, buttonRef: f } = x({ disabled: a, native: o }),
      p = { type: c.type },
      m = W(`button`, e, { ref: [t, f], state: p, props: [s, c.actionProps, d, { children: l }] });
    return u ? m : null;
  }),
  We = te,
  Ge = q.createContext(void 0);
function Ke() {
  let e = q.useContext(Ge);
  if (e === void 0) throw Error(O(84));
  return e;
}
var qe = q.forwardRef(function (e, t) {
    let { toast: n, ...r } = e,
      i = ye(),
      a = n.positionerProps ?? k,
      {
        render: o,
        className: s,
        anchor: c = a.anchor,
        positionMethod: l = a.positionMethod ?? `absolute`,
        side: d = a.side ?? `top`,
        align: f = a.align ?? `center`,
        sideOffset: p = a.sideOffset ?? 0,
        alignOffset: m = a.alignOffset ?? 0,
        collisionBoundary: h = a.collisionBoundary ?? `clipping-ancestors`,
        collisionPadding: g = a.collisionPadding ?? 5,
        arrowPadding: _ = a.arrowPadding ?? 5,
        sticky: v = a.sticky ?? !1,
        disableAnchorTracking: y = a.disableAnchorTracking ?? !1,
        collisionAvoidance: x = a.collisionAvoidance ?? u,
        style: C,
        ...w
      } = r,
      [T, E] = q.useState(null),
      D = i.useState(`toastIndex`, n.id),
      O = i.useState(`toastVisibleIndex`, n.id),
      A = ue(c) ? c : null,
      j = pe({ open: !0, onOpenChange: ce, elements: { floating: T, reference: A } }),
      M = b({
        anchor: A,
        positionMethod: l,
        floatingRootContext: j,
        mounted: !0,
        side: d,
        sideOffset: p,
        align: f,
        alignOffset: m,
        collisionBoundary: h,
        collisionPadding: g,
        sticky: v,
        arrowPadding: _,
        disableAnchorTracking: y,
        keepMounted: !0,
        collisionAvoidance: x,
      }),
      N = q.useMemo(
        () => ({ side: M.side, align: M.align, anchorHidden: M.anchorHidden }),
        [M.side, M.align, M.anchorHidden],
      ),
      P = S(e, N, {
        styles: { ...M.positionerStyles, [Z.index]: n.transitionStatus === `ending` ? D : O },
        transitionStatus: n.transitionStatus,
        props: w,
        refs: [t, E],
      });
    return (0, X.jsx)(Ge.Provider, { value: M, children: P });
  }),
  Je = q.forwardRef(function (e, t) {
    let { className: n, render: r, style: i, ...a } = e,
      { arrowRef: o, side: s, align: c, arrowUncentered: l, arrowStyles: u } = Ke();
    return W(`div`, e, {
      state: { side: s, align: c, uncentered: l },
      ref: [t, o],
      props: [{ style: u, "aria-hidden": !0 }, a],
    });
  });
function Ye() {
  let e = q.useContext(ve);
  if (!e) throw Error(O(73));
  let t = e.useState(`toasts`);
  return q.useMemo(
    () => ({
      toasts: t,
      add: e.addToast,
      close: e.closeToast,
      update: e.updateToast,
      promise: e.promiseToast,
    }),
    [t, e],
  );
}
function Xe() {
  let e = new Set();
  function t(t) {
    e.forEach((e) => e(t));
  }
  return {
    " subscribe": function (t) {
      return (
        e.add(t),
        () => {
          e.delete(t);
        }
      );
    },
    add(e) {
      let n = e.id || be(`toast`);
      return (t({ action: `add`, options: { ...e, id: n, transitionStatus: `starting` } }), n);
    },
    close(e) {
      t({ action: `close`, options: { id: e } });
    },
    update(e, n) {
      t({ action: `update`, options: { ...n, id: e } });
    },
    promise(e, n) {
      let r = e;
      return (
        t({
          action: `promise`,
          options: {
            ...n,
            promise: e,
            setPromise(e) {
              r = e;
            },
          },
        }),
        r
      );
    },
  };
}
var Ze = t({
    Action: () => Ue,
    Arrow: () => Je,
    Close: () => He,
    Content: () => ze,
    Description: () => Be,
    Portal: () => We,
    Positioner: () => qe,
    Provider: () => Te,
    Root: () => Re,
    Title: () => Ve,
    Viewport: () => De,
    createToastManager: () => Xe,
    useToastManager: () => Ye,
  }),
  Qe = me(),
  $ = r(),
  $e = class extends M()(`ClipboardApiUnavailableError`, { target: P }) {
    get message() {
      return `Clipboard API is unavailable while copying ${this.target}.`;
    }
  },
  et = class extends M()(`ClipboardWriteError`, { target: P, cause: se() }) {
    get message() {
      return `Failed to copy ${this.target} to the clipboard.`;
    }
  },
  tt = class extends M()(`ClipboardReadUnavailableError`, { target: P }) {
    get message() {
      return `Clipboard API is unavailable while reading ${this.target}.`;
    }
  },
  nt = class extends M()(`ClipboardReadError`, { target: P, cause: se() }) {
    get message() {
      return `Failed to read ${this.target} from the clipboard.`;
    }
  };
function rt(e, t) {
  if (typeof document > `u` || typeof document.execCommand != `function`) return !1;
  let n = document.createElement(`textarea`);
  ((n.value = e),
    n.setAttribute(`readonly`, ``),
    n.setAttribute(`aria-hidden`, `true`),
    (n.style.position = `fixed`),
    (n.style.top = `0`),
    (n.style.left = `0`),
    (n.style.opacity = `0`),
    (n.style.fontSize = `16px`));
  let r = document.activeElement,
    i = (n) => {
      if (t && n.clipboardData) {
        n.clipboardData.setData(`text/plain`, e);
        for (let [e, r] of Object.entries(t)) n.clipboardData.setData(e, r);
        n.preventDefault();
      }
    };
  (document.body.appendChild(n), n.addEventListener(`copy`, i));
  try {
    return (
      n.focus({ preventScroll: !0 }),
      n.select(),
      n.setSelectionRange(0, e.length),
      document.execCommand(`copy`)
    );
  } catch {
    return !1;
  } finally {
    (n.removeEventListener(`copy`, i), n.remove());
    let e = r?.focus;
    typeof e == `function` && e.call(r);
  }
}
async function it(e, t = `text`, n) {
  if (typeof window > `u`) throw new $e({ target: t });
  if (!e) return !1;
  n &&= Object.fromEntries(Object.entries(n).filter(([e]) => e !== `text/plain`));
  let r = n?.[T];
  if (
    (r && (n = { ...n, "text/html": _(e, r, n?.[`text/html`]) }),
    typeof navigator > `u` || !navigator.clipboard?.writeText)
  ) {
    if (rt(e, n)) return !0;
    throw new $e({ target: t });
  }
  try {
    if (n && typeof ClipboardItem < `u` && navigator.clipboard.write)
      try {
        return (
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/plain": new Blob([e], { type: `text/plain` }),
              ...Object.fromEntries(
                Object.entries(n).map(([e, t]) => [e, new Blob([t], { type: e })]),
              ),
            }),
          ]),
          !0
        );
      } catch {
        let t = n[`text/html`];
        if (t)
          try {
            return (
              await navigator.clipboard.write([
                new ClipboardItem({
                  "text/plain": new Blob([e], { type: `text/plain` }),
                  "text/html": new Blob([t], { type: `text/html` }),
                }),
              ]),
              !0
            );
          } catch {}
      }
    return (await navigator.clipboard.writeText(e), !0);
  } catch (e) {
    throw new et({ target: t, cause: e });
  }
}
async function at(e = `text`) {
  if (typeof window > `u` || typeof navigator > `u` || !navigator.clipboard?.readText)
    throw new tt({ target: e });
  try {
    return await navigator.clipboard.readText();
  } catch (t) {
    throw new nt({ target: e, cause: t });
  }
}
function ot(e) {
  let t = (0, $.c)(13),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { timeout: r, target: i, onCopy: a, onError: o, extraFlavors: s } = n,
    c = r === void 0 ? 2e3 : r,
    l = i === void 0 ? `text` : i,
    [u, d] = q.useState(!1),
    f = q.useRef(null),
    p;
  t[2] !== s || t[3] !== a || t[4] !== o || t[5] !== l || t[6] !== c
    ? ((p = (e, t) => {
        it(e, l, s).then(
          (e) => {
            e &&
              (f.current && clearTimeout(f.current),
              d(!0),
              a?.(t),
              c !== 0 &&
                (f.current = setTimeout(() => {
                  (d(!1), (f.current = null));
                }, c)));
          },
          (e) => {
            (console.error(e), o?.(e, t));
          },
        );
      }),
      (t[2] = s),
      (t[3] = a),
      (t[4] = o),
      (t[5] = l),
      (t[6] = c),
      (t[7] = p))
    : (p = t[7]);
  let m = ge(p),
    h,
    g;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => () => {
        f.current && clearTimeout(f.current);
      }),
      (g = []),
      (t[8] = h),
      (t[9] = g))
    : ((h = t[8]), (g = t[9])),
    q.useEffect(h, g));
  let _;
  return (
    t[10] !== m || t[11] !== u
      ? ((_ = { copyToClipboard: m, isCopied: u }), (t[10] = m), (t[11] = u), (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function st(e) {
  if (typeof e != `object` || !e || !(`children` in e)) return !1;
  let t = e.children;
  return t != null && t !== !1 && t !== ``;
}
function ct(e, t) {
  return t <= 1 ? !1 : e > 0;
}
function lt(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0,
    a = e.map((e) => {
      let a = ut(e.height);
      if (e.transitionStatus === `ending`) {
        let r = { toast: e, visibleIndex: t, offsetY: n };
        return ((n += a), (t += 1), r);
      }
      let o = { toast: e, visibleIndex: r, offsetY: i };
      return ((n += a), (t += 1), (i += a), (r += 1), o);
    });
  return { frontmostHeight: ut(e.find((e) => e.transitionStatus !== `ending`)?.height), items: a };
}
function ut(e) {
  return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : 0;
}
function dt(e, t) {
  if (e?.threadRef)
    return (
      t !== null &&
      e.threadRef.environmentId === t.environmentId &&
      e.threadRef.threadId === t.threadId
    );
  let n = e?.threadId;
  return !n || t?.threadId === n;
}
function ft(e) {
  return e === `live`;
}
function pt(e) {
  if (e.draftThreadExists || (e.serverThreadExists && !e.serverThreadDeleted)) return `ready`;
  if (!e.bootstrapComplete) return `loading`;
  if (e.serverThreadExists || e.unlistedThreadDetail.status === `deleted`) return `missing`;
  let t = C(e.unlistedThreadDetail.data);
  return t === null
    ? `loading`
    : t.thread.deletedAt !== null || t.thread.archivedAt !== null
      ? `missing`
      : `ready`;
}
function mt(e) {
  return { environmentId: e.environmentId, threadId: e.threadId };
}
function ht(e, t) {
  let { environmentId: n, threadId: r } = mt(t);
  return e.replace(/\/$/, ``) === `/${n}/${r}`;
}
function gt(e) {
  return { draftId: e };
}
function _t(e) {
  return !e.environmentId || !e.threadId ? null : H(e.environmentId, e.threadId);
}
function vt(e) {
  return e.environmentId && e.threadId
    ? { kind: `server`, threadRef: H(e.environmentId, e.threadId) }
    : e.draftId
      ? { kind: `draft`, draftId: e.draftId }
      : null;
}
function yt(e, t) {
  return e?.kind === `server`
    ? e.threadRef
    : e?.kind !== `draft` || !t?.promotedTo
      ? null
      : t.promotedTo;
}
function bt() {
  let e = (0, $.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { strict: !1, select: St }), (e[0] = t))
    : (t = e[0]);
  let n = _e(t),
    r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { strict: !1, select: xt }), (e[1] = r))
    : (r = e[1]);
  let i = _e(r),
    a;
  return (
    e[2] !== n || e[3] !== i
      ? ((a = { environmentId: n, threadId: i }), (e[2] = n), (e[3] = i), (e[4] = a))
      : (a = e[4]),
    a
  );
}
function xt(e) {
  return e.threadId;
}
function St(e) {
  return e.environmentId;
}
function Ct() {
  let e = (0, $.c)(5),
    { environmentId: t, threadId: n } = bt(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { strict: !1, select: wt }), (e[0] = r))
    : (r = e[0]);
  let i = _e(r),
    a;
  return (
    e[1] !== i || e[2] !== t || e[3] !== n
      ? ((a = vt({ environmentId: t, threadId: n, draftId: i })),
        (e[1] = i),
        (e[2] = t),
        (e[3] = n),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
function wt(e) {
  return e.draftId;
}
function Tt() {
  let e = (0, $.c)(2),
    t = bt(),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = _t(t)), (e[0] = t), (e[1] = n)), n);
}
var Et = Xe(),
  Dt = Xe(),
  Ot = new Map(),
  kt = { error: a, info: o, loading: ae, success: s, warning: c },
  At = 180;
function jt(e, t) {
  if (e === `error` && typeof t == `string` && !(t.length < At)) return `line-clamp-4`;
}
var Mt = `absolute z-30 -top-1 -right-1`,
  Nt = V(
    `inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-popover/92 text-muted-foreground shadow-sm outline-none backdrop-blur-sm`,
    `transition-[color,background-color,box-shadow] hover:bg-popover hover:text-foreground`,
    `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
  );
function Pt(e, t, n) {
  (n?.(), e.close(t));
}
function Ft(e) {
  let t = (0, $.c)(20),
    { text: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { target: `error-message` }), (t[0] = r))
    : (r = t[0]);
  let { copyToClipboard: i, isCopied: a } = ot(r),
    o = a ? `Copied error` : `Copy error`,
    s;
  t[1] !== i || t[2] !== n ? ((s = () => i(n)), (t[1] = i), (t[2] = n), (t[3] = s)) : (s = t[3]);
  let c;
  t[4] !== o || t[5] !== s
    ? ((c = (0, X.jsx)(g, {
        size: `icon-micro`,
        variant: `ghost-muted`,
        "aria-label": o,
        className: `[--control-icon-color:currentColor] rounded-md text-muted-foreground/80 hover:bg-transparent hover:text-muted-foreground`,
        onClick: s,
      })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l = a && `text-success`,
    u;
  t[7] === l ? (u = t[8]) : ((u = V(`size-3`, l)), (t[7] = l), (t[8] = u));
  let d = a ? Qe.Check : Qe.Copy,
    p;
  t[9] !== u || t[10] !== d
    ? ((p = (0, X.jsx)(he, { className: u, icon: d })), (t[9] = u), (t[10] = d), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== c || t[13] !== p
    ? ((m = (0, X.jsx)(F, { render: c, children: p })), (t[12] = c), (t[13] = p), (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === o
    ? (h = t[16])
    : ((h = (0, X.jsx)(N, { side: `top`, children: o })), (t[15] = o), (t[16] = h));
  let _;
  return (
    t[17] !== m || t[18] !== h
      ? ((_ = (0, X.jsxs)(f, { children: [m, h] })), (t[17] = m), (t[18] = h), (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var It = `mt-2 max-h-40 min-h-0 overflow-y-auto overscroll-contain pr-0.5 select-text`;
function Lt(e) {
  let t = (0, $.c)(13),
    { children: n, labels: r } = e,
    [i, a] = (0, q.useState)(!1),
    o = r.expand ?? `Show details`,
    s = r.collapse ?? `Hide details`,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = () => a(Rt)), (t[0] = c)) : (c = t[0]);
  let l = i ? Qe.ChevronUp : Qe.ChevronDown,
    u;
  t[1] === l
    ? (u = t[2])
    : ((u = (0, X.jsx)(he, {
        className: `size-3.5 shrink-0 opacity-80`,
        icon: l,
        strokeWidth: 2.25,
      })),
      (t[1] = l),
      (t[2] = u));
  let d = i ? s : o,
    f;
  t[3] !== i || t[4] !== u || t[5] !== d
    ? ((f = (0, X.jsxs)(`button`, {
        "aria-expanded": i,
        className: `inline-flex cursor-pointer items-center gap-1 rounded-md py-0.5 text-left text-xs font-medium text-muted-foreground transition-colors hover:text-foreground`,
        onClick: c,
        type: `button`,
        children: [u, d],
      })),
      (t[3] = i),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== n || t[8] !== i
    ? ((p = i ? (0, X.jsx)(`div`, { className: It, children: n }) : null),
      (t[7] = n),
      (t[8] = i),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== f || t[11] !== p
      ? ((m = (0, X.jsxs)(`div`, { className: `min-w-0`, children: [f, p] })),
        (t[10] = f),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function Rt(e) {
  return !e;
}
function zt(e) {
  let t = (0, $.c)(43),
    { toastData: n, toastDescription: r, toastType: i } = e,
    a = n?.expandableContent,
    o;
  t[0] === n?.expandableLabels
    ? (o = t[1])
    : ((o = n?.expandableLabels ?? {}), (t[0] = n?.expandableLabels), (t[1] = o));
  let s = o,
    c = n?.expandableDescriptionTrigger ?? !1,
    l;
  t[2] !== r || t[3] !== i
    ? ((l = V(`min-w-0 select-text wrap-break-word text-muted-foreground`, jt(i, r))),
      (t[2] = r),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u = l,
    [d, p] = (0, q.useState)(!1);
  if (!a) {
    let e;
    return (
      t[5] === u
        ? (e = t[6])
        : ((e = (0, X.jsx)(Be, { className: u, "data-slot": `toast-description` })),
          (t[5] = u),
          (t[6] = e)),
      e
    );
  }
  if (!c) {
    let e;
    t[7] === u
      ? (e = t[8])
      : ((e = (0, X.jsx)(Be, { className: u, "data-slot": `toast-description` })),
        (t[7] = u),
        (t[8] = e));
    let n;
    t[9] !== a || t[10] !== s
      ? ((n = (0, X.jsx)(Lt, { labels: s, children: a })), (t[9] = a), (t[10] = s), (t[11] = n))
      : (n = t[11]);
    let r;
    return (
      t[12] !== e || t[13] !== n
        ? ((r = (0, X.jsxs)(X.Fragment, { children: [e, n] })),
          (t[12] = e),
          (t[13] = n),
          (t[14] = r))
        : (r = t[14]),
      r
    );
  }
  let m = s.expand ?? `Show details`,
    h = s.collapse ?? `Hide details`,
    g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => p(Bt)), (t[15] = g))
    : (g = t[15]);
  let _ = g,
    v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), _());
      }),
      (t[16] = v))
    : (v = t[16]);
  let y = v,
    b = d ? h : m,
    x;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = V(
        `group flex min-w-0 w-full cursor-pointer select-none items-start gap-1.5 rounded-sm text-left outline-none ring-offset-background`,
        `transition-colors hover:bg-muted/40`,
        `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
      )),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] !== d || t[19] !== b
    ? ((S = (0, X.jsx)(`div`, {
        "aria-label": b,
        "aria-expanded": d,
        className: x,
        onClick: _,
        onKeyDown: y,
        role: `button`,
        tabIndex: 0,
      })),
      (t[18] = d),
      (t[19] = b),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== r || t[22] !== i
    ? ((C = V(
        `min-w-0 select-none wrap-break-word text-muted-foreground`,
        jt(i, r),
        `underline-offset-2 decoration-muted-foreground/60 group-hover:underline`,
      )),
      (t[21] = r),
      (t[22] = i),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] === C
    ? (w = t[25])
    : ((w = (0, X.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, X.jsx)(Be, { className: C, "data-slot": `toast-description` }),
      })),
      (t[24] = C),
      (t[25] = w));
  let T = d ? Qe.ChevronUp : Qe.ChevronDown,
    E;
  t[26] === T
    ? (E = t[27])
    : ((E = (0, X.jsx)(he, {
        "aria-hidden": !0,
        className: `size-3.5 h-lh shrink-0 text-muted-foreground opacity-80`,
        icon: T,
        strokeWidth: 2.25,
      })),
      (t[26] = T),
      (t[27] = E));
  let D;
  t[28] !== E || t[29] !== S || t[30] !== w
    ? ((D = (0, X.jsxs)(F, { render: S, children: [w, E] })),
      (t[28] = E),
      (t[29] = S),
      (t[30] = w),
      (t[31] = D))
    : (D = t[31]);
  let O = d ? h : m,
    k;
  t[32] === O
    ? (k = t[33])
    : ((k = (0, X.jsx)(N, { side: `top`, children: O })), (t[32] = O), (t[33] = k));
  let A;
  t[34] !== D || t[35] !== k
    ? ((A = (0, X.jsxs)(f, { children: [D, k] })), (t[34] = D), (t[35] = k), (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] !== a || t[38] !== d
    ? ((j = d ? (0, X.jsx)(`div`, { className: It, children: a }) : null),
      (t[37] = a),
      (t[38] = d),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== A || t[41] !== j
      ? ((M = (0, X.jsxs)(X.Fragment, { children: [A, j] })), (t[40] = A), (t[41] = j), (t[42] = M))
      : (M = t[42]),
    M
  );
}
function Bt(e) {
  return !e;
}
function Vt(e) {
  let t = e.type ? kt[e.type] : null,
    n = st(e.actionProps) && e.data?.actionLayout === `stacked-end`,
    r = e.data?.actionVariant ?? `default`,
    i = e.data?.secondaryActionVariant ?? `outline`,
    a =
      e.type === `error` && typeof e.description == `string` && !e.data?.hideCopyButton
        ? e.description
        : null,
    o = (e.data?.additionalActions?.length ?? 0) > 0,
    s = e.data?.secondaryActionProps !== void 0,
    c = a !== null || st(e.actionProps) || o || s;
  return {
    Icon: t,
    stackedActionLayout: n,
    actionVariant: r,
    secondaryActionVariant: i,
    copyErrorText: a,
    hasTrailingControls: c,
    inlineContentEndPad: c ? `pr-6` : `pr-3.5`,
  };
}
function Ht(e) {
  let t = (0, $.c)(40),
    {
      stackedActionLayout: n,
      Icon: r,
      copyErrorText: i,
      actionProps: a,
      actionVariant: o,
      secondaryActionVariant: s,
      hasTrailingControls: c,
      toastData: l,
      toastDescription: u,
      toastType: d,
    } = e,
    f;
  t[0] === l?.additionalActions
    ? (f = t[1])
    : ((f = l?.additionalActions ?? []), (t[0] = l?.additionalActions), (t[1] = f));
  let p = f,
    m = l?.secondaryActionProps,
    h = l?.leadingIcon,
    _;
  t[2] === m ? (_ = t[3]) : ((_ = m ?? {}), (t[2] = m), (t[3] = _));
  let v, y;
  t[4] === _
    ? ((v = t[5]), (y = t[6]))
    : (({ className: v, ...y } = _), (t[4] = _), (t[5] = v), (t[6] = y));
  let b = n ? `pr-5` : `flex-1`,
    x;
  t[7] === b
    ? (x = t[8])
    : ((x = V(`flex min-h-0 min-w-0 flex-col gap-0.5`, b)), (t[7] = b), (t[8] = x));
  let S = !n && !c && `pr-6`,
    C;
  t[9] === S ? (C = t[10]) : ((C = V(`flex min-w-0 gap-2`, S)), (t[9] = S), (t[10] = C));
  let w;
  t[11] !== r || t[12] !== h
    ? ((w = h
        ? (0, X.jsx)(`div`, {
            className: `flex h-lh w-4 shrink-0 items-center justify-center`,
            "data-slot": `toast-icon`,
            children: h,
          })
        : r
          ? (0, X.jsx)(`div`, {
              className: `[&>svg]:h-lh [&>svg]:w-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
              "data-slot": `toast-icon`,
              children: (0, X.jsx)(r, {
                className: `in-data-[type=error]:text-destructive in-data-[type=info]:text-info in-data-[type=success]:text-success in-data-[type=warning]:text-warning in-data-[type=loading]:opacity-80`,
              }),
            })
          : null),
      (t[11] = r),
      (t[12] = h),
      (t[13] = w))
    : (w = t[13]);
  let T;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(Ve, {
        className: `min-w-0 wrap-break-word font-medium`,
        "data-slot": `toast-title`,
      })),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== C || t[16] !== w
    ? ((E = (0, X.jsxs)(`div`, { className: C, children: [w, T] })),
      (t[15] = C),
      (t[16] = w),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] !== l || t[19] !== u || t[20] !== d
    ? ((D = (0, X.jsx)(zt, { toastData: l, toastDescription: u, toastType: d })),
      (t[18] = l),
      (t[19] = u),
      (t[20] = d),
      (t[21] = D))
    : (D = t[21]);
  let O;
  t[22] !== D || t[23] !== x || t[24] !== E
    ? ((O = (0, X.jsxs)(`div`, { className: x, children: [E, D] })),
      (t[22] = D),
      (t[23] = x),
      (t[24] = E),
      (t[25] = O))
    : (O = t[25]);
  let k;
  t[26] !== a ||
  t[27] !== o ||
  t[28] !== p ||
  t[29] !== i ||
  t[30] !== c ||
  t[31] !== v ||
  t[32] !== m ||
  t[33] !== y ||
  t[34] !== s ||
  t[35] !== n
    ? ((k = c
        ? (0, X.jsxs)(`div`, {
            className: V(`flex items-center gap-1.5`, n ? `w-full justify-end` : `shrink-0`),
            children: [
              i === null ? null : (0, X.jsx)(Ft, { text: i }),
              p.map((e) => {
                let { id: t, props: n } = e,
                  { className: r, ...i } = n;
                return (0, q.createElement)(g, {
                  ...i,
                  className: r,
                  key: t,
                  size: `xs`,
                  type: `button`,
                  variant: s,
                });
              }),
              m
                ? (0, X.jsx)(g, { ...y, className: v, size: `xs`, type: `button`, variant: s })
                : null,
              st(a)
                ? (0, X.jsx)(Ue, {
                    className: V(le({ size: `xs`, variant: o }), `shrink-0`),
                    "data-slot": `toast-action`,
                    children: a?.children,
                  })
                : null,
            ],
          })
        : null),
      (t[26] = a),
      (t[27] = o),
      (t[28] = p),
      (t[29] = i),
      (t[30] = c),
      (t[31] = v),
      (t[32] = m),
      (t[33] = y),
      (t[34] = s),
      (t[35] = n),
      (t[36] = k))
    : (k = t[36]);
  let A;
  return (
    t[37] !== O || t[38] !== k
      ? ((A = (0, X.jsxs)(X.Fragment, { children: [O, k] })), (t[37] = O), (t[38] = k), (t[39] = A))
      : (A = t[39]),
    A
  );
}
function Ut() {
  let e = (0, $.c)(5),
    t = Ct(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = (e) => (t?.kind === `draft` ? e.getDraftSession(t.draftId) : null)),
      (e[0] = t),
      (e[1] = n));
  let r = d(n);
  if (t?.kind === `server`) return t.threadRef;
  if (t?.kind === `draft` && r) {
    let t;
    return (
      e[2] !== r.environmentId || e[3] !== r.threadId
        ? ((t = { environmentId: r.environmentId, threadId: r.threadId }),
          (e[2] = r.environmentId),
          (e[3] = r.threadId),
          (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  return null;
}
function Wt(e) {
  let t = (0, $.c)(4),
    { toastId: n, dismissAfterVisibleMs: r } = e,
    i,
    a;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = () => {
          if (!r || r <= 0 || typeof window > `u` || typeof document > `u`) return;
          let e = Ot.get(n) ?? r,
            t = null,
            i = null,
            a = !1,
            o = () => {
              i !== null && (window.clearTimeout(i), (i = null));
            },
            s = () => {
              a || ((a = !0), Ot.delete(n), Et.close(n));
            },
            c = () => {
              t !== null &&
                ((e = Math.max(0, e - (Date.now() - t))), (t = null), o(), Ot.set(n, e));
            },
            l = () => {
              a ||
                t !== null ||
                (e <= 0
                  ? s()
                  : ((t = Date.now()),
                    o(),
                    (i = window.setTimeout(() => {
                      ((e = 0), (t = null), s());
                    }, e))));
            },
            u = () => {
              document.visibilityState === `visible` && document.hasFocus() ? l() : c();
            };
          return (
            u(),
            document.addEventListener(`visibilitychange`, u),
            window.addEventListener(`focus`, u),
            window.addEventListener(`blur`, u),
            () => {
              (document.removeEventListener(`visibilitychange`, u),
                window.removeEventListener(`focus`, u),
                window.removeEventListener(`blur`, u),
                c(),
                o());
            }
          );
        }),
        (a = [r, n]),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : ((i = t[2]), (a = t[3])),
    (0, q.useEffect)(i, a),
    null
  );
}
function Gt(e) {
  let t = (0, $.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, position: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === void 0 ? `top-right` : i,
    o;
  t[4] === a ? (o = t[5]) : ((o = (0, X.jsx)(Kt, { position: a })), (t[4] = a), (t[5] = o));
  let s;
  return (
    t[6] !== n || t[7] !== r || t[8] !== o
      ? ((s = (0, X.jsxs)(Te, { toastManager: Et, ...r, children: [n, o] })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Kt(e) {
  let t = (0, $.c)(19),
    { position: n } = e,
    { toasts: r } = Ye(),
    i = Ut(),
    a;
  t[0] === n ? (a = t[1]) : ((a = n.startsWith(`top`)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === i ? (s = t[3]) : ((s = (e) => dt(e.data, i)), (t[2] = i), (t[3] = s));
  let c = lt(r.filter(s)),
    u,
    d;
  (t[4] === r
    ? ((u = t[5]), (d = t[6]))
    : ((u = () => {
        let e = new Set(r.map(Jt));
        for (let t of Ot.keys()) e.has(t) || Ot.delete(t);
      }),
      (d = [r]),
      (t[4] = r),
      (t[5] = u),
      (t[6] = d)),
    (0, q.useEffect)(u, d));
  let f = Ze,
    p = Ze,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = V(
        `fixed z-100 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-header-offset:var(--workspace-topbar-height)] [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)]`,
        `data-[position*=top]:top-[calc(var(--toast-inset)+var(--toast-header-offset))]`,
        `data-[position*=bottom]:bottom-(--toast-inset)`,
        `data-[position*=left]:left-(--toast-inset)`,
        `data-[position*=right]:right-(--toast-inset)`,
        `data-[position*=center]:-translate-x-1/2 data-[position*=center]:left-1/2`,
      )),
      (t[7] = m))
    : (m = t[7]);
  let h = `${c.frontmostHeight}px`,
    g;
  t[8] === h ? (g = t[9]) : ((g = { "--toast-frontmost-height": h }), (t[8] = h), (t[9] = g));
  let _ = g,
    v = c.items.map((e) => {
      let { toast: t, visibleIndex: r, offsetY: i } = e,
        a = ct(r, c.items.length),
        s = Vt(t),
        { stackedActionLayout: u, inlineContentEndPad: d } = s;
      return (0, X.jsxs)(
        Re,
        {
          className: V(
            `dropdown-glass absolute z-[calc(9999-var(--toast-index))] w-full overflow-visible select-none rounded-lg text-popover-foreground shadow-xl shadow-black/25 [transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.5s,height_.15s]`,
            `data-[position*=right]:right-0 data-[position*=right]:left-auto`,
            `data-[position*=left]:right-auto data-[position*=left]:left-0`,
            `data-[position*=center]:right-0 data-[position*=center]:left-0`,
            `data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-top`,
            `data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-bottom`,
            `after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full`,
            `data-[position*=top]:after:top-full`,
            `data-[position*=bottom]:after:bottom-full`,
            r > 0
              ? `not-data-expanded:[--toast-calc-height:var(--toast-frontmost-height)] data-expanded:[--toast-calc-height:max(var(--toast-frontmost-height,var(--toast-height)),var(--toast-height))]`
              : `[--toast-calc-height:max(var(--toast-frontmost-height,var(--toast-height)),var(--toast-height))]`,
            `[--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*.1)))] [--toast-shrink:calc(1-var(--toast-scale))]`,
            r > 0 ? `not-data-expanded:h-(--toast-calc-height) data-expanded:h-auto` : `h-auto`,
            `data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-swipe-movement-y))]`,
            `data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-swipe-movement-y))]`,
            `data-[position*=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]`,
            `data-[position*=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]`,
            `data-limited:opacity-0`,
            `data-position:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-calc-offset-y))]`,
            `data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]`,
            `data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]`,
            `data-[position*=top]:data-[position*=right]:data-starting-style:transform-[translateX(calc(100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-ending-style:opacity-0`,
            `data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]`,
            `data-[position*=top]:data-[position*=right]:data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateX(calc(100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]`,
            `data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]`,
            `data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]`,
            `data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]`,
            `data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]`,
          ),
          "data-position": n,
          style: { "--toast-index": r, "--toast-offset-y": `${i}px` },
          swipeDirection: n.includes(`center`)
            ? [o ? `up` : `down`]
            : n.includes(`left`)
              ? [`left`, o ? `up` : `down`]
              : [`right`, o ? `up` : `down`],
          toast: t,
          children: [
            (0, X.jsx)(Wt, { dismissAfterVisibleMs: t.data?.dismissAfterVisibleMs, toastId: t.id }),
            (0, X.jsx)(`div`, {
              className: V(Mt, `pointer-events-auto`),
              children: (0, X.jsx)(`button`, {
                "aria-label": `Dismiss notification`,
                className: Nt,
                "data-slot": `toast-close`,
                onClick: (e) => {
                  (e.stopPropagation(), Pt(Et, t.id, t.data?.onClose));
                },
                onPointerDown: qt,
                type: `button`,
                children: (0, X.jsx)(l, { className: `size-3.5`, strokeWidth: 2.25 }),
              }),
            }),
            (0, X.jsx)(ze, {
              className: V(
                `pointer-events-auto min-h-10 overflow-y-visible pl-3.5 text-sm transition-opacity duration-250 [overflow-x:clip] data-expanded:opacity-100`,
                u
                  ? `flex flex-col gap-2 py-2.5 pr-3.5`
                  : V(`py-3`, `flex items-center justify-between gap-1.5`, d),
                a && `not-data-expanded:pointer-events-none not-data-expanded:opacity-0`,
              ),
              children: (0, X.jsx)(Ht, {
                ...s,
                actionProps: t.actionProps,
                toastData: t.data,
                toastDescription: t.description,
                toastType: t.type,
              }),
            }),
          ],
        },
        t.id,
      );
    }),
    y;
  t[10] !== n || t[11] !== _ || t[12] !== v || t[13] !== p.Viewport || t[14] !== m
    ? ((y = (0, X.jsx)(p.Viewport, {
        className: m,
        "data-position": n,
        "data-slot": `toast-viewport`,
        style: _,
        children: v,
      })),
      (t[10] = n),
      (t[11] = _),
      (t[12] = v),
      (t[13] = p.Viewport),
      (t[14] = m),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== y || t[17] !== f.Portal
      ? ((b = (0, X.jsx)(f.Portal, { "data-slot": `toast-portal`, children: y })),
        (t[16] = y),
        (t[17] = f.Portal),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
function qt(e) {
  return e.stopPropagation();
}
function Jt(e) {
  return e.id;
}
function Yt(e) {
  let t = (0, $.c)(7),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ children: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(Xt, {})), (t[3] = i))
    : (i = t[3]);
  let a;
  return (
    t[4] !== n || t[5] !== r
      ? ((a = (0, X.jsxs)(Te, { toastManager: Dt, ...r, children: [n, i] })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function Xt() {
  let e = (0, $.c)(7),
    { toasts: t } = Ye(),
    n = Ut(),
    r;
  if (e[0] !== n || e[1] !== t) {
    let i;
    (e[3] === n ? (i = e[4]) : ((i = (e) => dt(e.data, n)), (e[3] = n), (e[4] = i)),
      (r = t.filter(i).map(Zt)),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r));
  } else r = e[2];
  let i;
  return (
    e[5] === r
      ? (i = e[6])
      : ((i = (0, X.jsx)(We, {
          "data-slot": `toast-portal-anchored`,
          children: (0, X.jsx)(De, {
            className: `outline-none`,
            "data-slot": `toast-viewport-anchored`,
            children: r,
          }),
        })),
        (e[5] = r),
        (e[6] = i)),
    i
  );
}
function Zt(e) {
  let t = e.data?.tooltipStyle ?? !1,
    n = e.positionerProps,
    r = Vt(e),
    { stackedActionLayout: i, inlineContentEndPad: a } = r;
  return n?.anchor
    ? (0, X.jsx)(
        qe,
        {
          className: `z-100 max-w-[min(--spacing(64),var(--available-width))]`,
          "data-slot": `toast-positioner`,
          sideOffset: n.sideOffset ?? 4,
          toast: e,
          children: (0, X.jsx)(Re, {
            className: V(
              `dropdown-glass relative overflow-visible text-balance text-popover-foreground text-xs shadow-xl shadow-black/25 transition-[scale,opacity] data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0`,
              t ? `rounded-md` : `rounded-lg`,
            ),
            "data-slot": `toast-popup`,
            toast: e,
            children: t
              ? (0, X.jsx)(ze, {
                  className: `pointer-events-auto px-2 py-1`,
                  children: (0, X.jsx)(Ve, { "data-slot": `toast-title` }),
                })
              : (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      className: V(Mt, `pointer-events-auto`),
                      children: (0, X.jsx)(`button`, {
                        "aria-label": `Dismiss notification`,
                        className: Nt,
                        "data-slot": `toast-close`,
                        onClick: (t) => {
                          (t.stopPropagation(), Pt(Dt, e.id, e.data?.onClose));
                        },
                        onPointerDown: Qt,
                        type: `button`,
                        children: (0, X.jsx)(l, { className: `size-3.5`, strokeWidth: 2.25 }),
                      }),
                    }),
                    (0, X.jsx)(ze, {
                      className: V(
                        `pointer-events-auto min-h-10 overflow-y-visible pl-3.5 text-sm [overflow-x:clip]`,
                        i
                          ? `flex flex-col gap-2 py-2.5 pr-3.5`
                          : V(`py-3`, `flex items-center justify-between gap-1.5`, a),
                      ),
                      children: (0, X.jsx)(Ht, {
                        ...r,
                        actionProps: e.actionProps,
                        toastData: e.data,
                        toastDescription: e.description,
                        toastType: e.type,
                      }),
                    }),
                  ],
                }),
          }),
        },
        e.id,
      )
    : null;
}
function Qt(e) {
  return e.stopPropagation();
}
export {
  it as _,
  Tt as a,
  mt as c,
  yt as d,
  _t as f,
  ot as g,
  at as h,
  Et as i,
  ht as l,
  vt as m,
  Gt as n,
  Ct as o,
  pt as p,
  Dt as r,
  gt as s,
  Yt as t,
  ft as u,
};
//# sourceMappingURL=toast-B4KPIJDZ.js.map
