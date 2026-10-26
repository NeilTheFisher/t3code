import {
  $_ as e,
  $f as t,
  CS as n,
  Dx as r,
  EC as i,
  Fb as a,
  Fy as o,
  Hb as s,
  Iu as c,
  JC as l,
  Jl as u,
  K_ as ee,
  Kl as d,
  Ky as f,
  Lf as p,
  Lp as m,
  MC as h,
  Mb as g,
  Mu as te,
  Ou as ne,
  PC as re,
  PS as ie,
  Px as _,
  Rf as v,
  Rs as ae,
  Ry as y,
  Tx as oe,
  Uf as se,
  Uy as b,
  Vb as x,
  Vs as ce,
  Vy as S,
  Wl as C,
  Wy as le,
  Xb as ue,
  Xf as de,
  Z_ as fe,
  Zb as w,
  aS as pe,
  ap as me,
  bu as he,
  cm as T,
  cu as ge,
  cx as E,
  du as _e,
  dv as ve,
  ev as D,
  ew as O,
  ex as ye,
  hu as be,
  hx as k,
  iS as A,
  jC as j,
  jS as xe,
  jy as Se,
  mS as Ce,
  mu as we,
  nv as Te,
  nw as Ee,
  nx as M,
  om as De,
  ox as Oe,
  q_ as ke,
  qf as N,
  ql as Ae,
  rS as je,
  rv as Me,
  sS as P,
  tS as F,
  tb as Ne,
  tw as I,
  uv as Pe,
  vu as Fe,
  vv as Ie,
  wS as Le,
  xh as Re,
  xu as ze,
  xv as Be,
  xx as L,
  yy as R,
  zS as Ve,
  zf as z,
  zy as B,
} from "./utils-CPoejuy5.js";
import { a as V, i as H, n as U, r as He, t as W } from "./vcsRefInvalidation-C9yI5o9q.js";
import { t as G } from "./runtime-CY2dlMEg.js";
function Ue(e) {
  return ae.get(e?.sourceControlProvider?.kind).changeRequest;
}
function We(e, t) {
  return t
    ? e === `push` || e === `create_pr` || e === `commit_push` || e === `commit_push_pr`
    : !1;
}
var Ge = o([
    `refresh_status`,
    `run_change_request`,
    `pull`,
    `switch_ref`,
    `create_ref`,
    `create_worktree`,
    `init`,
    `publish_repository`,
    `prepare_pull_request_thread`,
  ]),
  K = class extends b()(`VcsActionUnavailableError`, {
    operation: Ge,
    environmentId: y(R),
    cwd: y(S),
  }) {
    get message() {
      return `Source control operation '${this.operation.replaceAll(`_`, ` `)}' is unavailable.`;
    }
  },
  q = class extends b()(`VcsActionRemoteFailureError`, {
    actionId: S,
    transportActionId: S,
    action: T,
    environmentId: R,
    cwd: S,
    phase: y(De),
    remoteMessageLength: B,
  }) {
    get message() {
      let e = this.phase === null ? `execution` : this.phase;
      return `Source control action '${this.action}' failed during ${e}.`;
    }
  },
  J = class extends b()(`VcsActionMissingTerminalEventError`, {
    actionId: S,
    transportActionId: S,
    action: T,
    environmentId: R,
    cwd: S,
  }) {
    get message() {
      return `Source control action '${this.action}' ended without a terminal result.`;
    }
  },
  Ke = class extends b()(`VcsActionTargetKeyParseError`, { keyLength: B, cause: Se() }) {
    get message() {
      return `Invalid source control action target key (${this.keyLength} characters).`;
    }
  };
f([q, J]);
var Y = Object.freeze({
    isRunning: !1,
    operation: null,
    actionId: null,
    action: null,
    currentLabel: null,
    currentPhaseLabel: null,
    hookName: null,
    lastOutputLine: null,
    phaseStartedAtMs: null,
    hookStartedAtMs: null,
    error: null,
  }),
  X = () => a(g()),
  Z = 0,
  qe = Ne(le([R, S])),
  Q = p((e) => z(Y).pipe(v, N(`vcs-action:${e}`))),
  Je = z(Y).pipe(v, N(`vcs-action:null`));
