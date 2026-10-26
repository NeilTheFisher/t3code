import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i, o as a } from "./search-BrluOr7L.js";
import { n as o } from "./triangle-alert-Ca4wixX0.js";
import { t as s } from "./sparkles-DlHzj_lH.js";
import { t as c } from "./star-CGQeKWwP.js";
import { t as l } from "./x-Blp0Exqg.js";
import {
  $t as u,
  Ah as d,
  Bn as f,
  Bt as p,
  Dr as m,
  Gt as h,
  Ha as g,
  Hn as _,
  Kt as v,
  Mo as y,
  Or as b,
  Pr as x,
  Rt as S,
  Uv as C,
  Vn as w,
  Wn as T,
  Yc as E,
  Zn as D,
  di as O,
  dn as k,
  fi as A,
  hn as j,
  jc as M,
  mn as ee,
  oc as N,
  t as P,
} from "./utils-CPoejuy5.js";
import { t as F } from "./CompositeRoot-CdXTuOFh.js";
import { p as I, x as te } from "./useSettings-N-JG2LFZ.js";
import { c as L } from "./server-3D32GveR.js";
import { n as R } from "./useNavigate-Dq4t21kA.js";
import { a as z, n as ne, r as re, s as B, t as V } from "./combobox-HagV04Wz.js";
import { n as H } from "./scroll-area-B6188Bq9.js";
import { g as U, m as ie, p as ae, v as oe } from "./keybindings-b_9MjE1R.js";
import { g as se } from "./Icons-Blot99re.js";
import { t as ce } from "./kbd-C7it_Fud.js";
import { i as le, n as ue, r as W, t as de } from "./alert-fX5rpTMS.js";
import { t as G } from "./semver-CFbvOQKc.js";
import {
  Fr as K,
  Gr as q,
  L as J,
  Pr as Y,
  as as fe,
  ci as pe,
  es as me,
  it as he,
  li as ge,
  oi as _e,
  os as ve,
  rs as ye,
  si as be,
  ui as xe,
  uo as Se,
} from "./main-BZa0O6xN.js";
var X = e(t(), 1),
  Ce = n(),
  Z = e(r(), 1),
  Q = { claudeAgent: `Claude Code`, codex: `the Codex CLI` };
function we(e) {
  return e.length <= 2 ? e.join(` and `) : `${e.slice(0, -1).join(`, `)}, and ${e[e.length - 1]}`;
}
function Te(e, t = ``) {
  let n = t.trim().toLocaleLowerCase(),
    r = (e.updateRequiredModels ?? []).filter(
      (e) =>
        n.length === 0 ||
        e.name.toLocaleLowerCase().includes(n) ||
        e.slug.toLocaleLowerCase().includes(n),
    );
  if (r.length === 0) return null;
  let i = r.map((e) => e.minVersion).reduce((e, t) => (G(t, e) > 0 ? t : e));
  return `Update ${Q[e.driver] ?? C[e.driver] ?? e.driver} to ${i.startsWith(`v`) ? i : `v${i}`} or newer to use ${we(r.map((e) => e.name))}.`;
}
var Ee = `model:`,
  De = `legacy-models:`;
