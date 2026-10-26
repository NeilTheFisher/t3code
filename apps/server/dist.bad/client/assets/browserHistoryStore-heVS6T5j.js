import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Bh as t,
  Dc as n,
  J as r,
  K as i,
  W as a,
  X as o,
  Y as s,
  Yn as c,
  _h as l,
  gh as u,
  id as d,
  jc as f,
  mc as p,
  od as m,
  rd as h,
  rl as g,
} from "./utils-CPoejuy5.js";
import { S as ee, a as _ } from "./entities-CgVpsCCl.js";
import { _ as te } from "./runtime-CY2dlMEg.js";
import { l as ne, n as v, r as y } from "./useSettings-N-JG2LFZ.js";
import { g as b } from "./server-3D32GveR.js";
import { i as x } from "./session-0UrRHIau.js";
import { r as S, t as re } from "./preview-BuXyUmSo.js";
var C = e();
function ie(e) {
  if (_(e) && !(p() && e !== n.get(b))) return `server`;
}
function w(e, t, n, r) {
  return !r || !n || !p() || e === t ? null : r.runtime === `server` ? `desktop` : `server`;
}
function ae(e) {
  return p() || _(e);
}
function oe(e) {
  let t = (0, C.c)(2),
    n = ee(e),
    r;
  return (t[0] === n ? (r = t[1]) : ((r = p() || n), (t[0] = n), (t[1] = r)), r);
}
function T(e, t, n) {
  return c && n?.runtime === `server` && t !== null && e === t;
}
function E(e, t) {
  let n = (0, C.c)(4),
    r = f(b),
    i;
  return (
    n[0] !== e || n[1] !== t || n[2] !== r
      ? ((i = T(e, r, t)), (n[0] = e), (n[1] = t), (n[2] = r), (n[3] = i))
      : (i = n[3]),
    i
  );
}
var D = (e) =>
    e._tag === `fill`
      ? `fill`
      : `${e._tag}:${e.width}:${e.height}:${e._tag === `preset` ? e.presetId : ``}`,
  O = (e) => (Number.isFinite(e) && e > 0 ? e : 1),
  se = (e, t) => O(e) / O(t);
function ce(e, t, n = 1) {
  if (e._tag !== `fill`) return e;
  let r = O(n);
  return t
    ? {
        _tag: `freeform`,
        width: Math.max(1, Math.round(t.width / t.scale / r)),
        height: Math.max(1, Math.round(t.height / t.scale / r)),
      }
    : { _tag: `freeform`, width: 1280, height: 800 };
}
function k(e) {
  return { width: Math.max(1, e.width - 20), height: Math.max(1, e.height - 38 - 10) };
}
function A(e, t, n = 1) {
  let r = Math.max(1, Math.round(e.width)),
    i = Math.max(1, Math.round(e.height));
  if (t._tag === `fill`)
    return {
      canvasWidth: r,
      canvasHeight: i,
      viewportX: 0,
      viewportY: 0,
      viewportWidth: r,
      viewportHeight: i,
      viewportScale: 1,
      fillsPanel: !0,
    };
  let a = O(n),
    o = t.width * a,
    s = t.height * a,
    c = Math.min(1, r / o, i / s),
    l = o * c,
    u = s * c;
  return {
    canvasWidth: r,
    canvasHeight: i,
    viewportX: Math.max(0, Math.round((r - l) / 2)),
    viewportY: Math.max(0, Math.round((i - u) / 2)),
    viewportWidth: l,
    viewportHeight: u,
    viewportScale: c,
    fillsPanel: !1,
  };
}
function le(e, t, n = 1) {
  let r = A(k(e), t, n);
  return {
    ...r,
    canvasWidth: Math.max(1, Math.round(e.width)),
    canvasHeight: Math.max(1, Math.round(e.height)),
    viewportX: r.viewportX + 10,
    viewportY: r.viewportY + 38,
  };
}
var j = (e) => Math.min(l, Math.max(240, e)),
  ue = (e) => e !== void 0 && Number.isFinite(e) && e > 0;
