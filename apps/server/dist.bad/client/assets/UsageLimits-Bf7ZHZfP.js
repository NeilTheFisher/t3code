import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { r as i } from "./search-BrluOr7L.js";
import { t as a } from "./triangle-alert-Ca4wixX0.js";
import { t as o } from "./external-link-DV7LH7eG.js";
import { n as s, r as c, t as l } from "./trending-up-i12cjwza.js";
import {
  Bn as u,
  Dr as d,
  P_ as f,
  Vn as p,
  Wn as m,
  Wv as h,
  jc as g,
  t as _,
} from "./utils-CPoejuy5.js";
import { q as v, y } from "./useSettings-N-JG2LFZ.js";
import { m as b } from "./server-3D32GveR.js";
import { a as x, r as S } from "./session-0UrRHIau.js";
import { t as C } from "./use-atom-command-DGAuqAck.js";
import { t as w } from "./localApi-CWy6n-K6.js";
import { u as T } from "./timestampFormat-BBUHLb6E.js";
import { t as E } from "./observeResize-SVLLrLKP.js";
import { g as D } from "./Icons-Blot99re.js";
import { i as O, t as k } from "./alert-fX5rpTMS.js";
import {
  G as A,
  Gi as j,
  Hi as M,
  J as N,
  Ji as P,
  K as F,
  Ki as I,
  U as L,
  Ui as ee,
  W as te,
  Wi as ne,
  X as re,
  Y as R,
  Z as z,
  as as ie,
  es as ae,
  fi as B,
  ns as oe,
  nt as V,
  qi as se,
  rs as ce,
  rt as H,
  tt as le,
  ui as U,
} from "./main-BZa0O6xN.js";
import { t as ue } from "./RedactedSensitiveText-24HhEgVA.js";
var W = n(),
  G = e(t(), 1),
  K = e(r(), 1);
