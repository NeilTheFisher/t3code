import {
  $c as e,
  Dy as t,
  J as n,
  Ty as r,
  W as i,
  X as a,
  Y as o,
  __ as s,
  ab as c,
  bh as l,
  cy as u,
  l as d,
  rl as f,
  tl as p,
  yy as m,
} from "./utils-CPoejuy5.js";
var h = (e, t) => {
    if (e.kind !== t.kind || f(e.threadRef) !== f(t.threadRef)) return !1;
    switch (e.kind) {
      case `panel-tab`:
        return t.kind === `panel-tab` && e.surface.id === t.surface.id;
      case `browser`:
        return t.kind === `browser` && e.snapshot.tabId === t.snapshot.tabId;
    }
  },
  g = (e) => e.kind !== `browser` || e.snapshot.profileId !== `incognito`,
  _ = c(s),
  v = c(l),
  y = c(u),
  b = (e) => {
    let t = e;
    if (!t || typeof t.id != `string` || !_(t.threadRef)) return !1;
    if (t.kind === `browser`) return v(t.snapshot);
    if (t.kind !== `panel-tab`) return !1;
    let n = t.surface;
    if (!n || typeof n.id != `string`) return !1;
    switch (n.kind) {
      case `diff`:
      case `files`:
      case `pull-requests`:
      case `git-graph`:
        return n.id === n.kind;
      case `preview`:
        return n.resourceId === null || typeof n.resourceId == `string`;
      case `file`:
        return (
          typeof n.relativePath == `string` &&
          (n.revealLine === null || Number.isSafeInteger(n.revealLine)) &&
          Number.isSafeInteger(n.revealRequestId) &&
          (n.attachment === void 0 || y(n.attachment))
        );
      case `device`:
        return (
          (n.title === void 0 || typeof n.title == `string`) &&
          (n.target === void 0 ||
            (n.target !== null &&
              typeof n.target.hostId == `string` &&
              typeof n.target.deviceId == `string` &&
              typeof n.target.name == `string` &&
              (n.target.platform === `ios` || n.target.platform === `android`)))
        );
      case `pull-request`:
        return (
          typeof n.projectId == `string` &&
          typeof n.repository == `string` &&
          Number.isSafeInteger(n.number) &&
          n.number > 0 &&
          (n.environmentId === void 0 || typeof n.environmentId == `string`) &&
          (n.host === void 0 || typeof n.host == `string`) &&
          (n.url === void 0 || typeof n.url == `string`)
        );
      default:
        return !1;
    }
  },
  x = a()(
    o(
      (e) => ({
        entries: [],
        remember: (t) => {
          let n = d();
          return (
            e((e) => ({
              entries: [{ ...t, id: n }, ...e.entries.filter((e) => !h(e, t))].slice(0, 20),
            })),
            n
          );
        },
        defer: (t) =>
          e((e) => {
            let n = e.entries.find((e) => e.id === t);
            return n ? { entries: [...e.entries.filter((e) => e.id !== t), n] } : e;
          }),
        remove: (t) => e((e) => ({ entries: e.entries.filter((e) => e.id !== t) })),
      }),
      {
        name: `t3code:closed-views:v2`,
        storage: n(() => i(typeof window < `u` ? window.localStorage : void 0)),
        version: 2,
        migrate: (e) => {
          let t = e?.entries;
          return { entries: Array.isArray(t) ? t.filter(b).filter(g) : [] };
        },
        partialize: ({ entries: e }) => ({ entries: e.filter(g) }),
      },
    ),
  ),
  S = `t3code:right-panel-state:v2`,
  C = 15,
  w = p(m.make(`pull-requests-panel`), t.make(`pull-requests-panel`)),
  T = (e) => e.endsWith(`:pull-requests-panel`),
  E = { isOpen: !1, activeSurfaceId: null, surfaces: [] },
  D = { inlineOpen: !0, popoverOpen: !1 },
  O = (e) => {
    switch (e) {
      case `diff`:
        return { id: `diff`, kind: e };
      case `files`:
        return { id: `files`, kind: e };
      case `pull-requests`:
        return { id: `pull-requests`, kind: e };
      case `device`:
        return { id: `device`, kind: e };
      case `git-graph`:
        return { id: `git-graph`, kind: e };
    }
  },
  k = (e) =>
    e
      ? { id: `browser:${e}`, kind: `preview`, resourceId: e }
      : { id: `browser:new`, kind: `preview`, resourceId: null },
  A = (e) => ({ id: `webpage`, kind: `webpage`, url: e }),
  j = (e, t, n) => ({
    id: `file:${e}`,
    kind: `file`,
    relativePath: e,
    revealLine: t,
    revealRequestId: n,
  }),
  M = (e) => ({
    id: `attachment:${e.id}`,
    kind: `file`,
    relativePath: e.name,
    revealLine: null,
    revealRequestId: 0,
    attachment: e,
  }),
  N = (e) => ({
    id: `terminal:${e}`,
    kind: `terminal`,
    resourceId: e,
    terminalIds: [e],
    activeTerminalId: e,
  });
