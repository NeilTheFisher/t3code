import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./x-Blp0Exqg.js";
import {
  Ai as a,
  Ci as o,
  Co as s,
  Di as c,
  Dr as l,
  Ei as u,
  Ha as d,
  Hi as f,
  Ji as p,
  Jr as m,
  Lr as h,
  Ma as g,
  Mi as _,
  Mo as v,
  Oi as y,
  Oo as b,
  Pa as x,
  Si as S,
  Ta as C,
  Ti as w,
  To as T,
  Ui as E,
  Ur as D,
  Vi as O,
  Vr as k,
  Xi as A,
  Za as j,
  ba as ee,
  bi as te,
  ji as ne,
  ki as re,
  t as M,
  ti as ie,
  to as ae,
  vo as N,
  wi as P,
  wo as F,
  xi as oe,
  xo as se,
  ya as ce,
  yo as I,
  zi as L,
  zr as le,
} from "./utils-CPoejuy5.js";
import { t as ue } from "./scroll-area-B6188Bq9.js";
var R = e(t()),
  z = R.createContext(!1),
  B = R.createContext(void 0);
function V(e) {
  let t = R.useContext(B);
  if (e === !1 && t === void 0) throw Error(v(27));
  return t;
}
var de = { ...I, ...s },
  H = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, forceRender: a = !1, ...o } = e,
      { store: s } = V(),
      c = s.useState(`open`),
      l = s.useState(`nested`),
      u = s.useState(`mounted`),
      d = { open: c, transitionStatus: s.useState(`transitionStatus`) };
    return F(`div`, e, {
      state: d,
      ref: [s.context.backdropRef, t],
      stateAttributesMapping: de,
      props: [
        {
          role: `presentation`,
          hidden: !u,
          style: { userSelect: `none`, WebkitUserSelect: `none` },
        },
        o,
      ],
      enabled: a || !l,
    });
  }),
  U = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, disabled: a = !1, nativeButton: o = !0, ...s } = e,
      { store: c } = V(),
      l = c.useState(`open`),
      { getButtonProps: u, buttonRef: f } = d({ disabled: a, native: o }),
      p = { disabled: a };
    function m(e) {
      l && c.setOpen(!1, g(j, e.nativeEvent));
    }
    return F(`button`, e, { state: p, ref: [t, f], props: [{ onClick: m }, s, u] });
  }),
  W = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, ...o } = e,
      { store: s } = V(),
      c = x(a);
    return (
      s.useSyncedValueWithCleanup(`descriptionElementId`, c),
      F(`p`, e, { ref: t, props: [{ id: c }, o] })
    );
  }),
  fe = (function (e) {
    return ((e.nestedDialogs = `--nested-dialogs`), e);
  })({}),
  pe = (function (e) {
    return (
      (e[(e.open = N.open)] = `open`),
      (e[(e.closed = N.closed)] = `closed`),
      (e[(e.startingStyle = N.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = N.endingStyle)] = `endingStyle`),
      (e.nested = `data-nested`),
      (e.nestedDialogOpen = `data-nested-dialog-open`),
      e
    );
  })({}),
  G = R.createContext(void 0);
