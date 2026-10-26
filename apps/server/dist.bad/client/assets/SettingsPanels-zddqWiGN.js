import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./trash-2-Dt6v2wPw.js";
import {
  Bc as s,
  Bn as c,
  Dr as l,
  Ft as u,
  Ht as d,
  Jm as f,
  Lt as p,
  Nt as m,
  Op as h,
  PC as g,
  Sy as _,
  Um as v,
  Vn as y,
  Wm as b,
  Wn as x,
  Wt as ee,
  Wv as S,
  Yn as C,
  Yt as te,
  Zn as w,
  _r as T,
  ab as E,
  an as ne,
  cw as D,
  hr as O,
  qm as k,
} from "./utils-CPoejuy5.js";
import { F as A, L as j, R as M, x as N } from "./runtime-CY2dlMEg.js";
import { a as P, i as F, n as I, r as L, t as R } from "./number-field-D11YcDFl.js";
import { a as z, c as B, o as V, s as re, t as ie } from "./select-CBCDohvC.js";
import { B as H, H as U, K as ae, j as oe, z as se } from "./useSettings-N-JG2LFZ.js";
import { H as ce, t as le, w as ue } from "./server-3D32GveR.js";
import { n as de, t as fe } from "./localApi-CWy6n-K6.js";
import { i as W } from "./toast-B4KPIJDZ.js";
import { n as pe } from "./useNavigate-Dq4t21kA.js";
import { t as me } from "./link-BAk08nHo.js";
import { t as G } from "./toastHelpers-CSQRKo4F.js";
import "./FontFamilyPicker-boEpB1n_.js";
import { t as he } from "./textarea-C9Xds9D7.js";
import {
  a as ge,
  c as _e,
  l as ve,
  n as ye,
  o as be,
  s as xe,
  u as Se,
} from "./dialog-BjeWpelT.js";
import { n as Ce, r as we, t as Te } from "./collapsible-Dp2CGco9.js";
import { i as Ee, n as De } from "./Icons-Blot99re.js";
import { y as Oe } from "./AttachmentImage-CVVc-nYA.js";
import {
  a as ke,
  c as Ae,
  d as je,
  f as Me,
  h as Ne,
  i as Pe,
  t as Fe,
} from "./desktopUpdate.logic-CfgaU7gC.js";
import { l as K } from "./settingsSearch-CrEaqXdW.js";
import { Rs as q, as as Ie, es as Le, is as Re, ol as ze, rs as Be } from "./main-BZa0O6xN.js";
import {
  _ as Ve,
  a as J,
  d as He,
  g as Ue,
  i as We,
  n as Ge,
  p as Ke,
  r as Y,
  s as qe,
  t as Je,
  u as Ye,
  v as Xe,
  x as Ze,
  y as Qe,
} from "./settingsLayout-2i87rQY9.js";
import { t as $e } from "./ScopedSwitch-eETzzyfB.js";
import { t as et } from "./qr-code-BWQ3g0-g.js";
import { t as tt } from "./legalLinks-BaIJY52l.js";
import { t as nt } from "./ProviderModelPicker-5TbK_TR9.js";
import { t as rt } from "./useScopedModelAvailability-DCWbURg7.js";
import { t as it } from "./draft-input-C3knK-UD.js";
import {
  a as at,
  c as ot,
  d as st,
  f as ct,
  i as lt,
  l as ut,
  n as dt,
  o as ft,
  p as pt,
  s as mt,
  t as ht,
  u as gt,
} from "./SettingsPanels.logic-BoQ9AIFf.js";
var X = n(),
  Z = e(t(), 1),
  Q = e(r(), 1);
