import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import {
  $x as r,
  Au as i,
  Ay as a,
  By as o,
  Dc as s,
  Dd as c,
  Fd as l,
  Gl as u,
  Hl as d,
  Hy as f,
  JC as p,
  Kl as m,
  Ky as h,
  Lf as g,
  Mu as _,
  Q_ as v,
  Sh as y,
  Vy as b,
  Wl as x,
  Wy as S,
  Yg as C,
  ZC as w,
  cp as T,
  cx as E,
  eb as D,
  fb as O,
  hv as k,
  ib as A,
  ig as j,
  jc as ee,
  ju as te,
  ky as ne,
  qf as M,
  qs as re,
  su as ie,
  wy as ae,
  yy as oe,
  zS as se,
  zf as N,
} from "./utils-CPoejuy5.js";
import { J as ce, Q as le, Y as ue, tt as de } from "./entities-CgVpsCCl.js";
import { t as fe } from "./runtime-CY2dlMEg.js";
import { n as pe } from "./filesystem-DxEoLhpA.js";
import { n as P } from "./query-LKSVgBQH.js";
import { n as me } from "./threadSort-DAijm5mR.js";
import { n as he } from "./vcs-DOY0Hs9B.js";
var F = n(),
  I = /[\p{L}\p{N}]/u,
  ge = /\p{Ll}/u,
  L = /\p{Lu}/u,
  R = /\p{N}/u,
  _e = /\p{L}/u,
  ve = /\p{M}/gu,
  ye = /\p{So}/u,
  be = /['’]/,
  xe = /[\u2018\u2019]/g,
  z = new Map(),
  Se = 1e5;
function Ce(e) {
  return e
    .normalize(`NFKD`)
    .replace(ve, ``)
    .toLowerCase()
    .replace(`ς`, `σ`)
    .replace(/[‘’]/, `'`);
}
function we(e) {
  return e
    .replace(/[\u0080-\uffff]/g, (e) => {
      let t = Ce(e);
      return t.length === 1 ? t : e;
    })
    .toLowerCase();
}
function Te(e) {
  let t = e.codePointAt(0);
  return (
    (t >= 12352 && t <= 12543) ||
    (t >= 13312 && t <= 19903) ||
    (t >= 19968 && t <= 40959) ||
    (t >= 63744 && t <= 64255)
  );
}
function Ee(e) {
  return Array.from(e).some((e) => {
    let t = e.codePointAt(0);
    return Te(e) || (t >= 44032 && t <= 55215);
  });
}
function De(e, t, n, r) {
  let i = be.test(t) && I.test(e);
  return (
    (I.test(n) || ye.test(n)) &&
    !i &&
    (t === `` ||
      !I.test(t) ||
      (ge.test(t) && L.test(n)) ||
      (L.test(t) && L.test(n) && ge.test(r)) ||
      R.test(t) !== R.test(n) ||
      Te(n))
  );
}
function Oe(e) {
  let t = new Uint8Array(e.length),
    n = Array.from(e),
    r = 0;
  for (let [e, i] of n.entries()) {
    let a = n[e - 1] ?? ``,
      o = n[e + 1] ?? ``;
    (De(n[e - 2] ?? ``, a, i, o) && (t[r] = 1), (r += i.length));
  }
  return { text: we(e), wordStarts: t };
}
function ke(e) {
  let t = z.get(e);
  if (t) return t;
  z.size >= Se && z.delete(z.keys().next().value);
  let n = Oe(e);
  return (z.set(e, n), n);
}
var Ae = /^\s*["'`“”‘’]+|["'`“”‘’]+\s*$/g;
function B(e) {
  return we(e.replace(Ae, ``).normalize(`NFC`))
    .split(/\s+/)
    .filter((e) => e.length > 0)
    .join(` `);
}
function je(e, t) {
  let n = t + 1;
  for (; n < e.text.length && !e.wordStarts[n] && I.test(e.text[n]);) n++;
  return n;
}
function Me(e, t, n) {
  if (Math.abs(e.length - t.length) > +!n) return !1;
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r];) r++;
  let i = e.slice(r),
    a = t.slice(r),
    o = i.length > 1 && i[0] === a[1] && i[1] === a[0] && i.slice(2) === a.slice(2);
  return n ? o : o || i === a || i.slice(1) === a.slice(1) || i.slice(1) === a || i === a.slice(1);
}
var Ne = 1,
  Pe = 1.5,
  Fe = 0.3,
  Ie = 0.45,
  Le = 0.6;
function Re(e, t, n, r, i) {
  if (t.length === 0) return null;
  let a = null,
    o = !I.test(t[0]) && !ye.test(t[0]);
  for (let n = e.text.indexOf(t); n !== -1; n = e.text.indexOf(t, n + 1))
    if (e.wordStarts[n] || o) {
      let r = n + t.length,
        i = r >= e.text.length || e.wordStarts[r] === 1 || !I.test(e.text[r]),
        o = r;
      for (; o < e.text.length && I.test(e.text[o]);) o++;
      let s = i ? Ne : 0.7 + (0.2 * t.length) / (o - n);
      if (
        ((a === null || s > a.score) && (a = { score: s, start: n, end: n + t.length }), s === Ne)
      )
        return a;
    } else i && t.length >= 4 && a === null && (a = { score: Fe, start: n, end: n + t.length });
  if ((a === null || a.score <= Fe) && r) {
    let n = ze(e, t);
    if (n) return n;
  }
  if ((a !== null && a.score > Fe) || !n || t.length < 3) return a;
  if (_e.test(t))
    for (let n = 0; n < e.text.length; n++) {
      if (!e.wordStarts[n]) continue;
      let r = e.text[n];
      if (!(r === t[0] || (t.length > 3 && r === t[1] && e.text[n + 1] === t[0]))) continue;
      let i = n + 1;
      for (; i < e.text.length && I.test(e.text[i]);) i++;
      let a = e.text.slice(n, i),
        o = t.length <= 4,
        s = o ? [t.length, t.length + 1] : [t.length, t.length - 1, t.length + 1];
      for (let e of s)
        if (!(e > a.length) && Me(t, a.slice(0, e), o && e === t.length))
          return { score: Ie, start: n, end: n + e };
    }
  return a;
}
function ze(e, t) {
  let n = e.wordStarts.indexOf(1);
  for (let r = 0; r < e.text.length; r++) {
    if (!e.wordStarts[r] || e.text[r] !== t[0]) continue;
    let i = [],
      a = r,
      o = t;
    for (; o.length > 0 && a < e.text.length;) {
      let t = je(e, a);
      if (o.length <= t - a && e.text.startsWith(o, a))
        (i.push({ start: a, end: a + o.length }), (o = ``));
      else if (o.startsWith(e.text.slice(a, t)))
        for (
          i.push({ start: a, end: t }), o = o.slice(t - a), a = t;
          a < e.text.length && !e.wordStarts[a];
        )
          a++;
      else break;
    }
    let s = i.at(-1);
    if (
      !(o.length > 0 || s === void 0 || i.length < 2) &&
      (s.end === je(e, s.start) ||
        s.end - s.start >= 3 ||
        r === n ||
        i.slice(0, -1).every((e) => e.end - e.start >= 3))
    )
      return { score: Le, start: r, end: s.end, letters: i };
  }
  return null;
}
var Be = new Set([`a`, `an`, `and`, `for`, `in`, `of`, `on`, `the`, `to`, `with`]);
function Ve(e) {
  let t = [];
  for (let n of [...e].sort((e, t) => e.start - t.start)) {
    let e = t.at(-1);
    e && n.start <= e.end
      ? (t[t.length - 1] = { start: e.start, end: Math.max(e.end, n.end) })
      : t.push({ start: n.start, end: n.end });
  }
  return t;
}
function He(e, t, n) {
  if (e.length === 0) return null;
  let r = t
      .filter((e) => e.value.length > 0)
      .map((e) => ({
        field: ke(e.value),
        weight: e.weight,
        wholeWords: e.wholeWords ?? !1,
        keyword: e.keyword ?? !1,
        context: e.context ?? !1,
        allowMidWord: e.midWord ?? !1,
      })),
    i = t[0]?.value ? r[0]?.field : void 0,
    a = e.split(` `).filter((e) => e.length > 0);
  if (a.length === 0) return null;
  let o = a.some((e) => !Be.has(e)),
    s = [],
    c = 0,
    l = 0,
    u = !0;
  for (let e of a) {
    let t = 0,
      a = null,
      d = !1;
    for (let { field: o, weight: s, wholeWords: c, keyword: l, context: u, allowMidWord: f } of r) {
      if (t >= s && o !== i && d) continue;
      let r = Re(o, e, (n?.typos ?? !1) && !l, o === i, f);
      r === null ||
        r.score < (c ? Ne : l ? 0.7 : 0) ||
        (o === i && (a = r),
        r.score >= 0.7 && !u && (d = !0),
        r.score * s > t && (t = r.score * s));
    }
    if (t === 0) {
      if (o && Be.has(e)) continue;
      return null;
    }
    ((u &&= d), a && s.push(...(a.letters ?? [a])), (c += t), (l += 1));
  }
  let d = c / l;
  return (
    i && (i.text === e ? (d += 0.5) : a.length > 1 && i.text.includes(e) && (d += 0.25)),
    { quality: d, strong: u, primaryRanges: Ve(s) }
  );
}
var Ue = 3;
function V(e) {
  let t = e
      .replace(Ae, ``)
      .replace(xe, `'`)
      .normalize(`NFC`)
      .toLowerCase()
      .split(/\s+/)
      .filter((e) => e.length > 0),
    n = (e) => {
      let t = Array.from(e).length;
      return t >= Ue || (t === 2 && Ee(e));
    };
  return { long: t.filter(n), short: t.filter((e) => !n(e)), words: t };
}
function We(e) {
  let { words: t } = V(e);
  return t.length > 1
    ? RegExp(
        `(?<![\\p{L}\\p{N}])${t.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)).join(`\\s+`)}(?![\\p{L}\\p{N}])`,
        `iu`,
      )
    : null;
}
var Ge = 4,
  Ke = 0.8;
