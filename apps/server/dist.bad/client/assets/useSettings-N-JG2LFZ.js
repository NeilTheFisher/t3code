import { i as e, t } from "./rolldown-runtime-COiEfhsA.js";
import { t as n } from "./react-BP46yLMB.js";
import { n as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Dc as i,
  Fy as a,
  Iu as o,
  JC as s,
  Jl as c,
  Km as l,
  L_ as u,
  Lf as d,
  Mc as f,
  QC as p,
  Rm as ee,
  Sx as te,
  U_ as ne,
  Uy as re,
  Vm as ie,
  Vy as ae,
  Xl as oe,
  Xu as se,
  ab as ce,
  ap as le,
  bb as ue,
  cp as m,
  cw as de,
  db as fe,
  ew as pe,
  hm as me,
  iu as he,
  jc as h,
  jy as ge,
  ox as _e,
  qC as ve,
  qf as g,
  rf as ye,
  rh as be,
  xh as xe,
  xv as Se,
  yb as Ce,
  zf as _,
} from "./utils-CPoejuy5.js";
import { D as we, E as Te } from "./runtime-CSDWbn8h.js";
import { Bt as Ee, It as De, T as Oe, en as ke, t as Ae } from "./runtime-CY2dlMEg.js";
import "./errors-CNOtAr8A.js";
import { t as v } from "./catalog-BMZrLgnL.js";
import { F as je, N as Me, P as Ne, d as Pe, g as Fe, m as y } from "./server-3D32GveR.js";
import { a as Ie, c as Le, n as Re, r as ze, t as Be, u as Ve } from "./session-0UrRHIau.js";
import { t as b } from "./use-atom-command-DGAuqAck.js";
import { t as He } from "./localApi-CWy6n-K6.js";
import { i as x } from "./toast-B4KPIJDZ.js";
import {
  A as Ue,
  F as We,
  H as Ge,
  I as Ke,
  L as qe,
  S as Je,
  T as Ye,
  U as Xe,
  b as Ze,
  c as Qe,
  i as S,
  l as $e,
  n as C,
  o as et,
  r as tt,
  v as nt,
  w as rt,
  x as it,
} from "./themePalette-CDKZ8Aa5.js";
var w = e(n(), 1),
  T = r();
