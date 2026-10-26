import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./minus-Czm2HkK6.js";
import { t as a } from "./plus-B20TfFan.js";
import {
  Ao as o,
  Ba as s,
  Ca as c,
  Er as l,
  Ga as u,
  Ha as d,
  Ka as f,
  Ma as p,
  Mo as m,
  Na as h,
  Qa as g,
  Rr as _,
  Sa as v,
  Wa as y,
  Ya as b,
  ao as x,
  br as S,
  da as C,
  do as ee,
  fa as w,
  ga as T,
  io as te,
  ja as E,
  jo as D,
  lo as O,
  ma as ne,
  no as k,
  oo as A,
  pa as j,
  ro as re,
  t as M,
  va as N,
  wa as P,
  wo as ie,
  wr as ae,
  xr as oe,
  yr as se,
} from "./utils-CPoejuy5.js";
import { t as ce } from "./FormContext-BF__1yV6.js";
import { a as le } from "./CSPContext-BIshez4y.js";
var F = e(t());
function ue() {
  let [, e] = F.useState({});
  return F.useCallback(() => {
    e({});
  }, []);
}
var de = F.createContext(void 0);
function fe() {
  let e = F.useContext(de);
  if (e === void 0) throw Error(m(43));
  return e;
}
var I = { inputValue: () => null, value: () => null, ...l },
  pe = new Map();
function L(e, t) {
  let n = JSON.stringify({ locale: e, options: t }),
    r = pe.get(n);
  if (r) return r;
  let i = new Intl.NumberFormat(e, t);
  return (pe.set(n, i), i);
}
function R(e, t, n) {
  return e == null ? `` : L(t, n).format(e);
}
function me(e, t, n) {
  return R(e, t, { ...n, maximumFractionDigits: 20 });
}
var z = [`零`, `〇`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`],
  B = {
    零: `0`,
    〇: `0`,
    一: `1`,
    二: `2`,
    三: `3`,
    四: `4`,
    五: `5`,
    六: `6`,
    七: `7`,
    八: `8`,
    九: `9`,
  },
  he = [`٠`, `١`, `٢`, `٣`, `٤`, `٥`, `٦`, `٧`, `٨`, `٩`],
  V = [`۰`, `۱`, `۲`, `۳`, `۴`, `۵`, `۶`, `۷`, `۸`, `۹`],
  H = [`０`, `１`, `２`, `３`, `４`, `５`, `６`, `７`, `８`, `９`],
  ge = [`%`, `٪`, `％`, `﹪`],
  _e = [`‰`, `؉`],
  ve = [`−`, `－`, `‒`, `–`, `—`, `﹣`],
  U = [`＋`, `﹢`],
  ye = RegExp(`[${he.join(``)}]`, `g`),
  W = RegExp(`[${V.join(``)}]`, `g`),
  be = RegExp(`[${H.join(``)}]`, `g`),
  xe = RegExp(`[${z.join(``)}]`, `g`),
  G = RegExp(`[${ge.join(``)}]`),
  K = RegExp(`[${_e.join(``)}]`),
  Se = /[٠١٢٣٤٥٦٧٨٩]/,
  Ce = /[۰۱۲۳۴۵۶۷۸۹]/,
  we = /[零〇一二三四五六七八九]/,
  Te = RegExp(`[${H.join(``)}]`),
  Ee = [`.`, `,`, `．`, `，`, `٫`, `٬`],
  De = /\p{Zs}/u,
  Oe = [`+`, ...U],
  ke = [`-`, ...ve],
  q = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`),
  Ae = (e) => e.replace(/[-\\\]^]/g, (e) => `\\${e}`),
  je = (e) => `[${e.map(Ae).join(``)}]`,
  Me = je([`-`].concat(ve)),
  Ne = je([`+`].concat(U)),
  Pe = new RegExp(Me, `gu`),
  J = new RegExp(Ne, `gu`),
  Y = new RegExp(Me),
  X = new RegExp(Ne);
