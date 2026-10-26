import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i } from "./search-BrluOr7L.js";
import { t as a } from "./chevron-up-DvObQ97L.js";
import {
  Aa as o,
  Ao as s,
  Ar as c,
  Bi as l,
  Br as u,
  Cn as d,
  Co as f,
  Dn as p,
  Do as m,
  En as h,
  Fn as g,
  Ga as _,
  Gr as v,
  Ha as y,
  Hi as b,
  Hr as x,
  Ia as S,
  In as C,
  Ir as w,
  Ji as T,
  Jr as E,
  Ka as D,
  La as O,
  Ln as k,
  Ma as ee,
  Mn as A,
  Mo as j,
  Mr as M,
  Ni as te,
  Nn as N,
  Oa as P,
  On as ne,
  Oo as F,
  Pa as I,
  Pi as L,
  Pn as re,
  Rn as ie,
  Rr as R,
  Ta as ae,
  To as z,
  Ui as oe,
  Ur as B,
  Va as se,
  Vi as ce,
  Wa as V,
  Wr as le,
  Ya as ue,
  Yr as de,
  Zi as fe,
  _o as pe,
  bn as me,
  br as H,
  co as U,
  da as he,
  do as ge,
  fa as _e,
  fi as ve,
  ga as W,
  hi as ye,
  jn as G,
  jo as be,
  kn as xe,
  la as K,
  ma as Se,
  mi as Ce,
  mw as q,
  pa as we,
  qr as J,
  t as Te,
  ti as Ee,
  wa as De,
  wi as Oe,
  wo as Y,
  wr as ke,
  xa as Ae,
  xn as je,
  yi as Me,
  yo as Ne,
  yr as Pe,
  zn as X,
  zr as Fe,
} from "./utils-CPoejuy5.js";
import { t as Ie } from "./FormContext-BF__1yV6.js";
import { a as Le, i as Re, n as ze, r as Be, t as Ve } from "./CSPContext-BIshez4y.js";
var Z = e(t()),
  Q = e(r());
