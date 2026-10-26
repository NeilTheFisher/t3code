import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Dc as t,
  Fy as n,
  Gh as r,
  JC as i,
  Uf as a,
  Uy as o,
  Vy as s,
  Wf as c,
  ab as l,
  cp as u,
  db as d,
  jc as f,
  jx as p,
  jy as m,
  m_ as h,
  ox as g,
  qf as _,
  rS as v,
  tS as y,
  wm as b,
  zS as x,
  zf as ee,
  zy as S,
} from "./utils-CPoejuy5.js";
import { T as C, n as w, x as T } from "./runtime-CSDWbn8h.js";
import { Ht as E, Wt as D } from "./runtime-CY2dlMEg.js";
var O = n([
    `fetch-session-state`,
    `exchange-bootstrap-credential`,
    `fetch-environment-descriptor`,
    `create-pairing-credential`,
    `list-pairing-links`,
    `revoke-pairing-link`,
    `list-client-sessions`,
    `revoke-client-session`,
    `revoke-other-client-sessions`,
  ]),
  k = class e extends o()(`PrimaryEnvironmentRequestError`, {
    operation: O,
    status: S,
    pairingLinkId: d(s),
    sessionId: d(s),
    cause: m(),
  }) {
    static fromCause(t) {
      let n = W(t.cause) ?? 500;
      return new e({
        operation: t.operation,
        status: n,
        ...(t.pairingLinkId === void 0 ? {} : { pairingLinkId: t.pairingLinkId }),
        ...(t.sessionId === void 0 ? {} : { sessionId: t.sessionId }),
        cause: t.cause,
      });
    }
    get message() {
      return `Primary environment request failed during ${this.operation} (HTTP ${this.status}).`;
    }
  },
  te = l(k),
  A = class extends o()(`PrimaryEnvironmentPairingCredentialRejectedError`, {
    providedLength: S,
    cause: m(),
  }) {
    get message() {
      return `Invalid pairing token. Check the token and try again.`;
    }
  },
  j = class extends o()(`PrimaryEnvironmentAuthSessionTimeoutError`, {
    timeoutMs: S,
    elapsedMs: S,
  }) {
    get message() {
      return `Timed out waiting for authenticated session after bootstrap.`;
    }
  },
  M = class extends o()(`PrimaryEnvironmentPairingCredentialRequiredError`, { providedLength: S }) {
    get message() {
      return `Enter a pairing token to continue.`;
    }
  },
  N = l(r),
  P = null,
  F = null,
  I = !1,
  L = 2e3,
  R = 100;
function z() {
  return E(new URL(window.location.href));
}
function B() {
  let e = new URL(window.location.href),
    t = D(e);
  t.toString() !== e.toString() && window.history.replaceState({}, document.title, t.toString());
}
function V() {
  let e = z();
  return e ? (B(), e) : null;
}
function H() {
  let e = (window.desktopBridge?.getLocalEnvironmentBootstraps() ?? []).find((e) => e.id === b);
  return typeof e?.bootstrapToken == `string` && e.bootstrapToken.length > 0
    ? e.bootstrapToken
    : null;
}
async function U() {
  return X(async () => {
    try {
      return await w(T.pipe(g((e) => e.auth.session({ headers: {} }))));
    } catch (e) {
      throw k.fromCause({ operation: `fetch-session-state`, cause: e });
    }
  });
}
function W(e) {
  return N(e) ? ne(e) : h(e) && e.response !== void 0 ? e.response.status : null;
}
function ne(e) {
  switch (e._tag) {
    case `EnvironmentRequestInvalidError`:
      return 400;
    case `EnvironmentAuthInvalidError`:
      return 401;
    case `EnvironmentScopeRequiredError`:
    case `EnvironmentOperationForbiddenError`:
      return 403;
    case `EnvironmentResourceNotFoundError`:
      return 404;
    case `EnvironmentInternalError`:
      return 500;
  }
}
async function G(e) {
  return X(async () => {
    try {
      return await w(T.pipe(g((t) => t.auth.browserSession({ payload: { credential: e } }))));
    } catch (t) {
      throw N(t) && t._tag === `EnvironmentAuthInvalidError` && t.reason === `invalid_credential`
        ? new A({ providedLength: e.length, cause: t })
        : k.fromCause({ operation: `exchange-bootstrap-credential`, cause: t });
    }
  });
}
async function K() {
  let e = Date.now();
  for (;;) {
    let t = await U();
    if (t.authenticated) return t;
    let n = Date.now() - e;
    if (n >= L) throw new j({ timeoutMs: L, elapsedMs: n });
    await Z(R);
  }
}
var q = new Set([502, 503, 504]),
  J = 15e3,
  Y = 500;