function Fe(e, t) {
  let n = L(e, t).formatToParts(11111.1),
    r = {};
  return (
    n.forEach((e) => {
      r[e.type] = e.value;
    }),
    L(e)
      .formatToParts(0.1)
      .forEach((e) => {
        e.type === `decimal` && (r[e.type] = e.value);
      }),
    r
  );
}
function Z(e, t, n) {
  if (e == null) return null;
  let r = String(e)
    .replace(/\p{Cf}/gu, ``)
    .trim();
  r = r.replace(Pe, `-`).replace(J, `+`);
  let i = !1,
    a = r.match(/([+-])\s*$/);
  a && (a[1] === `-` && (i = !0), (r = r.replace(/([+-])\s*$/, ``)));
  let o = r.match(/^\s*([+-])/);
  o && (o[1] === `-` && (i = !0), (r = r.replace(/^\s*[+-]/, ``)));
  let s = t;
  s === void 0 && (Se.test(r) || Ce.test(r) ? (s = `ar`) : we.test(r) && (s = `zh`));
  let { group: c, decimal: l, currency: u } = Fe(s, n),
    d = L(s, n)
      .formatToParts(1)
      .filter((e) => e.type === `unit`)
      .map((e) => q(e.value)),
    f = d.length ? new RegExp(d.join(`|`), `g`) : null,
    p = null;
  c &&
    (p = /\p{Zs}/u.test(c) ? /\p{Zs}/gu : c === `'` || c === `’` ? /['’]/g : new RegExp(q(c), `g`));
  let m = [
      { regex: c ? p : null, replacement: `` },
      { regex: l ? new RegExp(q(l), `g`) : null, replacement: `.` },
      { regex: /．/g, replacement: `.` },
      { regex: /，/g, replacement: `` },
      { regex: /٫/g, replacement: `.` },
      { regex: /٬/g, replacement: `` },
      { regex: u ? new RegExp(q(u), `g`) : null, replacement: `` },
      { regex: f, replacement: `` },
      { regex: ye, replacement: (e) => String(he.indexOf(e)) },
      { regex: W, replacement: (e) => String(V.indexOf(e)) },
      { regex: be, replacement: (e) => String(H.indexOf(e)) },
      { regex: xe, replacement: (e) => B[e] },
    ].reduce((e, { regex: t, replacement: n }) => (t ? e.replace(t, n) : e), r),
    h = m.lastIndexOf(`.`);
  if (
    (h !== -1 && (m = `${m.slice(0, h).replace(/\./g, ``)}.${m.slice(h + 1).replace(/\./g, ``)}`),
    /^[-+]?Infinity$/i.test(r) || /[∞]/.test(r))
  )
    return null;
  let g = (i ? `-` : ``) + m,
    _ = parseFloat(g),
    v = n?.style,
    y = v === `unit` && n?.unit === `percent`,
    b = G.test(e) || v === `percent`;
  return (K.test(e) ? (_ /= 1e3) : !y && b && (_ /= 100), Number.isNaN(_) ? null : _);
}
var Ie = 1e-10;
function Le(e) {
  let t = L(`en-US`).resolvedOptions(),
    n = e?.minimumFractionDigits ?? t.minimumFractionDigits ?? 0;
  return {
    maximumFractionDigits: Math.max(e?.maximumFractionDigits ?? t.maximumFractionDigits ?? 20, n),
    minimumFractionDigits: n,
  };
}
function Re(e, t) {
  if (!Number.isFinite(e)) return e;
  let n = Math.min(Math.max(t, 0), 20);
  return Number(e.toFixed(n));
}
function Q(e, t) {
  let { maximumFractionDigits: n } = Le(t);
  return Re(e, n);
}
function ze(e, t, n, r = `directional`) {
  if (n === 0) return e;
  let i = Math.abs(n),
    a = Math.sign(n),
    o = i * Ie * a,
    s = r === `nearest` ? n : i,
    c = (e - t + o) / s,
    l;
  return (
    (l = r === `nearest` ? Math.round(c) : a > 0 ? Math.floor(c) : Math.ceil(c)),
    t + l * (r === `nearest` ? n : i)
  );
}
function Be(
  e,
  {
    step: t,
    minWithDefault: n,
    maxWithDefault: r,
    minWithZeroDefault: i,
    format: a,
    snapOnStep: o,
    small: s,
    clamp: c,
  },
) {
  if (e === null) return e;
  let l = c ? le(e, n, r) : e;
  if (t != null && o) {
    if (t === 0) return Q(l, a);
    let e = i;
    return (
      !s && n !== -(2 ** 53 - 1) && (e = n), Q(ze(l, e, t, s ? `nearest` : `directional`), a)
    );
  }
  return Q(l, a);
}
var $ = e(r()),
  Ve = F.forwardRef(function (e, t) {
    let {
        id: n,
        min: r,
        max: i,
        smallStep: a = 0.1,
        step: c = 1,
        largeStep: l = 10,
        required: d = !1,
        disabled: f = !1,
        readOnly: m = !1,
        form: h,
        name: g,
        defaultValue: _,
        value: v,
        onValueChange: x,
        onValueCommitted: te,
        allowWheelScrub: E = !1,
        snapOnStep: D = !1,
        allowOutOfRange: O = !1,
        format: k,
        locale: A,
        render: re,
        className: M,
        inputRef: P,
        style: oe,
        ...se
      } = e,
      {
        setDirty: ce,
        validityData: le,
        disabled: fe,
        setFilled: pe,
        invalid: L,
        name: me,
        state: z,
        validation: B,
        shouldValidateOnChange: he,
      } = ae(),
      V = fe || f,
      H = me ?? g,
      ve = c === `any` ? 1 : c,
      [U, ye] = F.useState(!1),
      W = r ?? -(2 ** 53 - 1),
      be = i ?? 2 ** 53 - 1,
      xe = r ?? 0,
      G = k?.style,
      K = F.useRef(null),
      Se = o(P, B.inputRef),
      Ce = S({ id: n }),
      [we, Te] = b({ controlled: v, default: _, name: `NumberField`, state: `value` }),
      q = we ?? null,
      Ae = ne(q);
    y(() => {
      pe(q !== null);
    }, [pe, q]);
    let je = ue(),
      Me = ne(k),
      Ne = F.useRef(!1),
      Pe = u((e, t) => {
        ((Ne.current = !1), te?.(e, t));
      }),
      J = F.useRef(!0),
      Y = F.useRef(null),
      [X, Z] = F.useState(() => (v === void 0 ? R(q, A, k) : He(q, A, k))),
      [Ie, Le] = F.useState(`numeric`),
      Re = u(() => {
        let { decimal: e, group: t, currency: n, literal: r } = Fe(A, k),
          i = new Set();
        (Ee.forEach((e) => i.add(e)), e && i.add(e), t && (i.add(t), De.test(t) && i.add(` `)));
        let a = G === `percent` || (G === `unit` && k?.unit === `percent`),
          o = G === `percent` || (G === `unit` && k?.unit === `permille`);
        return (
          a && ge.forEach((e) => i.add(e)),
          o && _e.forEach((e) => i.add(e)),
          G === `currency` && n && i.add(n),
          r && (Array.from(r).forEach((e) => i.add(e)), De.test(r) && i.add(` `)),
          Oe.forEach((e) => i.add(e)),
          W < 0 && ke.forEach((e) => i.add(e)),
          i
        );
      }),
      Q = u((e) => (e?.altKey ? a : e?.shiftKey ? l : ve)),
      ze = u((e, t) => {
        let n = t.event,
          r = t.direction,
          i = t.reason,
          a =
            !O ||
            (i !== `input-change` &&
              i !== `input-blur` &&
              i !== `input-paste` &&
              i !== `input-clear` &&
              i !== `none`),
          o = Be(e, {
            step: r ? Q(n) * r : void 0,
            format: Me.current,
            minWithDefault: W,
            maxWithDefault: be,
            minWithZeroDefault: xe,
            snapOnStep: D,
            small: n?.altKey ?? !1,
            clamp: a,
          }),
          s =
            t.reason === `input-change` ||
            t.reason === `input-clear` ||
            t.reason === `input-blur` ||
            t.reason === `input-paste` ||
            t.reason === `none`,
          c = o !== q || (s && (e !== q || J.current === !1));
        if (c) {
          if (((Y.current = o), x?.(o, t), t.isCanceled)) return c;
          (Te(o), ce(o !== le.initialValue), (Ne.current = !0));
        }
        return (J.current && Z(R(o, A, k)), je(), c);
      }),
      Ve = u((e, { direction: t, currentValue: n, event: i, reason: a }) => {
        let o = n ?? Ae.current,
          s = typeof o == `number` ? o + e * t : Math.max(0, r ?? 0);
        return ze(s, p(a, i, void 0, { direction: t }));
      });
    (y(function () {
      if (!J.current) return;
      let e = v === void 0 ? R(q, A, k) : He(q, A, k);
      e !== X && Z(e);
    }),
      y(
        function () {
          if (!s) return;
          let e = `text`;
          (W >= 0 && (e = `decimal`), Le(e));
        },
        [W, G],
      ),
      F.useEffect(
        function () {
          let e = K.current;
          if (V || m || !E || !e) return;
          function t(e) {
            if (e.ctrlKey || N(j(K.current)) !== K.current) return;
            (e.preventDefault(), (J.current = !0));
            let t = Q(e) ?? 1;
            Ve(t, { direction: e.deltaY > 0 ? -1 : 1, event: e, reason: `wheel` });
          }
          return T(e, `wheel`, t);
        },
        [E, Ve, V, m, Q],
      ));
    let Ue = F.useMemo(
        () => ({
          ...z,
          disabled: V,
          readOnly: m,
          required: d,
          value: q,
          inputValue: X,
          scrubbing: U,
        }),
        [z, V, m, d, q, X, U],
      ),
      We = F.useMemo(
        () => ({
          inputRef: K,
          inputValue: X,
          value: q,
          minWithDefault: W,
          maxWithDefault: be,
          disabled: V,
          readOnly: m,
          id: Ce,
          setValue: ze,
          incrementValue: Ve,
          getStepAmount: Q,
          allowInputSyncRef: J,
          formatOptionsRef: Me,
          valueRef: Ae,
          lastChangedValueRef: Y,
          hasPendingCommitRef: Ne,
          name: H,
          required: d,
          invalid: L,
          inputMode: Ie,
          getAllowedNonNumericKeys: Re,
          min: r,
          max: i,
          setInputValue: Z,
          locale: A,
          isScrubbing: U,
          setIsScrubbing: ye,
          state: Ue,
          onValueCommitted: Pe,
        }),
        [K, X, q, W, be, V, m, Ce, ze, Ve, Q, Me, Ae, H, d, L, Ie, Re, r, i, Z, A, U, Ue, Pe],
      ),
      Ge = ie(`div`, e, { ref: t, state: Ue, props: se, stateAttributesMapping: I });
    return (0, $.jsxs)(de.Provider, {
      value: We,
      children: [
        Ge,
        (0, $.jsx)(`input`, {
          ...B.getInputValidationProps({
            onFocus() {
              K.current?.focus();
            },
            onChange(e) {
              if (e.nativeEvent.defaultPrevented || V || m) {
                e.preventBaseUIHandler?.();
                return;
              }
              let t = e.currentTarget.valueAsNumber,
                n = Number.isNaN(t) ? null : t,
                r = p(ee, e.nativeEvent);
              (ce(n !== le.initialValue), ze(n, r), he() && B.commit(n));
            },
          }),
          ref: Se,
          type: `number`,
          form: h,
          name: H,
          value: q ?? ``,
          min: r,
          max: i,
          step: c,
          disabled: V,
          required: d,
          "aria-hidden": !0,
          tabIndex: -1,
          style: H ? w : C,
          suppressHydrationWarning: !0,
        }),
      ],
    });
  });
function He(e, t, n) {
  return n?.maximumFractionDigits != null || n?.minimumFractionDigits != null
    ? R(e, t, n)
    : me(e, t, n);
}
var Ue = F.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      { state: o } = fe();
    return ie(`div`, e, {
      ref: t,
      state: o,
      props: [{ role: `group` }, a],
      stateAttributesMapping: I,
    });
  }),
  We = 0,
  Ge = class e extends c {
    static create() {
      return new e();
    }
    start(e, t) {
      (this.clear(),
        (this.currentId = setInterval(() => {
          t();
        }, e)));
    }
    clear = () => {
      this.currentId !== We && (clearInterval(this.currentId), (this.currentId = We));
    };
  };
