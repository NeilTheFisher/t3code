import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import {
  Cs as r,
  Dc as i,
  Gl as a,
  Hl as o,
  Ix as s,
  JC as c,
  Lf as l,
  Lp as u,
  Mu as d,
  Px as ee,
  QC as f,
  Q_ as p,
  Qf as m,
  Rf as te,
  Sh as h,
  Ss as g,
  Sx as ne,
  Uf as re,
  Ul as ie,
  Uy as ae,
  VC as oe,
  Vf as se,
  Vl as _,
  WC as ce,
  Wl as le,
  XC as ue,
  ZC as v,
  Zo as de,
  _S as fe,
  aS as pe,
  ap as me,
  bs as he,
  cp as y,
  dC as ge,
  df as _e,
  du as b,
  dw as ve,
  ew as ye,
  ex as be,
  fu as xe,
  hs as Se,
  hx as Ce,
  iS as x,
  jc as S,
  kS as C,
  lS as we,
  lw as Te,
  lx as w,
  mS as Ee,
  nx as De,
  ox as Oe,
  pv as ke,
  pw as Ae,
  qC as je,
  qf as T,
  rf as Me,
  sp as Ne,
  tS as Pe,
  ux as Fe,
  vS as Ie,
  vs as Le,
  ws as E,
  wy as Re,
  ys as ze,
  zf as D,
} from "./utils-CPoejuy5.js";
import {
  At as Be,
  Ct as Ve,
  J as He,
  Jt as Ue,
  K as We,
  Qt as Ge,
  T as Ke,
  Tt as qe,
  X as Je,
  Xt as Ye,
  Yt as Xe,
  Zt as Ze,
  bt as Qe,
  en as O,
  jt as $e,
  nn as et,
  nt as tt,
  qt as k,
  rn as nt,
  t as A,
  tn as rt,
  tt as it,
} from "./runtime-CY2dlMEg.js";
import { q as at } from "./useSettings-N-JG2LFZ.js";
import { t as j } from "./catalog-BMZrLgnL.js";
import { m as ot, n as M } from "./server-3D32GveR.js";
var N = n(),
  st = {
    "~effect/RequestResolver": { _A: ve, _R: ve },
    pipe() {
      return Ae(this, arguments);
    },
  },
  ct = (e) => {
    let t = Object.create(st);
    return (
      (t.batchKey = e.batchKey),
      (t.preCheck = e.preCheck),
      (t.delay = e.delay),
      (t.collectWhile = e.collectWhile),
      (t.runAll = e.runAll),
      t
    );
  },
  P = 6e4,
  lt = 1024,
  ut = class extends Ie {};
