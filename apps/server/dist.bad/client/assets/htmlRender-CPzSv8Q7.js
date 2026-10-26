import { Ep as e } from "./utils-CPoejuy5.js";
import "./themePalette-CDKZ8Aa5.js";
var t = `html_render`,
  n = 2e3,
  r = 2e4,
  i = 24;
function a(e) {
  if (!Array.isArray(e) || e.length === 0 || e.length > i) return;
  let t = e.flatMap((e) =>
    Array.isArray(e) &&
    e.length === 2 &&
    Number.isInteger(e[0]) &&
    e[0] >= 1 &&
    e[0] <= 1e4 &&
    typeof e[1] == `number` &&
    Number.isFinite(e[1])
      ? [[e[0], d(e[1])]]
      : [],
  );
  return t.length === e.length ? [...t].sort((e, t) => e[0] - t[0]) : void 0;
}
function o(e) {
  if (typeof e != `object` || !e) return;
  let { attachmentId: t, title: n, height: r, heights: i } = e;
  if (
    typeof t != `string` ||
    t.length === 0 ||
    t.length > 256 ||
    typeof n != `string` ||
    typeof r != `number` ||
    !Number.isFinite(r)
  )
    return;
  let o = a(i);
  return {
    attachmentId: t,
    title: n.trim().slice(0, 200) || `HTML`,
    height: d(r),
    ...(o === void 0 ? {} : { heights: o }),
  };
}
function s(e, t) {
  return (
    e.attachmentId === t.attachmentId &&
    e.title === t.title &&
    e.height === t.height &&
    (e.heights ?? []).length === (t.heights ?? []).length &&
    (e.heights ?? []).every(([e, n], r) => t.heights?.[r]?.[0] === e && t.heights[r][1] === n)
  );
}
function c(e, t) {
  let n = e.findIndex(([e]) => e >= t),
    r = n === -1 ? e.length - 1 : n,
    i = e[r][0] === t ? r : Math.max(0, r - 1);
  return Math.max(e[i][1], e[r][1]);
}
function l(e, t, i) {
  if (i !== void 0) return Math.min(r, Math.max(80, Math.ceil(i)));
  let a = e.heights;
  if (a === void 0 || a.length === 0) return d(e.height);
  let o = c(a, 728) > e.height ? e.height : n;
  return d(Math.min(o, c(a, t)));
}
function u(e) {
  return `${
    e
      .replace(/[\\/:*?"<>|\p{Cc}]+/gu, ` `)
      .replace(/\s+/g, ` `)
      .trim()
      .slice(0, 120)
      .trim() || `Page`
  }.html`;
}
function d(e) {
  return Math.min(n, Math.max(80, Math.round(e)));
}
var f = {
    sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`,
    mono: `"SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace`,
  },
  p = {
    light: {
      success: `#10b981`,
      successForeground: `#047857`,
      info: `#3b82f6`,
      infoForeground: `#1d4ed8`,
      chart: [`#0d9488`, `#d97706`, `#9333ea`, `#e11d48`, `#65a30d`],
    },
    dark: {
      success: `#10b981`,
      successForeground: `#34d399`,
      info: `#3b82f6`,
      infoForeground: `#60a5fa`,
      chart: [`#2dd4bf`, `#fbbf24`, `#c084fc`, `#fb7185`, `#a3e635`],
    },
  };
function m(e, t, n = f) {
  let r = p[t];
  return {
    appearance: t,
    variables: {
      "--background": e.canvas,
      "--foreground": e.text,
      "--muted": e.muted,
      "--muted-foreground": e.mutedForeground,
      "--card": e.surface,
      "--card-foreground": e.text,
      "--popover": e.surfaceOverlay,
      "--popover-foreground": e.text,
      "--secondary": e.secondary,
      "--secondary-foreground": e.secondaryForeground,
      "--border": e.border,
      "--input": e.input,
      "--ring": e.focus,
      "--primary": e.messageAction,
      "--primary-foreground": e.messageActionForeground,
      "--accent": e.accent,
      "--accent-foreground": e.accentForeground,
      "--accent-surface": e.accentSurface,
      "--accent-surface-foreground": e.accentSurfaceForeground,
      "--destructive": e.error,
      "--destructive-foreground": e.errorForeground,
      "--destructive-surface": e.errorSurface,
      "--warning": e.warning,
      "--warning-foreground": e.warningForeground,
      "--warning-surface": e.warningSurface,
      "--success": r.success,
      "--success-foreground": r.successForeground,
      "--info": r.info,
      "--info-foreground": r.infoForeground,
      "--code-background": e.codeBackground,
      "--code-foreground": e.codeForeground,
      "--chart-1": e.accent,
      ...Object.fromEntries(r.chart.map((e, t) => [`--chart-${t + 2}`, e])),
      "--radius": `0.625rem`,
      "--font-sans": n.sans,
      "--font-mono": n.mono,
    },
  };
}
var h = `ui/notifications/host-context-changed`,
  g = `ui/open-link`,
  _ = `ui/notifications/size-changed`,
  v = `t3/notifications/shortcuts`,
  y = `t3/notifications/keydown`,
  b = `t3/notifications/open-image`;
