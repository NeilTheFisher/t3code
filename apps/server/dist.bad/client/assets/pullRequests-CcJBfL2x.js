import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { r as i } from "./triangle-alert-Ca4wixX0.js";
import { a, i as o, n as s, o as c, r as l, t as u } from "./user-round-DPyHwZ8b.js";
import { t as d } from "./circle-x-CYgyy81Z.js";
import {
  Bg as f,
  Bn as p,
  By as m,
  Dc as h,
  Hy as g,
  JC as _,
  Jg as v,
  Js as y,
  Kf as b,
  Lf as x,
  Lg as S,
  Ns as C,
  Or as ee,
  Rs as w,
  Sx as T,
  Uf as te,
  Vn as E,
  Vy as D,
  Wn as O,
  Zn as ne,
  cp as re,
  db as ie,
  eb as ae,
  hr as oe,
  jc as k,
  kS as A,
  ky as j,
  qf as se,
  t as M,
  yy as ce,
  zf as N,
  zg as le,
} from "./utils-CPoejuy5.js";
import { Z as ue } from "./entities-CgVpsCCl.js";
import { H as de, U as fe, W as pe, t as P } from "./runtime-CY2dlMEg.js";
import { t as me } from "./query-LKSVgBQH.js";
import { u as F } from "./threadSort-DAijm5mR.js";
import { n as he, t as ge } from "./pullRequestIcons-CfNS1kGB.js";
import { tt as _e } from "./pullRequestDetail.logic-Df887lG8.js";
var I = n(),
  ve = new Intl.NumberFormat();
function L(e) {
  return ve.format(e);
}
var ye = (e) => `${e.environmentId ?? ``} ${e.host}`,
  be = { reviewRequested: `Review requested`, authored: `Authored`, others: `Others` };
