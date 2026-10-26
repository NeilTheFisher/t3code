import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  A as i,
  Dc as a,
  Dr as o,
  Fs as s,
  Js as c,
  Lf as l,
  Ns as u,
  Xl as d,
  Yc as f,
  Yn as p,
  b_ as m,
  el as h,
  iu as ee,
  jc as te,
  o as ne,
  qf as g,
  tl as _,
  zf as v,
} from "./utils-CPoejuy5.js";
import { R as y, T as b, U as x, at as S, it as re } from "./entities-CgVpsCCl.js";
import { M as ie, P as ae, q as oe } from "./useSettings-N-JG2LFZ.js";
import { t as se } from "./use-atom-command-DGAuqAck.js";
import { i as ce } from "./toast-B4KPIJDZ.js";
import { n as le } from "./useNavigate-Dq4t21kA.js";
import { t as ue } from "./useLocation-Be_QVulB.js";
import { t as de } from "./toastHelpers-CSQRKo4F.js";
import { i as C, o as w, r as T, t as E } from "./empty-CgJfsiJ2.js";
import { t as fe } from "./sourceControl-DEiLEb7m.js";
import { r as D } from "./pullRequests-CcJBfL2x.js";
import { X as pe, n as me } from "./useHandleNewThread-Cfzzj4KK.js";
import { Jr as he, Qr as ge, Xr as O, js as k, ni as _e } from "./main-BZa0O6xN.js";
import { t as A } from "./WorkspacePageHeader-Dwf68L7C.js";
import { i as j } from "./usePullRequestActions-5b980irk.js";
import { n as ve, t as ye } from "./linkedPrompt-qBmoFsPd.js";
var M = n(),
  N = (e) => `github.com/${e.owner}/${e.name}`.toLowerCase();
function be(e, t) {
  let n = N(t);
  return e.filter(
    (e) => e.repositoryIdentity != null && m(e.repositoryIdentity).toLowerCase() === n,
  );
}
function xe(e, t) {
  let n = u({ host: `github.com`, repository: `${t.owner}/${t.name}`, number: t.number }),
    r;
  for (let t of e)
    (r !== void 0 && t.updatedAt <= r.updatedAt) || (c(s(t)).some((e) => u(e) === n) && (r = t));
  return r;
}
function P(e) {
  for (let { environmentId: t, result: n } of e) {
    if (n._tag === `Initial` || n.waiting) return;
    let e = n._tag === `Success` ? n.value.threads.find((e) => e.archivedAt === null) : void 0;
    if (e !== void 0) return { environmentId: t, id: e.id };
  }
  return null;
}
var F = { claude: `claudeagent` };
function Se(e, t) {
  let n = F[t.provider] ?? t.provider,
    r = e.filter(
      (e) => e.driver.toLowerCase() === n && e.enabled && e.availability !== `unavailable`,
    ),
    i = r.find((e) => e.status === `ready`) ?? r.find((e) => e.status === `warning`);
  if (i === void 0) return null;
  let a = t.model === null ? null : f(i.driver, t.model, i.models),
    o = a ?? (i.models.find((e) => e.isDefault) ?? i.models[0])?.slug;
  return o === void 0
    ? null
    : { selection: { instanceId: i.instanceId, model: o }, exact: t.model === null || a !== null };
}
var I = e(t(), 1),
  L = e(r(), 1),
  Ce = new Set(),
  we = l((e) => {
    let { targets: t, repository: n, number: r } = JSON.parse(e);
    return v((e) =>
      P(
        t
          .filter(([t]) => e(S.statusAtom(t)) === `live`)
          .map(([t, i]) => ({
            environmentId: t,
            result: e(
              D.linkedThreadsUncached({
                environmentId: t,
                input: { projectId: i, repository: n, number: r },
              }),
            ),
          })),
      ),
    ).pipe(g(`web-prompt-link-pull-request-thread:${e}`));
  }),
  Te = v(null);
