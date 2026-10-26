import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import {
  Dr as i,
  Lc as a,
  Vy as o,
  Xl as s,
  _r as c,
  iu as l,
  jc as u,
  ky as d,
} from "./utils-CPoejuy5.js";
import { a as f, i as p, n as m, r as h, t as g } from "./number-field-D11YcDFl.js";
import { a as _, c as v, o as y, s as b, t as x } from "./select-CBCDohvC.js";
import { M as S, m as C } from "./server-3D32GveR.js";
import { l as w, u as T } from "./session-0UrRHIau.js";
import { t as E } from "./use-atom-command-DGAuqAck.js";
import { g as D, i as O } from "./toast-B4KPIJDZ.js";
import { s as k } from "./timestampFormat-BBUHLb6E.js";
import { l as A } from "./settingsSearch-CrEaqXdW.js";
import { Rs as j, xi as M, yr as N } from "./main-BZa0O6xN.js";
import {
  _ as P,
  a as F,
  g as I,
  i as ee,
  m as te,
  p as L,
  r as R,
  s as z,
  w as B,
  x as V,
  y as H,
} from "./settingsLayout-2i87rQY9.js";
import { t as U } from "./FoldedSettingsSection-Aztb41kt.js";
import { t as W } from "./SettingsScopeNotice-DSMhWXDE.js";
var G = e(t(), 1),
  K = n(),
  q = e(r(), 1),
  J = d(o);
