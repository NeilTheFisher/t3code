import { $c as e, J as t, W as n, X as r, Y as i, _l as a, rl as o } from "./utils-CPoejuy5.js";
var s = `t3code:terminal-state:v1`;
function c(t, n) {
  if (!t || typeof t != `object`) return { terminalUiStateByThreadKey: {} };
  let r = t,
    i = r.terminalUiStateByThreadKey ?? r.terminalStateByThreadKey ?? {};
  return {
    terminalUiStateByThreadKey: Object.fromEntries(Object.entries(i).filter(([t]) => e(t))),
  };
}
function l() {
  return n(typeof window < `u` ? window.localStorage : void 0);
}
function u(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    let e = r.trim();
    e.length === 0 || n.has(e) || (n.add(e), t.push(e));
  }
  return t;
}
function d(e) {
  return `group-${e}`;
}
function f(e, t) {
  let n = e,
    r = 2;
  for (; t.has(n);) ((n = `${e}-${r}`), (r += 1));
  return (t.add(n), n);
}
function p(e, t) {
  return e.findIndex((e) => e.terminalIds.includes(t));
}
function m(e) {
  return u(e);
}
function h(e, t) {
  if (t.length === 0) return [];
  let n = new Set(t),
    r = new Set(),
    i = [],
    a = new Set();
  for (let o of e) {
    let e = m(o.terminalIds).filter((e) => !(!n.has(e) || r.has(e)));
    if (e.length === 0) continue;
    for (let t of e) r.add(t);
    let s = o.id.trim().length > 0 ? o.id.trim() : d(e[0] ?? t[0] ?? ``);
    i.push({
      id: f(s, a),
      terminalIds: e,
      ...(o.splitDirection === `vertical` ? { splitDirection: `vertical` } : {}),
    });
  }
  for (let e of t) r.has(e) || i.push({ id: f(d(e), a), terminalIds: [e] });
  return i;
}
function g(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) if (e[n] !== t[n]) return !1;
  return !0;
}
function _(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (
      !r ||
      !i ||
      r.id !== i.id ||
      (r.splitDirection ?? `horizontal`) !== (i.splitDirection ?? `horizontal`) ||
      !g(r.terminalIds, i.terminalIds)
    )
      return !1;
  }
  return !0;
}
function v(e, t) {
  return (
    e.terminalOpen === t.terminalOpen &&
    e.terminalHeight === t.terminalHeight &&
    e.activeTerminalId === t.activeTerminalId &&
    e.activeTerminalGroupId === t.activeTerminalGroupId &&
    g(e.terminalIds, t.terminalIds) &&
    _(e.terminalGroups, t.terminalGroups)
  );
}
var y = Object.freeze({
  terminalOpen: !1,
  terminalHeight: 280,
  terminalIds: [],
  activeTerminalId: ``,
  terminalGroups: [],
  activeTerminalGroupId: ``,
});
function b() {
  return { ...y, terminalIds: [...y.terminalIds], terminalGroups: E(y.terminalGroups) };
}
function x() {
  return y;
}
function S(e) {
  let t = u(e.terminalIds),
    n = t.includes(e.activeTerminalId) ? e.activeTerminalId : (t[0] ?? ``),
    r = h(e.terminalGroups, t),
    i = r.some((t) => t.id === e.activeTerminalGroupId) ? e.activeTerminalGroupId : null,
    a = r.find((e) => e.terminalIds.includes(n))?.id ?? null,
    o = {
      terminalOpen: e.terminalOpen,
      terminalHeight:
        Number.isFinite(e.terminalHeight) && e.terminalHeight > 0 ? e.terminalHeight : 280,
      terminalIds: t,
      activeTerminalId: n,
      terminalGroups: r,
      activeTerminalGroupId: i ?? a ?? r[0]?.id ?? ``,
    };
  return v(e, o) ? e : o;
}
function C(e) {
  return v(S(e), y);
}
function w(e) {
  return e.trim().length > 0;
}
function T(e) {
  return o(e);
}
function E(e) {
  return e.map((e) => ({
    id: e.id,
    terminalIds: [...e.terminalIds],
    ...(e.splitDirection === `vertical` ? { splitDirection: `vertical` } : {}),
  }));
}
function D(e, t, n, r = `horizontal`) {
  let i = S(e),
    a = i.terminalIds.length === 0 ? `new` : n;
  if (!w(t)) return i;
  let o = !i.terminalIds.includes(t),
    s = o ? [...i.terminalIds, t] : i.terminalIds,
    c = E(i.terminalGroups),
    l = p(c, t);
  if (
    (l >= 0 &&
      ((c[l].terminalIds = c[l].terminalIds.filter((e) => e !== t)),
      c[l].terminalIds.length === 0 && c.splice(l, 1)),
    a === `new`)
  ) {
    let e = new Set(c.map((e) => e.id)),
      n = f(d(t), e);
    return (
      c.push({ id: n, terminalIds: [t] }),
      S({
        ...i,
        terminalOpen: !0,
        terminalIds: s,
        activeTerminalId: t,
        terminalGroups: c,
        activeTerminalGroupId: n,
      })
    );
  }
  let u = c.findIndex((e) => e.id === i.activeTerminalGroupId);
  if ((u < 0 && (u = p(c, i.activeTerminalId)), u < 0)) {
    let e = new Set(c.map((e) => e.id)),
      t = f(d(i.activeTerminalId), e);
    (c.push({ id: t, terminalIds: [i.activeTerminalId] }), (u = c.length - 1));
  }
  let m = c[u];
  if (!m) return i;
  let h = new Set(m.terminalIds);
  if (o && !h.has(t) && m.terminalIds.length >= 4) return i;
  if (!h.has(t)) {
    let e = m.terminalIds.indexOf(i.activeTerminalId);
    e >= 0 ? m.terminalIds.splice(e + 1, 0, t) : m.terminalIds.push(t);
  }
  return (
    r === `vertical` ? (m.splitDirection = `vertical`) : delete m.splitDirection,
    S({
      ...i,
      terminalOpen: !0,
      terminalIds: s,
      activeTerminalId: t,
      terminalGroups: c,
      activeTerminalGroupId: m.id,
    })
  );
}
function O(e, t) {
  let n = S(e);
  return t && n.terminalIds.length === 0
    ? D(n, a, `new`)
    : n.terminalOpen === t
      ? n
      : { ...n, terminalOpen: t };
}
function k(e, t) {
  let n = S(e);
  return !Number.isFinite(t) || t <= 0 || n.terminalHeight === t ? n : { ...n, terminalHeight: t };
}
function A(e, t, n = `horizontal`) {
  return D(e, t, `split`, n);
}
function j(e, t) {
  return D(e, t, `new`);
}
function M(e, t) {
  let n = S(e);
  if (!n.terminalIds.includes(t)) return n;
  let r = n.terminalGroups.find((e) => e.terminalIds.includes(t))?.id ?? n.activeTerminalGroupId;
  return n.activeTerminalId === t && n.activeTerminalGroupId === r
    ? n
    : { ...n, activeTerminalId: t, activeTerminalGroupId: r };
}
function N(e, t) {
  let n = S(e);
  if (!n.terminalIds.includes(t)) return n;
  let r = n.terminalIds.filter((e) => e !== t);
  if (r.length === 0) return b();
  let i = n.terminalIds.indexOf(t),
    a =
      n.activeTerminalId === t ? (r[Math.min(i, r.length - 1)] ?? r[0] ?? ``) : n.activeTerminalId,
    o = [];
  for (let e of n.terminalGroups) {
    let n = e.terminalIds.filter((e) => e !== t);
    n.length > 0 && o.push({ ...e, terminalIds: n });
  }
  let s = o.find((e) => e.terminalIds.includes(a))?.id ?? o[0]?.id ?? d(a);
  return S({
    terminalOpen: n.terminalOpen,
    terminalHeight: n.terminalHeight,
    terminalIds: r,
    activeTerminalId: a,
    terminalGroups: o,
    activeTerminalGroupId: s,
  });
}
function P(e, t) {
  let n = S(e);
  if (g(n.terminalIds, t)) return n;
  let r = t.includes(n.activeTerminalId) ? n.activeTerminalId : (t[0] ?? ``),
    i = h(n.terminalGroups, t),
    a = i.find((e) => e.terminalIds.includes(r))?.id ?? null;
  return S({
    ...n,
    terminalIds: t,
    activeTerminalId: r,
    terminalGroups: i,
    activeTerminalGroupId: a ?? i[0]?.id ?? ``,
  });
}
function F(e, t) {
  return !t || t.threadId.length === 0 ? x() : (e[T(t)] ?? x());
}
function I(e, t, n) {
  if (t.threadId.length === 0) return e;
  let r = T(t),
    i = F(e, t),
    a = n(i);
  if (a === i) return e;
  if (C(a)) {
    if (e[r] === void 0) return e;
    let { [r]: t, ...n } = e;
    return n;
  }
  return { ...e, [r]: a };
}
function L(e, t, n, r) {
  let i = n.trim();
  if (i.length === 0) return e;
  let a = T(t),
    o = e[a] ?? [];
  if (o.includes(i) === r) return e;
  if (r) return { ...e, [a]: [...o, i] };
  let s = o.filter((e) => e !== i);
  return s.length > 0 ? { ...e, [a]: s } : R(e, a);
}
function R(e, t) {
  if (e[t] === void 0) return e;
  let { [t]: n, ...r } = e;
  return r;
}
var z = r()(
  i(
    (e, t) => {
      let n = (t, n, r) => {
        e((e) => {
          let i = T(t),
            a = e.suppressedTerminalIdsByThreadKey[i] ?? [],
            o = I(e.terminalUiStateByThreadKey, t, (e) => n(e, a)),
            s = r
              ? L(e.suppressedTerminalIdsByThreadKey, t, r.terminalId, r.suppressed)
              : e.suppressedTerminalIdsByThreadKey;
          return o === e.terminalUiStateByThreadKey && s === e.suppressedTerminalIdsByThreadKey
            ? e
            : { terminalUiStateByThreadKey: o, suppressedTerminalIdsByThreadKey: s };
        });
      };
      return {
        terminalUiStateByThreadKey: {},
        suppressedTerminalIdsByThreadKey: {},
        setTerminalOpen: (e, r) => {
          let i = F(t().terminalUiStateByThreadKey, e);
          n(
            e,
            (e) => O(e, r),
            r && i.terminalIds.length === 0 ? { terminalId: a, suppressed: !1 } : void 0,
          );
        },
        setTerminalHeight: (e, t) => n(e, (e) => k(e, t)),
        splitTerminal: (e, t) => n(e, (e) => A(e, t), { terminalId: t, suppressed: !1 }),
        splitTerminalVertical: (e, t) =>
          n(e, (e) => A(e, t, `vertical`), { terminalId: t, suppressed: !1 }),
        newTerminal: (e, t) => n(e, (e) => j(e, t), { terminalId: t, suppressed: !1 }),
        ensureTerminal: (e, t, r) =>
          n(
            e,
            (e) => {
              let n = e;
              return (
                e.terminalIds.includes(t) || (n = j(n, t)),
                r?.active === !1 &&
                  (n = {
                    ...n,
                    activeTerminalId: e.activeTerminalId,
                    activeTerminalGroupId: e.activeTerminalGroupId,
                  }),
                (r?.active ?? !0) && (n = M(n, t)),
                r?.open && (n = O(n, !0)),
                S(n)
              );
            },
            { terminalId: t, suppressed: !1 },
          ),
        setActiveTerminal: (e, t) => n(e, (e) => M(e, t)),
        closeTerminal: (e, t) => n(e, (e) => N(e, t), { terminalId: t, suppressed: !0 }),
        reconcileTerminalIds: (e, t) =>
          n(e, (e, n) => {
            if (n.length === 0) return P(e, t);
            let r = new Set(n);
            return P(
              e,
              t.filter((e) => !r.has(e)),
            );
          }),
        clearTerminalUiState: (t) =>
          e((e) => {
            let n = T(t),
              r = I(e.terminalUiStateByThreadKey, t, () => b()),
              i = e.suppressedTerminalIdsByThreadKey[n] !== void 0;
            return r === e.terminalUiStateByThreadKey && !i
              ? e
              : {
                  terminalUiStateByThreadKey: r,
                  suppressedTerminalIdsByThreadKey: R(e.suppressedTerminalIdsByThreadKey, n),
                };
          }),
        removeTerminalUiState: (t) =>
          e((e) => {
            let n = T(t),
              r = e.terminalUiStateByThreadKey[n] !== void 0,
              i = e.suppressedTerminalIdsByThreadKey[n] !== void 0;
            return !r && !i
              ? e
              : {
                  terminalUiStateByThreadKey: R(e.terminalUiStateByThreadKey, n),
                  suppressedTerminalIdsByThreadKey: R(e.suppressedTerminalIdsByThreadKey, n),
                };
          }),
        removeOrphanedTerminalUiStates: (t) =>
          e((e) => {
            let n = new Set(
              [
                ...Object.keys(e.terminalUiStateByThreadKey),
                ...Object.keys(e.suppressedTerminalIdsByThreadKey),
              ].filter((e) => !t.has(e)),
            );
            if (n.size === 0) return e;
            let r = { ...e.terminalUiStateByThreadKey },
              i = { ...e.suppressedTerminalIdsByThreadKey };
            for (let e of n) (delete r[e], delete i[e]);
            return { terminalUiStateByThreadKey: r, suppressedTerminalIdsByThreadKey: i };
          }),
      };
    },
    {
      name: s,
      version: 4,
      storage: t(l),
      migrate: c,
      partialize: (e) => ({ terminalUiStateByThreadKey: e.terminalUiStateByThreadKey }),
    },
  ),
);
export { z as n, F as t };
//# sourceMappingURL=terminalUiStateStore-CqyomI3z.js.map
