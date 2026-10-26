import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import {
  $o as r,
  A as i,
  Dc as a,
  Ks as o,
  Nb as s,
  Vm as c,
  Xl as l,
  Xo as u,
  Xp as d,
  Yl as f,
  Zs as p,
  c as m,
  el as h,
  g,
  i as ee,
  jb as _,
  nl as te,
  s as ne,
  tl as re,
  w as ie,
} from "./utils-CPoejuy5.js";
import { D as v, T as y, d as ae, f as oe, h as se, m as b } from "./entities-CgVpsCCl.js";
import { J as ce, l as le, o as ue } from "./useSettings-N-JG2LFZ.js";
import { A as de, k as fe, n as pe } from "./server-3D32GveR.js";
import { m as x, o as S } from "./toast-B4KPIJDZ.js";
import { a as me } from "./useParams-JSmvSNOU.js";
import { E as C, O as w, _ as he, b as T, v as E } from "./queries-B4W1CgUo.js";
import { i as D, l as O, n as ge, u as k } from "./threadSort-DAijm5mR.js";
import { t as A } from "./observeIntersection-CBNyKQ0_.js";
import { c as j, i as M } from "./projectFilesQueryState-U0XPiqIE.js";
import { r as _e, t as N } from "./uiStateStore-CPxegt64.js";
import { r as P } from "./sortable.esm-Dykr2NZ4.js";
import { m as F } from "./session-logic-BpDG__2x.js";
import { l as I, r as ve, s as L, t as R } from "./t3ProjectFile-7gwVsbWF.js";
import { t as ye } from "./olderSettledShelf-CaUJS7nU.js";
var z = e(t(), 1),
  B = n(),
  V = 12e4,
  H = 864e5;
function U(e, t) {
  if (
    e.runtime?.status === `preparing` ||
    e.runtime?.status === `queued` ||
    e.runtime?.status === `starting`
  )
    return !0;
  if (e.latestUserMessageAt == null || e.session?.status === `error`) return !1;
  let n = Date.parse(e.latestUserMessageAt);
  if (Number.isNaN(n)) return !1;
  let r = Date.parse(t.now);
  if (Number.isNaN(r) || Math.abs(r - n) > 12e4) return !1;
  let i = e.latestRun ?? e.latestTurn ?? null;
  return (
    i === null ||
    [i.requestedAt, i.startedAt, i.completedAt].every((e) => e == null || Date.parse(e) < n)
  );
}
function be(e) {
  if (
    e.hasPendingApprovals ||
    e.hasPendingUserInput ||
    e.source?.pendingRuntimeRequest != null ||
    e.pendingSubagentRequest != null ||
    (e.pendingGuestMessageCount ?? 0) > 0
  )
    return !0;
  let t = xe(e);
  return (
    t !== void 0 && (e.snoozedAt == null || (t != null && Date.parse(t) > Date.parse(e.snoozedAt)))
  );
}
function xe(e) {
  let t = e.runtime ?? e.session ?? null;
  if (t?.status !== `error` && t?.status !== `failed`) return;
  let n = e.latestRun ?? e.latestTurn ?? null;
  return n?.status === `failed` && n.completedAt != null ? n.completedAt : (t.updatedAt ?? null);
}
function Se(e, t) {
  return !(
    e.hasPendingApprovals ||
    e.hasPendingUserInput ||
    e.source?.pendingRuntimeRequest != null ||
    e.pendingSubagentRequest != null ||
    (e.pendingGuestMessageCount ?? 0) > 0 ||
    U(e, t)
  );
}
function W(e, t) {
  if (e.snoozedUntil == null) return !1;
  let n = Date.parse(e.snoozedUntil);
  return Number.isNaN(n) || n <= Date.parse(t.now) ? !1 : !be(e);
}
function Ce(e, t) {
  if (e.snoozedUntil == null) return null;
  let n = Date.parse(e.snoozedUntil);
  if (Number.isNaN(n)) return null;
  if (be(e)) {
    let t = xe(e);
    return t != null && (e.snoozedAt == null || Date.parse(t) > Date.parse(e.snoozedAt))
      ? t
      : ((e.runtime ?? e.session ?? null)?.updatedAt ?? e.snoozedAt ?? null);
  }
  return n <= Date.parse(t.now) ? e.snoozedUntil : null;
}
var G = 36e5,
  we = 18,
  Te = 9;
