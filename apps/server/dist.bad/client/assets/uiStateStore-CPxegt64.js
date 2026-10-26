import { G as e, Ss as t, X as n } from "./utils-CPoejuy5.js";
import "./entities-CgVpsCCl.js";
var r = `t3code:ui-state:v1`,
  i = 2,
  a = [
    `t3code:renderer-state:v8`,
    `t3code:renderer-state:v7`,
    `t3code:renderer-state:v6`,
    `t3code:renderer-state:v5`,
    `t3code:renderer-state:v4`,
    `t3code:renderer-state:v3`,
    `codething:renderer-state:v4`,
    `codething:renderer-state:v3`,
    `codething:renderer-state:v2`,
    `codething:renderer-state:v1`,
  ],
  o = {
    projectExpandedById: {},
    projectOrder: [],
    sidebarProjectScopeKey: null,
    threadLastVisitedAtById: {},
    threadChangedFilesExpandedById: {},
    defaultAdvertisedEndpointKey: null,
    pullRequestMergeMethod: `merge`,
  },
  s = `legacy-project-cwd:`,
  c = `legacy-project-expansion-default`,
  l = !1;
function u(e) {
  return `${s}${t(e)}`;
}
function d(e) {
  return Array.isArray(e)
    ? [...new Set(e.filter((e) => typeof e == `string` && e.length > 0))]
    : [];
}
function f(e) {
  return !e || typeof e != `object`
    ? {}
    : Object.fromEntries(
        Object.entries(e).filter((e) => e[0].length > 0 && typeof e[1] == `boolean`),
      );
}
function p(e) {
  return typeof e == `string` && e.length > 0 ? e : null;
}
function m(e) {
  return !e || typeof e != `object`
    ? {}
    : Object.fromEntries(
        Object.entries(e).filter(
          (e) =>
            e[0].length > 0 &&
            typeof e[1] == `string` &&
            e[1].length > 0 &&
            Number.isFinite(Date.parse(e[1])),
        ),
      );
}
function h(e) {
  return e === `merge` || e === `squash` || e === `rebase`;
}
function g(e) {
  return {
    projectExpandedById:
      e.projectExpandedById === void 0
        ? (() => {
            let t = {},
              n = d(e.collapsedProjectCwds),
              r = d(e.expandedProjectCwds);
            for (let e of n) t[u(e)] = !1;
            for (let e of r) t[u(e)] = !0;
            return (!Array.isArray(e.collapsedProjectCwds) && r.length > 0 && (t[c] = !1), t);
          })()
        : f(e.projectExpandedById),
    projectOrder: e.projectOrder === void 0 ? d(e.projectOrderCwds).map(u) : d(e.projectOrder),
    threadLastVisitedAtById: m(e.threadLastVisitedAtById),
    threadChangedFilesExpandedById:
      e.threadChangedFilesExpansionVersion === i ? v(e.threadChangedFilesExpandedById) : {},
    defaultAdvertisedEndpointKey: p(e.defaultAdvertisedEndpointKey),
    sidebarProjectScopeKey: p(e.sidebarProjectScopeKey),
    pullRequestMergeMethod: h(e.pullRequestMergeMethod)
      ? e.pullRequestMergeMethod
      : o.pullRequestMergeMethod,
  };
}
function _() {
  if (typeof window > `u`) return o;
  try {
    let e = window.localStorage.getItem(r);
    if (!e) {
      for (let e of a) {
        let t = window.localStorage.getItem(e);
        if (t) return g(JSON.parse(t));
      }
      return o;
    }
    return g(JSON.parse(e));
  } catch {
    return o;
  }
}
function v(e) {
  if (!e || typeof e != `object`) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (!n || !r || typeof r != `object`) continue;
    let e = {};
    for (let [t, n] of Object.entries(r)) t && typeof n == `boolean` && (e[t] = n);
    Object.keys(e).length > 0 && (t[n] = e);
  }
  return t;
}
function y(e) {
  if (typeof window < `u`)
    try {
      let t = Object.fromEntries(Object.entries(e.projectExpandedById).filter(([e]) => e !== c));
      if (
        (window.localStorage.setItem(
          r,
          JSON.stringify({
            projectExpandedById: t,
            projectOrder: e.projectOrder,
            threadLastVisitedAtById: e.threadLastVisitedAtById,
            defaultAdvertisedEndpointKey: e.defaultAdvertisedEndpointKey,
            sidebarProjectScopeKey: e.sidebarProjectScopeKey,
            threadChangedFilesExpansionVersion: i,
            threadChangedFilesExpandedById: e.threadChangedFilesExpandedById,
            pullRequestMergeMethod: e.pullRequestMergeMethod,
          }),
        ),
        !l)
      ) {
        l = !0;
        for (let e of a) window.localStorage.removeItem(e);
      }
    } catch {}
}
var b = new e(y, { wait: 500 });
function x(e, t, n) {
  let r = Date.parse(n);
  if (!Number.isFinite(r)) return e;
  let i = e.threadLastVisitedAtById[t],
    a = i ? Date.parse(i) : NaN;
  return Number.isFinite(a) && Number.isFinite(r) && a >= r
    ? e
    : { ...e, threadLastVisitedAtById: { ...e.threadLastVisitedAtById, [t]: n } };
}
function S(e, t, n) {
  if (!n) return e;
  let r = Date.parse(n);
  if (Number.isNaN(r)) return e;
  let i = new Date(r - 1).toISOString();
  return e.threadLastVisitedAtById[t] === i
    ? e
    : { ...e, threadLastVisitedAtById: { ...e.threadLastVisitedAtById, [t]: i } };
}
function C(e, t, n, r) {
  let i = e.threadChangedFilesExpandedById[t] ?? {};
  return i[n] === r
    ? e
    : {
        ...e,
        threadChangedFilesExpandedById: {
          ...e.threadChangedFilesExpandedById,
          [t]: { ...i, [n]: r },
        },
      };
}
function w(e, t) {
  let n = t && t.length > 0 ? t : null;
  return e.defaultAdvertisedEndpointKey === n ? e : { ...e, defaultAdvertisedEndpointKey: n };
}
function T(e, t) {
  let n = p(t);
  return e.sidebarProjectScopeKey === n ? e : { ...e, sidebarProjectScopeKey: n };
}
function E(e, t) {
  return e.pullRequestMergeMethod === t ? e : { ...e, pullRequestMergeMethod: t };
}
function D(e, t) {
  for (let n of t) {
    let t = e[n];
    if (t !== void 0) return t;
  }
  return e[c] ?? !0;
}
function O(e, t, n) {
  let r = (typeof t == `string` ? [t] : t).filter((t) => e.projectExpandedById[t] !== n);
  if (r.length === 0) return e;
  let i = { ...e.projectExpandedById };
  for (let e of r) i[e] = n;
  return { ...e, projectExpandedById: i };
}
function k(e, t, n, r) {
  if (n.length === 0) return e;
  let i = new Set(n),
    a = new Set(r);
  if (n.every((e) => a.has(e))) return e;
  let o = t.findIndex((e) => a.has(e));
  if (o < 0) return e;
  let s = [...t],
    c = [],
    l = 0;
  for (let e = s.length - 1; e >= 0; e--)
    i.has(s[e]) && (c.unshift(s.splice(e, 1)[0]), e < o && l++);
  if (c.length === 0) return e;
  let u = o - Math.max(0, l - 1);
  return (s.splice(u, 0, ...c), { ...e, projectOrder: s });
}
var A = n((e) => ({
  ..._(),
  markThreadVisited: (t, n) => e((e) => x(e, t, n)),
  markThreadUnread: (t, n) => e((e) => S(e, t, n)),
  setThreadChangedFilesExpanded: (t, n, r) => e((e) => C(e, t, n, r)),
  setDefaultAdvertisedEndpointKey: (t) => e((e) => w(e, t)),
  setSidebarProjectScopeKey: (t) => e((e) => T(e, t)),
  setPullRequestMergeMethod: (t) => e((e) => E(e, t)),
  setProjectExpanded: (t, n) => e((e) => O(e, t, n)),
  reorderProjects: (t, n, r) => e((e) => k(e, t, n, r)),
}));
(A.subscribe((e) => b.maybeExecute(e)),
  typeof window < `u` &&
    typeof window.addEventListener == `function` &&
    window.addEventListener(`beforeunload`, () => {
      b.flush();
    }));
export { D as n, A as r, u as t };
//# sourceMappingURL=uiStateStore-CPxegt64.js.map
