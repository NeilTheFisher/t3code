import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import {
  $f as r,
  A as i,
  Dc as a,
  Gl as o,
  H_ as s,
  Is as c,
  JC as l,
  Lp as u,
  R_ as d,
  Rs as f,
  Wl as p,
  Xl as m,
  ap as h,
  cp as g,
  el as _,
  iu as v,
  jS as y,
  j_ as b,
  jc as x,
} from "./utils-CPoejuy5.js";
import { a as S, i as C } from "./vcsRefInvalidation-C9yI5o9q.js";
import { T as w } from "./entities-CgVpsCCl.js";
import { t as ee } from "./runtime-CY2dlMEg.js";
import { P as te, l as T, m as ne } from "./useSettings-N-JG2LFZ.js";
import { A as re } from "./server-3D32GveR.js";
import { a as E, r as D } from "./session-0UrRHIau.js";
import { n as O } from "./query-LKSVgBQH.js";
import { t as k } from "./use-atom-command-DGAuqAck.js";
import { i as A } from "./toast-B4KPIJDZ.js";
import { n as j, r as M, t as N } from "./vcs-DOY0Hs9B.js";
import { t as ie } from "./sourceControl-DEiLEb7m.js";
import { K as P, r as F } from "./pullRequests-CcJBfL2x.js";
import { S as I, W as L, m as R, x as ae } from "./pullRequestDetail.logic-Df887lG8.js";
import { n as oe } from "./useHandleNewThread-Cfzzj4KK.js";
import { i as se, l as ce, r as z } from "./t3ProjectFile-7gwVsbWF.js";
import { Fi as B } from "./main-BZa0O6xN.js";
var V = e(t(), 1),
  H = n();
function U(e) {
  return {
    pullRequestResolution: o(e, {
      label: `environment-data:git:resolve-pull-request`,
      tag: u.gitResolvePullRequest,
    }),
    preparePullRequestThread: p(e, {
      label: `environment-data:git:prepare-pull-request-thread`,
      tag: u.gitPreparePullRequestThread,
      scheduler: S,
      concurrency: C,
    }),
  };
}
var W = U(ee),
  G = {
    init: `init`,
    pull: `pull`,
    publishRepository: `publish_repository`,
    runStackedAction: `run_change_request`,
    preparePullRequestThread: `prepare_pull_request_thread`,
  };