function _t() {
  let e = (0, X.c)(15),
    t = typeof window > `u` ? void 0 : window.desktopBridge?.cliCommand,
    [n, r] = (0, Z.useState)(null),
    [i, a] = (0, Z.useState)(!1),
    o,
    s;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        if (!t) return;
        let e = !1;
        return (
          t
            .getState()
            .then((t) => {
              e || r(t);
            })
            .catch(vt),
          () => {
            e = !0;
          }
        );
      }),
      (s = [t]),
      (e[0] = o),
      (e[1] = s))
    : ((o = e[0]), (s = e[1])),
    (0, Z.useEffect)(o, s));
  let c;
  e[2] === i
    ? (c = e[3])
    : ((c = (e) => {
        t &&
          !i &&
          (a(!0),
          t[e]()
            .then(r)
            .catch((t) => {
              W.add(
                G({
                  type: `error`,
                  title: e === `install` ? `Could not install t3` : `Could not remove t3`,
                  description: t instanceof Error ? t.message : `Something went wrong.`,
                }),
              );
            })
            .finally(() => a(!1)));
      }),
      (e[2] = i),
      (e[3] = c));
  let u = c;
  if (!t || !n?.supported) return null;
  let d = n.installedPath !== null,
    f = n.shadowedBy
      ? `Another t3 at ${n.shadowedBy} runs first in a new terminal. Remove it to use T3 Code's.`
      : d
        ? n.onPath
          ? `Installed at ${n.installedPath}. Open a new terminal to use it.`
          : `Installed at ${n.installedPath}, which is not on your PATH yet. Add its folder to your PATH to run \`t3\`.`
        : "Run T3 Code's CLI as `t3` from any terminal.",
    p;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = K(`cli-command`)), (e[4] = p))
    : (p = e[4]);
  let m;
  e[5] !== u || e[6] !== d
    ? ((m = () => u(d ? `uninstall` : `install`)), (e[5] = u), (e[6] = d), (e[7] = m))
    : (m = e[7]);
  let h = d ? `Remove` : `Install`,
    g;
  e[8] !== i || e[9] !== m || e[10] !== h
    ? ((g = (0, Q.jsx)(l, {
        size: `sm`,
        variant: `outline`,
        disabled: i,
        onClick: m,
        children: h,
      })),
      (e[8] = i),
      (e[9] = m),
      (e[10] = h),
      (e[11] = g))
    : (g = e[11]);
  let _;
  return (
    e[12] !== f || e[13] !== g
      ? ((_ = (0, Q.jsx)(J, { ...p, description: f, control: g })),
        (e[12] = f),
        (e[13] = g),
        (e[14] = _))
      : (_ = e[14]),
    _
  );
}
function vt() {}
var yt = [
  {
    label: `iPhone and iPad`,
    store: `App Store`,
    url: `https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824`,
    Icon: Ee,
  },
  {
    label: `Android`,
    store: `Google Play`,
    url: `https://play.google.com/store/apps/details?id=com.t3tools.t3code`,
    Icon: De,
  },
];
function bt() {
  let e = (0, X.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = K(`mobile-app`)), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(J, {
          ...t,
          description: `Connect to your server from your phone or tablet.`,
          control: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: yt.map(xt),
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function xt(e) {
  let { label: t, store: n, url: r, Icon: i } = e;
  return (0, Q.jsxs)(
    Le,
    {
      children: [
        (0, Q.jsxs)(Ie, {
          render: (0, Q.jsx)(l, { size: `sm`, variant: `outline` }),
          children: [(0, Q.jsx)(i, {}), t],
        }),
        (0, Q.jsx)(Be, {
          align: `end`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center gap-3`,
            children: [
              (0, Q.jsx)(Re, { children: n }),
              (0, Q.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: `Scan with your phone camera.`,
              }),
              (0, Q.jsx)(`div`, {
                className: `rounded-lg bg-white p-1.5`,
                children: (0, Q.jsx)(et, {
                  value: r,
                  size: 128,
                  level: `M`,
                  marginSize: 1,
                  title: `${n} link`,
                }),
              }),
              (0, Q.jsxs)(l, {
                size: `sm`,
                variant: `outline`,
                render: (0, Q.jsx)(`a`, { href: r, target: `_blank`, rel: `noreferrer noopener` }),
                children: [`Open `, n],
              }),
            ],
          }),
        }),
      ],
    },
    n,
  );
}
function St() {
  let e = (0, X.c)(22),
    t = Ue(),
    { targets: n } = Ze(),
    r;
  e[0] === n ? (r = e[1]) : ((r = n.map(Ct).join(`,`)), (e[0] = n), (e[1] = r));
  let i = r,
    a = (0, Z.useRef)(!1),
    o = Qe(),
    s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = [`threadTitleInstructions`]), (e[2] = s))
    : (s = e[2]);
  let c = Ve(s),
    l,
    u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [`threadTitleInstructions`]),
      (u = K(`thread-title-instructions`)),
      (e[3] = l),
      (e[4] = u))
    : ((l = e[3]), (u = e[4]));
  let d;
  e[5] !== c || e[6] !== t.threadTitleInstructions || e[7] !== o
    ? ((d =
        c || t.threadTitleInstructions !== ``
          ? (0, Q.jsx)(Y, {
              label: `thread title instructions`,
              onClick: () => o({ threadTitleInstructions: `` }),
            })
          : null),
      (e[5] = c),
      (e[6] = t.threadTitleInstructions),
      (e[7] = o),
      (e[8] = d))
    : (d = e[8]);
  let f = `${i}:${c}:${t.threadTitleInstructions}`,
    p;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        a.current = !0;
      }),
      (e[9] = p))
    : (p = e[9]);
  let m = c ? `` : t.threadTitleInstructions,
    h = c
      ? `Mixed. Enter instructions to apply to all selected targets.`
      : `Keep titles to a few words. Lead with the main subject.`,
    g;
  e[10] !== c || e[11] !== t.threadTitleInstructions || e[12] !== o
    ? ((g = (e) => {
        let n = e.target.value.trim();
        (a.current && (c || n !== t.threadTitleInstructions) && o({ threadTitleInstructions: n }),
          (a.current = !1));
      }),
      (e[10] = c),
      (e[11] = t.threadTitleInstructions),
      (e[12] = o),
      (e[13] = g))
    : (g = e[13]);
  let _;
  e[14] !== f || e[15] !== m || e[16] !== h || e[17] !== g
    ? ((_ = (0, Q.jsx)(`div`, {
        className: `mt-3 max-w-2xl pb-3.5`,
        children: (0, Q.jsx)(
          he,
          {
            "aria-label": `Thread title instructions`,
            onChange: p,
            rows: 4,
            defaultValue: m,
            placeholder: h,
            onBlur: g,
          },
          f,
        ),
      })),
      (e[14] = f),
      (e[15] = m),
      (e[16] = h),
      (e[17] = g),
      (e[18] = _))
    : (_ = e[18]);
  let v;
  return (
    e[19] !== _ || e[20] !== d
      ? ((v = (0, Q.jsx)(J, {
          serverScoped: !0,
          settingKeys: l,
          ...u,
          description: `Appended to the prompt for new and regenerated thread titles.`,
          resetAction: d,
          children: _,
        })),
        (e[19] = _),
        (e[20] = d),
        (e[21] = v))
      : (v = e[21]),
    v
  );
}
function Ct(e) {
  return `${e.environmentId}:${e.projectId}`;
}
function wt(e) {
  let t = (0, X.c)(4),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = []), (t[0] = n)) : (n = t[0]);
  let [r, i] = (0, Z.useState)(n),
    a,
    o;
  return (
    t[1] === e
      ? ((a = t[2]), (o = t[3]))
      : ((a = () => {
          let t = e.replace(/\/+$/, ``),
            n = !1;
          return (
            fetch(`${t}/v1/audio/voices`)
              .then(Dt)
              .then((e) => {
                if (n || e === null) return;
                let t = e.voices;
                Array.isArray(t) && i(t.filter(Et));
              })
              .catch(Tt),
            () => {
              n = !0;
            }
          );
        }),
        (o = [e]),
        (t[1] = e),
        (t[2] = a),
        (t[3] = o)),
    (0, Z.useEffect)(a, o),
    r
  );
}
function Tt() {}
function Et(e) {
  return typeof e == `string`;
}
function Dt(e) {
  return e.ok ? e.json() : null;
}
var $ = { balanced: `Balanced`, performance: `Performance`, "battery-saver": `Battery saver` },
  Ot = { ...$, advanced: `Advanced` },
  kt = {
    balanced: `Pauses probes for idle clients, locked hosts, or low power mode.`,
    performance: `Allows scoped background probes while any subscribed client remains connected.`,
    "battery-saver": `Also pauses background probes when the host or client is on battery.`,
  },
  At = `Uses custom intervals.`,
  jt = [
    { key: `pauseWhenHostLocked`, label: `Pause when host is locked` },
    { key: `pauseWhenHostLowPower`, label: `Pause on host low power` },
    { key: `pauseWhenClientLowPower`, label: `Pause on client low power` },
    { key: `pauseWhenOnBattery`, label: `Pause on battery` },
  ];
function Mt() {
  return { backgroundActivity: v.backgroundActivity };
}
function Nt(e) {
  return { backgroundActivity: { schemaVersion: 1, profile: e, overrides: {} } };
}
function Pt(e) {
  let t = (0, X.c)(98),
    { open: n, onOpenChange: r } = e,
    i = Xe(),
    a = Ue(),
    o = Qe(),
    s,
    c,
    u,
    d,
    f,
    p;
  t[0] === a
    ? ((s = t[1]), (c = t[2]), (u = t[3]), (d = t[4]), (f = t[5]), (p = t[6]))
    : ((f = ce(a)),
      (s = f.profile),
      (c = lt(f.automaticGitFetchInterval)),
      (d = lt(f.providerHealthRefreshInterval)),
      (u = lt(f.hostPowerMonitorActiveInterval)),
      (p = lt(f.hostPowerMonitorIdleInterval)),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p));
  let m = p,
    h = n && i,
    _;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsxs)(xe, {
        children: [
          (0, Q.jsx)(Se, { children: `Background Activity` }),
          (0, Q.jsx)(ge, {
            children: `Tune the shared power policy and the background intervals that feed it.`,
          }),
        ],
      })),
      (t[7] = _))
    : (_ = t[7]);
  let v = !i,
    y;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, Q.jsx)(`div`, { className: `text-sm font-medium`, children: `Shared policy` }),
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-relaxed text-muted-foreground`,
            children: `Controls whether background work may run after a subscribed interval fires.`,
          }),
        ],
      })),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== a || t[10] !== o
    ? ((b = (e) => {
        (e === `balanced` || e === `performance` || e === `battery-saver`) &&
          o({ backgroundActivity: dt(a, e) });
      }),
      (t[9] = a),
      (t[10] = o),
      (t[11] = b))
    : (b = t[11]);
  let x = $[s],
    ee;
  t[12] === x
    ? (ee = t[13])
    : ((ee = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Shared background policy`,
        children: (0, Q.jsx)(B, { children: x }),
      })),
      (t[12] = x),
      (t[13] = ee));
  let S;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, Q.jsx)(z, { hideIndicator: !0, value: `balanced`, children: $.balanced }),
          (0, Q.jsx)(z, { hideIndicator: !0, value: `performance`, children: $.performance }),
          (0, Q.jsx)(z, {
            hideIndicator: !0,
            value: `battery-saver`,
            children: $[`battery-saver`],
          }),
        ],
      })),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== s || t[16] !== b || t[17] !== ee
    ? ((C = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [y, (0, Q.jsxs)(ie, { value: s, onValueChange: b, children: [ee, S] })],
      })),
      (t[15] = s),
      (t[16] = b),
      (t[17] = ee),
      (t[18] = C))
    : (C = t[18]);
  let te;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, Q.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: K(`git-fetch-interval`).title,
          }),
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-relaxed text-muted-foreground`,
            children: `Refresh remote branch status in the background.`,
          }),
        ],
      })),
      (t[19] = te))
    : (te = t[19]);
  let w;
  t[20] !== f || t[21] !== a.backgroundActivity || t[22] !== o
    ? ((w = (e) => o(ht(a.backgroundActivity, f, { automaticGitFetchInterval: g(ut(e)) }))),
      (t[20] = f),
      (t[21] = a.backgroundActivity),
      (t[22] = o),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsxs)(L, {
        children: [
          (0, Q.jsx)(I, { "aria-label": `Decrease Git fetch interval` }),
          (0, Q.jsx)(P, { "aria-label": `Git fetch interval in seconds` }),
          (0, Q.jsx)(F, { "aria-label": `Increase Git fetch interval` }),
        ],
      })),
      (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] !== c || t[26] !== w
    ? ((E = (0, Q.jsx)(R, {
        value: c,
        min: 0,
        step: 5,
        size: `sm`,
        className: `w-32`,
        onValueChange: w,
        children: T,
      })),
      (t[25] = c),
      (t[26] = w),
      (t[27] = E))
    : (E = t[27]);
  let ne;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Q.jsx)(`span`, {
        className: `text-xs text-muted-foreground`,
        children: `seconds`,
      })),
      (t[28] = ne))
    : (ne = t[28]);
  let D;
  t[29] === E
    ? (D = t[30])
    : ((D = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          te,
          (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [E, ne] }),
        ],
      })),
      (t[29] = E),
      (t[30] = D));
  let O;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, Q.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: `Provider health interval`,
          }),
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-relaxed text-muted-foreground`,
            children: `Refresh provider availability, versions, and auth state. Model catalog updates follow Provider update checks.`,
          }),
        ],
      })),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== f || t[33] !== a.backgroundActivity || t[34] !== o
    ? ((k = (e) => o(ht(a.backgroundActivity, f, { providerHealthRefreshInterval: g(ut(e)) }))),
      (t[32] = f),
      (t[33] = a.backgroundActivity),
      (t[34] = o),
      (t[35] = k))
    : (k = t[35]);
  let A;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsxs)(L, {
        children: [
          (0, Q.jsx)(I, { "aria-label": `Decrease provider health interval` }),
          (0, Q.jsx)(P, { "aria-label": `Provider health interval in seconds` }),
          (0, Q.jsx)(F, { "aria-label": `Increase provider health interval` }),
        ],
      })),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] !== d || t[38] !== k
    ? ((j = (0, Q.jsx)(R, {
        value: d,
        min: 0,
        step: 30,
        size: `sm`,
        className: `w-32`,
        onValueChange: k,
        children: A,
      })),
      (t[37] = d),
      (t[38] = k),
      (t[39] = j))
    : (j = t[39]);
  let M;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(`span`, {
        className: `text-xs text-muted-foreground`,
        children: `seconds`,
      })),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] === j
    ? (N = t[42])
    : ((N = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          O,
          (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [j, M] }),
        ],
      })),
      (t[41] = j),
      (t[42] = N));
  let H;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, Q.jsx)(`div`, { className: `text-sm font-medium`, children: `Host power monitor` }),
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-relaxed text-muted-foreground`,
            children: `Poll host power state while clients are active.`,
          }),
        ],
      })),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] !== f || t[45] !== a.backgroundActivity || t[46] !== o
    ? ((U = (e) => o(ht(a.backgroundActivity, f, { hostPowerMonitorActiveInterval: g(ut(e, 5)) }))),
      (t[44] = f),
      (t[45] = a.backgroundActivity),
      (t[46] = o),
      (t[47] = U))
    : (U = t[47]);
  let ae;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Q.jsxs)(L, {
        children: [
          (0, Q.jsx)(I, { "aria-label": `Decrease active host power interval` }),
          (0, Q.jsx)(P, { "aria-label": `Active host power interval in seconds` }),
          (0, Q.jsx)(F, { "aria-label": `Increase active host power interval` }),
        ],
      })),
      (t[48] = ae))
    : (ae = t[48]);
  let oe;
  t[49] !== u || t[50] !== U
    ? ((oe = (0, Q.jsx)(R, {
        value: u,
        min: 5,
        step: 5,
        size: `sm`,
        className: `w-32`,
        onValueChange: U,
        children: ae,
      })),
      (t[49] = u),
      (t[50] = U),
      (t[51] = oe))
    : (oe = t[51]);
  let se;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(`span`, {
        className: `text-xs text-muted-foreground`,
        children: `seconds`,
      })),
      (t[52] = se))
    : (se = t[52]);
  let le;
  t[53] === oe
    ? (le = t[54])
    : ((le = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          H,
          (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [oe, se] }),
        ],
      })),
      (t[53] = oe),
      (t[54] = le));
  let ue;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsxs)(`div`, {
        className: `min-w-0 space-y-1`,
        children: [
          (0, Q.jsx)(`div`, { className: `text-sm font-medium`, children: `Idle host monitor` }),
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-relaxed text-muted-foreground`,
            children: `Poll host power state when no foreground client is active.`,
          }),
        ],
      })),
      (t[55] = ue))
    : (ue = t[55]);
  let de;
  t[56] !== f || t[57] !== a.backgroundActivity || t[58] !== o
    ? ((de = (e) => o(ht(a.backgroundActivity, f, { hostPowerMonitorIdleInterval: g(ut(e, 5)) }))),
      (t[56] = f),
      (t[57] = a.backgroundActivity),
      (t[58] = o),
      (t[59] = de))
    : (de = t[59]);
  let fe;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsxs)(L, {
        children: [
          (0, Q.jsx)(I, { "aria-label": `Decrease idle host power interval` }),
          (0, Q.jsx)(P, { "aria-label": `Idle host power interval in seconds` }),
          (0, Q.jsx)(F, { "aria-label": `Increase idle host power interval` }),
        ],
      })),
      (t[60] = fe))
    : (fe = t[60]);
  let W;
  t[61] !== m || t[62] !== de
    ? ((W = (0, Q.jsx)(R, {
        value: m,
        min: 5,
        step: 30,
        size: `sm`,
        className: `w-32`,
        onValueChange: de,
        children: fe,
      })),
      (t[61] = m),
      (t[62] = de),
      (t[63] = W))
    : (W = t[63]);
  let pe;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(`span`, {
        className: `text-xs text-muted-foreground`,
        children: `seconds`,
      })),
      (t[64] = pe))
    : (pe = t[64]);
  let me;
  t[65] === W
    ? (me = t[66])
    : ((me = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          ue,
          (0, Q.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [W, pe] }),
        ],
      })),
      (t[65] = W),
      (t[66] = me));
  let G;
  t[67] !== f || t[68] !== a.backgroundActivity || t[69] !== o
    ? ((G = jt.map((e) => {
        let { key: t, label: n } = e;
        return (0, Q.jsxs)(
          `label`,
          {
            className: `flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0 sm:border-r sm:even:border-r-0`,
            children: [
              (0, Q.jsx)(`span`, { className: `text-sm font-medium`, children: n }),
              (0, Q.jsx)(q, {
                checked: f[t],
                onCheckedChange: (e) => o(ht(a.backgroundActivity, f, { [t]: !!e })),
                "aria-label": n,
              }),
            ],
          },
          t,
        );
      })),
      (t[67] = f),
      (t[68] = a.backgroundActivity),
      (t[69] = o),
      (t[70] = G))
    : (G = t[70]);
  let he;
  t[71] === G
    ? (he = t[72])
    : ((he = (0, Q.jsx)(`div`, { className: `grid gap-0 border-t sm:grid-cols-2`, children: G })),
      (t[71] = G),
      (t[72] = he));
  let Ce;
  t[73] !== C ||
  t[74] !== D ||
  t[75] !== N ||
  t[76] !== le ||
  t[77] !== me ||
  t[78] !== he ||
  t[79] !== v
    ? ((Ce = (0, Q.jsx)(_e, {
        children: (0, Q.jsxs)(`fieldset`, {
          disabled: v,
          className: `min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground`,
          children: [C, D, N, le, me, he],
        }),
      })),
      (t[73] = C),
      (t[74] = D),
      (t[75] = N),
      (t[76] = le),
      (t[77] = me),
      (t[78] = he),
      (t[79] = v),
      (t[80] = Ce))
    : (Ce = t[80]);
  let we = !i,
    Te;
  t[81] === o ? (Te = t[82]) : ((Te = () => o(Mt())), (t[81] = o), (t[82] = Te));
  let Ee;
  t[83] !== we || t[84] !== Te
    ? ((Ee = (0, Q.jsx)(l, {
        variant: `outline`,
        disabled: we,
        onClick: Te,
        children: `Reset all`,
      })),
      (t[83] = we),
      (t[84] = Te),
      (t[85] = Ee))
    : (Ee = t[85]);
  let De;
  t[86] === r
    ? (De = t[87])
    : ((De = (0, Q.jsx)(l, { onClick: () => r(!1), children: `Done` })), (t[86] = r), (t[87] = De));
  let Oe;
  t[88] !== Ee || t[89] !== De
    ? ((Oe = (0, Q.jsxs)(be, { children: [Ee, De] })), (t[88] = Ee), (t[89] = De), (t[90] = Oe))
    : (Oe = t[90]);
  let ke;
  t[91] !== Ce || t[92] !== Oe
    ? ((ke = (0, Q.jsxs)(ve, { className: `max-w-xl`, children: [_, Ce, Oe] })),
      (t[91] = Ce),
      (t[92] = Oe),
      (t[93] = ke))
    : (ke = t[93]);
  let Ae;
  return (
    t[94] !== r || t[95] !== h || t[96] !== ke
      ? ((Ae = (0, Q.jsx)(ye, { open: h, onOpenChange: r, children: ke })),
        (t[94] = r),
        (t[95] = h),
        (t[96] = ke),
        (t[97] = Ae))
      : (Ae = t[97]),
    Ae
  );
}
function Ft() {
  let e = (0, X.c)(39),
    t = Ue(),
    n = Qe(),
    { scope: r, environment: i } = Ze(),
    a = i?.environmentId ?? null,
    o = r.environmentIds.length === 1 && a !== null,
    [s, u] = (0, Z.useState)(!1),
    d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [`backgroundActivity`]), (e[0] = d))
    : (d = e[0]);
  let f = Ve(d),
    p = ce(t),
    m = p.profile,
    h;
  e[1] === t ? (h = e[2]) : ((h = pt(t)), (e[1] = t), (e[2] = h));
  let g = h,
    _ = g === `advanced` ? `${At} Shared policy: ${$[m]}.` : kt[p.profile],
    b;
  e[3] === t.backgroundActivity
    ? (b = e[4])
    : ((b = D(t.backgroundActivity, v.backgroundActivity)),
      (e[3] = t.backgroundActivity),
      (e[4] = b));
  let ee = !b,
    S,
    C;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = [`backgroundActivity`]), (C = K(`background-activity`)), (e[5] = S), (e[6] = C))
    : ((S = e[5]), (C = e[6]));
  let te = C.id,
    w;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = K(`background-activity`)), (e[7] = w))
    : (w = e[7]);
  let T;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5`,
        children: [
          w.title,
          (0, Q.jsx)(Je, {
            children: `This shared policy gates background work such as Git refreshes and provider health probes after their individual intervals elapse.`,
          }),
        ],
      })),
      (e[8] = T))
    : (T = e[8]);
  let E;
  e[9] !== ee || e[10] !== n
    ? ((E = ee ? (0, Q.jsx)(Y, { label: `background activity`, onClick: () => n(Mt()) }) : null),
      (e[9] = ee),
      (e[10] = n),
      (e[11] = E))
    : (E = e[11]);
  let ne = f ? null : g,
    O;
  e[12] !== o || e[13] !== n
    ? ((O = (e) => {
        e === `advanced`
          ? o && u(!0)
          : (e === `balanced` || e === `performance` || e === `battery-saver`) && n(Nt(e));
      }),
      (e[12] = o),
      (e[13] = n),
      (e[14] = O))
    : (O = e[14]);
  let k;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Background activity profile`,
        children: (0, Q.jsx)(B, { children: It }),
      })),
      (e[15] = k))
    : (k = e[15]);
  let A, j, M;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(z, { hideIndicator: !0, value: `balanced`, children: $.balanced })),
      (j = (0, Q.jsx)(z, { hideIndicator: !0, value: `performance`, children: $.performance })),
      (M = (0, Q.jsx)(z, {
        hideIndicator: !0,
        value: `battery-saver`,
        children: $[`battery-saver`],
      })),
      (e[16] = A),
      (e[17] = j),
      (e[18] = M))
    : ((A = e[16]), (j = e[17]), (M = e[18]));
  let N = !o,
    P = o ? Ot.advanced : `${Ot.advanced} (one environment)`,
    F;
  e[19] !== N || e[20] !== P
    ? ((F = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          A,
          j,
          M,
          (0, Q.jsx)(z, { hideIndicator: !0, value: `advanced`, disabled: N, children: P }),
        ],
      })),
      (e[19] = N),
      (e[20] = P),
      (e[21] = F))
    : (F = e[21]);
  let I;
  e[22] !== O || e[23] !== F || e[24] !== ne
    ? ((I = (0, Q.jsxs)(ie, { value: ne, onValueChange: O, children: [k, F] })),
      (e[22] = O),
      (e[23] = F),
      (e[24] = ne),
      (e[25] = I))
    : (I = e[25]);
  let L;
  e[26] !== g || e[27] !== o
    ? ((L =
        g === `advanced` && o
          ? (0, Q.jsxs)(c, {
              children: [
                (0, Q.jsx)(x, {
                  render: (0, Q.jsx)(l, {
                    size: `icon-sm`,
                    variant: `outline`,
                    "aria-label": `Configure advanced background activity`,
                    onClick: () => u(!0),
                    children: (0, Q.jsx)(ze, { className: `size-4` }),
                  }),
                }),
                (0, Q.jsx)(y, { side: `top`, children: `Configure background activity` }),
              ],
            })
          : null),
      (e[26] = g),
      (e[27] = o),
      (e[28] = L))
    : (L = e[28]);
  let R = s && o,
    H;
  e[29] === R
    ? (H = e[30])
    : ((H = (0, Q.jsx)(Pt, { open: R, onOpenChange: u })), (e[29] = R), (e[30] = H));
  let U;
  e[31] !== I || e[32] !== L || e[33] !== H
    ? ((U = (0, Q.jsxs)(Q.Fragment, { children: [I, L, H] })),
      (e[31] = I),
      (e[32] = L),
      (e[33] = H),
      (e[34] = U))
    : (U = e[34]);
  let ae;
  return (
    e[35] !== _ || e[36] !== U || e[37] !== E
      ? ((ae = (0, Q.jsx)(J, {
          serverScoped: !0,
          settingKeys: S,
          id: te,
          title: T,
          description: _,
          resetAction: E,
          control: U,
        })),
        (e[35] = _),
        (e[36] = U),
        (e[37] = E),
        (e[38] = ae))
      : (ae = e[38]),
    ae
  );
}
function It(e) {
  return e === null ? `Mixed` : Ot[e];
}
var Lt = (e) => e.replace(/\/+$/, ``),
  Rt = (e) => typeof e == `object` && !!e,
  zt = (e, t) => (typeof e == `string` ? e : t),
  Bt = (e) => (e === `downloading` || e === `installed` || e === `error` ? e : `idle`);
function Vt(e) {
  if (!Rt(e)) return null;
  let t = e.id;
  if (typeof t != `string` || t.length === 0) return null;
  let n = e.progress;
  return {
    id: t,
    name: zt(e.name, t),
    sizeLabel: zt(e.sizeLabel, ``),
    license: zt(e.license, ``),
    installed: e.installed === !0,
    active: e.active === !0,
    state: Bt(e.state),
    progress: typeof n == `number` && Number.isFinite(n) ? n : 0,
    detail: typeof e.detail == `string` ? e.detail : null,
  };
}
async function Ht(e, t, n) {
  try {
    return await fetch(`${Lt(e)}${t}`, n);
  } catch {
    return null;
  }
}
async function Ut(e) {
  let t = await Ht(e, `/v1/models`, { headers: { accept: `application/json` } });
  if (t === null || !t.ok) return null;
  try {
    let e = await t.json();
    return !Rt(e) || !Array.isArray(e.models) ? null : e.models.map(Vt).filter((e) => e !== null);
  } catch {
    return null;
  }
}
async function Wt(e, t) {
  let n = await Ht(e, `/v1/models/${encodeURIComponent(t)}/install`, { method: `POST` });
  return n === null || !n.ok ? null : Vt(await n.json().catch(() => null));
}
async function Gt(e, t) {
  let n = await Ht(e, `/v1/models/${encodeURIComponent(t)}/activate`, { method: `POST` });
  return n === null || !n.ok ? null : Vt(await n.json().catch(() => null));
}
async function Kt(e, t) {
  let n = await Ht(e, `/v1/models/${encodeURIComponent(t)}`, { method: `DELETE` });
  return n !== null && n.ok;
}
var qt = 1500,
  Jt = (e) => e.replace(/\/+$/, ``);
function Yt(e) {
  let t = (0, X.c)(28),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = []), (t[0] = n)) : (n = t[0]);
  let [r, i] = (0, Z.useState)(n),
    a;
  t[1] === e ? (a = t[2]) : ((a = Jt(e)), (t[1] = e), (t[2] = a));
  let o = a,
    s,
    c;
  (t[3] === o
    ? ((s = t[4]), (c = t[5]))
    : ((s = () => {
        let e = !1;
        return (
          Ut(o).then((t) => {
            !e && t !== null && i(t);
          }),
          () => {
            e = !0;
          }
        );
      }),
      (c = [o]),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c)),
    (0, Z.useEffect)(s, c));
  let l;
  t[6] === r ? (l = t[7]) : ((l = r.some(Xt)), (t[6] = r), (t[7] = l));
  let u = l,
    d,
    f;
  (t[8] !== o || t[9] !== u
    ? ((d = () => {
        if (!u) return;
        let e = setInterval(() => {
          Ut(o).then((e) => {
            e !== null && i(e);
          });
        }, qt);
        return () => clearInterval(e);
      }),
      (f = [u, o]),
      (t[8] = o),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f))
    : ((d = t[10]), (f = t[11])),
    (0, Z.useEffect)(d, f));
  let p;
  t[12] === o
    ? (p = t[13])
    : ((p = async () => {
        let e = await Ut(o);
        e !== null && i(e);
      }),
      (t[12] = o),
      (t[13] = p));
  let m = p,
    h;
  t[14] !== o || t[15] !== m
    ? ((h = async (e) => {
        (await Wt(o, e), await m());
      }),
      (t[14] = o),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g = h,
    _;
  t[17] !== o || t[18] !== m
    ? ((_ = async (e) => {
        (await Kt(o, e), await m());
      }),
      (t[17] = o),
      (t[18] = m),
      (t[19] = _))
    : (_ = t[19]);
  let v = _,
    y;
  t[20] !== o || t[21] !== m
    ? ((y = async (e) => {
        (await Gt(o, e), await m());
      }),
      (t[20] = o),
      (t[21] = m),
      (t[22] = y))
    : (y = t[22]);
  let b = y,
    x;
  return (
    t[23] !== b || t[24] !== g || t[25] !== r || t[26] !== v
      ? ((x = { models: r, install: g, remove: v, activate: b }),
        (t[23] = b),
        (t[24] = g),
        (t[25] = r),
        (t[26] = v),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
function Xt(e) {
  return e.state === `downloading`;
}
function Zt(e) {
  return `${Math.round(Math.min(100, Math.max(0, e)))}%`;
}
function Qt(e) {
  let t = (0, X.c)(22),
    { model: n, onInstall: r, onRemove: i, onActivate: a } = e;
  if (n.state === `downloading`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(O, { size: `xs` })), (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] === n.progress ? (r = t[2]) : ((r = Zt(n.progress)), (t[1] = n.progress), (t[2] = r));
    let i;
    return (
      t[3] === r
        ? (i = t[4])
        : ((i = (0, Q.jsxs)(l, { size: `xs`, variant: `outline`, disabled: !0, children: [e, r] })),
          (t[3] = r),
          (t[4] = i)),
      i
    );
  }
  if (n.installed && n.active) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(w, { variant: `success`, size: `sm`, children: `Active` })), (t[5] = e))
      : (e = t[5]);
    let r = `Delete ${n.name}`,
      a;
    t[6] !== n.id || t[7] !== i
      ? ((a = () => i(n.id)), (t[6] = n.id), (t[7] = i), (t[8] = a))
      : (a = t[8]);
    let s;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Q.jsx)(o, {})), (t[9] = s))
      : (s = t[9]);
    let u;
    t[10] !== r || t[11] !== a
      ? ((u = (0, Q.jsx)(x, {
          render: (0, Q.jsx)(l, {
            size: `icon-xs`,
            variant: `ghost-destructive`,
            "aria-label": r,
            onClick: a,
            children: s,
          }),
        })),
        (t[10] = r),
        (t[11] = a),
        (t[12] = u))
      : (u = t[12]);
    let d;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)(y, { side: `top`, children: `Delete model` })), (t[13] = d))
      : (d = t[13]);
    let f;
    return (
      t[14] === u
        ? (f = t[15])
        : ((f = (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [e, (0, Q.jsxs)(c, { children: [u, d] })],
          })),
          (t[14] = u),
          (t[15] = f)),
      f
    );
  }
  if (n.installed) {
    let e;
    return (
      t[16] !== n.id || t[17] !== a
        ? ((e = (0, Q.jsx)(l, {
            size: `xs`,
            variant: `outline`,
            onClick: () => a(n.id),
            children: `Activate`,
          })),
          (t[16] = n.id),
          (t[17] = a),
          (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  let s;
  return (
    t[19] !== n.id || t[20] !== r
      ? ((s = (0, Q.jsx)(l, {
          size: `xs`,
          variant: `outline`,
          onClick: () => r(n.id),
          children: `Download`,
        })),
        (t[19] = n.id),
        (t[20] = r),
        (t[21] = s))
      : (s = t[21]),
    s
  );
}
function $t(e) {
  let t = (0, X.c)(11),
    { serverUrl: n } = e,
    { models: r, install: i, remove: a, activate: o } = Yt(n);
  if (r.length === 0) return null;
  let s;
  if (t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== a) {
    let e;
    (t[5] !== o || t[6] !== i || t[7] !== a
      ? ((e = (e) =>
          (0, Q.jsx)(
            J,
            {
              title: (0, Q.jsxs)(`span`, {
                className: `flex flex-wrap items-baseline gap-1.5`,
                children: [
                  e.name,
                  e.sizeLabel
                    ? (0, Q.jsx)(`span`, {
                        className: `text-xs font-normal text-muted-foreground`,
                        children: e.sizeLabel,
                      })
                    : null,
                ],
              }),
              description:
                e.state === `error` && e.detail
                  ? (0, Q.jsx)(`span`, { className: `text-destructive`, children: e.detail })
                  : e.license,
              control: (0, Q.jsx)(Qt, {
                model: e,
                onInstall: (e) => void i(e),
                onRemove: (e) => void a(e),
                onActivate: (e) => void o(e),
              }),
            },
            e.id,
          )),
        (t[5] = o),
        (t[6] = i),
        (t[7] = a),
        (t[8] = e))
      : (e = t[8]),
      (s = r.map(e)),
      (t[0] = o),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a),
      (t[4] = s));
  } else s = t[4];
  let c;
  return (
    t[9] === s
      ? (c = t[10])
      : ((c = (0, Q.jsx)(Q.Fragment, { children: s })), (t[9] = s), (t[10] = c)),
    c
  );
}
var en = { turn: `Wait for the full response`, paragraph: `Show finished paragraphs` },
  tn = {
    turn: `Text appears once the agent finishes its turn.`,
    paragraph: `Each paragraph or code block appears as soon as it is complete.`,
  },
  nn = { updated_at: `Last user message`, created_at: `Created at`, manual: `Manual` },
  rn = E(k),
  an = { locale: `System default`, "12-hour": `12-hour`, "24-hour": `24-hour` },
  on = { stacked: `Stacked`, split: `Split` },
  sn = S.make(`codex`);
function cn() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`span`, {
          className: `inline-flex items-baseline gap-2`,
          children: [
            (0, Q.jsx)(`span`, { children: `Version` }),
            (0, Q.jsx)(`code`, {
              className: `text-2xs font-medium text-muted-foreground`,
              children: A,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ln() {
  let e = (0, X.c)(40),
    t = Ne(),
    [n, r] = (0, Z.useState)(!1),
    [i, a] = (0, Z.useState)(!1),
    o = typeof window < `u` && !!window.desktopBridge,
    s = t?.channel ?? `latest`,
    u = o ? null : j,
    d;
  e[0] === s
    ? (d = e[1])
    : ((d = (e) => {
        let t = window.desktopBridge;
        t &&
          typeof t.setUpdateChannel == `function` &&
          e !== s &&
          (r(!0),
          t
            .setUpdateChannel(e)
            .catch(mn)
            .finally(() => {
              r(!1);
            }));
      }),
      (e[0] = s),
      (e[1] = d));
  let f = d,
    p;
  e[2] !== i || e[3] !== t
    ? ((p = async () => {
        let e = window.desktopBridge;
        if (!e) return;
        let n = t ? Me(t) : `none`;
        if (n === `download`) e.downloadUpdate().catch(pn);
        else if (n === `install`) {
          if (i) return;
          a(!0);
          let n;
          try {
            n = await fe().dialogs.confirm(
              Ae(t ?? { availableVersion: null, downloadedVersion: null }),
            );
          } catch (e) {
            let t = e;
            (a(!1),
              W.add(
                G({
                  type: `error`,
                  title: `Could not confirm update`,
                  description: t instanceof Error ? t.message : `Update confirmation failed.`,
                }),
              ));
            return;
          }
          if (!n) {
            a(!1);
            return;
          }
          e.installUpdate()
            .catch(fn)
            .finally(() => a(!1));
        } else typeof e.checkForUpdate == `function` && e.checkForUpdate().then(dn).catch(un);
      }),
      (e[2] = i),
      (e[3] = t),
      (e[4] = p))
    : (p = e[4]);
  let m = p,
    h;
  e[5] === t ? (h = e[6]) : ((h = t ? Me(t) : `none`), (e[5] = t), (e[6] = h));
  let g = h,
    _;
  e[7] === t ? (_ = e[8]) : ((_ = t ? Pe(t) : null), (e[7] = t), (e[8] = _));
  let v = _,
    b;
  e[9] !== g || e[10] !== t
    ? ((b = g === `none` ? !Fe(t) : je(t)), (e[9] = g), (e[10] = t), (e[11] = b))
    : (b = e[11]);
  let ee = b,
    S;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { download: `Download`, install: `Install` }), (e[12] = S))
    : (S = e[12]);
  let C = S,
    te;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = { checking: `Checking…`, downloading: `Downloading…`, "up-to-date": `Up to Date` }),
      (e[13] = te))
    : (te = e[13]);
  let w = te,
    T = C[g] ?? w[t?.status ?? ``] ?? `Check for Updates`,
    E;
  e[14] !== g || e[15] !== t
    ? ((E =
        g === `download` || g === `install`
          ? `Update available.`
          : (ke(t) ?? `Current version of the application.`)),
      (e[14] = g),
      (e[15] = t),
      (e[16] = E))
    : (E = e[16]);
  let ne = E,
    D;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = K(`app-version`)), (e[17] = D))
    : (D = e[17]);
  let O;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(cn, {})), (e[18] = O))
    : (O = e[18]);
  let k = g === `install` ? `default` : `outline`,
    A = ee || i,
    P;
  e[19] !== T || e[20] !== m || e[21] !== k || e[22] !== A
    ? ((P = (0, Q.jsx)(x, {
        render: (0, Q.jsx)(l, { size: `xs`, variant: k, disabled: A, onClick: m, children: T }),
      })),
      (e[19] = T),
      (e[20] = m),
      (e[21] = k),
      (e[22] = A),
      (e[23] = P))
    : (P = e[23]);
  let F;
  e[24] === v
    ? (F = e[25])
    : ((F = v ? (0, Q.jsx)(y, { children: v }) : null), (e[24] = v), (e[25] = F));
  let I;
  e[26] !== P || e[27] !== F
    ? ((I = (0, Q.jsxs)(c, { children: [P, F] })), (e[26] = P), (e[27] = F), (e[28] = I))
    : (I = e[28]);
  let L;
  e[29] !== ne || e[30] !== I
    ? ((L = (0, Q.jsx)(J, { id: D.id, title: O, description: ne, control: I })),
      (e[29] = ne),
      (e[30] = I),
      (e[31] = L))
    : (L = e[31]);
  let R;
  e[32] !== f || e[33] !== n || e[34] !== s
    ? ((R = o
        ? (0, Q.jsx)(J, {
            ...K(`update-track`),
            description: `Use stable releases or nightly builds. Switch back anytime.`,
            control: (0, Q.jsxs)(ie, {
              value: s,
              onValueChange: (e) => {
                f(e);
              },
              children: [
                (0, Q.jsx)(re, {
                  className: `w-full sm:w-40`,
                  "aria-label": `Update track`,
                  disabled: n,
                  children: (0, Q.jsx)(B, { children: s === `nightly` ? `Nightly` : `Stable` }),
                }),
                (0, Q.jsxs)(V, {
                  align: `end`,
                  alignItemWithTrigger: !1,
                  children: [
                    (0, Q.jsx)(z, { hideIndicator: !0, value: `latest`, children: `Stable` }),
                    (0, Q.jsx)(z, { hideIndicator: !0, value: `nightly`, children: `Nightly` }),
                  ],
                }),
              ],
            }),
          })
        : u
          ? (0, Q.jsx)(J, {
              ...K(`update-track`),
              description: `Switches the hosted app release channel.`,
              control: (0, Q.jsxs)(ie, {
                value: u,
                onValueChange: (e) => {
                  e !== u && window.location.assign(N({ channel: e }));
                },
                children: [
                  (0, Q.jsx)(re, {
                    className: `w-full sm:w-40`,
                    "aria-label": `Update track`,
                    children: (0, Q.jsx)(B, { children: M }),
                  }),
                  (0, Q.jsxs)(V, {
                    align: `end`,
                    alignItemWithTrigger: !1,
                    children: [
                      (0, Q.jsx)(z, { hideIndicator: !0, value: `latest`, children: `Latest` }),
                      (0, Q.jsx)(z, { hideIndicator: !0, value: `nightly`, children: `Nightly` }),
                    ],
                  }),
                ],
              }),
            })
          : null),
      (e[32] = f),
      (e[33] = n),
      (e[34] = s),
      (e[35] = R))
    : (R = e[35]);
  let H;
  e[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = o ? (0, Q.jsx)(_t, {}) : null), (e[36] = H))
    : (H = e[36]);
  let U;
  return (
    e[37] !== L || e[38] !== R
      ? ((U = (0, Q.jsxs)(Q.Fragment, { children: [L, R, H] })),
        (e[37] = L),
        (e[38] = R),
        (e[39] = U))
      : (U = e[39]),
    U
  );
}
function un(e) {
  W.add(
    G({
      type: `error`,
      title: `Could not check for updates`,
      description: e instanceof Error ? e.message : `Update check failed.`,
    }),
  );
}
function dn(e) {
  e.checked ||
    W.add(
      G({
        type: `error`,
        title: `Could not check for updates`,
        description: e.state.message ?? `Automatic updates are not available in this build.`,
      }),
    );
}
function fn(e) {
  W.add(
    G({
      type: `error`,
      title: `Could not install update`,
      description: e instanceof Error ? e.message : `Install failed.`,
    }),
  );
}
function pn(e) {
  W.add(
    G({
      type: `error`,
      title: `Could not download update`,
      description: e instanceof Error ? e.message : `Download failed.`,
    }),
  );
}
function mn(e) {
  W.add(
    G({
      type: `error`,
      title: `Could not change update track`,
      description: e instanceof Error ? e.message : `Update track change failed.`,
    }),
  );
}
function hn(e) {
  let {
      theme: t,
      setTheme: n,
      followSystem: r,
      setFollowSystem: i,
      setThemeHalf: a,
      clearThemeHalves: o,
      themeHalves: s,
    } = ae(),
    c = Ue(),
    l = Qe(),
    u = !D(c.textGenerationModelSelection ?? null, v.textGenerationModelSelection ?? null),
    d = mt(c),
    f = (0, Z.useMemo)(
      () => [
        ...(t === `system` ? [] : [`Theme`]),
        ...(r ? [] : [`Follow system`]),
        ...(s === null ? [] : [`Theme mix`]),
        ...(c.appearanceContrast === v.appearanceContrast ? [] : [`Contrast`]),
        ...(c.glassOpacity === v.glassOpacity ? [] : [`Glass opacity`]),
        ...(c.diffColorScheme === v.diffColorScheme ? [] : [`Diff colors`]),
        ...(c.chatWidth === v.chatWidth ? [] : [`Chat width`]),
        ...(c.mathRenderingEnabled === v.mathRenderingEnabled ? [] : [`Render math`]),
        ...(c.sidebarProjectIconColors === v.sidebarProjectIconColors
          ? []
          : [`Colored project icons`]),
        ...(c.redesignEnabled === v.redesignEnabled ? [] : [`New design`]),
        ...(c.panelAnimationDurationMs === v.panelAnimationDurationMs ? [] : [`Panel animations`]),
        ...(c.environmentIdentificationMode === v.environmentIdentificationMode
          ? []
          : [`Environment identification`]),
        ...(c.timestampFormat === v.timestampFormat ? [] : [`Time format`]),
        ...(c.notificationMode === v.notificationMode ? [] : [`Thread notifications`]),
        ...(c.inAppNotificationsEnabled === v.inAppNotificationsEnabled
          ? []
          : [`In-app notifications`]),
        ...(c.sidebarThreadPreviewCount === v.sidebarThreadPreviewCount ? [] : [`Visible threads`]),
        ...(c.sidebarProjectGroupingMode === v.sidebarProjectGroupingMode
          ? []
          : [`Project Grouping`]),
        ...(c.sidebarProjectSortOrder === v.sidebarProjectSortOrder ? [] : [`Project order`]),
        ...(c.sidebarWorkingShelfEnabled === v.sidebarWorkingShelfEnabled
          ? []
          : [`Working section`]),
        ...(c.sidebarAutoSettleAfterDays === v.sidebarAutoSettleAfterDays
          ? []
          : [`Auto-settle inactive threads`]),
        ...(c.sidebarAutoSettleKeepPullRequests === v.sidebarAutoSettleKeepPullRequests
          ? []
          : [`Keep threads with a PR`]),
        ...(c.sidebarAutoSettleOnMerge === v.sidebarAutoSettleOnMerge
          ? []
          : [`Auto-settle merged threads`]),
        ...(c.autoResumeLimitedThreads === v.autoResumeLimitedThreads
          ? []
          : [`Auto-resume limited threads`]),
        ...(c.snoozeLimitedThreads === v.snoozeLimitedThreads ? [] : [`Snooze limited threads`]),
        ...(c.wordWrap === v.wordWrap ? [] : [`Word wrap`]),
        ...(c.persistComposerContextStrip === v.persistComposerContextStrip
          ? []
          : [`Composer context`]),
        ...ft(c),
        ...(c.showProviderUsageInContextPopover === v.showProviderUsageInContextPopover
          ? []
          : [`Provider usage in chat`]),
        ...(c.diffFilesCollapsed === v.diffFilesCollapsed ? [] : [`Default diff file state`]),
        ...(c.diffIgnoreWhitespace === v.diffIgnoreWhitespace ? [] : [`Diff whitespace changes`]),
        ...(c.diffLayout === v.diffLayout ? [] : [`Diff layout`]),
        ...(c.proactivePanelsEnabled === v.proactivePanelsEnabled ? [] : [`Proactive panels`]),
        ...(c.showSkillsInSlashMenu === v.showSkillsInSlashMenu
          ? []
          : [`Show skills in slash menu`]),
        ...(c.composerCollapseOnScroll === v.composerCollapseOnScroll
          ? []
          : [`Collapse composer on scroll`]),
        ...(c.composerRichTextEnabled === v.composerRichTextEnabled ? [] : [`Rich text composer`]),
        ...(c.sendShortcut === v.sendShortcut ? [] : [`Send shortcut`]),
        ...(c.followUpBehavior === v.followUpBehavior ? [] : [`Follow-up behavior`]),
        ...(c.contextWindowMeterEnabled === v.contextWindowMeterEnabled
          ? []
          : [`Context window indicator`]),
        ...(c.responseStreamingMode === v.responseStreamingMode ? [] : [`Response streaming`]),
        ...(c.enableProviderUpdateChecks === v.enableProviderUpdateChecks
          ? []
          : [`Provider update checks`]),
        ...(c.continueThreadsAfterServerUpdate === v.continueThreadsAfterServerUpdate
          ? []
          : [`Continue threads after restarts`]),
        ...(d ? [`Background activity`] : []),
        ...(c.defaultThreadEnvMode === v.defaultThreadEnvMode ? [] : [`New thread mode`]),
        ...(c.newWorktreesStartFromOrigin === v.newWorktreesStartFromOrigin
          ? []
          : [`New worktrees start from origin`]),
        ...(c.addProjectBaseDirectory === v.addProjectBaseDirectory
          ? []
          : [`Add project base directory`]),
        ...(c.confirmThreadUnpin === v.confirmThreadUnpin ? [] : [`Unpin confirmation`]),
        ...(c.confirmThreadArchive === v.confirmThreadArchive ? [] : [`Archive confirmation`]),
        ...(c.confirmThreadDelete === v.confirmThreadDelete ? [] : [`Delete confirmation`]),
        ...(c.confirmQuit === v.confirmQuit ? [] : [`Quit confirmation`]),
        ...(u ? [`Text generation model`] : []),
        ...(c.threadTitleInstructions === v.threadTitleInstructions
          ? []
          : [`Thread title instructions`]),
        ...at(c),
        ...(c.enableAgentBrowserAccess === v.enableAgentBrowserAccess
          ? []
          : [`Agent browser access`]),
      ],
      [
        u,
        d,
        c.browserDefaultViewport,
        c.browserDefaultZoomFactor,
        c.browserDefaultAppearance,
        c.browserRecordingFrameRate,
        c.browserRecordingShowKeyPresses,
        c.browserRecordingShowMousePresses,
        c.browserLinkTarget,
        c.browserAutoShowFloatingPreview,
        c.appearanceContrast,
        c.diffColorScheme,
        c.chatWidth,
        c.enableAgentBrowserAccess,
        c.confirmQuit,
        c.confirmThreadArchive,
        c.confirmThreadDelete,
        c.confirmThreadUnpin,
        c.composerCollapseOnScroll,
        c.composerRichTextEnabled,
        c.sendShortcut,
        c.followUpBehavior,
        c.addProjectBaseDirectory,
        c.defaultThreadEnvMode,
        c.newWorktreesStartFromOrigin,
        c.sidebarProjectIconColors,
        c.redesignEnabled,
        c.threadTitleInstructions,
        c.diffIgnoreWhitespace,
        c.diffFilesCollapsed,
        c.diffLayout,
        c.mathRenderingEnabled,
        c.sidebarAutoSettleKeepPullRequests,
        c.continueThreadsAfterServerUpdate,
        c.environmentIdentificationMode,
        c.fontFamilyCode,
        c.fontFamilyComposer,
        c.fontFamilySans,
        c.fontFamilyTerminal,
        c.fontSizeCode,
        c.fontSizeInterface,
        c.fontSizePrompt,
        c.fontSizeTerminal,
        c.glassOpacity,
        c.panelAnimationDurationMs,
        c.responseStreamingMode,
        c.persistComposerContextStrip,
        c.enableProviderUpdateChecks,
        c.sidebarAutoSettleAfterDays,
        c.sidebarAutoSettleOnMerge,
        c.autoResumeLimitedThreads,
        c.snoozeLimitedThreads,
        c.sidebarProjectGroupingMode,
        c.sidebarProjectSortOrder,
        c.sidebarWorkingShelfEnabled,
        c.sidebarThreadPreviewCount,
        c.showSkillsInSlashMenu,
        c.proactivePanelsEnabled,
        c.composerCollapseOnScroll,
        c.contextWindowMeterEnabled,
        c.timestampFormat,
        c.notificationMode,
        c.inAppNotificationsEnabled,
        c.wordWrap,
        r,
        t,
        s,
      ],
    );
  return {
    changedSettingLabels: f,
    restoreDefaults: async () => {
      if (
        f.length === 0 ||
        !(await (de() ?? fe()).dialogs.confirm(
          [`Restore default settings?`, `This will reset: ${f.join(`, `)}.`].join(`