function He(e) {
  let {
      id: t,
      value: n,
      defaultValue: r = null,
      onValueChange: i,
      open: a,
      defaultOpen: o = !1,
      onOpenChange: c,
      name: l,
      form: u,
      autoComplete: f,
      disabled: p = !1,
      readOnly: h = !1,
      required: g = !1,
      modal: v = !0,
      actionsRef: y,
      inputRef: x,
      onOpenChangeComplete: S,
      items: T,
      multiple: E = !1,
      itemToStringLabel: D,
      itemToStringValue: O,
      isItemEqualToValue: j = A,
      highlightItemOnHover: I = !0,
      children: re,
    } = e,
    { clearErrors: ie } = Ie(),
    {
      setDirty: oe,
      setTouched: B,
      setFocused: se,
      shouldValidateOnChange: le,
      validityData: de,
      setFilled: fe,
      name: pe,
      disabled: me,
      validation: U,
      validationMode: ve,
    } = ke(),
    W = H({ id: t }),
    G = me || p,
    K = pe ?? l,
    [q, we] = ue({ controlled: n, default: E ? (r ?? m) : r, name: `Select`, state: `value` }),
    [J, Te] = ue({ controlled: a, default: o, name: `Select`, state: `open` }),
    Ee = Z.useRef([]),
    De = Z.useRef([]),
    Y = Z.useRef(null),
    Ae = Z.useRef(null),
    je = Z.useRef(0),
    Ne = Z.useRef(null),
    X = Z.useRef([]),
    Le = Z.useRef(!1),
    ze = Z.useRef(!1),
    Ve = Z.useRef(null),
    He = Z.useRef(null),
    Ue = Z.useRef({ allowSelectedMouseUp: !1, allowUnselectedMouseUp: !1, dragY: 0 }),
    We = Z.useRef(!1),
    { mounted: Ge, setMounted: Ke, transitionStatus: qe } = P(J),
    { openMethod: Je, triggerProps: Ye } = w(J),
    $ = be(
      () =>
        new te({
          id: W,
          labelId: void 0,
          modal: v,
          multiple: E,
          itemToStringLabel: D,
          itemToStringValue: O,
          isItemEqualToValue: j,
          value: q,
          open: J,
          mounted: Ge,
          transitionStatus: qe,
          items: T,
          forceMount: !1,
          openMethod: null,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          triggerProps: {},
          triggerElement: null,
          positionerElement: null,
          listElement: null,
          popupSide: null,
          scrollUpArrowVisible: !1,
          scrollDownArrowVisible: !1,
          hasScrollArrows: !1,
        }),
    ).current,
    Xe = L($, d.activeIndex),
    Ze = L($, d.selectedIndex),
    Qe = L($, d.triggerElement),
    $e = L($, d.positionerElement),
    et = M(Je),
    tt = Je ?? et,
    nt = Z.useMemo(() => (E && Array.isArray(q) && q.length === 0 ? `` : xe(q, O)), [E, q, O]),
    rt = Z.useMemo(() => (E && Array.isArray(q) ? q.map((e) => xe(e, O)) : xe(q, O)), [E, q, O]),
    it = Se($.state.triggerElement),
    at = _(() => rt);
  Pe(it, W, q, at);
  let ot = Z.useRef(q),
    st = E ? Array.isArray(q) && q.length > 0 : q != null;
  (V(() => {
    q !== ot.current && $.set(`forceMount`, !0);
  }, [$, q]),
    V(() => {
      fe(st);
    }, [st, fe]),
    V(
      function () {
        let e = X.current,
          t;
        if (E) {
          let n = Array.isArray(q) ? q : [];
          if (n.length === 0) t = null;
          else {
            let r = n[n.length - 1],
              i = N(e, r, j);
            t = i === -1 ? null : i;
          }
        } else {
          let n = N(e, q, j);
          t = n === -1 ? null : n;
        }
        (t === null && (He.current = null), !J && $.set(`selectedIndex`, t));
      },
      [st, E, J, q, X, j, $, He],
    ),
    R(q, () => {
      (ie(K), oe(q !== de.initialValue), le() ? U.commit(q) : U.commit(q, !0));
    }));
  let ct = _((e, t) => {
      if (
        (c?.(e, t),
        !t.isCanceled &&
          (Te(e),
          e ||
            (t.reason !== `focus-out` && t.reason !== `outside-press`) ||
            (B(!0), se(!1), ve === `onBlur` && U.commit(q)),
          !e && $.state.activeIndex !== null))
      ) {
        let e = Ee.current[$.state.activeIndex];
        queueMicrotask(() => {
          e?.setAttribute(`tabindex`, `-1`);
        });
      }
    }),
    lt = _(() => {
      (Ke(!1), $.update({ activeIndex: null, openMethod: null }), S?.(!1));
    });
  (ae({
    enabled: !y,
    open: J,
    ref: Y,
    onComplete() {
      J || lt();
    },
  }),
    Z.useImperativeHandle(y, () => ({ unmount: lt }), [lt]));
  let ut = _((e, t) => {
      (i?.(e, t), !t.isCanceled && we(e));
    }),
    dt = _(() => {
      let e = $.state.listElement || Y.current;
      if (!e) return;
      let t = Be(e.scrollHeight, e.clientHeight),
        n = Re(e.scrollTop, t),
        r = n > 0,
        i = n < t;
      ($.state.scrollUpArrowVisible !== r && $.set(`scrollUpArrowVisible`, r),
        $.state.scrollDownArrowVisible !== i && $.set(`scrollDownArrowVisible`, i));
    }),
    ft = Me({ open: J, onOpenChange: ct, elements: { reference: Qe, floating: $e } }),
    pt = b(ft, { enabled: !h && !G, event: `mousedown` }),
    mt = ce(ft),
    ht = ye(ft, {
      enabled: !h && !G,
      listRef: Ee,
      activeIndex: Xe,
      selectedIndex: Ze,
      disabledIndices: m,
      onNavigate(e) {
        (e !== null || J) && $.set(`activeIndex`, e);
      },
      focusItemOnHover: I,
    }),
    gt = Ce(ft, {
      enabled: !h && !G && (J || !E),
      listRef: De,
      activeIndex: Xe,
      selectedIndex: Ze,
      onMatch(e) {
        J ? $.set(`activeIndex`, e) : ut(X.current[e], ee(`none`));
      },
      onTyping(e) {
        Le.current = e;
      },
    }),
    _t = Z.useMemo(() => {
      let e = z(gt.reference, ht.reference, mt.reference, pt.reference, Ye);
      return (W && (e.id = W), e);
    }, [pt.reference, gt.reference, ht.reference, mt.reference, Ye, W]),
    vt = Z.useMemo(
      () => z(Oe, gt.floating, ht.floating, mt.floating),
      [gt.floating, ht.floating, mt.floating],
    ),
    yt = ht.item ?? F;
  (Fe(() => {
    $.update({ popupProps: vt, triggerProps: _t });
  }),
    V(() => {
      $.update({
        id: W,
        modal: v,
        multiple: E,
        value: q,
        open: J,
        mounted: Ge,
        transitionStatus: qe,
        popupProps: vt,
        triggerProps: _t,
        items: T,
        itemToStringLabel: D,
        itemToStringValue: O,
        isItemEqualToValue: j,
        openMethod: tt,
      });
    }, [$, W, v, E, q, J, Ge, qe, vt, _t, T, D, O, j, tt]));
  let bt = Z.useMemo(
      () => ({
        store: $,
        name: K,
        required: g,
        disabled: G,
        readOnly: h,
        multiple: E,
        highlightItemOnHover: I,
        setValue: ut,
        setOpen: ct,
        listRef: Ee,
        popupRef: Y,
        scrollHandlerRef: Ae,
        handleScrollArrowVisibility: dt,
        scrollArrowsMountedCountRef: je,
        itemProps: yt,
        events: ft.context.events,
        valueRef: Ne,
        valuesRef: X,
        labelsRef: De,
        typingRef: Le,
        selectionRef: Ue,
        firstItemTextRef: Ve,
        selectedItemTextRef: He,
        validation: U,
        onOpenChangeComplete: S,
        keyboardActiveRef: ze,
        alignItemWithTriggerActiveRef: We,
        initialValueRef: ot,
      }),
      [$, K, g, G, h, E, I, ut, ct, yt, ft.context.events, U, S, dt],
    ),
    xt = s(x, U.inputRef),
    St = E && Array.isArray(q) && q.length > 0,
    Ct = E ? void 0 : K,
    wt = Z.useMemo(
      () =>
        !E || !Array.isArray(q) || !K
          ? null
          : q.map((e) => {
              let t = xe(e, O);
              return (0, Q.jsx)(`input`, { type: `hidden`, form: u, name: K, value: t }, t);
            }),
      [E, q, u, K, O],
    );
  return (0, Q.jsx)(k.Provider, {
    value: bt,
    children: (0, Q.jsxs)(C.Provider, {
      value: ft,
      children: [
        re,
        (0, Q.jsx)(`input`, {
          ...U.getInputValidationProps({
            onFocus() {
              $.state.triggerElement?.focus({ focusVisible: !0 });
            },
            onChange(e) {
              if (e.nativeEvent.defaultPrevented || G || h) {
                e.preventBaseUIHandler?.();
                return;
              }
              let t = e.currentTarget.value,
                n = ee(ge, e.nativeEvent);
              function r() {
                if (E) return;
                let e = X.current.find(
                  (e) =>
                    xe(e, O).toLowerCase() === t.toLowerCase() ||
                    ne(e, D).toLowerCase() === t.toLowerCase(),
                );
                e != null && (oe(e !== de.initialValue), ut(e, n), le() && U.commit(e));
              }
              ($.set(`forceMount`, !0), queueMicrotask(r));
            },
          }),
          id: W && Ct == null ? `${W}-hidden-input` : void 0,
          form: u,
          name: Ct,
          autoComplete: f,
          value: nt,
          disabled: G,
          required: g && !St,
          readOnly: h,
          ref: xt,
          style: K ? _e : he,
          tabIndex: -1,
          "aria-hidden": !0,
          suppressHydrationWarning: !0,
        }),
        wt,
      ],
    }),
  });
}
var Ue = { value: () => null },
  We = Z.forwardRef(function (e, t) {
    let { className: n, render: r, children: i, placeholder: a, style: o, ...s } = e,
      { store: c, valueRef: l } = X(),
      u = L(c, d.value),
      f = L(c, d.items),
      m = L(c, d.itemToStringLabel),
      g = L(c, d.hasSelectedValue),
      _ = !g && a != null && i == null,
      v = L(c, d.hasNullItemLabel, _),
      y = { value: u, placeholder: !g },
      b = null;
    return (
      (b =
        typeof i == `function`
          ? i(u)
          : (i ?? (!g && a != null && !v ? a : Array.isArray(u) ? h(u, f, m) : p(u, f, m)))),
      Y(`span`, e, {
        state: y,
        ref: [t, l],
        props: [{ children: b }, s],
        stateAttributesMapping: Ue,
      })
    );
  }),
  Ge = Z.createContext(void 0),
  Ke = Z.forwardRef(function (e, t) {
    let { store: n } = X(),
      r = L(n, d.mounted),
      i = L(n, d.forceMount);
    return r || i
      ? (0, Q.jsx)(Ge.Provider, { value: !0, children: (0, Q.jsx)(T, { ref: t, ...e }) })
      : null;
  }),
  qe = Z.createContext(void 0);
