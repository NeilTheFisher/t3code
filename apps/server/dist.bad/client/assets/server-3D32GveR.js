import {
  $m as e,
  Bb as t,
  Bm as n,
  Bv as r,
  Cb as i,
  Cx as a,
  Ex as o,
  FC as s,
  Gm as c,
  Gv as l,
  Hv as u,
  JC as d,
  Jl as ee,
  Jm as te,
  Jp as f,
  Km as ne,
  Kv as re,
  Lf as ie,
  NC as p,
  Nm as m,
  PC as h,
  PS as ae,
  Pm as oe,
  Qy as se,
  Sb as ce,
  Ss as g,
  Tb as le,
  Vl as ue,
  Vm as de,
  Vy as fe,
  Wv as pe,
  Ym as me,
  Yy as he,
  Zm as ge,
  ah as _,
  cp as v,
  cw as y,
  eb as _e,
  fm as ve,
  iS as b,
  ib as ye,
  jm as be,
  jp as xe,
  nh as Se,
  oh as Ce,
  pm as x,
  qC as we,
  qc as Te,
  qf as S,
  qy as Ee,
  rf as De,
  uC as Oe,
  wb as C,
  xb as ke,
  zS as w,
  zf as T,
} from "./utils-CPoejuy5.js";
import {
  Bt as Ae,
  Ft as je,
  Mt as Me,
  Nt as Ne,
  Pt as Pe,
  kt as Fe,
  t as E,
} from "./runtime-CY2dlMEg.js";
import { t as D } from "./catalog-BMZrLgnL.js";
import { l as Ie, t as Le } from "./session-0UrRHIau.js";
function Re(e) {
  return ee(e, {
    label: `environment-data:server:update-outdated-server`,
    scheduler: ue(),
    concurrency: { mode: `singleFlight`, key: ({ environmentId: e }) => e },
    execute: (e, n) => {
      let r = je(e.environmentId),
        i = e.input.targetVersion,
        a = e.fromVersion ?? i,
        s = `downloading`,
        c = (e) =>
          b(() => {
            ((s = e), n.set(r, { status: `running`, stage: e, fromVersion: a, targetVersion: i }));
          });
      return c(s).pipe(
        t(Me(e.environmentId, e.input, c)),
        o((e) =>
          b(() => {
            Oe(e) || ae(e.cause)
              ? n.set(r, { status: `idle` })
              : n.set(r, {
                  status: `failed`,
                  stage: s,
                  fromVersion: a,
                  targetVersion: i,
                  message: Pe(w(e.cause)),
                });
          }),
        ),
      );
    },
  });
}
var ze = he(ye(Ee)),
  Be = le((e) => {
    let t = e.replace(/("(?:[^"\\]|\\.)*")|\/\/[^\n]*|\/\*[\s\S]*?\*\//g, (e, t) => (t ? e : ` `));
    return (
      (t = t.replace(/("(?:[^"\\]|\\.)*")|,(\s*[}\]])/g, (e, t, n) => (t ? e : (n ?? ``)))),
      ze(t).pipe(a((e) => e.issue))
    );
  }),
  Ve = new ke(Be, C());
i().pipe(ce(C({ space: 2 })));
var O = (e) => fe.pipe(se(e, Ve)),
  k = {
    performance: {
      profile: `performance`,
      automaticGitFetchInterval: h(15),
      providerHealthRefreshInterval: p(1),
      hostPowerMonitorActiveInterval: h(30),
      hostPowerMonitorIdleInterval: p(2),
      idleClientTtl: h(45),
      pauseWhenHostLocked: !0,
      pauseWhenHostLowPower: !1,
      pauseWhenClientLowPower: !1,
      pauseWhenOnBattery: !1,
    },
    balanced: {
      profile: `balanced`,
      automaticGitFetchInterval: m,
      providerHealthRefreshInterval: n,
      hostPowerMonitorActiveInterval: h(30),
      hostPowerMonitorIdleInterval: p(5),
      idleClientTtl: h(45),
      pauseWhenHostLocked: !0,
      pauseWhenHostLowPower: !0,
      pauseWhenClientLowPower: !0,
      pauseWhenOnBattery: !1,
    },
    "battery-saver": {
      profile: `battery-saver`,
      automaticGitFetchInterval: h(0),
      providerHealthRefreshInterval: p(15),
      hostPowerMonitorActiveInterval: p(1),
      hostPowerMonitorIdleInterval: p(10),
      idleClientTtl: h(45),
      pauseWhenHostLocked: !0,
      pauseWhenHostLowPower: !0,
      pauseWhenClientLowPower: !0,
      pauseWhenOnBattery: !0,
    },
  };
function A(e) {
  return k[e];
}
function j(e) {
  return e.profile === `custom` ? (e.baseProfile ?? `balanced`) : e.profile;
}
function He(e) {
  let t = j(e),
    n = k[t],
    r = e.profile === `custom` ? e.overrides : {};
  return {
    profile: t,
    automaticGitFetchInterval: r.automaticGitFetchInterval ?? n.automaticGitFetchInterval,
    providerHealthRefreshInterval:
      r.providerHealthRefreshInterval ?? n.providerHealthRefreshInterval,
    hostPowerMonitorActiveInterval:
      r.hostPowerMonitorActiveInterval ?? n.hostPowerMonitorActiveInterval,
    hostPowerMonitorIdleInterval: r.hostPowerMonitorIdleInterval ?? n.hostPowerMonitorIdleInterval,
    idleClientTtl: r.idleClientTtl ?? n.idleClientTtl,
    pauseWhenHostLocked: r.pauseWhenHostLocked ?? n.pauseWhenHostLocked,
    pauseWhenHostLowPower: r.pauseWhenHostLowPower ?? n.pauseWhenHostLowPower,
    pauseWhenClientLowPower: r.pauseWhenClientLowPower ?? n.pauseWhenClientLowPower,
    pauseWhenOnBattery: r.pauseWhenOnBattery ?? n.pauseWhenOnBattery,
  };
}
function M(e, t) {
  return s(e) === s(t);
}
function Ue(e, t) {
  return (
    M(e.automaticGitFetchInterval, t.automaticGitFetchInterval) &&
    M(e.providerHealthRefreshInterval, t.providerHealthRefreshInterval) &&
    M(e.hostPowerMonitorActiveInterval, t.hostPowerMonitorActiveInterval) &&
    M(e.hostPowerMonitorIdleInterval, t.hostPowerMonitorIdleInterval) &&
    M(e.idleClientTtl, t.idleClientTtl) &&
    e.pauseWhenHostLocked === t.pauseWhenHostLocked &&
    e.pauseWhenHostLowPower === t.pauseWhenHostLowPower &&
    e.pauseWhenClientLowPower === t.pauseWhenClientLowPower &&
    e.pauseWhenOnBattery === t.pauseWhenOnBattery
  );
}
function We(e) {
  if (e.profile !== `custom`) return { schemaVersion: 1, profile: e.profile, overrides: {} };
  let t = He(e),
    n = [j(e), `balanced`, `performance`, `battery-saver`];
  for (let e of n) if (Ue(t, k[e])) return { schemaVersion: 1, profile: e, overrides: {} };
  let r = j(e),
    i = k[r];
  return {
    schemaVersion: 1,
    profile: `custom`,
    baseProfile: r,
    overrides: {
      ...(M(t.automaticGitFetchInterval, i.automaticGitFetchInterval)
        ? {}
        : { automaticGitFetchInterval: t.automaticGitFetchInterval }),
      ...(M(t.providerHealthRefreshInterval, i.providerHealthRefreshInterval)
        ? {}
        : { providerHealthRefreshInterval: t.providerHealthRefreshInterval }),
      ...(M(t.hostPowerMonitorActiveInterval, i.hostPowerMonitorActiveInterval)
        ? {}
        : { hostPowerMonitorActiveInterval: t.hostPowerMonitorActiveInterval }),
      ...(M(t.hostPowerMonitorIdleInterval, i.hostPowerMonitorIdleInterval)
        ? {}
        : { hostPowerMonitorIdleInterval: t.hostPowerMonitorIdleInterval }),
      ...(M(t.idleClientTtl, i.idleClientTtl) ? {} : { idleClientTtl: t.idleClientTtl }),
      ...(t.pauseWhenHostLocked === i.pauseWhenHostLocked
        ? {}
        : { pauseWhenHostLocked: t.pauseWhenHostLocked }),
      ...(t.pauseWhenHostLowPower === i.pauseWhenHostLowPower
        ? {}
        : { pauseWhenHostLowPower: t.pauseWhenHostLowPower }),
      ...(t.pauseWhenClientLowPower === i.pauseWhenClientLowPower
        ? {}
        : { pauseWhenClientLowPower: t.pauseWhenClientLowPower }),
      ...(t.pauseWhenOnBattery === i.pauseWhenOnBattery
        ? {}
        : { pauseWhenOnBattery: t.pauseWhenOnBattery }),
    },
  };
}
function N(e) {
  let t = { schemaVersion: 1, profile: oe, overrides: {} },
    r =
      e.backgroundActivity.profile === t.profile &&
      e.backgroundActivity.baseProfile === void 0 &&
      Object.keys(e.backgroundActivity.overrides).length === 0,
    i = e.backgroundActivityProfile,
    a =
      i !== `balanced` ||
      s(e.automaticGitFetchInterval) !== s(m) ||
      s(e.providerHealthRefreshInterval) !== s(n);
  return He(
    r && a
      ? {
          schemaVersion: 1,
          profile:
            s(e.automaticGitFetchInterval) === s(A(i).automaticGitFetchInterval) &&
            s(e.providerHealthRefreshInterval) === s(A(i).providerHealthRefreshInterval)
              ? i
              : `custom`,
          baseProfile: i,
          overrides: {
            ...(s(e.automaticGitFetchInterval) === s(A(i).automaticGitFetchInterval)
              ? {}
              : { automaticGitFetchInterval: e.automaticGitFetchInterval }),
            ...(s(e.providerHealthRefreshInterval) === s(A(i).providerHealthRefreshInterval)
              ? {}
              : { providerHealthRefreshInterval: e.providerHealthRefreshInterval }),
          },
        }
      : e.backgroundActivity,
  );
}
function Ge(e) {
  let t = N(e);
  return We({
    schemaVersion: 1,
    profile: `custom`,
    baseProfile: t.profile,
    overrides: {
      automaticGitFetchInterval: t.automaticGitFetchInterval,
      providerHealthRefreshInterval: t.providerHealthRefreshInterval,
      hostPowerMonitorActiveInterval: t.hostPowerMonitorActiveInterval,
      hostPowerMonitorIdleInterval: t.hostPowerMonitorIdleInterval,
      idleClientTtl: t.idleClientTtl,
      pauseWhenHostLocked: t.pauseWhenHostLocked,
      pauseWhenHostLowPower: t.pauseWhenHostLowPower,
      pauseWhenClientLowPower: t.pauseWhenClientLowPower,
      pauseWhenOnBattery: t.pauseWhenOnBattery,
    },
  });
}
var Ke = O(ne);
_e(Ke);
function qe(t, n) {
  let r = t.providerInstances[n.instanceId];
  return r === void 0 ? e(n.instanceId) : Ce(r);
}
var P = [`codex`, `claudeAgent`, `cursor`, `grok`, `muse`, `pi`, `opencode`, `antigravity`].map(
  (e) => pe.make(e),
);
function Je(e, t, n) {
  let i = [
    ...P.map((e) => [re(e), e]),
    ...(n?.includeConfiguredInstances === !0
      ? Object.entries(e).flatMap(([e, t]) => (P.includes(t.driver) ? [[l.make(e), t.driver]] : []))
      : []),
  ].find(([e, n]) => t(e, n));
  if (i === void 0) return null;
  let [a, o] = i,
    s = n?.defaultModelSelection,
    c = e[a]?.config;
  return s?.instanceId === a && Te(c?.customModels).some((e) => e.slug === s.model)
    ? s
    : { instanceId: a, model: u[o] ?? r[o] ?? `gpt-6-luna` };
}
function F(e, t, n) {
  let r = e.sourceControlWriterModelSelection;
  if (!r || !_(e, n, r.instanceId)) return e.textGenerationModelSelection;
  if (t === void 0) return r;
  let i = t.find((e) => e.instanceId === r.instanceId);
  return i?.enabled === !0 && ve(i) && x(i) ? r : e.textGenerationModelSelection;
}
function Ye(e, t, n) {
  let r = e.reviewGuideModelSelection;
  if (r && _(e, n, r.instanceId)) {
    let e = t?.find((e) => e.instanceId === r.instanceId);
    if (t === void 0 || (e?.enabled === !0 && ve(e) && x(e))) return r;
  }
  return F(e, t, n);
}
function Xe(e, t = {}) {
  return {
    favorites: e.favorites ?? t.favorites ?? [],
    providerModelPreferences: e.providerModelPreferences ?? t.providerModelPreferences ?? {},
  };
}
function Ze(e, t) {
  let n = e.favorites === null && (t.favorites?.length ?? 0) > 0 ? t.favorites : void 0,
    r =
      e.providerModelPreferences === null &&
      Object.keys(t.providerModelPreferences ?? {}).length > 0
        ? t.providerModelPreferences
        : void 0;
  return n === void 0 && r === void 0
    ? null
    : {
        migrateModelPreferences: {
          ...(n === void 0 ? {} : { favorites: n }),
          ...(r === void 0 ? {} : { providerModelPreferences: r }),
        },
      };
}
var I = {},
  L = Object.fromEntries(c.map((e) => [e, `environment`]));
function R(e, t, n, r) {
  let i = et(e, t, n);
  return r === void 0 ? i : Qe(i, r);
}
function Qe(e, t) {
  let n = null,
    r = null;
  for (let i of Object.keys(f)) {
    if (e.settings[i] !== null) continue;
    let { value: a, source: o } = $e(i, null, t);
    ((n ??= { ...e.settings }), (r ??= { ...e.sources }), (n[i] = a), (r[i] = o));
  }
  return n === null || r === null ? e : { ...e, settings: n, sources: r };
}
function $e(e, t, n) {
  if (t !== null) return { value: t, source: `environment` };
  let { field: r, builtIn: i } = f[e],
    a = n?.[r];
  return a === void 0 ? { value: i, source: `environment` } : { value: a, source: `t3.json` };
}
function et(e, t, n) {
  let r = t === null ? void 0 : e.projectSettingsOverrides[t],
    i =
      n == null || e.projectSettingsFolded
        ? (r ?? I)
        : {
            ...(n.defaultModelSelection == null
              ? {}
              : { defaultModelSelection: n.defaultModelSelection }),
            ...(n.defaultThreadEnvMode == null
              ? {}
              : { defaultThreadEnvMode: n.defaultThreadEnvMode }),
            ...r,
          };
  if (Object.keys(i).length === 0) return { settings: e, sources: L, overrides: I };
  let a = { ...L },
    o = { ...e };
  for (let n of c) {
    if (!Object.hasOwn(i, n)) continue;
    let r = i[n];
    r !== void 0 &&
      ((n !== `textGenerationModelSelection` && n !== `defaultModelSelection`) ||
        r == null ||
        _(e, t, r.instanceId)) &&
      ((o[n] = r), (a[n] = `project`));
  }
  let s = o.textGenerationModelSelection;
  if (!_(e, t, s.instanceId)) {
    let n = Je(e.providerInstances, (n) => _(e, t, n), {
      includeConfiguredInstances: !0,
      defaultModelSelection: o.defaultModelSelection,
    });
    n !== null && (o.textGenerationModelSelection = n);
  }
  return { settings: o, sources: a, overrides: i };
}
function tt(e) {
  let t = e.projectSettings.settings.defaultThreadEnvMode;
  if (
    t === `local` ||
    e.projectHasThreads ||
    e.projectSettings.sources.defaultThreadEnvMode !== `environment` ||
    e.workspaceRoot === null ||
    e.newProjectsRoot == null
  )
    return t;
  let n = g(e.newProjectsRoot),
    r = g(e.workspaceRoot),
    i = n.includes(`\\`) ? `\\` : `/`,
    a = n.endsWith(i) ? n : `${n}${i}`;
  return r.startsWith(a) && r.length > a.length && !r.slice(a.length).includes(i) ? `local` : t;
}
function nt(e) {
  return e.isGitRepo ? e.requestedEnvMode : `local`;
}
function z(e, t, n) {
  let r = e.projectSettingsOverrides[t];
  if (r === void 0) return null;
  let i = { ...r };
  for (let e of n) delete i[e];
  return Object.keys(i).length === 0 ? null : i;
}
function B(e, t) {
  let n = R(e, t).settings.worktreeCleanup;
  if (n?.mode === `custom`) return n.rules;
  if (n?.mode === `off`)
    return {
      worktreeKeepWhen: e.storageCleanup.worktreeKeepWhen,
      worktreeAfterDays: null,
      worktreeSettledAfterDays: null,
      worktreeOnMerge: !1,
      worktreeOnDelete: !1,
      worktreeUnchanged: !1,
    };
  let {
    worktreeKeepWhen: r,
    worktreeAfterDays: i,
    worktreeSettledAfterDays: a,
    worktreeOnMerge: o,
    worktreeOnDelete: s,
    worktreeUnchanged: c,
  } = e.storageCleanup;
  return {
    worktreeKeepWhen: r,
    worktreeAfterDays: i,
    worktreeSettledAfterDays: a,
    worktreeOnMerge: o,
    worktreeOnDelete: s,
    worktreeUnchanged: c,
  };
}
var V = new Set(Object.keys(ne.fields)),
  rt = new Set(Object.keys(be.fields)),
  it = new Set(c);
function H(e) {
  return it.has(e);
}
function U(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function W(e) {
  return e.connection.phase === `connected` && e.serverConfig !== null;
}
function G(e, t, n) {
  let r = new Set(e.environmentIds),
    i = t.filter((e) => r.has(e.environmentId)),
    a = i.filter(W);
  return {
    environments: i,
    connectedEnvironments: a,
    environment: a.find((e) => e.environmentId === n) ?? a[0] ?? null,
  };
}
function at(e, t, n) {
  let r = new Map(t.map((e) => [e.environmentId, e]));
  return e.kind === `project` || e.kind === `checkout`
    ? e.members.flatMap((e) => {
        let t = r.get(e.environmentId);
        if (!t?.serverConfig) return [];
        let i = n?.get(e.physicalProjectKey),
          a =
            i === void 0
              ? R(t.serverConfig.settings, e.id)
              : R(t.serverConfig.settings, e.id, null, i);
        return [
          {
            environmentId: e.environmentId,
            label: t.label,
            projectId: e.id,
            settings: a.settings,
            sources: a.sources,
          },
        ];
      })
    : t.flatMap((e) =>
        e.serverConfig
          ? [
              {
                environmentId: e.environmentId,
                label: e.label,
                projectId: null,
                settings: e.serverConfig.settings,
                sources: R(e.serverConfig.settings, null).sources,
              },
            ]
          : [],
      );
}
function ot(e, t) {
  let n = e[0];
  return n !== void 0 && e.some((e) => t.some((t) => !y(n.settings[t], e.settings[t])));
}
function st(e) {
  let t = e.map((e) => te(e.settings));
  return { mixed: t.some((e) => e !== t[0]), neverAvailable: e.every((e) => Se(e.settings)) };
}
function ct(e, t) {
  let n = t.filter(H);
  if (n.length === 0 || e.length === 0) return `environment`;
  let r = new Set(e.flatMap((e) => n.map((t) => e.sources[t])));
  return r.size > 1
    ? `mixed`
    : r.has(`project`)
      ? `project`
      : r.has(`t3.json`)
        ? `t3.json`
        : `environment`;
}
function K(e, t, n) {
  let r = new Map(t.map((e) => [e.environmentId, e])),
    i = new Map();
  for (let t of e.members) {
    let e = r.get(t.environmentId);
    if (
      !e?.serverConfig ||
      e.connection.phase !== `connected` ||
      e.serverConfig.environment?.capabilities.projectSettingsOverrides !== !0
    )
      continue;
    let a = e.serverConfig.settings,
      o = n(a.projectSettingsOverrides[t.id] ?? {}, a, t.id),
      s = i.get(t.environmentId);
    i.set(t.environmentId, {
      environmentId: t.environmentId,
      label: e.label,
      previous: a,
      patch: { projectSettingsOverrides: { ...s?.patch.projectSettingsOverrides, [t.id]: o } },
    });
  }
  return [...i.values()];
}
function lt(e, t) {
  if (t.idleCompaction === void 0) return t;
  let { idleCompaction: n, compactIdleThreads: r, ...i } = t;
  return { ...i, ...me(e, n) };
}
function ut(e, t, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([e]) => rt.has(e) && !V.has(e))),
    i = Object.fromEntries(Object.entries(n).filter(([e]) => V.has(e))),
    a = Object.keys(i),
    { connectedEnvironments: o } = G(e, t, null),
    s = e.kind === `project` || e.kind === `checkout`,
    c = s ? a.filter((e) => !H(e)) : [],
    l =
      a.length === 0
        ? []
        : s
          ? c.length > 0
            ? []
            : K(e, t, (e, t, n) => {
                let r = R(t, n).settings,
                  a = { ...e };
                for (let [e, o] of Object.entries(i)) {
                  if (e === `worktreeCleanup` && i.worktreeCleanup?.mode === `custom`) {
                    a[e] = { mode: `custom`, rules: { ...B(t, n), ...i.worktreeCleanup.rules } };
                    continue;
                  }
                  if (o === null && !ge(e)) {
                    delete a[e];
                    continue;
                  }
                  let s = r[e];
                  a[e] =
                    U(o) &&
                    U(s) &&
                    (e === `defaultModelSelection` ||
                      e === `sourceControlWriterModelSelection` ||
                      e === `reviewGuideModelSelection` ||
                      e === `textGenerationModelSelection`) &&
                    (o.instanceId !== void 0 || o.model !== void 0)
                      ? { instanceId: s.instanceId, model: s.model, ...o }
                      : U(o) && U(s)
                        ? { ...s, ...o }
                        : o;
                }
                return a;
              })
          : e.kind === `all` || e.kind === `environment`
            ? o.flatMap((e) => {
                let t = e.serverConfig?.settings;
                return t
                  ? [
                      {
                        environmentId: e.environmentId,
                        label: e.label,
                        previous: t,
                        patch: lt(
                          t,
                          t.worktreeCleanup != null &&
                            i.storageCleanup &&
                            Object.keys(i.storageCleanup).some((e) => e.startsWith(`worktree`))
                            ? {
                                ...i,
                                worktreeCleanup: {
                                  mode: `custom`,
                                  rules: {
                                    ...B(t, null),
                                    ...Object.fromEntries(
                                      Object.entries(i.storageCleanup).filter(([e]) =>
                                        e.startsWith(`worktree`),
                                      ),
                                    ),
                                  },
                                },
                              }
                            : i,
                        ),
                      },
                    ]
                  : [];
              })
            : [],
    u = Object.keys(r).length > 0;
  return {
    clientPatch: r,
    hasClientWrite: u,
    serverWrites: l,
    unavailableReason:
      u || l.length > 0 || Object.keys(n).length === 0
        ? null
        : e.kind === `unavailable`
          ? e.message
          : c.length > 0
            ? `This setting is environment-wide and cannot be overridden by a project.`
            : s
              ? `Connect the selected checkouts, or update their environments, to save a project override.`
              : `Connect ${e.kind === `environment` ? e.label : `an environment`} to save this setting.`,
  };
}
function dt(e, t, n) {
  let r = e.kind === `project` || e.kind === `checkout` ? K(e, t, (e, t, r) => z(t, r, n)) : [];
  return {
    clientPatch: {},
    hasClientWrite: !1,
    serverWrites: r,
    unavailableReason:
      r.length > 0
        ? null
        : `Connect the selected checkouts, or update their environments, to reset this override.`,
  };
}
function ft(e, t) {
  let n = t.filter(H);
  return n.length === 0
    ? []
    : e.flatMap((e) => {
        let t = e.serverConfig?.settings.projectSettingsOverrides;
        return t
          ? Object.entries(t).flatMap(([t, r]) =>
              n.some((e) => Object.hasOwn(r, e))
                ? [{ environmentId: e.environmentId, projectId: t }]
                : [],
            )
          : [];
      });
}
function pt(e, t, n) {
  let r = new Map(e.map((e) => [e.environmentId, e])),
    i = new Map();
  for (let { environmentId: e, projectId: a } of t) {
    let t = r.get(e);
    if (!t?.serverConfig || t.connection.phase !== `connected`) continue;
    let o = t.serverConfig.settings,
      s = i.get(e);
    i.set(e, {
      environmentId: e,
      label: t.label,
      previous: o,
      patch: {
        projectSettingsOverrides: { ...s?.patch.projectSettingsOverrides, [a]: z(o, a, n) },
      },
    });
  }
  let a = [...i.values()];
  return {
    clientPatch: {},
    hasClientWrite: !1,
    serverWrites: a,
    unavailableReason: a.length > 0 ? null : `Connect the environments to reset these overrides.`,
  };
}
function q(e, t, n) {
  if (e === null) return t != null && y(n, t);
  if (U(e) && !Array.isArray(t) && !Array.isArray(n)) {
    let r = (e, t) => (U(e) ? e[t] : void 0);
    return Object.entries(e).some(([e, i]) => q(i, r(t, e), r(n, e)));
  }
  return !(typeof e == `string` && typeof t == `string` ? e.trim() === t : y(e, t)) && y(n, t);
}
function mt(e, t) {
  return t === void 0
    ? []
    : Object.entries(e.patch).flatMap(([n, r]) => (q(r, e.previous[n], t[n]) ? [n] : []));
}
async function ht(e, t, n) {
  e.hasClientWrite && n(e.clientPatch);
  let r = await Promise.allSettled(
      e.serverWrites.map(({ environmentId: e, patch: n }) =>
        t({ environmentId: e, input: { patch: n } }),
      ),
    ),
    i = (t) => {
      let n = r[t];
      return (
        n?.status === `fulfilled` &&
        n.value._tag === `Success` &&
        mt(e.serverWrites[t], n.value.value).length === 0
      );
    },
    a = e.serverWrites.flatMap((e, t) => {
      if (i(t)) return [];
      let n = r[t];
      if (n?.status === `fulfilled` && n.value._tag === `Success`)
        return [
          {
            ...e,
            message: `This environment does not support this setting. Update T3 Code on it.`,
          },
        ];
      let a =
        n?.status === `rejected`
          ? n.reason
          : n?.status === `fulfilled` && n.value.cause
            ? w(n.value.cause)
            : void 0;
      return [
        {
          ...e,
          message:
            a instanceof Error ? a.message : `The save failed. Try reconnecting and saving again.`,
        },
      ];
    }),
    o = e.serverWrites.filter((e, t) => i(t));
  return { failedEnvironments: a, savedEnvironments: o, savedEnvironmentCount: o.length };
}
var J = T((e) => {
    for (let [t, n] of e(D.catalogValueAtom).entries)
      if (n.target._tag === `PrimaryConnectionTarget`) return t;
    return null;
  }).pipe(S(`web-primary-environment-id`)),
  gt = new Set([`usageLimits`, `versionAdvisory`]);
