import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  An as i,
  Ao as a,
  Co as o,
  Er as s,
  Ga as c,
  Ha as l,
  Ka as u,
  Ma as d,
  Mo as f,
  Oa as ee,
  Oo as p,
  Pa as m,
  Pr as h,
  Rr as g,
  Ta as _,
  Wa as v,
  Ya as y,
  br as b,
  da as x,
  do as te,
  fa as ne,
  ko as S,
  oi as C,
  t as w,
  wo as T,
  wr as re,
  xr as ie,
  ya as ae,
  yr as E,
} from "./utils-CPoejuy5.js";
import { n as oe, t as se } from "./CompositeRoot-CdXTuOFh.js";
import { t as ce } from "./FormContext-BF__1yV6.js";
import { t as le } from "./useAriaLabelledBy-C2yZMJZ0.js";
import { t as ue } from "./FieldItemContext-Czp3rpvZ.js";
var D = e(r()),
  O = e(t()),
  k = O.createContext({ legendId: void 0, setLegendId: () => {}, disabled: void 0 });
function de(e = !1) {
  let t = O.useContext(k);
  if (!t && !e) throw Error(f(86));
  return t;
}
var A = (function (e) {
    return (
      (e.checked = `data-checked`),
      (e.unchecked = `data-unchecked`),
      (e.disabled = `data-disabled`),
      (e.readonly = `data-readonly`),
      (e.required = `data-required`),
      (e.valid = `data-valid`),
      (e.invalid = `data-invalid`),
      (e.touched = `data-touched`),
      (e.dirty = `data-dirty`),
      (e.filled = `data-filled`),
      (e.focused = `data-focused`),
      e
    );
  })({}),
  j = {
    checked(e) {
      return e ? { [A.checked]: `` } : { [A.unchecked]: `` };
    },
    ...o,
    ...s,
  },
  M = O.createContext(void 0);