function dt(e) {
  let t = new WeakMap(),
    n = new WeakMap(),
    r = new WeakMap(),
    i = new Map(),
    a = (e) => JSON.stringify([e.environmentId, e.threadId]),
    o = l((e) =>
      D((t) => {
        let n = i.get(e);
        (n || ((n = { readers: 0, sessions: new WeakMap() }), i.set(e, n)),
          n.readers++,
          t.addFinalizer(() => {
            --n.readers === 0 && i.delete(e);
          }));
      }).pipe(re(0), T(`file-metadata-thread:${e}`)),
    ),
    c = l((e) => D(0).pipe(T(`file-metadata-revision:${e}`))),
    f = (e, t) => c(JSON.stringify([e, g(t)])),
    p = (e, n, r) => {
      let i = g(n),
        a = t.get(e)?.get(i);
      return a && a.expires > r ? a : void 0;
    },
    m = (e, n, r, a, o = !1) => {
      let s = t.get(e);
      s || ((s = new Map()), t.set(e, s));
      let c = g(n);
      s.delete(c);
      let l = { value: r, expires: a + P };
      s.set(c, l);
      for (let t of i.values()) {
        let n = t.sessions.get(e),
          i = n?.get(c);
        n &&
          i &&
          n.set(c, { ...l, value: o && r && i.value?.kind === r.kind ? { ...i.value, ...r } : r });
      }
      if (s.size > lt) {
        let e = s.keys().next().value;
        e !== void 0 && s.delete(e);
      }
    },
    te = ct({
      batchKey: (e) => e.request.session,
      delay: fe,
      collectWhile: (e) => e.size < 64,
      runAll: w(function* (e) {
        let t = e[0].request.session,
          n = [...e];
        for (; n.length > 0;) {
          let i = [...new Set(n.map((e) => e.request.path))],
            a = r.get(t);
          a || ((a = new Map()), r.set(t, a));
          let o = new Map(i.map((e) => [e, { valid: !0 }]));
          for (let [e, t] of o) {
            let n = a.get(e);
            (n || a.set(e, (n = new Set())), n.add(t));
          }
          let s = a;
          n = yield* Ce(function* () {
            let r = yield* b(u.filesystemGetMetadata, { paths: i }).pipe(
                ee(d, e[0].request.supervisor),
              ),
              a = yield* C,
              s = new Map(i.map((e, t) => [e, r.entries[t] ?? null])),
              c = [];
            for (let e of n) {
              if (!o.get(e.request.path).valid) {
                c.push(e);
                continue;
              }
              let n = s.get(e.request.path) ?? null;
              (m(t, e.request.path, n, a),
                e.request.retained?.set(e.request.path, { value: n, expires: a + P }),
                e.completeUnsafe(ge(n)));
            }
            return c;
          }).pipe(
            be(
              x(() => {
                for (let [e, t] of o) {
                  let n = s.get(e);
                  (n?.delete(t), n?.size === 0 && s.delete(e));
                }
              }),
            ),
          );
        }
      }),
    }),
    ne = ie(e, {
      label: `environment-data:filesystem:metadata`,
      staleTimeMs: P,
      idleTtlMs: P,
      execute: w(function* (e) {
        let t = yield* d,
          n = yield* h(t.session);
        if (n._tag === `None`) return null;
        let r = e.threadId
            ? i.get(a({ environmentId: t.target.environmentId, threadId: e.threadId }))
            : void 0,
          o = r?.sessions.get(n.value);
        r && !o && ((o = new Map()), r.sessions.set(n.value, o));
        let c = o?.get(e.path);
        if (c) return c.value;
        let l = yield* C,
          u = p(n.value, e.path, l);
        return u
          ? (o?.set(e.path, u), u.value)
          : yield* s(
              new ut({
                path: e.path,
                session: n.value,
                supervisor: t,
                ...(o ? { retained: o } : {}),
              }),
              te,
            );
      }),
      refreshTrigger: ({ environmentId: e, input: t }) => f(e, t.path),
    }),
    ae = (e) => ne({ ...e, input: { ...e.input, path: g(e.input.path) } }),
    oe = w(function* (e, t, n) {
      let r = yield* d,
        i = yield* h(r.session);
      if (i._tag === `None`) return;
      let a = yield* C;
      if (!n || n(i.value))
        for (let n of t) {
          let t = E(n.path, e);
          p(i.value, t, a)?.value?.kind !== n.kind && m(i.value, t, { kind: n.kind }, a, !0);
        }
    }),
    se = w(function* (e) {
      let a = yield* d,
        o = yield* h(a.session);
      if (o._tag === `Some`) {
        n.set(o.value, (n.get(o.value) ?? 0) + 1);
        let a = g(e);
        for (let e of r.get(o.value)?.get(a) ?? []) e.valid = !1;
        t.get(o.value)?.delete(a);
        for (let t of i.values()) t.sessions.get(o.value)?.delete(g(e));
      }
    });
  return {
    metadata: ae,
    retainThread: (e) => o(a(e)),
    rememberEntries: oe,
    rememberFile: w(function* (e, t, n) {
      let r = yield* d,
        i = yield* h(r.session);
      if (i._tag === `None`) return;
      let a = E(t.relativePath, e),
        o = yield* C;
      if (n && !n(i.value)) return;
      let s = p(i.value, a, o)?.value;
      m(i.value, a, { ...s, kind: `file`, byteLength: t.byteLength }, o, !0);
    }),
    seedAfterRead: w(function* (e, t) {
      let r = yield* d,
        i = yield* h(r.session),
        a = i._tag === `Some` ? (n.get(i.value) ?? 0) : 0,
        o = yield* e;
      return (yield* t(o, (e) => i._tag === `Some` && e === i.value && (n.get(e) ?? 0) === a), o);
    }),
    invalidate: se,
    refreshPath: (e, t, n) => {
      let r = f(e, t);
      n.set(r, n.get(r) + 1);
    },
  };
}
function ft(e) {
  return JSON.stringify([e.environmentId, e.cwd, e.relativePath]);
}
function F(e, t) {
  return new Set([t.relativePath, e.relativePath].map((t) => E(t, e.cwd)));
}
var pt = class extends ae()(`ScratchProjectNotLoadedError`, { projectId: Re }) {
  get message() {
    return `The folder for threads without a project has not reached this device yet. Try again.`;
  }
};
function mt(e, t) {
  let n = dt(e),
    r = _(),
    i = _(),
    s = l((e) => D(null).pipe(T(`environment-data:projects:optimistic-file:${e}`))),
    c = {
      mode: `serial`,
      key: ({ environmentId: e, input: t }) => JSON.stringify([e, t.projectId]),
    };
  return {
    fileMetadata: n.metadata,
    fileMetadataThread: n.retainThread,
    invalidateFileMetadata: o(e, {
      label: `environment-data:filesystem:invalidate-metadata`,
      execute: (e, t, r) =>
        Fe([...new Set(e.paths)], (e) =>
          n.invalidate(e).pipe(pe(() => x(() => n.refreshPath(r, e, t)))),
        ),
    }),
    searchEntries: a(e, {
      label: `environment-data:projects:search-entries`,
      tag: u.projectsSearchEntries,
      staleTimeMs: 15e3,
      execute: (e) =>
        n.seedAfterRead(b(u.projectsSearchEntries, e), (t, r) =>
          n.rememberEntries(e.cwd, t.entries, r),
        ),
    }),
    listEntries: a(e, {
      label: `environment-data:projects:list-entries`,
      tag: u.projectsListEntries,
      staleTimeMs: 3e4,
      idleTtlMs: 3e5,
      execute: (e) =>
        n.seedAfterRead(b(u.projectsListEntries, e), (t, r) =>
          n.rememberEntries(e.cwd, t.entries, r),
        ),
    }),
    listIgnoredFiles: a(e, {
      label: `environment-data:projects:list-ignored-files`,
      tag: u.projectsListIgnoredFiles,
      staleTimeMs: 15e3,
    }),
    readFile: a(e, {
      label: `environment-data:projects:read-file`,
      tag: u.projectsReadFile,
      staleTimeMs: 3e4,
      idleTtlMs: 3e5,
      execute: (e) =>
        n.seedAfterRead(b(u.projectsReadFile, e), (t, r) =>
          t.exists === !1 ? Ee : n.rememberFile(e.cwd, t, r),
        ),
    }),
    optimisticFile: (e) => s(ft(e)),
    create: o(e, {
      label: `environment-data:commands:project:create`,
      execute: (e) => rt(e),
      scheduler: r,
      concurrency: c,
    }),
    update: o(e, {
      label: `environment-data:commands:project:update`,
      execute: (e) => nt(e),
      scheduler: r,
      concurrency: c,
    }),
    delete: o(e, {
      label: `environment-data:commands:project:delete`,
      execute: (e) => et(e),
      scheduler: r,
      concurrency: c,
    }),
    openScratch: o(e, {
      label: `environment-data:projects:open-scratch`,
      execute: (e, n, r) =>
        b(u.projectsEnsureScratch, e).pipe(
          Oe(({ projectId: e }) =>
            m(n, t.projectAtom({ environmentId: r, projectId: e })).pipe(
              p(Te),
              ke,
              we(`10 seconds`),
              ne(ce),
              Oe(ye({ onSome: Pe, onNone: () => De(new pt({ projectId: e })) })),
            ),
          ),
        ),
      scheduler: r,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    createNew: le(e, {
      label: `environment-data:projects:create-new`,
      tag: u.projectsCreateNew,
      scheduler: r,
      concurrency: { mode: `serial`, key: ({ environmentId: e }) => e },
    }),
    writeFile: le(e, {
      label: `environment-data:projects:write-file`,
      tag: u.projectsWriteFile,
      scheduler: i,
      concurrency: {
        mode: `serial`,
        key: ({ environmentId: e, input: t }) => JSON.stringify([e, t.cwd, t.relativePath]),
      },
      execute: (e) => xe(u.projectsWriteFile, e).pipe(pe((t) => Fe(F(e, t), n.invalidate))),
      onSuccess: ({ environmentId: e, input: t }, r, i) =>
        x(() => {
          for (let a of F(t, i)) n.refreshPath(e, a, r);
        }),
    }),
  };
}
var ht = Object.freeze([]),
  gt = new Map();
function _t(e) {
  let t = l((t) =>
      D((n) => n(e.snapshotAtom(t))?.projects ?? ht).pipe(T(`environment-projects:${t}`)),
    ),
    n = l((e) =>
      D((n) => {
        let r = n(t(e));
        return r.length === 0 ? gt : new Map(r.map((e) => [e.id, e]));
      }).pipe(T(`environment-project-index:${e}`)),
    ),
    r = l((e) => {
      let n = [];
      return D((r) => {
        let i = r(t(e)).map((t) => ({ environmentId: e, projectId: t.id }));
        return Ze(n, i) ? n : ((n = i), i);
      }).pipe(T(`environment-project-refs:${e}`));
    }),
    i = l((t) => {
      let r = Ue(t),
        i = null,
        a = !1,
        o = null;
      return D((t) => {
        let s = t(n(r.environmentId)).get(r.projectId) ?? null,
          c =
            s !== null &&
            St(
              s,
              e.serverConfigValueAtom
                ? t(e.serverConfigValueAtom(r.environmentId))?.scratchWorkspaceRoot
                : null,
            );
        return (
          (s === i && c === a) ||
            ((i = s),
            (a = c),
            (o =
              s === null ? null : { ...de(r.environmentId, s), ...(c ? { isScratch: !0 } : {}) })),
          o
        );
      }).pipe(T(`environment-project:${t}`));
    }),
    a = [],
    o = D((t) => {
      let n = [];
      for (let i of O(t(e.catalogValueAtom))) n.push(...t(r(i)));
      return Ze(a, n) ? a : ((a = n), n);
    }).pipe(T(`environment-project-refs`)),
    s = [];
  return {
    environmentProjectsAtom: t,
    environmentProjectIndexAtom: n,
    environmentProjectRefsAtom: r,
    projectRefsAtom: o,
    projectsAtom: D((e) => {
      let t = e(o).flatMap((t) => {
        let n = e(i(Ye(t)));
        return n === null ? [] : [n];
      });
      return (k(s, t) || (s = t), s);
    }).pipe(T(`environment-project-list`)),
    projectConfigsReadyAtom: D((t) => {
      let n = t(e.catalogValueAtom);
      if (!n.isReady) return !1;
      for (let r of O(n))
        if (e.serverConfigValueAtom && t(e.serverConfigValueAtom(r)) === null) return !1;
      return !0;
    }).pipe(T(`environment-project-configs-ready`)),
    projectAtom: (e) => i(Ye(e)),
  };
}
var I = (e) => /^win(dows)?/i.test(e);
function L(e) {
  return he(e) || Le(e) ? `windows` : e.startsWith(`/`) ? `unix` : null;
}
function R(e) {
  let t = L(e);
  return t === `windows` ? `\\` : t === `unix` ? `/` : e.includes(`\\`) ? `\\` : `/`;
}
function z(e) {
  return (L(e) === `unix` ? /\/$/ : /[\\/]$/).test(e);
}
function B(e, t) {
  return e.split(t === `/` ? /\/+/ : /[\\/]+/).filter(Boolean);
}
function V(e) {
  return L(e) === `unix` ? e.lastIndexOf(`/`) : Math.max(e.lastIndexOf(`/`), e.lastIndexOf(`\\`));
}
function H(e) {
  if (he(e)) {
    let t = `${e.slice(0, 2)}\\`;
    return { root: t, separator: `\\`, segments: B(e.slice(t.length), `\\`) };
  }
  if (Le(e)) {
    let [t, n, ...r] = B(e, `\\`);
    return !t || !n ? null : { root: `\\\\${t}\\${n}\\`, separator: `\\`, segments: r };
  }
  return e.startsWith(`/`) ? { root: `/`, separator: `/`, segments: B(e.slice(1), `/`) } : null;
}
function vt(e, t = ``) {
  let n = I(t);
  return (
    e.startsWith(`./`) ||
    e.startsWith(`../`) ||
    e.startsWith(`.\\`) ||
    e.startsWith(`..\\`) ||
    e.startsWith(`/`) ||
    e.startsWith(`~/`) ||
    (n && ze(e))
  );
}
function yt(e, t) {
  return ze(e) && !I(t);
}
function bt(e, t) {
  let n = e.trim();
  if (!Se(n) || !t) return r(n);
  let i = H(r(t));
  if (!i) return r(n);
  let a = [...i.segments];
  for (let e of n.split(/[\\/]+/))
    e.length !== 0 && e !== `.` && (e === `..` ? a.pop() : a.push(e));
  let o = a.join(i.separator);
  return r(o.length === 0 ? i.root : `${i.root}${o}`);
}
function xt(e, t) {
  let n = g(t);
  if (n.length !== 0)
    return e.find((e) => {
      let t = e.workspaceRoot ?? e.cwd;
      return t ? g(t) === n : !1;
    });
}
function St(e, t) {
  return t != null && xt([e], t) !== void 0;
}
function Ct(e) {
  let t = r(e),
    n = H(t);
  return n ? (n.segments.findLast(Boolean) ?? t) : (t.split(/[/\\]/).findLast(Boolean) ?? t);
}
function wt(e, t) {
  let n = R(e);
  return `${Et(e)}${t}${n}`;
}
function Tt(e) {
  let t = V(e);
  return e.slice(t + 1);
}
function Et(e) {
  if (z(e)) return e;
  let t = V(e);
  return t < 0 ? e : e.slice(0, t + 1);
}
function Dt(e) {
  let t = e.trim();
  return t.length === 0 || z(t) ? t : `${t}${R(t)}`;
}
function Ot(e) {
  let t = r(e),
    n = H(t);
  if (n) {
    if (n.segments.length === 0) return null;
    if (n.segments.length === 1) return n.root;
    let e = n.segments.slice(0, -1).join(n.separator);
    return `${n.root}${e}${n.separator}`;
  }
  let i = R(e),
    a = V(t);
  return a < 0
    ? null
    : a === 2 && /^[a-zA-Z]:/.test(t)
      ? `${t.slice(0, 2)}${i}`
      : t.slice(0, a + 1);
}
function kt(e) {
  return z(e) && Ot(e) !== null;
}
function At(e) {
  return l((t) =>
    D((n) => ye(y(n(e(t))), { onNone: () => null, onSome: (e) => c(e.snapshot) })).pipe(
      T(`environment-snapshot:${t}`),
    ),
  );
}
var jt = $e(A),
  U = Be(A),
  Mt = At(U.stateAtom),
  Nt = D(null).pipe(T(`web-environment-shell-status:none`)),
  Pt = D(!1).pipe(T(`web-environment-shell-has-snapshot:none`));
function Ft(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? Nt : U.statusAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function It(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? Pt : U.hasSnapshotAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
var W = new Set(),
  Lt = D((e) => {
    let t = new Set();
    for (let n of O(e(j.catalogValueAtom))) e(U.statusAtom(n)) === `live` && t.add(n);
    return t.size === W.size && [...t].every((e) => W.has(e)) ? W : ((W = t), t);
  }).pipe(T(`web-live-shell-environment-ids`)),
  Rt = D((e) => {
    let t = y(e(j.catalogAtom));
    if (v(t)) return !1;
    for (let n of O(t.value)) {
      if (f(e(U.stateValueAtom(n)).snapshot)) continue;
      let t = je(y(e(j.stateAtom(n))), () => Me);
      if (_e(t) !== `disconnected` || (t.phase === `backoff` && t.desired && t.attempt <= 2))
        return !1;
    }
    return !0;
  }).pipe(T(`web-all-environment-shells-bootstrapped`));
function zt(e, t) {
  return !e.isReady || e.entries.size === 0
    ? !1
    : !t || Array.from(e.entries.values()).some((e) => e.target._tag === `PrimaryConnectionTarget`);
}
function Bt(e) {
  return D((t) => {
    let n = t(e.catalogValueAtom);
    if (!zt(n, e.requiresPrimaryEnvironment)) return !1;
    for (let r of O(n)) {
      let n = t(e.shellStateValueAtom(r));
      if (n.status !== `live` || v(n.snapshot)) return !1;
    }
    return !0;
  }).pipe(T(`web-all-environment-project-snapshots-ready`));
}
var Vt = Bt({
    catalogValueAtom: j.catalogValueAtom,
    shellStateValueAtom: U.stateValueAtom,
    requiresPrimaryEnvironment: !Ke(),
  }),
  Ht = D((e) => {
    let t = e(j.catalogValueAtom);
    if (!zt(t, !Ke())) return !1;
    for (let n of O(t)) {
      let t = e(U.stateValueAtom(n));
      if (t.status === `live` && f(t.snapshot)) continue;
      let r = y(e(j.stateAtom(n)));
      if (v(r)) return !1;
      let i = r.value;
      if (
        !(
          i.phase === `offline` ||
          i.phase === `blocked` ||
          (i.phase === `backoff` && i.attempt > 2)
        )
      )
        return !1;
    }
    return !0;
  }).pipe(T(`web-all-reachable-shells-live`)),
  Ut = e(t(), 1),
  G = it(A, U.stateAtom),
  Wt = Je(A, U.stateAtom),
  Gt = Qe(A, G.snapshotAtom),
  K = We(A),
  q = tt(K.stateAtom),
  J = He({ catalogValueAtom: j.catalogValueAtom, snapshotAtom: Gt.snapshotAtom });
function Kt(e, t) {
  let n = (0, N.c)(4),
    r,
    a;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        if (e !== null && t !== null) return G.mount(i, e, t);
      }),
      (a = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = a))
    : ((r = n[2]), (a = n[3])),
    (0, Ut.useEffect)(r, a));
}
var qt = D(Ne(Ve)).pipe(T(`web-environment-thread:empty`));
function Jt(e, t) {
  let n = (0, N.c)(5),
    r;
  n[0] !== e || n[1] !== t
    ? ((r = e !== null && t !== null ? K.stateAtom(e, t) : qt), (n[0] = e), (n[1] = t), (n[2] = r))
    : (r = n[2]);
  let i = S(r),
    a;
  return (n[3] === i ? (a = n[4]) : ((a = je(y(i), Yt)), (n[3] = i), (n[4] = a)), a);
}
function Yt() {
  return Ve;
}
var Xt = (e) => e === `preparing` || e === `queued` || e === `starting` || e === `running`;
function Zt(e) {
  if (!me(e)) return !0;
  let { status: t, data: n, error: r } = e.value;
  return t === `deleted` || f(r)
    ? !0
    : t === `live` && !oe(n, (e) => e.runs.some((e) => Xt(e.status)));
}
function Qt(e) {
  let t = l((t) => {
    let n = [];
    return D((r) => {
      let i = r(e.threadsAtom(t)).flatMap((e) => (Xt(e.status) ? [e.id] : []));
      return k(n, i) ? n : ((n = i), i);
    }).pipe(T(`web-running-thread-ids:${t}`));
  });
  return D((n) => {
    let r = ue(n.self()),
      i = new Map();
    for (let a of n(e.environmentIdsAtom)) {
      let o = new Set(n(t(a)));
      for (let t of r?.get(a) ?? []) {
        if (o.has(t)) continue;
        let r = e.stateAtom(a, t);
        Zt(n.once(r)) ||
          (o.add(t),
          n.subscribe(r, (e) => {
            Zt(e) && n.refreshSelf();
          }));
      }
      for (let t of o) n.mount(e.stateAtom(a, t));
      i.set(a, o);
    }
    return i;
  }).pipe(T(`web-running-thread-keep-alive`));
}
var $t = Qt({
    environmentIdsAtom: se(j.catalogValueAtom, (e) => [...O(e)]),
    threadsAtom: J.environmentThreadsAtom,
    stateAtom: K.stateAtom,
  }),
  Y = _t({
    catalogValueAtom: j.catalogValueAtom,
    snapshotAtom: Mt,
    serverConfigValueAtom: ot.configValueAtom,
  }),
  en = mt(A, { projectAtom: Y.projectAtom }),
  tn = a(A, {
    label: `environment-data:projects:search-contents`,
    tag: u.projectsSearchContents,
    staleTimeMs: 5e3,
    idleTtlMs: 6e4,
  });