async function X(e) {
  let t = Date.now();
  for (;;)
    try {
      return await e();
    } catch (e) {
      if (!re(e) || Date.now() - t >= J) throw e;
      await Z(Y);
    }
}
function Z(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function re(e) {
  return te(e)
    ? q.has(e.status)
    : e instanceof TypeError || (e instanceof DOMException && e.name === `AbortError`);
}
async function Q(e) {
  let t = await U();
  if (t.authenticated && !e) return { status: `authenticated` };
  let n = e ?? H();
  if (!n) return { status: `requires-auth`, auth: t.auth };
  try {
    return (await G(n), await K(), { status: `authenticated` });
  } catch (e) {
    return {
      status: `requires-auth`,
      auth: t.auth,
      errorMessage: e instanceof Error ? e.message : `Authentication failed.`,
    };
  }
}
async function ie(e) {
  let t = e.trim();
  if (!t) throw new M({ providedLength: e.length });
  ((F = null), await G(t), await K(), (F = { status: `authenticated` }), (P = null), (I = !1), B());
}
async function ae(e) {
  let t = e?.label?.trim();
  try {
    return await w(
      T.pipe(
        g((n) =>
          n.auth.pairingCredential({
            headers: {},
            payload: { ...(t ? { label: t } : {}), ...(e?.scopes ? { scopes: e.scopes } : {}) },
          }),
        ),
      ),
    );
  } catch (e) {
    throw k.fromCause({ operation: `create-pairing-credential`, cause: e });
  }
}
async function oe(e) {
  try {
    await w(T.pipe(g((t) => t.auth.revokePairingLink({ headers: {}, payload: { id: e } }))));
  } catch (t) {
    throw k.fromCause({ operation: `revoke-pairing-link`, pairingLinkId: e, cause: t });
  }
}
async function se(e) {
  try {
    await w(T.pipe(g((t) => t.auth.revokeClient({ headers: {}, payload: { sessionId: e } }))));
  } catch (t) {
    throw k.fromCause({ operation: `revoke-client-session`, sessionId: e, cause: t });
  }
}
async function ce() {
  try {
    return (await w(T.pipe(g((e) => e.auth.revokeOtherClients({ headers: {} }))))).revokedCount;
  } catch (e) {
    throw k.fromCause({ operation: `revoke-other-client-sessions`, cause: e });
  }
}
async function le() {
  if ((window.location.pathname.replace(/\/+$/, ``) === `/pair` ? z() && (I = !0) : (I = !1), I))
    return { status: `requires-auth`, auth: (await U()).auth };
  let e = V(),
    t = P;
  if (e) F = null;
  else {
    if (t) return t;
    if (F?.status === `authenticated`) return F;
  }
  let n = t ? t.catch(() => void 0).then(() => ((F = null), Q(e))) : Q(e);
  return (
    (P = n),
    n
      .then((e) => (P === n && e.status === `authenticated` && (F = e), e))
      .finally(() => {
        P === n && (P = null);
      })
  );
}
var ue = e(),
  $ = ee(v(() => (C() ? y(null) : p(U)))).pipe(
    c({ staleTime: 5e3, revalidateOnMount: !0 }),
    a(3e5),
    _(`primary-environment:session`),
  );
function de() {
  t.refresh($);
}
function fe() {
  let e = (0, ue.c)(8),
    t = f($),
    n = null;
  if (t._tag === `Failure`) {
    let r;
    e[0] === t.cause ? (r = e[1]) : ((r = x(t.cause)), (e[0] = t.cause), (e[1] = r));
    let i = r;
    n = i instanceof Error ? i.message : `Could not read environment session.`;
  }
  let r;
  e[2] === t ? (r = e[3]) : ((r = i(u(t))), (e[2] = t), (e[3] = r));
  let a;
  return (
    e[4] !== n || e[5] !== t.waiting || e[6] !== r
      ? ((a = { data: r, error: n, isPending: t.waiting, refresh: de }),
        (e[4] = n),
        (e[5] = t.waiting),
        (e[6] = r),
        (e[7] = a))
      : (a = e[7]),
    a
  );
}
export { ce as a, B as c, le as i, ie as l, ae as n, se as o, z as r, oe as s, fe as t };
//# sourceMappingURL=primary-dPukDZB2.js.map