`),
          { variant: `destructive` },
        ))
      )
        return;
      let r = t;
      try {
        r = U();
      } catch {}
      let s = H(),
        c = r !== `system`,
        u = s !== null,
        d = se(r) !== `system`,
        p = () => {
          W.add(
            G({
              type: `error`,
              title: `Couldn’t restore theme settings`,
              description: `Try again.`,
            }),
          );
        },
        m = s;
      c && !n(`system`)
        ? p()
        : (u && !o()) || (d && !i(!0))
          ? (c && n(r), m?.light && a(`light`, m.light), m?.dark && a(`dark`, m.dark), p())
          : (l({
              appearanceContrast: v.appearanceContrast,
              diffColorScheme: v.diffColorScheme,
              chatWidth: v.chatWidth,
              mathRenderingEnabled: v.mathRenderingEnabled,
              sidebarProjectIconColors: v.sidebarProjectIconColors,
              redesignEnabled: v.redesignEnabled,
              timestampFormat: v.timestampFormat,
              notificationMode: v.notificationMode,
              inAppNotificationsEnabled: v.inAppNotificationsEnabled,
              wordWrap: v.wordWrap,
              persistComposerContextStrip: v.persistComposerContextStrip,
              diffIgnoreWhitespace: v.diffIgnoreWhitespace,
              showSkillsInSlashMenu: v.showSkillsInSlashMenu,
              proactivePanelsEnabled: v.proactivePanelsEnabled,
              composerCollapseOnScroll: v.composerCollapseOnScroll,
              composerRichTextEnabled: v.composerRichTextEnabled,
              sendShortcut: v.sendShortcut,
              followUpBehavior: v.followUpBehavior,
              contextWindowMeterEnabled: v.contextWindowMeterEnabled,
              environmentIdentificationMode: v.environmentIdentificationMode,
              glassOpacity: v.glassOpacity,
              sidebarThreadPreviewCount: v.sidebarThreadPreviewCount,
              sidebarProjectGroupingMode: v.sidebarProjectGroupingMode,
              sidebarProjectSortOrder: v.sidebarProjectSortOrder,
              sidebarWorkingShelfEnabled: v.sidebarWorkingShelfEnabled,
              sidebarAutoSettleAfterDays: v.sidebarAutoSettleAfterDays,
              sidebarAutoSettleKeepPullRequests: v.sidebarAutoSettleKeepPullRequests,
              sidebarAutoSettleOnMerge: v.sidebarAutoSettleOnMerge,
              autoResumeLimitedThreads: v.autoResumeLimitedThreads,
              snoozeLimitedThreads: v.snoozeLimitedThreads,
              responseStreamingMode: v.responseStreamingMode,
              enableProviderUpdateChecks: v.enableProviderUpdateChecks,
              backgroundActivity: v.backgroundActivity,
              backgroundActivityProfile: v.backgroundActivityProfile,
              automaticGitFetchInterval: v.automaticGitFetchInterval,
              providerHealthRefreshInterval: v.providerHealthRefreshInterval,
              defaultThreadEnvMode: v.defaultThreadEnvMode,
              newWorktreesStartFromOrigin: v.newWorktreesStartFromOrigin,
              addProjectBaseDirectory: v.addProjectBaseDirectory,
              confirmThreadArchive: v.confirmThreadArchive,
              confirmThreadDelete: v.confirmThreadDelete,
              confirmThreadUnpin: v.confirmThreadUnpin,
              confirmQuit: v.confirmQuit,
              textGenerationModelSelection: v.textGenerationModelSelection,
              threadTitleInstructions: v.threadTitleInstructions,
              fontFamilySans: v.fontFamilySans,
              fontFamilyComposer: v.fontFamilyComposer,
              fontFamilyCode: v.fontFamilyCode,
              fontFamilyTerminal: v.fontFamilyTerminal,
              fontSizeInterface: v.fontSizeInterface,
              fontSizePrompt: v.fontSizePrompt,
              fontSizeCode: v.fontSizeCode,
              fontSizeTerminal: v.fontSizeTerminal,
              browserDefaultViewport: v.browserDefaultViewport,
              browserDefaultZoomFactor: v.browserDefaultZoomFactor,
              browserDefaultAppearance: v.browserDefaultAppearance,
              browserRecordingFrameRate: v.browserRecordingFrameRate,
              browserRecordingShowKeyPresses: v.browserRecordingShowKeyPresses,
              browserRecordingShowMousePresses: v.browserRecordingShowMousePresses,
              browserLinkTarget: v.browserLinkTarget,
              browserSearchEngine: v.browserSearchEngine,
              browserCustomSearchUrl: v.browserCustomSearchUrl,
              browserAutoShowFloatingPreview: v.browserAutoShowFloatingPreview,
              pullRequestLinksOpenInApp: v.pullRequestLinksOpenInApp,
              enableAgentBrowserAccess: v.enableAgentBrowserAccess,
            }),
            e?.());
    },
  };
}
[...(typeof navigator < `u` && h(navigator.platform) ? [`font-smoothing`] : [])];
var gn = v.sidebarAutoSettleAfterDays ?? 3;
function _n(e) {
  let t = (0, X.c)(8),
    { value: n, onCommit: r } = e,
    [i, a] = (0, Z.useState)(String(n)),
    [o, s] = (0, Z.useState)(n);
  o !== n && (s(n), a(String(n)));
  let c;
  t[0] === r
    ? (c = t[1])
    : ((c = (e) => {
        a(e.target.value);
        let t = Number(e.target.value);
        Number.isInteger(t) && t >= 1 && t <= 90 && r(t);
      }),
      (t[0] = r),
      (t[1] = c));
  let l;
  t[2] === n ? (l = t[3]) : ((l = () => a(String(n))), (t[2] = n), (t[3] = l));
  let u;
  return (
    t[4] !== i || t[5] !== c || t[6] !== l
      ? ((u = (0, Q.jsx)(T, {
          type: `number`,
          min: 1,
          max: 90,
          className: `w-full sm:w-24`,
          value: i,
          onChange: c,
          onBlur: l,
          "aria-label": `Days of inactivity before auto-settle`,
        })),
        (t[4] = i),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
var vn = new Set([`legacy-plan-mode`, `legacy-context-window-indicator`, `legacy-sidebar`]);
function yn() {
  let e = (0, X.c)(26),
    t = Ue(),
    n = Qe(),
    [r, a] = (0, Z.useState)(!1),
    o = He();
  Ye(`legacy-features`);
  let [s, c] = (0, Z.useState)(null);
  s !== o && (c(o), o !== null && vn.has(o) && a(!0));
  let l;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsxs)(we, {
        className: `group flex min-h-8 w-full items-center gap-2 px-3 sm:px-4`,
        children: [
          (0, Q.jsxs)(`h2`, {
            className: `text-sm font-normal text-foreground/70 transition-colors group-hover:text-foreground`,
            children: [` `, `Legacy features`],
          }),
          (0, Q.jsx)(i, {
            className: `size-4 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-90`,
          }),
        ],
      })),
      (e[0] = l))
    : (l = e[0]);
  let u;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = K(`legacy-plan-mode`)), (e[1] = u))
    : (u = e[1]);
  let d;
  e[2] === n
    ? (d = e[3])
    : ((d = (e) => {
        n({ planModeEnabled: !!e });
      }),
      (e[2] = n),
      (e[3] = d));
  let f;
  e[4] !== t.planModeEnabled || e[5] !== d
    ? ((f = (0, Q.jsx)(J, {
        ...u,
        description: `Brings back the Build/Plan toggle in the composer along with the /plan and /default commands and the Shift+Tab shortcut. While off, every thread runs in build mode.`,
        control: (0, Q.jsx)(q, {
          checked: t.planModeEnabled,
          onCheckedChange: d,
          "aria-label": `Plan mode (legacy)`,
        }),
      })),
      (e[4] = t.planModeEnabled),
      (e[5] = d),
      (e[6] = f))
    : (f = e[6]);
  let p;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = K(`legacy-context-window-indicator`)), (e[7] = p))
    : (p = e[7]);
  let m;
  e[8] === n
    ? (m = e[9])
    : ((m = (e) => n({ contextWindowMeterEnabled: !!e })), (e[8] = n), (e[9] = m));
  let h;
  e[10] !== t.contextWindowMeterEnabled || e[11] !== m
    ? ((h = (0, Q.jsx)(J, {
        ...p,
        description: `Shows context window usage as a circular indicator in the composer.`,
        control: (0, Q.jsx)(q, {
          checked: t.contextWindowMeterEnabled,
          onCheckedChange: m,
          "aria-label": `Context window indicator (legacy)`,
        }),
      })),
      (e[10] = t.contextWindowMeterEnabled),
      (e[11] = m),
      (e[12] = h))
    : (h = e[12]);
  let g;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = K(`legacy-sidebar`)), (e[13] = g))
    : (g = e[13]);
  let _;
  e[14] === n
    ? (_ = e[15])
    : ((_ = (e) => n({ legacySidebarEnabled: !!e })), (e[14] = n), (e[15] = _));
  let v;
  e[16] !== t.legacySidebarEnabled || e[17] !== _
    ? ((v = (0, Q.jsx)(J, {
        ...g,
        description: `Brings back the original sidebar with per-project thread trees. The default sidebar shows one flat list: active work as rich cards, settled threads as compact rows.`,
        control: (0, Q.jsx)(q, {
          checked: t.legacySidebarEnabled,
          onCheckedChange: _,
          "aria-label": `Sidebar (legacy)`,
        }),
      })),
      (e[16] = t.legacySidebarEnabled),
      (e[17] = _),
      (e[18] = v))
    : (v = e[18]);
  let y;
  e[19] !== f || e[20] !== h || e[21] !== v
    ? ((y = (0, Q.jsx)(Ce, { children: (0, Q.jsxs)(Ke, { children: [f, h, v] }) })),
      (e[19] = f),
      (e[20] = h),
      (e[21] = v),
      (e[22] = y))
    : (y = e[22]);
  let b;
  return (
    e[23] !== r || e[24] !== y
      ? ((b = (0, Q.jsx)(`section`, {
          className: `space-y-3`,
          children: (0, Q.jsxs)(Te, { open: r, onOpenChange: a, children: [l, y] }),
        })),
        (e[23] = r),
        (e[24] = y),
        (e[25] = b))
      : (b = e[25]),
    b
  );
}
function bn() {
  let e = (0, X.c)(481),
    t = Oe(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = _.make(`__tts_settings_preview__`)), (e[0] = n))
    : (n = e[0]);
  let r = n,
    i = h(navigator.platform) ? `⌘` : `Ctrl`,
    o;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = [
        { value: `enter`, label: `Enter` },
        { value: `mod-enter-multiline`, label: `${i} + Enter for multiline prompts` },
        { value: `mod-enter`, label: `${i} + Enter always` },
      ]),
      (e[1] = o))
    : (o = e[1]);
  let c = o,
    g = Ue(),
    y = Qe(),
    x = wt(g.tts.serverUrl),
    S = pe(),
    { scope: w, environment: E, connectedEnvironments: O, target: A, targets: M } = Ze(),
    N;
  e[2] !== g || e[3] !== M
    ? ((N = M.length > 0 ? M : [{ settings: g }]), (e[2] = g), (e[3] = M), (e[4] = N))
    : (N = e[4]);
  let P;
  e[5] === N ? (P = e[6]) : ((P = ue(N)), (e[5] = N), (e[6] = P));
  let F = P,
    I = E?.environmentId ?? null,
    L = O.length > 0,
    R;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = [`responseStreamingMode`]), (e[7] = R))
    : (R = e[7]);
  let H = Ve(R),
    U;
  e[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((U = st()), (e[8] = U)) : (U = e[8]);
  let ae = (0, Z.useRef)(U),
    se = oe(),
    ce = (E?.serverConfig ? se.get(E.environmentId) : void 0) ?? le,
    de;
  e[9] === O ? (de = e[10]) : ((de = O.length > 0 && O.every(An)), (e[9] = O), (e[10] = de));
  let fe = de,
    G;
  e[11] === O ? (G = e[12]) : ((G = O.every(kn)), (e[11] = O), (e[12] = G));
  let he = G;
  (O.length > 0 && O.every(On), E?.serverConfig?.observability);
  let ge = w.environmentIds.length === 1 && w.environmentIds[0] === E?.environmentId,
    _e = ce.filter(Dn),
    ve = u(g, _e),
    ye = ve.instanceId,
    be = ve.model,
    xe = ve.options,
    Se = te(d(ee(_e), g, A?.projectId ?? null)),
    Ce = Se.some(En),
    we = Se.find((e) => e.instanceId === ye),
    Te = we?.driverKind ?? sn,
    Ee = m(g, _e, ye, be),
    De;
  e[13] === g.textGenerationModelSelection
    ? (De = e[14])
    : ((De = D(g.textGenerationModelSelection ?? null, v.textGenerationModelSelection ?? null)),
      (e[13] = g.textGenerationModelSelection),
      (e[14] = De));
  let ke = !De,
    Ae = rt(g, Se),
    je;
  (e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = [`addProjectBaseDirectory`]), (e[15] = je))
    : (je = e[15]),
    Ve(je));
  let Me;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = [`textGenerationModelSelection`]), (e[16] = Me))
    : (Me = e[16]);
  let Ne = Ve(Me),
    Pe = We,
    Fe;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = K(`thread-workspaces`)), (e[17] = Fe))
    : (Fe = e[17]);
  let Ie;
  e[18] !== g.sidebarThreadWorkspacesEnabled || e[19] !== y
    ? ((Ie =
        g.sidebarThreadWorkspacesEnabled === v.sidebarThreadWorkspacesEnabled
          ? null
          : (0, Q.jsx)(Y, {
              label: `thread workspaces`,
              onClick: () =>
                y({ sidebarThreadWorkspacesEnabled: v.sidebarThreadWorkspacesEnabled }),
            })),
      (e[18] = g.sidebarThreadWorkspacesEnabled),
      (e[19] = y),
      (e[20] = Ie))
    : (Ie = e[20]);
  let Le;
  e[21] === y
    ? (Le = e[22])
    : ((Le = (e) => y({ sidebarThreadWorkspacesEnabled: !!e })), (e[21] = y), (e[22] = Le));
  let Re;
  e[23] !== g.sidebarThreadWorkspacesEnabled || e[24] !== Le
    ? ((Re = (0, Q.jsx)(q, {
        checked: g.sidebarThreadWorkspacesEnabled,
        onCheckedChange: Le,
        "aria-label": `Thread workspaces`,
      })),
      (e[23] = g.sidebarThreadWorkspacesEnabled),
      (e[24] = Le),
      (e[25] = Re))
    : (Re = e[25]);
  let ze;
  e[26] !== Ie || e[27] !== Re
    ? ((ze = (0, Q.jsx)(J, {
        ...Fe,
        description: `Group threads into named workspaces with a strip in the sidebar footer. Assign threads from their context menu or by dragging them onto a workspace.`,
        resetAction: Ie,
        control: Re,
      })),
      (e[26] = Ie),
      (e[27] = Re),
      (e[28] = ze))
    : (ze = e[28]);
  let Be;
  e[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = K(`project-grouping`)), (e[29] = Be))
    : (Be = e[29]);
  let He;
  e[30] !== g.sidebarProjectGroupingMode || e[31] !== y
    ? ((He =
        g.sidebarProjectGroupingMode === v.sidebarProjectGroupingMode
          ? null
          : (0, Q.jsx)(Y, {
              label: `project grouping`,
              onClick: () => y({ sidebarProjectGroupingMode: v.sidebarProjectGroupingMode }),
            })),
      (e[30] = g.sidebarProjectGroupingMode),
      (e[31] = y),
      (e[32] = He))
    : (He = e[32]);
  let Ke;
  e[33] === g.sidebarProjectGroupingMode
    ? (Ke = e[34])
    : ((Ke = ot(g.sidebarProjectGroupingMode)),
      (e[33] = g.sidebarProjectGroupingMode),
      (e[34] = Ke));
  let Je;
  e[35] !== g.sidebarProjectGroupingMode || e[36] !== y
    ? ((Je = (e) => {
        (!e &&
          g.sidebarProjectGroupingMode !== `separate` &&
          ((ae.current = g.sidebarProjectGroupingMode), ct(g.sidebarProjectGroupingMode)),
          y({ sidebarProjectGroupingMode: gt(e, ae.current) }));
      }),
      (e[35] = g.sidebarProjectGroupingMode),
      (e[36] = y),
      (e[37] = Je))
    : (Je = e[37]);
  let Ye;
  e[38] !== Ke || e[39] !== Je
    ? ((Ye = (0, Q.jsx)(q, { checked: Ke, onCheckedChange: Je, "aria-label": `Project grouping` })),
      (e[38] = Ke),
      (e[39] = Je),
      (e[40] = Ye))
    : (Ye = e[40]);
  let Xe;
  e[41] !== He || e[42] !== Ye
    ? ((Xe = (0, Q.jsx)(J, {
        ...Be,
        description: `Combine matching repositories across environments.`,
        resetAction: He,
        control: Ye,
      })),
      (e[41] = He),
      (e[42] = Ye),
      (e[43] = Xe))
    : (Xe = e[43]);
  let et;
  e[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = K(`project-order`)), (e[44] = et))
    : (et = e[44]);
  let at;
  e[45] !== g.sidebarProjectSortOrder || e[46] !== y
    ? ((at =
        g.sidebarProjectSortOrder === v.sidebarProjectSortOrder
          ? null
          : (0, Q.jsx)(Y, {
              label: `project order`,
              onClick: () => y({ sidebarProjectSortOrder: v.sidebarProjectSortOrder }),
            })),
      (e[45] = g.sidebarProjectSortOrder),
      (e[46] = y),
      (e[47] = at))
    : (at = e[47]);
  let lt;
  e[48] === y
    ? (lt = e[49])
    : ((lt = (e) => {
        rn(e) && y({ sidebarProjectSortOrder: e });
      }),
      (e[48] = y),
      (e[49] = lt));
  let ut = nn[g.sidebarProjectSortOrder],
    dt;
  e[50] === ut
    ? (dt = e[51])
    : ((dt = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-44`,
        "aria-label": `Project order`,
        children: (0, Q.jsx)(B, { children: ut }),
      })),
      (e[50] = ut),
      (e[51] = dt));
  let ft;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, Q.jsx)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: k.literals.map(Tn),
      })),
      (e[52] = ft))
    : (ft = e[52]);
  let pt;
  e[53] !== g.sidebarProjectSortOrder || e[54] !== lt || e[55] !== dt
    ? ((pt = (0, Q.jsxs)(ie, {
        value: g.sidebarProjectSortOrder,
        onValueChange: lt,
        children: [dt, ft],
      })),
      (e[53] = g.sidebarProjectSortOrder),
      (e[54] = lt),
      (e[55] = dt),
      (e[56] = pt))
    : (pt = e[56]);
  let mt;
  e[57] !== at || e[58] !== pt
    ? ((mt = (0, Q.jsx)(J, {
        ...et,
        description: `Order of projects in the sidebar project picker and command palette.`,
        resetAction: at,
        control: pt,
      })),
      (e[57] = at),
      (e[58] = pt),
      (e[59] = mt))
    : (mt = e[59]);
  let ht;
  e[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = K(`auto-resume-limited-threads`)), (e[60] = ht))
    : (ht = e[60]);
  let _t;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = [`autoResumeLimitedThreads`]), (e[61] = _t))
    : (_t = e[61]);
  let vt;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = [`autoResumeLimitedThreads`]), (e[62] = vt))
    : (vt = e[62]);
  let yt;
  e[63] === y
    ? (yt = e[64])
    : ((yt = (e) => y({ autoResumeLimitedThreads: !!e })), (e[63] = y), (e[64] = yt));
  let xt;
  e[65] !== g.autoResumeLimitedThreads || e[66] !== yt
    ? ((xt = (0, Q.jsx)(J, {
        serverScoped: !0,
        ...ht,
        description: `Resume usage-limit stops at the reported reset time. Each thread can cancel its scheduled continuation.`,
        settingKeys: _t,
        control: (0, Q.jsx)($e, {
          settingKeys: vt,
          checked: g.autoResumeLimitedThreads,
          onCheckedChange: yt,
          "aria-label": `Resume after usage limits`,
        }),
      })),
      (e[65] = g.autoResumeLimitedThreads),
      (e[66] = yt),
      (e[67] = xt))
    : (xt = e[67]);
  let Ct;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = K(`snooze-limited-threads`)), (e[68] = Ct))
    : (Ct = e[68]);
  let Tt;
  e[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = [`snoozeLimitedThreads`]), (e[69] = Tt))
    : (Tt = e[69]);
  let Et;
  e[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = [`snoozeLimitedThreads`]), (e[70] = Et))
    : (Et = e[70]);
  let Dt;
  e[71] === y
    ? (Dt = e[72])
    : ((Dt = (e) => y({ snoozeLimitedThreads: !!e })), (e[71] = y), (e[72] = Dt));
  let $;
  e[73] !== g.snoozeLimitedThreads || e[74] !== Dt
    ? (($ = (0, Q.jsx)(J, {
        serverScoped: !0,
        ...Ct,
        description: `Snooze usage-limit stops until reset. Pair with resume to continue on wake.`,
        settingKeys: Tt,
        control: (0, Q.jsx)($e, {
          settingKeys: Et,
          checked: g.snoozeLimitedThreads,
          onCheckedChange: Dt,
          "aria-label": `Snooze until limits reset`,
        }),
      })),
      (e[73] = g.snoozeLimitedThreads),
      (e[74] = Dt),
      (e[75] = $))
    : ($ = e[75]);
  let Ot;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = [`idleCompaction`, `compactIdleThreads`]), (e[76] = Ot))
    : (Ot = e[76]);
  let kt = F.mixed,
    At;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = K(`compact-idle-threads`)), (e[77] = At))
    : (At = e[77]);
  let jt;
  e[78] !== g || e[79] !== y
    ? ((jt =
        f(g) === f(v)
          ? null
          : (0, Q.jsx)(Y, {
              label: `compact idle threads`,
              onClick: () => y({ idleCompaction: f(v) }),
            })),
      (e[78] = g),
      (e[79] = y),
      (e[80] = jt))
    : (jt = e[80]);
  let Mt;
  e[81] !== F.mixed || e[82] !== g
    ? ((Mt = F.mixed ? null : f(g)), (e[81] = F.mixed), (e[82] = g), (e[83] = Mt))
    : (Mt = e[83]);
  let Nt;
  e[84] === y
    ? (Nt = e[85])
    : ((Nt = (e) => {
        let t = b.find((t) => t.value === e);
        t && y({ idleCompaction: t.value });
      }),
      (e[84] = y),
      (e[85] = Nt));
  let Pt;
  e[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-56`,
        "aria-label": `Compact idle threads`,
        children: (0, Q.jsx)(B, { children: wn }),
      })),
      (e[86] = Pt))
    : (Pt = e[86]);
  let It;
  e[87] === F.neverAvailable
    ? (It = e[88])
    : ((It = b.map((e) =>
        (0, Q.jsx)(
          z,
          {
            hideIndicator: !0,
            value: e.value,
            disabled: e.value === `off` && !F.neverAvailable,
            children: e.label,
          },
          e.value,
        ),
      )),
      (e[87] = F.neverAvailable),
      (e[88] = It));
  let Lt;
  e[89] === It
    ? (Lt = e[90])
    : ((Lt = (0, Q.jsx)(V, { align: `end`, alignItemWithTrigger: !1, children: It })),
      (e[89] = It),
      (e[90] = Lt));
  let Rt;
  e[91] !== Mt || e[92] !== Nt || e[93] !== Lt
    ? ((Rt = (0, Q.jsxs)(ie, { value: Mt, onValueChange: Nt, children: [Pt, Lt] })),
      (e[91] = Mt),
      (e[92] = Nt),
      (e[93] = Lt),
      (e[94] = Rt))
    : (Rt = e[94]);
  let zt;
  e[95] !== F.mixed || e[96] !== jt || e[97] !== Rt
    ? ((zt = (0, Q.jsx)(J, {
        serverScoped: !0,
        settingKeys: Ot,
        mixed: kt,
        ...At,
        description: `When to compact an idle Claude thread over 200,000 tokens: after you return, just before its prompt cache expires, or never. Each Claude provider can override this.`,
        resetAction: jt,
        control: Rt,
      })),
      (e[95] = F.mixed),
      (e[96] = jt),
      (e[97] = Rt),
      (e[98] = zt))
    : (zt = e[98]);
  let Bt;
  e[99] !== g.sidebarAutoSettleAfterDays ||
  e[100] !== g.sidebarAutoSettleKeepPullRequests ||
  e[101] !== g.sidebarAutoSettleOnMerge ||
  e[102] !== fe ||
  e[103] !== he ||
  e[104] !== y
    ? ((Bt = fe
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(J, {
                ...K(`auto-settle-merged-threads`),
                description: `Settle a thread when its pull request merges. Closed pull requests still settle automatically.`,
                resetAction:
                  g.sidebarAutoSettleOnMerge === v.sidebarAutoSettleOnMerge
                    ? null
                    : (0, Q.jsx)(Y, {
                        label: `auto-settle on merge`,
                        onClick: () => y({ sidebarAutoSettleOnMerge: v.sidebarAutoSettleOnMerge }),
                      }),
                control: (0, Q.jsx)(q, {
                  checked: g.sidebarAutoSettleOnMerge,
                  onCheckedChange: (e) => y({ sidebarAutoSettleOnMerge: !!e }),
                  "aria-label": `Auto-settle merged threads`,
                }),
              }),
              (0, Q.jsx)(J, {
                ...K(`auto-settle-inactive-threads`),
                description: `Sidebar threads with no activity for this long settle automatically.`,
                resetAction:
                  g.sidebarAutoSettleAfterDays === v.sidebarAutoSettleAfterDays
                    ? null
                    : (0, Q.jsx)(Y, {
                        label: `auto-settle`,
                        onClick: () =>
                          y({ sidebarAutoSettleAfterDays: v.sidebarAutoSettleAfterDays }),
                      }),
                control: (0, Q.jsx)(q, {
                  checked: g.sidebarAutoSettleAfterDays !== null,
                  onCheckedChange: (e) => y({ sidebarAutoSettleAfterDays: e ? gn : null }),
                  "aria-label": `Auto-settle inactive threads`,
                }),
              }),
              g.sidebarAutoSettleAfterDays === null
                ? null
                : (0, Q.jsx)(J, {
                    title: K(`days-before-auto-settle`).title,
                    description: `Any new activity un-settles a thread automatically.`,
                    control: (0, Q.jsx)(_n, {
                      value: g.sidebarAutoSettleAfterDays,
                      onCommit: (e) => y({ sidebarAutoSettleAfterDays: e }),
                    }),
                  }),
              g.sidebarAutoSettleAfterDays !== null && he
                ? (0, Q.jsx)(J, {
                    serverScoped: !0,
                    settingKeys: [`sidebarAutoSettleKeepPullRequests`],
                    title: `Keep threads with a PR`,
                    description: `Inactivity does not settle threads with a pull request. Merge and close still do.`,
                    control: (0, Q.jsx)($e, {
                      settingKeys: [`sidebarAutoSettleKeepPullRequests`],
                      checked: g.sidebarAutoSettleKeepPullRequests,
                      onCheckedChange: (e) => y({ sidebarAutoSettleKeepPullRequests: e }),
                      "aria-label": `Keep threads with a PR`,
                    }),
                  })
                : null,
            ],
          })
        : null),
      (e[99] = g.sidebarAutoSettleAfterDays),
      (e[100] = g.sidebarAutoSettleKeepPullRequests),
      (e[101] = g.sidebarAutoSettleOnMerge),
      (e[102] = fe),
      (e[103] = he),
      (e[104] = y),
      (e[105] = Bt))
    : (Bt = e[105]);
  let Vt;
  e[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = K(`in-app-notifications`)), (e[106] = Vt))
    : (Vt = e[106]);
  let Ht;
  e[107] === y
    ? (Ht = e[108])
    : ((Ht = (e) => y({ inAppNotificationsEnabled: e })), (e[107] = y), (e[108] = Ht));
  let Ut;
  e[109] !== g.inAppNotificationsEnabled || e[110] !== Ht
    ? ((Ut = (0, Q.jsx)(J, {
        ...Vt,
        description: `Show a toast when another thread finishes, fails, or needs input or approval while this app has focus.`,
        control: (0, Q.jsx)(q, {
          checked: g.inAppNotificationsEnabled,
          onCheckedChange: Ht,
          "aria-label": `In-app notifications`,
        }),
      })),
      (e[109] = g.inAppNotificationsEnabled),
      (e[110] = Ht),
      (e[111] = Ut))
    : (Ut = e[111]);
  let Wt;
  e[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wt = K(`time-format`)), (e[112] = Wt))
    : (Wt = e[112]);
  let Gt;
  e[113] !== g.timestampFormat || e[114] !== y
    ? ((Gt =
        g.timestampFormat === v.timestampFormat
          ? null
          : (0, Q.jsx)(Y, {
              label: `time format`,
              onClick: () => y({ timestampFormat: v.timestampFormat }),
            })),
      (e[113] = g.timestampFormat),
      (e[114] = y),
      (e[115] = Gt))
    : (Gt = e[115]);
  let Kt;
  e[116] === y
    ? (Kt = e[117])
    : ((Kt = (e) => {
        (e === `locale` || e === `12-hour` || e === `24-hour`) && y({ timestampFormat: e });
      }),
      (e[116] = y),
      (e[117] = Kt));
  let qt = an[g.timestampFormat],
    Jt;
  e[118] === qt
    ? (Jt = e[119])
    : ((Jt = (0, Q.jsx)(re, {
        className: `w-full sm:w-40`,
        "aria-label": `Timestamp format`,
        children: (0, Q.jsx)(B, { children: qt }),
      })),
      (e[118] = qt),
      (e[119] = Jt));
  let Yt;
  e[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, Q.jsx)(z, { hideIndicator: !0, value: `locale`, children: an.locale }),
          (0, Q.jsx)(z, { hideIndicator: !0, value: `12-hour`, children: an[`12-hour`] }),
          (0, Q.jsx)(z, { hideIndicator: !0, value: `24-hour`, children: an[`24-hour`] }),
        ],
      })),
      (e[120] = Yt))
    : (Yt = e[120]);
  let Xt;
  e[121] !== g.timestampFormat || e[122] !== Kt || e[123] !== Jt
    ? ((Xt = (0, Q.jsxs)(ie, { value: g.timestampFormat, onValueChange: Kt, children: [Jt, Yt] })),
      (e[121] = g.timestampFormat),
      (e[122] = Kt),
      (e[123] = Jt),
      (e[124] = Xt))
    : (Xt = e[124]);
  let Zt;
  e[125] !== Gt || e[126] !== Xt
    ? ((Zt = (0, Q.jsx)(J, {
        ...Wt,
        description: `System default follows your browser or OS clock preference.`,
        resetAction: Gt,
        control: Xt,
      })),
      (e[125] = Gt),
      (e[126] = Xt),
      (e[127] = Zt))
    : (Zt = e[127]);
  let Qt;
  e[128] !== g.enableExternalFilePreview || e[129] !== y
    ? ((Qt =
        g.enableExternalFilePreview === v.enableExternalFilePreview
          ? null
          : (0, Q.jsx)(Y, {
              label: `external file preview`,
              onClick: () => y({ enableExternalFilePreview: v.enableExternalFilePreview }),
            })),
      (e[128] = g.enableExternalFilePreview),
      (e[129] = y),
      (e[130] = Qt))
    : (Qt = e[130]);
  let un;
  e[131] === y
    ? (un = e[132])
    : ((un = (e) => y({ enableExternalFilePreview: !!e })), (e[131] = y), (e[132] = un));
  let dn;
  e[133] !== g.enableExternalFilePreview || e[134] !== un
    ? ((dn = (0, Q.jsx)(q, {
        checked: g.enableExternalFilePreview,
        onCheckedChange: un,
        "aria-label": `Enable external file preview`,
      })),
      (e[133] = g.enableExternalFilePreview),
      (e[134] = un),
      (e[135] = dn))
    : (dn = e[135]);
  let fn;
  e[136] !== Qt || e[137] !== dn
    ? ((fn = (0, Q.jsx)(J, {
        title: `External file preview`,
        description: `Allow viewing files from outside the workspace, such as temporary files or images from other directories.`,
        resetAction: Qt,
        control: dn,
      })),
      (e[136] = Qt),
      (e[137] = dn),
      (e[138] = fn))
    : (fn = e[138]);
  let pn, mn;
  e[139] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pn = [`responseStreamingMode`]),
      (mn = K(`response-streaming`)),
      (e[139] = pn),
      (e[140] = mn))
    : ((pn = e[139]), (mn = e[140]));
  let hn = H ? `The selected targets use different streaming modes.` : tn[g.responseStreamingMode],
    vn;
  e[141] !== g.responseStreamingMode || e[142] !== y
    ? ((vn =
        g.responseStreamingMode === v.responseStreamingMode
          ? null
          : (0, Q.jsx)(Y, {
              label: `response streaming`,
              onClick: () => y({ responseStreamingMode: v.responseStreamingMode }),
            })),
      (e[141] = g.responseStreamingMode),
      (e[142] = y),
      (e[143] = vn))
    : (vn = e[143]);
  let bn = H ? null : g.responseStreamingMode,
    jn;
  e[144] === y
    ? (jn = e[145])
    : ((jn = (e) => {
        (e === `turn` || e === `paragraph`) && y({ responseStreamingMode: e });
      }),
      (e[144] = y),
      (e[145] = jn));
  let Mn;
  e[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mn = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-56`,
        "aria-label": `Response streaming`,
        children: (0, Q.jsx)(B, { children: Cn }),
      })),
      (e[146] = Mn))
    : (Mn = e[146]);
  let Nn;
  e[147] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nn = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, Q.jsx)(z, { hideIndicator: !0, value: `turn`, children: en.turn }),
          (0, Q.jsx)(z, { hideIndicator: !0, value: `paragraph`, children: en.paragraph }),
        ],
      })),
      (e[147] = Nn))
    : (Nn = e[147]);
  let Pn;
  e[148] !== bn || e[149] !== jn
    ? ((Pn = (0, Q.jsxs)(ie, { value: bn, onValueChange: jn, children: [Mn, Nn] })),
      (e[148] = bn),
      (e[149] = jn),
      (e[150] = Pn))
    : (Pn = e[150]);
  let Fn;
  e[151] !== hn || e[152] !== vn || e[153] !== Pn
    ? ((Fn = (0, Q.jsx)(J, {
        serverScoped: !0,
        settingKeys: pn,
        ...mn,
        description: hn,
        resetAction: vn,
        control: Pn,
      })),
      (e[151] = hn),
      (e[152] = vn),
      (e[153] = Pn),
      (e[154] = Fn))
    : (Fn = e[154]);
  let In;
  e[155] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((In = K(`hide-whitespace-changes`)), (e[155] = In))
    : (In = e[155]);
  let Ln;
  e[156] !== g.diffIgnoreWhitespace || e[157] !== y
    ? ((Ln =
        g.diffIgnoreWhitespace === v.diffIgnoreWhitespace
          ? null
          : (0, Q.jsx)(Y, {
              label: `diff whitespace changes`,
              onClick: () => y({ diffIgnoreWhitespace: v.diffIgnoreWhitespace }),
            })),
      (e[156] = g.diffIgnoreWhitespace),
      (e[157] = y),
      (e[158] = Ln))
    : (Ln = e[158]);
  let Rn;
  e[159] === y
    ? (Rn = e[160])
    : ((Rn = (e) => y({ diffIgnoreWhitespace: !!e })), (e[159] = y), (e[160] = Rn));
  let zn;
  e[161] !== g.diffIgnoreWhitespace || e[162] !== Rn
    ? ((zn = (0, Q.jsx)(q, {
        checked: g.diffIgnoreWhitespace,
        onCheckedChange: Rn,
        "aria-label": `Hide whitespace changes by default`,
      })),
      (e[161] = g.diffIgnoreWhitespace),
      (e[162] = Rn),
      (e[163] = zn))
    : (zn = e[163]);
  let Bn;
  e[164] !== Ln || e[165] !== zn
    ? ((Bn = (0, Q.jsx)(J, {
        ...In,
        description: `Set whether the diff panel ignores whitespace-only edits by default.`,
        resetAction: Ln,
        control: zn,
      })),
      (e[164] = Ln),
      (e[165] = zn),
      (e[166] = Bn))
    : (Bn = e[166]);
  let Vn;
  e[167] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vn = K(`diff-layout`)), (e[167] = Vn))
    : (Vn = e[167]);
  let Hn;
  e[168] !== g.diffLayout || e[169] !== y
    ? ((Hn =
        g.diffLayout === v.diffLayout
          ? null
          : (0, Q.jsx)(Y, {
              label: `diff layout`,
              onClick: () => y({ diffLayout: v.diffLayout }),
            })),
      (e[168] = g.diffLayout),
      (e[169] = y),
      (e[170] = Hn))
    : (Hn = e[170]);
  let Un;
  e[171] === y
    ? (Un = e[172])
    : ((Un = (e) => {
        (e === `stacked` || e === `split`) && y({ diffLayout: e });
      }),
      (e[171] = y),
      (e[172] = Un));
  let Wn = on[g.diffLayout],
    Gn;
  e[173] === Wn
    ? (Gn = e[174])
    : ((Gn = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-full sm:w-40`,
        "aria-label": `Diff layout`,
        children: (0, Q.jsx)(B, { children: Wn }),
      })),
      (e[173] = Wn),
      (e[174] = Gn));
  let Kn;
  e[175] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Kn = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, Q.jsx)(z, { hideIndicator: !0, value: `stacked`, children: on.stacked }),
          (0, Q.jsx)(z, { hideIndicator: !0, value: `split`, children: on.split }),
        ],
      })),
      (e[175] = Kn))
    : (Kn = e[175]);
  let qn;
  e[176] !== g.diffLayout || e[177] !== Un || e[178] !== Gn
    ? ((qn = (0, Q.jsxs)(ie, { value: g.diffLayout, onValueChange: Un, children: [Gn, Kn] })),
      (e[176] = g.diffLayout),
      (e[177] = Un),
      (e[178] = Gn),
      (e[179] = qn))
    : (qn = e[179]);
  let Jn;
  e[180] !== Hn || e[181] !== qn
    ? ((Jn = (0, Q.jsx)(J, {
        ...Vn,
        description: `Show diffs stacked or side by side. The toggle in the diff toolbar changes this too.`,
        resetAction: Hn,
        control: qn,
      })),
      (e[180] = Hn),
      (e[181] = qn),
      (e[182] = Jn))
    : (Jn = e[182]);
  let Yn;
  e[183] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yn = K(`proactive-panels`)), (e[183] = Yn))
    : (Yn = e[183]);
  let Xn;
  e[184] !== g.proactivePanelsEnabled || e[185] !== y
    ? ((Xn =
        g.proactivePanelsEnabled === v.proactivePanelsEnabled
          ? null
          : (0, Q.jsx)(Y, {
              label: `proactive panels`,
              onClick: () => y({ proactivePanelsEnabled: v.proactivePanelsEnabled }),
            })),
      (e[184] = g.proactivePanelsEnabled),
      (e[185] = y),
      (e[186] = Xn))
    : (Xn = e[186]);
  let Zn;
  e[187] === y
    ? (Zn = e[188])
    : ((Zn = (e) => y({ proactivePanelsEnabled: !!e })), (e[187] = y), (e[188] = Zn));
  let Qn;
  e[189] !== g.proactivePanelsEnabled || e[190] !== Zn
    ? ((Qn = (0, Q.jsx)(q, {
        checked: g.proactivePanelsEnabled,
        onCheckedChange: Zn,
        "aria-label": `Proactive panels`,
      })),
      (e[189] = g.proactivePanelsEnabled),
      (e[190] = Zn),
      (e[191] = Qn))
    : (Qn = e[191]);
  let $n;
  e[192] !== Xn || e[193] !== Qn
    ? (($n = (0, Q.jsx)(J, {
        ...Yn,
        description: `Open linked pull requests first. Otherwise, open Changes for edits to at least 3 files or 50 lines.`,
        resetAction: Xn,
        control: Qn,
      })),
      (e[192] = Xn),
      (e[193] = Qn),
      (e[194] = $n))
    : ($n = e[194]);
  let er;
  e[195] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((er = K(`skills-in-slash-menu`)), (e[195] = er))
    : (er = e[195]);
  let tr;
  e[196] !== g.showSkillsInSlashMenu || e[197] !== y
    ? ((tr =
        g.showSkillsInSlashMenu === v.showSkillsInSlashMenu
          ? null
          : (0, Q.jsx)(Y, {
              label: `skills in slash menu`,
              onClick: () => y({ showSkillsInSlashMenu: v.showSkillsInSlashMenu }),
            })),
      (e[196] = g.showSkillsInSlashMenu),
      (e[197] = y),
      (e[198] = tr))
    : (tr = e[198]);
  let nr;
  e[199] === y
    ? (nr = e[200])
    : ((nr = (e) => y({ showSkillsInSlashMenu: !!e })), (e[199] = y), (e[200] = nr));
  let rr;
  e[201] !== g.showSkillsInSlashMenu || e[202] !== nr
    ? ((rr = (0, Q.jsx)(q, {
        checked: g.showSkillsInSlashMenu,
        onCheckedChange: nr,
        "aria-label": `Show skills in slash menu`,
      })),
      (e[201] = g.showSkillsInSlashMenu),
      (e[202] = nr),
      (e[203] = rr))
    : (rr = e[203]);
  let ir;
  e[204] !== tr || e[205] !== rr
    ? ((ir = (0, Q.jsx)(J, {
        ...er,
        description: `Also include skills in the / command menu. Skills always appear when you type $.`,
        resetAction: tr,
        control: rr,
      })),
      (e[204] = tr),
      (e[205] = rr),
      (e[206] = ir))
    : (ir = e[206]);
  let ar;
  e[207] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ar = K(`composer-rich-text`)), (e[207] = ar))
    : (ar = e[207]);
  let or;
  e[208] !== g.composerRichTextEnabled || e[209] !== y
    ? ((or =
        g.composerRichTextEnabled === v.composerRichTextEnabled
          ? null
          : (0, Q.jsx)(Y, {
              label: `rich text composer`,
              onClick: () => y({ composerRichTextEnabled: v.composerRichTextEnabled }),
            })),
      (e[208] = g.composerRichTextEnabled),
      (e[209] = y),
      (e[210] = or))
    : (or = e[210]);
  let sr;
  e[211] === y
    ? (sr = e[212])
    : ((sr = (e) => y({ composerRichTextEnabled: !!e })), (e[211] = y), (e[212] = sr));
  let cr;
  e[213] !== g.composerRichTextEnabled || e[214] !== sr
    ? ((cr = (0, Q.jsx)(q, {
        checked: g.composerRichTextEnabled,
        onCheckedChange: sr,
        "aria-label": `Rich text composer`,
      })),
      (e[213] = g.composerRichTextEnabled),
      (e[214] = sr),
      (e[215] = cr))
    : (cr = e[215]);
  let lr;
  e[216] !== or || e[217] !== cr
    ? ((lr = (0, Q.jsx)(J, {
        ...ar,
        description: `Show formatted Markdown as you type.`,
        resetAction: or,
        control: cr,
      })),
      (e[216] = or),
      (e[217] = cr),
      (e[218] = lr))
    : (lr = e[218]);
  let ur;
  e[219] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ur = K(`composer-collapse`)), (e[219] = ur))
    : (ur = e[219]);
  let dr;
  e[220] !== g.composerCollapseOnScroll || e[221] !== y
    ? ((dr =
        g.composerCollapseOnScroll === v.composerCollapseOnScroll
          ? null
          : (0, Q.jsx)(Y, {
              label: `collapse composer on scroll`,
              onClick: () => y({ composerCollapseOnScroll: v.composerCollapseOnScroll }),
            })),
      (e[220] = g.composerCollapseOnScroll),
      (e[221] = y),
      (e[222] = dr))
    : (dr = e[222]);
  let fr;
  e[223] === y
    ? (fr = e[224])
    : ((fr = (e) => y({ composerCollapseOnScroll: !!e })), (e[223] = y), (e[224] = fr));
  let pr;
  e[225] !== g.composerCollapseOnScroll || e[226] !== fr
    ? ((pr = (0, Q.jsx)(q, {
        checked: g.composerCollapseOnScroll,
        onCheckedChange: fr,
        "aria-label": `Collapse composer on scroll`,
      })),
      (e[225] = g.composerCollapseOnScroll),
      (e[226] = fr),
      (e[227] = pr))
    : (pr = e[227]);
  let mr;
  e[228] !== dr || e[229] !== pr
    ? ((mr = (0, Q.jsx)(J, {
        ...ur,
        description: `Rest the composer of an existing thread into a single line when you scroll the conversation. Focus the composer or start typing to expand it again.`,
        resetAction: dr,
        control: pr,
      })),
      (e[228] = dr),
      (e[229] = pr),
      (e[230] = mr))
    : (mr = e[230]);
  let hr;
  e[231] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((hr = K(`send-shortcut`)), (e[231] = hr))
    : (hr = e[231]);
  let gr;
  e[232] !== g.sendShortcut || e[233] !== y
    ? ((gr =
        g.sendShortcut === v.sendShortcut
          ? null
          : (0, Q.jsx)(Y, {
              label: `send shortcut`,
              onClick: () => y({ sendShortcut: v.sendShortcut }),
            })),
      (e[232] = g.sendShortcut),
      (e[233] = y),
      (e[234] = gr))
    : (gr = e[234]);
  let _r;
  e[235] === y
    ? (_r = e[236])
    : ((_r = (e) => {
        let t = c.find((t) => t.value === e);
        t && y({ sendShortcut: t.value });
      }),
      (e[235] = y),
      (e[236] = _r));
  let vr = c.find((e) => e.value === g.sendShortcut)?.label,
    yr;
  e[237] === vr
    ? (yr = e[238])
    : ((yr = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-auto min-w-0 max-w-full`,
        "aria-label": `Send shortcut`,
        children: (0, Q.jsx)(B, { children: vr }),
      })),
      (e[237] = vr),
      (e[238] = yr));
  let br;
  e[239] === g.sendShortcut
    ? (br = e[240])
    : ((br = (0, Q.jsx)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: c.map((e) =>
          (0, Q.jsx)(
            z,
            {
              value: e.value,
              children: (0, Q.jsxs)(`span`, {
                className: `flex items-center justify-between gap-4`,
                children: [
                  e.label,
                  g.sendShortcut === e.value && (0, Q.jsx)(a, { "aria-hidden": `true` }),
                ],
              }),
            },
            e.value,
          ),
        ),
      })),
      (e[239] = g.sendShortcut),
      (e[240] = br));
  let xr;
  e[241] !== g.sendShortcut || e[242] !== _r || e[243] !== yr || e[244] !== br
    ? ((xr = (0, Q.jsxs)(ie, { value: g.sendShortcut, onValueChange: _r, children: [yr, br] })),
      (e[241] = g.sendShortcut),
      (e[242] = _r),
      (e[243] = yr),
      (e[244] = br),
      (e[245] = xr))
    : (xr = e[245]);
  let Sr;
  e[246] !== gr || e[247] !== xr
    ? ((Sr = (0, Q.jsx)(J, {
        ...hr,
        description: `Choose when Enter sends a prompt or inserts a new line`,
        resetAction: gr,
        control: xr,
      })),
      (e[246] = gr),
      (e[247] = xr),
      (e[248] = Sr))
    : (Sr = e[248]);
  let Cr;
  e[249] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Cr = K(`follow-up-behavior`)), (e[249] = Cr))
    : (Cr = e[249]);
  let wr =
      `Queue follow-ups while the agent runs or steer the current run. ` +
      (g.sendShortcut === `mod-enter-multiline`
        ? `Press ${i} + Enter for single-line prompts or ${i} + Shift + Enter for multiline prompts to do the opposite for one message.`
        : `Press ${i}${g.sendShortcut === `mod-enter` ? ` + Shift` : ``} + Enter to do the opposite for one message.`),
    Tr;
  e[250] !== g.followUpBehavior || e[251] !== y
    ? ((Tr =
        g.followUpBehavior === v.followUpBehavior
          ? null
          : (0, Q.jsx)(Y, {
              label: `follow-up behavior`,
              onClick: () => y({ followUpBehavior: v.followUpBehavior }),
            })),
      (e[250] = g.followUpBehavior),
      (e[251] = y),
      (e[252] = Tr))
    : (Tr = e[252]);
  let Er;
  e[253] === y
    ? (Er = e[254])
    : ((Er = (e) => {
        (e === `queue` || e === `steer`) && y({ followUpBehavior: e });
      }),
      (e[253] = y),
      (e[254] = Er));
  let Dr = g.followUpBehavior === `queue` ? `Queue` : `Steer`,
    Or;
  e[255] === Dr
    ? (Or = e[256])
    : ((Or = (0, Q.jsx)(re, {
        size: `sm`,
        className: `w-auto min-w-0`,
        "aria-label": `Follow-up behavior`,
        children: (0, Q.jsx)(B, { children: Dr }),
      })),
      (e[255] = Dr),
      (e[256] = Or));
  let kr;
  e[257] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kr = (0, Q.jsxs)(V, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [
          (0, Q.jsx)(z, { value: `queue`, children: `Queue` }),
          (0, Q.jsx)(z, { value: `steer`, children: `Steer` }),
        ],
      })),
      (e[257] = kr))
    : (kr = e[257]);
  let Ar;
  e[258] !== g.followUpBehavior || e[259] !== Er || e[260] !== Or
    ? ((Ar = (0, Q.jsxs)(ie, { value: g.followUpBehavior, onValueChange: Er, children: [Or, kr] })),
      (e[258] = g.followUpBehavior),
      (e[259] = Er),
      (e[260] = Or),
      (e[261] = Ar))
    : (Ar = e[261]);
  let jr;
  e[262] !== wr || e[263] !== Tr || e[264] !== Ar
    ? ((jr = (0, Q.jsx)(J, { ...Cr, description: wr, resetAction: Tr, control: Ar })),
      (e[262] = wr),
      (e[263] = Tr),
      (e[264] = Ar),
      (e[265] = jr))
    : (jr = e[265]);
  let Mr, Nr;
  e[266] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mr = [`enableProviderUpdateChecks`]),
      (Nr = K(`provider-update-checks`)),
      (e[266] = Mr),
      (e[267] = Nr))
    : ((Mr = e[266]), (Nr = e[267]));
  let Pr;
  e[268] !== g.enableProviderUpdateChecks || e[269] !== y
    ? ((Pr =
        g.enableProviderUpdateChecks === v.enableProviderUpdateChecks
          ? null
          : (0, Q.jsx)(Y, {
              label: `provider update checks`,
              onClick: () => y({ enableProviderUpdateChecks: v.enableProviderUpdateChecks }),
            })),
      (e[268] = g.enableProviderUpdateChecks),
      (e[269] = y),
      (e[270] = Pr))
    : (Pr = e[270]);
  let Fr;
  e[271] === y
    ? (Fr = e[272])
    : ((Fr = (e) => y({ enableProviderUpdateChecks: !!e })), (e[271] = y), (e[272] = Fr));
  let Ir;
  e[273] !== g.enableProviderUpdateChecks || e[274] !== Fr
    ? ((Ir = (0, Q.jsx)(q, {
        checked: g.enableProviderUpdateChecks,
        onCheckedChange: Fr,
        "aria-label": `Check provider versions`,
      })),
      (e[273] = g.enableProviderUpdateChecks),
      (e[274] = Fr),
      (e[275] = Ir))
    : (Ir = e[275]);
  let Lr;
  e[276] !== Pr || e[277] !== Ir
    ? ((Lr = (0, Q.jsx)(J, {
        serverScoped: !0,
        settingKeys: Mr,
        ...Nr,
        description: `Check installed provider CLIs for newer available versions and fetch model catalog updates. When off, new models may not appear.`,
        resetAction: Pr,
        control: Ir,
      })),
      (e[276] = Pr),
      (e[277] = Ir),
      (e[278] = Lr))
    : (Lr = e[278]);
  let Rr;
  e[279] !== g.showProviderUsageInContextPopover || e[280] !== y
    ? ((Rr =
        g.showProviderUsageInContextPopover === v.showProviderUsageInContextPopover
          ? null
          : (0, Q.jsx)(Y, {
              label: `provider usage in chat`,
              onClick: () =>
                y({ showProviderUsageInContextPopover: v.showProviderUsageInContextPopover }),
            })),
      (e[279] = g.showProviderUsageInContextPopover),
      (e[280] = y),
      (e[281] = Rr))
    : (Rr = e[281]);
  let zr;
  e[282] === y
    ? (zr = e[283])
    : ((zr = (e) => y({ showProviderUsageInContextPopover: !!e })), (e[282] = y), (e[283] = zr));
  let Br;
  e[284] !== g.showProviderUsageInContextPopover || e[285] !== zr
    ? ((Br = (0, Q.jsx)(q, {
        checked: g.showProviderUsageInContextPopover,
        onCheckedChange: zr,
        "aria-label": `Show provider usage in context window popover`,
      })),
      (e[284] = g.showProviderUsageInContextPopover),
      (e[285] = zr),
      (e[286] = Br))
    : (Br = e[286]);
  let Vr;
  e[287] !== Rr || e[288] !== Br
    ? ((Vr = (0, Q.jsx)(J, {
        title: `Provider usage in chat`,
        description: `Show the active provider's subscription limits in the context window popover.`,
        resetAction: Rr,
        control: Br,
      })),
      (e[287] = Rr),
      (e[288] = Br),
      (e[289] = Vr))
    : (Vr = e[289]);
  let Hr;
  e[290] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Hr = (0, Q.jsx)(Ft, {})), (e[290] = Hr))
    : (Hr = e[290]);
  let Ur;
  e[291] !== lr ||
  e[292] !== mr ||
  e[293] !== Sr ||
  e[294] !== jr ||
  e[295] !== Lr ||
  e[296] !== Vr ||
  e[297] !== ze ||
  e[298] !== Xe ||
  e[299] !== mt ||
  e[300] !== xt ||
  e[301] !== $ ||
  e[302] !== zt ||
  e[303] !== Bt ||
  e[304] !== Ut ||
  e[305] !== Zt ||
  e[306] !== fn ||
  e[307] !== Fn ||
  e[308] !== Bn ||
  e[309] !== Jn ||
  e[310] !== $n ||
  e[311] !== ir
    ? ((Ur = (0, Q.jsxs)(qe, {
        title: `General`,
        children: [
          ze,
          Xe,
          mt,
          xt,
          $,
          zt,
          Bt,
          Ut,
          Zt,
          fn,
          Fn,
          Bn,
          Jn,
          $n,
          ir,
          lr,
          mr,
          Sr,
          jr,
          Lr,
          Vr,
          Hr,
        ],
      })),
      (e[291] = lr),
      (e[292] = mr),
      (e[293] = Sr),
      (e[294] = jr),
      (e[295] = Lr),
      (e[296] = Vr),
      (e[297] = ze),
      (e[298] = Xe),
      (e[299] = mt),
      (e[300] = xt),
      (e[301] = $),
      (e[302] = zt),
      (e[303] = Bt),
      (e[304] = Ut),
      (e[305] = Zt),
      (e[306] = fn),
      (e[307] = Fn),
      (e[308] = Bn),
      (e[309] = Jn),
      (e[310] = $n),
      (e[311] = ir),
      (e[312] = Ur))
    : (Ur = e[312]);
  let Wr = qe,
    Gr,
    Kr;
  e[313] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gr = [`newWorktreesStartFromOrigin`]),
      (Kr = K(`start-from-origin`)),
      (e[313] = Gr),
      (e[314] = Kr))
    : ((Gr = e[313]), (Kr = e[314]));
  let qr;
  e[315] !== g.defaultThreadEnvMode || e[316] !== g.newWorktreesStartFromOrigin || e[317] !== y
    ? ((qr =
        g.defaultThreadEnvMode !== v.defaultThreadEnvMode ||
        g.newWorktreesStartFromOrigin !== v.newWorktreesStartFromOrigin
          ? (0, Q.jsx)(Y, {
              label: `new worktrees start from remote`,
              onClick: () =>
                y({
                  defaultThreadEnvMode: v.defaultThreadEnvMode,
                  newWorktreesStartFromOrigin: v.newWorktreesStartFromOrigin,
                }),
            })
          : null),
      (e[315] = g.defaultThreadEnvMode),
      (e[316] = g.newWorktreesStartFromOrigin),
      (e[317] = y),
      (e[318] = qr))
    : (qr = e[318]);
  let Jr;
  e[319] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Jr = [`newWorktreesStartFromOrigin`]), (e[319] = Jr))
    : (Jr = e[319]);
  let Yr;
  e[320] === y
    ? (Yr = e[321])
    : ((Yr = (e) => y({ newWorktreesStartFromOrigin: !!e })), (e[320] = y), (e[321] = Yr));
  let Xr;
  e[322] !== g.newWorktreesStartFromOrigin || e[323] !== Yr
    ? ((Xr = (0, Q.jsx)($e, {
        settingKeys: Jr,
        checked: g.newWorktreesStartFromOrigin,
        onCheckedChange: Yr,
        "aria-label": `Start new worktrees from remote by default`,
      })),
      (e[322] = g.newWorktreesStartFromOrigin),
      (e[323] = Yr),
      (e[324] = Xr))
    : (Xr = e[324]);
  let Zr;
  e[325] !== qr || e[326] !== Xr
    ? ((Zr = (0, Q.jsx)(J, {
        serverScoped: !0,
        settingKeys: Gr,
        ...Kr,
        description: `Uses the latest commit of the base branch’s tracked remote branch, even if its name differs. Otherwise uses the same-named branch on origin. Uses your local branch if that remote branch is missing.`,
        resetAction: qr,
        control: Xr,
      })),
      (e[325] = qr),
      (e[326] = Xr),
      (e[327] = Zr))
    : (Zr = e[327]);
  let Qr;
  e[328] !== g.defaultThreadEnvMode || e[329] !== g.newWorktreesStartFromOrigin || e[330] !== y
    ? ((Qr =
        g.defaultThreadEnvMode === `worktree`
          ? (0, Q.jsx)(J, {
              className: `bg-muted/20 sm:pl-9`,
              title: K(`start-from-origin`).title,
              description: `Creates the worktree from the latest matching branch on origin instead of your local branch.`,
              resetAction:
                g.newWorktreesStartFromOrigin === v.newWorktreesStartFromOrigin
                  ? null
                  : (0, Q.jsx)(Y, {
                      label: `new worktrees start from origin`,
                      onClick: () =>
                        y({ newWorktreesStartFromOrigin: v.newWorktreesStartFromOrigin }),
                    }),
              control: (0, Q.jsx)(q, {
                checked: g.newWorktreesStartFromOrigin,
                onCheckedChange: (e) => y({ newWorktreesStartFromOrigin: !!e }),
                "aria-label": `Start new worktrees from origin by default`,
              }),
            })
          : null),
      (e[328] = g.defaultThreadEnvMode),
      (e[329] = g.newWorktreesStartFromOrigin),
      (e[330] = y),
      (e[331] = Qr))
    : (Qr = e[331]);
  let $r;
  e[332] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($r = K(`add-project-starts-in`)), (e[332] = $r))
    : ($r = e[332]);
  let ei;
  e[333] !== g.addProjectBaseDirectory || e[334] !== y
    ? ((ei =
        g.addProjectBaseDirectory === v.addProjectBaseDirectory
          ? null
          : (0, Q.jsx)(Y, {
              label: `add project base directory`,
              onClick: () => y({ addProjectBaseDirectory: v.addProjectBaseDirectory }),
            })),
      (e[333] = g.addProjectBaseDirectory),
      (e[334] = y),
      (e[335] = ei))
    : (ei = e[335]);
  let ti;
  e[336] === y
    ? (ti = e[337])
    : ((ti = (e) => y({ addProjectBaseDirectory: e })), (e[336] = y), (e[337] = ti));
  let ni;
  e[338] !== g.addProjectBaseDirectory || e[339] !== ti
    ? ((ni = (0, Q.jsx)(it, {
        className: `w-full sm:w-72`,
        value: g.addProjectBaseDirectory,
        onCommit: ti,
        placeholder: `~/`,
        spellCheck: !1,
        "aria-label": `Add project base directory`,
      })),
      (e[338] = g.addProjectBaseDirectory),
      (e[339] = ti),
      (e[340] = ni))
    : (ni = e[340]);
  let ri;
  e[341] !== ei || e[342] !== ni
    ? ((ri = (0, Q.jsx)(J, {
        ...$r,
        description: `Leave empty to use "~/" when the Add Project browser opens.`,
        resetAction: ei,
        control: ni,
      })),
      (e[341] = ei),
      (e[342] = ni),
      (e[343] = ri))
    : (ri = e[343]);
  let ii;
  e[344] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ii = K(`unpin-confirmation`)), (e[344] = ii))
    : (ii = e[344]);
  let ai;
  e[345] !== g.confirmThreadUnpin || e[346] !== y
    ? ((ai =
        g.confirmThreadUnpin === v.confirmThreadUnpin
          ? null
          : (0, Q.jsx)(Y, {
              label: `unpin confirmation`,
              onClick: () => y({ confirmThreadUnpin: v.confirmThreadUnpin }),
            })),
      (e[345] = g.confirmThreadUnpin),
      (e[346] = y),
      (e[347] = ai))
    : (ai = e[347]);
  let oi;
  e[348] === y
    ? (oi = e[349])
    : ((oi = (e) => y({ confirmThreadUnpin: !!e })), (e[348] = y), (e[349] = oi));
  let si;
  e[350] !== g.confirmThreadUnpin || e[351] !== oi
    ? ((si = (0, Q.jsx)(q, {
        checked: g.confirmThreadUnpin,
        onCheckedChange: oi,
        "aria-label": `Confirm thread unpinning`,
      })),
      (e[350] = g.confirmThreadUnpin),
      (e[351] = oi),
      (e[352] = si))
    : (si = e[352]);
  let ci;
  e[353] !== ai || e[354] !== si
    ? ((ci = (0, Q.jsx)(J, {
        ...ii,
        description: `Ask before unpinning a thread from the pinned section.`,
        resetAction: ai,
        control: si,
      })),
      (e[353] = ai),
      (e[354] = si),
      (e[355] = ci))
    : (ci = e[355]);
  let li;
  e[356] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((li = K(`archive-confirmation`)), (e[356] = li))
    : (li = e[356]);
  let ui;
  e[357] !== g.confirmThreadArchive || e[358] !== y
    ? ((ui =
        g.confirmThreadArchive === v.confirmThreadArchive
          ? null
          : (0, Q.jsx)(Y, {
              label: `archive confirmation`,
              onClick: () => y({ confirmThreadArchive: v.confirmThreadArchive }),
            })),
      (e[357] = g.confirmThreadArchive),
      (e[358] = y),
      (e[359] = ui))
    : (ui = e[359]);
  let di;
  e[360] === y
    ? (di = e[361])
    : ((di = (e) => y({ confirmThreadArchive: !!e })), (e[360] = y), (e[361] = di));
  let fi;
  e[362] !== g.confirmThreadArchive || e[363] !== di
    ? ((fi = (0, Q.jsx)(q, {
        checked: g.confirmThreadArchive,
        onCheckedChange: di,
        "aria-label": `Confirm thread archiving`,
      })),
      (e[362] = g.confirmThreadArchive),
      (e[363] = di),
      (e[364] = fi))
    : (fi = e[364]);
  let pi;
  e[365] !== ui || e[366] !== fi
    ? ((pi = (0, Q.jsx)(J, {
        ...li,
        description: `Require a second click on the inline archive action before a thread is archived.`,
        resetAction: ui,
        control: fi,
      })),
      (e[365] = ui),
      (e[366] = fi),
      (e[367] = pi))
    : (pi = e[367]);
  let mi;
  e[368] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mi = K(`delete-confirmation`)), (e[368] = mi))
    : (mi = e[368]);
  let hi;
  e[369] !== g.confirmThreadDelete || e[370] !== y
    ? ((hi =
        g.confirmThreadDelete === v.confirmThreadDelete
          ? null
          : (0, Q.jsx)(Y, {
              label: `delete confirmation`,
              onClick: () => y({ confirmThreadDelete: v.confirmThreadDelete }),
            })),
      (e[369] = g.confirmThreadDelete),
      (e[370] = y),
      (e[371] = hi))
    : (hi = e[371]);
  let gi;
  e[372] === y
    ? (gi = e[373])
    : ((gi = (e) => y({ confirmThreadDelete: !!e })), (e[372] = y), (e[373] = gi));
  let _i;
  e[374] !== g.confirmThreadDelete || e[375] !== gi
    ? ((_i = (0, Q.jsx)(q, {
        checked: g.confirmThreadDelete,
        onCheckedChange: gi,
        "aria-label": `Confirm thread deletion`,
      })),
      (e[374] = g.confirmThreadDelete),
      (e[375] = gi),
      (e[376] = _i))
    : (_i = e[376]);
  let vi;
  e[377] !== hi || e[378] !== _i
    ? ((vi = (0, Q.jsx)(J, {
        ...mi,
        description: `Ask before deleting a thread and its chat history.`,
        resetAction: hi,
        control: _i,
      })),
      (e[377] = hi),
      (e[378] = _i),
      (e[379] = vi))
    : (vi = e[379]);
  let yi;
  e[380] !== g.confirmQuit || e[381] !== y
    ? ((yi = C
        ? (0, Q.jsx)(J, {
            ...K(`quit-confirmation`),
            description: `Require holding the quit shortcut before the desktop app quits. A quick tap shows a hint instead.`,
            resetAction:
              g.confirmQuit === v.confirmQuit
                ? null
                : (0, Q.jsx)(Y, {
                    label: `quit confirmation`,
                    onClick: () => y({ confirmQuit: v.confirmQuit }),
                  }),
            control: (0, Q.jsx)(q, {
              checked: g.confirmQuit !== `direct`,
              onCheckedChange: (e) => y({ confirmQuit: e ? `hold` : `direct` }),
              "aria-label": `Hold to quit`,
            }),
          })
        : null),
      (e[380] = g.confirmQuit),
      (e[381] = y),
      (e[382] = yi))
    : (yi = e[382]);
  let bi = J,
    xi,
    Si;
  e[383] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xi = [`textGenerationModelSelection`]),
      (Si = K(`text-generation-model`)),
      (e[383] = xi),
      (e[384] = Si))
    : ((xi = e[383]), (Si = e[384]));
  let Ci;
  e[385] !== L || e[386] !== ke || e[387] !== y
    ? ((Ci =
        L && ke
          ? (0, Q.jsx)(Y, {
              label: `text generation model`,
              onClick: () => y({ textGenerationModelSelection: v.textGenerationModelSelection }),
            })
          : null),
      (e[385] = L),
      (e[386] = ke),
      (e[387] = y),
      (e[388] = Ci))
    : (Ci = e[388]);
  let wi = L
      ? Ce
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center justify-end gap-1.5`,
            children: [
              (0, Q.jsx)(nt, {
                environmentId: I,
                activeInstanceId: ye,
                model: be,
                lockedProvider: null,
                instanceEntries: Se,
                modelOptionsByInstance: Ee,
                triggerClassName: Ge,
                ...(Ne ? { triggerLabel: `Mixed` } : {}),
                getModelDisabledReason: Ae,
                ...(I
                  ? {
                      onOpenProviderSetup: (e) => {
                        S({
                          to: `/settings/providers`,
                          search: { environmentId: I, instanceId: e },
                        });
                      },
                    }
                  : {}),
                onInstanceModelChange: (e, t) => {
                  let n = Ae(e, t);
                  n
                    ? W.add({
                        type: `error`,
                        title: `Text generation model not saved`,
                        description: n,
                      })
                    : y({
                        textGenerationModelSelection: u(
                          { ...g, textGenerationModelSelection: s(e, t) },
                          _e,
                        ),
                      });
                },
              }),
              we
                ? (0, Q.jsx)(ne, {
                    provider: Te,
                    models: we?.models ?? [],
                    model: be,
                    modelOptions: xe,
                    allowPromptInjectedEffort: !1,
                    planModeEnabled: g.planModeEnabled || p(xe),
                    triggerClassName: Ge,
                    onModelOptionsChange: (e) => {
                      y({
                        textGenerationModelSelection: u(
                          { ...g, textGenerationModelSelection: s(ye, be, e) },
                          _e,
                        ),
                      });
                    },
                  })
                : null,
            ],
          })
        : (0, Q.jsx)(`span`, {
            className: `text-sm text-muted-foreground`,
            children: `No text generation providers available.`,
          })
      : (0, Q.jsx)(`span`, {
          className: `text-sm text-muted-foreground`,
          children: `Connect an environment to choose its text generation model.`,
        }),
    Ti;
  e[389] !== bi || e[390] !== xi || e[391] !== Si || e[392] !== Ci || e[393] !== wi
    ? ((Ti = (0, Q.jsx)(bi, {
        serverScoped: !0,
        settingKeys: xi,
        ...Si,
        description: `Default model for generated text like thread titles and source control content. Source control settings can override it with a dedicated source control writer model.`,
        resetAction: Ci,
        control: wi,
      })),
      (e[389] = bi),
      (e[390] = xi),
      (e[391] = Si),
      (e[392] = Ci),
      (e[393] = wi),
      (e[394] = Ti))
    : (Ti = e[394]);
  let Ei;
  e[395] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ei = (0, Q.jsx)(St, {})), (e[395] = Ei))
    : (Ei = e[395]);
  let Di;
  e[396] !== Wr ||
  e[397] !== Zr ||
  e[398] !== Qr ||
  e[399] !== ri ||
  e[400] !== ci ||
  e[401] !== pi ||
  e[402] !== vi ||
  e[403] !== yi ||
  e[404] !== Ti
    ? ((Di = (0, Q.jsxs)(Wr, {
        id: `projects-and-threads`,
        title: `Projects & threads`,
        children: [Zr, Qr, ri, ci, pi, vi, yi, Ti, Ei],
      })),
      (e[396] = Wr),
      (e[397] = Zr),
      (e[398] = Qr),
      (e[399] = ri),
      (e[400] = ci),
      (e[401] = pi),
      (e[402] = vi),
      (e[403] = yi),
      (e[404] = Ti),
      (e[405] = Di))
    : (Di = e[405]);
  let Oi;
  e[406] !== g.tts || e[407] !== y
    ? ((Oi =
        g.tts.enabled === v.tts.enabled
          ? null
          : (0, Q.jsx)(Y, {
              label: `text-to-speech`,
              onClick: () => y({ tts: { ...g.tts, enabled: v.tts.enabled } }),
            })),
      (e[406] = g.tts),
      (e[407] = y),
      (e[408] = Oi))
    : (Oi = e[408]);
  let ki;
  e[409] !== g.tts || e[410] !== y
    ? ((ki = (e) => y({ tts: { ...g.tts, enabled: !!e } })),
      (e[409] = g.tts),
      (e[410] = y),
      (e[411] = ki))
    : (ki = e[411]);
  let Ai;
  e[412] !== g.tts.enabled || e[413] !== ki
    ? ((Ai = (0, Q.jsx)(q, {
        checked: g.tts.enabled,
        onCheckedChange: ki,
        "aria-label": `Enable text-to-speech playback`,
      })),
      (e[412] = g.tts.enabled),
      (e[413] = ki),
      (e[414] = Ai))
    : (Ai = e[414]);
  let ji;
  e[415] !== Oi || e[416] !== Ai
    ? ((ji = (0, Q.jsx)(J, {
        title: `Read assistant messages`,
        description: `Show a play button next to completed assistant messages. Audio is generated by this environment's TTS server.`,
        resetAction: Oi,
        control: Ai,
      })),
      (e[415] = Oi),
      (e[416] = Ai),
      (e[417] = ji))
    : (ji = e[417]);
  let Mi;
  e[418] !== g.tts || e[419] !== y
    ? ((Mi =
        g.tts.autoplay === v.tts.autoplay
          ? null
          : (0, Q.jsx)(Y, {
              label: `TTS autoplay`,
              onClick: () => y({ tts: { ...g.tts, autoplay: v.tts.autoplay } }),
            })),
      (e[418] = g.tts),
      (e[419] = y),
      (e[420] = Mi))
    : (Mi = e[420]);
  let Ni;
  e[421] !== g.tts || e[422] !== y
    ? ((Ni = (e) => y({ tts: { ...g.tts, autoplay: !!e } })),
      (e[421] = g.tts),
      (e[422] = y),
      (e[423] = Ni))
    : (Ni = e[423]);
  let Pi;
  e[424] !== g.tts.autoplay || e[425] !== Ni
    ? ((Pi = (0, Q.jsx)(q, {
        checked: g.tts.autoplay,
        onCheckedChange: Ni,
        "aria-label": `Autoplay spoken messages`,
      })),
      (e[424] = g.tts.autoplay),
      (e[425] = Ni),
      (e[426] = Pi))
    : (Pi = e[426]);
  let Fi;
  e[427] !== Mi || e[428] !== Pi
    ? ((Fi = (0, Q.jsx)(J, {
        title: `Autoplay spoken messages`,
        description: `Automatically read a t3_speak message aloud the first time the agent sends one. Turn off to only play from the play button.`,
        resetAction: Mi,
        control: Pi,
      })),
      (e[427] = Mi),
      (e[428] = Pi),
      (e[429] = Fi))
    : (Fi = e[429]);
  let Ii;
  e[430] !== g.tts || e[431] !== y
    ? ((Ii =
        g.tts.serverUrl === v.tts.serverUrl
          ? null
          : (0, Q.jsx)(Y, {
              label: `TTS server URL`,
              onClick: () => y({ tts: { ...g.tts, serverUrl: v.tts.serverUrl } }),
            })),
      (e[430] = g.tts),
      (e[431] = y),
      (e[432] = Ii))
    : (Ii = e[432]);
  let Li;
  e[433] !== g.tts || e[434] !== y
    ? ((Li = (e) => y({ tts: { ...g.tts, serverUrl: e.target.value } })),
      (e[433] = g.tts),
      (e[434] = y),
      (e[435] = Li))
    : (Li = e[435]);
  let Ri;
  e[436] !== g.tts.serverUrl || e[437] !== Li
    ? ((Ri = (0, Q.jsx)(T, {
        className: `w-full sm:w-72`,
        value: g.tts.serverUrl,
        onChange: Li,
        placeholder: `http://127.0.0.1:8880`,
        spellCheck: !1,
        "aria-label": `TTS server URL`,
      })),
      (e[436] = g.tts.serverUrl),
      (e[437] = Li),
      (e[438] = Ri))
    : (Ri = e[438]);
  let zi;
  e[439] !== g.tts.voice || e[440] !== t
    ? ((zi = (0, Q.jsx)(l, {
        size: `xs`,
        variant: `outline`,
        onClick: () => {
          t.play(
            r,
            `This is the ${g.tts.voice || `af_heart`} voice. The quick brown fox jumps over the lazy dog.`,
            null,
          ).catch(Sn);
        },
        children: `Test`,
      })),
      (e[439] = g.tts.voice),
      (e[440] = t),
      (e[441] = zi))
    : (zi = e[441]);
  let Bi;
  e[442] !== Ri || e[443] !== zi
    ? ((Bi = (0, Q.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-end gap-1.5 sm:w-auto`,
        children: [Ri, zi],
      })),
      (e[442] = Ri),
      (e[443] = zi),
      (e[444] = Bi))
    : (Bi = e[444]);
  let Vi;
  e[445] !== Ii || e[446] !== Bi
    ? ((Vi = (0, Q.jsx)(J, {
        title: `Server URL`,
        description: `Leave blank to synthesize through this server (recommended). Set a URL to use an external OpenAI-compatible TTS server, e.g. http://127.0.0.1:8880.`,
        resetAction: Ii,
        control: Bi,
      })),
      (e[445] = Ii),
      (e[446] = Bi),
      (e[447] = Vi))
    : (Vi = e[447]);
  let Hi;
  e[448] === g.tts.serverUrl
    ? (Hi = e[449])
    : ((Hi = (0, Q.jsx)($t, { serverUrl: g.tts.serverUrl })),
      (e[448] = g.tts.serverUrl),
      (e[449] = Hi));
  let Ui;
  e[450] !== g.tts || e[451] !== x || e[452] !== y
    ? ((Ui =
        x.length > 1
          ? (0, Q.jsx)(J, {
              title: `Voice`,
              description: `The voice the TTS server speaks.`,
              resetAction:
                g.tts.voice === v.tts.voice
                  ? null
                  : (0, Q.jsx)(Y, {
                      label: `TTS voice`,
                      onClick: () => y({ tts: { ...g.tts, voice: v.tts.voice } }),
                    }),
              control: (0, Q.jsxs)(ie, {
                value: g.tts.voice,
                onValueChange: (e) => {
                  typeof e == `string` && e.length > 0 && y({ tts: { ...g.tts, voice: e } });
                },
                children: [
                  (0, Q.jsx)(re, {
                    className: `w-full sm:w-44`,
                    "aria-label": `TTS voice`,
                    children: (0, Q.jsx)(B, { children: g.tts.voice || `af_heart` }),
                  }),
                  (0, Q.jsx)(V, { align: `end`, alignItemWithTrigger: !1, children: x.map(xn) }),
                ],
              }),
            })
          : null),
      (e[450] = g.tts),
      (e[451] = x),
      (e[452] = y),
      (e[453] = Ui))
    : (Ui = e[453]);
  let Wi;
  e[454] !== ji || e[455] !== Fi || e[456] !== Vi || e[457] !== Hi || e[458] !== Ui
    ? ((Wi = (0, Q.jsxs)(qe, { title: `Text-to-speech`, children: [ji, Fi, Vi, Hi, Ui] })),
      (e[454] = ji),
      (e[455] = Fi),
      (e[456] = Vi),
      (e[457] = Hi),
      (e[458] = Ui),
      (e[459] = Wi))
    : (Wi = e[459]);
  let Gi, Ki;
  e[460] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gi =
        C || j
          ? (0, Q.jsx)(ln, {})
          : (0, Q.jsx)(Q.Fragment, {
              children: (0, Q.jsx)(J, {
                id: K(`app-version`).id,
                title: (0, Q.jsx)(cn, {}),
                description: `Current version of the application.`,
              }),
            })),
      (Ki = (0, Q.jsx)(bt, {})),
      (e[460] = Gi),
      (e[461] = Ki))
    : ((Gi = e[460]), (Ki = e[461]));
  let qi;
  e[462] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qi = K(`privacy-policy`)), (e[462] = qi))
    : (qi = e[462]);
  let Ji;
  e[463] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ji = (0, Q.jsxs)(qe, {
        title: `About`,
        children: [
          Gi,
          Ki,
          (0, Q.jsx)(J, {
            ...qi,
            description: `How we handle your data, including the anonymous usage data T3 Code collects.`,
            control: (0, Q.jsx)(l, {
              render: (0, Q.jsx)(`a`, { href: tt, target: `_blank`, rel: `noreferrer noopener` }),
              size: `sm`,
              variant: `outline`,
              children: `View policy`,
            }),
          }),
        ],
      })),
      (e[463] = Ji))
    : (Ji = e[463]);
  let Yi;
  e[464] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yi = K(`diagnostics`)), (e[464] = Yi))
    : (Yi = e[464]);
  let Xi = ge
      ? `Inspect processes, resource use, and logs on this environment.`
      : `Inspect processes, resource use, and logs on one environment at a time.`,
    Zi = I ?? void 0,
    Qi;
  e[465] === Zi
    ? (Qi = e[466])
    : ((Qi = (0, Q.jsx)(l, {
        render: (0, Q.jsx)(me, { to: `/settings/diagnostics`, search: { machine: Zi } }),
        size: `xs`,
        variant: `outline`,
        children: `View diagnostics`,
      })),
      (e[465] = Zi),
      (e[466] = Qi));
  let $i;
  e[467] !== Xi || e[468] !== Qi
    ? (($i = (0, Q.jsx)(J, { ...Yi, description: Xi, control: Qi })),
      (e[467] = Xi),
      (e[468] = Qi),
      (e[469] = $i))
    : ($i = e[469]);
  let ea;
  e[470] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ea = K(`open-source-licenses`)), (e[470] = ea))
    : (ea = e[470]);
  let ta;
  e[471] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ta = (0, Q.jsx)(J, {
        ...ea,
        description: `Notices for dependencies, assets, and optional tools used by T3 Code.`,
        control: (0, Q.jsx)(l, {
          render: (0, Q.jsx)(me, { to: `/settings/open-source-licenses` }),
          size: `sm`,
          variant: `outline`,
          children: `View licenses`,
        }),
      })),
      (e[471] = ta))
    : (ta = e[471]);
  let na;
  e[472] === $i
    ? (na = e[473])
    : ((na = (0, Q.jsxs)(qe, { title: `Diagnostics`, children: [$i, ta] })),
      (e[472] = $i),
      (e[473] = na));
  let ra;
  e[474] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ra = (0, Q.jsx)(yn, {})), (e[474] = ra))
    : (ra = e[474]);
  let ia;
  return (
    e[475] !== Pe || e[476] !== Ur || e[477] !== Di || e[478] !== Wi || e[479] !== na
      ? ((ia = (0, Q.jsxs)(Pe, { children: [Ur, Di, Wi, Ji, na, ra] })),
        (e[475] = Pe),
        (e[476] = Ur),
        (e[477] = Di),
        (e[478] = Wi),
        (e[479] = na),
        (e[480] = ia))
      : (ia = e[480]),
    ia
  );
}
function xn(e) {
  return (0, Q.jsx)(z, { hideIndicator: !0, value: e, children: e }, e);
}
function Sn() {}
function Cn(e) {
  return e === null ? `Mixed` : en[e];
}
function wn(e) {
  return e === null ? `Mixed` : b.find((t) => t.value === e)?.label;
}
function Tn(e) {
  return (0, Q.jsx)(z, { hideIndicator: !0, value: e, children: nn[e] }, e);
}
function En(e) {
  return e.enabled && e.isAvailable;
}
function Dn(e) {
  return e.supportsTextGeneration !== !1;
}
function On(e) {
  return e.serverConfig?.environment.capabilities.threadRestartContinuation === !0;
}
function kn(e) {
  return e.serverConfig?.environment.capabilities.threadAutoSettlementScope === !0;
}
function An(e) {
  return e.serverConfig?.environment.capabilities.threadAutoSettlement === !0;
}
export { hn as n, bn as t };
//# sourceMappingURL=SettingsPanels-zddqWiGN.js.map
