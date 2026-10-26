import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import { Dc as r, jc as i } from "./utils-CPoejuy5.js";
import { Q as a, tt as o } from "./entities-CgVpsCCl.js";
import { $ as s, Q as c, Z as l, et as u } from "./runtime-CY2dlMEg.js";
var d = n(),
  f = e(t(), 1),
  p = new Map();
function m(e) {
  let t = (0, d.c)(35),
    n;
  t[0] === e.scopes ? (n = t[1]) : ((n = JSON.stringify(e.scopes)), (t[0] = e.scopes), (t[1] = n));
  let o = n,
    u;
  t[2] === o ? (u = t[3]) : ((u = { scopeKey: o, pages: p }), (t[2] = o), (t[3] = u));
  let [m, _] = (0, f.useState)(u),
    v = m.scopeKey === o && e.expanded ? m.pages : p,
    y;
  t[4] === v
    ? (y = t[5])
    : ((y = (e) => ({ scope: e, pages: v.get(e.environmentId) ?? 0 })), (t[4] = v), (t[5] = y));
  let b = e.scopes.map(y),
    x = JSON.stringify(b),
    S = i(a.shelfAtom(b));
  (0, f.useEffect)(() => {
    let e = JSON.parse(x).flatMap(g);
    return () => {
      for (let t of e) t();
    };
  }, [x]);
  let C;
  t[6] === S ? (C = t[7]) : ((C = (e) => S.get(e)?.older ?? null), (t[6] = S), (t[7] = C));
  let w = C,
    T;
  t[8] === S ? (T = t[9]) : ((T = (e) => S.get(e)?.pages), (t[8] = S), (t[9] = T));
  let E = T,
    D;
  t[10] === S ? (D = t[11]) : ((D = c([...S.values()])), (t[10] = S), (t[11] = D));
  let O = D,
    k = b.filter(h),
    A = e.expanded ? e.visibleCount : 0,
    j;
  t[12] === o ? (j = t[13]) : ((j = (e) => _({ scopeKey: o, pages: e })), (t[12] = o), (t[13] = j));
  let M;
  t[14] === O ? (M = t[15]) : ((M = (e) => l(e.source, O)), (t[14] = O), (t[15] = M));
  let N;
  t[16] !== e.scopes || t[17] !== w
    ? ((N = (t) => s({ olderSettled: w, scopes: e.scopes, threads: t })),
      (t[16] = e.scopes),
      (t[17] = w),
      (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] === E
    ? (P = t[20])
    : ((P = (e) => {
        let { scope: t } = e;
        return E(t.environmentId)?.status === `pending`;
      }),
      (t[19] = E),
      (t[20] = P));
  let F = k.some(P),
    I;
  t[21] === E
    ? (I = t[22])
    : ((I = (e) => {
        let { scope: t } = e;
        return E(t.environmentId)?.status === `failed`;
      }),
      (t[21] = E),
      (t[22] = I));
  let L = k.some(I),
    R;
  t[23] === k
    ? (R = t[24])
    : ((R = () => {
        for (let { scope: e, pages: t } of k) a.retryPages(r, e, t);
      }),
      (t[23] = k),
      (t[24] = R));
  let z;
  return (
    t[25] !== v ||
    t[26] !== S ||
    t[27] !== F ||
    t[28] !== L ||
    t[29] !== R ||
    t[30] !== A ||
    t[31] !== j ||
    t[32] !== M ||
    t[33] !== N
      ? ((z = {
          environments: S,
          visibleCount: A,
          pages: v,
          grow: j,
          isListed: M,
          unloadedCount: N,
          loading: F,
          failed: L,
          retry: R,
        }),
        (t[25] = v),
        (t[26] = S),
        (t[27] = F),
        (t[28] = L),
        (t[29] = R),
        (t[30] = A),
        (t[31] = j),
        (t[32] = M),
        (t[33] = N),
        (t[34] = z))
      : (z = t[34]),
    z
  );
}
function h(e) {
  let { pages: t } = e;
  return t > 0;
}
function g(e) {
  let { scope: t, pages: n } = e;
  return n === 0 ? [] : [o.mountRows(r, t.environmentId, a.rowsKey(t, n), a.pageRowsAtom(t, n))];
}
function _(e, t) {
  let n = (0, d.c)(10),
    r;
  n[0] !== t.length || n[1] !== e.environments || n[2] !== e.pages || n[3] !== e.visibleCount
    ? ((r = u({
        requested: e.pages,
        environments: e.environments,
        listedCount: t.length,
        visibleCount: e.visibleCount,
      })),
      (n[0] = t.length),
      (n[1] = e.environments),
      (n[2] = e.pages),
      (n[3] = e.visibleCount),
      (n[4] = r))
    : (r = n[4]);
  let i = r,
    { grow: a, pages: o } = e,
    s,
    c;
  (n[5] !== a || n[6] !== o || n[7] !== i
    ? ((s = () => {
        i !== o && a(i);
      }),
      (c = [i, o, a]),
      (n[5] = a),
      (n[6] = o),
      (n[7] = i),
      (n[8] = s),
      (n[9] = c))
    : ((s = n[8]), (c = n[9])),
    (0, f.useEffect)(s, c));
}
function v(e, t) {
  return s({
    olderSettled: (e) => r.get(a.olderSettledAtom(e)),
    scopes: [...new Set(e.map((e) => e.environmentId))].map((t) => ({
      environmentId: t,
      projectIds: e.flatMap((e) => (e.environmentId === t ? [e.id] : [])),
    })),
    threads: t.filter((t) =>
      e.some((e) => e.environmentId === t.environmentId && e.id === t.projectId),
    ),
  });
}
export { m as n, _ as r, v as t };
//# sourceMappingURL=olderSettledShelf-CaUJS7nU.js.map
