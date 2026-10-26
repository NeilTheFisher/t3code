import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./search-BrluOr7L.js";
import { t as a } from "./chevrons-up-down-DdmMCCVA.js";
import { t as o } from "./x-Blp0Exqg.js";
import {
  $a as s,
  Ao as c,
  Ba as l,
  Br as u,
  Co as d,
  Cr as f,
  Da as p,
  Do as m,
  Er as h,
  Fn as g,
  Fr as _,
  Ga as v,
  Gr as y,
  Ha as b,
  Hi as x,
  Hr as S,
  Ia as C,
  Ir as w,
  Ji as T,
  Jr as E,
  La as ee,
  Ma as D,
  Mn as te,
  Mo as O,
  Na as ne,
  Ni as k,
  Nn as A,
  Oa as re,
  On as j,
  Oo as M,
  Pa as ie,
  Pi as N,
  Pn as ae,
  Ra as oe,
  Rr as se,
  Sa as ce,
  Sn as le,
  Sr as P,
  Ta as ue,
  Tn as de,
  To as fe,
  Tr as pe,
  Ui as me,
  Ur as he,
  Vi as ge,
  Wa as F,
  Wr as _e,
  Xa as ve,
  Ya as ye,
  Yr as be,
  Za as xe,
  Zi as Se,
  _r as Ce,
  ao as we,
  ba as Te,
  bo as Ee,
  br as De,
  co as Oe,
  da as ke,
  do as Ae,
  fa as je,
  hi as Me,
  io as Ne,
  jn as Pe,
  jo as Fe,
  kn as Ie,
  ko as Le,
  ma as Re,
  mi as ze,
  pa as Be,
  qr as Ve,
  so as He,
  t as I,
  uo as Ue,
  wa as We,
  wi as Ge,
  wn as Ke,
  wo as qe,
  wr as Je,
  xo as Ye,
  xr as Xe,
  ya as Ze,
  yi as Qe,
  yo as $e,
  yr as et,
  za as L,
  zi as R,
  zr as tt,
} from "./utils-CPoejuy5.js";
import { t as nt } from "./FormContext-BF__1yV6.js";
import { t as rt } from "./scroll-area-B6188Bq9.js";
var z = e(t()),
  it = z.createContext(void 0),
  at = z.createContext(void 0),
  ot = z.createContext(void 0),
  st = z.createContext(``);
function B() {
  let e = z.useContext(it);
  if (!e) throw Error(O(22));
  return e;
}
function ct() {
  let e = z.useContext(at);
  if (!e) throw Error(O(23));
  return e;
}
function V() {
  let e = z.useContext(ot);
  if (!e) throw Error(O(24));
  return e;
}
function lt() {
  return z.useContext(st);
}
var H = {
  id: R((e) => e.id),
  labelId: R((e) => e.labelId),
  items: R((e) => e.items),
  selectedValue: R((e) => e.selectedValue),
  hasSelectionChips: R((e) => {
    let t = e.selectedValue;
    return Array.isArray(t) && t.length > 0;
  }),
  hasSelectedValue: R((e) => {
    let { selectedValue: t, selectionMode: n } = e;
    return t == null ? !1 : n === `multiple` && Array.isArray(t) ? t.length > 0 : !0;
  }),
  hasNullItemLabel: R((e, t) => (t ? Ke(e.items) : !1)),
  open: R((e) => e.open),
  mounted: R((e) => e.mounted),
  forceMounted: R((e) => e.forceMounted),
  inline: R((e) => e.inline),
  activeIndex: R((e) => e.activeIndex),
  selectedIndex: R((e) => e.selectedIndex),
  isActive: R((e, t) => e.activeIndex === t),
  isSelected: R((e, t) => {
    let n = e.isItemEqualToValue,
      r = e.selectedValue;
    return Array.isArray(r) ? r.some((e) => Pe(t, e, n)) : Pe(t, r, n);
  }),
  transitionStatus: R((e) => e.transitionStatus),
  popupProps: R((e) => e.popupProps),
  inputProps: R((e) => e.inputProps),
  triggerProps: R((e) => e.triggerProps),
  itemProps: R((e) => e.itemProps),
  positionerElement: R((e) => e.positionerElement),
  listElement: R((e) => e.listElement),
  triggerElement: R((e) => e.triggerElement),
  inputElement: R((e) => e.inputElement),
  inputGroupElement: R((e) => e.inputGroupElement),
  popupSide: R((e) => e.popupSide),
  openMethod: R((e) => e.openMethod),
  inputInsidePopup: R((e) => e.inputInsidePopup),
  inputOwnsFormValue: R((e) => e.inputOwnsFormValue),
  selectionMode: R((e) => e.selectionMode),
  name: R((e) => e.name),
  form: R((e) => e.form),
  disabled: R((e) => e.disabled),
  readOnly: R((e) => e.readOnly),
  required: R((e) => e.required),
  grid: R((e) => e.grid),
  virtualized: R((e) => e.virtualized),
  itemToStringLabel: R((e) => e.itemToStringLabel),
  isItemEqualToValue: R((e) => e.isItemEqualToValue),
  modal: R((e) => e.modal),
  autoHighlight: R((e) => e.autoHighlight),
  submitOnItemClick: R((e) => e.submitOnItemClick),
};
function ut(e, t) {
  return (n, r) => {
    if (n == null) return !1;
    let i = j(n, t);
    return e.contains(i, r);
  };
}
function dt(e, t, n) {
  return (r, i) => {
    if (r == null) return !1;
    if (!i) return !0;
    let a = j(r, t),
      o = n == null ? `` : j(n, t);
    return o && e.contains(o, i) && o.length === i.length ? !0 : e.contains(a, i);
  };
}
var ft = new Map();
function pt(e = {}) {
  let t = { usage: `search`, sensitivity: `base`, ignorePunctuation: !0, ...e },
    n = `${mt(e.locale)}|${JSON.stringify(t)}`,
    r = ft.get(n);
  if (r) return r;
  let i = new Intl.Collator(e.locale, t),
    a = {
      contains(e, t, n) {
        if (!t) return !0;
        let r = j(e, n);
        for (let e = 0; e <= r.length - t.length; e += 1)
          if (i.compare(r.slice(e, e + t.length), t) === 0) return !0;
        return !1;
      },
      startsWith(e, t, n) {
        if (!t) return !0;
        let r = j(e, n);
        return i.compare(r.slice(0, t.length), t) === 0;
      },
      endsWith(e, t, n) {
        if (!t) return !0;
        let r = j(e, n),
          a = t.length;
        return r.length >= a && i.compare(r.slice(r.length - a), t) === 0;
      },
    };
  return (ft.set(n, a), a);
}
function mt(e) {
  return Array.isArray(e) ? e.map((e) => mt(e)).join(`,`) : e == null ? `` : String(e);
}
var ht = pt;
function gt(e = {}) {
  let { multiple: t = !1, value: n, ...r } = e,
    i = pt(r),
    a = z.useCallback((e, r, a) => (t ? ut(i, a)(e, r) : dt(i, a, n)(e, r)), [i, n, t]);
  return z.useMemo(() => ({ contains: a, startsWith: i.startsWith, endsWith: i.endsWith }), [a, i]);
}
var _t = Symbol(`none`),
  vt = { value: _t, index: -1 },
  U = e(r());
