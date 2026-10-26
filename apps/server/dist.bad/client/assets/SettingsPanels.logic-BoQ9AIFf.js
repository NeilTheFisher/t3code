import { FC as e, Um as t, cw as n } from "./utils-CPoejuy5.js";
import { B as r, H as i, R as a, V as o } from "./server-3D32GveR.js";
function s(e) {
  return e !== `separate`;
}
function c(e, t = `repository`) {
  return e ? (t === `repository_path` ? `repository_path` : `repository`) : `separate`;
}
var l = `t3code:last-enabled-project-grouping-mode`;
function u() {
  try {
    return localStorage.getItem(l) === `repository_path` ? `repository_path` : `repository`;
  } catch {
    return `repository`;
  }
}
function d(e) {
  if (e !== `separate`)
    try {
      localStorage.setItem(l, e);
    } catch {}
}
function f(e) {
  return (
    !n(e.backgroundActivity, t.backgroundActivity) ||
    e.backgroundActivityProfile !== t.backgroundActivityProfile ||
    !n(e.automaticGitFetchInterval, t.automaticGitFetchInterval) ||
    !n(e.providerHealthRefreshInterval, t.providerHealthRefreshInterval)
  );
}
function p(e) {
  return [
    ...(e.fontFamilySans !== t.fontFamilySans || e.fontSizeInterface !== t.fontSizeInterface
      ? [`Interface font`]
      : []),
    ...(e.fontFamilyComposer !== t.fontFamilyComposer || e.fontSizePrompt !== t.fontSizePrompt
      ? [`Prompt font`]
      : []),
    ...(e.fontFamilyCode !== t.fontFamilyCode || e.fontSizeCode !== t.fontSizeCode
      ? [`Code font`]
      : []),
    ...(e.fontFamilyTerminal !== t.fontFamilyTerminal || e.fontSizeTerminal !== t.fontSizeTerminal
      ? [`Terminal font`]
      : []),
  ];
}
function m(e, t) {
  return e._tag === t._tag
    ? e._tag === `fill` || t._tag === `fill`
      ? !0
      : e.width !== t.width || e.height !== t.height
        ? !1
        : e._tag === `preset` && t._tag === `preset`
          ? e.presetId === t.presetId
          : !0
    : !1;
}
function h(e) {
  return [
    ...(m(e.browserDefaultViewport, t.browserDefaultViewport) ? [] : [`Browser viewport`]),
    ...(e.browserDefaultZoomFactor === t.browserDefaultZoomFactor ? [] : [`Browser zoom`]),
    ...(e.browserDefaultAppearance === t.browserDefaultAppearance ? [] : [`Browser appearance`]),
    ...(e.browserRecordingFrameRate === t.browserRecordingFrameRate
      ? []
      : [`Recording frame rate`]),
    ...(e.browserRecordingShowKeyPresses ? [`Recording key presses`] : []),
    ...(e.browserRecordingShowMousePresses ? [`Recording mouse presses`] : []),
    ...(e.browserLinkTarget === t.browserLinkTarget ? [] : [`Open links in`]),
    ...(e.browserSearchEngine !== t.browserSearchEngine ||
    e.browserCustomSearchUrl !== t.browserCustomSearchUrl
      ? [`Search engine`]
      : []),
    ...(e.browserAutoShowFloatingPreview === t.browserAutoShowFloatingPreview
      ? []
      : [`Floating preview`]),
    ...(e.pullRequestLinksOpenInApp === t.pullRequestLinksOpenInApp
      ? []
      : [`Open pull requests in T3 Code`]),
  ];
}
function g(e) {
  let t = i(e),
    n = r({
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
  return n.profile === `custom` ? `advanced` : n.profile;
}
function _(e, t) {
  let n = o(e);
  return {
    schemaVersion: 1,
    profile: `custom`,
    baseProfile: t,
    overrides: n.profile === `custom` ? n.overrides : {},
  };
}
function v(e) {
  return {
    providerInstances: { ...e.settings.providerInstances, [e.instanceId]: e.instance },
    ...(e.textGenerationModelSelection === void 0
      ? {}
      : { textGenerationModelSelection: e.textGenerationModelSelection }),
  };
}
function y(t) {
  return Math.round(e(t) / 1e3);
}
function b(e, t = 0) {
  return e === null || !Number.isFinite(e) ? t : Math.max(t, Math.round(e));
}
function x(e, t, n) {
  let r = {
    automaticGitFetchInterval: t.automaticGitFetchInterval,
    providerHealthRefreshInterval: t.providerHealthRefreshInterval,
    hostPowerMonitorActiveInterval: t.hostPowerMonitorActiveInterval,
    hostPowerMonitorIdleInterval: t.hostPowerMonitorIdleInterval,
    idleClientTtl: t.idleClientTtl,
    pauseWhenHostLocked: t.pauseWhenHostLocked,
    pauseWhenHostLowPower: t.pauseWhenHostLowPower,
    pauseWhenClientLowPower: t.pauseWhenClientLowPower,
    pauseWhenOnBattery: t.pauseWhenOnBattery,
    ...n,
  };
  for (let [e, t] of Object.entries(r)) t === void 0 && delete r[e];
  return {
    backgroundActivity: { schemaVersion: 1, profile: `custom`, baseProfile: a(e), overrides: r },
  };
}
export {
  h as a,
  s as c,
  u as d,
  d as f,
  y as i,
  b as l,
  _ as n,
  p as o,
  g as p,
  v as r,
  f as s,
  x as t,
  c as u,
};
//# sourceMappingURL=SettingsPanels.logic-BoQ9AIFf.js.map
