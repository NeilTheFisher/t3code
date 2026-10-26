import { Fy as e, Ws as t } from "./utils-CPoejuy5.js";
import { u as n } from "./threadSort-DAijm5mR.js";
var r = `flex min-w-0 items-center gap-1.5 opacity-55 in-data-highlighted:opacity-100 in-data-popup-open:opacity-100`;
e([`local`, `worktree`]);
var i = new Set([`local`, `local environment`]);
function a(e) {
  let t = e?.trim();
  return t && t.length > 0 ? t : null;
}
function o(e) {
  let t = a(e.runtimeLabel),
    n = a(e.savedLabel);
  return e.isPrimary
    ? ([t, n].find((e) => (e ? !i.has(e.toLowerCase()) : !1)) ?? `This device`)
    : (t ?? n ?? e.environmentId);
}
function s(e) {
  return e.canPickEnvironment ? !0 : e.activeEnvironment !== null && !e.activeEnvironment.isPrimary;
}
function c(e) {
  return (
    e.hasActiveProject &&
    (e.isDraftHeroState || e.persistInActiveThreads) &&
    (e.isGitRepo || e.showEnvironmentIndicator || e.hostsRestingComposerControls)
  );
}
var l = 16;
function u(e) {
  return e.compact ? e.neededWidth > e.availableWidth - l : e.neededWidth > e.availableWidth;
}
function d(e) {
  return e === `worktree` ? `New worktree` : `Current checkout`;
}
var f = { recursive: `Recursive`, "top-level": `Top level only`, none: `Skip` };
function p(e) {
  return e ? `Current worktree` : d(`local`);
}
function m(e, t) {
  return e ? `Worktree` : t === `worktree` ? d(`worktree`) : `Local checkout`;
}
function h(e) {
  let t = null;
  for (let r of e.threads) {
    if (
      !r.worktreePath ||
      r.worktreePath === e.currentWorktreePath ||
      (r.archivedAt ?? null) !== null
    )
      continue;
    let i = n(r.updatedAt);
    i !== null &&
      (t === null || i > t.updatedAt) &&
      (t = { branch: r.branch, worktreePath: r.worktreePath, updatedAt: i });
  }
  return t === null ? null : { branch: t.branch, worktreePath: t.worktreePath };
}
function g(e) {
  return e.branch ? `Previous worktree (${e.branch})` : `Previous worktree`;
}
function _(e) {
  let {
    activeWorktreePath: t,
    hasServerThread: n,
    draftThreadEnvMode: r,
    preparingWorktree: i,
  } = e;
  return n
    ? t || i
      ? `worktree`
      : `local`
    : t
      ? `local`
      : r === `worktree`
        ? `worktree`
        : `local`;
}
function v(e) {
  let { nextWorktreePath: t, currentWorktreePath: n, effectiveEnvMode: r } = e;
  return t || (r === `worktree` && !n) ? `worktree` : `local`;
}
function y(e) {
  let { envMode: t, activeWorktreePath: n, activeThreadBranch: r, currentGitBranch: i } = e;
  return t === `worktree` && !n ? (r ?? i) : (i ?? r);
}
function b(e) {
  let {
    activeWorktreePath: t,
    effectiveEnvMode: n,
    resolvedActiveBranch: r,
    resolvedActiveBranchIsRemote: i,
    startFromOrigin: a,
  } = e;
  return r
    ? n === `worktree` && !t
      ? a && i === !1
        ? `From ${r} (remote)`
        : `From ${r}`
      : r
    : `Select ref`;
}
function x(e) {
  return e.activeThreadBranch === e.resolvedActiveBranch ? e.activeThreadBranch : null;
}
function S(e) {
  let {
    effectiveEnvMode: t,
    activeWorktreePath: n,
    activeThreadBranch: r,
    currentGitBranch: i,
  } = e;
  return t !== `local` || n !== null || !r || !i || r === i
    ? null
    : { threadBranch: r, currentBranch: i };
}
function C(e) {
  let { activeProjectCwd: t, activeWorktreePath: n, refName: r } = e;
  if (r.worktreePath)
    return {
      checkoutCwd: r.worktreePath,
      nextWorktreePath: r.worktreePath === t ? null : r.worktreePath,
      reuseExistingWorktree: !0,
    };
  let i = n !== null && r.isDefault ? null : n;
  return { checkoutCwd: i ?? t, nextWorktreePath: i, reuseExistingWorktree: !1 };
}
function w(e) {
  let {
    itemValue: n,
    normalizedQuery: r,
    createBranchItemValue: i,
    checkoutPullRequestItemValue: a,
  } = e;
  if (r.length === 0 || (i && n === i) || (a && n === a)) return !0;
  let o = n.toLowerCase();
  if (o.includes(r)) return !0;
  let s = t(r);
  return s.length > 0 && s !== r && o.includes(s);
}
function T(e) {
  let t = (e) => (typeof e == `string` && e.trim().length > 0 ? e : void 0),
    n = t(e.project),
    r = t(e.machine),
    i = t(e.checkout);
  return {
    ...(n === void 0 ? {} : { project: n }),
    ...(r === void 0 ? {} : { machine: r }),
    ...(i === void 0 ? {} : { checkout: i }),
  };
}
function E(e, t, n) {
  let r = (e, t) => ({
    kind: `unavailable`,
    reason: e,
    label: `Unavailable selection`,
    message: t,
    members: [],
    environmentIds: [],
  });
  if (e.checkout && !e.project)
    return r(`project-required`, `Select a project to choose one of its checkouts.`);
  let i = n.find((t) => t.environmentId === e.machine);
  if (e.machine && !i) return r(`environment-missing`, `This environment is no longer available.`);
  if (e.project) {
    let a = t.find((t) => t.projectKey === e.project);
    if (!a) return r(`project-missing`, `This project is no longer available.`);
    let o = a.memberProjects.filter(
      (t) =>
        (e.machine === void 0 || t.environmentId === e.machine) &&
        (e.checkout === void 0 || t.physicalProjectKey === e.checkout),
    );
    if (o.length === 0)
      return r(
        `checkout-missing`,
        e.checkout
          ? `This checkout is no longer available in the selected project and environment.`
          : `This project has no checkout on this environment.`,
      );
    if (e.checkout) {
      let e = o[0],
        t = n.find((t) => t.environmentId === e.environmentId);
      if (!t)
        return r(`environment-missing`, `This checkout's environment is no longer available.`);
      let i = a.memberProjects.some(
        (t) => t.environmentId === e.environmentId && t.physicalProjectKey !== e.physicalProjectKey,
      );
      return {
        kind: `checkout`,
        group: a,
        checkout: e,
        environmentId: e.environmentId,
        label: `${a.displayName} / ${t.label}${i ? ` · ${e.workspaceRoot}` : ``}`,
        members: o,
        environmentIds: [e.environmentId],
      };
    }
    return {
      kind: `project`,
      group: a,
      environmentId: i?.environmentId ?? null,
      label: `${a.displayName} / ${i?.label ?? `All checkouts`}`,
      members: o,
      environmentIds: [...new Set(o.map((e) => e.environmentId))],
    };
  }
  return i
    ? {
        kind: `environment`,
        environmentId: i.environmentId,
        label: i.label,
        members: [],
        environmentIds: [i.environmentId],
      }
    : {
        kind: `all`,
        label: `All environments`,
        members: [],
        environmentIds: n.map((e) => e.environmentId),
      };
}
export {
  g as _,
  C as a,
  c as b,
  b as c,
  v as d,
  _ as f,
  m as g,
  S as h,
  f as i,
  u as l,
  o as m,
  T as n,
  x as o,
  d as p,
  r,
  y as s,
  E as t,
  p as u,
  h as v,
  s as x,
  w as y,
};
//# sourceMappingURL=settingsScope-ohK4TuKq.js.map
