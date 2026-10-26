import { U_ as e } from "./utils-CPoejuy5.js";
function t(e) {
  return e.connectionPhase === `connected` && e.hasServerConfig;
}
function n(e, t, n) {
  let r = n ? new Set(n) : null;
  return e
    .filter((e) => !r || r.has(e.environmentId))
    .toSorted((e, n) => {
      let r = e.environmentId === t;
      return r === (n.environmentId === t)
        ? e.label.localeCompare(n.label) ||
            String(e.environmentId).localeCompare(String(n.environmentId))
        : r
          ? -1
          : 1;
    });
}
function r(e, t, n) {
  return t !== null && e.some((e) => e.environmentId === t)
    ? t
    : n !== null && e.some((e) => e.environmentId === n)
      ? n
      : (e[0]?.environmentId ?? null);
}
function i(t) {
  return t.hasError
    ? `denied`
    : t.session === null
      ? t.isPending
        ? `pending`
        : `denied`
      : e(t.session, `providers:manage`)
        ? `granted`
        : `denied`;
}
function a(e) {
  return i(e);
}
function o(e, t, n, r) {
  let i = {};
  for (let a of t) {
    let t = e.projectSettingsOverrides[a],
      o = { ...t?.providerInstances },
      s = { ...o[n] };
    (r === void 0 ? delete s.enabled : (s.enabled = r),
      Object.keys(s).length > 0 ? (o[n] = s) : delete o[n]);
    let { providerInstances: c, ...l } = t ?? {},
      u = { ...l, providerInstances: o };
    i[a] = Object.keys(l).length === 0 && Object.keys(o).length === 0 ? null : u;
  }
  return i;
}
function s(e) {
  return e.connectionPhase === `error`
    ? { kind: `error` }
    : e.connectionPhase === `connected`
      ? e.hasServerConfig
        ? e.operateAccess === `pending`
          ? { kind: `loading`, reason: `permissions` }
          : e.operateAccess === `denied`
            ? { kind: `read-only` }
            : { kind: `editable` }
        : { kind: `loading`, reason: `config` }
      : { kind: `unavailable` };
}
export { a, t as i, o as n, r as o, s as r, n as t };
//# sourceMappingURL=ProviderSettingsPanel.logic-D26t0yeu.js.map
