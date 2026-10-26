import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { o as i } from "./search-BrluOr7L.js";
import { Dr as a, Yn as o, el as s } from "./utils-CPoejuy5.js";
import { T as c, s as l } from "./runtime-CSDWbn8h.js";
import { R as u, T as d, b as f, d as p } from "./entities-CgVpsCCl.js";
import { I as m, N as h } from "./runtime-CY2dlMEg.js";
import { I as g, M as _ } from "./useSettings-N-JG2LFZ.js";
import { a as v } from "./useParams-JSmvSNOU.js";
import { t as y } from "./link-BAk08nHo.js";
import { o as b } from "./dist-BdqWmeee.js";
import { i as x, n as S, o as C, r as w, t as T } from "./empty-CgJfsiJ2.js";
import { t as E } from "./useT3ConnectAuthPrompt-KcWxnf8S.js";
import { t as D } from "./CommandBlock-CMnxyXTY.js";
import { X as O, n as k } from "./useHandleNewThread-Cfzzj4KK.js";
import { $c as A, T as j, js as M, mr as N } from "./main-BZa0O6xN.js";
import { t as P } from "./WorkspacePageHeader-Dwf68L7C.js";
import { t as F } from "./NoProjectsHero-D9E-sihU.js";
var I = n(),
  L = e(t(), 1),
  R = e(r(), 1);
