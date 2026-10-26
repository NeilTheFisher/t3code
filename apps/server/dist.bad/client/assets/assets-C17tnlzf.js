import { n as e } from "./jsx-runtime-BQExFN_X.js";
import {
  Bf as t,
  Cu as n,
  Gp as r,
  JC as i,
  LS as a,
  Lf as o,
  Lp as s,
  Lx as c,
  Mu as l,
  QC as u,
  Qc as d,
  Ry as f,
  Uf as p,
  Ul as m,
  Uy as h,
  Vy as g,
  Wy as _,
  Xf as ee,
  Yn as te,
  cp as v,
  cx as y,
  du as b,
  jc as x,
  jx as S,
  jy as C,
  kC as ne,
  ky as w,
  nl as T,
  np as re,
  qC as E,
  qb as ie,
  qf as D,
  rx as ae,
  tb as O,
  ys as oe,
  yy as k,
  zf as A,
} from "./utils-CPoejuy5.js";
import { a as j, h as M, i as N, n as P, t as F } from "./runtime-CY2dlMEg.js";
import { g as I, n as L } from "./server-3D32GveR.js";
import { t as R } from "./session-0UrRHIau.js";
import { t as z } from "./sourceControl-DEiLEb7m.js";
var B = 18e5,
  V = 3e5,
  H = 36e5,
  U = class extends h()(`InvalidAssetCollectionKeyError`, { key: g, cause: C() }) {
    get message() {
      return `Invalid asset collection atom key: ${JSON.stringify(this.key)}.`;
    }
  },
  W = O(_([k, w(r)]));
function G(e) {
  try {
    return W(JSON.parse(e));
  } catch (t) {
    throw new U({ key: e, cause: t });
  }
}
function K(e, t) {
  try {
    return new URL(t, e).toString();
  } catch {
    return null;
  }
}
var q = A(re(!1)).pipe(D(`asset-url:empty`)),
  se = `This connection cannot read host files. Pair again with a new link to view it.`;