function E(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e) if (t.get(n) !== r) return !1;
  return !0;
}
function at(e, t) {
  return e.phase === t.phase && e.error === t.error && e.traceId === t.traceId;
}
function ot(e, t) {
  if (e === null) return null;
  let { providers: n, ...r } = e;
  if (t === null) return r;
  let i = Object.keys(r);
  return i.length === Object.keys(t).length && i.every((e) => e in t && t[e] === r[e]) ? t : r;
}
function st(e) {
  let t = d((t) =>
      _((n) => {
        let r = n(e.catalogValueAtom).entries.get(t);
        if (r === void 0) return null;
        let i = ve(m(n(e.stateAtom(t))), () => ye),
          a = s(n.self()),
          o =
            r.unsupportedReason === void 0
              ? Ee(i)
              : { phase: `unsupported`, error: r.unsupportedReason, traceId: null },
          c = {
            entry: r,
            connection: a !== null && at(a.connection, o) ? a.connection : o,
            serverConfig: ot(n(e.serverConfigValueAtom(t)), a?.serverConfig ?? null),
          };
        return a !== null &&
          a.entry === c.entry &&
          a.connection === c.connection &&
          a.serverConfig === c.serverConfig
          ? a
          : c;
      }).pipe(g(`environment-presentation:${t}`)),
    ),
    n = new Map();
  return {
    presentationAtom: t,
    presentationsAtom: _((r) => {
      let i = new Map();
      for (let n of r(e.catalogValueAtom).entries.keys()) {
        let e = r(t(n));
        e !== null && i.set(n, e);
      }
      return (E(n, i) || (n = i), n);
    }).pipe(g(`environment-presentations`)),
    serverConfigsAtom: _((n) => {
      let r = new Map();
      for (let i of ke(n(e.catalogValueAtom))) {
        let e = n(t(i))?.serverConfig;
        e != null && r.set(i, e);
      }
      let i = s(n.self());
      return i !== null && E(i, r) ? i : r;
    }).pipe(g(`environment-server-configs-without-providers`)),
    providersByEnvironmentAtom: _((t) => {
      let n = new Map();
      for (let r of t(e.catalogValueAtom).entries.keys()) {
        let i = t(e.serverConfigValueAtom(r))?.providers;
        i !== void 0 && n.set(r, i);
      }
      let r = s(t.self());
      return r !== null && E(r, n) ? r : n;
    }).pipe(g(`environment-providers`)),
    presentationsWithProvidersAtom: _((n) => {
      let r = s(n.self()),
        i = new Map();
      for (let a of ke(n(e.catalogValueAtom))) {
        let o = n(t(a));
        if (o === null) continue;
        let s = n(e.serverConfigValueAtom(a)),
          c = r?.get(a);
        i.set(
          a,
          c !== void 0 &&
            c.entry === o.entry &&
            c.connection === o.connection &&
            c.serverConfig === s
            ? c
            : { ...o, serverConfig: s },
        );
      }
      return r !== null && E(r, i) ? r : i;
    }).pipe(g(`environment-presentations-with-providers`)),
  };
}
function ct(e, t) {
  return {
    environmentId: e,
    environmentLabel: t.entry.target.label,
    displayUrl: De(t.entry) ?? ``,
    isRelayManaged: se(t.entry),
    isEnabled: t.entry.enabled,
    connectionState: t.connection.phase,
    connectionError: t.connection.error,
    connectionErrorTraceId: t.connection.traceId,
  };
}
function lt(e) {
  let t = _((t) => {
      let n = [...t(e.catalogValueAtom).entries.keys()],
        r = s(t.self());
      return r !== null && r.length === n.length && n.every((e, t) => e === r[t]) ? r : n;
    }),
    n = _((t) => {
      let n = [...t(e.catalogValueAtom).entries].map(([e, t]) => ({
          environmentId: e,
          label: t.target.label,
        })),
        r = s(t.self());
      return r !== null &&
        r.length === n.length &&
        n.every((e, t) => e.environmentId === r[t]?.environmentId && e.label === r[t]?.label)
        ? r
        : n;
    }),
    r = d((t) =>
      _((n) => {
        let r = n(e.presentationAtom(t));
        if (r === null) return null;
        let i = ct(t, r),
          a = s(n.self());
        return a !== null &&
          a.environmentId === i.environmentId &&
          a.environmentLabel === i.environmentLabel &&
          a.displayUrl === i.displayUrl &&
          a.isRelayManaged === i.isRelayManaged &&
          a.isEnabled === i.isEnabled &&
          a.connectionState === i.connectionState &&
          a.connectionError === i.connectionError &&
          a.connectionErrorTraceId === i.connectionErrorTraceId
          ? a
          : i;
      }),
    ),
    i = _((t) => {
      let n = [];
      for (let i of t(e.catalogValueAtom).entries.keys()) {
        let e = t(r(i));
        e !== null && n.push(e);
      }
      let i = s(t.self());
      return i !== null && i.length === n.length && n.every((e, t) => e === i[t]) ? i : n;
    }).pipe(g(`environment-connection-summaries`));
  return {
    environmentIdsAtom: t,
    connectedEnvironmentIdsAtom: _((e) => {
      let n = e(t).filter((t) => e(r(t))?.connectionState === `connected`),
        i = s(e.self());
      return i !== null && i.length === n.length && n.every((e, t) => e === i[t]) ? i : n;
    }),
    identitiesAtom: n,
    environmentsAtom: i,
    machineByIdAtom: _((n) => {
      let r = new Map(n(t).map((t) => [t, me(n(e.presentationAtom(t))?.serverConfig ?? null)])),
        i = s(n.self());
      return i !== null && E(i, r) ? i : r;
    }),
    pullRequestsSupportedAtom: _((n) =>
      n(t).some(
        (t) => n(e.presentationAtom(t))?.serverConfig?.environment.capabilities.pullRequests === !0,
      ),
    ),
  };
}
var D = st({
    catalogValueAtom: v.catalogValueAtom,
    stateAtom: v.stateAtom,
    serverConfigValueAtom: y.configValueAtom,
  }),
  O = lt({ catalogValueAtom: v.catalogValueAtom, presentationAtom: D.presentationAtom }),
  ut = _(null).pipe(g(`web-environment-presentation:empty`));