function R(e) {
  let t = (0, M.c)(78),
    { link: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { select: Ae }), (t[0] = r))
    : (r = t[0]);
  let s = ue(r),
    c = le(),
    l = te(re),
    u = b(),
    f = y(),
    { environments: p } = ie(),
    m = ae(),
    g = me(),
    { scratchEnvironmentId: v, openScratchProject: S } = he(),
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { reportFailure: !1 }), (t[1] = C))
    : (C = t[1]);
  let w = se(fe.startProjectClone, C),
    T;
  t[2] === s
    ? (T = t[3])
    : ((T = () => (Ce.has(s) ? { status: `opened` } : { status: `opening` })),
      (t[2] = s),
      (t[3] = T));
  let [E, D] = (0, I.useState)(T),
    [O, k] = (0, I.useState)(!1),
    [A, j] = (0, I.useState)(null),
    ve = (0, I.useRef)(null),
    N;
  t[4] !== u || t[5] !== f
    ? ((N = () => pe(u.filter(ke), f, `updated_at`)), (t[4] = u), (t[5] = f), (t[6] = N))
    : (N = t[6]);
  let P = N,
    F;
  t[7] !== m || t[8] !== f
    ? ((F = () => {
        let e;
        for (let t of f) (e === void 0 || t.updatedAt > e.updatedAt) && (e = t);
        return e?.environmentId ?? m;
      }),
      (t[7] = m),
      (t[8] = f),
      (t[9] = F))
    : (F = t[9]);
  let R = F,
    B;
  t[10] !== g ||
  t[11] !== n.kind ||
  t[12] !== n.model ||
  t[13] !== n.prompt?.hiddenCharacters ||
  t[14] !== n.prompt?.text ||
  t[15] !== n.provider
    ? ((B = async (e, t) => {
        let r = await g(h(e.environmentId, e.id), { replace: !0 }).catch(Oe);
        if (r === null) {
          D({ status: `failed`, message: `T3 Code could not open a new thread.` });
          return;
        }
        D({ status: `opened` });
        let o = [];
        if (n.kind === `new` && n.provider !== null) {
          let t = Se(a.get(oe.providersByEnvironmentAtom).get(e.environmentId) ?? [], {
            provider: n.provider,
            model: n.model,
          });
          (t !== null &&
            i
              .getState()
              .setModelSelection(r.draftId, t.selection, { explicit: !0, replaceOptions: !0 }),
            (t !== null && t.exact) ||
              o.push(
                t === null
                  ? `The link asked for ${n.provider}, which is not set up here, so your default model is used.`
                  : `The link asked for ${n.model}, which ${n.provider} does not offer here, so its default model is used.`,
              ));
        }
        let s = [n.prompt?.text, t].filter(Boolean).join(`

`);
        s.length !== 0 &&
          ye(r.draftId, { text: s, hiddenCharacters: n.prompt?.hiddenCharacters ?? 0 }, o);
      }),
      (t[10] = g),
      (t[11] = n.kind),
      (t[12] = n.model),
      (t[13] = n.prompt?.hiddenCharacters),
      (t[14] = n.prompt?.text),
      (t[15] = n.provider),
      (t[16] = B))
    : (B = t[16]);
  let V = B,
    H;
  t[17] !== R ||
  t[18] !== n.kind ||
  t[19] !== n.pullRequest ||
  t[20] !== V ||
  t[21] !== S ||
  t[22] !== v
    ? ((H = async () => {
        let e = v(R()) ?? v(null),
          t = e === null ? null : await S(e);
        t === null
          ? D({
              status: `failed`,
              message: `None of your machines can start a thread without a project right now.`,
            })
          : await V(t, n.kind === `pull-request` ? ge(n.pullRequest) : void 0);
      }),
      (t[17] = R),
      (t[18] = n.kind),
      (t[19] = n.pullRequest),
      (t[20] = V),
      (t[21] = S),
      (t[22] = v),
      (t[23] = H))
    : (H = t[23]);
  let U = H,
    W;
  t[24] === U
    ? (W = t[25])
    : ((W = () => {
        (D({ status: `opening` }), U());
      }),
      (t[24] = U),
      (t[25] = W));
  let G = W,
    K;
  t[26] !== p || t[27] !== R || t[28] !== n.kind || t[29] !== V || t[30] !== w
    ? ((K = async (e) => {
        let t = R(),
          r = p.find((e) => e.environmentId === t),
          i = r?.serverConfig?.newProjectsRoot ?? null;
        if (
          t === null ||
          i === null ||
          r?.serverConfig?.environment.capabilities.projectCloneTracking !== !0
        ) {
          D({
            status: `failed`,
            message: `This machine cannot clone from a link. Update T3 Code on it, or clone the repository from the command palette.`,
          });
          return;
        }
        D({ status: `opening` });
        let a = ne(),
          o = await w({
            environmentId: t,
            input: {
              projectId: a,
              title: e.name,
              createdAt: new Date().toISOString(),
              remoteUrl: `https://github.com/${e.owner}/${e.name}.git`,
              destinationPath: _e(i, e.name),
            },
          });
        if (o._tag === `Failure`) {
          if (!d(o)) {
            let e = ee(o);
            ce.add(
              de({
                type: `error`,
                title: `Clone failed`,
                description: e instanceof Error ? e.message : `An error occurred.`,
              }),
            );
          }
          D({ status: `missing-repository`, repository: e });
          return;
        }
        let s = await x(h(t, a), 5e3).catch(De);
        s === null
          ? D({ status: `failed`, message: `The clone started, but its project did not appear.` })
          : n.kind === `pull-request`
            ? D({
                status: `failed`,
                title: `Cloning ${e.owner}/${e.name}`,
                message: `Open this link again when the clone finishes.`,
              })
            : await V(s);
      }),
      (t[26] = p),
      (t[27] = R),
      (t[28] = n.kind),
      (t[29] = V),
      (t[30] = w),
      (t[31] = K))
    : (K = t[31]);
  let Me = K,
    q;
  t[32] !== n.kind || t[33] !== n.pullRequest || t[34] !== l || t[35] !== f
    ? ((q = l && n.kind === `pull-request` ? xe(f, n.pullRequest) : void 0),
      (t[32] = n.kind),
      (t[33] = n.pullRequest),
      (t[34] = l),
      (t[35] = f),
      (t[36] = q))
    : (q = t[36]);
  let J = q,
    Y,
    X;
  if (
    t[37] !== n.kind ||
    t[38] !== n.pullRequest ||
    t[39] !== J ||
    t[40] !== l ||
    t[41] !== P ||
    t[42] !== O ||
    t[43] !== E.status
  ) {
    let e =
      l && E.status === `opening` && !O && n.kind === `pull-request` && J === void 0
        ? be(P(), n.pullRequest)
        : [];
    ((Y = te),
      (X =
        n.kind === `pull-request` && e.length > 0
          ? we(
              JSON.stringify({
                targets: e.map(Ee),
                repository: `${n.pullRequest.owner}/${n.pullRequest.name}`,
                number: n.pullRequest.number,
              }),
            )
          : Te),
      (t[37] = n.kind),
      (t[38] = n.pullRequest),
      (t[39] = J),
      (t[40] = l),
      (t[41] = P),
      (t[42] = O),
      (t[43] = E.status),
      (t[44] = Y),
      (t[45] = X));
  } else ((Y = t[44]), (X = t[45]));
  let Ne = Y(X);
  if (l && Ne !== void 0 && E.status === `opening` && !O) {
    k(!0);
    let e = J ?? Ne ?? void 0,
      t = n.kind === `new` ? n.repository : n.pullRequest,
      r = t === null ? void 0 : be(P(), t)[0];
    e === void 0
      ? t === null
        ? j({ kind: `scratch` })
        : r === void 0
          ? (D({ status: `missing-repository`, repository: t }), j({ kind: `settled` }))
          : n.kind === `pull-request`
            ? (D({ status: `pull-request-checkout`, project: r }), j({ kind: `settled` }))
            : j({ kind: `draft`, project: r })
      : (D({ status: `opened` }), j({ kind: `thread`, thread: e }));
  }
  let Z;
  t[46] !== n.prompt || t[47] !== s || t[48] !== c || t[49] !== V || t[50] !== U
    ? ((Z = (e) => {
        switch ((Ce.add(s), e.kind)) {
          case `thread`: {
            let t = _(e.thread.environmentId, e.thread.id);
            (n.prompt !== null && ye(t, n.prompt),
              c({
                to: `/$environmentId/$threadId`,
                params: { environmentId: e.thread.environmentId, threadId: e.thread.id },
                replace: !0,
              }));
            return;
          }
          case `scratch`:
            U();
            return;
          case `draft`:
            V(e.project);
            return;
        }
      }),
      (t[46] = n.prompt),
      (t[47] = s),
      (t[48] = c),
      (t[49] = V),
      (t[50] = U),
      (t[51] = Z))
    : (Z = t[51]);
  let Pe = (0, I.useEffectEvent)(Z),
    Q;
  t[52] !== A || t[53] !== Pe
    ? ((Q = () => {
        A !== null && ve.current !== A && ((ve.current = A), Pe(A));
      }),
      (t[52] = A),
      (t[53] = Pe),
      (t[54] = Q))
    : (Q = t[54]);
  let $;
  switch (
    (t[55] === A ? ($ = t[56]) : (($ = [A]), (t[55] = A), (t[56] = $)),
    (0, I.useEffect)(Q, $),
    E.status)
  ) {
    case `opening`: {
      let e;
      return (
        t[57] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(z, { title: `Opening the link...` })), (t[57] = e))
          : (e = t[57]),
        e
      );
    }
    case `opened`: {
      let e;
      return (
        t[58] === s
          ? (e = t[59])
          : ((e = (0, L.jsx)(z, {
              title: `This link is open`,
              children: (0, L.jsx)(o, {
                size: `sm`,
                variant: `outline`,
                onClick: () => {
                  (Ce.delete(s), k(!1), D({ status: `opening` }));
                },
                children: `Open it again`,
              }),
            })),
            (t[58] = s),
            (t[59] = e)),
        e
      );
    }
    case `failed`: {
      let e = E.title ?? `Could not open the link`,
        n;
      return (
        t[60] !== E.message || t[61] !== e
          ? ((n = (0, L.jsx)(z, { title: e, description: E.message })),
            (t[60] = E.message),
            (t[61] = e),
            (t[62] = n))
          : (n = t[62]),
        n
      );
    }
    case `missing-repository`: {
      let e = `${E.repository.owner}/${E.repository.name}`,
        n = `You don't have ${e}`,
        r;
      t[63] !== Me || t[64] !== E.repository
        ? ((r = () => void Me(E.repository)), (t[63] = Me), (t[64] = E.repository), (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== e || t[67] !== r
        ? ((i = (0, L.jsxs)(o, { size: `sm`, onClick: r, children: [`Clone `, e] })),
          (t[66] = e),
          (t[67] = r),
          (t[68] = i))
        : (i = t[68]);
      let a;
      t[69] === G
        ? (a = t[70])
        : ((a = (0, L.jsx)(o, {
            size: `sm`,
            variant: `outline`,
            onClick: G,
            children: `Use without project`,
          })),
          (t[69] = G),
          (t[70] = a));
      let s;
      return (
        t[71] !== n || t[72] !== i || t[73] !== a
          ? ((s = (0, L.jsxs)(z, {
              title: n,
              description: `Clone it to work on it here, or start without a project.`,
              children: [i, a],
            })),
            (t[71] = n),
            (t[72] = i),
            (t[73] = a),
            (t[74] = s))
          : (s = t[74]),
        s
      );
    }
    case `pull-request-checkout`: {
      let e;
      return (
        t[75] !== n || t[76] !== E.project
          ? ((e =
              n.kind === `pull-request` ? (0, L.jsx)(je, { link: n, project: E.project }) : null),
            (t[75] = n),
            (t[76] = E.project),
            (t[77] = e))
          : (e = t[77]),
        e
      );
    }
  }
}
function Ee(e) {
  return [e.environmentId, e.id];
}
function De() {
  return null;
}
function Oe() {
  return null;
}
function ke(e) {
  return e.isScratch !== !0;
}
function Ae(e) {
  return e.state.__TSR_key ?? ``;
}
function je(e) {
  let t = (0, M.c)(22),
    { link: n, project: r } = e,
    i = r.environmentId,
    a = r.id,
    s = r.workspaceRoot,
    c;
  t[0] === n.pullRequest
    ? (c = t[1])
    : ((c = ge(n.pullRequest)), (t[0] = n.pullRequest), (t[1] = c));
  let l;
  t[2] !== r.id || t[3] !== r.workspaceRoot || t[4] !== c
    ? ((l = { projectId: a, workspaceRoot: s, url: c }),
      (t[2] = r.id),
      (t[3] = r.workspaceRoot),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] !== r.environmentId || t[7] !== l
    ? ((u = { environmentId: i, detail: l }), (t[6] = r.environmentId), (t[7] = l), (t[8] = u))
    : (u = t[8]);
  let { handoff: d, startHandoff: f } = j(u),
    p = (0, I.useRef)(!1),
    m,
    h;
  (t[9] === n.prompt
    ? ((m = t[10]), (h = t[11]))
    : ((m = () => {
        p.current || n.prompt === null || ((p.current = !0), ve(n.prompt));
      }),
      (h = [n.prompt]),
      (t[9] = n.prompt),
      (t[10] = m),
      (t[11] = h)),
    (0, I.useEffect)(m, h));
  let { owner: ee, name: te, number: ne } = n.pullRequest,
    g = `Check out ${ee}/${te}#${ne}?`,
    _ = d !== null,
    v;
  t[12] !== n.prompt || t[13] !== f
    ? ((v = () => void f(`prompt-link`, n.prompt === null ? null : { prompt: n.prompt.text })),
      (t[12] = n.prompt),
      (t[13] = f),
      (t[14] = v))
    : (v = t[14]);
  let y = d === null ? `Check out` : `Checking out...`,
    b;
  t[15] !== _ || t[16] !== v || t[17] !== y
    ? ((b = (0, L.jsx)(o, { size: `sm`, disabled: _, onClick: v, children: y })),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== b || t[20] !== g
      ? ((x = (0, L.jsx)(z, {
          title: g,
          description: `This puts the pull request's code in a new worktree and runs your project's setup script on it.`,
          children: b,
        })),
        (t[19] = b),
        (t[20] = g),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function z(e) {
  let t = (0, M.c)(11),
    { title: n, description: r, children: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = p ? (0, L.jsx)(A, { electron: !0 }) : null), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === n ? (o = t[2]) : ((o = (0, L.jsx)(w, { children: n })), (t[1] = n), (t[2] = o));
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = r ? (0, L.jsx)(T, { children: r }) : null), (t[3] = r), (t[4] = s));
  let c;
  t[5] === i
    ? (c = t[6])
    : ((c = i
        ? (0, L.jsx)(`div`, { className: `mt-5 flex justify-center gap-2`, children: i })
        : null),
      (t[5] = i),
      (t[6] = c));
  let l;
  return (
    t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, L.jsxs)(k, {
          className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
          children: [
            a,
            (0, L.jsx)(E, {
              className: `flex-1`,
              children: (0, L.jsxs)(C, { className: `max-w-md`, children: [o, s, c] }),
            }),
          ],
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function B() {
  let e = (0, M.c)(9),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = { select: V }), (e[0] = t)) : (t = e[0]);
  let n = ue(t),
    r;
  e[1] === n ? (r = e[2]) : ((r = O(n)), (e[1] = n), (e[2] = r));
  let i = r;
  if (!i.ok) {
    let t;
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, L.jsx)(w, { children: `Could not open the link` })), (e[3] = t))
      : (t = e[3]);
    let n;
    return (
      e[4] === i.error
        ? (n = e[5])
        : ((n = (0, L.jsx)(k, {
            className: `h-dvh min-h-0 overflow-hidden overscroll-y-none`,
            children: (0, L.jsx)(E, {
              className: `flex-1`,
              children: (0, L.jsxs)(C, {
                className: `max-w-md`,
                children: [t, (0, L.jsx)(T, { children: i.error })],
              }),
            }),
          })),
          (e[4] = i.error),
          (e[5] = n)),
      n
    );
  }
  let a;
  return (
    e[6] !== i.value || e[7] !== n
      ? ((a = (0, L.jsx)(R, { link: i.value }, n)), (e[6] = i.value), (e[7] = n), (e[8] = a))
      : (a = e[8]),
    a
  );
}
function V(e) {
  return e.searchStr;
}
export { B as component };
//# sourceMappingURL=_chat.new-CQaQXeKt.js.map
