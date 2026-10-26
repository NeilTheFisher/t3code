function e(e, t) {
  let n = { hour: `numeric`, minute: `2-digit`, ...(t ? { second: `2-digit` } : {}) };
  return e === `locale` ? n : { ...n, hour12: e === `12-hour` };
}
function t(e) {
  let t = e?.trim();
  if (t)
    try {
      return (Intl.DateTimeFormat.supportedLocalesOf([t]), t);
    } catch {
      return;
    }
}
function n() {
  return typeof window > `u` ? null : (window.desktopBridge?.getSystemLocale?.() ?? null);
}
var r = t(n()),
  i = [0, 1, 2, 3, 4, 5, 6];
function a(e) {
  try {
    let t = new Intl.Locale(e ?? Intl.DateTimeFormat().resolvedOptions().locale),
      n = t.getWeekInfo?.().firstDay ?? t.weekInfo?.firstDay;
    return n === void 0 ? void 0 : i[n % 7];
  } catch {
    return;
  }
}
var o = a(r),
  s = new Map();
function c(t, n) {
  let i = `${t}:${n ? `seconds` : `minutes`}`,
    a = s.get(i);
  if (a) return a;
  let o = new Intl.DateTimeFormat(r, e(t, n));
  return (s.set(i, o), o);
}
function l(e) {
  return c(e, !1).resolvedOptions().hour12 ?? !1;
}
function u(e) {
  let t = new Date(e);
  return Number.isNaN(t.getTime()) ? null : t;
}
var d = new Intl.DateTimeFormat(`en-US`, { month: `long` });
function f(e) {
  let t = e % 100;
  if (t >= 11 && t <= 13) return `th`;
  switch (e % 10) {
    case 1:
      return `st`;
    case 2:
      return `nd`;
    case 3:
      return `rd`;
    default:
      return `th`;
  }
}
function p(e, t) {
  let n = u(e);
  if (!n) return ``;
  let r = m(e, t),
    i = n.getDate(),
    a = d.format(n),
    o = n.getFullYear();
  return `${r}, ${i}${f(i)} ${a} ${o}`;
}
function m(e, t) {
  let n = u(e);
  return n ? c(t, !1).format(n) : ``;
}
var h = new Intl.DateTimeFormat(r, { month: `numeric`, day: `numeric` }),
  g = new Intl.DateTimeFormat(r, { month: `numeric`, day: `numeric`, year: `numeric` });
function _(e, t, n = Date.now()) {
  let r = u(e);
  if (!r) return ``;
  let i = c(t, !1).format(r),
    a = new Date(n),
    o = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime(),
    s = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime(),
    l = Math.round((o - s) / 864e5);
  return l <= 0
    ? i
    : l === 1
      ? `yesterday at ${i}`
      : `${(r.getFullYear() === a.getFullYear() ? h : g).format(r)} ${i}`;
}
function v(e, t, n = Date.now()) {
  let r = u(e);
  if (!r) return ``;
  let i = c(t, !1).format(r),
    a = new Date(n),
    o = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime(),
    s = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime(),
    l = Math.round((s - o) / 864e5);
  return l < 0
    ? _(e, t, n)
    : l === 0
      ? i
      : l === 1
        ? `tomorrow at ${i}`
        : `${(r.getFullYear() === a.getFullYear() ? h : g).format(r)} ${i}`;
}
var y = 6e4,
  b = 36e5,
  x = 864e5;
function S(e) {
  return e < b ? y : e < x ? b : x;
}
function C(e, t = Date.now()) {
  let n = u(e);
  if (!n) return null;
  let r = Math.max(0, t - n.getTime()),
    i = S(r);
  return Math.floor(r / i) * i;
}
function w(e, t = Date.now()) {
  let n = u(e);
  if (!n) return null;
  let r = Math.max(0, t - n.getTime()),
    i = S(r),
    a = n.getTime() + (Math.floor(r / i) + 1) * i;
  return Math.min(a - t, x);
}
function T(e) {
  let t = Math.floor(e / 1e3);
  if (t < 60) return { value: `just now`, suffix: null };
  let n = Math.floor(t / 60);
  if (n < 60) return { value: `${n}m`, suffix: `ago` };
  let r = Math.floor(n / 60);
  return r < 24
    ? { value: `${r}h`, suffix: `ago` }
    : { value: `${Math.floor(r / 24)}d`, suffix: `ago` };
}
function E(e, t = Date.now()) {
  let n = C(e, t);
  return n === null ? null : T(n);
}
function D(e, t = Date.now()) {
  let n = E(e, t);
  return n ? (n.suffix ? `${n.value} ${n.suffix}` : n.value) : ``;
}
function O(e, t = Date.now()) {
  let n = u(e);
  if (!n) return ``;
  let r = t - n.getTime();
  if (r <= 0) return `just now`;
  let i = Math.floor(r / 1e3);
  if (i < 5) return `just now`;
  if (i < 60) return `${i}s`;
  let a = Math.floor(i / 60);
  if (a < 60) return `${a}m`;
  let o = Math.floor(a / 60);
  return o < 24 ? `${o}h` : `${Math.floor(o / 24)}d`;
}
function k(e) {
  let t = u(e);
  if (!t) return null;
  let n = t.getTime() - Date.now();
  if (n <= 0) return { value: `Expired`, suffix: null };
  let r = Math.floor(n / 1e3);
  if (r < 5) return { value: `Soon`, suffix: null };
  if (r < 60) return { value: `${r}s`, suffix: `left` };
  let i = Math.floor(r / 60);
  if (i < 60) return { value: `${i}m`, suffix: `left` };
  let a = Math.floor(i / 60);
  return a < 24
    ? { value: `${a}h`, suffix: `left` }
    : { value: `${Math.floor(a / 24)}d`, suffix: `left` };
}
function A(e) {
  let t = k(e);
  return t ? (t.suffix ? `${t.value} ${t.suffix}` : t.value) : ``;
}
function j(e, t = Date.now()) {
  let n = u(e);
  if (!n) return ``;
  let r = n.getTime() - t;
  if (r <= 0) return `Expired`;
  let i = Math.floor(r / 1e3);
  if (i < 5) return `Expires in a moment`;
  if (i < 60) return `Expires in ${i}s`;
  if (i < 3600) {
    let e = Math.floor(i / 60),
      t = i % 60;
    return t === 0 ? `Expires in ${e}m` : `Expires in ${e}m ${t}s`;
  }
  if (i < 86400) {
    let e = Math.floor(i / 3600),
      t = i % 3600,
      n = Math.floor(t / 60),
      r = t % 60,
      a = [`${e}h`];
    return (n > 0 && a.push(`${n}m`), r > 0 && a.push(`${r}s`), `Expires in ${a.join(` `)}`);
  }
  let a = Math.floor(i / 86400),
    o = i % 86400;
  if (o === 0) return `Expires in ${a}d`;
  let s = Math.floor(o / 3600),
    c = o % 3600,
    l = Math.floor(c / 60),
    d = c % 60,
    f = [];
  return (
    s > 0 && f.push(`${s}h`),
    l > 0 && f.push(`${l}m`),
    d > 0 && f.push(`${d}s`),
    f.length > 0 ? `Expires in ${a}d ${f.join(` `)}` : `Expires in ${a}d`
  );
}
export {
  T as a,
  A as c,
  w as d,
  u as f,
  o as h,
  j as i,
  m as l,
  l as m,
  _ as n,
  E as o,
  C as p,
  O as r,
  D as s,
  p as t,
  v as u,
};
//# sourceMappingURL=timestampFormat-BBUHLb6E.js.map