function dt(e) {
  let t = (0, T.c)(5),
    n = h(v.catalogValueAtom),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === null ? ut : D.presentationAtom(e)), (t[0] = e), (t[1] = r));
  let i = h(r),
    a;
  return (
    t[2] !== n.isReady || t[3] !== i
      ? ((a = { isReady: n.isReady, presentation: i }), (t[2] = n.isReady), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
var k = `t3code:theme`,
  ft = `(prefers-color-scheme: dark)`,
  A = {
    theme: `system`,
    resolvedTheme: `light`,
    systemDark: !1,
    followSystem: !0,
    appearanceMode: `system`,
    themeHalves: null,
  };
function pt() {
  return j();
}
function mt() {
  return typeof window > `u` ? {} : ht();
}
function j() {
  if (typeof window > `u`) return null;
  try {
    return Ue(window.localStorage.getItem(S));
  } catch {
    return null;
  }
}
function ht() {
  try {
    let e = JSON.parse(window.localStorage.getItem(`t3code:theme-halves:v1`) ?? `null`);
    if (typeof e != `object` || !e) return {};
    let t = {};
    for (let n of [`light`, `dark`]) {
      let r = e[n];
      typeof r == `string` && (t[n] = r);
    }
    return t;
  } catch {
    return {};
  }
}
function M(e) {
  return `${e?.light ?? ``}|${e?.dark ?? ``}`;
}
var N = `theme-color`,
  gt = `meta[name="${N}"][data-dynamic-theme-color="true"]`,
  P = class extends re()(`ThemeStorageError`, {
    operation: a([`read`, `write`]),
    storageKey: ae,
    theme: fe(et),
    cause: ge(),
  }) {
    get message() {
      return `Failed to ${this.operation} theme preference for ${this.storageKey}.`;
    }
  },
  _t = ce(P),
  vt = class extends re()(`DesktopThemeSyncError`, { theme: et, cause: ge() }) {
    get message() {
      return `Failed to sync the ${this.theme} theme to the desktop shell.`;
    }
  },
  yt = ce(vt),
  F = [],
  I = null,
  bt = !0,
  L = null,
  R = null,
  z = null;
function B() {
  bt = !0;
  for (let e of F) e();
}
function xt() {
  return (
    typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(ft).matches
  );
}
function St(e) {
  if (typeof window > `u`) return e === `system`;
  try {
    let e = window.localStorage.getItem(tt);
    if (e === `true`) return !0;
    if (e === `false`) return !1;
  } catch {}
  return e === `system`;
}
function Ct(e) {
  return e === `light` || e === `dark` || e === `system`;
}
function V(e) {
  if (typeof window < `u`)
    try {
      let e = window.localStorage.getItem(C);
      if (Ct(e)) return e;
    } catch {}
  return St(e) ? `system` : (Ze(e) ?? `light`);
}
function wt(e) {
  if (typeof window < `u`)
    try {
      window.localStorage.setItem(C, e);
    } catch (e) {
      throw new P({ operation: `write`, storageKey: C, cause: e });
    }
}
function Tt() {
  if (typeof window > `u`) return A.theme;
  let e;
  try {
    e = window.localStorage.getItem(k);
  } catch (e) {
    throw new P({ operation: `read`, storageKey: k, cause: e });
  }
  return e !== null && Ye(e) ? $e(e) : A.theme;
}
function Et(e) {
  if (typeof window < `u`)
    try {
      (window.localStorage.setItem(k, e), (z = null));
    } catch (t) {
      throw new P({ operation: `write`, storageKey: k, theme: e, cause: t });
    }
}
function H() {
  if (z !== null) return A.theme;
  try {
    return Tt();
  } catch (e) {
    let t = _t(e) ? e : new P({ operation: `read`, storageKey: k, cause: e });
    return (
      (z = t),
      console.error(t.message, { operation: t.operation, storageKey: t.storageKey, ...o(t) }),
      A.theme
    );
  }
}
function Dt() {
  let e = document.querySelector(gt);
  return (
    e ||
    ((e = document.createElement(`meta`)),
    (e.name = N),
    e.setAttribute(`data-dynamic-theme-color`, `true`),
    document.head.append(e),
    e)
  );
}
function Ot(e) {
  let t = e?.trim().toLowerCase();
  return !t || t === `transparent` || t === `rgba(0, 0, 0, 0)` || t === `rgba(0 0 0 / 0)`
    ? null
    : (e?.trim() ?? null);
}
function kt() {
  return (
    document.querySelector(`main[data-slot='sidebar-inset']`) ??
    document.querySelector(`[data-slot='sidebar-inner']`) ??
    document.body
  );
}
function At() {
  if (typeof document > `u` || typeof getComputedStyle > `u`) return;
  let e = getComputedStyle(document.documentElement),
    t = document.documentElement.dataset.themeId
      ? Ot(e.getPropertyValue(`--app-chrome-background`))
      : null,
    n = Ot(getComputedStyle(kt()).backgroundColor),
    r = Ot(getComputedStyle(document.body).backgroundColor),
    i = t ?? n ?? r;
  if (!i) return;
  ((document.documentElement.style.backgroundColor = i), (document.body.style.backgroundColor = i));
  let a = document.querySelectorAll(`meta[name="${N}"]`);
  if (a.length === 0) Dt().setAttribute(`content`, i);
  else for (let e of a) e.setAttribute(`content`, i);
}
function U(e, { suppressTransitions: t = !1, preservePreview: n = !0 } = {}) {
  if (
    typeof document > `u` ||
    typeof window > `u` ||
    (n && document.documentElement.dataset?.themeId === `__preview`)
  )
    return;
  let r = V(e),
    i = r === `system`,
    a = i ? xt() : !1,
    o = j();
  if (
    R?.theme === e &&
    R.systemDark === a &&
    R.followSystem === i &&
    R.appearanceMode === r &&
    M(R.themeHalves) === M(o)
  ) {
    Mt(e, i, r);
    return;
  }
  t && document.documentElement.classList.add(`no-transitions`);
  let s = Ke(e, a, i, r, o);
  (Qe(qe(e, o, s), s),
    document.documentElement.classList.toggle(`dark`, s === `dark`),
    (R = { theme: e, systemDark: a, followSystem: i, appearanceMode: r, themeHalves: o }),
    At(),
    Mt(e, i, r),
    t &&
      (document.documentElement.offsetHeight,
      requestAnimationFrame(() => {
        document.documentElement.classList.remove(`no-transitions`);
      })));
}
async function jt(e, t, n, r, i = j()) {
  try {
    await e.setTheme(We(t, n, r, i));
  } catch (e) {
    throw new vt({ theme: t, cause: e });
  }
}
function Mt(e, t, n) {
  if (typeof window > `u`) return;
  let r = window.desktopBridge,
    i = j(),
    a = We(e, t, n, i);
  r &&
    typeof r.setTheme == `function` &&
    L !== a &&
    ((L = a),
    jt(r, e, t, n, i).catch((t) => {
      let n = yt(t) ? t : new vt({ theme: e, cause: t });
      (console.error(n.message, { theme: n.theme, ...o(n) }), L === a && (L = null));
    }));
}
typeof document < `u` && typeof window < `u` && U(H());
function Nt() {
  if (typeof window > `u`) return A;
  if (!bt && I) return I;
  bt = !1;
  let e = H(),
    t = V(e),
    n = t === `system`,
    r = n ? xt() : !1,
    i = j(),
    a = Ke(e, r, n, t, i);
  return (
    (I &&
      I.theme === e &&
      I.resolvedTheme === a &&
      I.systemDark === r &&
      I.followSystem === n &&
      I.appearanceMode === t &&
      M(I.themeHalves) === M(i)) ||
      (I = {
        theme: e,
        resolvedTheme: a,
        systemDark: r,
        followSystem: n,
        appearanceMode: t,
        themeHalves: i,
      }),
    I
  );
}
function Pt() {
  return A;
}
function Ft() {
  let e = H();
  (V(e) === `system` && U(e, { suppressTransitions: !0 }), B());
}
function It(e) {
  e.key === k
    ? ((z = null), U(H(), { suppressTransitions: !0 }), B())
    : e.key === `t3code:theme-follow-system` ||
        e.key === `t3code:theme-appearance-mode` ||
        e.key === `t3code:theme-halves:v1`
      ? (U(H(), { suppressTransitions: !0 }), B())
      : (e.key === `t3code:themes:v1` || e.key === null) &&
        (e.key === null && (z = null), rt(), (R = null), U(H(), { suppressTransitions: !0 }), B());
}
var W = null;
function Lt(e) {
  if (typeof window > `u`) return () => {};
  if ((F.push(e), !W)) {
    let e = typeof window.matchMedia == `function` ? window.matchMedia(ft) : null;
    (e?.addEventListener(`change`, Ft),
      window.addEventListener(`storage`, It),
      (W = () => {
        (e?.removeEventListener(`change`, Ft), window.removeEventListener(`storage`, It));
      }));
  }
  return () => {
    ((F = F.filter((t) => t !== e)), F.length === 0 && (W?.(), (W = null)));
  };
}
function Rt(e) {
  let t = Lt(e),
    n = Ge(e);
  return () => {
    (t(), n());
  };
}
function zt() {
  return it() ?? Nt().resolvedTheme;
}
function Bt() {
  let { resolvedTheme: e } = (0, w.useSyncExternalStore)(Lt, Nt, Pt);
  return (0, w.useSyncExternalStore)(Ge, it, Vt) ?? e;
}
function Vt() {
  return null;
}
function Ht(e) {
  if (typeof window > `u`) return !1;
  try {
    wt(V(H()));
    let t = window.localStorage.getItem(S);
    window.localStorage.removeItem(S);
    try {
      Et(e);
    } catch (e) {
      if (t !== null)
        try {
          window.localStorage.setItem(S, t);
        } catch {}
      throw e;
    }
  } catch (t) {
    let n = _t(t) ? t : new P({ operation: `write`, storageKey: k, theme: e, cause: t });
    return (
      console.error(n.message, {
        operation: n.operation,
        storageKey: n.storageKey,
        theme: e,
        ...o(n),
      }),
      !1
    );
  }
  return (U(e, { suppressTransitions: !0 }), B(), !0);
}
function Ut(e) {
  if (typeof window > `u`) return !1;
  try {
    wt(e);
  } catch (e) {
    let t = _t(e) ? e : new P({ operation: `write`, storageKey: C, cause: e });
    return (
      console.error(t.message, { operation: t.operation, storageKey: t.storageKey, ...o(t) }), !1
    );
  }
  return ((z = null), U(H(), { suppressTransitions: !0 }), B(), !0);
}
function Wt(e, t) {
  if (typeof window > `u`) return !1;
  try {
    let n = { ...ht() };
    (t === null ? delete n[e] : (n[e] = t),
      n.light === void 0 && n.dark === void 0
        ? window.localStorage.removeItem(S)
        : window.localStorage.setItem(S, JSON.stringify(n)));
  } catch (e) {
    let t = new P({ operation: `write`, storageKey: S, cause: e });
    return (
      console.error(t.message, { operation: t.operation, storageKey: t.storageKey, ...o(t) }), !1
    );
  }
  return (U(H(), { suppressTransitions: !0 }), B(), !0);
}
function Gt() {
  if (typeof window > `u`) return !1;
  try {
    window.localStorage.removeItem(S);
  } catch (e) {
    let t = new P({ operation: `write`, storageKey: S, cause: e });
    return (
      console.error(t.message, { operation: t.operation, storageKey: t.storageKey, ...o(t) }), !1
    );
  }
  return (U(H(), { suppressTransitions: !0 }), B(), !0);
}
function Kt({ preservePreview: e = !1 } = {}) {
  typeof window < `u` && ((R = null), U(H(), { suppressTransitions: !0, preservePreview: e }), B());
}
function qt() {
  let e = (0, T.c)(9),
    t = (0, w.useSyncExternalStore)(Lt, Nt, Pt),
    { theme: n, resolvedTheme: r } = t,
    i;
  e[0] === n
    ? (i = e[1])
    : ((i = (e) => {
        let t = V(n);
        return Ut(e ? `system` : t === `system` ? (Ze(n) ?? `light`) : t);
      }),
      (e[0] = n),
      (e[1] = i));
  let a = i,
    o;
  return (
    e[2] !== r ||
    e[3] !== a ||
    e[4] !== t.appearanceMode ||
    e[5] !== t.followSystem ||
    e[6] !== t.themeHalves ||
    e[7] !== n
      ? ((o = {
          theme: n,
          setTheme: Ht,
          setAppearanceMode: Ut,
          setFollowSystem: a,
          setThemeHalf: Wt,
          clearThemeHalves: Gt,
          refreshTheme: Kt,
          followSystem: t.followSystem,
          appearanceMode: t.appearanceMode,
          resolvedTheme: r,
          themeHalves: t.themeHalves,
        }),
        (e[2] = r),
        (e[3] = a),
        (e[4] = t.appearanceMode),
        (e[5] = t.followSystem),
        (e[6] = t.themeHalves),
        (e[7] = n),
        (e[8] = o))
      : (o = e[8]),
    o
  );
}
var Jt = t((e) => {
    var t = n();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = t.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, u],
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        l(p),
        p
      );
    };
  }),
  Yt = t((e, t) => {
    t.exports = Jt();
  })(),
  Xt = new Set([
    `continueThreadsAfterServerUpdate`,
    `sidebarAutoSettleAfterDays`,
    `sidebarAutoSettleOnMerge`,
    `autoResumeLimitedThreads`,
    `snoozeLimitedThreads`,
    `newWorktreesStartFromOrigin`,
    `sourceControlWritingStyle`,
    `textGenerationModelSelection`,
  ]);