function Ke() {
  let e = D(Ge.create).current;
  return (E(e.disposeEffect), e);
}
var qe = 60,
  Je = 400,
  Ye = 8,
  Xe = 50,
  Ze = 3;
function Qe(e) {
  return e === `touch` || e === `pen`;
}
function $e(e) {
  let {
      disabled: t,
      readOnly: n = !1,
      tick: r,
      onStop: i,
      tickDelay: a = qe,
      startDelay: o = Je,
      scrollDistance: s = Ye,
      elementRef: c,
    } = e,
    l = P(),
    d = Ke(),
    p = P(),
    m = F.useRef(!1),
    h = F.useRef(0),
    g = F.useRef({ x: 0, y: 0 }),
    _ = F.useRef(!1),
    v = F.useRef(!1),
    y = F.useRef(``),
    b = F.useRef(() => {}),
    x = u(() => {
      (p.clear(), l.clear(), d.clear(), b.current(), (h.current = 0));
    });
  function S(e) {
    x();
    let t = c.current;
    if (!t) return;
    let n = f(t);
    function s(e) {
      e.preventDefault();
    }
    ((b.current = T(n, `contextmenu`, s)),
      T(
        n,
        `pointerup`,
        (e) => {
          ((m.current = !1), x(), i?.(e));
        },
        { once: !0 },
      ),
      r(e)
        ? l.start(o, () => {
            d.start(a, () => {
              r(e) || x();
            });
          })
        : x());
  }
  return (
    F.useEffect(() => () => x(), [x]),
    {
      pointerHandlers: {
        onTouchStart() {
          _.current = !0;
        },
        onTouchEnd() {
          _.current = !1;
        },
        onPointerDown(e) {
          let r = !e.button || e.button === 0;
          e.defaultPrevented ||
            !r ||
            t ||
            n ||
            ((y.current = e.pointerType),
            (v.current = !1),
            (m.current = !0),
            (g.current = { x: e.clientX, y: e.clientY }),
            Qe(e.pointerType)
              ? p.start(Xe, () => {
                  let t = h.current;
                  ((h.current = 0),
                    m.current && t < Ze
                      ? (S(e.nativeEvent), (v.current = !0))
                      : ((v.current = !1), x()));
                })
              : (e.preventDefault(), S(e.nativeEvent)));
        },
        onPointerUp(e) {
          Qe(e.pointerType) && (m.current = !1);
        },
        onPointerMove(e) {
          if (t || n || !Qe(e.pointerType) || !m.current) return;
          h.current != null && (h.current += 1);
          let { x: r, y: i } = g.current,
            a = r - e.clientX,
            o = i - e.clientY;
          a ** 2 + o ** 2 > s ** 2 && x();
        },
        onMouseEnter(e) {
          e.defaultPrevented ||
            t ||
            n ||
            !m.current ||
            _.current ||
            Qe(y.current) ||
            S(e.nativeEvent);
        },
        onMouseLeave() {
          _.current || x();
        },
        onMouseUp() {
          _.current || x();
        },
      },
      shouldSkipClick: u((e) =>
        e.defaultPrevented ? !0 : Qe(y.current) ? v.current : e.detail !== 0,
      ),
    }
  );
}
function et(e) {
  return e === `touch` || e === `pen`;
}
function tt(e) {
  let {
      allowInputSyncRef: t,
      disabled: n,
      formatOptionsRef: r,
      getStepAmount: i,
      id: a,
      incrementValue: o,
      inputRef: s,
      inputValue: c,
      isIncrement: l,
      locale: u,
      readOnly: d,
      setValue: f,
      valueRef: m,
      lastChangedValueRef: _,
      onValueCommitted: v,
    } = e,
    y = l ? k : g;
  function b(e) {
    t.current = !0;
    let n = Z(c, u, r.current);
    n !== null && ((m.current = n), f(n, p(y, e, void 0, { direction: l ? 1 : -1 })));
  }
  let { pointerHandlers: x, shouldSkipClick: S } = $e({
    disabled: n || d,
    elementRef: s,
    tickDelay: 60,
    startDelay: 400,
    scrollDistance: 8,
    tick(e) {
      let t = i(e) ?? 1;
      return o(t, { direction: l ? 1 : -1, event: e, reason: y });
    },
    onStop(e) {
      let t = _.current ?? m.current;
      v(t, h(y, e));
    },
  });
  return {
    disabled: n,
    "aria-readonly": d || void 0,
    "aria-label": l ? `Increase` : `Decrease`,
    "aria-controls": a,
    tabIndex: -1,
    style: { WebkitUserSelect: `none`, userSelect: `none` },
    ...x,
    onClick(e) {
      let t = n || d;
      if (e.defaultPrevented || t || S(e)) return;
      b(e.nativeEvent);
      let r = i(e) ?? 1,
        a = m.current;
      o(r, { direction: l ? 1 : -1, event: e.nativeEvent, reason: y });
      let s = _.current ?? m.current;
      s !== a && v(s, h(y, e.nativeEvent));
    },
    onPointerDown(e) {
      let t = !e.button || e.button === 0;
      e.defaultPrevented ||
        d ||
        !t ||
        n ||
        (b(e.nativeEvent), et(e.pointerType) || s.current?.focus(), x.onPointerDown(e));
    },
  };
}
var nt = F.forwardRef(function (e, t) {
    let { render: n, className: r, disabled: i = !1, nativeButton: a = !0, style: o, ...s } = e,
      {
        allowInputSyncRef: c,
        disabled: l,
        formatOptionsRef: u,
        getStepAmount: f,
        id: p,
        incrementValue: m,
        inputRef: h,
        inputValue: g,
        locale: _,
        maxWithDefault: v,
        readOnly: y,
        setValue: b,
        state: x,
        value: S,
        valueRef: C,
        lastChangedValueRef: ee,
        onValueCommitted: w,
      } = fe(),
      T = i || l || (S != null && S >= v),
      te = tt({
        isIncrement: !0,
        inputRef: h,
        inputValue: g,
        disabled: T,
        readOnly: y,
        id: p,
        setValue: b,
        getStepAmount: f,
        incrementValue: m,
        allowInputSyncRef: c,
        formatOptionsRef: u,
        valueRef: C,
        locale: _,
        lastChangedValueRef: ee,
        onValueCommitted: w,
      }),
      { getButtonProps: E, buttonRef: D } = d({
        disabled: T,
        native: a,
        focusableWhenDisabled: !0,
      }),
      O = F.useMemo(() => ({ ...x, disabled: T }), [x, T]);
    return ie(`button`, e, { ref: [t, D], state: O, props: [te, s, E], stateAttributesMapping: I });
  }),
  rt = F.forwardRef(function (e, t) {
    let { render: n, className: r, disabled: i = !1, nativeButton: a = !0, style: o, ...s } = e,
      {
        allowInputSyncRef: c,
        disabled: l,
        formatOptionsRef: u,
        getStepAmount: f,
        id: p,
        incrementValue: m,
        inputRef: h,
        inputValue: g,
        minWithDefault: _,
        readOnly: v,
        setValue: y,
        state: b,
        value: x,
        valueRef: S,
        locale: C,
        lastChangedValueRef: ee,
        onValueCommitted: w,
      } = fe(),
      T = i || l || (x != null && x <= _),
      te = tt({
        isIncrement: !1,
        inputRef: h,
        inputValue: g,
        disabled: T,
        readOnly: v,
        id: p,
        setValue: y,
        getStepAmount: f,
        incrementValue: m,
        allowInputSyncRef: c,
        formatOptionsRef: u,
        valueRef: S,
        locale: C,
        lastChangedValueRef: ee,
        onValueCommitted: w,
      }),
      { getButtonProps: E, buttonRef: D } = d({
        disabled: T,
        native: a,
        focusableWhenDisabled: !0,
      }),
      O = F.useMemo(() => ({ ...b, disabled: T }), [b, T]);
    return ie(`button`, e, { ref: [t, D], state: O, props: [te, s, E], stateAttributesMapping: I });
  }),
  it = { ...l, ...I },
  at = new Set([`Backspace`, `Delete`, `ArrowLeft`, `ArrowRight`, `Tab`, `Enter`, `Escape`]),
  ot = F.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, ...a } = e,
      {
        allowInputSyncRef: o,
        disabled: s,
        formatOptionsRef: c,
        getAllowedNonNumericKeys: l,
        getStepAmount: u,
        id: d,
        incrementValue: f,
        inputMode: m,
        inputValue: g,
        max: y,
        min: b,
        name: S,
        readOnly: C,
        required: ee,
        setValue: w,
        state: T,
        setInputValue: E,
        locale: D,
        inputRef: ne,
        value: k,
        onValueCommitted: j,
        lastChangedValueRef: M,
        hasPendingCommitRef: N,
        valueRef: P,
      } = fe(),
      { clearErrors: le } = ce(),
      {
        validationMode: ue,
        setTouched: de,
        setFocused: I,
        invalid: pe,
        shouldValidateOnChange: L,
        validation: z,
      } = ae(),
      { labelId: B } = oe(),
      he = F.useRef(!1),
      V = F.useRef(!1);
    return (
      se(ne, d, k),
      _(k, (e) => {
        let t = L();
        (le(S),
          t && z.commit(k),
          !(e === k || t) && (V.current ? (V.current = !1) : z.commit(k, !0)));
      }),
      ie(`input`, e, {
        ref: [t, ne],
        state: T,
        props: [
          {
            id: d,
            required: ee,
            disabled: s,
            readOnly: C,
            inputMode: m,
            value: g,
            type: `text`,
            autoComplete: `off`,
            autoCorrect: `off`,
            spellCheck: `false`,
            "aria-roledescription": `Number field`,
            "aria-invalid": pe || void 0,
            "aria-labelledby": B,
            suppressHydrationWarning: !0,
            onFocus(e) {
              if (e.defaultPrevented || C || s || (I(!0), he.current)) return;
              he.current = !0;
              let t = e.currentTarget,
                n = t.value.length;
              t.setSelectionRange(n, n);
            },
            onBlur(e) {
              if (e.defaultPrevented || C || s) return;
              (de(!0), I(!1));
              let t = !o.current,
                n = N.current;
              if (((o.current = !0), g.trim() === ``)) {
                (w(null, p(x, e.nativeEvent)),
                  ue === `onBlur` && z.commit(null),
                  j(null, h(x, e.nativeEvent)));
                return;
              }
              let r = c.current,
                i = Z(g, D, r);
              if (i === null) return;
              let a = r?.maximumFractionDigits != null || r?.minimumFractionDigits != null,
                l = r?.maximumFractionDigits,
                u = a && typeof l == `number` ? Number(i.toFixed(l)) : i,
                d = h(re, e.nativeEvent),
                f = k !== u,
                m = t || f || n;
              (ue === `onBlur` && z.commit(u),
                f && ((V.current = !0), w(u, p(re, e.nativeEvent))),
                m && j(u, d));
              let _ = R(u, D, r);
              (a || i !== k || g !== me(i, D, r)) && g !== _ && E(_);
            },
            onChange(e) {
              if (e.nativeEvent.defaultPrevented) return;
              o.current = !1;
              let t = e.currentTarget.value;
              if (t.trim() === ``) {
                (E(t), w(null, p(x, e.nativeEvent)));
                return;
              }
              let n = l();
              if (
                !Array.from(t).every((e) => {
                  let t = e >= `0` && e <= `9`,
                    r = Se.test(e),
                    i = we.test(e),
                    a = Ce.test(e),
                    o = Te.test(e),
                    s = Y.test(e);
                  return t || r || i || a || o || s || n.has(e);
                })
              )
                return;
              let r = Z(t, D, c.current);
              (E(t), r !== null && w(r, p(te, e.nativeEvent)));
            },
            onKeyDown(e) {
              if (e.defaultPrevented || C || s) return;
              let t = e.nativeEvent;
              o.current = !0;
              let n = l(),
                r = n.has(e.key),
                { decimal: i, currency: a, percentSign: d } = Fe(D, c.current),
                m = e.currentTarget.selectionStart,
                _ = e.currentTarget.selectionEnd,
                x = m === 0 && _ === g.length,
                S = (e) => m != null && _ != null && e >= m && e < _;
              if (Y.test(e.key) && Array.from(n).some((e) => Y.test(e || ``))) {
                let e = g.search(Pe),
                  t = e != null && e !== -1 && S(e);
                r = !(Y.test(g) || X.test(g)) || x || t;
              }
              if (X.test(e.key) && Array.from(n).some((e) => X.test(e || ``))) {
                let e = g.search(J),
                  t = e != null && e !== -1 && S(e);
                r = !(Y.test(g) || X.test(g)) || x || t;
              }
              [i, a, d].forEach((t) => {
                if (e.key === t) {
                  let e = g.indexOf(t),
                    n = S(e);
                  r = !g.includes(t) || x || n;
                }
              });
              let ee = e.key >= `0` && e.key <= `9`,
                T = Se.test(e.key),
                te = we.test(e.key),
                E = Ce.test(e.key),
                ne = Te.test(e.key),
                k = at.has(e.key);
              if (
                e.which === 229 ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                r ||
                ee ||
                T ||
                ne ||
                te ||
                E ||
                k
              )
                return;
              let A = Z(g, D, c.current),
                re = u(e) ?? 1;
              v(e);
              let N = h(O, t);
              e.key === `ArrowUp`
                ? (f(re, { direction: 1, currentValue: A, event: t, reason: O }),
                  j(M.current ?? P.current, N))
                : e.key === `ArrowDown`
                  ? (f(re, { direction: -1, currentValue: A, event: t, reason: O }),
                    j(M.current ?? P.current, N))
                  : e.key === `Home` && b != null
                    ? (w(b, p(O, t)), j(M.current ?? P.current, N))
                    : e.key === `End` && y != null && (w(y, p(O, t)), j(M.current ?? P.current, N));
            },
            onPaste(e) {
              if (e.defaultPrevented || C || s) return;
              e.preventDefault();
              let t = (e.clipboardData || window.Clipboard).getData(`text/plain`),
                n = Z(t, D, c.current);
              n !== null && ((o.current = !1), w(n, p(A, e.nativeEvent)), E(t));
            },
          },
          z.getValidationProps(),
          a,
        ],
        stateAttributesMapping: it,
      })
    );
  }),
  st = n();