function Oe(e, t) {
  return `${Ee}${e.length}:${e}${t}`;
}
function ke(e) {
  if (!e.startsWith(Ee)) return null;
  let t = e.slice(6),
    n = t.indexOf(`:`);
  if (n === -1) return null;
  let r = t.slice(0, n);
  if (!/^\d+$/.test(r)) return null;
  let i = Number(r),
    a = t.slice(n + 1);
  return !Number.isSafeInteger(i) || i > a.length
    ? null
    : { instanceId: a.slice(0, i), slug: a.slice(i) };
}
function Ae(e) {
  return `${De}${e}`;
}
function je(e) {
  return e.startsWith(De) ? e.slice(14) : null;
}
function Me(e, t) {
  return new Intl.NumberFormat(t).format(e);
}
function Ne(e) {
  let t = e?.optionDescriptors ?? [],
    n = [],
    r = (e, t) => `${e === `pdf` ? `PDF` : `${e[0]?.toUpperCase()}${e.slice(1)}`} ${t}`;
  for (let t of e?.inputModalities ?? []) t !== `text` && n.push(r(t, `input`));
  for (let t of e?.outputModalities ?? []) t !== `text` && n.push(r(t, `output`));
  return (
    e?.supportsAttachments && n.push(`Attachments`),
    e?.supportsToolCalls && n.push(`Tool calling`),
    t.some((e) => e.id === `fastMode`) && n.push(`Fast mode`),
    t.some((e) => e.id === `thinking`) && n.push(`Thinking`),
    e?.supportsReasoning !== !0 &&
      t.some(
        (e) =>
          e.type === `select` &&
          (e.id === `reasoningEffort` ||
            e.id === `effort` ||
            e.id === `reasoning` ||
            e.id === `variant`),
      ) &&
      n.push(`Reasoning`),
    e?.supportsReasoning && n.push(`Reasoning`),
    n
  );
}
var Pe = (0, X.memo)(function (e) {
  let t = (0, Ce.c)(96),
    n,
    r,
    i,
    o;
  if (
    t[0] !== e.name ||
    t[1] !== e.preferShortName ||
    t[2] !== e.providerDisplayName ||
    t[3] !== e.shortName ||
    t[4] !== e.slug ||
    t[5] !== e.subProvider ||
    t[6] !== e.useTriggerLabel
  ) {
    let a = { slug: e.slug, name: e.name, shortName: e.shortName, subProvider: e.subProvider },
      s;
    (t[11] !== e.providerDisplayName || t[12] !== e.subProvider
      ? ((s = be(e.providerDisplayName, e.subProvider)),
        (t[11] = e.providerDisplayName),
        (t[12] = e.subProvider),
        (t[13] = s))
      : (s = t[13]),
      (n = s),
      (o = `flex min-w-0 items-center gap-2`),
      (r = `min-w-0 truncate text-xs font-medium leading-snug`),
      (i = e.useTriggerLabel ? pe(a) : _e(a, e.preferShortName ? { preferShortName: !0 } : void 0)),
      (t[0] = e.name),
      (t[1] = e.preferShortName),
      (t[2] = e.providerDisplayName),
      (t[3] = e.shortName),
      (t[4] = e.slug),
      (t[5] = e.subProvider),
      (t[6] = e.useTriggerLabel),
      (t[7] = n),
      (t[8] = r),
      (t[9] = i),
      (t[10] = o));
  } else ((n = t[7]), (r = t[8]), (i = t[9]), (o = t[10]));
  let s;
  t[14] !== r || t[15] !== i
    ? ((s = (0, Z.jsx)(`div`, { className: r, children: i })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = s))
    : (s = t[16]);
  let l;
  t[17] === e.showNewBadge
    ? (l = t[18])
    : ((l = e.showNewBadge
        ? (0, Z.jsx)(`span`, {
            className: `shrink-0 rounded border border-update/35 bg-update/15 px-0.5 py-px text-3xs font-bold uppercase leading-none tracking-wide text-update-foreground`,
            "aria-label": `New model`,
            children: `New`,
          })
        : null),
      (t[17] = e.showNewBadge),
      (t[18] = l));
  let u;
  t[19] === e.unavailable
    ? (u = t[20])
    : ((u = e.unavailable
        ? (0, Z.jsx)(D, { variant: `outline`, size: `sm`, children: `Unavailable` })
        : null),
      (t[19] = e.unavailable),
      (t[20] = u));
  let d;
  t[21] !== o || t[22] !== s || t[23] !== l || t[24] !== u
    ? ((d = (0, Z.jsxs)(`div`, { className: o, children: [s, l, u] })),
      (t[21] = o),
      (t[22] = s),
      (t[23] = l),
      (t[24] = u),
      (t[25] = d))
    : (d = t[25]);
  let p;
  t[26] !== e.acpRegistryAgentId ||
  t[27] !== e.acpRegistryIconUrl ||
  t[28] !== e.driverKind ||
  t[29] !== e.providerDisplayName ||
  t[30] !== e.showProvider ||
  t[31] !== n
    ? ((p =
        e.showProvider &&
        (0, Z.jsxs)(`div`, {
          className: `mt-1 flex items-center gap-1.5`,
          children: [
            (0, Z.jsx)(xe, {
              driverKind: e.driverKind,
              displayName: e.providerDisplayName,
              acpRegistryAgentId: e.acpRegistryAgentId,
              acpRegistryIconUrl: e.acpRegistryIconUrl,
              className: `size-3`,
              iconClassName: `size-3`,
            }),
            (0, Z.jsx)(`span`, {
              className: `truncate text-xs font-normal leading-snug text-muted-foreground/70`,
              children: n,
            }),
          ],
        })),
      (t[26] = e.acpRegistryAgentId),
      (t[27] = e.acpRegistryIconUrl),
      (t[28] = e.driverKind),
      (t[29] = e.providerDisplayName),
      (t[30] = e.showProvider),
      (t[31] = n),
      (t[32] = p))
    : (p = t[32]);
  let h;
  t[33] !== d || t[34] !== p
    ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [d, p] })), (t[33] = d), (t[34] = p), (t[35] = h))
    : (h = t[35]);
  let g = h,
    _ = e.contextWindowTokens,
    v,
    y,
    b,
    x,
    S,
    C,
    E;
  if (
    t[36] !== _ ||
    t[37] !== g ||
    t[38] !== e.capabilities ||
    t[39] !== e.disabledReason ||
    t[40] !== e.index ||
    t[41] !== e.instanceId ||
    t[42] !== e.slug
  ) {
    let n = Ne(e.capabilities ?? null),
      r = _ !== void 0 || n.length > 0;
    ((v = re),
      (E = !0),
      (y = e.index),
      t[50] !== e.instanceId || t[51] !== e.slug
        ? ((b = Oe(e.instanceId, e.slug)), (t[50] = e.instanceId), (t[51] = e.slug), (t[52] = b))
        : (b = t[52]),
      (x = !!e.disabledReason));
    let i =
      e.disabledReason && `data-disabled:pointer-events-auto data-disabled:cursor-not-allowed`;
    (t[53] === i
      ? (S = t[54])
      : ((S = P(`group relative w-full !min-w-0 max-w-full cursor-pointer`, i)),
        (t[53] = i),
        (t[54] = S)),
      (C = r
        ? (0, Z.jsxs)(f, {
            children: [
              (0, Z.jsx)(T, {
                render: (0, Z.jsx)(`div`, {
                  className: `min-w-0 flex-1 text-left`,
                  "data-model-context-trigger": !0,
                }),
                children: g,
              }),
              (0, Z.jsx)(w, {
                side: `left`,
                align: `center`,
                className: `max-w-64`,
                children: (0, Z.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    _ === void 0
                      ? null
                      : (0, Z.jsxs)(`div`, {
                          className: `flex items-center gap-4`,
                          children: [
                            (0, Z.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `Context window`,
                            }),
                            (0, Z.jsxs)(`span`, {
                              className: `ml-auto font-medium`,
                              children: [Me(_), ` tokens`],
                            }),
                          ],
                        }),
                    n.length > 0
                      ? (0, Z.jsxs)(`div`, {
                          className: `border-t border-border/60 pt-1.5`,
                          children: [
                            (0, Z.jsx)(`div`, {
                              className: `mb-1 text-3xs font-medium uppercase tracking-wide text-muted-foreground/70`,
                              children: `Capabilities`,
                            }),
                            (0, Z.jsx)(`div`, {
                              className: `flex flex-wrap gap-x-3 gap-y-1`,
                              children: n.map(Fe),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : (0, Z.jsx)(`div`, { className: `min-w-0 flex-1 text-left`, children: g })),
      (t[36] = _),
      (t[37] = g),
      (t[38] = e.capabilities),
      (t[39] = e.disabledReason),
      (t[40] = e.index),
      (t[41] = e.instanceId),
      (t[42] = e.slug),
      (t[43] = v),
      (t[44] = y),
      (t[45] = b),
      (t[46] = x),
      (t[47] = S),
      (t[48] = C),
      (t[49] = E));
  } else
    ((v = t[43]), (y = t[44]), (b = t[45]), (x = t[46]), (S = t[47]), (C = t[48]), (E = t[49]));
  let O;
  t[55] !== e.isSelected || t[56] !== e.showSelection
    ? ((O =
        e.showSelection && e.isSelected
          ? (0, Z.jsx)(a, { className: `size-3.5`, "aria-hidden": `true` })
          : null),
      (t[55] = e.isSelected),
      (t[56] = e.showSelection),
      (t[57] = O))
    : (O = t[57]);
  let k;
  t[58] === e.jumpLabel
    ? (k = t[59])
    : ((k = e.jumpLabel ? (0, Z.jsx)(ce, { children: e.jumpLabel }) : null),
      (t[58] = e.jumpLabel),
      (t[59] = k));
  let A;
  t[60] === e
    ? (A = t[61])
    : ((A = (t) => {
        (t.stopPropagation(), e.onToggleFavorite(e.instanceId, e.slug));
      }),
      (t[60] = e),
      (t[61] = A));
  let j = !!e.disabledReason,
    M = e.isFavorite ? `Remove from favorites` : `Add to favorites`,
    ee = e.isFavorite && `fill-current text-warning`,
    N;
  t[62] === ee ? (N = t[63]) : ((N = P(`size-3.5 sm:size-3`, ee)), (t[62] = ee), (t[63] = N));
  let F;
  t[64] === N ? (F = t[65]) : ((F = (0, Z.jsx)(c, { className: N })), (t[64] = N), (t[65] = F));
  let I;
  t[66] !== A || t[67] !== j || t[68] !== M || t[69] !== F
    ? ((I = (0, Z.jsx)(T, {
        render: (0, Z.jsx)(m, {
          size: `icon-xs`,
          variant: `ghost-muted`,
          className: `-mr-1 shrink-0`,
          onClick: A,
          onKeyDown: Ie,
          disabled: j,
          "aria-label": M,
          children: F,
        }),
      })),
      (t[66] = A),
      (t[67] = j),
      (t[68] = M),
      (t[69] = F),
      (t[70] = I))
    : (I = t[70]);
  let te = e.isFavorite ? `Remove from favorites` : `Add to favorites`,
    L;
  t[71] === te
    ? (L = t[72])
    : ((L = (0, Z.jsx)(w, { side: `top`, align: `center`, children: te })),
      (t[71] = te),
      (t[72] = L));
  let R;
  t[73] !== I || t[74] !== L
    ? ((R = (0, Z.jsxs)(f, { children: [I, L] })), (t[73] = I), (t[74] = L), (t[75] = R))
    : (R = t[75]);
  let z;
  t[76] !== O || t[77] !== k || t[78] !== R
    ? ((z = (0, Z.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1.5`,
        children: [O, k, R],
      })),
      (t[76] = O),
      (t[77] = k),
      (t[78] = R),
      (t[79] = z))
    : (z = t[79]);
  let ne;
  t[80] !== v ||
  t[81] !== y ||
  t[82] !== b ||
  t[83] !== x ||
  t[84] !== S ||
  t[85] !== C ||
  t[86] !== z ||
  t[87] !== E
    ? ((ne = (0, Z.jsxs)(v, {
        hideIndicator: E,
        index: y,
        value: b,
        disabled: x,
        className: S,
        children: [C, z],
      })),
      (t[80] = v),
      (t[81] = y),
      (t[82] = b),
      (t[83] = x),
      (t[84] = S),
      (t[85] = C),
      (t[86] = z),
      (t[87] = E),
      (t[88] = ne))
    : (ne = t[88]);
  let B = ne;
  if (!e.disabledReason) return B;
  let V;
  t[89] === B ? (V = t[90]) : ((V = (0, Z.jsx)(T, { render: B })), (t[89] = B), (t[90] = V));
  let H;
  t[91] === e.disabledReason
    ? (H = t[92])
    : ((H = (0, Z.jsx)(w, { side: `left`, align: `center`, children: e.disabledReason })),
      (t[91] = e.disabledReason),
      (t[92] = H));
  let U;
  return (
    t[93] !== V || t[94] !== H
      ? ((U = (0, Z.jsxs)(f, { children: [V, H] })), (t[93] = V), (t[94] = H), (t[95] = U))
      : (U = t[95]),
    U
  );
});
function Fe(e) {
  return (0, Z.jsxs)(
    `span`,
    {
      className: `inline-flex items-center gap-1.5 whitespace-nowrap text-muted-foreground`,
      children: [
        (0, Z.jsx)(`span`, { className: `size-1 rounded-full bg-muted-foreground/70` }),
        e,
      ],
    },
    e,
  );
}
function Ie(e) {
  e.stopPropagation();
}
var Le = X.forwardRef(function (e, t) {
    let {
        disabled: n = !1,
        loopFocus: r = !0,
        orientation: i = `horizontal`,
        className: a,
        render: o,
        style: s,
        ...c
      } = e,
      [l, u] = X.useState(() => new Map()),
      d = X.useMemo(() => {
        let e = [];
        for (let t of l.values()) t?.index && !t.focusableWhenDisabled && e.push(t.index);
        return e;
      }, [l]),
      f = X.useMemo(() => ({ disabled: n, orientation: i, setItemMap: u }), [n, i, u]),
      p = { disabled: n, orientation: i },
      m = { "aria-orientation": i, role: `toolbar` };
    return (0, Z.jsx)(O.Provider, {
      value: f,
      children: (0, Z.jsx)(F, {
        render: o,
        className: a,
        style: s,
        state: p,
        refs: [t],
        props: [m, c],
        disabledIndices: d,
        loopFocus: r,
        onMapChange: u,
        orientation: i,
      }),
    });
  }),
  Re = X.createContext(void 0);
function ze(e) {
  let t = X.useContext(Re);
  if (t === void 0 && !e) throw Error(y(68));
  return t;
}
var Be = X.forwardRef(function (e, t) {
  let {
      className: n,
      disabled: r = !1,
      focusableWhenDisabled: i = !0,
      render: a,
      nativeButton: o = !0,
      style: s,
      ...c
    } = e,
    l = X.useMemo(() => ({ focusableWhenDisabled: i }), [i]),
    { disabled: u, orientation: d } = A(),
    f = ze(!0),
    p = u || (f?.disabled ?? !1) || r,
    { getButtonProps: m, buttonRef: h } = g({ disabled: p, focusableWhenDisabled: i, native: o });
  return (0, Z.jsx)(x, {
    tag: `button`,
    render: a,
    className: n,
    style: s,
    metadata: l,
    state: { disabled: p, orientation: d, focusable: i },
    refs: [t, h],
    props: [c, { disabled: p }, m],
  });
});
function Ve(e) {
  let t = e.displayName;
  if (!e.enabled || e.status === `disabled`) return `${t}: Disabled in settings.`;
  if (e.status === `ready` && e.isAvailable) return t;
  let n = e.status === `error` ? `Unavailable` : e.status === `warning` ? `Limited` : `Not ready`,
    r = e.snapshot.message?.trim();
  return r ? `${t}: ${n}. ${r}` : `${t}: ${n}.`;
}
var He = `pointer-events-none absolute -right-1 top-1/2 z-10 h-5 w-0.75 -translate-y-1/2 rounded-l-full bg-primary`,
  Ue = `pointer-events-none absolute -right-0.5 top-0.5 z-10 flex size-3.5 items-center justify-center rounded-full bg-transparent shadow-sm  text-update-foreground `,
  We = `left`,
  Ge = 8,
  Ke = (0, X.memo)(function (e) {
    let t = (0, Ce.c)(27),
      n;
    t[0] === e
      ? (n = t[1])
      : ((n = (t) => {
          e.onSelectInstance(t);
        }),
        (t[0] = e),
        (t[1] = n));
    let r = n,
      i = e.showFavorites ?? !0,
      [a, o] = (0, X.useState)(null),
      l = (0, X.useRef)(null),
      [d, p] = (0, X.useState)(null),
      m;
    t[2] === e.selectedInstanceId
      ? (m = t[3])
      : ((m = () => {
          let t = l.current;
          if (!t) return;
          let n = Array.from(t.querySelectorAll(`[data-model-picker-provider]`)).find(
            (t) => t.dataset.modelPickerProvider === e.selectedInstanceId,
          );
          p(n ? n.offsetTop + n.offsetHeight / 2 - 10 : null);
        }),
        (t[2] = e.selectedInstanceId),
        (t[3] = m));
    let g;
    (t[4] !== e.instanceEntries || t[5] !== e.selectedInstanceId || t[6] !== i
      ? ((g = [e.instanceEntries, e.selectedInstanceId, i]),
        (t[4] = e.instanceEntries),
        (t[5] = e.selectedInstanceId),
        (t[6] = i),
        (t[7] = g))
      : (g = t[7]),
      (0, X.useLayoutEffect)(m, g));
    let _;
    t[8] === e
      ? (_ = t[9])
      : ((_ = (t) => {
          t.altKey ||
            t.ctrlKey ||
            t.metaKey ||
            t.shiftKey ||
            (t.key === `ArrowRight` && (t.preventDefault(), e.onFocusSearch()));
        }),
        (t[8] = e),
        (t[9] = _));
    let v;
    t[10] === d
      ? (v = t[11])
      : ((v =
          d === null
            ? null
            : (0, Z.jsx)(`div`, {
                "data-model-picker-selected-indicator": `true`,
                className: P(He, `right-0 translate-y-0 transition-[top] duration-200 ease-out`),
                style: { top: d },
              })),
        (t[10] = d),
        (t[11] = v));
    let y;
    t[12] !== r || t[13] !== e.selectedInstanceId || t[14] !== i
      ? ((y = i
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `relative w-full`,
                  "data-model-picker-provider": `favorites`,
                  children: (0, Z.jsxs)(f, {
                    children: [
                      (0, Z.jsx)(T, {
                        render: (0, Z.jsx)(Be, {
                          className: P(
                            `relative isolate flex w-full cursor-pointer aspect-square items-center justify-center rounded-md transition-colors hover:bg-foreground/10 focus-visible:bg-foreground/10 focus-visible:outline-none`,
                          ),
                          onClick: () => r(`favorites`),
                          type: `button`,
                          "aria-label": `Favorites`,
                          "aria-pressed": e.selectedInstanceId === `favorites`,
                          children: (0, Z.jsx)(c, {
                            className: `size-5 fill-current shrink-0`,
                            "aria-hidden": !0,
                          }),
                        }),
                      }),
                      (0, Z.jsx)(w, {
                        side: We,
                        sideOffset: Ge,
                        align: `center`,
                        children: `Favorites`,
                      }),
                    ],
                  }),
                }),
                (0, Z.jsx)(`div`, {
                  className: `border-b border-border/70`,
                  "aria-hidden": `true`,
                }),
              ],
            })
          : null),
        (t[12] = r),
        (t[13] = e.selectedInstanceId),
        (t[14] = i),
        (t[15] = y))
      : (y = t[15]);
    let b;
    t[16] !== r || t[17] !== a || t[18] !== e
      ? ((b = e.instanceEntries.map((t) => {
          let n = !h(t),
            i = e.disabledInstanceIds?.has(t.instanceId) ?? !1,
            c = e.selectableUnavailableInstanceIds?.has(t.instanceId) ?? !1,
            l = (n && !c) || i,
            d = e.selectedInstanceId === t.instanceId,
            p = a === t.instanceId,
            m = e.newBadgeInstanceIds?.has(t.instanceId) ?? !1,
            g = u(t, e.instanceEntries),
            _ = n
              ? Ve(t)
              : i
                ? (e.getDisabledInstanceTooltip?.(t) ?? t.displayName)
                : m
                  ? `${t.displayName} (New)`
                  : t.displayName,
            v = (0, Z.jsxs)(Be, {
              className: P(
                `relative isolate flex w-full cursor-pointer aspect-square items-center justify-center rounded-md transition-colors hover:bg-foreground/10 focus-visible:bg-foreground/10 focus-visible:outline-none`,
                l && `opacity-50 cursor-not-allowed hover:bg-transparent`,
              ),
              "data-provider-accent-color": t.accentColor,
              onClick: () => !l && r(t.instanceId),
              onMouseEnter: () => o(t.instanceId),
              onMouseLeave: () => o((e) => (e === t.instanceId ? null : e)),
              onFocus: () => o(t.instanceId),
              onBlur: () => o((e) => (e === t.instanceId ? null : e)),
              disabled: l,
              focusableWhenDisabled: !l,
              "aria-pressed": d,
              type: `button`,
              "aria-label": n || i ? _ : m ? `${t.displayName}, new` : t.displayName,
              children: [
                (0, Z.jsx)(xe, {
                  driverKind: t.driverKind,
                  displayName: t.displayName,
                  accentColor: t.accentColor,
                  acpRegistryAgentId: t.acpRegistryAgentId,
                  acpRegistryIconUrl: t.acpRegistryIconUrl,
                  showBadge: g,
                  className: `size-6 z-30`,
                  iconClassName: `size-5`,
                  indicatorBackground:
                    p && !l
                      ? `var(--muted)`
                      : d
                        ? `var(--background)`
                        : `color-mix(in oklab, var(--muted) 30%, transparent)`,
                  ...(t.accentColor ? { badgeClassName: `h-3 min-w-3 px-0.5 text-5xs` } : {}),
                }),
                m
                  ? (0, Z.jsx)(`span`, {
                      className: Ue,
                      "aria-hidden": !0,
                      children: (0, Z.jsx)(s, { className: `size-2` }),
                    })
                  : null,
              ],
            }),
            y = l ? (0, Z.jsx)(`span`, { className: `relative block w-full`, children: v }) : v;
          return (0, Z.jsx)(
            `div`,
            {
              className: `relative w-full`,
              "data-model-picker-provider": t.instanceId,
              children: (0, Z.jsxs)(f, {
                children: [
                  (0, Z.jsx)(T, { render: y }),
                  (0, Z.jsx)(w, { side: We, sideOffset: Ge, align: `center`, children: _ }),
                ],
              }),
            },
            t.instanceId,
          );
        })),
        (t[16] = r),
        (t[17] = a),
        (t[18] = e),
        (t[19] = b))
      : (b = t[19]);
    let x;
    t[20] !== v || t[21] !== y || t[22] !== b
      ? ((x = (0, Z.jsx)(`div`, {
          className: `h-full overflow-y-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
          children: (0, Z.jsxs)(`div`, {
            ref: l,
            className: `relative flex min-h-full flex-col gap-1 p-1`,
            children: [v, y, b],
          }),
        })),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b),
        (t[23] = x))
      : (x = t[23]);
    let S;
    return (
      t[24] !== _ || t[25] !== x
        ? ((S = (0, Z.jsx)(Le, {
            className: `w-11 shrink-0 overflow-hidden bg-muted/30`,
            "data-model-picker-sidebar": `true`,
            "aria-label": `Providers`,
            orientation: `vertical`,
            onKeyDown: _,
            children: x,
          })),
          (t[24] = _),
          (t[25] = x),
          (t[26] = S))
        : (S = t[26]),
      S
    );
  });
function $(e) {
  let t = e.compatibilityAdvisory;
  return e.status === `error` && e.auth.status === `unauthenticated`
    ? null
    : t?.status === `broken` || (e.status === `ready` && t?.status === `unsupported`)
      ? t
      : null;
}
function qe(e) {
  if (!e || e.status === `disabled`) return null;
  let t = $(e);
  return t
    ? [e.instanceId, t.status, e.version ?? ``, t.message ?? ``].join(`\0`)
    : e.status === `ready` ||
        (e.driver === `antigravity` &&
          e.installed &&
          e.status === `warning` &&
          e.auth.status === `unknown`)
      ? null
      : [e.instanceId, e.status, e.auth.status, e.message ?? ``].join(`\0`);
}
function Je(e, t) {
  let n = qe(e);
  return n !== null && n !== t;
}
function Ye(e) {
  return (
    e.driver === `antigravity` || e.setup?.canAuthenticate === !0 || e.setup?.canInstall === !0
  );
}
function Xe(e) {
  if (
    e.auth.status !== `unauthenticated` &&
    e.compatibilityAdvisory?.status === `broken` &&
    e.compatibilityAdvisory.message
  )
    return e.compatibilityAdvisory.message;
  if (e.message) return e.message;
  let t = e.displayName?.trim() || N(e.driver);
  return !e.installed && Ye(e)
    ? `Open provider setup to install ${N(e.driver)} on this environment.`
    : e.auth.status === `unauthenticated`
      ? Ye(e)
        ? e.driver === `antigravity`
          ? `Open provider setup to sign in with Google.`
          : `Open provider setup to sign in.`
        : `Sign in via the CLI to authenticate again.`
      : e.status === `ready`
        ? `No models are available for this provider.`
        : e.status === `error`
          ? `${t} provider is unavailable.`
          : `${t} provider has limited availability.`;
}
var Ze = (0, X.memo)(function (e) {
    let t = (0, Ce.c)(30),
      { onDismiss: n, onOpenProviderSetup: r, status: i } = e;
    if (!i || qe(i) === null) return null;
    let a;
    t[0] !== i.displayName || t[1] !== i.driver
      ? ((a = i.displayName?.trim() || N(i.driver)),
        (t[0] = i.displayName),
        (t[1] = i.driver),
        (t[2] = a))
      : (a = t[2]);
    let s = a,
      c = i.status === `error` && i.auth.status === `unauthenticated`,
      u;
    t[3] === i ? (u = t[4]) : ((u = $(i)), (t[3] = i), (t[4] = u));
    let d = u,
      p = c
        ? `${s} is unauthenticated`
        : d
          ? `${s} ${i.version ?? ``} is ${d.status === `broken` ? `known to be broken` : `unsupported`}`
          : `${s} provider status`,
      h;
    t[5] !== d?.message || t[6] !== i
      ? ((h = d?.message ?? Xe(i)), (t[5] = d?.message), (t[6] = i), (t[7] = h))
      : (h = t[7]);
    let g = h,
      _ = d?.status !== `broken` && (i.status === `warning` || d !== null) ? `warning` : `error`,
      v = d && d.status !== `broken` ? `status` : `alert`,
      y;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, Z.jsx)(o, {})), (t[8] = y))
      : (y = t[8]);
    let x;
    t[9] === p ? (x = t[10]) : ((x = (0, Z.jsx)(le, { children: p })), (t[9] = p), (t[10] = x));
    let S;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, Z.jsx)(`div`, { className: `line-clamp-3` })), (t[11] = S))
      : (S = t[11]);
    let C;
    t[12] === g
      ? (C = t[13])
      : ((C = (0, Z.jsxs)(f, {
          children: [
            (0, Z.jsx)(T, { render: S, children: g }),
            (0, Z.jsx)(w, { side: `top`, className: `whitespace-pre-wrap`, children: g }),
          ],
        })),
        (t[12] = g),
        (t[13] = C));
    let E;
    t[14] !== r || t[15] !== i
      ? ((E =
          r && Ye(i)
            ? (0, Z.jsx)(b, { onClick: () => r(i.instanceId), children: `Open provider setup` })
            : null),
        (t[14] = r),
        (t[15] = i),
        (t[16] = E))
      : (E = t[16]);
    let D;
    t[17] !== E || t[18] !== C
      ? ((D = (0, Z.jsxs)(W, { children: [C, E] })), (t[17] = E), (t[18] = C), (t[19] = D))
      : (D = t[19]);
    let O = `Dismiss ${s} provider ${i.status}`,
      k;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, Z.jsx)(l, {})), (t[20] = k))
      : (k = t[20]);
    let A;
    t[21] !== n || t[22] !== O
      ? ((A = (0, Z.jsx)(ue, {
          children: (0, Z.jsx)(m, {
            "aria-label": O,
            onClick: n,
            size: `icon-xs`,
            variant: `ghost-muted`,
            children: k,
          }),
        })),
        (t[21] = n),
        (t[22] = O),
        (t[23] = A))
      : (A = t[23]);
    let j;
    return (
      t[24] !== D || t[25] !== A || t[26] !== _ || t[27] !== v || t[28] !== x
        ? ((j = (0, Z.jsx)(`div`, {
            className: `pointer-events-auto mx-auto w-fit max-w-[calc(100%-2rem)] pt-3`,
            children: (0, Z.jsxs)(de, {
              variant: _,
              role: v,
              surface: `glass`,
              controlAlignment: `first-line`,
              children: [y, x, D, A],
            }),
          })),
          (t[24] = D),
          (t[25] = A),
          (t[26] = _),
          (t[27] = v),
          (t[28] = x),
          (t[29] = j))
        : (j = t[29]),
      j
    );
  }),
  Qe = 24,
  $e = -1e3;
