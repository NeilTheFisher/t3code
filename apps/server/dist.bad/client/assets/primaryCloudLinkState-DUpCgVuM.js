import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Cu as t,
  Cx as n,
  Dc as r,
  F_ as i,
  Fy as a,
  HS as o,
  Hf as s,
  JC as c,
  Jh as l,
  Kh as u,
  Ky as d,
  Lf as f,
  Lp as p,
  Md as m,
  Mx as h,
  Rf as g,
  Sx as ee,
  Uf as te,
  Uh as ne,
  Uy as _,
  Vh as v,
  Vy as y,
  Wf as re,
  Wh as ie,
  Xg as b,
  Yh as ae,
  ZC as oe,
  Zb as se,
  ab as ce,
  bC as le,
  cp as ue,
  cx as x,
  dS as de,
  db as fe,
  du as pe,
  ex as me,
  gf as he,
  iS as S,
  jc as ge,
  mS as C,
  mv as w,
  pu as T,
  qf as E,
  qh as D,
  sp as O,
  xx as k,
  yf as A,
  yv as j,
  yy as M,
  zC as N,
  zS as P,
  zf as F,
} from "./utils-CPoejuy5.js";
import { c as I, r as L, s as _e, y as R } from "./runtime-CSDWbn8h.js";
import "./runtime-CY2dlMEg.js";
import { N as ve } from "./useSettings-N-JG2LFZ.js";
import { a as ye, r as z } from "./session-0UrRHIau.js";
var be = e(),
  xe = class extends _()(`RelayClientInstallConfirmationConflictError`, {
    requestedVersion: y,
    activeVersion: y,
    activeDialogStatus: a([`confirming`, `installing`, `closing`]),
    activeInstallStage: fe(v),
  }) {
    get message() {
      return `Cannot confirm relay client installation ${this.requestedVersion}; installation ${this.activeVersion} has dialog status ${this.activeDialogStatus}.`;
    }
  },
  B = { status: `idle` },
  V = B,
  H = null,
  U = new Set();
function W(e) {
  V = e;
  for (let e of U) e();
}
function Se() {
  return V;
}
function Ce(e) {
  return (
    U.add(e),
    () => {
      U.delete(e);
    }
  );
}
function we(e) {
  if (V.status !== `idle`) {
    let t = V.status === `closing` ? V.view : V;
    return Promise.reject(
      new xe({
        requestedVersion: e,
        activeVersion: t.version,
        activeDialogStatus: V.status,
        ...(t.status === `installing` ? { activeInstallStage: t.stage } : {}),
      }),
    );
  }
  return (
    W({ status: `confirming`, version: e }),
    new Promise((e) => {
      H = e;
    })
  );
}
function Te(e) {
  if (V.status !== `confirming` || !H) return;
  let t = H;
  ((H = null),
    W(
      e
        ? { status: `installing`, version: V.version, stage: `checking` }
        : { status: `closing`, view: V },
    ),
    t(e));
}
function Ee(e) {
  V.status === `installing` && e.type === `progress` && W({ ...V, stage: e.stage });
}
function De() {
  (H?.(!1),
    (H = null),
    (V.status === `confirming` || V.status === `installing`) && W({ status: `closing`, view: V }));
}
function Oe() {
  V.status === `closing` && W(B);
}
function G() {
  return I().relayUrl;
}
var K = class extends le(`CloudEnvironmentLinkError`) {},
  q = (e) => (t) => new K({ message: e, cause: t }),
  ke = x(`linkEnvironment.ensureRelayClientAvailable`)(function* (e) {
    let r = yield* t,
      i = yield* r
        .run(e, pe(p.cloudGetRelayClientStatus, {}))
        .pipe(n(q(`Could not check relay client availability.`)));
    if (i.status === `available`) return;
    if (i.status === `unsupported`)
      return yield* new K({
        message: `T3 Code cannot install the relay client automatically on ${i.platform}-${i.arch}.`,
      });
    if (
      !(yield* de({
        try: () => we(i.version),
        catch: q(`Could not confirm relay client installation.`),
      }))
    )
      return yield* new K({ message: `Relay client installation was cancelled.` });
    let a = yield* r
      .runStream(e, T(p.cloudInstallRelayClient, {}).pipe(j((e) => S(() => Ee(e)))))
      .pipe(w, n(q(`Could not install the relay client.`)), me(S(De)));
    if (oe(a) || a.value.type !== `complete`)
      return yield* new K({
        message: `The relay client install completed without a final status.`,
      });
    let o = a.value.status;
    if (o.status !== `available`)
      return yield* new K({
        message:
          o.status === `unsupported`
            ? `T3 Code cannot install the relay client automatically on ${o.platform}-${o.arch}.`
            : `The relay client is still unavailable after installation.`,
      });
  }),
  Ae = ce(d([ie, ae, D, u, l, ne]));
