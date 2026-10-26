import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./eye-DIOzx3kY.js";
import {
  A_ as a,
  Dr as o,
  Sx as s,
  Zb as c,
  _r as l,
  ab as u,
  hr as d,
  k_ as f,
  ox as p,
  t as m,
  tS as h,
} from "./utils-CPoejuy5.js";
import { n as g, x as _ } from "./runtime-CSDWbn8h.js";
import { i as v, n as ee } from "./radio-group-0_879w-T.js";
import { t as y } from "./preview-BuXyUmSo.js";
import { r as te, t as ne } from "./alert-fX5rpTMS.js";
import { t as b } from "./runtimeModeConfig-7PXEgGfJ.js";
import { t as x } from "./AuthSurfaceShell-o7M6DX0Z.js";
var S = n(),
  C = e(t(), 1),
  w = e(r(), 1),
  T = {
    "read-only": {
      label: `Read only`,
      description: `Read projects and threads. Cannot start, message or change anything.`,
      icon: i,
    },
    ...b,
  };
function re(e) {
  return y(new URL(`http://${e}`).hostname);
}
var E = `Could not reach this environment. Try again.`,
  D = u(f);
function ie(e) {
  return g(
    _.pipe(
      p(e),
      s((e) =>
        typeof e == `object` && e && `redirectTo` in e
          ? { kind: `redirect`, url: e.redirectTo }
          : { kind: `ok`, value: e },
      ),
      c((e) => h({ kind: `error`, message: D(e) ? e.message : E })),
    ),
  ).catch(() => ({ kind: `error`, message: E }));
}
function ae() {
  return Object.fromEntries(new URL(window.location.href).searchParams);
}
function oe(e, t) {
  return e.csrfToken !== void 0 && (e.oneClickAccess ?? []).includes(t);
}
function O() {
  let e = (0, S.c)(71),
    [t] = (0, C.useState)(ae),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { status: `loading` }), (e[0] = n))
    : (n = e[0]);
  let [r, i] = (0, C.useState)(n),
    [s, c] = (0, C.useState)(`read-only`),
    [u, f] = (0, C.useState)(``),
    [p, m] = (0, C.useState)(``),
    [h, g] = (0, C.useState)(null),
    _,
    v;
  (e[1] === t
    ? ((_ = e[2]), (v = e[3]))
    : ((_ = () => {
        let e = !1;
        return (
          ie((e) => e.mcpOAuth.approval({ payload: t })).then((t) => {
            e ||
              (t.kind === `redirect`
                ? window.location.replace(t.url)
                : i(
                    t.kind === `error`
                      ? { status: `invalid`, message: t.message }
                      : { status: `ready`, details: t.value },
                  ));
          }),
          () => {
            e = !0;
          }
        );
      }),
      (v = [t]),
      (e[1] = t),
      (e[2] = _),
      (e[3] = v)),
    (0, C.useEffect)(_, v));
  let y;
  e[4] !== s || e[5] !== t || e[6] !== r.details || e[7] !== r.status || e[8] !== u
    ? ((y = async (e) => {
        if (r.status !== `ready`) return;
        (g(e), m(``));
        let { csrfToken: n } = r.details,
          i =
            e === `deny`
              ? { _tag: `deny` }
              : n !== void 0 && oe(r.details, s)
                ? { _tag: `browser-session`, access: s, csrfToken: n }
                : { _tag: `pairing-code`, access: s, code: u.trim() },
          a = await ie((e) => e.mcpOAuth.decision({ payload: { authorization: t, decision: i } }));
        a.kind === `redirect`
          ? window.location.replace(a.url)
          : (g(null), m(a.kind === `error` ? a.message : `The sign-in could not continue.`));
      }),
      (e[4] = s),
      (e[5] = t),
      (e[6] = r.details),
      (e[7] = r.status),
      (e[8] = u),
      (e[9] = y))
    : (y = e[9]);
  let b = y;
  if (r.status === `loading`) {
    let t;
    return (
      e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, w.jsxs)(x, {
            children: [
              (0, w.jsx)(k, {
                title: `Checking the sign-in request`,
                description: `One moment while this environment verifies the agent's request.`,
              }),
              (0, w.jsx)(d, { className: `mt-6`, size: `lg`, tone: `muted` }),
            ],
          })),
          (e[10] = t))
        : (t = e[10]),
      t
    );
  }
  if (r.status === `invalid`) {
    let t;
    e[11] === r.message
      ? (t = e[12])
      : ((t = (0, w.jsx)(k, { title: `This sign-in cannot continue`, description: r.message })),
        (e[11] = r.message),
        (e[12] = t));
    let n;
    e[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, w.jsx)(`p`, {
          className: `mt-4 text-sm text-muted-foreground`,
          children: `Close this page and start the sign-in again from your agent.`,
        })),
        (e[13] = n))
      : (n = e[13]);
    let i;
    return (
      e[14] === t
        ? (i = e[15])
        : ((i = (0, w.jsxs)(x, { children: [t, n] })), (e[14] = t), (e[15] = i)),
      i
    );
  }
  let { details: T } = r,
    E;
  e[16] !== s || e[17] !== T
    ? ((E = oe(T, s)), (e[16] = s), (e[17] = T), (e[18] = E))
    : (E = e[18]);
  let D = E,
    O;
  e[19] !== D || e[20] !== u || e[21] !== h
    ? ((O = h === null && (D || u.trim().length > 0)),
      (e[19] = D),
      (e[20] = u),
      (e[21] = h),
      (e[22] = O))
    : (O = e[22]);
  let A = O,
    j = `Connect ${T.clientName}`,
    M;
  e[23] === T.environmentHost
    ? (M = e[24])
    : ((M = (0, w.jsxs)(w.Fragment, {
        children: [
          `This agent wants to use the threads in every project on`,
          ` `,
          (0, w.jsx)(`span`, {
            className: `font-medium text-foreground`,
            children: T.environmentHost,
          }),
          `.`,
        ],
      })),
      (e[23] = T.environmentHost),
      (e[24] = M));
  let N;
  e[25] !== j || e[26] !== M
    ? ((N = (0, w.jsx)(k, { title: j, description: M })), (e[25] = j), (e[26] = M), (e[27] = N))
    : (N = e[27]);
  let P;
  e[28] === T.redirectHost
    ? (P = e[29])
    : ((P = (0, w.jsx)(`p`, {
        className: `mt-2 text-xs text-muted-foreground`,
        children: re(T.redirectHost)
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                `The name is chosen by the agent. Approval returns to `,
                T.redirectHost,
                ` on the computer that opened this page. Only approve a sign-in you just started.`,
              ],
            })
          : (0, w.jsxs)(w.Fragment, {
              children: [
                `The name is chosen by the agent. Approval gives access to whoever runs`,
                ` `,
                (0, w.jsx)(`span`, {
                  className: `font-medium text-foreground`,
                  children: T.redirectHost,
                }),
                `. Only approve a sign-in you just started there.`,
              ],
            }),
      })),
      (e[28] = T.redirectHost),
      (e[29] = P));
  let F;
  e[30] !== A || e[31] !== b
    ? ((F = (e) => {
        (e.preventDefault(), A && b(`approve`));
      }),
      (e[30] = A),
      (e[31] = b),
      (e[32] = F))
    : (F = e[32]);
  let I;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, w.jsx)(`span`, {
        id: `connect-agent-access-label`,
        className: `text-sm font-medium`,
        children: `What it may do`,
      })),
      (e[33] = I))
    : (I = e[33]);
  let L;
  e[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => c(e)), (e[34] = L))
    : (L = e[34]);
  let R;
  e[35] === s
    ? (R = e[36])
    : ((R = a.literals.map((e) => (0, w.jsx)(se, { access: e, selected: e === s }, e))),
      (e[35] = s),
      (e[36] = R));
  let z;
  e[37] !== s || e[38] !== R
    ? ((z = (0, w.jsx)(ee, {
        "aria-labelledby": `connect-agent-access-label`,
        value: s,
        onValueChange: L,
        children: R,
      })),
      (e[37] = s),
      (e[38] = R),
      (e[39] = z))
    : (z = e[39]);
  let B;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, w.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Beyond read only, it can start, message and stop threads, and none of them can run with more than the mode you pick.`,
      })),
      (e[40] = B))
    : (B = e[40]);
  let V;
  e[41] === z
    ? (V = e[42])
    : ((V = (0, w.jsxs)(`div`, { className: `space-y-2`, children: [I, z, B] })),
      (e[41] = z),
      (e[42] = V));
  let H;
  e[43] !== D || e[44] !== u || e[45] !== h
    ? ((H = D
        ? null
        : (0, w.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, w.jsx)(`label`, {
                className: `text-sm font-medium`,
                htmlFor: `connect-agent-pairing-code`,
                children: `Pairing code`,
              }),
              (0, w.jsx)(l, {
                id: `connect-agent-pairing-code`,
                autoCapitalize: `none`,
                autoComplete: `one-time-code`,
                autoCorrect: `off`,
                disabled: h !== null,
                nativeInput: !0,
                onChange: (e) => f(e.currentTarget.value),
                placeholder: `Paste a one-time pairing code`,
                spellCheck: !1,
                value: u,
              }),
              (0, w.jsxs)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: [
                  `Create one in Settings → Connections, or run `,
                  (0, w.jsx)(`code`, { children: `t3 auth pairing create` }),
                  ` on this machine.`,
                ],
              }),
            ],
          })),
      (e[43] = D),
      (e[44] = u),
      (e[45] = h),
      (e[46] = H))
    : (H = e[46]);
  let U;
  e[47] === p
    ? (U = e[48])
    : ((U = p
        ? (0, w.jsx)(ne, { variant: `error`, children: (0, w.jsx)(te, { children: p }) })
        : null),
      (e[47] = p),
      (e[48] = U));
  let W = !A,
    G = h === `approve` ? `Approving…` : `Approve`,
    K;
  e[49] !== W || e[50] !== G
    ? ((K = (0, w.jsx)(o, { disabled: W, type: `submit`, children: G })),
      (e[49] = W),
      (e[50] = G),
      (e[51] = K))
    : (K = e[51]);
  let q = h !== null,
    J;
  e[52] === b ? (J = e[53]) : ((J = () => void b(`deny`)), (e[52] = b), (e[53] = J));
  let Y = h === `deny` ? `Denying…` : `Deny`,
    X;
  e[54] !== q || e[55] !== J || e[56] !== Y
    ? ((X = (0, w.jsx)(o, {
        disabled: q,
        onClick: J,
        type: `button`,
        variant: `outline`,
        children: Y,
      })),
      (e[54] = q),
      (e[55] = J),
      (e[56] = Y),
      (e[57] = X))
    : (X = e[57]);
  let Z;
  e[58] !== K || e[59] !== X
    ? ((Z = (0, w.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [K, X] })),
      (e[58] = K),
      (e[59] = X),
      (e[60] = Z))
    : (Z = e[60]);
  let Q;
  e[61] !== F || e[62] !== V || e[63] !== H || e[64] !== U || e[65] !== Z
    ? ((Q = (0, w.jsxs)(`form`, {
        className: `mt-6 space-y-5`,
        onSubmit: F,
        children: [V, H, U, Z],
      })),
      (e[61] = F),
      (e[62] = V),
      (e[63] = H),
      (e[64] = U),
      (e[65] = Z),
      (e[66] = Q))
    : (Q = e[66]);
  let $;
  return (
    e[67] !== Q || e[68] !== N || e[69] !== P
      ? (($ = (0, w.jsxs)(x, { children: [N, P, Q] })),
        (e[67] = Q),
        (e[68] = N),
        (e[69] = P),
        (e[70] = $))
      : ($ = e[70]),
    $
  );
}
function k(e) {
  let t = (0, S.c)(8),
    { title: n, description: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, w.jsx)(`p`, {
        className: `text-3xs font-semibold tracking-widest text-primary uppercase`,
        children: `Agent sign-in`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n
    ? (a = t[2])
    : ((a = (0, w.jsx)(`h1`, {
        className: `mt-2 text-2xl font-semibold tracking-tight sm:text-3xl`,
        children: n,
      })),
      (t[1] = n),
      (t[2] = a));
  let o;
  t[3] === r
    ? (o = t[4])
    : ((o = (0, w.jsx)(`p`, {
        className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, w.jsxs)(w.Fragment, { children: [i, a, o] })), (t[5] = a), (t[6] = o), (t[7] = s))
      : (s = t[7]),
    s
  );
}
function se(e) {
  let t = (0, S.c)(19),
    { access: n, selected: r } = e,
    { label: i, description: a, icon: o } = T[n],
    s = r
      ? `border-primary bg-background ring-2 ring-inset ring-primary/25 dark:border-transparent dark:bg-primary/10 dark:ring-1 dark:ring-primary/30`
      : `border-border bg-background hover:bg-muted/50 dark:border-transparent dark:bg-white/[0.035] dark:hover:bg-accent`,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = m(
        `flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-left outline-none transition-[background-color,border-color,box-shadow]`,
        `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
        s,
      )),
      (t[0] = s),
      (t[1] = c));
  let l = r ? `text-primary` : `text-muted-foreground`,
    u;
  t[2] === l ? (u = t[3]) : ((u = m(`mt-0.5 size-4 shrink-0`, l)), (t[2] = l), (t[3] = u));
  let d;
  t[4] !== o || t[5] !== u
    ? ((d = (0, w.jsx)(o, { "aria-hidden": !0, className: u })), (t[4] = o), (t[5] = u), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === i
    ? (f = t[8])
    : ((f = (0, w.jsx)(`span`, {
        className: `block text-sm font-medium text-foreground`,
        children: i,
      })),
      (t[7] = i),
      (t[8] = f));
  let p;
  t[9] === a
    ? (p = t[10])
    : ((p = (0, w.jsx)(`span`, { className: `block text-xs text-muted-foreground`, children: a })),
      (t[9] = a),
      (t[10] = p));
  let h;
  t[11] !== f || t[12] !== p
    ? ((h = (0, w.jsxs)(`span`, { className: `min-w-0`, children: [f, p] })),
      (t[11] = f),
      (t[12] = p),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== n || t[15] !== c || t[16] !== d || t[17] !== h
      ? ((g = (0, w.jsxs)(v, { value: n, className: c, children: [d, h] })),
        (t[14] = n),
        (t[15] = c),
        (t[16] = d),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var A = O;
export { A as component };
//# sourceMappingURL=connect-agent-j3oRCl9N.js.map