function $(e) {
  return e.environmentId === null || e.cwd === null
    ? null
    : JSON.stringify([e.environmentId, e.cwd]);
}
function Ye(e) {
  try {
    let [t, n] = qe(JSON.parse(e));
    return { environmentId: t, cwd: n };
  } catch (t) {
    throw new Ke({ keyLength: e.length, cause: t });
  }
}
function Xe(e) {
  let t = $(e);
  return t === null ? Je : Q(t);
}
function Ze() {
  return ((Z += 1), `local-vcs-action:${Z}`);
}
function Qe(e) {
  let t = e.actionId ?? Ze(),
    n = X();
  return {
    ...Y,
    isRunning: !0,
    operation: e.operation,
    actionId: t,
    currentLabel: e.label,
    currentPhaseLabel: e.label,
    phaseStartedAtMs: n,
  };
}
function $e(e, t, n) {
  return {
    ...Y,
    operation: e,
    actionId: t,
    error: n instanceof Error ? n.message : `Source control action failed.`,
  };
}
function et(e, t) {
  let n = JSON.stringify([e.environmentId, e.cwd]);
  return `${n.length}:${n}${t}`;
}
function tt(e, t, n, r) {
  return r.actionId !== t || r.cwd !== e.cwd ? null : { ...r, actionId: n };
}
function nt(e, t) {
  return je(() => {
    let n = null;
    return e.pipe(
      ve((e) => {
        let r = tt(t.target, t.transportActionId, t.actionId, e);
        return r === null
          ? Ce
          : ((r.kind === `action_finished` || r.kind === `action_failed`) && (n = r),
            t.onProgress(r));
      }),
      Oe(() =>
        n?.kind === `action_finished`
          ? F(n.result)
          : n?.kind === `action_failed`
            ? M(
                new q({
                  actionId: t.actionId,
                  transportActionId: t.transportActionId,
                  action: n.action,
                  environmentId: t.target.environmentId,
                  cwd: t.target.cwd,
                  phase: n.phase,
                  remoteMessageLength: n.message.length,
                }),
              )
            : M(
                new J({
                  actionId: t.actionId,
                  transportActionId: t.transportActionId,
                  action: t.action,
                  environmentId: t.target.environmentId,
                  cwd: t.target.cwd,
                }),
              ),
      ),
    );
  });
}
function rt(e, t) {
  if (e.actionId !== t.actionId) return e;
  let n = X();
  switch (t.kind) {
    case `action_started`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        phaseStartedAtMs: n,
        hookStartedAtMs: null,
        hookName: null,
        lastOutputLine: null,
        error: null,
      };
    case `phase_started`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        currentLabel: t.label,
        currentPhaseLabel: t.label,
        phaseStartedAtMs: n,
        hookStartedAtMs: null,
        hookName: null,
        lastOutputLine: null,
        error: null,
      };
    case `hook_started`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        currentLabel: `Running ${t.hookName}...`,
        hookName: t.hookName,
        hookStartedAtMs: n,
        lastOutputLine: null,
        error: null,
      };
    case `hook_output`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        lastOutputLine: t.text,
        error: null,
      };
    case `hook_finished`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        currentLabel: e.currentPhaseLabel,
        hookName: null,
        hookStartedAtMs: null,
        lastOutputLine: null,
        error: null,
      };
    case `action_finished`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        error: null,
      };
    case `action_failed`:
      return {
        ...e,
        isRunning: !0,
        actionId: t.actionId,
        action: t.action,
        operation: `run_change_request`,
        error: t.message,
      };
  }
}
function it(e) {
  let n = new Map(),
    i = (t) => {
      let i = $(t),
        a = i ?? JSON.stringify([`vcs-action-target:unavailable`, t.environmentId, t.cwd]),
        o = n.get(a);
      if (o !== void 0) return o;
      let s = i === null ? null : Ye(i),
        c = i === null ? Je : Q(i),
        l = u(e, {
          label: `vcs-action:run-stacked:${a}`,
          scheduler: V,
          concurrency: { mode: `serial`, key: () => a },
          execute: (n, i) => {
            if (s === null)
              return M(
                new K({
                  operation: `run_change_request`,
                  environmentId: t.environmentId,
                  cwd: t.cwd,
                }),
              );
            let a = et(s, n.actionId);
            i.set(
              c,
              Qe({
                operation: `run_change_request`,
                label: `Running source control action`,
                actionId: n.actionId,
              }),
            );
            let o = {
                actionId: a,
                cwd: s.cwd,
                action: n.action,
                ...(n.commitMessage ? { commitMessage: n.commitMessage } : {}),
                ...(n.featureBranch ? { featureBranch: !0 } : {}),
                ...(n.filePaths?.length ? { filePaths: [...n.filePaths] } : {}),
                ...(n.threadId === void 0 ? {} : { threadId: n.threadId }),
                ...(n.projectId === void 0 ? {} : { projectId: n.projectId }),
              },
              l = A(() => {
                i.get(c).actionId === n.actionId && i.set(c, Y);
              });
            return nt(ze(s.environmentId, we(m.gitRunStackedAction, o)), {
              target: s,
              transportActionId: a,
              actionId: n.actionId,
              action: n.action,
              onProgress: (e) =>
                A(() => {
                  let t = i.get(c);
                  if (t.actionId === n.actionId && (i.set(c, rt(t, e)), n.onProgress !== void 0))
                    try {
                      n.onProgress(e);
                    } catch {}
                }),
            }).pipe(
              _(ge, { authorize: (t, n, r) => Fe(e, n).authorize(i, t, r) }),
              ye(W(i, s)),
              pe(() => l),
              P((e) =>
                A(() => {
                  let t = i.get(c);
                  t.actionId === n.actionId &&
                    t.isRunning &&
                    i.set(c, $e(`run_change_request`, n.actionId, e));
                }),
              ),
              r(() => l),
            );
          },
        });
      return (n.set(a, l), l);
    },
    a = (e, t, n) => {
      let r = $(t);
      if (r === null) return;
      let i = Q(r);
      e.set(i, n(e.get(i)));
    };
  return {
    stateAtom: Xe,
    runStackedAction: (e) => i(e),
    track: async (e, n, r, i) => {
      let a = $(n);
      if (a === null)
        return t(xe(new K({ operation: r.operation, environmentId: n.environmentId, cwd: n.cwd })));
      let o = Q(a),
        s = Qe(r);
      e.set(o, s);
      let c = await i();
      return (
        e.get(o).actionId === s.actionId &&
          (me(c) || ie(c.cause)
            ? e.set(o, Y)
            : e.get(o).actionId === s.actionId &&
              e.set(o, $e(r.operation, s.actionId, Ve(c.cause)))),
        c
      );
    },
    resetError: (e, t, n) => {
      a(e, t, (e) => (!e.isRunning && e.operation === n ? Y : e));
    },
  };
}
var at = 100,
  ot = 3e4,
  st = 1e4,
  ct = n(`1 second`).pipe(Le(({ duration: e }) => F(h(e, re(30)))));