function qe(e, t) {
  let n = new Map(
    V(t)
      .long.map((e) => [B(e), Array.from(e).length < Ge])
      .filter(([e]) => e.length > 0),
  );
  if (n.size === 0) return [];
  let r = Oe(e),
    i = [];
  for (let [e, t] of n) {
    let n = !I.test(e[0]) && !ye.test(e[0]);
    for (let a = r.text.indexOf(e); a !== -1;)
      t && !n && !r.wordStarts[a]
        ? (a = r.text.indexOf(e, a + 1))
        : (i.push({ start: a, end: a + e.length }), (a = r.text.indexOf(e, a + e.length)));
  }
  return Ve(i);
}
function Je(e, t) {
  let n = [],
    r = 0;
  for (let i of t)
    (i.start > r && n.push({ text: e.slice(r, i.start), highlighted: !1, start: r }),
      n.push({ text: e.slice(i.start, i.end), highlighted: !0, start: i.start }),
      (r = i.end));
  return (
    (r < e.length || n.length === 0) && n.push({ text: e.slice(r), highlighted: !1, start: r }), n
  );
}
var Ye = 864e5,
  Xe = 14 * Ye,
  Ze = 32;
function H(e) {
  let t = B(e).slice(0, Ze);
  return (/[\ud800-\udbff]$/.test(t) ? t.slice(0, -1) : t).trim();
}
function Qe(e) {
  return 2 ** (-Math.max(0, e) / Xe);
}
var $e = 2.5;
function et(e, t) {
  let n = e.activityAt === null ? 0 : Qe(t - e.activityAt),
    r = e.opens ? e.opens.score * Qe(t - e.opens.openedAt) : 0;
  return Math.min($e, 1 + n + 0.5 * Math.log2(1 + r));
}
var tt = 8;
function nt(e, t) {
  if (e.length < tt) return null;
  let n = [...(t.id ? [t.id] : []), ...(t.pullRequests ?? []).flatMap((e) => e.references ?? [])],
    r = R.test(e),
    i = (e, t) => !R.test(e[t] ?? ``);
  return n.some((t) => {
    let n = t.toLowerCase(),
      a = n.indexOf(e);
    return r ? (a !== -1 && i(n, a + e.length)) || (e.startsWith(n) && i(e, n.length)) : a === 0;
  })
    ? { quality: 0.6, strong: !0, primaryRanges: [] }
    : null;
}
var rt = 21 * Ye,
  it = 3;
