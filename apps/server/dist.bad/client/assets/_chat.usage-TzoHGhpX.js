import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i } from "./search-BrluOr7L.js";
import { t as a } from "./circle-alert-BdjXOepq.js";
import { n as o } from "./triangle-alert-Ca4wixX0.js";
import { t as s } from "./plus-B20TfFan.js";
import { t as c } from "./sliders-horizontal-BfqZJi1k.js";
import { t as l } from "./x-Blp0Exqg.js";
import {
  $l as u,
  $n as d,
  Bn as f,
  Dc as p,
  Dr as m,
  Fy as h,
  Hy as g,
  Ic as _,
  JC as v,
  Lf as y,
  Or as b,
  Pc as x,
  Qn as S,
  Rf as C,
  U_ as w,
  Vn as T,
  Vp as E,
  Wn as D,
  Wv as O,
  Yl as k,
  _r as A,
  ab as j,
  ap as M,
  cp as N,
  db as P,
  ir as F,
  iu as I,
  jc as L,
  ky as R,
  lr as z,
  mr as B,
  nr as V,
  qf as H,
  ru as ee,
  su as U,
  t as W,
  zS as te,
  zf as G,
} from "./utils-CPoejuy5.js";
import { a as ne, c as re, o as ie, s as ae, t as oe } from "./select-CBCDohvC.js";
import { q as K, y as se } from "./useSettings-N-JG2LFZ.js";
import { c as ce, m as le } from "./server-3D32GveR.js";
import { r as ue, t as de } from "./session-0UrRHIau.js";
import { t as fe } from "./use-atom-command-DGAuqAck.js";
import { m as pe } from "./timestampFormat-BBUHLb6E.js";
import { t as q } from "./skeleton-BRqz2fzS.js";
import { t as me } from "./scroll-area-B6188Bq9.js";
import {
  a as he,
  c as ge,
  l as _e,
  n as ve,
  o as ye,
  s as be,
  u as xe,
} from "./dialog-BjeWpelT.js";
import { t as J } from "./observeResize-SVLLrLKP.js";
import { v as Se } from "./keybindings-b_9MjE1R.js";
import {
  a as Ce,
  c as we,
  d as Y,
  f as Te,
  i as Ee,
  l as X,
  n as De,
  o as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
} from "./usageFormat-CcA7exMN.js";
import { n as Ne, r as Pe, t as Fe } from "./usageShortcuts-EXgoAHb0.js";
import {
  $c as Ie,
  Bs as Le,
  L as Re,
  Mi as ze,
  as as Be,
  cl as Ve,
  es as He,
  it as Ue,
  rs as We,
  so as Ge,
  ui as Ke,
  uo as qe,
  zs as Je,
} from "./main-BZa0O6xN.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./WorkspaceBreadcrumb-CdDCBpec.js";
import { t as $e } from "./WorkspacePageContainer-D3An2RdA.js";
import { t as et } from "./usageAccess-Du6DzPyC.js";
import { n as tt, t as nt } from "./AppRouteModal-B1ND9wxC.js";
import { a as rt, i as it, o as at, r as ot } from "./UsageLimits-Bf7ZHZfP.js";
var Z = e(t(), 1),
  Q = n(),
  st = j(U);
function ct(e, t) {
  return (
    e?.sources.some((e) => e.action === `enableCursorKeychain`) === !0 &&
    t?.some((e) => e.driver === `cursor` && e.status === `ready`) === !0
  );
}
function lt(e) {
  return e.some((e) =>
    e.summary?.sources.some(
      (e) => e.fingerprint.provider === `cursor` && e.fingerprint.hostId === `cursor.com`,
    ),
  )
    ? []
    : e.filter((e) => e.needsCursorKeychainAccess);
}
var ut = new Map(),
  dt = new Map();