function lt(e) {
  return (
    e.query === void 0 &&
    e.cursor === void 0 &&
    e.includeMatchingRemoteRefs === void 0 &&
    e.refKind === void 0 &&
    e.limit === at
  );
}
var ut = E(`CachedVcsRefsState.commitRefresh`)(function* (e, t, n) {
    return yield* He(
      n.environmentId,
      k(function* () {
        let r = U({ environmentId: n.environmentId }),
          i = e.get(r);
        if (i.revision !== n.expectedRevision) return !1;
        let a = i.persistedCacheReadable;
        return (
          n.persist &&
            ((a ||= yield* t.clearVcsRefs(n.environmentId).pipe(
              s(!0),
              w((e) =>
                L(`Could not recover invalidated cached Git refs.`).pipe(
                  x({ environmentId: n.environmentId, cwd: n.cwd, ...c(e) }),
                  s(!1),
                ),
              ),
            )),
            yield* t
              .saveVcsRefs(n.environmentId, n.cwd, n.refs)
              .pipe(
                w((e) =>
                  L(`Could not persist cached Git refs.`).pipe(
                    x({ environmentId: n.environmentId, cwd: n.cwd, ...c(e) }),
                  ),
                ),
              ),
            a !== i.persistedCacheReadable &&
              e.update(r, (e) =>
                e.revision === n.expectedRevision ? { ...e, persistedCacheReadable: a } : e,
              )),
          !0
        );
      }),
    );
  }),
  dt = E(`CachedVcsRefsState.makeChanges`)(function* (t, n, r, a = !0) {
    let o = yield* te,
      u = yield* ne,
      d = o.target.environmentId,
      f = lt(t),
      p =
        f && a
          ? yield* u
              .loadVcsRefs(d, t.cwd)
              .pipe(
                w((e) =>
                  L(`Could not load cached Git refs.`).pipe(
                    x({ environmentId: d, cwd: t.cwd, ...c(e) }),
                    s(I()),
                  ),
                ),
              )
          : I(),
      h = E(`CachedVcsRefsState.refresh`)(function* () {
        let e = yield* _e(m.vcsListRefs, t).pipe(_(te, o)),
          i = u
            .saveVcsRefs(d, t.cwd, e)
            .pipe(
              w((e) =>
                L(`Could not persist cached Git refs.`).pipe(
                  x({ environmentId: d, cwd: t.cwd, ...c(e) }),
                ),
              ),
            );
        return n === void 0 || r === void 0
          ? (f && (yield* i), Ee(e))
          : (yield* ut(r, u, {
                environmentId: d,
                cwd: t.cwd,
                refs: e,
                expectedRevision: n,
                persist: f,
              }))
            ? Ee(e)
            : I();
      }),
      g = D(F(p)).pipe(e((e) => O(e, { onNone: () => i, onSome: j }))),
      re = Re(o.session).pipe(
        Te(l),
        ee,
        Ie((n) =>
          n === null
            ? fe
            : D(
                h().pipe(
                  ue({ EnvironmentRpcUnavailableError: () => oe }),
                  P((e) =>
                    L(`Could not refresh Git refs.`).pipe(
                      x({ environmentId: d, cwd: t.cwd, ...c(e) }),
                    ),
                  ),
                ),
              ).pipe(
                Pe(ct),
                e((e) => O(e, { onNone: () => i, onSome: j })),
              ),
        ),
      );
    return ke(g, re);
  });