function Y(e, t, n) {
  let r = e,
    i = t,
    a = Object.keys(i);
  return (
    a.length === Object.keys(r).length &&
    a.every((e) => {
      if (e === `checkedAt`) return e in r;
      let t = r[e],
        a = i[e];
      return Object.is(t, a)
        ? !0
        : !n &&
            gt.has(e) &&
            typeof t == `object` &&
            typeof a == `object` &&
            t !== null &&
            a !== null &&
            Y(t, a, !0);
    })
  );
}
function _t(e, t) {
  if (e === null) return t;
  let n = new Map(e.map((e) => [e.instanceId, e])),
    r = e.length === t.length,
    i = t.map((t, i) => {
      let a = n.get(t.instanceId),
        o = a !== void 0 && Y(a, t, !1) ? a : t;
      return (o !== e[i] && (r = !1), o);
    });
  return r ? e : i;
}
var X = Ne(E, {
    initialConfigValueAtom: Le.initialConfigValueAtom,
    environmentThemes: !0,
    usageLimitSources: !0,
    usageLimitsCommand: !0,
  }),
  vt = Ie(`web-environment-update-states`, X.updateStateAtom),
  yt = Re(E),
  bt = Fe({ catalogValueAtom: D.catalogValueAtom, serverConfigValueAtom: X.configValueAtom }),
  xt = [],
  Z = [],
  St = { config: null, latestEvent: null, welcome: null },
  Q = T((e) => {
    let t = e(J);
    if (t === null) return St;
    let n = { environmentId: t, input: {} },
      r = d(v(e(X.configProjection(n)))),
      i = d(v(e(X.welcome(n))));
    return { config: e(X.configValueAtom(t)), latestEvent: r?.latestEvent ?? null, welcome: i };
  }).pipe(S(`web-primary-server-state`)),
  $ = T((e) => e(Q).config).pipe(S(`web-primary-server-config`)),
  Ct = T((e) => e(Q).latestEvent).pipe(S(`web-primary-server-config-event`)),
  wt = T((e) => e(Q).welcome).pipe(S(`web-primary-server-welcome`)),
  Tt = T((e) => {
    let t = e(J);
    return t === null ? null : d(v(e(X.legacyThreadMigration({ environmentId: t, input: {} }))));
  }).pipe(S(`web-primary-server-legacy-thread-migration`)),
  Et = T((e) => e($)?.settings ?? de).pipe(S(`web-primary-server-settings`));