function K(e) {
  return e.toLocaleTimeString(void 0, { hour: `numeric`, minute: `2-digit` });
}
function q(e, t) {
  let n = s(_(e));
  return (n.setHours(t, 0, 0, 0), n);
}
function Ee(e, t) {
  let n = s(_(e));
  return (n.setDate(n.getDate() + t), n);
}
function De(e) {
  let t = s(_(e.getTime() + G)),
    n = s(_(e.getTime() + 3 * G)),
    r = [
      { id: `hour`, label: `In 1 hour`, whenLabel: K(t), snoozedUntil: t.toISOString() },
      { id: `three-hours`, label: `In 3 hours`, whenLabel: K(n), snoozedUntil: n.toISOString() },
    ],
    i = q(e, we);
  i.getTime() - e.getTime() > G &&
    r.push({
      id: `evening`,
      label: `This evening`,
      whenLabel: K(i),
      snoozedUntil: i.toISOString(),
    });
  let a = q(Ee(e, 1), Te);
  r.push({ id: `tomorrow`, label: `Tomorrow`, whenLabel: K(a), snoozedUntil: a.toISOString() });
  let o = q(Ee(e, (1 - e.getDay() + 7) % 7 || 7), Te);
  return (
    o.getTime() !== a.getTime() &&
      r.push({
        id: `next-week`,
        label: `Next week`,
        whenLabel: `${o.toLocaleDateString(void 0, { weekday: `short` })} ${K(o)}`,
        snoozedUntil: o.toISOString(),
      }),
    r
  );
}
function Oe(e, t) {
  let n = Date.parse(e),
    r = Date.parse(t.now);
  if (Number.isNaN(n) || Number.isNaN(r)) return `now`;
  let i = n - r;
  return i <= 0
    ? `now`
    : i < G
      ? `${Math.max(1, Math.ceil(i / 6e4))}m`
      : i < H
        ? `${Math.ceil(i / G)}h`
        : `${Math.ceil(i / H)}d`;
}
function ke(e, t) {
  let n;
  if (e.mode === `duration`) {
    let r = Number(e.amount);
    if (!Number.isFinite(r) || r <= 0) return null;
    let i = { minutes: 6e4, hours: G, days: 24 * G }[e.unit];
    n = new Date(t.getTime() + r * i);
  } else if (
    !/^\d{4}-\d{2}-\d{2}$/.test(e.date) ||
    !/^\d{2}:\d{2}$/.test(e.time) ||
    ((n = new Date(`${e.date}T${e.time}:00`)), Ae(n) !== e.date || je(n) !== e.time)
  )
    return null;
  return Number.isFinite(n.getTime()) && n.getTime() > t.getTime() ? n.toISOString() : null;
}
function Ae(e) {
  return `${String(e.getFullYear()).padStart(4, `0`)}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`;
}
function je(e) {
  return `${String(e.getHours()).padStart(2, `0`)}:${String(e.getMinutes()).padStart(2, `0`)}`;
}
function Me(e) {
  if (e.wokeAt === null || e.settled) return !1;
  let t = Date.parse(e.wokeAt);
  return (
    !Number.isNaN(t) &&
    [e.lastVisitedAt, e.latestRunCompletedAt]
      .map((e) => (e ? Date.parse(e) : NaN))
      .filter((e) => !Number.isNaN(e))
      .every((e) => e < t)
  );
}
function J(e) {
  if (
    e.hasPendingApprovals ||
    e.hasPendingUserInput ||
    e.pendingSubagentRequest != null ||
    (!r(e.runtime) && e.runtime?.status !== `idle`)
  )
    return !1;
  let t = e.latestRun,
    n =
      t !== null &&
      t.status !== `preparing` &&
      t.status !== `queued` &&
      t.status !== `starting` &&
      t.status !== `running` &&
      t.status !== `waiting` &&
      e.runtime?.activeRunId !== t.runId;
  return !(e.interactionMode === `plan` && e.hasActionableProposedPlan && n);
}
function Ne(e, t) {
  return Fe(
    e,
    new Map(
      e.map((e) => [
        e,
        Math.max(
          k(e.createdAt) ?? 0,
          k(e.unsettledAt ?? void 0) ?? 0,
          k(e.latestRun?.requestedAt ?? void 0) ?? 0,
          k(e.latestRun?.completedAt ?? void 0) ?? 0,
          t?.(e) ?? 0,
        ),
      ]),
    ),
  );
}
function Pe(e) {
  return Fe(
    e,
    new Map(
      e.map((e) => [
        e,
        Math.max(
          k(e.createdAt) ?? 0,
          k(
            (e.latestUserAuthoredMessageAt === void 0
              ? e.latestRun?.requestedAt
              : e.latestUserAuthoredMessageAt) ?? void 0,
          ) ?? 0,
        ),
      ]),
    ),
  );
}
function Fe(e, t) {
  return [...e].sort(
    (e, n) =>
      t.get(n) - t.get(e) ||
      e.id.localeCompare(n.id) ||
      e.environmentId.localeCompare(n.environmentId),
  );
}
var Ie = 2e3;
function Le() {
  let e = (e) => `${e.environmentId}:${e.id}`,
    t = new Map(),
    n = new Map(),
    r = new Set(),
    i,
    a = 0,
    o = () => Date.now(),
    s = () => {
      (clearTimeout(i), (i = void 0));
      let e = 1 / 0;
      for (let n of t.values()) n.deadline !== null && (e = Math.min(e, n.deadline));
      e !== 1 / 0 &&
        (i = setTimeout(
          () => {
            let e = o();
            for (let [r, i] of t)
              i.deadline !== null &&
                i.deadline <= e &&
                ((i.working = !1), (i.deadline = null), n.set(r, e));
            (s(), a++);
            for (let e of r) e();
          },
          Math.max(0, e - o()),
        ));
    };
  return {
    subscribe(e) {
      return (
        r.add(e),
        () => {
          r.delete(e);
        }
      );
    },
    getSnapshot: () => a,
    observe(r) {
      if (r === null)
        return (
          clearTimeout(i),
          (i = void 0),
          t.clear(),
          n.clear(),
          { isWorking: J, returnedAt: () => void 0 }
        );
      let a = new Set(),
        c = o(),
        l = new Date(c).toISOString();
      for (let i of r) {
        let r = e(i);
        a.add(r);
        let o = JSON.stringify([
            i.archivedAt,
            i.deletedAt,
            i.pinnedAt,
            i.settledOverride,
            i.settledAt,
            i.snoozedAt,
            i.snoozedUntil,
            i.activeOrderKey,
          ]),
          s = t.get(r),
          u =
            i.hasPendingApprovals ||
            i.hasPendingUserInput ||
            i.pendingSubagentRequest != null ||
            (i.pendingGuestMessageCount ?? 0) > 0 ||
            (i.interactionMode === `plan` && i.hasActionableProposedPlan) ||
            i.runtime?.lastError != null ||
            i.latestRun?.status === `failed`,
          d = s !== void 0 && s.placement !== o,
          f =
            i.archivedAt != null ||
            i.deletedAt != null ||
            i.pinnedAt != null ||
            i.settledOverride === `settled` ||
            W(i, { now: l }),
          p = J(i),
          m = !p && s?.working && !u && !d && !f ? (s.deadline ?? c + 2e3) : null,
          h = p || (m !== null && m > c);
        (s?.working && !h && n.set(r, c),
          t.set(r, { working: h, deadline: h ? m : null, placement: o }));
      }
      for (let e of t.keys()) a.has(e) || (t.delete(e), n.delete(e));
      s();
      let u = new Map([...t].map(([e, t]) => [e, t.working])),
        d = new Map(n);
      return { isWorking: (t) => u.get(e(t)) ?? J(t), returnedAt: (t) => d.get(e(t)) };
    },
    isWorking: (n) => t.get(e(n))?.working ?? J(n),
    returnedAt: (t) => n.get(e(t)),
  };
}
function Re(e) {
  return (
    e.threadKey === e.currentThreadKey &&
    e.thread !== null &&
    (e.action === `settle` ? e.thread.settledOverride === `settled` : W(e.thread, { now: e.now }))
  );
}
var ze = `[data-thread-item], [data-thread-selection-safe]`,
  Be = 200;
