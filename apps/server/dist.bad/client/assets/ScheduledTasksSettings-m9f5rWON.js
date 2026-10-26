import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i } from "./search-BrluOr7L.js";
import { n as a, t as o } from "./inbox-B-y9oYeq.js";
import { t as s } from "./copy-Bc5Lby2a.js";
import { t as c } from "./ellipsis-C2hnEJ6l.js";
import { t as l } from "./pencil-BZMRYgyy.js";
import { t as u } from "./plus-B20TfFan.js";
import { t as d } from "./trash-2-Dt6v2wPw.js";
import {
  Bn as f,
  Dr as p,
  Gv as m,
  Ht as h,
  JC as g,
  Nt as _,
  Qn as v,
  Vn as y,
  Wn as b,
  Ws as x,
  Wt as S,
  Xl as C,
  Yt as w,
  Zn as T,
  Zp as E,
  _r as D,
  cp as O,
  hm as k,
  ir as A,
  iu as j,
  jc as ee,
  lr as M,
  mr as N,
  nr as P,
  rd as F,
  t as I,
} from "./utils-CPoejuy5.js";
import { T as L } from "./entities-CgVpsCCl.js";
import { Rt as R } from "./runtime-CY2dlMEg.js";
import { a as z, c as B, o as te, s as V, t as H } from "./select-CBCDohvC.js";
import { D as U, E as ne, m as re } from "./useSettings-N-JG2LFZ.js";
import { m as W, t as G } from "./server-3D32GveR.js";
import { l as K, r as ie, u as ae } from "./session-0UrRHIau.js";
import { n as oe, t as q } from "./query-LKSVgBQH.js";
import { t as se } from "./use-atom-command-DGAuqAck.js";
import { c as J } from "./localApi-CWy6n-K6.js";
import { g as Y, i as ce } from "./toast-B4KPIJDZ.js";
import { n as X } from "./useNavigate-Dq4t21kA.js";
import { t as Z } from "./link-BAk08nHo.js";
import { t as le } from "./toastHelpers-CSQRKo4F.js";
import { i as ue, l as de } from "./queries-B4W1CgUo.js";
import { n as fe } from "./vcs-DOY0Hs9B.js";
import { o as pe } from "./timestampFormat-BBUHLb6E.js";
import { t as me } from "./textarea-C9Xds9D7.js";
import {
  a as he,
  c as ge,
  l as _e,
  n as ve,
  o as ye,
  r as be,
  s as xe,
  t as Se,
} from "./combobox-HagV04Wz.js";
import { n as Ce } from "./scroll-area-B6188Bq9.js";
import {
  a as we,
  c as Te,
  i as Ee,
  l as De,
  n as Oe,
  o as ke,
  s as Ae,
  u as je,
} from "./dialog-BjeWpelT.js";
import { a as Me, i as Ne, o as Pe, r as Fe, t as Ie } from "./empty-CgJfsiJ2.js";
import { n as Le } from "./EnvironmentMachineIcon-M7J6_xOZ.js";
import { c as Re } from "./settingsScope-ohK4TuKq.js";
import { n as ze } from "./primaryCloudLinkState-DUpCgVuM.js";
import { n as Be, t as Ve } from "./ConnectionStatusDot-Cd6v52Ns.js";
import {
  a as He,
  c as Ue,
  d as We,
  f as Ge,
  i as Ke,
  l as qe,
  n as Je,
  p as Ye,
  r as Xe,
  s as Ze,
  t as Qe,
  u as $e,
} from "./scheduledTasksSettings.logic-DI4UiHbD.js";
import {
  $c as et,
  Bs as tt,
  Gr as nt,
  Mi as rt,
  Rs as it,
  Sl as at,
  ai as ot,
  ll as st,
  xi as ct,
  zs as lt,
} from "./main-BZa0O6xN.js";
import {
  T as ut,
  a as dt,
  i as ft,
  n as pt,
  p as mt,
  s as ht,
  w as gt,
  x as _t,
} from "./settingsLayout-2i87rQY9.js";
import { n as vt, t as yt } from "./EnvironmentRow-BYtbjHf6.js";
import { t as bt } from "./ProviderModelPicker-5TbK_TR9.js";
var Q = e(t(), 1),
  xt = n();
