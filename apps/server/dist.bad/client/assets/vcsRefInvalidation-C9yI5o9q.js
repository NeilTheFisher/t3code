import {
  Hb as e,
  Iu as t,
  Kb as n,
  Lf as r,
  Ou as i,
  Rf as a,
  SS as o,
  Tx as s,
  Ub as c,
  Vb as l,
  Vl as u,
  Zb as d,
  bS as f,
  cx as p,
  ex as m,
  hS as h,
  hx as g,
  iS as _,
  lC as v,
  mS as y,
  ox as b,
  pC as x,
  pS as S,
  qC as C,
  qf as w,
  tS as T,
  tw as E,
  xS as D,
  xx as O,
  yS as k,
  zf as A,
} from "./utils-CPoejuy5.js";
var j = `~effect/PartitionedSemaphore`,
  M = (e) => {
    let t = Math.max(0, e.permits);
    if (!Number.isFinite(t))
      return {
        [j]: j,
        capacity: t,
        available: T(t),
        take: () => y,
        release: () => T(t),
        withPermits: () => (e) => e,
        withPermit: () => (e) => e,
        withPermitsIfAvailable: () => (e) => c(e),
      };
    let r = t,
      i = 0,
      a = k(),
      l = a[Symbol.iterator](),
      u = !1,
      d = 0,
      p = (e) => {
        if ((e > 0 && (d += e), !u)) {
          u = !0;
          try {
            for (; d > 0 && i > 0;) {
              let e = l.next();
              if (e.done && ((l = a[Symbol.iterator]()), (e = l.next()), e.done)) break;
              let t = e.value[1].values().next().value;
              t !== void 0 && (--t.permits, --i, --d, t.permits === 0 && t.resume());
            }
          } finally {
            u = !1;
          }
        }
        return (i === 0 && ((r = Math.min(t, r + d)), (d = 0)), r);
      },
      g = (e, c) =>
        c <= 0
          ? y
          : t < c
            ? s
            : h((t) =>
                r >= c
                  ? ((r -= c),
                    x(t, (e) => {
                      v(e) && p(c);
                    }),
                    y)
                  : n((t) => {
                      if (r >= c) {
                        t(g(e, c));
                        return;
                      }
                      let n = c - r;
                      (r > 0 && (r = 0), (i += n));
                      let s = C(f(a, e), () => {
                          let t = new Set();
                          return (o(a, e, t), t);
                        }),
                        l = {
                          permits: n,
                          resume: () => {
                            (u(), t(y));
                          },
                        },
                        u = () => {
                          s.delete(l) && s.size === 0 && D(a, e);
                        };
                      return (
                        s.add(l),
                        _(() => {
                          (u(), (i -= l.permits), p(c - l.permits));
                        })
                      );
                    }),
              ),
      w = (e, t) => (n) => {
        if (t <= 0) return n;
        let r = g(e, t);
        return S((e) =>
          b(e(r), () =>
            m(
              e(n),
              _(() => {
                p(t);
              }),
            ),
          ),
        );
      },
      O = (e) => (e <= 0 ? !0 : t < e || r < e ? !1 : ((r -= e), !0));
    return {
      [j]: j,
      capacity: t,
      available: _(() => r),
      take: g,
      release: (e) => _(() => p(e)),
      withPermits: w,
      withPermit: (e) => w(e, 1),
      withPermitsIfAvailable: (e) => (t) =>
        e <= 0
          ? c(t)
          : h((n) =>
              O(e)
                ? (x(n, () => {
                    p(e);
                  }),
                  c(t))
                : T(E()),
            ),
    };
  },
  N = u(),
  P = { mode: `serial`, key: ({ environmentId: e, input: t }) => JSON.stringify([e, t.cwd]) },
  F = r((e) =>
    A({ revision: 0, persistedCacheReadable: !0 }).pipe(
      a,
      w(`environment-data:vcs:list-refs-state:${e}`),
    ),
  ),
  I = M({ permits: 1 });
function L(e) {
  return F(e.environmentId);
}
function R(e, t, n) {
  e.update(L(t), (e) => ({
    revision: e.revision + 1,
    persistedCacheReadable: n ?? e.persistedCacheReadable,
  }));
}
function z(e, t) {
  return I.withPermit(e)(t);
}
var B = p(`VcsRefsState.invalidateCached`)(function* (n, r) {
  let a = yield* i;
  yield* z(
    r.environmentId,
    g(function* () {
      R(
        n,
        r,
        yield* a.clearVcsRefs(r.environmentId).pipe(
          e(!0),
          d((n) =>
            O(`Could not remove invalidated cached Git refs.`).pipe(
              l({ environmentId: r.environmentId, cwd: r.cwd, ...t(n) }),
              e(!1),
            ),
          ),
        ),
      );
    }),
  );
});
export { N as a, P as i, L as n, z as r, B as t };
//# sourceMappingURL=vcsRefInvalidation-C9yI5o9q.js.map
