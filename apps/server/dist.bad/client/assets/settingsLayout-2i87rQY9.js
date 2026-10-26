import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, i as a, o } from "./search-BrluOr7L.js";
import { n as s } from "./triangle-alert-Ca4wixX0.js";
import { t as c } from "./layers-CHU4eBL6.js";
import {
  $f as l,
  Bn as u,
  Dr as d,
  H_ as f,
  JC as p,
  Jp as m,
  L_ as h,
  Lf as g,
  Or as _,
  Qn as v,
  Vm as y,
  Vn as b,
  Wn as x,
  Xp as S,
  ar as C,
  cp as w,
  cw as T,
  hm as E,
  ir as D,
  jS as O,
  jc as k,
  lr as A,
  mr as j,
  or as M,
  qf as N,
  rh as P,
  sr as F,
  t as I,
  zf as L,
} from "./utils-CPoejuy5.js";
import { T as R } from "./entities-CgVpsCCl.js";
import {
  M as z,
  N as B,
  P as ee,
  _ as V,
  a as H,
  b as te,
  g as U,
  l as ne,
  t as re,
} from "./useSettings-N-JG2LFZ.js";
import {
  C as W,
  D as ie,
  E as ae,
  S as oe,
  T as se,
  _ as ce,
  b as G,
  m as le,
  v as ue,
  x as de,
  y as fe,
} from "./server-3D32GveR.js";
import { a as pe, r as me, s as he } from "./session-0UrRHIau.js";
import { t as K } from "./use-atom-command-DGAuqAck.js";
import { i as q } from "./toast-B4KPIJDZ.js";
import { n as J } from "./useNavigate-Dq4t21kA.js";
import { t as Y } from "./useLocation-Be_QVulB.js";
import {
  i as X,
  l as Z,
  n as ge,
  o as _e,
  r as ve,
  s as ye,
  t as be,
} from "./combobox-HagV04Wz.js";
import { n as xe, r as Se, t as Ce } from "./collapsible-Dp2CGco9.js";
import { t as we } from "./pullRequestDetail.logic-Df887lG8.js";
import { i as Te, o as Ee } from "./projectFilesQueryState-U0XPiqIE.js";
import { n as De } from "./EnvironmentMachineIcon-M7J6_xOZ.js";
import { t as Oe } from "./t3ProjectFile-7gwVsbWF.js";
import { i as ke, p as Ae, t as je } from "./settingsScope-ohK4TuKq.js";
import { Li as Me, Qo as Ne, as as Pe, es as Fe, rl as Ie, rs as Le } from "./main-BZa0O6xN.js";
import { t as Re } from "./WorkspacePageContainer-D3An2RdA.js";
var ze = e(t(), 1),
  Q = e(r(), 1),
  $ = n();
