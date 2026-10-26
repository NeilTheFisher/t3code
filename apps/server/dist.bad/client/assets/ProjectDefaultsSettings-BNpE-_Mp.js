import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import {
  Bc as r,
  Ht as ee,
  It as te,
  Nt as ne,
  Vm as i,
  Wt as re,
  Yt as a,
  an as ie,
  qt as ae,
} from "./utils-CPoejuy5.js";
import { a as o, c as s, o as c, s as l, t as u } from "./select-CBCDohvC.js";
import { M as oe, i as se, j as ce } from "./useSettings-N-JG2LFZ.js";
import { A as le, t as ue } from "./server-3D32GveR.js";
import { i as de } from "./toast-B4KPIJDZ.js";
import { n as fe } from "./useNavigate-Dq4t21kA.js";
import { t as pe } from "./pullRequestDetail.logic-Df887lG8.js";
import { i as me, p as he } from "./settingsScope-ohK4TuKq.js";
import { l as d } from "./settingsSearch-CrEaqXdW.js";
import { Rs as ge } from "./main-BZa0O6xN.js";
import {
  _ as f,
  a as p,
  g as _e,
  h as ve,
  n as ye,
  r as m,
  s as be,
  x as xe,
  y as Se,
} from "./settingsLayout-2i87rQY9.js";
import { t as Ce } from "./ProviderModelPicker-5TbK_TR9.js";
import { n as we, t as Te } from "./runtimeModeConfig-7PXEgGfJ.js";
var Ee = t(),
  h = e(n(), 1),
  De = [`recursive`, `top-level`, `none`];