function et(e) {
  return [
    Y(e.name),
    ...(e.shortName ? [Y(e.shortName)] : []),
    ...(e.subProvider ? [Y(e.subProvider)] : []),
    Y(e.driverKind),
    Y(e.providerDisplayName),
    rt(e),
  ];
}
function tt(e, t, n) {
  return K({
    value: e,
    query: t,
    exactBase: n,
    prefixBase: n + 2,
    boundaryBase: n + 4,
    includesBase: n + 6,
    ...(t.length >= 3 ? { fuzzyBase: n + 100 } : {}),
    ignorePosition: !0,
  });
}
function nt(e) {
  return Y(e).replace(/\s+/gu, ` `);
}
function rt(e) {
  return Y(
    [e.name, e.shortName, e.subProvider, e.driverKind, e.providerDisplayName]
      .filter((e) => typeof e == `string` && e.length > 0)
      .join(` `),
  );
}
function it(e, t) {
  let n = Y(t)
    .split(/\s+/u)
    .filter((e) => e.length > 0);
  if (n.length === 0) return 0;
  let r = n.join(` `);
  if (r === nt(e.name) || r === nt(e.shortName ?? ``)) return $e;
  let i = et(e),
    a = 0;
  for (let e of n) {
    let t = [];
    for (let n = 0; n < i.length; n += 1) {
      let r = tt(i[n], e, n * 10);
      r !== null && t.push(r);
    }
    if (t.length === 0) return null;
    a += Math.min(...t);
  }
  return e.isFavorite ? a - Qe : a;
}
function at(e, t, n) {
  let r = [];
  return (
    e.forEach((e, i) => {
      let a = n(e),
        o = it(a, t);
      o !== null && r.push({ item: e, score: o, isFavorite: a.isFavorite === !0, order: i });
    }),
    r
      .toSorted(
        (e, t) =>
          e.score - t.score || Number(t.isFavorite) - Number(e.isFavorite) || e.order - t.order,
      )
      .map((e) => e.item)
  );
}
function ot(e) {
  if (e.driverKind === `antigravity` && e.model === `antigravity-default`) {
    let t = e.options.filter((e) => e.slug !== `antigravity-default` && !e.isUnavailable);
    return t.find((e) => e.aliases?.includes(`antigravity-default`)) ?? t.find((e) => e.isDefault);
  }
  return e.options.find((t) => t.slug === e.model);
}
function st(e) {
  return e.entry.driverKind === `antigravity` && e.option.slug === `antigravity-default`
    ? !1
    : h(e.entry)
      ? !0
      : e.entry.enabled &&
        (e.entry.driverKind === `opencode` || e.entry.driverKind === `antigravity`) &&
        e.entry.instanceId === e.activeInstanceId &&
        e.option.slug === e.activeModel &&
        e.option.isUnavailable === !0;
}
function ct(e, t) {
  return (
    e.enabled &&
    e.status !== `disabled` &&
    Ye(e.snapshot) &&
    (!h(e) ||
      !e.installed ||
      e.snapshot.auth.status === `unauthenticated` ||
      !t.some((e) => !e.isUnavailable))
  );
}
function lt(e) {
  let t = [
      `favorites`,
      ...e.entries
        .filter(
          (t) =>
            !e.disabledInstanceIds?.has(t.instanceId) &&
            (h(t) || e.selectableUnavailableInstanceIds?.has(t.instanceId)),
        )
        .map((e) => e.instanceId),
    ],
    n = t.indexOf(e.selectedInstanceId);
  return t[
    n < 0 ? (e.direction === 1 ? 0 : t.length - 1) : (n + e.direction + t.length) % t.length
  ];
}
var ut = new Map(),
  dt = 52;
