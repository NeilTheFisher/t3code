import {
  Ah as e,
  Ap as t,
  Fp as n,
  Mp as r,
  Nh as i,
  Op as a,
  Yn as o,
  ab as s,
  jh as c,
  kp as l,
} from "./utils-CPoejuy5.js";
var u = s(c);
function d(e, t) {
  return {
    id: e,
    name: t.name,
    command: t.command,
    icon: t.icon,
    runOnWorktreeCreate: t.runOnWorktreeCreate,
    ...(t.runOnWorktreeCreate && t.waitForSetup ? { async: !1 } : {}),
    ...(t.runOnSettle ? { runOnSettle: !0 } : {}),
    ...(t.previewUrl === null
      ? {}
      : { previewUrl: t.previewUrl, autoOpenPreview: t.autoOpenPreview }),
  };
}
function f(e, t) {
  let n = t.runOnWorktreeCreate && e.runOnWorktreeCreate,
    r = t.runOnSettle && e.runOnSettle === !0;
  return !n && !r
    ? e
    : { ...e, ...(n ? { runOnWorktreeCreate: !1 } : {}), ...(r ? { runOnSettle: !1 } : {}) };
}
function p(e) {
  let t = e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
  return t.length === 0
    ? `script`
    : t.length <= 24
      ? t
      : t.slice(0, 24).replace(/-+$/g, ``) || `script`;
}
function m(e) {
  let t = `script.${e}.run`;
  return u(t) ? t : null;
}
function h(e) {
  let t = e.trim();
  if (!u(t)) return null;
  let [n, , r] = c.parts;
  return t.slice(n.literal.length, -r.literal.length);
}
function g(e, t) {
  let n = new Set(Array.from(t)),
    r = p(e);
  if (!n.has(r)) return r;
  let i = 2;
  for (; i < 1e4;) {
    let e = `${r}-${i}`,
      t = e.length <= 24 ? e : `${r.slice(0, Math.max(1, 24 - String(i).length - 1))}-${i}`;
    if (!n.has(t)) return t;
    i += 1;
  }
  return `${r}-${Date.now()}`.slice(0, 24);
}
function _(e) {
  return (
    e.find((e) => !e.runOnWorktreeCreate && !e.runOnSettle) ?? e.find((e) => !e.runOnSettle) ?? null
  );
}
var v = `\x1Bb`,
  y = `\x1Bf`,
  b = ``,
  x = ``,
  S = ``;
