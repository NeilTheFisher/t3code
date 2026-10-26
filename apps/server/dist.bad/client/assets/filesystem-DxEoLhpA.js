import { n as e } from "./jsx-runtime-BQExFN_X.js";
import { D_ as t, Gl as n, Lp as r, U_ as i } from "./utils-CPoejuy5.js";
import { _t as a, dt as o, gt as s, ht as c, mt as l, yt as u } from "./entities-CgVpsCCl.js";
import { t as d } from "./runtime-CY2dlMEg.js";
import { Y as f } from "./useSettings-N-JG2LFZ.js";
import { t as p } from "./session-0UrRHIau.js";
import { n as m } from "./query-LKSVgBQH.js";
var h = e();
function g(e) {
  if (e.sessionError !== null) return { canReadFiles: !1, isPending: !1, error: e.sessionError };
  if (e.session === null) {
    let t =
      !e.isCatalogReady ||
      e.connection?.phase === `connected` ||
      e.connection?.phase === `connecting` ||
      e.connection?.phase === `reconnecting`;
    return {
      canReadFiles: !1,
      isPending: t,
      error: t ? null : (e.connection?.error ?? `This environment is not connected.`),
    };
  }
  return { canReadFiles: i(e.session, t), isPending: !1, error: null };
}
function _(e, t = ``, n = !0) {
  let r = n && u(e, t),
    i = r ? l(e) : ``;
  return {
    isBrowsing: r,
    directoryPath: i,
    filterQuery: r && !a(e) ? c(e) : ``,
    parentPath: r ? s(i) : null,
    canBrowseUp: r && o(i),
  };
}
function v(e, t) {
  let n = t.toLowerCase(),
    r = t.startsWith(`.`),
    i = e.filter((e) => e.name.toLowerCase().startsWith(n) && (r || !e.name.startsWith(`.`)));
  return {
    visibleEntries: i,
    exactEntry: t.length > 0 ? (i.find((e) => e.name === t) ?? null) : null,
  };
}
function y() {
  let e = 0;
  return {
    invalidate: () => {
      e += 1;
    },
    run: async (t, n) => {
      let r = ++e;
      return (await t(), r === e && (n(), !0));
    },
  };
}
function b(e) {
  return e === `connected`;
}
function x(e) {
  return {
    getMetadata: n(e, {
      label: `environment-data:filesystem:get-metadata`,
      tag: r.filesystemGetMetadata,
    }),
    browse: n(e, { label: `environment-data:filesystem:browse`, tag: r.filesystemBrowse }),
  };
}
var S = x(d);
function C(e) {
  let t = (0, h.c)(7),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === null ? null : p.sessionStateAtom(e)), (t[0] = e), (t[1] = n));
  let r = m(n),
    i = f(e),
    a = i.presentation?.connection ?? null,
    o;
  return (
    t[2] !== i.isReady || t[3] !== r.data || t[4] !== r.error || t[5] !== a
      ? ((o = g({
          isCatalogReady: i.isReady,
          connection: a,
          session: r.data,
          sessionError: r.error,
        })),
        (t[2] = i.isReady),
        (t[3] = r.data),
        (t[4] = r.error),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
export { v as a, y as i, C as n, _ as o, b as r, S as t };
//# sourceMappingURL=filesystem-DxEoLhpA.js.map