function Je() {
  let e = Z.useContext(qe);
  if (!e) throw Error(j(59));
  return e;
}
function Ye(e, t) {
  e && Object.assign(e.style, t);
}
var $ = { position: `relative`, maxHeight: `100%`, overflowX: `hidden`, overflowY: `auto` },
  Xe = { position: `fixed` },
  Ze = Z.forwardRef(function (e, t) {
    let {
        anchor: n,
        positionMethod: r = `absolute`,
        className: i,
        render: a,
        side: o = `bottom`,
        align: s = `center`,
        sideOffset: c = 0,
        alignOffset: l = 0,
        collisionBoundary: f = `clipping-ancestors`,
        collisionPadding: p,
        arrowPadding: m = 5,
        sticky: h = !1,
        disableAnchorTracking: y,
        alignItemWithTrigger: b = !0,
        collisionAvoidance: S = fe,
        style: C,
        ...w
      } = e,
      {
        store: T,
        listRef: D,
        labelsRef: O,
        alignItemWithTriggerActiveRef: k,
        selectedItemTextRef: A,
        valuesRef: j,
        initialValueRef: M,
        popupRef: te,
        setValue: P,
      } = X(),
      ne = ie(),
      F = L(T, d.open),
      I = L(T, d.mounted),
      re = L(T, d.modal),
      R = L(T, d.value),
      ae = L(T, d.openMethod),
      z = L(T, d.positionerElement),
      oe = L(T, d.triggerElement),
      se = L(T, d.isItemEqualToValue),
      ce = L(T, d.transitionStatus),
      ue = Z.useRef(null),
      de = Z.useRef(null),
      [pe, me] = Z.useState(b),
      H = I && pe && ae !== `touch`;
    (!I && pe !== b && me(b),
      V(() => {
        I ||
          (d.scrollUpArrowVisible(T.state) && T.set(`scrollUpArrowVisible`, !1),
          d.scrollDownArrowVisible(T.state) && T.set(`scrollDownArrowVisible`, !1));
      }, [T, I]),
      Z.useImperativeHandle(k, () => H),
      u((H || re) && F, ae === `touch`, z, oe));
    let U = v({
        anchor: n,
        floatingRootContext: ne,
        positionMethod: r,
        mounted: I,
        side: o,
        sideOffset: c,
        align: s,
        alignOffset: l,
        arrowPadding: m,
        collisionBoundary: f,
        collisionPadding: p,
        sticky: h,
        disableAnchorTracking: y ?? H,
        collisionAvoidance: S,
        keepMounted: !0,
      }),
      he = H ? `none` : U.side,
      _e = H ? Xe : U.positionerStyles,
      ve = { open: F, side: he, align: U.align, anchorHidden: U.anchorHidden };
    V(() => {
      T.set(`popupSide`, U.side);
    }, [T, U.side]);
    let W = _((e) => {
        T.set(`positionerElement`, e);
      }),
      ye = x(e, ve, {
        styles: _e,
        transitionStatus: ce,
        props: w,
        refs: [t, W],
        hidden: !I,
        inert: !F,
      }),
      G = Z.useRef(0),
      be = _((e) => {
        if ((e.size === 0 && G.current === 0) || j.current.length === 0) return;
        let t = G.current;
        if (((G.current = e.size), e.size === t)) return;
        let n = ee(ge);
        if (t !== 0 && !T.state.multiple && R !== null && N(j.current, R, se) === -1) {
          let e = M.current,
            t = e != null && N(j.current, e, se) !== -1 ? e : null;
          (P(t, n), t === null && (T.set(`selectedIndex`, null), (A.current = null)));
        }
        if (t !== 0 && T.state.multiple && Array.isArray(R)) {
          let e = (e) => N(j.current, e, se) !== -1,
            t = R.filter((t) => e(t));
          (t.length !== R.length || t.some((e) => !g(R, e, se))) &&
            (P(t, n), t.length === 0 && (T.set(`selectedIndex`, null), (A.current = null)));
        }
        if (F && H) {
          T.update({ scrollUpArrowVisible: !1, scrollDownArrowVisible: !1 });
          let e = { height: `` };
          (Ye(z, e), Ye(te.current, e));
        }
      }),
      xe = Z.useMemo(
        () => ({
          ...U,
          side: he,
          alignItemWithTriggerActive: H,
          setControlledAlignItemWithTrigger: me,
          scrollUpArrowRef: ue,
          scrollDownArrowRef: de,
        }),
        [U, he, H, me],
      );
    return (0, Q.jsx)(le, {
      elementsRef: D,
      labelsRef: O,
      onMapChange: be,
      children: (0, Q.jsxs)(qe.Provider, {
        value: xe,
        children: [I && re && (0, Q.jsx)(B, { inert: E(!F), cutout: oe }), ye],
      }),
    });
  }),
  Qe = { ...Ne, ...f },
  $e = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, finalFocus: a, ...s } = e,
      {
        store: c,
        popupRef: l,
        onOpenChangeComplete: u,
        setOpen: f,
        valueRef: p,
        firstItemTextRef: m,
        selectedItemTextRef: h,
        keyboardActiveRef: g,
        multiple: v,
        handleScrollArrowVisibility: y,
        scrollHandlerRef: b,
        listRef: x,
        highlightItemOnHover: S,
      } = X(),
      {
        side: C,
        align: w,
        alignItemWithTriggerActive: T,
        isPositioned: E,
        setControlledAlignItemWithTrigger: O,
        scrollDownArrowRef: k,
        scrollUpArrowRef: A,
      } = Je(),
      j = ve(!0) != null,
      M = ie(),
      te = J(),
      { nonce: N, disableStyleElements: P } = Ve(),
      ne = L(c, d.id),
      F = L(c, d.open),
      I = L(c, d.mounted),
      re = L(c, d.popupProps),
      R = L(c, d.transitionStatus),
      z = L(c, d.triggerElement),
      B = L(c, d.positionerElement),
      ce = L(c, d.listElement),
      le = Z.useRef(!1),
      ue = Z.useRef(!1),
      fe = Z.useRef({}),
      me = o(),
      H = _((e) => {
        if (!B || !l.current || !ue.current) return;
        if (le.current || !T) {
          y();
          return;
        }
        let t = B.style.top === `0px`,
          n = B.style.bottom === `0px`;
        if (!t && !n) {
          y();
          return;
        }
        let r = nt(B),
          i = rt(B.getBoundingClientRect().height, `y`, r),
          a = we(B),
          o = getComputedStyle(B),
          s = parseFloat(o.marginTop),
          c = parseFloat(o.marginBottom),
          u = et(getComputedStyle(l.current)),
          d = Math.min(a.documentElement.clientHeight - s - c, u),
          f = e.scrollTop,
          p = tt(e),
          m = 0,
          h = null,
          g = !1,
          _ = !1,
          v = (e) => {
            B.style.height = `${e}px`;
          },
          b = (t, n) => {
            let r = Le(t, 0, d - i);
            (r > 0 && v(i + r), (e.scrollTop = n), d - (i + r) <= 1 && (le.current = !0), y());
          },
          x = t ? p - f : f,
          S = Math.min(i + x, d);
        if (((m = S), x <= 1)) b(x, t ? p : 0);
        else {
          if (
            (d - S > 1
              ? t
                ? (_ = !0)
                : (h = 0)
              : ((g = !0), n && f < p && (h = f - (x - (i + x - d)))),
            (m = Math.ceil(m)),
            m !== 0 && v(m),
            _ || h != null)
          ) {
            let t = tt(e),
              n = _ ? t : Le(h, 0, t);
            Math.abs(e.scrollTop - n) > 1 && (e.scrollTop = n);
          }
          ((g || m >= d - 1) && (le.current = !0), y());
        }
      });
    (Z.useImperativeHandle(b, () => H, [H]),
      ae({
        open: F,
        ref: l,
        onComplete() {
          F && u?.(!0);
        },
      }));
    let U = { open: F, transitionStatus: R, side: C, align: w };
    (V(() => {
      B &&
        l.current &&
        !Object.keys(fe.current).length &&
        (fe.current = {
          top: B.style.top || `0`,
          left: B.style.left || `0`,
          right: B.style.right,
          height: B.style.height,
          bottom: B.style.bottom,
          minHeight: B.style.minHeight,
          maxHeight: B.style.maxHeight,
          marginTop: B.style.marginTop,
          marginBottom: B.style.marginBottom,
        });
    }, [l, B]),
      V(() => {
        F || T || ((ue.current = !1), (le.current = !1), Ye(B, fe.current));
      }, [F, T, B, l]),
      V(() => {
        let e = l.current;
        if (!F || !z || !B || !e || (T && !E) || c.state.transitionStatus === `ending`) return;
        if (!T) {
          ((ue.current = !0), me.request(y), e.style.removeProperty(`--transform-origin`));
          return;
        }
        let t = ot(e);
        e.style.removeProperty(`--transform-origin`);
        try {
          let t = h.current;
          t?.isConnected ||
            (t = !d.hasSelectedValue(c.state) && m.current?.isConnected ? m.current : null);
          let n = p.current,
            r = getComputedStyle(B),
            i = getComputedStyle(e),
            a = we(z),
            o = D(B),
            s = nt(z),
            l = it(z.getBoundingClientRect(), s),
            u = it(B.getBoundingClientRect(), s),
            f = l.height,
            g = ce || e,
            _ = g.scrollHeight,
            v = parseFloat(i.borderBottomWidth),
            b = parseFloat(r.marginTop) || 10,
            C = parseFloat(r.marginBottom) || 10,
            w = parseFloat(r.minHeight) || 100,
            T = et(i),
            E = a.documentElement.clientHeight - b - C,
            k = a.documentElement.clientWidth,
            ee = E - l.bottom + f,
            A,
            j = te === `rtl` ? l.right - u.width : l.left,
            M = 0;
          if (t && n) {
            let e = it(n.getBoundingClientRect(), s);
            ((A = it(t.getBoundingClientRect(), s)),
              (j = u.left + (te === `rtl` ? e.right - A.right : e.left - A.left)));
            let r = e.top - l.top + e.height / 2;
            M = A.top - u.top + A.height / 2 - r;
          }
          let N = ee + M + C + v,
            P = Math.min(E, N),
            ne = E - b - C,
            F = N - P,
            I = k - 5;
          ((B.style.left = `${Le(j, 5, I - u.width)}px`),
            (B.style.height = `${P}px`),
            (B.style.maxHeight = `auto`),
            (B.style.marginTop = `${b}px`),
            (B.style.marginBottom = `${C}px`),
            (e.style.height = `100%`));
          let L = tt(g),
            re = F >= L - 1;
          re && (P = Math.min(E, u.height) - (F - L));
          let ie = l.top < 20 || l.bottom > E - 20 || Math.ceil(P) + 1 < Math.min(_, w),
            R = (o.visualViewport?.scale ?? 1) !== 1 && se;
          if (ie || R) {
            ((ue.current = !0), Ye(B, fe.current), O(!1));
            return;
          }
          let ae = Math.max(w, P);
          if (re) {
            let e = Math.max(0, E - N);
            ((B.style.top = u.height >= ne ? `0` : `${e}px`),
              (B.style.height = `${P}px`),
              (g.scrollTop = tt(g)));
          } else ((B.style.bottom = `0`), (g.scrollTop = F));
          if (A) {
            let t = u.top,
              n = u.height,
              r = A.top + A.height / 2,
              i = n > 0 ? ((r - t) / n) * 100 : 50,
              a = Le(i, 0, 100);
            e.style.setProperty(`--transform-origin`, `50% ${a}%`);
          }
          ((ae === E || P >= T) && (le.current = !0),
            y(),
            S &&
              c.state.selectedIndex === null &&
              c.state.activeIndex === null &&
              x.current[0] != null &&
              c.set(`activeIndex`, 0),
            (ue.current = !0));
        } finally {
          t();
        }
      }, [c, F, B, z, p, m, h, l, y, T, O, me, k, A, ce, x, S, te, E]),
      Z.useEffect(() => {
        if (!T || !B || !F) return;
        let e = D(B);
        function t(e) {
          f(!1, ee(pe, e));
        }
        return W(e, `resize`, t);
      }, [f, T, B, F]));
    let he = {
        ...(ce
          ? { role: `presentation`, "aria-orientation": void 0 }
          : { role: `listbox`, "aria-multiselectable": v || void 0, id: `${ne}-list` }),
        onKeyDown(e) {
          ((g.current = !0), j && Ee.has(e.key) && e.stopPropagation());
        },
        onMouseMove() {
          g.current = !1;
        },
        onScroll(e) {
          ce || H(e.currentTarget);
        },
        ...(T && { style: ce ? { height: `100%` } : $ }),
      },
      ge = Y(`div`, e, {
        ref: [t, l],
        state: U,
        stateAttributesMapping: Qe,
        props: [re, he, de(R), { className: !ce && T ? ze.className : void 0 }, s],
      });
    return (0, Q.jsxs)(Z.Fragment, {
      children: [
        !P && ze.getElement(N),
        (0, Q.jsx)(oe, {
          context: M,
          modal: !1,
          disabled: !I,
          returnFocus: a,
          restoreFocus: !0,
          children: ge,
        }),
      ],
    });
  });
