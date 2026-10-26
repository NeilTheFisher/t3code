import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i } from "./search-BrluOr7L.js";
import { s as a } from "./wifi-off-BWB4rJNd.js";
import { _ as o } from "./workflow-BDTBfiWX.js";
import { a as s, i as c, n as l, r as u, t as d } from "./type-Ixrb4Vs0.js";
import { t as f } from "./camera-B4warUo1.js";
import { t as p } from "./chevron-left-2d_b8ldp.js";
import { t as m } from "./circle-alert-BdjXOepq.js";
import { t as h } from "./ellipsis-C2hnEJ6l.js";
import { t as g } from "./keyboard-C7yM3jq5.js";
import { t as _ } from "./sliders-horizontal-BfqZJi1k.js";
import { t as v } from "./smartphone-DSV2Q4YQ.js";
import { t as y } from "./square-Bnspdfnl.js";
import { t as b } from "./x-Blp0Exqg.js";
import {
  Bn as x,
  Dr as S,
  Qn as C,
  Vn as w,
  Wn as T,
  _r as E,
  ar as D,
  hr as O,
  ir as k,
  lr as A,
  mr as j,
  nr as M,
  or as N,
  sr as P,
  t as ee,
} from "./utils-CPoejuy5.js";
import { a as F, c as I, o as L, s as R, t as te } from "./select-CBCDohvC.js";
import { n as z, t as ne } from "./MorphIcon-DCVwjy7i.js";
import { t as B } from "./query-LKSVgBQH.js";
import { t as V } from "./use-atom-command-DGAuqAck.js";
import { c as re, l as H } from "./rightPanelStore-DEayojei.js";
import { R as ie } from "./PanelLayoutControls-CBiOLaSo.js";
import { n as ae } from "./dialog-BjeWpelT.js";
import { n as U, r as W, t as G } from "./collapsible-Dp2CGco9.js";
import { a as K, i as q, n as oe, t as J } from "./device-W9B5dhsq.js";
import { t as se } from "./hubAccess-CsZ8CNmg.js";
import { c as ce, d as le, i as Y, l as ue } from "./DeviceSetup-DRMkBPav.js";
import { t as X } from "./discovery-list-JybmEV9E.js";
import {
  Bs as de,
  Es as fe,
  Rs as pe,
  bs as me,
  cl as he,
  ll as ge,
  us as _e,
  zs as ve,
} from "./main-BZa0O6xN.js";
import { S as ye, _ as be, g as xe, v as Se } from "./_chat-LvMSbSFt.js";
var Z = e(t(), 1),
  Q = n(),
  Ce = class extends Error {
    status;
    constructor(e) {
      (super(`Screenshot capture failed (${e}). Try again.`), (this.status = e));
    }
  };
async function we(e, t) {
  let n = e.platform === `ios` ? `serve-sim` : `serve-emu`,
    r = se(
      `${e.access.httpBase}/vendor/${n}/api/screenshot?device=${encodeURIComponent(e.deviceId)}`,
      e.access,
    ),
    i = await fetch(r, {
      method: `POST`,
      credentials: e.access.credentials ? `include` : `omit`,
      signal: AbortSignal.any([t, AbortSignal.timeout(2e4)]),
    });
  if (!i.ok) throw new Ce(i.status);
  let a = await i.blob();
  if (!a.size) throw Error(`The device returned an empty screenshot. Try again.`);
  return a;
}
var Te = z(),
  $ = e(r(), 1);