function Zt(e) {
  let t = {},
    n = {};
  for (let [r, i] of Object.entries(e)) Xt.has(r) ? (t[r] = i) : (n[r] = i);
  return { sharedPatch: t, localPatch: n };
}
function Qt(e, t, n, r = n, i = !1) {
  let a = e.textGenerationModelSelection?.instanceId ?? r?.textGenerationModelSelection.instanceId;
  return (
    !i &&
      e.textGenerationModelSelection &&
      (!n ||
        (a !== void 0 &&
          (r?.providerInstances[a]?.driver ?? a) !== (n.providerInstances[a]?.driver ?? a)) ||
        !Me(n, { ...n.textGenerationModelSelection, ...e.textGenerationModelSelection })) &&
      (e = ue(e, [`textGenerationModelSelection`])),
    t?.threadRestartContinuation === !0 ? e : ue(e, [`continueThreadsAfterServerUpdate`])
  );
}
function $t(e) {
  return (
    e.connection.phase === `connected` &&
    e.serverConfig?.environment.capabilities.threadAutoSettlement === !0
  );
}
function en(e) {
  let t = e.atom(Se(we.pipe(te((e) => xe(e.state)))), { initialValue: Te });
  return {
    stateAtom: t,
    stateValueAtom: _((e) => ve(m(e(t)), () => Te)).pipe(g(`relay-environment-discovery-value`)),
    refresh: c(e, {
      label: `relay-environment-discovery:refresh`,
      concurrency: { mode: `singleFlight`, key: () => `refresh` },
      execute: (e) => we.pipe(_e((e) => e.refresh)),
    }),
  };
}
var tn = en(Ae);
function nn(e, t) {
  return {
    ...t,
    environmentId: e,
    label: t.entry.target.label,
    displayUrl: De(t.entry),
    relayManaged: se(t.entry),
  };
}
function rn() {
  let e = (0, T.c)(7),
    t = h(v.catalogValueAtom),
    n = h(v.networkStatusValueAtom),
    r = h(D.presentationsAtom),
    i;
  e[0] === r ? (i = e[1]) : ((i = [...r.entries()].map(an)), (e[0] = r), (e[1] = i));
  let a = i,
    o;
  return (
    e[2] !== t.isReady || e[3] !== a || e[4] !== n || e[5] !== r
      ? ((o = { isReady: t.isReady, networkStatus: n, environments: a, presentationById: r }),
        (e[2] = t.isReady),
        (e[3] = a),
        (e[4] = n),
        (e[5] = r),
        (e[6] = o))
      : (o = e[6]),
    o
  );
}
function an(e) {
  let [t, n] = e;
  return nn(t, n);
}
function on() {
  return h(D.providersByEnvironmentAtom);
}
function sn() {
  return h(Fe);
}
function cn(e) {
  let t = (0, T.c)(3),
    { presentation: n } = dt(e),
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = e === null || n === null ? null : nn(e, n)), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function G() {
  return cn(sn());
}
function ln(e) {
  let t = (0, T.c)(2),
    n = Le(e),
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = p(n) ? n.value.httpBaseUrl : null), (t[0] = n), (t[1] = r)), r
  );
}
function un() {
  return h(tn.stateValueAtom);
}
function dn() {
  return h(O.environmentIdsAtom);
}
function fn() {
  return h(O.identitiesAtom);
}
function pn() {
  return h(O.pullRequestsSupportedAtom);
}
function mn() {
  return h(O.machineByIdAtom);
}
function hn() {
  return h(O.connectedEnvironmentIdsAtom);
}
var gn = `[CLIENT_SETTINGS]`,
  _n = new Set(),
  vn = new Set(),
  yn = ee,
  K = `pending`,
  q = null,
  bn = 0,
  xn = Promise.resolve(),
  Sn = 0;