function W(e) {
  let {
      id: t,
      onOpenChangeComplete: n,
      defaultSelectedValue: r = null,
      selectedValue: i,
      onSelectedValueChange: a,
      defaultInputValue: o,
      inputValue: s,
      open: l,
      defaultOpen: u = !1,
      selectionMode: d = `none`,
      onItemHighlighted: f,
      name: p,
      form: h,
      disabled: _ = !1,
      readOnly: y = !1,
      required: b = !1,
      inputRef: S,
      grid: C = !1,
      items: T,
      filteredItems: E,
      filter: ee,
      openOnInputClick: O = !0,
      autoHighlight: ie = !1,
      keepHighlight: oe = !1,
      highlightItemOnHover: ce = !0,
      loopFocus: le = !0,
      itemToStringLabel: P,
      itemToStringValue: pe,
      isItemEqualToValue: me = te,
      virtualized: he = !1,
      inline: _e = !1,
      fillInputOnItemPress: ve = !0,
      modal: be = !1,
      limit: xe = -1,
      autoComplete: Se = `list`,
      formAutoComplete: Ce,
      locale: Ee,
      submitOnItemClick: Ne = !1,
    } = e,
    { clearErrors: ze } = nt(),
    {
      setDirty: Be,
      validityData: I,
      shouldValidateOnChange: Ue,
      setFilled: We,
      name: Ke,
      disabled: qe,
      setTouched: Ye,
      setFocused: Xe,
      validationMode: $e,
      validation: L,
    } = Je(),
    R = Ve(),
    rt = De({ id: t }),
    B = ht({ locale: Ee }),
    [ct, V] = z.useState(!1),
    [lt, ft] = z.useState(null),
    pt = z.useRef([]),
    mt = z.useRef([]),
    gt = z.useRef(null),
    W = z.useRef(null),
    yt = z.useRef(null),
    bt = z.useRef(null),
    xt = z.useRef(null),
    St = z.useRef(!0),
    Ct = z.useRef(!1),
    wt = z.useRef(null),
    Tt = z.useRef(null),
    Et = z.useRef(null),
    G = z.useRef(vt),
    Dt = z.useRef(null),
    Ot = z.useRef([]),
    kt = z.useRef([]),
    At = qe || _,
    jt = Ke ?? p,
    K = d === `multiple`,
    Mt = d === `single`,
    Nt = s !== void 0 || o !== void 0,
    Pt = T !== void 0,
    Ft = E !== void 0,
    q;
  q = ie === `always` ? `always` : ie ? `input-change` : !1;
  let [J, It] = ye({
      controlled: i,
      default: K ? (r ?? m) : r,
      name: `Combobox`,
      state: `selectedValue`,
    }),
    Lt = z.useMemo(
      () => (ee === null ? () => !0 : ee === void 0 ? (Mt && !ct ? dt(B, P, J) : ut(B, P)) : ee),
      [ee, Mt, J, ct, B, P],
    ),
    Rt = Fe(() => (Nt ? (o ?? ``) : Mt ? j(J, P) : ``)).current,
    [Y, zt] = ye({ controlled: s, default: Rt, name: `Combobox`, state: `inputValue` }),
    [X, Bt] = ye({ controlled: l, default: u, name: `Combobox`, state: `open` }),
    Vt = de(T),
    Z = lt ?? (Y === `` ? `` : String(Y).trim()),
    Ht = Mt ? j(J, P) : ``,
    Ut = Mt && !ct && Z !== `` && Ht !== `` && Ht.length === Z.length && B.contains(Ht, Z),
    Wt = Ut ? `` : Z,
    Gt = Pt && Ft && Ut,
    Q = z.useMemo(() => (T ? (Vt ? T.flatMap((e) => e.items) : T) : m), [T, Vt]),
    Kt = z.useMemo(() => {
      if (E && !Gt) return E;
      if (!T) return m;
      if (Vt) {
        let e = T,
          t = [],
          n = 0;
        for (let r of e) {
          if (xe > -1 && n >= xe) break;
          let e = Wt === `` ? r.items : r.items.filter((e) => Lt(e, Wt, P));
          if (e.length === 0) continue;
          let i = xe > -1 ? xe - n : 1 / 0,
            a = e.slice(0, i);
          if (a.length > 0) {
            let e = { ...r, items: a };
            (t.push(e), (n += a.length));
          }
        }
        return t;
      }
      if (Wt === ``) return xe > -1 ? Q.slice(0, xe) : Q;
      let e = [];
      for (let t of Q) {
        if (xe > -1 && e.length >= xe) break;
        Lt(t, Wt, P) && e.push(t);
      }
      return e;
    }, [E, Gt, T, Vt, Wt, xe, Lt, P, Q]),
    qt = z.useMemo(() => (Vt ? Kt.flatMap((e) => e.items) : Kt), [Kt, Vt]),
    $ = Fe(
      () =>
        new k({
          id: rt,
          labelId: void 0,
          selectedValue: J,
          open: X,
          filter: Lt,
          query: Z,
          items: T,
          selectionMode: d,
          listRef: pt,
          labelsRef: mt,
          popupRef: gt,
          emptyRef: xt,
          inputRef: W,
          startDismissRef: yt,
          endDismissRef: bt,
          keyboardActiveRef: St,
          chipsContainerRef: wt,
          clearRef: Tt,
          valuesRef: Ot,
          allValuesRef: kt,
          selectionEventRef: Et,
          name: jt,
          form: h,
          disabled: At,
          readOnly: y,
          required: b,
          grid: C,
          isGrouped: Vt,
          virtualized: he,
          openOnInputClick: O,
          itemToStringLabel: P,
          isItemEqualToValue: me,
          modal: be,
          autoHighlight: q,
          submitOnItemClick: Ne,
          hasInputValue: Nt,
          mounted: !1,
          forceMounted: !1,
          transitionStatus: `idle`,
          inline: _e,
          activeIndex: null,
          selectedIndex: null,
          popupProps: {},
          inputProps: {},
          triggerProps: {},
          itemProps: M,
          positionerElement: null,
          listElement: null,
          triggerElement: null,
          inputElement: null,
          inputGroupElement: null,
          popupSide: null,
          openMethod: null,
          inputInsidePopup: !0,
          inputOwnsFormValue: d === `none`,
          onOpenChangeComplete: n || Le,
          setOpen: Le,
          setInputValue: Le,
          setSelectedValue: Le,
          setIndices: Le,
          onItemHighlighted: Le,
          handleSelection: Le,
          forceMount: Le,
          requestSubmit: Le,
        }),
    ).current,
    Jt = d === `none` ? Y : J,
    Yt = z.useMemo(
      () => (d === `none` ? Jt : Array.isArray(J) ? J.map((e) => Ie(e, pe)) : Ie(J, pe)),
      [Jt, pe, d, J],
    ),
    Xt = v(f),
    Zt = v(n),
    Qt = N($, H.activeIndex),
    $t = N($, H.selectedIndex),
    en = N($, H.positionerElement),
    tn = N($, H.listElement),
    nn = N($, H.triggerElement),
    rn = N($, H.inputElement),
    an = N($, H.inputGroupElement),
    on = N($, H.inline),
    sn = N($, H.inputInsidePopup),
    cn = N($, H.inputOwnsFormValue),
    ln = Re(nn),
    { mounted: un, setMounted: dn, transitionStatus: fn } = re(X),
    { openMethod: pn, triggerProps: mn } = w(X),
    hn = v(() => Yt);
  et(sn ? ln : W, rt, Jt, hn);
  let gn = v(() => {
      T ? (mt.current = qt.map((e) => j(e, P))) : $.set(`forceMounted`, !0);
    }),
    _n = z.useRef(J);
  F(() => {
    J !== _n.current && gn();
  }, [gn, J]);
  let vn = v((e) => {
      $.update(e);
      let t = e.type || `none`;
      if (e.activeIndex !== void 0) {
        if (e.activeIndex === null)
          G.current !== vt && ((G.current = vt), Xt(void 0, ne(t, void 0, { index: -1 })));
        else {
          let n = Ot.current[e.activeIndex];
          ((G.current = { value: n, index: e.activeIndex }),
            Xt(n, ne(t, void 0, { index: e.activeIndex })));
        }
      }
    }),
    yn = v((t, n) => {
      if (((Ct.current = n.reason === we), e.onInputValueChange?.(t, n), !n.isCanceled)) {
        if (n.reason === `input-change`) {
          let e = n.event,
            r = e.inputType;
          if (
            e.type === `compositionend` ||
            (r != null && r !== `` && r !== `insertReplacementText`)
          ) {
            let e = t.trim() !== ``;
            (e && V(!0),
              (Dt.current = { hasQuery: e }),
              e && q && $.state.activeIndex == null && $.set(`activeIndex`, 0));
          }
        }
        zt(t);
      }
    }),
    bn = v((t, n) => {
      if (
        X !== t &&
        (n.reason === `escape-key` &&
          Pt &&
          qt.length === 0 &&
          !$.state.emptyRef.current &&
          n.allowPropagation(),
        e.onOpenChange?.(t, n),
        !n.isCanceled &&
          (t &&
            K &&
            sn &&
            !on &&
            lt !== null &&
            (V(!1), ft(null), Y !== `` && yn(``, D(we, n.event))),
          !t &&
            ct &&
            (Mt
              ? (on || ft(Z), Z === `` && V(!1))
              : K &&
                (on || ft(Z),
                sn && vn({ activeIndex: null }),
                (!sn || on) && yn(``, D(we, n.event)))),
          Bt(t),
          !t &&
            sn &&
            (n.reason === `focus-out` || n.reason === `outside-press`) &&
            (Ye(!0), Xe(!1), $e === `onBlur`)))
      ) {
        let e = d === `none` ? Y : J;
        L.commit(e);
      }
    }),
    xn = v((e, t) => {
      (a?.(e, t),
        !t.isCanceled &&
          (It(e),
          ((d === `none` && gt.current && ve) || (Mt && !$.state.inputInsidePopup)) &&
            yn(j(e, P), D(t.reason, t.event)),
          Mt && e != null && t.reason !== `input-change` && ct && !on && ft(Z)));
    }),
    Sn = v((e, t) => {
      let n = t;
      if (n === void 0) {
        if (Qt === null) return;
        n = Ot.current[Qt];
      }
      let r = Te(e),
        i = Et.current ?? e;
      Et.current = null;
      let a = D(Oe, i),
        o = r?.closest(`a`)?.getAttribute(`href`);
      if (o) o.startsWith(`#`) && bn(!1, a);
      else if (K) {
        let e = Array.isArray(J) ? J : [],
          t = g(e, n, $.state.isItemEqualToValue)
            ? ae(e, n, $.state.isItemEqualToValue)
            : [...e, n];
        if ((xn(t, a), !(W.current && W.current.value.trim() !== ``))) return;
        $.state.inputInsidePopup ? yn(``, D(we, a.event)) : bn(!1, a);
      } else (xn(n, a), bn(!1, a));
    }),
    Cn = v(() => {
      if (!$.state.submitOnItemClick) return;
      let e = L.inputRef.current?.form ?? $.state.inputElement?.form;
      e && typeof e.requestSubmit == `function` && e.requestSubmit();
    }),
    wn = v(() => {
      if (
        (dn(!1),
        Zt?.(!1),
        V(!1),
        ft(null),
        vn(d === `none` ? { activeIndex: null, selectedIndex: null } : { activeIndex: null }),
        K && W.current && W.current.value !== `` && !Ct.current && yn(``, D(we)),
        Mt)
      ) {
        if ($.state.inputInsidePopup) W.current && W.current.value !== `` && yn(``, D(we));
        else {
          let e = j(J, P);
          W.current && W.current.value !== e && yn(e, D(e === `` ? we : Ae));
        }
      }
    }),
    Tn = z.useMemo(() => (on && en ? { current: en.closest(`[role="dialog"]`) } : gt), [on, en]);
  (ue({
    enabled: !e.actionsRef,
    open: X,
    ref: Tn,
    onComplete() {
      X || wn();
    },
  }),
    z.useImperativeHandle(e.actionsRef, () => ({ unmount: wn }), [wn]),
    F(
      function () {
        if (X || d === `none`) return;
        let e = T ? Q : kt.current;
        if (K) {
          let t = Array.isArray(J) ? J : [],
            n = t[t.length - 1],
            r = A(e, n, me);
          vn({ selectedIndex: r === -1 ? null : r });
        } else {
          let t = A(e, J, me);
          vn({ selectedIndex: t === -1 ? null : t });
        }
      },
      [X, J, T, d, Q, K, me, vn],
    ),
    F(() => {
      T && ((Ot.current = qt), (pt.current.length = qt.length));
    }, [T, qt]),
    F(() => {
      let e = Dt.current;
      if (
        (e &&
          (e.hasQuery ? q && $.set(`activeIndex`, 0) : q === `always` && $.set(`activeIndex`, 0),
          (Dt.current = null)),
        !X && !on)
      )
        return;
      let t = Pt || Ft ? qt : Ot.current,
        n = $.state.activeIndex;
      if (n == null) {
        if (q === `always` && t.length > 0) {
          $.set(`activeIndex`, 0);
          return;
        }
        G.current !== vt &&
          ((G.current = vt), $.state.onItemHighlighted(void 0, ne(Ae, void 0, { index: -1 })));
        return;
      }
      if (n >= t.length) {
        (G.current !== vt &&
          ((G.current = vt), $.state.onItemHighlighted(void 0, ne(Ae, void 0, { index: -1 }))),
          $.set(`activeIndex`, null));
        return;
      }
      let r = t[n],
        i = G.current.value,
        a = i !== _t && Pe(r, i, $.state.isItemEqualToValue);
      (G.current.index === n && a) ||
        ((G.current = { value: r, index: n }),
        $.state.onItemHighlighted(r, ne(Ae, void 0, { index: n })));
    }, [Qt, q, Ft, Pt, qt, on, X, $]),
    F(() => {
      We(d === `none` ? String(Y) !== `` : K ? Array.isArray(J) && J.length > 0 : J != null);
    }, [We, d, Y, J, K]),
    z.useEffect(() => {
      Pt && q && qt.length === 0 && vn({ activeIndex: null });
    }, [Pt, q, qt.length, vn]),
    se(Z, () => {
      X && Z !== `` && Z !== String(Rt) && V(!0);
    }),
    se(J, () => {
      if (
        d !== `none` &&
        (ze(jt), Be(J !== I.initialValue), Ue() ? L.commit(J) : L.commit(J, !0), Mt && !Nt && !sn)
      ) {
        let e = j(J, P);
        Y !== e && yn(e, D(Ae));
      }
    }),
    se(Y, () => {
      d === `none` && (ze(jt), Be(Y !== I.initialValue), Ue() ? L.commit(Y) : L.commit(Y, !0));
    }),
    se(T, () => {
      if (!Mt || Nt || sn || ct) return;
      let e = j(J, P);
      Y !== e && yn(e, D(Ae));
    }));
  let En = Qe({
      open: on ? !0 : X,
      onOpenChange: bn,
      elements: { reference: sn ? nn : rn, floating: en },
    }),
    Dn,
    On;
  on || ((Dn = C ? `grid` : `listbox`), (On = X ? `true` : `false`));
  let kn = z.useMemo(() => {
      let e = rn?.tagName === `INPUT`,
        t = rn == null || e,
        n = t || X,
        r = t
          ? { autoComplete: `off`, spellCheck: `false`, autoCorrect: `off`, autoCapitalize: `none` }
          : {};
      return (
        n &&
          ((r.role = `combobox`),
          (r[`aria-expanded`] = On),
          (r[`aria-haspopup`] = Dn),
          (r[`aria-controls`] = X ? tn?.id : void 0),
          (r[`aria-autocomplete`] = Se)),
        { reference: r, floating: { role: `presentation` } }
      );
    }, [rn, X, On, Dn, tn?.id, Se]),
    An = x(En, {
      enabled: !y && !At && O,
      event: `mousedown-only`,
      toggle: !1,
      touchOpenDelay: sn ? 0 : 100,
      reason: He,
    }),
    jn = ge(En, {
      enabled: !y && !At && !on,
      outsidePressEvent: { mouse: `sloppy`, touch: `intentional` },
      bubbles: on ? !0 : void 0,
      outsidePress(e) {
        let t = Te(e);
        return !Ze(nn, t) && !Ze(Tt.current, t) && !Ze(wt.current, t) && !Ze(an, t);
      },
    }),
    Mn = Me(En, {
      enabled: !y && !At,
      id: rt,
      listRef: pt,
      activeIndex: Qt,
      selectedIndex: $t,
      virtual: !0,
      loopFocus: le,
      allowEscape: le && !q,
      focusItemOnOpen: ct || (d === `none` && !q) ? !1 : `auto`,
      focusItemOnHover: ce,
      resetOnPointerLeave: !oe,
      cols: C ? 2 : 1,
      orientation: C ? `horizontal` : void 0,
      rtl: R === `rtl`,
      disabledIndices: m,
      onNavigate(e, t) {
        (t || X) &&
          fn !== `ending` &&
          vn(
            t ? { activeIndex: e, type: St.current ? `keyboard` : `pointer` } : { activeIndex: e },
          );
      },
    }),
    Nn = z.useMemo(
      () => fe(Mn.reference, jn.reference, An.reference, kn.reference),
      [Mn.reference, jn.reference, An.reference, kn.reference],
    ),
    Pn = z.useMemo(
      () => fe(Ge, Mn.floating, jn.floating, kn.floating),
      [Mn.floating, jn.floating, kn.floating],
    ),
    Fn = z.useMemo(() => {
      let e = Mn.item;
      return e ? { ...e, onFocus: void 0 } : M;
    }, [Mn.item]);
  (tt(() => {
    $.update({
      inline: _e,
      popupProps: Pn,
      inputProps: Nn,
      triggerProps: mn,
      itemProps: Fn,
      setOpen: bn,
      setInputValue: yn,
      setSelectedValue: xn,
      setIndices: vn,
      onItemHighlighted: Xt,
      handleSelection: Sn,
      forceMount: gn,
      requestSubmit: Cn,
    });
  }),
    F(() => {
      $.update({
        id: rt,
        selectedValue: J,
        open: X,
        mounted: un,
        transitionStatus: fn,
        items: T,
        inline: _e,
        popupProps: Pn,
        inputProps: Nn,
        triggerProps: mn,
        openMethod: pn,
        itemProps: Fn,
        selectionMode: d,
        name: jt,
        form: h,
        disabled: At,
        readOnly: y,
        required: b,
        grid: C,
        isGrouped: Vt,
        virtualized: he,
        onOpenChangeComplete: Zt,
        openOnInputClick: O,
        itemToStringLabel: P,
        modal: be,
        autoHighlight: q,
        isItemEqualToValue: me,
        submitOnItemClick: Ne,
        hasInputValue: Nt,
        requestSubmit: Cn,
        inputOwnsFormValue: d === `none` && (_e || !$.state.inputInsidePopup),
      });
    }, [
      $,
      rt,
      J,
      X,
      un,
      fn,
      T,
      Pn,
      Nn,
      Fn,
      pn,
      mn,
      d,
      jt,
      At,
      y,
      b,
      L,
      C,
      Vt,
      he,
      Zt,
      O,
      P,
      be,
      me,
      Ne,
      Nt,
      _e,
      Cn,
      q,
      h,
    ]));
  let In = c(S, L.inputRef),
    Ln = z.useMemo(
      () => ({ query: Z, hasItems: Pt, filteredItems: Kt, flatFilteredItems: qt }),
      [Z, Pt, Kt, qt],
    ),
    Rn = z.useMemo(() => (Array.isArray(Jt) ? `` : Ie(Jt, pe)), [Jt, pe]),
    zn = K && Array.isArray(J) && J.length > 0,
    Bn = K || (d === `none` && cn) ? void 0 : jt,
    Vn = z.useMemo(
      () =>
        !K || !Array.isArray(J) || !jt
          ? null
          : J.map((e) => {
              let t = Ie(e, pe);
              return (0, U.jsx)(`input`, { type: `hidden`, form: h, name: jt, value: t }, t);
            }),
      [K, J, h, jt, pe],
    ),
    Hn = (0, U.jsxs)(z.Fragment, {
      children: [
        e.children,
        (0, U.jsx)(`input`, {
          ...L.getInputValidationProps({
            onFocus() {
              sn ? nn?.focus() : (W.current || nn)?.focus();
            },
            onChange(e) {
              if (e.nativeEvent.defaultPrevented || At || y) {
                e.preventBaseUIHandler?.();
                return;
              }
              let t = e.currentTarget.value,
                n = D(Ae, e.nativeEvent);
              function r() {
                if (K) return;
                if (d === `none`) {
                  (Be(t !== I.initialValue), yn(t, n), Ue() && L.commit(t));
                  return;
                }
                let e = Ot.current.find(
                  (e) =>
                    Ie(e, pe).toLowerCase() === t.toLowerCase() ||
                    j(e, P).toLowerCase() === t.toLowerCase(),
                );
                e != null && (Be(e !== I.initialValue), xn?.(e, n), Ue() && L.commit(e));
              }
              T ? r() : (gn(), queueMicrotask(r));
            },
          }),
          id: rt && Bn == null ? `${rt}-hidden-input` : void 0,
          form: h,
          name: Bn,
          autoComplete: Ce,
          disabled: At,
          required: b && !zn,
          readOnly: y,
          value: Rn,
          ref: In,
          style: Bn ? je : ke,
          tabIndex: -1,
          "aria-hidden": !0,
          suppressHydrationWarning: !0,
        }),
        Vn,
      ],
    });
  return (0, U.jsx)(it.Provider, {
    value: $,
    children: (0, U.jsx)(at.Provider, {
      value: En,
      children: (0, U.jsx)(ot.Provider, {
        value: Ln,
        children: (0, U.jsx)(st.Provider, { value: Y, children: Hn }),
      }),
    }),
  });
}
function yt(e) {
  let { multiple: t = !1, defaultValue: n, value: r, onValueChange: i, autoComplete: a, ...o } = e;
  return (0, U.jsx)(W, {
    ...o,
    selectionMode: t ? `multiple` : `single`,
    selectedValue: r,
    defaultSelectedValue: n,
    onSelectedValueChange: i,
    formAutoComplete: a,
  });
}
var bt = {
    ...Ee,
    ...h,
    popupSide: (e) => (e ? { "data-popup-side": e } : null),
    listEmpty: (e) => (e ? { "data-list-empty": `` } : null),
  },
  xt = z.createContext(void 0);
