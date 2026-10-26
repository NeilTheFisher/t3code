import { t as e } from "./constants-CmGPilXJ.js";
import {
  a as t,
  c as n,
  i as r,
  l as i,
  n as a,
  o,
  r as s,
  s as c,
  t as l,
  u,
} from "./appendItems-C5MDJzmY.js";
import { t as d } from "./formatCSSVariablePrefix-KRh9vnZf.js";
import {
  Fc as f,
  Gc as p,
  Ic as m,
  Mc as h,
  Oc as g,
  Pc as _,
  Rc as v,
  Uc as y,
  Wc as b,
  ac as x,
  bc as S,
  cc as C,
  fc as w,
  gc as T,
  jc as E,
  lc as D,
  mc as ee,
  nc as O,
  oc as k,
  pc as A,
  rc as te,
  tc as j,
  wc as ne,
  xc as re,
  zc as ie,
} from "./main-BZa0O6xN.js";
function ae(e, t) {
  return e == null || t == null || typeof e == `string` || typeof t == `string`
    ? e === t
    : e.dark === t.dark && e.light === t.light;
}
function oe(t, n) {
  let r = Array.isArray(t) ? t : [t];
  return n == null
    ? r.every((t) => t === `text` || t === `ansi` || e.has(t))
    : n.hasLoadedLanguages(r);
}
function se(e, t) {
  return e == null || t == null
    ? e === t
    : e.startingLine === t.startingLine &&
        e.totalLines === t.totalLines &&
        e.bufferBefore === t.bufferBefore &&
        e.bufferAfter === t.bufferAfter;
}
function ce(e) {
  return n({
    tagName: `div`,
    children: [
      n({
        tagName: `div`,
        children: e.annotations?.map((e) => n({ tagName: `slot`, properties: { name: e } })),
        properties: { "data-annotation-content": `` },
      }),
    ],
    properties: { "data-line-annotation": `${e.hunkIndex},${e.lineIndex}` },
  });
}
function le(e) {
  switch (e) {
    case `file`:
      return `diffs-icon-file-code`;
    case `change`:
      return `diffs-icon-symbol-modified`;
    case `new`:
      return `diffs-icon-symbol-added`;
    case `deleted`:
      return `diffs-icon-symbol-deleted`;
    case `rename-pure`:
    case `rename-changed`:
      return `diffs-icon-symbol-moved`;
  }
}
function ue({ fileOrDiff: e, mode: t, stickyHeader: r }) {
  let i = `type` in e ? e : void 0,
    a = { "data-diffs-header": t, "data-change-type": i?.type, "data-sticky": r ? `` : void 0 };
  return n({
    tagName: `div`,
    children: [
      t === `custom`
        ? n({ tagName: `slot`, properties: { name: g } })
        : de({
            name: e.name,
            prevName: `prevName` in e ? e.prevName : void 0,
            iconType: i?.type ?? `file`,
          }),
      ...(t === `custom` ? [] : [fe(i)]),
    ],
    properties: a,
  });
}
function de({ name: e, prevName: t, iconType: r }) {
  let a = [
    n({ tagName: `slot`, properties: { name: p } }),
    i({ name: le(r), properties: { "data-change-icon": r } }),
  ];
  return (
    t != null &&
      (a.push(
        n({
          tagName: `div`,
          children: [n({ tagName: `bdi`, children: [u(t)] })],
          properties: { "data-prev-name": `` },
        }),
      ),
      a.push(i({ name: `diffs-icon-arrow-right-short`, properties: { "data-rename-icon": `` } }))),
    a.push(
      n({
        tagName: `div`,
        children: [n({ tagName: `bdi`, children: [u(e)] })],
        properties: { "data-title": `` },
      }),
    ),
    a.push(n({ tagName: `slot`, properties: { name: y } })),
    n({ tagName: `div`, children: a, properties: { "data-header-content": `` } })
  );
}
function fe(e) {
  let t = [];
  if (e != null) {
    let r = 0,
      i = 0;
    for (let t of e.hunks) ((r += t.additionLines), (i += t.deletionLines));
    ((i > 0 || r === 0) &&
      t.push(
        n({
          tagName: `span`,
          children: [u(`-${i.toLocaleString()}`)],
          properties: { "data-deletions-count": `` },
        }),
      ),
      (r > 0 || i === 0) &&
        t.push(
          n({
            tagName: `span`,
            children: [u(`+${r.toLocaleString()}`)],
            properties: { "data-additions-count": `` },
          }),
        ));
  }
  return (
    t.push(n({ tagName: `slot`, properties: { name: b } })),
    n({ tagName: `div`, children: t, properties: { "data-metadata": `` } })
  );
}
function pe(e) {
  return n({ tagName: `pre`, properties: me(e) });
}
function me({
  diffIndicators: e,
  disableBackground: t,
  disableLineNumbers: n,
  overflow: r,
  split: i,
  totalLines: a,
  type: o,
  customProperties: s,
}) {
  return {
    ...s,
    "data-diff": o === `diff` ? `` : void 0,
    "data-file": o === `file` ? `` : void 0,
    "data-diff-type": o === `diff` ? (i ? `split` : `single`) : void 0,
    "data-overflow": r,
    "data-disable-line-numbers": n ? `` : void 0,
    "data-background": t ? void 0 : ``,
    "data-indicators": e === `bars` || e === `classic` ? e : void 0,
    style: `--diffs-min-number-column-width-default:${`${a}`.length}ch;`,
  };
}
function he(e, { theme: t, preferredHighlighter: n }) {
  return { langs: Array.isArray(e) ? e : [e ?? `text`], themes: S(t), preferredHighlighter: ne(n) };
}
function ge(e) {
  return `annotation-${`side` in e ? `${e.side}-` : ``}${e.lineNumber}`;
}
function _e(e) {
  return (
    e.startingLine === 0 && e.totalLines === 1 / 0 && e.bufferBefore === 0 && e.bufferAfter === 0
  );
}
var ve = /^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i,
  ye = /^0(?:\.0+)?%?$/;
