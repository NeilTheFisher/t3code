import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Ao as i,
  Co as a,
  Ea as o,
  Eo as s,
  Ga as c,
  Ha as l,
  Ka as u,
  Ma as d,
  Mo as f,
  Oa as p,
  Pa as m,
  So as h,
  Ta as g,
  Wa as _,
  Ya as v,
  do as y,
  ga as b,
  go as x,
  ka as S,
  ma as C,
  t as w,
  wo as T,
} from "./utils-CPoejuy5.js";
var E = e(t());
function D(e) {
  let { open: t, defaultOpen: n, onOpenChange: r, disabled: i } = e,
    [a, o] = v({ controlled: t, default: n, name: `Collapsible`, state: `open` }),
    { mounted: s, setMounted: l, transitionStatus: u } = p(a, !0, !0),
    f = m(),
    [h, g] = E.useState(),
    _ = h ?? f,
    y = c((e) => {
      let t = !a,
        n = d(x, e.nativeEvent);
      (r(t, n), !n.isCanceled && o(t));
    });
  return E.useMemo(
    () => ({
      disabled: i,
      handleTrigger: y,
      mounted: s,
      open: a,
      panelId: _,
      setMounted: l,
      setOpen: o,
      setPanelIdState: g,
      transitionStatus: u,
    }),
    [i, y, s, a, _, l, o, g, u],
  );
}
var O = E.createContext(void 0);
function k() {
  let e = E.useContext(O);
  if (e === void 0) throw Error(f(15));
  return e;
}
var A = (function (e) {
    return (
      (e.open = `data-open`),
      (e.closed = `data-closed`),
      (e[(e.startingStyle = h.startingStyle)] = `startingStyle`),
      (e[(e.endingStyle = h.endingStyle)] = `endingStyle`),
      e
    );
  })({}),
  j = (function (e) {
    return ((e.panelOpen = `data-panel-open`), e);
  })({}),
  M = { [A.open]: `` },
  N = { [A.closed]: `` },
  P = {
    open(e) {
      return e ? { [j.panelOpen]: `` } : null;
    },
  },
  F = {
    open(e) {
      return e ? M : N;
    },
    ...a,
  },
  I = e(r()),
  L = E.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        defaultOpen: i = !1,
        disabled: a = !1,
        onOpenChange: o,
        open: s,
        style: l,
        ...u
      } = e,
      d = c(o),
      f = D({ open: s, defaultOpen: i, onOpenChange: d, disabled: a }),
      p = E.useMemo(
        () => ({ open: f.open, disabled: f.disabled, transitionStatus: f.transitionStatus }),
        [f.open, f.disabled, f.transitionStatus],
      ),
      m = E.useMemo(() => ({ ...f, onOpenChange: d, state: p }), [f, d, p]),
      h = T(`div`, e, { state: p, ref: t, props: u, stateAttributesMapping: F });
    return (0, I.jsx)(O.Provider, { value: m, children: h });
  }),
  R = { ...P, ...a },
  z = E.forwardRef(function (e, t) {
    let { panelId: n, open: r, handleTrigger: i, state: a, disabled: o } = k(),
      { className: s, disabled: c = o, id: u, render: d, nativeButton: f = !0, style: p, ...m } = e,
      { getButtonProps: h, buttonRef: g } = l({
        disabled: c,
        focusableWhenDisabled: !0,
        native: f,
      });
    return T(`button`, e, {
      state: a,
      ref: [t, g],
      props: [{ "aria-controls": r ? n : void 0, "aria-expanded": r, onClick: i }, m, h],
      stateAttributesMapping: R,
    });
  }),
  B = { height: void 0, width: void 0 };