function J(e) {
  return (t) => {
    let n = t._tag === `ManagedRelayRequestFailedError` ? t : void 0,
      r = n?.traceId,
      i = n ? he(n) : null;
    return new K({ message: i ? `${e}: ${i}` : e, cause: t, ...(r ? { traceId: r } : {}) });
  };
}
function Y(e) {
  return Ae(e) ? e : typeof e != `object` || !e ? null : `cause` in e ? Y(e.cause) : null;
}
var X = (e) => (t) => {
  let n = Y(t);
  return new K({ message: n ? `${e.replace(/[.:]$/, ``)}: ${n.message}` : e, cause: t });
};
function je(e) {
  let t = new URL(e);
  return {
    localHttpHost: `127.0.0.1`,
    localHttpPort: Number(t.port || (t.protocol === `https:` ? 443 : 80)),
  };
}
var Me = `cloudflare_tunnel`;
function Ne(e) {
  return e.link.environmentId === e.expectedEnvironmentId
    ? e.link.endpoint.providerKind === e.expectedProviderKind
      ? C
      : new K({ message: `Relay returned credentials for a different endpoint provider.` })
    : new K({ message: `Relay returned credentials for a different environment.` });
}
var Pe = x(`linkEnvironment.readPrimaryCloudLinkState`)(function* (e) {
    return yield* (yield* A(e.target.httpBaseUrl)).connect
      .linkState({ headers: {} })
      .pipe(n(X(`Could not read environment cloud link state.`)));
  }, h(R)),
  Fe = x(`linkEnvironment.updatePrimaryCloudPreferences`)(function* (e) {
    let t = yield* A(e.target.httpBaseUrl),
      { target: r, ...i } = e;
    return yield* t.connect
      .preferences({ headers: {}, payload: i })
      .pipe(n(X(`Could not update environment cloud preferences.`)));
  }, h(R)),
  Ie = x(`linkEnvironment.unlinkPrimaryEnvironmentFromCloud`)(function* (e) {
    (yield* (yield* A(e.target.httpBaseUrl)).connect
      .unlink({ headers: {} })
      .pipe(n(X(`Could not unlink the environment from cloud.`))),
      G() &&
        e.clerkToken &&
        (yield* (yield* m)
          .unlinkEnvironment({
            clerkToken: e.clerkToken,
            environmentId: M.make(e.target.environmentId),
          })
          .pipe(
            se((e) =>
              k(`Could not revoke cloud environment link after local unlink.`, { cause: e }),
            ),
          )));
  }, h(R)),
  Z = `manual`,
  Le = x(`linkEnvironment.linkPrimaryEnvironmentToCloud`)(function* (e) {
    let t = G();
    if (!t) return yield* new K({ message: `T3CODE_RELAY_URL is not configured.` });
    let r = (e.mode ?? `managed`) === `managed`,
      i = r ? Me : Z,
      a = yield* m,
      o = yield* A(e.target.httpBaseUrl);
    r && (yield* ke(M.make(e.target.environmentId)));
    let s = yield* a
        .createEnvironmentLinkChallenge({
          clerkToken: e.clerkToken,
          payload: {
            notificationsEnabled: !0,
            liveActivitiesEnabled: !0,
            managedTunnelsEnabled: r,
          },
        })
        .pipe(n(J(`${t}/v1/client/environment-link-challenges failed`))),
      c = yield* o.connect
        .linkProof({
          headers: {},
          payload: {
            challenge: s.challenge,
            relayIssuer: t,
            endpoint: {
              httpBaseUrl: e.target.httpBaseUrl,
              wsBaseUrl: e.target.wsBaseUrl,
              providerKind: i,
            },
            origin: je(e.target.httpBaseUrl),
          },
        })
        .pipe(n(X(`Could not obtain environment link proof.`))),
      l = yield* a
        .linkEnvironment({
          clerkToken: e.clerkToken,
          payload: {
            proof: c,
            notificationsEnabled: !0,
            liveActivitiesEnabled: !0,
            managedTunnelsEnabled: r,
          },
        })
        .pipe(n(J(`${t}/v1/client/environment-links failed`)));
    (yield* Ne({ expectedEnvironmentId: e.target.environmentId, expectedProviderKind: i, link: l }),
      yield* o.connect
        .relayConfig({
          headers: {},
          payload: {
            relayUrl: t,
            relayIssuer: l.relayIssuer,
            cloudUserId: l.cloudUserId,
            environmentCredential: l.environmentCredential,
            cloudMintPublicKey: l.cloudMintPublicKey,
            endpointRuntime: l.endpointRuntime,
          },
        })
        .pipe(n(X(`Could not configure environment relay access.`))));
  }, h(R)),
  Re = s(o(b, L.contextEffect.pipe(ee((e) => N(e, b))))),
  Q = f((e) => {
    let t = JSON.parse(e);
    return Re.atom(Pe({ target: t })).pipe(
      re({ staleTime: 5e3, revalidateOnMount: !0 }),
      te(3e5),
      E(`primary-cloud-link:${t.environmentId}`),
    );
  }),
  ze = F(O(null)).pipe(g, E(`primary-cloud-link:null`));
