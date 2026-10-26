import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { o as i } from "./search-BrluOr7L.js";
import { Dr as a, L_ as o, hr as s, t as c } from "./utils-CPoejuy5.js";
import { n as l, t as u } from "./MorphIcon-DCVwjy7i.js";
import { a as d, r as f } from "./session-0UrRHIau.js";
import { t as p } from "./use-atom-command-DGAuqAck.js";
import { i as m } from "./dialog-BjeWpelT.js";
import { t as h } from "./device-W9B5dhsq.js";
import { Rs as g, _s as ee, vs as _, xs as v, ys as y } from "./main-BZa0O6xN.js";
var b = n(),
  x = e(t(), 1),
  S = e(r(), 1);
function C(e) {
  let t = (0, b.c)(15),
    { state: n, environmentId: r } = e,
    i = p(h.list),
    [o, s] = (0, x.useState)(null);
  if (n.hostStatus === `disabled`) return null;
  let c;
  if (
    t[0] !== r ||
    t[1] !== o ||
    t[2] !== i ||
    t[3] !== n.hostStatuses ||
    t[4] !== n.hosts ||
    t[5] !== n.supportsHostRetry
  ) {
    let e;
    (t[7] !== r ||
    t[8] !== o ||
    t[9] !== i ||
    t[10] !== n.hostStatuses ||
    t[11] !== n.supportsHostRetry
      ? ((e = (e) => {
          let t = n.hostStatuses[e.id];
          if (!t || ![`installing`, `starting`, `failed`].includes(t.status)) return null;
          let c = t.status === `failed`;
          return (0, S.jsxs)(
            `div`,
            {
              role: c ? `alert` : `status`,
              className: `flex items-start gap-3 rounded-md border border-border/60 px-3 py-2 text-xs`,
              children: [
                (0, S.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, S.jsx)(`p`, { className: `font-medium`, children: e.label }),
                    (0, S.jsx)(`p`, {
                      className: `whitespace-pre-wrap break-words text-muted-foreground`,
                      children:
                        t.detail ??
                        (c
                          ? `Device support could not start.`
                          : t.status === `installing`
                            ? `Installing device tools…`
                            : `Starting device tools…`),
                    }),
                    c
                      ? (0, S.jsx)(`p`, {
                          className: `mt-1 text-muted-foreground`,
                          children: `Check the host connection and network access, then retry. Your device settings are saved.`,
                        })
                      : null,
                  ],
                }),
                c && n.supportsHostRetry
                  ? (0, S.jsx)(a, {
                      size: `compact`,
                      variant: `outline`,
                      disabled: o !== null,
                      onClick: () => {
                        (s(e.id),
                          i({ environmentId: r, input: { retryHostId: e.id } }).finally(() =>
                            s(null),
                          ));
                      },
                      children: o === e.id ? `Retrying…` : `Retry`,
                    })
                  : null,
              ],
            },
            e.id,
          );
        }),
        (t[7] = r),
        (t[8] = o),
        (t[9] = i),
        (t[10] = n.hostStatuses),
        (t[11] = n.supportsHostRetry),
        (t[12] = e))
      : (e = t[12]),
      (c = n.hosts.map(e)),
      (t[0] = r),
      (t[1] = o),
      (t[2] = i),
      (t[3] = n.hostStatuses),
      (t[4] = n.hosts),
      (t[5] = n.supportsHostRetry),
      (t[6] = c));
  } else c = t[6];
  let l;
  return (
    t[13] === c
      ? (l = t[14])
      : ((l = (0, S.jsx)(`div`, { className: `space-y-2`, children: c })),
        (t[13] = c),
        (t[14] = l)),
    l
  );
}
var w = l(),
  T = (e) => (e === `ios` ? `iOS` : `Android`),
  E = `Enable this environment to open simulators and emulators, whether they run here or on a remote device host.`,
  D = `Allow new agent sessions in this environment to start and control local and remote devices, with required tools set up automatically.`,
  O = (e) =>
    Object.values(e.hostStatuses).some((e) => e.status === `ready` && e.androidDiscoveryIncomplete);
