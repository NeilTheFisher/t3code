import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./server-jaU8uTDW.js";
import { t as a } from "./smartphone-DSV2Q4YQ.js";
import {
  Da as o,
  Dc as s,
  Dr as c,
  HS as l,
  Hf as u,
  Jl as d,
  Md as f,
  Rf as p,
  Sx as m,
  Vl as h,
  Xl as g,
  Zn as _,
  iu as v,
  jc as y,
  qf as b,
  sp as x,
  t as S,
  zC as C,
  zf as w,
} from "./utils-CPoejuy5.js";
import { f as T, g as E, h as D, k as ee, p as te, r as ne } from "./runtime-CSDWbn8h.js";
import "./errors-CNOtAr8A.js";
import { t as re } from "./use-atom-command-DGAuqAck.js";
import { i as O } from "./toast-B4KPIJDZ.js";
import { t as k } from "./skeleton-BRqz2fzS.js";
import { c as ie, o as ae } from "./dist-BdqWmeee.js";
import { a as A, i as j, o as M, r as N, t as P } from "./empty-CgJfsiJ2.js";
import { n as F, r as I, t as oe } from "./collapsible-Dp2CGco9.js";
import { $c as se } from "./main-BZa0O6xN.js";
var L = e(t(), 1),
  R = e(o(), 1),
  z = n(),
  B = u(l(f, ne.contextEffect.pipe(m((e) => C(e, f))))),
  V = T(B),
  H = h(),
  U = d(B, {
    label: `web:managed-relay:deregister-environment`,
    scheduler: H,
    concurrency: { mode: `serial`, key: (e) => e.accountId },
    execute: (e, t) => te(t, e),
  }),
  W = w(x([])).pipe(p, b(`managed-relay:web:environments:null`)),
  G = w(x([])).pipe(p, b(`managed-relay:web:devices:null`));
function K() {
  let e = (0, z.c)(10),
    t = y(D)?.accountId ?? null,
    n;
  e[0] === t ? (n = e[1]) : ((n = t ? V.environmentsAtom(t) : W), (e[0] = t), (e[1] = n));
  let r = y(n),
    i;
  e[2] === r ? (i = e[3]) : ((i = E(r)), (e[2] = r), (e[3] = i));
  let a = i,
    o;
  e[4] === t
    ? (o = e[5])
    : ((o = () => {
        t && V.refreshEnvironments(s, t);
      }),
      (e[4] = t),
      (e[5] = o));
  let c = o,
    l;
  return (
    e[6] !== t || e[7] !== c || e[8] !== a
      ? ((l = { ...a, accountId: t, refresh: c }), (e[6] = t), (e[7] = c), (e[8] = a), (e[9] = l))
      : (l = e[9]),
    l
  );
}
function q() {
  let e = (0, z.c)(10),
    t = y(D)?.accountId ?? null,
    n;
  e[0] === t ? (n = e[1]) : ((n = t ? V.devicesAtom(t) : G), (e[0] = t), (e[1] = n));
  let r = y(n),
    i;
  e[2] === r ? (i = e[3]) : ((i = E(r)), (e[2] = r), (e[3] = i));
  let a = i,
    o;
  e[4] === t
    ? (o = e[5])
    : ((o = () => {
        t && V.refreshDevices(s, t);
      }),
      (e[4] = t),
      (e[5] = o));
  let c = o,
    l;
  return (
    e[6] !== t || e[7] !== c || e[8] !== a
      ? ((l = { ...a, accountId: t, refresh: c }), (e[6] = t), (e[7] = c), (e[8] = a), (e[9] = l))
      : (l = e[9]),
    l
  );
}
var ce = new Intl.DateTimeFormat(void 0, { dateStyle: `medium`, timeStyle: `short` }),
  le = [
    [`notifyOnApproval`, `approvals`],
    [`notifyOnInput`, `input requests`],
    [`notifyOnCompletion`, `completions`],
    [`notifyOnFailure`, `failures`],
  ];