function ft(e, t, n, r) {
  return he(
    e,
    Be(
      k(function* () {
        return yield* dt(t, n, yield* de, r);
      }),
    ),
  );
}
function pt(e) {
  let t = p((t) => {
      let [n, r] = JSON.parse(t);
      return e
        .atom((e) => {
          let t = e(U({ environmentId: n }));
          return ft(n, r, t.revision, t.persistedCacheReadable);
        })
        .pipe(se(ot), N(`environment-data:vcs:list-refs:${t}`));
    }),
    n = (e) => t(JSON.stringify([e.environmentId, e.input])),
    r = (e, t) => W(t, { environmentId: e.environmentId, cwd: e.input.cwd });
  return {
    listRefs: n,
    readRefs: C(e, { label: `environment-data:vcs:read-refs`, tag: m.vcsListRefs }),
    logGraph: C(e, { label: `environment-data:vcs:log-graph`, tag: m.vcsLogGraph }),
    status: Ae(e, {
      label: `environment-data:vcs:status`,
      idleTtlMs: st,
      subscribe: (e) =>
        be(m.subscribeVcsStatus, e).pipe(
          Me(
            () => null,
            (e, t) => {
              let n = ce(e, t);
              return [n, [n]];
            },
          ),
        ),
    }),
    pull: C(e, {
      label: `environment-data:vcs:pull`,
      tag: m.vcsPull,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    refreshStatus: C(e, {
      label: `environment-data:vcs:refresh-status`,
      tag: m.vcsRefreshStatus,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    createWorktree: C(e, {
      label: `environment-data:vcs:create-worktree`,
      tag: m.vcsCreateWorktree,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    worktreeSetup: d(e, {
      label: `environment-data:vcs:worktree-setup`,
      tag: m.subscribeWorktreeSetup,
      idleTtlMs: st,
    }),
    cancelWorktreeSetup: C(e, {
      label: `environment-data:vcs:cancel-worktree-setup`,
      tag: m.worktreeSetupCancel,
    }),
    removeWorktree: C(e, {
      label: `environment-data:vcs:remove-worktree`,
      tag: m.vcsRemoveWorktree,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    createRef: C(e, {
      label: `environment-data:vcs:create-ref`,
      tag: m.vcsCreateRef,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    switchRef: C(e, {
      label: `environment-data:vcs:switch-ref`,
      tag: m.vcsSwitchRef,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
    init: C(e, {
      label: `environment-data:vcs:init`,
      tag: m.vcsInit,
      scheduler: V,
      concurrency: H,
      onSettled: r,
    }),
  };
}
var mt = pt(G),
  ht = it(G);
export { We as a, Ue as i, mt as n, K as r, ht as t };
//# sourceMappingURL=vcs-DOY0Hs9B.js.map