function at(e, t, n) {
  let r = H(t),
    i = r.length >= it,
    a,
    o;
  for (let t of e.opens?.picks ?? [])
    n - t.at > rt ||
      (t.query === r && (a === void 0 || t.at > a.at) && (a = t),
      (t.query === r || (i && t.query.startsWith(r))) && (o === void 0 || t.at > o.at) && (o = t));
  return a ?? o;
}
var ot = RegExp(`^(?:t3|t3code)/(?=\\S)`);
function st(e) {
  return e ? e.replace(ot, ``) : null;
}
function ct(e, t, n) {
  let r = [
      ...(t.pullRequests ?? []).map((e) => ({
        label: `PR`,
        text: `#${e.number}${e.title ? ` ${e.title}` : ``}`,
      })),
      { label: `Branch`, text: st(t.branch) },
      { label: `Project`, text: t.projectTitle },
      { label: `Environment`, text: t.environmentLabel },
    ],
    i = (e, t) => He(t, [{ value: e, weight: 1 }], { typos: n })?.primaryRanges,
    a = (e) => {
      for (let { label: t, text: n } of r) {
        let r = n ? i(n, e) : void 0;
        if (n && r) return { label: t, text: n, ranges: r };
      }
    },
    o = a(e);
  if (o) return o;
  let s = [t.projectTitle, t.environmentLabel].filter((e) => !!e),
    c = e
      .split(` `)
      .filter((e) => !s.some((t) => i(t, e)))
      .join(` `);
  return c && c !== e ? a(c) : void 0;
}
function lt(e, t, n, r) {
  let i = [{ value: t.title, weight: 1, midWord: !0 }];
  for (let e of t.pullRequests ?? [])
    (i.push({ value: `#${e.number}`, weight: 1 }),
      e.title && i.push({ value: e.title, weight: 0.5 }));
  let a = st(t.branch);
  (a && i.push({ value: a, weight: 0.6 }),
    t.projectTitle && i.push({ value: t.projectTitle, weight: 0.25, context: !0 }),
    t.environmentLabel && i.push({ value: t.environmentLabel, weight: 0.25, context: !0 }));
  let o = e
      .replace(/^(?:pr|pull request|pull)\s*(?=#?\d)/, ``)
      .replace(/^#\s*/, ``)
      .replace(ot, ``),
    s = He(o, i, r),
    c = s ? null : nt(e, t),
    l = s ?? c;
  if (l === null) return null;
  let u = r?.typos ?? !1,
    d = l.primaryRanges.length > 0,
    f = !d && c === null && o.includes(` `),
    p = f ? ct(o, t, u) : void 0;
  if (f && p === void 0) return null;
  let m = d
      ? void 0
      : () => (c ? { label: `ID or link`, text: e, ranges: [] } : (p ?? ct(o, t, u))),
    h = r?.picks === !1 ? void 0 : at(t, e, n);
  return {
    score: l.quality * et(t, n),
    quality: l.quality,
    groupQuality: Math.min(l.quality, 1.49),
    strong: l.strong,
    ranges: l.primaryRanges,
    ...(m ? { explain: m } : {}),
    ...(h ? { pickedAt: h.at } : {}),
    ...(h?.query === H(e) ? { pickedExactly: !0 } : {}),
  };
}
function ut(e) {
  return Math.max(e.activityAt ?? 0, e.opens?.openedAt ?? 0);
}
function dt(e) {
  return 1 + Math.log2(1 + e);
}
function ft(e, t, n, r, i) {
  return e
    .flatMap((e) => {
      let a = t(e);
      return !a || (i?.withoutTitleMatches && lt(n, a, r, { picks: !1 }) !== null)
        ? []
        : [
            {
              match: e,
              quality: e.quality ?? 1,
              pickedAt: i?.picks === !1 ? 0 : (at(a, n, r)?.at ?? 0),
              score: dt(e.hits ?? 1) * et(a, r),
            },
          ];
    })
    .sort(
      (e, t) =>
        Number(t.quality >= Ke) - Number(e.quality >= Ke) ||
        t.pickedAt - e.pickedAt ||
        t.quality - e.quality ||
        t.score - e.score ||
        (t.match.messageCreatedAt ?? ``).localeCompare(e.match.messageCreatedAt ?? ``),
    )
    .map(({ match: e }) => e);
}
function U(e) {
  return e >= Pe ? 3 : e >= 0.7 ? 2 : +(e >= 0.4);
}
function pt(e, t) {
  let n = (n) =>
      e.map(({ group: e, items: r }) => ({
        group: e,
        ranked: r.flatMap((r) => {
          let i = t(r, { typos: n }, e);
          return i === null ? [] : [{ item: r, match: i }];
        }),
      })),
    r = n(!1);
  return (
    r.some((e) => e.ranked.some(({ match: e }) => e.strong)) || (r = n(!0)),
    r
      .flatMap(({ group: e, ranked: t }, n) => {
        if (t.length === 0) return [];
        let r = (e) => Math.min(U(e.quality), 2),
          i = (e) => (e.pickedExactly ? (e.pickedAt ?? 0) : 0);
        return [
          {
            group: e,
            ranked: [...t].sort(
              (e, t) =>
                r(t.match) - r(e.match) ||
                i(t.match) - i(e.match) ||
                U(t.match.quality) - U(e.match.quality) ||
                (t.match.pickedAt ?? 0) - (e.match.pickedAt ?? 0) ||
                t.match.score - e.match.score,
            ),
            best: Math.max(...t.map(({ match: e }) => U(e.groupQuality ?? e.quality))),
            order: n,
          },
        ];
      })
      .sort((e, t) => t.best - e.best || e.order - t.order)
      .map(({ group: e, ranked: t }) => ({ group: e, ranked: t }))
  );
}
function mt(e, t) {
  return pt([{ group: null, items: e }], t)[0]?.ranked ?? [];
}
var ht = 0.65,
  gt = 4;
function _t(e, t, n) {
  let r =
      (
        e
          .split(` `)
          .filter((e) => !Be.has(e))
          .join(` `) || e
      ).length < gt,
    i = He(
      e,
      t.map((e, t) =>
        t === 0
          ? { value: e, weight: 1 }
          : { value: e, weight: r ? 0.8 : 0.6, wholeWords: r, keyword: !0 },
      ),
      n,
    );
  return (
    i && {
      score: i.quality,
      quality: i.quality,
      ...(i.primaryRanges.length > 0 ? {} : { groupQuality: Math.min(i.quality, ht) }),
      strong: i.strong,
      ranges: i.primaryRanges,
    }
  );
}
var vt = new Map(),
  yt = new Map();
function bt(e, t, n) {
  let r = `${e}:${t}`;
  return (yt.set(r, n), n - (vt.get(r) ?? -1 / 0) < 6e5 ? !1 : (vt.set(r, n), !0));
}
var xt = f({ projectIds: O(ne(ae)), environmentLabels: O(o(b, b)), titlesOnly: O(a) }),
  St = A(h([S([ne(oe), C.fields.query]), S([ne(oe), C.fields.query, xt])])),
  Ct = D(St),
  wt = [],
  Tt = [];
function Et(e, t, n = {}) {
  let r = [...e].sort((e, t) => e.localeCompare(t));
  return JSON.stringify(Object.keys(n).length === 0 ? [r, t] : [r, t, n]);
}
function Dt(e) {
  return Ct(e);
}
function Ot(e) {
  return JSON.stringify([e.environmentId, e.threadId]);
}
function kt(e) {
  let t = g((t) =>
      N((n) => {
        let r = Dt(t);
        if (w(r)) return { matches: [], isLoading: !1, rows: wt };
        let [i, a, o = {}] = r.value,
          s = o.titlesOnly !== !0 && V(a).long.length > 0,
          c = [],
          l = [],
          u = !1;
        for (let t of i) {
          let r = e.olderSettledBefore ? n(e.olderSettledBefore(t)) : null;
          if (!s && r === null) continue;
          let i = o.environmentLabels?.[t],
            d = n(
              e.getSearchAtom(t, {
                query: a,
                ...(r === null
                  ? {}
                  : {
                      olderSettledBefore: r,
                      ...(o.projectIds === void 0 ? {} : { projectIds: o.projectIds }),
                      ...(i === void 0 ? {} : { environmentLabel: i }),
                      ...(s ? {} : { titlesOnly: !0 }),
                    }),
              }),
            );
          u ||= d.waiting;
          let f = p(T(d));
          f !== null &&
            (c.push(...f.matches.map((e) => ({ ...e, environmentId: t }))),
            f.threads !== void 0 &&
              f.threads.length > 0 &&
              l.push({
                environmentId: t,
                read: { snapshotSequence: f.snapshotSequence ?? 0, threads: f.threads },
              }));
        }
        return { matches: c, isLoading: u, rows: l.length === 0 ? wt : l };
      }).pipe(M(`${e.labelPrefix}:${t}`)),
    ),
    n = g((n) => {
      let [r, i] = JSON.parse(n),
        a = Tt;
      return N((e) => {
        let n = e(t(r)).rows.flatMap((e) => (e.environmentId === i ? [e.read] : []));
        return (
          (n.length === a.length && n.every((e, t) => e === a[t])) || (a = n.length === 0 ? Tt : n),
          a
        );
      }).pipe(M(`${e.labelPrefix}-rows:${n}`));
    });
  return { results: t, rows: (e, t) => n(JSON.stringify([e, t])) };
}
function At(e, t, n) {
  let r = e.latestUserAuthoredMessageAt,
    i = r === void 0 ? me(e, `updated_at`) : Date.parse(r ?? e.createdAt),
    a = yt.get(`${e.environmentId}:${e.id}`) ?? 0;
  return {
    id: e.id,
    title: e.title,
    branch: e.branch,
    projectTitle: t ?? null,
    environmentLabel: n ?? null,
    pullRequests: re(e),
    activityAt: Number.isFinite(i) ? i : null,
    opens:
      a > (e.opens?.openedAt ?? 0)
        ? { score: 1, picks: [], ...e.opens, openedAt: a }
        : (e.opens ?? null),
  };
}
var jt = 3;
function Mt(e, t, n, r) {
  if (e?.query !== t) return { query: t, keys: n, shown: Math.min(r, n.length) };
  let i = new Set(n),
    a = e.keys.slice(0, e.shown).filter((e) => i.has(e)),
    o = new Set(a),
    s = new Set(e.keys),
    c = n.filter((e) => !o.has(e)),
    l = c.filter((e) => !s.has(e)).length,
    u = [...a, ...c],
    d = Math.min(u.length, r + jt, Math.max(r, a.length + Math.min(l, jt)));
  return d === e.shown && u.length === e.keys.length && u.every((t, n) => t === e.keys[n])
    ? e
    : { query: t, keys: u, shown: d };
}
function Nt(e, t, n) {
  if (t !== null) return t;
  let r = B(e),
    i = B(n?.query ?? ``);
  return n !== null && r.length > 0 && i.length > 0 && (r.startsWith(i) || i.startsWith(r))
    ? n
    : { query: ``, matches: [] };
}
var W = e(t(), 1),
  Pt = {
    text: ``,
    truncated: !1,
    pending: ``,
    screen: { settled: ``, lines: [[]], row: 0, col: 0, pen: ``, saved: null },
  },
  Ft = 65536,
  It = 64,
  Lt = 64,
  G = `\x1B`;
function Rt(e) {
  return e === `` ? `${G}[0m` : `${G}[0;${e}m`;
}
var K = new WeakMap();
function q(e) {
  let t = K.get(e);
  if (t !== void 0) return t;
  let n = 0;
  for (let t of e) n += t.text.length;
  return (K.set(e, n), n);
}
var zt = 2048;
function J(e, t, n) {
  let r = [],
    i = 0;
  for (let a of e) {
    let e = i + a.text.length;
    if (
      (e > t &&
        i < n &&
        r.push({
          pen: a.pen,
          text: a.text.slice(Math.max(0, t - i), Math.min(a.text.length, n - i)),
        }),
      (i = e),
      i >= n)
    )
      break;
  }
  return r;
}
function Y(e, t) {
  if (t.text.length === 0) return;
  let n = e.at(-1);
  n !== void 0 && n.pen === t.pen
    ? (e[e.length - 1] = { pen: n.pen, text: n.text + t.text })
    : e.push(t);
}
function Bt(e, t) {
  let n = 0,
    r = t;
  for (; r > 0 && n < e.length;) {
    let t = e[n];
    t.text.length <= r
      ? ((r -= t.text.length), (n += 1))
      : ((e[n] = { pen: t.pen, text: t.text.slice(r) }), (r = 0));
  }
  n > 0 && e.splice(0, n);
}
function Vt(e, t, n, r) {
  let i = q(e);
  if (t === i) {
    let t = e.slice();
    return (Y(t, { pen: r, text: n }), t);
  }
  let a = [];
  for (let n of J(e, 0, Math.min(t, i))) Y(a, n);
  (t > i && Y(a, { pen: ``, text: ` `.repeat(t - i) }), Y(a, { pen: r, text: n }));
  for (let r of J(e, t + n.length, i)) Y(a, r);
  return a;
}
function Ht(e, t, n) {
  let r = q(e);
  if (n === 0) return J(e, 0, t);
  if (n === 1) {
    let n = [];
    Y(n, { pen: ``, text: ` `.repeat(Math.min(t + 1, r)) });
    for (let i of J(e, t + 1, r)) Y(n, i);
    return n;
  }
  return [];
}
function Ut(e) {
  let t = ``,
    n = ``;
  for (let r of e) (r.pen !== n && ((t += Rt(r.pen)), (n = r.pen)), (t += r.text));
  return n === `` ? t : t + Rt(``);
}
function Wt(e) {
  let t = { bold: !1, dim: !1, italic: !1, underline: !1, strike: !1, inverse: !1, fg: ``, bg: `` };
  return (e !== `` && qt(t, e.split(`;`).map(Number)), t);
}
function Gt(e) {
  let t = [];
  return (
    e.bold && t.push(`1`),
    e.dim && t.push(`2`),
    e.italic && t.push(`3`),
    e.underline && t.push(`4`),
    e.inverse && t.push(`7`),
    e.strike && t.push(`9`),
    e.fg !== `` && t.push(e.fg),
    e.bg !== `` && t.push(e.bg),
    t.join(`;`)
  );
}
function Kt(e, t, n) {
  let r = t[n + 1];
  if (r === 5) {
    let r = t[n + 2];
    return r === void 0 || r > 255 ? [void 0, n + 3] : [`${e};5;${r}`, n + 3];
  }
  if (r === 2) {
    let [r, i, a] = [t[n + 2], t[n + 3], t[n + 4]];
    return r === void 0 || i === void 0 || a === void 0
      ? [void 0, n + 5]
      : [`${e};2;${r & 255};${i & 255};${a & 255}`, n + 5];
  }
  return [void 0, n + 2];
}
function qt(e, t) {
  t.length === 0 && (t = [0]);
  for (let n = 0; n < t.length;) {
    let r = t[n];
    if (r === 0 || Number.isNaN(r)) Object.assign(e, Wt(``));
    else if (r === 1) e.bold = !0;
    else if (r === 2) e.dim = !0;
    else if (r === 3) e.italic = !0;
    else if (r === 4) e.underline = !0;
    else if (r === 7) e.inverse = !0;
    else if (r === 9) e.strike = !0;
    else if (r === 22) e.bold = e.dim = !1;
    else if (r === 23) e.italic = !1;
    else if (r === 24) e.underline = !1;
    else if (r === 27) e.inverse = !1;
    else if (r === 29) e.strike = !1;
    else if ((r >= 30 && r <= 37) || (r >= 90 && r <= 97)) e.fg = String(r);
    else if ((r >= 40 && r <= 47) || (r >= 100 && r <= 107)) e.bg = String(r);
    else if (r === 39) e.fg = ``;
    else if (r === 49) e.bg = ``;
    else if (r === 38 || r === 48) {
      let [i, a] = Kt(r, t, n);
      (i !== void 0 && (e[r === 38 ? `fg` : `bg`] = i), (n = a));
      continue;
    }
    n += 1;
  }
}
var Jt = new Set([`]`, `P`, `X`, `_`, `^`]);
function Yt(e, t) {
  let n = e[t + 1];
  if (n === void 0) return -1;
  if (n === `[`) {
    for (let n = t + 2; n < e.length; n += 1) {
      let r = e.charCodeAt(n);
      if (r >= 64 && r <= 126) return n - t + 1;
    }
    return -1;
  }
  if (Jt.has(n)) {
    for (let n = t + 2; n < e.length; n += 1) {
      if (e[n] === `\x07`) return n - t + 1;
      if (
        e[n] ===
        `
`
      )
        return n - t;
      if (e[n] === G) {
        if (n + 1 >= e.length) return -1;
        if (e[n + 1] === `\\`) return n - t + 2;
      }
    }
    return -1;
  }
  return n === `(` || n === `)` || n === `*` || n === `+` ? (t + 2 < e.length ? 3 : -1) : 2;
}
var X = new Map();
function Xt(e) {
  let t = [];
  for (let n of e.split(`;`)) {
    if (!n.includes(`:`)) {
      t.push(Number(n));
      continue;
    }
    let e = n.split(`:`).map(Number);
    ((e[0] === 38 || e[0] === 48) && e[1] === 2 && e.length >= 6 && e.splice(2, 1), t.push(...e));
  }
  return t;
}
var Zt = class {
  settled;
  lines;
  row;
  col;
  pen;
  saved;
  dropped = !1;
  maxChars;
  owned = new WeakSet();
  constructor(e, t) {
    ((this.maxChars = t),
      (this.settled = e.settled),
      (this.lines = e.lines.slice()),
      (this.row = e.row),
      (this.col = e.col),
      (this.pen = e.pen),
      (this.saved = e.saved));
  }
  write(e) {
    let t = this.lines[this.row],
      n = q(t);
    if (
      (this.col === n && this.owned.has(t)
        ? (Y(t, { pen: this.pen, text: e }), K.set(t, n + e.length))
        : ((t = Vt(t, this.col, e, this.pen)), this.owned.add(t)),
      (this.col += e.length),
      t.length > zt)
    ) {
      let e = t.length - zt / 8;
      ((t = [
        {
          pen: ``,
          text: t
            .slice(0, e)
            .map((e) => e.text)
            .join(``),
        },
        ...t.slice(e),
      ]),
        this.owned.add(t));
    }
    let r = q(t);
    if (r > this.maxChars) {
      let e = r - this.maxChars;
      (this.owned.has(t) || ((t = t.slice()), this.owned.add(t)), Bt(t, e));
      let n = t[0]?.text.charCodeAt(0) ?? 0;
      (n >= 56320 && n <= 57343 && (Bt(t, 1), (e += 1)),
        (r -= e),
        (this.dropped = !0),
        (this.col = Math.max(0, this.col - e)),
        this.saved !== null &&
          this.saved.row === this.row &&
          (this.saved = { ...this.saved, col: Math.max(0, this.saved.col - e) }));
    }
    (K.set(t, r), (this.lines[this.row] = t));
  }
  newline() {
    for (
      this.row += 1, this.col = 0, this.row === this.lines.length && this.lines.push([]);
      this.lines.length > It;
    )
      this.scrollOut();
  }
  scrollOut() {
    let e = this.lines.shift();
    return (
      this.settle(e),
      --this.row,
      this.saved !== null && (this.saved = { ...this.saved, row: Math.max(0, this.saved.row - 1) }),
      q(e)
    );
  }
  settle(e) {
    ((this.settled += `${Ut(e)}\n`),
      this.settled.length > 2 * this.maxChars &&
        ((this.settled = $t(this.settled, this.maxChars).text), (this.dropped = !0)));
  }
  moveTo(e, t) {
    ((this.row = Math.max(0, Math.min(this.lines.length - 1, e))),
      (this.col = Math.max(0, Math.min(Ft, t))));
  }
  csi(e, t) {
    if (/^[?>=]/u.test(e)) return;
    let n = e === `` ? [] : Xt(e),
      r = Math.max(1, n[0] || 1);
    switch (t) {
      case `m`: {
        let t = `${this.pen}|${e}`,
          r = X.get(t);
        if (r === void 0) {
          let e = Wt(this.pen);
          (qt(e, n), (r = Gt(e)), X.size >= 512 && X.clear(), X.set(t, r));
        }
        this.pen = r;
        return;
      }
      case `A`:
        return this.moveTo(this.row - r, this.col);
      case `B`:
        return this.moveTo(this.row + r, this.col);
      case `C`:
        return this.moveTo(this.row, this.col + r);
      case `D`:
        return this.moveTo(this.row, this.col - r);
      case `E`:
        return this.moveTo(this.row + r, 0);
      case `F`:
        return this.moveTo(this.row - r, 0);
      case `G`:
        return this.moveTo(this.row, r - 1);
      case `H`:
      case `f`:
        return this.moveTo(r - 1, Math.max(1, n[1] || 1) - 1);
      case `K`:
        this.lines[this.row] = Ht(this.lines[this.row], this.col, n[0] ?? 0);
        return;
      case `J`: {
        let e = n[0] ?? 0;
        if (e === 0)
          ((this.lines[this.row] = Ht(this.lines[this.row], this.col, 0)),
            (this.lines.length = this.row + 1));
        else if (e === 1) {
          for (let e = 0; e < this.row; e += 1) this.lines[e] = [];
          this.lines[this.row] = Ht(this.lines[this.row], this.col, 1);
        } else
          e === 3
            ? (this.settled !== `` && (this.dropped = !0), (this.settled = ``))
            : ((this.lines = [[]]), (this.row = 0), (this.col = 0));
        return;
      }
      case `s`:
        this.saved = { row: this.row, col: this.col };
        return;
      case `u`:
        this.saved !== null && this.moveTo(this.saved.row, this.saved.col);
        return;
    }
  }
  escape(e) {
    e[1] === `[`
      ? this.csi(e.slice(2, -1), e.at(-1))
      : e === `${G}7`
        ? (this.saved = { row: this.row, col: this.col })
        : e === `${G}8`
          ? this.saved !== null && this.moveTo(this.saved.row, this.saved.col)
          : e === `${G}M` && this.moveTo(this.row - 1, this.col);
  }
  feed(e) {
    let t = 0,
      n = (n) => {
        n > t && this.write(e.slice(t, n));
      };
    for (let r = 0; r < e.length; r += 1) {
      let i = e.charCodeAt(r);
      if (!(i === 9 || (i >= 32 && i !== 127 && (i < 128 || i > 159)))) {
        if ((n(r), (t = r + 1), i === 10)) this.newline();
        else if (i === 13) this.col = 0;
        else if (i === 8) this.col = Math.max(0, this.col - 1);
        else if (i === 27) {
          let n = Yt(e, r);
          if (n === -1) {
            let t = e.slice(r);
            return t.length <= Lt
              ? t
              : Jt.has(t[1])
                ? t.slice(0, 2) + (t.endsWith(G) ? G : ``)
                : ``;
          }
          (this.escape(e.slice(r, r + n)), (r += n - 1), (t = r + 1));
        }
      }
    }
    return (n(e.length), ``);
  }
};
function Qt(e, t) {
  let n =
      e.lastIndexOf(
        `
`,
        t - 1,
      ) + 1,
    r = ``,
    i = n;
  for (; i < t;) {
    let n = e.indexOf(`${G}[`, i);
    if (n === -1 || n >= t) break;
    let a = e.indexOf(`m`, n);
    if (a === -1) break;
    if (a >= t) return { start: a + 1, prefix: e.slice(n, a + 1) };
    ((r = e.slice(n, a + 1)), (i = a + 1));
  }
  return { start: t, prefix: r === Rt(``) ? `` : r };
}
function $t(e, t) {
  if (e.length <= t) return { text: e, truncated: !1 };
  let n = e.length - t,
    r = e.indexOf(
      `
`,
      n,
    );
  if (r !== -1 && r - n < t / 4) return { text: e.slice(r + 1), truncated: !0 };
  let i = Qt(e, n);
  n = i.start;
  let a = e.charCodeAt(n);
  return (a >= 56320 && a <= 57343 && (n += 1), { text: i.prefix + e.slice(n), truncated: !0 });
}
function en(e, t, n = Ft) {
  let r = e.pending + t;
  if (r.length === 0) return e;
  let i = new Zt(e.screen, n),
    a = i.feed(r),
    o = e.truncated,
    s = i.lines.reduce((e, t) => e + q(t), 0);
  for (; s > n && i.row > 0;) s -= i.scrollOut();
  if (s > n) {
    let e = n;
    for (let t = 0; t <= i.row; t += 1) e -= q(i.lines[t]);
    for (let t = i.row + 1; t < i.lines.length; t += 1) {
      let n = i.lines[t],
        r = q(n),
        a = Math.max(0, Math.min(r, e));
      (a < r &&
        ((o = !0),
        (i.lines[t] = J(n, r - a, r)),
        i.saved !== null &&
          i.saved.row === t &&
          (i.saved = { ...i.saved, col: Math.max(0, i.saved.col - (r - a)) })),
        (e -= a));
    }
  }
  i.dropped && (o = !0);
  let c = $t(i.settled, n),
    l = i.lines.map(Ut).join(`
`),
    u = $t(c.text + l, n);
  return {
    text: u.text,
    truncated: o || c.truncated || u.truncated,
    pending: a,
    screen: { settled: c.text, lines: i.lines, row: i.row, col: i.col, pen: i.pen, saved: i.saved },
  };
}
var tn = {
  dark: [
    `#3b4048`,
    `#f47067`,
    `#57ab5a`,
    `#c69026`,
    `#539bf5`,
    `#b083f0`,
    `#39c5cf`,
    `#adbac7`,
    `#768390`,
    `#ff938a`,
    `#6bc46d`,
    `#daaa3f`,
    `#6cb6ff`,
    `#dcbdfb`,
    `#56d4dd`,
    `#cdd9e5`,
  ],
  light: [
    `#24292f`,
    `#cf222e`,
    `#116329`,
    `#7d4e00`,
    `#0550ae`,
    `#8250df`,
    `#1b7c83`,
    `#6e7781`,
    `#57606a`,
    `#a40e26`,
    `#1a7f37`,
    `#633c01`,
    `#0969da`,
    `#6639ba`,
    `#3192aa`,
    `#8c959f`,
  ],
};
function nn(e, t) {
  if (e < 16) return t[e];
  if (e >= 232) {
    let t = 8 + (e - 232) * 10;
    return `rgb(${t},${t},${t})`;
  }
  let n = e - 16,
    r = (e) => (e === 0 ? 0 : 55 + e * 40);
  return `rgb(${r(Math.floor(n / 36))},${r(Math.floor(n / 6) % 6)},${r(n % 6)})`;
}
function rn(e, t, n) {
  let r = e.split(`;`).map(Number),
    i = r[0];
  if (i === t + 8) return r[1] === 5 ? nn(r[2], n) : `rgb(${r[2]},${r[3]},${r[4]})`;
  if (i >= t && i <= t + 7) return n[i - t];
  if (i >= t + 60 && i <= t + 67) return n[i - t - 52];
}
function an(e) {
  if (e.startsWith(`#`) && e.length === 7)
    return [1, 3, 5].map((t) => Number.parseInt(e.slice(t, t + 2), 16));
  let t = /^rgb\((\d+),(\d+),(\d+)\)$/u.exec(e);
  return t === null ? void 0 : [Number(t[1]), Number(t[2]), Number(t[3])];
}
function on([e, t, n]) {
  let r = (e) => {
    let t = e / 255;
    return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * r(e) + 0.7152 * r(t) + 0.0722 * r(n);
}
function sn(e, t) {
  let [n, r] = [on(e), on(t)];
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function cn(e, t) {
  if (e === ``) return null;
  let n = Wt(e),
    r = n.fg === `` ? void 0 : rn(n.fg, 30, t),
    i = n.bg === `` ? void 0 : rn(n.bg, 40, t);
  if ((n.inverse && ([r, i] = [i, r ?? t[7]]), i !== void 0)) {
    let e = an(i),
      t = r === void 0 ? void 0 : an(r);
    e !== void 0 && (t === void 0 || sn(t, e) < 3) && (r = on(e) > 0.35 ? `#1f2328` : `#ffffff`);
  }
  let a = n.underline
    ? n.strike
      ? `underline line-through`
      : `underline`
    : n.strike
      ? `line-through`
      : void 0;
  return {
    ...(r === void 0 ? {} : { color: r }),
    ...(i === void 0 ? {} : { backgroundColor: i }),
    ...(n.bold ? { fontWeight: `600` } : {}),
    ...(n.dim ? { opacity: 0.65 } : {}),
    ...(n.italic ? { fontStyle: `italic` } : {}),
    ...(a === void 0 ? {} : { textDecorationLine: a }),
  };
}
function ln(e, t, n = 2e3) {
  let r = [],
    i = new Map(),
    a = ``,
    o = 0,
    s = (n) => {
      if (n <= o) return;
      let s = i.get(a);
      (s === void 0 && ((s = cn(a, t)), i.set(a, s)), r.push({ text: e.slice(o, n), style: s }));
    };
  for (; o < e.length;) {
    let t = e.indexOf(`${G}[`, o);
    if (t === -1 || r.length >= n) break;
    s(t);
    let i = e.indexOf(`m`, t);
    if (i === -1) break;
    let c = e.slice(t + 2, i);
    ((a = c === `0` ? `` : c.replace(/^0;/u, ``)), (o = i + 1));
  }
  return (
    o < e.length && (r.length >= n ? r.push({ text: dn(e.slice(o)), style: null }) : s(e.length)), r
  );
}
var un = RegExp(`${G}\\[[0-9;]*m`, `gu`);
function dn(e) {
  return e.replace(un, ``);
}
var fn = { output: Pt, running: !0 };
function pn(e, t) {
  let n = t.kind === `replace` ? Pt : e.output;
  return {
    output: en({ ...n, truncated: n.truncated || t.truncated }, t.text),
    running: t.running,
  };
}
var mn = E(`clientRuntime.state.fetchEnvironmentThreadTranscript`)(function* (e) {
  return yield* i({
    ...e,
    group: `orchestration`,
    method: `GET`,
    url: (t) => t.threadTranscript({ params: { threadId: e.threadId } }),
    timeoutMs: 6e4,
    request: ({ client: t, headers: n }) =>
      t.threadTranscript({ params: { threadId: e.threadId }, headers: te(n) }),
  });
});
function hn(e) {
  return {
    threadTranscript: d(e, {
      label: `environment-data:orchestration:thread-transcript`,
      execute: E(`orchestration.execute`)(function* (e) {
        let t = yield* _,
          n = yield* y(t.prepared);
        return w(n)
          ? yield* new ie({
              environmentId: t.target.environmentId,
              message: `The source environment is not connected.`,
            })
          : yield* mn({
              prepared: n.value,
              threadId: e.threadId,
              signer: yield* r(l),
              remoteAuthorization: yield* r(c),
            });
      }),
    }),
    v2: {
      dispatchCommand: x(e, {
        label: `environment-data:orchestration-v2:dispatch-command`,
        tag: j.dispatchCommand,
      }),
      threadProjection: u(e, {
        label: `environment-data:orchestration-v2:thread-projection`,
        tag: j.getThreadProjection,
        staleTimeMs: 0,
        idleTtlMs: 0,
      }),
      shell: m(e, { label: `environment-data:orchestration-v2:shell`, tag: j.subscribeShell }),
      thread: m(e, {
        label: `environment-data:orchestration-v2:thread`,
        tag: j.subscribeThread,
        idleTtlMs: 0,
      }),
      commandOutput: m(e, {
        label: `environment-data:orchestration-v2:command-output`,
        tag: j.subscribeCommandOutput,
        idleTtlMs: 0,
        transform: (e) =>
          e.pipe(
            k(() => fn, pn),
            v((e) => e !== fn),
          ),
      }),
    },
    turnDiff: u(e, { label: `environment-data:orchestration:turn-diff`, tag: j.getTurnDiff }),
    workflowScript: u(e, {
      label: `environment-data:orchestration:workflow-script`,
      tag: j.getWorkflowScript,
      staleTimeMs: 3e5,
      idleTtlMs: 3e5,
    }),
    stopWorkflow: x(e, {
      label: `environment-data:orchestration:stop-workflow`,
      tag: j.stopWorkflow,
    }),
    turnItem: u(e, {
      label: `environment-data:orchestration:turn-item`,
      tag: j.getTurnItem,
      staleTimeMs: 6e4,
      idleTtlMs: 6e4,
    }),
    fullThreadDiff: u(e, {
      label: `environment-data:orchestration:full-thread-diff`,
      tag: j.getFullThreadDiff,
    }),
    threadFind: u(e, {
      label: `environment-data:orchestration:thread-find`,
      tag: j.searchThread,
      staleTimeMs: 0,
      idleTtlMs: 0,
    }),
    threadFindProgressive: m(e, {
      label: `environment-data:orchestration:thread-find-progressive`,
      tag: j.searchThreadStream,
      completeWhen: (e) => e.complete !== !1,
      idleTtlMs: 0,
    }),
    threadSearch: u(e, {
      label: `environment-data:orchestration:thread-search`,
      tag: j.searchThreads,
      staleTimeMs: 3e4,
      idleTtlMs: 6e4,
    }),
    archivedShellSnapshot: u(e, {
      label: `environment-data:orchestration:archived-shell-snapshot`,
      tag: j.getArchivedShellSnapshot,
    }),
    worktreeThreadIds: u(e, {
      label: `environment-data:orchestration:worktree-thread-ids`,
      tag: j.getWorktreeThreadIds,
      staleTimeMs: 0,
      idleTtlMs: 0,
    }),
  };
}
var Z = hn(fe),
  gn = 96;
function _n(e) {
  let t = e.at(-1);
  return e.length > 1 && t?.waiting === !0 && w(T(t));
}
function vn({
  previousScrollTop: e,
  scrollTop: t,
  scrollHeight: n,
  clientHeight: r,
  distanceThreshold: i = gn,
}) {
  return e === null || t <= e ? !1 : n - t - r <= i;
}
var yn = 120,
  bn = 80,
  xn = 120,
  Sn = 500,
  Cn = 120,
  wn = 100,
  Tn = [],
  En = [],
  Dn = [],
  Q = [void 0],
  On = Object.freeze([]),
  kn = N({ matches: On, isLoading: !1, rows: [] }).pipe(M(`web:thread-search:empty`)),
  An = g((e) =>
    N((t) => t(le.olderSettledAtom(e))?.before ?? null).pipe(M(`web:older-settled-before:${e}`)),
  ),
  jn = g((e) =>
    N((t) => JSON.parse(e).some((e) => t(An(e)) !== null)).pipe(M(`web:any-older-settled:${e}`)),
  ),
  Mn = kt({
    getSearchAtom: (e, t) =>
      t.olderSettledBefore === void 0
        ? Z.threadSearch({ environmentId: e, input: t })
        : le.searchAtom(e, t),
    olderSettledBefore: An,
    labelPrefix: `web:thread-search`,
  });
function $(e, t) {
  let n = (0, F.c)(4),
    [r, i] = (0, W.useState)(e),
    a,
    o;
  return (
    n[0] !== t || n[1] !== e
      ? ((a = () => {
          let n = window.setTimeout(() => {
            i(e);
          }, t);
          return () => {
            window.clearTimeout(n);
          };
        }),
        (o = [t, e]),
        (n[0] = t),
        (n[1] = e),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, W.useEffect)(a, o),
    r
  );
}
function Nn(e, t, n) {
  let r = (0, F.c)(35),
    i;
  r[0] === n ? (i = r[1]) : ((i = n === void 0 ? {} : n), (r[0] = n), (r[1] = i));
  let a = i,
    o;
  r[2] === t ? (o = r[3]) : ((o = t.trim().slice(0, 200).trim()), (r[2] = t), (r[3] = o));
  let c = o,
    l = $(c, Cn),
    u;
  r[4] === e ? (u = r[5]) : ((u = jn(JSON.stringify(e))), (r[4] = e), (r[5] = u));
  let d = ee(u),
    f;
  r[6] !== d || r[7] !== e.length || r[8] !== c || r[9] !== a
    ? ((f =
        e.length > 0 && ((a.titlesOnly !== !0 && V(c).long.length > 0) || (d && c.length >= 2))),
      (r[6] = d),
      (r[7] = e.length),
      (r[8] = c),
      (r[9] = a),
      (r[10] = f))
    : (f = r[10]);
  let p = f,
    m = p && c === l ? l : null,
    h;
  r[11] !== e || r[12] !== a
    ? ((h = (t) => Et(e, t, a)), (r[11] = e), (r[12] = a), (r[13] = h))
    : (h = r[13]);
  let g = h,
    _,
    v;
  if (r[14] !== g || r[15] !== m) {
    let e = m === null ? null : g(m);
    ((_ = ee),
      (v = e === null ? kn : Mn.results(e)),
      (r[14] = g),
      (r[15] = m),
      (r[16] = _),
      (r[17] = v));
  } else ((_ = r[16]), (v = r[17]));
  let y = _(v),
    b = p && (c !== l || y.isLoading),
    x;
  r[18] !== y || r[19] !== m
    ? ((x =
        m !== null && (!y.isLoading || y.matches.length > 0 || y.rows.length > 0)
          ? { query: m, matches: y.matches }
          : null),
      (r[18] = y),
      (r[19] = m),
      (r[20] = x))
    : (x = r[20]);
  let S = x,
    [C, w] = (0, W.useState)(null);
  S !== null && C?.matches !== S.matches && w(S);
  let T, E;
  r[21] !== p || r[22] !== c || r[23] !== C || r[24] !== S || r[25] !== g
    ? ((E = p ? Nt(c, S, C) : { query: ``, matches: On }),
      (T = E.query === `` ? null : g(E.query)),
      (r[21] = p),
      (r[22] = c),
      (r[23] = C),
      (r[24] = S),
      (r[25] = g),
      (r[26] = T),
      (r[27] = E))
    : ((T = r[26]), (E = r[27]));
  let D = T,
    O,
    k;
  (r[28] === D
    ? ((O = r[29]), (k = r[30]))
    : ((O = () => {
        if (D === null) return;
        let e = JSON.parse(D)[0].map((e) => de.mountRows(s, e, `search:${D}`, Mn.rows(D, e)));
        return () => {
          for (let t of e) t();
        };
      }),
      (k = [D]),
      (r[28] = D),
      (r[29] = O),
      (r[30] = k)),
    (0, W.useEffect)(O, k));
  let A;
  return (
    r[31] !== b || r[32] !== E.matches || r[33] !== E.query
      ? ((A = { matches: E.matches, query: E.query, isPending: b }),
        (r[31] = b),
        (r[32] = E.matches),
        (r[33] = E.query),
        (r[34] = A))
      : (A = r[34]),
    A
  );
}
function Pn(e, t) {
  let [n, r, i] = JSON.parse(e);
  return he.listRefs({
    environmentId: n,
    input: {
      cwd: r,
      ...(i.length > 0 ? { query: i } : {}),
      ...(t === void 0 ? {} : { cursor: t }),
      limit: wn,
    },
  });
}
var Fn = N([]).pipe(M(`web:vcs-ref-pages:empty`)),
  In = g((e) => {
    let [t, n] = JSON.parse(e),
      r = n.map((e) => Pn(t, e ?? void 0));
    return N((e) => r.map((t) => e(t))).pipe(M(`web:vcs-ref-pages:${e}`));
  });
function Ln(e) {
  let t = (0, F.c)(29),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { targetKey: null, cursors: Q }), (t[0] = n))
    : (n = t[0]);
  let [r, i] = (0, W.useState)(n),
    { environmentId: a, cwd: o } = e,
    c,
    l,
    u;
  if (t[1] !== o || t[2] !== a || t[3] !== r.cursors || t[4] !== r.targetKey || t[5] !== e.query) {
    let n = e.query?.trim() ?? ``;
    u = a !== null && o !== null ? JSON.stringify([a, o, n]) : null;
    let i = r.targetKey === u ? r.cursors : Q,
      s = u === null ? null : JSON.stringify([u, i]);
    ((c = ee),
      (l = s === null ? Fn : In(s)),
      (t[1] = o),
      (t[2] = a),
      (t[3] = r.cursors),
      (t[4] = r.targetKey),
      (t[5] = e.query),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((c = t[6]), (l = t[7]), (u = t[8]));
  let d = c(l),
    f;
  if (t[9] !== d) {
    let e = d.flatMap(Vn),
      n = new Map();
    for (let t of e) for (let e of t.refs) n.set(e.name, e);
    let r = e[0] ?? null,
      i = e.at(-1) ?? null;
    ((f =
      r === null || i === null
        ? null
        : {
            refs: [...n.values()],
            isRepo: r.isRepo,
            hasPrimaryRemote: r.hasPrimaryRemote,
            nextCursor: i.nextCursor,
            totalCount: Math.max(...e.map(Bn)),
          }),
      (t[9] = d),
      (t[10] = f));
  } else f = t[10];
  let p = f,
    m,
    h;
  if (t[11] !== d) {
    let e = d.find(zn);
    ((m = _n(d)),
      (h =
        e?._tag === `Failure`
          ? (() => {
              let t = se(e.cause);
              return t instanceof Error && t.message.trim().length > 0
                ? t.message
                : `Failed to load refs.`;
            })()
          : null),
      (t[11] = d),
      (t[12] = m),
      (t[13] = h));
  } else ((m = t[12]), (h = t[13]));
  let g = h,
    _;
  t[14] === u
    ? (_ = t[15])
    : ((_ = () => {
        (i({ targetKey: u, cursors: Q }), u !== null && s.refresh(Pn(u, void 0)));
      }),
      (t[14] = u),
      (t[15] = _));
  let v = _,
    y = p?.nextCursor,
    b;
  t[16] !== y || t[17] !== u
    ? ((b = () => {
        u !== null &&
          y != null &&
          i((e) => {
            let t = e.targetKey === u ? e.cursors : Q;
            return t.includes(y)
              ? { targetKey: u, cursors: t }
              : { targetKey: u, cursors: [...t, y] };
          });
      }),
      (t[16] = y),
      (t[17] = u),
      (t[18] = b))
    : (b = t[18]);
  let x = b,
    S = p?.refs ?? Tn,
    C;
  t[19] === d ? (C = t[20]) : ((C = d.some(Rn)), (t[19] = d), (t[20] = C));
  let w;
  return (
    t[21] !== p ||
    t[22] !== g ||
    t[23] !== m ||
    t[24] !== x ||
    t[25] !== v ||
    t[26] !== S ||
    t[27] !== C
      ? ((w = {
          data: p,
          refs: S,
          error: g,
          isPending: C,
          isFetchingNextPage: m,
          refresh: v,
          loadNext: x,
        }),
        (t[21] = p),
        (t[22] = g),
        (t[23] = m),
        (t[24] = x),
        (t[25] = v),
        (t[26] = S),
        (t[27] = C),
        (t[28] = w))
      : (w = t[28]),
    w
  );
}
function Rn(e) {
  return e.waiting;
}
function zn(e) {
  return e._tag === `Failure`;
}
function Bn(e) {
  return e.totalCount;
}
function Vn(e) {
  let t = p(T(e));
  return t === null ? [] : [t];
}
function Hn(e, t) {
  return (
    e.environmentId === t.environmentId &&
    e.cwd === t.cwd &&
    e.query === t.query &&
    e.kind === t.kind &&
    e.imageOnly === t.imageOnly
  );
}
function Un(e, t, n) {
  let r = (0, F.c)(33),
    i = n?.allowEmptyQuery === !0,
    a;
  r[0] === e.query
    ? (a = r[1])
    : ((a = e.query == null ? null : e.query.trim()), (r[0] = e.query), (r[1] = a));
  let o;
  r[2] !== a ||
  r[3] !== e.cwd ||
  r[4] !== e.environmentId ||
  r[5] !== e.imageOnly ||
  r[6] !== e.kind
    ? ((o = {
        environmentId: e.environmentId,
        cwd: e.cwd,
        query: a,
        kind: e.kind,
        imageOnly: e.imageOnly,
      }),
      (r[2] = a),
      (r[3] = e.cwd),
      (r[4] = e.environmentId),
      (r[5] = e.imageOnly),
      (r[6] = e.kind),
      (r[7] = o))
    : (o = r[7]);
  let s = o,
    c = $(s, yn),
    l = pe(c.environmentId),
    { canReadFiles: u } = l,
    d,
    f,
    p;
  r[8] !== i ||
  r[9] !== u ||
  r[10] !== c.cwd ||
  r[11] !== c.environmentId ||
  r[12] !== c.imageOnly ||
  r[13] !== c.kind ||
  r[14] !== c.query ||
  r[15] !== t
    ? ((d =
        c.environmentId !== null && c.cwd !== null && c.query !== null && (i || c.query.length > 0)
          ? {
              environmentId: c.environmentId,
              input: {
                cwd: c.cwd,
                query: c.query,
                limit: t,
                ...(c.kind ? { kind: c.kind } : {}),
                ...(c.imageOnly ? { imageOnly: !0 } : {}),
              },
            }
          : null),
      (f = P),
      (p = u && d !== null ? ue.searchEntries(d) : null),
      (r[8] = i),
      (r[9] = u),
      (r[10] = c.cwd),
      (r[11] = c.environmentId),
      (r[12] = c.imageOnly),
      (r[13] = c.kind),
      (r[14] = c.query),
      (r[15] = t),
      (r[16] = d),
      (r[17] = f),
      (r[18] = p))
    : ((d = r[16]), (f = r[17]), (p = r[18]));
  let m = f(p),
    h = d !== null,
    g = m.data?.entries ?? En,
    _ =
      !h || l.isPending
        ? null
        : u
          ? m.error
          : (l.error ?? `This connection cannot search host files.`),
    v;
  r[19] !== c || r[20] !== l.isPending || r[21] !== h || r[22] !== s || r[23] !== m.isPending
    ? ((v = !Hn(s, c) || (h && (l.isPending || m.isPending))),
      (r[19] = c),
      (r[20] = l.isPending),
      (r[21] = h),
      (r[22] = s),
      (r[23] = m.isPending),
      (r[24] = v))
    : (v = r[24]);
  let y = c.query ?? ``,
    b = m.data?.truncated ?? !1,
    x;
  return (
    r[25] !== c ||
    r[26] !== m.refresh ||
    r[27] !== g ||
    r[28] !== _ ||
    r[29] !== v ||
    r[30] !== y ||
    r[31] !== b
      ? ((x = {
          entries: g,
          error: _,
          isPending: v,
          searchedTarget: c,
          searchedQuery: y,
          truncated: b,
          refresh: m.refresh,
        }),
        (r[25] = c),
        (r[26] = m.refresh),
        (r[27] = g),
        (r[28] = _),
        (r[29] = v),
        (r[30] = y),
        (r[31] = b),
        (r[32] = x))
      : (x = r[32]),
    x
  );
}
function Wn(e) {
  return Un(e, bn);
}
function Gn(e) {
  let t = (0, F.c)(20),
    n = e.environmentId !== null && e.cwd !== null,
    r = pe(e.environmentId),
    i = n && r.canReadFiles,
    a = n && r.isPending,
    o = e.query,
    s;
  t[0] === o ? (s = t[1]) : ((s = o.trim()), (t[0] = o), (t[1] = s));
  let c = s.length > 0,
    l = $(o, xn),
    u;
  t[2] !== i ||
  t[3] !== l ||
  t[4] !== c ||
  t[5] !== e.caseSensitive ||
  t[6] !== e.cwd ||
  t[7] !== e.environmentId ||
  t[8] !== e.useRegex ||
  t[9] !== e.wholeWord
    ? ((u =
        i && e.environmentId !== null && e.cwd !== null && c && l.trim().length > 0
          ? ce({
              environmentId: e.environmentId,
              input: {
                cwd: e.cwd,
                query: l,
                limit: Sn,
                caseSensitive: e.caseSensitive,
                wholeWord: e.wholeWord,
                useRegex: e.useRegex,
              },
            })
          : null),
      (t[2] = i),
      (t[3] = l),
      (t[4] = c),
      (t[5] = e.caseSensitive),
      (t[6] = e.cwd),
      (t[7] = e.environmentId),
      (t[8] = e.useRegex),
      (t[9] = e.wholeWord),
      (t[10] = u))
    : (u = t[10]);
  let d = P(u),
    f = d.data?.matches ?? Dn,
    p = !n || a ? null : i ? d.error : (r.error ?? `This connection cannot search host files.`),
    m = a || (i && c && (o !== l || d.isPending)),
    h = d.data?.truncated ?? !1,
    g = e.useRegex && d.data?.regexFallbackError !== void 0,
    _;
  return (
    t[11] !== i ||
    t[12] !== c ||
    t[13] !== a ||
    t[14] !== f ||
    t[15] !== p ||
    t[16] !== m ||
    t[17] !== h ||
    t[18] !== g
      ? ((_ = {
          canReadFiles: i,
          isCheckingAccess: a,
          matches: f,
          error: p,
          isPending: m,
          hasQuery: c,
          truncated: h,
          invalidRegex: g,
        }),
        (t[11] = i),
        (t[12] = c),
        (t[13] = a),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function Kn(e, t) {
  let n =
      t?.enabled !== !1 &&
      e.environmentId !== null &&
      e.threadId !== null &&
      e.fromTurnCount !== null &&
      e.toTurnCount !== null,
    r =
      n && e.fromTurnCount === 0
        ? {
            environmentId: e.environmentId,
            input: {
              threadId: e.threadId,
              toTurnCount: e.toTurnCount,
              ignoreWhitespace: e.ignoreWhitespace,
            },
          }
        : null,
    i =
      n && e.fromTurnCount !== 0
        ? {
            environmentId: e.environmentId,
            input: {
              threadId: e.threadId,
              fromTurnCount: e.fromTurnCount,
              toTurnCount: e.toTurnCount,
              ignoreWhitespace: e.ignoreWhitespace,
            },
          }
        : null,
    a = P(r === null ? null : Z.fullThreadDiff(r)),
    o = P(i === null ? null : Z.turnDiff(i));
  return r === null ? o : a;
}
function qn(e, t) {
  let n = (0, F.c)(4),
    r,
    i;
  if (n[0] !== t || n[1] !== e) {
    let a = e === null ? null : { threadId: e.threadId, itemId: e.itemId, revision: e.revision };
    ((r = P),
      (i =
        e === null || a === null
          ? null
          : t
            ? t(a)
            : Z.turnItem({ environmentId: e.environmentId, input: a })),
      (n[0] = t),
      (n[1] = e),
      (n[2] = r),
      (n[3] = i));
  } else ((r = n[2]), (i = n[3]));
  return r(i);
}
export {
  ut as A,
  H as C,
  _t as D,
  mt as E,
  lt as O,
  V as S,
  pt as T,
  Ot as _,
  Gn as a,
  B as b,
  qn as c,
  fn as d,
  pn as f,
  Mt as g,
  bt as h,
  Ln as i,
  Je as k,
  vn as l,
  ln as m,
  Wn as n,
  Un as o,
  tn as p,
  $ as r,
  Nn as s,
  Kn as t,
  Z as u,
  At as v,
  ft as w,
  We as x,
  qe as y,
};
//# sourceMappingURL=queries-B4W1CgUo.js.map