function St() {
  return z.useContext(xt);
}
var Ct = z.createContext(void 0);
function wt(e) {
  let t = z.useContext(Ct);
  if (t === void 0 && !e) throw Error(O(21));
  return t;
}
var Tt = z.forwardRef(function (e, t) {
    let n = B(),
      { buttonRef: r, getButtonProps: i } = b({ native: !1 }),
      a = c(t, r);
    function o(e) {
      n.state.setOpen(!1, D(xe, e.nativeEvent, e.currentTarget));
    }
    let s = i({ onClick: o });
    return (0, U.jsx)(`span`, {
      ref: a,
      ...s,
      "aria-label": `Dismiss`,
      tabIndex: void 0,
      style: je,
    });
  }),
  Et = z.forwardRef(function (e, t) {
    let { render: n, className: r, disabled: i = !1, id: a, style: o, ...c } = e,
      {
        state: l,
        disabled: u,
        setTouched: d,
        setFocused: p,
        validationMode: m,
        validation: h,
      } = Je(),
      { labelId: g } = Xe(),
      _ = St(),
      y = !!wt(!0),
      b = B(),
      { filteredItems: x } = V(),
      S = lt(),
      C = Ve(),
      w = N(b, H.required),
      T = N(b, H.disabled),
      E = N(b, H.readOnly),
      ee = N(b, H.name),
      te = N(b, H.form),
      O = N(b, H.selectionMode),
      ne = N(b, H.autoHighlight),
      k = N(b, H.inputProps),
      A = N(b, H.triggerProps),
      re = N(b, H.open),
      j = N(b, H.mounted),
      M = N(b, H.selectedValue),
      ae = N(b, H.popupSide),
      se = N(b, H.positionerElement),
      ue = N(b, H.id),
      de = N(b, H.inline),
      fe = N(b, H.modal),
      me = !!ne,
      he = j && se ? ae : null,
      ge = u || T || i,
      F = x.length === 0,
      _e = y || de,
      ve = !_e || fe,
      ye = ie(a ?? (_e ? void 0 : ue)),
      be = le(g, void 0),
      xe = y ? pe : l,
      [Se, Ce] = z.useState(null),
      Te = z.useRef(!1),
      Ee = z.useRef(null),
      De = z.useRef(!1),
      Oe = O === `none` && !y,
      ke = v((e) => {
        let t = y || b.state.inline;
        (t && !b.state.hasInputValue && b.state.setInputValue(``, D(Ae)),
          b.update({ inputElement: e, inputInsidePopup: t, inputOwnsFormValue: Oe }));
      }),
      je = y || !h ? c : h.getValidationProps(c),
      Me = { ...xe, open: re, disabled: ge, readOnly: E, popupSide: he, listEmpty: F };
    function Pe(e) {
      if (!_) return;
      let t,
        { highlightedChipIndex: n } = _,
        r = _.chipsRef.current.length,
        i = C === `rtl`,
        a = i ? `ArrowRight` : `ArrowLeft`,
        o = i ? `ArrowLeft` : `ArrowRight`;
      if (n !== void 0) {
        if (e.key === a) (e.preventDefault(), (t = n > 0 ? n - 1 : void 0));
        else if (e.key === o) (e.preventDefault(), (t = n < r - 1 ? n + 1 : void 0));
        else if (e.key === `Backspace` || e.key === `Delete`) {
          e.preventDefault();
          let r = n >= M.length - 1 ? M.length - 2 : n;
          ((t = r >= 0 ? r : void 0),
            b.state.setIndices({ activeIndex: null, selectedIndex: null, type: `keyboard` }));
        }
        return t;
      }
      return (
        e.key === a && (e.currentTarget.selectionStart ?? 0) === 0 && M.length > 0
          ? (e.preventDefault(), (t = r > 0 ? r - 1 : void 0))
          : e.key === `Backspace` &&
            e.currentTarget.value === `` &&
            M.length > 0 &&
            (b.state.setIndices({ activeIndex: null, selectedIndex: null, type: `keyboard` }),
            e.preventDefault()),
        t
      );
    }
    let Fe = qe(`input`, e, {
        state: Me,
        ref: [t, b.state.inputRef, ke],
        props: [
          k,
          A,
          {
            type: `text`,
            value: e.value ?? Se ?? S,
            "aria-readonly": E || void 0,
            "aria-required": w || void 0,
            "aria-labelledby": be,
            disabled: ge,
            readOnly: E,
            required: O === `none` ? w : void 0,
            form: te,
            ...(Oe && ee && { name: ee }),
            id: ye,
            onFocus() {
              if ((p(!0), !de || !De.current)) return;
              De.current = !1;
              let e = Ee.current;
              e != null &&
                Object.hasOwn(b.state.valuesRef.current, e) &&
                b.state.setIndices({ activeIndex: e });
            },
            onBlur() {
              (d(!0), p(!1));
              let e = b.state.activeIndex;
              if (
                (de &&
                  e !== null &&
                  ne !== `always` &&
                  ((Ee.current = e), (De.current = !0), b.state.setIndices({ activeIndex: null })),
                m === `onBlur`)
              ) {
                let e = O === `none` ? S : M;
                h.commit(e);
              }
            },
            onCompositionStart(e) {
              oe || ((Te.current = !0), Ce(e.currentTarget.value));
            },
            onCompositionEnd(e) {
              Te.current = !1;
              let t = e.currentTarget.value;
              (Ce(null), b.state.setInputValue(t, D(Ne, e.nativeEvent)));
            },
            onChange(e) {
              let t = e.nativeEvent.inputType,
                n = !t || t === `insertReplacementText`,
                r = Te.current || !n;
              if (Te.current) {
                let t = e.currentTarget.value;
                (Ce(t),
                  t === `` &&
                    !b.state.openOnInputClick &&
                    !b.state.inputInsidePopup &&
                    b.state.setOpen(!1, D(we, e.nativeEvent)));
                let n = t.trim(),
                  i = me && n !== ``;
                (!E &&
                  !ge &&
                  n &&
                  r &&
                  (b.state.setOpen(!0, D(Ne, e.nativeEvent)),
                  me ||
                    b.state.setIndices({
                      activeIndex: null,
                      selectedIndex: null,
                      type: b.state.keyboardActiveRef.current ? `keyboard` : `pointer`,
                    })),
                  re &&
                    b.state.activeIndex !== null &&
                    !i &&
                    b.state.setIndices({
                      activeIndex: null,
                      selectedIndex: null,
                      type: b.state.keyboardActiveRef.current ? `keyboard` : `pointer`,
                    }));
                return;
              }
              b.state.setInputValue(e.currentTarget.value, D(Ne, e.nativeEvent));
              let i = e.currentTarget.value === ``,
                a = D(we, e.nativeEvent);
              i &&
                !b.state.inputInsidePopup &&
                (O === `single` && b.state.setSelectedValue(null, a),
                b.state.openOnInputClick || b.state.setOpen(!1, a));
              let o = e.currentTarget.value.trim();
              (!E &&
                !ge &&
                o &&
                r &&
                (b.state.setOpen(!0, D(Ne, e.nativeEvent)),
                me ||
                  b.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: b.state.keyboardActiveRef.current ? `keyboard` : `pointer`,
                  })),
                re &&
                  b.state.activeIndex !== null &&
                  !me &&
                  b.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: b.state.keyboardActiveRef.current ? `keyboard` : `pointer`,
                  }));
            },
            onKeyDown(e) {
              if (ge || E || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
              b.state.keyboardActiveRef.current = !0;
              let t = e.currentTarget,
                n = t.scrollWidth - t.clientWidth,
                r = C === `rtl`;
              if (e.key === `Home`) {
                ce(e);
                let n = L && r ? t.value.length : 0;
                (t.setSelectionRange(n, n), (t.scrollLeft = 0));
                return;
              }
              if (e.key === `End`) {
                ce(e);
                let i = L && r ? 0 : t.value.length;
                (t.setSelectionRange(i, i), (t.scrollLeft = r ? -n : n));
                return;
              }
              if (!j && e.key === `Escape`) {
                let t = O === `multiple` && Array.isArray(M) ? M.length === 0 : M === null,
                  n = D(s, e.nativeEvent),
                  r = O === `multiple` ? [] : null;
                (b.state.setInputValue(``, n),
                  b.state.setSelectedValue(r, n),
                  t || b.state.inline || n.isPropagationAllowed || e.stopPropagation());
                return;
              }
              if (
                _ &&
                e.key === `Backspace` &&
                t.value === `` &&
                _.highlightedChipIndex === void 0 &&
                Array.isArray(M) &&
                M.length > 0
              ) {
                let t = _.chipsRef.current.length,
                  n = t > 0 ? t - 1 : M.length - 1,
                  r = M.filter((e, t) => t !== n);
                (b.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: b.state.keyboardActiveRef.current ? `keyboard` : `pointer`,
                }),
                  b.state.setSelectedValue(r, D(Ae, e.nativeEvent)));
                return;
              }
              let i = _?.highlightedChipIndex !== void 0,
                a = Pe(e);
              if (
                (_?.setHighlightedChipIndex(a),
                a === void 0
                  ? i && b.state.inputRef.current?.focus()
                  : _?.chipsRef.current[a]?.focus(),
                e.which !== 229 && e.key === `Enter` && re)
              ) {
                let t = b.state.activeIndex,
                  n = e.nativeEvent;
                if (t === null) {
                  if (de) return;
                  b.state.setOpen(!1, D(Ae, n));
                  return;
                }
                ce(e);
                let r = b.state.listRef.current[t];
                r &&
                  ((b.state.selectionEventRef.current = n),
                  r.click(),
                  (b.state.selectionEventRef.current = null));
              }
            },
            onPointerMove() {
              b.state.keyboardActiveRef.current = !1;
            },
            onPointerDown() {
              b.state.keyboardActiveRef.current = !1;
            },
          },
          je,
        ],
        stateAttributesMapping: bt,
      }),
      Ie = y ? (0, U.jsx)(f.Provider, { value: P, children: Fe }) : Fe;
    return (0, U.jsxs)(z.Fragment, {
      children: [re && ve && (0, U.jsx)(Tt, { ref: b.state.startDismissRef }), Ie],
    });
  }),
  G = 2,
  Dt = z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        nativeButton: i = !0,
        disabled: a = !1,
        id: o,
        style: s,
        ...c
      } = e,
      {
        state: l,
        disabled: u,
        setTouched: d,
        setFocused: f,
        validationMode: p,
        validation: m,
      } = Je(),
      { labelId: h } = Xe(),
      g = B(),
      { filteredItems: y } = V(),
      S = N(g, H.selectionMode),
      C = N(g, H.disabled),
      w = N(g, H.readOnly),
      T = N(g, H.required),
      E = N(g, H.mounted),
      ee = N(g, H.popupSide),
      te = N(g, H.positionerElement),
      O = N(g, H.listElement),
      ne = N(g, H.triggerProps),
      k = N(g, H.triggerElement),
      A = N(g, H.inputInsidePopup),
      re = N(g, H.id),
      j = N(g, H.labelId),
      M = N(g, H.open),
      ie = N(g, H.selectedValue),
      ae = N(g, H.activeIndex),
      oe = N(g, H.selectedIndex),
      se = N(g, H.hasSelectedValue),
      P = ct(),
      ue = lt(),
      de = We(),
      fe = u || C || a,
      pe = y.length === 0,
      me = E && te ? ee : null;
    De({ id: A ? o : void 0 });
    let he = A ? (o ?? re) : o,
      ge = le(h, j),
      F = z.useRef(``);
    function _e(e) {
      F.current = e.pointerType;
    }
    let ve = P.useState(`domReferenceElement`);
    z.useEffect(() => {
      A && k && k !== ve && P.set(`domReferenceElement`, k);
    }, [k, ve, P, A]);
    let { reference: ye } = ze(P, {
        enabled: !M && !w && !C && S === `single`,
        listRef: g.state.labelsRef,
        activeIndex: ae,
        selectedIndex: oe,
        onMatch(e) {
          let t = g.state.valuesRef.current[e];
          t !== void 0 && g.state.setSelectedValue(t, D(`none`));
        },
      }),
      { reference: be } = x(P, { enabled: !w && !C, event: `mousedown` }),
      { buttonRef: xe, getButtonProps: Se } = b({ native: i, disabled: fe }),
      Ce = {
        ...l,
        open: M,
        disabled: fe,
        popupSide: me,
        listEmpty: pe,
        placeholder: S !== `none` && !se,
      },
      we = v((e) => {
        g.set(`triggerElement`, e);
      });
    return qe(`button`, e, {
      ref: [t, xe, we],
      state: Ce,
      props: [
        ne,
        be,
        ye,
        {
          id: he,
          tabIndex: A ? 0 : -1,
          role: A ? `combobox` : void 0,
          "aria-expanded": M ? `true` : `false`,
          "aria-haspopup": A ? `dialog` : `listbox`,
          "aria-controls": M ? O?.id : void 0,
          "aria-required": (A && T) || void 0,
          "aria-labelledby": ge,
          onPointerDown: _e,
          onPointerEnter: _e,
          onFocus() {
            (f(!0), !(fe || w) && de.start(0, g.state.forceMount));
          },
          onBlur(e) {
            if (!Ze(te, e.relatedTarget) && (d(!0), f(!1), p === `onBlur`)) {
              let e = S === `none` ? ue : ie;
              m.commit(e);
            }
          },
          onMouseDown(e) {
            if (
              fe ||
              w ||
              (A || P.set(`domReferenceElement`, e.currentTarget),
              g.state.forceMount(),
              F.current !== `touch` && (g.state.inputRef.current?.focus(), A || e.preventDefault()),
              M)
            )
              return;
            let t = Be(e.currentTarget);
            function n(e) {
              if (!k) return;
              let t = Te(e),
                n = g.state.positionerElement,
                r = g.state.listElement;
              if (Ze(k, t) || Ze(n, t) || Ze(r, t) || t === k) return;
              let i = _(k),
                a = e.clientX >= i.left - G && e.clientX <= i.right + G,
                o = e.clientY >= i.top - G && e.clientY <= i.bottom + G;
              (a && o) || g.state.setOpen(!1, D(`cancel-open`, e));
            }
            A && t.addEventListener(`mouseup`, n, { once: !0 });
          },
          onKeyDown(e) {
            fe ||
              w ||
              ((e.key === `ArrowDown` || e.key === `ArrowUp`) &&
                (ce(e),
                g.state.setOpen(!0, D(Ue, e.nativeEvent)),
                g.state.inputRef.current?.focus()));
          },
        },
        m ? m.getValidationProps(c) : c,
        Se,
      ],
      stateAttributesMapping: bt,
    });
  }),
  Ot = z.createContext(null);