function k(e) {
  let t = Object.values(e.hostStatuses).map((e) => e.status),
    n = e.hostStatus === `ready` || t.includes(`ready`);
  return {
    ready: n,
    busy: !n && [e.hostStatus, ...t].some((e) => e === `installing` || e === `starting`),
  };
}
function A(e, t) {
  return e.flatMap((e) => {
    let n = t[e.id];
    return n?.status === `ready` && n.detail
      ? [{ hostId: e.id, label: e.label, detail: n.detail }]
      : [];
  });
}
function j(e) {
  let t = (0, b.c)(13),
    n,
    r,
    i,
    a;
  if (t[0] !== e.className || t[1] !== e.hostStatuses || t[2] !== e.hosts) {
    a = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let o = A(e.hosts, e.hostStatuses);
      if (o.length === 0) {
        a = null;
        break bb0;
      }
      ((n = `status`),
        t[7] === e.className
          ? (r = t[8])
          : ((r = c(`space-y-1 text-xs text-muted-foreground`, e.className)),
            (t[7] = e.className),
            (t[8] = r)),
        (i = o.map(M)));
    }
    ((t[0] = e.className),
      (t[1] = e.hostStatuses),
      (t[2] = e.hosts),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a));
  } else ((n = t[3]), (r = t[4]), (i = t[5]), (a = t[6]));
  if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
  let o;
  return (
    t[9] !== n || t[10] !== r || t[11] !== i
      ? ((o = (0, S.jsx)(`div`, { role: n, className: r, children: i })),
        (t[9] = n),
        (t[10] = r),
        (t[11] = i),
        (t[12] = o))
      : (o = t[12]),
    o
  );
}
function M(e) {
  let { hostId: t, label: n, detail: r } = e;
  return (0, S.jsxs)(
    `p`,
    { className: `whitespace-pre-line break-words`, children: [n, `: `, r] },
    t,
  );
}
function N(e, t) {
  let n = e.devices.some((e) => e.platform === t);
  if (t === `android` && !n && O(e))
    return {
      ready: !1,
      message: `The Android device list may be incomplete. Check the device host and try again.`,
    };
  let r = e.hosts.flatMap((e) =>
      e.platforms.filter((e) => e.platform === t).map((t) => ({ ...t, host: e })),
    ),
    i = r.filter((e) => e.available).map((e) => e.host);
  if (i.length === 0)
    return { ready: !1, message: r[0]?.reason ?? `${T(t)} support was not detected.` };
  if (
    i.filter(
      (t) =>
        e.hostStatuses[t.id]?.status === `ready` ||
        (t.kind === `local` && e.hostStatus === `ready`),
    ).length > 0 &&
    !n
  )
    return {
      ready: !1,
      message:
        t === `ios`
          ? `Xcode is installed, but no iOS Simulator is available. Install a runtime in Xcode Settings → Components.`
          : `The Android SDK is installed, but no virtual device exists. Create one in Android Studio → Device Manager.`,
    };
  let a = i.every((e) => e.kind !== `local`) ? i[0] : void 0,
    o = a ? ` on ${a.label}` : ``;
  return {
    ready: !0,
    message:
      a?.kind === `eas`
        ? `${a.label} starts iOS Simulators in the cloud with EAS Simulator.`
        : t === `ios`
          ? `Xcode and iOS Simulator are available${o}.`
          : `The Android SDK and Emulator are available${o}.`,
  };
}
function P(e) {
  let t = (0, b.c)(75),
    n = d(e.environmentId, o),
    r = p(h.configure),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { reportFailure: !1 }), (t[0] = i))
    : (i = t[0]);
  let s = p(h.list, i),
    [l, u] = (0, x.useState)(null),
    [w, T] = (0, x.useState)(0),
    O = e.state.hostStatus !== `disabled`,
    A;
  t[1] === e.state ? (A = t[2]) : ((A = k(e.state)), (t[1] = e.state), (t[2] = A));
  let { ready: j, busy: M } = A,
    N;
  t[3] === e.state.hosts
    ? (N = t[4])
    : ((N = e.state.hosts.some(te)), (t[3] = e.state.hosts), (t[4] = N));
  let P = N,
    F,
    R;
  (t[5] !== O || t[6] !== s || t[7] !== e.environmentId
    ? ((F = () => {
        O && s({ environmentId: e.environmentId, input: {} });
      }),
      (R = [O, s, e.environmentId]),
      (t[5] = O),
      (t[6] = s),
      (t[7] = e.environmentId),
      (t[8] = F),
      (t[9] = R))
    : ((F = t[8]), (R = t[9])),
    (0, x.useEffect)(F, R));
  let z;
  t[10] !== r || t[11] !== e
    ? ((z = async (t, n) => {
        if (!f(e.environmentId, `settings:write`)) return;
        u(t);
        let i = await r({ environmentId: e.environmentId, input: n });
        (u(null), t === `complete` && i._tag === `Success` && e.onComplete?.());
      }),
      (t[10] = r),
      (t[11] = e),
      (t[12] = z))
    : (z = t[12]);
  let B = z,
    V;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = [`Device hub`, `Simulators`, `Agent access`]), (t[13] = V))
    : (V = t[13]);
  let H;
  t[14] !== M || t[15] !== l || t[16] !== w
    ? ((H = (e) => M || l !== null || e > w), (t[14] = M), (t[15] = l), (t[16] = w), (t[17] = H))
    : (H = t[17]);
  let U;
  t[18] !== w || t[19] !== H
    ? ((U = (0, S.jsx)(_, {
        title: `Set up devices`,
        description: `Review what runs on this environment before using simulators and emulators.`,
        children: (0, S.jsx)(v, { steps: V, currentStep: w, onStepChange: T, isStepDisabled: H }),
      })),
      (t[18] = w),
      (t[19] = H),
      (t[20] = U))
    : (U = t[20]);
  let W;
  t[21] !== e.environmentId || t[22] !== e.state
    ? ((W = (0, S.jsx)(C, { state: e.state, environmentId: e.environmentId })),
      (t[21] = e.environmentId),
      (t[22] = e.state),
      (t[23] = W))
    : (W = t[23]);
  let G;
  t[24] !== M ||
  t[25] !== n ||
  t[26] !== O ||
  t[27] !== l ||
  t[28] !== e.state ||
  t[29] !== w ||
  t[30] !== B
    ? ((G =
        w === 0
          ? (0, S.jsxs)(`section`, {
              className: `space-y-3 text-sm`,
              children: [
                (0, S.jsx)(`h3`, { className: `font-medium`, children: `Enable the device hub` }),
                (0, S.jsxs)(`div`, {
                  className: `flex items-start justify-between gap-4`,
                  children: [
                    (0, S.jsx)(`p`, { className: `text-muted-foreground`, children: E }),
                    (0, S.jsx)(g, {
                      checked: O,
                      disabled: !n || M || l !== null,
                      "aria-label": `Enable device hub`,
                      onCheckedChange: (e) =>
                        void B(`hub`, { enabled: !!e, ...(e ? {} : { agentAccessEnabled: !1 }) }),
                    }),
                  ],
                }),
                (0, S.jsx)(I, { state: e.state, pending: l === `hub` || (M && l !== `agent`) }),
              ],
            })
          : null),
      (t[24] = M),
      (t[25] = n),
      (t[26] = O),
      (t[27] = l),
      (t[28] = e.state),
      (t[29] = w),
      (t[30] = B),
      (t[31] = G))
    : (G = t[31]);
  let K;
  t[32] !== M ||
  t[33] !== O ||
  t[34] !== s ||
  t[35] !== P ||
  t[36] !== l ||
  t[37] !== e.environmentId ||
  t[38] !== e.state ||
  t[39] !== w
    ? ((K =
        w === 1 || (w === 0 && O && P)
          ? (0, S.jsxs)(`section`, {
              className: c(`space-y-3 text-sm`, w === 0 && `mt-4`),
              children: [
                (0, S.jsx)(`h3`, { className: `font-medium`, children: `Check simulator support` }),
                (0, S.jsx)(ne, {
                  state: e.state,
                  checking: l === `check`,
                  disabled: !O || M || l !== null,
                  onCheck: () => {
                    (u(`check`),
                      s({ environmentId: e.environmentId, input: {} }).finally(() => u(null)));
                  },
                }),
              ],
            })
          : null),
      (t[32] = M),
      (t[33] = O),
      (t[34] = s),
      (t[35] = P),
      (t[36] = l),
      (t[37] = e.environmentId),
      (t[38] = e.state),
      (t[39] = w),
      (t[40] = K))
    : (K = t[40]);
  let q;
  t[41] !== M ||
  t[42] !== n ||
  t[43] !== O ||
  t[44] !== l ||
  t[45] !== e.state ||
  t[46] !== w ||
  t[47] !== B
    ? ((q =
        w === 2
          ? (0, S.jsxs)(`section`, {
              className: `space-y-3 text-sm`,
              children: [
                (0, S.jsx)(`h3`, { className: `font-medium`, children: `Allow agent control` }),
                (0, S.jsxs)(`div`, {
                  className: `flex items-start justify-between gap-4`,
                  children: [
                    (0, S.jsx)(`p`, { className: `text-muted-foreground`, children: D }),
                    (0, S.jsx)(g, {
                      checked: e.state.agentAccessEnabled,
                      disabled: !n || !O || M || l !== null,
                      "aria-label": `Allow agents to control devices`,
                      onCheckedChange: (e) => void B(`agent`, { agentAccessEnabled: !!e }),
                    }),
                  ],
                }),
                (0, S.jsx)(L, { state: e.state, pending: l === `agent` }),
                (0, S.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: `Leave this off to keep manual device controls without giving agents access.`,
                }),
              ],
            })
          : null),
      (t[41] = M),
      (t[42] = n),
      (t[43] = O),
      (t[44] = l),
      (t[45] = e.state),
      (t[46] = w),
      (t[47] = B),
      (t[48] = q))
    : (q = t[48]);
  let J;
  t[49] !== e.state.hostStatus || t[50] !== e.state.hostStatusDetail
    ? ((J =
        e.state.hostStatus === `failed` && e.state.hostStatusDetail
          ? (0, S.jsx)(`p`, {
              role: `alert`,
              className: `mt-3 text-xs text-destructive`,
              children: e.state.hostStatusDetail,
            })
          : null),
      (t[49] = e.state.hostStatus),
      (t[50] = e.state.hostStatusDetail),
      (t[51] = J))
    : (J = t[51]);
  let Y;
  t[52] !== G || t[53] !== K || t[54] !== q || t[55] !== J || t[56] !== W
    ? ((Y = (0, S.jsxs)(y, { children: [W, G, K, q, J] })),
      (t[52] = G),
      (t[53] = K),
      (t[54] = q),
      (t[55] = J),
      (t[56] = W),
      (t[57] = Y))
    : (Y = t[57]);
  let X;
  t[58] !== M || t[59] !== l || t[60] !== w
    ? ((X =
        w === 0
          ? (0, S.jsx)(m, { render: (0, S.jsx)(a, { variant: `outline` }), children: `Cancel` })
          : (0, S.jsx)(a, {
              variant: `outline`,
              disabled: M || l !== null,
              onClick: () => T(w - 1),
              children: `Back`,
            })),
      (t[58] = M),
      (t[59] = l),
      (t[60] = w),
      (t[61] = X))
    : (X = t[61]);
  let Z;
  t[62] !== n || t[63] !== l || t[64] !== j || t[65] !== w || t[66] !== B
    ? ((Z =
        w < 2
          ? (0, S.jsx)(a, {
              disabled: !j || l !== null,
              onClick: () => T(w + 1),
              children: `Continue`,
            })
          : (0, S.jsx)(a, {
              disabled: !n || !j || l !== null,
              onClick: () => void B(`complete`, { onboardingCompleted: !0 }),
              children: l === `complete` ? `Saving…` : `Done`,
            })),
      (t[62] = n),
      (t[63] = l),
      (t[64] = j),
      (t[65] = w),
      (t[66] = B),
      (t[67] = Z))
    : (Z = t[67]);
  let Q;
  t[68] !== X || t[69] !== Z
    ? ((Q = (0, S.jsxs)(ee, { children: [X, Z] })), (t[68] = X), (t[69] = Z), (t[70] = Q))
    : (Q = t[70]);
  let $;
  return (
    t[71] !== Y || t[72] !== Q || t[73] !== U
      ? (($ = (0, S.jsxs)(S.Fragment, { children: [U, Y, Q] })),
        (t[71] = Y),
        (t[72] = Q),
        (t[73] = U),
        (t[74] = $))
      : ($ = t[74]),
    $
  );
}
function te(e) {
  return e.kind === `local` && !e.platforms.some(F);
}
function F(e) {
  return e.available;
}
function I(e) {
  let t = (0, b.c)(5),
    { state: n, pending: r, compact: a } = e,
    o = a !== void 0 && a;
  if (!r && !k(n).ready) return null;
  let c;
  t[0] === r
    ? (c = t[1])
    : ((c = r
        ? (0, S.jsx)(s, { size: `xs` })
        : (0, S.jsx)(i, { className: `size-3 text-success` })),
      (t[0] = r),
      (t[1] = c));
  let l = r
      ? n.hostStatus === `installing`
        ? o
          ? `Installing…`
          : `Installing device hub…`
        : n.hostStatus === `starting`
          ? o
            ? `Starting…`
            : `Starting device hub…`
          : o
            ? `Updating…`
            : `Updating device hub…`
      : `Device hub is ready.`,
    u;
  return (
    t[2] !== c || t[3] !== l
      ? ((u = (0, S.jsxs)(`p`, {
          role: `status`,
          className: `flex items-center gap-2 text-xs text-muted-foreground`,
          children: [c, l],
        })),
        (t[2] = c),
        (t[3] = l),
        (t[4] = u))
      : (u = t[4]),
    u
  );
}
function ne(e) {
  let t = (0, b.c)(24),
    n;
  t[0] === e.state ? (n = t[1]) : ((n = N(e.state, `ios`)), (t[0] = e.state), (t[1] = n));
  let r;
  t[2] === n
    ? (r = t[3])
    : ((r = (0, S.jsx)(z, { platform: `iOS`, status: n })), (t[2] = n), (t[3] = r));
  let i;
  t[4] === e.state ? (i = t[5]) : ((i = N(e.state, `android`)), (t[4] = e.state), (t[5] = i));
  let o;
  t[6] === i
    ? (o = t[7])
    : ((o = (0, S.jsx)(z, { platform: `Android`, status: i })), (t[6] = i), (t[7] = o));
  let c;
  t[8] !== e.state.hostStatuses || t[9] !== e.state.hosts
    ? ((c = (0, S.jsx)(j, { hosts: e.state.hosts, hostStatuses: e.state.hostStatuses })),
      (t[8] = e.state.hostStatuses),
      (t[9] = e.state.hosts),
      (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, S.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `You can use either platform. Fixing a missing platform does not block the other one.`,
      })),
      (t[11] = l))
    : (l = t[11]);
  let u;
  t[12] === e.checking
    ? (u = t[13])
    : ((u = e.checking ? (0, S.jsx)(s, { size: `xs` }) : null), (t[12] = e.checking), (t[13] = u));
  let d = e.checking ? `Checking…` : `Check again`,
    f;
  t[14] !== e.disabled || t[15] !== e.onCheck || t[16] !== u || t[17] !== d
    ? ((f = (0, S.jsxs)(a, {
        size: `compact`,
        variant: `outline`,
        disabled: e.disabled,
        onClick: e.onCheck,
        children: [u, d],
      })),
      (t[14] = e.disabled),
      (t[15] = e.onCheck),
      (t[16] = u),
      (t[17] = d),
      (t[18] = f))
    : (f = t[18]);
  let p;
  return (
    t[19] !== r || t[20] !== o || t[21] !== c || t[22] !== f
      ? ((p = (0, S.jsxs)(`div`, { className: `space-y-3`, children: [r, o, c, l, f] })),
        (t[19] = r),
        (t[20] = o),
        (t[21] = c),
        (t[22] = f),
        (t[23] = p))
      : (p = t[23]),
    p
  );
}
function L(e) {
  let t = (0, b.c)(4);
  if (e.pending) {
    let n =
        e.state.hostStatus === `installing`
          ? e.compact
            ? `Installing…`
            : `Installing agent tools…`
          : e.state.hostStatus === `starting`
            ? e.compact
              ? `Starting…`
              : `Starting agent tools…`
            : e.compact
              ? `Updating…`
              : `Updating agent access…`,
      r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, S.jsx)(s, { size: `xs` })), (t[0] = r))
      : (r = t[0]);
    let i;
    return (
      t[1] === n
        ? (i = t[2])
        : ((i = (0, S.jsxs)(`p`, {
            role: `status`,
            className: `flex items-center gap-2 text-xs text-muted-foreground`,
            children: [r, n],
          })),
          (t[1] = n),
          (t[2] = i)),
      i
    );
  }
  if (e.state.agentAccessEnabled && k(e.state).ready && e.state.hosts.some(R)) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, S.jsxs)(`p`, {
            role: `status`,
            className: `flex items-center gap-2 text-xs text-muted-foreground`,
            children: [
              (0, S.jsx)(i, { className: `size-3 text-success` }),
              `Agent tools are ready.`,
            ],
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  return null;
}
function R(e) {
  return e.agentDeviceInstalled;
}
function z(e) {
  let t = (0, b.c)(21),
    n = !e.compact && `rounded-md border border-border/60 px-3 py-2`,
    r;
  t[0] === n ? (r = t[1]) : ((r = c(`flex gap-2`, n)), (t[0] = n), (t[1] = r));
  let i = e.status.ready ? `text-success` : `text-muted-foreground`,
    a;
  t[2] === i ? (a = t[3]) : ((a = c(`mt-0.5 size-4 shrink-0`, i)), (t[2] = i), (t[3] = a));
  let o = e.status.ready ? w.Check : w.CircleAlert,
    s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, S.jsx)(u, { className: a, icon: o })), (t[4] = a), (t[5] = o), (t[6] = s))
    : (s = t[6]);
  let l = e.compact && e.status.ready && `flex items-center gap-2`,
    d;
  t[7] === l ? (d = t[8]) : ((d = c(l)), (t[7] = l), (t[8] = d));
  let f;
  t[9] === e.platform
    ? (f = t[10])
    : ((f = (0, S.jsx)(`p`, { className: `font-medium`, children: e.platform })),
      (t[9] = e.platform),
      (t[10] = f));
  let p = e.compact && e.status.ready ? `Ready` : e.status.message,
    m;
  t[11] === p
    ? (m = t[12])
    : ((m = (0, S.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: p })),
      (t[11] = p),
      (t[12] = m));
  let h;
  t[13] !== m || t[14] !== d || t[15] !== f
    ? ((h = (0, S.jsxs)(`div`, { className: d, children: [f, m] })),
      (t[13] = m),
      (t[14] = d),
      (t[15] = f),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== r || t[18] !== h || t[19] !== s
      ? ((g = (0, S.jsxs)(`div`, { className: r, children: [s, h] })),
        (t[17] = r),
        (t[18] = h),
        (t[19] = s),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
export { z as a, k as c, C as d, P as i, O as l, j as n, D as o, I as r, E as s, L as t, N as u };
//# sourceMappingURL=DeviceSetup-DRMkBPav.js.map