function K() {
  let e = R.useContext(G);
  if (e === void 0) throw Error(v(26));
  return e;
}
var q = e(r()),
  me = {
    ...I,
    ...s,
    nestedDialogOpen(e) {
      return e ? { [pe.nestedDialogOpen]: `` } : null;
    },
  },
  J = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, finalFocus: a, initialFocus: o, ...s } = e,
      { store: c } = V(),
      l = c.useState(`descriptionElementId`),
      u = c.useState(`disablePointerDismissal`),
      d = c.useState(`floatingRootContext`),
      f = c.useState(`popupProps`),
      p = c.useState(`modal`),
      m = c.useState(`mounted`),
      h = c.useState(`nested`),
      g = c.useState(`nestedOpenDialogCount`),
      _ = c.useState(`open`),
      v = c.useState(`openMethod`),
      y = c.useState(`titleElementId`),
      b = c.useState(`transitionStatus`),
      x = c.useState(`role`),
      S = d.useState(`floatingId`),
      w = s.id ?? S;
    (K(),
      C({
        open: _,
        ref: c.context.popupRef,
        onComplete() {
          _ && c.context.onOpenChangeComplete?.(!0);
        },
      }));
    function T(e) {
      return e !== `touch` || c.context.popupRef.current;
    }
    let D = o === void 0 ? T : o,
      O = g > 0,
      k = c.useStateSetter(`popupElement`),
      A = F(`div`, e, {
        state: { open: _, nested: h, transitionStatus: b, nestedDialogOpen: O },
        props: [
          f,
          {
            id: w,
            "aria-labelledby": y ?? void 0,
            "aria-describedby": l ?? void 0,
            role: x,
            ...P,
            hidden: !m,
            onKeyDown(e) {
              ie.has(e.key) && e.stopPropagation();
            },
            style: { [fe.nestedDialogs]: g },
          },
          s,
        ],
        ref: [t, c.context.popupRef, k],
        stateAttributesMapping: me,
      });
    return (0, q.jsx)(E, {
      context: d,
      openInteractionType: v,
      disabled: !m,
      closeOnFocusOut: !u,
      initialFocus: D,
      returnFocus: a,
      modal: p !== !1,
      restoreFocus: `popup`,
      children: A,
    });
  }),
  Y = R.forwardRef(function (e, t) {
    let { keepMounted: n = !1, ...r } = e,
      { store: i } = V(),
      a = i.useState(`mounted`),
      o = i.useState(`modal`),
      s = i.useState(`open`);
    return a || n
      ? (0, q.jsx)(G.Provider, {
          value: n,
          children: (0, q.jsxs)(p, {
            ref: t,
            ...r,
            children: [
              a && o === !0 && (0, q.jsx)(D, { ref: i.context.internalBackdropRef, inert: m(!s) }),
              e.children,
            ],
          }),
        })
      : null;
  });
