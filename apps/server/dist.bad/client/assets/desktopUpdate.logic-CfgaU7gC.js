import {
  Dv as e,
  G_ as t,
  Hb as n,
  Ib as r,
  Rf as i,
  Rx as a,
  Tx as o,
  Uy as s,
  Xb as c,
  bx as l,
  dS as u,
  hx as d,
  iS as f,
  jc as p,
  jy as m,
  qf as h,
  tp as g,
  zf as _,
  zy as v,
} from "./utils-CPoejuy5.js";
var y = 3,
  b = class extends s()(`DesktopUpdateStateReadError`, { attemptCount: v, cause: m() }) {
    get message() {
      return `Failed to read the initial desktop update state after ${this.attemptCount} attempts.`;
    }
  };
function x() {
  return typeof window > `u` ? void 0 : window.desktopBridge;
}
function S(s) {
  let p = t((t) =>
    d(function* () {
      let i = s();
      if (!i) return (e(t, null), yield* o);
      let d = !1;
      yield* r(
        f(() =>
          i.onUpdateState((n) => {
            ((d = !0), e(t, n));
          }),
        ),
        (e) => f(e),
      );
      let p = yield* u({
        try: () => i.getUpdateState(),
        catch: (e) => new b({ attemptCount: y, cause: e }),
      }).pipe(
        a({ times: 2 }),
        c({
          DesktopUpdateStateReadError: (e) =>
            l(e.message, { error: e, errorTag: e._tag, attemptCount: e.attemptCount }).pipe(
              n(null),
            ),
        }),
      );
      return (!d && p !== null && e(t, p), yield* o);
    }),
  );
  return _(p, { initialValue: null }).pipe(i, h(`desktop:update-state`));
}
var C = S(x);
function w() {
  return g(p(C), T);
}
function T() {
  return null;
}
var E = `pingdotgg/t3code`,
  D = /^[A-Za-z0-9._-]+$/u;
function O(e) {
  return e !== void 0 && e !== `.` && e !== `..` && D.test(e);
}
function k(e) {
  let t = e?.trim() ?? ``,
    [n, r, ...i] = t.split(`/`);
  return `https://github.com/${O(n) && O(r) && i.length === 0 ? t : E}/releases`;
}
function A(e) {
  return e.downloadedVersion ?? e.availableVersion;
}
function j(e, t = ``) {
  let n = e?.trim();
  return n ? `${k(t)}/tag/v${encodeURIComponent(n)}` : null;
}
function M(e = ``) {
  return k(e);
}
function N(e) {
  return e.downloadedVersion &&
    (e.status === `downloaded` ||
      (e.status === `error` && (e.errorContext === null || e.errorContext === `install`)))
    ? `install`
    : e.status === `available` ||
        (e.status === `error` && e.errorContext === `download` && e.availableVersion)
      ? `download`
      : `none`;
}
function P(e) {
  return e?.hostArch === `arm64` && e.appArch === `x64`;
}
function F(e) {
  return e?.status === `downloading`;
}
function I(e) {
  if (!P(e)) return `This install is using the correct architecture.`;
  let t = N(e);
  return t === `download`
    ? `This Mac has Apple Silicon, but T3 Code is still running the Intel build under Rosetta. Download the available update to switch to the native Apple Silicon build.`
    : t === `install`
      ? `This Mac has Apple Silicon, but T3 Code is still running the Intel build under Rosetta. Restart to install the downloaded Apple Silicon build.`
      : `This Mac has Apple Silicon, but T3 Code is still running the Intel build under Rosetta. The next app update will replace it with the native Apple Silicon build.`;
}
function L(e) {
  return e.notAppliedVersion !== void 0 &&
    (e.status === `available` || e.status === `downloaded`) &&
    A(e) === e.notAppliedVersion
    ? `Update ${e.notAppliedVersion} did not apply. Click to retry.`
    : e.status === `available`
      ? `Update ${e.availableVersion ?? `available`} ready to download`
      : e.status === `downloading`
        ? `Downloading update${typeof e.downloadPercent == `number` ? ` (${Math.floor(e.downloadPercent)}%)` : ``}`
        : e.status === `downloaded`
          ? `Update ${e.downloadedVersion ?? e.availableVersion ?? `ready`} downloaded. Click to restart and install.`
          : e.status === `error`
            ? e.errorContext === `download` && e.availableVersion
              ? `Download failed for ${e.availableVersion}. Click to retry.`
              : e.errorContext === `install` && e.downloadedVersion
                ? `Install failed for ${e.downloadedVersion}. Click to retry.`
                : e.downloadedVersion
                  ? `Update ${e.downloadedVersion} downloaded. Click to restart and install.`
                  : (e.message ?? `Update failed`)
            : `Up to date`;
}
function R(e) {
  let t = e.downloadedVersion ?? e.availableVersion;
  return `Install update${t ? ` ${t}` : ``} and restart T3 Code?\n\nAny running tasks will be interrupted. Make sure you're ready before continuing.`;
}
function z(e) {
  if (!e.accepted || e.completed || typeof e.state.message != `string`) return null;
  let t = e.state.message.trim();
  return t.length > 0 ? t : null;
}
function B(e) {
  return z(e) !== null;
}
function V(e) {
  return !e || !e.enabled
    ? !1
    : e.status !== `checking` && e.status !== `downloading` && e.status !== `disabled`;
}
function H(e) {
  return !e || (e.enabled && e.status !== `disabled`)
    ? null
    : e.message?.trim() || `Automatic updates are not available in this build.`;
}
function U(e) {
  let t = H(e);
  return t
    ? { title: `Updates unavailable`, detail: t }
    : { title: `Check for updates`, detail: null };
}
export {
  H as a,
  R as c,
  F as d,
  N as f,
  w as h,
  L as i,
  M as l,
  B as m,
  I as n,
  A as o,
  P as p,
  z as r,
  U as s,
  V as t,
  j as u,
};
//# sourceMappingURL=desktopUpdate.logic-CfgaU7gC.js.map