function St(e, t) {
  if (e.url !== null) return { address: e.url, copyable: !0, note: null };
  if (t === null)
    return {
      address: e.path,
      copyable: !1,
      note: `Link this environment to T3 Connect for a public URL.`,
    };
  let n = new URL(e.path, t);
  return {
    address: n.href,
    copyable: !0,
    note: F(n.hostname)
      ? `Only this computer can call this address. Link T3 Connect for a public URL.`
      : `Works wherever this environment's address is reachable, for example over Tailscale or your own proxy. Link T3 Connect for a public URL.`,
  };
}
var $ = e(r(), 1);
function Ct(e) {
  let t = (0, xt.c)(69),
    {
      items: n,
      filteredItems: r,
      value: i,
      query: a,
      resultsQuery: o,
      onQueryChange: s,
      open: c,
      onOpenChange: l,
      onSelectItem: u,
      hasNextPage: d,
      isFetchingNextPage: p,
      onLoadNext: m,
      statusText: h,
      originControl: g,
      popupProps: _,
      renderItem: v,
      getItemType: x,
      children: S,
    } = e,
    C = (0, Q.useRef)(null),
    w = (0, Q.useId)(),
    T = (0, Q.useRef)(null),
    E = (0, Q.useRef)(null),
    D;
  t[0] === l
    ? (D = t[1])
    : ((D = (e) => {
        ((E.current = null), e || (C.current = null), l(e));
      }),
      (t[0] = l),
      (t[1] = D));
  let O = D,
    [k, A] = (0, Q.useState)(!1),
    [j, ee] = (0, Q.useState)(!1),
    M;
  t[2] !== d || t[3] !== p || t[4] !== m
    ? ((M = () => {
        d && !p && m();
      }),
      (t[2] = d),
      (t[3] = p),
      (t[4] = m),
      (t[5] = M))
    : (M = t[5]);
  let N = M,
    P;
  t[6] !== N || t[7] !== d || t[8] !== p || t[9] !== c
    ? ((P = () => {
        let e = T.current;
        if (!e) return;
        let t = E.current;
        ((E.current = e.scrollTop),
          c &&
            d &&
            !p &&
            de({
              previousScrollTop: t,
              scrollTop: e.scrollTop,
              scrollHeight: e.scrollHeight,
              clientHeight: e.clientHeight,
            }) &&
            N());
      }),
      (t[6] = N),
      (t[7] = d),
      (t[8] = p),
      (t[9] = c),
      (t[10] = P))
    : (P = t[10]);
  let F = P,
    L = (0, Q.useRef)(null),
    R;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => {
        let e = L.current?.getScrollableNode?.();
        if (!(e instanceof HTMLElement)) return;
        T.current = e;
        let t = Math.max(0, e.scrollHeight - e.clientHeight);
        (A(e.scrollTop > 1), ee(t - e.scrollTop > 1));
      }),
      (t[11] = R))
    : (R = t[11]);
  let z = R,
    B,
    te;
  (t[12] === c
    ? ((B = t[13]), (te = t[14]))
    : ((B = () => {
        if (!c) return;
        let e = 0,
          t = requestAnimationFrame(() => {
            (z(), (e = requestAnimationFrame(z)));
          });
        return () => {
          (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
      }),
      (te = [c, z]),
      (t[12] = c),
      (t[13] = B),
      (t[14] = te)),
    (0, Q.useLayoutEffect)(B, te));
  let V = (0, Q.useRef)(null),
    H,
    U;
  (t[15] !== c || t[16] !== o
    ? ((H = () => {
        c
          ? V.current !== o &&
            ((V.current = o), L.current?.scrollToOffset?.({ offset: 0, animated: !1 }))
          : (V.current = null);
      }),
      (U = [o, c]),
      (t[15] = c),
      (t[16] = o),
      (t[17] = H),
      (t[18] = U))
    : ((H = t[17]), (U = t[18])),
    (0, Q.useEffect)(H, U));
  let ne;
  t[19] === c
    ? (ne = t[20])
    : ((ne = (e, t) => {
        ((C.current = typeof e == `string` ? e : null),
          !(!c || t.index < 0 || t.reason !== `keyboard`) &&
            L.current?.scrollIndexIntoView?.({ index: t.index, animated: !1 }));
      }),
      (t[19] = c),
      (t[20] = ne));
  let re;
  t[21] === s ? (re = t[22]) : ((re = (e) => s(e.target.value)), (t[21] = s), (t[22] = re));
  let W;
  t[23] !== r || t[24] !== u
    ? ((W = (e) => {
        if (e.key !== `Enter` || e.nativeEvent.isComposing || e.keyCode === 229) return;
        let t = C.current;
        t !== null &&
          r.includes(t) &&
          (e.preventBaseUIHandler?.(),
          e.preventDefault(),
          e.stopPropagation(),
          (C.current = null),
          u(t));
      }),
      (t[23] = r),
      (t[24] = u),
      (t[25] = W))
    : (W = t[25]);
  let G;
  t[26] !== a || t[27] !== re || t[28] !== W
    ? ((G = (0, $.jsx)(xe, {
        placeholder: `Search refs...`,
        value: a,
        onChange: re,
        onKeyDown: W,
      })),
      (t[26] = a),
      (t[27] = re),
      (t[28] = W),
      (t[29] = G))
    : (G = t[29]);
  let K;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(ve, { children: `No refs found.` })), (t[30] = K))
    : (K = t[30]);
  let ie;
  t[31] === x ? (ie = t[32]) : ((ie = x ? { getItemType: x } : {}), (t[31] = x), (t[32] = ie));
  let ae;
  t[33] === v
    ? (ae = t[34])
    : ((ae = (e) => {
        let { item: t, index: n } = e;
        return v(t, n);
      }),
      (t[33] = v),
      (t[34] = ae));
  let oe;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        (z(), (E.current = T.current?.scrollTop ?? null));
      }),
      (t[35] = oe))
    : (oe = t[35]);
  let q;
  t[36] === F
    ? (q = t[37])
    : ((q = () => {
        (z(), F());
      }),
      (t[36] = F),
      (t[37] = q));
  let se;
  t[38] !== j || t[39] !== k
    ? ((se = I(
        `min-h-0 max-h-56 scrollbar-gutter-stable overflow-x-hidden overscroll-y-contain ps-1 pe-0 py-2`,
        Ce({ top: k, bottom: j }),
      )),
      (t[38] = j),
      (t[39] = k),
      (t[40] = se))
    : (se = t[40]);
  let J;
  t[41] !== r || t[42] !== ie || t[43] !== ae || t[44] !== q || t[45] !== se
    ? ((J = (0, $.jsx)(`div`, {
        className: `relative flex min-h-0 w-full max-h-56 flex-1 flex-col overflow-hidden`,
        children: (0, $.jsx)(he, {
          className: `flex size-full min-h-0 min-w-0 flex-col`,
          children: (0, $.jsx)(nt, {
            ref: L,
            data: r,
            keyExtractor: wt,
            ...ie,
            renderItem: ae,
            estimatedItemSize: 28,
            drawDistance: 336,
            onLayout: oe,
            onScroll: q,
            className: se,
          }),
        }),
      })),
      (t[41] = r),
      (t[42] = ie),
      (t[43] = ae),
      (t[44] = q),
      (t[45] = se),
      (t[46] = J))
    : (J = t[46]);
  let Y;
  t[47] !== g || t[48] !== w
    ? ((Y = g
        ? (0, $.jsxs)(f, {
            children: [
              (0, $.jsx)(b, {
                render: (0, $.jsxs)(`label`, {
                  htmlFor: w,
                  className: `flex cursor-pointer items-center justify-between gap-3 border-t border-border/60 px-3 py-2 text-xs`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `flex min-w-0 items-center gap-1.5 font-medium text-muted-foreground`,
                      children: [
                        (0, $.jsx)(et, { "aria-hidden": `true`, className: `size-3 shrink-0` }),
                        (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children: `Start from remote`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(it, {
                      id: w,
                      checked: g.checked,
                      size: `sm`,
                      "aria-label": `Start worktree from remote`,
                      onCheckedChange: (e) => g.onCheckedChange(!!e),
                    }),
                  ],
                }),
              }),
              (0, $.jsx)(y, {
                side: `top`,
                className: `max-w-72 whitespace-normal`,
                children: `Uses the latest commit of the base branch’s tracked remote branch, even if its name differs. Otherwise uses the same-named branch on origin. Uses your local branch if that remote branch is missing.`,
              }),
            ],
          })
        : null),
      (t[47] = g),
      (t[48] = w),
      (t[49] = Y))
    : (Y = t[49]);
  let ce;
  t[50] === h
    ? (ce = t[51])
    : ((ce = h ? (0, $.jsx)(ge, { children: h }) : null), (t[50] = h), (t[51] = ce));
  let X;
  t[52] !== J || t[53] !== Y || t[54] !== ce
    ? ((X = (0, $.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-hidden`,
        children: [K, J, Y, ce],
      })),
      (t[52] = J),
      (t[53] = Y),
      (t[54] = ce),
      (t[55] = X))
    : (X = t[55]);
  let Z;
  t[56] !== _ || t[57] !== G || t[58] !== X
    ? ((Z = (0, $.jsxs)(ye, { ..._, children: [G, X] })),
      (t[56] = _),
      (t[57] = G),
      (t[58] = X),
      (t[59] = Z))
    : (Z = t[59]);
  let le;
  return (
    t[60] !== S ||
    t[61] !== r ||
    t[62] !== O ||
    t[63] !== n ||
    t[64] !== c ||
    t[65] !== Z ||
    t[66] !== ne ||
    t[67] !== i
      ? ((le = (0, $.jsxs)(Se, {
          items: n,
          filteredItems: r,
          autoHighlight: !0,
          virtualized: !0,
          onItemHighlighted: ne,
          onOpenChange: O,
          open: c,
          value: i,
          children: [S, Z],
        })),
        (t[60] = S),
        (t[61] = r),
        (t[62] = O),
        (t[63] = n),
        (t[64] = c),
        (t[65] = Z),
        (t[66] = ne),
        (t[67] = i),
        (t[68] = le))
      : (le = t[68]),
    le
  );
}
function wt(e) {
  return e;
}
function Tt(e) {
  let t = (0, xt.c)(15),
    { branch: n, projectCwd: r, index: i, value: a, disabled: o, onClick: s, onContextMenu: c } = e,
    l = n.name,
    u = n.worktreePath && r && n.worktreePath !== r,
    d = n.current
      ? `current`
      : u
        ? `worktree`
        : n.isRemote
          ? `remote`
          : n.isDefault
            ? `default`
            : null,
    f = a ?? l,
    p;
  t[0] === l
    ? (p = t[1])
    : ((p = (0, $.jsx)(ot, { value: l, className: `flex-1` })), (t[0] = l), (t[1] = p));
  let m;
  t[2] === d
    ? (m = t[3])
    : ((m =
        d &&
        (0, $.jsx)(`span`, {
          className: `shrink-0 text-3xs text-muted-foreground/45`,
          children: d,
        })),
      (t[2] = d),
      (t[3] = m));
  let h;
  t[4] !== p || t[5] !== m
    ? ((h = (0, $.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center justify-between gap-2`,
        children: [p, m],
      })),
      (t[4] = p),
      (t[5] = m),
      (t[6] = h))
    : (h = t[6]);
  let g;
  return (
    t[7] !== o ||
    t[8] !== i ||
    t[9] !== l ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== f ||
    t[13] !== h
      ? ((g = (0, $.jsx)(
          be,
          {
            disabled: o,
            hideIndicator: !0,
            index: i,
            value: f,
            onClick: s,
            onContextMenu: c,
            children: h,
          },
          l,
        )),
        (t[7] = o),
        (t[8] = i),
        (t[9] = l),
        (t[10] = s),
        (t[11] = c),
        (t[12] = f),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function Et(e) {
  let t = (0, xt.c)(57),
    {
      environmentId: n,
      cwd: r,
      value: a,
      onValueChange: o,
      startFromOrigin: s,
      onStartFromOriginChange: c,
      disabled: l,
      id: u,
    } = e,
    d = l !== void 0 && l,
    [f, m] = (0, Q.useState)(!1),
    [h, g] = (0, Q.useState)(``),
    _;
  t[0] === h ? (_ = t[1]) : ((_ = h.trim()), (t[0] = h), (t[1] = _));
  let v = (0, Q.useDeferredValue)(_),
    y;
  t[2] === v ? (y = t[3]) : ((y = x(v)), (t[2] = v), (t[3] = y));
  let b;
  t[4] !== r || t[5] !== n || t[6] !== y
    ? ((b = { environmentId: n, cwd: r, query: y }), (t[4] = r), (t[5] = n), (t[6] = y), (t[7] = b))
    : (b = t[7]);
  let S = ue(b),
    C;
  t[8] !== r || t[9] !== n || t[10] !== a
    ? ((C =
        r && a ? fe.listRefs({ environmentId: n, input: { cwd: r, query: a, limit: 10 } }) : null),
      (t[8] = r),
      (t[9] = n),
      (t[10] = a),
      (t[11] = C))
    : (C = t[11]);
  let w = oe(C),
    T;
  t[12] !== S.refs || t[13] !== w || t[14] !== a
    ? ((T = S.refs.find((e) => e.name === a) ?? w.data?.refs.find((e) => e.name === a)),
      (t[12] = S.refs),
      (t[13] = w),
      (t[14] = a),
      (t[15] = T))
    : (T = t[15]);
  let E = T,
    D = a || null,
    O = E ? E.isRemote === !0 : null,
    k;
  t[16] !== s || t[17] !== D || t[18] !== O
    ? ((k = Re({
        activeWorktreePath: null,
        effectiveEnvMode: `worktree`,
        resolvedActiveBranch: D,
        resolvedActiveBranchIsRemote: O,
        startFromOrigin: s,
      })),
      (t[16] = s),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k))
    : (k = t[19]);
  let A = k,
    j,
    ee;
  t[20] === S.refs
    ? ((j = t[21]), (ee = t[22]))
    : ((j = new Map(S.refs.map(Dt))),
      (ee = [...j.keys()]),
      (t[20] = S.refs),
      (t[21] = j),
      (t[22] = ee));
  let M = ee,
    N = S.data?.nextCursor != null,
    P =
      S.error ??
      (S.isPending && S.data === null
        ? `Loading refs...`
        : S.isFetchingNextPage
          ? `Loading more refs...`
          : N
            ? `Showing ${S.refs.length} of ${S.data?.totalCount} refs`
            : null),
    F;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (e) => {
        (m(e), e || g(``));
      }),
      (t[23] = F))
    : (F = t[23]);
  let I = F,
    L = a || null,
    R = f && !d,
    z;
  t[24] === o
    ? (z = t[25])
    : ((z = (e) => {
        (o(e), I(!1));
      }),
      (t[24] = o),
      (t[25] = z));
  let B;
  t[26] !== c || t[27] !== s
    ? ((B = { checked: s, onCheckedChange: c }), (t[26] = c), (t[27] = s), (t[28] = B))
    : (B = t[28]);
  let te;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = { align: `start`, side: `bottom`, className: `flex w-80 flex-col` }), (t[29] = te))
    : (te = t[29]);
  let V;
  t[30] !== j || t[31] !== r || t[32] !== o
    ? ((V = (e, t) => {
        let n = j.get(e);
        return n
          ? (0, $.jsx)(Tt, {
              branch: n,
              projectCwd: r,
              index: t,
              onClick: () => {
                (o(n.name), I(!1));
              },
            })
          : null;
      }),
      (t[30] = j),
      (t[31] = r),
      (t[32] = o),
      (t[33] = V))
    : (V = t[33]);
  let H = d || !r,
    U;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(p, { variant: `outline`, size: `sm` })), (t[34] = U))
    : (U = t[34]);
  let ne;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(at, { className: `size-3.5 shrink-0 text-muted-foreground` })),
      (t[35] = ne))
    : (ne = t[35]);
  let re;
  t[36] === A
    ? (re = t[37])
    : ((re = (0, $.jsx)(ot, { value: A, className: `flex-1 text-left` })),
      (t[36] = A),
      (t[37] = re));
  let W;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(i, { className: `size-3.5 shrink-0 text-muted-foreground` })), (t[38] = W))
    : (W = t[38]);
  let G;
  t[39] !== u || t[40] !== H || t[41] !== re
    ? ((G = (0, $.jsxs)(_e, {
        id: u,
        disabled: H,
        render: U,
        className: `w-full justify-between `,
        children: [ne, re, W],
      })),
      (t[39] = u),
      (t[40] = H),
      (t[41] = re),
      (t[42] = G))
    : (G = t[42]);
  let K;
  return (
    t[43] !== S.isFetchingNextPage ||
    t[44] !== S.loadNext ||
    t[45] !== v ||
    t[46] !== N ||
    t[47] !== M ||
    t[48] !== h ||
    t[49] !== P ||
    t[50] !== L ||
    t[51] !== R ||
    t[52] !== z ||
    t[53] !== B ||
    t[54] !== V ||
    t[55] !== G
      ? ((K = (0, $.jsx)(Ct, {
          items: M,
          filteredItems: M,
          value: L,
          query: h,
          resultsQuery: v,
          onQueryChange: g,
          open: R,
          onOpenChange: I,
          onSelectItem: z,
          hasNextPage: N,
          isFetchingNextPage: S.isFetchingNextPage,
          onLoadNext: S.loadNext,
          statusText: P,
          originControl: B,
          popupProps: te,
          renderItem: V,
          children: G,
        })),
        (t[43] = S.isFetchingNextPage),
        (t[44] = S.loadNext),
        (t[45] = v),
        (t[46] = N),
        (t[47] = M),
        (t[48] = h),
        (t[49] = P),
        (t[50] = L),
        (t[51] = R),
        (t[52] = z),
        (t[53] = B),
        (t[54] = V),
        (t[55] = G),
        (t[56] = K))
      : (K = t[56]),
    K
  );
}
function Dt(e) {
  return [e.name, e];
}
var Ot = [1, 2, 3, 4, 5, 6, 0],
  kt = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  At = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
  jt = {
    worktree: `Create a new worktree`,
    root: `Use the project checkout`,
    existing_worktree: `Use a specific checkout`,
  },
  Mt = {
    editingId: null,
    title: ``,
    prompt: ``,
    enabled: !0,
    scheduleMode: `fixed`,
    intervalMinutes: `15`,
    timeOfDay: `09:00`,
    weekdays: new Set([1, 2, 3, 4, 5]),
    projectId: ``,
    threadId: ``,
    workspaceMode: `worktree`,
    baseRef: `main`,
    startFromOrigin: !0,
    existingWorktreePath: ``,
    modelKey: ``,
    runtimeMode: `full-access`,
    interactionMode: `default`,
    baseModelSelection: null,
    signatureEnabled: !1,
    ...Qe,
    signatureSecret: ``,
    maxDeliveryAgeMinutes: ``,
    replayKey: ``,
    coalesceKey: ``,
    coalesceWindowSeconds: ``,
    filters: [],
    savedFilters: [],
  };