function $(e) {
  return JSON.stringify(e);
}
function Be(e) {
  e && z(M.make(e.environmentId), `relay:read`) && r.refresh(Q($(e)));
}
function Ve(e) {
  if (!z(M.make(e.environmentId), `relay:read`)) return null;
  let t = r.get(Q($(e)));
  return t._tag === `Success` ? t.value : null;
}
function He() {
  let e = (0, be.c)(16),
    t = ve(),
    n = ye(t?.environmentId ?? null, i),
    r,
    a;
  e[0] !== n || e[1] !== t
    ? ((a =
        t?.entry.target._tag === `PrimaryConnectionTarget`
          ? {
              environmentId: t.environmentId,
              label: t.label,
              httpBaseUrl: t.entry.target.httpBaseUrl,
              wsBaseUrl: t.entry.target.wsBaseUrl,
            }
          : null),
      (r = a && _e() && n ? Q($(a)) : ze),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r),
      (e[3] = a))
    : ((r = e[2]), (a = e[3]));
  let o = ge(r),
    s;
  e[4] === a
    ? (s = e[5])
    : ((s = () => {
        Be(a);
      }),
      (e[4] = a),
      (e[5] = s));
  let l = s,
    u = null;
  if (o._tag === `Failure`) {
    let t;
    e[6] === o.cause ? (t = e[7]) : ((t = P(o.cause)), (e[6] = o.cause), (e[7] = t));
    let n = t;
    u = n instanceof Error ? n.message : `Could not read T3 Connect link state.`;
  }
  let d;
  e[8] === o ? (d = e[9]) : ((d = o._tag === `Failure` ? null : c(ue(o))), (e[8] = o), (e[9] = d));
  let f;
  return (
    e[10] !== u || e[11] !== l || e[12] !== o.waiting || e[13] !== d || e[14] !== a
      ? ((f = { data: d, error: u, isPending: o.waiting, refresh: l, target: a }),
        (e[10] = u),
        (e[11] = l),
        (e[12] = o.waiting),
        (e[13] = d),
        (e[14] = a),
        (e[15] = f))
      : (f = e[15]),
    f
  );
}
export { Fe as a, Te as c, Ie as i, Ce as l, He as n, Oe as o, Le as r, Se as s, Ve as t };
//# sourceMappingURL=primaryCloudLinkState-DUpCgVuM.js.map