function kt() {
  return z.useContext(Ot);
}
function At(e) {
  let { children: t, items: n } = e,
    r = z.useMemo(() => ({ items: n }), [n]);
  return (0, U.jsx)(Ot.Provider, { value: r, children: t });
}
function jt(e) {
  let { children: t } = e,
    { filteredItems: n } = V(),
    r = kt(),
    i = r ? r.items : n;
  return i ? (0, U.jsx)(z.Fragment, { children: i.map(t) }) : null;
}
var K = z.forwardRef(function (e, t) {
    var n;
    let { render: r, className: i, style: a, children: o, ...s } = e,
      c = B(),
      l = ct(),
      u = !!wt(!0),
      { filteredItems: d, hasItems: f } = V(),
      p = N(c, H.selectionMode),
      m = N(c, H.grid),
      h = N(c, H.popupProps),
      g = N(c, H.virtualized),
      _ = p === `multiple`,
      y = d.length === 0,
      b = v((e) => {
        c.set(`positionerElement`, e);
      }),
      x = v((e) => {
        c.set(`listElement`, e);
      }),
      S = z.useMemo(
        () => (typeof o == `function` ? (n ||= (0, U.jsx)(jt, { children: o })) : o),
        [o],
      ),
      C = { empty: y },
      w = l.useState(`floatingId`),
      T = qe(`div`, e, {
        state: C,
        ref: [t, x, u ? null : b],
        props: [
          h,
          {
            children: S,
            tabIndex: -1,
            id: w,
            role: m ? `grid` : `listbox`,
            "aria-multiselectable": _ ? `true` : void 0,
            onKeyDown(e) {
              if (!(c.state.disabled || c.state.readOnly) && e.key === `Enter`) {
                let t = c.state.activeIndex;
                if (t == null) return;
                ce(e);
                let n = e.nativeEvent,
                  r = c.state.listRef.current[t];
                r &&
                  ((c.state.selectionEventRef.current = n),
                  r.click(),
                  (c.state.selectionEventRef.current = null));
              }
            },
            onKeyDownCapture() {
              c.state.keyboardActiveRef.current = !0;
            },
            onPointerMoveCapture() {
              c.state.keyboardActiveRef.current = !1;
            },
          },
          s,
        ],
      });
    return g
      ? T
      : (0, U.jsx)(_e, {
          elementsRef: c.state.listRef,
          labelsRef: f ? void 0 : c.state.labelsRef,
          children: T,
        });
  }),
  Mt = `⁠`;
