import { Ts as e, ms as t, ps as n, ys as r } from "./utils-CPoejuy5.js";
var i = /:(\d+)(?::(\d+))?$/,
  a = /^#L(\d+)(?:C(\d+))?$/i;
function o(t) {
  try {
    let n = new URL(t);
    if (n.protocol.toLowerCase() !== `file:`) return null;
    let r = n.hostname.toLowerCase() === `localhost` ? `` : n.hostname,
      i = r ? `\\\\${r}${n.pathname.replaceAll(`/`, `\\`)}` : n.pathname;
    return i.length === 0 ? null : { path: e(i), hash: n.hash };
  } catch {
    return null;
  }
}
function s(e, t = ``) {
  let n = e.match(i),
    r = n ?? t.match(a);
  if (!r?.[1]) return { path: e };
  let o = Number.parseInt(r[1], 10),
    s = r[2] === void 0 ? void 0 : Number.parseInt(r[2], 10);
  return {
    path: n ? e.slice(0, -n[0].length) : e,
    ...(o > 0 ? { line: o } : {}),
    ...(s !== void 0 && s > 0 ? { column: s } : {}),
  };
}
function c(e) {
  return e.line ? `${e.path}:${e.line}${e.column ? `:${e.column}` : ``}` : e.path;
}
function l(e) {
  return r(e) || /[A-Za-z]:\\/.test(e);
}
function u(e, t, n) {
  let r = e.replace(/[\\/]+$/, ``);
  return n === `\\` ? `${r}\\${t.replaceAll(`/`, `\\`)}` : `${r}/${t.replace(/^\/+/, ``)}`;
}
function d(e) {
  let t = e.match(/^\/Users\/([^/]+)/);
  if (t?.[1]) return `/Users/${t[1]}`;
  let n = e.match(/^\/home\/([^/]+)/);
  if (n?.[1]) return `/home/${n[1]}`;
  let r = e.match(/^([A-Za-z]:[\\/]Users[\\/][^\\/]+)/i);
  if (r?.[1]) return r[1];
}
function f(e, n) {
  let r = s(e),
    { path: i } = r,
    a = i;
  if (i.startsWith(`~/`) || (l(n) && i.startsWith(`~\\`))) {
    let e = d(n);
    if (e) {
      let t = l(e) ? `\\` : `/`;
      a = u(e, i.slice(2), t);
    }
  } else t(i) || (a = u(n, i, l(n) ? `\\` : `/`));
  return c({ ...r, path: a });
}
function p(e) {
  return e
    .replaceAll(`\\`, `/`)
    .split(`/`)
    .filter((e) => e.length > 0)
    .slice(0, -1);
}
function m(e) {
  let t = new Map();
  for (let n of e) {
    let e = n.replaceAll(`\\`, `/`),
      r = e.split(`/`).filter((e) => e.length > 0),
      i = r[r.length - 1];
    if (!i) continue;
    let a = t.get(i) ?? new Set();
    (a.add(e), t.set(i, a));
  }
  let n = new Map();
  for (let e of t.values()) {
    let t = [...e];
    if (t.length < 2) continue;
    let r = new Map(t.map((e) => [e, p(e)])),
      i = new Map();
    for (let e of t) {
      let n = r.get(e) ?? [],
        a = n.length;
      for (let i = 1; i <= n.length; i += 1) {
        let o = n.slice(-i).join(`/`);
        if (!t.some((t) => t !== e && (r.get(t) ?? []).slice(-i).join(`/`) === o)) {
          a = i;
          break;
        }
      }
      i.set(e, a);
    }
    for (let e of t) {
      let t = r.get(e) ?? [];
      if (t.length === 0) continue;
      let a = i.get(e) ?? 1,
        o = Math.min(t.length, Math.max(a, 2));
      n.set(e, t.slice(-o).join(`/`));
    }
  }
  return n;
}
function h(e, t) {
  let r = t.get(e.path.replaceAll(`\\`, `/`));
  return [n(e.path), r, e.line ? `L${e.line}${e.column ? `:C${e.column}` : ``}` : void 0]
    .filter(Boolean)
    .join(` · `);
}
export { f as a, o as i, h as n, s as o, c as r, m as t };
//# sourceMappingURL=fileLinks-2WxYEZAK.js.map
