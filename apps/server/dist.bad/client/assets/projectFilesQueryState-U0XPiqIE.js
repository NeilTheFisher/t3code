import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Ac as t,
  Dc as n,
  JC as r,
  Tg as i,
  XC as a,
  Yl as o,
  ab as s,
  cp as c,
  jc as l,
  np as u,
  qf as d,
  zS as f,
  zf as p,
} from "./utils-CPoejuy5.js";
import { Y as m } from "./entities-CgVpsCCl.js";
import { n as h } from "./filesystem-DxEoLhpA.js";
import { o as g } from "./queries-B4W1CgUo.js";
var _ = e(),
  v = ``,
  y = p(u(!1)),
  b = p(u(!1)).pipe(d(`project-file-query:empty`));
function x(e, t, n) {
  return m.optimisticFile({ environmentId: e, cwd: t, relativePath: n });
}
var S = new Map();
function C(e) {
  let t = S.get(e);
  (S.delete(e), t?.());
}
function w(e, t, n) {
  return m.listEntries({
    environmentId: e,
    input: { cwd: t, ...(n === void 0 ? {} : { directoryPath: n }) },
  });
}
function T(e, t, n) {
  return m.readFile({
    environmentId: e,
    input: { cwd: t, relativePath: n ?? v, ...(n === `t3.json` ? { allowMissing: !0 } : {}) },
  });
}
async function E(e, t, r) {
  let i = T(e, t, r);
  n.refresh(i);
  let a = await o(n, i, { reportDefect: !1, reportFailure: !1 });
  return a._tag === `Success` ? a.value : null;
}
function D(e, t, r, i) {
  let a = x(e, t, r);
  (S.has(a) || S.set(a, n.mount(a)),
    n.set(a, {
      confirmedAgainst: void 0,
      data: {
        relativePath: r,
        contents: i,
        byteLength: new TextEncoder().encode(i).byteLength,
        truncated: !1,
      },
    }));
}
function O(e, t, r) {
  return n.get(x(e, t, r))?.data ?? null;
}
function k(e, t, r) {
  let i = O(e, t, r);
  if (i) return i.contents;
  let o = n.get(T(e, t, r)),
    s = a(c(o));
  return s?.exists === !1 ? void 0 : s?.contents;
}
function A(e, t, r) {
  let i = n.get(x(e, t, r));
  return i?.confirmedAgainst === void 0 ? (i?.data ?? null) : null;
}
function j(e, t, r, i) {
  let a = x(e, t, r),
    s = n.get(a);
  if (s?.data.contents !== i) return !1;
  let c = T(e, t, r),
    l = { ...s, confirmedAgainst: n.get(c) };
  return (
    n.set(a, l),
    C(a),
    n.refresh(c),
    o(n, c, { reportDefect: !1, reportFailure: !1 }).then((e) => {
      e._tag === `Success` && n.get(a) === l && n.set(a, null);
    }),
    !0
  );
}
function M(e, t, r, i) {
  return r === null ? i : (n.get(x(e, t, r))?.data ?? i);
}
function N(e) {
  return e._tag === `Failure` ? f(e.cause) : null;
}
function P(e) {
  return e === null ? null : e instanceof Error ? e.message : `Workspace query failed.`;
}
var F = s(i);
function I(e, n, i) {
  let a = (0, _.c)(19),
    o = h(e),
    { canReadFiles: s } = o,
    u;
  a[0] !== s || a[1] !== n || a[2] !== i || a[3] !== e
    ? ((u = s ? w(e, n, i) : y), (a[0] = s), (a[1] = n), (a[2] = i), (a[3] = e), (a[4] = u))
    : (u = a[4]);
  let d = u,
    f = l(d),
    p = t(d),
    m;
  a[5] === p ? (m = a[6]) : ((m = () => p()), (a[5] = p), (a[6] = m));
  let g = m,
    v;
  a[7] === f ? (v = a[8]) : ((v = r(c(f))), (a[7] = f), (a[8] = v));
  let b;
  a[9] !== s || a[10] !== o.error || a[11] !== o.isPending || a[12] !== f
    ? ((b = o.isPending
        ? null
        : s
          ? P(N(f))
          : (o.error ?? `This connection cannot read host files.`)),
      (a[9] = s),
      (a[10] = o.error),
      (a[11] = o.isPending),
      (a[12] = f),
      (a[13] = b))
    : (b = a[13]);
  let x = o.isPending || f.waiting,
    S;
  return (
    a[14] !== g || a[15] !== v || a[16] !== b || a[17] !== x
      ? ((S = { data: v, error: b, isPending: x, refresh: g }),
        (a[14] = g),
        (a[15] = v),
        (a[16] = b),
        (a[17] = x),
        (a[18] = S))
      : (S = a[18]),
    S
  );
}
function L(e, t, n, r, i) {
  let a = (0, _.c)(16),
    o;
  a[0] === i?.imageOnly
    ? (o = a[1])
    : ((o = i?.imageOnly ? { imageOnly: !0 } : {}), (a[0] = i?.imageOnly), (a[1] = o));
  let s;
  a[2] !== t || a[3] !== e || a[4] !== n || a[5] !== o
    ? ((s = { environmentId: e, cwd: t, query: n, kind: `file`, ...o }),
      (a[2] = t),
      (a[3] = e),
      (a[4] = n),
      (a[5] = o),
      (a[6] = s))
    : (s = a[6]);
  let c;
  a[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { allowEmptyQuery: !0 }), (a[7] = c))
    : (c = a[7]);
  let l = g(s, r, c),
    u;
  a[8] !== l.entries || a[9] !== l.isPending
    ? ((u = l.isPending ? [] : l.entries), (a[8] = l.entries), (a[9] = l.isPending), (a[10] = u))
    : (u = a[10]);
  let d;
  return (
    a[11] !== l.error || a[12] !== l.isPending || a[13] !== l.searchedQuery || a[14] !== u
      ? ((d = {
          entries: u,
          error: l.error,
          isPending: l.isPending,
          matchedQuery: l.searchedQuery,
        }),
        (a[11] = l.error),
        (a[12] = l.isPending),
        (a[13] = l.searchedQuery),
        (a[14] = u),
        (a[15] = d))
      : (d = a[15]),
    d
  );
}
function R(e, n, i, a) {
  let o = (0, _.c)(36),
    s = a === void 0 || a,
    u = h(e),
    { canReadFiles: d } = u,
    f = s,
    p;
  o[0] !== d || o[1] !== n || o[2] !== s || o[3] !== e || o[4] !== i
    ? ((p = s && d ? T(e, n, i) : b),
      (o[0] = d),
      (o[1] = n),
      (o[2] = s),
      (o[3] = e),
      (o[4] = i),
      (o[5] = p))
    : (p = o[5]);
  let m = p,
    g = l(m),
    y = t(m),
    S;
  o[6] === y ? (S = o[7]) : ((S = () => y()), (o[6] = y), (o[7] = S));
  let C = S,
    w;
  o[8] === g ? (w = o[9]) : ((w = r(c(g))), (o[8] = g), (o[9] = w));
  let E = w,
    D = E?.exists === !1,
    O = i ?? v,
    k;
  o[10] !== n || o[11] !== e || o[12] !== O
    ? ((k = x(e, n, O)), (o[10] = n), (o[11] = e), (o[12] = O), (o[13] = k))
    : (k = o[13]);
  let A = l(k),
    j = i === null ? null : A,
    M,
    I,
    L,
    R,
    z;
  if (
    o[14] !== d ||
    o[15] !== u.error ||
    o[16] !== u.isPending ||
    o[17] !== D ||
    o[18] !== f ||
    o[19] !== j ||
    o[20] !== E ||
    o[21] !== i ||
    o[22] !== g
  ) {
    let e = N(g);
    ((L = F(e) ? e : null),
      (M = d ? (j?.data ?? (D ? null : E)) : null),
      (I = L?.failure === `path_not_file`),
      (R = M),
      (z =
        !f || u.isPending
          ? null
          : d
            ? D && !j
              ? `'${i}' does not exist.`
              : P(e)
            : (u.error ?? `This connection cannot read host files.`)),
      (o[14] = d),
      (o[15] = u.error),
      (o[16] = u.isPending),
      (o[17] = D),
      (o[18] = f),
      (o[19] = j),
      (o[20] = E),
      (o[21] = i),
      (o[22] = g),
      (o[23] = M),
      (o[24] = I),
      (o[25] = L),
      (o[26] = R),
      (o[27] = z));
  } else ((M = o[23]), (I = o[24]), (L = o[25]), (R = o[26]), (z = o[27]));
  let B = f && (u.isPending || g.waiting),
    V = !I && (M !== null || L?.failure === `binary_file`),
    H;
  return (
    o[28] !== I ||
    o[29] !== L ||
    o[30] !== C ||
    o[31] !== R ||
    o[32] !== z ||
    o[33] !== B ||
    o[34] !== V
      ? ((H = {
          data: R,
          error: z,
          isPending: B,
          readError: L,
          isNotFile: I,
          isFile: V,
          refresh: C,
        }),
        (o[28] = I),
        (o[29] = L),
        (o[30] = C),
        (o[31] = R),
        (o[32] = z),
        (o[33] = B),
        (o[34] = V),
        (o[35] = H))
      : (H = o[35]),
    H
  );
}
export {
  A as a,
  M as c,
  L as d,
  R as f,
  T as i,
  D as l,
  O as n,
  x as o,
  k as r,
  E as s,
  j as t,
  I as u,
};
//# sourceMappingURL=projectFilesQueryState-U0XPiqIE.js.map
