import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, i as a } from "./search-BrluOr7L.js";
import { n as o } from "./workflow-BDTBfiWX.js";
import { n as s, t as c } from "./triangle-alert-Ca4wixX0.js";
import { n as l, r as u, t as d } from "./rows-3-Dbn401hK.js";
import { t as f } from "./external-link-DV7LH7eG.js";
import { t as p } from "./folder-tree-B14jOoVx.js";
import { t as m } from "./message-square-off-2q-l1OT1.js";
import { t as h } from "./settings-2-DL1tXwgH.js";
import {
  $n as g,
  Ac as _,
  Ay as v,
  B as y,
  Bn as b,
  Dr as x,
  H as S,
  Is as C,
  Lc as w,
  N as T,
  Qn as ee,
  R as te,
  Rs as ne,
  V as re,
  Vn as E,
  Wn as D,
  Xl as O,
  ar as ie,
  ir as ae,
  lr as oe,
  mr as se,
  nr as ce,
  or as le,
  t as ue,
} from "./utils-CPoejuy5.js";
import { M as de } from "./runtime-CY2dlMEg.js";
import { t as fe } from "./checkbox-QNRIjRIP.js";
import { n as pe, t as me } from "./MorphIcon-DCVwjy7i.js";
import { a as he, n as ge, r as _e, t as ve } from "./DiffFileTree-DBOPPWQw.js";
import { G as ye, c as be, l as xe } from "./useSettings-N-JG2LFZ.js";
import { n as Se } from "./query-LKSVgBQH.js";
import { t as Ce } from "./use-atom-command-DGAuqAck.js";
import { i as we } from "./toast-B4KPIJDZ.js";
import { t as Te } from "./useStableCallback-XvXMCrxI.js";
import {
  F as Ee,
  H as De,
  I as Oe,
  M as ke,
  N as Ae,
  P as je,
  V as Me,
  W as Ne,
  j as Pe,
} from "./PanelLayoutControls-CBiOLaSo.js";
import { n as Fe } from "./DiffWorkerPoolProvider-BENB1zWt.js";
import { t as Ie } from "./DiffCommentAnnotation-BI53TMYr.js";
import { i as Le, o as Re, r as ze, t as Be } from "./empty-CgJfsiJ2.js";
import { n as Ve, r as He, t as Ue } from "./collapsible-Dp2CGco9.js";
import { g as We, r as k, v as Ge } from "./pullRequests-CcJBfL2x.js";
import { z as Ke } from "./pullRequestDetail.logic-Df887lG8.js";
import { i as qe, n as Je, r as Ye, t as Xe } from "./pullRequestReviewStore-iF6pAKYl.js";
import {
  $c as Ze,
  $s as A,
  Bs as Qe,
  Js as $e,
  Ks as et,
  Qs as tt,
  Vs as nt,
  Xo as rt,
  Xs as it,
  Zs as at,
  ec as ot,
  zs as st,
} from "./main-BZa0O6xN.js";
var j = e(t(), 1),
  ct = n(),
  lt = pe(),
  ut = new Set([
    `pnpm-lock.yaml`,
    `yarn.lock`,
    `package-lock.json`,
    `bun.lockb`,
    `Cargo.lock`,
    `go.sum`,
    `composer.lock`,
    `Gemfile.lock`,
  ]),
  M = new Set([`__snapshots__`, `__generated__`, `dist`, `build`, `vendor`]),
  dt = new Set([`__tests__`, `tests`, `test`]),
  ft = [`.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs`];
function pt(e) {
  let t = e.split(`/`),
    n = t.at(-1) ?? ``;
  return ut.has(n) ||
    n.endsWith(`.snap`) ||
    n.endsWith(`.min.js`) ||
    n.endsWith(`.min.css`) ||
    /\.generated\./.test(n) ||
    t.slice(0, -1).some((e) => M.has(e))
    ? `generated`
    : /\.(?:test|spec)\./.test(n) || t.slice(0, -1).some((e) => dt.has(e))
      ? `test`
      : `source`;
}
function mt(e) {
  let t = e.lastIndexOf(`.`);
  return t > e.lastIndexOf(`/`) ? e.slice(0, t) : e;
}
function ht(e) {
  return mt(e.split(`/`).at(-1) ?? ``);
}
function gt(e, t) {
  let n = e.split(`/`).slice(0, -1);
  for (let e of t.split(`/`)) e !== `.` && e !== `` && (e === `..` ? n.pop() : n.push(e));
  return n.join(`/`);
}
var _t = /(?:\bfrom|\bimport|\brequire\s*\()\s*\(?\s*["']([^"']+)["']/g;
function vt(e, t, n, r) {
  let i = new Set();
  for (let a of t) {
    _t.lastIndex = 0;
    let t = _t.exec(a);
    for (; t !== null;) {
      let o = t[1] ?? ``,
        s = o.startsWith(`.`) ? gt(e, o) : o,
        c = ft.find((e) => s.endsWith(e)),
        l = c === void 0 ? s : s.slice(0, -c.length),
        u = n.get(l) ?? n.get(`${l}/index`) ?? r.get(ht(l));
      (u !== void 0 && u !== e && i.add(u), (t = _t.exec(a)));
    }
  }
  return i;
}
function N(e, t) {
  let n = new Set(e),
    r = [],
    i = [...e].sort((e, t) => e.localeCompare(t));
  for (; n.size > 0;) {
    let e = i.filter((e) => n.has(e)),
      a = e.find((e) => [...(t.get(e) ?? [])].every((e) => !n.has(e))) ?? e[0];
    (n.delete(a), r.push(a));
  }
  return r;
}
function P(e) {
  return (e.split(`/`).at(-1) ?? ``).replace(/\.(?:test|spec)\..*$/, ``).replace(/\.[^.]+$/, ``);
}
function F(e) {
  let t = new Map();
  for (let n of e) t.set(A(n), n);
  let n = new Map();
  for (let e of t.keys()) n.set(e, pt(e));
  let r = [...t.keys()].filter((e) => n.get(e) === `source`),
    i = new Map(),
    a = new Set(),
    o = new Map();
  for (let e of r) {
    i.set(mt(e), e);
    let t = ht(e);
    (o.has(t) && a.add(t), o.set(t, e));
  }
  for (let e of a) o.delete(e);
  let s = new Map();
  for (let e of r) {
    let n = t.get(e);
    s.set(e, vt(e, [...n.additionLines, ...n.deletionLines], i, o));
  }
  let c = N(r, s),
    l = new Map();
  c.forEach((e, t) => {
    let n = ht(e);
    l.has(n) || l.set(n, t);
  });
  let u = [...t.keys()]
      .filter((e) => n.get(e) === `test`)
      .sort(
        (e, t) => (l.get(P(e)) ?? 2 ** 53 - 1) - (l.get(P(t)) ?? 2 ** 53 - 1) || e.localeCompare(t),
      ),
    d = [...t.keys()].filter((e) => n.get(e) === `generated`).sort((e, t) => e.localeCompare(t));
  return [...c, ...u, ...d].map((e) => t.get(e));
}
function yt(e, t, n) {
  return /\brate limit\b|\brate[-_]limited\b|\btoo many requests\b/i.test(e)
    ? {
        title: `${t} rate limit reached`,
        description: `${t} is temporarily limiting requests, so this diff couldn't be loaded. Try again after the limit resets, or view the changes on ${t}.`,
      }
    : {
        title: `Couldn't load the changes`,
        description: `The environment couldn't load this ${n}'s diff. Try again, or view the changes on ${t}.`,
      };
}
var I = e(r(), 1);
function bt(e) {
  let t = (0, ct.c)(31),
    { error: n, provider: r, url: i, onRetry: a } = e,
    o,
    s;
  if (t[0] !== n || t[1] !== r) {
    let { providerName: e, terminology: i } = rt(r);
    ((o = e), (s = yt(n, o, i.singular)), (t[0] = n), (t[1] = r), (t[2] = o), (t[3] = s));
  } else ((o = t[2]), (s = t[3]));
  let { title: l, description: u } = s,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, I.jsx)(`div`, {
        className: `flex size-11 items-center justify-center rounded-full bg-warning-surface text-warning`,
        children: (0, I.jsx)(c, { "aria-hidden": !0, className: `size-5` }),
      })),
      (t[4] = d))
    : (d = t[4]);
  let p;
  t[5] === l ? (p = t[6]) : ((p = (0, I.jsx)(Re, { children: l })), (t[5] = l), (t[6] = p));
  let m;
  t[7] === u ? (m = t[8]) : ((m = (0, I.jsx)(ze, { children: u })), (t[7] = u), (t[8] = m));
  let h;
  t[9] !== p || t[10] !== m
    ? ((h = (0, I.jsxs)(Le, { children: [p, m] })), (t[9] = p), (t[10] = m), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, I.jsx)(Ze, {})), (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === a
    ? (_ = t[14])
    : ((_ = (0, I.jsxs)(x, {
        size: `sm`,
        variant: `default`,
        onClick: a,
        children: [g, `Try again`],
      })),
      (t[13] = a),
      (t[14] = _));
  let v;
  t[15] === i
    ? (v = t[16])
    : ((v = (0, I.jsx)(`a`, { href: i, target: `_blank`, rel: `noopener noreferrer` })),
      (t[15] = i),
      (t[16] = v));
  let y;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, I.jsx)(f, { "aria-hidden": !0 })), (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== o || t[19] !== v
    ? ((b = (0, I.jsxs)(x, {
        size: `sm`,
        variant: `outline`,
        render: v,
        children: [y, `Open on `, o],
      })),
      (t[18] = o),
      (t[19] = v),
      (t[20] = b))
    : (b = t[20]);
  let S;
  t[21] !== b || t[22] !== _
    ? ((S = (0, I.jsxs)(`div`, {
        className: `flex flex-wrap justify-center gap-2`,
        children: [_, b],
      })),
      (t[21] = b),
      (t[22] = _),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, I.jsx)(`summary`, {
        className: `mx-auto w-fit cursor-pointer rounded-sm -outline-offset-2 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring`,
        children: `Technical details`,
      })),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] === n
    ? (w = t[26])
    : ((w = (0, I.jsxs)(`details`, {
        className: `w-full max-w-lg text-xs text-muted-foreground`,
        children: [
          C,
          (0, I.jsx)(`pre`, {
            className: `scrollbar-gutter-both mt-3 max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-lg border border-border bg-muted/40 p-3 text-left font-mono text-xs`,
            children: n,
          }),
        ],
      })),
      (t[25] = n),
      (t[26] = w));
  let T;
  return (
    t[27] !== S || t[28] !== w || t[29] !== h
      ? ((T = (0, I.jsxs)(Be, {
          size: `compact`,
          className: `min-h-full`,
          role: `status`,
          children: [d, h, S, w],
        })),
        (t[27] = S),
        (t[28] = w),
        (t[29] = h),
        (t[30] = T))
      : (T = t[30]),
    T
  );
}
function L(e) {
  return e === null ? null : new Map(e.files.map((e) => [e.path, e.state]));
}
function xt(e) {
  return e === `viewed`;
}
function St(e) {
  return e === `dismissed`;
}
function Ct(e, t, n) {
  return n.get(e) ?? xt(t?.get(e));
}
function wt(e, t, n, r) {
  if (t === null || e.size === 0) return e;
  let i = new Map(e);
  for (let [a, o] of e) n.has(a) || ((r.has(a) || xt(t.get(a)) === o) && i.delete(a));
  return i.size === e.size ? e : i;
}
function R(e, t, n) {
  let r = new Map(e);
  for (let { path: e, viewed: i } of t) n.has(e) && r.get(e) === i && r.delete(e);
  return r.size === e.size ? e : r;
}
function z(e) {
  return [...e].map(([e, t]) => ({ path: e, viewed: t }));
}
var Tt = 400,
  Et = new Map();