function R(e) {
  let t = e?.trim().toLowerCase() ?? ``;
  return t.length > 0 ? t : null;
}
function xe(e) {
  let t = e?.trim().replace(/^#/, ``) ?? ``;
  return /^[0-9a-fA-F]{6}$/.test(t) ? `#${t}` : null;
}
function Se(e, t) {
  let n = new Map(),
    r = new Map(),
    i = new Map(e.map((e) => [z(e), e]));
  for (let e of i.values()) {
    let i = t === `all` || e.state === t;
    if (e.author !== null) {
      let t = R(e.author.login);
      if (t !== null) {
        let r = n.get(t);
        n.set(t, {
          actor: r?.actor ?? e.author,
          count: (r?.count ?? 0) + Number(i),
          mergedCount: (r?.mergedCount ?? 0) + Number(e.state === `merged`),
        });
      }
    }
    if (i)
      for (let t of e.labels) {
        let e = R(t.name);
        if (e === null) continue;
        let n = r.get(e);
        r.set(e, {
          ...t,
          name: n?.name ?? t.name,
          color: n?.color ?? t.color,
          count: (n?.count ?? 0) + 1,
        });
      }
  }
  return {
    authors: [...n.values()]
      .filter((e) => e.count > 0)
      .toSorted(
        (e, t) =>
          t.mergedCount - e.mergedCount ||
          t.count - e.count ||
          e.actor.login.localeCompare(t.actor.login),
      ),
    labels: [...r.values()].toSorted((e, t) => t.count - e.count || e.name.localeCompare(t.name)),
  };
}
var Ce = 15;
function we(e, t, n) {
  let r = R(n),
    i = e.filter(
      (e) =>
        r === null ||
        e.actor.login.toLowerCase().includes(r) ||
        e.actor.name?.toLowerCase().includes(r),
    ),
    a = new Map(e.map((e) => [R(e.actor.login), e])),
    o = new Set(i.map((e) => R(e.actor.login))),
    s = [];
  for (let e of t) {
    let t = R(e.login);
    o.has(t) || (o.add(t), s.push(a.get(t) ?? { actor: e, count: 0, mergedCount: 0 }));
  }
  return [...i.slice(0, Ce), ...s, ...i.slice(Ce)];
}
function Te(e, t, n) {
  if (n === void 0) return;
  let r = R(n);
  return (
    e.find((e) => R(e.actor.login) === r) ?? {
      actor: t.find((e) => R(e.login) === r) ?? { login: n, name: null, avatarUrl: null },
      count: 0,
      mergedCount: 0,
    }
  );
}
function Ee(e, t, n) {
  let r = R(n),
    i = e.filter((e) => r === null || e.name.toLowerCase().includes(r)),
    a = new Map(e.map((e) => [R(e.name), e])),
    o = new Set(i.map((e) => R(e.name))),
    s = [];
  for (let e of t) {
    let t = R(e.name);
    o.has(t) || (o.add(t), s.push(a.get(t) ?? { ...e, count: 0 }));
  }
  return [...i, ...s];
}
function De(e, t) {
  return R(t[ye(e)] ?? t[e.host]);
}
function Oe(e, t) {
  let n = De(e, t);
  return n !== null && R(e.author?.login) === n;
}
function ke(e, t) {
  let n = t.trim().toLowerCase();
  return (
    n.length === 0 ||
    `#${e.number} ${e.title} ${e.repository} ${e.headBranch} ${e.author?.login ?? ``}`
      .toLowerCase()
      .includes(n)
  );
}
function Ae(e, t, n) {
  return n === `reviewing`
    ? e.filter((e) => e.viewerReviewRequested)
    : n === `authored`
      ? e.filter((e) => Oe(e, t))
      : e;
}
function je(e, t) {
  return e.filter(
    (e) =>
      (t.state === `all` || e.state === t.state) &&
      (t.projectId === void 0 || e.projectId === t.projectId) &&
      (t.host === void 0 || e.host === t.host),
  );
}
function Me(e, t, n) {
  let r = new Set(e.labels.map((e) => e.name.trim().toLowerCase())),
    i = (e) => r.has(e.trim().toLowerCase());
  return (
    (t.draft === void 0 || e.isDraft === (t.draft === `only`)) &&
    (t.review === void 0 ||
      (t.review === `none` ? e.reviewDecision === void 0 : e.reviewDecision === t.review)) &&
    (t.labels === void 0 || t.labels.every((e) => e.some(i))) &&
    (t.excludedLabels === void 0 || !t.excludedLabels.some(i)) &&
    (t.author === void 0 || e.author?.login.toLowerCase() === v(t.author, n).toLowerCase())
  );
}
function Ne(e, t) {
  let n = { reviewRequested: [], authored: [], others: [] };
  for (let r of e)
    Oe(r, t)
      ? n.authored.push(r)
      : r.viewerReviewRequested
        ? n.reviewRequested.push(r)
        : n.others.push(r);
  return [`authored`, `reviewRequested`, `others`]
    .filter((e) => n[e].length > 0)
    .map((e) => ({ key: e, label: be[e], entries: n[e] }));
}
function z(e) {
  return `${e.environmentId === void 0 ? `` : `${e.environmentId}:`}${e.host}:${e.repository}#${e.number}`;
}
var Pe = 500;
function Fe(e, t, n, r) {
  let i = new Set(n.flatMap((e) => [...e.keys]));
  return new Set(
    [...t].filter((t) => {
      let n = e.get(t);
      return n !== void 0 && n.additions === 0 && n.deletions === 0 && !i.has(t) && !r.has(B(n));
    }),
  );
}
function Ie(e, t) {
  let n = new Map();
  for (let r of t) {
    let t = e.get(r);
    if (t === void 0) continue;
    let i = n.get(t.environmentId) ?? [];
    (i.push({
      key: r,
      ref: { projectId: t.projectId, repository: t.repository, number: t.number },
    }),
      n.set(t.environmentId, i));
  }
  return [...n].flatMap(([e, t]) => {
    let n = [];
    for (let r = 0; r < t.length; r += Pe) {
      let i = t.slice(r, r + Pe);
      n.push({
        environmentId: e,
        input: { refs: i.map((e) => e.ref) },
        keys: new Set(i.map((e) => e.key)),
      });
    }
    return n;
  });
}
function Le({
  entriesByKey: e,
  candidateKeys: t,
  policy: n,
  activeBatches: r,
  statsByRow: i,
  refresh: a = !1,
}) {
  let o = n === `eager` ? new Set(e.keys()) : t;
  return Ie(e, a ? o : Fe(e, o, r, i));
}
function Re({
  requestedScope: e,
  currentScope: t,
  entriesByKey: n,
  candidateKeys: r,
  statsByRow: i,
}) {
  return e.key !== t.key || e.policy !== t.policy
    ? null
    : Le({
        entriesByKey: n,
        candidateKeys: r,
        policy: e.policy,
        activeBatches: [],
        statsByRow: i,
        refresh: !0,
      });
}
function ze(e, t) {
  return e.filter((e) => {
    for (let n of e.keys) if (t.has(n)) return !0;
    return !1;
  });
}
function Be(e, t, n) {
  let r = new Map(t.map((e) => [z(e), e])),
    i = new Map(
      n.flatMap((e) => {
        let t = z(e);
        return r.has(t) ? [] : [[t, e]];
      }),
    ),
    a = [];
  for (let t of e) {
    let e = z(t);
    r.has(e) ? r.set(e, t) : i.has(e) ? i.set(e, t) : a.push(t);
  }
  let o = (e, t) => t.updatedAt.localeCompare(e.updatedAt);
  return [
    { key: `authored`, entries: [...r.values()].toSorted(o) },
    { key: `reviewRequested`, entries: [...i.values()].toSorted(o) },
    { key: `others`, entries: a },
  ]
    .filter((e) => e.entries.length > 0)
    .map((e) => ({ ...e, label: be[e.key] }));
}
function Ve(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e);
  for (let e of t) n.set(B(e), { additions: e.additions, deletions: e.deletions });
  return n;
}
var B = (e) => `${e.environmentId} ${e.projectId} ${e.number}`;
function He(e) {
  if (e.length === 0) return null;
  let t = {},
    n = [],
    r = new Map(),
    i = [],
    a = [],
    o = {},
    s = !1;
  for (let [c, l] of e) {
    for (let [e, n] of Object.entries(l.viewers)) t[`${c} ${e}`] = n;
    for (let e of l.providers) {
      let t = r.get(e.host);
      r.set(
        e.host,
        t === void 0
          ? e
          : {
              ...(t.configured ? t : e),
              projectCount: t.projectCount + e.projectCount,
              searchesOnHost: t.searchesOnHost && e.searchesOnHost,
              configured: t.configured || e.configured,
            },
      );
    }
    (i.push(...l.entries.map((e) => ({ ...e, environmentId: c }))),
      a.push(...l.errors.map((e) => ({ ...e, environmentId: c }))),
      (s ||= l.truncated),
      l.truncated && n.push(c),
      Object.keys(l.nextCursors).length > 0 && (o[c] = l.nextCursors));
  }
  return {
    viewers: t,
    providers: [...r.values()],
    entries: i.toSorted((e, t) => t.updatedAt.localeCompare(e.updatedAt)),
    errors: a,
    truncated: s,
    nextCursors: o,
    truncatedEnvironments: n,
  };
}
var V = 99,
  Ue = (e) => [...e].sort((e, t) => e.localeCompare(t)).join(`,`),
  We = (e) => `t3.pullRequests.list:${e}`,
  H = g({ ...S.fields, environmentId: ce }),
  Ge = g({ ...le.fields, environmentId: ce }),
  Ke = ae(
    g({
      scope: D,
      data: g({
        ...f.fields,
        entries: j(H),
        errors: j(Ge),
        nextCursors: m(D, f.fields.nextCursors),
        truncatedEnvironments: j(D),
      }),
      partitions: ie(g({ authored: j(H), reviewing: j(H) })),
    }),
  );