function Nt(e) {
  let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT),
    n = null;
  for (; t.nextNode();) {
    let e = t.currentNode;
    e.nodeValue !== `` && (n = e);
  }
  return n;
}
function Pt() {
  let e = We(),
    t = z.useRef(null);
  return (
    z.useEffect(() => {
      if (l) return;
      let n = t.current;
      if (n == null) return;
      let r = Nt(n);
      if (r == null) return;
      let i = r.nodeValue ?? ``,
        a = `${i}${Mt}`;
      return (
        (r.nodeValue = a),
        e.start(200, () => {
          r.nodeValue === a && (r.nodeValue = i);
        }),
        () => {
          (e.clear(), r.nodeValue === a && (r.nodeValue = i));
        }
      );
    }, [t, e]),
    t
  );
}
var Ft = z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, children: a, ...o } = e,
      s = Pt();
    return qe(`div`, e, {
      ref: [t, s],
      props: [{ children: a, role: `status`, "aria-live": `polite`, "aria-atomic": !0 }, o],
    });
  }),
  q = z.createContext(void 0);
function J() {
  let e = z.useContext(q);
  if (e === void 0) throw Error(O(20));
  return e;
}
var It = z.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      i = B(),
      a = N(i, H.mounted),
      o = N(i, H.forceMounted);
    return a || n || o
      ? (0, U.jsx)(q.Provider, { value: n, children: (0, U.jsx)(T, { ref: t, ...r }) })
      : null;
  }),
  Lt = z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        anchor: i,
        positionMethod: a = `absolute`,
        side: o = `bottom`,
        align: s = `center`,
        sideOffset: c = 0,
        alignOffset: l = 0,
        collisionBoundary: d = `clipping-ancestors`,
        collisionPadding: f = 5,
        arrowPadding: p = 5,
        sticky: m = !1,
        disableAnchorTracking: h = !1,
        collisionAvoidance: g = Se,
        style: _,
        ...b
      } = e,
      x = B(),
      { filteredItems: C } = V(),
      w = ct(),
      T = J(),
      ee = N(x, H.modal),
      D = N(x, H.open),
      te = N(x, H.mounted),
      O = N(x, H.openMethod),
      ne = N(x, H.positionerElement),
      k = N(x, H.triggerElement),
      A = N(x, H.inputElement),
      re = N(x, H.inputGroupElement),
      j = N(x, H.inputInsidePopup),
      M = N(x, H.transitionStatus),
      ie = C.length === 0,
      ae = y({
        anchor: i ?? (j ? k : (re ?? A)),
        floatingRootContext: w,
        positionMethod: a,
        mounted: te,
        side: o,
        sideOffset: c,
        align: s,
        alignOffset: l,
        arrowPadding: p,
        collisionBoundary: d,
        collisionPadding: f,
        sticky: m,
        disableAnchorTracking: h,
        keepMounted: T,
        collisionAvoidance: g,
        lazyFlip: !0,
      });
    u(D && ee, O === `touch`, ne, k);
    let oe = { open: D, side: ae.side, align: ae.align, anchorHidden: ae.anchorHidden, empty: ie };
    F(() => {
      x.set(`popupSide`, ae.side);
    }, [x, ae.side]);
    let se = v((e) => {
        x.set(`positionerElement`, e);
      }),
      ce = S(e, oe, {
        styles: ae.positionerStyles,
        transitionStatus: M,
        props: b,
        refs: [t, se],
        hidden: !te,
        inert: !D,
      });
    return (0, U.jsxs)(Ct.Provider, {
      value: ae,
      children: [te && ee && (0, U.jsx)(he, { inert: E(!D), cutout: re ?? A ?? k }), ce],
    });
  }),
  Rt = { ...$e, ...d },
  Y = z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, initialFocus: a, finalFocus: o, ...s } = e,
      c = B(),
      l = wt(),
      u = ct(),
      { filteredItems: d } = V(),
      f = N(c, H.mounted),
      p = N(c, H.open),
      m = N(c, H.openMethod),
      h = N(c, H.transitionStatus),
      g = N(c, H.inputInsidePopup),
      _ = N(c, H.inputElement),
      v = N(c, H.modal),
      y = d.length === 0;
    ue({
      open: p,
      ref: c.state.popupRef,
      onComplete() {
        p && c.state.onOpenChangeComplete(!0);
      },
    });
    let b = {
        open: p,
        side: l.side,
        align: l.align,
        anchorHidden: l.anchorHidden,
        transitionStatus: h,
        empty: y,
      },
      x = qe(`div`, e, {
        state: b,
        ref: [t, c.state.popupRef],
        props: [
          {
            role: g ? `dialog` : `presentation`,
            tabIndex: -1,
            onFocus(e) {
              let t = Te(e.nativeEvent);
              m !== `touch` &&
                (Ze(c.state.listElement, t) || t === e.currentTarget) &&
                c.state.inputRef.current?.focus();
            },
          },
          be(h),
          s,
        ],
        stateAttributesMapping: Rt,
      }),
      S = a === void 0 ? (g ? (e) => (e === `touch` ? c.state.popupRef.current : _) : !1) : a,
      C;
    C = o ?? (g ? void 0 : !1);
    let w = !g || v;
    return (0, U.jsx)(me, {
      context: u,
      disabled: !f,
      modal: w,
      openInteractionType: m,
      initialFocus: S,
      returnFocus: C,
      getInsideElements: () => [c.state.startDismissRef.current, c.state.endDismissRef.current],
      children: (0, U.jsxs)(z.Fragment, {
        children: [x, w && (0, U.jsx)(Tt, { ref: c.state.endDismissRef })],
      }),
    });
  }),
  zt = z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e;
    return qe(`span`, e, { ref: t, props: [{ "aria-hidden": !0, children: `▼` }, a] });
  }),
  X = e(p()),
  Bt = z.createContext(void 0),
  Vt = z.createContext(!1);
