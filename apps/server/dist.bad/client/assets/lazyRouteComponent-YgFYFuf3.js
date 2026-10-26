import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { t as n } from "./jsx-runtime-BQExFN_X.js";
import { n as r, r as i } from "./useNavigate-Dq4t21kA.js";
import { _ as a, n as o, s, t as c } from "./useParams-JSmvSNOU.js";
import { l, o as u, t as d, u as f } from "./link-BAk08nHo.js";
import { n as p, r as m } from "./redirect-D3L17tzd.js";
var h = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = m) : this.parentRoute || s());
          let r = n ? m : t?.path;
          r && r !== `/` && (r = l(r));
          let i = t?.id || r,
            a = n ? m : u([this.parentRoute.id === `__root__` ? `` : this.parentRoute.id, i]);
          (r === `__root__` && (r = `/`), a !== `__root__` && (a = u([`/`, a])));
          let o = a === `__root__` ? `/` : u([this.parentRoute.fullPath, r]);
          ((this._path = r), (this._id = a), (this._fullPath = o), (this._to = f(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => p({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  g = class extends h {
    constructor(e) {
      super(e);
    }
  };
function _(e) {
  return o({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function v(e) {
  let { select: t, ...n } = e;
  return o({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function y(e) {
  return o({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function b(e) {
  return o({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
var x = e(t(), 1),
  S = e(n(), 1),
  C = class extends h {
    constructor(e) {
      (super(e),
        (this.useMatch = (e) =>
          o({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
        (this.useRouteContext = (e) => b({ ...e, from: this.id })),
        (this.useSearch = (e) =>
          y({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
        (this.useParams = (e) =>
          c({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
        (this.useLoaderDeps = (e) => v({ ...e, from: this.id })),
        (this.useLoaderData = (e) => _({ ...e, from: this.id })),
        (this.useNavigate = () => r({ from: this.fullPath })),
        (this.Link = x.forwardRef((e, t) => (0, S.jsx)(d, { ref: t, from: this.fullPath, ...e }))));
    }
  };
function w(e) {
  return new C(e);
}
var T = class extends g {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        o({ select: e?.select, from: this.id, structuralSharing: e?.structuralSharing })),
      (this.useRouteContext = (e) => b({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        y({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useParams = (e) =>
        c({ select: e?.select, structuralSharing: e?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (e) => v({ ...e, from: this.id })),
      (this.useLoaderData = (e) => _({ ...e, from: this.id })),
      (this.useNavigate = () => r({ from: this.fullPath })),
      (this.Link = x.forwardRef((e, t) => (0, S.jsx)(d, { ref: t, from: this.fullPath, ...e }))));
  }
};
function E(e) {
  return new T(e);
}
function D(e) {
  return new O(e, { silent: !0 }).createRoute;
}
var O = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = w(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function k(e, t) {
  let n,
    r,
    o,
    s,
    c = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((o = e),
            a(o) && o instanceof Error && typeof window < `u` && typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${o.message}`;
            sessionStorage.getItem(e) || (sessionStorage.setItem(e, `1`), (s = !0));
          }
        })),
      n
    ),
    l = function (e) {
      if (s) throw (window.location.reload(), new Promise(() => {}));
      if (o) throw o;
      if (!r) {
        if (i) i(c());
        else throw c();
      }
      return x.createElement(r, e);
    };
  return ((l.preload = c), l);
}
export { D as n, E as r, k as t };
//# sourceMappingURL=lazyRouteComponent-YgFYFuf3.js.map