function et(e) {
  let t = e.maxHeight || ``;
  return (t.endsWith(`px`) && parseFloat(t)) || 1 / 0;
}
function tt(e) {
  return Be(e.scrollHeight, e.clientHeight);
}
function nt(e) {
  return l.getScale(e);
}
function rt(e, t, n) {
  return e / n[t];
}
function it(e, t) {
  return K({
    x: rt(e.x, `x`, t),
    y: rt(e.y, `y`, t),
    width: rt(e.width, `x`, t),
    height: rt(e.height, `y`, t),
  });
}
var at = [
  [`transform`, `none`],
  [`scale`, `1`],
  [`translate`, `0 0`],
];
function ot(e) {
  let { style: t } = e,
    n = {};
  for (let [e, r] of at) ((n[e] = t.getPropertyValue(e)), t.setProperty(e, r, `important`));
  return () => {
    for (let [e] of at) {
      let r = n[e];
      r ? t.setProperty(e, r) : t.removeProperty(e);
    }
  };
}
var st = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      { store: o, scrollHandlerRef: s } = X(),
      { alignItemWithTriggerActive: c } = Je(),
      l = L(o, d.hasScrollArrows),
      u = L(o, d.openMethod),
      f = L(o, d.multiple),
      p = {
        id: `${L(o, d.id)}-list`,
        role: `listbox`,
        "aria-multiselectable": f || void 0,
        onScroll(e) {
          s.current?.(e.currentTarget);
        },
        ...(c && { style: $ }),
        className: l && u !== `touch` ? ze.className : void 0,
      },
      m = _((e) => {
        o.set(`listElement`, e);
      });
    return Y(`div`, e, { ref: [t, m], props: [p, a] });
  }),
  ct = Z.createContext(void 0);
