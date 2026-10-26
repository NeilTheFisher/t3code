import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { r as i } from "./search-BrluOr7L.js";
import { a, i as o, n as s, o as c, r as l, t as u } from "./memory-stick-DXDDCg1d.js";
import { n as d, t as f } from "./triangle-alert-Ca4wixX0.js";
import { t as p } from "./copy-Bc5Lby2a.js";
import { t as m } from "./hard-drive-p5S5WHA7.js";
import {
  Bn as h,
  Dr as g,
  E_ as _,
  JC as v,
  Mc as y,
  Ob as b,
  Or as x,
  T_ as S,
  VC as C,
  Vn as w,
  Wn as T,
  XC as E,
  Xl as D,
  _r as O,
  ew as ee,
  iu as te,
  j_ as ne,
  jc as re,
  qC as ie,
  t as k,
  zS as A,
} from "./utils-CPoejuy5.js";
import { n as j, t as M } from "./MorphIcon-DCVwjy7i.js";
import { N } from "./useSettings-N-JG2LFZ.js";
import { m as P } from "./server-3D32GveR.js";
import { a as ae, r as oe, t as se } from "./session-0UrRHIau.js";
import { n as F } from "./query-LKSVgBQH.js";
import { t as ce } from "./use-atom-command-DGAuqAck.js";
import { t as le } from "./localApi-CWy6n-K6.js";
import { g as I, i as ue } from "./toast-B4KPIJDZ.js";
import { t as L } from "./scroll-area-B6188Bq9.js";
import { t as R } from "./useRelativeTimeState-De-F8N-l.js";
import { t as z } from "./ConnectionStatusDot-Cd6v52Ns.js";
import { $c as B, Bs as V, Mi as de, Zc as fe, yr as H, zs as pe } from "./main-BZa0O6xN.js";
import { g as me, i as he, s as U, x as ge } from "./settingsLayout-2i87rQY9.js";
import { t as _e } from "./usageAccess-Du6DzPyC.js";
import { t as ve } from "./ExpandableText-B3D1_vq-.js";
import { t as ye } from "./SettingsScopeNotice-DSMhWXDE.js";
var W = n(),
  G = e(r(), 1);
function be(e) {
  let t = (0, W.c)(19),
    { disabled: n, onSignal: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = () => r(`SIGINT`)), (t[0] = r), (t[1] = i));
  let a;
  t[2] !== n || t[3] !== i
    ? ((a = (0, G.jsx)(T, {
        render: (0, G.jsx)(x, {
          disabled: n,
          "aria-label": `Send SIGINT`,
          tone: `muted`,
          onClick: i,
          children: `INT`,
        }),
      })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(w, { side: `top`, children: `Send SIGINT` })), (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] === a ? (s = t[7]) : ((s = (0, G.jsxs)(h, { children: [a, o] })), (t[6] = a), (t[7] = s));
  let c;
  t[8] === r ? (c = t[9]) : ((c = () => r(`SIGKILL`)), (t[8] = r), (t[9] = c));
  let l;
  t[10] !== n || t[11] !== c
    ? ((l = (0, G.jsx)(T, {
        render: (0, G.jsx)(x, {
          disabled: n,
          "aria-label": `Send SIGKILL`,
          tone: `destructive`,
          onClick: c,
          children: `KILL`,
        }),
      })),
      (t[10] = n),
      (t[11] = c),
      (t[12] = l))
    : (l = t[12]);
  let u;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(w, { side: `top`, children: `Send SIGKILL` })), (t[13] = u))
    : (u = t[13]);
  let d;
  t[14] === l
    ? (d = t[15])
    : ((d = (0, G.jsxs)(h, { children: [l, u] })), (t[14] = l), (t[15] = d));
  let f;
  return (
    t[16] !== s || t[17] !== d
      ? ((f = (0, G.jsxs)(`div`, {
          className: `flex items-center justify-end gap-1.5`,
          children: [s, d],
        })),
        (t[16] = s),
        (t[17] = d),
        (t[18] = f))
      : (f = t[18]),
    f
  );
}
var K = e(t(), 1),
  q = j();