function he(e) {
  let { store: t, parentContext: n, actionsRef: r, isDrawer: i } = e,
    a = t.useState(`open`);
  (re(t, a), u(t));
  let { forceUnmount: o } = c(a, t),
    s = R.useCallback(() => {
      t.setOpen(!1, g(ae));
    }, [t]);
  return (
    R.useImperativeHandle(r, () => ({ unmount: o, close: s }), [o, s]),
    { parentContext: n, isDrawer: i }
  );
}
function ge({ store: e, dialogRoot: t }) {
  let { parentContext: n, isDrawer: r } = t,
    i = e.useState(`open`),
    a = e.useState(`disablePointerDismissal`),
    o = e.useState(`modal`),
    s = e.useState(`popupElement`),
    c = e.useState(`floatingRootContext`),
    [l, u] = R.useState(0),
    [d, f] = R.useState(0),
    p = l === 0,
    m = O(c, {
      outsidePressEvent() {
        return e.context.internalBackdropRef.current || e.context.backdropRef.current
          ? `intentional`
          : { mouse: o === `trap-focus` ? `sloppy` : `intentional`, touch: `sloppy` };
      },
      outsidePress(t) {
        if (
          !e.context.outsidePressEnabledRef.current ||
          (`button` in t && t.button !== 0) ||
          (`touches` in t && t.touches.length !== 1)
        )
          return !1;
        let n = ee(t);
        if (p && !a) {
          let t = n;
          return o && (e.context.internalBackdropRef.current || e.context.backdropRef.current)
            ? e.context.internalBackdropRef.current === t ||
                e.context.backdropRef.current === t ||
                (ce(t, s) && !t?.hasAttribute(`data-base-ui-portal`))
            : !0;
        }
        return !1;
      },
      escapeKey: p,
    });
  (k(i && o === !0, s),
    e.useContextCallback(`onNestedDialogOpen`, (e, t) => {
      (u(e), f(t));
    }),
    e.useContextCallback(`onNestedDialogClose`, () => {
      (u(0), f(0));
    }),
    R.useEffect(
      () => (
        n?.onNestedDialogOpen && i && n.onNestedDialogOpen(l + 1, d + +!!r),
        n?.onNestedDialogClose && !i && n.onNestedDialogClose(),
        () => {
          n?.onNestedDialogClose && i && n.onNestedDialogClose();
        }
      ),
      [r, i, l, d, n],
    ));
  let h = m.reference ?? b,
    g = m.trigger ?? b,
    _ = R.useMemo(() => T(P, m.floating), [m.floating]);
  return (
    y(e, {
      activeTriggerProps: h,
      inactiveTriggerProps: g,
      popupProps: _,
      nestedOpenDialogCount: l,
      nestedOpenDrawerCount: d,
    }),
    null
  );
}
var _e = {
    ...S,
    modal: L((e) => e.modal),
    nested: L((e) => e.nested),
    nestedOpenDialogCount: L((e) => e.nestedOpenDialogCount),
    nestedOpenDrawerCount: L((e) => e.nestedOpenDrawerCount),
    disablePointerDismissal: L((e) => e.disablePointerDismissal),
    openMethod: L((e) => e.openMethod),
    descriptionElementId: L((e) => e.descriptionElementId),
    titleElementId: L((e) => e.titleElementId),
    viewportElement: L((e) => e.viewportElement),
    role: L((e) => e.role),
  },
  ve = class e extends _ {
    constructor(e, t, n = !1) {
      let r = new o(),
        i = ye(e);
      ((i.floatingRootContext = oe(r, t, n)),
        super(
          i,
          {
            popupRef: R.createRef(),
            backdropRef: R.createRef(),
            internalBackdropRef: R.createRef(),
            outsidePressEnabledRef: { current: !0 },
            triggerElements: r,
            onOpenChange: void 0,
            onOpenChangeComplete: void 0,
          },
          _e,
        ));
    }
    setOpen = (e, t) => {
      if (
        ((t.preventUnmountOnClose = () => {
          this.set(`preventUnmountingOnClose`, !0);
        }),
        !e &&
          t.trigger == null &&
          this.state.activeTriggerId != null &&
          (t.trigger = this.state.activeTriggerElement ?? void 0),
        this.context.onOpenChange?.(e, t),
        t.isCanceled)
      )
        return;
      this.state.floatingRootContext.dispatchOpenChange(e, t);
      let n = { open: e };
      (w(n, e, t.trigger), this.update(n));
    };
    static useStore(t, n) {
      return a(t, (t, r) => new e(n, t, r), !0).store;
    }
  };