function lt() {
  let e = Z.useContext(ct);
  if (!e) throw Error(j(57));
  return e;
}
var ut = Z.memo(
    Z.forwardRef(function (e, t) {
      let {
          render: n,
          className: r,
          style: i,
          value: a = null,
          label: o,
          disabled: s = !1,
          nativeButton: c = !1,
          ...l
        } = e,
        u = Z.useRef(null),
        f = O({ label: o, textRef: u, indexGuessBehavior: S.GuessFromOrder }),
        {
          store: p,
          itemProps: m,
          setOpen: h,
          setValue: g,
          selectionRef: _,
          typingRef: v,
          valuesRef: b,
          multiple: x,
          selectedItemTextRef: C,
        } = X(),
        w = L(p, d.isActive, f.index),
        T = L(p, d.isSelected, f.index, a),
        E = L(p, d.isSelectedByFocus, f.index),
        D = L(p, d.isItemEqualToValue),
        k = f.index,
        A = k !== -1,
        j = Z.useRef(null);
      (V(() => {
        if (!A) return;
        let e = b.current;
        return (
          (e[k] = a),
          () => {
            delete e[k];
          }
        );
      }, [A, k, a, b]),
        V(() => {
          if (!A) return;
          let e = p.state.value,
            t = e;
          (x && Array.isArray(e) && e.length > 0 && (t = e[e.length - 1]),
            t !== void 0 &&
              G(a, t, D) &&
              (p.set(`selectedIndex`, k), u.current && (C.current = u.current)));
        }, [A, k, x, D, p, a, C]));
      let M = Z.useRef(null),
        te = Z.useRef(`mouse`),
        N = Z.useRef(!1),
        { getButtonProps: P, buttonRef: ne } = y({
          disabled: s,
          focusableWhenDisabled: !0,
          native: c,
          composite: !0,
        }),
        F = { disabled: s, selected: T, highlighted: w };
      function I(e) {
        let t = p.state.value;
        if (x) {
          let n = Array.isArray(t) ? t : [],
            r = T ? re(n, a, D) : [...n, a];
          g(r, ee(U, e));
        } else (g(a, ee(U, e)), h(!1, ee(U, e)));
      }
      function ie() {
        _.current.dragY = 0;
      }
      let R = {
          role: `option`,
          "aria-selected": T,
          tabIndex: w ? 0 : -1,
          onKeyDown(e) {
            ((M.current = e.key),
              p.set(`activeIndex`, k),
              e.key === ` ` && v.current && e.preventDefault());
          },
          onClick(e) {
            let t = e.type === `click` && te.current !== `touch`,
              n = e.nativeEvent.pointerType,
              r = t && Ae(e.nativeEvent) && (n !== void 0 || w),
              i = t && !r && !N.current;
            ((N.current = !1),
              (e.type === `keydown` && M.current === null) ||
                s ||
                (e.type === `keydown` && M.current === ` ` && v.current) ||
                i ||
                ((M.current = null), I(e.nativeEvent)));
          },
          onPointerEnter(e) {
            te.current = e.pointerType;
          },
          onPointerMove(e) {
            if (e.pointerType === `mouse` && e.buttons === 1) {
              let t = _.current;
              ((t.dragY += e.movementY), t.dragY ** 2 >= 64 && (t.allowUnselectedMouseUp = !0));
            }
          },
          onPointerDown(e) {
            ((te.current = e.pointerType), (N.current = !0), ie());
          },
          onMouseUp() {
            if ((ie(), s || te.current === `touch` || N.current)) return;
            let e = !_.current.allowSelectedMouseUp && T,
              t = !_.current.allowUnselectedMouseUp && !T;
            e || t || ((N.current = !0), j.current?.click(), (N.current = !1));
          },
        },
        ae = Y(`div`, e, { ref: [ne, t, f.ref, j], state: F, props: [m, R, l, P] }),
        z = Z.useMemo(
          () => ({ selected: T, index: k, textRef: u, selectedByFocus: E, hasRegistered: A }),
          [T, k, u, E, A],
        );
      return (0, Q.jsx)(ct.Provider, { value: z, children: ae });
    }),
  ),
  dt = Z.memo(
    Z.forwardRef(function (e, t) {
      let { index: n, textRef: r, selectedByFocus: i, hasRegistered: a } = lt(),
        { firstItemTextRef: o, selectedItemTextRef: s } = X(),
        { render: c, className: l, style: u, ...d } = e,
        f = Z.useCallback(
          (e) => {
            e && (a && n === 0 && (o.current = e), a && i && (s.current = e));
          },
          [o, s, n, i, a],
        );
      return Y(`div`, e, { ref: [f, t, r], props: d });
    }),
  ),
  ft = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, direction: a, keepMounted: o = !1, ...s } = e,
      c = a === `up`,
      {
        store: l,
        popupRef: u,
        listRef: f,
        handleScrollArrowVisibility: p,
        scrollArrowsMountedCountRef: m,
      } = X(),
      { side: h, scrollDownArrowRef: g, scrollUpArrowRef: _ } = Je(),
      v = c ? d.scrollUpArrowVisible : d.scrollDownArrowVisible,
      y = L(l, v),
      b = L(l, d.openMethod),
      x = y && b !== `touch`,
      S = De(),
      C = c ? _ : g,
      { transitionStatus: w, setMounted: T } = P(x);
    (V(
      () => (
        (m.current += 1),
        l.state.hasScrollArrows || l.set(`hasScrollArrows`, !0),
        () => {
          ((m.current = Math.max(0, m.current - 1)),
            m.current === 0 && l.state.hasScrollArrows && l.set(`hasScrollArrows`, !1));
        }
      ),
      [l, m],
    ),
      ae({
        open: x,
        ref: C,
        onComplete() {
          x || T(!1);
        },
      }));
    let E = Y(`div`, e, {
      ref: [t, C],
      state: { direction: a, visible: x, side: h, transitionStatus: w },
      props: [
        {
          "aria-hidden": !0,
          children: c ? `▲` : `▼`,
          style: { position: `absolute` },
          onMouseMove(e) {
            if ((e.movementX === 0 && e.movementY === 0) || S.isStarted()) return;
            l.set(`activeIndex`, null);
            function t() {
              let e = l.state.listElement ?? u.current;
              if (!e) return;
              (l.set(`activeIndex`, null), p());
              let n = Be(e.scrollHeight, e.clientHeight),
                r = Re(e.scrollTop, n),
                i = r === (c ? 0 : n),
                a = f.current;
              if (
                (r !== e.scrollTop && (e.scrollTop = r),
                a.length === 0 && l.set(c ? `scrollUpArrowVisible` : `scrollDownArrowVisible`, !i),
                i)
              )
                S.clear();
              else {
                if (a.length > 0) {
                  let t = C.current?.offsetHeight || 0;
                  e.scrollTop = pt(a, c, r, e.clientHeight, t, n);
                }
                S.start(40, t);
              }
            }
            S.start(40, t);
          },
          onMouseLeave() {
            S.clear();
          },
        },
        s,
      ],
    });
    return x || o ? E : null;
  });