function Be() {
  let e = (0, $.c)(6),
    t = R(),
    n = ne(We),
    r = ne(Ue),
    i = ee(),
    { environments: a } = z(),
    o;
  if (e[0] !== a || e[1] !== i || e[2] !== t || e[3] !== n || e[4] !== r) {
    let s = new Map(a.map(He));
    ((o = Me({
      projects: t,
      settings: { sidebarProjectGroupingMode: n, sidebarProjectGroupingOverrides: r },
      primaryEnvironmentId: i,
      resolveEnvironmentLabel: (e) => s.get(e) ?? null,
    }).sort(Ve)),
      (e[0] = a),
      (e[1] = i),
      (e[2] = t),
      (e[3] = n),
      (e[4] = r),
      (e[5] = o));
  } else o = e[5];
  return o;
}
function Ve(e, t) {
  return e.displayName.localeCompare(t.displayName);
}
function He(e) {
  return [e.environmentId, e.label];
}
function Ue(e) {
  return e.sidebarProjectGroupingOverrides;
}
function We(e) {
  return e.sidebarProjectGroupingMode;
}
function Ge(e) {
  if (!e.displayUrl) return e.environmentId;
  try {
    return new URL(e.displayUrl).host || e.displayUrl;
  } catch {
    return e.displayUrl;
  }
}
function Ke(e, t) {
  let n = t?.filter((t) => t.environmentId !== e.environmentId && t.label === e.label),
    r = Ge(e),
    i = n?.some((e) => Ge(e) === r) ? e.displayUrl || e.environmentId : r;
  return { primary: e.label, secondary: t === void 0 || n?.length ? i : `` };
}
function qe(e, t) {
  let { primary: n, secondary: r } = Ke(e, t);
  return r ? `${n} · ${r}` : n;
}
function Je(e, t, n = !1) {
  let r = e.memberProjects.map((e) => {
    let r = t.find((t) => t.environmentId === e.environmentId);
    if (!r) return e.environmentLabel ?? e.environmentId;
    let { primary: i, secondary: a } = Ke(r, t),
      o = a || (n ? Ge(r) : ``);
    return n || o ? `${i} · ${o}` : i;
  });
  return Array.from(new Set(r));
}
function Ye(e, t) {
  return e.machine ?? t ?? `all`;
}
function Xe(e) {
  return e.project ?? `all`;
}
function Ze(e, t) {
  let { machine: n } = t;
  return n === void 0 ? e : e.filter((e) => e.memberProjects.some((e) => e.environmentId === n));
}
function Qe(e, t) {
  let n = {};
  return (e.project && (n.project = e.project), t !== `all` && (n.machine = t), n);
}
function $e(e, t) {
  let n = {};
  return (t !== `all` && (n.project = t), e.machine && (n.machine = e.machine), n);
}
function et(e, t, n, r) {
  if (e.machine || t.kind === `unavailable`) return e;
  let i = new Set(t.environmentIds),
    a = n.filter((e) => i.has(e.environmentId)),
    o =
      a.find((e) => e.environmentId === r) ??
      a.find((e) => e.connection.phase === `connected`) ??
      a[0];
  return o ? { ...e, machine: o.environmentId } : e;
}
var tt = g((e) => {
  let t = JSON.parse(e);
  return L((e) => {
    let n = new Map();
    for (let [r, i, a] of t) {
      let t = e(Te(r, i, S));
      if (t.waiting) continue;
      let o = e(Ee(r, i, `t3.json`))?.data ?? p(w(t));
      n.set(a, o === null || o.exists === !1 || o.truncated ? null : Oe(o.contents));
    }
    return n;
  }).pipe(N(`web-settings-member-project-files:${e}`));
});
function nt(e) {
  let t = (0, $.c)(5),
    n;
  t[0] !== e.kind || t[1] !== e.members
    ? ((n = e.kind === `project` || e.kind === `checkout` ? e.members : []),
      (t[0] = e.kind),
      (t[1] = e.members),
      (t[2] = n))
    : (n = t[2]);
  let r = n,
    i;
  return (
    t[3] === r ? (i = t[4]) : ((i = tt(JSON.stringify(r.map(rt)))), (t[3] = r), (t[4] = i)), k(i)
  );
}
function rt(e) {
  return [e.environmentId, e.workspaceRoot, e.physicalProjectKey];
}
function it(e, t) {
  let n = (0, $.c)(24),
    r = Be(),
    { environments: i } = z(),
    a = ee(),
    o;
  n[0] !== i || n[1] !== r || n[2] !== a || n[3] !== e || n[4] !== t
    ? ((o = t ? et(e, je(e, r, i), i, a) : e),
      (n[0] = i),
      (n[1] = r),
      (n[2] = a),
      (n[3] = e),
      (n[4] = t),
      (n[5] = o))
    : (o = n[5]);
  let s = o,
    c;
  n[6] !== i || n[7] !== r || n[8] !== s
    ? ((c = je(s, r, i)), (n[6] = i), (n[7] = r), (n[8] = s), (n[9] = c))
    : (c = n[9]);
  let l = c,
    u = nt(l),
    d,
    f,
    p;
  n[10] !== i || n[11] !== a || n[12] !== u || n[13] !== l
    ? ((d = ie(l, i, a)),
      (p = W(l, d.connectedEnvironments, u)),
      (f = p.find((e) => e.environmentId === d.environment?.environmentId) ?? p[0] ?? null),
      (n[10] = i),
      (n[11] = a),
      (n[12] = u),
      (n[13] = l),
      (n[14] = d),
      (n[15] = f),
      (n[16] = p))
    : ((d = n[14]), (f = n[15]), (p = n[16]));
  let m = f,
    h;
  return (
    n[17] !== r || n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p
      ? ((h = { scope: l, groups: r, search: s, ...d, targets: p, target: m }),
        (n[17] = r),
        (n[18] = l),
        (n[19] = s),
        (n[20] = d),
        (n[21] = m),
        (n[22] = p),
        (n[23] = h))
      : (h = n[23]),
    h
  );
}
var at = (0, ze.createContext)(null);
function ot(e) {
  let t = (0, $.c)(7),
    { search: n, onChange: r, children: i, singleEnvironment: a } = e,
    o = a !== void 0 && a,
    s = it(n, o),
    c;
  t[0] !== r || t[1] !== s || t[2] !== o
    ? ((c = { ...s, singleEnvironment: o, selectScope: r }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = o),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  return (
    t[4] !== i || t[5] !== l
      ? ((u = (0, Q.jsx)(at, { value: l, children: i })), (t[4] = i), (t[5] = l), (t[6] = u))
      : (u = t[6]),
    u
  );
}
function st() {
  return (0, ze.useContext)(at);
}
function ct() {
  let e = st();
  if (e === null) throw Error(`Settings scope must be read inside SettingsScopeProvider.`);
  return e;
}
function lt(e) {
  let { target: t } = ct();
  return (V(t?.environmentId ?? null, t?.settings ?? null), U(t?.settings ?? y, e));
}
function ut(e) {
  let t = (0, $.c)(3),
    { targets: n } = ct(),
    r;
  return (
    t[0] !== e || t[1] !== n ? ((r = se(n, e)), (t[0] = e), (t[1] = n), (t[2] = r)) : (r = t[2]), r
  );
}
function dt(e) {
  let t = (0, $.c)(3),
    { targets: n } = ct(),
    r;
  return (
    t[0] !== e || t[1] !== n ? ((r = ae(n, e)), (t[0] = e), (t[1] = n), (t[2] = r)) : (r = t[2]), r
  );
}
function ft() {
  let e = (0, $.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { reportFailure: !1 }), (e[0] = t))
    : (t = e[0]);
  let n = K(le.updateSettings, t),
    r;
  return (
    e[1] === n
      ? (r = e[2])
      : ((r = (e) => {
          e.unavailableReason
            ? q.add({
                type: `warning`,
                title: `Setting not saved`,
                description: e.unavailableReason,
              })
            : fe(
                e,
                async (e) => {
                  let t = P(e.input.patch).find((t) => !me(e.environmentId, t));
                  return t
                    ? l(
                        O(
                          new f({
                            requiredScope: t,
                            message: `This connection lacks permission to change these settings.`,
                          }),
                        ),
                      )
                    : n(e);
                },
                H,
              ).then(pt);
        }),
        (e[1] = n),
        (e[2] = r)),
    r
  );
}
function pt(e) {
  let { failedEnvironments: t, savedEnvironments: n, savedEnvironmentCount: r } = e;
  t.length !== 0 &&
    q.add({
      type: `error`,
      title: r > 0 ? `Setting saved on some environments` : `Setting not saved`,
      description: [...t.map(ht), ...(r > 0 ? [`Saved on ${n.map(mt).join(`, `)}.`] : [])].join(`
`),
    });
}
function mt(e) {
  let { label: t } = e;
  return t;
}
function ht(e) {
  let { label: t, message: n } = e;
  return `Could not save on ${t}: ${n}`;
}
function gt() {
  let e = (0, $.c)(4),
    { scope: t, environments: n } = ct(),
    r = ft(),
    i;
  return (
    e[0] !== n || e[1] !== r || e[2] !== t
      ? ((i = (e) => r(oe(t, n, e))), (e[0] = n), (e[1] = r), (e[2] = t), (e[3] = i))
      : (i = e[3]),
    i
  );
}
function _t() {
  let e = (0, $.c)(3),
    t = st(),
    n = ft(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = (e) => {
          t !== null && n(de(t.scope, t.environments, e));
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function vt() {
  let e = (0, $.c)(3),
    t = st(),
    n = ft(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = (e, r) => {
          t !== null && n(G(t.environments, e, r));
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function yt() {
  let e = (0, $.c)(3),
    { connectedEnvironments: t } = ct(),
    n = he(t, h),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = t.length > 0 && t.every((e) => n.has(e.environmentId))),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function bt(e) {
  let t = (0, $.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ variant: i, divided: a, className: n, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = i === void 0 ? `grouped` : i,
    s = a === void 0 || a,
    c = o === `grouped` ? `rounded-xl border border-border/60 bg-card/40 shadow-xs/5` : `space-y-1`,
    l =
      o === `grouped` &&
      s &&
      `[&>*+*]:border-t [&>*+*]:border-border/50 [&>[data-slot=settings-row]]:rounded-none`,
    u;
  t[5] !== n || t[6] !== c || t[7] !== l
    ? ((u = I(`relative overflow-visible text-foreground`, c, l, n)),
      (t[5] = n),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== r || t[10] !== u
      ? ((d = (0, Q.jsx)(`div`, { ...r, className: u })), (t[9] = r), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
var xt = new Set([`/settings/appearance`, `/settings/snap-shot`, `/settings/connections`]);
function St() {
  let e = (0, $.c)(20),
    t = st(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { select: Ct }), (e[0] = n))
    : (n = e[0]);
  let r = Y(n),
    { environments: i } = z();
  if (t === null || xt.has(r)) return null;
  let a;
  e[1] !== i ||
  e[2] !== t.groups ||
  e[3] !== t.search ||
  e[4] !== t.selectScope ||
  e[5] !== t.singleEnvironment
    ? ((a = {
        value: t.search,
        singleEnvironment: t.singleEnvironment,
        groups: t.groups,
        environments: i,
        onChange: t.selectScope,
      }),
      (e[1] = i),
      (e[2] = t.groups),
      (e[3] = t.search),
      (e[4] = t.selectScope),
      (e[5] = t.singleEnvironment),
      (e[6] = a))
    : (a = e[6]);
  let o = a,
    s;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`span`, { className: `shrink-0`, children: `Applying settings for` })),
      (e[7] = s))
    : (s = e[7]);
  let c;
  e[8] === o
    ? (c = e[9])
    : ((c = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [s, (0, Q.jsx)(At, { ...o })],
      })),
      (e[8] = o),
      (e[9] = c));
  let l = t.search.machine || t.scope.kind === `checkout` ? `on` : `across`,
    u;
  e[10] === l
    ? (u = e[11])
    : ((u = (0, Q.jsx)(`span`, { className: `shrink-0`, children: l })), (e[10] = l), (e[11] = u));
  let d;
  e[12] === o ? (d = e[13]) : ((d = (0, Q.jsx)(Ot, { ...o })), (e[12] = o), (e[13] = d));
  let f;
  e[14] !== u || e[15] !== d
    ? ((f = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [u, d],
      })),
      (e[14] = u),
      (e[15] = d),
      (e[16] = f))
    : (f = e[16]);
  let p;
  return (
    e[17] !== c || e[18] !== f
      ? ((p = (0, Q.jsxs)(`p`, {
          className: `flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 px-3 text-sm text-muted-foreground sm:px-4`,
          children: [c, f],
        })),
        (e[17] = c),
        (e[18] = f),
        (e[19] = p))
      : (p = e[19]),
    p
  );
}
function Ct(e) {
  return e.pathname;
}
function wt(e) {
  let t = (0, $.c)(13),
    { option: n } = e,
    r;
  t[0] === n.label
    ? (r = t[1])
    : ((r = (0, Q.jsx)(`span`, { className: `block truncate`, children: n.label })),
      (t[0] = n.label),
      (t[1] = r));
  let i;
  t[2] === n.secondary
    ? (i = t[3])
    : ((i = n.secondary
        ? (0, Q.jsx)(`span`, {
            className: `block truncate text-xs text-muted-foreground`,
            children: n.secondary,
          })
        : null),
      (t[2] = n.secondary),
      (t[3] = i));
  let a;
  t[4] !== r || t[5] !== i
    ? ((a = (0, Q.jsxs)(`span`, { className: `min-w-0 flex-1`, children: [r, i] })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a))
    : (a = t[6]);
  let o;
  t[7] === n.offline
    ? (o = t[8])
    : ((o = n.offline
        ? (0, Q.jsx)(`span`, {
            className: `shrink-0 text-xs text-muted-foreground`,
            children: `Offline`,
          })
        : null),
      (t[7] = n.offline),
      (t[8] = o));
  let s;
  return (
    t[9] !== n.icon || t[10] !== a || t[11] !== o
      ? ((s = (0, Q.jsxs)(Q.Fragment, { children: [n.icon, a, o] })),
        (t[9] = n.icon),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s))
      : (s = t[12]),
    s
  );
}
function Tt(e) {
  let t = (0, $.c)(52),
    {
      ariaLabel: n,
      icon: r,
      label: a,
      value: s,
      options: c,
      allOption: l,
      searchLabel: u,
      onChange: f,
    } = e,
    [p, m] = (0, ze.useState)(``),
    h = c.length > 6 ? Z : j,
    g = `${n}: ${a}`,
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(d, { variant: `outline`, size: `sm` })), (t[0] = _))
    : (_ = t[0]);
  let y;
  t[1] === a
    ? (y = t[2])
    : ((y = (0, Q.jsx)(`span`, { className: `min-w-0 truncate`, children: a })),
      (t[1] = a),
      (t[2] = y));
  let b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(i, {
        "aria-hidden": !0,
        strokeWidth: 1.75,
        className: `-me-0.5 size-3.5 shrink-0 text-muted-foreground opacity-70`,
      })),
      (t[3] = b))
    : (b = t[3]);
  let x;
  t[4] !== h || t[5] !== r || t[6] !== g || t[7] !== y
    ? ((x = (0, Q.jsxs)(h, {
        "aria-label": g,
        render: _,
        className: `min-w-0 max-w-72`,
        children: [r, y, b],
      })),
      (t[4] = h),
      (t[5] = r),
      (t[6] = g),
      (t[7] = y),
      (t[8] = x))
    : (x = t[8]);
  let S = x,
    w;
  t[9] !== l || t[10] !== c
    ? ((w = l ? [l, ...c] : c), (t[9] = l), (t[10] = c), (t[11] = w))
    : (w = t[11]);
  let T = w;
  if (c.length > 6) {
    let e;
    if (t[12] !== T || t[13] !== p) {
      let n = p.trim().toLowerCase();
      ((e = T.filter((e) =>
        `${e.label} ${e.secondary ?? ``} ${e.value}`.toLowerCase().includes(n),
      )),
        (t[12] = T),
        (t[13] = p),
        (t[14] = e));
    } else e = t[14];
    let n = e,
      r;
    t[15] !== T || t[16] !== s
      ? ((r = T.find((e) => e.value === s) ?? null), (t[15] = T), (t[16] = s), (t[17] = r))
      : (r = t[17]);
    let i;
    t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (e) => {
          e || m(``);
        }),
        (t[18] = i))
      : (i = t[18]);
    let a;
    t[19] === f
      ? (a = t[20])
      : ((a = (e) => {
          e && f(e.value);
        }),
        (t[19] = f),
        (t[20] = a));
    let c;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (e) => m(e.target.value)), (t[21] = c))
      : (c = t[21]);
    let l;
    t[22] !== p || t[23] !== u
      ? ((l = (0, Q.jsx)(ye, { "aria-label": u, placeholder: u, value: p, onChange: c })),
        (t[22] = p),
        (t[23] = u),
        (t[24] = l))
      : (l = t[24]);
    let d;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)(ge, { children: `No matches found.` })), (t[25] = d))
      : (d = t[25]);
    let h;
    t[26] === s
      ? (h = t[27])
      : ((h = (0, Q.jsx)(X, {
          children: (e) =>
            (0, Q.jsxs)(
              ve,
              {
                value: e,
                children: [
                  (0, Q.jsx)(wt, { option: e }),
                  e.value === s
                    ? (0, Q.jsx)(o, { "aria-hidden": !0, className: `size-3.5 shrink-0` })
                    : null,
                ],
              },
              e.value,
            ),
        })),
        (t[26] = s),
        (t[27] = h));
    let g;
    t[28] !== l || t[29] !== h
      ? ((g = (0, Q.jsxs)(_e, { align: `start`, className: `w-80`, children: [l, d, h] })),
        (t[28] = l),
        (t[29] = h),
        (t[30] = g))
      : (g = t[30]);
    let _;
    return (
      t[31] !== T || t[32] !== n || t[33] !== a || t[34] !== g || t[35] !== r || t[36] !== S
        ? ((_ = (0, Q.jsxs)(be, {
            items: T,
            filteredItems: n,
            filter: null,
            autoHighlight: !0,
            itemToStringLabel: Dt,
            isItemEqualToValue: Et,
            value: r,
            onOpenChange: i,
            onValueChange: a,
            children: [S, g],
          })),
          (t[31] = T),
          (t[32] = n),
          (t[33] = a),
          (t[34] = g),
          (t[35] = r),
          (t[36] = S),
          (t[37] = _))
        : (_ = t[37]),
      _
    );
  }
  let E;
  t[38] === f
    ? (E = t[39])
    : ((E = (e) => {
        typeof e == `string` && f(e);
      }),
      (t[38] = f),
      (t[39] = E));
  let O;
  if (t[40] !== l || t[41] !== T) {
    let e;
    (t[43] === l
      ? (e = t[44])
      : ((e = (e, t) =>
          (0, Q.jsxs)(
            ze.Fragment,
            {
              children: [
                (0, Q.jsx)(M, {
                  value: e.value,
                  closeOnClick: !0,
                  children: (0, Q.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [(0, Q.jsx)(wt, { option: e }), (0, Q.jsx)(F, {})],
                  }),
                }),
                t === 0 && l ? (0, Q.jsx)(A, {}) : null,
              ],
            },
            e.value,
          )),
        (t[43] = l),
        (t[44] = e)),
      (O = T.map(e)),
      (t[40] = l),
      (t[41] = T),
      (t[42] = O));
  } else O = t[42];
  let k;
  t[45] !== E || t[46] !== O || t[47] !== s
    ? ((k = (0, Q.jsx)(D, {
        align: `start`,
        children: (0, Q.jsx)(`div`, {
          className: `w-72 max-w-full`,
          children: (0, Q.jsx)(C, { value: s, onValueChange: E, children: O }),
        }),
      })),
      (t[45] = E),
      (t[46] = O),
      (t[47] = s),
      (t[48] = k))
    : (k = t[48]);
  let N;
  return (
    t[49] !== k || t[50] !== S
      ? ((N = (0, Q.jsxs)(v, { children: [S, k] })), (t[49] = k), (t[50] = S), (t[51] = N))
      : (N = t[51]),
    N
  );
}
function Et(e, t) {
  return e.value === t.value;
}
function Dt(e) {
  return e.label;
}
function Ot(e) {
  let t = (0, $.c)(41),
    { value: n, groups: r, environments: i, onChange: a, singleEnvironment: o } = e,
    s;
  if (t[0] !== i || t[1] !== r || t[2] !== n) {
    let e = je(n, r, i);
    ((s = Ye(n, e.kind === `checkout` ? e.environmentId : null)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = s));
  } else s = t[3];
  let l = s,
    u,
    d,
    f,
    p,
    m;
  if (t[4] !== l || t[5] !== i || t[6] !== r || t[7] !== o || t[8] !== n) {
    let e;
    t[14] === l ? (e = t[15]) : ((e = (e) => e.environmentId === l), (t[14] = l), (t[15] = e));
    let a = i.find(e),
      s;
    if (t[16] !== i || t[17] !== r || t[18] !== n) {
      let e;
      t[20] === n
        ? (e = t[21])
        : ((e = (e) => e.projectKey === n.project), (t[20] = n), (t[21] = e));
      let a = r.find(e),
        o = a ? new Set(a.memberProjects.map(kt)) : null;
      ((s = o ? i.filter((e) => o.has(e.environmentId)) : i),
        (t[16] = i),
        (t[17] = r),
        (t[18] = n),
        (t[19] = s));
    } else s = t[19];
    ((d = s),
      (u = Tt),
      (f = `Environment scope`),
      (p = a
        ? (0, Q.jsx)(De, {
            "aria-hidden": !0,
            kind: E(a.serverConfig),
            className: `size-3.5 shrink-0`,
          })
        : null),
      (m = a
        ? qe(a, i)
        : l === `all`
          ? o
            ? `No environments`
            : `All environments`
          : `Unavailable environment`),
      (t[4] = l),
      (t[5] = i),
      (t[6] = r),
      (t[7] = o),
      (t[8] = n),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  } else ((u = t[9]), (d = t[10]), (f = t[11]), (p = t[12]), (m = t[13]));
  let h;
  t[22] !== a || t[23] !== n
    ? ((h = (e) => a(Qe(n, e))), (t[22] = a), (t[23] = n), (t[24] = h))
    : (h = t[24]);
  let g;
  t[25] === o
    ? (g = t[26])
    : ((g = o
        ? null
        : {
            value: `all`,
            label: `All environments`,
            icon: (0, Q.jsx)(c, { "aria-hidden": !0, className: `size-3.5 shrink-0` }),
          }),
      (t[25] = o),
      (t[26] = g));
  let _;
  if (t[27] !== i || t[28] !== d) {
    let e;
    (t[30] === i
      ? (e = t[31])
      : ((e = (e) => {
          let { primary: t, secondary: n } = Ke(e, i);
          return {
            value: e.environmentId,
            label: t,
            secondary: i.length <= 1 ? `` : n || Ge(e),
            icon: (0, Q.jsx)(De, {
              "aria-hidden": !0,
              kind: E(e.serverConfig),
              className: `size-3.5 shrink-0`,
            }),
            offline: e.connection.phase !== `connected`,
          };
        }),
        (t[30] = i),
        (t[31] = e)),
      (_ = d.map(e)),
      (t[27] = i),
      (t[28] = d),
      (t[29] = _));
  } else _ = t[29];
  let v;
  return (
    t[32] !== u ||
    t[33] !== l ||
    t[34] !== f ||
    t[35] !== p ||
    t[36] !== m ||
    t[37] !== h ||
    t[38] !== g ||
    t[39] !== _
      ? ((v = (0, Q.jsx)(u, {
          ariaLabel: f,
          icon: p,
          label: m,
          value: l,
          onChange: h,
          searchLabel: `Search environments`,
          allOption: g,
          options: _,
        })),
        (t[32] = u),
        (t[33] = l),
        (t[34] = f),
        (t[35] = p),
        (t[36] = m),
        (t[37] = h),
        (t[38] = g),
        (t[39] = _),
        (t[40] = v))
      : (v = t[40]),
    v
  );
}
function kt(e) {
  return e.environmentId;
}
function At(e) {
  let t = (0, $.c)(21),
    { value: n, groups: r, environments: i, onChange: a } = e,
    o;
  if (t[0] !== r || t[1] !== n) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.projectKey === n.project), (t[3] = n), (t[4] = e)),
      (o = r.find(e)),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o));
  } else o = t[2];
  let s = o,
    c;
  if (t[5] !== i || t[6] !== r || t[7] !== a || t[8] !== s || t[9] !== n) {
    let e;
    t[11] === i
      ? (e = t[12])
      : ((e = (e) => ({ group: e, machines: Je(e, i, !0).join(`, `) })), (t[11] = i), (t[12] = e));
    let o = Ze(r, n).map(e),
      l;
    t[13] === s
      ? (l = t[14])
      : ((l = s ? (0, Q.jsx)(Ne, { project: s, className: `size-3.5 shrink-0` }) : null),
        (t[13] = s),
        (t[14] = l));
    let u;
    t[15] === n ? (u = t[16]) : ((u = Xe(n)), (t[15] = n), (t[16] = u));
    let d;
    t[17] !== a || t[18] !== n
      ? ((d = (e) => a($e(n, e))), (t[17] = a), (t[18] = n), (t[19] = d))
      : (d = t[19]);
    let f;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = { value: `all`, label: `All projects` }), (t[20] = f))
      : (f = t[20]),
      (c = (0, Q.jsx)(Tt, {
        ariaLabel: `Project scope`,
        icon: l,
        label: s?.displayName ?? (n.project ? `Unavailable project` : `All projects`),
        value: u,
        onChange: d,
        searchLabel: `Search projects`,
        allOption: f,
        options: o.map((e) => {
          let { group: t, machines: n } = e,
            r = o.filter(
              (e) => e.group.projectKey !== t.projectKey && e.group.displayName === t.displayName,
            );
          return {
            value: t.projectKey,
            label: t.displayName,
            secondary:
              r.length === 0
                ? i.length > 1
                  ? t.workspaceRoot
                  : ``
                : r.some((e) => e.machines === n)
                  ? `${n} · ${t.workspaceRoot}`
                  : n,
            icon: (0, Q.jsx)(Ne, { project: t, className: `size-3.5 shrink-0` }),
          };
        }),
      })),
      (t[5] = i),
      (t[6] = r),
      (t[7] = a),
      (t[8] = s),
      (t[9] = n),
      (t[10] = c));
  } else c = t[10];
  return c;
}
var jt = {
  repo_conventions: `Repository conventions`,
  conventional_commits: `Conventional Commits`,
  custom: `Custom instructions`,
};
function Mt(e, t) {
  if (t == null)
    return e === `pullRequestMergeMethod`
      ? `Last selected`
      : e === `sidebarAutoSettleAfterDays`
        ? `Never`
        : e === `defaultModelSelection`
          ? `Automatic`
          : e === `sourceControlWriterModelSelection`
            ? `Text generation model`
            : e === `reviewGuideModelSelection`
              ? `Source control writer model`
              : e === `defaultThreadEnvMode` || e === `worktreeSubmodules`
                ? `Inherit`
                : `Not set`;
  if (typeof t == `boolean`) return t ? `On` : `Off`;
  if (typeof t == `number`)
    return e === `sidebarAutoSettleAfterDays` ? `${t} ${t === 1 ? `day` : `days`}` : String(t);
  if (typeof t == `string`)
    return e === `defaultThreadEnvMode` && (t === `local` || t === `worktree`)
      ? Ae(t)
      : e === `worktreeSubmodules` && t in ke
        ? ke[t]
        : e === `pullRequestMergeMethod` && t in we
          ? we[t]
          : t === ``
            ? `Empty`
            : t;
  if (Array.isArray(t)) return `${t.length} ${t.length === 1 ? `item` : `items`}`;
  if (typeof t == `object`) {
    if (`model` in t && typeof t.model == `string`) return t.model;
    if (`mode` in t && typeof t.mode == `string`) return jt[t.mode] ?? t.mode;
  }
  return `Custom`;
}
function Nt(e, t, n) {
  let r = t[n],
    i = ce(n) ? e.sources[n] : `environment`,
    a = !T(r, y[n]),
    o = Pt(n),
    s = [];
  (e.projectId !== null &&
    ce(n) &&
    s.push({
      key: `project`,
      label: `Project`,
      value: i === `project` ? Mt(n, e.settings[n]) : `Inherits`,
      effective: i === `project`,
      set: i === `project`,
    }),
    s.push({
      key: `environment`,
      label: e.label,
      value: a ? Mt(n, r) : `Inherits`,
      effective: i === `environment` && a,
      set: a,
    }),
    o &&
      e.projectId !== null &&
      s.push({
        key: `t3.json`,
        label: `t3.json`,
        value: i === `t3.json` ? Mt(n, e.settings[n]) : `Inherits`,
        effective: i === `t3.json`,
        set: i === `t3.json`,
      }));
  let c = o ? m[n].builtIn : y[n];
  return (
    s.push({
      key: `built-in`,
      label: `Default`,
      value: Mt(n, c),
      effective: i === `environment` && !a,
      set: !0,
    }),
    s
  );
}
function Pt(e) {
  return Object.hasOwn(m, e);
}
function Ft(e) {
  let t = (0, $.c)(52),
    {
      state: n,
      summary: r,
      targets: i,
      environments: o,
      keys: s,
      overridingProjects: l,
      onClearOverrides: f,
    } = e,
    p;
  t[0] === l ? (p = t[1]) : ((p = l === void 0 ? [] : l), (t[0] = l), (t[1] = p));
  let m = p,
    h = st(),
    g = s[0];
  if (!g || i.length === 0) return null;
  let v;
  t[2] === i ? (v = t[3]) : ((v = new Set(i.map(Bt))), (t[2] = i), (t[3] = v));
  let y = v.size > 1,
    S =
      m.length > 0 ? `${r} · ${m.length} project ${m.length === 1 ? `override` : `overrides`}` : r,
    C,
    w,
    D,
    O,
    k,
    A,
    j,
    M;
  if (
    t[4] !== o ||
    t[5] !== y ||
    t[6] !== g ||
    t[7] !== s ||
    t[8] !== f ||
    t[9] !== S ||
    t[10] !== m ||
    t[11] !== h?.scope ||
    t[12] !== h?.target?.environmentId ||
    t[13] !== h?.target?.projectId ||
    t[14] !== n ||
    t[15] !== i
  ) {
    let e = i.flatMap((e) => {
        let t = o.find((t) => t.environmentId === e.environmentId);
        if (!t?.serverConfig) return [];
        let n = Ke(t, o),
          r = h?.scope.members.find(
            (t) => t.environmentId === e.environmentId && t.id === e.projectId,
          )?.workspaceRoot,
          i = [n.secondary, r?.split(/[\\/]/).filter(Boolean).slice(-2).join(`/`)]
            .filter(Boolean)
            .join(` · `),
          a = Nt(e, t.serverConfig.settings, g),
          c = a.find(zt);
        return [
          {
            id: `${e.environmentId}:${e.projectId ?? ``}`,
            target: e,
            label: [n.primary, i].filter(Boolean).join(` · `),
            machineLabel: [n.primary, n.secondary].filter(Boolean).join(` · `),
            overrides: t.serverConfig.settings.projectSettingsOverrides,
            machine: E(t.serverConfig),
            layers: a,
            winningLayer: c,
            resolution: {
              winner: c?.key,
              layers: a.map(Rt),
              settings: s.map((t) => e.settings[t]),
            },
          },
        ];
      }),
      r =
        e.find((e) => {
          let { target: t } = e;
          return (
            t.environmentId === h?.target?.environmentId && t.projectId === h?.target?.projectId
          );
        }) ?? e[0],
      l = (t) => e.find((e) => e.target.environmentId === t)?.machineLabel ?? ``,
      p = [];
    for (let t of y && r ? [r, ...e.filter((e) => e !== r)] : e) {
      let e =
        y &&
        p.find((e) => {
          let [n] = e;
          return n && T(n.resolution, t.resolution);
        });
      e ? e.push(t) : p.push([t]);
    }
    w = Fe;
    let v = `${S}. Show where this value comes from`,
      N;
    t[24] === v
      ? (N = t[25])
      : ((N = (0, Q.jsx)(Pe, {
          render: (0, Q.jsx)(d, { size: `icon-micro`, variant: `ghost-muted`, "aria-label": v }),
        })),
        (t[24] = v),
        (t[25] = N));
    let P = n === `overridden` && `text-primary`,
      F = n === `mixed` && `text-warning`,
      L;
    t[26] !== P || t[27] !== F
      ? ((L = I(`size-3`, P, F)), (t[26] = P), (t[27] = F), (t[28] = L))
      : (L = t[28]);
    let R;
    t[29] === L ? (R = t[30]) : ((R = (0, Q.jsx)(c, { className: L })), (t[29] = L), (t[30] = R));
    let z;
    t[31] !== N || t[32] !== R
      ? ((z = (0, Q.jsx)(x, { render: N, children: R })), (t[31] = N), (t[32] = R), (t[33] = z))
      : (z = t[33]);
    let B;
    (t[34] === S
      ? (B = t[35])
      : ((B = (0, Q.jsx)(b, { side: `top`, children: S })), (t[34] = S), (t[35] = B)),
      t[36] !== z || t[37] !== B
        ? ((M = (0, Q.jsxs)(u, { children: [z, B] })), (t[36] = z), (t[37] = B), (t[38] = M))
        : (M = t[38]),
      (C = Le),
      (k = `start`),
      (A = `md`),
      (j = `none`),
      (D = `divide-y divide-border/60`),
      (O = p.map((e) => {
        let t = e[0];
        if (!t) return null;
        let { id: n, target: r, machine: i, layers: o, winningLayer: s } = t,
          c = (0, Q.jsx)(`ol`, { role: `list`, className: `text-sm`, children: o.map(Lt) });
        return (0, Q.jsxs)(
          `section`,
          {
            className: `px-3 py-2.5`,
            children: [
              y
                ? null
                : (0, Q.jsxs)(`h4`, {
                    className: `flex items-center gap-1.5 pb-1.5 text-xs font-medium text-muted-foreground`,
                    children: [
                      (0, Q.jsx)(De, {
                        "aria-hidden": !0,
                        kind: i,
                        className: `size-3.5 shrink-0`,
                      }),
                      (0, Q.jsx)(`span`, { className: `min-w-0 truncate`, children: r.label }),
                    ],
                  }),
              y && p.length > 1
                ? (0, Q.jsxs)(Ce, {
                    children: [
                      (0, Q.jsx)(Se, {
                        render: (0, Q.jsx)(d, {
                          variant: `ghost`,
                          size: `sm-multiline`,
                          className: `w-full justify-start text-left`,
                        }),
                        children: (0, Q.jsxs)(`span`, {
                          className: `flex w-full min-w-0 flex-col`,
                          children: [
                            (0, Q.jsxs)(`span`, {
                              className: `flex min-w-0 items-center gap-2`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `min-w-0 flex-1 truncate text-sm text-foreground tabular-nums`,
                                  children: s?.value,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: s?.key === `environment` ? `Environment` : s?.label,
                                }),
                                (0, Q.jsx)(a, {
                                  "aria-hidden": !0,
                                  className: `size-3 shrink-0 text-muted-foreground [[data-panel-open]_&]:rotate-90`,
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `flex min-w-0 flex-col gap-0.5 text-xs text-muted-foreground`,
                              children: e.map(It),
                            }),
                          ],
                        }),
                      }),
                      (0, Q.jsx)(xe, {
                        children: (0, Q.jsx)(`div`, { className: `pt-1.5`, children: c }),
                      }),
                    ],
                  })
                : (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      c,
                      y
                        ? (0, Q.jsx)(`p`, {
                            className: `px-2 pt-1.5 text-xs text-muted-foreground`,
                            children: `Same on all machines`,
                          })
                        : null,
                    ],
                  }),
              (() => {
                let t = m.filter((t) => e.some((e) => e.target.environmentId === t.environmentId));
                if (t.length === 0) return null;
                let n = y && t.length > 3,
                  r = (0, Q.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3 px-2 text-xs text-muted-foreground`,
                    children: [
                      n
                        ? (0, Q.jsxs)(Se, {
                            render: (0, Q.jsx)(_, { tone: `muted` }),
                            children: [
                              (0, Q.jsx)(a, {
                                "aria-hidden": !0,
                                className: `size-3 [[data-panel-open]_&]:rotate-90`,
                              }),
                              `Overridden by`,
                            ],
                          })
                        : (0, Q.jsx)(`span`, { children: `Overridden by` }),
                      f
                        ? (0, Q.jsxs)(_, {
                            onClick: () => f(t),
                            children: [`Reset `, t.length === 1 ? `it` : `all`],
                          })
                        : null,
                    ],
                  }),
                  i = (0, Q.jsx)(`ul`, {
                    role: `list`,
                    className: I(`mt-0.5 text-sm`, n && `max-h-48 overflow-y-auto`),
                    children: t.map((t) =>
                      (0, Q.jsxs)(
                        `li`,
                        {
                          className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 px-2 py-1`,
                          children: [
                            (0, Q.jsxs)(`span`, {
                              className: `flex min-w-0 flex-col items-start`,
                              children: [
                                (0, Q.jsx)(_, {
                                  className: `min-w-0 max-w-full justify-start`,
                                  onClick: t.open,
                                  children: (0, Q.jsx)(`span`, {
                                    className: `truncate`,
                                    children: t.label,
                                  }),
                                }),
                                y
                                  ? (0, Q.jsx)(`span`, {
                                      className: `max-w-full truncate text-xs text-muted-foreground`,
                                      children: l(t.environmentId),
                                    })
                                  : null,
                              ],
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `max-w-32 truncate text-muted-foreground tabular-nums`,
                              children: ce(g)
                                ? Mt(
                                    g,
                                    e.find((e) => e.target.environmentId === t.environmentId)
                                      ?.overrides[t.projectId]?.[g],
                                  )
                                : null,
                            }),
                          ],
                        },
                        `${t.environmentId}:${t.projectId}`,
                      ),
                    ),
                  });
                return (0, Q.jsx)(`div`, {
                  className: `mt-2 border-t border-border/60 pt-2`,
                  children: n
                    ? (0, Q.jsxs)(Ce, { children: [r, (0, Q.jsx)(xe, { children: i })] })
                    : (0, Q.jsxs)(Q.Fragment, { children: [r, i] }),
                });
              })(),
            ],
          },
          n,
        );
      })),
      (t[4] = o),
      (t[5] = y),
      (t[6] = g),
      (t[7] = s),
      (t[8] = f),
      (t[9] = S),
      (t[10] = m),
      (t[11] = h?.scope),
      (t[12] = h?.target?.environmentId),
      (t[13] = h?.target?.projectId),
      (t[14] = n),
      (t[15] = i),
      (t[16] = C),
      (t[17] = w),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M));
  } else
    ((C = t[16]),
      (w = t[17]),
      (D = t[18]),
      (O = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]));
  let N;
  t[39] !== D || t[40] !== O
    ? ((N = (0, Q.jsx)(`div`, { className: D, children: O })),
      (t[39] = D),
      (t[40] = O),
      (t[41] = N))
    : (N = t[41]);
  let P;
  t[42] !== C || t[43] !== N || t[44] !== k || t[45] !== A || t[46] !== j
    ? ((P = (0, Q.jsx)(C, { align: k, width: A, padding: j, children: N })),
      (t[42] = C),
      (t[43] = N),
      (t[44] = k),
      (t[45] = A),
      (t[46] = j),
      (t[47] = P))
    : (P = t[47]);
  let F;
  return (
    t[48] !== w || t[49] !== P || t[50] !== M
      ? ((F = (0, Q.jsxs)(w, { children: [M, P] })),
        (t[48] = w),
        (t[49] = P),
        (t[50] = M),
        (t[51] = F))
      : (F = t[51]),
    F
  );
}
function It(e) {
  return (0, Q.jsxs)(
    `span`,
    {
      className: `flex min-w-0 max-w-full items-center gap-1`,
      children: [
        (0, Q.jsx)(De, { "aria-hidden": !0, kind: e.machine, className: `size-3 shrink-0` }),
        (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
      ],
    },
    e.id,
  );
}
function Lt(e) {
  return (0, Q.jsxs)(
    `li`,
    {
      className: I(
        `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 rounded-md px-2 py-1`,
        e.effective && `bg-foreground/[0.06]`,
      ),
      children: [
        (0, Q.jsx)(`span`, {
          className: I(
            `min-w-0 truncate`,
            e.effective ? `font-medium text-foreground` : `text-muted-foreground`,
          ),
          children: e.key === `environment` ? `Environment` : e.label,
        }),
        (0, Q.jsxs)(`span`, {
          className: I(
            `flex items-center gap-1.5 tabular-nums`,
            e.effective
              ? `text-foreground`
              : e.set
                ? `text-muted-foreground`
                : `text-muted-foreground/60`,
          ),
          children: [
            (0, Q.jsx)(`span`, { className: `max-w-32 truncate`, children: e.value }),
            e.effective
              ? (0, Q.jsx)(o, { "aria-hidden": !0, className: `size-3.5 shrink-0 text-primary` })
              : (0, Q.jsx)(`span`, { "aria-hidden": !0, className: `size-3.5 shrink-0` }),
          ],
        }),
      ],
    },
    e.key,
  );
}
function Rt(e) {
  let { key: t, value: n } = e;
  return [t, n];
}
function zt(e) {
  return e.effective;
}
function Bt(e) {
  return e.environmentId;
}
var Vt = [],
  Ht = () => void 0,
  Ut = (0, ze.createContext)({ targetId: null, highlightTarget: !0, onTargetHandled: Ht });
function Wt(e) {
  let t = (0, $.c)(7),
    { targetId: n, highlightTarget: r, onTargetHandled: i, children: a } = e,
    o = r === void 0 || r,
    s = i === void 0 ? Ht : i,
    c;
  t[0] !== o || t[1] !== s || t[2] !== n
    ? ((c = { targetId: n, highlightTarget: o, onTargetHandled: s }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = n),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  return (
    t[4] !== a || t[5] !== l
      ? ((u = (0, Q.jsx)(Ut, { value: l, children: a })), (t[4] = a), (t[5] = l), (t[6] = u))
      : (u = t[6]),
    u
  );
}
var Gt;
function Kt(e, t = !0) {
  Gt?.abort();
  let n = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    r =
      (typeof e.querySelector == `function`
        ? e.querySelector(`:scope > [data-settings-scroll-target]`)
        : null) ?? (e.tagName === `SECTION` && e.firstElementChild ? e.firstElementChild : e),
    i = () => r.scrollIntoView({ behavior: n ? `auto` : `smooth`, block: `center` });
  i();
  let a = e.parentElement?.closest(`[data-slot="collapsible-panel"][data-open]`),
    o = () =>
      a
        ?.getAnimations()
        .find((e) => e instanceof CSSTransition && e.transitionProperty === `height`);
  if (a && (a.hasAttribute(`data-starting-style`) || o())) {
    let t = new AbortController();
    Gt = t;
    let { signal: n } = t,
      r = () => {
        n.aborted ||
          (t.abort(),
          a.hasAttribute(`data-open`) && e.isConnected && document.activeElement === e && i());
      },
      s = () => {
        let e = o();
        e ? e.finished.then(r, () => t.abort()) : r();
      };
    if (a.hasAttribute(`data-starting-style`)) {
      let e = new MutationObserver(() => {
        a.hasAttribute(`data-starting-style`) || (e.disconnect(), s());
      });
      (e.observe(a, { attributes: !0, attributeFilter: [`data-starting-style`] }),
        n.addEventListener(`abort`, () => e.disconnect(), { once: !0 }));
    } else s();
    e.addEventListener(`blur`, () => t.abort(), { once: !0, signal: n });
  }
  (e.focus({ preventScroll: !0 }),
    e.classList.remove(`settings-search-target-pulse`),
    t &&
      !n &&
      (e.offsetWidth,
      e.classList.add(`settings-search-target-pulse`),
      e.addEventListener(`blur`, () => e.classList.remove(`settings-search-target-pulse`), {
        once: !0,
      })));
}
function qt() {
  return (0, ze.useContext)(Ut).targetId;
}
function Jt(e) {
  let t = (0, $.c)(4),
    { targetId: n, highlightTarget: r, onTargetHandled: i } = (0, ze.useContext)(Ut),
    a = e !== void 0 && e === n,
    o;
  return (
    t[0] !== r || t[1] !== a || t[2] !== i
      ? ((o = (e) => {
          e && a && (Kt(e, r), i());
        }),
        (t[0] = r),
        (t[1] = a),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Yt(e) {
  let t = (0, $.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ children: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = Jt(r.id),
    a = r.id ? -1 : r.tabIndex,
    o;
  return (
    t[3] !== n || t[4] !== a || t[5] !== r || t[6] !== i
      ? ((o = (0, Q.jsx)(`div`, { ...r, ref: i, tabIndex: a, children: n })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var Xt = `min-w-0 max-w-none shrink-0 border-input bg-background font-normal text-foreground shadow-xs/5 hover:bg-accent/50 dark:bg-input/32 [&_svg[data-composer-control-chevron]]:stroke-[1.75] [&_svg[data-composer-control-chevron]]:opacity-70`;
function Zt(e) {
  let t = (0, $.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(x, {
        delay: 200,
        render: (0, Q.jsx)(d, {
          size: `icon-micro`,
          variant: `ghost-muted`,
          "aria-label": `Background policy details`,
          children: (0, Q.jsx)(s, { className: `size-3.5` }),
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Q.jsxs)(u, { children: [r, (0, Q.jsx)(b, { side: `top`, children: n })] })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Qt(e) {
  let t = (0, $.c)(30),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]))
    : (({
        title: l,
        hideTitle: s,
        icon: a,
        titleAction: u,
        headerAction: i,
        variant: c,
        children: n,
        className: r,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u));
  let d = s !== void 0 && s,
    f = c === void 0 ? `grouped` : c,
    p = Jt(o.id),
    m = o.id ? -1 : o.tabIndex,
    h = !d && `space-y-2.5`,
    g;
  t[10] !== r || t[11] !== h ? ((g = I(h, r)), (t[10] = r), (t[11] = h), (t[12] = g)) : (g = t[12]);
  let _;
  t[13] !== i || t[14] !== d || t[15] !== a || t[16] !== l || t[17] !== u
    ? ((_ = d
        ? (0, Q.jsx)(`h2`, { className: `sr-only`, children: l })
        : (0, Q.jsxs)(`div`, {
            "data-settings-scroll-target": !0,
            className: `flex min-h-7 items-start justify-between gap-4 px-3 sm:px-4`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-1`,
                children: [
                  (0, Q.jsxs)(`h2`, {
                    className: `flex min-h-7 items-center gap-2 text-base font-semibold text-foreground`,
                    children: [a, l],
                  }),
                  u,
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `flex min-h-7 min-w-7 items-center justify-end`,
                children: i,
              }),
            ],
          })),
      (t[13] = i),
      (t[14] = d),
      (t[15] = a),
      (t[16] = l),
      (t[17] = u),
      (t[18] = _))
    : (_ = t[18]);
  let v = d ? `` : void 0,
    y;
  t[19] !== n || t[20] !== v || t[21] !== f
    ? ((y = (0, Q.jsx)(bt, { "data-settings-scroll-target": v, variant: f, children: n })),
      (t[19] = n),
      (t[20] = v),
      (t[21] = f),
      (t[22] = y))
    : (y = t[22]);
  let b;
  return (
    t[23] !== o || t[24] !== m || t[25] !== g || t[26] !== _ || t[27] !== y || t[28] !== p
      ? ((b = (0, Q.jsxs)(`section`, {
          ...o,
          ref: p,
          tabIndex: m,
          className: g,
          children: [_, y],
        })),
        (t[23] = o),
        (t[24] = m),
        (t[25] = g),
        (t[26] = _),
        (t[27] = y),
        (t[28] = p),
        (t[29] = b))
      : (b = t[29]),
    b
  );
}
function $t(e) {
  let t = (0, $.c)(8),
    { children: n, message: r } = e;
  if (r === void 0) return n;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(s, { className: `mt-0.5 size-3.5 shrink-0 text-warning` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = (0, Q.jsxs)(`div`, {
        className: `flex items-start gap-2 px-3 py-2 text-xs leading-relaxed text-muted-foreground sm:px-4`,
        children: [i, (0, Q.jsx)(`p`, { children: r })],
      })),
      (t[1] = r),
      (t[2] = a));
  let o;
  t[3] === n
    ? (o = t[4])
    : ((o = (0, Q.jsx)(`div`, { className: `[&_h3]:opacity-64 [&_p]:opacity-64`, children: n })),
      (t[3] = n),
      (t[4] = o));
  let c;
  return (
    t[5] !== a || t[6] !== o
      ? ((c = (0, Q.jsxs)(`div`, {
          className: `border-border/60 bg-muted/20 py-1.5`,
          children: [a, o],
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function en(e, t) {
  return e === null || t.length === 0
    ? []
    : ue(e.connectedEnvironments, t).flatMap((t) => {
        let n = e.groups.find((e) =>
          e.memberProjects.some((e) => e.environmentId === t.environmentId && e.id === t.projectId),
        );
        return n
          ? [
              {
                ...t,
                label: n.displayName,
                open: () =>
                  e.selectScope({
                    project: n.projectKey,
                    ...(e.search.machine ? { machine: e.search.machine } : {}),
                  }),
              },
            ]
          : [];
      });
}
function tn(e) {
  let t = (0, $.c)(121),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    d,
    f,
    p,
    m;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (d = t[9]),
      (f = t[10]),
      (p = t[11]),
      (m = t[12]))
    : (({
        title: m,
        description: a,
        status: d,
        resetAction: c,
        onResetOverride: s,
        control: i,
        serverScoped: f,
        settingKeys: p,
        mixed: o,
        children: n,
        className: r,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  let g = f !== void 0 && f,
    _ = p === void 0 ? Vt : p,
    v = Jt(l.id),
    S = te(),
    C = st(),
    w = ee(),
    E = B(),
    D = pe(w, h),
    O;
  t[13] === C?.connectedEnvironments
    ? (O = t[14])
    : ((O = C?.connectedEnvironments ?? []), (t[13] = C?.connectedEnvironments), (t[14] = O));
  let k = he(O, h),
    A;
  t[15] !== C || t[16] !== D || t[17] !== k
    ? ((A = C
        ? C.connectedEnvironments.length > 0 &&
          C.connectedEnvironments.every((e) => k.has(e.environmentId))
        : D),
      (t[15] = C),
      (t[16] = D),
      (t[17] = k),
      (t[18] = A))
    : (A = t[18]);
  let j = A,
    M = _t(),
    N = vt(),
    P = C !== null && (C.scope.kind === `project` || C.scope.kind === `checkout`),
    F,
    L,
    R,
    z,
    V,
    H,
    U,
    ne,
    W;
  if (
    t[19] !== j ||
    t[20] !== M ||
    t[21] !== C ||
    t[22] !== i ||
    t[23] !== P ||
    t[24] !== o ||
    t[25] !== s ||
    t[26] !== E?.label ||
    t[27] !== S ||
    t[28] !== c ||
    t[29] !== g ||
    t[30] !== _ ||
    t[31] !== m ||
    t[32] !== k
  ) {
    H = _.filter(ce);
    let e = P && g && H.length === 0,
      n;
    (t[42] !== C || t[43] !== o || t[44] !== _
      ? ((n = o ?? (C !== null && se(C.targets, _))),
        (t[42] = C),
        (t[43] = o),
        (t[44] = _),
        (t[45] = n))
      : (n = t[45]),
      (L = n),
      (U = C && P ? ae(C.targets, H) : null),
      (W = g && (!j || !(C ? C.connectedEnvironments.length > 0 : S))),
      (F =
        U === `environment` && C?.scope.environmentIds.length === 1
          ? (C.environments.find((e) => e.environmentId === C.scope.environmentIds[0])?.label ??
            `environment`)
          : `environment`));
    let r;
    t[46] === C?.connectedEnvironments
      ? (r = t[47])
      : ((r = C?.connectedEnvironments ?? []), (t[46] = C?.connectedEnvironments), (t[47] = r));
    let a = new Map(r.flatMap(rn));
    R = P ? [] : en(C, H);
    let l;
    (t[48] !== M ||
    t[49] !== P ||
    t[50] !== s ||
    t[51] !== c ||
    t[52] !== H ||
    t[53] !== U ||
    t[54] !== m ||
    t[55] !== W
      ? ((l = W
          ? null
          : P && H.length > 0
            ? U === `project` || U === `mixed`
              ? (0, Q.jsx)(an, {
                  label: typeof m == `string` ? m : `override`,
                  tooltip: `Reset to inherited value`,
                  onClick: () => (s ? s() : M(H)),
                })
              : null
            : c),
        (t[48] = M),
        (t[49] = P),
        (t[50] = s),
        (t[51] = c),
        (t[52] = H),
        (t[53] = U),
        (t[54] = m),
        (t[55] = W),
        (t[56] = l))
      : (l = t[56]),
      (V = l));
    let d;
    t[57] === i
      ? (d = t[58])
      : ((d = (e) =>
          (0, Q.jsxs)(u, {
            children: [
              (0, Q.jsx)(x, {
                render: (0, Q.jsx)(`span`, {
                  tabIndex: 0,
                  className: `flex w-full items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring @min-[32rem]/settings-row:w-auto`,
                }),
                children: (0, Q.jsx)(`div`, {
                  inert: !0,
                  className: `flex w-full items-center gap-2 opacity-50 @min-[32rem]/settings-row:w-auto`,
                  children: i,
                }),
              }),
              (0, Q.jsx)(b, { side: `top`, children: e }),
            ],
          })),
        (t[57] = i),
        (t[58] = d));
    let f = d,
      p;
    (t[59] !== j ||
    t[60] !== C ||
    t[61] !== i ||
    t[62] !== e ||
    t[63] !== f ||
    t[64] !== E?.label ||
    t[65] !== W ||
    t[66] !== k
      ? ((p =
          W && i
            ? f(
                j
                  ? C
                    ? `Reconnect the selected environment to change this setting.`
                    : re
                  : `This connection lacks permission to change settings on ${
                      C
                        ? C.connectedEnvironments
                            .filter((e) => !k.has(e.environmentId))
                            .map(nn)
                            .join(`, `) || `the selected environment`
                        : (E?.label ?? `the primary environment`)
                    }.`,
              )
            : e && i
              ? f(`Environment-wide setting. Select an environment to change it.`)
              : i),
        (t[59] = j),
        (t[60] = C),
        (t[61] = i),
        (t[62] = e),
        (t[63] = f),
        (t[64] = E?.label),
        (t[65] = W),
        (t[66] = k),
        (t[67] = p))
      : (p = t[67]),
      (z = p),
      (ne =
        C !== null &&
        _.some((e) =>
          C.targets.some((t) => {
            let n = a.get(t.environmentId);
            return n !== void 0 && !T(n[e], y[e]);
          }),
        )),
      (t[19] = j),
      (t[20] = M),
      (t[21] = C),
      (t[22] = i),
      (t[23] = P),
      (t[24] = o),
      (t[25] = s),
      (t[26] = E?.label),
      (t[27] = S),
      (t[28] = c),
      (t[29] = g),
      (t[30] = _),
      (t[31] = m),
      (t[32] = k),
      (t[33] = F),
      (t[34] = L),
      (t[35] = R),
      (t[36] = z),
      (t[37] = V),
      (t[38] = H),
      (t[39] = U),
      (t[40] = ne),
      (t[41] = W));
  } else
    ((F = t[33]),
      (L = t[34]),
      (R = t[35]),
      (z = t[36]),
      (V = t[37]),
      (H = t[38]),
      (U = t[39]),
      (ne = t[40]),
      (W = t[41]));
  let ie = ne,
    oe;
  t[68] !== ie || t[69] !== F || t[70] !== L || t[71] !== H || t[72] !== U
    ? ((oe = L
        ? { state: `mixed`, summary: `Mixed across selected environments` }
        : U === `project`
          ? { state: `overridden`, summary: `Overridden for this project` }
          : U === `t3.json`
            ? { state: `inherited`, summary: `Inherited from the repository's t3.json` }
            : U === `environment` && H.length > 0
              ? { state: `inherited`, summary: `Inherited from ${F}` }
              : ie
                ? { state: `environment`, summary: `Set on the environment` }
                : { state: `default`, summary: `Built-in default` }),
      (t[68] = ie),
      (t[69] = F),
      (t[70] = L),
      (t[71] = H),
      (t[72] = U),
      (t[73] = oe))
    : (oe = t[73]);
  let G = oe,
    le;
  t[74] !== j ||
  t[75] !== N ||
  t[76] !== C ||
  t[77] !== G ||
  t[78] !== R ||
  t[79] !== H ||
  t[80] !== g ||
  t[81] !== _
    ? ((le =
        C && g && _.length > 0
          ? (0, Q.jsx)(Ft, {
              state: G.state,
              summary: G.summary,
              targets: C.targets,
              environments: C.connectedEnvironments,
              keys: _,
              overridingProjects: R,
              ...(j ? { onClearOverrides: (e) => N(e, H) } : {}),
            })
          : null),
      (t[74] = j),
      (t[75] = N),
      (t[76] = C),
      (t[77] = G),
      (t[78] = R),
      (t[79] = H),
      (t[80] = g),
      (t[81] = _),
      (t[82] = le))
    : (le = t[82]);
  let ue = le,
    de = d,
    fe = l.id ? -1 : l.tabIndex,
    me = n ? `pt-3 pb-1` : `py-3`,
    K;
  t[83] !== r || t[84] !== me
    ? ((K = I(
        `group/settings-row @container/settings-row rounded-xl px-3 sm:px-4 aria-disabled:opacity-64 aria-disabled:[&_*]:text-muted-foreground`,
        me,
        r,
      )),
      (t[83] = r),
      (t[84] = me),
      (t[85] = K))
    : (K = t[85]);
  let q;
  t[86] === m
    ? (q = t[87])
    : ((q = (0, Q.jsx)(`h3`, { className: `text-sm font-medium text-foreground`, children: m })),
      (t[86] = m),
      (t[87] = q));
  let J;
  t[88] !== G || t[89] !== R || t[90] !== ue
    ? ((J = ue
        ? (0, Q.jsx)(`span`, {
            className: I(
              `inline-flex h-5 w-5 shrink-0 items-center justify-center`,
              (G.state === "default" || G.state === `environment`) &&
                R.length === 0 &&
                `opacity-0 group-hover/settings-row:opacity-100 has-focus-visible:opacity-100 has-data-popup-open:opacity-100`,
            ),
            children: ue,
          })
        : null),
      (t[88] = G),
      (t[89] = R),
      (t[90] = ue),
      (t[91] = J))
    : (J = t[91]);
  let Y;
  t[92] === V
    ? (Y = t[93])
    : ((Y = (0, Q.jsx)(`span`, {
        className: `inline-flex h-5 w-5 shrink-0 items-center justify-center`,
        children: V,
      })),
      (t[92] = V),
      (t[93] = Y));
  let X;
  t[94] !== q || t[95] !== J || t[96] !== Y
    ? ((X = (0, Q.jsxs)(`div`, {
        className: `flex min-h-5 items-center gap-1.5`,
        children: [q, J, Y],
      })),
      (t[94] = q),
      (t[95] = J),
      (t[96] = Y),
      (t[97] = X))
    : (X = t[97]);
  let Z;
  t[98] === a
    ? (Z = t[99])
    : ((Z = a
        ? (0, Q.jsx)(`p`, {
            className: `max-w-2xl text-balance text-xs leading-normal text-muted-foreground`,
            children: a,
          })
        : null),
      (t[98] = a),
      (t[99] = Z));
  let ge;
  t[100] === de
    ? (ge = t[101])
    : ((ge = de
        ? (0, Q.jsx)(`div`, { className: `pt-0.5 text-xs text-muted-foreground`, children: de })
        : null),
      (t[100] = de),
      (t[101] = ge));
  let _e;
  t[102] !== X || t[103] !== Z || t[104] !== ge
    ? ((_e = (0, Q.jsxs)(`div`, { className: `min-w-0 flex-1 space-y-1`, children: [X, Z, ge] })),
      (t[102] = X),
      (t[103] = Z),
      (t[104] = ge),
      (t[105] = _e))
    : (_e = t[105]);
  let ve;
  t[106] === z
    ? (ve = t[107])
    : ((ve = z
        ? (0, Q.jsx)(`div`, {
            className: `flex w-full min-w-0 shrink-0 items-center gap-2 @min-[32rem]/settings-row:w-auto @min-[32rem]/settings-row:justify-end`,
            children: z,
          })
        : null),
      (t[106] = z),
      (t[107] = ve));
  let ye;
  t[108] !== _e || t[109] !== ve
    ? ((ye = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 @min-[32rem]/settings-row:grid @min-[32rem]/settings-row:grid-cols-[minmax(0,1fr)_minmax(10rem,auto)] @min-[32rem]/settings-row:items-center @min-[32rem]/settings-row:gap-8`,
        children: [_e, ve],
      })),
      (t[108] = _e),
      (t[109] = ve),
      (t[110] = ye))
    : (ye = t[110]);
  let be;
  t[111] !== n || t[112] !== W
    ? ((be = W && n ? (0, Q.jsx)(`div`, { inert: !0, className: `opacity-50`, children: n }) : n),
      (t[111] = n),
      (t[112] = W),
      (t[113] = be))
    : (be = t[113]);
  let xe;
  return (
    t[114] !== l || t[115] !== K || t[116] !== ye || t[117] !== be || t[118] !== fe || t[119] !== v
      ? ((xe = (0, Q.jsxs)(`div`, {
          ...l,
          ref: v,
          tabIndex: fe,
          "data-slot": `settings-row`,
          className: K,
          children: [ye, be],
        })),
        (t[114] = l),
        (t[115] = K),
        (t[116] = ye),
        (t[117] = be),
        (t[118] = fe),
        (t[119] = v),
        (t[120] = xe))
      : (xe = t[120]),
    xe
  );
}
function nn(e) {
  return e.label;
}
function rn(e) {
  return e.serverConfig ? [[e.environmentId, e.serverConfig.settings]] : [];
}
function an(e) {
  let t = (0, $.c)(12),
    { label: n, tooltip: r, disabled: i, onClick: a } = e,
    o = r === void 0 ? `Reset to default` : r,
    s = i !== void 0 && i,
    c = `Reset ${n} to default`,
    l;
  t[0] === a
    ? (l = t[1])
    : ((l = (e) => {
        (e.stopPropagation(), a());
      }),
      (t[0] = a),
      (t[1] = l));
  let f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(Ie, { className: `size-3` })), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== s || t[4] !== c || t[5] !== l
    ? ((p = (0, Q.jsx)(x, {
        render: (0, Q.jsx)(d, {
          size: `icon-micro`,
          variant: `ghost-muted`,
          "aria-label": c,
          disabled: s,
          onClick: l,
          children: f,
        }),
      })),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === o
    ? (m = t[8])
    : ((m = (0, Q.jsx)(b, { side: `top`, children: o })), (t[7] = o), (t[8] = m));
  let h;
  return (
    t[9] !== p || t[10] !== m
      ? ((h = (0, Q.jsxs)(u, { children: [p, m] })), (t[9] = p), (t[10] = m), (t[11] = h))
      : (h = t[11]),
    h
  );
}
function on(e) {
  let t = (0, $.c)(18),
    { children: n, className: r, width: i } = e,
    a = i === void 0 ? `readable` : i,
    o = J(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { select: cn }), (t[0] = s))
    : (s = t[0]);
  let c = Y(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { select: sn }), (t[1] = l))
    : (l = t[1]);
  let u = Y(l),
    d;
  t[2] === c ? (d = t[3]) : ((d = c.replace(/^#/, ``) || null), (t[2] = c), (t[3] = d));
  let f = d,
    p;
  t[4] === o
    ? (p = t[5])
    : ((p = () => {
        o({
          hash: ``,
          replace: !0,
          resetScroll: !1,
          hashScrollIntoView: !1,
          state: { settingsTargetHighlight: !0 },
        });
      }),
      (t[4] = o),
      (t[5] = p));
  let m = p,
    h;
  t[6] === r ? (h = t[7]) : ((h = I(`gap-8`, r)), (t[6] = r), (t[7] = h));
  let g;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(St, {})), (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== n || t[10] !== h || t[11] !== a
    ? ((_ = (0, Q.jsx)(`div`, {
        className: `topbar-scroll-fade scrollbar-gutter-both flex-1 overflow-y-auto`,
        "data-settings-page-scroll": !0,
        children: (0, Q.jsxs)(Re, { width: a, className: h, children: [g, n] }),
      })),
      (t[9] = n),
      (t[10] = h),
      (t[11] = a),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  return (
    t[13] !== m || t[14] !== u || t[15] !== _ || t[16] !== f
      ? ((v = (0, Q.jsx)(Wt, { targetId: f, highlightTarget: u, onTargetHandled: m, children: _ })),
        (t[13] = m),
        (t[14] = u),
        (t[15] = _),
        (t[16] = f),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function sn(e) {
  return e.state.settingsTargetHighlight !== !1;
}
function cn(e) {
  return e.hash;
}
function ln(e, { highlight: t = !0 } = {}) {
  let n = document.getElementById(e);
  return n ? (Kt(n, t), !0) : !1;
}
export {
  Ge as C,
  Be as D,
  Je as E,
  Qe as S,
  Ke as T,
  ut as _,
  tn as a,
  ot as b,
  $t as c,
  qt as d,
  xt as f,
  lt as g,
  dt as h,
  on as i,
  ln as l,
  _t as m,
  Xt as n,
  Yt as o,
  bt as p,
  an as r,
  Qt as s,
  Zt as t,
  Jt as u,
  yt as v,
  qe as w,
  ct as x,
  gt as y,
};
//# sourceMappingURL=settingsLayout-2i87rQY9.js.map