async function ft(e, t, n = !1, r = !1) {
  let i = dt.get(e);
  if (i !== void 0) {
    if (r) {
      try {
        await i;
      } catch {}
      return ft(e, t, !1, !0);
    }
    return n ? void 0 : await i;
  }
  let a = ut.get(e) ?? 0;
  if (n && Date.now() < a) return;
  let o = Promise.resolve()
    .then(t)
    .finally(() => {
      (dt.delete(e), ut.set(e, Date.now() + 3e5));
    });
  return (dt.set(e, o), await o);
}
async function pt({ registry: e, server: t, presentations: n, environmentIds: r, input: i }) {
  await Promise.all(
    r.map(async (r) => {
      let a = t.usageSummary({ environmentId: r, input: i }),
        o = n.presentationAtom(r),
        s = new AbortController(),
        c = () => {
          e.get(o)?.connection.phase !== `connected` && s.abort();
        },
        l = e.subscribe(o, c);
      c();
      try {
        let n = await u(
            e,
            t.refreshUsageRates,
            { environmentId: r, input: {} },
            { reportFailure: !1 },
          ),
          i = n._tag === `Failure` && st(I(n));
        if ((e.refresh(a), i || s.signal.aborted)) return;
        await k(e, a, { reportFailure: !1, signal: s.signal });
      } finally {
        l();
      }
    }),
  );
}
function mt(e, t = !1) {
  let { summary: n } = e;
  if (!e.isConnected || e.error !== null) return { phase: `inactive` };
  if (n === null) return { phase: `loading` };
  if (t) return { phase: `stale` };
  if (!e.isPending) return { phase: `ready` };
  let r = [...new Set(n.sources.flatMap((e) => (e.refreshing ? [e.fingerprint.provider] : [])))];
  return r.length > 0 ? { phase: `partway`, providers: r } : { phase: `stale` };
}
function ht(e, t) {
  return e.length === 1 ? `Updating ${t(e[0])}…` : `Updating ${e.length} providers…`;
}
function gt(e, t = !1) {
  let n = new Set(),
    r = !1;
  for (let i of e) {
    let e = mt(i, t);
    if (((e.phase === `loading` || e.phase === `stale`) && (r = !0), e.phase === `partway`))
      for (let t of e.providers) n.add(t);
  }
  return { partial: r || n.size > 0, everyProvider: r, providers: n };
}
function _t(e) {
  return e.records > 0 && e.unpricedRecords >= e.records;
}
function vt(e) {
  return [e.hostId, e.provider, e.resolvedHomePath, e.volumeId].join(` `);
}
function yt(e, t) {
  let n = e.sources.filter((e) => e.fingerprint.provider === t.fingerprint.provider);
  return e.buckets.filter(
    (e) =>
      e.provider === t.fingerprint.provider &&
      (e.sourcePath === t.fingerprint.resolvedHomePath ||
        (e.sourcePath === void 0 && n.length === 1)),
  );
}
function bt(e) {
  return JSON.stringify([e.day, e.hourStart ?? null, e.provider, e.model]);
}
function xt(e) {
  let t = new Map(),
    n = new Map(),
    r = new Map(),
    i = new Map(),
    a = new Map(),
    o = [],
    s = [...e].sort(
      (e, t) =>
        (Date.parse(t.summary.readAt) || 0) - (Date.parse(e.summary.readAt) || 0) ||
        e.environmentId.localeCompare(t.environmentId),
    );
  for (let e of [`ok`, `partial`, `failed`])
    for (let r of s)
      for (let i of r.summary.sources) {
        if (i.status !== e) continue;
        let s = vt(i.fingerprint);
        t.has(s)
          ? o.push(`${r.label}: ${i.fingerprint.resolvedHomePath}`)
          : (t.set(s, r.environmentId),
            n.set(s, { environment: r, source: i }),
            a.set(s, i.distinctSessions));
      }
  for (let e of s)
    for (let t of e.summary.sources) {
      if (t.status !== `partial`) continue;
      let o = vt(t.fingerprint),
        s = n.get(o);
      if (
        s?.source.status !== `ok` ||
        Date.parse(e.summary.readAt) <= Date.parse(s.environment.summary.readAt)
      )
        continue;
      let c = r.get(o);
      c === void 0 && ((c = new Set(yt(s.environment.summary, s.source).map(bt))), r.set(o, c));
      let l = i.get(e.environmentId) ?? new Set(),
        u = !1;
      for (let n of yt(e.summary, t)) {
        let e = bt(n);
        c.has(e) || (c.add(e), l.add(n), (u = !0));
      }
      u && (i.set(e.environmentId, l), a.set(o, Math.max(a.get(o) ?? 0, t.distinctSessions)));
    }
  return {
    ownerByFingerprint: t,
    supplementalBucketsByEnvironment: i,
    sessionsByFingerprint: a,
    duplicates: o,
  };
}
function St(e, t, n, r) {
  let i = new Set(),
    a = new Set(),
    o = new Map();
  for (let n of e.summary.sources) {
    if (n.status === `missing`) continue;
    let s = vt(n.fingerprint);
    if (t.get(s) === e.environmentId) {
      let e = n.fingerprint.provider;
      (i.add(e),
        a.add(`${e}\u0000${n.fingerprint.resolvedHomePath}`),
        o.set(e, (o.get(e) ?? 0) + (r.get(s) ?? n.distinctSessions)));
    }
  }
  return {
    buckets: e.summary.buckets.filter(
      (e) =>
        n.has(e) ||
        (e.sourcePath === void 0 ? i.has(e.provider) : a.has(`${e.provider}\u0000${e.sourcePath}`)),
    ),
    sessionsByProvider: o,
  };
}
function Ct(e) {
  return (
    e.totals.uncachedInputTokens +
    e.totals.cachedInputTokens +
    e.totals.cacheCreationTokens +
    e.totals.outputTokens
  );
}
function wt(e, t) {
  return e >= 4 && e <= t;
}
var Tt = {
  costUsd: 0,
  uncachedInputTokens: 0,
  cachedInputTokens: 0,
  cacheCreationTokens: 0,
  outputTokens: 0,
  reasoningTokens: 0,
  totalTokens: 0,
  records: 0,
  sessions: 0,
  providers: [],
  models: [],
  daily: [],
  hourly: [],
  costQuality: {
    providerReportedShare: 0,
    modelPricedShare: 0,
    unpricedShare: 0,
    cacheSavingsUsd: 0,
  },
  categoryCost: { input: 0, cacheRead: 0, cacheWrite: 0, output: 0, unsplit: 0 },
  speedCost: { standard: 0, fast: 0, ultrafast: 0, premium: 0 },
  duplicateSources: [],
  contributingEnvironments: [],
  contractMismatches: [],
};
function Et(e, t) {
  if (e.length === 0) return Tt;
  let n = [],
    r = [];
  for (let i of e)
    wt(i.summary.contractVersion, t)
      ? n.push(i)
      : r.push({
          environmentId: i.environmentId,
          direction: i.summary.contractVersion < t ? `serverBehind` : `clientBehind`,
          contractVersion: i.summary.contractVersion,
        });
  let {
      ownerByFingerprint: i,
      supplementalBucketsByEnvironment: a,
      sessionsByFingerprint: o,
      duplicates: s,
    } = xt(n),
    c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = 0,
    p = 0,
    m = 0,
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = { input: 0, cacheRead: 0, cacheWrite: 0, output: 0 },
    b = { fast: 0, ultrafast: 0, premium: 0 },
    x = new Map(),
    S = new Map(),
    C = new Map(),
    w = new Map(),
    T = [];
  for (let e of n) {
    let { buckets: t, sessionsByProvider: n } = St(e, i, a.get(e.environmentId) ?? new Set(), o);
    t.length > 0 && T.push(e.environmentId);
    for (let [e, t] of n) {
      if (((h += t), t === 0)) continue;
      let n = x.get(e) ?? { costUsd: 0, totalTokens: 0, records: 0, sessions: 0 };
      ((n.sessions += t), x.set(e, n));
    }
    for (let e of t) {
      let t = Ct(e);
      ((c += e.costUsd),
        (g += e.cacheSavingsUsd),
        (l += e.totals.uncachedInputTokens),
        (u += e.totals.cachedInputTokens),
        (d += e.totals.cacheCreationTokens),
        (f += e.totals.outputTokens),
        (p += e.totals.reasoningTokens),
        (m += e.records),
        (v += e.unpricedRecords),
        e.costSource === `providerReported` && (_ += e.records),
        e.categoryCostUsd !== void 0 &&
          ((y.input += e.categoryCostUsd.input),
          (y.cacheRead += e.categoryCostUsd.cacheRead),
          (y.cacheWrite += e.categoryCostUsd.cacheWrite),
          (y.output += e.categoryCostUsd.output)),
        (b.fast += e.fastCostUsd ?? 0),
        (b.ultrafast += e.ultrafastCostUsd ?? 0),
        (b.premium += e.speedPremiumUsd ?? 0));
      let n = x.get(e.provider) ?? { costUsd: 0, totalTokens: 0, records: 0, sessions: 0 };
      ((n.costUsd += e.costUsd),
        (n.totalTokens += t),
        (n.records += e.records),
        x.set(e.provider, n));
      let r = `${e.provider} ${e.model}`,
        i = S.get(r) ?? {
          provider: e.provider,
          costUsd: 0,
          totalTokens: 0,
          tokens: {
            uncachedInputTokens: 0,
            cachedInputTokens: 0,
            cacheCreationTokens: 0,
            outputTokens: 0,
            reasoningTokens: 0,
          },
          records: 0,
          unpricedRecords: 0,
          unpricedTokens: 0,
        };
      ((i.costUsd += e.costUsd),
        (i.totalTokens += t),
        (i.tokens = {
          uncachedInputTokens: i.tokens.uncachedInputTokens + e.totals.uncachedInputTokens,
          cachedInputTokens: i.tokens.cachedInputTokens + e.totals.cachedInputTokens,
          cacheCreationTokens: i.tokens.cacheCreationTokens + e.totals.cacheCreationTokens,
          outputTokens: i.tokens.outputTokens + e.totals.outputTokens,
          reasoningTokens: i.tokens.reasoningTokens + e.totals.reasoningTokens,
        }),
        (i.records += e.records),
        (i.unpricedRecords += e.unpricedRecords),
        e.records > 0 && (i.unpricedTokens += (t * e.unpricedRecords) / e.records),
        S.set(r, i));
      let a = C.get(e.day) ?? { costUsd: 0, totalTokens: 0, byProvider: new Map() };
      ((a.costUsd += e.costUsd), (a.totalTokens += t));
      let o = a.byProvider.get(e.provider) ?? { costUsd: 0, totalTokens: 0 };
      if (
        ((o.costUsd += e.costUsd),
        (o.totalTokens += t),
        a.byProvider.set(e.provider, o),
        C.set(e.day, a),
        e.hourStart !== void 0)
      ) {
        let n = w.get(e.hourStart) ?? {
          day: e.day,
          hourStart: e.hourStart,
          costUsd: 0,
          totalTokens: 0,
          byProvider: new Map(),
        };
        ((n.costUsd += e.costUsd), (n.totalTokens += t));
        let r = n.byProvider.get(e.provider) ?? { costUsd: 0, totalTokens: 0 };
        ((r.costUsd += e.costUsd),
          (r.totalTokens += t),
          n.byProvider.set(e.provider, r),
          w.set(e.hourStart, n));
      }
    }
  }
  let E = l + u + d + f,
    D = [...x.entries()]
      .map(([e, t]) => ({
        provider: e,
        costUsd: t.costUsd,
        totalTokens: t.totalTokens,
        records: t.records,
        sessions: t.sessions,
        costShare: c === 0 ? 0 : t.costUsd / c,
        tokenShare: E === 0 ? 0 : t.totalTokens / E,
      }))
      .sort((e, t) => t.costUsd - e.costUsd),
    O = [...S.entries()]
      .map(([e, t]) => ({
        model: e.slice(e.indexOf(` `) + 1),
        provider: t.provider,
        costUsd: t.costUsd,
        totalTokens: t.totalTokens,
        tokens: t.tokens,
        records: t.records,
        unpricedRecords: t.unpricedRecords,
        unpricedTokens: t.unpricedTokens,
        costShare: c === 0 ? 0 : t.costUsd / c,
        tokenShare: E === 0 ? 0 : t.totalTokens / E,
      }))
      .sort((e, t) => t.costUsd - e.costUsd || t.totalTokens - e.totalTokens),
    k = [...C.entries()]
      .map(([e, t]) => ({
        day: e,
        costUsd: t.costUsd,
        totalTokens: t.totalTokens,
        byProvider: t.byProvider,
      }))
      .sort((e, t) => e.day.localeCompare(t.day)),
    A = [...w.values()].sort((e, t) => e.hourStart.localeCompare(t.hourStart));
  return {
    costUsd: c,
    uncachedInputTokens: l,
    cachedInputTokens: u,
    cacheCreationTokens: d,
    outputTokens: f,
    reasoningTokens: p,
    totalTokens: E,
    records: m,
    sessions: h,
    providers: D,
    models: O,
    daily: k,
    hourly: A,
    costQuality: {
      providerReportedShare: m === 0 ? 0 : _ / m,
      unpricedShare: m === 0 ? 0 : v / m,
      modelPricedShare: m === 0 ? 0 : (m - _ - v) / m,
      cacheSavingsUsd: g,
    },
    categoryCost: {
      ...y,
      unsplit: Math.max(0, c - y.input - y.cacheRead - y.cacheWrite - y.output),
    },
    speedCost: { ...b, standard: Math.max(0, c - b.fast - b.ultrafast) },
    duplicateSources: s,
    contributingEnvironments: T,
    contractMismatches: r,
  };
}
var Dt = y((e) =>
  G((t) => {
    let n = JSON.parse(e),
      r = t(K.presentationsAtom),
      i = [];
    for (let [e, a] of r) {
      let r = a.connection.phase === `connected`,
        o = t(de.sessionStateAtom(e)),
        s = et({
          connectionPhase: a.connection.phase,
          session: v(N(o)),
          hasSessionError: o._tag === `Failure`,
        });
      if (!s.canReadDiagnostics) {
        i.push({
          environmentId: e,
          label: a.entry.target.label,
          isConnected: r,
          ...s,
          summary: null,
          needsCursorKeychainAccess: !1,
        });
        continue;
      }
      let c = t(le.usageSummary({ environmentId: e, input: n })),
        l = v(N(c));
      i.push({
        environmentId: e,
        label: a.entry.target.label,
        isPending: c.waiting,
        canReadDiagnostics: !0,
        isConnected: r,
        error: c._tag === `Failure` ? `This environment could not report usage.` : null,
        summary: l,
        needsCursorKeychainAccess: ct(l, t(le.providersValueAtom(e))),
      });
    }
    return i;
  }).pipe(H(`web-usage:window:${e}`)),
);
function Ot(e, t) {
  return Et(
    e.flatMap(({ environmentId: e, label: n, summary: r }) =>
      r === null
        ? []
        : [
            {
              environmentId: e,
              label: n,
              summary: t === void 0 ? r : { ...r, buckets: r.buckets.filter(t) },
            },
          ],
    ),
    6,
  );
}
var kt = new Set();
function At(e, t) {
  return t.size === 0
    ? e
    : e.map((e) =>
        e.summary === null
          ? e
          : {
              ...e,
              summary: {
                ...e.summary,
                buckets: e.summary.buckets.filter((e) => !t.has(e.provider)),
                sources: e.summary.sources.filter((e) => !t.has(e.fingerprint.provider)),
              },
            },
      );
}
function jt(e, t, n) {
  let r = t === null ? e : e.filter((e) => t.has(e.environmentId));
  return {
    environments: e,
    selectedEnvironmentIds: t,
    hiddenProviders: n,
    selectedEnvironments: r,
    merged: Ot(At(r, n)),
  };
}
function Mt(e, t, n) {
  let r = (0, Q.c)(37),
    i = t === void 0 ? null : t,
    a = n === void 0 ? kt : n,
    o,
    s;
  r[0] !== e.resolution ||
  r[1] !== e.sinceDay ||
  r[2] !== e.sinceTime ||
  r[3] !== e.timeZone ||
  r[4] !== e.untilDay ||
  r[5] !== e.untilTime
    ? ((s = JSON.stringify({
        sinceDay: e.sinceDay,
        untilDay: e.untilDay,
        timeZone: e.timeZone,
        resolution: e.resolution,
        sinceTime: e.sinceTime,
        untilTime: e.untilTime,
      })),
      (o = Dt(s)),
      (r[0] = e.resolution),
      (r[1] = e.sinceDay),
      (r[2] = e.sinceTime),
      (r[3] = e.timeZone),
      (r[4] = e.untilDay),
      (r[5] = e.untilTime),
      (r[6] = o),
      (r[7] = s))
    : ((o = r[6]), (s = r[7]));
  let c = L(o),
    l;
  r[8] !== c || r[9] !== a || r[10] !== i
    ? ((l = () => jt(c, i, a)), (r[8] = c), (r[9] = a), (r[10] = i), (r[11] = l))
    : (l = r[11]);
  let [u, d] = (0, Z.useState)(l),
    f = u;
  if (u.environments !== c || u.selectedEnvironmentIds !== i || u.hiddenProviders !== a) {
    let e;
    (r[12] !== c || r[13] !== a || r[14] !== i
      ? ((e = jt(c, i, a)), (r[12] = c), (r[13] = a), (r[14] = i), (r[15] = e))
      : (e = r[15]),
      (f = e),
      d(f));
  }
  let { selectedEnvironments: m, merged: h } = f,
    g;
  r[16] !== m || r[17] !== s
    ? ((g = (e) =>
        pt({
          registry: p,
          server: le,
          presentations: K,
          environmentIds: m.filter(It).map(Ft),
          input: e ?? JSON.parse(s),
        })),
      (r[16] = m),
      (r[17] = s),
      (r[18] = g))
    : (g = r[18]);
  let _ = g,
    v;
  r[19] === m ? (v = r[20]) : ((v = m.filter(Pt)), (r[19] = m), (r[20] = v));
  let y = v.length,
    b;
  r[21] === m ? (b = r[22]) : ((b = m.filter(Nt)), (r[21] = m), (r[22] = b));
  let x = b.length,
    S = y === 0 && x > 0,
    [C, w] = (0, Z.useState)(null);
  y > 0 &&
    (C?.merged !== h || C.window !== e || C.selection !== i || C.hidden !== a) &&
    w({ window: e, merged: h, selection: i, hidden: a });
  let T = C?.selection === i && C.hidden === a ? C : null,
    E;
  r[23] !== y || r[24] !== e || r[25] !== S || r[26] !== T || r[27] !== h
    ? ((E = y > 0 ? { window: e, merged: h } : (T ?? (S ? null : { window: e, merged: h }))),
      (r[23] = y),
      (r[24] = e),
      (r[25] = S),
      (r[26] = T),
      (r[27] = h),
      (r[28] = E))
    : (E = r[28]);
  let D = E,
    O = y > 0 && x > 0,
    k;
  return (
    r[29] !== c ||
    r[30] !== S ||
    r[31] !== h ||
    r[32] !== _ ||
    r[33] !== m ||
    r[34] !== D ||
    r[35] !== O
      ? ((k = {
          merged: h,
          environments: c,
          selectedEnvironments: m,
          isPending: S,
          shown: D,
          isPartial: O,
          refresh: _,
        }),
        (r[29] = c),
        (r[30] = S),
        (r[31] = h),
        (r[32] = _),
        (r[33] = m),
        (r[34] = D),
        (r[35] = O),
        (r[36] = k))
      : (k = r[36]),
    k
  );
}
function Nt(e) {
  return e.summary === null && e.error === null;
}
function Pt(e) {
  return e.summary !== null;
}
function Ft(e) {
  let { environmentId: t } = e;
  return t;
}
function It(e) {
  return e.canReadDiagnostics && ue(e.environmentId, `diagnostics:read`);
}
var $ = e(r(), 1);
function Lt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = W(`w-full caption-bottom text-xs`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`div`, {
          "data-slot": `table-container`,
          className: `relative w-full overflow-x-auto`,
          children: (0, $.jsx)(`table`, { "data-slot": `table`, className: i, ...r }),
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Rt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = W(`[&_tr]:border-b`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`thead`, { "data-slot": `table-header`, className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function zt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = W(`[&_tr:last-child]:border-0`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`tbody`, { "data-slot": `table-body`, className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Bt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = W(
        `border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`tr`, { "data-slot": `table-row`, className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Vt(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = W(
        `h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`th`, { "data-slot": `table-head`, className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Ht(e) {
  let t = (0, Q.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = W(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, $.jsx)(`td`, { "data-slot": `table-cell`, className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var Ut = [
  { key: `inputCostPerMillionTokens`, label: `Input`, optional: !1 },
  { key: `outputCostPerMillionTokens`, label: `Output`, optional: !1 },
  { key: `cacheReadCostPerMillionTokens`, label: `Cache read`, optional: !0 },
  { key: `cacheWriteCostPerMillionTokens`, label: `Cache write`, optional: !0 },
];
function Wt(e = ``, t) {
  return {
    model: e,
    inputCostPerMillionTokens: t?.inputCostPerMillionTokens.toString() ?? ``,
    outputCostPerMillionTokens: t?.outputCostPerMillionTokens.toString() ?? ``,
    cacheReadCostPerMillionTokens: t?.cacheReadCostPerMillionTokens?.toString() ?? ``,
    cacheWriteCostPerMillionTokens: t?.cacheWriteCostPerMillionTokens?.toString() ?? ``,
  };
}
function Gt(e, t) {
  if (/^\s*(?:\d*\.?\d*|(?:\d+\.?\d*|\.\d+)e[+-]?\d*)\s*$/i.test(t)) return !0;
  if (t.length >= e.length) return !1;
  let n = 0;
  for (; n < t.length && t[n] === e[n];) n++;
  return t.slice(n) === e.slice(e.length - (t.length - n));
}
function Kt(e) {
  let t = e.model.trim();
  if (t.length === 0) return null;
  let n = {};
  for (let t of Ut) {
    let r = e[t.key].trim();
    if (r === ``) {
      if (t.optional) continue;
      return null;
    }
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(r)) return null;
    let i = Number(r);
    if (!Number.isFinite(i) || i < 0) return null;
    n[t.key] = i;
  }
  return n.inputCostPerMillionTokens === void 0 || n.outputCostPerMillionTokens === void 0
    ? null
    : {
        model: t,
        price: {
          inputCostPerMillionTokens: n.inputCostPerMillionTokens,
          outputCostPerMillionTokens: n.outputCostPerMillionTokens,
          ...(n.cacheReadCostPerMillionTokens === void 0
            ? {}
            : { cacheReadCostPerMillionTokens: n.cacheReadCostPerMillionTokens }),
          ...(n.cacheWriteCostPerMillionTokens === void 0
            ? {}
            : { cacheWriteCostPerMillionTokens: n.cacheWriteCostPerMillionTokens }),
        },
      };
}
function qt(e) {
  return (
    e.isNew &&
    e.model.trim() === `` &&
    (e.alias ?? ``).trim() === `` &&
    Object.values(e.values).every((e) => e.trim() === ``)
  );
}
function Jt(e, t) {
  return e.prices && Object.hasOwn(e.prices, t) ? e.prices[t] : void 0;
}
function Yt(e, t) {
  return e.aliases && Object.hasOwn(e.aliases, t) ? e.aliases[t] : void 0;
}
function Xt(e, t) {
  if (e.some((e) => e.aliases === null)) return { value: ``, placeholder: `Unavailable` };
  let n = e.map((e) => Yt(e, t) ?? ``);
  return n.some((e) => e !== n[0])
    ? { value: ``, placeholder: `Mixed` }
    : { value: n[0] ?? ``, placeholder: `None` };
}
function Zt(e, t, n) {
  let r = Ut.find((e) => e.key === n).optional,
    i = e.map((e) => (Jt(e, t) ? Wt(t, Jt(e, t))[n] : null));
  return e.some((e) => e.prices === null)
    ? { value: ``, placeholder: `Unavailable` }
    : i.some((e) => e !== i[0])
      ? { value: ``, placeholder: `Mixed` }
      : { value: i[0] ?? ``, placeholder: i[0] === null ? `Automatic` : r ? `Input rate` : `0.00` };
}
function Qt(e, t) {
  let n = [],
    r = new Map();
  for (let i of t) {
    if (qt(i)) continue;
    let t = i.model.trim(),
      a = Yt(e, t);
    if (i.removed) {
      (Jt(e, t) && n.push({ model: t, price: null }),
        a !== void 0 && n.push({ model: t, alias: null }));
      continue;
    }
    let o = (i.alias ?? a ?? ``).trim();
    if (o !== ``) {
      t === ``
        ? r.set(i.id, `Enter a model ID.`)
        : o === t
          ? r.set(i.id, `Map to a different model.`)
          : (o !== a && n.push({ model: t, alias: o }),
            Jt(e, t) && n.push({ model: t, price: null }));
      continue;
    }
    if (
      a !== void 0 &&
      (n.push({ model: t, alias: null }),
      !Jt(e, t) && Object.values(i.values).every((e) => e.trim() === ``))
    )
      continue;
    let s = Wt(t, Jt(e, t)),
      c = { ...s, ...i.values },
      l = Kt(c);
    if (l === null) {
      let n = Ut.find((e) => !e.optional && c[e.key].trim() === ``);
      r.set(
        i.id,
        t === ``
          ? `Enter a model ID.`
          : n
            ? `${n.label} is required on ${e.label}.`
            : `Use non-negative numbers for prices.`,
      );
      continue;
    }
    let u = Wt(t, l.price);
    Ut.some((e) => s[e.key] !== u[e.key]) && n.push(l);
  }
  return { changes: n, errors: r };
}
function $t(e, t) {
  return new Map(
    e
      .filter((e) => e.unavailable === null && e.prices !== null)
      .flatMap((e) => [...Qt(e, t).errors]),
  );
}
async function en(e) {
  await Promise.all(
    e.targets.map(async (t) => {
      let n,
        r = e.changes.get(t.environmentId) ?? [],
        i = r.flatMap((e) => (`price` in e ? [[e.model, e.price]] : [])),
        a = r.flatMap((e) => (`alias` in e ? [[e.model, e.alias]] : []));
      if (t.unavailable !== null) n = { status: `failed`, error: t.unavailable };
      else if (a.length > 0 && t.aliases === null)
        n = { status: `failed`, error: `Update server to map models` };
      else
        try {
          n =
            (r.length === 0
              ? { _tag: `Success` }
              : await e.write({
                  environmentId: t.environmentId,
                  input: {
                    patch: {
                      ...(i.length > 0 ? { usagePriceOverrides: Object.fromEntries(i) } : {}),
                      ...(a.length > 0 ? { usageModelAliases: Object.fromEntries(a) } : {}),
                    },
                  },
                })
            )._tag === `Success`
              ? { status: `saved` }
              : { status: `failed`, error: `Could not save. Try again.` };
        } catch {
          n = { status: `failed`, error: `Could not save. Try again.` };
        }
      e.onResult(t.environmentId, n);
    }),
  );
}
var tn = G((e) =>
  [...e(K.presentationsAtom)].map(([t, n]) => {
    let r = e(le.settingsValueAtom(t)),
      i = e(de.sessionStateAtom(t)),
      a = v(N(i)),
      o =
        i._tag === `Failure`
          ? `denied`
          : a === null
            ? i.waiting
              ? `pending`
              : `denied`
            : w(a, `settings:write`)
              ? `granted`
              : `denied`;
    return {
      environmentId: t,
      label: n.entry.target.label,
      prices: r?.usagePriceOverrides ?? null,
      aliases:
        n.serverConfig?.environment.capabilities.usageModelAliases === !0
          ? (r?.usageModelAliases ?? null)
          : null,
      unavailable:
        n.connection.phase === `connected`
          ? r === null
            ? `Prices not loaded`
            : n.serverConfig?.environment.capabilities.usagePriceOverrides === !0
              ? o === `pending`
                ? `Checking permissions…`
                : o === `denied`
                  ? `Read-only access`
                  : null
              : `Update server to edit prices`
          : `Offline`,
    };
  }),
);
function nn(e) {
  let t = (0, Q.c)(119),
    { usage: n, initialSelectedEnvironmentIds: r, initialModel: a, onOpenChange: o } = e,
    c = L(tn),
    [u, p] = (0, Z.useState)(r),
    h;
  if (t[0] !== c || t[1] !== u) {
    let e;
    (t[3] === u
      ? (e = t[4])
      : ((e = (e) => u === null || u.has(e.environmentId)), (t[3] = u), (t[4] = e)),
      (h = c.filter(e)),
      (t[0] = c),
      (t[1] = u),
      (t[2] = h));
  } else h = t[2];
  let g = h,
    _;
  t[5] !== a || t[6] !== g
    ? ((_ = () =>
        a === void 0 ||
        g.some((e) => Object.hasOwn(e.prices ?? {}, a) || Object.hasOwn(e.aliases ?? {}, a))
          ? []
          : [{ id: `new:initial`, model: a, isNew: !0, values: {} }]),
      (t[5] = a),
      (t[6] = g),
      (t[7] = _))
    : (_ = t[7]);
  let [v, y] = (0, Z.useState)(_),
    [b, x] = (0, Z.useState)(!1),
    [C, w] = (0, Z.useState)(null),
    E = (0, Z.useRef)(null),
    O = (0, Z.useRef)(0),
    k;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = { reportFailure: !1 }), (t[8] = k))
    : (k = t[8]);
  let j = fe(le.updateSettings, k),
    M,
    N,
    P,
    I,
    R,
    V,
    H,
    ee,
    U,
    te,
    G,
    ne,
    re,
    ie,
    ae;
  if (
    t[9] !== C ||
    t[10] !== v ||
    t[11] !== c ||
    t[12] !== o ||
    t[13] !== b ||
    t[14] !== g ||
    t[15] !== u ||
    t[16] !== j ||
    t[17] !== n
  ) {
    let e = [...new Set(g.flatMap(bn))].sort(),
      r;
    t[33] === g
      ? (r = t[34])
      : ((r = (e) => g.some((t) => t.environmentId === e.environmentId)), (t[33] = g), (t[34] = r));
    let a = [...new Set([...e, ...n.filter(r).flatMap(vn)])].sort(),
      h;
    t[35] === v ? (h = t[36]) : ((h = new Set(v.filter(_n).map(gn))), (t[35] = v), (t[36] = h));
    let _ = h,
      k;
    t[37] !== C || t[38] !== _
      ? ((k = (e) => C === null || !_.has(e)), (t[37] = C), (t[38] = _), (t[39] = k))
      : (k = t[39]);
    let L = [
        ...e
          .filter(k)
          .map(
            (e) =>
              v.find((t) => t.id === `model:${e}`) ?? {
                id: `model:${e}`,
                model: e,
                isNew: !1,
                values: {},
              },
          ),
        ...v.filter(hn),
      ],
      oe = v.filter(mn);
    V = $t(g, oe);
    for (let t of oe)
      t.isNew &&
        (t.model.trim() === ``
          ? V.set(t.id, `Enter a model ID.`)
          : C === null &&
            (e.includes(t.model.trim()) ||
              v.some((e) => e.id !== t.id && e.model.trim() === t.model.trim())) &&
            V.set(t.id, `This model already has a row. Edit its prices there.`));
    H = C?.destinations.filter((e) => C.results.get(e.environmentId)?.status === `failed`) ?? [];
    let K = b || H.length > 0;
    ((ee = oe.length > 0), (I = g.length === 1 ? g[0].label : `${g.length} environments`));
    let se = u === null ? `All environments` : I,
      ce;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ce = () => {
          (y([]), w(null));
        }),
        (t[40] = ce))
      : (ce = t[40]),
      (R = ce));
    let le;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((le = (e) => {
          (p(e), w(null));
        }),
        (t[41] = le))
      : (le = t[41]);
    let de = le,
      fe;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((fe = (e) => {
          (y((t) =>
            t.some((t) => t.id === e.id) ? t.map((t) => (t.id === e.id ? e : t)) : [...t, e],
          ),
            w(null));
        }),
        (t[42] = fe))
      : (fe = t[42]);
    let pe = fe,
      q = pn,
      me;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((me = (e) => {
          !e.isNew && Object.keys(e.values).length === 0 && e.alias === void 0
            ? y((t) => t.filter((t) => t.id !== e.id))
            : pe(e);
        }),
        (t[43] = me))
      : (me = t[43]);
    let ye = me,
      J;
    t[44] === g
      ? (J = t[45])
      : ((J = (e, t, n) => {
          let r = { ...e.values, [t]: n },
            i = Zt(g, e.model, t);
          (q(e, i, n) && delete r[t], ye({ ...e, values: r }));
        }),
        (t[44] = g),
        (t[45] = J));
    let Se = J,
      Ce;
    t[46] === g
      ? (Ce = t[47])
      : ((Ce = (e, t) => {
          let { alias: n, ...r } = e,
            i = Xt(g, e.model);
          ye(q(e, i, t) ? r : { ...r, alias: t });
        }),
        (t[46] = g),
        (t[47] = Ce));
    let we = Ce;
    ((U = async (e) => {
      let t = e !== void 0 && e;
      if (b) return;
      let n = t ? H : g,
        r = t && C ? C.drafts : oe;
      if (n.length === 0 || r.length === 0) return;
      let i = n.map(
          (e) =>
            c.find((t) => t.environmentId === e.environmentId) ?? {
              ...e,
              prices: null,
              aliases: null,
              unavailable: `Environment removed`,
            },
        ),
        a = new Map(i.map((e) => [e.environmentId, Qt(e, r)]));
      (x(!0),
        w((e) => ({
          drafts: r,
          destinations: t && e ? e.destinations : i,
          results: new Map([...(t && e ? e.results : []), ...i.map(fn)]),
        })));
      let o = !1;
      (await en({
        targets: i.map((e) => ({
          ...e,
          unavailable: e.unavailable ?? [...a.get(e.environmentId).errors.values()][0] ?? null,
        })),
        changes: new Map([...a].map(dn)),
        write: async (e) => (ue(e.environmentId, `settings:write`) ? j(e) : { _tag: `Failure` }),
        onResult: (e, t) => {
          (t.status === `failed` && (o = !0),
            w((n) => (n === null ? null : { ...n, results: new Map(n.results).set(e, t) })));
        },
      }),
        x(!1),
        o || y([]));
    }),
      (P = ve),
      (ie = !0),
      t[48] !== o || t[49] !== b
        ? ((ae = (e) => {
            b || o(e);
          }),
          (t[48] = o),
          (t[49] = b),
          (t[50] = ae))
        : (ae = t[50]),
      (N = _e),
      (ne = `max-w-4xl`),
      t[51] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((re = (0, $.jsxs)(be, {
            children: [
              (0, $.jsx)(xe, { children: `Custom model prices` }),
              (0, $.jsx)(he, {
                children: `Prices and mappings apply to all past and future usage on the environments you select.`,
              }),
            ],
          })),
          (t[51] = re))
        : (re = t[51]),
      (M = ge));
    let Y;
    t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Y = (0, $.jsx)(ze, {
          id: `usage-prices-apply-label`,
          className: `shrink-0`,
          children: `Apply to`,
        })),
        (t[52] = Y))
      : (Y = t[52]);
    let Te;
    t[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Te = (0, $.jsx)(m, { variant: `outline`, size: `sm`, className: `min-w-0` })),
        (t[53] = Te))
      : (Te = t[53]);
    let Ee = b || ee,
      X;
    t[54] === se
      ? (X = t[55])
      : ((X = (0, $.jsx)(`span`, {
          id: `usage-prices-selection`,
          className: `truncate`,
          children: se,
        })),
        (t[54] = se),
        (t[55] = X));
    let De;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((De = (0, $.jsx)(i, { className: `size-3.5 shrink-0`, "aria-hidden": !0 })), (t[56] = De))
      : (De = t[56]);
    let Oe;
    t[57] !== Ee || t[58] !== X
      ? ((Oe = (0, $.jsxs)(B, {
          render: Te,
          "aria-labelledby": `usage-prices-apply-label usage-prices-selection`,
          disabled: Ee,
          children: [X, De],
        })),
        (t[57] = Ee),
        (t[58] = X),
        (t[59] = Oe))
      : (Oe = t[59]);
    let ke = u === null,
      Ae;
    t[60] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ae = (e) => de(e ? null : new Set())), (t[60] = Ae))
      : (Ae = t[60]);
    let je;
    t[61] === ke
      ? (je = t[62])
      : ((je = (0, $.jsx)(d, {
          checked: ke,
          closeOnClick: !1,
          onCheckedChange: Ae,
          children: `All environments`,
        })),
        (t[61] = ke),
        (t[62] = je));
    let Me;
    t[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Me = (0, $.jsx)(z, {})), (t[63] = Me))
      : (Me = t[63]);
    let Ne;
    if (t[64] !== c || t[65] !== g || t[66] !== u) {
      let e;
      (t[68] !== c.length || t[69] !== g || t[70] !== u
        ? ((e = (e) =>
            (0, $.jsx)(
              d,
              {
                checked: u === null || u.has(e.environmentId),
                closeOnClick: !1,
                onCheckedChange: (t) => {
                  let n = new Set(g.map(un));
                  (t ? n.add(e.environmentId) : n.delete(e.environmentId),
                    de(n.size === c.length ? null : n));
                },
                children: (0, $.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-3`,
                  children: [
                    (0, $.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e.label }),
                    e.unavailable
                      ? (0, $.jsx)(`span`, {
                          className: `text-xs text-muted-foreground`,
                          children: e.unavailable,
                        })
                      : null,
                  ],
                }),
              },
              e.environmentId,
            )),
          (t[68] = c.length),
          (t[69] = g),
          (t[70] = u),
          (t[71] = e))
        : (e = t[71]),
        (Ne = c.map(e)),
        (t[64] = c),
        (t[65] = g),
        (t[66] = u),
        (t[67] = Ne));
    } else Ne = t[67];
    let Pe;
    t[72] !== je || t[73] !== Ne
      ? ((Pe = (0, $.jsxs)(F, { align: `start`, children: [je, Me, Ne] })),
        (t[72] = je),
        (t[73] = Ne),
        (t[74] = Pe))
      : (Pe = t[74]);
    let Fe;
    t[75] !== Oe || t[76] !== Pe
      ? ((Fe = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-2`,
          children: [Y, (0, $.jsxs)(S, { children: [Oe, Pe] })],
        })),
        (t[75] = Oe),
        (t[76] = Pe),
        (t[77] = Fe))
      : (Fe = t[77]);
    let Ie;
    (t[78] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ie = (0, $.jsx)(`span`, {
          className: `text-xs text-muted-foreground`,
          children: `USD / million tokens`,
        })),
        (t[78] = Ie))
      : (Ie = t[78]),
      t[79] === Fe
        ? (te = t[80])
        : ((te = (0, $.jsxs)(`div`, {
            className: `flex flex-wrap items-center justify-between gap-2`,
            children: [Fe, Ie],
          })),
          (t[79] = Fe),
          (t[80] = te)),
      (G =
        g.length === 0
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children:
                c.length === 0
                  ? `Connect an environment to set model prices.`
                  : `Select an environment to see and change its model prices.`,
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`div`, {
                  className: `min-w-0 overflow-hidden rounded-lg border border-border`,
                  children: (0, $.jsxs)(Lt, {
                    className: `min-w-180 table-fixed`,
                    "aria-label": `Custom model prices`,
                    children: [
                      (0, $.jsxs)(`colgroup`, {
                        children: [
                          (0, $.jsx)(`col`, { className: `w-[22%]` }),
                          (0, $.jsx)(`col`, { className: `w-[18%]` }),
                          Ut.map(ln),
                          (0, $.jsx)(`col`, { className: `w-10` }),
                        ],
                      }),
                      (0, $.jsx)(Rt, {
                        children: (0, $.jsxs)(Bt, {
                          children: [
                            (0, $.jsx)(Vt, { children: `Model ID` }),
                            (0, $.jsx)(Vt, { children: `Map to` }),
                            Ut.map(cn),
                            (0, $.jsx)(Vt, {
                              children: (0, $.jsx)(m, {
                                size: `icon-xs`,
                                variant: `ghost`,
                                "aria-label": `Add model price`,
                                disabled: K,
                                onClick: () => {
                                  O.current += 1;
                                  let e = `new:${O.current}`;
                                  ((E.current = e),
                                    pe({ id: e, model: ``, isNew: !0, values: {} }));
                                },
                                children: (0, $.jsx)(s, { "aria-hidden": !0 }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(zt, {
                        children:
                          L.length === 0
                            ? (0, $.jsx)(Bt, {
                                children: (0, $.jsx)(Ht, {
                                  colSpan: 7,
                                  className: `text-center whitespace-normal`,
                                  children: (0, $.jsx)(`p`, {
                                    className: `py-6 text-muted-foreground`,
                                    children: g.some(sn)
                                      ? `Some environment prices are unavailable.`
                                      : `No custom prices or mappings. Add a row to set one.`,
                                  }),
                                }),
                              })
                            : L.map((e) => {
                                let t = Xt(g, e.model),
                                  n = (e.alias ?? t.value).trim();
                                return (0, $.jsxs)(
                                  Bt,
                                  {
                                    "data-row-id": e.id,
                                    children: [
                                      (0, $.jsxs)(Ht, {
                                        className: `whitespace-normal`,
                                        children: [
                                          e.isNew
                                            ? (0, $.jsx)(A, {
                                                size: `compact`,
                                                value: e.model,
                                                ref: (t) => {
                                                  t &&
                                                    E.current === e.id &&
                                                    (t.focus(), (E.current = null));
                                                },
                                                "aria-label": `New model ID`,
                                                "aria-invalid":
                                                  (e.model.trim() !== `` && V.has(e.id)) || void 0,
                                                list: `usage-price-models`,
                                                placeholder: `Model ID`,
                                                autoComplete: `off`,
                                                spellCheck: !1,
                                                disabled: K,
                                                onChange: (t) =>
                                                  pe({ ...e, model: t.target.value }),
                                              })
                                            : (0, $.jsx)(`span`, {
                                                className: W(
                                                  `block break-all`,
                                                  e.removed && `text-muted-foreground line-through`,
                                                ),
                                                children: e.model,
                                              }),
                                          V.has(e.id) &&
                                          (e.model.trim() !== `` ||
                                            Object.values(e.values).some(on))
                                            ? (0, $.jsx)(`p`, {
                                                role: `alert`,
                                                className: `mt-1 text-xs text-destructive`,
                                                children: V.get(e.id),
                                              })
                                            : null,
                                        ],
                                      }),
                                      e.removed
                                        ? (0, $.jsx)(Ht, {
                                            colSpan: 5,
                                            children: (0, $.jsx)(`span`, {
                                              className: `text-muted-foreground`,
                                              children: `Automatic pricing after saving`,
                                            }),
                                          })
                                        : (0, $.jsx)(Ht, {
                                            children: (0, $.jsx)(A, {
                                              size: `compact`,
                                              value: e.alias ?? t.value,
                                              "aria-label": `Map ${e.model || `new model`} to model`,
                                              list: `usage-alias-models`,
                                              placeholder: e.isNew ? `Optional` : t.placeholder,
                                              autoComplete: `off`,
                                              spellCheck: !1,
                                              disabled: K,
                                              onChange: (t) => we(e, t.target.value),
                                            }),
                                          }),
                                      e.removed
                                        ? null
                                        : n === ``
                                          ? Ut.map((t) => {
                                              let n = Zt(g, e.model, t.key),
                                                r = e.values[t.key] ?? (e.isNew ? `` : n.value);
                                              return (0, $.jsx)(
                                                Ht,
                                                {
                                                  children: (0, $.jsx)(A, {
                                                    size: `compact`,
                                                    inputMode: `decimal`,
                                                    "aria-label": `${t.label} price for ${e.model || `new model`}`,
                                                    value: r,
                                                    placeholder: e.isNew
                                                      ? t.optional
                                                        ? `Input rate`
                                                        : `0.00`
                                                      : n.placeholder,
                                                    autoComplete: `off`,
                                                    disabled: K,
                                                    font: `mono`,
                                                    onChange: (n) => {
                                                      Gt(r, n.target.value) &&
                                                        Se(e, t.key, n.target.value);
                                                    },
                                                  }),
                                                },
                                                t.key,
                                              );
                                            })
                                          : (0, $.jsx)(Ht, {
                                              colSpan: 4,
                                              className: `whitespace-normal`,
                                              children: (0, $.jsxs)(`span`, {
                                                className: `break-all text-muted-foreground`,
                                                children: [`Counted as `, n],
                                              }),
                                            }),
                                      (0, $.jsx)(Ht, {
                                        children: (0, $.jsxs)(f, {
                                          children: [
                                            (0, $.jsx)(D, {
                                              render: (0, $.jsx)(m, {
                                                size: `icon-xs`,
                                                variant: `ghost`,
                                              }),
                                              disabled: K,
                                              "aria-label": e.removed
                                                ? `Undo reset for ${e.model}`
                                                : e.isNew
                                                  ? `Remove new model`
                                                  : `Reset price for ${e.model} to automatic`,
                                              onClick: () => {
                                                e.isNew
                                                  ? y((t) => t.filter((t) => t.id !== e.id))
                                                  : e.removed
                                                    ? ye({ ...e, removed: !1 })
                                                    : pe({ ...e, removed: !0 });
                                              },
                                              children: e.isNew
                                                ? (0, $.jsx)(l, { "aria-hidden": !0 })
                                                : (0, $.jsx)(Ve, { "aria-hidden": !0 }),
                                            }),
                                            (0, $.jsx)(T, {
                                              children: e.removed
                                                ? `Undo reset`
                                                : e.isNew
                                                  ? `Remove row`
                                                  : `Reset to automatic`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsx)(`datalist`, {
                  id: `usage-price-models`,
                  children: a.filter((t) => !e.includes(t)).map(an),
                }),
                (0, $.jsx)(`datalist`, {
                  id: `usage-alias-models`,
                  children: a
                    .filter((e) => g.every((t) => !Object.hasOwn(t.aliases ?? {}, e)))
                    .map(rn),
                }),
                (0, $.jsxs)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    `Blank cache rates use the input price. Enter 0 for free tokens. A mapped model’s usage counts as the model it maps to.`,
                    g.length > 1
                      ? ` Mixed cells keep each environment’s rate until you edit them.`
                      : ``,
                  ],
                }),
              ],
            })),
      (t[9] = C),
      (t[10] = v),
      (t[11] = c),
      (t[12] = o),
      (t[13] = b),
      (t[14] = g),
      (t[15] = u),
      (t[16] = j),
      (t[17] = n),
      (t[18] = M),
      (t[19] = N),
      (t[20] = P),
      (t[21] = I),
      (t[22] = R),
      (t[23] = V),
      (t[24] = H),
      (t[25] = ee),
      (t[26] = U),
      (t[27] = te),
      (t[28] = G),
      (t[29] = ne),
      (t[30] = re),
      (t[31] = ie),
      (t[32] = ae));
  } else
    ((M = t[18]),
      (N = t[19]),
      (P = t[20]),
      (I = t[21]),
      (R = t[22]),
      (V = t[23]),
      (H = t[24]),
      (ee = t[25]),
      (U = t[26]),
      (te = t[27]),
      (G = t[28]),
      (ne = t[29]),
      (re = t[30]),
      (ie = t[31]),
      (ae = t[32]));
  let oe;
  t[81] === C
    ? (oe = t[82])
    : ((oe = C
        ? (0, $.jsx)(`div`, {
            role: `status`,
            className: `grid gap-1 text-xs`,
            children: C.destinations.map((e) => {
              let t = C.results.get(e.environmentId);
              return (0, $.jsxs)(
                `div`,
                {
                  className: `flex justify-between gap-3`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `truncate text-muted-foreground`,
                      children: e.label,
                    }),
                    (0, $.jsx)(`span`, {
                      className:
                        t?.status === `failed`
                          ? `text-right text-destructive`
                          : `text-muted-foreground`,
                      children:
                        t?.status === `failed`
                          ? `Not saved · ${t.error}`
                          : t?.status === `saved`
                            ? `Saved`
                            : `Saving…`,
                    }),
                  ],
                },
                e.environmentId,
              );
            }),
          })
        : null),
      (t[81] = C),
      (t[82] = oe));
  let K;
  t[83] !== M || t[84] !== oe || t[85] !== te || t[86] !== G
    ? ((K = (0, $.jsxs)(M, { children: [te, G, oe] })),
      (t[83] = M),
      (t[84] = oe),
      (t[85] = te),
      (t[86] = G),
      (t[87] = K))
    : (K = t[87]);
  let se = ee ? `Changes apply to ${I}` : ``,
    ce;
  t[88] === se
    ? (ce = t[89])
    : ((ce = (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: se })),
      (t[88] = se),
      (t[89] = ce));
  let de;
  t[90] !== R || t[91] !== H.length || t[92] !== ee || t[93] !== b
    ? ((de = ee
        ? (0, $.jsx)(m, {
            variant: `ghost`,
            disabled: b,
            onClick: R,
            children: H.length > 0 ? `Discard pending changes` : `Discard changes`,
          })
        : null),
      (t[90] = R),
      (t[91] = H.length),
      (t[92] = ee),
      (t[93] = b),
      (t[94] = de))
    : (de = t[94]);
  let pe = b || (!ee && H.length === 0) || (H.length === 0 && (V.size > 0 || g.length === 0)),
    q;
  t[95] !== H.length || t[96] !== U
    ? ((q = () => void U(H.length > 0)), (t[95] = H.length), (t[96] = U), (t[97] = q))
    : (q = t[97]);
  let me = b ? `Saving…` : H.length > 0 ? `Retry failed saves` : `Save changes`,
    J;
  t[98] !== pe || t[99] !== q || t[100] !== me
    ? ((J = (0, $.jsx)(m, { disabled: pe, onClick: q, children: me })),
      (t[98] = pe),
      (t[99] = q),
      (t[100] = me),
      (t[101] = J))
    : (J = t[101]);
  let Se;
  t[102] !== de || t[103] !== J
    ? ((Se = (0, $.jsxs)(`div`, {
        className: `flex w-full flex-wrap justify-end gap-2 sm:w-auto`,
        children: [de, J],
      })),
      (t[102] = de),
      (t[103] = J),
      (t[104] = Se))
    : (Se = t[104]);
  let Ce;
  t[105] !== ce || t[106] !== Se
    ? ((Ce = (0, $.jsxs)(ye, {
        variant: `bare`,
        className: `items-center sm:justify-between`,
        children: [ce, Se],
      })),
      (t[105] = ce),
      (t[106] = Se),
      (t[107] = Ce))
    : (Ce = t[107]);
  let we;
  t[108] !== N || t[109] !== K || t[110] !== Ce || t[111] !== ne || t[112] !== re
    ? ((we = (0, $.jsxs)(N, { className: ne, children: [re, K, Ce] })),
      (t[108] = N),
      (t[109] = K),
      (t[110] = Ce),
      (t[111] = ne),
      (t[112] = re),
      (t[113] = we))
    : (we = t[113]);
  let Y;
  return (
    t[114] !== P || t[115] !== we || t[116] !== ie || t[117] !== ae
      ? ((Y = (0, $.jsx)(P, { open: ie, onOpenChange: ae, children: we })),
        (t[114] = P),
        (t[115] = we),
        (t[116] = ie),
        (t[117] = ae),
        (t[118] = Y))
      : (Y = t[118]),
    Y
  );
}
function rn(e) {
  return (0, $.jsx)(`option`, { value: e }, e);
}
function an(e) {
  return (0, $.jsx)(`option`, { value: e }, e);
}
function on(e) {
  return e !== ``;
}
function sn(e) {
  return e.prices === null;
}
function cn(e) {
  return (0, $.jsx)(Vt, { children: e.label }, e.key);
}
function ln(e) {
  return (0, $.jsx)(`col`, {}, e.key);
}
function un(e) {
  return e.environmentId;
}
function dn(e) {
  let [t, n] = e;
  return [t, n.changes];
}
function fn(e) {
  return [e.environmentId, { status: `saving` }];
}
function pn(e, t, n) {
  return !e.isNew && t.placeholder !== `Mixed` && t.placeholder !== `Unavailable` && n === t.value;
}
function mn(e) {
  return !qt(e);
}
function hn(e) {
  return e.isNew;
}
function gn(e) {
  return e.model.trim();
}
function _n(e) {
  return e.isNew;
}
function vn(e) {
  return e.summary?.buckets.map(yn) ?? [];
}
function yn(e) {
  return e.model;
}
function bn(e) {
  return [...Object.keys(e.prices ?? {}), ...Object.keys(e.aliases ?? {})];
}
var xn = 960,
  Sn = 260,
  Cn = 4,
  wn = 8,
  Tn = new Set();
function En(e, t, n) {
  let r = e?.byProvider.get(t);
  return r === void 0 ? 0 : n === `tokens` ? r.totalTokens : r.costUsd;
}
function Dn(e, t, n) {
  return e.map((e) => {
    let r = t.get(e),
      i = it.map((e) => ({ provider: e, value: En(r, e, n) }));
    return { bands: i, total: i.reduce((e, t) => e + t.value, 0) };
  });
}
function On(e) {
  let t = e.length;
  if (t < 2) return [0];
  let n = [];
  for (let r = 0; r < t - 1; r += 1) {
    let t = (e[r + 1]?.x ?? 0) - (e[r]?.x ?? 0),
      i = (e[r + 1]?.y ?? 0) - (e[r]?.y ?? 0);
    n.push(t === 0 ? 0 : i / t);
  }
  let r = Array.from({ length: t }, () => 0);
  ((r[0] = n[0] ?? 0), (r[t - 1] = n[t - 2] ?? 0));
  for (let e = 1; e < t - 1; e += 1) {
    let t = n[e - 1] ?? 0,
      i = n[e] ?? 0;
    r[e] = t * i <= 0 ? 0 : (t + i) / 2;
  }
  for (let e = 0; e < t - 1; e += 1) {
    let t = n[e] ?? 0;
    if (t === 0) {
      ((r[e] = 0), (r[e + 1] = 0));
      continue;
    }
    let i = (r[e] ?? 0) / t,
      a = (r[e + 1] ?? 0) / t,
      o = i * i + a * a;
    if (o > 9) {
      let n = 3 / Math.sqrt(o);
      ((r[e] = n * i * t), (r[e + 1] = n * a * t));
    }
  }
  return r;
}
function kn(e) {
  if (e.length < 2) return [];
  let t = On(e),
    n = [];
  for (let r = 0; r < e.length - 1; r += 1) {
    let i = e[r],
      a = e[r + 1];
    if (i === void 0 || a === void 0) continue;
    let o = a.x - i.x;
    n.push({
      from: i,
      c1: { x: i.x + o / 3, y: i.y + ((t[r] ?? 0) * o) / 3 },
      c2: { x: a.x - o / 3, y: a.y - ((t[r + 1] ?? 0) * o) / 3 },
      to: a,
    });
  }
  return n;
}
function An(e) {
  let t = e[0];
  if (t === void 0) return ``;
  let n = `M${t.from.x.toFixed(2)},${t.from.y.toFixed(2)}`;
  for (let t of e)
    n += ` C${t.c1.x.toFixed(2)},${t.c1.y.toFixed(2)} ${t.c2.x.toFixed(2)},${t.c2.y.toFixed(2)} ${t.to.x.toFixed(2)},${t.to.y.toFixed(2)}`;
  return n;
}
function jn(e) {
  return e === `` ? `` : `${e} L${xn},${Sn} L0,${Sn} Z`;
}
function Mn(e, t) {
  if (e <= 0) return { max: 0, ticks: [0] };
  let n = e / t,
    r = 10 ** Math.floor(Math.log10(n)),
    i = n / r,
    a = (i > 5 ? 10 : i > 2 ? 5 : i > 1 ? 2 : 1) * r,
    o = Math.ceil(e / a) * a,
    s = [];
  for (let e = 0; e <= o + a * 1e-6; e += a) s.push(e);
  return { max: o, ticks: s };
}
var Nn = Array.from({ length: 5 }, (e, t) => t);
function Pn(e, t) {
  let n = e.reduce((e, t) => t.bands.reduce((e, t) => Math.max(e, t.value), e), 0);
  return n === 0 && t.size > 0
    ? { max: Cn, ticks: Nn, labeled: !1 }
    : { ...Mn(n, Cn), labeled: !0 };
}
function Fn(e, t) {
  return t === 0 ? Sn : Sn - (e / t) * 252;
}
function In(e, t, n, r, i) {
  let a = Dn(e, t, n),
    o = Pn(a, i),
    s = e.length < 2 ? 0 : xn / (e.length - 1);
  return {
    columns: a,
    scale: o,
    stepX: s,
    paths: r
      .map((e) => {
        let t = it.indexOf(e),
          n = An(kn(a.map((e, n) => ({ x: n * s, y: Fn(e.bands[t]?.value ?? 0, o.max) }))));
        return {
          provider: e,
          loading: i.has(e),
          total: a.reduce((e, n) => e + (n.bands[t]?.value ?? 0), 0),
          line: n,
          area: jn(n),
        };
      })
      .toSorted((e, t) => t.total - e.total),
  };
}
function Ln(e) {
  let t = (0, Q.c)(26),
    { tooltipRef: n, label: r, column: i, providers: a, loadingProviders: o, format: s } = e,
    c = a.some((e) => o.has(e)),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { left: `var(--usage-tooltip-left, 0px)`, top: `var(--usage-tooltip-top, 0px)` }),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] === r
    ? (u = t[2])
    : ((u = (0, $.jsx)(`div`, { className: `mb-1 text-muted-foreground`, children: r })),
      (t[1] = r),
      (t[2] = u));
  let d;
  if (t[3] !== i?.bands || t[4] !== s || t[5] !== o || t[6] !== a) {
    let e;
    (t[8] !== i?.bands || t[9] !== s || t[10] !== o
      ? ((e = (e) => {
          let { label: t, driverKind: n } = rt[e];
          return (0, $.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `flex items-center gap-1.5 text-muted-foreground`,
                  children: [
                    (0, $.jsx)(Ke, { driverKind: n, displayName: t, iconClassName: `size-3` }),
                    t,
                  ],
                }),
                (0, $.jsx)(`span`, {
                  className: W(
                    `tabular-nums`,
                    o.has(e) ? `text-muted-foreground` : `text-foreground`,
                  ),
                  children: s(i?.bands.find((t) => t.provider === e)?.value ?? 0),
                }),
              ],
            },
            e,
          );
        }),
        (t[8] = i?.bands),
        (t[9] = s),
        (t[10] = o),
        (t[11] = e))
      : (e = t[11]),
      (d = a.map(e)),
      (t[3] = i?.bands),
      (t[4] = s),
      (t[5] = o),
      (t[6] = a),
      (t[7] = d));
  } else d = t[7];
  let f;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`span`, { className: `text-muted-foreground`, children: `Total` })),
      (t[12] = f))
    : (f = t[12]);
  let p = c ? `text-muted-foreground` : `text-foreground`,
    m;
  t[13] === p ? (m = t[14]) : ((m = W(`tabular-nums`, p)), (t[13] = p), (t[14] = m));
  let h = i?.total ?? 0,
    g;
  t[15] !== s || t[16] !== h ? ((g = s(h)), (t[15] = s), (t[16] = h), (t[17] = g)) : (g = t[17]);
  let _;
  t[18] !== m || t[19] !== g
    ? ((_ = (0, $.jsxs)(`div`, {
        className: `mt-1 flex items-center justify-between gap-3 border-t border-border pt-1`,
        children: [f, (0, $.jsx)(`span`, { className: m, children: g })],
      })),
      (t[18] = m),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== u || t[22] !== d || t[23] !== _ || t[24] !== n
      ? ((v = (0, $.jsxs)(`div`, {
          ref: n,
          className: `surface-glass pointer-events-none absolute z-10 min-w-36 max-w-full rounded-xl border border-border/50 px-2.5 py-2 text-xs shadow-lg`,
          style: l,
          children: [u, d, _],
        })),
        (t[21] = u),
        (t[22] = d),
        (t[23] = _),
        (t[24] = n),
        (t[25] = v))
      : (v = t[25]),
    v
  );
}
function Rn(e) {
  let t = (0, Q.c)(26),
    {
      periods: n,
      columns: r,
      stepX: i,
      providers: a,
      loadingProviders: o,
      format: s,
      formatTooltipPeriod: c,
      ariaLabel: l,
      children: u,
    } = e,
    [d, f] = (0, Z.useState)(null),
    p = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    h = (0, Z.useRef)(null),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        let e = p.current,
          t = m.current,
          n = h.current;
        if (e === null || t === null || n === null) return;
        let r = t.offsetWidth,
          i = t.offsetHeight,
          a = e.clientWidth,
          o = e.clientHeight,
          s = n.x + 12 + r <= a ? n.x + 12 : n.x - 12 - r,
          c = n.y + 12 + i <= o ? n.y + 12 : n.y - 12 - i,
          l = Math.min(Math.max(0, s), Math.max(0, a - r)),
          u = Math.min(Math.max(0, c), Math.max(0, o - i));
        (e.style.setProperty(`--usage-tooltip-left`, `${l}px`),
          e.style.setProperty(`--usage-tooltip-top`, `${u}px`));
      }),
      (t[0] = g))
    : (g = t[0]);
  let _ = g,
    v,
    y;
  (t[1] === d
    ? ((v = t[2]), (y = t[3]))
    : ((v = () => {
        if (d === null) return;
        _();
        let e = p.current,
          t = m.current;
        if (e !== null && t !== null) return J([e, t], _);
      }),
      (y = [d, _]),
      (t[1] = d),
      (t[2] = v),
      (t[3] = y)),
    (0, Z.useLayoutEffect)(v, y));
  let b;
  t[4] === n
    ? (b = t[5])
    : ((b = (e) => {
        let t = p.current;
        if (t === null || n.length === 0) return;
        let r = t.getBoundingClientRect();
        if (r.width === 0) return;
        let i = Math.min(r.width, Math.max(0, e.clientX - r.left)),
          a = Math.min(r.height, Math.max(0, e.clientY - r.top)),
          o = i / r.width,
          s = Math.round(o * (n.length - 1));
        ((h.current = { x: i, y: a }), _(), f(Math.min(n.length - 1, Math.max(0, s))));
      }),
      (t[4] = n),
      (t[5] = b));
  let x = b,
    S = d === null ? void 0 : n[d],
    C;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        ((h.current = null), f(null));
      }),
      (t[6] = C))
    : (C = t[6]);
  let w;
  t[7] !== d || t[8] !== i
    ? ((w =
        d === null
          ? null
          : (0, $.jsx)(`line`, {
              x1: d * i,
              x2: d * i,
              y1: wn,
              y2: Sn,
              stroke: `currentColor`,
              strokeWidth: 1,
              className: `text-muted-foreground`,
              vectorEffect: `non-scaling-stroke`,
            })),
      (t[7] = d),
      (t[8] = i),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== l || t[11] !== u || t[12] !== w
    ? ((T = (0, $.jsxs)(`svg`, {
        className: `h-full w-full`,
        viewBox: `0 0 ${xn} ${Sn}`,
        preserveAspectRatio: `none`,
        role: `img`,
        "aria-label": l,
        children: [u, w],
      })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = w),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== r ||
  t[15] !== s ||
  t[16] !== c ||
  t[17] !== d ||
  t[18] !== S ||
  t[19] !== o ||
  t[20] !== a
    ? ((E =
        d === null || S === void 0
          ? null
          : (0, $.jsx)(Ln, {
              tooltipRef: m,
              label: c(S),
              column: r[d],
              providers: a,
              loadingProviders: o,
              format: s,
            })),
      (t[14] = r),
      (t[15] = s),
      (t[16] = c),
      (t[17] = d),
      (t[18] = S),
      (t[19] = o),
      (t[20] = a),
      (t[21] = E))
    : (E = t[21]);
  let D;
  return (
    t[22] !== x || t[23] !== T || t[24] !== E
      ? ((D = (0, $.jsxs)(`div`, {
          ref: p,
          className: `relative h-56 flex-1`,
          onMouseMove: x,
          onMouseLeave: C,
          children: [T, E],
        })),
        (t[22] = x),
        (t[23] = T),
        (t[24] = E),
        (t[25] = D))
      : (D = t[25]),
    D
  );
}
function zn(e) {
  let t = (0, Q.c)(77),
    {
      providers: n,
      loadingProviders: r,
      days: i,
      daily: a,
      hours: o,
      hourly: s,
      metric: c,
      referenceTime: l,
      resolution: u,
      timeZone: d,
      hour12: f,
    } = e,
    p = r === void 0 ? Tn : r,
    m = u === `hour` ? o : i,
    h = u === `hour` ? s : a,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j;
  if (
    t[0] !== f ||
    t[1] !== p ||
    t[2] !== c ||
    t[3] !== m ||
    t[4] !== n ||
    t[5] !== l ||
    t[6] !== u ||
    t[7] !== d ||
    t[8] !== h
  ) {
    let { columns: e, scale: r, paths: i, stepX: a } = In(m, new Map(h.map(Vn)), c, n, p),
      o = (e) => Fn(e, r.max),
      s = Bn,
      M = c === `tokens` ? X : Y,
      N;
    (t[25] !== f || t[26] !== u || t[27] !== d
      ? ((N = (e) => (u === `hour` ? Oe(e, d, f) : Ce(e))),
        (t[25] = f),
        (t[26] = u),
        (t[27] = d),
        (t[28] = N))
      : (N = t[28]),
      (_ = N));
    let P;
    t[29] !== _ || t[30] !== f || t[31] !== l || t[32] !== u || t[33] !== d
      ? ((P = (e) => (u === `hour` && l !== void 0 ? we(e, l, d, f) : _(e))),
        (t[29] = _),
        (t[30] = f),
        (t[31] = l),
        (t[32] = u),
        (t[33] = d),
        (t[34] = P))
      : (P = t[34]);
    let F = P;
    ((C = `flex flex-col gap-1`),
      (x = `flex gap-2`),
      (S = (0, $.jsx)(`div`, {
        className: `relative h-56 w-14 shrink-0`,
        children: r.labeled
          ? r.ticks.map((e) =>
              (0, $.jsx)(
                `span`,
                {
                  className: `absolute right-0 -translate-y-1/2 text-3xs text-muted-foreground tabular-nums`,
                  style: { top: `${(o(e) / Sn) * 100}%` },
                  children: e === 0 ? `0` : M(e),
                },
                e,
              ),
            )
          : null,
      })),
      (g = Rn),
      (w = m),
      (T = e),
      (E = a),
      (D = n),
      (O = p),
      (k = M),
      (A = F),
      (j = `${u === `hour` ? `Hourly` : `Daily`} ${c === `tokens` ? `processed tokens` : `cost`} by provider`),
      (v = r.ticks.map((e) => {
        let t = o(e);
        return (0, $.jsx)(
          `line`,
          {
            x1: 0,
            x2: xn,
            y1: t,
            y2: t,
            stroke: `currentColor`,
            strokeWidth: 1,
            className: `text-border`,
            vectorEffect: `non-scaling-stroke`,
          },
          e,
        );
      })));
    let I;
    (t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((I = (e) => {
          let { provider: t, loading: n, area: r } = e;
          return (0, $.jsx)(
            `path`,
            { d: r, className: s(n), fill: rt[t].color, fillOpacity: 0.12 },
            t,
          );
        }),
        (t[35] = I))
      : (I = t[35]),
      (y = i.map(I)));
    let L;
    (t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((L = (e) => {
          let { provider: t, loading: n, line: r } = e;
          return (0, $.jsx)(
            `path`,
            {
              d: r,
              className: s(n),
              fill: `none`,
              stroke: rt[t].color,
              strokeWidth: 2,
              vectorEffect: `non-scaling-stroke`,
            },
            t,
          );
        }),
        (t[36] = L))
      : (L = t[36]),
      (b = i.map(L)),
      (t[0] = f),
      (t[1] = p),
      (t[2] = c),
      (t[3] = m),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E),
      (t[20] = D),
      (t[21] = O),
      (t[22] = k),
      (t[23] = A),
      (t[24] = j));
  } else
    ((g = t[9]),
      (_ = t[10]),
      (v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]),
      (D = t[20]),
      (O = t[21]),
      (k = t[22]),
      (A = t[23]),
      (j = t[24]));
  let M;
  t[37] !== g ||
  t[38] !== v ||
  t[39] !== y ||
  t[40] !== b ||
  t[41] !== w ||
  t[42] !== T ||
  t[43] !== E ||
  t[44] !== D ||
  t[45] !== O ||
  t[46] !== k ||
  t[47] !== A ||
  t[48] !== j
    ? ((M = (0, $.jsxs)(g, {
        periods: w,
        columns: T,
        stepX: E,
        providers: D,
        loadingProviders: O,
        format: k,
        formatTooltipPeriod: A,
        ariaLabel: j,
        children: [v, y, b],
      })),
      (t[37] = g),
      (t[38] = v),
      (t[39] = y),
      (t[40] = b),
      (t[41] = w),
      (t[42] = T),
      (t[43] = E),
      (t[44] = D),
      (t[45] = O),
      (t[46] = k),
      (t[47] = A),
      (t[48] = j),
      (t[49] = M))
    : (M = t[49]);
  let N;
  t[50] !== x || t[51] !== S || t[52] !== M
    ? ((N = (0, $.jsxs)(`div`, { className: x, children: [S, M] })),
      (t[50] = x),
      (t[51] = S),
      (t[52] = M),
      (t[53] = N))
    : (N = t[53]);
  let P;
  t[54] !== _ || t[55] !== m[0]
    ? ((P = m[0] === void 0 ? `` : _(m[0])), (t[54] = _), (t[55] = m[0]), (t[56] = P))
    : (P = t[56]);
  let F;
  t[57] === P ? (F = t[58]) : ((F = (0, $.jsx)(`span`, { children: P })), (t[57] = P), (t[58] = F));
  let I;
  t[59] !== _ || t[60] !== m
    ? ((I = m[Math.floor(m.length / 2)] === void 0 ? `` : _(m[Math.floor(m.length / 2)] ?? ``)),
      (t[59] = _),
      (t[60] = m),
      (t[61] = I))
    : (I = t[61]);
  let L;
  t[62] === I ? (L = t[63]) : ((L = (0, $.jsx)(`span`, { children: I })), (t[62] = I), (t[63] = L));
  let R;
  t[64] !== _ || t[65] !== m
    ? ((R = m[m.length - 1] === void 0 ? `` : _(m[m.length - 1] ?? ``)),
      (t[64] = _),
      (t[65] = m),
      (t[66] = R))
    : (R = t[66]);
  let z;
  t[67] === R ? (z = t[68]) : ((z = (0, $.jsx)(`span`, { children: R })), (t[67] = R), (t[68] = z));
  let B;
  t[69] !== F || t[70] !== L || t[71] !== z
    ? ((B = (0, $.jsxs)(`div`, {
        className: `flex justify-between pl-16 text-3xs text-muted-foreground uppercase`,
        children: [F, L, z],
      })),
      (t[69] = F),
      (t[70] = L),
      (t[71] = z),
      (t[72] = B))
    : (B = t[72]);
  let V;
  return (
    t[73] !== C || t[74] !== N || t[75] !== B
      ? ((V = (0, $.jsxs)(`div`, { className: C, children: [N, B] })),
        (t[73] = C),
        (t[74] = N),
        (t[75] = B),
        (t[76] = V))
      : (V = t[76]),
    V
  );
}
function Bn(e) {
  return W(`transition-opacity`, e && `opacity-40 delay-150`);
}
function Vn(e) {
  return [`hourStart` in e ? e.hourStart : e.day, e];
}
function Hn(e) {
  let t = (0, Q.c)(27),
    { label: n, segments: r, format: i, aside: a } = e,
    o,
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== a || t[1] !== i || t[2] !== n || t[3] !== r) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = r.filter(Wn),
        p = e.reduce(Un, 0);
      if (p <= 0) {
        d = null;
        break bb0;
      }
      c = `flex min-w-0 flex-col gap-2.5`;
      let m;
      (t[10] === n
        ? (m = t[11])
        : ((m = (0, $.jsx)(`h3`, {
            className: `text-sm font-medium text-foreground`,
            children: n,
          })),
          (t[10] = n),
          (t[11] = m)),
        t[12] !== a || t[13] !== m
          ? ((l = (0, $.jsxs)(`div`, {
              className: `flex items-baseline justify-between gap-3`,
              children: [m, a],
            })),
            (t[12] = a),
            (t[13] = m),
            (t[14] = l))
          : (l = t[14]));
      let h;
      (t[15] === i
        ? (h = t[16])
        : ((h = (e) => `${e.label} ${i(e.value)}`), (t[15] = i), (t[16] = h)),
        (u = (0, $.jsx)(`div`, {
          role: `img`,
          "aria-label": `${n}: ${e.map(h).join(`, `)}`,
          className: `flex h-2 gap-0.5`,
          children: e.map((e) =>
            (0, $.jsxs)(
              f,
              {
                children: [
                  (0, $.jsx)(D, {
                    render: (0, $.jsx)(`div`, {
                      className: `h-full min-w-1 rounded-xs first:rounded-l-full last:rounded-r-full`,
                      style: { flex: `${e.value} 1 0`, backgroundColor: e.color },
                    }),
                  }),
                  (0, $.jsxs)(T, {
                    children: [e.label, ` · `, i(e.value), ` · `, Ae(e.value / p)],
                  }),
                ],
              },
              e.label,
            ),
          ),
        })),
        (o = `flex flex-wrap gap-x-4 gap-y-1 text-xs`));
      let g;
      (t[17] === i
        ? (g = t[18])
        : ((g = (e) =>
            (0, $.jsxs)(
              `span`,
              {
                className: `flex items-center gap-1.5`,
                children: [
                  (0, $.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `size-2 rounded-xs`,
                    style: { backgroundColor: e.color },
                  }),
                  (0, $.jsx)(`span`, { className: `text-muted-foreground`, children: e.label }),
                  (0, $.jsx)(`span`, {
                    className: `text-foreground tabular-nums`,
                    children: i(e.value),
                  }),
                ],
              },
              e.label,
            )),
          (t[17] = i),
          (t[18] = g)),
        (s = e.map(g)));
    }
    ((t[0] = a),
      (t[1] = i),
      (t[2] = n),
      (t[3] = r),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d));
  } else ((o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]), (d = t[9]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let p;
  t[19] !== o || t[20] !== s
    ? ((p = (0, $.jsx)(`div`, { className: o, children: s })),
      (t[19] = o),
      (t[20] = s),
      (t[21] = p))
    : (p = t[21]);
  let m;
  return (
    t[22] !== c || t[23] !== l || t[24] !== u || t[25] !== p
      ? ((m = (0, $.jsxs)(`div`, { className: c, children: [l, u, p] })),
        (t[22] = c),
        (t[23] = l),
        (t[24] = u),
        (t[25] = p),
        (t[26] = m))
      : (m = t[26]),
    m
  );
}
function Un(e, t) {
  return e + t.value;
}
function Wn(e) {
  return e.value > 0;
}
function Gn(e) {
  return e.toSorted((e, t) => t.totalTokens - e.totalTokens || t.costUsd - e.costUsd);
}
function Kn(e, t) {
  return t === `tokens` ? e.tokenShare : _t(e) ? null : e.costShare;
}
function qn({ tokens: e }) {
  let t = e.uncachedInputTokens + e.cachedInputTokens + e.cacheCreationTokens;
  return t === 0 ? null : e.cachedInputTokens / t;
}
function Jn(e) {
  let t = e.totalTokens - e.unpricedTokens;
  return t <= 0 || _t(e) ? null : (e.costUsd / t) * 1e6;
}
var Yn = (e) => `color-mix(in oklab, var(--foreground) ${e}%, var(--background))`,
  Xn = { input: Yn(60), cacheRead: Yn(30), cacheWrite: Yn(72), output: Yn(100), other: Yn(44) };
