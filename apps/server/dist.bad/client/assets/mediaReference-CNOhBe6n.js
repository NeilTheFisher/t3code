import { Es as e, Ts as t, _s as n, ys as r } from "./utils-CPoejuy5.js";
import { a as i, i as a, o, r as s } from "./fileLinks-2WxYEZAK.js";
var c = /^(~\/|\.{1,2}\/)/,
  l =
    /^(?:[A-Za-z0-9._-]+(?: +[A-Za-z0-9._-]+)*\/)+(?:[A-Za-z0-9._-]+(?: +[A-Za-z0-9._-]+)*(?::\d+){0,2})?$/,
  u = /^[A-Za-z0-9._-]+(?: +[A-Za-z0-9._-]+)*\.[A-Za-z0-9_-]+(?::\d+){0,2}$/,
  d = /^([A-Za-z][A-Za-z0-9+.-]*):(.*)$/,
  f = /:\d+(?::\d+)?$/,
  p = /^\d+(?::\d+)?$/,
  m = /[\s`]/,
  h = /[\\/]/,
  g = /\.[A-Za-z0-9_-]+$/,
  _ = /\d\.\d[^.]*$/,
  v = /^\d+(?:\.\d+)+$/,
  y = [
    `/Users/`,
    `/home/`,
    `/tmp/`,
    `/var/`,
    `/etc/`,
    `/opt/`,
    `/mnt/`,
    `/Volumes/`,
    `/private/`,
    `/root/`,
    `/usr/`,
    `/bin/`,
    `/sbin/`,
    `/lib/`,
    `/lib64/`,
    `/srv/`,
    `/dev/`,
    `/proc/`,
    `/sys/`,
    `/run/`,
    `/boot/`,
    `/media/`,
    `/workspace/`,
    `/workspaces/`,
  ],
  b = new Set(
    `Makefile.makefile.GNUmakefile.Dockerfile.Containerfile.Justfile.justfile.Rakefile.Gemfile.Procfile.Brewfile.Caddyfile.Vagrantfile.Jenkinsfile.Podfile.Fastfile.BUILD.WORKSPACE.LICENSE.LICENCE.COPYING.NOTICE.AUTHORS.CONTRIBUTORS.CHANGELOG.README.CODEOWNERS`.split(
      `.`,
    ),
  ),
  x = new Set([`localhost`]),
  S = new Set([
    `com`,
    `net`,
    `org`,
    `io`,
    `dev`,
    `app`,
    `ai`,
    `co`,
    `edu`,
    `gov`,
    `mil`,
    `info`,
    `biz`,
    `xyz`,
    `me`,
    `tv`,
    `cc`,
    `gg`,
    `chat`,
    `cloud`,
    `site`,
    `online`,
    `tech`,
    `store`,
    `link`,
  ]),
  C = new Set(
    `uk.de.fr.nl.se.no.fi.dk.pl.ch.at.be.es.it.pt.eu.us.ca.au.nz.jp.kr.cn.br.ru.mx.ie.cz.tr.sg.hk`.split(
      `.`,
    ),
  );
function w(e, t) {
  if (e.startsWith(`.`)) return !1;
  let n = e.toLowerCase();
  if (x.has(n) || v.test(e)) return !0;
  let r = n.split(`.`),
    i = r.at(-1);
  return r.length < 2 || i === void 0 ? !1 : S.has(i) ? !0 : !t && C.has(i);
}
function T(e) {
  let t = e.trim();
  if (t.length === 0 || m.test(t)) return null;
  let n = r(t) ? t : t.replaceAll(`\\`, `/`),
    i = f.test(n);
  if (!i && !h.test(n)) return null;
  if (!(c.test(n) || n.startsWith(`/`) || r(n))) {
    let e = n.replace(f, ``);
    if (e.endsWith(`/`) || w(e.split(`/`)[0] ?? e, i)) return null;
    let t =
      e
        .replace(/[/\\]+$/, ``)
        .split(/[\\/]/)
        .at(-1) ?? ``;
    if (_.test(t) || (!i && !g.test(t))) return null;
  }
  return n;
}
function E(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function D(e) {
  let t = e.trim();
  return t.startsWith(`<`) && t.endsWith(`>`) ? t.slice(1, -1) : t;
}
function O(e) {
  let t = e.indexOf(`#`),
    n = t >= 0 ? e.slice(0, t) : e,
    r = t >= 0 ? e.slice(t) : ``,
    i = n.indexOf(`?`);
  return { path: i >= 0 ? n.slice(0, i) : n, hash: r };
}
function k(e, t) {
  let n = P(t);
  if (!n) return !1;
  let i = (e) => e.replaceAll(`\\`, `/`).replace(/^\.\//, ``).replace(/\/+$/, ``),
    a = o(e.trim());
  if ((a.line !== void 0 && a.line !== n.line) || (a.column !== void 0 && a.column !== n.column))
    return !1;
  let s = i(a.path),
    c = i(n.path);
  return (
    s.length === 0 ||
    (r(n.path) && ((s = s.toLowerCase()), (c = c.toLowerCase())), c === s || c.endsWith(`/${s}`))
  );
}
function A(e) {
  return c.test(e) || (!e.startsWith(`/`) && !r(e));
}
function j(e) {
  if (!e.startsWith(`/`)) return !1;
  if (y.some((t) => e.startsWith(t)) || f.test(e)) return !0;
  let t = e.slice(e.lastIndexOf(`/`) + 1);
  return b.has(t) || g.test(t);
}
function M(e, t) {
  return r(e) || c.test(e) ? !0 : e.startsWith(`/`) ? j(t) : b.has(e) ? !0 : l.test(t) || u.test(e);
}
function N(e) {
  if (r(e)) return !1;
  let t = e.match(d);
  if (!t) return !1;
  let n = t[2] ?? ``;
  return n.startsWith(`//`) ? !0 : !p.test(n);
}
function P(e) {
  let n = D(e);
  if (n.length === 0 || n.startsWith(`#`) || n.startsWith(`//`)) return null;
  let r = (n.toLowerCase().startsWith(`file:`) ? a(n) : null) ?? O(n),
    i = t(E(r.path.trim())),
    s = E(r.hash.trim());
  if (i.length === 0 || N(i)) return null;
  let c = o(i, s);
  return M(c.path, i) ? c : null;
}
var F = /(```[\s\S]*?(?:```|$))/,
  I = /`([^`\n]+)`/g;
function L(e) {
  let t = [],
    n = e.split(F);
  for (let e = 0; e < n.length; e += 2)
    for (let r of (n[e] ?? ``).matchAll(I)) {
      let e = r[1]?.trim();
      e && t.push(e);
    }
  return t;
}
function R(e, t) {
  let n = -1,
    r = -1;
  return (i) => (
    (i >= n && i <= r) || ((t.lastIndex = i), (n = i), (r = t.exec(e)?.index ?? e.length)),
    r
  );
}
function z(e) {
  let t = R(e, /\S/g),
    n = R(e, /["']/g),
    r = R(e, /\S/g);
  return (i) => {
    let a = t(i);
    if (e[a] === `)`) return a + 1;
    if (a === i || (e[a] !== `"` && e[a] !== `'`)) return null;
    let o = n(a + 1);
    if (o === e.length) return null;
    let s = r(o + 1);
    return e[s] === `)` ? s + 1 : null;
  };
}
function B(e) {
  let t = R(e, /\S/g),
    n = R(e, /[>\n]/g),
    r = R(e, /[\s)]/g),
    i = z(e),
    a = z(e);
  return (o) => {
    if (e[o] !== `(`) return null;
    let s = t(o + 1);
    if (e[s] === `<`) {
      let t = n(s + 1);
      if (t > s + 1 && e[t] === `>`) {
        let e = i(t + 1);
        if (e !== null) return { hrefStart: s + 1, hrefEnd: t, end: e };
      }
    }
    let c = r(s);
    if (c === s) return null;
    let l = a(c);
    return l === null ? null : { hrefStart: s, hrefEnd: c, end: l };
  };
}
function V(e) {
  let t = [],
    n = B(e),
    r = 0;
  for (; r < e.length;) {
    let i = e.indexOf(`[`, r);
    if (i === -1) break;
    let a = e.indexOf(`]`, i + 1);
    if (a === -1) break;
    r = a + 1;
    let o = n(r);
    if (!o) continue;
    r = o.end;
    let s = e.slice(o.hrefStart, o.hrefEnd).trim();
    s && t.push(s);
  }
  return t;
}
function H(t, r, a = r) {
  if (!t) return null;
  let o = P(t);
  if (!o) return null;
  let c = s(o);
  return A(c) ? (a ? i(c, a) : null) : n(o.path) && e(o.path, r) === null ? null : c;
}
function U(e) {
  return /^[A-Za-z]:[\\/]/.test(E(e));
}
function W(e) {
  let t = r(e) || e.startsWith(`//`),
    n = t ? e.replaceAll(`\\`, `/`) : e,
    i = t
      ? /^(?:[a-z]:\/|\/\/[^/]+\/[^/]+(?:\/|$))/i.exec(n)?.[0]
      : n.startsWith(`/`)
        ? `/`
        : void 0;
  if (!i) return;
  let a = [];
  for (let e of n.slice(i.length).split(`/`)) e && e !== `.` && (e === `..` ? a.pop() : a.push(e));
  let o = i.replace(/\/$/, ``);
  return { root: t ? o.toLowerCase() : o, segments: a, windows: t };
}
function G(e, t) {
  let n = W(e),
    r = t ? W(t) : void 0;
  return !n ||
    !r ||
    n.windows !== r.windows ||
    n.root !== r.root ||
    n.segments.length <= r.segments.length ||
    !r.segments.every((e, t) =>
      r.windows ? e.toLowerCase() === n.segments[t]?.toLowerCase() : e === n.segments[t],
    )
    ? { kind: `file`, path: e }
    : { kind: `file`, path: e, relativePath: n.segments.slice(r.segments.length).join(`/`) };
}
function K(e) {
  if (/^(?:https?:\/\/|\/\/)/i.test(e))
    try {
      let t = new URL(e.startsWith(`//`) ? `https:${e}` : e);
      return t.protocol === `http:` || t.protocol === `https:` ? { kind: `url`, url: e } : void 0;
    } catch {
      return;
    }
}
function q(e) {
  if (e.kind === `file`) {
    let t = r(e.path) || e.path.startsWith(`//`);
    return e.path.split(t ? /[\\/]/ : `/`).at(-1) || void 0;
  }
  let t;
  try {
    let n = e.url;
    t = new URL(n.startsWith(`//`) ? `https:${n}` : n).pathname.split(`/`).at(-1);
  } catch {
    return;
  }
  return t ? E(t) : void 0;
}
export {
  V as a,
  A as c,
  P as d,
  H as f,
  L as i,
  U as l,
  O as m,
  q as n,
  T as o,
  E as p,
  K as r,
  k as s,
  G as t,
  D as u,
};
//# sourceMappingURL=mediaReference-CNOhBe6n.js.map