function ue(e) {
  return `${e.platform === `android` ? `Android` : e.iosMajorVersion === null ? `iOS` : `iOS ${e.iosMajorVersion}`}${e.appVersion ? ` · T3 Code ${e.appVersion}` : ``}`;
}
function de(e) {
  if (!e.notifications.enabled) return `Push notifications are disabled on this device.`;
  let t = le.flatMap(([t, n]) => (e.notifications[t] ? [n] : []));
  return t.length > 0
    ? `Alerts enabled for ${t.join(`, `)}.`
    : `Push notifications are enabled, but no alert types are selected.`;
}
function fe(e) {
  let t = new Date(e);
  return Number.isNaN(t.getTime()) ? `Update time unavailable` : `Updated ${ce.format(t)}`;
}
var J = e(r(), 1);
function Y(e) {
  let t = (0, z.c)(18),
    { action: n, children: r, className: i, description: a, title: o } = e,
    s;
  t[0] === i ? (s = t[1]) : ((s = S(`w-full min-w-0 text-foreground`, i)), (t[0] = i), (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = (0, J.jsx)(`h2`, { className: `text-base leading-6 font-semibold`, children: o })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = a
        ? (0, J.jsx)(`p`, {
            className: `mt-1 max-w-[34rem] text-xs leading-4.5 text-muted-foreground sm:min-h-9`,
            children: a,
          })
        : null),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] !== c || t[7] !== l
    ? ((u = (0, J.jsxs)(`div`, { className: `min-w-0`, children: [c, l] })),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === n
    ? (d = t[10])
    : ((d = n ? (0, J.jsx)(`div`, { className: `shrink-0`, children: n }) : null),
      (t[9] = n),
      (t[10] = d));
  let f;
  t[11] !== u || t[12] !== d
    ? ((f = (0, J.jsxs)(`header`, {
        className: `flex flex-col gap-3 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pr-8`,
        children: [u, d],
      })),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== r || t[15] !== s || t[16] !== f
      ? ((p = (0, J.jsxs)(`div`, { className: s, children: [f, r] })),
        (t[14] = r),
        (t[15] = s),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function X(e) {
  let t = (0, z.c)(7),
    { className: n, disabled: r, isPending: i, onClick: a } = e,
    o = (r !== void 0 && r) || i,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, J.jsx)(se, { "aria-hidden": `true`, size: `sm`, refreshing: i })),
      (t[0] = i),
      (t[1] = s));
  let l;
  return (
    t[2] !== n || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((l = (0, J.jsxs)(c, {
          size: `sm`,
          variant: `outline`,
          className: n,
          disabled: o,
          onClick: a,
          children: [s, `Refresh`],
        })),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
function Z(e) {
  let t = (0, z.c)(12),
    { children: n, className: r, icon: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = S(`border-t py-4 first:border-t-0`, r)), (t[0] = r), (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, J.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted/32 text-muted-foreground`,
        children: i,
      })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, J.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })),
      (t[4] = n),
      (t[5] = s));
  let c;
  t[6] !== o || t[7] !== s
    ? ((c = (0, J.jsxs)(`div`, { className: `flex items-start gap-3`, children: [o, s] })),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== a || t[10] !== c
      ? ((l = (0, J.jsx)(`li`, { className: a, children: c })),
        (t[9] = a),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var pe = [`primary`, `secondary`];
function Q(e) {
  let t = (0, z.c)(4),
    { enabled: n, label: r } = e,
    i = n ? `success` : `outline`,
    a = n ? `On` : `Off`,
    o;
  return (
    t[0] !== r || t[1] !== i || t[2] !== a
      ? ((o = (0, J.jsxs)(_, { variant: i, children: [r, `: `, a] })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function me(e) {
  let t = (0, z.c)(32),
    { device: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, J.jsx)(a, { className: `size-4` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n.label
    ? (i = t[2])
    : ((i = (0, J.jsx)(`h3`, {
        className: `truncate text-sm leading-4.5 font-medium text-foreground`,
        children: n.label,
      })),
      (t[1] = n.label),
      (t[2] = i));
  let o;
  t[3] === n ? (o = t[4]) : ((o = ue(n)), (t[3] = n), (t[4] = o));
  let s;
  t[5] === o
    ? (s = t[6])
    : ((s = (0, J.jsx)(`p`, {
        className: `text-xs leading-4.5 text-muted-foreground`,
        children: o,
      })),
      (t[5] = o),
      (t[6] = s));
  let c;
  t[7] !== i || t[8] !== s
    ? ((c = (0, J.jsxs)(`div`, { className: `min-w-0`, children: [i, s] })),
      (t[7] = i),
      (t[8] = s),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] === n.updatedAt ? (l = t[11]) : ((l = fe(n.updatedAt)), (t[10] = n.updatedAt), (t[11] = l));
  let u;
  t[12] === l
    ? (u = t[13])
    : ((u = (0, J.jsx)(`p`, {
        className: `shrink-0 text-2xs leading-4 text-muted-foreground/75`,
        children: l,
      })),
      (t[12] = l),
      (t[13] = u));
  let d;
  t[14] !== c || t[15] !== u
    ? ((d = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3`,
        children: [c, u],
      })),
      (t[14] = c),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let f;
  t[17] === n.notifications.enabled
    ? (f = t[18])
    : ((f = (0, J.jsx)(Q, { enabled: n.notifications.enabled, label: `Push notifications` })),
      (t[17] = n.notifications.enabled),
      (t[18] = f));
  let p;
  t[19] === n.liveActivities.enabled
    ? (p = t[20])
    : ((p = (0, J.jsx)(Q, { enabled: n.liveActivities.enabled, label: `Live Activities` })),
      (t[19] = n.liveActivities.enabled),
      (t[20] = p));
  let m;
  t[21] !== p || t[22] !== f
    ? ((m = (0, J.jsxs)(`div`, { className: `mt-2 flex flex-wrap gap-1.5`, children: [f, p] })),
      (t[21] = p),
      (t[22] = f),
      (t[23] = m))
    : (m = t[23]);
  let h;
  t[24] === n ? (h = t[25]) : ((h = de(n)), (t[24] = n), (t[25] = h));
  let g;
  t[26] === h
    ? (g = t[27])
    : ((g = (0, J.jsx)(`p`, {
        className: `mt-1.5 text-xs leading-4.5 text-muted-foreground/80`,
        children: h,
      })),
      (t[26] = h),
      (t[27] = g));
  let _;
  return (
    t[28] !== m || t[29] !== g || t[30] !== d
      ? ((_ = (0, J.jsxs)(Z, { icon: r, children: [d, m, g] })),
        (t[28] = m),
        (t[29] = g),
        (t[30] = d),
        (t[31] = _))
      : (_ = t[31]),
    _
  );
}
function he() {
  let e = (0, z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(`div`, {
          "aria-label": `Loading mobile clients`,
          className: `divide-y border-t`,
          role: `status`,
          children: pe.map(ge),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ge(e) {
  return (0, J.jsx)(
    `div`,
    {
      className: `py-4`,
      children: (0, J.jsxs)(`div`, {
        className: `flex gap-3`,
        children: [
          (0, J.jsx)(k, { shape: `card`, className: `size-8 shrink-0` }),
          (0, J.jsxs)(`div`, {
            className: `flex-1 space-y-2`,
            children: [
              (0, J.jsx)(k, { className: `h-3.5 w-36` }),
              (0, J.jsx)(k, { className: `h-3 w-28` }),
              (0, J.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, J.jsx)(k, { className: `h-4.5 w-28` }),
                  (0, J.jsx)(k, { className: `h-4.5 w-24` }),
                ],
              }),
            ],
          }),
        ],
      }),
    },
    e,
  );
}
function _e() {
  let e = (0, z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, J.jsx)(A, { variant: `icon`, children: (0, J.jsx)(a, {}) })), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, J.jsxs)(P, {
          size: `compact`,
          children: [
            t,
            (0, J.jsxs)(j, {
              children: [
                (0, J.jsx)(M, { children: `No mobile clients` }),
                (0, J.jsx)(N, {
                  children: `Install T3 Code on your phone and sign in to T3 Connect to get push notifications and Live Activities.`,
                }),
              ],
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function ve() {
  let e = (0, z.c)(18),
    t = q(),
    n;
  e[0] === t.data ? (n = e[1]) : ((n = t.data ?? []), (e[0] = t.data), (e[1] = n));
  let r = n,
    i = !t.accountId || (t.data === null && !t.error),
    a = t.error !== null && t.data === null,
    o;
  e[2] !== t.isPending || e[3] !== t.refresh
    ? ((o = (0, J.jsx)(X, { isPending: t.isPending, onClick: t.refresh })),
      (e[2] = t.isPending),
      (e[3] = t.refresh),
      (e[4] = o))
    : (o = e[4]);
  let s;
  e[5] !== t.error || e[6] !== t.refresh
    ? ((s = t.error
        ? (0, J.jsxs)(`div`, {
            className: `mb-4 flex flex-col gap-3 border-t border-destructive/35 py-3 text-xs sm:flex-row sm:items-center sm:justify-between`,
            role: `alert`,
            children: [
              (0, J.jsxs)(`div`, {
                children: [
                  (0, J.jsx)(`p`, {
                    className: `font-medium text-destructive-foreground`,
                    children: `Could not load mobile clients`,
                  }),
                  (0, J.jsx)(`p`, {
                    className: `mt-0.5 text-xs text-muted-foreground`,
                    children: t.error,
                  }),
                ],
              }),
              (0, J.jsx)(c, {
                size: `xs`,
                variant: `outline`,
                onClick: t.refresh,
                children: `Try again`,
              }),
            ],
          })
        : null),
      (e[5] = t.error),
      (e[6] = t.refresh),
      (e[7] = s))
    : (s = e[7]);
  let l;
  e[8] !== r || e[9] !== a || e[10] !== i
    ? ((l = i
        ? (0, J.jsx)(he, {})
        : a
          ? null
          : r.length > 0
            ? (0, J.jsx)(`ul`, { className: `border-t`, children: r.map(ye) })
            : (0, J.jsx)(`div`, { className: `border-t`, children: (0, J.jsx)(_e, {}) })),
      (e[8] = r),
      (e[9] = a),
      (e[10] = i),
      (e[11] = l))
    : (l = e[11]);
  let u;
  e[12] !== s || e[13] !== l
    ? ((u = (0, J.jsxs)(`div`, { children: [s, l] })), (e[12] = s), (e[13] = l), (e[14] = u))
    : (u = e[14]);
  let d;
  return (
    e[15] !== o || e[16] !== u
      ? ((d = (0, J.jsx)(Y, {
          title: `Mobile clients`,
          description: `Mobile devices that get notifications from your environments.`,
          action: o,
          children: u,
        })),
        (e[15] = o),
        (e[16] = u),
        (e[17] = d))
      : (d = e[17]),
    d
  );
}
function ye(e) {
  return (0, J.jsx)(me, { device: e }, e.deviceId);
}
var be = new Intl.DateTimeFormat(void 0, { dateStyle: `medium` });
function xe(e) {
  let t = new Date(e);
  return Number.isNaN(t.getTime()) ? `Link date unavailable` : `Linked ${be.format(t)}`;
}
function Se(e) {
  return e.endpoint.providerKind === `cloudflare_tunnel`
    ? `Managed tunnel`
    : `Activity publishing only`;
}
function Ce(e) {
  let t = (0, z.c)(46),
    { environment: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, J.jsx)(i, { className: `size-4` })), (t[0] = r))
    : (r = t[0]);
  let a = e.confirmationOpen,
    o = e.onConfirmationChange,
    s;
  t[1] === n.label
    ? (s = t[2])
    : ((s = (0, J.jsx)(`h3`, {
        className: `truncate text-sm leading-4.5 font-medium text-foreground`,
        children: n.label,
      })),
      (t[1] = n.label),
      (t[2] = s));
  let l;
  t[3] === n.linkedAt ? (l = t[4]) : ((l = xe(n.linkedAt)), (t[3] = n.linkedAt), (t[4] = l));
  let u;
  t[5] === n ? (u = t[6]) : ((u = Se(n)), (t[5] = n), (t[6] = u));
  let d;
  t[7] !== l || t[8] !== u
    ? ((d = (0, J.jsxs)(`p`, {
        className: `mt-1 text-xs leading-4.5 text-muted-foreground`,
        children: [l, ` · `, u],
      })),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== s || t[11] !== d
    ? ((f = (0, J.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [s, d] })),
      (t[10] = s),
      (t[11] = d),
      (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] === e.mutationPending
    ? (p = t[14])
    : ((p = (0, J.jsx)(I, {
        render: (0, J.jsx)(c, {
          size: `sm`,
          variant: `destructive-outline`,
          disabled: e.mutationPending,
          children: `Deregister`,
        }),
      })),
      (t[13] = e.mutationPending),
      (t[14] = p));
  let m;
  t[15] !== f || t[16] !== p
    ? ((m = (0, J.jsxs)(`div`, { className: `flex items-start gap-4`, children: [f, p] })),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h = `Confirm deregistration of ${n.label}`,
    g;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(`h4`, {
        className: `text-sm leading-4.5 font-semibold text-foreground`,
        children: `Deregister server`,
      })),
      (t[18] = g))
    : (g = t[18]);
  let _;
  t[19] === n.label
    ? (_ = t[20])
    : ((_ = (0, J.jsxs)(`p`, {
        className: `mt-1 text-xs leading-4.5 text-muted-foreground`,
        children: [`“`, n.label, `” will be removed from this account.`],
      })),
      (t[19] = n.label),
      (t[20] = _));
  let v;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(`p`, {
        className: `mt-4 max-w-xl text-xs leading-4.5 text-muted-foreground`,
        children: `T3 Connect access will be revoked, any managed tunnel will be removed, and a host space will become available. Local connections on your devices are not changed.`,
      })),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] === e ? (y = t[23]) : ((y = () => e.onConfirmationChange(!1)), (t[22] = e), (t[23] = y));
  let b;
  t[24] !== e.mutationPending || t[25] !== y
    ? ((b = (0, J.jsx)(c, {
        size: `sm`,
        variant: `ghost`,
        disabled: e.mutationPending,
        onClick: y,
        children: `Cancel`,
      })),
      (t[24] = e.mutationPending),
      (t[25] = y),
      (t[26] = b))
    : (b = t[26]);
  let x;
  t[27] !== n || t[28] !== e
    ? ((x = () => e.onDeregister(n)), (t[27] = n), (t[28] = e), (t[29] = x))
    : (x = t[29]);
  let S = e.mutationPending ? `Deregistering…` : `Deregister`,
    C;
  t[30] !== e.mutationPending || t[31] !== x || t[32] !== S
    ? ((C = (0, J.jsx)(c, {
        size: `sm`,
        variant: `destructive`,
        disabled: e.mutationPending,
        onClick: x,
        children: S,
      })),
      (t[30] = e.mutationPending),
      (t[31] = x),
      (t[32] = S),
      (t[33] = C))
    : (C = t[33]);
  let w;
  t[34] !== b || t[35] !== C
    ? ((w = (0, J.jsxs)(`div`, { className: `mt-4 flex justify-end gap-2`, children: [b, C] })),
      (t[34] = b),
      (t[35] = C),
      (t[36] = w))
    : (w = t[36]);
  let T;
  t[37] !== h || t[38] !== _ || t[39] !== w
    ? ((T = (0, J.jsx)(F, {
        children: (0, J.jsx)(`div`, {
          className: `pt-3`,
          children: (0, J.jsxs)(`div`, {
            className: `rounded-lg border border-input bg-muted/32 px-5 py-4 shadow-xs/5`,
            role: `group`,
            "aria-label": h,
            children: [g, _, v, w],
          }),
        }),
      })),
      (t[37] = h),
      (t[38] = _),
      (t[39] = w),
      (t[40] = T))
    : (T = t[40]);
  let E;
  return (
    t[41] !== e.confirmationOpen || t[42] !== e.onConfirmationChange || t[43] !== T || t[44] !== m
      ? ((E = (0, J.jsx)(Z, {
          icon: r,
          children: (0, J.jsxs)(oe, { open: a, onOpenChange: o, children: [m, T] }),
        })),
        (t[41] = e.confirmationOpen),
        (t[42] = e.onConfirmationChange),
        (t[43] = T),
        (t[44] = m),
        (t[45] = E))
      : (E = t[45]),
    E
  );
}
function we() {
  let e = (0, z.c)(44),
    t = K(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (e[0] = n))
    : (n = e[0]);
  let r = re(U, n),
    [a, o] = (0, L.useState)(null),
    [s, c] = (0, L.useState)(null),
    l = (0, L.useRef)(!1),
    u;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { accountId: null, linkedAtById: new Map() }), (e[1] = u))
    : (u = e[1]);
  let [d, f] = (0, L.useState)(u),
    p;
  e[2] !== r || e[3] !== t
    ? ((p = async (e) => {
        let n = t.accountId;
        if (!n || l.current) return;
        ((l.current = !0), o(e.environmentId));
        let i = await r({ accountId: n, environmentId: e.environmentId });
        if (((l.current = !1), o(null), i._tag === `Success`)) {
          (c(null),
            f((t) => {
              let r = new Map(t.accountId === n ? t.linkedAtById : []);
              return (r.set(e.environmentId, e.linkedAt), { accountId: n, linkedAtById: r });
            }),
            t.refresh(),
            O.add({
              type: `success`,
              title: `Server deregistered`,
              description: `T3 Connect access was revoked and a host space is now available.`,
            }));
          return;
        }
        if (g(i)) return;
        let a = v(i),
          s = a instanceof Error ? a.message : `Could not deregister the server.`,
          u = ee(a);
        (console.error(`[t3-connect] Could not deregister environment`, {
          environmentId: e.environmentId,
          message: s,
          traceId: u,
          cause: a,
        }),
          O.add({
            type: `error`,
            title: `Could not deregister server`,
            description: s,
            data: u
              ? {
                  secondaryActionProps: {
                    children: `Copy trace ID`,
                    onClick: () => void navigator.clipboard?.writeText(u),
                  },
                }
              : void 0,
          }));
      }),
      (e[2] = r),
      (e[3] = t),
      (e[4] = p))
    : (p = e[4]);
  let m = p,
    h;
  e[5] !== t.accountId || e[6] !== d.accountId || e[7] !== d.linkedAtById
    ? ((h = d.accountId === t.accountId ? d.linkedAtById : new Map()),
      (e[5] = t.accountId),
      (e[6] = d.accountId),
      (e[7] = d.linkedAtById),
      (e[8] = h))
    : (h = e[8]);
  let _ = h,
    y;
  e[9] === t.data ? (y = e[10]) : ((y = t.data ?? []), (e[9] = t.data), (e[10] = y));
  let b, x, S, C, w, T;
  if (
    e[11] !== s ||
    e[12] !== a ||
    e[13] !== t.accountId ||
    e[14] !== t.data ||
    e[15] !== t.error ||
    e[16] !== t.isPending ||
    e[17] !== t.refresh ||
    e[18] !== m ||
    e[19] !== _ ||
    e[20] !== y
  ) {
    let n;
    e[27] === _
      ? (n = e[28])
      : ((n = (e) => _.get(e.environmentId) !== e.linkedAt), (e[27] = _), (e[28] = n));
    let r = y.filter(n),
      o = !t.accountId || (t.data === null && !t.error);
    ((b = Y),
      (C = `T3 Connect`),
      (w = `Environments registered to your account. Connections on this device are managed in Settings.`));
    let l = a !== null;
    (e[29] !== t.isPending || e[30] !== t.refresh || e[31] !== l
      ? ((T = (0, J.jsx)(X, { disabled: l, isPending: t.isPending, onClick: t.refresh })),
        (e[29] = t.isPending),
        (e[30] = t.refresh),
        (e[31] = l),
        (e[32] = T))
      : (T = e[32]),
      e[33] === t.error
        ? (x = e[34])
        : ((x = t.error
            ? (0, J.jsxs)(`div`, {
                className: `mb-4 border-t border-destructive/35 py-3 text-xs`,
                role: `alert`,
                children: [
                  (0, J.jsx)(`p`, {
                    className: `font-medium text-destructive-foreground`,
                    children: `Could not load T3 Connect environments`,
                  }),
                  (0, J.jsx)(`p`, {
                    className: `mt-1 text-xs text-muted-foreground`,
                    children: t.error,
                  }),
                ],
              })
            : null),
          (e[33] = t.error),
          (e[34] = x)),
      (S = o
        ? (0, J.jsx)(`p`, {
            className: `border-t py-4 text-xs text-muted-foreground`,
            role: `status`,
            children: `Loading environments…`,
          })
        : r.length > 0
          ? (0, J.jsx)(`ul`, {
              className: `border-t`,
              children: r.map((e) =>
                (0, J.jsx)(
                  Ce,
                  {
                    environment: e,
                    confirmationOpen: s === e.environmentId,
                    mutationPending: a !== null,
                    onConfirmationChange: (t) => c(t ? e.environmentId : null),
                    onDeregister: (e) => void m(e),
                  },
                  e.environmentId,
                ),
              ),
            })
          : t.error
            ? null
            : (0, J.jsx)(`div`, {
                className: `border-t`,
                children: (0, J.jsxs)(P, {
                  size: `compact`,
                  children: [
                    (0, J.jsx)(A, { variant: `icon`, children: (0, J.jsx)(i, {}) }),
                    (0, J.jsxs)(j, {
                      children: [
                        (0, J.jsx)(M, { children: `No T3 Connect environments` }),
                        (0, J.jsx)(N, {
                          children: `Link an environment from its local Settings to make it available through T3 Connect.`,
                        }),
                      ],
                    }),
                  ],
                }),
              })),
      (e[11] = s),
      (e[12] = a),
      (e[13] = t.accountId),
      (e[14] = t.data),
      (e[15] = t.error),
      (e[16] = t.isPending),
      (e[17] = t.refresh),
      (e[18] = m),
      (e[19] = _),
      (e[20] = y),
      (e[21] = b),
      (e[22] = x),
      (e[23] = S),
      (e[24] = C),
      (e[25] = w),
      (e[26] = T));
  } else ((b = e[21]), (x = e[22]), (S = e[23]), (C = e[24]), (w = e[25]), (T = e[26]));
  let E;
  e[35] !== x || e[36] !== S
    ? ((E = (0, J.jsxs)(`div`, { children: [x, S] })), (e[35] = x), (e[36] = S), (e[37] = E))
    : (E = e[37]);
  let D;
  return (
    e[38] !== b || e[39] !== E || e[40] !== C || e[41] !== w || e[42] !== T
      ? ((D = (0, J.jsx)(b, { title: C, description: w, action: T, children: E })),
        (e[38] = b),
        (e[39] = E),
        (e[40] = C),
        (e[41] = w),
        (e[42] = T),
        (e[43] = D))
      : (D = e[43]),
    D
  );
}
var $ = [
  {
    label: `Mobile clients`,
    url: `mobile-clients`,
    icon: (0, J.jsx)(a, { className: `size-4` }),
    content: (0, J.jsx)(ve, {}),
  },
  {
    label: `T3 Connect`,
    url: `t3-connect`,
    icon: (0, J.jsx)(i, { className: `size-4` }),
    content: (0, J.jsx)(we, {}),
  },
];
function Te() {
  let e = (0, z.c)(8),
    t = ie(),
    { isSignedIn: n } = ae(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = {}), (e[0] = r)) : (r = e[0]);
  let [i, a] = (0, L.useState)(r),
    o;
  e[1] === t
    ? (o = e[2])
    : ((o = () => {
        let e = (e, t) => a((n) => ({ ...n, [e]: t }));
        t.openUserProfile({
          __experimental_startPath: `/t3-connect`,
          customPages: $.map((t) => ({
            label: t.label,
            url: t.url,
            mount: (n) => e(`content:${t.url}`, n),
            unmount: () => e(`content:${t.url}`, void 0),
            mountIcon: (n) => e(`icon:${t.url}`, n),
            unmountIcon: () => e(`icon:${t.url}`, void 0),
          })),
        });
      }),
      (e[1] = t),
      (e[2] = o));
  let s = o,
    c;
  e[3] === i
    ? (c = e[4])
    : ((c = $.flatMap((e) => {
        let t = i[`content:${e.url}`],
          n = i[`icon:${e.url}`];
        return [
          t ? (0, R.createPortal)(e.content, t, `content:${e.url}`) : null,
          n ? (0, R.createPortal)(e.icon, n, `icon:${e.url}`) : null,
        ];
      })),
      (e[3] = i),
      (e[4] = c));
  let l = c,
    u = n ? s : null,
    d;
  return (
    e[5] !== l || e[6] !== u
      ? ((d = { open: u, portals: l }), (e[5] = l), (e[6] = u), (e[7] = d))
      : (d = e[7]),
    d
  );
}
export { Te as n, $ as t };
//# sourceMappingURL=T3ConnectAccountPages-CeaFAqz5.js.map