function pt(e, t, n, r, i, a) {
  if (t) {
    let t = 0,
      r = n + i - 1;
    for (let n = 0; n < e.length; n += 1) {
      let i = e[n];
      if (i && i.offsetTop >= r) {
        t = n;
        break;
      }
    }
    let o = Math.max(0, t - 1),
      s = e[o];
    return o < t && s ? Re(s.offsetTop - i, a) : 0;
  }
  let o = e.length - 1,
    s = n + r - i + 1;
  for (let t = 0; t < e.length; t += 1) {
    let n = e[t];
    if (n && n.offsetTop + n.offsetHeight > s) {
      o = Math.max(0, t - 1);
      break;
    }
  }
  let c = Math.min(e.length - 1, o + 1),
    l = e[c];
  return c > o && l ? Re(l.offsetTop + l.offsetHeight - r + i, a) : a;
}
var mt = Z.forwardRef(function (e, t) {
    return (0, Q.jsx)(ft, { ...e, ref: t, direction: `down` });
  }),
  ht = Z.forwardRef(function (e, t) {
    return (0, Q.jsx)(ft, { ...e, ref: t, direction: `up` });
  }),
  gt = Z.createContext(void 0);
function _t() {
  let e = Z.useContext(gt);
  if (e === void 0) throw Error(j(56));
  return e;
}
var vt = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      [o, s] = Z.useState(),
      c = Z.useMemo(() => ({ labelId: o, setLabelId: s }), [o, s]),
      l = Y(`div`, e, { ref: t, props: [{ role: `group`, "aria-labelledby": o }, a] });
    return (0, Q.jsx)(gt.Provider, { value: c, children: l });
  }),
  yt = Z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, ...o } = e,
      { setLabelId: s } = _t(),
      c = I(a);
    return (
      V(() => {
        s(c);
      }, [c, s]),
      Y(`div`, e, { ref: t, props: [{ id: c }, o] })
    );
  }),
  bt = n(),
  xt = He,
  St = q(
    `relative inline-flex cursor-pointer select-none items-center justify-between gap-2 border rounded-lg text-left text-base outline-none transition-[color,box-shadow,background-color] data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4`,
    {
      defaultVariants: { size: `default`, variant: `default` },
      variants: {
        variant: {
          default: `w-full min-w-36 border-input bg-background not-dark:bg-clip-padding text-foreground shadow-xs/5 ring-ring/24 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-inset aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 dark:bg-input/32 dark:aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='text-'])]:text-icon-muted [[data-disabled],:focus-visible,[aria-invalid],[data-pressed]]:shadow-none`,
          ghost: `border-transparent text-secondary-label focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring data-pressed:bg-accent [:hover,[data-pressed]]:bg-accent [:hover,[data-pressed]]:text-foreground`,
        },
        size: {
          compact: `h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3.5`,
          default: `min-h-9 px-[calc(--spacing(3)-1px)] sm:min-h-8`,
          lg: `min-h-10 px-[calc(--spacing(3)-1px)] sm:min-h-9`,
          sm: `min-h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:min-h-7`,
          xs: `h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:text-xs [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5`,
        },
      },
    },
  );
