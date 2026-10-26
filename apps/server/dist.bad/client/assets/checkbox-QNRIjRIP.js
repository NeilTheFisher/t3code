import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Ao as i,
  Co as a,
  Er as o,
  Ha as s,
  Ka as c,
  Ma as l,
  Mo as u,
  Oa as d,
  Oo as f,
  Pa as p,
  Rr as ee,
  Ta as m,
  To as h,
  Wa as g,
  Ya as _,
  da as v,
  do as y,
  fa as te,
  jo as ne,
  ko as b,
  t as x,
  wo as re,
  wr as ie,
  xr as ae,
  yr as oe,
} from "./utils-CPoejuy5.js";
import { t as se } from "./FormContext-BF__1yV6.js";
import { t as ce } from "./useAriaLabelledBy-C2yZMJZ0.js";
import { t as le } from "./FieldItemContext-Czp3rpvZ.js";
var S = e(t()),
  ue = S.createContext(void 0);
function de(e = !0) {
  let t = S.useContext(ue);
  if (t === void 0 && !e) throw Error(u(3));
  return t;
}
function fe(e) {
  if (!e) return null;
  for (let t of e.elements) {
    let e = t.tagName;
    if (e === `BUTTON` || e === `INPUT`) {
      let e = t;
      if (e.type === `submit`) return e;
    }
  }
  return null;
}
var C = (function (e) {
  return (
    (e.checked = `data-checked`),
    (e.unchecked = `data-unchecked`),
    (e.indeterminate = `data-indeterminate`),
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
})({});
function pe(e) {
  return S.useMemo(
    () => ({
      checked(t) {
        return e.indeterminate ? {} : t ? { [C.checked]: `` } : { [C.unchecked]: `` };
      },
      ...o,
    }),
    [e.indeterminate],
  );
}
var w = S.createContext(void 0);
function me() {
  let e = S.useContext(w);
  if (e === void 0) throw Error(u(14));
  return e;
}
var T = e(r()),
  he = `data-parent`,
  E = S.forwardRef(function (e, t) {
    let {
        checked: n,
        className: r,
        defaultChecked: a = !1,
        "aria-labelledby": o,
        disabled: u = !1,
        form: d,
        id: m,
        indeterminate: x = !1,
        inputRef: ue,
        name: C,
        onCheckedChange: me,
        parent: E = !1,
        readOnly: D = !1,
        render: ge,
        required: O = !1,
        uncheckedValue: k,
        value: A,
        nativeButton: j = !1,
        style: _e,
        ...ve
      } = e,
      { clearErrors: ye } = se(),
      {
        disabled: be,
        name: xe,
        setDirty: Se,
        setFilled: M,
        setFocused: N,
        setTouched: Ce,
        state: P,
        validationMode: we,
        validityData: Te,
        shouldValidateOnChange: Ee,
        validation: De,
      } = ie(),
      Oe = le(),
      { labelId: ke, controlId: Ae, registerControlId: F, getDescriptionProps: I } = ae(),
      L = de(),
      R = L?.parent,
      z = R && L.allValues,
      B = be || Oe.disabled || L?.disabled || u,
      V = xe ?? C,
      H = A ?? V,
      je = p(),
      Me = p(),
      U = Ae;
    z ? (U = E ? Me : `${R.id}-${H}`) : m && (U = m);
    let W = {};
    z && (E ? (W = L.parent.getParentProps()) : H && (W = L.parent.getChildProps(H)));
    let { checked: Ne = n, indeterminate: G = x, onCheckedChange: Pe, ...Fe } = W,
      K = L?.value,
      Ie = L?.setValue,
      Le = L?.defaultValue,
      q = S.useRef(null),
      J = ne(() => Symbol(`checkbox-control`)),
      Y = S.useRef(!1),
      { getButtonProps: Re, buttonRef: ze } = s({ disabled: B, native: j }),
      X = L?.validation ?? De,
      [Z, Be] = _({
        controlled: H && K && !E ? K.includes(H) : Ne,
        default: H && Le && !E ? Le.includes(H) : a,
        name: `Checkbox`,
        state: `checked`,
      });
    (g(() => {
      F !== b && ((Y.current = !0), F(J.current, U));
    }, [U, F, J]),
      S.useEffect(() => {
        let e = J.current;
        return () => {
          Y.current && F !== b && ((Y.current = !1), F(e, void 0));
        };
      }, [F, J]),
      oe(q, je, Z, void 0, !L));
    let Q = S.useRef(null),
      Ve = i(ue, Q, X.inputRef),
      He = ce(o, ke, Q, !j, U ?? void 0);
    (g(() => {
      Q.current && ((Q.current.indeterminate = G), Z && M(!0));
    }, [Z, G, M]),
      ee(Z, () => {
        (!L || E) && (ye(V), M(Z), Se(Z !== Te.initialValue), Ee() ? X.commit(Z) : X.commit(Z, !0));
      }));
    let Ue = h(
        {
          checked: Z,
          disabled: B,
          form: d,
          name: E ? void 0 : V,
          id: j ? void 0 : (U ?? void 0),
          required: O,
          ref: Ve,
          style: V ? te : v,
          tabIndex: -1,
          type: `checkbox`,
          "aria-hidden": !0,
          onChange(e) {
            if (e.nativeEvent.defaultPrevented) return;
            if (D) {
              e.preventDefault();
              return;
            }
            let t = e.currentTarget.checked,
              n = l(y, e.nativeEvent);
            if ((Pe?.(t, n), me?.(t, n), !n.isCanceled && (Be(t), H && K && Ie && !E && !z))) {
              let e = t ? [...K, H] : K.filter((e) => e !== H);
              Ie(e, n);
            }
          },
          onFocus() {
            q.current?.focus();
          },
        },
        A === void 0 ? f : { value: (L ? Z && A : A) || `` },
        I,
        L ? X.getValidationProps : X.getInputValidationProps,
      ),
      We = z ? !!Ne : Z,
      Ge = (z && G) || x;
    S.useEffect(() => {
      if (!R || !H) return;
      let e = R.disabledStatesRef.current;
      return (
        e.set(H, B),
        () => {
          e.delete(H);
        }
      );
    }, [R, B, H]);
    let $ = S.useMemo(
        () => ({ ...P, checked: We, disabled: B, readOnly: D, required: O, indeterminate: Ge }),
        [P, We, B, D, O, Ge],
      ),
      Ke = pe($),
      qe = re(`span`, e, {
        state: $,
        ref: [ze, q, t, L?.registerControlRef],
        props: [
          {
            id: j ? (U ?? void 0) : je,
            role: `checkbox`,
            "aria-checked": G ? `mixed` : Z,
            "aria-readonly": D || void 0,
            "aria-required": O || void 0,
            "aria-labelledby": He,
            [he]: E ? `` : void 0,
            onFocus() {
              N(!0);
            },
            onBlur() {
              let e = Q.current;
              e && (Ce(!0), N(!1), we === `onBlur` && X.commit(L ? K : e.checked));
            },
            onKeyDown(e) {
              if (e.key !== `Enter` || (e.preventBaseUIHandler(), e.defaultPrevented)) return;
              let t = Q.current?.form ?? null,
                n = e.currentTarget,
                r = e.nativeEvent,
                i = e.preventDefault,
                a = r.preventDefault,
                o = !1;
              ((e.preventDefault = () => {
                ((o = !0), i.call(e));
              }),
                (r.preventDefault = () => {
                  ((o = !0), a.call(r));
                }),
                a.call(r),
                c(n).queueMicrotask(() => {
                  ((e.preventDefault = i), (r.preventDefault = a), o || fe(t)?.click());
                }));
            },
            onClick(e) {
              if (D || B) return;
              e.preventDefault();
              let t = Q.current;
              t &&
                t.dispatchEvent(
                  new (c(t).PointerEvent)(`click`, {
                    bubbles: !0,
                    shiftKey: e.shiftKey,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    metaKey: e.metaKey,
                  }),
                );
            },
          },
          I,
          X.getValidationProps,
          ve,
          Fe,
          Re,
        ],
        stateAttributesMapping: Ke,
      });
    return (0, T.jsxs)(w.Provider, {
      value: $,
      children: [
        qe,
        !Z &&
          !L &&
          V &&
          !E &&
          k !== void 0 &&
          (0, T.jsx)(`input`, { type: `hidden`, form: d, name: V, value: k }),
        (0, T.jsx)(`input`, { ...Ue, suppressHydrationWarning: !0 }),
      ],
    });
  }),
  D = S.forwardRef(function (e, t) {
    let { render: n, className: r, style: i, keepMounted: s = !1, ...c } = e,
      l = me(),
      u = l.checked || l.indeterminate,
      { mounted: f, transitionStatus: p, setMounted: ee } = d(u),
      h = S.useRef(null),
      g = { ...l, transitionStatus: p };
    m({
      open: u,
      ref: h,
      onComplete() {
        u || ee(!1);
      },
    });
    let _ = { ...pe(l), ...a, ...o },
      v = s || f,
      y = re(`span`, e, { ref: [t, h], state: g, stateAttributesMapping: _, props: c });
    return v ? y : null;
  }),
  ge = n(),
  O = `relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-[.25rem] border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[3px] not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:outline-destructive/48 data-disabled:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32 dark:focus-visible:aria-invalid:outline-destructive/24 dark:not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [[data-disabled],[data-checked],[aria-invalid]]:shadow-none`,
  k = `-inset-px absolute flex items-center justify-center rounded-[.25rem] text-primary-foreground data-unchecked:hidden data-checked:bg-primary data-indeterminate:text-foreground in-[[data-slot=checkbox]:focus-visible]:inset-shadow-[0_0_0_3px_var(--background)] in-[[data-slot=checkbox]:focus-visible]:outline-2 in-[[data-slot=checkbox]:focus-visible]:outline-solid in-[[data-slot=checkbox]:focus-visible]:-outline-offset-2 in-[[data-slot=checkbox]:focus-visible]:outline-inherit`;
function A(e) {
  let t = (0, ge.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = x(O, n)), (t[3] = n), (t[4] = i));
  let a;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, T.jsx)(D, { className: k, "data-slot": `checkbox-indicator`, render: j })),
      (t[5] = a))
    : (a = t[5]);
  let o;
  return (
    t[6] !== r || t[7] !== i
      ? ((o = (0, T.jsx)(E, { className: i, "data-slot": `checkbox`, ...r, children: a })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
function j(e, t) {
  return (0, T.jsx)(`span`, {
    ...e,
    children: t.indeterminate
      ? (0, T.jsx)(`svg`, {
          className: `size-3.5 text-current sm:size-3`,
          fill: `none`,
          height: `24`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `3`,
          viewBox: `0 0 24 24`,
          width: `24`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: (0, T.jsx)(`path`, { d: `M5.252 12h13.496` }),
        })
      : (0, T.jsx)(`svg`, {
          className: `size-3.5 text-current sm:size-3`,
          fill: `none`,
          height: `24`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `3`,
          viewBox: `0 0 24 24`,
          width: `24`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: (0, T.jsx)(`path`, { d: `M5.252 12.7 10.2 18.63 18.748 5.37` }),
        }),
  });
}
function _e(e) {
  let t = (0, ge.c)(8),
    { checked: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n ? { "data-checked": `` } : { "data-unchecked": `` }), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, T.jsx)(`svg`, {
        className: `size-3.5 text-current sm:size-3`,
        fill: `none`,
        height: `24`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `3`,
        viewBox: `0 0 24 24`,
        width: `24`,
        xmlns: `http://www.w3.org/2000/svg`,
        children: (0, T.jsx)(`path`, { d: `M5.252 12.7 10.2 18.63 18.748 5.37` }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = (0, T.jsx)(`span`, {
        className: k,
        "data-slot": `checkbox-indicator`,
        ...i,
        children: a,
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] !== i || t[6] !== o
      ? ((s = (0, T.jsx)(`span`, {
          "aria-hidden": !0,
          className: O,
          "data-slot": `checkbox`,
          ...i,
          children: o,
        })),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
export { _e as n, A as t };
//# sourceMappingURL=checkbox-QNRIjRIP.js.map
