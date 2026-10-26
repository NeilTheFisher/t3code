import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./arrow-right-JFWisfUC.js";
import { s as a } from "./wifi-off-BWB4rJNd.js";
import { d as o } from "./workflow-BDTBfiWX.js";
import { t as s } from "./camera-B4warUo1.js";
import { t as c } from "./ellipsis-vertical-DcjkWE3S.js";
import { t as l } from "./external-link-DV7LH7eG.js";
import { t as u } from "./history-BmVqg-o-.js";
import { t as d } from "./minus-Czm2HkK6.js";
import { t as f } from "./mouse-pointer-click-CD8GgTSR.js";
import { t as p } from "./plus-B20TfFan.js";
import { t as m } from "./radio-tower-BXIoD0C-.js";
import { t as h } from "./x-Blp0Exqg.js";
import {
  A as g,
  Bn as _,
  Dr as v,
  N_ as y,
  Oc as b,
  Ol as x,
  Qn as S,
  Sc as C,
  Vn as w,
  Wn as T,
  Xl as E,
  Zn as D,
  ar as O,
  bc as k,
  dr as A,
  er as ee,
  fr as te,
  ir as ne,
  iu as j,
  lr as re,
  mr as M,
  nr as N,
  or as P,
  ph as ie,
  pr as ae,
  rl as oe,
  ru as se,
  t as ce,
  tl as F,
  tr as le,
  wc as ue,
  yh as I,
} from "./utils-CPoejuy5.js";
import { S as de } from "./entities-CgVpsCCl.js";
import { st as L } from "./ChatMarkdown-BSLpN1nk.js";
import { D as fe, E as R, P as pe, r as me } from "./useSettings-N-JG2LFZ.js";
import { a as z, r as he } from "./session-0UrRHIau.js";
import { t as ge } from "./use-atom-command-DGAuqAck.js";
import { l as _e } from "./rightPanelStore-DEayojei.js";
import { t as B } from "./localApi-CWy6n-K6.js";
import { i as V } from "./toast-B4KPIJDZ.js";
import { t as ve } from "./toastHelpers-CSQRKo4F.js";
import { L as H, R as ye } from "./PanelLayoutControls-CBiOLaSo.js";
import { a as be, o as U, r as xe, t as W } from "./empty-CgJfsiJ2.js";
import { n as G, t as Se } from "./discovery-list-JybmEV9E.js";
import { t as Ce } from "./observeResize-SVLLrLKP.js";
import {
  E as we,
  T as Te,
  a as Ee,
  f as De,
  i as Oe,
  n as ke,
  o as Ae,
  r as je,
  t as Me,
  u as Ne,
  x as Pe,
} from "./browserHistoryStore-heVS6T5j.js";
import { n as Fe } from "./openFileInPreview-CSVdCknG.js";
import { t as Ie } from "./preview-D-juEBB6.js";
import { a as Le, i as Re, o as ze, r as Be, t as Ve } from "./preview-BuXyUmSo.js";
import { n as He, r as Ue, t as We } from "./input-group-C7DCv8iP.js";
import { t as K } from "./previewBridge-C4h_myCm.js";
import {
  $c as Ge,
  $o as Ke,
  Al as qe,
  Ao as Je,
  Co as Ye,
  Es as Xe,
  Fo as Ze,
  Io as Qe,
  Oo as $e,
  Po as et,
  Ro as tt,
  So as nt,
  Ss as rt,
  To as it,
  Ts as at,
  bo as ot,
  cl as st,
  jo as ct,
  ko as lt,
  wo as ut,
  xo as dt,
} from "./main-BZa0O6xN.js";
import {
  a as ft,
  c as pt,
  i as mt,
  l as ht,
  n as gt,
  o as _t,
  r as vt,
  s as yt,
  u as q,
} from "./_chat-LvMSbSFt.js";
var J = e(t(), 1),
  Y = n(),
  bt = `data:image/png;base64,`;
function xt(e) {
  if (!e.screenshot) return { status: `none` };
  try {
    let { dataUrl: t } = e.screenshot;
    if (!t.startsWith(bt)) return { status: `failed` };
    let n = x(t, `preview-annotation-${e.id}.png`, `image/png`);
    return n.size > 0 ? { status: `captured`, file: n } : { status: `failed` };
  } catch {
    return { status: `failed` };
  }
}
var X = e(r(), 1),
  St = () => {};