function qe(e, t) {
  try {
    let n = e?.getItem(We(t));
    if (!n) return null;
    let r = Ke(JSON.parse(n));
    return r._tag === `Some` ? r.value : null;
  } catch {
    return null;
  }
}
function Je(e, t, n) {
  try {
    e?.setItem(
      We(t),
      JSON.stringify({
        scope: n.scope,
        data: {
          ...n.data,
          entries: n.data.entries.slice(0, V),
          errors: [],
          nextCursors: {},
          truncatedEnvironments: [],
        },
        ...(n.partitions === void 0
          ? {}
          : {
              partitions: {
                authored: n.partitions.authored.slice(0, V),
                reviewing: n.partitions.reviewing.slice(0, V),
              },
            }),
      }),
    );
  } catch {}
}
function Ye(e, t, n) {
  return e === void 0 || !n || t.some((t) => t.id === e) ? e : void 0;
}
function Xe(e, t, n) {
  if (n === void 0) return;
  let r = e.filter((e) => e.id === n);
  return t == null ? (r.length === 1 ? r[0] : void 0) : r.find((e) => e.environmentId === t);
}
function Ze(e, t, n, r, i) {
  if (n !== void 0) return e.filter((e) => e === n.environmentId);
  if (r === void 0 || !i) return e;
  let a = new Set(t.filter((e) => e.id === r).map((e) => e.environmentId));
  return e.filter((e) => a.has(e));
}
function Qe(e, t, n) {
  return e === void 0 ? n : t.has(e) ? e : n;
}
function U(e, t) {
  let n = t.trim().toLowerCase();
  if (n.length === 0) return 0;
  let r = n.replace(/^#/u, ``);
  if (/^\d+$/u.test(r)) return String(e.number) === r ? 100 : 0;
  let i = e.title.toLowerCase(),
    a = n.split(/\s+/u).filter((e) => e.length > 0);
  return i === n
    ? 90
    : i.includes(n)
      ? 80
      : a.length > 1 && a.every((e) => i.includes(e))
        ? 70
        : e.headBranch.toLowerCase().includes(n)
          ? 60
          : (e.author?.login ?? ``).toLowerCase().includes(n)
            ? 50
            : e.repository.toLowerCase().includes(n)
              ? 40
              : a.some((e) => i.includes(e))
                ? 30
                : 10;
}
function $e(e, t) {
  return t.trim().length === 0
    ? e
    : e.toSorted((e, n) => {
        let r = U(n, t) - U(e, t);
        return r === 0 ? n.updatedAt.localeCompare(e.updatedAt) : r;
      });
}
function et(e, t = (e) => e.additions + e.deletions > 0) {
  let n = (e) =>
    e.mergeability === `conflicting`
      ? 4
      : e.state === `open`
        ? e.isDraft
          ? 2
          : e.checksState === `passing` && e.reviewDecision === `approved`
            ? 0
            : e.checksState === `passing`
              ? 1
              : 2
        : 3;
  return e.toSorted((e, r) => {
    let i = n(e) - n(r);
    if (i !== 0) return i;
    let a = Number(t(r)) - Number(t(e)),
      o = e.additions + e.deletions - (r.additions + r.deletions);
    return a || o || r.updatedAt.localeCompare(e.updatedAt);
  });
}
function tt(e, t) {
  let n = (e) => F(e.updatedAt);
  return e.toSorted((e, r) => {
    let i = t(e) - t(r);
    if (i !== 0) return i;
    let a = n(e),
      o = n(r),
      s = Number(a === null) - Number(o === null);
    return s === 0 ? (a === null || o === null ? 0 : o - a) : s;
  });
}
function nt(e) {
  return tt(e, (e) =>
    e.state === `open`
      ? e.mergeability === `conflicting`
        ? 0
        : e.reviewDecision === `changes-requested`
          ? 1
          : e.checksState === `failing`
            ? 2
            : e.isDraft
              ? 3
              : e.checksState === `passing` && e.reviewDecision === `approved`
                ? 5
                : 4
      : 6,
  );
}
function rt(e) {
  return tt(e, (e) => (e.state === `open` ? 0 : 1));
}
function it(e, t, n, r = (e) => e.additions + e.deletions > 0, i = `all`) {
  let a = (t) => e.map((e) => ({ ...e, entries: t(e.entries) }));
  if (t === `ready`) return n.trim().length === 0 ? a((e) => et(e, r)) : e;
  if (t === `blocked`) {
    if (n.trim().length > 0) return e;
    let t = (e) => (e === `others` ? i : e === `authored` ? `authored` : `reviewing`);
    return e.map((e) => {
      let n = t(e.key);
      if (n === `all`) return e;
      let r = n === `authored` ? nt : rt;
      return { ...e, entries: r(e.entries) };
    });
  }
  if (t === `updated`) return e;
  let o = (e) => F(e.updatedAt) ?? F(e.createdAt) ?? 0;
  return a((e) =>
    e.toSorted((e, n) => {
      if (t === `newest` || t === `oldest`) {
        let r = F(e.createdAt),
          i = F(n.createdAt),
          a = Number(i !== null) - Number(r !== null),
          s = (r ?? 0) - (i ?? 0);
        return a || (t === `newest` ? -s : s) || o(n) - o(e);
      }
      let i = Number(r(n)) - Number(r(e)),
        a = e.additions + e.deletions - (n.additions + n.deletions);
      return i || (t === `largest` ? -a : a) || o(n) - o(e);
    }),
  );
}
function at(e, t) {
  if (e.additions !== 0 || e.deletions !== 0) return e;
  let n = t.get(B(e));
  return n === void 0 ? e : { ...e, ...n };
}
function ot(e, t, n, r) {
  let i = { updatedAt: n.toISOString(), token: r, at: n.getTime() };
  switch (t) {
    case `close`:
      return { state: `closed`, ...i };
    case `reopen`:
      return { state: `open`, ...i };
    case `merge`:
      return { state: `merged`, ...i };
    case `draft`:
      return { state: e.state, isDraft: !0, ...i };
    case `ready`:
      return { state: e.state, isDraft: !1, ...i };
    default:
      return null;
  }
}
function st(e, t, n, r) {
  if (t.size === 0 && r === `all`) return e;
  let i = [];
  for (let a of e) {
    let e = t.get(n(a));
    (r === `all` || (e?.state ?? a.state) === r) && i.push(e === void 0 ? a : { ...a, ...e });
  }
  return t.size === 0 && i.length === e.length ? e : i;
}
function ct(e, t, n) {
  if (e.length === 0) return t;
  let r = new Map(e.map((e) => [n(e), e])),
    i = 0,
    a = t.map((e) => {
      let t = r.get(n(e));
      return t !== void 0 && JSON.stringify(t) === JSON.stringify(e) ? ((i += 1), t) : e;
    });
  return i === t.length && e.length === t.length && e.every((e, r) => n(e) === n(t[r])) ? e : a;
}
var lt = 6e4;
function ut(e, t, n, r) {
  if (e.size === 0) return e;
  let i = new Map(t.map((e) => [n(e), e])),
    a = new Map();
  for (let [t, n] of e) {
    let e = i.get(t);
    if (e === void 0) {
      a.set(t, n);
      continue;
    }
    let o = e.state === n.state && (n.isDraft === void 0 || e.isDraft === n.isDraft),
      s = r - n.at > lt;
    !o && !s && a.set(t, n);
  }
  return a.size === e.size ? e : a;
}
function dt(e) {
  let t = new Map(
      e.flatMap((e) => (e.actions === void 0 ? [] : [[e.host.toLowerCase(), new Set(e.actions)]])),
    ),
    n = new Set();
  return (e) =>
    t.get(e.host.toLowerCase()) ?? w.find(e.provider)?.changeRequestActionsWhenUnreported ?? n;
}
function ft(e, t) {
  return (
    e.state === `merged`
      ? []
      : e.state === `closed`
        ? [`reopen`]
        : e.isDraft
          ? [`close`, `ready`]
          : [`close`, `merge`]
  ).filter((n) =>
    n === `merge` && e.provider === `gerrit` && e.mergeability !== `mergeable` ? !1 : t.has(n),
  );
}
function pt(e) {
  let t = new Map();
  for (let n of e) {
    let e = `${n.environmentId} ${n.host.toLowerCase()} ${w.find(n.provider)?.changeRequestListScope === `host` ? `` : n.repository.toLowerCase()}`;
    t.set(e, (t.get(e) ?? 0) + 1);
  }
  return Math.max(0, ...t.values());
}
function mt(e, t) {
  let n = t.repository.toLowerCase(),
    r = t.host?.toLowerCase(),
    i = e.filter((e) => {
      if (t.selectedEnvironmentId != null && e.environmentId !== t.selectedEnvironmentId) return !1;
      let i = e.repositoryIdentity;
      return !i || w.repositorySelector(i)?.toLowerCase() !== n
        ? !1
        : r === void 0 || w.changeRequestHost(i, i.provider) === r;
    });
  return Xe(i, t.scopedEnvironmentId, t.scopedProjectId) ?? i[0];
}
var W = e(t(), 1),
  G = e(r(), 1);
function ht(e) {
  let t = (0, I.c)(15),
    { label: n, size: r, className: i, children: a } = e,
    o = r === void 0 ? `sm` : r,
    s;
  t[0] === n.color ? (s = t[1]) : ((s = xe(n.color)), (t[0] = n.color), (t[1] = s));
  let c = s,
    l = c ? `label` : `secondary`,
    u;
  t[2] === i
    ? (u = t[3])
    : ((u = M(`min-w-0 max-w-40 shrink justify-start`, i)), (t[2] = i), (t[3] = u));
  let d;
  t[4] === c ? (d = t[5]) : ((d = c ? { style: { "--label": c } } : {}), (t[4] = c), (t[5] = d));
  let f;
  t[6] === n.name
    ? (f = t[7])
    : ((f = (0, G.jsx)(`span`, { className: `truncate`, children: n.name })),
      (t[6] = n.name),
      (t[7] = f));
  let p;
  return (
    t[8] !== a || t[9] !== o || t[10] !== l || t[11] !== u || t[12] !== d || t[13] !== f
      ? ((p = (0, G.jsxs)(ne, { size: o, variant: l, className: u, ...d, children: [f, a] })),
        (t[8] = a),
        (t[9] = o),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function gt(e) {
  switch (e) {
    case `approved`:
      return { Icon: l, label: `Approved`, toneClassName: K.success.toneClassName };
    case `changes-requested`:
      return {
        Icon: s,
        label: `Changes requested`,
        toneClassName: `text-amber-600/90 dark:text-amber-400/80`,
      };
    case `review-required`:
      return { Icon: u, label: `Awaiting review`, toneClassName: `text-muted-foreground/60` };
  }
}
function _t(e) {
  let t = (0, I.c)(26),
    { decision: n } = e,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === n
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]))
    : ((o = gt(n)),
      (a = p),
      (i = O),
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, G.jsx)(`span`, { className: `inline-flex shrink-0` })), (t[8] = l))
        : (l = t[8]),
      (r = o.Icon),
      (s = !0),
      (c = M(`size-3.5`, o.toneClassName)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  let u;
  t[9] !== r || t[10] !== s || t[11] !== c
    ? ((u = (0, G.jsx)(r, { "aria-hidden": s, className: c })),
      (t[9] = r),
      (t[10] = s),
      (t[11] = c),
      (t[12] = u))
    : (u = t[12]);
  let d;
  t[13] === o.label
    ? (d = t[14])
    : ((d = (0, G.jsx)(`span`, { className: `sr-only`, children: o.label })),
      (t[13] = o.label),
      (t[14] = d));
  let f;
  t[15] !== i || t[16] !== l || t[17] !== u || t[18] !== d
    ? ((f = (0, G.jsxs)(i, { render: l, children: [u, d] })),
      (t[15] = i),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f))
    : (f = t[19]);
  let m;
  t[20] === o.label
    ? (m = t[21])
    : ((m = (0, G.jsx)(E, { children: o.label })), (t[20] = o.label), (t[21] = m));
  let h;
  return (
    t[22] !== a || t[23] !== f || t[24] !== m
      ? ((h = (0, G.jsxs)(a, { children: [f, m] })),
        (t[22] = a),
        (t[23] = f),
        (t[24] = m),
        (t[25] = h))
      : (h = t[25]),
    h
  );
}
function vt(e) {
  let t = e.state === `open` && e.isDraft ? `draft` : e.state;
  return ge[t];
}
function yt(e) {
  return e.state !== `open` || e.isDraft || e.mergeability !== `conflicting`
    ? null
    : {
        label: e.baseBranch ? `Conflicts with ${e.baseBranch}` : `Has conflicts`,
        toneClassName: `text-destructive`,
        Icon: he.conflicting,
      };
}
function bt(e) {
  let t = (0, I.c)(27),
    { state: n, isDraft: r, className: i } = e,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  t[0] !== i || t[1] !== r || t[2] !== n
    ? ((c = vt({ state: n, isDraft: r })),
      (s = p),
      (o = O),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((f = (0, G.jsx)(`span`, { className: `inline-flex shrink-0` })), (t[11] = f))
        : (f = t[11]),
      (a = c.Icon),
      (l = `img`),
      (u = c.label),
      (d = M(`size-4 shrink-0`, c.toneClassName, i)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f))
    : ((a = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]));
  let m;
  t[12] !== a || t[13] !== l || t[14] !== u || t[15] !== d
    ? ((m = (0, G.jsx)(a, { role: l, "aria-label": u, className: d })),
      (t[12] = a),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== o || t[18] !== f || t[19] !== m
    ? ((h = (0, G.jsx)(o, { render: f, children: m })),
      (t[17] = o),
      (t[18] = f),
      (t[19] = m),
      (t[20] = h))
    : (h = t[20]);
  let g;
  t[21] === c.label
    ? (g = t[22])
    : ((g = (0, G.jsx)(E, { children: c.label })), (t[21] = c.label), (t[22] = g));
  let _;
  return (
    t[23] !== s || t[24] !== h || t[25] !== g
      ? ((_ = (0, G.jsxs)(s, { children: [h, g] })),
        (t[23] = s),
        (t[24] = h),
        (t[25] = g),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function xt(e) {
  let t = (0, I.c)(30),
    { state: n, isDraft: r, mergeability: i, baseBranch: a, className: o } = e,
    s,
    c,
    l,
    u,
    d,
    f,
    m,
    h,
    g;
  if (t[0] !== a || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== n) {
    g = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (
        ((u = yt({
          state: n,
          isDraft: r,
          ...(i === void 0 ? {} : { mergeability: i }),
          ...(a === void 0 ? {} : { baseBranch: a }),
        })),
        u === null)
      ) {
        g = null;
        break bb0;
      }
      ((l = p),
        (c = O),
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((h = (0, G.jsx)(`span`, { className: `inline-flex shrink-0` })), (t[14] = h))
          : (h = t[14]),
        (s = u.Icon),
        (d = `img`),
        (f = u.label),
        (m = M(`size-4 shrink-0`, u.toneClassName, o)));
    }
    ((t[0] = a),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = n),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g));
  } else
    ((s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]),
      (m = t[11]),
      (h = t[12]),
      (g = t[13]));
  if (g !== Symbol.for(`react.early_return_sentinel`)) return g;
  let _;
  t[15] !== s || t[16] !== d || t[17] !== f || t[18] !== m
    ? ((_ = (0, G.jsx)(s, { role: d, "aria-label": f, className: m })),
      (t[15] = s),
      (t[16] = d),
      (t[17] = f),
      (t[18] = m),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  t[20] !== c || t[21] !== h || t[22] !== _
    ? ((v = (0, G.jsx)(c, { render: h, children: _ })),
      (t[20] = c),
      (t[21] = h),
      (t[22] = _),
      (t[23] = v))
    : (v = t[23]);
  let y;
  t[24] === u.label
    ? (y = t[25])
    : ((y = (0, G.jsx)(E, { children: u.label })), (t[24] = u.label), (t[25] = y));
  let b;
  return (
    t[26] !== l || t[27] !== v || t[28] !== y
      ? ((b = (0, G.jsxs)(l, { children: [v, y] })),
        (t[26] = l),
        (t[27] = v),
        (t[28] = y),
        (t[29] = b))
      : (b = t[29]),
    b
  );
}
var K = {
  pending: { label: `Running`, Icon: oe, toneClassName: `text-amber-500` },
  "action-required": {
    label: `Awaiting action`,
    Icon: a,
    toneClassName: `text-amber-600 dark:text-amber-400/90`,
  },
  success: { label: `Passed`, Icon: i, toneClassName: `text-emerald-600 dark:text-emerald-300/90` },
  failure: { label: `Failed`, Icon: d, toneClassName: `text-destructive` },
  cancelled: { label: `Cancelled`, Icon: d, toneClassName: `text-destructive` },
  skipped: { label: `Skipped`, Icon: o, toneClassName: `text-muted-foreground/70` },
  neutral: { label: `Neutral`, Icon: c, toneClassName: `text-muted-foreground/70` },
};
function St(e) {
  return (
    e.status === `action-required` && e.url !== null && /\/actions\/runs\/\d+(?:\/|$)/u.test(e.url)
  );
}
function Ct(e) {
  return St(e) ? `Awaiting approval` : K[e.status].label;
}
function wt(e) {
  let t = (0, I.c)(5),
    { status: n } = e,
    r = K[n],
    i = r.Icon,
    a;
  t[0] === r.toneClassName
    ? (a = t[1])
    : ((a = M(`size-3.5 shrink-0`, r.toneClassName)), (t[0] = r.toneClassName), (t[1] = a));
  let o;
  return (
    t[2] !== r.Icon || t[3] !== a
      ? ((o = (0, G.jsx)(i, { "aria-hidden": !0, className: a })),
        (t[2] = r.Icon),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Tt = {
  passing: { label: `All checks have passed`, Icon: i, toneClassName: K.success.toneClassName },
  failing: { label: `Some checks were not successful`, Icon: d, toneClassName: `text-destructive` },
  pending: {
    label: `Some checks haven't completed yet`,
    Icon: a,
    toneClassName: `text-amber-600 dark:text-amber-400/90`,
  },
};
function Et(e) {
  return Tt[e];
}
function q(e) {
  if (e.length === 0) return null;
  let t = new Set(e.map((e) => e.status));
  return t.has(`failure`) || t.has(`cancelled`)
    ? `failing`
    : t.has(`pending`) || t.has(`action-required`)
      ? `pending`
      : t.has(`success`)
        ? `passing`
        : null;
}
var J = {
  approved: {
    label: `Approved`,
    Icon: i,
    toneClassName: `text-emerald-600 dark:text-emerald-300/90`,
    ringClassName: `ring-2 ring-emerald-500 dark:ring-emerald-400`,
    staleRingClassName: `ring-2 ring-[color-mix(in_srgb,var(--color-emerald-500)_35%,var(--background))] dark:ring-[color-mix(in_srgb,var(--color-emerald-400)_35%,var(--background))]`,
    badgeVariant: `success`,
  },
  "changes-requested": {
    label: `Changes requested`,
    Icon: d,
    toneClassName: `text-destructive`,
    ringClassName: `ring-2 ring-destructive`,
    staleRingClassName: `ring-2 ring-[color-mix(in_srgb,var(--destructive)_35%,var(--background))]`,
    badgeVariant: `error`,
  },
  dismissed: {
    label: `Review dismissed`,
    Icon: c,
    toneClassName: `text-muted-foreground/70`,
    ringClassName: `ring-2 ring-muted-foreground/60`,
    staleRingClassName: `ring-2 ring-[color-mix(in_srgb,var(--contrast-muted-foreground)_30%,var(--background))]`,
    badgeVariant: `outline`,
  },
};
function Dt(e) {
  return J[e].toneClassName;
}
function Ot(e, t = !1) {
  let n = J[e];
  return t ? n.staleRingClassName : n.ringClassName;
}
function kt(e) {
  return `${J[e].label} earlier changes`;
}
function At(e) {
  let t = (0, I.c)(6),
    { outcome: n, className: r } = e,
    i = J[n],
    a = i.Icon,
    o;
  t[0] !== r || t[1] !== i.toneClassName
    ? ((o = M(`size-3.5 shrink-0`, i.toneClassName, r)),
      (t[0] = r),
      (t[1] = i.toneClassName),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== i.Icon || t[4] !== o
      ? ((s = (0, G.jsx)(a, { "aria-hidden": !0, className: o })),
        (t[3] = i.Icon),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function jt(e) {
  return J[e].label;
}
function Mt(e) {
  let t = (0, I.c)(11),
    { outcome: n, className: r } = e,
    i = J[n],
    a;
  t[0] === i.Icon
    ? (a = t[1])
    : ((a = (0, G.jsx)(i.Icon, { "aria-hidden": !0, className: `size-3 self-center` })),
      (t[0] = i.Icon),
      (t[1] = a));
  let o;
  t[2] === i.label
    ? (o = t[3])
    : ((o = (0, G.jsx)(`span`, { children: i.label })), (t[2] = i.label), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, G.jsxs)(`span`, {
        className: `inline-flex items-baseline gap-1`,
        children: [a, o],
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== i.badgeVariant || t[9] !== s
      ? ((c = (0, G.jsx)(ne, { size: `sm`, variant: i.badgeVariant, className: r, children: s })),
        (t[7] = r),
        (t[8] = i.badgeVariant),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Nt(e) {
  let t = (0, I.c)(5),
    { actor: n, className: r } = e,
    i = n?.login ?? `ghost`,
    a = n?.avatarUrl ?? null,
    [o, s] = (0, W.useState)(null),
    c;
  return (
    t[0] !== a || t[1] !== r || t[2] !== o || t[3] !== i
      ? ((c =
          a === null || o === a
            ? (0, G.jsx)(`span`, {
                "aria-hidden": !0,
                className: M(
                  `flex size-4 shrink-0 items-center justify-center rounded-full bg-muted text-3xs font-medium text-muted-foreground`,
                  r,
                ),
                children: i.slice(0, 1).toUpperCase(),
              })
            : (0, G.jsx)(`img`, {
                "aria-hidden": !0,
                alt: ``,
                src: a,
                loading: `lazy`,
                className: M(`size-4 shrink-0 rounded-full bg-muted object-cover`, r),
                onError: () => s(a),
              })),
        (t[0] = a),
        (t[1] = r),
        (t[2] = o),
        (t[3] = i),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function Pt(e) {
  let t = (0, I.c)(29),
    { actor: n, className: r, variant: i, tooltip: a, profileUrl: o } = e,
    s = i === void 0 ? `label` : i,
    c = a === void 0 || a,
    l = n?.login ?? `ghost`,
    u = s === `label` && `gap-1.5`,
    d;
  t[0] === u ? (d = t[1]) : ((d = M(`flex min-w-0 items-baseline`, u)), (t[0] = u), (t[1] = d));
  let f;
  t[2] === n
    ? (f = t[3])
    : ((f = (0, G.jsx)(Nt, { actor: n, className: `self-center` })), (t[2] = n), (t[3] = f));
  let m = s === `label` ? `truncate font-medium text-foreground` : `sr-only`,
    h;
  t[4] !== l || t[5] !== m
    ? ((h = (0, G.jsx)(`span`, { className: m, children: l })), (t[4] = l), (t[5] = m), (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] !== d || t[8] !== f || t[9] !== h
    ? ((g = (0, G.jsxs)(`span`, { className: d, children: [f, h] })),
      (t[7] = d),
      (t[8] = f),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _ = g,
    v;
  t[11] === r ? (v = t[12]) : ((v = M(`flex min-w-0 shrink`, r)), (t[11] = r), (t[12] = v));
  let y = v;
  if (!c) {
    let e;
    return (
      t[13] !== _ || t[14] !== y
        ? ((e = (0, G.jsx)(`span`, { className: y, children: _ })),
          (t[13] = _),
          (t[14] = y),
          (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let b;
  t[16] !== l || t[17] !== y || t[18] !== o
    ? ((b = o
        ? (0, G.jsx)(ee, {
            className: y,
            render: (0, G.jsx)(`a`, {
              href: o,
              target: `_blank`,
              rel: `noopener noreferrer`,
              "aria-label": `Open ${l}'s profile`,
            }),
          })
        : (0, G.jsx)(`span`, { className: y })),
      (t[16] = l),
      (t[17] = y),
      (t[18] = o),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== _ || t[21] !== b
    ? ((x = (0, G.jsx)(O, { render: b, children: _ })), (t[20] = _), (t[21] = b), (t[22] = x))
    : (x = t[22]);
  let S = n?.name && n.name !== l ? `${n.name} (@${l})` : l,
    C = o ? ` · Open profile` : ``,
    w;
  t[23] !== S || t[24] !== C
    ? ((w = (0, G.jsxs)(E, { side: `top`, children: [S, C] })),
      (t[23] = S),
      (t[24] = C),
      (t[25] = w))
    : (w = t[25]);
  let T;
  return (
    t[26] !== x || t[27] !== w
      ? ((T = (0, G.jsxs)(p, { children: [x, w] })), (t[26] = x), (t[27] = w), (t[28] = T))
      : (T = t[28]),
    T
  );
}
function Ft(e) {
  let t = (0, I.c)(14),
    { additions: n, deletions: r, className: i } = e;
  if (n === 0 && r === 0) return null;
  let a;
  t[0] === i
    ? (a = t[1])
    : ((a = M(`inline-flex items-baseline gap-1 tabular-nums`, i)), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = L(n)), (t[2] = n), (t[3] = o));
  let s;
  t[4] === o
    ? (s = t[5])
    : ((s = (0, G.jsxs)(`span`, {
        className: `text-diff-addition-foreground`,
        children: [`+`, o],
      })),
      (t[4] = o),
      (t[5] = s));
  let c;
  t[6] === r ? (c = t[7]) : ((c = L(r)), (t[6] = r), (t[7] = c));
  let l;
  t[8] === c
    ? (l = t[9])
    : ((l = (0, G.jsxs)(`span`, { className: `text-diff-deletion`, children: [`-`, c] })),
      (t[8] = c),
      (t[9] = l));
  let u;
  return (
    t[10] !== a || t[11] !== s || t[12] !== l
      ? ((u = (0, G.jsxs)(`span`, { className: a, children: [s, l] })),
        (t[10] = a),
        (t[11] = s),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function It(e) {
  return `separator:${(0, W.isValidElement)(e) ? String(e.key) : String(e)}`;
}
function Lt(e) {
  let t = (0, I.c)(9),
    { children: n, className: r } = e,
    i,
    a;
  if (t[0] !== n || t[1] !== r) {
    let e = W.Children.toArray(n);
    (t[4] === r
      ? (i = t[5])
      : ((i = M(`flex min-w-0 items-center gap-1.5`, r)), (t[4] = r), (t[5] = i)),
      (a = e.flatMap(Rt)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[6] !== i || t[7] !== a
      ? ((o = (0, G.jsx)(`span`, { className: i, children: a })),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
function Rt(e, t) {
  return t === 0
    ? e
    : [
        (0, G.jsx)(
          `span`,
          { "aria-hidden": !0, className: `shrink-0 text-muted-foreground/50`, children: `·` },
          It(e),
        ),
        e,
      ];
}
function zt(e) {
  if (e.length === 0) return `No checks reported`;
  let t = e.filter((e) => e.status === `action-required`),
    n = t.filter(St).length,
    r = t.length - n,
    i = e.filter((e) => e.status === `failure` || e.status === `cancelled`).length,
    a = e.filter((e) => e.status === `pending`).length,
    o = e.filter((e) => e.status === `success`).length;
  return i > 0
    ? `${i} of ${e.length} failing`
    : n > 0 && r > 0
      ? `${n} ${n === 1 ? `workflow` : `workflows`} and ${r} ${r === 1 ? `check` : `checks`} awaiting action`
      : n > 0
        ? `${n} ${n === 1 ? `workflow` : `workflows`} awaiting approval`
        : r > 0
          ? `${r} ${r === 1 ? `check` : `checks`} awaiting action`
          : a > 0
            ? `${a} of ${e.length} running`
            : o === e.length
              ? `All checks passed`
              : `${o} of ${e.length} passing`;
}
function Bt(e, t) {
  let n = Number(t.state === `merged`) - Number(e.state === `merged`);
  if (n !== 0) return n;
  let r = Date.parse(t.updatedAt) - Date.parse(e.updatedAt);
  return r === 0
    ? e.observedAt === void 0 && t.observedAt === void 0
      ? 0
      : (t.observedAt ?? -1 / 0) - (e.observedAt ?? -1 / 0)
    : r;
}
function Y(e, t) {
  return e === null ? t : t === null ? e : Bt(e, t) >= 0 ? t : e;
}
function Vt(e) {
  return {
    provider: e.provider,
    projectId: e.projectId,
    repository: e.repository,
    number: e.number,
    title: e.title,
    url: e.url,
    state: e.state,
    isDraft: e.isDraft,
    headBranch: e.headBranch,
    baseBranch: e.baseBranch,
    updatedAt: e.updatedAt,
    ...(e.observedAt === void 0 ? {} : { observedAt: e.observedAt }),
    author: e.author,
    ...(e.reviewDecision === void 0 ? {} : { reviewDecision: e.reviewDecision }),
    ...(e.checksState === void 0 ? {} : { checksState: e.checksState }),
    mergeability: e.mergeability,
  };
}
function X(e, t) {
  return JSON.stringify([e, t.projectId, t.repository.toLowerCase(), t.number]);
}
function Ht(e, t) {
  if (e === null) return t;
  if (t === null) return e;
  let n = Bt(e.summary, t.summary);
  return (
    n === 0 &&
      e.summary.observedAt === void 0 &&
      t.summary.observedAt === void 0 &&
      (n = t.observedAt - e.observedAt),
    n > 0
      ? {
          ...t,
          summary: {
            ...t.summary,
            isDraft: t.summary.isDraft ?? e.summary.isDraft,
            mergeability: t.summary.mergeability ?? e.summary.mergeability,
            reviewDecision:
              t.summary.reviewDecision === void 0
                ? e.summary.reviewDecision
                : t.summary.reviewDecision,
            checksState:
              t.summary.checksState === void 0 ? e.summary.checksState : t.summary.checksState,
          },
        }
      : e
  );
}
var Ut = { metadata: null, checks: null },
  Wt = x((e) => N(Ut).pipe(te(3e5), se(`web-pull-requests:observations:${e}`)));
function Gt(e, t) {
  let n = e.checks;
  return n === null ||
    (n.readAt !== void 0 && t.readAt !== void 0
      ? t.readAt >= n.readAt
      : t.observedAt >= n.observedAt)
    ? { ...e, checks: t }
    : e;
}
function Kt(e, t) {
  let n = Ht(e.metadata, t),
    r = n === e.metadata ? e : { ...e, metadata: n },
    { checksState: i } = t.summary;
  return i === void 0
    ? r
    : Gt(r, { checksState: i, readAt: t.summary.observedAt, observedAt: t.observedAt });
}
function qt(e) {
  let { metadata: t, checks: n } = e;
  return t === null ? null : n === null ? t.summary : { ...t.summary, checksState: n.checksState };
}
function Jt(e, t, n) {
  e.modify(Wt(t), (e) => {
    let t = n(e);
    return t === e ? [!1, e] : [!0, t];
  });
}
function Z(e, t, n, r) {
  Jt(e, t, (e) => Kt(e, { summary: n, observedAt: r }));
}
function Yt() {
  return typeof window > `u` ? void 0 : window.localStorage;
}
var Q = fe(P, {
    list: ({ environmentId: e }, t, n) =>
      T(A, (r) => {
        for (let i of t.entries) Z(n, X(e, i), Vt(i), r);
      }),
    detail: ({ environmentId: e, input: t }, n, r) =>
      T(A, (i) => {
        (t.allowStale === !1 && _e(Yt(), e, t, n),
          Z(r, X(e, t), { ...n, checksState: q(n.checks) }, i));
      }),
    checks: ({ environmentId: e, input: t }, n, r) =>
      T(A, (i) => {
        n !== null &&
          Jt(r, X(e, t), (e) =>
            Gt(e, { checksState: q(n.checks), readAt: n.observedAt, observedAt: i }),
          );
      }),
  }),
  Xt = de(P, Q.refreshes, ({ environmentId: e, input: t }, n, r) =>
    T(A, (i) => Z(r, X(e, t), n, i)),
  );
function Zt(e, t) {
  let n = e.snapshot?.updatedAt;
  return e.snapshot === null || n == null
    ? null
    : {
        ...e.snapshot,
        provider: (w.findByChangeRequestUrl(e.url) ?? w.get(void 0)).kind,
        projectId: t,
        repository: e.repository,
        number: e.number,
        url: e.url,
        updatedAt: n,
      };
}
function Qt(e, t) {
  return t.host === void 0 ? `` : `${e}:${C({ ...t, host: t.host })}`;
}
var $t = N((e) => {
    let t = new Map();
    for (let n of e(ue.threadShellsAtom))
      for (let e of y(n.pullRequests)) {
        let r = Zt(e, n.projectId);
        if (r === null) continue;
        let i = Qt(n.environmentId, e);
        t.set(i, Y(t.get(i) ?? null, r) ?? r);
      }
    return t;
  }),
  en = x((e) =>
    N((t) => t($t).get(e) ?? null).pipe(
      b((e, t) => JSON.stringify(e) === JSON.stringify(t)),
      te(3e5),
    ),
  );
function tn(e, t) {
  let n = (0, I.c)(10),
    r,
    i;
  if (n[0] !== e || n[1] !== t) {
    let a = e === null || t === null ? `none` : X(e, t);
    ((r = k), (i = Wt(a)), (n[0] = e), (n[1] = t), (n[2] = r), (n[3] = i));
  } else ((r = n[2]), (i = n[3]));
  let a = r(i),
    o;
  n[4] !== e || n[5] !== t
    ? ((o = en(e === null || t === null ? `` : Qt(e, t))), (n[4] = e), (n[5] = t), (n[6] = o))
    : (o = n[6]);
  let s = k(o),
    c;
  return (
    n[7] !== a || n[8] !== s ? ((c = Y(qt(a), s)), (n[7] = a), (n[8] = s), (n[9] = c)) : (c = n[9]),
    c
  );
}
var nn = pe(P, Q.refreshes);
function $(e, t) {
  let n = x((n) =>
      N((e) => {
        let r = JSON.parse(n),
          i = [],
          a = null,
          o = !1;
        for (let n of r) {
          let r = e(t(n));
          ((o ||= r.waiting), r._tag === `Failure` && a === null && (a = me(r.cause)));
          let s = _(re(r));
          s !== null && i.push([n.environmentId, s]);
        }
        return { values: i, error: a, isPending: o };
      }).pipe(se(`${e}:${n}`)),
    ),
    r = N({ values: [], error: null, isPending: !1 }).pipe(se(`${e}:empty`));
  return function (e) {
    let i = JSON.stringify(e),
      a = k(e.length === 0 ? r : n(i)),
      o = (e) => {
        let n = e ?? JSON.parse(i);
        for (let e of new Set(n.map(t))) h.refresh(e);
      };
    return { ...a, refresh: o };
  };
}
var rn = $(`web-pull-requests:list`, Q.list),
  an = $(`web-pull-requests:list-stats`, Q.listStats),
  on = $(`web-pull-requests:filter-options`, Q.filterOptions),
  sn = $(`web-pull-requests:turn-refreshes`, ({ environmentId: e }) =>
    Q.refreshes({ environmentId: e, input: {} }),
  );
function cn(e) {
  let t = (0, I.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = e.map(ln)), (t[0] = e), (t[1] = n)), sn(n).values);
}
function ln(e) {
  return { environmentId: e, input: {} };
}
function un(e) {
  let t = (0, I.c)(4),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = Q.refreshes({ environmentId: e, input: {} })), (t[0] = e), (t[1] = n));
  let r = k(n),
    i;
  return (t[2] === r ? (i = t[3]) : ((i = _(re(r))), (t[2] = r), (t[3] = i)), i);
}
function dn(e) {
  let t = (0, I.c)(7),
    n = rn(e),
    r;
  t[0] === n.values ? (r = t[1]) : ((r = He(n.values)), (t[0] = n.values), (t[1] = r));
  let i = r,
    a;
  return (
    t[2] !== i || t[3] !== n.error || t[4] !== n.isPending || t[5] !== n.refresh
      ? ((a = { data: i, error: n.error, isPending: n.isPending, refresh: n.refresh }),
        (t[2] = i),
        (t[3] = n.error),
        (t[4] = n.isPending),
        (t[5] = n.refresh),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function fn(e) {
  let t = (0, I.c)(6),
    n = an(e),
    r;
  t[0] === n.values
    ? (r = t[1])
    : ((r = n.values.length === 0 ? null : n.values.flatMap(pn)), (t[0] = n.values), (t[1] = r));
  let i = r,
    a;
  return (
    t[2] !== n.isPending || t[3] !== n.refresh || t[4] !== i
      ? ((a = { stats: i, isPending: n.isPending, refresh: n.refresh }),
        (t[2] = n.isPending),
        (t[3] = n.refresh),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function pn(e) {
  let [t, n] = e;
  return n.stats.map((e) => ({ ...e, environmentId: t }));
}
function mn(e) {
  let t = (0, I.c)(9),
    n = on(e),
    r;
  t[0] === n.values ? (r = t[1]) : ((r = n.values.flatMap(gn)), (t[0] = n.values), (t[1] = r));
  let i;
  t[2] === n.values ? (i = t[3]) : ((i = n.values.flatMap(hn)), (t[2] = n.values), (t[3] = i));
  let a;
  return (
    t[4] !== n.error || t[5] !== n.isPending || t[6] !== r || t[7] !== i
      ? ((a = { labels: r, authors: i, error: n.error, isPending: n.isPending }),
        (t[4] = n.error),
        (t[5] = n.isPending),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a))
      : (a = t[8]),
    a
  );
}
function hn(e) {
  let [, t] = e;
  return t.authors;
}
function gn(e) {
  let [, t] = e;
  return t.labels;
}
export {
  ft as $,
  vt as A,
  ke as B,
  Ct as C,
  Ot as D,
  jt as E,
  mt as F,
  B as G,
  je as H,
  Xe as I,
  Ue as J,
  z as K,
  Ne as L,
  st as M,
  Se as N,
  kt as O,
  Ae as P,
  ot as Q,
  pt as R,
  bt as S,
  Et as T,
  Be as U,
  Ve as V,
  we as W,
  Ee as X,
  dt as Y,
  xe as Z,
  ht as _,
  nn as a,
  Ze as at,
  Mt as b,
  fn as c,
  ct,
  tn as d,
  ut as dt,
  Re as et,
  Nt as f,
  it as ft,
  Ft as g,
  xt as h,
  L as ht,
  Vt as i,
  Ye as it,
  zt as j,
  Dt as k,
  un as l,
  U as lt,
  wt as m,
  Je as mt,
  Y as n,
  $e as nt,
  mn as o,
  Qe as ot,
  Pt as p,
  at as pt,
  De as q,
  Q as r,
  qe as rt,
  dn as s,
  ze as st,
  Xt as t,
  Le as tt,
  cn as u,
  Te as ut,
  Lt as v,
  q as w,
  At as x,
  _t as y,
  Me as z,
};
//# sourceMappingURL=pullRequests-CcJBfL2x.js.map
