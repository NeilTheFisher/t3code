import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  $x as t,
  Au as n,
  Ax as r,
  Dc as i,
  Dd as a,
  Ef as o,
  Fd as s,
  JC as c,
  Kl as l,
  Lf as u,
  Lp as d,
  Sx as f,
  Tx as p,
  Uf as m,
  Ux as h,
  Vl as g,
  Wl as _,
  Zf as v,
  ap as y,
  cS as b,
  cx as x,
  jc as S,
  np as C,
  qf as w,
  zf as T,
} from "./utils-CPoejuy5.js";
import { t as E } from "./runtime-CY2dlMEg.js";
import { t as D } from "./session-0UrRHIau.js";
import { n as O } from "./query-LKSVgBQH.js";
var k = e();
function A(e) {
  let t = g(),
    n = { mode: `serial`, key: ({ environmentId: e }) => e };
  return {
    state: l(e, { label: `environment-data:device:state`, tag: d.subscribeDeviceState }),
    configure: _(e, {
      label: `environment-data:device:configure`,
      tag: d.deviceConfigure,
      scheduler: t,
      concurrency: n,
    }),
    testHost: _(e, { label: `environment-data:device:test-host`, tag: d.deviceTestHost }),
    easAccount: _(e, { label: `environment-data:device:eas-account`, tag: d.deviceEasAccount }),
    list: _(e, {
      label: `environment-data:device:list`,
      tag: d.deviceList,
      scheduler: t,
      concurrency: n,
    }),
    open: _(e, {
      label: `environment-data:device:open`,
      tag: d.deviceOpen,
      scheduler: t,
      concurrency: {
        mode: `serial`,
        key: ({ environmentId: e, input: t }) =>
          JSON.stringify([e, `open`, t.threadId, t.hostId ?? null, t.deviceId]),
      },
    }),
    close: _(e, {
      label: `environment-data:device:close`,
      tag: d.deviceClose,
      scheduler: t,
      concurrency: n,
    }),
    shutdown: _(e, {
      label: `environment-data:device:shutdown`,
      tag: d.deviceShutdown,
      scheduler: t,
      concurrency: n,
    }),
    detail: _(e, {
      label: `environment-data:device:detail`,
      tag: d.deviceDetail,
      scheduler: t,
      concurrency: n,
    }),
    action: _(e, {
      label: `environment-data:device:action`,
      tag: d.deviceAction,
      scheduler: t,
      concurrency: n,
    }),
  };
}
var j = 8e3,
  M = x(`clientRuntime.state.resolveDeviceHubAccess`)(function* (e) {
    let r = o(e.prepared.httpBaseUrl, e.hubBasePath),
      i = r.replace(/^http/, `ws`);
    if (e.prepared.httpAuthorization === null)
      return { httpBase: r, wsBase: i, query: {}, credentials: !0 };
    let c = yield* t(s),
      l = yield* t(a);
    return {
      httpBase: r,
      wsBase: i,
      query: {
        wsTicket: (yield* n({
          prepared: e.prepared,
          signer: c,
          remoteAuthorization: l,
          group: `auth`,
          method: `POST`,
          url: (e) => e.webSocketTicketFor({ params: { use: `media` } }),
          timeoutMs: j,
          request: ({ client: e, headers: t }) =>
            e.webSocketTicketFor({ headers: t, params: { use: `media` } }),
        })).ticket,
      },
      credentials: !1,
    };
  }),
  N = A(E),
  P = {
    hosts: [],
    hostStatus: `disabled`,
    hostStatuses: {},
    devices: [],
    sessions: [],
    onboardingCompleted: !1,
    agentAccessEnabled: !1,
    hubBasePath: `/api/device-hub`,
    revision: 0,
  };
function F(e) {
  let t = (0, k.c)(5),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === null ? null : N.state({ environmentId: e, input: {} })), (t[0] = e), (t[1] = n));
  let r = O(n),
    i = r.data ?? P,
    a = r.data !== void 0,
    o;
  return (
    t[2] !== i || t[3] !== a
      ? ((o = { state: i, loaded: a }), (t[2] = i), (t[3] = a), (t[4] = o))
      : (o = t[4]),
    o
  );
}
var I = u((e) =>
  E.atom((t) => {
    let n = c(t(D.preparedConnectionValueAtom(e)));
    return n === null ? p : M({ prepared: n, hubBasePath: P.hubBasePath });
  }).pipe(m(6e4), w(`device-hub-access:${e}`)),
);
function L(e, t) {
  let n = (0, k.c)(5),
    r = t === void 0 ? `local` : t,
    i;
  n[0] === e ? (i = n[1]) : ((i = e === null ? R : I(e)), (n[0] = e), (n[1] = i));
  let a = S(i),
    o;
  return (
    n[2] !== r || n[3] !== a
      ? ((o = y(a) ? { ...a.value, query: { ...a.value.query, hostId: r } } : null),
        (n[2] = r),
        (n[3] = a),
        (n[4] = o))
      : (o = n[4]),
    o
  );
}
var R = T(C()).pipe(w(`device-hub-access:empty`));
function z(e) {
  i.refresh(I(e));
}
function B(e, t = `local`) {
  let n = I(e);
  return (
    i.refresh(n),
    h(
      v(i, n, { suspendOnWaiting: !0 }).pipe(
        f((e) => ({ ...e, query: { ...e.query, hostId: t } })),
        b(`10 seconds`),
        r(() => null),
      ),
    )
  );
}
export { F as a, L as i, z as n, M as o, B as r, N as t };
//# sourceMappingURL=device-W9B5dhsq.js.map
