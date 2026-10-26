import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./arrow-right-JFWisfUC.js";
import { t as s } from "./cloud-H2DGA1t_.js";
import { t as c } from "./monitor-DSwTf3-j.js";
import { t as l } from "./terminal-bpV3bXWf.js";
import {
  Ay as u,
  B_ as d,
  Bn as f,
  Dr as p,
  Dy as m,
  Gl as h,
  JC as g,
  Kv as _,
  Lc as v,
  Lp as y,
  Mc as b,
  Vn as x,
  Wl as S,
  Wn as C,
  Wv as w,
  XC as T,
  Xl as E,
  Xu as D,
  Zy as O,
  _r as k,
  cp as A,
  el as j,
  hr as M,
  iu as N,
  j_ as P,
  jc as F,
  l as I,
  o as L,
  t as R,
  tl as z,
  vy as B,
  yy as V,
} from "./utils-CPoejuy5.js";
import { s as H } from "./runtime-CSDWbn8h.js";
import { T as ee, Y as U, f as te, pt as W } from "./entities-CgVpsCCl.js";
import { t as G } from "./runtime-CY2dlMEg.js";
import { t as ne } from "./checkbox-QNRIjRIP.js";
import { M as re, N as K } from "./useSettings-N-JG2LFZ.js";
import { m as q } from "./server-3D32GveR.js";
import { a as ie, l as ae, r as oe, s as se, u as ce } from "./session-0UrRHIau.js";
import { t as le } from "./query-LKSVgBQH.js";
import { t as ue } from "./use-atom-command-DGAuqAck.js";
import { i as J } from "./toast-B4KPIJDZ.js";
import { n as de } from "./useNavigate-Dq4t21kA.js";
import { t as fe } from "./useLocation-Be_QVulB.js";
import { o as pe } from "./timestampFormat-BBUHLb6E.js";
import { t as me } from "./scroll-area-B6188Bq9.js";
import { o as he } from "./dist-BdqWmeee.js";
import { n as ge } from "./dialog-BjeWpelT.js";
import { n as Y, r as X, t as _e } from "./collapsible-Dp2CGco9.js";
import { t as ve } from "./useT3ConnectAuthPrompt-KcWxnf8S.js";
import { t as ye } from "./CommandBlock-CMnxyXTY.js";
import { t as be } from "./ThreadTerminalDrawer-GjGtrcWP.js";
import { n as xe } from "./useHandleNewThread-Cfzzj4KK.js";
import { r as Se, t as Ce } from "./alert-fX5rpTMS.js";
import { t as we } from "./onboarding-BpT5MBbn.js";
import {
  I as Te,
  Sa as Ee,
  Vo as De,
  _o as Oe,
  _r as ke,
  bs as Ae,
  fi as je,
  hr as Me,
  j as Ne,
  mr as Pe,
  ui as Fe,
  vs as Ie,
  xl as Le,
  xs as Re,
  ys as ze,
} from "./main-BZa0O6xN.js";
import { t as Be } from "./NoProjectsHero-D9E-sihU.js";
import { t as Ve } from "./legalLinks-BaIJY52l.js";
import { r as He } from "./SettingsPanels.logic-BoQ9AIFf.js";
import {
  d as Ue,
  f as We,
  i as Ge,
  n as Ke,
  p as qe,
  s as Je,
  t as Ye,
  u as Xe,
} from "./CodexSetupSection.logic-BNzWmLZs.js";
var Z = e(t(), 1),
  Q = n(),
  Ze = 2592e6,
  Qe = 3;
function $e(e, t = Date.now()) {
  let n = t - Ze;
  return {
    available: e,
    recent: e.filter((e) => {
      if (e.git === null || e.threadCount < Qe || e.lastActiveAt === null) return !1;
      let r = Date.parse(e.lastActiveAt);
      return r >= n && r <= t;
    }),
  };
}
function et(e, t) {
  return e === null ? t : t === null || e > t ? e : t;
}
function tt(e) {
  let t = new Map(),
    n = [];
  for (let r of e) {
    if (r.git === null) {
      n.push(r);
      continue;
    }
    let e = r.git ?? { remoteKey: null, repository: null },
      i = e.remoteKey === null ? `path:${r.path}` : `remote:${e.remoteKey}`,
      a = t.get(i);
    a === void 0
      ? t.set(i, {
          key: i,
          label: e.repository ?? r.title,
          repository: e.repository,
          candidates: [r],
          threadCount: r.threadCount,
          lastActiveAt: r.lastActiveAt,
        })
      : (a.candidates.push(r),
        t.set(i, {
          ...a,
          threadCount: a.threadCount + r.threadCount,
          lastActiveAt: et(a.lastActiveAt, r.lastActiveAt),
        }));
  }
  return {
    repositories: [...t.values()].sort((e, t) =>
      e.lastActiveAt === t.lastActiveAt
        ? e.label.localeCompare(t.label)
        : e.lastActiveAt === null
          ? 1
          : t.lastActiveAt === null
            ? -1
            : t.lastActiveAt.localeCompare(e.lastActiveAt),
    ),
    other: n,
  };
}
function nt(e, t, n) {
  if (n.projectId !== void 0) return n.projectId;
  let r = e.filter((e) => e.environmentId === t),
    i = W(r, n.path);
  return i === void 0 ? null : i.id;
}
function rt(e, t, n) {
  for (let n of e) {
    let e = t.get(n);
    if (e !== void 0) return e;
  }
  for (let t of e) {
    let e = n.get(t);
    if (e !== void 0) return e;
  }
}
function it(e) {
  if (/^[A-Za-z]:[\\/]+$/.test(e) || /^[\\/]{2}[^\\/]+[\\/][^\\/]+[\\/]*$/.test(e))
    return { name: e, parent: `` };
  let t = e.replace(/[\\/]+$/, ``),
    n = Math.max(t.lastIndexOf(`/`), t.lastIndexOf(`\\`));
  return t.length === 0
    ? { name: e, parent: `` }
    : n < 0
      ? { name: t, parent: `` }
      : { name: t.slice(n + 1), parent: t.slice(0, n + 1) };
}
function at(e, t) {
  return JSON.stringify([e, t]);
}
var ot = h(G, {
    label: `environment-data:agent-sessions:scan`,
    tag: y.agentSessionsScan,
    staleTimeMs: 3e4,
    idleTtlMs: 3e5,
  }),
  st = S(G, { label: `environment-data:agent-sessions:import`, tag: y.agentSessionsImport });
function ct(e) {
  return D(e.entry);
}
function lt(e, t) {
  let n = e.filter((e) => t.has(e.environmentId)),
    r = (e) => n.filter((t) => e(t.connection.phase)).map((e) => e.environmentId),
    i = r((e) => e === `connected`),
    a = n.some((e) => e.connection.phase === `connecting`);
  return {
    ready: i.length > 0 && !a,
    environmentIds: i,
    skippedIds: r((e) => e !== `connected` && e !== `connecting`),
  };
}
var ut = (e) => ot({ environmentId: e, input: {} }),
  dt = ae(`web-project-scans`, ut);
function ft(e) {
  let t = (0, Q.c)(9),
    n = (0, Z.useContext)(b),
    r;
  t[0] === e ? (r = t[1]) : ((r = dt(ce(e))), (t[0] = e), (t[1] = r));
  let i = F(r),
    a;
  if (t[2] !== e || t[3] !== n || t[4] !== i) {
    let r;
    (t[6] !== n || t[7] !== i
      ? ((r = (e, t) => {
          let r = i[t];
          return {
            environmentId: e,
            data: g(A(r)),
            error: r._tag === `Failure` ? le(r.cause) : null,
            isPending: r.waiting || r._tag === `Initial`,
            refresh: () => n.refresh(ut(e)),
          };
        }),
        (t[6] = n),
        (t[7] = i),
        (t[8] = r))
      : (r = t[8]),
      (a = e.map(r)),
      (t[2] = e),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a));
  } else a = t[5];
  return a;
}
var $ = e(r(), 1),
  pt = [],
  mt = m.make(`onboarding-agent-setup`),
  ht = [`Connect`, `Agents`, `Projects`],
  gt = `Scan limit reached. Some projects or conversations may be missing.`;
