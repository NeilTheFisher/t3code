import {
  Fy as e,
  Uy as t,
  Vy as n,
  ab as r,
  db as i,
  jy as a,
  rd as o,
  zy as s,
} from "./utils-CPoejuy5.js";
function c(e, t) {
  if (t === null) return null;
  try {
    let n = new URL(e),
      r = new URL(t);
    return (n.protocol !== `http:` && n.protocol !== `https:`) ||
      !n.pathname.startsWith(`/api/assets/`) ||
      !/\.pdf$/i.test(n.pathname)
      ? null
      : n.origin !== r.origin && !o(n.hostname) && n.hostname !== `0.0.0.0`
        ? n.href
        : new URL(`${n.pathname}${n.search}${n.hash}`, r).href;
  } catch {
    return null;
  }
}
var l = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `::1`]);
[...l];
var u = /^(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1?\])(?::|\/|$)/i;
function d(e) {
  return !!(l.has(e) || e === `[::1]`);
}
var f = class extends t()(`PreviewUrlNormalizationError`, {
  inputLength: s,
  reason: e([`empty`, `parse`, `unsupported-protocol`]),
  protocol: i(n),
  cause: i(a()),
}) {
  get message() {
    let e = this.protocol === void 0 ? `` : `: ${this.protocol}`;
    return `Invalid preview URL (${this.reason}${e}; input length ${this.inputLength}).`;
  }
};
r(f);
function p(e) {
  return /^([A-Za-z][A-Za-z\d+.-]*):/.exec(e)?.[1]?.toLowerCase().concat(`:`);
}
var m = /^(?:localhost|\d{1,3}(?:\.\d{1,3}){3}|\[[\da-f:.]+\])$/i,
  h = /^[^/?#:@]+:\d+(?:[/?#]|$)/,
  g = /^[a-z][a-z\d+.-]*:\/\//i,
  _ = new Set([
    `about:`,
    `blob:`,
    `chrome:`,
    `data:`,
    `file:`,
    `ftp:`,
    `javascript:`,
    `mailto:`,
    `sms:`,
    `ssh:`,
    `tel:`,
    `view-source:`,
    `ws:`,
    `wss:`,
  ]),
  v = {
    duckduckgo: `https://duckduckgo.com/?q=%s`,
    google: `https://www.google.com/search?q=%s`,
    bing: `https://www.bing.com/search?q=%s`,
    brave: `https://search.brave.com/search?q=%s`,
    kagi: `https://kagi.com/search?q=%s`,
    ecosia: `https://www.ecosia.org/search?q=%s`,
  };
function y(e, t) {
  return e.replaceAll(`%s`, encodeURIComponent(t));
}
function b(e) {
  if (!e.includes(`%s`)) return !1;
  try {
    let t = (e) => `${e.username}:${e.password}@${e.host}`,
      n = new URL(y(e, `a`)),
      r = new URL(y(e, `b`));
    return (n.protocol === `http:` || n.protocol === `https:`) && t(n) === t(r);
  } catch {
    return !1;
  }
}
function x(e) {
  if (e.browserSearchEngine !== `custom`) return v[e.browserSearchEngine];
  let t = e.browserCustomSearchUrl.trim();
  return b(t) ? t : v.duckduckgo;
}
function S(e, t = v.duckduckgo) {
  let n = e.trim();
  if (g.test(n) || n.length === 0) return C(n);
  if (!/\s/.test(n)) {
    let t = p(n);
    if (t !== void 0 && (_.has(t) || !h.test(n))) {
      if (t !== `http:` && t !== `https:`)
        throw new f({ inputLength: e.length, reason: `unsupported-protocol`, protocol: t });
      return C(n);
    }
    let r = n.split(/[/?#]/, 1)[0] ?? ``,
      i = r.replace(/^[^@]*@/, ``).replace(/:\d+$/, ``);
    if (i.length < r.replace(/^[^@]*@/, ``).length || m.test(i) || /^[^.]+(?:\.[^.]+)+\.?$/.test(i))
      try {
        return C(n);
      } catch {}
  }
  return y(t, n);
}
function C(e) {
  let t = e.trim();
  if (t.length === 0) throw new f({ inputLength: e.length, reason: `empty` });
  let n = u.test(t),
    r = g.test(t) ? t : `${n ? `http` : `https`}://${t}`,
    i;
  try {
    i = new URL(r);
  } catch (t) {
    throw new f({ inputLength: e.length, reason: `parse`, protocol: p(r), cause: t });
  }
  if (i.protocol !== `http:` && i.protocol !== `https:`)
    throw new f({ inputLength: e.length, reason: `unsupported-protocol`, protocol: i.protocol });
  return i.href;
}
export { S as a, c as i, b as n, x as o, C as r, d as t };
//# sourceMappingURL=preview-BuXyUmSo.js.map