function z() {
  let e = (0, I.c)(6),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = l()), (e[0] = t)) : (t = e[0]);
  let n = t,
    r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = c()), (e[1] = r)) : (r = e[1]);
  let i = r,
    s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, R.jsx)(P, {
        electron: o,
        className: `border-b border-border`,
        children: (0, R.jsx)(`div`, {
          className: `flex items-center gap-2`,
          children: (0, R.jsx)(`span`, {
            className: `text-sm font-medium text-foreground md:text-muted-foreground/60`,
            children: h,
          }),
        }),
      })),
      (e[2] = s))
    : (s = e[2]);
  let u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, R.jsx)(C, { children: i ? `This computer is off` : `No computer connected` })),
      (e[3] = u))
    : (u = e[3]);
  let d;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, R.jsxs)(x, {
        children: [
          u,
          (0, R.jsx)(w, {
            children: i
              ? `Turn it back on, or connect a different computer.`
              : n
                ? `Your agents run on your computer.`
                : `Your agents run on your computer. Start T3 Code there first.`,
          }),
        ],
      })),
      (e[4] = d))
    : (d = e[4]);
  let f;
  return (
    e[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, R.jsx)(M, {
          className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
          children: (0, R.jsxs)(`div`, {
            className: `flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden bg-background`,
            children: [
              s,
              (0, R.jsxs)(T, {
                className: `flex-1`,
                children: [
                  d,
                  (0, R.jsx)(S, {
                    children: i
                      ? (0, R.jsx)(a, {
                          render: (0, R.jsx)(y, { to: `/settings/connections` }),
                          size: `sm`,
                          children: `Open Connections`,
                        })
                      : (0, R.jsx)(`ol`, {
                          className: `w-full space-y-4 text-left`,
                          children: n ? (0, R.jsx)(B, {}) : (0, R.jsx)(W, {}),
                        }),
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[5] = f))
      : (f = e[5]),
    f
  );
}
function B() {
  let e = (0, I.c)(18),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { treatPendingAsSignedOut: !1 }), (e[0] = t))
    : (t = e[0]);
  let { isLoaded: n, isSignedIn: r } = b(t),
    { openAuthPrompt: o } = E(),
    [s] = (0, L.useState)(U),
    [c, l] = (0, L.useState)(H),
    u = g(),
    d;
  if (e[1] !== u.environments) {
    let t = [...u.environments.values()];
    ((d = t.length > 0 && t.every(V)), (e[1] = u.environments), (e[2] = d));
  } else d = e[2];
  let f = d,
    p;
  e[3] !== n || e[4] !== r || e[5] !== o
    ? ((p = (0, R.jsx)(G, {
        number: 1,
        children: r
          ? (0, R.jsxs)(`p`, {
              className: `flex items-center gap-1.5 text-muted-foreground`,
              children: [(0, R.jsx)(i, { className: `size-4` }), `Signed in`],
            })
          : (0, R.jsx)(a, { size: `sm`, disabled: !n, onClick: o, children: `Sign in` }),
      })),
      (e[3] = n),
      (e[4] = r),
      (e[5] = o),
      (e[6] = p))
    : (p = e[6]);
  let m;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, R.jsx)(K, { command: `npx t3 connect` })), (e[7] = m))
    : (m = e[7]);
  let h;
  e[8] !== s || e[9] !== f || e[10] !== r || e[11] !== c
    ? ((h = r
        ? (0, R.jsx)(`div`, {
            className: `mt-4 space-y-1.5`,
            children: (0, R.jsx)(N, {
              primaryEnvironmentId: null,
              savedEnvironments: [],
              refreshWhileEmpty: !0,
              selection: {
                ...(f ? { autoSelectedComputers: s } : {}),
                selectedIds: c,
                onChange: (e, t) =>
                  l((n) => {
                    let r = new Set(n);
                    return (t ? r.add(e) : r.delete(e), r);
                  }),
              },
              empty: (0, R.jsx)(`p`, {
                className: `text-xs text-muted-foreground`,
                children: `Waiting for your computer…`,
              }),
            }),
          })
        : null),
      (e[8] = s),
      (e[9] = f),
      (e[10] = r),
      (e[11] = c),
      (e[12] = h))
    : (h = e[12]);
  let _;
  e[13] === h
    ? (_ = e[14])
    : ((_ = (0, R.jsxs)(G, { number: 2, children: [m, h] })), (e[13] = h), (e[14] = _));
  let v;
  return (
    e[15] !== p || e[16] !== _
      ? ((v = (0, R.jsxs)(R.Fragment, { children: [p, _] })), (e[15] = p), (e[16] = _), (e[17] = v))
      : (v = e[17]),
    v
  );
}
function V(e) {
  let { availability: t } = e;
  return t !== `checking`;
}
function H() {
  return new Set();
}
function U() {
  return new Set();
}
function W() {
  let e = (0, I.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, R.jsx)(G, { number: 1, children: (0, R.jsx)(K, { command: `npx t3 pair` }) })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, R.jsxs)(R.Fragment, {
          children: [
            t,
            (0, R.jsx)(G, {
              number: 2,
              children: (0, R.jsx)(a, {
                render: (0, R.jsx)(y, { to: `/settings/connections` }),
                size: `sm`,
                children: `Add pairing link`,
              }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function G(e) {
  let t = (0, I.c)(7),
    { number: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, R.jsx)(`span`, {
        className: `w-2 shrink-0 pt-1 text-muted-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, R.jsx)(`div`, { className: `min-w-0 flex-1`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, R.jsxs)(`li`, { className: `flex gap-3`, children: [i, a] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function K(e) {
  let t = (0, I.c)(6),
    { command: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(`p`, { children: `Run on your computer:` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (0, R.jsx)(D, { command: n, className: `mt-2` })), (t[1] = n), (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, R.jsx)(`a`, {
        className: `mt-2 inline-block text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground`,
        href: m,
        target: `_blank`,
        rel: `noreferrer noopener`,
        children: `Or download the desktop app`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, R.jsxs)(R.Fragment, { children: [r, i, a] })), (t[4] = i), (t[5] = o)),
    o
  );
}
function q() {
  let e = (0, I.c)(2),
    { authGateState: t } = j.useRouteContext(),
    { environments: n, isReady: r } = _();
  if (t.status === `hosted-static`) {
    if (!r) return null;
    if (n.length === 0) {
      let t;
      return (
        e[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, R.jsx)(z, {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
  }
  let i;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsx)(J, {})), (e[1] = i))
      : (i = e[1]),
    i
  );
}
function J() {
  let e = (0, I.c)(19),
    t = d(),
    n = u(),
    r = f(),
    i = k(),
    a = v(),
    o;
  e[0] === a.state.location.pathname
    ? (o = e[1])
    : ((o = () => a.state.location.pathname === `/`),
      (e[0] = a.state.location.pathname),
      (e[1] = o));
  let c = (0, L.useEffectEvent)(o),
    l = (0, L.useRef)(null),
    m;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { failed: !1, retryRequest: 0 }), (e[2] = m))
    : (m = e[2]);
  let [h, g] = (0, L.useState)(m),
    _;
  e[3] !== t || e[4] !== n
    ? ((_ = O(t, n, `updated_at`)[0] ?? null), (e[3] = t), (e[4] = n), (e[5] = _))
    : (_ = e[5]);
  let y = _,
    b = h.retryRequest,
    x;
  e[6] !== b || e[7] !== i || e[8] !== c || e[9] !== y
    ? ((x = () => {
        if (y === null || l.current === b || !c()) return;
        let e = s(y.environmentId, y.id);
        p(e) !== null &&
          ((l.current = b),
          i(e, { replace: !0 })
            .then((e) => {
              e === null && g(Z);
            })
            .catch(() => {
              g(X);
            }));
      }),
      (e[6] = b),
      (e[7] = i),
      (e[8] = c),
      (e[9] = y),
      (e[10] = x))
    : (x = e[10]);
  let S;
  if (
    (e[11] !== b || e[12] !== i || e[13] !== y
      ? ((S = [b, i, y]), (e[11] = b), (e[12] = i), (e[13] = y), (e[14] = S))
      : (S = e[14]),
    (0, L.useEffect)(x, S),
    y !== null)
  ) {
    let t;
    return (
      e[15] === h.failed
        ? (t = e[16])
        : ((t = h.failed
            ? (0, R.jsx)(Q, {
                onRetry: () => {
                  g(Y);
                },
              })
            : null),
          (e[15] = h.failed),
          (e[16] = t)),
      t
    );
  }
  let C;
  return (
    e[17] === r ? (C = e[18]) : ((C = r ? (0, R.jsx)(F, {}) : null), (e[17] = r), (e[18] = C)), C
  );
}
function Y(e) {
  return { failed: !1, retryRequest: e.retryRequest + 1 };
}
function X(e) {
  return { ...e, failed: !0 };
}
function Z(e) {
  return { ...e, retryRequest: e.retryRequest + 1 };
}
function Q(e) {
  let t = (0, I.c)(6),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = o ? (0, R.jsx)(P, { electron: !0 }) : null), (t[0] = r))
    : (r = t[0]);
  let i, s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, R.jsx)(C, { children: `Couldn’t start a new thread` })),
      (s = (0, R.jsx)(w, {
        children: `The project is still available. Try opening the draft again.`,
      })),
      (t[1] = i),
      (t[2] = s))
    : ((i = t[1]), (s = t[2]));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, R.jsx)(A, { size: `md` })), (t[3] = c))
    : (c = t[3]);
  let l;
  return (
    t[4] === n
      ? (l = t[5])
      : ((l = (0, R.jsxs)(M, {
          className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
          children: [
            r,
            (0, R.jsx)(T, {
              className: `flex-1`,
              children: (0, R.jsxs)(x, {
                className: `max-w-md`,
                children: [
                  i,
                  s,
                  (0, R.jsx)(`div`, {
                    className: `mt-5 flex justify-center`,
                    children: (0, R.jsxs)(a, {
                      size: `sm`,
                      onClick: n,
                      children: [c, `Try again`],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })),
        (t[4] = n),
        (t[5] = l)),
    l
  );
}
export { q as component };
//# sourceMappingURL=_chat.index-Dg1AH-Ip.js.map
