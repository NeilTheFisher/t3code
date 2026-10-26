import { i as e, r as t, t as n } from "./rolldown-runtime-COiEfhsA.js";
import { t as r } from "./react-BP46yLMB.js";
import { n as i, t as a } from "./jsx-runtime-BQExFN_X.js";
import { o, t as s } from "./search-BrluOr7L.js";
import { t as c } from "./copy-Bc5Lby2a.js";
import { t as l } from "./external-link-DV7LH7eG.js";
import { n as u, r as d, t as f } from "./sun-F4doea_U.js";
import { n as p, t as m } from "./upload-nxITmBt3.js";
import { t as h } from "./paintbrush-8qp4voUt.js";
import { t as g } from "./pen-line-D1XwYkfK.js";
import { t as _ } from "./plus-B20TfFan.js";
import { t as v } from "./trash-2-Dt6v2wPw.js";
import {
  Bn as y,
  Df as b,
  Dr as x,
  Hn as S,
  Rs as C,
  Vn as w,
  Wn as T,
  hr as E,
  ru as D,
  t as O,
} from "./utils-CPoejuy5.js";
import { a as k, c as A, n as j, o as M, s as N, t as P } from "./select-CBCDohvC.js";
import { G as F, K as I, V as L } from "./useSettings-N-JG2LFZ.js";
import { i as R } from "./toast-B4KPIJDZ.js";
import { t as z } from "./toastHelpers-CSQRKo4F.js";
import { r as B } from "./queries-B4W1CgUo.js";
import {
  $ as V,
  B as H,
  C as U,
  E as W,
  G,
  K,
  M as q,
  N as ee,
  P as J,
  Q as te,
  R as Y,
  W as X,
  X as Z,
  Y as ne,
  Z as re,
  d as ie,
  h as ae,
  j as oe,
  k as se,
  m as ce,
  u as le,
  v as ue,
  y as de,
} from "./themePalette-CDKZ8Aa5.js";
import {
  A as fe,
  F as pe,
  M as me,
  O as he,
  j as ge,
  n as _e,
  t as ve,
} from "./getDiffFileInput-DNKgimbU.js";
import { c as ye, i as be, u as xe } from "./appendItems-C5MDJzmY.js";
import {
  a as Se,
  l as Ce,
  n as we,
  o as Te,
  r as Ee,
  s as De,
  t as Oe,
} from "./combobox-HagV04Wz.js";
import { c as ke, l as Ae, n as je, s as Me, u as Ne } from "./dialog-BjeWpelT.js";
import { n as Pe, r as Fe, t as Ie } from "./input-group-C7DCv8iP.js";
import { c as Le, r as Re } from "./ThreadTerminalDrawer-GjGtrcWP.js";
import { r as ze, t as Be } from "./alert-fX5rpTMS.js";
import { l as Ve } from "./settingsSearch-CrEaqXdW.js";
import {
  $c as He,
  Br as Ue,
  Dc as We,
  Gi as Ge,
  Go as Ke,
  Gr as qe,
  Hi as Je,
  Hr as Ye,
  Ir as Xe,
  Jc as Ze,
  Ji as Qe,
  Ki as $e,
  Lr as et,
  Qs as tt,
  Rr as nt,
  Ui as rt,
  Vr as it,
  Vs as at,
  Wi as ot,
  Wo as st,
  Zo as ct,
  ic as lt,
  qc as ut,
  qi as dt,
  tc as ft,
  wl as pt,
  zr as mt,
} from "./main-BZa0O6xN.js";
import { n as ht, o as gt, t as _t } from "./composerPlaceholder-CqCEcO-V.js";
var Q = e(r(), 1),
  vt = i(),
  $ = e(a(), 1);
function yt(e, t = !1) {
  return ye({
    tagName: `style`,
    children: [xe(t ? fe(e) : me(e))],
    properties: { [We]: t ? `` : void 0, [Ze]: t ? void 0 : `` },
  });
}
function bt(e) {
  return ye({ tagName: `style`, children: [xe(e)], properties: { [ut]: `` } });
}
function xt(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function St(e) {
  return e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function Ct(e) {
  let t = Math.max(0, Math.min(1, e));
  return t <= 0.0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - 0.055;
}
function wt(e) {
  let t = /^color\(\s*(display-p3|srgb)\s+([^)]+)\)$/i.exec(e);
  if (!t) return null;
  let [n, r] = [t[1].toLowerCase(), t[2]],
    [i, a] = r.split(`/`),
    o = i
      .trim()
      .split(/\s+/)
      .map((e) => (e.endsWith(`%`) ? Number.parseFloat(e) / 100 : Number.parseFloat(e)));
  if (o.length !== 3 || o.some((e) => !Number.isFinite(e))) return null;
  let s = a?.trim(),
    c = s === void 0 ? 1 : s.endsWith(`%`) ? Number.parseFloat(s) / 100 : Number.parseFloat(s);
  if (!Number.isFinite(c)) return null;
  let [l, u, d] = o;
  if (n === `srgb`) return { r: l * 255, g: u * 255, b: d * 255, a: Math.max(0, Math.min(1, c)) };
  let [f, p, m] = [l, u, d].map(St),
    h = [
      1.2249401762805 * f - 0.2249401762805 * p,
      -0.042056961239 * f + 1.042056961239 * p,
      -0.0196375547643 * f - 0.0786360655012 * p + 1.0982736202656 * m,
    ].map((e) => Ct(e) * 255);
  return { r: h[0], g: h[1], b: h[2], a: Math.max(0, Math.min(1, c)) };
}
function Tt(e) {
  if (typeof e != `string`) return null;
  let t = e.trim();
  if (t.startsWith(`color(`)) return wt(t);
  let n = t.replace(/^#/, ``);
  if (!/^(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(n)) return null;
  let r = (e) => (e.length === 1 ? Number.parseInt(e + e, 16) : Number.parseInt(e, 16));
  return n.length <= 4
    ? { r: r(n[0]), g: r(n[1]), b: r(n[2]), a: n.length === 4 ? r(n[3]) / 255 : 1 }
    : {
        r: Number.parseInt(n.slice(0, 2), 16),
        g: Number.parseInt(n.slice(2, 4), 16),
        b: Number.parseInt(n.slice(4, 6), 16),
        a: n.length === 8 ? Number.parseInt(n.slice(6, 8), 16) / 255 : 1,
      };
}
function Et(e) {
  let t = (e) =>
    Math.max(0, Math.min(255, Math.round(e)))
      .toString(16)
      .padStart(2, `0`);
  return `#${t(e.r)}${t(e.g)}${t(e.b)}`;
}
function Dt(e, t) {
  return e.a >= 1
    ? Et(e)
    : Et({
        r: e.r * e.a + t.r * (1 - e.a),
        g: e.g * e.a + t.g * (1 - e.a),
        b: e.b * e.a + t.b * (1 - e.a),
      });
}
function Ot(e) {
  let t = (e) => {
    let t = e / 255;
    return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * t(e.r) + 0.7152 * t(e.g) + 0.0722 * t(e.b);
}
function kt(e, t) {
  let n = Ot(e),
    r = Ot(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function At(e) {
  return Tt(X(e) ?? e) ?? { r: 0, g: 0, b: 0, a: 1 };
}
function jt(e) {
  return !xt(e) || e.version === 1
    ? !1
    : (xt(e.colors) && Object.keys(e.colors).some((e) => e.includes(`.`))) ||
        Array.isArray(e.tokenColors);
}
function Mt(e, t) {
  let n = typeof e.type == `string` ? e.type.toLowerCase() : null;
  return n === `light` || n === `hc-light`
    ? `light`
    : n === `dark` || n === `hc-black` || Ot(t) < 0.179
      ? `dark`
      : `light`;
}
function Nt(e) {
  let t = e.trim();
  return /\s/.test(t) || !/[-_.]/.test(t)
    ? t
    : t
        .split(/[-_.]+/)
        .filter(Boolean)
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(` `);
}
function Pt(e) {
  for (let t of [e.displayName, e.name]) {
    if (typeof t != `string`) continue;
    let e = Nt(t);
    if (e.length > 0) return e.slice(0, 48);
  }
  return `VS Code theme`;
}
function Ft(e) {
  if (!xt(e)) throw Error(`Theme files must contain a JSON object.`);
  let t = xt(e.colors) ? e.colors : {},
    n = (...e) => {
      for (let n of e) {
        let e = Tt(t[n]);
        if (e) return e;
      }
      return null;
    },
    r = (e, ...t) => {
      let r = n(...t);
      return r ? Dt(r, e) : null;
    },
    i = n(`editor.background`, `editorPane.background`);
  if (!i)
    throw Error(
      `That VS Code theme has no "editor.background" color, so there is nothing to build a palette from.`,
    );
  let a = { r: i.r, g: i.g, b: i.b },
    o = Mt(e, a),
    s = Et(a),
    c = r(a, `editorWidget.background`, `dropdown.background`),
    l = (e, t) => kt(At(e), At(t)) >= 1.1,
    u = null,
    d = null;
  for (let e of [
    `focusBorder`,
    `button.background`,
    `textLink.foreground`,
    `activityBarBadge.background`,
    `progressBar.background`,
    `badge.background`,
  ]) {
    let n = Tt(t[e]);
    if (!n) continue;
    let r = Dt(n, a);
    if (l(r, s) && (c === null || l(r, c))) {
      ((u = n), (d = r));
      break;
    }
  }
  if (!u || !d) {
    let e = X(ce(o).accent);
    ((d = [e, `#ffffff`, `#000000`].find((e) => l(e, s) && (c === null || l(e, c))) ?? e),
      (u = Tt(d)));
  }
  let f = Dt({ r: u.r, g: u.g, b: u.b, a: 0.2 }, a),
    p = le(o, s, f),
    m = r(a, `sideBar.background`, `activityBar.background`) ?? p.sidebar,
    h = At(m),
    g = r(a, `terminal.background`, `panel.background`) ?? p.terminalBackground,
    _ = At(g),
    v = (e, t, ...n) => {
      let i = At(e),
        a = (e) => kt(At(e), i) >= 4.5,
        o = r(i, ...n);
      return o && a(o) ? o : a(t) ? t : Ot(i) < 0.179 ? `#ffffff` : `#000000`;
    },
    y = (e, ...t) => {
      let n = r(a, ...t),
        i = n && l(n, s) ? n : e;
      return oe(i, s, 4.5);
    },
    b = c ?? p.surfaceRaised,
    x = r(a, `button.background`),
    S = x && l(x, s) && l(x, b) ? x : d,
    C =
      [p.input, p.surfaceRaised, ce(o).input, `#000000`, `#ffffff`, `#808080`].find(
        (e) => l(e, s) && l(e, S),
      ) ?? `#808080`;
  for (let e of [`input.background`, `input.border`]) {
    let t = r(a, e);
    if (t && l(t, s) && l(t, S)) {
      C = t;
      break;
    }
  }
  let w = r(a, `editor.findMatchHighlightBackground`) ?? p.searchMatchBackground,
    T = r(a, `editor.findMatchBackground`) ?? p.searchMatchActiveBackground,
    E = {
      canvas: s,
      text: v(s, p.text, `editor.foreground`, `foreground`),
      textMuted: v(s, p.textMuted, `descriptionForeground`, `disabledForeground`),
      surface: r(a, `editorWidget.background`) ?? p.surface,
      surfaceRaised: b,
      surfaceOverlay:
        r(a, `menu.background`, `quickInput.background`, `dropdown.background`) ?? p.surfaceOverlay,
      border: r(a, `panel.border`, `editorGroup.border`, `contrastBorder`) ?? p.border,
      input: C,
      placeholder: v(b, p.placeholder, `input.placeholderForeground`),
      error: y(p.error, `editorError.foreground`, `errorForeground`),
      warning: y(p.warning, `editorWarning.foreground`),
      accentSurface:
        r(a, `list.activeSelectionBackground`, `list.hoverBackground`) ?? p.accentSurface,
      codeBackground: r(a, `textCodeBlock.background`) ?? p.codeBackground,
      searchMatchBackground: w,
      searchMatchForeground: v(
        w,
        p.searchMatchForeground,
        `editor.findMatchHighlightForeground`,
        `editor.foreground`,
        `foreground`,
      ),
      searchMatchActiveBackground: T,
      searchMatchActiveForeground: v(
        T,
        p.searchMatchActiveForeground,
        `editor.findMatchForeground`,
        `editor.foreground`,
        `foreground`,
      ),
      sidebar: m,
      sidebarForeground: v(m, p.sidebarForeground, `sideBar.foreground`),
      sidebarBorder: r(h, `sideBar.border`) ?? p.sidebarBorder,
      sidebarRowHover: r(h, `list.hoverBackground`) ?? p.sidebarRowHover,
      sidebarRowActive:
        r(h, `list.inactiveSelectionBackground`, `list.hoverBackground`) ?? p.sidebarRowActive,
      sidebarRowSelected: r(h, `list.activeSelectionBackground`) ?? p.sidebarRowSelected,
      terminalBackground: g,
      terminalForeground: v(g, p.terminalForeground, `terminal.foreground`),
      terminalCursor:
        r(_, `terminalCursor.foreground`, `editorCursor.foreground`) ?? p.terminalCursor,
      terminalSelection:
        r(_, `terminal.selectionBackground`, `editor.selectionBackground`) ?? p.terminalSelection,
      terminalScrollbar: r(_, `scrollbarSlider.background`) ?? p.terminalScrollbar,
    };
  ((E.accent = d),
    (E.focus = d),
    (E.messageAction = S),
    (E.messageActionForeground = v(S, p.messageActionForeground, `button.foreground`)),
    (E.accentForeground = v(d, p.accentForeground, `button.foreground`)));
  let D = Pt(e),
    O = G(D);
  return se({
    version: 1,
    ...(W(O) ? { id: `${O}-vscode` } : {}),
    name: D,
    appearance: o,
    colors: { ...p, ...E },
  });
}
function It(e, t) {
  let n = (e) =>
      e
        .replace(/\b(?:light|dark)\b/gi, ` `)
        .replace(/\s+/g, ` `)
        .trim(),
    r = new Map(),
    i = [];
  e.forEach((e, t) => {
    let a = n(e.label);
    if (de(e).length !== 1 || a === e.label || !/[a-z0-9]/i.test(a)) {
      i.push({ theme: e, order: t });
      return;
    }
    let o = r.get(a) ?? { light: [], dark: [], order: t };
    (o[e.appearance].push(e), r.set(a, o));
  });
  let a = [];
  for (let [e, n] of r) {
    if (n.light.length === 1 && n.dark.length === 1)
      try {
        a.push({
          order: n.order,
          theme: se({
            version: 1,
            ...(t?.pairedId ? { id: t.pairedId(n.light[0], n.dark[0]) } : {}),
            name: e,
            appearance: `light`,
            colors: n.light[0].colors,
            variants: { dark: n.dark[0].colors },
          }),
        });
        continue;
      } catch {}
    for (let e of [...n.light, ...n.dark]) a.push({ theme: e, order: n.order });
  }
  return [...i, ...a].sort((e, t) => e.order - t.order).map((e) => e.theme);
}
function Lt(e) {
  let t = (e, t) => {
      try {
        return se({
          version: 1,
          name: t.slice(0, 48),
          appearance: e.appearance,
          colors: e.colors,
          ...(e.variants ? { variants: e.variants } : {}),
          ...(e.managed ? { managed: !0 } : {}),
        });
      } catch {
        return null;
      }
    },
    n = new Map();
  for (let t of e) n.set(t.theme.id, (n.get(t.theme.id) ?? 0) + 1);
  let r = e.map(({ theme: e, sourceName: r }) => {
      if ((n.get(e.id) ?? 0) < 2) return e;
      let i = r?.replace(/\.[^.]+$/, ``),
        a = i ? Nt(i) : null;
      return (a && a.toLowerCase() !== e.label.toLowerCase() ? t(e, a) : null) ?? e;
    }),
    i = new Set();
  return r.map((e) => {
    if (!i.has(e.id)) return (i.add(e.id), e);
    for (let n = 2; n < 100; n += 1) {
      let r = t(e, `${e.label} ${n}`);
      if (r && !i.has(r.id)) return (i.add(r.id), r);
    }
    return e;
  });
}
var Rt = e(
  n((e, n) => {
    (function (t) {
      typeof e == `object` && n !== void 0
        ? (n.exports = t())
        : typeof define == `function` && define.amd
          ? define([], t)
          : ((typeof window < `u`
              ? window
              : typeof global < `u`
                ? global
                : typeof self < `u`
                  ? self
                  : this
            ).JSZip = t());
    })(function () {
      return (function e(n, r, i) {
        function a(s, c) {
          if (!r[s]) {
            if (!n[s]) {
              var l = typeof t == `function` && t;
              if (!c && l) return l(s, !0);
              if (o) return o(s, !0);
              var u = Error(`Cannot find module '` + s + `'`);
              throw ((u.code = `MODULE_NOT_FOUND`), u);
            }
            var d = (r[s] = { exports: {} });
            n[s][0].call(
              d.exports,
              function (e) {
                var t = n[s][1][e];
                return a(t || e);
              },
              d,
              d.exports,
              e,
              n,
              r,
              i,
            );
          }
          return r[s].exports;
        }
        for (var o = typeof t == `function` && t, s = 0; s < i.length; s++) a(i[s]);
        return a;
      })(
        {
          1: [
            function (e, t, n) {
              var r = e(`./utils`),
                i = e(`./support`),
                a = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;
              ((n.encode = function (e) {
                for (
                  var t,
                    n,
                    i,
                    o,
                    s,
                    c,
                    l,
                    u = [],
                    d = 0,
                    f = e.length,
                    p = f,
                    m = r.getTypeOf(e) !== `string`;
                  d < e.length;
                )
                  ((p = f - d),
                    (i = m
                      ? ((t = e[d++]), (n = d < f ? e[d++] : 0), d < f ? e[d++] : 0)
                      : ((t = e.charCodeAt(d++)),
                        (n = d < f ? e.charCodeAt(d++) : 0),
                        d < f ? e.charCodeAt(d++) : 0)),
                    (o = t >> 2),
                    (s = ((3 & t) << 4) | (n >> 4)),
                    (c = 1 < p ? ((15 & n) << 2) | (i >> 6) : 64),
                    (l = 2 < p ? 63 & i : 64),
                    u.push(a.charAt(o) + a.charAt(s) + a.charAt(c) + a.charAt(l)));
                return u.join(``);
              }),
                (n.decode = function (e) {
                  var t,
                    n,
                    r,
                    o,
                    s,
                    c,
                    l = 0,
                    u = 0,
                    d = `data:`;
                  if (e.substr(0, d.length) === d)
                    throw Error(`Invalid base64 input, it looks like a data url.`);
                  var f,
                    p = (3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, ``)).length) / 4;
                  if (
                    (e.charAt(e.length - 1) === a.charAt(64) && p--,
                    e.charAt(e.length - 2) === a.charAt(64) && p--,
                    p % 1 != 0)
                  )
                    throw Error(`Invalid base64 input, bad content length.`);
                  for (f = i.uint8array ? new Uint8Array(0 | p) : Array(0 | p); l < e.length;)
                    ((t = (a.indexOf(e.charAt(l++)) << 2) | ((o = a.indexOf(e.charAt(l++))) >> 4)),
                      (n = ((15 & o) << 4) | ((s = a.indexOf(e.charAt(l++))) >> 2)),
                      (r = ((3 & s) << 6) | (c = a.indexOf(e.charAt(l++)))),
                      (f[u++] = t),
                      s !== 64 && (f[u++] = n),
                      c !== 64 && (f[u++] = r));
                  return f;
                }));
            },
            { "./support": 30, "./utils": 32 },
          ],
          2: [
            function (e, t, n) {
              var r = e(`./external`),
                i = e(`./stream/DataWorker`),
                a = e(`./stream/Crc32Probe`),
                o = e(`./stream/DataLengthProbe`);
              function s(e, t, n, r, i) {
                ((this.compressedSize = e),
                  (this.uncompressedSize = t),
                  (this.crc32 = n),
                  (this.compression = r),
                  (this.compressedContent = i));
              }
              ((s.prototype = {
                getContentWorker: function () {
                  var e = new i(r.Promise.resolve(this.compressedContent))
                      .pipe(this.compression.uncompressWorker())
                      .pipe(new o(`data_length`)),
                    t = this;
                  return (
                    e.on(`end`, function () {
                      if (this.streamInfo.data_length !== t.uncompressedSize)
                        throw Error(`Bug : uncompressed data size mismatch`);
                    }),
                    e
                  );
                },
                getCompressedWorker: function () {
                  return new i(r.Promise.resolve(this.compressedContent))
                    .withStreamInfo(`compressedSize`, this.compressedSize)
                    .withStreamInfo(`uncompressedSize`, this.uncompressedSize)
                    .withStreamInfo(`crc32`, this.crc32)
                    .withStreamInfo(`compression`, this.compression);
                },
              }),
                (s.createWorkerFrom = function (e, t, n) {
                  return e
                    .pipe(new a())
                    .pipe(new o(`uncompressedSize`))
                    .pipe(t.compressWorker(n))
                    .pipe(new o(`compressedSize`))
                    .withStreamInfo(`compression`, t);
                }),
                (t.exports = s));
            },
            {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27,
            },
          ],
          3: [
            function (e, t, n) {
              var r = e(`./stream/GenericWorker`);
              ((n.STORE = {
                magic: `\0\0`,
                compressWorker: function () {
                  return new r(`STORE compression`);
                },
                uncompressWorker: function () {
                  return new r(`STORE decompression`);
                },
              }),
                (n.DEFLATE = e(`./flate`)));
            },
            { "./flate": 7, "./stream/GenericWorker": 28 },
          ],
          4: [
            function (e, t, n) {
              var r = e(`./utils`),
                i = (function () {
                  for (var e, t = [], n = 0; n < 256; n++) {
                    e = n;
                    for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                    t[n] = e;
                  }
                  return t;
                })();
              t.exports = function (e, t) {
                return e !== void 0 && e.length
                  ? r.getTypeOf(e) === `string`
                    ? (function (e, t, n, r) {
                        var a = i,
                          o = r + n;
                        e ^= -1;
                        for (var s = r; s < o; s++) e = (e >>> 8) ^ a[255 & (e ^ t.charCodeAt(s))];
                        return -1 ^ e;
                      })(0 | t, e, e.length, 0)
                    : (function (e, t, n, r) {
                        var a = i,
                          o = r + n;
                        e ^= -1;
                        for (var s = r; s < o; s++) e = (e >>> 8) ^ a[255 & (e ^ t[s])];
                        return -1 ^ e;
                      })(0 | t, e, e.length, 0)
                  : 0;
              };
            },
            { "./utils": 32 },
          ],
          5: [
            function (e, t, n) {
              ((n.base64 = !1),
                (n.binary = !1),
                (n.dir = !1),
                (n.createFolders = !0),
                (n.date = null),
                (n.compression = null),
                (n.compressionOptions = null),
                (n.comment = null),
                (n.unixPermissions = null),
                (n.dosPermissions = null));
            },
            {},
          ],
          6: [
            function (e, t, n) {
              var r = null;
              ((r = typeof Promise < `u` ? Promise : e(`lie`)), (t.exports = { Promise: r }));
            },
            { lie: 37 },
          ],
          7: [
            function (e, t, n) {
              var r =
                  typeof Uint8Array < `u` && typeof Uint16Array < `u` && typeof Uint32Array < `u`,
                i = e(`pako`),
                a = e(`./utils`),
                o = e(`./stream/GenericWorker`),
                s = r ? `uint8array` : `array`;
              function c(e, t) {
                (o.call(this, `FlateWorker/` + e),
                  (this._pako = null),
                  (this._pakoAction = e),
                  (this._pakoOptions = t),
                  (this.meta = {}));
              }
              ((n.magic = `\b\0`),
                a.inherits(c, o),
                (c.prototype.processChunk = function (e) {
                  ((this.meta = e.meta),
                    this._pako === null && this._createPako(),
                    this._pako.push(a.transformTo(s, e.data), !1));
                }),
                (c.prototype.flush = function () {
                  (o.prototype.flush.call(this),
                    this._pako === null && this._createPako(),
                    this._pako.push([], !0));
                }),
                (c.prototype.cleanUp = function () {
                  (o.prototype.cleanUp.call(this), (this._pako = null));
                }),
                (c.prototype._createPako = function () {
                  this._pako = new i[this._pakoAction]({
                    raw: !0,
                    level: this._pakoOptions.level || -1,
                  });
                  var e = this;
                  this._pako.onData = function (t) {
                    e.push({ data: t, meta: e.meta });
                  };
                }),
                (n.compressWorker = function (e) {
                  return new c(`Deflate`, e);
                }),
                (n.uncompressWorker = function () {
                  return new c(`Inflate`, {});
                }));
            },
            { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
          ],
          8: [
            function (e, t, n) {
              function r(e, t) {
                var n,
                  r = ``;
                for (n = 0; n < t; n++) ((r += String.fromCharCode(255 & e)), (e >>>= 8));
                return r;
              }
              function i(e, t, n, i, o, u) {
                var d,
                  f,
                  p = e.file,
                  m = e.compression,
                  h = u !== s.utf8encode,
                  g = a.transformTo(`string`, u(p.name)),
                  _ = a.transformTo(`string`, s.utf8encode(p.name)),
                  v = p.comment,
                  y = a.transformTo(`string`, u(v)),
                  b = a.transformTo(`string`, s.utf8encode(v)),
                  x = _.length !== p.name.length,
                  S = b.length !== v.length,
                  C = ``,
                  w = ``,
                  T = ``,
                  E = p.dir,
                  D = p.date,
                  O = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                (t && !n) ||
                  ((O.crc32 = e.crc32),
                  (O.compressedSize = e.compressedSize),
                  (O.uncompressedSize = e.uncompressedSize));
                var k = 0;
                (t && (k |= 8), h || (!x && !S) || (k |= 2048));
                var A = 0,
                  j = 0;
                (E && (A |= 16),
                  o === `UNIX`
                    ? ((j = 798),
                      (A |= (function (e, t) {
                        var n = e;
                        return (e || (n = t ? 16893 : 33204), (65535 & n) << 16);
                      })(p.unixPermissions, E)))
                    : ((j = 20),
                      (A |= (function (e) {
                        return 63 & (e || 0);
                      })(p.dosPermissions))),
                  (d = D.getUTCHours()),
                  (d <<= 6),
                  (d |= D.getUTCMinutes()),
                  (d <<= 5),
                  (d |= D.getUTCSeconds() / 2),
                  (f = D.getUTCFullYear() - 1980),
                  (f <<= 4),
                  (f |= D.getUTCMonth() + 1),
                  (f <<= 5),
                  (f |= D.getUTCDate()),
                  x && ((w = r(1, 1) + r(c(g), 4) + _), (C += `up` + r(w.length, 2) + w)),
                  S && ((T = r(1, 1) + r(c(y), 4) + b), (C += `uc` + r(T.length, 2) + T)));
                var M = ``;
                return (
                  (M += `
\0`),
                  (M += r(k, 2)),
                  (M += m.magic),
                  (M += r(d, 2)),
                  (M += r(f, 2)),
                  (M += r(O.crc32, 4)),
                  (M += r(O.compressedSize, 4)),
                  (M += r(O.uncompressedSize, 4)),
                  (M += r(g.length, 2)),
                  (M += r(C.length, 2)),
                  {
                    fileRecord: l.LOCAL_FILE_HEADER + M + g + C,
                    dirRecord:
                      l.CENTRAL_FILE_HEADER +
                      r(j, 2) +
                      M +
                      r(y.length, 2) +
                      `\0\0\0\0` +
                      r(A, 4) +
                      r(i, 4) +
                      g +
                      C +
                      y,
                  }
                );
              }
              var a = e(`../utils`),
                o = e(`../stream/GenericWorker`),
                s = e(`../utf8`),
                c = e(`../crc32`),
                l = e(`../signature`);
              function u(e, t, n, r) {
                (o.call(this, `ZipFileWorker`),
                  (this.bytesWritten = 0),
                  (this.zipComment = t),
                  (this.zipPlatform = n),
                  (this.encodeFileName = r),
                  (this.streamFiles = e),
                  (this.accumulate = !1),
                  (this.contentBuffer = []),
                  (this.dirRecords = []),
                  (this.currentSourceOffset = 0),
                  (this.entriesCount = 0),
                  (this.currentFile = null),
                  (this._sources = []));
              }
              (a.inherits(u, o),
                (u.prototype.push = function (e) {
                  var t = e.meta.percent || 0,
                    n = this.entriesCount,
                    r = this._sources.length;
                  this.accumulate
                    ? this.contentBuffer.push(e)
                    : ((this.bytesWritten += e.data.length),
                      o.prototype.push.call(this, {
                        data: e.data,
                        meta: {
                          currentFile: this.currentFile,
                          percent: n ? (t + 100 * (n - r - 1)) / n : 100,
                        },
                      }));
                }),
                (u.prototype.openedSource = function (e) {
                  ((this.currentSourceOffset = this.bytesWritten),
                    (this.currentFile = e.file.name));
                  var t = this.streamFiles && !e.file.dir;
                  if (t) {
                    var n = i(
                      e,
                      t,
                      !1,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName,
                    );
                    this.push({ data: n.fileRecord, meta: { percent: 0 } });
                  } else this.accumulate = !0;
                }),
                (u.prototype.closedSource = function (e) {
                  this.accumulate = !1;
                  var t = this.streamFiles && !e.file.dir,
                    n = i(
                      e,
                      t,
                      !0,
                      this.currentSourceOffset,
                      this.zipPlatform,
                      this.encodeFileName,
                    );
                  if ((this.dirRecords.push(n.dirRecord), t))
                    this.push({
                      data: (function (e) {
                        return (
                          l.DATA_DESCRIPTOR +
                          r(e.crc32, 4) +
                          r(e.compressedSize, 4) +
                          r(e.uncompressedSize, 4)
                        );
                      })(e),
                      meta: { percent: 100 },
                    });
                  else
                    for (
                      this.push({ data: n.fileRecord, meta: { percent: 0 } });
                      this.contentBuffer.length;
                    )
                      this.push(this.contentBuffer.shift());
                  this.currentFile = null;
                }),
                (u.prototype.flush = function () {
                  for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)
                    this.push({ data: this.dirRecords[t], meta: { percent: 100 } });
                  var n = this.bytesWritten - e,
                    i = (function (e, t, n, i, o) {
                      var s = a.transformTo(`string`, o(i));
                      return (
                        l.CENTRAL_DIRECTORY_END +
                        `\0\0\0\0` +
                        r(e, 2) +
                        r(e, 2) +
                        r(t, 4) +
                        r(n, 4) +
                        r(s.length, 2) +
                        s
                      );
                    })(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
                  this.push({ data: i, meta: { percent: 100 } });
                }),
                (u.prototype.prepareNextSource = function () {
                  ((this.previous = this._sources.shift()),
                    this.openedSource(this.previous.streamInfo),
                    this.isPaused ? this.previous.pause() : this.previous.resume());
                }),
                (u.prototype.registerPrevious = function (e) {
                  this._sources.push(e);
                  var t = this;
                  return (
                    e.on(`data`, function (e) {
                      t.processChunk(e);
                    }),
                    e.on(`end`, function () {
                      (t.closedSource(t.previous.streamInfo),
                        t._sources.length ? t.prepareNextSource() : t.end());
                    }),
                    e.on(`error`, function (e) {
                      t.error(e);
                    }),
                    this
                  );
                }),
                (u.prototype.resume = function () {
                  return (
                    !!o.prototype.resume.call(this) &&
                    (!this.previous && this._sources.length
                      ? (this.prepareNextSource(), !0)
                      : this.previous || this._sources.length || this.generatedError
                        ? void 0
                        : (this.end(), !0))
                  );
                }),
                (u.prototype.error = function (e) {
                  var t = this._sources;
                  if (!o.prototype.error.call(this, e)) return !1;
                  for (var n = 0; n < t.length; n++)
                    try {
                      t[n].error(e);
                    } catch {}
                  return !0;
                }),
                (u.prototype.lock = function () {
                  o.prototype.lock.call(this);
                  for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
                }),
                (t.exports = u));
            },
            {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32,
            },
          ],
          9: [
            function (e, t, n) {
              var r = e(`../compressions`),
                i = e(`./ZipFileWorker`);
              n.generateWorker = function (e, t, n) {
                var a = new i(t.streamFiles, n, t.platform, t.encodeFileName),
                  o = 0;
                try {
                  (e.forEach(function (e, n) {
                    o++;
                    var i = (function (e, t) {
                        var n = e || t,
                          i = r[n];
                        if (!i) throw Error(n + ` is not a valid compression method !`);
                        return i;
                      })(n.options.compression, t.compression),
                      s = n.options.compressionOptions || t.compressionOptions || {},
                      c = n.dir,
                      l = n.date;
                    n._compressWorker(i, s)
                      .withStreamInfo(`file`, {
                        name: e,
                        dir: c,
                        date: l,
                        comment: n.comment || ``,
                        unixPermissions: n.unixPermissions,
                        dosPermissions: n.dosPermissions,
                      })
                      .pipe(a);
                  }),
                    (a.entriesCount = o));
                } catch (e) {
                  a.error(e);
                }
                return a;
              };
            },
            { "../compressions": 3, "./ZipFileWorker": 8 },
          ],
          10: [
            function (e, t, n) {
              function r() {
                if (!(this instanceof r)) return new r();
                if (arguments.length)
                  throw Error(
                    `The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`,
                  );
                ((this.files = Object.create(null)),
                  (this.comment = null),
                  (this.root = ``),
                  (this.clone = function () {
                    var e = new r();
                    for (var t in this) typeof this[t] != `function` && (e[t] = this[t]);
                    return e;
                  }));
              }
              (((r.prototype = e(`./object`)).loadAsync = e(`./load`)),
                (r.support = e(`./support`)),
                (r.defaults = e(`./defaults`)),
                (r.version = `3.10.1`),
                (r.loadAsync = function (e, t) {
                  return new r().loadAsync(e, t);
                }),
                (r.external = e(`./external`)),
                (t.exports = r));
            },
            { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 },
          ],
          11: [
            function (e, t, n) {
              var r = e(`./utils`),
                i = e(`./external`),
                a = e(`./utf8`),
                o = e(`./zipEntries`),
                s = e(`./stream/Crc32Probe`),
                c = e(`./nodejsUtils`);
              function l(e) {
                return new i.Promise(function (t, n) {
                  var r = e.decompressed.getContentWorker().pipe(new s());
                  r.on(`error`, function (e) {
                    n(e);
                  })
                    .on(`end`, function () {
                      r.streamInfo.crc32 === e.decompressed.crc32
                        ? t()
                        : n(Error(`Corrupted zip : CRC32 mismatch`));
                    })
                    .resume();
                });
              }
              t.exports = function (e, t) {
                var n = this;
                return (
                  (t = r.extend(t || {}, {
                    base64: !1,
                    checkCRC32: !1,
                    optimizedBinaryString: !1,
                    createFolders: !1,
                    decodeFileName: a.utf8decode,
                  })),
                  c.isNode && c.isStream(e)
                    ? i.Promise.reject(
                        Error(`JSZip can't accept a stream when loading a zip file.`),
                      )
                    : r
                        .prepareContent(
                          `the loaded zip file`,
                          e,
                          !0,
                          t.optimizedBinaryString,
                          t.base64,
                        )
                        .then(function (e) {
                          var n = new o(t);
                          return (n.load(e), n);
                        })
                        .then(function (e) {
                          var n = [i.Promise.resolve(e)],
                            r = e.files;
                          if (t.checkCRC32) for (var a = 0; a < r.length; a++) n.push(l(r[a]));
                          return i.Promise.all(n);
                        })
                        .then(function (e) {
                          for (var i = e.shift(), a = i.files, o = 0; o < a.length; o++) {
                            var s = a[o],
                              c = s.fileNameStr,
                              l = r.resolve(s.fileNameStr);
                            (n.file(l, s.decompressed, {
                              binary: !0,
                              optimizedBinaryString: !0,
                              date: s.date,
                              dir: s.dir,
                              comment: s.fileCommentStr.length ? s.fileCommentStr : null,
                              unixPermissions: s.unixPermissions,
                              dosPermissions: s.dosPermissions,
                              createFolders: t.createFolders,
                            }),
                              s.dir || (n.file(l).unsafeOriginalName = c));
                          }
                          return (i.zipComment.length && (n.comment = i.zipComment), n);
                        })
                );
              };
            },
            {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33,
            },
          ],
          12: [
            function (e, t, n) {
              var r = e(`../utils`),
                i = e(`../stream/GenericWorker`);
              function a(e, t) {
                (i.call(this, `Nodejs stream input adapter for ` + e),
                  (this._upstreamEnded = !1),
                  this._bindStream(t));
              }
              (r.inherits(a, i),
                (a.prototype._bindStream = function (e) {
                  var t = this;
                  ((this._stream = e).pause(),
                    e
                      .on(`data`, function (e) {
                        t.push({ data: e, meta: { percent: 0 } });
                      })
                      .on(`error`, function (e) {
                        t.isPaused ? (this.generatedError = e) : t.error(e);
                      })
                      .on(`end`, function () {
                        t.isPaused ? (t._upstreamEnded = !0) : t.end();
                      }));
                }),
                (a.prototype.pause = function () {
                  return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
                }),
                (a.prototype.resume = function () {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                  );
                }),
                (t.exports = a));
            },
            { "../stream/GenericWorker": 28, "../utils": 32 },
          ],
          13: [
            function (e, t, n) {
              var r = e(`readable-stream`).Readable;
              function i(e, t, n) {
                (r.call(this, t), (this._helper = e));
                var i = this;
                e.on(`data`, function (e, t) {
                  (i.push(e) || i._helper.pause(), n && n(t));
                })
                  .on(`error`, function (e) {
                    i.emit(`error`, e);
                  })
                  .on(`end`, function () {
                    i.push(null);
                  });
              }
              (e(`../utils`).inherits(i, r),
                (i.prototype._read = function () {
                  this._helper.resume();
                }),
                (t.exports = i));
            },
            { "../utils": 32, "readable-stream": 16 },
          ],
          14: [
            function (e, t, n) {
              t.exports = {
                isNode: typeof Buffer < `u`,
                newBufferFrom: function (e, t) {
                  if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
                  if (typeof e == `number`) throw Error(`The "data" argument must not be a number`);
                  return new Buffer(e, t);
                },
                allocBuffer: function (e) {
                  if (Buffer.alloc) return Buffer.alloc(e);
                  var t = new Buffer(e);
                  return (t.fill(0), t);
                },
                isBuffer: function (e) {
                  return Buffer.isBuffer(e);
                },
                isStream: function (e) {
                  return (
                    e &&
                    typeof e.on == `function` &&
                    typeof e.pause == `function` &&
                    typeof e.resume == `function`
                  );
                },
              };
            },
            {},
          ],
          15: [
            function (e, t, n) {
              function r(e, t, n) {
                var r,
                  i = a.getTypeOf(t),
                  s = a.extend(n || {}, c);
                ((s.date = s.date || new Date()),
                  s.compression !== null && (s.compression = s.compression.toUpperCase()),
                  typeof s.unixPermissions == `string` &&
                    (s.unixPermissions = parseInt(s.unixPermissions, 8)),
                  s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0),
                  s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0),
                  s.dir && (e = h(e)),
                  s.createFolders && (r = m(e)) && g.call(this, r, !0));
                var d = i === `string` && !1 === s.binary && !1 === s.base64;
                ((n && n.binary !== void 0) || (s.binary = !d),
                  ((t instanceof l && t.uncompressedSize === 0) || s.dir || !t || t.length === 0) &&
                    ((s.base64 = !1),
                    (s.binary = !0),
                    (t = ``),
                    (s.compression = `STORE`),
                    (i = `string`)));
                var _ = null;
                _ =
                  t instanceof l || t instanceof o
                    ? t
                    : f.isNode && f.isStream(t)
                      ? new p(e, t)
                      : a.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
                var v = new u(e, _, s);
                this.files[e] = v;
              }
              var i = e(`./utf8`),
                a = e(`./utils`),
                o = e(`./stream/GenericWorker`),
                s = e(`./stream/StreamHelper`),
                c = e(`./defaults`),
                l = e(`./compressedObject`),
                u = e(`./zipObject`),
                d = e(`./generate`),
                f = e(`./nodejsUtils`),
                p = e(`./nodejs/NodejsStreamInputAdapter`),
                m = function (e) {
                  e.slice(-1) === `/` && (e = e.substring(0, e.length - 1));
                  var t = e.lastIndexOf(`/`);
                  return 0 < t ? e.substring(0, t) : ``;
                },
                h = function (e) {
                  return (e.slice(-1) !== `/` && (e += `/`), e);
                },
                g = function (e, t) {
                  return (
                    (t = t === void 0 ? c.createFolders : t),
                    (e = h(e)),
                    this.files[e] || r.call(this, e, null, { dir: !0, createFolders: t }),
                    this.files[e]
                  );
                };
              function _(e) {
                return Object.prototype.toString.call(e) === `[object RegExp]`;
              }
              t.exports = {
                load: function () {
                  throw Error(
                    `This method has been removed in JSZip 3.0, please check the upgrade guide.`,
                  );
                },
                forEach: function (e) {
                  var t, n, r;
                  for (t in this.files)
                    ((r = this.files[t]),
                      (n = t.slice(this.root.length, t.length)) &&
                        t.slice(0, this.root.length) === this.root &&
                        e(n, r));
                },
                filter: function (e) {
                  var t = [];
                  return (
                    this.forEach(function (n, r) {
                      e(n, r) && t.push(r);
                    }),
                    t
                  );
                },
                file: function (e, t, n) {
                  if (arguments.length !== 1)
                    return ((e = this.root + e), r.call(this, e, t, n), this);
                  if (_(e)) {
                    var i = e;
                    return this.filter(function (e, t) {
                      return !t.dir && i.test(e);
                    });
                  }
                  var a = this.files[this.root + e];
                  return a && !a.dir ? a : null;
                },
                folder: function (e) {
                  if (!e) return this;
                  if (_(e))
                    return this.filter(function (t, n) {
                      return n.dir && e.test(t);
                    });
                  var t = this.root + e,
                    n = g.call(this, t),
                    r = this.clone();
                  return ((r.root = n.name), r);
                },
                remove: function (e) {
                  e = this.root + e;
                  var t = this.files[e];
                  if (((t ||= (e.slice(-1) !== `/` && (e += `/`), this.files[e])), t && !t.dir))
                    delete this.files[e];
                  else
                    for (
                      var n = this.filter(function (t, n) {
                          return n.name.slice(0, e.length) === e;
                        }),
                        r = 0;
                      r < n.length;
                      r++
                    )
                      delete this.files[n[r].name];
                  return this;
                },
                generate: function () {
                  throw Error(
                    `This method has been removed in JSZip 3.0, please check the upgrade guide.`,
                  );
                },
                generateInternalStream: function (e) {
                  var t,
                    n = {};
                  try {
                    if (
                      (((n = a.extend(e || {}, {
                        streamFiles: !1,
                        compression: `STORE`,
                        compressionOptions: null,
                        type: ``,
                        platform: `DOS`,
                        comment: null,
                        mimeType: `application/zip`,
                        encodeFileName: i.utf8encode,
                      })).type = n.type.toLowerCase()),
                      (n.compression = n.compression.toUpperCase()),
                      n.type === `binarystring` && (n.type = `string`),
                      !n.type)
                    )
                      throw Error(`No output type specified.`);
                    (a.checkSupport(n.type),
                      (n.platform !== `darwin` &&
                        n.platform !== `freebsd` &&
                        n.platform !== `linux` &&
                        n.platform !== `sunos`) ||
                        (n.platform = `UNIX`),
                      n.platform === `win32` && (n.platform = `DOS`));
                    var r = n.comment || this.comment || ``;
                    t = d.generateWorker(this, n, r);
                  } catch (e) {
                    (t = new o(`error`)).error(e);
                  }
                  return new s(t, n.type || `string`, n.mimeType);
                },
                generateAsync: function (e, t) {
                  return this.generateInternalStream(e).accumulate(t);
                },
                generateNodeStream: function (e, t) {
                  return (
                    (e ||= {}).type || (e.type = `nodebuffer`),
                    this.generateInternalStream(e).toNodejsStream(t)
                  );
                },
              };
            },
            {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35,
            },
          ],
          16: [
            function (e, t, n) {
              t.exports = e(`stream`);
            },
            { stream: void 0 },
          ],
          17: [
            function (e, t, n) {
              var r = e(`./DataReader`);
              function i(e) {
                r.call(this, e);
                for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
              }
              (e(`../utils`).inherits(i, r),
                (i.prototype.byteAt = function (e) {
                  return this.data[this.zero + e];
                }),
                (i.prototype.lastIndexOfSignature = function (e) {
                  for (
                    var t = e.charCodeAt(0),
                      n = e.charCodeAt(1),
                      r = e.charCodeAt(2),
                      i = e.charCodeAt(3),
                      a = this.length - 4;
                    0 <= a;
                    --a
                  )
                    if (
                      this.data[a] === t &&
                      this.data[a + 1] === n &&
                      this.data[a + 2] === r &&
                      this.data[a + 3] === i
                    )
                      return a - this.zero;
                  return -1;
                }),
                (i.prototype.readAndCheckSignature = function (e) {
                  var t = e.charCodeAt(0),
                    n = e.charCodeAt(1),
                    r = e.charCodeAt(2),
                    i = e.charCodeAt(3),
                    a = this.readData(4);
                  return t === a[0] && n === a[1] && r === a[2] && i === a[3];
                }),
                (i.prototype.readData = function (e) {
                  if ((this.checkOffset(e), e === 0)) return [];
                  var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                  return ((this.index += e), t);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          18: [
            function (e, t, n) {
              var r = e(`../utils`);
              function i(e) {
                ((this.data = e), (this.length = e.length), (this.index = 0), (this.zero = 0));
              }
              ((i.prototype = {
                checkOffset: function (e) {
                  this.checkIndex(this.index + e);
                },
                checkIndex: function (e) {
                  if (this.length < this.zero + e || e < 0)
                    throw Error(
                      `End of data reached (data length = ` +
                        this.length +
                        `, asked index = ` +
                        e +
                        `). Corrupted zip ?`,
                    );
                },
                setIndex: function (e) {
                  (this.checkIndex(e), (this.index = e));
                },
                skip: function (e) {
                  this.setIndex(this.index + e);
                },
                byteAt: function () {},
                readInt: function (e) {
                  var t,
                    n = 0;
                  for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)
                    n = (n << 8) + this.byteAt(t);
                  return ((this.index += e), n);
                },
                readString: function (e) {
                  return r.transformTo(`string`, this.readData(e));
                },
                readData: function () {},
                lastIndexOfSignature: function () {},
                readAndCheckSignature: function () {},
                readDate: function () {
                  var e = this.readInt(4);
                  return new Date(
                    Date.UTC(
                      1980 + ((e >> 25) & 127),
                      ((e >> 21) & 15) - 1,
                      (e >> 16) & 31,
                      (e >> 11) & 31,
                      (e >> 5) & 63,
                      (31 & e) << 1,
                    ),
                  );
                },
              }),
                (t.exports = i));
            },
            { "../utils": 32 },
          ],
          19: [
            function (e, t, n) {
              var r = e(`./Uint8ArrayReader`);
              function i(e) {
                r.call(this, e);
              }
              (e(`../utils`).inherits(i, r),
                (i.prototype.readData = function (e) {
                  this.checkOffset(e);
                  var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                  return ((this.index += e), t);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./Uint8ArrayReader": 21 },
          ],
          20: [
            function (e, t, n) {
              var r = e(`./DataReader`);
              function i(e) {
                r.call(this, e);
              }
              (e(`../utils`).inherits(i, r),
                (i.prototype.byteAt = function (e) {
                  return this.data.charCodeAt(this.zero + e);
                }),
                (i.prototype.lastIndexOfSignature = function (e) {
                  return this.data.lastIndexOf(e) - this.zero;
                }),
                (i.prototype.readAndCheckSignature = function (e) {
                  return e === this.readData(4);
                }),
                (i.prototype.readData = function (e) {
                  this.checkOffset(e);
                  var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                  return ((this.index += e), t);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./DataReader": 18 },
          ],
          21: [
            function (e, t, n) {
              var r = e(`./ArrayReader`);
              function i(e) {
                r.call(this, e);
              }
              (e(`../utils`).inherits(i, r),
                (i.prototype.readData = function (e) {
                  if ((this.checkOffset(e), e === 0)) return new Uint8Array();
                  var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                  return ((this.index += e), t);
                }),
                (t.exports = i));
            },
            { "../utils": 32, "./ArrayReader": 17 },
          ],
          22: [
            function (e, t, n) {
              var r = e(`../utils`),
                i = e(`../support`),
                a = e(`./ArrayReader`),
                o = e(`./StringReader`),
                s = e(`./NodeBufferReader`),
                c = e(`./Uint8ArrayReader`);
              t.exports = function (e) {
                var t = r.getTypeOf(e);
                return (
                  r.checkSupport(t),
                  t !== `string` || i.uint8array
                    ? t === `nodebuffer`
                      ? new s(e)
                      : i.uint8array
                        ? new c(r.transformTo(`uint8array`, e))
                        : new a(r.transformTo(`array`, e))
                    : new o(e)
                );
              };
            },
            {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21,
            },
          ],
          23: [
            function (e, t, n) {
              ((n.LOCAL_FILE_HEADER = `PK`),
                (n.CENTRAL_FILE_HEADER = `PK`),
                (n.CENTRAL_DIRECTORY_END = `PK`),
                (n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = `PK\x07`),
                (n.ZIP64_CENTRAL_DIRECTORY_END = `PK`),
                (n.DATA_DESCRIPTOR = `PK\x07\b`));
            },
            {},
          ],
          24: [
            function (e, t, n) {
              var r = e(`./GenericWorker`),
                i = e(`../utils`);
              function a(e) {
                (r.call(this, `ConvertWorker to ` + e), (this.destType = e));
              }
              (i.inherits(a, r),
                (a.prototype.processChunk = function (e) {
                  this.push({ data: i.transformTo(this.destType, e.data), meta: e.meta });
                }),
                (t.exports = a));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          25: [
            function (e, t, n) {
              var r = e(`./GenericWorker`),
                i = e(`../crc32`);
              function a() {
                (r.call(this, `Crc32Probe`), this.withStreamInfo(`crc32`, 0));
              }
              (e(`../utils`).inherits(a, r),
                (a.prototype.processChunk = function (e) {
                  ((this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0)), this.push(e));
                }),
                (t.exports = a));
            },
            { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
          ],
          26: [
            function (e, t, n) {
              var r = e(`../utils`),
                i = e(`./GenericWorker`);
              function a(e) {
                (i.call(this, `DataLengthProbe for ` + e),
                  (this.propName = e),
                  this.withStreamInfo(e, 0));
              }
              (r.inherits(a, i),
                (a.prototype.processChunk = function (e) {
                  if (e) {
                    var t = this.streamInfo[this.propName] || 0;
                    this.streamInfo[this.propName] = t + e.data.length;
                  }
                  i.prototype.processChunk.call(this, e);
                }),
                (t.exports = a));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          27: [
            function (e, t, n) {
              var r = e(`../utils`),
                i = e(`./GenericWorker`);
              function a(e) {
                i.call(this, `DataWorker`);
                var t = this;
                ((this.dataIsReady = !1),
                  (this.index = 0),
                  (this.max = 0),
                  (this.data = null),
                  (this.type = ``),
                  (this._tickScheduled = !1),
                  e.then(
                    function (e) {
                      ((t.dataIsReady = !0),
                        (t.data = e),
                        (t.max = (e && e.length) || 0),
                        (t.type = r.getTypeOf(e)),
                        t.isPaused || t._tickAndRepeat());
                    },
                    function (e) {
                      t.error(e);
                    },
                  ));
              }
              (r.inherits(a, i),
                (a.prototype.cleanUp = function () {
                  (i.prototype.cleanUp.call(this), (this.data = null));
                }),
                (a.prototype.resume = function () {
                  return (
                    !!i.prototype.resume.call(this) &&
                    (!this._tickScheduled &&
                      this.dataIsReady &&
                      ((this._tickScheduled = !0), r.delay(this._tickAndRepeat, [], this)),
                    !0)
                  );
                }),
                (a.prototype._tickAndRepeat = function () {
                  ((this._tickScheduled = !1),
                    this.isPaused ||
                      this.isFinished ||
                      (this._tick(),
                      this.isFinished ||
                        (r.delay(this._tickAndRepeat, [], this), (this._tickScheduled = !0))));
                }),
                (a.prototype._tick = function () {
                  if (this.isPaused || this.isFinished) return !1;
                  var e = null,
                    t = Math.min(this.max, this.index + 16384);
                  if (this.index >= this.max) return this.end();
                  switch (this.type) {
                    case `string`:
                      e = this.data.substring(this.index, t);
                      break;
                    case `uint8array`:
                      e = this.data.subarray(this.index, t);
                      break;
                    case `array`:
                    case `nodebuffer`:
                      e = this.data.slice(this.index, t);
                  }
                  return (
                    (this.index = t),
                    this.push({
                      data: e,
                      meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
                    })
                  );
                }),
                (t.exports = a));
            },
            { "../utils": 32, "./GenericWorker": 28 },
          ],
          28: [
            function (e, t, n) {
              function r(e) {
                ((this.name = e || `default`),
                  (this.streamInfo = {}),
                  (this.generatedError = null),
                  (this.extraStreamInfo = {}),
                  (this.isPaused = !0),
                  (this.isFinished = !1),
                  (this.isLocked = !1),
                  (this._listeners = { data: [], end: [], error: [] }),
                  (this.previous = null));
              }
              ((r.prototype = {
                push: function (e) {
                  this.emit(`data`, e);
                },
                end: function () {
                  if (this.isFinished) return !1;
                  this.flush();
                  try {
                    (this.emit(`end`), this.cleanUp(), (this.isFinished = !0));
                  } catch (e) {
                    this.emit(`error`, e);
                  }
                  return !0;
                },
                error: function (e) {
                  return (
                    !this.isFinished &&
                    (this.isPaused
                      ? (this.generatedError = e)
                      : ((this.isFinished = !0),
                        this.emit(`error`, e),
                        this.previous && this.previous.error(e),
                        this.cleanUp()),
                    !0)
                  );
                },
                on: function (e, t) {
                  return (this._listeners[e].push(t), this);
                },
                cleanUp: function () {
                  ((this.streamInfo = this.generatedError = this.extraStreamInfo = null),
                    (this._listeners = []));
                },
                emit: function (e, t) {
                  if (this._listeners[e])
                    for (var n = 0; n < this._listeners[e].length; n++)
                      this._listeners[e][n].call(this, t);
                },
                pipe: function (e) {
                  return e.registerPrevious(this);
                },
                registerPrevious: function (e) {
                  if (this.isLocked)
                    throw Error(`The stream '` + this + `' has already been used.`);
                  ((this.streamInfo = e.streamInfo), this.mergeStreamInfo(), (this.previous = e));
                  var t = this;
                  return (
                    e.on(`data`, function (e) {
                      t.processChunk(e);
                    }),
                    e.on(`end`, function () {
                      t.end();
                    }),
                    e.on(`error`, function (e) {
                      t.error(e);
                    }),
                    this
                  );
                },
                pause: function () {
                  return (
                    !this.isPaused &&
                    !this.isFinished &&
                    ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
                  );
                },
                resume: function () {
                  if (!this.isPaused || this.isFinished) return !1;
                  var e = (this.isPaused = !1);
                  return (
                    this.generatedError && (this.error(this.generatedError), (e = !0)),
                    this.previous && this.previous.resume(),
                    !e
                  );
                },
                flush: function () {},
                processChunk: function (e) {
                  this.push(e);
                },
                withStreamInfo: function (e, t) {
                  return ((this.extraStreamInfo[e] = t), this.mergeStreamInfo(), this);
                },
                mergeStreamInfo: function () {
                  for (var e in this.extraStreamInfo)
                    Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) &&
                      (this.streamInfo[e] = this.extraStreamInfo[e]);
                },
                lock: function () {
                  if (this.isLocked)
                    throw Error(`The stream '` + this + `' has already been used.`);
                  ((this.isLocked = !0), this.previous && this.previous.lock());
                },
                toString: function () {
                  var e = `Worker ` + this.name;
                  return this.previous ? this.previous + ` -> ` + e : e;
                },
              }),
                (t.exports = r));
            },
            {},
          ],
          29: [
            function (e, t, n) {
              var r = e(`../utils`),
                i = e(`./ConvertWorker`),
                a = e(`./GenericWorker`),
                o = e(`../base64`),
                s = e(`../support`),
                c = e(`../external`),
                l = null;
              if (s.nodestream)
                try {
                  l = e(`../nodejs/NodejsStreamOutputAdapter`);
                } catch {}
              function u(e, t) {
                return new c.Promise(function (n, i) {
                  var a = [],
                    s = e._internalType,
                    c = e._outputType,
                    l = e._mimeType;
                  e.on(`data`, function (e, n) {
                    (a.push(e), t && t(n));
                  })
                    .on(`error`, function (e) {
                      ((a = []), i(e));
                    })
                    .on(`end`, function () {
                      try {
                        n(
                          (function (e, t, n) {
                            switch (e) {
                              case `blob`:
                                return r.newBlob(r.transformTo(`arraybuffer`, t), n);
                              case `base64`:
                                return o.encode(t);
                              default:
                                return r.transformTo(e, t);
                            }
                          })(
                            c,
                            (function (e, t) {
                              var n,
                                r = 0,
                                i = null,
                                a = 0;
                              for (n = 0; n < t.length; n++) a += t[n].length;
                              switch (e) {
                                case `string`:
                                  return t.join(``);
                                case `array`:
                                  return Array.prototype.concat.apply([], t);
                                case `uint8array`:
                                  for (i = new Uint8Array(a), n = 0; n < t.length; n++)
                                    (i.set(t[n], r), (r += t[n].length));
                                  return i;
                                case `nodebuffer`:
                                  return Buffer.concat(t);
                                default:
                                  throw Error(`concat : unsupported type '` + e + `'`);
                              }
                            })(s, a),
                            l,
                          ),
                        );
                      } catch (e) {
                        i(e);
                      }
                      a = [];
                    })
                    .resume();
                });
              }
              function d(e, t, n) {
                var o = t;
                switch (t) {
                  case `blob`:
                  case `arraybuffer`:
                    o = `uint8array`;
                    break;
                  case `base64`:
                    o = `string`;
                }
                try {
                  ((this._internalType = o),
                    (this._outputType = t),
                    (this._mimeType = n),
                    r.checkSupport(o),
                    (this._worker = e.pipe(new i(o))),
                    e.lock());
                } catch (e) {
                  ((this._worker = new a(`error`)), this._worker.error(e));
                }
              }
              ((d.prototype = {
                accumulate: function (e) {
                  return u(this, e);
                },
                on: function (e, t) {
                  var n = this;
                  return (
                    e === `data`
                      ? this._worker.on(e, function (e) {
                          t.call(n, e.data, e.meta);
                        })
                      : this._worker.on(e, function () {
                          r.delay(t, arguments, n);
                        }),
                    this
                  );
                },
                resume: function () {
                  return (r.delay(this._worker.resume, [], this._worker), this);
                },
                pause: function () {
                  return (this._worker.pause(), this);
                },
                toNodejsStream: function (e) {
                  if ((r.checkSupport(`nodestream`), this._outputType !== `nodebuffer`))
                    throw Error(this._outputType + ` is not supported by this method`);
                  return new l(this, { objectMode: this._outputType !== `nodebuffer` }, e);
                },
              }),
                (t.exports = d));
            },
            {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28,
            },
          ],
          30: [
            function (e, t, n) {
              if (
                ((n.base64 = !0),
                (n.array = !0),
                (n.string = !0),
                (n.arraybuffer = typeof ArrayBuffer < `u` && typeof Uint8Array < `u`),
                (n.nodebuffer = typeof Buffer < `u`),
                (n.uint8array = typeof Uint8Array < `u`),
                typeof ArrayBuffer > `u`)
              )
                n.blob = !1;
              else {
                var r = new ArrayBuffer(0);
                try {
                  n.blob = new Blob([r], { type: `application/zip` }).size === 0;
                } catch {
                  try {
                    var i = new (
                      self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder
                    )();
                    (i.append(r), (n.blob = i.getBlob(`application/zip`).size === 0));
                  } catch {
                    n.blob = !1;
                  }
                }
              }
              try {
                n.nodestream = !!e(`readable-stream`).Readable;
              } catch {
                n.nodestream = !1;
              }
            },
            { "readable-stream": 16 },
          ],
          31: [
            function (e, t, n) {
              for (
                var r = e(`./utils`),
                  i = e(`./support`),
                  a = e(`./nodejsUtils`),
                  o = e(`./stream/GenericWorker`),
                  s = Array(256),
                  c = 0;
                c < 256;
                c++
              )
                s[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
              s[254] = s[254] = 1;
              function l() {
                (o.call(this, `utf-8 decode`), (this.leftOver = null));
              }
              function u() {
                o.call(this, `utf-8 encode`);
              }
              ((n.utf8encode = function (e) {
                return i.nodebuffer
                  ? a.newBufferFrom(e, `utf-8`)
                  : (function (e) {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        s = e.length,
                        c = 0;
                      for (a = 0; a < s; a++)
                        ((64512 & (n = e.charCodeAt(a))) == 55296 &&
                          a + 1 < s &&
                          (64512 & (r = e.charCodeAt(a + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), a++),
                          (c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4));
                      for (t = i.uint8array ? new Uint8Array(c) : Array(c), a = o = 0; o < c; a++)
                        ((64512 & (n = e.charCodeAt(a))) == 55296 &&
                          a + 1 < s &&
                          (64512 & (r = e.charCodeAt(a + 1))) == 56320 &&
                          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), a++),
                          n < 128
                            ? (t[o++] = n)
                            : (n < 2048
                                ? (t[o++] = 192 | (n >>> 6))
                                : (n < 65536
                                    ? (t[o++] = 224 | (n >>> 12))
                                    : ((t[o++] = 240 | (n >>> 18)),
                                      (t[o++] = 128 | ((n >>> 12) & 63))),
                                  (t[o++] = 128 | ((n >>> 6) & 63))),
                              (t[o++] = 128 | (63 & n))));
                      return t;
                    })(e);
              }),
                (n.utf8decode = function (e) {
                  return i.nodebuffer
                    ? r.transformTo(`nodebuffer`, e).toString(`utf-8`)
                    : (function (e) {
                        var t,
                          n,
                          i,
                          a,
                          o = e.length,
                          c = Array(2 * o);
                        for (t = n = 0; t < o;)
                          if ((i = e[t++]) < 128) c[n++] = i;
                          else if (4 < (a = s[i])) ((c[n++] = 65533), (t += a - 1));
                          else {
                            for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && t < o;)
                              ((i = (i << 6) | (63 & e[t++])), a--);
                            1 < a
                              ? (c[n++] = 65533)
                              : i < 65536
                                ? (c[n++] = i)
                                : ((i -= 65536),
                                  (c[n++] = 55296 | ((i >> 10) & 1023)),
                                  (c[n++] = 56320 | (1023 & i)));
                          }
                        return (
                          c.length !== n && (c.subarray ? (c = c.subarray(0, n)) : (c.length = n)),
                          r.applyFromCharCode(c)
                        );
                      })((e = r.transformTo(i.uint8array ? `uint8array` : `array`, e)));
                }),
                r.inherits(l, o),
                (l.prototype.processChunk = function (e) {
                  var t = r.transformTo(i.uint8array ? `uint8array` : `array`, e.data);
                  if (this.leftOver && this.leftOver.length) {
                    if (i.uint8array) {
                      var a = t;
                      ((t = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0),
                        t.set(a, this.leftOver.length));
                    } else t = this.leftOver.concat(t);
                    this.leftOver = null;
                  }
                  var o = (function (e, t) {
                      var n;
                      for (
                        (t ||= e.length) > e.length && (t = e.length), n = t - 1;
                        0 <= n && (192 & e[n]) == 128;
                      )
                        n--;
                      return n < 0 || n === 0 ? t : n + s[e[n]] > t ? n : t;
                    })(t),
                    c = t;
                  (o !== t.length &&
                    (i.uint8array
                      ? ((c = t.subarray(0, o)), (this.leftOver = t.subarray(o, t.length)))
                      : ((c = t.slice(0, o)), (this.leftOver = t.slice(o, t.length)))),
                    this.push({ data: n.utf8decode(c), meta: e.meta }));
                }),
                (l.prototype.flush = function () {
                  this.leftOver &&
                    this.leftOver.length &&
                    (this.push({ data: n.utf8decode(this.leftOver), meta: {} }),
                    (this.leftOver = null));
                }),
                (n.Utf8DecodeWorker = l),
                r.inherits(u, o),
                (u.prototype.processChunk = function (e) {
                  this.push({ data: n.utf8encode(e.data), meta: e.meta });
                }),
                (n.Utf8EncodeWorker = u));
            },
            { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 },
          ],
          32: [
            function (e, t, n) {
              var r = e(`./support`),
                i = e(`./base64`),
                a = e(`./nodejsUtils`),
                o = e(`./external`);
              function s(e) {
                return e;
              }
              function c(e, t) {
                for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
                return t;
              }
              (e(`setimmediate`),
                (n.newBlob = function (e, t) {
                  n.checkSupport(`blob`);
                  try {
                    return new Blob([e], { type: t });
                  } catch {
                    try {
                      var r = new (
                        self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder
                      )();
                      return (r.append(e), r.getBlob(t));
                    } catch {
                      throw Error(`Bug : can't construct the Blob.`);
                    }
                  }
                }));
              var l = {
                stringifyByChunk: function (e, t, n) {
                  var r = [],
                    i = 0,
                    a = e.length;
                  if (a <= n) return String.fromCharCode.apply(null, e);
                  for (; i < a;)
                    (t === `array` || t === `nodebuffer`
                      ? r.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + n, a))))
                      : r.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + n, a)))),
                      (i += n));
                  return r.join(``);
                },
                stringifyByChar: function (e) {
                  for (var t = ``, n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
                  return t;
                },
                applyCanBeUsed: {
                  uint8array: (function () {
                    try {
                      return (
                        r.uint8array &&
                        String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                      );
                    } catch {
                      return !1;
                    }
                  })(),
                  nodebuffer: (function () {
                    try {
                      return (
                        r.nodebuffer &&
                        String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1
                      );
                    } catch {
                      return !1;
                    }
                  })(),
                },
              };
              function u(e) {
                var t = 65536,
                  r = n.getTypeOf(e),
                  i = !0;
                if (
                  (r === `uint8array`
                    ? (i = l.applyCanBeUsed.uint8array)
                    : r === `nodebuffer` && (i = l.applyCanBeUsed.nodebuffer),
                  i)
                )
                  for (; 1 < t;)
                    try {
                      return l.stringifyByChunk(e, r, t);
                    } catch {
                      t = Math.floor(t / 2);
                    }
                return l.stringifyByChar(e);
              }
              function d(e, t) {
                for (var n = 0; n < e.length; n++) t[n] = e[n];
                return t;
              }
              n.applyFromCharCode = u;
              var f = {};
              ((f.string = {
                string: s,
                array: function (e) {
                  return c(e, Array(e.length));
                },
                arraybuffer: function (e) {
                  return f.string.uint8array(e).buffer;
                },
                uint8array: function (e) {
                  return c(e, new Uint8Array(e.length));
                },
                nodebuffer: function (e) {
                  return c(e, a.allocBuffer(e.length));
                },
              }),
                (f.array = {
                  string: u,
                  array: s,
                  arraybuffer: function (e) {
                    return new Uint8Array(e).buffer;
                  },
                  uint8array: function (e) {
                    return new Uint8Array(e);
                  },
                  nodebuffer: function (e) {
                    return a.newBufferFrom(e);
                  },
                }),
                (f.arraybuffer = {
                  string: function (e) {
                    return u(new Uint8Array(e));
                  },
                  array: function (e) {
                    return d(new Uint8Array(e), Array(e.byteLength));
                  },
                  arraybuffer: s,
                  uint8array: function (e) {
                    return new Uint8Array(e);
                  },
                  nodebuffer: function (e) {
                    return a.newBufferFrom(new Uint8Array(e));
                  },
                }),
                (f.uint8array = {
                  string: u,
                  array: function (e) {
                    return d(e, Array(e.length));
                  },
                  arraybuffer: function (e) {
                    return e.buffer;
                  },
                  uint8array: s,
                  nodebuffer: function (e) {
                    return a.newBufferFrom(e);
                  },
                }),
                (f.nodebuffer = {
                  string: u,
                  array: function (e) {
                    return d(e, Array(e.length));
                  },
                  arraybuffer: function (e) {
                    return f.nodebuffer.uint8array(e).buffer;
                  },
                  uint8array: function (e) {
                    return d(e, new Uint8Array(e.length));
                  },
                  nodebuffer: s,
                }),
                (n.transformTo = function (e, t) {
                  return ((t ||= ``), e ? (n.checkSupport(e), f[n.getTypeOf(t)][e](t)) : t);
                }),
                (n.resolve = function (e) {
                  for (var t = e.split(`/`), n = [], r = 0; r < t.length; r++) {
                    var i = t[r];
                    i === `.` ||
                      (i === `` && r !== 0 && r !== t.length - 1) ||
                      (i === `..` ? n.pop() : n.push(i));
                  }
                  return n.join(`/`);
                }),
                (n.getTypeOf = function (e) {
                  return typeof e == `string`
                    ? `string`
                    : Object.prototype.toString.call(e) === `[object Array]`
                      ? `array`
                      : r.nodebuffer && a.isBuffer(e)
                        ? `nodebuffer`
                        : r.uint8array && e instanceof Uint8Array
                          ? `uint8array`
                          : r.arraybuffer && e instanceof ArrayBuffer
                            ? `arraybuffer`
                            : void 0;
                }),
                (n.checkSupport = function (e) {
                  if (!r[e.toLowerCase()]) throw Error(e + ` is not supported by this platform`);
                }),
                (n.MAX_VALUE_16BITS = 65535),
                (n.MAX_VALUE_32BITS = -1),
                (n.pretty = function (e) {
                  var t,
                    n,
                    r = ``;
                  for (n = 0; n < (e || ``).length; n++)
                    r +=
                      `\\x` +
                      ((t = e.charCodeAt(n)) < 16 ? `0` : ``) +
                      t.toString(16).toUpperCase();
                  return r;
                }),
                (n.delay = function (e, t, n) {
                  setImmediate(function () {
                    e.apply(n || null, t || []);
                  });
                }),
                (n.inherits = function (e, t) {
                  function n() {}
                  ((n.prototype = t.prototype), (e.prototype = new n()));
                }),
                (n.extend = function () {
                  var e,
                    t,
                    n = {};
                  for (e = 0; e < arguments.length; e++)
                    for (t in arguments[e])
                      Object.prototype.hasOwnProperty.call(arguments[e], t) &&
                        n[t] === void 0 &&
                        (n[t] = arguments[e][t]);
                  return n;
                }),
                (n.prepareContent = function (e, t, a, s, l) {
                  return o.Promise.resolve(t)
                    .then(function (e) {
                      return r.blob &&
                        (e instanceof Blob ||
                          [`[object File]`, `[object Blob]`].indexOf(
                            Object.prototype.toString.call(e),
                          ) !== -1) &&
                        typeof FileReader < `u`
                        ? new o.Promise(function (t, n) {
                            var r = new FileReader();
                            ((r.onload = function (e) {
                              t(e.target.result);
                            }),
                              (r.onerror = function (e) {
                                n(e.target.error);
                              }),
                              r.readAsArrayBuffer(e));
                          })
                        : e;
                    })
                    .then(function (t) {
                      var u = n.getTypeOf(t);
                      return u
                        ? (u === `arraybuffer`
                            ? (t = n.transformTo(`uint8array`, t))
                            : u === `string` &&
                              (l
                                ? (t = i.decode(t))
                                : a &&
                                  !0 !== s &&
                                  (t = (function (e) {
                                    return c(
                                      e,
                                      r.uint8array ? new Uint8Array(e.length) : Array(e.length),
                                    );
                                  })(t))),
                          t)
                        : o.Promise.reject(
                            Error(
                              `Can't read the data of '` +
                                e +
                                `'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`,
                            ),
                          );
                    });
                }));
            },
            {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54,
            },
          ],
          33: [
            function (e, t, n) {
              var r = e(`./reader/readerFor`),
                i = e(`./utils`),
                a = e(`./signature`),
                o = e(`./zipEntry`),
                s = e(`./support`);
              function c(e) {
                ((this.files = []), (this.loadOptions = e));
              }
              ((c.prototype = {
                checkSignature: function (e) {
                  if (!this.reader.readAndCheckSignature(e)) {
                    this.reader.index -= 4;
                    var t = this.reader.readString(4);
                    throw Error(
                      `Corrupted zip or bug: unexpected signature (` +
                        i.pretty(t) +
                        `, expected ` +
                        i.pretty(e) +
                        `)`,
                    );
                  }
                },
                isSignature: function (e, t) {
                  var n = this.reader.index;
                  this.reader.setIndex(e);
                  var r = this.reader.readString(4) === t;
                  return (this.reader.setIndex(n), r);
                },
                readBlockEndOfCentral: function () {
                  ((this.diskNumber = this.reader.readInt(2)),
                    (this.diskWithCentralDirStart = this.reader.readInt(2)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                    (this.centralDirRecords = this.reader.readInt(2)),
                    (this.centralDirSize = this.reader.readInt(4)),
                    (this.centralDirOffset = this.reader.readInt(4)),
                    (this.zipCommentLength = this.reader.readInt(2)));
                  var e = this.reader.readData(this.zipCommentLength),
                    t = s.uint8array ? `uint8array` : `array`,
                    n = i.transformTo(t, e);
                  this.zipComment = this.loadOptions.decodeFileName(n);
                },
                readBlockZip64EndOfCentral: function () {
                  ((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                    this.reader.skip(4),
                    (this.diskNumber = this.reader.readInt(4)),
                    (this.diskWithCentralDirStart = this.reader.readInt(4)),
                    (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                    (this.centralDirRecords = this.reader.readInt(8)),
                    (this.centralDirSize = this.reader.readInt(8)),
                    (this.centralDirOffset = this.reader.readInt(8)),
                    (this.zip64ExtensibleData = {}));
                  for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r;)
                    ((e = this.reader.readInt(2)),
                      (t = this.reader.readInt(4)),
                      (n = this.reader.readData(t)),
                      (this.zip64ExtensibleData[e] = { id: e, length: t, value: n }));
                },
                readBlockZip64EndOfCentralLocator: function () {
                  if (
                    ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                    (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                    (this.disksCount = this.reader.readInt(4)),
                    1 < this.disksCount)
                  )
                    throw Error(`Multi-volumes zip are not supported`);
                },
                readLocalFiles: function () {
                  for (var e = 0, t; e < this.files.length; e++)
                    ((t = this.files[e]),
                      this.reader.setIndex(t.localHeaderOffset),
                      this.checkSignature(a.LOCAL_FILE_HEADER),
                      t.readLocalPart(this.reader),
                      t.handleUTF8(),
                      t.processAttributes());
                },
                readCentralDir: function () {
                  var e;
                  for (
                    this.reader.setIndex(this.centralDirOffset);
                    this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);
                  )
                    ((e = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
                      this.reader,
                    ),
                      this.files.push(e));
                  if (
                    this.centralDirRecords !== this.files.length &&
                    this.centralDirRecords !== 0 &&
                    this.files.length === 0
                  )
                    throw Error(
                      `Corrupted zip or bug: expected ` +
                        this.centralDirRecords +
                        ` records in central dir, got ` +
                        this.files.length,
                    );
                },
                readEndOfCentral: function () {
                  var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
                  if (e < 0)
                    throw this.isSignature(0, a.LOCAL_FILE_HEADER)
                      ? Error(`Corrupted zip: can't find end of central directory`)
                      : Error(
                          `Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`,
                        );
                  this.reader.setIndex(e);
                  var t = e;
                  if (
                    (this.checkSignature(a.CENTRAL_DIRECTORY_END),
                    this.readBlockEndOfCentral(),
                    this.diskNumber === i.MAX_VALUE_16BITS ||
                      this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
                      this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS ||
                      this.centralDirRecords === i.MAX_VALUE_16BITS ||
                      this.centralDirSize === i.MAX_VALUE_32BITS ||
                      this.centralDirOffset === i.MAX_VALUE_32BITS)
                  ) {
                    if (
                      ((this.zip64 = !0),
                      (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                    )
                      throw Error(
                        `Corrupted zip: can't find the ZIP64 end of central directory locator`,
                      );
                    if (
                      (this.reader.setIndex(e),
                      this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                      this.readBlockZip64EndOfCentralLocator(),
                      !this.isSignature(
                        this.relativeOffsetEndOfZip64CentralDir,
                        a.ZIP64_CENTRAL_DIRECTORY_END,
                      ) &&
                        ((this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END)),
                        this.relativeOffsetEndOfZip64CentralDir < 0))
                    )
                      throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);
                    (this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                      this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),
                      this.readBlockZip64EndOfCentral());
                  }
                  var n = this.centralDirOffset + this.centralDirSize;
                  this.zip64 && ((n += 20), (n += 12 + this.zip64EndOfCentralSize));
                  var r = t - n;
                  if (0 < r) this.isSignature(t, a.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
                  else if (r < 0) throw Error(`Corrupted zip: missing ` + Math.abs(r) + ` bytes.`);
                },
                prepareReader: function (e) {
                  this.reader = r(e);
                },
                load: function (e) {
                  (this.prepareReader(e),
                    this.readEndOfCentral(),
                    this.readCentralDir(),
                    this.readLocalFiles());
                },
              }),
                (t.exports = c));
            },
            {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34,
            },
          ],
          34: [
            function (e, t, n) {
              var r = e(`./reader/readerFor`),
                i = e(`./utils`),
                a = e(`./compressedObject`),
                o = e(`./crc32`),
                s = e(`./utf8`),
                c = e(`./compressions`),
                l = e(`./support`);
              function u(e, t) {
                ((this.options = e), (this.loadOptions = t));
              }
              ((u.prototype = {
                isEncrypted: function () {
                  return (1 & this.bitFlag) == 1;
                },
                useUTF8: function () {
                  return (2048 & this.bitFlag) == 2048;
                },
                readLocalPart: function (e) {
                  var t, n;
                  if (
                    (e.skip(22),
                    (this.fileNameLength = e.readInt(2)),
                    (n = e.readInt(2)),
                    (this.fileName = e.readData(this.fileNameLength)),
                    e.skip(n),
                    this.compressedSize === -1 || this.uncompressedSize === -1)
                  )
                    throw Error(
                      `Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`,
                    );
                  if (
                    (t = (function (e) {
                      for (var t in c)
                        if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e)
                          return c[t];
                      return null;
                    })(this.compressionMethod)) === null
                  )
                    throw Error(
                      `Corrupted zip : compression ` +
                        i.pretty(this.compressionMethod) +
                        ` unknown (inner file : ` +
                        i.transformTo(`string`, this.fileName) +
                        `)`,
                    );
                  this.decompressed = new a(
                    this.compressedSize,
                    this.uncompressedSize,
                    this.crc32,
                    t,
                    e.readData(this.compressedSize),
                  );
                },
                readCentralPart: function (e) {
                  ((this.versionMadeBy = e.readInt(2)),
                    e.skip(2),
                    (this.bitFlag = e.readInt(2)),
                    (this.compressionMethod = e.readString(2)),
                    (this.date = e.readDate()),
                    (this.crc32 = e.readInt(4)),
                    (this.compressedSize = e.readInt(4)),
                    (this.uncompressedSize = e.readInt(4)));
                  var t = e.readInt(2);
                  if (
                    ((this.extraFieldsLength = e.readInt(2)),
                    (this.fileCommentLength = e.readInt(2)),
                    (this.diskNumberStart = e.readInt(2)),
                    (this.internalFileAttributes = e.readInt(2)),
                    (this.externalFileAttributes = e.readInt(4)),
                    (this.localHeaderOffset = e.readInt(4)),
                    this.isEncrypted())
                  )
                    throw Error(`Encrypted zip are not supported`);
                  (e.skip(t),
                    this.readExtraFields(e),
                    this.parseZIP64ExtraField(e),
                    (this.fileComment = e.readData(this.fileCommentLength)));
                },
                processAttributes: function () {
                  ((this.unixPermissions = null), (this.dosPermissions = null));
                  var e = this.versionMadeBy >> 8;
                  ((this.dir = !!(16 & this.externalFileAttributes)),
                    e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes),
                    e == 3 && (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                    this.dir || this.fileNameStr.slice(-1) !== `/` || (this.dir = !0));
                },
                parseZIP64ExtraField: function () {
                  if (this.extraFields[1]) {
                    var e = r(this.extraFields[1].value);
                    (this.uncompressedSize === i.MAX_VALUE_32BITS &&
                      (this.uncompressedSize = e.readInt(8)),
                      this.compressedSize === i.MAX_VALUE_32BITS &&
                        (this.compressedSize = e.readInt(8)),
                      this.localHeaderOffset === i.MAX_VALUE_32BITS &&
                        (this.localHeaderOffset = e.readInt(8)),
                      this.diskNumberStart === i.MAX_VALUE_32BITS &&
                        (this.diskNumberStart = e.readInt(4)));
                  }
                },
                readExtraFields: function (e) {
                  var t,
                    n,
                    r,
                    i = e.index + this.extraFieldsLength;
                  for (this.extraFields ||= {}; e.index + 4 < i;)
                    ((t = e.readInt(2)),
                      (n = e.readInt(2)),
                      (r = e.readData(n)),
                      (this.extraFields[t] = { id: t, length: n, value: r }));
                  e.setIndex(i);
                },
                handleUTF8: function () {
                  var e = l.uint8array ? `uint8array` : `array`;
                  if (this.useUTF8())
                    ((this.fileNameStr = s.utf8decode(this.fileName)),
                      (this.fileCommentStr = s.utf8decode(this.fileComment)));
                  else {
                    var t = this.findExtraFieldUnicodePath();
                    if (t !== null) this.fileNameStr = t;
                    else {
                      var n = i.transformTo(e, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(n);
                    }
                    var r = this.findExtraFieldUnicodeComment();
                    if (r !== null) this.fileCommentStr = r;
                    else {
                      var a = i.transformTo(e, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(a);
                    }
                  }
                },
                findExtraFieldUnicodePath: function () {
                  var e = this.extraFields[28789];
                  if (e) {
                    var t = r(e.value);
                    return t.readInt(1) === 1 && o(this.fileName) === t.readInt(4)
                      ? s.utf8decode(t.readData(e.length - 5))
                      : null;
                  }
                  return null;
                },
                findExtraFieldUnicodeComment: function () {
                  var e = this.extraFields[25461];
                  if (e) {
                    var t = r(e.value);
                    return t.readInt(1) === 1 && o(this.fileComment) === t.readInt(4)
                      ? s.utf8decode(t.readData(e.length - 5))
                      : null;
                  }
                  return null;
                },
              }),
                (t.exports = u));
            },
            {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32,
            },
          ],
          35: [
            function (e, t, n) {
              function r(e, t, n) {
                ((this.name = e),
                  (this.dir = n.dir),
                  (this.date = n.date),
                  (this.comment = n.comment),
                  (this.unixPermissions = n.unixPermissions),
                  (this.dosPermissions = n.dosPermissions),
                  (this._data = t),
                  (this._dataBinary = n.binary),
                  (this.options = {
                    compression: n.compression,
                    compressionOptions: n.compressionOptions,
                  }));
              }
              var i = e(`./stream/StreamHelper`),
                a = e(`./stream/DataWorker`),
                o = e(`./utf8`),
                s = e(`./compressedObject`),
                c = e(`./stream/GenericWorker`);
              r.prototype = {
                internalStream: function (e) {
                  var t = null,
                    n = `string`;
                  try {
                    if (!e) throw Error(`No output type specified.`);
                    var r = (n = e.toLowerCase()) === `string` || n === `text`;
                    ((n !== `binarystring` && n !== `text`) || (n = `string`),
                      (t = this._decompressWorker()));
                    var a = !this._dataBinary;
                    (a && !r && (t = t.pipe(new o.Utf8EncodeWorker())),
                      !a && r && (t = t.pipe(new o.Utf8DecodeWorker())));
                  } catch (e) {
                    (t = new c(`error`)).error(e);
                  }
                  return new i(t, n, ``);
                },
                async: function (e, t) {
                  return this.internalStream(e).accumulate(t);
                },
                nodeStream: function (e, t) {
                  return this.internalStream(e || `nodebuffer`).toNodejsStream(t);
                },
                _compressWorker: function (e, t) {
                  if (this._data instanceof s && this._data.compression.magic === e.magic)
                    return this._data.getCompressedWorker();
                  var n = this._decompressWorker();
                  return (
                    this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker())),
                    s.createWorkerFrom(n, e, t)
                  );
                },
                _decompressWorker: function () {
                  return this._data instanceof s
                    ? this._data.getContentWorker()
                    : this._data instanceof c
                      ? this._data
                      : new a(this._data);
                },
              };
              for (
                var l = [`asText`, `asBinary`, `asNodeBuffer`, `asUint8Array`, `asArrayBuffer`],
                  u = function () {
                    throw Error(
                      `This method has been removed in JSZip 3.0, please check the upgrade guide.`,
                    );
                  },
                  d = 0;
                d < l.length;
                d++
              )
                r.prototype[l[d]] = u;
              t.exports = r;
            },
            {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
            },
          ],
          36: [
            function (e, t, n) {
              (function (e) {
                var n,
                  r,
                  i = e.MutationObserver || e.WebKitMutationObserver;
                if (i) {
                  var a = 0,
                    o = new i(u),
                    s = e.document.createTextNode(``);
                  (o.observe(s, { characterData: !0 }),
                    (n = function () {
                      s.data = a = ++a % 2;
                    }));
                } else if (e.setImmediate || e.MessageChannel === void 0)
                  n =
                    `document` in e && `onreadystatechange` in e.document.createElement(`script`)
                      ? function () {
                          var t = e.document.createElement(`script`);
                          ((t.onreadystatechange = function () {
                            (u(),
                              (t.onreadystatechange = null),
                              t.parentNode.removeChild(t),
                              (t = null));
                          }),
                            e.document.documentElement.appendChild(t));
                        }
                      : function () {
                          setTimeout(u, 0);
                        };
                else {
                  var c = new e.MessageChannel();
                  ((c.port1.onmessage = u),
                    (n = function () {
                      c.port2.postMessage(0);
                    }));
                }
                var l = [];
                function u() {
                  var e, t;
                  r = !0;
                  for (var n = l.length; n;) {
                    for (t = l, l = [], e = -1; ++e < n;) t[e]();
                    n = l.length;
                  }
                  r = !1;
                }
                t.exports = function (e) {
                  l.push(e) !== 1 || r || n();
                };
              }).call(
                this,
                typeof global < `u`
                  ? global
                  : typeof self < `u`
                    ? self
                    : typeof window < `u`
                      ? window
                      : {},
              );
            },
            {},
          ],
          37: [
            function (e, t, n) {
              var r = e(`immediate`);
              function i() {}
              var a = {},
                o = [`REJECTED`],
                s = [`FULFILLED`],
                c = [`PENDING`];
              function l(e) {
                if (typeof e != `function`) throw TypeError(`resolver must be a function`);
                ((this.state = c),
                  (this.queue = []),
                  (this.outcome = void 0),
                  e !== i && p(this, e));
              }
              function u(e, t, n) {
                ((this.promise = e),
                  typeof t == `function` &&
                    ((this.onFulfilled = t), (this.callFulfilled = this.otherCallFulfilled)),
                  typeof n == `function` &&
                    ((this.onRejected = n), (this.callRejected = this.otherCallRejected)));
              }
              function d(e, t, n) {
                r(function () {
                  var r;
                  try {
                    r = t(n);
                  } catch (t) {
                    return a.reject(e, t);
                  }
                  r === e
                    ? a.reject(e, TypeError(`Cannot resolve promise with itself`))
                    : a.resolve(e, r);
                });
              }
              function f(e) {
                var t = e && e.then;
                if (e && (typeof e == `object` || typeof e == `function`) && typeof t == `function`)
                  return function () {
                    t.apply(e, arguments);
                  };
              }
              function p(e, t) {
                var n = !1;
                function r(t) {
                  n || ((n = !0), a.reject(e, t));
                }
                function i(t) {
                  n || ((n = !0), a.resolve(e, t));
                }
                var o = m(function () {
                  t(i, r);
                });
                o.status === `error` && r(o.value);
              }
              function m(e, t) {
                var n = {};
                try {
                  ((n.value = e(t)), (n.status = `success`));
                } catch (e) {
                  ((n.status = `error`), (n.value = e));
                }
                return n;
              }
              (((t.exports = l).prototype.finally = function (e) {
                if (typeof e != `function`) return this;
                var t = this.constructor;
                return this.then(
                  function (n) {
                    return t.resolve(e()).then(function () {
                      return n;
                    });
                  },
                  function (n) {
                    return t.resolve(e()).then(function () {
                      throw n;
                    });
                  },
                );
              }),
                (l.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (l.prototype.then = function (e, t) {
                  if (
                    (typeof e != `function` && this.state === s) ||
                    (typeof t != `function` && this.state === o)
                  )
                    return this;
                  var n = new this.constructor(i);
                  return (
                    this.state === c
                      ? this.queue.push(new u(n, e, t))
                      : d(n, this.state === s ? e : t, this.outcome),
                    n
                  );
                }),
                (u.prototype.callFulfilled = function (e) {
                  a.resolve(this.promise, e);
                }),
                (u.prototype.otherCallFulfilled = function (e) {
                  d(this.promise, this.onFulfilled, e);
                }),
                (u.prototype.callRejected = function (e) {
                  a.reject(this.promise, e);
                }),
                (u.prototype.otherCallRejected = function (e) {
                  d(this.promise, this.onRejected, e);
                }),
                (a.resolve = function (e, t) {
                  var n = m(f, t);
                  if (n.status === `error`) return a.reject(e, n.value);
                  var r = n.value;
                  if (r) p(e, r);
                  else {
                    ((e.state = s), (e.outcome = t));
                    for (var i = -1, o = e.queue.length; ++i < o;) e.queue[i].callFulfilled(t);
                  }
                  return e;
                }),
                (a.reject = function (e, t) {
                  ((e.state = o), (e.outcome = t));
                  for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
                  return e;
                }),
                (l.resolve = function (e) {
                  return e instanceof this ? e : a.resolve(new this(i), e);
                }),
                (l.reject = function (e) {
                  var t = new this(i);
                  return a.reject(t, e);
                }),
                (l.all = function (e) {
                  var t = this;
                  if (Object.prototype.toString.call(e) !== `[object Array]`)
                    return this.reject(TypeError(`must be an array`));
                  var n = e.length,
                    r = !1;
                  if (!n) return this.resolve([]);
                  for (var o = Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
                  return l;
                  function u(e, i) {
                    t.resolve(e).then(
                      function (e) {
                        ((o[i] = e), ++s !== n || r || ((r = !0), a.resolve(l, o)));
                      },
                      function (e) {
                        r || ((r = !0), a.reject(l, e));
                      },
                    );
                  }
                }),
                (l.race = function (e) {
                  var t = this;
                  if (Object.prototype.toString.call(e) !== `[object Array]`)
                    return this.reject(TypeError(`must be an array`));
                  var n = e.length,
                    r = !1;
                  if (!n) return this.resolve([]);
                  for (var o = -1, s = new this(i); ++o < n;)
                    ((c = e[o]),
                      t.resolve(c).then(
                        function (e) {
                          r || ((r = !0), a.resolve(s, e));
                        },
                        function (e) {
                          r || ((r = !0), a.reject(s, e));
                        },
                      ));
                  var c;
                  return s;
                }));
            },
            { immediate: 36 },
          ],
          38: [
            function (e, t, n) {
              var r = {};
              ((0, e(`./lib/utils/common`).assign)(
                r,
                e(`./lib/deflate`),
                e(`./lib/inflate`),
                e(`./lib/zlib/constants`),
              ),
                (t.exports = r));
            },
            {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44,
            },
          ],
          39: [
            function (e, t, n) {
              var r = e(`./zlib/deflate`),
                i = e(`./utils/common`),
                a = e(`./utils/strings`),
                o = e(`./zlib/messages`),
                s = e(`./zlib/zstream`),
                c = Object.prototype.toString,
                l = 0,
                u = -1,
                d = 0,
                f = 8;
              function p(e) {
                if (!(this instanceof p)) return new p(e);
                this.options = i.assign(
                  {
                    level: u,
                    method: f,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: d,
                    to: ``,
                  },
                  e || {},
                );
                var t = this.options;
                (t.raw && 0 < t.windowBits
                  ? (t.windowBits = -t.windowBits)
                  : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16),
                  (this.err = 0),
                  (this.msg = ``),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new s()),
                  (this.strm.avail_out = 0));
                var n = r.deflateInit2(
                  this.strm,
                  t.level,
                  t.method,
                  t.windowBits,
                  t.memLevel,
                  t.strategy,
                );
                if (n !== l) throw Error(o[n]);
                if ((t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary)) {
                  var m =
                    typeof t.dictionary == `string`
                      ? a.string2buf(t.dictionary)
                      : c.call(t.dictionary) === `[object ArrayBuffer]`
                        ? new Uint8Array(t.dictionary)
                        : t.dictionary;
                  if ((n = r.deflateSetDictionary(this.strm, m)) !== l) throw Error(o[n]);
                  this._dict_set = !0;
                }
              }
              function m(e, t) {
                var n = new p(t);
                if ((n.push(e, !0), n.err)) throw n.msg || o[n.err];
                return n.result;
              }
              ((p.prototype.push = function (e, t) {
                var n,
                  o,
                  s = this.strm,
                  u = this.options.chunkSize;
                if (this.ended) return !1;
                ((o = t === ~~t ? t : !0 === t ? 4 : 0),
                  (s.input =
                    typeof e == `string`
                      ? a.string2buf(e)
                      : c.call(e) === `[object ArrayBuffer]`
                        ? new Uint8Array(e)
                        : e),
                  (s.next_in = 0),
                  (s.avail_in = s.input.length));
                do {
                  if (
                    (s.avail_out === 0 &&
                      ((s.output = new i.Buf8(u)), (s.next_out = 0), (s.avail_out = u)),
                    (n = r.deflate(s, o)) !== 1 && n !== l)
                  )
                    return (this.onEnd(n), !(this.ended = !0));
                  (s.avail_out !== 0 && (s.avail_in !== 0 || (o !== 4 && o !== 2))) ||
                    (this.options.to === `string`
                      ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out)))
                      : this.onData(i.shrinkBuf(s.output, s.next_out)));
                } while ((0 < s.avail_in || s.avail_out === 0) && n !== 1);
                return o === 4
                  ? ((n = r.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === l)
                  : o !== 2 || (this.onEnd(l), !(s.avail_out = 0));
              }),
                (p.prototype.onData = function (e) {
                  this.chunks.push(e);
                }),
                (p.prototype.onEnd = function (e) {
                  (e === l &&
                    (this.result =
                      this.options.to === `string`
                        ? this.chunks.join(``)
                        : i.flattenChunks(this.chunks)),
                    (this.chunks = []),
                    (this.err = e),
                    (this.msg = this.strm.msg));
                }),
                (n.Deflate = p),
                (n.deflate = m),
                (n.deflateRaw = function (e, t) {
                  return (((t ||= {}).raw = !0), m(e, t));
                }),
                (n.gzip = function (e, t) {
                  return (((t ||= {}).gzip = !0), m(e, t));
                }));
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          40: [
            function (e, t, n) {
              var r = e(`./zlib/inflate`),
                i = e(`./utils/common`),
                a = e(`./utils/strings`),
                o = e(`./zlib/constants`),
                s = e(`./zlib/messages`),
                c = e(`./zlib/zstream`),
                l = e(`./zlib/gzheader`),
                u = Object.prototype.toString;
              function d(e) {
                if (!(this instanceof d)) return new d(e);
                this.options = i.assign({ chunkSize: 16384, windowBits: 0, to: `` }, e || {});
                var t = this.options;
                (t.raw &&
                  0 <= t.windowBits &&
                  t.windowBits < 16 &&
                  ((t.windowBits = -t.windowBits), t.windowBits === 0 && (t.windowBits = -15)),
                  !(0 <= t.windowBits && t.windowBits < 16) ||
                    (e && e.windowBits) ||
                    (t.windowBits += 32),
                  15 < t.windowBits &&
                    t.windowBits < 48 &&
                    !(15 & t.windowBits) &&
                    (t.windowBits |= 15),
                  (this.err = 0),
                  (this.msg = ``),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new c()),
                  (this.strm.avail_out = 0));
                var n = r.inflateInit2(this.strm, t.windowBits);
                if (n !== o.Z_OK) throw Error(s[n]);
                ((this.header = new l()), r.inflateGetHeader(this.strm, this.header));
              }
              function f(e, t) {
                var n = new d(t);
                if ((n.push(e, !0), n.err)) throw n.msg || s[n.err];
                return n.result;
              }
              ((d.prototype.push = function (e, t) {
                var n,
                  s,
                  c,
                  l,
                  d,
                  f,
                  p = this.strm,
                  m = this.options.chunkSize,
                  h = this.options.dictionary,
                  g = !1;
                if (this.ended) return !1;
                ((s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH),
                  (p.input =
                    typeof e == `string`
                      ? a.binstring2buf(e)
                      : u.call(e) === `[object ArrayBuffer]`
                        ? new Uint8Array(e)
                        : e),
                  (p.next_in = 0),
                  (p.avail_in = p.input.length));
                do {
                  if (
                    (p.avail_out === 0 &&
                      ((p.output = new i.Buf8(m)), (p.next_out = 0), (p.avail_out = m)),
                    (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
                      h &&
                      ((f =
                        typeof h == `string`
                          ? a.string2buf(h)
                          : u.call(h) === `[object ArrayBuffer]`
                            ? new Uint8Array(h)
                            : h),
                      (n = r.inflateSetDictionary(this.strm, f))),
                    n === o.Z_BUF_ERROR && !0 === g && ((n = o.Z_OK), (g = !1)),
                    n !== o.Z_STREAM_END && n !== o.Z_OK)
                  )
                    return (this.onEnd(n), !(this.ended = !0));
                  (p.next_out &&
                    ((p.avail_out !== 0 &&
                      n !== o.Z_STREAM_END &&
                      (p.avail_in !== 0 || (s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH))) ||
                      (this.options.to === `string`
                        ? ((c = a.utf8border(p.output, p.next_out)),
                          (l = p.next_out - c),
                          (d = a.buf2string(p.output, c)),
                          (p.next_out = l),
                          (p.avail_out = m - l),
                          l && i.arraySet(p.output, p.output, c, l, 0),
                          this.onData(d))
                        : this.onData(i.shrinkBuf(p.output, p.next_out)))),
                    p.avail_in === 0 && p.avail_out === 0 && (g = !0));
                } while ((0 < p.avail_in || p.avail_out === 0) && n !== o.Z_STREAM_END);
                return (
                  n === o.Z_STREAM_END && (s = o.Z_FINISH),
                  s === o.Z_FINISH
                    ? ((n = r.inflateEnd(this.strm)),
                      this.onEnd(n),
                      (this.ended = !0),
                      n === o.Z_OK)
                    : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(p.avail_out = 0))
                );
              }),
                (d.prototype.onData = function (e) {
                  this.chunks.push(e);
                }),
                (d.prototype.onEnd = function (e) {
                  (e === o.Z_OK &&
                    (this.result =
                      this.options.to === `string`
                        ? this.chunks.join(``)
                        : i.flattenChunks(this.chunks)),
                    (this.chunks = []),
                    (this.err = e),
                    (this.msg = this.strm.msg));
                }),
                (n.Inflate = d),
                (n.inflate = f),
                (n.inflateRaw = function (e, t) {
                  return (((t ||= {}).raw = !0), f(e, t));
                }),
                (n.ungzip = f));
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53,
            },
          ],
          41: [
            function (e, t, n) {
              var r =
                typeof Uint8Array < `u` && typeof Uint16Array < `u` && typeof Int32Array < `u`;
              ((n.assign = function (e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                  var n = t.shift();
                  if (n) {
                    if (typeof n != `object`) throw TypeError(n + `must be non-object`);
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                  }
                }
                return e;
              }),
                (n.shrinkBuf = function (e, t) {
                  return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
                }));
              var i = {
                  arraySet: function (e, t, n, r, i) {
                    if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
                    else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
                  },
                  flattenChunks: function (e) {
                    for (var t = (r = 0), n = e.length, r, i, a, o; t < n; t++) r += e[t].length;
                    for (o = new Uint8Array(r), t = i = 0, n = e.length; t < n; t++)
                      ((a = e[t]), o.set(a, i), (i += a.length));
                    return o;
                  },
                },
                a = {
                  arraySet: function (e, t, n, r, i) {
                    for (var a = 0; a < r; a++) e[i + a] = t[n + a];
                  },
                  flattenChunks: function (e) {
                    return [].concat.apply([], e);
                  },
                };
              ((n.setTyped = function (e) {
                e
                  ? ((n.Buf8 = Uint8Array),
                    (n.Buf16 = Uint16Array),
                    (n.Buf32 = Int32Array),
                    n.assign(n, i))
                  : ((n.Buf8 = Array), (n.Buf16 = Array), (n.Buf32 = Array), n.assign(n, a));
              }),
                n.setTyped(r));
            },
            {},
          ],
          42: [
            function (e, t, n) {
              var r = e(`./common`),
                i = !0,
                a = !0;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch {
                i = !1;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch {
                a = !1;
              }
              for (var o = new r.Buf8(256), s = 0; s < 256; s++)
                o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;
              function c(e, t) {
                if (t < 65537 && ((e.subarray && a) || (!e.subarray && i)))
                  return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
                for (var n = ``, o = 0; o < t; o++) n += String.fromCharCode(e[o]);
                return n;
              }
              ((o[254] = o[254] = 1),
                (n.string2buf = function (e) {
                  var t,
                    n,
                    i,
                    a,
                    o,
                    s = e.length,
                    c = 0;
                  for (a = 0; a < s; a++)
                    ((64512 & (n = e.charCodeAt(a))) == 55296 &&
                      a + 1 < s &&
                      (64512 & (i = e.charCodeAt(a + 1))) == 56320 &&
                      ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++),
                      (c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4));
                  for (t = new r.Buf8(c), a = o = 0; o < c; a++)
                    ((64512 & (n = e.charCodeAt(a))) == 55296 &&
                      a + 1 < s &&
                      (64512 & (i = e.charCodeAt(a + 1))) == 56320 &&
                      ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), a++),
                      n < 128
                        ? (t[o++] = n)
                        : (n < 2048
                            ? (t[o++] = 192 | (n >>> 6))
                            : (n < 65536
                                ? (t[o++] = 224 | (n >>> 12))
                                : ((t[o++] = 240 | (n >>> 18)), (t[o++] = 128 | ((n >>> 12) & 63))),
                              (t[o++] = 128 | ((n >>> 6) & 63))),
                          (t[o++] = 128 | (63 & n))));
                  return t;
                }),
                (n.buf2binstring = function (e) {
                  return c(e, e.length);
                }),
                (n.binstring2buf = function (e) {
                  for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++)
                    t[n] = e.charCodeAt(n);
                  return t;
                }),
                (n.buf2string = function (e, t) {
                  var n,
                    r,
                    i,
                    a,
                    s = t || e.length,
                    l = Array(2 * s);
                  for (n = r = 0; n < s;)
                    if ((i = e[n++]) < 128) l[r++] = i;
                    else if (4 < (a = o[i])) ((l[r++] = 65533), (n += a - 1));
                    else {
                      for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && n < s;)
                        ((i = (i << 6) | (63 & e[n++])), a--);
                      1 < a
                        ? (l[r++] = 65533)
                        : i < 65536
                          ? (l[r++] = i)
                          : ((i -= 65536),
                            (l[r++] = 55296 | ((i >> 10) & 1023)),
                            (l[r++] = 56320 | (1023 & i)));
                    }
                  return c(l, r);
                }),
                (n.utf8border = function (e, t) {
                  var n;
                  for (
                    (t ||= e.length) > e.length && (t = e.length), n = t - 1;
                    0 <= n && (192 & e[n]) == 128;
                  )
                    n--;
                  return n < 0 || n === 0 ? t : n + o[e[n]] > t ? n : t;
                }));
            },
            { "./common": 41 },
          ],
          43: [
            function (e, t, n) {
              t.exports = function (e, t, n, r) {
                for (var i = 65535 & e, a = (e >>> 16) & 65535, o = 0; n !== 0;) {
                  for (n -= o = 2e3 < n ? 2e3 : n; (a = (a + (i = (i + t[r++]) | 0)) | 0), --o;);
                  ((i %= 65521), (a %= 65521));
                }
                return i | (a << 16);
              };
            },
            {},
          ],
          44: [
            function (e, t, n) {
              t.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8,
              };
            },
            {},
          ],
          45: [
            function (e, t, n) {
              var r = (function () {
                for (var e, t = [], n = 0; n < 256; n++) {
                  e = n;
                  for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                  t[n] = e;
                }
                return t;
              })();
              t.exports = function (e, t, n, i) {
                var a = r,
                  o = i + n;
                e ^= -1;
                for (var s = i; s < o; s++) e = (e >>> 8) ^ a[255 & (e ^ t[s])];
                return -1 ^ e;
              };
            },
            {},
          ],
          46: [
            function (e, t, n) {
              var r,
                i = e(`../utils/common`),
                a = e(`./trees`),
                o = e(`./adler32`),
                s = e(`./crc32`),
                c = e(`./messages`),
                l = 0,
                u = 4,
                d = 0,
                f = -2,
                p = -1,
                m = 4,
                h = 2,
                g = 8,
                _ = 9,
                v = 286,
                y = 30,
                b = 19,
                x = 2 * v + 1,
                S = 15,
                C = 3,
                w = 258,
                T = w + C + 1,
                E = 42,
                D = 113,
                O = 1,
                k = 2,
                A = 3,
                j = 4;
              function M(e, t) {
                return ((e.msg = c[t]), t);
              }
              function N(e) {
                return (e << 1) - (4 < e ? 9 : 0);
              }
              function P(e) {
                for (var t = e.length; 0 <= --t;) e[t] = 0;
              }
              function F(e) {
                var t = e.state,
                  n = t.pending;
                (n > e.avail_out && (n = e.avail_out),
                  n !== 0 &&
                    (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
                    (e.next_out += n),
                    (t.pending_out += n),
                    (e.total_out += n),
                    (e.avail_out -= n),
                    (t.pending -= n),
                    t.pending === 0 && (t.pending_out = 0)));
              }
              function I(e, t) {
                (a._tr_flush_block(
                  e,
                  0 <= e.block_start ? e.block_start : -1,
                  e.strstart - e.block_start,
                  t,
                ),
                  (e.block_start = e.strstart),
                  F(e.strm));
              }
              function L(e, t) {
                e.pending_buf[e.pending++] = t;
              }
              function R(e, t) {
                ((e.pending_buf[e.pending++] = (t >>> 8) & 255),
                  (e.pending_buf[e.pending++] = 255 & t));
              }
              function z(e, t) {
                var n,
                  r,
                  i = e.max_chain_length,
                  a = e.strstart,
                  o = e.prev_length,
                  s = e.nice_match,
                  c = e.strstart > e.w_size - T ? e.strstart - (e.w_size - T) : 0,
                  l = e.window,
                  u = e.w_mask,
                  d = e.prev,
                  f = e.strstart + w,
                  p = l[a + o - 1],
                  m = l[a + o];
                (e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead));
                do
                  if (
                    l[(n = t) + o] === m &&
                    l[n + o - 1] === p &&
                    l[n] === l[a] &&
                    l[++n] === l[a + 1]
                  ) {
                    ((a += 2), n++);
                    do;
                    while (
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      l[++a] === l[++n] &&
                      a < f
                    );
                    if (((r = w - (f - a)), (a = f - w), o < r)) {
                      if (((e.match_start = t), s <= (o = r))) break;
                      ((p = l[a + o - 1]), (m = l[a + o]));
                    }
                  }
                while ((t = d[t & u]) > c && --i != 0);
                return o <= e.lookahead ? o : e.lookahead;
              }
              function B(e) {
                var t,
                  n,
                  r,
                  a,
                  c,
                  l,
                  u,
                  d,
                  f,
                  p,
                  m = e.w_size;
                do {
                  if (((a = e.window_size - e.lookahead - e.strstart), e.strstart >= m + (m - T))) {
                    for (
                      i.arraySet(e.window, e.window, m, m, 0),
                        e.match_start -= m,
                        e.strstart -= m,
                        e.block_start -= m,
                        t = n = e.hash_size;
                      (r = e.head[--t]), (e.head[t] = m <= r ? r - m : 0), --n;
                    );
                    for (t = n = m; (r = e.prev[--t]), (e.prev[t] = m <= r ? r - m : 0), --n;);
                    a += m;
                  }
                  if (e.strm.avail_in === 0) break;
                  if (
                    ((l = e.strm),
                    (u = e.window),
                    (d = e.strstart + e.lookahead),
                    (f = a),
                    (p = void 0),
                    (p = l.avail_in),
                    f < p && (p = f),
                    (n =
                      p === 0
                        ? 0
                        : ((l.avail_in -= p),
                          i.arraySet(u, l.input, l.next_in, p, d),
                          l.state.wrap === 1
                            ? (l.adler = o(l.adler, u, p, d))
                            : l.state.wrap === 2 && (l.adler = s(l.adler, u, p, d)),
                          (l.next_in += p),
                          (l.total_in += p),
                          p)),
                    (e.lookahead += n),
                    e.lookahead + e.insert >= C)
                  )
                    for (
                      c = e.strstart - e.insert,
                        e.ins_h = e.window[c],
                        e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[c + 1]) & e.hash_mask;
                      e.insert &&
                      ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[c + C - 1]) & e.hash_mask),
                      (e.prev[c & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = c),
                      c++,
                      e.insert--,
                      !(e.lookahead + e.insert < C));
                    );
                } while (e.lookahead < T && e.strm.avail_in !== 0);
              }
              function V(e, t) {
                for (var n, r; ;) {
                  if (e.lookahead < T) {
                    if ((B(e), e.lookahead < T && t === l)) return O;
                    if (e.lookahead === 0) break;
                  }
                  if (
                    ((n = 0),
                    e.lookahead >= C &&
                      ((e.ins_h =
                        ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + C - 1]) & e.hash_mask),
                      (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = e.strstart)),
                    n !== 0 && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n)),
                    e.match_length >= C)
                  ) {
                    if (
                      ((r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - C)),
                      (e.lookahead -= e.match_length),
                      e.match_length <= e.max_lazy_match && e.lookahead >= C)
                    ) {
                      for (
                        e.match_length--;
                        e.strstart++,
                          (e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + C - 1]) &
                            e.hash_mask),
                          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart),
                          --e.match_length != 0;
                      );
                      e.strstart++;
                    } else
                      ((e.strstart += e.match_length),
                        (e.match_length = 0),
                        (e.ins_h = e.window[e.strstart]),
                        (e.ins_h =
                          ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask));
                  } else
                    ((r = a._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++);
                  if (r && (I(e, !1), e.strm.avail_out === 0)) return O;
                }
                return (
                  (e.insert = e.strstart < C - 1 ? e.strstart : C - 1),
                  t === u
                    ? (I(e, !0), e.strm.avail_out === 0 ? A : j)
                    : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
                      ? O
                      : k
                );
              }
              function H(e, t) {
                for (var n, r, i; ;) {
                  if (e.lookahead < T) {
                    if ((B(e), e.lookahead < T && t === l)) return O;
                    if (e.lookahead === 0) break;
                  }
                  if (
                    ((n = 0),
                    e.lookahead >= C &&
                      ((e.ins_h =
                        ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + C - 1]) & e.hash_mask),
                      (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                      (e.head[e.ins_h] = e.strstart)),
                    (e.prev_length = e.match_length),
                    (e.prev_match = e.match_start),
                    (e.match_length = C - 1),
                    n !== 0 &&
                      e.prev_length < e.max_lazy_match &&
                      e.strstart - n <= e.w_size - T &&
                      ((e.match_length = z(e, n)),
                      e.match_length <= 5 &&
                        (e.strategy === 1 ||
                          (e.match_length === C && 4096 < e.strstart - e.match_start)) &&
                        (e.match_length = C - 1)),
                    e.prev_length >= C && e.match_length <= e.prev_length)
                  ) {
                    for (
                      i = e.strstart + e.lookahead - C,
                        r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C),
                        e.lookahead -= e.prev_length - 1,
                        e.prev_length -= 2;
                      ++e.strstart <= i &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + C - 1]) & e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                        --e.prev_length != 0;
                    );
                    if (
                      ((e.match_available = 0),
                      (e.match_length = C - 1),
                      e.strstart++,
                      r && (I(e, !1), e.strm.avail_out === 0))
                    )
                      return O;
                  } else if (e.match_available) {
                    if (
                      ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && I(e, !1),
                      e.strstart++,
                      e.lookahead--,
                      e.strm.avail_out === 0)
                    )
                      return O;
                  } else ((e.match_available = 1), e.strstart++, e.lookahead--);
                }
                return (
                  (e.match_available &&= ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])), 0)),
                  (e.insert = e.strstart < C - 1 ? e.strstart : C - 1),
                  t === u
                    ? (I(e, !0), e.strm.avail_out === 0 ? A : j)
                    : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
                      ? O
                      : k
                );
              }
              function U(e, t, n, r, i) {
                ((this.good_length = e),
                  (this.max_lazy = t),
                  (this.nice_length = n),
                  (this.max_chain = r),
                  (this.func = i));
              }
              function W() {
                ((this.strm = null),
                  (this.status = 0),
                  (this.pending_buf = null),
                  (this.pending_buf_size = 0),
                  (this.pending_out = 0),
                  (this.pending = 0),
                  (this.wrap = 0),
                  (this.gzhead = null),
                  (this.gzindex = 0),
                  (this.method = g),
                  (this.last_flush = -1),
                  (this.w_size = 0),
                  (this.w_bits = 0),
                  (this.w_mask = 0),
                  (this.window = null),
                  (this.window_size = 0),
                  (this.prev = null),
                  (this.head = null),
                  (this.ins_h = 0),
                  (this.hash_size = 0),
                  (this.hash_bits = 0),
                  (this.hash_mask = 0),
                  (this.hash_shift = 0),
                  (this.block_start = 0),
                  (this.match_length = 0),
                  (this.prev_match = 0),
                  (this.match_available = 0),
                  (this.strstart = 0),
                  (this.match_start = 0),
                  (this.lookahead = 0),
                  (this.prev_length = 0),
                  (this.max_chain_length = 0),
                  (this.max_lazy_match = 0),
                  (this.level = 0),
                  (this.strategy = 0),
                  (this.good_match = 0),
                  (this.nice_match = 0),
                  (this.dyn_ltree = new i.Buf16(2 * x)),
                  (this.dyn_dtree = new i.Buf16(2 * (2 * y + 1))),
                  (this.bl_tree = new i.Buf16(2 * (2 * b + 1))),
                  P(this.dyn_ltree),
                  P(this.dyn_dtree),
                  P(this.bl_tree),
                  (this.l_desc = null),
                  (this.d_desc = null),
                  (this.bl_desc = null),
                  (this.bl_count = new i.Buf16(S + 1)),
                  (this.heap = new i.Buf16(2 * v + 1)),
                  P(this.heap),
                  (this.heap_len = 0),
                  (this.heap_max = 0),
                  (this.depth = new i.Buf16(2 * v + 1)),
                  P(this.depth),
                  (this.l_buf = 0),
                  (this.lit_bufsize = 0),
                  (this.last_lit = 0),
                  (this.d_buf = 0),
                  (this.opt_len = 0),
                  (this.static_len = 0),
                  (this.matches = 0),
                  (this.insert = 0),
                  (this.bi_buf = 0),
                  (this.bi_valid = 0));
              }
              function G(e) {
                var t;
                return e && e.state
                  ? ((e.total_in = e.total_out = 0),
                    (e.data_type = h),
                    ((t = e.state).pending = 0),
                    (t.pending_out = 0),
                    t.wrap < 0 && (t.wrap = -t.wrap),
                    (t.status = t.wrap ? E : D),
                    (e.adler = t.wrap === 2 ? 0 : 1),
                    (t.last_flush = l),
                    a._tr_init(t),
                    d)
                  : M(e, f);
              }
              function K(e) {
                var t = G(e);
                return (
                  t === d &&
                    (function (e) {
                      ((e.window_size = 2 * e.w_size),
                        P(e.head),
                        (e.max_lazy_match = r[e.level].max_lazy),
                        (e.good_match = r[e.level].good_length),
                        (e.nice_match = r[e.level].nice_length),
                        (e.max_chain_length = r[e.level].max_chain),
                        (e.strstart = 0),
                        (e.block_start = 0),
                        (e.lookahead = 0),
                        (e.insert = 0),
                        (e.match_length = e.prev_length = C - 1),
                        (e.match_available = 0),
                        (e.ins_h = 0));
                    })(e.state),
                  t
                );
              }
              function q(e, t, n, r, a, o) {
                if (!e) return f;
                var s = 1;
                if (
                  (t === p && (t = 6),
                  r < 0 ? ((s = 0), (r = -r)) : 15 < r && ((s = 2), (r -= 16)),
                  a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o)
                )
                  return M(e, f);
                r === 8 && (r = 9);
                var c = new W();
                return (
                  ((e.state = c).strm = e),
                  (c.wrap = s),
                  (c.gzhead = null),
                  (c.w_bits = r),
                  (c.w_size = 1 << c.w_bits),
                  (c.w_mask = c.w_size - 1),
                  (c.hash_bits = a + 7),
                  (c.hash_size = 1 << c.hash_bits),
                  (c.hash_mask = c.hash_size - 1),
                  (c.hash_shift = ~~((c.hash_bits + C - 1) / C)),
                  (c.window = new i.Buf8(2 * c.w_size)),
                  (c.head = new i.Buf16(c.hash_size)),
                  (c.prev = new i.Buf16(c.w_size)),
                  (c.lit_bufsize = 1 << (a + 6)),
                  (c.pending_buf_size = 4 * c.lit_bufsize),
                  (c.pending_buf = new i.Buf8(c.pending_buf_size)),
                  (c.d_buf = 1 * c.lit_bufsize),
                  (c.l_buf = 3 * c.lit_bufsize),
                  (c.level = t),
                  (c.strategy = o),
                  (c.method = n),
                  K(e)
                );
              }
              ((r = [
                new U(0, 0, 0, 0, function (e, t) {
                  var n = 65535;
                  for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ;) {
                    if (e.lookahead <= 1) {
                      if ((B(e), e.lookahead === 0 && t === l)) return O;
                      if (e.lookahead === 0) break;
                    }
                    ((e.strstart += e.lookahead), (e.lookahead = 0));
                    var r = e.block_start + n;
                    if (
                      ((e.strstart === 0 || e.strstart >= r) &&
                        ((e.lookahead = e.strstart - r),
                        (e.strstart = r),
                        I(e, !1),
                        e.strm.avail_out === 0)) ||
                      (e.strstart - e.block_start >= e.w_size - T &&
                        (I(e, !1), e.strm.avail_out === 0))
                    )
                      return O;
                  }
                  return (
                    (e.insert = 0),
                    t === u
                      ? (I(e, !0), e.strm.avail_out === 0 ? A : j)
                      : (e.strstart > e.block_start && (I(e, !1), e.strm.avail_out), O)
                  );
                }),
                new U(4, 4, 8, 4, V),
                new U(4, 5, 16, 8, V),
                new U(4, 6, 32, 32, V),
                new U(4, 4, 16, 16, H),
                new U(8, 16, 32, 32, H),
                new U(8, 16, 128, 128, H),
                new U(8, 32, 128, 256, H),
                new U(32, 128, 258, 1024, H),
                new U(32, 258, 258, 4096, H),
              ]),
                (n.deflateInit = function (e, t) {
                  return q(e, t, g, 15, 8, 0);
                }),
                (n.deflateInit2 = q),
                (n.deflateReset = K),
                (n.deflateResetKeep = G),
                (n.deflateSetHeader = function (e, t) {
                  return e && e.state && e.state.wrap === 2 ? ((e.state.gzhead = t), d) : f;
                }),
                (n.deflate = function (e, t) {
                  var n, i, o, c;
                  if (!e || !e.state || 5 < t || t < 0) return e ? M(e, f) : f;
                  if (
                    ((i = e.state),
                    !e.output || (!e.input && e.avail_in !== 0) || (i.status === 666 && t !== u))
                  )
                    return M(e, e.avail_out === 0 ? -5 : f);
                  if (((i.strm = e), (n = i.last_flush), (i.last_flush = t), i.status === E)) {
                    if (i.wrap === 2)
                      ((e.adler = 0),
                        L(i, 31),
                        L(i, 139),
                        L(i, 8),
                        i.gzhead
                          ? (L(
                              i,
                              +!!i.gzhead.text +
                                (i.gzhead.hcrc ? 2 : 0) +
                                (i.gzhead.extra ? 4 : 0) +
                                (i.gzhead.name ? 8 : 0) +
                                (i.gzhead.comment ? 16 : 0),
                            ),
                            L(i, 255 & i.gzhead.time),
                            L(i, (i.gzhead.time >> 8) & 255),
                            L(i, (i.gzhead.time >> 16) & 255),
                            L(i, (i.gzhead.time >> 24) & 255),
                            L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0),
                            L(i, 255 & i.gzhead.os),
                            i.gzhead.extra &&
                              i.gzhead.extra.length &&
                              (L(i, 255 & i.gzhead.extra.length),
                              L(i, (i.gzhead.extra.length >> 8) & 255)),
                            i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)),
                            (i.gzindex = 0),
                            (i.status = 69))
                          : (L(i, 0),
                            L(i, 0),
                            L(i, 0),
                            L(i, 0),
                            L(i, 0),
                            L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0),
                            L(i, 3),
                            (i.status = D)));
                    else {
                      var p = (g + ((i.w_bits - 8) << 4)) << 8;
                      ((p |=
                        (2 <= i.strategy || i.level < 2
                          ? 0
                          : i.level < 6
                            ? 1
                            : i.level === 6
                              ? 2
                              : 3) << 6),
                        i.strstart !== 0 && (p |= 32),
                        (p += 31 - (p % 31)),
                        (i.status = D),
                        R(i, p),
                        i.strstart !== 0 && (R(i, e.adler >>> 16), R(i, 65535 & e.adler)),
                        (e.adler = 1));
                    }
                  }
                  if (i.status === 69) {
                    if (i.gzhead.extra) {
                      for (
                        o = i.pending;
                        i.gzindex < (65535 & i.gzhead.extra.length) &&
                        (i.pending !== i.pending_buf_size ||
                          (i.gzhead.hcrc &&
                            i.pending > o &&
                            (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                          F(e),
                          (o = i.pending),
                          i.pending !== i.pending_buf_size));
                      )
                        (L(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++);
                      (i.gzhead.hcrc &&
                        i.pending > o &&
                        (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                        i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = 73)));
                    } else i.status = 73;
                  }
                  if (i.status === 73) {
                    if (i.gzhead.name) {
                      o = i.pending;
                      do {
                        if (
                          i.pending === i.pending_buf_size &&
                          (i.gzhead.hcrc &&
                            i.pending > o &&
                            (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                          F(e),
                          (o = i.pending),
                          i.pending === i.pending_buf_size)
                        ) {
                          c = 1;
                          break;
                        }
                        ((c =
                          i.gzindex < i.gzhead.name.length
                            ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                            : 0),
                          L(i, c));
                      } while (c !== 0);
                      (i.gzhead.hcrc &&
                        i.pending > o &&
                        (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                        c === 0 && ((i.gzindex = 0), (i.status = 91)));
                    } else i.status = 91;
                  }
                  if (i.status === 91) {
                    if (i.gzhead.comment) {
                      o = i.pending;
                      do {
                        if (
                          i.pending === i.pending_buf_size &&
                          (i.gzhead.hcrc &&
                            i.pending > o &&
                            (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                          F(e),
                          (o = i.pending),
                          i.pending === i.pending_buf_size)
                        ) {
                          c = 1;
                          break;
                        }
                        ((c =
                          i.gzindex < i.gzhead.comment.length
                            ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                            : 0),
                          L(i, c));
                      } while (c !== 0);
                      (i.gzhead.hcrc &&
                        i.pending > o &&
                        (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)),
                        c === 0 && (i.status = 103));
                    } else i.status = 103;
                  }
                  if (
                    (i.status === 103 &&
                      (i.gzhead.hcrc
                        ? (i.pending + 2 > i.pending_buf_size && F(e),
                          i.pending + 2 <= i.pending_buf_size &&
                            (L(i, 255 & e.adler),
                            L(i, (e.adler >> 8) & 255),
                            (e.adler = 0),
                            (i.status = D)))
                        : (i.status = D)),
                    i.pending !== 0)
                  ) {
                    if ((F(e), e.avail_out === 0)) return ((i.last_flush = -1), d);
                  } else if (e.avail_in === 0 && N(t) <= N(n) && t !== u) return M(e, -5);
                  if (i.status === 666 && e.avail_in !== 0) return M(e, -5);
                  if (e.avail_in !== 0 || i.lookahead !== 0 || (t !== l && i.status !== 666)) {
                    var m =
                      i.strategy === 2
                        ? (function (e, t) {
                            for (var n; ;) {
                              if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
                                if (t === l) return O;
                                break;
                              }
                              if (
                                ((e.match_length = 0),
                                (n = a._tr_tally(e, 0, e.window[e.strstart])),
                                e.lookahead--,
                                e.strstart++,
                                n && (I(e, !1), e.strm.avail_out === 0))
                              )
                                return O;
                            }
                            return (
                              (e.insert = 0),
                              t === u
                                ? (I(e, !0), e.strm.avail_out === 0 ? A : j)
                                : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
                                  ? O
                                  : k
                            );
                          })(i, t)
                        : i.strategy === 3
                          ? (function (e, t) {
                              for (var n, r, i, o, s = e.window; ;) {
                                if (e.lookahead <= w) {
                                  if ((B(e), e.lookahead <= w && t === l)) return O;
                                  if (e.lookahead === 0) break;
                                }
                                if (
                                  ((e.match_length = 0),
                                  e.lookahead >= C &&
                                    0 < e.strstart &&
                                    (r = s[(i = e.strstart - 1)]) === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i])
                                ) {
                                  o = e.strstart + w;
                                  do;
                                  while (
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    i < o
                                  );
                                  ((e.match_length = w - (o - i)),
                                    e.match_length > e.lookahead && (e.match_length = e.lookahead));
                                }
                                if (
                                  (e.match_length >= C
                                    ? ((n = a._tr_tally(e, 1, e.match_length - C)),
                                      (e.lookahead -= e.match_length),
                                      (e.strstart += e.match_length),
                                      (e.match_length = 0))
                                    : ((n = a._tr_tally(e, 0, e.window[e.strstart])),
                                      e.lookahead--,
                                      e.strstart++),
                                  n && (I(e, !1), e.strm.avail_out === 0))
                                )
                                  return O;
                              }
                              return (
                                (e.insert = 0),
                                t === u
                                  ? (I(e, !0), e.strm.avail_out === 0 ? A : j)
                                  : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
                                    ? O
                                    : k
                              );
                            })(i, t)
                          : r[i.level].func(i, t);
                    if (((m !== A && m !== j) || (i.status = 666), m === O || m === A))
                      return (e.avail_out === 0 && (i.last_flush = -1), d);
                    if (
                      m === k &&
                      (t === 1
                        ? a._tr_align(i)
                        : t !== 5 &&
                          (a._tr_stored_block(i, 0, 0, !1),
                          t === 3 &&
                            (P(i.head),
                            i.lookahead === 0 &&
                              ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
                      F(e),
                      e.avail_out === 0)
                    )
                      return ((i.last_flush = -1), d);
                  }
                  return t === u
                    ? i.wrap <= 0
                      ? 1
                      : (i.wrap === 2
                          ? (L(i, 255 & e.adler),
                            L(i, (e.adler >> 8) & 255),
                            L(i, (e.adler >> 16) & 255),
                            L(i, (e.adler >> 24) & 255),
                            L(i, 255 & e.total_in),
                            L(i, (e.total_in >> 8) & 255),
                            L(i, (e.total_in >> 16) & 255),
                            L(i, (e.total_in >> 24) & 255))
                          : (R(i, e.adler >>> 16), R(i, 65535 & e.adler)),
                        F(e),
                        0 < i.wrap && (i.wrap = -i.wrap),
                        i.pending === 0 ? 1 : d)
                    : d;
                }),
                (n.deflateEnd = function (e) {
                  var t;
                  return e && e.state
                    ? (t = e.state.status) !== E &&
                      t !== 69 &&
                      t !== 73 &&
                      t !== 91 &&
                      t !== 103 &&
                      t !== D &&
                      t !== 666
                      ? M(e, f)
                      : ((e.state = null), t === D ? M(e, -3) : d)
                    : f;
                }),
                (n.deflateSetDictionary = function (e, t) {
                  var n,
                    r,
                    a,
                    s,
                    c,
                    l,
                    u,
                    p,
                    m = t.length;
                  if (
                    !e ||
                    !e.state ||
                    (s = (n = e.state).wrap) === 2 ||
                    (s === 1 && n.status !== E) ||
                    n.lookahead
                  )
                    return f;
                  for (
                    s === 1 && (e.adler = o(e.adler, t, m, 0)),
                      n.wrap = 0,
                      m >= n.w_size &&
                        (s === 0 &&
                          (P(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
                        (p = new i.Buf8(n.w_size)),
                        i.arraySet(p, t, m - n.w_size, n.w_size, 0),
                        (t = p),
                        (m = n.w_size)),
                      c = e.avail_in,
                      l = e.next_in,
                      u = e.input,
                      e.avail_in = m,
                      e.next_in = 0,
                      e.input = t,
                      B(n);
                    n.lookahead >= C;
                  ) {
                    for (
                      r = n.strstart, a = n.lookahead - (C - 1);
                      (n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[r + C - 1]) & n.hash_mask),
                        (n.prev[r & n.w_mask] = n.head[n.ins_h]),
                        (n.head[n.ins_h] = r),
                        r++,
                        --a;
                    );
                    ((n.strstart = r), (n.lookahead = C - 1), B(n));
                  }
                  return (
                    (n.strstart += n.lookahead),
                    (n.block_start = n.strstart),
                    (n.insert = n.lookahead),
                    (n.lookahead = 0),
                    (n.match_length = n.prev_length = C - 1),
                    (n.match_available = 0),
                    (e.next_in = l),
                    (e.input = u),
                    (e.avail_in = c),
                    (n.wrap = s),
                    d
                  );
                }),
                (n.deflateInfo = `pako deflate (from Nodeca project)`));
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52,
            },
          ],
          47: [
            function (e, t, n) {
              t.exports = function () {
                ((this.text = 0),
                  (this.time = 0),
                  (this.xflags = 0),
                  (this.os = 0),
                  (this.extra = null),
                  (this.extra_len = 0),
                  (this.name = ``),
                  (this.comment = ``),
                  (this.hcrc = 0),
                  (this.done = !1));
              };
            },
            {},
          ],
          48: [
            function (e, t, n) {
              t.exports = function (e, t) {
                var n = e.state,
                  r = e.next_in,
                  i,
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
                  b,
                  x,
                  S,
                  C,
                  w,
                  T = e.input,
                  E;
                ((i = r + (e.avail_in - 5)),
                  (a = e.next_out),
                  (E = e.output),
                  (o = a - (t - e.avail_out)),
                  (s = a + (e.avail_out - 257)),
                  (c = n.dmax),
                  (l = n.wsize),
                  (u = n.whave),
                  (d = n.wnext),
                  (f = n.window),
                  (p = n.hold),
                  (m = n.bits),
                  (h = n.lencode),
                  (g = n.distcode),
                  (_ = (1 << n.lenbits) - 1),
                  (v = (1 << n.distbits) - 1));
                e: do {
                  (m < 15 && ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
                    (y = h[p & _]));
                  t: for (;;) {
                    if (((p >>>= b = y >>> 24), (m -= b), (b = (y >>> 16) & 255) == 0))
                      E[a++] = 65535 & y;
                    else {
                      if (!(16 & b)) {
                        if (!(64 & b)) {
                          y = h[(65535 & y) + (p & ((1 << b) - 1))];
                          continue t;
                        }
                        if (32 & b) {
                          n.mode = 12;
                          break e;
                        }
                        ((e.msg = `invalid literal/length code`), (n.mode = 30));
                        break e;
                      }
                      ((x = 65535 & y),
                        (b &= 15) &&
                          (m < b && ((p += T[r++] << m), (m += 8)),
                          (x += p & ((1 << b) - 1)),
                          (p >>>= b),
                          (m -= b)),
                        m < 15 && ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
                        (y = g[p & v]));
                      r: for (;;) {
                        if (((p >>>= b = y >>> 24), (m -= b), !(16 & (b = (y >>> 16) & 255)))) {
                          if (!(64 & b)) {
                            y = g[(65535 & y) + (p & ((1 << b) - 1))];
                            continue r;
                          }
                          ((e.msg = `invalid distance code`), (n.mode = 30));
                          break e;
                        }
                        if (
                          ((S = 65535 & y),
                          m < (b &= 15) &&
                            ((p += T[r++] << m), (m += 8) < b && ((p += T[r++] << m), (m += 8))),
                          c < (S += p & ((1 << b) - 1)))
                        ) {
                          ((e.msg = `invalid distance too far back`), (n.mode = 30));
                          break e;
                        }
                        if (((p >>>= b), (m -= b), (b = a - o) < S)) {
                          if (u < (b = S - b) && n.sane) {
                            ((e.msg = `invalid distance too far back`), (n.mode = 30));
                            break e;
                          }
                          if (((w = f), (C = 0) === d)) {
                            if (((C += l - b), b < x)) {
                              for (x -= b; (E[a++] = f[C++]), --b;);
                              ((C = a - S), (w = E));
                            }
                          } else if (d < b) {
                            if (((C += l + d - b), (b -= d) < x)) {
                              for (x -= b; (E[a++] = f[C++]), --b;);
                              if (((C = 0), d < x)) {
                                for (x -= b = d; (E[a++] = f[C++]), --b;);
                                ((C = a - S), (w = E));
                              }
                            }
                          } else if (((C += d - b), b < x)) {
                            for (x -= b; (E[a++] = f[C++]), --b;);
                            ((C = a - S), (w = E));
                          }
                          for (; 2 < x;)
                            ((E[a++] = w[C++]), (E[a++] = w[C++]), (E[a++] = w[C++]), (x -= 3));
                          x && ((E[a++] = w[C++]), 1 < x && (E[a++] = w[C++]));
                        } else {
                          for (
                            C = a - S;
                            (E[a++] = E[C++]), (E[a++] = E[C++]), (E[a++] = E[C++]), 2 < (x -= 3);
                          );
                          x && ((E[a++] = E[C++]), 1 < x && (E[a++] = E[C++]));
                        }
                        break;
                      }
                    }
                    break;
                  }
                } while (r < i && a < s);
                ((r -= x = m >> 3),
                  (p &= (1 << (m -= x << 3)) - 1),
                  (e.next_in = r),
                  (e.next_out = a),
                  (e.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
                  (e.avail_out = a < s ? s - a + 257 : 257 - (a - s)),
                  (n.hold = p),
                  (n.bits = m));
              };
            },
            {},
          ],
          49: [
            function (e, t, n) {
              var r = e(`../utils/common`),
                i = e(`./adler32`),
                a = e(`./crc32`),
                o = e(`./inffast`),
                s = e(`./inftrees`),
                c = 1,
                l = 2,
                u = 0,
                d = -2,
                f = 1,
                p = 852,
                m = 592;
              function h(e) {
                return (
                  ((e >>> 24) & 255) + ((e >>> 8) & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                );
              }
              function g() {
                ((this.mode = 0),
                  (this.last = !1),
                  (this.wrap = 0),
                  (this.havedict = !1),
                  (this.flags = 0),
                  (this.dmax = 0),
                  (this.check = 0),
                  (this.total = 0),
                  (this.head = null),
                  (this.wbits = 0),
                  (this.wsize = 0),
                  (this.whave = 0),
                  (this.wnext = 0),
                  (this.window = null),
                  (this.hold = 0),
                  (this.bits = 0),
                  (this.length = 0),
                  (this.offset = 0),
                  (this.extra = 0),
                  (this.lencode = null),
                  (this.distcode = null),
                  (this.lenbits = 0),
                  (this.distbits = 0),
                  (this.ncode = 0),
                  (this.nlen = 0),
                  (this.ndist = 0),
                  (this.have = 0),
                  (this.next = null),
                  (this.lens = new r.Buf16(320)),
                  (this.work = new r.Buf16(288)),
                  (this.lendyn = null),
                  (this.distdyn = null),
                  (this.sane = 0),
                  (this.back = 0),
                  (this.was = 0));
              }
              function _(e) {
                var t;
                return e && e.state
                  ? ((t = e.state),
                    (e.total_in = e.total_out = t.total = 0),
                    (e.msg = ``),
                    t.wrap && (e.adler = 1 & t.wrap),
                    (t.mode = f),
                    (t.last = 0),
                    (t.havedict = 0),
                    (t.dmax = 32768),
                    (t.head = null),
                    (t.hold = 0),
                    (t.bits = 0),
                    (t.lencode = t.lendyn = new r.Buf32(p)),
                    (t.distcode = t.distdyn = new r.Buf32(m)),
                    (t.sane = 1),
                    (t.back = -1),
                    u)
                  : d;
              }
              function v(e) {
                var t;
                return e && e.state
                  ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), _(e))
                  : d;
              }
              function y(e, t) {
                var n, r;
                return e && e.state
                  ? ((r = e.state),
                    t < 0 ? ((n = 0), (t = -t)) : ((n = 1 + (t >> 4)), t < 48 && (t &= 15)),
                    t && (t < 8 || 15 < t)
                      ? d
                      : (r.window !== null && r.wbits !== t && (r.window = null),
                        (r.wrap = n),
                        (r.wbits = t),
                        v(e)))
                  : d;
              }
              function b(e, t) {
                var n, r;
                return e
                  ? ((r = new g()),
                    ((e.state = r).window = null),
                    (n = y(e, t)) !== u && (e.state = null),
                    n)
                  : d;
              }
              var x,
                S,
                C = !0;
              function w(e) {
                if (C) {
                  var t;
                  for (x = new r.Buf32(512), S = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                  for (; t < 256;) e.lens[t++] = 9;
                  for (; t < 280;) e.lens[t++] = 7;
                  for (; t < 288;) e.lens[t++] = 8;
                  for (s(c, e.lens, 0, 288, x, 0, e.work, { bits: 9 }), t = 0; t < 32;)
                    e.lens[t++] = 5;
                  (s(l, e.lens, 0, 32, S, 0, e.work, { bits: 5 }), (C = !1));
                }
                ((e.lencode = x), (e.lenbits = 9), (e.distcode = S), (e.distbits = 5));
              }
              function T(e, t, n, i) {
                var a,
                  o = e.state;
                return (
                  o.window === null &&
                    ((o.wsize = 1 << o.wbits),
                    (o.wnext = 0),
                    (o.whave = 0),
                    (o.window = new r.Buf8(o.wsize))),
                  i >= o.wsize
                    ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0),
                      (o.wnext = 0),
                      (o.whave = o.wsize))
                    : (i < (a = o.wsize - o.wnext) && (a = i),
                      r.arraySet(o.window, t, n - i, a, o.wnext),
                      (i -= a)
                        ? (r.arraySet(o.window, t, n - i, i, 0), (o.wnext = i), (o.whave = o.wsize))
                        : ((o.wnext += a),
                          o.wnext === o.wsize && (o.wnext = 0),
                          o.whave < o.wsize && (o.whave += a))),
                  0
                );
              }
              ((n.inflateReset = v),
                (n.inflateReset2 = y),
                (n.inflateResetKeep = _),
                (n.inflateInit = function (e) {
                  return b(e, 15);
                }),
                (n.inflateInit2 = b),
                (n.inflate = function (e, t) {
                  var n,
                    p,
                    m,
                    g,
                    _,
                    v,
                    y,
                    b,
                    x,
                    S,
                    C,
                    E,
                    D,
                    O,
                    k,
                    A,
                    j,
                    M,
                    N,
                    P,
                    F,
                    I,
                    L,
                    R,
                    z = 0,
                    B = new r.Buf8(4),
                    V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                  if (!e || !e.state || !e.output || (!e.input && e.avail_in !== 0)) return d;
                  ((n = e.state).mode === 12 && (n.mode = 13),
                    (_ = e.next_out),
                    (m = e.output),
                    (y = e.avail_out),
                    (g = e.next_in),
                    (p = e.input),
                    (v = e.avail_in),
                    (b = n.hold),
                    (x = n.bits),
                    (S = v),
                    (C = y),
                    (I = u));
                  e: for (;;)
                    switch (n.mode) {
                      case f:
                        if (n.wrap === 0) {
                          n.mode = 13;
                          break;
                        }
                        for (; x < 16;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if (2 & n.wrap && b === 35615) {
                          ((B[(n.check = 0)] = 255 & b),
                            (B[1] = (b >>> 8) & 255),
                            (n.check = a(n.check, B, 2, 0)),
                            (x = b = 0),
                            (n.mode = 2));
                          break;
                        }
                        if (
                          ((n.flags = 0),
                          n.head && (n.head.done = !1),
                          !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31)
                        ) {
                          ((e.msg = `incorrect header check`), (n.mode = 30));
                          break;
                        }
                        if ((15 & b) != 8) {
                          ((e.msg = `unknown compression method`), (n.mode = 30));
                          break;
                        }
                        if (((x -= 4), (F = 8 + (15 & (b >>>= 4))), n.wbits === 0)) n.wbits = F;
                        else if (F > n.wbits) {
                          ((e.msg = `invalid window size`), (n.mode = 30));
                          break;
                        }
                        ((n.dmax = 1 << F),
                          (e.adler = n.check = 1),
                          (n.mode = 512 & b ? 10 : 12),
                          (x = b = 0));
                        break;
                      case 2:
                        for (; x < 16;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if (((n.flags = b), (255 & n.flags) != 8)) {
                          ((e.msg = `unknown compression method`), (n.mode = 30));
                          break;
                        }
                        if (57344 & n.flags) {
                          ((e.msg = `unknown header flags set`), (n.mode = 30));
                          break;
                        }
                        (n.head && (n.head.text = (b >> 8) & 1),
                          512 & n.flags &&
                            ((B[0] = 255 & b),
                            (B[1] = (b >>> 8) & 255),
                            (n.check = a(n.check, B, 2, 0))),
                          (x = b = 0),
                          (n.mode = 3));
                      case 3:
                        for (; x < 32;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        (n.head && (n.head.time = b),
                          512 & n.flags &&
                            ((B[0] = 255 & b),
                            (B[1] = (b >>> 8) & 255),
                            (B[2] = (b >>> 16) & 255),
                            (B[3] = (b >>> 24) & 255),
                            (n.check = a(n.check, B, 4, 0))),
                          (x = b = 0),
                          (n.mode = 4));
                      case 4:
                        for (; x < 16;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        (n.head && ((n.head.xflags = 255 & b), (n.head.os = b >> 8)),
                          512 & n.flags &&
                            ((B[0] = 255 & b),
                            (B[1] = (b >>> 8) & 255),
                            (n.check = a(n.check, B, 2, 0))),
                          (x = b = 0),
                          (n.mode = 5));
                      case 5:
                        if (1024 & n.flags) {
                          for (; x < 16;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((n.length = b),
                            n.head && (n.head.extra_len = b),
                            512 & n.flags &&
                              ((B[0] = 255 & b),
                              (B[1] = (b >>> 8) & 255),
                              (n.check = a(n.check, B, 2, 0))),
                            (x = b = 0));
                        } else n.head && (n.head.extra = null);
                        n.mode = 6;
                      case 6:
                        if (
                          1024 & n.flags &&
                          (v < (E = n.length) && (E = v),
                          E &&
                            (n.head &&
                              ((F = n.head.extra_len - n.length),
                              n.head.extra || (n.head.extra = Array(n.head.extra_len)),
                              r.arraySet(n.head.extra, p, g, E, F)),
                            512 & n.flags && (n.check = a(n.check, p, E, g)),
                            (v -= E),
                            (g += E),
                            (n.length -= E)),
                          n.length)
                        )
                          break e;
                        ((n.length = 0), (n.mode = 7));
                      case 7:
                        if (2048 & n.flags) {
                          if (v === 0) break e;
                          for (
                            E = 0;
                            (F = p[g + E++]),
                              n.head &&
                                F &&
                                n.length < 65536 &&
                                (n.head.name += String.fromCharCode(F)),
                              F && E < v;
                          );
                          if (
                            (512 & n.flags && (n.check = a(n.check, p, E, g)),
                            (v -= E),
                            (g += E),
                            F)
                          )
                            break e;
                        } else n.head && (n.head.name = null);
                        ((n.length = 0), (n.mode = 8));
                      case 8:
                        if (4096 & n.flags) {
                          if (v === 0) break e;
                          for (
                            E = 0;
                            (F = p[g + E++]),
                              n.head &&
                                F &&
                                n.length < 65536 &&
                                (n.head.comment += String.fromCharCode(F)),
                              F && E < v;
                          );
                          if (
                            (512 & n.flags && (n.check = a(n.check, p, E, g)),
                            (v -= E),
                            (g += E),
                            F)
                          )
                            break e;
                        } else n.head && (n.head.comment = null);
                        n.mode = 9;
                      case 9:
                        if (512 & n.flags) {
                          for (; x < 16;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          if (b !== (65535 & n.check)) {
                            ((e.msg = `header crc mismatch`), (n.mode = 30));
                            break;
                          }
                          x = b = 0;
                        }
                        (n.head && ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                          (e.adler = n.check = 0),
                          (n.mode = 12));
                        break;
                      case 10:
                        for (; x < 32;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        ((e.adler = n.check = h(b)), (x = b = 0), (n.mode = 11));
                      case 11:
                        if (n.havedict === 0)
                          return (
                            (e.next_out = _),
                            (e.avail_out = y),
                            (e.next_in = g),
                            (e.avail_in = v),
                            (n.hold = b),
                            (n.bits = x),
                            2
                          );
                        ((e.adler = n.check = 1), (n.mode = 12));
                      case 12:
                        if (t === 5 || t === 6) break e;
                      case 13:
                        if (n.last) {
                          ((b >>>= 7 & x), (x -= 7 & x), (n.mode = 27));
                          break;
                        }
                        for (; x < 3;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        switch (((n.last = 1 & b), --x, 3 & (b >>>= 1))) {
                          case 0:
                            n.mode = 14;
                            break;
                          case 1:
                            if ((w(n), (n.mode = 20), t !== 6)) break;
                            ((b >>>= 2), (x -= 2));
                            break e;
                          case 2:
                            n.mode = 17;
                            break;
                          case 3:
                            ((e.msg = `invalid block type`), (n.mode = 30));
                        }
                        ((b >>>= 2), (x -= 2));
                        break;
                      case 14:
                        for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if ((65535 & b) != ((b >>> 16) ^ 65535)) {
                          ((e.msg = `invalid stored block lengths`), (n.mode = 30));
                          break;
                        }
                        if (((n.length = 65535 & b), (x = b = 0), (n.mode = 15), t === 6)) break e;
                      case 15:
                        n.mode = 16;
                      case 16:
                        if ((E = n.length)) {
                          if ((v < E && (E = v), y < E && (E = y), E === 0)) break e;
                          (r.arraySet(m, p, g, E, _),
                            (v -= E),
                            (g += E),
                            (y -= E),
                            (_ += E),
                            (n.length -= E));
                          break;
                        }
                        n.mode = 12;
                        break;
                      case 17:
                        for (; x < 14;) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if (
                          ((n.nlen = 257 + (31 & b)),
                          (b >>>= 5),
                          (x -= 5),
                          (n.ndist = 1 + (31 & b)),
                          (b >>>= 5),
                          (x -= 5),
                          (n.ncode = 4 + (15 & b)),
                          (b >>>= 4),
                          (x -= 4),
                          286 < n.nlen || 30 < n.ndist)
                        ) {
                          ((e.msg = `too many length or distance symbols`), (n.mode = 30));
                          break;
                        }
                        ((n.have = 0), (n.mode = 18));
                      case 18:
                        for (; n.have < n.ncode;) {
                          for (; x < 3;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((n.lens[V[n.have++]] = 7 & b), (b >>>= 3), (x -= 3));
                        }
                        for (; n.have < 19;) n.lens[V[n.have++]] = 0;
                        if (
                          ((n.lencode = n.lendyn),
                          (n.lenbits = 7),
                          (L = { bits: n.lenbits }),
                          (I = s(0, n.lens, 0, 19, n.lencode, 0, n.work, L)),
                          (n.lenbits = L.bits),
                          I)
                        ) {
                          ((e.msg = `invalid code lengths set`), (n.mode = 30));
                          break;
                        }
                        ((n.have = 0), (n.mode = 19));
                      case 19:
                        for (; n.have < n.nlen + n.ndist;) {
                          for (
                            ;
                            (A = ((z = n.lencode[b & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                              (j = 65535 & z),
                              !((k = z >>> 24) <= x);
                          ) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          if (j < 16) ((b >>>= k), (x -= k), (n.lens[n.have++] = j));
                          else {
                            if (j === 16) {
                              for (R = k + 2; x < R;) {
                                if (v === 0) break e;
                                (v--, (b += p[g++] << x), (x += 8));
                              }
                              if (((b >>>= k), (x -= k), n.have === 0)) {
                                ((e.msg = `invalid bit length repeat`), (n.mode = 30));
                                break;
                              }
                              ((F = n.lens[n.have - 1]), (E = 3 + (3 & b)), (b >>>= 2), (x -= 2));
                            } else if (j === 17) {
                              for (R = k + 3; x < R;) {
                                if (v === 0) break e;
                                (v--, (b += p[g++] << x), (x += 8));
                              }
                              ((x -= k), (F = 0), (E = 3 + (7 & (b >>>= k))), (b >>>= 3), (x -= 3));
                            } else {
                              for (R = k + 7; x < R;) {
                                if (v === 0) break e;
                                (v--, (b += p[g++] << x), (x += 8));
                              }
                              ((x -= k),
                                (F = 0),
                                (E = 11 + (127 & (b >>>= k))),
                                (b >>>= 7),
                                (x -= 7));
                            }
                            if (n.have + E > n.nlen + n.ndist) {
                              ((e.msg = `invalid bit length repeat`), (n.mode = 30));
                              break;
                            }
                            for (; E--;) n.lens[n.have++] = F;
                          }
                        }
                        if (n.mode === 30) break;
                        if (n.lens[256] === 0) {
                          ((e.msg = `invalid code -- missing end-of-block`), (n.mode = 30));
                          break;
                        }
                        if (
                          ((n.lenbits = 9),
                          (L = { bits: n.lenbits }),
                          (I = s(c, n.lens, 0, n.nlen, n.lencode, 0, n.work, L)),
                          (n.lenbits = L.bits),
                          I)
                        ) {
                          ((e.msg = `invalid literal/lengths set`), (n.mode = 30));
                          break;
                        }
                        if (
                          ((n.distbits = 6),
                          (n.distcode = n.distdyn),
                          (L = { bits: n.distbits }),
                          (I = s(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, L)),
                          (n.distbits = L.bits),
                          I)
                        ) {
                          ((e.msg = `invalid distances set`), (n.mode = 30));
                          break;
                        }
                        if (((n.mode = 20), t === 6)) break e;
                      case 20:
                        n.mode = 21;
                      case 21:
                        if (6 <= v && 258 <= y) {
                          ((e.next_out = _),
                            (e.avail_out = y),
                            (e.next_in = g),
                            (e.avail_in = v),
                            (n.hold = b),
                            (n.bits = x),
                            o(e, C),
                            (_ = e.next_out),
                            (m = e.output),
                            (y = e.avail_out),
                            (g = e.next_in),
                            (p = e.input),
                            (v = e.avail_in),
                            (b = n.hold),
                            (x = n.bits),
                            n.mode === 12 && (n.back = -1));
                          break;
                        }
                        for (
                          n.back = 0;
                          (A = ((z = n.lencode[b & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                            (j = 65535 & z),
                            !((k = z >>> 24) <= x);
                        ) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if (A && !(240 & A)) {
                          for (
                            M = k, N = A, P = j;
                            (A =
                              ((z = n.lencode[P + ((b & ((1 << (M + N)) - 1)) >> M)]) >>> 16) &
                              255),
                              (j = 65535 & z),
                              !(M + (k = z >>> 24) <= x);
                          ) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((b >>>= M), (x -= M), (n.back += M));
                        }
                        if (((b >>>= k), (x -= k), (n.back += k), (n.length = j), A === 0)) {
                          n.mode = 26;
                          break;
                        }
                        if (32 & A) {
                          ((n.back = -1), (n.mode = 12));
                          break;
                        }
                        if (64 & A) {
                          ((e.msg = `invalid literal/length code`), (n.mode = 30));
                          break;
                        }
                        ((n.extra = 15 & A), (n.mode = 22));
                      case 22:
                        if (n.extra) {
                          for (R = n.extra; x < R;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((n.length += b & ((1 << n.extra) - 1)),
                            (b >>>= n.extra),
                            (x -= n.extra),
                            (n.back += n.extra));
                        }
                        ((n.was = n.length), (n.mode = 23));
                      case 23:
                        for (
                          ;
                          (A = ((z = n.distcode[b & ((1 << n.distbits) - 1)]) >>> 16) & 255),
                            (j = 65535 & z),
                            !((k = z >>> 24) <= x);
                        ) {
                          if (v === 0) break e;
                          (v--, (b += p[g++] << x), (x += 8));
                        }
                        if (!(240 & A)) {
                          for (
                            M = k, N = A, P = j;
                            (A =
                              ((z = n.distcode[P + ((b & ((1 << (M + N)) - 1)) >> M)]) >>> 16) &
                              255),
                              (j = 65535 & z),
                              !(M + (k = z >>> 24) <= x);
                          ) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((b >>>= M), (x -= M), (n.back += M));
                        }
                        if (((b >>>= k), (x -= k), (n.back += k), 64 & A)) {
                          ((e.msg = `invalid distance code`), (n.mode = 30));
                          break;
                        }
                        ((n.offset = j), (n.extra = 15 & A), (n.mode = 24));
                      case 24:
                        if (n.extra) {
                          for (R = n.extra; x < R;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          ((n.offset += b & ((1 << n.extra) - 1)),
                            (b >>>= n.extra),
                            (x -= n.extra),
                            (n.back += n.extra));
                        }
                        if (n.offset > n.dmax) {
                          ((e.msg = `invalid distance too far back`), (n.mode = 30));
                          break;
                        }
                        n.mode = 25;
                      case 25:
                        if (y === 0) break e;
                        if (((E = C - y), n.offset > E)) {
                          if ((E = n.offset - E) > n.whave && n.sane) {
                            ((e.msg = `invalid distance too far back`), (n.mode = 30));
                            break;
                          }
                          ((D = E > n.wnext ? ((E -= n.wnext), n.wsize - E) : n.wnext - E),
                            E > n.length && (E = n.length),
                            (O = n.window));
                        } else ((O = m), (D = _ - n.offset), (E = n.length));
                        for (y < E && (E = y), y -= E, n.length -= E; (m[_++] = O[D++]), --E;);
                        n.length === 0 && (n.mode = 21);
                        break;
                      case 26:
                        if (y === 0) break e;
                        ((m[_++] = n.length), y--, (n.mode = 21));
                        break;
                      case 27:
                        if (n.wrap) {
                          for (; x < 32;) {
                            if (v === 0) break e;
                            (v--, (b |= p[g++] << x), (x += 8));
                          }
                          if (
                            ((C -= y),
                            (e.total_out += C),
                            (n.total += C),
                            C &&
                              (e.adler = n.check =
                                n.flags ? a(n.check, m, C, _ - C) : i(n.check, m, C, _ - C)),
                            (C = y),
                            (n.flags ? b : h(b)) !== n.check)
                          ) {
                            ((e.msg = `incorrect data check`), (n.mode = 30));
                            break;
                          }
                          x = b = 0;
                        }
                        n.mode = 28;
                      case 28:
                        if (n.wrap && n.flags) {
                          for (; x < 32;) {
                            if (v === 0) break e;
                            (v--, (b += p[g++] << x), (x += 8));
                          }
                          if (b !== (0 | n.total)) {
                            ((e.msg = `incorrect length check`), (n.mode = 30));
                            break;
                          }
                          x = b = 0;
                        }
                        n.mode = 29;
                      case 29:
                        I = 1;
                        break e;
                      case 30:
                        I = -3;
                        break e;
                      case 31:
                        return -4;
                      default:
                        return d;
                    }
                  return (
                    (e.next_out = _),
                    (e.avail_out = y),
                    (e.next_in = g),
                    (e.avail_in = v),
                    (n.hold = b),
                    (n.bits = x),
                    (n.wsize || (C !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4))) &&
                    T(e, e.output, e.next_out, C - e.avail_out)
                      ? ((n.mode = 31), -4)
                      : ((S -= e.avail_in),
                        (C -= e.avail_out),
                        (e.total_in += S),
                        (e.total_out += C),
                        (n.total += C),
                        n.wrap &&
                          C &&
                          (e.adler = n.check =
                            n.flags
                              ? a(n.check, m, C, e.next_out - C)
                              : i(n.check, m, C, e.next_out - C)),
                        (e.data_type =
                          n.bits +
                          (n.last ? 64 : 0) +
                          (n.mode === 12 ? 128 : 0) +
                          (n.mode === 20 || n.mode === 15 ? 256 : 0)),
                        ((S == 0 && C === 0) || t === 4) && I === u && (I = -5),
                        I)
                  );
                }),
                (n.inflateEnd = function (e) {
                  if (!e || !e.state) return d;
                  var t = e.state;
                  return ((t.window &&= null), (e.state = null), u);
                }),
                (n.inflateGetHeader = function (e, t) {
                  var n;
                  return e && e.state && 2 & (n = e.state).wrap ? (((n.head = t).done = !1), u) : d;
                }),
                (n.inflateSetDictionary = function (e, t) {
                  var n,
                    r = t.length;
                  return e && e.state
                    ? (n = e.state).wrap !== 0 && n.mode !== 11
                      ? d
                      : n.mode === 11 && i(1, t, r, 0) !== n.check
                        ? -3
                        : T(e, t, r, r)
                          ? ((n.mode = 31), -4)
                          : ((n.havedict = 1), u)
                    : d;
                }),
                (n.inflateInfo = `pako inflate (from Nodeca project)`));
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50,
            },
          ],
          50: [
            function (e, t, n) {
              var r = e(`../utils/common`),
                i = [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
                  99, 115, 131, 163, 195, 227, 258, 0, 0,
                ],
                a = [
                  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19,
                  20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
                ],
                o = [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769,
                  1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
                ],
                s = [
                  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24,
                  25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
                ];
              t.exports = function (e, t, n, c, l, u, d, f) {
                var p,
                  m,
                  h,
                  g,
                  _,
                  v,
                  y,
                  b,
                  x,
                  S = f.bits,
                  C = 0,
                  w = 0,
                  T = 0,
                  E = 0,
                  D = 0,
                  O = 0,
                  k = 0,
                  A = 0,
                  j = 0,
                  M = 0,
                  N = null,
                  P = 0,
                  F = new r.Buf16(16),
                  I = new r.Buf16(16),
                  L = null,
                  R = 0;
                for (C = 0; C <= 15; C++) F[C] = 0;
                for (w = 0; w < c; w++) F[t[n + w]]++;
                for (D = S, E = 15; 1 <= E && F[E] === 0; E--);
                if ((E < D && (D = E), E === 0))
                  return ((l[u++] = 20971520), (l[u++] = 20971520), (f.bits = 1), 0);
                for (T = 1; T < E && F[T] === 0; T++);
                for (D < T && (D = T), C = A = 1; C <= 15; C++)
                  if (((A <<= 1), (A -= F[C]) < 0)) return -1;
                if (0 < A && (e === 0 || E !== 1)) return -1;
                for (I[1] = 0, C = 1; C < 15; C++) I[C + 1] = I[C] + F[C];
                for (w = 0; w < c; w++) t[n + w] !== 0 && (d[I[t[n + w]]++] = w);
                if (
                  ((v =
                    e === 0
                      ? ((N = L = d), 19)
                      : e === 1
                        ? ((N = i), (P -= 257), (L = a), (R -= 257), 256)
                        : ((N = o), (L = s), -1)),
                  (C = T),
                  (_ = u),
                  (k = w = M = 0),
                  (h = -1),
                  (g = (j = 1 << (O = D)) - 1),
                  (e === 1 && 852 < j) || (e === 2 && 592 < j))
                )
                  return 1;
                for (;;) {
                  for (
                    y = C - k,
                      x =
                        d[w] < v
                          ? ((b = 0), d[w])
                          : d[w] > v
                            ? ((b = L[R + d[w]]), N[P + d[w]])
                            : ((b = 96), 0),
                      p = 1 << (C - k),
                      T = m = 1 << O;
                    (l[_ + (M >> k) + (m -= p)] = (y << 24) | (b << 16) | x), m !== 0;
                  );
                  for (p = 1 << (C - 1); M & p;) p >>= 1;
                  if ((p === 0 ? (M = 0) : ((M &= p - 1), (M += p)), w++, --F[C] == 0)) {
                    if (C === E) break;
                    C = t[n + d[w]];
                  }
                  if (D < C && (M & g) !== h) {
                    for (
                      k === 0 && (k = D), _ += T, A = 1 << (O = C - k);
                      O + k < E && !((A -= F[O + k]) <= 0);
                    )
                      (O++, (A <<= 1));
                    if (((j += 1 << O), (e === 1 && 852 < j) || (e === 2 && 592 < j))) return 1;
                    l[(h = M & g)] = (D << 24) | (O << 16) | (_ - u);
                  }
                }
                return (M !== 0 && (l[_ + M] = ((C - k) << 24) | 4194304), (f.bits = D), 0);
              };
            },
            { "../utils/common": 41 },
          ],
          51: [
            function (e, t, n) {
              t.exports = {
                2: `need dictionary`,
                1: `stream end`,
                0: ``,
                "-1": `file error`,
                "-2": `stream error`,
                "-3": `data error`,
                "-4": `insufficient memory`,
                "-5": `buffer error`,
                "-6": `incompatible version`,
              };
            },
            {},
          ],
          52: [
            function (e, t, n) {
              var r = e(`../utils/common`),
                i = 0,
                a = 1;
              function o(e) {
                for (var t = e.length; 0 <= --t;) e[t] = 0;
              }
              var s = 0,
                c = 29,
                l = 256,
                u = l + 1 + c,
                d = 30,
                f = 19,
                p = 2 * u + 1,
                m = 15,
                h = 16,
                g = 7,
                _ = 256,
                v = 16,
                y = 17,
                b = 18,
                x = [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
                  5, 0,
                ],
                S = [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
                  12, 12, 13, 13,
                ],
                C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                T = Array(2 * (u + 2));
              o(T);
              var E = Array(2 * d);
              o(E);
              var D = Array(512);
              o(D);
              var O = Array(256);
              o(O);
              var k = Array(c);
              o(k);
              var A,
                j,
                M,
                N = Array(d);
              function P(e, t, n, r, i) {
                ((this.static_tree = e),
                  (this.extra_bits = t),
                  (this.extra_base = n),
                  (this.elems = r),
                  (this.max_length = i),
                  (this.has_stree = e && e.length));
              }
              function F(e, t) {
                ((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t));
              }
              function I(e) {
                return e < 256 ? D[e] : D[256 + (e >>> 7)];
              }
              function L(e, t) {
                ((e.pending_buf[e.pending++] = 255 & t),
                  (e.pending_buf[e.pending++] = (t >>> 8) & 255));
              }
              function R(e, t, n) {
                e.bi_valid > h - n
                  ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                    L(e, e.bi_buf),
                    (e.bi_buf = t >> (h - e.bi_valid)),
                    (e.bi_valid += n - h))
                  : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
              }
              function z(e, t, n) {
                R(e, n[2 * t], n[2 * t + 1]);
              }
              function B(e, t) {
                for (var n = 0; (n |= 1 & e), (e >>>= 1), (n <<= 1), 0 < --t;);
                return n >>> 1;
              }
              function V(e, t, n) {
                var r,
                  i,
                  a = Array(m + 1),
                  o = 0;
                for (r = 1; r <= m; r++) a[r] = o = (o + n[r - 1]) << 1;
                for (i = 0; i <= t; i++) {
                  var s = e[2 * i + 1];
                  s !== 0 && (e[2 * i] = B(a[s]++, s));
                }
              }
              function H(e) {
                for (var t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
                for (t = 0; t < d; t++) e.dyn_dtree[2 * t] = 0;
                for (t = 0; t < f; t++) e.bl_tree[2 * t] = 0;
                ((e.dyn_ltree[2 * _] = 1),
                  (e.opt_len = e.static_len = 0),
                  (e.last_lit = e.matches = 0));
              }
              function U(e) {
                (8 < e.bi_valid
                  ? L(e, e.bi_buf)
                  : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                  (e.bi_buf = 0),
                  (e.bi_valid = 0));
              }
              function W(e, t, n, r) {
                var i = 2 * t,
                  a = 2 * n;
                return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
              }
              function G(e, t, n) {
                for (
                  var r = e.heap[n], i = n << 1;
                  i <= e.heap_len &&
                  (i < e.heap_len && W(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
                  !W(t, r, e.heap[i], e.depth));
                )
                  ((e.heap[n] = e.heap[i]), (n = i), (i <<= 1));
                e.heap[n] = r;
              }
              function K(e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  s = 0;
                if (e.last_lit !== 0)
                  for (
                    ;
                    (r =
                      (e.pending_buf[e.d_buf + 2 * s] << 8) | e.pending_buf[e.d_buf + 2 * s + 1]),
                      (i = e.pending_buf[e.l_buf + s]),
                      s++,
                      r === 0
                        ? z(e, i, t)
                        : (z(e, (a = O[i]) + l + 1, t),
                          (o = x[a]) !== 0 && R(e, (i -= k[a]), o),
                          z(e, (a = I(--r)), n),
                          (o = S[a]) !== 0 && R(e, (r -= N[a]), o)),
                      s < e.last_lit;
                  );
                z(e, _, t);
              }
              function q(e, t) {
                var n,
                  r,
                  i,
                  a = t.dyn_tree,
                  o = t.stat_desc.static_tree,
                  s = t.stat_desc.has_stree,
                  c = t.stat_desc.elems,
                  l = -1;
                for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++)
                  a[2 * n] === 0
                    ? (a[2 * n + 1] = 0)
                    : ((e.heap[++e.heap_len] = l = n), (e.depth[n] = 0));
                for (; e.heap_len < 2;)
                  ((a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
                    (e.depth[i] = 0),
                    e.opt_len--,
                    s && (e.static_len -= o[2 * i + 1]));
                for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) G(e, a, n);
                for (
                  i = c;
                  (n = e.heap[1]),
                    (e.heap[1] = e.heap[e.heap_len--]),
                    G(e, a, 1),
                    (r = e.heap[1]),
                    (e.heap[--e.heap_max] = n),
                    (e.heap[--e.heap_max] = r),
                    (a[2 * i] = a[2 * n] + a[2 * r]),
                    (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
                    (a[2 * n + 1] = a[2 * r + 1] = i),
                    (e.heap[1] = i++),
                    G(e, a, 1),
                    2 <= e.heap_len;
                );
                ((e.heap[--e.heap_max] = e.heap[1]),
                  (function (e, t) {
                    var n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      c = t.dyn_tree,
                      l = t.max_code,
                      u = t.stat_desc.static_tree,
                      d = t.stat_desc.has_stree,
                      f = t.stat_desc.extra_bits,
                      h = t.stat_desc.extra_base,
                      g = t.stat_desc.max_length,
                      _ = 0;
                    for (a = 0; a <= m; a++) e.bl_count[a] = 0;
                    for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < p; n++)
                      (g < (a = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) && ((a = g), _++),
                        (c[2 * r + 1] = a),
                        l < r ||
                          (e.bl_count[a]++,
                          (o = 0),
                          h <= r && (o = f[r - h]),
                          (s = c[2 * r]),
                          (e.opt_len += s * (a + o)),
                          d && (e.static_len += s * (u[2 * r + 1] + o))));
                    if (_ !== 0) {
                      do {
                        for (a = g - 1; e.bl_count[a] === 0;) a--;
                        (e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[g]--, (_ -= 2));
                      } while (0 < _);
                      for (a = g; a !== 0; a--)
                        for (r = e.bl_count[a]; r !== 0;)
                          l < (i = e.heap[--n]) ||
                            (c[2 * i + 1] !== a &&
                              ((e.opt_len += (a - c[2 * i + 1]) * c[2 * i]), (c[2 * i + 1] = a)),
                            r--);
                    }
                  })(e, t),
                  V(a, l, e.bl_count));
              }
              function ee(e, t, n) {
                var r,
                  i,
                  a = -1,
                  o = t[1],
                  s = 0,
                  c = 7,
                  l = 4;
                for (
                  o === 0 && ((c = 138), (l = 3)), t[2 * (n + 1) + 1] = 65535, r = 0;
                  r <= n;
                  r++
                )
                  ((i = o),
                    (o = t[2 * (r + 1) + 1]),
                    (++s < c && i === o) ||
                      (s < l
                        ? (e.bl_tree[2 * i] += s)
                        : i === 0
                          ? s <= 10
                            ? e.bl_tree[2 * y]++
                            : e.bl_tree[2 * b]++
                          : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++),
                      (a = i),
                      (l =
                        (s = 0) === o ? ((c = 138), 3) : i === o ? ((c = 6), 3) : ((c = 7), 4))));
              }
              function J(e, t, n) {
                var r,
                  i,
                  a = -1,
                  o = t[1],
                  s = 0,
                  c = 7,
                  l = 4;
                for (o === 0 && ((c = 138), (l = 3)), r = 0; r <= n; r++)
                  if (((i = o), (o = t[2 * (r + 1) + 1]), !(++s < c && i === o))) {
                    if (s < l) for (; z(e, i, e.bl_tree), --s != 0;);
                    else
                      i === 0
                        ? s <= 10
                          ? (z(e, y, e.bl_tree), R(e, s - 3, 3))
                          : (z(e, b, e.bl_tree), R(e, s - 11, 7))
                        : (i !== a && (z(e, i, e.bl_tree), s--),
                          z(e, v, e.bl_tree),
                          R(e, s - 3, 2));
                    ((a = i),
                      (l = (s = 0) === o ? ((c = 138), 3) : i === o ? ((c = 6), 3) : ((c = 7), 4)));
                  }
              }
              o(N);
              var te = !1;
              function Y(e, t, n, i) {
                (R(e, (s << 1) + +!!i, 3),
                  (function (e, t, n, i) {
                    (U(e),
                      L(e, n),
                      L(e, ~n),
                      r.arraySet(e.pending_buf, e.window, t, n, e.pending),
                      (e.pending += n));
                  })(e, t, n, !0));
              }
              ((n._tr_init = function (e) {
                ((te ||=
                  ((function () {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      a = Array(m + 1);
                    for (r = n = 0; r < c - 1; r++)
                      for (k[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
                    for (O[n - 1] = r, r = i = 0; r < 16; r++)
                      for (N[r] = i, e = 0; e < 1 << S[r]; e++) D[i++] = r;
                    for (i >>= 7; r < d; r++)
                      for (N[r] = i << 7, e = 0; e < 1 << (S[r] - 7); e++) D[256 + i++] = r;
                    for (t = 0; t <= m; t++) a[t] = 0;
                    for (e = 0; e <= 143;) ((T[2 * e + 1] = 8), e++, a[8]++);
                    for (; e <= 255;) ((T[2 * e + 1] = 9), e++, a[9]++);
                    for (; e <= 279;) ((T[2 * e + 1] = 7), e++, a[7]++);
                    for (; e <= 287;) ((T[2 * e + 1] = 8), e++, a[8]++);
                    for (V(T, u + 1, a), e = 0; e < d; e++)
                      ((E[2 * e + 1] = 5), (E[2 * e] = B(e, 5)));
                    ((A = new P(T, x, l + 1, u, m)),
                      (j = new P(E, S, 0, d, m)),
                      (M = new P([], C, 0, f, g)));
                  })(),
                  !0)),
                  (e.l_desc = new F(e.dyn_ltree, A)),
                  (e.d_desc = new F(e.dyn_dtree, j)),
                  (e.bl_desc = new F(e.bl_tree, M)),
                  (e.bi_buf = 0),
                  (e.bi_valid = 0),
                  H(e));
              }),
                (n._tr_stored_block = Y),
                (n._tr_flush_block = function (e, t, n, r) {
                  var o,
                    s,
                    c = 0;
                  (0 < e.level
                    ? (e.strm.data_type === 2 &&
                        (e.strm.data_type = (function (e) {
                          var t,
                            n = 4093624447;
                          for (t = 0; t <= 31; t++, n >>>= 1)
                            if (1 & n && e.dyn_ltree[2 * t] !== 0) return i;
                          if (
                            e.dyn_ltree[18] !== 0 ||
                            e.dyn_ltree[20] !== 0 ||
                            e.dyn_ltree[26] !== 0
                          )
                            return a;
                          for (t = 32; t < l; t++) if (e.dyn_ltree[2 * t] !== 0) return a;
                          return i;
                        })(e)),
                      q(e, e.l_desc),
                      q(e, e.d_desc),
                      (c = (function (e) {
                        var t;
                        for (
                          ee(e, e.dyn_ltree, e.l_desc.max_code),
                            ee(e, e.dyn_dtree, e.d_desc.max_code),
                            q(e, e.bl_desc),
                            t = f - 1;
                          3 <= t && e.bl_tree[2 * w[t] + 1] === 0;
                          t--
                        );
                        return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
                      })(e)),
                      (o = (e.opt_len + 3 + 7) >>> 3),
                      (s = (e.static_len + 3 + 7) >>> 3) <= o && (o = s))
                    : (o = s = n + 5),
                    n + 4 <= o && t !== -1
                      ? Y(e, t, n, r)
                      : e.strategy === 4 || s === o
                        ? (R(e, 2 + +!!r, 3), K(e, T, E))
                        : (R(e, 4 + +!!r, 3),
                          (function (e, t, n, r) {
                            var i;
                            for (
                              R(e, t - 257, 5), R(e, n - 1, 5), R(e, r - 4, 4), i = 0;
                              i < r;
                              i++
                            )
                              R(e, e.bl_tree[2 * w[i] + 1], 3);
                            (J(e, e.dyn_ltree, t - 1), J(e, e.dyn_dtree, n - 1));
                          })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1),
                          K(e, e.dyn_ltree, e.dyn_dtree)),
                    H(e),
                    r && U(e));
                }),
                (n._tr_tally = function (e, t, n) {
                  return (
                    (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
                    (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                    (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
                    e.last_lit++,
                    t === 0
                      ? e.dyn_ltree[2 * n]++
                      : (e.matches++,
                        t--,
                        e.dyn_ltree[2 * (O[n] + l + 1)]++,
                        e.dyn_dtree[2 * I(t)]++),
                    e.last_lit === e.lit_bufsize - 1
                  );
                }),
                (n._tr_align = function (e) {
                  (R(e, 2, 3),
                    z(e, _, T),
                    (function (e) {
                      e.bi_valid === 16
                        ? (L(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                        : 8 <= e.bi_valid &&
                          ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                          (e.bi_buf >>= 8),
                          (e.bi_valid -= 8));
                    })(e));
                }));
            },
            { "../utils/common": 41 },
          ],
          53: [
            function (e, t, n) {
              t.exports = function () {
                ((this.input = null),
                  (this.next_in = 0),
                  (this.avail_in = 0),
                  (this.total_in = 0),
                  (this.output = null),
                  (this.next_out = 0),
                  (this.avail_out = 0),
                  (this.total_out = 0),
                  (this.msg = ``),
                  (this.state = null),
                  (this.data_type = 2),
                  (this.adler = 0));
              };
            },
            {},
          ],
          54: [
            function (e, t, n) {
              (function (e) {
                (function (e, t) {
                  if (!e.setImmediate) {
                    var n,
                      r,
                      i,
                      a,
                      o = 1,
                      s = {},
                      c = !1,
                      l = e.document,
                      u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    ((u = u && u.setTimeout ? u : e),
                      (n =
                        {}.toString.call(e.process) === `[object process]`
                          ? function (e) {
                              process.nextTick(function () {
                                f(e);
                              });
                            }
                          : (function () {
                                if (e.postMessage && !e.importScripts) {
                                  var t = !0,
                                    n = e.onmessage;
                                  return (
                                    (e.onmessage = function () {
                                      t = !1;
                                    }),
                                    e.postMessage(``, `*`),
                                    (e.onmessage = n),
                                    t
                                  );
                                }
                              })()
                            ? ((a = `setImmediate$` + Math.random() + `$`),
                              e.addEventListener
                                ? e.addEventListener(`message`, p, !1)
                                : e.attachEvent(`onmessage`, p),
                              function (t) {
                                e.postMessage(a + t, `*`);
                              })
                            : e.MessageChannel
                              ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                                  f(e.data);
                                }),
                                function (e) {
                                  i.port2.postMessage(e);
                                })
                              : l && `onreadystatechange` in l.createElement(`script`)
                                ? ((r = l.documentElement),
                                  function (e) {
                                    var t = l.createElement(`script`);
                                    ((t.onreadystatechange = function () {
                                      (f(e),
                                        (t.onreadystatechange = null),
                                        r.removeChild(t),
                                        (t = null));
                                    }),
                                      r.appendChild(t));
                                  })
                                : function (e) {
                                    setTimeout(f, 0, e);
                                  }),
                      (u.setImmediate = function (e) {
                        typeof e != `function` && (e = Function(`` + e));
                        for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++)
                          t[r] = arguments[r + 1];
                        return ((s[o] = { callback: e, args: t }), n(o), o++);
                      }),
                      (u.clearImmediate = d));
                  }
                  function d(e) {
                    delete s[e];
                  }
                  function f(e) {
                    if (c) setTimeout(f, 0, e);
                    else {
                      var n = s[e];
                      if (n) {
                        c = !0;
                        try {
                          (function (e) {
                            var n = e.callback,
                              r = e.args;
                            switch (r.length) {
                              case 0:
                                n();
                                break;
                              case 1:
                                n(r[0]);
                                break;
                              case 2:
                                n(r[0], r[1]);
                                break;
                              case 3:
                                n(r[0], r[1], r[2]);
                                break;
                              default:
                                n.apply(t, r);
                            }
                          })(n);
                        } finally {
                          (d(e), (c = !1));
                        }
                      }
                    }
                  }
                  function p(t) {
                    t.source === e &&
                      typeof t.data == `string` &&
                      t.data.indexOf(a) === 0 &&
                      f(+t.data.slice(a.length));
                  }
                })(typeof self > `u` ? (e === void 0 ? this : e) : self);
              }).call(
                this,
                typeof global < `u`
                  ? global
                  : typeof self < `u`
                    ? self
                    : typeof window < `u`
                      ? window
                      : {},
              );
            },
            {},
          ],
        },
        {},
        [10],
      )(10);
    });
  })(),
  1,
);
function zt(e, t = !1) {
  let n = e.length,
    r = 0,
    i = ``,
    a = 0,
    o = 16,
    s = 0,
    c = 0,
    l = 0,
    u = 0,
    d = 0;
  function f(t, n) {
    let i = 0,
      a = 0;
    for (; i < t || !n;) {
      let t = e.charCodeAt(r);
      if (t >= 48 && t <= 57) a = a * 16 + t - 48;
      else if (t >= 65 && t <= 70) a = a * 16 + t - 65 + 10;
      else if (t >= 97 && t <= 102) a = a * 16 + t - 97 + 10;
      else break;
      (r++, i++);
    }
    return (i < t && (a = -1), a);
  }
  function p(e) {
    ((r = e), (i = ``), (a = 0), (o = 16), (d = 0));
  }
  function m() {
    let t = r;
    if (e.charCodeAt(r) === 48) r++;
    else for (r++; r < e.length && Ht(e.charCodeAt(r));) r++;
    if (r < e.length && e.charCodeAt(r) === 46) {
      if ((r++, r < e.length && Ht(e.charCodeAt(r))))
        for (r++; r < e.length && Ht(e.charCodeAt(r));) r++;
      else return ((d = 3), e.substring(t, r));
    }
    let n = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101)) {
      if (
        (r++,
        ((r < e.length && e.charCodeAt(r) === 43) || e.charCodeAt(r) === 45) && r++,
        r < e.length && Ht(e.charCodeAt(r)))
      ) {
        for (r++; r < e.length && Ht(e.charCodeAt(r));) r++;
        n = r;
      } else d = 3;
    }
    return e.substring(t, n);
  }
  function h() {
    let t = ``,
      i = r;
    for (;;) {
      if (r >= n) {
        ((t += e.substring(i, r)), (d = 2));
        break;
      }
      let a = e.charCodeAt(r);
      if (a === 34) {
        ((t += e.substring(i, r)), r++);
        break;
      }
      if (a === 92) {
        if (((t += e.substring(i, r)), r++, r >= n)) {
          d = 2;
          break;
        }
        switch (e.charCodeAt(r++)) {
          case 34:
            t += `"`;
            break;
          case 92:
            t += `\\`;
            break;
          case 47:
            t += `/`;
            break;
          case 98:
            t += `\b`;
            break;
          case 102:
            t += `\f`;
            break;
          case 110:
            t += `
`;
            break;
          case 114:
            t += `\r`;
            break;
          case 116:
            t += `	`;
            break;
          case 117:
            let e = f(4, !0);
            e >= 0 ? (t += String.fromCharCode(e)) : (d = 4);
            break;
          default:
            d = 5;
        }
        i = r;
      } else {
        if (a >= 0 && a <= 31) {
          if (Vt(a)) {
            ((t += e.substring(i, r)), (d = 2));
            break;
          }
          d = 6;
        }
        r++;
      }
    }
    return t;
  }
  function g() {
    if (((i = ``), (d = 0), (a = r), (c = s), (u = l), r >= n)) return ((a = n), (o = 17));
    let t = e.charCodeAt(r);
    if (Bt(t)) {
      do (r++, (i += String.fromCharCode(t)), (t = e.charCodeAt(r)));
      while (Bt(t));
      return (o = 15);
    }
    if (Vt(t))
      return (
        r++,
        (i += String.fromCharCode(t)),
        t === 13 &&
          e.charCodeAt(r) === 10 &&
          (r++,
          (i += `
`)),
        s++,
        (l = r),
        (o = 14)
      );
    switch (t) {
      case 123:
        return (r++, (o = 1));
      case 125:
        return (r++, (o = 2));
      case 91:
        return (r++, (o = 3));
      case 93:
        return (r++, (o = 4));
      case 58:
        return (r++, (o = 6));
      case 44:
        return (r++, (o = 5));
      case 34:
        return (r++, (i = h()), (o = 10));
      case 47:
        let c = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Vt(e.charCodeAt(r));) r++;
          return ((i = e.substring(c, r)), (o = 12));
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          let t = n - 1,
            a = !1;
          for (; r < t;) {
            let t = e.charCodeAt(r);
            if (t === 42 && e.charCodeAt(r + 1) === 47) {
              ((r += 2), (a = !0));
              break;
            }
            (r++, Vt(t) && (t === 13 && e.charCodeAt(r) === 10 && r++, s++, (l = r)));
          }
          return (a || (r++, (d = 1)), (i = e.substring(c, r)), (o = 13));
        }
        return ((i += String.fromCharCode(t)), r++, (o = 16));
      case 45:
        if (((i += String.fromCharCode(t)), r++, r === n || !Ht(e.charCodeAt(r)))) return (o = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return ((i += m()), (o = 11));
      default:
        for (; r < n && _(t);) (r++, (t = e.charCodeAt(r)));
        if (a !== r) {
          switch (((i = e.substring(a, r)), i)) {
            case `true`:
              return (o = 8);
            case `false`:
              return (o = 9);
            case `null`:
              return (o = 7);
          }
          return (o = 16);
        }
        return ((i += String.fromCharCode(t)), r++, (o = 16));
    }
  }
  function _(e) {
    if (Bt(e) || Vt(e)) return !1;
    switch (e) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function v() {
    let e;
    do e = g();
    while (e >= 12 && e <= 15);
    return e;
  }
  return {
    setPosition: p,
    getPosition: () => r,
    scan: t ? v : g,
    getToken: () => o,
    getTokenValue: () => i,
    getTokenOffset: () => a,
    getTokenLength: () => r - a,
    getTokenStartLine: () => c,
    getTokenStartCharacter: () => a - u,
    getTokenError: () => d,
  };
}
function Bt(e) {
  return e === 32 || e === 9;
}
function Vt(e) {
  return e === 10 || e === 13;
}
function Ht(e) {
  return e >= 48 && e <= 57;
}
var Ut;
((function (e) {
  ((e[(e.lineFeed = 10)] = `lineFeed`),
    (e[(e.carriageReturn = 13)] = `carriageReturn`),
    (e[(e.space = 32)] = `space`),
    (e[(e._0 = 48)] = `_0`),
    (e[(e._1 = 49)] = `_1`),
    (e[(e._2 = 50)] = `_2`),
    (e[(e._3 = 51)] = `_3`),
    (e[(e._4 = 52)] = `_4`),
    (e[(e._5 = 53)] = `_5`),
    (e[(e._6 = 54)] = `_6`),
    (e[(e._7 = 55)] = `_7`),
    (e[(e._8 = 56)] = `_8`),
    (e[(e._9 = 57)] = `_9`),
    (e[(e.a = 97)] = `a`),
    (e[(e.b = 98)] = `b`),
    (e[(e.c = 99)] = `c`),
    (e[(e.d = 100)] = `d`),
    (e[(e.e = 101)] = `e`),
    (e[(e.f = 102)] = `f`),
    (e[(e.g = 103)] = `g`),
    (e[(e.h = 104)] = `h`),
    (e[(e.i = 105)] = `i`),
    (e[(e.j = 106)] = `j`),
    (e[(e.k = 107)] = `k`),
    (e[(e.l = 108)] = `l`),
    (e[(e.m = 109)] = `m`),
    (e[(e.n = 110)] = `n`),
    (e[(e.o = 111)] = `o`),
    (e[(e.p = 112)] = `p`),
    (e[(e.q = 113)] = `q`),
    (e[(e.r = 114)] = `r`),
    (e[(e.s = 115)] = `s`),
    (e[(e.t = 116)] = `t`),
    (e[(e.u = 117)] = `u`),
    (e[(e.v = 118)] = `v`),
    (e[(e.w = 119)] = `w`),
    (e[(e.x = 120)] = `x`),
    (e[(e.y = 121)] = `y`),
    (e[(e.z = 122)] = `z`),
    (e[(e.A = 65)] = `A`),
    (e[(e.B = 66)] = `B`),
    (e[(e.C = 67)] = `C`),
    (e[(e.D = 68)] = `D`),
    (e[(e.E = 69)] = `E`),
    (e[(e.F = 70)] = `F`),
    (e[(e.G = 71)] = `G`),
    (e[(e.H = 72)] = `H`),
    (e[(e.I = 73)] = `I`),
    (e[(e.J = 74)] = `J`),
    (e[(e.K = 75)] = `K`),
    (e[(e.L = 76)] = `L`),
    (e[(e.M = 77)] = `M`),
    (e[(e.N = 78)] = `N`),
    (e[(e.O = 79)] = `O`),
    (e[(e.P = 80)] = `P`),
    (e[(e.Q = 81)] = `Q`),
    (e[(e.R = 82)] = `R`),
    (e[(e.S = 83)] = `S`),
    (e[(e.T = 84)] = `T`),
    (e[(e.U = 85)] = `U`),
    (e[(e.V = 86)] = `V`),
    (e[(e.W = 87)] = `W`),
    (e[(e.X = 88)] = `X`),
    (e[(e.Y = 89)] = `Y`),
    (e[(e.Z = 90)] = `Z`),
    (e[(e.asterisk = 42)] = `asterisk`),
    (e[(e.backslash = 92)] = `backslash`),
    (e[(e.closeBrace = 125)] = `closeBrace`),
    (e[(e.closeBracket = 93)] = `closeBracket`),
    (e[(e.colon = 58)] = `colon`),
    (e[(e.comma = 44)] = `comma`),
    (e[(e.dot = 46)] = `dot`),
    (e[(e.doubleQuote = 34)] = `doubleQuote`),
    (e[(e.minus = 45)] = `minus`),
    (e[(e.openBrace = 123)] = `openBrace`),
    (e[(e.openBracket = 91)] = `openBracket`),
    (e[(e.plus = 43)] = `plus`),
    (e[(e.slash = 47)] = `slash`),
    (e[(e.formFeed = 12)] = `formFeed`),
    (e[(e.tab = 9)] = `tab`));
})((Ut ||= {})),
  Array(20)
    .fill(0)
    .map((e, t) => ` `.repeat(t)));
var Wt = 200;
(Array(Wt)
  .fill(0)
  .map(
    (e, t) =>
      `
` + ` `.repeat(t),
  ),
  Array(Wt)
    .fill(0)
    .map((e, t) => `\r` + ` `.repeat(t)),
  Array(Wt)
    .fill(0)
    .map(
      (e, t) =>
        `\r
` + ` `.repeat(t),
    ),
  Array(Wt)
    .fill(0)
    .map(
      (e, t) =>
        `
` + `	`.repeat(t),
    ),
  Array(Wt)
    .fill(0)
    .map((e, t) => `\r` + `	`.repeat(t)),
  Array(Wt)
    .fill(0)
    .map(
      (e, t) =>
        `\r
` + `	`.repeat(t),
    ));
var Gt;
(function (e) {
  e.DEFAULT = { allowTrailingComma: !1 };
})((Gt ||= {}));
function Kt(e, t = [], n = Gt.DEFAULT) {
  let r = null,
    i = [],
    a = [];
  function o(e) {
    Array.isArray(i) ? i.push(e) : r !== null && (i[r] = e);
  }
  return (
    qt(
      e,
      {
        onObjectBegin: () => {
          let e = {};
          (o(e), a.push(i), (i = e), (r = null));
        },
        onObjectProperty: (e) => {
          r = e;
        },
        onObjectEnd: () => {
          i = a.pop();
        },
        onArrayBegin: () => {
          let e = [];
          (o(e), a.push(i), (i = e), (r = null));
        },
        onArrayEnd: () => {
          i = a.pop();
        },
        onLiteralValue: o,
        onError: (e, n, r) => {
          t.push({ error: e, offset: n, length: r });
        },
      },
      n,
    ),
    i[0]
  );
}
function qt(e, t, n = Gt.DEFAULT) {
  let r = zt(e, !1),
    i = [],
    a = 0;
  function o(e) {
    return e
      ? () =>
          a === 0 &&
          e(
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
          )
      : () => !0;
  }
  function s(e) {
    return e
      ? (t) =>
          a === 0 &&
          e(
            t,
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
          )
      : () => !0;
  }
  function c(e) {
    return e
      ? (t) =>
          a === 0 &&
          e(
            t,
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
            () => i.slice(),
          )
      : () => !0;
  }
  function l(e) {
    return e
      ? () => {
          a > 0
            ? a++
            : e(
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter(),
                () => i.slice(),
              ) === !1 && (a = 1);
        }
      : () => !0;
  }
  function u(e) {
    return e
      ? () => {
          (a > 0 && a--,
            a === 0 &&
              e(
                r.getTokenOffset(),
                r.getTokenLength(),
                r.getTokenStartLine(),
                r.getTokenStartCharacter(),
              ));
        }
      : () => !0;
  }
  let d = l(t.onObjectBegin),
    f = c(t.onObjectProperty),
    p = u(t.onObjectEnd),
    m = l(t.onArrayBegin),
    h = u(t.onArrayEnd),
    g = c(t.onLiteralValue),
    _ = s(t.onSeparator),
    v = o(t.onComment),
    y = s(t.onError),
    b = n && n.disallowComments,
    x = n && n.allowTrailingComma;
  function S() {
    for (;;) {
      let e = r.scan();
      switch (r.getTokenError()) {
        case 4:
          C(14);
          break;
        case 5:
          C(15);
          break;
        case 3:
          C(13);
          break;
        case 1:
          b || C(11);
          break;
        case 2:
          C(12);
          break;
        case 6:
          C(16);
      }
      switch (e) {
        case 12:
        case 13:
          b ? C(10) : v();
          break;
        case 16:
          C(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return e;
      }
    }
  }
  function C(e, t = [], n = []) {
    if ((y(e), t.length + n.length > 0)) {
      let e = r.getToken();
      for (; e !== 17;) {
        if (t.indexOf(e) !== -1) {
          S();
          break;
        }
        if (n.indexOf(e) !== -1) break;
        e = S();
      }
    }
  }
  function w(e) {
    let t = r.getTokenValue();
    return (e ? g(t) : (f(t), i.push(t)), S(), !0);
  }
  function T() {
    switch (r.getToken()) {
      case 11:
        let e = r.getTokenValue(),
          t = Number(e);
        (isNaN(t) && (C(2), (t = 0)), g(t));
        break;
      case 7:
        g(null);
        break;
      case 8:
        g(!0);
        break;
      case 9:
        g(!1);
        break;
      default:
        return !1;
    }
    return (S(), !0);
  }
  function E() {
    return r.getToken() === 10
      ? (w(!1),
        r.getToken() === 6 ? (_(`:`), S(), k() || C(4, [], [2, 5])) : C(5, [], [2, 5]),
        i.pop(),
        !0)
      : (C(3, [], [2, 5]), !1);
  }
  function D() {
    (d(), S());
    let e = !1;
    for (; r.getToken() !== 2 && r.getToken() !== 17;) {
      if (r.getToken() === 5) {
        if ((e || C(4, [], []), _(`,`), S(), r.getToken() === 2 && x)) break;
      } else e && C(6, [], []);
      (E() || C(4, [], [2, 5]), (e = !0));
    }
    return (p(), r.getToken() === 2 ? S() : C(7, [2], []), !0);
  }
  function O() {
    (m(), S());
    let e = !0,
      t = !1;
    for (; r.getToken() !== 4 && r.getToken() !== 17;) {
      if (r.getToken() === 5) {
        if ((t || C(4, [], []), _(`,`), S(), r.getToken() === 4 && x)) break;
      } else t && C(6, [], []);
      (e ? (i.push(0), (e = !1)) : i[i.length - 1]++, k() || C(4, [], [4, 5]), (t = !0));
    }
    return (h(), e || i.pop(), r.getToken() === 4 ? S() : C(8, [4], []), !0);
  }
  function k() {
    switch (r.getToken()) {
      case 3:
        return O();
      case 1:
        return D();
      case 10:
        return w(!0);
      default:
        return T();
    }
  }
  return (
    S(),
    r.getToken() === 17
      ? n.allowEmptyContent
        ? !0
        : (C(4, [], []), !1)
      : k()
        ? (r.getToken() !== 17 && C(9, [], []), !0)
        : (C(4, [], []), !1)
  );
}
var Jt;
(function (e) {
  ((e[(e.None = 0)] = `None`),
    (e[(e.UnexpectedEndOfComment = 1)] = `UnexpectedEndOfComment`),
    (e[(e.UnexpectedEndOfString = 2)] = `UnexpectedEndOfString`),
    (e[(e.UnexpectedEndOfNumber = 3)] = `UnexpectedEndOfNumber`),
    (e[(e.InvalidUnicode = 4)] = `InvalidUnicode`),
    (e[(e.InvalidEscapeCharacter = 5)] = `InvalidEscapeCharacter`),
    (e[(e.InvalidCharacter = 6)] = `InvalidCharacter`));
})((Jt ||= {}));
var Yt;
(function (e) {
  ((e[(e.OpenBraceToken = 1)] = `OpenBraceToken`),
    (e[(e.CloseBraceToken = 2)] = `CloseBraceToken`),
    (e[(e.OpenBracketToken = 3)] = `OpenBracketToken`),
    (e[(e.CloseBracketToken = 4)] = `CloseBracketToken`),
    (e[(e.CommaToken = 5)] = `CommaToken`),
    (e[(e.ColonToken = 6)] = `ColonToken`),
    (e[(e.NullKeyword = 7)] = `NullKeyword`),
    (e[(e.TrueKeyword = 8)] = `TrueKeyword`),
    (e[(e.FalseKeyword = 9)] = `FalseKeyword`),
    (e[(e.StringLiteral = 10)] = `StringLiteral`),
    (e[(e.NumericLiteral = 11)] = `NumericLiteral`),
    (e[(e.LineCommentTrivia = 12)] = `LineCommentTrivia`),
    (e[(e.BlockCommentTrivia = 13)] = `BlockCommentTrivia`),
    (e[(e.LineBreakTrivia = 14)] = `LineBreakTrivia`),
    (e[(e.Trivia = 15)] = `Trivia`),
    (e[(e.Unknown = 16)] = `Unknown`),
    (e[(e.EOF = 17)] = `EOF`));
})((Yt ||= {}));
var Xt = Kt,
  Zt;
(function (e) {
  ((e[(e.InvalidSymbol = 1)] = `InvalidSymbol`),
    (e[(e.InvalidNumberFormat = 2)] = `InvalidNumberFormat`),
    (e[(e.PropertyNameExpected = 3)] = `PropertyNameExpected`),
    (e[(e.ValueExpected = 4)] = `ValueExpected`),
    (e[(e.ColonExpected = 5)] = `ColonExpected`),
    (e[(e.CommaExpected = 6)] = `CommaExpected`),
    (e[(e.CloseBraceExpected = 7)] = `CloseBraceExpected`),
    (e[(e.CloseBracketExpected = 8)] = `CloseBracketExpected`),
    (e[(e.EndOfFileExpected = 9)] = `EndOfFileExpected`),
    (e[(e.InvalidCommentToken = 10)] = `InvalidCommentToken`),
    (e[(e.UnexpectedEndOfComment = 11)] = `UnexpectedEndOfComment`),
    (e[(e.UnexpectedEndOfString = 12)] = `UnexpectedEndOfString`),
    (e[(e.UnexpectedEndOfNumber = 13)] = `UnexpectedEndOfNumber`),
    (e[(e.InvalidUnicode = 14)] = `InvalidUnicode`),
    (e[(e.InvalidEscapeCharacter = 15)] = `InvalidEscapeCharacter`),
    (e[(e.InvalidCharacter = 16)] = `InvalidCharacter`));
})((Zt ||= {}));
var Qt = `https://open-vsx.org/api/-/search`,
  $t = 20971520,
  en = 524288,
  tn = 262144,
  nn = 262144,
  rn = 1e4,
  an = 262144,
  on = 5e3,
  sn = 104857600,
  cn = 200,
  ln = 40,
  un = 8,
  dn = 1024,
  fn = 128,
  pn = 320,
  mn = new Set([
    `0BSD`,
    `Apache-2.0`,
    `BSD-2-Clause`,
    `BSD-3-Clause`,
    `CC0-1.0`,
    `ISC`,
    `MIT`,
    `MPL-2.0`,
    `Unlicense`,
  ]),
  hn = new Set(
    `activityBar.background,activityBarBadge.background,badge.background,button.background,button.foreground,contrastBorder,descriptionForeground,disabledForeground,dropdown.background,dropdown.border,editor.background,editor.foreground,editor.findMatchBackground,editor.findMatchForeground,editor.findMatchHighlightBackground,editor.findMatchHighlightForeground,editor.selectionBackground,editorCursor.foreground,editorError.foreground,editorGroup.border,editorPane.background,editorWarning.foreground,editorWidget.background,errorForeground,focusBorder,foreground,input.border,input.placeholderForeground,list.activeSelectionBackground,list.hoverBackground,list.inactiveSelectionBackground,menu.background,panel.background,panel.border,progressBar.background,quickInput.background,scrollbarSlider.background,sideBar.background,sideBar.border,sideBar.foreground,terminal.background,terminal.foreground,terminal.selectionBackground,terminalCursor.foreground,textCodeBlock.background,textLink.foreground`.split(
      `,`,
    ),
  );
function gn(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function _n(e) {
  return [...b(new TextEncoder().encode(e))]
    .slice(0, 6)
    .map((e) => e.toString(16).padStart(2, `0`))
    .join(``);
}
function vn(e, t) {
  return `ovx-theme-${_n(`${e}:${t}`)}`;
}
function yn(e) {
  let t = `open-vsx:${e.toLowerCase()}`;
  return /^[a-z0-9][a-z0-9.:-]{0,127}$/.test(t) ? t : `open-vsx:${_n(e)}`;
}
function bn(e) {
  if (typeof e != `string`) return null;
  try {
    let t = new URL(e);
    return t.protocol === `https:` && t.hostname.toLowerCase() === `open-vsx.org`
      ? t.toString()
      : null;
  } catch {
    return null;
  }
}
function xn(e) {
  let t = typeof e == `string` ? e : gn(e) && typeof e.url == `string` ? e.url : null;
  if (!t) return null;
  try {
    let e = new URL(t);
    return e.protocol === `https:` && !e.username && !e.password ? e.toString() : null;
  } catch {
    return null;
  }
}
function Sn(e) {
  let t = gn(e.contributes) ? e.contributes : null;
  return Array.isArray(t?.themes) ? t.themes.filter(gn) : [];
}
function Cn(e, t) {
  return typeof e.license == `string` && e.license.trim().toLowerCase() === t.toLowerCase();
}
function wn(e) {
  if (!gn(e) || !gn(e.files)) throw Error(`Open VSX returned malformed theme details.`);
  let t = typeof e.namespace == `string` ? e.namespace.trim() : ``,
    n = typeof e.name == `string` ? e.name.trim() : ``,
    r = (typeof e.displayName == `string` ? e.displayName.trim() : ``) || n,
    i = typeof e.version == `string` ? e.version.trim() : ``,
    a = typeof e.license == `string` ? e.license.trim() : ``,
    o = bn(e.files.manifest),
    s = bn(e.files.sha256),
    c = bn(e.files.download);
  if (!t || !n || !i || !o || !s || !c) throw Error(`Open VSX returned malformed theme details.`);
  if (!mn.has(a)) return null;
  let l = `${t}.${n}`;
  return {
    id: l,
    collectionId: yn(l),
    name: r,
    publisher: t,
    description: typeof e.description == `string` ? e.description : ``,
    downloadCount:
      typeof e.downloadCount == `number` && Number.isFinite(e.downloadCount) ? e.downloadCount : 0,
    iconUrl: bn(e.files.icon),
    sourceUrl: xn(e.repository) ?? xn(e.homepage) ?? xn(e.url),
    manifestUrl: o,
    sha256Url: s,
    vsixUrl: c,
    version: i,
    license: a,
  };
}
async function Tn(e, t) {
  let n = new AbortController(),
    r = () => n.abort();
  t?.aborted ? r() : t?.addEventListener(`abort`, r, { once: !0 });
  let i = setTimeout(r, rn);
  try {
    return await e(n.signal);
  } catch (e) {
    throw n.signal.aborted && !t?.aborted
      ? Error(`Open VSX took too long to respond.`, { cause: e })
      : e;
  } finally {
    (clearTimeout(i), t?.removeEventListener(`abort`, r));
  }
}
async function En(e, { signal: t, sortBy: n = `downloadCount` } = {}) {
  let r = e.trim();
  if (!r) return [];
  let i = new URL(Qt);
  (i.searchParams.set(`query`, r),
    i.searchParams.set(`category`, `Themes`),
    i.searchParams.set(`sortBy`, n),
    i.searchParams.set(`sortOrder`, `desc`),
    i.searchParams.set(`size`, `16`));
  let a = await Tn(async (e) => {
    let t = await fetch(i, { signal: e });
    if (!t.ok) throw Error(`Open VSX search is unavailable right now.`);
    let n = await Fn(t, en, `Open VSX returned an unexpectedly large response.`);
    try {
      return JSON.parse(new TextDecoder().decode(n));
    } catch {
      throw Error(`Open VSX returned an unreadable response.`);
    }
  }, t);
  if (!gn(a) || !Array.isArray(a.extensions))
    throw Error(`Open VSX returned an unreadable search response.`);
  let o = a.extensions.flatMap((e) => {
      if (!gn(e)) return [];
      let t = typeof e.namespace == `string` ? e.namespace : ``,
        n = typeof e.name == `string` ? e.name : ``;
      return t && n ? [[t, n]] : [];
    }),
    s = await Promise.allSettled(
      o.slice(0, 16).map(([e, n]) =>
        Tn(async (t) => {
          let r = `https://open-vsx.org/api/${encodeURIComponent(e)}/${encodeURIComponent(n)}`,
            i = await fetch(r, { signal: t });
          if (!i.ok) throw Error(`Open VSX theme details are unavailable.`);
          let a = await Fn(i, tn, `Open VSX returned an unexpectedly large detail response.`);
          try {
            let e = wn(JSON.parse(new TextDecoder().decode(a)));
            if (!e) return null;
            let [n, r] = await Promise.all([
              fetch(e.manifestUrl, { signal: t }),
              fetch(e.vsixUrl, { method: `HEAD`, signal: t }),
            ]);
            if (!n.ok) throw Error(`manifest unavailable`);
            if (!r.ok) return null;
            let i = Number(r.headers.get(`content-length`));
            if (Number.isFinite(i) && i > $t) return null;
            let o = await Fn(n, nn, `Open VSX returned an unexpectedly large manifest.`),
              s = Dn(new TextDecoder().decode(o), `Extension manifest`);
            return Sn(s).length > 0 && Cn(s, e.license) ? e : null;
          } catch {
            throw Error(`Open VSX returned unreadable theme details.`);
          }
        }, t),
      ),
    );
  if (t?.aborted) throw new DOMException(`The operation was aborted.`, `AbortError`);
  let c = s.filter((e) => e.status === `fulfilled`);
  if (o.length > 0 && c.length === 0)
    throw Error(`Open VSX theme details are unavailable right now.`);
  return c.flatMap((e) => (e.value ? [e.value] : [])).slice(0, 8);
}
function Dn(e, t) {
  let n = [],
    r = Xt(e, n, { allowTrailingComma: !0 });
  if (n.length > 0 || !gn(r)) throw Error(`${t} is not valid JSON.`);
  return r;
}
function On(e) {
  let t = {};
  if (gn(e.colors))
    for (let [n, r] of Object.entries(e.colors))
      hn.has(n) && typeof r == `string` && r.length <= fn && (t[n] = r);
  return { ...(typeof e.include == `string` ? { include: e.include } : {}), colors: t };
}
function kn(e, t = `extension/`) {
  if (e.length > dn || e.includes(`\0`) || e.startsWith(`/`) || /^[a-zA-Z]:/.test(e))
    throw Error(`Theme path is not a safe relative package path.`);
  let n = e.replaceAll(`\\`, `/`),
    r = t.split(`/`).slice(0, -1);
  for (let e of n.split(`/`))
    if (e && e !== `.`) {
      if (e === `..`) {
        if (r.length <= 1) throw Error(`Theme path escapes the extension package.`);
        r.pop();
      } else r.push(e);
    }
  return (r[0] !== `extension` && r.unshift(`extension`), r.join(`/`));
}
function An(e) {
  return e === `vs`
    ? `light`
    : e === `vs-dark`
      ? `dark`
      : e === `hc-black` || e === `hc-light`
        ? e
        : null;
}
function jn(e) {
  let t = new DataView(e.buffer, e.byteOffset, e.byteLength),
    n = Math.max(0, e.byteLength - 65557),
    r = e.byteLength - 22;
  for (
    ;
    r >= n &&
    (t.getUint32(r, !0) !== 101010256 || r + 22 + t.getUint16(r + 20, !0) !== e.byteLength);
  )
    --r;
  if (r < n) throw Error(`That extension package has no ZIP directory.`);
  let i = t.getUint32(r + 12, !0),
    a = t.getUint32(r + 16, !0),
    o = a + i;
  if (o !== r || o > e.byteLength)
    throw Error(`That extension package has an invalid ZIP directory.`);
  let s = 0,
    c = 0,
    l = a;
  for (; l < o;) {
    if (l + 46 > o || t.getUint32(l, !0) !== 33639248)
      throw Error(`That extension package has an invalid ZIP directory.`);
    if (((s += 1), s > on)) throw Error(`That extension package has too many files.`);
    let e = t.getUint32(l + 20, !0),
      n = t.getUint32(l + 24, !0);
    if (e === 4294967295 || n === 4294967295)
      throw Error(`That extension package has unsupported ZIP64 metadata.`);
    if (((c += n), c > sn))
      throw Error(`That extension package expands beyond the safe import limit.`);
    if (n > 0 && (e === 0 || n / e > cn))
      throw Error(`That extension package has an unsafe compression ratio.`);
    let r = t.getUint16(l + 28, !0),
      i = t.getUint16(l + 30, !0),
      a = t.getUint16(l + 32, !0);
    l += 46 + r + i + a;
  }
  if (l !== o) throw Error(`That extension package has an invalid ZIP directory.`);
  if (t.getUint16(r + 20, !0) === 0) return e;
  let u = e.slice(0, r + 22);
  return ((u[r + 20] = 0), (u[r + 21] = 0), u);
}
function Mn(e) {
  let t = Object.values(e.files);
  if (t.length > on) throw Error(`That extension package has too many files.`);
  for (let e of t) e.unsafeOriginalName && kn(e.unsafeOriginalName);
}
async function Nn(e, t, n, r) {
  r?.throwIfAborted();
  let i = e.file(t);
  if (!i) throw Error(`${n} is missing from the extension package.`);
  if (typeof i._data?.uncompressedSize != `number` || !i.internalStream)
    throw Error(`${n} has unreadable size metadata.`);
  if (i._data.uncompressedSize > an) throw Error(`${n} is too large.`);
  return new Promise((e, t) => {
    let a = [],
      o = 0,
      s = !1,
      c = i.internalStream(`uint8array`),
      l = () => r?.removeEventListener(`abort`, u),
      u = () => {
        s || ((s = !0), c.pause(), l(), t(r?.reason));
      };
    (r?.addEventListener(`abort`, u, { once: !0 }),
      c
        .on(`data`, (e) => {
          s ||
            ((o += e.byteLength),
            o > an ? ((s = !0), c.pause(), l(), t(Error(`${n} is too large.`))) : a.push(e));
        })
        .on(`error`, (e) => {
          s || ((s = !0), l(), t(e));
        })
        .on(`end`, () => {
          if (s) return;
          ((s = !0), l());
          let t = new Uint8Array(o),
            n = 0;
          for (let e of a) (t.set(e, n), (n += e.byteLength));
          e(new TextDecoder().decode(t));
        })
        .resume());
  });
}
async function Pn(e, t, n, r, i = new Set(), a) {
  if ((a?.throwIfAborted(), i.size >= un)) throw Error(`Theme includes are nested too deeply.`);
  if (i.has(t)) throw Error(`Theme includes contain a cycle.`);
  let o = n.get(t);
  if (o) return o;
  if (((r.files += 1), r.files > pn))
    throw Error(`That extension references too many theme files.`);
  let s = On(Dn(await Nn(e, t, t, a), t));
  if (typeof s.include != `string`) return (n.set(t, s), s);
  let c = kn(s.include, t),
    l = new Set(i);
  l.add(t);
  let u = await Pn(e, c, n, r, l, a),
    d = {
      ...u,
      ...s,
      colors: { ...(gn(u.colors) ? u.colors : {}), ...(gn(s.colors) ? s.colors : {}) },
    };
  return (n.set(t, d), d);
}
async function Fn(e, t, n) {
  let r = e.headers.get(`content-length`);
  if (r && Number(r) > t) throw Error(n);
  if (!e.body) {
    let r = new Uint8Array(await e.arrayBuffer());
    if (r.byteLength > t) throw Error(n);
    return r;
  }
  let i = e.body.getReader(),
    a = [],
    o = 0;
  try {
    for (;;) {
      let { done: e, value: r } = await i.read();
      if (e) break;
      if (((o += r.byteLength), o > t)) throw (await i.cancel(), Error(n));
      a.push(r);
    }
  } finally {
    i.releaseLock();
  }
  let s = new Uint8Array(o),
    c = 0;
  for (let e of a) (s.set(e, c), (c += e.byteLength));
  return s;
}
async function In(e, t) {
  let n = await fetch(e, t ? { signal: t } : {});
  if (!n.ok) throw Error(`That Open VSX theme could not be downloaded.`);
  return Fn(n, $t, `That theme extension is too large to import safely.`);
}
async function Ln(e, t) {
  let n = await fetch(e.manifestUrl, t ? { signal: t } : {});
  if (!n.ok) throw Error(`That Open VSX extension has no readable manifest.`);
  let r = await Fn(n, nn, `That Open VSX extension manifest is too large.`),
    i = Sn(Dn(new TextDecoder().decode(r), `Extension manifest`));
  if (i.length === 0) throw Error(`That extension does not contain color themes.`);
  if (i.length > ln) throw Error(`That extension contains too many color themes to import safely.`);
  let a = await In(e.vsixUrl, t);
  t?.throwIfAborted();
  let o = await fetch(e.sha256Url, t ? { signal: t } : {});
  if (!o.ok) throw Error(`That Open VSX theme has no readable checksum.`);
  let s = new TextDecoder()
    .decode(await Fn(o, 256, `That Open VSX checksum response is invalid.`))
    .trim()
    .split(/\s+/)[0];
  if (!s || !/^[a-f\d]{64}$/i.test(s)) throw Error(`That Open VSX theme has an invalid checksum.`);
  if (
    (t?.throwIfAborted(),
    [...b(a)]
      .map((e) => e.toString(16).padStart(2, `0`))
      .join(``)
      .toLowerCase() !== s.toLowerCase())
  )
    throw Error(`That Open VSX theme failed its integrity check.`);
  t?.throwIfAborted();
  let c;
  try {
    let e = jn(a);
    ((c = await Rt.default.loadAsync(e)), t?.throwIfAborted(), Mn(c));
  } catch (e) {
    throw (
      t?.aborted && t.throwIfAborted(),
      e instanceof Error && e.message.startsWith(`That extension package`)
        ? e
        : Error(`That Open VSX extension package could not be opened.`, { cause: e })
    );
  }
  let l = Dn(await Nn(c, `extension/package.json`, `Extension manifest`, t), `Extension manifest`);
  if (
    typeof l.publisher != `string` ||
    l.publisher.toLowerCase() !== e.publisher.toLowerCase() ||
    typeof l.name != `string` ||
    `${l.publisher}.${l.name}`.toLowerCase() !== e.id.toLowerCase() ||
    l.version !== e.version
  )
    throw Error(`That extension package does not match the selected Open VSX theme.`);
  if (!Cn(l, e.license))
    throw Error(`That extension package does not match its advertised license.`);
  let u = Sn(l);
  if (u.length === 0) throw Error(`That extension does not contain color themes.`);
  if (u.length > ln) throw Error(`That extension contains too many color themes to import safely.`);
  let d = [],
    f = [],
    p = new Map(),
    m = { files: 0 };
  for (let n of u)
    if ((t?.throwIfAborted(), typeof n.path != `string`)) f.push(`theme path is missing`);
    else
      try {
        let r = kn(n.path),
          i = await Pn(c, r, p, m, new Set(), t),
          a = An(n.uiTheme),
          o = typeof n.label == `string` && n.label.trim() ? n.label.trim() : e.name,
          s = { ...i, displayName: o, ...(a ? { type: a } : {}) };
        if (!jt(s)) throw Error(`not a VS Code color theme`);
        d.push({ theme: Ft(s), sourceName: r.split(`/`).at(-1), sourcePath: r });
      } catch (e) {
        (t?.throwIfAborted(), f.push(e instanceof Error ? e.message : `theme could not be read`));
      }
  if (f.length > 0)
    throw Error(`One or more color themes in that extension could not be imported safely.`);
  if (d.length === 0) throw Error(`That extension has no compatible color themes.`);
  let h = e.id.toLowerCase(),
    g = new Map();
  for (let { sourcePath: e } of d) g.set(e, (g.get(e) ?? 0) + 1);
  let _ = new Map(),
    v = d.map(({ sourcePath: e }) => {
      if (g.get(e) === 1) return e;
      let t = _.get(e) ?? 0;
      return (_.set(e, t + 1), t === 0 ? e : `${e}\0${t}`);
    }),
    y = Lt(
      It(
        Lt(d).map((e, t) => ({ ...e, id: vn(h, v[t]) })),
        { pairedId: (e, t) => vn(h, [e.id, t.id].sort().join(`:`)) },
      ).map((e) => ({ theme: e })),
    ),
    x = { id: e.collectionId, label: e.name.slice(0, 48) };
  return y.map((e) => ({ ...e, collection: x }));
}
var Rn = new Intl.NumberFormat(void 0, { notation: `compact`, maximumFractionDigits: 1 }),
  zn = [`Dracula`, `Catppuccin`, `Nord`, `Tokyo Night`],
  Bn = [
    { value: `downloadCount`, label: `Most downloaded` },
    { value: `rating`, label: `Best rated` },
    { value: `timestamp`, label: `Newest` },
    { value: `relevance`, label: `Most relevant` },
  ],
  Vn = 350;
function Hn(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return null;
  }
}
function Un(e) {
  let t = Hn(e),
    n = t === null ? void 0 : C.findByPublicDomain(t),
    r = n ? ct(n) : l;
  return (0, $.jsx)(r, { className: `size-3.5` });
}
function Wn(e) {
  let t = (0, vt.c)(3),
    { extension: n } = e,
    [r, i] = (0, Q.useState)(!1),
    a;
  return (
    t[0] !== n.iconUrl || t[1] !== r
      ? ((a = (0, $.jsx)(`div`, {
          className: `flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted text-muted-foreground`,
          children:
            n.iconUrl && !r
              ? (0, $.jsx)(`img`, {
                  alt: ``,
                  className: `size-full object-cover`,
                  loading: `lazy`,
                  referrerPolicy: `no-referrer`,
                  src: n.iconUrl,
                  onError: () => i(!0),
                })
              : (0, $.jsx)(u, { className: `size-4` }),
        })),
        (t[0] = n.iconUrl),
        (t[1] = r),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function Gn(e) {
  let t = (0, vt.c)(83),
    { open: n, onInstalled: r } = e,
    [i, a] = (0, Q.useState)(``),
    [o, c] = (0, Q.useState)(`downloadCount`),
    [l, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(null),
    [m, h] = (0, Q.useState)(!1),
    [g, _] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(null),
    b = (0, Q.useRef)(null),
    [S, C] = (0, Q.useState)(null),
    [w, T] = (0, Q.useState)(null),
    [D, O] = (0, Q.useState)(!1),
    [k, j] = (0, Q.useState)(n);
  n !== k &&
    (j(n),
    n &&
      (a(``),
      c(`downloadCount`),
      u(null),
      f(null),
      h(!1),
      _(null),
      y(null),
      C(null),
      T(null),
      O(!1)));
  let F, I;
  (t[0] === n
    ? ((F = t[1]), (I = t[2]))
    : ((F = () => {
        if (n)
          return () => {
            (b.current?.abort(), (b.current = null));
          };
      }),
      (I = [n]),
      (t[0] = n),
      (t[1] = F),
      (t[2] = I)),
    (0, Q.useEffect)(F, I));
  let L;
  t[3] !== g || t[4] !== i
    ? ((L = !i.trim() && g === null), (t[3] = g), (t[4] = i), (t[5] = L))
    : (L = t[5]);
  let R = L;
  R &&
    (l !== null || d !== null || m || S !== null || w !== null) &&
    (u(null), f(null), h(!1), C(null), T(null));
  let z, V;
  (t[6] === R
    ? ((z = t[7]), (V = t[8]))
    : ((z = () => {
        R && (b.current?.abort(), (b.current = null));
      }),
      (V = [R]),
      (t[6] = R),
      (t[7] = z),
      (t[8] = V)),
    (0, Q.useEffect)(z, V));
  let H;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        b.current?.abort();
        let e = new AbortController();
        return ((b.current = e), e);
      }),
      (t[9] = H))
    : (H = t[9]);
  let U = H,
    W;
  t[10] === o
    ? (W = t[11])
    : ((W = (e, t) => {
        let n = `${e}\u0000${o}`;
        En(e, { signal: t.signal, sortBy: o })
          .then(
            (e) => {
              t.signal.aborted || (u(e), C(n));
            },
            (e) => {
              t.signal.aborted ||
                (u(null), C(null), f(e instanceof Error ? e.message : `Open VSX search failed.`));
            },
          )
          .then(() => {
            b.current === t && ((b.current = null), h(!1));
          });
      }),
      (t[10] = o),
      (t[11] = W));
  let G = W,
    K;
  t[12] === G
    ? (K = t[13])
    : ((K = (e) => {
        let t = e.trim();
        t && (f(null), h(!0), G(t, U()));
      }),
      (t[12] = G),
      (t[13] = K));
  let q = K,
    ee;
  t[14] === i ? (ee = t[15]) : ((ee = i.trim()), (t[14] = i), (t[15] = ee));
  let te = B(ee, Vn),
    Y = `${te}\u0000${o}`,
    X = n && g === null && te !== `` && te === i.trim(),
    Z = w?.key !== Y;
  if (X && (Z || D)) {
    let e = S !== Y;
    (T({ key: Y, query: te, fetch: e }), O(!1), (e || Z) && f(null), h(e));
  }
  let ne;
  t[16] === G
    ? (ne = t[17])
    : ((ne = (e) => {
        G(e, U());
      }),
      (t[16] = G),
      (t[17] = ne));
  let re = (0, Q.useEffectEvent)(ne),
    oe;
  t[18] !== re || t[19] !== w
    ? ((oe = () => {
        w && (w.fetch ? re(w.query) : (b.current?.abort(), (b.current = null)));
      }),
      (t[18] = re),
      (t[19] = w),
      (t[20] = oe))
    : (oe = t[20]);
  let se;
  (t[21] === w ? (se = t[22]) : ((se = [w]), (t[21] = w), (t[22] = se)), (0, Q.useEffect)(oe, se));
  let ce;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (e) => {
        let t = Bn.find((t) => t.value === e)?.value;
        t && c(t);
      }),
      (t[23] = ce))
    : (ce = t[23]);
  let le = ce,
    ue;
  t[24] === r
    ? (ue = t[25])
    : ((ue = async (e, t) => {
        f(null);
        let n;
        try {
          n = ae(e.collectionId);
        } catch (e) {
          let t = e;
          f(t instanceof Error ? t.message : `Installed themes could not be read.`);
          return;
        }
        let i = n.length > 0;
        if (i && !t) {
          y(e);
          return;
        }
        b.current?.abort();
        let a = new AbortController();
        ((b.current = a), h(!1), O(!0), _(e.id));
        try {
          let t = await Ln(e, a.signal);
          if (!a.signal.aborted) {
            let a = J(e.collectionId, t, { expectedCollection: n });
            r(a, { updated: i });
          }
        } catch (e) {
          let t = e;
          a.signal.aborted || f(t instanceof Error ? t.message : `That theme could not be added.`);
        }
        b.current === a && ((b.current = null), _(null));
      }),
      (t[24] = r),
      (t[25] = ue));
  let de = ue,
    fe;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsxs)(`div`, {
        children: [
          (0, $.jsx)(`h3`, {
            className: `text-sm font-medium`,
            id: `theme-search-heading`,
            children: `Search community themes`,
          }),
          (0, $.jsx)(`p`, {
            className: `mt-0.5 text-muted-foreground text-xs`,
            children: `Find open-source themes from Open VSX.`,
          }),
        ],
      })),
      (t[26] = fe))
    : (fe = t[26]);
  let pe;
  t[27] === m
    ? (pe = t[28])
    : ((pe = (0, $.jsx)(Pe, {
        children: m ? (0, $.jsx)(E, { "aria-hidden": !0 }) : (0, $.jsx)(s, { "aria-hidden": !0 }),
      })),
      (t[27] = m),
      (t[28] = pe));
  let me;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (e) => a(e.currentTarget.value)), (t[29] = me))
    : (me = t[29]);
  let he;
  t[30] !== g || t[31] !== m || t[32] !== i || t[33] !== q
    ? ((he = (e) => {
        e.nativeEvent.isComposing ||
          e.keyCode === 229 ||
          (e.key === `Enter` && !m && g === null && q(i.trim()));
      }),
      (t[30] = g),
      (t[31] = m),
      (t[32] = i),
      (t[33] = q),
      (t[34] = he))
    : (he = t[34]);
  let ge;
  t[35] !== i || t[36] !== he
    ? ((ge = (0, $.jsx)(Fe, {
        "aria-label": `Search Open VSX themes`,
        autoFocus: !0,
        onChange: me,
        onKeyDown: he,
        placeholder: `Search themes...`,
        size: `lg`,
        type: `search`,
        value: i,
      })),
      (t[35] = i),
      (t[36] = he),
      (t[37] = ge))
    : (ge = t[37]);
  let _e;
  t[38] !== pe || t[39] !== ge
    ? ((_e = (0, $.jsxs)(Ie, { children: [pe, ge] })), (t[38] = pe), (t[39] = ge), (t[40] = _e))
    : (_e = t[40]);
  let ve;
  t[41] !== g || t[42] !== m || t[43] !== i || t[44] !== l || t[45] !== q || t[46] !== o
    ? ((ve =
        !m || l !== null
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 flex-wrap items-center gap-1.5`,
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `text-muted-foreground text-xs`,
                      children: `Popular`,
                    }),
                    zn.map((e) =>
                      (0, $.jsx)(
                        x,
                        {
                          disabled: g !== null,
                          size: `xs`,
                          variant: `ghost`,
                          onClick: () => {
                            i.trim() === e ? q(e) : a(e);
                          },
                          children: e,
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                l && l.length > 0
                  ? (0, $.jsxs)(`div`, {
                      className: `flex shrink-0 items-center justify-end gap-2`,
                      children: [
                        (0, $.jsx)(`p`, {
                          className: `text-muted-foreground text-xs`,
                          children: `Sort`,
                        }),
                        (0, $.jsxs)(P, {
                          disabled: g !== null,
                          value: o,
                          onValueChange: le,
                          children: [
                            (0, $.jsx)(N, {
                              size: `sm`,
                              className: `w-40`,
                              "aria-label": `Sort themes`,
                              children: (0, $.jsx)(A, {
                                children: Bn.find((e) => e.value === o)?.label,
                              }),
                            }),
                            (0, $.jsx)(M, {
                              align: `end`,
                              alignItemWithTrigger: !1,
                              children: Bn.map(Kn),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[41] = g),
      (t[42] = m),
      (t[43] = i),
      (t[44] = l),
      (t[45] = q),
      (t[46] = o),
      (t[47] = ve))
    : (ve = t[47]);
  let ye = m
      ? `Searching themes...`
      : l
        ? `${l.length} supported ${l.length === 1 ? `theme` : `themes`} found.`
        : ``,
    be;
  t[48] === ye
    ? (be = t[49])
    : ((be = (0, $.jsx)(`div`, { className: `sr-only`, role: `status`, children: ye })),
      (t[48] = ye),
      (t[49] = be));
  let xe;
  t[50] === d
    ? (xe = t[51])
    : ((xe = d
        ? (0, $.jsx)(Be, {
            variant: `error`,
            role: `status`,
            "aria-live": `polite`,
            children: (0, $.jsx)(ze, { children: d }),
          })
        : null),
      (t[50] = d),
      (t[51] = xe));
  let Se;
  t[52] !== m || t[53] !== l
    ? ((Se =
        m && l === null
          ? (0, $.jsxs)(`div`, {
              className: `flex min-h-20 items-center justify-center gap-2 text-muted-foreground text-sm`,
              children: [(0, $.jsx)(E, {}), ` Searching themes...`],
            })
          : null),
      (t[52] = m),
      (t[53] = l),
      (t[54] = Se))
    : (Se = t[54]);
  let Ce;
  t[55] !== de || t[56] !== g || t[57] !== l
    ? ((Ce = l
        ? l.length === 0
          ? (0, $.jsxs)(`div`, {
              className: `flex min-h-40 flex-col items-center justify-center rounded-2xl border border-dashed text-center`,
              children: [
                (0, $.jsx)(`p`, {
                  className: `text-sm font-medium`,
                  children: `No supported open-source themes found`,
                }),
                (0, $.jsx)(`p`, {
                  className: `mt-1 text-muted-foreground text-xs`,
                  children: `Try a broader search.`,
                }),
              ],
            })
          : (0, $.jsx)(`div`, {
              className: `grid gap-2 sm:grid-cols-2`,
              children: l.map((e) => {
                let t = g === e.id,
                  n = ie().some((t) => t.collection?.id === e.collectionId),
                  r = n ? `Update` : `Install`,
                  i = n ? `Updating` : `Installing`;
                return (0, $.jsxs)(
                  `article`,
                  {
                    className: `group flex min-w-0 flex-col gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors hover:bg-accent/20`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 gap-3`,
                        children: [
                          (0, $.jsx)(Wn, { extension: e }, e.iconUrl),
                          (0, $.jsxs)(`div`, {
                            className: `min-w-0 flex-1`,
                            children: [
                              (0, $.jsx)(`h4`, {
                                className: `truncate text-sm font-medium`,
                                children: e.name,
                              }),
                              (0, $.jsxs)(`p`, {
                                className: `truncate text-muted-foreground text-xs`,
                                children: [
                                  e.publisher,
                                  ` · `,
                                  Rn.format(e.downloadCount),
                                  ` `,
                                  `downloads`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`p`, {
                        className: `line-clamp-2 min-h-8 text-muted-foreground text-xs leading-4`,
                        children: e.description || `A community color theme for your editor.`,
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `mt-auto flex items-center justify-between gap-2`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `flex min-w-0 items-center gap-2`,
                            children: e.sourceUrl
                              ? (0, $.jsx)(x, {
                                  "aria-label": `View source for ${e.name}`,
                                  render: (0, $.jsx)(`a`, {
                                    href: e.sourceUrl,
                                    rel: `noreferrer`,
                                    target: `_blank`,
                                  }),
                                  size: `icon-micro`,
                                  variant: `ghost-muted`,
                                  children: Un(e.sourceUrl),
                                })
                              : null,
                          }),
                          (0, $.jsxs)(x, {
                            "aria-label": `${t ? i : r} ${e.name}`,
                            disabled: g !== null,
                            size: `xs`,
                            variant: `outline`,
                            onClick: () => void de(e, !1),
                            children: [
                              t ? (0, $.jsx)(E, {}) : n ? (0, $.jsx)(He, {}) : (0, $.jsx)(p, {}),
                              t ? `${i}...` : r,
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            })
        : null),
      (t[55] = de),
      (t[56] = g),
      (t[57] = l),
      (t[58] = Ce))
    : (Ce = t[58]);
  let we = v !== null,
    Te;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (e) => {
        e || y(null);
      }),
      (t[59] = Te))
    : (Te = t[59]);
  let Ee = v?.name,
    De;
  t[60] === Ee
    ? (De = t[61])
    : ((De = (0, $.jsxs)(Qe, { children: [`Update “`, Ee, `”?`] })), (t[60] = Ee), (t[61] = De));
  let Oe;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(ot, {
        children: `This replaces its installed variants, including any local edits. Variants no longer in the extension will be removed.`,
      })),
      (t[62] = Oe))
    : (Oe = t[62]);
  let ke;
  t[63] === De
    ? (ke = t[64])
    : ((ke = (0, $.jsxs)($e, { children: [De, Oe] })), (t[63] = De), (t[64] = ke));
  let Ae;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(rt, { render: (0, $.jsx)(x, { variant: `outline` }), children: `Cancel` })),
      (t[65] = Ae))
    : (Ae = t[65]);
  let je;
  t[66] !== de || t[67] !== v
    ? ((je = (0, $.jsxs)(Ge, {
        children: [
          Ae,
          (0, $.jsx)(x, {
            onClick: () => {
              let e = v;
              (y(null), e && de(e, !0));
            },
            children: `Update theme`,
          }),
        ],
      })),
      (t[66] = de),
      (t[67] = v),
      (t[68] = je))
    : (je = t[68]);
  let Me;
  t[69] !== ke || t[70] !== je
    ? ((Me = (0, $.jsxs)(dt, { children: [ke, je] })), (t[69] = ke), (t[70] = je), (t[71] = Me))
    : (Me = t[71]);
  let Ne;
  t[72] !== we || t[73] !== Me
    ? ((Ne = (0, $.jsx)(Je, { open: we, onOpenChange: Te, children: Me })),
      (t[72] = we),
      (t[73] = Me),
      (t[74] = Ne))
    : (Ne = t[74]);
  let Le;
  return (
    t[75] !== _e ||
    t[76] !== ve ||
    t[77] !== be ||
    t[78] !== xe ||
    t[79] !== Se ||
    t[80] !== Ce ||
    t[81] !== Ne
      ? ((Le = (0, $.jsxs)(`section`, {
          className: `space-y-3`,
          "aria-labelledby": `theme-search-heading`,
          children: [fe, _e, ve, be, xe, Se, Ce, Ne],
        })),
        (t[75] = _e),
        (t[76] = ve),
        (t[77] = be),
        (t[78] = xe),
        (t[79] = Se),
        (t[80] = Ce),
        (t[81] = Ne),
        (t[82] = Le))
      : (Le = t[82]),
    Le
  );
}
function Kn(e) {
  return (0, $.jsx)(k, { hideIndicator: !0, value: e.value, children: e.label }, e.value);
}
var qn = 262144,
  Jn = 2e4;
function Yn(e) {
  return e >= 1048576
    ? `${(e / 1048576).toFixed(1)} MB`
    : e >= 1024
      ? `${Math.round(e / 1024)} KB`
      : `${e} bytes`;
}
function Xn(e) {
  return e <= qn
    ? null
    : `That file is ${Yn(e)}. Theme files are only a few KB, so this one was not read (limit ${Yn(qn)}).`;
}
function Zn(e) {
  return e.replace(
    /[&<>"']/g,
    (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e] ?? e,
  );
}
function Qn(e) {
  let t = /"(?:\\.|[^"\\])*"|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null/g,
    n = ``,
    r = 0;
  for (let i of e.matchAll(t)) {
    let t = i[0],
      a = i.index ?? 0;
    n += Zn(e.slice(r, a));
    let o = `text-[var(--app-theme-secondary-foreground,var(--color-amber-600))]`;
    (t.startsWith(`"`)
      ? (o = /^\s*:/.test(e.slice(a + t.length))
          ? `text-[var(--app-theme-accent,var(--color-blue-600))]`
          : `text-[var(--app-theme-message-action,var(--color-emerald-600))]`)
      : (t === `true` || t === `false` || t === `null`) &&
        (o = `text-[var(--app-theme-accent-surface-foreground,var(--color-violet-600))]`),
      (n += `<span class="${o}">${Zn(t)}</span>`),
      (r = a + t.length));
  }
  return n + Zn(e.slice(r));
}
function $n(e) {
  let t = (0, vt.c)(19),
    { id: n, value: r, onChange: i } = e,
    a = (0, Q.useRef)(null),
    o = r.length > Jn,
    s;
  t[0] !== o || t[1] !== r
    ? ((s = o ? `` : Qn(r)), (t[0] = o), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        let t = a.current;
        t &&
          ((t.scrollTop = e.currentTarget.scrollTop), (t.scrollLeft = e.currentTarget.scrollLeft));
      }),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d;
  t[4] !== c || t[5] !== o
    ? ((d = o
        ? null
        : (0, $.jsx)(`pre`, {
            ref: a,
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-0 m-0 overflow-hidden whitespace-pre-wrap break-words p-3 font-mono text-xs leading-5 text-foreground`,
            children: (0, $.jsx)(`code`, { dangerouslySetInnerHTML: { __html: c } }),
          })),
      (t[4] = c),
      (t[5] = o),
      (t[6] = d))
    : (d = t[6]);
  let f = o ? `text-foreground` : `text-transparent`,
    p;
  t[7] === f
    ? (p = t[8])
    : ((p = O(
        `relative z-10 block min-h-44 w-full resize-y overflow-auto bg-transparent p-3 font-mono text-xs leading-5 caret-foreground outline-none placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground`,
        f,
      )),
      (t[7] = f),
      (t[8] = p));
  let m;
  t[9] === i ? (m = t[10]) : ((m = (e) => i(e.currentTarget.value)), (t[9] = i), (t[10] = m));
  let h;
  t[11] !== n || t[12] !== p || t[13] !== m || t[14] !== r
    ? ((h = (0, $.jsx)(`textarea`, {
        "aria-label": `Theme JSON`,
        className: p,
        id: n,
        onChange: m,
        onScroll: u,
        placeholder: `{
  "version": 1,
  "name": "Aurora",
  "appearance": "light",
  "colors": { ... }
}`,
        spellCheck: !1,
        value: r,
      })),
      (t[11] = n),
      (t[12] = p),
      (t[13] = m),
      (t[14] = r),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== d || t[17] !== h
      ? ((g = (0, $.jsxs)(`div`, {
          className: `relative overflow-hidden rounded-xl border border-input bg-background shadow-xs/5 focus-within:border-ring focus-within:ring-3 focus-within:ring-inset focus-within:ring-ring/24`,
          children: [d, h],
        })),
        (t[16] = d),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function er(e) {
  let t = (0, vt.c)(104),
    { open: n, onOpenChange: r, onImported: i, onImportedMany: a } = e,
    o = (0, Q.useRef)(null),
    [s, c] = (0, Q.useState)(``),
    [l, u] = (0, Q.useState)(null),
    [d, f] = (0, Q.useState)(null),
    [p, m] = (0, Q.useState)(!1),
    [h, g] = (0, Q.useState)(!1),
    [v, y] = (0, Q.useState)(null),
    b = (0, Q.useRef)(0),
    [S, C] = (0, Q.useState)(n);
  S !== n && (C(n), g(!1), n && (c(``), u(null), f(null), m(!1), y(null)));
  let w, T;
  (t[0] === n
    ? ((w = t[1]), (T = t[2]))
    : ((w = () => {
        if (n)
          return (
            (b.current += 1),
            () => {
              b.current += 1;
            }
          );
      }),
      (T = [n]),
      (t[0] = n),
      (t[1] = w),
      (t[2] = T)),
    (0, Q.useEffect)(w, T));
  let E;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = async (e) => {
        let t = Xn(e.size);
        if (t) {
          f(t);
          return;
        }
        let n = (b.current += 1);
        m(!0);
        let r = await D(() => e.text());
        n === b.current &&
          (m(!1),
          r._tag === `Failure`
            ? f(`Could not read that file. Paste the JSON below instead.`)
            : (c(r.value), u(e.name), f(null)));
      }),
      (t[3] = E))
    : (E = t[3]);
  let k = E,
    A;
  if (t[4] !== a || t[5] !== r) {
    let e = (e) => {
        let t = (b.current += 1);
        return (
          m(!0),
          n(e, t).finally(() => {
            t === b.current && m(!1);
          })
        );
      },
      n = async (e, t) => {
        let n = [],
          i = [];
        for (let t of e)
          if (Xn(t.size)) n.push(`${t.name}: too large`);
          else
            try {
              let e = JSON.parse(await t.text());
              i.push({ sourceName: t.name, theme: jt(e) ? Ft(e) : se(e) });
            } catch (e) {
              let r = e;
              n.push(`${t.name}: ${r instanceof Error ? r.message : `not a theme file`}`);
            }
        if (t !== b.current) return;
        let o = [],
          s = [];
        for (let e of It(Lt(i)))
          if (ie().some((t) => t.id === e.id)) s.push(e);
          else
            try {
              o.push(U(e));
            } catch (t) {
              let r = t;
              n.push(`${e.label}: ${r instanceof Error ? r.message : `could not install`}`);
            }
        (o.length > 0 && a(o, { updated: !1 }),
          n.length > 0 ? f(n.join(`; `)) : s.length > 0 ? y(s) : o.length > 0 && r(!1));
      };
    ((A = (t) => {
      t.length !== 0 && (t.length === 1 ? k(t[0]) : e(t));
    }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = A));
  } else A = t[6];
  let j = A,
    M;
  t[7] === j
    ? (M = t[8])
    : ((M = () => {
        let e = window.desktopBridge;
        e?.pickThemeFiles
          ? e.pickThemeFiles().then((e) => {
              e && e.length !== 0 && j(e.map(rr));
            })
          : o.current?.click();
      }),
      (t[7] = j),
      (t[8] = M));
  let N = M,
    P;
  t[9] === j
    ? (P = t[10])
    : ((P = (e) => {
        let t = [...(e.currentTarget.files ?? [])];
        ((e.currentTarget.value = ``), j(t));
      }),
      (t[9] = j),
      (t[10] = P));
  let F = P,
    I;
  t[11] === j
    ? (I = t[12])
    : ((I = (e) => {
        (e.preventDefault(), g(!1), j([...e.dataTransfer.files]));
      }),
      (t[11] = j),
      (t[12] = I));
  let L = I,
    R = nr,
    z;
  t[13] !== v || t[14] !== l || t[15] !== a || t[16] !== r
    ? ((z = (e) => {
        if (!v) return;
        let t = [],
          n = [],
          i = v.length === 1 && l ? Nt(l.replace(/\.[^.]+$/, ``)) : null;
        for (let r of v)
          try {
            let n = e === `update` ? ie().find((e) => e.id === r.id) : void 0,
              a = n?.collection ? { ...r, collection: n.collection } : r;
            t.push(e === `update` ? K(a) : U(R(r, i)));
          } catch (e) {
            let t = e;
            n.push(`${r.label}: ${t instanceof Error ? t.message : `failed`}`);
          }
        (t.length > 0 && a(t, { updated: e === `update` }),
          y(null),
          n.length > 0 ? f(n.join(`; `)) : r(!1));
      }),
      (t[13] = v),
      (t[14] = l),
      (t[15] = a),
      (t[16] = r),
      (t[17] = z))
    : (z = t[17]);
  let B = z,
    V;
  t[18] !== s || t[19] !== i || t[20] !== r
    ? ((V = () => {
        let e = Xn(s.length);
        if (e) f(e);
        else
          try {
            let e = JSON.parse(s),
              t = jt(e) ? Ft(e) : se(e);
            if (ie().some((e) => e.id === t.id)) {
              (f(null), y([t]));
              return;
            }
            let n = U(t);
            if (!i(n)) {
              try {
                q(n.id);
              } catch {}
              f(`Theme added, but it could not be selected. Try again.`);
              return;
            }
            r(!1);
          } catch (e) {
            let t = e;
            f(t instanceof Error ? t.message : `That theme file is invalid.`);
          }
      }),
      (t[18] = s),
      (t[19] = i),
      (t[20] = r),
      (t[21] = V))
    : (V = t[21]);
  let H = V,
    W;
  t[22] === r
    ? (W = t[23])
    : ((W = (e) => {
        (e || f(null), r(e));
      }),
      (t[22] = r),
      (t[23] = W));
  let G;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(Me, { children: (0, $.jsx)(Ne, { children: `Add a theme` }) })), (t[24] = G))
    : (G = t[24]);
  let ee;
  t[25] !== a || t[26] !== r
    ? ((ee = (e, t) => {
        (a(e, t), r(!1));
      }),
      (t[25] = a),
      (t[26] = r),
      (t[27] = ee))
    : (ee = t[27]);
  let J;
  t[28] !== n || t[29] !== ee
    ? ((J = (0, $.jsx)(Gn, { onInstalled: ee, open: n })), (t[28] = n), (t[29] = ee), (t[30] = J))
    : (J = t[30]);
  let te;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        "aria-hidden": !0,
        children: [
          (0, $.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
          (0, $.jsx)(`span`, {
            className: `text-muted-foreground text-2xs uppercase tracking-wider`,
            children: `or import a file`,
          }),
          (0, $.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
        ],
      })),
      (t[31] = te))
    : (te = t[31]);
  let Y;
  bb0: {
    let e, n, i;
    t[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) => {
          (e.preventDefault(), g(!0));
        }),
        (n = (e) => {
          (e.preventDefault(), g(!0));
        }),
        (i = (e) => {
          e.currentTarget.contains(e.relatedTarget) || g(!1);
        }),
        (t[32] = e),
        (t[33] = n),
        (t[34] = i))
      : ((e = t[32]), (n = t[33]), (i = t[34]));
    let a;
    t[35] === L
      ? (a = t[36])
      : ((a = { onDragEnter: e, onDragOver: n, onDragLeave: i, onDrop: L }),
        (t[35] = L),
        (t[36] = a));
    let u = a,
      d;
    t[37] === F
      ? (d = t[38])
      : ((d = (0, $.jsx)(`input`, {
          ref: o,
          accept: `.json,application/json`,
          className: `sr-only`,
          onChange: F,
          multiple: !0,
          type: `file`,
        })),
        (t[37] = F),
        (t[38] = d));
    let f = d,
      m;
    t[39] !== p || t[40] !== N
      ? ((m = (e) =>
          (0, $.jsxs)(x, {
            disabled: p,
            size: `sm`,
            variant: `outline`,
            onClick: N,
            children: [(0, $.jsx)(pt, {}), p ? `Reading…` : e === void 0 ? `Choose files` : e],
          })),
        (t[39] = p),
        (t[40] = N),
        (t[41] = m))
      : (m = t[41]);
    let b = m,
      S;
    t[42] === s
      ? (S = t[43])
      : ((S = () =>
          (0, $.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, $.jsx)(`div`, {
                className: `flex items-baseline justify-between gap-3`,
                children: (0, $.jsx)(`label`, {
                  className: `text-sm font-medium`,
                  htmlFor: `theme-json-editor`,
                  children: `Theme JSON`,
                }),
              }),
              (0, $.jsx)($n, { id: `theme-json-editor`, onChange: c, value: s }),
            ],
          })),
        (t[42] = s),
        (t[43] = S));
    let C = S;
    if (v) {
      let e;
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`p`, {
            className: `text-sm font-medium`,
            children: `Already installed`,
          })),
          (t[44] = e))
        : (e = t[44]);
      let n;
      t[45] === v ? (n = t[46]) : ((n = v.map(tr).join(`, `)), (t[45] = v), (t[46] = n));
      let i;
      t[47] === n
        ? (i = t[48])
        : ((i = (0, $.jsxs)(`div`, {
            className: `rounded-xl border border-border/70 bg-muted/20 p-3`,
            children: [
              e,
              (0, $.jsx)(`p`, { className: `mt-1 text-xs text-muted-foreground`, children: n }),
            ],
          })),
          (t[47] = n),
          (t[48] = i));
      let a;
      t[49] === B
        ? (a = t[50])
        : ((a = (0, $.jsx)(x, {
            size: `sm`,
            onClick: () => B(`update`),
            children: `Update existing`,
          })),
          (t[49] = B),
          (t[50] = a));
      let o;
      t[51] === B
        ? (o = t[52])
        : ((o = (0, $.jsx)(x, {
            size: `sm`,
            variant: `outline`,
            onClick: () => B(`copy`),
            children: `Keep both`,
          })),
          (t[51] = B),
          (t[52] = o));
      let s;
      t[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, $.jsx)(x, {
            size: `sm`,
            variant: `ghost`,
            onClick: () => y(null),
            children: `Back`,
          })),
          (t[53] = s))
        : (s = t[53]);
      let c;
      t[54] === r
        ? (c = t[55])
        : ((c = (0, $.jsx)(x, {
            size: `sm`,
            variant: `ghost`,
            onClick: () => r(!1),
            children: `Cancel`,
          })),
          (t[54] = r),
          (t[55] = c));
      let l;
      t[56] !== a || t[57] !== o || t[58] !== c
        ? ((l = (0, $.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-2`,
            children: [a, o, s, c],
          })),
          (t[56] = a),
          (t[57] = o),
          (t[58] = c),
          (t[59] = l))
        : (l = t[59]);
      let u;
      (t[60] !== i || t[61] !== l
        ? ((u = (0, $.jsxs)(`div`, { className: `space-y-3`, children: [i, l] })),
          (t[60] = i),
          (t[61] = l),
          (t[62] = u))
        : (u = t[62]),
        (Y = u));
      break bb0;
    }
    let w = h ? `border-ring bg-accent/20` : `border-border/80 bg-muted/20`,
      T;
    t[63] === w
      ? (T = t[64])
      : ((T = O(
          `flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed px-3 py-3 transition-colors`,
          w,
        )),
        (t[63] = w),
        (t[64] = T));
    let E;
    t[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((E = (0, $.jsx)(`p`, { className: `text-sm font-medium`, children: `Theme file` })),
        (t[65] = E))
      : (E = t[65]);
    let D = l ?? `Drop T3 Code or VS Code .json files`,
      k;
    t[66] === D
      ? (k = t[67])
      : ((k = (0, $.jsxs)(`div`, {
          className: `min-w-0`,
          children: [
            E,
            (0, $.jsx)(`p`, { className: `truncate text-xs text-muted-foreground`, children: D }),
          ],
        })),
        (t[66] = D),
        (t[67] = k));
    let A;
    t[68] === b ? (A = t[69]) : ((A = b()), (t[68] = b), (t[69] = A));
    let j;
    t[70] !== u || t[71] !== f || t[72] !== T || t[73] !== k || t[74] !== A
      ? ((j = (0, $.jsxs)(`div`, { className: T, ...u, children: [k, A, f] })),
        (t[70] = u),
        (t[71] = f),
        (t[72] = T),
        (t[73] = k),
        (t[74] = A),
        (t[75] = j))
      : (j = t[75]);
    let M;
    t[76] === C ? (M = t[77]) : ((M = C()), (t[76] = C), (t[77] = M));
    let P;
    t[78] === r
      ? (P = t[79])
      : ((P = (0, $.jsx)(x, { variant: `ghost`, onClick: () => r(!1), children: `Cancel` })),
        (t[78] = r),
        (t[79] = P));
    let I;
    t[80] !== p || t[81] !== s
      ? ((I = !s.trim() || p), (t[80] = p), (t[81] = s), (t[82] = I))
      : (I = t[82]);
    let R;
    t[83] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((R = (0, $.jsx)(_, {})), (t[83] = R))
      : (R = t[83]);
    let z;
    t[84] !== H || t[85] !== I
      ? ((z = (0, $.jsxs)(x, { disabled: I, onClick: H, children: [R, `Add theme`] })),
        (t[84] = H),
        (t[85] = I),
        (t[86] = z))
      : (z = t[86]);
    let V;
    t[87] !== P || t[88] !== z
      ? ((V = (0, $.jsxs)(`div`, {
          className: `flex flex-col-reverse gap-2 sm:flex-row sm:justify-end`,
          children: [P, z],
        })),
        (t[87] = P),
        (t[88] = z),
        (t[89] = V))
      : (V = t[89]);
    let U;
    (t[90] !== j || t[91] !== M || t[92] !== V
      ? ((U = (0, $.jsxs)(`div`, { className: `space-y-4`, children: [j, M, V] })),
        (t[90] = j),
        (t[91] = M),
        (t[92] = V),
        (t[93] = U))
      : (U = t[93]),
      (Y = U));
  }
  let X;
  t[94] === d
    ? (X = t[95])
    : ((X = d ? (0, $.jsx)(Be, { "aria-live": `polite`, variant: `error`, children: d }) : null),
      (t[94] = d),
      (t[95] = X));
  let Z;
  t[96] !== J || t[97] !== Y || t[98] !== X
    ? ((Z = (0, $.jsxs)(Ae, {
        className: `max-w-3xl overflow-hidden`,
        children: [G, (0, $.jsxs)(ke, { children: [J, te, Y, X] })],
      })),
      (t[96] = J),
      (t[97] = Y),
      (t[98] = X),
      (t[99] = Z))
    : (Z = t[99]);
  let ne;
  return (
    t[100] !== n || t[101] !== W || t[102] !== Z
      ? ((ne = (0, $.jsx)(je, { open: n, onOpenChange: W, children: Z })),
        (t[100] = n),
        (t[101] = W),
        (t[102] = Z),
        (t[103] = ne))
      : (ne = t[103]),
    ne
  );
}
function tr(e) {
  return e.label;
}
function nr(e, t) {
  if (t && t.toLowerCase() !== e.label.toLowerCase()) {
    let n = se({
      version: 1,
      name: t.slice(0, 48),
      appearance: e.appearance,
      colors: e.colors,
      ...(e.variants ? { variants: e.variants } : {}),
      ...(e.managed ? { managed: !0 } : {}),
    });
    if (!ie().some((e) => e.id === n.id)) return n;
  }
  for (let t = 1; t < 100; t += 1) {
    let n = se({
      version: 1,
      name: `${e.label.slice(0, 48 - ` (${t})`.length)} (${t})`,
      appearance: e.appearance,
      colors: e.colors,
      ...(e.variants ? { variants: e.variants } : {}),
      ...(e.managed ? { managed: !0 } : {}),
    });
    if (!ie().some((e) => e.id === n.id)) return n;
  }
  throw Error(`Too many copies of "${e.label}".`);
}
function rr(e) {
  return { name: e.name, size: e.size, text: () => Promise.resolve(e.text) };
}
function ir(e) {
  let t = (0, vt.c)(45),
    { colors: n, clip: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i =
        r === void 0
          ? void 0
          : {
              clipPath:
                r === `left`
                  ? `polygon(0 0, calc(50% - 1px) 0, calc(50% - 1px) 100%, 0 100%)`
                  : `polygon(calc(50% + 1px) 0, 100% 0, 100% 100%, calc(50% + 1px) 100%)`,
            }),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n.canvas
    ? (a = t[3])
    : ((a = (0, $.jsx)(`span`, {
        className: `absolute inset-0`,
        style: { backgroundColor: n.canvas },
      })),
      (t[2] = n.canvas),
      (t[3] = a));
  let o;
  t[4] === n.sidebar
    ? (o = t[5])
    : ((o = (0, $.jsx)(`span`, {
        className: `absolute inset-y-0 left-0 w-[22%]`,
        style: { backgroundColor: n.sidebar, boxShadow: `inset -1px 0 0 rgb(127 127 127 / 0.25)` },
      })),
      (t[4] = n.sidebar),
      (t[5] = o));
  let s;
  t[6] === n.surface
    ? (s = t[7])
    : ((s = (0, $.jsx)(`span`, {
        className: `absolute left-[3%] top-[8%] h-[8%] w-[16%] rounded-md`,
        style: { backgroundColor: n.surface, boxShadow: `inset 0 0 0 1px rgb(127 127 127 / 0.25)` },
      })),
      (t[6] = n.surface),
      (t[7] = s));
  let c;
  t[8] === n.accentSurface
    ? (c = t[9])
    : ((c = (0, $.jsx)(`span`, {
        className: `absolute left-[3%] top-[22%] h-[7%] w-[16%] rounded-md`,
        style: { backgroundColor: n.accentSurface },
      })),
      (t[8] = n.accentSurface),
      (t[9] = c));
  let l;
  t[10] === n.messageSurface
    ? (l = t[11])
    : ((l = (0, $.jsx)(`span`, {
        className: `absolute left-[3%] top-[32%] h-[7%] w-[16%] rounded-md`,
        style: { backgroundColor: n.messageSurface, opacity: 0.7 },
      })),
      (t[10] = n.messageSurface),
      (t[11] = l));
  let u;
  t[12] === n.messageSurface
    ? (u = t[13])
    : ((u = (0, $.jsx)(`span`, {
        className: `absolute left-[3%] top-[42%] h-[7%] w-[16%] rounded-md`,
        style: { backgroundColor: n.messageSurface, opacity: 0.5 },
      })),
      (t[12] = n.messageSurface),
      (t[13] = u));
  let d;
  t[14] === n.messageSurface
    ? (d = t[15])
    : ((d = (0, $.jsx)(`span`, {
        className: `absolute right-[28%] top-[11%] h-[9%] w-[24%] rounded-lg`,
        style: { backgroundColor: n.messageSurface },
      })),
      (t[14] = n.messageSurface),
      (t[15] = d));
  let f;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`span`, {
        className: `absolute left-[27%] top-[28%] h-[5%] w-[34%] rounded-sm`,
        style: { backgroundColor: `rgb(127 127 127 / 0.25)` },
      })),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`span`, {
        className: `absolute left-[27%] top-[38%] h-[5%] w-[26%] rounded-sm`,
        style: { backgroundColor: `rgb(127 127 127 / 0.25)` },
      })),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] === n.surface
    ? (m = t[19])
    : ((m = { backgroundColor: n.surface, boxShadow: `inset 0 0 0 1px rgb(127 127 127 / 0.25)` }),
      (t[18] = n.surface),
      (t[19] = m));
  let h;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`span`, {
        className: `block h-[26%] w-[34%] rounded-full`,
        style: { backgroundColor: `rgb(127 127 127 / 0.25)`, opacity: 0.7 },
      })),
      (t[20] = h))
    : (h = t[20]);
  let g;
  t[21] === n.messageAction
    ? (g = t[22])
    : ((g = (0, $.jsx)(`span`, {
        className: `block aspect-square h-[58%] rounded-full`,
        style: { backgroundColor: n.messageAction },
      })),
      (t[21] = n.messageAction),
      (t[22] = g));
  let _;
  t[23] !== m || t[24] !== g
    ? ((_ = (0, $.jsxs)(`span`, {
        className: `absolute bottom-[8%] left-[26%] right-[6%] flex h-[15%] items-center justify-between rounded-md px-1`,
        style: m,
        children: [h, g],
      })),
      (t[23] = m),
      (t[24] = g),
      (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] === n.surface
    ? (v = t[27])
    : ((v = {
        backgroundColor: n.surface,
        boxShadow: `inset 0 0 0 1px rgb(127 127 127 / 0.25), 0 2px 5px rgb(0 0 0 / 0.14)`,
      }),
      (t[26] = n.surface),
      (t[27] = v));
  let y;
  t[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = [0, 1, 2]), (t[28] = y)) : (y = t[28]);
  let b;
  t[29] === n.messageAction
    ? (b = t[30])
    : ((b = y.map((e) =>
        (0, $.jsxs)(
          `span`,
          {
            className: `absolute left-[11%] right-[11%] flex items-center gap-1`,
            style: { top: `${10 + e * 30}%`, height: `20%` },
            children: [
              (0, $.jsx)(`span`, {
                className: `block aspect-square h-[26%] rounded-full`,
                style: {
                  backgroundColor: e === 0 ? `#34d399` : e === 1 ? n.messageAction : `#fbbf24`,
                  opacity: 0.55,
                },
              }),
              (0, $.jsx)(`span`, {
                className: `block h-[30%] w-[52%] rounded-sm`,
                style: { backgroundColor: `rgb(127 127 127 / 0.25)` },
              }),
            ],
          },
          e,
        ),
      )),
      (t[29] = n.messageAction),
      (t[30] = b));
  let x;
  t[31] !== v || t[32] !== b
    ? ((x = (0, $.jsx)(`span`, {
        className: `absolute right-[5%] top-[8%] h-[46%] w-[20%] rounded-lg`,
        style: v,
        children: b,
      })),
      (t[31] = v),
      (t[32] = b),
      (t[33] = x))
    : (x = t[33]);
  let S;
  return (
    t[34] !== i ||
    t[35] !== _ ||
    t[36] !== x ||
    t[37] !== a ||
    t[38] !== o ||
    t[39] !== s ||
    t[40] !== c ||
    t[41] !== l ||
    t[42] !== u ||
    t[43] !== d
      ? ((S = (0, $.jsxs)(`span`, {
          className: `absolute inset-0`,
          style: i,
          children: [a, o, s, c, l, u, d, f, p, _, x],
        })),
        (t[34] = i),
        (t[35] = _),
        (t[36] = x),
        (t[37] = a),
        (t[38] = o),
        (t[39] = s),
        (t[40] = c),
        (t[41] = l),
        (t[42] = u),
        (t[43] = d),
        (t[44] = S))
      : (S = t[44]),
    S
  );
}
function ar(e) {
  let t = (0, vt.c)(7),
    { className: n, panes: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = O(`relative block w-full overflow-hidden rounded-lg border border-border/60`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r ? (a = t[3]) : ((a = r.map(or)), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsx)(`span`, { "aria-hidden": !0, className: i, children: a })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function or(e) {
  return (0, $.jsx)(ir, { clip: e.clip, colors: e.colors }, e.clip ?? `pane`);
}
var sr = [V, Z, te, ne, re];
function cr(e) {
  if (e.length === 0) return [];
  let t = e.map((e) => e.label.trim().split(/\s+/)),
    n = t[0],
    r = n.findIndex((e, n) => t.some((t) => t[n]?.toLocaleLowerCase() !== e.toLocaleLowerCase())),
    i = r === -1 ? n.length - 1 : r;
  return e.map((e, n) => t[n]?.slice(Math.max(0, i)).join(` `).trim() || e.label);
}
function lr(e, t) {
  let n = URL.createObjectURL(new Blob([t], { type: `application/json` })),
    r = document.createElement(`a`);
  ((r.href = n), (r.download = e), r.click(), setTimeout(() => URL.revokeObjectURL(n), 3e4));
}
function ur(e) {
  let t = (0, vt.c)(7),
    { label: n, children: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = (0, $.jsx)(T, { render: r })), (t[0] = r), (t[1] = i));
  let a;
  t[2] === n ? (a = t[3]) : ((a = (0, $.jsx)(w, { children: n })), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(y, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function dr(e) {
  let t = (0, vt.c)(59),
    {
      theme: n,
      isActive: r,
      onUse: i,
      onUseMode: a,
      activeModes: o,
      onEdit: s,
      onDuplicate: l,
      onDownload: u,
      onRemove: p,
      variantNavigation: h,
    } = e,
    _;
  t[0] === n.previews ? (_ = t[1]) : ((_ = n.previews.map(fr)), (t[0] = n.previews), (t[1] = _));
  let b = _,
    [S, C] = (0, Q.useState)(null),
    E,
    D,
    k,
    A,
    j,
    M,
    N,
    P;
  if (
    t[2] !== o ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== S ||
    t[7] !== n.id ||
    t[8] !== n.label ||
    t[9] !== n.previews ||
    t[10] !== h
  ) {
    let e = [`light`, `dark`].map((e) => {
      let t =
        h?.options.flatMap((t) => {
          let n = t.preview;
          return n.mode === e ? [{ option: t, preview: n }] : [];
        }) ?? [];
      return {
        mode: e,
        options: t,
        selected:
          t.find((t) => {
            let { option: n } = t;
            return n.activeModes.includes(e);
          }) ?? t[0],
      };
    });
    ((D = y), (E = T));
    let s = r && `bg-accent/30`;
    (t[19] === s
      ? (j = t[20])
      : ((j = O(
          `cursor-pointer overflow-hidden rounded-xl border border-border/70 bg-card/60 transition-colors hover:bg-accent/10`,
          s,
        )),
        (t[19] = s),
        (t[20] = j)),
      (M = n.id),
      (N = i),
      t[21] === r
        ? (P = t[22])
        : ((P = r ? { boxShadow: `inset 0 0 0 1px var(--ring)` } : void 0),
          (t[21] = r),
          (t[22] = P)),
      (k = `relative`),
      (A = h
        ? (0, $.jsx)(`div`, {
            "aria-label": `Light and dark theme variants`,
            className: `relative h-20`,
            role: `group`,
            onBlurCapture: (e) => {
              let t = e.relatedTarget;
              (t instanceof Node && e.currentTarget.contains(t)) || C(null);
            },
            onKeyDown: (e) => {
              e.key === `Escape` && C(null);
            },
            onMouseLeave: () => C(null),
            children: e.map((e) => {
              let { mode: t, options: n, selected: r } = e;
              if (!r) return null;
              let i = t === `light` ? -52 : 52,
                a = S === t,
                o = r.option.activeModes.includes(t);
              return (0, $.jsxs)(
                `div`,
                {
                  className: `contents`,
                  children: [
                    (0, $.jsx)(ur, {
                      label: `${t === `light` ? `Light` : `Dark`}: ${r.option.label}`,
                      children: (0, $.jsxs)(`button`, {
                        "aria-label":
                          n.length > 1
                            ? `Choose ${t} variant, ${n.length} options, currently ${r.option.label}`
                            : `Use ${t} variant, currently ${r.option.label}`,
                        "aria-pressed": o,
                        className: `absolute left-1/2 top-2 z-20 flex size-14 items-center justify-center rounded-full outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring`,
                        style: { transform: `translateX(calc(-50% + ${i}px))` },
                        type: `button`,
                        onClick: (e) => {
                          (e.stopPropagation(), h.onSelectAndUse(r.option.themeIndex, t));
                        },
                        onFocus: () => C(t),
                        onMouseEnter: () => C(t),
                        children: [
                          (0, $.jsx)(et, { colors: r.preview.colors, mode: r.preview.mode }),
                          o
                            ? (0, $.jsx)(`span`, {
                                "aria-hidden": !0,
                                className: `pointer-events-none absolute inset-0 rounded-full ring-2 ring-inset ring-ring`,
                              })
                            : null,
                          o
                            ? (0, $.jsx)(`span`, {
                                className: `pointer-events-none absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-sm`,
                                children:
                                  t === `light`
                                    ? (0, $.jsx)(f, { className: `size-2.5` })
                                    : (0, $.jsx)(d, { className: `size-2.5` }),
                              })
                            : null,
                        ],
                      }),
                    }),
                    (0, $.jsxs)(`span`, {
                      className: `pointer-events-none absolute bottom-0 left-1/2 inline-flex max-w-24 -translate-x-1/2 items-center gap-1 text-2xs font-medium text-foreground`,
                      style: { marginLeft: i },
                      children: [
                        (0, $.jsx)(`span`, { className: `truncate`, children: r.option.label }),
                        n.length > 1
                          ? (0, $.jsxs)(`span`, {
                              className: `shrink-0 rounded-full bg-muted px-1 text-3xs text-muted-foreground`,
                              children: [`+`, n.length - 1],
                            })
                          : null,
                      ],
                    }),
                    n.length > 1
                      ? n.map((e, r) => {
                          let { option: o, preview: s } = e,
                            c = r / (n.length - 1) - 0.5,
                            l = i + c * 68,
                            u = Math.abs(c) * 10,
                            d = o.activeModes.includes(t);
                          return (0, $.jsx)(
                            ur,
                            {
                              label: `Use ${o.label} for ${t} mode`,
                              children: (0, $.jsx)(`button`, {
                                "aria-label": `Use ${o.label} for ${t} mode${d ? `, currently active` : ``}`,
                                "aria-pressed": d,
                                className: O(
                                  `absolute left-1/2 top-1 z-30 flex size-7 items-center justify-center rounded-full bg-background shadow-sm outline-none transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                                  d ? `ring-2 ring-inset ring-ring` : `ring-1 ring-border/70`,
                                ),
                                style: {
                                  opacity: +!!a,
                                  pointerEvents: a ? `auto` : `none`,
                                  transform: `translate(calc(-50% + ${a ? l : i}px), ${a ? u : 28}px) scale(${a ? 1 : 0.55})`,
                                  transitionDelay: a ? `${r * 35}ms` : `0ms`,
                                },
                                type: `button`,
                                onClick: (e) => {
                                  (e.stopPropagation(), h.onSelectAndUse(o.themeIndex, t));
                                },
                                onFocus: () => C(t),
                                onMouseEnter: () => C(t),
                                children: (0, $.jsx)(`span`, {
                                  className: `pointer-events-none scale-[0.43]`,
                                  children: (0, $.jsx)(et, { colors: s.colors, mode: s.mode }),
                                }),
                              }),
                            },
                            o.label,
                          );
                        })
                      : null,
                  ],
                },
                t,
              );
            }),
          })
        : (0, $.jsx)(nt, {
            label: n.label,
            activeModes: o,
            onSelectMode: a,
            previews: n.previews,
          })),
      (t[2] = o),
      (t[3] = r),
      (t[4] = i),
      (t[5] = a),
      (t[6] = S),
      (t[7] = n.id),
      (t[8] = n.label),
      (t[9] = n.previews),
      (t[10] = h),
      (t[11] = E),
      (t[12] = D),
      (t[13] = k),
      (t[14] = A),
      (t[15] = j),
      (t[16] = M),
      (t[17] = N),
      (t[18] = P));
  } else
    ((E = t[11]),
      (D = t[12]),
      (k = t[13]),
      (A = t[14]),
      (j = t[15]),
      (M = t[16]),
      (N = t[17]),
      (P = t[18]));
  let F;
  t[23] !== k || t[24] !== A
    ? ((F = (0, $.jsx)(`div`, { className: k, children: A })),
      (t[23] = k),
      (t[24] = A),
      (t[25] = F))
    : (F = t[25]);
  let I = `Use ${h ? `${h.collectionLabel}, ${n.label} variant` : `${n.label} theme`}${r ? `, currently active` : ``}`,
    L;
  t[26] === i
    ? (L = t[27])
    : ((L = (e) => {
        (e.stopPropagation(), i());
      }),
      (t[26] = i),
      (t[27] = L));
  let R = h?.collectionLabel ?? n.label,
    z;
  t[28] !== r || t[29] !== L || t[30] !== R || t[31] !== I
    ? ((z = (0, $.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, $.jsx)(`div`, {
          className: `flex items-center gap-1.5`,
          children: (0, $.jsx)(`button`, {
            "aria-label": I,
            "aria-pressed": r,
            className: `min-w-0 cursor-pointer truncate rounded-sm text-left text-sm font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card`,
            type: `button`,
            onClick: L,
            children: R,
          }),
        }),
      })),
      (t[28] = r),
      (t[29] = L),
      (t[30] = R),
      (t[31] = I),
      (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== u || t[34] !== l || t[35] !== s || t[36] !== p || t[37] !== n.label || t[38] !== h
    ? ((B =
        s || l || u || p
          ? (0, $.jsxs)(`div`, {
              className: `flex shrink-0 items-center gap-1`,
              children: [
                l
                  ? (0, $.jsxs)(y, {
                      children: [
                        (0, $.jsx)(T, {
                          render: (0, $.jsx)(x, {
                            "aria-label": `Duplicate ${n.label}`,
                            size: `icon-xs`,
                            variant: `ghost`,
                            onClick: (e) => {
                              (e.stopPropagation(), l());
                            },
                            children: (0, $.jsx)(c, {}),
                          }),
                        }),
                        (0, $.jsx)(w, { children: `Duplicate theme` }),
                      ],
                    })
                  : null,
                s
                  ? (0, $.jsxs)(y, {
                      children: [
                        (0, $.jsx)(T, {
                          render: (0, $.jsx)(x, {
                            "aria-label": `Edit ${n.label}`,
                            size: `icon-xs`,
                            variant: `ghost`,
                            onClick: (e) => {
                              (e.stopPropagation(), s());
                            },
                            children: (0, $.jsx)(g, {}),
                          }),
                        }),
                        (0, $.jsx)(w, { children: `Edit theme` }),
                      ],
                    })
                  : null,
                u
                  ? (0, $.jsxs)(y, {
                      children: [
                        (0, $.jsx)(T, {
                          render: (0, $.jsx)(x, {
                            "aria-label": `Export ${n.label}`,
                            size: `icon-xs`,
                            variant: `ghost`,
                            onClick: (e) => {
                              (e.stopPropagation(), u());
                            },
                            children: (0, $.jsx)(m, {}),
                          }),
                        }),
                        (0, $.jsx)(w, { children: `Export theme file` }),
                      ],
                    })
                  : null,
                p
                  ? (0, $.jsxs)(y, {
                      children: [
                        (0, $.jsx)(T, {
                          render: (0, $.jsx)(x, {
                            "aria-label": h
                              ? `Remove themes from ${h.collectionLabel}`
                              : `Remove ${n.label}`,
                            size: `icon-xs`,
                            variant: `ghost-destructive`,
                            onClick: (e) => {
                              (e.stopPropagation(), p());
                            },
                            children: (0, $.jsx)(v, {}),
                          }),
                        }),
                        (0, $.jsx)(w, { children: h ? `Remove themes` : `Remove theme` }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[33] = u),
      (t[34] = l),
      (t[35] = s),
      (t[36] = p),
      (t[37] = n.label),
      (t[38] = h),
      (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] !== z || t[41] !== B
    ? ((V = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2 px-3 pb-3 pt-2`,
        children: [z, B],
      })),
      (t[40] = z),
      (t[41] = B),
      (t[42] = V))
    : (V = t[42]);
  let H;
  t[43] !== V || t[44] !== j || t[45] !== M || t[46] !== N || t[47] !== P || t[48] !== F
    ? ((H = (0, $.jsxs)(`div`, {
        className: j,
        "data-theme-library-card": M,
        onClick: N,
        style: P,
        children: [F, V],
      })),
      (t[43] = V),
      (t[44] = j),
      (t[45] = M),
      (t[46] = N),
      (t[47] = P),
      (t[48] = F),
      (t[49] = H))
    : (H = t[49]);
  let U;
  t[50] !== E || t[51] !== H
    ? ((U = (0, $.jsx)(E, { render: H })), (t[50] = E), (t[51] = H), (t[52] = U))
    : (U = t[52]);
  let W = h
      ? `Use the first variants for light and dark`
      : b.length > 1
        ? `Use for both light and dark`
        : `Use for ${b[0]} mode only`,
    G;
  t[53] === W ? (G = t[54]) : ((G = (0, $.jsx)(w, { children: W })), (t[53] = W), (t[54] = G));
  let K;
  return (
    t[55] !== D || t[56] !== U || t[57] !== G
      ? ((K = (0, $.jsxs)(D, { children: [U, G] })),
        (t[55] = D),
        (t[56] = U),
        (t[57] = G),
        (t[58] = K))
      : (K = t[58]),
    K
  );
}
function fr(e) {
  return e.mode;
}
function pr(e) {
  let t = (0, vt.c)(45),
    {
      themes: n,
      activeModesFor: r,
      onUse: i,
      onUseMode: a,
      onDuplicate: o,
      onEdit: s,
      onDownload: c,
      onRemove: l,
    } = e,
    u;
  t[0] !== r || t[1] !== n
    ? ((u = () => {
        let e = n.findIndex((e) => r(e.id).length > 0);
        return e < 0 ? 0 : e;
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = u))
    : (u = t[2]);
  let [d, f] = (0, Q.useState)(u),
    p = Math.min(d, n.length - 1),
    m = n[p];
  if ((d !== p && f(p), !m)) return null;
  let h = m.collection?.label ?? m.label,
    g;
  if (
    t[3] !== r ||
    t[4] !== h ||
    t[5] !== c ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== l ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== m ||
    t[12] !== n
  ) {
    let e = cr(n),
      u;
    t[14] === n ? (u = t[15]) : ((u = n.find(hr)), (t[14] = n), (t[15] = u));
    let d = u,
      p;
    t[16] === n ? (p = t[17]) : ((p = n.find(mr)), (t[16] = n), (t[17] = p));
    let _ = p,
      v;
    t[18] !== _ || t[19] !== d || t[20] !== i || t[21] !== a || t[22] !== m || t[23] !== n.length
      ? ((v = () => {
          n.length === 1 ? i(m) : (d && a(d, `light`), _ && a(_, `dark`), f(0));
        }),
        (t[18] = _),
        (t[19] = d),
        (t[20] = i),
        (t[21] = a),
        (t[22] = m),
        (t[23] = n.length),
        (t[24] = v))
      : (v = t[24]);
    let y = v,
      b;
    t[25] !== r || t[26] !== m.id
      ? ((b = r(m.id)), (t[25] = r), (t[26] = m.id), (t[27] = b))
      : (b = t[27]);
    let x;
    t[28] !== c || t[29] !== m
      ? ((x = () => c(m)), (t[28] = c), (t[29] = m), (t[30] = x))
      : (x = t[30]);
    let S;
    t[31] !== o || t[32] !== m
      ? ((S = () => o(m)), (t[31] = o), (t[32] = m), (t[33] = S))
      : (S = t[33]);
    let C;
    t[34] !== s || t[35] !== m
      ? ((C = () => s(m)), (t[34] = s), (t[35] = m), (t[36] = C))
      : (C = t[36]);
    let w;
    t[37] !== l || t[38] !== m
      ? ((w = () => l(m)), (t[37] = l), (t[38] = m), (t[39] = w))
      : (w = t[39]);
    let T;
    t[40] !== a || t[41] !== m
      ? ((T = (e) => a(m, e)), (t[40] = a), (t[41] = m), (t[42] = T))
      : (T = t[42]);
    let E;
    (t[43] === m ? (E = t[44]) : ((E = mt(m)), (t[43] = m), (t[44] = E)),
      (g = (0, $.jsx)(dr, {
        activeModes: b,
        isActive: !1,
        onDownload: x,
        onDuplicate: S,
        onEdit: C,
        onRemove: w,
        onUse: y,
        onUseMode: T,
        theme: E,
        ...(n.length > 1
          ? {
              variantNavigation: {
                collectionLabel: h,
                options: n.flatMap((t, n) =>
                  mt(t).previews.map((i) => ({
                    themeIndex: n,
                    label: e[n] ?? t.label,
                    activeModes: r(t.id),
                    preview: i,
                  })),
                ),
                onSelectAndUse: (e, t) => {
                  let r = n[e];
                  r && (f(e), a(r, t));
                },
              },
            }
          : {}),
      })),
      (t[3] = r),
      (t[4] = h),
      (t[5] = c),
      (t[6] = o),
      (t[7] = s),
      (t[8] = l),
      (t[9] = i),
      (t[10] = a),
      (t[11] = m),
      (t[12] = n),
      (t[13] = g));
  } else g = t[13];
  return g;
}
function mr(e) {
  return de(e).includes(`dark`);
}
function hr(e) {
  return de(e).includes(`light`);
}
function gr(e) {
  let t = (0, vt.c)(103),
    {
      theme: n,
      setTheme: r,
      appearanceMode: i,
      setAppearanceMode: a,
      customThemes: s,
      initialAppearance: c,
      refreshTheme: l,
      isImportOpen: u,
      onImportOpenChange: d,
      themeHalves: f,
      setThemeHalf: p,
    } = e,
    m = it(wr),
    g = Ye(),
    [v, y] = (0, Q.useState)(null),
    [b, C] = (0, Q.useState)(!1),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = []), (t[0] = w)) : (w = t[0]);
  let [T, E] = (0, Q.useState)(w),
    D;
  t[1] === T ? (D = t[2]) : ((D = new Set(T)), (t[1] = T), (t[2] = D));
  let k = D,
    A = v?.theme,
    j;
  t[3] === v?.collectionThemes
    ? (j = t[4])
    : ((j = v?.collectionThemes ?? []), (t[3] = v?.collectionThemes), (t[4] = j));
  let M = j,
    N = M.length > 1,
    P = A?.collection?.label ?? A?.label,
    F = Cr,
    I = Sr,
    B;
  t[5] === r
    ? (B = t[6])
    : ((B = (e) => {
        let t = r(e);
        return (t || F(), t);
      }),
      (t[5] = r),
      (t[6] = B));
  let V = B,
    U;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e, t) => {
        (y({ theme: e, collectionThemes: t }), E(t.length > 1 ? [] : [e.id]), C(!0));
      }),
      (t[7] = U))
    : (U = t[7]);
  let W = U,
    G;
  t[8] !== i || t[9] !== V || t[10] !== p || t[11] !== n || t[12] !== T || t[13] !== v
    ? ((G = () => {
        if (!v) return;
        let e = new Set(T);
        if (e.size === 0) return;
        let t = e.has(ue(n)?.id ?? ``),
          r = L();
        if (!t || V(i === `system` ? `system` : i)) {
          for (let n of [`light`, `dark`]) {
            let i = r[n];
            if (i === void 0) continue;
            let a = i && e.has(i) ? null : t ? i : void 0;
            if (a !== void 0 && !p(n, a)) {
              I();
              return;
            }
          }
          try {
            ee([...e]);
          } catch {
            I();
            return;
          }
          C(!1);
        }
      }),
      (t[8] = i),
      (t[9] = V),
      (t[10] = p),
      (t[11] = n),
      (t[12] = T),
      (t[13] = v),
      (t[14] = G))
    : (G = t[14]);
  let K = G,
    q,
    J,
    te,
    Y,
    X,
    Z;
  if (
    t[15] !== i ||
    t[16] !== s ||
    t[17] !== g ||
    t[18] !== c ||
    t[19] !== d ||
    t[20] !== m ||
    t[21] !== V ||
    t[22] !== a ||
    t[23] !== r ||
    t[24] !== p ||
    t[25] !== n ||
    t[26] !== f?.dark ||
    t[27] !== f?.light
  ) {
    let e = ue(n)?.id ?? null,
      o = f?.light ?? e,
      l = f?.dark ?? e;
    q = (t, a) => {
      let o = t === `light` ? `dark` : `light`;
      if (a === null && e !== null) {
        let t = L()[o] ?? e;
        if (!V(i === `system` ? `system` : i)) return;
        p(o, t) || (r(n), F());
      } else p(t, a) || F();
    };
    let u = ue((c === `light` ? o : l) ?? ``) ?? null,
      v = xr,
      y;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (e, t) => {
          let n = v(e);
          return Ue(n, t) ?? n.previews[0].colors;
        }),
        (t[34] = y))
      : (y = t[34]);
    let b = y,
      C;
    t[35] === a
      ? (C = t[36])
      : ((C = (e) => {
          a(e) || F();
        }),
        (t[35] = a),
        (t[36] = C));
    let w = C,
      T = (e) => (t) => {
        t !== `system` && q(t, e);
      },
      E = (e) => {
        let t = [];
        return (o === e && t.push(`light`), l === e && t.push(`dark`), t);
      },
      D = (e) => b(e === `light` ? o : l, e),
      k;
    t[37] === D
      ? (k = t[38])
      : ((k = (e) =>
          (0, $.jsx)(ar, {
            className: `h-[8.75rem]`,
            panes:
              e === `system`
                ? [
                    { clip: `left`, colors: D(`light`) },
                    { clip: `right`, colors: D(`dark`) },
                  ]
                : [{ colors: D(e === `dark` ? `dark` : `light`) }],
          })),
        (t[37] = D),
        (t[38] = k));
    let A = k,
      j;
    t[39] !== i || t[40] !== A || t[41] !== w
      ? ((j = () =>
          (0, $.jsx)(`div`, {
            "aria-label": `Appearance mode`,
            className: `grid w-full grid-cols-3 gap-3`,
            role: `group`,
            children: [`system`, `light`, `dark`].map((e) => {
              let t = i === e;
              return (0, $.jsxs)(
                `button`,
                {
                  "aria-label": e === `system` ? `Follow the system appearance` : `Use ${e} mode`,
                  "aria-pressed": t,
                  className: O(
                    `flex cursor-pointer flex-col items-stretch gap-1.5 rounded-xl border p-2 outline-none transition-colors focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring`,
                    t
                      ? `border-transparent bg-accent/30`
                      : `border-border/70 bg-card/60 hover:bg-accent/10`,
                  ),
                  style: t ? { boxShadow: `inset 0 0 0 1px var(--ring)` } : void 0,
                  onClick: () => w(e),
                  type: `button`,
                  children: [
                    A(e),
                    (0, $.jsx)(`span`, {
                      className: O(
                        `flex items-center justify-center text-xs font-medium`,
                        t ? `text-foreground` : `text-muted-foreground`,
                      ),
                      children: e === `system` ? `System` : e === `light` ? `Light` : `Dark`,
                    }),
                  ],
                },
                e,
              );
            }),
          })),
        (t[39] = i),
        (t[40] = A),
        (t[41] = w),
        (t[42] = j))
      : (j = t[42]);
    let M = j,
      N = [...s.reduce(br, new Map()).entries()],
      P = () =>
        (0, $.jsx)(S, {
          children: (0, $.jsxs)(`div`, {
            className: `grid w-full gap-2`,
            style: { gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 16rem), 1fr))` },
            children: [
              Xe.map((e) =>
                (0, $.jsx)(
                  dr,
                  {
                    activeModes: E(null),
                    isActive: !1,
                    onDuplicate: () =>
                      m({
                        editingThemeId: null,
                        seedThemeId: null,
                        seedName: `${e.label} copy`,
                        initialAppearance: c,
                      }),
                    onUse: () => V(i === `system` ? `system` : i),
                    onUseMode: T(null),
                    theme: e,
                  },
                  e.id,
                ),
              ),
              sr.map((e) => {
                let t = mt(e);
                return (0, $.jsx)(
                  dr,
                  {
                    activeModes: E(e.id),
                    isActive: !1,
                    onDuplicate: () =>
                      m({
                        editingThemeId: null,
                        seedThemeId: e.id,
                        seedName: `${e.label} copy`,
                        initialAppearance: c,
                      }),
                    onUse: () => V(e.id),
                    onUseMode: T(e.id),
                    theme: t,
                  },
                  e.id,
                );
              }),
              g
                .filter((e) => !s.some((t) => t.id === e.id))
                .map((e) =>
                  (0, $.jsx)(
                    dr,
                    {
                      activeModes: E(e.id),
                      isActive: !1,
                      onDuplicate: () =>
                        m({
                          editingThemeId: null,
                          seedThemeId: e.id,
                          seedName: `${e.label} copy`,
                          initialAppearance: c,
                        }),
                      onUse: () => {
                        let t = H(e);
                        t === null ? V(e.id) : q(t, e.id);
                      },
                      onUseMode: T(e.id),
                      theme: mt(e),
                    },
                    e.id,
                  ),
                ),
              N.map((e) => {
                let [t, n] = e;
                return (0, $.jsx)(
                  pr,
                  {
                    activeModesFor: E,
                    onDownload: yr,
                    onDuplicate: (e) =>
                      m({
                        editingThemeId: null,
                        seedThemeId: e.id,
                        seedName: `${e.label} copy`,
                        initialAppearance: c,
                      }),
                    onEdit: (e) =>
                      m({
                        editingThemeId: e.id,
                        seedThemeId: null,
                        seedName: null,
                        initialAppearance: c,
                      }),
                    onRemove: (e) => W(e, n),
                    onUse: (e) => {
                      let t = de(e);
                      t.length === 1 ? q(t[0], e.id) : V(e.id);
                    },
                    onUseMode: (e, t) => T(e.id)(t),
                    themes: n,
                  },
                  t,
                );
              }),
            ],
          }),
        });
    ((Y = `space-y-3`),
      t[43] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((X = (0, $.jsx)(`h3`, {
            className: `px-3 text-sm font-normal text-foreground/70 sm:px-4`,
            children: Ve(`color-scheme`).title,
          })),
          (t[43] = X))
        : (X = t[43]),
      t[44] === M ? (Z = t[45]) : ((Z = M()), (t[44] = M), (t[45] = Z)));
    let I;
    t[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((I = (0, $.jsx)(`h3`, {
          className: `text-sm font-normal text-foreground/70`,
          children: Ve(`theme`).title,
        })),
        (t[46] = I))
      : (I = t[46]);
    let R;
    t[47] !== u?.id || t[48] !== c || t[49] !== m
      ? ((R = () =>
          m({
            editingThemeId: null,
            seedThemeId: u?.id ?? null,
            seedName: null,
            initialAppearance: c,
          })),
        (t[47] = u?.id),
        (t[48] = c),
        (t[49] = m),
        (t[50] = R))
      : (R = t[50]);
    let z;
    t[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((z = (0, $.jsx)(h, {})), (t[51] = z))
      : (z = t[51]);
    let B;
    t[52] === R
      ? (B = t[53])
      : ((B = (0, $.jsxs)(x, {
          size: `xs`,
          variant: `outline`,
          onClick: R,
          children: [z, `Create theme`],
        })),
        (t[52] = R),
        (t[53] = B));
    let U;
    t[54] === d ? (U = t[55]) : ((U = () => d(!0)), (t[54] = d), (t[55] = U));
    let G;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((G = (0, $.jsx)(_, {})), (t[56] = G))
      : (G = t[56]);
    let K;
    (t[57] === U
      ? (K = t[58])
      : ((K = (0, $.jsxs)(x, {
          size: `xs`,
          variant: `outline`,
          onClick: U,
          children: [G, `Add theme`],
        })),
        (t[57] = U),
        (t[58] = K)),
      t[59] !== B || t[60] !== K
        ? ((J = (0, $.jsxs)(`div`, {
            className: `flex min-h-8 flex-wrap items-center justify-between gap-3 px-3 pt-2 sm:px-4`,
            children: [
              I,
              (0, $.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-end gap-2`,
                children: [B, K],
              }),
            ],
          })),
          (t[59] = B),
          (t[60] = K),
          (t[61] = J))
        : (J = t[61]),
      (te = P()),
      (t[15] = i),
      (t[16] = s),
      (t[17] = g),
      (t[18] = c),
      (t[19] = d),
      (t[20] = m),
      (t[21] = V),
      (t[22] = a),
      (t[23] = r),
      (t[24] = p),
      (t[25] = n),
      (t[26] = f?.dark),
      (t[27] = f?.light),
      (t[28] = q),
      (t[29] = J),
      (t[30] = te),
      (t[31] = Y),
      (t[32] = X),
      (t[33] = Z));
  } else ((q = t[28]), (J = t[29]), (te = t[30]), (Y = t[31]), (X = t[32]), (Z = t[33]));
  let ne;
  t[62] === l
    ? (ne = t[63])
    : ((ne = (e, t) => {
        let { updated: n } = t;
        n && l();
        let r = n ? `updated` : `added`;
        R.add(
          z({
            type: `success`,
            title: e.length === 1 ? `${e[0].label} ${r}` : `${e.length} themes ${r}`,
            description: e.map(vr).join(`, `),
          }),
        );
      }),
      (t[62] = l),
      (t[63] = ne));
  let re;
  t[64] !== q || t[65] !== V
    ? ((re = (e) => {
        let t = de(e);
        return t.length === 1
          ? (q(t[0], e.id),
            R.add(
              z({
                type: `success`,
                title: `${e.label} added`,
                description: `It’s now your ${t[0]} theme.`,
              }),
            ),
            !0)
          : V(e.id)
            ? (R.add(
                z({ type: `success`, title: `${e.label} added`, description: `It’s now active.` }),
              ),
              !0)
            : !1;
      }),
      (t[64] = q),
      (t[65] = V),
      (t[66] = re))
    : (re = t[66]);
  let ie;
  t[67] !== u || t[68] !== d || t[69] !== ne || t[70] !== re
    ? ((ie = (0, $.jsx)(er, { onImportedMany: ne, onImported: re, onOpenChange: d, open: u })),
      (t[67] = u),
      (t[68] = d),
      (t[69] = ne),
      (t[70] = re),
      (t[71] = ie))
    : (ie = t[71]);
  let ae = N ? `Remove themes from “${P}”?` : `Remove “${A?.label}”?`,
    oe;
  t[72] === ae
    ? (oe = t[73])
    : ((oe = (0, $.jsx)(Qe, { children: ae })), (t[72] = ae), (t[73] = oe));
  let se = N
      ? `Select the variants you want to remove. You can restore them by importing the extension again.`
      : `You can bring it back anytime by importing its JSON file.`,
    ce;
  t[74] === se
    ? (ce = t[75])
    : ((ce = (0, $.jsx)(ot, { children: se })), (t[74] = se), (t[75] = ce));
  let le;
  t[76] !== oe || t[77] !== ce
    ? ((le = (0, $.jsxs)($e, { children: [oe, ce] })), (t[76] = oe), (t[77] = ce), (t[78] = le))
    : (le = t[78]);
  let fe;
  t[79] !== N || t[80] !== M || t[81] !== k
    ? ((fe = N
        ? (0, $.jsx)(`div`, {
            className: `grid max-h-72 grid-cols-1 gap-2 overflow-y-auto px-6 pb-6 sm:grid-cols-2`,
            children: M.map((e) => {
              let t = k.has(e.id),
                n = mt(e),
                r = `remove-theme-${e.id}`;
              return (0, $.jsxs)(
                `label`,
                {
                  className: `group relative flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-border/70 bg-muted/25 p-3 has-checked:border-ring has-checked:bg-accent/20 hover:bg-muted/40`,
                  htmlFor: r,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `absolute right-2 top-2 inline-grid size-5 grid-cols-1 sm:size-4`,
                      children: [
                        (0, $.jsx)(`input`, {
                          checked: t,
                          className: `col-start-1 row-start-1 size-full appearance-none rounded-sm border border-input bg-background outline-none checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring checked:focus-visible:inset-ring-3 checked:focus-visible:inset-ring-background dark:not-checked:bg-input/32 forced-colors:appearance-auto`,
                          id: r,
                          name: `themes-to-remove`,
                          type: `checkbox`,
                          onChange: (t) => {
                            let n = t.currentTarget.checked;
                            E((t) => (n ? [...t, e.id] : t.filter((t) => t !== e.id)));
                          },
                        }),
                        (0, $.jsx)(o, {
                          className: `pointer-events-none col-start-1 row-start-1 size-3.5 shrink-0 self-center justify-self-center stroke-primary-foreground opacity-0 group-has-checked:opacity-100 sm:size-3`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`span`, {
                      className: `flex min-h-12 items-center justify-center gap-1`,
                      children: n.previews.map(_r),
                    }),
                    (0, $.jsx)(`p`, {
                      className: `max-w-full truncate text-center text-base font-medium text-foreground sm:text-sm`,
                      children: e.label,
                    }),
                  ],
                },
                e.id,
              );
            }),
          })
        : null),
      (t[79] = N),
      (t[80] = M),
      (t[81] = k),
      (t[82] = fe))
    : (fe = t[82]);
  let pe;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(rt, { render: (0, $.jsx)(x, { variant: `outline` }), children: `Cancel` })),
      (t[83] = pe))
    : (pe = t[83]);
  let me = T.length === 0,
    he = N ? `Remove selected${T.length > 0 ? ` (${T.length})` : ``}` : `Remove theme`,
    ge;
  t[84] !== K || t[85] !== me || t[86] !== he
    ? ((ge = (0, $.jsxs)(Ge, {
        children: [
          pe,
          (0, $.jsx)(x, { disabled: me, variant: `destructive`, onClick: K, children: he }),
        ],
      })),
      (t[84] = K),
      (t[85] = me),
      (t[86] = he),
      (t[87] = ge))
    : (ge = t[87]);
  let _e;
  t[88] !== le || t[89] !== fe || t[90] !== ge
    ? ((_e = (0, $.jsxs)(dt, { children: [le, fe, ge] })),
      (t[88] = le),
      (t[89] = fe),
      (t[90] = ge),
      (t[91] = _e))
    : (_e = t[91]);
  let ve;
  t[92] !== b || t[93] !== _e
    ? ((ve = (0, $.jsx)(Je, { open: b, onOpenChange: C, children: _e })),
      (t[92] = b),
      (t[93] = _e),
      (t[94] = ve))
    : (ve = t[94]);
  let ye;
  return (
    t[95] !== J ||
    t[96] !== te ||
    t[97] !== ie ||
    t[98] !== ve ||
    t[99] !== Y ||
    t[100] !== X ||
    t[101] !== Z
      ? ((ye = (0, $.jsxs)(`div`, { className: Y, children: [X, Z, J, te, ie, ve] })),
        (t[95] = J),
        (t[96] = te),
        (t[97] = ie),
        (t[98] = ve),
        (t[99] = Y),
        (t[100] = X),
        (t[101] = Z),
        (t[102] = ye))
      : (ye = t[102]),
    ye
  );
}
function _r(e) {
  return (0, $.jsx)(
    `span`,
    {
      className: `flex size-11 shrink-0 items-center justify-center`,
      children: (0, $.jsx)(`span`, {
        className: `flex scale-75`,
        children: (0, $.jsx)(et, { colors: e.colors, mode: e.mode }),
      }),
    },
    e.mode,
  );
}
function vr(e) {
  return e.label;
}
function yr(e) {
  return lr(`${e.id}.json`, Y(e));
}
function br(e, t) {
  let n = t.collection ? `collection:${t.collection.id}` : `theme:${t.id}`,
    r = e.get(n);
  return (r ? r.push(t) : e.set(n, [t]), e);
}
function xr(e) {
  if (e === null) return Xe[0];
  let t = ue(e);
  return t ? mt(t) : Xe[0];
}
function Sr() {
  R.add(z({ type: `error`, title: `Couldn’t remove theme`, description: `Try again.` }));
}
function Cr() {
  R.add(z({ type: `error`, title: `Couldn’t save theme selection`, description: `Try again.` }));
}
function wr(e) {
  return e.openThemeEditor;
}
function Tr(e) {
  let t = (0, vt.c)(22),
    { durationMs: n } = e,
    [r, i] = (0, Q.useState)(!0),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = () => i(Er)), (t[0] = a)) : (a = t[0]);
  let o = `${n}ms`,
    s;
  t[1] === o ? (s = t[2]) : ((s = { "--preview-duration": o }), (t[1] = o), (t[2] = s));
  let c = s,
    l = r ? `w-4` : `w-0`,
    u;
  t[3] === l
    ? (u = t[4])
    : ((u = O(
        `h-full shrink-0 overflow-hidden rounded-md bg-sidebar`,
        `transition-[width,height,border-width] duration-(--preview-duration) ease-out motion-reduce:transition-none`,
        l,
      )),
      (t[3] = l),
      (t[4] = u));
  let d;
  t[5] === u
    ? (d = t[6])
    : ((d = (0, $.jsx)(`span`, { "aria-hidden": !0, className: u })), (t[5] = u), (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsxs)(`span`, {
        className: `flex min-h-0 flex-1 flex-col gap-1 pt-1`,
        children: [
          (0, $.jsx)(`span`, { className: `h-0.5 w-full rounded-full bg-muted-foreground/25` }),
          (0, $.jsx)(`span`, { className: `h-0.5 w-4/5 rounded-full bg-muted-foreground/20` }),
          (0, $.jsx)(`span`, { className: `h-0.5 w-3/5 rounded-full bg-muted-foreground/15` }),
        ],
      })),
      (t[7] = f))
    : (f = t[7]);
  let p = r ? `h-2 border-t border-border/70` : `h-0 border-t-0`,
    m;
  t[8] === p
    ? (m = t[9])
    : ((m = O(
        `flex shrink-0 items-center overflow-hidden bg-foreground/5 px-2`,
        `transition-[width,height,border-width] duration-(--preview-duration) ease-out motion-reduce:transition-none`,
        p,
      )),
      (t[8] = p),
      (t[9] = m));
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`span`, { className: `h-px w-2/3 rounded-full bg-muted-foreground/25` })),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === m
    ? (g = t[12])
    : ((g = (0, $.jsxs)(`span`, {
        "aria-hidden": !0,
        className: `flex min-w-0 flex-1 flex-col px-1`,
        children: [f, (0, $.jsx)(`span`, { className: m, children: h })],
      })),
      (t[11] = m),
      (t[12] = g));
  let _ = r ? `w-5` : `w-0`,
    v;
  t[13] === _
    ? (v = t[14])
    : ((v = O(
        `h-full shrink-0 overflow-hidden rounded-md bg-muted`,
        `transition-[width,height,border-width] duration-(--preview-duration) ease-out motion-reduce:transition-none`,
        _,
      )),
      (t[13] = _),
      (t[14] = v));
  let y;
  t[15] === v
    ? (y = t[16])
    : ((y = (0, $.jsx)(`span`, { "aria-hidden": !0, className: v })), (t[15] = v), (t[16] = y));
  let b;
  return (
    t[17] !== g || t[18] !== y || t[19] !== c || t[20] !== d
      ? ((b = (0, $.jsxs)(`button`, {
          type: `button`,
          "aria-label": `Replay panel animation preview`,
          className: `flex h-10 w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-background p-1 shadow-xs/5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background`,
          onClick: a,
          style: c,
          children: [d, g, y],
        })),
        (t[17] = g),
        (t[18] = y),
        (t[19] = c),
        (t[20] = d),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function Er(e) {
  return !e;
}
function Dr(e) {
  return `${pe}${be(e)}`;
}
async function Or({ fileDiff: e, oldFile: t, newFile: n, options: r, annotations: i }) {
  let a = ve({ oldFile: t, newFile: n }, `preloadDiffHTML`);
  if ((e == null && a != null && (e = ft(a.oldFile, a.newFile, r?.parseDiffOptions)), e == null))
    throw Error(`preloadFileDiff: You must pass at least a fileDiff, oldFile, or newFile prop`);
  let o = new _e(jr(r));
  return (
    i != null && i.length > 0 && o.setLineAnnotations(i),
    Dr(Ar(await o.asyncRender(e), o, r?.unsafeCSS, r?.themeType ?? `system`))
  );
}
async function kr({ fileDiff: e, options: t, annotations: n }) {
  return {
    fileDiff: e,
    options: t,
    annotations: n,
    prerenderedHTML: await Or({ fileDiff: e, options: t, annotations: n }),
  };
}
function Ar(e, t, n, r) {
  let i = [yt(e.css, !0)];
  (i.push(bt(ge(e.themeStyles, e.baseThemeType ?? r))),
    n != null && i.push(yt(n)),
    e.headerElement != null && i.push(e.headerElement));
  let a = t.renderFullAST(e);
  return ((a.properties[`data-dehydrated`] = ``), i.push(a), i);
}
function jr(e) {
  return {
    ...e,
    useTokenTransformer: he(e),
    headerRenderMode: e?.renderCustomHeader == null ? `default` : `custom`,
    hunkSeparators: typeof e?.hunkSeparators == `function` ? `custom` : e?.hunkSeparators,
  };
}
async function Mr({ patch: e, options: t }) {
  let n = [],
    r = lt(e);
  for (let e of r) for (let r of e.files) n.push(kr({ fileDiff: r, options: t }));
  return await Promise.all(n);
}
var Nr = [
    { name: `frontend-design`, path: `.agents/skills/frontend-design/SKILL.md`, enabled: !0 },
  ],
  Pr = `Use $frontend-design to fix the flaky test in [surface.test.ts](apps/web/src/terminal/ghostty/surface.test.ts) and align the header with [SettingsPanels.tsx](apps/web/src/components/settings/SettingsPanels.tsx) before shipping.`;
function Fr() {}
function Ir() {
  let e = (0, vt.c)(4),
    t = (0, Q.useRef)(null),
    [n, r] = (0, Q.useState)(Pr),
    [i, a] = (0, Q.useState)(227),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (e, t) => {
        (r(e), a(t));
      }),
      (e[0] = o))
    : (o = e[0]);
  let s = o,
    c;
  return (
    e[1] !== i || e[2] !== n
      ? ((c = (0, $.jsx)(`div`, {
          className: `mt-1 mb-2 rounded-lg border border-border bg-background px-3 py-2`,
          children: (0, $.jsx)(ht, {
            ariaLabel: `Prompt font preview`,
            editorRef: t,
            value: n,
            cursor: i,
            contextRecords: gt,
            skills: Nr,
            disabled: !1,
            placeholder: _t,
            className: `max-h-42 min-h-14`,
            onChange: s,
            onPaste: Fr,
          }),
        })),
        (e[1] = i),
        (e[2] = n),
        (e[3] = c))
      : (c = e[3]),
    c
  );
}
var Lr = `diff --git a/src/formatUser.ts b/src/formatUser.ts
--- a/src/formatUser.ts
+++ b/src/formatUser.ts
@@ -1,3 +1,3 @@
 export function formatUser(user: User) {
-  return user.name.toUpperCase();
+  return \`\${user.name} <\${user.email}>\`; // 0O 1lI
 }
`,
  Rr = new Map();
function zr(e) {
  let t = Rr.get(e);
  return (
    t === void 0 &&
      ((t = Mr({
        patch: Lr,
        options: { diffStyle: `unified`, theme: e, preferredHighlighter: at },
      }).then((e) => e.map((e) => e.prerenderedHTML))),
      Rr.set(e, t)),
    t
  );
}
var Br = `
  :host {
    color: var(--code-foreground);
    background-color: var(--code-background);
    --diffs-fg: var(--code-foreground);
    --diffs-bg: var(--code-background);
    --diffs-light-bg: var(--code-background);
    --diffs-dark-bg: var(--code-background);
  }
  [data-diffs-header] {
    background-color: var(--code-background);
    color: var(--code-foreground);
  }
`;
function Vr(e) {
  let t = (0, vt.c)(4),
    { html: n } = e,
    r = (0, Q.useRef)(null),
    i,
    a;
  (t[0] === n
    ? ((i = t[1]), (a = t[2]))
    : ((i = () => {
        let e = r.current;
        if (e === null) return;
        let t = e.shadowRoot ?? e.attachShadow({ mode: `open` });
        t.innerHTML = n;
        let i = document.createElement(`style`);
        ((i.textContent = Br), t.append(i));
      }),
      (a = [n]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a)),
    (0, Q.useEffect)(i, a));
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(`div`, { ref: r })), (t[3] = o))
      : (o = t[3]),
    o
  );
}
function Hr() {
  let e = (0, vt.c)(9),
    t = F(),
    n;
  e[0] === t ? (n = e[1]) : ((n = tt(t)), (e[0] = t), (e[1] = n));
  let r = n,
    [i, a] = (0, Q.useState)(null),
    o,
    s;
  if (
    (e[2] === r
      ? ((o = e[3]), (s = e[4]))
      : ((o = () => {
          let e = !1;
          return (
            zr(r).then((t) => {
              e || a(t);
            }),
            () => {
              e = !0;
            }
          );
        }),
        (s = [r]),
        (e[2] = r),
        (e[3] = o),
        (e[4] = s)),
    (0, Q.useEffect)(o, s),
    i === null)
  )
    return null;
  let c;
  e[5] === i ? (c = e[6]) : ((c = i.map(Ur)), (e[5] = i), (e[6] = c));
  let l;
  return (
    e[7] === c
      ? (l = e[8])
      : ((l = (0, $.jsx)(`div`, { className: `mt-1 mb-2 space-y-2`, children: c })),
        (e[7] = c),
        (e[8] = l)),
    l
  );
}
function Ur(e) {
  return (0, $.jsx)(Vr, { html: e }, e);
}
var Wr = `\x1B[1;32m→\x1B[0m \x1B[1;36mt3code\x1B[0m \x1B[1;34mgit:(\x1B[1;31mmain\x1B[1;34m)\x1B[0m \x1B[1;33m✗\x1B[0m `,
  Gr = `${Wr}vpr dev\r\n\r
  [1;32mVITE[0m [32mv7.1.1[0m  [2mready in[0m [1m1.24s[0m\r
\r
  [32m→[0m  [2mLocal:[0m    [4;36mhttp://127.0.0.1:5173/[0m\r
  [32m→[0m  [2mNetwork:[0m  [4;36mhttp://192.168.1.24:5173/[0m\r
\r
  [32m✓ 85 passed[0m   [33m△ 2 warnings[0m   [31m✗ 0 failed[0m\r
\r
  [42;30m READY [0m [2mwatching for changes, press[0m [1mq[0m [2mto quit[0m\r
\r
[1;32m→[0m [1;36mt3code[0m [1;34mgit:([1;31mmain[1;34m)[0m [1;33m✗[0m `;
function Kr(e, t) {
  let n = e.trim();
  return n.length > 0 ? { family: n, size: t } : { size: t };
}
function qr(e) {
  let t = (0, vt.c)(14),
    { family: n, size: r } = e,
    i = (0, Q.useRef)(null),
    a = (0, Q.useRef)(null),
    o;
  t[0] !== n || t[1] !== r
    ? ((o = { family: n, size: r }), (t[0] = n), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s = (0, Q.useRef)(o),
    { theme: c, resolvedTheme: l } = I(),
    u,
    d;
  (t[3] !== n || t[4] !== r
    ? ((u = () => {
        let e = s.current;
        (e.family !== n || e.size !== r) &&
          ((s.current = { family: n, size: r }), a.current?.setFont(Kr(n, r)));
      }),
      (d = [n, r]),
      (t[3] = n),
      (t[4] = r),
      (t[5] = u),
      (t[6] = d))
    : ((u = t[5]), (d = t[6])),
    (0, Q.useEffect)(u, d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        let e = i.current,
          t = a.current;
        e && t && t.setTheme(Re(e));
      }),
      (t[7] = f))
    : (f = t[7]);
  let p;
  (t[8] !== l || t[9] !== c ? ((p = [c, l]), (t[8] = l), (t[9] = c), (t[10] = p)) : (p = t[10]),
    (0, Q.useEffect)(f, p));
  let m, h;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        let e = i.current;
        if (!e) return;
        let t = !1,
          n = 0;
        return (
          Le.create(e, {
            theme: Re(e),
            font: Kr(s.current.family, s.current.size),
            onData: (e) => {
              let t = a.current;
              if (!t) return;
              if (e === `\r`) {
                (t.write(`\r\n${Wr}`), (n = 0));
                return;
              }
              if (e === `` || e === `\b`) {
                n > 0 && (t.write(`\b \b`), --n);
                return;
              }
              if (e.startsWith(`\x1B`)) return;
              let r = [...e].filter(Yr).join(``);
              r.length !== 0 && (t.write(r), (n += r.length));
            },
            onResize: Fr,
            onSelectionChange: Fr,
            beforeKey: Jr,
            onLinkActivate: Fr,
          }).then((n) => {
            if (t) {
              n.dispose();
              return;
            }
            ((a.current = n), n.setTheme(Re(e)));
            let r = s.current;
            (n.setFont(Kr(r.family, r.size)), n.write(Gr));
          }),
          () => {
            ((t = !0), a.current?.dispose(), (a.current = null));
          }
        );
      }),
      (h = []),
      (t[11] = m),
      (t[12] = h))
    : ((m = t[11]), (h = t[12])),
    (0, Q.useEffect)(m, h));
  let g;
  return (
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, $.jsx)(`div`, {
          ref: i,
          className: `relative mt-1 mb-2 h-52 overflow-hidden rounded-lg border border-border`,
          "aria-label": `Terminal font preview`,
        })),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function Jr(e) {
  return e.key !== `Tab`;
}
function Yr(e) {
  return e >= ` ` && e !== ``;
}
var Xr = `__default__`;
function Zr() {
  return typeof window < `u` && typeof window.queryLocalFonts == `function`;
}
var Qr = Zr() ? { status: `unknown` } : { status: `unavailable` },
  $r = new Set();
function ei(e) {
  return (ai(), $r.add(e), () => $r.delete(e));
}
function ti() {
  return Qr;
}
var ni = null;
function ri() {
  Qr.status === `unknown` &&
    ni === null &&
    (ni = Ke().then((e) => {
      ((Qr =
        e.status === `granted`
          ? { status: `granted`, families: e.families }
          : { status: `unavailable` }),
        (ni = null));
      for (let e of $r) e();
    }));
}
var ii = !1;
function ai() {
  if (ii || Qr.status !== `unknown`) return;
  ii = !0;
  let e = typeof navigator < `u` ? navigator.permissions : void 0;
  typeof e?.query == `function` &&
    e.query({ name: `local-fonts` }).then(
      (e) => {
        e.state === `granted` && ri();
      },
      () => {},
    );
}
function oi() {
  return (0, Q.useSyncExternalStore)(ei, ti);
}
function si(e) {
  let t = (0, vt.c)(47),
    {
      ariaLabel: n,
      defaultFamily: r,
      selectedFamily: i,
      requireMonospace: a,
      initialOpen: s,
      onSelect: c,
    } = e,
    l = a !== void 0 && a,
    u = s !== void 0 && s,
    [d, f] = (0, Q.useState)(!1),
    [p, m] = (0, Q.useState)(``),
    [h] = (0, Q.useState)(u),
    g,
    _;
  (t[0] === h
    ? ((g = t[1]), (_ = t[2]))
    : ((g = () => {
        h && f(!0);
      }),
      (_ = [h]),
      (t[0] = h),
      (t[1] = g),
      (t[2] = _)),
    (0, Q.useEffect)(g, _));
  let v = (0, Q.useRef)(null),
    y = oi(),
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        (f(e), e && m(``));
      }),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    S;
  t[4] !== y.families || t[5] !== y.status
    ? ((S = y.status === `granted` ? y.families : []),
      (t[4] = y.families),
      (t[5] = y.status),
      (t[6] = S))
    : (S = t[6]);
  let C = S,
    w;
  if (t[7] !== C || t[8] !== p) {
    let e = p.trim().toLowerCase();
    ((w = []),
      e.length === 0 && w.push(Xr),
      w.push(...C.filter((t) => e.length === 0 || t.toLowerCase().includes(e))),
      (t[7] = C),
      (t[8] = p),
      (t[9] = w));
  } else w = t[9];
  let T = w,
    E = i.length === 0 ? Xr : i,
    D;
  t[10] !== c || t[11] !== l
    ? ((D = (e) => {
        (f(!1),
          e !== Xr && l && !st(e)
            ? R.add(
                z({
                  type: `error`,
                  title: `"${e}" isn't monospace`,
                  description: `Code and terminal need a fixed-width font, so the current font was kept.`,
                }),
              )
            : c(e === Xr ? `` : e));
      }),
      (t[10] = c),
      (t[11] = l),
      (t[12] = D))
    : (D = t[12]);
  let O = D,
    k;
  t[13] !== r || t[14] !== E
    ? ((k = (e, t) => {
        let n = e === Xr,
          i = n ? r : e;
        return (0, $.jsx)(
          Ee,
          {
            hideIndicator: !0,
            index: t,
            value: e,
            children: (0, $.jsxs)(`div`, {
              className: `flex w-full min-w-0 items-center justify-between gap-2`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `min-w-0 truncate`,
                  style: { fontFamily: i },
                  children: i,
                }),
                (0, $.jsxs)(`span`, {
                  className: `flex shrink-0 items-center gap-1.5`,
                  children: [
                    n
                      ? (0, $.jsx)(`span`, {
                          className: `text-3xs text-muted-foreground/60`,
                          children: `default`,
                        })
                      : null,
                    e === E ? (0, $.jsx)(o, { className: `size-3.5 text-muted-foreground` }) : null,
                  ],
                }),
              ],
            }),
          },
          e,
        );
      }),
      (t[13] = r),
      (t[14] = E),
      (t[15] = k))
    : (k = t[15]);
  let A = k,
    M;
  t[16] === O
    ? (M = t[17])
    : ((M = (e) => {
        typeof e == `string` && O(e);
      }),
      (t[16] = O),
      (t[17] = M));
  let N;
  t[18] === d
    ? (N = t[19])
    : ((N = (e, t) => {
        !d ||
          t.index < 0 ||
          t.reason !== `keyboard` ||
          v.current?.scrollIndexIntoView?.({ index: t.index, animated: !1 });
      }),
      (t[18] = d),
      (t[19] = N));
  let P;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(j, { size: `sm` })), (t[20] = P))
    : (P = t[20]);
  let F = i.length === 0 ? r : i,
    I;
  t[21] !== n || t[22] !== F
    ? ((I = (0, $.jsx)(Ce, { "aria-label": n, render: P, children: F })),
      (t[21] = n),
      (t[22] = F),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => m(e.target.value)), (t[24] = L))
    : (L = t[24]);
  let B;
  t[25] === p
    ? (B = t[26])
    : ((B = (0, $.jsx)(De, { placeholder: `Search fonts…`, value: p, onChange: L })),
      (t[25] = p),
      (t[26] = B));
  let V;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, $.jsx)(we, { children: `No fonts found.` })), (t[27] = V))
    : (V = t[27]);
  let H;
  t[28] === A
    ? (H = t[29])
    : ((H = (e) => {
        let { item: t, index: n } = e;
        return A(t, n);
      }),
      (t[28] = A),
      (t[29] = H));
  let U = Math.min(T.length * 30, 288),
    W;
  t[30] === U ? (W = t[31]) : ((W = { height: U }), (t[30] = U), (t[31] = W));
  let G;
  t[32] !== T || t[33] !== H || t[34] !== W
    ? ((G = (0, $.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-hidden`,
        children: [
          V,
          (0, $.jsx)(`div`, {
            className: `relative min-h-0 max-h-72 w-full flex-1 overflow-hidden`,
            children: (0, $.jsx)(Se, {
              children: (0, $.jsx)(qe, {
                ref: v,
                data: T,
                extraData: T,
                keyExtractor: ci,
                renderItem: H,
                estimatedItemSize: 30,
                drawDistance: 360,
                style: W,
              }),
            }),
          }),
        ],
      })),
      (t[32] = T),
      (t[33] = H),
      (t[34] = W),
      (t[35] = G))
    : (G = t[35]);
  let K;
  t[36] !== B || t[37] !== G
    ? ((K = (0, $.jsxs)(Te, { align: `end`, className: `flex w-72 flex-col`, children: [B, G] })),
      (t[36] = B),
      (t[37] = G),
      (t[38] = K))
    : (K = t[38]);
  let q;
  return (
    t[39] !== T ||
    t[40] !== d ||
    t[41] !== E ||
    t[42] !== N ||
    t[43] !== I ||
    t[44] !== K ||
    t[45] !== M
      ? ((q = (0, $.jsxs)(Oe, {
          items: T,
          filteredItems: T,
          autoHighlight: !0,
          virtualized: !0,
          open: d,
          onOpenChange: x,
          value: E,
          onValueChange: M,
          onItemHighlighted: N,
          children: [I, K],
        })),
        (t[39] = T),
        (t[40] = d),
        (t[41] = E),
        (t[42] = N),
        (t[43] = I),
        (t[44] = K),
        (t[45] = M),
        (t[46] = q))
      : (q = t[46]),
    q
  );
}
function ci(e) {
  return e;
}
export { Ir as a, gr as c, Hr as i, ri as n, qr as o, oi as r, Tr as s, si as t };
//# sourceMappingURL=FontFamilyPicker-boEpB1n_.js.map