async function X(e) {
  let t = () => e.registry.get(e.atom);
  return e.predicate(t())
    ? !0
    : await new Promise((n) => {
        let r = !1,
          i = null,
          a = null,
          o = !1,
          s = (e) => {
            r ||
              ((r = !0),
              i !== null && globalThis.clearTimeout(i),
              a === null ? (o = !0) : a(),
              n(e));
          };
        ((a = e.registry.subscribe(e.atom, (t) => {
          e.predicate(t) && s(!0);
        })),
          o
            ? a()
            : e.predicate(t())
              ? s(!0)
              : (i = globalThis.setTimeout(() => {
                  s(!1);
                }, e.timeoutMs)));
      });
}
var nn = Object.freeze([]),
  rn = Object.freeze([]),
  an = D(null).pipe(T(`web-project:empty`)),
  Z = D(nn).pipe(T(`web-thread-refs:empty`)),
  on = D(Object.freeze([])).pipe(T(`web-thread-shells:empty`)),
  sn = D(null).pipe(T(`web-thread-shell:empty`)),
  cn = D(null).pipe(T(`web-thread-projection:empty`)),
  ln = D(`empty`).pipe(T(`web-thread-status:empty`)),
  un = D(rn).pipe(T(`web-thread-visible-turn-items:empty`)),
  dn = D(Object.freeze([])).pipe(T(`web-thread-checkpoint-summaries:empty`)),
  fn = D(null).pipe(T(`web-thread-last-visited:empty`)),
  pn = D(null).pipe(T(`web-thread-updated-at:empty`)),
  mn = D(qe).pipe(T(`web-thread-history:empty`)),
  hn = D(null).pipe(te, T(`web-active-environment-id`));