function Ct(e) {
  let t = (0, Y.c)(88),
    {
      url: n,
      loading: r,
      canGoBack: o,
      canGoForward: c,
      refreshDisabled: u,
      inputDisabled: d,
      focusUrlNonce: p,
      onBack: m,
      onForward: h,
      onRefresh: g,
      onSubmit: y,
      onOpenInBrowser: b,
      onCapture: x,
      captureDisabled: S,
      recording: C,
      onPictureInPicture: E,
      pictureInPicture: D,
      pictureInPictureDisabled: O,
      onPickElement: k,
      pickActive: A,
      pickDisabled: ee,
      pickDisabledReason: te,
      trailingActions: ne,
      leadingActions: j,
    } = e,
    re = (0, J.useRef)(null),
    [M, N] = (0, J.useState)(n),
    [P, ie] = (0, J.useState)(!1),
    ae,
    oe;
  (t[0] === p
    ? ((ae = t[1]), (oe = t[2]))
    : ((ae = () => {
        if (p == null) return;
        let e = re.current;
        e && e.focus();
      }),
      (oe = [p]),
      (t[0] = p),
      (t[1] = ae),
      (t[2] = oe)),
    (0, J.useEffect)(ae, oe));
  let se;
  t[3] !== M || t[4] !== y
    ? ((se = (e) => {
        e?.preventDefault();
        let t = M.trim();
        t.length !== 0 && (y(t), re.current?.blur());
      }),
      (t[3] = M),
      (t[4] = y),
      (t[5] = se))
    : (se = t[5]);
  let F = se,
    le = o ? m : St,
    ue = !o,
    I;
  t[6] !== le || t[7] !== ue
    ? ((I = (0, X.jsx)(v, {
        variant: `ghost`,
        size: `icon-xs`,
        onClick: le,
        disabled: ue,
        "aria-label": `Back`,
        type: `button`,
      })),
      (t[6] = le),
      (t[7] = ue),
      (t[8] = I))
    : (I = t[8]);
  let de;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, X.jsx)(qe, {})), (t[9] = de))
    : (de = t[9]);
  let L;
  t[10] === I
    ? (L = t[11])
    : ((L = (0, X.jsx)(T, { render: I, children: de })), (t[10] = I), (t[11] = L));
  let fe;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, X.jsx)(w, { children: `Back` })), (t[12] = fe))
    : (fe = t[12]);
  let R;
  t[13] === L
    ? (R = t[14])
    : ((R = (0, X.jsxs)(_, { children: [L, fe] })), (t[13] = L), (t[14] = R));
  let pe = c ? h : St,
    me = !c,
    z;
  t[15] !== pe || t[16] !== me
    ? ((z = (0, X.jsx)(v, {
        variant: `ghost`,
        size: `icon-xs`,
        onClick: pe,
        disabled: me,
        "aria-label": `Forward`,
        type: `button`,
      })),
      (t[15] = pe),
      (t[16] = me),
      (t[17] = z))
    : (z = t[17]);
  let he;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, X.jsx)(i, {})), (t[18] = he))
    : (he = t[18]);
  let ge;
  t[19] === z
    ? (ge = t[20])
    : ((ge = (0, X.jsx)(T, { render: z, children: he })), (t[19] = z), (t[20] = ge));
  let _e;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, X.jsx)(w, { children: `Forward` })), (t[21] = _e))
    : (_e = t[21]);
  let B;
  t[22] === ge
    ? (B = t[23])
    : ((B = (0, X.jsxs)(_, { children: [ge, _e] })), (t[22] = ge), (t[23] = B));
  let V = u ? St : g,
    ve = r ? `Stop` : `Refresh`,
    H;
  t[24] !== u || t[25] !== V || t[26] !== ve
    ? ((H = (0, X.jsx)(v, {
        variant: `ghost`,
        size: `icon-xs`,
        onClick: V,
        disabled: u,
        "aria-label": ve,
        type: `button`,
      })),
      (t[24] = u),
      (t[25] = V),
      (t[26] = ve),
      (t[27] = H))
    : (H = t[27]);
  let ye;
  t[28] === r
    ? (ye = t[29])
    : ((ye = (0, X.jsx)(Ge, { refreshing: r })), (t[28] = r), (t[29] = ye));
  let be;
  t[30] !== H || t[31] !== ye
    ? ((be = (0, X.jsx)(T, { render: H, children: ye })), (t[30] = H), (t[31] = ye), (t[32] = be))
    : (be = t[32]);
  let U = r ? `Loading…` : `Refresh`,
    xe;
  t[33] === U ? (xe = t[34]) : ((xe = (0, X.jsx)(w, { children: U })), (t[33] = U), (t[34] = xe));
  let W;
  t[35] !== be || t[36] !== xe
    ? ((W = (0, X.jsxs)(_, { children: [be, xe] })), (t[35] = be), (t[36] = xe), (t[37] = W))
    : (W = t[37]);
  let G;
  t[38] !== R || t[39] !== B || t[40] !== W
    ? ((G = (0, X.jsxs)(`div`, {
        className: `flex items-center gap-0.5`,
        role: `group`,
        "aria-label": `Navigation`,
        children: [R, B, W],
      })),
      (t[38] = R),
      (t[39] = B),
      (t[40] = W),
      (t[41] = G))
    : (G = t[41]);
  let Se = P ? M : n,
    Ce;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (e) => N(e.target.value)), (t[42] = Ce))
    : (Ce = t[42]);
  let we;
  t[43] === n
    ? (we = t[44])
    : ((we = () => {
        (N(n), ie(!0), queueMicrotask(() => re.current?.select()));
      }),
      (t[43] = n),
      (t[44] = we));
  let Te;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = () => {
        ie(!1);
      }),
      (t[45] = Te))
    : (Te = t[45]);
  let Ee;
  t[46] !== F || t[47] !== n
    ? ((Ee = (e) => {
        (e.key === `Enter` && F(e),
          e.key === `Escape` && (e.preventDefault(), N(n), re.current?.blur()));
      }),
      (t[46] = F),
      (t[47] = n),
      (t[48] = Ee))
    : (Ee = t[48]);
  let De;
  t[49] !== d || t[50] !== Se || t[51] !== we || t[52] !== Ee
    ? ((De = (0, X.jsx)(_, {
        children: (0, X.jsx)(T, {
          render: (0, X.jsx)(Ue, {
            ref: re,
            value: Se,
            onChange: Ce,
            onFocus: we,
            onBlur: Te,
            onKeyDown: Ee,
            placeholder: `Search or enter URL`,
            spellCheck: !1,
            disabled: d,
            "data-preview-url-input": !0,
            size: `sm`,
          }),
        }),
      })),
      (t[49] = d),
      (t[50] = Se),
      (t[51] = we),
      (t[52] = Ee),
      (t[53] = De))
    : (De = t[53]);
  let Oe;
  t[54] !== P || t[55] !== b
    ? ((Oe =
        b && !P
          ? (0, X.jsx)(He, {
              align: `inline-end`,
              children: (0, X.jsx)(`span`, {
                className: `pointer-events-none flex opacity-0 transition-opacity focus-within:pointer-events-auto focus-within:opacity-100 group-hover/address:pointer-events-auto group-hover/address:opacity-100`,
                children: (0, X.jsxs)(_, {
                  children: [
                    (0, X.jsx)(T, {
                      render: (0, X.jsx)(v, {
                        variant: `ghost`,
                        size: `icon-xs`,
                        onClick: b,
                        "aria-label": `Open in system browser`,
                        type: `button`,
                      }),
                      children: (0, X.jsx)(l, {}),
                    }),
                    (0, X.jsx)(w, { children: `Open in system browser` }),
                  ],
                }),
              }),
            })
          : null),
      (t[54] = P),
      (t[55] = b),
      (t[56] = Oe))
    : (Oe = t[56]);
  let ke;
  t[57] !== De || t[58] !== Oe
    ? ((ke = (0, X.jsxs)(We, {
        variant: `ghost`,
        className: `group/address h-7 flex-1`,
        children: [De, Oe],
      })),
      (t[57] = De),
      (t[58] = Oe),
      (t[59] = ke))
    : (ke = t[59]);
  let Ae;
  t[60] !== k || t[61] !== A || t[62] !== ee || t[63] !== te
    ? ((Ae = k
        ? (0, X.jsxs)(_, {
            children: [
              (0, X.jsx)(T, {
                render: (0, X.jsx)(v, {
                  variant: A ? `secondary` : `ghost`,
                  size: `icon-xs`,
                  onClick: k,
                  disabled: ee,
                  "aria-label": A ? `Cancel annotation` : `Annotate preview`,
                  "aria-pressed": A ? `true` : `false`,
                  type: `button`,
                }),
                children: (0, X.jsx)(f, { className: ce(A && `text-primary`) }),
              }),
              (0, X.jsx)(w, {
                children:
                  ee && te
                    ? te
                    : A
                      ? `Cancel annotation (Esc)`
                      : `Annotate elements, regions, and drawings`,
              }),
            ],
          })
        : null),
      (t[60] = k),
      (t[61] = A),
      (t[62] = ee),
      (t[63] = te),
      (t[64] = Ae))
    : (Ae = t[64]);
  let je;
  t[65] !== S || t[66] !== x || t[67] !== C
    ? ((je = x
        ? (0, X.jsxs)(_, {
            children: [
              (0, X.jsxs)(T, {
                render: (0, X.jsx)(v, {
                  variant: C ? `secondary` : `ghost`,
                  size: `icon-xs`,
                  onClick: (e) => x(e.shiftKey),
                  "aria-label": C ? `Stop recording` : `Capture screenshot`,
                  type: `button`,
                  className: `relative`,
                  disabled: S,
                }),
                children: [
                  (0, X.jsx)(s, { className: ce(C && `text-destructive`) }),
                  C
                    ? (0, X.jsx)(`span`, {
                        className: `absolute right-0.5 top-0.5 size-1.5 motion-safe:animate-status-pulse rounded-full bg-destructive`,
                      })
                    : null,
                ],
              }),
              (0, X.jsx)(w, {
                children: C ? `Stop recording` : `Screenshot · Shift-click to record`,
              }),
            ],
          })
        : null),
      (t[65] = S),
      (t[66] = x),
      (t[67] = C),
      (t[68] = je))
    : (je = t[68]);
  let Me;
  t[69] !== E || t[70] !== D || t[71] !== O
    ? ((Me = E
        ? (0, X.jsxs)(_, {
            children: [
              (0, X.jsx)(T, {
                render: (0, X.jsx)(v, {
                  variant: D ? `secondary` : `ghost`,
                  size: `icon-xs`,
                  onClick: E,
                  "aria-label": D ? `Close floating preview` : `Float preview over chat`,
                  "aria-pressed": D ? `true` : `false`,
                  type: `button`,
                  disabled: O,
                }),
                children: (0, X.jsx)(a, { className: ce(D && `text-primary`) }),
              }),
              (0, X.jsx)(w, { children: D ? `Close floating preview` : `Float preview over chat` }),
            ],
          })
        : null),
      (t[69] = E),
      (t[70] = D),
      (t[71] = O),
      (t[72] = Me))
    : (Me = t[72]);
  let Ne;
  t[73] !== j ||
  t[74] !== F ||
  t[75] !== G ||
  t[76] !== ke ||
  t[77] !== Ae ||
  t[78] !== je ||
  t[79] !== Me ||
  t[80] !== ne
    ? ((Ne = (0, X.jsxs)(`form`, {
        onSubmit: F,
        className: `flex h-10 min-h-10 shrink-0 items-center gap-1 border-b border-border/60 bg-background px-2 in-data-[preview-panel-mode=inline]:mb-3 in-data-[preview-panel-mode=inline]:h-7 in-data-[preview-panel-mode=inline]:min-h-7 in-data-[preview-panel-mode=inline]:border-b-transparent`,
        "data-surface-subheader": !0,
        children: [G, j, ke, Ae, je, Me, ne],
      })),
      (t[73] = j),
      (t[74] = F),
      (t[75] = G),
      (t[76] = ke),
      (t[77] = Ae),
      (t[78] = je),
      (t[79] = Me),
      (t[80] = ne),
      (t[81] = Ne))
    : (Ne = t[81]);
  let Pe;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = { boxShadow: `0 0 6px 1px var(--color-ring)` }), (t[82] = Pe))
    : (Pe = t[82]);
  let Fe;
  t[83] === r
    ? (Fe = t[84])
    : ((Fe = (0, X.jsx)(`div`, {
        "aria-hidden": !0,
        "data-loading": r,
        className: `preview-loading-progress pointer-events-none absolute bottom-0 left-0 z-10 h-0.5 w-full origin-left rounded-r-full bg-primary`,
        style: Pe,
      })),
      (t[83] = r),
      (t[84] = Fe));
  let Ie;
  return (
    t[85] !== Ne || t[86] !== Fe
      ? ((Ie = (0, X.jsxs)(`div`, { className: `relative`, children: [Ne, Fe] })),
        (t[85] = Ne),
        (t[86] = Fe),
        (t[87] = Ie))
      : (Ie = t[87]),
    Ie
  );
}
function Z(e) {
  let t = (0, Y.c)(10),
    { threadRef: n, server: r, onOpen: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = Q(r)), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  t[2] !== r.requestedUrl || t[3] !== n
    ? ((s = (0, X.jsx)(H, { threadRef: n, url: r.requestedUrl })),
      (t[2] = r.requestedUrl),
      (t[3] = n),
      (t[4] = s))
    : (s = t[4]);
  let c = `${r.host}:${r.port}`,
    l;
  return (
    t[5] !== i || t[6] !== o || t[7] !== s || t[8] !== c
      ? ((l = (0, X.jsx)(G, { onClick: i, icon: s, title: o, description: c })),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Q(e) {
  return e.processName ? e.processName : `Listening`;
}
function wt(e) {
  let t = (0, Y.c)(26),
    { threadRef: n, entry: r, onOpen: i, onRemove: a } = e,
    o;
  t[0] === r.url ? (o = t[1]) : ((o = new URL(r.url)), (t[0] = r.url), (t[1] = o));
  let s = o,
    c = s.pathname === `/` ? `` : s.pathname,
    l = `${s.host}${c}${s.search}${s.hash}`,
    u;
  t[2] === r.lastVisitedAt
    ? (u = t[3])
    : ((u = Me(r.lastVisitedAt)
        ? (0, X.jsx)(Ke, { timestamp: new Date(r.lastVisitedAt).toISOString() })
        : null),
      (t[2] = r.lastVisitedAt),
      (t[3] = u));
  let d = u,
    f;
  t[4] !== r.url || t[5] !== n
    ? ((f = (0, X.jsx)(H, { threadRef: n, url: r.url })), (t[4] = r.url), (t[5] = n), (t[6] = f))
    : (f = t[6]);
  let p = r.title ?? l,
    m;
  t[7] === p
    ? (m = t[8])
    : ((m = (0, X.jsx)(`span`, {
        className: `truncate text-sm font-medium text-foreground`,
        children: p,
      })),
      (t[7] = p),
      (t[8] = m));
  let g = r.title ? `${l} · ` : ``,
    _;
  t[9] !== g || t[10] !== d
    ? ((_ = (0, X.jsxs)(`span`, {
        className: `truncate text-xs text-muted-foreground`,
        children: [g, d],
      })),
      (t[9] = g),
      (t[10] = d),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== m || t[13] !== _
    ? ((v = (0, X.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col`, children: [m, _] })),
      (t[12] = m),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== i || t[16] !== f || t[17] !== v
    ? ((y = (0, X.jsxs)(`button`, {
        type: `button`,
        onClick: i,
        className: `flex w-full items-center gap-3 px-3 py-3 pr-10 text-left hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
        children: [f, v],
      })),
      (t[15] = i),
      (t[16] = f),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b = `Remove ${l} from history`,
    x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(h, { className: `size-3.5` })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== a || t[21] !== b
    ? ((S = (0, X.jsx)(`button`, {
        type: `button`,
        "aria-label": b,
        onClick: a,
        className: `absolute right-3 rounded p-1 text-muted-foreground opacity-0 hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring group-hover:opacity-100`,
        children: x,
      })),
      (t[20] = a),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  return (
    t[23] !== S || t[24] !== y
      ? ((C = (0, X.jsxs)(`div`, {
          className: `group relative flex w-full items-center`,
          children: [y, S],
        })),
        (t[23] = S),
        (t[24] = y),
        (t[25] = C))
      : (C = t[25]),
    C
  );
}
function Tt(e) {
  let t = (0, Y.c)(9),
    n = Qe(e.environmentId, e.configuredUrls),
    r;
  if (
    t[0] !== e.configuredUrls ||
    t[1] !== e.environmentId ||
    t[2] !== n.configuredUrlProbing ||
    t[3] !== n.servers
  ) {
    let i;
    t[5] === e.environmentId
      ? (i = t[6])
      : ((i = (t) => ({ ...t, url: Ae(e.environmentId, t.url), requestedUrl: t.url })),
        (t[5] = e.environmentId),
        (t[6] = i));
    let a;
    (t[7] === e.configuredUrls
      ? (a = t[8])
      : ((a = e.configuredUrls ?? []), (t[7] = e.configuredUrls), (t[8] = a)),
      (r = Et({
        scanner: n.servers.map(i),
        configuredUrls: a,
        configuredUrlProbing: n.configuredUrlProbing,
      })),
      (t[0] = e.configuredUrls),
      (t[1] = e.environmentId),
      (t[2] = n.configuredUrlProbing),
      (t[3] = n.servers),
      (t[4] = r));
  } else r = t[4];
  return r;
}
function Et(e) {
  let t = new Map();
  for (let n of e.configuredUrls) {
    let e = Ot(n);
    if (!e) continue;
    let r = Dt(e.host, e.port);
    t.has(r) || t.set(r, e);
  }
  let n = [];
  for (let r of e.scanner) {
    let i = Dt(r.host, r.port),
      a = t.get(i);
    n.push({
      ...r,
      requestedUrl: a && e.configuredUrlProbing === !1 ? a.url : r.requestedUrl,
      source: a ? `configured` : `scanner`,
    });
  }
  return n.toSorted((e, t) => {
    let n = { configured: 0, scanner: 1 };
    return n[e.source] === n[t.source] ? e.port - t.port : n[e.source] - n[t.source];
  });
}
function Dt(e, t) {
  let n = e.toLowerCase();
  return `${Ve(n) ? `loopback` : n}:${t}`;
}
function Ot(e) {
  try {
    let t = new URL(e);
    if ((t.protocol !== `http:` && t.protocol !== `https:`) || !Ve(t.hostname)) return null;
    let n = t.port ? Number.parseInt(t.port, 10) : t.protocol === `http:` ? 80 : 443;
    return !Number.isFinite(n) || n <= 0 ? null : { host: t.hostname, port: n, url: t.href };
  } catch {
    return null;
  }
}
function kt(e) {
  let t = (0, Y.c)(24),
    {
      threadRef: n,
      environmentId: r,
      configuredUrls: i,
      recentEntries: a,
      onRemoveRecent: s,
      onOpenUrl: c,
    } = e,
    l;
  t[0] !== i || t[1] !== r
    ? ((l = { environmentId: r, configuredUrls: i }), (t[0] = i), (t[1] = r), (t[2] = l))
    : (l = t[2]);
  let d = Tt(l),
    f,
    p,
    h,
    g;
  if (t[3] !== c || t[4] !== s || t[5] !== a || t[6] !== d.length || t[7] !== n) {
    g = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = a.filter(At).slice(0, 8);
      if (d.length === 0 && e.length === 0) {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsxs)(W, {
              children: [
                (0, X.jsx)(be, {
                  variant: `icon`,
                  children: (0, X.jsx)(o, { className: `size-4.5 text-muted-foreground` }),
                }),
                (0, X.jsx)(U, { children: `No preview yet` }),
                (0, X.jsx)(xe, {
                  children: `Type a URL above, or run a dev script. Browser-ready localhost servers will show up here automatically.`,
                }),
              ],
            })),
            (t[12] = e))
          : (e = t[12]),
          (g = e));
        break bb0;
      }
      ((h = `scrollbar-gutter-both flex h-full min-h-0 overflow-y-auto px-5 py-8`),
        (f = `mx-auto flex w-full max-w-xl flex-col gap-6`),
        (p =
          e.length > 0
            ? (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-3`,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-muted-foreground`,
                    children: [
                      (0, X.jsx)(u, { className: `size-4 shrink-0` }),
                      (0, X.jsx)(`h2`, { className: `font-medium`, children: `Recently used` }),
                    ],
                  }),
                  (0, X.jsx)(Se, {
                    children: e.map((e) =>
                      (0, X.jsx)(
                        wt,
                        {
                          threadRef: n,
                          entry: e,
                          onOpen: () => c(e.url),
                          onRemove: () => s(e.url),
                        },
                        e.url,
                      ),
                    ),
                  }),
                ],
              })
            : null));
    }
    ((t[3] = c),
      (t[4] = s),
      (t[5] = a),
      (t[6] = d.length),
      (t[7] = n),
      (t[8] = f),
      (t[9] = p),
      (t[10] = h),
      (t[11] = g));
  } else ((f = t[8]), (p = t[9]), (h = t[10]), (g = t[11]));
  if (g !== Symbol.for(`react.early_return_sentinel`)) return g;
  let _;
  t[13] !== c || t[14] !== d || t[15] !== n
    ? ((_ =
        d.length > 0
          ? (0, X.jsxs)(`div`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-muted-foreground`,
                  children: [
                    (0, X.jsx)(m, { className: `size-4 shrink-0` }),
                    (0, X.jsx)(`h2`, { className: `font-medium`, children: `Local servers` }),
                  ],
                }),
                (0, X.jsx)(Se, {
                  children: d.map((e) =>
                    (0, X.jsx)(
                      Z,
                      { threadRef: n, server: e, onOpen: () => c(e.requestedUrl) },
                      `${e.host}:${e.port}`,
                    ),
                  ),
                }),
                (0, X.jsx)(`p`, {
                  className: `px-1 text-xs text-muted-foreground`,
                  children: `Select a live local server to open it in this browser tab.`,
                }),
              ],
            })
          : null),
      (t[13] = c),
      (t[14] = d),
      (t[15] = n),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== f || t[18] !== p || t[19] !== _
    ? ((v = (0, X.jsxs)(`div`, { className: f, children: [p, _] })),
      (t[17] = f),
      (t[18] = p),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== h || t[22] !== v
      ? ((y = (0, X.jsx)(`div`, { className: h, children: v })),
        (t[21] = h),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
function At(e) {
  return URL.canParse(e.url);
}
var jt = [
    { value: `system`, label: `System` },
    { value: `light`, label: `Light` },
    { value: `dark`, label: `Dark` },
  ],
  Mt = () => {
    let e = (0, Y.c)(1),
      t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, X.jsxs)(_, {
            children: [
              (0, X.jsx)(T, {
                render: (0, X.jsx)(M, {
                  render: (0, X.jsx)(v, {
                    variant: `ghost`,
                    size: `icon-xs`,
                    type: `button`,
                    "aria-label": `Preview menu`,
                  }),
                }),
                children: (0, X.jsx)(c, {}),
              }),
              (0, X.jsx)(w, { children: `More` }),
            ],
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  };
function Nt(e) {
  let t = (0, Y.c)(74),
    {
      enabled: n,
      actions: r,
      zoomFactor: i,
      colorScheme: a,
      deviceToolbarVisible: o,
      onToggleDeviceToolbar: s,
      nativePictureInPicture: c,
      profileName: l,
      move: u,
    } = e,
    f;
  t[0] === i ? (f = t[1]) : ((f = Math.round(i * 100)), (t[0] = i), (t[1] = f));
  let m = `${f}%`,
    h = !n,
    g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(Mt, {})), (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] !== r.hardReload || t[4] !== h
    ? ((_ = (0, X.jsx)(N, { onClick: r.hardReload, disabled: h, children: `Hard reload` })),
      (t[3] = r.hardReload),
      (t[4] = h),
      (t[5] = _))
    : (_ = t[5]);
  let y;
  t[6] !== r.openDevTools || t[7] !== h
    ? ((y = r.openDevTools
        ? (0, X.jsx)(N, { onClick: r.openDevTools, disabled: h, children: `Open DevTools` })
        : null),
      (t[6] = r.openDevTools),
      (t[7] = h),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== r.toggleNativePictureInPicture || t[10] !== h || t[11] !== c
    ? ((b = r.toggleNativePictureInPicture
        ? (0, X.jsx)(N, {
            onClick: r.toggleNativePictureInPicture,
            disabled: h,
            children: c ? `Close separate preview window` : `Open separate preview window`,
          })
        : null),
      (t[9] = r.toggleNativePictureInPicture),
      (t[10] = h),
      (t[11] = c),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] === u
    ? (x = t[14])
    : ((x = u ? (0, X.jsx)(N, { onClick: u.onMove, children: u.label }) : null),
      (t[13] = u),
      (t[14] = x));
  let C = o ? `Hide device toolbar` : `Show device toolbar`,
    w;
  t[15] !== h || t[16] !== s || t[17] !== C
    ? ((w = (0, X.jsx)(N, { onClick: s, disabled: h, children: C })),
      (t[15] = h),
      (t[16] = s),
      (t[17] = C),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === h
    ? (T = t[20])
    : ((T = (0, X.jsx)(ae, { disabled: h, children: `Appearance` })), (t[19] = h), (t[20] = T));
  let E;
  t[21] === r ? (E = t[22]) : ((E = (e) => r.setColorScheme(e)), (t[21] = r), (t[22] = E));
  let D;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = jt.map(Pt)), (t[23] = D)) : (D = t[23]);
  let k;
  t[24] !== a || t[25] !== E
    ? ((k = (0, X.jsx)(te, {
        children: (0, X.jsx)(O, { value: a, onValueChange: E, children: D }),
      })),
      (t[24] = a),
      (t[25] = E),
      (t[26] = k))
    : (k = t[26]);
  let j;
  t[27] !== k || t[28] !== T
    ? ((j = (0, X.jsxs)(A, { children: [T, k] })), (t[27] = k), (t[28] = T), (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(re, {})), (t[30] = M))
    : (M = t[30]);
  let P;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, X.jsx)(`span`, { children: `Zoom` })), (t[31] = P))
    : (P = t[31]);
  let ie;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, X.jsx)(d, {})), (t[32] = ie))
    : (ie = t[32]);
  let oe;
  t[33] !== r.zoomOut || t[34] !== h
    ? ((oe = (0, X.jsx)(v, {
        variant: `outline`,
        size: `icon-xs`,
        type: `button`,
        onClick: r.zoomOut,
        "aria-label": `Zoom out`,
        disabled: h,
        children: ie,
      })),
      (t[33] = r.zoomOut),
      (t[34] = h),
      (t[35] = oe))
    : (oe = t[35]);
  let se;
  t[36] === m
    ? (se = t[37])
    : ((se = (0, X.jsx)(`span`, {
        className: `min-w-12 text-center text-xs tabular-nums text-muted-foreground`,
        children: m,
      })),
      (t[36] = m),
      (t[37] = se));
  let ce;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, X.jsx)(p, {})), (t[38] = ce))
    : (ce = t[38]);
  let F;
  t[39] !== r.zoomIn || t[40] !== h
    ? ((F = (0, X.jsx)(v, {
        variant: `outline`,
        size: `icon-xs`,
        type: `button`,
        onClick: r.zoomIn,
        "aria-label": `Zoom in`,
        disabled: h,
        children: ce,
      })),
      (t[39] = r.zoomIn),
      (t[40] = h),
      (t[41] = F))
    : (F = t[41]);
  let ue;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, X.jsx)(st, {})), (t[42] = ue))
    : (ue = t[42]);
  let I;
  t[43] !== r.resetZoom || t[44] !== h
    ? ((I = (0, X.jsx)(v, {
        variant: `ghost`,
        size: `icon-xs`,
        type: `button`,
        onClick: r.resetZoom,
        "aria-label": `Reset zoom`,
        disabled: h,
        children: ue,
      })),
      (t[43] = r.resetZoom),
      (t[44] = h),
      (t[45] = I))
    : (I = t[45]);
  let de;
  t[46] !== oe || t[47] !== se || t[48] !== F || t[49] !== I
    ? ((de = (0, X.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [oe, se, F, I],
      })),
      (t[46] = oe),
      (t[47] = se),
      (t[48] = F),
      (t[49] = I),
      (t[50] = de))
    : (de = t[50]);
  let L;
  t[51] !== h || t[52] !== de
    ? ((L = (0, X.jsxs)(N, {
        closeOnClick: !1,
        onClick: $,
        className: `justify-between`,
        disabled: h,
        children: [P, de],
      })),
      (t[51] = h),
      (t[52] = de),
      (t[53] = L))
    : (L = t[53]);
  let fe;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, X.jsx)(re, {})), (t[54] = fe))
    : (fe = t[54]);
  let R;
  t[55] === l
    ? (R = t[56])
    : ((R = l
        ? (0, X.jsx)(le, {
            className: `max-w-64`,
            children: (0, X.jsxs)(`span`, {
              className: `block truncate`,
              children: [`Profile: `, l],
            }),
          })
        : null),
      (t[55] = l),
      (t[56] = R));
  let pe;
  t[57] === r.clearCookies
    ? (pe = t[58])
    : ((pe = (0, X.jsx)(N, { onClick: r.clearCookies, children: `Clear cookies` })),
      (t[57] = r.clearCookies),
      (t[58] = pe));
  let me;
  t[59] === r.clearCache
    ? (me = t[60])
    : ((me = (0, X.jsx)(N, { onClick: r.clearCache, children: `Clear cache` })),
      (t[59] = r.clearCache),
      (t[60] = me));
  let z;
  t[61] !== R || t[62] !== pe || t[63] !== me
    ? ((z = (0, X.jsxs)(ee, { children: [R, pe, me] })),
      (t[61] = R),
      (t[62] = pe),
      (t[63] = me),
      (t[64] = z))
    : (z = t[64]);
  let he;
  return (
    t[65] !== j ||
    t[66] !== L ||
    t[67] !== z ||
    t[68] !== _ ||
    t[69] !== y ||
    t[70] !== b ||
    t[71] !== x ||
    t[72] !== w
      ? ((he = (0, X.jsxs)(S, {
          children: [
            g,
            (0, X.jsxs)(ne, {
              align: `end`,
              sideOffset: 6,
              children: [_, y, b, x, w, j, M, L, fe, z],
            }),
          ],
        })),
        (t[65] = j),
        (t[66] = L),
        (t[67] = z),
        (t[68] = _),
        (t[69] = y),
        (t[70] = b),
        (t[71] = x),
        (t[72] = w),
        (t[73] = he))
      : (he = t[73]),
    he
  );
}
function $(e) {
  return e.preventDefault();
}
function Pt(e) {
  return (0, X.jsx)(P, { value: e.value, children: e.label }, e.value);
}
function Ft(e) {
  return b[e] || (e.length > 0 ? e : `Network error`);
}
function It(e) {
  let t = (0, Y.c)(21),
    { url: n, fileName: r, downloadUrl: i, onOpen: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = Bt(n) ?? n), (t[0] = n), (t[1] = o));
  let s = o,
    c,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(zt, { className: `mb-6 size-12 text-muted-foreground/70` })),
      (l = (0, X.jsx)(`h1`, {
        className: `mb-3 text-2xl font-semibold leading-tight text-foreground`,
        children: `This file can’t be shown here`,
      })),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3]));
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u = (0, X.jsx)(`span`, { className: `font-semibold text-foreground`, children: r })),
      (t[4] = r),
      (t[5] = u));
  let d;
  t[6] !== s || t[7] !== u
    ? ((d = (0, X.jsxs)(`p`, {
        className: `text-sm leading-relaxed text-muted-foreground`,
        children: [u, ` from `, s, ` was downloaded instead.`],
      })),
      (t[6] = s),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(`div`, { className: `flex-1` })), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === a
    ? (p = t[11])
    : ((p = (0, X.jsx)(v, {
        type: `button`,
        variant: `outline`,
        size: `sm`,
        onClick: a,
        children: `Open in browser`,
      })),
      (t[10] = a),
      (t[11] = p));
  let m;
  t[12] !== i || t[13] !== r
    ? ((m = i
        ? (0, X.jsx)(v, {
            type: `button`,
            size: `sm`,
            render: (0, X.jsx)(`a`, { href: i, download: r }),
            children: `Download`,
          })
        : null),
      (t[12] = i),
      (t[13] = r),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] !== p || t[16] !== m
    ? ((h = (0, X.jsxs)(`div`, {
        className: `mt-auto flex items-center gap-2 pt-8`,
        children: [f, p, m],
      })),
      (t[15] = p),
      (t[16] = m),
      (t[17] = h))
    : (h = t[17]);
  let g;
  return (
    t[18] !== d || t[19] !== h
      ? ((g = (0, X.jsx)(`div`, {
          className: `scrollbar-gutter-both relative flex h-full min-h-0 w-full overflow-y-auto bg-background`,
          children: (0, X.jsxs)(`div`, {
            className: `mx-auto flex w-full max-w-xl flex-1 flex-col px-8 py-12 sm:py-16`,
            children: [c, l, d, h],
          }),
        })),
        (t[18] = d),
        (t[19] = h),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function Lt(e) {
  let t = (0, Y.c)(36),
    { url: n, code: r, description: i, onReload: a, move: o } = e,
    [s, c] = (0, J.useState)(!1),
    l;
  t[0] === n ? (l = t[1]) : ((l = Bt(n) ?? n), (t[0] = n), (t[1] = l));
  let u = l,
    d;
  t[2] === i ? (d = t[3]) : ((d = Ft(i)), (t[2] = i), (t[3] = d));
  let f = d,
    p;
  t[4] !== r || t[5] !== i
    ? ((p = i.length > 0 ? i : `ERR_${Math.abs(r) || `FAILED`}`),
      (t[4] = r),
      (t[5] = i),
      (t[6] = p))
    : (p = t[6]);
  let m = p,
    h,
    g;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(zt, { className: `mb-6 size-12 text-muted-foreground/70` })),
      (g = (0, X.jsx)(`h1`, {
        className: `mb-3 text-2xl font-semibold leading-tight text-foreground`,
        children: `This site can’t be reached`,
      })),
      (t[7] = h),
      (t[8] = g))
    : ((h = t[7]), (g = t[8]));
  let _;
  t[9] === u
    ? (_ = t[10])
    : ((_ = (0, X.jsx)(`span`, { className: `font-semibold text-foreground`, children: u })),
      (t[9] = u),
      (t[10] = _));
  let y;
  t[11] !== f || t[12] !== _
    ? ((y = (0, X.jsxs)(`p`, {
        className: `text-sm leading-relaxed text-muted-foreground`,
        children: [_, `: `, f, `.`],
      })),
      (t[11] = f),
      (t[12] = _),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== o || t[15] !== s
    ? ((b = s
        ? (0, X.jsxs)(`div`, {
            className: `mt-6 rounded-lg border border-border bg-muted/40 p-4 text-sm`,
            children: [
              (0, X.jsx)(`p`, { className: `mb-2 font-medium text-foreground`, children: `Try:` }),
              (0, X.jsxs)(`ul`, {
                className: `list-disc space-y-1 pl-5 text-muted-foreground`,
                children: [
                  (0, X.jsx)(`li`, { children: `Checking your connection` }),
                  (0, X.jsx)(`li`, { children: `Confirming the dev server is running` }),
                  o
                    ? (0, X.jsx)(`li`, {
                        children: `Opening it in the environment’s browser, which reaches its network`,
                      })
                    : null,
                  (0, X.jsx)(`li`, { children: `Checking the proxy and the firewall` }),
                ],
              }),
            ],
          })
        : null),
      (t[14] = o),
      (t[15] = s),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] === m
    ? (x = t[18])
    : ((x = (0, X.jsx)(`div`, {
        className: `mt-8 text-xs uppercase tracking-wide text-muted-foreground/70`,
        children: m,
      })),
      (t[17] = m),
      (t[18] = x));
  let S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => c(Rt)), (t[19] = S))
    : (S = t[19]);
  let C = s ? `Hide details` : `Details`,
    w;
  t[20] === C
    ? (w = t[21])
    : ((w = (0, X.jsx)(v, {
        type: `button`,
        variant: `outline`,
        size: `sm`,
        onClick: S,
        children: C,
      })),
      (t[20] = C),
      (t[21] = w));
  let T;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(`div`, { className: `flex-1` })), (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] === o
    ? (E = t[24])
    : ((E = o
        ? (0, X.jsx)(v, {
            type: `button`,
            variant: `outline`,
            size: `sm`,
            onClick: o.onMove,
            children: o.label,
          })
        : null),
      (t[23] = o),
      (t[24] = E));
  let D;
  t[25] === a
    ? (D = t[26])
    : ((D = (0, X.jsx)(v, { type: `button`, size: `sm`, onClick: a, children: `Reload` })),
      (t[25] = a),
      (t[26] = D));
  let O;
  t[27] !== w || t[28] !== E || t[29] !== D
    ? ((O = (0, X.jsxs)(`div`, {
        className: `mt-auto flex items-center gap-2 pt-8`,
        children: [w, T, E, D],
      })),
      (t[27] = w),
      (t[28] = E),
      (t[29] = D),
      (t[30] = O))
    : (O = t[30]);
  let k;
  return (
    t[31] !== O || t[32] !== y || t[33] !== b || t[34] !== x
      ? ((k = (0, X.jsx)(`div`, {
          className: `scrollbar-gutter-both relative flex h-full min-h-0 w-full overflow-y-auto bg-background`,
          children: (0, X.jsxs)(`div`, {
            className: `mx-auto flex w-full max-w-xl flex-1 flex-col px-8 py-12 sm:py-16`,
            children: [h, g, y, b, x, O],
          }),
        })),
        (t[31] = O),
        (t[32] = y),
        (t[33] = b),
        (t[34] = x),
        (t[35] = k))
      : (k = t[35]),
    k
  );
}
function Rt(e) {
  return !e;
}
function zt(e) {
  let t = (0, Y.c)(5),
    { className: n } = e,
    r,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(`path`, { d: `M16 12 L48 12 L48 52 L16 52 Z` })),
      (i = (0, X.jsx)(`path`, {
        d: `M22 22 L42 22 M22 30 L36 30 M22 38 L40 38`,
        strokeLinecap: `round`,
      })),
      (a = (0, X.jsx)(`path`, { d: `M52 8 L12 56`, strokeLinecap: `round` })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : ((r = t[0]), (i = t[1]), (a = t[2]));
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, X.jsxs)(`svg`, {
          viewBox: `0 0 64 64`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2.5`,
          className: n,
          children: [r, i, a],
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function Bt(e) {
  try {
    return new URL(e).host;
  } catch {
    return null;
  }
}
var Vt = 1500,
  Ht = 0.001;
function Ut(e) {
  let t = (0, Y.c)(11),
    { zoomFactor: n } = e,
    [r, i] = (0, J.useState)(!1),
    a = (0, J.useRef)(n),
    o = (0, J.useRef)(null),
    s,
    c;
  (t[0] === n
    ? ((s = t[1]), (c = t[2]))
    : ((s = () => {
        if (!(Math.abs(a.current - n) < Ht))
          return (
            (a.current = n),
            i(!0),
            o.current !== null && window.clearTimeout(o.current),
            (o.current = window.setTimeout(() => {
              (i(!1), (o.current = null));
            }, Vt)),
            () => {
              o.current !== null && (window.clearTimeout(o.current), (o.current = null));
            }
          );
      }),
      (c = [n]),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c)),
    (0, J.useEffect)(s, c));
  let l;
  t[3] === n ? (l = t[4]) : ((l = Math.round(n * 100)), (t[3] = n), (t[4] = l));
  let u = `${l}%`,
    d = !r,
    f = r ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-1`,
    p;
  t[5] === f
    ? (p = t[6])
    : ((p = ce(
        `pointer-events-none absolute top-3 right-3 z-20 select-none rounded-full border border-border/70 bg-popover/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-md/10 backdrop-blur transition-all duration-200 ease-out`,
        f,
      )),
      (t[5] = f),
      (t[6] = p));
  let m;
  return (
    t[7] !== u || t[8] !== d || t[9] !== p
      ? ((m = (0, X.jsx)(`div`, { "aria-hidden": d, className: p, children: u })),
        (t[7] = u),
        (t[8] = d),
        (t[9] = p),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function Wt(e, t) {
  return e.find((e) => e.id === t)?.name ?? `Removed profile`;
}
var Gt = typeof window > `u` ? null : B();
function Kt(e) {
  let t = (0, Y.c)(12),
    n = ht(e.threadRef.environmentId),
    r;
  t[0] !== n || t[1] !== e.download.id || t[2] !== e.tabId || t[3] !== e.threadRef.threadId
    ? ((r = n
        ? q({ access: n, threadId: e.threadRef.threadId, tabId: e.tabId }, e.download.id)
        : null),
      (t[0] = n),
      (t[1] = e.download.id),
      (t[2] = e.tabId),
      (t[3] = e.threadRef.threadId),
      (t[4] = r))
    : (r = t[4]);
  let i;
  t[5] === e.url
    ? (i = t[6])
    : ((i = () => void Gt?.shell.openExternal(e.url).catch(qt)), (t[5] = e.url), (t[6] = i));
  let a;
  return (
    t[7] !== e.download.fileName || t[8] !== e.url || t[9] !== r || t[10] !== i
      ? ((a = (0, X.jsx)(It, {
          url: e.url,
          fileName: e.download.fileName,
          downloadUrl: r,
          onOpen: i,
        })),
        (t[7] = e.download.fileName),
        (t[8] = e.url),
        (t[9] = r),
        (t[10] = i),
        (t[11] = a))
      : (a = t[11]),
    a
  );
}
function qt() {}
function Jt(e) {
  let t = (0, Y.c)(239),
    { threadRef: n, tabId: r, configuredUrls: i, visible: a, onSendAnnotation: o } = e,
    [s, c] = (0, J.useState)(void 0),
    [l, u] = (0, J.useState)(!1),
    d = z(n.environmentId, `orchestration:operate`) && !!o,
    f = ut(),
    p = (0, J.useRef)(null),
    m = (0, J.useRef)(!0),
    h = ue(n),
    v = Ee(n, 50),
    y;
  t[0] === n ? (y = t[1]) : ((y = (e) => at(e.byThreadKey, n)), (t[0] = n), (t[1] = y));
  let b = Xe(y),
    x = g(mn),
    S = g(pn),
    O = fe(n.environmentId),
    A;
  t[2] === O ? (A = t[3]) : ((A = O ? new URL(O).hostname : null), (t[2] = O), (t[3] = A));
  let ee = A,
    te = ge(Ie.open),
    ne = ge(Ie.close, `preview close`),
    re = R(n.environmentId)?.label ?? `the environment`,
    M = pe(),
    N = de(n.environmentId),
    P = ge(Ie.resize, `preview viewport resize`),
    ae = ge(Ie.adjust, `preview appearance or zoom`);
  it(n);
  let le, L;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = () => (
        (m.current = !0),
        () => {
          m.current = !1;
        }
      )),
      (L = []),
      (t[4] = le),
      (t[5] = L))
    : ((le = t[4]), (L = t[5])),
    (0, J.useEffect)(le, L));
  let B = r ?? h.activeTabId,
    H,
    ye;
  t[6] !== f || t[7] !== h || t[8] !== B || t[9] !== n
    ? ((H = B ? lt(n, h.serverEpoch, B) : null),
      (ye = B && H ? (f.has(H) ? H : ot(n, B)) : null),
      (t[6] = f),
      (t[7] = h),
      (t[8] = B),
      (t[9] = n),
      (t[10] = H),
      (t[11] = ye))
    : ((H = t[10]), (ye = t[11]));
  let be = ye,
    U = B ? (h.sessions[B] ?? null) : null,
    xe = we(n.environmentId, U),
    W = U?.runtime === `server` && !xe,
    G = U?.runtime === `server`,
    Se = (0, J.useRef)(null),
    [Te, Me] = (0, J.useState)(!1),
    Ve = (0, J.useRef)(null),
    [He, Ue] = (0, J.useState)(0),
    We = U?.runtime === `server` && (U.viewport ?? ie)._tag !== `fill`,
    Ge,
    Ke;
  (t[12] === We
    ? ((Ge = t[13]), (Ke = t[14]))
    : ((Ge = () => {
        let e = Ve.current;
        if (e && We)
          return Ce(e, (e) => {
            let [t] = e;
            return Ue(Math.max(1, Math.round(t?.contentRect.width ?? 0)));
          });
      }),
      (Ke = [We]),
      (t[12] = We),
      (t[13] = Ge),
      (t[14] = Ke)),
    (0, J.useEffect)(Ge, Ke));
  let [qe, Qe] = (0, J.useState)(null),
    st = W && qe !== H,
    [dt, ht] = (0, J.useState)(null),
    q = B ? (h.desktopByTabId[B] ?? null) : null,
    bt = Je(q?.zoomFactor ?? 1),
    St;
  t[15] === U?.navStatus
    ? (St = t[16])
    : ((St = U?.navStatus ?? { _tag: `Idle` }), (t[15] = U?.navStatus), (t[16] = St));
  let Z = St,
    Q = Z._tag === `Idle` ? `` : Z.url,
    wt = q?.loading ?? Z._tag === `Loading`,
    Tt = q?.canGoBack ?? U?.canGoBack ?? !1,
    Et = q?.canGoForward ?? U?.canGoForward ?? !1,
    Dt = Z._tag === `Idle`,
    Ot = Z._tag === `LoadFailed`,
    At = ft(U),
    jt = W && !At && !Ot && dt !== H,
    Mt = q?.controller ?? `none`,
    $ = U?.viewport ?? ie,
    Pt = De(),
    Ft = U?.profileId ?? `default`,
    It;
  t[17] !== Ft || t[18] !== Pt.profiles
    ? ((It = Wt(Pt.profiles, Ft)), (t[17] = Ft), (t[18] = Pt.profiles), (t[19] = It))
    : (It = t[19]);
  let Rt = It,
    zt;
  t[20] === H
    ? (zt = t[21])
    : ((zt = (e) => (H ? (e.byTabId[H]?.rect ?? null) : null)), (t[20] = H), (t[21] = zt));
  let Bt = $e(zt),
    Vt = Z._tag === `Success` ? Z.url : null,
    Ht = Z._tag === `Success` ? Z.title : null,
    qt = v[0]?.url,
    { environmentId: Jt, threadId: hn } = n,
    gn,
    _n;
  (t[22] !== ee || t[23] !== qt || t[24] !== Ht || t[25] !== Vt || t[26] !== Jt || t[27] !== hn
    ? ((gn = () => {
        Vt && Ht && qt && Oe(F(Jt, hn), Vt, Ht, ee);
      }),
      (_n = [ee, qt, Ht, Vt, Jt, hn]),
      (t[22] = ee),
      (t[23] = qt),
      (t[24] = Ht),
      (t[25] = Vt),
      (t[26] = Jt),
      (t[27] = hn),
      (t[28] = gn),
      (t[29] = _n))
    : ((gn = t[28]), (_n = t[29])),
    (0, J.useEffect)(gn, _n));
  let vn;
  t[30] !== W || t[31] !== te || t[32] !== H || t[33] !== st || t[34] !== n
    ? ((vn = async (e) => {
        if (W && Se.current) return !st && (Se.current.navigate(e), k(n, e), !0);
        if (H && K) return (await K.navigate(H, e), k(n, e), !0);
        let t = await tt({ openPreview: te, threadRef: n, url: e });
        if (t._tag === `Failure` && !E(t)) {
          let e = j(t);
          e instanceof Fe &&
            V.add({ type: `error`, title: `Unable to open browser`, description: e.message });
        }
        return t._tag === `Success`;
      }),
      (t[30] = W),
      (t[31] = te),
      (t[32] = H),
      (t[33] = st),
      (t[34] = n),
      (t[35] = vn))
    : (vn = t[35]);
  let yn = vn,
    bn;
  t[36] !== yn || t[37] !== n
    ? ((bn = async (e) => {
        try {
          let t = Le(e, ze(me()));
          (await yn(t)) && ke(n, t);
        } catch {}
      }),
      (t[36] = yn),
      (t[37] = n),
      (t[38] = bn))
    : (bn = t[38]);
  let xn = bn,
    Sn;
  t[39] !== W || t[40] !== yn || t[41] !== n
    ? ((Sn = async (e) => {
        try {
          let t = W || !K ? Be(e) : Ae(n.environmentId, e);
          (await yn(t)) && ke(n, e);
        } catch {}
      }),
      (t[39] = W),
      (t[40] = yn),
      (t[41] = n),
      (t[42] = Sn))
    : (Sn = t[42]);
  let Cn = Sn,
    wn;
  t[43] !== W || t[44] !== H
    ? ((wn = () => {
        W ? Se.current?.reload() : K && H && K.refresh(H);
      }),
      (t[43] = W),
      (t[44] = H),
      (t[45] = wn))
    : (wn = t[45]);
  let Tn = wn,
    En;
  t[46] !== ae || t[47] !== B || t[48] !== n
    ? ((En = async (e) => {
        if (!B) return;
        let t = await ae({
          environmentId: n.environmentId,
          input: { threadId: n.threadId, tabId: B, ...e },
        });
        if (t._tag === `Failure`) {
          let e = j(t);
          V.add({
            type: `error`,
            title: `Unable to change the browser tab`,
            description: e instanceof Error ? e.message : `An error occurred.`,
          });
        } else C(n, t.value);
      }),
      (t[46] = ae),
      (t[47] = B),
      (t[48] = n),
      (t[49] = En))
    : (En = t[49]);
  let Dn = En,
    On = U?.zoomFactor ?? 1,
    kn;
  t[50] !== Dn || t[51] !== On
    ? ((kn = (e) => {
        let t = I.indexOf(On),
          n = e === 0 ? 1 : I[Math.min(Math.max((t < 0 ? 7 : t) + e, 0), I.length - 1)];
        n !== On && Dn({ zoomFactor: n });
      }),
      (t[50] = Dn),
      (t[51] = On),
      (t[52] = kn))
    : (kn = t[52]);
  let An = kn,
    jn;
  t[53] !== H || t[54] !== G || t[55] !== An
    ? ((jn = () => {
        G ? An(1) : K && H && K.zoomIn(H);
      }),
      (t[53] = H),
      (t[54] = G),
      (t[55] = An),
      (t[56] = jn))
    : (jn = t[56]);
  let Mn = jn,
    Nn;
  t[57] !== H || t[58] !== G || t[59] !== An
    ? ((Nn = () => {
        G ? An(-1) : K && H && K.zoomOut(H);
      }),
      (t[57] = H),
      (t[58] = G),
      (t[59] = An),
      (t[60] = Nn))
    : (Nn = t[60]);
  let Pn = Nn,
    Fn;
  t[61] !== H || t[62] !== G || t[63] !== An
    ? ((Fn = () => {
        G ? An(0) : K && H && K.resetZoom(H);
      }),
      (t[61] = H),
      (t[62] = G),
      (t[63] = An),
      (t[64] = Fn))
    : (Fn = t[64]);
  let In = Fn,
    Ln;
  t[65] !== P || t[66] !== B || t[67] !== n
    ? ((Ln = async (e) => {
        if (!B) return;
        let t = await P({
          environmentId: n.environmentId,
          input: { threadId: n.threadId, tabId: B, viewport: e },
        });
        if (t._tag === `Failure`) {
          let e = j(t);
          throw (
            V.add({
              type: `error`,
              title: `Unable to resize browser viewport`,
              description: e instanceof Error ? e.message : `An error occurred.`,
            }),
            e
          );
        }
        C(n, t.value);
      }),
      (t[65] = P),
      (t[66] = B),
      (t[67] = n),
      (t[68] = Ln))
    : (Ln = t[68]);
  let Rn = Ln,
    zn;
  t[69] !== Pt ||
  t[70] !== W ||
  t[71] !== bt ||
  t[72] !== Bt ||
  t[73] !== H ||
  t[74] !== On ||
  t[75] !== $
    ? ((zn = () => {
        H &&
          ($._tag === `fill`
            ? et(H, Ne({ defaults: Pt, panelRect: Bt, zoomFactor: W ? On : bt })).catch(dn)
            : et(H, ie).catch(fn));
      }),
      (t[69] = Pt),
      (t[70] = W),
      (t[71] = bt),
      (t[72] = Bt),
      (t[73] = H),
      (t[74] = On),
      (t[75] = $),
      (t[76] = zn))
    : (zn = t[76]);
  let Bn = zn,
    Vn = (0, J.useEffectEvent)(Rn),
    Hn;
  t[77] !== Vn || t[78] !== H
    ? ((Hn = () => {
        if (H) return Ze(H, (e) => Vn(e));
      }),
      (t[77] = Vn),
      (t[78] = H),
      (t[79] = Hn))
    : (Hn = t[79]);
  let Un;
  (t[80] === H ? (Un = t[81]) : ((Un = [H]), (t[80] = H), (t[81] = Un)), (0, J.useEffect)(Hn, Un));
  let Wn;
  t[82] !== W || t[83] !== H
    ? ((Wn = () => {
        W ? Se.current?.history(-1) : K && H && K.goBack(H);
      }),
      (t[82] = W),
      (t[83] = H),
      (t[84] = Wn))
    : (Wn = t[84]);
  let Gn = Wn,
    Kn;
  t[85] !== W || t[86] !== H
    ? ((Kn = () => {
        W ? Se.current?.history(1) : K && H && K.goForward(H);
      }),
      (t[85] = W),
      (t[86] = H),
      (t[87] = Kn))
    : (Kn = t[87]);
  let qn = Kn,
    Jn;
  t[88] === Q
    ? (Jn = t[89])
    : ((Jn = () => {
        Gt && Q && Gt.shell.openExternal(Q).catch(un);
      }),
      (t[88] = Q),
      (t[89] = Jn));
  let Yn = Jn,
    Xn;
  t[90] !== M || t[91] !== N || t[92] !== U || t[93] !== n.environmentId
    ? ((Xn = Pe(n.environmentId, M, N, U)),
      (t[90] = M),
      (t[91] = N),
      (t[92] = U),
      (t[93] = n.environmentId),
      (t[94] = Xn))
    : (Xn = t[94]);
  let Zn = Xn,
    Qn = Zn === `server` ? `Open in ${re}'s browser` : `Open on this computer`,
    $n;
  t[95] !== ne ||
  t[96] !== Zn ||
  t[97] !== te ||
  t[98] !== U ||
  t[99] !== B ||
  t[100] !== n ||
  t[101] !== Q ||
  t[102] !== $
    ? (($n = async () => {
        if (!Zn || !B || !U) return;
        let e = await tt({
          openPreview: te,
          threadRef: n,
          ...(Q ? { url: Zn === `desktop` ? Ae(n.environmentId, Q) : Q } : {}),
          viewport: $,
          ...(U.profileId === void 0 ? {} : { profileId: U.profileId }),
          runtime: Zn,
        });
        if (e._tag === `Failure`) {
          if (E(e)) return;
          let t = j(e);
          V.add({
            type: `error`,
            title: `Unable to move the browser tab`,
            description: t instanceof Error ? t.message : `An error occurred.`,
          });
        } else
          (_e.getState().openBrowser(n, e.value.tabId),
            await yt({ closePreview: ne, snapshot: U, tabId: B, threadRef: n }));
      }),
      (t[95] = ne),
      (t[96] = Zn),
      (t[97] = te),
      (t[98] = U),
      (t[99] = B),
      (t[100] = n),
      (t[101] = Q),
      (t[102] = $),
      (t[103] = $n))
    : ($n = t[103]);
  let er = $n,
    tr;
  t[104] !== b || t[105] !== B || t[106] !== n
    ? ((tr = () => {
        B &&
          (b === B
            ? Xe.getState().close(n)
            : (Xe.getState().open(n, rt(B)), _e.getState().close(n)));
      }),
      (t[104] = b),
      (t[105] = B),
      (t[106] = n),
      (t[107] = tr))
    : (tr = t[107]);
  let nr = tr,
    rr;
  t[108] === H
    ? (rr = t[109])
    : ((rr = (e) => () => {
        e && H && e(H).catch(ln);
      }),
      (t[108] = H),
      (t[109] = rr));
  let ir = rr,
    ar;
  if (
    t[110] !== Ft ||
    t[111] !== Dn ||
    t[112] !== ir ||
    t[113] !== q?.pictureInPicture ||
    t[114] !== In ||
    t[115] !== Mn ||
    t[116] !== Pn ||
    t[117] !== xe ||
    t[118] !== H ||
    t[119] !== G ||
    t[120] !== n.environmentId
  ) {
    ar = G
      ? {
          hardReload: () => void Dn({ hardReload: !0 }),
          setColorScheme: (e) => void Dn({ colorScheme: e }),
          zoomIn: Mn,
          zoomOut: Pn,
          resetZoom: In,
          clearCookies: () => void Dn({ clear: `cookies` }),
          clearCache: () => void Dn({ clear: `cache` }),
          ...(xe && K
            ? { openDevTools: ir(K.openDevTools), toggleNativePictureInPicture: () => e() }
            : {}),
        }
      : K
        ? {
            hardReload: ir(K.hardReload),
            setColorScheme: (e) => {
              H && K?.setColorScheme(H, e).catch(cn);
            },
            zoomIn: Mn,
            zoomOut: Pn,
            resetZoom: In,
            clearCookies: () => void K?.clearCookies(n.environmentId, Ft).catch(sn),
            clearCache: () => void K?.clearCache(n.environmentId, Ft).catch(on),
            openDevTools: ir(K.openDevTools),
            toggleNativePictureInPicture: () => e(),
          }
        : null;
    let e = () => {
      K &&
        H &&
        (q?.pictureInPicture ? K.pictureInPicture.close : K.pictureInPicture.open)(H).catch(an);
    };
    ((t[110] = Ft),
      (t[111] = Dn),
      (t[112] = ir),
      (t[113] = q?.pictureInPicture),
      (t[114] = In),
      (t[115] = Mn),
      (t[116] = Pn),
      (t[117] = xe),
      (t[118] = H),
      (t[119] = G),
      (t[120] = n.environmentId),
      (t[121] = ar));
  } else ar = t[121];
  let or;
  t[122] !== be || t[123] !== H || t[124] !== B || t[125] !== n
    ? ((or = (e) => {
        K &&
          H &&
          B &&
          (be
            ? Ye(be).then(rn, nn)
            : e
              ? nt(H, n, B).catch(tn)
              : K.captureScreenshot(H).then(en, $t));
      }),
      (t[122] = be),
      (t[123] = H),
      (t[124] = B),
      (t[125] = n),
      (t[126] = or))
    : (or = t[126]);
  let sr = or,
    cr;
  t[127] !== S || t[128] !== x || t[129] !== o || t[130] !== H || t[131] !== n
    ? ((cr = () => {
        if (!K || !H) return;
        if (p.current) {
          ((p.current.cancelled = !0), K.cancelPickElement(H).catch(Qt));
          return;
        }
        let e = typeof document < `u` ? document.activeElement : null,
          t = { cancelled: !1 },
          r = !1;
        ((p.current = t),
          u(!0),
          se(async () => {
            if (
              (await K.setAnnotationSendEnabled?.(
                H,
                !!o && he(n.environmentId, `orchestration:operate`),
              ),
              t.cancelled)
            )
              return;
            let e = await K.pickElement(H);
            if (!e || t.cancelled) return;
            p.current === t && ((p.current = null), m.current && u(!1), (r = !0));
            let { annotation: i, submission: a, screenshotFailed: s } = e,
              c = s !== void 0 && s,
              l = xt(i),
              d = c || l.status === `failed`,
              f = l.status === `failed` ? { ...i, screenshot: null } : i;
            (x(n, f),
              d &&
                V.add(
                  ve({
                    type: `error`,
                    title: `Could not capture the picked element`,
                    description: `The annotation was kept without the screenshot.`,
                  }),
                ));
            let h = l.status === `captured` ? l.file : null,
              g =
                h && f.screenshot
                  ? {
                      type: `image`,
                      id: f.id,
                      name: h.name,
                      mimeType: h.type,
                      sizeBytes: h.size,
                      previewUrl: f.screenshot.dataUrl,
                      file: h,
                    }
                  : null;
            (g && S(n, g),
              a === `send` && he(n.environmentId, `orchestration:operate`) && o?.(f, g));
          }).then(() => {
            let n = p.current === t;
            if (
              (n && ((p.current = null), m.current && u(!1)),
              (n || r) && e && e.isConnected && typeof e.focus == `function`)
            )
              try {
                e.focus({ preventScroll: !0 });
              } catch {}
          }));
      }),
      (t[127] = S),
      (t[128] = x),
      (t[129] = o),
      (t[130] = H),
      (t[131] = n),
      (t[132] = cr))
    : (cr = t[132]);
  let lr = cr,
    ur,
    dr;
  (t[133] !== d || t[134] !== l || t[135] !== H
    ? ((ur = () => {
        l && K && H && K.setAnnotationSendEnabled?.(H, d).catch(Zt);
      }),
      (dr = [d, l, H]),
      (t[133] = d),
      (t[134] = l),
      (t[135] = H),
      (t[136] = ur),
      (t[137] = dr))
    : ((ur = t[136]), (dr = t[137])),
    (0, J.useEffect)(ur, dr));
  let fr, pr;
  (t[138] === H
    ? ((fr = t[139]), (pr = t[140]))
    : ((fr = () => () => {
        p.current &&
          ((p.current.cancelled = !0),
          (p.current = null),
          K && H && K.cancelPickElement(H).catch(Xt),
          m.current && u(!1));
      }),
      (pr = [H]),
      (t[138] = H),
      (t[139] = fr),
      (t[140] = pr)),
    (0, J.useEffect)(fr, pr));
  let mr;
  t[141] !== Tn || t[142] !== In || t[143] !== Mn || t[144] !== Pn
    ? ((mr = (e) => {
        switch (e) {
          case `refresh`:
            Tn();
            return;
          case `focus-url`:
            c(Yt);
            return;
          case `zoom-in`:
            Mn();
            return;
          case `zoom-out`:
            Pn();
            return;
          case `reset-zoom`:
            In();
            return;
          case `toggle-panel`:
            return;
        }
      }),
      (t[141] = Tn),
      (t[142] = In),
      (t[143] = Mn),
      (t[144] = Pn),
      (t[145] = mr))
    : (mr = t[145]);
  let hr = (0, J.useEffectEvent)(mr),
    gr;
  t[146] !== hr || t[147] !== a
    ? ((gr = () => {
        if (a) return pt((e) => hr(e));
      }),
      (t[146] = hr),
      (t[147] = a),
      (t[148] = gr))
    : (gr = t[148]);
  let _r;
  (t[149] === a ? (_r = t[150]) : ((_r = [a]), (t[149] = a), (t[150] = _r)),
    (0, J.useEffect)(gr, _r));
  let vr;
  t[151] === n ? (vr = t[152]) : ((vr = oe(n)), (t[151] = n), (t[152] = vr));
  let yr = wt || jt,
    br = Tt && !st,
    xr = Et && !st,
    Sr = Dt || st,
    Cr;
  t[153] === xn ? (Cr = t[154]) : ((Cr = (e) => void xn(e)), (t[153] = xn), (t[154] = Cr));
  let wr = B ? Yn : void 0,
    Tr = K && B && !W ? sr : void 0,
    Er = !q || Ot,
    Dr = be !== null,
    Or = B && (W || K) ? nr : void 0,
    kr = b === B,
    Ar = Ot || (!W && !q?.hasWebContents),
    jr = K && B && !W ? lr : void 0,
    Mr = !B || Ot,
    Nr = Ot ? `Page didn't load. Pick is unavailable until the page renders` : void 0,
    Pr;
  t[155] !== Ft || t[156] !== Rt || t[157] !== Pt.profileId
    ? ((Pr =
        Ft === Pt.profileId
          ? null
          : (0, X.jsxs)(_, {
              children: [
                (0, X.jsx)(T, {
                  render: (0, X.jsx)(D, { variant: `outline`, className: `max-w-28 shrink-0` }),
                  children: (0, X.jsx)(`span`, { className: `truncate`, children: Rt }),
                }),
                (0, X.jsx)(w, { side: `top`, children: Rt }),
              ],
            })),
      (t[155] = Ft),
      (t[156] = Rt),
      (t[157] = Pt.profileId),
      (t[158] = Pr))
    : (Pr = t[158]);
  let Fr;
  t[159] !== Rt ||
  t[160] !== q?.colorScheme ||
  t[161] !== q?.hasWebContents ||
  t[162] !== q?.pictureInPicture ||
  t[163] !== q?.zoomFactor ||
  t[164] !== er ||
  t[165] !== Bn ||
  t[166] !== ar ||
  t[167] !== Qn ||
  t[168] !== Zn ||
  t[169] !== H ||
  t[170] !== G ||
  t[171] !== On ||
  t[172] !== U?.colorScheme ||
  t[173] !== $
    ? ((Fr = ar
        ? (0, X.jsx)(Nt, {
            enabled: H !== null && (G || (q?.hasWebContents ?? !1)),
            actions: ar,
            ...(Zn ? { move: { label: Qn, onMove: () => void er() } } : {}),
            profileName: Rt,
            zoomFactor: G ? On : (q?.zoomFactor ?? 1),
            colorScheme: G ? (U?.colorScheme ?? `system`) : (q?.colorScheme ?? `system`),
            deviceToolbarVisible: $._tag !== `fill`,
            onToggleDeviceToolbar: Bn,
            nativePictureInPicture: q?.pictureInPicture ?? !1,
          })
        : null),
      (t[159] = Rt),
      (t[160] = q?.colorScheme),
      (t[161] = q?.hasWebContents),
      (t[162] = q?.pictureInPicture),
      (t[163] = q?.zoomFactor),
      (t[164] = er),
      (t[165] = Bn),
      (t[166] = ar),
      (t[167] = Qn),
      (t[168] = Zn),
      (t[169] = H),
      (t[170] = G),
      (t[171] = On),
      (t[172] = U?.colorScheme),
      (t[173] = $),
      (t[174] = Fr))
    : (Fr = t[174]);
  let Ir;
  t[175] !== s ||
  t[176] !== Gn ||
  t[177] !== qn ||
  t[178] !== Tn ||
  t[179] !== l ||
  t[180] !== st ||
  t[181] !== yr ||
  t[182] !== br ||
  t[183] !== xr ||
  t[184] !== Sr ||
  t[185] !== Cr ||
  t[186] !== wr ||
  t[187] !== Tr ||
  t[188] !== Er ||
  t[189] !== Dr ||
  t[190] !== Or ||
  t[191] !== kr ||
  t[192] !== Ar ||
  t[193] !== jr ||
  t[194] !== Mr ||
  t[195] !== Nr ||
  t[196] !== Pr ||
  t[197] !== Fr ||
  t[198] !== Q
    ? ((Ir = (0, X.jsx)(Ct, {
        url: Q,
        loading: yr,
        canGoBack: br,
        canGoForward: xr,
        refreshDisabled: Sr,
        inputDisabled: st,
        focusUrlNonce: s,
        onBack: Gn,
        onForward: qn,
        onRefresh: Tn,
        onSubmit: Cr,
        onOpenInBrowser: wr,
        onCapture: Tr,
        captureDisabled: Er,
        recording: Dr,
        onPictureInPicture: Or,
        pictureInPicture: kr,
        pictureInPictureDisabled: Ar,
        onPickElement: jr,
        pickActive: l,
        pickDisabled: Mr,
        pickDisabledReason: Nr,
        leadingActions: Pr,
        trailingActions: Fr,
      })),
      (t[175] = s),
      (t[176] = Gn),
      (t[177] = qn),
      (t[178] = Tn),
      (t[179] = l),
      (t[180] = st),
      (t[181] = yr),
      (t[182] = br),
      (t[183] = xr),
      (t[184] = Sr),
      (t[185] = Cr),
      (t[186] = wr),
      (t[187] = Tr),
      (t[188] = Er),
      (t[189] = Dr),
      (t[190] = Or),
      (t[191] = kr),
      (t[192] = Ar),
      (t[193] = jr),
      (t[194] = Mr),
      (t[195] = Nr),
      (t[196] = Pr),
      (t[197] = Fr),
      (t[198] = Q),
      (t[199] = Ir))
    : (Ir = t[199]);
  let Lr =
      H && U && W
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              $._tag !== `fill` && !At && !Ot
                ? (0, X.jsx)(`div`, {
                    className: `absolute inset-x-0 top-0 z-10`,
                    children: (0, X.jsx)(ct, {
                      setting: $,
                      width: He,
                      aspectRatio: Te ? $.width / $.height : null,
                      onAspectRatioChange: (e) => Me(e !== null),
                      onChange: (e) => et(H, e),
                    }),
                  })
                : null,
              (0, X.jsx)(`div`, {
                className: `absolute inset-x-0 bottom-0`,
                style: { top: $._tag === `fill` ? 0 : 38 },
                children: (0, X.jsx)(
                  gt,
                  {
                    ref: Se,
                    environmentId: n.environmentId,
                    threadId: n.threadId,
                    tabId: U.tabId,
                    pdfUrl: Z._tag === `Success` ? Re(Q, O) : null,
                    visible: a,
                    onFirstFrame: () => ht(H),
                    onControl: (e) => Qe(e?.controller === `you` ? H : null),
                    onPopup: (e) => _t(n, e, `panel`),
                    className: ce(`absolute inset-0 h-full w-full`, (At || Ot) && `invisible`),
                  },
                  H,
                ),
              }),
            ],
          })
        : H && U && !At
          ? K
            ? (0, X.jsx)(
                mt,
                { tabId: H, visible: a && !Ot, className: `absolute inset-0 h-full w-full` },
                H,
              )
            : (0, X.jsx)(`div`, {
                className: `flex h-full items-center justify-center p-8 text-center`,
                children: (0, X.jsx)(`p`, {
                  className: `max-w-sm text-sm text-muted-foreground`,
                  children: `This tab is open in the T3 Code desktop app.`,
                }),
              })
          : null,
    Rr;
  t[200] !== i || t[201] !== Cn || t[202] !== v || t[203] !== At || t[204] !== n
    ? ((Rr = At
        ? (0, X.jsx)(kt, {
            threadRef: n,
            environmentId: n.environmentId,
            configuredUrls: i,
            recentEntries: v,
            onRemoveRecent: (e) => je(n, e),
            onOpenUrl: (e) => void Cn(e),
          })
        : null),
      (t[200] = i),
      (t[201] = Cn),
      (t[202] = v),
      (t[203] = At),
      (t[204] = n),
      (t[205] = Rr))
    : (Rr = t[205]);
  let zr;
  t[206] !== q || t[207] !== U
    ? ((zr = U && q ? (0, X.jsx)(Ut, { zoomFactor: q.zoomFactor }) : null),
      (t[206] = q),
      (t[207] = U),
      (t[208] = zr))
    : (zr = t[208]);
  let Br;
  t[209] !== f ||
  t[210] !== Mt ||
  t[211] !== q ||
  t[212] !== Ot ||
  t[213] !== bt ||
  t[214] !== H ||
  t[215] !== At
    ? ((Br =
        H && q && !At && !Ot && !f.has(H)
          ? (0, X.jsx)(vt, { tabId: H, zoomFactor: bt, controller: Mt })
          : null),
      (t[209] = f),
      (t[210] = Mt),
      (t[211] = q),
      (t[212] = Ot),
      (t[213] = bt),
      (t[214] = H),
      (t[215] = At),
      (t[216] = Br))
    : (Br = t[216]);
  let Vr;
  t[217] !== er ||
  t[218] !== Tn ||
  t[219] !== Qn ||
  t[220] !== Zn ||
  t[221] !== Z._tag ||
  t[222] !== Z.code ||
  t[223] !== Z.description ||
  t[224] !== Z.download ||
  t[225] !== Z.url ||
  t[226] !== U?.tabId ||
  t[227] !== n
    ? ((Vr =
        Z._tag === `LoadFailed` && Z.download
          ? (0, X.jsx)(`div`, {
              className: `absolute inset-0 z-10 bg-background`,
              children: (0, X.jsx)(Kt, {
                threadRef: n,
                tabId: U?.tabId ?? ``,
                url: Z.url,
                download: Z.download,
              }),
            })
          : Z._tag === `LoadFailed`
            ? (0, X.jsx)(`div`, {
                className: `absolute inset-0 z-10 bg-background`,
                children: (0, X.jsx)(Lt, {
                  url: Z.url,
                  code: Z.code,
                  description: Z.description,
                  onReload: Tn,
                  ...(Zn === `server` ? { move: { label: Qn, onMove: () => void er() } } : {}),
                }),
              })
            : null),
      (t[217] = er),
      (t[218] = Tn),
      (t[219] = Qn),
      (t[220] = Zn),
      (t[221] = Z._tag),
      (t[222] = Z.code),
      (t[223] = Z.description),
      (t[224] = Z.download),
      (t[225] = Z.url),
      (t[226] = U?.tabId),
      (t[227] = n),
      (t[228] = Vr))
    : (Vr = t[228]);
  let Hr;
  t[229] !== Lr || t[230] !== Rr || t[231] !== zr || t[232] !== Br || t[233] !== Vr
    ? ((Hr = (0, X.jsxs)(`div`, {
        ref: Ve,
        className: `relative min-h-0 flex-1 overflow-hidden`,
        children: [Lr, Rr, zr, Br, Vr],
      })),
      (t[229] = Lr),
      (t[230] = Rr),
      (t[231] = zr),
      (t[232] = Br),
      (t[233] = Vr),
      (t[234] = Hr))
    : (Hr = t[234]);
  let Ur;
  return (
    t[235] !== vr || t[236] !== Ir || t[237] !== Hr
      ? ((Ur = (0, X.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col bg-background`,
          "data-thread-key": vr,
          children: [Ir, Hr],
        })),
        (t[235] = vr),
        (t[236] = Ir),
        (t[237] = Hr),
        (t[238] = Ur))
      : (Ur = t[238]),
    Ur
  );
}
function Yt(e) {
  return (e ?? 0) + 1;
}
function Xt() {}
function Zt() {}
function Qt() {}
function $t(e) {
  V.add({
    type: `error`,
    title: `Unable to capture screenshot`,
    description: e instanceof Error ? e.message : `An error occurred.`,
  });
}
function en(e) {
  let t = { children: L(navigator.platform), onClick: () => void K.revealArtifact(e.path) },
    n = !1,
    r = !1,
    i,
    a = (e, a, c) => {
      let l = e === void 0 ? `success` : e,
        u = a === void 0 ? `Screenshot saved` : a;
      V.update(
        i,
        ve({
          type: l,
          title: u,
          description: c,
          actionProps: { children: r ? `Copied!` : `Copy image`, disabled: r, onClick: s },
          data: {
            additionalActions: [
              {
                id: `copy-path`,
                props: { children: n ? `Copied!` : `Copy path`, disabled: n, onClick: o },
              },
            ],
            secondaryActionProps: { ...t },
            secondaryActionVariant: `outline`,
          },
        }),
      );
    },
    o = () => {
      navigator.clipboard?.writeText
        ? navigator.clipboard.writeText(e.path).then(
            () => {
              ((n = !0),
                a(),
                window.setTimeout(() => {
                  ((n = !1), a());
                }, 2e3));
            },
            (e) => {
              a(
                `error`,
                `Unable to copy screenshot path`,
                e instanceof Error ? e.message : `An error occurred.`,
              );
            },
          )
        : a(`error`, `Unable to copy screenshot path`, `Clipboard API unavailable.`);
    },
    s = () => {
      K.copyArtifactToClipboard(e.path).then(
        () => {
          ((r = !0),
            a(),
            window.setTimeout(() => {
              ((r = !1), a());
            }, 2e3));
        },
        (e) => {
          a(
            `error`,
            `Unable to copy screenshot`,
            e instanceof Error ? e.message : `An error occurred.`,
          );
        },
      );
    };
  i = V.add(
    ve({
      type: `success`,
      title: `Screenshot saved`,
      actionProps: { children: `Copy image`, onClick: s },
      data: {
        additionalActions: [{ id: `copy-path`, props: { children: `Copy path`, onClick: o } }],
        secondaryActionProps: { ...t },
        secondaryActionVariant: `outline`,
      },
    }),
  );
}
function tn(e) {
  let t = e instanceof Error ? e.message : `An error occurred.`;
  dt(e) || V.add({ type: `error`, title: `Unable to start recording`, description: t });
}
function nn(e) {
  V.add({
    type: `error`,
    title: `Unable to stop recording`,
    description: e instanceof Error ? e.message : `An error occurred.`,
  });
}
function rn(e) {
  if (!e) return;
  let t = !1,
    n,
    r = () => {
      navigator.clipboard?.writeText
        ? navigator.clipboard.writeText(e.path).then(
            () => {
              ((t = !0),
                a(),
                window.setTimeout(() => {
                  ((t = !1), a());
                }, 2e3));
            },
            (e) => {
              V.update(
                n,
                ve({
                  type: `error`,
                  title: `Unable to copy recording path`,
                  description: e instanceof Error ? e.message : `An error occurred.`,
                  actionProps: i,
                }),
              );
            },
          )
        : V.update(
            n,
            ve({
              type: `error`,
              title: `Unable to copy recording path`,
              description: `Clipboard API unavailable.`,
              actionProps: i,
            }),
          );
    },
    i = { children: L(navigator.platform), onClick: () => void K.revealArtifact(e.path) },
    a = () => {
      V.update(
        n,
        ve({
          type: `success`,
          title: `Recording saved`,
          actionProps: i,
          data: {
            secondaryActionProps: {
              children: t ? `Copied!` : `Copy path`,
              disabled: t,
              onClick: r,
            },
            secondaryActionVariant: `outline`,
          },
        }),
      );
    };
  n = V.add(
    ve({
      type: `success`,
      title: `Recording saved`,
      actionProps: i,
      data: {
        secondaryActionProps: { children: `Copy path`, onClick: r },
        secondaryActionVariant: `outline`,
      },
    }),
  );
}
function an(e) {
  V.add({
    type: `error`,
    title: `Unable to update popped-out preview`,
    description: e instanceof Error ? e.message : `An error occurred.`,
  });
}
function on() {}
function sn() {}
function cn() {}
function ln() {}
function un() {}
function dn() {}
function fn() {}
function pn(e) {
  return e.addImage;
}
function mn(e) {
  return e.addPreviewAnnotation;
}
function hn(e) {
  let t = (0, Y.c)(18),
    { mode: n, threadRef: r, tabId: i, configuredUrls: a, visible: o, onSendAnnotation: s } = e,
    c = Te(r.environmentId),
    l = z(r.environmentId, y);
  if (!l || !c) {
    let e = l
        ? `Preview is only available in the T3 Code desktop app.`
        : `Pair this client again with preview access to control browser previews.`,
      r;
    t[0] === e
      ? (r = t[1])
      : ((r = (0, X.jsx)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-3 p-8 text-center`,
          children: (0, X.jsx)(`p`, {
            className: `max-w-sm text-sm text-muted-foreground`,
            children: e,
          }),
        })),
        (t[0] = e),
        (t[1] = r));
    let i;
    return (
      t[2] !== n || t[3] !== r
        ? ((i = (0, X.jsx)(ye, { mode: n, children: r })), (t[2] = n), (t[3] = r), (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let u;
  t[5] === i ? (u = t[6]) : ((u = i === void 0 ? {} : { tabId: i }), (t[5] = i), (t[6] = u));
  let d;
  t[7] === s ? (d = t[8]) : ((d = s ? { onSendAnnotation: s } : {}), (t[7] = s), (t[8] = d));
  let f;
  t[9] !== a || t[10] !== u || t[11] !== d || t[12] !== r || t[13] !== o
    ? ((f = (0, X.jsx)(Jt, { threadRef: r, ...u, configuredUrls: a, visible: o, ...d })),
      (t[9] = a),
      (t[10] = u),
      (t[11] = d),
      (t[12] = r),
      (t[13] = o),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== n || t[16] !== f
      ? ((p = (0, X.jsx)(ye, { mode: n, children: f })), (t[15] = n), (t[16] = f), (t[17] = p))
      : (p = t[17]),
    p
  );
}
export { hn as PreviewPanel };
//# sourceMappingURL=PreviewPanel-z1tv_zAt.js.map