function be(e) {
  let t = e.indexOf(`(`);
  if (t <= 0 || !e.endsWith(`)`)) return;
  let n = e.slice(0, t).trim();
  if (!/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)$/i.test(n)) return;
  let r = e.slice(t + 1, -1).trim();
  if (r.length === 0) return;
  let i = r.lastIndexOf(`/`);
  if (i !== -1) return r.slice(i + 1).trim();
  if (/^(?:rgba|hsla)$/i.test(n)) {
    let e = r.split(`,`);
    if (e.length === 4) return e[3]?.trim();
  }
}
function M(e) {
  let t = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/i.exec(e.trim());
  if (t == null) return null;
  let n = t[1],
    r,
    i = 1;
  return (
    n.length === 3
      ? (r = n
          .split(``)
          .map((e) => e + e)
          .join(``))
      : n.length === 6
        ? (r = n)
        : ((r = n.slice(0, 6)), (i = parseInt(n.slice(6, 8), 16) / 255)),
    [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16), i]
  );
}
function N(e) {
  if (e == null) return null;
  let t = M(e);
  if (t == null) return null;
  let n = t[0] / 255,
    r = t[1] / 255,
    i = t[2] / 255,
    a = (e) => (e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
  return 0.2126 * a(n) + 0.7152 * a(r) + 0.0722 * a(i);
}
function xe(e, t) {
  let [n, r] = e > t ? [e, t] : [t, e];
  return (n + 0.05) / (r + 0.05);
}
function Se(e, t) {
  if (t == null) return;
  let n = M(e),
    r = M(t);
  if (n == null || r == null) return;
  let [i, a, o, s] = n,
    [c, l, u] = r;
  return (
    `#` +
    [
      Math.round(i * s + c * (1 - s)),
      Math.round(a * s + l * (1 - s)),
      Math.round(o * s + u * (1 - s)),
    ]
      .map((e) => e.toString(16).padStart(2, `0`))
      .join(``)
  );
}
function Ce(e) {
  if (e == null) return !1;
  let t = e.trim().toLowerCase();
  if (t === `transparent` || ve.test(t)) return !0;
  let n = be(t);
  return n != null && ye.test(n);
}
function we(e, t) {
  let n = N(e);
  if (n != null) return n < 0.4;
  let r = N(t);
  return r != null && r > 0.6;
}
function Te(e, t) {
  if (e == null || t == null) return !1;
  if (e.trim().toLowerCase() === t.trim().toLowerCase()) return !0;
  let n = N(e),
    r = N(t);
  return n == null || r == null ? !1 : Math.abs(n - r) < 0.06;
}
function Ee(e, t, n) {
  if (t == null || n == null) return !1;
  let r = N(e),
    i = N(t),
    a = N(n);
  return r == null || i == null || a == null ? !1 : Math.abs(r - a) < Math.abs(r - i);
}
function De(e, t) {
  let n = N(e),
    r = t.find((e) => e != null && e !== ``);
  if (n == null) return r;
  let i,
    a = -1;
  for (let e of t) {
    if (e == null || e === ``) continue;
    let t = N(e);
    if (t == null) continue;
    let r = xe(n, t);
    if (r >= 3) return e;
    r > a && ((i = e), (a = r));
  }
  return i ?? r;
}
function Oe(e, t) {
  if (t == null) return e;
  let n = M(e),
    r = M(t),
    i = N(t);
  if (n == null || r == null || i == null) return `color-mix(in srgb, ${e} 70%, ${t})`;
  let [a, o, s] = n,
    [c, l, u] = r;
  for (let e of [0.6, 0.7, 0.8, 0.9]) {
    let t =
        `#` +
        [
          Math.round(a * e + c * (1 - e)),
          Math.round(o * e + l * (1 - e)),
          Math.round(s * e + u * (1 - e)),
        ]
          .map((e) => e.toString(16).padStart(2, `0`))
          .join(``),
      n = N(t);
    if (n != null && xe(i, n) >= 4.5) return t;
  }
  return e;
}
var ke = new WeakMap();
function Ae(e) {
  let t = ke.get(e);
  if (t != null) return t;
  let n = e.colors ?? {},
    r = { ...n },
    i = n[`editor.background`] ?? e.bg,
    a = n[`editor.foreground`] ?? e.fg,
    o = n[`sideBar.background`] ?? i,
    s = n[`sideBar.foreground`] ?? a;
  (P(r, `editor.background`, i),
    P(r, `editor.foreground`, a),
    P(r, `sideBar.background`, o),
    P(r, `sideBar.foreground`, s),
    P(r, `input.background`, n[`input.background`] ?? o),
    P(r, `sideBarSectionHeader.foreground`, n[`sideBarSectionHeader.foreground`] ?? s),
    P(r, `list.activeSelectionForeground`, n[`list.activeSelectionForeground`] ?? s),
    P(
      r,
      `gitDecoration.addedResourceForeground`,
      je(
        n[`gitDecoration.addedResourceForeground`],
        n[`terminal.ansiGreen`],
        n[`editorGutter.addedBackground`],
      ),
    ),
    P(
      r,
      `gitDecoration.modifiedResourceForeground`,
      je(
        n[`gitDecoration.modifiedResourceForeground`],
        n[`terminal.ansiBlue`],
        n[`editorGutter.modifiedBackground`],
      ),
    ),
    P(
      r,
      `gitDecoration.deletedResourceForeground`,
      je(
        n[`gitDecoration.deletedResourceForeground`],
        n[`terminal.ansiRed`],
        n[`editorGutter.deletedBackground`],
      ),
    ));
  let c =
    (Ce(n[`list.focusOutline`]) ? void 0 : n[`list.focusOutline`]) ??
    (Ce(n.focusBorder) ? void 0 : n.focusBorder);
  c == null ? delete r[`list.focusOutline`] : (r[`list.focusOutline`] = c);
  let l = n[`list.hoverBackground`];
  l != null && (Me(l, o) || Ee(l, o, s)) && delete r[`list.hoverBackground`];
  let u = Object.freeze({ ...e, colors: Object.freeze(r) });
  return (ke.set(e, u), u);
}
function P(e, t, n) {
  n != null && n !== `` && (e[t] = n);
}
function je(...e) {
  for (let t of e) if (t != null && t !== ``) return t;
}
function Me(e, t) {
  return t != null && e.toLowerCase() === t.toLowerCase();
}
function Ne({ theme: e = _, highlighter: t, prefix: n }) {
  let r = ``;
  if (typeof e == `string`) {
    let i = t.getTheme(e),
      a = Pe(i, t);
    ((r += `color:${a.fg};`),
      (r += `background-color:${a.bg};`),
      (r += `${d(`global`)}fg:${a.fg};`),
      (r += `${d(`global`)}bg:${a.bg};`),
      (r += Fe(i, n)));
  } else {
    let n = t.getTheme(e.dark),
      i = Pe(n, t);
    ((r += `${d(`global`)}dark:${i.fg};`),
      (r += `${d(`global`)}dark-bg:${i.bg};`),
      (r += Fe(n, `dark`)),
      (n = t.getTheme(e.light)),
      (i = Pe(n, t)),
      (r += `${d(`global`)}light:${i.fg};`),
      (r += `${d(`global`)}light-bg:${i.bg};`),
      (r += Fe(n, `light`)));
  }
  return r;
}
function Pe(e, t) {
  if (t.name === `highlights` && e.zed?.cssVariables === !0) {
    let e = d(`token`);
    return { fg: `var(${e}foreground)`, bg: `var(${e}background)` };
  }
  return Ae(e);
}
function Fe(e, t) {
  t = t == null ? `` : `${t}-`;
  let n = ``,
    r = e.colors?.[`gitDecoration.addedResourceForeground`] ?? e.colors?.[`terminal.ansiGreen`];
  r != null && (n += `${d(`global`)}${t}addition-color:${r};`);
  let i = e.colors?.[`gitDecoration.deletedResourceForeground`] ?? e.colors?.[`terminal.ansiRed`];
  i != null && (n += `${d(`global`)}${t}deletion-color:${i};`);
  let a = e.colors?.[`gitDecoration.modifiedResourceForeground`] ?? e.colors?.[`terminal.ansiBlue`];
  return (a != null && (n += `${d(`global`)}${t}modified-color:${a};`), n);
}
function Ie(e, t, n) {
  return {
    lang: e,
    ...(typeof t == `string` ? { theme: t } : { themes: t }),
    defaultColor: !1,
    cssVariablePrefix: d(`token`),
    tokenizeMaxLineLength: n,
    tokenizeTimeLimit: 0,
  };
}
function Le(e, t) {
  return e?.getPreferredHighlighter() ?? t.preferredHighlighter;
}
var Re = `-1,-1`;
function ze(e) {
  return e?.some((e) => e.lineNumber === 0) ?? !1;
}
function Be(e) {
  let t = e[0];
  return t != null && t.length > 0 ? t : void 0;
}
function Ve(e) {
  return e.startingLine === 0 && e.totalLines > 0;
}
function He(e, t) {
  return e.endsWith(`\r
`)
    ? t +
        `\r
`
    : e.endsWith(`\r`)
      ? t + `\r`
      : e.endsWith(`
`)
        ? t +
          `
`
        : t;
}
function Ue(e, t) {
  return n({
    tagName: `div`,
    children: e,
    properties: { "data-content": ``, style: `grid-row: span ${t}` },
  });
}
var We = `<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-eye-slash" viewBox="0 0 16 16">
    <path d="m13.47 1.47-12 12 1.06 1.06 12-12zM8 14c-.92 0-1.802-.208-2.624-.547l1.173-1.174c.476.142.963.221 1.451.221 1.66 0 3.307-.949 4.626-2.196a10.4 10.4 0 0 0 1.494-1.751A5 5 0 0 0 14.443 8a5 5 0 0 0-.323-.553 10 10 0 0 0-1.238-1.5l1.061-1.062C15.222 6.173 16 7.511 16 8c0 1.05-3.582 6-8 6"/><path d="M8 11q-.084 0-.167-.005l3.162-3.162q.006.083.005.167a3 3 0 0 1-3 3M5.005 8.167l3.162-3.162a3 3 0 0 0-3.162 3.162"/><path d="M8 3.5c.485 0 .97.081 1.445.227l1.168-1.169C9.794 2.212 8.915 2 8 2 3.582 2 0 6.8 0 8c0 .555.766 1.88 2.027 3.144l1.06-1.06a9.5 9.5 0 0 1-1.203-1.461 4.3 4.3 0 0 1-.345-.617L1.536 8l.003-.006c.064-.149.176-.359.345-.617a9.8 9.8 0 0 1 1.482-1.73C4.675 4.427 6.326 3.5 8 3.5"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 4a.75.75 0 0 0-.75.75v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5A.75.75 0 0 0 8 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M4.75 7.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8 3.546a.75.75 0 0 0-.75.75V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2V4.296a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted" viewBox="0 0 16 16">
    <path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/><path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 1.5c-1.613 0-2.807.089-3.704.288-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288s2.807-.089 3.704-.288c.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8" clip-rule="evenodd" opacity=".2"/><path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5 4.25a.75.75 0 0 0-.75.75v3.25a.75.75 0 0 0 1.5 0V6.81l3.302 3.302a1.5 1.5 0 1 0 1.06-1.06L6.811 5.75H8.25a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11.53 4.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m3.53 4.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined" viewBox="0 0 16 16">
    <path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/><path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8m0-1.5c1.613 0 2.807-.089 3.704-.288.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5s-2.807.089-3.704.288c-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8" clip-rule="evenodd" opacity=".2"/><path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.5 4a1.5 1.5 0 1 0 .388 2.948l3.301 3.302H7.75a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 .75-.75V7.75a.75.75 0 0 0-1.5 0v1.44L6.948 5.887A1.5 1.5 0 0 0 5.5 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.496 4.695a.75.75 0 0 0-.051 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.051 1.06L6.49 8.003 4.693 9.998a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m1.555 4.745a.75.75 0 0 0-1.11 1.01L10.486 8l-2.04 2.245a.75.75 0 0 0 1.109 1.01l2.5-2.75a.75.75 0 0 0 0-1.01zm-4 0a.75.75 0 0 0-1.11 1.01l2.043 2.248-1.796 1.995a.75.75 0 0 0 1.116 1.004l2.25-2.5a.75.75 0 0 0-.003-1.007z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`,
  Ge = `@layer base,theme,rendered,unsafe;@layer base{:host{--diffs-font-fallback:"SF Mono", Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", monospace;--diffs-header-font-fallback:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;--diffs-mixer:light-dark(#000,#fff);--diffs-gap-fallback:8px;--diffs-scrollbar-gutter-fallback:6px;--diffs-scrollbar-gutter:var(--diffs-scrollbar-gutter-override,var(--diffs-scrollbar-gutter-measured,var(--diffs-scrollbar-gutter-fallback)));--diffs-added-light:#0dbe4e;--diffs-added-dark:#5ecc71;--diffs-modified-light:#009fff;--diffs-modified-dark:#69b1ff;--diffs-deleted-light:#ff2e3f;--diffs-deleted-dark:#ff6762;--diffs-warning-light:#d5a910;--diffs-warning-dark:#ffd452;color-scheme:light dark;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));font-size:var(--diffs-font-size,13px);line-height:var(--diffs-line-height,20px);font-feature-settings:var(--diffs-font-features);--diffs-bg:light-dark(var(--diffs-light-bg,#fff),var(--diffs-dark-bg,#000));--diffs-bg-buffer:var(--diffs-bg-buffer-override,light-dark(color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer))));--diffs-bg-context:var(--diffs-bg-context-override,light-dark(color-mix(in lab, var(--diffs-bg) 98.5%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 92.5%, var(--diffs-mixer))));--diffs-bg-context-gutter:var(--diffs-bg-context-gutter-override,light-dark(color-mix(in lab, var(--diffs-bg-context) 90%, var(--diffs-bg)),color-mix(in lab, var(--diffs-bg-context) 45%, var(--diffs-bg))));--diffs-bg-separator:var(--diffs-bg-separator-override,light-dark(color-mix(in lab, var(--diffs-bg) 96%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-mixer))));--diffs-fg:light-dark(var(--diffs-light,#000),var(--diffs-dark,#fff));--diffs-fg-number:var(--diffs-fg-number-override,light-dark(color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg)),color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg))));--diffs-fg-conflict-marker:var(--diffs-fg-conflict-marker-override,var(--diffs-fg-number));--diffs-deletion-base:var(--diffs-deletion-color-override,light-dark(var(--diffs-light-deletion-color,var(--diffs-deletion-color,var(--diffs-deleted-light))),var(--diffs-dark-deletion-color,var(--diffs-deletion-color,var(--diffs-deleted-dark)))));--diffs-addition-base:var(--diffs-addition-color-override,light-dark(var(--diffs-light-addition-color,var(--diffs-addition-color,var(--diffs-added-light))),var(--diffs-dark-addition-color,var(--diffs-addition-color,var(--diffs-added-dark)))));--diffs-modified-base:var(--diffs-modified-color-override,light-dark(var(--diffs-light-modified-color,var(--diffs-modified-color,var(--diffs-modified-light))),var(--diffs-dark-modified-color,var(--diffs-modified-color,var(--diffs-modified-dark)))));--diffs-bg-deletion:var(--diffs-bg-deletion-override,light-dark(color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-deletion-base)),color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base))));--diffs-bg-deletion-emphasis:var(--diffs-bg-deletion-emphasis-override,light-dark(rgb(from var(--diffs-deletion-base) r g b / .15),rgb(from var(--diffs-deletion-base) r g b / .2)));--diffs-bg-addition:var(--diffs-bg-addition-override,light-dark(color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-addition-base)),color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base))));--diffs-bg-addition-emphasis:var(--diffs-bg-addition-emphasis-override,light-dark(rgb(from var(--diffs-addition-base) r g b / .15),rgb(from var(--diffs-addition-base) r g b / .2)));--diffs-selection-base:var(--diffs-modified-base);--diffs-selection-number-fg:light-dark(color-mix(in lab, var(--diffs-selection-base) 65%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-selection-base) 75%, var(--diffs-mixer)));background-color:var(--diffs-bg);color:var(--diffs-fg);display:block}pre,code,[data-error-wrapper]{isolation:isolate;font-family:var(--diffs-font-family,var(--diffs-font-fallback));outline:none;margin:0;padding:0;display:block}pre,code{background-color:var(--diffs-bg)}code{contain:content}input,button{font-family:inherit;font-size:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box}[data-icon-sprite]{display:none}[data-diffs-header],[data-separator]{font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback))}[data-diffs-header][data-sticky]{z-index:1;background-color:var(--diffs-bg);position:sticky;top:0}[data-file-info]{color:var(--fg);background-color:color-mix(in lab, var(--bg) 98%, var(--fg));border-block:1px solid color-mix(in lab, var(--bg) 95%, var(--fg));padding:10px;font-weight:700}[data-diff],[data-file]{--diffs-grid-number-column-width:minmax(min-content, max-content);--diffs-code-grid:var(--diffs-grid-number-column-width) 1fr;&[data-dehydrated]{--diffs-code-grid:var(--diffs-grid-number-column-width) minmax(0, 1fr)}&:hover [data-code]::-webkit-scrollbar-thumb{background-color:var(--diffs-bg-context)}}@supports (-webkit-touch-callout:none){:host{--diffs-scrollbar-gutter-fallback:0px}}[data-line] span,[data-edit-prediction-suffix] span{color:light-dark(var(--diffs-token-light,var(--diffs-light)),var(--diffs-token-dark,var(--diffs-dark)));background-color:light-dark(var(--diffs-token-light-bg,inherit),var(--diffs-token-dark-bg,inherit))}[data-line],[data-gutter-buffer],[data-column-number],[data-line-annotation],[data-no-newline],[data-merge-conflict],[data-merge-conflict-actions],[data-editor-overlay]{--diffs-computed-decoration-bg:var(--diffs-bg);--diffs-computed-diff-line-bg:var(--diffs-computed-decoration-bg);--diffs-computed-selected-line-bg:var(--diffs-computed-diff-line-bg);--diffs-computed-editor-active-line-bg:var(--diffs-computed-selected-line-bg);--diffs-computed-hovered-line-bg:var(--diffs-computed-editor-active-line-bg);--diffs-hover-mix-target:var(--diffs-bg-hover-override,var(--diffs-mixer));--diffs-line-bg:var(--diffs-computed-hovered-line-bg);color:var(--diffs-fg);background-color:var(--diffs-line-bg,var(--diffs-bg))}[data-line],[data-no-newline]{&[data-decoration-bg]{--mix-deco-light:92%;--mix-deco-dark:85%;&[data-decoration-bg-depth="2"]{--mix-deco-light:88%;--mix-deco-dark:80%}&[data-decoration-bg-depth="3"]{--mix-deco-light:85%;--mix-deco-dark:78%}--diffs-hover-mix-target:var(--diffs-decoration-bg);--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) var(--mix-deco-light), var(--diffs-decoration-bg)),color-mix(in lab, var(--diffs-bg) var(--mix-deco-dark), var(--diffs-decoration-bg)))}}[data-line-annotation],[data-gutter-buffer=annotation]{--diffs-annotation-bg:var(--diffs-bg-context);--diffs-computed-decoration-bg:var(--diffs-annotation-bg);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-merge-conflict-actions],[data-gutter-buffer=merge-conflict-action],[data-gutter-buffer=merge-conflict-marker-base],[data-gutter-buffer=merge-conflict-marker-separator],[data-merge-conflict=marker-base],[data-merge-conflict=marker-separator]{--diffs-computed-decoration-bg:var(--diffs-bg-context);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-gutter-buffer=merge-conflict-marker-start],[data-merge-conflict=marker-start]{--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) 78%, var(--conflict-bg-current-header-override,var(--diffs-addition-base))),color-mix(in lab, var(--diffs-bg) 68%, var(--conflict-bg-current-header-override,var(--diffs-addition-base))));--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-gutter-buffer=merge-conflict-marker-end],[data-merge-conflict=marker-end]{--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) 78%, var(--conflict-bg-incoming-header-override,var(--diffs-modified-base))),color-mix(in lab, var(--diffs-bg) 68%, var(--conflict-bg-incoming-header-override,var(--diffs-modified-base))));--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-has-merge-conflict] [data-line-annotation],[data-has-merge-conflict] [data-gutter-buffer=annotation]{--diffs-computed-decoration-bg:var(--diffs-bg);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}:where([data-background]){& [data-gutter-buffer],& [data-column-number]{--mix-light:91%;--mix-dark:85%}& [data-line],& [data-no-newline]{--mix-light:88%;--mix-dark:80%}& [data-gutter-buffer],& [data-column-number],& [data-line],& [data-no-newline]{--diffs-diff-line-mix-target:var(--diffs-bg);&[data-line-type=change-deletion]{--diffs-diff-line-mix-target:var(--diffs-bg-deletion-override,var(--diffs-deletion-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-deletion-override,var(--diffs-deletion-base));--diffs-diff-line-mix-target:var(--diffs-bg-deletion-number-override,var(--diffs-deletion-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-line-type=change-addition]{--diffs-diff-line-mix-target:var(--diffs-bg-addition-override,var(--diffs-addition-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-addition-override,var(--diffs-addition-base));--diffs-diff-line-mix-target:var(--diffs-bg-addition-number-override,var(--diffs-addition-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-merge-conflict=current]{--diffs-diff-line-mix-target:var(--conflict-bg-current-override,var(--diffs-addition-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-addition-override,var(--diffs-addition-base));--diffs-diff-line-mix-target:var(--conflict-bg-current-number-override,var(--diffs-addition-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-merge-conflict=incoming]{--diffs-diff-line-mix-target:var(--conflict-bg-incoming-override,var(--diffs-modified-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-modified-base);--diffs-diff-line-mix-target:var(--conflict-bg-incoming-number-override,var(--diffs-modified-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}}}[data-gutter-buffer],[data-column-number],[data-line],[data-line-annotation],[data-merge-conflict],[data-merge-conflict-actions],[data-no-newline],[data-editor-overlay]{--diffs-selection-mix-target:var(--diffs-bg-selection-override,var(--diffs-selection-base));--diffs-selection-emphasis-mix-target:var(--diffs-selection-mix-target);&:where([data-editor-overlay]),&:where([data-line],[data-line-annotation],[data-merge-conflict],[data-merge-conflict-actions],[data-no-newline])[data-selected-line]{--mix-selection-light:82%;--mix-selection-dark:75%;--diffs-hover-mix-target:var(--diffs-selection-mix-target)}&:where([data-gutter-buffer][data-selected-line],[data-column-number]:is([data-selected-line],[data-editor-active-line])){--mix-selection-light:75%;--mix-selection-dark:60%;--diffs-selection-mix-target:var(--diffs-bg-selection-number-override,var(--diffs-selection-base));--diffs-hover-mix-target:var(--diffs-selection-mix-target)}&:where([data-line][data-selected-line]):is([data-line-type=change-addition],[data-line-type=change-deletion]){--diffs-selection-emphasis-mix-target:light-dark(color-mix(in lab, var(--diffs-diff-line-mix-target,var(--diffs-selection-mix-target)) var(--mix-selection-light), var(--diffs-selection-mix-target)),var(--diffs-selection-mix-target))}&:where([data-editor-overlay]),&[data-selected-line]{--diffs-computed-selected-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-diff-line-bg) var(--mix-selection-light), var(--diffs-selection-mix-target)),color-mix(in lab, var(--diffs-computed-diff-line-bg) var(--mix-selection-dark), var(--diffs-selection-mix-target)))}}[data-line][data-editor-active-line],[data-column-number][data-editor-active-line]{--diffs-computed-editor-active-line-bg:color-mix(in lab, var(--diffs-computed-selected-line-bg) var(--diffs-editor-active-line-source-mix,100%), var(--diffs-selection-emphasis-mix-target))}@media (pointer:fine){[data-line][data-hovered],[data-gutter-buffer][data-hovered],[data-column-number][data-hovered],[data-line-annotation][data-hovered],[data-no-newline][data-hovered],[data-merge-conflict][data-hovered],[data-merge-conflict-actions][data-hovered],[data-editor-overlay][data-hovered]{--diffs-computed-hovered-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-editor-active-line-bg) 97%, var(--diffs-hover-mix-target)),color-mix(in lab, var(--diffs-computed-editor-active-line-bg) 91%, var(--diffs-hover-mix-target)))}}[data-gutter-buffer][data-selected-line],[data-column-number]:is([data-selected-line],[data-editor-active-line]){color:var(--diffs-selection-number-fg)}[data-no-newline]{user-select:none;& span{opacity:.6}}[data-diff-type=split][data-overflow=scroll]{grid-template-columns:1fr 1fr;display:grid;& [data-additions]{border-left:1px solid var(--diffs-bg)}& [data-deletions]{border-right:1px solid var(--diffs-bg)}}[data-code]{grid-auto-flow:dense;grid-template-columns:var(--diffs-code-grid);overflow:var(--diffs-overflow-override,scroll) clip;overscroll-behavior-x:none;tab-size:var(--diffs-tab-size,2);padding-top:var(--diffs-gap-block,var(--diffs-gap-fallback));padding-bottom:max(0px, calc(var(--diffs-gap-block,var(--diffs-gap-fallback)) - var(--diffs-scrollbar-gutter)));scrollbar-gutter:stable;align-self:flex-start;display:grid}[data-diffs-scrollbar-measure]{opacity:0;pointer-events:none;scrollbar-gutter:auto;grid-template-columns:none;width:100px;height:100px;padding:0;position:absolute;top:-200px;left:-200px}[data-container-size]{container-type:inline-size}[data-code]::-webkit-scrollbar{width:0;height:var(--diffs-scrollbar-gutter)}[data-code]::-webkit-scrollbar-track{background:0 0}[data-code]::-webkit-scrollbar-thumb{background-color:#0000;background-clip:content-box;border:1px solid #0000;border-radius:3px}[data-code]::-webkit-scrollbar-corner{background-color:#0000}@supports ((-moz-appearance:none)){[data-code]{scrollbar-width:thin;scrollbar-color:var(--diffs-bg-context) transparent;padding-bottom:var(--diffs-gap-block,var(--diffs-gap-fallback))}}[data-diffs-header]~[data-diff],[data-diffs-header]~[data-file]{& [data-code],&[data-overflow=wrap],&[data-dehydrated][data-diff-type=split][data-overflow=scroll]{padding-top:0}}[data-gutter]{grid-template-rows:subgrid;grid-template-columns:subgrid;z-index:3;background-color:var(--diffs-bg);grid-column:1;display:grid;position:relative;& [data-gutter-buffer],& [data-column-number]{border-right:var(--diffs-gap-style,2px solid var(--diffs-bg))}}[data-content]{grid-template-rows:subgrid;grid-template-columns:subgrid;background-color:var(--diffs-bg);grid-column:2;min-width:0;display:grid}[data-overflow=scroll]:not([data-dehydrated],[data-custom-styles],:has(>[data-code]>[contenteditable],>[data-code]>*>:is([data-line-annotation],[data-separator],[data-merge-conflict],[data-merge-conflict-actions])))>[data-code]{display:flex;&>[data-gutter]{flex-shrink:0;display:block}&>[data-content]{flex:1 0 max-content;display:block}}[data-diff-type=split][data-overflow=wrap],[data-dehydrated][data-diff-type=split][data-overflow=scroll]{grid-auto-flow:dense;grid-template-columns:repeat(2, var(--diffs-code-grid));padding-block:var(--diffs-gap-block,var(--diffs-gap-fallback));display:grid;& [data-code]{display:contents}& [data-deletions]{& [data-gutter]{grid-column:1}& [data-content]{border-right:1px solid var(--diffs-bg);grid-column:2}}& [data-additions]{& [data-gutter]{border-left:1px solid var(--diffs-bg);grid-column:3}& [data-content]{grid-column:4}}}[data-dehydrated][data-diff-type=split][data-overflow=scroll] [data-content]{overflow:clip}[data-overflow=scroll] [data-gutter]{position:sticky;left:0}[data-interactive-lines] [data-line]{cursor:pointer}[data-interactive-line-numbers] [data-column-number]{cursor:pointer;touch-action:none}[data-content-buffer],[data-gutter-buffer]{user-select:none;min-height:1lh;position:relative}[data-gutter-buffer]{padding-left:2ch;padding-right:1ch;&:before{content:"";min-width:var(--diffs-min-number-column-width,var(--diffs-min-number-column-width-default,3ch));display:block}}[data-gutter-buffer=annotation]{--diffs-annotation-bg:var(--diffs-bg-context-gutter);min-height:0}[data-gutter-buffer=buffer]{--diffs-line-bg:var(--diffs-bg-context-gutter)}[data-content-buffer]{background-position:5px 0;background-size:8px 8px;background-origin:border-box;background-image:repeating-linear-gradient(-45deg, transparent, transparent calc(3px * 1.414), var(--diffs-bg-buffer) calc(3px * 1.414), var(--diffs-bg-buffer) calc(4px * 1.414));grid-column:1}[data-separator]{box-sizing:content-box;background-color:var(--diffs-bg)}[data-separator=simple]{min-height:4px}[data-separator=line-info],[data-separator=line-info-basic],[data-separator=metadata],[data-separator=simple]{background-color:var(--diffs-bg-separator)}[data-separator=line-info],[data-separator=line-info-basic],[data-separator=metadata]{height:32px;position:relative}[data-separator-wrapper]{user-select:none;fill:currentColor;background-color:var(--diffs-bg);align-items:center;height:100%;display:flex;position:absolute;inset-inline:0}[data-content] [data-separator-wrapper]{display:none}[data-separator=metadata] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);height:100%;color:var(--diffs-fg-number);white-space:nowrap;text-overflow:ellipsis;min-width:min-content;padding-inline:1ch;inset-inline:100% auto;overflow:hidden}[data-separator=line-info]{margin-block:var(--diffs-gap-block,var(--diffs-gap-fallback));& [data-separator-wrapper]{min-width:16px}}[data-separator=line-info-basic],[data-separator=metadata]{margin-block:0}[data-separator=line-info][data-separator-first]{margin-top:0}[data-separator=line-info][data-separator-last]{margin-bottom:0}[data-expand-index] [data-separator-wrapper]{grid-template-columns:32px auto;display:grid}[data-expand-index] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:32px 32px auto}[data-expand-button],[data-separator-content]{background-color:var(--diffs-bg-separator);flex:none;align-items:center;display:flex}[data-expand-index] [data-separator-content]:hover{cursor:pointer;text-decoration:underline}[data-expand-button]{cursor:pointer;min-width:32px;color:var(--diffs-fg-number);border-right:2px solid var(--diffs-bg);flex-shrink:0;justify-content:center;align-self:stretch;&:hover{color:var(--diffs-fg)}&[data-expand-all-button]{display:none}}[data-expand-down] [data-icon]{transform:scaleY(-1)}[data-separator-content]{height:100%;color:var(--diffs-fg-number);flex:auto;justify-content:flex-start;padding:0 1ch;overflow:hidden}[data-separator=line-info],[data-separator=line-info-basic]{& [data-separator-content]{user-select:none;height:100%;overflow:clip}}[data-unmodified-lines]{text-overflow:ellipsis;white-space:nowrap;flex:0 auto;min-width:0;display:block;overflow:hidden}@supports (width:1cqi){[data-unified]{& [data-separator=line-info] [data-separator-wrapper]{padding-inline:var(--diffs-gap-inline,var(--diffs-gap-fallback));width:100cqi;& [data-separator-content]{border-radius:6px}}& [data-separator=line-info][data-expand-index] [data-separator-wrapper] [data-separator-content]{border-top-left-radius:unset;border-bottom-left-radius:unset}}[data-gutter]{& [data-separator=line-info] [data-separator-wrapper]{padding-left:var(--diffs-gap-inline,var(--diffs-gap-fallback))}& [data-separator=line-info] [data-separator-content]{border-top-left-radius:6px;border-bottom-left-radius:6px}& [data-separator=line-info][data-expand-index] [data-separator-content]{border-top-left-radius:unset;border-bottom-left-radius:unset}}[data-additions]{& [data-content] [data-separator=line-info]{background-color:var(--diffs-bg);& [data-separator-wrapper]{display:none}}& [data-gutter] [data-separator=line-info] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);border-top-right-radius:6px;border-bottom-right-radius:6px;height:100%;display:block;& [data-separator-content],& [data-expand-button]{display:none}}}[data-overflow=scroll] [data-additions] [data-gutter] [data-separator=line-info] [data-separator-wrapper]{width:calc(100cqi - var(--diffs-gap-inline,var(--diffs-gap-fallback)))}[data-overflow=wrap] [data-additions] [data-content] [data-separator=line-info] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);height:100%;margin-right:var(--diffs-gap-inline,var(--diffs-gap-fallback));border-top-right-radius:6px;border-bottom-right-radius:6px;display:block;& [data-separator-content],& [data-expand-button]{display:none}}[data-separator=line-info] [data-separator-wrapper]{& [data-expand-both],& [data-expand-down],& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}}@media (pointer:fine){[data-separator=line-info] [data-separator-wrapper]{&[data-separator-multi-button]{& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:unset}& [data-expand-down]{border-bottom-left-radius:6px;border-top-left-radius:unset}}}}}@media (pointer:coarse){[data-separator=line-info-basic] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:34px 34px auto;& [data-separator-content]{grid-column:unset;grid-row:unset}}@supports (width:1cqi){[data-separator=line-info] [data-separator-wrapper]{& [data-expand-both],& [data-expand-down],& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}&[data-separator-multi-button]{& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}& [data-expand-down]{border-bottom-left-radius:unset;border-top-left-radius:unset}}}}}@media (pointer:fine){[data-separator-wrapper][data-separator-multi-button]{grid-template-rows:50% 50%;display:grid;& [data-separator-content]{grid-area:1/2/-1;min-width:min-content}& [data-expand-button]{grid-column:1}}[data-separator=line-info] [data-separator-wrapper],[data-separator=line-info] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:34px auto}[data-separator=line-info-basic][data-expand-index] [data-separator-wrapper]{grid-template-columns:100% auto}[data-separator=line-info],[data-separator=line-info-basic]{& [data-separator-multi-button]{& [data-expand-up]{border-bottom:1px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg)}& [data-expand-down]{border-top:1px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg)}}}}[data-additions] [data-gutter] [data-separator-wrapper],[data-additions] [data-separator=line-info-basic] [data-separator-wrapper],[data-content] [data-separator-wrapper]{display:none}[data-line-annotation]{min-height:var(--diffs-annotation-min-height,0);z-index:2}[data-merge-conflict-actions]{z-index:2}[data-separator=custom]{grid-template-columns:subgrid;display:grid}[data-line],[data-column-number],[data-no-newline]{padding-inline:1ch;position:relative}[data-indicators=classic] [data-line]{padding-inline-start:2ch}[data-indicators=classic]{& [data-line-type=change-addition],& [data-line-type=change-deletion]{&[data-no-newline],&[data-line]{&:before{user-select:none;width:1ch;height:1lh;display:inline-block;position:absolute;top:0;left:0}}}& [data-line-type=change-addition]{&[data-line],&[data-no-newline]{&:before{content:"+";color:var(--diffs-addition-base)}}}& [data-line-type=change-deletion]{&[data-line],&[data-no-newline]{&:before{content:"-";color:var(--diffs-deletion-base)}}}}[data-indicators=bars]{& [data-line-type=change-deletion],& [data-line-type=change-addition]{&[data-column-number]{&:before{content:"";user-select:none;contain:strict;width:4px;height:100%;display:block;position:absolute;top:0;left:0}}}& [data-line-type=change-deletion]{&[data-column-number]{&:before{background-image:linear-gradient(0deg, var(--diffs-bg-deletion) 50%, var(--diffs-deletion-base) 50%);background-repeat:repeat;background-size:2px 2px;background-size:calc(1lh / round(1lh / 2px)) calc(1lh / round(1lh / 2px))}}}& [data-line-type=change-addition]{&[data-column-number]{&:before{background-color:var(--diffs-addition-base)}}}}[data-overflow=wrap]{& [data-line]{white-space:pre-wrap;word-break:break-word}& [data-annotation-content]{word-break:break-word}}[data-overflow=scroll] [data-line]{white-space:pre;min-height:1lh}[data-overflow=scroll] [data-column-number]{min-height:1lh}[data-column-number]{box-sizing:content-box;text-align:right;user-select:none;color:var(--diffs-fg-number);padding-left:2ch}[data-line-number-content]{min-width:var(--diffs-min-number-column-width,var(--diffs-min-number-column-width-default,3ch));z-index:1;display:inline-block;position:relative}[data-disable-line-numbers]{& [data-gutter-buffer],& [data-column-number]{min-width:4px;padding:0;&:before{min-width:0}}& [data-line-number-content]{display:none}& [data-gutter-utility-slot]{right:unset;justify-content:flex-start;left:0}&[data-indicators=bars] [data-gutter-utility-slot]{left:6px}}[data-file][data-disable-line-numbers]{& [data-gutter-buffer],& [data-column-number]{border-right:0;min-width:0}}[data-diff-span]{box-decoration-break:clone;border-radius:3px}[data-line-type=change-addition] [data-diff-span]{background-color:var(--diffs-bg-addition-emphasis)}[data-line-type=change-deletion] [data-diff-span]{background-color:var(--diffs-bg-deletion-emphasis)}[data-merge-conflict=marker-start],[data-merge-conflict=marker-base],[data-merge-conflict=marker-separator],[data-merge-conflict=marker-end]{color:var(--diffs-fg);padding-left:1ch}[data-merge-conflict=marker-start],[data-merge-conflict=marker-end]{align-items:center;display:flex;&:after{color:var(--diffs-fg-conflict-marker);font-size:.75rem;font-style:normal;line-height:1.25rem;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));padding-left:1ch}}[data-merge-conflict=marker-start]:after{content:"(Current Change)"}[data-merge-conflict=marker-end]:after{content:"(Incoming Change)"}[data-merge-conflict-actions-content]{min-height:1.75rem;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));color:var(--diffs-fg);align-items:center;gap:.25rem;padding-inline:.5rem;font-size:.75rem;line-height:1.2;display:flex}[data-merge-conflict-action]{appearance:none;color:var(--diffs-fg-number);font:inherit;cursor:pointer;background:0 0;border:0;padding:0;font-style:normal}[data-merge-conflict-action]:hover{color:var(--diffs-fg)}[data-merge-conflict-action=current]:hover{color:var(--diffs-addition-base)}[data-merge-conflict-action=incoming]:hover{color:var(--diffs-modified-base)}[data-merge-conflict-action-separator]{color:var(--diffs-fg-number);opacity:.6;user-select:none}[data-diffs-header=default]{background-color:var(--diffs-bg);justify-content:space-between;align-items:center;gap:var(--diffs-gap-inline,var(--diffs-gap-fallback));min-height:calc(1lh + (var(--diffs-gap-block,var(--diffs-gap-fallback)) * 3));z-index:2;flex-direction:row;padding-inline:16px;display:flex;position:relative;top:0}[data-header-content]{align-items:center;gap:var(--diffs-gap-inline,var(--diffs-gap-fallback));white-space:nowrap;flex-direction:row;min-width:0;display:flex}[data-header-content] [data-prev-name],[data-header-content] [data-title]{text-overflow:ellipsis;white-space:nowrap;direction:rtl;min-width:0;overflow:hidden}[data-prev-name]{opacity:.7}[data-rename-icon]{fill:currentColor;flex-grow:0;flex-shrink:0}[data-diffs-header=default] [data-metadata]{white-space:nowrap;align-items:center;gap:1ch;display:flex}[data-diffs-header=default] [data-additions-count]{font-family:var(--diffs-font-family,var(--diffs-font-fallback));color:var(--diffs-addition-base)}[data-diffs-header=default] [data-deletions-count]{font-family:var(--diffs-font-family,var(--diffs-font-fallback));color:var(--diffs-deletion-base)}[data-change-icon]{fill:currentColor;flex-shrink:0}[data-change-icon=change],[data-change-icon=rename-pure],[data-change-icon=rename-changed]{color:var(--diffs-modified-base)}[data-change-icon=new]{color:var(--diffs-addition-base)}[data-change-icon=deleted]{color:var(--diffs-deletion-base)}[data-change-icon=file]{opacity:.6}[data-annotation-content]{z-index:2;isolation:isolate;white-space:normal;align-self:flex-start;min-width:0;display:flow-root;position:relative}[data-overflow=scroll] [data-annotation-content],[data-overflow=scroll] [data-merge-conflict-actions-content]{width:var(--diffs-column-content-width,auto);left:var(--diffs-column-number-width,0);position:sticky}[data-annotation-slot]{text-wrap-mode:wrap;word-break:normal;white-space-collapse:collapse}[data-gutter-utility-slot]{touch-action:none;justify-content:flex-end;display:flex;position:absolute;top:0;bottom:0;right:0}[data-utility-button]{appearance:none;cursor:pointer;width:1lh;height:1lh;font-size:var(--diffs-font-size,13px);line-height:var(--diffs-line-height,20px);background-color:var(--diffs-modified-base);color:var(--diffs-bg);fill:currentColor;z-index:4;touch-action:none;border:none;border-radius:4px;justify-content:center;align-items:center;margin-right:calc(-1lh + 1ch);padding:0;display:flex;position:relative;&:before{content:"";display:block;position:absolute;inset:0 0 0 -4px}}[data-decoration-bar-stack]{pointer-events:none;isolation:isolate;z-index:1;background-color:var(--diffs-decoration-bar-color,transparent);box-sizing:content-box;border-left:2px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg);width:6px;position:absolute;top:0;bottom:0;right:-2px;[data-decoration-bar-depth="1"] &{background-color:color-mix(in lab, var(--diffs-bg) 20%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-depth="2"] &{background-color:color-mix(in lab, var(--diffs-bg) 45%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-depth="3"] &{background-color:color-mix(in lab, var(--diffs-bg) 65%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-start] &{border-top-left-radius:5px;border-top-right-radius:5px}[data-decoration-bar-end] &{z-index:3;border-bottom-right-radius:5px;border-bottom-left-radius:5px}}[data-placeholder]{contain:strict}[data-error-wrapper]{padding:var(--diffs-gap-block,var(--diffs-gap-fallback)) var(--diffs-gap-inline,var(--diffs-gap-fallback));scrollbar-width:none;max-height:400px;overflow:auto;& [data-error-message]{color:var(--diffs-deletion-base);font-size:18px;font-weight:700}& [data-error-stack]{color:var(--diffs-fg-number)}}}@layer theme,rendered,unsafe;
`,
  F;
function Ke(e) {
  if (F != null) return F;
  let t = e.host;
  if (typeof HTMLElement < `u` && t instanceof HTMLElement && !t.isConnected) return;
  let n = document.createElement(`div`);
  (n.setAttribute(`data-code`, ``), n.setAttribute(ie, `true`));
  let r = document.createElement(`div`);
  return (
    (r.style.position = `relative`),
    (r.style.width = `200%`),
    (r.style.height = `200%`),
    n.appendChild(r),
    e.appendChild(n),
    (F = Math.max(n.offsetHeight - n.clientHeight, 0)),
    n.remove(),
    F
  );
}
function qe(e) {
  let t = e == null ? `var(--diffs-scrollbar-gutter-fallback)` : `${e}px`;
  return `${v}: ${t};`;
}
var Je = `@layer base, theme, rendered, unsafe;`,
  Ye = RegExp(`${et(v)}\\s*:\\s*[^;]+;`);
function Xe(e) {
  return `${Je}
${Ge}
@layer theme {
  ${e}
}`;
}
function Ze(e) {
  return `${Je}
@layer unsafe {
  ${e}
}`;
}
function Qe(e, t = `system`, n) {
  let r =
      t === `system`
        ? ``
        : `
  color-scheme: ${t};`,
    i = qe(n);
  return `${Je}
@layer base {
  ${(t === `system` ? [`light`, `dark`] : [t]).map((e) => {
    let n = `
  [data-line] span, [data-edit-prediction-suffix] span {
    font-weight: var(--diffs-token-${e}-font-weight, inherit);
    font-style: var(--diffs-token-${e}-font-style, inherit);
    text-decoration: var(--diffs-token-${e}-text-decoration, inherit);
  }`;
    return t === `system` && e === `dark` ? `@media (prefers-color-scheme: dark) {${n}\n}` : n;
  }).join(`
`)}
}
@layer rendered {
  :host {${r}
  ${i}
  ${e}
  }
}`;
}
function $e(e, t) {
  let n = qe(t);
  return e.replace(Ye, n);
}
function et(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function tt(e) {
  return (
    e?.useTokenTransformer === !0 ||
    e?.onTokenClick != null ||
    e?.onTokenEnter != null ||
    e?.onTokenLeave != null
  );
}
var nt = class extends Error {
    constructor() {
      (super(`WorkerPoolManager: operation canceled because the pool terminated`),
        (this.name = `WorkerPoolTerminatedError`));
    }
  },
  rt = class extends Error {
    constructor() {
      (super(`WorkerPoolManager: operation canceled before the task completed`),
        (this.name = `WorkerPoolTaskCanceledError`));
    }
  },
  it = class extends Error {
    constructor(e, t) {
      (super(e, t), (this.name = `WorkerPoolWorkerError`));
    }
  },
  at = new WeakSet();
function ot(e) {
  at.add(e);
}
function st(e) {
  return e instanceof nt || e instanceof rt;
}
function ct(e) {
  return st(e) || (e instanceof it && at.has(e));
}
function lt(e) {
  return { ...m, ...e };
}
function ut(e, t) {
  return dt(e, t) + ft(e, t);
}
function dt(e, t) {
  return t ? 0 : e.diffHeaderHeight;
}
function ft(e, t) {
  return e.paddingTop ?? (t ? e.spacing : 0);
}
function pt(e) {
  return e.paddingBottom ?? e.spacing;
}
function mt(e) {
  switch (e) {
    case `simple`:
      return 4;
    case `metadata`:
    case `line-info`:
    case `line-info-basic`:
    case `custom`:
      return 32;
  }
}
function I(e, t) {
  return e?.cacheKey != null || t?.cacheKey != null ? e?.cacheKey === t?.cacheKey : e === t;
}
function L(e, t) {
  return (
    ae(e.theme, t.theme) &&
    e.useTokenTransformer === t.useTokenTransformer &&
    e.tokenizeMaxLineLength === t.tokenizeMaxLineLength &&
    e.lineDiffType === t.lineDiffType &&
    e.maxLineDiffLength === t.maxLineDiffLength
  );
}
function R(e) {
  return n({
    tagName: `div`,
    properties: {
      "data-content-buffer": ``,
      "data-buffer-size": e,
      style: `grid-row: span ${e};min-height:calc(${e} * 1lh)`,
    },
  });
}
function z(e) {
  return n({
    tagName: `div`,
    children: [n({ tagName: `span`, children: [u(`No newline at end of file`)] })],
    properties: { "data-no-newline": ``, "data-line-type": e, "data-column-content": `` },
  });
}
function ht(e) {
  return n({
    tagName: `div`,
    children: [
      i({
        name: e === `both` ? `diffs-icon-expand-all` : `diffs-icon-expand`,
        properties: { "data-icon": `` },
      }),
    ],
    properties: {
      role: `button`,
      "data-expand-button": ``,
      "data-expand-both": e === `both` ? `` : void 0,
      "data-expand-up": e === `up` ? `` : void 0,
      "data-expand-down": e === `down` ? `` : void 0,
    },
  });
}
function B({
  type: e,
  content: t,
  expandIndex: r,
  chunked: i = !1,
  slotName: a,
  isFirstHunk: o,
  isLastHunk: s,
}) {
  let c = 0,
    l = [];
  if (
    (e === `metadata` &&
      t != null &&
      l.push(n({ tagName: `div`, children: [u(t)], properties: { "data-separator-wrapper": `` } })),
    (e === `line-info` || e === `line-info-basic`) && t != null)
  ) {
    let e = [];
    (r != null &&
      (i
        ? (o || (e.push(ht(`up`)), c++), s || (e.push(ht(`down`)), c++))
        : (e.push(ht(!o && !s ? `both` : o ? `down` : `up`)), c++)),
      e.push(
        n({
          tagName: `div`,
          children: [
            n({ tagName: `span`, children: [u(t)], properties: { "data-unmodified-lines": `` } }),
          ],
          properties: { "data-separator-content": `` },
        }),
      ),
      i &&
        r != null &&
        e.push(
          n({
            tagName: `div`,
            children: [u(`Expand all`)],
            properties: { role: `button`, "data-expand-button": ``, "data-expand-all-button": `` },
          }),
        ),
      l.push(
        n({
          tagName: `div`,
          children: e,
          properties: {
            "data-separator-wrapper": ``,
            "data-separator-multi-button": c > 1 ? `` : void 0,
          },
        }),
      ));
  }
  return (
    e === `custom` && a != null && l.push(n({ tagName: `slot`, properties: { name: a } })),
    n({
      tagName: `div`,
      children: l,
      properties: {
        "data-separator": l.length === 0 ? `simple` : e,
        "data-expand-index": r,
        "data-separator-first": o ? `` : void 0,
        "data-separator-last": s ? `` : void 0,
      },
    })
  );
}
function gt(e, t) {
  return `hunk-separator-${e}-${t}`;
}
function _t(e) {
  let t = e.at(-1);
  return t == null
    ? 0
    : Math.max(C(t.additionStart, t.additionCount), C(t.deletionStart, t.deletionCount));
}
function V({ line: e, spanStart: t, spanLength: n }) {
  return {
    start: { line: e, character: t },
    end: { line: e, character: t + n },
    properties: { "data-diff-span": `` },
    alwaysWrap: !0,
  };
}
function H({ item: e, arr: t, enableJoin: n, isNeutral: r = !1, isLastItem: i = !1 }) {
  let a = t[t.length - 1];
  if (a == null || i || !n) {
    t.push([+!r, e.value]);
    return;
  }
  let o = a[0] === 0;
  r === o || (r && e.value.length === 1 && !o) ? (a[1] += e.value) : t.push([+!r, e.value]);
}
function U(e) {
  return [D(e.additionStart, e.additionCount) + 1, C(e.additionStart, e.additionCount) + 1];
}
function W({
  isPartial: e,
  rangeSize: t,
  expandedHunks: n,
  hunkIndex: r,
  collapsedContextThreshold: i,
}) {
  let a = Math.max(t, 0);
  if (a === 0 || e)
    return { fromStart: 0, fromEnd: 0, rangeSize: a, collapsedLines: a, renderAll: !1 };
  if (n === !0 || a <= i)
    return { fromStart: a, fromEnd: 0, rangeSize: a, collapsedLines: 0, renderAll: !0 };
  let o = n?.get(r),
    s = Math.min(Math.max(o?.fromStart ?? 0, 0), a),
    c = Math.min(Math.max(o?.fromEnd ?? 0, 0), a),
    l = s + c,
    u = l >= a;
  return {
    fromStart: u ? a : s,
    fromEnd: u ? 0 : c,
    rangeSize: a,
    collapsedLines: Math.max(a - l, 0),
    renderAll: u,
  };
}
function vt(e) {
  let t = e.hunks[e.hunks.length - 1];
  if (t == null || e.isPartial || e.additionLines.length === 0 || e.deletionLines.length === 0)
    return !1;
  let n = e.additionLines.length - C(t.additionStart, t.additionCount),
    r = e.deletionLines.length - C(t.deletionStart, t.deletionCount);
  return n <= 0 && r <= 0 ? !1 : n !== r;
}
function yt({ fileDiff: e, errorPrefix: t }) {
  let n = e.hunks[e.hunks.length - 1];
  if (n == null || e.isPartial || e.additionLines.length === 0 || e.deletionLines.length === 0)
    return 0;
  let r = e.additionLines.length - C(n.additionStart, n.additionCount),
    i = e.deletionLines.length - C(n.deletionStart, n.deletionCount);
  if (r <= 0 && i <= 0) return 0;
  if (r !== i)
    throw Error(`${t}: trailing context mismatch (additions=${r}, deletions=${i}) for ${e.name}`);
  return Math.min(r, i);
}
function G({
  fileDiff: e,
  hunkIndex: t,
  expandedHunks: n,
  collapsedContextThreshold: r,
  errorPrefix: i,
}) {
  if (t !== e.hunks.length - 1) return;
  let a = yt({ fileDiff: e, errorPrefix: i });
  if (a <= 0) return;
  if (n === !0 || a <= r)
    return { fromStart: a, fromEnd: 0, rangeSize: a, collapsedLines: 0, renderAll: !0 };
  let o = n?.get(e.hunks.length),
    s = Math.min(Math.max(o?.fromStart ?? 0, 0), a);
  return { fromStart: s, fromEnd: 0, rangeSize: a, collapsedLines: a - s, renderAll: s >= a };
}
function bt({ fileDiff: e, lineNumber: t, expandedHunks: n, collapsedContextThreshold: r }) {
  if (n === !0 || e.isPartial) return !0;
  for (let [i, a] of e.hunks.entries()) {
    let [o, s] = U(a);
    if (t < o) {
      let s = W({
          isPartial: e.isPartial,
          rangeSize: a.collapsedBefore,
          expandedHunks: n,
          hunkIndex: i,
          collapsedContextThreshold: r,
        }),
        c = o - s.rangeSize;
      return s.renderAll || t < c + s.fromStart || t >= o - s.fromEnd;
    }
    if (t < s) return !0;
  }
  let i = G({
    fileDiff: e,
    hunkIndex: e.hunks.length - 1,
    expandedHunks: n,
    collapsedContextThreshold: r,
    errorPrefix: `isAdditionLineRenderable`,
  });
  if (i == null || i.renderAll) return !0;
  let a = e.hunks[e.hunks.length - 1],
    [, o] = U(a);
  return t < o + i.fromStart || t >= o + i.rangeSize;
}
function xt({
  fileDiff: e,
  lineNumber: t,
  direction: n,
  expandedHunks: r,
  collapsedContextThreshold: i,
}) {
  if (r === !0 || e.isPartial) return t;
  let a = [],
    o = 1;
  for (let [t, n] of e.hunks.entries()) {
    let [s, c] = U(n),
      l = W({
        isPartial: e.isPartial,
        rangeSize: n.collapsedBefore,
        expandedHunks: r,
        hunkIndex: t,
        collapsedContextThreshold: i,
      }),
      u = s - l.rangeSize;
    (l.renderAll
      ? a.push([u, s])
      : (l.fromStart > 0 && a.push([u, u + l.fromStart]),
        l.fromEnd > 0 && a.push([s - l.fromEnd, s])),
      a.push([s, c]),
      (o = c));
  }
  let s = G({
    fileDiff: e,
    hunkIndex: e.hunks.length - 1,
    expandedHunks: r,
    collapsedContextThreshold: i,
    errorPrefix: `getNearestRenderableAdditionLine`,
  });
  if (s != null) {
    let e = o;
    ((o = e + s.rangeSize),
      s.renderAll ? a.push([e, o]) : s.fromStart > 0 && a.push([e, e + s.fromStart]));
  }
  if (t >= o) return t;
  if (n === `down`) {
    for (let [e, n] of a) if (n > t) return Math.max(e, t);
  } else
    for (let e = a.length - 1; e >= 0; e--) {
      let [n, r] = a[e];
      if (n <= t) return Math.min(r - 1, t);
    }
}
function St({ type: e, metrics: t }) {
  return t.hunkSeparatorHeight ?? mt(e);
}
function Ct({ type: e, metrics: t }) {
  return e === `simple` || e === `metadata` || e === `line-info-basic` ? 0 : t.spacing;
}
function wt({ type: e, hunkIndex: t, hunkSpecs: n }) {
  switch (e) {
    case `simple`:
      return t > 0;
    case `metadata`:
      return n != null;
    case `line-info`:
    case `line-info-basic`:
    case `custom`:
      return !0;
  }
}
function Tt(e) {
  return e !== `simple` && e !== `metadata`;
}
function Et({ type: e, metrics: t, hunkIndex: n, hunkSpecs: r }) {
  if (!wt({ type: e, hunkIndex: n, hunkSpecs: r })) return;
  let i = St({ type: e, metrics: t }),
    a = Ct({ type: e, metrics: t }),
    o = n > 0 ? a : 0,
    s = a;
  return { height: i, gapBefore: o, gapAfter: s, totalHeight: o + i + s };
}
function Dt({ type: e, metrics: t }) {
  if (!Tt(e)) return;
  let n = St({ type: e, metrics: t }),
    r = Ct({ type: e, metrics: t });
  return { height: n, gapBefore: r, gapAfter: 0, totalHeight: r + n };
}
function K({
  diff: e,
  diffStyle: t,
  startingLine: n = 0,
  totalLines: r = 1 / 0,
  expandedHunks: i,
  collapsedContextThreshold: a = 1,
  callback: o,
}) {
  let s = Ot({
      diff: e,
      diffStyle: t,
      startingLine: n,
      expandedHunks: i,
      collapsedContextThreshold: a,
    }),
    c = {
      viewportStart: n,
      viewportEnd: n + r,
      isWindowedHighlight: n > 0 || r < 1 / 0,
      splitCount: s.splitCount,
      unifiedCount: s.unifiedCount,
      finalHunkIndex: e.hunks.length - 1,
      shouldBreak() {
        if (!c.isWindowedHighlight) return !1;
        let e = c.unifiedCount >= n + r,
          i = c.splitCount >= n + r;
        return t === `unified` ? e : (t === `split` || e) && i;
      },
      shouldSkip(e, r) {
        if (!c.isWindowedHighlight) return !1;
        let i = e > 0 && c.unifiedCount + e <= n,
          a = r > 0 && c.splitCount + r <= n;
        return t === `unified` ? i : (t === `split` || i) && a;
      },
      incrementCounts(e, n) {
        ((t === `unified` || t === `both`) && (c.unifiedCount += e),
          (t === `split` || t === `both`) && (c.splitCount += n));
      },
      isInWindow(e, n) {
        if (!c.isWindowedHighlight) return !0;
        let r = c.isInUnifiedWindow(e),
          i = c.isInSplitWindow(n);
        return t === `unified` ? r : t === `split` ? i : r || i;
      },
      isInUnifiedWindow(e) {
        return !c.isWindowedHighlight || (c.unifiedCount >= n - e && c.unifiedCount < n + r);
      },
      isInSplitWindow(e) {
        return !c.isWindowedHighlight || (c.splitCount >= n - e && c.splitCount < n + r);
      },
      emit(e, n = !1) {
        return (
          n ||
            (t === `unified`
              ? c.incrementCounts(1, 0)
              : t === `split`
                ? c.incrementCounts(0, 1)
                : c.incrementCounts(1, 1)),
          o(e) ?? !1
        );
      },
    };
  hunkIterator: for (let n = s.hunkIndex; n < e.hunks.length; n++) {
    let r = e.hunks[n];
    if (r == null) throw Error(`iterateOverDiff: invalid hunk index`);
    if (c.shouldBreak()) break;
    let o = D(r.deletionStart, r.deletionCount),
      s = D(r.additionStart, r.additionCount),
      l = !e.isPartial && r.deletionCount === 0 ? o : r.deletionLineIndex,
      u = !e.isPartial && r.additionCount === 0 ? s : r.additionLineIndex,
      d = W({
        isPartial: e.isPartial,
        rangeSize: r.collapsedBefore,
        expandedHunks: i,
        hunkIndex: n,
        collapsedContextThreshold: a,
      }),
      f =
        n === c.finalHunkIndex
          ? G({
              fileDiff: e,
              hunkIndex: n,
              expandedHunks: i,
              collapsedContextThreshold: a,
              errorPrefix: `iterateOverDiff`,
            })
          : void 0,
      p = d.fromStart + d.fromEnd;
    function m(e, n) {
      return f == null || f.collapsedLines <= 0 || f.fromStart + f.fromEnd > 0
        ? 0
        : t === `unified`
          ? e === r.unifiedLineStart + r.unifiedLineCount - 1
            ? f.collapsedLines
            : 0
          : n === r.splitLineStart + r.splitLineCount - 1
            ? f.collapsedLines
            : 0;
    }
    let h = d.collapsedLines === 0;
    function g() {
      return h ? 0 : ((h = !0), d.collapsedLines);
    }
    if (c.shouldSkip(p, p)) (c.incrementCounts(p, p), g());
    else {
      let e = r.unifiedLineStart - d.rangeSize,
        i = r.splitLineStart - d.rangeSize,
        a = l - d.rangeSize,
        f = u - d.rangeSize,
        p = o + 1 - d.rangeSize,
        m = s + 1 - d.rangeSize;
      if (
        q(c, d.fromStart, t, (t) =>
          c.emit({
            hunkIndex: n,
            hunk: r,
            collapsedBefore: 0,
            collapsedAfter: 0,
            type: `context-expanded`,
            deletionLine: {
              lineNumber: p + t,
              lineIndex: a + t,
              noEOFCR: !1,
              unifiedLineIndex: e + t,
              splitLineIndex: i + t,
            },
            additionLine: {
              unifiedLineIndex: e + t,
              splitLineIndex: i + t,
              lineIndex: f + t,
              lineNumber: m + t,
              noEOFCR: !1,
            },
          }),
        ) ||
        ((e = r.unifiedLineStart - d.fromEnd),
        (i = r.splitLineStart - d.fromEnd),
        (a = l - d.fromEnd),
        (f = u - d.fromEnd),
        (p = o + 1 - d.fromEnd),
        (m = s + 1 - d.fromEnd),
        q(
          c,
          d.fromEnd,
          t,
          (t) =>
            c.emit({
              hunkIndex: n,
              hunk: r,
              collapsedBefore: g(),
              collapsedAfter: 0,
              type: `context-expanded`,
              deletionLine: {
                lineNumber: p + t,
                lineIndex: a + t,
                noEOFCR: !1,
                unifiedLineIndex: e + t,
                splitLineIndex: i + t,
              },
              additionLine: {
                unifiedLineIndex: e + t,
                splitLineIndex: i + t,
                lineIndex: f + t,
                lineNumber: m + t,
                noEOFCR: !1,
              },
            }),
          () => {
            g();
          },
        ))
      )
        break hunkIterator;
    }
    let _ = r.unifiedLineStart,
      v = r.splitLineStart,
      y = l,
      b = u,
      x = o + 1,
      S = s + 1,
      C = r.hunkContent.at(-1);
    for (let e of r.hunkContent) {
      if (c.shouldBreak()) break hunkIterator;
      let i = e === C;
      if (e.type === `context`) {
        if (c.shouldSkip(e.lines, e.lines)) (c.incrementCounts(e.lines, e.lines), g());
        else if (
          q(
            c,
            e.lines,
            t,
            (t) => {
              let a = i && t === e.lines - 1,
                o = _ + t,
                s = v + t;
              return c.emit({
                hunkIndex: n,
                hunk: r,
                collapsedBefore: g(),
                collapsedAfter: m(o, s),
                type: `context`,
                deletionLine: {
                  lineNumber: x + t,
                  lineIndex: y + t,
                  noEOFCR: a && r.noEOFCRDeletions,
                  unifiedLineIndex: o,
                  splitLineIndex: s,
                },
                additionLine: {
                  unifiedLineIndex: o,
                  splitLineIndex: s,
                  lineIndex: b + t,
                  lineNumber: S + t,
                  noEOFCR: a && r.noEOFCRAdditions,
                },
              });
            },
            () => {
              g();
            },
          )
        )
          break hunkIterator;
        ((_ += e.lines),
          (v += e.lines),
          (y += e.lines),
          (b += e.lines),
          (x += e.lines),
          (S += e.lines));
      } else {
        let a = Math.max(e.deletions, e.additions),
          o = e.deletions + e.additions;
        if (!c.shouldSkip(o, a)) {
          let s = jt(c, e, t);
          (s[0]?.[0] ?? 0) > 0 && g();
          for (let [l, u] of s)
            for (let s = l; s < u; s++) {
              let l = m(
                _ + s,
                t === `unified` ? v + (s < e.deletions ? s : s - e.deletions) : v + s,
              );
              if (
                c.emit(
                  Mt({
                    hunkIndex: n,
                    hunk: r,
                    collapsedBefore: g(),
                    collapsedAfter: l,
                    diffStyle: t,
                    index: s,
                    unifiedLineIndex: _,
                    splitLineIndex: v,
                    additionLineIndex: b,
                    deletionLineIndex: y,
                    additionLineNumber: S,
                    deletionLineNumber: x,
                    content: e,
                    isLastContent: i,
                    unifiedCount: o,
                    splitCount: a,
                  }),
                  !0,
                )
              )
                break hunkIterator;
            }
        }
        (g(),
          c.incrementCounts(o, a),
          (_ += o),
          (v += a),
          (y += e.deletions),
          (b += e.additions),
          (x += e.deletions),
          (S += e.additions));
      }
    }
    if (f != null) {
      let { collapsedLines: n, fromStart: r, fromEnd: i } = f,
        a = r + i;
      if (
        q(
          c,
          a,
          t,
          (t) => {
            let r = t === a - 1;
            return c.emit({
              hunkIndex: e.hunks.length,
              hunk: void 0,
              collapsedBefore: 0,
              collapsedAfter: r ? n : 0,
              type: `context-expanded`,
              deletionLine: {
                lineNumber: x + t,
                lineIndex: y + t,
                noEOFCR: !1,
                unifiedLineIndex: _ + t,
                splitLineIndex: v + t,
              },
              additionLine: {
                unifiedLineIndex: _ + t,
                splitLineIndex: v + t,
                lineIndex: b + t,
                lineNumber: S + t,
                noEOFCR: !1,
              },
            });
          },
          void 0,
          () => c.shouldBreak(),
        )
      )
        break hunkIterator;
    }
  }
}
function Ot({
  diff: e,
  diffStyle: t,
  startingLine: n,
  expandedHunks: r,
  collapsedContextThreshold: i,
}) {
  if (n <= 0 || t === `both`) return { hunkIndex: 0, splitCount: 0, unifiedCount: 0 };
  let a = kt({ diff: e, expandedHunks: r, collapsedContextThreshold: i }),
    o = 0,
    s = e.hunks.length - 1,
    c = e.hunks.length;
  for (; o <= s;) {
    let e = (o + s) >> 1,
      r = a[e + 1];
    if (r == null) throw Error(`iterateOverDiff: invalid hunk prefix index`);
    (t === `unified` ? r.unifiedCount : r.splitCount) > n ? ((c = e), (s = e - 1)) : (o = e + 1);
  }
  if (c >= e.hunks.length) {
    let t = a[e.hunks.length];
    if (t == null) throw Error(`iterateOverDiff: invalid terminal hunk prefix index`);
    return { hunkIndex: e.hunks.length, splitCount: t.splitCount, unifiedCount: t.unifiedCount };
  }
  let l = a[c];
  if (l == null) throw Error(`iterateOverDiff: invalid selected hunk prefix index`);
  return { hunkIndex: c, splitCount: l.splitCount, unifiedCount: l.unifiedCount };
}
function kt({ diff: e, expandedHunks: t, collapsedContextThreshold: n }) {
  let r = 0,
    i = 0,
    a = e.hunks.length - 1,
    o = [{ splitCount: 0, unifiedCount: 0 }];
  for (let s = 0; s < e.hunks.length; s++) {
    let c = e.hunks[s];
    if (c == null) throw Error(`iterateOverDiff: invalid hunk summary index`);
    let l = W({
        isPartial: e.isPartial,
        rangeSize: c.collapsedBefore,
        expandedHunks: t,
        hunkIndex: s,
        collapsedContextThreshold: n,
      }),
      u = l.fromStart + l.fromEnd;
    ((r += u + c.splitLineCount), (i += u + c.unifiedLineCount));
    let d =
      s === a
        ? G({
            fileDiff: e,
            hunkIndex: s,
            expandedHunks: t,
            collapsedContextThreshold: n,
            errorPrefix: `iterateOverDiff`,
          })
        : void 0;
    if (d != null) {
      let e = d.fromStart + d.fromEnd;
      ((r += e), (i += e));
    }
    o.push({ splitCount: r, unifiedCount: i });
  }
  return o;
}
function At(e, t, n) {
  if (!e.isWindowedHighlight || t <= 0) return [0, t];
  let r = [];
  function i(n) {
    let i = Math.max(0, e.viewportStart - n),
      a = Math.min(t, e.viewportEnd - n);
    a > i && r.push([i, a]);
  }
  if ((n !== `split` && i(e.unifiedCount), n !== `unified` && i(e.splitCount), r.length === 0))
    return [0, 0];
  let a = r[0][0],
    o = r[0][1];
  for (let e = 1; e < r.length; e++) {
    let t = r[e];
    ((a = Math.min(a, t[0])), (o = Math.max(o, t[1])));
  }
  return [a, o];
}
function q(e, t, n, r, i, a) {
  let [o, s] = At(e, t, n);
  o > 0 && (e.incrementCounts(o, o), i?.());
  let c = o;
  for (; c < t;) {
    if (a?.() === !0) return !0;
    if (c >= s) {
      e.incrementCounts(t - c, t - c);
      break;
    }
    if (e.isInWindow(0, 0)) {
      if (r(c) === !0) return !0;
    } else e.incrementCounts(1, 1);
    c++;
  }
  return !1;
}
function jt(e, t, n) {
  if (!e.isWindowedHighlight)
    return [[0, n === `unified` ? t.deletions + t.additions : Math.max(t.deletions, t.additions)]];
  let r = n !== `split`,
    i = n !== `unified`,
    a = n === `unified` ? `unified` : `split`,
    o = [];
  function s(t, n) {
    if (t + n <= e.viewportStart || t >= e.viewportEnd) return;
    let r = Math.max(0, e.viewportStart - t),
      i = Math.min(n, e.viewportEnd - t);
    return i > r ? [r, i] : void 0;
  }
  function c(e, n) {
    return a === `split` ? e : n === `additions` ? [e[0] + t.deletions, e[1] + t.deletions] : e;
  }
  function l(e, t) {
    if (e == null) return;
    let [n, r] = c(e, t);
    r > n && o.push([n, r]);
  }
  if (
    (r &&
      (l(s(e.unifiedCount, t.deletions), `deletions`),
      l(s(e.unifiedCount + t.deletions, t.additions), `additions`)),
    i &&
      (l(s(e.splitCount, t.deletions), `deletions`), l(s(e.splitCount, t.additions), `additions`)),
    o.length === 0)
  )
    return o;
  o.sort((e, t) => e[0] - t[0]);
  let u = [o[0]];
  for (let [e, t] of o.slice(1)) {
    let n = u[u.length - 1];
    e <= n[1] ? (n[1] = Math.max(n[1], t)) : u.push([e, t]);
  }
  return u;
}
function Mt({
  hunkIndex: e,
  hunk: t,
  collapsedAfter: n,
  collapsedBefore: r,
  diffStyle: i,
  index: a,
  unifiedLineIndex: o,
  splitLineIndex: s,
  additionLineIndex: c,
  deletionLineIndex: l,
  additionLineNumber: u,
  deletionLineNumber: d,
  content: f,
  isLastContent: p,
  unifiedCount: m,
  splitCount: h,
}) {
  let g = a < f.deletions ? o + a : void 0,
    _ =
      i === `unified`
        ? a >= f.deletions
          ? o + a
          : void 0
        : a < f.additions
          ? o + f.deletions + a
          : void 0,
    v = i === `unified` ? s + (a < f.deletions ? a : a - f.deletions) : s + a,
    y = a < f.deletions ? l + a : void 0,
    b = a < f.deletions ? d + a : void 0,
    x =
      i === `unified`
        ? a >= f.deletions
          ? c + (a - f.deletions)
          : void 0
        : a < f.additions
          ? c + a
          : void 0,
    S =
      i === `unified`
        ? a >= f.deletions
          ? u + (a - f.deletions)
          : void 0
        : a < f.additions
          ? u + a
          : void 0,
    C =
      i === `unified`
        ? p && a === f.deletions - 1 && t.noEOFCRDeletions
        : p && a === h - 1 && t.noEOFCRDeletions,
    w =
      i === `unified`
        ? p && a === m - 1 && t.noEOFCRAdditions
        : p && a === h - 1 && t.noEOFCRAdditions,
    T =
      y != null && b != null && g != null
        ? { lineNumber: b, lineIndex: y, noEOFCR: C, unifiedLineIndex: g, splitLineIndex: v }
        : void 0,
    E =
      x != null && S != null && _ != null
        ? { unifiedLineIndex: _, splitLineIndex: v, lineIndex: x, lineNumber: S, noEOFCR: w }
        : void 0;
  if (T == null && E != null)
    return {
      type: `change`,
      hunkIndex: e,
      hunk: t,
      collapsedAfter: n,
      collapsedBefore: r,
      deletionLine: void 0,
      additionLine: E,
    };
  if (T != null && E == null)
    return {
      type: `change`,
      hunkIndex: e,
      hunk: t,
      collapsedAfter: n,
      collapsedBefore: r,
      deletionLine: T,
      additionLine: void 0,
    };
  if (T == null || E == null) throw Error(`iterateOverDiff: missing change line data`);
  return {
    type: `change`,
    hunkIndex: e,
    hunk: t,
    collapsedAfter: n,
    collapsedBefore: r,
    deletionLine: T,
    additionLine: E,
  };
}
var Nt = { forcePlainText: !1 };
function Pt(
  e,
  t,
  n,
  {
    forcePlainText: r,
    lazyLineAST: i = !1,
    startingLine: a,
    totalLines: o,
    expandedHunks: c,
    collapsedContextThreshold: u = 1,
  } = Nt,
) {
  r ? ((a ??= 0), (o ??= 1 / 0)) : ((a = 0), (o = 1 / 0));
  let d = a > 0 || o < 1 / 0;
  i &&= !r && !n.useTokenTransformer;
  let f = typeof n.theme == `string` ? t.getTheme(n.theme).type : void 0,
    p = Ne({ theme: n.theme, highlighter: t }),
    m = r && !d && (e.unifiedLineCount > 1e3 || e.splitLineCount > 1e3) ? `none` : n.lineDiffType,
    h = { deletionLines: [], additionLines: [] },
    { maxLineDiffLength: g } = n,
    _ = !r && !e.isPartial,
    v = r ? c : void 0,
    y = new Map();
  function b(e) {
    let t = _ ? 0 : e,
      n = y.get(t) ?? Lt();
    return (y.set(t, n), n);
  }
  function x(e, t, n, r) {
    if (d) {
      let e = n.at(-1);
      ((e == null || e.targetIndex + e.count !== t) &&
        ((e = { targetIndex: t, originalOffset: r.length, count: 0 }), n.push(e)),
        e.count++);
    }
    r.push(e);
  }
  K({
    diff: e,
    diffStyle: `both`,
    startingLine: a,
    totalLines: o,
    expandedHunks: !d || v,
    collapsedContextThreshold: u,
    callback: ({ hunkIndex: t, additionLine: n, deletionLine: r, type: i }) => {
      let a = b(t),
        o = n == null ? r.splitLineIndex : n.splitLineIndex;
      (i === `change` &&
        n != null &&
        r != null &&
        It({
          additionLine: e.additionLines[n.lineIndex],
          deletionLine: e.deletionLines[r.lineIndex],
          deletionLineIndex: a.deletionContent.length,
          additionLineIndex: a.additionContent.length,
          deletionDecorations: a.deletionDecorations,
          additionDecorations: a.additionDecorations,
          lineDiffType: m,
          maxLineDiffLength: g,
        }),
        r != null &&
          (x(e.deletionLines[r.lineIndex], r.lineIndex, a.deletionSegments, a.deletionContent),
          a.deletionInfo.push({
            type: i === `change` ? `change-deletion` : i,
            lineNumber: r.lineNumber,
            altLineNumber: i === `change` ? void 0 : (n.lineNumber ?? void 0),
            lineIndex: `${r.unifiedLineIndex},${o}`,
          })),
        n != null &&
          (x(e.additionLines[n.lineIndex], n.lineIndex, a.additionSegments, a.additionContent),
          a.additionInfo.push({
            type: i === `change` ? `change-addition` : i,
            lineNumber: n.lineNumber,
            altLineNumber: i === `change` ? void 0 : (r.lineNumber ?? void 0),
            lineIndex: `${n.unifiedLineIndex},${o}`,
          })));
    },
  });
  for (let a of y.values()) {
    if (a.deletionContent.length === 0 && a.additionContent.length === 0) continue;
    let o = { name: e.prevName ?? e.name, contents: a.deletionContent.value },
      c = { name: e.name, contents: a.additionContent.value },
      { deletionLines: u, additionLines: d } = Rt({
        deletionFile: o,
        deletionInfo: a.deletionInfo,
        deletionDecorations: a.deletionDecorations,
        additionFile: c,
        additionInfo: a.additionInfo,
        additionDecorations: a.additionDecorations,
        highlighter: t,
        options: n,
        languageOverride: r ? `text` : e.lang,
        lazyLineAST: i,
      });
    if (_) ((h.deletionLines = u), (h.additionLines = d));
    else
      for (let [e, t, n] of [
        [h.deletionLines, u, a.deletionSegments],
        [h.additionLines, d, a.additionSegments],
      ])
        if (n.length > 0)
          for (let r of n)
            for (let n = 0; n < r.count; n++) e[r.targetIndex + n] = t[r.originalOffset + n];
        else if (i) {
          let n = e.length;
          for (let r = 0; r < t.length; r++) s(e, n + r, () => t[r]);
        } else l(e, t);
  }
  return { code: h, themeStyles: p, baseThemeType: f };
}
function Ft(
  e,
  { deletionLineIndex: t, additionLineIndex: n, deletionDecorations: r, additionDecorations: i },
) {
  let a = 0,
    o = 0,
    s = -1,
    c = 0,
    l = -1,
    u = 0;
  for (let { value: t, added: n, removed: r } of e)
    r
      ? (s === -1 && (s = a), (a += t.length), (c = a))
      : n
        ? (l === -1 && (l = o), (o += t.length), (u = o))
        : ((a += t.length), (o += t.length));
  (s !== -1 && r.push(V({ line: t, spanStart: s, spanLength: c - s })),
    l !== -1 && i.push(V({ line: n, spanStart: l, spanLength: u - l })));
}
function It({
  deletionLine: e,
  additionLine: t,
  deletionLineIndex: n,
  additionLineIndex: r,
  deletionDecorations: i,
  additionDecorations: a,
  lineDiffType: o,
  maxLineDiffLength: s,
}) {
  if (
    e == null ||
    t == null ||
    o === `none` ||
    ((e = k(e)), (t = k(t)), e.length > s || t.length > s)
  )
    return;
  let c = o === `char` ? te(e, t) : O(e, t);
  if (o === `word-line`) {
    Ft(c, {
      deletionLineIndex: n,
      additionLineIndex: r,
      deletionDecorations: i,
      additionDecorations: a,
    });
    return;
  }
  let l = [],
    u = [],
    d = o === `word-alt`,
    f = c.at(-1);
  for (let e of c) {
    let t = e === f;
    !e.added && !e.removed
      ? (H({ item: e, arr: l, enableJoin: d, isNeutral: !0, isLastItem: t }),
        H({ item: e, arr: u, enableJoin: d, isNeutral: !0, isLastItem: t }))
      : e.removed
        ? H({ item: e, arr: l, enableJoin: d, isLastItem: t })
        : H({ item: e, arr: u, enableJoin: d, isLastItem: t });
  }
  let p = 0;
  for (let e of l)
    (e[0] === 1 && i.push(V({ line: n, spanStart: p, spanLength: e[1].length })),
      (p += e[1].length));
  p = 0;
  for (let e of u)
    (e[0] === 1 && a.push(V({ line: r, spanStart: p, spanLength: e[1].length })),
      (p += e[1].length));
}
function Lt() {
  return {
    deletionContent: {
      push(e) {
        ((this.value += e), this.length++);
      },
      value: ``,
      length: 0,
    },
    additionContent: {
      push(e) {
        ((this.value += e), this.length++);
      },
      value: ``,
      length: 0,
    },
    deletionInfo: [],
    additionInfo: [],
    deletionDecorations: [],
    additionDecorations: [],
    deletionSegments: [],
    additionSegments: [],
  };
}
function Rt({
  lazyLineAST: e,
  deletionFile: t,
  additionFile: n,
  deletionInfo: r,
  additionInfo: i,
  highlighter: o,
  deletionDecorations: s,
  additionDecorations: c,
  languageOverride: l,
  options: { theme: u, useTokenTransformer: d, tokenizeMaxLineLength: f },
}) {
  let p = (t, n, r) =>
    t.contents === ``
      ? []
      : a(o.codeToTokens(k(t.contents), Ie(l ?? w(t.name), u, f)).tokens, {
          state: { lineInfo: n },
          useTokenTransformer: d,
          decorations: r,
          lazyLineAST: e,
          cacheHtmlStyles: o.name === `highlights`,
        });
  return { deletionLines: p(t, r, s), additionLines: p(n, i, c) };
}
function J(e, t) {
  let n = j(
    { name: e.prevName ?? e.name, contents: e.deletionLines.join(``) },
    { name: e.name, contents: e.additionLines.join(``), lang: e.lang },
    t,
  );
  return {
    hunks: n.hunks,
    splitLineCount: n.splitLineCount,
    unifiedLineCount: n.unifiedLineCount,
    additionLines: n.additionLines,
    deletionLines: n.deletionLines,
    additionCharacterCount: n.additionCharacterCount,
    deletionCharacterCount: n.deletionCharacterCount,
    type: n.type,
  };
}
function zt(e, t) {
  let n = Math.max(e, 1),
    r = Array.from({ length: n }, (e, t) => `${` `.repeat(t + 1)}\n`).join(``);
  return (
    r === t && (r = Array.from({ length: n }, (e, t) => `\u0000${` `.repeat(t)}\n`).join(``)), r
  );
}
function Bt(e) {
  for (let t of e) if (t.trim().length > 0) return !1;
  return !0;
}
function Vt(e, t) {
  return t.length > 0 && t.length < e.deletionLines.length && Bt(t);
}
function Ht(e, t, n, r) {
  let i = e.deletionLines.join(``),
    a = zt(t.length, i),
    o = j(
      { name: e.prevName ?? e.name, contents: i },
      { name: e.name, contents: a, lang: e.lang },
      r,
    );
  return {
    hunks: o.hunks,
    splitLineCount: o.splitLineCount,
    unifiedLineCount: o.unifiedLineCount,
    additionLines: t,
    deletionLines: o.deletionLines,
    additionCharacterCount: n,
    deletionCharacterCount: o.deletionCharacterCount,
    type: o.type,
  };
}
function Ut(e, t) {
  return Ht(e, [``], 0, t);
}
function Wt(e, t) {
  if (e.additionLines.length === 0) return Ut(e, t);
  if (Vt(e, e.additionLines)) return Ht(e, e.additionLines, e.additionCharacterCount, t);
  let n = e.additionLines,
    r = J(e, t);
  return (Kt(r, n), r);
}
function Gt(e) {
  return e.length > 1 && e.at(-1) === ``;
}
function Kt(e, t) {
  if (!Gt(t)) return;
  let n = t.length - e.additionLines.length;
  if (n <= 0) return;
  let r = e.additionLines.length,
    i = e.hunks.at(-1);
  if (i != null && C(i.additionStart, i.additionCount) === r) {
    for (let a of i.hunkContent)
      if (
        a.type === `change` &&
        a.additions < a.deletions &&
        a.additionLineIndex + a.additions === r
      ) {
        ((e.additionLines = t),
          (a.additions += n),
          (i.additionCount += n),
          (i.additionLines += n),
          X(e));
        return;
      }
  }
}
function qt(e, t, n) {
  if (e.isPartial || e.deletionLines.length !== e.additionLines.length) return Y(e, J(e, n));
  let r = Array.from(t);
  if (r.length === 0)
    return Y(e, {
      hunks: e.hunks,
      splitLineCount: e.splitLineCount,
      unifiedLineCount: e.unifiedLineCount,
      type: e.type,
    });
  for (let t of r) {
    let r = e.additionLines[t],
      i = e.deletionLines[t];
    if (r == null || i == null || k(r) === k(i)) return Y(e, J(e, n));
  }
  let i = Jt(e, r);
  if (i.size === 0) return Y(e, J(e, n));
  for (let t of i) if (!Xt(e, t, n)) return Y(e, J(e, n));
  return (
    X(e),
    vt(e)
      ? Y(e, J(e, n))
      : Y(e, {
          hunks: e.hunks,
          splitLineCount: e.splitLineCount,
          unifiedLineCount: e.unifiedLineCount,
          type: e.type,
        })
  );
}
function Y(e, t) {
  return (Object.assign(e, t), t);
}
function Jt(e, t) {
  let n = new Set();
  for (let r of t) {
    let t = Yt(e, r);
    if (t == null) return new Set();
    n.add(t);
  }
  return n;
}
function Yt(e, t) {
  for (let [n, r] of e.hunks.entries()) {
    let e = r.additionLineIndex + r.additionCount;
    if (t >= r.additionLineIndex && t < e) return n;
  }
}
function Xt(e, t, n) {
  let r = e.hunks[t];
  if (r == null) return !1;
  let i = e.deletionLines.slice(r.deletionLineIndex, r.deletionLineIndex + r.deletionCount),
    a = e.additionLines.slice(r.additionLineIndex, r.additionLineIndex + r.additionCount),
    o = j(
      { name: e.prevName ?? e.name, contents: i.join(``) },
      { name: e.name, contents: a.join(``), lang: e.lang },
      { ...n, context: 0 },
    ),
    s = o.hunks[0];
  return s == null || o.hunks.length !== 1 ? !1 : (Qt(r, s), Zt(e, t), !0);
}
function Zt(e, t) {
  let n = e.hunks[t];
  if (n == null) return;
  if (t !== e.hunks.length - 1) {
    ((n.noEOFCRAdditions = !1), (n.noEOFCRDeletions = !1));
    return;
  }
  let r = e.additionLines.at(-1),
    i = e.deletionLines.at(-1);
  ((n.noEOFCRAdditions =
    r != null &&
    r !== `` &&
    !r.endsWith(`
`)),
    (n.noEOFCRDeletions =
      i != null &&
      i !== `` &&
      !i.endsWith(`
`)));
}
function Qt(e, t) {
  let n = e.additionLineIndex,
    r = e.deletionLineIndex;
  ((e.hunkContent = t.hunkContent.map((e) => $t(e, n, r))),
    (e.additionLineIndex = n + t.additionLineIndex),
    (e.additionStart += t.additionLineIndex),
    (e.additionCount = t.additionCount),
    (e.additionLines = t.additionLines),
    t.deletionLineIndex >= 0 &&
      ((e.deletionLineIndex = r + t.deletionLineIndex), (e.deletionStart += t.deletionLineIndex)),
    (e.deletionCount = t.deletionCount),
    (e.deletionLines = t.deletionLines),
    (e.noEOFCRAdditions = t.noEOFCRAdditions),
    (e.noEOFCRDeletions = t.noEOFCRDeletions),
    en(e));
}
function $t(e, t, n) {
  return {
    ...e,
    additionLineIndex: e.additionLineIndex + t,
    deletionLineIndex: e.deletionLineIndex + n,
  };
}
function en(e) {
  let t = 0,
    n = 0;
  for (let r of e.hunkContent)
    r.type === `context`
      ? ((t += r.lines), (n += r.lines))
      : ((t += Math.max(r.additions, r.deletions)), (n += r.additions + r.deletions));
  ((e.splitLineCount = t), (e.unifiedLineCount = n));
}
function X(e) {
  let t = 0,
    n = 0,
    r = 0;
  for (let i of e.hunks)
    ((i.collapsedBefore = Math.max(D(i.additionStart, i.additionCount) - r, 0)),
      (i.splitLineStart = t + i.collapsedBefore),
      (i.unifiedLineStart = n + i.collapsedBefore),
      en(i),
      (t += i.collapsedBefore + i.splitLineCount),
      (n += i.collapsedBefore + i.unifiedLineCount),
      (r = C(i.additionStart, i.additionCount)));
  if (e.hunks.length > 0) {
    let r = e.hunks[e.hunks.length - 1],
      i = Math.max(e.additionLines.length - C(r.additionStart, r.additionCount), 0);
    ((t += i), (n += i));
  }
  ((e.splitLineCount = t), (e.unifiedLineCount = n));
}
var tn = new WeakMap();
function nn(e) {
  return e.length > 1 && e[e.length - 1] === `` ? e.slice(0, -1) : e;
}
function rn(e, t) {
  let n = Math.min(e.length, t.length),
    r = 0;
  for (; r < n && e[r] === t[r];) r++;
  let i = e.length,
    a = t.length;
  for (; i > r && a > r && e[i - 1] === t[a - 1];) (i--, a--);
  if (r !== i || r !== a) return { start: r, deletionEnd: i, additionEnd: a };
}
function an(e, t, n) {
  let r = e.hunks,
    i = e.additionLines,
    a = nn(i),
    o = a === i ? e : { ...e, additionLines: a },
    s = gn(r, mn(o, t, n), e.deletionLines.length),
    c = yn(o, s);
  if (
    ((e.additionLines = a),
    (e.hunks = c),
    (e.editSessionDirty = !0),
    On(e),
    Kt(e, i),
    Sn(r, e.hunks))
  )
    return { regions: s.map((e) => e.previousSpan) };
}
function on(e, t, n, r) {
  let i = new Set(t),
    a = Array.from(i)
      .filter((t) => t >= 0 && t < e.additionLines.length)
      .sort((e, t) => e - t);
  if (a.length === 0) return;
  let o = (t) => (i.has(t) ? r?.get(t) : e.additionLines[t]),
    { hunks: s } = e,
    c,
    l = 0;
  for (let t of a) {
    for (; l < s.length;) {
      let e = s[l];
      if (t < Tn(e) + e.additionCount) break;
      l++;
    }
    let r = s[l],
      i = r == null ? void 0 : Tn(r);
    if (i == null || t < i || (c != null && c !== l)) return an(e, n, o);
    c = l;
  }
  if (c != null) {
    if (sn(e, a, c, r, n)) e.editSessionDirty = !0;
    else return an(e, n, o);
  }
}
function sn(e, t, n, r, i) {
  if (r == null || i?.ignoreWhitespace === !0 || i?.stripTrailingCr === !0) return !1;
  let a = cn(e),
    o = e.hunks[n];
  if (o.hunkContent.some(ln)) return !1;
  for (let n of t) {
    let t = r.get(n),
      i = e.additionLines[n];
    if (t == null || i == null || a.has(t) || a.has(i)) return !1;
    let s = !1;
    for (let e of o.hunkContent)
      if (
        e.type === `change` &&
        e.additions === e.deletions &&
        n >= e.additionLineIndex &&
        n < e.additionLineIndex + e.additions
      ) {
        s = !0;
        break;
      }
    if (!s) return !1;
  }
  return !0;
}
function cn(e) {
  let t = tn.get(e);
  if (t?.lines === e.deletionLines) return t.set;
  let n = new Set(e.deletionLines);
  return (tn.set(e, { lines: e.deletionLines, set: n }), n);
}
function ln(e) {
  return e?.type === `change` && (e.additions === 0 || e.deletions === 0);
}
function un(e, t) {
  let n = new Map(),
    { regions: r } = t;
  for (let t = 0; t <= r.length; t++) {
    let i = r[t - 1],
      a = r[t],
      o = t === 0 ? e.get(0) : i == null ? void 0 : e.get(i.lastIndex + 1),
      s = a == null ? void 0 : e.get(a.firstIndex),
      c = o?.fromStart ?? 0,
      l = s?.fromEnd ?? 0;
    (c > 0 || l > 0) && n.set(t, { fromStart: c, fromEnd: l });
  }
  return n;
}
function dn(e, t, n) {
  let r = [];
  if (e.isPartial) return r;
  for (let [i, a] of e.hunks.entries()) {
    let o = W({
      isPartial: e.isPartial,
      rangeSize: a.collapsedBefore,
      expandedHunks: t,
      hunkIndex: i,
      collapsedContextThreshold: n,
    });
    if (o.rangeSize <= n) continue;
    let s = Z(a),
      c = s - o.rangeSize;
    (o.fromStart > 0 && r.push([c, c + o.fromStart]), o.fromEnd > 0 && r.push([s - o.fromEnd, s]));
  }
  let i = G({
    fileDiff: e,
    hunkIndex: e.hunks.length - 1,
    expandedHunks: t,
    collapsedContextThreshold: n,
    errorPrefix: `captureExpansionAnchors`,
  });
  if (i != null && i.fromStart > 0 && i.rangeSize > n) {
    let t = e.hunks[e.hunks.length - 1],
      n = Z(t) + t.deletionCount;
    r.push([n, n + i.fromStart]);
  }
  return r;
}
function fn(e, t) {
  let n = new Map();
  if (t.length === 0) return n;
  let r = (e, r, i) => {
    if (i <= r) return;
    let a = 0,
      o = 0;
    for (let [e, n] of t)
      n <= r ||
        e >= i ||
        (e <= r && (a = Math.max(a, Math.min(n, i) - r)),
        n >= i && (o = Math.max(o, i - Math.max(e, r))));
    (a > 0 || o > 0) && n.set(e, { fromStart: a, fromEnd: o });
  };
  for (let [t, n] of e.hunks.entries()) {
    let e = Z(n);
    r(t, e - Math.max(n.collapsedBefore, 0), e);
  }
  let i = e.hunks[e.hunks.length - 1];
  return (
    i != null &&
      !e.isPartial &&
      e.deletionLines.length > 0 &&
      r(e.hunks.length, Z(i) + i.deletionCount, e.deletionLines.length),
    n
  );
}
function pn(e, t) {
  return (
    e.editSessionDirty === !0 &&
    (delete e.editSessionDirty,
    Object.assign(
      e,
      e.additionLines.length <= 1 && e.additionLines.join(``) === `` ? J(e, t) : Wt(e, t),
    ),
    !0)
  );
}
function mn(e, t, n) {
  if (rn(e.deletionLines, e.additionLines) == null) return [];
  let r = j(
      { name: e.prevName ?? e.name, contents: e.deletionLines.join(``) },
      { name: e.name, contents: e.additionLines.join(``), lang: e.lang },
      t,
    ),
    i,
    a = (t, a) => {
      i ??= hn(e.hunks);
      for (let e = 0; e <= a; e++) {
        let o = i.get(t.deletionLineIndex - e);
        if (o != null && o.additions === t.additions && o.deletions === t.deletions) {
          if (t.additions > 0 && n != null) {
            for (let e = 0; e < t.additions; e++)
              if (n(o.additionLineIndex + e) !== r.additionLines[t.additionLineIndex + e]) return a;
          }
          return e;
        }
      }
      return a;
    },
    o = [],
    s = 0,
    c = 0;
  for (let e of r.hunks) {
    x(e, r, a);
    let t = e.additionCount > 0 ? e.additionLineIndex - s : e.deletionLineIndex - c;
    ((s += t), (c += t));
    for (let t of e.hunkContent) {
      if (t.type === `context`) {
        ((s += t.lines), (c += t.lines));
        continue;
      }
      let e = $t(t, 0, 0);
      (e.additions === 0 && (e.additionLineIndex = s),
        e.deletions === 0 && (e.deletionLineIndex = c),
        o.push(e),
        (s += e.additions),
        (c += e.deletions));
    }
  }
  return o;
}
function hn(e) {
  let t = new Map();
  for (let n of e)
    for (let e of n.hunkContent)
      e.type === `change` &&
        (e.additions === 0 || e.deletions === 0) &&
        t.set(e.deletionLineIndex, e);
  return t;
}
function gn(e, t, n) {
  let r = e.map((e, t) => {
      let n = Z(e);
      return {
        deletionStart: n,
        deletionEnd: n + e.deletionCount,
        blocks: [],
        previousSpan: { firstIndex: t, lastIndex: t },
      };
    }),
    i = [],
    a = 0;
  for (let e of t) {
    let t = e.deletionLineIndex,
      o = t + e.deletions;
    for (; a < r.length && r[a].deletionEnd < t;) (i.push(r[a]), a++);
    let s = i.length > 0 && _n(t, o, i[i.length - 1]) ? i.pop() : void 0;
    for (; a < r.length && r[a].deletionStart <= o;) ((s = vn(s, r[a])), a++);
    if (s == null) {
      let c = t,
        l = o;
      if ((e.deletions === 0 || e.additions === 0) && n > e.deletions) {
        let e = i[i.length - 1]?.deletionEnd ?? 0,
          s = r[a]?.deletionStart ?? n;
        t > e ? c-- : o < s && l++;
      }
      s = { deletionStart: c, deletionEnd: l, blocks: [], previousSpan: void 0 };
    }
    ((s.deletionStart = Math.min(s.deletionStart, t)),
      (s.deletionEnd = Math.max(s.deletionEnd, o)),
      s.blocks.push(e),
      i.push(s));
  }
  for (; a < r.length;) (i.push(r[a]), a++);
  return i;
}
function _n(e, t, n) {
  return e <= n.deletionEnd && t >= n.deletionStart;
}
function vn(e, t) {
  return e == null
    ? t
    : ((e.deletionStart = Math.min(e.deletionStart, t.deletionStart)),
      (e.deletionEnd = Math.max(e.deletionEnd, t.deletionEnd)),
      e.blocks.push(...t.blocks),
      t.previousSpan != null &&
        ((e.previousSpan ??= { ...t.previousSpan }),
        (e.previousSpan.firstIndex = Math.min(
          e.previousSpan.firstIndex,
          t.previousSpan.firstIndex,
        )),
        (e.previousSpan.lastIndex = Math.max(e.previousSpan.lastIndex, t.previousSpan.lastIndex))),
      e);
}
function yn(e, t) {
  let n = [],
    r = 0,
    i = 0;
  for (let a of t) {
    let t = a.deletionStart - r;
    if (t < 0) throw Error(`buildRegionHunks: overlapping old-side regions`);
    ((r += t), (i += t));
    let o = i,
      s = [];
    for (let e of a.blocks) {
      let t = e.deletionLineIndex - r,
        n = e.additionLineIndex - i;
      if (t < 0 || t !== n) throw Error(`buildRegionHunks: canonical block context mismatch`);
      (xn(s, t, i, r),
        (r += t),
        (i += n),
        s.push({ ...e }),
        (r += e.deletions),
        (i += e.additions));
    }
    let c = a.deletionEnd - r;
    if (c < 0) throw Error(`buildRegionHunks: block exceeds its old-side region`);
    (xn(s, c, i, r),
      (r += c),
      (i += c),
      n.push(
        bn(
          e,
          {
            additionStart: o,
            additionEnd: i,
            deletionStart: a.deletionStart,
            deletionEnd: a.deletionEnd,
          },
          s,
        ),
      ));
  }
  if (e.deletionLines.length - r !== e.additionLines.length - i)
    throw Error(`buildRegionHunks: trailing context mismatch`);
  return n;
}
function bn(e, t, n) {
  let r = t.additionEnd - t.additionStart,
    i = t.deletionEnd - t.deletionStart,
    a = 0,
    o = 0;
  for (let e of n) e.type === `change` && ((a += e.additions), (o += e.deletions));
  let s = {
    collapsedBefore: 0,
    additionStart: En(t.additionStart, r),
    additionCount: r,
    additionLines: a,
    additionLineIndex: Dn(t.additionStart, r),
    deletionStart: En(t.deletionStart, i),
    deletionCount: i,
    deletionLines: o,
    deletionLineIndex: Dn(t.deletionStart, i),
    hunkContent: n,
    hunkSpecs: `@@ -${En(t.deletionStart, i)},${i} +${En(t.additionStart, r)},${r} @@`,
    splitLineStart: 0,
    splitLineCount: 0,
    unifiedLineStart: 0,
    unifiedLineCount: 0,
    noEOFCRAdditions: !1,
    noEOFCRDeletions: !1,
  };
  return (en(s), s);
}
function xn(e, t, n, r) {
  t > 0 && e.push({ type: `context`, lines: t, additionLineIndex: n, deletionLineIndex: r });
}
function Sn(e, t) {
  if (e.length !== t.length) return !0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (
      Z(r) !== Z(i) ||
      r.deletionCount !== i.deletionCount ||
      Tn(r) !== Tn(i) ||
      r.additionCount !== i.additionCount ||
      r.splitLineCount !== i.splitLineCount ||
      !Cn(r, i)
    )
      return !0;
  }
  return !1;
}
function Cn(e, t) {
  let n = wn(e),
    r = wn(t);
  for (;;) {
    let e = n.next(),
      t = r.next();
    if (e.done === !0 || t.done === !0) return e.done === t.done;
    if (e.value[0] !== t.value[0] || e.value[1] !== t.value[1]) return !1;
  }
}
function* wn(e) {
  for (let t of e.hunkContent) {
    if (t.type === `context`) {
      for (let e = 0; e < t.lines; e++) yield [t.deletionLineIndex + e, t.additionLineIndex + e];
      continue;
    }
    let e = Math.max(t.deletions, t.additions);
    for (let n = 0; n < e; n++)
      yield [
        n < t.deletions ? t.deletionLineIndex + n : void 0,
        n < t.additions ? t.additionLineIndex + n : void 0,
      ];
  }
}
function Tn(e) {
  return D(e.additionStart, e.additionCount);
}
function Z(e) {
  return D(e.deletionStart, e.deletionCount);
}
function En(e, t) {
  return t === 0 ? e : e + 1;
}
function Dn(e, t) {
  return t === 0 ? e - 1 : e;
}
function On(e) {
  X(e);
  for (let t = 0; t < e.hunks.length; t++) Zt(e, t);
}
function Q(e) {
  let t = e.lang ?? w(e.name),
    n = e.lang ?? (e.prevName == null ? `text` : w(e.prevName));
  return t === `text` && n === `text`;
}
var kn = -1,
  An = class {
    options;
    annotationSlotName;
    onRenderUpdate;
    workerManager;
    __id = `diff-hunks-renderer:${++kn}`;
    diff;
    expandedHunks = new Map();
    deletionAnnotations = {};
    additionAnnotations = {};
    computedLangs = [`text`];
    renderCache;
    pendingHighlightResult;
    pendingStructuralRows;
    editSessionActive = !1;
    constructor(e = { theme: _ }, t = ge, n, r) {
      ((this.options = e),
        (this.annotationSlotName = t),
        (this.onRenderUpdate = n),
        (this.workerManager = r));
    }
    cleanUp() {
      (this.endEditSession(),
        this.recycle(),
        this.expandedHunks.clear(),
        (this.workerManager = void 0),
        (this.onRenderUpdate = void 0));
    }
    recycle() {
      ((this.diff = void 0),
        this.editSessionActive
          ? (this.renderCache != null && (this.renderCache.renderRange = void 0),
            (this.pendingHighlightResult = void 0),
            (this.pendingStructuralRows = void 0))
          : this.clearRenderCache(),
        (this.additionAnnotations = {}),
        (this.deletionAnnotations = {}),
        this.workerManager?.cleanUpTasks(this));
    }
    beginEditSession(e, t) {
      let { editSessionActive: n } = this;
      ((this.editSessionActive = !0),
        n || (this.pendingHighlightResult = void 0),
        (this.diff = e),
        n && this.renderCache != null && this.renderCache.diff !== e && this.clearRenderCache());
      let { renderCache: r } = this;
      if (!e.isPartial && e.additionLines.length === 0) {
        (Object.assign(e, Ut(e, this.options.parseDiffOptions)),
          this.markEditSessionPass(e),
          this.clearRenderCache());
        return;
      }
      if (r == null || (n && r.diff === e)) return;
      let { options: i } = this.getRenderOptions(e),
        a = r.diff === e,
        o = t != null && I(r.diff, t),
        { result: s } = r;
      !r.highlighted || s == null || !L(r.options, i) || (!a && !o)
        ? this.clearRenderCache()
        : a ||
          (this.renderCache = {
            diff: e,
            options: i,
            highlighted: !0,
            result: { ...s, code: { ...s.code, additionLines: [...s.code.additionLines] } },
            renderRange: r.renderRange,
          });
    }
    endEditSession() {
      ((this.editSessionActive = !1),
        (this.pendingHighlightResult = void 0),
        this.diff ?? this.clearRenderCache());
    }
    editorRenderReady() {
      return (
        this.renderCache?.options.useTokenTransformer === !0 &&
        this.renderCache.highlighted &&
        this.renderCache.result != null
      );
    }
    refreshHighlightedResult() {
      let { diff: e, renderCache: t, workerManager: n } = this;
      return e == null || t == null || !I(t.diff, e) || Q(e) || $(e, this.getTokenizeMaxLength())
        ? Promise.resolve()
        : !this.editSessionActive && n?.isWorkingPool() === !0 && e.cacheKey != null
          ? (n.evictDiffFromCache(e.cacheKey),
            n
              .primeDiffHighlightCache(e)
              .then(() => {
                this.applyRefreshedResult(e, n.getDiffResultCache(e));
              })
              .catch((e) => {
                ct(e) || this.onHighlightError(e);
              }))
          : this.asyncHighlight(e)
              .then((t) => this.applyRefreshedResult(e, t))
              .catch((e) => this.onHighlightError(e));
    }
    applyRefreshedResult(e, t) {
      let { diff: n, renderCache: r } = this;
      if (
        t == null ||
        n == null ||
        r == null ||
        !I(n, e) ||
        !I(r.diff, e) ||
        this.editSessionActive
      )
        return;
      let { options: i } = this.getRenderOptions(n);
      L(i, t.options) &&
        ((this.pendingHighlightResult = {
          diff: n,
          options: t.options,
          highlighted: !0,
          result: t.result,
        }),
        this.onRenderUpdate?.());
    }
    get diffCache() {
      return this.renderCache?.diff ?? this.diff;
    }
    clearRenderCache() {
      ((this.renderCache = void 0),
        (this.pendingHighlightResult = void 0),
        (this.pendingStructuralRows = void 0));
    }
    setOptions(e) {
      this.options = e;
    }
    mergeOptions(e) {
      this.options = { ...this.options, ...e };
    }
    expandHunk(e, t, n = this.getOptionsWithDefaults().expansionLineCount) {
      let r = { ...(this.expandedHunks.get(e) ?? { fromStart: 0, fromEnd: 0 }) };
      ((t === `up` || t === `both`) && (r.fromStart += n),
        (t === `down` || t === `both`) && (r.fromEnd += n),
        this.renderCache?.highlighted !== !0 && this.clearRenderCache(),
        this.expandedHunks.set(e, r));
    }
    getExpandedHunk(e) {
      return this.expandedHunks.get(e) ?? E;
    }
    getExpandedHunksMap() {
      return this.expandedHunks;
    }
    setExpandedHunksMap(e) {
      this.expandedHunks = e;
    }
    setLineAnnotations(e) {
      ((this.additionAnnotations = {}), (this.deletionAnnotations = {}));
      for (let t of e) {
        let e = (() => {
            switch (t.side) {
              case `deletions`:
                return this.deletionAnnotations;
              case `additions`:
                return this.additionAnnotations;
            }
          })(),
          n = e[t.lineNumber] ?? [];
        ((e[t.lineNumber] = n), n.push(t));
      }
    }
    updateRenderCache(e, t, n = !1, r, i) {
      this.pendingStructuralRows = void 0;
      let { renderCache: a } = this;
      if (a == null) return !1;
      let { result: o, diff: s } = a;
      if (o == null) return !1;
      if (s.isPartial) throw Error(`Could not update render cache for partial diff`);
      let c = o.code.additionLines,
        l = (this.pendingStructuralRows = n ? new Map() : void 0),
        u = [],
        d = new Map();
      if (l == null && r != null) {
        let t = s.additionLines.length,
          n = Bn(s.additionLines, i);
        for (let [i, a] of r) {
          if (i < 0 || i > t || (i === t && (a === `` || !n))) continue;
          let r = s.additionLines[i] ?? ``;
          r !== a &&
            ((s.additionLines[i] = a),
            (s.additionCharacterCount += a.length - r.length),
            u.push(i),
            d.set(i, r),
            e.has(i) || (c[i] = Vn(i, k(a))));
        }
      }
      for (let [t, n] of e) {
        let e = c[t]?.properties ?? {},
          i = n.map((e) => e[2]).join(``),
          a = t < s.additionLines.length,
          o = a ? (s.additionLines[t] ?? ``) : ``,
          f = k(o);
        if (l == null && a && r?.has(t) !== !0) {
          let e = He(o, i);
          ((s.additionLines[t] = e),
            (s.additionCharacterCount += e.length - o.length),
            f !== i && (u.push(t), d.set(t, o)));
        }
        let p = {
          type: `element`,
          tagName: `div`,
          properties: {
            "data-line": e[`data-line`] ?? t + 1,
            "data-line-index": e[`data-line-index`] ?? t,
            "data-line-type": e[`data-line-type`] ?? `context`,
          },
          children: n.map(([e, t, n]) =>
            e === 0 && t === ``
              ? n === ``
                ? { type: `element`, tagName: `br`, properties: {}, children: [] }
                : { type: `text`, value: n }
              : {
                  type: `element`,
                  tagName: `span`,
                  properties: { "data-char": e, style: `color:${t};` },
                  children: [{ type: `text`, value: n }],
                },
          ),
        };
        l == null ? (c[t] = p) : l.set(t, p);
      }
      let f = !1;
      if (u.length > 0) {
        if (this.editSessionActive) {
          if (s.additionLines.length <= 1 && s.additionLines.join(``) === ``)
            (this.applyRecomputePreservingSessionType(s, Ut(s, this.options.parseDiffOptions)),
              (f = !0));
          else if (Vt(s, s.additionLines))
            (this.applyRecomputePreservingSessionType(
              s,
              Ht(s, s.additionLines, s.additionCharacterCount, this.options.parseDiffOptions),
            ),
              (f = !0));
          else {
            let e = on(s, u, this.options.parseDiffOptions, d);
            (this.applyExpansionRemap(e), (f = e != null));
          }
        } else Object.assign(s, qt(s, u, this.options.parseDiffOptions));
      }
      return ((o.baseThemeType = t), (a.isDirty = !0), f);
    }
    applyExpansionRemap(e) {
      e != null && (this.expandedHunks = un(this.expandedHunks, e));
    }
    applyDocumentChange(e) {
      let { pendingStructuralRows: t, renderCache: n } = this;
      this.pendingStructuralRows = void 0;
      let r = this.diff ?? n?.diff;
      if (r == null) return;
      let i = n?.result;
      if (r.isPartial) throw Error(`Could not apply document change for partial diff`);
      let { additionLines: a } = r,
        { lines: o, characterCount: s } = Hn(e);
      if (
        ((r.additionLines = o),
        (r.additionCharacterCount = s),
        i != null && (i.code.additionLines = zn(a, r.additionLines, i.code.additionLines, e)),
        r.additionLines.length <= 1 && r.additionLines.join(``) === ``
          ? (this.applyRecomputePreservingSessionType(r, Ut(r, this.options.parseDiffOptions)),
            i != null && (i.code.additionLines[0] = Vn(0, e.getLineText(0))))
          : this.editSessionActive
            ? this.applySessionDocumentChange(r, a)
            : Object.assign(r, Wt(r, this.options.parseDiffOptions)),
        t != null && i != null)
      )
        for (let [e, n] of t) e < i.code.additionLines.length && (i.code.additionLines[e] = n);
      n != null && (n.isDirty = !0);
    }
    applySessionDocumentChange(e, t) {
      let { parseDiffOptions: n } = this.options,
        r = e.additionLines;
      Vt(e, r)
        ? this.applyRecomputePreservingSessionType(e, Ht(e, r, e.additionCharacterCount, n))
        : this.applyExpansionRemap(an(e, n, (e) => t[e]));
    }
    applyRecomputePreservingSessionType(e, t) {
      let n = this.editSessionActive ? e.type : void 0;
      (Object.assign(e, t), n != null && (e.type = n), this.markEditSessionPass(e));
    }
    markEditSessionPass(e) {
      this.editSessionActive && (e.editSessionDirty = !0);
    }
    getUnifiedLineDecoration({ lineType: e }) {
      return { gutterLineType: e, contentProperties: { "data-line-type": e } };
    }
    getSplitLineDecoration({ side: e, type: t }) {
      let n = t === `change` ? (e === `deletions` ? `change-deletion` : `change-addition`) : t;
      return { gutterLineType: n, contentProperties: { "data-line-type": n } };
    }
    createAnnotationElement = (e) => ce(e);
    getOptionsWithDefaults() {
      let {
        diffIndicators: e = `bars`,
        diffStyle: t = `split`,
        disableBackground: n = !1,
        disableFileHeader: r = !1,
        disableLineNumbers: i = !1,
        disableVirtualizationBuffers: a = !1,
        collapsed: o = !1,
        expandUnchanged: s = !1,
        collapsedContextThreshold: c = 1,
        expansionLineCount: l = 100,
        hunkSeparators: u = `line-info`,
        lineDiffType: d = `word-alt`,
        maxLineDiffLength: p = 1e3,
        overflow: m = `scroll`,
        stickyHeader: h = !1,
        theme: g = _,
        headerRenderMode: v = `default`,
        tokenizeMaxLineLength: y = 1e3,
        tokenizeMaxLength: b = f,
        useTokenTransformer: x = !1,
        useCSSClasses: S = !1,
      } = this.options;
      return {
        diffIndicators: e,
        diffStyle: t,
        disableBackground: n,
        disableFileHeader: r,
        disableLineNumbers: i,
        disableVirtualizationBuffers: a,
        collapsed: o,
        expandUnchanged: s,
        collapsedContextThreshold: c,
        expansionLineCount: l,
        hunkSeparators: u,
        lineDiffType: d,
        maxLineDiffLength: p,
        overflow: m,
        stickyHeader: h,
        theme: this.workerManager?.getDiffRenderOptions().theme ?? g,
        headerRenderMode: v,
        tokenizeMaxLineLength: y,
        tokenizeMaxLength: b,
        useTokenTransformer: x,
        useCSSClasses: S,
      };
    }
    initializeHighlighter() {
      return ee(
        he(this.computedLangs, {
          theme: this.getLocalHighlightTheme(),
          preferredHighlighter: Le(this.workerManager, this.options),
        }),
      );
    }
    hydrate(e) {
      if (e == null) return;
      this.diff = e;
      let { options: t } = this.getRenderOptions(e),
        n = $(e, this.getTokenizeMaxLength()),
        r = this.workerManager?.getDiffResultCache(e);
      (r != null && !L(t, r.options) && (r = void 0),
        (this.renderCache ??= {
          diff: e,
          hydrated: !0,
          highlighted: !n && !Q(e),
          options: t,
          result: n ? void 0 : r?.result,
          renderRange: void 0,
        }));
      let i = this.getHighlightWorkerManager(e);
      i == null
        ? (A({ theme: this.getLocalHighlightTheme() }) ??
          ((this.computedLangs = Un(e)),
          this.initializeHighlighter().catch((e) => {
            e instanceof re || this.onHighlightError(e);
          })))
        : this.renderCache.result == null && !n && i.highlightDiffAST(this, this.diff);
    }
    getHighlightWorkerManager(e) {
      let { editSessionActive: t, workerManager: n } = this;
      return !t && n?.isWorkingPool() === !0 && !n.shouldHighlightOnMainThread(e) ? n : void 0;
    }
    cacheHighlightResult(e, t) {
      let { editSessionActive: n, workerManager: r } = this;
      !n && r?.isWorkingPool() === !0 && r.setDiffResultCache(e.cacheKey, t);
    }
    getLocalHighlightTheme() {
      return this.workerManager?.getDiffRenderOptions().theme ?? this.options.theme ?? _;
    }
    getEffectiveCodeOptions() {
      let e =
        this.workerManager?.isWorkingPool() === !0
          ? this.workerManager.getDiffRenderOptions()
          : void 0;
      return {
        theme: this.getLocalHighlightTheme(),
        tokenizeMaxLineLength: e?.tokenizeMaxLineLength ?? this.options.tokenizeMaxLineLength,
      };
    }
    getRenderOptions(e) {
      let t = (() => {
        if (this.workerManager?.isWorkingPool() === !0) {
          let e = this.workerManager.getDiffRenderOptions();
          return this.editSessionActive && e.useTokenTransformer !== !0
            ? { ...e, useTokenTransformer: !0 }
            : e;
        }
        let {
          theme: e,
          tokenizeMaxLineLength: t,
          lineDiffType: n,
          maxLineDiffLength: r,
        } = this.getOptionsWithDefaults();
        return {
          theme: e,
          useTokenTransformer: this.editSessionActive || this.options.useTokenTransformer === !0,
          tokenizeMaxLineLength: t,
          lineDiffType: n,
          maxLineDiffLength: r,
        };
      })();
      this.getOptionsWithDefaults();
      let { renderCache: n } = this;
      return n?.result == null || !I(e, n.diff) || !L(t, n.options)
        ? { options: t, forceHighlight: !0 }
        : { options: t, forceHighlight: !1 };
    }
    getDiffForNextRender(e) {
      let { options: t } = this.getRenderOptions(e);
      if (this.getReadyRenderResult(e, t) != null || this.renderCache == null) return e;
      if (I(this.renderCache.diff, e)) return this.renderCache.diff;
      let n =
        !(e.additionLines.length > 0 || e.deletionLines.length > 0) ||
        Q(e) ||
        $(e, this.getTokenizeMaxLength());
      return this.canRenderDiff(e, t, n) ? e : this.renderCache.diff;
    }
    canRenderDiff(e, t, n) {
      let { renderCache: r } = this;
      return r == null || I(r.diff, e)
        ? !0
        : n
          ? (r.result == null && r.hydrated !== !0) ||
            (this.workerManager?.isWorkingPool() === !0 &&
              !this.workerManager.shouldHighlightOnMainThread(e)) ||
            A({ theme: t.theme }) != null
          : r.result == null && r.hydrated !== !0
            ? !0
            : this.getHighlightWorkerManager(e) == null
              ? A({ theme: t.theme }) != null
              : !r.highlighted;
    }
    renderDiff(e = this.diff, t = h) {
      if (((this.diff = e), e == null)) {
        this.pendingHighlightResult = void 0;
        return;
      }
      let { expandUnchanged: n, collapsedContextThreshold: r } = this.getOptionsWithDefaults(),
        { options: i, forceHighlight: a } = this.getRenderOptions(e),
        o = this.getReadyRenderResult(e, i);
      ((this.pendingHighlightResult = void 0),
        o != null && ((this.renderCache = { ...o, diff: e, renderRange: void 0 }), (a = !1)),
        (this.renderCache ??= {
          diff: e,
          highlighted: !1,
          options: i,
          result: void 0,
          renderRange: void 0,
        }));
      let s = e.additionLines.length > 0 || e.deletionLines.length > 0,
        c = !s || Q(e) || $(e, this.getTokenizeMaxLength()),
        l = this.canRenderDiff(e, i, c),
        u = !I(e, this.renderCache.diff),
        d = !se(this.renderCache.renderRange, t),
        f = this.getHighlightWorkerManager(e);
      if (f != null) {
        let o =
          this.renderCache.result == null && this.renderCache.highlighted && !c && !u && _e(t);
        (l &&
          !o &&
          (c || this.renderCache.result == null || (!this.renderCache.highlighted && (u || d))) &&
          ((this.renderCache.diff = e),
          (this.renderCache.options = i),
          (this.renderCache.highlighted = !1),
          (this.renderCache.result == null || u || d || a) &&
            (this.renderCache.result = f.getPlainDiffAST(
              e,
              t.startingLine,
              t.totalLines,
              _e(t) || n ? !0 : this.expandedHunks,
              r,
            )),
          (this.renderCache.renderRange = t)),
          !c && s && (!this.renderCache.highlighted || a) && f.highlightDiffAST(this, e));
      } else {
        this.computedLangs = Un(e);
        let n = A(),
          r = n != null && T(i.theme, n),
          o = n != null && oe(this.computedLangs, n),
          s = !c && o,
          u = Number.isFinite(t.totalLines);
        if (
          l &&
          n != null &&
          r &&
          (a || c || (!this.renderCache.highlighted && s) || this.renderCache.result == null)
        ) {
          let { result: t, options: r } = this.renderDiffWithHighlighter(e, n, c || !o, u);
          ((this.renderCache = {
            diff: e,
            options: r,
            highlighted: s,
            result: t,
            renderRange: void 0,
          }),
            s && this.cacheHighlightResult(e, { result: t, options: r }));
        }
        (r && (c || o)) ||
          this.asyncHighlight(e, u)
            .then(({ result: t, options: n }) => {
              (c || this.cacheHighlightResult(e, { result: t, options: n }),
                this.applyHighlightResult(e, t, n, !c));
            })
            .catch((e) => {
              e instanceof re || this.onHighlightError(e);
            });
      }
      return this.renderCache.result == null
        ? void 0
        : this.processDiffResult(this.renderCache.diff, t, this.renderCache.result);
    }
    async asyncRender(e, t = h) {
      this.diff = e;
      let { result: n } = await this.asyncHighlight(e, Number.isFinite(t.totalLines));
      return this.processDiffResult(e, t, n);
    }
    createPreElement(e, t, n) {
      let {
        diffIndicators: r,
        disableBackground: i,
        disableLineNumbers: a,
        overflow: o,
      } = this.getOptionsWithDefaults();
      return pe({
        type: `diff`,
        diffIndicators: r,
        disableBackground: i,
        disableLineNumbers: a,
        overflow: o,
        split: e,
        totalLines: t,
        customProperties: n,
      });
    }
    async asyncHighlight(e, t = !1) {
      let n = $(e, this.getTokenizeMaxLength());
      this.computedLangs = n ? [`text`] : Un(e);
      let r = A(),
        i = r != null && T(this.getLocalHighlightTheme(), r),
        a = n || (r != null && oe(this.computedLangs, r));
      return (
        (r != null && i && a) || (r = await this.initializeHighlighter()),
        this.renderDiffWithHighlighter(e, r, n, t)
      );
    }
    renderDiffWithHighlighter(e, t, n = !1, r = !1) {
      let { options: i } = this.getRenderOptions(e),
        { collapsedContextThreshold: a } = this.getOptionsWithDefaults(),
        o = Pt(e, t, i, {
          forcePlainText: n,
          lazyLineAST: r,
          expandedHunks: n ? !0 : void 0,
          collapsedContextThreshold: a,
        });
      if (
        this.editSessionActive &&
        e.additionLines.length === 1 &&
        e.additionLines[0] === `` &&
        o.code.additionLines[0] == null
      ) {
        let t;
        if (
          (K({
            diff: e,
            diffStyle: `both`,
            expandedHunks: n ? !0 : void 0,
            collapsedContextThreshold: a,
            callback: ({ additionLine: e }) => {
              if (e?.lineIndex === 0) return ((t = e), !0);
            },
          }),
          t == null)
        )
          throw Error(`DiffHunksRenderer: missing empty addition line`);
        o.code.additionLines[0] = Vn(0, ``, t.unifiedLineIndex, t.splitLineIndex);
      }
      return { result: o, options: i };
    }
    onHighlightSuccess(e, t, n, r = !0) {
      this.editSessionActive || this.applyHighlightResult(e, t, n, r);
    }
    applyHighlightResult(e, t, n, r = !0) {
      let { diff: i, renderCache: a } = this;
      i != null &&
        a != null &&
        I(i, e) &&
        L(n, this.getRenderOptions(i).options) &&
        ((a.result != null && a.highlighted && L(a.options, n) && I(a.diff, i)) ||
          ((this.pendingHighlightResult = { diff: i, options: n, highlighted: r, result: t }),
          this.onRenderUpdate?.()));
    }
    getMatchingWorkerResultCache(e, t) {
      if (this.editSessionActive) return;
      let n = this.workerManager?.getDiffResultCache(e);
      if (n != null && L(t, n.options)) return n;
    }
    getReadyRenderResult(e, t) {
      let { pendingHighlightResult: n } = this;
      if (n != null && I(n.diff, e) && L(n.options, t)) return n;
      let r = this.getMatchingWorkerResultCache(e, t);
      if (!(r == null || this.hasHighlightedRenderCache(e, t)))
        return { diff: e, highlighted: !0, ...r };
    }
    hasHighlightedRenderCache(e, t) {
      let { renderCache: n } = this;
      return n?.result != null && n.highlighted && I(e, n.diff) && L(t, n.options);
    }
    onHighlightError(e) {
      console.error(e);
    }
    getTokenizeMaxLength() {
      return this.options.tokenizeMaxLength ?? 1e5;
    }
    processDiffResult(e, n, { code: r, themeStyles: i, baseThemeType: a }) {
      let {
          diffStyle: s,
          disableFileHeader: l,
          expandUnchanged: u,
          expansionLineCount: d,
          collapsedContextThreshold: f,
          hunkSeparators: p,
        } = this.getOptionsWithDefaults(),
        m = this.renderCache?.isDirty ?? !1,
        h = s === `unified`,
        g = Wn(e, this.options.loadDiffFiles != null),
        _ = !e.isPartial || g,
        v = [],
        y = [],
        b = [],
        x = [],
        { additionLines: S, deletionLines: C } = r,
        w = {
          rowCount: 0,
          hunkSeparators: p,
          additionsContentAST: v,
          deletionsContentAST: y,
          unifiedContentAST: b,
          unifiedGutterAST: c(),
          deletionsGutterAST: c(),
          additionsGutterAST: c(),
          expansionLineCount: d,
          hunkData: x,
          incrementRowCount(e = 1) {
            w.rowCount += e;
          },
          pushToGutter(e, t) {
            switch (e) {
              case `unified`:
                w.unifiedGutterAST.children.push(t);
                break;
              case `deletions`:
                w.deletionsGutterAST.children.push(t);
                break;
              case `additions`:
                w.additionsGutterAST.children.push(t);
            }
          },
        },
        T = yt({ fileDiff: e, errorPrefix: `DiffHunksRenderer.processDiffResult` }),
        E = {
          size: 0,
          side: void 0,
          increment() {
            this.size += 1;
          },
          flush() {
            s !== `unified` &&
              (this.size <= 0 || this.side == null
                ? ((this.side = void 0), (this.size = 0))
                : (this.side === `additions`
                    ? (w.pushToGutter(`additions`, t(void 0, `buffer`, this.size)),
                      v?.push(R(this.size)))
                    : (w.pushToGutter(`deletions`, t(void 0, `buffer`, this.size)),
                      y?.push(R(this.size))),
                  (this.size = 0),
                  (this.side = void 0)));
          },
        },
        D = (e, t, n, r, i) => {
          w.pushToGutter(e, o(t, n, r, i));
        };
      function ee(e) {
        (E.flush(),
          s === `unified` ? In(`unified`, e, w) : (In(`deletions`, e, w), In(`additions`, e, w)));
      }
      (this.pushFileLevelAnnotations(e, s, n, w),
        K({
          diff: e,
          diffStyle: s,
          startingLine: n.startingLine,
          totalLines: n.totalLines,
          expandedHunks: u ? !0 : this.expandedHunks,
          collapsedContextThreshold: f,
          callback: ({
            hunkIndex: n,
            hunk: r,
            collapsedBefore: i,
            collapsedAfter: a,
            additionLine: o,
            deletionLine: c,
            type: l,
          }) => {
            let u = c == null ? o.splitLineIndex : c.splitLineIndex,
              d = o == null ? c.unifiedLineIndex : o.unifiedLineIndex;
            (s === `split` && l !== `change` && E.flush(),
              i > 0 &&
                ee({
                  hunkIndex: n,
                  collapsedLines: i,
                  rangeSize: Math.max(r?.collapsedBefore ?? 0, 0),
                  hunkSpecs: r?.hunkSpecs,
                  isFirstHunk: n === 0,
                  isLastHunk: !1,
                  isExpandable: _,
                }));
            let f = s === `unified` ? d : u,
              v = {
                type: l,
                hunkIndex: n,
                lineIndex: f,
                unifiedLineIndex: d,
                splitLineIndex: u,
                deletionLine: c,
                additionLine: o,
              };
            if (s === `unified`) {
              let t = this.getUnifiedInjectedRowsForLine?.(v);
              t?.before != null && Nn(t.before, w);
              let r = c == null ? void 0 : C[c.lineIndex],
                i = o == null ? void 0 : S[o.lineIndex];
              if (r == null && i == null) {
                let t = `DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong`;
                throw (console.error(t, { file: e.name }), Error(t));
              }
              let a = l === `change` ? (o == null ? `change-deletion` : `change-addition`) : l,
                s = this.getUnifiedLineDecoration({
                  type: l,
                  lineType: a,
                  additionLineIndex: o?.lineIndex,
                  deletionLineIndex: c?.lineIndex,
                });
              (D(
                `unified`,
                s.gutterLineType,
                o == null ? c.lineNumber : o.lineNumber,
                `${d},${u}`,
                s.gutterProperties,
              ),
                i == null
                  ? r != null &&
                    (r = Ln(
                      r,
                      s.contentProperties,
                      m && c != null
                        ? { "data-line": c.lineNumber, "data-line-index": `${d},${u}` }
                        : void 0,
                    ))
                  : (i = Ln(
                      i,
                      s.contentProperties,
                      m && o != null
                        ? { "data-line": o.lineNumber, "data-line-index": `${d},${u}` }
                        : void 0,
                    )),
                Fn({
                  diffStyle: `unified`,
                  type: l,
                  deletionLine: r,
                  additionLine: i,
                  unifiedSpan: this.getAnnotations(`unified`, c?.lineNumber, o?.lineNumber, n, f),
                  createAnnotationElement: (e) => this.createAnnotationElement(e),
                  context: w,
                }),
                t?.after != null && Nn(t.after, w));
            } else {
              let t = this.getSplitInjectedRowsForLine?.(v);
              t?.before != null && Pn(t.before, w, E);
              let r = c == null ? void 0 : C[c.lineIndex],
                i = o == null ? void 0 : S[o.lineIndex],
                a = this.getSplitLineDecoration({
                  side: `deletions`,
                  type: l,
                  lineIndex: c?.lineIndex,
                }),
                s = this.getSplitLineDecoration({
                  side: `additions`,
                  type: l,
                  lineIndex: o?.lineIndex,
                });
              if (r == null && i == null) {
                let t = `DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong`;
                throw (console.error(t, { file: e.name }), Error(t));
              }
              let d = (() => {
                if (l === `change`) {
                  if (i == null) return `additions`;
                  if (r == null) return `deletions`;
                }
              })();
              d == null
                ? l === `change` && E.flush()
                : (E.side != null && E.side !== d && E.flush(), (E.side = d), E.increment());
              let p = this.getAnnotations(`split`, c?.lineNumber, o?.lineNumber, n, f);
              if ((p != null && E.size > 0 && E.flush(), c != null)) {
                let e = Ln(
                  r,
                  a.contentProperties,
                  m
                    ? { "data-line": c.lineNumber, "data-line-index": `${c.unifiedLineIndex},${u}` }
                    : void 0,
                );
                (D(
                  `deletions`,
                  a.gutterLineType,
                  c.lineNumber,
                  `${c.unifiedLineIndex},${u}`,
                  a.gutterProperties,
                ),
                  e != null && (r = e));
              }
              if (o != null) {
                let e = Ln(
                  i,
                  s.contentProperties,
                  m
                    ? { "data-line": o.lineNumber, "data-line-index": `${o.unifiedLineIndex},${u}` }
                    : void 0,
                );
                (D(
                  `additions`,
                  s.gutterLineType,
                  o.lineNumber,
                  `${o.unifiedLineIndex},${u}`,
                  s.gutterProperties,
                ),
                  e != null && (i = e));
              }
              (Fn({
                diffStyle: `split`,
                type: l,
                additionLine: i,
                deletionLine: r,
                ...p,
                createAnnotationElement: (e) => this.createAnnotationElement(e),
                context: w,
              }),
                t?.after != null && Pn(t.after, w, E));
            }
            let y = s === `split` && r != null && u === r.splitLineStart + r.splitLineCount - 1,
              b =
                n === e.hunks.length - 1 &&
                r != null &&
                (s === `split`
                  ? u === r.splitLineStart + r.splitLineCount - 1
                  : d === r.unifiedLineStart + r.unifiedLineCount - 1),
              x = y ? r.noEOFCRDeletions : !1,
              O = y ? r.noEOFCRAdditions : !1,
              k = (c?.noEOFCR ?? !1) || x,
              A = (o?.noEOFCR ?? !1) || O;
            if (A || k) {
              if ((s === `split` && E.flush(), k)) {
                let e = l === `context` || l === `context-expanded` ? l : `change-deletion`;
                s === `unified`
                  ? (w.unifiedContentAST.push(z(e)), w.pushToGutter(`unified`, t(e, `metadata`, 1)))
                  : (w.deletionsContentAST.push(z(e)),
                    w.pushToGutter(`deletions`, t(e, `metadata`, 1)),
                    A ||
                      (w.pushToGutter(`additions`, t(void 0, `buffer`, 1)),
                      w.additionsContentAST.push(R(1))));
              }
              if (A && !(h && k && l !== `change`)) {
                let e = l === `context` || l === `context-expanded` ? l : `change-addition`;
                s === `unified`
                  ? (w.unifiedContentAST.push(z(e)), w.pushToGutter(`unified`, t(e, `metadata`, 1)))
                  : (w.additionsContentAST.push(z(e)),
                    w.pushToGutter(`additions`, t(e, `metadata`, 1)),
                    k ||
                      (w.pushToGutter(`deletions`, t(void 0, `buffer`, 1)),
                      w.deletionsContentAST.push(R(1))));
              }
              w.incrementRowCount(1);
            }
            (p !== `simple` &&
              p !== `metadata` &&
              (a > 0 || (b && g)) &&
              ee({
                hunkIndex: l === `context-expanded` ? n : n + 1,
                collapsedLines: b && g ? `unknown` : a,
                rangeSize: T,
                hunkSpecs: void 0,
                isFirstHunk: !1,
                isLastHunk: !0,
                isExpandable: _,
              }),
              w.incrementRowCount(1));
          },
        }),
        s === `split` && E.flush());
      let O = Math.max(_t(e.hunks), e.additionLines.length ?? 0, e.deletionLines.length ?? 0),
        k = n.bufferBefore > 0 || n.bufferAfter > 0,
        A = !h && e.type !== `deleted`,
        te = !h && e.type !== `new`,
        j = w.rowCount > 0 || k;
      ((v = A && j ? v : void 0), (y = te && j ? y : void 0), (b = h && j ? b : void 0));
      let ne = this.createPreElement(y != null && v != null, O);
      return {
        fileDiff: e,
        unifiedGutterAST: h && j ? w.unifiedGutterAST.children : void 0,
        unifiedContentAST: b,
        deletionsGutterAST: te && j ? w.deletionsGutterAST.children : void 0,
        deletionsContentAST: y,
        additionsGutterAST: A && j ? w.additionsGutterAST.children : void 0,
        additionsContentAST: v,
        hunkData: x,
        preNode: ne,
        themeStyles: i,
        baseThemeType: a,
        headerElement: l ? void 0 : this.renderHeader(e),
        totalLines: O,
        rowCount: w.rowCount,
        bufferBefore: n.bufferBefore,
        bufferAfter: n.bufferAfter,
        css: ``,
      };
    }
    renderCodeAST(e, t) {
      let n =
          e === `unified`
            ? t.unifiedGutterAST
            : e === `deletions`
              ? t.deletionsGutterAST
              : t.additionsGutterAST,
        r =
          e === `unified`
            ? t.unifiedContentAST
            : e === `deletions`
              ? t.deletionsContentAST
              : t.additionsContentAST;
      if (n == null || r == null) return;
      let i = c(n);
      return ((i.properties.style = `grid-row: span ${t.rowCount}`), [i, Ue(r, t.rowCount)]);
    }
    renderFullAST(e, t = []) {
      let r = this.getOptionsWithDefaults().hunkSeparators === `line-info`,
        i = this.renderCodeAST(`unified`, e);
      if (i != null)
        return (
          t.push(
            n({
              tagName: `code`,
              children: i,
              properties: {
                "data-code": ``,
                "data-container-size": r ? `` : void 0,
                "data-unified": ``,
              },
            }),
          ),
          { ...e.preNode, children: t }
        );
      let a = this.renderCodeAST(`deletions`, e);
      a != null &&
        t.push(
          n({
            tagName: `code`,
            children: a,
            properties: {
              "data-code": ``,
              "data-container-size": r ? `` : void 0,
              "data-deletions": ``,
            },
          }),
        );
      let o = this.renderCodeAST(`additions`, e);
      return (
        o != null &&
          t.push(
            n({
              tagName: `code`,
              children: o,
              properties: {
                "data-code": ``,
                "data-container-size": r ? `` : void 0,
                "data-additions": ``,
              },
            }),
          ),
        { ...e.preNode, children: t }
      );
    }
    renderFullHTML(e, t = []) {
      return r(this.renderFullAST(e, t));
    }
    renderPartialHTML(e, t) {
      return r(
        t == null
          ? e
          : n({
              tagName: `code`,
              children: e,
              properties: {
                "data-code": ``,
                "data-container-size":
                  this.getOptionsWithDefaults().hunkSeparators === `line-info` ? `` : void 0,
                [`data-${t}`]: ``,
              },
            }),
      );
    }
    pushFileLevelAnnotations(e, t, n, r) {
      if (!Ve(n)) return;
      let i = e.type === `new` ? [] : this.getAnnotationNames(Be(this.deletionAnnotations)),
        a = e.type === `deleted` ? [] : this.getAnnotationNames(Be(this.additionAnnotations));
      if (i.length === 0 && a.length === 0) return;
      let { createAnnotationElement: o } = this;
      Fn(
        t === `unified`
          ? {
              diffStyle: t,
              type: `context`,
              unifiedSpan: {
                type: `annotation`,
                hunkIndex: -1,
                lineIndex: -1,
                annotations: i.concat(a),
              },
              createAnnotationElement: o,
              context: r,
            }
          : {
              diffStyle: t,
              type: `context`,
              deletionSpan: { type: `annotation`, hunkIndex: -1, lineIndex: -1, annotations: i },
              additionSpan: { type: `annotation`, hunkIndex: -1, lineIndex: -1, annotations: a },
              createAnnotationElement: o,
              context: r,
            },
      );
    }
    getAnnotations(e, t, n, r, i) {
      let a = { type: `annotation`, hunkIndex: r, lineIndex: i, annotations: [] };
      if (t != null)
        for (let e of this.deletionAnnotations[t] ?? [])
          a.annotations.push(this.annotationSlotName(e));
      let o = { type: `annotation`, hunkIndex: r, lineIndex: i, annotations: [] };
      if (n != null)
        for (let t of this.additionAnnotations[n] ?? [])
          (e === `unified` ? a : o).annotations.push(this.annotationSlotName(t));
      if (e === `unified`) return a.annotations.length > 0 ? a : void 0;
      if (o.annotations.length !== 0 || a.annotations.length !== 0)
        return { deletionSpan: a, additionSpan: o };
    }
    getAnnotationNames(e) {
      return e?.map((e) => this.annotationSlotName(e)) ?? [];
    }
    renderHeader(e) {
      let { headerRenderMode: t, stickyHeader: n } = this.getOptionsWithDefaults();
      return ue({ fileOrDiff: e, mode: t, stickyHeader: n });
    }
  },
  jn = new Intl.PluralRules(`en-US`);
function Mn(e) {
  return `${e} unmodified line${jn.select(e) === `one` ? `` : `s`}`;
}
function Nn(e, t) {
  for (let n of e)
    (t.unifiedContentAST.push(n.content),
      t.pushToGutter(`unified`, n.gutter),
      t.incrementRowCount(1));
}
function Pn(e, t, n) {
  for (let { deletion: r, addition: i } of e) {
    if (r == null && i == null) continue;
    let e = r != null && i != null ? void 0 : r == null ? `deletions` : `additions`;
    ((e == null || n.side !== e) && n.flush(),
      r != null && (t.deletionsContentAST.push(r.content), t.pushToGutter(`deletions`, r.gutter)),
      i != null && (t.additionsContentAST.push(i.content), t.pushToGutter(`additions`, i.gutter)),
      e != null && ((n.side = e), n.increment()),
      t.incrementRowCount(1));
  }
}
function Fn({
  diffStyle: e,
  type: n,
  deletionLine: r,
  additionLine: i,
  unifiedSpan: a,
  deletionSpan: o,
  additionSpan: s,
  createAnnotationElement: c,
  context: l,
}) {
  let u = !1;
  if (e === `unified`) {
    if (
      (i == null ? r != null && l.unifiedContentAST.push(r) : l.unifiedContentAST.push(i),
      a != null)
    ) {
      let e = n === `change` ? (r == null ? `change-addition` : `change-deletion`) : n;
      (l.unifiedContentAST.push(c(a)), l.pushToGutter(`unified`, t(e, `annotation`, 1)), (u = !0));
    }
  } else if (e === `split`) {
    if (
      (r != null && l.deletionsContentAST.push(r),
      i != null && l.additionsContentAST.push(i),
      o != null)
    ) {
      let e = n === `change` ? (r == null ? `context` : `change-deletion`) : n;
      (l.deletionsContentAST.push(c(o)),
        l.pushToGutter(`deletions`, t(e, `annotation`, 1)),
        (u = !0));
    }
    if (s != null) {
      let e = n === `change` ? (i == null ? `context` : `change-addition`) : n;
      (l.additionsContentAST.push(c(s)),
        l.pushToGutter(`additions`, t(e, `annotation`, 1)),
        (u = !0));
    }
  }
  u && l.incrementRowCount(1);
}
function In(
  e,
  {
    hunkIndex: t,
    collapsedLines: n,
    rangeSize: r,
    hunkSpecs: i,
    isFirstHunk: a,
    isLastHunk: o,
    isExpandable: s,
  },
  c,
) {
  if (typeof n == `number` && n <= 0) return;
  let l =
    e === `unified`
      ? c.unifiedContentAST
      : e === `deletions`
        ? c.deletionsContentAST
        : c.additionsContentAST;
  if (c.hunkSeparators === `metadata`) {
    i != null &&
      (c.pushToGutter(e, B({ type: `metadata`, content: i, isFirstHunk: a, isLastHunk: o })),
      l.push(B({ type: `metadata`, content: i, isFirstHunk: a, isLastHunk: o })),
      e !== `additions` && c.incrementRowCount(1));
    return;
  }
  if (c.hunkSeparators === `simple`) {
    t > 0 &&
      (c.pushToGutter(e, B({ type: `simple`, isFirstHunk: a, isLastHunk: !1 })),
      l.push(B({ type: `simple`, isFirstHunk: a, isLastHunk: !1 })),
      e !== `additions` && c.incrementRowCount(1));
    return;
  }
  let u = gt(e, t),
    d = r > c.expansionLineCount,
    f = s ? t : void 0,
    p = typeof n == `number` ? Mn(n) : `More unchanged context may be available`;
  (c.pushToGutter(
    e,
    B({
      type: c.hunkSeparators,
      content: p,
      expandIndex: f,
      chunked: d,
      slotName: u,
      isFirstHunk: a,
      isLastHunk: o,
    }),
  ),
    l.push(
      B({
        type: c.hunkSeparators,
        content: p,
        expandIndex: f,
        chunked: d,
        slotName: u,
        isFirstHunk: a,
        isLastHunk: o,
      }),
    ),
    e !== `additions` && c.incrementRowCount(1),
    c.hunkData.push({
      slotName: u,
      hunkIndex: t,
      lines: typeof n == `number` ? n : 0,
      lineCountKnown: typeof n == `number`,
      type: e,
      expandable: s ? { up: !a, down: !o, chunked: d } : void 0,
    }));
}
function Ln(e, t, n) {
  return e == null || e.type !== `element` || (t == null && n == null)
    ? e
    : { ...e, properties: { ...e.properties, ...t, ...n } };
}
function Rn(e) {
  return e.length > 0 && e[e.length - 1] === `` ? e.length - 1 : e.length;
}
function zn(e, t, n, r) {
  let i = Rn(e),
    a = Rn(t),
    o = Math.min(i, a),
    s = 0;
  for (; s < o && e[s] === t[s];) s++;
  let c = 0;
  for (; c < o - s && e[i - 1 - c] === t[a - 1 - c];) c++;
  let l = Array(t.length);
  for (let e = 0; e < s; e++) l[e] = n[e];
  for (let e = 0; e < c; e++) l[a - 1 - e] = n[i - 1 - e];
  i < e.length && a < t.length && (l[t.length - 1] = n[e.length - 1]);
  for (let e = s; e < t.length; e++) l[e] ??= Vn(e, r.getLineText(e));
  return l;
}
function Bn(e, t) {
  return (
    t === e.length + 1 &&
    e.at(-1)?.endsWith(`
`) === !0
  );
}
function Vn(e, t, n = e, r = e) {
  return {
    type: `element`,
    tagName: `div`,
    properties: { "data-line": e + 1, "data-line-index": `${n},${r}`, "data-line-type": `context` },
    children: [
      {
        type: `element`,
        tagName: `span`,
        properties: { "data-char": 0 },
        children: [{ type: `text`, value: t }],
      },
    ],
  };
}
function Hn(e) {
  let t = [],
    n = 0;
  for (let r = 0; r < e.lineCount; r++) {
    let i = e.getLineText(r, !0);
    (t.push(i), (n += i.length));
  }
  return { lines: t, characterCount: n };
}
function Un(e) {
  if (e.lang != null) return [e.lang];
  let t = w(e.prevName ?? e.name),
    n = w(e.name);
  return t === n ? [n] : [t, n];
}
function $(e, t) {
  return Math.max(e.additionLines.length, e.deletionLines.length) > t;
}
function Wn(e, t) {
  return e.isPartial && t && (e.type === `change` || e.type === `rename-changed`);
}
function Gn({ oldFile: e, newFile: t }, n) {
  if (e !== void 0 || t !== void 0) {
    if (e === void 0 || t === void 0)
      throw Error(`${n}: Pass null for an intentionally missing oldFile or newFile side`);
    if (e === null) {
      if (t === null) throw Error(`${n}: You must pass oldFile, newFile, or both`);
      return { oldFile: e, newFile: t };
    }
    return { oldFile: e, newFile: t };
  }
}
export {
  Te as $,
  Xe as A,
  ze as B,
  rt as C,
  ot as D,
  ct as E,
  We as F,
  Se as G,
  Le as H,
  Ue as I,
  Ee as J,
  xe as K,
  He as L,
  Ze as M,
  Ke as N,
  tt as O,
  Ge as P,
  N as Q,
  Re as R,
  pt as S,
  it as T,
  Ie as U,
  Ve as V,
  Ne as W,
  Ce as X,
  we as Y,
  De as Z,
  L as _,
  pn as a,
  ce as at,
  dt as b,
  Pt as c,
  ae as ct,
  U as d,
  _e as et,
  Et as f,
  bt as g,
  Dt as h,
  dn as i,
  ue as it,
  Qe as j,
  $e as k,
  K as l,
  G as m,
  An as n,
  he as nt,
  fn as o,
  se as ot,
  xt as p,
  Oe as q,
  Q as r,
  pe as rt,
  X as s,
  oe as st,
  Gn as t,
  ge as tt,
  W as u,
  I as v,
  nt as w,
  ut as x,
  lt as y,
  Be as z,
};
//# sourceMappingURL=getDiffFileInput-DNKgimbU.js.map