function Zn(e) {
  return [
    { label: `Input`, value: e.input, color: Xn.input },
    { label: `Cache read`, value: e.cacheRead, color: Xn.cacheRead },
    { label: `Cache write`, value: e.cacheWrite, color: Xn.cacheWrite },
    { label: `Output`, value: e.output, color: Xn.output },
    { label: `Other`, value: e.unsplit >= 0.005 ? e.unsplit : 0, color: Xn.other },
  ];
}
function Qn(e) {
  return [
    { label: `Input`, value: e.uncachedInputTokens, color: Xn.input },
    { label: `Cache read`, value: e.cachedInputTokens, color: Xn.cacheRead },
    { label: `Cache write`, value: e.cacheCreationTokens, color: Xn.cacheWrite },
    { label: `Output`, value: e.outputTokens, color: Xn.output },
  ];
}
function $n(e) {
  return [
    { label: `Standard`, value: e.standard, color: Yn(34) },
    { label: `Fast`, value: e.fast, color: Yn(66) },
    { label: `Ultrafast`, value: e.ultrafast, color: Yn(100) },
  ];
}
function er(e) {
  let t = (0, Q.c)(95),
    { model: n, environments: r, metric: i, chartWindow: a, onSetPrice: o, onClose: s } = e,
    c,
    l,
    u,
    d,
    f,
    p,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (
    t[0] !== a.days ||
    t[1] !== a.hour12 ||
    t[2] !== a.hours ||
    t[3] !== a.referenceTime ||
    t[4] !== a.resolution ||
    t[5] !== a.timeZone ||
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== n ||
    t[9] !== s
  ) {
    let e;
    t[24] !== n.model || t[25] !== n.provider
      ? ((e = (e) => e.provider === n.provider && e.model === n.model),
        (t[24] = n.model),
        (t[25] = n.provider),
        (t[26] = e))
      : (e = t[26]);
    let o = Ot(r, e),
      m;
    t[27] === n.provider ? (m = t[28]) : ((m = [n.provider]), (t[27] = n.provider), (t[28] = m));
    let C = m,
      w = rt[n.provider],
      T;
    t[29] === n ? (T = t[30]) : ((T = _t(n)), (t[29] = n), (t[30] = T));
    let E = T,
      D;
    if (t[31] !== E || t[32] !== n) {
      let e = qn(n),
        r = Jn(n),
        i;
      t[34] !== E || t[35] !== n.costUsd
        ? ((i = E ? `Unpriced` : Y(n.costUsd)), (t[34] = E), (t[35] = n.costUsd), (t[36] = i))
        : (i = t[36]);
      let a;
      t[37] === i ? (a = t[38]) : ((a = { label: `Cost`, value: i }), (t[37] = i), (t[38] = a));
      let o;
      t[39] === n.totalTokens
        ? (o = t[40])
        : ((o = X(n.totalTokens)), (t[39] = n.totalTokens), (t[40] = o));
      let s;
      (t[41] === o ? (s = t[42]) : ((s = { label: `Tokens`, value: o }), (t[41] = o), (t[42] = s)),
        (D = [
          a,
          s,
          r === null ? null : { label: `Per 1M tokens`, value: Y(r) },
          e === null ? null : { label: `Cache hit`, value: Ae(e) },
        ].filter(nr)),
        (t[31] = E),
        (t[32] = n),
        (t[33] = D));
    } else D = t[33];
    let O = D;
    ((u = ve),
      (f = !0),
      t[43] === s
        ? (p = t[44])
        : ((p = (e) => {
            e || s();
          }),
          (t[43] = s),
          (t[44] = p)),
      (l = _e),
      (x = `max-w-3xl`));
    let k;
    t[45] !== w.driverKind || t[46] !== w.label
      ? ((k = (0, $.jsx)(Ke, {
          driverKind: w.driverKind,
          displayName: w.label,
          iconClassName: `size-5`,
        })),
        (t[45] = w.driverKind),
        (t[46] = w.label),
        (t[47] = k))
      : (k = t[47]);
    let A;
    t[48] === n.model
      ? (A = t[49])
      : ((A = (0, $.jsx)(xe, { children: n.model })), (t[48] = n.model), (t[49] = A));
    let j;
    t[50] !== k || t[51] !== A
      ? ((j = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [k, A] })),
        (t[50] = k),
        (t[51] = A),
        (t[52] = j))
      : (j = t[52]);
    let M;
    t[53] !== E || t[54] !== n.costShare
      ? ((M = E ? `` : ` · ${Ae(n.costShare)} of cost`),
        (t[53] = E),
        (t[54] = n.costShare),
        (t[55] = M))
      : (M = t[55]);
    let N;
    (t[56] !== w.label || t[57] !== M
      ? ((N = (0, $.jsxs)(he, { children: [w.label, M] })),
        (t[56] = w.label),
        (t[57] = M),
        (t[58] = N))
      : (N = t[58]),
      t[59] !== j || t[60] !== N
        ? ((S = (0, $.jsxs)(be, { children: [j, N] })), (t[59] = j), (t[60] = N), (t[61] = S))
        : (S = t[61]),
      (c = ge),
      (v = `flex flex-col gap-8`),
      t[62] === O
        ? (y = t[63])
        : ((y = (0, $.jsx)(`div`, {
            className: `grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4`,
            children: O.map(tr),
          })),
          (t[62] = O),
          (t[63] = y)),
      (b = (0, $.jsx)(zn, {
        providers: C,
        days: a.days,
        daily: o.daily,
        hours: a.hours,
        hourly: o.hourly,
        metric: E ? `tokens` : i,
        referenceTime: a.referenceTime,
        resolution: a.resolution,
        timeZone: a.timeZone,
        hour12: a.hour12,
      })),
      (d = `grid gap-x-10 gap-y-8 sm:grid-cols-2`),
      (h = E
        ? null
        : (0, $.jsx)(Hn, { label: `Cost by type`, segments: Zn(o.categoryCost), format: Y })));
    let P;
    (t[64] === n.tokens ? (P = t[65]) : ((P = Qn(n.tokens)), (t[64] = n.tokens), (t[65] = P)),
      t[66] === P
        ? (g = t[67])
        : ((g = (0, $.jsx)(Hn, { label: `Tokens by type`, segments: P, format: X })),
          (t[66] = P),
          (t[67] = g)),
      (_ =
        o.speedCost.fast + o.speedCost.ultrafast > 0
          ? (0, $.jsx)(Hn, {
              label: `Cost by speed`,
              segments: $n(o.speedCost),
              format: Y,
              aside: (0, $.jsx)(rr, { premiumUsd: o.speedCost.premium }),
            })
          : null),
      (t[0] = a.days),
      (t[1] = a.hour12),
      (t[2] = a.hours),
      (t[3] = a.referenceTime),
      (t[4] = a.resolution),
      (t[5] = a.timeZone),
      (t[6] = r),
      (t[7] = i),
      (t[8] = n),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p),
      (t[16] = h),
      (t[17] = g),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x),
      (t[23] = S));
  } else
    ((c = t[10]),
      (l = t[11]),
      (u = t[12]),
      (d = t[13]),
      (f = t[14]),
      (p = t[15]),
      (h = t[16]),
      (g = t[17]),
      (_ = t[18]),
      (v = t[19]),
      (y = t[20]),
      (b = t[21]),
      (x = t[22]),
      (S = t[23]));
  let C;
  t[68] !== d || t[69] !== h || t[70] !== g || t[71] !== _
    ? ((C = (0, $.jsxs)(`div`, { className: d, children: [h, g, _] })),
      (t[68] = d),
      (t[69] = h),
      (t[70] = g),
      (t[71] = _),
      (t[72] = C))
    : (C = t[72]);
  let w;
  t[73] !== C || t[74] !== v || t[75] !== y || t[76] !== b
    ? ((w = (0, $.jsxs)(`div`, { className: v, children: [y, b, C] })),
      (t[73] = C),
      (t[74] = v),
      (t[75] = y),
      (t[76] = b),
      (t[77] = w))
    : (w = t[77]);
  let T;
  t[78] !== c || t[79] !== w
    ? ((T = (0, $.jsx)(c, { children: w })), (t[78] = c), (t[79] = w), (t[80] = T))
    : (T = t[80]);
  let E;
  t[81] !== n.unpricedTokens || t[82] !== o
    ? ((E =
        n.unpricedTokens > 0
          ? (0, $.jsxs)(ye, {
              variant: `bare`,
              className: `items-center sm:justify-between`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `text-xs text-muted-foreground`,
                  children: [X(n.unpricedTokens), ` tokens have no known price`],
                }),
                (0, $.jsx)(m, { onClick: o, children: `Set price` }),
              ],
            })
          : null),
      (t[81] = n.unpricedTokens),
      (t[82] = o),
      (t[83] = E))
    : (E = t[83]);
  let D;
  t[84] !== l || t[85] !== T || t[86] !== E || t[87] !== x || t[88] !== S
    ? ((D = (0, $.jsxs)(l, { className: x, children: [S, T, E] })),
      (t[84] = l),
      (t[85] = T),
      (t[86] = E),
      (t[87] = x),
      (t[88] = S),
      (t[89] = D))
    : (D = t[89]);
  let O;
  return (
    t[90] !== u || t[91] !== f || t[92] !== p || t[93] !== D
      ? ((O = (0, $.jsx)(u, { open: f, onOpenChange: p, children: D })),
        (t[90] = u),
        (t[91] = f),
        (t[92] = p),
        (t[93] = D),
        (t[94] = O))
      : (O = t[94]),
    O
  );
}
function tr(e) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex min-w-0 flex-col gap-0.5`,
      children: [
        (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: e.label }),
        (0, $.jsx)(`span`, {
          className: `text-2xl font-semibold text-foreground`,
          children: e.value,
        }),
      ],
    },
    e.label,
  );
}
function nr(e) {
  return e !== null;
}
function rr(e) {
  let t = (0, Q.c)(4),
    { premiumUsd: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Y(n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsxs)(`span`, {
          className: `text-xs text-muted-foreground`,
          children: [
            `Premium `,
            (0, $.jsx)(`span`, { className: `text-foreground tabular-nums`, children: r }),
          ],
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var ir = `t3code:usage-page-preferences:v1`,
  ar = g({
    metric: h([`cost`, `tokens`, `limits`]),
    windowDays: h([1, 7, 30, 90]),
    hiddenProviders: P(R(E)),
  }),
  or = { metric: `limits`, windowDays: 30 };
function sr() {
  try {
    return x(ir, ar) ?? or;
  } catch (e) {
    return (console.error(`Could not read Usage page preferences.`, e), or);
  }
}
function cr(e) {
  try {
    _(ir, e, ar);
  } catch (e) {
    console.error(`Could not save Usage page preferences.`, e);
  }
}
function lr(e) {
  return Fe.some((t) => t.value === e);
}
function ur(e) {
  return Ne.some((t) => t.days === e);
}
var dr = (e) => rt[e].label;
function fr(e, t, n, r) {
  if (e) return { partial: !0, everyProvider: !0, providers: new Set() };
  let i = gt(t, n),
    a = new Set([...i.providers].filter((e) => !r.has(e)));
  return { partial: i.everyProvider || a.size > 0, everyProvider: i.everyProvider, providers: a };
}
var pr = G(null).pipe(C, H(`usage:selected-model-key`));
function mr(e) {
  p.set(pr, e);
}
function hr(e) {
  let t = (0, Q.c)(15),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ models: r, onSetPrice: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = L(pr),
    o;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = []), (t[4] = o)) : (o = t[4]),
    (0, Z.useEffect)(_r, o));
  let s;
  t[5] !== r || t[6] !== a
    ? ((s = a === null ? void 0 : r.find((e) => `${e.provider}:${e.model}` === a)),
      (t[5] = r),
      (t[6] = a),
      (t[7] = s))
    : (s = t[7]);
  let c = s;
  if (c === void 0) return null;
  let l;
  t[8] !== c.model || t[9] !== i
    ? ((l = () => {
        (mr(null), i(c.model));
      }),
      (t[8] = c.model),
      (t[9] = i),
      (t[10] = l))
    : (l = t[10]);
  let u;
  return (
    t[11] !== n || t[12] !== c || t[13] !== l
      ? ((u = (0, $.jsx)(er, { ...n, model: c, onSetPrice: l, onClose: gr })),
        (t[11] = n),
        (t[12] = c),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function gr() {
  return mr(null);
}
function _r() {
  return vr;
}
function vr() {
  return mr(null);
}
function yr() {
  let e = (0, Q.c)(218),
    [t, n] = (0, Z.useState)(sr),
    r = L(ce),
    i = se(Cr),
    a;
  e[0] === r
    ? (a = e[1])
    : ((a = (e) => {
        let t = Se(r, e.command, { context: { usagePageOpen: !0 } });
        return t ? `${e.label} (${t})` : e.label;
      }),
      (e[0] = r),
      (e[1] = a));
  let o = a,
    s;
  e[2] === t.windowDays
    ? (s = e[3])
    : ((s = () => ({
        days: t.windowDays,
        window: Te(t.windowDays, void 0, t.windowDays === 1 ? `hour` : `day`),
      })),
      (e[2] = t.windowDays),
      (e[3] = s));
  let [c, l] = (0, Z.useState)(s),
    u = t.metric,
    d = u === `limits`,
    [f, p] = (0, Z.useState)(!1),
    [h, g] = (0, Z.useState)(Sr),
    _ = (0, Z.useRef)(!1),
    [v, y] = (0, Z.useState)(null),
    [b, x] = (0, Z.useState)(null),
    S;
  e[4] === t.hiddenProviders
    ? (S = e[5])
    : ((S = new Set(t.hiddenProviders)), (e[4] = t.hiddenProviders), (e[5] = S));
  let C = S,
    { days: w, window: T } = c,
    E = w === 1,
    {
      merged: D,
      environments: O,
      selectedEnvironments: k,
      shown: A,
      isPartial: j,
      refresh: N,
    } = Mt(T, b, C),
    P = A?.merged ?? D,
    F = A?.window ?? T,
    I = F.resolution === `hour`,
    R = f && !d,
    z = A !== null && A.window !== T,
    B = L(K.presentationsAtom),
    V = L(K.presentationsWithProvidersAtom),
    H;
  e[6] !== C || e[7] !== k
    ? ((H = C.has(`cursor`) ? [] : lt(k)), (e[6] = C), (e[7] = k), (e[8] = H))
    : (H = e[8]);
  let U = H,
    W;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = { reportFailure: !1 }), (e[9] = W))
    : (W = e[9]);
  let G = fe(le.refreshProviders, W),
    ue;
  e[10] === k ? (ue = e[11]) : ((ue = k.some(xr)), (e[10] = k), (e[11] = ue));
  let de = ue,
    pe;
  e[12] === t
    ? (pe = e[13])
    : ((pe = (e) => {
        let r = { ...t, ...e };
        (n(r), cr(r));
      }),
      (e[12] = t),
      (e[13] = pe));
  let q = pe,
    he;
  e[14] === q
    ? (he = e[15])
    : ((he = (e) => {
        ur(e) &&
          (q({ windowDays: e }), l({ days: e, window: Te(e, void 0, e === 1 ? `hour` : `day`) }));
      }),
      (e[14] = q),
      (e[15] = he));
  let ge = he,
    _e;
  e[16] === q
    ? (_e = e[17])
    : ((_e = (e) => {
        (e === `limits` && g(Date.now()), q({ metric: e }));
      }),
      (e[16] = q),
      (e[17] = _e));
  let ve = _e,
    ye;
  e[18] !== B || e[19] !== G || e[20] !== b
    ? ((ye = (e, t) => {
        let n = e !== void 0 && e,
          r = t !== void 0 && t;
        return ee(() =>
          Promise.all(
            Array.from(B, (e) => {
              let [t, i] = e;
              if (
                (b === null || b.has(t)) &&
                i.connection.phase === `connected` &&
                i.serverConfig !== null
              )
                return ft(t, () => G({ environmentId: t, input: {} }), n, r);
            }),
          ),
        ).then((e) => {
          if ((g(Date.now()), !M(e))) throw te(e.cause);
        });
      }),
      (e[18] = B),
      (e[19] = G),
      (e[20] = b),
      (e[21] = ye))
    : (ye = e[21]);
  let be = ye,
    xe;
  e[22] !== r || e[23] !== ve || e[24] !== ge || e[25] !== d
    ? ((xe = (e) => {
        if (e.defaultPrevented || e.repeat || e.isComposing || qe() || Ge()) return;
        let t = Pe(e, r),
          n = Fe.find((e) => e.command === t),
          i = Ne.find((e) => e.command === t);
        (n || i) &&
          (e.preventDefault(), e.stopPropagation(), n && ve(n.value), i && !d && ge(i.days));
      }),
      (e[22] = r),
      (e[23] = ve),
      (e[24] = ge),
      (e[25] = d),
      (e[26] = xe))
    : (xe = e[26]);
  let J = (0, Z.useEffectEvent)(xe),
    we;
  e[27] === J
    ? (we = e[28])
    : ((we = () => (
        globalThis.window.addEventListener(`keydown`, J, !0),
        () => globalThis.window.removeEventListener(`keydown`, J, !0)
      )),
      (e[27] = J),
      (e[28] = we));
  let Y;
  (e[29] === Symbol.for(`react.memo_cache_sentinel`) ? ((Y = []), (e[29] = Y)) : (Y = e[29]),
    (0, Z.useEffect)(we, Y));
  let X;
  e[30] !== E || e[31] !== N || e[32] !== be || e[33] !== d || e[34] !== T || e[35] !== w
    ? ((X = () => {
        if (_.current) return;
        if (d) {
          ((_.current = !0),
            p(!0),
            be().finally(() => {
              ((_.current = !1), p(!1));
            }));
          return;
        }
        let e = Te(w, void 0, E ? `hour` : `day`);
        ((e.sinceDay !== T.sinceDay ||
          e.untilDay !== T.untilDay ||
          e.sinceTime !== T.sinceTime ||
          e.untilTime !== T.untilTime) &&
          l({ days: w, window: e }),
          (_.current = !0),
          p(!0),
          N(e).finally(() => {
            ((_.current = !1), p(!1));
          }));
      }),
      (e[30] = E),
      (e[31] = N),
      (e[32] = be),
      (e[33] = d),
      (e[34] = T),
      (e[35] = w),
      (e[36] = X))
    : (X = e[36]);
  let Oe = X,
    ke;
  e[37] !== B || e[38] !== b
    ? ((ke = [...B]
        .filter((e) => {
          let [t, n] = e;
          return (
            n.connection.phase === `connected` &&
            n.serverConfig !== null &&
            (b === null || b.has(t))
          );
        })
        .map(br)
        .sort()
        .join(`,`)),
      (e[37] = B),
      (e[38] = b),
      (e[39] = ke))
    : (ke = e[39]);
  let Ae = ke,
    Me;
  e[40] === be
    ? (Me = e[41])
    : ((Me = () => {
        be(!0);
      }),
      (e[40] = be),
      (e[41] = Me));
  let Re = (0, Z.useEffectEvent)(Me),
    ze;
  e[42] !== Re || e[43] !== Ae || e[44] !== d
    ? ((ze = () => {
        d && Ae && Re();
      }),
      (e[42] = Re),
      (e[43] = Ae),
      (e[44] = d),
      (e[45] = ze))
    : (ze = e[45]);
  let Be;
  (e[46] !== Ae || e[47] !== d
    ? ((Be = [d, Ae]), (e[46] = Ae), (e[47] = d), (e[48] = Be))
    : (Be = e[48]),
    (0, Z.useEffect)(ze, Be));
  let Ve;
  e[49] !== F.sinceDay || e[50] !== F.untilDay
    ? ((Ve = je(F.sinceDay, F.untilDay)), (e[49] = F.sinceDay), (e[50] = F.untilDay), (e[51] = Ve))
    : (Ve = e[51]);
  let He = Ve,
    We;
  e[52] !== F.sinceTime || e[53] !== F.untilTime
    ? ((We = F.sinceTime === void 0 || F.untilTime === void 0 ? [] : De(F.sinceTime, F.untilTime)),
      (e[52] = F.sinceTime),
      (e[53] = F.untilTime),
      (e[54] = We))
    : (We = e[54]);
  let Ke = We,
    Ye;
  e[55] !== C || e[56] !== V || e[57] !== b
    ? ((Ye =
        !C.has(`codex`) &&
        [...V].some((e) => {
          let [t, n] = e;
          return (b === null || b.has(t)) && (n.serverConfig?.providers ?? []).some(Ue);
        })),
      (e[55] = C),
      (e[56] = V),
      (e[57] = b),
      (e[58] = Ye))
    : (Ye = e[58]);
  let et = Ye,
    rt;
  e[59] !== i ||
  e[60] !== I ||
  e[61] !== F.sinceDay ||
  e[62] !== F.sinceTime ||
  e[63] !== F.timeZone ||
  e[64] !== F.untilDay ||
  e[65] !== F.untilTime
    ? ((rt =
        I && F.sinceTime !== void 0 && F.untilTime !== void 0
          ? `${Ee(F.sinceTime, F.timeZone, i)} to ${Ee(F.untilTime, F.timeZone, i)}`
          : `${Ce(F.sinceDay)} to ${Ce(F.untilDay)}`),
      (e[59] = i),
      (e[60] = I),
      (e[61] = F.sinceDay),
      (e[62] = F.sinceTime),
      (e[63] = F.timeZone),
      (e[64] = F.untilDay),
      (e[65] = F.untilTime),
      (e[66] = rt))
    : (rt = e[66]);
  let it = rt,
    at,
    st;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, $.jsx)(Xe, { children: (0, $.jsx)(`h1`, { children: `Usage` }) })),
      (st = (0, $.jsx)(Ze, {})),
      (e[67] = at),
      (e[68] = st))
    : ((at = e[67]), (st = e[68]));
  let ct = !d,
    ut;
  e[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = () => y({})), (e[69] = ut))
    : (ut = e[69]);
  let dt;
  e[70] !== O ||
  e[71] !== j ||
  e[72] !== P.contractMismatches ||
  e[73] !== P.duplicateSources ||
  e[74] !== R ||
  e[75] !== b ||
  e[76] !== k ||
  e[77] !== ct
    ? ((dt = (0, $.jsx)(Xe, {
        className: `min-w-10 shrink`,
        children: (0, $.jsx)(Ur, {
          environments: O,
          selectedEnvironments: k,
          selectedEnvironmentIds: b,
          onSelectionChange: x,
          showUsageStatus: ct,
          refreshing: R,
          isPartial: j,
          duplicateSources: P.duplicateSources,
          contractMismatches: P.contractMismatches,
          onOpenModelPrices: ut,
        }),
      })),
      (e[70] = O),
      (e[71] = j),
      (e[72] = P.contractMismatches),
      (e[73] = P.duplicateSources),
      (e[74] = R),
      (e[75] = b),
      (e[76] = k),
      (e[77] = ct),
      (e[78] = dt))
    : (dt = e[78]);
  let pt;
  e[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, $.jsx)(Ze, {})), (e[79] = pt))
    : (pt = e[79]);
  let mt;
  e[80] === q ? (mt = e[81]) : ((mt = (e) => q({ hiddenProviders: e })), (e[80] = q), (e[81] = mt));
  let ht;
  e[82] !== C || e[83] !== mt
    ? ((ht = (0, $.jsx)(Xe, {
        current: !0,
        className: `min-w-10`,
        children: (0, $.jsx)(Kr, { hiddenProviders: C, onChange: mt }),
      })),
      (e[82] = C),
      (e[83] = mt),
      (e[84] = ht))
    : (ht = e[84]);
  let gt;
  e[85] !== dt || e[86] !== ht
    ? ((gt = (0, $.jsxs)(Qe, {
        ariaLabel: `Usage breadcrumb`,
        className: `min-w-0`,
        children: [at, st, dt, pt, ht],
      })),
      (e[85] = dt),
      (e[86] = ht),
      (e[87] = gt))
    : (gt = e[87]);
  let _t;
  e[88] !== d || e[89] !== it
    ? ((_t = d
        ? null
        : (0, $.jsx)(`span`, {
            className: `hidden min-w-0 truncate text-xs text-muted-foreground @7xl/usage-header:block`,
            children: it,
          })),
      (e[88] = d),
      (e[89] = it),
      (e[90] = _t))
    : (_t = e[90]);
  let vt;
  e[91] === u ? (vt = e[92]) : ((vt = [u]), (e[91] = u), (e[92] = vt));
  let yt;
  e[93] === ve
    ? (yt = e[94])
    : ((yt = (e) => {
        let t = e[0];
        lr(t) && ve(t);
      }),
      (e[93] = ve),
      (e[94] = yt));
  let bt;
  e[95] === o
    ? (bt = e[96])
    : ((bt = Fe.map((e) =>
        (0, $.jsx)(Je, { value: e.value, title: o(e), children: e.label }, e.value),
      )),
      (e[95] = o),
      (e[96] = bt));
  let xt;
  e[97] !== vt || e[98] !== yt || e[99] !== bt
    ? ((xt = (0, $.jsx)(Le, {
        "aria-label": `Usage metric`,
        variant: `segmented`,
        value: vt,
        onValueChange: yt,
        children: bt,
      })),
      (e[97] = vt),
      (e[98] = yt),
      (e[99] = bt),
      (e[100] = xt))
    : (xt = e[100]);
  let St = String(w),
    Ct;
  e[101] === St ? (Ct = e[102]) : ((Ct = [St]), (e[101] = St), (e[102] = Ct));
  let wt;
  e[103] === ge
    ? (wt = e[104])
    : ((wt = (e) => {
        let t = e[0];
        t && ge(Number(t));
      }),
      (e[103] = ge),
      (e[104] = wt));
  let Tt;
  e[105] === o
    ? (Tt = e[106])
    : ((Tt = Ne.map((e) =>
        (0, $.jsx)(Je, { value: String(e.days), title: o(e), children: e.label }, e.days),
      )),
      (e[105] = o),
      (e[106] = Tt));
  let Et;
  e[107] !== d || e[108] !== Ct || e[109] !== wt || e[110] !== Tt
    ? ((Et = (0, $.jsx)(Le, {
        "aria-label": `Usage period`,
        variant: `segmented`,
        value: Ct,
        disabled: d,
        onValueChange: wt,
        children: Tt,
      })),
      (e[107] = d),
      (e[108] = Ct),
      (e[109] = wt),
      (e[110] = Tt),
      (e[111] = Et))
    : (Et = e[111]);
  let Dt = d ? `Refresh limits` : `Refresh usage`,
    Ot = f || (!d && !de),
    kt;
  e[112] === f
    ? (kt = e[113])
    : ((kt = (0, $.jsx)(Ie, { size: `sm`, refreshing: f })), (e[112] = f), (e[113] = kt));
  let At;
  e[114] !== f || e[115] !== Oe || e[116] !== Dt || e[117] !== Ot || e[118] !== kt
    ? ((At = (0, $.jsx)(m, {
        onClick: Oe,
        "aria-label": Dt,
        "aria-busy": f,
        disabled: Ot,
        size: `icon-sm`,
        variant: `ghost`,
        children: kt,
      })),
      (e[114] = f),
      (e[115] = Oe),
      (e[116] = Dt),
      (e[117] = Ot),
      (e[118] = kt),
      (e[119] = At))
    : (At = e[119]);
  let jt;
  e[120] !== xt || e[121] !== Et || e[122] !== At
    ? ((jt = (0, $.jsxs)(`div`, {
        className: `ms-auto hidden shrink-0 items-center justify-end gap-2 @4xl/usage-header:flex`,
        children: [xt, Et, At],
      })),
      (e[120] = xt),
      (e[121] = Et),
      (e[122] = At),
      (e[123] = jt))
    : (jt = e[123]);
  let Nt;
  e[124] === ve
    ? (Nt = e[125])
    : ((Nt = (e) => {
        lr(e) && ve(e);
      }),
      (e[124] = ve),
      (e[125] = Nt));
  let Pt;
  e[126] === u
    ? (Pt = e[127])
    : ((Pt = Fe.find((e) => e.value === u)?.label), (e[126] = u), (e[127] = Pt));
  let Ft;
  e[128] === Pt
    ? (Ft = e[129])
    : ((Ft = (0, $.jsx)(ae, {
        "aria-label": `Usage metric`,
        size: `compact`,
        variant: `ghost`,
        className: `w-auto min-w-0`,
        children: (0, $.jsx)(re, { children: Pt }),
      })),
      (e[128] = Pt),
      (e[129] = Ft));
  let It;
  e[130] === o
    ? (It = e[131])
    : ((It = Fe.map((e) =>
        (0, $.jsx)(ne, { value: e.value, title: o(e), children: e.label }, e.value),
      )),
      (e[130] = o),
      (e[131] = It));
  let Lt;
  e[132] === It
    ? (Lt = e[133])
    : ((Lt = (0, $.jsx)(ie, { align: `end`, alignItemWithTrigger: !1, children: It })),
      (e[132] = It),
      (e[133] = Lt));
  let Rt;
  e[134] !== u || e[135] !== Nt || e[136] !== Ft || e[137] !== Lt
    ? ((Rt = (0, $.jsxs)(oe, { value: u, onValueChange: Nt, children: [Ft, Lt] })),
      (e[134] = u),
      (e[135] = Nt),
      (e[136] = Ft),
      (e[137] = Lt),
      (e[138] = Rt))
    : (Rt = e[138]);
  let zt = String(w),
    Bt;
  e[139] === ge ? (Bt = e[140]) : ((Bt = (e) => ge(Number(e))), (e[139] = ge), (e[140] = Bt));
  let Vt;
  e[141] === w
    ? (Vt = e[142])
    : ((Vt = Ne.find((e) => e.days === w)?.label), (e[141] = w), (e[142] = Vt));
  let Ht;
  e[143] === Vt
    ? (Ht = e[144])
    : ((Ht = (0, $.jsx)(ae, {
        "aria-label": `Usage period`,
        size: `compact`,
        variant: `ghost`,
        className: `w-auto min-w-0`,
        children: (0, $.jsx)(re, { children: Vt }),
      })),
      (e[143] = Vt),
      (e[144] = Ht));
  let Ut;
  e[145] === o
    ? (Ut = e[146])
    : ((Ut = Ne.map((e) =>
        (0, $.jsx)(ne, { value: String(e.days), title: o(e), children: e.label }, e.days),
      )),
      (e[145] = o),
      (e[146] = Ut));
  let Wt;
  e[147] === Ut
    ? (Wt = e[148])
    : ((Wt = (0, $.jsx)(ie, { align: `end`, alignItemWithTrigger: !1, children: Ut })),
      (e[147] = Ut),
      (e[148] = Wt));
  let Gt;
  e[149] !== d || e[150] !== zt || e[151] !== Bt || e[152] !== Ht || e[153] !== Wt
    ? ((Gt = (0, $.jsxs)(oe, { value: zt, disabled: d, onValueChange: Bt, children: [Ht, Wt] })),
      (e[149] = d),
      (e[150] = zt),
      (e[151] = Bt),
      (e[152] = Ht),
      (e[153] = Wt),
      (e[154] = Gt))
    : (Gt = e[154]);
  let Kt = d ? `Refresh limits` : `Refresh usage`,
    qt = f || (!d && !de),
    Jt;
  e[155] === f
    ? (Jt = e[156])
    : ((Jt = (0, $.jsx)(Ie, { size: `sm`, refreshing: f })), (e[155] = f), (e[156] = Jt));
  let Yt;
  e[157] !== f || e[158] !== Oe || e[159] !== Kt || e[160] !== qt || e[161] !== Jt
    ? ((Yt = (0, $.jsx)(m, {
        onClick: Oe,
        "aria-label": Kt,
        "aria-busy": f,
        disabled: qt,
        size: `icon-sm`,
        variant: `ghost`,
        children: Jt,
      })),
      (e[157] = f),
      (e[158] = Oe),
      (e[159] = Kt),
      (e[160] = qt),
      (e[161] = Jt),
      (e[162] = Yt))
    : (Yt = e[162]);
  let Xt;
  e[163] !== Rt || e[164] !== Gt || e[165] !== Yt
    ? ((Xt = (0, $.jsxs)(`div`, {
        className: `ms-auto flex shrink-0 items-center justify-end gap-1 @4xl/usage-header:hidden`,
        children: [Rt, Gt, Yt],
      })),
      (e[163] = Rt),
      (e[164] = Gt),
      (e[165] = Yt),
      (e[166] = Xt))
    : (Xt = e[166]);
  let Zt;
  e[167] !== gt || e[168] !== _t || e[169] !== jt || e[170] !== Xt
    ? ((Zt = (0, $.jsxs)(`div`, {
        className: `grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 py-2 @4xl/usage-header:flex`,
        children: [gt, _t, jt, Xt],
      })),
      (e[167] = gt),
      (e[168] = _t),
      (e[169] = jt),
      (e[170] = Xt),
      (e[171] = Zt))
    : (Zt = e[171]);
  let Qt = Zt,
    $t;
  e[172] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (0, $.jsx)(tt, {})), (e[172] = $t))
    : ($t = e[172]);
  let en;
  e[173] === Qt
    ? (en = e[174])
    : ((en = (0, $.jsxs)(`header`, {
        className: `@container/usage-header flex min-h-12 shrink-0 items-center gap-1 border-b ps-5 pe-2`,
        children: [Qt, $t],
      })),
      (e[173] = Qt),
      (e[174] = en));
  let tn;
  e[175] !== de ||
  e[176] !== U ||
  e[177] !== He ||
  e[178] !== O ||
  e[179] !== C ||
  e[180] !== i ||
  e[181] !== Ke ||
  e[182] !== h ||
  e[183] !== P ||
  e[184] !== u ||
  e[185] !== N ||
  e[186] !== be ||
  e[187] !== R ||
  e[188] !== b ||
  e[189] !== k ||
  e[190] !== et ||
  e[191] !== z ||
  e[192] !== d ||
  e[193] !== A ||
  e[194] !== F
    ? ((tn = (0, $.jsx)(me, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)($e, {
          width: `wide`,
          children:
            k.length === 0
              ? (0, $.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children:
                    O.length === 0
                      ? `Connect an environment to see ${d ? `limits` : `usage`}.`
                      : `Select an environment to see ${d ? `limits` : `usage`}.`,
                })
              : d
                ? (0, $.jsx)(ot, {
                    selectedEnvironmentIds: b,
                    hiddenProviders: C,
                    now: h,
                    cursorPrompt:
                      U.length > 0
                        ? (0, $.jsx)(Pr, {
                            environments: U,
                            onEnabled: () => {
                              (N(), be(!1, !0));
                            },
                          })
                        : null,
                  })
                : A === null
                  ? (0, $.jsx)(qr, {})
                  : de
                    ? (0, $.jsx)(wr, {
                        merged: P,
                        shownWindow: F,
                        hour12: i,
                        days: He,
                        hours: Ke,
                        showingKept: z,
                        metric: u === `tokens` ? `tokens` : `cost`,
                        selectedEnvironments: k,
                        hiddenProviders: C,
                        refreshingUsage: R,
                        cursorAccessEnvironments: U,
                        showChatGptSharing: et,
                        onCursorEnabled: () => {
                          (N(), be(!1, !0));
                        },
                        onSelectModel: mr,
                      })
                    : (0, $.jsx)(`div`, {
                        className: `space-y-2 py-12 text-center text-sm text-muted-foreground`,
                        children: k.map((e) =>
                          (0, $.jsxs)(
                            `p`,
                            { children: [k.length > 1 ? `${e.label}: ` : null, e.error] },
                            e.environmentId,
                          ),
                        ),
                      }),
        }),
      })),
      (e[175] = de),
      (e[176] = U),
      (e[177] = He),
      (e[178] = O),
      (e[179] = C),
      (e[180] = i),
      (e[181] = Ke),
      (e[182] = h),
      (e[183] = P),
      (e[184] = u),
      (e[185] = N),
      (e[186] = be),
      (e[187] = R),
      (e[188] = b),
      (e[189] = k),
      (e[190] = et),
      (e[191] = z),
      (e[192] = d),
      (e[193] = A),
      (e[194] = F),
      (e[195] = tn))
    : (tn = e[195]);
  let rn;
  e[196] !== en || e[197] !== tn
    ? ((rn = (0, $.jsxs)(`div`, {
        className: `flex min-h-0 min-w-0 flex-1 flex-col`,
        children: [en, tn],
      })),
      (e[196] = en),
      (e[197] = tn),
      (e[198] = rn))
    : (rn = e[198]);
  let an;
  e[199] !== He ||
  e[200] !== i ||
  e[201] !== Ke ||
  e[202] !== P.models ||
  e[203] !== u ||
  e[204] !== k ||
  e[205] !== d ||
  e[206] !== I ||
  e[207] !== F.timeZone ||
  e[208] !== F.untilTime
    ? ((an = d
        ? null
        : (0, $.jsx)(hr, {
            models: P.models,
            environments: k,
            metric: u === `tokens` ? `tokens` : `cost`,
            chartWindow: {
              days: He,
              hours: Ke,
              resolution: I ? `hour` : `day`,
              timeZone: F.timeZone,
              referenceTime: F.untilTime,
              hour12: i,
            },
            onSetPrice: (e) => y({ model: e }),
          })),
      (e[199] = He),
      (e[200] = i),
      (e[201] = Ke),
      (e[202] = P.models),
      (e[203] = u),
      (e[204] = k),
      (e[205] = d),
      (e[206] = I),
      (e[207] = F.timeZone),
      (e[208] = F.untilTime),
      (e[209] = an))
    : (an = e[209]);
  let on;
  e[210] !== O || e[211] !== v || e[212] !== b
    ? ((on = v
        ? (0, $.jsx)(nn, {
            usage: O,
            initialSelectedEnvironmentIds: b,
            initialModel: v.model,
            onOpenChange: (e) => {
              e || y(null);
            },
          })
        : null),
      (e[210] = O),
      (e[211] = v),
      (e[212] = b),
      (e[213] = on))
    : (on = e[213]);
  let sn;
  return (
    e[214] !== rn || e[215] !== an || e[216] !== on
      ? ((sn = (0, $.jsxs)(nt, { label: `Usage`, children: [rn, an, on] })),
        (e[214] = rn),
        (e[215] = an),
        (e[216] = on),
        (e[217] = sn))
      : (sn = e[217]),
    sn
  );
}
function br(e) {
  let [t] = e;
  return t;
}
function xr(e) {
  return e.canReadDiagnostics;
}
function Sr() {
  return Date.now();
}
function Cr(e) {
  return pe(e.timestampFormat);
}
function wr(e) {
  let t = (0, Q.c)(193),
    {
      merged: n,
      shownWindow: r,
      hour12: i,
      days: a,
      hours: s,
      showingKept: c,
      metric: l,
      selectedEnvironments: u,
      hiddenProviders: d,
      refreshingUsage: f,
      cursorAccessEnvironments: p,
      showChatGptSharing: m,
      onCursorEnabled: h,
      onSelectModel: g,
    } = e,
    [_, v] = (0, Z.useState)(`model`),
    y = r.resolution === `hour`,
    x,
    S,
    C,
    w;
  if (t[0] !== d || t[1] !== n.providers || t[2] !== f || t[3] !== u || t[4] !== c) {
    let e = fr(c, u, f, d);
    ((x = e.partial === !0),
      (S = new Set(it.filter((t) => e.everyProvider || e.providers.has(t)))));
    let r;
    (t[9] === n.providers
      ? (r = t[10])
      : ((r = new Set(at(n.providers))), (t[9] = n.providers), (t[10] = r)),
      (C = r),
      (w = [...it].filter((t) => C.has(t) || e.providers.has(t))),
      (t[0] = d),
      (t[1] = n.providers),
      (t[2] = f),
      (t[3] = u),
      (t[4] = c),
      (t[5] = x),
      (t[6] = S),
      (t[7] = C),
      (t[8] = w));
  } else ((x = t[5]), (S = t[6]), (C = t[7]), (w = t[8]));
  let T = w,
    E;
  t[11] !== T || t[12] !== S
    ? ((E = new Set(T.filter((e) => S.has(e)))), (t[11] = T), (t[12] = S), (t[13] = E))
    : (E = t[13]);
  let D = E,
    O;
  if (t[14] !== d || t[15] !== u) {
    let e;
    (t[17] === d
      ? (e = t[18])
      : ((e = (e) =>
          e.summary?.sources.flatMap((e) =>
            e.message &&
            !e.action &&
            !d.has(e.fingerprint.provider) &&
            (e.status === `partial` || e.status === `failed` || e.fingerprint.provider === `cursor`)
              ? [e.message]
              : [],
          ) ?? []),
        (t[17] = d),
        (t[18] = e)),
      (O = new Set(u.flatMap(e))),
      (t[14] = d),
      (t[15] = u),
      (t[16] = O));
  } else O = t[16];
  let k;
  t[19] === O ? (k = t[20]) : ((k = [...O]), (t[19] = O), (t[20] = k));
  let A = k,
    j = y ? n.hourly : n.daily,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B;
  if (
    t[21] !== T ||
    t[22] !== _ ||
    t[23] !== D ||
    t[24] !== p ||
    t[25] !== a ||
    t[26] !== i ||
    t[27] !== s ||
    t[28] !== x ||
    t[29] !== S ||
    t[30] !== n ||
    t[31] !== l ||
    t[32] !== h ||
    t[33] !== g ||
    t[34] !== C ||
    t[35] !== u.length ||
    t[36] !== m ||
    t[37] !== y ||
    t[38] !== r.timeZone ||
    t[39] !== r.untilTime ||
    t[40] !== A ||
    t[41] !== j
  ) {
    let e = j.toReversed(),
      c;
    t[51] !== _ || t[52] !== n.models || t[53] !== l
      ? ((c = _ === `model` && l === `tokens` ? Gn(n.models) : n.models),
        (t[51] = _),
        (t[52] = n.models),
        (t[53] = l),
        (t[54] = c))
      : (c = t[54]);
    let d = c,
      f;
    t[55] === l
      ? (f = t[56])
      : ((f = (e, t) => Math.max(e, l === `tokens` ? t.totalTokens : t.costUsd)),
        (t[55] = l),
        (t[56] = f));
    let w = d.reduce(f, 0),
      E = Math.max(T.indexOf(`codex`), T.indexOf(`claude`)) + 1,
      O;
    t[57] !== T || t[58] !== E
      ? ((O = T.slice(0, E).map(Ar)), (t[57] = T), (t[58] = E), (t[59] = O))
      : (O = t[59]);
    let k;
    if (t[60] !== T || t[61] !== p || t[62] !== E || t[63] !== O) {
      let e = p.map(kr),
        n;
      (t[65] !== T || t[66] !== E
        ? ((n = T.slice(E).map(Or)), (t[65] = T), (t[66] = E), (t[67] = n))
        : (n = t[67]),
        (k = [...O, ...e, ...n]),
        (t[60] = T),
        (t[61] = p),
        (t[62] = E),
        (t[63] = O),
        (t[64] = k));
    } else k = t[64];
    let V = k;
    ((B = x),
      (M = `flex flex-col gap-6`),
      t[68] === A ? (N = t[69]) : ((N = A.map(Dr)), (t[68] = A), (t[69] = N)));
    let H;
    t[70] === x
      ? (H = t[71])
      : ((H = W(`text-4xl font-semibold text-foreground tabular-nums`, Ir(x))),
        (t[70] = x),
        (t[71] = H));
    let ee;
    t[72] !== n.costUsd || t[73] !== n.totalTokens || t[74] !== l
      ? ((ee = l === `cost` ? Y(n.costUsd) : X(n.totalTokens)),
        (t[72] = n.costUsd),
        (t[73] = n.totalTokens),
        (t[74] = l),
        (t[75] = ee))
      : (ee = t[75]);
    let U;
    t[76] !== H || t[77] !== ee
      ? ((U = (0, $.jsx)(`span`, { className: H, children: ee })),
        (t[76] = H),
        (t[77] = ee),
        (t[78] = U))
      : (U = t[78]);
    let te;
    t[79] === x ? (te = t[80]) : ((te = Ir(x)), (t[79] = x), (t[80] = te));
    let G;
    t[81] === n.sessions ? (G = t[82]) : ((G = ke(n.sessions)), (t[81] = n.sessions), (t[82] = G));
    let ne;
    t[83] !== te || t[84] !== G
      ? ((ne = (0, $.jsxs)(`span`, { className: te, children: [G, ` sessions`] })),
        (t[83] = te),
        (t[84] = G),
        (t[85] = ne))
      : (ne = t[85]);
    let re = l === `cost` && ` · API estimate`,
      ie;
    t[86] !== ne || t[87] !== re
      ? ((ie = (0, $.jsxs)(`span`, { children: [ne, re] })),
        (t[86] = ne),
        (t[87] = re),
        (t[88] = ie))
      : (ie = t[88]);
    let ae;
    t[89] !== n.costQuality.unpricedShare || t[90] !== l
      ? ((ae =
          l === `cost` &&
          n.costQuality.unpricedShare > 0 &&
          (0, $.jsxs)(He, {
            children: [
              (0, $.jsx)(Be, {
                openOnHover: !0,
                render: (0, $.jsx)(b, { tone: `muted` }),
                "aria-label": `Unpriced usage details`,
                children: (0, $.jsx)(o, { className: `size-3`, "aria-hidden": !0 }),
              }),
              (0, $.jsxs)(We, {
                side: `top`,
                tooltipStyle: !0,
                children: [
                  `API estimate excludes `,
                  Ae(n.costQuality.unpricedShare),
                  ` unpriced records.`,
                ],
              }),
            ],
          })),
        (t[89] = n.costQuality.unpricedShare),
        (t[90] = l),
        (t[91] = ae))
      : (ae = t[91]);
    let oe;
    t[92] !== ie || t[93] !== ae
      ? ((oe = (0, $.jsxs)(`span`, {
          className: `inline-flex items-center gap-1 text-xs text-muted-foreground`,
          children: [ie, ae],
        })),
        (t[92] = ie),
        (t[93] = ae),
        (t[94] = oe))
      : (oe = t[94]);
    let K;
    t[95] !== U || t[96] !== oe
      ? ((K = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [U, oe] })),
        (t[95] = U),
        (t[96] = oe),
        (t[97] = K))
      : (K = t[97]);
    let se;
    t[98] === m
      ? (se = t[99])
      : ((se = m
          ? (0, $.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2 text-xs text-muted-foreground`,
              children: [
                (0, $.jsx)(`span`, { children: `ChatGPT shared usage` }),
                (0, $.jsx)(Re, { size: `xs` }),
              ],
            })
          : null),
        (t[98] = m),
        (t[99] = se));
    let ce;
    t[100] !== S ||
    t[101] !== n.providers ||
    t[102] !== l ||
    t[103] !== h ||
    t[104] !== C ||
    t[105] !== u.length ||
    t[106] !== V
      ? ((ce = V.map((e) => {
          if (e.kind === `enable`)
            return (0, $.jsx)(
              Nr,
              {
                environmentId: e.environment.environmentId,
                label: e.environment.label,
                showEnvironment: u.length > 1,
                onEnabled: h,
              },
              `enable:${e.environment.environmentId}`,
            );
          let t = e.provider,
            r = n.providers.find((e) => e.provider === t),
            i = l === `cost` ? (r?.costShare ?? 0) : (r?.tokenShare ?? 0),
            a = r?.sessions ?? 0,
            o = `${ke(a)} ${a === 1 ? `session` : `sessions`}`,
            s = S.has(t),
            c = s && !C.has(t);
          return (0, $.jsxs)(
            `div`,
            {
              className: `flex flex-col gap-1`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline justify-between gap-4`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `flex min-w-0 items-center gap-2 text-sm text-foreground`,
                      children: [
                        (0, $.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: `size-2 shrink-0 rounded-full`,
                          style: { backgroundColor: rt[t].color },
                        }),
                        (0, $.jsx)(Fr, { provider: t, className: `size-4` }),
                        (0, $.jsxs)(`span`, {
                          className: `flex min-w-0 items-baseline gap-1.5`,
                          children: [
                            (0, $.jsx)(`span`, { className: `truncate`, children: rt[t].label }),
                            (0, $.jsx)(`span`, {
                              className: W(
                                `shrink-0 whitespace-nowrap text-2xs text-muted-foreground tabular-nums`,
                                Ir(s),
                                c && `invisible`,
                              ),
                              children: o,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`span`, {
                      className: W(
                        `shrink-0 text-sm font-medium text-foreground tabular-nums`,
                        Ir(s),
                      ),
                      children: c
                        ? `-`
                        : l === `cost`
                          ? Y(r?.costUsd ?? 0)
                          : X(r?.totalTokens ?? 0),
                    }),
                  ],
                }),
                (0, $.jsx)(`span`, {
                  className: W(`text-xs text-muted-foreground`, Ir(s), c && `invisible`),
                  children:
                    l === `cost`
                      ? `${Ae(i)} of cost · ${X(r?.totalTokens ?? 0)} tokens`
                      : `${Ae(i)} of tokens · ${Y(r?.costUsd ?? 0)}`,
                }),
              ],
            },
            t,
          );
        })),
        (t[100] = S),
        (t[101] = n.providers),
        (t[102] = l),
        (t[103] = h),
        (t[104] = C),
        (t[105] = u.length),
        (t[106] = V),
        (t[107] = ce))
      : (ce = t[107]);
    let le;
    t[108] !== K || t[109] !== se || t[110] !== ce
      ? ((le = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-5`,
          children: [K, se, ce],
        })),
        (t[108] = K),
        (t[109] = se),
        (t[110] = ce),
        (t[111] = le))
      : (le = t[111]);
    let ue = y ? `Hourly` : `Daily`,
      de = l === `tokens` ? `processed tokens` : `cost`,
      fe;
    t[112] !== ue || t[113] !== de
      ? ((fe = (0, $.jsxs)(`h2`, {
          className: `text-sm font-medium text-foreground`,
          children: [ue, ` `, de],
        })),
        (t[112] = ue),
        (t[113] = de),
        (t[114] = fe))
      : (fe = t[114]);
    let pe = y ? `hour` : `day`,
      q;
    t[115] !== T ||
    t[116] !== D ||
    t[117] !== a ||
    t[118] !== i ||
    t[119] !== s ||
    t[120] !== n.daily ||
    t[121] !== n.hourly ||
    t[122] !== l ||
    t[123] !== r.timeZone ||
    t[124] !== r.untilTime ||
    t[125] !== pe
      ? ((q = (0, $.jsx)(zn, {
          providers: T,
          loadingProviders: D,
          days: a,
          daily: n.daily,
          hours: s,
          hourly: n.hourly,
          metric: l,
          referenceTime: r.untilTime,
          resolution: pe,
          timeZone: r.timeZone,
          hour12: i,
        })),
        (t[115] = T),
        (t[116] = D),
        (t[117] = a),
        (t[118] = i),
        (t[119] = s),
        (t[120] = n.daily),
        (t[121] = n.hourly),
        (t[122] = l),
        (t[123] = r.timeZone),
        (t[124] = r.untilTime),
        (t[125] = pe),
        (t[126] = q))
      : (q = t[126]);
    let me;
    (t[127] !== fe || t[128] !== q
      ? ((me = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [fe, q] })),
        (t[127] = fe),
        (t[128] = q),
        (t[129] = me))
      : (me = t[129]),
      t[130] !== le || t[131] !== me
        ? ((P = (0, $.jsxs)(`section`, {
            className: `grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]`,
            children: [le, me],
          })),
          (t[130] = le),
          (t[131] = me),
          (t[132] = P))
        : (P = t[132]));
    let he;
    t[133] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((he = (0, $.jsx)(`h2`, {
          className: `text-sm font-medium text-foreground`,
          children: `Totals`,
        })),
        (t[133] = he))
      : (he = t[133]);
    let ge;
    t[134] === n.totalTokens
      ? (ge = t[135])
      : ((ge = X(n.totalTokens)), (t[134] = n.totalTokens), (t[135] = ge));
    let _e;
    t[136] !== x || t[137] !== ge
      ? ((_e = (0, $.jsx)(Lr, { loading: x, label: `Processed tokens`, value: ge })),
        (t[136] = x),
        (t[137] = ge),
        (t[138] = _e))
      : (_e = t[138]);
    let ve;
    t[139] === n.cachedInputTokens
      ? (ve = t[140])
      : ((ve = X(n.cachedInputTokens)), (t[139] = n.cachedInputTokens), (t[140] = ve));
    let ye;
    t[141] !== x || t[142] !== ve
      ? ((ye = (0, $.jsx)(Lr, { loading: x, label: `Cached input`, value: ve })),
        (t[141] = x),
        (t[142] = ve),
        (t[143] = ye))
      : (ye = t[143]);
    let be;
    t[144] === n.uncachedInputTokens
      ? (be = t[145])
      : ((be = X(n.uncachedInputTokens)), (t[144] = n.uncachedInputTokens), (t[145] = be));
    let xe;
    t[146] !== x || t[147] !== be
      ? ((xe = (0, $.jsx)(Lr, { loading: x, label: `Uncached input`, value: be })),
        (t[146] = x),
        (t[147] = be),
        (t[148] = xe))
      : (xe = t[148]);
    let J;
    t[149] === n.outputTokens
      ? (J = t[150])
      : ((J = X(n.outputTokens)), (t[149] = n.outputTokens), (t[150] = J));
    let Se;
    t[151] !== x || t[152] !== J
      ? ((Se = (0, $.jsx)(Lr, { loading: x, label: `Output`, value: J })),
        (t[151] = x),
        (t[152] = J),
        (t[153] = Se))
      : (Se = t[153]);
    let we;
    t[154] === n.costQuality.cacheSavingsUsd
      ? (we = t[155])
      : ((we = Y(n.costQuality.cacheSavingsUsd)),
        (t[154] = n.costQuality.cacheSavingsUsd),
        (t[155] = we));
    let Te;
    (t[156] !== x || t[157] !== we
      ? ((Te = (0, $.jsx)(Lr, { loading: x, label: `Cache savings`, value: we })),
        (t[156] = x),
        (t[157] = we),
        (t[158] = Te))
      : (Te = t[158]),
      t[159] !== _e || t[160] !== ye || t[161] !== xe || t[162] !== Se || t[163] !== Te
        ? ((F = (0, $.jsxs)(`section`, {
            className: `flex flex-col gap-2`,
            children: [
              he,
              (0, $.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-x-6 gap-y-4 py-1 md:grid-cols-5`,
                children: [_e, ye, xe, Se, Te],
              }),
            ],
          })),
          (t[159] = _e),
          (t[160] = ye),
          (t[161] = xe),
          (t[162] = Se),
          (t[163] = Te),
          (t[164] = F))
        : (F = t[164]),
      t[165] !== x || t[166] !== n || t[167] !== l
        ? ((I =
            n.totalTokens > 0
              ? (0, $.jsx)(`section`, {
                  className: W(`grid gap-x-12 gap-y-8 lg:grid-cols-2`, Ir(x)),
                  children:
                    l === `tokens`
                      ? (0, $.jsx)(Hn, { label: `Tokens by type`, segments: Qn(n), format: X })
                      : (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(Hn, {
                              label: `Cost by type`,
                              segments: Zn(n.categoryCost),
                              format: Y,
                            }),
                            n.speedCost.fast + n.speedCost.ultrafast > 0
                              ? (0, $.jsx)(Hn, {
                                  label: `Cost by speed`,
                                  segments: $n(n.speedCost),
                                  format: Y,
                                  aside: (0, $.jsx)(rr, { premiumUsd: n.speedCost.premium }),
                                })
                              : null,
                          ],
                        }),
                })
              : null),
          (t[165] = x),
          (t[166] = n),
          (t[167] = l),
          (t[168] = I))
        : (I = t[168]),
      (L = `flex flex-col gap-3`));
    let Ee;
    t[169] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ee = (0, $.jsx)(`h2`, {
          className: `text-sm font-medium text-foreground`,
          children: `Breakdown`,
        })),
        (t[169] = Ee))
      : (Ee = t[169]);
    let De;
    t[170] === _ ? (De = t[171]) : ((De = [_]), (t[170] = _), (t[171] = De));
    let je, Me;
    t[172] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((je = (e) => {
          let t = e[0];
          (t === `model` || t === `time`) && v(t);
        }),
        (Me = { value: `model`, label: `Model` }),
        (t[172] = je),
        (t[173] = Me))
      : ((je = t[172]), (Me = t[173]));
    let Ne = y ? `Hour` : `Day`,
      Pe;
    t[174] === Ne
      ? (Pe = t[175])
      : ((Pe = [Me, { value: `time`, label: Ne }]), (t[174] = Ne), (t[175] = Pe));
    let Fe = Pe,
      Ie;
    (t[176] === Fe ? (Ie = t[177]) : ((Ie = Fe.map(Er)), (t[176] = Fe), (t[177] = Ie)),
      t[178] !== De || t[179] !== Ie
        ? ((R = (0, $.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            children: [
              Ee,
              (0, $.jsx)(Le, {
                "aria-label": `Usage breakdown`,
                variant: `segmented`,
                value: De,
                onValueChange: je,
                children: Ie,
              }),
            ],
          })),
          (t[178] = De),
          (t[179] = Ie),
          (t[180] = R))
        : (R = t[180]),
      (z =
        _ === `model`
          ? (0, $.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, $.jsx)(`thead`, {
                  children: (0, $.jsxs)(`tr`, {
                    className: `border-b border-border text-right text-xs text-muted-foreground`,
                    children: [
                      (0, $.jsx)(`th`, {
                        className: `py-2 pr-3 text-left font-normal`,
                        children: `#`,
                      }),
                      (0, $.jsx)(`th`, {
                        className: `w-full py-2 text-left font-normal`,
                        children: `Model`,
                      }),
                      (0, $.jsx)(`th`, { className: `py-2 pl-6 font-normal`, children: `Cost` }),
                      (0, $.jsx)(`th`, {
                        className: `hidden py-2 pl-6 font-normal sm:table-cell`,
                        children: `Share`,
                      }),
                      (0, $.jsx)(`th`, { className: `py-2 pl-6 font-normal`, children: `Tokens` }),
                    ],
                  }),
                }),
                (0, $.jsx)(`tbody`, {
                  children:
                    d.length === 0
                      ? (0, $.jsx)(`tr`, {
                          children: (0, $.jsx)(`td`, {
                            colSpan: 5,
                            className: `py-6 text-center text-muted-foreground`,
                            children: `No activity in this window.`,
                          }),
                        })
                      : d.map((e, t) => {
                          let n = `${e.provider}:${e.model}`,
                            r = l === `tokens` ? e.totalTokens : e.costUsd,
                            i = r > 0 && w > 0,
                            a = Kn(e, l === `tokens` ? `tokens` : `cost`),
                            o = Ir(S.has(e.provider));
                          return (0, $.jsxs)(
                            `tr`,
                            {
                              className: `relative border-b border-border/50 text-right whitespace-nowrap text-muted-foreground tabular-nums transition-colors hover:bg-muted/50 has-focus-visible:bg-muted/50`,
                              children: [
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 pr-3 text-left text-xs`,
                                  children: t + 1,
                                }),
                                (0, $.jsxs)(`td`, {
                                  className: `py-2.5 text-left whitespace-normal`,
                                  children: [
                                    (0, $.jsxs)(`button`, {
                                      type: `button`,
                                      onClick: () => g(n),
                                      className: W(
                                        `flex items-center gap-2 text-left text-foreground outline-none after:absolute after:inset-0`,
                                        !i && `py-1`,
                                      ),
                                      children: [
                                        (0, $.jsx)(Fr, {
                                          provider: e.provider,
                                          className: `size-3.5`,
                                        }),
                                        e.model,
                                      ],
                                    }),
                                    i
                                      ? (0, $.jsx)(`div`, {
                                          "aria-hidden": !0,
                                          className: W(`mt-1.5 h-0.5 max-w-48`, o),
                                          children: (0, $.jsx)(`div`, {
                                            className: `h-full rounded-full`,
                                            style: {
                                              width: `max(0.5rem, ${(r / w) * 100}%)`,
                                              backgroundColor: rt[e.provider].color,
                                            },
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                                (0, $.jsx)(`td`, {
                                  className: W(`py-2.5 pl-6 text-foreground`, o),
                                  children: _t(e)
                                    ? (0, $.jsx)(`span`, {
                                        className: `text-muted-foreground`,
                                        children: `Unpriced`,
                                      })
                                    : Y(e.costUsd),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: W(`hidden py-2.5 pl-6 sm:table-cell`, o),
                                  children: a === null ? `` : Ae(a),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: W(`py-2.5 pl-6`, o),
                                  children: X(e.totalTokens),
                                }),
                              ],
                            },
                            n,
                          );
                        }),
                }),
              ],
            })
          : (0, $.jsx)(`div`, {
              className: `overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
              role: `region`,
              "aria-label": `Usage breakdown by time`,
              tabIndex: 0,
              children: (0, $.jsxs)(`table`, {
                className: `w-full text-sm whitespace-nowrap`,
                children: [
                  (0, $.jsx)(`colgroup`, { children: (0, $.jsx)(`col`, { className: `w-2/5` }) }),
                  (0, $.jsx)(`thead`, {
                    children: (0, $.jsxs)(`tr`, {
                      className: `border-b border-border text-left text-xs text-muted-foreground`,
                      children: [
                        (0, $.jsx)(`th`, {
                          className: `py-2 font-normal`,
                          children: y ? `Hour` : `Day`,
                        }),
                        T.map(Tr),
                        (0, $.jsx)(`th`, {
                          className: `py-2 pl-4 text-right font-normal`,
                          children: `Total`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2 pl-4 text-right font-normal`,
                          children: `Tokens`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(`tbody`, {
                    children:
                      e.length === 0
                        ? (0, $.jsx)(`tr`, {
                            children: (0, $.jsx)(`td`, {
                              colSpan: T.length + 3,
                              className: `py-6 text-center text-muted-foreground`,
                              children: `No activity in this window.`,
                            }),
                          })
                        : e.map((e) =>
                            (0, $.jsxs)(
                              `tr`,
                              {
                                className: `border-b border-border/50 transition-colors hover:bg-muted/50`,
                                children: [
                                  (0, $.jsx)(`td`, {
                                    className: `py-2 text-foreground`,
                                    children:
                                      `hourStart` in e ? Oe(e.hourStart, r.timeZone, i) : Ce(e.day),
                                  }),
                                  T.map((t) =>
                                    (0, $.jsx)(
                                      `td`,
                                      {
                                        className: W(
                                          `py-2 pl-4 text-right text-muted-foreground tabular-nums`,
                                          Ir(S.has(t)),
                                        ),
                                        children: Y(e.byProvider.get(t)?.costUsd ?? 0),
                                      },
                                      t,
                                    ),
                                  ),
                                  (0, $.jsx)(`td`, {
                                    className: W(
                                      `py-2 pl-4 text-right text-foreground tabular-nums`,
                                      Ir(x),
                                    ),
                                    children: Y(e.costUsd),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: W(
                                      `py-2 pl-4 text-right text-muted-foreground tabular-nums`,
                                      Ir(x),
                                    ),
                                    children: X(e.totalTokens),
                                  }),
                                ],
                              },
                              `hourStart` in e ? e.hourStart : e.day,
                            ),
                          ),
                  }),
                ],
              }),
            })),
      (t[21] = T),
      (t[22] = _),
      (t[23] = D),
      (t[24] = p),
      (t[25] = a),
      (t[26] = i),
      (t[27] = s),
      (t[28] = x),
      (t[29] = S),
      (t[30] = n),
      (t[31] = l),
      (t[32] = h),
      (t[33] = g),
      (t[34] = C),
      (t[35] = u.length),
      (t[36] = m),
      (t[37] = y),
      (t[38] = r.timeZone),
      (t[39] = r.untilTime),
      (t[40] = A),
      (t[41] = j),
      (t[42] = M),
      (t[43] = N),
      (t[44] = P),
      (t[45] = F),
      (t[46] = I),
      (t[47] = L),
      (t[48] = R),
      (t[49] = z),
      (t[50] = B));
  } else
    ((M = t[42]),
      (N = t[43]),
      (P = t[44]),
      (F = t[45]),
      (I = t[46]),
      (L = t[47]),
      (R = t[48]),
      (z = t[49]),
      (B = t[50]));
  let V;
  t[181] !== L || t[182] !== R || t[183] !== z
    ? ((V = (0, $.jsxs)(`section`, { className: L, children: [R, z] })),
      (t[181] = L),
      (t[182] = R),
      (t[183] = z),
      (t[184] = V))
    : (V = t[184]);
  let H;
  return (
    t[185] !== M ||
    t[186] !== N ||
    t[187] !== P ||
    t[188] !== F ||
    t[189] !== I ||
    t[190] !== V ||
    t[191] !== B
      ? ((H = (0, $.jsxs)(`div`, { "aria-busy": B, className: M, children: [N, P, F, I, V] })),
        (t[185] = M),
        (t[186] = N),
        (t[187] = P),
        (t[188] = F),
        (t[189] = I),
        (t[190] = V),
        (t[191] = B),
        (t[192] = H))
      : (H = t[192]),
    H
  );
}
function Tr(e) {
  return (0, $.jsx)(
    `th`,
    { className: `py-2 pl-4 text-right font-normal`, children: rt[e].label },
    e,
  );
}
function Er(e) {
  return (0, $.jsx)(Je, { value: e.value, children: e.label }, e.value);
}
function Dr(e) {
  return (0, $.jsx)(`p`, { className: `mb-4 text-sm text-muted-foreground`, children: e }, e);
}
function Or(e) {
  return { kind: `usage`, provider: e };
}
function kr(e) {
  return { kind: `enable`, environment: e };
}
function Ar(e) {
  return { kind: `usage`, provider: e };
}
var jr = `Requires access to your Cursor login in macOS Keychain.`;
function Mr(e) {
  let t = (0, Q.c)(16),
    { environmentId: n, label: r, onEnabled: i, tooltip: a, buttonText: o } = e,
    s = o === void 0 ? `Enable` : o,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { label: `enable Cursor account usage` }), (t[0] = c))
    : (c = t[0]);
  let l = fe(le.updateSettings, c),
    [u, d] = (0, Z.useState)(!1),
    p;
  t[1] !== n || t[2] !== i || t[3] !== l
    ? ((p = async () => {
        (d(!0),
          (await l({ environmentId: n, input: { patch: { cursorKeychainUsageEnabled: !0 } } }))
            ._tag === `Success` && i(),
          d(!1));
      }),
      (t[1] = n),
      (t[2] = i),
      (t[3] = l),
      (t[4] = p))
    : (p = t[4]);
  let h = p,
    g;
  t[5] !== s || t[6] !== h || t[7] !== r || t[8] !== u || t[9] !== a
    ? ((g = a
        ? (0, $.jsx)(b, {
            disabled: u,
            "aria-busy": u,
            "aria-label": `Enable Cursor usage from ${r}`,
            onClick: () => void h(),
            children: s,
          })
        : (0, $.jsx)(m, {
            size: `sm`,
            variant: `outline`,
            disabled: u,
            "aria-busy": u,
            "aria-label": `Enable Cursor usage from ${r}`,
            onClick: () => void h(),
            children: s,
          })),
      (t[5] = s),
      (t[6] = h),
      (t[7] = r),
      (t[8] = u),
      (t[9] = a),
      (t[10] = g))
    : (g = t[10]);
  let _ = g;
  if (!a) return _;
  let v;
  t[11] === _ ? (v = t[12]) : ((v = (0, $.jsx)(D, { render: _ })), (t[11] = _), (t[12] = v));
  let y;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(T, { children: jr })), (t[13] = y))
    : (y = t[13]);
  let x;
  return (
    t[14] === v
      ? (x = t[15])
      : ((x = (0, $.jsxs)(f, { children: [v, y] })), (t[14] = v), (t[15] = x)),
    x
  );
}
function Nr(e) {
  let t = (0, Q.c)(11),
    { environmentId: n, label: r, showEnvironment: i, onEnabled: a } = e,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-2 shrink-0 rounded-full`,
        style: { backgroundColor: rt.cursor.color },
      })),
      (s = (0, $.jsx)(Fr, { provider: `cursor`, className: `size-4` })),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c = i ? ` · ${r}` : ``,
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-sm text-foreground`,
        children: [o, s, (0, $.jsxs)(`span`, { className: `truncate`, children: [`Cursor`, c] })],
      })),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((u = (0, $.jsx)(Mr, { environmentId: n, label: r, onEnabled: a, tooltip: !0 })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 items-baseline justify-between gap-4 text-sm`,
          children: [l, u],
        })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Pr(e) {
  let t = (0, Q.c)(10),
    { environments: n, onEnabled: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsxs)(`h2`, {
        className: `flex items-center gap-2 text-sm font-medium text-foreground`,
        children: [
          (0, $.jsx)(Ke, {
            driverKind: O.make(`cursor`),
            displayName: `Cursor`,
            indicatorBackground: `var(--background)`,
            className: `size-5`,
            iconClassName: `size-4 text-foreground/80`,
          }),
          `Cursor`,
        ],
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: jr })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  if (t[2] !== n || t[3] !== r) {
    let e;
    (t[5] !== n.length || t[6] !== r
      ? ((e = (e) =>
          (0, $.jsx)(
            Mr,
            {
              environmentId: e.environmentId,
              label: e.label,
              buttonText: n.length > 1 ? `Enable on ${e.label}` : `Enable`,
              onEnabled: r,
              tooltip: !1,
            },
            e.environmentId,
          )),
        (t[5] = n.length),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.map(e)),
      (t[2] = n),
      (t[3] = r),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-3`,
          children: [
            i,
            (0, $.jsxs)(`div`, {
              className: `flex flex-col items-start gap-3 rounded-lg border border-border/60 p-4`,
              children: [a, (0, $.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: o })],
            }),
          ],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function Fr(e) {
  let t = (0, Q.c)(4),
    { provider: n, className: r } = e,
    i = rt[n],
    a;
  return (
    t[0] !== r || t[1] !== i.driverKind || t[2] !== i.label
      ? ((a = (0, $.jsx)(Ke, { driverKind: i.driverKind, displayName: i.label, iconClassName: r })),
        (t[0] = r),
        (t[1] = i.driverKind),
        (t[2] = i.label),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Ir(e) {
  return W(`transition-opacity`, e && `opacity-40 delay-150`);
}
function Lr(e) {
  let t = (0, Q.c)(10),
    { label: n, value: r, loading: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: n })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = W(`text-base font-medium text-foreground tabular-nums`, Ir(i))),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] !== o || t[5] !== r
    ? ((s = (0, $.jsx)(`span`, { className: o, children: r })), (t[4] = o), (t[5] = r), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== a || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-0.5`, children: [a, s] })),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Rr(e) {
  let t = (0, Q.c)(14),
    { environments: n, duplicateSources: r, contractMismatches: i } = e,
    a,
    o,
    s,
    c;
  if (t[0] !== i || t[1] !== r || t[2] !== n) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n.filter(Hr),
        t = new Map(i.map(Vr)),
        l = n.flatMap((e) => {
          let n = t.get(e.environmentId);
          return n === void 0 ? [] : [{ environment: e, mismatch: n }];
        });
      if (e.length === 0 && l.length === 0 && r.length === 0) {
        c = null;
        break bb0;
      }
      ((a = `flex flex-col gap-1 border-t border-border px-2 py-2 text-xs text-muted-foreground`),
        (o = e.map(Br)),
        (s = l.map(zr)));
    }
    ((t[0] = i), (t[1] = r), (t[2] = n), (t[3] = a), (t[4] = o), (t[5] = s), (t[6] = c));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let l;
  t[7] === r
    ? (l = t[8])
    : ((l =
        r.length > 0
          ? (0, $.jsxs)(`span`, {
              children: [
                `Counted once across environments sharing a transcript directory:`,
                ` `,
                r.join(`, `),
              ],
            })
          : null),
      (t[7] = r),
      (t[8] = l));
  let u;
  return (
    t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== l
      ? ((u = (0, $.jsxs)(`div`, { className: a, children: [o, s, l] })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function zr(e) {
  let { environment: t, mismatch: n } = e;
  return (0, $.jsx)(`span`, { children: Me(t.label, n) }, t.environmentId);
}
function Br(e) {
  return (0, $.jsxs)(`span`, { children: [e.label, `: `, e.error] }, e.label);
}
function Vr(e) {
  return [e.environmentId, e];
}
function Hr(e) {
  return e.error !== null;
}
function Ur(e) {
  let t = (0, Q.c)(56),
    {
      environments: n,
      selectedEnvironments: r,
      selectedEnvironmentIds: o,
      onSelectionChange: s,
      showUsageStatus: l,
      refreshing: u,
      isPartial: f,
      duplicateSources: p,
      contractMismatches: m,
      onOpenModelPrices: h,
    } = e,
    g = o === null,
    _ = g ? `All environments` : r.length === 1 ? r[0].label : `${r.length} environments`,
    v;
  t[0] !== m || t[1] !== r
    ? ((v = r.some(Gr) || m.length > 0), (t[0] = m), (t[1] = r), (t[2] = v))
    : (v = t[2]);
  let y = v,
    x;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(b, {})), (t[3] = x))
    : (x = t[3]);
  let C;
  t[4] === _ ? (C = t[5]) : ((C = (0, $.jsx)(Ye, { children: _ })), (t[4] = _), (t[5] = C));
  let w;
  t[6] !== y || t[7] !== l
    ? ((w = (0, $.jsx)(`span`, {
        className: `flex size-3.5 shrink-0 items-center justify-center text-muted-foreground`,
        children:
          l && y
            ? (0, $.jsx)(a, {
                className: `size-3.5 text-warning-foreground`,
                "aria-label": `Some environments could not report usage`,
              })
            : (0, $.jsx)(i, {
                className: `size-3.5 opacity-0 transition-opacity group-hover/usage-environment:opacity-100 group-focus-visible/usage-environment:opacity-100 group-data-popup-open/usage-environment:opacity-100`,
                "aria-hidden": !0,
              }),
      })),
      (t[6] = y),
      (t[7] = l),
      (t[8] = w))
    : (w = t[8]);
  let T;
  t[9] !== C || t[10] !== w
    ? ((T = (0, $.jsxs)(B, {
        render: x,
        className: `group/usage-environment min-w-0 max-w-full`,
        children: [C, w],
      })),
      (t[9] = C),
      (t[10] = w),
      (t[11] = T))
    : (T = t[11]);
  let E;
  t[12] === s ? (E = t[13]) : ((E = (e) => s(e ? null : new Set())), (t[12] = s), (t[13] = E));
  let D;
  t[14] !== g || t[15] !== E
    ? ((D = (0, $.jsx)(d, {
        checked: g,
        closeOnClick: !1,
        onCheckedChange: E,
        children: `All environments`,
      })),
      (t[14] = g),
      (t[15] = E),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(z, {})), (t[17] = O))
    : (O = t[17]);
  let k;
  if (t[18] !== n || t[19] !== s || t[20] !== u || t[21] !== o || t[22] !== r || t[23] !== l) {
    let e;
    (t[25] !== n.length || t[26] !== s || t[27] !== u || t[28] !== o || t[29] !== r || t[30] !== l
      ? ((e = (e) => {
          let t = o === null || o.has(e.environmentId),
            i = mt(e, u),
            a =
              e.error === null
                ? e.summary !== null && !wt(e.summary.contractVersion, 6)
                  ? `Update required`
                  : e.isConnected
                    ? i.phase === `loading`
                      ? `Scanning…`
                      : i.phase === `stale`
                        ? `Refreshing…`
                        : i.phase === `partway`
                          ? ht(i.providers, dr)
                          : `Ready`
                    : `Connecting…`
                : `Unavailable`;
          return (0, $.jsx)(
            d,
            {
              checked: t,
              closeOnClick: !1,
              onCheckedChange: (t) => {
                let i = new Set(r.map(Wr));
                (t ? i.add(e.environmentId) : i.delete(e.environmentId),
                  s(i.size === n.length ? null : i));
              },
              children: (0, $.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-3`,
                children: [
                  (0, $.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e.label }),
                  l
                    ? (0, $.jsx)(`span`, {
                        className: W(
                          `shrink-0 text-xs text-muted-foreground`,
                          e.error !== null && `text-destructive`,
                        ),
                        children: a,
                      })
                    : null,
                ],
              }),
            },
            e.environmentId,
          );
        }),
        (t[25] = n.length),
        (t[26] = s),
        (t[27] = u),
        (t[28] = o),
        (t[29] = r),
        (t[30] = l),
        (t[31] = e))
      : (e = t[31]),
      (k = n.map(e)),
      (t[18] = n),
      (t[19] = s),
      (t[20] = u),
      (t[21] = o),
      (t[22] = r),
      (t[23] = l),
      (t[24] = k));
  } else k = t[24];
  let A;
  t[32] === n.length
    ? (A = t[33])
    : ((A =
        n.length === 0
          ? (0, $.jsx)(`p`, {
              className: `px-2 py-2 text-xs text-muted-foreground`,
              children: `No environments connected.`,
            })
          : null),
      (t[32] = n.length),
      (t[33] = A));
  let j;
  t[34] !== f || t[35] !== l
    ? ((j =
        l && f
          ? (0, $.jsx)(`p`, {
              className: `px-2 py-2 text-xs text-muted-foreground`,
              children: `Totals are partial while selected environments scan.`,
            })
          : null),
      (t[34] = f),
      (t[35] = l),
      (t[36] = j))
    : (j = t[36]);
  let M;
  t[37] !== m || t[38] !== p || t[39] !== r || t[40] !== l
    ? ((M = l
        ? (0, $.jsx)(Rr, { environments: r, duplicateSources: p, contractMismatches: m })
        : null),
      (t[37] = m),
      (t[38] = p),
      (t[39] = r),
      (t[40] = l),
      (t[41] = M))
    : (M = t[41]);
  let N;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(z, {})), (t[42] = N))
    : (N = t[42]);
  let P;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(c, { "aria-hidden": !0 })), (t[43] = P))
    : (P = t[43]);
  let I;
  t[44] === h
    ? (I = t[45])
    : ((I = (0, $.jsxs)(V, { onClick: h, children: [P, `Model prices`] })),
      (t[44] = h),
      (t[45] = I));
  let L;
  t[46] !== A || t[47] !== j || t[48] !== M || t[49] !== I || t[50] !== D || t[51] !== k
    ? ((L = (0, $.jsxs)(F, { align: `start`, children: [D, O, k, A, j, M, N, I] })),
      (t[46] = A),
      (t[47] = j),
      (t[48] = M),
      (t[49] = I),
      (t[50] = D),
      (t[51] = k),
      (t[52] = L))
    : (L = t[52]);
  let R;
  return (
    t[53] !== L || t[54] !== T
      ? ((R = (0, $.jsxs)(S, { children: [T, L] })), (t[53] = L), (t[54] = T), (t[55] = R))
      : (R = t[55]),
    R
  );
}
function Wr(e) {
  return e.environmentId;
}
function Gr(e) {
  return e.error !== null;
}
function Kr(e) {
  let t = (0, Q.c)(23),
    { hiddenProviders: n, onChange: r } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = it.filter((e) => !n.has(e))), (t[0] = n), (t[1] = a));
  let o = a,
    s =
      o.length === it.length
        ? `All providers`
        : o.length === 0
          ? `No providers`
          : o.length === 1
            ? rt[o[0]].label
            : `${o.length} providers`,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(b, {})), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: s })),
      (t[3] = s),
      (t[4] = l));
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(i, {
        className: `size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/usage-provider:opacity-100 group-focus-visible/usage-provider:opacity-100 group-data-popup-open/usage-provider:opacity-100`,
        "aria-hidden": !0,
      })),
      (t[5] = u))
    : (u = t[5]);
  let f;
  t[6] === l
    ? (f = t[7])
    : ((f = (0, $.jsxs)(B, {
        render: c,
        className: `group/usage-provider min-w-0 max-w-full`,
        children: [l, u],
      })),
      (t[6] = l),
      (t[7] = f));
  let p = n.size === 0,
    m;
  t[8] === r ? (m = t[9]) : ((m = (e) => r(e ? [] : it)), (t[8] = r), (t[9] = m));
  let h;
  t[10] !== p || t[11] !== m
    ? ((h = (0, $.jsx)(d, {
        checked: p,
        closeOnClick: !1,
        onCheckedChange: m,
        children: `All providers`,
      })),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(z, {})), (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== n || t[15] !== r
    ? ((_ = it.map((e) =>
        (0, $.jsx)(
          d,
          {
            checked: !n.has(e),
            closeOnClick: !1,
            onCheckedChange: (t) => r(it.filter((r) => (r === e ? !t : n.has(r)))),
            children: (0, $.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, $.jsx)(Fr, { provider: e, className: `size-3.5` }),
                (0, $.jsx)(`span`, { className: `truncate`, children: rt[e].label }),
              ],
            }),
          },
          e,
        ),
      )),
      (t[14] = n),
      (t[15] = r),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== _ || t[18] !== h
    ? ((v = (0, $.jsxs)(F, { align: `start`, children: [h, g, _] })),
      (t[17] = _),
      (t[18] = h),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== v || t[21] !== f
      ? ((y = (0, $.jsxs)(S, { children: [f, v] })), (t[20] = v), (t[21] = f), (t[22] = y))
      : (y = t[22]),
    y
  );
}
function qr() {
  let e = (0, Q.c)(7),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [
              (0, $.jsx)(q, { className: `h-10 w-36` }),
              (0, $.jsx)(q, { className: `h-4 w-32` }),
            ],
          }),
          it.map(Jr),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(q, { className: `h-5 w-24` })), (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsxs)(`section`, {
        className: `grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]`,
        children: [
          t,
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              n,
              (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [
                  (0, $.jsx)(q, { className: `ml-16 h-56` }),
                  (0, $.jsx)(q, { className: `ml-16 h-4` }),
                ],
              }),
            ],
          }),
        ],
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`h2`, {
        className: `text-sm font-medium text-foreground`,
        children: `Totals`,
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsxs)(`section`, {
        className: `flex flex-col gap-2`,
        children: [
          i,
          (0, $.jsx)(Yr, {
            labels: [
              `Processed tokens`,
              `Cached input`,
              `Uncached input`,
              `Output`,
              `Cache savings`,
            ],
          }),
        ],
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`section`, {
        className: `grid gap-x-12 gap-y-8 lg:grid-cols-2`,
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-2.5`,
          children: [
            (0, $.jsx)(q, { className: `h-5 w-28` }),
            (0, $.jsx)(q, { className: `h-2` }),
            (0, $.jsx)(q, { className: `h-4 w-72` }),
          ],
        }),
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsxs)($.Fragment, {
          children: [
            r,
            a,
            o,
            (0, $.jsxs)(`section`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3`,
                  children: [
                    (0, $.jsx)(`h2`, {
                      className: `text-sm font-medium text-foreground`,
                      children: `Breakdown`,
                    }),
                    (0, $.jsx)(q, { shape: `card`, className: `h-7 w-28` }),
                  ],
                }),
                (0, $.jsx)(q, { className: `h-44` }),
              ],
            }),
          ],
        })),
        (e[6] = s))
      : (s = e[6]),
    s
  );
}
function Jr(e) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex min-h-5 items-center justify-between gap-4`,
          children: [
            (0, $.jsxs)(`span`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(q, { shape: `pill`, className: `size-2 shrink-0` }),
                (0, $.jsx)(q, { shape: `pill`, className: `size-4 shrink-0` }),
                (0, $.jsx)(q, { className: `h-3.5 w-20` }),
              ],
            }),
            (0, $.jsx)(q, { className: `h-3.5 w-14` }),
          ],
        }),
        (0, $.jsx)(q, { className: `h-4 w-36` }),
      ],
    },
    e,
  );
}
function Yr(e) {
  let t = (0, Q.c)(4),
    { labels: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(Xr)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(`div`, {
          className: `grid grid-cols-2 gap-x-6 gap-y-4 py-1 md:grid-cols-5`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function Xr(e) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-0.5`,
      children: [
        (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: e }),
        (0, $.jsx)(q, { className: `h-6 w-16` }),
      ],
    },
    e,
  );
}
var Zr = yr;
export { Zr as component };
//# sourceMappingURL=_chat.usage-TzoHGhpX.js.map