function V(e) {
  let {
      externalRef: t,
      hiddenUntilFound: n,
      id: r,
      keepMounted: a,
      mounted: s,
      onOpenChange: l,
      open: u,
      setMounted: f,
      setOpen: p,
      transitionStatus: m,
    } = e,
    h = E.useRef(null),
    v = E.useRef(null),
    [x, w] = E.useState(B),
    T = E.useRef(B),
    D = E.useRef(!1),
    O = E.useRef(u),
    k = E.useRef(!1),
    [j, M] = E.useState(!1),
    N = E.useRef(null),
    P = i(t, h),
    F = C({ mounted: s, open: u }),
    I = o(h, !1, !1),
    L = !u && !s,
    R = j ? `idle` : m,
    z = u && (O.current || k.current),
    V =
      !u && s && v.current === `css-animation` && x.height === void 0 && x.width === void 0
        ? T.current
        : x,
    W = n && L && v.current !== `css-animation`,
    q = c((e, t = !0) => {
      (t && (T.current = e), w(e));
    }),
    J = c(() => {
      (N.current?.(), (N.current = null));
    }),
    Y = c((e) => {
      (J(),
        (N.current = () => {
          ((N.current = null), e());
        }));
    }),
    X = c(() => {
      u && s && v.current === `css-animation` && (k.current = !0);
    });
  (_(() => {
    j && m !== `starting` && M(!1);
  }, [j, m]),
    E.useEffect(
      () => () => {
        (X(), J());
      },
      [X, J],
    ),
    _(() => {
      let e = h.current;
      if (!e) return;
      !u && N.current && J();
      let t = U(e, z);
      if (((v.current = t), u && m === `idle` && O.current && t === `css-animation`)) {
        T.current = H(e);
        return;
      }
      if (u && m === `starting`) {
        let n = D.current;
        if (((D.current = !1), t === `none`)) {
          (q(H(e)), M(!0));
          return;
        }
        if (t === `css-transition`) {
          let t = K(e);
          if ((q(H(e)), !n)) return t;
          let r = G(e, `transition-duration`, `0s`);
          return (Y(r), M(!0), t);
        }
        if (t === `css-animation`) {
          if ((q(H(e)), !n)) {
            G(e, `animation-name`, `none`)();
            return;
          }
          let t = G(e, `animation-name`, `none`),
            r = G(e, `animation-duration`, `0s`);
          (t(), Y(r), M(!0));
          return;
        }
      }
      if (!u && s && (m === `idle` || m === `starting`)) {
        if (t === `none`) {
          (q(B, !1), f(!1));
          return;
        }
        (t === `css-animation` && ((O.current = !1), (k.current = !1)), q(H(e)));
        return;
      }
      if (m !== `ending`) return;
      if (t === `none`) {
        f(!1);
        return;
      }
      let n = H(e);
      (n.height ?? 0) > 0 || (n.width ?? 0) > 0
        ? (q(n), t === `css-animation` && G(e, `animation-name`, `none`)())
        : f(!1);
    }, [s, u, J, q, f, Y, z, m]),
    g({
      enabled: u && s && R === `idle`,
      open: !0,
      ref: h,
      onComplete() {
        u && q(B, !1);
      },
    }),
    E.useEffect(() => {
      if (u || !s || R !== `ending` || !h.current) return;
      let e = new AbortController(),
        t = -1;
      function n() {
        F.current.open || (f(!1), q(B, !1));
      }
      return (
        (t = S.request(() => {
          e.signal.aborted || I(n, e.signal);
        })),
        () => {
          (S.cancel(t), e.abort());
        }
      );
    }, [F, s, u, R, I, q, f]),
    _(() => {
      let e = h.current;
      e && n && L && e.setAttribute(`hidden`, `until-found`);
    }, [L, n]),
    E.useEffect(
      function () {
        let e = h.current;
        if (!e) return;
        function t(e) {
          ((D.current = !0), p(!0), l(!0, d(y, e)));
        }
        return b(e, `beforematch`, t);
      },
      [l, p],
    ));
  let Z = a || n || s || u;
  return {
    height: V.height,
    props: { ...(W ? { [A.startingStyle]: `` } : void 0), hidden: L, id: r },
    ref: P,
    shouldPreventOpenAnimation: z,
    shouldRender: Z,
    transitionStatus: R,
    width: V.width,
  };
}
function H(e) {
  return { height: e.scrollHeight, width: e.scrollWidth };
}
function U(e, t = !1) {
  let n = u(e).getComputedStyle(e),
    r =
      (n.animationName
        .split(`,`)
        .map((e) => e.trim())
        .some((e) => e !== `` && e !== `none`) ||
        t) &&
      W(n.animationDuration),
    i = W(n.transitionDuration);
  return (r && i) || i ? `css-transition` : r ? `css-animation` : `none`;
}
function W(e) {
  return e
    .split(`,`)
    .map((e) => e.trim())
    .some((e) => e !== `` && Number.parseFloat(e) > 0);
}
function G(e, t, n) {
  let r = e.style.getPropertyValue(t),
    i = e.style.getPropertyPriority(t);
  return (
    e.style.setProperty(t, n),
    () => {
      r === `` ? e.style.removeProperty(t) : e.style.setProperty(t, r, i);
    }
  );
}
function K(e) {
  let t = {
    "justify-content": e.style.justifyContent,
    "align-items": e.style.alignItems,
    "align-content": e.style.alignContent,
    "justify-items": e.style.justifyItems,
  };
  Object.keys(t).forEach((t) => {
    e.style.setProperty(t, `initial`, `important`);
  });
  function n() {
    Object.entries(t).forEach(([t, n]) => {
      n === `` ? e.style.removeProperty(t) : e.style.setProperty(t, n);
    });
  }
  let r = S.request(n);
  return () => {
    (S.cancel(r), n());
  };
}
var q = (function (e) {
    return (
      (e.collapsiblePanelHeight = `--collapsible-panel-height`),
      (e.collapsiblePanelWidth = `--collapsible-panel-width`),
      e
    );
  })({}),
  J = E.forwardRef(function (e, t) {
    let { className: n, hiddenUntilFound: r, keepMounted: i, render: a, id: o, style: c, ...l } = e,
      {
        mounted: u,
        onOpenChange: d,
        open: f,
        panelId: p,
        setMounted: m,
        setPanelIdState: h,
        setOpen: g,
        state: v,
        transitionStatus: y,
      } = k(),
      b = r ?? !1,
      x = i ?? !1;
    _(() => {
      if (o)
        return (
          h(o),
          () => {
            h(void 0);
          }
        );
    }, [o, h]);
    let {
        height: S,
        props: C,
        ref: w,
        shouldPreventOpenAnimation: E,
        shouldRender: D,
        transitionStatus: O,
        width: A,
      } = V({
        externalRef: t,
        hiddenUntilFound: b,
        id: p,
        keepMounted: x,
        mounted: u,
        onOpenChange: d,
        open: f,
        setMounted: m,
        setOpen: g,
        transitionStatus: y,
      }),
      j = { ...v, transitionStatus: O },
      M = s(c, j),
      N = T(
        `div`,
        { ...e, style: void 0 },
        {
          state: j,
          ref: w,
          props: [
            C,
            {
              style: {
                [q.collapsiblePanelHeight]: S === void 0 ? `auto` : `${S}px`,
                [q.collapsiblePanelWidth]: A === void 0 ? `auto` : `${A}px`,
              },
            },
            l,
            M ? { style: M } : void 0,
            E ? { style: { animationName: `none` } } : void 0,
          ],
          stateAttributesMapping: F,
        },
      );
    return D ? N : null;
  }),
  Y = n();
function X(e) {
  let t = (0, Y.c)(4),
    n;
  t[0] === e ? (n = t[1]) : (({ ...n } = e), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === n
      ? (r = t[3])
      : ((r = (0, I.jsx)(L, { "data-slot": `collapsible`, ...n })), (t[2] = n), (t[3] = r)),
    r
  );
}
function Z(e) {
  let t = (0, Y.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = w(`cursor-pointer`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, I.jsx)(z, { className: i, "data-slot": `collapsible-trigger`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Q(e) {
  let t = (0, Y.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, animate: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a =
      (i === void 0 || i) &&
      `h-(--collapsible-panel-height) transition-[height] duration-200 motion-reduce:transition-none data-ending-style:h-0 data-starting-style:h-0 data-open:data-ending-style:[height:var(--collapsible-panel-height)]`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = w(`overflow-hidden`, a, n)), (t[4] = n), (t[5] = a), (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, I.jsx)(J, { className: o, "data-slot": `collapsible-panel`, ...r })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
export { Q as n, Z as r, X as t };
//# sourceMappingURL=collapsible-Dp2CGco9.js.map