function Z() {
  return z.useContext(Vt);
}
var Ht = z.memo(
    z.forwardRef(function (e, t) {
      let {
          render: n,
          className: r,
          style: i,
          value: a = null,
          index: o,
          disabled: s = !1,
          nativeButton: c = !1,
          ...l
        } = e,
        u = z.useRef(!1),
        d = z.useRef(null),
        f = ee({ index: o, textRef: d, indexGuessBehavior: C.GuessFromOrder }),
        p = B(),
        m = Z(),
        { flatFilteredItems: h, hasItems: g } = V(),
        _ = N(p, H.open),
        v = N(p, H.selectionMode),
        y = N(p, H.readOnly),
        x = N(p, H.virtualized),
        S = N(p, H.isItemEqualToValue),
        w = v !== `none`,
        T = o ?? (x ? A(h, a, S) : f.index),
        E = f.index !== -1,
        D = N(p, H.id),
        te = N(p, H.isActive, T),
        O = N(p, H.isSelected, a),
        ne = N(p, H.itemProps),
        k = z.useRef(null),
        re = D != null && E ? `${D}-${T}` : void 0,
        j = O && w;
      (F(() => {
        if (!E || (!x && o == null)) return;
        let e = p.state.listRef.current;
        return (
          (e[T] = k.current),
          () => {
            delete e[T];
          }
        );
      }, [E, x, T, o, p]),
        F(() => {
          if (!E || g) return;
          let e = p.state.valuesRef.current;
          return (
            (e[T] = a),
            v !== `none` && p.state.allValuesRef.current.push(a),
            () => {
              delete e[T];
            }
          );
        }, [E, g, T, a, p, v]),
        F(() => {
          if (!_) {
            u.current = !1;
            return;
          }
          if (!E || g) return;
          let e = p.state.selectedValue,
            t = Array.isArray(e) ? e[e.length - 1] : e;
          Pe(a, t, S) && p.set(`selectedIndex`, T);
        }, [E, g, _, p, T, a, S]));
      let { getButtonProps: M, buttonRef: ie } = b({
          disabled: s,
          focusableWhenDisabled: !0,
          native: c,
          composite: !0,
        }),
        ae = { disabled: s, selected: j, highlighted: te };
      function oe(e) {
        function t() {
          p.state.handleSelection(e, a);
        }
        p.state.submitOnItemClick ? (X.flushSync(t), p.state.requestSubmit()) : t();
      }
      let se = {
          id: re,
          role: m ? `gridcell` : `option`,
          "aria-selected": w ? j : void 0,
          tabIndex: void 0,
          onPointerDownCapture(e) {
            ((u.current = !0), e.preventDefault());
          },
          onMouseDown(e) {
            e.preventDefault();
          },
          onClick(e) {
            s || y || oe(e.nativeEvent);
          },
          onMouseUp(e) {
            let t = u.current;
            ((u.current = !1), !(s || y || e.button !== 0 || t || !te) && oe(e.nativeEvent));
          },
        },
        ce = qe(`div`, e, { ref: [ie, t, f.ref, k], state: ae, props: [ne, se, l, M] }),
        le = z.useMemo(() => ({ selected: j, textRef: d }), [j, d]);
      return (0, U.jsx)(Bt.Provider, { value: le, children: ce });
    }),
  ),
  Ut = z.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, children: a, ...o } = e,
      { filteredItems: s } = V(),
      c = B(),
      l = Pt(),
      u = s.length === 0 ? a : null;
    return qe(`div`, e, {
      ref: [t, c.state.emptyRef, l],
      props: [{ children: u, role: `status`, "aria-live": `polite`, "aria-atomic": !0 }, o],
    });
  }),
  Wt = { ...d, ...Ye },
  Gt = z.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        nativeButton: a = !0,
        keepMounted: o = !1,
        style: s,
        ...c
      } = e,
      { disabled: l } = Je(),
      u = B(),
      d = N(u, H.selectionMode),
      f = N(u, H.disabled),
      p = N(u, H.readOnly),
      m = N(u, H.open),
      h = N(u, H.selectedValue),
      g = N(u, H.hasSelectionChips),
      _ = lt(),
      v = !1;
    v = d === `none` ? _ !== `` : d === `single` ? h != null : g;
    let y = l || f || i,
      { buttonRef: x, getButtonProps: S } = b({ native: a, disabled: y }),
      { mounted: C, transitionStatus: w, setMounted: T } = re(v),
      E = { disabled: y, visible: v, open: m, transitionStatus: w };
    ue({
      open: v,
      ref: u.state.clearRef,
      onComplete() {
        v || T(!1);
      },
    });
    let ee = qe(`button`, e, {
      state: E,
      ref: [t, x, u.state.clearRef],
      props: [
        {
          tabIndex: -1,
          children: `x`,
          onMouseDown(e) {
            e.preventDefault();
          },
          onClick(e) {
            if (y || p) return;
            let t = u.state.keyboardActiveRef;
            (u.state.setInputValue(``, D(ve, e.nativeEvent)),
              d === `none`
                ? u.state.setIndices({
                    activeIndex: null,
                    type: t.current ? `keyboard` : `pointer`,
                  })
                : (u.state.setSelectedValue(Array.isArray(h) ? [] : null, D(ve, e.nativeEvent)),
                  u.state.setIndices({
                    activeIndex: null,
                    selectedIndex: null,
                    type: t.current ? `keyboard` : `pointer`,
                  })),
              u.state.inputRef.current?.focus());
          },
        },
        c,
        S,
      ],
      stateAttributesMapping: Wt,
    });
    return o || C ? ee : null;
  }),
  Q = n(),
  Kt = z.createContext({ chipsRef: null, multiple: !1 });
