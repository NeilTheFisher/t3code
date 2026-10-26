import { $p as e, Ey as t, ZC as n, Zp as r, eb as i, em as a, yy as o } from "./utils-CPoejuy5.js";
import { A as s } from "./server-3D32GveR.js";
var c = `Handle this webhook:
{{body}}`;
function l(e) {
  if (e.trim() === ``) return null;
  let t = Number(e.trim());
  return Number.isInteger(t) && t > 0 && t <= 1440 ? t : void 0;
}
var u = [
    { op: `equals`, label: `equals` },
    { op: `notEquals`, label: `does not equal` },
    { op: `in`, label: `is one of` },
    { op: `startsWith`, label: `starts with` },
    { op: `exists`, label: `exists` },
  ],
  d = 0,
  f = () => `filter-${++d}`;
function p() {
  return { id: f(), path: ``, op: `equals`, value: `` };
}
function m(e, t) {
  return e.filter((e) => e.id !== t);
}
function h(e) {
  return (e ?? []).map((e) => ({
    id: f(),
    path: e.path,
    op: e.op,
    value: e.op === `exists` ? `` : e.op === `in` ? e.value.join(`, `) : e.value,
  }));
}
var g = i(e);
function _(e) {
  if (e.length > 16) return { error: `Use at most 16 filters.` };
  let t = [];
  for (let [r, i] of e.entries()) {
    let e = i.path.trim(),
      a = g(
        i.op === `exists`
          ? { path: e, op: i.op }
          : i.op === `in`
            ? {
                path: e,
                op: i.op,
                value: i.value
                  .split(`,`)
                  .map((e) => e.trim())
                  .filter((e) => e !== ``),
              }
            : { path: e, op: i.op, value: i.value },
      );
    if (n(a))
      return {
        error: `Filter ${r + 1} needs a path under body, headers or query${i.op === `exists` ? `.` : i.op === `in` ? `, and at least one value.` : `, and a value.`}`,
      };
    t.push(a.value);
  }
  return { filters: t };
}
function v(e, t) {
  return (
    e.length !== t.length ||
    e.some(
      (e, n) =>
        e.path !== t[n]?.path ||
        e.op !== t[n]?.op ||
        (e.op !== `exists` && e.value !== t[n]?.value),
    )
  );
}
function y(e, t, n) {
  return e.kind === `unavailable` || !e.environmentIds.includes(t)
    ? !1
    : e.kind === `project` || e.kind === `checkout`
      ? e.members.some((e) => e.environmentId === t && e.id === n)
      : !0;
}
function b(e) {
  return {
    ...(typeof e.environmentId == `string` && e.environmentId.trim()
      ? { environmentId: o.make(e.environmentId) }
      : {}),
    ...(typeof e.taskId == `string` && e.taskId.trim() ? { taskId: t.make(e.taskId) } : {}),
  };
}
var x = {
  signatureHeader: `x-hub-signature-256`,
  signatureEncoding: `hex`,
  signaturePrefix: `sha256=`,
};
function S(e) {
  if (e.scheduleMode !== `webhook`) return [];
  if (l(e.maxDeliveryAgeMinutes) === void 0)
    return [
      {
        title: `Invalid age limit`,
        description: `Enter whole minutes from 1 to ${r}, or leave it blank.`,
      },
    ];
  let t = [];
  for (let [n, r] of [
    [`Replay key`, e.replayKey],
    [`Coalesce key`, e.coalesceKey],
  ])
    r.trim() &&
      !a(r.trim()) &&
      t.push({
        title: `Invalid webhook settings`,
        description: `${n} must contain a valid request placeholder.`,
      });
  let n = e.coalesceWindowSeconds.trim();
  return (
    n &&
      (!Number.isInteger(Number(n)) || Number(n) < 10 || Number(n) > 3600) &&
      t.push({
        title: `Invalid webhook settings`,
        description: `Coalesce window must be whole seconds from 10 to 3600.`,
      }),
    t
  );
}
function C(e) {
  return e.outcome === `accepted`
    ? e.pendingWindow
      ? `Opened window`
      : `Ran`
    : ({
        dispatch_failed: `Run failed`,
        duplicate: `Duplicate`,
        coalesced: `Coalesced`,
        filtered: `Filtered`,
        rejected_signature: `Bad signature`,
        disabled: `Task paused`,
        rate_limited: `Rate limited`,
        expired: `Too old`,
      }[e.outcome] ?? e.outcome.replaceAll(`_`, ` `));
}
function w(e) {
  if (e.scheduleMode === `webhook`) {
    if (S(e).length > 0) return null;
    let t = l(e.maxDeliveryAgeMinutes),
      n = e.replayKey.trim(),
      r = e.coalesceKey.trim(),
      i = e.coalesceWindowSeconds.trim() ? Number(e.coalesceWindowSeconds) : void 0;
    if (t === void 0) return null;
    let a = _(e.filters);
    if (!(`filters` in a)) return null;
    let o = e.signatureSecret.trim();
    return {
      type: `webhook`,
      signature: e.signatureEnabled
        ? {
            header: e.signatureHeader.trim(),
            encoding: e.signatureEncoding,
            prefix: e.signaturePrefix,
            ...(o ? { secret: o } : {}),
          }
        : null,
      maxDeliveryAgeMinutes: t,
      ...(n || r || i !== void 0
        ? {
            dedupe: {
              ...(n ? { replayKey: n } : {}),
              ...(r ? { coalesceKey: r } : {}),
              ...(i === void 0 ? {} : { coalesceWindowSeconds: i }),
            },
          }
        : { dedupe: {} }),
      ...(v(e.savedFilters, e.filters) ? { filters: a.filters } : {}),
    };
  }
  if (e.scheduleMode === `interval`)
    return { type: `interval`, everyMs: Math.round(Number(e.intervalMinutes) * 6e4) };
  let t = e.weekdays.size === 0 || e.weekdays.size === 7;
  return {
    type: `fixed_time`,
    timeOfDay: e.timeOfDay || `09:00`,
    ...(t ? {} : { weekdays: [...e.weekdays].toSorted() }),
  };
}
function T(e) {
  let t = e.schedule,
    n = h(t.type === `webhook` ? t.filters : void 0),
    r =
      t.type === `fixed_time` && t.weekdays && t.weekdays.length > 0
        ? new Set(t.weekdays)
        : new Set([0, 1, 2, 3, 4, 5, 6]);
  return {
    editingId: e.id,
    title: e.title,
    prompt: e.prompt,
    enabled: e.enabled,
    scheduleMode: t.type === `interval` ? `interval` : t.type === `webhook` ? `webhook` : `fixed`,
    intervalMinutes: t.type === `interval` ? String(Math.max(1, t.everyMs / 6e4)) : `15`,
    timeOfDay: t.type === `fixed_time` ? t.timeOfDay : `09:00`,
    weekdays: r,
    projectId: e.projectId,
    threadId: e.threadId ?? ``,
    workspaceMode: e.workspaceStrategy.type,
    baseRef: e.workspaceStrategy.type === `worktree` ? e.workspaceStrategy.baseRef : `main`,
    startFromOrigin:
      e.workspaceStrategy.type === `worktree` ? (e.workspaceStrategy.startFromOrigin ?? !1) : !0,
    existingWorktreePath:
      e.workspaceStrategy.type === `existing_worktree` ? e.workspaceStrategy.worktreePath : ``,
    modelKey: `${e.modelSelection.instanceId}:${e.modelSelection.model}`,
    runtimeMode: e.runtimeMode,
    interactionMode: e.interactionMode,
    baseModelSelection: e.modelSelection,
    ...(t.type === `webhook` && t.signature !== null
      ? {
          signatureEnabled: !0,
          signatureHeader: t.signature.header,
          signatureEncoding: t.signature.encoding,
          signaturePrefix: t.signature.prefix,
        }
      : { signatureEnabled: !1, ...x }),
    signatureSecret: ``,
    replayKey: t.type === `webhook` ? (t.dedupe?.replayKey ?? ``) : ``,
    coalesceKey: t.type === `webhook` ? (t.dedupe?.coalesceKey ?? ``) : ``,
    coalesceWindowSeconds:
      t.type === `webhook` && t.dedupe?.coalesceWindowSeconds !== void 0
        ? String(t.dedupe.coalesceWindowSeconds)
        : ``,
    maxDeliveryAgeMinutes:
      t.type === `webhook` && t.maxDeliveryAgeMinutes != null
        ? String(t.maxDeliveryAgeMinutes)
        : ``,
    filters: n,
    savedFilters: n,
  };
}
function E(e, t, n) {
  let r = n.filter(
      (e) =>
        e.enabled && e.installed && e.isAvailable && e.snapshot.auth.status !== `unauthenticated`,
    ),
    i = s(e, t?.id ?? null, t).settings.defaultModelSelection;
  for (let t of [i, e.defaultModelSelection])
    if (
      t &&
      r.some(
        (e) =>
          e.instanceId === t.instanceId &&
          e.models.find((e) => e.slug === t.model)?.isLegacy !== !0,
      )
    )
      return t;
  let a = r.flatMap((e) =>
      e.models.filter((e) => !e.isLegacy).map((t) => ({ instanceId: e.instanceId, model: t })),
    ),
    o = a.find(({ model: e }) => e.isDefault) ?? a[0];
  return o ? { instanceId: o.instanceId, model: o.model.slug } : null;
}
export {
  T as a,
  S as c,
  p as d,
  _ as f,
  E as i,
  c as l,
  y as n,
  b as o,
  m as p,
  w as r,
  C as s,
  x as t,
  u,
};
//# sourceMappingURL=scheduledTasksSettings.logic-DI4UiHbD.js.map