function C(e) {
  return e?.platform ?? navigator.platform;
}
function w(e) {
  return {
    terminalFocus: !1,
    terminalOpen: !1,
    previewFocus: !1,
    previewOpen: !1,
    isWeb: !o,
    isDesktop: o,
    editableFocus: !1,
    ...e?.context,
  };
}
function T(e, t) {
  switch (e.type) {
    case `identifier`:
      return e.name === `true` || (e.name !== `false` && !!t[e.name]);
    case `not`:
      return !T(e.node, t);
    case `and`:
      return T(e.left, t) && T(e.right, t);
    case `or`:
      return T(e.left, t) || T(e.right, t);
  }
}
function E(e, t) {
  return !e || T(e, t);
}
function D(e, t = navigator.platform) {
  let n = a(t),
    r = e.metaKey || (e.modKey && n),
    i = e.ctrlKey || (e.modKey && !n);
  return [
    e.key,
    r ? `meta` : ``,
    i ? `ctrl` : ``,
    e.shiftKey ? `shift` : ``,
    e.altKey ? `alt` : ``,
  ].join(`|`);
}
function O(e, t) {
  let n = e.shortcut;
  return t.composerRequiresModifier &&
    e.command === `composer.sendAlternate` &&
    n.key === `enter` &&
    n.modKey &&
    !n.metaKey &&
    !n.ctrlKey &&
    !n.altKey &&
    !n.shiftKey
    ? { ...n, shiftKey: !0 }
    : n;
}
function k(e, t, n) {
  let r = C(n),
    i = w(n),
    a = new Set(),
    o = [];
  for (let n = e.length - 1; n >= 0; --n) {
    let s = e[n];
    if (!s || !E(s.whenAst, i)) continue;
    let c = O(s, i),
      l = D(c, r);
    a.has(l) || (a.add(l), s.command === t && o.push(c));
  }
  return o;
}
function A(e, t, n) {
  return k(e, t, n)[0] ?? null;
}
function j(e, t, n, r) {
  return M(e, t, r) === n;
}
function M(e, t, n) {
  let r = C(n),
    i = w(n);
  for (let n = t.length - 1; n >= 0; --n) {
    let a = t[n];
    if (a && E(a.whenAst, i) && l(e, O(a, i), r)) return a.command;
  }
  return null;
}
function N(e, t, n, r) {
  let i = M(e, t, r);
  if (i !== null && h(i) === null) return i;
  let a = M(e, n, r);
  return a !== null && h(a) !== null ? a : null;
}
function P(e) {
  return e === ` `
    ? `Space`
    : e.length === 1
      ? e.toUpperCase()
      : e === `escape`
        ? `Esc`
        : e === `arrowup`
          ? `Up`
          : e === `arrowdown`
            ? `Down`
            : e === `arrowleft`
              ? `Left`
              : e === `arrowright`
                ? `Right`
                : e.slice(0, 1).toUpperCase() + e.slice(1);
}
function F(e, t = navigator.platform) {
  let n = P(e.key),
    r = a(t),
    i = e.metaKey || (e.modKey && r),
    o = e.ctrlKey || (e.modKey && !r),
    s = e.altKey,
    c = e.shiftKey;
  if (r) return `${o ? `⌃` : ``}${s ? `⌥` : ``}${c ? `⇧` : ``}${i ? `⌘` : ``}${n}`;
  let l = [];
  return (
    o && l.push(`Ctrl`),
    s && l.push(`Alt`),
    c && l.push(`Shift`),
    i && l.push(`Meta`),
    l.push(n),
    l.join(`+`)
  );
}
function I(e, t, n) {
  if (t === null) return null;
  let r = typeof n == `string` ? { platform: n } : n,
    i = C(r),
    a = A(e, t, r);
  return a ? F(a, i) : null;
}
function L(e) {
  return i[e] ?? null;
}
function R(e) {
  let t = i.indexOf(e);
  return t === -1 ? null : t;
}
function z(e) {
  return e === `thread.previous` ? `previous` : e === `thread.next` ? `next` : null;
}
function B(e, n, r) {
  if (w(r).terminalFocus) return !1;
  let a = C(r);
  for (let o of i) {
    let i = A(n, o, r);
    if (i && t(e, i, a)) return !0;
  }
  return !1;
}
function V(t) {
  return e[t] ?? null;
}
function H(t) {
  let n = e.indexOf(t);
  return n === -1 ? null : n;
}
function U(e, t, n) {
  return j(e, t, `terminal.toggle`, n);
}
function W(e, t, n) {
  return j(e, t, `terminal.split`, n);
}
function G(e, t, n) {
  return j(e, t, `terminal.splitVertical`, n);
}
function K(e, t, n) {
  return j(e, t, `terminal.new`, n);
}
function q(e, t, n) {
  return j(e, t, `terminal.close`, n);
}
function J(e, t, n) {
  return j(e, t, `diff.toggle`, n);
}
function Y(e, t, n) {
  return e.repeat !== !0 && j(e, t, `editor.openFavorite`, n);
}
function X(e, t) {
  return e.type !== void 0 && e.type !== `keydown`
    ? !1
    : t !== null &&
        !t.isCollapsed &&
        n(e).has(`b`) &&
        (e.metaKey || e.ctrlKey) &&
        !e.altKey &&
        !e.shiftKey;
}
function Z(e, t = navigator.platform) {
  if (e.type !== void 0 && e.type !== `keydown`) return !1;
  let n = e.key.toLowerCase();
  return n === `l` && e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey
    ? !0
    : a(t) && n === `k` && e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey;
}
function Q(e, t = navigator.platform) {
  return (e.type !== void 0 && e.type !== `keydown`) || !a(t) || r(e.key) !== `backspace`
    ? null
    : e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey
      ? S
      : null;
}
function $(e, t = navigator.platform) {
  if ((e.type !== void 0 && e.type !== `keydown`) || e.shiftKey) return null;
  let n = r(e.key);
  if (n !== `arrowleft` && n !== `arrowright`) return null;
  let i = n === `arrowleft` ? v : y,
    o = n === `arrowleft` ? b : x;
  return a(t)
    ? e.altKey && !e.metaKey && !e.ctrlKey
      ? i
      : e.metaKey && !e.altKey && !e.ctrlKey
        ? o
        : null
    : (e.ctrlKey && !e.metaKey && !e.altKey) || (e.altKey && !e.metaKey && !e.ctrlKey)
      ? i
      : null;
}
export {
  f as A,
  R as C,
  g as D,
  m as E,
  _ as O,
  L as S,
  d as T,
  D as _,
  Y as a,
  Q as b,
  q as c,
  G as d,
  U as f,
  M as g,
  N as h,
  J as i,
  h as k,
  K as l,
  H as m,
  P as n,
  X as o,
  V as p,
  F as r,
  Z as s,
  k as t,
  W as u,
  I as v,
  z as w,
  $ as x,
  B as y,
};
//# sourceMappingURL=keybindings-b_9MjE1R.js.map