function Cn() {
  for (let e of _n) e();
}
function wn() {
  for (let e of vn) e();
}
function J() {
  return yn;
}
function Y(e) {
  ((yn = e), Cn());
}
function Tn(e) {
  K !== e && ((K = e), wn());
}
function En(e) {
  return (
    _n.add(e),
    X().catch(() => void 0),
    () => {
      _n.delete(e);
    }
  );
}
function Dn() {
  return K === `ready`;
}
function On() {
  return K;
}
function kn(e) {
  return (
    vn.add(e),
    X().catch(() => void 0),
    () => {
      vn.delete(e);
    }
  );
}
async function X() {
  if (K === `ready`) return;
  if (q) return q;
  let e = bn;
  Tn(K === `failed` || K === `retrying` ? `retrying` : `pending`);
  let t = (async () => {
    try {
      let t = await He().persistence.getClientSettings();
      if (e !== bn) return;
      (t && Y({ ...ee, ...t }), Tn(`ready`));
    } catch (t) {
      throw (
        e === bn && Tn(`failed`),
        console.error(`${gn} hydrate failed`, { operation: `hydrate`, ...o(t) }),
        t
      );
    }
  })().finally(() => {
    q === t && (q = null);
  });
  return ((q = t), q);
}
var An = (e) => He().persistence.setClientSettings(e);
function jn(e) {
  let t = xn.then(e);
  return (
    (xn = t.then(
      () => void 0,
      () => void 0,
    )),
    t
  );
}
function Mn(e, t = An) {
  let n = K !== `ready` || Sn > 0;
  return (
    n ? (Sn += 1) : Y({ ...J(), ...e }),
    jn(async () => {
      if (n)
        try {
          (K !== `ready` && (await X()), Y({ ...J(), ...e }));
        } finally {
          --Sn;
        }
      await t(J());
    }).catch((e) => {
      console.error(`${gn} persist failed`, { operation: `persist`, ...o(e) });
    })
  );
}
async function Nn(e, t = An) {
  return jn(async () => {
    for (K !== `ready` && (await X()); ;) {
      let n = J(),
        r = e(n);
      if ((await t(r), J() === n)) return (Y(r), r);
    }
  });
}
var Pn = new Set(Ce(l.fields));
function Fn(e) {
  let t = {},
    n = {};
  for (let [r, i] of Object.entries(e)) Pn.has(r) ? (t[r] = i) : (n[r] = i);
  return { serverPatch: t, clientPatch: n };
}
function In() {
  return J();
}
function Ln() {
  return X();
}
function Z() {
  return (0, w.useSyncExternalStore)(kn, Dn, Rn);
}
function Rn() {
  return !1;
}
function zn() {
  return (0, w.useSyncExternalStore)(kn, On, Bn);
}
function Bn() {
  return `pending`;
}
var Vn = () => ee,
  Hn = (e) => e;