function Dt(e) {
  let t = (0, ct.c)(41),
    { environmentId: n, reference: r, enabled: i } = e,
    a;
  t[0] !== i || t[1] !== n || t[2] !== r
    ? ((a = i ? k.filesViewed({ environmentId: n, input: r }) : null),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o = Se(a),
    s = o.refresh,
    c;
  t[4] === o.data ? (c = t[5]) : ((c = L(o.data)), (t[4] = o.data), (t[5] = c));
  let l = c,
    u = o.data?.truncated === !0,
    d = o.error,
    [f, p] = (0, j.useState)(Et),
    m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { reportFailure: !1 }), (t[6] = m))
    : (m = t[6]);
  let h = Ce(k.setFilesViewed, m),
    g;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = new Map()), (t[7] = g)) : (g = t[7]);
  let _ = (0, j.useRef)(g),
    v;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = new Map()), (t[8] = v)) : (v = t[8]);
  let y = (0, j.useRef)(v),
    b = (0, j.useRef)(0),
    x = (0, j.useRef)(null),
    S = `${n} ${r.projectId} ${r.repository} ${r.number}`,
    C = (0, j.useRef)(S),
    w;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = new Map()), (t[9] = w)) : (w = t[9]);
  let T = (0, j.useRef)(w),
    ee = (0, j.useRef)(l),
    te,
    ne;
  (t[10] === l
    ? ((te = t[11]), (ne = t[12]))
    : ((te = () => {
        ee.current = l;
        let e = new Set([..._.current.keys(), ...y.current.keys()]),
          t = new Set();
        for (let [n, r] of T.current) e.has(n) || r === l || (t.add(n), T.current.delete(n));
        p((n) => wt(n, l, e, t));
      }),
      (ne = [l]),
      (t[10] = l),
      (t[11] = te),
      (t[12] = ne)),
    (0, j.useEffect)(te, ne));
  let re;
  t[13] !== s || t[14] !== h
    ? ((re = (e) => {
        x.current = null;
        let t = z(_.current);
        if (t.length === 0) return;
        _.current = new Map();
        let n = C.current,
          r = (b.current += 1);
        for (let e of t) y.current.set(e.path, r);
        h({ environmentId: e.environmentId, input: { ...e.reference, files: t } }).then((e) => {
          let i = t.map(Ot).filter((e) => y.current.get(e) === r);
          for (let e of i) y.current.delete(e);
          if (C.current === n) {
            if (e._tag === `Failure`) {
              let n = new Set(i.filter((e) => !_.current.has(e)));
              (p((e) => R(e, t, n)),
                n.size > 0 &&
                  !O(e) &&
                  (we.add({ type: `error`, title: `Could not update viewed files` }), s()));
            } else {
              for (let e of i) T.current.set(e, ee.current);
              s();
            }
          }
        });
      }),
      (t[13] = s),
      (t[14] = h),
      (t[15] = re))
    : (re = t[15]);
  let E = re,
    D;
  t[16] !== n || t[17] !== r
    ? ((D = () => ({ environmentId: n, reference: r })), (t[16] = n), (t[17] = r), (t[18] = D))
    : (D = t[18]);
  let ie = (0, j.useEffectEvent)(D),
    ae = (0, j.useEffectEvent)(E),
    oe;
  t[19] !== ie || t[20] !== ae || t[21] !== S
    ? ((oe = () => {
        let e = ie();
        return (
          (C.current = S),
          () => {
            (x.current !== null && (clearTimeout(x.current), ae(e)),
              (_.current = new Map()),
              (y.current = new Map()),
              (T.current = new Map()),
              p(Et));
          }
        );
      }),
      (t[19] = ie),
      (t[20] = ae),
      (t[21] = S),
      (t[22] = oe))
    : (oe = t[22]);
  let se;
  (t[23] === S ? (se = t[24]) : ((se = [S]), (t[23] = S), (t[24] = se)), (0, j.useEffect)(oe, se));
  let ce;
  t[25] !== n || t[26] !== E || t[27] !== r
    ? ((ce = (e, t) => {
        (p((n) => new Map(n).set(e, t)),
          _.current.set(e, t),
          x.current !== null && clearTimeout(x.current));
        let i = { environmentId: n, reference: r };
        x.current = setTimeout(() => E(i), Tt);
      }),
      (t[25] = n),
      (t[26] = E),
      (t[27] = r),
      (t[28] = ce))
    : (ce = t[28]);
  let le = Te(ce),
    ue,
    de;
  t[29] !== f || t[30] !== l
    ? ((ue = (e) => Ct(e, l, f)),
      (de = (e) => !f.has(e) && St(l?.get(e))),
      (t[29] = f),
      (t[30] = l),
      (t[31] = ue),
      (t[32] = de))
    : ((ue = t[31]), (de = t[32]));
  let fe;
  return (
    t[33] !== i ||
    t[34] !== d ||
    t[35] !== s ||
    t[36] !== le ||
    t[37] !== ue ||
    t[38] !== de ||
    t[39] !== u
      ? ((fe = {
          enabled: i,
          isViewed: ue,
          isStale: de,
          setViewed: le,
          truncated: u,
          error: d,
          refresh: s,
        }),
        (t[33] = i),
        (t[34] = d),
        (t[35] = s),
        (t[36] = le),
        (t[37] = ue),
        (t[38] = de),
        (t[39] = u),
        (t[40] = fe))
      : (fe = t[40]),
    fe
  );
}
function Ot(e) {
  return e.path;
}
var kt = 10,
  At = `t3code.pullRequestFileTreeOpen`,
  jt = `
[data-diffs-header] [data-additions-count],
[data-diffs-header] [data-deletions-count] {
  display: none !important;
}`,
  Mt = [],
  Nt = new WeakMap();