function Ct(e) {
  let t = (0, bt.c)(20),
    n,
    r,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]))
    : (({ className: r, size: s, variant: c, children: n, icon: a, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  let l = s === void 0 ? `default` : s,
    u = c === void 0 ? `default` : c,
    d;
  t[7] !== r || t[8] !== l || t[9] !== u
    ? ((d = Te(St({ size: l, variant: u }), r)), (t[7] = r), (t[8] = l), (t[9] = u), (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === a
    ? (f = t[12])
    : ((f = a ?? (0, Q.jsx)(i, { className: `-me-1 size-3.5 opacity-70` })),
      (t[11] = a),
      (t[12] = f));
  let p;
  t[13] === f
    ? (p = t[14])
    : ((p = (0, Q.jsx)(me, { "data-slot": `select-icon`, children: f })), (t[13] = f), (t[14] = p));
  let m;
  return (
    t[15] !== n || t[16] !== o || t[17] !== d || t[18] !== p
      ? ((m = (0, Q.jsxs)(je, {
          className: d,
          "data-slot": `select-trigger`,
          ...o,
          children: [n, p],
        })),
        (t[15] = n),
        (t[16] = o),
        (t[17] = d),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function wt(e) {
  let t = (0, bt.c)(18),
    n,
    r,
    a,
    o,
    s;
  if (t[0] !== e) {
    let { className: i, size: l, children: u, render: d, ...f } = e;
    ((n = u), (r = d));
    let p = {
      className: Te(St({ size: l === void 0 ? `default` : l }), i),
      "data-slot": `select-trigger`,
      type: r ? void 0 : `button`,
    };
    ((s = c),
      (o = `button`),
      (a = z(p, f)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (s = t[5]));
  let l;
  t[6] === n
    ? (l = t[7])
    : ((l = (0, Q.jsx)(`span`, { className: `min-w-0 flex-1 truncate text-left`, children: n })),
      (t[6] = n),
      (t[7] = l));
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(i, { "aria-hidden": !0, className: `-me-1 size-3.5 shrink-0 opacity-70` })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === l
    ? (d = t[10])
    : ((d = (0, Q.jsxs)(Q.Fragment, { children: [l, u] })), (t[9] = l), (t[10] = d));
  let f;
  t[11] !== a || t[12] !== d
    ? ((f = { ...a, children: d }), (t[11] = a), (t[12] = d), (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== r || t[15] !== o || t[16] !== f
      ? ((p = { defaultTagName: o, props: f, render: r }),
        (t[14] = r),
        (t[15] = o),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    s(p)
  );
}
function Tt(e) {
  let t = (0, bt.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = Te(`flex-1 truncate data-placeholder:text-placeholder`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Q.jsx)(We, { className: i, "data-slot": `select-value`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Et(e) {
  let t = (0, bt.c)(34),
    n,
    r,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (o = t[3]),
      (s = t[4]),
      (c = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]))
    : (({
        className: o,
        children: r,
        side: c,
        sideOffset: l,
        align: u,
        alignOffset: d,
        alignItemWithTrigger: f,
        matchTriggerWidth: p,
        anchor: n,
        ...s
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p));
  let m = c === void 0 ? `bottom` : c,
    h = l === void 0 ? 4 : l,
    g = u === void 0 ? `start` : u,
    _ = d === void 0 ? 0 : d,
    v = f === void 0 || f,
    y = p === void 0 || p,
    b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(ht, {
        className: `top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-50% before:from-popover`,
        "data-slot": `select-scroll-up-arrow`,
        children: (0, Q.jsx)(a, { className: `relative size-4.5 sm:size-4` }),
      })),
      (t[11] = b))
    : (b = t[11]);
  let x = y && `min-w-(--anchor-width)`,
    S;
  t[12] === x
    ? (S = t[13])
    : ((S = Te(
        `dropdown-glass relative h-full rounded-lg shadow-[0_16px_40px_-18px_rgb(0_0_0/55%)] dark:shadow-[0_18px_44px_-18px_rgb(0_0_0/80%)]`,
        x,
      )),
      (t[12] = x),
      (t[13] = S));
  let C;
  t[14] === o
    ? (C = t[15])
    : ((C = Te(`max-h-(--available-height) overflow-y-auto p-1`, o)), (t[14] = o), (t[15] = C));
  let w;
  t[16] !== r || t[17] !== C
    ? ((w = (0, Q.jsx)(st, { className: C, "data-slot": `select-list`, children: r })),
      (t[16] = r),
      (t[17] = C),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== w || t[20] !== S
    ? ((T = (0, Q.jsx)(`div`, { className: S, children: w })),
      (t[19] = w),
      (t[20] = S),
      (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(mt, {
        className: `bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-50% before:from-popover`,
        "data-slot": `select-scroll-down-arrow`,
        children: (0, Q.jsx)(i, { className: `relative size-4.5 sm:size-4` }),
      })),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== s || t[24] !== T
    ? ((D = (0, Q.jsxs)($e, {
        className: `origin-(--transform-origin) rounded-lg text-foreground outline-none`,
        "data-slot": `select-popup`,
        ...s,
        children: [b, T, E],
      })),
      (t[23] = s),
      (t[24] = T),
      (t[25] = D))
    : (D = t[25]);
  let O;
  return (
    t[26] !== g ||
    t[27] !== v ||
    t[28] !== _ ||
    t[29] !== n ||
    t[30] !== m ||
    t[31] !== h ||
    t[32] !== D
      ? ((O = (0, Q.jsx)(Ke, {
          children: (0, Q.jsx)(Ze, {
            align: g,
            alignItemWithTrigger: v,
            alignOffset: _,
            anchor: n,
            className: `z-[130] select-none`,
            "data-slot": `select-positioner`,
            side: m,
            sideOffset: h,
            children: D,
          }),
        })),
        (t[26] = g),
        (t[27] = v),
        (t[28] = _),
        (t[29] = n),
        (t[30] = m),
        (t[31] = h),
        (t[32] = D),
        (t[33] = O))
      : (O = t[33]),
    O
  );
}
function Dt(e) {
  let t = (0, bt.c)(13),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: r, children: n, hideIndicator: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] === r
    ? (o = t[6])
    : ((o = Te(
        `flex min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-pointer items-center rounded-sm px-2 py-1 text-base outline-none data-selected:bg-foreground/[0.08] data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
        r,
      )),
      (t[5] = r),
      (t[6] = o));
  let s;
  t[7] === n
    ? (s = t[8])
    : ((s = (0, Q.jsx)(dt, {
        className: `min-w-0 flex-1 [&_svg:not([class*='text-'])]:text-muted-foreground`,
        "data-slot": `select-item-text`,
        children: n,
      })),
      (t[7] = n),
      (t[8] = s));
  let c;
  return (
    t[9] !== i || t[10] !== o || t[11] !== s
      ? ((c = (0, Q.jsx)(ut, { className: o, "data-slot": `select-item`, ...i, children: s })),
        (t[9] = i),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Ot(e) {
  let t = (0, bt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Q.jsx)(vt, { "data-slot": `select-group`, ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function kt(e) {
  let t = (0, bt.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Q.jsx)(yt, {
          className: `px-2 py-1.5 font-medium text-muted-foreground text-xs`,
          "data-slot": `select-group-label`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
export { Dt as a, Tt as c, kt as i, wt as n, Et as o, Ot as r, Ct as s, xt as t };
//# sourceMappingURL=select-CBCDohvC.js.map
