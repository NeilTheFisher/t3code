import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { i as r } from "./search-BrluOr7L.js";
import { t as i } from "./layers-CHU4eBL6.js";
import { Bn as a, Vn as o, Wn as s, hm as c, t as l } from "./utils-CPoejuy5.js";
import { M as u } from "./useSettings-N-JG2LFZ.js";
import { n as d } from "./useNavigate-Dq4t21kA.js";
import { t as f } from "./useLocation-Be_QVulB.js";
import { n as p } from "./EnvironmentMachineIcon-M7J6_xOZ.js";
import { t as m } from "./itemRows-DNgi4sqO.js";
import { Qo as h } from "./main-BZa0O6xN.js";
import {
  C as g,
  E as _,
  T as v,
  i as y,
  p as b,
  s as x,
  x as S,
} from "./settingsLayout-2i87rQY9.js";
var C = t(),
  w = e(n(), 1);
function T(e) {
  let t = (0, C.c)(41),
    { children: n, target: c, targetId: p, eligibleEnvironmentIds: T } = e,
    { selectScope: O, search: k, groups: A } = S(),
    j;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { from: `/settings` }), (t[0] = j))
    : (j = t[0]);
  let M = d(j),
    N;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = { select: D }), (t[1] = N)) : (N = t[1]);
  let P = f(N),
    { environments: F } = u(),
    I = E,
    L,
    R,
    z,
    B,
    V;
  if (
    t[2] !== n ||
    t[3] !== T ||
    t[4] !== F ||
    t[5] !== A ||
    t[6] !== M ||
    t[7] !== P ||
    t[8] !== k ||
    t[9] !== O ||
    t[10] !== c ||
    t[11] !== p
  ) {
    let e = c === `checkout` ? A.filter((e) => !k.project || e.projectKey === k.project) : [null],
      u;
    t[17] !== T ||
    t[18] !== F ||
    t[19] !== A ||
    t[20] !== M ||
    t[21] !== P ||
    t[22] !== O ||
    t[23] !== c ||
    t[24] !== p
      ? ((u = (e) =>
          (e
            ? e.memberProjects.map((t) => {
                let n = F.find((e) => e.environmentId === t.environmentId),
                  { primary: r, secondary: i } = n
                    ? v(n, F)
                    : { primary: t.environmentLabel ?? `Environment`, secondary: t.environmentId };
                return {
                  label: r,
                  secondary: [i, t.workspaceRoot].filter(Boolean).join(` · `),
                  icon: I(n),
                  search: {
                    project: e.projectKey,
                    machine: t.environmentId,
                    checkout: t.physicalProjectKey,
                  },
                };
              })
            : c === `project`
              ? A.map((e) => ({
                  label: e.displayName,
                  secondary: [
                    ...(A.some(
                      (t) => t.projectKey !== e.projectKey && t.displayName === e.displayName,
                    )
                      ? _(e, F)
                      : []),
                    e.workspaceRoot,
                  ].join(` · `),
                  icon: (0, w.jsx)(h, { project: e, className: `size-4 shrink-0` }),
                  search: { project: e.projectKey },
                }))
              : c === `environment`
                ? F.filter((e) => T === void 0 || T.includes(e.environmentId)).map((e) => {
                    let { primary: t, secondary: n } = v(e, F);
                    return {
                      label: t,
                      secondary: n || g(e),
                      icon: I(e),
                      search: { machine: e.environmentId },
                    };
                  })
                : [
                    {
                      label: `Open all environments`,
                      icon: (0, w.jsx)(i, {
                        "aria-hidden": !0,
                        className: `size-4 shrink-0 text-muted-foreground`,
                      }),
                      search: {},
                    },
                  ]
          ).map((e) =>
            (0, w.jsxs)(
              `button`,
              {
                type: `button`,
                className: l(
                  m,
                  `flex w-full min-w-0 cursor-pointer items-center gap-3 text-left outline-none hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                ),
                onClick: () => {
                  p ? M({ to: P, search: () => e.search, hash: p }) : O(e.search);
                },
                children: [
                  e.icon,
                  (0, w.jsxs)(`span`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, w.jsx)(`span`, {
                        className: `block truncate text-sm font-medium`,
                        children: e.label,
                      }),
                      e.secondary
                        ? (0, w.jsxs)(a, {
                            children: [
                              (0, w.jsx)(s, {
                                render: (0, w.jsx)(`span`, {
                                  className: `block truncate text-xs text-muted-foreground`,
                                }),
                                children: e.secondary,
                              }),
                              (0, w.jsx)(o, { children: e.secondary }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, w.jsx)(r, {
                    "aria-hidden": !0,
                    className: `size-4 shrink-0 text-muted-foreground`,
                  }),
                ],
              },
              JSON.stringify(e.search),
            ),
          )),
        (t[17] = T),
        (t[18] = F),
        (t[19] = A),
        (t[20] = M),
        (t[21] = P),
        (t[22] = O),
        (t[23] = c),
        (t[24] = p),
        (t[25] = u))
      : (u = t[25]);
    let d = u;
    ((L = y),
      (B = `space-y-3`),
      t[26] === n
        ? (V = t[27])
        : ((V = (0, w.jsx)(`p`, {
            role: `status`,
            className: `px-3 text-sm text-muted-foreground sm:px-4`,
            children: n,
          })),
          (t[26] = n),
          (t[27] = V)),
      (R = `space-y-4`));
    let f;
    (t[28] !== d || t[29] !== c
      ? ((f = (e) =>
          e?.displayName
            ? (0, w.jsx)(x, { title: e.displayName, children: d(e) }, e.projectKey)
            : (0, w.jsx)(b, { children: d(e) }, e?.projectKey ?? c)),
        (t[28] = d),
        (t[29] = c),
        (t[30] = f))
      : (f = t[30]),
      (z = e.map(f)),
      (t[2] = n),
      (t[3] = T),
      (t[4] = F),
      (t[5] = A),
      (t[6] = M),
      (t[7] = P),
      (t[8] = k),
      (t[9] = O),
      (t[10] = c),
      (t[11] = p),
      (t[12] = L),
      (t[13] = R),
      (t[14] = z),
      (t[15] = B),
      (t[16] = V));
  } else ((L = t[12]), (R = t[13]), (z = t[14]), (B = t[15]), (V = t[16]));
  let H;
  t[31] !== R || t[32] !== z
    ? ((H = (0, w.jsx)(`div`, { className: R, children: z })),
      (t[31] = R),
      (t[32] = z),
      (t[33] = H))
    : (H = t[33]);
  let U;
  t[34] !== B || t[35] !== V || t[36] !== H
    ? ((U = (0, w.jsxs)(`div`, { className: B, children: [V, H] })),
      (t[34] = B),
      (t[35] = V),
      (t[36] = H),
      (t[37] = U))
    : (U = t[37]);
  let W;
  return (
    t[38] !== L || t[39] !== U
      ? ((W = (0, w.jsx)(L, { children: U })), (t[38] = L), (t[39] = U), (t[40] = W))
      : (W = t[40]),
    W
  );
}
function E(e) {
  return e
    ? (0, w.jsx)(p, {
        "aria-hidden": !0,
        kind: c(e.serverConfig),
        className: `size-4 shrink-0 text-muted-foreground`,
      })
    : null;
}
function D(e) {
  return e.pathname;
}
export { T as t };
//# sourceMappingURL=SettingsScopeNotice-DSMhWXDE.js.map
