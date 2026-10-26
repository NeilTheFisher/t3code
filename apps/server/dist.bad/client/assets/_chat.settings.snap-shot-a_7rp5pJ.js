import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Dr as i,
  Mc as a,
  Np as o,
  Op as s,
  Qn as c,
  Xm as ee,
  Yf as l,
  ar as u,
  ir as d,
  jc as te,
  lh as f,
  mr as ne,
  nr as p,
  or as m,
  qC as h,
  qf as g,
  r as _,
  ru as v,
  uh as y,
  zS as b,
} from "./utils-CPoejuy5.js";
import { n as x } from "./select-CBCDohvC.js";
import { G as re, c as ie, l as ae } from "./useSettings-N-JG2LFZ.js";
import { c as oe } from "./server-3D32GveR.js";
import { g as S, i as se } from "./toast-B4KPIJDZ.js";
import { t as C } from "./FileDiff-cZVAF0Ut.js";
import { a as w, n as T } from "./dialog-BjeWpelT.js";
import { _ as E, n as D, r as O } from "./keybindings-b_9MjE1R.js";
import { h as k, m as A } from "./Icons-Blot99re.js";
import { n as j, t as M } from "./kbd-C7it_Fud.js";
import { a as N, f as ce, u as P } from "./KeybindingsSettings.logic-B3BUIgft.js";
import { l as le } from "./settingsSearch-CrEaqXdW.js";
import {
  M as F,
  N as ue,
  P as I,
  Qs as L,
  Rs as R,
  Vs as de,
  _s as fe,
  bs as pe,
  fr as me,
  ir as z,
  ll as he,
  tc as ge,
  vs as B,
  xs as _e,
  ys as V,
} from "./main-BZa0O6xN.js";
import { a as H, c as ve, i as U, s as ye } from "./settingsLayout-2i87rQY9.js";
import { n as be, r as xe, t as W } from "./usePermissionStatus-BlDIHXBP.js";
var G = e(t(), 1),
  Se = n(),
  Ce = {
    return: `enter`,
    page_up: `pageup`,
    page_down: `pagedown`,
    left: `arrowleft`,
    right: `arrowright`,
    up: `arrowup`,
    down: `arrowdown`,
    plus: `+`,
    minus: `-`,
  };
function we(e) {
  let t = e.trim().replace(/^Press\s+/i, ``);
  if (!t) return null;
  let n = t.match(/^((?:<[^<>]+>)+)([^<>]+)$/),
    r = (n ? n[1].replace(/<([^<>]+)>/g, `$1+`) + n[2] : t).replace(
      /\b(super|win|primary)\b/gi,
      (e) => (e.toLowerCase() === `primary` ? `ctrl` : `meta`),
    );
  if (r !== `+` && r.endsWith(`+`) && !r.endsWith(`++`)) return null;
  let i = o(r);
  if (!i) return null;
  let a = Ce[i.key] ?? i.key;
  return a !== ` ` &&
    !/^[^\s<>]$/u.test(a) &&
    !/^(?:f(?:[1-9]|1\d|2[0-4])|enter|tab|escape|backspace|delete|insert|home|end|pageup|pagedown|arrow(?:left|right|up|down)|pause|printscreen)$/i.test(
      a,
    )
    ? null
    : { ...i, key: a };
}
function K(e, t = navigator.platform) {
  return ee(e) ? f(y(e), s(t)) : O(e, t);
}
function Te(e, t) {
  return e === `shift`
    ? `⇧`
    : s(t)
      ? e === `meta`
        ? `⌘`
        : e === `control`
          ? `⌃`
          : `⌥`
      : e === `meta`
        ? _(t)
          ? `⊞`
          : `Super`
        : e === `control`
          ? `Ctrl`
          : `Alt`;
}
function Ee(e, t = navigator.platform) {
  if (ee(e)) {
    let n = Te(y(e), t);
    return [n, n];
  }
  let n = s(t);
  return [
    ...[
      [e.ctrlKey || (e.modKey && !n), `control`],
      [e.altKey, `alt`],
      [e.shiftKey, `shift`],
      [e.metaKey || (e.modKey && n), `meta`],
    ]
      .filter(([e]) => e)
      .map(([, e]) => Te(e, t)),
    D(e.key),
  ];
}
function De(e, t, n = navigator.platform) {
  return ee(e) || ee(t) ? ee(e) && ee(t) && y(e) === y(t) : E(e, n) === E(t, n);
}
function Oe(e, t, n = navigator.platform) {
  if (ee(e)) return null;
  let r = E(e, n);
  return t.find((e) => E(e.shortcut, n) === r)?.command ?? null;
}
function ke(e, t) {
  return { title: e, message: t instanceof Error ? t.message : `Try again.` };
}
var q = { state: null, refreshError: null },
  J = 0,
  Ae = l(
    (e) => {
      e.addFinalizer(() => {
        J++;
      });
      let t = me();
      if (!t) return q;
      let n = () =>
        void je(e.registry, (t) => {
          e.setSelf({
            ...h(e.self(), () => q),
            refreshError: ke(`Couldn't check capture setup`, t),
          });
        });
      return (
        window.addEventListener(`focus`, n),
        e.addFinalizer(() => window.removeEventListener(`focus`, n)),
        e.addFinalizer(
          t.onSnapShotEvent((e) => {
            e.type === `shortcut-changed` && n();
          }),
        ),
        n(),
        q
      );
    },
    (e, t) => e.setSelf(t),
  ).pipe(g(`desktop:snap-shot:state`));
async function je(e, t) {
  let n = me();
  if (!n) return;
  let r = ++J;
  try {
    let t = await n.getSnapShotState();
    return (r === J && e.set(Ae, { state: t, refreshError: null }), t);
  } catch (e) {
    r === J && t(e);
    return;
  }
}
function Me(e) {
  if (e.mode === `portal`)
    switch (e.linuxDesktop ?? Y(e)) {
      case `gnome`:
        return `GNOME`;
      case `kde`:
        return `KDE Plasma`;
      case `niri`:
        return `Niri`;
      case `hyprland`:
        return `Hyprland`;
      default:
        return;
    }
}
function Y(e) {
  return e.mode === `portal`
    ? e.linuxBackend === `niri`
      ? `niri`
      : e.linuxBackend === `kde`
        ? `kde`
        : e.linuxBackend === `hyprland`
          ? `hyprland`
          : e.linuxBackend === `screenshot-portal`
            ? `portal`
            : e.linuxBackend === `picker` && e.gnomeExtension?.status === `unsupported`
              ? `picker`
              : e.linuxBackend === `gnome-extension` || e.gnomeExtension
                ? `gnome`
                : `picker`
    : `direct`;
}
function Ne(e) {
  return e.mode === `unavailable` || e.message
    ? !1
    : Y(e) === `gnome`
      ? e.gnomeExtension?.status === `enabled` && e.linuxBackend === `gnome-extension`
      : Y(e) === `kde`
        ? e.kdeHelper?.status === `ready`
        : Y(e) !== `hyprland` || e.hyprlandHelper?.status === `ready`;
}
function Pe(e, t) {
  let n = e.macPermissions;
  return !n || (n.screenRecording && (!t || n.accessibility));
}
function X(e) {
  let t = Y(e),
    n = t === `gnome`;
  return e.message ||
    (n && e.gnomeExtension?.status === `error`) ||
    (t === `kde` && e.kdeHelper?.status === `error`) ||
    (t === `hyprland` && e.hyprlandHelper?.status === `error`)
    ? `Still unable to check access. See Advanced for help.`
    : Y(e) === `picker`
      ? `Ready. You'll choose a window each time.`
      : n && e.gnomeExtension?.status === `restart-required`
        ? `Still waiting for you to sign out and back in.`
        : Ne(e)
          ? `Ready. Continue to choose your shortcut.`
          : `Not ready yet. Finish the step above.`;
}
function Fe(e, t) {
  return t || !Ne(e)
    ? !1
    : e.linuxBackend === `hyprland`
      ? !!e.shortcutActionRegistered
      : e.linuxBackend === `niri`
        ? !!e.shortcutBinding
        : e.shortcutRegistered || !!e.shortcutPending;
}
function Ie(e, t = `resume`) {
  return Ne(e)
    ? t === `resume`
      ? (e.mode === `direct` && !e.shortcutRegistered) || Y(e) === `picker`
        ? `access`
        : `shortcut`
      : t
    : `access`;
}
function Le(e, t) {
  return !e && !t;
}
function Re(e, t) {
  return e
    ? e.mode === `unavailable`
      ? (e.message ?? `Not supported on this platform.`)
      : t
        ? Z(e, t)
        : `Turn this on to set up snapshots.`
    : `Checking snapshots…`;
}
function Z(e, t) {
  return e.message
    ? `Capture needs attention`
    : e.linuxBackend === `hyprland` && e.hyprlandHelper?.status !== `ready`
      ? e.hyprlandHelper?.status === `error`
        ? `Check capture access in setup`
        : `Install the capture helper to continue`
      : Y(e) === `gnome` && e.gnomeExtension?.status !== `enabled`
        ? `Set up active-window snapshots`
        : Y(e) === `kde` && e.kdeHelper?.status !== `ready`
          ? e.kdeHelper?.status === `error`
            ? `Check capture access in setup`
            : `Install the capture helper to continue`
          : Y(e) === `picker`
            ? `Manual capture only. You'll choose a window each time`
            : t
              ? e.shortcutPending
                ? e.linuxBackend === `hyprland`
                  ? `Connecting your shortcut…`
                  : `Waiting for shortcut permission`
                : e.shortcutVerified
                  ? `Ready to capture`
                  : (e.linuxBackend === `niri` && e.shortcutBinding) ||
                      (e.linuxBackend === `hyprland` && e.shortcutActionRegistered)
                    ? `Use your shortcut from another app`
                    : e.shortcutRegistered
                      ? e.shortcutLabel
                        ? `Ready to capture`
                        : `Shortcut saved`
                      : `Finish shortcut setup`
              : `Enable capture to continue`;
}
function ze(e) {
  return e
    ? e.linuxBackend === `hyprland`
      ? e.shortcutMessage
      : e.shortcutPending
        ? `Approve the shortcut permission prompt to continue.`
        : e.shortcutRegistered
          ? e.mode === `portal`
            ? null
            : `Shortcut saved.`
          : e.shortcutMessage
    : null;
}
function Be(e) {
  if (!e) return `Continue setup`;
  if (Ne(e)) return `Manage capture`;
  let t = Me(e);
  return t ? `Set up ${t} capture` : `Continue setup`;
}
function Ve(e, t) {
  return e?.windows
    ? !0
    : e?.macPermissions !== void 0 && Ne(e) && Pe(e, t) && e.shortcutRegistered;
}
function He(e) {
  if (!(e?.mode !== `portal` || e.linuxFeedbackAvailable))
    return e.linuxBackend === `hyprland`
      ? e.hyprlandHelper?.status === `ready`
        ? `Capture effects aren't available on this desktop.`
        : `Install or update the capture helper to enable effects.`
      : e.linuxBackend === `niri`
        ? `Capture effects aren't available on Niri.`
        : e.linuxBackend === `kde`
          ? e.kdeHelper?.status === `ready`
            ? `Capture effects aren't available on this desktop.`
            : `Install or update the capture helper to enable effects.`
          : e.linuxBackend === `gnome-extension`
            ? `Update the GNOME extension, then sign out and back in to enable effects.`
            : Y(e) === `gnome`
              ? `Finish extension setup to enable effects.`
              : `Capture effects aren't available on this desktop.`;
}
function Ue(e) {
  return e?.mode === `portal` && Y(e) === `picker`
    ? `Automatic capture isn't available here. Choose a window instead.`
    : `Capture a window and attach it to your current draft.`;
}
function We(e) {
  if (
    e?.mode === `portal` &&
    (e.linuxBackend === `picker` || e.linuxBackend === `screenshot-portal`)
  )
    return `This desktop only provides a screenshot.`;
}
function Ge(e) {
  if (!e)
    return typeof window < `u` && window.desktopBridge
      ? `Update the desktop app to use snapshots.`
      : `Only available in the desktop app.`;
}
function Ke(e) {
  return e === `off` ? { snapShotPlaySound: !1 } : { snapShotPlaySound: !0, snapShotSound: e };
}
function Q() {
  let e = null;
  return {
    tryBegin() {
      return e ? null : ((e = Symbol()), e);
    },
    clear() {
      e = null;
    },
    owns(t) {
      return e === t;
    },
  };
}
var $ = e(r(), 1);
function qe(e) {
  let t = (0, Se.c)(7),
    { shortcut: n, platform: r } = e,
    i = r === void 0 ? navigator.platform : r,
    a,
    o;
  if (t[0] !== i || t[1] !== n) {
    let e = new Map();
    ((a = j),
      (o = Ee(n, i).map((t) => {
        let n = e.get(t) ?? 0;
        return (e.set(t, n + 1), (0, $.jsx)(M, { "aria-hidden": !0, children: t }, `${t}-${n}`));
      })),
      (t[0] = i),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o));
  } else ((a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(a, { children: o })), (t[4] = a), (t[5] = o), (t[6] = s))
      : (s = t[6]),
    s
  );
}
var Je = {
    Shift: `shift`,
    Meta: `meta`,
    OS: `meta`,
    Control: `control`,
    Alt: `alt`,
    AltGraph: `alt`,
  },
  Ye = {
    shift: [`ShiftLeft`, `ShiftRight`],
    meta: [`MetaLeft`, `MetaRight`],
    control: [`ControlLeft`, `ControlRight`],
    alt: [`AltLeft`, `AltRight`],
  };