function Ee(e) {
  let t = (0, Q.c)(94),
    { view: n, handle: r, controls: i } = e,
    o = i.detail?.settings,
    m = !r?.inputConnected,
    x = o?.appearance === `dark` ? `light` : `dark`,
    w;
  t[0] === r ? (w = t[1]) : ((w = () => r?.pressButton(`home`)), (t[0] = r), (t[1] = w));
  let T;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(c, {})), (t[2] = T))
    : (T = t[2]);
  let E;
  t[3] !== m || t[4] !== w
    ? ((E = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: `Home`,
        disabled: m,
        onClick: w,
        children: T,
      })),
      (t[3] = m),
      (t[4] = w),
      (t[5] = E))
    : (E = t[5]);
  let O;
  t[6] !== i || t[7] !== r || t[8] !== m || t[9] !== e.platform || t[10] !== n.keyboard?.attached
    ? ((O =
        e.platform === `android`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(ke, {
                  tooltipSide: `left`,
                  label: `Back`,
                  disabled: m,
                  onClick: () => r?.pressButton(`back`),
                  children: (0, $.jsx)(p, {}),
                }),
                (0, $.jsx)(ke, {
                  tooltipSide: `left`,
                  label: `Recents`,
                  disabled: m,
                  onClick: () => r?.pressButton(`recents`),
                  children: (0, $.jsx)(y, {}),
                }),
                (0, $.jsxs)(C, {
                  children: [
                    (0, $.jsx)(j, {
                      render: (0, $.jsx)(S, {
                        size: `icon-sm`,
                        variant: `ghost`,
                        "aria-label": `Rotate device`,
                        disabled: i.disabled,
                      }),
                      children: (0, $.jsx)(he, {}),
                    }),
                    (0, $.jsxs)(k, {
                      side: `left`,
                      children: [
                        (0, $.jsx)(M, {
                          onClick: () => void i.act({ type: `setOrientation`, value: `portrait` }),
                          children: `Portrait`,
                        }),
                        (0, $.jsx)(M, {
                          onClick: () =>
                            void i.act({ type: `setOrientation`, value: `landscape_left` }),
                          children: `Landscape`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, $.jsx)(ke, {
              tooltipSide: `left`,
              label: `Rotate device`,
              disabled: m || !!n.keyboard?.attached,
              onClick: () => r?.rotate(),
              children: (0, $.jsx)(he, {}),
            })),
      (t[6] = i),
      (t[7] = r),
      (t[8] = m),
      (t[9] = e.platform),
      (t[10] = n.keyboard?.attached),
      (t[11] = O))
    : (O = t[11]);
  let N;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(Oe, {})), (t[12] = N))
    : (N = t[12]);
  let P = `Switch device to ${x} mode`,
    ee = i.disabled || !o?.appearance,
    F;
  t[13] !== i || t[14] !== x
    ? ((F = () => void i.act({ type: `setAppearance`, value: x })),
      (t[13] = i),
      (t[14] = x),
      (t[15] = F))
    : (F = t[15]);
  let I = o?.appearance === `dark` ? Te.Sun : Te.Moon,
    L;
  t[16] === I ? (L = t[17]) : ((L = (0, $.jsx)(ne, { icon: I })), (t[16] = I), (t[17] = L));
  let R;
  t[18] !== P || t[19] !== ee || t[20] !== F || t[21] !== L
    ? ((R = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: P,
        disabled: ee,
        onClick: F,
        children: L,
      })),
      (t[18] = P),
      (t[19] = ee),
      (t[20] = F),
      (t[21] = L),
      (t[22] = R))
    : (R = t[22]);
  let te = i.disabled || !o?.textSize,
    z;
  t[23] === te
    ? (z = t[24])
    : ((z = (0, $.jsx)(S, {
        size: `icon-sm`,
        variant: `ghost`,
        "aria-label": `Device text size`,
        title: `Device text size`,
        disabled: te,
      })),
      (t[23] = te),
      (t[24] = z));
  let B;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(d, {})), (t[25] = B))
    : (B = t[25]);
  let V;
  t[26] === z
    ? (V = t[27])
    : ((V = (0, $.jsx)(j, { render: z, children: B })), (t[26] = z), (t[27] = V));
  let re = o?.textSize ?? ``,
    H;
  t[28] === i
    ? (H = t[29])
    : ((H = (e) => {
        (e === `small` || e === "default" || e === `large` || e === `extra-large`) &&
          i.act({ type: `setTextSize`, value: e });
      }),
      (t[28] = i),
      (t[29] = H));
  let ie;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = [
        [`small`, `Small`],
        [`default`, `Default`],
        [`large`, `Large`],
        [`extra-large`, `Extra large`],
      ]),
      (t[30] = ie))
    : (ie = t[30]);
  let ae;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = ie.map(De)), (t[31] = ae))
    : (ae = t[31]);
  let U;
  t[32] !== re || t[33] !== H
    ? ((U = (0, $.jsx)(k, {
        side: `left`,
        className: `min-w-40`,
        children: (0, $.jsx)(D, { value: re, onValueChange: H, children: ae }),
      })),
      (t[32] = re),
      (t[33] = H),
      (t[34] = U))
    : (U = t[34]);
  let W;
  t[35] !== V || t[36] !== U
    ? ((W = (0, $.jsxs)(C, { children: [V, U] })), (t[35] = V), (t[36] = U), (t[37] = W))
    : (W = t[37]);
  let G;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(_, {})), (t[38] = G))
    : (G = t[38]);
  let K;
  t[39] !== e.onTools || t[40] !== e.toolsOpen
    ? ((K = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: `Device tools`,
        pressed: e.toolsOpen,
        onClick: e.onTools,
        children: G,
      })),
      (t[39] = e.onTools),
      (t[40] = e.toolsOpen),
      (t[41] = K))
    : (K = t[41]);
  let q = e.screenshotPending ? `Capturing screenshot` : `Save screenshot`,
    oe = !n.streaming || e.screenshotPending,
    J;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(f, {})), (t[42] = J))
    : (J = t[42]);
  let se;
  t[43] !== e.onScreenshot || t[44] !== q || t[45] !== oe
    ? ((se = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: q,
        disabled: oe,
        onClick: e.onScreenshot,
        children: J,
      })),
      (t[43] = e.onScreenshot),
      (t[44] = q),
      (t[45] = oe),
      (t[46] = se))
    : (se = t[46]);
  let ce;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, $.jsx)(j, {
        render: (0, $.jsx)(S, {
          size: `icon-sm`,
          variant: `ghost`,
          "aria-label": `More device actions`,
          title: `More device actions`,
        }),
        children: (0, $.jsx)(h, {}),
      })),
      (t[47] = ce))
    : (ce = t[47]);
  let le;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, $.jsx)(a, {})), (t[48] = le))
    : (le = t[48]);
  let Y;
  t[49] === e.onFloat
    ? (Y = t[50])
    : ((Y = (0, $.jsxs)(M, { onClick: e.onFloat, children: [le, `Float device over chat`] })),
      (t[49] = e.onFloat),
      (t[50] = Y));
  let ue;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(b, {})), (t[51] = ue))
    : (ue = t[51]);
  let X;
  t[52] === e.onClose
    ? (X = t[53])
    : ((X = (0, $.jsxs)(M, { onClick: e.onClose, children: [ue, `Close device panel`] })),
      (t[52] = e.onClose),
      (t[53] = X));
  let de;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(A, {})), (t[54] = de))
    : (de = t[54]);
  let fe;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(l, {})), (t[55] = fe))
    : (fe = t[55]);
  let pe;
  t[56] === e.onPowerOff
    ? (pe = t[57])
    : ((pe = (0, $.jsxs)(M, {
        variant: `destructive`,
        onClick: e.onPowerOff,
        children: [fe, `Power off device`],
      })),
      (t[56] = e.onPowerOff),
      (t[57] = pe));
  let me;
  t[58] !== Y || t[59] !== X || t[60] !== pe
    ? ((me = (0, $.jsxs)(C, {
        children: [ce, (0, $.jsxs)(k, { side: `left`, align: `end`, children: [Y, X, de, pe] })],
      })),
      (t[58] = Y),
      (t[59] = X),
      (t[60] = pe),
      (t[61] = me))
    : (me = t[61]);
  let ge;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, $.jsx)(Oe, {})), (t[62] = ge))
    : (ge = t[62]);
  let _e = !n.streaming || !!n.phoneUnavailableReason,
    ve = n.phoneUnavailableReason ?? void 0,
    ye;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(s, {})), (t[63] = ye))
    : (ye = t[63]);
  let be;
  t[64] !== _e || t[65] !== ve || t[66] !== n.phone || t[67] !== n.showPhone
    ? ((be = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: `3D view`,
        pressed: n.phone,
        disabled: _e,
        description: ve,
        onClick: n.showPhone,
        children: ye,
      })),
      (t[64] = _e),
      (t[65] = ve),
      (t[66] = n.phone),
      (t[67] = n.showPhone),
      (t[68] = be))
    : (be = t[68]);
  let xe = !n.phone,
    Se = !n.streaming,
    Z;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, $.jsx)(v, {})), (t[69] = Z))
    : (Z = t[69]);
  let Ce;
  t[70] !== xe || t[71] !== Se || t[72] !== n.showFlat
    ? ((Ce = (0, $.jsx)(ke, {
        tooltipSide: `left`,
        label: `Flat view`,
        pressed: xe,
        disabled: Se,
        onClick: n.showFlat,
        children: Z,
      })),
      (t[70] = xe),
      (t[71] = Se),
      (t[72] = n.showFlat),
      (t[73] = Ce))
    : (Ce = t[73]);
  let we;
  t[74] === n.keyboard
    ? (we = t[75])
    : ((we = n.keyboard
        ? (0, $.jsx)(ke, {
            tooltipSide: `left`,
            label: n.keyboard.attached ? `Detach Magic Keyboard` : `Attach Magic Keyboard`,
            pressed: n.keyboard.attached,
            onClick: n.keyboard.toggle,
            children: (0, $.jsx)(g, {}),
          })
        : null),
      (t[74] = n.keyboard),
      (t[75] = we));
  let Ee;
  t[76] !== n.phone || t[77] !== n.resetView
    ? ((Ee = n.phone
        ? (0, $.jsx)(ke, {
            tooltipSide: `left`,
            label: `Restore 3D view`,
            onClick: n.resetView,
            children: (0, $.jsx)(u, {}),
          })
        : null),
      (t[76] = n.phone),
      (t[77] = n.resetView),
      (t[78] = Ee))
    : (Ee = t[78]);
  let Ae;
  t[79] !== R ||
  t[80] !== E ||
  t[81] !== W ||
  t[82] !== K ||
  t[83] !== se ||
  t[84] !== O ||
  t[85] !== me ||
  t[86] !== be ||
  t[87] !== Ce ||
  t[88] !== we ||
  t[89] !== Ee
    ? ((Ae = (0, $.jsxs)(`div`, {
        className: `pointer-events-auto flex shrink-0 flex-col items-center gap-1 overflow-y-auto rounded-full border border-border/50 bg-background/80 p-2 shadow-sm [scrollbar-width:none]`,
        children: [E, O, N, R, W, K, se, me, ge, be, Ce, we, Ee],
      })),
      (t[79] = R),
      (t[80] = E),
      (t[81] = W),
      (t[82] = K),
      (t[83] = se),
      (t[84] = O),
      (t[85] = me),
      (t[86] = be),
      (t[87] = Ce),
      (t[88] = we),
      (t[89] = Ee),
      (t[90] = Ae))
    : (Ae = t[90]);
  let je;
  return (
    t[91] !== Ae || t[92] !== n.foldingControls
      ? ((je = (0, $.jsxs)(`aside`, {
          "aria-label": `Device controls`,
          "data-layout": `rail`,
          className: `pointer-events-none absolute inset-y-0 right-0 z-10 flex w-14 flex-col items-center gap-2 overflow-y-auto [justify-content:safe_center] py-3 pr-2 [scrollbar-width:none]`,
          children: [Ae, n.foldingControls],
        })),
        (t[91] = Ae),
        (t[92] = n.foldingControls),
        (t[93] = je))
      : (je = t[93]),
    je
  );
}
function De(e) {
  let [t, n] = e;
  return (0, $.jsx)(
    N,
    {
      value: t,
      children: (0, $.jsxs)(`span`, {
        className: `flex items-center gap-2`,
        children: [(0, $.jsx)(`span`, { className: `flex-1`, children: n }), (0, $.jsx)(P, {})],
      }),
    },
    t,
  );
}
function Oe() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          "aria-hidden": !0,
          className: `my-1 h-px w-5 shrink-0 bg-border/70`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ke(e) {
  let t = (0, Q.c)(18),
    n = e.pressed ? `secondary` : `ghost`,
    r;
  t[0] !== e.children ||
  t[1] !== e.disabled ||
  t[2] !== e.label ||
  t[3] !== e.onClick ||
  t[4] !== e.pressed ||
  t[5] !== n
    ? ((r = (0, $.jsx)(S, {
        size: `icon-sm`,
        variant: n,
        "aria-label": e.label,
        "aria-pressed": e.pressed,
        disabled: e.disabled,
        onClick: e.onClick,
        children: e.children,
      })),
      (t[0] = e.children),
      (t[1] = e.disabled),
      (t[2] = e.label),
      (t[3] = e.onClick),
      (t[4] = e.pressed),
      (t[5] = n),
      (t[6] = r))
    : (r = t[6]);
  let i = r,
    a;
  t[7] !== i || t[8] !== e.description || t[9] !== e.disabled || t[10] !== e.label
    ? ((a =
        e.disabled && e.description
          ? (0, $.jsx)(T, {
              render: (0, $.jsx)(`span`, {
                className: `inline-flex`,
                tabIndex: 0,
                role: `group`,
                "aria-label": e.label,
              }),
              children: i,
            })
          : (0, $.jsx)(T, { render: i })),
      (t[7] = i),
      (t[8] = e.description),
      (t[9] = e.disabled),
      (t[10] = e.label),
      (t[11] = a))
    : (a = t[11]);
  let o = e.description ?? e.label,
    s;
  t[12] !== e.tooltipSide || t[13] !== o
    ? ((s = (0, $.jsx)(w, { side: e.tooltipSide, children: o })),
      (t[12] = e.tooltipSide),
      (t[13] = o),
      (t[14] = s))
    : (s = t[14]);
  let c;
  return (
    t[15] !== a || t[16] !== s
      ? ((c = (0, $.jsxs)(x, { children: [a, s] })), (t[15] = a), (t[16] = s), (t[17] = c))
      : (c = t[17]),
    c
  );
}
var Ae = [
    { value: `small`, label: `Small` },
    { value: `default`, label: `Default` },
    { value: `large`, label: `Large` },
    { value: `extra-large`, label: `Extra large` },
  ],
  je = [
    { value: `none`, label: `None` },
    { value: `grayscale`, label: `Grayscale` },
    { value: `red-green`, label: `Red / green (protanopia)` },
    { value: `green-red`, label: `Green / red (deuteranopia)` },
    { value: `blue-yellow`, label: `Blue / yellow (tritanopia)` },
  ],
  Me = [
    { value: `portrait`, label: `Portrait` },
    { value: `landscape_left`, label: `Landscape left` },
    { value: `portrait_upside_down`, label: `Upside down` },
    { value: `landscape_right`, label: `Landscape right` },
  ],
  Ne = [
    { value: `camera`, label: `Camera` },
    { value: `microphone`, label: `Microphone` },
    { value: `photos`, label: `Photos` },
    { value: `contacts`, label: `Contacts` },
    { value: `calendar`, label: `Calendar` },
    { value: `reminders`, label: `Reminders` },
    { value: `location`, label: `Location` },
    { value: `notifications`, label: `Notifications` },
    { value: `motion`, label: `Motion` },
    { value: `media-library`, label: `Media library` },
    { value: `faceid`, label: `Face ID` },
  ],
  Pe = [
    { value: `camera`, label: `Camera` },
    { value: `microphone`, label: `Microphone` },
    { value: `photos`, label: `Photos` },
    { value: `contacts`, label: `Contacts` },
    { value: `calendar`, label: `Calendar` },
    { value: `location`, label: `Location` },
    { value: `notifications`, label: `Notifications` },
    { value: `motion`, label: `Physical activity` },
  ],
  Fe = [
    { label: `San Francisco`, latitude: 37.7749, longitude: -122.4194 },
    { label: `New York`, latitude: 40.7128, longitude: -74.006 },
    { label: `London`, latitude: 51.5074, longitude: -0.1278 },
    { label: `Stockholm`, latitude: 59.3293, longitude: 18.0686 },
    { label: `Tokyo`, latitude: 35.6762, longitude: 139.6503 },
  ];