function N() {
  return O.useContext(M);
}
var P = O.createContext(void 0);
function F() {
  let e = O.useContext(P);
  if (e === void 0) throw Error(f(52));
  return e;
}
var I = O.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: o = !1,
        readOnly: s = !1,
        required: f = !1,
        "aria-labelledby": ee,
        value: g,
        inputRef: _,
        nativeButton: y = !1,
        id: C,
        style: w,
        ...ae
      } = e,
      E = N(),
      {
        disabled: se,
        readOnly: ce,
        required: k,
        form: de,
        checkedValue: A,
        touched: M = !1,
        validation: F,
        name: I,
      } = E ?? {},
      L = E?.setCheckedValue ?? S,
      fe = E?.setTouched ?? S,
      R = E?.registerControlRef ?? S,
      z = E?.registerInputRef ?? S,
      { setDirty: B, validityData: V, setTouched: H, setFilled: U, state: W, disabled: G } = re(),
      K = ue(),
      { labelId: pe, getDescriptionProps: me } = ie(),
      q = G || K.disabled || se || o,
      J = ce || s,
      Y = k || f,
      he = de,
      X = E ? A === g : g === ``,
      Z = O.useRef(null),
      Q = O.useRef(null),
      ge = c((e) => {
        e && R(e, q);
      }),
      _e = a(_, Q, z);
    (v(() => {
      Q.current?.checked && U(!0);
    }, [U]),
      v(() => {
        Q.current && (q && X ? z(null) : (Z.current && R(Z.current, q), z(Q.current)));
      }, [X, q, R, z]));
    let ve = m(),
      ye = b({ id: C, implicit: !1, controlRef: Z }),
      be = y ? void 0 : ye,
      xe = le(ee, pe, Q, !y, be),
      Se = {
        role: `radio`,
        "aria-checked": X,
        "aria-required": Y || void 0,
        "aria-readonly": J || void 0,
        "aria-labelledby": xe,
        [oe]: X ? `` : void 0,
        id: y ? ye : ve,
        onKeyDown(e) {
          e.key === `Enter` && e.preventDefault();
        },
        onClick(e) {
          if (e.defaultPrevented || q || J) return;
          e.preventDefault();
          let t = Q.current;
          t &&
            t.dispatchEvent(
              new (u(t).PointerEvent)(`click`, {
                bubbles: !0,
                shiftKey: e.shiftKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
                metaKey: e.metaKey,
              }),
            );
        },
        onFocus(e) {
          e.defaultPrevented || q || J || !M || (Q.current?.click(), fe(!1));
        },
      },
      { getButtonProps: Ce, buttonRef: we } = l({ disabled: q, native: y }),
      Te = {
        type: `radio`,
        ref: _e,
        form: he,
        id: be,
        name: I,
        tabIndex: -1,
        style: I ? ne : x,
        "aria-hidden": !0,
        ...(g === void 0 ? p : { value: i(g) }),
        disabled: q,
        checked: X,
        required: Y,
        readOnly: J,
        onChange(e) {
          if (e.nativeEvent.defaultPrevented || q || J || g === void 0) return;
          let t = d(te, e.nativeEvent);
          t.isCanceled || (H(!0), B(g !== V.initialValue), U(!0), L(g, t));
        },
        onFocus() {
          Z.current?.focus();
        },
      },
      $ = O.useMemo(
        () => ({ ...W, required: Y, disabled: q, readOnly: J, checked: X }),
        [W, q, J, X, Y],
      ),
      Ee = $,
      De = E !== void 0,
      Oe = [t, Z, we, ge],
      ke = [Se, me, F?.getValidationProps ?? p, ae, Ce],
      Ae = T(`span`, e, { enabled: !De, state: $, ref: Oe, props: ke, stateAttributesMapping: j });
    return (0, D.jsxs)(P.Provider, {
      value: Ee,
      children: [
        De
          ? (0, D.jsx)(h, {
              tag: `span`,
              render: n,
              className: r,
              style: w,
              state: $,
              refs: Oe,
              props: ke,
              stateAttributesMapping: j,
            })
          : Ae,
        (0, D.jsx)(`input`, { ...Te, suppressHydrationWarning: !0 }),
      ],
    });
  }),
  L = O.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, keepMounted: a = !1, ...o } = e,
      s = F(),
      c = s.checked,
      { mounted: l, transitionStatus: u, setMounted: d } = ee(c),
      f = { ...s, transitionStatus: u },
      p = O.useRef(null),
      m = a || l,
      h = T(`span`, e, { ref: [t, p], state: f, props: o, stateAttributesMapping: j });
    return (
      _({
        open: c,
        ref: p,
        onComplete() {
          c || d(!1);
        },
      }),
      m ? h : null
    );
  }),
  fe = [C],
  R = O.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i,
        readOnly: a,
        required: o,
        onValueChange: l,
        value: u,
        defaultValue: d,
        form: f,
        name: ee,
        inputRef: p,
        id: h,
        style: _,
        ...v
      } = e,
      {
        setTouched: b,
        setFocused: x,
        shouldValidateOnChange: te,
        validationMode: ne,
        name: S,
        disabled: C,
        state: w,
        validation: T,
        setDirty: oe,
        setFilled: le,
        validityData: ue,
      } = re(),
      { labelId: k } = ie(),
      { clearErrors: A } = ce(),
      j = de(!0),
      N = C || i,
      P = S ?? ee,
      F = m(h),
      [I, L] = y({ controlled: u, default: d, name: `RadioGroup`, state: `value` }),
      [R, z] = O.useState(!1),
      B = c((e, t) => {
        (l?.(e, t), !t.isCanceled && L(e));
      }),
      V = O.useRef(null),
      H = O.useRef(null),
      U = O.useRef(null);
    function W(e) {
      let t;
      return (
        p && (typeof p == `function` ? (t = p(e)) : (p.current = e)),
        (H.current = e),
        (T.inputRef.current = e),
        t
      );
    }
    let G = c((e, t = !1) => {
        e && (t ? V.current === e && (V.current = null) : (V.current ??= e));
      }),
      K = c((e) => {
        if (!e || e.disabled) return;
        U.current ||= e;
        let t = H.current;
        if (e.checked || t == null || t.disabled) return W(e);
      });
    (E(V, F, I ?? null),
      g(I, () => {
        (A(P), oe(I !== ue.initialValue), le(I != null), te() ? T.commit(I) : T.commit(I, !0));
        let e = U.current;
        I == null && e && !e.disabled && W(e);
      }));
    let pe = v[`aria-labelledby`] ?? k ?? j?.legendId,
      me = { ...w, disabled: N ?? !1, required: o ?? !1, readOnly: a ?? !1 },
      q = O.useMemo(
        () => ({
          ...w,
          checkedValue: I,
          disabled: N,
          form: f,
          validation: T,
          name: P,
          readOnly: a,
          registerControlRef: G,
          registerInputRef: K,
          required: o,
          setCheckedValue: B,
          setTouched: z,
          touched: R,
        }),
        [I, N, f, T, w, P, a, G, K, o, B, z, R],
      ),
      J = {
        role: `radiogroup`,
        "aria-required": o || void 0,
        "aria-disabled": N || void 0,
        "aria-readonly": a || void 0,
        "aria-labelledby": pe,
        onFocus() {
          x(!0);
        },
        onBlur(e) {
          ae(e.currentTarget, e.relatedTarget) || (b(!0), x(!1), ne === `onBlur` && T.commit(I));
        },
        onKeyDownCapture(e) {
          e.key.startsWith(`Arrow`) && (b(!0), z(!0), x(!0));
        },
      };
    return (0, D.jsx)(M.Provider, {
      value: q,
      children: (0, D.jsx)(se, {
        render: n,
        className: r,
        style: _,
        state: me,
        props: [J, T.getValidationProps, v],
        refs: [t],
        stateAttributesMapping: s,
        enableHomeAndEndKeys: !1,
        modifierKeys: fe,
      }),
    });
  }),
  z = n();
function B(e) {
  let t = (0, z.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = w(`flex flex-col gap-3`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, D.jsx)(R, { className: i, "data-slot": `radio-group`, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function V(e) {
  let t = (0, z.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = w(
        `relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-full border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-full not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:outline-destructive/48 data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32 dark:focus-visible:aria-invalid:outline-destructive/24 dark:not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [[data-disabled],[data-checked],[aria-invalid]]:shadow-none`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, D.jsx)(L, {
        className: `-inset-px absolute flex size-4.5 items-center justify-center rounded-full before:size-2 before:rounded-full before:bg-primary-foreground data-unchecked:hidden data-checked:bg-primary sm:size-4 sm:before:size-1.5 in-[[data-slot=radio]:focus-visible]:inset-shadow-[0_0_0_3px_var(--background)] in-[[data-slot=radio]:focus-visible]:outline-2 in-[[data-slot=radio]:focus-visible]:outline-solid in-[[data-slot=radio]:focus-visible]:-outline-offset-2 in-[[data-slot=radio]:focus-visible]:outline-inherit`,
        "data-slot": `radio-indicator`,
      })),
      (t[5] = a))
    : (a = t[5]);
  let o;
  return (
    t[6] !== r || t[7] !== i
      ? ((o = (0, D.jsx)(I, { className: i, "data-slot": `radio`, ...r, children: a })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
export { I as i, B as n, L as r, V as t };
//# sourceMappingURL=radio-group-0_879w-T.js.map