function Pt(e, t, n) {
  let r = Nt.get(e.source);
  if ((r === void 0 && ((r = new Map()), Nt.set(e.source, r)), r.has(t))) return r.get(t) ?? null;
  let i = at(e.patch, t, { compactPartialHunkOffsets: !0, ignoreWhitespace: n });
  return (r.set(t, i), i);
}
var Ft = (0, j.createContext)(null);
function It(e) {
  let t = (0, ct.c)(22),
    { fileKey: n, path: r, stat: i } = e,
    a = (0, j.use)(Ft);
  if (a === null || !a.enabled) return i;
  let o;
  t[0] !== r || t[1] !== a ? ((o = a.isViewed(r)), (t[0] = r), (t[1] = a), (t[2] = o)) : (o = t[2]);
  let s = o,
    c;
  t[3] !== r || t[4] !== a ? ((c = a.isStale(r)), (t[3] = r), (t[4] = a), (t[5] = c)) : (c = t[5]);
  let l = c,
    u = l ? `Changed` : `Viewed`,
    d;
  t[6] !== n || t[7] !== r || t[8] !== a
    ? ((d = (e) => a.setFileViewed(n, r, e === !0)), (t[6] = n), (t[7] = r), (t[8] = a), (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== u || t[11] !== d || t[12] !== s
    ? ((f = (0, I.jsx)(fe, { "aria-label": u, checked: s, onCheckedChange: d })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = s),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] === l
    ? (p = t[15])
    : ((p = l
        ? (0, I.jsxs)(b, {
            children: [
              (0, I.jsx)(D, {
                render: (0, I.jsx)(`span`, { className: `text-warning-foreground` }),
                children: `Changed`,
              }),
              (0, I.jsx)(E, {
                side: `bottom`,
                children: `This file has been pushed to since you marked it viewed.`,
              }),
            ],
          })
        : (0, I.jsx)(`span`, { className: `@max-xs:hidden`, children: `Viewed` })),
      (t[14] = l),
      (t[15] = p));
  let m;
  t[16] !== f || t[17] !== p
    ? ((m = (0, I.jsxs)(`label`, {
        "data-viewed-toggle": ``,
        className: `flex cursor-pointer select-none items-center gap-1.5 text-2xs text-muted-foreground`,
        onClick: Lt,
        children: [f, p],
      })),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== i || t[20] !== m
      ? ((h = (0, I.jsxs)(`span`, { className: `flex items-center gap-3`, children: [i, m] })),
        (t[19] = i),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function Lt(e) {
  return e.stopPropagation();
}
function Rt(e) {
  let t = (0, ct.c)(175),
    {
      scrollerRef: n,
      environmentId: r,
      reference: f,
      detail: O,
      selectedCommitOid: fe,
      onSelectedCommitChange: pe,
      pendingFinding: be,
      fixFindingLabel: Te,
      onFixFinding: je,
      onAddToAgentSelection: Le,
      onRefresh: Re,
      refreshToken: ze,
      backgroundRefreshToken: Be,
      revealRequest: Ze,
    } = e,
    rt = Te === void 0 ? `Fix in a thread` : Te,
    at = ze === void 0 ? 0 : ze,
    ut = Be === void 0 ? 0 : Be,
    M = Ze === void 0 ? null : Ze,
    dt = ye();
  Fe();
  let ft = xe(gn),
    [pt, mt] = (0, j.useState)(hn),
    [ht, gt] = (0, j.useState)(kt),
    [_t, vt] = (0, j.useState)(null),
    N = _t ?? (ft.diffFilesCollapsed ? `folded` : `expanded`),
    P = ft.diffLayout,
    [F, yt] = (0, j.useState)(ft.wordWrap),
    [L, xt] = (0, j.useState)(ft.diffIgnoreWhitespace),
    [St, Ct] = w(At, !1, v),
    [wt, R] = (0, j.useState)(null),
    [z, Tt] = (0, j.useState)(null),
    [Et, Ot] = (0, j.useState)(!1),
    [Nt, Lt] = (0, j.useState)(!1),
    Rt;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Rt = { key: ``, cursor: null, slices: Mt }), (t[0] = Rt))
    : (Rt = t[0]);
  let [tn, nn] = (0, j.useState)(Rt),
    [rn, an] = (0, j.useState)(null),
    ln = Je(f),
    B = fe,
    V = JSON.stringify([r, ln, B]),
    [_n, vn] = (0, j.useState)(V);
  _n !== V &&
    (vn(V),
    Tt(null),
    R(null),
    mt(new Set()),
    vt(null),
    gt(kt),
    Lt(!1),
    nn({ key: V, cursor: null, slices: Mt }));
  let H = tn.key === V ? tn.slices : Mt,
    U = tn.key === V ? tn.cursor : null,
    yn;
  t[1] !== B || t[2] !== U || t[3] !== r || t[4] !== f
    ? ((yn = k.diff({
        environmentId: r,
        input: { ...f, ...(U === null ? {} : { cursor: U }), ...(B === null ? {} : { commit: B }) },
      })),
      (t[1] = B),
      (t[2] = U),
      (t[3] = r),
      (t[4] = f),
      (t[5] = yn))
    : (yn = t[5]);
  let W = Se(yn),
    [bn, xn] = (0, j.useState)(null),
    G = W.data;
  G !== null &&
    (bn?.data !== G || bn.cursor !== U || bn.scopeKey !== V) &&
    (xn({ data: G, cursor: U, scopeKey: V }),
    nn((e) => {
      let t = e.key === V ? e.slices : Mt,
        n = {
          source: G,
          cursor: U,
          patch: G.patch,
          truncated: G.truncated,
          nextCursor: G.nextCursor,
          omittedFileStats: G.omittedFileStats ?? [],
        },
        r = t.findIndex((e) => e.cursor === U);
      if (r === -1) return { key: V, cursor: U, slices: [...t, n] };
      let i = t[r];
      return i !== void 0 &&
        i.patch === n.patch &&
        i.truncated === n.truncated &&
        i.nextCursor === n.nextCursor &&
        i.omittedFileStats.length === n.omittedFileStats.length &&
        i.omittedFileStats.every((e, t) => {
          let r = n.omittedFileStats[t];
          return (
            r !== void 0 &&
            r.path === e.path &&
            r.additions === e.additions &&
            r.deletions === e.deletions
          );
        })
        ? e
        : { key: V, cursor: U, slices: [...t.slice(0, r), n] };
    }));
  let Sn;
  t[6] !== B || t[7] !== r || t[8] !== f
    ? ((Sn = k.diff({ environmentId: r, input: { ...f, ...(B === null ? {} : { commit: B }) } })),
      (t[6] = B),
      (t[7] = r),
      (t[8] = f),
      (t[9] = Sn))
    : (Sn = t[9]);
  let K = _(Sn),
    Cn = ln,
    wn = Ye(f),
    Tn = qe(mn),
    En = qe(pn),
    Dn;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dn = { reportFailure: !1 }), (t[10] = Dn))
    : (Dn = t[10]);
  let On = Ce(k.replyToThread, Dn),
    kn;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kn = { reportFailure: !1 }), (t[11] = kn))
    : (kn = t[11]);
  let An = Ce(k.setThreadResolution, kn),
    jn;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jn = { reportFailure: !1 }), (t[12] = jn))
    : (jn = t[12]);
  let Mn = Ce(k.updateComment, jn),
    Nn;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nn = { reportFailure: !1 }), (t[13] = Nn))
    : (Nn = t[13]);
  let Pn = Ce(k.threadComments, Nn),
    Fn = Ce(k.diffFileContents),
    In = O.capabilities.viewedFiles,
    Ln = In !== void 0,
    Rn;
  t[14] !== r || t[15] !== f || t[16] !== Ln
    ? ((Rn = { environmentId: r, reference: f, enabled: Ln }),
      (t[14] = r),
      (t[15] = f),
      (t[16] = Ln),
      (t[17] = Rn))
    : (Rn = t[17]);
  let zn = Dt(Rn),
    { setViewed: Bn, refresh: q, enabled: Vn, isViewed: Hn, isStale: Un } = zn,
    Wn = (0, j.useRef)(at),
    Gn;
  (t[18] !== q || t[19] !== K || t[20] !== at || t[21] !== V
    ? ((Gn = [at, V, K, q]), (t[18] = q), (t[19] = K), (t[20] = at), (t[21] = V), (t[22] = Gn))
    : (Gn = t[22]),
    (0, j.useEffect)(() => {
      Wn.current !== at &&
        ((Wn.current = at), nn({ key: V, cursor: null, slices: Mt }), xn(null), K(), q());
    }, Gn));
  let Kn = (0, j.useRef)(ut),
    qn,
    Jn;
  (t[23] !== ut || t[24] !== q || t[25] !== K
    ? ((qn = () => {
        Kn.current !== ut && ((Kn.current = ut), nn(fn), K(), q());
      }),
      (Jn = [ut, K, q]),
      (t[23] = ut),
      (t[24] = q),
      (t[25] = K),
      (t[26] = qn),
      (t[27] = Jn))
    : ((qn = t[26]), (Jn = t[27])),
    (0, j.useEffect)(qn, Jn));
  let [Yn, Xn] = (0, j.useState)(null),
    Zn = he(rn, V),
    Qn = (0, j.useRef)(null),
    $n = Me(Fn, {
      environmentId: r,
      reference: f,
      commit: B,
      cacheKey: `pull-request:${ln}:${O.updatedAt}:${B ?? `all`}`,
    }),
    er = O.capabilities.review,
    tr = {
      inlineComment: er.inlineComment && O.viewerPermissions.comment,
      reply: er.reply && O.viewerPermissions.comment,
      resolve: er.resolve && O.viewerPermissions.resolve,
    },
    nr = tr.inlineComment && B === null,
    rr = er.rangeComment === !0,
    ir = B === null && (tr.inlineComment || Le !== void 0),
    ar = H.map((e) =>
      Pt(e, `pull-request:${V}:${dt}:${L}:${e.cursor ?? `first`}:${$e(e.patch)}`, L),
    ),
    J = ar.flatMap(dn),
    or = J.map(un),
    sr;
  t[28] === H ? (sr = t[29]) : ((sr = new Map(H.flatMap(cn))), (t[28] = H), (t[29] = sr));
  let cr = sr,
    lr = new Map(ar.flatMap(sn)),
    ur = ge(J),
    dr;
  bb0: {
    let e = new Set();
    if (B !== null) {
      dr = e;
      break bb0;
    }
    for (let t of J) {
      let n = A(t);
      for (let r of O.reviewThreads)
        r.path === n && r.line !== null && re(t, r.side, r.line) && e.add(r.id);
    }
    dr = e;
  }
  let fr = dr,
    pr;
  t[30] !== B || t[31] !== O.reviewThreads || t[32] !== z || t[33] !== wn || t[34] !== fr
    ? ((pr = (e) => {
        let t = et(e),
          n = A(e),
          r = new Map(),
          i = (e, t) => {
            let n = `${e}:${t}`,
              i = r.get(n);
            if (i) return i;
            let a = { side: e, line: t, threads: [], pending: [], draft: !1 };
            return (r.set(n, a), a);
          };
        for (let e of O.reviewThreads)
          e.path === n && e.line !== null && fr.has(e.id) && i(e.side, e.line).threads.push(e);
        if (B === null)
          for (let e of wn) {
            if (e.path !== n) continue;
            let t = Ae(e.position);
            i(t.side, t.line).pending.push(e);
          }
        if (z?.fileKey === t) {
          let e = Ae(z.position);
          i(e.side, e.line).draft = !0;
        }
        let a = [...r.values()].map(on);
        return {
          fileKey: t,
          path: n,
          fileDiff: e,
          annotations: a,
          annotationsVersion: $e(a.map(en).join(`|`)),
        };
      }),
      (t[30] = B),
      (t[31] = O.reviewThreads),
      (t[32] = z),
      (t[33] = wn),
      (t[34] = fr),
      (t[35] = pr))
    : (pr = t[35]);
  let mr = J.map(pr),
    hr;
  t[36] === H ? (hr = t[37]) : ((hr = H.at(-1)?.nextCursor ?? null), (t[36] = H), (t[37] = hr));
  let Y = hr,
    gr = H.some($t) || ar.some(Qt),
    _r = Y === null ? ar.flatMap(Zt) : [],
    vr =
      J.length === 0 && _r.length > 0
        ? (0, I.jsx)(`div`, { className: `space-y-4 px-4 py-5`, children: _r.map(Xt) })
        : null,
    yr =
      _r.length === 0
        ? null
        : (0, I.jsx)(`div`, {
            className: `space-y-4 border-t border-border/60 px-4 py-5`,
            children: _r.map(Yt),
          }),
    br;
  t[38] !== N || t[39] !== Vn || t[40] !== Hn || t[41] !== Un || t[42] !== pt
    ? ((br = (e) => {
        let { fileKey: t, path: n, fileDiff: r, annotations: i, annotationsVersion: a } = e,
          o = y(t, N, pt),
          s = Vn ? `e${Hn(n) ? `v` : ``}${Un(n) ? `s` : ``}` : ``;
        return {
          id: t,
          type: `diff`,
          fileDiff: r,
          annotations: i,
          collapsed: o,
          version: $e(`${o ? `1` : `0`}:${s}:${a}`),
        };
      }),
      (t[38] = N),
      (t[39] = Vn),
      (t[40] = Hn),
      (t[41] = Un),
      (t[42] = pt),
      (t[43] = br))
    : (br = t[43]);
  let X = mr.map(br),
    Z = X.map(Jt),
    xr = new Set(X.filter(qt).map(Kt)),
    Sr = _e(Z, xr),
    Q = Y !== null && Y !== U && !W.isPending && W.error === null,
    Cr;
  t[44] === Y
    ? (Cr = t[45])
    : ((Cr = () => {
        Y !== null && nn((e) => ({ ...e, cursor: Y }));
      }),
      (t[44] = Y),
      (t[45] = Cr));
  let $ = Cr,
    wr;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wr = (e) =>
        mt((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        })),
      (t[46] = wr))
    : (wr = t[46]);
  let Tr = wr,
    Er;
  t[47] !== N || t[48] !== Bn
    ? ((Er = (e, t, n) => {
        (Bn(t, n), mt((t) => S(e, n, N, t)));
      }),
      (t[47] = N),
      (t[48] = Bn),
      (t[49] = Er))
    : (Er = t[49]);
  let Dr = Er,
    Or;
  t[50] !== Vn || t[51] !== Hn || t[52] !== Un || t[53] !== Dr
    ? ((Or = { enabled: Vn, isViewed: Hn, isStale: Un, setFileViewed: Dr }),
      (t[50] = Vn),
      (t[51] = Hn),
      (t[52] = Un),
      (t[53] = Dr),
      (t[54] = Or))
    : (Or = t[54]);
  let kr = Or,
    Ar = (e) => {
      let t = X.find((t) => A(t.fileDiff) === e);
      t !== void 0 && (t.collapsed === !0 && Tr(t.id), Zn(t.id));
    },
    jr = () => {
      (vt(_e(Z, xr) ? `expanded` : `folded`), mt(new Set()));
    },
    Mr = O.commits.toSorted(Gt),
    Nr = (e, t) => {
      if (!e || !ir) return;
      let n = t.item;
      if (n.type !== `diff`) return;
      let r = J.find((e) => et(e) === n.id);
      if (!r) return;
      let i = A(r),
        a = ot(r),
        o = ar.flatMap(Wt).find((e) => A(e) === i),
        s = (o && te(o, e, rr)) ?? te(r, e, rr);
      s !== null && Tt({ fileKey: n.id, path: i, oldPath: a === i ? null : a, ...s, range: e });
    },
    Pr = (e, t, n) => {
      let r = J.find((t) => et(t) === e.fileKey),
        i =
          r === void 0
            ? null
            : T({
                id: `pull-request-selection:${e.fileKey}:${e.range.start}:${e.range.end}`,
                sectionId: `pull-request:${O.number}`,
                sectionTitle: `PR #${O.number} review`,
                filePath: e.path,
                fileDiff: r,
                range: e.range,
                text: t,
              });
      (Tt(null), R(null), i !== null && n(i));
    },
    Fr;
  t[55] !== W || t[56] !== Y
    ? ((Fr = () =>
        Y === null
          ? null
          : (0, I.jsx)(`div`, {
              ref: Xn,
              className: `flex items-center justify-center gap-2 py-2 text-xs text-muted-foreground`,
              children:
                W.error === null
                  ? W.isPending
                    ? `Loading more files...`
                    : null
                  : (0, I.jsxs)(I.Fragment, {
                      children: [
                        (0, I.jsx)(`span`, {
                          children: `The rest of this diff could not be loaded.`,
                        }),
                        (0, I.jsx)(x, {
                          size: `xs`,
                          variant: `outline`,
                          onClick: () => W.refresh(),
                          children: `Retry`,
                        }),
                      ],
                    }),
            })),
      (t[55] = W),
      (t[56] = Y),
      (t[57] = Fr))
    : (Fr = t[57]);
  let Ir = Fr,
    Lr;
  t[58] === Tr
    ? (Lr = t[59])
    : ((Lr = (e) => {
        let t = e.collapsed === !0;
        return (0, I.jsx)(x, {
          size: `icon-micro`,
          variant: `ghost-muted`,
          "aria-expanded": !t,
          "aria-label": t ? `Expand diff` : `Collapse diff`,
          className: `mr-1`,
          onClick: (t) => {
            (t.stopPropagation(), Tr(e.id));
          },
          children: (0, I.jsx)(me, {
            className: `size-4`,
            icon: t ? lt.ChevronRight : lt.ChevronDown,
          }),
        });
      }),
      (t[58] = Tr),
      (t[59] = Lr));
  let Rr = Lr,
    zr = (e) => {
      if (e.type !== `diff`) return null;
      let { additions: t, deletions: n } = lr.get(e.id) ?? it([e.fileDiff]),
        r = A(e.fileDiff);
      if (t === 0 && n === 0) {
        let e = cr.get(r);
        e && ({ additions: t, deletions: n } = e);
      }
      return (0, I.jsx)(It, {
        fileKey: e.id,
        path: r,
        stat: (0, I.jsx)(We, { additions: t, deletions: n, className: `font-mono text-2xs` }),
      });
    },
    Br = {
      diffStyle: P === `split` ? `split` : `unified`,
      lineDiffType: `none`,
      overflow: F ? `wrap` : `scroll`,
      theme: tt(dt),
      preferredHighlighter: nt,
      themeType: dt,
      stickyHeaders: !0,
      loadDiffFiles: $n,
      enableGutterUtility: ir && z === null,
      enableLineSelection: ir && z === null,
      onGutterUtilityClick: Nr,
      onLineSelectionEnd: Nr,
    },
    Vr;
  t[60] !== Re || t[61] !== Et
    ? ((Vr = async (e, t) => {
        if (Et) return !1;
        Ot(!0);
        let n = await t();
        return (
          Ot(!1), n._tag === `Failure` ? (we.add({ type: `error`, title: e }), !1) : (Re(), !0)
        );
      }),
      (t[60] = Re),
      (t[61] = Et),
      (t[62] = Vr))
    : (Vr = t[62]);
  let Hr = Vr,
    Ur = (e) =>
      (0, I.jsx)(
        ke,
        {
          thread: e,
          workspaceRoot: O.workspaceRoot,
          canReply: tr.reply,
          canResolve: tr.resolve && Oe(O, e),
          canReact: O.capabilities.reactions === !0,
          environmentId: r,
          reference: f,
          pending: Et,
          fixPending: be === Ke({ kind: `thread`, thread: e }),
          fixLabel: rt,
          ...(je ? { onFix: () => je({ kind: `thread`, thread: e }) } : {}),
          onLoadMore: async (t) => {
            let n = await Pn({ environmentId: r, input: { ...f, threadId: e.id, cursor: t } });
            return n._tag === `Failure`
              ? (we.add({ type: `error`, title: `More comments could not be loaded` }), null)
              : n.value;
          },
          onReply: (t) =>
            Hr(`Reply could not be posted`, () =>
              On({ environmentId: r, input: { ...f, threadId: e.id, body: t } }),
            ),
          canEditComment: (e) =>
            Ee(O, { author: e.author, kind: `review-comment`, canEdit: e.canEdit }),
          onEditComment: (e, t) =>
            Hr(`The comment could not be saved`, () =>
              Mn({
                environmentId: r,
                input: { ...f, commentId: e, kind: `review-comment`, body: t },
              }),
            ),
          onToggleResolved: () =>
            void Hr(`The conversation could not be updated`, () =>
              An({ environmentId: r, input: { ...f, threadId: e.id, resolved: !e.isResolved } }),
            ),
          onReacted: Re,
        },
        `${f.projectId}#${f.number}:${e.id}`,
      ),
    Wr = (...e) => {
      let [t] = e;
      return (0, I.jsxs)(`div`, {
        className: `py-1 font-sans text-foreground`,
        children: [
          t.metadata.threads.map(Ur),
          t.metadata.pending.map((e) =>
            (0, I.jsx)(Pe, { comment: e, onRemove: () => En(Cn, e.id) }, e.id),
          ),
          t.metadata.draft && z && ir
            ? (0, I.jsx)(Ie, {
                kind: `draft`,
                rangeLabel: `${z.path}:${Ae(z.position).line}`,
                text: ``,
                submitLabel: nr ? `Add to review` : `Add to agent`,
                ...(nr && Le
                  ? {
                      secondaryAction: {
                        label: `Add to agent`,
                        onAction: (e) => Pr(z, e, (t) => Le({ comment: t, request: e })),
                      },
                    }
                  : {}),
                onCancel: () => {
                  (Tt(null), R(null));
                },
                onComment: (e) => {
                  nr
                    ? (Tn(Cn, {
                        id: Xe(),
                        path: z.path,
                        ...(z.oldPath === null ? {} : { oldPath: z.oldPath }),
                        ...(z.startPosition === void 0 ? {} : { startPosition: z.startPosition }),
                        position: z.position,
                        body: e,
                      }),
                      Tt(null),
                      R(null))
                    : Le && Pr(z, e, (t) => Le({ comment: t, request: e }));
                },
              })
            : null,
        ],
      });
    },
    Gr;
  t[63] === B ? (Gr = t[64]) : ((Gr = (e) => e.oid === B), (t[63] = B), (t[64] = Gr));
  let Kr = Mr.find(Gr),
    qr = Kr ? Kr.messageHeadline : `All commits`,
    Jr;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jr = (e) => {
        (xt(e), Tt(null), R(null));
      }),
      (t[65] = Jr))
    : (Jr = t[65]);
  let Yr = Jr,
    Xr;
  t[66] === gr
    ? (Xr = t[67])
    : ((Xr = gr
        ? (0, I.jsxs)(b, {
            children: [
              (0, I.jsx)(D, {
                render: (0, I.jsx)(`span`, { className: `flex shrink-0 items-center` }),
                children: (0, I.jsx)(c, {
                  "aria-label": `Some of this diff was not shown`,
                  className: `size-3.5 text-warning-foreground`,
                }),
              }),
              (0, I.jsx)(E, {
                side: `bottom`,
                children: `The host withheld part of this diff: a binary file, or a change too large to inline.`,
              }),
            ],
          })
        : null),
      (t[66] = gr),
      (t[67] = Xr));
  let Zr;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Zr = (0, I.jsxs)(b, {
        children: [
          (0, I.jsx)(D, {
            render: (0, I.jsx)(se, {
              render: (0, I.jsx)(x, { size: `icon-sm`, variant: `ghost` }),
              className: `@lg:hidden`,
              "aria-label": `Diff options`,
            }),
            children: (0, I.jsx)(h, { className: `size-3.5` }),
          }),
          (0, I.jsx)(E, { side: `top`, children: `Diff options` }),
        ],
      })),
      (t[68] = Zr))
    : (Zr = t[68]);
  let Qr;
  t[69] === Yr ? (Qr = t[70]) : ((Qr = (e) => Yr(e)), (t[69] = Yr), (t[70] = Qr));
  let $r;
  t[71] !== L || t[72] !== Qr
    ? (($r = (0, I.jsx)(g, {
        checked: L,
        onCheckedChange: Qr,
        children: `Hide whitespace changes`,
      })),
      (t[71] = L),
      (t[72] = Qr),
      (t[73] = $r))
    : ($r = t[73]);
  let ei;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ei = (e) => yt(e)), (t[74] = ei))
    : (ei = t[74]);
  let ti;
  t[75] === F
    ? (ti = t[76])
    : ((ti = (0, I.jsx)(g, { checked: F, onCheckedChange: ei, children: `Wrap lines` })),
      (t[75] = F),
      (t[76] = ti));
  let ni;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ni = (0, I.jsx)(oe, {})), (t[77] = ni))
    : (ni = t[77]);
  let ri, ii;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ri = (0, I.jsx)(le, { value: `stacked`, closeOnClick: !0, children: `Stacked` })),
      (ii = (0, I.jsx)(le, { value: `split`, closeOnClick: !0, children: `Split` })),
      (t[78] = ri),
      (t[79] = ii))
    : ((ri = t[78]), (ii = t[79]));
  let ai;
  t[80] === P
    ? (ai = t[81])
    : ((ai = (0, I.jsxs)(ie, { value: P, onValueChange: Vt, children: [ri, ii] })),
      (t[80] = P),
      (t[81] = ai));
  let oi;
  t[82] !== $r || t[83] !== ti || t[84] !== ai
    ? ((oi = (0, I.jsxs)(ee, {
        children: [Zr, (0, I.jsxs)(ae, { align: `end`, children: [$r, ti, ni, ai] })],
      })),
      (t[82] = $r),
      (t[83] = ti),
      (t[84] = ai),
      (t[85] = oi))
    : (oi = t[85]);
  let si = L ? `Show whitespace changes` : `Hide whitespace changes`,
    ci;
  t[86] === Yr ? (ci = t[87]) : ((ci = (e) => Yr(!!e)), (t[86] = Yr), (t[87] = ci));
  let li;
  t[88] !== L || t[89] !== si || t[90] !== ci
    ? ((li = (0, I.jsx)(st, {
        "aria-label": si,
        variant: `ghost`,
        size: `sm`,
        pressed: L,
        onPressedChange: ci,
      })),
      (t[88] = L),
      (t[89] = si),
      (t[90] = ci),
      (t[91] = li))
    : (li = t[91]);
  let ui;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ui = (0, I.jsx)(l, { className: `size-3.5` })), (t[92] = ui))
    : (ui = t[92]);
  let di;
  t[93] === li
    ? (di = t[94])
    : ((di = (0, I.jsx)(D, { render: li, children: ui })), (t[93] = li), (t[94] = di));
  let fi = L ? `Show whitespace changes` : `Hide whitespace changes`,
    pi;
  t[95] === fi
    ? (pi = t[96])
    : ((pi = (0, I.jsx)(E, { side: `top`, children: fi })), (t[95] = fi), (t[96] = pi));
  let mi;
  t[97] !== di || t[98] !== pi
    ? ((mi = (0, I.jsxs)(b, { children: [di, pi] })), (t[97] = di), (t[98] = pi), (t[99] = mi))
    : (mi = t[99]);
  let hi;
  t[100] === P ? (hi = t[101]) : ((hi = [P]), (t[100] = P), (t[101] = hi));
  let gi;
  t[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gi = (0, I.jsx)(st, {
        "aria-label": `Stacked diff view`,
        value: `stacked`,
        children: (0, I.jsx)(d, { className: `size-3.5` }),
      })),
      (t[102] = gi))
    : (gi = t[102]);
  let _i;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_i = (0, I.jsx)(st, {
        "aria-label": `Split diff view`,
        value: `split`,
        children: (0, I.jsx)(u, { className: `size-3.5` }),
      })),
      (t[103] = _i))
    : (_i = t[103]);
  let vi;
  t[104] === hi
    ? (vi = t[105])
    : ((vi = (0, I.jsxs)(Qe, {
        "aria-label": `Diff layout`,
        className: `shrink-0`,
        variant: `segmented`,
        value: hi,
        onValueChange: Bt,
        children: [gi, _i],
      })),
      (t[104] = hi),
      (t[105] = vi));
  let yi = F ? `Disable diff line wrapping` : `Enable diff line wrapping`,
    bi;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bi = (e) => {
        yt(!!e);
      }),
      (t[106] = bi))
    : (bi = t[106]);
  let xi;
  t[107] !== yi || t[108] !== F
    ? ((xi = (0, I.jsx)(st, {
        "aria-label": yi,
        variant: `ghost`,
        size: `sm`,
        pressed: F,
        onPressedChange: bi,
      })),
      (t[107] = yi),
      (t[108] = F),
      (t[109] = xi))
    : (xi = t[109]);
  let Si;
  t[110] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Si = (0, I.jsx)(o, { className: `size-3.5` })), (t[110] = Si))
    : (Si = t[110]);
  let Ci;
  t[111] === xi
    ? (Ci = t[112])
    : ((Ci = (0, I.jsx)(D, { render: xi, children: Si })), (t[111] = xi), (t[112] = Ci));
  let wi = F ? `Disable line wrapping` : `Enable line wrapping`,
    Ti;
  t[113] === wi
    ? (Ti = t[114])
    : ((Ti = (0, I.jsx)(E, { side: `top`, children: wi })), (t[113] = wi), (t[114] = Ti));
  let Ei;
  t[115] !== Ci || t[116] !== Ti
    ? ((Ei = (0, I.jsxs)(b, { children: [Ci, Ti] })), (t[115] = Ci), (t[116] = Ti), (t[117] = Ei))
    : (Ei = t[117]);
  let Di;
  t[118] !== mi || t[119] !== vi || t[120] !== Ei
    ? ((Di = (0, I.jsxs)(`div`, {
        className: `hidden items-center gap-1 @lg:flex`,
        children: [mi, vi, Ei],
      })),
      (t[118] = mi),
      (t[119] = vi),
      (t[120] = Ei),
      (t[121] = Di))
    : (Di = t[121]);
  let Oi;
  t[122] !== Sr || t[123] !== Z.length || t[124] !== jr
    ? ((Oi =
        Z.length > 0
          ? (0, I.jsxs)(b, {
              children: [
                (0, I.jsx)(D, {
                  render: (0, I.jsx)(x, {
                    type: `button`,
                    size: `icon-sm`,
                    variant: `ghost`,
                    "aria-label": Sr ? `Expand all files` : `Collapse all files`,
                    onClick: jr,
                  }),
                  children: (0, I.jsx)(me, {
                    className: `size-3.5`,
                    icon: Sr ? lt.ChevronsUpDown : lt.ChevronsDownUp,
                  }),
                }),
                (0, I.jsx)(E, {
                  side: `top`,
                  children: Sr ? `Expand all files` : `Collapse all files`,
                }),
              ],
            })
          : null),
      (t[122] = Sr),
      (t[123] = Z.length),
      (t[124] = jr),
      (t[125] = Oi))
    : (Oi = t[125]);
  let ki;
  t[126] !== Z.length || t[127] !== St || t[128] !== Ct
    ? ((ki =
        Z.length > 0
          ? (0, I.jsxs)(b, {
              children: [
                (0, I.jsx)(D, {
                  render: (0, I.jsx)(st, {
                    "aria-label": St ? `Hide file tree` : `Show file tree`,
                    variant: `ghost`,
                    size: `sm`,
                    pressed: St,
                    onPressedChange: (e) => Ct(!!e),
                  }),
                  children: (0, I.jsx)(p, { className: `size-3.5` }),
                }),
                (0, I.jsx)(E, { side: `top`, children: St ? `Hide file tree` : `Show file tree` }),
              ],
            })
          : null),
      (t[126] = Z.length),
      (t[127] = St),
      (t[128] = Ct),
      (t[129] = ki))
    : (ki = t[129]);
  let Ai;
  t[130] !== oi || t[131] !== Di || t[132] !== Oi || t[133] !== ki
    ? ((Ai = (0, I.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [oi, Di, Oi, ki],
      })),
      (t[130] = oi),
      (t[131] = Di),
      (t[132] = Oi),
      (t[133] = ki),
      (t[134] = Ai))
    : (Ai = t[134]);
  let ji = (0, I.jsxs)(`div`, {
      className: `@container flex h-10 min-h-10 shrink-0 items-center justify-between gap-2 border-b border-border/60 bg-background px-4 text-xs text-muted-foreground`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 items-center gap-3`,
          children: [
            Mr.length > 0
              ? (0, I.jsxs)(ee, {
                  children: [
                    (0, I.jsxs)(se, {
                      render: (0, I.jsx)(x, { size: `xs`, variant: `secondary` }),
                      className: `min-w-0 max-w-64`,
                      "aria-label": `Diff scope: ${qr}`,
                      children: [
                        (0, I.jsx)(`span`, { className: `truncate`, children: qr }),
                        (0, I.jsx)(i, { className: `size-3.5 shrink-0 opacity-70` }),
                      ],
                    }),
                    (0, I.jsxs)(ae, {
                      align: `start`,
                      className: `max-w-[min(28rem,calc(100vw-2rem))]`,
                      children: [
                        (0, I.jsxs)(ie, {
                          value: B ?? `all`,
                          onValueChange: (e) => pe(e === `all` ? null : e),
                          children: [
                            (0, I.jsx)(le, {
                              value: `all`,
                              closeOnClick: !0,
                              children: (0, I.jsx)(`span`, { children: `All commits` }),
                            }),
                            Mr.slice(0, ht).map(Ut),
                          ],
                        }),
                        Mr.length > ht
                          ? (0, I.jsx)(ce, {
                              closeOnClick: !1,
                              onClick: () => gt(Ht),
                              children: (0, I.jsxs)(`span`, {
                                className: `text-muted-foreground`,
                                children: [`Show more (`, Mr.length - ht, ` left)`],
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                })
              : null,
            (0, I.jsxs)(Ge, {
              children: [
                (0, I.jsxs)(`span`, {
                  className: `shrink-0 tabular-nums`,
                  children: [
                    J.length,
                    ` `,
                    J.length === 1 ? `file` : `files`,
                    Y === null ? `` : `+`,
                  ],
                }),
                zn.enabled && J.length > 0
                  ? (0, I.jsxs)(`span`, {
                      className: `flex min-w-0 items-center gap-1 tabular-nums`,
                      children: [
                        (0, I.jsxs)(`span`, {
                          className: `shrink-0`,
                          children: [or.filter(Hn).length, ` / `, J.length],
                        }),
                        (0, I.jsx)(`span`, {
                          className: `truncate`,
                          children: In === `environment` ? `viewed in ${de}` : `viewed`,
                        }),
                        In === `environment`
                          ? (0, I.jsxs)(b, {
                              children: [
                                (0, I.jsx)(D, {
                                  render: (0, I.jsx)(`span`, {
                                    className: `flex shrink-0 items-center`,
                                  }),
                                  children: (0, I.jsx)(s, {
                                    "aria-label": `These ticks are kept here, not on the host`,
                                    className: `text-muted-foreground size-3.5`,
                                  }),
                                }),
                                (0, I.jsx)(E, {
                                  side: `bottom`,
                                  children: `This host keeps no shared record of which files you have read, so these ticks are kept by this environment. They follow you between the apps connected to it, but the host's own web UI will not show them.`,
                                }),
                              ],
                            })
                          : null,
                        zn.error === null
                          ? null
                          : (0, I.jsxs)(b, {
                              children: [
                                (0, I.jsx)(D, {
                                  render: (0, I.jsx)(`span`, {
                                    className: `flex shrink-0 items-center`,
                                  }),
                                  children: (0, I.jsx)(c, {
                                    "aria-label": `Your ticks could not be read`,
                                    className: `size-3.5 text-warning-foreground`,
                                  }),
                                }),
                                (0, I.jsxs)(E, {
                                  side: `bottom`,
                                  children: [
                                    `The boxes below are whatever was last read, and empty if nothing has been read yet. `,
                                    zn.error,
                                  ],
                                }),
                              ],
                            }),
                        zn.truncated
                          ? (0, I.jsxs)(b, {
                              children: [
                                (0, I.jsx)(D, {
                                  render: (0, I.jsx)(`span`, {
                                    className: `flex shrink-0 items-center`,
                                  }),
                                  children: (0, I.jsx)(c, {
                                    "aria-label": `This count covers only part of the change`,
                                    className: `size-3.5 text-warning-foreground`,
                                  }),
                                }),
                                (0, I.jsx)(E, {
                                  side: `bottom`,
                                  children: `This change has more files than the host will report ticks for in one read, so the count is short and some boxes below start empty.`,
                                }),
                              ],
                            })
                          : null,
                      ],
                    })
                  : null,
                Xr,
                B !== null && tr.inlineComment
                  ? (0, I.jsxs)(b, {
                      children: [
                        (0, I.jsx)(D, {
                          render: (0, I.jsx)(`span`, { className: `flex shrink-0 items-center` }),
                          children: (0, I.jsx)(m, {
                            "aria-label": `Line comments are written from the whole change`,
                            className: `size-3.5`,
                          }),
                        }),
                        (0, I.jsx)(E, {
                          side: `bottom`,
                          children: `A comment is anchored to the whole change, so switch to All commits to write one.`,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        }),
        Ai,
      ],
    }),
    Mi,
    Ni;
  (t[135] !== Q || t[136] !== $ || t[137] !== Yn
    ? ((Mi = () => {
        if (Yn === null || !Q) return;
        let e = new IntersectionObserver(
          (e) => {
            e.some(zt) && $();
          },
          { rootMargin: `240px` },
        );
        return (e.observe(Yn), () => e.disconnect());
      }),
      (Ni = [Q, $, Yn]),
      (t[135] = Q),
      (t[136] = $),
      (t[137] = Yn),
      (t[138] = Mi),
      (t[139] = Ni))
    : ((Mi = t[138]), (Ni = t[139])),
    (0, j.useEffect)(Mi, Ni));
  let Pi;
  t[140] !== Q || t[141] !== X || t[142] !== $ || t[143] !== Ar || t[144] !== M
    ? ((Pi = () => {
        M !== null &&
          Qn.current !== M.nonce &&
          (X.some((e) => A(e.fileDiff) === M.path)
            ? ((Qn.current = M.nonce), Ar(M.path))
            : Q && $());
      }),
      (t[140] = Q),
      (t[141] = X),
      (t[142] = $),
      (t[143] = Ar),
      (t[144] = M),
      (t[145] = Pi))
    : (Pi = t[145]);
  let Fi = (0, j.useEffectEvent)(Pi),
    Ii;
  t[146] === Fi
    ? (Ii = t[147])
    : ((Ii = () => {
        Fi();
      }),
      (t[146] = Fi),
      (t[147] = Ii));
  let Li;
  (t[148] !== Q || t[149] !== X || t[150] !== M
    ? ((Li = [Q, X, M]), (t[148] = Q), (t[149] = X), (t[150] = M), (t[151] = Li))
    : (Li = t[151]),
    (0, j.useEffect)(Ii, Li));
  let Ri, zi;
  (t[152] !== B || t[153] !== pe || t[154] !== Kr
    ? ((Ri = () => {
        B !== null && Kr === void 0 && pe(null);
      }),
      (zi = [B, pe, Kr]),
      (t[152] = B),
      (t[153] = pe),
      (t[154] = Kr),
      (t[155] = Ri),
      (t[156] = zi))
    : ((Ri = t[155]), (zi = t[156])),
    (0, j.useEffect)(Ri, zi));
  let Bi = (e) =>
      (0, I.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col`,
        children: [
          ji,
          (0, I.jsx)(`div`, { ref: n, className: `min-h-0 flex-1 overflow-auto`, children: e }),
        ],
      }),
    Vi = ne.get(O.provider).changeRequest.singular;
  if (W.isPending && H.length === 0) {
    let e = `Loading ${Vi} diff...`,
      n;
    return (
      t[157] === e
        ? (n = t[158])
        : ((n = (0, I.jsx)(Ne, { label: e })), (t[157] = e), (t[158] = n)),
      Bi(n)
    );
  }
  if (W.error && H.length === 0) {
    let e;
    t[159] === W ? (e = t[160]) : ((e = () => W.refresh()), (t[159] = W), (t[160] = e));
    let n;
    return (
      t[161] !== O.provider || t[162] !== O.url || t[163] !== W.error || t[164] !== e
        ? ((n = (0, I.jsx)(bt, { error: W.error, provider: O.provider, url: O.url, onRetry: e })),
          (t[161] = O.provider),
          (t[162] = O.url),
          (t[163] = W.error),
          (t[164] = e),
          (t[165] = n))
        : (n = t[165]),
      Bi(n)
    );
  }
  if (vr !== null) return Bi(vr);
  if (X.length === 0 && Y === null) {
    let e = B === null ? `This ${Vi} has no file changes.` : `This commit has no file changes.`,
      n;
    return (
      t[166] === e
        ? (n = t[167])
        : ((n = (0, I.jsx)(`p`, {
            className: `px-4 py-5 text-sm text-muted-foreground`,
            children: e,
          })),
          (t[166] = e),
          (t[167] = n)),
      Bi(n)
    );
  }
  let Hi;
  t[168] === fr ? (Hi = t[169]) : ((Hi = (e) => !fr.has(e.id)), (t[168] = fr), (t[169] = Hi));
  let Ui = O.reviewThreads.filter(Hi),
    Wi = new Map();
  for (let e of Ui) {
    let t = Wi.get(e.path);
    t ? t.push(e) : Wi.set(e.path, [e]);
  }
  let Gi;
  t[170] !== X || t[171] !== Tr
    ? ((Gi = (e) => {
        let t = e.nativeEvent.composedPath?.() ?? [];
        for (let e of t)
          if (e instanceof HTMLElement) {
            if (
              e instanceof HTMLButtonElement ||
              e instanceof HTMLAnchorElement ||
              e.hasAttribute(`data-viewed-toggle`)
            )
              return;
            if (e.hasAttribute(`data-diffs-header`)) {
              let t = e.querySelector(`[data-title]`)?.textContent?.trim();
              if (t === void 0 || t === ``) return;
              let n = X.find((e) => A(e.fileDiff) === t);
              n !== void 0 && Tr(n.id);
              return;
            }
          }
      }),
      (t[170] = X),
      (t[171] = Tr),
      (t[172] = Gi))
    : (Gi = t[172]);
  let Ki;
  return (
    t[173] === N
      ? (Ki = t[174])
      : ((Ki = (e) => mt((t) => S(e.id, !1, N, t))), (t[173] = N), (t[174] = Ki)),
    (0, I.jsxs)(`div`, {
      className: `flex h-full min-h-0 flex-col`,
      children: [
        ji,
        Wi.size > 0
          ? (0, I.jsx)(`div`, {
              className: `shrink-0 border-b border-border/60`,
              children: (0, I.jsxs)(Ue, {
                open: Nt,
                onOpenChange: Lt,
                children: [
                  (0, I.jsx)(`h2`, {
                    children: (0, I.jsxs)(He, {
                      className: `flex w-full items-center gap-1.5 px-4 py-2 text-left text-xs text-muted-foreground`,
                      children: [
                        (0, I.jsx)(`span`, {
                          children:
                            Y === null
                              ? `Conversations not on the current diff`
                              : `Conversations not on the diff loaded so far`,
                        }),
                        (0, I.jsx)(a, {
                          "aria-hidden": !0,
                          className: ue(`size-3.5 transition-transform`, Nt && `rotate-90`),
                        }),
                        (0, I.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: `tabular-nums`,
                          children: Ui.length,
                        }),
                        (0, I.jsx)(`span`, {
                          className: `sr-only`,
                          children:
                            Ui.length === 1 ? `1 conversation` : `${Ui.length} conversations`,
                        }),
                      ],
                    }),
                  }),
                  (0, I.jsx)(Ve, {
                    children: (0, I.jsx)(`div`, {
                      className: `max-h-64 space-y-3 overflow-auto px-4 pb-3`,
                      children: [...Wi].map((e) => {
                        let [t, n] = e;
                        return (0, I.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, I.jsxs)(b, {
                                children: [
                                  (0, I.jsx)(D, {
                                    render: (0, I.jsx)(`p`, {
                                      className: `truncate px-3 text-xs text-muted-foreground`,
                                      children: t,
                                    }),
                                  }),
                                  (0, I.jsx)(E, { side: `top`, children: t }),
                                ],
                              }),
                              (0, I.jsx)(`div`, {
                                className: `mt-1 space-y-2`,
                                children: n.map((e) =>
                                  (0, I.jsxs)(
                                    `div`,
                                    {
                                      children: [
                                        e.line === null
                                          ? null
                                          : (0, I.jsxs)(`p`, {
                                              className: `px-3 text-xs text-muted-foreground`,
                                              children: [`Line `, e.line],
                                            }),
                                        Ur(e),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null,
        (0, I.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 overflow-hidden`,
          children: [
            (0, I.jsx)(`div`, {
              className: `relative min-h-0 min-w-0 flex-1`,
              onClickCapture: Gi,
              children: (0, I.jsx)(Ft, {
                value: kr,
                children: (0, I.jsx)(De, {
                  className: `@container h-full overflow-auto [scrollbar-gutter:stable]`,
                  containerRef: n,
                  viewerRef: an,
                  items: X,
                  selectedLines: wt,
                  onSelectedLinesChange: R,
                  options: Br,
                  renderCodeViewFooter: Ir,
                  renderHeaderPrefix: Rr,
                  renderHeaderMetadata: zr,
                  renderAnnotation: Wr,
                  onRevealSearchMatch: Ki,
                  unsafeCSSExtra: jt,
                }),
              }),
            }),
            St
              ? (0, I.jsx)(`aside`, {
                  className: `flex w-[min(20rem,40%)] min-w-48 shrink-0 border-l border-border/60`,
                  children: (0, I.jsx)(ve, {
                    ariaLabel: `${C(Vi)} #${O.number} files`,
                    entries: ur,
                    onSelectFile: Ar,
                    footer:
                      Y === null
                        ? null
                        : (0, I.jsx)(`div`, {
                            className: `shrink-0 border-t border-border/60 p-2`,
                            children: (0, I.jsx)(x, {
                              type: `button`,
                              size: `xs`,
                              variant: `outline`,
                              className: `w-full`,
                              disabled: W.isPending,
                              onClick: W.error === null ? $ : () => W.refresh(),
                              children:
                                W.error === null
                                  ? W.isPending
                                    ? `Loading more files...`
                                    : `Load more files`
                                  : `Retry`,
                            }),
                          }),
                  }),
                })
              : null,
          ],
        }),
        yr,
      ],
    })
  );
}
function zt(e) {
  return e.isIntersecting;
}
function Bt(e) {
  let t = e[0];
  (t === `stacked` || t === `split`) && be({ diffLayout: t });
}
function Vt(e) {
  (e === `stacked` || e === `split`) && be({ diffLayout: e });
}
function Ht(e) {
  return e + kt;
}
function Ut(e) {
  return (0, I.jsx)(
    le,
    {
      value: e.oid,
      closeOnClick: !0,
      children: (0, I.jsxs)(`span`, {
        className: `flex items-center gap-2`,
        children: [
          (0, I.jsxs)(b, {
            children: [
              (0, I.jsx)(D, {
                render: (0, I.jsx)(`span`, {
                  className: `min-w-0 truncate`,
                  children: e.messageHeadline,
                }),
              }),
              (0, I.jsx)(E, { side: `top`, children: e.messageHeadline }),
            ],
          }),
          (0, I.jsx)(`span`, {
            className: `ml-auto shrink-0 font-mono text-xs text-muted-foreground`,
            children: e.oid.slice(0, 7),
          }),
        ],
      }),
    },
    e.oid,
  );
}
function Wt(e) {
  return e?.kind === `files` ? e.sourceFiles : [];
}
function Gt(e, t) {
  return Date.parse(t.committedDate) - Date.parse(e.committedDate);
}
function Kt(e) {
  return e.id;
}
function qt(e) {
  return e.collapsed === !0;
}
function Jt(e) {
  return e.id;
}
function Yt(e) {
  return (0, I.jsxs)(
    `div`,
    {
      className: `space-y-2`,
      children: [
        (0, I.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.reason }),
        (0, I.jsx)(`pre`, {
          className: `whitespace-pre-wrap break-words font-mono text-xs`,
          children: e.text,
        }),
      ],
    },
    `${e.reason}:${e.text.slice(0, 64)}`,
  );
}
function Xt(e) {
  return (0, I.jsxs)(
    `div`,
    {
      className: `space-y-2`,
      children: [
        (0, I.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.reason }),
        (0, I.jsx)(`pre`, {
          className: `whitespace-pre-wrap break-words font-mono text-xs`,
          children: e.text,
        }),
      ],
    },
    `${e.reason}:${e.text.slice(0, 64)}`,
  );
}
function Zt(e) {
  return e?.kind === `raw` ? [e] : [];
}
function Qt(e) {
  return e?.kind === `raw`;
}
function $t(e) {
  return e.truncated;
}
function en(e) {
  let { side: t, lineNumber: n, metadata: r } = e;
  return `${t}:${n}:${r.draft ? `d` : ``}:${r.pending.map(an).join(`,`)}:${r.threads.map(tn).join(`,`)}`;
}
function tn(e) {
  return `${e.id}:${e.isResolved ? `r` : ``}:${e.isOutdated ? `o` : ``}:${e.comments.map(nn).join(`;`)}`;
}
function nn(e) {
  return `${e.id}:${e.author?.login ?? ``}:${e.createdAt}:${e.body}:${(e.reactions ?? []).map(rn).join(`,`)}`;
}
function rn(e) {
  return `${e.content}:${e.count}:${e.viewerHasReacted ? `v` : ``}`;
}
function an(e) {
  return `${e.id}:${e.body}`;
}
function on(e) {
  return {
    side: je(e.side),
    lineNumber: e.line,
    metadata: { threads: e.threads, pending: e.pending, draft: e.draft },
  };
}
function sn(e) {
  return e?.kind === `files` ? e.files.map((t, n) => [et(t), it([e.sourceFiles[n] ?? t])]) : [];
}
function cn(e) {
  return e.omittedFileStats.map(ln);
}
function ln(e) {
  return [e.path, e];
}
function un(e) {
  return A(e);
}
function dn(e) {
  return e?.kind === `files` ? F(e.files) : [];
}
function fn(e) {
  return { ...e, cursor: null };
}
function pn(e) {
  return e.removeComment;
}
function mn(e) {
  return e.addComment;
}
function hn() {
  return new Set();
}
function gn(e) {
  return {
    diffFilesCollapsed: e.diffFilesCollapsed,
    diffIgnoreWhitespace: e.diffIgnoreWhitespace,
    diffLayout: e.diffLayout,
    wordWrap: e.wordWrap,
  };
}
export { Rt as default };
//# sourceMappingURL=PullRequestCodeTab-DDLB-fSz.js.map