function ft() {
  let e = (0, Ce.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, { className: `h-0.5` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function pt(e, t, n) {
  let r = {
      platform: navigator.platform,
      context: { terminalFocus: !1, terminalOpen: n, modelPickerOpen: !0 },
    },
    i = new Map();
  for (let [n, a] of e.entries()) {
    let e = ae(n),
      o = e && oe(t, e, r);
    o && i.set(a, o);
  }
  return i.size > 0 ? i : ut;
}
function mt(e) {
  let t = (0, Ce.c)(14),
    { setupEntries: n, updateRequiredNotices: r, onRequestClose: i, onOpenProviderSetup: a } = e,
    o = R(),
    s;
  t[0] !== a || t[1] !== i || t[2] !== n
    ? ((s =
        n.length > 0
          ? (0, Z.jsx)(`div`, {
              className: `max-h-44 shrink-0 overflow-y-auto border-t border-border/70 p-2`,
              children: n.map((e) =>
                (0, Z.jsxs)(
                  `div`,
                  {
                    className: `px-1 py-1.5 text-xs leading-snug`,
                    children: [
                      (0, Z.jsx)(`p`, {
                        className: `line-clamp-3 text-muted-foreground`,
                        children: Xe(e.snapshot),
                      }),
                      (0, Z.jsx)(b, {
                        className: `mt-1`,
                        onClick: () => {
                          (i?.(), a?.(e.instanceId));
                        },
                        children: n.length > 1 ? `Set up ${e.displayName}` : `Open provider setup`,
                      }),
                    ],
                  },
                  e.instanceId,
                ),
              ),
            })
          : (0, Z.jsx)(ne, { className: `empty:h-0`, children: `No models found` })),
      (t[0] = a),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  if (t[4] !== o || t[5] !== i || t[6] !== r) {
    let e;
    (t[8] !== o || t[9] !== i
      ? ((e = (e) => {
          let { instanceId: t, notice: n } = e;
          return (0, Z.jsxs)(
            `p`,
            {
              className: `shrink-0 border-t border-border/70 px-3 py-2 text-xs leading-snug text-muted-foreground`,
              children: [
                n,
                ` `,
                (0, Z.jsx)(b, {
                  onClick: () => {
                    (i?.(), o({ to: `/settings/providers` }));
                  },
                  children: `Provider settings`,
                }),
              ],
            },
            t,
          );
        }),
        (t[8] = o),
        (t[9] = i),
        (t[10] = e))
      : (e = t[10]),
      (c = r.map(e)),
      (t[4] = o),
      (t[5] = i),
      (t[6] = r),
      (t[7] = c));
  } else c = t[7];
  let l;
  return (
    t[11] !== s || t[12] !== c
      ? ((l = (0, Z.jsxs)(Z.Fragment, { children: [s, c] })), (t[11] = s), (t[12] = c), (t[13] = l))
      : (l = t[13]),
    l
  );
}
function ht(e) {
  let t = (0, Ce.c)(28),
    { listRef: n, itemKeys: r, extraData: i, renderItem: a } = e,
    [o, s] = (0, X.useState)(!1),
    [c, l] = (0, X.useState)(!1),
    u;
  t[0] === r.length ? (u = t[1]) : ((u = () => r.length * dt), (t[0] = r.length), (t[1] = u));
  let [d, f] = (0, X.useState)(u),
    p,
    m;
  (t[2] === n
    ? ((p = t[3]), (m = t[4]))
    : ((p = () => n.current?.getState().listen(`totalSize`, f)),
      (m = [n]),
      (t[2] = n),
      (t[3] = p),
      (t[4] = m)),
    (0, X.useLayoutEffect)(p, m));
  let h;
  t[5] === n
    ? (h = t[6])
    : ((h = () => {
        let e = n.current?.getScrollableNode();
        if (!(e instanceof HTMLElement)) return;
        let t = Math.max(0, e.scrollHeight - e.clientHeight);
        (s(e.scrollTop > 1), l(t - e.scrollTop > 1));
      }),
      (t[5] = n),
      (t[6] = h));
  let g = h,
    _;
  t[7] === r ? (_ = t[8]) : ((_ = JSON.stringify(r)), (t[7] = r), (t[8] = _));
  let v = _,
    [y, b] = (0, X.useState)(v);
  y !== v && (b(v), s(!1), l(r.length > 5));
  let x = (0, X.useEffectEvent)(g),
    S;
  t[9] === x
    ? (S = t[10])
    : ((S = () => {
        let e = 0,
          t = window.requestAnimationFrame(() => {
            (x(), (e = window.requestAnimationFrame(() => x())));
          });
        return () => {
          (window.cancelAnimationFrame(t), window.cancelAnimationFrame(e));
        };
      }),
      (t[9] = x),
      (t[10] = S));
  let C;
  (t[11] === v ? (C = t[12]) : ((C = [v]), (t[11] = v), (t[12] = C)), (0, X.useLayoutEffect)(S, C));
  let w = r.length === 0 ? 0 : `calc(${d}px + var(--spacing) * 5)`,
    T;
  t[13] === w ? (T = t[14]) : ((T = { height: w }), (t[13] = w), (t[14] = T));
  let E;
  t[15] !== c || t[16] !== o
    ? ((E = P(
        `scrollbar-gutter-stable h-full overflow-x-hidden overscroll-y-contain py-1.5 [&::-webkit-scrollbar-track]:my-2`,
        H({ top: o, bottom: c }),
      )),
      (t[15] = c),
      (t[16] = o),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] !== i || t[19] !== r || t[20] !== n || t[21] !== a || t[22] !== E || t[23] !== g
    ? ((D = (0, Z.jsx)(z, {
        children: (0, Z.jsx)(q, {
          ref: n,
          data: r,
          extraData: i,
          keyExtractor: gt,
          renderItem: a,
          estimatedItemSize: dt,
          drawDistance: 480,
          recycleItems: !0,
          contentContainerClassName: `pl-2 pr-px`,
          ItemSeparatorComponent: ft,
          onLayout: g,
          onScroll: g,
          className: E,
        }),
      })),
      (t[18] = i),
      (t[19] = r),
      (t[20] = n),
      (t[21] = a),
      (t[22] = E),
      (t[23] = g),
      (t[24] = D))
    : (D = t[24]);
  let O;
  return (
    t[25] !== D || t[26] !== T
      ? ((O = (0, Z.jsx)(`div`, {
          className: `relative min-h-0 overflow-hidden pr-px`,
          style: T,
          children: D,
        })),
        (t[25] = D),
        (t[26] = T),
        (t[27] = O))
      : (O = t[27]),
    O
  );
}
function gt(e) {
  return e;
}
function _t(e) {
  let t = (0, Ce.c)(3),
    { onKeyDown: n } = e,
    r = (0, X.useEffectEvent)(n),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = () => {
        let e = (e) => r(e);
        return (
          window.addEventListener(`keydown`, e, !0),
          () => {
            window.removeEventListener(`keydown`, e, !0);
          }
        );
      }),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[2] = a)) : (a = t[2]),
    (0, X.useEffect)(i, a),
    null
  );
}
var vt = (0, X.memo)(function (e) {
  let t = (0, Ce.c)(102),
    {
      keybindings: n,
      modelOptionsByInstance: r,
      instanceEntries: a,
      getModelDisabledReason: o,
      onInstanceModelChange: s,
      onToggleModel: c,
      onRequestClose: l,
      onOpenProviderSetup: u,
    } = e,
    [f, m] = (0, X.useState)(``),
    g = (0, X.useRef)(null),
    y = (0, X.useRef)(null),
    b = (0, X.useRef)(null),
    x = (0, X.useRef)(null),
    { favorites: C } = I(e.environmentId),
    w,
    T,
    D,
    O,
    k,
    A,
    j;
  if (
    t[0] !== a ||
    t[1] !== r ||
    t[2] !== u ||
    t[3] !== e.activeInstanceId ||
    t[4] !== e.instanceEntries ||
    t[5] !== e.model ||
    t[6] !== e.selectedModels
  ) {
    let n;
    t[14] === e.activeInstanceId
      ? (n = t[15])
      : ((n = (t) => t.instanceId === e.activeInstanceId),
        (t[14] = e.activeInstanceId),
        (t[15] = n));
    let i = e.instanceEntries.find(n);
    ((T = ot({
      driverKind: i?.driverKind,
      model: e.model,
      options: r.get(e.activeInstanceId) ?? [],
    })),
      (O = T?.slug ?? (e.model === `antigravity-default` ? `` : e.model)),
      (D = O ? Oe(e.activeInstanceId, O) : null),
      (A = e.selectedModels?.map((e) => {
        let t = ot({
          driverKind: a.find((t) => t.instanceId === e.instanceId)?.driverKind,
          model: e.model,
          options: r.get(e.instanceId) ?? [],
        });
        return Oe(e.instanceId, t?.slug ?? e.model);
      })),
      (k = new Set(A ?? (D ? [D] : []))),
      (w =
        i !== void 0 &&
        (r.get(e.activeInstanceId) ?? []).some((t) =>
          st({ entry: i, option: t, activeInstanceId: e.activeInstanceId, activeModel: O }),
        ) &&
        !h(i)),
      (j = u !== void 0 && i !== void 0 && ct(i, r.get(e.activeInstanceId) ?? [])),
      (t[0] = a),
      (t[1] = r),
      (t[2] = u),
      (t[3] = e.activeInstanceId),
      (t[4] = e.instanceEntries),
      (t[5] = e.model),
      (t[6] = e.selectedModels),
      (t[7] = w),
      (t[8] = T),
      (t[9] = D),
      (t[10] = O),
      (t[11] = k),
      (t[12] = A),
      (t[13] = j));
  } else ((w = t[7]), (T = t[8]), (D = t[9]), (O = t[10]), (k = t[11]), (A = t[12]), (j = t[13]));
  let ee = j,
    N;
  t[16] !== w ||
  t[17] !== ee ||
  t[18] !== C.length ||
  t[19] !== e.activeInstanceId ||
  t[20] !== e.lockedProvider
    ? ((N = () =>
        e.lockedProvider !== null || w || ee
          ? e.activeInstanceId
          : C.length > 0
            ? `favorites`
            : e.activeInstanceId),
      (t[16] = w),
      (t[17] = ee),
      (t[18] = C.length),
      (t[19] = e.activeInstanceId),
      (t[20] = e.lockedProvider),
      (t[21] = N))
    : (N = t[21]);
  let [F, R] = (0, X.useState)(N),
    z = new Set(C.map(yt)),
    [ne, H] = (0, X.useState)(
      () => new Set(T?.isLegacy && !z.has(S(e.activeInstanceId, O)) ? [e.activeInstanceId] : []),
    ),
    ae = M(L),
    oe = n ?? ae,
    [se, ce] = (0, X.useState)(0),
    le = te(e.environmentId),
    ue;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => {
        g.current?.focus({ preventScroll: !0 });
      }),
      (t[22] = ue))
    : (ue = t[22]);
  let W = ue,
    de;
  t[23] === W
    ? (de = t[24])
    : ((de = (e) => {
        (R(e),
          window.requestAnimationFrame(() => {
            W();
          }));
      }),
      (t[23] = W),
      (t[24] = de));
  let G = de,
    K,
    q;
  (t[25] === W
    ? ((K = t[26]), (q = t[27]))
    : ((K = () => {
        W();
        let e = window.requestAnimationFrame(() => {
            W();
          }),
          t = window.setTimeout(() => {
            W();
          }, 0);
        return () => {
          (window.cancelAnimationFrame(e), window.clearTimeout(t));
        };
      }),
      (q = [W]),
      (t[25] = W),
      (t[26] = K),
      (t[27] = q)),
    (0, X.useLayoutEffect)(K, q));
  let J;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (e) => {
        H((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
      }),
      (t[28] = J))
    : (J = t[28]);
  let Y = J,
    fe;
  t[29] !== o || t[30] !== a || t[31] !== r || t[32] !== s || t[33] !== c
    ? ((fe = (e, t, n) => {
        let i = n !== void 0 && n;
        if (o?.(t, e)) return null;
        let l = r.get(t);
        if (!l) return null;
        let u = a.find((e) => e.instanceId === t);
        if (!u) return null;
        let d = E(u.driverKind, e, l);
        return d ? (i && c ? c(t, d) : s(t, d), d) : null;
      }),
      (t[29] = o),
      (t[30] = a),
      (t[31] = r),
      (t[32] = s),
      (t[33] = c),
      (t[34] = fe))
    : (fe = t[34]);
  let pe = fe,
    me;
  t[35] === e.terminalOpen
    ? (me = t[36])
    : ((me = { terminalFocus: !1, terminalOpen: e.terminalOpen, modelPickerOpen: !0 }),
      (t[35] = e.terminalOpen),
      (t[36] = me));
  let he = me,
    ge = e.lockedProvider,
    _e = e.lockedContinuationGroupKey,
    ye = u !== void 0,
    be = new Map(a.map(bt)),
    xe;
  t[37] !== _e || t[38] !== ge
    ? ((xe = (e) =>
        ge === null ? !0 : e.driverKind === ge ? !_e || e.continuationGroupKey === _e : !1),
      (t[37] = _e),
      (t[38] = ge),
      (t[39] = xe))
    : (xe = t[39]);
  let Q = xe,
    we;
  if (t[40] !== w || t[41] !== ye || t[42] !== a || t[43] !== r || t[44] !== e.activeInstanceId) {
    if (((we = new Set()), w && we.add(e.activeInstanceId), ye))
      for (let e of a) ct(e, r.get(e.instanceId) ?? []) && we.add(e.instanceId);
    ((t[40] = w),
      (t[41] = ye),
      (t[42] = a),
      (t[43] = r),
      (t[44] = e.activeInstanceId),
      (t[45] = we));
  } else we = t[45];
  let Ee = we.size > 0 ? we : void 0,
    De = [];
  for (let [t, n] of r) {
    let r = be.get(t);
    if (r)
      for (let i of n)
        st({ entry: r, option: i, activeInstanceId: e.activeInstanceId, activeModel: O }) &&
          De.push({
            slug: i.slug,
            name: i.name,
            ...(i.shortName ? { shortName: i.shortName } : {}),
            ...(i.subProvider ? { subProvider: i.subProvider } : {}),
            ...(i.badge ? { badge: i.badge } : {}),
            ...(i.isLegacy ? { isLegacy: !0 } : {}),
            ...(i.contextWindowTokens === void 0
              ? {}
              : { contextWindowTokens: i.contextWindowTokens }),
            ...(i.capabilities === void 0 ? {} : { capabilities: i.capabilities }),
            ...(i.isUnavailable ? { isUnavailable: !0 } : {}),
            instanceId: t,
            driverKind: r.driverKind,
            instanceDisplayName: r.displayName,
            ...(r.accentColor ? { instanceAccentColor: r.accentColor } : {}),
            ...(r.acpRegistryAgentId ? { acpRegistryAgentId: r.acpRegistryAgentId } : {}),
            ...(r.acpRegistryIconUrl ? { acpRegistryIconUrl: r.acpRegistryIconUrl } : {}),
            ...(r.continuationGroupKey ? { continuationGroupKey: r.continuationGroupKey } : {}),
          });
  }
  let Me = De,
    Ne = ge !== null,
    Fe;
  t[46] === f ? (Fe = t[47]) : ((Fe = f.trim()), (t[46] = f), (t[47] = Fe));
  let Ie = Fe.length > 0,
    Le;
  bb0: {
    if (!Ne) {
      Le = void 0;
      break bb0;
    }
    let e;
    if (t[48] !== a || t[49] !== Q) {
      e = new Set();
      for (let t of a) Q(t) || e.add(t.instanceId);
      ((t[48] = a), (t[49] = Q), (t[50] = e));
    } else e = t[50];
    Le = e;
  }
  let Re = Le,
    ze;
  if (t[51] !== a || t[52] !== Ne || t[53] !== Q) {
    bb1: {
      let e = a.filter(v);
      if (!Ne) {
        ze = e;
        break bb1;
      }
      let n = [],
        r = [];
      for (let t of e) Q(t) ? n.push(t) : r.push(t);
      let i;
      (t[55] !== n || t[56] !== r
        ? ((i = [...n, ...r]), (t[55] = n), (t[56] = r), (t[57] = i))
        : (i = t[57]),
        (ze = i));
    }
    ((t[51] = a), (t[52] = Ne), (t[53] = Q), (t[54] = ze));
  } else ze = t[54];
  let Be = ze,
    Ve = !Ie && Be.length > 0,
    He = a.map(xt),
    Ue;
  bb2: {
    let e = Me;
    if (f.trim()) {
      Ue = at(ge === null ? e : e.filter((e) => Q(e)), f, (e) => ({
        name: e.name,
        ...(e.shortName ? { shortName: e.shortName } : {}),
        ...(e.subProvider ? { subProvider: e.subProvider } : {}),
        driverKind: e.driverKind,
        providerDisplayName: e.instanceDisplayName,
        isFavorite: z.has(S(e.instanceId, e.slug)),
      }));
      break bb2;
    }
    (ge === null
      ? (e =
          F === `favorites`
            ? e.filter((e) => z.has(S(e.instanceId, e.slug)))
            : e.filter((e) => e.instanceId === F))
      : ((e = e.filter((e) => Q(e))),
        (e =
          F === `favorites`
            ? e.filter((e) => z.has(S(e.instanceId, e.slug)))
            : e.filter((e) => e.instanceId === F))),
      (Ue = p(e, {
        favoriteModelKeys: z,
        groupFavorites: F !== `favorites`,
        instanceOrder: F === `favorites` ? He : [],
      })));
  }
  let We = Ue,
    Ge;
  bb3: {
    if (Ie || F === `favorites`) {
      Ge = null;
      break bb3;
    }
    let e = [],
      t = [];
    for (let n of We) (n.isLegacy && !z.has(S(n.instanceId, n.slug)) ? t : e).push(n);
    if (t.length === 0) {
      Ge = null;
      break bb3;
    }
    Ge = { key: Ae(F), currentModels: e, legacyModels: t, isExpanded: ne.has(F) };
  }
  let $ = Ge,
    qe;
  bb4: {
    if (!$) {
      qe = We;
      break bb4;
    }
    qe = [...$.currentModels, ...($.isExpanded ? $.legacyModels : [])];
  }
  let Je = qe,
    Ye = F === `favorites` ? void 0 : be.get(F),
    Xe =
      !Ie && ye
        ? a.filter(
            (e) =>
              Q(e) &&
              ct(e, r.get(e.instanceId) ?? []) &&
              (Ye ? e.instanceId === Ye.instanceId : We.length === 0),
          )
        : [],
    Ze = a.flatMap((e) => {
      let t = (Ie ? Q(e) : e.instanceId === Ye?.instanceId) ? Te(e.snapshot, f) : null;
      return t ? [{ instanceId: e.instanceId, notice: t }] : [];
    }),
    Qe;
  t[58] === o
    ? (Qe = t[59])
    : ((Qe = (e) => !o?.(e.instanceId, e.slug)), (t[58] = o), (t[59] = Qe));
  let $e = Je.filter(Qe).slice(0, d.length).map(St),
    et = [...Me.map(Ct), ...new Set(Me.filter(wt).map(Tt))],
    tt;
  bb5: {
    let e = Je.map(Et);
    if (!$) {
      tt = e;
      break bb5;
    }
    (e.splice($.currentModels.length, 0, $.key), (tt = e));
  }
  let nt = tt,
    rt = new Map(Je.map(Dt)),
    it = pt($e, oe, e.terminalOpen),
    ut = { favoritesSet: z, modelJumpLabelByKey: it, activeModelKey: D, selectedModelKeySet: k },
    dt = (e) => {
      if (e.defaultPrevented || e.repeat || Se()) return;
      let t = U(e, oe, { platform: navigator.platform, context: he });
      if (t === `modelPicker.previousProvider` || t === `modelPicker.nextProvider`) {
        (e.preventDefault(), e.stopPropagation());
        let n = lt({
          entries: Be,
          selectedInstanceId: F,
          direction: t === `modelPicker.nextProvider` ? 1 : -1,
          disabledInstanceIds: Re,
          selectableUnavailableInstanceIds: Ee,
        });
        (m(``),
          G(n),
          ve(n === `favorites` ? `Favorites` : (be.get(n)?.displayName ?? n), `model-picker`));
        return;
      }
      let n = ie(t ?? ``);
      if (n === null) return;
      (e.preventDefault(), e.stopPropagation());
      let r = $e[n];
      if (!r) return;
      let i = ke(r);
      if (!i) return;
      let a = pe(i.slug, i.instanceId);
      if (a === null) return;
      let o = Me.find((e) => e.slug === a && e.instanceId === i.instanceId)?.name;
      ve(`Model: ${o ?? a}`, `model-picker`);
    },
    ft;
  t[60] === dt
    ? (ft = t[61])
    : ((ft = (0, Z.jsx)(_t, { onKeyDown: dt })), (t[60] = dt), (t[61] = ft));
  let gt;
  t[62] !== Ie || t[63] !== se
    ? ((gt = Ie ? { height: se } : void 0), (t[62] = Ie), (t[63] = se), (t[64] = gt))
    : (gt = t[64]);
  let vt;
  t[65] !== W ||
  t[66] !== G ||
  t[67] !== Re ||
  t[68] !== Ee ||
  t[69] !== F ||
  t[70] !== Ve ||
  t[71] !== Be
    ? ((vt =
        Ve &&
        (0, Z.jsx)(Ke, {
          selectedInstanceId: F,
          onSelectInstance: G,
          onFocusSearch: W,
          instanceEntries: Be,
          showFavorites: !0,
          ...(Ee ? { selectableUnavailableInstanceIds: Ee } : {}),
          ...(Re ? { disabledInstanceIds: Re, getDisabledInstanceTooltip: Ot } : {}),
        })),
      (t[65] = W),
      (t[66] = G),
      (t[67] = Re),
      (t[68] = Ee),
      (t[69] = F),
      (t[70] = Ve),
      (t[71] = Be),
      (t[72] = vt))
    : (vt = t[72]);
  let jt;
  t[73] !== D || t[74] !== c || t[75] !== k
    ? ((jt = c ? [...k] : D), (t[73] = D), (t[74] = c), (t[75] = k), (t[76] = jt))
    : (jt = t[76]);
  let Mt;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (e, t) => {
        ((x.current = typeof e == `string` ? e : null),
          t.reason === `keyboard` &&
            t.index >= 0 &&
            y.current?.scrollIndexIntoView?.({ index: t.index, animated: !1 }));
      }),
      (t[77] = Mt))
    : (Mt = t[77]);
  let Nt;
  t[78] !== pe || t[79] !== k || t[80] !== Y
    ? ((Nt = (e, t) => {
        let n = Array.isArray(e)
          ? (e.find((e) => !k.has(e)) ?? [...k].find((t) => !e.includes(t)))
          : e;
        if (typeof n != `string`) return;
        let r = je(n);
        if (r) {
          Y(r);
          return;
        }
        let i = ke(n);
        i && pe(i.slug, i.instanceId, `shiftKey` in t.event && t.event.shiftKey === !0);
      }),
      (t[78] = pe),
      (t[79] = k),
      (t[80] = Y),
      (t[81] = Nt))
    : (Nt = t[81]);
  let Pt = Ve && `border-l border-border/70`,
    Ft;
  t[82] === Pt
    ? (Ft = t[83])
    : ((Ft = P(`flex min-h-0 flex-1 flex-col overflow-hidden bg-muted/40`, Pt)),
      (t[82] = Pt),
      (t[83] = Ft));
  let It;
  t[84] !== Ie || t[85] !== ce
    ? ((It = (e) => {
        (Ie || ce(b.current?.offsetHeight ?? 0), m(e.target.value));
      }),
      (t[84] = Ie),
      (t[85] = ce),
      (t[86] = It))
    : (It = t[86]);
  let Lt;
  t[87] !== pe || t[88] !== l || t[89] !== f || t[90] !== Ve || t[91] !== Y
    ? ((Lt = (e) => {
        if (
          Ve &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          ((e.key === `ArrowLeft` && !e.shiftKey && f.length === 0) ||
            (e.key === `Tab` && e.shiftKey))
        ) {
          let t = e.currentTarget
              .closest(`[data-model-picker-content]`)
              ?.querySelector(`[data-model-picker-sidebar]`),
            n =
              t?.querySelector(`button[aria-pressed="true"]:not(:disabled)`) ??
              t?.querySelector(`button:not(:disabled)`);
          if (n) {
            (e.preventDefault(), e.stopPropagation(), n.focus());
            return;
          }
        }
        if (e.key === `Escape`) (e.preventDefault(), e.stopPropagation(), l?.());
        else if (e.key === `Enter` && x.current) {
          (e.preventBaseUIHandler?.(), e.preventDefault(), e.stopPropagation());
          let t = je(x.current);
          if (t) {
            Y(t);
            return;
          }
          let n = ke(x.current);
          n && pe(n.slug, n.instanceId, e.shiftKey);
        } else e.stopPropagation();
      }),
      (t[87] = pe),
      (t[88] = l),
      (t[89] = f),
      (t[90] = Ve),
      (t[91] = Y),
      (t[92] = Lt))
    : (Lt = t[92]);
  let Rt;
  t[93] !== f || t[94] !== It || t[95] !== Lt
    ? ((Rt = (0, Z.jsx)(B, {
        ref: g,
        placeholder: `Search models...`,
        value: f,
        onChange: It,
        onKeyDown: Lt,
        onMouseDown: kt,
        onTouchStart: At,
      })),
      (t[93] = f),
      (t[94] = It),
      (t[95] = Lt),
      (t[96] = Rt))
    : (Rt = t[96]);
  let zt;
  return (
    t[97] !== u || t[98] !== l || t[99] !== Xe || t[100] !== Ze
      ? ((zt = (0, Z.jsx)(mt, {
          setupEntries: Xe,
          updateRequiredNotices: Ze,
          onRequestClose: l,
          onOpenProviderSetup: u,
        })),
        (t[97] = u),
        (t[98] = l),
        (t[99] = Xe),
        (t[100] = Ze),
        (t[101] = zt))
      : (zt = t[101]),
    (0, Z.jsxs)(_, {
      delay: 0,
      children: [
        ft,
        (0, Z.jsxs)(`div`, {
          ref: b,
          className: `relative flex max-h-86.5 w-screen max-w-90 flex-row overflow-hidden`,
          style: gt,
          "data-model-picker-content": `true`,
          children: [
            vt,
            (0, Z.jsx)(V, {
              inline: !0,
              items: et,
              filteredItems: nt,
              filter: null,
              autoHighlight: !0,
              open: !0,
              virtualized: !0,
              multiple: c !== void 0,
              value: jt,
              onItemHighlighted: Mt,
              onValueChange: Nt,
              children: (0, Z.jsxs)(`div`, {
                className: Ft,
                children: [
                  Rt,
                  (0, Z.jsx)(ht, {
                    listRef: y,
                    itemKeys: nt,
                    extraData: ut,
                    renderItem: (e) => {
                      let { item: t, index: n } = e;
                      if ($?.key === t)
                        return (0, Z.jsxs)(re, {
                          hideIndicator: !0,
                          index: n,
                          value: t,
                          "aria-expanded": $.isExpanded,
                          className: `group w-full cursor-pointer`,
                          children: [
                            (0, Z.jsxs)(`div`, {
                              className: `min-w-0 flex-1 text-left`,
                              children: [
                                (0, Z.jsx)(`div`, {
                                  className: `text-xs font-medium leading-snug`,
                                  children: `Legacy models`,
                                }),
                                (0, Z.jsxs)(`div`, {
                                  className: `mt-1 text-xs font-normal leading-snug text-muted-foreground/70`,
                                  children: [$.legacyModels.length, ` models`],
                                }),
                              ],
                            }),
                            (0, Z.jsx)(i, {
                              className: P(
                                `size-4 transition-transform`,
                                $.isExpanded && `rotate-90`,
                              ),
                            }),
                          ],
                        });
                      let r = rt.get(t);
                      if (!r) return null;
                      let a = o?.(r.instanceId, r.slug) ?? null;
                      return (0, Z.jsx)(
                        Pe,
                        {
                          index: n,
                          slug: r.slug,
                          name: r.name,
                          shortName: r.shortName,
                          subProvider: r.subProvider,
                          instanceId: r.instanceId,
                          driverKind: r.driverKind,
                          providerDisplayName: r.instanceDisplayName,
                          providerAccentColor: r.instanceAccentColor,
                          acpRegistryAgentId: r.acpRegistryAgentId,
                          acpRegistryIconUrl: r.acpRegistryIconUrl,
                          isFavorite: z.has(S(r.instanceId, r.slug)),
                          isSelected: A === void 0 ? t === D : k.has(t),
                          showSelection: A !== void 0,
                          showProvider: !0,
                          preferShortName: !Ne,
                          useTriggerLabel: !1,
                          showNewBadge: r.badge === `new`,
                          unavailable: r.isUnavailable === !0,
                          contextWindowTokens: r.contextWindowTokens,
                          ...(r.capabilities ? { capabilities: r.capabilities } : {}),
                          jumpLabel: it.get(t) ?? null,
                          disabledReason: a,
                          onToggleFavorite: le,
                        },
                        t,
                      );
                    },
                  }),
                  zt,
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
});
function yt(e) {
  return S(e.provider, e.model);
}
function bt(e) {
  return [e.instanceId, e];
}
function xt(e) {
  return e.instanceId;
}
function St(e) {
  return Oe(e.instanceId, e.slug);
}
function Ct(e) {
  return Oe(e.instanceId, e.slug);
}
function wt(e) {
  return e.isLegacy;
}
function Tt(e) {
  return Ae(e.instanceId);
}
function Et(e) {
  return Oe(e.instanceId, e.slug);
}
function Dt(e) {
  return [Oe(e.instanceId, e.slug), e];
}
function Ot(e) {
  return `${e.displayName} is unavailable in this thread. Start a new thread to switch providers.`;
}
function kt(e) {
  return e.stopPropagation();
}
function At(e) {
  return e.stopPropagation();
}
function jt(e) {
  let t = (0, Ce.c)(1),
    { provider: n } = e;
  if (!he(n)) return null;
  let r;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 border-t px-3 py-2`,
          children: [
            (0, Z.jsxs)(`span`, {
              className: `flex items-center gap-2 text-xs text-muted-foreground`,
              children: [
                (0, Z.jsx)(se, { className: `size-3.5`, "aria-hidden": `true` }),
                `Using ChatGPT plan`,
              ],
            }),
            (0, Z.jsx)(J, { size: `xs` }),
          ],
        })),
        (t[0] = r))
      : (r = t[0]),
    r
  );
}
var Mt = (0, X.memo)(function (e) {
  let t = (0, Ce.c)(124),
    n = k(),
    [r, i] = (0, X.useState)(!1),
    a = e.open ?? r,
    o = e.size ?? `sm`,
    s,
    c,
    l,
    d,
    p,
    m;
  if (
    t[0] !== e.activeInstanceId ||
    t[1] !== e.instanceEntries ||
    t[2] !== e.model ||
    t[3] !== e.modelOptionsByInstance
  ) {
    ((s = e.instanceEntries.find((t) => t.instanceId === e.activeInstanceId) ?? null),
      (c = e.activeInstanceId));
    let n = e.modelOptionsByInstance.get(c) ?? [];
    ((l =
      ot({ driverKind: s?.driverKind, model: e.model, options: n }) ??
      (s?.driverKind === `opencode` || s?.driverKind === `antigravity` ? void 0 : n[0])),
      (m = l
        ? ge(l)
        : e.model === `antigravity-default`
          ? `Choose model`
          : e.model || `Choose model`),
      (p = l ? `${pe(l)}${l.isUnavailable ? ` (Unavailable)` : ``}` : m),
      (d = s !== null && u(s, e.instanceEntries)),
      (t[0] = e.activeInstanceId),
      (t[1] = e.instanceEntries),
      (t[2] = e.model),
      (t[3] = e.modelOptionsByInstance),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m));
  } else ((s = t[4]), (c = t[5]), (l = t[6]), (d = t[7]), (p = t[8]), (m = t[9]));
  let h = d,
    g;
  t[10] === e
    ? (g = t[11])
    : ((g = (t) => {
        (e.onOpenChange?.(t), e.open === void 0 && i(t));
      }),
      (t[10] = e),
      (t[11] = g));
  let _ = g,
    v,
    y;
  (t[12] === a
    ? ((v = t[13]), (y = t[14]))
    : ((v = () => {
        if (!a) return;
        let { documentElement: e, body: t } = document,
          n = e.style.overscrollBehavior,
          r = t.style.overflow,
          i = t.style.paddingRight,
          o = window.innerWidth - e.clientWidth;
        ((e.style.overscrollBehavior = `contain`),
          (t.style.overflow = `hidden`),
          o > 0 && (t.style.paddingRight = `${o}px`));
        let s = Nt,
          c = (e) => {
            s(e.target) || e.preventDefault();
          },
          l = (e) => {
            s(e.target) || e.preventDefault();
          };
        return (
          document.addEventListener(`wheel`, c, { capture: !0, passive: !1 }),
          document.addEventListener(`touchmove`, l, { capture: !0, passive: !1 }),
          () => {
            (document.removeEventListener(`wheel`, c, { capture: !0 }),
              document.removeEventListener(`touchmove`, l, { capture: !0 }),
              (e.style.overscrollBehavior = n),
              (t.style.overflow = r),
              (t.style.paddingRight = i));
          }
        );
      }),
      (y = [a]),
      (t[12] = a),
      (t[13] = v),
      (t[14] = y)),
    (0, X.useEffect)(v, y));
  let b;
  t[15] !== e || t[16] !== _
    ? ((b = (t, n) => {
        e.disabled || (e.onInstanceModelChange(t, n), _(!1));
      }),
      (t[15] = e),
      (t[16] = _),
      (t[17] = b))
    : (b = t[17]);
  let x = b,
    S;
  t[18] === e.keybindings
    ? (S = t[19])
    : ((S = e.keybindings ? oe(e.keybindings, `modelPicker.toggle`) : null),
      (t[18] = e.keybindings),
      (t[19] = S));
  let C = S,
    E,
    O,
    A,
    M,
    N,
    F,
    I,
    te,
    L,
    R;
  if (
    t[20] !== s ||
    t[21] !== a ||
    t[22] !== e.activeProviderIconClassName ||
    t[23] !== e.compact ||
    t[24] !== e.disabled ||
    t[25] !== e.instanceEntries ||
    t[26] !== e.instanceIndicatorBackground ||
    t[27] !== e.isComposerOwned ||
    t[28] !== e.modelOptionsByInstance ||
    t[29] !== e.selectedModels ||
    t[30] !== e.triggerAriaLabel ||
    t[31] !== e.triggerClassName ||
    t[32] !== e.triggerLabel ||
    t[33] !== _ ||
    t[34] !== C ||
    t[35] !== h ||
    t[36] !== o ||
    t[37] !== p
  ) {
    ((M = e.selectedModels?.map((t) => {
      let n = e.instanceEntries.find((e) => e.instanceId === t.instanceId),
        r = ot({
          driverKind: n?.driverKind,
          model: t.model,
          options: e.modelOptionsByInstance.get(t.instanceId) ?? [],
        });
      return {
        ...t,
        entry: n,
        label: r ? `${ge(r)}${r.isUnavailable ? ` (Unavailable)` : ``}` : t.model,
      };
    })),
      (A = M
        ? M.length === 0
          ? `Choose models`
          : `${M.slice(0, 2).map(Pt).join(`, `)}${M.length > 2 ? `, ${M.length - 2} more` : ``}`
        : void 0));
    let n = M ? M.map(Ft).join(`, `) || `Choose models` : void 0;
    ((R = C ? `${e.triggerLabel ?? n ?? p} · ${C}` : (e.triggerLabel ?? n ?? p)),
      (O = me),
      (L = a),
      t[48] !== e.disabled || t[49] !== _
        ? ((N = (t) => {
            e.disabled ? _(!1) : _(t);
          }),
          (t[48] = e.disabled),
          (t[49] = _),
          (t[50] = N))
        : (N = t[50]),
      (E = fe));
    let r = e.compact ? `max-w-42 shrink-0` : !e.isComposerOwned && `max-w-48 sm:max-w-56`,
      i;
    (t[51] !== e.triggerClassName || t[52] !== r
      ? ((i = P(`min-w-0 shrink justify-between whitespace-nowrap`, r, e.triggerClassName)),
        (t[51] = e.triggerClassName),
        (t[52] = r),
        (t[53] = i))
      : (i = t[53]),
      (te = (0, Z.jsx)(ee, {
        "aria-label": e.triggerAriaLabel ?? n,
        size: o,
        "data-chat-provider-model-picker": `true`,
        className: i,
        disabled: e.disabled,
      })));
    let c = o === `xs` ? `gap-1` : `gap-1.5`;
    (t[54] === c
      ? (F = t[55])
      : ((F = P(`flex min-w-0 flex-1 items-center`, c)), (t[54] = c), (t[55] = F)),
      (I =
        M && e.triggerLabel === void 0
          ? (0, Z.jsxs)(`span`, {
              className: `flex shrink-0 items-center -space-x-1`,
              "aria-hidden": `true`,
              children: [
                M.slice(0, 3).map(It),
                M.length > 3
                  ? (0, Z.jsxs)(`span`, {
                      className: `relative z-30 flex size-4 items-center justify-center rounded-full bg-(--chat-composer-glass-surface,var(--background)) text-3xs ring-2 ring-(--chat-composer-glass-surface,var(--background))`,
                      children: [`+`, M.length - 3],
                    })
                  : null,
              ],
            })
          : s && e.triggerLabel === void 0
            ? (0, Z.jsx)(xe, {
                driverKind: s.driverKind,
                displayName: s.displayName,
                accentColor: s.accentColor,
                acpRegistryAgentId: s.acpRegistryAgentId,
                acpRegistryIconUrl: s.acpRegistryIconUrl,
                showBadge: h,
                className: `size-4`,
                iconClassName: P(`size-4`, e.activeProviderIconClassName),
                indicatorBackground: e.instanceIndicatorBackground ?? `var(--contrast-input)`,
                badgeClassName: P(
                  `right-[-0.125rem] bottom-[-0.125rem] h-3 min-w-3 px-0.5 text-5xs`,
                  o === `xs` && `shadow-none`,
                ),
              })
            : null),
      (t[20] = s),
      (t[21] = a),
      (t[22] = e.activeProviderIconClassName),
      (t[23] = e.compact),
      (t[24] = e.disabled),
      (t[25] = e.instanceEntries),
      (t[26] = e.instanceIndicatorBackground),
      (t[27] = e.isComposerOwned),
      (t[28] = e.modelOptionsByInstance),
      (t[29] = e.selectedModels),
      (t[30] = e.triggerAriaLabel),
      (t[31] = e.triggerClassName),
      (t[32] = e.triggerLabel),
      (t[33] = _),
      (t[34] = C),
      (t[35] = h),
      (t[36] = o),
      (t[37] = p),
      (t[38] = E),
      (t[39] = O),
      (t[40] = A),
      (t[41] = M),
      (t[42] = N),
      (t[43] = F),
      (t[44] = I),
      (t[45] = te),
      (t[46] = L),
      (t[47] = R));
  } else
    ((E = t[38]),
      (O = t[39]),
      (A = t[40]),
      (M = t[41]),
      (N = t[42]),
      (F = t[43]),
      (I = t[44]),
      (te = t[45]),
      (L = t[46]),
      (R = t[47]));
  let z;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(`span`, {
        className: `min-w-0 flex-1 overflow-hidden truncate`,
        "data-chat-provider-model-picker-label": `true`,
      })),
      (t[56] = z))
    : (z = t[56]);
  let ne = e.triggerLabel ?? A ?? m,
    re;
  t[57] === ne
    ? (re = t[58])
    : ((re = (0, Z.jsx)(T, { render: z, children: ne })), (t[57] = ne), (t[58] = re));
  let B;
  t[59] === R
    ? (B = t[60])
    : ((B = (0, Z.jsx)(w, { side: `top`, children: R })), (t[59] = R), (t[60] = B));
  let V;
  t[61] !== re || t[62] !== B
    ? ((V = (0, Z.jsxs)(f, { children: [re, B] })), (t[61] = re), (t[62] = B), (t[63] = V))
    : (V = t[63]);
  let H;
  t[64] !== e.triggerLabel || t[65] !== M || t[66] !== l?.isUnavailable
    ? ((H =
        l?.isUnavailable && !M && e.triggerLabel === void 0
          ? (0, Z.jsx)(D, { variant: `outline`, size: `sm`, children: `Unavailable` })
          : null),
      (t[64] = e.triggerLabel),
      (t[65] = M),
      (t[66] = l?.isUnavailable),
      (t[67] = H))
    : (H = t[67]);
  let U;
  t[68] !== V || t[69] !== H || t[70] !== F || t[71] !== I
    ? ((U = (0, Z.jsxs)(`span`, { className: F, children: [I, V, H] })),
      (t[68] = V),
      (t[69] = H),
      (t[70] = F),
      (t[71] = I),
      (t[72] = U))
    : (U = t[72]);
  let ie;
  t[73] === o
    ? (ie = t[74])
    : ((ie = (0, Z.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `flex items-center`,
        children: (0, Z.jsx)(j, { size: o }),
      })),
      (t[73] = o),
      (t[74] = ie));
  let ae;
  t[75] !== E || t[76] !== U || t[77] !== ie || t[78] !== te
    ? ((ae = (0, Z.jsxs)(E, { render: te, children: [U, ie] })),
      (t[75] = E),
      (t[76] = U),
      (t[77] = ie),
      (t[78] = te),
      (t[79] = ae))
    : (ae = t[79]);
  let se;
  t[80] !== n || t[81] !== e.isComposerOwned
    ? ((se = e.isComposerOwned ? n : {}), (t[80] = n), (t[81] = e.isComposerOwned), (t[82] = se))
    : (se = t[82]);
  let ce;
  t[83] === e.selectedModels
    ? (ce = t[84])
    : ((ce = e.selectedModels === void 0 ? {} : { selectedModels: e.selectedModels }),
      (t[83] = e.selectedModels),
      (t[84] = ce));
  let le;
  t[85] === e
    ? (le = t[86])
    : ((le = e.onToggleModel
        ? {
            onToggleModel: (t, n) => {
              e.disabled || e.onToggleModel?.(t, n);
            },
          }
        : {}),
      (t[85] = e),
      (t[86] = le));
  let ue = e.lockedContinuationGroupKey ?? null,
    W;
  t[87] === e.keybindings
    ? (W = t[88])
    : ((W = e.keybindings ? { keybindings: e.keybindings } : {}),
      (t[87] = e.keybindings),
      (t[88] = W));
  let de = e.terminalOpen ?? !1,
    G;
  t[89] === _ ? (G = t[90]) : ((G = () => _(!1)), (t[89] = _), (t[90] = G));
  let K;
  t[91] === e.onOpenProviderSetup
    ? (K = t[92])
    : ((K = e.onOpenProviderSetup ? { onOpenProviderSetup: e.onOpenProviderSetup } : {}),
      (t[91] = e.onOpenProviderSetup),
      (t[92] = K));
  let q;
  t[93] === e
    ? (q = t[94])
    : ((q = (t, n) =>
        e.disabled ? `Model picker is disabled` : (e.getModelDisabledReason?.(t, n) ?? null)),
      (t[93] = e),
      (t[94] = q));
  let J;
  t[95] !== c ||
  t[96] !== x ||
  t[97] !== e.environmentId ||
  t[98] !== e.instanceEntries ||
  t[99] !== e.lockedProvider ||
  t[100] !== e.model ||
  t[101] !== e.modelOptionsByInstance ||
  t[102] !== ce ||
  t[103] !== le ||
  t[104] !== ue ||
  t[105] !== W ||
  t[106] !== de ||
  t[107] !== G ||
  t[108] !== K ||
  t[109] !== q
    ? ((J = (0, Z.jsx)(vt, {
        environmentId: e.environmentId,
        activeInstanceId: c,
        model: e.model,
        ...ce,
        ...le,
        lockedProvider: e.lockedProvider,
        lockedContinuationGroupKey: ue,
        instanceEntries: e.instanceEntries,
        ...W,
        modelOptionsByInstance: e.modelOptionsByInstance,
        terminalOpen: de,
        onRequestClose: G,
        ...K,
        getModelDisabledReason: q,
        onInstanceModelChange: x,
      })),
      (t[95] = c),
      (t[96] = x),
      (t[97] = e.environmentId),
      (t[98] = e.instanceEntries),
      (t[99] = e.lockedProvider),
      (t[100] = e.model),
      (t[101] = e.modelOptionsByInstance),
      (t[102] = ce),
      (t[103] = le),
      (t[104] = ue),
      (t[105] = W),
      (t[106] = de),
      (t[107] = G),
      (t[108] = K),
      (t[109] = q),
      (t[110] = J))
    : (J = t[110]);
  let Y;
  t[111] !== s?.snapshot || t[112] !== e.selectedModels
    ? ((Y = e.selectedModels === void 0 ? (0, Z.jsx)(jt, { provider: s?.snapshot ?? null }) : null),
      (t[111] = s?.snapshot),
      (t[112] = e.selectedModels),
      (t[113] = Y))
    : (Y = t[113]);
  let he;
  t[114] !== se || t[115] !== J || t[116] !== Y
    ? ((he = (0, Z.jsxs)(ye, {
        ...se,
        align: `start`,
        className: `before:hidden`,
        padding: `none`,
        touchBackdrop: !0,
        children: [J, Y],
      })),
      (t[114] = se),
      (t[115] = J),
      (t[116] = Y),
      (t[117] = he))
    : (he = t[117]);
  let _e;
  return (
    t[118] !== O || t[119] !== N || t[120] !== ae || t[121] !== he || t[122] !== L
      ? ((_e = (0, Z.jsxs)(O, { open: L, onOpenChange: N, children: [ae, he] })),
        (t[118] = O),
        (t[119] = N),
        (t[120] = ae),
        (t[121] = he),
        (t[122] = L),
        (t[123] = _e))
      : (_e = t[123]),
    _e
  );
});
function Nt(e) {
  return e instanceof Element && e.closest(`[data-model-picker-content]`);
}
function Pt(e) {
  return e.label;
}
function Ft(e) {
  return e.label;
}
function It(e) {
  return e.entry
    ? (0, Z.jsx)(
        xe,
        {
          driverKind: e.entry.driverKind,
          displayName: e.entry.displayName,
          accentColor: e.entry.accentColor,
          className: `size-4 rounded-full bg-(--chat-composer-glass-surface,var(--background)) ring-2 ring-(--chat-composer-glass-surface,var(--background))`,
          iconClassName: `size-4`,
        },
        `${e.instanceId}:${e.model}`,
      )
    : null;
}
export { Ye as a, qe as i, ot as n, Je as o, Ze as r, Mt as t };
//# sourceMappingURL=ProviderModelPicker-5TbK_TR9.js.map
