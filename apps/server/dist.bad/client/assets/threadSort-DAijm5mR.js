function e(e) {
  if (!e) return null;
  let t = Date.parse(e);
  return Number.isFinite(t) ? t : null;
}
function t(t) {
  if (t.settledAt != null && e(t.settledAt) !== null) return t.settledAt;
  let n = null,
    r = -1 / 0;
  for (let i of [
    t.latestUserMessageAt,
    t.latestRun?.requestedAt,
    t.latestRun?.startedAt,
    t.latestRun?.completedAt,
  ]) {
    let t = e(i ?? void 0);
    i != null && t !== null && t > r && ((n = i), (r = t));
  }
  return n === null ? (e(t.updatedAt) === null ? null : t.updatedAt) : n;
}
function n(e) {
  return e
    .map((e) => {
      let n = t(e);
      return { thread: e, timestampMs: n === null ? 0 : Date.parse(n) };
    })
    .sort(
      (e, t) =>
        t.timestampMs - e.timestampMs ||
        (e.thread.id < t.thread.id ? -1 : +(e.thread.id > t.thread.id)),
    )
    .map(({ thread: e }) => e);
}
function r(...t) {
  for (let n of t) {
    let t = e(n ?? void 0);
    if (t !== null) return t;
  }
  return null;
}
function i(t) {
  if (t.latestUserMessageAt) {
    let n = e(t.latestUserMessageAt);
    if (n !== null) return n;
  }
  let n = null;
  for (let r of t.messages ?? []) {
    if (r.role !== `user`) continue;
    let t = e(r.createdAt);
    t !== null && (n = n === null ? t : Math.max(n, t));
  }
  return n === null ? (r(t.updatedAt, t.createdAt) ?? -1 / 0) : n;
}
function a(e, t) {
  return t === `created_at` ? (r(e.createdAt, e.updatedAt) ?? -1 / 0) : i(e);
}
function o(t) {
  return Math.max(e(t.createdAt) ?? 0, e(t.unsettledAt ?? void 0) ?? 0);
}
function s(e, t) {
  return e.length < 2
    ? [...e]
    : e
        .map((e) => ({ thread: e, timestamp: a(e, t) }))
        .sort(
          (e, t) =>
            t.timestamp - e.timestamp ||
            (e.thread.id < t.thread.id ? 1 : e.thread.id > t.thread.id ? -1 : 0),
        )
        .map(({ thread: e }) => e);
}
function c(e, t, n) {
  let r = null,
    i = -1 / 0;
  for (let o of e) {
    if (o.projectId !== t || o.archivedAt !== null) continue;
    let e = a(o, n);
    (r === null || e > i || (e === i && o.id > r.id)) && ((r = o), (i = e));
  }
  return r;
}
var l = `abcdefghijklmnopqrstuvwxyz`;
function u(e) {
  if (e.length === 0) return !1;
  for (let t of e) if (!l.includes(t)) return !1;
  return e.at(-1) !== l[0];
}
function d(e, t) {
  if (t !== `` && e >= t) throw Error(`pinOrderMidpoint: bounds out of order`);
  if (t !== ``) {
    let n = 0;
    for (; (e.charAt(n) || l[0]) === t.charAt(n);) n += 1;
    if (n > 0) return t.slice(0, n) + d(e.slice(n), t.slice(n));
  }
  let n = e === `` ? 0 : l.indexOf(e.charAt(0)),
    r = t === `` ? 26 : l.indexOf(t.charAt(0));
  return r - n > 1
    ? l.charAt(Math.round((n + r) / 2))
    : t.length > 1
      ? t.charAt(0)
      : l.charAt(n) + d(e.slice(1), ``);
}
function f(e, t) {
  let n = e ?? ``,
    r = t ?? ``;
  return (n !== `` && !u(n)) || (r !== `` && !u(r)) || (r !== `` && n >= r) ? null : d(n, r);
}
function p(e) {
  let t = 2,
    n = 26 ** t;
  for (; n <= (e + 1) * 2;) ((t += 1), (n *= 26));
  let r = n / (e + 1),
    i = [];
  for (let n = 0; n < e; n += 1) {
    let e = Math.round(r * (n + 1));
    e % 26 == 0 && (e += 1);
    let a = ``;
    for (let n = 0; n < t; n += 1) ((a = l.charAt(e % 26) + a), (e = Math.floor(e / 26)));
    i.push(a);
  }
  return i;
}
function m(e) {
  let { orderedIds: t, keysById: n, movedId: r } = e,
    i = new Set(t),
    a = new Set([...n].flatMap(([e, t]) => (!i.has(e) && t != null ? [t] : []))),
    o = t.indexOf(r);
  if (o === -1) return [];
  let s = o > 0 ? t[o - 1] : null,
    c = o < t.length - 1 ? t[o + 1] : null,
    l = s == null ? null : (n.get(s) ?? null),
    u = c == null ? null : (n.get(c) ?? null);
  if ((s === null || l != null) && (c === null || u != null)) {
    let e = f(l, u);
    for (; e !== null && a.has(e);) e = f(e, u);
    if (e !== null) return [{ id: r, orderKey: e }];
  }
  let d = p(t.length + a.size)
    .filter((e) => !a.has(e))
    .slice(0, t.length);
  return t.flatMap((e, t) => {
    let r = d[t];
    return n.get(e) === r ? [] : [{ id: e, orderKey: r }];
  });
}
function h(t) {
  if (t.length < 2) return [...t];
  let n = [],
    r = [];
  for (let e of t) (e.pinOrderKey == null ? r : n).push(e);
  let i = (e, t) =>
    e.id.localeCompare(t.id) || (e.environmentId ?? ``).localeCompare(t.environmentId ?? ``);
  n.sort((e, t) => {
    let n = e.pinOrderKey,
      r = t.pinOrderKey;
    return n < r ? -1 : n > r ? 1 : i(e, t);
  });
  let a = new Map(r.map((t) => [t, e(t.createdAt) ?? 0]));
  return (r.sort((e, t) => a.get(t) - a.get(e) || i(e, t)), [...n, ...r]);
}
function g(e) {
  if (e.length < 2) return [...e];
  let t = new Map();
  for (let n of e) n.activeOrderKey ?? t.set(n, o(n));
  return [...e].sort((e, n) => {
    let r = e.activeOrderKey,
      i = n.activeOrderKey;
    if (r == null && i != null) return -1;
    if (r != null && i == null) return 1;
    let a = 0;
    return (
      (a = r != null && i != null ? (r < i ? -1 : +(r > i)) : t.get(n) - t.get(e)),
      a || e.id.localeCompare(n.id) || (e.environmentId ?? ``).localeCompare(n.environmentId ?? ``)
    );
  });
}
export { t as a, n as c, m as i, s as l, a as n, g as o, f as r, h as s, c as t, e as u };
//# sourceMappingURL=threadSort-DAijm5mR.js.map
