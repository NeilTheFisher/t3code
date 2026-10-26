import {
  B_ as e,
  Dc as t,
  Ob as n,
  Rf as r,
  Uy as i,
  V_ as a,
  Wf as o,
  cx as s,
  dS as c,
  jy as l,
  qf as u,
  zf as d,
} from "./utils-CPoejuy5.js";
import { E as f, Ht as p, S as m, Ut as h } from "./runtime-CY2dlMEg.js";
import { f as g, o as _ } from "./desktopUpdate.logic-CfgaU7gC.js";
var v = 3e4,
  y = class extends i()(`DesktopWslStateUnavailableError`, {}) {
    get message() {
      return `Desktop WSL state is unavailable.`;
    }
  },
  b = class extends i()(`DesktopWslStateLoadError`, { cause: l() }) {
    get message() {
      return `Failed to load WSL state.`;
    }
  };
function x() {
  return typeof window > `u` ? void 0 : window.desktopBridge;
}
function S(e) {
  let t = s(`loadDesktopWslState`)(function* () {
    let t = e();
    return t
      ? yield* c({ try: () => t.getWslState(), catch: (e) => new b({ cause: e }) })
      : yield* new y();
  });
  return d(t()).pipe(o({ staleTime: v, revalidateOnMount: !0 }), r, u(`desktop:wsl-state:load`));
}
var C = S(x);
function w() {
  t.refresh(C);
}
function T(e, t) {
  let n = new URL(e);
  return ((n.pathname = `/pair`), h(n, t).toString());
}
function E(e, t) {
  return new URL(e).protocol === `https:` ? m({ host: e, token: t }) : null;
}
function D(t, n, r) {
  let i = (e) => e.filter((e) => e !== n);
  if (!r) return n === `terminal:read` ? i(t).filter((t) => t !== e) : i(t);
  let o = [...i(t), n];
  return n === `terminal:operate` && !o.includes(`terminal:read`) ? [...o, a] : o;
}
function O(e) {
  return e === null || e.some((e) => !e.current);
}
function k(e) {
  return e.status !== `unavailable` && e.reachability !== `loopback`;
}
function A(e) {
  return e && e.mode !== `network-accessible` && !e.tailscaleServeEnabled
    ? `Turn on Network access to detect Tailscale.`
    : `Start Tailscale to set up HTTPS access through MagicDNS.`;
}
function j(e) {
  let { state: t, error: n } = e;
  return t ? t.available || t.enabled || t.wslOnly : n !== null;
}
function M(e) {
  if (!e) return `Up to date`;
  if (e.status === `downloading`)
    return e.availableVersion ? `Downloading update ${e.availableVersion}` : `Downloading update`;
  let t = g(e);
  if (
    t === `install` ||
    e.status === `downloaded` ||
    (e.status === `checking` && e.downloadedVersion !== null)
  ) {
    let t = _(e);
    return t ? `Update ${t} downloaded` : `Update downloaded`;
  }
  return t === `download`
    ? e.availableVersion
      ? `Update ${e.availableVersion} available`
      : `Update available`
    : `Up to date`;
}
function N(e, t, n) {
  return (
    (t === null ? void 0 : e.find((e) => e.id === t)) ??
    (n === null ? void 0 : e.find((e) => e.preferenceKey === n)) ??
    e.find((e) => e.qrShareable) ??
    e[0] ??
    null
  );
}
async function P(e) {
  let { bridge: t, mode: n, nextDistro: r, persistedDistro: i } = e;
  return (
    await t.setWslOnly(n === `wsl-only`),
    i !== r && (await t.setWslDistro(r)),
    await t.setWslBackendEnabled(!0)
  );
}
var F = new Intl.DateTimeFormat(void 0, { dateStyle: `medium`, timeStyle: `short` });
function I(e) {
  let t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : F.format(t);
}
function L(e) {
  let t = e.host.trim();
  if (t.length === 0) throw Error(`SSH host or alias is required.`);
  let n = t,
    r = e.username.trim() || null,
    i = null,
    a = n.lastIndexOf(`@`);
  if (a > 0) {
    let e = n.slice(0, a).trim();
    ((n = n.slice(a + 1).trim()), !r && e.length > 0 && (r = e));
  }
  let o = /^\[([^\]]+)\](?::(\d+))?$/u.exec(n);
  if (o) ((n = o[1].trim()), o[2] && (i = Number.parseInt(o[2], 10)));
  else {
    let e = n.split(`:`);
    e.length === 2 &&
      /^\d+$/u.test(e[1] ?? ``) &&
      ((n = e[0].trim()), (i = Number.parseInt(e[1], 10)));
  }
  let s = e.port.trim();
  if ((s.length > 0 && (i = Number.parseInt(s, 10)), n.length === 0))
    throw Error(`SSH host or alias is required.`);
  if (i !== null && (!Number.isInteger(i) || i <= 0 || i > 65535))
    throw Error(`SSH port must be between 1 and 65535.`);
  return { alias: n, hostname: n, username: r, port: i };
}
function R(e) {
  let t = e.trim();
  if (!t) return null;
  try {
    let e = /^[a-zA-Z][a-zA-Z\d+.-]*:\/\//u.test(t) || t.startsWith(`//`) ? t : `https://${t}`,
      n = new URL(e, window.location.origin),
      r = f(n);
    if (r) return { host: r.host, pairingCode: r.token };
    let i = p(n);
    return i ? { host: n.origin, pairingCode: i } : null;
  } catch {
    return null;
  }
}
function z(e) {
  let t = R(e.host);
  if (t) return t;
  let n = e.host.trim(),
    r = e.pairingCode.trim();
  if (!n) throw Error(`Enter a backend host.`);
  if (!r) throw Error(`Enter a pairing code.`);
  return { host: n, pairingCode: r };
}
function B(e) {
  let t = `Failed to connect SSH host.`;
  return (
    (e instanceof Error ? e.message : t)
      .replace(/^Error invoking remote method 'desktop:ensure-ssh-environment':\s*/u, ``)
      .replace(/^Ssh[A-Za-z]+Error:\s*/u, ``)
      .trim() || t
  );
}
function V(e) {
  return [...e].toSorted(
    (e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime(),
  );
}
function H(e, t) {
  return [
    `${e.length} ${e.length === 1 ? `client` : `clients`}`,
    t.length > 0 ? `${t.length} ${t.length === 1 ? `pairing link` : `pairing links`}` : null,
  ]
    .filter((e) => e !== null)
    .join(` · `);
}
function U(e) {
  return [...e].toSorted((e, t) =>
    e.current === t.current
      ? e.connected === t.connected
        ? new Date(t.issuedAt).getTime() - new Date(e.issuedAt).getTime()
        : e.connected
          ? -1
          : 1
      : e.current
        ? -1
        : 1,
  );
}
function W(e) {
  return {
    ...e,
    scopes: e.permissions ?? e.scopes,
    createdAt: n(e.createdAt),
    expiresAt: n(e.expiresAt),
  };
}
function G(e) {
  return {
    ...e,
    scopes: e.permissions ?? e.scopes,
    issuedAt: n(e.issuedAt),
    expiresAt: n(e.expiresAt),
    lastConnectedAt: e.lastConnectedAt === null ? null : n(e.lastConnectedAt),
  };
}
function K(e, t) {
  let n = e.filter((e) => e.status !== `unavailable`);
  if (t) {
    let e = n.find((e) => J(e) === t);
    if (e) return e;
  }
  return (
    n.find((e) => e.isDefault) ??
    n.find((e) => e.reachability !== `loopback`) ??
    n.find((e) => e.compatibility.hostedHttpsApp === `compatible`) ??
    null
  );
}
function q(e) {
  return e.id.startsWith(`tailscale-magicdns:`);
}
function J(e) {
  if (e.id.startsWith(`desktop-loopback:`)) return `desktop-core:loopback:http`;
  if (e.id.startsWith(`desktop-lan:`)) return `desktop-core:lan:http`;
  if (e.id.startsWith(`tailscale-ip:`)) return `tailscale:ip:http`;
  if (q(e)) return `tailscale:magicdns:https`;
  let t = `unknown`;
  try {
    t = new URL(e.httpBaseUrl).protocol.replace(/:$/u, ``);
  } catch {}
  return `${e.provider.id}:${e.reachability}:${t}:${e.label}`;
}
function Y(e, t) {
  return e.compatibility.hostedHttpsApp === `compatible`
    ? (E(e.httpBaseUrl, t) ?? T(e.httpBaseUrl, t))
    : T(e.httpBaseUrl, t);
}
function X(e) {
  let t = new URL(`/pair`, window.location.href);
  return h(t, e).toString();
}
function Z(e) {
  try {
    let t = new URL(e);
    return t.pathname === `/pair` && t.searchParams.has(`host`);
  } catch {
    return !1;
  }
}
function Q(e, t) {
  if (Z(t)) return `Opens the hosted app, no install needed`;
  switch (e.reachability) {
    case `lan`:
      return `Devices on the same network`;
    case `private-network`:
      return `Devices on your private network`;
    case `public`:
      return `Reachable from anywhere`;
    case `loopback`:
      return `Clients on this machine`;
  }
}
export {
  G as C,
  E as D,
  T as E,
  C as O,
  H as S,
  D as T,
  M as _,
  I as a,
  U as b,
  k as c,
  A as d,
  L as f,
  X as g,
  Y as h,
  Q as i,
  w as k,
  q as l,
  z as m,
  O as n,
  B as o,
  R as p,
  J as r,
  Z as s,
  P as t,
  j as u,
  K as v,
  W as w,
  V as x,
  N as y,
};
//# sourceMappingURL=ConnectionsSettings.logic-exfH66oh.js.map