function x(e) {
  if (typeof e != `object` || !e) return;
  let { jsonrpc: t, method: n, params: r } = e;
  if (t !== `2.0` || n !== _) return;
  let i = typeof r == `object` && r ? r.height : void 0;
  return typeof i == `number` && Number.isFinite(i) && i > 0 ? i : void 0;
}
function S(e) {
  if (typeof e != `object` || !e) return;
  let { jsonrpc: t, id: n, method: r, params: i } = e;
  if (
    t !== `2.0` ||
    r !== g ||
    (typeof n != `string` && typeof n != `number`) ||
    typeof i != `object` ||
    !i
  )
    return;
  let { url: a, metaKey: o, ctrlKey: s } = i;
  return typeof a == `string` && /^https?:\/\//i.test(a)
    ? { id: n, url: a, metaKey: o === !0, ctrlKey: s === !0 }
    : void 0;
}
function C(e) {
  if (typeof e != `object` || !e) return;
  let { jsonrpc: t, method: n, params: r } = e;
  if (t !== `2.0` || n !== b || typeof r != `object` || !r) return;
  let { src: i, name: a } = r;
  if (typeof i == `string` && /^(?:https?:\/\/|data:image\/)/i.test(i))
    return { src: i, name: (typeof a == `string` ? a.trim().slice(0, 200) : ``) || `Image` };
}
function w(e) {
  if (typeof e != `object` || !e) return;
  let { jsonrpc: t, method: n, params: r } = e;
  if (t !== `2.0` || n !== y || typeof r != `object` || !r) return;
  let { key: i, code: a, metaKey: o, ctrlKey: s, shiftKey: c, altKey: l, repeat: u } = r;
  if (typeof i == `string` && typeof a == `string`)
    return {
      key: i,
      code: a,
      metaKey: o === !0,
      ctrlKey: s === !0,
      shiftKey: c === !0,
      altKey: l === !0,
      repeat: u === !0,
    };
}
function T(e, t) {
  return { jsonrpc: `2.0`, method: v, params: { shortcuts: e, blocked: t } };
}
function E(e) {
  return { jsonrpc: `2.0`, id: e, result: {} };
}
var D = `t3-theme`;
function O(e) {
  return `#${D}=${encodeURIComponent(JSON.stringify(e))}`;
}
function k(e) {
  return {
    jsonrpc: `2.0`,
    method: h,
    params: { theme: e.appearance, styles: { variables: e.variables } },
  };
}
`${JSON.stringify(`html{background:var(--background);color:var(--foreground);font-family:var(--font-sans);font-size:14px;line-height:1.5;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;scrollbar-width:none}html::-webkit-scrollbar{display:none}body{margin:0}code,kbd,pre,samp{font-family:var(--font-mono)}:where(:focus-visible){outline:2px solid var(--ring)}:focus-visible{outline-width:2px!important;outline-offset:-2px!important}:where(img:not(a[href] img,button img)){cursor:zoom-in}`)}${D}${JSON.stringify(h)}${JSON.stringify(g)}${JSON.stringify(_)}${JSON.stringify(b)}${JSON.stringify(e)}${JSON.stringify(v)}${JSON.stringify(y)}`;
export {
  s as a,
  m as c,
  x as d,
  C as f,
  o as h,
  l as i,
  O as l,
  S as m,
  t as n,
  E as o,
  w as p,
  u as r,
  T as s,
  f as t,
  k as u,
};
//# sourceMappingURL=htmlRender-CPzSv8Q7.js.map