function q(e) {
  let [t = ``, n = ``] = e.split(`@`);
  return `${t[0] ?? ``}${n[0] ?? ``}`.toUpperCase() || `?`;
}
function de(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) t = (t * 31 + e.charCodeAt(n)) | 0;
  return Math.abs(t) % 360;
}
function fe(e) {
  let t = (0, W.c)(13),
    { email: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = de(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === n ? (a = t[3]) : ((a = q(n)), (t[2] = n), (t[3] = a));
  let o = `Account ${a}`,
    s = `oklch(0.85 0.08 ${i})`,
    c = `oklch(0.35 0.1 ${i})`,
    l;
  t[4] !== s || t[5] !== c
    ? ((l = { backgroundColor: s, color: c }), (t[4] = s), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n ? (u = t[8]) : ((u = q(n)), (t[7] = n), (t[8] = u));
  let d;
  return (
    t[9] !== o || t[10] !== l || t[11] !== u
      ? ((d = (0, K.jsx)(`span`, {
          role: `img`,
          "aria-label": o,
          className: `inline-flex size-4 shrink-0 items-center justify-center rounded-full text-3xs leading-none font-semibold`,
          style: l,
          children: u,
        })),
        (t[9] = o),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function pe(e) {
  let t = (0, W.c)(13),
    { account: n, className: r } = e;
  if (n.redeem) {
    let e = n.driver,
      i;
    t[0] !== n.displayName || t[1] !== n.driver
      ? ((i = n.displayName ?? B.get(n.driver)?.label ?? String(n.driver)),
        (t[0] = n.displayName),
        (t[1] = n.driver),
        (t[2] = i))
      : (i = t[2]);
    let a = n.accentColor,
      o = !!n.displayName,
      s;
    t[3] === r ? (s = t[4]) : ((s = _(`size-5`, r)), (t[3] = r), (t[4] = s));
    let c;
    return (
      t[5] !== n.accentColor || t[6] !== n.driver || t[7] !== i || t[8] !== o || t[9] !== s
        ? ((c = (0, K.jsx)(U, {
            driverKind: e,
            displayName: i,
            accentColor: a,
            showBadge: o,
            indicatorBackground: `var(--popover)`,
            className: s,
            iconClassName: `size-4 text-foreground/80`,
          })),
          (t[5] = n.accentColor),
          (t[6] = n.driver),
          (t[7] = i),
          (t[8] = o),
          (t[9] = s),
          (t[10] = c))
        : (c = t[10]),
      c
    );
  }
  let i;
  return (
    t[11] === n.email
      ? (i = t[12])
      : ((i = n.email ? (0, K.jsx)(fe, { email: n.email }) : null), (t[11] = n.email), (t[12] = i)),
    i
  );
}
function J(e) {
  let t = (0, W.c)(15),
    { account: n, className: r } = e;
  if (n.displayName) {
    let e;
    return (
      t[0] !== n.displayName || t[1] !== r
        ? ((e = (0, K.jsx)(`span`, { className: r, children: n.displayName })),
          (t[0] = n.displayName),
          (t[1] = r),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.email) {
    let e;
    t[3] === r
      ? (e = t[4])
      : ((e = _(`inline-flex min-w-0 items-center`, r)), (t[3] = r), (t[4] = e));
    let i;
    t[5] === n.email
      ? (i = t[6])
      : ((i = (0, K.jsx)(fe, { email: n.email })), (t[5] = n.email), (t[6] = i));
    let a;
    return (
      t[7] !== e || t[8] !== i
        ? ((a = (0, K.jsx)(`span`, { className: e, children: i })),
          (t[7] = e),
          (t[8] = i),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }
  let i;
  t[10] === n.driver
    ? (i = t[11])
    : ((i = B.get(n.driver)?.label ?? String(n.driver)), (t[10] = n.driver), (t[11] = i));
  let a;
  return (
    t[12] !== r || t[13] !== i
      ? ((a = (0, K.jsx)(`span`, { className: r, children: i })),
        (t[12] = r),
        (t[13] = i),
        (t[14] = a))
      : (a = t[14]),
    a
  );
}
function Y(e) {
  let t = (0, W.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, K.jsx)(`span`, { className: `text-muted-foreground`, children: n })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, K.jsx)(`span`, { className: `min-w-0 text-foreground tabular-nums`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, K.jsxs)(`div`, {
          className: `grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-3`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function me(e) {
  let t = (0, W.c)(64),
    { account: n, window: r, reset: i, now: a, redeem: o, onRedeem: s } = e,
    c = y(ge),
    l;
  t[0] === r ? (l = t[1]) : ((l = H(r)), (t[0] = r), (t[1] = l));
  let u = l,
    f;
  t[2] !== a || t[3] !== r ? ((f = V(r, a)), (t[2] = a), (t[3] = r), (t[4] = f)) : (f = t[4]);
  let p = f,
    m,
    h,
    g,
    _,
    v,
    b,
    x;
  if (t[5] !== n || t[6] !== a || t[7] !== o || t[8] !== u || t[9] !== c || t[10] !== r) {
    let e = z(r, a),
      i;
    t[18] !== n.environments || t[19] !== n.sourceLabel
      ? ((i = n.environments.length > 0 ? n.environments.map(he).join(`, `) : n.sourceLabel),
        (t[18] = n.environments),
        (t[19] = n.sourceLabel),
        (t[20] = i))
      : (i = t[20]);
    let s = i;
    ((m = o && n.limits.resetCredits?.availableCount ? n.limits.resetCredits : null),
      (v = `flex w-72 max-w-[calc(100vw-3rem)] flex-col gap-2.5 text-xs`));
    let l;
    t[21] === n ? (l = t[22]) : ((l = (0, K.jsx)(pe, { account: n })), (t[21] = n), (t[22] = l));
    let d = n.displayName ?? B.get(n.driver)?.label ?? n.driver,
      f;
    t[23] === d
      ? (f = t[24])
      : ((f = (0, K.jsx)(`span`, { className: `truncate`, children: d })),
        (t[23] = d),
        (t[24] = f));
    let p;
    t[25] !== l || t[26] !== f
      ? ((p = (0, K.jsxs)(`span`, {
          className: `flex items-center gap-2 text-sm font-medium text-foreground`,
          children: [l, f],
        })),
        (t[25] = l),
        (t[26] = f),
        (t[27] = p))
      : (p = t[27]);
    let y;
    (t[28] === n.email
      ? (y = t[29])
      : ((y = n.email
          ? (0, K.jsx)(ue, {
              value: n.email,
              ariaLabel: `Toggle account email visibility`,
              revealTooltip: `Click to reveal email`,
              hideTooltip: `Click to hide email`,
              className: `w-fit`,
            })
          : null),
        (t[28] = n.email),
        (t[29] = y)),
      t[30] !== p || t[31] !== y
        ? ((b = (0, K.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-0.5`,
            children: [p, y],
          })),
          (t[30] = p),
          (t[31] = y),
          (t[32] = b))
        : (b = t[32]));
    let S;
    t[33] === n.plan
      ? (S = t[34])
      : ((S = n.plan ? (0, K.jsx)(Y, { label: `Plan`, children: n.plan }) : null),
        (t[33] = n.plan),
        (t[34] = S));
    let C;
    (t[35] !== n.environments.length || t[36] !== s
      ? ((C = s
          ? (0, K.jsx)(Y, { label: n.environments.length > 0 ? `Signed in` : `Via`, children: s })
          : null),
        (t[35] = n.environments.length),
        (t[36] = s),
        (t[37] = C))
      : (C = t[37]),
      t[38] !== S || t[39] !== C
        ? ((x = (0, K.jsxs)(`div`, {
            className: `flex flex-col gap-1 border-t border-border/60 pt-2.5`,
            children: [S, C],
          })),
          (t[38] = S),
          (t[39] = C),
          (t[40] = x))
        : (x = t[40]),
      (h = `flex flex-col gap-1 border-t border-border/60 pt-2.5`),
      t[41] === u
        ? (g = t[42])
        : ((g = (0, K.jsxs)(Y, { label: `Left`, children: [u, `%`] })), (t[41] = u), (t[42] = g)),
      (_ = r.resetsAt
        ? (0, K.jsxs)(Y, {
            label: `Resets`,
            children: [T(r.resetsAt, c, a), e ? ` · ${e.replace(`resets in `, `in `)}` : ``],
          })
        : null),
      (t[5] = n),
      (t[6] = a),
      (t[7] = o),
      (t[8] = u),
      (t[9] = c),
      (t[10] = r),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = b),
      (t[17] = x));
  } else
    ((m = t[11]), (h = t[12]), (g = t[13]), (_ = t[14]), (v = t[15]), (b = t[16]), (x = t[17]));
  let S;
  t[43] === p
    ? (S = t[44])
    : ((S =
        p === null ? null : (0, K.jsxs)(Y, { label: `Even pace`, children: [p, `% left by now`] })),
      (t[43] = p),
      (t[44] = S));
  let C;
  t[45] === i
    ? (C = t[46])
    : ((C =
        i && i.restoresPercent > 0
          ? (0, K.jsxs)(Y, { label: `Restores`, children: [`+`, i.restoresPercent, `% of pool`] })
          : null),
      (t[45] = i),
      (t[46] = C));
  let w;
  t[47] !== C || t[48] !== h || t[49] !== g || t[50] !== _ || t[51] !== S
    ? ((w = (0, K.jsxs)(`div`, { className: h, children: [g, _, S, C] })),
      (t[47] = C),
      (t[48] = h),
      (t[49] = g),
      (t[50] = _),
      (t[51] = S),
      (t[52] = w))
    : (w = t[52]);
  let E;
  t[53] !== m || t[54] !== a || t[55] !== s || t[56] !== o
    ? ((E =
        m && o
          ? (0, K.jsx)(`div`, {
              className: `border-t border-border/60 pt-2.5 text-muted-foreground`,
              children: (0, K.jsxs)(`span`, {
                className: `flex items-center gap-3`,
                children: [
                  (0, K.jsx)(`span`, { className: `tabular-nums`, children: $(m, a, !0) }),
                  (0, K.jsx)(d, {
                    size: `xs`,
                    variant: `outline`,
                    disabled: o.busy || !o.canManageProviders,
                    className: `ms-auto`,
                    onClick: s,
                    children: o.busy ? `Using…` : `Use reset`,
                  }),
                ],
              }),
            })
          : null),
      (t[53] = m),
      (t[54] = a),
      (t[55] = s),
      (t[56] = o),
      (t[57] = E))
    : (E = t[57]);
  let D;
  return (
    t[58] !== w || t[59] !== E || t[60] !== v || t[61] !== b || t[62] !== x
      ? ((D = (0, K.jsxs)(`div`, { className: v, children: [b, x, w, E] })),
        (t[58] = w),
        (t[59] = E),
        (t[60] = v),
        (t[61] = b),
        (t[62] = x),
        (t[63] = D))
      : (D = t[63]),
    D
  );
}
function he(e) {
  return e.label;
}
function ge(e) {
  return e.timestampFormat;
}
var X = (0, G.createContext)(null);
function _e(e) {
  let t = (0, W.c)(21),
    { handle: n, actions: r, payload: i, pools: a, now: o } = e,
    s;
  if (t[0] !== i.account || t[1] !== i.redeem || t[2] !== i.window || t[3] !== a) {
    let e;
    (t[5] !== i.account || t[6] !== i.redeem || t[7] !== i.window
      ? ((e = (e) =>
          R(e).some((e) =>
            e.members.some(
              (e) =>
                e.account.key === i.account.key &&
                e.window.id === i.window.id &&
                e.window.kind === i.window.kind &&
                !!e.account.redeem == !!i.redeem,
            ),
          )),
        (t[5] = i.account),
        (t[6] = i.redeem),
        (t[7] = i.window),
        (t[8] = e))
      : (e = t[8]),
      (s = a.some(e)),
      (t[0] = i.account),
      (t[1] = i.redeem),
      (t[2] = i.window),
      (t[3] = a),
      (t[4] = s));
  } else s = t[4];
  let c = s,
    l,
    u;
  (t[9] !== r || t[10] !== c || t[11] !== n
    ? ((l = () => {
        c || (n.close(), r.current?.unmount());
      }),
      (u = [c, n, r]),
      (t[9] = r),
      (t[10] = c),
      (t[11] = n),
      (t[12] = l),
      (t[13] = u))
    : ((l = t[12]), (u = t[13])),
    (0, G.useLayoutEffect)(l, u));
  let d;
  t[14] !== n || t[15] !== i.redeem
    ? ((d = () => {
        (n.close(), i.redeem?.setConfirming(!0));
      }),
      (t[14] = n),
      (t[15] = i.redeem),
      (t[16] = d))
    : (d = t[16]);
  let f;
  return (
    t[17] !== o || t[18] !== i || t[19] !== d
      ? ((f = (0, K.jsx)(ce, {
          side: `top`,
          sideOffset: 6,
          children: (0, K.jsx)(me, { ...i, now: o, onRedeem: d }),
        })),
        (t[17] = o),
        (t[18] = i),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function ve(e) {
  let t = (0, W.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ account: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = n.redeem
          ? (0, K.jsx)(ye, { account: n, redeemAt: n.redeem, ...r })
          : (0, K.jsx)(be, { account: n, redeem: null, ...r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function ye(e) {
  let t = (0, W.c)(21),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ redeemAt: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = We(r.environmentId, r.input),
    a;
  t[3] !== n || t[4] !== i
    ? ((a = (0, K.jsx)(be, { redeem: i, ...n })), (t[3] = n), (t[4] = i), (t[5] = a))
    : (a = t[5]);
  let o;
  t[6] === i ? (o = t[7]) : ((o = () => void i.redeem()), (t[6] = i), (t[7] = o));
  let s = !i.canManageProviders,
    c;
  t[8] !== i.confirming || t[9] !== i.setConfirming || t[10] !== o || t[11] !== s
    ? ((c = (0, K.jsx)(Ge, {
        open: i.confirming,
        onOpenChange: i.setConfirming,
        onConfirm: o,
        disabled: s,
      })),
      (t[8] = i.confirming),
      (t[9] = i.setConfirming),
      (t[10] = o),
      (t[11] = s),
      (t[12] = c))
    : (c = t[12]);
  let l;
  t[13] !== n || t[14] !== i.busy || t[15] !== i.status
    ? ((l =
        i.busy || i.status
          ? (0, K.jsxs)(`span`, {
              role: `status`,
              className: `col-span-full text-xs text-muted-foreground`,
              children: [
                (0, K.jsx)(J, { account: n.account, className: `font-medium text-foreground` }),
                ` `,
                i.busy ? `Using reset credit…` : i.status,
              ],
            })
          : null),
      (t[13] = n),
      (t[14] = i.busy),
      (t[15] = i.status),
      (t[16] = l))
    : (l = t[16]);
  let u;
  return (
    t[17] !== a || t[18] !== c || t[19] !== l
      ? ((u = (0, K.jsxs)(K.Fragment, { children: [a, c, l] })),
        (t[17] = a),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u))
      : (u = t[20]),
    u
  );
}
function be(e) {
  let t = (0, W.c)(89),
    {
      account: n,
      window: r,
      reset: i,
      redeem: a,
      refillPercent: o,
      color: s,
      now: l,
      index: u,
      showAccountName: d,
    } = e,
    f = (0, G.use)(X) ?? void 0,
    p;
  t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== r
    ? ((p = { account: n, window: r, reset: i, redeem: a }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = r),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h = H(r),
    g;
  t[5] !== l || t[6] !== r ? ((g = V(r, l)), (t[5] = l), (t[6] = r), (t[7] = g)) : (g = t[7]);
  let _ = g,
    [v, y] = ze(_),
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j;
  if (
    t[8] !== n ||
    t[9] !== s ||
    t[10] !== u ||
    t[11] !== l ||
    t[12] !== y ||
    t[13] !== m ||
    t[14] !== f ||
    t[15] !== o ||
    t[16] !== h ||
    t[17] !== i ||
    t[18] !== v ||
    t[19] !== d ||
    t[20] !== _ ||
    t[21] !== r
  ) {
    let e = z(r, l),
      a = n.limits.resetCredits?.availableCount ?? 0;
    ((b = ie), (k = f), (A = m), (j = !0));
    let p = y?.gappedTrack,
      g;
    t[34] !== u || t[35] !== p
      ? ((g = { gridColumn: u, gridRow: 1, ...p }), (t[34] = u), (t[35] = p), (t[36] = g))
      : (g = t[36]);
    let M;
    t[37] !== n.displayName || t[38] !== n.driver || t[39] !== n.email
      ? ((M = n.displayName ?? (n.email ? q(n.email) : n.driver)),
        (t[37] = n.displayName),
        (t[38] = n.driver),
        (t[39] = n.email),
        (t[40] = M))
      : (M = t[40]);
    let N = `${M}: ${h}% left${e ? `, ${e}` : ``}${_ === null ? `` : `, ${_}% of the window left`}${a ? `, ${a} reset ${a === 1 ? `credit` : `credits`} banked` : ``}`;
    t[41] !== v || t[42] !== g || t[43] !== N
      ? ((x = (0, K.jsx)(`button`, {
          ref: v,
          type: `button`,
          style: g,
          "aria-label": N,
          className: `relative h-5 min-w-0 cursor-pointer rounded-md bg-muted text-start outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[popup-open]:ring-1 data-[popup-open]:ring-inset data-[popup-open]:ring-border @2xl/pool:h-8`,
        })),
        (t[41] = v),
        (t[42] = g),
        (t[43] = N),
        (t[44] = x))
      : (x = t[44]);
    let P = y?.gap,
      F = `${h}%`,
      I;
    t[45] !== s || t[46] !== F
      ? ((I = (0, K.jsx)(`div`, {
          "aria-hidden": !0,
          className: `absolute inset-y-0 left-0 rounded-md opacity-35`,
          style: { width: F, backgroundColor: s },
        })),
        (t[45] = s),
        (t[46] = F),
        (t[47] = I))
      : (I = t[47]);
    let L;
    (t[48] !== s || t[49] !== o || t[50] !== h || t[51] !== i
      ? ((L =
          h < 100 && i && o > 0
            ? (0, K.jsx)(`div`, {
                "aria-hidden": !0,
                className: `absolute inset-y-0 right-0 opacity-20`,
                style: {
                  width: `${Math.min(100 - h, o)}%`,
                  backgroundImage: `repeating-linear-gradient(135deg, ${s} 0 1px, transparent 1px 5px)`,
                },
              })
            : null),
        (t[48] = s),
        (t[49] = o),
        (t[50] = h),
        (t[51] = i),
        (t[52] = L))
      : (L = t[52]),
      t[53] !== P || t[54] !== I || t[55] !== L
        ? ((S = (0, K.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-0 overflow-hidden rounded-md`,
            children: (0, K.jsxs)(`div`, {
              className: `absolute inset-0`,
              style: P,
              children: [I, L],
            }),
          })),
          (t[53] = P),
          (t[54] = I),
          (t[55] = L),
          (t[56] = S))
        : (S = t[56]),
      t[57] === y
        ? (C = t[58])
        : ((C = y
            ? (0, K.jsx)(`span`, {
                "aria-hidden": !0,
                className: `absolute inset-y-0.5 w-0.5 -translate-x-1/2 rounded-full bg-foreground`,
                style: y.tick,
              })
            : null),
          (t[57] = y),
          (t[58] = C)),
      t[59] === u
        ? (w = t[60])
        : ((w = (0, K.jsx)(`span`, {
            "aria-hidden": !0,
            className: `absolute inset-0 flex items-center justify-center overflow-hidden rounded-md text-3xs leading-none font-semibold text-foreground/80 tabular-nums @2xl/pool:hidden`,
            children: u,
          })),
          (t[59] = u),
          (t[60] = w)),
      (T = `relative hidden h-full min-w-0 items-center gap-1.5 overflow-hidden rounded-md px-2 text-xs @2xl/pool:flex`),
      t[61] !== n || t[62] !== d
        ? ((E = d
            ? (0, K.jsx)(J, {
                account: n,
                className: `min-w-0 truncate font-medium text-foreground`,
              })
            : null),
          (t[61] = n),
          (t[62] = d),
          (t[63] = E))
        : (E = t[63]),
      t[64] === h
        ? (D = t[65])
        : ((D = (0, K.jsxs)(`span`, {
            className: `shrink-0 font-semibold text-foreground tabular-nums`,
            children: [h, `%`],
          })),
          (t[64] = h),
          (t[65] = D)),
      (O =
        e || a
          ? (0, K.jsxs)(`span`, {
              className: `ms-auto flex min-w-0 items-center gap-1.5 overflow-hidden rounded-sm bg-background/85 px-1.5 py-0.5 text-2xs whitespace-nowrap text-foreground tabular-nums`,
              children: [
                e?.replace(`resets in `, `↻ `) ?? ``,
                a
                  ? (0, K.jsxs)(K.Fragment, {
                      children: [
                        e
                          ? (0, K.jsx)(`span`, {
                              "aria-hidden": !0,
                              className: `text-muted-foreground`,
                              children: `·`,
                            })
                          : null,
                        (0, K.jsxs)(`span`, {
                          "aria-hidden": !0,
                          className: `inline-flex items-center gap-0.5 font-semibold`,
                          children: [(0, K.jsx)(c, { className: `size-3`, "aria-hidden": !0 }), a],
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[8] = n),
      (t[9] = s),
      (t[10] = u),
      (t[11] = l),
      (t[12] = y),
      (t[13] = m),
      (t[14] = f),
      (t[15] = o),
      (t[16] = h),
      (t[17] = i),
      (t[18] = v),
      (t[19] = d),
      (t[20] = _),
      (t[21] = r),
      (t[22] = b),
      (t[23] = x),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E),
      (t[29] = D),
      (t[30] = O),
      (t[31] = k),
      (t[32] = A),
      (t[33] = j));
  } else
    ((b = t[22]),
      (x = t[23]),
      (S = t[24]),
      (C = t[25]),
      (w = t[26]),
      (T = t[27]),
      (E = t[28]),
      (D = t[29]),
      (O = t[30]),
      (k = t[31]),
      (A = t[32]),
      (j = t[33]));
  let M;
  t[66] !== T || t[67] !== E || t[68] !== D || t[69] !== O
    ? ((M = (0, K.jsxs)(`div`, { className: T, children: [E, D, O] })),
      (t[66] = T),
      (t[67] = E),
      (t[68] = D),
      (t[69] = O),
      (t[70] = M))
    : (M = t[70]);
  let N;
  t[71] !== b ||
  t[72] !== x ||
  t[73] !== S ||
  t[74] !== C ||
  t[75] !== w ||
  t[76] !== M ||
  t[77] !== k ||
  t[78] !== A ||
  t[79] !== j
    ? ((N = (0, K.jsxs)(b, {
        handle: k,
        payload: A,
        openOnHover: j,
        render: x,
        children: [S, C, w, M],
      })),
      (t[71] = b),
      (t[72] = x),
      (t[73] = S),
      (t[74] = C),
      (t[75] = w),
      (t[76] = M),
      (t[77] = k),
      (t[78] = A),
      (t[79] = j),
      (t[80] = N))
    : (N = t[80]);
  let P;
  t[81] !== s || t[82] !== u || t[83] !== l || t[84] !== m
    ? ((P = (0, K.jsx)(xe, { payload: m, color: s, now: l, index: u })),
      (t[81] = s),
      (t[82] = u),
      (t[83] = l),
      (t[84] = m),
      (t[85] = P))
    : (P = t[85]);
  let F;
  return (
    t[86] !== N || t[87] !== P
      ? ((F = (0, K.jsxs)(K.Fragment, { children: [N, P] })), (t[86] = N), (t[87] = P), (t[88] = F))
      : (F = t[88]),
    F
  );
}
function xe(e) {
  let t = (0, W.c)(56),
    { payload: n, color: r, now: i, index: a } = e,
    o = (0, G.use)(X) ?? void 0,
    { account: s, window: l } = n,
    u;
  t[0] === l ? (u = t[1]) : ((u = H(l)), (t[0] = l), (t[1] = u));
  let f = u,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T;
  if (
    t[2] !== s ||
    t[3] !== r ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== n ||
    t[7] !== o ||
    t[8] !== f ||
    t[9] !== l
  ) {
    ((h = z(l, i)), (m = s.limits.resetCredits?.availableCount ?? 0), (p = ie), (b = o), (x = n));
    let e = a + 1;
    (t[23] === e
      ? (S = t[24])
      : ((S = { gridColumn: `1 / -1`, gridRow: e }), (t[23] = e), (t[24] = S)),
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((C = (0, K.jsx)(d, { variant: `ghost`, size: `compact` })), (t[25] = C))
        : (C = t[25]),
      (w = `min-w-0 @2xl/pool:hidden`));
    let c;
    t[26] === r
      ? (c = t[27])
      : ((c = (0, K.jsx)(`span`, {
          "aria-hidden": !0,
          className: `absolute inset-0 rounded-sm opacity-35`,
          style: { backgroundColor: r },
        })),
        (t[26] = r),
        (t[27] = c));
    let u;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, K.jsx)(`span`, { className: `sr-only`, children: `Segment ` })), (t[28] = u))
      : (u = t[28]);
    let E;
    (t[29] === a
      ? (E = t[30])
      : ((E = (0, K.jsx)(`span`, { className: `relative`, children: a })),
        (t[29] = a),
        (t[30] = E)),
      t[31] !== c || t[32] !== E
        ? ((T = (0, K.jsxs)(`span`, {
            className: `relative inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-3xs leading-none font-semibold text-foreground/80 tabular-nums`,
            children: [c, u, E],
          })),
          (t[31] = c),
          (t[32] = E),
          (t[33] = T))
        : (T = t[33]),
      t[34] === s
        ? (g = t[35])
        : ((g = (0, K.jsx)(J, {
            account: s,
            className: `min-w-0 truncate font-medium text-foreground`,
          })),
          (t[34] = s),
          (t[35] = g)),
      t[36] === f
        ? (_ = t[37])
        : ((_ = (0, K.jsxs)(`span`, {
            className: `shrink-0 font-semibold text-foreground tabular-nums`,
            children: [f, `%`],
          })),
          (t[36] = f),
          (t[37] = _)),
      (v = `ms-auto flex shrink-0 items-center gap-1.5 text-2xs text-muted-foreground tabular-nums`),
      (y = h?.replace(`resets in `, `↻ `) ?? ``),
      (t[2] = s),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = n),
      (t[7] = o),
      (t[8] = f),
      (t[9] = l),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T));
  } else
    ((p = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]),
      (_ = t[14]),
      (v = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]),
      (C = t[20]),
      (w = t[21]),
      (T = t[22]));
  let E;
  t[38] !== m || t[39] !== h
    ? ((E = m
        ? (0, K.jsxs)(K.Fragment, {
            children: [
              h ? (0, K.jsx)(`span`, { "aria-hidden": !0, children: `·` }) : null,
              (0, K.jsxs)(`span`, {
                "aria-hidden": !0,
                className: `inline-flex items-center gap-0.5 font-semibold text-foreground`,
                children: [(0, K.jsx)(c, { className: `size-3`, "aria-hidden": !0 }), m],
              }),
              (0, K.jsxs)(`span`, {
                className: `sr-only`,
                children: [m, ` reset `, m === 1 ? `credit` : `credits`, ` banked`],
              }),
            ],
          })
        : null),
      (t[38] = m),
      (t[39] = h),
      (t[40] = E))
    : (E = t[40]);
  let D;
  t[41] !== E || t[42] !== v || t[43] !== y
    ? ((D = (0, K.jsxs)(`span`, { className: v, children: [y, E] })),
      (t[41] = E),
      (t[42] = v),
      (t[43] = y),
      (t[44] = D))
    : (D = t[44]);
  let O;
  return (
    t[45] !== p ||
    t[46] !== g ||
    t[47] !== _ ||
    t[48] !== D ||
    t[49] !== b ||
    t[50] !== x ||
    t[51] !== S ||
    t[52] !== C ||
    t[53] !== w ||
    t[54] !== T
      ? ((O = (0, K.jsxs)(p, {
          handle: b,
          payload: x,
          style: S,
          render: C,
          className: w,
          children: [T, g, _, D],
        })),
        (t[45] = p),
        (t[46] = g),
        (t[47] = _),
        (t[48] = D),
        (t[49] = b),
        (t[50] = x),
        (t[51] = S),
        (t[52] = C),
        (t[53] = w),
        (t[54] = T),
        (t[55] = O))
      : (O = t[55]),
    O
  );
}
function Se(e) {
  let t = (0, W.c)(17),
    { pool: n, color: r, now: i } = e,
    a;
  t[0] === n.resets ? (a = t[1]) : ((a = new Map(n.resets.map(Ce))), (t[0] = n.resets), (t[1] = a));
  let o = a,
    s = `repeat(${n.columns.length}, minmax(0, 1fr))`,
    c;
  t[2] === s ? (c = t[3]) : ((c = { gridTemplateColumns: s }), (t[2] = s), (t[3] = c));
  let l;
  if (t[4] !== r || t[5] !== i || t[6] !== n.columns || t[7] !== o) {
    let e;
    (t[9] !== r || t[10] !== i || t[11] !== n.columns.length || t[12] !== o
      ? ((e = (e, t) =>
          e.window
            ? (0, K.jsx)(
                ve,
                {
                  account: e.account,
                  window: e.window,
                  reset: o.get(e.account.key),
                  refillPercent: e.refillPercent,
                  color: r,
                  now: i,
                  index: t + 1,
                  showAccountName: n.columns.length > 1,
                },
                e.account.key,
              )
            : null),
        (t[9] = r),
        (t[10] = i),
        (t[11] = n.columns.length),
        (t[12] = o),
        (t[13] = e))
      : (e = t[13]),
      (l = n.columns.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = n.columns),
      (t[7] = o),
      (t[8] = l));
  } else l = t[8];
  let u;
  return (
    t[14] !== c || t[15] !== l
      ? ((u = (0, K.jsx)(`div`, {
          className: `@container/pool min-w-0`,
          children: (0, K.jsx)(`div`, { className: `grid gap-x-1 gap-y-1`, style: c, children: l }),
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function Ce(e) {
  return [e.member.account.key, e];
}
function we(e) {
  let t = (0, W.c)(31),
    { pool: n, color: r, now: i, label: a, description: o } = e,
    s;
  t[0] === n.resets ? (s = t[1]) : ((s = n.resets.find(Te)), (t[0] = n.resets), (t[1] = s));
  let c = s,
    l = a ?? n.label,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = (0, K.jsx)(`span`, { className: `text-sm font-medium text-foreground`, children: l })),
      (t[2] = l),
      (t[3] = u));
  let d;
  t[4] === n.remainingPercent
    ? (d = t[5])
    : ((d = (0, K.jsxs)(`span`, {
        className: `text-3xl font-semibold text-foreground tabular-nums`,
        children: [n.remainingPercent, `%`],
      })),
      (t[4] = n.remainingPercent),
      (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(`span`, { children: `left` })), (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === n.pace
    ? (p = t[8])
    : ((p = n.pace ? (0, K.jsx)(Le, { pace: n.pace }) : null), (t[7] = n.pace), (t[8] = p));
  let m;
  t[9] === p
    ? (m = t[10])
    : ((m = (0, K.jsxs)(`span`, {
        className: `inline-flex items-center gap-2 text-sm text-muted-foreground`,
        children: [f, p],
      })),
      (t[9] = p),
      (t[10] = m));
  let h;
  t[11] !== d || t[12] !== m
    ? ((h = (0, K.jsxs)(`span`, { className: `flex items-baseline gap-2`, children: [d, m] })),
      (t[11] = d),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== c || t[15] !== n.columns
    ? ((g =
        c && n.columns.length > 1
          ? (0, K.jsxs)(`span`, {
              className: `text-xs font-medium text-foreground tabular-nums`,
              children: [`↻ +`, c.restoresPercent, `%`],
            })
          : null),
      (t[14] = c),
      (t[15] = n.columns),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== u || t[18] !== h || t[19] !== g
    ? ((_ = (0, K.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [u, h, g] })),
      (t[17] = u),
      (t[18] = h),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] !== r || t[22] !== i || t[23] !== n
    ? ((v = (0, K.jsx)(Se, { pool: n, color: r, now: i })),
      (t[21] = r),
      (t[22] = i),
      (t[23] = n),
      (t[24] = v))
    : (v = t[24]);
  let y;
  t[25] === o
    ? (y = t[26])
    : ((y = o
        ? (0, K.jsx)(`p`, { className: `text-xs text-muted-foreground md:col-span-2`, children: o })
        : null),
      (t[25] = o),
      (t[26] = y));
  let b;
  return (
    t[27] !== _ || t[28] !== v || t[29] !== y
      ? ((b = (0, K.jsxs)(`div`, {
          className: `grid items-center gap-x-6 gap-y-3 rounded-lg border border-border/60 p-4 md:grid-cols-[11rem_minmax(0,1fr)]`,
          children: [_, v, y],
        })),
        (t[27] = _),
        (t[28] = v),
        (t[29] = y),
        (t[30] = b))
      : (b = t[30]),
    b
  );
}
function Te(e) {
  return e.restoresPercent > 0;
}
function Ee(e) {
  let t = (0, W.c)(19),
    { pool: n, now: r } = e,
    i;
  t[0] === n.driver ? (i = t[1]) : ((i = Ie(n.driver)), (t[0] = n.driver), (t[1] = i));
  let a = i,
    o;
  t[2] === n.driver
    ? (o = t[3])
    : ((o = B.get(n.driver)?.label ?? String(n.driver)), (t[2] = n.driver), (t[3] = o));
  let s = o,
    c;
  if (t[4] !== a || t[5] !== s || t[6] !== r || t[7] !== n) {
    let e = R(n),
      i;
    t[9] !== s || t[10] !== n.driver
      ? ((i = (0, K.jsx)(U, {
          driverKind: n.driver,
          displayName: s,
          indicatorBackground: `var(--background)`,
          className: `size-5`,
          iconClassName: `size-4 text-foreground/80`,
        })),
        (t[9] = s),
        (t[10] = n.driver),
        (t[11] = i))
      : (i = t[11]);
    let o;
    t[12] !== s || t[13] !== i
      ? ((o = (0, K.jsxs)(`h2`, {
          className: `flex items-center gap-2 text-sm font-medium text-foreground`,
          children: [i, s],
        })),
        (t[12] = s),
        (t[13] = i),
        (t[14] = o))
      : (o = t[14]);
    let l;
    (t[15] !== a || t[16] !== r || t[17] !== n.driver
      ? ((l = (e) => {
          let t = n.driver === `cursor` ? N(e.id) : void 0;
          return (0, K.jsx)(
            we,
            { pool: e, color: a, now: r, label: t?.label, description: t?.description },
            `${e.kind}:${e.id}`,
          );
        }),
        (t[15] = a),
        (t[16] = r),
        (t[17] = n.driver),
        (t[18] = l))
      : (l = t[18]),
      (c = (0, K.jsxs)(`section`, { className: `flex flex-col gap-3`, children: [o, e.map(l)] })),
      (t[4] = a),
      (t[5] = s),
      (t[6] = r),
      (t[7] = n),
      (t[8] = c));
  } else c = t[8];
  return c;
}
function De(e) {
  let t = (0, W.c)(37),
    { presentations: n, now: r, cursorPrompt: i } = e,
    [a] = (0, G.useState)(je),
    o = (0, G.useRef)(null),
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== i || t[1] !== r || t[2] !== n || t[3] !== a) {
    let e = F(te(n), r),
      m;
    (t[11] === n ? (m = t[12]) : ((m = A(n)), (t[11] = n), (t[12] = m)), (s = m));
    let h = L(n),
      g = Math.max(e.findIndex(Ae), e.findIndex(ke)) + 1;
    ((c = `flex flex-col gap-8`),
      (l =
        e.length === 0 && s.length === 0 && !i && h.length === 0
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `No provider on the selected environments reports subscription limits.`,
            })
          : null));
    let _;
    t[13] !== i || t[14] !== g || t[15] !== r
      ? ((_ = (e, t) =>
          (0, K.jsxs)(
            G.Fragment,
            { children: [t === g ? i : null, (0, K.jsx)(Ee, { pool: e, now: r })] },
            e.driver,
          )),
        (t[13] = i),
        (t[14] = g),
        (t[15] = r),
        (t[16] = _))
      : (_ = t[16]);
    let v = e.map(_);
    t[17] !== a || t[18] !== v
      ? ((u = (0, K.jsx)(X, { value: a, children: v })), (t[17] = a), (t[18] = v), (t[19] = u))
      : (u = t[19]);
    let y;
    (t[20] !== r || t[21] !== e || t[22] !== a
      ? ((y = (t) => {
          let { payload: n } = t;
          return n ? (0, K.jsx)(_e, { handle: a, actions: o, payload: n, pools: e, now: r }) : null;
        }),
        (t[20] = r),
        (t[21] = e),
        (t[22] = a),
        (t[23] = y))
      : (y = t[23]),
      t[24] !== a || t[25] !== y
        ? ((d = (0, K.jsx)(ae, { handle: a, actionsRef: o, children: y })),
          (t[24] = a),
          (t[25] = y),
          (t[26] = d))
        : (d = t[26]),
      (f = g === e.length ? i : null),
      (p = h.map(Oe)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p));
  } else ((s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]), (f = t[9]), (p = t[10]));
  let m;
  t[27] === s ? (m = t[28]) : ((m = (0, K.jsx)(Me, { notices: s })), (t[27] = s), (t[28] = m));
  let h;
  return (
    t[29] !== c ||
    t[30] !== l ||
    t[31] !== u ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== p ||
    t[35] !== m
      ? ((h = (0, K.jsxs)(`div`, { className: c, children: [l, u, d, f, p, m] })),
        (t[29] = c),
        (t[30] = l),
        (t[31] = u),
        (t[32] = d),
        (t[33] = f),
        (t[34] = p),
        (t[35] = m),
        (t[36] = h))
      : (h = t[36]),
    h
  );
}
function Oe(e) {
  return (0, K.jsxs)(
    `section`,
    {
      className: `flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4`,
      children: [
        (0, K.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 items-center gap-3`,
          children: [
            e.url === `https://chatgpt.com/#settings/Usage`
              ? (0, K.jsx)(D, { className: `size-5 shrink-0`, "aria-hidden": `true` })
              : null,
            (0, K.jsxs)(`div`, {
              className: `min-w-0 space-y-1`,
              children: [
                (0, K.jsx)(`h2`, { className: `text-sm font-medium`, children: e.label }),
                e.url === `https://chatgpt.com/#settings/Usage`
                  ? (0, K.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `View usage in ChatGPT with your connected account.`,
                    })
                  : e.message
                    ? (0, K.jsx)(`p`, {
                        className: `max-w-xl text-xs text-muted-foreground`,
                        children: e.message,
                      })
                    : null,
              ],
            }),
          ],
        }),
        (0, K.jsxs)(d, {
          variant: `ghost-muted`,
          size: `xs`,
          onClick: () => void w().shell.openExternal(e.url),
          children: [
            `Manage usage`,
            (0, K.jsx)(o, { className: `size-3.5`, "aria-hidden": `true` }),
          ],
        }),
      ],
    },
    e.url,
  );
}
function ke(e) {
  return e.driver === `claudeAgent`;
}
function Ae(e) {
  return e.driver === `codex`;
}
function je() {
  return oe();
}
function Me(e) {
  let t = (0, W.c)(5),
    { notices: n } = e;
  if (n.length === 0) return null;
  let r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, K.jsx)(a, {})), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = n.map(Ne)), (t[1] = n), (t[2] = i));
  let o;
  return (
    t[3] === i
      ? (o = t[4])
      : ((o = (0, K.jsxs)(k, {
          variant: `warning`,
          controlAlignment: `first-line`,
          children: [r, i],
        })),
        (t[3] = i),
        (t[4] = o)),
    o
  );
}
function Ne(e) {
  return (0, K.jsx)(O, { className: `break-words`, children: e }, e);
}
var Z = {
    codex: { label: `Codex`, color: `var(--contrast-foreground)`, driverKind: h.make(`codex`) },
    claude: { label: `Claude Code`, color: `#d97757`, driverKind: h.make(`claudeAgent`) },
    grok: {
      label: `Grok Build`,
      color: `color-mix(in oklab, var(--contrast-foreground) 72%, var(--background))`,
      driverKind: h.make(`grok`),
    },
    cursor: { label: `Cursor`, color: `#8b8b8b`, driverKind: h.make(`cursor`) },
    opencode: { label: `OpenCode`, color: `#5b9bbd`, driverKind: h.make(`opencode`) },
    antigravity: { label: `Antigravity`, color: `#8c7bd1`, driverKind: h.make(`antigravity`) },
    pi: { label: `Pi`, color: `#4d9f8a`, driverKind: h.make(`pi`) },
    muse: { label: `Muse Code`, color: `#0866ff`, driverKind: h.make(`muse`) },
  },
  Pe = Object.keys(Z);
function Fe(e) {
  let t = new Set(e.filter((e) => e.totalTokens > 0 || e.costUsd > 0).map((e) => e.provider));
  return Pe.filter((e) => t.has(e));
}
var Q = {
  ahead: { label: `Ahead of pace: spending faster than the window elapses`, icon: l },
  on: { label: `On pace with the window`, icon: i },
  under: { label: `Under pace: headroom left for the rest of the window`, icon: s },
};
function Ie(e) {
  return Object.values(Z).find((t) => t.driverKind === e)?.color ?? `var(--foreground)`;
}
function Le(e) {
  let t = (0, W.c)(12),
    { pace: n } = e,
    r = Q[n].icon,
    i = Q[n],
    a;
  t[0] === i.label
    ? (a = t[1])
    : ((a = (0, K.jsx)(`span`, {
        role: `img`,
        "aria-label": i.label,
        className: `inline-flex text-muted-foreground`,
      })),
      (t[0] = i.label),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, K.jsx)(r, { className: `size-3.5`, "aria-hidden": !0 })), (t[2] = r), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, K.jsx)(m, { render: a, children: o })), (t[4] = a), (t[5] = o), (t[6] = s))
    : (s = t[6]);
  let c = Q[n],
    l;
  t[7] === c.label
    ? (l = t[8])
    : ((l = (0, K.jsx)(p, { side: `top`, children: c.label })), (t[7] = c.label), (t[8] = l));
  let d;
  return (
    t[9] !== s || t[10] !== l
      ? ((d = (0, K.jsxs)(u, { children: [s, l] })), (t[9] = s), (t[10] = l), (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Re(e) {
  if (e === null) return null;
  let t = `clamp(3px, ${e}%, calc(100% - 3px))`,
    [n, r] = [`calc(${t} - 3px)`, `calc(${t} + 3px)`],
    [i, a] = [`-1px`, `calc(100% + 1px)`];
  return {
    tick: { left: t },
    gap: {
      clipPath: `polygon(${i} ${i}, ${n} ${i}, ${n} ${a}, ${r} ${a}, ${r} ${i}, ${a} ${i}, ${a} ${a}, ${i} ${a})`,
    },
    gappedTrack: {
      backgroundColor: `transparent`,
      backgroundImage: `linear-gradient(to right, var(--color-muted) ${n}, transparent ${n}, transparent ${r}, var(--color-muted) ${r})`,
    },
  };
}
function ze(e) {
  let t = (0, W.c)(8),
    [n, r] = (0, G.useState)(null),
    [i, a] = (0, G.useState)(!1),
    o,
    s;
  (t[0] === n
    ? ((o = t[1]), (s = t[2]))
    : ((o = () => {
        if (!n) return;
        let e = () => a(n.getBoundingClientRect().width >= 6);
        return (e(), E(n, e));
      }),
      (s = [n]),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s)),
    (0, G.useLayoutEffect)(o, s));
  let c;
  t[3] !== i || t[4] !== e
    ? ((c = i ? Re(e) : null), (t[3] = i), (t[4] = e), (t[5] = c))
    : (c = t[5]);
  let l;
  return (t[6] === c ? (l = t[7]) : ((l = [r, c]), (t[6] = c), (t[7] = l)), l);
}
function Be(e) {
  let t = (0, W.c)(41),
    { color: n, window: r, now: i } = e,
    a = y(Ve),
    o = H(r),
    s;
  t[0] !== i || t[1] !== r ? ((s = V(r, i)), (t[0] = i), (t[1] = r), (t[2] = s)) : (s = t[2]);
  let c = s,
    [l, d] = ze(c),
    f;
  t[3] !== i || t[4] !== r ? ((f = z(r, i)), (t[3] = i), (t[4] = r), (t[5] = f)) : (f = t[5]);
  let h = f,
    g;
  t[6] !== i || t[7] !== a || t[8] !== r.resetsAt
    ? ((g = r.resetsAt ? T(r.resetsAt, a, i) : null),
      (t[6] = i),
      (t[7] = a),
      (t[8] = r.resetsAt),
      (t[9] = g))
    : (g = t[9]);
  let _ = g,
    v = `${r.label}: ${o}% left${c === null ? `` : `, ${c}% of the window left`}${h ? `, ${h}` : ``}`,
    b;
  t[10] !== l || t[11] !== v
    ? ((b = (0, K.jsx)(`div`, {
        ref: l,
        role: `img`,
        "aria-label": v,
        tabIndex: 0,
        className: `relative h-6 cursor-default rounded-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,
      })),
      (t[10] = l),
      (t[11] = v),
      (t[12] = b))
    : (b = t[12]);
  let x = d?.gap,
    S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, K.jsx)(`div`, {
        className: `absolute inset-x-0 inset-y-1.5 rounded-full bg-muted`,
      })),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] !== n || t[15] !== o
    ? ((C =
        o > 0
          ? (0, K.jsx)(`div`, {
              className: `absolute inset-y-1.5 left-0 rounded-full`,
              style: { width: `${o}%`, backgroundColor: n },
            })
          : null),
      (t[14] = n),
      (t[15] = o),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] !== x || t[18] !== C
    ? ((w = (0, K.jsxs)(`div`, { className: `absolute inset-0`, style: x, children: [S, C] })),
      (t[17] = x),
      (t[18] = C),
      (t[19] = w))
    : (w = t[19]);
  let E;
  t[20] === d
    ? (E = t[21])
    : ((E = d
        ? (0, K.jsx)(`span`, {
            "aria-hidden": !0,
            className: `absolute inset-y-1 w-0.5 -translate-x-1/2 rounded-full bg-foreground`,
            style: d.tick,
          })
        : null),
      (t[20] = d),
      (t[21] = E));
  let D;
  t[22] !== b || t[23] !== w || t[24] !== E
    ? ((D = (0, K.jsxs)(m, { render: b, children: [w, E] })),
      (t[22] = b),
      (t[23] = w),
      (t[24] = E),
      (t[25] = D))
    : (D = t[25]);
  let O = c === null ? `` : ` · ${c}% of the window left`,
    k;
  t[26] !== o || t[27] !== O
    ? ((k = (0, K.jsxs)(`span`, { className: `text-foreground`, children: [o, `% left`, O] })),
      (t[26] = o),
      (t[27] = O),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] === c
    ? (A = t[30])
    : ((A =
        c === null
          ? null
          : (0, K.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `The line is where even spending would be.`,
            })),
      (t[29] = c),
      (t[30] = A));
  let j;
  t[31] !== _ || t[32] !== h
    ? ((j = _
        ? (0, K.jsxs)(`span`, {
            className: `text-muted-foreground`,
            children: [`Resets `, _, h ? ` · ${h}` : ``],
          })
        : null),
      (t[31] = _),
      (t[32] = h),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] !== k || t[35] !== A || t[36] !== j
    ? ((M = (0, K.jsx)(p, {
        side: `top`,
        children: (0, K.jsxs)(`div`, { className: `flex flex-col gap-0.5`, children: [k, A, j] }),
      })),
      (t[34] = k),
      (t[35] = A),
      (t[36] = j),
      (t[37] = M))
    : (M = t[37]);
  let N;
  return (
    t[38] !== D || t[39] !== M
      ? ((N = (0, K.jsxs)(u, { children: [D, M] })), (t[38] = D), (t[39] = M), (t[40] = N))
      : (N = t[40]),
    N
  );
}
function Ve(e) {
  return e.timestampFormat;
}
function He(e) {
  let t = (0, W.c)(12),
    { driver: n, windows: r, now: i, compact: a } = e,
    o = a !== void 0 && a,
    s;
  t[0] === n ? (s = t[1]) : ((s = Ie(n)), (t[0] = n), (t[1] = s));
  let c = s,
    l = o
      ? `grid grid-cols-[minmax(0,9rem)_minmax(3rem,1fr)_auto] gap-x-3 gap-y-0.5`
      : `grid grid-cols-[11rem_minmax(0,1fr)_7rem] gap-x-4 gap-y-1`,
    u;
  if (t[2] !== c || t[3] !== i || t[4] !== r) {
    let e;
    (t[6] !== c || t[7] !== i
      ? ((e = (e) => {
          let t = le(e, i),
            n = z(e, i);
          return (0, K.jsxs)(
            G.Fragment,
            {
              children: [
                (0, K.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2 text-xs`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `truncate text-muted-foreground`,
                      children: e.label,
                    }),
                    (0, K.jsxs)(`span`, {
                      className: `ms-auto shrink-0 font-medium text-foreground tabular-nums`,
                      children: [H(e), `% left`],
                    }),
                  ],
                }),
                (0, K.jsx)(Be, { color: c, window: e, now: i }),
                (0, K.jsxs)(`span`, {
                  className: `flex items-center gap-2 text-xs whitespace-nowrap text-muted-foreground tabular-nums`,
                  children: [
                    t ? (0, K.jsx)(Le, { pace: t }) : null,
                    (0, K.jsx)(`span`, { className: `ms-auto shrink-0`, children: n ?? `` }),
                  ],
                }),
              ],
            },
            e.id,
          );
        }),
        (t[6] = c),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (u = r.map(e)),
      (t[2] = c),
      (t[3] = i),
      (t[4] = r),
      (t[5] = u));
  } else u = t[5];
  let d;
  return (
    t[9] !== l || t[10] !== u
      ? ((d = (0, K.jsx)(`div`, { className: l, children: u })),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
var Ue = {
  reset: `Reset applied. Your windows have cleared.`,
  nothingToReset: `Nothing to reset right now.`,
  noCredit: `No reset credit left.`,
  alreadyRedeemed: `That credit was already redeemed.`,
};
function We(e, t) {
  let n = (0, W.c)(11),
    r = x(e, f),
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { reportFailure: !1 }), (n[0] = i))
    : (i = n[0]);
  let a = C(b.consumeResetCredit, i),
    [o, s] = (0, G.useState)(!1),
    [c, l] = (0, G.useState)(!1),
    [u, d] = (0, G.useState)(null),
    p;
  n[1] !== a || n[2] !== e || n[3] !== t
    ? ((p = async () => {
        if ((s(!1), !S(e, `providers:manage`))) return;
        (l(!0), d(null));
        let n = await a({ environmentId: e, input: t });
        (l(!1),
          n._tag === `Success`
            ? d(n.value.warning ?? Ue[n.value.outcome])
            : d(
                `error` in n.cause && n.cause.error instanceof Error
                  ? n.cause.error.message
                  : `Could not use the reset credit.`,
              ));
      }),
      (n[1] = a),
      (n[2] = e),
      (n[3] = t),
      (n[4] = p))
    : (p = n[4]);
  let m = p,
    h;
  return (
    n[5] !== c || n[6] !== r || n[7] !== o || n[8] !== m || n[9] !== u
      ? ((h = {
          canManageProviders: r,
          confirming: o,
          setConfirming: s,
          busy: c,
          status: u,
          redeem: m,
        }),
        (n[5] = c),
        (n[6] = r),
        (n[7] = o),
        (n[8] = m),
        (n[9] = u),
        (n[10] = h))
      : (h = n[10]),
    h
  );
}
function Ge(e) {
  let t = (0, W.c)(9),
    { open: n, onOpenChange: r, onConfirm: i, disabled: a } = e,
    o = a !== void 0 && a,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsxs)(I, {
        children: [
          (0, K.jsx)(P, { children: `Use a reset credit?` }),
          (0, K.jsx)(ne, {
            children: `This redeems one credit on your account and clears the current rate-limit windows. It cannot be undone.`,
          }),
        ],
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, K.jsx)(ee, { render: (0, K.jsx)(d, { variant: `outline` }), children: `Cancel` })),
      (t[1] = c))
    : (c = t[1]);
  let l;
  t[2] !== o || t[3] !== i
    ? ((l = (0, K.jsxs)(se, {
        children: [
          s,
          (0, K.jsxs)(j, {
            children: [c, (0, K.jsx)(d, { disabled: o, onClick: i, children: `Use credit` })],
          }),
        ],
      })),
      (t[2] = o),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== r || t[6] !== n || t[7] !== l
      ? ((u = (0, K.jsx)(M, { open: n, onOpenChange: r, children: l })),
        (t[5] = r),
        (t[6] = n),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function $(e, t, n = !1) {
  let r = e.nextExpiresAt ? re(Date.parse(e.nextExpiresAt) - t) : null;
  return e.availableCount === 0
    ? `No reset credits banked`
    : n
      ? `${e.availableCount} banked${r ? ` · expires in ${r}` : ``}`
      : `${e.availableCount} ${e.availableCount === 1 ? `reset credit` : `reset credits`} banked${r ? ` · next expires in ${r}` : ``}`;
}
function Ke(e) {
  let t = (0, W.c)(25),
    { environmentId: n, input: r, credits: i, now: a } = e,
    {
      canManageProviders: o,
      confirming: s,
      setConfirming: c,
      busy: l,
      status: u,
      redeem: f,
    } = We(n, r);
  if (i.availableCount === 0 && u === null) return null;
  let p;
  t[0] !== i || t[1] !== a ? ((p = $(i, a)), (t[0] = i), (t[1] = a), (t[2] = p)) : (p = t[2]);
  let m;
  t[3] === p
    ? (m = t[4])
    : ((m = (0, K.jsx)(`span`, { className: `tabular-nums`, children: p })),
      (t[3] = p),
      (t[4] = m));
  let h;
  t[5] !== l || t[6] !== o || t[7] !== i.availableCount || t[8] !== n || t[9] !== c
    ? ((h =
        i.availableCount > 0
          ? (0, K.jsx)(d, {
              size: `xs`,
              variant: `outline`,
              disabled: l || !o,
              onClick: () => {
                S(n, `providers:manage`) && c(!0);
              },
              children: l ? `Using…` : `Use reset`,
            })
          : null),
      (t[5] = l),
      (t[6] = o),
      (t[7] = i.availableCount),
      (t[8] = n),
      (t[9] = c),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === u
    ? (g = t[12])
    : ((g = u ? (0, K.jsx)(`span`, { className: `text-foreground`, children: u }) : null),
      (t[11] = u),
      (t[12] = g));
  let _;
  t[13] === f ? (_ = t[14]) : ((_ = () => void f()), (t[13] = f), (t[14] = _));
  let v = !o,
    y;
  t[15] !== s || t[16] !== c || t[17] !== _ || t[18] !== v
    ? ((y = (0, K.jsx)(Ge, { open: s, onOpenChange: c, onConfirm: _, disabled: v })),
      (t[15] = s),
      (t[16] = c),
      (t[17] = _),
      (t[18] = v),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== m || t[21] !== h || t[22] !== g || t[23] !== y
      ? ((b = (0, K.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground`,
          children: [m, h, g, y],
        })),
        (t[20] = m),
        (t[21] = h),
        (t[22] = g),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function qe(e) {
  let t = (0, W.c)(13),
    { selectedEnvironmentIds: n, hiddenProviders: r, now: i, cursorPrompt: a } = e,
    o = g(v.presentationsWithProvidersAtom),
    s;
  t[0] === r ? (s = t[1]) : ((s = new Set([...r].map(Je))), (t[0] = r), (t[1] = s));
  let c = s,
    l;
  t[2] === c ? (l = t[3]) : ((l = (e) => !c.has(e)), (t[2] = c), (t[3] = l));
  let u = l,
    d;
  t[4] !== c || t[5] !== u || t[6] !== o || t[7] !== n
    ? ((d = new Map(
        [...o].flatMap((e) => {
          let [t, r] = e;
          if (n !== null && !n.has(t)) return [];
          let i = r.serverConfig;
          return c.size === 0 || i === null
            ? [[t, r]]
            : [
                [
                  t,
                  {
                    ...r,
                    serverConfig: {
                      ...i,
                      providers: i.providers.filter((e) => u(e.driver)),
                      usageLimitSources: i.usageLimitSources?.flatMap((e) => {
                        let t = e.accounts.filter((e) => u(e.driver));
                        return t.length === 0 && e.accounts.length > 0
                          ? []
                          : [{ ...e, accounts: t }];
                      }),
                    },
                  },
                ],
              ];
        }),
      )),
      (t[4] = c),
      (t[5] = u),
      (t[6] = o),
      (t[7] = n),
      (t[8] = d))
    : (d = t[8]);
  let f = d,
    p;
  return (
    t[9] !== a || t[10] !== i || t[11] !== f
      ? ((p = (0, K.jsx)(De, { presentations: f, now: i, cursorPrompt: a })),
        (t[9] = a),
        (t[10] = i),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function Je(e) {
  return Z[e].driverKind;
}
export { Z as a, Pe as i, Ke as n, Fe as o, qe as r, He as t };
//# sourceMappingURL=UsageLimits-Bf7ZHZfP.js.map
