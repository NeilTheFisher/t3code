import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./log-in-DwLd1u-q.js";
import { s as i } from "./runtime-CSDWbn8h.js";
import { a, o } from "./dist-BdqWmeee.js";
import { t as s } from "./T3ConnectAccountPages-CeaFAqz5.js";
import { t as c } from "./useT3ConnectAuthPrompt-KcWxnf8S.js";
import { Ms as l, Ns as u, Ps as d } from "./main-BZa0O6xN.js";
var f = t(),
  p = e(n(), 1);
function m() {
  let e = (0, f.c)(1);
  if (!i()) return null;
  let t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, p.jsx)(v, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function h() {
  let e = (0, f.c)(1);
  if (!i()) return null;
  let t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, p.jsx)(g, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function g() {
  let e = (0, f.c)(1),
    { isLoaded: t, isSignedIn: n } = o();
  if (!t || !n) return null;
  let r;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, p.jsx)(a, {
          appearance: {
            elements: {
              avatarBox: `size-7`,
              userButtonTrigger: `rounded-lg p-1 hover:bg-sidebar-row-hover`,
            },
          },
          children: s.map(_),
        })),
        (e[0] = r))
      : (r = e[0]),
    r
  );
}
function _(e) {
  return (0, p.jsx)(
    a.UserProfilePage,
    { label: e.label, labelIcon: e.icon, url: e.url, children: e.content },
    e.url,
  );
}
function v() {
  let e = (0, f.c)(7),
    { isLoaded: t, isSignedIn: n } = o(),
    { authPrompt: i, openAuthPrompt: a } = c();
  if (!t || n) return null;
  let s, m;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, p.jsx)(r, {})),
      (m = (0, p.jsx)(`span`, { children: `Sign in to T3 Connect` })),
      (e[0] = s),
      (e[1] = m))
    : ((s = e[0]), (m = e[1]));
  let h;
  e[2] === a
    ? (h = e[3])
    : ((h = (0, p.jsx)(l, {
        children: (0, p.jsx)(d, { children: (0, p.jsxs)(u, { onClick: a, children: [s, m] }) }),
      })),
      (e[2] = a),
      (e[3] = h));
  let g;
  return (
    e[4] !== i || e[5] !== h
      ? ((g = (0, p.jsxs)(p.Fragment, { children: [h, i] })), (e[4] = i), (e[5] = h), (e[6] = g))
      : (g = e[6]),
    g
  );
}
export { h as T3ConnectSidebarAvatar, m as T3ConnectSidebarSignIn };
//# sourceMappingURL=T3ConnectSidebarSignIn-BW_4LfpG.js.map