function Q(e) {
  return (0, Yt.useSyncExternalStoreWithSelector)(En, J, Vn, e ?? Hn, de);
}
function Un(e, t) {
  return { ...t, ...e, ...je(e, t) };
}
var Wn = new Map(),
  Gn = d((e) =>
    _((t) =>
      e === null
        ? null
        : pe(m(t(v.stateAtom(e))), {
            onNone: () => null,
            onSome: (e) => (e.phase === `connected` ? e.generation : null),
          }),
    ),
  ),
  Kn = (e) => ({ favorites: e.favorites, providerModelPreferences: e.providerModelPreferences });
function $(e, t) {
  let n = (0, T.c)(11),
    r = Q(Kn),
    i = Z(),
    a;
  n[0] === e ? (a = n[1]) : ((a = Gn(e)), (n[0] = e), (n[1] = a));
  let o = h(a),
    s;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { reportFailure: !1 }), (n[2] = s))
    : (s = n[2]);
  let c = b(y.updateSettings, s),
    l,
    u;
  (n[3] !== r || n[4] !== o || n[5] !== e || n[6] !== i || n[7] !== c || n[8] !== t
    ? ((l = () => {
        if (!e || !t || !i || o === null || Wn.get(e) === o) return;
        let n = Ne(t, r);
        n && (Wn.set(e, o), c({ environmentId: e, input: { patch: n } }));
      }),
      (u = [r, o, e, i, c, t]),
      (n[3] = r),
      (n[4] = o),
      (n[5] = e),
      (n[6] = i),
      (n[7] = c),
      (n[8] = t),
      (n[9] = l),
      (n[10] = u))
    : ((l = n[9]), (u = n[10])),
    (0, w.useEffect)(l, u));
}
function qn(e, t) {
  let n = (0, T.c)(3),
    r;
  return (
    n[0] !== t || n[1] !== e
      ? ((r = (n) => {
          let r = Un(e, n);
          return t ? t(r) : r;
        }),
        (n[0] = t),
        (n[1] = e),
        (n[2] = r))
      : (r = n[2]),
    Q(r)
  );
}
function Jn(e) {
  return e.settingsHydrated
    ? e.paletteThemeActive && !e.paletteThemeAllowsArtwork && e.mode === `artwork`
      ? `pill`
      : e.mode
    : `none`;
}
function Yn() {
  let e = (0, T.c)(7),
    t = Z(),
    n = Q(Zn),
    { resolvedTheme: r, theme: i, themeHalves: a } = qt(),
    o = (0, w.useSyncExternalStore)(Ge, Je, Xn),
    s;
  if (e[0] !== n || e[1] !== o || e[2] !== r || e[3] !== t || e[4] !== i || e[5] !== a) {
    let c = qe(i, a, r),
      l = nt(c);
    ((s = Jn({
      mode: n,
      settingsHydrated: t,
      paletteThemeActive: o !== null || l !== null,
      paletteThemeAllowsArtwork: o ?? Xe(c),
    })),
      (e[0] = n),
      (e[1] = o),
      (e[2] = r),
      (e[3] = t),
      (e[4] = i),
      (e[5] = a),
      (e[6] = s));
  } else s = e[6];
  return s;
}
function Xn() {
  return null;
}
function Zn(e) {
  return e.environmentIdentificationMode;
}
function Qn() {
  let e = Z(),
    t = Q($n);
  return e && t;
}
function $n(e) {
  return e.legacySidebarEnabled;
}
async function er(e, t) {
  return (
    (e.favorites === null || e.providerModelPreferences === null) && (await Ln()),
    { ...Ne(e, In()), ...t }
  );
}
function tr(e) {
  let t = (0, T.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e ? y.settingsValueAtom(e) : rr), (t[0] = e), (t[1] = n));
  let r = h(n),
    i = b(y.updateSettings, `model preferences update`),
    a;
  return (
    t[2] !== e || t[3] !== i || t[4] !== r
      ? ((a = async (t) => {
          if (!e || !r) return;
          let n;
          try {
            n = await er(r, t);
          } catch {
            x.add({
              type: `error`,
              title: `Model preferences not saved`,
              description: `Could not load saved model preferences. Try again.`,
            });
            return;
          }
          return i({ environmentId: e, input: { patch: n } });
        }),
        (t[2] = e),
        (t[3] = i),
        (t[4] = r),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function nr(e) {
  let t = (0, T.c)(5),
    n = (0, w.use)(f),
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = new Map()), (t[0] = r)) : (r = t[0]);
  let i = (0, w.useRef)(r),
    a = tr(e),
    o;
  return (
    t[1] !== e || t[2] !== n || t[3] !== a
      ? ((o = async (t, r) => {
          if (!e) return;
          let o = y.settingsValueAtom(e),
            s = n.get(o);
          if (!s) return;
          if (s.favorites === null)
            try {
              await Ln();
            } catch {
              x.add({
                type: `error`,
                title: `Favorites not saved`,
                description: `Could not load saved model preferences. Try again.`,
              });
              return;
            }
          let c = n.get(o) ?? s,
            l = je(c, In()).favorites,
            u = JSON.stringify([e, t, r]),
            d = i.current.get(u),
            f = {
              favorite: !(d && (d.pending || d.settings.favorites === c.favorites)
                ? d.favorite
                : l.some((e) => e.provider === t && e.model === r)),
              settings: c,
              pending: !0,
            };
          i.current.set(u, f);
          let p = await a({ setModelFavorites: [{ provider: t, model: r, favorite: f.favorite }] });
          (p && le(p) && n.get(o)?.favorites === c.favorites && (f.pending = !1),
            f.pending &&
              i.current.get(u) === f &&
              (d && !d.pending && n.get(o)?.favorites === d.settings.favorites
                ? i.current.set(u, d)
                : i.current.delete(u)));
        }),
        (t[1] = e),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var rr = _(null);
function ir(e) {
  let t = (0, T.c)(5),
    n;
  t[0] === e ? (n = t[1]) : ((n = e ? y.settingsValueAtom(e) : rr), (t[0] = e), (t[1] = n));
  let r = h(n),
    i = Q(Kn);
  $(e, r);
  let a = r ?? ie,
    o;
  return (
    t[2] !== i || t[3] !== a ? ((o = je(a, i)), (t[2] = i), (t[3] = a), (t[4] = o)) : (o = t[4]), o
  );
}
function ar(e, t) {
  let n = (0, T.c)(2),
    r;
  n[0] === e ? (r = n[1]) : ((r = y.settingsValueAtom(e)), (n[0] = e), (n[1] = r));
  let i = h(r);
  return ($(e, i), qn(i ?? ie, t));
}
function or(e) {
  let t = (0, T.c)(4),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let r = b(y.mutateProviderInstance, n),
    i;
  return (
    t[1] !== e || t[2] !== r
      ? ((i = (t, n) =>
          r({
            environmentId: e,
            input: { patch: n === void 0 ? {} : n, providerInstanceMutation: t },
          })),
        (t[1] = e),
        (t[2] = r),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
function sr(e) {
  let t = G(),
    n = h(Pe);
  return ($(t?.environmentId ?? null, t?.serverConfig?.settings ?? null), qn(n, e));
}
var cr = `This setting is saved on a server, and the hosted app is not anchored to one. Change it from the desktop app or from the server's own address.`;
function lr() {
  let e = (0, T.c)(2),
    t = G(),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = t !== null || !Oe()), (e[0] = t), (e[1] = n)), n);
}
function ur(e) {
  let t = (0, T.c)(3),
    n = e !== void 0 && e,
    { environments: r } = rn(),
    i = r.filter($t).map(dr),
    a = h(Re(Ve(i))),
    o;
  return (
    t[0] !== n || t[1] !== a
      ? ((o = (e, t) => {
          let r = a[t];
          if (n && r._tag === `Initial`) return [e];
          let i = r._tag === `Failure` ? null : s(m(r));
          return i !== null && ne(i, `settings:write`) ? [e] : [];
        }),
        (t[0] = n),
        (t[1] = a),
        (t[2] = o))
      : (o = t[2]),
    i.flatMap(o)
  );
}
function dr(e) {
  let { environmentId: t } = e;
  return t;
}
function fr(e) {
  let t = (0, T.c)(10);
  Ie(e, u);
  let n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { label: `server settings update`, reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let r = b(y.updateSettings, n),
    { environments: a } = rn(),
    o;
  t[1] !== a || t[2] !== r
    ? ((o = async (e) => {
        let t = await r(e);
        if (t._tag === `Failure` && !oe(t)) {
          let n = a.find((t) => t.environmentId === e.environmentId)?.label ?? e.environmentId,
            r = he(t);
          x.add({
            type: `error`,
            title: `Setting not saved`,
            description: `Could not save on ${n}: ${r instanceof Error ? r.message : `The save failed. Try reconnecting and saving again.`}`,
          });
        }
        return t;
      }),
      (t[1] = a),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c = ur(!0),
    l;
  return (
    t[4] !== e || t[5] !== a || t[6] !== r || t[7] !== s || t[8] !== c
      ? ((l = (t) => {
          let { serverPatch: n, clientPatch: o } = Fn(t),
            l = e === null || be(n).every((t) => ze(e, t));
          if (
            (Object.keys(n).length > 0 &&
              !l &&
              x.add({
                type: `warning`,
                title: `Setting not saved`,
                description: `This connection lacks permission to change settings on ${a.find((t) => t.environmentId === e)?.label ?? `the selected environment`}.`,
              }),
            Object.keys(n).length > 0 && l)
          ) {
            let { sharedPatch: t, localPatch: o } = Zt(n),
              l = _r;
            if (
              (Object.keys(o).length > 0 &&
                (e ? s({ environmentId: e, input: { patch: o } }) : l()),
              Object.keys(t).length > 0)
            ) {
              let n = a.find((t) => t.environmentId === e)?.serverConfig?.settings,
                o = new Set(c);
              e && o.add(e);
              let s = [],
                u = [];
              for (let r of o) {
                let o = a.find((e) => e.environmentId === r),
                  c = Qt(
                    t,
                    o?.serverConfig?.environment.capabilities,
                    o?.serverConfig?.settings,
                    n,
                    r === e,
                  );
                Object.keys(c).length !== 0 &&
                  (i.get(Be.sessionStateAtom(r))._tag !== `Initial` && !be(t).every((e) => ze(r, e))
                    ? u.push(o?.label ?? r)
                    : s.push({ environmentId: r, input: { patch: c } }));
              }
              s.length === 0
                ? l(
                    u.length > 0
                      ? `This connection lacks permission to change settings on ${u.join(`, `)}.`
                      : o.size > 0
                        ? `Update older servers to save this setting.`
                        : void 0,
                  )
                : Promise.all(
                    s.map(async (e) => ({
                      label:
                        a.find((t) => t.environmentId === e.environmentId)?.label ??
                        e.environmentId,
                      result: await r(e),
                    })),
                  ).then(pr);
            }
          }
          Object.keys(o).length > 0 && Mn(o);
        }),
        (t[4] = e),
        (t[5] = a),
        (t[6] = r),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function pr(e) {
  let t = e.flatMap(gr);
  if (t.length === 0) return;
  let n = e.filter(hr).map(mr);
  x.add({
    type: `error`,
    title: n.length > 0 ? `Setting saved on some environments` : `Setting not saved`,
    description: [...t, ...(n.length > 0 ? [`Saved on ${n.join(`, `)}.`] : [])].join(`
`),
  });
}
function mr(e) {
  let { label: t } = e;
  return t;
}
function hr(e) {
  let { result: t } = e;
  return t._tag === `Success`;
}
function gr(e) {
  let { label: t, result: n } = e;
  if (n._tag !== `Failure` || oe(n)) return [];
  let r = he(n);
  return [
    `Could not save on ${t}: ${r instanceof Error ? r.message : `The save failed. Try reconnecting and saving again.`}`,
  ];
}
function _r(e) {
  let t = e === void 0 ? cr : e;
  return x.add({ type: `warning`, title: `Setting not saved`, description: t });
}
function vr(e) {
  return fr(e);
}
function yr() {
  return fr(G()?.environmentId ?? null);
}
function br(e) {
  return Mn(e);
}
export {
  mn as A,
  pt as B,
  vr as C,
  ln as D,
  cn as E,
  pn as F,
  Bt as G,
  Tt as H,
  un as I,
  O as J,
  qt as K,
  tn as L,
  rn as M,
  G as N,
  fn as O,
  sn as P,
  zt as R,
  tr as S,
  hn as T,
  Rt as U,
  mt as V,
  At as W,
  dt as Y,
  $ as _,
  Mn as a,
  lr as b,
  br as c,
  zn as d,
  Yn as f,
  qn as g,
  Qn as h,
  Un as i,
  on as j,
  dn as k,
  Q as l,
  ar as m,
  Ln as n,
  Nn as o,
  ir as p,
  D as q,
  In as r,
  En as s,
  cr as t,
  Z as u,
  or as v,
  yr as w,
  nr as x,
  sr as y,
  V as z,
};
//# sourceMappingURL=useSettings-N-JG2LFZ.js.map
