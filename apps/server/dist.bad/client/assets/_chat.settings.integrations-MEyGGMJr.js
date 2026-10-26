import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./arrow-down-SYB_uonm.js";
import { t as s } from "./arrow-right-JFWisfUC.js";
import { t as c } from "./triangle-alert-Ca4wixX0.js";
import { t as l } from "./circle-CotDCtFO.js";
import { t as u } from "./cloud-H2DGA1t_.js";
import { t as d } from "./ellipsis-vertical-DcjkWE3S.js";
import { t as f } from "./hard-drive-p5S5WHA7.js";
import { t as p } from "./minus-Czm2HkK6.js";
import { t as m } from "./monitor-DSwTf3-j.js";
import { t as h } from "./plus-B20TfFan.js";
import { t as g } from "./x-Blp0Exqg.js";
import {
  Bh as _,
  Bn as v,
  Dm as y,
  Dr as b,
  Fh as x,
  Fm as S,
  Ih as C,
  Im as w,
  L_ as T,
  Lm as E,
  Or as D,
  Ph as O,
  QC as k,
  Qn as A,
  RS as j,
  Rh as M,
  Up as N,
  Vm as P,
  Vn as F,
  Wn as I,
  Wp as L,
  XC as R,
  Yn as z,
  Zn as B,
  _h as V,
  _r as ee,
  cp as te,
  dh as H,
  eb as U,
  er as ne,
  fh as re,
  hr as W,
  ir as ie,
  iu as ae,
  jc as G,
  km as K,
  l as oe,
  lr as se,
  mr as ce,
  nr as q,
  ph as le,
  t as ue,
  tr as de,
  yh as fe,
  zS as pe,
  zh as me,
} from "./utils-CPoejuy5.js";
import { A as he } from "./entities-CgVpsCCl.js";
import { a as ge, r as _e, t as J } from "./number-field-D11YcDFl.js";
import { a as Y, c as ve, i as ye, o as be, r as xe, s as Se, t as Ce } from "./select-CBCDohvC.js";
import {
  M as we,
  N as Te,
  l as X,
  o as Ee,
  r as De,
  u as Oe,
  w as ke,
} from "./useSettings-N-JG2LFZ.js";
import { m as Ae } from "./server-3D32GveR.js";
import { a as je, l as Me, r as Ne, u as Pe } from "./session-0UrRHIau.js";
import { t as Fe } from "./query-LKSVgBQH.js";
import { t as Ie } from "./use-atom-command-DGAuqAck.js";
import { n as Le } from "./localApi-CWy6n-K6.js";
import { i as Re } from "./toast-B4KPIJDZ.js";
import {
  a as ze,
  c as Be,
  i as Ve,
  l as He,
  n as Ue,
  o as We,
  s as Ge,
  u as Ke,
} from "./dialog-BjeWpelT.js";
import { n as qe, r as Je, t as Ye } from "./collapsible-Dp2CGco9.js";
import { a as Xe, t as Ze } from "./device-W9B5dhsq.js";
import {
  a as Qe,
  c as $e,
  d as et,
  n as tt,
  o as nt,
  r as rt,
  s as it,
  t as at,
  u as ot,
} from "./DeviceSetup-DRMkBPav.js";
import { t as st } from "./AnimatedHeight-9NeOBCdc.js";
import { i as ct, n as lt } from "./Icons-Blot99re.js";
import { t as ut } from "./preview-D-juEBB6.js";
import { n as dt } from "./preview-BuXyUmSo.js";
import { t as ft } from "./previewBridge-C4h_myCm.js";
import { m as pt } from "./settingsScope-ohK4TuKq.js";
import { l as mt } from "./settingsSearch-CrEaqXdW.js";
import {
  Gi as ht,
  Hi as gt,
  Ji as _t,
  Ki as vt,
  Mo as yt,
  No as bt,
  Rs as xt,
  Ui as St,
  Wi as Ct,
  as as wt,
  es as Tt,
  is as Et,
  qi as Dt,
  rs as Ot,
} from "./main-BZa0O6xN.js";
import {
  T as kt,
  a as At,
  c as jt,
  g as Mt,
  i as Nt,
  r as Pt,
  s as Ft,
  w as It,
  x as Lt,
  y as Rt,
} from "./settingsLayout-2i87rQY9.js";
import { t as zt } from "./ScopedSwitch-eETzzyfB.js";
import { t as Bt } from "./FoldedSettingsSection-Aztb41kt.js";
import { t as Vt } from "./draft-input-C3knK-UD.js";
import { t as Ht } from "./SecretInput-CtEGQlh1.js";
import { n as Ut, r as Wt, t as Gt } from "./usePermissionStatus-BlDIHXBP.js";
var Z = n(),
  Q = e(r(), 1);