function Xe(e) {
  let t = (0, Se.c)(43),
    {
      shortcut: n,
      shortcutLabel: r,
      disabled: a,
      allowModifierPairs: s,
      onRecord: c,
      onStart: l,
      onError: u,
    } = e,
    d = a !== void 0 && a,
    te = s === void 0 || s,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = me()), (t[0] = f)) : (f = t[0]);
  let ne = f,
    p;
  t[1] !== n || t[2] !== r ? ((p = r ? we(r) : n), (t[1] = n), (t[2] = r), (t[3] = p)) : (p = t[3]);
  let m = p,
    [h, g] = (0, G.useState)(!1),
    [_] = (0, G.useState)(Q),
    v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = new Set()), (t[4] = v)) : (v = t[4]);
  let y = (0, G.useRef)(v),
    b;
  t[5] === _
    ? (b = t[6])
    : ((b = () => {
        (_.clear(), y.current.clear(), g(!1), ne?.setSnapShotShortcutSuppressed(!1).catch(Qe));
      }),
      (t[5] = _),
      (t[6] = b));
  let x = b,
    re;
  t[7] !== d || t[8] !== u || t[9] !== l || t[10] !== _
    ? ((re = async () => {
        if (!ne || d) return;
        let e = _.tryBegin();
        if (e) {
          (y.current.clear(), l?.());
          try {
            (await ne.setSnapShotShortcutSuppressed(!0), _.owns(e) && g(!0));
          } catch (t) {
            let n = t;
            if (!_.owns(e)) return;
            (_.clear(), u(n instanceof Error ? n.message : `Could not start shortcut recording.`));
          }
        }
      }),
      (t[7] = d),
      (t[8] = u),
      (t[9] = l),
      (t[10] = _),
      (t[11] = re))
    : (re = t[11]);
  let ie = re,
    ae,
    oe;
  (t[12] === _
    ? ((ae = t[13]), (oe = t[14]))
    : ((ae = () => () => {
        (_.clear(), ne?.setSnapShotShortcutSuppressed(!1).catch(Ze));
      }),
      (oe = [ne, _]),
      (t[12] = _),
      (t[13] = ae),
      (t[14] = oe)),
    (0, G.useEffect)(ae, oe));
  let S;
  t[15] !== te || t[16] !== u || t[17] !== c || t[18] !== h || t[19] !== x
    ? ((S = (e) => {
        if (!h || e.key === `Tab` || e.repeat) return;
        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
          x();
          return;
        }
        let t = Je[e.key];
        if (t) {
          let n = y.current;
          n.add(e.code);
          let [r, i] = Ye[t];
          if (n.has(r) && n.has(i)) {
            if (!te) {
              u(`Add a letter, number, or function key to your shortcut.`);
              return;
            }
            (x(),
              c(
                t === `shift`
                  ? { kind: `both-shift-keys` }
                  : { kind: `modifier-pair`, modifier: t },
              ));
          }
          return;
        }
        if (!e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) return;
        let n = P(e, navigator.platform);
        if (!n) return;
        let r = o(n);
        r && (x(), c(r));
      }),
      (t[15] = te),
      (t[16] = u),
      (t[17] = c),
      (t[18] = h),
      (t[19] = x),
      (t[20] = S))
    : (S = t[20]);
  let se = S,
    C = h ? `secondary` : `outline`,
    w;
  t[21] === m
    ? (w = t[22])
    : ((w = m ? `Record snapshot shortcut, currently ${K(m)}` : `Change snapshot shortcut`),
      (t[21] = m),
      (t[22] = w));
  let T;
  t[23] === ie ? (T = t[24]) : ((T = () => void ie()), (t[23] = ie), (t[24] = T));
  let E;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => y.current.delete(e.code)), (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] !== te || t[27] !== m || t[28] !== h
    ? ((D = h
        ? `Press shortcut…`
        : m
          ? !te && ee(m)
            ? `Choose shortcut`
            : (0, $.jsx)(qe, { shortcut: m })
          : `Change shortcut`),
      (t[26] = te),
      (t[27] = m),
      (t[28] = h),
      (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] !== d ||
  t[31] !== se ||
  t[32] !== h ||
  t[33] !== x ||
  t[34] !== C ||
  t[35] !== w ||
  t[36] !== T ||
  t[37] !== D
    ? ((O = (0, $.jsx)(i, {
        type: `button`,
        size: `xs`,
        variant: C,
        disabled: d,
        "aria-label": w,
        "aria-pressed": h,
        "data-keybinding-capture": ``,
        onClick: T,
        onKeyDown: se,
        onKeyUp: E,
        onBlur: x,
        children: D,
      })),
      (t[30] = d),
      (t[31] = se),
      (t[32] = h),
      (t[33] = x),
      (t[34] = C),
      (t[35] = w),
      (t[36] = T),
      (t[37] = D),
      (t[38] = O))
    : (O = t[38]);
  let k;
  return (
    t[39] !== h || t[40] !== x || t[41] !== O
      ? ((k = { recording: h, stopRecording: x, input: O }),
        (t[39] = h),
        (t[40] = x),
        (t[41] = O),
        (t[42] = k))
      : (k = t[42]),
    k
  );
}
function Ze() {}
function Qe() {}
var $e = o(`Ctrl+Shift+2`);
function et(e) {
  let t = (0, Se.c)(131),
    { state: n, disabled: r, onBusyChange: a, onSaved: s, onComplete: c } = e,
    l = r !== void 0 && r,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = me()), (t[0] = u)) : (u = t[0]);
  let d = u,
    te = re(),
    { copyToClipboard: f, isCopied: ne } = S(),
    [p, m] = (0, G.useState)(null),
    [h, g] = (0, G.useState)(null),
    [_, y] = (0, G.useState)(null),
    [x, ie] = (0, G.useState)(null),
    [ae, oe] = (0, G.useState)(null),
    [w, T] = (0, G.useState)(!1),
    E = l || x !== null,
    D = !!(d?.previewSnapShotConfig && d.applySnapShotConfig),
    O = p !== null && p.before !== p.after,
    k = n.linuxBackend === `niri`,
    A = k ? `Niri` : `Hyprland`,
    j,
    M;
  if (t[1] !== ae || t[2] !== p?.shortcut) {
    let e = (ae ?? p?.shortcut)?.trim();
    ((M = Xe),
      (j = e ? (o(e.replace(/super/gi, `meta`)) ?? $e) : $e),
      (t[1] = ae),
      (t[2] = p?.shortcut),
      (t[3] = j),
      (t[4] = M));
  } else ((j = t[3]), (M = t[4]));
  let N, P, le;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => y(null)),
      (P = (e) => y({ message: e })),
      (le = (e) => {
        ee(e) || (oe(ce({ ...e, ctrlKey: e.ctrlKey || e.modKey, modKey: !1 })), m(null), y(null));
      }),
      (t[5] = N),
      (t[6] = P),
      (t[7] = le))
    : ((N = t[5]), (P = t[6]), (le = t[7]));
  let F;
  t[8] !== E || t[9] !== j
    ? ((F = {
        shortcut: j,
        disabled: E,
        allowModifierPairs: !1,
        onStart: N,
        onError: P,
        onRecord: le,
      }),
      (t[8] = E),
      (t[9] = j),
      (t[10] = F))
    : (F = t[10]);
  let ue = M(F),
    I = E || ue.recording,
    R;
  t[11] !== O || t[12] !== p
    ? ((R =
        p && O
          ? ge({ name: p.path, contents: p.before }, { name: p.path, contents: p.after })
          : null),
      (t[11] = O),
      (t[12] = p),
      (t[13] = R))
    : (R = t[13]);
  let fe = R,
    pe;
  t[14] === a
    ? (pe = t[15])
    : ((pe = (e) => {
        (ie(e), a?.(!0), y(null));
      }),
      (t[14] = a),
      (t[15] = pe));
  let z = pe,
    he;
  t[16] === a
    ? (he = t[17])
    : ((he = () => {
        (ie(null), a?.(!1));
      }),
      (t[16] = a),
      (t[17] = he));
  let B = he,
    _e;
  t[18] !== I || t[19] !== z || t[20] !== w || t[21] !== B || t[22] !== ae
    ? ((_e = async (e, t) => {
        let n = e === void 0 ? w : e,
          r = t === void 0 ? `install` : t;
        if (I || !d?.previewSnapShotConfig) return;
        (z(`reading`), m(null), g(null), T(n));
        let i = await v(() =>
          d.previewSnapShotConfig({
            operation: r,
            chooseFile: n,
            ...(ae?.trim() ? { shortcut: ae.trim() } : {}),
          }),
        );
        if (i._tag === `Success`) m(i.value);
        else {
          let e = b(i.cause);
          y({
            message: `Couldn't prepare the changes. Check Advanced for help.`,
            ...(e instanceof Error ? { detail: e.message } : {}),
          });
        }
        B();
      }),
      (t[18] = I),
      (t[19] = z),
      (t[20] = w),
      (t[21] = B),
      (t[22] = ae),
      (t[23] = _e))
    : (_e = t[23]);
  let V = _e,
    H;
  t[24] !== I || t[25] !== z || t[26] !== B || t[27] !== c || t[28] !== s || t[29] !== p
    ? ((H = async () => {
        if (I || !p || !d?.applySnapShotConfig) return;
        z(`writing`);
        let e = await v(async () => {
          let e = await d.applySnapShotConfig(p.id);
          (g(e),
            await s?.(),
            !e.warning &&
              p.operation === `install` &&
              c &&
              (se.add({
                type: `success`,
                title: `Shortcut saved`,
                description: `Use ${p.shortcut} from another app.`,
              }),
              await c()));
        });
        if (e._tag === `Failure`) {
          let t = b(e.cause);
          (y({
            message: `Couldn't save your shortcut. Review the changes and try again.`,
            ...(t instanceof Error ? { detail: t.message } : {}),
          }),
            m(null));
        }
        B();
      }),
      (t[24] = I),
      (t[25] = z),
      (t[26] = B),
      (t[27] = c),
      (t[28] = s),
      (t[29] = p),
      (t[30] = H))
    : (H = t[30]);
  let ve = H,
    U;
  t[31] !== ue.input || t[32] !== h
    ? ((U = h
        ? null
        : (0, $.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            children: [(0, $.jsx)(`span`, { children: `Shortcut` }), ue.input],
          })),
      (t[31] = ue.input),
      (t[32] = h),
      (t[33] = U))
    : (U = t[33]);
  let ye;
  t[34] === ue.recording
    ? (ye = t[35])
    : ((ye = ue.recording
        ? (0, $.jsx)(`p`, {
            role: `status`,
            className: `text-xs text-muted-foreground`,
            children: `Press your shortcut. Esc cancels.`,
          })
        : null),
      (t[34] = ue.recording),
      (t[35] = ye));
  let be;
  t[36] !== I ||
  t[37] !== ve ||
  t[38] !== O ||
  t[39] !== fe ||
  t[40] !== p ||
  t[41] !== V ||
  t[42] !== te ||
  t[43] !== h ||
  t[44] !== n.shortcutActionRegistered ||
  t[45] !== x
    ? ((be = h
        ? (0, $.jsx)(`p`, {
            role: `status`,
            children: h.warning
              ? `Saved, but the shortcut needs attention. Check Advanced for help.`
              : p?.operation === `remove`
                ? `Shortcut removed.`
                : `Use ${p?.shortcut} from another app to capture a window.`,
          })
        : p
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-muted-foreground`,
                  children: O
                    ? p.operation === `remove`
                      ? `Review the change below to remove your shortcut.`
                      : `Review the change below, then save your shortcut.`
                    : p.operation === `remove`
                      ? `There's no capture shortcut to remove.`
                      : `This shortcut is already set up.`,
                }),
                fe
                  ? (0, $.jsx)(`div`, {
                      className: `max-h-80 overflow-auto rounded-lg border text-xs`,
                      "aria-label": `Shortcut changes`,
                      children: (0, $.jsx)(C, {
                        fileDiff: fe,
                        options: {
                          diffStyle: `unified`,
                          theme: L(te),
                          overflow: `wrap`,
                          preferredHighlighter: de,
                        },
                      }),
                    })
                  : null,
                O
                  ? (0, $.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Only these changes will be saved. We'll keep a backup.`,
                    })
                  : null,
                (0, $.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    O || p.operation === `install`
                      ? (0, $.jsx)(i, {
                          disabled:
                            I || (p.operation === `install` && n.shortcutActionRegistered === !1),
                          "aria-busy": x === `writing`,
                          onClick: () => void ve(),
                          children:
                            x === `writing`
                              ? `Saving…`
                              : O
                                ? p.operation === `install`
                                  ? `Save shortcut`
                                  : `Remove shortcut`
                                : `Done`,
                        })
                      : null,
                    (0, $.jsx)(i, {
                      variant: `ghost`,
                      disabled: I,
                      onClick: () => m(null),
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-muted-foreground`,
                  children: `Allow T3 Code to read your desktop settings. You'll review any changes here before saving.`,
                }),
                (0, $.jsx)(i, {
                  disabled: I || !D,
                  "aria-busy": x === `reading`,
                  onClick: () => void V(),
                  children: x === `reading` ? `Preparing changes…` : `Review changes`,
                }),
                D
                  ? null
                  : (0, $.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Update T3 Code to finish setting up your shortcut.`,
                    }),
              ],
            })),
      (t[36] = I),
      (t[37] = ve),
      (t[38] = O),
      (t[39] = fe),
      (t[40] = p),
      (t[41] = V),
      (t[42] = te),
      (t[43] = h),
      (t[44] = n.shortcutActionRegistered),
      (t[45] = x),
      (t[46] = be))
    : (be = t[46]);
  let xe;
  t[47] === _
    ? (xe = t[48])
    : ((xe = _
        ? (0, $.jsx)(`p`, { role: `alert`, className: `text-destructive`, children: _.message })
        : null),
      (t[47] = _),
      (t[48] = xe));
  let W;
  t[49] !== n.shortcutActionRegistered || t[50] !== n.shortcutMessage || t[51] !== n.shortcutPending
    ? ((W =
        n.shortcutActionRegistered === !1 && n.shortcutMessage
          ? (0, $.jsx)(`p`, {
              role: `status`,
              className: `text-muted-foreground`,
              children: n.shortcutPending
                ? `Connecting to your desktop…`
                : `Restart T3 Code to finish connecting your shortcut.`,
            })
          : null),
      (t[49] = n.shortcutActionRegistered),
      (t[50] = n.shortcutMessage),
      (t[51] = n.shortcutPending),
      (t[52] = W))
    : (W = t[52]);
  let Ce;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(`summary`, { className: `cursor-pointer`, children: `Advanced` })),
      (t[53] = Ce))
    : (Ce = t[53]);
  let we;
  t[54] !== _?.detail || t[55] !== h?.warning
    ? ((we =
        _?.detail || h?.warning
          ? (0, $.jsxs)(`div`, {
              className: `space-y-1`,
              children: [
                (0, $.jsx)(`p`, {
                  className: `font-medium text-foreground`,
                  children: `Troubleshooting`,
                }),
                (0, $.jsx)(`p`, { className: `break-words`, children: _?.detail ?? h?.warning }),
              ],
            })
          : null),
      (t[54] = _?.detail),
      (t[55] = h?.warning),
      (t[56] = we))
    : (we = t[56]);
  let K;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(`p`, {
        className: `font-medium text-foreground`,
        children: `Settings file`,
      })),
      (t[57] = K))
    : (K = t[57]);
  let Te =
      p?.path ??
      n.shortcutConfigPath ??
      (k ? `~/.config/niri/config.kdl` : `~/.config/hypr/hyprland.conf`),
    Ee;
  t[58] === Te
    ? (Ee = t[59])
    : ((Ee = (0, $.jsx)(`p`, { className: `break-all font-mono`, children: Te })),
      (t[58] = Te),
      (t[59] = Ee));
  let De;
  t[60] === k
    ? (De = t[61])
    : ((De = k
        ? (0, $.jsx)(`p`, { children: `T3 Code also reads any files included by this file.` })
        : null),
      (t[60] = k),
      (t[61] = De));
  let Oe;
  t[62] === p
    ? (Oe = t[63])
    : ((Oe =
        p && p.resolvedPath !== p.path
          ? (0, $.jsxs)(`p`, {
              className: `break-all`,
              children: [`Linked to `, p.resolvedPath, `. The link will be kept.`],
            })
          : null),
      (t[62] = p),
      (t[63] = Oe));
  let ke;
  t[64] !== Ee || t[65] !== De || t[66] !== Oe
    ? ((ke = (0, $.jsxs)(`div`, { className: `space-y-1`, children: [K, Ee, De, Oe] })),
      (t[64] = Ee),
      (t[65] = De),
      (t[66] = Oe),
      (t[67] = ke))
    : (ke = t[67]);
  let q = I || !D,
    J;
  t[68] === V ? (J = t[69]) : ((J = () => void V(!0)), (t[68] = V), (t[69] = J));
  let Ae;
  t[70] !== q || t[71] !== J
    ? ((Ae = (0, $.jsx)(i, {
        size: `sm`,
        variant: `outline`,
        disabled: q,
        onClick: J,
        children: `Choose a different file…`,
      })),
      (t[70] = q),
      (t[71] = J),
      (t[72] = Ae))
    : (Ae = t[72]);
  let je = I || !D,
    Me;
  t[73] !== w || t[74] !== V
    ? ((Me = () => void V(w, `remove`)), (t[73] = w), (t[74] = V), (t[75] = Me))
    : (Me = t[75]);
  let Y;
  t[76] !== je || t[77] !== Me
    ? ((Y = (0, $.jsx)(i, {
        size: `sm`,
        variant: `ghost`,
        disabled: je,
        onClick: Me,
        children: `Remove shortcut…`,
      })),
      (t[76] = je),
      (t[77] = Me),
      (t[78] = Y))
    : (Y = t[78]);
  let Ne;
  t[79] !== I || t[80] !== V || t[81] !== h
    ? ((Ne = h
        ? (0, $.jsx)(i, {
            size: `sm`,
            variant: `outline`,
            disabled: I || !D,
            onClick: () => void V(),
            children: `Review changes`,
          })
        : null),
      (t[79] = I),
      (t[80] = V),
      (t[81] = h),
      (t[82] = Ne))
    : (Ne = t[82]);
  let Pe;
  t[83] !== Ae || t[84] !== Y || t[85] !== Ne
    ? ((Pe = (0, $.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [Ae, Y, Ne] })),
      (t[83] = Ae),
      (t[84] = Y),
      (t[85] = Ne),
      (t[86] = Pe))
    : (Pe = t[86]);
  let X = k
      ? `A custom --config or NIRI_CONFIG can change its location.`
      : `On Omarchy, use your own bindings file, not its defaults.`,
    Fe;
  t[87] === X
    ? (Fe = t[88])
    : ((Fe = (0, $.jsxs)(`p`, {
        children: [`Use your desktop's shortcut settings file.`, ` `, X],
      })),
      (t[87] = X),
      (t[88] = Fe));
  let Ie;
  t[89] === h
    ? (Ie = t[90])
    : ((Ie = h?.backupPath
        ? (0, $.jsxs)(`p`, { className: `break-all`, children: [`Backup: `, h.backupPath] })
        : null),
      (t[89] = h),
      (t[90] = Ie));
  let Le;
  t[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, $.jsx)(`p`, {
        className: `font-medium text-foreground`,
        children: `Manual setup`,
      })),
      (t[91] = Le))
    : (Le = t[91]);
  let Re = k
      ? `Paste this inside binds { … } in your Niri config, then save.`
      : `Add this binding to your Hyprland config, then save.`,
    Z;
  t[92] === Re
    ? (Z = t[93])
    : ((Z = (0, $.jsxs)(`p`, { children: [Re, ` `, `Change the keys if needed.`] })),
      (t[92] = Re),
      (t[93] = Z));
  let ze;
  t[94] === n.shortcutBinding
    ? (ze = t[95])
    : ((ze = (0, $.jsx)(`pre`, {
        className: `max-h-40 overflow-auto whitespace-pre-wrap break-all rounded-xl bg-muted/50 p-3`,
        children: n.shortcutBinding,
      })),
      (t[94] = n.shortcutBinding),
      (t[95] = ze));
  let Be = I || !n.shortcutBinding,
    Ve;
  t[96] !== f || t[97] !== n.shortcutBinding
    ? ((Ve = () => {
        n.shortcutBinding && f(n.shortcutBinding);
      }),
      (t[96] = f),
      (t[97] = n.shortcutBinding),
      (t[98] = Ve))
    : (Ve = t[98]);
  let He = ne ? `Copied` : `Copy shortcut`,
    Ue;
  t[99] !== Be || t[100] !== Ve || t[101] !== He
    ? ((Ue = (0, $.jsx)(i, {
        size: `sm`,
        variant: `outline`,
        disabled: Be,
        onClick: Ve,
        children: He,
      })),
      (t[99] = Be),
      (t[100] = Ve),
      (t[101] = He),
      (t[102] = Ue))
    : (Ue = t[102]);
  let We;
  t[103] === A
    ? (We = t[104])
    : ((We = (0, $.jsxs)(`p`, {
        children: [
          `Turn capture off in T3 Code to stop it. Remove the shortcut from `,
          A,
          ` to free up the keys.`,
        ],
      })),
      (t[103] = A),
      (t[104] = We));
  let Ge;
  t[105] !== n.shortcutActionRegistered || t[106] !== n.shortcutMessage
    ? ((Ge =
        n.shortcutActionRegistered === !1
          ? (0, $.jsx)(`p`, { role: `status`, children: n.shortcutMessage })
          : null),
      (t[105] = n.shortcutActionRegistered),
      (t[106] = n.shortcutMessage),
      (t[107] = Ge))
    : (Ge = t[107]);
  let Ke;
  t[108] !== I || t[109] !== c || t[110] !== n.shortcutActionRegistered
    ? ((Ke = c
        ? (0, $.jsx)(i, {
            size: `sm`,
            variant: `outline`,
            disabled: I || n.shortcutActionRegistered === !1,
            onClick: () => void c(),
            children: `I've added the shortcut`,
          })
        : null),
      (t[108] = I),
      (t[109] = c),
      (t[110] = n.shortcutActionRegistered),
      (t[111] = Ke))
    : (Ke = t[111]);
  let Q;
  t[112] !== we ||
  t[113] !== ke ||
  t[114] !== Pe ||
  t[115] !== Fe ||
  t[116] !== Ie ||
  t[117] !== Z ||
  t[118] !== ze ||
  t[119] !== Ue ||
  t[120] !== We ||
  t[121] !== Ge ||
  t[122] !== Ke
    ? ((Q = (0, $.jsxs)(`details`, {
        className: `text-xs text-muted-foreground`,
        children: [
          Ce,
          (0, $.jsxs)(`div`, {
            className: `mt-3 space-y-3`,
            children: [we, ke, Pe, Fe, Ie, Le, Z, ze, Ue, We, Ge, Ke],
          }),
        ],
      })),
      (t[112] = we),
      (t[113] = ke),
      (t[114] = Pe),
      (t[115] = Fe),
      (t[116] = Ie),
      (t[117] = Z),
      (t[118] = ze),
      (t[119] = Ue),
      (t[120] = We),
      (t[121] = Ge),
      (t[122] = Ke),
      (t[123] = Q))
    : (Q = t[123]);
  let qe;
  return (
    t[124] !== U || t[125] !== ye || t[126] !== be || t[127] !== xe || t[128] !== W || t[129] !== Q
      ? ((qe = (0, $.jsxs)(`div`, {
          className: `space-y-4 text-sm`,
          children: [U, ye, be, xe, W, Q],
        })),
        (t[124] = U),
        (t[125] = ye),
        (t[126] = be),
        (t[127] = xe),
        (t[128] = W),
        (t[129] = Q),
        (t[130] = qe))
      : (qe = t[130]),
    qe
  );
}
var tt = [
    { id: `access`, label: `Access` },
    { id: `shortcut`, label: `Shortcut` },
  ],
  nt = {
    "not-installed": {
      title: `Install the extension`,
      description: `The T3 Code GNOME extension lets you capture other windows and bring them into your draft. Sign out once after installing.`,
    },
    "restart-required": {
      title: `Extension installed`,
      description: `Save your work, then sign out and back in. Your setup will be waiting here.`,
    },
    "update-required": {
      title: `Update the extension`,
      description: `Install the update, then sign out and back in.`,
    },
    "extensions-disabled": {
      title: `Allow GNOME extensions`,
      description: `Open GNOME Extensions and turn on extensions, then check again.`,
    },
    disabled: {
      title: `Enable the extension`,
      description: `Enable T3 Code SnapShots to start capturing windows.`,
    },
    enabled: { title: `Capture is ready`, description: `Next, choose your shortcut.` },
    unsupported: {
      title: `Automatic capture isn't available`,
      description: `Use Take snapshot from the command palette to choose a window.`,
    },
    error: {
      title: `Couldn't set up the extension`,
      description: `Check T3 Code SnapShots in GNOME Extensions, then try again.`,
    },
  };