function ye(e = {}) {
  return {
    ...te(),
    modal: !0,
    disablePointerDismissal: !1,
    popupElement: null,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: !1,
    nestedOpenDialogCount: 0,
    nestedOpenDrawerCount: 0,
    role: `dialog`,
    ...e,
  };
}
function X(e, t = `dialog`) {
  let {
      children: n,
      open: r,
      defaultOpen: i = !1,
      onOpenChange: a,
      onOpenChangeComplete: o,
      disablePointerDismissal: s = !1,
      modal: c = !0,
      actionsRef: l,
      handle: u,
      triggerId: d,
      defaultTriggerId: f = null,
    } = e,
    p = t === `drawer`,
    m = t === `alert-dialog`,
    h = m ? !0 : c,
    g = m || s,
    _ = m ? `alertdialog` : `dialog`,
    v = V(!0),
    y = { modal: h, disablePointerDismissal: g, nested: !!v, role: _ },
    b = ve.useStore(u?.store, { open: i, openProp: r, activeTriggerId: f, triggerIdProp: d, ...y });
  (le(() => {
    let e =
      r === void 0 && b.state.open === !1 && i === !0 ? { open: !0, activeTriggerId: f } : null;
    m ? b.update(e ? { ...y, ...e } : y) : e && b.update(e);
  }),
    b.useControlledProp(`openProp`, r),
    b.useControlledProp(`triggerIdProp`, d),
    b.useSyncedValues(y),
    b.useContextCallback(`onOpenChange`, a),
    b.useContextCallback(`onOpenChangeComplete`, o));
  let x = b.useState(`open`),
    S = b.useState(`mounted`),
    C = b.useState(`payload`),
    w = he({ store: b, actionsRef: l, parentContext: v?.store.context, isDrawer: p }),
    T = x || S,
    E = R.useMemo(() => ({ store: b }), [b]);
  return (0, q.jsx)(z.Provider, {
    value: !1,
    children: (0, q.jsxs)(B.Provider, {
      value: E,
      children: [
        T && (0, q.jsx)(ge, { store: b, dialogRoot: w }),
        typeof n == `function` ? n({ payload: C }) : n,
      ],
    }),
  });
}
function Z(e) {
  return X(e, R.useContext(z) ? `drawer` : `dialog`);
}
var be = (function (e) {
    return (
      (e[(e.open = N.open)] = `open`),
      (e[(e.closed = N.closed)] = `closed`),
      (e[(e.startingStyle = N.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = N.endingStyle)] = `endingStyle`),
      (e.nested = `data-nested`),
      (e.nestedDialogOpen = `data-nested-dialog-open`),
      e
    );
  })({}),
  xe = {
    ...I,
    ...s,
    nested(e) {
      return e ? { [be.nested]: `` } : null;
    },
    nestedDialogOpen(e) {
      return e ? { [be.nestedDialogOpen]: `` } : null;
    },
  },
  Se = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, children: a, ...o } = e,
      s = K(),
      { store: c } = V(),
      l = c.useState(`open`),
      u = c.useState(`nested`),
      d = c.useState(`transitionStatus`),
      f = c.useState(`nestedOpenDialogCount`),
      p = c.useState(`mounted`),
      m = c.useStateSetter(`viewportElement`);
    return F(`div`, e, {
      enabled: s || p,
      state: { open: l, nested: u, transitionStatus: d, nestedDialogOpen: f > 0 },
      ref: [t, m],
      stateAttributesMapping: xe,
      props: [
        {
          role: `presentation`,
          hidden: !p,
          style: { pointerEvents: l ? void 0 : `none` },
          children: a,
        },
        o,
      ],
    });
  }),
  Ce = R.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, id: a, ...o } = e,
      { store: s } = V(),
      c = x(a);
    return (
      s.useSyncedValueWithCleanup(`titleElementId`, c),
      F(`h2`, e, { ref: t, props: [{ id: c }, o] })
    );
  }),
  we = R.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        style: i,
        disabled: a = !1,
        nativeButton: o = !0,
        id: s,
        payload: c,
        handle: l,
        ...u
      } = e,
      p = V(!0),
      m = l?.store ?? p?.store;
    if (!m) throw Error(v(79));
    let g = x(s),
      _ = m.useState(`floatingRootContext`),
      y = m.useState(`isOpenedByTrigger`, g),
      b = m.useState(`triggerPopupId`, g),
      S = R.useRef(null),
      { registerTrigger: C, isMountedByThisTrigger: w } = ne(g, S, m, { payload: c }),
      { getButtonProps: T, buttonRef: E } = d({ disabled: a, native: o }),
      D = f(_, { enabled: _ != null }),
      O = h(
        () => m.select(`open`),
        (e) => {
          m.set(`openMethod`, e);
        },
      ),
      k = { disabled: a, open: y },
      j = m.useState(`triggerProps`, w);
    return F(`button`, e, {
      state: k,
      ref: [E, t, C, S],
      props: [
        D.reference,
        j,
        O,
        { [A]: ``, id: g, "aria-haspopup": `dialog`, "aria-expanded": y, "aria-controls": b },
        u,
        T,
      ],
      stateAttributesMapping: se,
    });
  }),
  Q = n(),
  Te = `fixed inset-0 z-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0`,
  Ee = `dialog-backdrop ${Te}`,
  De = `${Te} bg-black/75 backdrop-blur-none`,
  Oe = `-translate-y-[calc(1.25rem*var(--nested-dialogs))] relative flex min-h-0 w-full min-w-0 scale-[calc(1-0.1*var(--nested-dialogs))] flex-col opacity-[calc(1-0.1*var(--nested-dialogs))] outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0 [-webkit-app-region:no-drag]`,
  ke = `dialog-glass ${Oe} rounded-2xl border`,
  Ae = `${Oe} max-h-[92vh] w-auto max-w-[92vw] overflow-visible rounded-none border border-transparent bg-transparent p-0 shadow-none`,
  je = `max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4`,
  $ = (0, R.createContext)(void 0);