function xe(e) {
  let t = (0, W.c)(11),
    n = N(),
    r = e === void 0 ? (n?.environmentId ?? null) : e,
    i = ae(r, S),
    a;
  t[0] !== i || t[1] !== r
    ? ((a = r === null || !i ? null : P.resourceTelemetry({ environmentId: r, input: {} })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o = F(a),
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { reportFailure: !1 }), (t[3] = s))
    : (s = t[3]);
  let c = ce(P.retryResourceTelemetry, s),
    l;
  t[4] !== r || t[5] !== o || t[6] !== c
    ? ((l = async () => {
        if (r === null) throw Error(`No environment is selected.`);
        if (!oe(r, `environment:maintain`) || !oe(r, `diagnostics:read`))
          throw Error(`This connection cannot restart the resource monitor.`);
        let e = await c({ environmentId: r, input: {} });
        if (e._tag === `Failure`) throw A(e.cause);
        return (o.refresh(), e.value.snapshot);
      }),
      (t[4] = r),
      (t[5] = o),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u = l,
    d;
  return (
    t[8] !== o || t[9] !== u
      ? ((d = { ...o, retry: u }), (t[8] = o), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Se(e, t) {
  let n = (0, W.c)(4),
    r = N(),
    i = t === void 0 ? (r?.environmentId ?? null) : t,
    a = ae(i, S),
    o;
  return (
    n[0] !== a || n[1] !== i || n[2] !== e
      ? ((o = i === null || !a ? null : P.resourceTelemetryHistory({ environmentId: i, input: e })),
        (n[0] = a),
        (n[1] = i),
        (n[2] = e),
        (n[3] = o))
      : (o = n[3]),
    F(o)
  );
}
function Ce(e) {
  return `${e.identity.pid}:${e.identity.startTimeMs}`;
}
function we(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = n.get(t.ppid) ?? [];
    (e.push(t), n.set(t.ppid, e));
  }
  let r = new Set(),
    i = (e) => {
      for (let t of n.get(e) ?? []) {
        let e = Ce(t);
        r.has(e) || (r.add(e), i(t.identity.pid));
      }
    };
  for (let n of e) t.has(Ce(n)) && i(n.identity.pid);
  return e.filter((e) => !r.has(Ce(e)));
}
function Te(e) {
  return (
    (e.nativeStatus === null && e.error !== null) ||
    e.nativeStatus === `degraded` ||
    e.nativeStatus === `unavailable` ||
    e.nativeStatus === `stopped`
  );
}
function Ee(e) {
  return e.value <= 0 ? 0 : Math.max(e.minimumVisiblePercent, (e.value / Math.max(1, e.max)) * 100);
}
function J(e) {
  return Math.max(1, ...e.map((e) => e.avgCpuPercent));
}
var De = [
  { label: `5m`, windowMs: 3e5, bucketMs: 15e3 },
  { label: `15m`, windowMs: 9e5, bucketMs: 3e4 },
  { label: `30m`, windowMs: 18e5, bucketMs: 6e4 },
  { label: `1h`, windowMs: 36e5, bucketMs: 12e4 },
];
function Oe(e) {
  return `${H(e)}/s`;
}
function ke(e) {
  let t = e / 1e3;
  if (t < 60) return `${t.toFixed(t >= 10 ? 1 : 2)}s`;
  let n = t / 60;
  return n < 60 ? `${n.toFixed(n >= 10 ? 1 : 2)}m` : `${(n / 60).toFixed(2)}h`;
}
function Ae(e) {
  return e < 1e3
    ? `${Math.round(e)} µs`
    : e < 1e6
      ? `${(e / 1e3).toFixed(2)} ms`
      : `${(e / 1e6).toFixed(2)} s`;
}
function je(e) {
  if (e < 1e3) return `${Math.max(0, Math.round(e))} ms`;
  let t = e / 1e3;
  return `${t.toLocaleString(void 0, { maximumFractionDigits: 1 })} ${t === 1 ? `second` : `seconds`}`;
}
function Me(e) {
  return `${e.identity.pid}:${e.identity.startTimeMs}`;
}
function Ne(e) {
  return `${e.identity.pid}:${e.identity.startTimeMs}`;
}
function Pe(e) {
  if (e.name.trim()) return e.name;
  let t = (e.command.trim().split(/\s+/)[0] ?? e.command).replace(/^['"]|['"]$/g, ``);
  return t.split(/[\\/]/).findLast((e) => e.length > 0) ?? t;
}
function Fe(e) {
  switch (e) {
    case `server`:
      return `Server`;
    case `server-child`:
      return `Backend child`;
    case `provider-root`:
      return `Provider`;
    case `terminal-root`:
      return `Terminal`;
    case `electron-main`:
      return `Electron main`;
    case `electron-renderer`:
      return `Renderer`;
    case `electron-gpu`:
      return `GPU`;
    case `electron-utility`:
      return `Electron utility`;
    case `resource-monitor`:
      return `Monitor`;
    case `unknown-t3`:
      return `T3 process`;
  }
}
function Ie(e) {
  return e === `resource-monitor`
    ? `bg-warning`
    : e.startsWith(`electron-`)
      ? `bg-info`
      : e === `server`
        ? `bg-violet-500`
        : `bg-success`;
}
function Le(e) {
  switch (e) {
    case `storage`:
      return `Storage bytes`;
    case `logical`:
      return `Logical bytes`;
    case `all-io`:
      return `All I/O bytes`;
    case `unavailable`:
      return `Unavailable`;
  }
}
function Re(e, t) {
  return e === `true` ? t.true : e === `false` ? t.false : `Unknown`;
}
function ze(e) {
  return e === `healthy` ? `default` : e === `starting` || e === `degraded` ? `warning` : `danger`;
}
function Be(e) {
  let t = (0, W.c)(20),
    { label: n, status: r, presentation: i } = e,
    a;
  t[0] !== i?.tone || t[1] !== r
    ? ((a = i?.tone ?? ze(r)), (t[0] = i?.tone), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s = o === `neutral` && `border-border/70 bg-muted/45 text-muted-foreground`,
    c = o === "default" && `border-success/25 bg-success/10 text-success-foreground`,
    l = o === `warning` && `border-warning/30 bg-warning/10 text-warning-foreground`,
    u = o === `danger` && `border-destructive/30 bg-destructive/10 text-destructive`,
    d;
  t[3] !== s || t[4] !== c || t[5] !== l || t[6] !== u
    ? ((d = k(
        `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-3xs font-semibold uppercase tracking-widest`,
        s,
        c,
        l,
        u,
      )),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f = o === `neutral` && `bg-muted-foreground/55`,
    p = o === "default" && `bg-success`,
    m = o === `warning` && `bg-warning`,
    h = o === `danger` && `bg-destructive`,
    g;
  t[8] !== h || t[9] !== f || t[10] !== p || t[11] !== m
    ? ((g = k(`size-1.5 rounded-full`, f, p, m, h)),
      (t[8] = h),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === g
    ? (_ = t[14])
    : ((_ = (0, G.jsx)(`span`, { className: g })), (t[13] = g), (t[14] = _));
  let v = i?.label ?? r,
    y;
  return (
    t[15] !== n || t[16] !== _ || t[17] !== v || t[18] !== d
      ? ((y = (0, G.jsxs)(`span`, { className: d, children: [_, n, ` `, v] })),
        (t[15] = n),
        (t[16] = _),
        (t[17] = v),
        (t[18] = d),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
function Ve(e) {
  let t = (0, W.c)(8),
    { sampledAt: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n ? b(n) : null), (t[0] = n), (t[1] = r));
  let i = R(r);
  if (i.status !== `relative`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`span`, {
            className: `text-2xs text-muted-foreground/55`,
            children: `Waiting for sample`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  t[3] === i.value
    ? (a = t[4])
    : ((a = (0, G.jsx)(`span`, { className: `font-mono tabular-nums`, children: i.value })),
      (t[3] = i.value),
      (t[4] = a));
  let o = i.suffix ? ` ${i.suffix}` : ``,
    s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, G.jsxs)(`span`, {
          className: `text-2xs text-muted-foreground/60`,
          children: [`Updated `, a, o],
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function He(e) {
  let t = (0, W.c)(19),
    { icon: n, label: r, value: i, detail: a, tone: o } = e,
    s = o === void 0 ? `default` : o,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c = (0, G.jsx)(`span`, {
        className: `text-muted-foreground/55 transition-colors group-hover:text-foreground/65`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = c));
  let l;
  t[2] === r
    ? (l = t[3])
    : ((l = (0, G.jsx)(`span`, { className: `truncate`, children: r })), (t[2] = r), (t[3] = l));
  let u;
  t[4] !== c || t[5] !== l
    ? ((u = (0, G.jsxs)(`div`, {
        className: `flex items-center gap-2 text-3xs font-semibold uppercase tracking-widest text-muted-foreground/70`,
        children: [c, l],
      })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d = s === `warning` && `text-warning-foreground`,
    f = s === `danger` && `text-destructive`,
    p;
  t[7] !== d || t[8] !== f
    ? ((p = k(
        `mt-2.5 truncate font-mono text-2xl font-semibold tracking-tighter tabular-nums text-foreground`,
        d,
        f,
      )),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== p || t[11] !== i
    ? ((m = (0, G.jsx)(`div`, { className: p, children: i })),
      (t[10] = p),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === a
    ? (h = t[14])
    : ((h = a
        ? (0, G.jsx)(`div`, {
            className: `mt-1.5 truncate text-3xs text-muted-foreground/60`,
            children: a,
          })
        : null),
      (t[13] = a),
      (t[14] = h));
  let g;
  return (
    t[15] !== u || t[16] !== m || t[17] !== h
      ? ((g = (0, G.jsxs)(`div`, {
          className: `group min-w-0 px-4 py-4 sm:px-5`,
          children: [u, m, h],
        })),
        (t[15] = u),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function Ue(e) {
  let t = (0, W.c)(37),
    { label: n, accentClass: r, aggregate: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = k(`absolute inset-x-5 top-0 h-0.5 rounded-full opacity-75`, r)),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === a ? (o = t[3]) : ((o = (0, G.jsx)(`span`, { className: a })), (t[2] = a), (t[3] = o));
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, G.jsx)(`div`, {
        className: `text-3xs font-semibold uppercase tracking-widest text-muted-foreground/75`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = s));
  let c = i.processCount === 1 ? `process` : `processes`,
    l;
  t[6] !== i.processCount || t[7] !== c
    ? ((l = (0, G.jsxs)(`div`, {
        className: `rounded-md bg-muted/55 px-1.5 py-0.5 font-mono text-3xs tabular-nums text-muted-foreground/70`,
        children: [i.processCount, ` `, c],
      })),
      (t[6] = i.processCount),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] !== s || t[10] !== l
    ? ((u = (0, G.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [s, l],
      })),
      (t[9] = s),
      (t[10] = l),
      (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === i.currentCpuPercent
    ? (d = t[13])
    : ((d = i.currentCpuPercent.toFixed(1)), (t[12] = i.currentCpuPercent), (t[13] = d));
  let f = `${d}%`,
    p;
  t[14] === f
    ? (p = t[15])
    : ((p = (0, G.jsx)(Y, { label: `CPU`, value: f })), (t[14] = f), (t[15] = p));
  let m;
  t[16] === i.currentRssBytes
    ? (m = t[17])
    : ((m = H(i.currentRssBytes)), (t[16] = i.currentRssBytes), (t[17] = m));
  let h;
  t[18] === m
    ? (h = t[19])
    : ((h = (0, G.jsx)(Y, { label: `Memory`, value: m })), (t[18] = m), (t[19] = h));
  let g;
  t[20] === i.ioReadBytesPerSecond
    ? (g = t[21])
    : ((g = Oe(i.ioReadBytesPerSecond)), (t[20] = i.ioReadBytesPerSecond), (t[21] = g));
  let _;
  t[22] === g
    ? (_ = t[23])
    : ((_ = (0, G.jsx)(Y, { label: `Read`, value: g })), (t[22] = g), (t[23] = _));
  let v;
  t[24] === i.ioWriteBytesPerSecond
    ? (v = t[25])
    : ((v = Oe(i.ioWriteBytesPerSecond)), (t[24] = i.ioWriteBytesPerSecond), (t[25] = v));
  let y;
  t[26] === v
    ? (y = t[27])
    : ((y = (0, G.jsx)(Y, { label: `Write`, value: v })), (t[26] = v), (t[27] = y));
  let b;
  t[28] !== h || t[29] !== _ || t[30] !== y || t[31] !== p
    ? ((b = (0, G.jsxs)(`div`, {
        className: `mt-3.5 grid grid-cols-2 gap-x-4 gap-y-2.5`,
        children: [p, h, _, y],
      })),
      (t[28] = h),
      (t[29] = _),
      (t[30] = y),
      (t[31] = p),
      (t[32] = b))
    : (b = t[32]);
  let x;
  return (
    t[33] !== b || t[34] !== o || t[35] !== u
      ? ((x = (0, G.jsxs)(`div`, {
          className: `relative overflow-hidden border-t border-border/60 px-4 py-4 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 sm:px-5`,
          children: [o, u, b],
        })),
        (t[33] = b),
        (t[34] = o),
        (t[35] = u),
        (t[36] = x))
      : (x = t[36]),
    x
  );
}
function Y(e) {
  let t = (0, W.c)(7),
    { label: n, value: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, G.jsx)(`div`, {
        className: `text-3xs font-semibold uppercase tracking-widest text-muted-foreground/45`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, G.jsx)(`div`, {
        className: `truncate font-mono text-xs font-medium tabular-nums text-foreground/90`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, G.jsxs)(`div`, { className: `min-w-0`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function We(e) {
  let t = (0, W.c)(21),
    { label: n, health: r } = e,
    i;
  t[0] !== r.lastError || t[1] !== r.status
    ? ((i = r.status === `unavailable` && C(r.lastError, qe)),
      (t[0] = r.lastError),
      (t[1] = r.status),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === n
    ? (o = t[4])
    : ((o = (0, G.jsx)(`div`, { className: `text-sm font-medium text-foreground`, children: n })),
      (t[3] = n),
      (t[4] = o));
  let s;
  t[5] !== a || t[6] !== r.lastError
    ? ((s = a
        ? `Available when this page runs inside the desktop app.`
        : ee(r.lastError, { onNone: Ke, onSome: Ge })),
      (t[5] = a),
      (t[6] = r.lastError),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] === s
    ? (c = t[9])
    : ((c = (0, G.jsx)(`div`, {
        className: `mt-1 text-2xs leading-relaxed text-muted-foreground/65`,
        children: s,
      })),
      (t[8] = s),
      (t[9] = c));
  let l;
  t[10] !== o || t[11] !== c
    ? ((l = (0, G.jsxs)(`div`, { className: `min-w-0`, children: [o, c] })),
      (t[10] = o),
      (t[11] = c),
      (t[12] = l))
    : (l = t[12]);
  let u;
  t[13] === a
    ? (u = t[14])
    : ((u = a ? { label: `Desktop only`, tone: `neutral` } : void 0), (t[13] = a), (t[14] = u));
  let d;
  t[15] !== r.status || t[16] !== u
    ? ((d = (0, G.jsx)(Be, { label: ``, status: r.status, presentation: u })),
      (t[15] = r.status),
      (t[16] = u),
      (t[17] = d))
    : (d = t[17]);
  let f;
  return (
    t[18] !== l || t[19] !== d
      ? ((f = (0, G.jsxs)(`div`, {
          className: `flex items-start justify-between gap-4 border-t border-border/50 py-3 first:border-t-0`,
          children: [l, d],
        })),
        (t[18] = l),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function Ge(e) {
  return e;
}
function Ke() {
  return `No reported errors`;
}
function qe(e) {
  return e.includes(`'web' mode`);
}
function X(e) {
  let t = (0, W.c)(10),
    { label: n, value: r, valueClassName: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, G.jsx)(`span`, { className: `text-2xs text-muted-foreground/75`, children: n })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = k(`min-w-0 truncate text-right font-mono text-2xs tabular-nums text-foreground/85`, i)),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] !== o || t[5] !== r
    ? ((s = (0, G.jsx)(`span`, { className: o, children: r })), (t[4] = o), (t[5] = r), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== a || t[8] !== s
      ? ((c = (0, G.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 border-t border-border/50 py-2.5 first:border-t-0`,
          children: [a, s],
        })),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Je(e) {
  let t = (0, W.c)(8),
    { selectedWindowMs: n, onSelect: r } = e,
    i = String(n),
    a;
  t[0] === i ? (a = t[1]) : ((a = [i]), (t[0] = i), (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (e) => {
        let t = De.find((t) => String(t.windowMs) === e[0]);
        t && r(t.windowMs);
      }),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = De.map(Ye)), (t[4] = s)) : (s = t[4]);
  let c;
  return (
    t[5] !== a || t[6] !== o
      ? ((c = (0, G.jsx)(V, {
          "aria-label": `Resource history period`,
          variant: `segmented`,
          value: a,
          onValueChange: o,
          children: s,
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Ye(e) {
  return (0, G.jsx)(pe, { value: String(e.windowMs), children: e.label }, e.windowMs);
}
function Xe(e) {
  let t = (0, W.c)(15),
    { buckets: n } = e,
    r,
    i,
    a,
    o;
  if (t[0] !== n) {
    let e = J(n),
      s = Math.max(1, ...n.map(Ze));
    a = `border-t border-border/60 px-4 py-4 sm:px-5`;
    let c;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, G.jsxs)(`span`, {
          className: `inline-flex items-center gap-1.5`,
          children: [
            (0, G.jsx)(`span`, { className: `h-1.5 w-3 rounded-full bg-foreground/70` }),
            ` CPU average`,
          ],
        })),
        (t[5] = c))
      : (c = t[5]);
    let l;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, G.jsxs)(`span`, {
          className: `inline-flex items-center gap-1.5`,
          children: [
            (0, G.jsx)(`span`, { className: `h-1.5 w-3 rounded-full bg-info/70` }),
            ` I/O reads`,
          ],
        })),
        (t[6] = l))
      : (l = t[6]),
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, G.jsxs)(`div`, {
            className: `mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-3xs text-muted-foreground/65`,
            children: [
              c,
              l,
              (0, G.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, G.jsx)(`span`, { className: `h-1.5 w-3 rounded-full bg-warning/80` }),
                  ` I/O writes`,
                ],
              }),
            ],
          })),
          (t[7] = o))
        : (o = t[7]),
      (r = `flex h-32 items-end gap-1 overflow-hidden rounded-lg border border-border/40 bg-muted/8 px-2 pt-3 pb-2`),
      (i = n.map((t) => {
        let n = Ee({ value: t.avgCpuPercent, max: e, minimumVisiblePercent: 2 }),
          r = Ee({ value: t.ioReadBytes, max: s, minimumVisiblePercent: 1 }),
          i = Ee({ value: t.ioWriteBytes, max: s, minimumVisiblePercent: 1 });
        return (0, G.jsxs)(
          h,
          {
            children: [
              (0, G.jsx)(T, {
                render: (0, G.jsxs)(`div`, {
                  className: `grid h-full min-w-1 flex-1 grid-cols-3 items-end gap-px`,
                  children: [
                    (0, G.jsx)(`span`, {
                      className: `block rounded-t-sm bg-foreground/65`,
                      style: { height: `${n}%` },
                    }),
                    (0, G.jsx)(`span`, {
                      className: `block rounded-t-sm bg-info/70`,
                      style: { height: `${r}%` },
                    }),
                    (0, G.jsx)(`span`, {
                      className: `block rounded-t-sm bg-warning/80`,
                      style: { height: `${i}%` },
                    }),
                  ],
                }),
              }),
              (0, G.jsx)(w, {
                side: `top`,
                className: `text-left`,
                children: (0, G.jsxs)(`div`, {
                  className: `space-y-0.5`,
                  children: [
                    (0, G.jsxs)(`div`, { children: [`CPU avg `, t.avgCpuPercent.toFixed(1), `%`] }),
                    (0, G.jsxs)(`div`, {
                      children: [`CPU peak `, t.maxCpuPercent.toFixed(1), `%`],
                    }),
                    (0, G.jsxs)(`div`, { children: [`Read `, H(t.ioReadBytes)] }),
                    (0, G.jsxs)(`div`, { children: [`Write `, H(t.ioWriteBytes)] }),
                  ],
                }),
              }),
            ],
          },
          b(t.startedAt),
        );
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]));
  let s;
  t[8] !== r || t[9] !== i
    ? ((s = (0, G.jsx)(`div`, { className: r, children: i })), (t[8] = r), (t[9] = i), (t[10] = s))
    : (s = t[10]);
  let c;
  return (
    t[11] !== a || t[12] !== o || t[13] !== s
      ? ((c = (0, G.jsxs)(`div`, { className: a, children: [o, s] })),
        (t[11] = a),
        (t[12] = o),
        (t[13] = s),
        (t[14] = c))
      : (c = t[14]),
    c
  );
}
function Ze(e) {
  return e.ioReadBytes + e.ioWriteBytes;
}
function Qe(e) {
  let t = (0, W.c)(26),
    { process: n, collapsed: r, onToggle: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = Pe(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s = n.childPids.length > 0,
    c = `${Math.min(n.depth, 7) * 10}px`,
    l;
  t[2] === c ? (l = t[3]) : ((l = { paddingLeft: c }), (t[2] = c), (t[3] = l));
  let u;
  t[4] !== r || t[5] !== s || t[6] !== o || t[7] !== i || t[8] !== n
    ? ((u = s
        ? (0, G.jsx)(g, {
            size: `icon-micro`,
            variant: `ghost-muted`,
            onClick: () => i(n),
            "aria-label": r ? `Expand ${o}` : `Collapse ${o}`,
            children: (0, G.jsx)(M, {
              className: `size-3.5`,
              icon: r ? q.ChevronRight : q.ChevronDown,
            }),
          })
        : (0, G.jsx)(`span`, { className: `size-5`, "aria-hidden": !0 })),
      (t[4] = r),
      (t[5] = s),
      (t[6] = o),
      (t[7] = i),
      (t[8] = n),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === n.category
    ? (d = t[11])
    : ((d = k(`size-1.5 rounded-full`, Ie(n.category))), (t[10] = n.category), (t[11] = d));
  let f;
  t[12] === d
    ? (f = t[13])
    : ((f = (0, G.jsx)(`span`, { className: d })), (t[12] = d), (t[13] = f));
  let p;
  t[14] === o
    ? (p = t[15])
    : ((p = (0, G.jsx)(T, {
        render: (0, G.jsx)(`span`, {
          className: `min-w-0 truncate font-medium text-foreground`,
          children: o,
        }),
      })),
      (t[14] = o),
      (t[15] = p));
  let m = n.command || n.name,
    _;
  t[16] === m
    ? (_ = t[17])
    : ((_ = (0, G.jsx)(w, { side: `top`, variant: `code`, children: m })),
      (t[16] = m),
      (t[17] = _));
  let v;
  t[18] !== p || t[19] !== _
    ? ((v = (0, G.jsxs)(h, { children: [p, _] })), (t[18] = p), (t[19] = _), (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== v || t[22] !== l || t[23] !== u || t[24] !== f
      ? ((y = (0, G.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-[1.25rem_0.375rem_minmax(0,1fr)] items-center gap-2`,
          style: l,
          children: [u, f, v],
        })),
        (t[21] = v),
        (t[22] = l),
        (t[23] = u),
        (t[24] = f),
        (t[25] = y))
      : (y = t[25]),
    y
  );
}
function $e(e) {
  return (
    e.category === `server-child` ||
    e.category === `provider-root` ||
    e.category === `terminal-root`
  );
}
function et(e) {
  let t = (0, W.c)(10),
    { process: n, canMaintainEnvironment: r, signalingKeys: i, onSignal: a } = e;
  if (!$e(n)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`span`, {
            className: `text-3xs text-muted-foreground/35`,
            children: `-`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  t[1] !== n || t[2] !== i ? ((o = i.has(Me(n))), (t[1] = n), (t[2] = i), (t[3] = o)) : (o = t[3]);
  let s = !r || o,
    c;
  t[4] !== a || t[5] !== n
    ? ((c = (e) => a(n, e)), (t[4] = a), (t[5] = n), (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, G.jsx)(be, { disabled: s, onSignal: c })), (t[7] = s), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function tt(e) {
  let t = (0, W.c)(44),
    { processes: n, canMaintainEnvironment: r, signalingKeys: i, onSignal: a } = e,
    [o, s] = (0, K.useState)(nt),
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    g,
    _,
    v,
    y,
    b;
  if (t[0] !== r || t[1] !== o || t[2] !== a || t[3] !== n || t[4] !== i) {
    let e = we(n, o),
      x;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (e) => {
          let t = Me(e);
          s((e) => {
            let n = new Set(e);
            return (n.has(t) ? n.delete(t) : n.add(t), n);
          });
        }),
        (t[17] = x))
      : (x = t[17]);
    let S = x;
    ((d = `border-t border-border/60`),
      (c = L),
      (v = !0),
      (y = !0),
      (b = !0),
      (u = `max-h-[min(68vh,48rem)] w-full max-w-full`),
      (m = `w-full min-w-[1320px] table-fixed text-left text-xs`),
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, G.jsxs)(`colgroup`, {
            children: [
              (0, G.jsx)(`col`, { className: `w-[20%]` }),
              (0, G.jsx)(`col`, { className: `w-[10%]` }),
              (0, G.jsx)(`col`, { className: `w-[7%]` }),
              (0, G.jsx)(`col`, { className: `w-[8%]` }),
              (0, G.jsx)(`col`, { className: `w-[9%]` }),
              (0, G.jsx)(`col`, { className: `w-[9%]` }),
              (0, G.jsx)(`col`, { className: `w-[9%]` }),
              (0, G.jsx)(`col`, { className: `w-[10%]` }),
              (0, G.jsx)(`col`, { className: `w-[8%]` }),
              (0, G.jsx)(`col`, { className: `w-[6%]` }),
              (0, G.jsx)(`col`, { className: `w-[4%]` }),
            ],
          })),
          (t[18] = g))
        : (g = t[18]),
      t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, G.jsx)(`thead`, {
            className: `sticky top-0 z-10 border-b border-border/60 bg-card text-3xs uppercase tracking-widest text-muted-foreground/65`,
            children: (0, G.jsxs)(`tr`, {
              children: [
                (0, G.jsx)(`th`, {
                  className: `px-4 py-2 font-semibold sm:pl-5`,
                  children: `Process`,
                }),
                (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Category` }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `CPU`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `CPU Time`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Memory`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Read/s`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Write/s`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Read Total`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Write Total`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `PID`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-2 py-2 text-right font-semibold sm:pr-4`,
                  children: `Kill`,
                }),
              ],
            }),
          })),
          (t[19] = _))
        : (_ = t[19]),
      (l = `divide-y divide-border/50`),
      (f =
        e.length === 0
          ? (0, G.jsx)(`tr`, {
              children: (0, G.jsx)(`td`, {
                colSpan: 11,
                className: `px-4 py-5 text-xs text-muted-foreground sm:px-5`,
                children: `Waiting for the native process monitor.`,
              }),
            })
          : null));
    let C;
    (t[20] !== r || t[21] !== o || t[22] !== a || t[23] !== i
      ? ((C = (e) =>
          (0, G.jsxs)(
            `tr`,
            {
              className: `hover:bg-muted/20`,
              children: [
                (0, G.jsx)(`td`, {
                  className: `px-4 py-2 sm:pl-5`,
                  children: (0, G.jsx)(Qe, { process: e, collapsed: o.has(Me(e)), onToggle: S }),
                }),
                (0, G.jsx)(`td`, {
                  className: `truncate px-3 py-2 text-2xs text-muted-foreground`,
                  children: Fe(e.category),
                }),
                (0, G.jsxs)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums`,
                  children: [e.cpuPercent.toFixed(1), `%`],
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums`,
                  children: ke(e.cpuTimeMs),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums`,
                  children: H(e.residentBytes),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums text-info-foreground`,
                  children: Oe(e.ioReadBytesPerSecond),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums text-warning-foreground`,
                  children: Oe(e.ioWriteBytesPerSecond),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground`,
                  children: H(e.ioReadBytes),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground`,
                  children: (0, G.jsxs)(h, {
                    children: [
                      (0, G.jsx)(T, {
                        render: (0, G.jsx)(`span`, { children: H(e.ioWriteBytes) }),
                      }),
                      (0, G.jsx)(w, { side: `top`, children: Le(e.ioSemantics) }),
                    ],
                  }),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground`,
                  children: e.identity.pid,
                }),
                (0, G.jsx)(`td`, {
                  className: `px-2 py-2 text-right sm:pr-4`,
                  children: (0, G.jsx)(et, {
                    process: e,
                    canMaintainEnvironment: r,
                    signalingKeys: i,
                    onSignal: a,
                  }),
                }),
              ],
            },
            Me(e),
          )),
        (t[20] = r),
        (t[21] = o),
        (t[22] = a),
        (t[23] = i),
        (t[24] = C))
      : (C = t[24]),
      (p = e.map(C)),
      (t[0] = r),
      (t[1] = o),
      (t[2] = a),
      (t[3] = n),
      (t[4] = i),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b));
  } else
    ((c = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]),
      (g = t[12]),
      (_ = t[13]),
      (v = t[14]),
      (y = t[15]),
      (b = t[16]));
  let x;
  t[25] !== l || t[26] !== f || t[27] !== p
    ? ((x = (0, G.jsxs)(`tbody`, { className: l, children: [f, p] })),
      (t[25] = l),
      (t[26] = f),
      (t[27] = p),
      (t[28] = x))
    : (x = t[28]);
  let S;
  t[29] !== x || t[30] !== m || t[31] !== g || t[32] !== _
    ? ((S = (0, G.jsxs)(`table`, { className: m, children: [g, _, x] })),
      (t[29] = x),
      (t[30] = m),
      (t[31] = g),
      (t[32] = _),
      (t[33] = S))
    : (S = t[33]);
  let C;
  t[34] !== c || t[35] !== u || t[36] !== S || t[37] !== v || t[38] !== y || t[39] !== b
    ? ((C = (0, G.jsx)(c, {
        chainVerticalScroll: v,
        scrollFade: y,
        hideScrollbars: b,
        className: u,
        children: S,
      })),
      (t[34] = c),
      (t[35] = u),
      (t[36] = S),
      (t[37] = v),
      (t[38] = y),
      (t[39] = b),
      (t[40] = C))
    : (C = t[40]);
  let E;
  return (
    t[41] !== d || t[42] !== C
      ? ((E = (0, G.jsx)(`div`, { className: d, children: C })),
        (t[41] = d),
        (t[42] = C),
        (t[43] = E))
      : (E = t[43]),
    E
  );
}
function nt() {
  return new Set();
}
function rt(e) {
  let t = (0, W.c)(9),
    { processes: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, G.jsxs)(`colgroup`, {
        children: [
          (0, G.jsx)(`col`, { className: `w-[24%]` }),
          (0, G.jsx)(`col`, { className: `w-[11%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[11%]` }),
          (0, G.jsx)(`col`, { className: `w-[11%]` }),
          (0, G.jsx)(`col`, { className: `w-[11%]` }),
          (0, G.jsx)(`col`, { className: `w-[7%]` }),
          (0, G.jsx)(`col`, { className: `w-[5%]` }),
        ],
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, G.jsx)(`thead`, {
        className: `sticky top-0 z-10 border-b border-border/60 bg-card text-3xs uppercase tracking-widest text-muted-foreground/65`,
        children: (0, G.jsxs)(`tr`, {
          children: [
            (0, G.jsx)(`th`, { className: `px-4 py-2 font-semibold sm:pl-5`, children: `Process` }),
            (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Category` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `CPU Time`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Peak CPU`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Peak Mem`,
            }),
            (0, G.jsx)(`th`, { className: `px-3 py-2 text-right font-semibold`, children: `Read` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Write`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Samples`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold sm:pr-5`,
              children: `PID`,
            }),
          ],
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === n.length
    ? (a = t[3])
    : ((a =
        n.length === 0
          ? (0, G.jsx)(`tr`, {
              children: (0, G.jsx)(`td`, {
                colSpan: 9,
                className: `px-4 py-5 text-xs text-muted-foreground sm:px-5`,
                children: `No retained process samples in this window.`,
              }),
            })
          : null),
      (t[2] = n.length),
      (t[3] = a));
  let o;
  t[4] === n ? (o = t[5]) : ((o = n.map(it)), (t[4] = n), (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== o
      ? ((s = (0, G.jsx)(`div`, {
          className: `border-t border-border/60`,
          children: (0, G.jsx)(L, {
            chainVerticalScroll: !0,
            scrollFade: !0,
            hideScrollbars: !0,
            className: `max-h-[28rem] w-full max-w-full`,
            children: (0, G.jsxs)(`table`, {
              className: `w-full min-w-[1020px] table-fixed text-left text-xs`,
              children: [
                r,
                i,
                (0, G.jsxs)(`tbody`, { className: `divide-y divide-border/50`, children: [a, o] }),
              ],
            }),
          }),
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function it(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      className: `hover:bg-muted/20`,
      children: [
        (0, G.jsx)(`td`, {
          className: `px-4 py-2 sm:pl-5`,
          children: (0, G.jsxs)(h, {
            children: [
              (0, G.jsx)(T, {
                render: (0, G.jsx)(`span`, {
                  className: `block truncate font-medium text-foreground`,
                  children: e.name || e.command,
                }),
              }),
              (0, G.jsx)(w, { side: `top`, variant: `code`, children: e.command || e.name }),
            ],
          }),
        }),
        (0, G.jsx)(`td`, {
          className: `truncate px-3 py-2 text-2xs text-muted-foreground`,
          children: Fe(e.category),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums`,
          children: ke(e.cpuTimeMs),
        }),
        (0, G.jsxs)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums`,
          children: [e.maxCpuPercent.toFixed(1), `%`],
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums`,
          children: H(e.peakRssBytes),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-info-foreground`,
          children: H(e.ioReadBytes),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-warning-foreground`,
          children: H(e.ioWriteBytes),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground`,
          children: e.sampleCount,
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground sm:pr-5`,
          children: e.identity.pid,
        }),
      ],
    },
    Ne(e),
  );
}
function at(e) {
  let t = (0, W.c)(9),
    { entries: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, G.jsxs)(`colgroup`, {
        children: [
          (0, G.jsx)(`col`, { className: `w-[22%]` }),
          (0, G.jsx)(`col`, { className: `w-[28%]` }),
          (0, G.jsx)(`col`, { className: `w-[14%]` }),
          (0, G.jsx)(`col`, { className: `w-[14%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[12%]` }),
        ],
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, G.jsx)(`thead`, {
        className: `border-b border-border/60 text-3xs uppercase tracking-widest text-muted-foreground/65`,
        children: (0, G.jsxs)(`tr`, {
          children: [
            (0, G.jsx)(`th`, {
              className: `px-4 py-2 font-semibold sm:pl-5`,
              children: `Component`,
            }),
            (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Operation` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Logical Read`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Logical Write`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Count`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold sm:pr-5`,
              children: `Time`,
            }),
          ],
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === n.length
    ? (a = t[3])
    : ((a =
        n.length === 0
          ? (0, G.jsx)(`tr`, {
              children: (0, G.jsx)(`td`, {
                colSpan: 6,
                className: `px-4 py-5 text-xs text-muted-foreground sm:px-5`,
                children: `No instrumented application I/O has been recorded yet.`,
              }),
            })
          : null),
      (t[2] = n.length),
      (t[3] = a));
  let o;
  t[4] === n ? (o = t[5]) : ((o = n.map(ot)), (t[4] = n), (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== o
      ? ((s = (0, G.jsx)(`div`, {
          className: `overflow-x-auto border-t border-border/60`,
          children: (0, G.jsxs)(`table`, {
            className: `w-full min-w-[720px] table-fixed text-left text-xs`,
            children: [
              r,
              i,
              (0, G.jsxs)(`tbody`, { className: `divide-y divide-border/50`, children: [a, o] }),
            ],
          }),
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function ot(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      className: `hover:bg-muted/20`,
      children: [
        (0, G.jsx)(`td`, {
          className: `truncate px-4 py-2 font-medium text-foreground sm:pl-5`,
          children: e.component,
        }),
        (0, G.jsx)(`td`, {
          className: `truncate px-3 py-2 text-muted-foreground`,
          children: e.operation,
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-info-foreground`,
          children: H(e.logicalReadBytes),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-warning-foreground`,
          children: H(e.logicalWriteBytes),
        }),
        (0, G.jsx)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums`,
          children: e.count,
        }),
        (0, G.jsxs)(`td`, {
          className: `px-3 py-2 text-right font-mono tabular-nums text-muted-foreground sm:pr-5`,
          children: [(e.durationMs / 1e3).toFixed(2), `s`],
        }),
      ],
    },
    `${e.component}:${e.operation}`,
  );
}
function st(e) {
  let t = (0, W.c)(3),
    { environmentId: n } = e,
    r = n ?? ``,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, G.jsx)(ct, { environmentId: n }, r)), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function ct(e) {
  let t = (0, W.c)(207),
    { environmentId: n } = e,
    r = (0, K.useContext)(y),
    [s, d] = (0, K.useState)(9e5),
    p;
  t[0] === s
    ? (p = t[1])
    : ((p = De.find((e) => e.windowMs === s) ?? De[1]), (t[0] = s), (t[1] = p));
  let b = p,
    x = ae(n, _),
    S = xe(n),
    C = S.retry,
    E;
  t[2] !== b.bucketMs || t[3] !== b.windowMs
    ? ((E = { windowMs: b.windowMs, bucketMs: b.bucketMs }),
      (t[2] = b.bucketMs),
      (t[3] = b.windowMs),
      (t[4] = E))
    : (E = t[4]);
  let O = Se(E, n),
    ne;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = { reportFailure: !1 }), (t[5] = ne))
    : (ne = t[5]);
  let re = ce(P.signalProcess, ne),
    [k, A] = (0, K.useState)(pt),
    j;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = new Set()), (t[6] = j)) : (j = t[6]);
  let M = (0, K.useRef)(j),
    [N, se] = (0, K.useState)(!1),
    F = S.data,
    I = F?.groups.allT3,
    L;
  t[7] !== n || t[8] !== re
    ? ((L = async (e, t) => {
        let r = n;
        if (r === null || !oe(r, `environment:maintain`)) return;
        let i = Me(e);
        if (M.current.has(i)) return;
        let a = new Set(M.current).add(i);
        ((M.current = a), A(a));
        let o = () => {
          let e = new Set(M.current);
          (e.delete(i), (M.current = e), A(e));
        };
        if (t === `SIGKILL`) {
          let n;
          try {
            n = await le().dialogs.confirm(
              `Send SIGKILL to process ${e.identity.pid}? This cannot be handled by the process.`,
              { variant: `destructive` },
            );
          } catch (e) {
            let n = e;
            (o(),
              ue.add({
                type: `error`,
                title: `Could not confirm signal`,
                description: n instanceof Error ? n.message : `Failed to send ${t}.`,
              }));
            return;
          }
          if (!n) {
            o();
            return;
          }
        }
        oe(r, `environment:maintain`)
          ? re({
              environmentId: r,
              input: { pid: e.identity.pid, startTimeMs: e.identity.startTimeMs, signal: t },
            })
              .then((n) => {
                if (n._tag === `Failure`) {
                  if (D(n)) return;
                  throw te(n);
                }
                n.value.signaled ||
                  ue.add({
                    type: `error`,
                    title: `Could not send ${t}`,
                    description: ie(
                      n.value.message,
                      () => `Failed to send ${t} to process ${e.identity.pid}.`,
                    ),
                  });
              })
              .catch((e) => {
                ue.add({
                  type: `error`,
                  title: `Could not send ${t}`,
                  description: e instanceof Error ? e.message : `Failed to send ${t}.`,
                });
              })
              .finally(() => {
                o();
              })
          : o();
      }),
      (t[7] = n),
      (t[8] = re),
      (t[9] = L))
    : (L = t[9]);
  let R = L,
    z;
  t[10] !== n || t[11] !== r || t[12] !== C
    ? ((z = () => {
        n !== null &&
          oe(n, `environment:maintain`) &&
          (se(!0),
          C()
            .then(() => {
              for (let e of De)
                r.refresh(
                  P.resourceTelemetryHistory({
                    environmentId: n,
                    input: { windowMs: e.windowMs, bucketMs: e.bucketMs },
                  }),
                );
            })
            .catch(ft)
            .finally(() => {
              se(!1);
            }));
      }),
      (t[10] = n),
      (t[11] = r),
      (t[12] = C),
      (t[13] = z))
    : (z = t[13]);
  let V = z,
    de,
    fe,
    pe,
    me,
    he,
    ge,
    _e,
    ve,
    ye,
    be,
    q,
    Ce,
    we,
    Ee,
    J,
    Ne,
    Pe,
    Fe,
    Ie;
  if (
    t[14] !== I ||
    t[15] !== F ||
    t[16] !== S.error ||
    t[17] !== S.isPending ||
    t[18] !== S.refresh
  ) {
    he = F ? v(F.speedLimitPercent) : null;
    let e = F?.health.native.status ?? null,
      n;
    (t[38] !== e || t[39] !== S.error
      ? ((n = Te({ nativeStatus: e, error: S.error })), (t[38] = e), (t[39] = S.error), (t[40] = n))
      : (n = t[40]),
      (pe = n),
      (me =
        F !== null &&
        (F.power.onBattery !== `unknown` ||
          F.power.lowPowerMode !== `unknown` ||
          F.power.idle !== `unknown` ||
          F.power.locked !== `unknown` ||
          F.power.thermalState !== `unknown`)),
      (fe = U),
      (Ee = `Resource monitor`),
      t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((J = (0, G.jsx)(c, { className: `size-4 text-muted-foreground` })), (t[41] = J))
        : (J = t[41]));
    let r;
    t[42] === F
      ? (r = t[43])
      : ((r = F ? (0, G.jsx)(Be, { label: `Native`, status: F.health.native.status }) : null),
        (t[42] = F),
        (t[43] = r));
    let a = F?.readAt ?? null,
      s;
    t[44] === a ? (s = t[45]) : ((s = (0, G.jsx)(Ve, { sampledAt: a })), (t[44] = a), (t[45] = s));
    let d;
    t[46] === S.isPending
      ? (d = t[47])
      : ((d = (0, G.jsx)(B, { size: `xs`, refreshing: S.isPending })),
        (t[46] = S.isPending),
        (t[47] = d));
    let f;
    t[48] !== d || t[49] !== S.isPending || t[50] !== S.refresh
      ? ((f = (0, G.jsx)(T, {
          render: (0, G.jsx)(g, {
            size: `icon-micro`,
            variant: `ghost`,
            disabled: S.isPending,
            onClick: S.refresh,
            "aria-label": `Refresh resource telemetry`,
            children: d,
          }),
        })),
        (t[48] = d),
        (t[49] = S.isPending),
        (t[50] = S.refresh),
        (t[51] = f))
      : (f = t[51]);
    let p;
    t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, G.jsx)(w, { side: `top`, children: `Refresh telemetry snapshot` })), (t[52] = p))
      : (p = t[52]);
    let _;
    (t[53] === f
      ? (_ = t[54])
      : ((_ = (0, G.jsxs)(h, { children: [f, p] })), (t[53] = f), (t[54] = _)),
      t[55] !== r || t[56] !== s || t[57] !== _
        ? ((Ne = (0, G.jsxs)(`div`, { className: `flex items-center gap-2`, children: [r, s, _] })),
          (t[55] = r),
          (t[56] = s),
          (t[57] = _),
          (t[58] = Ne))
        : (Ne = t[58]),
      (Ce = `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm/5`));
    let y;
    t[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, G.jsxs)(`div`, {
          children: [
            (0, G.jsx)(`div`, {
              className: `text-3xs font-semibold uppercase tracking-widest text-muted-foreground/70`,
              children: `T3 system footprint`,
            }),
            (0, G.jsx)(`p`, {
              className: `mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground`,
              children: `Live native counters for the server, providers, terminals, desktop processes, and the monitor itself.`,
            }),
          ],
        })),
        (t[59] = y))
      : (y = t[59]);
    let b;
    t[60] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, G.jsx)(`span`, { className: `size-1.5 rounded-full bg-success` })), (t[60] = b))
      : (b = t[60]);
    let x;
    (t[61] === F
      ? (x = t[62])
      : ((x = F ? je(F.sampleIntervalMs) : `...`), (t[61] = F), (t[62] = x)),
      t[63] === x
        ? (we = t[64])
        : ((we = (0, G.jsxs)(`div`, {
            className: `flex flex-col gap-3 border-b border-border/60 bg-linear-to-r from-muted/45 via-muted/20 to-transparent px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5`,
            children: [
              y,
              (0, G.jsxs)(`div`, {
                className: `flex items-center gap-2 text-3xs text-muted-foreground/65`,
                children: [b, `Sampling every `, x],
              }),
            ],
          })),
          (t[63] = x),
          (t[64] = we)),
      (ge = `grid grid-cols-2 divide-x divide-y divide-border/55 md:grid-cols-3`));
    let C;
    t[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, G.jsx)(o, { className: `size-3.5` })), (t[65] = C))
      : (C = t[65]);
    let E;
    t[66] === I
      ? (E = t[67])
      : ((E = I ? `${I.currentCpuPercent.toFixed(1)}%` : `...`), (t[66] = I), (t[67] = E));
    let D;
    (t[68] === I
      ? (D = t[69])
      : ((D = I ? `${ke(I.cpuTimeMs)} observed CPU time` : void 0), (t[68] = I), (t[69] = D)),
      t[70] !== E || t[71] !== D
        ? ((_e = (0, G.jsx)(He, { icon: C, label: `Current CPU`, value: E, detail: D })),
          (t[70] = E),
          (t[71] = D),
          (t[72] = _e))
        : (_e = t[72]));
    let O;
    t[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (0, G.jsx)(u, { className: `size-3.5` })), (t[73] = O))
      : (O = t[73]);
    let ee;
    t[74] === I
      ? (ee = t[75])
      : ((ee = I ? H(I.currentRssBytes) : `...`), (t[74] = I), (t[75] = ee));
    let te;
    (t[76] === I
      ? (te = t[77])
      : ((te = I ? `${H(I.peakRssBytes)} combined process peaks` : void 0),
        (t[76] = I),
        (t[77] = te)),
      t[78] !== ee || t[79] !== te
        ? ((ve = (0, G.jsx)(He, { icon: O, label: `Resident memory`, value: ee, detail: te })),
          (t[78] = ee),
          (t[79] = te),
          (t[80] = ve))
        : (ve = t[80]));
    let ne;
    t[81] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ne = (0, G.jsx)(c, { className: `size-3.5` })), (t[81] = ne))
      : (ne = t[81]);
    let re = I ? String(I.processCount) : `...`,
      ie = I ? `${I.processStarts} starts · ${I.processExits} exits` : void 0;
    t[82] !== re || t[83] !== ie
      ? ((ye = (0, G.jsx)(He, { icon: ne, label: `Process count`, value: re, detail: ie })),
        (t[82] = re),
        (t[83] = ie),
        (t[84] = ye))
      : (ye = t[84]);
    let k;
    t[85] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, G.jsx)(m, { className: `size-3.5` })), (t[85] = k))
      : (k = t[85]);
    let A;
    t[86] === I
      ? (A = t[87])
      : ((A = I ? Oe(I.ioReadBytesPerSecond) : `...`), (t[86] = I), (t[87] = A));
    let j;
    (t[88] === I
      ? (j = t[89])
      : ((j = I ? `${H(I.ioReadBytes)} observed` : void 0), (t[88] = I), (t[89] = j)),
      t[90] !== A || t[91] !== j
        ? ((be = (0, G.jsx)(He, { icon: k, label: `Read throughput`, value: A, detail: j })),
          (t[90] = A),
          (t[91] = j),
          (t[92] = be))
        : (be = t[92]));
    let M;
    t[93] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((M = (0, G.jsx)(l, { className: `size-3.5` })), (t[93] = M))
      : (M = t[93]);
    let N;
    t[94] === I
      ? (N = t[95])
      : ((N = I ? Oe(I.ioWriteBytesPerSecond) : `...`), (t[94] = I), (t[95] = N));
    let P;
    t[96] === I
      ? (P = t[97])
      : ((P = I ? `${H(I.ioWriteBytes)} observed` : void 0), (t[96] = I), (t[97] = P));
    let ae =
      I && I.ioWriteBytesPerSecond >= 10485760
        ? `danger`
        : I && I.ioWriteBytesPerSecond >= 1048576
          ? `warning`
          : `default`;
    (t[98] !== N || t[99] !== P || t[100] !== ae
      ? ((q = (0, G.jsx)(He, {
          icon: M,
          label: `Write throughput`,
          value: N,
          detail: P,
          tone: ae,
        })),
        (t[98] = N),
        (t[99] = P),
        (t[100] = ae),
        (t[101] = q))
      : (q = t[101]),
      (de = He),
      t[102] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Pe = (0, G.jsx)(i, { className: `size-3.5` })), (t[102] = Pe))
        : (Pe = t[102]),
      (Fe = `CPU speed limit`),
      (Ie = F ? (he === null ? `Unknown` : `${he.toFixed(0)}%`) : `...`),
      (t[14] = I),
      (t[15] = F),
      (t[16] = S.error),
      (t[17] = S.isPending),
      (t[18] = S.refresh),
      (t[19] = de),
      (t[20] = fe),
      (t[21] = pe),
      (t[22] = me),
      (t[23] = he),
      (t[24] = ge),
      (t[25] = _e),
      (t[26] = ve),
      (t[27] = ye),
      (t[28] = be),
      (t[29] = q),
      (t[30] = Ce),
      (t[31] = we),
      (t[32] = Ee),
      (t[33] = J),
      (t[34] = Ne),
      (t[35] = Pe),
      (t[36] = Fe),
      (t[37] = Ie));
  } else
    ((de = t[19]),
      (fe = t[20]),
      (pe = t[21]),
      (me = t[22]),
      (he = t[23]),
      (ge = t[24]),
      (_e = t[25]),
      (ve = t[26]),
      (ye = t[27]),
      (be = t[28]),
      (q = t[29]),
      (Ce = t[30]),
      (we = t[31]),
      (Ee = t[32]),
      (J = t[33]),
      (Ne = t[34]),
      (Pe = t[35]),
      (Fe = t[36]),
      (Ie = t[37]));
  let Le = F ? `${F.power.thermalState} thermal state` : void 0,
    ze = he !== null && he < 80 ? `warning` : `default`,
    Y;
  t[103] !== de || t[104] !== Le || t[105] !== ze || t[106] !== Pe || t[107] !== Fe || t[108] !== Ie
    ? ((Y = (0, G.jsx)(de, { icon: Pe, label: Fe, value: Ie, detail: Le, tone: ze })),
      (t[103] = de),
      (t[104] = Le),
      (t[105] = ze),
      (t[106] = Pe),
      (t[107] = Fe),
      (t[108] = Ie),
      (t[109] = Y))
    : (Y = t[109]);
  let Ge;
  t[110] !== ge ||
  t[111] !== _e ||
  t[112] !== ve ||
  t[113] !== ye ||
  t[114] !== be ||
  t[115] !== q ||
  t[116] !== Y
    ? ((Ge = (0, G.jsxs)(`div`, { className: ge, children: [_e, ve, ye, be, q, Y] })),
      (t[110] = ge),
      (t[111] = _e),
      (t[112] = ve),
      (t[113] = ye),
      (t[114] = be),
      (t[115] = q),
      (t[116] = Y),
      (t[117] = Ge))
    : (Ge = t[117]);
  let Ke;
  t[118] === S.error
    ? (Ke = t[119])
    : ((Ke = S.error
        ? (0, G.jsxs)(`div`, {
            className: `flex items-start gap-2 border-t border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive sm:px-5`,
            children: [
              (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
              (0, G.jsx)(`span`, { children: S.error }),
            ],
          })
        : null),
      (t[118] = S.error),
      (t[119] = Ke));
  let qe;
  t[120] === F
    ? (qe = t[121])
    : ((qe = F
        ? (0, G.jsxs)(`div`, {
            className: `grid border-t border-border/60 bg-muted/10 md:grid-cols-3`,
            children: [
              (0, G.jsx)(Ue, {
                label: `Backend + agents`,
                accentClass: `bg-success/80`,
                aggregate: F.groups.backend,
              }),
              (0, G.jsx)(Ue, {
                label: `Desktop`,
                accentClass: `bg-info/80`,
                aggregate: F.groups.electron,
              }),
              (0, G.jsx)(Ue, {
                label: `Monitor overhead`,
                accentClass: `bg-warning/80`,
                aggregate: F.groups.monitor,
              }),
            ],
          })
        : null),
      (t[120] = F),
      (t[121] = qe));
  let Ye;
  t[122] !== Ce || t[123] !== we || t[124] !== Ge || t[125] !== Ke || t[126] !== qe
    ? ((Ye = (0, G.jsxs)(`div`, { className: Ce, children: [we, Ge, Ke, qe] })),
      (t[122] = Ce),
      (t[123] = we),
      (t[124] = Ge),
      (t[125] = Ke),
      (t[126] = qe),
      (t[127] = Ye))
    : (Ye = t[127]);
  let Ze;
  t[128] !== fe || t[129] !== Ee || t[130] !== J || t[131] !== Ne || t[132] !== Ye
    ? ((Ze = (0, G.jsx)(fe, { title: Ee, icon: J, headerAction: Ne, children: Ye })),
      (t[128] = fe),
      (t[129] = Ee),
      (t[130] = J),
      (t[131] = Ne),
      (t[132] = Ye),
      (t[133] = Ze))
    : (Ze = t[133]);
  let Qe;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (0, G.jsx)(i, { className: `size-4 text-muted-foreground` })), (t[134] = Qe))
    : (Qe = t[134]);
  let $e;
  t[135] !== pe || t[136] !== N || t[137] !== V
    ? (($e = pe
        ? (0, G.jsxs)(g, {
            size: `xs`,
            variant: `outline`,
            disabled: N,
            onClick: V,
            children: [(0, G.jsx)(B, { size: `xs`, refreshing: N }), `Retry monitor`],
          })
        : null),
      (t[135] = pe),
      (t[136] = N),
      (t[137] = V),
      (t[138] = $e))
    : ($e = t[138]);
  let et;
  t[139] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, G.jsxs)(`div`, {
        className: `mb-3 flex items-center gap-2 text-3xs font-semibold uppercase tracking-widest text-muted-foreground/70`,
        children: [
          (0, G.jsx)(`span`, {
            className: `flex size-6 items-center justify-center rounded-md bg-muted/60`,
            children: (0, G.jsx)(a, { className: `size-3.5` }),
          }),
          `Host state`,
        ],
      })),
      (t[139] = et))
    : (et = t[139]);
  let nt;
  t[140] !== me || t[141] !== F
    ? ((nt = (0, G.jsxs)(`div`, {
        className: `px-4 py-4 sm:px-5`,
        children: [
          et,
          me && F
            ? (0, G.jsxs)(G.Fragment, {
                children: [
                  (0, G.jsx)(X, {
                    label: `Power source`,
                    value: Re(F.power.onBattery, { true: `Battery`, false: `External power` }),
                  }),
                  (0, G.jsx)(X, {
                    label: `Low power mode`,
                    value: Re(F.power.lowPowerMode, { true: `Enabled`, false: `Disabled` }),
                  }),
                  (0, G.jsx)(X, {
                    label: `Idle`,
                    value: `${Re(F.power.idle, { true: `Idle`, false: `Active` })}${F.power.idleSeconds === null ? `` : ` · ${Math.round(F.power.idleSeconds)}s`}`,
                  }),
                  (0, G.jsx)(X, {
                    label: `Session`,
                    value: F.power.suspended
                      ? `Suspended`
                      : Re(F.power.locked, { true: `Locked`, false: `Unlocked` }),
                  }),
                  (0, G.jsx)(X, {
                    label: `Thermal`,
                    value: F.power.thermalState,
                    valueClassName:
                      F.power.thermalState === `serious` || F.power.thermalState === `critical`
                        ? `text-destructive`
                        : void 0,
                  }),
                ],
              })
            : (0, G.jsxs)(`div`, {
                className: `rounded-xl border border-dashed border-border/70 bg-muted/20 px-4 py-5`,
                children: [
                  (0, G.jsx)(`div`, {
                    className: `text-sm font-medium text-foreground`,
                    children: `Desktop host signals not connected`,
                  }),
                  (0, G.jsx)(`p`, {
                    className: `mt-1.5 max-w-sm text-2xs leading-relaxed text-muted-foreground/70`,
                    children: `Power, idle, lock, and thermal state are supplied by the desktop host. Process telemetry remains fully active in this browser session.`,
                  }),
                ],
              }),
        ],
      })),
      (t[140] = me),
      (t[141] = F),
      (t[142] = nt))
    : (nt = t[142]);
  let it;
  t[143] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, G.jsxs)(`div`, {
        className: `mb-3 flex items-center gap-2 text-3xs font-semibold uppercase tracking-widest text-muted-foreground/70`,
        children: [
          (0, G.jsx)(`span`, {
            className: `flex size-6 items-center justify-center rounded-md bg-muted/60`,
            children: (0, G.jsx)(i, { className: `size-3.5` }),
          }),
          `Collection health`,
        ],
      })),
      (t[143] = it))
    : (it = t[143]);
  let ot;
  t[144] === F
    ? (ot = t[145])
    : ((ot = (0, G.jsxs)(`div`, {
        className: `border-t border-border/60 px-4 py-4 md:border-t-0 sm:px-5`,
        children: [
          it,
          F
            ? (0, G.jsxs)(G.Fragment, {
                children: [
                  (0, G.jsx)(We, { label: `Native process monitor`, health: F.health.native }),
                  (0, G.jsx)(We, { label: `Electron main process`, health: F.health.desktop }),
                  (0, G.jsx)(X, {
                    label: `Collection time`,
                    value: Ae(F.health.collectionDurationMicros),
                  }),
                  (0, G.jsx)(X, {
                    label: `Process scan`,
                    value: `${F.health.retainedProcessCount}/${F.health.scannedProcessCount} retained`,
                  }),
                  (0, G.jsx)(X, {
                    label: `Inaccessible`,
                    value: String(F.health.inaccessibleProcessCount),
                    valueClassName:
                      F.health.inaccessibleProcessCount > 0 ? `text-warning-foreground` : void 0,
                  }),
                  (0, G.jsx)(X, {
                    label: `Sidecar`,
                    value: ee(F.health.sidecarVersion, {
                      onNone: dt,
                      onSome: (e) => `${e}${ee(F.health.sidecarPid, { onNone: ut, onSome: lt })}`,
                    }),
                  }),
                  (0, G.jsx)(X, { label: `Restarts`, value: String(F.health.restartCount) }),
                ],
              })
            : (0, G.jsx)(`div`, {
                className: `py-4 text-xs text-muted-foreground`,
                children: `Waiting for collector health.`,
              }),
        ],
      })),
      (t[144] = F),
      (t[145] = ot));
  let st;
  t[146] !== nt || t[147] !== ot
    ? ((st = (0, G.jsxs)(`div`, {
        className: `grid overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs/5 md:grid-cols-2 md:divide-x md:divide-border/60`,
        children: [nt, ot],
      })),
      (t[146] = nt),
      (t[147] = ot),
      (t[148] = st))
    : (st = t[148]);
  let ct;
  t[149] !== $e || t[150] !== st
    ? ((ct = (0, G.jsx)(U, {
        title: `Host & collection`,
        icon: Qe,
        headerAction: $e,
        children: st,
      })),
      (t[149] = $e),
      (t[150] = st),
      (t[151] = ct))
    : (ct = t[151]);
  let Z;
  t[152] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, G.jsx)(m, { className: `size-4 text-muted-foreground` })), (t[152] = Z))
    : (Z = t[152]);
  let mt;
  t[153] === s
    ? (mt = t[154])
    : ((mt = (0, G.jsx)(Je, { selectedWindowMs: s, onSelect: d })), (t[153] = s), (t[154] = mt));
  let ht;
  t[155] === O.isPending
    ? (ht = t[156])
    : ((ht = (0, G.jsx)(B, { size: `xs`, refreshing: O.isPending })),
      (t[155] = O.isPending),
      (t[156] = ht));
  let gt;
  t[157] !== O.isPending || t[158] !== O.refresh || t[159] !== ht
    ? ((gt = (0, G.jsx)(g, {
        size: `icon-micro`,
        variant: `ghost`,
        disabled: O.isPending,
        onClick: O.refresh,
        "aria-label": `Refresh resource history`,
        children: ht,
      })),
      (t[157] = O.isPending),
      (t[158] = O.refresh),
      (t[159] = ht),
      (t[160] = gt))
    : (gt = t[160]);
  let _t;
  t[161] !== mt || t[162] !== gt
    ? ((_t = (0, G.jsxs)(`div`, { className: `flex items-center gap-2`, children: [mt, gt] })),
      (t[161] = mt),
      (t[162] = gt),
      (t[163] = _t))
    : (_t = t[163]);
  let vt;
  t[164] === O.error
    ? (vt = t[165])
    : ((vt = O.error
        ? (0, G.jsxs)(`div`, {
            className: `flex items-start gap-2 border-b border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive sm:px-5`,
            children: [
              (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
              (0, G.jsx)(`span`, { children: O.error }),
            ],
          })
        : null),
      (t[164] = O.error),
      (t[165] = vt));
  let yt;
  t[166] === O.data?.buckets
    ? (yt = t[167])
    : ((yt = O.data?.buckets ?? []), (t[166] = O.data?.buckets), (t[167] = yt));
  let bt;
  t[168] === yt
    ? (bt = t[169])
    : ((bt = (0, G.jsx)(Xe, { buckets: yt })), (t[168] = yt), (t[169] = bt));
  let xt;
  t[170] === O.data?.topProcesses
    ? (xt = t[171])
    : ((xt = O.data?.topProcesses ?? []), (t[170] = O.data?.topProcesses), (t[171] = xt));
  let Q;
  t[172] === xt
    ? (Q = t[173])
    : ((Q = (0, G.jsx)(rt, { processes: xt })), (t[172] = xt), (t[173] = Q));
  let St;
  t[174] !== vt || t[175] !== bt || t[176] !== Q
    ? ((St = (0, G.jsxs)(`div`, {
        className: `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs/5`,
        children: [vt, bt, Q],
      })),
      (t[174] = vt),
      (t[175] = bt),
      (t[176] = Q),
      (t[177] = St))
    : (St = t[177]);
  let Ct;
  t[178] !== _t || t[179] !== St
    ? ((Ct = (0, G.jsx)(U, {
        title: `Resource timeline`,
        icon: Z,
        headerAction: _t,
        children: St,
      })),
      (t[178] = _t),
      (t[179] = St),
      (t[180] = Ct))
    : (Ct = t[180]);
  let wt;
  t[181] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, G.jsx)(o, { className: `size-4 text-muted-foreground` })), (t[181] = wt))
    : (wt = t[181]);
  let Tt;
  t[182] === F
    ? (Tt = t[183])
    : ((Tt = F
        ? (0, G.jsxs)(`span`, {
            className: `text-3xs text-muted-foreground/55`,
            children: [
              `Identity: `,
              (0, G.jsx)(`span`, { className: `font-mono`, children: `PID + start time` }),
            ],
          })
        : null),
      (t[182] = F),
      (t[183] = Tt));
  let Et;
  t[184] === F?.processes
    ? (Et = t[185])
    : ((Et = F?.processes ?? []), (t[184] = F?.processes), (t[185] = Et));
  let $;
  t[186] !== x || t[187] !== R || t[188] !== k || t[189] !== Et
    ? (($ = (0, G.jsx)(`div`, {
        className: `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs/5`,
        children: (0, G.jsx)(tt, {
          processes: Et,
          canMaintainEnvironment: x,
          signalingKeys: k,
          onSignal: R,
        }),
      })),
      (t[186] = x),
      (t[187] = R),
      (t[188] = k),
      (t[189] = Et),
      (t[190] = $))
    : ($ = t[190]);
  let Dt;
  t[191] !== Tt || t[192] !== $
    ? ((Dt = (0, G.jsx)(U, {
        title: `Live process tree`,
        icon: wt,
        headerAction: Tt,
        children: $,
      })),
      (t[191] = Tt),
      (t[192] = $),
      (t[193] = Dt))
    : (Dt = t[193]);
  let Ot, kt;
  t[194] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, G.jsx)(l, { className: `size-4 text-muted-foreground` })),
      (kt = (0, G.jsx)(`span`, {
        className: `text-3xs text-muted-foreground/55`,
        children: `Logical bytes by operation`,
      })),
      (t[194] = Ot),
      (t[195] = kt))
    : ((Ot = t[194]), (kt = t[195]));
  let At;
  t[196] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = (0, G.jsx)(`div`, {
        className: `bg-muted/15 px-4 py-3 text-2xs leading-relaxed text-muted-foreground sm:px-5`,
        children: `Native counters identify which process is reading or writing. These application-level counters identify known T3 operations so process spikes can be correlated with specific persistence and logging paths.`,
      })),
      (t[196] = At))
    : (At = t[196]);
  let jt;
  t[197] === F?.attribution.entries
    ? (jt = t[198])
    : ((jt = F?.attribution.entries ?? []), (t[197] = F?.attribution.entries), (t[198] = jt));
  let Mt;
  t[199] === jt
    ? (Mt = t[200])
    : ((Mt = (0, G.jsx)(U, {
        title: `Instrumented application I/O`,
        icon: Ot,
        headerAction: kt,
        children: (0, G.jsxs)(`div`, {
          className: `overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xs/5`,
          children: [At, (0, G.jsx)(at, { entries: jt })],
        }),
      })),
      (t[199] = jt),
      (t[200] = Mt));
  let Nt;
  return (
    t[201] !== Ze || t[202] !== ct || t[203] !== Ct || t[204] !== Dt || t[205] !== Mt
      ? ((Nt = (0, G.jsxs)(G.Fragment, { children: [Ze, ct, Ct, Dt, Mt] })),
        (t[201] = Ze),
        (t[202] = ct),
        (t[203] = Ct),
        (t[204] = Dt),
        (t[205] = Mt),
        (t[206] = Nt))
      : (Nt = t[206]),
    Nt
  );
}
function lt(e) {
  return ` · PID ${e}`;
}
function ut() {
  return ``;
}
function dt() {
  return `Unavailable`;
}
function ft(e) {
  ue.add({
    type: `error`,
    title: `Could not restart resource monitor`,
    description: e instanceof Error ? e.message : `The resource monitor retry failed.`,
  });
}
function pt() {
  return new Set();
}
var Z = [
    {
      key: `otlpTracesUrl`,
      sourceKey: `otlpTracesSource`,
      variableKey: `otlpTracesVariable`,
      label: `Traces`,
      signal: `traces`,
    },
    {
      key: `otlpMetricsUrl`,
      sourceKey: `otlpMetricsSource`,
      variableKey: `otlpMetricsVariable`,
      label: `Metrics`,
      signal: `metrics`,
    },
    {
      key: `otlpLogsUrl`,
      sourceKey: `otlpLogsSource`,
      variableKey: `otlpLogsVariable`,
      label: `Logs`,
      signal: `logs`,
    },
  ],
  mt = { environment: `Set by environment`, bootstrap: `Set by desktop` };