function M(e, t, n) {
  if (n === `width`) {
    let n = Math.ceil(Math.max(240, 240 * t)),
      r = Math.floor(Math.min(l, l * t, Math.sqrt(u * t))),
      i = Math.min(r, Math.max(n, Math.round(e))),
      a = Math.round(i / t);
    for (; i * a > 8294400 && i > n;) (--i, (a = Math.round(i / t)));
    return { width: i, height: a };
  }
  let r = Math.ceil(Math.max(240, 240 / t)),
    i = Math.floor(Math.min(l, l / t, Math.sqrt(u / t))),
    a = Math.min(i, Math.max(r, Math.round(e))),
    o = Math.round(a * t);
  for (; o * a > 8294400 && a > r;) (--a, (o = Math.round(a * t)));
  return { width: o, height: a };
}
function N(e, t, n = 1, r = `southeast`, i) {
  let a = O(n),
    o = r.includes(`east`) ? t.x : r.includes(`west`) ? -t.x : 0,
    s = r.includes(`south`) ? t.y : r.includes(`north`) ? -t.y : 0,
    c = e.width + o / a,
    l = e.height + s / a;
  if (ue(i)) {
    let t = o !== 0 || r === `east` || r === `west`,
      n = s !== 0 || r === `north` || r === `south`,
      a =
        t && !n
          ? `width`
          : n && !t
            ? `height`
            : Math.abs(c - e.width) / e.width >= Math.abs(l - e.height) / e.height
              ? `width`
              : `height`;
    return M(a === `width` ? c : l, i, a);
  }
  let d = j(Math.round(c)),
    f = j(Math.round(l));
  return (
    d * f <= 8294400 ||
      (Math.abs(o) >= Math.abs(s)
        ? (d = Math.max(240, Math.floor(u / f)))
        : (f = Math.max(240, Math.floor(u / d)))),
    { width: d, height: f }
  );
}
var P = (e, t, n) => {
    let r = (e < n ? (n + e) / 2 : e) + t;
    return r <= n ? r * 2 - n : r;
  },
  F = (e, t, n) => {
    if (e > n) {
      let r = e - n;
      return t <= r ? e - t : n - (t - r) * 2;
    }
    let r = (n - e) / 2 + t;
    return r >= 0 ? n - r * 2 : n - r;
  };
function I(e, t, n, r = 1, i = `southeast`, a) {
  let o = O(r),
    s = e.width * o,
    c = e.height * o,
    l = i.includes(`east`) ? P(s, t.x, n.width) : i.includes(`west`) ? F(s, t.x, n.width) : s,
    u = i.includes(`south`) ? P(c, t.y, n.height) : i.includes(`north`) ? F(c, t.y, n.height) : c,
    d = l - s,
    f = u - c;
  return N(e, { x: i.includes(`west`) ? -d : d, y: i.includes(`north`) ? -f : f }, o, i, a);
}
function L(e, t = 1) {
  let n = k(e),
    r = O(t);
  return N({ width: n.width / r, height: n.height / r }, { x: 0, y: 0 });
}
var R = (e) => {
  let n = t(e.browserProfiles);
  return {
    viewport: e.browserDefaultViewport,
    zoomFactor: e.browserDefaultZoomFactor,
    appearance: e.browserDefaultAppearance,
    autoShowFloatingPreview: e.browserAutoShowFloatingPreview,
    profiles: n,
    profileId:
      n.find((t) => t.id === e.browserDefaultProfileId && t.kind !== `incognito`)?.id ?? `default`,
  };
};
function z() {
  return R(y());
}
async function B() {
  return (await v(), z());
}
function V() {
  return ne(R);
}
function H(e = z()) {
  return { zoomFactor: e.zoomFactor, colorScheme: e.appearance };
}
function U(e = z()) {
  return e.viewport;
}
function de(e = z()) {
  return e.profileId;
}
var fe = { width: 1024, height: 768 };
function pe(e) {
  let t = e.defaults ?? z();
  return t.viewport._tag === `fill`
    ? { _tag: `freeform`, ...(e.panelRect ? L(e.panelRect, e.zoomFactor) : fe) }
    : t.viewport;
}
var me = (e) => {
    let t = x(e);
    if (!t) throw Error(`Environment ${e} is not connected.`);
    return new URL(t.httpBaseUrl);
  },
  he = (e, t, n, r, i) => {
    if (!d(n.hostname))
      throw Error(
        `This environment port needs the planned authenticated preview gateway; its server address is not directly private-network reachable.`,
      );
    let a = t.protocol ?? `http`,
      o = t.path?.startsWith(`/`) ? t.path : `/${t.path ?? ``}`,
      s = n.hostname.replace(/^\[|\]$/g, ``),
      c = h(s) ? `localhost` : s.includes(`:`) ? `[${s}]` : s,
      l = i ? new URL(i) : new URL(o, `${a}://${c}:${t.port}`);
    return (
      i && ((l.hostname = c), (l.port = String(t.port))),
      {
        requestedUrl: r ?? `${a}://localhost:${t.port}${o}`,
        resolvedUrl: l.toString(),
        resolutionKind: h(s) ? `direct` : `direct-private-network`,
        environmentId: e,
      }
    );
  },
  ge = (e) => c && (e._tag === `PrimaryConnectionTarget` || te(e));