function K(e) {
  let t = (0, H.c)(14),
    n = E(e.scope.environmentId, d),
    i = G[e.kind],
    o;
  t[0] === e.scope ? (o = t[1]) : ((o = N.stateAtom(e.scope)), (t[0] = e.scope), (t[1] = o));
  let c = x(o),
    l = c.operation === i,
    u;
  t[2] !== e.scope || t[3] !== i
    ? ((u = () => {
        N.resetError(a, e.scope, i);
      }),
      (t[2] = e.scope),
      (t[3] = i),
      (t[4] = u))
    : (u = t[4]);
  let f = u,
    p;
  t[5] !== e || t[6] !== i
    ? ((p = async (...t) => {
        let n = t;
        if (e.scope.environmentId === null || !D(e.scope.environmentId, `source-control:write`))
          return r(
            y(
              new s({ requiredScope: d, message: `This connection cannot change source control.` }),
            ),
          );
        let o = async () => {
          let t = await e.action(...n);
          return (h(t) && e.onSuccess?.(), t);
        };
        return e.managedExternally === !0
          ? o()
          : N.track(a, e.scope, { operation: i, label: e.label }, o);
      }),
      (t[5] = e),
      (t[6] = i),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    g = l ? c.error : null,
    _ = l && c.isRunning,
    v;
  return (
    t[8] !== n || t[9] !== f || t[10] !== m || t[11] !== g || t[12] !== _
      ? ((v = { isAllowed: n, error: g, isPending: _, resetError: f, run: m }),
        (t[8] = n),
        (t[9] = f),
        (t[10] = m),
        (t[11] = g),
        (t[12] = _),
        (t[13] = v))
      : (v = t[13]),
    v
  );
}
function q(e) {
  return e.environmentId === null || e.cwd === null
    ? null
    : { environmentId: e.environmentId, cwd: e.cwd };
}
function J(e, t) {
  let n = (0, H.c)(6),
    r;
  n[0] === e ? (r = n[1]) : ((r = N.stateAtom(e)), (n[0] = e), (n[1] = r));
  let i = x(r),
    a;
  return (
    n[2] !== t || n[3] !== i.isRunning || n[4] !== i.operation
      ? ((a = i.isRunning && i.operation !== null && t.some((e) => G[e] === i.operation)),
        (n[2] = t),
        (n[3] = i.isRunning),
        (n[4] = i.operation),
        (n[5] = a))
      : (a = n[5]),
    a
  );
}
function le(e) {
  let t = (0, H.c)(7),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let i = k(j.init, n),
    a;
  t[1] !== i || t[2] !== e
    ? ((a = async () => {
        let t = q(e);
        return t === null
          ? r(y(new M({ operation: `init`, environmentId: e.environmentId, cwd: e.cwd })))
          : i({ environmentId: t.environmentId, input: { cwd: t.cwd } });
      }),
      (t[1] = i),
      (t[2] = e),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  return (
    t[4] !== o || t[5] !== e
      ? ((s = { kind: `init`, label: `Initializing repository`, scope: e, action: o }),
        (t[4] = o),
        (t[5] = e),
        (t[6] = s))
      : (s = t[6]),
    K(s)
  );
}
function ue(e) {
  let t = (0, H.c)(11),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let i = k(j.pull, n),
    a;
  t[1] !== e.cwd || t[2] !== e.environmentId
    ? ((a =
        e.environmentId !== null && e.cwd !== null
          ? j.status({ environmentId: e.environmentId, input: { cwd: e.cwd } })
          : null),
      (t[1] = e.cwd),
      (t[2] = e.environmentId),
      (t[3] = a))
    : (a = t[3]);
  let o = O(a),
    s;
  t[4] !== i || t[5] !== e
    ? ((s = async () => {
        let t = q(e);
        return t === null
          ? r(y(new M({ operation: `pull`, environmentId: e.environmentId, cwd: e.cwd })))
          : i({ environmentId: t.environmentId, input: { cwd: t.cwd } });
      }),
      (t[4] = i),
      (t[5] = e),
      (t[6] = s))
    : (s = t[6]);
  let c = s,
    l;
  return (
    t[7] !== c || t[8] !== e || t[9] !== o.refresh
      ? ((l = {
          kind: `pull`,
          label: `Pulling latest changes...`,
          scope: e,
          action: c,
          onSuccess: o.refresh,
        }),
        (t[7] = c),
        (t[8] = e),
        (t[9] = o.refresh),
        (t[10] = l))
      : (l = t[10]),
    K(l)
  );
}
function de(e) {
  let t = (0, H.c)(13),
    n;
  t[0] === e ? (n = t[1]) : ((n = N.runStackedAction(e)), (t[0] = e), (t[1] = n));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { reportFailure: !1 }), (t[2] = i))
    : (i = t[2]);
  let a = k(n, i),
    o;
  t[3] !== e.cwd || t[4] !== e.environmentId
    ? ((o =
        e.environmentId !== null && e.cwd !== null
          ? j.status({ environmentId: e.environmentId, input: { cwd: e.cwd } })
          : null),
      (t[3] = e.cwd),
      (t[4] = e.environmentId),
      (t[5] = o))
    : (o = t[5]);
  let s = O(o),
    c;
  t[6] !== a || t[7] !== e
    ? ((c = async (t) =>
        q(e) === null
          ? r(
              y(
                new M({
                  operation: `run_change_request`,
                  environmentId: e.environmentId,
                  cwd: e.cwd,
                }),
              ),
            )
          : a(t)),
      (t[6] = a),
      (t[7] = e),
      (t[8] = c))
    : (c = t[8]);
  let l = c,
    u;
  return (
    t[9] !== l || t[10] !== e || t[11] !== s.refresh
      ? ((u = {
          kind: `runStackedAction`,
          label: `Running source control action`,
          scope: e,
          action: l,
          onSuccess: s.refresh,
          managedExternally: !0,
        }),
        (t[9] = l),
        (t[10] = e),
        (t[11] = s.refresh),
        (t[12] = u))
      : (u = t[12]),
    K(u)
  );
}
function fe(e) {
  let t = (0, H.c)(11),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let i = k(ie.publishRepository, n),
    a;
  t[1] !== e.cwd || t[2] !== e.environmentId
    ? ((a =
        e.environmentId !== null && e.cwd !== null
          ? j.status({ environmentId: e.environmentId, input: { cwd: e.cwd } })
          : null),
      (t[1] = e.cwd),
      (t[2] = e.environmentId),
      (t[3] = a))
    : (a = t[3]);
  let o = O(a),
    s;
  t[4] !== i || t[5] !== e
    ? ((s = async (t) => {
        let n = q(e);
        return n === null
          ? r(
              y(
                new M({
                  operation: `publish_repository`,
                  environmentId: e.environmentId,
                  cwd: e.cwd,
                }),
              ),
            )
          : i({ environmentId: n.environmentId, input: { cwd: n.cwd, ...t } });
      }),
      (t[4] = i),
      (t[5] = e),
      (t[6] = s))
    : (s = t[6]);
  let c = s,
    l;
  return (
    t[7] !== c || t[8] !== e || t[9] !== o.refresh
      ? ((l = {
          kind: `publishRepository`,
          label: `Publishing repository`,
          scope: e,
          action: c,
          onSuccess: o.refresh,
        }),
        (t[7] = c),
        (t[8] = e),
        (t[9] = o.refresh),
        (t[10] = l))
      : (l = t[10]),
    K(l)
  );
}
function Y(e) {
  let t = (0, H.c)(7),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let i = k(W.preparePullRequestThread, n),
    a;
  t[1] !== i || t[2] !== e
    ? ((a = async (t) => {
        let n = q(e);
        return n === null
          ? r(
              y(
                new M({
                  operation: `prepare_pull_request_thread`,
                  environmentId: e.environmentId,
                  cwd: e.cwd,
                }),
              ),
            )
          : t.mode === `worktree` &&
              t.threadId !== void 0 &&
              !D(n.environmentId, `orchestration:operate`)
            ? r(y(new s({ requiredScope: b, message: `This connection cannot change threads.` })))
            : i({
                environmentId: n.environmentId,
                input: {
                  cwd: n.cwd,
                  reference: t.reference,
                  mode: t.mode,
                  ...(t.threadId ? { threadId: t.threadId } : {}),
                },
              });
      }),
      (t[1] = i),
      (t[2] = e),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    c;
  return (
    t[4] !== o || t[5] !== e
      ? ((c = {
          kind: `preparePullRequestThread`,
          label: `Preparing pull request thread`,
          scope: e,
          action: o,
        }),
        (t[4] = o),
        (t[5] = e),
        (t[6] = c))
      : (c = t[6]),
    K(c)
  );
}
function X(e) {
  return e.environmentId === null || e.cwd === null || e.reference === null
    ? null
    : l(
        g(
          a.get(
            W.pullRequestResolution({
              environmentId: e.environmentId,
              input: { cwd: e.cwd, reference: e.reference },
            }),
          ),
        ),
      );
}
function pe(e) {
  let t = (0, H.c)(12),
    n;
  t[0] !== e.cwd || t[1] !== e.environmentId || t[2] !== e.reference
    ? ((n =
        e.environmentId !== null && e.cwd !== null && e.reference !== null
          ? W.pullRequestResolution({
              environmentId: e.environmentId,
              input: { cwd: e.cwd, reference: e.reference },
            })
          : null),
      (t[0] = e.cwd),
      (t[1] = e.environmentId),
      (t[2] = e.reference),
      (t[3] = n))
    : (n = t[3]);
  let r = O(n),
    i;
  t[4] === e ? (i = t[5]) : ((i = X(e)), (t[4] = e), (t[5] = i));
  let a = i,
    o = r.data ?? a,
    s = r.isPending && a === null,
    c;
  return (
    t[6] !== r.error || t[7] !== r.isPending || t[8] !== r.refresh || t[9] !== o || t[10] !== s
      ? ((c = {
          data: o,
          error: r.error,
          isPending: s,
          isFetching: r.isPending,
          refresh: r.refresh,
        }),
        (t[6] = r.error),
        (t[7] = r.isPending),
        (t[8] = r.refresh),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Z(e) {
  return {
    type: `warning`,
    title: `Checked out, but not confirmed on the latest commit`,
    description: `This checkout could not be confirmed at the ${e.singular}'s latest commit, so its code may differ. Local commits or uncommitted work keep a checkout where it is.`,
  };
}
function me(e, t) {
  let n = (0, H.c)(10),
    r;
  n[0] === t
    ? (r = n[1])
    : ((r = (e) => re(e, t).settings.pullRequestMergeMethod), (n[0] = t), (n[1] = r));
  let i = ne(e, r),
    a = T(he),
    o = T(ce),
    s = w(),
    c = te(),
    l;
  return (
    n[2] !== e || n[3] !== o || n[4] !== a || n[5] !== c || n[6] !== i || n[7] !== t || n[8] !== s
      ? ((l = () => {
          if (i != null) return i;
          if (Object.keys(a).length === 0) return;
          let n = s.find((n) => n.environmentId === e && n.id === t);
          if (!n) return;
          let r = B({ projects: s, settings: o, primaryEnvironmentId: c }).get(se(n)) ?? z(n, o);
          return a[r];
        }),
        (n[2] = e),
        (n[3] = o),
        (n[4] = a),
        (n[5] = c),
        (n[6] = i),
        (n[7] = t),
        (n[8] = s),
        (n[9] = l))
      : (l = n[9]),
    l
  );
}
function he(e) {
  return e.pullRequestMergeMethodOverrides;
}
var ge = (e) => ({
    merge: `Merge requested`,
    ready: `Marked ready for review`,
    draft: `Converted to draft`,
    close: `${c(e)} closed`,
    reopen: `${c(e)} reopened`,
    "update-branch": `Branch updated with the base branch`,
    "enable-auto-merge": `Auto-merge enabled`,
    "disable-auto-merge": `Auto-merge disabled`,
    revert: `Revert ${e} opened`,
    "delete-branch": `Branch deleted`,
    "approve-workflows": `Workflows approved`,
  }),
  _e = (e) => ({
    merge: `Could not merge this ${e}`,
    ready: `Could not mark this ready for review`,
    draft: `Could not convert this to a draft`,
    close: `Could not close this ${e}`,
    reopen: `Could not reopen this ${e}`,
    "update-branch": `Could not update this branch`,
    "enable-auto-merge": `Could not enable auto-merge`,
    "disable-auto-merge": `Could not disable auto-merge`,
    revert: `Could not open a revert ${e}`,
    "delete-branch": `Could not delete this branch`,
    "approve-workflows": `Could not approve workflows`,
  }),
  Q = (e) => ({
    merge: `The host refused the merge. Check that you have write access, that the checks it requires have passed, and that the branch is not conflicting.`,
    ready: `The host refused it. Check that you have write access to this repository.`,
    draft: `The host refused it. Check that you have write access to this repository.`,
    close: `The host refused it. Check that you have write access, or that you opened it.`,
    reopen: `The host refused it. Check that you have write access, and that the branch still exists.`,
    "update-branch": `The host refused it. Check that you have write access, and that the base branch has not diverged in a way the host cannot merge.`,
    "enable-auto-merge": `The host refused it. Check that auto-merge is enabled for this repository and that you have write access.`,
    "disable-auto-merge": `The host refused it. Check that you have write access to this repository.`,
    revert: `The host refused it. Check that you have write access and that this ${e} was merged on the host.`,
    "delete-branch": `The host refused it. Check that you have write access to the source repository and that the branch has not moved since this page loaded.`,
    "approve-workflows": `The host refused it. Check that you have Actions write access and that these workflow runs are still awaiting approval.`,
  });
function ve(e) {
  let t = (0, H.c)(11),
    { environmentId: n, reference: r, terminology: i, onSuccess: a, resolveMergeMethod: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { reportFailure: !1 }), (t[0] = s))
    : (s = t[0]);
  let c = k(F.runAction, s),
    [l, u] = (0, V.useState)(!1),
    d = (0, V.useRef)(!1),
    f;
  t[1] !== n || t[2] !== a || t[3] !== r || t[4] !== o || t[5] !== c || t[6] !== i
    ? ((f = async (e, t) => {
        if (d.current || r === null) return;
        ((d.current = !0), u(!0));
        let s = await c({
          environmentId: n,
          input: {
            ...r,
            action: e,
            ...(t ? { mergeMethod: t } : o ? { resolveMergeMethod: o } : {}),
          },
        });
        ((d.current = !1),
          u(!1),
          s._tag === `Failure`
            ? A.add({
                type: `error`,
                title: _e(i.singular)[e],
                description: L(v(s), Q(i.singular)[e]),
              })
            : (A.add({ type: `success`, title: ge(i.singular)[e] }), a?.(e)));
      }),
      (t[1] = n),
      (t[2] = a),
      (t[3] = r),
      (t[4] = o),
      (t[5] = c),
      (t[6] = i),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  return (
    t[8] !== l || t[9] !== p
      ? ((m = { actionPending: l, perform: p }), (t[8] = l), (t[9] = p), (t[10] = m))
      : (m = t[10]),
    m
  );
}
function ye(e) {
  let t = (0, H.c)(8),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { reportFailure: !1 }), (t[0] = n))
    : (n = t[0]);
  let r = k(F.runAction, n),
    i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = new Set()), (t[1] = i)) : (i = t[1]);
  let a = (0, V.useRef)(i),
    [o, s] = (0, V.useState)(be),
    c;
  t[2] !== e || t[3] !== r
    ? ((c = async (t) => {
        let n = t.filter((e) => {
          let t = P(e);
          return e.state !== `open` || a.current.has(t) ? !1 : (a.current.add(t), !0);
        });
        if (n.length === 0) return;
        s(new Set(a.current));
        let i = [],
          o = (
            await Promise.all(
              n.map(async (t) => {
                let n = await r({
                  environmentId: t.environmentId,
                  input: {
                    projectId: t.projectId,
                    host: t.host,
                    repository: t.repository,
                    number: t.number,
                    action: `close`,
                  },
                });
                if ((a.current.delete(P(t)), s(new Set(a.current)), n._tag === `Failure`))
                  i.push(
                    `#${t.number}: ${L(v(n), Q(f.get(t.provider).changeRequest.singular).close)}`,
                  );
                else return (e(t), !0);
              }),
            )
          ).filter(Boolean).length;
        A.add({
          type: i.length > 0 ? `error` : `success`,
          title:
            i.length > 0
              ? `Closed ${o} of ${n.length} pull requests`
              : `Closed ${o} pull request${o === 1 ? `` : `s`}`,
          ...(i.length > 0
            ? {
                description: i.slice(0, 3).join(`
`),
              }
            : {}),
        });
      }),
      (t[2] = e),
      (t[3] = r),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u;
  return (
    t[5] !== l || t[6] !== o
      ? ((u = { close: l, closingKeys: o }), (t[5] = l), (t[6] = o), (t[7] = u))
      : (u = t[7]),
    u
  );
}
function be() {
  return new Set();
}
var $ = new Map();
function xe(e) {
  let t = (0, H.c)(25),
    { environmentId: n, detail: r } = e,
    a = oe(),
    o = r?.workspaceRoot ?? null,
    s;
  t[0] !== n || t[1] !== o
    ? ((s = { environmentId: n, cwd: o }), (t[0] = n), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c = Y(s),
    [l, u] = (0, V.useState)(null),
    d;
  t[3] === r
    ? (d = t[4])
    : ((d = (r && f.findByChangeRequestUrl(r.url)) || f.get(void 0)), (t[3] = r), (t[4] = d));
  let p = d.changeRequest,
    h;
  t[5] === a
    ? (h = t[6])
    : ((h = async (e, t, n) => {
        let r = n ?? (await a(e).then(De, Ee));
        if (r === null) return null;
        let o = i.getState();
        if (t === null) return r;
        let s = o.getComposerDraft(r.draftId),
          c = s?.reviewComments ?? [],
          l = ae({ prompt: s?.prompt ?? ``, lastHandoffPrompt: $.get(r.draftId) }, t.prompt);
        return (
          $.set(r.draftId, t.prompt),
          o.setPrompt(r.draftId, l),
          o.setReviewComments(r.draftId, I(c, t.reviewComments ?? [])),
          r
        );
      }),
      (t[5] = a),
      (t[6] = h));
  let g = h,
    y;
  t[7] !== r || t[8] !== n || t[9] !== l || t[10] !== g || t[11] !== p
    ? ((y = async (e, t) => {
        if (!r || l !== null) return;
        u(e);
        let i = _(n, r.projectId),
          a = await g(i, t);
        (u(null),
          a === null
            ? A.add({
                type: `error`,
                title: `Could not open a thread`,
                description: `Try again from the project, or open a thread first.`,
              })
            : A.add({
                type: `success`,
                title: `Asked in a thread`,
                description:
                  t.prompt.length > 0
                    ? `The question is in the composer. Read it over, then send.`
                    : `The ${p.singular} is in the composer. Type your question, then send.`,
              }));
      }),
      (t[7] = r),
      (t[8] = n),
      (t[9] = l),
      (t[10] = g),
      (t[11] = p),
      (t[12] = y))
    : (y = t[12]);
  let b = y,
    x;
  t[13] !== r ||
  t[14] !== n ||
  t[15] !== l ||
  t[16] !== a ||
  t[17] !== g ||
  t[18] !== c ||
  t[19] !== p
    ? ((x = async (e, t, i) => {
        let o = i === void 0 ? `worktree` : i;
        if (!r || l !== null) return;
        u(e);
        let s = A.add({ type: `loading`, title: `Preparing the ${p.singular} checkout...` }),
          d = _(n, r.projectId),
          f = await a(d).then(Te, we);
        if (f === null) {
          (u(null),
            A.update(s, {
              type: `error`,
              title: `Could not open a thread for the checkout`,
              description: `Try again from the project, or open a thread first.`,
            }));
          return;
        }
        let h = await c.run({ reference: r.url, mode: o, threadId: f.threadId });
        h._tag === `Failure`
          ? (u(null),
            A.update(s, {
              type: `error`,
              title: `Could not prepare the ${p.singular} checkout`,
              description: R(m(h) ? void 0 : v(h)),
            }))
          : (await a(d, {
                branch: h.value.branch,
                worktreePath: h.value.worktreePath,
                envMode: h.value.worktreePath === null ? `local` : `worktree`,
              }).then(Ce, Se))
            ? (u(null),
              t === null
                ? A.update(
                    s,
                    h.value.isOnPullRequestHead
                      ? {
                          type: `success`,
                          title: o === `local` ? `Checked out here` : `Checked out`,
                          description:
                            o === `local`
                              ? `This repository is on the ${p.singular}'s branch, with a thread open on it.`
                              : `The ${p.singular} is in its own worktree, with a thread open on it.`,
                        }
                      : Z(p),
                  )
                : (await g(d, t, f),
                  A.update(
                    s,
                    h.value.isOnPullRequestHead
                      ? {
                          type: `success`,
                          title: `Checkout ready`,
                          description: `The task is in the composer. Read it over, then send.`,
                        }
                      : Z(p),
                  )))
            : (u(null),
              A.update(s, {
                type: `error`,
                title: `Checked out, but the thread stayed where it was`,
                description: `The checkout is ready on \`${h.value.branch}\`. Point a thread at it from the branch picker, then ask again.`,
              }));
      }),
      (t[13] = r),
      (t[14] = n),
      (t[15] = l),
      (t[16] = a),
      (t[17] = g),
      (t[18] = c),
      (t[19] = p),
      (t[20] = x))
    : (x = t[20]);
  let S = x,
    C;
  return (
    t[21] !== l || t[22] !== b || t[23] !== S
      ? ((C = { handoff: l, startAsk: b, startHandoff: S }),
        (t[21] = l),
        (t[22] = b),
        (t[23] = S),
        (t[24] = C))
      : (C = t[24]),
    C
  );
}
function Se() {
  return !1;
}
function Ce(e) {
  return e !== null;
}
function we() {
  return null;
}
function Te(e) {
  return e;
}
function Ee() {
  return null;
}
function De(e) {
  return e;
}
export {
  Z as a,
  Y as c,
  fe as d,
  le as f,
  xe as i,
  pe as l,
  ye as n,
  X as o,
  ue as p,
  me as r,
  de as s,
  ve as t,
  J as u,
};
//# sourceMappingURL=usePullRequestActions-5b980irk.js.map