function ct(e) {
  let t = (0, st.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ id: r, className: n, size: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === void 0 ? `default` : a,
    s = F.useId(),
    c = r ?? s,
    l;
  t[5] === n
    ? (l = t[6])
    : ((l = M(`flex w-full flex-col items-start gap-2`, n)), (t[5] = n), (t[6] = l));
  let u;
  return (
    t[7] !== c || t[8] !== i || t[9] !== o || t[10] !== l
      ? ((u = (0, $.jsx)(Ve, {
          className: l,
          "data-size": o,
          "data-slot": `number-field`,
          id: c,
          ...i,
        })),
        (t[7] = c),
        (t[8] = i),
        (t[9] = o),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function lt(e) {
  let t = (0, st.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(
        `relative flex w-full justify-between rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-inset has-aria-invalid:border-destructive/36 has-autofill:bg-foreground/4 focus-within:has-aria-invalid:border-destructive/64 focus-within:has-aria-invalid:ring-destructive/48 data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm dark:bg-input/32 dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-within:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-disabled],:focus-within,[aria-invalid]]:shadow-none`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(Ue, { className: i, "data-slot": `number-field-group`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function ut(e) {
  let t = (0, st.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let a;
  t[3] === n
    ? (a = t[4])
    : ((a = M(
        `relative flex shrink-0 cursor-pointer items-center justify-center rounded-s-[calc(var(--radius-lg)-1px)] in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent`,
        n,
      )),
      (t[3] = n),
      (t[4] = a));
  let o;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(i, {})), (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== r || t[7] !== a
      ? ((s = (0, $.jsx)(rt, {
          className: a,
          "data-slot": `number-field-decrement`,
          ...r,
          children: o,
        })),
        (t[6] = r),
        (t[7] = a),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function dt(e) {
  let t = (0, st.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(
        `relative flex shrink-0 cursor-pointer items-center justify-center rounded-e-[calc(var(--radius-lg)-1px)] in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] transition-colors pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let o;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(a, {})), (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== r || t[7] !== i
      ? ((s = (0, $.jsx)(nt, {
          className: i,
          "data-slot": `number-field-increment`,
          ...r,
          children: o,
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function ft(e) {
  let t = (0, st.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(
        `h-8.5 in-data-[size=lg]:h-9.5 in-data-[size=sm]:h-7.5 w-full min-w-0 grow bg-transparent in-data-[size=sm]:px-[calc(--spacing(2.5)-1px)] px-[calc(--spacing(3)-1px)] text-center tabular-nums in-data-[size=lg]:leading-9.5 in-data-[size=sm]:leading-7.5 leading-8.5 outline-none [transition:background-color_5000000s_ease-in-out_0s] sm:h-7.5 sm:in-data-[size=lg]:h-8.5 sm:in-data-[size=sm]:h-6.5 sm:in-data-[size=lg]:leading-8.5 sm:in-data-[size=sm]:leading-8.5 sm:leading-7.5`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(ot, { className: i, "data-slot": `number-field-input`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
export { ft as a, dt as i, ut as n, lt as r, ct as t };
//# sourceMappingURL=number-field-D11YcDFl.js.map