function _e(e, t) {
  try {
    let n = S(t),
      r = new URL(n);
    if (!re(r.hostname)) return n;
    let i = x(e)?.target;
    return i && ge(i)
      ? n
      : he(
          e,
          {
            kind: `environment-port`,
            port: Number(r.port || (r.protocol === `https:` ? 443 : 80)),
            protocol: r.protocol === `https:` ? `https` : `http`,
            path: `${r.pathname}${r.search}${r.hash}`,
          },
          me(e),
          t,
          r,
        ).resolvedUrl;
  } catch {
    return t;
  }
}
var ve = 2048,
  ye = 864e13;
function W(e) {
  return typeof e == `number` && Number.isFinite(e) && Math.abs(e) <= ye;
}
function G(e) {
  let t;
  try {
    t = new URL(S(e));
  } catch {
    return null;
  }
  return ((t.username = t.password = ``), t.href.length > ve ? null : t.href);
}
function K(e, t) {
  let n = new URL(q(e, t));
  return (
    n.pathname !== `/` && n.pathname.endsWith(`/`) && (n.pathname = n.pathname.slice(0, -1)), n.href
  );
}
function q(e, t) {
  let n = new URL(e),
    r = m(n.hostname),
    i = t && m(t);
  return ((h(r) || r === `0.0.0.0` || r === i) && (n.hostname = `local`), n.href);
}
function J(e) {
  let t = m(new URL(e).hostname);
  return h(t) || t === `0.0.0.0`;
}
function be(e, t, n, r) {
  let i = q(t, r?.environmentHostname),
    a = e.find((e) => q(e.url, r?.environmentHostname) === i),
    o = e.filter((e) => q(e.url, r?.environmentHostname) !== i),
    s = r?.insertOrdered && a && a.lastVisitedAt > n ? a.lastVisitedAt : n,
    c = a && (J(a.url) || !J(t)) ? a.url : t,
    l = a ? { ...a, url: c, lastVisitedAt: s } : { url: t, lastVisitedAt: s };
  if (!r?.insertOrdered) return [l, ...o].slice(0, 50);
  let u = o.findIndex((e) => e.lastVisitedAt < l.lastVisitedAt);
  return (u === -1 ? [...o, l] : o.toSpliced(u, 0, l)).slice(0, 50);
}
function Y(e) {
  let t = Object.keys(e);
  if (t.length <= 20) return e;
  let n = t
    .toSorted((t, n) => (e[n]?.[0]?.lastVisitedAt ?? 0) - (e[t]?.[0]?.lastVisitedAt ?? 0))
    .slice(0, 20);
  return Object.fromEntries(n.map((t) => [t, e[t] ?? []]));
}
function X(e) {
  if (!e || typeof e != `object`) return { byProjectKey: {} };
  let t = e.byProjectKey;
  if (!t || typeof t != `object` || Array.isArray(t)) return { byProjectKey: {} };
  let n = {};
  for (let [e, r] of Object.entries(t)) {
    if (!Array.isArray(r)) continue;
    let t = new Set(),
      i = r
        .flatMap((e) => {
          if (!e || typeof e != `object`) return [];
          let { url: t, lastVisitedAt: n, title: r } = e;
          if (typeof t != `string`) return [];
          let i = G(t);
          return !i || !W(n)
            ? []
            : [
                {
                  url: i,
                  lastVisitedAt: n,
                  ...(typeof r == `string` && r.length > 0 ? { title: r.slice(0, 512) } : {}),
                },
              ];
        })
        .toSorted((e, t) => t.lastVisitedAt - e.lastVisitedAt)
        .filter((e) => {
          let n = q(e.url);
          return !t.has(n) && (t.add(n), !0);
        })
        .slice(0, 50);
    i.length > 0 && (n[e] = i);
  }
  return { byProjectKey: Y(n) };
}
var xe = `t3code:browser-history:v1`,
  Se = 20;