function Oe(e) {
  return e !== null && De.includes(e);
}
function ke(e) {
  let t = (0, Ee.c)(92),
    { category: n } = e,
    { scope: ke, target: g, targets: Ne, connectedEnvironments: Pe } = xe(),
    _ = _e(),
    v = Se(),
    Fe = fe(),
    { environments: y } = oe(),
    b = ce(),
    x,
    S,
    C,
    w,
    T;
  if (t[0] !== y || t[1] !== b || t[2] !== _ || t[3] !== g) {
    C = g ? y.find((e) => e.environmentId === g.environmentId) : void 0;
    let e = (C?.serverConfig ? b.get(C.environmentId) : void 0) ?? ue,
      n = ae(e, _.defaultModelSelection);
    ((w = n ? te(_, e, n) : null),
      (x = a(ee(re(e), _, g?.projectId ?? null))),
      (S = ne(_, e, w?.instanceId, w?.model)),
      (T = x.find((e) => e.instanceId === w?.instanceId)),
      (t[0] = y),
      (t[1] = b),
      (t[2] = _),
      (t[3] = g),
      (t[4] = x),
      (t[5] = S),
      (t[6] = C),
      (t[7] = w),
      (t[8] = T));
  } else ((x = t[4]), (S = t[5]), (C = t[6]), (w = t[7]), (T = t[8]));
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = [`defaultModelSelection`]), (t[9] = D))
    : (D = t[9]);
  let O = f(D),
    k;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = [`defaultRuntimeMode`]), (t[10] = k))
    : (k = t[10]);
  let A = f(k),
    Ie = Te[_.defaultRuntimeMode].icon,
    j;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = [`defaultThreadEnvMode`]), (t[11] = j))
    : (j = t[11]);
  let M = f(j),
    N;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = [`worktreeSubmodules`]), (t[12] = N))
    : (N = t[12]);
  let P = f(N),
    F;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [`defaultAutoPull`]), (t[13] = F))
    : (F = t[13]);
  let I = f(F),
    L;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = [`removeAgentCreditsOnMerge`]), (t[14] = L))
    : (L = t[14]);
  let R = f(L),
    z;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [`pullRequestMergeMethod`]), (t[15] = z))
    : (z = t[15]);
  let B = f(z),
    V;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = [`defaultModelSelection`]), (t[16] = V))
    : (V = t[16]);
  let Le = ve(V),
    H = ke.kind === `project` || ke.kind === `checkout`,
    U = Pe.length === 0,
    Re;
  t[17] === g
    ? (Re = t[18])
    : ((Re = g ? le(g.settings, null, null, null).settings : null), (t[17] = g), (t[18] = Re));
  let ze = Re,
    Be;
  t[19] !== x || t[20] !== y || t[21] !== b || t[22] !== _ || t[23] !== Ne
    ? ((Be = function (e, t) {
        let n = x.find((t) => t.instanceId === e);
        for (let r of Ne) {
          let te = y.find((e) => e.environmentId === r.environmentId),
            i = b.get(r.environmentId);
          if (!te?.serverConfig || !i) continue;
          let a = ee(re(i), r.settings, r.projectId).find((t) => t.instanceId === e),
            ie = ne(se(r.settings, _), i).get(e);
          if (
            !a?.enabled ||
            !a.isAvailable ||
            a.driverKind !== n?.driverKind ||
            !ie?.some((e) => e.slug === t && !e.isUnavailable)
          )
            return `This model is unavailable on ${te?.label ?? `a selected environment`}. Select that environment to choose its model separately.`;
        }
        return null;
      }),
      (t[19] = x),
      (t[20] = y),
      (t[21] = b),
      (t[22] = _),
      (t[23] = Ne),
      (t[24] = Be))
    : (Be = t[24]);
  let W = Be,
    Ve;
  t[25] !== W || t[26] !== v
    ? ((Ve = (e) => {
        let t = e ? W(e.instanceId, e.model) : null;
        t
          ? de.add({ type: `error`, title: `Default model not saved`, description: t })
          : v({ defaultModelSelection: e });
      }),
      (t[25] = W),
      (t[26] = v),
      (t[27] = Ve))
    : (Ve = t[27]);
  let G = Ve,
    He;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = [`defaultModelSelection`]), (t[28] = He))
    : (He = t[28]);
  let Ue = H
      ? `Model for new threads in this project.`
      : !U && !O && Le !== `project` && _.defaultModelSelection === null
        ? `Default model for new threads, selected automatically. Projects can override it.`
        : `Default model for new threads. Projects can override it.`,
    K;
  t[29] !== G || t[30] !== _.defaultModelSelection
    ? ((K =
        _.defaultModelSelection === null
          ? null
          : (0, h.jsx)(m, { label: `default model`, onClick: () => G(null) })),
      (t[29] = G),
      (t[30] = _.defaultModelSelection),
      (t[31] = K))
    : (K = t[31]);
  let q;
  t[32] !== E ||
  t[33] !== x ||
  t[34] !== O ||
  t[35] !== W ||
  t[36] !== S ||
  t[37] !== Fe ||
  t[38] !== C ||
  t[39] !== w ||
  t[40] !== G ||
  t[41] !== _.planModeEnabled
    ? ((q =
        w && E
          ? (0, h.jsxs)(`div`, {
              className: `flex min-w-0 flex-wrap items-center justify-end gap-1.5`,
              children: [
                (0, h.jsx)(Ce, {
                  environmentId: C?.environmentId ?? null,
                  activeInstanceId: w.instanceId,
                  model: w.model,
                  lockedProvider: null,
                  instanceEntries: x,
                  modelOptionsByInstance: S,
                  triggerClassName: ye,
                  ...(O ? { triggerLabel: `Mixed` } : {}),
                  getModelDisabledReason: W,
                  onOpenProviderSetup: (e) => {
                    C &&
                      Fe({
                        to: `/settings/providers`,
                        search: { environmentId: C.environmentId, instanceId: e },
                      });
                  },
                  onInstanceModelChange: (e, t) => G(r(e, t)),
                }),
                O
                  ? null
                  : (0, h.jsx)(ie, {
                      provider: E.driverKind,
                      models: E.models,
                      model: w.model,
                      modelOptions: w.options ?? [],
                      allowPromptInjectedEffort: !1,
                      planModeEnabled: _.planModeEnabled,
                      triggerClassName: ye,
                      onModelOptionsChange: (e) => G(r(w.instanceId, w.model, e)),
                    }),
              ],
            })
          : (0, h.jsx)(`span`, {
              className: `text-sm text-muted-foreground`,
              children: `No providers available`,
            })),
      (t[32] = E),
      (t[33] = x),
      (t[34] = O),
      (t[35] = W),
      (t[36] = S),
      (t[37] = Fe),
      (t[38] = C),
      (t[39] = w),
      (t[40] = G),
      (t[41] = _.planModeEnabled),
      (t[42] = q))
    : (q = t[42]);
  let We;
  t[43] !== O || t[44] !== Ue || t[45] !== K || t[46] !== q
    ? ((We = (0, h.jsx)(p, {
        serverScoped: !0,
        settingKeys: He,
        mixed: O,
        id: `default-model`,
        title: `Model`,
        description: Ue,
        resetAction: K,
        control: q,
      })),
      (t[43] = O),
      (t[44] = Ue),
      (t[45] = K),
      (t[46] = q),
      (t[47] = We))
    : (We = t[47]);
  let Ge = We,
    Ke;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = [`defaultThreadEnvMode`]), (t[48] = Ke))
    : (Ke = t[48]);
  let qe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = d(`new-threads`)), (t[49] = qe))
    : (qe = t[49]);
  let Je = H
      ? `Where new threads in this project start.`
      : `Where new threads start. Projects and their t3.json can override it.`,
    J;
  t[50] !== H || t[51] !== _.defaultThreadEnvMode || t[52] !== v
    ? ((J =
        !H && _.defaultThreadEnvMode !== null
          ? (0, h.jsx)(m, {
              label: `default workspace`,
              onClick: () => v({ defaultThreadEnvMode: null }),
            })
          : null),
      (t[50] = H),
      (t[51] = _.defaultThreadEnvMode),
      (t[52] = v),
      (t[53] = J))
    : (J = t[53]);
  let Ye = M ? null : (ze?.defaultThreadEnvMode ?? null),
    Y;
  t[54] === v
    ? (Y = t[55])
    : ((Y = (e) => {
        (e === `local` || e === `worktree`) && v({ defaultThreadEnvMode: e });
      }),
      (t[54] = v),
      (t[55] = Y));
  let X;
  t[56] === U
    ? (X = t[57])
    : ((X = (0, h.jsx)(l, {
        size: `sm`,
        "aria-label": `Default workspace`,
        children: (0, h.jsx)(s, {
          children: (e) =>
            e === `local` || e === `worktree` ? he(e) : U ? `Unavailable` : `Mixed`,
        }),
      })),
      (t[56] = U),
      (t[57] = X));
  let Xe;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (0, h.jsx)(o, { value: `local`, children: he(`local`) })), (t[58] = Xe))
    : (Xe = t[58]);
  let Ze;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, h.jsxs)(c, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: [Xe, (0, h.jsx)(o, { value: `worktree`, children: he(`worktree`) })],
      })),
      (t[59] = Ze))
    : (Ze = t[59]);
  let Z;
  t[60] !== Ye || t[61] !== Y || t[62] !== X
    ? ((Z = (0, h.jsxs)(u, { value: Ye, onValueChange: Y, children: [X, Ze] })),
      (t[60] = Ye),
      (t[61] = Y),
      (t[62] = X),
      (t[63] = Z))
    : (Z = t[63]);
  let Qe;
  t[64] !== M || t[65] !== Je || t[66] !== J || t[67] !== Z
    ? ((Qe = (0, h.jsx)(p, {
        serverScoped: !0,
        settingKeys: Ke,
        mixed: M,
        id: qe.id,
        title: `Workspace`,
        description: Je,
        resetAction: J,
        control: Z,
      })),
      (t[64] = M),
      (t[65] = Je),
      (t[66] = J),
      (t[67] = Z),
      (t[68] = Qe))
    : (Qe = t[68]);
  let Q = Qe,
    $e = n === `source-control` ? `source-control-defaults` : `project-defaults`,
    et = n === `source-control` ? `Repositories` : `New threads`,
    $;
  t[69] !== Ie ||
  t[70] !== n ||
  t[71] !== ze?.worktreeSubmodules ||
  t[72] !== H ||
  t[73] !== R ||
  t[74] !== I ||
  t[75] !== B ||
  t[76] !== A ||
  t[77] !== P ||
  t[78] !== Ge ||
  t[79] !== _.defaultAutoPull ||
  t[80] !== _.defaultRuntimeMode ||
  t[81] !== _.pullRequestMergeMethod ||
  t[82] !== _.removeAgentCreditsOnMerge ||
  t[83] !== _.worktreeSubmodules ||
  t[84] !== U ||
  t[85] !== v ||
  t[86] !== Q
    ? (($ =
        n === `project`
          ? (0, h.jsxs)(h.Fragment, { children: [Ge, Q] })
          : n === `general`
            ? (0, h.jsxs)(h.Fragment, {
                children: [
                  Ge,
                  (0, h.jsx)(p, {
                    serverScoped: !0,
                    settingKeys: [`defaultRuntimeMode`],
                    mixed: A,
                    ...d(`default-permissions`),
                    description: H
                      ? `Permissions for new threads in this project.`
                      : `Default permissions for new threads. Projects can override them.`,
                    resetAction:
                      _.defaultRuntimeMode === i.defaultRuntimeMode
                        ? null
                        : (0, h.jsx)(m, {
                            label: `default permissions`,
                            onClick: () => v({ defaultRuntimeMode: i.defaultRuntimeMode }),
                          }),
                    control: (0, h.jsxs)(u, {
                      value: A ? null : _.defaultRuntimeMode,
                      onValueChange: (e) => {
                        e && v({ defaultRuntimeMode: e });
                      },
                      children: [
                        (0, h.jsxs)(l, {
                          size: `sm`,
                          "aria-label": `Default permissions`,
                          children: [
                            !A &&
                              (0, h.jsx)(Ie, {
                                className: `size-3.5 shrink-0 text-muted-foreground`,
                              }),
                            (0, h.jsx)(s, {
                              children: A ? `Mixed` : Te[_.defaultRuntimeMode].label,
                            }),
                          ],
                        }),
                        (0, h.jsx)(c, {
                          align: `end`,
                          alignItemWithTrigger: !1,
                          children: we.map(Me),
                        }),
                      ],
                    }),
                  }),
                  Q,
                  (0, h.jsx)(p, {
                    serverScoped: !0,
                    settingKeys: [`worktreeSubmodules`],
                    mixed: P,
                    ...d(`worktree-submodules`),
                    description: H
                      ? `How new worktrees in this project populate git submodules.`
                      : `How new worktrees populate git submodules. Projects and their t3.json can override it.`,
                    resetAction:
                      !H && _.worktreeSubmodules !== null
                        ? (0, h.jsx)(m, {
                            label: `worktree submodules`,
                            onClick: () => v({ worktreeSubmodules: null }),
                          })
                        : null,
                    control: (0, h.jsxs)(u, {
                      value: P ? null : (ze?.worktreeSubmodules ?? null),
                      onValueChange: (e) => {
                        Oe(e) && v({ worktreeSubmodules: e });
                      },
                      children: [
                        (0, h.jsx)(l, {
                          size: `sm`,
                          "aria-label": `Worktree submodules`,
                          children: (0, h.jsx)(s, {
                            children: (e) => (Oe(e) ? me[e] : U ? `Unavailable` : `Mixed`),
                          }),
                        }),
                        (0, h.jsx)(c, {
                          align: `end`,
                          alignItemWithTrigger: !1,
                          children: De.map(je),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(p, {
                    serverScoped: !0,
                    settingKeys: [`defaultAutoPull`],
                    mixed: I,
                    id: `automatic-pull`,
                    title: `Automatically pull`,
                    description: H
                      ? `Keeps this project's default branch current when the checkout has no local changes or commits.`
                      : `Keeps the default branch current when the checkout has no local changes or commits. Projects can override it.`,
                    resetAction: _.defaultAutoPull
                      ? (0, h.jsx)(m, {
                          label: `default automatic pull`,
                          tooltip: `Reset automatic pull to off`,
                          onClick: () => v({ defaultAutoPull: !1 }),
                        })
                      : null,
                    control: (0, h.jsx)(ge, {
                      "aria-label": `Default automatic pull`,
                      mixed: I,
                      checked: !I && _.defaultAutoPull,
                      onCheckedChange: (e) => v({ defaultAutoPull: e }),
                    }),
                  }),
                  (0, h.jsx)(p, {
                    serverScoped: !0,
                    settingKeys: [`removeAgentCreditsOnMerge`],
                    mixed: R,
                    ...d(`remove-agent-credits-on-merge`),
                    description: `Remove recognized agent credit lines from merge and squash messages on hosts that support it, keeping human co-authors. Includes auto-merge. Excludes merge queues, stack merges, and existing commits.`,
                    resetAction: _.removeAgentCreditsOnMerge
                      ? (0, h.jsx)(m, {
                          label: `agent credit removal`,
                          tooltip: `Keep agent credits`,
                          onClick: () => v({ removeAgentCreditsOnMerge: !1 }),
                        })
                      : null,
                    control: (0, h.jsx)(ge, {
                      "aria-label": `Remove agent credits when merging`,
                      mixed: R,
                      checked: !R && _.removeAgentCreditsOnMerge,
                      onCheckedChange: (e) => v({ removeAgentCreditsOnMerge: e }),
                    }),
                  }),
                  (0, h.jsx)(p, {
                    serverScoped: !0,
                    settingKeys: [`pullRequestMergeMethod`],
                    mixed: B,
                    ...d(`pull-request-merge-method`),
                    description: H
                      ? `Pull requests in this project start with this method.`
                      : `Pull requests start with this method. Last selected reuses whatever you chose most recently on this device.`,
                    resetAction:
                      _.pullRequestMergeMethod === null
                        ? null
                        : (0, h.jsx)(m, {
                            label: `default merge method`,
                            tooltip: `Reset to last selected`,
                            onClick: () => v({ pullRequestMergeMethod: null }),
                          }),
                    control: (0, h.jsxs)(u, {
                      value: B ? null : (_.pullRequestMergeMethod ?? `last`),
                      onValueChange: (e) => {
                        e === `last`
                          ? v({ pullRequestMergeMethod: null })
                          : (e === `merge` || e === `squash` || e === `rebase`) &&
                            v({ pullRequestMergeMethod: e });
                      },
                      children: [
                        (0, h.jsx)(l, {
                          size: `sm`,
                          "aria-label": `Default pull request merge method`,
                          children: (0, h.jsx)(s, { children: Ae }),
                        }),
                        (0, h.jsxs)(c, {
                          align: `end`,
                          alignItemWithTrigger: !1,
                          children: [
                            (0, h.jsx)(o, { value: `last`, children: `Last selected` }),
                            (0, h.jsx)(o, { value: `merge`, children: pe.merge }),
                            (0, h.jsx)(o, { value: `squash`, children: pe.squash }),
                            (0, h.jsx)(o, { value: `rebase`, children: pe.rebase }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })),
      (t[69] = Ie),
      (t[70] = n),
      (t[71] = ze?.worktreeSubmodules),
      (t[72] = H),
      (t[73] = R),
      (t[74] = I),
      (t[75] = B),
      (t[76] = A),
      (t[77] = P),
      (t[78] = Ge),
      (t[79] = _.defaultAutoPull),
      (t[80] = _.defaultRuntimeMode),
      (t[81] = _.pullRequestMergeMethod),
      (t[82] = _.removeAgentCreditsOnMerge),
      (t[83] = _.worktreeSubmodules),
      (t[84] = U),
      (t[85] = v),
      (t[86] = Q),
      (t[87] = $))
    : ($ = t[87]);
  let tt;
  return (
    t[88] !== $e || t[89] !== et || t[90] !== $
      ? ((tt = (0, h.jsx)(be, { id: $e, title: et, children: $ })),
        (t[88] = $e),
        (t[89] = et),
        (t[90] = $),
        (t[91] = tt))
      : (tt = t[91]),
    tt
  );
}
function Ae(e) {
  return e === `merge` || e === `squash` || e === `rebase`
    ? pe[e]
    : e === `last`
      ? `Last selected`
      : `Mixed`;
}
function je(e) {
  return (0, h.jsx)(o, { value: e, children: me[e] }, e);
}
function Me(e) {
  let t = Te[e],
    n = t.icon;
  return (0, h.jsx)(
    o,
    {
      value: e,
      className: `min-w-64`,
      children: (0, h.jsxs)(`div`, {
        className: `grid gap-0.5`,
        children: [
          (0, h.jsxs)(`span`, {
            className: `inline-flex items-center gap-1.5 font-medium`,
            children: [
              (0, h.jsx)(n, { className: `size-3.5 shrink-0 text-muted-foreground` }),
              t.label,
            ],
          }),
          (0, h.jsx)(`span`, {
            className: `text-xs leading-4 text-muted-foreground`,
            children: t.description,
          }),
        ],
      }),
    },
    e,
  );
}
export { ke as t };
//# sourceMappingURL=ProjectDefaultsSettings-BNpE-_Mp.js.map