function Y(e) {
  let t = (0, K.c)(18),
    { environments: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = C.databaseCompactionRecommendations(JSON.stringify(n.map(X)))), (t[0] = n), (t[1] = r));
  let o = u(r),
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[2] = s)) : (s = t[2]);
  let [c, l] = a(`database-storage-notice-dismissed`, s, J),
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { target: `command` }), (t[3] = d))
    : (d = t[3]);
  let { copyToClipboard: f } = D(d),
    p,
    m;
  if (t[4] !== f || t[5] !== c || t[6] !== n || t[7] !== o || t[8] !== l) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[11] === c
        ? (e = t[12])
        : ((e = (e) => !c.includes(e.environmentId)), (t[11] = c), (t[12] = e));
      let r = o.filter(e);
      if (r.length === 0) {
        m = null;
        break bb0;
      }
      let a;
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((a = (0, q.jsx)(F, {
            title: `Reclaim freed database space`,
            description: `Old history is cleaned up automatically, but these databases still hold the freed space. Run the command on each machine to return it to disk; it pauses and restarts the background service. Quit the desktop app first if it hosts the environment.`,
          })),
          (t[13] = a))
        : (a = t[13]);
      let s;
      (t[14] !== f || t[15] !== n || t[16] !== l
        ? ((s = (e) => {
            let { environmentId: t, status: r } = e;
            return (0, q.jsx)(
              F,
              {
                title: `${(r.reclaimableBytes / 1073741824).toFixed(1)} GiB on ${n.find((e) => e.environmentId === t)?.label ?? t}`,
                description: (0, q.jsx)(`code`, {
                  className: `select-text break-all`,
                  children: r.compactCommand,
                }),
                control: (0, q.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-1.5`,
                  children: [
                    (0, q.jsx)(i, {
                      variant: `outline`,
                      size: `xs`,
                      onClick: () => f(r.compactCommand, void 0),
                      children: `Copy command`,
                    }),
                    (0, q.jsx)(i, {
                      variant: `ghost`,
                      size: `xs`,
                      onClick: () => l((e) => [...e, t]),
                      children: `Dismiss`,
                    }),
                  ],
                }),
              },
              t,
            );
          }),
          (t[14] = f),
          (t[15] = n),
          (t[16] = l),
          (t[17] = s))
        : (s = t[17]),
        (p = (0, q.jsxs)(z, {
          id: `storage-database`,
          title: `Database`,
          children: [a, r.map(s)],
        })));
    }
    ((t[4] = f), (t[5] = c), (t[6] = n), (t[7] = o), (t[8] = l), (t[9] = p), (t[10] = m));
  } else ((p = t[9]), (m = t[10]));
  return m === Symbol.for(`react.early_return_sentinel`) ? p : m;
}
function X(e) {
  return e.environmentId;
}
function Z() {
  let e = (0, K.c)(22),
    { connectedEnvironments: t, targets: n } = V(),
    r = I(),
    i = H(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = [`worktreesDirectory`]), (e[0] = a))
    : (a = e[0]);
  let o = P(a),
    s = (0, G.useRef)(!1);
  if (t.some(re)) return null;
  let l;
  e[1] === n ? (l = e[2]) : ((l = n.map(ne).join(`,`)), (e[1] = n), (e[2] = l));
  let u = l,
    d;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = A(`storage-worktrees-location`)), (e[3] = d))
    : (d = e[3]);
  let f;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = [`worktreesDirectory`]), (e[4] = f))
    : (f = e[4]);
  let p;
  e[5] !== o || e[6] !== r.worktreesDirectory || e[7] !== i
    ? ((p =
        o || r.worktreesDirectory !== ``
          ? (0, q.jsx)(R, {
              label: `worktree location`,
              onClick: () => i({ worktreesDirectory: `` }),
            })
          : null),
      (e[5] = o),
      (e[6] = r.worktreesDirectory),
      (e[7] = i),
      (e[8] = p))
    : (p = e[8]);
  let m = `${u}:${o}:${r.worktreesDirectory}`,
    h = o ? `Mixed` : `Default`,
    g = o ? `` : r.worktreesDirectory,
    _;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        s.current = !0;
      }),
      (e[9] = _))
    : (_ = e[9]);
  let v;
  e[10] !== o || e[11] !== r.worktreesDirectory || e[12] !== i
    ? ((v = (e) => {
        let t = e.target.value.trim();
        (s.current && (o || t !== r.worktreesDirectory) && i({ worktreesDirectory: t }),
          (s.current = !1));
      }),
      (e[10] = o),
      (e[11] = r.worktreesDirectory),
      (e[12] = i),
      (e[13] = v))
    : (v = e[13]);
  let y;
  e[14] !== m || e[15] !== h || e[16] !== g || e[17] !== v
    ? ((y = (0, q.jsx)(
        c,
        {
          "aria-label": `Worktree location`,
          autoCapitalize: `none`,
          spellCheck: !1,
          placeholder: h,
          defaultValue: g,
          onChange: _,
          onBlur: v,
        },
        m,
      )),
      (e[14] = m),
      (e[15] = h),
      (e[16] = g),
      (e[17] = v),
      (e[18] = y))
    : (y = e[18]);
  let b;
  return (
    e[19] !== y || e[20] !== p
      ? ((b = (0, q.jsx)(F, {
          ...d,
          description: `Folder where new worktrees are created, on any drive, such as D:\\worktrees or ~/worktrees. Existing worktrees stay where they are. Leave empty to use the T3 home folder.`,
          serverScoped: !0,
          settingKeys: f,
          resetAction: p,
          control: y,
        })),
        (e[19] = y),
        (e[20] = p),
        (e[21] = b))
      : (b = e[21]),
    b
  );
}
function ne(e) {
  return e.environmentId;
}
function re(e) {
  return e.serverConfig?.environment.capabilities.worktreesDirectory !== !0;
}
function Q(e) {
  let t = (0, K.c)(15),
    { label: n, value: r, onChange: i, minimum: a } = e,
    o = a === void 0 ? 1 : a,
    [s, c] = (0, G.useState)(r),
    [l, u] = (0, G.useState)(r);
  l !== r && (u(r), c(r));
  let d;
  t[0] !== s || t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== r
    ? ((d =
        r === null
          ? (0, q.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: `Off` })
          : (0, q.jsx)(g, {
              value: s,
              min: o,
              max: 3650,
              step: 1,
              size: `sm`,
              className: `w-auto`,
              onValueChange: c,
              onValueCommitted: (e) => {
                if (e === null) c(r);
                else {
                  let t = Math.min(3650, Math.max(o, Math.round(e)));
                  (c(t), i(t));
                }
              },
              children: (0, q.jsxs)(h, {
                children: [
                  (0, q.jsx)(m, { "aria-label": `Decrease ${n}` }),
                  (0, q.jsx)(f, {
                    "aria-label": `${n} in days`,
                    size: new Intl.NumberFormat().format(s ?? r).length,
                    className: `field-sizing-content w-auto min-w-[1ch] grow-0 text-right`,
                  }),
                  (0, q.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `self-center pr-2 text-xs`,
                    children: `days`,
                  }),
                  (0, q.jsx)(p, { "aria-label": `Increase ${n}` }),
                ],
              }),
            })),
      (t[0] = s),
      (t[1] = n),
      (t[2] = o),
      (t[3] = i),
      (t[4] = r),
      (t[5] = d))
    : (d = t[5]);
  let _ = r !== null,
    v;
  t[6] === i ? (v = t[7]) : ((v = (e) => i(e ? 8 : null)), (t[6] = i), (t[7] = v));
  let y;
  t[8] !== n || t[9] !== _ || t[10] !== v
    ? ((y = (0, q.jsx)(j, { "aria-label": n, checked: _, onCheckedChange: v })),
      (t[8] = n),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b;
  return (
    t[12] !== d || t[13] !== y
      ? ((b = (0, q.jsxs)(`div`, { className: `flex items-center gap-3`, children: [d, y] })),
        (t[12] = d),
        (t[13] = y),
        (t[14] = b))
      : (b = t[14]),
    b
  );
}
var ie = {
  "any-local-files": `Any local files`,
  "uncommitted-changes": `Uncommitted changes`,
  "tracked-changes": `Edited tracked files`,
};
function ae(e, t) {
  let n = e[0];
  return n
    ? t <= 1
      ? n.counts
      : e.length === t && e.every((e) => e.counts === n.counts)
        ? `${n.counts} on every machine`
        : e.map((e) => `${e.label}: ${e.counts}`).join(` · `)
    : ``;
}
function oe(e) {
  let t = (0, K.c)(16),
    { report: n, environmentLabel: r } = e,
    i;
  if (t[0] !== r || t[1] !== n.entries) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e, t) => {
          let n =
            e.kind === `worktree`
              ? ((e.threadId === null ? e.path : e.path?.split(/[\\/]/).findLast(Boolean)) ??
                `Worktrees`)
              : e.kind === `logs`
                ? `Rotated logs`
                : `Browser artifacts`;
          return (0, q.jsx)(
            F,
            {
              title: (0, q.jsx)(`span`, { className: `wrap-anywhere select-text`, children: n }),
              description: (0, q.jsxs)(`span`, {
                className: `block space-y-2 wrap-anywhere select-text`,
                children: [
                  (0, q.jsx)(`span`, {
                    className: `block ${e.outcome === `failed` ? `text-destructive` : ``}`,
                    children: e.reason,
                  }),
                  (0, q.jsxs)(`span`, {
                    className: `grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 border-l border-border/60 pl-3`,
                    children: [
                      (0, q.jsx)(`span`, { children: `Machine` }),
                      (0, q.jsx)(`span`, { className: `text-foreground/80`, children: r }),
                      e.projectPath &&
                        (0, q.jsxs)(q.Fragment, {
                          children: [
                            (0, q.jsx)(`span`, { children: `Project` }),
                            (0, q.jsx)(`code`, {
                              className: `text-foreground/80`,
                              children: e.projectPath,
                            }),
                          ],
                        }),
                      e.path &&
                        (0, q.jsxs)(q.Fragment, {
                          children: [
                            (0, q.jsx)(`span`, { children: `Folder` }),
                            (0, q.jsx)(`code`, {
                              className: `text-foreground/80`,
                              children: e.path,
                            }),
                          ],
                        }),
                      e.threadTitle &&
                        (0, q.jsxs)(q.Fragment, {
                          children: [
                            (0, q.jsx)(`span`, { children: `Thread` }),
                            (0, q.jsx)(`span`, { children: e.threadTitle }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              control:
                (e.outcome === `removed` || (e.outcome === `kept` && e.bytes !== null)) &&
                (0, q.jsx)(`span`, {
                  className: `text-xs text-muted-foreground`,
                  children: [
                    e.kind !== `worktree` && e.files !== null
                      ? `${e.files.toLocaleString()} ${e.files === 1 ? `file` : `files`}`
                      : null,
                    e.bytes === null ? null : N(e.bytes),
                  ]
                    .filter(Boolean)
                    .join(` · `),
                }),
            },
            `${e.path ?? e.kind}:${e.threadId ?? t}`,
          );
        }),
        (t[3] = r),
        (t[4] = e)),
      (i = n.entries.map(e)),
      (t[0] = r),
      (t[1] = n.entries),
      (t[2] = i));
  } else i = t[2];
  let a;
  t[5] !== r || t[6] !== n.omittedCount
    ? ((a =
        n.omittedCount > 0 &&
        (0, q.jsxs)(`p`, {
          className: `px-3 py-2.5 text-xs text-muted-foreground sm:px-4`,
          children: [r, `: `, n.omittedCount.toLocaleString(), ` more results.`],
        })),
      (t[5] = r),
      (t[6] = n.omittedCount),
      (t[7] = a))
    : (a = t[7]);
  let o;
  t[8] !== r || t[9] !== n.entries.length || t[10] !== n.omittedCount
    ? ((o =
        n.entries.length === 0 &&
        n.omittedCount === 0 &&
        (0, q.jsxs)(`p`, {
          className: `px-3 py-2.5 text-xs text-muted-foreground sm:px-4`,
          children: [r, `: Nothing needed cleanup.`],
        })),
      (t[8] = r),
      (t[9] = n.entries.length),
      (t[10] = n.omittedCount),
      (t[11] = o))
    : (o = t[11]);
  let s;
  return (
    t[12] !== i || t[13] !== a || t[14] !== o
      ? ((s = (0, q.jsxs)(q.Fragment, { children: [i, a, o] })),
        (t[12] = i),
        (t[13] = a),
        (t[14] = o),
        (t[15] = s))
      : (s = t[15]),
    s
  );
}
var se = w(`web-storage-cleanup-reports`, (e) =>
    C.storageCleanupReport({ environmentId: e, input: {} }),
  ),
  ce = w(`web-storage-cleanup-permissions`, C.runStorageCleanup.permissionAtom);
function le() {
  let e = (0, K.c)(4),
    t = M(),
    n = Date.parse(`${t}:00.000Z`),
    { connectedEnvironments: r } = V(),
    [a, o] = (0, G.useState)(!1),
    c = E(C.runStorageCleanup),
    d = r.filter(ve),
    f = d.map(_e),
    p = u(se(T(f))),
    m = u(ce(T(f))),
    h;
  e[0] !== m || e[1] !== p
    ? ((h = (e, t) => {
        let n = p[t];
        return {
          environmentId: e,
          allowed: m[t],
          report: n._tag === `Success` ? n.value : null,
          loading: n.waiting,
          failed: n._tag === `Failure`,
        };
      }),
      (e[0] = m),
      (e[1] = p),
      (e[2] = h))
    : (h = e[2]);
  let g = f.map(h),
    _ = d.some(he);
  if (d.length === 0) return null;
  let v = d.map((e) => {
      let t = g.find((t) => t.environmentId === e.environmentId),
        i = t?.report ?? null;
      return {
        environment: e,
        report: i,
        label: B(e, r),
        counts: i
          ? `${i.counts.removed} removed, ${i.counts.kept} kept${i.counts.failed > 0 ? `, ${i.counts.failed} failed` : ``}`
          : ``,
        description: i
          ? `Last run ${k(i.finishedAt, n)}. ${N(i.bytesFreed)} recovered.${i.counts.failed > 0 ? ` ${i.counts.failed} ${i.counts.failed === 1 ? `item` : `items`} couldn't be removed.` : ``}`
          : t?.failed
            ? `Could not load the last run.`
            : t?.loading
              ? `Loading last run…`
              : `Cleanup hasn't run yet.`,
      };
    }),
    y = async () => {
      a ||
        (o(!0),
        await Promise.all(
          d
            .filter((e) => g.some((t) => t.environmentId === e.environmentId && t.allowed))
            .map(async (e) => {
              let t = await c({ environmentId: e.environmentId, input: {} });
              if (t._tag === `Success`) {
                let n = t.value.entries.filter(me);
                n.length > 0 &&
                  O.add({
                    type: `error`,
                    title: `Cleanup failed on ${e.label}`,
                    description: n[0].reason,
                  });
              } else
                s(t) ||
                  O.add({
                    type: `error`,
                    title: `Could not run cleanup on ${e.label}`,
                    description: String(l(t)),
                  });
            }),
        ).finally(() => o(!1)));
    },
    b;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = A(`storage-delete-now`)), (e[3] = b))
      : (b = e[3]),
    (0, q.jsxs)(z, {
      id: `storage-cleanup`,
      title: `Cleanup`,
      variant: `plain`,
      children: [
        (0, q.jsx)(L, {
          children: (0, q.jsx)(F, {
            ...b,
            description: (0, q.jsx)(`span`, {
              children: _
                ? v.map((e) => {
                    let { environment: t, label: n, description: r } = e;
                    return (0, q.jsxs)(
                      `span`,
                      { className: `block`, children: [d.length > 1 ? `${n}: ` : ``, r] },
                      t.environmentId,
                    );
                  })
                : `Turn on a cleanup rule to use this.`,
            }),
            control: (0, q.jsx)(i, {
              variant: `outline`,
              size: `sm`,
              disabled: a || !_ || !g.some(pe),
              onClick: () => void y(),
              children: a ? `Deleting…` : `Delete now`,
            }),
          }),
        }),
        v.some(fe) &&
          (0, q.jsx)(U, {
            id: `storage-cleanup-last-run`,
            title: `Last run`,
            headerPlacement: `inside`,
            summary: ae(v.filter(de), r.length),
            children: v.map(ue),
          }),
      ],
    })
  );
}
function ue(e) {
  let { environment: t, label: n, report: r } = e;
  return r && (0, q.jsx)(oe, { report: r, environmentLabel: n }, t.environmentId);
}
function de(e) {
  let { report: t } = e;
  return t !== null;
}
function fe(e) {
  let { report: t } = e;
  return t !== null;
}
function pe(e) {
  return e.allowed;
}
function me(e) {
  return e.outcome === `failed`;
}
function he(e) {
  let t = e.serverConfig?.settings;
  if (!t) return !1;
  let n = ge;
  return (
    t.storageCleanup.browserArtifactsAfterDays !== null ||
    t.storageCleanup.logsAfterDays !== null ||
    n(S(t, null)) ||
    Object.values(t.projectSettingsOverrides).some(
      (e) => e.worktreeCleanup?.mode === `custom` && n(e.worktreeCleanup.rules),
    )
  );
}
function ge(e) {
  return (
    e.worktreeAfterDays !== null ||
    e.worktreeSettledAfterDays !== null ||
    e.worktreeOnMerge ||
    e.worktreeOnDelete ||
    e.worktreeUnchanged
  );
}
function _e(e) {
  let { environmentId: t } = e;
  return t;
}
function ve(e) {
  return e.serverConfig?.environment.capabilities.storageCleanupRun === !0;
}
function $() {
  let e = (0, K.c)(62),
    { scope: t, environments: n, connectedEnvironments: r, targets: i, target: a } = V(),
    o = I(),
    s = t.kind === `project` || t.kind === `checkout`,
    c = o.storageCleanup,
    l;
  e[0] === o ? (l = e[1]) : ((l = S(o, null)), (e[0] = o), (e[1] = l));
  let u;
  e[2] !== o.storageCleanup || e[3] !== l
    ? ((u = { ...c, ...l }), (e[2] = o.storageCleanup), (e[3] = l), (e[4] = u))
    : (u = e[4]);
  let d = u,
    f = Ee,
    p;
  e[5] === a ? (p = e[6]) : ((p = f(a)), (e[5] = a), (e[6] = p));
  let m = p,
    h;
  if (e[7] !== m || e[8] !== i) {
    let t;
    (e[10] === m ? (t = e[11]) : ((t = (e) => f(e) !== m), (e[10] = m), (e[11] = t)),
      (h = i.some(t)),
      (e[7] = m),
      (e[8] = i),
      (e[9] = h));
  } else h = e[9];
  let g = h,
    C = H(),
    w = te(),
    T;
  e[12] !== d || e[13] !== i
    ? ((T = (e) =>
        i.some((t) => ({ ...t.settings.storageCleanup, ...S(t.settings, null) })[e] !== d[e])
          ? `Mixed across selected machines`
          : void 0),
      (e[12] = d),
      (e[13] = i),
      (e[14] = T))
    : (T = e[14]);
  let E = T,
    D;
  e[15] === C ? (D = e[16]) : ((D = (e) => C({ storageCleanup: e })), (e[15] = C), (e[16] = D));
  let O = D,
    k;
  e[17] !== s || e[18] !== O || e[19] !== C
    ? ((k = (e) => (s ? C({ worktreeCleanup: { mode: `custom`, rules: e } }) : O(e))),
      (e[17] = s),
      (e[18] = O),
      (e[19] = C),
      (e[20] = k))
    : (k = e[20]);
  let M = k;
  if (s && r.some(Te)) {
    let t;
    return (
      e[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(W, {
            target: `all`,
            children: `Update the selected machines to configure project worktree cleanup.`,
          })),
          (e[21] = t))
        : (t = e[21]),
      t
    );
  }
  if (r.some(we)) {
    let t;
    e[22] === r ? (t = e[23]) : ((t = r.filter(Ce).map(Se)), (e[22] = r), (e[23] = t));
    let n;
    return (
      e[24] === t
        ? (n = e[25])
        : ((n = (0, q.jsx)(W, {
            target: `environment`,
            eligibleEnvironmentIds: t,
            children: `Update the selected environments to use storage cleanup, or choose a machine that supports it.`,
          })),
          (e[24] = t),
          (e[25] = n)),
      n
    );
  }
  let N;
  e[26] !== r || e[27] !== s
    ? ((N = !s && (0, q.jsx)(Y, { environments: r.filter(xe) })),
      (e[26] = r),
      (e[27] = s),
      (e[28] = N))
    : (N = e[28]);
  let P;
  e[29] === s ? (P = e[30]) : ((P = !s && (0, q.jsx)(Z, {})), (e[29] = s), (e[30] = P));
  let L;
  e[31] !== w || e[32] !== s || e[33] !== g || e[34] !== m || e[35] !== C
    ? ((L =
        s &&
        (0, q.jsx)(F, {
          title: `Automatic worktree cleanup`,
          description:
            m === `off`
              ? `Keep this project's worktrees until you delete them manually.`
              : m === `custom`
                ? `Use these rules for this project.`
                : `Use each machine's worktree cleanup settings.`,
          serverScoped: !0,
          settingKeys: [`worktreeCleanup`],
          mixed: g,
          control: (0, q.jsxs)(x, {
            value: g ? null : m,
            onValueChange: (e) => {
              e === `inherit`
                ? w([`worktreeCleanup`])
                : e === `off`
                  ? C({ worktreeCleanup: { mode: `off` } })
                  : e === `custom` && C({ worktreeCleanup: { mode: `custom`, rules: {} } });
            },
            children: [
              (0, q.jsx)(b, {
                size: `sm`,
                "aria-label": `Automatic worktree cleanup`,
                children: (0, q.jsx)(v, {
                  children: g
                    ? `Mixed`
                    : m === `inherit`
                      ? `Inherit`
                      : m === `off`
                        ? `Off`
                        : `Custom`,
                }),
              }),
              (0, q.jsxs)(y, {
                align: `end`,
                alignItemWithTrigger: !1,
                children: [
                  (0, q.jsx)(_, { value: `inherit`, children: `Inherit` }),
                  (0, q.jsx)(_, { value: `off`, children: `Off` }),
                  (0, q.jsx)(_, { value: `custom`, children: `Custom` }),
                ],
              }),
            ],
          }),
        })),
      (e[31] = w),
      (e[32] = s),
      (e[33] = g),
      (e[34] = m),
      (e[35] = C),
      (e[36] = L))
    : (L = e[36]);
  let R;
  e[37] !== r ||
  e[38] !== n ||
  e[39] !== s ||
  e[40] !== g ||
  e[41] !== m ||
  e[42] !== E ||
  e[43] !== d ||
  e[44] !== M
    ? ((R =
        (!s || (!g && m === `custom`)) &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(F, {
              title: `Delete worktrees with deleted threads`,
              status: E(`worktreeOnDelete`),
              description: `Remove unused worktrees when active or archived threads are deleted. Worktrees with local changes are kept.`,
              serverScoped: !s,
              control: (0, q.jsx)(j, {
                "aria-label": `Delete worktrees with deleted threads`,
                checked: d.worktreeOnDelete,
                onCheckedChange: (e) => M({ worktreeOnDelete: e }),
              }),
            }),
            (0, q.jsx)(F, {
              title: `Delete inactive worktrees`,
              status: E(`worktreeAfterDays`),
              description: `Remove worktrees after their threads have been inactive for this many days. Branches and thread history are kept.`,
              serverScoped: !s,
              control: (0, q.jsx)(Q, {
                label: `Delete inactive worktrees`,
                value: d.worktreeAfterDays,
                onChange: (e) => M({ worktreeAfterDays: e }),
              }),
            }),
            r.length > 0 &&
              r.every(be) &&
              (0, q.jsx)(F, {
                title: `Delete settled worktrees`,
                status: [
                  E(`worktreeSettledAfterDays`),
                  n.length > r.length ? `Offline machines will not get this setting` : void 0,
                ]
                  .filter(Boolean)
                  .join(`. `),
                description: `Remove worktrees this many days after their thread settles. Set 0 days to remove them at the next cleanup. Branches and thread history are kept.`,
                serverScoped: !s,
                control: (0, q.jsx)(Q, {
                  label: `Delete settled worktrees`,
                  value: d.worktreeSettledAfterDays,
                  minimum: 0,
                  onChange: (e) => M({ worktreeSettledAfterDays: e }),
                }),
              }),
            (0, q.jsx)(F, {
              title: `Delete merged worktrees`,
              status: E(`worktreeOnMerge`),
              description: `Remove worktrees whose pull request is merged and whose commits are included in the default branch.`,
              serverScoped: !s,
              control: (0, q.jsx)(j, {
                "aria-label": `Delete merged worktrees`,
                checked: d.worktreeOnMerge,
                onCheckedChange: (e) => M({ worktreeOnMerge: e }),
              }),
            }),
            (0, q.jsx)(F, {
              title: `Delete unchanged worktrees`,
              status: E(`worktreeUnchanged`),
              description: `Remove worktrees with no commits beyond the default branch.`,
              serverScoped: !s,
              control: (0, q.jsx)(j, {
                "aria-label": `Delete unchanged worktrees`,
                checked: d.worktreeUnchanged,
                onCheckedChange: (e) => M({ worktreeUnchanged: e }),
              }),
            }),
            r.every(ye) &&
              (0, q.jsx)(F, {
                ...A(`storage-worktree-keep-when`),
                status: E(`worktreeKeepWhen`),
                description:
                  d.worktreeKeepWhen === `any-local-files`
                    ? `Includes ignored files, except node_modules.`
                    : d.worktreeKeepWhen === `tracked-changes`
                      ? `Deletes untracked and ignored files, including .env.`
                      : `Keeps edits and untracked files. Deletes ignored files, including .env.`,
                serverScoped: !s,
                control: (0, q.jsxs)(x, {
                  value: E(`worktreeKeepWhen`) ? null : d.worktreeKeepWhen,
                  onValueChange: (e) => {
                    (e === `any-local-files` ||
                      e === `uncommitted-changes` ||
                      e === `tracked-changes`) &&
                      M({ worktreeKeepWhen: e });
                  },
                  children: [
                    (0, q.jsx)(b, {
                      size: `sm`,
                      "aria-label": `Keep worktrees with local changes`,
                      children: (0, q.jsx)(v, {
                        children: E(`worktreeKeepWhen`) ? `Mixed` : ie[d.worktreeKeepWhen],
                      }),
                    }),
                    (0, q.jsxs)(y, {
                      align: `end`,
                      alignItemWithTrigger: !1,
                      children: [
                        (0, q.jsx)(_, { value: `any-local-files`, children: `Any local files` }),
                        (0, q.jsx)(_, {
                          value: `uncommitted-changes`,
                          children: `Uncommitted changes`,
                        }),
                        (0, q.jsx)(_, {
                          value: `tracked-changes`,
                          children: `Edited tracked files`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        })),
      (e[37] = r),
      (e[38] = n),
      (e[39] = s),
      (e[40] = g),
      (e[41] = m),
      (e[42] = E),
      (e[43] = d),
      (e[44] = M),
      (e[45] = R))
    : (R = e[45]);
  let B;
  e[46] !== L || e[47] !== R || e[48] !== P
    ? ((B = (0, q.jsxs)(z, { id: `storage-worktrees`, title: `Worktrees`, children: [P, L, R] })),
      (e[46] = L),
      (e[47] = R),
      (e[48] = P),
      (e[49] = B))
    : (B = e[49]);
  let U;
  e[50] !== s || e[51] !== E || e[52] !== d || e[53] !== O
    ? ((U =
        !s &&
        (0, q.jsxs)(z, {
          id: `storage-artifacts`,
          title: `Artifacts and logs`,
          children: [
            (0, q.jsx)(F, {
              title: `Delete old browser artifacts`,
              status: E(`browserArtifactsAfterDays`),
              description: `Delete saved browser captures after this many days. Older capture links will no longer open.`,
              serverScoped: !0,
              control: (0, q.jsx)(Q, {
                label: `Delete old browser artifacts`,
                value: d.browserArtifactsAfterDays,
                onChange: (e) => O({ browserArtifactsAfterDays: e }),
              }),
            }),
            (0, q.jsx)(F, {
              title: `Delete old rotated logs`,
              status: E(`logsAfterDays`),
              description: `Delete inactive rotated log files after this many days. Current logs are kept.`,
              serverScoped: !0,
              control: (0, q.jsx)(Q, {
                label: `Delete old rotated logs`,
                value: d.logsAfterDays,
                onChange: (e) => O({ logsAfterDays: e }),
              }),
            }),
          ],
        })),
      (e[50] = s),
      (e[51] = E),
      (e[52] = d),
      (e[53] = O),
      (e[54] = U))
    : (U = e[54]);
  let G;
  e[55] === s ? (G = e[56]) : ((G = !s && (0, q.jsx)(le, {})), (e[55] = s), (e[56] = G));
  let J;
  return (
    e[57] !== B || e[58] !== U || e[59] !== G || e[60] !== N
      ? ((J = (0, q.jsxs)(ee, { children: [N, B, U, G] })),
        (e[57] = B),
        (e[58] = U),
        (e[59] = G),
        (e[60] = N),
        (e[61] = J))
      : (J = e[61]),
    J
  );
}
function ye(e) {
  return e.serverConfig?.environment.capabilities.storageCleanupRun === !0;
}
function be(e) {
  return e.serverConfig?.environment.capabilities.settledWorktreeCleanup === !0;
}
function xe(e) {
  return e.serverConfig?.environment.capabilities.databaseStorage === !0;
}
function Se(e) {
  return e.environmentId;
}
function Ce(e) {
  return e.serverConfig?.environment.capabilities.storageCleanup === !0;
}
function we(e) {
  return e.serverConfig?.environment.capabilities.storageCleanup !== !0;
}
function Te(e) {
  return e.serverConfig?.environment.capabilities.projectWorktreeCleanup !== !0;
}
function Ee(e) {
  return e?.sources.worktreeCleanup === `project`
    ? (e.settings.worktreeCleanup?.mode ?? `inherit`)
    : `inherit`;
}
var De = $;
export { De as component };
//# sourceMappingURL=_chat.settings.storage-ZgZb3Ufc.js.map