function rt(e) {
  let t = (0, Se.c)(161),
    {
      state: n,
      initialStep: r,
      wasEnabled: a,
      includeAccessibility: o,
      busy: s,
      error: c,
      shortcutInput: l,
      shortcutStatus: u,
      shortcutChanged: d,
      canSaveShortcut: te,
      onSaveShortcut: f,
      onEnable: ne,
      onAction: p,
      onRefresh: m,
      onClose: h,
      onLeaveStep: g,
    } = e,
    _;
  t[0] !== r || t[1] !== n
    ? ((_ = () => Ie(n, r)), (t[0] = r), (t[1] = n), (t[2] = _))
    : (_ = t[2]);
  let [v, y] = (0, G.useState)(_),
    [b, x] = (0, G.useState)(!1),
    [re, ie] = (0, G.useState)(!1),
    [ae, oe] = (0, G.useState)(!1),
    S = s || b || ae,
    se;
  t[3] === n ? (se = t[4]) : ((se = Y(n)), (t[3] = n), (t[4] = se));
  let C = se,
    E = C === `niri` || C === `hyprland`,
    D;
  t[5] === n ? (D = t[6]) : ((D = Me(n)), (t[5] = n), (t[6] = D));
  let O = D,
    j = n.gnomeExtension,
    M = C === `hyprland` ? n.hyprlandHelper : n.kdeHelper,
    N = C === `kde` || C === `hyprland`,
    ce = C === `hyprland` ? `install-hyprland-helper` : `install-kde-helper`,
    P = C === `hyprland` ? `remove-hyprland-helper` : `remove-kde-helper`,
    le;
  t[7] === n ? (le = t[8]) : ((le = Ne(n)), (t[7] = n), (t[8] = le));
  let F = le,
    ue;
  t[9] === m
    ? (ue = t[10])
    : ((ue = async () => {
        let e = await m();
        if (!e?.macPermissions) throw Error(`Permission status unavailable`);
        return e.macPermissions;
      }),
      (t[9] = m),
      (t[10] = ue));
  let I;
  t[11] === n.macPermissions
    ? (I = t[12])
    : ((I = n.macPermissions ?? { screenRecording: !1, accessibility: !1 }),
      (t[11] = n.macPermissions),
      (t[12] = I));
  let L = W(ue, I, !!n.macPermissions && v === `access` && !S),
    R = n.macPermissions ? L.status : void 0,
    de;
  t[13] !== o || t[14] !== R || t[15] !== L
    ? ((de = !R || L.isReady(o ? [`screenRecording`, `accessibility`] : [`screenRecording`])),
      (t[13] = o),
      (t[14] = R),
      (t[15] = L),
      (t[16] = de))
    : (de = t[16]);
  let me = de,
    z;
  t[17] !== d || t[18] !== n
    ? ((z = Fe(n, d)), (t[17] = d), (t[18] = n), (t[19] = z))
    : (z = t[19]);
  let he = z,
    ge = j?.status === `not-installed` || j?.status === `update-required`,
    H = j?.status === `disabled`,
    ve;
  t[20] === g
    ? (ve = t[21])
    : ((ve = (e) => {
        (g(), ie(!1), y(e));
      }),
      (t[20] = g),
      (t[21] = ve));
  let U = ve,
    ye;
  t[22] !== S || t[23] !== m
    ? ((ye = async () => {
        if (S) return;
        (x(!0), ie(!1));
        let e = await m().finally(() => x(!1));
        ie(e !== void 0);
      }),
      (t[22] = S),
      (t[23] = m),
      (t[24] = ye))
    : (ye = t[24]);
  let Ce = ye,
    we;
  t[25] !== F ||
  t[26] !== C ||
  t[27] !== j ||
  t[28] !== M?.status ||
  t[29] !== N ||
  t[30] !== R ||
  t[31] !== me ||
  t[32] !== n.message
    ? ((we =
        n.message && !R
          ? {
              title: `Let's try that again`,
              description: `Couldn't check snapshots. Try again to continue.`,
            }
          : C === `gnome` && j
            ? j.status === `enabled` && !F
              ? {
                  title: `Check capture access`,
                  description: `The extension isn't ready yet. Try again in a moment.`,
                }
              : nt[j.status]
            : N
              ? M?.status === `ready`
                ? { title: `Capture is ready`, description: `Next, choose your shortcut.` }
                : M?.status === `error`
                  ? {
                      title: `Let's fix capture access`,
                      description: `Try reinstalling the capture helper, then check again.`,
                    }
                  : {
                      title:
                        M?.status === `update-required`
                          ? `Update the capture helper`
                          : `Allow snapshots`,
                      description: `T3 Code's capture helper lets you capture other apps and return to your draft. It's included with T3 Code.`,
                    }
              : C === `niri`
                ? { title: `Capture is ready`, description: `Next, choose your shortcut.` }
                : C === `picker`
                  ? {
                      title: `Choose a window each time`,
                      description: `Your desktop doesn't support automatic capture. You'll choose the window to capture instead.`,
                    }
                  : {
                      title: `Allow snapshots`,
                      description:
                        C === `portal`
                          ? `Your desktop may ask for permission when you first capture.`
                          : R
                            ? me
                              ? `Test a snapshot of the current window. If macOS asks to bypass its window picker, choose Allow. The test image is discarded.`
                              : `Allow each permission, then continue.`
                            : `Allow access when prompted to start capturing windows.`,
                    }),
      (t[25] = F),
      (t[26] = C),
      (t[27] = j),
      (t[28] = M?.status),
      (t[29] = N),
      (t[30] = R),
      (t[31] = me),
      (t[32] = n.message),
      (t[33] = we))
    : (we = t[33]);
  let K = we,
    Te = v === `access` ? K.title : `Choose your shortcut`,
    Ee =
      v === `access`
        ? K.description
        : E
          ? `Click the shortcut, then press the keys you want.`
          : n.mode === `portal`
            ? `Choose your keys, then approve the permission prompt if asked.`
            : `Use both Shift keys, or record a different shortcut.`,
    De;
  t[34] === v
    ? (De = t[35])
    : ((De = (e) => {
        let { id: t } = e;
        return t === v;
      }),
      (t[34] = v),
      (t[35] = De));
  let Oe = tt.findIndex(De),
    ke;
  t[36] !== C || t[37] !== j || t[38] !== M || t[39] !== N || t[40] !== n.message || t[41] !== v
    ? ((ke =
        v === `access`
          ? [
              n.message,
              C === `gnome` && (j?.status === `error` || j?.status === `unsupported`)
                ? j.message
                : null,
              N && M?.status === `error` ? M.message : null,
            ]
          : []),
      (t[36] = C),
      (t[37] = j),
      (t[38] = M),
      (t[39] = N),
      (t[40] = n.message),
      (t[41] = v),
      (t[42] = ke))
    : (ke = t[42]);
  let q;
  t[43] !== c || t[44] !== ke
    ? ((q = new Set([c, ...ke].filter(ot))), (t[43] = c), (t[44] = ke), (t[45] = q))
    : (q = t[45]);
  let J;
  t[46] === q ? (J = t[47]) : ((J = [...q]), (t[46] = q), (t[47] = J));
  let Ae = J,
    je;
  t[48] !== S || t[49] !== h
    ? ((je = (e) => {
        !e && !S && h(!1);
      }),
      (t[48] = S),
      (t[49] = h),
      (t[50] = je))
    : (je = t[50]);
  let Pe = !S,
    Le = O ? `Set up snapshots for ${O}` : `Set up snapshots`,
    Re;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = tt.map(at)), (t[51] = Re))
    : (Re = t[51]);
  let Z;
  t[52] !== S || t[53] !== Oe
    ? ((Z = (e) => S || e > Oe), (t[52] = S), (t[53] = Oe), (t[54] = Z))
    : (Z = t[54]);
  let ze;
  t[55] !== U || t[56] !== v
    ? ((ze = (e) => {
        let t = tt[e];
        t && t.id !== v && U(t.id);
      }),
      (t[55] = U),
      (t[56] = v),
      (t[57] = ze))
    : (ze = t[57]);
  let Be;
  t[58] !== Oe || t[59] !== Z || t[60] !== ze
    ? ((Be = (0, $.jsx)(_e, { steps: Re, currentStep: Oe, isStepDisabled: Z, onStepChange: ze })),
      (t[58] = Oe),
      (t[59] = Z),
      (t[60] = ze),
      (t[61] = Be))
    : (Be = t[61]);
  let Ve;
  t[62] !== Le || t[63] !== Be
    ? ((Ve = (0, $.jsx)(B, { title: Le, children: Be })), (t[62] = Le), (t[63] = Be), (t[64] = Ve))
    : (Ve = t[64]);
  let He;
  t[65] === Te
    ? (He = t[66])
    : ((He = (0, $.jsx)(`h3`, { className: `flex items-center gap-2 font-medium`, children: Te })),
      (t[65] = Te),
      (t[66] = He));
  let Ue;
  t[67] === Ee
    ? (Ue = t[68])
    : ((Ue = (0, $.jsx)(w, { children: Ee })), (t[67] = Ee), (t[68] = Ue));
  let We;
  t[69] !== He || t[70] !== Ue
    ? ((We = (0, $.jsxs)(`div`, {
        className: `space-y-2`,
        "aria-live": `polite`,
        children: [He, Ue],
      })),
      (t[69] = He),
      (t[70] = Ue),
      (t[71] = We))
    : (We = t[71]);
  let Ge;
  t[72] !== F ||
  t[73] !== s ||
  t[74] !== S ||
  t[75] !== re ||
  t[76] !== b ||
  t[77] !== E ||
  t[78] !== c ||
  t[79] !== M?.status ||
  t[80] !== N ||
  t[81] !== o ||
  t[82] !== ce ||
  t[83] !== R ||
  t[84] !== p ||
  t[85] !== h ||
  t[86] !== m ||
  t[87] !== L ||
  t[88] !== d ||
  t[89] !== l ||
  t[90] !== u ||
  t[91] !== n ||
  t[92] !== v
    ? ((Ge =
        v === `access`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(`p`, {
                  role: `status`,
                  "aria-atomic": `true`,
                  className: re && !S && !c ? `text-xs text-muted-foreground` : `sr-only`,
                  children: re && !S && !c ? X(n) : null,
                }),
                R
                  ? (0, $.jsx)(be, {
                      busy: S,
                      permissions: [
                        {
                          id: `screenRecording`,
                          icon: (0, $.jsx)(k, { className: `size-8 shrink-0 drop-shadow-sm` }),
                          title: `Screen Recording`,
                          description: `Capture the window you're using.`,
                          granted: R.screenRecording,
                          onAllow: () => void p(`allow-screen-recording`),
                        },
                        {
                          id: `accessibility`,
                          icon: (0, $.jsx)(A, { className: `size-8 shrink-0 drop-shadow-sm` }),
                          title: `Accessibility`,
                          description: o
                            ? `Include text and controls from the captured app.`
                            : `Optional. Include text and controls from the captured app.`,
                          granted: R.accessibility,
                          onAllow: () => void p(`allow-accessibility`),
                        },
                      ],
                    })
                  : null,
                L.error && R
                  ? (0, $.jsx)(`p`, {
                      role: `status`,
                      className: `text-xs text-muted-foreground`,
                      children: L.error,
                    })
                  : null,
                N && M?.status === `error`
                  ? (0, $.jsx)(i, {
                      size: `xs`,
                      variant: `outline`,
                      disabled: S,
                      onClick: () => void p(ce),
                      children: `Reinstall helper`,
                    })
                  : null,
              ],
            })
          : E
            ? (0, $.jsx)(et, {
                state: n,
                disabled: s || b || !F,
                onBusyChange: oe,
                onSaved: m,
                onComplete: () => h(!0),
              })
            : (0, $.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  l,
                  u
                    ? (0, $.jsx)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        role: `status`,
                        children: u,
                      })
                    : null,
                  !d &&
                  !n.shortcutRegistered &&
                  !n.shortcutPending &&
                  n.shortcutCanRetry !== !1 &&
                  !ee(n.shortcut)
                    ? (0, $.jsx)(i, {
                        variant: `ghost`,
                        size: `sm`,
                        disabled: S,
                        onClick: () => void p(`retry-shortcut`),
                        children: n.mode === `portal` ? `Shortcut permissions` : `Try again`,
                      })
                    : null,
                ],
              })),
      (t[72] = F),
      (t[73] = s),
      (t[74] = S),
      (t[75] = re),
      (t[76] = b),
      (t[77] = E),
      (t[78] = c),
      (t[79] = M?.status),
      (t[80] = N),
      (t[81] = o),
      (t[82] = ce),
      (t[83] = R),
      (t[84] = p),
      (t[85] = h),
      (t[86] = m),
      (t[87] = L),
      (t[88] = d),
      (t[89] = l),
      (t[90] = u),
      (t[91] = n),
      (t[92] = v),
      (t[93] = Ge))
    : (Ge = t[93]);
  let Ke;
  t[94] !== F || t[95] !== v
    ? ((Ke =
        v === `shortcut` && !F
          ? (0, $.jsx)(`p`, {
              role: `alert`,
              className: `text-destructive`,
              children: `Capture needs attention. Go back to check access.`,
            })
          : null),
      (t[94] = F),
      (t[95] = v),
      (t[96] = Ke))
    : (Ke = t[96]);
  let Q;
  t[97] === c
    ? (Q = t[98])
    : ((Q = c
        ? (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-destructive`,
            children: `Couldn't finish this step. Try again or check Advanced for help.`,
          })
        : null),
      (t[97] = c),
      (t[98] = Q));
  let qe;
  t[99] !== C ||
  t[100] !== S ||
  t[101] !== Ae ||
  t[102] !== j?.status ||
  t[103] !== M?.status ||
  t[104] !== N ||
  t[105] !== p ||
  t[106] !== P ||
  t[107] !== v
    ? ((qe =
        Ae.length > 0 || (v === `access` && (C === `gnome` || N))
          ? (0, $.jsxs)(`details`, {
              className: `text-xs text-muted-foreground`,
              children: [
                (0, $.jsx)(`summary`, { className: `cursor-pointer`, children: `Advanced` }),
                (0, $.jsxs)(`div`, {
                  className: `mt-3 space-y-3`,
                  children: [
                    Ae.map(it),
                    v === `access` && (C === `gnome` || N)
                      ? (0, $.jsx)(`p`, { children: `Included with T3 Code. No download needed.` })
                      : null,
                    v === `access` && C === `gnome` && j?.status === `enabled`
                      ? (0, $.jsx)(i, {
                          size: `xs`,
                          variant: `ghost`,
                          disabled: S,
                          onClick: () => void p(`disable-extension`),
                          children: `Disable extension`,
                        })
                      : null,
                    v === `access` && N && M?.status !== `not-installed`
                      ? (0, $.jsx)(i, {
                          size: `xs`,
                          variant: `ghost`,
                          disabled: S,
                          onClick: () => void p(P),
                          children: `Remove capture helper`,
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
      (t[99] = C),
      (t[100] = S),
      (t[101] = Ae),
      (t[102] = j?.status),
      (t[103] = M?.status),
      (t[104] = N),
      (t[105] = p),
      (t[106] = P),
      (t[107] = v),
      (t[108] = qe))
    : (qe = t[108]);
  let Je;
  t[109] !== We || t[110] !== Ge || t[111] !== Ke || t[112] !== Q || t[113] !== qe
    ? ((Je = (0, $.jsx)(V, {
        children: (0, $.jsxs)(`div`, {
          className: `space-y-4 text-sm`,
          children: [We, Ge, Ke, Q, qe],
        }),
      })),
      (t[109] = We),
      (t[110] = Ge),
      (t[111] = Ke),
      (t[112] = Q),
      (t[113] = qe),
      (t[114] = Je))
    : (Je = t[114]);
  let Ye;
  t[115] !== S || t[116] !== U || t[117] !== v
    ? ((Ye =
        v === `access`
          ? null
          : (0, $.jsx)(i, {
              variant: `ghost`,
              disabled: S,
              onClick: () => U(`access`),
              children: `Back`,
            })),
      (t[115] = S),
      (t[116] = U),
      (t[117] = v),
      (t[118] = Ye))
    : (Ye = t[118]);
  let Xe;
  t[119] === h ? (Xe = t[120]) : ((Xe = () => void h(!1)), (t[119] = h), (t[120] = Xe));
  let Ze = a ? `Close` : `Finish later`,
    Qe;
  t[121] !== S || t[122] !== Xe || t[123] !== Ze
    ? ((Qe = (0, $.jsx)(i, { variant: `ghost`, disabled: S, onClick: Xe, children: Ze })),
      (t[121] = S),
      (t[122] = Xe),
      (t[123] = Ze),
      (t[124] = Qe))
    : (Qe = t[124]);
  let $e;
  t[125] !== F ||
  t[126] !== C ||
  t[127] !== S ||
  t[128] !== te ||
  t[129] !== U ||
  t[130] !== Ce ||
  t[131] !== b ||
  t[132] !== E ||
  t[133] !== H ||
  t[134] !== j?.status ||
  t[135] !== M?.status ||
  t[136] !== N ||
  t[137] !== ge ||
  t[138] !== ce ||
  t[139] !== R ||
  t[140] !== me ||
  t[141] !== p ||
  t[142] !== h ||
  t[143] !== ne ||
  t[144] !== f ||
  t[145] !== d ||
  t[146] !== he ||
  t[147] !== v
    ? (($e =
        v === `access`
          ? N && !F && M?.status !== `ready`
            ? (0, $.jsx)(i, {
                disabled: S,
                "aria-busy": S,
                onClick: () => void (M?.status === `error` ? Ce() : p(ce)),
                children: b
                  ? `Checking…`
                  : S
                    ? `Installing…`
                    : M?.status === `error`
                      ? `Check again`
                      : M?.status === `update-required`
                        ? `Update helper`
                        : `Install helper`,
              })
            : C === `gnome` && !F && j?.status !== `enabled`
              ? (0, $.jsx)(i, {
                  disabled: S,
                  "aria-busy": b,
                  onClick: () =>
                    void (ge ? p(`install-extension`) : H ? p(`enable-extension`) : Ce()),
                  children: b
                    ? `Checking…`
                    : S
                      ? ge
                        ? `Installing…`
                        : H
                          ? `Enabling…`
                          : `Working…`
                      : ge
                        ? j?.status === `update-required`
                          ? `Update extension`
                          : `Install extension`
                        : H
                          ? `Enable extension`
                          : `Check again`,
                })
              : (0, $.jsx)(xe, {
                  ready: me,
                  busy: S,
                  onClick: async () => {
                    (await ne()) && U(`shortcut`);
                  },
                  children: S
                    ? `Working…`
                    : R
                      ? `Test capture and continue`
                      : C === `direct`
                        ? `Allow capture`
                        : !F && !R
                          ? `Try again`
                          : `Continue`,
                })
          : E
            ? null
            : (0, $.jsx)(i, {
                disabled: S || !F || (d ? !te : !he),
                onClick: async () => {
                  (!d || (await f())) && (await h(!0));
                },
                children: S ? `Saving…` : d ? `Save and finish` : `Done`,
              })),
      (t[125] = F),
      (t[126] = C),
      (t[127] = S),
      (t[128] = te),
      (t[129] = U),
      (t[130] = Ce),
      (t[131] = b),
      (t[132] = E),
      (t[133] = H),
      (t[134] = j?.status),
      (t[135] = M?.status),
      (t[136] = N),
      (t[137] = ge),
      (t[138] = ce),
      (t[139] = R),
      (t[140] = me),
      (t[141] = p),
      (t[142] = h),
      (t[143] = ne),
      (t[144] = f),
      (t[145] = d),
      (t[146] = he),
      (t[147] = v),
      (t[148] = $e))
    : ($e = t[148]);
  let rt;
  t[149] !== Ye || t[150] !== Qe || t[151] !== $e
    ? ((rt = (0, $.jsxs)(fe, { children: [Ye, Qe, $e] })),
      (t[149] = Ye),
      (t[150] = Qe),
      (t[151] = $e),
      (t[152] = rt))
    : (rt = t[152]);
  let st;
  t[153] !== Pe || t[154] !== Ve || t[155] !== Je || t[156] !== rt
    ? ((st = (0, $.jsxs)(pe, { showCloseButton: Pe, children: [Ve, Je, rt] })),
      (t[153] = Pe),
      (t[154] = Ve),
      (t[155] = Je),
      (t[156] = rt),
      (t[157] = st))
    : (st = t[157]);
  let ct;
  return (
    t[158] !== je || t[159] !== st
      ? ((ct = (0, $.jsx)(T, { open: !0, onOpenChange: je, children: st })),
        (t[158] = je),
        (t[159] = st),
        (t[160] = ct))
      : (ct = t[160]),
    ct
  );
}
function it(e) {
  return (0, $.jsx)(`p`, { className: `break-words`, children: e }, e);
}
function at(e) {
  return e.label;
}
function ot(e) {
  return e !== null;
}
var st = `grid grid-cols-[1fr_auto]`;
function ct() {
  let e = (0, Se.c)(158),
    t = ae(dt),
    n = te(oe),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = me()), (e[0] = r)) : (r = e[0]);
  let o = r,
    s = (0, G.useContext)(a),
    { state: l, refreshError: f } = te(Ae),
    [h, g] = (0, G.useState)(!1),
    [_, y] = (0, G.useState)(null),
    [re] = (0, G.useState)(ue),
    [S, C] = (0, G.useState)(),
    w;
  e[1] !== S || e[2] !== re || e[3] !== l?.macPermissions
    ? ((w =
        S === void 0
          ? l?.macPermissions && re
            ? { initialStep: `access`, wasEnabled: re.wasEnabled }
            : null
          : S),
      (e[1] = S),
      (e[2] = re),
      (e[3] = l?.macPermissions),
      (e[4] = w))
    : (w = e[4]);
  let T = w,
    E;
  e[5] === T
    ? (E = e[6])
    : ((E = (e, t) => {
        let n = ke(e, t);
        (y(n), T || se.add({ type: `error`, title: n.title, description: n.message }));
      }),
      (e[5] = T),
      (e[6] = E));
  let D = E,
    O;
  e[7] !== s || e[8] !== D
    ? ((O = () => je(s, (e) => D(`Couldn't check capture setup`, e))),
      (e[7] = s),
      (e[8] = D),
      (e[9] = O))
    : (O = e[9]);
  let k = O,
    [A, j] = (0, G.useState)(t.snapShotShortcut),
    M;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { status: `idle`, availability: null }), (e[10] = M))
    : (M = e[10]);
  let [ce, P] = (0, G.useState)(M),
    L = t.snapShotShortcut,
    de;
  e[11] !== A || e[12] !== ce || e[13] !== L
    ? ((de =
        ce.status === `idle` || (De(ce.shortcut, A) && De(ce.savedShortcut, L))
          ? ce
          : { status: `idle`, availability: null }),
      (e[11] = A),
      (e[12] = ce),
      (e[13] = L),
      (e[14] = de))
    : (de = e[14]);
  let fe = de,
    pe = (0, G.useRef)(0),
    z;
  e[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = Ge(!!o)), (e[15] = z)) : (z = e[15]);
  let ge = z,
    B = !!o && l !== null && l.mode !== `unavailable`,
    _e;
  e[16] === l ? (_e = e[17]) : ((_e = He(l)), (e[16] = l), (e[17] = _e));
  let V = _e,
    be = l?.linuxBackend === `niri` || l?.linuxBackend === `hyprland`,
    xe;
  e[18] !== A || e[19] !== be || e[20] !== L
    ? ((xe = !be && !De(A, L)), (e[18] = A), (e[19] = be), (e[20] = L), (e[21] = xe))
    : (xe = e[21]);
  let W = xe,
    Ce = W ? A : (l?.shortcut ?? L),
    we = W ? Oe(A, n) : null,
    K = W && we === null && fe.availability?.available === !0,
    Te = t.snapShotPlaySound ? t.snapShotSound : `off`,
    Ee = Te === `off` ? `Off` : Te === `soft-pop` ? `Whoosh (Default)` : `Click`,
    q;
  e[22] !== k || e[23] !== D || e[24] !== h || e[25] !== l?.macPermissions || e[26] !== T
    ? ((q = async (e) => {
        if (!o?.setupSnapShot || h) return;
        (g(!0), y(null));
        let t = await v(async () => {
          (l?.macPermissions &&
            T &&
            (e === `allow-screen-recording` || e === `allow-accessibility`) &&
            I(T.wasEnabled),
            await o.setupSnapShot(e),
            await k());
        });
        (t._tag === `Failure` &&
          D(
            e === `retry-shortcut`
              ? `Couldn't open shortcut permissions`
              : `Couldn't complete capture setup`,
            b(t.cause),
          ),
          g(!1));
      }),
      (e[22] = k),
      (e[23] = D),
      (e[24] = h),
      (e[25] = l?.macPermissions),
      (e[26] = T),
      (e[27] = q))
    : (q = e[27]);
  let J = q,
    [Me, Y] = (0, G.useState)(L);
  De(Me, L) || (Y(L), j(L), P({ status: `idle`, availability: null }));
  let Pe;
  e[28] !== k || e[29] !== D
    ? ((Pe = async (e) => {
        y(null);
        try {
          return (await ie(e), await k());
        } catch (e) {
          D(`Couldn't save capture settings`, e);
        }
      }),
      (e[28] = k),
      (e[29] = D),
      (e[30] = Pe))
    : (Pe = e[30]);
  let X = Pe,
    Fe;
  e[31] !== D || e[32] !== X || e[33] !== t.snapShotEnabled
    ? ((Fe = async (e) => {
        try {
          (e && t.snapShotEnabled && (await o?.requestSnapShotPermissions(!0)),
            await X({ snapShotIncludeAccessibility: e }));
        } catch (e) {
          D(`Couldn't allow app text capture`, e);
        }
      }),
      (e[31] = D),
      (e[32] = X),
      (e[33] = t.snapShotEnabled),
      (e[34] = Fe))
    : (Fe = e[34]);
  let Z = Fe,
    Q;
  e[35] !== n || e[36] !== L
    ? ((Q = async (e) => {
        let t = (pe.current += 1);
        if ((j(e), !Oe(e, n) && o)) {
          P({ status: `checking`, availability: null, shortcut: e, savedShortcut: L });
          try {
            let n = await o.checkSnapShotShortcut(e);
            t === pe.current &&
              P({ status: `checked`, availability: n, shortcut: e, savedShortcut: L });
          } catch (n) {
            let r = n;
            if (t !== pe.current) return;
            P({
              status: `checked`,
              shortcut: e,
              savedShortcut: L,
              availability: {
                available: !1,
                message: r instanceof Error ? r.message : `Could not check this shortcut.`,
              },
            });
          }
        }
      }),
      (e[35] = n),
      (e[36] = L),
      (e[37] = Q))
    : (Q = e[37]);
  let qe = Q,
    Je = W ? void 0 : l?.shortcutLabel,
    Ye = l?.mode !== `portal`,
    Ze;
  e[38] === qe ? (Ze = e[39]) : ((Ze = (e) => void qe(e)), (e[38] = qe), (e[39] = Ze));
  let Qe;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = () => {
        ((pe.current += 1), P({ status: `idle`, availability: null }));
      }),
      (e[40] = Qe))
    : (Qe = e[40]);
  let $e;
  e[41] !== A || e[42] !== L
    ? (($e = (e) =>
        P({
          status: `checked`,
          shortcut: A,
          savedShortcut: L,
          availability: { available: !1, message: e },
        })),
      (e[41] = A),
      (e[42] = L),
      (e[43] = $e))
    : ($e = e[43]);
  let et;
  e[44] !== Ce || e[45] !== h || e[46] !== Je || e[47] !== Ye || e[48] !== Ze || e[49] !== $e
    ? ((et = {
        shortcut: Ce,
        shortcutLabel: Je,
        disabled: h,
        allowModifierPairs: Ye,
        onRecord: Ze,
        onStart: Qe,
        onError: $e,
      }),
      (e[44] = Ce),
      (e[45] = h),
      (e[46] = Je),
      (e[47] = Ye),
      (e[48] = Ze),
      (e[49] = $e),
      (e[50] = et))
    : (et = e[50]);
  let { recording: tt, stopRecording: nt, input: it } = Xe(et),
    at = tt
      ? `Press your shortcut. Esc cancels.`
      : we
        ? `T3 Code already uses this for "${N(we)}".`
        : fe.status === `checking`
          ? `Checking shortcut…`
          : fe.availability
            ? fe.availability.available
              ? `Ready to save.`
              : fe.availability.message
            : l?.mode === `portal` && !l.shortcutLabel && ee(Ce)
              ? `Try a shortcut such as Ctrl+Shift+2.`
              : ze(l),
    ot;
  if (
    e[51] !== k ||
    e[52] !== X ||
    e[53] !== L ||
    e[54] !== t.snapShotEnabled ||
    e[55] !== h ||
    e[56] !== l ||
    e[57] !== nt
  ) {
    ot = async (e) => {
      let t = e === void 0 ? `resume` : e;
      l &&
        !h &&
        (nt(),
        (pe.current += 1),
        j(L),
        P({ status: `idle`, availability: null }),
        y(null),
        g(!0),
        await n(t).finally(() => g(!1)));
    };
    let n = async (e) => {
      let n = await k();
      n &&
        (n.macPermissions && (e = `access`),
        !t.snapShotEnabled && Ie(n, e) !== `access` && ((n = await X({ snapShotEnabled: !0 })), !n)
          ? C({ initialStep: `access`, wasEnabled: !1 })
          : C({ initialStep: Ie(n, e), wasEnabled: t.snapShotEnabled }));
    };
    ((e[51] = k),
      (e[52] = X),
      (e[53] = L),
      (e[54] = t.snapShotEnabled),
      (e[55] = h),
      (e[56] = l),
      (e[57] = nt),
      (e[58] = ot));
  } else ot = e[58];
  let ct;
  e[59] !== k ||
  e[60] !== D ||
  e[61] !== X ||
  e[62] !== t.snapShotEnabled ||
  e[63] !== t.snapShotIncludeAccessibility ||
  e[64] !== h ||
  e[65] !== l?.macPermissions ||
  e[66] !== l?.message ||
  e[67] !== l?.mode ||
  e[68] !== T?.wasEnabled
    ? ((ct = async () => {
        if (h) return !1;
        (g(!0), y(null));
        let e = await v(async () => {
          if (l?.macPermissions) {
            if ((I(T?.wasEnabled ?? t.snapShotEnabled), !o?.setupSnapShot))
              throw Error(`Restart T3 Code to finish capture setup.`);
            await o.setupSnapShot(`test-mac-capture`);
          }
          l?.mode === `direct` &&
            (await o?.requestSnapShotPermissions(t.snapShotIncludeAccessibility));
          let e = t.snapShotEnabled && !l?.message ? await k() : await X({ snapShotEnabled: !0 });
          return e !== void 0 && Ne(e);
        });
        return (
          g(!1),
          e._tag === `Success` ? e.value : (D(`Couldn't verify capture access`, b(e.cause)), !1)
        );
      }),
      (e[59] = k),
      (e[60] = D),
      (e[61] = X),
      (e[62] = t.snapShotEnabled),
      (e[63] = t.snapShotIncludeAccessibility),
      (e[64] = h),
      (e[65] = l?.macPermissions),
      (e[66] = l?.message),
      (e[67] = l?.mode),
      (e[68] = T?.wasEnabled),
      (e[69] = ct))
    : (ct = e[69]);
  let ft = ct,
    pt;
  e[70] !== D ||
  e[71] !== X ||
  e[72] !== t.snapShotEnabled ||
  e[73] !== h ||
  e[74] !== nt ||
  e[75] !== T
    ? ((pt = async (e) => {
        if (!T || h) return;
        g(!0);
        let n = await v(async () => {
          (t.snapShotEnabled && Le(T.wasEnabled, e) && !(await X({ snapShotEnabled: !1 }))) ||
            (nt(), y(null), F(), C(null));
        });
        (n._tag === `Failure` && D(`Couldn't close capture setup`, b(n.cause)), g(!1));
      }),
      (e[70] = D),
      (e[71] = X),
      (e[72] = t.snapShotEnabled),
      (e[73] = h),
      (e[74] = nt),
      (e[75] = T),
      (e[76] = pt))
    : (pt = e[76]);
  let mt = pt,
    ht;
  e[77] !== K || e[78] !== A || e[79] !== X || e[80] !== h
    ? ((ht = async () => {
        if (!K || h) return !1;
        g(!0);
        let e = await X({ snapShotShortcut: A }).finally(() => g(!1));
        return !!(e?.shortcutRegistered || e?.shortcutPending);
      }),
      (e[77] = K),
      (e[78] = A),
      (e[79] = X),
      (e[80] = h),
      (e[81] = ht))
    : (ht = e[81]);
  let gt = ht,
    _t;
  e[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = le(`snap-shot-enabled`)), (e[82] = _t))
    : (_t = e[82]);
  let vt;
  e[83] === l ? (vt = e[84]) : ((vt = Ue(l)), (e[83] = l), (e[84] = vt));
  let yt;
  e[85] !== f || e[86] !== t.snapShotEnabled || e[87] !== h || e[88] !== l || e[89] !== T
    ? ((yt = o
        ? h && !T
          ? `Updating capture settings…`
          : f
            ? `${f.title}. ${f.message}`
            : Re(l, t.snapShotEnabled)
        : void 0),
      (e[85] = f),
      (e[86] = t.snapShotEnabled),
      (e[87] = h),
      (e[88] = l),
      (e[89] = T),
      (e[90] = yt))
    : (yt = e[90]);
  let bt;
  e[91] !== ot ||
  e[92] !== t.snapShotEnabled ||
  e[93] !== t.snapShotIncludeAccessibility ||
  e[94] !== h ||
  e[95] !== l
    ? ((bt =
        t.snapShotEnabled && !Ve(l, t.snapShotIncludeAccessibility)
          ? (0, $.jsx)(i, {
              size: `xs`,
              variant: `outline`,
              disabled: h,
              onClick: () => void ot(),
              children: Be(l),
            })
          : null),
      (e[91] = ot),
      (e[92] = t.snapShotEnabled),
      (e[93] = t.snapShotIncludeAccessibility),
      (e[94] = h),
      (e[95] = l),
      (e[96] = bt))
    : (bt = e[96]);
  let xt = t.snapShotEnabled || !!T,
    St = !B || h,
    Ct;
  e[97] !== ot || e[98] !== X || e[99] !== l?.windows
    ? ((Ct = (e) => {
        e ? (l?.windows ? X({ snapShotEnabled: !0 }) : ot()) : X({ snapShotEnabled: !1 });
      }),
      (e[97] = ot),
      (e[98] = X),
      (e[99] = l?.windows),
      (e[100] = Ct))
    : (Ct = e[100]);
  let wt;
  e[101] !== xt || e[102] !== St || e[103] !== Ct
    ? ((wt = (0, $.jsx)(R, {
        checked: xt,
        disabled: St,
        "aria-label": `Enable snapshots`,
        onCheckedChange: Ct,
      })),
      (e[101] = xt),
      (e[102] = St),
      (e[103] = Ct),
      (e[104] = wt))
    : (wt = e[104]);
  let Tt;
  e[105] !== bt || e[106] !== wt
    ? ((Tt = (0, $.jsxs)($.Fragment, { children: [bt, wt] })),
      (e[105] = bt),
      (e[106] = wt),
      (e[107] = Tt))
    : (Tt = e[107]);
  let Et;
  e[108] !== vt || e[109] !== yt || e[110] !== Tt
    ? ((Et = (0, $.jsx)(H, { ..._t, description: vt, status: yt, control: Tt })),
      (e[108] = vt),
      (e[109] = yt),
      (e[110] = Tt),
      (e[111] = Et))
    : (Et = e[111]);
  let Dt;
  e[112] !== K ||
  e[113] !== B ||
  e[114] !== V ||
  e[115] !== be ||
  e[116] !== ot ||
  e[117] !== X ||
  e[118] !== Z ||
  e[119] !== gt ||
  e[120] !== L ||
  e[121] !== t.snapShotAnimations ||
  e[122] !== t.snapShotEnabled ||
  e[123] !== t.snapShotFlash ||
  e[124] !== t.snapShotIncludeAccessibility ||
  e[125] !== J ||
  e[126] !== h ||
  e[127] !== W ||
  e[128] !== it ||
  e[129] !== at ||
  e[130] !== Ee ||
  e[131] !== Te ||
  e[132] !== l ||
  e[133] !== nt
    ? ((Dt =
        t.snapShotEnabled && B
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(H, {
                  ...le(`snap-shot-accessibility`),
                  description: `Include text and controls when the app makes them available.`,
                  status: We(l),
                  control: (0, $.jsx)(R, {
                    checked: !We(l) && t.snapShotIncludeAccessibility,
                    disabled: !B || !!We(l),
                    "aria-label": `Include app text in snapshots`,
                    onCheckedChange: (e) => void Z(e),
                  }),
                }),
                (0, $.jsx)(H, {
                  ...le(`snap-shot-shortcut`),
                  description:
                    l?.linuxBackend === `picker`
                      ? `Choose a window to capture from any app.`
                      : `Capture the window you're using without switching apps.`,
                  status: be ? void 0 : at,
                  control: be
                    ? (0, $.jsx)(i, {
                        size: `xs`,
                        variant: `outline`,
                        disabled: h,
                        onClick: () => void ot(`shortcut`),
                        children: `Change shortcut`,
                      })
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          it,
                          W
                            ? (0, $.jsxs)($.Fragment, {
                                children: [
                                  (0, $.jsx)(i, {
                                    size: `xs`,
                                    disabled: !K || h,
                                    onClick: () => void gt(),
                                    children: h ? `Saving…` : `Save`,
                                  }),
                                  (0, $.jsx)(i, {
                                    size: `xs`,
                                    variant: `ghost`,
                                    disabled: h,
                                    onClick: () => {
                                      (nt(),
                                        (pe.current += 1),
                                        j(L),
                                        P({ status: `idle`, availability: null }));
                                    },
                                    children: `Cancel`,
                                  }),
                                ],
                              })
                            : l?.mode === `portal` && l.shortcutCanRetry !== !1 && !ee(L)
                              ? (0, $.jsx)(i, {
                                  size: `xs`,
                                  variant: `ghost`,
                                  disabled: h || l.shortcutPending,
                                  onClick: () => void J(`retry-shortcut`),
                                  children: `Shortcut permissions`,
                                })
                              : null,
                        ],
                      }),
                }),
                (0, $.jsx)(H, {
                  ...le(`snap-shot-sound`),
                  description: `Choose the sound played when capture starts.`,
                  control: (0, $.jsxs)(c, {
                    children: [
                      (0, $.jsx)(ne, {
                        "aria-label": `Snapshot sound: ` + Ee,
                        render: (0, $.jsx)(x, { size: `sm` }),
                        className: `w-auto min-w-0`,
                        disabled: !B,
                        children:
                          Te === `off`
                            ? `Off`
                            : Te === `soft-pop`
                              ? (0, $.jsxs)($.Fragment, {
                                  children: [
                                    `Whoosh `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-muted-foreground`,
                                      children: `(Default)`,
                                    }),
                                  ],
                                })
                              : `Click`,
                      }),
                      (0, $.jsx)(d, {
                        align: `end`,
                        children: (0, $.jsxs)(u, {
                          onValueChange: (e) => void X(Ke(e)),
                          value: Te,
                          children: [
                            (0, $.jsx)(m, { closeOnClick: !0, value: `off`, children: `Off` }),
                            (0, $.jsxs)(`div`, {
                              className: st,
                              children: [
                                (0, $.jsxs)(m, {
                                  closeOnClick: !0,
                                  value: `soft-pop`,
                                  children: [
                                    `Whoosh `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-muted-foreground`,
                                      children: `(Default)`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(p, {
                                  "aria-label": `Play Whoosh`,
                                  closeOnClick: !1,
                                  onClick: ut,
                                  children: (0, $.jsx)(he, {}),
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: st,
                              children: [
                                (0, $.jsx)(m, {
                                  closeOnClick: !0,
                                  value: `camera-shutter`,
                                  children: `Click`,
                                }),
                                (0, $.jsx)(p, {
                                  "aria-label": `Play Click`,
                                  closeOnClick: !1,
                                  onClick: lt,
                                  children: (0, $.jsx)(he, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsx)(H, {
                  ...le(`snap-shot-flash`),
                  description: `Show a gentle cue on the captured window.`,
                  status: V,
                  control: (0, $.jsx)(R, {
                    checked: !V && t.snapShotFlash,
                    disabled: !B || !!V,
                    "aria-label": `Flash captured window`,
                    onCheckedChange: (e) => void X({ snapShotFlash: e }),
                  }),
                }),
                (0, $.jsx)(H, {
                  ...le(`snap-shot-animations`),
                  description: `Animate captured windows into your draft.`,
                  status: V,
                  control: (0, $.jsx)(R, {
                    checked: !V && t.snapShotAnimations,
                    disabled: !B || !!V,
                    "aria-label": `Animate snapshots`,
                    onCheckedChange: (e) => void X({ snapShotAnimations: e }),
                  }),
                }),
              ],
            })
          : null),
      (e[112] = K),
      (e[113] = B),
      (e[114] = V),
      (e[115] = be),
      (e[116] = ot),
      (e[117] = X),
      (e[118] = Z),
      (e[119] = gt),
      (e[120] = L),
      (e[121] = t.snapShotAnimations),
      (e[122] = t.snapShotEnabled),
      (e[123] = t.snapShotFlash),
      (e[124] = t.snapShotIncludeAccessibility),
      (e[125] = J),
      (e[126] = h),
      (e[127] = W),
      (e[128] = it),
      (e[129] = at),
      (e[130] = Ee),
      (e[131] = Te),
      (e[132] = l),
      (e[133] = nt),
      (e[134] = Dt))
    : (Dt = e[134]);
  let Ot;
  e[135] !== Et || e[136] !== Dt
    ? ((Ot = (0, $.jsx)(ye, {
        id: `snap-shot`,
        title: `SnapShots`,
        children: (0, $.jsxs)(ve, { message: ge, children: [Et, Dt] }),
      })),
      (e[135] = Et),
      (e[136] = Dt),
      (e[137] = Ot))
    : (Ot = e[137]);
  let kt;
  e[138] !== K ||
  e[139] !== mt ||
  e[140] !== ft ||
  e[141] !== f ||
  e[142] !== k ||
  e[143] !== gt ||
  e[144] !== t.snapShotIncludeAccessibility ||
  e[145] !== J ||
  e[146] !== h ||
  e[147] !== _ ||
  e[148] !== W ||
  e[149] !== it ||
  e[150] !== at ||
  e[151] !== l ||
  e[152] !== nt ||
  e[153] !== T
    ? ((kt =
        T && l
          ? (0, $.jsx)(rt, {
              state: l,
              initialStep: T.initialStep,
              wasEnabled: T.wasEnabled,
              includeAccessibility: t.snapShotIncludeAccessibility,
              busy: h,
              error: (_ ?? f)?.message ?? null,
              shortcutInput: it,
              shortcutStatus: at,
              shortcutChanged: W,
              canSaveShortcut: K,
              onSaveShortcut: gt,
              onEnable: ft,
              onAction: J,
              onRefresh: k,
              onClose: mt,
              onLeaveStep: nt,
            })
          : null),
      (e[138] = K),
      (e[139] = mt),
      (e[140] = ft),
      (e[141] = f),
      (e[142] = k),
      (e[143] = gt),
      (e[144] = t.snapShotIncludeAccessibility),
      (e[145] = J),
      (e[146] = h),
      (e[147] = _),
      (e[148] = W),
      (e[149] = it),
      (e[150] = at),
      (e[151] = l),
      (e[152] = nt),
      (e[153] = T),
      (e[154] = kt))
    : (kt = e[154]);
  let At;
  return (
    e[155] !== Ot || e[156] !== kt
      ? ((At = (0, $.jsxs)(U, { children: [Ot, kt] })), (e[155] = Ot), (e[156] = kt), (e[157] = At))
      : (At = e[157]),
    At
  );
}
function lt() {
  return z(`camera-shutter`);
}
function ut() {
  return z(`soft-pop`);
}
function dt(e) {
  return {
    snapShotAnimations: e.snapShotAnimations,
    snapShotEnabled: e.snapShotEnabled,
    snapShotFlash: e.snapShotFlash,
    snapShotIncludeAccessibility: e.snapShotIncludeAccessibility,
    snapShotPlaySound: e.snapShotPlaySound,
    snapShotShortcut: e.snapShotShortcut,
    snapShotSound: e.snapShotSound,
  };
}
function ft() {
  let e = (0, Se.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(ct, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { ft as component };
//# sourceMappingURL=_chat.settings.snap-shot-a_7rp5pJ.js.map