function Me(e) {
  let { open: t, children: n } = e,
    r = (0, R.use)($),
    i = t && r !== !1,
    [a, o] = (0, R.useState)(n);
  return (i && a !== n && o(n), i ? n : a);
}
function Ne(e, t) {
  return (0, q.jsx)(`div`, {
    ...e,
    children: (0, q.jsx)(Me, { open: t.open, children: e.children }),
  });
}
function Pe(e) {
  let t = (0, Q.c)(5),
    n;
  t[0] === e ? (n = t[1]) : ((n = (0, q.jsx)(Z, { ...e })), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] !== e.open || t[3] !== n
      ? ((r = (0, q.jsx)($, { value: e.open, children: n })),
        (t[2] = e.open),
        (t[3] = n),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
var Fe = Y;
function Ie(e) {
  let t = (0, Q.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, q.jsx)(we, { "data-slot": `dialog-trigger`, ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function Le(e) {
  let t = (0, Q.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, q.jsx)(U, { "data-slot": `dialog-close`, ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function Re(e) {
  let t = (0, Q.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, variant: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = (i === void 0 ? `default` : i) === `media` ? De : Ee,
    o;
  t[4] !== n || t[5] !== a ? ((o = M(a, n)), (t[4] = n), (t[5] = a), (t[6] = o)) : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, q.jsx)(H, {
          forceRender: !0,
          className: o,
          "data-slot": `dialog-backdrop`,
          ...r,
        })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function ze(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(`fixed inset-0 z-50 grid grid-rows-[1fr_auto_1fr] justify-items-center p-4`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(Se, { className: i, "data-slot": `dialog-viewport`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Be(e) {
  let t = (0, Q.c)(31),
    n,
    r,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]))
    : (({
        className: r,
        children: n,
        showCloseButton: o,
        bottomStickOnMobile: s,
        variant: c,
        ...a
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  let u = o === void 0 || o,
    d = s === void 0 || s,
    f = c === void 0 ? `default` : c,
    p = f === `media` ? `z-[60]` : void 0,
    m;
  t[7] !== p || t[8] !== f
    ? ((m = (0, q.jsx)(Re, { className: p, variant: f })), (t[7] = p), (t[8] = f), (t[9] = m))
    : (m = t[9]);
  let h = d && `max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12`,
    g =
      f === `media` &&
      `z-[60] grid-rows-1 place-items-center px-4 pb-6 pt-[calc(var(--native-titlebar-height,0px)+1.5rem)] [-webkit-app-region:no-drag]`,
    _;
  t[10] !== h || t[11] !== g ? ((_ = M(h, g)), (t[10] = h), (t[11] = g), (t[12] = _)) : (_ = t[12]);
  let v = f === `media` ? Ae : ke,
    y = f === "default" && `max-h-full max-w-lg`,
    b =
      d &&
      `max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4`,
    x;
  t[13] !== r || t[14] !== y || t[15] !== b || t[16] !== v
    ? ((x = M(v, `row-start-2 text-popover-foreground`, y, b, r)),
      (t[13] = r),
      (t[14] = y),
      (t[15] = b),
      (t[16] = v),
      (t[17] = x))
    : (x = t[17]);
  let S;
  t[18] === u
    ? (S = t[19])
    : ((S =
        u &&
        (0, q.jsx)(U, {
          "aria-label": `Close`,
          className: `absolute end-2 top-2`,
          render: (0, q.jsx)(l, { size: `icon`, variant: `ghost` }),
          children: (0, q.jsx)(i, {}),
        })),
      (t[18] = u),
      (t[19] = S));
  let C;
  t[20] !== n || t[21] !== a || t[22] !== x || t[23] !== S
    ? ((C = (0, q.jsxs)(J, {
        className: x,
        "data-slot": `dialog-popup`,
        render: Ne,
        ...a,
        children: [n, S],
      })),
      (t[20] = n),
      (t[21] = a),
      (t[22] = x),
      (t[23] = S),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] !== C || t[26] !== _
    ? ((w = (0, q.jsx)(ze, { className: _, children: C })), (t[25] = C), (t[26] = _), (t[27] = w))
    : (w = t[27]);
  let T;
  return (
    t[28] !== w || t[29] !== m
      ? ((T = (0, q.jsxs)(Fe, { children: [m, w] })), (t[28] = w), (t[29] = m), (t[30] = T))
      : (T = t[30]),
    T
  );
}
function Ve(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(
        `flex flex-col gap-2 p-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-panel])]:pb-3 max-sm:pb-4`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(`div`, { className: i, "data-slot": `dialog-header`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function He(e) {
  let t = (0, Q.c)(11),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, variant: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === void 0 ? `default` : i,
    o = a === "default" && `border-t bg-muted/72 py-4`,
    s = a === `bare` && `py-4`,
    c;
  t[4] !== n || t[5] !== o || t[6] !== s
    ? ((c = M(
        `flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]`,
        o,
        s,
        n,
      )),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== r || t[9] !== c
      ? ((l = (0, q.jsx)(`div`, { className: c, "data-slot": `dialog-footer`, ...r })),
        (t[8] = r),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Ue(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(`wrap-anywhere font-semibold text-xl leading-none`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(Ce, { className: i, "data-slot": `dialog-title`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function We(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = M(`text-muted-foreground text-sm`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, q.jsx)(W, { className: i, "data-slot": `dialog-description`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ge(e) {
  let t = (0, Q.c)(12),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, scrollFade: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === void 0 || i,
    o;
  t[4] === n
    ? (o = t[5])
    : ((o = M(
        `space-y-4 p-6 in-[[data-slot=dialog-popup]:has([data-slot=dialog-header])]:pt-1 in-[[data-slot=dialog-popup]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1`,
        n,
      )),
      (t[4] = n),
      (t[5] = o));
  let s;
  t[6] !== r || t[7] !== o
    ? ((s = (0, q.jsx)(`div`, { className: o, "data-slot": `dialog-panel`, ...r })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, q.jsx)(ue, { scrollFade: a, children: s })), (t[9] = a), (t[10] = s), (t[11] = c))
      : (c = t[11]),
    c
  );
}
export {
  W as C,
  J as S,
  H as T,
  Ce as _,
  We as a,
  X as b,
  Ge as c,
  Ie as d,
  Ne as f,
  we as g,
  ke as h,
  Le as i,
  Be as l,
  je as m,
  Pe as n,
  He as o,
  Ee as p,
  Re as r,
  Ve as s,
  $ as t,
  Ue as u,
  Se as v,
  U as w,
  Y as x,
  Z as y,
};
//# sourceMappingURL=dialog-BjeWpelT.js.map
