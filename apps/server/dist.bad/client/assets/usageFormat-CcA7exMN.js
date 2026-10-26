import { Bp as e } from "./utils-CPoejuy5.js";
var t = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  n = new Intl.NumberFormat(`en-US`);
function r(e) {
  return t.format(e);
}
function i(e) {
  return n.format(Math.round(e));
}
function a(e) {
  let t = Math.abs(e);
  return t >= 0xe8d4a51000
    ? `${o(e / 0xe8d4a51000)}T`
    : t >= 1e9
      ? `${o(e / 1e9)}B`
      : t >= 1e6
        ? `${o(e / 1e6)}M`
        : t >= 1e3
          ? `${o(e / 1e3)}K`
          : n.format(Math.round(e));
}
function o(e) {
  let t = Math.abs(e),
    n = t >= 100 ? 0 : t >= 10 ? 1 : 2;
  return e.toFixed(n).replace(/\.0+$/, ``);
}
function s(e, t = 1) {
  let n = e * 100,
    r = 10 ** -t;
  return n > 0 && n < r ? `<${r.toFixed(t)}%` : `${n.toFixed(t)}%`;
}
function c(e, t) {
  return t.direction === `serverBehind`
    ? `${e} runs an older server version and is excluded from totals.`
    : `This client is older than the server on ${e}; its usage is excluded from totals.`;
}
function l(e) {
  let [t, n, r] = e.split(`-`).map((e) => Number(e));
  return t === void 0 || n === void 0 || r === void 0
    ? e
    : `${[`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`][n - 1] ?? ``} ${r}`;
}
function u(e, t) {
  let n = [],
    r = Date.parse(`${e}T00:00:00Z`),
    i = Date.parse(`${t}T00:00:00Z`);
  if (Number.isNaN(r) || Number.isNaN(i) || i < r) return n;
  for (let e = r; e <= i; e += 864e5) n.push(new Date(e).toISOString().slice(0, 10));
  return n;
}
var d = 36e5,
  f = new Map();
function p(e, t) {
  if (t.timeZone === void 0) return new Intl.DateTimeFormat(e, t);
  let n = JSON.stringify([e, t]),
    r = f.get(n);
  return (
    r === void 0 && ((r = new Intl.DateTimeFormat(e, t)), f.size >= 16 && f.clear(), f.set(n, r)), r
  );
}
function m(e, t) {
  let n = [],
    r = Date.parse(e),
    i = Date.parse(t);
  if (Number.isNaN(r) || Number.isNaN(i) || i <= r) return n;
  for (let e = r; e < i; e += d) n.push(new Date(e).toISOString());
  return n;
}
function h(e) {
  return e ? { hour: `numeric` } : { hour: `2-digit`, hourCycle: `h23` };
}
function g(e, t, n) {
  return n
    ? e.format(t)
    : e
        .formatToParts(t)
        .map((e) => (e.type === `hour` ? `${e.value}:00` : e.value))
        .join(``);
}
function _(e, t, n = !0) {
  let r = new Date(e);
  if (Number.isNaN(r.getTime())) return e;
  let i = t === void 0 ? {} : { timeZone: t },
    a = p(`en-US`, { ...i, ...h(n) }),
    o = p(`en-CA`, {
      ...i,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
      hour: `2-digit`,
      hourCycle: `h23`,
    }),
    s = o.format(r);
  return [-36e5, d].some((e) => o.format(new Date(r.getTime() + e)) === s)
    ? g(p(`en-US`, { ...i, ...h(n), timeZoneName: `short` }), r, n)
    : g(a, r, n);
}
function v(e, t, n = !0) {
  let r = new Date(e);
  return Number.isNaN(r.getTime())
    ? e
    : g(
        p(`en-US`, {
          ...(t === void 0 ? {} : { timeZone: t }),
          month: `short`,
          day: `numeric`,
          ...h(n),
        }),
        r,
        n,
      );
}
function y(e, t, n, r = !0) {
  let i = new Date(e),
    a = new Date(t);
  if (Number.isNaN(i.getTime()) || Number.isNaN(a.getTime())) return v(e, n, r);
  let o = p(`en-CA`, {
      ...(n === void 0 ? {} : { timeZone: n }),
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
    }),
    s = Date.parse(`${o.format(i)}T00:00:00Z`),
    c = Date.parse(`${o.format(a)}T00:00:00Z`),
    l = Math.round((c - s) / (24 * d)),
    u = _(e, n, r);
  return l === 0 ? `${u} today` : l === 1 ? `${u} yesterday` : v(e, n, r);
}
function b(t, n = new Date(), r = `day`) {
  let i = Intl.DateTimeFormat().resolvedOptions().timeZone || `UTC`,
    a;
  try {
    a = new Intl.DateTimeFormat(`en-CA`, {
      timeZone: i,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
    });
  } catch {
    ((i = `UTC`),
      (a = new Intl.DateTimeFormat(`en-CA`, {
        timeZone: `UTC`,
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
      })));
  }
  let o = a.format(n);
  if (r === `hour`) {
    let t = Math.floor(n.getTime() / 6e4) * 6e4,
      o = t - 24 * d,
      s = new Date(o),
      c = new Date(t);
    return {
      sinceDay: e.make(a.format(s)),
      untilDay: e.make(a.format(c)),
      timeZone: i,
      resolution: r,
      sinceTime: s.toISOString(),
      untilTime: c.toISOString(),
    };
  }
  let [s = 0, c = 1, l = 1] = o.split(`-`).map((e) => Number.parseInt(e, 10)),
    u = new Date(Date.UTC(s, c - 1, l - (t - 1)));
  return {
    sinceDay: e.make(u.toISOString().slice(0, 10)),
    untilDay: e.make(o),
    timeZone: i,
    resolution: r,
  };
}
export {
  l as a,
  y as c,
  r as d,
  b as f,
  v as i,
  a as l,
  m as n,
  _ as o,
  i as r,
  s,
  u as t,
  c as u,
};
//# sourceMappingURL=usageFormat-CcA7exMN.js.map