function Kt(e) {
  let t = (0, Z.c)(27),
    { tools: n, action: r, kind: i, owner: a, error: o } = e,
    s = i ? n?.[i] : void 0,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c =
        s?.runningVersion ??
        (s?.installedVersions.includes(s.requiredVersion)
          ? s.requiredVersion
          : s?.installedVersions.toSorted(qt).at(-1))),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u = i === `hub` ? `Device hub` : `Agent device`,
    d = i
      ? `${u}: ${l ? `version ${l}` : s ? `not installed` : `version unknown`}. Show details`
      : void 0,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(D, { tone: `muted` })), (t[2] = f))
    : (f = t[2]);
  let p = i
      ? l
        ? `v${l}`
        : s
          ? `Not installed`
          : `Version unknown`
      : o
        ? `Versions unavailable`
        : `Versions`,
    m;
  t[3] !== d || t[4] !== p
    ? ((m = (0, Q.jsx)(wt, { "aria-label": d, render: f, children: p })),
      (t[3] = d),
      (t[4] = p),
      (t[5] = m))
    : (m = t[5]);
  let h = i ? u : `Device tools`,
    g;
  t[6] === h ? (g = t[7]) : ((g = (0, Q.jsx)(Et, { children: h })), (t[6] = h), (t[7] = g));
  let _;
  t[8] !== i || t[9] !== u || t[10] !== n
    ? ((_ = n
        ? (0, Q.jsx)(`div`, {
            className: `mt-4 divide-y divide-border/50`,
            children: [
              [`Device hub`, n.hub],
              [`Agent device`, n.agent],
            ]
              .filter((e) => {
                let [t] = e;
                return !i || t === u;
              })
              .map((e) => {
                let [t, n] = e;
                return (0, Q.jsxs)(
                  `div`,
                  {
                    className: `space-y-2 py-3 first:pt-0 last:pb-0`,
                    children: [
                      i ? null : (0, Q.jsx)(`p`, { className: `text-xs font-medium`, children: t }),
                      (0, Q.jsxs)(`dl`, {
                        className: `grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-xs`,
                        children: [
                          (0, Q.jsx)(`dt`, {
                            className: `text-muted-foreground`,
                            children: `Running`,
                          }),
                          (0, Q.jsx)(`dd`, {
                            className: `text-right font-mono`,
                            children: n.runningVersion ?? `Not running`,
                          }),
                          (0, Q.jsx)(`dt`, {
                            className: `text-muted-foreground`,
                            children: `Required`,
                          }),
                          (0, Q.jsx)(`dd`, {
                            className: `text-right font-mono`,
                            children: n.requiredVersion,
                          }),
                          (0, Q.jsx)(`dt`, {
                            className: `text-muted-foreground`,
                            children: `Installed`,
                          }),
                          (0, Q.jsx)(`dd`, {
                            className: `text-right font-mono break-words`,
                            children: n.installedVersions.join(`, `) || `None`,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                );
              }),
          })
        : (0, Q.jsx)(`p`, {
            className: `mt-3 text-xs text-muted-foreground`,
            children: `Versions have not been checked.`,
          })),
      (t[8] = i),
      (t[9] = u),
      (t[10] = n),
      (t[11] = _))
    : (_ = t[11]);
  let v = a ? `Managed by ${a}. ` : ``,
    y;
  t[12] === v
    ? (y = t[13])
    : ((y = (0, Q.jsxs)(`p`, {
        className: `mt-4 border-t border-border/50 pt-3 text-xs text-muted-foreground`,
        children: [v, `Tools update automatically on this host when needed.`],
      })),
      (t[12] = v),
      (t[13] = y));
  let b;
  t[14] === o
    ? (b = t[15])
    : ((b = o
        ? (0, Q.jsx)(`p`, {
            role: `status`,
            className: `mt-2 text-xs text-destructive`,
            children: o,
          })
        : null),
      (t[14] = o),
      (t[15] = b));
  let x;
  t[16] === r
    ? (x = t[17])
    : ((x = r ? (0, Q.jsx)(`div`, { className: `mt-3`, children: r }) : null),
      (t[16] = r),
      (t[17] = x));
  let S;
  t[18] !== y || t[19] !== b || t[20] !== x || t[21] !== g || t[22] !== _
    ? ((S = (0, Q.jsxs)(Ot, { align: `end`, width: `md`, children: [g, _, y, b, x] })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = g),
      (t[22] = _),
      (t[23] = S))
    : (S = t[23]);
  let C;
  return (
    t[24] !== S || t[25] !== m
      ? ((C = (0, Q.jsxs)(Tt, { children: [m, S] })), (t[24] = S), (t[25] = m), (t[26] = C))
      : (C = t[26]),
    C
  );
}
function qt(e, t) {
  return e.localeCompare(t, void 0, { numeric: !0 });
}
function Jt(e) {
  let t = (0, Z.c)(4),
    { platforms: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(Yt)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Q.jsx)(`div`, {
          className: `flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function Yt(e) {
  return (0, Q.jsxs)(
    v,
    {
      children: [
        (0, Q.jsxs)(I, {
          render: (0, Q.jsx)(`span`, { tabIndex: 0, className: `inline-flex items-center gap-1` }),
          children: [
            e.available
              ? (0, Q.jsx)(a, { className: `size-3` })
              : (0, Q.jsx)(p, { className: `size-3` }),
            e.platform === `ios` ? `iOS` : `Android`,
            ` `,
            e.available ? `available` : `unavailable`,
          ],
        }),
        (0, Q.jsx)(F, {
          children: e.reason ?? (e.platform === `ios` ? `iOS available` : `Android available`),
        }),
      ],
    },
    e.platform,
  );
}
var $ = e(t(), 1);
function Xt(e) {
  let t = new Map(),
    n = new Map(),
    r = new Map();
  for (let i of e) {
    let e = new Set();
    for (let a of i.hosts) {
      let o = JSON.stringify([a.target, a.port, a.identityFile]),
        s = JSON.stringify([a.label, a.target, a.port, a.identityFile]),
        c = n.get(a.id),
        l = r.get(a.target),
        u = t.get(o);
      if (e.has(o) || (c !== void 0 && c !== s) || (l !== void 0 && l !== s)) return null;
      (e.add(o), n.set(a.id, s), r.set(a.target, s));
      let d = { environmentId: i.environmentId, label: i.label, host: a };
      u ? u.members.push(d) : t.set(o, { host: a, members: [d] });
    }
  }
  return [...t.values()];
}
function Zt(e, t, n, r = t) {
  let i = (e, t) => e.target === t.target && e.port === t.port && e.identityFile === t.identityFile,
    a = (t) => {
      let n = e.filter((e) => i(e, t));
      if (n.length > 1)
        throw Error(
          `Multiple hosts match this SSH destination. Select the environment to edit its hosts.`,
        );
      return n[0];
    },
    o = e.find((e) => e.id === r.id) ?? a(r) ?? (n ? void 0 : a(t));
  return n
    ? e.filter((e) => e.id !== o?.id)
    : o
      ? e.map((e) => (e.id === o.id ? { ...t, id: o.id } : e))
      : [...e, t];
}
var Qt = U(x);
function $t(e) {
  let { identityFile: t, ...n } = e;
  return Qt({ ...n, ...(t?.trim() ? { identityFile: t.trim() } : {}) });
}
function en(e) {
  return JSON.stringify([e.target.trim(), e.port, e.identityFile?.trim() || void 0]);
}
async function tn(e, t, n, r) {
  await Promise.all(
    e.map(async (e) => {
      r(e.environmentId, { status: `pending` });
      try {
        if (!e.connected) throw Error(`Environment disconnected`);
        let i = await n(e.environmentId, t);
        r(
          e.environmentId,
          i.kind === `local`
            ? { status: `local` }
            : {
                status: `connected`,
                platforms: i.platforms,
                ...(i.tools ? { tools: i.tools } : {}),
              },
        );
      } catch (t) {
        r(e.environmentId, { status: `failed`, error: t instanceof Error ? t.message : String(t) });
      }
    }),
  );
}
function nn(e) {
  let t = (0, Z.c)(9),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let r = Ie(Ze.testHost, n),
    i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = {}), (t[1] = i)) : (i = t[1]);
  let [a, o] = (0, $.useState)(i),
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = new Set()), (t[2] = s)) : (s = t[2]);
  let c = (0, $.useRef)(s),
    l;
  t[3] !== e || t[4] !== r
    ? ((l = async (t) => {
        let n = en(t);
        if (c.current.has(n)) return;
        (c.current.add(n), o((e) => ({ ...e, [n]: {} })));
        let i = {};
        return (
          await tn(
            e,
            t,
            async (e, t) => {
              if (!Ne(e, `settings:write`))
                throw Error(`This connection cannot test device hosts.`);
              let n = await r({ environmentId: e, input: t });
              if (n._tag === `Failure`) throw Error(j(n.cause));
              return n.value;
            },
            (e, t) => {
              ((i[e] = t), o((r) => ({ ...r, [n]: { ...r[n], [e]: t } })));
            },
          ).finally(() => c.current.delete(n)),
          i
        );
      }),
      (t[3] = e),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  return (
    t[6] !== a || t[7] !== u
      ? ((d = { checks: a, testConnection: u }), (t[6] = a), (t[7] = u), (t[8] = d))
      : (d = t[8]),
    d
  );
}
function rn(e) {
  let t = (0, Z.c)(16),
    { host: n, isNew: r, targets: i, busy: a, onSave: o, onClose: s } = e,
    c;
  t[0] !== a || t[1] !== s
    ? ((c = (e) => {
        !e && !a && s();
      }),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = !a,
    u;
  t[3] !== a || t[4] !== n || t[5] !== r || t[6] !== s || t[7] !== o || t[8] !== i
    ? ((u = (0, Q.jsx)(an, { host: n, isNew: r, targets: i, busy: a, onSave: o, onClose: s })),
      (t[3] = a),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s),
      (t[7] = o),
      (t[8] = i),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== l || t[11] !== u
    ? ((d = (0, Q.jsx)(He, { showCloseButton: l, children: u })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== c || t[14] !== d
      ? ((f = (0, Q.jsx)(Ue, { open: !0, onOpenChange: c, children: d })),
        (t[13] = c),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function an(e) {
  let t = (0, Z.c)(105),
    { host: n, isNew: r, targets: o, busy: s, onSave: c, onClose: l } = e,
    [u, d] = (0, $.useState)(n),
    [f, p] = (0, $.useState)(null),
    { checks: h, testConnection: _ } = nn(o),
    v;
  t[0] === u ? (v = t[1]) : ((v = en(u)), (t[0] = u), (t[1] = v));
  let y = v,
    x = h[y],
    S = Object.values(x ?? {}).some(sn),
    C,
    w;
  if (t[2] !== u) {
    let e;
    (t[5] !== u.label || t[6] !== u.target
      ? ((e = u.label.trim() || u.target), (t[5] = u.label), (t[6] = u.target), (t[7] = e))
      : (e = t[7]),
      (C = $t({ ...u, label: e })),
      (w = k(C)),
      (t[2] = u),
      (t[3] = C),
      (t[4] = w));
  } else ((C = t[3]), (w = t[4]));
  let T = w,
    E;
  t[8] === x ? (E = t[9]) : ((E = Object.values(x ?? {}).filter(on)), (t[8] = x), (t[9] = E));
  let O = E.length,
    A = o.length === 1 || (f?.key === y ? f.open : O > 0),
    j = S
      ? `Checking environments…`
      : x
        ? O
          ? `${O} of ${o.length} failed`
          : `Connection checks passed`
        : `Check access before saving`,
    M;
  t[10] !== s || t[11] !== S || t[12] !== u.label || t[13] !== C || t[14] !== c
    ? ((M = (e) => {
        (e.preventDefault(), k(C) && u.label.trim() && !s && !S && c(C.value));
      }),
      (t[10] = s),
      (t[11] = S),
      (t[12] = u.label),
      (t[13] = C),
      (t[14] = c),
      (t[15] = M))
    : (M = t[15]);
  let N = r ? `Add device host` : `Edit device host`,
    P;
  t[16] === N ? (P = t[17]) : ((P = (0, Q.jsx)(Ke, { children: N })), (t[16] = N), (t[17] = P));
  let F =
      o.length === 1
        ? `Connect from ${o[0]?.label}.`
        : `Connect from ${o.length} selected environments.`,
    I;
  t[18] === F
    ? (I = t[19])
    : ((I = (0, Q.jsxs)(ze, { children: [F, ` `, `Hosts on the same machine are skipped.`] })),
      (t[18] = F),
      (t[19] = I));
  let L;
  t[20] !== P || t[21] !== I
    ? ((L = (0, Q.jsxs)(Ge, { children: [P, I] })), (t[20] = P), (t[21] = I), (t[22] = L))
    : (L = t[22]);
  let R;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(`span`, { children: `Name` })), (t[23] = R))
    : (R = t[23]);
  let z;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (e) => {
        let t = e.target.value;
        d((e) => ({ ...e, label: t }));
      }),
      (t[24] = z))
    : (z = t[24]);
  let B;
  t[25] !== s || t[26] !== u.label
    ? ((B = (0, Q.jsxs)(`label`, {
        className: `block space-y-1.5 text-sm`,
        children: [
          R,
          (0, Q.jsx)(ee, {
            autoFocus: !0,
            required: !0,
            value: u.label,
            disabled: s,
            onChange: z,
            placeholder: `Mac mini`,
          }),
        ],
      })),
      (t[25] = s),
      (t[26] = u.label),
      (t[27] = B))
    : (B = t[27]);
  let V;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(`span`, { children: `SSH target` })), (t[28] = V))
    : (V = t[28]);
  let te;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (e) => {
        let t = e.target.value;
        d((e) => ({ ...e, target: t }));
      }),
      (t[29] = te))
    : (te = t[29]);
  let H;
  t[30] !== s || t[31] !== u.target
    ? ((H = (0, Q.jsxs)(`label`, {
        className: `block space-y-1.5 text-sm`,
        children: [
          V,
          (0, Q.jsx)(ee, {
            required: !0,
            value: u.target,
            disabled: s,
            onChange: te,
            placeholder: `user@host or SSH alias`,
          }),
        ],
      })),
      (t[30] = s),
      (t[31] = u.target),
      (t[32] = H))
    : (H = t[32]);
  let U = n.port !== void 0 || n.identityFile !== void 0 || void 0,
    ne;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Q.jsx)(`summary`, {
        className: `cursor-pointer text-muted-foreground`,
        children: `SSH options`,
      })),
      (t[33] = ne))
    : (ne = t[33]);
  let re;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Q.jsx)(`span`, { children: `Identity file` })), (t[34] = re))
    : (re = t[34]);
  let ie = u.identityFile ?? ``,
    ae;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (e) => {
        let t = e.target.value;
        d((e) => {
          let { identityFile: n, ...r } = e;
          return t ? { ...r, identityFile: t } : r;
        });
      }),
      (t[35] = ae))
    : (ae = t[35]);
  let G;
  t[36] !== s || t[37] !== ie
    ? ((G = (0, Q.jsxs)(`label`, {
        className: `block space-y-1.5`,
        children: [
          re,
          (0, Q.jsx)(ee, {
            value: ie,
            disabled: s,
            onChange: ae,
            placeholder: `SSH config default`,
          }),
        ],
      })),
      (t[36] = s),
      (t[37] = ie),
      (t[38] = G))
    : (G = t[38]);
  let K;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Q.jsx)(`span`, { children: `Port` })), (t[39] = K))
    : (K = t[39]);
  let oe = u.port ?? ``,
    se;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (e) => {
        let t = e.target.value;
        d((e) => {
          let { port: n, ...r } = e;
          return t ? { ...r, port: Number(t) } : r;
        });
      }),
      (t[40] = se))
    : (se = t[40]);
  let ce;
  t[41] !== s || t[42] !== oe
    ? ((ce = (0, Q.jsxs)(`label`, {
        className: `block space-y-1.5`,
        children: [
          K,
          (0, Q.jsx)(ee, {
            type: `number`,
            min: 1,
            max: 65535,
            value: oe,
            disabled: s,
            onChange: se,
            placeholder: `Default`,
          }),
        ],
      })),
      (t[41] = s),
      (t[42] = oe),
      (t[43] = ce))
    : (ce = t[43]);
  let q;
  t[44] !== G || t[45] !== ce
    ? ((q = (0, Q.jsxs)(`div`, {
        className: `mt-3 grid grid-cols-[minmax(0,1fr)_7rem] gap-3`,
        children: [G, ce],
      })),
      (t[44] = G),
      (t[45] = ce),
      (t[46] = q))
    : (q = t[46]);
  let le;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Q.jsx)(`p`, {
        className: `mt-2 text-xs text-muted-foreground`,
        children: `Optional. Resolved separately on each environment.`,
      })),
      (t[47] = le))
    : (le = t[47]);
  let ue;
  t[48] !== U || t[49] !== q
    ? ((ue = (0, Q.jsxs)(`details`, { open: U, className: `text-sm`, children: [ne, q, le] })),
      (t[48] = U),
      (t[49] = q),
      (t[50] = ue))
    : (ue = t[50]);
  let de;
  t[51] === y ? (de = t[52]) : ((de = (e) => p({ key: y, open: e })), (t[51] = y), (t[52] = de));
  let fe;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsx)(`div`, { className: `rounded-lg border border-border/60` })), (t[53] = fe))
    : (fe = t[53]);
  let pe;
  t[54] !== j || t[55] !== A || t[56] !== x || t[57] !== o.length
    ? ((pe =
        o.length === 1
          ? (0, Q.jsx)(`p`, {
              role: `status`,
              className: `text-xs text-muted-foreground`,
              children: j,
            })
          : (0, Q.jsx)(`div`, {
              className: `min-w-0 text-xs [--inline-button-white-space:normal]`,
              children: (0, Q.jsxs)(Je, {
                disabled: !x,
                "aria-label": `${j}. Per-machine results`,
                render: (0, Q.jsx)(D, { tone: `muted` }),
                children: [
                  (0, Q.jsx)(`span`, { role: `status`, className: `text-left`, children: j }),
                  x
                    ? (0, Q.jsx)(i, { className: `size-3 shrink-0 ${A ? `rotate-180` : ``}` })
                    : null,
                ],
              }),
            })),
      (t[54] = j),
      (t[55] = A),
      (t[56] = x),
      (t[57] = o.length),
      (t[58] = pe))
    : (pe = t[58]);
  let me = s || S || !T,
    he;
  t[59] !== C || t[60] !== _
    ? ((he = () => {
        k(C) && _(C.value);
      }),
      (t[59] = C),
      (t[60] = _),
      (t[61] = he))
    : (he = t[61]);
  let ge;
  t[62] === S
    ? (ge = t[63])
    : ((ge = S ? (0, Q.jsx)(W, { size: `xs` }) : null), (t[62] = S), (t[63] = ge));
  let _e;
  t[64] !== me || t[65] !== he || t[66] !== ge
    ? ((_e = (0, Q.jsxs)(b, {
        type: `button`,
        size: `sm`,
        variant: `outline`,
        disabled: me,
        onClick: he,
        children: [ge, ` Test connection`],
      })),
      (t[64] = me),
      (t[65] = he),
      (t[66] = ge),
      (t[67] = _e))
    : (_e = t[67]);
  let J;
  t[68] !== pe || t[69] !== _e
    ? ((J = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 px-3 py-2.5`,
        children: [pe, _e],
      })),
      (t[68] = pe),
      (t[69] = _e),
      (t[70] = J))
    : (J = t[70]);
  let Y;
  t[71] !== x || t[72] !== o
    ? ((Y = x
        ? (0, Q.jsx)(qe, {
            render: (0, Q.jsx)(`ul`, {
              className: `border-t border-border/60 divide-y divide-border/40`,
            }),
            children: o.map((e) => {
              let t = x[e.environmentId];
              return t
                ? (0, Q.jsxs)(
                    `li`,
                    {
                      className: `px-3 py-2.5 text-xs`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between gap-3`,
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `truncate font-medium`,
                              children: e.label,
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `flex shrink-0 items-center gap-1.5 ${t.status === `failed` ? `text-destructive` : `text-muted-foreground`}`,
                              children:
                                t.status === `pending`
                                  ? (0, Q.jsxs)(Q.Fragment, {
                                      children: [(0, Q.jsx)(W, { size: `xs` }), ` Checking…`],
                                    })
                                  : t.status === `local`
                                    ? (0, Q.jsxs)(Q.Fragment, {
                                        children: [
                                          (0, Q.jsx)(m, { className: `size-3` }),
                                          ` Already available locally`,
                                        ],
                                      })
                                    : t.status === `failed`
                                      ? (0, Q.jsxs)(Q.Fragment, {
                                          children: [
                                            (0, Q.jsx)(g, { className: `size-3` }),
                                            ` Failed`,
                                          ],
                                        })
                                      : (0, Q.jsxs)(Q.Fragment, {
                                          children: [
                                            (0, Q.jsx)(a, { className: `size-3` }),
                                            ` Connected`,
                                          ],
                                        }),
                            }),
                          ],
                        }),
                        t.status === `connected`
                          ? (0, Q.jsx)(`div`, {
                              className: `mt-1.5`,
                              children: (0, Q.jsx)(Jt, { platforms: t.platforms }),
                            })
                          : null,
                        t.status === `failed`
                          ? (0, Q.jsxs)(`details`, {
                              className: `mt-1.5 text-muted-foreground`,
                              children: [
                                (0, Q.jsx)(`summary`, {
                                  className: `cursor-pointer`,
                                  children: `Show error`,
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `mt-1 max-h-32 overflow-auto whitespace-pre-wrap break-words`,
                                  children: t.error,
                                }),
                              ],
                            })
                          : null,
                      ],
                    },
                    e.environmentId,
                  )
                : null;
            }),
          })
        : null),
      (t[71] = x),
      (t[72] = o),
      (t[73] = Y))
    : (Y = t[73]);
  let ve;
  t[74] !== A || t[75] !== de || t[76] !== J || t[77] !== Y
    ? ((ve = (0, Q.jsxs)(Ye, { open: A, onOpenChange: de, render: fe, children: [J, Y] })),
      (t[74] = A),
      (t[75] = de),
      (t[76] = J),
      (t[77] = Y),
      (t[78] = ve))
    : (ve = t[78]);
  let ye;
  t[79] !== B || t[80] !== H || t[81] !== ue || t[82] !== ve
    ? ((ye = (0, Q.jsxs)(Be, { children: [B, H, ue, ve] })),
      (t[79] = B),
      (t[80] = H),
      (t[81] = ue),
      (t[82] = ve),
      (t[83] = ye))
    : (ye = t[83]);
  let be;
  t[84] !== s || t[85] !== l
    ? ((be = (0, Q.jsx)(b, {
        type: `button`,
        variant: `ghost`,
        disabled: s,
        onClick: l,
        children: `Cancel`,
      })),
      (t[84] = s),
      (t[85] = l),
      (t[86] = be))
    : (be = t[86]);
  let xe;
  t[87] !== s || t[88] !== S || t[89] !== u.label || t[90] !== T
    ? ((xe = s || S || !T || !u.label.trim()),
      (t[87] = s),
      (t[88] = S),
      (t[89] = u.label),
      (t[90] = T),
      (t[91] = xe))
    : (xe = t[91]);
  let Se;
  t[92] === s
    ? (Se = t[93])
    : ((Se = s ? (0, Q.jsx)(W, { size: `xs` }) : null), (t[92] = s), (t[93] = Se));
  let Ce;
  t[94] !== xe || t[95] !== Se
    ? ((Ce = (0, Q.jsxs)(b, { type: `submit`, disabled: xe, children: [Se, ` Save host`] })),
      (t[94] = xe),
      (t[95] = Se),
      (t[96] = Ce))
    : (Ce = t[96]);
  let we;
  t[97] !== be || t[98] !== Ce
    ? ((we = (0, Q.jsxs)(We, { children: [be, Ce] })), (t[97] = be), (t[98] = Ce), (t[99] = we))
    : (we = t[99]);
  let Te;
  return (
    t[100] !== ye || t[101] !== M || t[102] !== we || t[103] !== L
      ? ((Te = (0, Q.jsxs)(`form`, {
          className: `flex min-h-0 flex-col`,
          onSubmit: M,
          children: [L, ye, we],
        })),
        (t[100] = ye),
        (t[101] = M),
        (t[102] = we),
        (t[103] = L),
        (t[104] = Te))
      : (Te = t[104]),
    Te
  );
}
function on(e) {
  return e.status === `failed`;
}
function sn(e) {
  return e.status === `pending`;
}
function cn(e) {
  let t = (0, Z.c)(59),
    { scope: n, environments: r, connectedEnvironments: i } = Lt(),
    a = je(e.environmentId, T),
    o = n.kind === `project` || n.kind === `checkout`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { reportFailure: !1 }), (t[0] = s))
    : (s = t[0]);
  let c = Ie(Ae.updateSettings, s),
    [l, u] = (0, $.useState)(null),
    [d, f] = (0, $.useState)(null),
    [p, m] = (0, $.useState)(!1),
    g;
  t[1] === r
    ? (g = t[2])
    : ((g = r.map((e) => ({
        environmentId: e.environmentId,
        label: It(e, r),
        connected: e.connection.phase === `connected`,
      }))),
      (t[1] = r),
      (t[2] = g));
  let _ = g,
    { checks: v, testConnection: y } = nn(_),
    x,
    S,
    C,
    w,
    E,
    D,
    O,
    k,
    A;
  if (
    t[3] !== p ||
    t[4] !== a ||
    t[5] !== v ||
    t[6] !== i ||
    t[7] !== l ||
    t[8] !== r ||
    t[9] !== d ||
    t[10] !== o ||
    t[11] !== e.environmentId ||
    t[12] !== _ ||
    t[13] !== y ||
    t[14] !== c
  ) {
    let n;
    t[24] === i
      ? (n = t[25])
      : ((n = (e) => ({
          environmentId: e.environmentId,
          label: e.label,
          labels: kt(e, i),
          hosts: e.serverConfig?.settings.deviceHosts ?? [],
        })),
        (t[24] = i),
        (t[25] = n));
    let s = i.map(n),
      g = Xt(s),
      T;
    t[26] !== r || t[27] !== o || t[28] !== e.environmentId || t[29] !== c
      ? ((T = async (t, n, i) => {
          let a = n !== void 0 && n,
            s = i === void 0 ? t : i;
          if (!e.environmentId || o) return;
          m(!0);
          let l = await Promise.allSettled(
            r.map(async (e) => {
              if (e.connection.phase !== `connected` || !e.serverConfig)
                throw Error(`Environment disconnected`);
              if (!Ne(e.environmentId, `settings:write`))
                throw Error(`This connection cannot change device settings.`);
              return c({
                environmentId: e.environmentId,
                input: { patch: { deviceHosts: Zt(e.serverConfig.settings.deviceHosts, t, a, s) } },
              });
            }),
          );
          m(!1);
          let d = r.filter((e, t) => {
            let n = l[t];
            return n?.status !== `fulfilled` || n.value._tag === `Failure`;
          });
          d.length === 0
            ? u(null)
            : Re.add({
                type: `error`,
                title: `Device hosts not saved on all environments`,
                description: `Could not update ${d.map(dn).join(`, `)}.`,
              });
        }),
        (t[26] = r),
        (t[27] = o),
        (t[28] = e.environmentId),
        (t[29] = c),
        (t[30] = T))
      : (T = t[30]);
    let j = T,
      M = !a || o || p,
      N;
    t[31] !== _ || t[32] !== y
      ? ((N = async (e) => {
          let t = await y(e);
          if (!t) return;
          let n = _.filter((e) => t[e.environmentId]?.status === `failed`);
          return (
            Re.add({
              type: n.length ? `error` : `success`,
              title: n.length
                ? `${e.label}: ${n.length} of ${_.length} environments failed`
                : `${e.label}: connection checks passed`,
              description: n.length
                ? `Could not connect from ${n.map(un).join(`, `)}.`
                : `Connected or already available locally on each selected environment.`,
            }),
            t
          );
        }),
        (t[31] = _),
        (t[32] = y),
        (t[33] = N))
      : (N = t[33]);
    let P;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (e) => {
          (f(e), u(e));
        }),
        (t[34] = P))
      : (P = t[34]);
    let F;
    t[35] === j ? (F = t[36]) : ((F = (e) => void j(e, !0)), (t[35] = j), (t[36] = F));
    let I;
    t[37] !== v || t[38] !== M || t[39] !== N || t[40] !== F
      ? ((I = { busy: M, checks: v, testConnection: N, onEdit: P, onRemove: F }),
        (t[37] = v),
        (t[38] = M),
        (t[39] = N),
        (t[40] = F),
        (t[41] = I))
      : (I = t[41]);
    let L = I;
    ((x = At),
      (w = `device-hosts`),
      (E = `Device hosts`),
      (D = !0),
      t[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = [`deviceHosts`]), (t[42] = O))
        : (O = t[42]),
      (k = `Add remote machines with simulator or emulator runtimes installed, and the selected environments will connect over SSH and set up device tools automatically.`));
    let R = !a || o || p || !e.environmentId || l !== null,
      z,
      B;
    (t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((z = () => {
          (f(null), u({ kind: `ssh`, id: oe(), label: ``, target: `` }));
        }),
        (B = (0, Q.jsx)(h, { className: `size-3.5` })),
        (t[43] = z),
        (t[44] = B))
      : ((z = t[43]), (B = t[44])),
      t[45] === R
        ? (A = t[46])
        : ((A = (0, Q.jsxs)(b, {
            size: `sm`,
            variant: `outline`,
            disabled: R,
            onClick: z,
            children: [B, ` Add host`],
          })),
          (t[45] = R),
          (t[46] = A)),
      (S = `pt-3 pb-2`),
      (C = e.environmentId
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              s.length > 1 && g === null
                ? (0, Q.jsx)(`div`, {
                    className: `space-y-2`,
                    children: s.map((e) =>
                      (0, Q.jsx)(
                        Bt,
                        {
                          id: `device-hosts-${e.environmentId}`,
                          title: (0, Q.jsxs)(Q.Fragment, {
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `block max-w-64 truncate`,
                                children: e.labels.primary,
                              }),
                              e.labels.secondary
                                ? (0, Q.jsx)(`span`, {
                                    className: `block max-w-64 truncate text-xs font-normal text-muted-foreground`,
                                    children: e.labels.secondary,
                                  })
                                : null,
                            ],
                          }),
                          summary: On(e.hosts.map(ln)) || `No device hosts`,
                          children: (0, Q.jsx)(`div`, {
                            className: `px-3 sm:px-4 [&>div:first-child]:border-t-0`,
                            children: (0, Q.jsx)(pn, { environments: [e], ...L }),
                          }),
                        },
                        e.environmentId,
                      ),
                    ),
                  })
                : (0, Q.jsx)(pn, {
                    environments: s,
                    groups: g ?? void 0,
                    compact: s.length > 1,
                    ...L,
                  }),
              l
                ? (0, Q.jsx)(
                    rn,
                    {
                      host: l,
                      isNew: d === null,
                      targets: _,
                      busy: p,
                      onSave: (e) => void j(e, !1, d ?? e),
                      onClose: () => u(null),
                    },
                    l.id,
                  )
                : null,
            ],
          })
        : (0, Q.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: `Connect a selected environment to manage device hosts.`,
          })),
      (t[3] = p),
      (t[4] = a),
      (t[5] = v),
      (t[6] = i),
      (t[7] = l),
      (t[8] = r),
      (t[9] = d),
      (t[10] = o),
      (t[11] = e.environmentId),
      (t[12] = _),
      (t[13] = y),
      (t[14] = c),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = E),
      (t[20] = D),
      (t[21] = O),
      (t[22] = k),
      (t[23] = A));
  } else
    ((x = t[15]),
      (S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (E = t[19]),
      (D = t[20]),
      (O = t[21]),
      (k = t[22]),
      (A = t[23]));
  let j;
  t[47] !== S || t[48] !== C
    ? ((j = (0, Q.jsx)(`div`, { className: S, children: C })),
      (t[47] = S),
      (t[48] = C),
      (t[49] = j))
    : (j = t[49]);
  let M;
  return (
    t[50] !== x ||
    t[51] !== j ||
    t[52] !== w ||
    t[53] !== E ||
    t[54] !== D ||
    t[55] !== O ||
    t[56] !== k ||
    t[57] !== A
      ? ((M = (0, Q.jsx)(x, {
          id: w,
          title: E,
          serverScoped: D,
          settingKeys: O,
          description: k,
          control: A,
          children: j,
        })),
        (t[50] = x),
        (t[51] = j),
        (t[52] = w),
        (t[53] = E),
        (t[54] = D),
        (t[55] = O),
        (t[56] = k),
        (t[57] = A),
        (t[58] = M))
      : (M = t[58]),
    M
  );
}
function ln(e) {
  return e.label;
}
function un(e) {
  return e.label;
}
function dn(e) {
  return e.label;
}
var fn = Me(`web-device-host-states`, (e) => Ze.state({ environmentId: e, input: {} }));
function pn(e) {
  let t = (0, Z.c)(14),
    {
      environments: n,
      groups: r,
      compact: o,
      busy: s,
      onEdit: u,
      onRemove: f,
      checks: p,
      testConnection: m,
    } = e,
    h = o !== void 0 && o,
    { environments: g } = Lt(),
    _;
  t[0] === g ? (_ = t[1]) : ((_ = (e) => [e.environmentId, kt(e, g)]), (t[0] = g), (t[1] = _));
  let v = new Map(g.map(_)),
    y = n.map(Dn),
    x = G(fn(Pe(y))),
    S;
  t[2] === x ? (S = t[3]) : ((S = (e, t) => [e, R(te(x[t]))]), (t[2] = x), (t[3] = S));
  let C = new Map(y.map(S)),
    w = Ie(Ze.list),
    [T, E] = (0, $.useState)(null),
    O;
  t[4] === w
    ? (O = t[5])
    : ((O = (e, t, n) => {
        (E(n === void 0 ? t : n),
          w({ environmentId: e, input: { retryHostId: t } }).finally(() => E(null)));
      }),
      (t[4] = w),
      (t[5] = O));
  let k = O,
    j;
  t[6] !== n || t[7] !== r
    ? ((j = r ?? n.flatMap(En)), (t[6] = n), (t[7] = r), (t[8] = j))
    : (j = t[8]);
  let M = j,
    N;
  t[9] === M.length
    ? (N = t[10])
    : ((N =
        M.length === 0
          ? (0, Q.jsx)(`p`, {
              className: `py-2 text-sm text-muted-foreground`,
              children: `No device hosts.`,
            })
          : null),
      (t[9] = M.length),
      (t[10] = N));
  let P = M.map((e) => {
      let { host: t, members: n } = e,
        r = p[en(t)],
        o = g.flatMap((e) =>
          r?.[e.environmentId] && !n.some((t) => t.environmentId === e.environmentId)
            ? [{ environmentId: e.environmentId, label: e.label, host: t }]
            : [],
        ),
        _ = [...n, ...o].map((e) => {
          let t = C.get(e.environmentId),
            n = t?.hostStatuses[e.host.id],
            i = r?.[e.environmentId],
            a = t?.hosts.find((t) => t.id === e.host.id),
            o = v.get(e.environmentId)?.primary ?? e.label,
            s = v.get(e.environmentId)?.secondary,
            c =
              i?.status === `failed`
                ? i.error
                : i?.status === `local`
                  ? void 0
                  : n?.status === `failed`
                    ? n.detail
                    : void 0;
          return {
            ...e,
            label: o,
            address: s,
            name: [o, s].filter(Boolean).join(` · `),
            state: t,
            status: n,
            check: i,
            summary: a,
            error: c,
            versions: (0, Q.jsx)(Kt, {
              owner: o,
              error: a?.toolInspectionError,
              tools: a?.tools ?? (i?.status === `connected` ? i.tools : void 0),
            }),
          };
        }),
        y = _[0];
      if (!y) return null;
      let { environmentId: x, status: S, check: w, summary: E, error: O } = y,
        j = (w?.status === `connected` ? w.platforms : void 0) ?? E?.platforms ?? [],
        M =
          w?.status === `pending`
            ? `Checking connection…`
            : S?.status === `installing`
              ? `Installing device support…`
              : S?.status === `starting`
                ? `Connecting…`
                : null,
        N = _.filter(Tn),
        P = _.some(wn),
        F = _.every(Cn),
        I = _.filter(Sn),
        L = !h && I.includes(y),
        R = h
          ? [
              {
                key: `connection`,
                label: N.length
                  ? `Connection failed`
                  : P
                    ? `Checking connections`
                    : F
                      ? `Connected`
                      : `Connection not checked`,
                warning: N.length > 0,
                icon: N.length
                  ? (0, Q.jsx)(c, { className: `size-3.5` })
                  : P
                    ? (0, Q.jsx)(W, { size: `xs` })
                    : F
                      ? (0, Q.jsx)(a, { className: `size-3.5` })
                      : (0, Q.jsx)(l, { className: `size-3.5` }),
                detail: N.length
                  ? (0, Q.jsx)(`div`, { className: `space-y-1`, children: N.map(xn) })
                  : P
                    ? `Checking connections…`
                    : F
                      ? `Connected or available locally on each listed machine`
                      : `Test the connection to check access from each machine`,
              },
            ]
          : j.filter(bn).map(yn);
      return (0, Q.jsxs)(
        `div`,
        {
          className: `flex items-center gap-2 border-t border-border/50 py-2.5`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `min-w-0 flex-1`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex min-w-0 items-center gap-2`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `truncate text-sm font-medium`,
                      children: t.label,
                    }),
                    R.map(vn),
                  ],
                }),
                (0, Q.jsx)(`p`, {
                  className: `truncate text-xs text-muted-foreground`,
                  children: t.target,
                }),
                _.filter(_n).map((e) =>
                  (0, Q.jsxs)(
                    `p`,
                    {
                      role: `status`,
                      className: `mt-1 text-xs text-warning`,
                      children: [
                        h ? `${e.label}: ` : ``,
                        e.status?.detail ??
                          `The Android device list may be incomplete. Refresh devices to try again.`,
                      ],
                    },
                    e.environmentId,
                  ),
                ),
                h
                  ? (0, Q.jsxs)(Ye, {
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `min-w-0 text-xs [--inline-button-white-space:normal]`,
                          children: (0, Q.jsxs)(Je, {
                            "aria-label": `${t.label} machine details`,
                            render: (0, Q.jsx)(D, { tone: `muted` }),
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `line-clamp-1 break-all text-left`,
                                children: On(_.map(gn)),
                              }),
                              (0, Q.jsx)(i, { className: `size-3 shrink-0` }),
                            ],
                          }),
                        }),
                        (0, Q.jsx)(qe, {
                          children: (0, Q.jsx)(`div`, {
                            className: `mt-2 space-y-2`,
                            children: _.map(hn),
                          }),
                        }),
                      ],
                    })
                  : y.versions,
                !h && w?.status === `local`
                  ? (0, Q.jsx)(`p`, {
                      className: `mt-1 text-xs text-muted-foreground`,
                      children: `Already available locally`,
                    })
                  : null,
                !h && O
                  ? (0, Q.jsx)(`div`, {
                      className: `mt-1`,
                      role: `status`,
                      children: (0, Q.jsxs)(`details`, {
                        className: `text-xs text-destructive`,
                        children: [
                          (0, Q.jsx)(`summary`, { children: `Connection failed` }),
                          (0, Q.jsx)(`p`, {
                            className: `mt-1 whitespace-pre-wrap break-words`,
                            children: O,
                          }),
                        ],
                      }),
                    })
                  : null,
                h ? null : _.map(mn),
              ],
            }),
            !h && M
              ? (0, Q.jsxs)(`span`, {
                  role: `status`,
                  className: `inline-flex items-center gap-1.5 text-xs text-muted-foreground`,
                  children: [(0, Q.jsx)(W, { size: `xs` }), M],
                })
              : null,
            (0, Q.jsxs)(A, {
              children: [
                (0, Q.jsx)(ce, {
                  render: (0, Q.jsx)(b, {
                    size: `icon-sm`,
                    variant: `ghost-muted`,
                    disabled: s,
                    "aria-label": t.label + ` options`,
                  }),
                  children: (0, Q.jsx)(d, {}),
                }),
                (0, Q.jsxs)(ie, {
                  align: `end`,
                  children: [
                    (0, Q.jsx)(q, { onClick: () => u(t), children: `Edit` }),
                    (0, Q.jsx)(q, {
                      variant: `destructive`,
                      onClick: () => f(t),
                      children: `Remove`,
                    }),
                    h
                      ? I.map((e) =>
                          (0, Q.jsxs)(
                            q,
                            {
                              disabled: T !== null,
                              onClick: () => k(e.environmentId, e.host.id, e.environmentId),
                              children: [
                                T === e.environmentId ? `Retrying` : `Retry`,
                                ` from`,
                                ` `,
                                e.label,
                                e.address ? ` (${e.address})` : null,
                              ],
                            },
                            e.environmentId,
                          ),
                        )
                      : null,
                  ],
                }),
              ],
            }),
            (0, Q.jsx)(b, {
              size: `sm`,
              variant: `outline`,
              disabled: s || (L ? T !== null : h ? P : M !== null),
              onClick: () => {
                L ? k(x, t.id) : m(t);
              },
              children: L ? (T === t.id ? `Retrying…` : `Retry`) : `Test connection`,
            }),
          ],
        },
        t.id,
      );
    }),
    F;
  return (
    t[11] !== N || t[12] !== P
      ? ((F = (0, Q.jsxs)(Q.Fragment, { children: [N, P] })), (t[11] = N), (t[12] = P), (t[13] = F))
      : (F = t[13]),
    F
  );
}
function mn(e) {
  return e.state
    ? (0, Q.jsx)(
        tt,
        { className: `mt-1`, hosts: [e.host], hostStatuses: e.state.hostStatuses },
        e.environmentId,
      )
    : null;
}
function hn(e) {
  return (0, Q.jsxs)(
    `div`,
    {
      children: [
        (0, Q.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.label }),
        e.address
          ? (0, Q.jsx)(`p`, {
              className: `truncate text-xs text-muted-foreground`,
              children: e.address,
            })
          : null,
        e.error
          ? (0, Q.jsx)(`p`, {
              role: `status`,
              className: `text-xs text-destructive`,
              children: e.error,
            })
          : null,
        e.state ? (0, Q.jsx)(tt, { hosts: [e.host], hostStatuses: e.state.hostStatuses }) : null,
        e.versions,
        e.check?.status === `local`
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Already available locally`,
            })
          : (0, Q.jsx)(Jt, {
              platforms:
                (e.check?.status === `connected` ? e.check.platforms : e.summary?.platforms) ?? [],
            }),
      ],
    },
    e.environmentId,
  );
}
function gn(e) {
  return e.name;
}
function _n(e) {
  return e.status?.status === `ready` && e.status.androidDiscoveryIncomplete;
}
function vn(e) {
  return (0, Q.jsxs)(
    v,
    {
      children: [
        (0, Q.jsx)(I, {
          render: (0, Q.jsx)(`span`, {
            tabIndex: 0,
            role: `img`,
            "aria-label": e.label,
            className: e.warning ? `shrink-0 text-warning` : `shrink-0 text-muted-foreground`,
          }),
          children: e.icon,
        }),
        (0, Q.jsx)(F, { children: `detail` in e ? e.detail : e.label }),
      ],
    },
    e.key,
  );
}
function yn(e) {
  return {
    key: e.platform,
    label: e.platform === `ios` ? `iOS available` : `Android available`,
    warning: !1,
    icon:
      e.platform === `ios`
        ? (0, Q.jsx)(ct, { className: `size-3.5 -translate-y-px` })
        : (0, Q.jsx)(lt, { className: `size-3.5` }),
  };
}
function bn(e) {
  return e.available;
}
function xn(e) {
  return (0, Q.jsxs)(
    `p`,
    { children: [e.name, `: `, e.error || `Connection failed`] },
    e.environmentId,
  );
}
function Sn(e) {
  return (
    e.status?.status === `failed` && e.state?.supportsHostRetry && e.state.hostStatus !== `disabled`
  );
}
function Cn(e) {
  return (
    e.check?.status === `connected` || e.check?.status === `local` || e.status?.status === `ready`
  );
}
function wn(e) {
  return (
    e.check?.status === `pending` ||
    e.status?.status === `installing` ||
    e.status?.status === `starting`
  );
}
function Tn(e) {
  return (
    e.check?.status === `failed` || (e.check?.status !== `local` && e.status?.status === `failed`)
  );
}
function En(e) {
  return e.hosts.map((t) => ({
    host: t,
    members: [{ environmentId: e.environmentId, label: e.label, host: t }],
  }));
}
function Dn(e) {
  let { environmentId: t } = e;
  return t;
}
function On(e) {
  return `${e.slice(0, 2).join(`, `)}${e.length > 2 ? ` +${e.length - 2}` : ``}`;
}
var kn = U(O),
  An = (e) => ({
    kind: `eas`,
    id: e,
    label: `EAS Simulator`,
    accessToken: ``,
    maxSessionMinutes: 30,
    idleMinutes: 10,
    maxConcurrentSessions: 2,
  });
function jn(e, t, n) {
  return n
    ? e.filter((e) => e.id !== t.id)
    : e.some((e) => e.id === t.id)
      ? e.map((e) => (e.id === t.id ? t : e))
      : [...e, t];
}
function Mn(e) {
  return `Up to ${e.maxConcurrentSessions === 1 ? `1 session` : `${e.maxConcurrentSessions} sessions`} at once, each stopped after ${e.maxSessionMinutes} min or ${e.idleMinutes} idle min`;
}
var Nn = `thread-project`,
  Pn = {
    settings: `the access token saved here`,
    env: `EXPO_TOKEN on the server`,
    "eas-login": `the server's eas login`,
  },
  Fn = (e) => {
    let t = pe(e);
    return t instanceof Error ? t.message : String(t);
  };
function In(e) {
  let t = (0, Z.c)(24),
    { scope: n, connectedEnvironments: r } = Lt(),
    i = je(e.environmentId, T),
    a = n.kind === `project` || n.kind === `checkout`,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { reportFailure: !1 }), (t[0] = o))
    : (o = t[0]);
  let s = Ie(Ae.updateSettings, o),
    c;
  t[1] === e.environmentId
    ? (c = t[2])
    : ((c = (t) => t.environmentId === e.environmentId), (t[1] = e.environmentId), (t[2] = c));
  let l = r.find(c)?.serverConfig?.settings.easDeviceHosts ?? [],
    [d, f] = (0, $.useState)(null),
    [p, m] = (0, $.useState)(!1),
    g = !i || a || p || !e.environmentId,
    _ = async (t, n) => {
      if (!e.environmentId || !Ne(e.environmentId, `settings:write`)) return;
      m(!0);
      let r = await s({
        environmentId: e.environmentId,
        input: { patch: { easDeviceHosts: jn(l, t, n) } },
      });
      (m(!1),
        r._tag === `Success`
          ? f(null)
          : Re.add({
              type: `error`,
              title: n ? `EAS host not removed` : `EAS host not saved`,
              description: Fn(r.cause),
            }));
    },
    v = At,
    y;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = [`easDeviceHosts`]), (t[3] = y))
    : (y = t[3]);
  let x = g || d !== null,
    S;
  t[4] === f ? (S = t[5]) : ((S = () => f({ host: An(oe()), isNew: !0 })), (t[4] = f), (t[5] = S));
  let C;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(h, { className: `size-3.5` })), (t[6] = C))
    : (C = t[6]);
  let w;
  t[7] !== x || t[8] !== S
    ? ((w = (0, Q.jsxs)(b, {
        size: `sm`,
        variant: `outline`,
        disabled: x,
        onClick: S,
        children: [C, ` Add EAS host`],
      })),
      (t[7] = x),
      (t[8] = S),
      (t[9] = w))
    : (w = t[9]);
  let E =
      l.length === 0
        ? (0, Q.jsx)(`p`, { className: `text-sm text-muted-foreground`, children: `No EAS hosts.` })
        : (0, Q.jsx)(`ul`, {
            className: `divide-y divide-border/40`,
            children: l.map((e) =>
              (0, Q.jsxs)(
                `li`,
                {
                  className: `flex items-center justify-between gap-3 py-2.5 text-sm`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, Q.jsxs)(`p`, {
                          className: `flex items-center gap-1.5 truncate font-medium`,
                          children: [
                            (0, Q.jsx)(u, { className: `size-3.5 shrink-0` }),
                            ` `,
                            e.label,
                          ],
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `truncate text-xs text-muted-foreground`,
                          children: Mn(e),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex shrink-0 gap-1`,
                      children: [
                        (0, Q.jsx)(b, {
                          size: `sm`,
                          variant: `ghost`,
                          disabled: g,
                          onClick: () => f({ host: e, isNew: !1 }),
                          children: `Edit`,
                        }),
                        (0, Q.jsx)(b, {
                          size: `sm`,
                          variant: `ghost-destructive`,
                          disabled: g,
                          onClick: () => void _(e, !0),
                          children: `Remove`,
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
    D;
  t[10] !== p || t[11] !== d || t[12] !== e.environmentId || t[13] !== _ || t[14] !== f
    ? ((D =
        d && e.environmentId
          ? (0, Q.jsx)(
              Ln,
              {
                environmentId: e.environmentId,
                host: d.host,
                isNew: d.isNew,
                busy: p,
                onSave: (e) => void _(e, !1),
                onClose: () => f(null),
              },
              d.host.id,
            )
          : null),
      (t[10] = p),
      (t[11] = d),
      (t[12] = e.environmentId),
      (t[13] = _),
      (t[14] = f),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] !== E || t[17] !== D
    ? ((O = (0, Q.jsxs)(`div`, { className: `pt-3 pb-2`, children: [E, D] })),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O))
    : (O = t[18]);
  let k;
  return (
    t[19] !== v || t[20] !== w || t[21] !== O || t[22] !== y
      ? ((k = (0, Q.jsx)(v, {
          id: `eas-device-hosts`,
          title: `EAS Simulator`,
          serverScoped: !0,
          settingKeys: y,
          description: `Run iOS Simulators in Expo's cloud from this environment. Sessions bill the Expo account until they stop, so each host limits how many run and for how long. Editing or removing a host stops its running sessions.`,
          control: w,
          children: O,
        })),
        (t[19] = v),
        (t[20] = w),
        (t[21] = O),
        (t[22] = y),
        (t[23] = k))
      : (k = t[23]),
    k
  );
}
function Ln(e) {
  let t = (0, Z.c)(135),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let r = Ie(Ze.easAccount, n),
    [i, a] = (0, $.useState)(e.host),
    o = (0, $.useId)(),
    s;
  t[1] === e.host.accessToken
    ? (s = t[2])
    : ((s = e.host.accessToken ? { kind: `saved` } : { kind: `cleared` }),
      (t[1] = e.host.accessToken),
      (t[2] = s));
  let [c, l] = (0, $.useState)(s),
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { status: `checking` }), (t[3] = u))
    : (u = t[3]);
  let [d, f] = (0, $.useState)(u),
    p,
    m;
  t[4] !== i || t[5] !== e.host.accessToken || t[6] !== c.kind || t[7] !== c.value
    ? ((p = {
        ...i,
        label: i.label.trim(),
        accessToken: c.kind === `saved` ? e.host.accessToken : c.kind === `new` ? c.value : ``,
      }),
      (m = k(kn(p))),
      (t[4] = i),
      (t[5] = e.host.accessToken),
      (t[6] = c.kind),
      (t[7] = c.value),
      (t[8] = p),
      (t[9] = m))
    : ((p = t[8]), (m = t[9]));
  let h = m,
    _ = h
      ? null
      : i.maxSessionMinutes > 0 && i.idleMinutes >= i.maxSessionMinutes
        ? `Idle minutes must be smaller than session minutes.`
        : `Give the host a label and limits within the ranges shown.`,
    v;
  t[10] !== d.account || t[11] !== d.status
    ? ((v = d.status === `signed-in` ? d.account.apps : []),
      (t[10] = d.account),
      (t[11] = d.status),
      (t[12] = v))
    : (v = t[12]);
  let y = v,
    x = (0, $.useRef)(0),
    S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        ((x.current += 1), f({ status: `idle` }));
      }),
      (t[13] = S))
    : (S = t[13]);
  let C = S,
    w;
  t[14] !== r ||
  t[15] !== e.environmentId ||
  t[16] !== e.host.id ||
  t[17] !== e.isNew ||
  t[18] !== c.kind ||
  t[19] !== c.value
    ? ((w = async () => {
        let t = (x.current += 1),
          n = await r({
            environmentId: e.environmentId,
            input: {
              ...(c.kind === `saved` && !e.isNew ? { hostId: e.host.id } : {}),
              ...(c.kind === `new`
                ? { accessToken: c.value }
                : c.kind === `cleared`
                  ? { accessToken: `` }
                  : {}),
            },
          });
        t === x.current &&
          f(
            n._tag === `Success`
              ? { status: `signed-in`, account: n.value }
              : { status: `failed`, error: Fn(n.cause) },
          );
      }),
      (t[14] = r),
      (t[15] = e.environmentId),
      (t[16] = e.host.id),
      (t[17] = e.isNew),
      (t[18] = c.kind),
      (t[19] = c.value),
      (t[20] = w))
    : (w = t[20]);
  let T = w,
    E;
  t[21] === T
    ? (E = t[22])
    : ((E = () => {
        (f({ status: `checking` }), T());
      }),
      (t[21] = T),
      (t[22] = E));
  let D = E,
    O;
  t[23] === T ? (O = t[24]) : ((O = () => void T()), (t[23] = T), (t[24] = O));
  let A = (0, $.useEffectEvent)(O),
    j;
  t[25] === A
    ? (j = t[26])
    : ((j = () => {
        A();
      }),
      (t[25] = A),
      (t[26] = j));
  let M;
  (t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = []), (t[27] = M)) : (M = t[27]),
    (0, $.useEffect)(j, M));
  let N;
  t[28] !== i || t[29] !== e.busy
    ? ((N = (t, n, r) =>
        (0, Q.jsxs)(`label`, {
          className: `block space-y-1.5`,
          children: [
            (0, Q.jsx)(`span`, { children: n }),
            (0, Q.jsx)(ee, {
              type: `number`,
              min: 1,
              max: r,
              value: i[t],
              disabled: e.busy,
              onChange: (e) => {
                let n = Number(e.target.value);
                a((e) => ({ ...e, [t]: n }));
              },
            }),
          ],
        })),
      (t[28] = i),
      (t[29] = e.busy),
      (t[30] = N))
    : (N = t[30]);
  let P = N,
    F;
  t[31] === e
    ? (F = t[32])
    : ((F = (t) => {
        !t && !e.busy && e.onClose();
      }),
      (t[31] = e),
      (t[32] = F));
  let I = !e.busy,
    L;
  t[33] !== p || t[34] !== e || t[35] !== h
    ? ((L = (t) => {
        (t.preventDefault(), h && !e.busy && e.onSave(p));
      }),
      (t[33] = p),
      (t[34] = e),
      (t[35] = h),
      (t[36] = L))
    : (L = t[36]);
  let R = e.isNew ? `Add EAS host` : `Edit EAS host`,
    z;
  t[37] === R ? (z = t[38]) : ((z = (0, Q.jsx)(Ke, { children: R })), (t[37] = R), (t[38] = z));
  let B;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(ze, {
        children: `The environment's server signs in to Expo and starts the sessions. Without a token here it uses EXPO_TOKEN, then its eas login.`,
      })),
      (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] === z
    ? (V = t[41])
    : ((V = (0, Q.jsxs)(Ge, { children: [z, B] })), (t[40] = z), (t[41] = V));
  let te;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(`span`, { children: `Name` })), (t[42] = te))
    : (te = t[42]);
  let H;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        let t = e.target.value;
        a((e) => ({ ...e, label: t }));
      }),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] !== i.label || t[45] !== e.busy
    ? ((U = (0, Q.jsxs)(`label`, {
        className: `block space-y-1.5 text-sm`,
        children: [
          te,
          (0, Q.jsx)(ee, {
            autoFocus: !0,
            required: !0,
            value: i.label,
            disabled: e.busy,
            onChange: H,
          }),
        ],
      })),
      (t[44] = i.label),
      (t[45] = e.busy),
      (t[46] = U))
    : (U = t[46]);
  let ne;
  t[47] === o
    ? (ne = t[48])
    : ((ne = (0, Q.jsx)(`label`, {
        htmlFor: o,
        className: `block`,
        children: `Expo access token`,
      })),
      (t[47] = o),
      (t[48] = ne));
  let re = c.kind === `saved`,
    ie = c.kind === `new` ? c.value : ``,
    ae;
  t[49] === e.host.accessToken
    ? (ae = t[50])
    : ((ae = (t) => {
        let n = t.target.value;
        (l(
          n
            ? { kind: `new`, value: n }
            : e.host.accessToken
              ? { kind: `saved` }
              : { kind: `cleared` },
        ),
          C());
      }),
      (t[49] = e.host.accessToken),
      (t[50] = ae));
  let G;
  t[51] !== e.busy || t[52] !== re || t[53] !== ie || t[54] !== ae || t[55] !== o
    ? ((G = (0, Q.jsx)(Ht, {
        id: o,
        className: `min-w-0 flex-1`,
        configured: re,
        value: ie,
        disabled: e.busy,
        placeholder: `Optional`,
        onChange: ae,
      })),
      (t[51] = e.busy),
      (t[52] = re),
      (t[53] = ie),
      (t[54] = ae),
      (t[55] = o),
      (t[56] = G))
    : (G = t[56]);
  let K;
  t[57] === c.kind
    ? (K = t[58])
    : ((K =
        c.kind === `cleared`
          ? null
          : (0, Q.jsx)(b, {
              type: `button`,
              size: `icon-sm`,
              variant: `ghost-destructive`,
              "aria-label": `Clear access token`,
              onClick: () => {
                (l({ kind: `cleared` }), C());
              },
              children: (0, Q.jsx)(g, { className: `size-3.5` }),
            })),
      (t[57] = c.kind),
      (t[58] = K));
  let oe;
  t[59] !== G || t[60] !== K
    ? ((oe = (0, Q.jsxs)(`div`, { className: `flex items-center gap-2`, children: [G, K] })),
      (t[59] = G),
      (t[60] = K),
      (t[61] = oe))
    : (oe = t[61]);
  let se;
  t[62] !== ne || t[63] !== oe
    ? ((se = (0, Q.jsxs)(`div`, { className: `space-y-1.5 text-sm`, children: [ne, oe] })),
      (t[62] = ne),
      (t[63] = oe),
      (t[64] = se))
    : (se = t[64]);
  let ce =
      d.status === `signed-in`
        ? `Signed in as ${d.account.signedInAs} with ${Pn[d.account.credentialSource]}.`
        : d.status === `failed`
          ? d.error
          : d.status === `checking`
            ? `Checking the Expo account…`
            : `Check the Expo account before choosing a project.`,
    q;
  t[65] === ce
    ? (q = t[66])
    : ((q = (0, Q.jsx)(`p`, {
        role: `status`,
        className: `min-w-0 text-xs text-muted-foreground`,
        children: ce,
      })),
      (t[65] = ce),
      (t[66] = q));
  let le = e.busy || d.status === `checking`,
    ue;
  t[67] === D ? (ue = t[68]) : ((ue = () => void D()), (t[67] = D), (t[68] = ue));
  let de;
  t[69] === d.status
    ? (de = t[70])
    : ((de = d.status === `checking` ? (0, Q.jsx)(W, { size: `xs` }) : null),
      (t[69] = d.status),
      (t[70] = de));
  let fe;
  t[71] !== le || t[72] !== ue || t[73] !== de
    ? ((fe = (0, Q.jsxs)(b, {
        type: `button`,
        size: `sm`,
        variant: `outline`,
        disabled: le,
        onClick: ue,
        children: [de, ` Check account`],
      })),
      (t[71] = le),
      (t[72] = ue),
      (t[73] = de),
      (t[74] = fe))
    : (fe = t[74]);
  let pe;
  t[75] !== q || t[76] !== fe
    ? ((pe = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 rounded-lg border border-border/60 px-3 py-2.5`,
        children: [q, fe],
      })),
      (t[75] = q),
      (t[76] = fe),
      (t[77] = pe))
    : (pe = t[77]);
  let me;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(`span`, { children: `EAS project` })), (t[78] = me))
    : (me = t[78]);
  let he = i.appId ?? Nn,
    ge = e.busy,
    _e;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (e) => {
        typeof e == `string` &&
          a((t) => {
            let { appId: n, ...r } = t;
            return e === Nn ? r : { ...r, appId: e };
          });
      }),
      (t[79] = _e))
    : (_e = t[79]);
  let J;
  t[80] === y
    ? (J = t[81])
    : ((J = (0, Q.jsx)(Se, {
        size: `sm`,
        "aria-label": `EAS project`,
        children: (0, Q.jsx)(ve, {
          children: (e) =>
            e === Nn ? `From the thread's project` : (y.find((t) => t.id === e)?.fullName ?? e),
        }),
      })),
      (t[80] = y),
      (t[81] = J));
  let ye;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, Q.jsx)(Y, { value: Nn, children: `From the thread's project` })), (t[82] = ye))
    : (ye = t[82]);
  let xe;
  t[83] !== y || t[84] !== i.appId
    ? ((xe =
        i.appId && !y.some((e) => e.id === i.appId)
          ? (0, Q.jsx)(Y, { value: i.appId, children: i.appId })
          : null),
      (t[83] = y),
      (t[84] = i.appId),
      (t[85] = xe))
    : (xe = t[85]);
  let we;
  t[86] === y ? (we = t[87]) : ((we = y.map(Rn)), (t[86] = y), (t[87] = we));
  let Te;
  t[88] !== xe || t[89] !== we
    ? ((Te = (0, Q.jsxs)(be, { children: [ye, xe, we] })), (t[88] = xe), (t[89] = we), (t[90] = Te))
    : (Te = t[90]);
  let X;
  t[91] !== e.busy || t[92] !== he || t[93] !== J || t[94] !== Te
    ? ((X = (0, Q.jsxs)(Ce, { value: he, disabled: ge, onValueChange: _e, children: [J, Te] })),
      (t[91] = e.busy),
      (t[92] = he),
      (t[93] = J),
      (t[94] = Te),
      (t[95] = X))
    : (X = t[95]);
  let Ee;
  t[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Sessions bill the project's Expo account. "From the thread's project" reads extra.eas.projectId from the project's app config.`,
      })),
      (t[96] = Ee))
    : (Ee = t[96]);
  let De;
  t[97] === X
    ? (De = t[98])
    : ((De = (0, Q.jsxs)(`div`, { className: `space-y-1.5 text-sm`, children: [me, X, Ee] })),
      (t[97] = X),
      (t[98] = De));
  let Oe;
  t[99] === P
    ? (Oe = t[100])
    : ((Oe = (0, Q.jsxs)(`div`, {
        className: `grid grid-cols-3 gap-3 text-sm`,
        children: [
          P(`maxConcurrentSessions`, `Sessions at once`, 20),
          P(`maxSessionMinutes`, `Session minutes`, 115),
          P(`idleMinutes`, `Idle minutes`, 60),
        ],
      })),
      (t[99] = P),
      (t[100] = Oe));
  let ke = e.isNew ? null : ` Saving restarts this host, which stops its running sessions.`,
    Ae;
  t[101] === ke
    ? (Ae = t[102])
    : ((Ae = (0, Q.jsxs)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: [
          `Expo allows sessions of up to 40 minutes on free accounts and 115 on paid ones, and ends one after the idle minutes without activity, so idle minutes must be smaller than session minutes.`,
          ke,
        ],
      })),
      (t[101] = ke),
      (t[102] = Ae));
  let je;
  t[103] === _
    ? (je = t[104])
    : ((je =
        _ === null
          ? null
          : (0, Q.jsx)(`p`, { className: `text-xs text-destructive`, role: `alert`, children: _ })),
      (t[103] = _),
      (t[104] = je));
  let Me;
  t[105] !== U ||
  t[106] !== se ||
  t[107] !== pe ||
  t[108] !== De ||
  t[109] !== Oe ||
  t[110] !== Ae ||
  t[111] !== je
    ? ((Me = (0, Q.jsxs)(Be, { children: [U, se, pe, De, Oe, Ae, je] })),
      (t[105] = U),
      (t[106] = se),
      (t[107] = pe),
      (t[108] = De),
      (t[109] = Oe),
      (t[110] = Ae),
      (t[111] = je),
      (t[112] = Me))
    : (Me = t[112]);
  let Ne;
  t[113] !== e.busy || t[114] !== e.onClose
    ? ((Ne = (0, Q.jsx)(b, {
        type: `button`,
        variant: `ghost`,
        disabled: e.busy,
        onClick: e.onClose,
        children: `Cancel`,
      })),
      (t[113] = e.busy),
      (t[114] = e.onClose),
      (t[115] = Ne))
    : (Ne = t[115]);
  let Pe = e.busy || !h,
    Fe;
  t[116] === e.busy
    ? (Fe = t[117])
    : ((Fe = e.busy ? (0, Q.jsx)(W, { size: `xs` }) : null), (t[116] = e.busy), (t[117] = Fe));
  let Le;
  t[118] !== Pe || t[119] !== Fe
    ? ((Le = (0, Q.jsxs)(b, { type: `submit`, disabled: Pe, children: [Fe, ` Save host`] })),
      (t[118] = Pe),
      (t[119] = Fe),
      (t[120] = Le))
    : (Le = t[120]);
  let Re;
  t[121] !== Ne || t[122] !== Le
    ? ((Re = (0, Q.jsxs)(We, { children: [Ne, Le] })), (t[121] = Ne), (t[122] = Le), (t[123] = Re))
    : (Re = t[123]);
  let Ve;
  t[124] !== L || t[125] !== V || t[126] !== Me || t[127] !== Re
    ? ((Ve = (0, Q.jsxs)(`form`, {
        className: `flex min-h-0 flex-col`,
        onSubmit: L,
        children: [V, Me, Re],
      })),
      (t[124] = L),
      (t[125] = V),
      (t[126] = Me),
      (t[127] = Re),
      (t[128] = Ve))
    : (Ve = t[128]);
  let qe;
  t[129] !== I || t[130] !== Ve
    ? ((qe = (0, Q.jsx)(He, { showCloseButton: I, children: Ve })),
      (t[129] = I),
      (t[130] = Ve),
      (t[131] = qe))
    : (qe = t[131]);
  let Je;
  return (
    t[132] !== F || t[133] !== qe
      ? ((Je = (0, Q.jsx)(Ue, { open: !0, onOpenChange: F, children: qe })),
        (t[132] = F),
        (t[133] = qe),
        (t[134] = Je))
      : (Je = t[134]),
    Je
  );
}
function Rn(e) {
  return (0, Q.jsx)(Y, { value: e.id, children: e.fullName }, e.id);
}
function zn(e, t) {
  if (e) return { kind: `new` };
  let n = t[0];
  return n ? { kind: `existing`, profileId: n.id } : { kind: `new` };
}
function Bn(e, t, n) {
  if (e.kind === `new`) return { kind: `new`, profileId: t };
  let r = n.find((t) => t.id === e.profileId);
  if (r !== void 0) return { kind: `existing`, profileId: e.profileId, name: r.name };
}
function Vn(e) {
  return e.step !== `importing`;
}
function Hn(e) {
  return e.unavailable === `browserRunning`
    ? { step: `quit` }
    : e.unavailable === `needsFullDiskAccess`
      ? { step: `fullDiskAccess`, resume: `configure` }
      : e.unavailable === void 0
        ? e.profiles.length === 0
          ? { step: `blocked`, reason: `unknownSourceProfile` }
          : { step: `configure` }
        : { step: `blocked`, reason: e.unavailable };
}
function Un(e) {
  return e.kind === `imported`
    ? {
        step: `done`,
        imported: e.imported,
        skipped: e.skipped,
        skippedDomains: e.skippedDomains,
        targetName: e.targetName,
      }
    : e.reason === `browserRunning`
      ? { step: `quit` }
      : e.reason === `needsFullDiskAccess`
        ? { step: `fullDiskAccess`, resume: `import`, checked: !0 }
        : { step: `blocked`, reason: e.reason };
}
function Wn(e) {
  return e === void 0 ? { step: `blocked`, reason: `unknownSource` } : Hn(e);
}
function Gn(e) {
  let t = Wn(e);
  return t.step === `fullDiskAccess` ? { ...t, checked: !0 } : t;
}
function Kn(e, t) {
  return t.profiles.some((t) => t.directory === e) ? e : (t.profiles[0]?.directory ?? ``);
}
function qn(e) {
  switch (e) {
    case `needsKeychainApproval`:
    case `keychainItemMissing`:
    case `keychainUnavailable`:
    case `readFailed`:
    case `sessionUnavailable`:
    case `profileNotSaved`:
      return !0;
    default:
      return !1;
  }
}
function Jn(e) {
  return e.length === 0
    ? ``
    : e.length === 1
      ? e[0]
      : e.length <= 3
        ? `${e.slice(0, -1).join(`, `)} and ${e.at(-1)}`
        : `${e.slice(0, 3).join(`, `)} and ${e.length - 3} more`;
}
function Yn(e) {
  let t = (0, Z.c)(46),
    {
      source: n,
      destinationEnvironmentName: r,
      targetProfiles: i,
      canCreateProfile: a,
      onImport: o,
      onRefreshSource: s,
      onOpenFullDiskAccessSettings: c,
      onCheckFullDiskAccess: l,
      onClose: u,
    } = e,
    [d, f] = (0, $.useState)(n),
    p;
  t[0] === n ? (p = t[1]) : ((p = () => Hn(n)), (t[0] = n), (t[1] = p));
  let [m, h] = (0, $.useState)(p),
    g;
  t[2] === n.profiles[0]?.directory
    ? (g = t[3])
    : ((g = () => n.profiles[0]?.directory ?? ``), (t[2] = n.profiles[0]?.directory), (t[3] = g));
  let [_, v] = (0, $.useState)(g),
    y;
  t[4] !== a || t[5] !== i
    ? ((y = () => zn(a, i)), (t[4] = a), (t[5] = i), (t[6] = y))
    : (y = t[6]);
  let [b, x] = (0, $.useState)(y),
    [S, C] = (0, $.useState)(),
    w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = oe()), (t[7] = w)) : (w = t[7]);
  let T = (0, $.useRef)(`profile-${w}`),
    E = (0, $.useRef)(!1),
    D;
  t[8] !== o || t[9] !== _ || t[10] !== b || t[11] !== i
    ? ((D = () => {
        if (E.current) return;
        let e = Bn(b, T.current, i);
        e === void 0
          ? (C(`That profile is no longer available. Choose where to import these cookies.`),
            h({ step: `configure` }))
          : (C(void 0),
            (E.current = !0),
            h({ step: `importing` }),
            o({ sourceProfileDirectory: _, target: e })
              .then((e) => h(Un(e)))
              .catch(() => h({ step: `blocked`, reason: `readFailed` }))
              .finally(() => {
                E.current = !1;
              }));
      }),
      (t[8] = o),
      (t[9] = _),
      (t[10] = b),
      (t[11] = i),
      (t[12] = D))
    : (D = t[12]);
  let O = D,
    k;
  t[13] === s
    ? (k = t[14])
    : ((k = (e, t) => {
        (h({ step: `checking`, check: e }),
          s()
            .then((e) => {
              (e && (f(e), v((t) => Kn(t, e))), h(t(e)));
            })
            .catch(() => h({ step: `blocked`, reason: `readFailed` })));
      }),
      (t[13] = s),
      (t[14] = k));
  let A = k,
    j;
  t[15] === A ? (j = t[16]) : ((j = () => A(`browser`, Wn)), (t[15] = A), (t[16] = j));
  let M = j,
    N;
  t[17] === A ? (N = t[18]) : ((N = () => A(`fullDiskAccess`, Gn)), (t[17] = A), (t[18] = N));
  let P = N,
    F;
  t[19] !== u || t[20] !== m
    ? ((F = (e) => (e || !Vn(m) ? void 0 : u())), (t[19] = u), (t[20] = m), (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] === m ? (I = t[23]) : ((I = Vn(m)), (t[22] = m), (t[23] = I));
  let L;
  t[24] !== a ||
  t[25] !== r ||
  t[26] !== l ||
  t[27] !== u ||
  t[28] !== c ||
  t[29] !== s ||
  t[30] !== M ||
  t[31] !== P ||
  t[32] !== O ||
  t[33] !== d ||
  t[34] !== _ ||
  t[35] !== m ||
  t[36] !== b ||
  t[37] !== S ||
  t[38] !== i
    ? ((L =
        m.step === `quit`
          ? (0, Q.jsx)(Xn, { source: d, onCancel: u, onRechecked: M })
          : m.step === `fullDiskAccess`
            ? (0, Q.jsx)($n, {
                source: d,
                onCancel: u,
                onOpenSettings: c,
                onCheck:
                  l ??
                  (async () => {
                    let e = await s();
                    return e !== void 0 && e.unavailable === void 0;
                  }),
                onGranted: m.resume === `import` ? O : P,
                stillRequired: m.checked === !0,
              })
            : m.step === `importing`
              ? (0, Q.jsx)(nr, {})
              : m.step === `checking`
                ? (0, Q.jsx)(rr, { sourceName: d.name, check: m.check })
                : m.step === `done`
                  ? (0, Q.jsx)(ir, { ...m, destinationEnvironmentName: r, onClose: u })
                  : m.step === `blocked`
                    ? (0, Q.jsx)(ar, {
                        source: d,
                        reason: m.reason,
                        onClose: u,
                        onRetry: qn(m.reason) ? O : void 0,
                      })
                    : (0, Q.jsx)(er, {
                        source: d,
                        destinationEnvironmentName: r,
                        targetProfiles: i,
                        canCreateProfile: a,
                        sourceProfileDirectory: _,
                        onSourceProfileChange: v,
                        target: b,
                        onTargetChange: (e) => {
                          (x(e), C(void 0));
                        },
                        targetError: S,
                        onCancel: u,
                        onImport: O,
                      })),
      (t[24] = a),
      (t[25] = r),
      (t[26] = l),
      (t[27] = u),
      (t[28] = c),
      (t[29] = s),
      (t[30] = M),
      (t[31] = P),
      (t[32] = O),
      (t[33] = d),
      (t[34] = _),
      (t[35] = m),
      (t[36] = b),
      (t[37] = S),
      (t[38] = i),
      (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== I || t[41] !== L
    ? ((R = (0, Q.jsx)(He, { className: `max-w-lg`, showCloseButton: I, children: L })),
      (t[40] = I),
      (t[41] = L),
      (t[42] = R))
    : (R = t[42]);
  let z;
  return (
    t[43] !== R || t[44] !== F
      ? ((z = (0, Q.jsx)(Ue, { open: !0, onOpenChange: F, children: R })),
        (t[43] = R),
        (t[44] = F),
        (t[45] = z))
      : (z = t[45]),
    z
  );
}
function Xn(e) {
  let t = (0, Z.c)(12),
    { source: n, onCancel: r, onRechecked: i } = e,
    a;
  t[0] === n.name
    ? (a = t[1])
    : ((a = (0, Q.jsxs)(Ge, {
        children: [
          (0, Q.jsxs)(Ke, { children: [`Quit `, n.name, ` to import`] }),
          (0, Q.jsxs)(ze, {
            children: [
              n.name,
              ` is open, so its cookies can’t be read yet. Quit it, then continue.`,
            ],
          }),
        ],
      })),
      (t[0] = n.name),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, Q.jsx)(b, { variant: `outline`, onClick: r, children: `Cancel` })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = (0, Q.jsx)(b, { onClick: i, children: `I’ve quit it` })), (t[4] = i), (t[5] = s));
  let c;
  t[6] !== o || t[7] !== s
    ? ((c = (0, Q.jsxs)(We, { children: [o, s] })), (t[6] = o), (t[7] = s), (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== a || t[10] !== c
      ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [a, c] })), (t[9] = a), (t[10] = c), (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Zn(e) {
  if (e !== void 0)
    return e === 0 ? `no cookies` : `${e.toLocaleString()} ${e === 1 ? `cookie` : `cookies`}`;
}
function Qn(e) {
  return `${e.toLocaleString()} ${e === 1 ? `cookie` : `cookies`}`;
}
function $n(e) {
  let t = (0, Z.c)(43),
    { source: n, onCancel: r, onOpenSettings: i, onGranted: a, stillRequired: o, onCheck: s } = e,
    [c, l] = (0, $.useState)(!1),
    [u, d] = (0, $.useState)(null),
    p;
  t[0] === s
    ? (p = t[1])
    : ((p = async () => ({ fullDiskAccess: await s() })), (t[0] = s), (t[1] = p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { fullDiskAccess: !1 }), (t[2] = m))
    : (m = t[2]);
  let h = Gt(p, m),
    g;
  t[3] !== i || t[4] !== c
    ? ((g = () => {
        c ||
          (l(!0),
          d(null),
          Promise.resolve()
            .then(i)
            .catch(() => d(`Could not open System Settings. Try Allow again.`))
            .finally(() => l(!1)));
      }),
      (t[3] = i),
      (t[4] = c),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] === n.name
    ? (v = t[7])
    : ((v = (0, Q.jsxs)(Ge, {
        children: [
          (0, Q.jsxs)(Ke, { children: [`Let T3 Code read `, n.name, `’s cookies`] }),
          (0, Q.jsxs)(ze, {
            children: [
              `To import cookies from `,
              n.name,
              `, T3 Code needs Full Disk Access. Turn it on in System Settings, then come back to finish the import. You can revoke it again once the import is done.`,
            ],
          }),
        ],
      })),
      (t[6] = n.name),
      (t[7] = v));
  let y;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(f, {
        className: `size-8 shrink-0 text-muted-foreground`,
        "aria-hidden": `true`,
      })),
      (t[8] = y))
    : (y = t[8]);
  let x = `Read ${n.name}'s cookies for this import.`,
    S;
  t[9] === _ ? (S = t[10]) : ((S = () => void _()), (t[9] = _), (t[10] = S));
  let C;
  t[11] !== h.status.fullDiskAccess || t[12] !== x || t[13] !== S
    ? ((C = [
        {
          id: `fullDiskAccess`,
          icon: y,
          title: `Full Disk Access`,
          description: x,
          granted: h.status.fullDiskAccess,
          onAllow: S,
        },
      ]),
      (t[11] = h.status.fullDiskAccess),
      (t[12] = x),
      (t[13] = S),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] !== c || t[16] !== C
    ? ((w = (0, Q.jsx)(Ut, { busy: c, permissions: C })), (t[15] = c), (t[16] = C), (t[17] = w))
    : (w = t[17]);
  let T;
  t[18] !== u || t[19] !== h.error
    ? ((T =
        u || h.error
          ? (0, Q.jsx)(`p`, {
              role: `status`,
              className: `mt-3 text-xs text-muted-foreground`,
              children: u ?? h.error,
            })
          : null),
      (t[18] = u),
      (t[19] = h.error),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== h || t[22] !== o
    ? ((E = h.isReady([`fullDiskAccess`])
        ? null
        : (0, Q.jsx)(`p`, {
            className: `mt-3 text-xs text-muted-foreground`,
            children: o
              ? `Access is still required. Quit and reopen T3 Code if you just allowed it, then retry the import.`
              : `If access doesn't update after you allow it, quit and reopen T3 Code, then retry the import.`,
          })),
      (t[21] = h),
      (t[22] = o),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== T || t[25] !== E || t[26] !== w
    ? ((D = (0, Q.jsxs)(Be, { children: [w, T, E] })),
      (t[24] = T),
      (t[25] = E),
      (t[26] = w),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] === r
    ? (O = t[29])
    : ((O = (0, Q.jsx)(b, { variant: `outline`, onClick: r, children: `Cancel` })),
      (t[28] = r),
      (t[29] = O));
  let k;
  t[30] === h ? (k = t[31]) : ((k = h.isReady([`fullDiskAccess`])), (t[30] = h), (t[31] = k));
  let A;
  t[32] !== a || t[33] !== c || t[34] !== k
    ? ((A = (0, Q.jsx)(Wt, { ready: k, busy: c, onClick: a, children: `Continue` })),
      (t[32] = a),
      (t[33] = c),
      (t[34] = k),
      (t[35] = A))
    : (A = t[35]);
  let j;
  t[36] !== O || t[37] !== A
    ? ((j = (0, Q.jsxs)(We, { children: [O, A] })), (t[36] = O), (t[37] = A), (t[38] = j))
    : (j = t[38]);
  let M;
  return (
    t[39] !== D || t[40] !== j || t[41] !== v
      ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [v, D, j] })),
        (t[39] = D),
        (t[40] = j),
        (t[41] = v),
        (t[42] = M))
      : (M = t[42]),
    M
  );
}
function er(e) {
  let t = (0, Z.c)(59),
    {
      source: n,
      destinationEnvironmentName: r,
      targetProfiles: i,
      canCreateProfile: a,
      sourceProfileDirectory: c,
      onSourceProfileChange: l,
      target: u,
      targetError: d,
      onTargetChange: f,
      onCancel: p,
      onImport: m,
    } = e,
    h;
  t[0] !== u.kind || t[1] !== u.profileId || t[2] !== i
    ? ((h = u.kind === `existing` && !i.some((e) => e.id === u.profileId)),
      (t[0] = u.kind),
      (t[1] = u.profileId),
      (t[2] = i),
      (t[3] = h))
    : (h = t[3]);
  let g = h,
    _ = u.kind === `new` && !a,
    v =
      d ??
      (g
        ? `That profile is no longer available. Choose where to import these cookies.`
        : _
          ? `You've reached the profile limit. Choose an existing profile to import into.`
          : void 0),
    y;
  t[4] === n.name
    ? (y = t[5])
    : ((y = (0, Q.jsxs)(Ke, { children: [`Import from `, n.name] })), (t[4] = n.name), (t[5] = y));
  let x;
  t[6] === r
    ? (x = t[7])
    : ((x = (0, Q.jsxs)(ze, { children: [`Choose which cookies to import for `, r, `.`] })),
      (t[6] = r),
      (t[7] = x));
  let S;
  t[8] !== y || t[9] !== x
    ? ((S = (0, Q.jsxs)(Ge, { children: [y, x] })), (t[8] = y), (t[9] = x), (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(`p`, {
        className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
        children: `From`,
      })),
      (t[11] = C))
    : (C = t[11]);
  let w;
  if (t[12] !== l || t[13] !== n.profiles || t[14] !== c) {
    let e;
    (t[16] !== l || t[17] !== c
      ? ((e = (e) =>
          (0, Q.jsx)(
            tr,
            {
              selected: c === e.directory,
              title: e.name,
              subtitle: Zn(e.cookieCount),
              onSelect: () => l(e.directory),
            },
            e.directory,
          )),
        (t[16] = l),
        (t[17] = c),
        (t[18] = e))
      : (e = t[18]),
      (w = n.profiles.map(e)),
      (t[12] = l),
      (t[13] = n.profiles),
      (t[14] = c),
      (t[15] = w));
  } else w = t[15];
  let T;
  t[19] === w
    ? (T = t[20])
    : ((T = (0, Q.jsxs)(`section`, { className: `flex-1 space-y-2`, children: [C, w] })),
      (t[19] = w),
      (t[20] = T));
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center justify-center text-muted-foreground`,
        children: [
          (0, Q.jsx)(o, { className: `size-4 sm:hidden` }),
          (0, Q.jsx)(s, { className: `hidden size-4 sm:block` }),
        ],
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(`p`, {
        className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
        children: `Into`,
      })),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== a || t[24] !== f || t[25] !== u.kind
    ? ((O = a
        ? (0, Q.jsx)(tr, {
            selected: u.kind === `new`,
            title: `New profile`,
            subtitle: `Created for these cookies`,
            onSelect: () => f({ kind: `new` }),
          })
        : null),
      (t[23] = a),
      (t[24] = f),
      (t[25] = u.kind),
      (t[26] = O))
    : (O = t[26]);
  let k;
  if (t[27] !== f || t[28] !== u.kind || t[29] !== u.profileId || t[30] !== i) {
    let e;
    (t[32] !== f || t[33] !== u.kind || t[34] !== u.profileId
      ? ((e = (e) =>
          (0, Q.jsx)(
            tr,
            {
              selected: u.kind === `existing` && u.profileId === e.id,
              title: e.name,
              subtitle: `Existing profile`,
              onSelect: () => f({ kind: `existing`, profileId: e.id }),
            },
            e.id,
          )),
        (t[32] = f),
        (t[33] = u.kind),
        (t[34] = u.profileId),
        (t[35] = e))
      : (e = t[35]),
      (k = i.map(e)),
      (t[27] = f),
      (t[28] = u.kind),
      (t[29] = u.profileId),
      (t[30] = i),
      (t[31] = k));
  } else k = t[31];
  let A;
  t[36] !== O || t[37] !== k
    ? ((A = (0, Q.jsxs)(`section`, { className: `flex-1 space-y-2`, children: [D, O, k] })),
      (t[36] = O),
      (t[37] = k),
      (t[38] = A))
    : (A = t[38]);
  let j;
  t[39] !== A || t[40] !== T
    ? ((j = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4`,
        children: [T, E, A],
      })),
      (t[39] = A),
      (t[40] = T),
      (t[41] = j))
    : (j = t[41]);
  let M;
  t[42] === v
    ? (M = t[43])
    : ((M = v
        ? (0, Q.jsx)(`p`, {
            role: `alert`,
            className: `mt-3 text-sm text-destructive`,
            children: v,
          })
        : null),
      (t[42] = v),
      (t[43] = M));
  let N;
  t[44] !== j || t[45] !== M
    ? ((N = (0, Q.jsxs)(Be, { children: [j, M] })), (t[44] = j), (t[45] = M), (t[46] = N))
    : (N = t[46]);
  let P;
  t[47] === p
    ? (P = t[48])
    : ((P = (0, Q.jsx)(b, { variant: `outline`, onClick: p, children: `Cancel` })),
      (t[47] = p),
      (t[48] = P));
  let F = c === `` || g || _,
    I;
  t[49] !== m || t[50] !== F
    ? ((I = (0, Q.jsx)(b, { disabled: F, onClick: m, children: `Import` })),
      (t[49] = m),
      (t[50] = F),
      (t[51] = I))
    : (I = t[51]);
  let L;
  t[52] !== P || t[53] !== I
    ? ((L = (0, Q.jsxs)(We, { children: [P, I] })), (t[52] = P), (t[53] = I), (t[54] = L))
    : (L = t[54]);
  let R;
  return (
    t[55] !== N || t[56] !== L || t[57] !== S
      ? ((R = (0, Q.jsxs)(Q.Fragment, { children: [S, N, L] })),
        (t[55] = N),
        (t[56] = L),
        (t[57] = S),
        (t[58] = R))
      : (R = t[58]),
    R
  );
}
function tr(e) {
  let t = (0, Z.c)(22),
    { selected: n, title: r, subtitle: i, onSelect: o } = e,
    s = n
      ? `border-primary bg-primary/8`
      : `border-border/60 hover:border-border hover:bg-muted/40`,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = ue(
        `flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 py-2 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
        s,
      )),
      (t[0] = s),
      (t[1] = c));
  let l;
  t[2] === r
    ? (l = t[3])
    : ((l = (0, Q.jsx)(`span`, {
        className: `block truncate text-sm font-medium text-foreground`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = l));
  let u;
  t[4] === i
    ? (u = t[5])
    : ((u = i
        ? (0, Q.jsx)(`span`, {
            className: `block truncate text-xs tabular-nums text-muted-foreground`,
            children: i,
          })
        : null),
      (t[4] = i),
      (t[5] = u));
  let d;
  t[6] !== l || t[7] !== u
    ? ((d = (0, Q.jsxs)(`span`, { className: `min-w-0`, children: [l, u] })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f = n ? `border-primary bg-primary text-primary-foreground` : `border-input`,
    p;
  t[9] === f
    ? (p = t[10])
    : ((p = ue(`grid size-4 shrink-0 place-items-center rounded-full border`, f)),
      (t[9] = f),
      (t[10] = p));
  let m;
  t[11] === n
    ? (m = t[12])
    : ((m = n ? (0, Q.jsx)(a, { className: `size-2.5` }) : null), (t[11] = n), (t[12] = m));
  let h;
  t[13] !== p || t[14] !== m
    ? ((h = (0, Q.jsx)(`span`, { className: p, children: m })),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== o || t[17] !== n || t[18] !== c || t[19] !== d || t[20] !== h
      ? ((g = (0, Q.jsxs)(`button`, {
          type: `button`,
          "aria-pressed": n,
          onClick: o,
          className: c,
          children: [d, h],
        })),
        (t[16] = o),
        (t[17] = n),
        (t[18] = c),
        (t[19] = d),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function nr() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Q.jsxs)(Ge, {
        children: [
          (0, Q.jsx)(Ke, { children: `Importing cookies` }),
          (0, Q.jsx)(ze, { children: `This may take a moment.` }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            t,
            (0, Q.jsx)(Be, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-3 py-2`,
                children: [
                  (0, Q.jsx)(W, { size: `md`, tone: `muted` }),
                  (0, Q.jsx)(`span`, {
                    className: `text-sm text-muted-foreground`,
                    children: `Importing…`,
                  }),
                ],
              }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function rr(e) {
  let t = (0, Z.c)(13),
    { sourceName: n, check: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, Q.jsxs)(Ke, { children: [`Checking `, n] })), (t[0] = n), (t[1] = i));
  let a =
      r === `fullDiskAccess`
        ? `Checking Full Disk Access.`
        : `Checking whether the browser has closed.`,
    o;
  t[2] === a ? (o = t[3]) : ((o = (0, Q.jsx)(ze, { children: a })), (t[2] = a), (t[3] = o));
  let s;
  t[4] !== i || t[5] !== o
    ? ((s = (0, Q.jsxs)(Ge, { children: [i, o] })), (t[4] = i), (t[5] = o), (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(W, { size: `md`, tone: `muted` })), (t[7] = c))
    : (c = t[7]);
  let l = r === `fullDiskAccess` ? `Checking access…` : `Checking…`,
    u;
  t[8] === l
    ? (u = t[9])
    : ((u = (0, Q.jsx)(Be, {
        children: (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-3 py-2`,
          children: [
            c,
            (0, Q.jsx)(`span`, { className: `text-sm text-muted-foreground`, children: l }),
          ],
        }),
      })),
      (t[8] = l),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== u
      ? ((d = (0, Q.jsxs)(Q.Fragment, { children: [s, u] })), (t[10] = s), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
function ir(e) {
  let t = (0, Z.c)(24),
    {
      imported: n,
      skipped: r,
      skippedDomains: i,
      targetName: a,
      destinationEnvironmentName: o,
      onClose: s,
    } = e,
    c;
  t[0] !== n || t[1] !== r
    ? ((c = n > 0 ? `Imported ${Qn(n)}` : r > 0 ? `Skipped ${Qn(r)}` : `No cookies found`),
      (t[0] = n),
      (t[1] = r),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === c ? (l = t[4]) : ((l = (0, Q.jsx)(Ke, { children: c })), (t[3] = c), (t[4] = l));
  let u;
  t[5] !== o || t[6] !== n || t[7] !== r || t[8] !== a
    ? ((u =
        n > 0
          ? `Added to ${a} for ${o}.${r > 0 ? ` ${Qn(r)} skipped.` : ``}`
          : r > 0
            ? `No cookies were imported for ${o}.`
            : `There were no cookies to import for ${o}.`),
      (t[5] = o),
      (t[6] = n),
      (t[7] = r),
      (t[8] = a),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === u ? (d = t[11]) : ((d = (0, Q.jsx)(ze, { children: u })), (t[10] = u), (t[11] = d));
  let f;
  t[12] !== l || t[13] !== d
    ? ((f = (0, Q.jsxs)(Ge, { children: [l, d] })), (t[12] = l), (t[13] = d), (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] === i
    ? (p = t[16])
    : ((p =
        i.length > 0
          ? (0, Q.jsxs)(Be, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-xs font-medium uppercase tracking-wide text-muted-foreground`,
                  children: `Skipped`,
                }),
                (0, Q.jsx)(`p`, { className: `mt-1 text-sm text-foreground`, children: Jn(i) }),
              ],
            })
          : null),
      (t[15] = i),
      (t[16] = p));
  let m;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(b, {})), (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] === s
    ? (h = t[19])
    : ((h = (0, Q.jsx)(We, {
        children: (0, Q.jsx)(Ve, { render: m, onClick: s, children: `Done` }),
      })),
      (t[18] = s),
      (t[19] = h));
  let g;
  return (
    t[20] !== f || t[21] !== p || t[22] !== h
      ? ((g = (0, Q.jsxs)(Q.Fragment, { children: [f, p, h] })),
        (t[20] = f),
        (t[21] = p),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
function ar(e) {
  let t = (0, Z.c)(17),
    { source: n, reason: r, onClose: i, onRetry: a } = e,
    o;
  t[0] === n.name
    ? (o = t[1])
    : ((o = (0, Q.jsxs)(Ke, { children: [`Couldn’t import from `, n.name] })),
      (t[0] = n.name),
      (t[1] = o));
  let s = N[r],
    c;
  t[2] === s ? (c = t[3]) : ((c = (0, Q.jsx)(ze, { children: s })), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== o || t[5] !== c
    ? ((l = (0, Q.jsxs)(Ge, { children: [o, c] })), (t[4] = o), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = (0, Q.jsx)(b, { variant: `outline`, onClick: i, children: `Close` })),
      (t[7] = i),
      (t[8] = u));
  let d;
  t[9] === a
    ? (d = t[10])
    : ((d = a ? (0, Q.jsx)(b, { onClick: a, children: `Try again` }) : null),
      (t[9] = a),
      (t[10] = d));
  let f;
  t[11] !== u || t[12] !== d
    ? ((f = (0, Q.jsxs)(We, { children: [u, d] })), (t[11] = u), (t[12] = d), (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== l || t[15] !== f
      ? ((p = (0, Q.jsxs)(Q.Fragment, { children: [l, f] })), (t[14] = l), (t[15] = f), (t[16] = p))
      : (p = t[16]),
    p
  );
}
var or = `fill`,
  sr = `responsive`;
async function cr(e, t, n, r) {
  let i = e === null ? [] : t,
    a = r?.environmentIds ?? [];
  if (i.length === 0 && a.length === 0)
    throw Error(`Browser profile data is not available to clear.`);
  await Promise.all([
    ...i.flatMap((t) => [e.clearCookies(t, n), e.clearCache(t, n)]),
    ...a.map((e) => r.clear(e, n)),
  ]);
}
function lr(e, t, n, r = 0) {
  return (e || r > 0) && t && n > 0;
}
var ur = { width: 1280, height: 800 },
  dr = { useGrouping: !1 },
  fr = { system: `System`, light: `Light`, dark: `Dark` },
  pr = (e) => `${Math.round(e * 100)}%`,
  mr = class extends Error {
    constructor() {
      (super(`Browser profile limit reached.`), (this.name = `ProfileLimitReachedError`));
    }
  },
  hr = (e) => {
    let t = String(e?.message ?? ``);
    return L.literals.find((e) => t.includes(`failed: ${e}.`)) ?? `readFailed`;
  };
async function gr(e, t, n, r) {
  try {
    let i = await e.importBrowserCookies({
      environmentId: n,
      sourceId: t.id,
      sourceProfileDirectory: r.sourceProfileDirectory,
      targetProfileId: r.target.profileId,
    });
    if (
      r.target.kind === `existing` &&
      !_(De().browserProfiles).some((e) => e.id === r.target.profileId)
    )
      return { kind: `blocked`, reason: `readFailed` };
    let a;
    if (r.target.kind === `new`) {
      if (i.imported > 0)
        try {
          a =
            (
              await Ee((e) => {
                if (e.browserProfiles.find((e) => e.id === r.target.profileId)) return e;
                if (e.browserProfiles.length >= 24) throw new mr();
                let n = new Set(_(e.browserProfiles).map((e) => e.name)),
                  i = t.name;
                for (let e = 2; n.has(i); e += 1) i = `${t.name} ${e}`;
                return {
                  ...e,
                  browserProfiles: [
                    ...e.browserProfiles,
                    { id: r.target.profileId, name: i, kind: `persistent` },
                  ],
                };
              })
            ).browserProfiles.find((e) => e.id === r.target.profileId)?.name ?? t.name;
        } catch (i) {
          await cr(e, [n], r.target.profileId).catch(() => void 0);
          let a = i instanceof mr ? `profileLimitReached` : `profileNotSaved`;
          throw Error(`Importing cookies from ${t.id} failed: ${a}.`, { cause: i });
        }
      else a = t.name;
    } else a = r.target.name;
    return {
      kind: `imported`,
      imported: i.imported,
      skipped: i.skipped,
      skippedDomains: i.skippedDomains,
      targetName: a,
    };
  } catch (e) {
    return { kind: `blocked`, reason: hr(e) };
  }
}
var _r = (e) =>
    e._tag === `fill`
      ? or
      : e._tag === `preset` && bt.some((t) => t.id === e.presetId)
        ? e.presetId
        : sr,
  vr = (e) => {
    let t = _r(e);
    return t === or
      ? `Fill panel`
      : t === sr
        ? `Responsive`
        : (bt.find((e) => e.id === t)?.label ?? `Responsive`);
  },
  yr = (e) => Number.isInteger(e) && e >= 240 && e <= 3840,
  br = (e) => ({ ...e, width: e.height, height: e.width });
function xr(e) {
  let t = (0, Z.c)(42),
    { disabled: n } = e,
    r = X(Cr),
    i = ke(),
    a = r._tag === `fill` ? null : r,
    o = a?.width ?? ur.width,
    s = a?.height ?? ur.height,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { width: o, height: s }), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== a?.height || t[4] !== a?.width || t[5] !== i
    ? ((u = (e) => {
        if (e === or) {
          i({ browserDefaultViewport: le });
          return;
        }
        if (e === sr) {
          i({
            browserDefaultViewport: {
              _tag: `freeform`,
              width: a?.width ?? ur.width,
              height: a?.height ?? ur.height,
            },
          });
          return;
        }
        let t = bt.find((t) => t.id === e);
        t &&
          i({
            browserDefaultViewport: {
              _tag: `preset`,
              width: t.width,
              height: t.height,
              presetId: t.id,
            },
          });
      }),
      (t[3] = a?.height),
      (t[4] = a?.width),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d = u,
    f;
  t[7] !== l || t[8] !== a || t[9] !== i
    ? ((f = (e, t) => {
        if (t === null || !yr(t)) return;
        let n = { ...l, [e]: t };
        n.width * n.height > 8294400 ||
          (a && n.width === a.width && n.height === a.height) ||
          i({ browserDefaultViewport: { _tag: `freeform`, ...n } });
      }),
      (t[7] = l),
      (t[8] = a),
      (t[9] = i),
      (t[10] = f))
    : (f = t[10]);
  let p = f,
    m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = mt(`browser-default-viewport`)), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== n || t[13] !== i || t[14] !== r._tag
    ? ((h =
        !n && r._tag !== E._tag
          ? (0, Q.jsx)(Pt, {
              label: `default browser viewport`,
              onClick: () => i({ browserDefaultViewport: E }),
            })
          : null),
      (t[12] = n),
      (t[13] = i),
      (t[14] = r._tag),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === r ? (g = t[17]) : ((g = _r(r)), (t[16] = r), (t[17] = g));
  let _;
  t[18] === r ? (_ = t[19]) : ((_ = vr(r)), (t[18] = r), (t[19] = _));
  let y;
  t[20] === _
    ? (y = t[21])
    : ((y = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full min-w-0 sm:w-44`,
        "aria-label": `Default browser viewport`,
        children: (0, Q.jsx)(ve, { children: _ }),
      })),
      (t[20] = _),
      (t[21] = y));
  let x, S;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(Y, { value: or, children: `Fill panel` })),
      (S = (0, Q.jsx)(Y, { value: sr, children: `Responsive` })),
      (t[22] = x),
      (t[23] = S))
    : ((x = t[22]), (S = t[23]));
  let C;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsxs)(be, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          x,
          S,
          (0, Q.jsxs)(xe, { children: [(0, Q.jsx)(ye, { children: `Standard` }), bt.map(Sr)] }),
        ],
      })),
      (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] !== n || t[26] !== d || t[27] !== y || t[28] !== g
    ? ((w = (0, Q.jsxs)(Ce, { value: g, onValueChange: d, disabled: n, children: [y, C] })),
      (t[25] = n),
      (t[26] = d),
      (t[27] = y),
      (t[28] = g),
      (t[29] = w))
    : (w = t[29]);
  let T;
  t[30] !== p || t[31] !== n || t[32] !== l || t[33] !== a || t[34] !== i
    ? ((T = a
        ? (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [
              (0, Q.jsx)(J, {
                value: l.width,
                min: 240,
                max: V,
                disabled: n,
                format: dr,
                size: `sm`,
                className: `w-20`,
                onValueCommitted: (e) => p(`width`, e),
                children: (0, Q.jsx)(_e, {
                  children: (0, Q.jsx)(ge, { "aria-label": `Default viewport width` }),
                }),
              }),
              (0, Q.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: `×` }),
              (0, Q.jsx)(J, {
                value: l.height,
                min: 240,
                max: V,
                disabled: n,
                format: dr,
                size: `sm`,
                className: `w-20`,
                onValueCommitted: (e) => p(`height`, e),
                children: (0, Q.jsx)(_e, {
                  children: (0, Q.jsx)(ge, { "aria-label": `Default viewport height` }),
                }),
              }),
              (0, Q.jsxs)(v, {
                children: [
                  (0, Q.jsx)(I, {
                    render: (0, Q.jsx)(b, {
                      size: `icon-sm`,
                      variant: `ghost-muted`,
                      disabled: n,
                      "aria-label": `Rotate to ${l.height >= l.width ? `landscape` : `portrait`}`,
                      onClick: () => i({ browserDefaultViewport: br(a) }),
                      children: (0, Q.jsx)(yt, {}),
                    }),
                  }),
                  (0, Q.jsx)(F, { side: `top`, children: `Rotate` }),
                ],
              }),
            ],
          })
        : null),
      (t[30] = p),
      (t[31] = n),
      (t[32] = l),
      (t[33] = a),
      (t[34] = i),
      (t[35] = T))
    : (T = t[35]);
  let D;
  t[36] !== w || t[37] !== T
    ? ((D = (0, Q.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto`,
        children: [w, T],
      })),
      (t[36] = w),
      (t[37] = T),
      (t[38] = D))
    : (D = t[38]);
  let O;
  return (
    t[39] !== D || t[40] !== h
      ? ((O = (0, Q.jsx)(At, {
          ...m,
          description: `Tab size for you and agents. Fill fits the panel; other sizes show the device toolbar.`,
          resetAction: h,
          control: D,
        })),
        (t[39] = D),
        (t[40] = h),
        (t[41] = O))
      : (O = t[41]),
    O
  );
}
function Sr(e) {
  return (0, Q.jsx)(
    Y,
    {
      value: e.id,
      children: (0, Q.jsxs)(`span`, {
        className: `flex w-full items-center justify-between gap-5`,
        children: [
          (0, Q.jsx)(`span`, { children: e.label }),
          (0, Q.jsx)(`span`, {
            className: `text-xs tabular-nums text-muted-foreground`,
            children: e.detail,
          }),
        ],
      }),
    },
    e.id,
  );
}
function Cr(e) {
  return e.browserDefaultViewport;
}
function wr(e) {
  let t = (0, Z.c)(20),
    { disabled: n } = e,
    r = X(Er),
    i = ke(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = mt(`browser-default-zoom`)), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== n || t[2] !== i || t[3] !== r
    ? ((o =
        !n && r !== 1
          ? (0, Q.jsx)(Pt, {
              label: `default browser zoom`,
              onClick: () => i({ browserDefaultZoomFactor: 1 }),
            })
          : null),
      (t[1] = n),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s = String(r),
    c;
  t[5] === i
    ? (c = t[6])
    : ((c = (e) => {
        let t = fe.find((t) => String(t) === e);
        t !== void 0 && i({ browserDefaultZoomFactor: t });
      }),
      (t[5] = i),
      (t[6] = c));
  let l;
  t[7] === r ? (l = t[8]) : ((l = pr(r)), (t[7] = r), (t[8] = l));
  let u;
  t[9] === l
    ? (u = t[10])
    : ((u = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Default browser zoom`,
        children: (0, Q.jsx)(ve, { children: l }),
      })),
      (t[9] = l),
      (t[10] = u));
  let d;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(be, { align: `end`, alignItemWithTrigger: !1, children: fe.map(Tr) })),
      (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] !== n || t[13] !== s || t[14] !== c || t[15] !== u
    ? ((f = (0, Q.jsxs)(Ce, { disabled: n, value: s, onValueChange: c, children: [u, d] })),
      (t[12] = n),
      (t[13] = s),
      (t[14] = c),
      (t[15] = u),
      (t[16] = f))
    : (f = t[16]);
  let p;
  return (
    t[17] !== o || t[18] !== f
      ? ((p = (0, Q.jsx)(At, {
          ...a,
          description: `Page zoom applied to new browser tabs.`,
          resetAction: o,
          control: f,
        })),
        (t[17] = o),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function Tr(e) {
  return (0, Q.jsx)(Y, { hideIndicator: !0, value: String(e), children: pr(e) }, e);
}
function Er(e) {
  return e.browserDefaultZoomFactor;
}
function Dr(e) {
  let t = (0, Z.c)(18),
    { disabled: n } = e,
    r = X(kr),
    i = ke(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = mt(`browser-default-appearance`)), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== r || t[2] !== n || t[3] !== i
    ? ((o =
        !n && r !== `system`
          ? (0, Q.jsx)(Pt, {
              label: `default browser appearance`,
              onClick: () => i({ browserDefaultAppearance: re }),
            })
          : null),
      (t[1] = r),
      (t[2] = n),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === i
    ? (s = t[6])
    : ((s = (e) => {
        (e === `system` || e === `light` || e === `dark`) && i({ browserDefaultAppearance: e });
      }),
      (t[5] = i),
      (t[6] = s));
  let c = fr[r],
    l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Default browser appearance`,
        children: (0, Q.jsx)(ve, { children: c }),
      })),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(be, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: Object.entries(fr).map(Or),
      })),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== r || t[11] !== n || t[12] !== s || t[13] !== l
    ? ((d = (0, Q.jsxs)(Ce, { disabled: n, value: r, onValueChange: s, children: [l, u] })),
      (t[10] = r),
      (t[11] = n),
      (t[12] = s),
      (t[13] = l),
      (t[14] = d))
    : (d = t[14]);
  let f;
  return (
    t[15] !== o || t[16] !== d
      ? ((f = (0, Q.jsx)(At, {
          ...a,
          description: `The color scheme pages are told to prefer. System follows your OS setting.`,
          resetAction: o,
          control: d,
        })),
        (t[15] = o),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function Or(e) {
  let [t, n] = e;
  return (0, Q.jsx)(Y, { hideIndicator: !0, value: t, children: n }, t);
}
function kr(e) {
  return e.browserDefaultAppearance;
}
function Ar(e) {
  let t = (0, Z.c)(17),
    { disabled: n } = e,
    r = X(Mr),
    i = X(jr),
    a = ke(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = mt(`browser-recording-key-presses`)), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === a
    ? (s = t[2])
    : ((s = (e) => a({ browserRecordingShowKeyPresses: !!e })), (t[1] = a), (t[2] = s));
  let c;
  t[3] !== n || t[4] !== r || t[5] !== s
    ? ((c = (0, Q.jsx)(At, {
        ...o,
        description: `Show pressed keys and shortcuts in new recordings. Password fields are excluded.`,
        control: (0, Q.jsx)(xt, {
          disabled: n,
          checked: r,
          "aria-label": `Show key presses in recordings`,
          onCheckedChange: s,
        }),
      })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = mt(`browser-recording-mouse-presses`)), (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === a
    ? (u = t[9])
    : ((u = (e) => a({ browserRecordingShowMousePresses: !!e })), (t[8] = a), (t[9] = u));
  let d;
  t[10] !== n || t[11] !== i || t[12] !== u
    ? ((d = (0, Q.jsx)(At, {
        ...l,
        description: `Highlight mouse presses and held buttons in new recordings.`,
        control: (0, Q.jsx)(xt, {
          disabled: n,
          checked: i,
          "aria-label": `Show mouse presses in recordings`,
          onCheckedChange: u,
        }),
      })),
      (t[10] = n),
      (t[11] = i),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== c || t[15] !== d
      ? ((f = (0, Q.jsxs)(Q.Fragment, { children: [c, d] })), (t[14] = c), (t[15] = d), (t[16] = f))
      : (f = t[16]),
    f
  );
}
function jr(e) {
  return e.browserRecordingShowMousePresses;
}
function Mr(e) {
  return e.browserRecordingShowKeyPresses;
}
function Nr(e) {
  let t = (0, Z.c)(18),
    { disabled: n } = e,
    r = X(Fr),
    i = ke(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = mt(`browser-recording-frame-rate`)), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== n || t[2] !== r || t[3] !== i
    ? ((o =
        !n && r !== 30
          ? (0, Q.jsx)(Pt, {
              label: `browser recording frame rate`,
              onClick: () => i({ browserRecordingFrameRate: 30 }),
            })
          : null),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s = String(r),
    c;
  t[5] === i
    ? (c = t[6])
    : ((c = (e) => {
        let t = H.find((t) => String(t) === e);
        t !== void 0 && i({ browserRecordingFrameRate: t });
      }),
      (t[5] = i),
      (t[6] = c));
  let l;
  t[7] === r
    ? (l = t[8])
    : ((l = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Browser recording frame rate`,
        children: (0, Q.jsxs)(ve, { children: [r, ` fps`] }),
      })),
      (t[7] = r),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(be, { align: `end`, alignItemWithTrigger: !1, children: H.map(Pr) })),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== n || t[11] !== s || t[12] !== c || t[13] !== l
    ? ((d = (0, Q.jsxs)(Ce, { disabled: n, value: s, onValueChange: c, children: [l, u] })),
      (t[10] = n),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = d))
    : (d = t[14]);
  let f;
  return (
    t[15] !== o || t[16] !== d
      ? ((f = (0, Q.jsx)(At, {
          ...a,
          description: `Maximum recording rate. 30 fps saves CPU and storage; 60 fps is smoother.`,
          resetAction: o,
          control: d,
        })),
        (t[15] = o),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
function Pr(e) {
  return (0, Q.jsxs)(Y, { hideIndicator: !0, value: String(e), children: [e, ` fps`] }, e);
}
function Fr(e) {
  return e.browserRecordingFrameRate;
}
var Ir = { system: `Your default browser`, app: `T3 Code` };
function Lr(e) {
  let t = (0, Z.c)(19),
    { disabled: n } = e,
    r = X(zr),
    i = ke(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = mt(`browser-link-target`)), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== n || t[2] !== r || t[3] !== i
    ? ((o =
        !n && r !== `system`
          ? (0, Q.jsx)(Pt, { label: `link target`, onClick: () => i({ browserLinkTarget: S }) })
          : null),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === i
    ? (s = t[6])
    : ((s = (e) => {
        (e === `system` || e === `app`) && i({ browserLinkTarget: e });
      }),
      (t[5] = i),
      (t[6] = s));
  let c = Ir[r],
    l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Open links in`,
        children: (0, Q.jsx)(ve, { children: c }),
      })),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = Object.keys(Ir)), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(be, { align: `end`, alignItemWithTrigger: !1, children: u.map(Rr) })),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== n || t[12] !== r || t[13] !== s || t[14] !== l
    ? ((f = (0, Q.jsxs)(Ce, { disabled: n, value: r, onValueChange: s, children: [l, d] })),
      (t[11] = n),
      (t[12] = r),
      (t[13] = s),
      (t[14] = l),
      (t[15] = f))
    : (f = t[15]);
  let p;
  return (
    t[16] !== o || t[17] !== f
      ? ((p = (0, Q.jsx)(At, {
          ...a,
          description: `Where links in the chat and terminal open. Hold ⌘ or Ctrl while clicking a link to open it in your default browser either way.`,
          resetAction: o,
          control: f,
        })),
        (t[16] = o),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
function Rr(e) {
  return (0, Q.jsx)(Y, { hideIndicator: !0, value: e, children: Ir[e] }, e);
}
function zr(e) {
  return e.browserLinkTarget;
}
var Br = {
  duckduckgo: `DuckDuckGo`,
  google: `Google`,
  bing: `Bing`,
  brave: `Brave Search`,
  kagi: `Kagi`,
  ecosia: `Ecosia`,
  custom: `Custom`,
};
function Vr() {
  let e = (0, Z.c)(24),
    t = X(Wr),
    n = X(Ur),
    r = ke(),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = mt(`browser-search-engine`)), (e[0] = i))
    : (i = e[0]);
  let a;
  e[1] !== n || e[2] !== t || e[3] !== r
    ? ((a =
        t !== `duckduckgo` || n !== ``
          ? (0, Q.jsx)(Pt, {
              label: `search engine`,
              onClick: () => r({ browserSearchEngine: w, browserCustomSearchUrl: `` }),
            })
          : null),
      (e[1] = n),
      (e[2] = t),
      (e[3] = r),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === r
    ? (o = e[6])
    : ((o = (e) => {
        let t = K.literals.find((t) => t === e);
        t !== void 0 && r({ browserSearchEngine: t });
      }),
      (e[5] = r),
      (e[6] = o));
  let s = Br[t],
    c;
  e[7] === s
    ? (c = e[8])
    : ((c = (0, Q.jsx)(Se, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Search engine`,
        children: (0, Q.jsx)(ve, { children: s }),
      })),
      (e[7] = s),
      (e[8] = c));
  let l;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(be, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: K.literals.map(Hr),
      })),
      (e[9] = l))
    : (l = e[9]);
  let u;
  e[10] !== t || e[11] !== o || e[12] !== c
    ? ((u = (0, Q.jsxs)(Ce, { value: t, onValueChange: o, children: [c, l] })),
      (e[10] = t),
      (e[11] = o),
      (e[12] = c),
      (e[13] = u))
    : (u = e[13]);
  let d;
  e[14] !== a || e[15] !== u
    ? ((d = (0, Q.jsx)(At, {
        ...i,
        description: `What the address bar searches when you type something that isn't a URL.`,
        resetAction: a,
        control: u,
      })),
      (e[14] = a),
      (e[15] = u),
      (e[16] = d))
    : (d = e[16]);
  let f;
  e[17] !== n || e[18] !== t || e[19] !== r
    ? ((f =
        t === `custom`
          ? (0, Q.jsx)(At, {
              title: `Custom search URL`,
              description: `Use %s where the search terms go.`,
              status: dt(n)
                ? void 0
                : `Enter an http or https URL containing %s. Searches use DuckDuckGo until then.`,
              control: (0, Q.jsx)(Vt, {
                nativeInput: !0,
                size: `sm`,
                className: `w-full sm:w-64`,
                "aria-label": `Custom search URL`,
                placeholder: `https://example.com/search?q=%s`,
                autoCapitalize: `none`,
                spellCheck: !1,
                maxLength: y,
                value: n,
                onCommit: (e) => r({ browserCustomSearchUrl: e.trim() }),
              }),
            })
          : null),
      (e[17] = n),
      (e[18] = t),
      (e[19] = r),
      (e[20] = f))
    : (f = e[20]);
  let p;
  return (
    e[21] !== d || e[22] !== f
      ? ((p = (0, Q.jsxs)(Q.Fragment, { children: [d, f] })), (e[21] = d), (e[22] = f), (e[23] = p))
      : (p = e[23]),
    p
  );
}
function Hr(e) {
  return (0, Q.jsx)(Y, { hideIndicator: !0, value: e, children: Br[e] }, e);
}
function Ur(e) {
  return e.browserCustomSearchUrl;
}
function Wr(e) {
  return e.browserSearchEngine;
}
function Gr() {
  let e = (0, Z.c)(12),
    t = X(Kr),
    n = ke(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = mt(`pull-request-links-open-in-app`)), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== t || e[2] !== n
    ? ((i = t
        ? null
        : (0, Q.jsx)(Pt, {
            label: `open pull requests in T3 Code`,
            onClick: () => n({ pullRequestLinksOpenInApp: !0 }),
          })),
      (e[1] = t),
      (e[2] = n),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === n
    ? (a = e[5])
    : ((a = (e) => n({ pullRequestLinksOpenInApp: !!e })), (e[4] = n), (e[5] = a));
  let o;
  e[6] !== t || e[7] !== a
    ? ((o = (0, Q.jsx)(xt, {
        checked: t,
        onCheckedChange: a,
        "aria-label": `Open pull requests in T3 Code`,
      })),
      (e[6] = t),
      (e[7] = a),
      (e[8] = o))
    : (o = e[8]);
  let s;
  return (
    e[9] !== i || e[10] !== o
      ? ((s = (0, Q.jsx)(At, {
          ...r,
          description: `Clicking a pull request link opens it in T3 Code. Turn off to open pull request links like any other link, on your git host.`,
          resetAction: i,
          control: o,
        })),
        (e[9] = i),
        (e[10] = o),
        (e[11] = s))
      : (s = e[11]),
    s
  );
}
function Kr(e) {
  return e.pullRequestLinksOpenInApp;
}
function qr() {
  let e = (0, Z.c)(7),
    { search: t, environment: n } = Lt(),
    r = Mt(),
    i = n?.connection.phase === `connected` && n.serverConfig !== null ? n.environmentId : null,
    a;
  e[0] === t ? (a = e[1]) : ((a = JSON.stringify(t)), (e[0] = t), (e[1] = a));
  let o = `${i}:${a}`,
    s;
  return (
    e[2] !== i || e[3] !== r.enableAgentDeviceAccess || e[4] !== r.enableDeviceSupport || e[5] !== o
      ? ((s = (0, Q.jsx)(Ft, {
          id: `devices`,
          title: `Devices`,
          children: (0, Q.jsx)(
            Jr,
            {
              environmentId: i,
              enabled: r.enableDeviceSupport,
              agentAccessEnabled: r.enableAgentDeviceAccess,
            },
            o,
          ),
        })),
        (e[2] = i),
        (e[3] = r.enableAgentDeviceAccess),
        (e[4] = r.enableDeviceSupport),
        (e[5] = o),
        (e[6] = s))
      : (s = e[6]),
    s
  );
}
function Jr(e) {
  let t = (0, Z.c)(107),
    { environmentId: n, enabled: r, agentAccessEnabled: i } = e,
    a = je(n, T),
    { state: o, loaded: s } = Xe(n),
    { scope: c, environments: l, connectedEnvironments: u } = Lt(),
    d = Rt(),
    f = c.kind === `project` || c.kind === `checkout`,
    p;
  t[0] === u ? (p = t[1]) : ((p = u.some(ri)), (t[0] = u), (t[1] = p));
  let m = p,
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { reportFailure: !1 }), (t[2] = h))
    : (h = t[2]);
  let g = Ie(Ze.configure, h),
    _;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { reportFailure: !1 }), (t[3] = _))
    : (_ = t[3]);
  let v = Ie(Ze.list, _),
    [y, x] = (0, $.useState)(null),
    S;
  t[4] === o ? (S = t[5]) : ((S = $e(o)), (t[4] = o), (t[5] = S));
  let { ready: C, busy: w } = S,
    E = o.hosts.some(ti),
    [D, O] = (0, $.useState)(!1);
  (D && !r && O(!1), r && !D && (C || E) && y !== `hub` && O(!0));
  let k;
  t[6] !== g || t[7] !== n || t[8] !== l
    ? ((k = async (e, t) => {
        if (!n || !Ne(n, `settings:write`)) return;
        x(e);
        let r = await Promise.allSettled(
          l.map(async (e) => {
            if (e.connection.phase !== `connected` || !e.serverConfig)
              throw Error(`Environment disconnected`);
            if (!Ne(e.environmentId, `settings:write`))
              throw Error(`This connection cannot change device settings.`);
            return g({
              environmentId: e.environmentId,
              input: { ...t, ...(t.enabled ? { onboardingCompleted: !0 } : {}) },
            });
          }),
        );
        x(null);
        let i = l.filter((e, t) => {
          let n = r[t];
          return n?.status !== `fulfilled` || n.value._tag === `Failure`;
        });
        i.length > 0 &&
          Re.add({
            type: `error`,
            title: `Device settings not saved on all environments`,
            description: `Could not update ${i.map(ei).join(`, `)}.`,
          });
      }),
      (t[6] = g),
      (t[7] = n),
      (t[8] = l),
      (t[9] = k))
    : (k = t[9]);
  let A = k,
    [j, M] = (0, $.useState)(null),
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V;
  if (
    t[10] !== w ||
    t[11] !== a ||
    t[12] !== u ||
    t[13] !== r ||
    t[14] !== n ||
    t[15] !== v ||
    t[16] !== s ||
    t[17] !== y ||
    t[18] !== D ||
    t[19] !== f ||
    t[20] !== o ||
    t[21] !== A ||
    t[22] !== j
  ) {
    let e = o.hosts.find($r)?.tools,
      i = (t) => {
        let r = e?.[t],
          i = r && !r.installedVersions.includes(r.requiredVersion);
        return (0, Q.jsxs)(`div`, {
          className: `space-y-2`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: [
                o.supportsToolUpdate && i
                  ? (0, Q.jsx)(b, {
                      size: `sm`,
                      disabled: !n || y !== null || w,
                      onClick: () => {
                        n &&
                          (M(null),
                          x(`update-${t}`),
                          v({ environmentId: n, input: { updateTool: t } })
                            .then((e) => {
                              e._tag === `Failure` && M({ tool: t, message: Fe(e.cause) });
                            })
                            .finally(() => x(null)));
                      },
                      children:
                        y === `update-${t}` ? `Updating…` : `Update to v${r.requiredVersion}`,
                    })
                  : null,
                o.supportsToolInspection
                  ? (0, Q.jsx)(b, {
                      size: `sm`,
                      variant: `outline`,
                      disabled: !n || y !== null || w,
                      onClick: () => {
                        n &&
                          (x(`check`),
                          v({ environmentId: n, input: { inspectOnly: !0 } }).finally(() =>
                            x(null),
                          ));
                      },
                      children: y === `check` ? `Checking…` : `Check versions`,
                    })
                  : null,
              ],
            }),
            j?.tool === t
              ? (0, Q.jsx)(`p`, {
                  role: `alert`,
                  className: `text-xs text-destructive`,
                  children: j.message,
                })
              : null,
          ],
        });
      },
      c;
    t[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = mt(`device-hub`)), (t[32] = c))
      : (c = t[32]);
    let l;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = [`enableDeviceSupport`]), (t[33] = l))
      : (l = t[33]);
    let d;
    t[34] === o.hosts
      ? (d = t[35])
      : ((d = o.hosts.find(Qr)?.tools), (t[34] = o.hosts), (t[35] = d));
    let p = (0, Q.jsx)(Kt, { action: i(`hub`), kind: `hub`, tools: d }),
      m;
    t[36] !== y || t[37] !== o
      ? ((m = y === `hub` ? (0, Q.jsx)(rt, { state: o, pending: !0, compact: !0 }) : null),
        (t[36] = y),
        (t[37] = o),
        (t[38] = m))
      : (m = t[38]);
    let h;
    t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = [`enableDeviceSupport`]), (t[39] = h))
      : (h = t[39]);
    let g = !a || f || !s || !n || w || y !== null,
      _;
    t[40] === A
      ? (_ = t[41])
      : ((_ = (e) => void A(`hub`, { enabled: !!e, ...(e ? {} : { agentAccessEnabled: !1 }) })),
        (t[40] = A),
        (t[41] = _));
    let S;
    (t[42] !== r || t[43] !== g || t[44] !== _
      ? ((S = (0, Q.jsx)(zt, {
          settingKeys: h,
          checked: r,
          disabled: g,
          "aria-label": `Device hub`,
          onCheckedChange: _,
        })),
        (t[42] = r),
        (t[43] = g),
        (t[44] = _),
        (t[45] = S))
      : (S = t[45]),
      t[46] !== p || t[47] !== m || t[48] !== S
        ? ((I = (0, Q.jsx)(At, {
            ...c,
            serverScoped: !0,
            settingKeys: l,
            description: it,
            control: (0, Q.jsxs)(Q.Fragment, { children: [p, m, S] }),
          })),
          (t[46] = p),
          (t[47] = m),
          (t[48] = S),
          (t[49] = I))
        : (I = t[49]));
    let C;
    (t[50] !== w ||
    t[51] !== u ||
    t[52] !== r ||
    t[53] !== n ||
    t[54] !== v ||
    t[55] !== y ||
    t[56] !== D ||
    t[57] !== o
      ? ((C = D
          ? (0, Q.jsx)(At, {
              ...mt(`device-platform-support`),
              description:
                u.length > 1
                  ? `Status for ${u.find((e) => e.environmentId === n)?.label}. Select an environment to inspect its simulator support.`
                  : void 0,
              status: (0, Q.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex flex-wrap gap-x-5 gap-y-2`,
                    children: [
                      (0, Q.jsx)(Qe, { compact: !0, platform: `iOS`, status: ot(o, `ios`) }),
                      (0, Q.jsx)(Qe, {
                        compact: !0,
                        platform: `Android`,
                        status: ot(o, `android`),
                      }),
                    ],
                  }),
                  (0, Q.jsx)(tt, { hosts: o.hosts.filter(Zr), hostStatuses: o.hostStatuses }),
                ],
              }),
              control: (0, Q.jsx)(b, {
                size: `sm`,
                variant: `outline`,
                disabled: !n || !r || w || y !== null,
                onClick: () => {
                  n && (x(`check`), v({ environmentId: n, input: {} }).finally(() => x(null)));
                },
                children: y === `check` ? `Checking…` : `Refresh`,
              }),
            })
          : null),
        (t[50] = w),
        (t[51] = u),
        (t[52] = r),
        (t[53] = n),
        (t[54] = v),
        (t[55] = y),
        (t[56] = D),
        (t[57] = o),
        (t[58] = C))
      : (C = t[58]),
      t[59] === C ? (L = t[60]) : ((L = (0, Q.jsx)(st, { children: C })), (t[59] = C), (t[60] = L)),
      (P = At),
      t[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((z = mt(`agent-device-access`)), (t[61] = z))
        : (z = t[61]),
      (B = !0),
      t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((V = [`enableAgentDeviceAccess`]), (t[62] = V))
        : (V = t[62]),
      (F = nt),
      (N = Kt),
      (R = i(`agent`)),
      (t[10] = w),
      (t[11] = a),
      (t[12] = u),
      (t[13] = r),
      (t[14] = n),
      (t[15] = v),
      (t[16] = s),
      (t[17] = y),
      (t[18] = D),
      (t[19] = f),
      (t[20] = o),
      (t[21] = A),
      (t[22] = j),
      (t[23] = N),
      (t[24] = P),
      (t[25] = F),
      (t[26] = I),
      (t[27] = L),
      (t[28] = R),
      (t[29] = z),
      (t[30] = B),
      (t[31] = V));
  } else
    ((N = t[23]),
      (P = t[24]),
      (F = t[25]),
      (I = t[26]),
      (L = t[27]),
      (R = t[28]),
      (z = t[29]),
      (B = t[30]),
      (V = t[31]));
  let ee;
  t[63] === o.hosts
    ? (ee = t[64])
    : ((ee = o.hosts.find(Xr)?.tools), (t[63] = o.hosts), (t[64] = ee));
  let te;
  t[65] !== N || t[66] !== ee || t[67] !== R
    ? ((te = (0, Q.jsx)(N, { action: R, kind: `agent`, tools: ee })),
      (t[65] = N),
      (t[66] = ee),
      (t[67] = R),
      (t[68] = te))
    : (te = t[68]);
  let H;
  t[69] !== y || t[70] !== o
    ? ((H = y === `agent` ? (0, Q.jsx)(at, { state: o, pending: !0, compact: !0 }) : null),
      (t[69] = y),
      (t[70] = o),
      (t[71] = H))
    : (H = t[71]);
  let U;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = [`enableAgentDeviceAccess`]), (t[72] = U))
    : (U = t[72]);
  let ne = !a || u.length === 0 || (!f && (!s || !m || w)) || y !== null,
    re;
  t[73] !== f || t[74] !== A || t[75] !== d
    ? ((re = (e) =>
        f ? d({ enableAgentDeviceAccess: !!e }) : void A(`agent`, { agentAccessEnabled: !!e })),
      (t[73] = f),
      (t[74] = A),
      (t[75] = d),
      (t[76] = re))
    : (re = t[76]);
  let W;
  t[77] !== i || t[78] !== ne || t[79] !== re
    ? ((W = (0, Q.jsx)(zt, {
        settingKeys: U,
        checked: i,
        disabled: ne,
        "aria-label": `Agent device access`,
        onCheckedChange: re,
      })),
      (t[77] = i),
      (t[78] = ne),
      (t[79] = re),
      (t[80] = W))
    : (W = t[80]);
  let ie;
  t[81] !== te || t[82] !== H || t[83] !== W
    ? ((ie = (0, Q.jsxs)(Q.Fragment, { children: [te, H, W] })),
      (t[81] = te),
      (t[82] = H),
      (t[83] = W),
      (t[84] = ie))
    : (ie = t[84]);
  let ae;
  t[85] !== P || t[86] !== F || t[87] !== ie || t[88] !== z || t[89] !== B || t[90] !== V
    ? ((ae = (0, Q.jsx)(P, { ...z, serverScoped: B, settingKeys: V, description: F, control: ie })),
      (t[85] = P),
      (t[86] = F),
      (t[87] = ie),
      (t[88] = z),
      (t[89] = B),
      (t[90] = V),
      (t[91] = ae))
    : (ae = t[91]);
  let G;
  t[92] !== n || t[93] !== o
    ? ((G = n
        ? (0, Q.jsx)(et, { state: { ...o, hosts: o.hosts.filter(Yr) }, environmentId: n })
        : null),
      (t[92] = n),
      (t[93] = o),
      (t[94] = G))
    : (G = t[94]);
  let K;
  t[95] === n
    ? (K = t[96])
    : ((K = (0, Q.jsx)(cn, { environmentId: n })), (t[95] = n), (t[96] = K));
  let oe;
  t[97] !== n || t[98] !== o.supportsEasHosts
    ? ((oe = o.supportsEasHosts ? (0, Q.jsx)(In, { environmentId: n }) : null),
      (t[97] = n),
      (t[98] = o.supportsEasHosts),
      (t[99] = oe))
    : (oe = t[99]);
  let se;
  return (
    t[100] !== I || t[101] !== L || t[102] !== ae || t[103] !== G || t[104] !== K || t[105] !== oe
      ? ((se = (0, Q.jsxs)(Q.Fragment, { children: [I, L, ae, G, K, oe] })),
        (t[100] = I),
        (t[101] = L),
        (t[102] = ae),
        (t[103] = G),
        (t[104] = K),
        (t[105] = oe),
        (t[106] = se))
      : (se = t[106]),
    se
  );
}
function Yr(e) {
  return e.kind === `local`;
}
function Xr(e) {
  return e.kind === `local`;
}
function Zr(e) {
  return e.kind === `local`;
}
function Qr(e) {
  return e.kind === `local`;
}
function $r(e) {
  return e.kind === `local`;
}
function ei(e) {
  return e.label;
}
function ti(e) {
  return e.kind === `local` && !e.platforms.some(ni);
}
function ni(e) {
  return e.available;
}
function ri(e) {
  return e.serverConfig?.settings.enableDeviceSupport;
}
function ii() {
  let e = (0, Z.c)(15),
    { scope: t } = Lt(),
    n = Mt(),
    r = Rt(),
    i = t.kind === `project` || t.kind === `checkout`,
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = [`enableAgentBrowserAccess`]), (o = mt(`agent-browser-access`)), (e[0] = a), (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s = i
      ? `Allow agents in this project to use the shared browser. Applies when the agent session next starts.`
      : `Allow agents to use the shared browser. Projects can override it.`,
    c;
  e[2] !== n.enableAgentBrowserAccess || e[3] !== r
    ? ((c =
        n.enableAgentBrowserAccess === P.enableAgentBrowserAccess
          ? null
          : (0, Q.jsx)(Pt, {
              label: `default browser access`,
              onClick: () => r({ enableAgentBrowserAccess: P.enableAgentBrowserAccess }),
            })),
      (e[2] = n.enableAgentBrowserAccess),
      (e[3] = r),
      (e[4] = c))
    : (c = e[4]);
  let l;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [`enableAgentBrowserAccess`]), (e[5] = l))
    : (l = e[5]);
  let u;
  e[6] === r
    ? (u = e[7])
    : ((u = (e) => r({ enableAgentBrowserAccess: e })), (e[6] = r), (e[7] = u));
  let d;
  e[8] !== n.enableAgentBrowserAccess || e[9] !== u
    ? ((d = (0, Q.jsx)(zt, {
        settingKeys: l,
        "aria-label": `Agent browser access`,
        checked: n.enableAgentBrowserAccess,
        onCheckedChange: u,
      })),
      (e[8] = n.enableAgentBrowserAccess),
      (e[9] = u),
      (e[10] = d))
    : (d = e[10]);
  let f;
  return (
    e[11] !== s || e[12] !== c || e[13] !== d
      ? ((f = (0, Q.jsx)(At, {
          serverScoped: !0,
          settingKeys: a,
          ...o,
          description: s,
          resetAction: c,
          control: d,
        })),
        (e[11] = s),
        (e[12] = c),
        (e[13] = d),
        (e[14] = f))
      : (f = e[14]),
    f
  );
}
function ai(e) {
  let t = (0, Z.c)(14),
    { disabled: n } = e,
    r = X(oi),
    i = ke(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = mt(`browser-auto-show-floating-preview`)), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== r || t[2] !== n || t[3] !== i
    ? ((o =
        !n && r !== !0
          ? (0, Q.jsx)(Pt, {
              label: `auto-show floating preview`,
              onClick: () => i({ browserAutoShowFloatingPreview: !0 }),
            })
          : null),
      (t[1] = r),
      (t[2] = n),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === i
    ? (s = t[6])
    : ((s = (e) => i({ browserAutoShowFloatingPreview: !!e })), (t[5] = i), (t[6] = s));
  let c;
  t[7] !== r || t[8] !== n || t[9] !== s
    ? ((c = (0, Q.jsx)(xt, {
        disabled: n,
        checked: r,
        onCheckedChange: s,
        "aria-label": `Auto-show floating preview`,
      })),
      (t[7] = r),
      (t[8] = n),
      (t[9] = s),
      (t[10] = c))
    : (c = t[10]);
  let l;
  return (
    t[11] !== o || t[12] !== c
      ? ((l = (0, Q.jsx)(At, {
          ...a,
          description: `Show the floating preview when an agent opens a browser or device unless the agent says otherwise.`,
          resetAction: o,
          control: c,
        })),
        (t[11] = o),
        (t[12] = c),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
function oi(e) {
  return e.browserAutoShowFloatingPreview;
}
function si(e) {
  let t = (0, Z.c)(160),
    { disabled: n } = e,
    r = X(bi),
    i = X(yi),
    a = Oe(),
    o = ke(),
    { environments: s, isReady: c } = we(),
    l = Te(),
    [u, f] = (0, $.useState)(null),
    [p, m] = (0, $.useState)(null),
    [g, v] = (0, $.useState)(null),
    [y, x] = (0, $.useState)(null),
    [S, w] = (0, $.useState)(null),
    [T, E] = (0, $.useState)(!1),
    D = he(),
    O;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { reportFailure: !1 }), (t[0] = O))
    : (O = t[0]);
  let k = Ie(ut.clearProfile, O),
    j,
    N;
  if (t[1] !== s || t[2] !== c || t[3] !== k || t[4] !== D) {
    let e;
    t[7] === D
      ? (e = t[8])
      : ((e = (e) => D.get(e)?.environment.capabilities.serverBrowser === !0),
        (t[7] = D),
        (t[8] = e));
    let n;
    (t[9] === k
      ? (n = t[10])
      : ((n = async (e, t) => {
          let n = await k({ environmentId: e, input: { profileId: t } });
          if (n._tag === `Failure`) throw ae(n);
        }),
        (t[9] = k),
        (t[10] = n)),
      (j = { environmentIds: s.map(vi).filter(e), clear: n }),
      (N = lr(ft !== null, c, s.length, j.environmentIds.length)),
      (t[1] = s),
      (t[2] = c),
      (t[3] = k),
      (t[4] = D),
      (t[5] = j),
      (t[6] = N));
  } else ((j = t[5]), (N = t[6]));
  let P = N,
    F = (0, $.useRef)(!1),
    [I, L] = (0, $.useState)(!1),
    R = n || !a,
    z;
  if (
    t[11] !== i ||
    t[12] !== s ||
    t[13] !== c ||
    t[14] !== I ||
    t[15] !== p ||
    t[16] !== l ||
    t[17] !== y ||
    t[18] !== g ||
    t[19] !== S ||
    t[20] !== T ||
    t[21] !== R ||
    t[22] !== P ||
    t[23] !== j ||
    t[24] !== a ||
    t[25] !== u ||
    t[26] !== o ||
    t[27] !== r
  ) {
    let e = _(r).filter(_i),
      n = M(e, i)?.id ?? `default`,
      D;
    t[29] !== a || t[30] !== o
      ? ((D = (e) => {
          if (!a || F.current) return;
          let t = De().browserProfiles;
          if (t.length >= 24) return;
          let n = _(t),
            r = new Set(n.map(gi)),
            i = e;
          for (let t = 2; r.has(i); t += 1) i = `${e} ${t}`;
          let s = { id: `profile-${oe()}`, name: i, kind: `persistent` };
          return (o({ browserProfiles: [...t, s] }), s);
        }),
        (t[29] = a),
        (t[30] = o),
        (t[31] = D))
      : (D = t[31]);
    let O = D,
      k = (e, t) => {
        if (!a || F.current) return;
        let n = t.trim().slice(0, 48);
        if (n === ``) return;
        let r = De().browserProfiles;
        o({ browserProfiles: r.map((t) => (t.id === e ? { ...t, name: n } : t)) });
      },
      N;
    t[32] !== s || t[33] !== P || t[34] !== j || t[35] !== a
      ? ((N = (e, t) => {
          a &&
            !F.current &&
            (P
              ? cr(ft, s.map(hi), e, j)
                  .then(() => {
                    Re.add({ type: `success`, title: `Cleared ${t}'s cookies and cache` });
                  })
                  .catch(() => {
                    Re.add({ type: `error`, title: `Could not clear ${t}'s data` });
                  })
              : Re.add({
                  type: `error`,
                  title: `Could not clear ${t}'s data`,
                  description: `You're not connected to a server yet.`,
                }));
        }),
        (t[32] = s),
        (t[33] = P),
        (t[34] = j),
        (t[35] = a),
        (t[36] = N))
      : (N = t[36]);
    let V = N,
      ee;
    t[37] !== s || t[38] !== c || t[39] !== P || t[40] !== j || t[41] !== a || t[42] !== o
      ? ((ee = async (e) => {
          if (!a || F.current) return;
          if (!P) {
            w(`Connect to an environment before removing this profile.`);
            return;
          }
          (w(null), E(!0));
          try {
            await cr(ft, c ? s.map(mi) : [], e, j);
          } catch {
            (w(`Profile data could not be deleted. Try again.`), E(!1));
            return;
          }
          let t = De();
          (o({
            browserProfiles: t.browserProfiles.filter((t) => t.id !== e),
            ...(t.browserDefaultProfileId === e ? { browserDefaultProfileId: C } : {}),
          }),
            E(!1),
            v(null));
        }),
        (t[37] = s),
        (t[38] = c),
        (t[39] = P),
        (t[40] = j),
        (t[41] = a),
        (t[42] = o),
        (t[43] = ee))
      : (ee = t[43]);
    let te = ee,
      H;
    t[44] === u ? (H = t[45]) : ((H = u ?? []), (t[44] = u), (t[45] = H));
    let U, re, W, ae, G, K, le, fe, pe, he, ge, _e, J, Y, ve, ye, be;
    if (
      t[46] !== O ||
      t[47] !== I ||
      t[48] !== l ||
      t[49] !== R ||
      t[50] !== a ||
      t[51] !== u ||
      t[52] !== H ||
      t[53] !== r.length
    ) {
      let e = H.filter(pi),
        n;
      t[71] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = () => {
            ft &&
              ft
                .listBrowserImportSources()
                .then(f)
                .catch(() => f(fi));
          }),
          (t[71] = n))
        : (n = t[71]);
      let i = n,
        o;
      (t[72] === a
        ? (o = t[73])
        : ((o = async (e, t, n) =>
            !ft || !a
              ? { kind: `blocked`, reason: `sessionUnavailable` }
              : (n.target.kind === `existing` &&
                    !_(De().browserProfiles).some((e) => e.id === n.target.profileId)) ||
                  F.current
                ? { kind: `blocked`, reason: `readFailed` }
                : ((F.current = !0),
                  L(!0),
                  gr(ft, e, t, n).finally(() => {
                    ((F.current = !1), L(!1));
                  }))),
          (t[72] = a),
          (t[73] = o)),
        (le = o));
      let s;
      (t[74] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = async (e) => {
            if (ft)
              try {
                let t = await ft.listBrowserImportSources();
                return (f(t), t.find((t) => t.id === e));
              } catch {
                return;
              }
          }),
          (t[74] = s))
        : (s = t[74]),
        (K = s),
        (G = r.length >= 24),
        (ae = At),
        t[75] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((Y = mt(`browser-profiles`)), (t[75] = Y))
          : (Y = t[75]),
        (ve = `Profiles separate cookies and logins. Incognito data is cleared when the app closes.`),
        (W = A),
        t[76] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((_e = (e) => e && i()), (t[76] = _e))
          : (_e = t[76]));
      let c = R || I,
        d;
      t[77] === c
        ? (d = t[78])
        : ((d = (0, Q.jsx)(b, { size: `sm`, variant: `outline`, disabled: c })),
          (t[77] = c),
          (t[78] = d));
      let p;
      (t[79] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, Q.jsx)(h, {})), (t[79] = p))
        : (p = t[79]),
        t[80] === d
          ? (J = t[81])
          : ((J = (0, Q.jsxs)(ce, { render: d, children: [p, `Add profile`] })),
            (t[80] = d),
            (t[81] = J)),
        (re = ie),
        (fe = `end`));
      let g = !a || G,
        v;
      (t[82] === O ? (v = t[83]) : ((v = () => O(`New profile`)), (t[82] = O), (t[83] = v)),
        t[84] !== g || t[85] !== v
          ? ((pe = (0, Q.jsx)(q, { disabled: g, onClick: v, children: `Blank profile` })),
            (t[84] = g),
            (t[85] = v),
            (t[86] = pe))
          : (pe = t[86]),
        t[87] === G
          ? (he = t[88])
          : ((he = G
              ? (0, Q.jsx)(q, { disabled: !0, children: `You’ve reached the profile limit` })
              : null),
            (t[87] = G),
            (t[88] = he)),
        t[89] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((ge = (0, Q.jsx)(se, {})), (t[89] = ge))
          : (ge = t[89]),
        (U = ne),
        t[90] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((ye = (0, Q.jsx)(de, { children: `Import from` })), (t[90] = ye))
          : (ye = t[90]),
        (be =
          u === null
            ? (0, Q.jsx)(q, { disabled: !0, children: `Looking for browsers…` })
            : e.length === 0
              ? (0, Q.jsx)(q, { disabled: !0, children: `No supported browsers found` })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    e.map((e) =>
                      (0, Q.jsx)(
                        q,
                        {
                          disabled: !a || l == null,
                          onClick: () => {
                            a &&
                              l != null &&
                              m({
                                source: e,
                                environmentId: l.environmentId,
                                environmentName: pt({
                                  isPrimary: !0,
                                  environmentId: l.environmentId,
                                  runtimeLabel: l.label,
                                }),
                              });
                          },
                          children: e.name,
                        },
                        e.id,
                      ),
                    ),
                    l == null
                      ? (0, Q.jsx)(q, {
                          disabled: !0,
                          children: `Connect to an environment to import cookies`,
                        })
                      : null,
                  ],
                })),
        (t[46] = O),
        (t[47] = I),
        (t[48] = l),
        (t[49] = R),
        (t[50] = a),
        (t[51] = u),
        (t[52] = H),
        (t[53] = r.length),
        (t[54] = U),
        (t[55] = re),
        (t[56] = W),
        (t[57] = ae),
        (t[58] = G),
        (t[59] = K),
        (t[60] = le),
        (t[61] = fe),
        (t[62] = pe),
        (t[63] = he),
        (t[64] = ge),
        (t[65] = _e),
        (t[66] = J),
        (t[67] = Y),
        (t[68] = ve),
        (t[69] = ye),
        (t[70] = be));
    } else
      ((U = t[54]),
        (re = t[55]),
        (W = t[56]),
        (ae = t[57]),
        (G = t[58]),
        (K = t[59]),
        (le = t[60]),
        (fe = t[61]),
        (pe = t[62]),
        (he = t[63]),
        (ge = t[64]),
        (_e = t[65]),
        (J = t[66]),
        (Y = t[67]),
        (ve = t[68]),
        (ye = t[69]),
        (be = t[70]));
    let xe;
    t[91] !== U || t[92] !== ye || t[93] !== be
      ? ((xe = (0, Q.jsxs)(U, { children: [ye, be] })),
        (t[91] = U),
        (t[92] = ye),
        (t[93] = be),
        (t[94] = xe))
      : (xe = t[94]);
    let Se;
    t[95] !== re || t[96] !== fe || t[97] !== pe || t[98] !== he || t[99] !== ge || t[100] !== xe
      ? ((Se = (0, Q.jsxs)(re, { align: fe, children: [pe, he, ge, xe] })),
        (t[95] = re),
        (t[96] = fe),
        (t[97] = pe),
        (t[98] = he),
        (t[99] = ge),
        (t[100] = xe),
        (t[101] = Se))
      : (Se = t[101]);
    let Ce;
    t[102] !== W || t[103] !== _e || t[104] !== J || t[105] !== Se
      ? ((Ce = (0, Q.jsxs)(W, { onOpenChange: _e, children: [J, Se] })),
        (t[102] = W),
        (t[103] = _e),
        (t[104] = J),
        (t[105] = Se),
        (t[106] = Ce))
      : (Ce = t[106]);
    let we = g !== null,
      Te;
    t[107] === T
      ? (Te = t[108])
      : ((Te = (e) => {
          !e && !T && (v(null), w(null));
        }),
        (t[107] = T),
        (t[108] = Te));
    let X = g?.name,
      Ee;
    t[109] === X
      ? (Ee = t[110])
      : ((Ee = (0, Q.jsxs)(_t, { children: [`Remove “`, X, `”?`] })), (t[109] = X), (t[110] = Ee));
    let Oe;
    t[111] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Oe = (0, Q.jsx)(Ct, {
          children: `Its cookies and logins are deleted. Desktop tabs already open in this profile stay open until you close them; server browser tabs close now.`,
        })),
        (t[111] = Oe))
      : (Oe = t[111]);
    let ke;
    t[112] === S
      ? (ke = t[113])
      : ((ke = S
          ? (0, Q.jsx)(`p`, {
              "aria-live": `polite`,
              className: `text-sm text-destructive`,
              children: S,
            })
          : null),
        (t[112] = S),
        (t[113] = ke));
    let Ae;
    t[114] === P
      ? (Ae = t[115])
      : ((Ae = P
          ? null
          : (0, Q.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `Connect to an environment to remove this profile and its data.`,
            })),
        (t[114] = P),
        (t[115] = Ae));
    let je;
    t[116] !== Ee || t[117] !== ke || t[118] !== Ae
      ? ((je = (0, Q.jsxs)(vt, { children: [Ee, Oe, ke, Ae] })),
        (t[116] = Ee),
        (t[117] = ke),
        (t[118] = Ae),
        (t[119] = je))
      : (je = t[119]);
    let Me;
    t[120] === T
      ? (Me = t[121])
      : ((Me = (0, Q.jsx)(b, { variant: `outline`, disabled: T })), (t[120] = T), (t[121] = Me));
    let Ne;
    t[122] !== T || t[123] !== Me
      ? ((Ne = (0, Q.jsx)(St, { disabled: T, render: Me, children: `Cancel` })),
        (t[122] = T),
        (t[123] = Me),
        (t[124] = Ne))
      : (Ne = t[124]);
    let Pe = T || !a || !P,
      Fe;
    t[125] !== g || t[126] !== P || t[127] !== te || t[128] !== a
      ? ((Fe = () => {
          g && a && P && te(g.id);
        }),
        (t[125] = g),
        (t[126] = P),
        (t[127] = te),
        (t[128] = a),
        (t[129] = Fe))
      : (Fe = t[129]);
    let Ie = T ? `Removing…` : `Remove profile`,
      Le;
    t[130] !== Pe || t[131] !== Fe || t[132] !== Ie
      ? ((Le = (0, Q.jsx)(b, { variant: `destructive`, disabled: Pe, onClick: Fe, children: Ie })),
        (t[130] = Pe),
        (t[131] = Fe),
        (t[132] = Ie),
        (t[133] = Le))
      : (Le = t[133]);
    let ze;
    t[134] !== Ne || t[135] !== Le
      ? ((ze = (0, Q.jsxs)(ht, { children: [Ne, Le] })),
        (t[134] = Ne),
        (t[135] = Le),
        (t[136] = ze))
      : (ze = t[136]);
    let Be;
    t[137] !== je || t[138] !== ze
      ? ((Be = (0, Q.jsxs)(Dt, { children: [je, ze] })),
        (t[137] = je),
        (t[138] = ze),
        (t[139] = Be))
      : (Be = t[139]);
    let Ve;
    t[140] !== we || t[141] !== Te || t[142] !== Be
      ? ((Ve = (0, Q.jsx)(gt, { open: we, onOpenChange: Te, children: Be })),
        (t[140] = we),
        (t[141] = Te),
        (t[142] = Be),
        (t[143] = Ve))
      : (Ve = t[143]);
    let He = y !== null,
      Ue;
    t[144] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ue = (e) => {
          e || x(null);
        }),
        (t[144] = Ue))
      : (Ue = t[144]);
    let We = y?.name,
      Ge;
    t[145] === We
      ? (Ge = t[146])
      : ((Ge = (0, Q.jsxs)(_t, { children: [`Clear “`, We, `”’s cookies and cache?`] })),
        (t[145] = We),
        (t[146] = Ge));
    let Ke;
    t[147] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ke = (0, Q.jsx)(Ct, {
          children: `You are signed out of its sites. Server browser tabs open in this profile close now.`,
        })),
        (t[147] = Ke))
      : (Ke = t[147]);
    let qe;
    t[148] === Ge
      ? (qe = t[149])
      : ((qe = (0, Q.jsxs)(vt, { children: [Ge, Ke] })), (t[148] = Ge), (t[149] = qe));
    let Je;
    t[150] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Je = (0, Q.jsx)(St, {
          render: (0, Q.jsx)(b, { variant: `outline` }),
          children: `Cancel`,
        })),
        (t[150] = Je))
      : (Je = t[150]);
    let Ye;
    t[151] !== V || t[152] !== y
      ? ((Ye = (0, Q.jsxs)(ht, {
          children: [
            Je,
            (0, Q.jsx)(b, {
              variant: `destructive`,
              onClick: () => {
                (y && V(y.id, y.name), x(null));
              },
              children: `Clear data`,
            }),
          ],
        })),
        (t[151] = V),
        (t[152] = y),
        (t[153] = Ye))
      : (Ye = t[153]);
    let Xe;
    t[154] !== qe || t[155] !== Ye
      ? ((Xe = (0, Q.jsxs)(Dt, { children: [qe, Ye] })),
        (t[154] = qe),
        (t[155] = Ye),
        (t[156] = Xe))
      : (Xe = t[156]);
    let Ze;
    (t[157] !== He || t[158] !== Xe
      ? ((Ze = (0, Q.jsx)(gt, { open: He, onOpenChange: Ue, children: Xe })),
        (t[157] = He),
        (t[158] = Xe),
        (t[159] = Ze))
      : (Ze = t[159]),
      (z = (0, Q.jsxs)(ae, {
        ...Y,
        description: ve,
        control: Ce,
        children: [
          (0, Q.jsx)(`div`, {
            className: `mt-2 mb-2 overflow-hidden rounded-lg border border-border/60`,
            children: e.map((e, t) => {
              let r = me(e.id),
                i = e.id === n;
              return (0, Q.jsxs)(
                `div`,
                {
                  className: ue(
                    `flex items-center gap-3 px-3 py-2`,
                    t > 0 && `border-t border-border/60`,
                  ),
                  children: [
                    (0, Q.jsxs)(`span`, {
                      className: `flex min-w-0 flex-1 items-center gap-2`,
                      children: [
                        r
                          ? (0, Q.jsx)(`span`, {
                              className: ue(`truncate text-sm text-foreground`, R && `opacity-64`),
                              children: e.name,
                            })
                          : (0, Q.jsx)(Vt, {
                              nativeInput: !0,
                              size: `sm`,
                              className: `w-full max-w-56`,
                              "aria-label": `Rename ${e.name}`,
                              disabled: R || I,
                              maxLength: 48,
                              value: e.name,
                              onCommit: (t) => k(e.id, t),
                            }),
                        i
                          ? (0, Q.jsx)(`span`, {
                              className: ue(`flex`, R && `opacity-64`),
                              children: (0, Q.jsx)(B, { children: `Default` }),
                            })
                          : null,
                      ],
                    }),
                    (0, Q.jsxs)(A, {
                      children: [
                        (0, Q.jsx)(ce, {
                          render: (0, Q.jsx)(b, {
                            size: `icon-xs`,
                            variant: `ghost-muted`,
                            disabled: R || I,
                            "aria-label": `${e.name} options`,
                          }),
                          children: (0, Q.jsx)(d, {}),
                        }),
                        (0, Q.jsxs)(ie, {
                          align: `end`,
                          children: [
                            (0, Q.jsx)(q, {
                              disabled: !a || i,
                              onClick: () => {
                                a && o({ browserDefaultProfileId: e.id });
                              },
                              children: `Set as default`,
                            }),
                            (0, Q.jsx)(q, {
                              disabled: !a || !P,
                              onClick: () => {
                                j.environmentIds.length > 0 ? x(e) : V(e.id, e.name);
                              },
                              children: `Clear cookies and cache`,
                            }),
                            r
                              ? null
                              : (0, Q.jsx)(q, {
                                  variant: `destructive`,
                                  disabled: !a || !P,
                                  onClick: () => {
                                    a && v(e);
                                  },
                                  children: `Remove profile and data`,
                                }),
                            P
                              ? null
                              : (0, Q.jsxs)(Q.Fragment, {
                                  children: [
                                    (0, Q.jsx)(se, {}),
                                    (0, Q.jsx)(q, {
                                      disabled: !0,
                                      children: c
                                        ? `Connect to an environment to clear profile data`
                                        : `Checking environments…`,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
          Ve,
          Ze,
          p
            ? (0, Q.jsx)(Yn, {
                source: p.source,
                destinationEnvironmentName: p.environmentName,
                targetProfiles: e.map(di),
                canCreateProfile: a && !G,
                onImport: (e) => le(p.source, p.environmentId, e),
                onRefreshSource: () => K(p.source.id),
                onCheckFullDiskAccess: window.desktopBridge?.checkSystemPermission ? ui : void 0,
                onOpenFullDiskAccessSettings: ci,
                onClose: () => m(null),
              })
            : null,
        ],
      })),
      (t[11] = i),
      (t[12] = s),
      (t[13] = c),
      (t[14] = I),
      (t[15] = p),
      (t[16] = l),
      (t[17] = y),
      (t[18] = g),
      (t[19] = S),
      (t[20] = T),
      (t[21] = R),
      (t[22] = P),
      (t[23] = j),
      (t[24] = a),
      (t[25] = u),
      (t[26] = o),
      (t[27] = r),
      (t[28] = z));
  } else z = t[28];
  return z;
}
async function ci() {
  await Le()?.shell.openSystemSettings(`full-disk-access`).catch(li);
}
function li() {
  Re.add({
    type: `error`,
    title: `Could not open System Settings`,
    description: `Open Privacy & Security → Full Disk Access manually.`,
  });
}
function ui() {
  return window.desktopBridge.checkSystemPermission(`full-disk-access`);
}
function di(e) {
  return { id: e.id, name: e.name };
}
function fi(e) {
  return e ?? [];
}
function pi(e) {
  return e.unavailable !== `notInstalled` && e.unavailable !== `unsupportedPlatform`;
}
function mi(e) {
  return e.environmentId;
}
function hi(e) {
  return e.environmentId;
}
function gi(e) {
  return e.name;
}
function _i(e) {
  return e.kind !== `incognito`;
}
function vi(e) {
  return e.environmentId;
}
function yi(e) {
  return e.browserDefaultProfileId;
}
function bi(e) {
  return e.browserProfiles;
}
function xi() {
  let e = (0, Z.c)(2),
    t = !z,
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(si, { disabled: t }),
          (0, Q.jsx)(xr, { disabled: t }),
          (0, Q.jsx)(wr, { disabled: t }),
          (0, Q.jsx)(Dr, { disabled: t }),
          (0, Q.jsx)(Nr, { disabled: t }),
          (0, Q.jsx)(Ar, { disabled: t }),
          (0, Q.jsx)(Lr, { disabled: t }),
          (0, Q.jsx)(ai, { disabled: t }),
        ],
      })),
      (e[0] = n))
    : (n = e[0]);
  let r = n,
    i;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsxs)(Nt, {
          children: [
            (0, Q.jsxs)(Ft, {
              id: `browser`,
              title: `Browser`,
              children: [
                (0, Q.jsx)(ii, {}),
                t
                  ? (0, Q.jsx)(jt, { message: `Only available in the desktop app.`, children: r })
                  : r,
                (0, Q.jsx)(Vr, {}),
                (0, Q.jsx)(Gr, {}),
              ],
            }),
            (0, Q.jsx)(qr, {}),
          ],
        })),
        (e[1] = i))
      : (i = e[1]),
    i
  );
}
var Si = xi;
export { Si as component };
//# sourceMappingURL=_chat.settings.integrations-MEyGGMJr.js.map