function P(e) {
  let t = e.environmentId === void 0 ? `` : `${encodeURIComponent(e.environmentId)}:`,
    n = e.host === void 0 ? `` : `${encodeURIComponent(e.host.toLowerCase())}:`;
  return `pull-request:${t}${encodeURIComponent(e.projectId)}:${n}${encodeURIComponent(e.repository)}:${e.number}`;
}
function F(e) {
  return {
    id: P(e),
    kind: `pull-request`,
    ...(e.environmentId === void 0 ? {} : { environmentId: e.environmentId }),
    projectId: e.projectId,
    ...(typeof e.host == `string` ? { host: e.host.toLowerCase() } : {}),
    repository: e.repository,
    number: e.number,
    ...(typeof e.url == `string` ? { url: e.url } : {}),
    ...(e.detailTab === void 0 ? {} : { detailTab: e.detailTab }),
  };
}
var I = (e, t, n = !0) => ({
    ...e,
    isOpen: !0,
    surfaces: e.surfaces.some((e) => e.id === t.id) ? e.surfaces : [...e.surfaces, t],
    activeSurfaceId: n ? t.id : e.activeSurfaceId,
  }),
  L = (e, t, n) => {
    let r = e[t] ?? E,
      i = n(r);
    if (
      !i.isOpen &&
      i.activeSurfaceId === null &&
      i.surfaces.length === 0 &&
      !i.dismissedDeviceSurfaceIds?.length &&
      i.proactiveDiffTurnId === void 0
    ) {
      if (!(t in e)) return e;
      let { [t]: n, ...r } = e;
      return r;
    }
    return i === r ? e : { ...e, [t]: i };
  },
  R = (e, t, n) => {
    let r = e[t] ?? D,
      i = n(r);
    if (i.inlineOpen && !i.popoverOpen) {
      if (!(t in e)) return e;
      let { [t]: n, ...r } = e;
      return r;
    }
    return i === r ? e : { ...e, [t]: i };
  },
  z = (e, t, n) => {
    let r = e.byThreadKey[t] ?? E,
      i = L(e.byThreadKey, t, n),
      a = i[t] ?? E,
      o = e.threadPanelVisibilityByThreadKey;
    return (
      !r.isOpen && a.isOpen
        ? (o = R(o, t, (e) => (e.popoverOpen ? { ...e, popoverOpen: !1 } : e)))
        : r.isOpen &&
          !a.isOpen &&
          (o = R(o, t, (e) => (e.popoverOpen && !e.inlineOpen ? { ...e, inlineOpen: !0 } : e))),
      { byThreadKey: i, threadPanelVisibilityByThreadKey: o }
    );
  },
  B = (e, t, n) => ({ ...z(e, t, n) }),
  V = (e, t, n, r = !1) => ({
    ...z(e, t, (e) => {
      let t = n(e);
      if (t === e) return e;
      let r = e.surfaces.filter(
        (e) => e.kind === `device` && !t.surfaces.some((t) => t.id === e.id),
      );
      return r.length === 0
        ? t
        : {
            ...t,
            dismissedDeviceSurfaceIds: [
              ...new Set([...(t.dismissedDeviceSurfaceIds ?? []), ...r.map((e) => e.id)]),
            ],
          };
    }),
    userActionRevisionByThreadKey: {
      ...e.userActionRevisionByThreadKey,
      [t]: (e.userActionRevisionByThreadKey[t] ?? 0) + 1,
    },
    ...(r
      ? {
          closeRevisionByThreadKey: {
            ...e.closeRevisionByThreadKey,
            [t]: (e.closeRevisionByThreadKey[t] ?? 0) + 1,
          },
        }
      : {}),
  }),
  H = (e, t, n) => V(e, t, n, !0);
