import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./archive-x-BGY84qvr.js";
import { Dr as i, Jo as a, Xl as o, hr as s, iu as c, ru as l, tl as u } from "./utils-CPoejuy5.js";
import "./runtime-CY2dlMEg.js";
import { n as d } from "./localApi-CWy6n-K6.js";
import { i as f } from "./toast-B4KPIJDZ.js";
import { t as p } from "./toastHelpers-CSQRKo4F.js";
import { l as m } from "./settingsSearch-CrEaqXdW.js";
import { $o as h, Ea as g, Qo as _, Ta as v, jl as y } from "./main-BZa0O6xN.js";
import { T as b, a as x, i as S, s as C, x as w } from "./settingsLayout-2i87rQY9.js";
var T = t(),
  E = e(n(), 1);
function D() {
  let e = (0, T.c)(23),
    { scope: t, groups: n, environments: D } = w(),
    { unarchiveThread: k, confirmAndDeleteThread: N } = v(),
    { snapshots: P, error: F, isLoading: I, refresh: L } = g(t.environmentIds),
    R,
    z;
  if (
    e[0] !== F ||
    e[1] !== P ||
    e[2] !== N ||
    e[3] !== D ||
    e[4] !== I ||
    e[5] !== n ||
    e[6] !== L ||
    e[7] !== t.kind ||
    e[8] !== t.members ||
    e[9] !== k
  ) {
    let g = t.kind === `project` || t.kind === `checkout` ? new Set(t.members.map(M)) : null,
      v = new Map(
        P.flatMap((e) => {
          let { environmentId: t, snapshot: n } = e;
          return n.projects
            .filter((e) => g === null || g.has(`${t}:${e.id}`))
            .map((e) => [`${t}:${e.id}`, { ...e, environmentId: t }]);
        }),
      ),
      w;
    e[12] === D
      ? (w = e[13])
      : ((w = new Map(
          D.map((e) => {
            let { primary: t, secondary: n } = b(e, D);
            return [e.environmentId, n ? `${t} (${n})` : t];
          }),
        )),
        (e[12] = D),
        (e[13] = w));
    let T = w,
      B;
    e[14] === T
      ? (B = e[15])
      : ((B = (e) => {
          let { environmentId: t, snapshot: n } = e;
          return n.threads.map((e) => ({ ...a(t, e), environmentLabel: T.get(t) ?? t }));
        }),
        (e[14] = T),
        (e[15] = B));
    let V = P.flatMap(B),
      H = new Set(V.filter((e) => v.has(`${e.environmentId}:${e.projectId}`)).map(j)).size > 1,
      U = new Map(n.flatMap(A)),
      W = Array.from(v.values()),
      G = new Map();
    for (let e of W) {
      let t = [];
      for (let n of V) n.projectId === e.id && n.environmentId === e.environmentId && t.push(n);
      if (t.length > 0) {
        let n = `${e.environmentId}:${e.id}`,
          r = H ? U.get(n) : void 0,
          i = r?.projectKey ?? n,
          a = G.get(i);
        a
          ? a.threads.push(...t)
          : G.set(i, { project: e, title: r?.displayName ?? e.title, threads: t });
      }
    }
    let { groups: K, hasMultipleEnvironments: q } = {
        groups: Array.from(G, O),
        hasMultipleEnvironments: H,
      },
      J;
    e[16] !== N || e[17] !== L || e[18] !== k
      ? ((J = async (e, t) => {
          let n = d();
          if (!n) return;
          let r = await n.contextMenu.show(
            [
              { id: `unarchive`, label: `Unarchive` },
              { id: `delete`, label: `Delete`, destructive: !0 },
            ],
            t,
          );
          if (r === `unarchive`) {
            let t = await k(e);
            if (t._tag === `Success`) L();
            else if (!o(t)) {
              let e = c(t);
              f.add(
                p({
                  type: `error`,
                  title: `Failed to unarchive thread`,
                  description: e instanceof Error ? e.message : `An error occurred.`,
                }),
              );
            }
          } else if (r === `delete`) {
            let t = await N(e);
            if (t._tag === `Success`) L();
            else if (!o(t)) {
              let e = c(t);
              f.add(
                p({
                  type: `error`,
                  title: `Failed to delete thread`,
                  description: e instanceof Error ? e.message : `An error occurred.`,
                }),
              );
            }
          }
        }),
        (e[16] = N),
        (e[17] = L),
        (e[18] = k),
        (e[19] = J))
      : (J = e[19]);
    let Y = J;
    ((R = S),
      (z =
        K.length === 0
          ? (0, E.jsx)(C, {
              id: I ? void 0 : m(`archive`).id,
              title: m(`archive`).title,
              children: (0, E.jsx)(x, {
                title: (0, E.jsxs)(`span`, {
                  className: `inline-flex items-center gap-2`,
                  children: [
                    I
                      ? (0, E.jsx)(s, { size: `sm`, tone: `muted` })
                      : (0, E.jsx)(y, { className: `size-3.5 text-muted-foreground` }),
                    I
                      ? `Loading archived threads`
                      : F
                        ? `Could not load archived threads`
                        : `No archived threads`,
                  ],
                }),
                description: I
                  ? `Checking connected environments.`
                  : (F ?? `Archived threads will appear here.`),
              }),
            })
          : K.map((e, t) => {
              let { key: n, project: a, title: s, threads: d } = e;
              return (0, E.jsx)(
                C,
                {
                  id: t === 0 ? m(`archive`).id : void 0,
                  title: s,
                  icon: (0, E.jsx)(_, { project: a }),
                  children: d.map((e) =>
                    (0, E.jsx)(
                      x,
                      {
                        onContextMenu: (t) => {
                          (t.preventDefault(),
                            (async () => {
                              let n = await l(() =>
                                Y(u(e.environmentId, e.id), { x: t.clientX, y: t.clientY }),
                              );
                              if (n._tag === `Failure`) {
                                let e = c(n);
                                f.add(
                                  p({
                                    type: `error`,
                                    title: `Archived thread action failed`,
                                    description:
                                      e instanceof Error ? e.message : `An error occurred.`,
                                  }),
                                );
                              }
                            })());
                        },
                        title: e.title,
                        description: (0, E.jsxs)(`span`, {
                          className: q ? `block truncate` : void 0,
                          children: [
                            q ? `${e.environmentLabel} · ` : null,
                            `Archived `,
                            (0, E.jsx)(h, { timestamp: e.archivedAt ?? e.createdAt }),
                            ` · Created `,
                            (0, E.jsx)(h, { timestamp: e.createdAt }),
                          ],
                        }),
                        control: (0, E.jsxs)(i, {
                          type: `button`,
                          variant: `outline`,
                          size: `sm`,
                          className: `shrink-0`,
                          onClick: () => {
                            (async () => {
                              let t = await k(u(e.environmentId, e.id));
                              if (t._tag === `Success`) L();
                              else if (!o(t)) {
                                let e = c(t);
                                f.add(
                                  p({
                                    type: `error`,
                                    title: `Failed to unarchive thread`,
                                    description:
                                      e instanceof Error ? e.message : `An error occurred.`,
                                  }),
                                );
                              }
                            })();
                          },
                          children: [
                            (0, E.jsx)(r, { className: `size-3.5` }),
                            (0, E.jsx)(`span`, { children: `Unarchive` }),
                          ],
                        }),
                      },
                      `${e.environmentId}:${e.id}`,
                    ),
                  ),
                },
                n,
              );
            })),
      (e[0] = F),
      (e[1] = P),
      (e[2] = N),
      (e[3] = D),
      (e[4] = I),
      (e[5] = n),
      (e[6] = L),
      (e[7] = t.kind),
      (e[8] = t.members),
      (e[9] = k),
      (e[10] = R),
      (e[11] = z));
  } else ((R = e[10]), (z = e[11]));
  let B;
  return (
    e[20] !== R || e[21] !== z
      ? ((B = (0, E.jsx)(R, { children: z })), (e[20] = R), (e[21] = z), (e[22] = B))
      : (B = e[22]),
    B
  );
}
function O(e) {
  let [t, n] = e;
  return { ...n, key: t, threads: n.threads.toSorted(k) };
}
function k(e, t) {
  let n = e.archivedAt ?? e.createdAt;
  return (t.archivedAt ?? t.createdAt).localeCompare(n) || t.id.localeCompare(e.id);
}
function A(e) {
  return e.memberProjectRefs.map((t) => [`${t.environmentId}:${t.projectId}`, e]);
}
function j(e) {
  return e.environmentId;
}
function M(e) {
  return `${e.environmentId}:${e.id}`;
}
var N = D;
export { N as component };
//# sourceMappingURL=_chat.settings.archived-jJ0u5XLV.js.map