function Z(e, t, n) {
  let r = e[t] ?? [],
    i = { ...e };
  i[t] = [...r, n].slice(-10);
  let a = Object.keys(i);
  if (a.length > Se) {
    let e = a[0];
    e !== void 0 && e !== t && delete i[e];
  }
  return i;
}
var Q = o()(
  s(
    (e, t) => ({
      byProjectKey: {},
      projectKeyByThreadKey: {},
      pendingVisitsByThreadKey: {},
      pendingTitlesByThreadKey: {},
      recordVisit: (t, n, r, i) => {
        let a = G(n);
        a &&
          e((e) => ({
            byProjectKey: Y({ ...e.byProjectKey, [t]: be(e.byProjectKey[t] ?? [], a, r, i) }),
          }));
      },
      setTitleForUrl: (n, r, i, a) => {
        let o = G(r),
          s = t(),
          c = s.byProjectKey[n],
          l = i.trim().slice(0, 512);
        if (!o || !c || l.length === 0) return;
        let u = K(o, a),
          d = c.findIndex((e) => K(e.url, a) === u);
        d !== -1 &&
          c[d]?.title !== l &&
          e({
            byProjectKey: {
              ...s.byProjectKey,
              [n]: c.map((e, t) => (t === d ? { ...e, title: l } : e)),
            },
          });
      },
      removeUrl: (n, r) => {
        let i = G(r),
          a = t(),
          o = a.byProjectKey[n];
        if (!i || !o) return;
        let s = o.filter((e) => e.url !== i);
        if (s.length !== o.length) {
          if (s.length === 0) {
            let { [n]: t, ...r } = a.byProjectKey;
            e({ byProjectKey: r });
          } else e({ byProjectKey: { ...a.byProjectKey, [n]: s } });
        }
      },
      registerThreadProject: (n, r) => {
        let i = g(n),
          a = t(),
          o = a.pendingVisitsByThreadKey[i],
          s = a.pendingTitlesByThreadKey[i];
        if (a.projectKeyByThreadKey[i] === r && !o && !s) return;
        let c = { ...a.pendingVisitsByThreadKey },
          l = { ...a.pendingTitlesByThreadKey };
        (delete c[i],
          delete l[i],
          e({
            projectKeyByThreadKey: { ...a.projectKeyByThreadKey, [i]: r },
            pendingVisitsByThreadKey: c,
            pendingTitlesByThreadKey: l,
          }));
        for (let e of o ?? [])
          t().recordVisit(r, e.url, e.at, {
            insertOrdered: !0,
            environmentHostname: e.environmentHostname,
          });
        for (let e of s ?? []) t().setTitleForUrl(r, e.url, e.title, e.environmentHostname);
      },
    }),
    {
      name: xe,
      version: 1,
      storage: r(() => a(typeof window < `u` ? window.localStorage : void 0)),
      partialize: (e) => ({
        byProjectKey: e.byProjectKey,
        projectKeyByThreadKey: e.projectKeyByThreadKey,
      }),
      migrate: X,
      merge: $,
    },
  ),
);
function $(e, t) {
  let n = X(e);
  return {
    ...t,
    ...n,
    projectKeyByThreadKey: Ce(e, n.byProjectKey),
    pendingVisitsByThreadKey: {},
    pendingTitlesByThreadKey: {},
  };
}
function Ce(e, t) {
  if (!e || typeof e != `object`) return {};
  let n = e.projectKeyByThreadKey;
  return !n || typeof n != `object` || Array.isArray(n)
    ? {}
    : Object.fromEntries(
        Object.entries(n)
          .filter((e) => typeof e[1] == `string` && e[1] in t)
          .slice(-100),
      );
}
function we(e, t, n) {
  let r = g(e),
    i = Q.getState(),
    a = i.projectKeyByThreadKey[r],
    o = n ?? Date.now(),
    s = x(e.environmentId),
    c = s ? new URL(s.httpBaseUrl).hostname : null;
  a
    ? i.recordVisit(a, t, o, { environmentHostname: c })
    : Q.setState({
        pendingVisitsByThreadKey: Z(i.pendingVisitsByThreadKey, r, {
          url: t,
          at: o,
          environmentHostname: c,
        }),
      });
}
function Te(e, t, n, r) {
  let i = g(e),
    a = Q.getState(),
    o = a.projectKeyByThreadKey[i];
  o
    ? a.setTitleForUrl(o, t, n, r)
    : Q.setState({
        pendingTitlesByThreadKey: Z(a.pendingTitlesByThreadKey, i, {
          url: t,
          title: n,
          environmentHostname: r,
        }),
      });
}
function Ee(e, t) {
  let n = Q.getState(),
    r = n.projectKeyByThreadKey[g(e)];
  r && n.removeUrl(r, t);
}
var De = [];
function Oe(e, t) {
  let n = (0, C.c)(3),
    r;
  return (
    n[0] !== t || n[1] !== e
      ? ((r = (n) => {
          let r = n.projectKeyByThreadKey[g(e)],
            i = r ? n.byProjectKey[r] : void 0;
          return i && i.length > 0 ? i.slice(0, t) : De;
        }),
        (n[0] = t),
        (n[1] = e),
        (n[2] = r))
      : (r = n[2]),
    Q(i(r))
  );
}
export {
  ie as C,
  E,
  ae as S,
  oe as T,
  le as _,
  Oe as a,
  ce as b,
  U as c,
  B as d,
  V as f,
  k as g,
  N as h,
  Te as i,
  H as l,
  I as m,
  we as n,
  _e as o,
  D as p,
  Ee as r,
  de as s,
  W as t,
  pe as u,
  se as v,
  T as w,
  w as x,
  A as y,
};
//# sourceMappingURL=browserHistoryStore-heVS6T5j.js.map
