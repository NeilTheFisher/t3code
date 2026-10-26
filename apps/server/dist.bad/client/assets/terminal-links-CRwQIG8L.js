import { Op as e } from "./utils-CPoejuy5.js";
var t = /https?:\/\/[^\s"'`<>]+/giu,
  n =
    /(?:~[\\/]|\.{1,2}[\\/]|\/|[A-Za-z]:[\\/]|\\\\)[^\s"'`<>]+|(?<![\p{L}\p{M}\p{N}._-])[\p{L}\p{M}\p{N}._-]+(?:[\\/][\p{L}\p{M}\p{N}._-]+)+(?::\d+){0,2}/gu,
  r =
    /(["'`])(?<path>(?:~[\\/]|\.{1,2}[\\/]|\/|[A-Za-z]:[\\/]|\\\\|[\p{L}\p{M}\p{N}._ -]+[\\/])[^\r\n]*?|[\p{L}\p{M}\p{N}._ -]+\.[\p{L}\p{M}\p{N}_-]+(?::\d+){0,2})\1(?<position>(?::\d+){0,2})/gu,
  i = /[.,;!?]+$/,
  a = /[.,;:!?]+$/,
  o =
    /(?:^|[\s"'`])(?:GET|HEAD|POST|PUT|PATCH|DELETE|OPTIONS|CONNECT|TRACE|proxying)\s+["'`]?(?:\/|[A-Za-z0-9_-]+\/)[^\s?]*\?\S*/g;
function s(e, t) {
  let n = e.replace(t === `path` ? a : i, ``);
  if (n.length === 0) return n;
  let r = (e, t) => {
    for (; n.endsWith(t);) {
      if (n.split(e).length - 1 >= n.split(t).length - 1) return;
      n = n.slice(0, -1);
    }
  };
  return (r(`(`, `)`), r(`[`, `]`), r(`{`, `}`), n);
}
function c(e, t) {
  return e.start < t.end && t.start < e.end;
}
function l(e, t, n, r) {
  let i = [];
  n.lastIndex = 0;
  for (let a of e.matchAll(n)) {
    let e = a.groups?.path,
      n = e === void 0 ? a[0] : e + (a.groups?.position ?? ``),
      o = a.index + (e === void 0 ? 0 : 1);
    if (o < 0 || n.length === 0) continue;
    let l = e === void 0 ? s(n, t) : n;
    if (l.length === 0 || (t === `path` && d(l))) continue;
    let u = { kind: t, text: l, start: o, end: o + l.length + +!!a.groups?.position };
    [...r, ...i].some((e) => c(u, e)) || i.push(u);
  }
  return i;
}
function u(e) {
  let i = Array.from(e.matchAll(o), (e) => ({ start: e.index, end: e.index + e[0].length })),
    a = l(e, `url`, t, []),
    s = l(e, `path`, r, a),
    u = l(e, `path`, n, [...a, ...s]);
  return [...a, ...s, ...u]
    .filter((e) => e.kind === `url` || !i.some((t) => c(e, t)))
    .toSorted((e, t) => e.start - t.start);
}
function d(e) {
  return /^https?:\/\//iu.test(e);
}
function f(e, t) {
  let n = t(e - 1);
  if (!n) return null;
  let r = e,
    i = n;
  for (; r > 1 && i.isWrapped;) {
    let e = t(r - 2);
    if (!e) return null;
    (--r, (i = e));
  }
  let a = [],
    o = 0,
    s = r;
  for (;;) {
    let e = t(s - 1);
    if (!e) break;
    let n = t(s)?.isWrapped === !0,
      r = e.translateToString(!n);
    if (
      (a.push({ bufferLineNumber: s, text: r, startIndex: o, endIndex: o + r.length }),
      (o += r.length),
      !n)
    )
      break;
    s += 1;
  }
  return { text: a.map((e) => e.text).join(``), segments: a };
}
function p(t, n = typeof navigator > `u` ? `` : navigator.platform) {
  return n.length === 0 ? !1 : e(n) ? t.metaKey && !t.ctrlKey : t.ctrlKey && !t.metaKey;
}
export { d as i, u as n, p as r, f as t };
//# sourceMappingURL=terminal-links-CRwQIG8L.js.map
