import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, t as a } from "./search-BrluOr7L.js";
import { d as o, n as s, t as c } from "./users-CM0ubiXW.js";
import { r as l } from "./triangle-alert-Ca4wixX0.js";
import { i as u, o as d, t as f } from "./user-round-DPyHwZ8b.js";
import { t as p } from "./circle-x-CYgyy81Z.js";
import { t as m } from "./eye-off-D6V5VC8c.js";
import { t as h } from "./eye-DIOzx3kY.js";
import { t as g } from "./folder-git-2-CaBMup3m.js";
import { t as _ } from "./layers-CHU4eBL6.js";
import { t as v } from "./pen-line-D1XwYkfK.js";
import { t as y } from "./plug-2-BVMcU2np.js";
import { t as b } from "./plus-B20TfFan.js";
import {
  $n as x,
  Bn as S,
  Dr as C,
  Qn as w,
  Rs as T,
  Vn as E,
  Wn as D,
  Yn as O,
  ar as k,
  cr as ee,
  dr as A,
  er as te,
  fr as ne,
  hm as j,
  hr as re,
  ir as M,
  jc as ie,
  lr as ae,
  mr as oe,
  nr as N,
  or as P,
  pr as F,
  qg as I,
  sr as L,
  t as se,
  tr as R,
  yn as z,
} from "./utils-CPoejuy5.js";
import { T as ce, b as B } from "./entities-CgVpsCCl.js";
import { M as le } from "./useSettings-N-JG2LFZ.js";
import { c as ue } from "./server-3D32GveR.js";
import { t as de } from "./use-atom-command-DGAuqAck.js";
import { a as fe, c as pe, l as V, o as me, r as H, t as he } from "./rightPanelStore-DEayojei.js";
import { _ as ge, i as _e } from "./toast-B4KPIJDZ.js";
import { t as ve } from "./useStableCallback-XvXMCrxI.js";
import { n as ye } from "./useNavigate-Dq4t21kA.js";
import { a as be, r as xe } from "./useParams-JSmvSNOU.js";
import { r as Se } from "./queries-B4W1CgUo.js";
import {
  A as Ce,
  C as U,
  D as we,
  E as Te,
  O as Ee,
  S as De,
  T as Oe,
  a as ke,
  b as Ae,
  c as je,
  d as Me,
  f as Ne,
  g as Pe,
  h as Fe,
  m as Ie,
  n as Le,
  o as Re,
  p as ze,
  s as Be,
  t as Ve,
  u as He,
  w as Ue,
} from "./PanelLayoutControls-CBiOLaSo.js";
import { i as We, n as Ge, o as Ke, r as qe, t as Je } from "./empty-CgJfsiJ2.js";
import { g as Ye, v as Xe } from "./keybindings-b_9MjE1R.js";
import { n as Ze } from "./pullRequestIcons-CfNS1kGB.js";
import {
  B as Qe,
  F as $e,
  G as W,
  H as et,
  I as tt,
  J as nt,
  K as rt,
  L as it,
  M as at,
  N as ot,
  P as st,
  Q as ct,
  R as lt,
  U as ut,
  V as dt,
  W as G,
  X as ft,
  Y as pt,
  Z as mt,
  _ as ht,
  at as gt,
  c as _t,
  ct as vt,
  dt as yt,
  et as bt,
  f as K,
  ft as xt,
  it as St,
  lt as Ct,
  mt as wt,
  nt as Tt,
  o as q,
  ot as Et,
  pt as Dt,
  q as Ot,
  r as kt,
  rt as At,
  s as jt,
  st as Mt,
  tt as Nt,
  u as Pt,
  ut as Ft,
  y as It,
  z as Lt,
} from "./pullRequests-CcJBfL2x.js";
import { n as Rt, r as zt, t as Bt } from "./input-group-C7DCv8iP.js";
import { P as Vt } from "./useHandleNewThread-Cfzzj4KK.js";
import { r as Ht } from "./EnvironmentMachineIcon-M7J6_xOZ.js";
import { u as Ut } from "./t3ProjectFile-7gwVsbWF.js";
import {
  $c as Wt,
  C as Gt,
  Ci as Kt,
  Qo as qt,
  S as Jt,
  Xo as Yt,
  _i as Xt,
  ao as Zt,
  bl as Qt,
  do as $t,
  ei as en,
  ha as tn,
  hs as J,
  js as nn,
  ma as rn,
  oo as an,
  uo as on,
} from "./main-BZa0O6xN.js";
import { t as sn } from "./WorkspacePageHeader-Dwf68L7C.js";
import { n as cn } from "./usePullRequestActions-5b980irk.js";
import { n as Y, r as ln, t as un } from "./WorkspaceBreadcrumb-CdDCBpec.js";
import { t as dn } from "./WorkspacePageContainer-D3An2RdA.js";
function fn() {
  let e = be();
  return xe(e.stores.location, (e) => e.state.__TSR_index !== 0);
}
var X = n(),
  pn = {
    approved: `approved`,
    changes_requested: `changes-requested`,
    "changes-requested": `changes-requested`,
    required: `review-required`,
    "review-required": `review-required`,
    none: `none`,
  },
  mn = { success: `passing`, passing: `passing`, failure: `failing`, failing: `failing` },
  hn = /(?:[^\s"]|"[^"]*")+/g,
  gn = 10,
  _n = 200;
function vn(e) {
  return e.replaceAll(`"`, ``).trim();
}
function yn(e) {
  return (e.match(/(?:[^,"]|"[^"]*")+/g) ?? []).map((e) => vn(e)).filter((e) => e.length > 0);
}
function bn(e) {
  return e
    .slice(0, gn)
    .map((e) => e.slice(0, _n).trim())
    .filter((e) => e.length > 0);
}
function xn(e) {
  let t = [],
    n = [],
    r = [],
    i,
    a,
    o,
    s;
  for (let [c] of e.matchAll(hn)) {
    let e = /^(-?)([A-Za-z][A-Za-z0-9_-]*):(.*)$/.exec(c),
      l = e === null ? `` : vn(e[3] ?? ``),
      u = e?.[1] === `-`;
    switch (l.length === 0 ? `` : (e?.[2]?.toLowerCase() ?? ``)) {
      case `label`: {
        let t = bn(yn(e?.[3] ?? ``));
        if (t.length === 0) break;
        u ? r.push(...t) : n.push(t);
        continue;
      }
      case `author`:
        if (u) break;
        i = l.slice(0, _n).trim();
        continue;
      case `draft`:
        if (u || (l.toLowerCase() !== `true` && l.toLowerCase() !== `false`)) break;
        a = l.toLowerCase() === `true` ? `only` : `hide`;
        continue;
      case `review`: {
        let e = u ? void 0 : pn[l.toLowerCase()];
        if (e === void 0) break;
        o = e;
        continue;
      }
      case `status`:
      case `checks`: {
        let e = u ? void 0 : mn[l.toLowerCase()];
        if (e === void 0) break;
        s = e;
        continue;
      }
      case ``:
        break;
      default:
        if (!l.startsWith(`/`)) {
          let t = bn(yn(e?.[3] ?? ``).map((t) => (t.includes(`:`) ? t : `${e?.[2] ?? ``}:${t}`)));
          if (t.length === 0) break;
          u ? r.push(...t) : n.push(t);
          continue;
        }
    }
    t.push(c);
  }
  return {
    text: t.join(` `),
    filters: {
      ...(n.length === 0 ? {} : { labels: n.slice(0, gn) }),
      ...(r.length === 0 ? {} : { excludedLabels: r.slice(0, gn) }),
      ...(i === void 0 ? {} : { author: i }),
      ...(a === void 0 ? {} : { draft: a }),
      ...(o === void 0 ? {} : { review: o }),
      ...(s === void 0 ? {} : { checks: s }),
    },
  };
}
function Sn(e, t, n) {
  let r = xn(e).filters.draft;
  return n.draft === (r ?? t.draft)
    ? { query: e, filters: { ...n, draft: t.draft } }
    : {
        query:
          r === void 0
            ? e
            : [...e.matchAll(hn)]
                .map(([e]) => e)
                .filter((e) => xn(e).filters.draft === void 0)
                .join(` `),
        filters: n,
      };
}
var Z = e(t(), 1);
function Cn(e, t) {
  let n = new Map();
  for (let t of e) n.set(t.title, (n.get(t.title) ?? 0) + 1);
  return e.map((e) => ((n.get(e.title) ?? 0) > 1 ? { ...e, title: `${e.title} · ${t(e)}` } : e));
}
function wn(e, t, n) {
  let r = new Map();
  for (let t of e) {
    let e = t.repositoryIdentity?.canonicalKey?.toLowerCase(),
      i = JSON.stringify([t.environmentId, e ? [`repository`, e] : [`project`, t.id]]),
      a = t.id === n?.id && t.environmentId === n.environmentId;
    (!r.has(i) || a) && r.set(i, t);
  }
  return Cn(
    Cn(
      Cn(
        Cn([...r.values()], (e) => t.get(e.environmentId) ?? e.environmentId),
        (e) => e.workspaceRoot,
      ),
      (e) => e.environmentId,
    ),
    (e) => e.id,
  ).toSorted((e, t) => e.title.localeCompare(t.title));
}
var Q = e(r(), 1);
function Tn(e) {
  let t = (0, X.c)(3),
    { option: n } = e,
    r;
  return (
    t[0] !== n.Icon || t[1] !== n.project
      ? ((r = n.project
          ? (0, Q.jsx)(qt, { project: n.project, className: `size-3.5` })
          : (0, Q.jsx)(n.Icon, { "aria-hidden": !0, className: `size-3.5` })),
        (t[0] = n.Icon),
        (t[1] = n.project),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function En(e, t) {
  return e.filter((e) => e.kind === t.kind).length > 1 ? t.host : Yt(t.kind).providerName;
}
function Dn(e) {
  let t = (0, X.c)(18),
    { value: n, busy: r, onChange: i, onSubmit: o } = e,
    [s, c] = (0, Z.useState)(null),
    l;
  t[0] === r
    ? (l = t[1])
    : ((l = (0, Q.jsx)(Rt, {
        children: r ? (0, Q.jsx)(re, { "aria-hidden": !0 }) : (0, Q.jsx)(a, { "aria-hidden": !0 }),
      })),
      (t[0] = r),
      (t[1] = l));
  let u = s ?? n,
    d;
  t[2] === n ? (d = t[3]) : ((d = () => c(n)), (t[2] = n), (t[3] = d));
  let f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = () => c(null)), (t[4] = f)) : (f = t[4]);
  let p;
  t[5] !== i || t[6] !== o
    ? ((p = (e) => {
        (c(e.currentTarget.value),
          i(e.currentTarget.value),
          e.nativeEvent.inputType === `insertFromPaste` && o(e.currentTarget.value));
      }),
      (t[5] = i),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === o
    ? (m = t[9])
    : ((m = (e) => {
        e.key === `Enter` && !e.nativeEvent.isComposing && o(e.currentTarget.value);
      }),
      (t[8] = o),
      (t[9] = m));
  let h;
  t[10] !== u || t[11] !== d || t[12] !== p || t[13] !== m
    ? ((h = (0, Q.jsx)(zt, {
        type: `search`,
        value: u,
        onFocus: d,
        onBlur: f,
        onChange: p,
        onKeyDown: m,
        placeholder: `Search pull requests, or label:bug`,
        "aria-label": `Search pull requests`,
      })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== l || t[16] !== h
      ? ((g = (0, Q.jsxs)(Bt, {
          className: `min-w-0 flex-1 **:[input]:h-9 sm:**:[input]:h-8`,
          children: [l, h],
        })),
        (t[15] = l),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
var On = `all`,
  kn = ``,
  An = ``,
  jn = `all`,
  Mn = (e) => JSON.stringify([e.environmentId, e.id]),
  Nn = [
    { value: jn, label: `All`, Icon: _ },
    { value: `only`, label: `Drafts only`, Icon: Ze.draft },
    { value: `hide`, label: `Hide drafts`, Icon: m },
  ],
  Pn = [
    { value: jn, label: `All`, Icon: _ },
    { value: `approved`, label: `Approved`, Icon: l },
    { value: `changes-requested`, label: `Changes requested`, Icon: p },
    { value: `review-required`, label: `Review required`, Icon: d },
    { value: `none`, label: `No reviews`, Icon: u },
  ],
  Fn = [
    { value: jn, label: `All`, Icon: _ },
    { value: `passing`, label: `Passing`, Icon: l },
    { value: `failing`, label: `Failing`, Icon: p },
  ];
function In(e) {
  let t = (0, X.c)(12),
    { label: n, value: r, options: i, onChange: a } = e,
    o;
  t[0] !== a || t[1] !== r
    ? ((o = (e) => {
        e !== r && a(e);
      }),
      (t[0] = a),
      (t[1] = r),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === n ? (s = t[4]) : ((s = (0, Q.jsx)(R, { children: n })), (t[3] = n), (t[4] = s));
  let c;
  t[5] === i ? (c = t[6]) : ((c = i.map(Ln)), (t[5] = i), (t[6] = c));
  let l;
  return (
    t[7] !== o || t[8] !== s || t[9] !== c || t[10] !== r
      ? ((l = (0, Q.jsxs)(k, { value: r, onValueChange: o, children: [s, c] })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = r),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Ln(e) {
  let t = (0, Q.jsx)(
    P,
    {
      value: e.value,
      className: e.unavailable ? `data-disabled:pointer-events-auto` : void 0,
      disabled: e.unavailable !== void 0,
      children: (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          (0, Q.jsx)(Tn, { option: e }),
          (0, Q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e.label }),
          e.unavailable
            ? (0, Q.jsx)(`span`, { className: `shrink-0`, children: `· Unavailable` })
            : null,
          (0, Q.jsx)(L, {}),
        ],
      }),
    },
    e.value,
  );
  return e.unavailable
    ? (0, Q.jsxs)(
        S,
        {
          children: [
            (0, Q.jsx)(D, { render: t }),
            (0, Q.jsx)(E, { side: `top`, children: e.unavailable }),
          ],
        },
        e.value,
      )
    : t;
}
function Rn(e) {
  let t = (0, X.c)(21),
    { label: n, value: r, options: i, onChange: a } = e,
    o;
  t[0] !== i || t[1] !== r
    ? ((o = i.find((e) => e.value === r) ?? i[0]), (t[0] = i), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (!s) return null;
  let c;
  t[3] === s ? (c = t[4]) : ((c = (0, Q.jsx)(Tn, { option: s })), (t[3] = s), (t[4] = c));
  let l;
  t[5] === n
    ? (l = t[6])
    : ((l = (0, Q.jsx)(`span`, { className: `flex-1`, children: n })), (t[5] = n), (t[6] = l));
  let u;
  t[7] === s.label
    ? (u = t[8])
    : ((u = (0, Q.jsx)(`span`, {
        className: `min-w-0 max-w-32 truncate text-xs text-muted-foreground`,
        children: s.label,
      })),
      (t[7] = s.label),
      (t[8] = u));
  let d;
  t[9] !== c || t[10] !== l || t[11] !== u
    ? ((d = (0, Q.jsxs)(F, { children: [c, l, u] })),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] !== n || t[14] !== a || t[15] !== i || t[16] !== r
    ? ((f = (0, Q.jsx)(ne, {
        children: (0, Q.jsx)(In, { label: n, value: r, options: i, onChange: a }),
      })),
      (t[13] = n),
      (t[14] = a),
      (t[15] = i),
      (t[16] = r),
      (t[17] = f))
    : (f = t[17]);
  let p;
  return (
    t[18] !== d || t[19] !== f
      ? ((p = (0, Q.jsxs)(A, { children: [d, f] })), (t[18] = d), (t[19] = f), (t[20] = p))
      : (p = t[20]),
    p
  );
}
var zn = 250;
function Bn(e, t, n) {
  let r = (0, X.c)(13),
    i;
  r[0] === n ? (i = r[1]) : ((i = n.trim().slice(0, 100)), (r[0] = n), (r[1] = i));
  let a = i,
    o = Se(a, zn),
    s;
  if (r[2] !== t || r[3] !== e || r[4] !== o) {
    let n;
    (r[6] !== t || r[7] !== o
      ? ((n = (e) => {
          let { environmentId: n, input: r } = e;
          return { environmentId: n, input: { ...r, kind: t, ...(o ? { query: o } : {}) } };
        }),
        (r[6] = t),
        (r[7] = o),
        (r[8] = n))
      : (n = r[8]),
      (s = e.map(n)),
      (r[2] = t),
      (r[3] = e),
      (r[4] = o),
      (r[5] = s));
  } else s = r[5];
  let c = q(s),
    l;
  return (
    r[9] !== c || r[10] !== o || r[11] !== a
      ? ((l = o === a ? c : { labels: [], authors: [], error: null, isPending: !0 }),
        (r[9] = c),
        (r[10] = o),
        (r[11] = a),
        (r[12] = l))
      : (l = r[12]),
    l
  );
}
function Vn(e) {
  let t = (0, X.c)(40),
    { value: n, options: r, scope: i, onChange: a } = e,
    [o, s] = (0, Z.useState)(``),
    c = Bn(i, `authors`, o),
    l;
  t[0] === n ? (l = t[1]) : ((l = n?.toLowerCase() ?? ``), (t[0] = n), (t[1] = l));
  let u = l,
    d,
    f,
    p,
    m,
    h,
    g,
    v;
  if (
    t[2] !== c.authors ||
    t[3] !== c.isPending ||
    t[4] !== u ||
    t[5] !== a ||
    t[6] !== r ||
    t[7] !== o ||
    t[8] !== n
  ) {
    let e = Ft(r, c.authors, n),
      i;
    (t[16] === u
      ? (i = t[17])
      : ((i = (e) => e.actor.login.toLowerCase() !== u), (t[16] = u), (t[17] = i)),
      (v = [...(e ? [e] : []), ...G(r, c.authors, o).filter(i)].slice(0, 30)));
    let l;
    t[18] !== u || t[19] !== a
      ? ((l = (e) => e.toLowerCase() !== u && a(e || void 0)),
        (t[18] = u),
        (t[19] = a),
        (t[20] = l))
      : (l = t[20]);
    let y = l,
      b;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (e) => s(e.currentTarget.value)), (t[21] = b))
      : (b = t[21]),
      t[22] !== c.isPending || t[23] !== o
        ? ((g = (0, Q.jsx)(ee, {
            autoFocus: !0,
            busy: c.isPending,
            value: o,
            onChange: b,
            placeholder: `Search authors`,
            "aria-label": `Search authors`,
          })),
          (t[22] = c.isPending),
          (t[23] = o),
          (t[24] = g))
        : (g = t[24]),
      (d = k),
      (f = e?.actor.login ?? n ?? ``),
      (p = y),
      t[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, Q.jsx)(P, {
            value: ``,
            children: (0, Q.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [(0, Q.jsx)(_, { "aria-hidden": !0, className: `size-3.5` }), `Anyone`],
            }),
          })),
          (t[25] = m))
        : (m = t[25]),
      (h = v.map(Hn)),
      (t[2] = c.authors),
      (t[3] = c.isPending),
      (t[4] = u),
      (t[5] = a),
      (t[6] = r),
      (t[7] = o),
      (t[8] = n),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = v));
  } else ((d = t[9]), (f = t[10]), (p = t[11]), (m = t[12]), (h = t[13]), (g = t[14]), (v = t[15]));
  let y;
  t[26] !== c.error || t[27] !== c.isPending || t[28] !== v.length
    ? ((y =
        v.length === 0 && !c.isPending
          ? (0, Q.jsx)(N, {
              disabled: !0,
              children:
                c.error === null ? `No authors found` : `Couldn't search authors on the host`,
            })
          : null),
      (t[26] = c.error),
      (t[27] = c.isPending),
      (t[28] = v.length),
      (t[29] = y))
    : (y = t[29]);
  let b;
  t[30] !== d || t[31] !== f || t[32] !== p || t[33] !== m || t[34] !== h || t[35] !== y
    ? ((b = (0, Q.jsxs)(d, { value: f, onValueChange: p, children: [m, h, y] })),
      (t[30] = d),
      (t[31] = f),
      (t[32] = p),
      (t[33] = m),
      (t[34] = h),
      (t[35] = y),
      (t[36] = b))
    : (b = t[36]);
  let x;
  return (
    t[37] !== g || t[38] !== b
      ? ((x = (0, Q.jsxs)(Q.Fragment, { children: [g, b] })), (t[37] = g), (t[38] = b), (t[39] = x))
      : (x = t[39]),
    x
  );
}
function Hn(e) {
  return (0, Q.jsx)(
    P,
    {
      value: e.actor.login,
      children: (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          (0, Q.jsx)(K, { actor: e.actor }),
          (0, Q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e.actor.login }),
          e.mergedCount > 0
            ? (0, Q.jsxs)(`span`, {
                className: `shrink-0 text-xs text-muted-foreground tabular-nums`,
                children: [e.mergedCount, ` merges loaded`],
              })
            : null,
        ],
      }),
    },
    e.actor.login.toLowerCase(),
  );
}
function Un(e) {
  let t = (0, X.c)(12),
    { value: n, options: r, scope: i, onChange: a } = e,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(f, { "aria-hidden": !0, className: `size-3.5` })),
      (s = (0, Q.jsx)(`span`, { className: `flex-1`, children: `Author` })),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c = n ?? `Anyone`,
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, Q.jsxs)(F, {
        children: [
          o,
          s,
          (0, Q.jsx)(`span`, {
            className: `min-w-0 max-w-32 truncate text-xs text-muted-foreground`,
            children: c,
          }),
        ],
      })),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] !== a || t[5] !== r || t[6] !== i || t[7] !== n
    ? ((u = (0, Q.jsx)(ne, {
        children: (0, Q.jsx)(Vn, { value: n, options: r, scope: i, onChange: a }),
      })),
      (t[4] = a),
      (t[5] = r),
      (t[6] = i),
      (t[7] = n),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== l || t[10] !== u
      ? ((d = (0, Q.jsxs)(A, { children: [l, u] })), (t[9] = l), (t[10] = u), (t[11] = d))
      : (d = t[11]),
    d
  );
}
function $(e) {
  let t = (0, X.c)(15),
    { value: n, options: r, scope: i, onChange: a } = e,
    [o, s] = (0, Z.useState)(``),
    c = Bn(i, `labels`, o),
    l;
  t[0] === n ? (l = t[1]) : ((l = new Set(n.map(Gn))), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  if (
    t[2] !== c.error ||
    t[3] !== c.isPending ||
    t[4] !== c.labels ||
    t[5] !== a ||
    t[6] !== r ||
    t[7] !== o ||
    t[8] !== u ||
    t[9] !== n
  ) {
    let e = ft(r, c.labels, o),
      i = [
        ...n.filter((t) => !e.some((e) => e.name.toLowerCase() === t.toLowerCase())).map(Wn),
        ...e,
      ],
      l;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (e) => s(e.currentTarget.value)), (t[11] = l))
      : (l = t[11]);
    let f;
    (t[12] !== c.isPending || t[13] !== o
      ? ((f = (0, Q.jsx)(ee, {
          autoFocus: !0,
          busy: c.isPending,
          value: o,
          onChange: l,
          placeholder: `Search labels`,
          "aria-label": `Search labels`,
        })),
        (t[12] = c.isPending),
        (t[13] = o),
        (t[14] = f))
      : (f = t[14]),
      (d = (0, Q.jsxs)(Q.Fragment, {
        children: [
          f,
          i.length === 0 && !c.isPending
            ? (0, Q.jsx)(N, {
                disabled: !0,
                children:
                  c.error === null ? `No labels found` : `Couldn't search labels on the host`,
              })
            : null,
          i.map((e) => {
            let t = e.name.toLowerCase(),
              r = mt(e.color);
            return (0, Q.jsx)(
              x,
              {
                checked: u.has(t),
                onCheckedChange: (t) =>
                  a(t ? [...n, e.name] : n.filter((t) => t.toLowerCase() !== e.name.toLowerCase())),
                children: (0, Q.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `size-2.5 shrink-0 rounded-full bg-muted-foreground`,
                      ...(r ? { style: { backgroundColor: r } } : {}),
                    }),
                    (0, Q.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e.name }),
                    e.count > 0
                      ? (0, Q.jsx)(`span`, {
                          className: `shrink-0 text-xs text-muted-foreground tabular-nums`,
                          children: e.count,
                        })
                      : null,
                  ],
                }),
              },
              t,
            );
          }),
        ],
      })),
      (t[2] = c.error),
      (t[3] = c.isPending),
      (t[4] = c.labels),
      (t[5] = a),
      (t[6] = r),
      (t[7] = o),
      (t[8] = u),
      (t[9] = n),
      (t[10] = d));
  } else d = t[10];
  return d;
}
function Wn(e) {
  return { name: e, color: null, count: 0 };
}
function Gn(e) {
  return e.toLowerCase();
}
function Kn(e) {
  let t = (0, X.c)(12),
    { value: n, options: r, scope: i, onChange: a } = e,
    o,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(s, { "aria-hidden": !0, className: `size-3.5` })),
      (c = (0, Q.jsx)(`span`, { className: `flex-1`, children: `Labels` })),
      (t[0] = o),
      (t[1] = c))
    : ((o = t[0]), (c = t[1]));
  let l = n.length === 0 ? `Any` : `${n.length} selected`,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = (0, Q.jsxs)(F, {
        children: [
          o,
          c,
          (0, Q.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: l }),
        ],
      })),
      (t[2] = l),
      (t[3] = u));
  let d;
  t[4] !== a || t[5] !== r || t[6] !== i || t[7] !== n
    ? ((d = (0, Q.jsx)(ne, {
        children: (0, Q.jsx)($, { value: n, options: r, scope: i, onChange: a }),
      })),
      (t[4] = a),
      (t[5] = r),
      (t[6] = i),
      (t[7] = n),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== u || t[10] !== d
      ? ((f = (0, Q.jsxs)(A, { children: [u, d] })), (t[9] = u), (t[10] = d), (t[11] = f))
      : (f = t[11]),
    f
  );
}
function qn(e) {
  let t = (0, X.c)(111),
    {
      onOpenChange: n,
      state: r,
      stateOptions: i,
      onState: a,
      involvement: o,
      involvementOptions: s,
      onInvolvement: c,
      filters: l,
      onFilters: u,
      authorOptions: d,
      labelOptions: f,
      optionScope: p,
      host: m,
      hostOptions: h,
      onHost: v,
      server: y,
      serverOptions: b,
      onServer: x,
      projects: S,
      projectId: T,
      projectEnvironmentId: E,
      unavailable: D,
      onProject: O,
    } = e,
    k;
  t[0] === d ? (k = t[1]) : ((k = d === void 0 ? [] : d), (t[0] = d), (t[1] = k));
  let ee = k,
    A;
  t[2] === f ? (A = t[3]) : ((A = f === void 0 ? [] : f), (t[2] = f), (t[3] = A));
  let te = A,
    ne;
  t[4] === l.labels ? (ne = t[5]) : ((ne = l.labels ?? []), (t[4] = l.labels), (t[5] = ne));
  let j, re;
  t[6] !== l.author ||
  t[7] !== l.checks ||
  t[8] !== l.draft ||
  t[9] !== l.review ||
  t[10] !== m ||
  t[11] !== o ||
  t[12] !== T ||
  t[13] !== y ||
  t[14] !== r ||
  t[15] !== ne
    ? ((j = ne.flatMap(Xn)),
      (re = [
        r !== `open`,
        o !== `all`,
        m,
        y,
        T,
        l.draft,
        l.review,
        l.checks,
        l.author,
        ...j,
      ].filter(Boolean)),
      (t[6] = l.author),
      (t[7] = l.checks),
      (t[8] = l.draft),
      (t[9] = l.review),
      (t[10] = m),
      (t[11] = o),
      (t[12] = T),
      (t[13] = y),
      (t[14] = r),
      (t[15] = ne),
      (t[16] = j),
      (t[17] = re))
    : ((j = t[16]), (re = t[17]));
  let ie = re.length,
    N;
  t[18] !== l || t[19] !== u
    ? ((N = (e) => u(Object.fromEntries(Object.entries({ ...l, ...e }).filter(Yn)))),
      (t[18] = l),
      (t[19] = u),
      (t[20] = N))
    : (N = t[20]);
  let P = N,
    F;
  t[21] === P
    ? (F = t[22])
    : ((F = (e, t) => P({ [e]: t === jn ? void 0 : t })), (t[21] = P), (t[22] = F));
  let I = F,
    L;
  t[23] !== E || t[24] !== T
    ? ((L = T === void 0 || E === void 0 ? On : Mn({ id: T, environmentId: E })),
      (t[23] = E),
      (t[24] = T),
      (t[25] = L))
    : (L = t[25]);
  let se = L,
    R;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { value: On, label: `All projects`, Icon: _ }), (t[26] = R))
    : (R = t[26]);
  let z;
  if (t[27] !== S || t[28] !== D) {
    let e;
    t[30] === D
      ? (e = t[31])
      : ((e = (e, t) => Number(D.has(Mn(e))) - Number(D.has(Mn(t)))), (t[30] = D), (t[31] = e));
    let n;
    (t[32] === D
      ? (n = t[33])
      : ((n = (e) => ({
          value: Mn(e),
          label: e.title,
          Icon: g,
          project: e,
          ...(D.has(Mn(e)) ? { unavailable: D.get(Mn(e)) } : {}),
        })),
        (t[32] = D),
        (t[33] = n)),
      (z = [R, ...S.toSorted(e).map(n)]),
      (t[27] = S),
      (t[28] = D),
      (t[29] = z));
  } else z = t[29];
  let ce = z,
    B,
    le,
    ue;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(C, { variant: `outline` })),
      (le = (0, Q.jsx)(Qt, { className: `size-4` })),
      (ue = (0, Q.jsx)(`span`, { children: `Filters` })),
      (t[34] = B),
      (t[35] = le),
      (t[36] = ue))
    : ((B = t[34]), (le = t[35]), (ue = t[36]));
  let de;
  t[37] === ie
    ? (de = t[38])
    : ((de =
        ie > 0
          ? (0, Q.jsx)(`span`, {
              className: `rounded-full bg-muted px-1.5 text-xs text-muted-foreground tabular-nums`,
              children: ie,
            })
          : null),
      (t[37] = ie),
      (t[38] = de));
  let fe;
  t[39] === de
    ? (fe = t[40])
    : ((fe = (0, Q.jsxs)(oe, { render: B, children: [le, ue, de] })), (t[39] = de), (t[40] = fe));
  let pe;
  t[41] !== a || t[42] !== r || t[43] !== i
    ? ((pe = (0, Q.jsx)(Rn, { label: `State`, value: r, options: i, onChange: a })),
      (t[41] = a),
      (t[42] = r),
      (t[43] = i),
      (t[44] = pe))
    : (pe = t[44]);
  let V;
  t[45] !== o || t[46] !== s || t[47] !== c
    ? ((V = (0, Q.jsx)(Rn, { label: `Involvement`, value: o, options: s, onChange: c })),
      (t[45] = o),
      (t[46] = s),
      (t[47] = c),
      (t[48] = V))
    : (V = t[48]);
  let me;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(ae, {})), (t[49] = me))
    : (me = t[49]);
  let H;
  t[50] === P ? (H = t[51]) : ((H = (e) => P({ author: e })), (t[50] = P), (t[51] = H));
  let he;
  t[52] !== ee || t[53] !== l.author || t[54] !== p || t[55] !== H
    ? ((he = (0, Q.jsx)(Un, { value: l.author, options: ee, scope: p, onChange: H })),
      (t[52] = ee),
      (t[53] = l.author),
      (t[54] = p),
      (t[55] = H),
      (t[56] = he))
    : (he = t[56]);
  let ge;
  t[57] === P
    ? (ge = t[58])
    : ((ge = (e) => P({ labels: e.length === 0 ? void 0 : e.slice(0, 10).map(Jn) })),
      (t[57] = P),
      (t[58] = ge));
  let _e;
  t[59] !== te || t[60] !== p || t[61] !== j || t[62] !== ge
    ? ((_e = (0, Q.jsx)(Kn, { value: j, options: te, scope: p, onChange: ge })),
      (t[59] = te),
      (t[60] = p),
      (t[61] = j),
      (t[62] = ge),
      (t[63] = _e))
    : (_e = t[63]);
  let ve = l.draft ?? jn,
    ye;
  t[64] === I ? (ye = t[65]) : ((ye = (e) => I(`draft`, e)), (t[64] = I), (t[65] = ye));
  let be;
  t[66] !== ve || t[67] !== ye
    ? ((be = (0, Q.jsx)(Rn, { label: `Draft`, value: ve, options: Nn, onChange: ye })),
      (t[66] = ve),
      (t[67] = ye),
      (t[68] = be))
    : (be = t[68]);
  let xe = l.review ?? jn,
    Se;
  t[69] === I ? (Se = t[70]) : ((Se = (e) => I(`review`, e)), (t[69] = I), (t[70] = Se));
  let Ce;
  t[71] !== xe || t[72] !== Se
    ? ((Ce = (0, Q.jsx)(Rn, { label: `Review`, value: xe, options: Pn, onChange: Se })),
      (t[71] = xe),
      (t[72] = Se),
      (t[73] = Ce))
    : (Ce = t[73]);
  let U = l.checks ?? jn,
    we;
  t[74] === I ? (we = t[75]) : ((we = (e) => I(`checks`, e)), (t[74] = I), (t[75] = we));
  let Te;
  t[76] !== U || t[77] !== we
    ? ((Te = (0, Q.jsx)(Rn, { label: `Checks`, value: U, options: Fn, onChange: we })),
      (t[76] = U),
      (t[77] = we),
      (t[78] = Te))
    : (Te = t[78]);
  let Ee;
  t[79] !== m || t[80] !== h || t[81] !== v
    ? ((Ee =
        h.length > 2
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(ae, {}),
                (0, Q.jsx)(Rn, {
                  label: `Host`,
                  value: m ?? kn,
                  options: h,
                  onChange: (e) => v(e === kn ? void 0 : e),
                }),
              ],
            })
          : null),
      (t[79] = m),
      (t[80] = h),
      (t[81] = v),
      (t[82] = Ee))
    : (Ee = t[82]);
  let De;
  t[83] !== x || t[84] !== y || t[85] !== b
    ? ((De =
        b.length > 2
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(ae, {}),
                (0, Q.jsx)(Rn, {
                  label: `Server`,
                  value: y ?? An,
                  options: b,
                  onChange: (e) => x(e === An ? void 0 : e),
                }),
              ],
            })
          : null),
      (t[83] = x),
      (t[84] = y),
      (t[85] = b),
      (t[86] = De))
    : (De = t[86]);
  let Oe;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(ae, {})), (t[87] = Oe))
    : (Oe = t[87]);
  let ke;
  t[88] !== O || t[89] !== T || t[90] !== S
    ? ((ke = (e) => {
        let t = S.find((t) => Mn(t) === e);
        t ? O(t.id, t.environmentId) : T !== void 0 && O(void 0, void 0);
      }),
      (t[88] = O),
      (t[89] = T),
      (t[90] = S),
      (t[91] = ke))
    : (ke = t[91]);
  let Ae;
  t[92] !== ce || t[93] !== se || t[94] !== ke
    ? ((Ae = (0, Q.jsx)(Rn, { label: `Project`, value: se, options: ce, onChange: ke })),
      (t[92] = ce),
      (t[93] = se),
      (t[94] = ke),
      (t[95] = Ae))
    : (Ae = t[95]);
  let je;
  t[96] !== pe ||
  t[97] !== V ||
  t[98] !== he ||
  t[99] !== _e ||
  t[100] !== be ||
  t[101] !== Ce ||
  t[102] !== Te ||
  t[103] !== Ee ||
  t[104] !== De ||
  t[105] !== Ae
    ? ((je = (0, Q.jsxs)(M, {
        align: `end`,
        side: `bottom`,
        children: [pe, V, me, he, _e, be, Ce, Te, Ee, De, Oe, Ae],
      })),
      (t[96] = pe),
      (t[97] = V),
      (t[98] = he),
      (t[99] = _e),
      (t[100] = be),
      (t[101] = Ce),
      (t[102] = Te),
      (t[103] = Ee),
      (t[104] = De),
      (t[105] = Ae),
      (t[106] = je))
    : (je = t[106]);
  let Me;
  return (
    t[107] !== n || t[108] !== fe || t[109] !== je
      ? ((Me = (0, Q.jsxs)(w, { onOpenChange: n, children: [fe, je] })),
        (t[107] = n),
        (t[108] = fe),
        (t[109] = je),
        (t[110] = Me))
      : (Me = t[110]),
    Me
  );
}
function Jn(e) {
  return [e];
}
function Yn(e) {
  let [, t] = e;
  return t !== void 0;
}
function Xn(e) {
  return e;
}
function Zn(e) {
  let t = (0, X.c)(12),
    { joined: n } = e,
    r,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(`path`, {
        d: `M10 58h100`,
        className: `text-muted-foreground/30`,
        stroke: `currentColor`,
      })),
      (i = (0, Q.jsx)(`circle`, {
        cx: `10`,
        cy: `58`,
        r: `5`,
        fill: `currentColor`,
        fillOpacity: 0.25,
      })),
      (a = (0, Q.jsx)(`circle`, {
        cx: `110`,
        cy: `58`,
        r: `5`,
        fill: `currentColor`,
        fillOpacity: 0.25,
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : ((r = t[0]), (i = t[1]), (a = t[2]));
  let o;
  t[3] === n
    ? (o = t[4])
    : ((o = n
        ? (0, Q.jsx)(`path`, { d: `M30 58c0-18 8-26 24-26h12c16 0 24 8 24 26` })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`path`, { d: `M30 58c0-18 8-26 24-26h4` }),
              (0, Q.jsx)(`path`, {
                d: `M90 58c0-18-8-26-24-26h-4`,
                strokeDasharray: `2 7`,
                className: `text-muted-foreground/50`,
              }),
            ],
          })),
      (t[3] = n),
      (t[4] = o));
  let s = n ? 5 : 4,
    c = n ? `currentColor` : `none`,
    l = n ? void 0 : `text-muted-foreground/45`,
    u;
  t[5] !== s || t[6] !== c || t[7] !== l
    ? ((u = (0, Q.jsx)(`circle`, {
        cx: `60`,
        cy: `32`,
        r: s,
        fill: c,
        fillOpacity: 0.25,
        className: l,
      })),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== o || t[10] !== u
      ? ((d = (0, Q.jsxs)(`svg`, {
          "aria-hidden": !0,
          viewBox: `0 0 120 72`,
          className: `h-20 w-32 text-muted-foreground/60`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: 2,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          children: [r, i, a, o, u],
        })),
        (t[9] = o),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Qn(e) {
  let t = (0, X.c)(56),
    {
      query: n,
      filtered: r,
      searching: i,
      hasProjects: o,
      canLoadMore: s,
      loadingMore: c,
      refreshing: l,
      onClearQuery: u,
      onLoadMore: d,
      onRefresh: f,
    } = e;
  if (!o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Zn, { joined: !1 })), (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(We, {
          children: [
            (0, Q.jsx)(Ke, { children: `No projects in this workspace` }),
            (0, Q.jsx)(qe, {
              children: `Add a project, and the pull requests from its repository appear here.`,
            }),
          ],
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsxs)(Je, {
            children: [
              e,
              n,
              (0, Q.jsx)(Ge, {
                children: (0, Q.jsxs)(C, {
                  size: `sm`,
                  onClick: $n,
                  children: [(0, Q.jsx)(b, { className: `size-3.5` }), `Add project`],
                }),
              }),
            ],
          })),
          (t[2] = r))
        : (r = t[2]),
      r
    );
  }
  if (i) {
    let e;
    t[3] === n
      ? (e = t[4])
      : ((e = n.length > 48 ? `${n.slice(0, 48)}…` : n), (t[3] = n), (t[4] = e));
    let r = `Searching every host for “${e}”`,
      i;
    return (
      t[5] === r
        ? (i = t[6])
        : ((i = (0, Q.jsx)(Ae, { rows: 5, caption: r })), (t[5] = r), (t[6] = i)),
      i
    );
  }
  if (n.length > 0) {
    let e;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Zn, { joined: !1 })), (t[7] = e))
      : (e = t[7]);
    let r;
    t[8] === n
      ? (r = t[9])
      : ((r = n.length > 48 ? `${n.slice(0, 48)}…` : n), (t[8] = n), (t[9] = r));
    let i;
    t[10] === r
      ? (i = t[11])
      : ((i = (0, Q.jsxs)(Ke, { children: [`Nothing matches “`, r, `”`] })),
        (t[10] = r),
        (t[11] = i));
    let o;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Q.jsx)(qe, {
          children: `The hosts were searched for it. Try fewer words, or search by number, author or branch.`,
        })),
        (t[12] = o))
      : (o = t[12]);
    let s;
    t[13] === i
      ? (s = t[14])
      : ((s = (0, Q.jsxs)(We, { children: [i, o] })), (t[13] = i), (t[14] = s));
    let c;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Q.jsx)(a, { className: `size-3.5` })), (t[15] = c))
      : (c = t[15]);
    let d;
    t[16] === u
      ? (d = t[17])
      : ((d = (0, Q.jsxs)(C, {
          size: `sm`,
          variant: `outline`,
          onClick: u,
          children: [c, `Clear search`],
        })),
        (t[16] = u),
        (t[17] = d));
    let p;
    t[18] === l
      ? (p = t[19])
      : ((p = (0, Q.jsx)(Wt, { size: `sm`, refreshing: l })), (t[18] = l), (t[19] = p));
    let m = l ? `Checking...` : `Check again`,
      h;
    t[20] !== f || t[21] !== l || t[22] !== p || t[23] !== m
      ? ((h = (0, Q.jsxs)(C, {
          size: `sm`,
          variant: `outline`,
          disabled: l,
          onClick: f,
          children: [p, m],
        })),
        (t[20] = f),
        (t[21] = l),
        (t[22] = p),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]);
    let g;
    t[25] !== h || t[26] !== d
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex flex-wrap justify-center gap-2`,
          children: [d, h],
        })),
        (t[25] = h),
        (t[26] = d),
        (t[27] = g))
      : (g = t[27]);
    let _;
    return (
      t[28] !== g || t[29] !== s
        ? ((_ = (0, Q.jsxs)(Je, { children: [e, s, g] })), (t[28] = g), (t[29] = s), (t[30] = _))
        : (_ = t[30]),
      _
    );
  }
  let p;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(Zn, { joined: !1 })), (t[31] = p))
    : (p = t[31]);
  let m = r ? `Nothing under these filters` : `No pull requests`,
    h;
  t[32] === m ? (h = t[33]) : ((h = (0, Q.jsx)(Ke, { children: m })), (t[32] = m), (t[33] = h));
  let g = r
      ? `Widen the state, involvement or project filter to see more.`
      : `Pull requests from every project in this workspace appear here.`,
    _;
  t[34] === g ? (_ = t[35]) : ((_ = (0, Q.jsx)(qe, { children: g })), (t[34] = g), (t[35] = _));
  let v;
  t[36] !== h || t[37] !== _
    ? ((v = (0, Q.jsxs)(We, { children: [h, _] })), (t[36] = h), (t[37] = _), (t[38] = v))
    : (v = t[38]);
  let y;
  t[39] !== s || t[40] !== c || t[41] !== d
    ? ((y = s
        ? (0, Q.jsx)(C, {
            size: `sm`,
            variant: `outline`,
            disabled: c,
            onClick: d,
            children: c ? `Loading...` : `Load more pull requests`,
          })
        : null),
      (t[39] = s),
      (t[40] = c),
      (t[41] = d),
      (t[42] = y))
    : (y = t[42]);
  let x;
  t[43] === l
    ? (x = t[44])
    : ((x = (0, Q.jsx)(Wt, { size: `sm`, refreshing: l })), (t[43] = l), (t[44] = x));
  let S = l ? `Checking...` : `Check again`,
    w;
  t[45] !== f || t[46] !== l || t[47] !== x || t[48] !== S
    ? ((w = (0, Q.jsxs)(C, {
        size: `sm`,
        variant: `outline`,
        disabled: l,
        onClick: f,
        children: [x, S],
      })),
      (t[45] = f),
      (t[46] = l),
      (t[47] = x),
      (t[48] = S),
      (t[49] = w))
    : (w = t[49]);
  let T;
  t[50] !== w || t[51] !== y
    ? ((T = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap justify-center gap-2`,
        children: [y, w],
      })),
      (t[50] = w),
      (t[51] = y),
      (t[52] = T))
    : (T = t[52]);
  let E;
  return (
    t[53] !== T || t[54] !== v
      ? ((E = (0, Q.jsxs)(Je, { children: [p, v, T] })), (t[53] = T), (t[54] = v), (t[55] = E))
      : (E = t[55]),
    E
  );
}
function $n() {
  return $t({ open: `add-project` });
}
function er(e) {
  let t = (0, X.c)(22),
    { environmentId: n, reference: r, onSelect: i, stackNumber: a } = e,
    o = Te(n, r);
  if (o.data !== null) {
    let e = !!o.error,
      n;
    t[0] !== o.data.number || t[1] !== o.notice || t[2] !== e
      ? ((n = (0, Q.jsx)(U, { number: o.data.number, notice: o.notice, stale: e })),
        (t[0] = o.data.number),
        (t[1] = o.notice),
        (t[2] = e),
        (t[3] = n))
      : (n = t[3]);
    let a;
    t[4] !== o.error || t[5] !== o.refresh
      ? ((a = o.error
          ? (0, Q.jsx)(N, { onClick: o.refresh, children: `Retry stack refresh` })
          : null),
        (t[4] = o.error),
        (t[5] = o.refresh),
        (t[6] = a))
      : (a = t[6]);
    let s;
    t[7] !== i || t[8] !== o.data || t[9] !== r
      ? ((s = (0, Q.jsx)(Ue, { stack: o.data, reference: r, onSelect: i })),
        (t[7] = i),
        (t[8] = o.data),
        (t[9] = r),
        (t[10] = s))
      : (s = t[10]);
    let c;
    return (
      t[11] !== n || t[12] !== a || t[13] !== s
        ? ((c = (0, Q.jsxs)(Q.Fragment, { children: [n, a, s] })),
          (t[11] = n),
          (t[12] = a),
          (t[13] = s),
          (t[14] = c))
        : (c = t[14]),
      c
    );
  }
  let s;
  t[15] === a ? (s = t[16]) : ((s = (0, Q.jsx)(U, { number: a })), (t[15] = a), (t[16] = s));
  let c =
      o.error ?? (o.isPending ? `Loading stack…` : `This pull request is no longer in a stack.`),
    l;
  t[17] === c ? (l = t[18]) : ((l = (0, Q.jsx)(R, { children: c })), (t[17] = c), (t[18] = l));
  let u;
  return (
    t[19] !== s || t[20] !== l
      ? ((u = (0, Q.jsxs)(Q.Fragment, { children: [s, l] })), (t[19] = s), (t[20] = l), (t[21] = u))
      : (u = t[21]),
    u
  );
}
function tr(e) {
  let t = (0, X.c)(25),
    { environmentId: n, reference: r, membership: i, onSelect: a } = e,
    [o, s] = (0, Z.useState)(!1),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`span`, {
        role: `button`,
        tabIndex: 0,
        className: `inline-flex shrink-0 cursor-pointer items-center gap-1 text-xs font-normal text-muted-foreground`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l = `Stack ${i.number}, layer ${i.position} of ${i.size}`,
    u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(Ze.stack, { "aria-hidden": !0, className: `size-3` })), (t[1] = u))
    : (u = t[1]);
  let d;
  t[2] !== i.position || t[3] !== i.size || t[4] !== l
    ? ((d = (0, Q.jsx)(D, {
        render: (0, Q.jsxs)(oe, {
          nativeButton: !1,
          render: c,
          "aria-label": l,
          onClick: ar,
          onKeyDown: ir,
          children: [u, i.position, `/`, i.size],
        }),
      })),
      (t[2] = i.position),
      (t[3] = i.size),
      (t[4] = l),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== i.number || t[7] !== i.position || t[8] !== i.size
    ? ((f = (0, Q.jsxs)(E, {
        children: [`View stack #`, i.number, `, layer `, i.position, ` of `, i.size],
      })),
      (t[6] = i.number),
      (t[7] = i.position),
      (t[8] = i.size),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== d || t[11] !== f
    ? ((p = (0, Q.jsxs)(S, { children: [d, f] })), (t[10] = d), (t[11] = f), (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== n || t[14] !== i.number || t[15] !== a || t[16] !== o || t[17] !== r
    ? ((m = o
        ? (0, Q.jsx)(er, {
            environmentId: n,
            reference: r,
            stackNumber: i.number,
            onSelect: (e) => {
              (s(!1), a(e));
            },
          })
        : null),
      (t[13] = n),
      (t[14] = i.number),
      (t[15] = a),
      (t[16] = o),
      (t[17] = r),
      (t[18] = m))
    : (m = t[18]);
  let h;
  t[19] === m
    ? (h = t[20])
    : ((h = (0, Q.jsx)(M, {
        align: `start`,
        onClick: rr,
        onKeyDown: nr,
        children: (0, Q.jsx)(te, { children: m }),
      })),
      (t[19] = m),
      (t[20] = h));
  let g;
  return (
    t[21] !== o || t[22] !== p || t[23] !== h
      ? ((g = (0, Q.jsxs)(w, { open: o, onOpenChange: s, children: [p, h] })),
        (t[21] = o),
        (t[22] = p),
        (t[23] = h),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function nr(e) {
  return e.stopPropagation();
}
function rr(e) {
  return e.stopPropagation();
}
function ir(e) {
  return e.stopPropagation();
}
function ar(e) {
  return e.stopPropagation();
}
var or = [
  { overflow: `@xl/pr-row-meta:hidden` },
  { overflow: `@3xl/pr-row-meta:hidden` },
  { overflow: `` },
];
function sr(e) {
  let t = (0, X.c)(4),
    { labels: n } = e;
  if (n.length === 0) return null;
  let r;
  t[0] === n
    ? (r = t[1])
    : ((r = or.map((e, t) => {
        let r = n[t];
        if (!r) return null;
        let i = n.length - t - 1;
        return (0, Q.jsx)(
          ht,
          {
            label: r,
            className:
              t === 0
                ? ``
                : t === 1
                  ? `hidden @xl/pr-row-meta:inline-flex`
                  : `hidden @3xl/pr-row-meta:inline-flex`,
            children:
              i > 0
                ? (0, Q.jsxs)(`span`, { className: se(`shrink-0`, e.overflow), children: [`+`, i] })
                : null,
          },
          r.name,
        );
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Q.jsx)(`span`, { className: `flex min-w-0 items-center gap-1`, children: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var cr = `px-3 py-2.5`;
function lr(e) {
  let t = (0, X.c)(99),
    {
      entry: n,
      selected: r,
      showProjectTitle: i,
      showProvider: o,
      environmentLabel: s,
      matchedElsewhere: c,
      statsKey: l,
      statsRef: u,
      onSelect: d,
      hostActions: f,
      onActed: p,
      closing: m,
      sweeping: h,
      onCloseSweepStart: g,
    } = e,
    _ = m !== void 0 && m,
    v = h !== void 0 && h,
    y;
  t[0] === n.provider ? (y = t[1]) : ((y = Yt(n.provider)), (t[0] = n.provider), (t[1] = y));
  let { Icon: b, providerName: x, terminology: C } = y,
    w = r ? `bg-accent` : `hover:bg-accent/60`,
    O;
  t[2] === w
    ? (O = t[3])
    : ((O = se(
        `flex items-center rounded-md [content-visibility:auto] [contain-intrinsic-block-size:56.5px]`,
        w,
      )),
      (t[2] = w),
      (t[3] = O));
  let k = r ? `true` : void 0,
    ee;
  t[4] !== n || t[5] !== d ? ((ee = () => d(n)), (t[4] = n), (t[5] = d), (t[6] = ee)) : (ee = t[6]);
  let A;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = se(
        Re,
        cr,
        `min-w-0 flex-1 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring`,
      )),
      (t[7] = A))
    : (A = t[7]);
  let te;
  t[8] !== n.baseBranch || t[9] !== n.isDraft || t[10] !== n.mergeability || t[11] !== n.state
    ? ((te = (0, Q.jsx)(He, {
        state: n.state,
        isDraft: n.isDraft,
        mergeability: n.mergeability,
        baseBranch: n.baseBranch,
        className: `mt-0.75 self-start`,
      })),
      (t[8] = n.baseBranch),
      (t[9] = n.isDraft),
      (t[10] = n.mergeability),
      (t[11] = n.state),
      (t[12] = te))
    : (te = t[12]);
  let ne;
  t[13] !== n.provider || t[14] !== n.url
    ? ((ne = (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          Pe({
            url: n.url,
            openLabel: Fe(T.get(n.provider)),
            position: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[13] = n.provider),
      (t[14] = n.url),
      (t[15] = ne))
    : (ne = t[15]);
  let j;
  t[16] !== n.number || t[17] !== ne
    ? ((j = (0, Q.jsxs)(`span`, { className: Be, onContextMenu: ne, children: [`#`, n.number] })),
      (t[16] = n.number),
      (t[17] = ne),
      (t[18] = j))
    : (j = t[18]);
  let re;
  t[19] !== n.checksState ||
  t[20] !== n.environmentId ||
  t[21] !== n.number ||
  t[22] !== n.projectId ||
  t[23] !== n.repository
    ? ((re =
        n.checksState === void 0
          ? null
          : (0, Q.jsx)(ze, {
              checksState: n.checksState,
              environmentId: n.environmentId,
              reference: { projectId: n.projectId, repository: n.repository, number: n.number },
            })),
      (t[19] = n.checksState),
      (t[20] = n.environmentId),
      (t[21] = n.number),
      (t[22] = n.projectId),
      (t[23] = n.repository),
      (t[24] = re))
    : (re = t[24]);
  let M;
  t[25] === n.reviewDecision
    ? (M = t[26])
    : ((M = n.reviewDecision === void 0 ? null : (0, Q.jsx)(It, { decision: n.reviewDecision })),
      (t[25] = n.reviewDecision),
      (t[26] = M));
  let ie;
  t[27] !== re || t[28] !== M
    ? ((ie = (0, Q.jsxs)(Q.Fragment, { children: [re, M] })),
      (t[27] = re),
      (t[28] = M),
      (t[29] = ie))
    : (ie = t[29]);
  let ae;
  t[30] !== n.environmentId ||
  t[31] !== n.host ||
  t[32] !== n.number ||
  t[33] !== n.projectId ||
  t[34] !== n.repository ||
  t[35] !== n.stack ||
  t[36] !== d
    ? ((ae = n.stack
        ? (0, Q.jsx)(tr, {
            environmentId: n.environmentId,
            reference: {
              projectId: n.projectId,
              host: n.host,
              repository: n.repository,
              number: n.number,
            },
            membership: n.stack,
            onSelect: (e) => d({ ...e, host: n.host, environmentId: n.environmentId }),
          })
        : null),
      (t[30] = n.environmentId),
      (t[31] = n.host),
      (t[32] = n.number),
      (t[33] = n.projectId),
      (t[34] = n.repository),
      (t[35] = n.stack),
      (t[36] = d),
      (t[37] = ae))
    : (ae = t[37]);
  let oe;
  t[38] !== n.host || t[39] !== n.number || t[40] !== n.projectId || t[41] !== n.repository
    ? ((oe = { projectId: n.projectId, host: n.host, repository: n.repository, number: n.number }),
      (t[38] = n.host),
      (t[39] = n.number),
      (t[40] = n.projectId),
      (t[41] = n.repository),
      (t[42] = oe))
    : (oe = t[42]);
  let N;
  t[43] !== n.additions || t[44] !== n.deletions || t[45] !== n.environmentId || t[46] !== oe
    ? ((N = (0, Q.jsx)(De, {
        environmentId: n.environmentId,
        reference: oe,
        additions: n.additions,
        deletions: n.deletions,
        className: `font-mono`,
      })),
      (t[43] = n.additions),
      (t[44] = n.deletions),
      (t[45] = n.environmentId),
      (t[46] = oe),
      (t[47] = N))
    : (N = t[47]);
  let P;
  t[48] !== ae || t[49] !== N
    ? ((P = (0, Q.jsxs)(Q.Fragment, { children: [ae, N] })), (t[48] = ae), (t[49] = N), (t[50] = P))
    : (P = t[50]);
  let F;
  t[51] === c
    ? (F = t[52])
    : ((F = c
        ? (0, Q.jsxs)(S, {
            children: [
              (0, Q.jsxs)(D, {
                render: (0, Q.jsx)(`span`, {
                  className: `flex min-w-6 items-center gap-1 overflow-hidden rounded-full border border-border/60 px-1 text-3xs`,
                }),
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: `matched in the description`,
                  }),
                  (0, Q.jsx)(a, { "aria-hidden": !0, className: `size-3 shrink-0` }),
                  (0, Q.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `hidden truncate @xs/pr-row-meta:block`,
                    children: `matched in the description`,
                  }),
                ],
              }),
              (0, Q.jsx)(E, { side: `top`, children: `Matched in the description` }),
            ],
          })
        : null),
      (t[51] = c),
      (t[52] = F));
  let I;
  t[53] !== b || t[54] !== x || t[55] !== o
    ? ((I = o
        ? (0, Q.jsxs)(S, {
            children: [
              (0, Q.jsx)(D, {
                render: (0, Q.jsx)(`span`, { className: `inline-flex shrink-0` }),
                children: (0, Q.jsx)(b, { "aria-label": x, className: `size-3` }),
              }),
              (0, Q.jsx)(E, { children: x }),
            ],
          })
        : null),
      (t[53] = b),
      (t[54] = x),
      (t[55] = o),
      (t[56] = I))
    : (I = t[56]);
  let L;
  t[57] === n.author
    ? (L = t[58])
    : ((L = (0, Q.jsx)(je, {
        actor: n.author,
        className: `min-w-3.5 max-w-40`,
        labelClassName: `sr-only @xs/pr-row-meta:not-sr-only @xs/pr-row-meta:truncate`,
      })),
      (t[57] = n.author),
      (t[58] = L));
  let R;
  t[59] !== n.repository || t[60] !== i
    ? ((R = i ? (0, Q.jsx)(`span`, { className: `truncate`, children: n.repository }) : null),
      (t[59] = n.repository),
      (t[60] = i),
      (t[61] = R))
    : (R = t[61]);
  let z;
  t[62] === s
    ? (z = t[63])
    : ((z = s ? (0, Q.jsx)(`span`, { className: `min-w-0 max-w-32 truncate`, children: s }) : null),
      (t[62] = s),
      (t[63] = z));
  let ce;
  t[64] === n.labels
    ? (ce = t[65])
    : ((ce = n.labels.length > 0 ? (0, Q.jsx)(sr, { labels: n.labels }) : null),
      (t[64] = n.labels),
      (t[65] = ce));
  let B;
  t[66] !== F || t[67] !== I || t[68] !== L || t[69] !== R || t[70] !== z || t[71] !== ce
    ? ((B = (0, Q.jsxs)(Q.Fragment, { children: [F, I, L, R, z, ce] })),
      (t[66] = F),
      (t[67] = I),
      (t[68] = L),
      (t[69] = R),
      (t[70] = z),
      (t[71] = ce),
      (t[72] = B))
    : (B = t[72]);
  let le;
  t[73] !== n.title ||
  t[74] !== n.updatedAt ||
  t[75] !== j ||
  t[76] !== ie ||
  t[77] !== P ||
  t[78] !== B
    ? ((le = (0, Q.jsx)(Me, {
        number: j,
        title: n.title,
        signals: ie,
        status: P,
        metaClassName: `@container/pr-row-meta`,
        meta: B,
        updatedAt: n.updatedAt,
      })),
      (t[73] = n.title),
      (t[74] = n.updatedAt),
      (t[75] = j),
      (t[76] = ie),
      (t[77] = P),
      (t[78] = B),
      (t[79] = le))
    : (le = t[79]);
  let ue;
  t[80] !== le || t[81] !== k || t[82] !== ee || t[83] !== te
    ? ((ue = (0, Q.jsxs)(`button`, {
        type: `button`,
        "aria-current": k,
        onClick: ee,
        className: A,
        children: [te, le],
      })),
      (t[80] = le),
      (t[81] = k),
      (t[82] = ee),
      (t[83] = te),
      (t[84] = ue))
    : (ue = t[84]);
  let de;
  t[85] !== _ ||
  t[86] !== n ||
  t[87] !== f ||
  t[88] !== p ||
  t[89] !== g ||
  t[90] !== v ||
  t[91] !== C
    ? ((de =
        f.size > 0
          ? (0, Q.jsx)(Ee, {
              entry: n,
              hostActions: f,
              terminology: C,
              onActed: p,
              closing: _,
              sweeping: v,
              ...(g ? { onCloseSweepStart: g } : {}),
            })
          : null),
      (t[85] = _),
      (t[86] = n),
      (t[87] = f),
      (t[88] = p),
      (t[89] = g),
      (t[90] = v),
      (t[91] = C),
      (t[92] = de))
    : (de = t[92]);
  let fe;
  return (
    t[93] !== l || t[94] !== u || t[95] !== ue || t[96] !== de || t[97] !== O
      ? ((fe = (0, Q.jsxs)(`div`, {
          ref: u,
          "data-pull-request-stats-key": l,
          "data-pull-request-key": l,
          className: O,
          children: [ue, de],
        })),
        (t[93] = l),
        (t[94] = u),
        (t[95] = ue),
        (t[96] = de),
        (t[97] = O),
        (t[98] = fe))
      : (fe = t[98]),
    fe
  );
}
var ur = (0, Z.memo)(lr);
function dr() {
  let e = (0, X.c)(3),
    t = ye(),
    n = fn(),
    r;
  return (
    e[0] !== n || e[1] !== t
      ? ((r = () => {
          n ? window.history.back() : t({ to: `/` });
        }),
        (e[0] = n),
        (e[1] = t),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function fr(e) {
  let t = (0, X.c)(3),
    n = dr(),
    r = e ?? n,
    i,
    a;
  (t[0] === r
    ? ((i = t[1]), (a = t[2]))
    : ((i = () => {
        let e = (e) => {
          if (e.defaultPrevented || e.repeat || e.isComposing || e.key !== `Escape`) return;
          e.preventDefault();
          let t = document.activeElement;
          (t instanceof HTMLElement && t.blur(), r());
        };
        return (
          window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e)
        );
      }),
      (a = [r]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a)),
    (0, Z.useEffect)(i, a));
}
function pr() {
  return {
    terminalFocus: J(),
    terminalOpen: !1,
    previewFocus: !1,
    previewOpen: !1,
    modelPickerOpen: !1,
    isWeb: !O,
    isDesktop: O,
  };
}
var mr = { authored: v, reviewRequested: h, others: c };
function hr(e) {
  let t = (0, X.c)(11),
    { group: n } = e,
    r = mr[n.key] ?? _,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Q.jsx)(r, { "aria-hidden": !0, className: `size-3.5 shrink-0` })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n.label
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`h2`, { className: `shrink-0`, children: n.label })),
      (t[2] = n.label),
      (t[3] = a));
  let o;
  t[4] === n.entries.length
    ? (o = t[5])
    : ((o = (0, Q.jsx)(`span`, {
        className: `shrink-0 tabular-nums text-muted-foreground/50`,
        children: n.entries.length,
      })),
      (t[4] = n.entries.length),
      (t[5] = o));
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(z, { className: `min-w-2 flex-1` })), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o
      ? ((c = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2 px-3 pb-1 text-xs font-medium text-muted-foreground/70`,
          children: [i, a, o, s],
        })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
var gr = [
    { value: `all`, label: `All`, Icon: _ },
    { value: `reviewing`, label: `Reviewing`, Icon: h },
    { value: `authored`, label: `Authored`, Icon: v },
  ],
  _r = [
    { value: `all`, label: `All`, Icon: _ },
    { value: `open`, label: `Open`, Icon: Ze.pullRequest },
    { value: `closed`, label: `Closed`, Icon: Ze.closed },
    { value: `merged`, label: `Merged`, Icon: Ze.merged },
  ],
  vr = 250,
  yr = 10,
  br = 99,
  xr = 500,
  Sr = {},
  Cr = { authored: [], reviewing: [] },
  wr = [],
  Tr = {},
  Er = {},
  Dr = new Map(),
  Or = new Set(),
  kr = (e) => H({ ...e, repository: e.repository.toLowerCase() });
function Ar() {
  let e = (0, X.c)(539);
  fr();
  let t = Jt.useSearch(),
    n = t.sort ?? `ready`,
    r = n === `ready` || n === `largest` || n === `smallest` ? `eager` : `visible`,
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { from: Jt.fullPath }), (e[0] = i))
    : (i = e[0]);
  let a = ye(i),
    s = ie(ue),
    {
      capableEnvironments: c,
      scopedEnvironmentId: l,
      environmentKey: u,
      capabilityKnown: d,
      pullRequestsSupported: f,
      projects: p,
      environmentLabels: m,
      scopedProjectId: h,
      scopedProject: g,
      scopedProjects: v,
      selectedProject: b,
      queryEnvironmentIds: x,
      environmentQueries: S,
      assignmentKey: w,
      linkedSelection: T,
      expectedHosts: E,
      projectsKnown: D,
    } = ci(t),
    O = c.length === 0 ? null : he,
    k = en(O),
    ee;
  e[1] === O ? (ee = e[2]) : ((ee = (e) => pe(e.byThreadKey, O)), (e[1] = O), (e[2] = ee));
  let A = V(ee),
    te;
  e[3] === O ? (te = e[4]) : ((te = (e) => me(e.byThreadKey, O)), (e[3] = O), (e[4] = te));
  let ne = V(te),
    j = ne?.kind === `pull-request` ? ne : null,
    M = A.isOpen ? j : null,
    { active: ae, durationMs: oe } = Zt(),
    N;
  e[5] !== A.surfaces || e[6] !== j
    ? ((N = { activeSurface: j, surfaces: A.surfaces }),
      (e[5] = A.surfaces),
      (e[6] = j),
      (e[7] = N))
    : (N = e[7]);
  let P = N,
    F = an(A.isOpen && j !== null, P, ae, O?.threadId ?? null, oe),
    L = F.present,
    R = F.value?.activeSurface ?? null,
    z;
  e[8] === F.value?.surfaces
    ? (z = e[9])
    : ((z = F.value?.surfaces ?? []), (e[8] = F.value?.surfaces), (e[9] = z));
  let ce = z,
    B = R?.environmentId ?? b?.environmentId ?? null,
    le;
  e[10] === a
    ? (le = e[11])
    : ((le = (e) =>
        void a({
          search: (t) => {
            let n = { ...t, ...e };
            return {
              involvement: n.involvement ?? t.involvement,
              state: n.state ?? t.state,
              ...(n.sort && n.sort !== `ready` ? { sort: n.sort } : {}),
              ...(n.repository ? { repository: n.repository } : {}),
              ...(n.number ? { number: n.number } : {}),
              ...(n.projectId ? { projectId: n.projectId } : {}),
              ...(n.environmentId ? { environmentId: n.environmentId } : {}),
              ...(n.host ? { host: n.host } : {}),
              ...(n.selectedHost ? { selectedHost: n.selectedHost } : {}),
              ...(n.selectedProjectId ? { selectedProjectId: n.selectedProjectId } : {}),
              ...(n.selectedEnvironmentId
                ? { selectedEnvironmentId: n.selectedEnvironmentId }
                : {}),
              ...(n.q ? { q: n.q } : {}),
              ...(n.draft ? { draft: n.draft } : {}),
              ...(n.review ? { review: n.review } : {}),
              ...(n.checks ? { checks: n.checks } : {}),
              ...(n.author ? { author: n.author } : {}),
              ...(n.labels && n.labels.length > 0 ? { labels: n.labels } : {}),
            };
          },
          replace: !0,
        })),
      (e[10] = a),
      (e[11] = le));
  let H = le,
    be;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = {
        repository: void 0,
        number: void 0,
        selectedProjectId: void 0,
        selectedEnvironmentId: void 0,
        selectedHost: void 0,
      }),
      (e[12] = be))
    : (be = e[12]);
  let xe = be,
    Se;
  e[13] !== t || e[14] !== H
    ? ((Se = (e) => {
        let n = rn({
          ...t,
          ...e,
          involvement: e.involvement ?? t.involvement,
          state: e.state ?? t.state,
        });
        (tn(n), H(e));
      }),
      (e[13] = t),
      (e[14] = H),
      (e[15] = Se))
    : (Se = e[15]);
  let U = Se,
    we = t.q ?? ``,
    Te;
  e[16] === we ? (Te = e[17]) : ((Te = we.trim()), (e[16] = we), (e[17] = Te));
  let Ee = Te,
    [De, je] = (0, Z.useState)(!1),
    {
      sentQuery: Me,
      querySettled: Pe,
      typedParsed: Fe,
      sentParsed: Re,
      menuFilters: ze,
      menuFiltered: Be,
      filters: He,
      hasFilters: Ue,
      localFilters: We,
      hasLocalFilters: Ge,
    } = _i(t, Ee),
    Ke;
  e[18] === S ? (Ke = e[19]) : ((Ke = S.map(si)), (e[18] = S), (e[19] = Ke));
  let qe = Pt(Ke),
    Je;
  e[20] === qe ? (Je = e[21]) : ((Je = qe.map(oi).join(`|`)), (e[20] = qe), (e[21] = Je));
  let Ze = Je,
    Qe;
  e[22] === t.labels
    ? (Qe = e[23])
    : ((Qe = t.labels?.join(`\0`) ?? ``), (e[22] = t.labels), (e[23] = Qe));
  let $e = `${u}:${w}:${t.state}:${t.involvement}:${h ?? ``}:${t.host ?? ``}:${t.draft ?? ``}:${t.review ?? ``}:${t.checks ?? ``}:${t.author ?? ``}:${Qe}`,
    W = `${$e}:${Me}`,
    tt;
  e[24] !== W || e[25] !== r
    ? ((tt = { key: W, policy: r }), (e[24] = W), (e[25] = r), (e[26] = tt))
    : (tt = e[26]);
  let nt = tt,
    it;
  e[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((it = []), (e[27] = it)) : (it = e[27]);
  let at;
  e[28] === W
    ? (at = e[29])
    : ((at = { key: W, size: br, cursors: null, regrown: it }), (e[28] = W), (e[29] = at));
  let [st, ut] = (0, Z.useState)(at),
    G = st.key === W ? st.size : br,
    ft = st.key === W ? st.cursors : null,
    pt;
  e[30] !== W || e[31] !== st.key || e[32] !== st.regrown
    ? ((pt = st.key === W ? st.regrown : []),
      (e[30] = W),
      (e[31] = st.key),
      (e[32] = st.regrown),
      (e[33] = pt))
    : (pt = e[33]);
  let mt = pt;
  st.key !== W && ut({ key: W, size: br, cursors: null, regrown: [] });
  let ht;
  if (
    e[34] !== S ||
    e[35] !== He ||
    e[36] !== Ue ||
    e[37] !== G ||
    e[38] !== h ||
    e[39] !== t.host ||
    e[40] !== t.involvement ||
    e[41] !== t.state ||
    e[42] !== ft ||
    e[43] !== Re ||
    e[44] !== mt
  ) {
    let n;
    (e[46] !== He ||
    e[47] !== Ue ||
    e[48] !== G ||
    e[49] !== h ||
    e[50] !== t.host ||
    e[51] !== t.involvement ||
    e[52] !== t.state ||
    e[53] !== ft ||
    e[54] !== Re ||
    e[55] !== mt
      ? ((n = (e) => {
          let { environmentId: n, projectIds: r } = e,
            i = ft?.[n];
          return ft !== null && i === void 0 && !mt.includes(n)
            ? []
            : [
                {
                  environmentId: n,
                  input: {
                    state: t.state,
                    involvement: t.involvement,
                    limit: G,
                    ...(h ? { projectId: h } : {}),
                    ...(r ? { projectIds: r } : {}),
                    ...(t.host ? { host: t.host } : {}),
                    ...(Ue ? { filters: He } : {}),
                    ...(Re.text ? { query: Re.text } : {}),
                    ...(i === void 0 ? {} : { cursors: i }),
                  },
                },
              ];
        }),
        (e[46] = He),
        (e[47] = Ue),
        (e[48] = G),
        (e[49] = h),
        (e[50] = t.host),
        (e[51] = t.involvement),
        (e[52] = t.state),
        (e[53] = ft),
        (e[54] = Re),
        (e[55] = mt),
        (e[56] = n))
      : (n = e[56]),
      (ht = S.flatMap(n)),
      (e[34] = S),
      (e[35] = He),
      (e[36] = Ue),
      (e[37] = G),
      (e[38] = h),
      (e[39] = t.host),
      (e[40] = t.involvement),
      (e[41] = t.state),
      (e[42] = ft),
      (e[43] = Re),
      (e[44] = mt),
      (e[45] = ht));
  } else ht = e[45];
  let gt = ht,
    K = jt(gt),
    xt;
  if (
    e[57] !== S ||
    e[58] !== Be ||
    e[59] !== ze ||
    e[60] !== h ||
    e[61] !== t.host ||
    e[62] !== t.involvement ||
    e[63] !== t.state
  ) {
    let n;
    (e[65] !== Be ||
    e[66] !== ze ||
    e[67] !== h ||
    e[68] !== t.host ||
    e[69] !== t.involvement ||
    e[70] !== t.state
      ? ((n = (e) => {
          let { environmentId: n, projectIds: r } = e;
          return {
            environmentId: n,
            input: {
              state: t.state,
              involvement: t.involvement,
              limit: br,
              ...(h ? { projectId: h } : {}),
              ...(r ? { projectIds: r } : {}),
              ...(t.host ? { host: t.host } : {}),
              ...(Be ? { filters: ze } : {}),
            },
          };
        }),
        (e[65] = Be),
        (e[66] = ze),
        (e[67] = h),
        (e[68] = t.host),
        (e[69] = t.involvement),
        (e[70] = t.state),
        (e[71] = n))
      : (n = e[71]),
      (xt = S.map(n)),
      (e[57] = S),
      (e[58] = Be),
      (e[59] = ze),
      (e[60] = h),
      (e[61] = t.host),
      (e[62] = t.involvement),
      (e[63] = t.state),
      (e[64] = xt));
  } else xt = e[64];
  let St = xt,
    q = jt(St),
    Et =
      q.data?.entries.length === 0 &&
      q.data.errors.length === 0 &&
      !q.isPending &&
      q.error === null,
    Dt;
  bb0: {
    if (!De) {
      Dt = wr;
      break bb0;
    }
    let n;
    if (e[72] !== S || e[73] !== h || e[74] !== t.host || e[75] !== t.involvement) {
      let r;
      (e[77] !== h || e[78] !== t.host || e[79] !== t.involvement
        ? ((r = (e) => {
            let { environmentId: n, projectIds: r } = e;
            return {
              environmentId: n,
              input: {
                state: `all`,
                involvement: t.involvement,
                limit: br,
                ...(h ? { projectId: h } : {}),
                ...(r ? { projectIds: r } : {}),
                ...(t.host ? { host: t.host } : {}),
              },
            };
          }),
          (e[77] = h),
          (e[78] = t.host),
          (e[79] = t.involvement),
          (e[80] = r))
        : (r = e[80]),
        (n = S.map(r)),
        (e[72] = S),
        (e[73] = h),
        (e[74] = t.host),
        (e[75] = t.involvement),
        (e[76] = n));
    } else n = e[76];
    Dt = n;
  }
  let Ot = Dt,
    Ft = jt(Ot),
    It = t.involvement === `all` && Ee.length === 0,
    Lt;
  bb1: {
    if (!It || q.data === null || q.data.entries.length === 0) {
      let t;
      (e[81] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = { authored: wr, reviewing: wr }), (e[81] = t))
        : (t = e[81]),
        (Lt = t));
      break bb1;
    }
    let n;
    e[82] !== S ||
    e[83] !== Be ||
    e[84] !== ze ||
    e[85] !== h ||
    e[86] !== t.host ||
    e[87] !== t.state
      ? ((n = (e) =>
          S.map((n) => {
            let { environmentId: r, projectIds: i } = n;
            return {
              environmentId: r,
              input: {
                state: t.state,
                involvement: e,
                limit: br,
                ...(h ? { projectId: h } : {}),
                ...(i ? { projectIds: i } : {}),
                ...(t.host ? { host: t.host } : {}),
                ...(Be ? { filters: ze } : {}),
              },
            };
          })),
        (e[82] = S),
        (e[83] = Be),
        (e[84] = ze),
        (e[85] = h),
        (e[86] = t.host),
        (e[87] = t.state),
        (e[88] = n))
      : (n = e[88]);
    let r = n,
      i;
    e[89] === r ? (i = e[90]) : ((i = r(`authored`)), (e[89] = r), (e[90] = i));
    let a;
    e[91] === r ? (a = e[92]) : ((a = r(`reviewing`)), (e[91] = r), (e[92] = a));
    let o;
    (e[93] !== i || e[94] !== a
      ? ((o = { authored: i, reviewing: a }), (e[93] = i), (e[94] = a), (e[95] = o))
      : (o = e[95]),
      (Lt = o));
  }
  let Rt = Lt,
    zt = jt(Rt.authored),
    Bt = jt(Rt.reviewing),
    Ht;
  e[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ht = { reportFailure: !1 }), (e[96] = Ht))
    : (Ht = e[96]);
  let Ut = de(kt.invalidate, Ht),
    [Wt, Kt] = (0, Z.useState)(0),
    [qt, Qt] = (0, Z.useState)(!1),
    $t = qt || K.isPending,
    [J, sn] = (0, Z.useState)(null),
    [Y, ln] = (0, Z.useState)(null),
    [un, dn] = (0, Z.useState)(ai),
    fn = (0, Z.useRef)(0),
    pn;
  e[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pn = (e, t) => {
        let n = (fn.current += 1),
          r = ct(e, t, new Date(), n);
        return r === null ? null : (dn((t) => new Map(t).set(rt(e), r)), n);
      }),
      (e[97] = pn))
    : (pn = e[97]);
  let mn = pn,
    hn;
  e[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((hn = (e, t) => {
        t !== null &&
          dn((n) => {
            if (n.get(e)?.token !== t) return n;
            let r = new Map(n);
            return (r.delete(e), r);
          });
      }),
      (e[98] = hn))
    : (hn = e[98]);
  let gn = hn,
    _n;
  e[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_n = new Map()), (e[99] = _n))
    : (_n = e[99]);
  let vn = (0, Z.useRef)(_n),
    yn;
  e[100] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yn = (e) => {
        let { entry: t, action: n } = e;
        n !== `merge` && mn(t, n);
      }),
      (e[100] = yn))
    : (yn = e[100]);
  let bn = ve(yn),
    xn;
  e[101] === bn
    ? (xn = e[102])
    : ((xn = (e) => {
        bn({ entry: e, action: `close` });
      }),
      (e[101] = bn),
      (e[102] = xn));
  let Cn = ve(xn),
    { close: wn, closingKeys: Tn } = cn(Cn),
    [On, kn] = (0, Z.useState)(``);
  if (u.length > 0 && On !== u && (kn(u), J?.environmentKey !== u)) {
    let e = At(typeof window > `u` ? void 0 : window.localStorage, u);
    sn(
      e === null
        ? null
        : {
            environmentKey: u,
            scope: e.scope,
            query: ``,
            source: null,
            data: e.data,
            ...(e.partitions === void 0 ? {} : { partitions: e.partitions }),
          },
    );
  }
  let An = K.data !== null && !K.isPending ? K.data : null,
    jn =
      It && Et
        ? Cr
        : It && zt.data !== null && Bt.data !== null
          ? { authored: zt.data.entries, reviewing: Bt.data.entries }
          : null,
    Mn = J !== null && J.environmentKey === u && J.scope === $e ? J.partitions : void 0,
    Nn = jn ?? Mn,
    Pn = An === null ? null : Y?.key === W ? Y.entries : An.entries;
  An !== null &&
    Pn !== null &&
    (J === null ||
      J.source !== An ||
      J.environmentKey !== u ||
      J.scope !== $e ||
      J.query !== Me ||
      J.data.entries !== Pn ||
      J.partitions?.authored !== Nn?.authored ||
      J.partitions?.reviewing !== Nn?.reviewing) &&
    sn({
      environmentKey: u,
      scope: $e,
      query: Me,
      source: An,
      data: { ...An, entries: Pn },
      ...(Nn === void 0 ? {} : { partitions: Nn }),
    });
  let Fn =
      J !== null && J.source !== null && J.environmentKey.length > 0 && J.query.length === 0
        ? J
        : null,
    In = q.data?.viewers,
    Ln = q.data?.providers,
    Rn,
    zn;
  (e[103] !== Ln || e[104] !== Fn || e[105] !== In
    ? ((Rn = () => {
        Fn !== null &&
          wt(typeof window > `u` ? void 0 : window.localStorage, Fn.environmentKey, {
            scope: Fn.scope,
            data: {
              ...Fn.data,
              viewers: In ?? Fn.data.viewers,
              providers: Ln ?? Fn.data.providers,
            },
            ...(Fn.partitions === void 0 ? {} : { partitions: Fn.partitions }),
          });
      }),
      (zn = [Fn, In, Ln]),
      (e[103] = Ln),
      (e[104] = Fn),
      (e[105] = In),
      (e[106] = Rn),
      (e[107] = zn))
    : ((Rn = e[106]), (zn = e[107])),
    (0, Z.useEffect)(Rn, zn));
  let Bn;
  bb2: {
    if (J === null || J.environmentKey !== u || J.scope === $e) {
      Bn = null;
      break bb2;
    }
    let n;
    e[108] !== J.data.entries || e[109] !== h || e[110] !== t.host || e[111] !== t.state
      ? ((n = et(J.data.entries, { state: t.state, projectId: h, host: t.host })),
        (e[108] = J.data.entries),
        (e[109] = h),
        (e[110] = t.host),
        (e[111] = t.state),
        (e[112] = n))
      : (n = e[112]);
    let r = n,
      i;
    (e[113] !== r || e[114] !== J.data
      ? ((i = r.length === 0 ? null : { ...J.data, entries: r }),
        (e[113] = r),
        (e[114] = J.data),
        (e[115] = i))
      : (i = e[115]),
      (Bn = i));
  }
  let Vn = Bn,
    Hn =
      (Me.length === 0 && ft === null && G === br ? q.data : K.data) ??
      (J?.scope === $e && J.query === Me ? J.data : null),
    Un = (Me.length === 0 ? q.data : void 0) ?? (J?.scope === $e ? J.data : null) ?? Vn,
    $ = Hn ?? Un,
    Wn = Hn === null && Un !== null,
    Gn = K.isPending && $ !== null,
    Kn = K.isPending && $ === null;
  if (
    Hn !== null &&
    !K.isPending &&
    !(K.error && K.data === null) &&
    (Y === null || Y.key !== W || Y.source !== Hn)
  ) {
    if (Y === null || Y.key !== W) ln({ key: W, source: Hn, entries: Tt(Hn.entries, Re.text) });
    else if (ft !== null) {
      let e = new Set(Y.entries.map(rt)),
        t = Hn.entries.filter((t) => !e.has(rt(t))),
        n = Tt(t.toSorted(ii), Re.text);
      ln({ key: W, source: Hn, entries: [...Y.entries, ...n] });
    } else ln({ key: W, source: Hn, entries: vt(Y.entries, Tt(Hn.entries, Re.text), rt) });
    let e = Hn.entries;
    dn((t) => yt(t, e, rt, Date.now()));
  }
  let qn;
  e[116] === Hn?.nextCursors
    ? (qn = e[117])
    : ((qn = Hn?.nextCursors ?? {}), (e[116] = Hn?.nextCursors), (e[117] = qn));
  let Jn = qn,
    Yn;
  e[118] === Hn?.truncatedEnvironments
    ? (Yn = e[119])
    : ((Yn = Hn?.truncatedEnvironments ?? []), (e[118] = Hn?.truncatedEnvironments), (e[119] = Yn));
  let Xn;
  if (e[120] !== Jn || e[121] !== Yn) {
    let t;
    (e[123] === Jn ? (t = e[124]) : ((t = (e) => Jn[e] === void 0), (e[123] = Jn), (e[124] = t)),
      (Xn = Yn.filter(t)),
      (e[120] = Jn),
      (e[121] = Yn),
      (e[122] = Xn));
  } else Xn = e[122];
  let Zn = Xn,
    $n;
  e[125] !== Jn || e[126] !== Wn
    ? (($n = !Wn && Object.keys(Jn).length > 0), (e[125] = Jn), (e[126] = Wn), (e[127] = $n))
    : ($n = e[127]);
  let er = $n,
    tr;
  e[128] !== er || e[129] !== W || e[130] !== Jn || e[131] !== G || e[132] !== Zn
    ? ((tr = () => {
        ut(
          er
            ? { key: W, size: Zn.length === 0 ? G : Math.min(G + br, xr), cursors: Jn, regrown: Zn }
            : { key: W, size: Math.min(G + br, xr), cursors: null, regrown: [] },
        );
      }),
      (e[128] = er),
      (e[129] = W),
      (e[130] = Jn),
      (e[131] = G),
      (e[132] = Zn),
      (e[133] = tr))
    : (tr = e[133]);
  let nr = tr,
    rr;
  e[134] !== St ||
  e[135] !== Ot ||
  e[136] !== W ||
  e[137] !== K ||
  e[138] !== gt ||
  e[139] !== Y ||
  e[140] !== G ||
  e[141] !== Rt.authored ||
  e[142] !== Rt.reviewing ||
  e[143] !== ft
    ? ((rr = (e, t) => {
        let n = (e !== void 0 && e ? [...St, ...Ot, ...Rt.authored, ...Rt.reviewing] : []).filter(
          (e) => {
            let { environmentId: n } = e;
            return t === void 0 || n === t;
          },
        );
        if (ft === null) {
          K.refresh([
            ...gt.filter((e) => {
              let { environmentId: n } = e;
              return t === void 0 || n === t;
            }),
            ...n,
          ]);
          return;
        }
        n.length > 0 && K.refresh(n);
        let r = Y?.key === W ? lt(Y.entries) : G;
        ut({
          key: W,
          regrown: [],
          size: Math.min(Math.max(G, Math.ceil(r / br) * br), xr),
          cursors: null,
        });
      }),
      (e[134] = St),
      (e[135] = Ot),
      (e[136] = W),
      (e[137] = K),
      (e[138] = gt),
      (e[139] = Y),
      (e[140] = G),
      (e[141] = Rt.authored),
      (e[142] = Rt.reviewing),
      (e[143] = ft),
      (e[144] = rr))
    : (rr = e[144]);
  let ir = rr,
    ar = (0, Z.useRef)(``),
    or;
  e[145] !== ir || e[146] !== ft
    ? ((or = () => {
        ft !== null && ir();
      }),
      (e[145] = ir),
      (e[146] = ft),
      (e[147] = or))
    : (or = e[147]);
  let sr = (0, Z.useEffectEvent)(or),
    cr;
  e[148] !== sr || e[149] !== Ze
    ? ((cr = () => {
        Ze.length !== 0 && ar.current !== Ze && ((ar.current = Ze), sr());
      }),
      (e[148] = sr),
      (e[149] = Ze),
      (e[150] = cr))
    : (cr = e[150]);
  let lr;
  (e[151] === Ze ? (lr = e[152]) : ((lr = [Ze]), (e[151] = Ze), (e[152] = lr)),
    (0, Z.useEffect)(cr, lr));
  let dr;
  e[153] === ir
    ? (dr = e[154])
    : ((dr = () => {
        ir(!0);
      }),
      (e[153] = ir),
      (e[154] = dr));
  let mr;
  (e[155] === f ? (mr = e[156]) : ((mr = { enabled: f }), (e[155] = f), (e[156] = mr)), Oe(dr, mr));
  let vr = q.data?.viewers ?? $?.viewers ?? Sr,
    Ar;
  e[157] !== q.data?.errors || e[158] !== $?.errors
    ? ((Ar = q.data?.errors ?? $?.errors ?? []),
      (e[157] = q.data?.errors),
      (e[158] = $?.errors),
      (e[159] = Ar))
    : (Ar = e[159]);
  let li = Ar,
    ui;
  e[160] === Ft.data?.entries
    ? (ui = e[161])
    : ((ui = Ft.data?.entries ?? []), (e[160] = Ft.data?.entries), (e[161] = ui));
  let di;
  e[162] !== q.data?.entries || e[163] !== $?.entries
    ? ((di = q.data?.entries ?? $?.entries ?? []),
      (e[162] = q.data?.entries),
      (e[163] = $?.entries),
      (e[164] = di))
    : (di = e[164]);
  let fi;
  e[165] !== t.state || e[166] !== ui || e[167] !== di
    ? ((fi = ot([...ui, ...di], t.state)),
      (e[165] = t.state),
      (e[166] = ui),
      (e[167] = di),
      (e[168] = fi))
    : (fi = e[168]);
  let pi = fi,
    mi = (0, Z.useRef)(null),
    hi;
  e[169] !== W || e[170] !== $?.entries || e[171] !== Y
    ? ((hi = Y?.key === W ? Y.entries : ($?.entries ?? [])),
      (e[169] = W),
      (e[170] = $?.entries),
      (e[171] = Y),
      (e[172] = hi))
    : (hi = e[172]);
  let gi;
  e[173] !== q.data?.providers || e[174] !== $?.providers
    ? ((gi = q.data?.providers ?? $?.providers ?? []),
      (e[173] = q.data?.providers),
      (e[174] = $?.providers),
      (e[175] = gi))
    : (gi = e[175]);
  let vi = Pe && !Wn,
    xi = J !== null && J.environmentKey === u && J.scope === $e ? J.partitions : void 0,
    Si = It ? zt.data?.entries : void 0,
    Ci = It ? Bt.data?.entries : void 0,
    wi;
  e[176] !== Et ||
  e[177] !== Ge ||
  e[178] !== We ||
  e[179] !== It ||
  e[180] !== t.involvement ||
  e[181] !== hi ||
  e[182] !== gi ||
  e[183] !== vi ||
  e[184] !== xi ||
  e[185] !== Si ||
  e[186] !== Ci ||
  e[187] !== Fe.text ||
  e[188] !== vr
    ? ((wi = yi({
        known: hi,
        providers: gi,
        viewers: vr,
        involvement: t.involvement,
        localFilters: We,
        hasLocalFilters: Ge,
        text: Fe.text,
        answeredLocally: vi,
        baselineEmpty: Et,
        held: xi,
        authored: Si,
        reviewing: Ci,
        partitionsWanted: It,
      })),
      (e[176] = Et),
      (e[177] = Ge),
      (e[178] = We),
      (e[179] = It),
      (e[180] = t.involvement),
      (e[181] = hi),
      (e[182] = gi),
      (e[183] = vi),
      (e[184] = xi),
      (e[185] = Si),
      (e[186] = Ci),
      (e[187] = Fe.text),
      (e[188] = vr),
      (e[189] = wi))
    : (wi = e[189]);
  let {
      entries: Di,
      listedPullRequestTabStatuses: Oi,
      groups: Ai,
      entriesByStatsKey: ji,
      heldPullRequestsBySurface: Mi,
    } = wi,
    Ni;
  e[190] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ni = new Set()), (e[190] = Ni))
    : (Ni = e[190]);
  let Pi;
  e[191] === W ? (Pi = e[192]) : ((Pi = { key: W, values: Ni }), (e[191] = W), (e[192] = Pi));
  let Fi = (0, Z.useRef)(Pi),
    [Ii, Li] = (0, Z.useState)(ri),
    Ri;
  e[193] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ri = []), (e[193] = Ri)) : (Ri = e[193]);
  let zi;
  e[194] === W ? (zi = e[195]) : ((zi = { key: W, batches: Ri }), (e[194] = W), (e[195] = zi));
  let [Bi, Vi] = (0, Z.useState)(zi),
    Hi;
  e[196] !== W || e[197] !== Bi.batches || e[198] !== Bi.key
    ? ((Hi = Bi.key === W ? Bi.batches : []),
      (e[196] = W),
      (e[197] = Bi.batches),
      (e[198] = Bi.key),
      (e[199] = Hi))
    : (Hi = e[199]);
  let Ui = Hi,
    Wi;
  e[200] === Ui ? (Wi = e[201]) : ((Wi = Ui.map(ni)), (e[200] = Ui), (e[201] = Wi));
  let Gi = _t(Wi),
    Ki = (0, Z.useRef)(null),
    qi;
  e[202] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qi = new Set()), (e[202] = qi))
    : (qi = e[202]);
  let Ji = (0, Z.useRef)(qi),
    Yi;
  e[203] !== r || e[204] !== Gi.isPending
    ? ((Yi = (e) => {
        let t = Fi.current;
        r === `visible` &&
          e !== void 0 &&
          t.values.delete(e) &&
          !Gi.isPending &&
          Vi((e) => {
            if (e.key !== t.key) return e;
            let n = Mt(e.batches, t.values);
            return n.length === e.batches.length ? e : { key: e.key, batches: n };
          });
      }),
      (e[203] = r),
      (e[204] = Gi.isPending),
      (e[205] = Yi))
    : (Yi = e[205]);
  let Xi = ve(Yi),
    Zi;
  e[206] === Xi
    ? (Zi = e[207])
    : ((Zi = (e) => {
        if (e !== null && typeof IntersectionObserver < `u`)
          return (
            Ji.current.add(e),
            Ki.current?.observe(e),
            () => {
              (Ji.current.delete(e), Ki.current?.unobserve(e), Xi(e.dataset.pullRequestStatsKey));
            }
          );
      }),
      (e[206] = Xi),
      (e[207] = Zi));
  let Qi = ve(Zi),
    $i;
  e[208] !== Ii || e[209] !== Gi.isPending
    ? (($i = () => ({ statsByRow: Ii, pending: Gi.isPending })),
      (e[208] = Ii),
      (e[209] = Gi.isPending),
      (e[210] = $i))
    : ($i = e[210]);
  let ea = (0, Z.useEffectEvent)($i),
    ta;
  e[211] !== ji || e[212] !== W || e[213] !== ea || e[214] !== r
    ? ((ta = () => {
        if (r !== `eager`) return;
        let { statsByRow: e } = ea(),
          t = Fi.current.values;
        Vi((n) => {
          let i = n.key === W ? n.batches : [],
            a = Nt({
              entriesByKey: ji,
              candidateKeys: t,
              policy: r,
              activeBatches: i,
              statsByRow: e,
            });
          return a.length === 0 && n.key === W ? n : { key: W, batches: [...i, ...a] };
        });
      }),
      (e[211] = ji),
      (e[212] = W),
      (e[213] = ea),
      (e[214] = r),
      (e[215] = ta))
    : (ta = e[215]);
  let na;
  (e[216] !== ji || e[217] !== W || e[218] !== r
    ? ((na = [W, ji, r]), (e[216] = ji), (e[217] = W), (e[218] = r), (e[219] = na))
    : (na = e[219]),
    (0, Z.useEffect)(ta, na));
  let ra;
  e[220] === ji ? (ra = e[221]) : ((ra = () => ji), (e[220] = ji), (e[221] = ra));
  let ia = (0, Z.useEffectEvent)(ra),
    aa;
  e[222] !== W || e[223] !== ea || e[224] !== ia || e[225] !== r
    ? ((aa = () => {
        if (r !== `visible` || typeof IntersectionObserver > `u`) return;
        Fi.current = { key: W, values: new Set() };
        let e = new IntersectionObserver(
          (e) => {
            let t = Fi.current;
            if (t.key !== W) return;
            let n = !1,
              i = new Set(),
              a = ia();
            for (let r of e) {
              let e = r.target.dataset.pullRequestStatsKey;
              if (e === void 0) continue;
              let o = t.values.has(e);
              (r.isIntersecting && a.has(e) ? (t.values.add(e), o || i.add(e)) : t.values.delete(e),
                o !== t.values.has(e) && (n = !0));
            }
            if (!n) return;
            let o = ea();
            Vi((e) => {
              let n = e.key === W ? e.batches : [],
                s = o.pending ? n : Mt(n, t.values),
                c = Nt({
                  entriesByKey: a,
                  candidateKeys: i,
                  policy: r,
                  activeBatches: n,
                  statsByRow: o.statsByRow,
                });
              return c.length === 0 && s.length === n.length
                ? e
                : { key: W, batches: [...s, ...c] };
            });
          },
          { root: mi.current, rootMargin: `480px` },
        );
        Ki.current = e;
        for (let t of Ji.current) e.observe(t);
        return () => {
          (e.disconnect(), Ki.current === e && (Ki.current = null));
        };
      }),
      (e[222] = W),
      (e[223] = ea),
      (e[224] = ia),
      (e[225] = r),
      (e[226] = aa))
    : (aa = e[226]);
  let oa;
  (e[227] !== W || e[228] !== r
    ? ((oa = [W, r]), (e[227] = W), (e[228] = r), (e[229] = oa))
    : (oa = e[229]),
    (0, Z.useEffect)(aa, oa));
  let sa, ca;
  (e[230] !== W || e[231] !== r || e[232] !== Gi.isPending
    ? ((sa = () => {
        if (r !== `visible` || Gi.isPending) return;
        let e = Fi.current;
        Vi((t) => {
          if (t.key !== W || e.key !== W) return t;
          let n = Mt(t.batches, e.values);
          return n.length === t.batches.length ? t : { key: t.key, batches: n };
        });
      }),
      (ca = [W, r, Gi.isPending]),
      (e[230] = W),
      (e[231] = r),
      (e[232] = Gi.isPending),
      (e[233] = sa),
      (e[234] = ca))
    : ((sa = e[233]), (ca = e[234])),
    (0, Z.useEffect)(sa, ca));
  let [la, ua] = (0, Z.useState)(null);
  if (Gi.stats !== null && Gi.stats !== la) {
    let e = Gi.stats;
    (ua(e), Li((t) => dt(t, e)));
  }
  let da;
  e[235] !== ji || e[236] !== ir || e[237] !== Ii || e[238] !== Gi || e[239] !== nt
    ? ((da = (e, t) => {
        let n = e === void 0 ? nt : e;
        ir(!0, t);
        let r = Fi.current,
          i = bt({
            requestedScope: n,
            currentScope: nt,
            entriesByKey: ji,
            candidateKeys: r.key === n.key ? r.values : new Set(),
            statsByRow: Ii,
          });
        i !== null &&
          (Vi({ key: n.key, batches: i }),
          Gi.refresh(
            i
              .filter((e) => {
                let { environmentId: n } = e;
                return t === void 0 || n === t;
              })
              .map(ti),
          ));
      }),
      (e[235] = ji),
      (e[236] = ir),
      (e[237] = Ii),
      (e[238] = Gi),
      (e[239] = nt),
      (e[240] = da))
    : (da = e[240]);
  let fa = ve(da),
    pa;
  e[241] !== Ut || e[242] !== x || e[243] !== fa || e[244] !== nt
    ? ((pa = async () => {
        let e = nt;
        (Qt(!0),
          await Promise.all(x.map((e) => Ut({ environmentId: e, input: {} }))),
          Qt(!1),
          fa(e),
          Kt(ei));
      }),
      (e[241] = Ut),
      (e[242] = x),
      (e[243] = fa),
      (e[244] = nt),
      (e[245] = pa))
    : (pa = e[245]);
  let ma = pa,
    ha;
  e[246] !== Hn ||
  e[247] !== Ai ||
  e[248] !== Ge ||
  e[249] !== We ||
  e[250] !== un ||
  e[251] !== t.host ||
  e[252] !== t.involvement ||
  e[253] !== t.state ||
  e[254] !== n ||
  e[255] !== Ii ||
  e[256] !== Fe.text ||
  e[257] !== vr
    ? ((ha = {
        answered: Hn,
        host: t.host,
        groups: Ai,
        statsByRow: Ii,
        overrides: un,
        state: t.state,
        localFilters: We,
        hasLocalFilters: Ge,
        viewers: vr,
        sort: n,
        text: Fe.text,
        involvement: t.involvement,
      }),
      (e[246] = Hn),
      (e[247] = Ai),
      (e[248] = Ge),
      (e[249] = We),
      (e[250] = un),
      (e[251] = t.host),
      (e[252] = t.involvement),
      (e[253] = t.state),
      (e[254] = n),
      (e[255] = Ii),
      (e[256] = Fe.text),
      (e[257] = vr),
      (e[258] = ha))
    : (ha = e[258]);
  let {
      hosts: ga,
      displayGroups: _a,
      shownCount: va,
      hostActionsOf: ya,
      closeSweepRows: ba,
      listedPullRequestsBySurface: xa,
    } = bi(ha),
    Sa = ga.length > 1,
    [Ca, wa] = (0, Z.useState)($r),
    Ta = (0, Z.useRef)(null),
    Ea;
  e[259] !== wn || e[260] !== ba || e[261] !== Tn || e[262] !== _a || e[263] !== ya
    ? ((Ea = () => ({
        displayGroups: _a,
        closeSweepRows: ba,
        closingKeys: Tn,
        closeBatch: wn,
        hostActionsOf: ya,
      })),
      (e[259] = wn),
      (e[260] = ba),
      (e[261] = Tn),
      (e[262] = _a),
      (e[263] = ya),
      (e[264] = Ea))
    : (Ea = e[264]);
  let Da = ve(Ea),
    Oa;
  e[265] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oa = () => () => Ta.current?.cancel()), (e[265] = Oa))
    : (Oa = e[265]);
  let ka;
  (e[266] !== W || e[267] !== t.q || e[268] !== n
    ? ((ka = [W, t.q, n]), (e[266] = W), (e[267] = t.q), (e[268] = n), (e[269] = ka))
    : (ka = e[269]),
    (0, Z.useEffect)(Oa, ka));
  let Aa, ja;
  (e[270] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Aa = () => {
        let e = (e) => {
          e.key === `Escape` && Ta.current !== null && (e.preventDefault(), Ta.current.cancel());
        };
        return (
          document.addEventListener(`keydown`, e, !0),
          () => document.removeEventListener(`keydown`, e, !0)
        );
      }),
      (ja = []),
      (e[270] = Aa),
      (e[271] = ja))
    : ((Aa = e[270]), (ja = e[271])),
    (0, Z.useEffect)(Aa, ja));
  let Ma;
  e[272] === Da
    ? (Ma = e[273])
    : ((Ma = (e, t) => {
        Ta.current?.cancel();
        let n = rt(e),
          r = Da().displayGroups.find((e) => e.entries.some((e) => rt(e) === n));
        if (!r || Da().closingKeys.has(n)) return;
        let i = Da().displayGroups.flatMap(Qr),
          a = (e) => {
            let t = Da().closeSweepRows.get(e);
            return (
              t?.groupKey === r.key &&
              t.entry.state === `open` &&
              Da().hostActionsOf(t.entry).has(`close`) &&
              !Da().closingKeys.has(e) &&
              !mi.current?.querySelector(
                `[data-pull-request-key="${CSS.escape(e)}"] [data-pull-request-action-pending="true"]`,
              )
            );
          },
          o = [],
          s = null,
          c = (e) => {
            e !== s && ((s = e), (o = Vt(i, n, e, a)), wa(new Set(o)));
          };
        Ta.current = new Xt({
          active: n,
          event: t,
          options: {
            distance: 6,
            onAttach: Zr,
            onFinish: () => {
              ((Ta.current = null), wa(new Set()));
            },
          },
          onPending: Xr,
          onStart: () => c(n),
          onMove: (e) => {
            let { y: t } = e,
              n = mi.current;
            if (!n) return;
            let r = n.getBoundingClientRect(),
              i = Math.min(Math.max(t, r.top), r.bottom - 1),
              a = null;
            for (let e of n.querySelectorAll(`[data-pull-request-key]`)) {
              if (a !== null && e.getBoundingClientRect().top > i) break;
              a = e.dataset.pullRequestKey ?? null;
            }
            a !== null && c(a);
          },
          onEnd: () => {
            let e = o.filter(a).flatMap((e) => {
              let t = Da().closeSweepRows.get(e);
              return t ? [t.entry] : [];
            });
            Da().closeBatch(e);
          },
          onCancel: Yr,
          onAbort: Jr,
        });
      }),
      (e[272] = Da),
      (e[273] = Ma));
  let Na = ve(Ma),
    Pa = j !== null,
    [Fa, Ia] = (0, Z.useState)(!1),
    La = A.isOpen && Fa;
  !A.isOpen && Fa && Ia(!1);
  let Ra;
  e[274] === A.isOpen
    ? (Ra = e[275])
    : ((Ra = () => {
        A.isOpen && Ia(qr);
      }),
      (e[274] = A.isOpen),
      (e[275] = Ra));
  let za = Ra,
    Ba;
  e[276] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ba = () => Ia(!0)), (e[276] = Ba))
    : (Ba = e[276]);
  let Va = Ba,
    Ha,
    Ua;
  (e[277] !== T || e[278] !== f || e[279] !== O
    ? ((Ha = () => {
        f && O !== null && T !== null && V.getState().openPullRequest(O, T);
      }),
      (Ua = [T, f, O]),
      (e[277] = T),
      (e[278] = f),
      (e[279] = O),
      (e[280] = Ha),
      (e[281] = Ua))
    : ((Ha = e[280]), (Ua = e[281])),
    (0, Z.useEffect)(Ha, Ua));
  let Wa, Ga, Ka, qa, Ja, Ya;
  if (
    e[282] !== M ||
    e[283] !== er ||
    e[284] !== d ||
    e[285] !== c.length ||
    e[286] !== Ca ||
    e[287] !== Tn ||
    e[288] !== _a ||
    e[289] !== m ||
    e[290] !== Kn ||
    e[291] !== ya ||
    e[292] !== s ||
    e[293] !== $?.truncated ||
    e[294] !== li ||
    e[295] !== K ||
    e[296] !== nr ||
    e[297] !== Gn ||
    e[298] !== Be ||
    e[299] !== bn ||
    e[300] !== G ||
    e[301] !== p ||
    e[302] !== D ||
    e[303] !== f ||
    e[304] !== Pe ||
    e[305] !== ma ||
    e[306] !== $t ||
    e[307] !== Qi ||
    e[308] !== Pa ||
    e[309] !== La ||
    e[310] !== O ||
    e[311] !== A.isOpen ||
    e[312] !== h ||
    e[313] !== t.host ||
    e[314] !== t.involvement ||
    e[315] !== t.q ||
    e[316] !== t.state ||
    e[317] !== b ||
    e[318] !== j ||
    e[319] !== Sa ||
    e[320] !== Wn ||
    e[321] !== va ||
    e[322] !== Na ||
    e[323] !== za ||
    e[324] !== Fe.text ||
    e[325] !== Ee ||
    e[326] !== U ||
    e[327] !== H
  ) {
    let n =
        A.isOpen && M !== null
          ? {
              environmentId: M.environmentId,
              repository: M.repository,
              number: M.number,
              projectId: M.projectId,
              host:
                M.host ??
                (b?.repositoryIdentity
                  ? I(b.repositoryIdentity, b.repositoryIdentity.provider)
                  : void 0),
            }
          : null,
      r;
    (e[334] === H
      ? (r = e[335])
      : ((r = (e) =>
          H(
            e === null
              ? xe
              : {
                  repository: e.repository,
                  number: e.number,
                  selectedProjectId: e.projectId,
                  selectedHost: e.host,
                  ...(e.environmentId === void 0 ? {} : { selectedEnvironmentId: e.environmentId }),
                },
          )),
        (e[334] = H),
        (e[335] = r)),
      (Ka = r));
    let i;
    (e[336] !== O || e[337] !== A.isOpen || e[338] !== Ka || e[339] !== j || e[340] !== H
      ? ((i = () => {
          O !== null &&
            (A.isOpen
              ? (V.getState().close(O), H(xe))
              : j !== null && (V.getState().show(O), Ka(j)));
        }),
        (e[336] = O),
        (e[337] = A.isOpen),
        (e[338] = Ka),
        (e[339] = j),
        (e[340] = H),
        (e[341] = i))
      : (i = e[341]),
      (Ja = i));
    let a;
    (e[342] === li ? (a = e[343]) : ((a = new Map(li.map(Kr))), (e[342] = li), (e[343] = a)),
      (Ya = a));
    let o;
    e[344] !== O || e[345] !== H
      ? ((o = (e) => {
          O !== null &&
            (V.getState().openPullRequest(O, e),
            H({
              repository: e.repository,
              number: e.number,
              selectedProjectId: e.projectId,
              selectedEnvironmentId: e.environmentId,
              selectedHost: e.host,
            }));
        }),
        (e[344] = O),
        (e[345] = H),
        (e[346] = o))
      : (o = e[346]);
    let l = o,
      u = t.q ?? ``,
      g = Ee.length > 0 && (!Pe || Wn),
      _,
      v;
    e[347] === U
      ? ((_ = e[348]), (v = e[349]))
      : ((_ = (e) => U({ q: e || void 0 })),
        (v = (e) => U({ q: e.trim() || void 0 })),
        (e[347] = U),
        (e[348] = _),
        (e[349] = v));
    let y;
    (e[350] !== u || e[351] !== g || e[352] !== _ || e[353] !== v
      ? ((y = (0, Q.jsx)(Dn, { value: u, busy: g, onChange: _, onSubmit: v })),
        (e[350] = u),
        (e[351] = g),
        (e[352] = _),
        (e[353] = v),
        (e[354] = y))
      : (y = e[354]),
      (Ga = y));
    let x = A.isOpen,
      S;
    e[355] === s ? (S = e[356]) : ((S = Xe(s, `rightPanel.toggle`)), (e[355] = s), (e[356] = S));
    let C;
    e[357] !== Pa || e[358] !== A.isOpen || e[359] !== S || e[360] !== Ja
      ? ((C = (0, Q.jsx)(Ve, {
          showTerminalControl: !1,
          showThreadPanelControl: !1,
          terminalAvailable: !1,
          terminalOpen: !1,
          terminalShortcutLabel: null,
          threadPanelOpen: !1,
          threadPanelPresentation: `inline`,
          threadPanelShortcutLabel: null,
          onToggleThreadPanel: Gr,
          rightPanelAvailable: Pa,
          rightPanelOpen: x,
          rightPanelShortcutLabel: S,
          rightPanelUnavailableLabel: `Select a pull request first`,
          onToggleTerminal: Wr,
          onToggleRightPanel: Ja,
        })),
        (e[357] = Pa),
        (e[358] = A.isOpen),
        (e[359] = S),
        (e[360] = Ja),
        (e[361] = C))
      : (C = e[361]);
    let w = C,
      T;
    e[362] !== La || e[363] !== A.isOpen || e[364] !== za
      ? ((T = A.isOpen ? (0, Q.jsx)(Le, { maximized: La, onToggle: za }) : null),
        (e[362] = La),
        (e[363] = A.isOpen),
        (e[364] = za),
        (e[365] = T))
      : (T = e[365]);
    let E;
    (e[366] !== w || e[367] !== T
      ? ((E = (0, Q.jsxs)(`div`, {
          className: `absolute top-[var(--workspace-controls-top)] right-[var(--workspace-controls-right)] z-50 mr-px flex h-[var(--workspace-topbar-height)] items-center gap-1 [-webkit-app-region:no-drag]`,
          "data-workspace-titlebar-controls": !0,
          children: [T, w],
        })),
        (e[366] = w),
        (e[367] = T),
        (e[368] = E))
      : (E = e[368]),
      (Wa = E));
    let k = va === 0 && Ee.length === 0 && (!Pe || (Wn && K.isPending));
    ((qa = d
      ? f
        ? Kn
          ? (0, Q.jsx)(Ae, { rows: 7 })
          : K.error && va === 0
            ? (0, Q.jsx)(Ie, {
                error: K.error,
                refreshing: K.isPending,
                onRetry: () => K.refresh(),
              })
            : k
              ? (0, Q.jsx)(Ae, { rows: 7 })
              : va === 0
                ? (0, Q.jsx)(Qn, {
                    hasProjects: !D || p.length > 0,
                    refreshing: $t,
                    onRefresh: () => void ma(),
                    query: Ee,
                    filtered:
                      Be ||
                      t.state !== `open` ||
                      t.involvement !== `all` ||
                      h !== void 0 ||
                      t.host !== void 0,
                    searching: Ee.length > 0 && (!Pe || Wn),
                    canLoadMore: $?.truncated === !0 && (er || G < xr),
                    loadingMore: Gn,
                    onClearQuery: () => U({ q: void 0 }),
                    onLoadMore: nr,
                  })
                : (0, Q.jsx)(Ce, {
                    children: (0, Q.jsx)(`div`, {
                      className: se(`space-y-3`, Ca.size > 0 && `**:pointer-events-none`),
                      children: _a.map((e) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `space-y-0.5`,
                            children: [
                              e.label ? (0, Q.jsx)(hr, { group: e }) : null,
                              e.entries.map((e) => {
                                let t = rt(e);
                                return (0, Q.jsx)(
                                  ur,
                                  {
                                    statsKey: t,
                                    statsRef: Qi,
                                    entry: e,
                                    showProjectTitle: !0,
                                    showProvider: Sa,
                                    ...(c.length > 1 && m.get(e.environmentId) !== void 0
                                      ? { environmentLabel: m.get(e.environmentId) }
                                      : {}),
                                    matchedElsewhere: Fe.text.length > 0 && Ct(e, Fe.text) <= yr,
                                    selected:
                                      n?.environmentId === e.environmentId &&
                                      n.repository === e.repository &&
                                      n.host?.toLowerCase() === e.host.toLowerCase() &&
                                      n.number === e.number,
                                    onSelect: l,
                                    hostActions: ya(e),
                                    onActed: bn,
                                    closing: Tn.has(t),
                                    sweeping: Ca.has(t),
                                    onCloseSweepStart: Na,
                                  },
                                  t,
                                );
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  })
        : (0, Q.jsx)(Ie, {
            title: `Pull requests unavailable`,
            error: `Update your T3 Code servers to browse pull requests.`,
          })
      : (0, Q.jsx)(Ae, { rows: 7 })),
      (e[282] = M),
      (e[283] = er),
      (e[284] = d),
      (e[285] = c.length),
      (e[286] = Ca),
      (e[287] = Tn),
      (e[288] = _a),
      (e[289] = m),
      (e[290] = Kn),
      (e[291] = ya),
      (e[292] = s),
      (e[293] = $?.truncated),
      (e[294] = li),
      (e[295] = K),
      (e[296] = nr),
      (e[297] = Gn),
      (e[298] = Be),
      (e[299] = bn),
      (e[300] = G),
      (e[301] = p),
      (e[302] = D),
      (e[303] = f),
      (e[304] = Pe),
      (e[305] = ma),
      (e[306] = $t),
      (e[307] = Qi),
      (e[308] = Pa),
      (e[309] = La),
      (e[310] = O),
      (e[311] = A.isOpen),
      (e[312] = h),
      (e[313] = t.host),
      (e[314] = t.involvement),
      (e[315] = t.q),
      (e[316] = t.state),
      (e[317] = b),
      (e[318] = j),
      (e[319] = Sa),
      (e[320] = Wn),
      (e[321] = va),
      (e[322] = Na),
      (e[323] = za),
      (e[324] = Fe.text),
      (e[325] = Ee),
      (e[326] = U),
      (e[327] = H),
      (e[328] = Wa),
      (e[329] = Ga),
      (e[330] = Ka),
      (e[331] = qa),
      (e[332] = Ja),
      (e[333] = Ya));
  } else ((Wa = e[328]), (Ga = e[329]), (Ka = e[330]), (qa = e[331]), (Ja = e[332]), (Ya = e[333]));
  let Xa;
  e[369] !== K || e[370] !== va
    ? ((Xa =
        K.error && va > 0
          ? (0, Q.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3 rounded-lg border border-warning/30 bg-warning-surface px-3 py-2 text-xs`,
              children: [
                (0, Q.jsxs)(`span`, {
                  children: [K.error, ` Showing the last pull requests loaded.`],
                }),
                (0, Q.jsx)(C, {
                  size: `xs`,
                  variant: `outline`,
                  onClick: () => K.refresh(),
                  children: `Retry`,
                }),
              ],
            })
          : null),
      (e[369] = K),
      (e[370] = va),
      (e[371] = Xa))
    : (Xa = e[371]);
  let Za;
  e[372] !== er ||
  e[373] !== Di ||
  e[374] !== $?.truncated ||
  e[375] !== K.isPending ||
  e[376] !== nr ||
  e[377] !== Gn ||
  e[378] !== G ||
  e[379] !== ft ||
  e[380] !== Wn
    ? ((Za =
        $?.truncated && Di.length > 0
          ? (0, Q.jsx)(`div`, {
              className: `flex justify-center py-3 text-xs text-muted-foreground`,
              children: Gn
                ? (0, Q.jsxs)(`span`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(re, { "aria-hidden": !0, size: `sm` }),
                      ft === null ? `Updating pull requests` : `Loading more`,
                    ],
                  })
                : er || G < xr
                  ? (0, Q.jsx)(C, {
                      size: `sm`,
                      variant: `outline`,
                      onClick: nr,
                      disabled: K.isPending || Wn,
                      children: `Load more pull requests`,
                    })
                  : (0, Q.jsx)(`span`, {
                      children: `Narrow your search to find more pull requests.`,
                    }),
            })
          : null),
      (e[372] = er),
      (e[373] = Di),
      (e[374] = $?.truncated),
      (e[375] = K.isPending),
      (e[376] = nr),
      (e[377] = Gn),
      (e[378] = G),
      (e[379] = ft),
      (e[380] = Wn),
      (e[381] = Za))
    : (Za = e[381]);
  let Qa;
  e[382] !== qa || e[383] !== Xa || e[384] !== Za
    ? ((Qa = (0, Q.jsxs)(Q.Fragment, { children: [qa, Xa, Za] })),
      (e[382] = qa),
      (e[383] = Xa),
      (e[384] = Za),
      (e[385] = Qa))
    : (Qa = e[385]);
  let $a = Qa,
    eo = ga.length > 0 ? ga : E,
    to;
  e[386] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((to = { value: ``, label: `All`, Icon: y }), (e[386] = to))
    : (to = e[386]);
  let no;
  e[387] !== eo || e[388] !== ga
    ? ((no = [
        to,
        ...eo.map((e) => {
          let t = ga.find((t) => t.host === e.host);
          return {
            value: e.host,
            label: En(eo, e),
            Icon: Yt(e.kind).Icon,
            ...(t === void 0 || t.configured
              ? {}
              : { unavailable: t.detail ?? `This host could not be read.` }),
          };
        }),
      ]),
      (e[387] = eo),
      (e[388] = ga),
      (e[389] = no))
    : (no = e[389]);
  let ro = no,
    io;
  e[390] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((io = { value: ``, label: `All servers`, Icon: _ }), (e[390] = io))
    : (io = e[390]);
  let ao;
  e[391] === c ? (ao = e[392]) : ((ao = [io, ...c.map(Ur)]), (e[391] = c), (e[392] = ao));
  let oo = ao,
    so;
  e[393] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((so = (0, Q.jsx)(o, { "aria-hidden": !0, className: `size-4` })), (e[393] = so))
    : (so = e[393]);
  let co;
  e[394] === U ? (co = e[395]) : ((co = (e) => U({ sort: e })), (e[394] = U), (e[395] = co));
  let lo;
  e[396] !== n || e[397] !== co
    ? ((lo = (0, Q.jsx)(Ei, {
        label: `Sort pull requests`,
        triggerIcon: so,
        triggerLabel: `Sort`,
        outlined: !0,
        value: n,
        options: Gt,
        onChange: co,
      })),
      (e[396] = n),
      (e[397] = co),
      (e[398] = lo))
    : (lo = e[398]);
  let uo = lo,
    fo;
  if (e[399] !== S || e[400] !== h || e[401] !== t.host) {
    let n;
    (e[403] !== h || e[404] !== t.host
      ? ((n = (e) => {
          let { environmentId: n, projectIds: r } = e;
          return {
            environmentId: n,
            input: {
              ...(h ? { projectId: h } : {}),
              ...(r ? { projectIds: r } : {}),
              ...(t.host ? { host: t.host } : {}),
            },
          };
        }),
        (e[403] = h),
        (e[404] = t.host),
        (e[405] = n))
      : (n = e[405]),
      (fo = S.map(n)),
      (e[399] = S),
      (e[400] = h),
      (e[401] = t.host),
      (e[402] = fo));
  } else fo = e[402];
  let po = fo,
    mo;
  e[406] === U ? (mo = e[407]) : ((mo = (e) => U({ state: e })), (e[406] = U), (e[407] = mo));
  let ho;
  e[408] === U ? (ho = e[409]) : ((ho = (e) => U({ involvement: e })), (e[408] = U), (e[409] = ho));
  let go;
  e[410] !== ze || e[411] !== Fe.filters.draft
    ? ((go = Fe.filters.draft ? { ...ze, draft: Fe.filters.draft } : ze),
      (e[410] = ze),
      (e[411] = Fe.filters.draft),
      (e[412] = go))
    : (go = e[412]);
  let _o;
  e[413] !== ze || e[414] !== Ee || e[415] !== U
    ? ((_o = (e) => {
        let { query: t, filters: n } = Sn(Ee, ze, e);
        U({
          ...(t === Ee ? {} : { q: t || void 0 }),
          draft: n.draft,
          review: n.review,
          checks: n.checks,
          author: n.author,
          labels: n.labels?.flatMap(Hr),
        });
      }),
      (e[413] = ze),
      (e[414] = Ee),
      (e[415] = U),
      (e[416] = _o))
    : (_o = e[416]);
  let vo;
  e[417] === U ? (vo = e[418]) : ((vo = (e) => U({ host: e })), (e[417] = U), (e[418] = vo));
  let yo = l ?? void 0,
    bo;
  e[419] === U
    ? (bo = e[420])
    : ((bo = (e) => U({ environmentId: e, projectId: void 0 })), (e[419] = U), (e[420] = bo));
  let xo = g?.environmentId,
    So;
  e[421] === U
    ? (So = e[422])
    : ((So = (e, t) => U(t === void 0 ? { projectId: e } : { projectId: e, environmentId: t })),
      (e[421] = U),
      (e[422] = So));
  let Co;
  e[423] !== pi.authors ||
  e[424] !== pi.labels ||
  e[425] !== po ||
  e[426] !== ro ||
  e[427] !== h ||
  e[428] !== v ||
  e[429] !== t.host ||
  e[430] !== t.involvement ||
  e[431] !== t.state ||
  e[432] !== oo ||
  e[433] !== bo ||
  e[434] !== xo ||
  e[435] !== So ||
  e[436] !== mo ||
  e[437] !== ho ||
  e[438] !== go ||
  e[439] !== _o ||
  e[440] !== vo ||
  e[441] !== yo ||
  e[442] !== Ya
    ? ((Co = (0, Q.jsx)(Ti, {
        onOpenChange: je,
        optionScope: po,
        state: t.state,
        stateOptions: _r,
        onState: mo,
        involvement: t.involvement,
        involvementOptions: gr,
        onInvolvement: ho,
        filters: go,
        onFilters: _o,
        authorOptions: pi.authors,
        labelOptions: pi.labels,
        host: t.host,
        hostOptions: ro,
        onHost: vo,
        server: yo,
        serverOptions: oo,
        onServer: bo,
        projects: v,
        projectId: h,
        projectEnvironmentId: xo,
        unavailable: Ya,
        onProject: So,
      })),
      (e[423] = pi.authors),
      (e[424] = pi.labels),
      (e[425] = po),
      (e[426] = ro),
      (e[427] = h),
      (e[428] = v),
      (e[429] = t.host),
      (e[430] = t.involvement),
      (e[431] = t.state),
      (e[432] = oo),
      (e[433] = bo),
      (e[434] = xo),
      (e[435] = So),
      (e[436] = mo),
      (e[437] = ho),
      (e[438] = go),
      (e[439] = _o),
      (e[440] = vo),
      (e[441] = yo),
      (e[442] = Ya),
      (e[443] = Co))
    : (Co = e[443]);
  let wo = Co,
    To;
  e[444] === ma ? (To = e[445]) : ((To = () => void ma()), (e[444] = ma), (e[445] = To));
  let Eo = t.q ?? ``,
    Do,
    Oo,
    ko;
  e[446] === U
    ? ((Do = e[447]), (Oo = e[448]), (ko = e[449]))
    : ((Do = (e) => U({ involvement: e })),
      (Oo = (e) => U({ state: e })),
      (ko = (e) => U({ host: e })),
      (e[446] = U),
      (e[447] = Do),
      (e[448] = Oo),
      (e[449] = ko));
  let Ao;
  e[450] !== oe || e[451] !== ae || e[452] !== f || e[453] !== A.isOpen
    ? ((Ao = f
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": !0,
            className: se(
              `shrink-0`,
              A.isOpen ? `-ml-3 w-0` : `w-7 sm:w-5`,
              ae && `transition-[width,margin] ease-out`,
            ),
            style: ae ? { transitionDuration: `${oe}ms` } : void 0,
          })
        : null),
      (e[450] = oe),
      (e[451] = ae),
      (e[452] = f),
      (e[453] = A.isOpen),
      (e[454] = Ao))
    : (Ao = e[454]);
  let jo;
  e[455] !== Wa || e[456] !== f || e[457] !== L
    ? ((jo = f
        ? L
          ? (0, Q.jsx)(`span`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-y-0 left-full w-7 [-webkit-app-region:no-drag]`,
            })
          : Wa
        : null),
      (e[455] = Wa),
      (e[456] = f),
      (e[457] = L),
      (e[458] = jo))
    : (jo = e[458]);
  let Mo;
  e[459] !== wo ||
  e[460] !== ro ||
  e[461] !== $a ||
  e[462] !== $t ||
  e[463] !== La ||
  e[464] !== A.isOpen ||
  e[465] !== t.host ||
  e[466] !== t.involvement ||
  e[467] !== t.state ||
  e[468] !== Ga ||
  e[469] !== uo ||
  e[470] !== To ||
  e[471] !== Eo ||
  e[472] !== Do ||
  e[473] !== Oo ||
  e[474] !== ko ||
  e[475] !== Ao ||
  e[476] !== jo
    ? ((Mo = {
        refreshing: $t,
        onRefresh: To,
        searchValue: Eo,
        involvement: t.involvement,
        state: t.state,
        host: t.host,
        hostMenuOptions: ro,
        onInvolvement: Do,
        onState: Oo,
        onHost: ko,
        searchInput: Ga,
        sortMenu: uo,
        filtersMenu: wo,
        rightPanelControl: Ao,
        titlebarControls: jo,
        rightPanelOpen: A.isOpen,
        maximizedAway: La,
        listBody: $a,
        scrollRef: mi,
      }),
      (e[459] = wo),
      (e[460] = ro),
      (e[461] = $a),
      (e[462] = $t),
      (e[463] = La),
      (e[464] = A.isOpen),
      (e[465] = t.host),
      (e[466] = t.involvement),
      (e[467] = t.state),
      (e[468] = Ga),
      (e[469] = uo),
      (e[470] = To),
      (e[471] = Eo),
      (e[472] = Do),
      (e[473] = Oo),
      (e[474] = ko),
      (e[475] = Ao),
      (e[476] = jo),
      (e[477] = Mo))
    : (Mo = e[477]);
  let No = Mo,
    Po;
  e[478] !== O || e[479] !== Ka
    ? ((Po = (e) => {
        O !== null && (V.getState().activateSurface(O, e.id), Ka(e));
      }),
      (e[478] = O),
      (e[479] = Ka),
      (e[480] = Po))
    : (Po = e[480]);
  let Fo = Po,
    Io;
  e[481] !== O || e[482] !== Ka
    ? ((Io = (e) => {
        if (O === null) return;
        V.getState().closeSurface(O, e.id);
        let t = fe(V.getState().byThreadKey, O);
        Ka(t?.kind === `pull-request` ? t : null);
      }),
      (e[481] = O),
      (e[482] = Ka),
      (e[483] = Io))
    : (Io = e[483]);
  let Lo = Io,
    Ro;
  e[484] !== O || e[485] !== Ka
    ? ((Ro = (e) => {
        O !== null && (V.getState().closeOtherSurfaces(O, e.id), Ka(e));
      }),
      (e[484] = O),
      (e[485] = Ka),
      (e[486] = Ro))
    : (Ro = e[486]);
  let zo = Ro,
    Bo;
  e[487] !== O || e[488] !== Ka
    ? ((Bo = (e) => {
        if (O === null) return;
        V.getState().closeSurfacesToRight(O, e.id);
        let t = fe(V.getState().byThreadKey, O);
        Ka(t?.kind === `pull-request` ? t : null);
      }),
      (e[487] = O),
      (e[488] = Ka),
      (e[489] = Bo))
    : (Bo = e[489]);
  let Vo = Bo,
    Ho;
  e[490] !== O || e[491] !== Ka
    ? ((Ho = () => {
        O !== null && (V.getState().closeAllSurfaces(O), Ka(null));
      }),
      (e[490] = O),
      (e[491] = Ka),
      (e[492] = Ho))
    : (Ho = e[492]);
  let Uo = Ho,
    Wo;
  e[493] === k
    ? (Wo = e[494])
    : ((Wo = (e) => {
        if (!k || (e.preventDefault(), e.stopPropagation(), e.repeat)) return;
        let t = k;
        ge(t, `pull request link`).then((e) => {
          e && _e.add({ type: `success`, title: `PR link copied`, description: t });
        }, Vr);
      }),
      (e[493] = k),
      (e[494] = Wo));
  let Go = (0, Z.useEffectEvent)(Wo),
    Ko;
  e[495] !== M || e[496] !== Lo
    ? ((Ko = (e) => {
        M !== null && (e.preventDefault(), e.stopPropagation(), e.repeat || Lo(M));
      }),
      (e[495] = M),
      (e[496] = Lo),
      (e[497] = Ko))
    : (Ko = e[497]);
  let qo = (0, Z.useEffectEvent)(Ko),
    Jo;
  e[498] !== Pa || e[499] !== Ja
    ? ((Jo = (e) => {
        Pa && (e.preventDefault(), e.stopPropagation(), e.repeat || Ja());
      }),
      (e[498] = Pa),
      (e[499] = Ja),
      (e[500] = Jo))
    : (Jo = e[500]);
  let Yo = (0, Z.useEffectEvent)(Jo),
    Xo;
  e[501] !== A.isOpen || e[502] !== za
    ? ((Xo = (e) => {
        A.isOpen && (e.preventDefault(), e.stopPropagation(), e.repeat || za());
      }),
      (e[501] = A.isOpen),
      (e[502] = za),
      (e[503] = Xo))
    : (Xo = e[503]);
  let Zo = (0, Z.useEffectEvent)(Xo),
    Qo;
  e[504] !== qo || e[505] !== Go || e[506] !== s || e[507] !== Yo || e[508] !== Zo
    ? ((Qo = () => {
        let e = (e) => {
          if (e.defaultPrevented || on()) return;
          let t = Ye(e, s, { context: pr() });
          (t === `rightPanel.close` && qo(e),
            t === `rightPanel.toggle` && Yo(e),
            t === `rightPanel.toggleMaximized` && Zo(e),
            t === `thread.copyReference` && Go(e));
        };
        return (
          document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e)
        );
      }),
      (e[504] = qo),
      (e[505] = Go),
      (e[506] = s),
      (e[507] = Yo),
      (e[508] = Zo),
      (e[509] = Qo))
    : (Qo = e[509]);
  let $o;
  (e[510] === s ? ($o = e[511]) : (($o = [s]), (e[510] = s), (e[511] = $o)),
    (0, Z.useEffect)(Qo, $o));
  let es = f && L ? Wa : null,
    ts;
  e[512] === No ? (ts = e[513]) : ((ts = (0, Q.jsx)(ki, { ...No })), (e[512] = No), (e[513] = ts));
  let ns;
  e[514] !== Fo ||
  e[515] !== M?.id ||
  e[516] !== Uo ||
  e[517] !== zo ||
  e[518] !== Lo ||
  e[519] !== Vo ||
  e[520] !== Wt ||
  e[521] !== Mi ||
  e[522] !== s ||
  e[523] !== Oi ||
  e[524] !== xa ||
  e[525] !== B ||
  e[526] !== fa ||
  e[527] !== R ||
  e[528] !== ce ||
  e[529] !== La ||
  e[530] !== L ||
  e[531] !== O ||
  e[532] !== A.isOpen ||
  e[533] !== H
    ? ((ns =
        L && R && B !== null
          ? (0, Q.jsx)(ke, {
              mode: `inline`,
              open: A.isOpen,
              maximized: La,
              keybindings: s,
              getShortcutContext: pr,
              widthStorageKey: `t3code:pull-request-panel-width`,
              defaultWidth: typeof window > `u` ? 640 : Math.floor(window.innerWidth / 2),
              surfaces: ce,
              environmentId: B,
              activeSurfaceId: R.id,
              pendingSurfaceIds: Or,
              previewSessions: Tr,
              desktopByTabId: Er,
              terminalLabelsById: Dr,
              onActivate: (e) => {
                e.kind === `pull-request` && Fo(e);
              },
              onCloseSurface: (e) => {
                e.kind === `pull-request` && Lo(e);
              },
              onCloseOtherSurfaces: (e) => {
                e.kind === `pull-request` && zo(e);
              },
              onCloseSurfacesToRight: (e) => {
                e.kind === `pull-request` && Vo(e);
              },
              onCloseAllSurfaces: Uo,
              onMoveSurface: (e, t) => {
                O !== null && V.getState().moveSurface(O, e, t);
              },
              onCopyFilePath: Br,
              onAddBrowser: zr,
              onAddBrowserInProfile: Rr,
              onAddTerminal: Lr,
              onAddDiff: Ir,
              onAddFiles: Fr,
              onAddPullRequest: Pr,
              onAddPullRequests: Nr,
              onAddDevice: Mr,
              onAddGitGraph: jr,
              browserAvailable: !1,
              terminalAvailable: !1,
              diffAvailable: !1,
              filesAvailable: !1,
              pullRequestAvailable: !1,
              pullRequestsAvailable: !1,
              deviceAvailable: !1,
              gitGraphAvailable: !1,
              pullRequestStatusSeeds: Oi,
              children: (0, Q.jsx)(
                Ne,
                {
                  getShortcutContext: pr,
                  shortcutsEnabled: M?.id === R.id,
                  environmentId: B,
                  onGuideShown: Va,
                  onSelectPullRequest: (e) => {
                    O !== null &&
                      (V.getState().openPullRequest(O, {
                        projectId: e.projectId,
                        repository: e.repository,
                        number: e.number,
                        ...(e.host ? { host: e.host } : {}),
                        environmentId: B,
                      }),
                      H({
                        repository: e.repository,
                        number: e.number,
                        selectedHost: e.host,
                        selectedProjectId: e.projectId,
                        selectedEnvironmentId: B,
                      }));
                  },
                  reference: {
                    projectId: R.projectId,
                    repository: R.repository,
                    number: R.number,
                    ...(R.host ? { host: R.host } : {}),
                  },
                  listEntry: xa.get(kr(R)) ?? null,
                  refreshToken: Wt,
                  onActed: (e, t) => {
                    let n = t === void 0 ? `done` : t,
                      r = Mi.get(kr(R));
                    if (e !== void 0 && r !== void 0 && ct(r, e, new Date(), 0) !== null) {
                      let t = rt(r);
                      (n === `sent` && e !== `merge` && vn.current.set(t, mn(r, e)),
                        n === `failed` && e !== `merge` && gn(t, vn.current.get(t) ?? null),
                        n !== `sent` && vn.current.delete(t),
                        n === `done` && e === `merge` && (mn(r, e), fa(void 0, B)));
                    } else n === `done` && fa(void 0, B);
                  },
                },
                R.id,
              ),
            })
          : null),
      (e[514] = Fo),
      (e[515] = M?.id),
      (e[516] = Uo),
      (e[517] = zo),
      (e[518] = Lo),
      (e[519] = Vo),
      (e[520] = Wt),
      (e[521] = Mi),
      (e[522] = s),
      (e[523] = Oi),
      (e[524] = xa),
      (e[525] = B),
      (e[526] = fa),
      (e[527] = R),
      (e[528] = ce),
      (e[529] = La),
      (e[530] = L),
      (e[531] = O),
      (e[532] = A.isOpen),
      (e[533] = H),
      (e[534] = ns))
    : (ns = e[534]);
  let rs;
  return (
    e[535] !== es || e[536] !== ts || e[537] !== ns
      ? ((rs = (0, Q.jsx)(nn, {
          className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
          children: (0, Q.jsxs)(`div`, {
            className: `relative flex min-h-0 flex-1`,
            children: [es, ts, ns],
          }),
        })),
        (e[535] = es),
        (e[536] = ts),
        (e[537] = ns),
        (e[538] = rs))
      : (rs = e[538]),
    rs
  );
}
function jr() {}
function Mr() {}
function Nr() {}
function Pr() {}
function Fr() {}
function Ir() {}
function Lr() {}
function Rr() {}
function zr() {}
function Br() {}
function Vr(e) {
  _e.add({
    type: `error`,
    title: `Failed to copy PR link`,
    description: e instanceof Error ? e.message : `An error occurred.`,
  });
}
function Hr(e) {
  return e;
}
function Ur(e) {
  return { value: e.environmentId, label: e.label, Icon: Ht(j(e.serverConfig)) };
}
function Wr() {}
function Gr() {}
function Kr(e) {
  return [Mn({ id: e.projectId, environmentId: e.environmentId }), e.message];
}
function qr(e) {
  return !e;
}
function Jr() {}
function Yr() {}
function Xr() {}
function Zr() {}
function Qr(e) {
  return e.entries.map(rt);
}
function $r() {
  return new Set();
}
function ei(e) {
  return e + 1;
}
function ti(e) {
  let { environmentId: t, input: n } = e;
  return { environmentId: t, input: n };
}
function ni(e) {
  let { environmentId: t, input: n } = e;
  return { environmentId: t, input: n };
}
function ri() {
  return new Map();
}
function ii(e, t) {
  return t.updatedAt.localeCompare(e.updatedAt);
}
function ai() {
  return new Map();
}
function oi(e) {
  let [t, n] = e;
  return `${t}:${n}`;
}
function si(e) {
  let { environmentId: t } = e;
  return t;
}
function ci(e) {
  let t = (0, X.c)(47),
    { environments: n } = le(),
    r = ce(),
    i = B(),
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b;
  if (
    t[0] !== r ||
    t[1] !== n ||
    t[2] !== i ||
    t[3] !== e.environmentId ||
    t[4] !== e.host ||
    t[5] !== e.number ||
    t[6] !== e.projectId ||
    t[7] !== e.repository ||
    t[8] !== e.selectedEnvironmentId ||
    t[9] !== e.selectedHost ||
    t[10] !== e.selectedProjectId
  ) {
    ((s = n.filter(gi).toSorted(hi)),
      (h = s.find((t) => t.environmentId === e.environmentId)?.environmentId ?? null));
    let x = new Set(n.map(mi)),
      S = s.filter((e) => h === null || e.environmentId === h).map(pi);
    c = nt(S);
    let C;
    (t[27] === n ? (C = t[28]) : ((C = n.some(fi)), (t[27] = n), (t[28] = C)),
      (o = C),
      (p = S.length > 0),
      (f = r.filter((e) => !e.isScratch && S.includes(e.environmentId))),
      (l = new Map(n.map(di))),
      (_ = St(e.projectId, f, i)),
      (g = tt(f, h, _)),
      (v = wn(f, l, g)));
    let w = e.selectedHost ?? e.host,
      T = Et(e.selectedEnvironmentId, x, h),
      E =
        e.repository === void 0
          ? void 0
          : $e(f, {
              repository: e.repository,
              host: w,
              selectedEnvironmentId: T,
              scopedProjectId: _,
              scopedEnvironmentId: h,
            }),
      D = St(e.selectedProjectId, f, i);
    ((y = D === void 0 && e.repository !== void 0 ? E : tt(f, T, D ?? _)), (m = gt(S, f, g, _, i)));
    let O;
    bb0: {
      let e = m.map(ui);
      if (!i || _ !== void 0) {
        O = e;
        break bb0;
      }
      let t = we(f, m, m[0]),
        n = new Map();
      for (let e of f) n.set(e.environmentId, (n.get(e.environmentId) ?? 0) + 1);
      O = m.flatMap((e) => {
        let r = t.get(e);
        return r === void 0
          ? []
          : r.length === (n.get(e) ?? 0)
            ? [{ environmentId: e }]
            : [{ environmentId: e, projectIds: r }];
      });
    }
    ((u = O),
      (a = u.map(li).join(`|`)),
      (d =
        e.repository && e.number && y
          ? {
              environmentId: y.environmentId,
              repository: e.repository,
              number: e.number,
              projectId: y.id,
              ...(w ? { host: w } : {}),
            }
          : null));
    let k = new Map();
    for (let e of f) {
      let t = e.repositoryIdentity?.provider;
      if (t === void 0) continue;
      let n = I(e.repositoryIdentity, t);
      k.has(n) || k.set(n, { host: n, kind: t });
    }
    ((b = [...k.values()]),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = e.environmentId),
      (t[4] = e.host),
      (t[5] = e.number),
      (t[6] = e.projectId),
      (t[7] = e.repository),
      (t[8] = e.selectedEnvironmentId),
      (t[9] = e.selectedHost),
      (t[10] = e.selectedProjectId),
      (t[11] = a),
      (t[12] = o),
      (t[13] = s),
      (t[14] = c),
      (t[15] = l),
      (t[16] = u),
      (t[17] = d),
      (t[18] = f),
      (t[19] = p),
      (t[20] = m),
      (t[21] = h),
      (t[22] = g),
      (t[23] = _),
      (t[24] = v),
      (t[25] = y),
      (t[26] = b));
  } else
    ((a = t[11]),
      (o = t[12]),
      (s = t[13]),
      (c = t[14]),
      (l = t[15]),
      (u = t[16]),
      (d = t[17]),
      (f = t[18]),
      (p = t[19]),
      (m = t[20]),
      (h = t[21]),
      (g = t[22]),
      (_ = t[23]),
      (v = t[24]),
      (y = t[25]),
      (b = t[26]));
  let x = b,
    S;
  return (
    t[29] !== a ||
    t[30] !== o ||
    t[31] !== s ||
    t[32] !== c ||
    t[33] !== l ||
    t[34] !== u ||
    t[35] !== x ||
    t[36] !== d ||
    t[37] !== f ||
    t[38] !== i ||
    t[39] !== p ||
    t[40] !== m ||
    t[41] !== h ||
    t[42] !== g ||
    t[43] !== _ ||
    t[44] !== v ||
    t[45] !== y
      ? ((S = {
          capableEnvironments: s,
          scopedEnvironmentId: h,
          environmentKey: c,
          capabilityKnown: o,
          pullRequestsSupported: p,
          projects: f,
          environmentLabels: l,
          scopedProjectId: _,
          scopedProject: g,
          scopedProjects: v,
          selectedProject: y,
          queryEnvironmentIds: m,
          environmentQueries: u,
          assignmentKey: a,
          linkedSelection: d,
          expectedHosts: x,
          projectsKnown: i,
        }),
        (t[29] = a),
        (t[30] = o),
        (t[31] = s),
        (t[32] = c),
        (t[33] = l),
        (t[34] = u),
        (t[35] = x),
        (t[36] = d),
        (t[37] = f),
        (t[38] = i),
        (t[39] = p),
        (t[40] = m),
        (t[41] = h),
        (t[42] = g),
        (t[43] = _),
        (t[44] = v),
        (t[45] = y),
        (t[46] = S))
      : (S = t[46]),
    S
  );
}
function li(e) {
  let { environmentId: t, projectIds: n } = e;
  return `${t}#${n?.join(`+`) ?? `*`}`;
}
function ui(e) {
  return { environmentId: e };
}
function di(e) {
  return [e.environmentId, e.label];
}
function fi(e) {
  return e.serverConfig !== null;
}
function pi(e) {
  return e.environmentId;
}
function mi(e) {
  return e.environmentId;
}
function hi(e, t) {
  return e.environmentId.localeCompare(t.environmentId);
}
function gi(e) {
  return e.serverConfig?.environment.capabilities.pullRequests === !0;
}
function _i(e, t) {
  let n = (0, X.c)(43),
    r = Se(t, vr),
    i;
  n[0] === t ? (i = n[1]) : ((i = xn(t)), (n[0] = t), (n[1] = i));
  let a = i,
    o;
  n[2] === r ? (o = n[3]) : ((o = xn(r)), (n[2] = r), (n[3] = o));
  let s = o,
    c;
  n[4] === e.draft
    ? (c = n[5])
    : ((c = e.draft ? { draft: e.draft } : {}), (n[4] = e.draft), (n[5] = c));
  let l;
  n[6] === e.review
    ? (l = n[7])
    : ((l = e.review ? { review: e.review } : {}), (n[6] = e.review), (n[7] = l));
  let u;
  n[8] === e.checks
    ? (u = n[9])
    : ((u = e.checks ? { checks: e.checks } : {}), (n[8] = e.checks), (n[9] = u));
  let d;
  n[10] === e.author
    ? (d = n[11])
    : ((d = e.author ? { author: e.author } : {}), (n[10] = e.author), (n[11] = d));
  let f;
  n[12] === e.labels
    ? (f = n[13])
    : ((f = e.labels ? { labels: e.labels.map(vi) } : {}), (n[12] = e.labels), (n[13] = f));
  let p;
  n[14] !== c || n[15] !== l || n[16] !== u || n[17] !== d || n[18] !== f
    ? ((p = { ...c, ...l, ...u, ...d, ...f }),
      (n[14] = c),
      (n[15] = l),
      (n[16] = u),
      (n[17] = d),
      (n[18] = f),
      (n[19] = p))
    : (p = n[19]);
  let m = p,
    h;
  n[20] === m ? (h = n[21]) : ((h = Object.keys(m)), (n[20] = m), (n[21] = h));
  let g = h.length > 0,
    _;
  n[22] !== m || n[23] !== s.filters
    ? ((_ = { ...m, ...s.filters }), (n[22] = m), (n[23] = s.filters), (n[24] = _))
    : (_ = n[24]);
  let v = _,
    y;
  n[25] === v ? (y = n[26]) : ((y = Object.keys(v)), (n[25] = v), (n[26] = y));
  let b = y.length > 0,
    x;
  n[27] !== m || n[28] !== a.filters
    ? ((x = { ...m, ...a.filters }), (n[27] = m), (n[28] = a.filters), (n[29] = x))
    : (x = n[29]);
  let S = x,
    C;
  n[30] === S ? (C = n[31]) : ((C = Object.keys(S)), (n[30] = S), (n[31] = C));
  let w = C.length > 0,
    T = t === r,
    E;
  return (
    n[32] !== v ||
    n[33] !== b ||
    n[34] !== w ||
    n[35] !== S ||
    n[36] !== g ||
    n[37] !== m ||
    n[38] !== s ||
    n[39] !== r ||
    n[40] !== T ||
    n[41] !== a
      ? ((E = {
          sentQuery: r,
          querySettled: T,
          typedParsed: a,
          sentParsed: s,
          menuFilters: m,
          menuFiltered: g,
          filters: v,
          hasFilters: b,
          localFilters: S,
          hasLocalFilters: w,
        }),
        (n[32] = v),
        (n[33] = b),
        (n[34] = w),
        (n[35] = S),
        (n[36] = g),
        (n[37] = m),
        (n[38] = s),
        (n[39] = r),
        (n[40] = T),
        (n[41] = a),
        (n[42] = E))
      : (E = n[42]),
    E
  );
}
function vi(e) {
  return [e];
}
function yi({
  known: e,
  providers: t,
  viewers: n,
  involvement: r,
  localFilters: i,
  hasLocalFilters: a,
  text: o,
  answeredLocally: s,
  baselineEmpty: c,
  held: l,
  authored: u,
  reviewing: d,
  partitionsWanted: f,
}) {
  let p = new Set(t.flatMap((e) => (e.searchesOnHost ? [e.host] : []))),
    m = (() => {
      let t = st(e, n, r),
        c = a ? t.filter((e) => Lt(e, i, Ot(e, n))) : t;
      return o.length === 0
        ? c.toSorted((e, t) => t.updatedAt.localeCompare(e.updatedAt))
        : c.filter((e) => (s && p.has(e.host)) || Qe(e, o));
    })(),
    h = Object.fromEntries(m.map((e) => [H(e), { state: e.state, isDraft: e.isDraft }])),
    g = (() => {
      if (r !== `all`) return [{ key: `others`, label: ``, entries: m }];
      if (c) return it(m, n);
      let e = (e) => (e === void 0 || !a ? e : e.filter((e) => Lt(e, i, Ot(e, n)))),
        t = e(f ? (u ?? l?.authored) : void 0),
        o = e(f ? (d ?? l?.reviewing) : void 0);
      return t === void 0 || o === void 0 ? it(m, n) : ut(m, t, o);
    })();
  return {
    entries: m,
    listedPullRequestTabStatuses: h,
    groups: g,
    entriesByStatsKey: new Map(g.flatMap((e) => e.entries.map((e) => [rt(e), e]))),
    heldPullRequestsBySurface: new Map(g.flatMap((e) => e.entries.map((e) => [kr(e), e]))),
  };
}
function bi(e) {
  let t = (0, X.c)(35),
    {
      answered: n,
      host: r,
      groups: i,
      statsByRow: a,
      overrides: o,
      state: s,
      localFilters: c,
      hasLocalFilters: l,
      viewers: u,
      sort: d,
      text: f,
      involvement: p,
    } = e,
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { source: null, host: void 0, hosts: [] }), (t[0] = m))
    : (m = t[0]);
  let [h, g] = (0, Z.useState)(m);
  n !== null &&
    (h.source !== n || h.host !== r) &&
    g({ source: n, host: r, hosts: r === void 0 || h.hosts.length === 0 ? n.providers : h.hosts });
  let _ = h.hosts,
    v,
    y,
    b,
    x,
    S;
  if (
    t[1] !== i ||
    t[2] !== l ||
    t[3] !== _ ||
    t[4] !== p ||
    t[5] !== c ||
    t[6] !== o ||
    t[7] !== d ||
    t[8] !== s ||
    t[9] !== a ||
    t[10] !== f ||
    t[11] !== u
  ) {
    let e;
    t[17] !== l || t[18] !== c || t[19] !== o || t[20] !== s || t[21] !== a || t[22] !== u
      ? ((e = (e) => {
          let t = at(
            e.entries.map((e) => Dt(e, a)),
            o,
            rt,
            s,
          );
          return {
            ...e,
            entries: l && o.size > 0 ? t.filter((e) => !o.has(rt(e)) || Lt(e, c, Ot(e, u))) : t,
          };
        }),
        (t[17] = l),
        (t[18] = c),
        (t[19] = o),
        (t[20] = s),
        (t[21] = a),
        (t[22] = u),
        (t[23] = e))
      : (e = t[23]);
    let n = i.map(e),
      r;
    (t[24] === a
      ? (r = t[25])
      : ((r = (e) => e.additions + e.deletions > 0 || a.has(W(e))), (t[24] = a), (t[25] = r)),
      (y = xt(n, d, f, r, p)),
      (x = y.reduce(wi, 0)));
    let m;
    (t[26] === _ ? (m = t[27]) : ((m = pt(_)), (t[26] = _), (t[27] = m)),
      (b = m),
      (v = new Map(y.flatMap(Ci))),
      (S = new Map(y.flatMap(xi))),
      (t[1] = i),
      (t[2] = l),
      (t[3] = _),
      (t[4] = p),
      (t[5] = c),
      (t[6] = o),
      (t[7] = d),
      (t[8] = s),
      (t[9] = a),
      (t[10] = f),
      (t[11] = u),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S));
  } else ((v = t[12]), (y = t[13]), (b = t[14]), (x = t[15]), (S = t[16]));
  let C = S,
    w;
  return (
    t[28] !== v || t[29] !== y || t[30] !== b || t[31] !== _ || t[32] !== C || t[33] !== x
      ? ((w = {
          hosts: _,
          displayGroups: y,
          shownCount: x,
          hostActionsOf: b,
          closeSweepRows: v,
          listedPullRequestsBySurface: C,
        }),
        (t[28] = v),
        (t[29] = y),
        (t[30] = b),
        (t[31] = _),
        (t[32] = C),
        (t[33] = x),
        (t[34] = w))
      : (w = t[34]),
    w
  );
}
function xi(e) {
  return e.entries.map(Si);
}
function Si(e) {
  return [kr(e), e];
}
function Ci(e) {
  return e.entries.map((t) => [rt(t), { entry: t, groupKey: e.key }]);
}
function wi(e, t) {
  return e + t.entries.length;
}
function Ti(e) {
  let t = (0, X.c)(6),
    n = Kt(),
    r;
  t[0] !== e.projects || t[1] !== n
    ? ((r = Ut(e.projects, n)), (t[0] = e.projects), (t[1] = n), (t[2] = r))
    : (r = t[2]);
  let i = r,
    a;
  return (
    t[3] !== i || t[4] !== e
      ? ((a = (0, Q.jsx)(qn, { ...e, projects: i })), (t[3] = i), (t[4] = e), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function Ei(e) {
  let t = (0, X.c)(30),
    {
      label: n,
      triggerIcon: r,
      triggerLabel: a,
      outlined: o,
      iconOnly: s,
      value: c,
      options: l,
      onChange: u,
      className: d,
    } = e,
    f = o !== void 0 && o,
    p = s !== void 0 && s,
    m;
  t[0] !== l || t[1] !== c
    ? ((m = l.find((e) => e.value === c) ?? l[0]), (t[0] = l), (t[1] = c), (t[2] = m))
    : (m = t[2]);
  let h = m;
  if (!h) return null;
  let g = a || p ? `${n}: ${h.label}` : n,
    _ = p ? `${n}: ${h.label}` : void 0,
    v;
  t[3] !== p || t[4] !== f
    ? ((v = f
        ? (0, Q.jsx)(C, { variant: `outline`, size: p ? `icon` : `default` })
        : (0, Q.jsx)(C, { variant: `ghost-muted`, size: `sm` })),
      (t[3] = p),
      (t[4] = f),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] === d ? (y = t[7]) : ((y = se(`min-w-0`, d)), (t[6] = d), (t[7] = y));
  let b;
  t[8] !== h || t[9] !== p || t[10] !== r || t[11] !== a
    ? ((b = p
        ? (0, Q.jsx)(h.Icon, { "aria-hidden": !0, className: `size-4` })
        : a
          ? (0, Q.jsxs)(Q.Fragment, { children: [r, (0, Q.jsx)(`span`, { children: a })] })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, { className: `truncate`, children: h.label }),
                (0, Q.jsx)(i, {
                  "aria-hidden": !0,
                  className: `size-3 shrink-0 text-muted-foreground/70`,
                }),
              ],
            })),
      (t[8] = h),
      (t[9] = p),
      (t[10] = r),
      (t[11] = a),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== g || t[14] !== _ || t[15] !== v || t[16] !== y || t[17] !== b
    ? ((x = (0, Q.jsx)(oe, { "aria-label": g, title: _, render: v, className: y, children: b })),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === u ? (S = t[20]) : ((S = (e) => u(e)), (t[19] = u), (t[20] = S));
  let T;
  t[21] === l ? (T = t[22]) : ((T = l.map(Di)), (t[21] = l), (t[22] = T));
  let E;
  t[23] !== S || t[24] !== T || t[25] !== c
    ? ((E = (0, Q.jsx)(M, {
        align: `start`,
        side: `bottom`,
        children: (0, Q.jsx)(k, { value: c, onValueChange: S, children: T }),
      })),
      (t[23] = S),
      (t[24] = T),
      (t[25] = c),
      (t[26] = E))
    : (E = t[26]);
  let D;
  return (
    t[27] !== E || t[28] !== x
      ? ((D = (0, Q.jsxs)(w, { children: [x, E] })), (t[27] = E), (t[28] = x), (t[29] = D))
      : (D = t[29]),
    D
  );
}
function Di(e) {
  let t = (0, Q.jsx)(
    P,
    {
      value: e.value,
      disabled: e.unavailable !== void 0,
      className: `data-disabled:pointer-events-auto`,
      children: (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [(0, Q.jsx)(Tn, { option: e }), e.label],
      }),
    },
    e.value,
  );
  return e.unavailable === void 0
    ? t
    : (0, Q.jsxs)(
        S,
        {
          children: [
            (0, Q.jsx)(D, { render: t }),
            (0, Q.jsx)(E, { side: `right`, children: e.unavailable }),
          ],
        },
        e.value,
      );
}
function Oi(e) {
  let t = (0, X.c)(21),
    {
      searchInput: n,
      searchValue: r,
      open: i,
      onOpenChange: o,
      focusToken: s,
      onFocusWithin: c,
    } = e,
    l = (0, Z.useRef)(null),
    u,
    d;
  (t[0] === i
    ? ((u = t[1]), (d = t[2]))
    : ((u = () => {
        i && l.current?.querySelector(`input`)?.focus();
      }),
      (d = [i]),
      (t[0] = i),
      (t[1] = u),
      (t[2] = d)),
    (0, Z.useEffect)(u, d));
  let f = (0, Z.useRef)(s),
    p,
    m;
  if (
    (t[3] === s
      ? ((p = t[4]), (m = t[5]))
      : ((p = () => {
          if (f.current === s) return;
          f.current = s;
          let e = l.current?.querySelector(`input`);
          (e?.focus(), e?.select());
        }),
        (m = [s]),
        (t[3] = s),
        (t[4] = p),
        (t[5] = m)),
    (0, Z.useEffect)(p, m),
    i || r.length > 0)
  ) {
    let e;
    t[6] === c ? (e = t[7]) : ((e = () => c?.(!0)), (t[6] = c), (t[7] = e));
    let i;
    t[8] !== c || t[9] !== o || t[10] !== r.length
      ? ((i = () => {
          (c?.(!1), r.length === 0 && o(!1));
        }),
        (t[8] = c),
        (t[9] = o),
        (t[10] = r.length),
        (t[11] = i))
      : (i = t[11]);
    let a;
    return (
      t[12] !== n || t[13] !== e || t[14] !== i
        ? ((a = (0, Q.jsx)(`div`, {
            ref: l,
            className: `w-56 min-w-24 shrink`,
            onFocus: e,
            onBlur: i,
            children: n,
          })),
          (t[12] = n),
          (t[13] = e),
          (t[14] = i),
          (t[15] = a))
        : (a = t[15]),
      a
    );
  }
  let h;
  t[16] === o ? (h = t[17]) : ((h = () => o(!0)), (t[16] = o), (t[17] = h));
  let g;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(a, { className: `size-4` })), (t[18] = g))
    : (g = t[18]);
  let _;
  return (
    t[19] === h
      ? (_ = t[20])
      : ((_ = (0, Q.jsx)(C, {
          size: `icon-sm`,
          variant: `ghost`,
          "aria-label": `Search pull requests`,
          onClick: h,
          children: g,
        })),
        (t[19] = h),
        (t[20] = _)),
    _
  );
}
function ki(e) {
  let t = (0, X.c)(69),
    {
      refreshing: n,
      onRefresh: r,
      searchValue: i,
      involvement: a,
      state: o,
      host: s,
      hostMenuOptions: c,
      onInvolvement: l,
      onState: u,
      onHost: d,
      searchInput: f,
      sortMenu: p,
      filtersMenu: m,
      rightPanelControl: h,
      titlebarControls: g,
      rightPanelOpen: _,
      maximizedAway: v,
      listBody: b,
      scrollRef: x,
    } = e,
    S = (0, Z.useRef)(null),
    [C, w] = (0, Z.useState)(!1),
    T,
    E;
  (t[0] === x
    ? ((T = t[1]), (E = t[2]))
    : ((T = () => {
        let e = S.current;
        if (!e) return;
        let t = new IntersectionObserver(
          (e) => {
            let [t] = e;
            return w(t ? !t.isIntersecting : !1);
          },
          { root: x.current },
        );
        return (t.observe(e), () => t.disconnect());
      }),
      (E = [x]),
      (t[0] = x),
      (t[1] = T),
      (t[2] = E)),
    (0, Z.useEffect)(T, E));
  let D = (0, Z.useRef)(!1),
    k = (0, Z.useRef)(null),
    [ee, A] = (0, Z.useState)(!1),
    [te, ne] = (0, Z.useState)(0),
    j = ee || i.length > 0,
    re,
    M;
  (t[3] === C
    ? ((re = t[4]), (M = t[5]))
    : ((re = () => {
        let e = (e) => {
          if (
            e.defaultPrevented ||
            e.key.toLowerCase() !== `f` ||
            !(e.metaKey || e.ctrlKey) ||
            e.altKey ||
            e.shiftKey
          )
            return;
          if ((e.preventDefault(), C)) {
            (A(!0), ne(Ai));
            return;
          }
          let t = k.current?.querySelector(`input`);
          (t?.focus(), t?.select());
        };
        return (
          window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e)
        );
      }),
      (M = [C]),
      (t[3] = C),
      (t[4] = re),
      (t[5] = M)),
    (0, Z.useEffect)(re, M),
    !C && ee && A(!1));
  let ie, ae;
  (t[6] === C
    ? ((ie = t[7]), (ae = t[8]))
    : ((ie = () => {
        if (C || !D.current) return;
        D.current = !1;
        let e = k.current?.querySelector(`input`);
        e && (e.focus(), e.setSelectionRange(e.value.length, e.value.length));
      }),
      (ae = [C]),
      (t[6] = C),
      (t[7] = ie),
      (t[8] = ae)),
    (0, Z.useEffect)(ie, ae));
  let oe = v ? `w-0 flex-none` : `flex-1`,
    N;
  t[9] === oe
    ? (N = t[10])
    : ((N = se(
        `@container/pr-list flex min-h-0 min-w-0 flex-col overflow-x-hidden bg-background`,
        oe,
      )),
      (t[9] = oe),
      (t[10] = N));
  let P = !_,
    F;
  t[11] !== C ||
  t[12] !== s ||
  t[13] !== c ||
  t[14] !== a ||
  t[15] !== d ||
  t[16] !== l ||
  t[17] !== u ||
  t[18] !== j ||
  t[19] !== o
    ? ((F = C
        ? (0, Q.jsxs)(un, {
            ariaLabel: `Pull request scope`,
            className: `overflow-hidden`,
            children: [
              (0, Q.jsx)(Y, {
                current: !0,
                className: se(j && `sr-only`),
                children: (0, Q.jsx)(`h1`, { className: `truncate`, children: `Pull Requests` }),
              }),
              j ? null : (0, Q.jsx)(ln, {}),
              (0, Q.jsxs)(Y, {
                className: `shrink gap-1.5`,
                children: [
                  (0, Q.jsx)(Ei, {
                    label: `Filter by state`,
                    value: o,
                    options: _r,
                    onChange: u,
                    className: `shrink-0`,
                  }),
                  (0, Q.jsx)(Ei, {
                    label: `Filter by involvement`,
                    value: a,
                    options: gr,
                    onChange: l,
                  }),
                  c.length > 2
                    ? (0, Q.jsx)(Ei, {
                        label: `Filter by host`,
                        value: s ?? ``,
                        options: c,
                        onChange: (e) => d(e === `` ? void 0 : e),
                      })
                    : null,
                ],
              }),
            ],
          })
        : (0, Q.jsx)(un, {
            ariaLabel: `Pull requests breadcrumb`,
            children: (0, Q.jsx)(Y, {
              current: !0,
              children: (0, Q.jsx)(`h1`, { className: `truncate`, children: `Pull Requests` }),
            }),
          })),
      (t[11] = C),
      (t[12] = s),
      (t[13] = c),
      (t[14] = a),
      (t[15] = d),
      (t[16] = l),
      (t[17] = u),
      (t[18] = j),
      (t[19] = o),
      (t[20] = F))
    : (F = t[20]);
  let I;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(`div`, { className: `min-w-0 flex-1` })), (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] !== C ||
  t[23] !== r ||
  t[24] !== n ||
  t[25] !== te ||
  t[26] !== f ||
  t[27] !== ee ||
  t[28] !== i
    ? ((L = C
        ? (0, Q.jsxs)(`div`, {
            className: `flex shrink items-center gap-1.5`,
            children: [
              (0, Q.jsx)(Oi, {
                searchInput: f,
                searchValue: i,
                open: ee,
                onOpenChange: A,
                focusToken: te,
                onFocusWithin: (e) => {
                  D.current = e;
                },
              }),
              (0, Q.jsx)(ji, { compact: !0, refreshing: n, onRefresh: r }),
            ],
          })
        : null),
      (t[22] = C),
      (t[23] = r),
      (t[24] = n),
      (t[25] = te),
      (t[26] = f),
      (t[27] = ee),
      (t[28] = i),
      (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] !== h || t[31] !== F || t[32] !== L || t[33] !== P || t[34] !== g
    ? ((R = (0, Q.jsxs)(sn, {
        electron: O,
        reserveNativeControls: P,
        className: `relative bg-background`,
        children: [g, F, I, L, h],
      })),
      (t[30] = h),
      (t[31] = F),
      (t[32] = L),
      (t[33] = P),
      (t[34] = g),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] === f
    ? (z = t[37])
    : ((z = (0, Q.jsx)(`div`, {
        className: `min-w-0 basis-full @lg/pr-list:basis-0 @lg/pr-list:flex-1`,
        children: f,
      })),
      (t[36] = f),
      (t[37] = z));
  let ce = s !== void 0,
    B;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(y, { "aria-hidden": !0, className: `size-4` })), (t[38] = B))
    : (B = t[38]);
  let le = s ?? ``,
    ue;
  t[39] === d ? (ue = t[40]) : ((ue = (e) => d(e === `` ? void 0 : e)), (t[39] = d), (t[40] = ue));
  let de;
  t[41] !== c || t[42] !== ce || t[43] !== le || t[44] !== ue
    ? ((de = (0, Q.jsx)(Ei, {
        label: `Filter by provider`,
        outlined: !0,
        iconOnly: ce,
        triggerIcon: B,
        triggerLabel: `All`,
        value: le,
        options: c,
        onChange: ue,
      })),
      (t[41] = c),
      (t[42] = ce),
      (t[43] = le),
      (t[44] = ue),
      (t[45] = de))
    : (de = t[45]);
  let fe;
  t[46] !== C || t[47] !== r || t[48] !== n
    ? ((fe = C ? null : (0, Q.jsx)(ji, { refreshing: n, onRefresh: r })),
      (t[46] = C),
      (t[47] = r),
      (t[48] = n),
      (t[49] = fe))
    : (fe = t[49]);
  let pe;
  t[50] !== m || t[51] !== p || t[52] !== z || t[53] !== de || t[54] !== fe
    ? ((pe = (0, Q.jsxs)(`div`, {
        ref: k,
        className: `flex flex-wrap items-center gap-2`,
        children: [z, p, m, de, fe],
      })),
      (t[50] = m),
      (t[51] = p),
      (t[52] = z),
      (t[53] = de),
      (t[54] = fe),
      (t[55] = pe))
    : (pe = t[55]);
  let V;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(`div`, { ref: S, "aria-hidden": !0, className: `-mt-3 h-px w-full` })),
      (t[56] = V))
    : (V = t[56]);
  let me;
  t[57] === pe
    ? (me = t[58])
    : ((me = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [pe, V] })),
      (t[57] = pe),
      (t[58] = me));
  let H;
  t[59] !== b || t[60] !== me
    ? ((H = (0, Q.jsxs)(dn, {
        width: `expanded`,
        className: `min-h-full gap-4`,
        children: [me, b],
      })),
      (t[59] = b),
      (t[60] = me),
      (t[61] = H))
    : (H = t[61]);
  let he;
  t[62] !== x || t[63] !== H
    ? ((he = (0, Q.jsx)(`div`, {
        ref: x,
        className: `topbar-scroll-fade scrollbar-gutter-both min-h-0 flex-1 overflow-y-auto`,
        children: H,
      })),
      (t[62] = x),
      (t[63] = H),
      (t[64] = he))
    : (he = t[64]);
  let ge;
  return (
    t[65] !== R || t[66] !== he || t[67] !== N
      ? ((ge = (0, Q.jsxs)(`div`, { className: N, children: [R, he] })),
        (t[65] = R),
        (t[66] = he),
        (t[67] = N),
        (t[68] = ge))
      : (ge = t[68]),
    ge
  );
}
function Ai(e) {
  return e + 1;
}
function ji(e) {
  let t = (0, X.c)(8),
    { compact: n, refreshing: r, onRefresh: i } = e,
    a = n !== void 0 && n,
    o = a ? `icon-sm` : `icon`,
    s = a ? `ghost` : `outline`,
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = (0, Q.jsx)(Wt, { size: `md`, refreshing: r })), (t[0] = r), (t[1] = c));
  let l;
  return (
    t[2] !== i || t[3] !== r || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((l = (0, Q.jsx)(C, {
          size: o,
          variant: s,
          "aria-label": `Refresh pull requests`,
          onClick: i,
          disabled: r,
          children: c,
        })),
        (t[2] = i),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
export { Ar as component };
//# sourceMappingURL=_chat.pull-requests-BckdiMCR.js.map