function Ve(e) {
  return {
    label: [e.title, e.statusLabel, e.projectDisplayName].filter(Boolean).join(`, `),
    current: e.isActive ? `page` : void 0,
  };
}
var He = 3,
  Ue = 160;
function We(e) {
  let t = (0, B.c)(5),
    [n, r] = z.useState(e);
  e && !n && r(!0);
  let i = typeof IntersectionObserver < `u`,
    a = e || n || !i,
    o;
  t[0] === e
    ? (o = t[1])
    : ((o = (t) => {
        if (t !== null && !e && i)
          return A(t, (e) => r(e.isIntersecting), {
            root: t.closest(`[data-slot="scroll-area-viewport"]`),
            rootMargin: `${Ue}px 0px`,
          });
      }),
      (t[0] = e),
      (t[1] = o));
  let s;
  return (
    t[2] !== a || t[3] !== o
      ? ((s = { leaseLiveStatus: a, rowRef: o }), (t[2] = a), (t[3] = o), (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Ge(e, t) {
  let [n, r] = z.useState(null);
  return (
    e !== null && t !== null && (n?.key !== e || n.value !== t) && r({ key: e, value: t }),
    t === null ? (e !== null && n?.key === e ? n.value : null) : t
  );
}
var Ke = (e) => (e.isSorting ? P(e) : !1);
function qe(e) {
  return e.snoozed ? `snoozed` : e.settled ? `settled` : e.pinned ? `pinned` : `active`;
}
var Je = `sidebar-marker-`;
function Ye(e) {
  return `${Je}${e}`;
}
function Y(e) {
  return e.kind === `thread` ? e.key : Ye(e.marker);
}
function Xe(e, t) {
  let n = `pinned`;
  for (let r = 0; r < t && r < e.length; r += 1) {
    let t = e[r];
    t.kind === `marker` &&
      (t.marker === `pinned-divider`
        ? (n = `active`)
        : t.marker === `working-header`
          ? (n = `working`)
          : t.marker === `snoozed-header`
            ? (n = `snoozed`)
            : t.marker === `settled-header` && (n = `settled`));
  }
  return n;
}
function Ze(e, t, n) {
  let r = e.findIndex((e) => Y(e) === t),
    i = e.findIndex((e) => Y(e) === n);
  if (r === -1 || i === -1 || e[r]?.kind !== `thread`) return null;
  let a = e.filter((e, t) => t !== r);
  a.splice(i, 0, e[r]);
  let o = Xe(a, i);
  if (o === `working` || o === `snoozed`) return null;
  let s = [],
    c = [],
    l = `pinned`;
  for (let e of a)
    if (e.kind === `marker`) {
      if (e.marker === `pinned-divider`) l = `active`;
      else if (
        e.marker === `working-header` ||
        e.marker === `snoozed-header` ||
        e.marker === `settled-header`
      )
        break;
    } else l === `pinned` ? s.push(e.key) : c.push(e.key);
  return { section: o, pinnedOrder: s, activeOrder: c };
}
function Qe(e, t) {
  return t === null || t === e || t === `working` || t === `snoozed`
    ? null
    : t === `pinned`
      ? `pin`
      : t === `settled`
        ? `settle`
        : e === `pinned`
          ? `unpin`
          : e === `settled`
            ? `unsettle`
            : `wake`;
}
function $e(e, t, n, r) {
  let i = e.indexOf(t),
    a = e.indexOf(n);
  return i === -1 || a === -1 ? [] : e.slice(Math.min(i, a), Math.max(i, a) + 1).filter(r);
}
function et(e, t) {
  let n = e.closest(`[data-slot="scroll-area-viewport"]`)?.getBoundingClientRect(),
    r = n ? Math.min(Math.max(t, n.top), n.bottom - 1) : t,
    i = null;
  for (let t of e.querySelectorAll(`li[data-thread-item]`)) {
    if (i !== null && t.getBoundingClientRect().top > r) break;
    i = t.dataset.threadItem ?? null;
  }
  return i;
}
function tt(e) {
  let {
    activeKey: t,
    activeSection: n,
    activePinned: r = n === `pinned`,
    activeSettled: i = n === `settled`,
    target: a,
    pinnedOrder: o,
    pinnedKeysById: s,
    reorderableKeys: c,
    activeOrder: l,
    activeKeysById: u,
    activeReorderableKeys: d,
  } = e;
  if (n === `working` || (e.supportsSettlement === !1 && (a.section === `settled` || i)))
    return { kind: `none` };
  let f = (e, n, r) => {
    if (!r) return D({ orderedIds: e, keysById: n, movedId: t });
    if (!r.has(t)) return null;
    let i = D({
      orderedIds: e.filter((e) => r.has(e) || n.get(e) != null),
      keysById: n,
      movedId: t,
    });
    return i.every(({ id: e }) => r.has(e)) ? i : null;
  };
  switch (a.section) {
    case `active`: {
      if (e.activeTimeOrdered)
        return n === `active`
          ? { kind: `none` }
          : {
              kind: `move-active`,
              order: null,
              assignments: [],
              unpin: r,
              unsettle: i,
              unsnooze: n === `snoozed`,
            };
      let t = a.activeOrder;
      if (n === `active` && t.length === l.length && t.every((e, t) => e === l[t]))
        return { kind: `none` };
      let o = f(t, u, d);
      return o === null
        ? { kind: `none` }
        : {
            kind: `move-active`,
            order: t,
            assignments: o,
            unpin: r,
            unsettle: i,
            unsnooze: n === `snoozed`,
          };
    }
    case `settled`:
      return n === `settled` ? { kind: `none` } : { kind: `settle` };
    case `pinned`: {
      let e = a.pinnedOrder;
      if (n === `pinned` && e.length === o.length && e.every((e, t) => e === o[t]))
        return { kind: `none` };
      let i = f(e, s, c);
      return i === null
        ? { kind: `none` }
        : n === `pinned`
          ? i.length === 0
            ? { kind: `none` }
            : { kind: `reorder-pinned`, order: e, assignments: i }
          : {
              kind: `pin`,
              order: e,
              orderKey: i.find((e) => e.id === t)?.orderKey,
              extraAssignments: r ? i : i.filter((e) => e.id !== t),
            };
    }
  }
}
function nt(e, t, n, r) {
  let i = e.settledOverride === `settled`,
    a = { ...e, snoozedAt: null, snoozedUntil: null };
  return t === `settled`
    ? {
        ...a,
        pinnedAt: null,
        pinOrderKey: null,
        activeOrderKey: null,
        settledOverride: `settled`,
        settledAt: i ? (e.settledAt ?? n) : n,
        unsettledAt: null,
      }
    : {
        ...(i ? { ...a, settledOverride: `active`, settledAt: null, unsettledAt: n } : a),
        pinnedAt: t === `pinned` ? (e.pinnedAt ?? n) : null,
        pinOrderKey: t === `pinned` ? (r ?? e.pinOrderKey) : null,
        ...(t === `active` && r !== void 0 ? { activeOrderKey: r } : {}),
      };
}
async function rt(e) {
  let t = new Set(),
    n = null;
  for (let r of e.entries) {
    let i = await e.delete(r, t);
    if (i !== null) {
      if (i._tag === `Failure`) {
        if (l(i)) break;
        n ??= i;
      } else t.add(r.threadKey);
    }
  }
  return { deletedThreadKeys: t, firstFailure: n };
}
async function it(e) {
  let t = [],
    n = [];
  for (let r of e.entries) {
    let i = !1,
      a = await e.archive(r, () => {
        i = !0;
      });
    if (((i || a._tag === `Success`) && t.push(r.threadKey), a._tag === `Success`)) continue;
    let o = a;
    if (i) n.push(o);
    else return { archivedThreadKeys: t, mutationFailure: o, followupFailures: n };
  }
  return { archivedThreadKeys: t, mutationFailure: null, followupFailures: n };
}
function at(e) {
  return [
    { id: `mark-unread`, label: `Mark unread (${e.count})` },
    { id: `archive`, label: `Archive (${e.count})`, disabled: e.hasRunningThread },
    { id: `delete`, label: `Delete (${e.count})`, destructive: !0 },
  ];
}
function X(e) {
  return e.lineage.relationshipToParent === `subagent`;
}
function ot(e, t, n) {
  let r = (e) => n.find((n) => n.id === e && n.environmentId === t),
    i = new Set(),
    a = r(e);
  for (; a !== void 0 && X(a);) {
    if (a.lineage.parentThreadId === null || i.has(a.id)) return e;
    (i.add(a.id), (a = r(a.lineage.parentThreadId)));
  }
  return a?.id ?? e;
}
function st(e, t) {
  return e.filter(
    (e) =>
      e.archivedAt === null && !X(e) && (t === null || t.has(`${e.environmentId}:${e.projectId}`)),
  );
}
function ct(e) {
  return e.supportedCount === 0
    ? null
    : e.actionableCount === 0
      ? { id: `regenerate-title`, label: `Regenerating… (${e.supportedCount})`, disabled: !0 }
      : { id: `regenerate-title`, label: `Regenerate titles (${e.actionableCount})` };
}
function lt(e) {
  return e.pinnedCount === 0 ? null : { id: `unpin`, label: `Unpin (${e.pinnedCount})` };
}
var ut = {
  "Pending Approval": 5,
  "Awaiting Input": 4,
  "Guest Request": 3.75,
  Failed: 3.5,
  Working: 3,
  Connecting: 3,
  Waiting: 2.5,
  "Plan Ready": 2,
  Completed: 1,
};
function dt(e) {
  let t = e.setTimeoutFn ?? globalThis.setTimeout,
    n = e.clearTimeoutFn ?? globalThis.clearTimeout,
    r = !1,
    i = null,
    a = () => {
      i !== null && (n(i), (i = null));
    };
  return {
    sync: (n) => {
      n
        ? r ||
          i !== null ||
          (i = t(() => {
            ((i = null), (r = !0), e.onVisibilityChange(!0));
          }, e.delayMs))
        : (a(), r && ((r = !1), e.onVisibilityChange(!1)));
    },
    dispose: () => {
      a();
    },
  };
}
function ft() {
  let e = (0, B.c)(5),
    [t, n] = z.useState(!1),
    r = z.useRef(null),
    i,
    a;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = () => {
        let e = dt({
          delayMs: Be,
          onVisibilityChange: (e) => {
            n(e);
          },
          setTimeoutFn: window.setTimeout.bind(window),
          clearTimeoutFn: window.clearTimeout.bind(window),
        });
        return (
          (r.current = e),
          () => {
            (e.dispose(), (r.current = null));
          }
        );
      }),
      (a = []),
      (e[0] = i),
      (e[1] = a))
    : ((i = e[0]), (a = e[1])),
    z.useEffect(i, a));
  let o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (e) => {
        r.current?.sync(e);
      }),
      (e[2] = o))
    : (o = e[2]);
  let s = o,
    c;
  return (
    e[3] === t
      ? (c = e[4])
      : ((c = { showThreadJumpHints: t, updateThreadJumpHintsVisibility: s }),
        (e[3] = t),
        (e[4] = c)),
    c
  );
}
function pt(e, t) {
  return e === void 0 ? t : (e ?? void 0);
}
function mt(e) {
  if (!e.latestRun?.completedAt) return !1;
  let t = Date.parse(e.latestRun.completedAt);
  if (Number.isNaN(t) || !e.lastVisitedAt) return !1;
  let n = Date.parse(e.lastVisitedAt);
  return Number.isNaN(n) ? !0 : t > n;
}
function ht(e) {
  if (e.latestRun?.status !== `failed`) return !1;
  if (!e.lastVisitedAt) return !0;
  let t = Date.parse(e.latestRun.completedAt ?? ``),
    n = Date.parse(e.lastVisitedAt);
  return Number.isNaN(t) || Number.isNaN(n) ? !0 : t > n;
}
function gt(e) {
  return e === null || !e.closest(ze);
}
function _t(e) {
  return e > 1;
}
function vt(e, t) {
  return e === null || !(`closest` in e) || typeof e.closest != `function` ? null : e.closest(t);
}
function yt(e) {
  return typeof e != `object` || !e
    ? !1
    : vt(e, `a[href]`) !== null ||
        vt(
          `parentElement` in e && e.parentElement !== null && typeof e.parentElement == `object`
            ? e.parentElement
            : null,
          `a[href]`,
        ) !== null;
}
function bt(e, t) {
  return e || t <= 1;
}
function xt(e) {
  let { getId: t, getPreferenceIds: n, items: r, preferredIds: i } = e;
  if (i.length === 0) return [...r];
  let a = new Map();
  for (let [e, i] of r.entries()) {
    let r = n?.(i) ?? [t(i)];
    for (let t of new Set(r)) {
      let n = a.get(t);
      n ? n.push(e) : a.set(t, [e]);
    }
  }
  let o = new Set(),
    s = i.flatMap((e) => {
      let t = a.get(e)?.find((e) => !o.has(e));
      return t === void 0 ? [] : (o.add(t), [r[t]]);
    }),
    c = r.filter((e, t) => !o.has(t));
  return [...s, ...c];
}
function St(e, t = He) {
  return e.slice(0, Math.max(0, t));
}
function Ct(e) {
  let { currentThreadId: t, direction: n, threadIds: r } = e;
  if (r.length === 0) return null;
  if (t === null) return n === `previous` ? (r.at(-1) ?? null) : (r[0] ?? null);
  let i = r.indexOf(t);
  return i === -1
    ? null
    : n === `previous`
      ? i > 0
        ? (r[i - 1] ?? null)
        : null
      : i < r.length - 1
        ? (r[i + 1] ?? null)
        : null;
}
function wt(e) {
  return e.button === 2 || (e.isMac && e.button === 0 && e.ctrlKey);
}
function Tt(e) {
  return e.isActive || e.isSelected || e.status === `input` || e.status === `request`
    ? !1
    : e.status === `working` || e.status === `waiting`
      ? !0
      : e.status === `ready` || e.status === `approval`
        ? !e.isUnread && !e.isWoke
        : !1;
}
function Et(e) {
  return e.hasPendingApprovals || e.pendingSubagentRequest === `approval`
    ? `approval`
    : e.hasPendingUserInput || e.pendingSubagentRequest === `user_input`
      ? `input`
      : (e.pendingGuestMessageCount ?? 0) > 0
        ? `request`
        : e.runtime?.status === `running` && e.blockedOnThreadWait === !0
          ? `waiting`
          : e.runtime !== null &&
              [`preparing`, `queued`, `starting`, `running`, `waiting`].includes(e.runtime.status)
            ? `working`
            : e.runtime?.status === `idle`
              ? `waiting`
              : e.runtime?.status === `failed`
                ? e.runtime.lastErrorClass === `usage_limit`
                  ? `limited`
                  : `failed`
                : `ready`;
}
function Dt(...e) {
  for (let t of e) {
    if (t == null) continue;
    let e = Date.parse(t);
    if (!Number.isNaN(e)) return e;
  }
  return 0;
}
var Ot = new Set();
function kt(e, t, n = Ot, r = Date.now()) {
  let i = T(t);
  if (i.length === 0) return { titleMatches: [], contentMatches: [] };
  let a = C(e, (e, t) => w(i, E(e, null), r, { ...t, picks: !1 })).map(({ item: e }) => e),
    o = new Set(a),
    s = new Map(e.map((e) => [he({ environmentId: e.environmentId, threadId: e.id }), e]));
  return {
    titleMatches: a,
    contentMatches: [...n].flatMap((e) => {
      let t = s.get(e);
      return t && !o.has(t) ? [t] : [];
    }),
  };
}
function At(e, t) {
  let n = m(t);
  if (n.length === 0) return !1;
  let r = m(o(e).join(` `));
  return n.split(` `).every((e) => r.includes(e));
}
function jt(e) {
  let t = e.query.trim();
  return t.length === 0 ? e.items : e.items.filter((n) => n.value !== `all` && e.matches(n, t));
}
function Mt(e, t) {
  switch (t.type) {
    case `query-changed`:
      return { ...e, query: t.query };
    case `open-changed`:
      return { open: t.open, query: `` };
    case `project-settings-opened`:
      return { open: !1, query: `` };
  }
}
function Nt(e) {
  return u(e);
}
function Pt(e) {
  let { thread: t } = e;
  return t.hasPendingApprovals || t.pendingSubagentRequest === `approval`
    ? {
        label: `Pending Approval`,
        colorClass: `text-amber-600 dark:text-amber-300/90`,
        dotClass: `bg-amber-500 dark:bg-amber-300/90`,
        pulse: !1,
      }
    : t.hasPendingUserInput || t.pendingSubagentRequest === `user_input`
      ? {
          label: `Awaiting Input`,
          colorClass: `text-indigo-600 dark:text-indigo-300/90`,
          dotClass: `bg-indigo-500 dark:bg-indigo-300/90`,
          pulse: !1,
        }
      : (t.pendingGuestMessageCount ?? 0) > 0
        ? {
            label: `Guest Request`,
            colorClass: `text-guest-foreground`,
            dotClass: `bg-guest`,
            pulse: !1,
          }
        : (t.runtime?.status === `running` && t.blockedOnThreadWait !== !0) ||
            t.runtime?.status === `waiting`
          ? {
              label: `Working`,
              colorClass: `text-sky-600 dark:text-sky-300/80`,
              dotClass: `bg-sky-500 dark:bg-sky-300/80`,
              pulse: !0,
            }
          : t.runtime?.status === `preparing` ||
              t.runtime?.status === `starting` ||
              t.runtime?.status === `queued`
            ? {
                label: `Connecting`,
                colorClass: `text-sky-600 dark:text-sky-300/80`,
                dotClass: `bg-sky-500 dark:bg-sky-300/80`,
                pulse: !0,
              }
            : (t.runtime?.status === `running` && t.blockedOnThreadWait === !0) ||
                p(t.pendingBackgroundTasks ?? [])
              ? {
                  label: `Waiting`,
                  colorClass: `text-sidebar-muted-foreground`,
                  dotClass: `bg-sidebar-muted-foreground`,
                  pulse: !1,
                }
              : ht(t)
                ? {
                    label: `Failed`,
                    colorClass: `text-red-600 dark:text-red-300/90`,
                    dotClass: `bg-red-500 dark:bg-red-300/90`,
                    pulse: !1,
                  }
                : !t.hasPendingUserInput &&
                    t.interactionMode === `plan` &&
                    F(t.latestRun, t.runtime) &&
                    t.hasActionableProposedPlan
                  ? {
                      label: `Plan Ready`,
                      colorClass: `text-violet-600 dark:text-violet-300/90`,
                      dotClass: `bg-violet-500 dark:bg-violet-300/90`,
                      pulse: !1,
                    }
                  : mt(t)
                    ? {
                        label: `Completed`,
                        colorClass: `text-emerald-600 dark:text-emerald-300/90`,
                        dotClass: `bg-emerald-500 dark:bg-emerald-300/90`,
                        pulse: !1,
                      }
                    : null;
}
function Ft(e) {
  let t = null;
  for (let n of e) n !== null && (t === null || ut[n.label] > ut[t.label]) && (t = n);
  return t;
}
function It(e) {
  let { deletedThreadId: t, deletedThreadIds: n, sortOrder: r, threads: i } = e,
    a = i.find((e) => e.id === t);
  return a
    ? (O(
        i.filter((e) => e.projectId === a.projectId && e.id !== t && !n?.has(e.id)),
        r,
      )[0]?.id ?? null)
    : null;
}
function Lt(e, t, n) {
  return t.length > 0
    ? t.reduce((e, t) => Math.max(e, ge(t, n)), -1 / 0)
    : n === `created_at`
      ? (k(e.createdAt) ?? -1 / 0)
      : (k(e.updatedAt ?? e.createdAt) ?? -1 / 0);
}
function Z(e, t, n, r) {
  return t === `manual`
    ? [...e]
    : e
        .map((e) => ({ project: e, timestamp: Lt(e, n(e), t) }))
        .sort(
          (e, t) =>
            (t.timestamp === e.timestamp ? 0 : t.timestamp > e.timestamp ? 1 : -1) ||
            r(e.project, t.project),
        )
        .map(({ project: e }) => e);
}
function Rt(e, t, n) {
  let r = new Map();
  for (let e of t) {
    let t = r.get(e.projectId) ?? [];
    (t.push(e), r.set(e.projectId, t));
  }
  return Z(
    e,
    n,
    (e) => r.get(e.id) ?? [],
    (e, t) => e.title.localeCompare(t.title) || e.id.localeCompare(t.id),
  );
}
function zt(e, t, n) {
  let r = new Map(
      e.flatMap((e) =>
        e.memberProjectRefs.map((t) => [`${t.environmentId}\0${t.projectId}`, e.projectKey]),
      ),
    ),
    i = new Map();
  for (let e of t) {
    if (e.archivedAt !== null) continue;
    let t = r.get(`${e.environmentId}\0${e.projectId}`);
    if (!t) continue;
    let n = i.get(t);
    n ? n.push(e) : i.set(t, [e]);
  }
  return Z(
    e,
    n,
    (e) => i.get(e.projectKey) ?? [],
    (e, t) => e.title.localeCompare(t.title) || e.projectKey.localeCompare(t.projectKey),
  );
}
function Bt(e, t, n) {
  return zt(e, st(t, null), n);
}
function Vt(e, t, n) {
  let r = (e, t) => `${e}\u0000${t}`,
    i = new Map();
  for (let e of t) {
    if (e.archivedAt !== null) continue;
    let t = r(e.environmentId, e.projectId),
      n = i.get(t) ?? [];
    (n.push(e), i.set(t, n));
  }
  return Z(
    e,
    n,
    (e) => i.get(r(e.environmentId, e.id)) ?? [],
    (e, t) =>
      e.title.localeCompare(t.title) ||
      e.environmentId.localeCompare(t.environmentId) ||
      e.id.localeCompare(t.id),
  );
}
function Ht(e, t) {
  return `${e}:${t}`;
}
function Ut(e, t, n) {
  if (t.length === 0) return e;
  let r = { ...e };
  for (let e of t) n === null ? delete r[e] : (r[e] = n);
  return r;
}
function Wt(e) {
  ue((t) => {
    let n = t.sidebarActiveThreadWorkspaceId;
    return !t.sidebarThreadWorkspacesEnabled || n === null
      ? t
      : {
          ...t,
          sidebarThreadWorkspaceAssignments: Ut(
            t.sidebarThreadWorkspaceAssignments,
            [Ht(e.environmentId, e.threadId)],
            n,
          ),
        };
  });
}
function Q(e) {
  return e.envMode === `worktree` && e.newWorktreesStartFromOrigin;
}
function Gt(e) {
  return (
    e.projectDefaultSelection ??
    (e.carrySourceDraftId === e.destinationDraftId ? null : e.carrySelection)
  );
}
function Kt(e) {
  let t = e?.activeProvider;
  return e?.modelSelectionExplicit === !0 && t != null && e.modelSelectionByProvider[t] !== void 0;
}
function qt(e) {
  return e.activeThread
    ? h(e.activeThread.environmentId, e.activeThread.projectId)
    : e.activeDraftThread
      ? h(e.activeDraftThread.environmentId, e.activeDraftThread.projectId)
      : e.defaultProjectRef;
}
async function Jt(e) {
  let t = qt(e);
  return t ? (await e.handleNewThread(t), !0) : !1;
}
async function Yt(e, t) {
  let n = await f(a, M(e, t, d), { reportDefect: !1, reportFailure: !1 }),
    r = j(e, t, d, n._tag === `Success` ? n.value : null);
  return r === null || r.exists === !1 || r.truncated ? null : R(r.contents);
}
function $(e) {
  return {
    ...(e?.branch === void 0 ? {} : { branch: e.branch }),
    ...(e?.worktreePath === void 0 ? {} : { worktreePath: e.worktreePath }),
    ...(e?.envMode === void 0 ? {} : { envMode: e.envMode }),
    ...(e?.startFromOrigin === void 0 ? {} : { startFromOrigin: e.startFromOrigin }),
  };
}
function Xt() {
  let e = (0, B.c)(6),
    t = le(I),
    n = me(),
    r;
  e[0] === n.state.matches
    ? (r = e[1])
    : ((r = () => {
        let e = n.state.matches[n.state.matches.length - 1]?.params ?? {};
        return x(e);
      }),
      (e[0] = n.state.matches),
      (e[1] = r));
  let o = r,
    s;
  if (e[2] !== o || e[3] !== t || e[4] !== n) {
    let r = (e, r) => {
      let s = oe(),
        l = a.get(pe),
        u = l.get(e.environmentId)?.settings ?? c,
        {
          getComposerDraft: d,
          getDraftSessionByLogicalProjectKey: f,
          getDraftSession: p,
          getDraftThread: m,
          applyStickyState: h,
          setDraftThreadContext: _,
          setLogicalProjectDraftThreadId: v,
          setModelSelection: y,
        } = i.getState(),
        le = n.state.location.href,
        ue = () => n.state.location.href !== le,
        x = o(),
        S = x?.kind === `server` ? b(x.threadRef) : null,
        me = x?.kind === `draft` ? p(x.draftId) : null,
        C = x ? d(x.kind === `server` ? x.threadRef : x.draftId) : null,
        w = C?.activeProvider ?? null,
        he = (w ? (C?.modelSelectionByProvider[w] ?? null) : null) ?? S?.modelSelection ?? null,
        T = C?.interactionMode ?? S?.interactionMode ?? me?.interactionMode ?? null,
        E = s.find((t) => t.id === e.projectId && t.environmentId === e.environmentId),
        D = () => ue() || (E !== void 0 && ae(e) === null),
        O = de(u, E?.id ?? null, E),
        ge = O.settings.defaultModelSelection,
        k = O.settings.defaultRuntimeMode,
        A = (e) =>
          Gt({
            projectDefaultSelection: ge ?? null,
            carrySelection: he,
            carrySourceDraftId: x?.kind === `draft` ? x.draftId : null,
            destinationDraftId: e,
          }),
        j = async () => {
          let t =
            E !== void 0 &&
            O.settings.defaultThreadEnvMode === null &&
            a.get(ce.connectedEnvironmentIdsAtom).includes(E.environmentId)
              ? await Yt(E.environmentId, E.workspaceRoot)
              : null;
          return fe({
            projectSettings: de(u, E?.id ?? null, E, t),
            workspaceRoot: E?.workspaceRoot ?? null,
            newProjectsRoot: l.get(e.environmentId)?.newProjectsRoot,
            projectHasThreads:
              se().some(
                (t) => t.environmentId === e.environmentId && t.projectId === e.projectId,
              ) || ye([{ environmentId: e.environmentId, id: e.projectId }], []) > 0,
          });
        },
        M = E ? ve(E, t) : te(e),
        _e = r?.branch !== void 0,
        N = r?.worktreePath !== void 0,
        P = r?.envMode !== void 0,
        F = r?.startFromOrigin !== void 0,
        I = f(M),
        L = I ? re(I.environmentId, I.threadId) : null,
        R = I !== null && I.promotedTo == null && L !== null && b(L) === null ? I : null;
      L && R === null && ie(L);
      let z = R && !g(d(R.draftId)) ? R : null,
        B = x ? (x.kind === `server` ? m(x.threadRef) : p(x.draftId)) : null;
      if (z)
        return (async () => {
          let t = x?.kind === `draft` && x.draftId === z.draftId,
            i = _e || N || P || F,
            a = null;
          if (i) a = $(r);
          else if (!t) {
            let e = await j();
            if (D()) return null;
            let t = o(),
              n = t?.kind === `draft` && t.draftId === z.draftId,
              r = L !== null && b(L) !== null,
              i = f(M)?.draftId !== z.draftId,
              s = g(d(z.draftId));
            if (n || r || i || s) return null;
            a = {
              branch: null,
              worktreePath: null,
              envMode: e,
              startFromOrigin: Q({
                envMode: e,
                newWorktreesStartFromOrigin: O.settings.newWorktreesStartFromOrigin,
              }),
            };
          }
          if (
            (a &&
              _(z.draftId, {
                ...a,
                ...(t ? {} : { runtimeMode: k }),
                ...(T ? { interactionMode: T } : {}),
              }),
            !Kt(d(z.draftId)))
          ) {
            h(z.draftId);
            let e = A(z.draftId);
            e && y(z.draftId, e, { replaceOptions: !0 });
          }
          v(M, e, z.draftId, {
            threadId: z.threadId,
            ...a,
            ...(t ? {} : { runtimeMode: k }),
            ...(T ? { interactionMode: T } : {}),
          });
          let s = { draftId: z.draftId, threadId: z.threadId },
            c = o();
          return (
            (c?.kind === `draft` && c.draftId === z.draftId) ||
              (await n.navigate({
                to: `/draft/$draftId`,
                params: { draftId: z.draftId },
                replace: r?.replace ?? !1,
              })),
            s
          );
        })();
      if (
        B &&
        x?.kind === `draft` &&
        B.logicalProjectKey === M &&
        B.promotedTo == null &&
        !g(d(x.draftId))
      )
        return (
          (_e || N || P || F) && _(x.draftId, $(r)),
          v(M, e, x.draftId, {
            threadId: B.threadId,
            createdAt: B.createdAt,
            runtimeMode: B.runtimeMode,
            interactionMode: B.interactionMode,
            ...$(r),
          }),
          Promise.resolve({ draftId: x.draftId, threadId: B.threadId })
        );
      let V = ee(),
        H = ne(),
        U = new Date().toISOString();
      return (async () => {
        let t = r?.envMode ?? (await j());
        if (D()) return null;
        let i = f(M);
        if (i && i.draftId !== I?.draftId && b(re(i.environmentId, i.threadId)) === null)
          return (
            v(M, e, i.draftId, {
              threadId: i.threadId,
              createdAt: i.createdAt,
              runtimeMode: i.runtimeMode,
              interactionMode: i.interactionMode,
              ...$(r),
            }),
            await n.navigate({
              to: `/draft/$draftId`,
              params: { draftId: i.draftId },
              replace: r?.replace ?? !1,
            }),
            { draftId: i.draftId, threadId: i.threadId }
          );
        (v(M, e, V, {
          threadId: H,
          createdAt: U,
          branch: r?.branch ?? null,
          worktreePath: r?.worktreePath ?? null,
          envMode: t,
          startFromOrigin:
            r?.startFromOrigin ??
            Q({ envMode: t, newWorktreesStartFromOrigin: O.settings.newWorktreesStartFromOrigin }),
          runtimeMode: k,
          ...(T ? { interactionMode: T } : {}),
        }),
          h(V));
        let a = A(V);
        return (
          a && y(V, a, { replaceOptions: !0 }),
          await n.navigate({
            to: `/draft/$draftId`,
            params: { draftId: V },
            replace: r?.replace ?? !1,
          }),
          { draftId: V, threadId: H }
        );
      })();
    };
    ((s = async (e, t) => {
      let n = await r(e, t);
      return (n !== null && Wt({ environmentId: e.environmentId, threadId: n.threadId }), n);
    }),
      (e[2] = o),
      (e[3] = t),
      (e[4] = n),
      (e[5] = s));
  } else s = e[5];
  return s;
}
function Zt() {
  let e = (0, B.c)(13),
    t = _e(en),
    n = S(),
    r = n?.kind === `server` ? n.threadRef : null,
    a = n?.kind === `draft` ? n.draftId : null,
    o = v(r),
    s = i($t),
    c;
  e[0] !== s || e[1] !== n
    ? ((c = () =>
        n
          ? n.kind === `server`
            ? s(n.threadRef)
            : i.getState().getDraftSession(n.draftId)
          : null),
      (e[0] = s),
      (e[1] = n),
      (e[2] = c))
    : (c = e[2]);
  let l = i(c),
    u = y(),
    d = Xt(),
    f;
  if (e[3] !== t || e[4] !== u) {
    let [n] = xt({ items: u, preferredIds: t, getId: L, getPreferenceIds: Qt });
    ((f = n ? h(n.environmentId, n.id) : null), (e[3] = t), (e[4] = u), (e[5] = f));
  } else f = e[5];
  let p = f,
    m;
  return (
    e[6] !== l || e[7] !== o || e[8] !== p || e[9] !== d || e[10] !== a || e[11] !== r
      ? ((m = {
          activeDraftThread: l,
          activeThread: o,
          defaultProjectRef: p,
          handleNewThread: d,
          routeDraftId: a,
          routeThreadRef: r,
        }),
        (e[6] = l),
        (e[7] = o),
        (e[8] = p),
        (e[9] = d),
        (e[10] = a),
        (e[11] = r),
        (e[12] = m))
      : (m = e[12]),
    m
  );
}
function Qt(e) {
  return [L(e), N(e.workspaceRoot)];
}
function $t(e) {
  return e.getDraftThread;
}
function en(e) {
  return e.projectOrder;
}
export {
  We as $,
  Ze as A,
  kt as B,
  _t as C,
  Mt as D,
  At as E,
  qe as F,
  Y as G,
  bt as H,
  Et as I,
  zt as J,
  Ye as K,
  pt as L,
  Ve as M,
  ot as N,
  Ct as O,
  $e as P,
  Ge as Q,
  Pt as R,
  X as S,
  tt as T,
  Re as U,
  gt as V,
  Tt as W,
  Vt as X,
  Rt as Y,
  Bt as Z,
  It as _,
  qt as a,
  Pe as at,
  wt as b,
  nt as c,
  W as ct,
  lt as d,
  Ae as dt,
  ft as et,
  at as f,
  je as ft,
  Dt as g,
  Ce as gt,
  st as h,
  Oe as ht,
  Q as i,
  Ne as it,
  Qe as j,
  Ft as k,
  it as l,
  U as lt,
  jt as m,
  De as mt,
  Xt as n,
  Le as nt,
  Jt as o,
  V as ot,
  rt as p,
  ke as pt,
  et as q,
  Kt as r,
  J as rt,
  Ke as s,
  Se as st,
  Zt as t,
  Ie as tt,
  ct as u,
  Me as ut,
  St as v,
  xt as w,
  yt as x,
  mt as y,
  Nt as z,
};
//# sourceMappingURL=useHandleNewThread-Cfzzj4KK.js.map