function Ie(e) {
  let t = (0, Q.c)(129),
    { device: n, controls: r } = e,
    { detail: i, pending: a, error: o, foregroundApp: s, disabled: c, act: l } = r,
    u = i?.settings,
    d = n.platform === `ios`,
    f;
  t[0] === e.className
    ? (f = t[1])
    : ((f = ee(`flex min-h-0 flex-col border-border bg-background text-sm`, e.className)),
      (t[0] = e.className),
      (t[1] = f));
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`span`, { className: `font-medium`, children: `Tools` })), (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === a
    ? (m = t[4])
    : ((m = a ? (0, $.jsx)(O, { size: `sm` }) : null), (t[3] = a), (t[4] = m));
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(b, {})), (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === e.onClose
    ? (g = t[7])
    : ((g = (0, $.jsx)(S, {
        size: `icon-xs`,
        variant: `ghost-muted`,
        "aria-label": `Close tools`,
        className: `ml-auto`,
        onClick: e.onClose,
        children: h,
      })),
      (t[6] = e.onClose),
      (t[7] = g));
  let _;
  t[8] !== m || t[9] !== g
    ? ((_ = (0, $.jsxs)(`div`, {
        className: `flex h-9 shrink-0 items-center gap-2 border-b px-3`,
        children: [p, m, g],
      })),
      (t[8] = m),
      (t[9] = g),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] === o
    ? (v = t[12])
    : ((v = o
        ? (0, $.jsx)(`p`, {
            className: `border-b bg-destructive/10 px-3 py-2 text-xs text-destructive`,
            children: o,
          })
        : null),
      (t[11] = o),
      (t[12] = v));
  let y;
  t[13] !== i || t[14] !== o
    ? ((y =
        i === null && !o
          ? (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2 px-3 py-3 text-xs text-muted-foreground`,
              children: [(0, $.jsx)(O, { size: `sm` }), ` Reading device settings…`],
            })
          : null),
      (t[13] = i),
      (t[14] = o),
      (t[15] = y))
    : (y = t[15]);
  let x;
  t[16] === e.hostDiagnostics
    ? (x = t[17])
    : ((x = e.hostDiagnostics
        ? (0, $.jsx)(Le, {
            title: `Host diagnostics`,
            children: (0, $.jsx)(`p`, {
              className: `whitespace-pre-line text-xs text-muted-foreground`,
              children: e.hostDiagnostics,
            }),
          })
        : null),
      (t[16] = e.hostDiagnostics),
      (t[17] = x));
  let C = s?.id ?? `-`,
    w;
  t[18] === C
    ? (w = t[19])
    : ((w = (0, $.jsx)(Re, {
        label: `Foreground`,
        children: (0, $.jsx)(`span`, { className: `truncate font-mono text-xs`, children: C }),
      })),
      (t[18] = C),
      (t[19] = w));
  let T;
  t[20] !== l || t[21] !== c || t[22] !== s
    ? ((T = s
        ? (0, $.jsxs)(`div`, {
            className: `flex gap-1.5`,
            children: [
              (0, $.jsx)(S, {
                size: `xs`,
                variant: `outline`,
                disabled: c,
                onClick: () => void l({ type: `terminateApp`, appId: s.id }),
                children: `Terminate`,
              }),
              (0, $.jsx)(S, {
                size: `xs`,
                variant: `outline`,
                disabled: c,
                onClick: () => void l({ type: `launchApp`, appId: s.id }),
                children: `Relaunch`,
              }),
            ],
          })
        : null),
      (t[20] = l),
      (t[21] = c),
      (t[22] = s),
      (t[23] = T))
    : (T = t[23]);
  let E;
  t[24] === l
    ? (E = t[25])
    : ((E = (e) => l({ type: `openUrl`, url: e })), (t[24] = l), (t[25] = E));
  let D;
  t[26] !== c || t[27] !== E
    ? ((D = (0, $.jsx)(He, {
        placeholder: `https://… or myapp://`,
        action: `Open`,
        disabled: c,
        onSubmit: E,
      })),
      (t[26] = c),
      (t[27] = E),
      (t[28] = D))
    : (D = t[28]);
  let k = d ? `Bundle ID to launch` : `Package name to launch`,
    A;
  t[29] === l
    ? (A = t[30])
    : ((A = (e) => l({ type: `launchApp`, appId: e })), (t[29] = l), (t[30] = A));
  let j;
  t[31] !== c || t[32] !== k || t[33] !== A
    ? ((j = (0, $.jsx)(He, { placeholder: k, action: `Launch`, disabled: c, onSubmit: A })),
      (t[31] = c),
      (t[32] = k),
      (t[33] = A),
      (t[34] = j))
    : (j = t[34]);
  let M;
  t[35] !== w || t[36] !== T || t[37] !== D || t[38] !== j
    ? ((M = (0, $.jsxs)(Le, { title: `App`, children: [w, T, D, j] })),
      (t[35] = w),
      (t[36] = T),
      (t[37] = D),
      (t[38] = j),
      (t[39] = M))
    : (M = t[39]);
  let N = d ? `Simulator` : `Emulator`,
    P;
  t[40] === u ? (P = t[41]) : ((P = u?.appearance ? [u.appearance] : []), (t[40] = u), (t[41] = P));
  let F;
  t[42] === l
    ? (F = t[43])
    : ((F = (e) => {
        let t = e[0];
        (t === `light` || t === `dark`) && l({ type: `setAppearance`, value: t });
      }),
      (t[42] = l),
      (t[43] = F));
  let I, L;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(ve, { value: `light`, children: `Light` })),
      (L = (0, $.jsx)(ve, { value: `dark`, children: `Dark` })),
      (t[44] = I),
      (t[45] = L))
    : ((I = t[44]), (L = t[45]));
  let R;
  t[46] !== c || t[47] !== P || t[48] !== F
    ? ((R = (0, $.jsx)(Re, {
        label: `Appearance`,
        children: (0, $.jsxs)(de, {
          "aria-label": `Appearance`,
          value: P,
          disabled: c,
          onValueChange: F,
          children: [I, L],
        }),
      })),
      (t[46] = c),
      (t[47] = P),
      (t[48] = F),
      (t[49] = R))
    : (R = t[49]);
  let te = u?.textSize ?? null,
    z;
  t[50] === l
    ? (z = t[51])
    : ((z = (e) => l({ type: `setTextSize`, value: e })), (t[50] = l), (t[51] = z));
  let ne;
  t[52] !== c || t[53] !== te || t[54] !== z
    ? ((ne = (0, $.jsx)(Re, {
        label: `Text size`,
        children: (0, $.jsx)(Be, {
          ariaLabel: `Text size`,
          value: te,
          options: Ae,
          disabled: c,
          onChange: z,
        }),
      })),
      (t[52] = c),
      (t[53] = te),
      (t[54] = z),
      (t[55] = ne))
    : (ne = t[55]);
  let B;
  t[56] !== l || t[57] !== c || t[58] !== d || t[59] !== u
    ? ((B = d
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(Re, {
                label: `Liquid Glass`,
                children: (0, $.jsxs)(de, {
                  "aria-label": `Liquid Glass`,
                  value: u?.liquidGlass ? [u.liquidGlass] : [],
                  disabled: c || u?.liquidGlass === void 0,
                  onValueChange: (e) => {
                    let t = e[0];
                    (t === `clear` || t === `tinted`) && l({ type: `setLiquidGlass`, value: t });
                  },
                  children: [
                    (0, $.jsx)(ve, { value: `clear`, children: `Clear` }),
                    (0, $.jsx)(ve, { value: `tinted`, children: `Tinted` }),
                  ],
                }),
              }),
              (0, $.jsx)(Re, {
                label: `Color filter`,
                children: (0, $.jsx)(Be, {
                  ariaLabel: `Color filter`,
                  value: u?.colorFilter ?? null,
                  options: je,
                  disabled: c,
                  onChange: (e) => l({ type: `setColorFilter`, value: e }),
                }),
              }),
            ],
          })
        : (0, $.jsx)(Re, {
            label: `Orientation`,
            children: (0, $.jsx)(Be, {
              ariaLabel: `Orientation`,
              value: null,
              placeholder: `Rotate to…`,
              options: Me,
              disabled: c,
              onChange: (e) => l({ type: `setOrientation`, value: e }),
            }),
          })),
      (t[56] = l),
      (t[57] = c),
      (t[58] = d),
      (t[59] = u),
      (t[60] = B))
    : (B = t[60]);
  let V = u?.reduceMotion,
    re;
  t[61] === l
    ? (re = t[62])
    : ((re = (e) => l({ type: `setToggle`, setting: `reduceMotion`, value: e })),
      (t[61] = l),
      (t[62] = re));
  let H;
  t[63] !== c || t[64] !== V || t[65] !== re
    ? ((H = (0, $.jsx)(ze, { label: `Reduce Motion`, checked: V, disabled: c, onChange: re })),
      (t[63] = c),
      (t[64] = V),
      (t[65] = re),
      (t[66] = H))
    : (H = t[66]);
  let ie;
  t[67] !== l ||
  t[68] !== c ||
  t[69] !== d ||
  t[70] !== u?.increaseContrast ||
  t[71] !== u?.networkEnabled ||
  t[72] !== u?.reduceTransparency ||
  t[73] !== u?.showBorders ||
  t[74] !== u?.voiceOver
    ? ((ie = d
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(ze, {
                label: `Increase Contrast`,
                checked: u?.increaseContrast,
                disabled: c,
                onChange: (e) => l({ type: `setToggle`, setting: `increaseContrast`, value: e }),
              }),
              (0, $.jsx)(ze, {
                label: `Reduce Transparency`,
                checked: u?.reduceTransparency,
                disabled: c,
                onChange: (e) => l({ type: `setToggle`, setting: `reduceTransparency`, value: e }),
              }),
              (0, $.jsx)(ze, {
                label: `Show Borders`,
                checked: u?.showBorders,
                disabled: c,
                onChange: (e) => l({ type: `setToggle`, setting: `showBorders`, value: e }),
              }),
              (0, $.jsx)(ze, {
                label: `VoiceOver`,
                checked: u?.voiceOver,
                disabled: c,
                onChange: (e) => l({ type: `setToggle`, setting: `voiceOver`, value: e }),
              }),
            ],
          })
        : (0, $.jsx)(ze, {
            label: `Network`,
            checked: u?.networkEnabled,
            disabled: c,
            onChange: (e) => l({ type: `setToggle`, setting: `networkEnabled`, value: e }),
          })),
      (t[67] = l),
      (t[68] = c),
      (t[69] = d),
      (t[70] = u?.increaseContrast),
      (t[71] = u?.networkEnabled),
      (t[72] = u?.reduceTransparency),
      (t[73] = u?.showBorders),
      (t[74] = u?.voiceOver),
      (t[75] = ie))
    : (ie = t[75]);
  let ae;
  t[76] !== N || t[77] !== R || t[78] !== ne || t[79] !== B || t[80] !== H || t[81] !== ie
    ? ((ae = (0, $.jsxs)(Le, { title: N, children: [R, ne, B, H, ie] })),
      (t[76] = N),
      (t[77] = R),
      (t[78] = ne),
      (t[79] = B),
      (t[80] = H),
      (t[81] = ie),
      (t[82] = ae))
    : (ae = t[82]);
  let U = e.access === null,
    W;
  t[83] === e
    ? (W = t[84])
    : ((W = (t) => (e.onAxOverlayChange(t), Promise.resolve())), (t[83] = e), (t[84] = W));
  let G;
  t[85] !== e.axOverlay || t[86] !== U || t[87] !== W
    ? ((G = (0, $.jsx)(Le, {
        title: `Accessibility`,
        children: (0, $.jsx)(ze, {
          label: `Overlay element frames`,
          checked: e.axOverlay,
          disabled: U,
          onChange: W,
        }),
      })),
      (t[85] = e.axOverlay),
      (t[86] = U),
      (t[87] = W),
      (t[88] = G))
    : (G = t[88]);
  let K, q;
  t[89] === l
    ? ((K = t[90]), (q = t[91]))
    : ((K = (e, t) => l({ type: `setLocation`, latitude: e, longitude: t })),
      (q = () => l({ type: `clearLocation` })),
      (t[89] = l),
      (t[90] = K),
      (t[91] = q));
  let oe;
  t[92] !== c || t[93] !== d || t[94] !== K || t[95] !== q
    ? ((oe = (0, $.jsx)(Ue, { disabled: c, canClear: d, onSet: K, onClear: q })),
      (t[92] = c),
      (t[93] = d),
      (t[94] = K),
      (t[95] = q),
      (t[96] = oe))
    : (oe = t[96]);
  let J = d ? Ne : Pe,
    se = s?.id ?? ``,
    ce;
  t[97] === l
    ? (ce = t[98])
    : ((ce = (e, t, n) => l({ type: `setPermission`, appId: e, permission: t, decision: n })),
      (t[97] = l),
      (t[98] = ce));
  let le;
  t[99] !== c || t[100] !== d || t[101] !== J || t[102] !== se || t[103] !== ce
    ? ((le = (0, $.jsx)(Ge, {
        permissions: J,
        canReset: d,
        defaultAppId: se,
        disabled: c,
        onDecide: ce,
      })),
      (t[99] = c),
      (t[100] = d),
      (t[101] = J),
      (t[102] = se),
      (t[103] = ce),
      (t[104] = le))
    : (le = t[104]);
  let Y;
  t[105] !== l || t[106] !== c || t[107] !== s || t[108] !== d
    ? ((Y = d
        ? (0, $.jsxs)(Le, {
            title: `Push notification`,
            children: [
              (0, $.jsx)(He, {
                placeholder: `Alert text`,
                action: `Send`,
                disabled: c || !s,
                onSubmit: (e) =>
                  s ? l({ type: `sendPush`, appId: s.id, payload: e }) : Promise.resolve(),
              }),
              s
                ? null
                : (0, $.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: `Open an app first.`,
                  }),
            ],
          })
        : null),
      (t[105] = l),
      (t[106] = c),
      (t[107] = s),
      (t[108] = d),
      (t[109] = Y))
    : (Y = t[109]);
  let ue;
  t[110] !== n || t[111] !== d || t[112] !== e.access
    ? ((ue = d && e.access ? (0, $.jsx)(qe, { access: e.access, device: n }) : null),
      (t[110] = n),
      (t[111] = d),
      (t[112] = e.access),
      (t[113] = ue))
    : (ue = t[113]);
  let X;
  t[114] !== M ||
  t[115] !== ae ||
  t[116] !== G ||
  t[117] !== oe ||
  t[118] !== le ||
  t[119] !== Y ||
  t[120] !== ue ||
  t[121] !== v ||
  t[122] !== y ||
  t[123] !== x
    ? ((X = (0, $.jsxs)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        children: [v, y, x, M, ae, G, oe, le, Y, ue],
      })),
      (t[114] = M),
      (t[115] = ae),
      (t[116] = G),
      (t[117] = oe),
      (t[118] = le),
      (t[119] = Y),
      (t[120] = ue),
      (t[121] = v),
      (t[122] = y),
      (t[123] = x),
      (t[124] = X))
    : (X = t[124]);
  let fe;
  return (
    t[125] !== f || t[126] !== X || t[127] !== _
      ? ((fe = (0, $.jsxs)(`div`, { className: f, children: [_, X] })),
        (t[125] = f),
        (t[126] = X),
        (t[127] = _),
        (t[128] = fe))
      : (fe = t[128]),
    fe
  );
}
function Le(e) {
  let t = (0, Q.c)(5),
    n;
  t[0] === e.title
    ? (n = t[1])
    : ((n = (0, $.jsx)(`h3`, {
        className: `text-xs font-medium text-muted-foreground`,
        children: e.title,
      })),
      (t[0] = e.title),
      (t[1] = n));
  let r;
  return (
    t[2] !== e.children || t[3] !== n
      ? ((r = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-2 border-b px-3 py-2.5 last:border-b-0`,
          children: [n, e.children],
        })),
        (t[2] = e.children),
        (t[3] = n),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function Re(e) {
  let t = (0, Q.c)(7),
    n;
  t[0] === e.label
    ? (n = t[1])
    : ((n = (0, $.jsx)(`span`, {
        className: `shrink-0 text-xs text-muted-foreground`,
        children: e.label,
      })),
      (t[0] = e.label),
      (t[1] = n));
  let r;
  t[2] === e.children
    ? (r = t[3])
    : ((r = (0, $.jsx)(`div`, {
        className: `flex min-w-0 items-center justify-end`,
        children: e.children,
      })),
      (t[2] = e.children),
      (t[3] = r));
  let i;
  return (
    t[4] !== n || t[5] !== r
      ? ((i = (0, $.jsxs)(`div`, {
          className: `flex min-h-7 items-center justify-between gap-3`,
          children: [n, r],
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i))
      : (i = t[6]),
    i
  );
}
function ze(e) {
  let t = (0, Q.c)(10),
    n = e.checked ?? !1,
    r = e.disabled || e.checked === void 0,
    i;
  t[0] === e ? (i = t[1]) : ((i = (t) => void e.onChange(t)), (t[0] = e), (t[1] = i));
  let a;
  t[2] !== e.label || t[3] !== n || t[4] !== r || t[5] !== i
    ? ((a = (0, $.jsx)(pe, {
        size: `sm`,
        "aria-label": e.label,
        checked: n,
        disabled: r,
        onCheckedChange: i,
      })),
      (t[2] = e.label),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a))
    : (a = t[6]);
  let o;
  return (
    t[7] !== e.label || t[8] !== a
      ? ((o = (0, $.jsx)(Re, { label: e.label, children: a })),
        (t[7] = e.label),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Be(e) {
  let t = (0, Q.c)(25),
    n;
  if (t[0] !== e.options || t[1] !== e.value) {
    let r;
    (t[3] === e.value
      ? (r = t[4])
      : ((r = (t) => t.value === e.value), (t[3] = e.value), (t[4] = r)),
      (n = e.options.find(r)),
      (t[0] = e.options),
      (t[1] = e.value),
      (t[2] = n));
  } else n = t[2];
  let r = n,
    i = e.value,
    a = e.disabled,
    o;
  t[5] === e
    ? (o = t[6])
    : ((o = (t) => {
        t !== null && t !== e.value && e.onChange(t);
      }),
      (t[5] = e),
      (t[6] = o));
  let s;
  t[7] !== r || t[8] !== e.placeholder
    ? ((s = r
        ? r.label
        : (0, $.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: e.placeholder ?? `Unknown`,
          })),
      (t[7] = r),
      (t[8] = e.placeholder),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] === s ? (c = t[11]) : ((c = (0, $.jsx)(I, { children: s })), (t[10] = s), (t[11] = c));
  let l;
  t[12] !== e.ariaLabel || t[13] !== c
    ? ((l = (0, $.jsx)(R, {
        size: `xs`,
        className: `w-40`,
        "aria-label": e.ariaLabel,
        children: c,
      })),
      (t[12] = e.ariaLabel),
      (t[13] = c),
      (t[14] = l))
    : (l = t[14]);
  let u;
  t[15] === e.options ? (u = t[16]) : ((u = e.options.map(Ve)), (t[15] = e.options), (t[16] = u));
  let d;
  t[17] === u
    ? (d = t[18])
    : ((d = (0, $.jsx)(L, { align: `end`, alignItemWithTrigger: !1, children: u })),
      (t[17] = u),
      (t[18] = d));
  let f;
  return (
    t[19] !== e.disabled || t[20] !== e.value || t[21] !== o || t[22] !== l || t[23] !== d
      ? ((f = (0, $.jsxs)(te, { value: i, disabled: a, onValueChange: o, children: [l, d] })),
        (t[19] = e.disabled),
        (t[20] = e.value),
        (t[21] = o),
        (t[22] = l),
        (t[23] = d),
        (t[24] = f))
      : (f = t[24]),
    f
  );
}
function Ve(e) {
  return (0, $.jsx)(F, { value: e.value, children: e.label }, e.value);
}
function He(e) {
  let t = (0, Q.c)(20),
    [n, r] = (0, Z.useState)(``),
    i;
  t[0] !== e || t[1] !== n
    ? ((i = () => {
        let t = n.trim();
        t && e.onSubmit(t).then(() => r(``));
      }),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === a
    ? (o = t[4])
    : ((o = (e) => {
        (e.preventDefault(), a());
      }),
      (t[3] = a),
      (t[4] = o));
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => r(e.target.value)), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] !== e.disabled || t[7] !== e.placeholder || t[8] !== n
    ? ((c = (0, $.jsx)(E, {
        size: `compact`,
        font: `mono`,
        className: `min-w-0 flex-1`,
        placeholder: e.placeholder,
        value: n,
        disabled: e.disabled,
        onChange: s,
      })),
      (t[6] = e.disabled),
      (t[7] = e.placeholder),
      (t[8] = n),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== e.disabled || t[11] !== n
    ? ((l = e.disabled || n.trim().length === 0), (t[10] = e.disabled), (t[11] = n), (t[12] = l))
    : (l = t[12]);
  let u;
  t[13] !== e.action || t[14] !== l
    ? ((u = (0, $.jsx)(S, {
        type: `submit`,
        size: `xs`,
        variant: `outline`,
        disabled: l,
        children: e.action,
      })),
      (t[13] = e.action),
      (t[14] = l),
      (t[15] = u))
    : (u = t[15]);
  let d;
  return (
    t[16] !== o || t[17] !== c || t[18] !== u
      ? ((d = (0, $.jsxs)(`form`, { className: `flex gap-1.5`, onSubmit: o, children: [c, u] })),
        (t[16] = o),
        (t[17] = c),
        (t[18] = u),
        (t[19] = d))
      : (d = t[19]),
    d
  );
}
function Ue(e) {
  let t = (0, Q.c)(40),
    [n, r] = (0, Z.useState)(``),
    [i, a] = (0, Z.useState)(``),
    o = Number(n),
    s = Number(i),
    c,
    l;
  t[0] !== n || t[1] !== i || t[2] !== o || t[3] !== s
    ? ((c = { latitude: o, longitude: s }),
      (l =
        n.trim() !== `` &&
        i.trim() !== `` &&
        Math.abs(c.latitude) <= 90 &&
        Math.abs(c.longitude) <= 180),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l))
    : ((c = t[4]), (l = t[5]));
  let u = l,
    d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (e) => r(e.target.value)), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== e.disabled
    ? ((f = (0, $.jsx)(E, {
        size: `compact`,
        font: `mono`,
        className: `min-w-0 flex-1`,
        placeholder: `Latitude`,
        inputMode: `decimal`,
        value: n,
        disabled: e.disabled,
        onChange: d,
      })),
      (t[7] = n),
      (t[8] = e.disabled),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => a(e.target.value)), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== i || t[12] !== e.disabled
    ? ((m = (0, $.jsx)(E, {
        size: `compact`,
        font: `mono`,
        className: `min-w-0 flex-1`,
        placeholder: `Longitude`,
        inputMode: `decimal`,
        value: i,
        disabled: e.disabled,
        onChange: p,
      })),
      (t[11] = i),
      (t[12] = e.disabled),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] !== f || t[15] !== m
    ? ((h = (0, $.jsxs)(`div`, { className: `flex gap-1.5`, children: [f, m] })),
      (t[14] = f),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] === e
    ? (g = t[18])
    : ((g = (t) => {
        let n = Fe.find((e) => e.label === t);
        n && (r(String(n.latitude)), a(String(n.longitude)), e.onSet(n.latitude, n.longitude));
      }),
      (t[17] = e),
      (t[18] = g));
  let _;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(R, {
        size: `xs`,
        className: `w-32`,
        "aria-label": `Location preset`,
        children: (0, $.jsx)(I, {
          children: (0, $.jsx)(`span`, { className: `text-muted-foreground`, children: `Preset…` }),
        }),
      })),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(L, { align: `start`, alignItemWithTrigger: !1, children: Fe.map(We) })),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== e.disabled || t[22] !== g
    ? ((y = (0, $.jsxs)(te, {
        value: null,
        disabled: e.disabled,
        onValueChange: g,
        children: [_, v],
      })),
      (t[21] = e.disabled),
      (t[22] = g),
      (t[23] = y))
    : (y = t[23]);
  let b = e.disabled || !u,
    x;
  t[24] !== c.latitude || t[25] !== c.longitude || t[26] !== e
    ? ((x = () => void e.onSet(c.latitude, c.longitude)),
      (t[24] = c.latitude),
      (t[25] = c.longitude),
      (t[26] = e),
      (t[27] = x))
    : (x = t[27]);
  let C;
  t[28] !== b || t[29] !== x
    ? ((C = (0, $.jsx)(S, {
        size: `xs`,
        variant: `outline`,
        disabled: b,
        onClick: x,
        children: `Set`,
      })),
      (t[28] = b),
      (t[29] = x),
      (t[30] = C))
    : (C = t[30]);
  let w;
  t[31] === e
    ? (w = t[32])
    : ((w = e.canClear
        ? (0, $.jsx)(S, {
            size: `xs`,
            variant: `ghost`,
            disabled: e.disabled,
            onClick: () => {
              (r(``), a(``), e.onClear());
            },
            children: `Clear`,
          })
        : null),
      (t[31] = e),
      (t[32] = w));
  let T;
  t[33] !== y || t[34] !== C || t[35] !== w
    ? ((T = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-1.5`,
        children: [y, C, w],
      })),
      (t[33] = y),
      (t[34] = C),
      (t[35] = w),
      (t[36] = T))
    : (T = t[36]);
  let D;
  return (
    t[37] !== T || t[38] !== h
      ? ((D = (0, $.jsxs)(Le, { title: `Location`, children: [h, T] })),
        (t[37] = T),
        (t[38] = h),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
function We(e) {
  return (0, $.jsx)(F, { value: e.label, children: e.label }, e.label);
}
function Ge(e) {
  let t = (0, Q.c)(40),
    [n, r] = (0, Z.useState)(``),
    [i, a] = (0, Z.useState)(`camera`),
    o;
  t[0] !== n || t[1] !== e.defaultAppId
    ? ((o = n.trim() || e.defaultAppId), (t[0] = n), (t[1] = e.defaultAppId), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== i || t[4] !== e || t[5] !== s
    ? ((c = (t) => void e.onDecide(s, i, t)), (t[3] = i), (t[4] = e), (t[5] = s), (t[6] = c))
    : (c = t[6]);
  let l = c,
    u = e.defaultAppId || `App ID`,
    d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (e) => r(e.target.value)), (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== n || t[9] !== e.disabled || t[10] !== u
    ? ((f = (0, $.jsx)(E, {
        size: `compact`,
        font: `mono`,
        placeholder: u,
        value: n,
        disabled: e.disabled,
        onChange: d,
      })),
      (t[8] = n),
      (t[9] = e.disabled),
      (t[10] = u),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => (a(e), Promise.resolve())), (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== i || t[14] !== e.disabled || t[15] !== e.permissions
    ? ((m = (0, $.jsx)(Be, {
        ariaLabel: `Permission`,
        value: i,
        options: e.permissions,
        disabled: e.disabled,
        onChange: p,
      })),
      (t[13] = i),
      (t[14] = e.disabled),
      (t[15] = e.permissions),
      (t[16] = m))
    : (m = t[16]);
  let h = e.disabled || !s,
    g;
  t[17] === l ? (g = t[18]) : ((g = () => l(`grant`)), (t[17] = l), (t[18] = g));
  let _;
  t[19] !== h || t[20] !== g
    ? ((_ = (0, $.jsx)(S, {
        size: `xs`,
        variant: `outline`,
        disabled: h,
        onClick: g,
        children: `Grant`,
      })),
      (t[19] = h),
      (t[20] = g),
      (t[21] = _))
    : (_ = t[21]);
  let v = e.disabled || !s,
    y;
  t[22] === l ? (y = t[23]) : ((y = () => l(`revoke`)), (t[22] = l), (t[23] = y));
  let b;
  t[24] !== v || t[25] !== y
    ? ((b = (0, $.jsx)(S, {
        size: `xs`,
        variant: `outline`,
        disabled: v,
        onClick: y,
        children: `Revoke`,
      })),
      (t[24] = v),
      (t[25] = y),
      (t[26] = b))
    : (b = t[26]);
  let x;
  t[27] !== l || t[28] !== e.canReset || t[29] !== e.disabled || t[30] !== s
    ? ((x = e.canReset
        ? (0, $.jsx)(S, {
            size: `xs`,
            variant: `ghost`,
            disabled: e.disabled || !s,
            onClick: () => l(`reset`),
            children: `Reset`,
          })
        : null),
      (t[27] = l),
      (t[28] = e.canReset),
      (t[29] = e.disabled),
      (t[30] = s),
      (t[31] = x))
    : (x = t[31]);
  let C;
  t[32] !== b || t[33] !== x || t[34] !== m || t[35] !== _
    ? ((C = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-1.5`,
        children: [m, _, b, x],
      })),
      (t[32] = b),
      (t[33] = x),
      (t[34] = m),
      (t[35] = _),
      (t[36] = C))
    : (C = t[36]);
  let w;
  return (
    t[37] !== C || t[38] !== f
      ? ((w = (0, $.jsxs)(Le, { title: `Permissions`, children: [f, C] })),
        (t[37] = C),
        (t[38] = f),
        (t[39] = w))
      : (w = t[39]),
    w
  );
}
var Ke = 100;
function qe(e) {
  let t = (0, Q.c)(19),
    [n, r] = (0, Z.useState)(!1),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[0] = a)) : (a = t[0]);
  let [o, s] = (0, Z.useState)(a),
    c,
    l;
  (t[1] !== n || t[2] !== e.access || t[3] !== e.device.id || t[4] !== e.device.platform
    ? ((c = () => {
        if (!n) return;
        let t = be(
          { access: e.access, platform: e.device.platform, deviceId: e.device.id },
          (e, t) => {
            s((n) => {
              let r = t ? [...e] : [...n, ...e];
              return r.length > Ke ? r.slice(-100) : r;
            });
          },
        );
        return () => {
          (t(), s([]));
        };
      }),
      (l = [n, e.access, e.device.id, e.device.platform]),
      (t[1] = n),
      (t[2] = e.access),
      (t[3] = e.device.id),
      (t[4] = e.device.platform),
      (t[5] = c),
      (t[6] = l))
    : ((c = t[5]), (l = t[6])),
    (0, Z.useEffect)(c, l));
  let u = n && `rotate-180`,
    d;
  t[7] === u
    ? (d = t[8])
    : ((d = ee(`ml-auto size-3.5 transition-transform`, u)), (t[7] = u), (t[8] = d));
  let f;
  t[9] === d
    ? (f = t[10])
    : ((f = (0, $.jsxs)(W, {
        className: `flex w-full items-center gap-1.5 border-b px-3 py-2.5 text-left text-xs font-medium text-muted-foreground`,
        children: [`Event log`, (0, $.jsx)(i, { className: d })],
      })),
      (t[9] = d),
      (t[10] = f));
  let p;
  t[11] === o
    ? (p = t[12])
    : ((p =
        o.length === 0
          ? (0, $.jsx)(`li`, { className: `text-muted-foreground`, children: `No events yet.` })
          : o.map(Je)),
      (t[11] = o),
      (t[12] = p));
  let m;
  t[13] === p
    ? (m = t[14])
    : ((m = (0, $.jsx)(U, {
        children: (0, $.jsx)(`ol`, {
          className: `max-h-64 overflow-y-auto px-3 py-2 font-mono text-2xs leading-relaxed`,
          children: p,
        }),
      })),
      (t[13] = p),
      (t[14] = m));
  let h;
  return (
    t[15] !== n || t[16] !== f || t[17] !== m
      ? ((h = (0, $.jsxs)(G, { open: n, onOpenChange: r, children: [f, m] })),
        (t[15] = n),
        (t[16] = f),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Je(e) {
  return (0, $.jsxs)(
    `li`,
    {
      className: `flex gap-2`,
      children: [
        (0, $.jsx)(`span`, {
          className: `shrink-0 text-muted-foreground`,
          children: e.timestamp.slice(11, 19),
        }),
        (0, $.jsx)(`span`, { className: `truncate`, children: e.summary }),
      ],
    },
    e.id,
  );
}
function Ye(e) {
  let t = (0, Q.c)(29),
    { environmentId: n, device: r, access: i, visible: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { reportFailure: !1 }), (t[0] = o))
    : (o = t[0]);
  let s = V(J.detail, o),
    c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { reportFailure: !1 }), (t[1] = c))
    : (c = t[1]);
  let l = V(J.action, c),
    [u, d] = (0, Z.useState)(null),
    [f, p] = (0, Z.useState)(!1),
    [m, h] = (0, Z.useState)(null),
    [g, _] = (0, Z.useState)(),
    v = (0, Z.useRef)(!1),
    y = (0, Z.useRef)(0),
    b = (0, Z.useRef)(null),
    { hostId: x, id: S } = r,
    C,
    w;
  (t[2] !== S || t[3] !== n || t[4] !== x || t[5] !== s || t[6] !== a
    ? ((C = () => {
        let e = (y.current += 1);
        if (!a) return;
        let t = { environmentId: n, input: { hostId: x, deviceId: S } };
        return (
          (b.current = t),
          s(t).then((t) => {
            y.current === e &&
              (t._tag === `Success` ? (d(t.value), h(null)) : (d(null), h(B(t.cause))));
          }),
          () => {
            ((b.current = null), (y.current += 1));
          }
        );
      }),
      (w = [S, n, x, s, a]),
      (t[2] = S),
      (t[3] = n),
      (t[4] = x),
      (t[5] = s),
      (t[6] = a),
      (t[7] = C),
      (t[8] = w))
    : ((C = t[7]), (w = t[8])),
    (0, Z.useEffect)(C, w));
  let T, E;
  (t[9] !== i || t[10] !== r.id || t[11] !== r.platform || t[12] !== a
    ? ((T = () => {
        if (!i || !a) return;
        let e = !0,
          t = Se({ access: i, platform: r.platform, deviceId: r.id }, (t) => {
            e && _(t);
          });
        return () => {
          ((e = !1), t(), _(void 0));
        };
      }),
      (E = [i, r.id, r.platform, a]),
      (t[9] = i),
      (t[10] = r.id),
      (t[11] = r.platform),
      (t[12] = a),
      (t[13] = T),
      (t[14] = E))
    : ((T = t[13]), (E = t[14])),
    (0, Z.useEffect)(T, E));
  let D = u !== null && a,
    O;
  t[15] !== D || t[16] !== S || t[17] !== n || t[18] !== x || t[19] !== s || t[20] !== l
    ? ((O = async (e) => {
        if (v.current || !D) return;
        v.current = !0;
        let t = (y.current += 1);
        return (
          p(!0),
          h(null),
          l({ environmentId: n, input: { hostId: x, deviceId: S, ...e } })
            .then((e) => {
              if (y.current !== t) {
                let e = b.current;
                if (!e) return;
                let t = (y.current += 1);
                return s(e).then((e) => {
                  y.current === t &&
                    (e._tag === `Success` ? (d(e.value), h(null)) : (d(null), h(B(e.cause))));
                });
              }
              e._tag === `Success` ? d(e.value) : h(B(e.cause));
            })
            .finally(() => {
              ((v.current = !1), p(!1));
            })
        );
      }),
      (t[15] = D),
      (t[16] = S),
      (t[17] = n),
      (t[18] = x),
      (t[19] = s),
      (t[20] = l),
      (t[21] = O))
    : (O = t[21]);
  let k = O,
    A = f || !u || !a,
    j = g === void 0 ? (u?.foregroundApp ?? null) : g,
    M;
  return (
    t[22] !== k || t[23] !== u || t[24] !== m || t[25] !== f || t[26] !== A || t[27] !== j
      ? ((M = { detail: u, pending: f, error: m, act: k, disabled: A, foregroundApp: j }),
        (t[22] = k),
        (t[23] = u),
        (t[24] = m),
        (t[25] = f),
        (t[26] = A),
        (t[27] = j),
        (t[28] = M))
      : (M = t[28]),
    M
  );
}
function Xe(e) {
  let t = (0, Q.c)(51),
    [n, r] = (0, Z.useState)(null),
    [i, a] = (0, Z.useState)(!1),
    [o, s] = (0, Z.useState)(!1),
    [c, l] = (0, Z.useState)(!1),
    [u, d] = (0, Z.useState)(null),
    f = (0, Z.useRef)(null),
    p = (0, Z.useRef)(null),
    m = q(e.environmentId, e.device.hostId),
    h;
  t[0] !== m || t[1] !== e
    ? ((h = { ...e, access: m }), (t[0] = m), (t[1] = e), (t[2] = h))
    : (h = t[2]);
  let g = Ye(h),
    _,
    v;
  (t[3] !== m || t[4] !== e.visible
    ? ((_ = () => (
        (m && e.visible) || f.current?.abort(),
        () => {
          (f.current?.abort(), p.current && URL.revokeObjectURL(p.current), (p.current = null));
        }
      )),
      (v = [m, e.visible]),
      (t[3] = m),
      (t[4] = e.visible),
      (t[5] = _),
      (t[6] = v))
    : ((_ = t[5]), (v = t[6])),
    (0, Z.useEffect)(_, v));
  let y;
  t[7] !== m ||
  t[8] !== e.device.id ||
  t[9] !== e.device.name ||
  t[10] !== e.device.platform ||
  t[11] !== e.environmentId ||
  t[12] !== e.visible
    ? ((y = () => {
        if (!m || f.current || !e.visible) return;
        let t = new AbortController();
        return (
          (f.current = t),
          l(!0),
          d(null),
          we({ access: m, platform: e.device.platform, deviceId: e.device.id }, t.signal)
            .then((n) => {
              if (t.signal.aborted) return;
              p.current && URL.revokeObjectURL(p.current);
              let r = URL.createObjectURL(n);
              p.current = r;
              let i = document.createElement(`a`);
              ((i.href = r),
                (i.download = `${e.device.name.replace(/[^a-z0-9-]/gi, `-`)}-${Date.now()}.png`),
                document.body.append(i),
                i.click(),
                i.remove());
            })
            .catch((n) => {
              t.signal.aborted ||
                (n instanceof Ce && n.status === 401 && oe(e.environmentId),
                d(n instanceof Error ? n.message : `Screenshot capture failed. Try again.`));
            })
            .finally(() => {
              f.current === t && ((f.current = null), l(!1));
            })
        );
      }),
      (t[7] = m),
      (t[8] = e.device.id),
      (t[9] = e.device.name),
      (t[10] = e.device.platform),
      (t[11] = e.environmentId),
      (t[12] = e.visible),
      (t[13] = y))
    : (y = t[13]);
  let b = y,
    x;
  t[14] !== g || t[15] !== u || t[16] !== i
    ? ((x =
        u || (g.error && !i)
          ? (0, $.jsx)(`p`, {
              role: `alert`,
              className: `px-3 py-2 text-xs text-destructive`,
              children: u ?? g.error,
            })
          : null),
      (t[14] = g),
      (t[15] = u),
      (t[16] = i),
      (t[17] = x))
    : (x = t[17]);
  let S = `${e.hostLabel} · ${e.device.version}`,
    C;
  t[18] !== g ||
  t[19] !== n ||
  t[20] !== e.device.platform ||
  t[21] !== e.onClose ||
  t[22] !== e.onFloat ||
  t[23] !== e.onPowerOff ||
  t[24] !== b ||
  t[25] !== c ||
  t[26] !== i
    ? ((C = (t) =>
        (0, $.jsx)(Ee, {
          platform: e.device.platform,
          handle: n,
          view: t,
          controls: g,
          screenshotPending: c,
          onScreenshot: () => void b(),
          toolsOpen: i,
          onTools: () => a(!i),
          onFloat: e.onFloat,
          onClose: e.onClose,
          onPowerOff: e.onPowerOff,
        })),
      (t[18] = g),
      (t[19] = n),
      (t[20] = e.device.platform),
      (t[21] = e.onClose),
      (t[22] = e.onFloat),
      (t[23] = e.onPowerOff),
      (t[24] = b),
      (t[25] = c),
      (t[26] = i),
      (t[27] = C))
    : (C = t[27]);
  let w;
  t[28] !== o ||
  t[29] !== e.device.hostId ||
  t[30] !== e.device.id ||
  t[31] !== e.device.name ||
  t[32] !== e.device.platform ||
  t[33] !== e.environmentId ||
  t[34] !== e.visible ||
  t[35] !== S ||
  t[36] !== C
    ? ((w = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(xe, {
          environmentId: e.environmentId,
          platform: e.device.platform,
          deviceName: e.device.name,
          deviceDescription: S,
          deviceId: e.device.id,
          hostId: e.device.hostId,
          visible: e.visible,
          axOverlay: o,
          allowPhoneView: !0,
          onHandle: r,
          renderControls: C,
        }),
      })),
      (t[28] = o),
      (t[29] = e.device.hostId),
      (t[30] = e.device.id),
      (t[31] = e.device.name),
      (t[32] = e.device.platform),
      (t[33] = e.environmentId),
      (t[34] = e.visible),
      (t[35] = S),
      (t[36] = C),
      (t[37] = w))
    : (w = t[37]);
  let T;
  t[38] !== x || t[39] !== w
    ? ((T = (0, $.jsxs)(`div`, {
        className: `relative flex min-h-0 min-w-0 flex-1 flex-col`,
        children: [x, w],
      })),
      (t[38] = x),
      (t[39] = w),
      (t[40] = T))
    : (T = t[40]);
  let E;
  t[41] !== m ||
  t[42] !== o ||
  t[43] !== g ||
  t[44] !== e.device ||
  t[45] !== e.hostDiagnostics ||
  t[46] !== i
    ? ((E = i
        ? (0, $.jsx)(Ie, {
            device: e.device,
            controls: g,
            hostDiagnostics: e.hostDiagnostics,
            access: m,
            axOverlay: o,
            onAxOverlayChange: s,
            onClose: () => a(!1),
            className: `absolute inset-y-0 right-0 z-10 w-full max-w-72 border-l shadow-lg @[700px]:static @[700px]:w-72 @[700px]:shrink-0 @[700px]:shadow-none`,
          })
        : null),
      (t[41] = m),
      (t[42] = o),
      (t[43] = g),
      (t[44] = e.device),
      (t[45] = e.hostDiagnostics),
      (t[46] = i),
      (t[47] = E))
    : (E = t[47]);
  let D;
  return (
    t[48] !== T || t[49] !== E
      ? ((D = (0, $.jsxs)($.Fragment, { children: [T, E] })), (t[48] = T), (t[49] = E), (t[50] = D))
      : (D = t[50]),
    D
  );
}
var Ze = (e) => (e === `ios` ? `iOS Simulators` : `Android Emulators`),
  Qe = (e) => `${e.hostId}\u0000${e.id}`;
function $e(e) {
  let t = (0, Q.c)(87),
    { environmentId: n, threadId: r } = e.threadRef,
    { state: i, loaded: a } = K(n),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { reportFailure: !1 }), (t[0] = s))
    : (s = t[0]);
  let c = V(J.list, s),
    l = V(J.open),
    u = V(J.close),
    d = `${n}\u0000${r}`,
    [f, p] = (0, Z.useState)(null),
    m = f?.scope === d ? f.pending : null,
    h = f?.scope === d ? f.error : null,
    g;
  t[1] === m ? (g = t[2]) : ((g = m ? Qe(m) : null), (t[1] = m), (t[2] = g));
  let _ = g,
    y = i.hostStatus === `disabled`,
    b,
    x;
  (t[3] !== n || t[4] !== y || t[5] !== c || t[6] !== a || t[7] !== e.visible
    ? ((b = () => {
        e.visible && a && !y && c({ environmentId: n, input: {} });
      }),
      (x = [n, c, a, e.visible, y]),
      (t[3] = n),
      (t[4] = y),
      (t[5] = c),
      (t[6] = a),
      (t[7] = e.visible),
      (t[8] = b),
      (t[9] = x))
    : ((b = t[8]), (x = t[9])),
    (0, Z.useEffect)(b, x));
  let C;
  if (t[10] !== e.surface.target || t[11] !== i.sessions || t[12] !== r) {
    let n;
    t[14] === r ? (n = t[15]) : ((n = (e) => e.threadId === r), (t[14] = r), (t[15] = n));
    let a = i.sessions.filter(n);
    ((C = e.surface.target
      ? a.find(
          (t) => t.deviceId === e.surface.target?.deviceId && t.hostId === e.surface.target.hostId,
        )
      : void 0),
      (t[10] = e.surface.target),
      (t[11] = i.sessions),
      (t[12] = r),
      (t[13] = C));
  } else C = t[13];
  let w = C,
    T,
    E,
    D,
    k,
    A,
    j,
    M;
  if (
    t[16] !== w ||
    t[17] !== u ||
    t[18] !== n ||
    t[19] !== y ||
    t[20] !== c ||
    t[21] !== a ||
    t[22] !== l ||
    t[23] !== h ||
    t[24] !== m ||
    t[25] !== _ ||
    t[26] !== e ||
    t[27] !== d ||
    t[28] !== i ||
    t[29] !== r
  ) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let s = w ? i.devices.find((e) => e.hostId === w.hostId && e.id === w.deviceId) : void 0,
        f = st(i),
        g;
      t[37] === d
        ? (g = t[38])
        : ((g = (e) => {
            let t = { scope: d, pending: e, error: null };
            return (p(t), (e) => p((n) => (n === t ? { ...t, pending: null, error: e } : n)));
          }),
          (t[37] = d),
          (t[38] = g));
      let b = g,
        x;
      t[39] !== n ||
      t[40] !== l ||
      t[41] !== e.threadRef ||
      t[42] !== b ||
      t[43] !== i.devices ||
      t[44] !== r
        ? ((x = async (t) => {
            let a = i.devices.find((e) => Qe(e) === t);
            if (!a) return;
            let o = b(a),
              s = await l({
                environmentId: n,
                input: { threadId: r, hostId: a.hostId, deviceId: a.id, platform: a.platform },
              });
            s._tag === `Failure`
              ? o(B(s.cause))
              : (H.getState().openDevice(e.threadRef, {
                  hostId: s.value.hostId,
                  deviceId: s.value.deviceId,
                  platform: a.platform,
                  name: a.name,
                }),
                o(null));
          }),
          (t[39] = n),
          (t[40] = l),
          (t[41] = e.threadRef),
          (t[42] = b),
          (t[43] = i.devices),
          (t[44] = r),
          (t[45] = x))
        : (x = t[45]);
      let C = x,
        N = () => {
          s &&
            (fe
              .getState()
              .open(e.threadRef, {
                kind: `device`,
                hostId: s.hostId,
                deviceId: s.id,
                platform: s.platform,
                name: s.name,
              }),
            H.getState().close(e.threadRef));
        },
        P;
      t[46] !== e.surface.id || t[47] !== e.threadRef
        ? ((P = () => {
            let t = H.getState(),
              { activeSurfaceId: n } = re(t.byThreadKey, e.threadRef);
            (t.closeSurface(e.threadRef, e.surface.id), _e(e.threadRef, n));
          }),
          (t[46] = e.surface.id),
          (t[47] = e.threadRef),
          (t[48] = P))
        : (P = t[48]);
      let F = P,
        I;
      t[49] !== w || t[50] !== u || t[51] !== F || t[52] !== n || t[53] !== b || t[54] !== r
        ? ((I = (e) => {
            if (!e) {
              F();
              return;
            }
            if (!w) return;
            let t = b(null);
            u({
              environmentId: n,
              input: { threadId: r, hostId: w.hostId, deviceId: w.deviceId, shutdown: e },
            }).then((e) => {
              e._tag === `Failure` ? t(B(e.cause)) : F();
            });
          }),
          (t[49] = w),
          (t[50] = u),
          (t[51] = F),
          (t[52] = n),
          (t[53] = b),
          (t[54] = r),
          (t[55] = I))
        : (I = t[55]);
      let L = I,
        R = i.bootingDevices?.filter((e) => e.threadId === r) ?? [],
        { ready: te, busy: z } = ce(i),
        ne = !s && (m !== null || z || !a),
        V;
      t[56] !== i.hostStatus || t[57] !== i.hostStatusDetail || t[58] !== i.hostStatuses
        ? ((V = (e) => {
            let t = i.hostStatuses[e.id],
              n = t?.detail ?? (e.kind === `local` ? i.hostStatusDetail : void 0);
            return n && (t?.status ?? i.hostStatus) === `ready`
              ? [{ hostId: e.id, label: e.label, detail: n }]
              : [];
          }),
          (t[56] = i.hostStatus),
          (t[57] = i.hostStatusDetail),
          (t[58] = i.hostStatuses),
          (t[59] = V))
        : (V = t[59]);
      let U = i.hosts.flatMap(V),
        W = i.hosts.flatMap(rt);
      if (a && (!i.onboardingCompleted || y)) {
        let r;
        t[60] === e
          ? (r = t[61])
          : ((r = (t) => {
              t || e.onDismissSetup();
            }),
            (t[60] = e),
            (t[61] = r));
        let a;
        t[62] !== n || t[63] !== i
          ? ((a = (0, $.jsx)(me, { children: (0, $.jsx)(Y, { environmentId: n, state: i }) })),
            (t[62] = n),
            (t[63] = i),
            (t[64] = a))
          : (a = t[64]);
        let o;
        (t[65] !== e.visible || t[66] !== r || t[67] !== a
          ? ((o = (0, $.jsx)(ae, { open: e.visible, onOpenChange: r, children: a })),
            (t[65] = e.visible),
            (t[66] = r),
            (t[67] = a),
            (t[68] = o))
          : (o = t[68]),
          (E = o));
        break bb0;
      }
      ((T = ie), (M = e.mode), (A = `relative flex min-h-0 flex-1 flex-col`));
      let G;
      t[69] === n
        ? (G = t[70])
        : ((G = (e) =>
            (0, $.jsx)(
              ot,
              { label: e.label, detail: e.detail },
              `${n}\u0000${e.hostId}\u0000${e.detail}`,
            )),
          (t[69] = n),
          (t[70] = G));
      let K;
      t[71] !== n || t[72] !== i
        ? ((K = (0, $.jsx)(le, { state: i, environmentId: n })),
          (t[71] = n),
          (t[72] = i),
          (t[73] = K))
        : (K = t[73]);
      let q;
      (t[74] === h
        ? (q = t[75])
        : ((q = h
            ? (0, $.jsx)(at, { tone: `error`, onDismiss: () => p(null), children: h })
            : null),
          (t[74] = h),
          (t[75] = q)),
        (j = (0, $.jsxs)(`div`, {
          className: ee(
            `shrink-0 bg-background`,
            ne && `absolute inset-x-0 top-0 z-10 max-h-[40%] overflow-y-auto`,
          ),
          children: [
            (0, $.jsx)(`div`, { hidden: !!s, children: U.map(G) }),
            K,
            R.length > 0
              ? (0, $.jsxs)(`div`, {
                  role: `status`,
                  className: `border-b px-3 py-2 text-xs text-muted-foreground`,
                  children: [`Starting `, R.map(nt).join(`, `), `… This can take a minute.`],
                })
              : null,
            q,
          ],
        })),
        (D = `@container relative flex min-h-0 flex-1`),
        (k =
          s && w
            ? (0, $.jsx)(
                Xe,
                {
                  environmentId: n,
                  device: s,
                  hostLabel: i.hosts.find((e) => e.id === s.hostId)?.label ?? `Device host`,
                  hostDiagnostics: U.find((e) => {
                    let { hostId: t } = e;
                    return t === s.hostId;
                  })?.detail,
                  visible: e.visible,
                  onFloat: N,
                  onClose: () => L(!1),
                  onPowerOff: () => L(!0),
                },
                `${n}\u0000${Qe(s)}`,
              )
            : ne
              ? (0, $.jsx)(ye, {
                  name: m?.name ?? `Devices`,
                  description: m
                    ? `${i.hosts.find((e) => e.id === m.hostId)?.label ?? `Device host`} · ${m.version}`
                    : ``,
                  stage: `opening`,
                  message: m
                    ? m.booted
                      ? `Opening device…`
                      : `Starting device…`
                    : i.hostStatus === `installing`
                      ? (i.hostStatusDetail ?? `Installing device support…`)
                      : `Finding devices…`,
                })
              : (0, $.jsx)(`div`, {
                  className: `scrollbar-gutter-both flex size-full flex-col overflow-y-auto px-5 py-8 text-sm text-muted-foreground`,
                  children: (0, $.jsxs)(`div`, {
                    className: ee(
                      `mx-auto flex w-full max-w-xl flex-col gap-6`,
                      f.length === 0 && `my-auto items-center text-center`,
                    ),
                    children: [
                      f.length === 0
                        ? (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(v, { className: `size-6 opacity-60` }),
                              (0, $.jsx)(`p`, {
                                className: `max-h-32 w-full max-w-sm overflow-y-auto whitespace-pre-line break-words`,
                                tabIndex: i.hostStatus === `failed` ? 0 : void 0,
                                children:
                                  i.hostStatus === `failed`
                                    ? (i.hostStatusDetail ?? `The device hub failed to start.`)
                                    : `No simulators or emulators were found on this environment.`,
                              }),
                            ],
                          })
                        : null,
                      te && f.length > 0
                        ? (0, $.jsx)(`div`, {
                            className: `w-full space-y-6 text-left`,
                            children: f.map((e) =>
                              (0, $.jsxs)(
                                `section`,
                                {
                                  className: `space-y-3`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-2 text-sm text-muted-foreground`,
                                      children: [
                                        (0, $.jsx)(v, { className: `size-4 shrink-0` }),
                                        (0, $.jsx)(`h3`, {
                                          className: `font-medium`,
                                          children: Ze(e.platform),
                                        }),
                                      ],
                                    }),
                                    (0, $.jsx)(X, {
                                      children: e.devices.map((e) =>
                                        (0, $.jsxs)(
                                          `div`,
                                          {
                                            className: `flex items-center gap-3 px-3 py-3`,
                                            children: [
                                              (0, $.jsx)(`span`, {
                                                className: `grid size-8 shrink-0 place-items-center rounded-md border border-border/60`,
                                                children: (0, $.jsx)(v, { className: `size-4` }),
                                              }),
                                              (0, $.jsxs)(`div`, {
                                                className: `flex min-w-0 flex-1 flex-col`,
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    className: `truncate text-sm font-medium text-foreground`,
                                                    children: e.name,
                                                  }),
                                                  (0, $.jsx)(`span`, {
                                                    className: `truncate text-xs text-muted-foreground`,
                                                    children: `${i.hosts.find((t) => t.id === e.hostId)?.label} · ${e.version} · ${e.booted ? `Running` : `Stopped`}`,
                                                  }),
                                                ],
                                              }),
                                              (0, $.jsxs)(S, {
                                                variant: `outline`,
                                                size: `sm`,
                                                disabled: _ !== null,
                                                "aria-label": `${e.booted ? `Open` : `Start`} ${e.name}`,
                                                onClick: () => void C(Qe(e)),
                                                children: [
                                                  _ === Qe(e)
                                                    ? (0, $.jsx)(O, { size: `xs` })
                                                    : e.booted
                                                      ? (0, $.jsx)(o, {})
                                                      : (0, $.jsx)(ge, {}),
                                                  e.booted ? `Open` : `Start`,
                                                ],
                                              }),
                                            ],
                                          },
                                          Qe(e),
                                        ),
                                      ),
                                    }),
                                  ],
                                },
                                e.platform,
                              ),
                            ),
                          })
                        : null,
                      te && !ue(i) && !i.devices.some(tt) && !W.some(et)
                        ? (0, $.jsx)(`p`, {
                            className: `max-w-sm text-xs`,
                            children: `No Android devices found. Start an emulator in Android Studio's Device Manager, or connect a phone over USB with USB debugging enabled, then refresh.`,
                          })
                        : null,
                      a && !z
                        ? (0, $.jsx)(S, {
                            className: f.length > 0 ? `self-start` : `self-center`,
                            variant: `outline`,
                            size: `sm`,
                            onClick: () => void c({ environmentId: n, input: {} }),
                            children: `Refresh devices`,
                          })
                        : null,
                    ],
                  }),
                })));
    }
    ((t[16] = w),
      (t[17] = u),
      (t[18] = n),
      (t[19] = y),
      (t[20] = c),
      (t[21] = a),
      (t[22] = l),
      (t[23] = h),
      (t[24] = m),
      (t[25] = _),
      (t[26] = e),
      (t[27] = d),
      (t[28] = i),
      (t[29] = r),
      (t[30] = T),
      (t[31] = E),
      (t[32] = D),
      (t[33] = k),
      (t[34] = A),
      (t[35] = j),
      (t[36] = M));
  } else
    ((T = t[30]), (E = t[31]), (D = t[32]), (k = t[33]), (A = t[34]), (j = t[35]), (M = t[36]));
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let N;
  t[76] !== D || t[77] !== k
    ? ((N = (0, $.jsx)(`div`, { className: D, children: k })),
      (t[76] = D),
      (t[77] = k),
      (t[78] = N))
    : (N = t[78]);
  let P;
  t[79] !== N || t[80] !== A || t[81] !== j
    ? ((P = (0, $.jsxs)(`div`, { className: A, children: [j, N] })),
      (t[79] = N),
      (t[80] = A),
      (t[81] = j),
      (t[82] = P))
    : (P = t[82]);
  let F;
  return (
    t[83] !== T || t[84] !== P || t[85] !== M
      ? ((F = (0, $.jsx)(T, { mode: M, children: P })),
        (t[83] = T),
        (t[84] = P),
        (t[85] = M),
        (t[86] = F))
      : (F = t[86]),
    F
  );
}
function et(e) {
  return e.platform === `android`;
}
function tt(e) {
  return e.platform === `android`;
}
function nt(e) {
  return e.name;
}
function rt(e) {
  return e.platforms.filter(it).map((t) => ({ ...t, hostId: e.id, hostLabel: e.label }));
}
function it(e) {
  return !e.available;
}
function at(e) {
  let t = (0, Q.c)(13),
    n =
      e.tone === `warning`
        ? `bg-warning-surface text-warning-foreground`
        : `bg-destructive/5 text-destructive`,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = ee(`flex items-start gap-2 border-b px-3 py-2 text-xs`, n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(m, { className: `mt-1 size-3.5 shrink-0` })), (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === e.children
    ? (a = t[4])
    : ((a = (0, $.jsx)(`div`, {
        className: `max-h-32 min-w-0 flex-1 overflow-y-auto whitespace-pre-wrap break-words`,
        tabIndex: 0,
        children: e.children,
      })),
      (t[3] = e.children),
      (t[4] = a));
  let o = e.tone === `warning` ? `Dismiss device warning` : `Dismiss device error`,
    s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(b, {})), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] !== e.onDismiss || t[7] !== o
    ? ((c = (0, $.jsx)(S, {
        size: `icon-xs`,
        variant: `ghost`,
        "aria-label": o,
        onClick: e.onDismiss,
        children: s,
      })),
      (t[6] = e.onDismiss),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== a || t[11] !== c
      ? ((l = (0, $.jsxs)(`div`, { role: `alert`, className: r, children: [i, a, c] })),
        (t[9] = r),
        (t[10] = a),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function ot(e) {
  let t = (0, Q.c)(6),
    [n, r] = (0, Z.useState)(!1);
  if (n) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = () => r(!0)), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === e.label
    ? (a = t[2])
    : ((a = (0, $.jsxs)(`p`, {
        className: `font-medium`,
        children: [`Device discovery warning · `, e.label],
      })),
      (t[1] = e.label),
      (t[2] = a));
  let o;
  return (
    t[3] !== e.detail || t[4] !== a
      ? ((o = (0, $.jsxs)(at, { tone: `warning`, onDismiss: i, children: [a, e.detail] })),
        (t[3] = e.detail),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function st(e) {
  let t = [];
  for (let n of [`ios`, `android`]) {
    let r = e.devices
      .filter((e) => e.platform === n)
      .toSorted((e, t) => Number(t.booted) - Number(e.booted) || e.name.localeCompare(t.name));
    r.length > 0 && t.push({ platform: n, devices: r });
  }
  return t;
}
export { $e as DevicePanel };
//# sourceMappingURL=DevicePanel-DhsDoGvp.js.map