function ht(e, { key: t, sourceKey: n, variableKey: r }) {
  let i = e?.[t],
    a = e?.[n];
  if (!(i === void 0 || (a !== `environment` && a !== `bootstrap`)))
    return { url: i, label: mt[a], variable: e?.[r] };
}
var gt = (e) => /^https?:\/\/./i.test(e);
function _t(e, t) {
  if (e === ``) return { label: `Off`, dot: `bg-muted-foreground/40` };
  if (t?.url !== e) return { label: `Not checked`, dot: `bg-muted-foreground/40` };
  let { result: n } = t;
  if (n === null) return { label: `Checking…`, dot: `bg-warning` };
  switch (n._tag) {
    case `Accepted`:
      return { label: `Connected · ${Math.round(n.latencyMs)} ms`, dot: `bg-success` };
    case `Rejected`:
      return { label: `Rejected · HTTP ${n.status}`, dot: `bg-destructive` };
    case `Unreachable`:
      return { label: n.timedOut ? `Timed out` : `Unreachable`, dot: `bg-destructive` };
  }
}
function vt() {
  let e = (0, W.c)(3),
    { environment: t, scope: n } = ge();
  if (n.kind !== `environment` || !t) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, G.jsx)(U, {
            title: `OpenTelemetry export`,
            id: `telemetry-export`,
            children: (0, G.jsx)(ye, {
              target: `environment`,
              children: `Choose one environment to configure its telemetry exports.`,
            }),
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let r;
  return (
    e[1] === t.environmentId
      ? (r = e[2])
      : ((r = (0, G.jsx)(yt, {}, t.environmentId)), (e[1] = t.environmentId), (e[2] = r)),
    r
  );
}
function yt() {
  let e = (0, W.c)(53),
    { environment: t } = ge(),
    n = me(bt),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = {}), (e[0] = r)) : (r = e[0]);
  let [i, a] = (0, K.useState)(r),
    [o, s] = (0, K.useState)(!1),
    [c, l] = (0, K.useState)(null),
    u = t?.environmentId,
    d;
  e[1] === u
    ? (d = e[2])
    : ((d = P.checkOtlpEndpoint.permissionAtom(u ?? null)), (e[1] = u), (e[2] = d));
  let f = re(d),
    p = f && t?.serverConfig?.environment.capabilities.otlpEndpointCheck === !0,
    m = t?.serverConfig?.observability,
    h;
  e[3] !== m || e[4] !== n
    ? ((h = () =>
        Object.fromEntries(
          Z.flatMap((e) => {
            let t = ht(m, e)?.url ?? n[e.key];
            return gt(t) ? [[e.key, { url: t, result: null }]] : [];
          }),
        )),
      (e[3] = m),
      (e[4] = n),
      (e[5] = h))
    : (h = e[5]);
  let [_, v] = (0, K.useState)(h),
    y;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { reportFailure: !0 }), (e[6] = y))
    : (y = e[6]);
  let b = ce(P.updateSettings, y),
    x = ce(P.checkOtlpEndpoint),
    S = { ...n, ...i },
    C = Z.filter((e) => {
      let { key: t } = e;
      return S[t].trim() !== n[t];
    }),
    w = C.length > 0,
    T;
  e[7] !== x || e[8] !== u
    ? ((T = async (e, t, n) => {
        if (!u) return;
        let r = await x({ environmentId: u, input: { signal: t, url: n } });
        v((t) => {
          if (t[e]?.url !== n || t[e].result !== null) return t;
          let i = { ...t };
          return (r._tag === `Success` ? (i[e] = { url: n, result: r.value }) : delete i[e], i);
        });
      }),
      (e[7] = x),
      (e[8] = u),
      (e[9] = T))
    : (T = e[9]);
  let E = T,
    D;
  e[10] === E
    ? (D = e[11])
    : ((D = (e, t, n) => {
        gt(n) && (v((t) => ({ ...t, [e]: { url: n, result: null } })), E(e, t, n));
      }),
      (e[10] = E),
      (e[11] = D));
  let ee = D,
    te;
  e[12] !== _ || e[13] !== E
    ? ((te = () => {
        for (let { key: e, signal: t } of Z) {
          let n = _[e];
          n?.result === null && E(e, t, n.url);
        }
      }),
      (e[12] = _),
      (e[13] = E),
      (e[14] = te))
    : (te = e[14]);
  let ne = (0, K.useEffectEvent)(te),
    ie;
  e[15] !== p || e[16] !== ne
    ? ((ie = () => {
        p && ne();
      }),
      (e[15] = p),
      (e[16] = ne),
      (e[17] = ie))
    : (ie = e[17]);
  let k;
  (e[18] === p ? (k = e[19]) : ((k = [p]), (e[18] = p), (e[19] = k)), (0, K.useEffect)(ie, k));
  let A = U,
    j = async (e) => {
      if ((e.preventDefault(), !t || o)) return;
      (s(!0), l(null));
      let n = await b({
        environmentId: t.environmentId,
        input: {
          patch: {
            observability: Object.fromEntries(
              C.map((e) => {
                let { key: t } = e;
                return [t, S[t]];
              }),
            ),
          },
        },
      });
      (s(!1), n._tag === `Success` && (a({}), l(`Saved. Restart the server to apply.`)));
    },
    M;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, G.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Send traces, metrics, and logs to an OTLP HTTP receiver. Restart the server to apply. Environment variables override these settings.`,
      })),
      (e[20] = M))
    : (M = e[20]);
  let N;
  e[21] !== f || e[22] !== t?.label
    ? ((N =
        !f &&
        (0, G.jsxs)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: [
            `This connection lacks permission to change settings on`,
            ` `,
            t?.label ?? `the selected environment`,
            `.`,
          ],
        })),
      (e[21] = f),
      (e[22] = t?.label),
      (e[23] = N))
    : (N = e[23]);
  let ae = Z.map((e) => {
      let { key: t, label: r, signal: i } = e,
        s = ht(m, e),
        c = s?.url ?? S[t].trim(),
        u = p ? _t(c, _[t]) : null,
        d = s
          ? {
              label: u ? `${s.label} · ${u.label}` : s.label,
              dot: u?.dot ?? `bg-muted-foreground/40`,
            }
          : u;
      return (0, G.jsxs)(
        `div`,
        {
          className: `grid gap-1.5`,
          children: [
            (0, G.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, G.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    d && (0, G.jsx)(z, { dotClassName: d.dot }),
                    (0, G.jsxs)(de, { htmlFor: t, children: [r, ` endpoint`] }),
                  ],
                }),
                d &&
                  (0, G.jsx)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: d.label,
                  }),
              ],
            }),
            (0, G.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, G.jsx)(O, {
                  id: t,
                  size: `sm`,
                  type: `url`,
                  pattern: `[Hh][Tt][Tt][Pp][Ss]?://.*`,
                  title: `Enter an HTTP or HTTPS endpoint, or leave empty to disable export.`,
                  placeholder: `http://localhost:4318/v1/${i}`,
                  value: S[t],
                  disabled: o || !f,
                  onChange: (e) => {
                    let r = e.target.value;
                    (a((e) => {
                      let i = { ...e, [t]: r };
                      return (r.trim() === n[t] && delete i[t], i);
                    }),
                      l(null));
                  },
                }),
                p &&
                  (0, G.jsx)(g, {
                    type: `button`,
                    size: `sm`,
                    variant: `outline`,
                    disabled: !gt(c) || _[t]?.result === null,
                    onClick: () => void ee(t, i, c),
                    children: `Test`,
                  }),
              ],
            }),
            (n[t] !== (m?.[t] ?? ``) || s?.variable) &&
              (0, G.jsxs)(`p`, {
                className: `break-all text-xs text-muted-foreground`,
                children: [
                  `Running: `,
                  m?.[t] || `Disabled`,
                  s?.variable &&
                    (0, G.jsxs)(G.Fragment, {
                      children: [
                        ` `,
                        `from `,
                        (0, G.jsx)(`code`, { className: `font-mono`, children: s.variable }),
                      ],
                    }),
                ],
              }),
          ],
        },
        t,
      );
    }),
    oe;
  e[24] === c
    ? (oe = e[25])
    : ((oe = (0, G.jsx)(`p`, {
        role: `status`,
        className: `text-xs text-muted-foreground`,
        children: c,
      })),
      (e[24] = c),
      (e[25] = oe));
  let se = !w || o || !f,
    F;
  e[26] !== p || e[27] !== ee || e[28] !== _ || e[29] !== m || e[30] !== n
    ? ((F = () => {
        if ((a({}), l(null), p))
          for (let e of Z) {
            let { key: t, signal: r } = e;
            ht(m, e) || (_[t]?.url !== n[t] && ee(t, r, n[t]));
          }
      }),
      (e[26] = p),
      (e[27] = ee),
      (e[28] = _),
      (e[29] = m),
      (e[30] = n),
      (e[31] = F))
    : (F = e[31]);
  let le;
  e[32] !== se || e[33] !== F
    ? ((le = (0, G.jsx)(g, {
        type: `button`,
        size: `xs`,
        variant: `outline`,
        disabled: se,
        onClick: F,
        children: `Discard`,
      })),
      (e[32] = se),
      (e[33] = F),
      (e[34] = le))
    : (le = e[34]);
  let I = !w || o || !f,
    ue = o ? `Saving…` : `Save`,
    L;
  e[35] !== I || e[36] !== ue
    ? ((L = (0, G.jsx)(g, { type: `submit`, size: `xs`, disabled: I, children: ue })),
      (e[35] = I),
      (e[36] = ue),
      (e[37] = L))
    : (L = e[37]);
  let R;
  e[38] !== le || e[39] !== L
    ? ((R = (0, G.jsxs)(`div`, { className: `flex shrink-0 gap-2`, children: [le, L] })),
      (e[38] = le),
      (e[39] = L),
      (e[40] = R))
    : (R = e[40]);
  let B;
  e[41] !== oe || e[42] !== R
    ? ((B = (0, G.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [oe, R],
      })),
      (e[41] = oe),
      (e[42] = R),
      (e[43] = B))
    : (B = e[43]);
  let V;
  e[44] !== j || e[45] !== M || e[46] !== N || e[47] !== ae || e[48] !== B
    ? ((V = (0, G.jsxs)(`form`, {
        className: `grid gap-4 px-4 py-4 sm:px-5`,
        onSubmit: j,
        children: [M, N, ae, B],
      })),
      (e[44] = j),
      (e[45] = M),
      (e[46] = N),
      (e[47] = ae),
      (e[48] = B),
      (e[49] = V))
    : (V = e[49]);
  let fe;
  return (
    e[50] !== A || e[51] !== V
      ? ((fe = (0, G.jsx)(A, {
          title: `OpenTelemetry export`,
          id: `telemetry-export`,
          children: V,
        })),
        (e[50] = A),
        (e[51] = V),
        (e[52] = fe))
      : (fe = e[52]),
    fe
  );
}
function bt(e) {
  return e.observability;
}
var xt = new Intl.NumberFormat();
function Q(e) {
  return xt.format(e);
}
function St(e) {
  return e < 1e3 ? `${Math.round(e)} ms` : `${(e / 1e3).toFixed(e >= 1e4 ? 1 : 2)} s`;
}
function Ct(e) {
  if (e < 1024) return `${e} B`;
  let t = [`KB`, `MB`, `GB`],
    n = -1,
    r = e;
  do ((r /= 1024), (n += 1));
  while (r >= 1024 && n < t.length - 1);
  return `${r.toFixed(r >= 10 ? 1 : 2)} ${t[n]}`;
}
function wt(e) {
  let t = (0, W.c)(2),
    n;
  t[0] === e.value ? (n = t[1]) : ((n = b(e.value)), (t[0] = e.value), (t[1] = n));
  let r = R(n);
  return r.status === `relative` ? (r.suffix ? `${r.value}\u00a0${r.suffix}` : r.value) : null;
}
function Tt(e) {
  return e.length <= 32 ? e : `${e.slice(0, 18)}...${e.slice(-10)}`;
}
function Et(e) {
  return e?.includes(`not a live descendant`) ?? !1;
}
function $(e) {
  let t = (0, W.c)(17),
    { label: n, value: r, tooltip: i, tone: a } = e,
    o = a === void 0 ? `default` : a,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = (0, G.jsx)(`span`, { className: `min-w-0 truncate`, children: n })),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] !== n || t[3] !== i
    ? ((c = i
        ? (0, G.jsxs)(h, {
            children: [
              (0, G.jsx)(T, {
                render: (0, G.jsx)(`button`, {
                  type: `button`,
                  className: `cursor-pointer inline-flex size-3.5 shrink-0 items-center justify-center rounded-sm text-muted-foreground/60 hover:text-foreground`,
                  "aria-label": `${n} details`,
                  children: (0, G.jsx)(d, { className: `size-3` }),
                }),
              }),
              (0, G.jsx)(w, { side: `top`, children: i }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== s || t[6] !== c
    ? ((l = (0, G.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-2xs font-medium uppercase tracking-widest text-muted-foreground/70`,
        children: [s, c],
      })),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l))
    : (l = t[7]);
  let u = o === `warning` && `text-warning-foreground`,
    f = o === `danger` && `text-destructive`,
    p;
  t[8] !== u || t[9] !== f
    ? ((p = k(`mt-1 truncate font-mono text-lg font-semibold tabular-nums text-foreground`, u, f)),
      (t[8] = u),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== p || t[12] !== r
    ? ((m = (0, G.jsx)(`div`, { className: p, children: r })),
      (t[11] = p),
      (t[12] = r),
      (t[13] = m))
    : (m = t[13]);
  let g;
  return (
    t[14] !== l || t[15] !== m
      ? ((g = (0, G.jsxs)(`div`, {
          className: `min-w-0 border-border/60 px-4 py-3 sm:px-5`,
          children: [l, m],
        })),
        (t[14] = l),
        (t[15] = m),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Dt(e) {
  let t = (0, W.c)(6),
    { children: n } = e,
    r,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, G.jsx)(`span`, {
        className: `pointer-events-none absolute inset-y-0 left-1/2 w-px bg-border/60`,
        "aria-hidden": !0,
      })),
      (i = (0, G.jsx)(`span`, {
        className: `pointer-events-none absolute inset-x-0 top-1/2 h-px bg-border/60 sm:hidden`,
        "aria-hidden": !0,
      })),
      (a = (0, G.jsx)(`span`, {
        className: `pointer-events-none absolute inset-y-0 left-1/4 hidden w-px bg-border/60 sm:block`,
        "aria-hidden": !0,
      })),
      (o = (0, G.jsx)(`span`, {
        className: `pointer-events-none absolute inset-y-0 left-3/4 hidden w-px bg-border/60 sm:block`,
        "aria-hidden": !0,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : ((r = t[0]), (i = t[1]), (a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] === n
      ? (s = t[5])
      : ((s = (0, G.jsxs)(`div`, {
          className: `relative grid grid-cols-2 sm:grid-cols-4`,
          children: [r, i, a, o, n],
        })),
        (t[4] = n),
        (t[5] = s)),
    s
  );
}
function Ot(e) {
  let t = (0, W.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, G.jsx)(`div`, {
          className: `px-4 py-4 text-xs text-muted-foreground sm:px-5`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function kt(e) {
  let t = (0, W.c)(21),
    { headers: n, children: r, minTableWidth: i, columnWidths: a } = e,
    o = i === void 0 ? `min-w-[640px]` : i,
    s = a && `table-fixed`,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = k(`w-full text-left text-xs`, o, s)), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== a || t[4] !== n
    ? ((l = a
        ? (0, G.jsx)(`colgroup`, {
            children: n.map((e, t) => (0, G.jsx)(`col`, { className: a[t] }, e)),
          })
        : null),
      (t[3] = a),
      (t[4] = n),
      (t[5] = l))
    : (l = t[5]);
  let u;
  if (t[6] !== a || t[7] !== n) {
    let e;
    (t[9] !== a || t[10] !== n.length
      ? ((e = (e, t) =>
          (0, G.jsx)(
            `th`,
            {
              className: k(
                `whitespace-nowrap px-4 py-2.5 font-semibold first:sm:pl-5 last:sm:pr-5`,
                !a && t === n.length - 1 && `w-px`,
              ),
              children: e.replaceAll(` `, `\xA0`),
            },
            e,
          )),
        (t[9] = a),
        (t[10] = n.length),
        (t[11] = e))
      : (e = t[11]),
      (u = n.map(e)),
      (t[6] = a),
      (t[7] = n),
      (t[8] = u));
  } else u = t[8];
  let d;
  t[12] === u
    ? (d = t[13])
    : ((d = (0, G.jsx)(`thead`, {
        className: `border-b border-border/60 text-2xs uppercase tracking-widest text-muted-foreground/70`,
        children: (0, G.jsx)(`tr`, { children: u }),
      })),
      (t[12] = u),
      (t[13] = d));
  let f;
  t[14] === r
    ? (f = t[15])
    : ((f = (0, G.jsx)(`tbody`, { className: `divide-y divide-border/60`, children: r })),
      (t[14] = r),
      (t[15] = f));
  let p;
  return (
    t[16] !== c || t[17] !== l || t[18] !== d || t[19] !== f
      ? ((p = (0, G.jsx)(L, {
          radius: `none`,
          chainVerticalScroll: !0,
          scrollFade: !0,
          hideScrollbars: !0,
          className: `w-full max-w-full`,
          children: (0, G.jsxs)(`table`, { className: c, children: [l, d, f] }),
        })),
        (t[16] = c),
        (t[17] = l),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p))
      : (p = t[20]),
    p
  );
}
function At(e) {
  let t = (0, W.c)(25),
    { traceId: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { target: `trace ID`, timeout: 1200 }), (t[0] = r))
    : (r = t[0]);
  let { copyToClipboard: i, isCopied: a } = I(r),
    o;
  t[1] === n ? (o = t[2]) : ((o = Tt(n)), (t[1] = n), (t[2] = o));
  let s;
  t[3] === o
    ? (s = t[4])
    : ((s = (0, G.jsx)(T, {
        render: (0, G.jsx)(`span`, {
          className: `min-w-0 flex-1 truncate font-mono text-2xs`,
          children: o,
        }),
      })),
      (t[3] = o),
      (t[4] = s));
  let c;
  t[5] === n
    ? (c = t[6])
    : ((c = (0, G.jsx)(w, { side: `top`, variant: `code`, children: n })), (t[5] = n), (t[6] = c));
  let l;
  t[7] !== s || t[8] !== c
    ? ((l = (0, G.jsxs)(h, { children: [s, c] })), (t[7] = s), (t[8] = c), (t[9] = l))
    : (l = t[9]);
  let u = a ? `Copied trace ID` : `Copy trace ID`,
    d;
  t[10] !== i || t[11] !== n
    ? ((d = () => i(n)), (t[10] = i), (t[11] = n), (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(p, { className: `size-3` })), (t[13] = f))
    : (f = t[13]);
  let m;
  t[14] !== u || t[15] !== d
    ? ((m = (0, G.jsx)(T, {
        render: (0, G.jsx)(g, {
          size: `icon-micro`,
          variant: `ghost-muted`,
          "aria-label": u,
          onClick: d,
          children: f,
        }),
      })),
      (t[14] = u),
      (t[15] = d),
      (t[16] = m))
    : (m = t[16]);
  let _ = a ? `Copied` : `Copy full trace ID`,
    v;
  t[17] === _
    ? (v = t[18])
    : ((v = (0, G.jsx)(w, { side: `top`, children: _ })), (t[17] = _), (t[18] = v));
  let y;
  t[19] !== v || t[20] !== m
    ? ((y = (0, G.jsxs)(h, { children: [m, v] })), (t[19] = v), (t[20] = m), (t[21] = y))
    : (y = t[21]);
  let b;
  return (
    t[22] !== y || t[23] !== l
      ? ((b = (0, G.jsxs)(`div`, {
          className: `flex w-full min-w-0 max-w-full items-center gap-2`,
          children: [l, y],
        })),
        (t[22] = y),
        (t[23] = l),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function jt(e) {
  let t = e.trim().split(/\s+/)[0];
  if (!t) return e;
  let n = t.replace(/^['"]|['"]$/g, ``);
  return n.split(/[\\/]/).filter(Boolean).at(-1) ?? n;
}
function Mt(e) {
  return e.depth > 0
    ? `Subprocess`
    : /\b(codex|claude|opencode|cursor)\b/i.test(e.command)
      ? `Agent`
      : `Process`;
}
function Nt(e) {
  let t = (0, W.c)(22),
    { process: n, isExpanded: r, onToggle: i } = e,
    a;
  t[0] === n.command ? (a = t[1]) : ((a = jt(n.command)), (t[0] = n.command), (t[1] = a));
  let o = a,
    s = n.childPids.length > 0,
    c = `${Math.min(n.depth, 6) * 10}px`,
    l;
  t[2] === c ? (l = t[3]) : ((l = { paddingLeft: c }), (t[2] = c), (t[3] = l));
  let u;
  t[4] !== s || t[5] !== r || t[6] !== o || t[7] !== i || t[8] !== n.pid
    ? ((u = s
        ? (0, G.jsx)(g, {
            size: `icon-micro`,
            variant: `ghost-muted`,
            "aria-label": r ? `Collapse ${o}` : `Expand ${o}`,
            onClick: () => i(n.pid),
            children: (0, G.jsx)(M, {
              className: `size-3.5`,
              icon: r ? q.ChevronDown : q.ChevronRight,
            }),
          })
        : (0, G.jsx)(`span`, { className: `size-5 shrink-0`, "aria-hidden": `true` })),
      (t[4] = s),
      (t[5] = r),
      (t[6] = o),
      (t[7] = i),
      (t[8] = n.pid),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(`span`, { className: `size-1.5 shrink-0 rounded-full bg-success/80` })),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === o
    ? (f = t[12])
    : ((f = (0, G.jsx)(T, {
        render: (0, G.jsx)(`span`, {
          className: `min-w-0 truncate font-medium text-foreground`,
          children: o,
        }),
      })),
      (t[11] = o),
      (t[12] = f));
  let p;
  t[13] === n.command
    ? (p = t[14])
    : ((p = (0, G.jsx)(w, { side: `top`, variant: `code`, children: n.command })),
      (t[13] = n.command),
      (t[14] = p));
  let m;
  t[15] !== f || t[16] !== p
    ? ((m = (0, G.jsxs)(h, { children: [f, p] })), (t[15] = f), (t[16] = p), (t[17] = m))
    : (m = t[17]);
  let _;
  return (
    t[18] !== l || t[19] !== u || t[20] !== m
      ? ((_ = (0, G.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-[1.25rem_0.375rem_minmax(0,1fr)] items-center gap-2`,
          style: l,
          children: [u, d, m],
        })),
        (t[18] = l),
        (t[19] = u),
        (t[20] = m),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function Pt(e, t) {
  let n = [],
    r = null;
  for (let i of e) {
    if (r !== null) {
      if (i.depth > r) continue;
      r = null;
    }
    (n.push(i), t.has(i.pid) && (r = i.depth));
  }
  return n;
}
function Ft(e) {
  let t = (0, W.c)(47),
    { processes: n, canMaintainEnvironment: r, signalingPid: i, onSignal: a, emptyLabel: o } = e,
    [s, c] = (0, K.useState)(It),
    l,
    u,
    d,
    f,
    p,
    m,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (t[0] !== r || t[1] !== s || t[2] !== o || t[3] !== a || t[4] !== n || t[5] !== i) {
    let e = Pt(n, s),
      C;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (e) => {
          c((t) => {
            let n = new Set(t);
            return (n.has(e) ? n.delete(e) : n.add(e), n);
          });
        }),
        (t[19] = C))
      : (C = t[19]);
    let E = C;
    ((p = `border-t border-border/60`),
      (l = L),
      (b = `none`),
      (x = !0),
      (S = !0),
      (d = !0),
      (f = `max-h-[min(64vh,44rem)] w-full max-w-full`),
      (_ = `w-full min-w-[1040px] table-fixed text-left text-xs`),
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = (0, G.jsxs)(`colgroup`, {
            children: [
              (0, G.jsx)(`col`, { className: `w-[24%]` }),
              (0, G.jsx)(`col`, { className: `w-[8%]` }),
              (0, G.jsx)(`col`, { className: `w-[10%]` }),
              (0, G.jsx)(`col`, { className: `w-[33%]` }),
              (0, G.jsx)(`col`, { className: `w-[8%]` }),
              (0, G.jsx)(`col`, { className: `w-[11%]` }),
              (0, G.jsx)(`col`, { className: `w-[6%]` }),
            ],
          })),
          (t[20] = v))
        : (v = t[20]),
      t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((y = (0, G.jsx)(`thead`, {
            className: `sticky top-0 z-10 border-b border-border/60 bg-card text-2xs uppercase tracking-widest text-muted-foreground/70`,
            children: (0, G.jsxs)(`tr`, {
              children: [
                (0, G.jsx)(`th`, {
                  className: `px-4 py-2 font-semibold sm:pl-5`,
                  children: `Name`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `CPU`,
                }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `Memory`,
                }),
                (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Command` }),
                (0, G.jsx)(`th`, {
                  className: `px-3 py-2 text-right font-semibold`,
                  children: `PID`,
                }),
                (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Type` }),
                (0, G.jsx)(`th`, {
                  className: `p-2 text-right font-semibold sm:pr-4`,
                  children: `Kill`,
                }),
              ],
            }),
          })),
          (t[21] = y))
        : (y = t[21]),
      (u = `divide-y divide-border/50`),
      (m =
        e.length === 0
          ? (0, G.jsx)(`tr`, {
              children: (0, G.jsx)(`td`, {
                colSpan: 7,
                className: `px-4 py-4 text-xs text-muted-foreground sm:px-5`,
                children: o ?? `No live descendant processes found.`,
              }),
            })
          : null));
    let D;
    (t[22] !== r || t[23] !== s || t[24] !== a || t[25] !== i
      ? ((D = (e) =>
          (0, G.jsxs)(
            `tr`,
            {
              className: `hover:bg-muted/20`,
              children: [
                (0, G.jsx)(`td`, {
                  className: `px-4 py-2 align-middle sm:pl-5`,
                  children: (0, G.jsx)(Nt, { process: e, isExpanded: !s.has(e.pid), onToggle: E }),
                }),
                (0, G.jsxs)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: [e.cpuPercent.toFixed(1), `%`],
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: Ct(e.rssBytes),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 align-middle text-muted-foreground`,
                  children: (0, G.jsxs)(h, {
                    children: [
                      (0, G.jsx)(T, {
                        render: (0, G.jsx)(`span`, {
                          className: `block truncate`,
                          children: e.command,
                        }),
                      }),
                      (0, G.jsx)(w, { side: `top`, variant: `code`, children: e.command }),
                    ],
                  }),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums text-muted-foreground`,
                  children: e.pid,
                }),
                (0, G.jsx)(`td`, {
                  className: `truncate px-3 py-2 align-middle text-muted-foreground`,
                  children: Mt(e),
                }),
                (0, G.jsx)(`td`, {
                  className: `p-2 align-middle sm:pr-4`,
                  children: (0, G.jsx)(be, {
                    disabled: !r || i === e.pid,
                    onSignal: (t) => a(e.pid, t),
                  }),
                }),
              ],
            },
            e.pid,
          )),
        (t[22] = r),
        (t[23] = s),
        (t[24] = a),
        (t[25] = i),
        (t[26] = D))
      : (D = t[26]),
      (g = e.map(D)),
      (t[0] = r),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a),
      (t[4] = n),
      (t[5] = i),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S));
  } else
    ((l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]),
      (g = t[12]),
      (_ = t[13]),
      (v = t[14]),
      (y = t[15]),
      (b = t[16]),
      (x = t[17]),
      (S = t[18]));
  let C;
  t[27] !== u || t[28] !== m || t[29] !== g
    ? ((C = (0, G.jsxs)(`tbody`, { className: u, children: [m, g] })),
      (t[27] = u),
      (t[28] = m),
      (t[29] = g),
      (t[30] = C))
    : (C = t[30]);
  let E;
  t[31] !== C || t[32] !== _ || t[33] !== v || t[34] !== y
    ? ((E = (0, G.jsxs)(`table`, { className: _, children: [v, y, C] })),
      (t[31] = C),
      (t[32] = _),
      (t[33] = v),
      (t[34] = y),
      (t[35] = E))
    : (E = t[35]);
  let D;
  t[36] !== l ||
  t[37] !== d ||
  t[38] !== f ||
  t[39] !== E ||
  t[40] !== b ||
  t[41] !== x ||
  t[42] !== S
    ? ((D = (0, G.jsx)(l, {
        radius: b,
        chainVerticalScroll: x,
        scrollFade: S,
        hideScrollbars: d,
        className: f,
        children: E,
      })),
      (t[36] = l),
      (t[37] = d),
      (t[38] = f),
      (t[39] = E),
      (t[40] = b),
      (t[41] = x),
      (t[42] = S),
      (t[43] = D))
    : (D = t[43]);
  let O;
  return (
    t[44] !== p || t[45] !== D
      ? ((O = (0, G.jsx)(`div`, { className: p, children: D })),
        (t[44] = p),
        (t[45] = D),
        (t[46] = O))
      : (O = t[46]),
    O
  );
}
function It() {
  return new Set();
}
var Lt = [
  { label: `5m`, windowMs: 3e5, bucketMs: 3e4 },
  { label: `15m`, windowMs: 9e5, bucketMs: 6e4 },
  { label: `30m`, windowMs: 18e5, bucketMs: 12e4 },
  { label: `1h`, windowMs: 36e5, bucketMs: 3e5 },
];
function Rt(e) {
  if (e < 60) return `${e.toFixed(e >= 10 ? 1 : 2)}s`;
  let t = e / 60;
  return t < 60 ? `${t.toFixed(t >= 10 ? 1 : 2)}m` : `${(t / 60).toFixed(2)}h`;
}
function zt(e) {
  let t = jt(e);
  return t.length > 42 ? `${t.slice(0, 39)}...` : t;
}
function Bt(e) {
  let t = (0, W.c)(21),
    { process: n, visualDepth: r } = e,
    i;
  t[0] === n.command ? (i = t[1]) : ((i = zt(n.command)), (t[0] = n.command), (t[1] = i));
  let a = i,
    o = `${Math.min(r, 6) * 10}px`,
    s;
  t[2] === o ? (s = t[3]) : ((s = { paddingLeft: o }), (t[2] = o), (t[3] = s));
  let c = `${n.isServerRoot ? `Root` : `Child`} process ${a}`,
    l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, G.jsx)(`span`, { className: `size-5 shrink-0`, "aria-hidden": `true` })),
      (t[4] = l))
    : (l = t[4]);
  let u = n.isServerRoot ? `bg-warning/90` : `bg-success/80`,
    d;
  t[5] === u ? (d = t[6]) : ((d = k(`size-1.5 shrink-0 rounded-full`, u)), (t[5] = u), (t[6] = d));
  let f;
  t[7] === d ? (f = t[8]) : ((f = (0, G.jsx)(`span`, { className: d })), (t[7] = d), (t[8] = f));
  let p;
  t[9] === a
    ? (p = t[10])
    : ((p = (0, G.jsx)(T, {
        render: (0, G.jsx)(`span`, {
          className: `min-w-0 truncate font-medium text-foreground`,
          children: a,
        }),
      })),
      (t[9] = a),
      (t[10] = p));
  let m;
  t[11] === n.command
    ? (m = t[12])
    : ((m = (0, G.jsx)(w, { side: `top`, variant: `code`, children: n.command })),
      (t[11] = n.command),
      (t[12] = m));
  let g;
  t[13] !== m || t[14] !== p
    ? ((g = (0, G.jsxs)(h, { children: [p, m] })), (t[13] = m), (t[14] = p), (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== g || t[17] !== s || t[18] !== c || t[19] !== f
      ? ((_ = (0, G.jsxs)(`div`, {
          className: `grid min-w-0 grid-cols-[1.25rem_0.375rem_minmax(0,1fr)] items-center gap-2`,
          style: s,
          "aria-label": c,
          children: [l, f, g],
        })),
        (t[16] = g),
        (t[17] = s),
        (t[18] = c),
        (t[19] = f),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function Vt(e) {
  let t = (0, W.c)(9),
    { buckets: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Math.max(1, ...n.map(Ht))), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  if (t[2] !== n || t[3] !== i) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => {
          let t = Math.max(2, (e.maxCpuPercent / i) * 100),
            n = Math.max(2, (e.avgCpuPercent / i) * 100);
          return (0, G.jsxs)(
            h,
            {
              children: [
                (0, G.jsx)(T, {
                  render: (0, G.jsx)(`div`, {
                    className: `flex h-full min-w-1 flex-1 items-end`,
                    children: (0, G.jsxs)(`div`, {
                      className: `relative h-full w-full`,
                      "aria-label": `Average CPU ${e.avgCpuPercent.toFixed(1)}%, peak CPU ${e.maxCpuPercent.toFixed(1)}%`,
                      children: [
                        (0, G.jsx)(`div`, {
                          className: `absolute inset-x-0 bottom-0 rounded-t-sm bg-foreground/15 transition-colors`,
                          style: { height: `${t}%` },
                        }),
                        (0, G.jsx)(`div`, {
                          className: `absolute inset-x-0 bottom-0 rounded-t-sm bg-foreground/60 transition-colors`,
                          style: { height: `${n}%` },
                        }),
                      ],
                    }),
                  }),
                }),
                (0, G.jsxs)(w, {
                  side: `top`,
                  children: [
                    `Avg `,
                    e.avgCpuPercent.toFixed(1),
                    `%, peak `,
                    e.maxCpuPercent.toFixed(1),
                    `%`,
                  ],
                }),
              ],
            },
            b(e.startedAt),
          );
        }),
        (t[5] = i),
        (t[6] = e)),
      (a = n.map(e)),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a));
  } else a = t[4];
  let o;
  return (
    t[7] === a
      ? (o = t[8])
      : ((o = (0, G.jsx)(`div`, {
          className: `border-t border-border/60 px-4 py-3 sm:px-5`,
          children: (0, G.jsx)(`div`, {
            className: `flex h-28 items-end gap-1 overflow-hidden rounded-sm bg-muted/10 p-2`,
            children: a,
          }),
        })),
        (t[7] = a),
        (t[8] = o)),
    o
  );
}
function Ht(e) {
  return e.maxCpuPercent;
}
function Ut(e) {
  let t = (0, W.c)(8),
    { selectedWindowMs: n, onSelect: r } = e,
    i = String(n),
    a;
  t[0] === i ? (a = t[1]) : ((a = [i]), (t[0] = i), (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (e) => {
        let t = Lt.find((t) => String(t.windowMs) === e[0]);
        t && r(t.windowMs);
      }),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = Lt.map(Wt)), (t[4] = s)) : (s = t[4]);
  let c;
  return (
    t[5] !== a || t[6] !== o
      ? ((c = (0, G.jsx)(V, {
          "aria-label": `Process history period`,
          variant: `segmented`,
          value: a,
          onValueChange: o,
          children: s,
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Wt(e) {
  return (0, G.jsx)(pe, { value: String(e.windowMs), children: e.label }, e.windowMs);
}
function Gt(e) {
  let t = (0, W.c)(13),
    { processes: n, emptyLabel: r } = e,
    i = n.reduce(Kt, null),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, G.jsxs)(`colgroup`, {
        children: [
          (0, G.jsx)(`col`, { className: `w-[24%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
          (0, G.jsx)(`col`, { className: `w-[16%]` }),
          (0, G.jsx)(`col`, { className: `w-[10%]` }),
        ],
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`thead`, {
        className: `sticky top-0 z-10 border-b border-border/60 bg-card text-2xs uppercase tracking-widest text-muted-foreground/70`,
        children: (0, G.jsxs)(`tr`, {
          children: [
            (0, G.jsx)(`th`, { className: `px-4 py-2 font-semibold sm:pl-5`, children: `Process` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `CPU Time`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Current`,
            }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Average`,
            }),
            (0, G.jsx)(`th`, { className: `px-3 py-2 text-right font-semibold`, children: `Peak` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold`,
              children: `Max Mem`,
            }),
            (0, G.jsx)(`th`, { className: `px-3 py-2 font-semibold`, children: `Command` }),
            (0, G.jsx)(`th`, {
              className: `px-3 py-2 text-right font-semibold sm:pr-5`,
              children: `PID`,
            }),
          ],
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== r || t[3] !== n.length
    ? ((s =
        n.length === 0
          ? (0, G.jsx)(`tr`, {
              children: (0, G.jsx)(`td`, {
                colSpan: 8,
                className: `px-4 py-4 text-xs text-muted-foreground sm:px-5`,
                children: r,
              }),
            })
          : null),
      (t[2] = r),
      (t[3] = n.length),
      (t[4] = s))
    : (s = t[4]);
  let c;
  if (t[5] !== n || t[6] !== i) {
    let e;
    (t[8] === i
      ? (e = t[9])
      : ((e = (e) =>
          (0, G.jsxs)(
            `tr`,
            {
              className: `hover:bg-muted/20`,
              children: [
                (0, G.jsx)(`td`, {
                  className: `px-4 py-2 align-middle sm:pl-5`,
                  children: (0, G.jsx)(Bt, {
                    process: e,
                    visualDepth: e.isServerRoot || i === null ? 0 : Math.max(1, e.depth - i + 1),
                  }),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: Rt(e.cpuSecondsApprox),
                }),
                (0, G.jsxs)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: [e.currentCpuPercent.toFixed(1), `%`],
                }),
                (0, G.jsxs)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: [e.avgCpuPercent.toFixed(1), `%`],
                }),
                (0, G.jsxs)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: [e.maxCpuPercent.toFixed(1), `%`],
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums`,
                  children: Ct(e.maxRssBytes),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 align-middle text-muted-foreground`,
                  children: (0, G.jsxs)(h, {
                    children: [
                      (0, G.jsx)(T, {
                        render: (0, G.jsx)(`span`, {
                          className: `block truncate`,
                          children: e.command,
                        }),
                      }),
                      (0, G.jsx)(w, { side: `top`, variant: `code`, children: e.command }),
                    ],
                  }),
                }),
                (0, G.jsx)(`td`, {
                  className: `px-3 py-2 text-right align-middle font-mono tabular-nums text-muted-foreground sm:pr-5`,
                  children: e.pid,
                }),
              ],
            },
            e.processKey,
          )),
        (t[8] = i),
        (t[9] = e)),
      (c = n.map(e)),
      (t[5] = n),
      (t[6] = i),
      (t[7] = c));
  } else c = t[7];
  let l;
  return (
    t[10] !== s || t[11] !== c
      ? ((l = (0, G.jsx)(`div`, {
          className: `border-t border-border/60`,
          children: (0, G.jsx)(L, {
            chainVerticalScroll: !0,
            scrollFade: !0,
            hideScrollbars: !0,
            className: `max-h-[min(64vh,44rem)] w-full max-w-full`,
            children: (0, G.jsxs)(`table`, {
              className: `w-full min-w-[980px] table-fixed text-left text-xs`,
              children: [
                a,
                o,
                (0, G.jsxs)(`tbody`, { className: `divide-y divide-border/50`, children: [s, c] }),
              ],
            }),
          }),
        })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function Kt(e, t) {
  return t.isServerRoot ? e : e === null ? t.depth : Math.min(e, t.depth);
}
function qt(e) {
  let t = (0, W.c)(7),
    { checkedAt: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n ? b(n) : null), (t[0] = n), (t[1] = r));
  let i = R(r);
  if (i.status === `missing`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`span`, {
            className: `text-2xs text-muted-foreground/50`,
            children: `Checking`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (i.status === `invalid`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`span`, {
            className: `text-2xs text-muted-foreground/50`,
            children: `Checked unavailable`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let a;
  return (
    t[4] !== i.suffix || t[5] !== i.value
      ? ((a = (0, G.jsx)(`span`, {
          className: `text-2xs text-muted-foreground/60`,
          children: i.suffix
            ? (0, G.jsxs)(G.Fragment, {
                children: [
                  `Checked `,
                  (0, G.jsx)(`span`, { className: `font-mono tabular-nums`, children: i.value }),
                  ` `,
                  i.suffix,
                ],
              })
            : (0, G.jsxs)(G.Fragment, { children: [`Checked `, i.value] }),
        })),
        (t[4] = i.suffix),
        (t[5] = i.value),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function Jt(e) {
  let t = (0, W.c)(12),
    { isPending: n, label: r, onClick: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, G.jsx)(B, { refreshing: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== a
    ? ((o = (0, G.jsx)(T, {
        render: (0, G.jsx)(g, {
          size: `icon-xs`,
          variant: `ghost-muted`,
          disabled: n,
          onClick: i,
          "aria-label": r,
          children: a,
        }),
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  t[7] === r
    ? (s = t[8])
    : ((s = (0, G.jsx)(w, { side: `top`, children: r })), (t[7] = r), (t[8] = s));
  let c;
  return (
    t[9] !== o || t[10] !== s
      ? ((c = (0, G.jsxs)(h, { children: [o, s] })), (t[9] = o), (t[10] = s), (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Yt() {
  let e = (0, W.c)(2),
    { environment: t } = ge(),
    n = t?.environmentId ?? ``,
    r;
  return (e[0] === n ? (r = e[1]) : ((r = (0, G.jsx)(Xt, {}, n)), (e[0] = n), (e[1] = r)), r);
}
function Xt() {
  let e = (0, W.c)(210),
    { environment: t } = ge(),
    n = t?.environmentId ?? null,
    r = ae(n, _),
    i = t?.serverConfig?.observability,
    a = t?.serverConfig?.availableEditors,
    o = ae(n, ne),
    c;
  e[0] === n
    ? (c = e[1])
    : ((c = n === null ? null : se.sessionStateAtom(n)), (e[0] = n), (e[1] = c));
  let l = F(c),
    u = t?.connection.phase ?? `available`,
    d = l.error !== null,
    p;
  e[2] !== l.data || e[3] !== u || e[4] !== d
    ? ((p = _e({ connectionPhase: u, session: l.data, hasSessionError: d })),
      (e[2] = l.data),
      (e[3] = u),
      (e[4] = d),
      (e[5] = p))
    : (p = e[5]);
  let m = p,
    y = m.canReadDiagnostics,
    b;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { reportFailure: !1 }), (e[6] = b))
    : (b = e[6]);
  let x = ce(P.signalProcess, b),
    S;
  e[7] === a ? (S = e[8]) : ((S = a ?? []), (e[7] = a), (e[8] = S));
  let C = fe(n, S),
    [O, ee] = (0, K.useState)(9e5),
    re = Lt.find((e) => e.windowMs === O) ?? Lt[1],
    A;
  e[9] !== y || e[10] !== n
    ? ((A = n === null || !y ? null : P.traceDiagnostics({ environmentId: n, input: {} })),
      (e[9] = y),
      (e[10] = n),
      (e[11] = A))
    : (A = e[11]);
  let { data: j, error: M, isPending: N, refresh: I } = F(A),
    R;
  e[12] !== y || e[13] !== n
    ? ((R = n === null || !y ? null : P.processDiagnostics({ environmentId: n, input: {} })),
      (e[12] = y),
      (e[13] = n),
      (e[14] = R))
    : (R = e[14]);
  let { data: z, error: B, isPending: V, refresh: de } = F(R),
    {
      data: H,
      error: pe,
      isPending: me,
      refresh: ve,
    } = F(
      n === null || !y
        ? null
        : P.processResourceHistory({
            environmentId: n,
            input: { windowMs: re.windowMs, bucketMs: re.bucketMs },
          }),
    ),
    [ye, be] = (0, K.useState)(!1),
    [q, xe] = (0, K.useState)(null),
    [Se, Ce] = (0, K.useState)(null),
    we = (0, K.useRef)(null),
    Te;
  e[15] !== n || e[16] !== i?.logsDirectoryPath || e[17] !== C
    ? ((Te = () => {
        let e = i?.logsDirectoryPath ?? null;
        e &&
          n !== null &&
          oe(n, `orchestration:operate`) &&
          (be(!0),
          xe(null),
          (async () => {
            let t = await C(e);
            if ((be(!1), t._tag === `Failure` && !D(t))) {
              let e = te(t);
              xe(e instanceof Error ? e.message : `Unable to open logs folder.`);
            }
          })());
      }),
      (e[15] = n),
      (e[16] = i?.logsDirectoryPath),
      (e[17] = C),
      (e[18] = Te))
    : (Te = e[18]);
  let Ee = Te,
    J = N && j === null,
    De = V && z === null,
    Oe = me && H === null,
    [ke, Ae] = (0, K.useState)(null);
  ke !== n && y && !J && !De && !Oe && Ae(n);
  let je;
  e[19] !== n || e[20] !== z?.processes || e[21] !== de || e[22] !== x
    ? ((je = async (e, t) => {
        let r = n,
          i = z?.processes.find((t) => t.pid === e);
        if (r === null || i === void 0 || !oe(r, `environment:maintain`) || we.current !== null)
          return;
        ((we.current = e), Ce(e));
        let a = () => {
          ((we.current = null), Ce(null));
        };
        if (t === `SIGKILL`) {
          let n;
          try {
            n = await le().dialogs.confirm(
              `Send SIGKILL to process ${e}? This cannot be handled by the process.`,
              { variant: `destructive` },
            );
          } catch (e) {
            let n = e;
            (a(),
              ue.add({
                type: `error`,
                title: `Could not confirm signal`,
                description: n instanceof Error ? n.message : `Failed to send ${t}.`,
              }));
            return;
          }
          if (!n) {
            a();
            return;
          }
        }
        if (!oe(r, `environment:maintain`)) {
          a();
          return;
        }
        let o = await x({
          environmentId: r,
          input: { pid: e, startTimeMs: i.startTimeMs, signal: t },
        });
        if ((a(), o._tag === `Failure`)) {
          if (!D(o)) {
            let e = te(o);
            ue.add({
              type: `error`,
              title: `Could not send ${t}`,
              description: e instanceof Error ? e.message : `Failed to send ${t}.`,
            });
          }
        } else if (o.value.signaled) de();
        else {
          let e = E(o.value.message);
          if ((de(), Et(e))) {
            ue.add({
              type: `info`,
              title: `Process already exited`,
              description: `The process is not a child of the T3 Server. It might already have exited.`,
            });
            return;
          }
          ue.add({
            type: `error`,
            title: `Could not send ${t}`,
            description: e ?? `Failed to send ${t}.`,
          });
        }
      }),
      (e[19] = n),
      (e[20] = z?.processes),
      (e[21] = de),
      (e[22] = x),
      (e[23] = je))
    : (je = e[23]);
  let Me = je,
    Ne;
  e[24] === z ? (Ne = e[25]) : ((Ne = z ? v(z.error) : null), (e[24] = z), (e[25] = Ne));
  let Pe = Ne,
    Fe;
  e[26] === H ? (Fe = e[27]) : ((Fe = H ? v(H.error) : null), (e[26] = H), (e[27] = Fe));
  let Ie = Fe,
    Le;
  e[28] === j ? (Le = e[29]) : ((Le = j ? v(j.error) : null), (e[28] = j), (e[29] = Le));
  let Re = Le,
    ze;
  e[30] === j
    ? (ze = e[31])
    : ((ze = j ? ie(j.partialFailure, nn) : !1), (e[30] = j), (e[31] = ze));
  let Be = ze;
  if (!y) {
    let t =
        n === null
          ? `Connect an environment to see diagnostics.`
          : m.isPending
            ? `Checking diagnostics access…`
            : m.error,
      r;
    return (
      e[32] === t
        ? (r = e[33])
        : ((r = (0, G.jsx)(he, {
            children: (0, G.jsx)(`p`, { className: `text-sm text-muted-foreground`, children: t }),
          })),
          (e[32] = t),
          (e[33] = r)),
      r
    );
  }
  let Ve;
  e[34] === n
    ? (Ve = e[35])
    : ((Ve = (0, G.jsx)(st, { environmentId: n })), (e[34] = n), (e[35] = Ve));
  let He = z?.readAt ?? null,
    Ue;
  e[36] === He
    ? (Ue = e[37])
    : ((Ue = (0, G.jsx)(qt, { checkedAt: He })), (e[36] = He), (e[37] = Ue));
  let Y;
  e[38] !== V || e[39] !== de
    ? ((Y = (0, G.jsx)(Jt, { isPending: V, label: `Refresh process diagnostics`, onClick: de })),
      (e[38] = V),
      (e[39] = de),
      (e[40] = Y))
    : (Y = e[40]);
  let We;
  e[41] !== Ue || e[42] !== Y
    ? ((We = (0, G.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [Ue, Y] })),
      (e[41] = Ue),
      (e[42] = Y),
      (e[43] = We))
    : (We = e[43]);
  let Ge;
  e[44] === z ? (Ge = e[45]) : ((Ge = z ? Q(z.processCount) : `...`), (e[44] = z), (e[45] = Ge));
  let Ke;
  e[46] === Ge
    ? (Ke = e[47])
    : ((Ke = (0, G.jsx)($, { label: `Child Processes`, value: Ge })), (e[46] = Ge), (e[47] = Ke));
  let qe;
  e[48] === z
    ? (qe = e[49])
    : ((qe = z ? `${z.totalCpuPercent.toFixed(1)}%` : `...`), (e[48] = z), (e[49] = qe));
  let X;
  e[50] === qe
    ? (X = e[51])
    : ((X = (0, G.jsx)($, {
        label: `CPU`,
        value: qe,
        tooltip: `Total CPU across live child processes of the current server process. The desktop shell and other parent processes are not included.`,
      })),
      (e[50] = qe),
      (e[51] = X));
  let Je;
  e[52] === z ? (Je = e[53]) : ((Je = z ? Ct(z.totalRssBytes) : `...`), (e[52] = z), (e[53] = Je));
  let Ye;
  e[54] === Je
    ? (Ye = e[55])
    : ((Ye = (0, G.jsx)($, {
        label: `Memory`,
        value: Je,
        tooltip: `Total resident memory across live child processes of the current server process. The desktop shell and other parent processes are not included.`,
      })),
      (e[54] = Je),
      (e[55] = Ye));
  let Xe = z ? String(z.serverPid) : `...`,
    Ze;
  e[56] === Xe
    ? (Ze = e[57])
    : ((Ze = (0, G.jsx)($, { label: `Server PID`, value: Xe })), (e[56] = Xe), (e[57] = Ze));
  let Qe;
  e[58] !== Ke || e[59] !== X || e[60] !== Ye || e[61] !== Ze
    ? ((Qe = (0, G.jsxs)(Dt, { children: [Ke, X, Ye, Ze] })),
      (e[58] = Ke),
      (e[59] = X),
      (e[60] = Ye),
      (e[61] = Ze),
      (e[62] = Qe))
    : (Qe = e[62]);
  let $e;
  e[63] !== Pe || e[64] !== B
    ? (($e =
        Pe || B
          ? (0, G.jsxs)(`div`, {
              className: `space-y-2 border-t border-border/60 px-4 py-3 text-xs text-muted-foreground sm:px-5`,
              children: [
                Pe
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: Pe.message }),
                      ],
                    })
                  : null,
                B
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: B }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (e[63] = Pe),
      (e[64] = B),
      (e[65] = $e))
    : ($e = e[65]);
  let et;
  e[66] === z?.processes
    ? (et = e[67])
    : ((et = z?.processes ?? []), (e[66] = z?.processes), (e[67] = et));
  let tt = De ? `Loading live processes...` : `No live descendant processes found.`,
    nt;
  e[68] !== r || e[69] !== Me || e[70] !== Se || e[71] !== et || e[72] !== tt
    ? ((nt = (0, G.jsx)(Ft, {
        processes: et,
        canMaintainEnvironment: r,
        signalingPid: Se,
        onSignal: Me,
        emptyLabel: tt,
      })),
      (e[68] = r),
      (e[69] = Me),
      (e[70] = Se),
      (e[71] = et),
      (e[72] = tt),
      (e[73] = nt))
    : (nt = e[73]);
  let rt;
  e[74] !== We || e[75] !== Qe || e[76] !== $e || e[77] !== nt
    ? ((rt = (0, G.jsxs)(U, { title: `Live Processes`, headerAction: We, children: [Qe, $e, nt] })),
      (e[74] = We),
      (e[75] = Qe),
      (e[76] = $e),
      (e[77] = nt),
      (e[78] = rt))
    : (rt = e[78]);
  let it;
  e[79] === O
    ? (it = e[80])
    : ((it = (0, G.jsx)(Ut, { selectedWindowMs: O, onSelect: ee })), (e[79] = O), (e[80] = it));
  let at = H?.readAt ?? null,
    ot;
  e[81] === at
    ? (ot = e[82])
    : ((ot = (0, G.jsx)(qt, { checkedAt: at })), (e[81] = at), (e[82] = ot));
  let ct;
  e[83] !== me || e[84] !== ve
    ? ((ct = (0, G.jsx)(Jt, { isPending: me, label: `Refresh resource history`, onClick: ve })),
      (e[83] = me),
      (e[84] = ve),
      (e[85] = ct))
    : (ct = e[85]);
  let lt;
  e[86] !== it || e[87] !== ot || e[88] !== ct
    ? ((lt = (0, G.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [it, ot, ct],
      })),
      (e[86] = it),
      (e[87] = ot),
      (e[88] = ct),
      (e[89] = lt))
    : (lt = e[89]);
  let ut;
  e[90] === H
    ? (ut = e[91])
    : ((ut = H ? Rt(H.totalCpuSecondsApprox) : `...`), (e[90] = H), (e[91] = ut));
  let dt;
  e[92] === ut
    ? (dt = e[93])
    : ((dt = (0, G.jsx)($, {
        label: `CPU Time`,
        value: ut,
        tooltip: `Approximate active CPU time for the T3 server root process and its descendants during the selected window. It grows only while sampled processes use CPU and older samples leave as the window moves.`,
      })),
      (e[92] = ut),
      (e[93] = dt));
  let ft;
  e[94] === H
    ? (ft = e[95])
    : ((ft = H ? Q(H.retainedSampleCount) : `...`), (e[94] = H), (e[95] = ft));
  let pt;
  e[96] === ft
    ? (pt = e[97])
    : ((pt = (0, G.jsx)($, {
        label: `Samples`,
        value: ft,
        tooltip: `In-memory process samples retained by the server. The server samples only while diagnostics is open, and this resets when the server restarts.`,
      })),
      (e[96] = ft),
      (e[97] = pt));
  let Z;
  e[98] === H
    ? (Z = e[99])
    : ((Z = H ? (H.sampleIntervalMs === 0 ? `On demand` : St(H.sampleIntervalMs)) : `...`),
      (e[98] = H),
      (e[99] = Z));
  let mt;
  e[100] === Z
    ? (mt = e[101])
    : ((mt = (0, G.jsx)($, { label: `Interval`, value: Z })), (e[100] = Z), (e[101] = mt));
  let ht;
  e[102] === H
    ? (ht = e[103])
    : ((ht = H ? Q(H.topProcesses.length) : `...`), (e[102] = H), (e[103] = ht));
  let gt;
  e[104] === ht
    ? (gt = e[105])
    : ((gt = (0, G.jsx)($, { label: `Processes`, value: ht })), (e[104] = ht), (e[105] = gt));
  let _t;
  e[106] !== dt || e[107] !== pt || e[108] !== mt || e[109] !== gt
    ? ((_t = (0, G.jsxs)(Dt, { children: [dt, pt, mt, gt] })),
      (e[106] = dt),
      (e[107] = pt),
      (e[108] = mt),
      (e[109] = gt),
      (e[110] = _t))
    : (_t = e[110]);
  let yt;
  e[111] !== Ie || e[112] !== pe
    ? ((yt =
        Ie || pe
          ? (0, G.jsxs)(`div`, {
              className: `space-y-2 border-t border-border/60 px-4 py-3 text-xs text-muted-foreground sm:px-5`,
              children: [
                Ie
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: Ie.message }),
                      ],
                    })
                  : null,
                pe
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: pe }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (e[111] = Ie),
      (e[112] = pe),
      (e[113] = yt))
    : (yt = e[113]);
  let bt;
  e[114] === H?.buckets
    ? (bt = e[115])
    : ((bt = H?.buckets ?? []), (e[114] = H?.buckets), (e[115] = bt));
  let xt;
  e[116] === bt
    ? (xt = e[117])
    : ((xt = (0, G.jsx)(Vt, { buckets: bt })), (e[116] = bt), (e[117] = xt));
  let wt;
  e[118] === H?.topProcesses
    ? (wt = e[119])
    : ((wt = H?.topProcesses ?? []), (e[118] = H?.topProcesses), (e[119] = wt));
  let Tt = Oe
      ? `Collecting process resource samples...`
      : `No process resource samples found for this window.`,
    At;
  e[120] !== wt || e[121] !== Tt
    ? ((At = (0, G.jsx)(Gt, { processes: wt, emptyLabel: Tt })),
      (e[120] = wt),
      (e[121] = Tt),
      (e[122] = At))
    : (At = e[122]);
  let jt;
  e[123] !== lt || e[124] !== _t || e[125] !== yt || e[126] !== xt || e[127] !== At
    ? ((jt = (0, G.jsxs)(U, {
        title: `Resource History`,
        headerAction: lt,
        children: [_t, yt, xt, At],
      })),
      (e[123] = lt),
      (e[124] = _t),
      (e[125] = yt),
      (e[126] = xt),
      (e[127] = At),
      (e[128] = jt))
    : (jt = e[128]);
  let Mt = j?.readAt ?? null,
    Nt;
  e[129] === Mt
    ? (Nt = e[130])
    : ((Nt = (0, G.jsx)(qt, { checkedAt: Mt })), (e[129] = Mt), (e[130] = Nt));
  let Pt = !o || !i?.logsDirectoryPath || ye,
    It;
  e[131] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = (0, G.jsx)(s, {})), (e[131] = It))
    : (It = e[131]);
  let zt;
  e[132] !== Ee || e[133] !== Pt
    ? ((zt = (0, G.jsx)(T, {
        render: (0, G.jsx)(g, {
          size: `icon-xs`,
          variant: `ghost-muted`,
          disabled: Pt,
          onClick: Ee,
          "aria-label": `Open logs folder`,
          children: It,
        }),
      })),
      (e[132] = Ee),
      (e[133] = Pt),
      (e[134] = zt))
    : (zt = e[134]);
  let Bt;
  e[135] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = (0, G.jsx)(w, { side: `top`, children: `Open logs folder` })), (e[135] = Bt))
    : (Bt = e[135]);
  let Ht;
  e[136] === zt
    ? (Ht = e[137])
    : ((Ht = (0, G.jsxs)(h, { children: [zt, Bt] })), (e[136] = zt), (e[137] = Ht));
  let Wt;
  e[138] !== N || e[139] !== I
    ? ((Wt = (0, G.jsx)(Jt, { isPending: N, label: `Refresh trace diagnostics`, onClick: I })),
      (e[138] = N),
      (e[139] = I),
      (e[140] = Wt))
    : (Wt = e[140]);
  let Kt;
  e[141] !== Nt || e[142] !== Ht || e[143] !== Wt
    ? ((Kt = (0, G.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [Nt, Ht, Wt],
      })),
      (e[141] = Nt),
      (e[142] = Ht),
      (e[143] = Wt),
      (e[144] = Kt))
    : (Kt = e[144]);
  let Yt;
  e[145] === j ? (Yt = e[146]) : ((Yt = j ? Q(j.recordCount) : `...`), (e[145] = j), (e[146] = Yt));
  let Xt;
  e[147] === Yt
    ? (Xt = e[148])
    : ((Xt = (0, G.jsx)($, { label: `Spans`, value: Yt })), (e[147] = Yt), (e[148] = Xt));
  let rn;
  e[149] === j
    ? (rn = e[150])
    : ((rn = j ? Q(j.failureCount) : `...`), (e[149] = j), (e[150] = rn));
  let an = j && j.failureCount > 0 ? `danger` : `default`,
    on;
  e[151] !== rn || e[152] !== an
    ? ((on = (0, G.jsx)($, { label: `Failures`, value: rn, tone: an })),
      (e[151] = rn),
      (e[152] = an),
      (e[153] = on))
    : (on = e[153]);
  let sn;
  e[154] === j
    ? (sn = e[155])
    : ((sn = j ? Q(j.slowSpanCount) : `...`), (e[154] = j), (e[155] = sn));
  let cn;
  e[156] === j
    ? (cn = e[157])
    : ((cn = j
        ? `Spans with a duration of ${St(j.slowSpanThresholdMs)} or longer.`
        : `Spans at or above the configured slow-span threshold.`),
      (e[156] = j),
      (e[157] = cn));
  let ln = j && j.slowSpanCount > 0 ? `warning` : `default`,
    un;
  e[158] !== sn || e[159] !== cn || e[160] !== ln
    ? ((un = (0, G.jsx)($, { label: `Slow Spans`, value: sn, tooltip: cn, tone: ln })),
      (e[158] = sn),
      (e[159] = cn),
      (e[160] = ln),
      (e[161] = un))
    : (un = e[161]);
  let dn;
  e[162] === j
    ? (dn = e[163])
    : ((dn = j ? Q(j.parseErrorCount) : `...`), (e[162] = j), (e[163] = dn));
  let fn = j && j.parseErrorCount > 0 ? `warning` : `default`,
    pn;
  e[164] !== dn || e[165] !== fn
    ? ((pn = (0, G.jsx)($, { label: `Parse Errors`, value: dn, tone: fn })),
      (e[164] = dn),
      (e[165] = fn),
      (e[166] = pn))
    : (pn = e[166]);
  let mn;
  e[167] !== Xt || e[168] !== on || e[169] !== un || e[170] !== pn
    ? ((mn = (0, G.jsxs)(Dt, { children: [Xt, on, un, pn] })),
      (e[167] = Xt),
      (e[168] = on),
      (e[169] = un),
      (e[170] = pn),
      (e[171] = mn))
    : (mn = e[171]);
  let hn;
  e[172] !== M || e[173] !== q || e[174] !== Re || e[175] !== Be
    ? ((hn =
        q || Re || M
          ? (0, G.jsxs)(`div`, {
              className: `space-y-2 border-t border-border/60 px-4 py-3 text-xs text-muted-foreground sm:px-5`,
              children: [
                q
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: q }),
                      ],
                    })
                  : null,
                Re
                  ? (0, G.jsxs)(`div`, {
                      className: k(
                        `flex items-start gap-2`,
                        Be ? `text-warning-foreground` : `text-destructive`,
                      ),
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, {
                          children: Be
                            ? `Some trace files could not be read, so diagnostics may be incomplete. ${Re.message}`
                            : Re.message,
                        }),
                      ],
                    })
                  : null,
                M
                  ? (0, G.jsxs)(`div`, {
                      className: `flex items-start gap-2 text-destructive`,
                      children: [
                        (0, G.jsx)(f, { className: `size-3.5 h-lh shrink-0` }),
                        (0, G.jsx)(`span`, { children: M }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (e[172] = M),
      (e[173] = q),
      (e[174] = Re),
      (e[175] = Be),
      (e[176] = hn))
    : (hn = e[176]);
  let gn;
  e[177] !== Kt || e[178] !== mn || e[179] !== hn
    ? ((gn = (0, G.jsxs)(U, { title: `Trace Diagnostics`, headerAction: Kt, children: [mn, hn] })),
      (e[177] = Kt),
      (e[178] = mn),
      (e[179] = hn),
      (e[180] = gn))
    : (gn = e[180]);
  let _n;
  e[181] !== j || e[182] !== J
    ? ((_n = (0, G.jsx)(U, {
        title: `Latest Failures`,
        children:
          j && j.latestFailures.length > 0
            ? (0, G.jsx)(kt, {
                headers: [`Span`, `Cause`, `Duration`, `Ended`],
                children: j.latestFailures.map(tn),
              })
            : (0, G.jsx)(Ot, { label: J ? `Loading failures...` : `No failed spans found.` }),
      })),
      (e[181] = j),
      (e[182] = J),
      (e[183] = _n))
    : (_n = e[183]);
  let vn;
  e[184] !== j || e[185] !== J
    ? ((vn = (0, G.jsx)(U, {
        title: `Most Common Failures`,
        children:
          j && j.commonFailures.length > 0
            ? (0, G.jsx)(kt, {
                headers: [`Span`, `Count`, `Cause`, `Last Seen`],
                minTableWidth: `min-w-[760px]`,
                children: j.commonFailures.map(en),
              })
            : (0, G.jsx)(Ot, {
                label: J ? `Loading failure groups...` : `No repeated failures found.`,
              }),
      })),
      (e[184] = j),
      (e[185] = J),
      (e[186] = vn))
    : (vn = e[186]);
  let yn;
  e[187] !== j || e[188] !== J
    ? ((yn = (0, G.jsx)(U, {
        title: `Slowest Spans`,
        children:
          j && j.slowestSpans.length > 0
            ? (0, G.jsx)(kt, {
                headers: [`Span`, `Duration`, `Ended`, `Trace`],
                minTableWidth: `min-w-[900px]`,
                columnWidths: [`w-[44%]`, `w-[14%]`, `w-[12%]`, `w-[30%]`],
                children: j.slowestSpans.map($t),
              })
            : (0, G.jsx)(Ot, { label: J ? `Loading slow spans...` : `No spans found.` }),
      })),
      (e[187] = j),
      (e[188] = J),
      (e[189] = yn))
    : (yn = e[189]);
  let bn;
  e[190] !== j || e[191] !== J
    ? ((bn = (0, G.jsx)(U, {
        title: `Span Logs`,
        children:
          j && j.latestWarningAndErrorLogs.length > 0
            ? (0, G.jsx)(L, {
                radius: `none`,
                chainVerticalScroll: !0,
                scrollFade: !0,
                hideScrollbars: !0,
                className: `w-full max-w-full`,
                children: (0, G.jsxs)(`table`, {
                  className: `w-full min-w-[920px] table-fixed text-left text-xs`,
                  children: [
                    (0, G.jsxs)(`colgroup`, {
                      children: [
                        (0, G.jsx)(`col`, { className: `w-[11%]` }),
                        (0, G.jsx)(`col`, { className: `w-[9%]` }),
                        (0, G.jsx)(`col`, { className: `w-[24%]` }),
                        (0, G.jsx)(`col`, { className: `w-[26%]` }),
                        (0, G.jsx)(`col`, { className: `w-[30%]` }),
                      ],
                    }),
                    (0, G.jsx)(`thead`, {
                      className: `border-b border-border/60 text-2xs uppercase tracking-widest text-muted-foreground/70`,
                      children: (0, G.jsxs)(`tr`, {
                        children: [
                          (0, G.jsx)(`th`, {
                            className: `whitespace-nowrap px-4 py-2.5 font-semibold sm:pl-5`,
                            children: `Time`,
                          }),
                          (0, G.jsx)(`th`, {
                            className: `whitespace-nowrap px-4 py-2.5 font-semibold`,
                            children: `Level`,
                          }),
                          (0, G.jsx)(`th`, {
                            className: `whitespace-nowrap px-4 py-2.5 font-semibold`,
                            children: `Span`,
                          }),
                          (0, G.jsx)(`th`, {
                            className: `whitespace-nowrap px-4 py-2.5 font-semibold`,
                            children: `Message`,
                          }),
                          (0, G.jsx)(`th`, {
                            className: `whitespace-nowrap px-4 py-2.5 font-semibold sm:pr-5`,
                            children: `Trace`,
                          }),
                        ],
                      }),
                    }),
                    (0, G.jsx)(`tbody`, {
                      className: `divide-y divide-border/60`,
                      children: j.latestWarningAndErrorLogs.map(Qt),
                    }),
                  ],
                }),
              })
            : (0, G.jsx)(Ot, {
                label: J ? `Loading recent logs...` : `No warnings or errors found.`,
              }),
      })),
      (e[190] = j),
      (e[191] = J),
      (e[192] = bn))
    : (bn = e[192]);
  let xn;
  e[193] !== j || e[194] !== J
    ? ((xn = (0, G.jsx)(U, {
        title: `Top Span Names`,
        children:
          j && j.topSpansByCount.length > 0
            ? (0, G.jsx)(kt, {
                headers: [`Span`, `Count`, `Failures`, `Average`, `Max`],
                minTableWidth: `min-w-[760px]`,
                columnWidths: [`w-[48%]`, `w-[13%]`, `w-[13%]`, `w-[13%]`, `w-[13%]`],
                children: j.topSpansByCount.map(Zt),
              })
            : (0, G.jsx)(Ot, { label: J ? `Loading span names...` : `No spans found.` }),
      })),
      (e[193] = j),
      (e[194] = J),
      (e[195] = xn))
    : (xn = e[195]);
  let Sn;
  e[196] !== n || e[197] !== ke
    ? ((Sn = ke === n && (0, G.jsx)(vt, {})), (e[196] = n), (e[197] = ke), (e[198] = Sn))
    : (Sn = e[198]);
  let Cn;
  return (
    e[199] !== Ve ||
    e[200] !== rt ||
    e[201] !== jt ||
    e[202] !== gn ||
    e[203] !== _n ||
    e[204] !== vn ||
    e[205] !== yn ||
    e[206] !== bn ||
    e[207] !== xn ||
    e[208] !== Sn
      ? ((Cn = (0, G.jsxs)(he, {
          width: `expanded`,
          className: `gap-10`,
          children: [Ve, rt, jt, gn, _n, vn, yn, bn, xn, Sn],
        })),
        (e[199] = Ve),
        (e[200] = rt),
        (e[201] = jt),
        (e[202] = gn),
        (e[203] = _n),
        (e[204] = vn),
        (e[205] = yn),
        (e[206] = bn),
        (e[207] = xn),
        (e[208] = Sn),
        (e[209] = Cn))
      : (Cn = e[209]),
    Cn
  );
}
function Zt(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      children: [
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top text-xs font-medium text-foreground first:sm:pl-5`,
          children: e.name,
        }),
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums`,
          children: Q(e.count),
        }),
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums`,
          children: Q(e.failureCount),
        }),
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums`,
          children: St(e.averageDurationMs),
        }),
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums last:sm:pr-5`,
          children: St(e.maxDurationMs),
        }),
      ],
    },
    e.name,
  );
}
function Qt(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      className: `hover:bg-muted/15`,
      children: [
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums text-muted-foreground sm:pl-5`,
          children: (0, G.jsx)(wt, { value: e.seenAt }),
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top`,
          children: (0, G.jsx)(`span`, {
            className: `inline-flex rounded bg-muted px-1.5 py-0.5 font-mono text-2xs font-medium uppercase text-foreground/80`,
            children: e.level,
          }),
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top`,
          children: (0, G.jsx)(`div`, {
            className: `truncate font-medium text-foreground`,
            children: e.spanName,
          }),
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top text-muted-foreground`,
          children: (0, G.jsx)(ve, {
            collapsedClassName: `line-clamp-2`,
            expandLabel: `Show full message`,
            text: e.message,
          }),
        }),
        (0, G.jsx)(`td`, {
          className: `min-w-0 whitespace-nowrap px-4 py-3 align-top text-muted-foreground sm:pr-5`,
          children: (0, G.jsx)(At, { traceId: e.traceId }),
        }),
      ],
    },
    `${e.traceId}:${e.spanId}:${b(e.seenAt)}:${e.message}`,
  );
}
function $t(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      children: [
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top text-xs font-medium text-foreground first:sm:pl-5`,
          children: e.name,
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top font-mono tabular-nums`,
          children: St(e.durationMs),
        }),
        (0, G.jsx)(`td`, {
          className: `w-px whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums text-muted-foreground`,
          children: (0, G.jsx)(wt, { value: e.endedAt }),
        }),
        (0, G.jsx)(`td`, {
          className: `min-w-0 whitespace-nowrap px-4 py-3 align-top text-muted-foreground last:sm:pr-5`,
          children: (0, G.jsx)(At, { traceId: e.traceId }),
        }),
      ],
    },
    `${e.traceId}:${e.spanId}`,
  );
}
function en(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      children: [
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top text-xs font-medium text-foreground first:sm:pl-5`,
          children: e.name,
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top font-mono tabular-nums`,
          children: Q(e.count),
        }),
        (0, G.jsx)(`td`, {
          className: `max-w-[360px] px-4 py-3 align-top text-muted-foreground`,
          children: (0, G.jsx)(ve, { text: e.cause }),
        }),
        (0, G.jsx)(`td`, {
          className: `w-px whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums text-muted-foreground last:sm:pr-5`,
          children: (0, G.jsx)(wt, { value: e.lastSeenAt }),
        }),
      ],
    },
    `${e.name}:${e.cause}`,
  );
}
function tn(e) {
  return (0, G.jsxs)(
    `tr`,
    {
      children: [
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top text-xs font-medium text-foreground first:sm:pl-5`,
          children: e.name,
        }),
        (0, G.jsx)(`td`, {
          className: `max-w-[360px] px-4 py-3 align-top text-muted-foreground`,
          children: (0, G.jsx)(ve, { text: e.cause }),
        }),
        (0, G.jsx)(`td`, {
          className: `px-4 py-3 align-top font-mono tabular-nums`,
          children: St(e.durationMs),
        }),
        (0, G.jsx)(`td`, {
          className: `whitespace-nowrap px-4 py-3 align-top font-mono tabular-nums text-muted-foreground last:sm:pr-5`,
          children: (0, G.jsx)(wt, { value: e.endedAt }),
        }),
      ],
    },
    `${e.traceId}:${e.spanId}`,
  );
}
function nn() {
  return !1;
}
var rn = Yt;
export { rn as component };
//# sourceMappingURL=_chat.settings.diagnostics-5U8PH1IZ.js.map