function _t(e) {
  let t = (0, Q.c)(47),
    { localAvailable: n, onDone: r, resumeEnvironmentId: i } = e,
    [a, o] = (0, Z.useState)(i ? `agents` : `connection`),
    { environments: s } = re(),
    [c, l] = (0, Z.useState)(null),
    [u] = (0, Z.useState)(Ct),
    d;
  t[0] === i ? (d = t[1]) : ((d = i ? [i] : []), (t[0] = i), (t[1] = d));
  let [f, p] = (0, Z.useState)(d),
    [m, h] = (0, Z.useState)(!1),
    g = (0, Z.useRef)(null),
    _ = (0, Z.useRef)(null),
    v = K(),
    y,
    b;
  (t[2] !== u || t[3] !== s
    ? ((y = () => {
        let e = s.filter((e) => !u.has(e.environmentId));
        if (e.length === 0) return;
        for (let t of e) u.add(t.environmentId);
        let t = e.filter(St);
        t.length !== 0 && l((e) => new Set([...(e ?? []), ...t.map(xt)]));
      }),
      (b = [u, s]),
      (t[2] = u),
      (t[3] = s),
      (t[4] = y),
      (t[5] = b))
    : ((y = t[4]), (b = t[5])),
    (0, Z.useEffect)(y, b));
  let x;
  t[6] !== v || t[7] !== c
    ? ((x = c ?? new Set(v ? [v.environmentId] : [])), (t[6] = v), (t[7] = c), (t[8] = x))
    : (x = t[8]);
  let S = x,
    C = ft(a === `import` ? f : pt),
    w;
  t[9] !== C || t[10] !== a
    ? ((w = a === `import` && C.every(bt) && C.some(yt)), (t[9] = C), (t[10] = a), (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        e.length !== 0 && (p(e), o(`agents`));
      }),
      (t[12] = E))
    : (E = t[12]);
  let D = E,
    O = a === `agents` ? 1 : a === `import` ? 2 : 0,
    k;
  t[13] === r
    ? (k = t[14])
    : ((k = (e, t, n) => {
        let i = n === void 0 ? 0 : n;
        if (g.current !== null) return g.current;
        _.current !== null && (J.close(_.current), (_.current = null));
        let a = ke()
          .then(
            async () => (
              _.current !== null && (J.close(_.current), (_.current = null)),
              await r(e),
              t
                ? J.add({
                    type: `warning`,
                    title: `Some history was not imported`,
                    description: t,
                    timeout: 0,
                  })
                : i > 0 &&
                  J.add({
                    type: `success`,
                    title: `Imported ${i} ${i === 1 ? `thread` : `threads`}`,
                  }),
              !0
            ),
          )
          .catch(() => {
            let e = {
              type: `error`,
              title: `Could not finish setup`,
              description: `Your settings could not be saved. Try again.`,
            };
            return (_.current === null ? (_.current = J.add(e)) : J.update(_.current, e), !1);
          })
          .finally(() => {
            g.current === a && (g.current = null);
          });
        return ((g.current = a), a);
      }),
      (t[13] = r),
      (t[14] = k));
  let A = k,
    j;
  t[15] !== A || t[16] !== m
    ? ((j = (e, t) => {
        (t.cancel(), t.reason === `close-press` && !m && A());
      }),
      (t[15] = A),
      (t[16] = m),
      (t[17] = j))
    : (j = t[17]);
  let M;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsxs)(`div`, {
        className: `flex items-baseline gap-1.5`,
        role: `img`,
        "aria-label": `T3 Code`,
        children: [
          (0, $.jsx)(Ee, { className: `h-4 w-auto shrink-0`, "aria-hidden": !0 }),
          (0, $.jsx)(`span`, {
            className: `text-2xl font-medium tracking-tight text-muted-foreground`,
            children: `Code`,
          }),
        ],
      })),
      (t[18] = M))
    : (M = t[18]);
  let N, P;
  t[19] !== m || t[20] !== O
    ? ((N = (e) => m || e >= O),
      (P = (e) => {
        m || e > O || o(e === 0 ? `connection` : `agents`);
      }),
      (t[19] = m),
      (t[20] = O),
      (t[21] = N),
      (t[22] = P))
    : ((N = t[21]), (P = t[22]));
  let F;
  t[23] !== O || t[24] !== N || t[25] !== P
    ? ((F = (0, $.jsx)(Ie, {
        title: `Set up T3 Code`,
        identity: M,
        children: (0, $.jsx)(Re, { steps: ht, currentStep: O, isStepDisabled: N, onStepChange: P }),
      })),
      (t[23] = O),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] !== u ||
  t[28] !== s ||
  t[29] !== A ||
  t[30] !== m ||
  t[31] !== n ||
  t[32] !== C ||
  t[33] !== S ||
  t[34] !== f ||
  t[35] !== a
    ? ((I =
        a === `connection`
          ? (0, $.jsx)(wt, {
              expandPairingInitially: !n && !H(),
              selectedIds: S,
              autoSelectedComputers: u,
              onSelectionChange: l,
              onToggleEnvironment: (e, t) =>
                l((n) => {
                  let r = new Set(n ?? S);
                  return (t ? r.add(e) : r.delete(e), r);
                }),
              onContinue: () => D(lt(s, S).environmentIds),
              onPaired: (e) => {
                l(new Set([...S, e]));
              },
            })
          : a === `agents`
            ? (0, $.jsx)(At, { environmentIds: f, onContinue: () => o(`import`) })
            : (0, $.jsx)(zt, { scans: C, isImporting: m, setIsImporting: h, onDone: A })),
      (t[27] = u),
      (t[28] = s),
      (t[29] = A),
      (t[30] = m),
      (t[31] = n),
      (t[32] = C),
      (t[33] = S),
      (t[34] = f),
      (t[35] = a),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] !== T || t[38] !== I
    ? ((L = (0, $.jsx)(ze, { holdHeight: T, children: I })), (t[37] = T), (t[38] = I), (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== F || t[41] !== L
    ? ((R = (0, $.jsxs)(Ae, {
        size: `wide`,
        bottomStickOnMobile: !1,
        initialFocus: vt,
        children: [F, L],
      })),
      (t[40] = F),
      (t[41] = L),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(Te, {})), (t[43] = z))
    : (z = t[43]);
  let B;
  return (
    t[44] !== R || t[45] !== j
      ? ((B = (0, $.jsxs)(ge, {
          open: !0,
          disablePointerDismissal: !0,
          onOpenChange: j,
          children: [R, z],
        })),
        (t[44] = R),
        (t[45] = j),
        (t[46] = B))
      : (B = t[46]),
    B
  );
}
function vt() {
  return document.getElementById(`onboarding-pairing-url`) ?? !0;
}
function yt(e) {
  return e.isPending;
}
function bt(e) {
  return e.data === null;
}
function xt(e) {
  return e.environmentId;
}
function St(e) {
  return e.entry.enabled;
}
function Ct() {
  return new Set();
}
function wt(e) {
  let t = (0, Q.c)(44),
    {
      autoSelectedComputers: n,
      expandPairingInitially: r,
      selectedIds: a,
      onSelectionChange: s,
      onToggleEnvironment: l,
      onContinue: u,
      onPaired: d,
    } = e,
    { environments: f } = re(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = H()), (t[0] = m)) : (m = t[0]);
  let h = m,
    g;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => !h || !ct(e)), (t[1] = g))
    : (g = t[1]);
  let _ = f.filter(g),
    [v, y] = (0, Z.useState)(r),
    [b, x] = (0, Z.useState)(!1),
    { ready: S, skippedIds: C } = lt(f, a),
    w = f.filter((e) => C.includes(e.environmentId)).map(Tt),
    T = (0, Z.useRef)(null);
  (0, Z.useEffect)(() => {
    S &&
      (document.activeElement === document.body ||
        document.activeElement?.getAttribute(`role`) === `dialog`) &&
      T.current?.focus();
  }, [S]);
  let E, D;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold tracking-tight text-foreground`,
        children: `Connect your computers`,
      })),
      (D = (0, $.jsx)(`p`, {
        className: `mt-2.5 text-sm leading-relaxed text-muted-foreground`,
        children: `Choose one or more computers. We’ll set up agents and projects on each.`,
      })),
      (t[2] = E),
      (t[3] = D))
    : ((E = t[2]), (D = t[3]));
  let O =
      _.length > 0
        ? (0, $.jsxs)(`fieldset`, {
            className: `mt-5 space-y-2`,
            children: [
              (0, $.jsx)(`legend`, { className: `sr-only`, children: `Computers to set up` }),
              _.map((e) =>
                (0, $.jsxs)(
                  `label`,
                  {
                    className: `flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-3 py-3`,
                    children: [
                      (0, $.jsx)(ne, {
                        checked: a.has(e.environmentId),
                        onCheckedChange: (t) => {
                          let n = new Set(a);
                          (t ? n.add(e.environmentId) : n.delete(e.environmentId), s(n));
                        },
                      }),
                      (0, $.jsx)(c, { className: `size-4 shrink-0 text-muted-foreground` }),
                      (0, $.jsxs)(`span`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, $.jsxs)(`span`, {
                            className: `flex items-baseline justify-between gap-3`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `min-w-0 text-sm font-medium break-words`,
                                children: e.label,
                              }),
                              (0, $.jsx)(`span`, {
                                className: `shrink-0 text-xs text-muted-foreground`,
                                children:
                                  !e.entry.enabled && e.connection.phase !== `unsupported`
                                    ? `Off`
                                    : Me(e.connection).buttonLabel,
                              }),
                            ],
                          }),
                          e.displayUrl
                            ? (0, $.jsx)(`span`, {
                                className: `mt-0.5 block text-xs break-all text-muted-foreground`,
                                children: e.displayUrl,
                              })
                            : null,
                          e.connection.phase === `unsupported` && e.connection.error
                            ? (0, $.jsx)(`span`, {
                                className: `mt-0.5 block text-xs text-muted-foreground`,
                                children: e.connection.error,
                              })
                            : null,
                        ],
                      }),
                    ],
                  },
                  e.environmentId,
                ),
              ),
            ],
          })
        : null,
    k;
  t[4] !== n || t[5] !== b || t[6] !== l || t[7] !== a
    ? ((k = h
        ? (0, $.jsx)(Et, {
            autoSelectedComputers: n,
            disabled: b,
            selectedIds: a,
            onToggleEnvironment: l,
          })
        : null),
      (t[4] = n),
      (t[5] = b),
      (t[6] = l),
      (t[7] = a),
      (t[8] = k))
    : (k = t[8]);
  let A, j, M;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(p, {
        variant: `ghost`,
        size: `sm-multiline`,
        className: `min-h-14 w-full justify-start`,
      })),
      (j = (0, $.jsx)(Le, { className: `size-4 text-muted-foreground` })),
      (M = (0, $.jsx)(`span`, { className: `flex-1 text-left`, children: `Add a computer` })),
      (t[9] = A),
      (t[10] = j),
      (t[11] = M))
    : ((A = t[9]), (j = t[10]), (M = t[11]));
  let N = v && `rotate-90`,
    P;
  t[12] === N
    ? (P = t[13])
    : ((P = R(`size-4 text-muted-foreground`, N)), (t[12] = N), (t[13] = P));
  let F;
  t[14] === P ? (F = t[15]) : ((F = (0, $.jsx)(i, { className: P })), (t[14] = P), (t[15] = F));
  let I;
  t[16] !== b || t[17] !== F
    ? ((I = (0, $.jsxs)(X, { disabled: b, render: A, children: [j, M, F] })),
      (t[16] = b),
      (t[17] = F),
      (t[18] = I))
    : (I = t[18]);
  let L;
  t[19] === d
    ? (L = t[20])
    : ((L = (e) => {
        (y(!1), d(e), requestAnimationFrame(() => T.current?.focus()));
      }),
      (t[19] = d),
      (t[20] = L));
  let z;
  t[21] !== b || t[22] !== L
    ? ((z = (0, $.jsx)(Y, {
        children: (0, $.jsx)(`div`, {
          className: `px-3 pb-3`,
          children: (0, $.jsx)(Dt, { isPairing: b, setIsPairing: x, onPaired: L }),
        }),
      })),
      (t[21] = b),
      (t[22] = L),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== v || t[25] !== I || t[26] !== z
    ? ((B = (0, $.jsx)(`div`, {
        className: `rounded-lg border border-border bg-background`,
        children: (0, $.jsxs)(_e, { open: v, onOpenChange: y, children: [I, z] }),
      })),
      (t[24] = v),
      (t[25] = I),
      (t[26] = z),
      (t[27] = B))
    : (B = t[27]);
  let V;
  t[28] !== B || t[29] !== k
    ? ((V = (0, $.jsxs)(`div`, { className: `mt-4 space-y-2`, children: [k, B] })),
      (t[28] = B),
      (t[29] = k),
      (t[30] = V))
    : (V = t[30]);
  let ee =
      w.length > 0
        ? (0, $.jsxs)(`p`, {
            className: `mt-4 text-xs text-muted-foreground`,
            children: [
              `Not connected, so setup skips `,
              w.join(`, `),
              `. You can set`,
              ` `,
              w.length === 1 ? `it` : `them`,
              ` up later from Settings.`,
            ],
          })
        : null,
    U;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsxs)(`p`, {
        className: `min-w-0 text-xs leading-relaxed text-muted-foreground`,
        children: [
          `T3 Code collects anonymous usage data to help us improve it. To read more about how your data is used and how to opt out, see our`,
          ` `,
          (0, $.jsx)(`a`, {
            className: `underline underline-offset-2 hover:text-foreground`,
            href: Ve,
            target: `_blank`,
            rel: `noreferrer noopener`,
            children: `privacy policy`,
          }),
          `.`,
        ],
      })),
      (t[31] = U))
    : (U = t[31]);
  let te = !r,
    W = !S || b,
    G;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(o, { className: `size-3.5` })), (t[32] = G))
    : (G = t[32]);
  let K;
  t[33] !== u || t[34] !== te || t[35] !== W
    ? ((K = (0, $.jsxs)(`div`, {
        className: `mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6`,
        children: [
          U,
          (0, $.jsxs)(p, {
            className: `shrink-0 self-end`,
            ref: T,
            autoFocus: te,
            disabled: W,
            onClick: u,
            children: [`Continue`, G],
          }),
        ],
      })),
      (t[33] = u),
      (t[34] = te),
      (t[35] = W),
      (t[36] = K))
    : (K = t[36]);
  let q;
  return (
    t[37] !== V || t[38] !== ee || t[39] !== K || t[40] !== E || t[41] !== D || t[42] !== O
      ? ((q = (0, $.jsxs)($.Fragment, { children: [E, D, O, V, ee, K] })),
        (t[37] = V),
        (t[38] = ee),
        (t[39] = K),
        (t[40] = E),
        (t[41] = D),
        (t[42] = O),
        (t[43] = q))
      : (q = t[43]),
    q
  );
}
function Tt(e) {
  return e.label;
}
function Et(e) {
  let t = (0, Q.c)(36),
    { autoSelectedComputers: n, disabled: r, selectedIds: a, onToggleEnvironment: o } = e,
    { environments: c } = re(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { treatPendingAsSignedOut: !1 }), (t[0] = l))
    : (l = t[0]);
  let { isLoaded: u, isSignedIn: d } = he(l),
    { openAuthPrompt: f } = ve(),
    [m, h] = (0, Z.useState)(!0),
    [g, _] = (0, Z.useState)(!1),
    v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = () => _(!0)), (t[1] = v)) : (v = t[1]);
  let y = v,
    b = m && !!d && g,
    x = r || !u,
    S;
  t[2] !== d || t[3] !== f
    ? ((S = (e) => {
        d || (e.preventDefault(), h(!0), f());
      }),
      (t[2] = d),
      (t[3] = f),
      (t[4] = S))
    : (S = t[4]);
  let C, w, T;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(p, {
        variant: `ghost`,
        size: `sm-multiline`,
        className: `min-h-14 w-full justify-start`,
      })),
      (w = (0, $.jsx)(s, { className: `size-4 text-muted-foreground` })),
      (T = (0, $.jsx)(`span`, { className: `flex-1 text-left`, children: `T3 Connect` })),
      (t[5] = C),
      (t[6] = w),
      (t[7] = T))
    : ((C = t[5]), (w = t[6]), (T = t[7]));
  let E = u ? (d ? (g ? null : `Loading computers…`) : `Sign in`) : `Loading sign-in…`,
    D;
  t[8] === E
    ? (D = t[9])
    : ((D = (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: E })),
      (t[8] = E),
      (t[9] = D));
  let O = m && d && `rotate-90`,
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = R(`size-4 text-muted-foreground`, O)), (t[10] = O), (t[11] = k));
  let A;
  t[12] === k ? (A = t[13]) : ((A = (0, $.jsx)(i, { className: k })), (t[12] = k), (t[13] = A));
  let j;
  t[14] !== D || t[15] !== A || t[16] !== x || t[17] !== S
    ? ((j = (0, $.jsxs)(X, { disabled: x, onClick: S, render: C, children: [w, T, D, A] })),
      (t[14] = D),
      (t[15] = A),
      (t[16] = x),
      (t[17] = S),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] !== n || t[20] !== c || t[21] !== d || t[22] !== o || t[23] !== a
    ? ((M = d
        ? (0, $.jsx)(Pe, {
            primaryEnvironmentId: null,
            savedEnvironments: c,
            showSavedEnvironments: !0,
            onDiscoveryReady: y,
            selection: { selectedIds: a, onChange: o, autoSelectedComputers: n },
            refreshWhileEmpty: !0,
            empty: (0, $.jsx)(`p`, {
              className: `py-3 text-sm text-muted-foreground`,
              children: `No computers linked yet.`,
            }),
          })
        : null),
      (t[19] = n),
      (t[20] = c),
      (t[21] = d),
      (t[22] = o),
      (t[23] = a),
      (t[24] = M))
    : (M = t[24]);
  let N;
  t[25] === M
    ? (N = t[26])
    : ((N = (0, $.jsx)(`div`, { className: `mb-3 space-y-1.5`, children: M })),
      (t[25] = M),
      (t[26] = N));
  let P, F, I;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: `Run this on each computer you want to connect.`,
      })),
      (F = (0, $.jsx)(ye, { command: `npx t3 connect`, className: `mt-3` })),
      (I = (0, $.jsx)(`p`, {
        className: `mt-3 text-xs text-muted-foreground`,
        children: `Keep T3 Code running. Select the computers you want to set up above.`,
      })),
      (t[27] = P),
      (t[28] = F),
      (t[29] = I))
    : ((P = t[27]), (F = t[28]), (I = t[29]));
  let L;
  t[30] === N
    ? (L = t[31])
    : ((L = (0, $.jsx)(Y, {
        keepMounted: !0,
        children: (0, $.jsxs)(`div`, { className: `px-3 pb-3`, children: [N, P, F, I] }),
      })),
      (t[30] = N),
      (t[31] = L));
  let z;
  return (
    t[32] !== j || t[33] !== L || t[34] !== b
      ? ((z = (0, $.jsx)(`div`, {
          className: `rounded-lg border border-border bg-background`,
          children: (0, $.jsxs)(_e, { open: b, onOpenChange: h, children: [j, L] }),
        })),
        (t[32] = j),
        (t[33] = L),
        (t[34] = b),
        (t[35] = z))
      : (z = t[35]),
    z
  );
}
function Dt(e) {
  let t = (0, Q.c)(38),
    { isPairing: n, setIsPairing: r, onPaired: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { reportFailure: !1 }), (t[0] = o))
    : (o = t[0]);
  let s = ue(we, o),
    [c, l] = (0, Z.useState)(``),
    [u, d] = (0, Z.useState)(``),
    f = (0, Z.useRef)(!0),
    m,
    h;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => (
        (f.current = !0),
        () => {
          f.current = !1;
        }
      )),
      (h = []),
      (t[1] = m),
      (t[2] = h))
    : ((m = t[1]), (h = t[2])),
    (0, Z.useEffect)(m, h));
  let g;
  t[3] !== s || t[4] !== n || t[5] !== a || t[6] !== c || t[7] !== r
    ? ((g = async () => {
        if (n || c.trim().length === 0) return;
        (r(!0), d(``));
        let e = await s({ pairingUrl: c.trim() });
        if (!f.current) return;
        if ((r(!1), e._tag === `Success`)) {
          a(e.value);
          return;
        }
        if (E(e)) return;
        let t = N(e);
        d(t instanceof Error ? t.message : `Pairing failed.`);
      }),
      (t[3] = s),
      (t[4] = n),
      (t[5] = a),
      (t[6] = c),
      (t[7] = r),
      (t[8] = g))
    : (g = t[8]);
  let _ = g,
    v;
  t[9] === _
    ? (v = t[10])
    : ((v = (e) => {
        (e.preventDefault(), _());
      }),
      (t[9] = _),
      (t[10] = v));
  let y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(`label`, {
        className: `block text-sm text-muted-foreground`,
        htmlFor: `onboarding-pairing-url`,
        children: `Pairing link`,
      })),
      (t[11] = y))
    : (y = t[11]);
  let b = u.length > 0,
    x = u ? `onboarding-pairing-error` : void 0,
    S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => l(e.currentTarget.value)), (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== n || t[14] !== c || t[15] !== b || t[16] !== x
    ? ((C = (0, $.jsxs)(`div`, {
        children: [
          y,
          (0, $.jsx)(k, {
            id: `onboarding-pairing-url`,
            autoFocus: !0,
            "aria-invalid": b,
            "aria-describedby": x,
            className: `mt-2`,
            size: `lg`,
            autoCapitalize: `none`,
            autoComplete: `off`,
            autoCorrect: `off`,
            spellCheck: !1,
            nativeInput: !0,
            readOnly: n,
            placeholder: `https://your-server:5230/pair#token=…`,
            value: c,
            onChange: S,
            onKeyDown: Ot,
          }),
        ],
      })),
      (t[13] = n),
      (t[14] = c),
      (t[15] = b),
      (t[16] = x),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === u
    ? (w = t[19])
    : ((w = u
        ? (0, $.jsx)(Ce, {
            id: `onboarding-pairing-error`,
            variant: `error`,
            children: (0, $.jsx)(Se, { children: u }),
          })
        : null),
      (t[18] = u),
      (t[19] = w));
  let T;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsxs)(X, {
        type: `button`,
        className: `group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground`,
        children: [
          (0, $.jsx)(i, { className: `size-3.5 group-data-panel-open:rotate-90` }),
          `Need a pairing link?`,
        ],
      })),
      (t[20] = T))
    : (T = t[20]);
  let D;
  t[21] !== n || t[22] !== c
    ? ((D = n || c.trim().length === 0), (t[21] = n), (t[22] = c), (t[23] = D))
    : (D = t[23]);
  let O = n ? `Pairing...` : `Pair`,
    A;
  t[24] !== D || t[25] !== O
    ? ((A = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [T, (0, $.jsx)(p, { type: `submit`, disabled: D, children: O })],
      })),
      (t[24] = D),
      (t[25] = O),
      (t[26] = A))
    : (A = t[26]);
  let j, M;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(`p`, {
        className: `pt-3 text-sm text-muted-foreground`,
        children: `Run this on the computer with your code.`,
      })),
      (M = (0, $.jsx)(ye, { command: `npx t3 pair`, className: `mt-2` })),
      (t[27] = j),
      (t[28] = M))
    : ((j = t[27]), (M = t[28]));
  let P;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(`code`, { className: `font-mono`, children: `npx t3 serve` })), (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsxs)(Y, {
        children: [
          j,
          M,
          (0, $.jsxs)(`p`, {
            className: `mt-2 text-xs leading-relaxed text-muted-foreground`,
            children: [
              `Start T3 Code first, or run `,
              P,
              `. Add`,
              ` `,
              (0, $.jsx)(`code`, { className: `font-mono`, children: `--tailscale` }),
              ` to use your tailnet.`,
            ],
          }),
        ],
      })),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] === A
    ? (I = t[32])
    : ((I = (0, $.jsxs)(_e, { children: [A, F] })), (t[31] = A), (t[32] = I));
  let L;
  return (
    t[33] !== C || t[34] !== w || t[35] !== I || t[36] !== v
      ? ((L = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(`form`, {
            className: `space-y-3`,
            onSubmit: v,
            children: [C, w, I],
          }),
        })),
        (t[33] = C),
        (t[34] = w),
        (t[35] = I),
        (t[36] = v),
        (t[37] = L))
      : (L = t[37]),
    L
  );
}
function Ot(e) {
  e.key === `Enter` && (e.nativeEvent.isComposing || e.keyCode === 229) && e.preventDefault();
}
var kt = [`codex`, `claudeAgent`];
function At(e) {
  let t = (0, Q.c)(13),
    { environmentIds: n, onContinue: r } = e,
    { environments: i } = re(),
    a;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e = (e) =>
          (0, $.jsx)(
            jt,
            {
              environmentId: e,
              machineLabel: i.find((t) => t.environmentId === e)?.label ?? `Computer`,
            },
            e,
          )),
        (t[3] = i),
        (t[4] = e)),
      (a = n.map(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a));
  } else a = t[2];
  let s;
  t[5] === a
    ? (s = t[6])
    : ((s = (0, $.jsx)(me, {
        scrollFade: !0,
        className: `mt-5 h-auto max-h-[min(32rem,55dvh)]`,
        children: (0, $.jsx)(`div`, { className: `space-y-5 pr-3`, children: a }),
      })),
      (t[5] = a),
      (t[6] = s));
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(o, { className: `size-3.5` })), (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === r
    ? (l = t[9])
    : ((l = (0, $.jsx)(`div`, {
        className: `mt-6 flex justify-end`,
        children: (0, $.jsxs)(p, { autoFocus: !0, onClick: r, children: [`Continue`, c] }),
      })),
      (t[8] = r),
      (t[9] = l));
  let u;
  return (
    t[10] !== s || t[11] !== l
      ? ((u = (0, $.jsxs)(tn, {
          title: `Connect your agents`,
          description: `Choose an agent to start coding. You can add more later.`,
          children: [s, l],
        })),
        (t[10] = s),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function jt(e) {
  let t = (0, Q.c)(51),
    { environmentId: n, machineLabel: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = q.providersValueAtom(n)), (t[0] = n), (t[1] = i));
  let a = F(i),
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { reportFailure: !1 }), (t[2] = o))
    : (o = t[2]);
  let s = ue(q.refreshProviders, o),
    c;
  t[3] === n ? (c = t[4]) : ((c = q.configValueAtom(n)), (t[3] = n), (t[4] = c));
  let l = F(c),
    [u, f] = (0, Z.useState)(null),
    [m, h] = (0, Z.useState)(!1),
    [g, _] = (0, Z.useState)(null),
    v = ie(n, d),
    y,
    b;
  (t[5] !== n || t[6] !== s
    ? ((y = () => {
        s({ environmentId: n, input: {} });
      }),
      (b = [n, s]),
      (t[5] = n),
      (t[6] = s),
      (t[7] = y),
      (t[8] = b))
    : ((y = t[7]), (b = t[8])),
    (0, Z.useEffect)(y, b));
  let x, S, C, w;
  if (
    t[9] !== v ||
    t[10] !== g ||
    t[11] !== n ||
    t[12] !== r ||
    t[13] !== a ||
    t[14] !== l ||
    t[15] !== u?.driver
  ) {
    let e = qe(a),
      i = kt.flatMap((t) => {
        let n = t === `codex` ? a?.filter((e) => e.driver === t) : void 0;
        return n?.length
          ? n.map((e) => ({ driver: t, provider: e, instanceId: e.instanceId }))
          : [{ driver: t, provider: e.get(t), instanceId: e.get(t)?.instanceId }];
      });
    if (g) {
      let e;
      t[20] === g
        ? (e = t[21])
        : ((e = (e) => e.instanceId === g.instanceId), (t[20] = g), (t[21] = e));
      let n = i.findIndex(e),
        [r] = n >= 0 ? i.splice(n, 1) : [];
      i.unshift(r ?? { driver: `codex`, provider: void 0, instanceId: g.instanceId });
    }
    (t[22] === r
      ? (C = t[23])
      : ((C = (0, $.jsx)(`h2`, { className: `mb-2 text-sm font-medium`, children: r })),
        (t[22] = r),
        (t[23] = C)),
      t[24] === v
        ? (w = t[25])
        : ((w = v
            ? null
            : (0, $.jsx)(`p`, {
                className: `mb-2 text-sm text-muted-foreground`,
                children: `This connection cannot control terminals.`,
              })),
          (t[24] = v),
          (t[25] = w)),
      (x = `space-y-1.5`));
    let o;
    (t[26] !== v || t[27] !== g || t[28] !== n || t[29] !== l || t[30] !== u?.driver
      ? ((o = (e) => {
          let { driver: t, provider: r, instanceId: i } = e;
          return t === `codex` && l !== null
            ? (0, $.jsx)(
                Pt,
                {
                  environmentId: n,
                  provider: r,
                  serverConfig: l,
                  createdAccount: i === g?.instanceId ? g : null,
                  onAutoStartConsumed: () => _(Nt),
                  terminalOpen: u?.driver === t,
                  onOpenTerminal: () => {
                    r !== void 0 &&
                      oe(n, `terminal:operate`) &&
                      f({
                        environmentId: n,
                        driver: t,
                        providerInstanceId: r.instanceId,
                        cwd: l.cwd,
                        command: r.installed
                          ? We(r, l.settings, l.environment.platform.os)
                          : Ue(t, l.environment.platform.os),
                        keybindings: l.keybindings,
                      });
                  },
                },
                i ?? t,
              )
            : (0, $.jsx)(
                Ft,
                {
                  driver: t,
                  provider: r,
                  terminalOpen: u?.driver === t,
                  terminalAvailable: l !== null && v,
                  onOpenTerminal: () => {
                    r !== void 0 &&
                      l !== null &&
                      oe(n, `terminal:operate`) &&
                      f({
                        environmentId: n,
                        driver: t,
                        providerInstanceId: r.instanceId,
                        cwd: l.cwd,
                        command: r.installed
                          ? We(r, l.settings, l.environment.platform.os)
                          : Ue(t, l.environment.platform.os),
                        keybindings: l.keybindings,
                      });
                  },
                },
                t,
              );
        }),
        (t[26] = v),
        (t[27] = g),
        (t[28] = n),
        (t[29] = l),
        (t[30] = u?.driver),
        (t[31] = o))
      : (o = t[31]),
      (S = i.map(o)),
      (t[9] = v),
      (t[10] = g),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = l),
      (t[15] = u?.driver),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w));
  } else ((x = t[16]), (S = t[17]), (C = t[18]), (w = t[19]));
  let T;
  t[32] !== x || t[33] !== S
    ? ((T = (0, $.jsx)(`div`, { className: x, children: S })),
      (t[32] = x),
      (t[33] = S),
      (t[34] = T))
    : (T = t[34]);
  let E;
  t[35] === a
    ? (E = t[36])
    : ((E = a?.some(Mt)
        ? (0, $.jsx)(`div`, {
            className: `mt-3`,
            children: (0, $.jsx)(p, {
              size: `xs`,
              variant: `ghost-muted`,
              onClick: () => h(!0),
              children: `Connect another ChatGPT account`,
            }),
          })
        : null),
      (t[35] = a),
      (t[36] = E));
  let D;
  t[37] !== m || t[38] !== n
    ? ((D = m
        ? (0, $.jsx)(Ke, {
            environmentId: n,
            onClose: () => h(!1),
            onAccountCreated: (e, t) => _({ instanceId: e, displayName: t, autoStart: !0 }),
          })
        : null),
      (t[37] = m),
      (t[38] = n),
      (t[39] = D))
    : (D = t[39]);
  let O;
  t[40] !== n || t[41] !== s || t[42] !== u
    ? ((O =
        u === null
          ? null
          : (0, $.jsx)(
              It,
              {
                session: u,
                onClose: () => {
                  (f(null), s({ environmentId: n, input: {} }));
                },
              },
              `${u.environmentId}:${u.providerInstanceId}:${u.driver}`,
            )),
      (t[40] = n),
      (t[41] = s),
      (t[42] = u),
      (t[43] = O))
    : (O = t[43]);
  let k;
  return (
    t[44] !== T || t[45] !== E || t[46] !== D || t[47] !== O || t[48] !== C || t[49] !== w
      ? ((k = (0, $.jsxs)(`section`, { children: [C, w, T, E, D, O] })),
        (t[44] = T),
        (t[45] = E),
        (t[46] = D),
        (t[47] = O),
        (t[48] = C),
        (t[49] = w),
        (t[50] = k))
      : (k = t[50]),
    k
  );
}
function Mt(e) {
  return e.driver === `codex` && Xe(e) === `ready`;
}
function Nt(e) {
  return e ? { ...e, autoStart: !1 } : null;
}
function Pt(e) {
  let t = (0, Q.c)(28),
    {
      createdAccount: n,
      onAutoStartConsumed: r,
      environmentId: i,
      provider: a,
      serverConfig: o,
      terminalOpen: s,
      onOpenTerminal: c,
    } = e,
    l = ie(i, d),
    u = ue(q.updateSettings, `Codex setup settings`),
    f;
  t[0] !== n?.instanceId || t[1] !== a?.instanceId
    ? ((f = n?.instanceId ?? a?.instanceId ?? _(w.make(`codex`))),
      (t[0] = n?.instanceId),
      (t[1] = a?.instanceId),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = o.settings,
    h;
  t[3] !== n || t[4] !== p || t[5] !== m.providerInstances
    ? ((h = m.providerInstances[p] ?? {
        driver: w.make(`codex`),
        config: n ? { enabled: !0, setupMode: `managed` } : {},
      }),
      (t[3] = n),
      (t[4] = p),
      (t[5] = m.providerInstances),
      (t[6] = h))
    : (h = t[6]);
  let g = h,
    v;
  t[7] === g.config ? (v = t[8]) : ((v = Ye(g.config)), (t[7] = g.config), (t[8] = v));
  let y = v,
    b =
      y === `existing` &&
      g.config !== null &&
      typeof g.config == `object` &&
      `setupMode` in g.config &&
      g.config.setupMode === `existing`,
    x;
  t[9] !== i || t[10] !== g || t[11] !== p || t[12] !== m || t[13] !== u
    ? ((x = (e) => {
        u({
          environmentId: i,
          input: {
            patch: He({
              settings: m,
              instanceId: p,
              instance: {
                ...g,
                enabled: !0,
                config: {
                  ...(g.config !== null && typeof g.config == `object` ? g.config : {}),
                  enabled: !0,
                  setupMode: e,
                },
              },
            }),
          },
        });
      }),
      (t[9] = i),
      (t[10] = g),
      (t[11] = p),
      (t[12] = m),
      (t[13] = u),
      (t[14] = x))
    : (x = t[14]);
  let S = x,
    C;
  return (
    t[15] !== l ||
    t[16] !== S ||
    t[17] !== n?.autoStart ||
    t[18] !== n?.displayName ||
    t[19] !== i ||
    t[20] !== b ||
    t[21] !== p ||
    t[22] !== y ||
    t[23] !== r ||
    t[24] !== c ||
    t[25] !== a ||
    t[26] !== s
      ? ((C = b
          ? (0, $.jsx)(Ft, {
              driver: `codex`,
              provider: a,
              terminalOpen: s,
              terminalAvailable: l,
              onOpenTerminal: c,
            })
          : (0, $.jsx)(Ge, {
              presentation: `onboarding`,
              autoStart: n?.autoStart === !0,
              displayName: n?.displayName,
              onAutoStartConsumed: r,
              environmentId: i,
              instanceId: p,
              provider: a,
              mode: y,
              enabled: a?.enabled ?? !0,
              onModeChange: S,
            })),
        (t[15] = l),
        (t[16] = S),
        (t[17] = n?.autoStart),
        (t[18] = n?.displayName),
        (t[19] = i),
        (t[20] = b),
        (t[21] = p),
        (t[22] = y),
        (t[23] = r),
        (t[24] = c),
        (t[25] = a),
        (t[26] = s),
        (t[27] = C))
      : (C = t[27]),
    C
  );
}
function Ft(e) {
  let t = (0, Q.c)(29),
    { driver: n, provider: r, terminalOpen: i, terminalAvailable: o, onOpenTerminal: s } = e,
    c;
  t[0] === n ? (c = t[1]) : ((c = je.get(w.make(n))), (t[0] = n), (t[1] = c));
  let u = c,
    d = r?.displayName || (n === `claudeAgent` ? `Claude Code` : (u?.label ?? n)),
    f;
  t[2] === r ? (f = t[3]) : ((f = Je(r)), (t[2] = r), (t[3] = f));
  let m = f,
    h;
  t[4] === r ? (h = t[5]) : ((h = Xe(r)), (t[4] = r), (t[5] = h));
  let g = h,
    _;
  t[6] === n ? (_ = t[7]) : ((_ = w.make(n)), (t[6] = n), (t[7] = _));
  let v;
  t[8] !== d || t[9] !== _
    ? ((v = (0, $.jsx)(Fe, { driverKind: _, displayName: d, iconClassName: `size-5` })),
      (t[8] = d),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] === d
    ? (y = t[12])
    : ((y = (0, $.jsx)(`span`, {
        className: `block text-sm font-medium text-foreground`,
        children: d,
      })),
      (t[11] = d),
      (t[12] = y));
  let b = g === `ready` ? `Ready to code.` : m.headline,
    x = g !== `ready` && m.detail ? ` · ${m.detail}` : ``,
    S;
  t[13] !== b || t[14] !== x
    ? ((S = (0, $.jsxs)(`p`, {
        className: `mt-0.5 text-xs leading-relaxed break-words whitespace-pre-wrap text-muted-foreground`,
        children: [b, x],
      })),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] !== y || t[17] !== S
    ? ((C = (0, $.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [y, S] })),
      (t[16] = y),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let T;
  t[19] !== s || t[20] !== g || t[21] !== m || t[22] !== o || t[23] !== i
    ? ((T = (0, $.jsx)(`div`, {
        className: `shrink-0`,
        children:
          g === `ready`
            ? (0, $.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5 text-xs font-medium text-success-foreground`,
                children: [(0, $.jsx)(a, { className: `size-3.5` }), `Ready`],
              })
            : g === `checking`
              ? (0, $.jsx)(`span`, {
                  className: `text-xs text-muted-foreground`,
                  children: `Checking...`,
                })
              : g === `disabled`
                ? (0, $.jsx)(`span`, {
                    className: `text-xs text-muted-foreground`,
                    children: `Disabled`,
                  })
                : g === `attention`
                  ? (0, $.jsx)(`span`, {
                      className: `text-xs text-muted-foreground`,
                      children: m.headline,
                    })
                  : (0, $.jsxs)(p, {
                      size: `xs`,
                      variant: `ghost`,
                      onClick: s,
                      disabled: i || !o,
                      children: [
                        (0, $.jsx)(l, { className: `size-3.5` }),
                        g === `signIn` ? `Sign in` : `Install`,
                      ],
                    }),
      })),
      (t[19] = s),
      (t[20] = g),
      (t[21] = m),
      (t[22] = o),
      (t[23] = i),
      (t[24] = T))
    : (T = t[24]);
  let E;
  return (
    t[25] !== C || t[26] !== T || t[27] !== v
      ? ((E = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-4`,
          children: [v, C, T],
        })),
        (t[25] = C),
        (t[26] = T),
        (t[27] = v),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
function It(e) {
  let t = (0, Q.c)(60),
    { session: n, onClose: r } = e,
    { command: i, cwd: a, driver: o, environmentId: s, keybindings: c, providerInstanceId: l } = n,
    f = ie(s, d),
    [m] = v(De, !1, u),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { reportFailure: !1 }), (t[0] = h))
    : (h = t[0]);
  let g = ue(Oe.open, h),
    _;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { reportFailure: !1 }), (t[1] = _))
    : (_ = t[1]);
  let y = ue(Oe.write, _),
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { reportFailure: !1 }), (t[2] = b))
    : (b = t[2]);
  let x = ue(Oe.close, b),
    S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = Promise.resolve()), (t[3] = S))
    : (S = t[3]);
  let C = (0, Z.useRef)(S),
    w = (0, Z.useRef)(0),
    T = (0, Z.useRef)(null),
    E;
  t[4] === o ? (E = t[5]) : ((E = () => `onboarding-${o}-${I()}`), (t[4] = o), (t[5] = E));
  let [D] = (0, Z.useState)(E),
    O;
  t[6] === s ? (O = t[7]) : ((O = z(s, mt)), (t[6] = s), (t[7] = O));
  let k = O,
    [A, j] = (0, Z.useState)(0),
    [M, N] = (0, Z.useState)(`preparing`),
    P = M === `ready` || M === `writeFailed`,
    F;
  t[8] !== x ||
  t[9] !== i ||
  t[10] !== a ||
  t[11] !== s ||
  t[12] !== g ||
  t[13] !== l ||
  t[14] !== D ||
  t[15] !== y
    ? ((F = () => {
        let e = w.current + 1;
        return (
          (w.current = e),
          (T.current = e),
          N(`preparing`),
          (C.current = C.current.then(async () => {
            if (T.current !== e) return;
            if (!oe(s, `terminal:operate`)) {
              N(`openFailed`);
              return;
            }
            if (
              (
                await g({
                  environmentId: s,
                  input: { threadId: mt, terminalId: D, cwd: a, providerInstanceId: l },
                })
              )._tag !== `Success`
            ) {
              T.current === e && N(`openFailed`);
              return;
            }
            if (T.current !== e) return;
            if (!oe(s, `terminal:operate`)) {
              N(`writeFailed`);
              return;
            }
            let t = await y({ environmentId: s, input: { threadId: mt, terminalId: D, data: i } });
            T.current === e && N(t._tag === `Success` ? `ready` : `writeFailed`);
          })),
          () => {
            (T.current === e && (T.current = null),
              (C.current = C.current.then(async () => {
                oe(s, `terminal:operate`) &&
                  (await x({
                    environmentId: s,
                    input: { threadId: mt, terminalId: D, deleteHistory: !0 },
                  }));
              })));
          }
        );
      }),
      (t[8] = x),
      (t[9] = i),
      (t[10] = a),
      (t[11] = s),
      (t[12] = g),
      (t[13] = l),
      (t[14] = D),
      (t[15] = y),
      (t[16] = F))
    : (F = t[16]);
  let L;
  (t[17] !== x ||
  t[18] !== i ||
  t[19] !== a ||
  t[20] !== s ||
  t[21] !== g ||
  t[22] !== l ||
  t[23] !== A ||
  t[24] !== D ||
  t[25] !== y
    ? ((L = [x, i, a, s, g, l, A, D, y]),
      (t[17] = x),
      (t[18] = i),
      (t[19] = a),
      (t[20] = s),
      (t[21] = g),
      (t[22] = l),
      (t[23] = A),
      (t[24] = D),
      (t[25] = y),
      (t[26] = L))
    : (L = t[26]),
    (0, Z.useEffect)(F, L));
  let R;
  t[27] !== f || t[28] !== i || t[29] !== M
    ? ((R = f
        ? M === `writeFailed`
          ? (0, $.jsxs)($.Fragment, {
              children: [
                `Run `,
                (0, $.jsx)(`code`, { className: `rounded bg-muted px-1 font-mono`, children: i }),
                ` in this terminal.`,
              ],
            })
          : M === `ready`
            ? `Review the command, then press Enter to run it.`
            : M === `openFailed`
              ? `Could not open the setup terminal.`
              : `Preparing command...`
        : `This connection cannot control terminals.`),
      (t[27] = f),
      (t[28] = i),
      (t[29] = M),
      (t[30] = R))
    : (R = t[30]);
  let B;
  t[31] === R
    ? (B = t[32])
    : ((B = (0, $.jsx)(`span`, {
        className: `text-2xs font-medium text-muted-foreground`,
        children: R,
      })),
      (t[31] = R),
      (t[32] = B));
  let V;
  t[33] !== f || t[34] !== s || t[35] !== M
    ? ((V =
        M === `openFailed`
          ? (0, $.jsx)(p, {
              size: `xs`,
              variant: `ghost`,
              disabled: !f,
              onClick: () => {
                oe(s, `terminal:operate`) && j(Lt);
              },
              children: `Retry`,
            })
          : null),
      (t[33] = f),
      (t[34] = s),
      (t[35] = M),
      (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] === r
    ? (H = t[38])
    : ((H = (0, $.jsx)(p, { size: `xs`, variant: `ghost-muted`, onClick: r, children: `Close` })),
      (t[37] = r),
      (t[38] = H));
  let ee;
  t[39] !== V || t[40] !== H
    ? ((ee = (0, $.jsxs)(`div`, { className: `flex items-center gap-1`, children: [V, H] })),
      (t[39] = V),
      (t[40] = H),
      (t[41] = ee))
    : (ee = t[41]);
  let U;
  t[42] !== B || t[43] !== ee
    ? ((U = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between border-b border-border/60 bg-background/60 px-3 py-1.5`,
        children: [B, ee],
      })),
      (t[42] = B),
      (t[43] = ee),
      (t[44] = U))
    : (U = t[44]);
  let te;
  t[45] !== m ||
  t[46] !== a ||
  t[47] !== o ||
  t[48] !== c ||
  t[49] !== r ||
  t[50] !== l ||
  t[51] !== D ||
  t[52] !== P ||
  t[53] !== k
    ? ((te = P
        ? (0, $.jsx)(be, {
            threadRef: k,
            threadId: mt,
            terminalId: D,
            terminalLabel: `Install ${o}`,
            cwd: a,
            providerInstanceId: l,
            advancedTypography: m,
            onSessionExited: r,
            autoFocus: !0,
            visible: !0,
            resizeEpoch: 0,
            drawerHeight: 256,
            keybindings: c,
          })
        : null),
      (t[45] = m),
      (t[46] = a),
      (t[47] = o),
      (t[48] = c),
      (t[49] = r),
      (t[50] = l),
      (t[51] = D),
      (t[52] = P),
      (t[53] = k),
      (t[54] = te))
    : (te = t[54]);
  let W;
  t[55] === te
    ? (W = t[56])
    : ((W = (0, $.jsx)(`div`, { className: `h-64`, children: te })), (t[55] = te), (t[56] = W));
  let G;
  return (
    t[57] !== U || t[58] !== W
      ? ((G = (0, $.jsxs)(`div`, {
          "data-thread-terminal-drawer": !0,
          className: `mt-4 overflow-hidden rounded-lg border border-border/70 bg-background text-foreground`,
          children: [U, W],
        })),
        (t[57] = U),
        (t[58] = W),
        (t[59] = G))
      : (G = t[59]),
    G
  );
}
function Lt(e) {
  return e + 1;
}
var Rt = `This connection cannot import projects or thread history.`;
function zt(e) {
  let t = (0, Q.c)(76),
    { scans: n, isImporting: r, setIsImporting: i, onDone: a } = e,
    { environments: o } = re(),
    s = se(n, P),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { reportFailure: !1 }), (t[0] = c))
    : (c = t[0]);
  let l = ue(U.create, c),
    u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { reportFailure: !1 }), (t[1] = u))
    : (u = t[1]);
  let d = ue(st, u),
    f = ee(),
    [m, h] = (0, Z.useState)(null),
    g = (0, Z.useRef)(``),
    _ = (0, Z.useRef)(0),
    [v, y] = (0, Z.useState)(null),
    b;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = new Map()), (t[2] = b)) : (b = t[2]);
  let x = (0, Z.useRef)(b),
    S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = new Map()), (t[3] = S)) : (S = t[3]);
  let C = (0, Z.useRef)(S),
    w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = []), (t[4] = w)) : (w = t[4]);
  let T = (0, Z.useRef)(w),
    D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = new Map()), (t[5] = D)) : (D = t[5]);
  let O = (0, Z.useRef)(D),
    k = (0, Z.useRef)(0),
    A,
    N;
  (t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => (
        (k.current += 1),
        () => {
          k.current += 1;
        }
      )),
      (N = []),
      (t[6] = A),
      (t[7] = N))
    : ((A = t[6]), (N = t[7])),
    (0, Z.useEffect)(A, N));
  let F, I;
  (t[8] !== v || t[9] !== a || t[10] !== f || t[11] !== i
    ? ((I = () => {
        v !== null &&
          f.some((e) => e.id === v.projectId && e.environmentId === v.environmentId) &&
          (y(null),
          a(v, g.current, _.current).then((e) => {
            e || i(!1);
          }));
      }),
      (F = [v, a, f, i]),
      (t[8] = v),
      (t[9] = a),
      (t[10] = f),
      (t[11] = i),
      (t[12] = F),
      (t[13] = I))
    : ((F = t[12]), (I = t[13])),
    (0, Z.useEffect)(I, F));
  let R, z, V, H;
  if (t[14] !== n || t[15] !== m || t[16] !== s) {
    let { available: e, recent: r } = $e(n.flatMap(Kt));
    ((R = e), (V = m ?? new Set(r.map(Gt))), (z = R.filter((e) => V.has(e.key))));
    let i;
    (t[21] === s ? (i = t[22]) : ((i = (e) => s.has(e.environmentId)), (t[21] = s), (t[22] = i)),
      (H = z.every(i)),
      (t[14] = n),
      (t[15] = m),
      (t[16] = s),
      (t[17] = R),
      (t[18] = z),
      (t[19] = V),
      (t[20] = H));
  } else ((R = t[17]), (z = t[18]), (V = t[19]), (H = t[20]));
  let W = H,
    [G, ne] = (0, Z.useState)(``),
    K = W ? (G === Rt ? `` : G) : Rt,
    q;
  t[23] !== a || t[24] !== i
    ? ((q = () => {
        let e = rt(T.current, C.current, x.current);
        e === void 0 ? a(void 0, g.current, _.current) : (i(!0), y(e));
      }),
      (t[23] = a),
      (t[24] = i),
      (t[25] = q))
    : (q = t[25]);
  let ie = q,
    ae;
  t[26] !== l ||
  t[27] !== ie ||
  t[28] !== d ||
  t[29] !== r ||
  t[30] !== a ||
  t[31] !== n ||
  t[32] !== i
    ? ((ae = async (e) => {
        if (r) return;
        let t = () => e.every(Wt),
          o = () => {
            (i(!1), ne(Rt));
          };
        if (!t()) {
          o();
          return;
        }
        if (e.length === 0) {
          a();
          return;
        }
        (i(!0), (g.current = ``), (_.current = 0), (T.current = e.map(Ut)));
        let s = k.current,
          c = x.current,
          u = O.current,
          f = c.size > 0 ? e.filter((e) => c.has(e.key)).length : 0,
          p = 0,
          m = 0,
          h = new Set();
        for (let n of e) {
          let { environmentId: e } = n;
          if (s !== k.current || c !== x.current) return;
          if (!t()) {
            o();
            return;
          }
          if (c.has(n.key)) continue;
          let r = nt(te(), e, n);
          if (r === null) {
            let t = u.get(n.key);
            if (t === void 0) {
              let e = L();
              ((t = { projectId: e, commandId: B.make(`onboarding:project:create:${e}`) }),
                u.set(n.key, t));
            }
            r = t.projectId;
            let i = await l({
              environmentId: e,
              input: {
                projectId: r,
                commandId: t.commandId,
                title: n.title,
                workspaceRoot: n.path,
                createWorkspaceRootIfMissing: !1,
                defaultModelSelection: null,
              },
            });
            if (s !== k.current || c !== x.current) return;
            if (i._tag !== `Success`) {
              E(i) || (u.delete(n.key), h.add(e));
              continue;
            }
          }
          if (!t()) {
            o();
            return;
          }
          let i = await d({
            environmentId: e,
            input: { projectId: r, expectedWorkspaceRoot: n.path },
          });
          if (s !== k.current || c !== x.current) return;
          i._tag === `Success`
            ? ((p += i.value.importedCount),
              (m += i.value.skippedCount),
              i.value.importedCount > 0 && C.current.set(n.key, j(e, r)),
              i.value.skippedCount === 0 && ((f += 1), c.set(n.key, j(e, r))))
            : E(i) || (u.delete(n.key), h.add(e));
        }
        for (let e of n) h.has(e.environmentId) && e.refresh();
        (i(!1),
          (_.current = p),
          f < e.length &&
            (p > 0 && m > 0
              ? (g.current = `Imported ${p} ${p === 1 ? `thread` : `threads`}. ${m} ${m === 1 ? `thread` : `threads`} could not be imported.`)
              : m > 0
                ? (g.current = `${m} ${m === 1 ? `thread could` : `threads could`} not be imported.`)
                : p > 0
                  ? (g.current = `Imported ${p} ${p === 1 ? `thread` : `threads`}. Some thread history could not be imported.`)
                  : (g.current = `Could not import thread history.`)),
          ie());
      }),
      (t[26] = l),
      (t[27] = ie),
      (t[28] = d),
      (t[29] = r),
      (t[30] = a),
      (t[31] = n),
      (t[32] = i),
      (t[33] = ae))
    : (ae = t[33]);
  let oe = ae;
  if (n.every(Ht) && n.some(Vt)) {
    let e;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`h1`, {
          className: `text-2xl font-semibold tracking-tight text-foreground`,
          children: `Your projects`,
        })),
        (t[34] = e))
      : (e = t[34]);
    let n;
    t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(`div`, {
          className: `flex flex-1 flex-col items-center justify-center gap-3 py-6`,
          children: [
            (0, $.jsx)(M, { size: `lg`, tone: `muted` }),
            (0, $.jsx)(`p`, {
              className: `text-center text-sm text-muted-foreground`,
              children: `Looking for projects from Claude Code and Codex…`,
            }),
          ],
        })),
        (t[35] = n))
      : (n = t[35]);
    let r;
    return (
      t[36] === a
        ? (r = t[37])
        : ((r = (0, $.jsxs)(`div`, {
            className: `flex h-full min-h-40 flex-col`,
            children: [
              e,
              n,
              (0, $.jsx)(`div`, {
                className: `flex justify-end`,
                children: (0, $.jsx)(p, {
                  variant: `ghost-muted`,
                  onClick: () => void a(),
                  children: `Do not import projects`,
                }),
              }),
            ],
          })),
          (t[36] = a),
          (t[37] = r)),
      r
    );
  }
  let ce;
  t[38] !== R || t[39] !== r || t[40] !== z
    ? ((ce =
        R.length > 0
          ? (0, $.jsxs)(`div`, {
              className: `mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground`,
              children: [
                (0, $.jsxs)(`span`, {
                  role: `status`,
                  children: [z.length, ` of `, R.length, ` selected`],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, $.jsx)(p, {
                      variant: `ghost`,
                      size: `xs`,
                      disabled: r || z.length === R.length,
                      onClick: () => h(new Set(R.map(Bt))),
                      children: `Select all`,
                    }),
                    (0, $.jsx)(p, {
                      variant: `ghost`,
                      size: `xs`,
                      disabled: r || z.length === 0,
                      onClick: () => h(new Set()),
                      children: `Select none`,
                    }),
                  ],
                }),
              ],
            })
          : null),
      (t[38] = R),
      (t[39] = r),
      (t[40] = z),
      (t[41] = ce))
    : (ce = t[41]);
  let le;
  if (t[42] !== R || t[43] !== o || t[44] !== r || t[45] !== n || t[46] !== V) {
    let e;
    (t[48] !== R || t[49] !== o || t[50] !== r || t[51] !== n.length || t[52] !== V
      ? ((e = (e) => {
          let t = R.filter((t) => t.environmentId === e.environmentId),
            i = o.find((t) => t.environmentId === e.environmentId)?.label ?? `Computer`;
          return (0, $.jsxs)(
            `fieldset`,
            {
              className: `min-w-0 space-y-0.5`,
              disabled: r,
              children: [
                n.length > 1
                  ? (0, $.jsx)(`legend`, { className: `mb-2 text-sm font-medium`, children: i })
                  : null,
                e.isPending && e.data === null
                  ? (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2 py-3 text-sm text-muted-foreground`,
                      children: [(0, $.jsx)(M, { size: `md` }), `Looking for projects…`],
                    })
                  : e.error === null
                    ? t.length === 0
                      ? (0, $.jsx)(`p`, {
                          className: `py-2 text-sm text-muted-foreground`,
                          children: `No existing Claude Code or Codex projects found.`,
                        })
                      : null
                    : (0, $.jsxs)(`div`, {
                        role: `alert`,
                        className: `flex items-center justify-between gap-3 text-sm text-muted-foreground`,
                        children: [
                          (0, $.jsxs)(`span`, {
                            children: [`Could not check projects. `, e.error],
                          }),
                          (0, $.jsx)(p, {
                            variant: `ghost`,
                            size: `sm`,
                            onClick: e.refresh,
                            children: `Retry`,
                          }),
                        ],
                      }),
                e.data?.truncated
                  ? (0, $.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      role: `status`,
                      children: gt,
                    })
                  : null,
                (0, $.jsx)(qt, { candidates: t, selectedKeys: V, onSelectionChange: h }),
              ],
            },
            e.environmentId,
          );
        }),
        (t[48] = R),
        (t[49] = o),
        (t[50] = r),
        (t[51] = n.length),
        (t[52] = V),
        (t[53] = e))
      : (e = t[53]),
      (le = n.map(e)),
      (t[42] = R),
      (t[43] = o),
      (t[44] = r),
      (t[45] = n),
      (t[46] = V),
      (t[47] = le));
  } else le = t[47];
  let J;
  t[54] === le
    ? (J = t[55])
    : ((J = (0, $.jsx)(me, {
        scrollFade: !0,
        className: `mt-2 h-auto max-h-80`,
        children: (0, $.jsx)(`div`, { className: `space-y-5 pr-3`, children: le }),
      })),
      (t[54] = le),
      (t[55] = J));
  let de;
  t[56] === K
    ? (de = t[57])
    : ((de = K
        ? (0, $.jsx)(`p`, { className: `mt-3 text-sm text-destructive`, children: K })
        : null),
      (t[56] = K),
      (t[57] = de));
  let fe;
  t[58] !== ie || t[59] !== r
    ? ((fe = (0, $.jsx)(p, {
        variant: `ghost-muted`,
        disabled: r,
        onClick: ie,
        children: `Do not import projects`,
      })),
      (t[58] = ie),
      (t[59] = r),
      (t[60] = fe))
    : (fe = t[60]);
  let pe = !W || r || z.length === 0,
    he;
  t[61] !== oe || t[62] !== z
    ? ((he = () => void oe(z)), (t[61] = oe), (t[62] = z), (t[63] = he))
    : (he = t[63]);
  let ge = r ? `Importing…` : `Import ${z.length} ${z.length === 1 ? `project` : `projects`}`,
    Y;
  t[64] !== pe || t[65] !== he || t[66] !== ge
    ? ((Y = (0, $.jsx)(p, { autoFocus: !0, disabled: pe, onClick: he, children: ge })),
      (t[64] = pe),
      (t[65] = he),
      (t[66] = ge),
      (t[67] = Y))
    : (Y = t[67]);
  let X;
  t[68] !== fe || t[69] !== Y
    ? ((X = (0, $.jsxs)(`div`, {
        className: `mt-6 flex flex-wrap items-center justify-end gap-3`,
        children: [fe, Y],
      })),
      (t[68] = fe),
      (t[69] = Y),
      (t[70] = X))
    : (X = t[70]);
  let _e;
  return (
    t[71] !== ce || t[72] !== J || t[73] !== de || t[74] !== X
      ? ((_e = (0, $.jsxs)(tn, {
          title: `Import your projects`,
          description: `Import projects and conversations from Claude Code and Codex on your selected computers.`,
          children: [ce, J, de, X],
        })),
        (t[71] = ce),
        (t[72] = J),
        (t[73] = de),
        (t[74] = X),
        (t[75] = _e))
      : (_e = t[75]),
    _e
  );
}
function Bt(e) {
  return e.key;
}
function Vt(e) {
  return e.isPending;
}
function Ht(e) {
  return e.data === null;
}
function Ut(e) {
  return e.key;
}
function Wt(e) {
  return oe(e.environmentId, P);
}
function Gt(e) {
  return e.key;
}
function Kt(e) {
  return (e.data?.candidates ?? []).map((t) => ({
    ...t,
    environmentId: e.environmentId,
    key: at(e.environmentId, t.path),
  }));
}
function qt(e) {
  let t = (0, Q.c)(23),
    { candidates: n, selectedKeys: r, onSelectionChange: a } = e,
    o,
    s,
    c,
    l;
  if (t[0] !== n || t[1] !== a || t[2] !== r) {
    let { repositories: e, other: i } = tt(n);
    o = i;
    let u;
    (t[7] !== a || t[8] !== r
      ? ((u = (e, t) => {
          let n = new Set(r);
          for (let r of e) t ? n.add(r) : n.delete(r);
          a(n);
        }),
        (t[7] = a),
        (t[8] = r),
        (t[9] = u))
      : (u = t[9]),
      (c = u));
    let d;
    (t[10] === r ? (d = t[11]) : ((d = (e) => r.has(e.key)), (t[10] = r), (t[11] = d)),
      (s = o.filter(d).length));
    let f;
    (t[12] !== r || t[13] !== c
      ? ((f = (e) => (0, $.jsx)(Yt, { group: e, selectedKeys: r, onToggle: c }, e.key)),
        (t[12] = r),
        (t[13] = c),
        (t[14] = f))
      : (f = t[14]),
      (l = e.map(f)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l));
  } else ((o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]));
  let u;
  t[15] !== o || t[16] !== s || t[17] !== r || t[18] !== c
    ? ((u =
        o.length > 0
          ? (0, $.jsxs)(_e, {
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-muted/40`,
                  children: [
                    (0, $.jsx)(ne, {
                      checked: s === o.length,
                      indeterminate: s > 0 && s < o.length,
                      onCheckedChange: (e) => c(o.map(Jt), e === !0),
                    }),
                    (0, $.jsxs)(X, {
                      className: `group flex min-w-0 flex-1 items-center gap-1.5 text-left`,
                      children: [
                        (0, $.jsx)(i, {
                          className: `size-3.5 shrink-0 text-muted-foreground transition-transform group-data-panel-open:rotate-90`,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `truncate text-sm text-muted-foreground`,
                          children: `Other folders`,
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `ml-auto shrink-0 text-xs text-muted-foreground tabular-nums`,
                          children: [o.length, ` `, o.length === 1 ? `folder` : `folders`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(Y, {
                  children: o.map((e) =>
                    (0, $.jsx)(
                      $t,
                      {
                        candidate: e,
                        path: e.path,
                        nested: !0,
                        checked: r.has(e.key),
                        onCheckedChange: (t) => c([e.key], t),
                      },
                      e.key,
                    ),
                  ),
                }),
              ],
            })
          : null),
      (t[15] = o),
      (t[16] = s),
      (t[17] = r),
      (t[18] = c),
      (t[19] = u))
    : (u = t[19]);
  let d;
  return (
    t[20] !== l || t[21] !== u
      ? ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })), (t[20] = l), (t[21] = u), (t[22] = d))
      : (d = t[22]),
    d
  );
}
function Jt(e) {
  return e.key;
}
function Yt(e) {
  let t = (0, Q.c)(53),
    { group: n, selectedKeys: r, onToggle: a } = e,
    o,
    s;
  if (t[0] !== n.candidates || t[1] !== r) {
    o = n.candidates.map(Zt);
    let e;
    (t[4] === r ? (e = t[5]) : ((e = (e) => r.has(e)), (t[4] = r), (t[5] = e)),
      (s = o.filter(e)),
      (t[0] = n.candidates),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s));
  } else ((o = t[2]), (s = t[3]));
  let c = s.length,
    l = n.candidates.length === 1,
    u = n.candidates[0];
  if (l && u !== void 0) {
    let e = n.label,
      i = u.path,
      o;
    t[6] !== u.key || t[7] !== r
      ? ((o = r.has(u.key)), (t[6] = u.key), (t[7] = r), (t[8] = o))
      : (o = t[8]);
    let s;
    t[9] !== a || t[10] !== u.key
      ? ((s = (e) => a([u.key], e)), (t[9] = a), (t[10] = u.key), (t[11] = s))
      : (s = t[11]);
    let c;
    return (
      t[12] !== n.label || t[13] !== u || t[14] !== o || t[15] !== s
        ? ((c = (0, $.jsx)($t, {
            candidate: u,
            label: e,
            path: i,
            checked: o,
            onCheckedChange: s,
          })),
          (t[12] = n.label),
          (t[13] = u),
          (t[14] = o),
          (t[15] = s),
          (t[16] = c))
        : (c = t[16]),
      c
    );
  }
  let d = c === o.length,
    f = c > 0 && c < o.length,
    p;
  t[17] !== o || t[18] !== a
    ? ((p = (e) => a(o, e === !0)), (t[17] = o), (t[18] = a), (t[19] = p))
    : (p = t[19]);
  let m;
  t[20] !== d || t[21] !== f || t[22] !== p
    ? ((m = (0, $.jsx)(ne, { checked: d, indeterminate: f, onCheckedChange: p })),
      (t[20] = d),
      (t[21] = f),
      (t[22] = p),
      (t[23] = m))
    : (m = t[23]);
  let h;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(i, {
        className: `size-3.5 shrink-0 text-muted-foreground transition-transform group-data-panel-open:rotate-90`,
      })),
      (t[24] = h))
    : (h = t[24]);
  let g;
  t[25] === n.label
    ? (g = t[26])
    : ((g = (0, $.jsx)(`span`, { className: `truncate text-sm font-medium`, children: n.label })),
      (t[25] = n.label),
      (t[26] = g));
  let _;
  t[27] === n.candidates
    ? (_ = t[28])
    : ((_ = new Set(n.candidates.flatMap(Xt))), (t[27] = n.candidates), (t[28] = _));
  let v;
  t[29] === _ ? (v = t[30]) : ((v = [..._]), (t[29] = _), (t[30] = v));
  let y;
  t[31] !== n.lastActiveAt || t[32] !== n.threadCount || t[33] !== v
    ? ((y = (0, $.jsx)(en, {
        sources: v,
        threadCount: n.threadCount,
        lastActiveAt: n.lastActiveAt,
      })),
      (t[31] = n.lastActiveAt),
      (t[32] = n.threadCount),
      (t[33] = v),
      (t[34] = y))
    : (y = t[34]);
  let b;
  t[35] !== y || t[36] !== g
    ? ((b = (0, $.jsxs)(X, {
        className: `group flex min-w-0 flex-1 items-center gap-1.5 text-left`,
        children: [h, g, y],
      })),
      (t[35] = y),
      (t[36] = g),
      (t[37] = b))
    : (b = t[37]);
  let x;
  t[38] !== b || t[39] !== m
    ? ((x = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-muted/40`,
        children: [m, b],
      })),
      (t[38] = b),
      (t[39] = m),
      (t[40] = x))
    : (x = t[40]);
  let S;
  if (t[41] !== n.candidates || t[42] !== a || t[43] !== r) {
    let e;
    (t[45] !== a || t[46] !== r
      ? ((e = (e) =>
          (0, $.jsx)(
            $t,
            {
              candidate: e,
              path: e.path,
              nested: !0,
              checked: r.has(e.key),
              onCheckedChange: (t) => a([e.key], t),
            },
            e.key,
          )),
        (t[45] = a),
        (t[46] = r),
        (t[47] = e))
      : (e = t[47]),
      (S = n.candidates.map(e)),
      (t[41] = n.candidates),
      (t[42] = a),
      (t[43] = r),
      (t[44] = S));
  } else S = t[44];
  let C;
  t[48] === S ? (C = t[49]) : ((C = (0, $.jsx)(Y, { children: S })), (t[48] = S), (t[49] = C));
  let w;
  return (
    t[50] !== x || t[51] !== C
      ? ((w = (0, $.jsxs)(_e, { defaultOpen: !0, children: [x, C] })),
        (t[50] = x),
        (t[51] = C),
        (t[52] = w))
      : (w = t[52]),
    w
  );
}
function Xt(e) {
  return e.sources;
}
function Zt(e) {
  return e.key;
}
function Qt(e) {
  let t = (0, Q.c)(12),
    { path: n, className: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = it(n)), (t[0] = n), (t[1] = i));
  let { name: a, parent: o } = i,
    s;
  t[2] === r
    ? (s = t[3])
    : ((s = R(`flex min-w-0 items-baseline font-mono`, r)), (t[2] = r), (t[3] = s));
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = o.length > 0 ? (0, $.jsx)(`span`, { className: `truncate`, children: o }) : null),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, { className: `max-w-full shrink-0 truncate`, children: a })),
      (t[6] = a),
      (t[7] = l));
  let u;
  return (
    t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = (0, $.jsxs)(`span`, { className: s, children: [c, l] })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function $t(e) {
  let t = (0, Q.c)(30),
    { candidate: n, label: r, path: i, nested: a, checked: o, onCheckedChange: s } = e,
    c = a !== void 0 && a,
    l = c && `pl-8`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = R(
        `flex cursor-pointer items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-muted/40 has-disabled:cursor-default`,
        l,
      )),
      (t[0] = l),
      (t[1] = u));
  let d;
  t[2] === s ? (d = t[3]) : ((d = (e) => s(e === !0)), (t[2] = s), (t[3] = d));
  let p;
  t[4] !== o || t[5] !== d
    ? ((p = (0, $.jsx)(ne, { checked: o, onCheckedChange: d })), (t[4] = o), (t[5] = d), (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(`span`, { className: `flex min-w-0 flex-1 items-baseline gap-2 truncate` })),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === r
    ? (h = t[9])
    : ((h =
        r === void 0
          ? null
          : (0, $.jsx)(`span`, { className: `truncate text-sm font-medium`, children: r })),
      (t[8] = r),
      (t[9] = h));
  let g;
  t[10] !== r || t[11] !== i
    ? ((g =
        i === void 0
          ? null
          : (0, $.jsx)(Qt, {
              path: i,
              className: r === void 0 ? `text-xs` : `text-2xs text-muted-foreground`,
            })),
      (t[10] = r),
      (t[11] = i),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== h || t[14] !== g
    ? ((_ = (0, $.jsxs)(C, { render: m, children: [h, g] })), (t[13] = h), (t[14] = g), (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === n.path
    ? (v = t[17])
    : ((v = (0, $.jsx)(x, { variant: `code`, children: n.path })), (t[16] = n.path), (t[17] = v));
  let y;
  t[18] !== v || t[19] !== _
    ? ((y = (0, $.jsxs)(f, { children: [_, v] })), (t[18] = v), (t[19] = _), (t[20] = y))
    : (y = t[20]);
  let b = c ? null : n.sources,
    S;
  t[21] !== n.lastActiveAt || t[22] !== n.threadCount || t[23] !== b
    ? ((S = (0, $.jsx)(en, {
        sources: b,
        threadCount: n.threadCount,
        lastActiveAt: n.lastActiveAt,
      })),
      (t[21] = n.lastActiveAt),
      (t[22] = n.threadCount),
      (t[23] = b),
      (t[24] = S))
    : (S = t[24]);
  let w;
  return (
    t[25] !== y || t[26] !== S || t[27] !== u || t[28] !== p
      ? ((w = (0, $.jsxs)(`label`, { className: u, children: [p, y, S] })),
        (t[25] = y),
        (t[26] = S),
        (t[27] = u),
        (t[28] = p),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function en(e) {
  let t = (0, Q.c)(19),
    { sources: n, threadCount: r, lastActiveAt: i } = e,
    a;
  t[0] === i ? (a = t[1]) : ((a = i === null ? null : pe(i)), (t[0] = i), (t[1] = a));
  let o = a,
    s = o === null ? `` : o.suffix === null ? `now` : o.value,
    c;
  t[2] === n
    ? (c = t[3])
    : ((c = n?.includes(`claudeAgent`)
        ? (0, $.jsx)(`span`, {
            role: `img`,
            "aria-label": `Claude Code`,
            children: (0, $.jsx)(Fe, {
              driverKind: w.make(`claudeAgent`),
              displayName: `Claude Code`,
              iconClassName: `size-3`,
            }),
          })
        : null),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === c
    ? (l = t[5])
    : ((l = (0, $.jsx)(`span`, {
        className: `flex size-4 items-center justify-center`,
        children: c,
      })),
      (t[4] = c),
      (t[5] = l));
  let u;
  t[6] === n
    ? (u = t[7])
    : ((u = n?.includes(`codex`)
        ? (0, $.jsx)(`span`, {
            role: `img`,
            "aria-label": `Codex`,
            children: (0, $.jsx)(Fe, {
              driverKind: w.make(`codex`),
              displayName: `Codex`,
              iconClassName: `size-3`,
            }),
          })
        : null),
      (t[6] = n),
      (t[7] = u));
  let d;
  t[8] === u
    ? (d = t[9])
    : ((d = (0, $.jsx)(`span`, {
        className: `flex size-4 items-center justify-center`,
        children: u,
      })),
      (t[8] = u),
      (t[9] = d));
  let f;
  t[10] === r
    ? (f = t[11])
    : ((f = (0, $.jsx)(`span`, { className: `text-right`, children: r })),
      (t[10] = r),
      (t[11] = f));
  let p;
  t[12] === s
    ? (p = t[13])
    : ((p = (0, $.jsx)(`span`, { className: `text-right whitespace-nowrap`, children: s })),
      (t[12] = s),
      (t[13] = p));
  let m;
  return (
    t[14] !== l || t[15] !== d || t[16] !== f || t[17] !== p
      ? ((m = (0, $.jsxs)(`span`, {
          className: `ml-auto grid shrink-0 grid-cols-[1rem_1rem_2.5rem_2.25rem] items-center gap-x-1 text-xs text-muted-foreground tabular-nums`,
          children: [l, d, f, p],
        })),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
function tn(e) {
  let t = (0, Q.c)(8),
    { title: n, description: r, children: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold tracking-tight text-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = r
        ? (0, $.jsx)(`p`, {
            className: `mt-2.5 text-sm leading-relaxed text-muted-foreground`,
            children: r,
          })
        : null),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((s = (0, $.jsxs)($.Fragment, { children: [a, o, i] })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var nn = O(V);
function rn() {
  let e = (0, Q.c)(14),
    { authGateState: t } = Ne.useRouteContext(),
    n = de(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { select: on }), (e[0] = r))
    : (r = e[0]);
  let i = fe(r),
    a;
  e[1] === i
    ? (a = e[2])
    : ((a = i.startsWith(`agents:`) ? T(nn(i.slice(7))) : void 0), (e[1] = i), (e[2] = a));
  let o = a,
    s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { select: an }), (e[3] = s))
    : (s = e[3]);
  let c = fe(s),
    [l, u] = (0, Z.useState)(!1),
    d = xe(),
    f = t.status === `authenticated`,
    p;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(Be, {})), (e[4] = p))
    : (p = e[4]);
  let m;
  e[5] !== l || e[6] !== c || e[7] !== f || e[8] !== n || e[9] !== d || e[10] !== o
    ? ((m =
        c && !l
          ? (0, $.jsx)(_t, {
              localAvailable: f,
              resumeEnvironmentId: o,
              onDone: async (e) => {
                (u(!0),
                  e === void 0
                    ? await n({ to: `/`, replace: !0 })
                    : await d(e, { replace: !0 }).catch(() => n({ to: `/`, replace: !0 })));
              },
            })
          : null),
      (e[5] = l),
      (e[6] = c),
      (e[7] = f),
      (e[8] = n),
      (e[9] = d),
      (e[10] = o),
      (e[11] = m))
    : (m = e[11]);
  let h;
  return (
    e[12] === m
      ? (h = e[13])
      : ((h = (0, $.jsxs)($.Fragment, { children: [p, m] })), (e[12] = m), (e[13] = h)),
    h
  );
}
function an(e) {
  return e.pathname === `/welcome`;
}
function on(e) {
  return e.hash;
}
export { rn as component };
//# sourceMappingURL=welcome-BXbTeRX-.js.map