function Nt(e) {
  let t = (0, xt.c)(18),
    { filters: n, onChange: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (e, t) => r(n.map((n, r) => (r === e ? { ...n, ...t } : n)))),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, $.jsx)(rt, { children: `Filters` }),
          (0, $.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: `Run only when every filter matches. Other requests are logged as filtered. Separate “is one of” values with commas; a value can't contain a comma.`,
          }),
        ],
      })),
      (t[3] = o))
    : (o = t[3]);
  let s = n.length >= 16,
    c;
  t[4] !== n || t[5] !== r
    ? ((c = () => r([...n, We()])), (t[4] = n), (t[5] = r), (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(u, {})), (t[7] = l))
    : (l = t[7]);
  let f;
  t[8] !== s || t[9] !== c
    ? ((f = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [
          o,
          (0, $.jsxs)(p, {
            className: `shrink-0`,
            variant: `outline`,
            size: `sm`,
            disabled: s,
            onClick: c,
            children: [l, `Add filter`],
          }),
        ],
      })),
      (t[8] = s),
      (t[9] = c),
      (t[10] = f))
    : (f = t[10]);
  let m;
  t[11] !== n || t[12] !== r || t[13] !== a
    ? ((m = n.map((e, t) =>
        (0, $.jsxs)(
          `div`,
          {
            className: `space-y-2 pt-1`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `grid min-w-0 flex-1 grid-cols-1`,
                    children: (0, $.jsx)(D, {
                      "aria-label": `Filter ${t + 1} path`,
                      placeholder: `body.action`,
                      value: e.path,
                      onChange: (e) => a(t, { path: e.target.value }),
                    }),
                  }),
                  (0, $.jsx)(p, {
                    variant: `ghost`,
                    size: `icon-sm`,
                    "aria-label": `Remove filter ${t + 1}`,
                    onClick: () => r(Ye(n, e.id)),
                    children: (0, $.jsx)(d, {}),
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsxs)(H, {
                    value: e.op,
                    onValueChange: (e) => {
                      let n = $e.find((t) => t.op === e);
                      n && a(t, { op: n.op });
                    },
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `grid w-44 shrink-0 grid-cols-1`,
                        children: (0, $.jsx)(V, {
                          size: `sm`,
                          "aria-label": `Filter ${t + 1} test`,
                          children: (0, $.jsx)(B, {
                            children: $e.find((t) => t.op === e.op)?.label,
                          }),
                        }),
                      }),
                      (0, $.jsx)(te, { children: $e.map(Pt) }),
                    ],
                  }),
                  e.op === `exists`
                    ? null
                    : (0, $.jsx)(`div`, {
                        className: `grid min-w-0 flex-1 grid-cols-1`,
                        children: (0, $.jsx)(D, {
                          "aria-label": `Filter ${t + 1} value`,
                          placeholder: e.op === `in` ? `opened, reopened` : `opened`,
                          value: e.value,
                          onChange: (e) => a(t, { value: e.target.value }),
                        }),
                      }),
                ],
              }),
            ],
          },
          e.id,
        ),
      )),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== f || t[16] !== m
      ? ((h = (0, $.jsxs)(`div`, { className: `space-y-2`, children: [f, m] })),
        (t[15] = f),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Pt(e) {
  return (0, $.jsx)(z, { value: e.op, children: e.label }, e.op);
}
function Ft(e) {
  let t = (0, xt.c)(11),
    { label: n, hint: r, htmlFor: i, children: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = (0, $.jsx)(`span`, { children: n })), (t[0] = n), (t[1] = o));
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = r
        ? (0, $.jsx)(`span`, {
            className: `font-normal text-2xs text-muted-foreground/80`,
            children: r,
          })
        : null),
      (t[2] = r),
      (t[3] = s));
  let c;
  t[4] !== i || t[5] !== o || t[6] !== s
    ? ((c = (0, $.jsxs)(rt, {
        className: `flex items-baseline justify-between`,
        htmlFor: i,
        children: [o, s],
      })),
      (t[4] = i),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, $.jsxs)(`div`, { className: `space-y-1.5`, children: [c, a] })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function It(e) {
  let t = e.indexOf(`:`);
  return t <= 0 || t === e.length - 1
    ? null
    : { instanceId: m.make(e.slice(0, t)), model: e.slice(t + 1) };
}
function Lt(e) {
  if (e.type === `webhook`) return `On webhook`;
  if (e.type === `interval`) {
    let t = e.everyMs / 6e4;
    return Number.isInteger(t) ? `Every ${t} min` : `Every ${Math.round(e.everyMs / 1e3)} sec`;
  }
  let t = e.weekdays ?? [];
  return `${t.length === 0 ? `Daily` : t.length === 5 && t.every((e) => e >= 1 && e <= 5) ? `Weekdays` : t.map((e) => kt[e]).join(`, `)} at ${e.timeOfDay}`;
}
function Rt(e, t) {
  if (!e) return `Not scheduled`;
  let n = new Date(e).getTime() - t;
  if (n <= 0) {
    let n = pe(e, t);
    return n ? (n.suffix ? `${n.value} ${n.suffix}` : n.value) : `Not scheduled`;
  }
  let r = Math.ceil(n / 6e4);
  if (r < 2) return `in under a minute`;
  if (r < 60) return `in ${r}m`;
  let i = Math.round(r / 60);
  return i < 24 ? `in ${i}h` : `in ${Math.round(i / 24)}d`;
}
function zt(e) {
  let t = (0, xt.c)(3),
    n = ct(),
    r;
  return (
    t[0] !== n || t[1] !== e.value
      ? ((r = Rt(e.value, Date.parse(`${n}:00.000Z`))), (t[0] = n), (t[1] = e.value), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Bt(e) {
  return e === `accepted`
    ? `success`
    : e === `duplicate` ||
        e === `coalesced` ||
        e === `disabled` ||
        e === `rate_limited` ||
        e === `expired`
      ? `warning`
      : e === `dispatch_failed` || e === `rejected_signature`
        ? `error`
        : `outline`;
}
function Vt(e) {
  return e === `failed`
    ? `error`
    : e === `succeeded`
      ? `success`
      : e === `running`
        ? `info`
        : `outline`;
}
function Ht(e) {
  let t = (0, xt.c)(37),
    { scope: n, environments: r, connectedEnvironments: i, environment: o } = _t(),
    [s, c] = (0, Q.useState)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e, t) => {
        c({ environmentId: e, task: t });
      }),
      (t[0] = l))
    : (l = t[0]);
  let d = l,
    f = o ?? i[0],
    m = e.environmentId ?? f?.environmentId,
    h;
  if (t[1] !== r || t[2] !== m) {
    let e;
    (t[4] === m
      ? (e = t[5])
      : ((e = (e) =>
          e.environmentId === m && e.connection.phase === `connected` && e.serverConfig !== null),
        (t[4] = m),
        (t[5] = e)),
      (h = r.some(e)),
      (t[1] = r),
      (t[2] = m),
      (t[3] = h));
  } else h = t[3];
  let g = h,
    _;
  t[6] !== g || t[7] !== m || t[8] !== e.taskId
    ? ((_ =
        e.taskId !== void 0 && m !== void 0 && g
          ? W.scheduledTasksLive({ environmentId: m, input: {} })
          : null),
      (t[6] = g),
      (t[7] = m),
      (t[8] = e.taskId),
      (t[9] = _))
    : (_ = t[9]);
  let v = oe(_).data?.tasks.find((t) => t.id === e.taskId && m !== void 0 && Je(n, m, t.projectId)),
    [y, b] = (0, Q.useState)();
  (e.taskId === void 0 && y !== void 0 && b(void 0),
    v &&
      m !== void 0 &&
      y !== e.taskId &&
      (b(e.taskId), s === null && c({ environmentId: m, task: v })));
  let x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { from: `/settings/scheduled-tasks` }), (t[10] = x))
    : (x = t[10]);
  let S = X(x),
    C;
  t[11] !== S || t[12] !== e.taskId
    ? ((C = () => {
        (c(null),
          e.taskId !== void 0 && S({ to: `/settings/scheduled-tasks`, search: Ut, replace: !0 }));
      }),
      (t[11] = S),
      (t[12] = e.taskId),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T;
  t[14] === f?.environmentId
    ? (T = t[15])
    : ((T = W.upsertScheduledTask.permissionAtom(f?.environmentId ?? null)),
      (t[14] = f?.environmentId),
      (t[15] = T));
  let E = ee(T),
    D = !f || !E,
    O;
  t[16] === f
    ? (O = t[17])
    : ((O = () => f && c({ environmentId: f.environmentId, task: null })),
      (t[16] = f),
      (t[17] = O));
  let k;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(u, { className: `size-3` })), (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== D || t[20] !== O
    ? ((A = (0, $.jsxs)(p, {
        size: `xs`,
        variant: `ghost-muted`,
        disabled: D,
        onClick: O,
        children: [k, `New task`],
      })),
      (t[19] = D),
      (t[20] = O),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== r || t[23] !== m || t[24] !== n.kind || t[25] !== n.message || t[26] !== e.taskId
    ? ((j =
        n.kind === `unavailable`
          ? (0, $.jsx)(ht, {
              title: `Unavailable selection`,
              children: (0, $.jsx)(dt, { title: n.message }),
            })
          : r.length === 0
            ? (0, $.jsx)(Ie, {
                children: (0, $.jsxs)(Ne, {
                  children: [
                    (0, $.jsx)(Me, { variant: `icon`, children: (0, $.jsx)(a, {}) }),
                    (0, $.jsx)(Pe, { children: `No environments available` }),
                    (0, $.jsx)(Fe, {
                      children: `Connect an environment to manage scheduled tasks.`,
                    }),
                  ],
                }),
              })
            : r.length > 1
              ? (0, $.jsx)(Gt, { environmentId: m, taskId: e.taskId, onEdit: d })
              : (0, $.jsx)(`div`, {
                  className: `space-y-8`,
                  children: r.map((t) =>
                    (0, $.jsx)(
                      Xt,
                      {
                        environment: t,
                        showEnvironmentHeading: r.length > 1,
                        taskId: m === t.environmentId ? e.taskId : void 0,
                        onEdit: d,
                      },
                      t.environmentId,
                    ),
                  ),
                })),
      (t[22] = r),
      (t[23] = m),
      (t[24] = n.kind),
      (t[25] = n.message),
      (t[26] = e.taskId),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== j || t[29] !== A
    ? ((M = (0, $.jsx)(ht, {
        title: `Scheduled tasks`,
        variant: `plain`,
        headerAction: A,
        children: j,
      })),
      (t[28] = j),
      (t[29] = A),
      (t[30] = M))
    : (M = t[30]);
  let N;
  t[31] !== w || t[32] !== s
    ? ((N = s
        ? (0, $.jsx)(
            an,
            { initialEnvironmentId: s.environmentId, task: s.task, onClose: w },
            `${s.environmentId}:${s.task?.id ?? `new`}`,
          )
        : null),
      (t[31] = w),
      (t[32] = s),
      (t[33] = N))
    : (N = t[33]);
  let P;
  return (
    t[34] !== M || t[35] !== N
      ? ((P = (0, $.jsxs)(ft, { children: [M, N] })), (t[34] = M), (t[35] = N), (t[36] = P))
      : (P = t[36]),
    P
  );
}
function Ut(e) {
  let { taskId: t, ...n } = e;
  return n;
}
var Wt = K(`web-scheduled-tasks-list`, (e) =>
  W.scheduledTasksLive({ environmentId: e, input: {} }),
);
function Gt(e) {
  let t = (0, xt.c)(11),
    { environmentId: n, taskId: r, onEdit: i } = e,
    { scope: a, environments: o } = _t(),
    s = o.flatMap(Yt),
    c = ee(Wt(ae(s))),
    l = o.map((e) => {
      let t = s.indexOf(e.environmentId),
        n = t < 0 ? null : c[t],
        r = n === null ? null : g(O(n));
      return {
        environment: e,
        connected: t >= 0,
        tasks: r?.tasks.filter((t) => Je(a, e.environmentId, t.projectId)),
        error: n?._tag === `Failure` ? q(n.cause) : null,
      };
    }),
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = (e) => e.environment.environmentId === n), (t[0] = n), (t[1] = u));
  let d = l.find(u),
    f = d?.tasks?.find((e) => e.id === r),
    p = l.filter(Jt),
    m = p.filter(qt),
    h = {
      "Not connected:": [],
      "Loading scheduled tasks on": [],
      "Could not load scheduled tasks:": [],
      "No tasks on": [],
    };
  for (let { environment: e, connected: t, tasks: n, error: r } of l) {
    let i = gt(e, o);
    t
      ? r === null
        ? n
          ? n.length === 0 && m.length > 0 && h[`No tasks on`].push(i)
          : h[`Loading scheduled tasks on`].push(i)
        : h[`Could not load scheduled tasks:`].push(`${i}: ${r}`)
      : h[`Not connected:`].push(`${i} (${R(e.connection)})`);
  }
  let _ = mt,
    v;
  t[2] !== o || t[3] !== i
    ? ((v = (e) => {
        let { environment: t, tasks: n } = e,
          { primary: r, secondary: a } = ut(t, o),
          s = vt(t);
        return (0, $.jsxs)(
          `div`,
          {
            className: `divide-y divide-border/50`,
            children: [
              (0, $.jsxs)(yt, {
                kind: k(t.serverConfig),
                label: r,
                subtitle: (0, $.jsxs)($.Fragment, {
                  children: [
                    a && a !== s
                      ? (0, $.jsx)(`span`, { className: `block truncate`, children: a })
                      : null,
                    (0, $.jsx)(`span`, { className: `block truncate`, children: s }),
                  ],
                }),
                children: [
                  (0, $.jsx)(Ve, {
                    dotClassName: Be(t.connection.phase),
                    tooltipText: R(t.connection),
                  }),
                  (0, $.jsx)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: R(t.connection),
                  }),
                ],
              }),
              n?.map((e) =>
                (0, $.jsx)(
                  Zt,
                  { environmentId: t.environmentId, task: e, onEdit: () => i(t.environmentId, e) },
                  e.id,
                ),
              ),
            ],
          },
          t.environmentId,
        );
      }),
      (t[2] = o),
      (t[3] = i),
      (t[4] = v))
    : (v = t[4]);
  let y = m.map(v),
    b =
      r && d?.tasks && d.error === null && !f
        ? (0, $.jsx)(dt, {
            title: `Task unavailable`,
            description: `This task no longer exists or is outside the selected project scope.`,
            role: `status`,
          })
        : null,
    x =
      m.length === 0 && p.length > 0
        ? (0, $.jsx)(dt, {
            title: `No scheduled tasks`,
            description: `No tasks match this environment and project selection.`,
          })
        : null,
    S = Object.entries(h).map(Kt),
    C;
  return (
    t[5] !== _ || t[6] !== y || t[7] !== b || t[8] !== x || t[9] !== S
      ? ((C = (0, $.jsxs)(_, { children: [y, b, x, S] })),
        (t[5] = _),
        (t[6] = y),
        (t[7] = b),
        (t[8] = x),
        (t[9] = S),
        (t[10] = C))
      : (C = t[10]),
    C
  );
}
function Kt(e) {
  let [t, n] = e;
  if (n.length === 0) return null;
  let r = `${t} ${n.join(`, `)}`;
  return (0, $.jsxs)(
    f,
    {
      children: [
        (0, $.jsx)(b, {
          render: (0, $.jsx)(`p`, {
            className: `truncate px-3 py-2.5 text-xs text-muted-foreground sm:px-4`,
            role: `status`,
          }),
          children: r,
        }),
        (0, $.jsx)(y, { children: r }),
      ],
    },
    t,
  );
}
function qt(e) {
  return e.tasks && e.tasks.length > 0;
}
function Jt(e) {
  return e.connected && e.error === null && e.tasks;
}
function Yt(e) {
  return e.connection.phase === `connected` && e.serverConfig !== null ? [e.environmentId] : [];
}
function Xt(e) {
  let t = (0, xt.c)(18),
    { environment: n, showEnvironmentHeading: r, taskId: i, onEdit: a } = e,
    { scope: o } = _t(),
    s = n.connection.phase === `connected` && n.serverConfig !== null,
    c;
  t[0] !== s || t[1] !== n.environmentId
    ? ((c = s ? W.scheduledTasksLive({ environmentId: n.environmentId, input: {} }) : null),
      (t[0] = s),
      (t[1] = n.environmentId),
      (t[2] = c))
    : (c = t[2]);
  let l = oe(c),
    u;
  if (
    t[3] !== s ||
    t[4] !== n.environmentId ||
    t[5] !== n.label ||
    t[6] !== n.serverConfig ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== r ||
    t[10] !== i ||
    t[11] !== l.data?.tasks ||
    t[12] !== l.error
  ) {
    let e = l.data?.tasks.filter((e) => Je(o, n.environmentId, e.projectId)),
      c = e?.find((e) => e.id === i),
      d = n.label,
      f;
    t[14] === n.serverConfig
      ? (f = t[15])
      : ((f = k(n.serverConfig)), (t[14] = n.serverConfig), (t[15] = f));
    let p;
    (t[16] === f
      ? (p = t[17])
      : ((p = (0, $.jsx)(Le, { kind: f, className: `size-3.5` })), (t[16] = f), (t[17] = p)),
      (u = (0, $.jsx)(ht, {
        title: d,
        hideTitle: !r,
        icon: p,
        children: s
          ? l.error
            ? (0, $.jsx)(dt, { title: `Could not load scheduled tasks`, description: l.error })
            : e
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    i && !c
                      ? (0, $.jsx)(dt, {
                          title: `Task unavailable`,
                          description: `This task no longer exists or is outside the selected project scope.`,
                          role: `status`,
                        })
                      : null,
                    e.length === 0
                      ? (0, $.jsx)(dt, {
                          title: `No scheduled tasks`,
                          description: `No tasks match this environment and project selection.`,
                        })
                      : e.map((e) =>
                          (0, $.jsx)(
                            Zt,
                            {
                              environmentId: n.environmentId,
                              task: e,
                              onEdit: () => a(n.environmentId, e),
                            },
                            e.id,
                          ),
                        ),
                  ],
                })
              : (0, $.jsx)(dt, { title: `Loading scheduled tasks…`, role: `status` })
          : (0, $.jsx)(dt, {
              title: `Environment disconnected`,
              description: `Reconnect ${n.label} to view its scheduled tasks.`,
            }),
      })),
      (t[3] = s),
      (t[4] = n.environmentId),
      (t[5] = n.label),
      (t[6] = n.serverConfig),
      (t[7] = a),
      (t[8] = o),
      (t[9] = r),
      (t[10] = i),
      (t[11] = l.data?.tasks),
      (t[12] = l.error),
      (t[13] = u));
  } else u = t[13];
  return u;
}
function Zt(e) {
  let t = (0, xt.c)(77),
    { environmentId: n, task: r, onEdit: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = W.upsertScheduledTask.permissionAtom(n)), (t[0] = n), (t[1] = a));
  let s = ee(a),
    [u, f] = (0, Q.useState)(!1),
    [m, h] = (0, Q.useState)(!1),
    g = r.schedule.type === `webhook`,
    _;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { label: `scheduled task enabled` }), (t[2] = _))
    : (_ = t[2]);
  let y = se(W.setScheduledTaskEnabled, _),
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { label: `scheduled task run now` }), (t[3] = b))
    : (b = t[3]);
  let x = se(W.runScheduledTaskNow, b),
    S;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { label: `scheduled task delete` }), (t[4] = S))
    : (S = t[4]);
  let w = se(W.deleteScheduledTask, S),
    E;
  t[5] !== u ||
  t[6] !== n ||
  t[7] !== w ||
  t[8] !== x ||
  t[9] !== r.enabled ||
  t[10] !== r.id ||
  t[11] !== y
    ? ((E = async (e) => {
        if (u || !ie(n, `orchestration:operate`)) return;
        f(!0);
        let t =
          e === `toggle`
            ? await y({ environmentId: n, input: { id: r.id, enabled: !r.enabled } })
            : e === `run`
              ? await x({ environmentId: n, input: { id: r.id } })
              : await w({ environmentId: n, input: { id: r.id } });
        (f(!1),
          t._tag === `Failure` &&
            !C(t) &&
            ce.add(
              le({
                type: `error`,
                title: `Could not update scheduled task`,
                description: String(j(t)),
              }),
            ));
      }),
      (t[5] = u),
      (t[6] = n),
      (t[7] = w),
      (t[8] = x),
      (t[9] = r.enabled),
      (t[10] = r.id),
      (t[11] = y),
      (t[12] = E))
    : (E = t[12]);
  let D = E,
    O = r.title,
    k;
  t[13] === r.prompt
    ? (k = t[14])
    : ((k = (0, $.jsx)(`span`, { className: `line-clamp-2`, children: r.prompt })),
      (t[13] = r.prompt),
      (t[14] = k));
  let F;
  t[15] === r.schedule ? (F = t[16]) : ((F = Lt(r.schedule)), (t[15] = r.schedule), (t[16] = F));
  let I;
  t[17] !== g || t[18] !== r.enabled || t[19] !== r.nextRunAt
    ? ((I = r.enabled
        ? g
          ? `Listening`
          : r.nextRunAt
            ? (0, $.jsxs)($.Fragment, {
                children: [`Next run `, (0, $.jsx)(zt, { value: r.nextRunAt })],
              })
            : `Not scheduled`
        : `Paused`),
      (t[17] = g),
      (t[18] = r.enabled),
      (t[19] = r.nextRunAt),
      (t[20] = I))
    : (I = t[20]);
  let L;
  t[21] !== F || t[22] !== I
    ? ((L = (0, $.jsxs)(`span`, { children: [F, ` ·`, ` `, I] })),
      (t[21] = F),
      (t[22] = I),
      (t[23] = L))
    : (L = t[23]);
  let R;
  t[24] === r.lastRunStatus
    ? (R = t[25])
    : ((R =
        r.lastRunStatus === `never`
          ? null
          : (0, $.jsx)(T, { variant: Vt(r.lastRunStatus), children: r.lastRunStatus })),
      (t[24] = r.lastRunStatus),
      (t[25] = R));
  let z;
  t[26] === r.lastRunError
    ? (z = t[27])
    : ((z = r.lastRunError
        ? (0, $.jsx)(`span`, { className: `text-destructive`, children: r.lastRunError })
        : null),
      (t[26] = r.lastRunError),
      (t[27] = z));
  let B;
  t[28] !== L || t[29] !== R || t[30] !== z
    ? ((B = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [L, R, z],
      })),
      (t[28] = L),
      (t[29] = R),
      (t[30] = z),
      (t[31] = B))
    : (B = t[31]);
  let te = u || !s,
    V = `Enable ${r.title}`,
    H;
  t[32] === D ? (H = t[33]) : ((H = () => void D(`toggle`)), (t[32] = D), (t[33] = H));
  let U;
  t[34] !== te || t[35] !== V || t[36] !== H || t[37] !== r.enabled
    ? ((U = (0, $.jsx)(it, {
        checked: r.enabled,
        disabled: te,
        "aria-label": V,
        onCheckedChange: H,
      })),
      (t[34] = te),
      (t[35] = V),
      (t[36] = H),
      (t[37] = r.enabled),
      (t[38] = U))
    : (U = t[38]);
  let ne = u || !s,
    re = `Actions for ${r.title}`,
    G;
  t[39] !== ne || t[40] !== re
    ? ((G = (0, $.jsx)(p, { size: `icon-sm`, variant: `ghost`, disabled: ne, "aria-label": re })),
      (t[39] = ne),
      (t[40] = re),
      (t[41] = G))
    : (G = t[41]);
  let K;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(c, { className: `size-4` })), (t[42] = K))
    : (K = t[42]);
  let ae;
  t[43] === G
    ? (ae = t[44])
    : ((ae = (0, $.jsx)(N, { render: G, children: K })), (t[43] = G), (t[44] = ae));
  let oe;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(l, {})), (t[45] = oe))
    : (oe = t[45]);
  let q;
  t[46] === i
    ? (q = t[47])
    : ((q = (0, $.jsxs)(P, { onClick: i, children: [oe, `Edit`] })), (t[46] = i), (t[47] = q));
  let J;
  t[48] !== D || t[49] !== g
    ? ((J = g
        ? (0, $.jsxs)(P, { onClick: () => h(!0), children: [(0, $.jsx)(o, {}), `Deliveries`] })
        : (0, $.jsxs)(P, {
            onClick: () => void D(`run`),
            children: [(0, $.jsx)(st, {}), `Run now`],
          })),
      (t[48] = D),
      (t[49] = g),
      (t[50] = J))
    : (J = t[50]);
  let Y;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(M, {})), (t[51] = Y))
    : (Y = t[51]);
  let X;
  t[52] === D ? (X = t[53]) : ((X = () => void D(`delete`)), (t[52] = D), (t[53] = X));
  let Z;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, $.jsx)(d, {})), (t[54] = Z))
    : (Z = t[54]);
  let ue;
  t[55] === X
    ? (ue = t[56])
    : ((ue = (0, $.jsxs)(P, { onClick: X, children: [Z, `Delete`] })), (t[55] = X), (t[56] = ue));
  let de;
  t[57] !== q || t[58] !== J || t[59] !== ue
    ? ((de = (0, $.jsxs)(A, { align: `end`, children: [q, J, Y, ue] })),
      (t[57] = q),
      (t[58] = J),
      (t[59] = ue),
      (t[60] = de))
    : (de = t[60]);
  let fe;
  t[61] !== ae || t[62] !== de
    ? ((fe = (0, $.jsxs)(v, { children: [ae, de] })), (t[61] = ae), (t[62] = de), (t[63] = fe))
    : (fe = t[63]);
  let pe;
  t[64] !== m || t[65] !== n || t[66] !== r
    ? ((pe = m ? (0, $.jsx)(Qt, { environmentId: n, task: r, onClose: () => h(!1) }) : null),
      (t[64] = m),
      (t[65] = n),
      (t[66] = r),
      (t[67] = pe))
    : (pe = t[67]);
  let me;
  t[68] !== U || t[69] !== fe || t[70] !== pe
    ? ((me = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [U, fe, pe] })),
      (t[68] = U),
      (t[69] = fe),
      (t[70] = pe),
      (t[71] = me))
    : (me = t[71]);
  let he;
  return (
    t[72] !== B || t[73] !== me || t[74] !== k || t[75] !== r.title
      ? ((he = (0, $.jsx)(dt, { title: O, description: k, status: B, control: me })),
        (t[72] = B),
        (t[73] = me),
        (t[74] = k),
        (t[75] = r.title),
        (t[76] = he))
      : (he = t[76]),
    he
  );
}
function Qt(e) {
  let t = (0, xt.c)(38),
    { environmentId: n, task: r, onClose: i } = e,
    a;
  t[0] !== n || t[1] !== r.id
    ? ((a = W.scheduledTaskWebhookDeliveries({
        environmentId: n,
        input: { id: r.id, acceptAnyOutcome: !0 },
      })),
      (t[0] = n),
      (t[1] = r.id),
      (t[2] = a))
    : (a = t[2]);
  let o = oe(a),
    [s, c] = (0, Q.useState)(null),
    l;
  t[3] !== n || t[4] !== s || t[5] !== r.id
    ? ((l =
        s === null
          ? null
          : W.scheduledTaskWebhookDelivery({
              environmentId: n,
              input: { id: r.id, deliveryId: s, acceptAnyOutcome: !0 },
            })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = r.id),
      (t[6] = l))
    : (l = t[6]);
  let u = oe(l),
    d = o.data?.deliveries ?? null,
    f = u.data?.delivery ?? null,
    m = s === null ? o.error : u.error,
    h;
  t[7] === i
    ? (h = t[8])
    : ((h = (e) => {
        e || i();
      }),
      (t[7] = i),
      (t[8] = h));
  let g;
  t[9] === r.title
    ? (g = t[10])
    : ((g = (0, $.jsxs)(je, { children: [`Deliveries · `, r.title] })),
      (t[9] = r.title),
      (t[10] = g));
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(we, { children: `Recent requests to this task's webhook URL.` })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === g
    ? (v = t[13])
    : ((v = (0, $.jsxs)(Ae, { children: [g, _] })), (t[12] = g), (t[13] = v));
  let y;
  t[14] === m
    ? (y = t[15])
    : ((y = m ? (0, $.jsx)(`p`, { className: `text-sm text-destructive`, children: m }) : null),
      (t[14] = m),
      (t[15] = y));
  let b;
  t[16] !== d || t[17] !== f || t[18] !== s || t[19] !== u.error
    ? ((b =
        s !== null && f === null && u.error === null
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              role: `status`,
              children: `Loading delivery…`,
            })
          : f
            ? (0, $.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex flex-wrap items-center gap-2 text-sm`,
                    children: [
                      (0, $.jsx)(T, {
                        variant: Bt(f.pendingWindow ? `coalesced` : f.outcome),
                        children: Ze(f),
                      }),
                      (0, $.jsxs)(`span`, {
                        children: [f.method, ` · `, (0, $.jsx)(zt, { value: f.receivedAt })],
                      }),
                      f.signatureVerified
                        ? (0, $.jsx)(`span`, {
                            className: `text-muted-foreground`,
                            children: `Signature verified`,
                          })
                        : null,
                    ],
                  }),
                  f.error
                    ? (0, $.jsx)(`p`, {
                        className:
                          f.outcome === `filtered`
                            ? `text-sm text-muted-foreground`
                            : `text-sm text-destructive`,
                        children: f.error,
                      })
                    : null,
                  (0, $.jsx)(en, {
                    title: f.pendingWindow ? `Scheduled run` : `Prompt sent to the agent`,
                    children:
                      f.renderedPrompt ??
                      (f.pendingWindow
                        ? `Run scheduled when the window closes; no run started yet.`
                        : `No run was started for this request.`),
                  }),
                  f.missingFields.length > 0
                    ? (0, $.jsxs)(`p`, {
                        className: `text-sm text-muted-foreground`,
                        children: [`Empty placeholders: `, f.missingFields.join(`, `)],
                      })
                    : null,
                  (0, $.jsx)(en, {
                    title: `Headers`,
                    children: Object.entries(f.headers).map($t).join(`
`),
                  }),
                  f.query ? (0, $.jsx)(en, { title: `Query`, children: f.query }) : null,
                  (0, $.jsx)(en, {
                    title: f.bodyTruncated ? `Body (truncated)` : `Body`,
                    children: f.body || `(empty)`,
                  }),
                ],
              })
            : s === null
              ? d === null
                ? (0, $.jsx)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    role: `status`,
                    children: `Loading deliveries…`,
                  })
                : d.length === 0
                  ? (0, $.jsx)(`p`, {
                      className: `text-sm text-muted-foreground`,
                      children: `No requests yet.`,
                    })
                  : (0, $.jsx)(`ul`, {
                      className: `divide-y divide-border`,
                      children: d.map((e) =>
                        (0, $.jsx)(
                          `li`,
                          {
                            children: (0, $.jsxs)(`button`, {
                              type: `button`,
                              className: `flex w-full flex-wrap items-center gap-2 py-2 text-left text-sm hover:bg-accent/40`,
                              onClick: () => c(e.id),
                              children: [
                                (0, $.jsx)(T, {
                                  variant: Bt(e.pendingWindow ? `coalesced` : e.outcome),
                                  children: Ze(e),
                                }),
                                (0, $.jsx)(`span`, { children: e.method }),
                                (0, $.jsx)(`span`, {
                                  className: `text-muted-foreground`,
                                  children: (0, $.jsx)(zt, { value: e.receivedAt }),
                                }),
                                e.outcome === `filtered` && e.error
                                  ? (0, $.jsx)(`span`, {
                                      className: `text-muted-foreground`,
                                      children: e.error,
                                    })
                                  : null,
                                e.missingFields.length > 0
                                  ? (0, $.jsxs)(`span`, {
                                      className: `text-muted-foreground`,
                                      children: [
                                        e.missingFields.length,
                                        ` empty placeholder`,
                                        e.missingFields.length === 1 ? `` : `s`,
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                          },
                          e.id,
                        ),
                      ),
                    })
              : null),
      (t[16] = d),
      (t[17] = f),
      (t[18] = s),
      (t[19] = u.error),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] !== y || t[22] !== b
    ? ((x = (0, $.jsxs)(Te, { children: [y, b] })), (t[21] = y), (t[22] = b), (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== o.isPending || t[25] !== o.refresh || t[26] !== s
    ? ((S =
        s === null
          ? (0, $.jsx)(p, {
              variant: `outline`,
              size: `sm`,
              disabled: o.isPending,
              onClick: o.refresh,
              children: `Refresh`,
            })
          : (0, $.jsx)(p, {
              variant: `outline`,
              size: `sm`,
              onClick: () => c(null),
              children: `Back`,
            })),
      (t[24] = o.isPending),
      (t[25] = o.refresh),
      (t[26] = s),
      (t[27] = S))
    : (S = t[27]);
  let C;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(Ee, { render: (0, $.jsx)(p, { size: `sm` }), children: `Done` })),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] === S
    ? (w = t[30])
    : ((w = (0, $.jsxs)(ke, { children: [S, C] })), (t[29] = S), (t[30] = w));
  let E;
  t[31] !== w || t[32] !== v || t[33] !== x
    ? ((E = (0, $.jsxs)(De, { className: `max-w-2xl`, children: [v, x, w] })),
      (t[31] = w),
      (t[32] = v),
      (t[33] = x),
      (t[34] = E))
    : (E = t[34]);
  let D;
  return (
    t[35] !== E || t[36] !== h
      ? ((D = (0, $.jsx)(Oe, { open: !0, onOpenChange: h, children: E })),
        (t[35] = E),
        (t[36] = h),
        (t[37] = D))
      : (D = t[37]),
    D
  );
}
function $t(e) {
  let [t, n] = e;
  return `${t}: ${n}`;
}
function en(e) {
  let t = (0, xt.c)(7),
    { title: n, children: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = (0, $.jsx)(rt, { children: n })), (t[0] = n), (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, $.jsx)(`pre`, {
        className: `max-h-64 overflow-auto rounded-md bg-muted p-2 text-xs whitespace-pre-wrap break-all`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, { className: `space-y-1`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function tn(e) {
  let t = (0, xt.c)(40),
    { environmentId: n, task: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = W.rotateScheduledTaskWebhookToken.permissionAtom(n)), (t[0] = n), (t[1] = i));
  let a = ee(i),
    o = U(n),
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { target: `webhook URL` }), (t[2] = c))
    : (c = t[2]);
  let { copyToClipboard: l, isCopied: u } = Y(c),
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { label: `scheduled task rotate webhook token` }), (t[3] = d))
    : (d = t[3]);
  let f = se(W.rotateScheduledTaskWebhookToken, d),
    [m, h] = (0, Q.useState)(!1),
    g = r?.webhook;
  if (!r || !g) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: `The URL appears after you save.`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let _;
  t[5] !== g || t[6] !== o ? ((_ = St(g, o)), (t[5] = g), (t[6] = o), (t[7] = _)) : (_ = t[7]);
  let { address: v, copyable: y, note: b } = _,
    x;
  t[8] !== n || t[9] !== f || t[10] !== r
    ? ((x = async () => {
        if (
          !(
            (await J(
              `Rotate this webhook URL?
The current URL stops working.`,
              { variant: `destructive` },
            )) ?? window.confirm(`Rotate this webhook URL? The current URL stops working.`)
          )
        )
          return;
        h(!0);
        let e = await f({ environmentId: n, input: { id: r.id } });
        (h(!1),
          e._tag === `Failure` &&
            !C(e) &&
            ce.add(
              le({
                type: `error`,
                title: `Could not rotate webhook URL`,
                description: String(j(e)),
              }),
            ));
      }),
      (t[8] = n),
      (t[9] = f),
      (t[10] = r),
      (t[11] = x))
    : (x = t[11]);
  let S = x,
    w;
  t[12] === v
    ? (w = t[13])
    : ((w = (0, $.jsx)(D, { readOnly: !0, "aria-label": `Webhook URL`, value: v, onFocus: nn })),
      (t[12] = v),
      (t[13] = w));
  let T = !y,
    E;
  t[14] !== l || t[15] !== v
    ? ((E = () => l(v, void 0)), (t[14] = l), (t[15] = v), (t[16] = E))
    : (E = t[16]);
  let O;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(s, {})), (t[17] = O))
    : (O = t[17]);
  let k = u ? `Copied` : `Copy`,
    A;
  t[18] !== k || t[19] !== T || t[20] !== E
    ? ((A = (0, $.jsxs)(p, {
        size: `sm`,
        variant: `outline`,
        type: `button`,
        disabled: T,
        onClick: E,
        children: [O, k],
      })),
      (t[18] = k),
      (t[19] = T),
      (t[20] = E),
      (t[21] = A))
    : (A = t[21]);
  let M = m || !a,
    N;
  t[22] === S ? (N = t[23]) : ((N = () => void S()), (t[22] = S), (t[23] = N));
  let P;
  t[24] !== M || t[25] !== N
    ? ((P = (0, $.jsx)(p, {
        size: `sm`,
        variant: `outline`,
        type: `button`,
        disabled: M,
        onClick: N,
        children: `Rotate`,
      })),
      (t[24] = M),
      (t[25] = N),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== A || t[28] !== P || t[29] !== w
    ? ((F = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [w, A, P] })),
      (t[27] = A),
      (t[28] = P),
      (t[29] = w),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] === b
    ? (I = t[32])
    : ((I =
        b === null
          ? null
          : (0, $.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: b })),
      (t[31] = b),
      (t[32] = I));
  let L;
  t[33] !== g.url || t[34] !== n
    ? ((L = g.url === null ? null : (0, $.jsx)(rn, { environmentId: n })),
      (t[33] = g.url),
      (t[34] = n),
      (t[35] = L))
    : (L = t[35]);
  let R;
  return (
    t[36] !== F || t[37] !== I || t[38] !== L
      ? ((R = (0, $.jsxs)(`div`, { className: `space-y-1.5`, children: [F, I, L] })),
        (t[36] = F),
        (t[37] = I),
        (t[38] = L),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
function nn(e) {
  return e.currentTarget.select();
}
function rn(e) {
  let t = (0, xt.c)(3),
    { environmentId: n } = e,
    r = ze();
  if (r.target?.environmentId !== n || r.data === null) return null;
  let i = r.data.holdWebhooksWhileOffline
      ? `Held for up to 24 hours while this environment is offline. `
      : `Forwarded live. Requests fail while this environment is offline. `,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Z, {
        to: `/settings/connections`,
        className: `underline underline-offset-2`,
        children: `Change in Connections`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] === i
      ? (o = t[2])
      : ((o = (0, $.jsxs)(`p`, { className: `text-xs text-muted-foreground`, children: [i, a] })),
        (t[1] = i),
        (t[2] = o)),
    o
  );
}
function an(e) {
  let t = (0, xt.c)(11),
    { initialEnvironmentId: n, task: r, onClose: i } = e,
    [a, o] = (0, Q.useState)(!1),
    s;
  t[0] !== i || t[1] !== a
    ? ((s = (e) => {
        !e && !a && i();
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n || t[4] !== i || t[5] !== a || t[6] !== r
    ? ((c = (0, $.jsx)(De, {
        className: `max-w-xl`,
        children: (0, $.jsx)(on, {
          initialEnvironmentId: n,
          task: r,
          saving: a,
          onSavingChange: o,
          onClose: i,
        }),
      })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a),
      (t[6] = r),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== s || t[9] !== c
      ? ((l = (0, $.jsx)(Oe, { open: !0, onOpenChange: s, children: c })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function on(e) {
  let t = (0, xt.c)(197),
    { initialEnvironmentId: n, task: r, saving: i, onSavingChange: a, onClose: o } = e,
    { scope: s, connectedEnvironments: c } = _t(),
    [l, u] = (0, Q.useState)(n),
    d = ne(l),
    f = d?.connection.phase === `connected` && d.serverConfig !== null,
    m;
  t[0] !== f || t[1] !== l
    ? ((m = f ? W.scheduledTasksLive({ environmentId: l, input: {} }) : null),
      (t[0] = f),
      (t[1] = l),
      (t[2] = m))
    : (m = t[2]);
  let g = oe(m),
    v = L(),
    y;
  if (t[3] !== v || t[4] !== l || t[5] !== s) {
    let e;
    (t[7] !== l || t[8] !== s
      ? ((e = (e) => e.environmentId === l && Je(s, l, e.id)), (t[7] = l), (t[8] = s), (t[9] = e))
      : (e = t[9]),
      (y = v.filter(e)),
      (t[3] = v),
      (t[4] = l),
      (t[5] = s),
      (t[6] = y));
  } else y = t[6];
  let b = y,
    x = re(l),
    T = ee(W.providersValueAtom(l)) ?? G,
    O;
  t[10] === l
    ? (O = t[11])
    : ((O = W.upsertScheduledTask.permissionAtom(l)), (t[10] = l), (t[11] = O));
  let A = ee(O),
    M;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { label: `scheduled task upsert` }), (t[12] = M))
    : (M = t[12]);
  let N = se(W.upsertScheduledTask, M),
    P;
  t[13] !== b[0]?.id || t[14] !== r
    ? ((P = () => (r ? He(r) : { ...Mt, projectId: b[0]?.id ?? `` })),
      (t[13] = b[0]?.id),
      (t[14] = r),
      (t[15] = P))
    : (P = t[15]);
  let [F, I] = (0, Q.useState)(P),
    R = (0, Q.useRef)(!1),
    U;
  t[16] !== F.editingId || t[17] !== g.data
    ? ((U =
        F.editingId !== null && g.data !== null && !g.data.tasks.some((e) => e.id === F.editingId)),
      (t[16] = F.editingId),
      (t[17] = g.data),
      (t[18] = U))
    : (U = t[18]);
  let K = U,
    ae;
  t[19] !== F.editingId || t[20] !== r || t[21] !== g.data
    ? ((ae = g.data ? (g.data.tasks.find((e) => e.id === F.editingId) ?? null) : r),
      (t[19] = F.editingId),
      (t[20] = r),
      (t[21] = g.data),
      (t[22] = ae))
    : (ae = t[22]);
  let q = ae,
    J = F.projectId || b[0]?.id || ``,
    Y,
    ce,
    X,
    Z,
    le,
    ue;
  if (t[23] !== F.modelKey || t[24] !== b || t[25] !== T || t[26] !== J || t[27] !== x) {
    let e;
    (t[34] === J ? (e = t[35]) : ((e = (e) => e.id === J), (t[34] = J), (t[35] = e)),
      (le = b.find(e)),
      (Z = w(h(S(T), x, le?.id ?? null))));
    let n = Z[0],
      r;
    t[36] === F.modelKey
      ? (r = t[37])
      : ((r = F.modelKey ? It(F.modelKey) : null), (t[36] = F.modelKey), (t[37] = r));
    let i = r;
    ((X =
      i && Z.some((e) => e.instanceId === i.instanceId && e.enabled) ? i : Ke(x, le ?? null, Z)),
      (Y = X?.instanceId ?? n?.instanceId ?? ``),
      (ce = X?.model ?? ``),
      (ue = _(x, T, Y, ce)),
      (t[23] = F.modelKey),
      (t[24] = b),
      (t[25] = T),
      (t[26] = J),
      (t[27] = x),
      (t[28] = Y),
      (t[29] = ce),
      (t[30] = X),
      (t[31] = Z),
      (t[32] = le),
      (t[33] = ue));
  } else ((Y = t[28]), (ce = t[29]), (X = t[30]), (Z = t[31]), (le = t[32]), (ue = t[33]));
  let de = ue,
    fe = ln,
    pe;
  t[38] !== X ||
  t[39] !== f ||
  t[40] !== F ||
  t[41] !== K ||
  t[42] !== l ||
  t[43] !== q ||
  t[44] !== o ||
  t[45] !== b ||
  t[46] !== i ||
  t[47] !== J ||
  t[48] !== a ||
  t[49] !== g.data ||
  t[50] !== N
    ? ((pe = async () => {
        if (!ie(l, `orchestration:operate`) || R.current || i || K || !f || g.data === null) return;
        let e = X;
        if (!F.title.trim() || !F.prompt.trim() || !b.some((e) => e.id === J) || e === null) {
          fe(`Scheduled task is incomplete`, `Add a title, prompt, project, and model.`);
          return;
        }
        let t = Ge(F.filters);
        if (F.scheduleMode === `webhook` && `error` in t) {
          fe(`Invalid filter`, t.error);
          return;
        }
        let n = Xe(F);
        if (n === null) {
          for (let e of Ue(F)) fe(e.title, e.description);
          return;
        }
        if (
          n.type === `webhook` &&
          n.signature &&
          (!n.signature.header ||
            (!n.signature.secret && !(q?.schedule.type === `webhook` && q.webhook?.hasSecret)))
        ) {
          fe(`Signing secret is required`, `Enter the signature header and secret.`);
          return;
        }
        if (n.type === `interval` && (!Number.isSafeInteger(n.everyMs) || n.everyMs < 6e4)) {
          fe(`Invalid interval`, `Enter an interval of at least one minute.`);
          return;
        }
        if (F.workspaceMode === `existing_worktree` && !F.existingWorktreePath.trim()) {
          fe(`Checkout path is required`, `Enter the path of the checkout to run in.`);
          return;
        }
        let r =
            F.baseModelSelection !== null &&
            F.baseModelSelection.instanceId === e.instanceId &&
            F.baseModelSelection.model === e.model
              ? F.baseModelSelection
              : e,
          s =
            F.workspaceMode === `root`
              ? { type: `root` }
              : F.workspaceMode === `existing_worktree`
                ? { type: `existing_worktree`, worktreePath: F.existingWorktreePath.trim() }
                : {
                    type: `worktree`,
                    baseRef: F.baseRef.trim() || `main`,
                    startFromOrigin: F.startFromOrigin,
                  },
          c = {
            ...(F.editingId ? { id: F.editingId, requireExisting: !0 } : {}),
            title: F.title.trim(),
            prompt: F.prompt.trim(),
            enabled: F.enabled,
            schedule: n,
            projectId: J,
            threadId: F.threadId ? F.threadId : null,
            workspaceStrategy: s,
            modelSelection: r,
            runtimeMode: F.runtimeMode,
            interactionMode: F.interactionMode,
            creationSource: `web`,
          };
        ((R.current = !0), a(!0));
        let u = await N({ environmentId: l, input: c });
        (a(!1),
          u._tag === `Failure`
            ? ((R.current = !1), C(u) || fe(`Could not save scheduled task`, j(u)))
            : o());
      }),
      (t[38] = X),
      (t[39] = f),
      (t[40] = F),
      (t[41] = K),
      (t[42] = l),
      (t[43] = q),
      (t[44] = o),
      (t[45] = b),
      (t[46] = i),
      (t[47] = J),
      (t[48] = a),
      (t[49] = g.data),
      (t[50] = N),
      (t[51] = pe))
    : (pe = t[51]);
  let he = pe,
    ge = F.editingId ? `Edit task` : `New task`,
    _e;
  t[52] === ge
    ? (_e = t[53])
    : ((_e = (0, $.jsx)(je, { children: ge })), (t[52] = ge), (t[53] = _e));
  let ve;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, $.jsx)(we, {
        children: `Run a prompt automatically on an interval, at a fixed time, or when a webhook is called.`,
      })),
      (t[54] = ve))
    : (ve = t[54]);
  let ye;
  t[55] === _e
    ? (ye = t[56])
    : ((ye = (0, $.jsxs)(Ae, { children: [_e, ve] })), (t[55] = _e), (t[56] = ye));
  let be;
  t[57] === f
    ? (be = t[58])
    : ((be = f
        ? null
        : (0, $.jsx)(`p`, {
            className: `text-sm text-destructive`,
            children: `Reconnect this environment before saving.`,
          })),
      (t[57] = f),
      (t[58] = be));
  let xe = r !== null || i,
    Se;
  t[59] === c
    ? (Se = t[60])
    : ((Se = (e) => {
        let t = c.find((t) => t.environmentId === e);
        t && (u(t.environmentId), I(cn));
      }),
      (t[59] = c),
      (t[60] = Se));
  let Ce = d?.serverConfig ?? null,
    De;
  t[61] === Ce ? (De = t[62]) : ((De = k(Ce)), (t[61] = Ce), (t[62] = De));
  let Oe;
  t[63] === De
    ? (Oe = t[64])
    : ((Oe = (0, $.jsx)(Le, { kind: De, className: `size-4` })), (t[63] = De), (t[64] = Oe));
  let Me = d?.label ?? `Unavailable environment`,
    Ne;
  t[65] !== Oe || t[66] !== Me
    ? ((Ne = (0, $.jsx)(V, {
        id: `scheduled-task-environment`,
        size: `sm`,
        children: (0, $.jsx)(B, {
          children: (0, $.jsxs)(`span`, {
            className: `flex items-center gap-2`,
            children: [Oe, Me],
          }),
        }),
      })),
      (t[65] = Oe),
      (t[66] = Me),
      (t[67] = Ne))
    : (Ne = t[67]);
  let Pe;
  t[68] === c
    ? (Pe = t[69])
    : ((Pe = c.map((e) => {
        let { secondary: t } = ut(e, c);
        return (0, $.jsx)(
          z,
          {
            value: e.environmentId,
            label: e.label,
            children: (0, $.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, $.jsx)(Le, { kind: k(e.serverConfig), className: `size-4` }),
                (0, $.jsxs)(`span`, {
                  className: `min-w-0`,
                  children: [
                    (0, $.jsx)(`span`, { className: `block truncate`, children: e.label }),
                    t
                      ? (0, $.jsx)(`span`, {
                          className: `block max-w-72 truncate text-xs text-muted-foreground`,
                          children: t,
                        })
                      : null,
                  ],
                }),
              ],
            }),
          },
          e.environmentId,
        );
      })),
      (t[68] = c),
      (t[69] = Pe));
  let Fe;
  t[70] === Pe
    ? (Fe = t[71])
    : ((Fe = (0, $.jsx)(te, { children: Pe })), (t[70] = Pe), (t[71] = Fe));
  let Ie;
  t[72] !== l || t[73] !== xe || t[74] !== Se || t[75] !== Ne || t[76] !== Fe
    ? ((Ie = (0, $.jsx)(Ft, {
        label: `Runs on`,
        htmlFor: `scheduled-task-environment`,
        children: (0, $.jsxs)(H, { value: l, disabled: xe, onValueChange: Se, children: [Ne, Fe] }),
      })),
      (t[72] = l),
      (t[73] = xe),
      (t[74] = Se),
      (t[75] = Ne),
      (t[76] = Fe),
      (t[77] = Ie))
    : (Ie = t[77]);
  let Re;
  t[78] === g.error
    ? (Re = t[79])
    : ((Re = g.error
        ? (0, $.jsx)(`p`, {
            className: `text-sm text-destructive`,
            role: `status`,
            children: g.error,
          })
        : null),
      (t[78] = g.error),
      (t[79] = Re));
  let ze;
  t[80] === K
    ? (ze = t[81])
    : ((ze = K
        ? (0, $.jsx)(`p`, {
            className: `text-xs text-destructive`,
            role: `status`,
            children: `This scheduled task no longer exists.`,
          })
        : null),
      (t[80] = K),
      (t[81] = ze));
  let Be;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (e) => I((t) => ({ ...t, title: e.target.value }))), (t[82] = Be))
    : (Be = t[82]);
  let Ve;
  t[83] === F.title
    ? (Ve = t[84])
    : ((Ve = (0, $.jsx)(Ft, {
        label: `Name`,
        htmlFor: `scheduled-task-title`,
        children: (0, $.jsx)(D, {
          id: `scheduled-task-title`,
          placeholder: `e.g. Check for Sentry issues`,
          value: F.title,
          onChange: Be,
        }),
      })),
      (t[83] = F.title),
      (t[84] = Ve));
  let We;
  t[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => I((t) => ({ ...t, projectId: e ?? `` }))), (t[85] = We))
    : (We = t[85]);
  let Ye = le?.title,
    Ze;
  t[86] === Ye
    ? (Ze = t[87])
    : ((Ze = (0, $.jsx)(V, {
        size: `sm`,
        id: `scheduled-task-project`,
        children: (0, $.jsx)(B, { placeholder: `Select a project`, children: Ye }),
      })),
      (t[86] = Ye),
      (t[87] = Ze));
  let Qe;
  if (t[88] !== v || t[89] !== b) {
    let e;
    (t[91] === v
      ? (e = t[92])
      : ((e = (e) =>
          (0, $.jsxs)(
            z,
            {
              value: e.id,
              label: e.title,
              children: [
                (0, $.jsx)(`span`, { className: `block truncate`, children: e.title }),
                v.some(
                  (t) =>
                    t.title === e.title && (t.environmentId !== e.environmentId || t.id !== e.id),
                )
                  ? (0, $.jsx)(`span`, {
                      className: `block max-w-72 truncate text-xs text-muted-foreground`,
                      children: e.workspaceRoot,
                    })
                  : null,
              ],
            },
            e.id,
          )),
        (t[91] = v),
        (t[92] = e)),
      (Qe = b.map(e)),
      (t[88] = v),
      (t[89] = b),
      (t[90] = Qe));
  } else Qe = t[90];
  let $e;
  t[93] === Qe
    ? ($e = t[94])
    : (($e = (0, $.jsx)(te, { children: Qe })), (t[93] = Qe), (t[94] = $e));
  let et;
  t[95] !== J || t[96] !== Ze || t[97] !== $e
    ? ((et = (0, $.jsx)(Ft, {
        label: `Project`,
        htmlFor: `scheduled-task-project`,
        children: (0, $.jsxs)(H, { value: J, onValueChange: We, children: [Ze, $e] }),
      })),
      (t[95] = J),
      (t[96] = Ze),
      (t[97] = $e),
      (t[98] = et))
    : (et = t[98]);
  let nt;
  t[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (e) => I((t) => ({ ...t, workspaceMode: e }))), (t[99] = nt))
    : (nt = t[99]);
  let at = jt[F.workspaceMode],
    ot;
  t[100] === at
    ? (ot = t[101])
    : ((ot = (0, $.jsx)(V, {
        size: `sm`,
        id: `scheduled-task-workspace`,
        children: (0, $.jsx)(B, { children: at }),
      })),
      (t[100] = at),
      (t[101] = ot));
  let st;
  t[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, $.jsxs)(te, {
        children: [
          (0, $.jsx)(z, { value: `worktree`, children: `Create a new worktree` }),
          (0, $.jsx)(z, { value: `root`, children: `Use the project checkout` }),
          (0, $.jsx)(z, { value: `existing_worktree`, children: `Use a specific checkout` }),
        ],
      })),
      (t[102] = st))
    : (st = t[102]);
  let ct;
  t[103] !== F.workspaceMode || t[104] !== ot
    ? ((ct = (0, $.jsx)(Ft, {
        label: `Workspace`,
        htmlFor: `scheduled-task-workspace`,
        children: (0, $.jsxs)(H, { value: F.workspaceMode, onValueChange: nt, children: [ot, st] }),
      })),
      (t[103] = F.workspaceMode),
      (t[104] = ot),
      (t[105] = ct))
    : (ct = t[105]);
  let dt;
  t[106] !== et || t[107] !== ct
    ? ((dt = (0, $.jsxs)(`div`, { className: `grid gap-3 sm:grid-cols-2`, children: [et, ct] })),
      (t[106] = et),
      (t[107] = ct),
      (t[108] = dt))
    : (dt = t[108]);
  let ft;
  t[109] !== f ||
  t[110] !== F.baseRef ||
  t[111] !== F.startFromOrigin ||
  t[112] !== F.workspaceMode ||
  t[113] !== l ||
  t[114] !== i ||
  t[115] !== le?.workspaceRoot ||
  t[116] !== J
    ? ((ft =
        F.workspaceMode === `worktree`
          ? (0, $.jsx)(Ft, {
              label: `Base branch`,
              htmlFor: `scheduled-task-base-ref`,
              children: (0, $.jsx)(
                Et,
                {
                  id: `scheduled-task-base-ref`,
                  environmentId: l,
                  cwd: le?.workspaceRoot ?? null,
                  value: F.baseRef,
                  onValueChange: (e) => I((t) => ({ ...t, baseRef: e })),
                  startFromOrigin: F.startFromOrigin,
                  onStartFromOriginChange: (e) => I((t) => ({ ...t, startFromOrigin: e })),
                  disabled: i || !f,
                },
                `${l}:${J}`,
              ),
            })
          : null),
      (t[109] = f),
      (t[110] = F.baseRef),
      (t[111] = F.startFromOrigin),
      (t[112] = F.workspaceMode),
      (t[113] = l),
      (t[114] = i),
      (t[115] = le?.workspaceRoot),
      (t[116] = J),
      (t[117] = ft))
    : (ft = t[117]);
  let mt;
  t[118] !== F.existingWorktreePath || t[119] !== F.workspaceMode
    ? ((mt =
        F.workspaceMode === `existing_worktree`
          ? (0, $.jsx)(Ft, {
              label: `Checkout path`,
              htmlFor: `scheduled-task-checkout`,
              children: (0, $.jsx)(D, {
                id: `scheduled-task-checkout`,
                value: F.existingWorktreePath,
                placeholder: `/path/to/checkout`,
                onChange: (e) => I((t) => ({ ...t, existingWorktreePath: e.target.value })),
              }),
            })
          : null),
      (t[118] = F.existingWorktreePath),
      (t[119] = F.workspaceMode),
      (t[120] = mt))
    : (mt = t[120]);
  let ht;
  t[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (e) => I((t) => ({ ...t, prompt: e.target.value }))), (t[121] = ht))
    : (ht = t[121]);
  let gt;
  t[122] === F.prompt
    ? (gt = t[123])
    : ((gt = (0, $.jsx)(Ft, {
        label: `Prompt`,
        htmlFor: `scheduled-task-prompt`,
        children: (0, $.jsx)(me, {
          id: `scheduled-task-prompt`,
          className: `max-h-64 overflow-y-auto`,
          placeholder: `What should the agent do each time this runs?`,
          value: F.prompt,
          onChange: ht,
        }),
      })),
      (t[122] = F.prompt),
      (t[123] = gt));
  let vt = i || !f,
    yt;
  t[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (e, t) => I((n) => ({ ...n, modelKey: `${e}:${t}` }))), (t[124] = yt))
    : (yt = t[124]);
  let St;
  t[125] !== Y || t[126] !== ce || t[127] !== l || t[128] !== Z || t[129] !== de || t[130] !== vt
    ? ((St = (0, $.jsx)(Ft, {
        label: `Model`,
        children: (0, $.jsx)(`div`, {
          children: (0, $.jsx)(bt, {
            environmentId: l,
            disabled: vt,
            activeInstanceId: Y,
            model: ce,
            lockedProvider: null,
            instanceEntries: Z,
            modelOptionsByInstance: de,
            isComposerOwned: !1,
            triggerClassName: pt,
            onInstanceModelChange: yt,
          }),
        }),
      })),
      (t[125] = Y),
      (t[126] = ce),
      (t[127] = l),
      (t[128] = Z),
      (t[129] = de),
      (t[130] = vt),
      (t[131] = St))
    : (St = t[131]);
  let Ct;
  t[132] === r
    ? (Ct = t[133])
    : ((Ct =
        r?.schedule.type === `interval` && r.schedule.everyMs < 6e4
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              role: `status`,
              children: `This task uses a legacy interval below one minute. Saving updates it to at least one minute.`,
            })
          : null),
      (t[132] = r),
      (t[133] = Ct));
  let wt;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, $.jsx)(rt, { children: `Schedule` })), (t[134] = wt))
    : (wt = t[134]);
  let Tt;
  t[135] === F.scheduleMode
    ? (Tt = t[136])
    : ((Tt = [F.scheduleMode]), (t[135] = F.scheduleMode), (t[136] = Tt));
  let Dt, kt, At, Pt;
  t[137] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (e) => {
        let t = e[0];
        (t === `fixed` || t === `interval` || t === `webhook`) &&
          I((e) => ({
            ...e,
            scheduleMode: t,
            prompt: t === `webhook` && !e.prompt.trim() ? qe : e.prompt,
          }));
      }),
      (kt = (0, $.jsx)(lt, { value: `fixed`, children: `At a time` })),
      (At = (0, $.jsx)(lt, { value: `interval`, children: `Every interval` })),
      (Pt = (0, $.jsx)(lt, { value: `webhook`, children: `On webhook` })),
      (t[137] = Dt),
      (t[138] = kt),
      (t[139] = At),
      (t[140] = Pt))
    : ((Dt = t[137]), (kt = t[138]), (At = t[139]), (Pt = t[140]));
  let Lt;
  t[141] === Tt
    ? (Lt = t[142])
    : ((Lt = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-2`,
        children: [
          wt,
          (0, $.jsxs)(tt, {
            "aria-label": `Schedule type`,
            value: Tt,
            onValueChange: Dt,
            children: [kt, At, Pt],
          }),
        ],
      })),
      (t[141] = Tt),
      (t[142] = Lt));
  let Rt;
  t[143] !== F.coalesceKey ||
  t[144] !== F.coalesceWindowSeconds ||
  t[145] !== F.filters ||
  t[146] !== F.intervalMinutes ||
  t[147] !== F.maxDeliveryAgeMinutes ||
  t[148] !== F.replayKey ||
  t[149] !== F.scheduleMode ||
  t[150] !== F.signatureEnabled ||
  t[151] !== F.signatureEncoding ||
  t[152] !== F.signatureHeader ||
  t[153] !== F.signaturePrefix ||
  t[154] !== F.signatureSecret ||
  t[155] !== F.timeOfDay ||
  t[156] !== F.weekdays ||
  t[157] !== l ||
  t[158] !== q
    ? ((Rt =
        F.scheduleMode === `webhook`
          ? (0, $.jsxs)(`div`, {
              className: `space-y-4`,
              children: [
                (0, $.jsx)(tn, { environmentId: l, task: q }),
                (0, $.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: `Each request runs the prompt. Use {{body.path}}, {{headers.name}}, {{query.name}}, {{body}} or {{request}} in the prompt; only what it names reaches the agent.`,
                }),
                (0, $.jsx)(Ft, {
                  label: `Skip requests older than`,
                  hint: `minutes, optional`,
                  htmlFor: `scheduled-task-max-age`,
                  children: (0, $.jsx)(D, {
                    id: `scheduled-task-max-age`,
                    type: `number`,
                    nativeInput: !0,
                    min: 1,
                    max: E,
                    placeholder: `Run every request`,
                    value: F.maxDeliveryAgeMinutes,
                    onChange: (e) => I((t) => ({ ...t, maxDeliveryAgeMinutes: e.target.value })),
                  }),
                }),
                (0, $.jsx)(Nt, {
                  filters: F.filters,
                  onChange: (e) => I((t) => ({ ...t, filters: e })),
                }),
                (0, $.jsx)(Ft, {
                  label: `Replay key`,
                  hint: `template, optional`,
                  htmlFor: `scheduled-task-replay-key`,
                  children: (0, $.jsx)(D, {
                    id: `scheduled-task-replay-key`,
                    placeholder: `{{headers.delivery-id}}`,
                    value: F.replayKey,
                    onChange: (e) => I((t) => ({ ...t, replayKey: e.target.value })),
                  }),
                }),
                (0, $.jsx)(Ft, {
                  label: `Coalesce key`,
                  hint: `template, optional`,
                  htmlFor: `scheduled-task-coalesce-key`,
                  children: (0, $.jsx)(D, {
                    id: `scheduled-task-coalesce-key`,
                    placeholder: `{{body.id}}`,
                    value: F.coalesceKey,
                    onChange: (e) => I((t) => ({ ...t, coalesceKey: e.target.value })),
                  }),
                }),
                (0, $.jsx)(Ft, {
                  label: `Coalesce window`,
                  hint: `seconds, 10–3600`,
                  htmlFor: `scheduled-task-coalesce-window`,
                  children: (0, $.jsx)(D, {
                    id: `scheduled-task-coalesce-window`,
                    type: `number`,
                    nativeInput: !0,
                    min: 10,
                    max: 3600,
                    placeholder: `120`,
                    value: F.coalesceWindowSeconds,
                    onChange: (e) => I((t) => ({ ...t, coalesceWindowSeconds: e.target.value })),
                  }),
                }),
                (0, $.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: `Replay keys suppress repeat deliveries for 7 days. Coalescing runs the latest payload once when the window from the first delivery closes. Empty keys run normally.`,
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-4`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `min-w-0 space-y-1`,
                      children: [
                        (0, $.jsx)(rt, {
                          htmlFor: `scheduled-task-signature`,
                          children: `Require signature`,
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-sm text-muted-foreground`,
                          children: `Reject requests without a valid HMAC-SHA256 signature of the body.`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(it, {
                      id: `scheduled-task-signature`,
                      checked: F.signatureEnabled,
                      onCheckedChange: (e) => I((t) => ({ ...t, signatureEnabled: e })),
                    }),
                  ],
                }),
                F.signatureEnabled
                  ? (0, $.jsxs)(`div`, {
                      className: `grid gap-3 sm:grid-cols-2`,
                      children: [
                        (0, $.jsx)(Ft, {
                          label: `Header`,
                          htmlFor: `scheduled-task-signature-header`,
                          children: (0, $.jsx)(D, {
                            id: `scheduled-task-signature-header`,
                            value: F.signatureHeader,
                            onChange: (e) => I((t) => ({ ...t, signatureHeader: e.target.value })),
                          }),
                        }),
                        (0, $.jsx)(Ft, {
                          label: `Prefix`,
                          htmlFor: `scheduled-task-signature-prefix`,
                          children: (0, $.jsx)(D, {
                            id: `scheduled-task-signature-prefix`,
                            value: F.signaturePrefix,
                            placeholder: `None`,
                            onChange: (e) => I((t) => ({ ...t, signaturePrefix: e.target.value })),
                          }),
                        }),
                        (0, $.jsx)(Ft, {
                          label: `Encoding`,
                          htmlFor: `scheduled-task-signature-encoding`,
                          children: (0, $.jsxs)(H, {
                            value: F.signatureEncoding,
                            onValueChange: (e) =>
                              I((t) => ({
                                ...t,
                                signatureEncoding: e === `base64` ? `base64` : `hex`,
                              })),
                            children: [
                              (0, $.jsx)(V, {
                                size: `sm`,
                                id: `scheduled-task-signature-encoding`,
                                children: (0, $.jsx)(B, { children: F.signatureEncoding }),
                              }),
                              (0, $.jsxs)(te, {
                                children: [
                                  (0, $.jsx)(z, { value: `hex`, children: `hex` }),
                                  (0, $.jsx)(z, { value: `base64`, children: `base64` }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, $.jsx)(Ft, {
                          label: `Secret`,
                          htmlFor: `scheduled-task-signature-secret`,
                          children: (0, $.jsx)(D, {
                            id: `scheduled-task-signature-secret`,
                            type: `password`,
                            autoComplete: `off`,
                            value: F.signatureSecret,
                            placeholder:
                              q?.schedule.type === `webhook` && q.webhook?.hasSecret
                                ? `Unchanged`
                                : `Shared secret`,
                            onChange: (e) => I((t) => ({ ...t, signatureSecret: e.target.value })),
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : F.scheduleMode === `fixed`
            ? (0, $.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-3`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, $.jsx)(rt, { htmlFor: `scheduled-task-time`, children: `Run at` }),
                      (0, $.jsx)(D, {
                        type: `time`,
                        id: `scheduled-task-time`,
                        nativeInput: !0,
                        className: `w-32`,
                        value: F.timeOfDay,
                        onChange: (e) => I((t) => ({ ...t, timeOfDay: e.target.value })),
                      }),
                      (0, $.jsx)(`span`, {
                        className: `text-xs text-muted-foreground`,
                        children: `on`,
                      }),
                    ],
                  }),
                  (0, $.jsx)(tt, {
                    multiple: !0,
                    variant: `outline`,
                    size: `sm`,
                    "aria-label": `Days to run`,
                    value: [...F.weekdays].map(String),
                    onValueChange: (e) => {
                      e.length !== 0 && I((t) => ({ ...t, weekdays: new Set(e.map(Number)) }));
                    },
                    children: Ot.map(sn),
                  }),
                ],
              })
            : (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(rt, { htmlFor: `scheduled-task-interval`, children: `Run every` }),
                  (0, $.jsx)(D, {
                    type: `number`,
                    id: `scheduled-task-interval`,
                    nativeInput: !0,
                    min: 1,
                    step: `any`,
                    className: `w-24`,
                    value: F.intervalMinutes,
                    onChange: (e) => I((t) => ({ ...t, intervalMinutes: e.target.value })),
                  }),
                  (0, $.jsx)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: `minutes`,
                  }),
                ],
              })),
      (t[143] = F.coalesceKey),
      (t[144] = F.coalesceWindowSeconds),
      (t[145] = F.filters),
      (t[146] = F.intervalMinutes),
      (t[147] = F.maxDeliveryAgeMinutes),
      (t[148] = F.replayKey),
      (t[149] = F.scheduleMode),
      (t[150] = F.signatureEnabled),
      (t[151] = F.signatureEncoding),
      (t[152] = F.signatureHeader),
      (t[153] = F.signaturePrefix),
      (t[154] = F.signatureSecret),
      (t[155] = F.timeOfDay),
      (t[156] = F.weekdays),
      (t[157] = l),
      (t[158] = q),
      (t[159] = Rt))
    : (Rt = t[159]);
  let zt;
  t[160] !== Ct || t[161] !== Lt || t[162] !== Rt
    ? ((zt = (0, $.jsxs)(`div`, { className: `space-y-3`, children: [Ct, Lt, Rt] })),
      (t[160] = Ct),
      (t[161] = Lt),
      (t[162] = Rt),
      (t[163] = zt))
    : (zt = t[163]);
  let Bt;
  t[164] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Bt = (0, $.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, $.jsx)(rt, { htmlFor: `scheduled-task-enabled`, children: `Enabled` }),
          (0, $.jsx)(`p`, {
            id: `scheduled-task-enabled-description`,
            className: `text-sm text-muted-foreground`,
            children: `Disabled tasks stay saved but do not run.`,
          }),
        ],
      })),
      (t[164] = Bt))
    : (Bt = t[164]);
  let Vt;
  t[165] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = (e) => I((t) => ({ ...t, enabled: e }))), (t[165] = Vt))
    : (Vt = t[165]);
  let Ht;
  t[166] === F.enabled
    ? (Ht = t[167])
    : ((Ht = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4`,
        children: [
          Bt,
          (0, $.jsx)(it, {
            id: `scheduled-task-enabled`,
            "aria-describedby": `scheduled-task-enabled-description`,
            checked: F.enabled,
            onCheckedChange: Vt,
          }),
        ],
      })),
      (t[166] = F.enabled),
      (t[167] = Ht));
  let Ut;
  t[168] !== i ||
  t[169] !== be ||
  t[170] !== Ie ||
  t[171] !== Re ||
  t[172] !== ze ||
  t[173] !== Ve ||
  t[174] !== dt ||
  t[175] !== ft ||
  t[176] !== mt ||
  t[177] !== gt ||
  t[178] !== St ||
  t[179] !== zt ||
  t[180] !== Ht
    ? ((Ut = (0, $.jsx)(Te, {
        children: (0, $.jsxs)(`fieldset`, {
          disabled: i,
          className: `min-w-0 space-y-5`,
          children: [be, Ie, Re, ze, Ve, dt, ft, mt, gt, St, zt, Ht],
        }),
      })),
      (t[168] = i),
      (t[169] = be),
      (t[170] = Ie),
      (t[171] = Re),
      (t[172] = ze),
      (t[173] = Ve),
      (t[174] = dt),
      (t[175] = ft),
      (t[176] = mt),
      (t[177] = gt),
      (t[178] = St),
      (t[179] = zt),
      (t[180] = Ht),
      (t[181] = Ut))
    : (Ut = t[181]);
  let Wt;
  t[182] === i
    ? (Wt = t[183])
    : ((Wt = (0, $.jsx)(Ee, {
        render: (0, $.jsx)(p, { variant: `outline`, size: `sm`, disabled: i }),
        children: `Cancel`,
      })),
      (t[182] = i),
      (t[183] = Wt));
  let Gt = !A || i || K || !f || !g.data,
    Kt;
  t[184] === he ? (Kt = t[185]) : ((Kt = () => void he()), (t[184] = he), (t[185] = Kt));
  let qt = F.editingId ? `Save task` : `Create task`,
    Jt;
  t[186] !== Gt || t[187] !== Kt || t[188] !== qt
    ? ((Jt = (0, $.jsx)(p, { size: `sm`, disabled: Gt, onClick: Kt, children: qt })),
      (t[186] = Gt),
      (t[187] = Kt),
      (t[188] = qt),
      (t[189] = Jt))
    : (Jt = t[189]);
  let Yt;
  t[190] !== Wt || t[191] !== Jt
    ? ((Yt = (0, $.jsxs)(ke, { children: [Wt, Jt] })), (t[190] = Wt), (t[191] = Jt), (t[192] = Yt))
    : (Yt = t[192]);
  let Xt;
  return (
    t[193] !== ye || t[194] !== Ut || t[195] !== Yt
      ? ((Xt = (0, $.jsxs)($.Fragment, { children: [ye, Ut, Yt] })),
        (t[193] = ye),
        (t[194] = Ut),
        (t[195] = Yt),
        (t[196] = Xt))
      : (Xt = t[196]),
    Xt
  );
}
function sn(e) {
  return (0, $.jsx)(lt, { value: String(e), "aria-label": kt[e], children: At[e] }, e);
}
function cn(e) {
  return {
    ...e,
    projectId: ``,
    modelKey: ``,
    baseModelSelection: null,
    baseRef: `main`,
    startFromOrigin: !0,
    existingWorktreePath: ``,
  };
}
function ln(e, t) {
  ce.add(le({ type: `error`, title: e, description: t instanceof Error ? t.message : String(t) }));
}
export { Tt as a, Ct as i, Ht as n, Lt as r, zt as t };
//# sourceMappingURL=ScheduledTasksSettings-m9f5rWON.js.map