T((e) => e($)?.observability ?? null).pipe(S(`web-primary-server-observability`));
var Dt = T((e) => e($)?.providers ?? Z).pipe(S(`web-primary-server-providers`));
function Ot(e) {
  let t = T((t) =>
    t(e.primaryEnvironmentIdAtom) === null
      ? ([...t(e.environmentsAtom).values()].find(W)?.serverConfig?.keybindings ?? null)
      : (t(e.primaryConfigAtom)?.keybindings ?? null),
  );
  return T((e) => xe(e(t) ?? []));
}
var kt = Ot({
    primaryEnvironmentIdAtom: J,
    primaryConfigAtom: $,
    environmentsAtom: T((e) => {
      let t = new Map();
      for (let [n, r] of e(D.catalogValueAtom).entries) {
        let i = we(v(e(D.stateAtom(n))), () => De);
        t.set(n, {
          connection:
            r.unsupportedReason === void 0
              ? Ae(i)
              : { phase: `unsupported`, error: r.unsupportedReason, traceId: null },
          serverConfig: e(X.configValueAtom(n)),
        });
      }
      return t;
    }),
  }).pipe(S(`web-primary-server-keybindings`)),
  At = T((e) => e($)?.availableEditors ?? xt).pipe(S(`web-primary-server-available-editors`)),
  jt = [],
  Mt = T((e) => e($)?.environmentThemes ?? jt).pipe(S(`web-primary-server-environment-themes`)),
  Nt = ie((e) =>
    T((t) => _t(d(t.self()), t(X.providersValueAtom(e)) ?? Z)).pipe(
      S(`web-providers-ignoring-checked-at:${e}`),
    ),
  );
export {
  R as A,
  We as B,
  at as C,
  G as D,
  ct as E,
  Xe as F,
  N as H,
  Ye as I,
  F as L,
  B as M,
  qe as N,
  z as O,
  Ze as P,
  j as R,
  ut as S,
  ot as T,
  O as U,
  Ge as V,
  H as _,
  $ as a,
  pt as b,
  kt as c,
  Et as d,
  wt as f,
  J as g,
  yt as h,
  At as i,
  nt as j,
  tt as k,
  Tt as l,
  X as m,
  bt as n,
  Ct as o,
  Nt as p,
  vt as r,
  Mt as s,
  Z as t,
  Dt as u,
  ft as v,
  st as w,
  dt as x,
  ht as y,
  A as z,
};
//# sourceMappingURL=server-3D32GveR.js.map
