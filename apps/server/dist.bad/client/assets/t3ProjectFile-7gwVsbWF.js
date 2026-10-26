import {
  Ss as e,
  Xy as t,
  Yp as n,
  b_ as r,
  el as i,
  nl as a,
  uC as o,
  y_ as s,
} from "./utils-CPoejuy5.js";
import "./entities-CgVpsCCl.js";
import { U as c } from "./server-3D32GveR.js";
var l = `\0no-project`;
function u(e) {
  return {
    sidebarProjectGroupingMode: e.sidebarProjectGroupingMode,
    sidebarProjectGroupingOverrides: e.sidebarProjectGroupingOverrides,
  };
}
function d(e) {
  let t = new Set(),
    n = [];
  for (let r of e) {
    let e = r?.trim();
    e && !t.has(e) && (t.add(e), n.push(e));
  }
  return n;
}
function f(t) {
  let n = t.repositoryIdentity?.rootPath?.trim();
  if (!n) return null;
  let r = e(t.workspaceRoot),
    i = e(n);
  if (r.length === 0 || i.length === 0) return null;
  if (r === i) return ``;
  let a = `${i}${i.includes(`\\`) ? `\\` : `/`}`;
  return r.startsWith(a) ? r.slice(a.length).replaceAll(`\\`, `/`) : null;
}
function p(t, n) {
  return `${t}:${e(n)}`;
}
function m(e) {
  return p(e.environmentId, e.workspaceRoot);
}
function h(e) {
  return m(e);
}
function g(e) {
  return m(e);
}
function _(e, t) {
  return t.sidebarProjectGroupingOverrides?.[h(e)] ?? t.sidebarProjectGroupingMode;
}
function v(e, t) {
  let n = e.repositoryIdentity ? r(e.repositoryIdentity) : null;
  if (!n || n.includes(`\0`)) return null;
  if (t === `repository`) return n;
  let i = f(e);
  return i === null || i.length === 0 ? n : `${n}::${i}`;
}
function y(e, t) {
  if (t?.groupScratchProjects && e.isScratch) return l;
  let n = t?.groupingMode ?? `repository`;
  return n === `separate` ? m(e) : (v(e, n) ?? m(e) ?? a(i(e.environmentId, e.id)));
}
function b(e, t, n) {
  return y(e, { groupingMode: _(e, t), groupScratchProjects: n?.groupScratchProjects ?? !1 });
}
function x(
  e,
  t,
  n = { sidebarProjectGroupingMode: `repository`, sidebarProjectGroupingOverrides: {} },
) {
  return e === null || e === l || t.some((t) => b(t, n, { groupScratchProjects: !0 }) === e)
    ? e
    : t.some((t) => {
          if (!t.isScratch) return !1;
          let r = _(t, n);
          return m(t) === e || (r !== `separate` && v(t, r) === e);
        })
      ? l
      : e;
}
function S(e) {
  let t = d(e.members.map((e) => e.title)),
    n = d(e.members.map((e) => (e.repositoryIdentity ? s(e.repositoryIdentity) : null))),
    r = d(e.members.map((e) => e.repositoryIdentity?.name)),
    i = t[0];
  return t.length === 1 && i !== void 0 && !n.includes(i) && !r.includes(i)
    ? i
    : n.length === 1
      ? n[0]
      : r.length === 1
        ? r[0]
        : e.representative.title;
}
function C(e) {
  let t = Date.parse(e.updatedAt);
  if (Number.isFinite(t)) return t;
  let n = Date.parse(e.createdAt);
  return Number.isFinite(n) ? n : 0;
}
function w(e, t) {
  let n = C(t) - C(e);
  return n > 0 || (n === 0 && t.id > e.id);
}
function T(e, t) {
  if (t.repositoryIdentity !== null) return t;
  let n = null;
  for (let t of e) t.repositoryIdentity !== null && (n === null || w(n, t)) && (n = t);
  return n ?? t;
}
function E(e) {
  let t = new Map();
  for (let n of e.projects) {
    let e = m(n),
      r = t.get(e);
    r ? r.push(n) : t.set(e, [n]);
  }
  let n = new Map(),
    r = new Map();
  for (let [i, a] of t) {
    let t = a.reduce((e, t) => (w(e, t) ? t : e)),
      o = y(T(a, t), {
        groupingMode: _(t, e.settings),
        groupScratchProjects: e.groupScratchProjects ?? !1,
      });
    n.set(i, o);
    let s = { physicalProjectKey: i, project: t },
      c = r.get(o);
    c ? c.push(s) : r.set(o, [s]);
  }
  let o = new Map(),
    s = new Set();
  for (let t of e.projects) {
    let r = m(t),
      c = n.get(r) ?? b(t, e.settings, { groupScratchProjects: e.groupScratchProjects ?? !1 }),
      l = a(i(t.environmentId, t.id));
    if (s.has(l)) continue;
    s.add(l);
    let u = i(t.environmentId, t.id),
      d = o.get(c);
    d ? d.push(u) : o.set(c, [u]);
  }
  let c = e.preferredEnvironmentId ?? null;
  return Array.from(r, ([t, n]) => {
    let r = (c ? n.find((e) => e.project.environmentId === c)?.project : null) ?? n[0].project;
    return {
      key: t,
      label:
        e.groupScratchProjects && r.isScratch
          ? `No project`
          : n.length > 1
            ? S({ representative: r, members: n.map((e) => e.project) })
            : r.title,
      representative: r,
      members: n,
      memberProjectRefs: o.get(t) ?? [],
    };
  });
}
function D(e, t) {
  let n = new Map();
  t.forEach((e, t) => {
    for (let r of e.memberProjectRefs) {
      let e = `${r.environmentId}\0${r.projectId}`;
      n.has(e) || n.set(e, t);
    }
  });
  let r = (e) => n.get(`${e.environmentId}\0${e.id}`) ?? t.length;
  return [...e].sort((e, t) => r(e) - r(t));
}
var O = c(n),
  k = t(O);
function A(e) {
  let t = k(e);
  return o(t) ? t.value : null;
}
export { p as a, x as c, m as i, u as l, E as n, h as o, b as r, g as s, A as t, D as u };
//# sourceMappingURL=t3ProjectFile-7gwVsbWF.js.map