function qt(e) {
  let t = (0, Q.c)(7),
    n = z.useRef(null),
    r = !!e.multiple,
    i;
  t[0] === r ? (i = t[1]) : ((i = { chipsRef: n, multiple: r }), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === e ? (o = t[3]) : ((o = (0, U.jsx)(yt, { ...e })), (t[2] = e), (t[3] = o));
  let s;
  return (
    t[4] !== o || t[5] !== a
      ? ((s = (0, U.jsx)(Kt, { value: a, children: o })), (t[4] = o), (t[5] = a), (t[6] = s))
      : (s = t[6]),
    s
  );
}
function $(e) {
  let t = (0, Q.c)(35),
    n,
    r,
    i,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]))
    : (({
        className: n,
        showTrigger: c,
        showClear: l,
        startAddon: s,
        size: i,
        unstyled: u,
        ...r
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u));
  let d = c === void 0 || c,
    f = l !== void 0 && l,
    p = u !== void 0 && u,
    m = i ?? `default`,
    h;
  t[8] === s
    ? (h = t[9])
    : ((h =
        s &&
        (0, U.jsx)(`div`, {
          "aria-hidden": `true`,
          className: `[&_svg]:-mx-0.5 pointer-events-none absolute inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 has-[+[data-size=sm]]:ps-[calc(--spacing(2.5)-1px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4`,
          "data-slot": `combobox-start-addon`,
          children: s,
        })),
      (t[8] = s),
      (t[9] = h));
  let g =
      s &&
      `data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7.5)-1px)] *:data-[slot=combobox-input]:ps-[calc(--spacing(8.5)-1px)] sm:data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=combobox-input]:ps-[calc(--spacing(8)-1px)]`,
    _ =
      m === `sm`
        ? `has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-6.5`
        : `has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-7`,
    v;
  t[10] !== n || t[11] !== g || t[12] !== _
    ? ((v = I(g, _, n)), (t[10] = n), (t[11] = g), (t[12] = _), (t[13] = v))
    : (v = t[13]);
  let y = p && `rounded-none bg-transparent text-sm`,
    b;
  t[14] === y ? (b = t[15]) : ((b = I(`has-disabled:opacity-100`, y)), (t[14] = y), (t[15] = b));
  let x;
  t[16] !== m || t[17] !== b || t[18] !== p
    ? ((x = (0, U.jsx)(Ce, { className: b, nativeInput: !0, size: m, unstyled: p })),
      (t[16] = m),
      (t[17] = b),
      (t[18] = p),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== r || t[21] !== x || t[22] !== v
    ? ((S = (0, U.jsx)(Et, { className: v, "data-slot": `combobox-input`, render: x, ...r })),
      (t[20] = r),
      (t[21] = x),
      (t[22] = v),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== d || t[25] !== m
    ? ((C =
        d &&
        (0, U.jsx)(Yt, {
          className: I(
            `-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
            m === `sm` ? `end-0` : `end-0.5`,
          ),
          children: (0, U.jsx)(zt, { "data-slot": `combobox-icon`, children: (0, U.jsx)(a, {}) }),
        })),
      (t[24] = d),
      (t[25] = m),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] !== f || t[28] !== m
    ? ((w =
        f &&
        (0, U.jsx)(tn, {
          className: I(
            `-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
            m === `sm` ? `end-0` : `end-0.5`,
          ),
          children: (0, U.jsx)(o, {}),
        })),
      (t[27] = f),
      (t[28] = m),
      (t[29] = w))
    : (w = t[29]);
  let T;
  return (
    t[30] !== S || t[31] !== C || t[32] !== w || t[33] !== h
      ? ((T = (0, U.jsxs)(`div`, {
          className: `relative not-has-[>*.w-full]:w-fit w-full text-foreground has-disabled:opacity-64`,
          children: [h, S, C, w],
        })),
        (t[30] = S),
        (t[31] = C),
        (t[32] = w),
        (t[33] = h),
        (t[34] = T))
      : (T = t[34]),
    T
  );
}
function Jt(e) {
  let t = (0, Q.c)(3),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, U.jsx)(i, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute top-1.5 left-0 size-4 shrink-0 text-muted-foreground/55`,
      })),
      (t[0] = n))
    : (n = t[0]);
  let r;
  return (
    t[1] === e
      ? (r = t[2])
      : ((r = (0, U.jsx)(`div`, {
          className: `min-w-0 shrink-0 px-3 pt-2.5`,
          children: (0, U.jsxs)(`div`, {
            className: `relative -translate-y-px border-b border-border/70 pb-1.5 transition-colors focus-within:border-ring`,
            children: [
              n,
              (0, U.jsx)($, {
                ...e,
                className: `[&_input]:h-6.5 [&_input]:ps-5 [&_input]:font-sans [&_input]:leading-6.5`,
                showTrigger: !1,
                size: `sm`,
                unstyled: !0,
              }),
            ],
          }),
        })),
        (t[1] = e),
        (t[2] = r)),
    r
  );
}
function Yt(e) {
  let t = (0, Q.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: r, children: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i
      ? ((a = (0, U.jsx)(Dt, { className: r, "data-slot": `combobox-trigger`, ...i, children: n })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Xt(e) {
  let t = (0, Q.c)(24),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]))
    : (({
        className: a,
        children: i,
        side: s,
        sideOffset: c,
        alignOffset: n,
        align: l,
        anchor: r,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  let u = s === void 0 ? `bottom` : s,
    d = c === void 0 ? 4 : c,
    f = l === void 0 ? `start` : l,
    { chipsRef: p, multiple: m } = z.use(Kt),
    h = r ?? (m ? p : void 0),
    g;
  t[9] === a
    ? (g = t[10])
    : ((g = I(
        `dropdown-glass relative flex max-h-full min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-lg shadow-[0_16px_40px_-18px_rgb(0_0_0/55%)] transition-[scale,opacity] dark:shadow-[0_18px_44px_-18px_rgb(0_0_0/80%)]`,
        a,
      )),
      (t[9] = a),
      (t[10] = g));
  let _;
  t[11] !== i || t[12] !== o
    ? ((_ = (0, U.jsx)(Y, {
        className: `flex min-w-0 max-h-[min(var(--available-height),23rem)] flex-1 flex-col overflow-hidden text-foreground`,
        "data-slot": `combobox-popup`,
        ...o,
        children: i,
      })),
      (t[11] = i),
      (t[12] = o),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== g || t[15] !== _
    ? ((v = (0, U.jsx)(`span`, { className: g, children: _ })),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== f || t[18] !== n || t[19] !== h || t[20] !== u || t[21] !== d || t[22] !== v
      ? ((y = (0, U.jsx)(It, {
          children: (0, U.jsx)(Lt, {
            align: f,
            alignOffset: n,
            anchor: h,
            className: `z-[130] select-none`,
            "data-slot": `combobox-positioner`,
            side: u,
            sideOffset: d,
            children: v,
          }),
        })),
        (t[17] = f),
        (t[18] = n),
        (t[19] = h),
        (t[20] = u),
        (t[21] = d),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
function Zt(e) {
  let t = (0, Q.c)(13),
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
    : ((o = I(
        `flex min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-pointer items-center rounded-sm px-2 py-1 text-base outline-none not-data-disabled:hover:bg-accent data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-selected:bg-foreground/[0.08] data-selected:text-foreground data-highlighted:bg-accent data-highlighted:text-accent-foreground [&[data-highlighted][data-selected]]:bg-accent [&[data-highlighted][data-selected]]:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
        r,
      )),
      (t[5] = r),
      (t[6] = o));
  let s;
  t[7] === n
    ? (s = t[8])
    : ((s = (0, U.jsx)(`div`, {
        className: `flex min-w-0 flex-1 items-center gap-2 [&_svg:not([class*='text-'])]:text-muted-foreground`,
        "data-slot": `combobox-item-content`,
        children: n,
      })),
      (t[7] = n),
      (t[8] = s));
  let c;
  return (
    t[9] !== i || t[10] !== o || t[11] !== s
      ? ((c = (0, U.jsx)(Ht, { className: o, "data-slot": `combobox-item`, ...i, children: s })),
        (t[9] = i),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Qt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = I(`not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, U.jsx)(Ut, { className: i, "data-slot": `combobox-empty`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function $t(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = I(`not-empty:scroll-py-1 not-empty:px-1 not-empty:py-1`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, U.jsx)(rt, {
          scrollbarGutter: !0,
          scrollFade: !0,
          children: (0, U.jsx)(K, { className: i, "data-slot": `combobox-list`, ...r }),
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function en(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = I(`size-full min-w-0 not-empty:px-1 not-empty:py-1`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, U.jsx)(K, { className: i, "data-slot": `combobox-list`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function tn(e) {
  let t = (0, Q.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = (0, U.jsx)(Gt, { className: n, "data-slot": `combobox-clear`, ...r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function nn(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = I(`px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, U.jsx)(Ft, { className: i, "data-slot": `combobox-status`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var rn = gt;
export {
  W as C,
  Et as S,
  It as _,
  en as a,
  At as b,
  nn as c,
  Gt as d,
  Ut as f,
  Lt as g,
  Y as h,
  $t as i,
  Yt as l,
  zt as m,
  Qt as n,
  Xt as o,
  Ht as p,
  Zt as r,
  Jt as s,
  qt as t,
  rn as u,
  K as v,
  ht as w,
  Dt as x,
  jt as y,
};
//# sourceMappingURL=combobox-HagV04Wz.js.map