function gn() {
  return S(hn);
}
function _n(e) {
  i.set(hn, e);
}
function vn(e) {
  return S(e === void 0 || e ? J.threadRefsAtom : Z);
}
function yn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? Z : J.environmentThreadRefsAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function bn() {
  return S(Y.projectsAtom);
}
function xn() {
  return S(at.serverConfigsAtom);
}
function Sn(e) {
  return S(e === void 0 || e ? J.threadShellsAtom : on);
}
function Cn() {
  return S(Rt);
}
function wn() {
  return S(Vt);
}
function Tn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = J.threadShellsForProjectRefsAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function En(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? an : Y.projectAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Dn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? sn : J.threadShellAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function On(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? sn : J.quietThreadShellAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function kn() {
  return S(J.quietThreadShellsAtom);
}
function An(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? on : J.childThreadInputsAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function jn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? cn : q.threadAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Mn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? cn : q.quietThreadAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Nn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? fn : q.lastVisitedAtAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Pn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? pn : q.updatedAtAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Fn(e) {
  return e === null ? null : i.get(q.threadAtom(e));
}
function In(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? ln : q.statusAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Ln(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? mn : q.historyAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Rn(e, t) {
  return e !== null && (!t.waitForShell || t.shellExists) ? e : null;
}
function zn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? un : q.visibleTurnItemsAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Bn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? un : q.quietVisibleTurnItemsAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Vn(e) {
  let t = (0, N.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e === null ? dn : q.checkpointSummariesAtom(e)), (t[0] = e), (t[1] = n)),
    S(n)
  );
}
function Q(e) {
  return i.get(Y.projectAtom(e));
}
function Hn() {
  return i.get(Y.projectsAtom);
}
function Un(e, t = 1e4) {
  let n = Q(e);
  return n === null
    ? new Promise((n, r) => {
        let a = null,
          o = setTimeout(() => {
            (a?.(), r(Error(`The project did not appear in the desktop app.`)));
          }, t),
          s = (e) => {
            e !== null && (clearTimeout(o), a?.(), n(e));
          };
        ((a = i.subscribe(Y.projectAtom(e), s)), s(Q(e)));
      })
    : Promise.resolve(n);
}
function Wn(e, t = 5e3) {
  return X({ registry: i, atom: Y.projectAtom(e), predicate: (e) => e === null, timeoutMs: t });
}
function Gn(e) {
  return i.get(J.threadShellAtom(e));
}
function Kn(e, t = 5e3) {
  return X({ registry: i, atom: J.threadShellAtom(e), predicate: (e) => e !== null, timeoutMs: t });
}
function qn(e) {
  let t = (0, N.c)(3),
    n = xn(),
    r;
  return (
    t[0] !== n || t[1] !== e
      ? ((r = e !== null && n.get(e)?.environment.capabilities.serverBrowser === !0),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Jn(e) {
  return i.get(M).get(e)?.environment.capabilities.serverBrowser === !0;
}
function Yn(e) {
  return i.get(M).get(e)?.environment.capabilities.threadTitleRegeneration === !0;
}
function Xn(e) {
  return i.get(M).get(e)?.environment.capabilities.threadPinning === !0;
}
function Zn(e) {
  return i.get(M).get(e)?.environment.capabilities.threadPinReorder === !0;
}
function Qn(e) {
  return i.get(M).get(e)?.environment.capabilities.threadAutoSettleOptOut === !0;
}
function $n(e) {
  return i.get(M).get(e)?.environment.capabilities.threadActiveReorder === !0;
}
function er(e) {
  return i.get(M).get(e)?.environment.capabilities.threadSettlement === !0;
}
function tr(e) {
  return i.get(M).get(e)?.environment.capabilities.threadSnooze === !0;
}
function nr(e) {
  return i.get(M).get(e)?.environment.capabilities.threadVisitedTracking === !0;
}
function rr(e) {
  return i.get(J.environmentThreadRefsAtom(e));
}
function ir() {
  return i.get(J.threadShellsAtom);
}
function $(e) {
  return e.forkedFrom?.type === `run` ? e.forkedFrom.threadId : e.lineage.parentThreadId;
}
function ar(e, t, n) {
  let r = new Set([e]);
  if (t !== null) {
    let e = $(t.thread);
    e !== null && r.add(e);
    for (let e of t.subagents) {
      e.childThreadId !== null && r.add(e.childThreadId);
      for (let t of e.workflow?.agents ?? []) t.childThreadId !== void 0 && r.add(t.childThreadId);
    }
    for (let e of t.contextTransfers) (r.add(e.sourceThreadId), r.add(e.targetThreadId));
  }
  let i = n.find((t) => t.id === e),
    a = i === void 0 ? null : $(i);
  return (a !== null && r.add(a), n.filter((t) => r.has(t.id) || $(t) === e));
}
var or = l((e) => {
  let t = Xe(e),
    n = [];
  return D((e) => {
    let r = ar(
      t.threadId,
      e(q.threadAtom(t))?.projection ?? null,
      e(J.environmentThreadsAtom(t.environmentId)),
    );
    return k(n, r) ? n : ((n = r), r);
  }).pipe(T(`web-thread-relationship-shells:${e}`));
});
function sr(e) {
  let t = (0, N.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = or(Ge(e))), (t[0] = e), (t[1] = n)), S(n));
}
export {
  $t as $,
  xn as A,
  In as B,
  yn as C,
  On as D,
  Mn as E,
  vn as F,
  Kn as G,
  zn as H,
  sr as I,
  tn as J,
  X as K,
  Dn as L,
  Ln as M,
  Nn as N,
  kn as O,
  jn as P,
  Wt as Q,
  Sn as R,
  qn as S,
  bt as St,
  bn as T,
  Un as U,
  Pn as V,
  Wn as W,
  q as X,
  en as Y,
  J as Z,
  _n as _,
  z as _t,
  Jn as a,
  U as at,
  Cn as b,
  St as bt,
  Yn as c,
  It as ct,
  Q as d,
  kt as dt,
  Gt as et,
  Hn as f,
  Dt as ft,
  Rn as g,
  Ot as gt,
  ir as h,
  Tt as ht,
  Xn as i,
  Ht as it,
  Vn as j,
  Bn as k,
  nr as l,
  Ft as lt,
  Gn as m,
  Et as mt,
  Qn as n,
  Jt as nt,
  er as o,
  Lt as ot,
  Fn as p,
  xt as pt,
  Y as q,
  Zn as r,
  Kt as rt,
  tr as s,
  jt as st,
  $n as t,
  G as tt,
  rr as u,
  wt as ut,
  gn as v,
  Ct as vt,
  En as w,
  An as x,
  yt as xt,
  wn as y,
  vt as yt,
  Tn as z,
};
//# sourceMappingURL=entities-CgVpsCCl.js.map
