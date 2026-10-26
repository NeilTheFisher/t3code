import { Es as e, Ts as t, _s as n, ps as r, ys as i } from "./utils-CPoejuy5.js";
import { h as a, l as o, m as s } from "./runtime-CY2dlMEg.js";
import { i as c, o as l } from "./fileLinks-2WxYEZAK.js";
import { m as u, n as d, p as f, r as p, t as m, u as h } from "./mediaReference-CNOhBe6n.js";
var g = /^(?:https?:|data:|blob:|\/\/)/i,
  _ = /^[A-Za-z][A-Za-z0-9+.-]*:/;
function v(e) {
  return u(h(e)).hash;
}
function y(e, t) {
  let n = i(e) ? `\\` : `/`;
  return `${e.replace(/[\\/]+$/, ``)}${n}${t.replace(/[\\/]/g, n).replace(/^[\\/]+/, ``)}`;
}
function b(t, r) {
  return n(t) && e(t, r) === null ? { _tag: `Blocked` } : { _tag: `WorkspaceFile`, path: t };
}
function x(e, n) {
  if (e == null) return { _tag: `Blocked` };
  let r = h(e);
  if (r.length === 0 || r.startsWith(`#`) || r.startsWith(`?`)) return { _tag: `Blocked` };
  if (g.test(r)) return { _tag: `Direct`, uri: r };
  if (/^file:/i.test(r)) {
    let e = c(r);
    return e === null ? { _tag: `Blocked` } : b(t(f(e.path)), n);
  }
  let a = t(f(u(r).path));
  return a.length === 0
    ? { _tag: `Blocked` }
    : a.startsWith(`/`) || i(a)
      ? b(a, n)
      : _.test(a) || a.startsWith(`~/`) || a.startsWith(`~\\`) || !n
        ? { _tag: `Blocked` }
        : { _tag: `WorkspaceFile`, path: y(n, a) };
}
function S(e, t) {
  return t.resolvedFilePath === void 0
    ? x(e, t.workspaceRoot)
    : { _tag: `WorkspaceFile`, path: t.resolvedFilePath };
}
function C(e, t) {
  let n = S(e, t);
  if (n._tag === `Blocked`) return null;
  let i = n._tag === `Direct` ? u(n.uri).path : l(n.path).path,
    c = r(i);
  if (n._tag === `WorkspaceFile` && o({ name: c }) === `audio`) return null;
  let f = c.lastIndexOf(`.`),
    h =
      (n._tag === `Direct` ? s(n.uri) : f < 0 ? null : a(c.slice(f))) ??
      (t.imageEmbed ? `image/*` : null);
  if (h === null || h.startsWith(`audio/`)) return null;
  let g = h.startsWith(`video/`) ? `video` : `image`,
    _ = n._tag === `Direct` ? p(n.uri) : m(i, t.workspaceRoot),
    y = {
      kind: g,
      mimeType: h,
      name: (_ && d(_)) || c || g,
      ...(_ ? { reference: _ } : {}),
      srcFragment: v(e),
    };
  return n._tag === `Direct`
    ? { ...y, access: `direct`, uri: n.uri }
    : t.threadId === void 0
      ? { ...y, access: `unavailable` }
      : {
          ...y,
          access: `environment`,
          resource: { _tag: `media-file`, threadId: t.threadId, path: i },
        };
}
export { x as n, v as r, C as t };
//# sourceMappingURL=mediaSource-DrjifeMJ.js.map