function U(e) {
  return e === void 0 || !Number.isFinite(e) ? null : Math.max(1, Math.trunc(e));
}
function W(e) {
  return !e || typeof e != `object`
    ? { byThreadKey: {}, threadPanelVisibilityByThreadKey: {} }
    : {
        byThreadKey:
          `byThreadKey` in e && e.byThreadKey && typeof e.byThreadKey == `object`
            ? Object.fromEntries(
                Object.entries(e.byThreadKey)
                  .filter(([e]) => !T(e))
                  .map(([e, t]) => {
                    let n = t && typeof t == `object` ? t : null,
                      i = Array.isArray(n?.surfaces)
                        ? n.surfaces.flatMap((e) => {
                            let t = e.kind;
                            if (t === `plan` || t === `agents`) return [];
                            if (
                              (e.kind === `file` || e.kind === `files`) &&
                              `folderTrail` in e &&
                              typeof e.folderTrail != `string`
                            ) {
                              let { folderTrail: t, ...n } = e;
                              e = n;
                            }
                            if (e.kind === `file`) {
                              let t =
                                  typeof e.revealLine == `number` && Number.isFinite(e.revealLine)
                                    ? Math.max(1, Math.trunc(e.revealLine))
                                    : null,
                                n =
                                  typeof e.revealRequestId == `number` &&
                                  Number.isSafeInteger(e.revealRequestId) &&
                                  e.revealRequestId >= 0
                                    ? e.revealRequestId
                                    : 0;
                              return [{ ...e, revealLine: t, revealRequestId: n }];
                            }
                            if (e.kind === `pull-request`) {
                              if (
                                typeof e.projectId != `string` ||
                                typeof e.repository != `string` ||
                                typeof e.number != `number` ||
                                !Number.isSafeInteger(e.number) ||
                                e.number < 1
                              )
                                return [];
                              let { environmentId: t, ...n } = e;
                              return [
                                F({ ...n, ...(typeof t == `string` ? { environmentId: t } : {}) }),
                              ];
                            }
                            if (e.kind !== `terminal`) return [e];
                            if (
                              !(`resourceId` in e) ||
                              typeof e.resourceId != `string` ||
                              e.id !== `terminal:${e.resourceId}`
                            )
                              return [];
                            let n =
                                `terminalIds` in e && Array.isArray(e.terminalIds)
                                  ? [...new Set(e.terminalIds.filter((e) => typeof e == `string`))]
                                  : [e.resourceId],
                              r =
                                `activeTerminalId` in e &&
                                typeof e.activeTerminalId == `string` &&
                                n.includes(e.activeTerminalId)
                                  ? e.activeTerminalId
                                  : (n[0] ?? e.resourceId);
                            return [
                              {
                                ...e,
                                terminalIds: n.length > 0 ? n : [e.resourceId],
                                activeTerminalId: r,
                              },
                            ];
                          })
                        : [],
                      a = n?.activeSurfaceId,
                      o = i.some((e) => e.id === a)
                        ? (a ?? null)
                        : a === `pull-request`
                          ? (i.find((e) => e.kind === `pull-request`)?.id ?? null)
                          : null,
                      s = i.length > 0 && (typeof n?.isOpen == `boolean` ? n.isOpen : o !== null);
                    return [
                      e,
                      {
                        isOpen: s,
                        surfaces: i,
                        activeSurfaceId: o ?? (s || a === `agents` ? (i[0]?.id ?? null) : null),
                        ...(typeof n?.proactiveDiffTurnId == `string`
                          ? { proactiveDiffTurnId: r.make(n.proactiveDiffTurnId) }
                          : {}),
                        ...(Array.isArray(n?.dismissedDeviceSurfaceIds)
                          ? {
                              dismissedDeviceSurfaceIds: n.dismissedDeviceSurfaceIds.filter(
                                (e) => typeof e == `string`,
                              ),
                            }
                          : {}),
                        ...(n?.maximized === !0 ? { maximized: !0 } : {}),
                      },
                    ];
                  }),
              )
            : {},
        threadPanelVisibilityByThreadKey:
          `threadPanelVisibilityByThreadKey` in e &&
          e.threadPanelVisibilityByThreadKey &&
          typeof e.threadPanelVisibilityByThreadKey == `object`
            ? Object.fromEntries(
                Object.entries(e.threadPanelVisibilityByThreadKey).flatMap(([e, t]) =>
                  !t || typeof t != `object` || !(`inlineOpen` in t)
                    ? []
                    : t.inlineOpen === !1
                      ? [[e, { inlineOpen: !1, popoverOpen: !1 }]]
                      : [],
                ),
              )
            : {},
      };
}
var G = a()(
  o(
    (e, t) => ({
      byThreadKey: {},
      pendingMaximizeThreadKey: null,
      requestMaximize: (t) => e({ pendingMaximizeThreadKey: f(t) }),
      consumeMaximizeRequest: (n) =>
        t().pendingMaximizeThreadKey === f(n) && (e({ pendingMaximizeThreadKey: null }), !0),
      threadPanelVisibilityByThreadKey: {},
      userActionRevisionByThreadKey: {},
      closeRevisionByThreadKey: {},
      getUserActionRevision: (e) => t().userActionRevisionByThreadKey[f(e)] ?? 0,
      openProactive: (t, n, r, i = !1) => {
        let a = !1;
        return (
          e((e) => {
            let o = f(t);
            if (n.kind === `diff`) {
              if (K(e.byThreadKey, t).proactiveDiffTurnId === n.turnId) return e;
              let i = Y(e.byThreadKey, t),
                s = i === `pull-request` || i === `pull-requests`;
              return (
                (a = (e.userActionRevisionByThreadKey[o] ?? 0) === r && i !== `diff` && !s),
                B(e, o, (e) => ({ ...(a ? I(e, O(`diff`)) : e), proactiveDiffTurnId: n.turnId }))
              );
            }
            return (e.userActionRevisionByThreadKey[o] ?? 0) !== r ||
              (!i && K(e.byThreadKey, t).surfaces.some((e) => e.id === n.id))
              ? e
              : ((a = !0), B(e, o, (e) => I(e, n)));
          }),
          a
        );
      },
      open: (t, n) =>
        e((e) =>
          V(e, f(t), (e) =>
            n === `preview`
              ? I(e, e.surfaces.find((e) => e.kind === `preview`) ?? k(null))
              : n === `webpage`
                ? I(e, e.surfaces.find((e) => e.kind === `webpage`) ?? A(null))
                : I(e, O(n)),
          ),
        ),
      openDevice: (t, n, r = !1) =>
        e((e) =>
          (r ? B : V)(e, f(t), (e) => {
            let t = `device:${encodeURIComponent(n.hostId)}:${encodeURIComponent(n.deviceId)}`;
            if (r && e.dismissedDeviceSurfaceIds?.includes(t)) return e;
            let i = { id: t, kind: `device`, target: n },
              a = e.surfaces.find((e) => e.id === t),
              o = a
                ? e.surfaces.filter((e) => e.id !== `device`)
                : e.surfaces.map((e) => (e.id === `device` ? i : e));
            return I(
              {
                ...e,
                surfaces: o,
                dismissedDeviceSurfaceIds: (e.dismissedDeviceSurfaceIds ?? []).filter(
                  (e) => e !== t,
                ),
              },
              a ?? i,
            );
          }),
        ),
      renameDevice: (t, n, r) =>
        e((e) =>
          V(e, f(t), (e) => ({
            ...e,
            surfaces: e.surfaces.map((e) =>
              e.id === n && e.kind === `device`
                ? { ...e, title: r.trim() || e.target?.name || `Device` }
                : e,
            ),
          })),
        ),
      openWebPage: (t) =>
        e((e) => V(e, f(t), (e) => I(e, e.surfaces.find((e) => e.kind === `webpage`) ?? A(null)))),
      setWebPageUrl: (t, n) =>
        e((e) =>
          V(e, f(t), (e) => ({
            ...e,
            surfaces: e.surfaces.map((e) => (e.kind === `webpage` ? { ...e, url: n } : e)),
          })),
        ),
      openBrowser: (t, n) =>
        e((e) =>
          V(e, f(t), (e) => {
            let t = k(n),
              r = n ? e.surfaces.filter((e) => e.id !== `browser:new`) : e.surfaces;
            return I({ ...e, surfaces: r }, t);
          }),
        ),
      openPullRequest: (t, n) =>
        e((e) =>
          V(e, f(t), (e) => {
            let t = F(n),
              r = I(e, t);
            return n.url
              ? {
                  ...r,
                  surfaces: r.surfaces.map((e) =>
                    e.id === t.id && e.kind === `pull-request` ? { ...e, ...t } : e,
                  ),
                }
              : r;
          }),
        ),
      setPullRequestDetailTab: (t, n, r) =>
        e((e) => {
          let i = f(t),
            a = e.byThreadKey[i]?.surfaces.find((e) => e.id === n);
          return a?.kind !== `pull-request` || (a.detailTab ?? `summary`) === r
            ? e
            : B(e, i, (e) => ({
                ...e,
                surfaces: e.surfaces.map((e) =>
                  e.id === n && e.kind === `pull-request` ? { ...e, detailTab: r } : e,
                ),
              }));
        }),
      openFile: (t, n, r) =>
        e((e) =>
          V(e, f(t), (e) => {
            if (n === `.`) return I(e, O(`files`));
            let t = /^[A-Za-z]:\/+$/.test(n) ? n : n.replace(/\/+$/, ``) || n,
              i = e.surfaces.filter((e) => e.kind !== `files`),
              a = `file:${t}`,
              o = i.find((e) => e.id === a && e.kind === `file`),
              s = j(t, U(r), (o?.revealRequestId ?? 0) + 1);
            return {
              ...e,
              isOpen: !0,
              activeSurfaceId: s.id,
              surfaces: o ? i.map((e) => (e.id === s.id ? s : e)) : [...i, s],
            };
          }),
        ),
      navigateFolder: (t, n, r, i, a = !1) =>
        e((e) =>
          V(e, f(t), (e) => {
            let t = e.surfaces.findIndex((e) => e.id === n);
            if (t < 0) return e;
            let o = i === r ? {} : { folderTrail: i },
              s = r === `` ? { ...O(`files`), ...o } : { ...j(r, null, 1), ...o },
              c = e.surfaces[t],
              l = e.surfaces.some((e, n) => n !== t && e.id === s.id),
              u = e.surfaces.flatMap((e, n) => {
                if (n === t) {
                  let e = a ? [c] : [];
                  return l ? e : [...e, s];
                }
                return !l && s.kind === `file` && e.kind === `files` ? [] : [e];
              });
            return { ...e, isOpen: !0, activeSurfaceId: s.id, surfaces: u };
          }),
        ),
      openAttachment: (t, n) =>
        e((e) =>
          V(e, f(t), (e) => {
            let t = e.surfaces.filter((e) => e.kind !== `files`);
            return I({ ...e, surfaces: t }, M(n));
          }),
        ),
      openTerminal: (t, n) => e((e) => V(e, f(t), (e) => I(e, N(n)))),
      splitTerminal: (t, n, r, i = `horizontal`) =>
        e((e) =>
          V(e, f(t), (e) => ({
            ...e,
            isOpen: !0,
            activeSurfaceId: n,
            surfaces: e.surfaces.map((e) => {
              if (e.id !== n || e.kind !== `terminal`) return e;
              let { splitDirection: t, ...a } = e;
              return {
                ...a,
                terminalIds: e.terminalIds.includes(r) ? e.terminalIds : [...e.terminalIds, r],
                activeTerminalId: r,
                ...(i === `vertical` ? { splitDirection: `vertical` } : {}),
              };
            }),
          })),
        ),
      activateTerminal: (t, n, r) =>
        e((e) =>
          V(e, f(t), (e) => ({
            ...e,
            activeSurfaceId: n,
            surfaces: e.surfaces.map((e) =>
              e.id === n && e.kind === `terminal` && e.terminalIds.includes(r)
                ? { ...e, activeTerminalId: r }
                : e,
            ),
          })),
        ),
      closeTerminal: (t, n, r) =>
        e((e) =>
          H(e, f(t), (e) => {
            let t = e.surfaces.find((e) => e.id === n && e.kind === `terminal`);
            if (!t || t.kind !== `terminal`) return e;
            let i = t.terminalIds.filter((e) => e !== r);
            if (i.length === 0) {
              let t = e.surfaces.findIndex((e) => e.id === n),
                r = e.surfaces.filter((e) => e.id !== n),
                i = r[Math.min(t, r.length - 1)] ?? null;
              return {
                ...e,
                isOpen: r.length > 0 && e.isOpen,
                surfaces: r,
                activeSurfaceId: e.activeSurfaceId === n ? (i?.id ?? null) : e.activeSurfaceId,
              };
            }
            return {
              ...e,
              surfaces: e.surfaces.map((e) =>
                e.id === n && e.kind === `terminal`
                  ? {
                      ...e,
                      terminalIds: i,
                      activeTerminalId:
                        e.activeTerminalId === r ? (i.at(-1) ?? i[0]) : e.activeTerminalId,
                    }
                  : e,
              ),
            };
          }),
        ),
      activateSurface: (t, n) =>
        e((e) =>
          V(e, f(t), (e) =>
            e.surfaces.some((e) => e.id === n) ? { ...e, isOpen: !0, activeSurfaceId: n } : e,
          ),
        ),
      closeSurface: (t, n) =>
        e((e) =>
          H(e, f(t), (e) => {
            let t = e.surfaces.findIndex((e) => e.id === n);
            if (t < 0) return e;
            let r = e.surfaces.filter((e) => e.id !== n),
              i = { ...e, isOpen: r.length > 0 && e.isOpen, surfaces: r };
            if (e.activeSurfaceId !== n) return i;
            let a = r[Math.min(t, r.length - 1)] ?? null;
            return { ...i, activeSurfaceId: a?.id ?? null };
          }),
        ),
      closeOtherSurfaces: (t, n) =>
        e((e) =>
          H(e, f(t), (e) => {
            let t = e.surfaces.find((e) => e.id === n);
            return !t || e.surfaces.length === 1
              ? e
              : { ...e, isOpen: !0, surfaces: [t], activeSurfaceId: t.id };
          }),
        ),
      closeSurfacesToRight: (t, n) =>
        e((e) =>
          H(e, f(t), (e) => {
            let t = e.surfaces.findIndex((e) => e.id === n);
            if (t < 0 || t === e.surfaces.length - 1) return e;
            let r = e.surfaces.slice(0, t + 1),
              i = r.some((t) => t.id === e.activeSurfaceId);
            return { ...e, surfaces: r, activeSurfaceId: i ? e.activeSurfaceId : n };
          }),
        ),
      closeAllSurfaces: (t) =>
        e((e) =>
          H(e, f(t), (e) =>
            e.surfaces.length === 0 ? e : { ...e, isOpen: !1, surfaces: [], activeSurfaceId: null },
          ),
        ),
      moveSurface: (t, n, r) =>
        e((e) =>
          z(e, f(t), (e) => {
            let t = e.surfaces.findIndex((e) => e.id === n);
            if (t < 0 || t === r) return e;
            let i = [...e.surfaces];
            return (i.splice(r, 0, ...i.splice(t, 1)), { ...e, surfaces: i });
          }),
        ),
      reconcileBrowserSurfaces: (t, n, r) =>
        e((e) =>
          B(e, f(t), (e) => {
            let t = new Set(n.map((e) => `browser:${e}`)),
              i = e.surfaces.filter(
                (e) => e.kind !== `preview` || (e.id !== `browser:new` && t.has(e.id)),
              ),
              a = new Set(i.map((e) => e.id)),
              o = n.filter((e) => !a.has(`browser:${e}`) && !r?.has(e)).map((e) => k(e)),
              s = [...i, ...o],
              c = s.some((t) => t.id === e.activeSurfaceId),
              l = s.find((e) => e.kind === `preview`);
            return {
              ...e,
              surfaces: s,
              activeSurfaceId: c ? e.activeSurfaceId : (l?.id ?? s[0]?.id ?? null),
            };
          }),
        ),
      reconcileFileSurfaces: (t, n) =>
        e((e) =>
          B(e, f(t), (e) => {
            if (n) return e;
            let t = e.surfaces.filter(
              (e) => e.kind !== `files` && (e.kind !== `file` || e.attachment !== void 0),
            );
            if (t.length === e.surfaces.length) return e;
            let r = t.some((t) => t.id === e.activeSurfaceId);
            return {
              ...e,
              isOpen: t.length > 0 && e.isOpen,
              surfaces: t,
              activeSurfaceId: r ? e.activeSurfaceId : (t.at(-1)?.id ?? null),
            };
          }),
        ),
      show: (t) => e((e) => V(e, f(t), (e) => (e.isOpen ? e : { ...e, isOpen: !0 }))),
      close: (t) => e((e) => V(e, f(t), (e) => (e.isOpen ? { ...e, isOpen: !1 } : e))),
      setMaximized: (t, n) =>
        e((e) =>
          B(e, f(t), (e) => {
            if ((e.maximized ?? !1) === n) return e;
            let { maximized: t, ...r } = e;
            return n ? { ...r, maximized: !0 } : r;
          }),
        ),
      toggleVisibility: (t) => e((e) => V(e, f(t), (e) => ({ ...e, isOpen: !e.isOpen }))),
      toggle: (t, n) =>
        e((e) =>
          V(e, f(t), (e) => {
            let t = e.surfaces.find((t) => t.id === e.activeSurfaceId);
            return e.isOpen && t?.kind === n
              ? { ...e, isOpen: !1 }
              : n === `preview`
                ? I(e, e.surfaces.find((e) => e.kind === `preview`) ?? k(null))
                : n === `webpage`
                  ? I(e, e.surfaces.find((e) => e.kind === `webpage`) ?? A(null))
                  : I(e, O(n));
          }),
        ),
      setThreadPanelOpen: (t, n, r) =>
        e((e) => ({
          threadPanelVisibilityByThreadKey: R(e.threadPanelVisibilityByThreadKey, f(t), (e) => {
            let t = n === `inline` ? `inlineOpen` : `popoverOpen`;
            return e[t] === r ? e : { ...e, [t]: r };
          }),
        })),
      toggleThreadPanel: (t, n) =>
        e((e) => ({
          threadPanelVisibilityByThreadKey: R(e.threadPanelVisibilityByThreadKey, f(t), (e) =>
            n === `inline`
              ? { ...e, inlineOpen: !e.inlineOpen }
              : { ...e, popoverOpen: !e.popoverOpen },
          ),
        })),
      removeThread: (t) =>
        e((e) => {
          let n = f(t);
          if (
            !(n in e.byThreadKey) &&
            !(n in e.threadPanelVisibilityByThreadKey) &&
            !(n in e.userActionRevisionByThreadKey) &&
            !(n in e.closeRevisionByThreadKey)
          )
            return e;
          let { [n]: r, ...i } = e.byThreadKey,
            { [n]: a, ...o } = e.threadPanelVisibilityByThreadKey,
            { [n]: s, ...c } = e.userActionRevisionByThreadKey,
            { [n]: l, ...u } = e.closeRevisionByThreadKey;
          return {
            byThreadKey: i,
            threadPanelVisibilityByThreadKey: o,
            userActionRevisionByThreadKey: c,
            closeRevisionByThreadKey: u,
          };
        }),
    }),
    {
      name: S,
      version: C,
      storage: n(() => i(typeof window < `u` ? window.localStorage : void 0)),
      partialize: (e) => ({
        byThreadKey: Object.fromEntries(Object.entries(e.byThreadKey).filter(([e]) => !T(e))),
        threadPanelVisibilityByThreadKey: Object.fromEntries(
          Object.entries(e.threadPanelVisibilityByThreadKey).flatMap(([e, t]) =>
            t.inlineOpen ? [] : [[e, { inlineOpen: !1, popoverOpen: !1 }]],
          ),
        ),
      }),
      migrate: W,
    },
  ),
);
G.subscribe((t, n) => {
  if (t.closeRevisionByThreadKey !== n.closeRevisionByThreadKey)
    for (let [r, i] of Object.entries(t.closeRevisionByThreadKey)) {
      if (i === n.closeRevisionByThreadKey[r]) continue;
      let a = e(r);
      if (!a) continue;
      let o = n.byThreadKey[r] ?? E,
        s = t.byThreadKey[r] ?? E,
        c = o.surfaces.filter((e) => !s.surfaces.some((t) => t.id === e.id)),
        l = [
          ...c.filter((e) => e.id !== o.activeSurfaceId),
          ...c.filter((e) => e.id === o.activeSurfaceId),
        ];
      for (let e of l)
        e.kind === `terminal` ||
          (e.kind === `preview` && e.resourceId !== null) ||
          x.getState().remember({ kind: `panel-tab`, threadRef: a, surface: e });
    }
});
function K(e, t) {
  return t ? (e[f(t)] ?? E) : E;
}
function q(e, t) {
  return t ? (e[f(t)] ?? D) : D;
}
function J(e, t, n) {
  let r = q(e, t);
  return n === `inline` ? r.inlineOpen : r.popoverOpen;
}
function Y(e, t) {
  let n = K(e, t);
  return n.isOpen ? (n.surfaces.find((e) => e.id === n.activeSurfaceId)?.kind ?? null) : null;
}
function X(e, t) {
  return K(e, t).isOpen ? Z(e, t) : null;
}
function Z(e, t) {
  let n = K(e, t);
  return n.surfaces.find((e) => e.id === n.activeSurfaceId) ?? null;
}
export { X as a, K as c, Y as i, G as l, F as n, Z as o, P as r, J as s, w as t, x as u };
//# sourceMappingURL=rightPanelStore-DEayojei.js.map