function ce(e, t) {
  return e === null ||
    t.canReadFiles ||
    (e._tag !== `workspace-file` && e._tag !== `media-file` && e._tag !== `draft-workspace-file`)
    ? null
    : t.isPending
      ? { _tag: `Loading` }
      : t.error === null
        ? { _tag: `Failure`, reason: `missing-file-access` }
        : { _tag: `Failure` };
}
function J(e, t) {
  if (e._tag === `Failure`) return { _tag: `Failure` };
  if (t === null || e._tag !== `Success`) return { _tag: `Loading` };
  let n = K(t, e.value.relativeUrl);
  return n === null
    ? { _tag: `Failure` }
    : {
        _tag: `Success`,
        url: n,
        expiresAt: e.value.expiresAt,
        ...(e.value.sourcePath === void 0 ? {} : { sourcePath: e.value.sourcePath }),
        ...(e.value.imageDimensions === void 0 ? {} : { imageDimensions: e.value.imageDimensions }),
        ...(e.value.fileRevision === void 0 ? {} : { fileRevision: e.value.fileRevision }),
      };
}
function le(e, t) {
  let r = y(`assets.createUrl`)(function* (e) {
      let r = yield* b(s.assetsCreateUrl, e).pipe(c);
      if (ne(r)) return r.success;
      let i = r.failure,
        o = e.resource,
        u = t ? (yield* ee).get(t) : null,
        d = yield* l;
      if (
        !u ||
        u.environmentId === d.target.environmentId ||
        (i._tag !== `AssetWorkspaceAssetNotFoundError` &&
          i._tag !== `AssetWorkspaceAssetInspectionError` &&
          i._tag !== `AssetWorkspaceContextNotFoundError`) ||
        o._tag !== `media-file` ||
        !(o.path.startsWith(`/`) || oe(o.path)) ||
        M(o.path.slice(o.path.lastIndexOf(`.`))) === null
      )
        return yield* i;
      let f = yield* (yield* n)
        .run(u.environmentId, b(s.assetsCreateUrl, e))
        .pipe(ie((e) => ae(a(e, () => i))));
      return { ...f, relativeUrl: new URL(f.relativeUrl, u.httpBaseUrl).href };
    }),
    i = m(e, {
      label: `environment-data:assets:create-url`,
      execute: r,
      staleTimeMs: V,
      idleTtlMs: H,
      refreshIntervalMs: B,
      refreshTrigger: ({ input: e }) => (e.resource._tag === `media-file` ? t : void 0),
    }),
    u = o((e) => {
      let [t, n] = G(e);
      return A((e) => n.map((n) => e(i({ environmentId: t, input: { resource: n } })))).pipe(
        p(H),
        D(`environment-data:assets:create-urls:${e}`),
      );
    });
  return { createUrl: i, createUrls: (e) => u(JSON.stringify([e.environmentId, e.resources])) };
}
function ue(e) {
  let n = O(_([k, g, f(g)])),
    r = e.projectClones,
    a = o((a) => {
      let [o, s, c] = n(JSON.parse(a)),
        l = { _tag: `project-favicon`, cwd: s, ...(c ? { path: c } : {}) },
        d = e.createUrl({ environmentId: o, input: { resource: l } }),
        f = r
          ? d.pipe(t(A((e) => e(r(o)).find((e) => e.destinationPath === s)?.phase ?? null)))
          : d,
        m = A((t) => {
          let n = t(f),
            r = t(e.preparedConnection(o)),
            a = J(n, u(r) ? r.value.httpBaseUrl : null);
          return a._tag === `Success` ? a.url : i(t.self());
        }).pipe(p(H)),
        h = e.imageCache;
      if (!h) return m;
      let g = { environmentId: o, cwd: s, faviconPath: c },
        _ = A((e) => {
          e(f);
          let t = e(m);
          return S((e) => h.resolve(g, t, e));
        }).pipe(p(H));
      return A((e) => {
        let t = e(_);
        return j(e(m)) ? null : E(v(t), () => h.peek(g));
      }).pipe(p(H));
    });
  return (e) => a(N(e.environmentId, e.cwd, e.faviconPath));
}
var Y = e(),
  X = [],
  de = A(null).pipe(D(`web-project-clone:empty`)),
  Z = o((e) =>
    A((t) => {
      if (t(L).get(e)?.environment.capabilities.projectCloneTracking !== !0) return X;
      let n = t(z.projectClones({ environmentId: e, input: {} }));
      return E(v(n), () => X);
    }).pipe(D(`web-project-clones:${e}`)),
  ),
  fe = o((e) => {
    let t = d(e);
    return A((e) =>
      t === null ? null : (e(Z(t.environmentId)).find((e) => e.projectId === t.projectId) ?? null),
    ).pipe(D(`web-project-clone:${e}`));
  });
function pe(e) {
  let t = (0, Y.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = e === null ? de : fe(T(e))), (t[0] = e), (t[1] = n)), x(n)
  );
}
function me(e) {
  let t = (0, Y.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = Z(e)), (t[0] = e), (t[1] = n)), x(n));
}
var Q = new Set();
function he(e) {
  Q.add(T(e));
}
function ge(e) {
  return Q.has(T(e));
}
var _e = A((e) => {
    if (!te) return null;
    let t = e(I);
    if (t === null) return null;
    let n = e(R.preparedConnectionValueAtom(t)),
      r = e(R.initialConfigValueAtom(t));
    return n._tag === `None` || r === null
      ? null
      : { environmentId: t, httpBaseUrl: n.value.httpBaseUrl };
  }),
  $ = le(F, _e),
  ve = ue({
    imageCache: P,
    createUrl: $.createUrl,
    preparedConnection: R.preparedConnectionValueAtom,
    projectClones: Z,
  });
export {
  he as a,
  q as c,
  ce as d,
  K as f,
  ge as i,
  se as l,
  ve as n,
  me as o,
  Z as r,
  pe as s,
  $ as t,
  J as u,
};
//# sourceMappingURL=assets-C17tnlzf.js.map
