import { i as e, t } from "./rolldown-runtime-COiEfhsA.js";
import { t as n } from "./react-BP46yLMB.js";
import { n as r, t as i } from "./jsx-runtime-BQExFN_X.js";
import { Fy as a, Uy as o, jy as s } from "./utils-CPoejuy5.js";
import { R as c, U as l } from "./useSettings-N-JG2LFZ.js";
import { r as u } from "./constants-CmGPilXJ.js";
import { m as d, o as ee, s as te } from "./useNextRenderData-JbRG-cVc.js";
import {
  C as f,
  D as p,
  E as m,
  T as ne,
  U as re,
  W as ie,
  _ as h,
  c as g,
  ct as _,
  r as v,
  st as ae,
  v as oe,
  w as y,
} from "./getDiffFileInput-DNKgimbU.js";
import { n as se, r as ce, t as le } from "./appendItems-C5MDJzmY.js";
import { t as b } from "./resolveLanguages-RcuJsBl_.js";
import {
  Pc as x,
  Qs as S,
  Vs as ue,
  _c as C,
  bc as w,
  dc as T,
  fc as E,
  mc as de,
  pc as D,
  uc as O,
  wc as k,
  xc as fe,
} from "./main-BZa0O6xN.js";
function A(e, t) {
  return (
    _(e.theme, t.theme) &&
    e.useTokenTransformer === t.useTokenTransformer &&
    e.tokenizeMaxLineLength === t.tokenizeMaxLineLength
  );
}
var j = 10,
  M = 13,
  pe = 4,
  me = 40;
function he(e) {
  let t = [0],
    n = e.indexOf(`\r`),
    r = e.indexOf(`
`),
    i = 0,
    a = 0;
  for (; n !== -1 || r !== -1;) {
    let o;
    if (
      (n !== -1 && (r === -1 || n < r)
        ? r === n + 1
          ? ((o = r + 1),
            (n = e.indexOf(`\r`, o)),
            (r = e.indexOf(
              `
`,
              o,
            )))
          : ((o = n + 1), (n = e.indexOf(`\r`, o)))
        : ((o = r + 1),
          (r = e.indexOf(
            `
`,
            o,
          ))),
      t.push(o),
      ++a === pe)
    ) {
      if (o - i <= me) {
        for (let n = o; n < e.length; n++) {
          let r = e.charCodeAt(n);
          (r === j || r === M) &&
            (r === M && n + 1 < e.length && e.charCodeAt(n + 1) === j && n++, t.push(n + 1));
        }
        return t;
      }
      ((i = o), (a = 0));
    }
  }
  return t;
}
function ge(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    (r === j || r === M) && (r === M && n + 1 < e.length && e.charCodeAt(n + 1) === j && n++, t++);
  }
  return t;
}
function N(e) {
  let t = he(e);
  return Array.from({ length: t.length }, (n, r) => {
    let i = t[r],
      a = t[r + 1] ?? e.length;
    return e.slice(i, a);
  });
}
var _e = { forcePlainText: !1 };
function P(
  e,
  t,
  { theme: n, tokenizeMaxLineLength: r, useTokenTransformer: i },
  { forcePlainText: a, lazyLineAST: o = !1, startingLine: s, totalLines: c, lines: l } = _e,
) {
  a ? ((s ??= 0), (c ??= 1 / 0)) : ((s = 0), (c = 1 / 0));
  let u = s > 0 || c < 1 / 0,
    d = { lineInfo: [] },
    ee = a ? `text` : (e.lang ?? E(e.name)),
    te = typeof n == `string` ? t.getTheme(n).type : void 0,
    f = ie({ theme: n, highlighter: t });
  d.lineInfo = (e) => ({ type: `context`, lineIndex: e - 1 + s, lineNumber: e + s });
  let p = se(
      t.codeToTokens(ve(u ? ye(l ?? N(e.contents), s, c) : e.contents), re(ee, n, r)).tokens,
      {
        state: d,
        useTokenTransformer: i,
        lazyLineAST: o && !a && !i,
        cacheHtmlStyles: t.name === `highlights`,
      },
    ),
    m = u ? Array(s) : p;
  return (u && le(m, p), { code: m, themeStyles: f, baseThemeType: te });
}
function ve(e) {
  return e.replace(
    /\r(?!\n)/g,
    `
`,
  );
}
function ye(e, t, n) {
  if (e.length === 0) return ``;
  let r = Math.min(t + n, e.length);
  return e.slice(t, r).join(``);
}
function F(e) {
  return (e.lang ?? E(e.name)) === `text`;
}
function I(e) {
  let t = [];
  for (let n of e) {
    let e = u.get(n);
    if (e == null)
      throw Error(
        `getResolvedLanguages: ${n} is not resolved. Please resolve languages before calling getResolvedLanguages`,
      );
    t.push(e);
  }
  return t;
}
function L(e) {
  for (let t of Array.isArray(e) ? e : [e]) if (!u.has(t)) return !1;
  return !0;
}
function R(e, t = k()) {
  return C(t).getResolvedThemes(e);
}
function z(e, t = k()) {
  return C(t).hasResolvedThemes(e);
}
function B(e, t = k()) {
  return C(t).resolveThemes(e);
}
var V = 0,
  be = 1,
  xe = 2,
  Se = 4,
  Ce = 5,
  we = 6,
  Te = [void 0, null, !0, !1];
function H(e) {
  if (Array.isArray(e)) return e;
  let { ops: t, offsets: n, strings: r, text: i, extras: a } = e,
    o = Array(n.length / 2),
    s = 0,
    c = 0;
  function l(e) {
    let n = Array(e);
    for (let o = 0; o < e; o++) {
      let e = t[s++];
      if (e !== V) {
        if (e === be) {
          let e = c + t[s++];
          ((n[o] = { type: `text`, value: i.slice(c, e) }), (c = e));
        } else if (e === xe) {
          let e = r[t[s++]],
            i = {};
          for (let e = t[s++]; e > 0; e--) {
            let e = r[t[s++]],
              n = t[s++],
              o = n === Se ? r[t[s++]] : n === Ce ? t[s++] : n === we ? a[t[s++]] : Te[n];
            e === `__proto__`
              ? Object.defineProperty(i, e, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (i[e] = o);
          }
          n[o] = { type: `element`, tagName: e, properties: i, children: l(t[s++]) };
        } else n[o] = a[t[s++]];
      }
    }
    return n;
  }
  for (let e = 0; e < o.length; e++)
    t[n[e * 2]] !== V && ce(o, e, () => ((s = n[e * 2]), (c = n[e * 2 + 1]), l(1)[0]));
  return o;
}
var U = t((e, t, n) => {
    (function (n, r) {
      typeof e == `object` && t !== void 0
        ? r(e)
        : typeof define == `function` && define.amd
          ? define([`exports`], r)
          : r(((n ||= self).lru_map = n.lru_map || {}));
    })(n, function (e) {
      let t = Symbol(`newer`),
        n = Symbol(`older`);
      class r {
        constructor(e, t) {
          (typeof e != `number` && ((t = e), (e = 0)),
            (this.size = 0),
            (this.limit = e),
            (this.oldest = this.newest = void 0),
            (this._keymap = new Map()),
            t && (this.assign(t), e < 1 && (this.limit = this.size)));
        }
        _markEntryAsUsed(e) {
          e !== this.newest &&
            (e[t] && (e === this.oldest && (this.oldest = e[t]), (e[t][n] = e[n])),
            e[n] && (e[n][t] = e[t]),
            (e[t] = void 0),
            (e[n] = this.newest),
            this.newest && (this.newest[t] = e),
            (this.newest = e));
        }
        assign(e) {
          let r,
            a = this.limit || Number.MAX_VALUE;
          this._keymap.clear();
          let o = e[Symbol.iterator]();
          for (let e = o.next(); !e.done; e = o.next()) {
            let o = new i(e.value[0], e.value[1]);
            if (
              (this._keymap.set(o.key, o),
              r ? ((r[t] = o), (o[n] = r)) : (this.oldest = o),
              (r = o),
              a-- == 0)
            )
              throw Error(`overflow`);
          }
          ((this.newest = r), (this.size = this._keymap.size));
        }
        get(e) {
          var t = this._keymap.get(e);
          return t ? (this._markEntryAsUsed(t), t.value) : void 0;
        }
        set(e, r) {
          var a = this._keymap.get(e);
          return a
            ? ((a.value = r), this._markEntryAsUsed(a), this)
            : (this._keymap.set(e, (a = new i(e, r))),
              this.newest ? ((this.newest[t] = a), (a[n] = this.newest)) : (this.oldest = a),
              (this.newest = a),
              ++this.size,
              this.size > this.limit && this.shift(),
              this);
        }
        shift() {
          var e = this.oldest;
          if (e)
            return (
              this.oldest[t]
                ? ((this.oldest = this.oldest[t]), (this.oldest[n] = void 0))
                : ((this.oldest = void 0), (this.newest = void 0)),
              (e[t] = e[n] = void 0),
              this._keymap.delete(e.key),
              --this.size,
              [e.key, e.value]
            );
        }
        find(e) {
          let t = this._keymap.get(e);
          return t ? t.value : void 0;
        }
        has(e) {
          return this._keymap.has(e);
        }
        delete(e) {
          var r = this._keymap.get(e);
          return r
            ? (this._keymap.delete(r.key),
              r[t] && r[n]
                ? ((r[n][t] = r[t]), (r[t][n] = r[n]))
                : r[t]
                  ? ((r[t][n] = void 0), (this.oldest = r[t]))
                  : r[n]
                    ? ((r[n][t] = void 0), (this.newest = r[n]))
                    : (this.oldest = this.newest = void 0),
              this.size--,
              r.value)
            : void 0;
        }
        clear() {
          ((this.oldest = this.newest = void 0), (this.size = 0), this._keymap.clear());
        }
        keys() {
          return new o(this.oldest);
        }
        values() {
          return new s(this.oldest);
        }
        entries() {
          return this;
        }
        [Symbol.iterator]() {
          return new a(this.oldest);
        }
        forEach(e, n) {
          typeof n != `object` && (n = this);
          let r = this.oldest;
          for (; r;) (e.call(n, r.value, r.key, this), (r = r[t]));
        }
        toJSON() {
          for (var e = Array(this.size), n = 0, r = this.oldest; r;)
            ((e[n++] = { key: r.key, value: r.value }), (r = r[t]));
          return e;
        }
        toString() {
          for (var e = ``, n = this.oldest; n;)
            ((e += String(n.key) + `:` + n.value), (n = n[t]), n && (e += ` < `));
          return e;
        }
      }
      e.LRUMap = r;
      function i(e, r) {
        ((this.key = e), (this.value = r), (this[t] = void 0), (this[n] = void 0));
      }
      function a(e) {
        this.entry = e;
      }
      ((a.prototype[Symbol.iterator] = function () {
        return this;
      }),
        (a.prototype.next = function () {
          let e = this.entry;
          return e
            ? ((this.entry = e[t]), { done: !1, value: [e.key, e.value] })
            : { done: !0, value: void 0 };
        }));
      function o(e) {
        this.entry = e;
      }
      ((o.prototype[Symbol.iterator] = function () {
        return this;
      }),
        (o.prototype.next = function () {
          let e = this.entry;
          return e
            ? ((this.entry = e[t]), { done: !1, value: e.key })
            : { done: !0, value: void 0 };
        }));
      function s(e) {
        this.entry = e;
      }
      ((s.prototype[Symbol.iterator] = function () {
        return this;
      }),
        (s.prototype.next = function () {
          let e = this.entry;
          return e
            ? ((this.entry = e[t]), { done: !1, value: e.value })
            : { done: !0, value: void 0 };
        }));
    });
  }),
  W = e(U(), 1),
  G = Symbol(`IGNORE_RESPONSE`),
  Ee = 1e4,
  De = class {
    options;
    preferredHighlighter;
    renderOptions;
    renderOptionsRequestVersion = 0;
    renderOptionsVersion = 0;
    initialized = !1;
    workers = [];
    queuedTasks = [];
    queuedTaskByInstance = new Map();
    taskByHighlightKey = new Map();
    activeTaskById = new Map();
    activeRequestByInstance = new Map();
    nextRequestId = 0;
    themeSubscribers = new Set();
    workersFailed = !1;
    terminated = !1;
    statSubscribers = new Set();
    fileCache;
    diffCache;
    _queuedBroadcast;
    lifecycleGeneration = 0;
    constructor(
      e,
      {
        langs: t,
        theme: n = x,
        useTokenTransformer: r = !1,
        lineDiffType: i = `word-alt`,
        maxLineDiffLength: a = 1e3,
        tokenizeMaxLineLength: o = 1e3,
        preferredHighlighter: s,
      },
    ) {
      ((this.options = e),
        (this.preferredHighlighter = k(s)),
        (this.renderOptions = {
          theme: n,
          useTokenTransformer: r,
          lineDiffType: i,
          maxLineDiffLength: a,
          tokenizeMaxLineLength: o,
        }),
        (this.fileCache = new W.default.LRUMap(e.totalASTLRUCacheSize ?? 100)),
        (this.diffCache = new W.default.LRUMap(e.totalASTLRUCacheSize ?? 100)),
        this.queueInitialization(t));
    }
    isWorkingPool() {
      return !this.workersFailed && !this.terminated;
    }
    shouldHighlightOnMainThread(e) {
      let { mainThreadMaxCharacters: t = -1 } = this.options;
      return (
        (`contents` in e
          ? e.contents.length
          : e.deletionCharacterCount + e.additionCharacterCount) <= t
      );
    }
    getFileResultCache(e) {
      return e.cacheKey == null ? void 0 : this.fileCache.get(e.cacheKey);
    }
    getDiffResultCache(e) {
      return e.cacheKey == null ? void 0 : this.diffCache.get(e.cacheKey);
    }
    setFileResultCache(e, { result: t, options: n }) {
      return e == null || !A(n, this.getFileRenderOptions())
        ? !1
        : (this.fileCache.set(e, { result: t, options: n }), this.queueBroadcastStateChanges(), !0);
    }
    setDiffResultCache(e, { result: t, options: n }) {
      return e == null || !h(n, this.getDiffRenderOptions())
        ? !1
        : (this.diffCache.set(e, { result: t, options: n }), this.queueBroadcastStateChanges(), !0);
    }
    inspectCaches() {
      let { fileCache: e, diffCache: t } = this;
      return { fileCache: e, diffCache: t };
    }
    evictFileFromCache(e) {
      try {
        return this.fileCache.delete(e) !== void 0;
      } finally {
        this.queueBroadcastStateChanges();
      }
    }
    evictDiffFromCache(e) {
      try {
        return this.diffCache.delete(e) !== void 0;
      } finally {
        this.queueBroadcastStateChanges();
      }
    }
    async setRenderOptions({
      theme: e = this.renderOptions.theme ?? x,
      useTokenTransformer: t = this.renderOptions.useTokenTransformer ?? !1,
      lineDiffType: n = this.renderOptions.lineDiffType ?? `word-alt`,
      maxLineDiffLength: r = this.renderOptions.maxLineDiffLength ?? 1e3,
      tokenizeMaxLineLength: i = this.renderOptions.tokenizeMaxLineLength ?? 1e3,
    }) {
      let { lifecycleGeneration: a } = this,
        o = ++this.renderOptionsRequestVersion,
        s = () => this.isCurrentLifecycle(a) && this.renderOptionsRequestVersion === o;
      try {
        let a = {
          theme: e,
          useTokenTransformer: t,
          lineDiffType: n,
          maxLineDiffLength: r,
          tokenizeMaxLineLength: i,
        };
        if (!this.isInitialized())
          try {
            await this.initialize();
          } catch (e) {
            if (!this.workersFailed) throw e;
          }
        if (!s() || h(a, this.renderOptions)) return;
        let o = w(e),
          c = [];
        if (
          (_(a.theme, this.renderOptions.theme) ||
            (c = z(o, this.preferredHighlighter)
              ? R(o, this.preferredHighlighter)
              : await B(o, this.preferredHighlighter)),
          !s() ||
            (D({ theme: e }) == null && (await this.loadSharedHighlighter(o, [`text`]), !s())))
        )
          return;
        let l = this.setRenderOptionsOnWorkers(a, c);
        ((this.renderOptions = a),
          this.renderOptionsVersion++,
          this.diffCache.clear(),
          this.fileCache.clear(),
          this.invalidateRenderTasks());
        for (let e of this.themeSubscribers) e.onThemeChange();
        await l;
      } catch (e) {
        if (e instanceof y || !s()) return;
        throw e;
      }
    }
    getPreferredHighlighter() {
      return this.preferredHighlighter;
    }
    getFileRenderOptions() {
      let { tokenizeMaxLineLength: e, theme: t, useTokenTransformer: n } = this.renderOptions;
      return { theme: t, useTokenTransformer: n, tokenizeMaxLineLength: e };
    }
    getDiffRenderOptions() {
      return { ...this.renderOptions };
    }
    async setRenderOptionsOnWorkers(e, t) {
      if (this.workersFailed) return;
      this.isInitialized() || (await this.initialize());
      let n = [];
      for (let r of this.workers) {
        if (!r.initialized)
          throw (
            console.log({ managedWorker: r }),
            Error(`setRenderOptionsOnWorkers: Somehow we have an uninitialized worker`)
          );
        n.push(
          new Promise((n, i) => {
            let a = this.generateRequestId(),
              o = {
                type: `set-render-options`,
                id: a,
                request: { type: `set-render-options`, id: a, renderOptions: e, resolvedThemes: t },
                resolve: n,
                reject: i,
                requestStart: Date.now(),
              };
            (this.activeTaskById.set(a, o),
              (r.pendingSetupRequestId = a),
              r.worker.postMessage(o.request));
          }),
        );
      }
      await Promise.all(n);
    }
    subscribeToThemeChanges(e) {
      return (
        this.themeSubscribers.add(e),
        this.queueBroadcastStateChanges(),
        () => {
          (this.unsubscribeToThemeChanges(e), this.queueBroadcastStateChanges());
        }
      );
    }
    unsubscribeToThemeChanges(e) {
      (this.themeSubscribers.delete(e), this.queueBroadcastStateChanges());
    }
    subscribeToStatChanges(e) {
      return (
        this.statSubscribers.add(e),
        e(this.getStats()),
        () => {
          this.statSubscribers.delete(e);
        }
      );
    }
    queueBroadcastStateChanges() {
      this._queuedBroadcast ??= requestAnimationFrame(this._broadcastStateChanges);
    }
    _broadcastStateChanges = () => {
      this._queuedBroadcast != null &&
        (cancelAnimationFrame(this._queuedBroadcast), (this._queuedBroadcast = void 0));
      let e = this.getStats();
      for (let t of this.statSubscribers) t(e);
    };
    cleanUpTasks(e) {
      this.detachInstanceFromQueuedTasks(e);
      let t = this.activeRequestByInstance.get(e);
      if (t != null) {
        let n = this.activeTaskById.get(t);
        q(n)
          ? (this.detachInstanceFromRenderTask(n, e),
            !n.primeCache && n.instances.size === 0 && this.removeActiveTask(n))
          : this.activeTaskById.delete(t);
      }
      (this.activeRequestByInstance.delete(e), this.queueBroadcastStateChanges());
    }
    isInitialized() {
      return this.initialized === !0;
    }
    async initialize(e = []) {
      if (this.initialized === !0)
        D({ theme: this.renderOptions.theme }) ??
          (await this.loadSharedHighlighter(w(this.renderOptions.theme), [`text`, ...e]));
      else {
        if (this.initialized === !1) {
          this.terminated = !1;
          let { lifecycleGeneration: t } = this,
            n = new Promise((n, r) => {
              (async () => {
                try {
                  let r = w(this.renderOptions.theme),
                    i = z(r, this.preferredHighlighter)
                      ? R(r, this.preferredHighlighter)
                      : await B(r, this.preferredHighlighter);
                  if (!this.isCurrentLifecycle(t)) {
                    n();
                    return;
                  }
                  let a = [];
                  if (
                    (this.preferredHighlighter !== `highlights` && (a = L(e) ? I(e) : await b(e)),
                    !this.isCurrentLifecycle(t))
                  ) {
                    n();
                    return;
                  }
                  if (
                    (await Promise.all([
                      this.loadSharedHighlighter(r, [`text`, ...e]),
                      this.initializeWorkers(i, a),
                    ]),
                    !this.isCurrentLifecycle(t))
                  ) {
                    (this.terminateWorkers(), n());
                    return;
                  }
                  ((this.initialized = !0),
                    this.drainQueue(),
                    this.queueBroadcastStateChanges(),
                    n());
                } catch (e) {
                  if (e instanceof y || !this.isCurrentLifecycle(t)) {
                    n();
                    return;
                  }
                  ((this.initialized = !1),
                    (this.workersFailed = !0),
                    this.cancelActiveWorkerTasks(),
                    this.terminateWorkers(),
                    this.activeTaskById.clear());
                  for (let t of this.queuedTasks) this.rejectRenderTaskCallbacks(t, Y(e));
                  (this.queueBroadcastStateChanges(), r(e));
                }
              })();
            });
          return ((this.initialized = n), this.queueBroadcastStateChanges(), n);
        }
        return this.initialized;
      }
    }
    async loadSharedHighlighter(e, t) {
      try {
        await de({ themes: e, langs: t, preferredHighlighter: this.preferredHighlighter });
      } catch (e) {
        if (!(e instanceof fe)) throw e;
      }
    }
    async initializeWorkers(e, t) {
      this.workersFailed = !1;
      let n = [],
        r = T(),
        i = r > 0 ? O() : void 0;
      this.workers.length > 0 && this.terminateWorkers();
      for (let a = 0; a < (this.options.poolSize ?? 8); a++) {
        let a = this.options.workerFactory(),
          o = {
            worker: a,
            requestId: void 0,
            pendingSetupRequestId: void 0,
            initialized: !1,
            langs: new Set([`text`, ...t.map(({ name: e }) => e)]),
            customExtensionsVersion: 0,
          };
        (a.addEventListener(`message`, (e) => {
          this.handleWorkerMessage(o, e.data);
        }),
          a.addEventListener(`error`, (e) => this.handleWorkerError(o, e)),
          this.workers.push(o),
          n.push(
            new Promise((n, a) => {
              let s = this.generateRequestId(),
                c = {
                  type: `initialize`,
                  id: s,
                  request: {
                    type: `initialize`,
                    resultFormat: `hast-ops-v1`,
                    id: s,
                    renderOptions: this.renderOptions,
                    preferredHighlighter: this.preferredHighlighter,
                    resolvedThemes: e,
                    resolvedLanguages: t,
                    customExtensionsVersion: i == null ? void 0 : r,
                    customExtensionMap: i,
                  },
                  resolve() {
                    ((o.initialized = !0), n());
                  },
                  reject: a,
                  requestStart: Date.now(),
                };
              ((o.pendingSetupRequestId = s),
                this.activeTaskById.set(s, c),
                this.executeTask(o, c));
            }),
          ));
      }
      let a = this.options.workerInitializationTimeout ?? Ee,
        o;
      try {
        await Promise.race([
          Promise.all(n),
          new Promise((e, t) => {
            o = setTimeout(() => {
              t(Error(`WorkerPoolManager: worker initialization timed out after ${a}ms`));
            }, a);
          }),
        ]);
      } finally {
        o != null && clearTimeout(o);
      }
    }
    handleWorkerError(e, t) {
      let { onWorkerError: n } = this.options;
      if (n != null)
        try {
          n(t, e.worker);
        } catch (e) {
          console.error(`WorkerPoolManager: onWorkerError threw:`, e);
        }
      else console.error(`Worker error:`, t, e);
      let { pendingSetupRequestId: r } = e;
      if (r == null) return;
      let i = this.activeTaskById.get(r);
      if (i?.type !== `initialize`) return;
      let a = ke(t);
      (n != null && p(a), i.reject(a), this.cleanWorkerAndTask(e, i));
    }
    drainQueue = () => {
      if (
        ((this._queuedDrain = void 0), this.initialized === !0 && this.queuedTasks.length !== 0)
      ) {
        for (let e = 0; e < this.queuedTasks.length;) {
          let t = this.queuedTasks[e];
          if (this.hasActiveRequest(t)) {
            e++;
            continue;
          }
          let n = K(t.request),
            r = this.getAvailableWorker(n);
          if (r == null) break;
          (this.queuedTasks.splice(e, 1),
            this.assignWorkerToTask(t, r),
            this.resolveLanguagesAndExecuteTask(r, t, n));
        }
        this.queueBroadcastStateChanges();
      }
    };
    highlightFileAST(e, t) {
      let n = this.getFileResultCache(t);
      F(t) ||
        (n != null && A(n.options, this.getFileRenderOptions())) ||
        this.hasMatchingFileInstanceTask(e, t) ||
        this.submitTask(e, { type: `file`, file: t });
    }
    primeFileHighlightCache(e) {
      if (!this.isWorkingPool())
        return Promise.reject(
          Error(`WorkerPoolManager.primeFileHighlightCache: worker pool is not working`),
        );
      if (!this.shouldPrimeFileHighlightCache(e)) return Promise.resolve();
      if (this.shouldHighlightOnMainThread(e)) {
        let t = this.getFileRenderOptions();
        return this.primeHighlightCacheOnMainThread(K({ type: `file`, file: e }), t.theme, (n) =>
          this.setFileResultCache(e.cacheKey, { result: P(e, n, t), options: t }),
        );
      }
      let t = this.getOrCreateFileHighlightCacheTask(e);
      return t == null ? Promise.resolve() : this.createRenderTaskCallbacks(t);
    }
    shouldPrimeFileHighlightCache(e) {
      if (e.cacheKey == null)
        return (
          console.warn(
            `WorkerPoolManager.primeFileHighlightCache: priming highlight cache requires file.cacheKey; skipping "${e.name}".`,
          ),
          !1
        );
      let t = this.getFileResultCache(e);
      return !F(e) && (t == null || !A(t.options, this.getFileRenderOptions()));
    }
    getOrCreateFileHighlightCacheTask(e) {
      let t = this.getFileHighlightKey(e);
      if (t == null) return;
      let n = this.getTaskByHighlightKey(t);
      if (n != null) {
        if (n.type !== `file`)
          throw Error(`WorkerPoolManager.getOrCreateFileHighlightCacheTask: Invalid task type`);
        return ((n.primeCache = !0), n);
      }
      {
        let n = this.submitCacheTask({ type: `file`, file: e }, t);
        if (n.type !== `file`)
          throw Error(`WorkerPoolManager.getOrCreateFileHighlightCacheTask: Invalid task created`);
        return n;
      }
    }
    getPlainFileAST(e, t, n, r) {
      let i = D({ theme: this.renderOptions.theme });
      if (i == null) this.queueInitialization();
      else
        return P(e, i, this.renderOptions, {
          forcePlainText: !0,
          startingLine: t,
          totalLines: n,
          lines: r,
        });
    }
    highlightDiffAST(e, t) {
      let n = this.getDiffResultCache(t);
      v(t) ||
        (n != null && h(n.options, this.getDiffRenderOptions())) ||
        this.hasMatchingDiffInstanceTask(e, t) ||
        this.submitTask(e, { type: `diff`, diff: t });
    }
    primeDiffHighlightCache(e) {
      if (!this.isWorkingPool())
        return Promise.reject(
          Error(`WorkerPoolManager.primeDiffHighlightCache: worker pool is not working`),
        );
      if (!this.shouldPrimeDiffHighlightCache(e)) return Promise.resolve();
      if (this.shouldHighlightOnMainThread(e)) {
        let t = this.getDiffRenderOptions();
        return this.primeHighlightCacheOnMainThread(K({ type: `diff`, diff: e }), t.theme, (n) =>
          this.setDiffResultCache(e.cacheKey, { result: g(e, n, t), options: t }),
        );
      }
      let t = this.getOrCreateDiffHighlightCacheTask(e);
      return t == null ? Promise.resolve() : this.createRenderTaskCallbacks(t);
    }
    shouldPrimeDiffHighlightCache(e) {
      if (e.cacheKey == null)
        return (
          console.warn(
            `WorkerPoolManager.primeDiffHighlightCache: priming highlight cache requires diff.cacheKey; skipping "${e.prevName ?? e.name}" -> "${e.name}".`,
          ),
          !1
        );
      let t = this.getDiffResultCache(e);
      return !v(e) && (t == null || !h(t.options, this.getDiffRenderOptions()));
    }
    primeHighlightCacheOnMainThread(e, t, n) {
      function r() {
        let r = D({ theme: t, langs: e });
        return r != null && n(r);
      }
      if (r()) return Promise.resolve();
      let { lifecycleGeneration: i } = this;
      return this.loadSharedHighlighter(w(t), [`text`, ...e]).then(() => {
        if (!this.isCurrentLifecycle(i)) throw new y();
        if (!r()) throw new f();
      });
    }
    getOrCreateDiffHighlightCacheTask(e) {
      let t = this.getDiffHighlightKey(e);
      if (t == null) return;
      let n = this.getTaskByHighlightKey(t);
      if (n != null) {
        if (n.type !== `diff`)
          throw Error(`WorkerPoolManager.getOrCreateDiffHighlightCacheTask: Invalid task type`);
        return ((n.primeCache = !0), n);
      }
      {
        let n = this.submitCacheTask({ type: `diff`, diff: e }, t);
        if (n.type !== `diff`)
          throw Error(`WorkerPoolManager.getOrCreateDiffHighlightCacheTask: Invalid task created`);
        return n;
      }
    }
    getPlainDiffAST(e, t, n, r, i) {
      let a = D({ theme: this.renderOptions.theme });
      if (a == null) this.queueInitialization();
      else
        return g(e, a, this.renderOptions, {
          forcePlainText: !0,
          startingLine: t,
          totalLines: n,
          expandedHunks: r,
          collapsedContextThreshold: i,
        });
    }
    terminate() {
      (this.lifecycleGeneration++, this.cancelActiveWorkerTasks(), this.terminateWorkers());
      let e = new y();
      for (let t of this.queuedTasks) this.rejectRenderTaskCallbacks(t, e);
      (this.fileCache.clear(),
        this.diffCache.clear(),
        this.activeRequestByInstance.clear(),
        (this.queuedTasks.length = 0),
        this.queuedTaskByInstance.clear(),
        this.taskByHighlightKey.clear(),
        this.activeTaskById.clear(),
        (this.initialized = !1),
        (this.workersFailed = !1),
        (this.terminated = !0),
        this.queueBroadcastStateChanges());
    }
    isCurrentLifecycle(e) {
      return this.lifecycleGeneration === e;
    }
    queueInitialization(e) {
      this.initialize(e).catch((e) => {
        m(e) || console.error(e);
      });
    }
    cancelActiveWorkerTasks() {
      let e = new y();
      for (let t of this.activeTaskById.values())
        `reject` in t ? t.reject(e) : q(t) && this.rejectRenderTaskCallbacks(t, e);
    }
    terminateWorkers() {
      for (let e of this.workers) e.worker.terminate();
      this.workers.length = 0;
    }
    getStats() {
      return {
        managerState:
          this.initialized === !1
            ? `waiting`
            : this.initialized === !0
              ? `initialized`
              : `initializing`,
        totalWorkers: this.workers.length,
        workersFailed: this.workersFailed,
        busyWorkers: this.workers.filter(
          (e) => e.requestId != null || e.pendingSetupRequestId != null,
        ).length,
        queuedTasks: this.queuedTasks.length,
        activeTasks: this.activeTaskById.size,
        themeSubscribers: this.themeSubscribers.size,
        fileCacheSize: this.fileCache.size,
        diffCacheSize: this.diffCache.size,
      };
    }
    submitTask(e, t) {
      this.initialized === !1 && this.queueInitialization();
      let n = this.getHighlightKeyForRequest(t),
        r = n == null ? void 0 : this.getTaskByHighlightKey(n);
      if (r != null) {
        (this.detachInstanceFromQueuedTasks(e, r),
          this.addInstanceToTask(r, e),
          this.queueBroadcastStateChanges());
        return;
      }
      this.detachInstanceFromQueuedTasks(e);
      let i = this.generateRequestId(),
        a = Date.now(),
        { renderOptionsVersion: o } = this,
        s = (() => {
          switch (t.type) {
            case `file`:
              return {
                type: `file`,
                id: i,
                request: { ...t, id: i },
                instances: new Set([e]),
                primeCache: !1,
                highlightKey: n,
                callbacks: new Set(),
                renderOptionsVersion: o,
                requestStart: a,
              };
            case `diff`:
              return {
                type: `diff`,
                id: i,
                request: { ...t, id: i },
                instances: new Set([e]),
                primeCache: !1,
                highlightKey: n,
                callbacks: new Set(),
                renderOptionsVersion: o,
                requestStart: a,
              };
          }
        })();
      this.enqueueRenderTask(s, e);
    }
    submitCacheTask(e, t) {
      this.initialized === !1 && this.queueInitialization();
      let n = this.generateRequestId(),
        r = Date.now(),
        { renderOptionsVersion: i } = this,
        a = (() => {
          switch (e.type) {
            case `file`:
              return {
                type: `file`,
                id: n,
                request: { ...e, id: n },
                instances: new Set(),
                primeCache: !0,
                highlightKey: t,
                callbacks: new Set(),
                renderOptionsVersion: i,
                requestStart: r,
              };
            case `diff`:
              return {
                type: `diff`,
                id: n,
                request: { ...e, id: n },
                instances: new Set(),
                primeCache: !0,
                highlightKey: t,
                callbacks: new Set(),
                renderOptionsVersion: i,
                requestStart: r,
              };
          }
        })();
      return (this.enqueueRenderTask(a), a);
    }
    enqueueRenderTask(e, t) {
      (this.queuedTasks.push(e),
        t != null && this.queuedTaskByInstance.set(t, e),
        e.highlightKey != null && this.taskByHighlightKey.set(e.highlightKey, e),
        this.queueDrain());
    }
    async resolveLanguagesAndExecuteTask(e, t, n) {
      try {
        let r = D(),
          i = n.filter((e) => r == null || !ae(e, r));
        i.length > 0 &&
          this.loadSharedHighlighter(w(this.renderOptions.theme), [`text`, ...i]).catch((e) => {
            console.error(e);
          });
        let a = this.preferredHighlighter === `highlights` ? [] : n.filter((t) => !e.langs.has(t));
        if (
          (a.length > 0 &&
            (L(a)
              ? (t.request.resolvedLanguages = I(a))
              : (t.request.resolvedLanguages = await b(a))),
          !this.activeTaskById.has(t.id))
        ) {
          e.requestId === t.id &&
            (this.cleanWorkerAndTask(e, t),
            this.queueBroadcastStateChanges(),
            this.queuedTasks.length > 0 && this.queueDrain());
          return;
        }
        this.executeTask(e, t);
      } catch (n) {
        (this.rejectRenderTaskCallbacks(t, Y(n)),
          this.cleanWorkerAndTask(e, t),
          this.queueBroadcastStateChanges(),
          this.queuedTasks.length > 0 && this.queueDrain());
      }
    }
    handleWorkerMessage(e, t) {
      let n = this.activeTaskById.get(t.id);
      try {
        if (n == null) throw G;
        if (t.type === `error`) {
          let e = Error(t.error);
          if ((t.stack && (e.stack = t.stack), `reject` in n)) n.reject(e);
          else if (q(n)) (this.notifyHighlightError(n, e), this.rejectRenderTaskCallbacks(n, e));
          else throw Error(`handleWorkerMessage: unknown task type`);
          throw e;
        }
        if (q(n)) for (let { name: t } of n.request.resolvedLanguages ?? []) e.langs.add(t);
        switch (t.requestType) {
          case `initialize`:
            if (n.type !== `initialize`)
              throw Error(`handleWorkerMessage: task/response dont match`);
            (this.syncCustomExtensionVersion(e, n.request), n.resolve());
            break;
          case `set-render-options`:
            if (n.type !== `set-render-options`)
              throw Error(`handleWorkerMessage: task/response dont match`);
            n.resolve();
            break;
          case `file`: {
            if (n.type !== `file`) throw Error(`handleWorkerMessage: task/response dont match`);
            let { options: r } = t;
            if (!this.isCurrentRenderTask(n) || !A(r, this.getFileRenderOptions())) throw G;
            let { request: i } = n,
              a = { ...t.result, code: H(t.result.code) };
            (this.syncCustomExtensionVersion(e, i),
              n.cacheKeyAtDispatch != null &&
                this.fileCache.set(n.cacheKeyAtDispatch, { result: a, options: r }),
              this.resolveRenderTaskCallbacks(n),
              this.notifyFileInstances(n, a, r));
            break;
          }
          case `diff`: {
            if (n.type !== `diff`) throw Error(`handleWorkerMessage: task/response dont match`);
            let { options: r } = t;
            if (!this.isCurrentRenderTask(n) || !h(r, this.getDiffRenderOptions())) throw G;
            let { request: i } = n,
              a = {
                ...t.result,
                code: {
                  deletionLines: H(t.result.code.deletionLines),
                  additionLines: H(t.result.code.additionLines),
                },
              };
            (this.syncCustomExtensionVersion(e, i),
              n.cacheKeyAtDispatch != null &&
                this.diffCache.set(n.cacheKeyAtDispatch, { result: a, options: r }),
              this.resolveRenderTaskCallbacks(n),
              this.notifyDiffInstances(n, a, r));
            break;
          }
        }
      } catch (e) {
        e !== G && console.error(e, n, t);
      }
      (this.cleanWorkerAndTask(e, n, t.id),
        this.queueBroadcastStateChanges(),
        this.queuedTasks.length > 0 && this.queueDrain());
    }
    _queuedDrain;
    queueDrain() {
      this._queuedDrain ??
        ((this._queuedDrain = Promise.resolve().then(this.drainQueue)),
        this.queueBroadcastStateChanges());
    }
    assignWorkerToTask(e, t) {
      ((t.requestId = e.id),
        q(e) && (this.clearQueuedInstanceRequests(e), this.trackInstanceRequests(e)),
        this.activeTaskById.set(e.id, e));
    }
    cleanWorkerAndTask(e, t, n = t?.id) {
      (e.requestId === n && (e.requestId = void 0),
        e.pendingSetupRequestId === n && (e.pendingSetupRequestId = void 0),
        t != null &&
          (q(t) &&
            (this.rejectRenderTaskCallbacks(t, new f()),
            this.clearInstanceRequests(t),
            this.clearHighlightKey(t)),
          this.activeTaskById.delete(t.id)));
    }
    executeTask(e, t) {
      (Oe(t.request) && this.maybeAttachCustomExtensions(e, t.request),
        this.activeTaskById.has(t.id) || this.assignWorkerToTask(t, e));
      try {
        (t.type === `file`
          ? (t.cacheKeyAtDispatch = t.request.file.cacheKey)
          : t.type === `diff` && (t.cacheKeyAtDispatch = t.request.diff.cacheKey),
          e.worker.postMessage(t.request));
      } catch (n) {
        (console.error(`Failed to post message to worker:`, n),
          q(t)
            ? (this.notifyHighlightError(t, n), this.rejectRenderTaskCallbacks(t, Y(n)))
            : `reject` in t && t.reject(n),
          this.cleanWorkerAndTask(e, t),
          this.queuedTasks.length > 0 && this.queueDrain());
      }
      this.queueBroadcastStateChanges();
    }
    maybeAttachCustomExtensions(e, t) {
      if (t.customExtensionsVersion != null) return;
      let n = T();
      e.customExtensionsVersion >= n ||
        ((t.customExtensionsVersion = n), (t.customExtensionMap = O()));
    }
    syncCustomExtensionVersion(e, t) {
      t.customExtensionsVersion != null && (e.customExtensionsVersion = t.customExtensionsVersion);
    }
    getAvailableWorker(e) {
      let t;
      for (let n of this.workers) {
        if (n.requestId != null || n.pendingSetupRequestId != null || !n.initialized) continue;
        if (((t = n), e.length === 0)) break;
        let r = !0;
        for (let t of e)
          if (!n.langs.has(t)) {
            r = !1;
            break;
          }
        if (r) break;
      }
      return t;
    }
    getFileHighlightKey(e) {
      if (e.cacheKey != null) return `file:${e.cacheKey}:${this.renderOptionsVersion}`;
    }
    getDiffHighlightKey(e) {
      if (e.cacheKey != null) return `diff:${e.cacheKey}:${this.renderOptionsVersion}`;
    }
    getHighlightKeyForRequest(e) {
      switch (e.type) {
        case `file`:
          return this.getFileHighlightKey(e.file);
        case `diff`:
          return this.getDiffHighlightKey(e.diff);
      }
    }
    hasActiveRequest(e) {
      for (let t of J(e)) if (this.activeRequestByInstance.has(t)) return !0;
      return !1;
    }
    addInstanceToTask(e, t) {
      (e.type,
        e.instances.add(t),
        this.activeTaskById.has(e.id)
          ? this.activeRequestByInstance.set(t, e.id)
          : this.queuedTaskByInstance.set(t, e));
    }
    detachInstanceFromQueuedTasks(e, t) {
      let n = this.queuedTaskByInstance.get(e);
      n != null &&
        n !== t &&
        (this.queuedTaskByInstance.delete(e),
        this.detachInstanceFromRenderTask(n, e),
        !n.primeCache && n.instances.size === 0 && this.removeQueuedTask(n));
    }
    detachInstanceFromRenderTask(e, t) {
      (e.type, e.instances.delete(t));
    }
    removeQueuedTask(e) {
      let t = this.queuedTasks.indexOf(e);
      (t !== -1 && this.queuedTasks.splice(t, 1),
        this.rejectRenderTaskCallbacks(e, new f()),
        this.clearQueuedInstanceRequests(e),
        this.clearHighlightKey(e));
    }
    removeActiveTask(e) {
      (this.rejectRenderTaskCallbacks(e, new f()),
        this.clearInstanceRequests(e),
        this.clearHighlightKey(e),
        this.activeTaskById.delete(e.id));
    }
    createRenderTaskCallbacks(e) {
      return new Promise((t, n) => {
        e.callbacks.add({ resolve: t, reject: n });
      });
    }
    resolveRenderTaskCallbacks(e) {
      for (let t of e.callbacks) t.resolve();
      e.callbacks.clear();
    }
    rejectRenderTaskCallbacks(e, t) {
      for (let n of e.callbacks) n.reject(t);
      e.callbacks.clear();
    }
    invalidateRenderTasks() {
      for (let e = this.queuedTasks.length - 1; e >= 0; e--) {
        let t = this.queuedTasks[e];
        t.renderOptionsVersion !== this.renderOptionsVersion && this.removeQueuedTask(t);
      }
      for (let e of Array.from(this.activeTaskById.values()))
        q(e) && e.renderOptionsVersion !== this.renderOptionsVersion && this.removeActiveTask(e);
    }
    clearQueuedInstanceRequests(e) {
      for (let t of J(e))
        this.queuedTaskByInstance.get(t) === e && this.queuedTaskByInstance.delete(t);
    }
    clearHighlightKey(e) {
      e.highlightKey != null &&
        this.taskByHighlightKey.get(e.highlightKey) === e &&
        this.taskByHighlightKey.delete(e.highlightKey);
    }
    trackInstanceRequests(e) {
      for (let t of J(e)) this.activeRequestByInstance.set(t, e.id);
    }
    clearInstanceRequests(e) {
      for (let t of J(e))
        this.activeRequestByInstance.get(t) === e.id && this.activeRequestByInstance.delete(t);
    }
    notifyFileInstances(e, t, n) {
      for (let r of e.instances)
        this.activeRequestByInstance.get(r) === e.id && r.onHighlightSuccess(e.request.file, t, n);
    }
    notifyDiffInstances(e, t, n) {
      for (let r of e.instances)
        this.activeRequestByInstance.get(r) === e.id && r.onHighlightSuccess(e.request.diff, t, n);
    }
    notifyHighlightError(e, t) {
      for (let n of J(e)) this.activeRequestByInstance.get(n) === e.id && n.onHighlightError(t);
    }
    hasMatchingFileInstanceTask(e, t) {
      for (let n of this.iterateRenderTasks())
        if (
          n.type === `file` &&
          this.isCurrentRenderTask(n) &&
          n.instances.has(e) &&
          d(t, n.request.file)
        )
          return !0;
      return !1;
    }
    hasMatchingDiffInstanceTask(e, t) {
      for (let n of this.iterateRenderTasks())
        if (
          n.type === `diff` &&
          this.isCurrentRenderTask(n) &&
          n.instances.has(e) &&
          oe(n.request.diff, t)
        )
          return !0;
      return !1;
    }
    getTaskByHighlightKey(e) {
      let t = this.taskByHighlightKey.get(e);
      return t != null && this.isCurrentRenderTask(t) ? t : void 0;
    }
    isCurrentRenderTask(e) {
      return e.renderOptionsVersion === this.renderOptionsVersion;
    }
    *iterateRenderTasks() {
      for (let e of this.queuedTasks) yield e;
      for (let e of this.activeTaskById.values()) q(e) && (yield e);
    }
    generateRequestId() {
      return `req_${++this.nextRequestId}`;
    }
  };
function Oe(e) {
  return e.type === `initialize` || e.type === `file` || e.type === `diff`;
}
function K(e) {
  let t = new Set();
  switch (e.type) {
    case `file`:
      t.add(e.file.lang ?? E(e.file.name));
      break;
    case `diff`:
      (t.add(e.diff.lang ?? E(e.diff.name)), t.add(e.diff.lang ?? E(e.diff.prevName ?? `-`)));
  }
  return (t.delete(`text`), Array.from(t));
}
function q(e) {
  return e?.type === `file` || e?.type === `diff`;
}
function J(e) {
  return e.instances;
}
function Y(e) {
  if (e instanceof Error) return e;
  if (typeof e == `object` && e) {
    if (`error` in e && e.error instanceof Error) return e.error;
    if (`message` in e && typeof e.message == `string`) return Error(e.message);
  }
  return Error(String(e));
}
function ke(e) {
  let t = `error` in e ? e.error : void 0,
    n =
      `message` in e && typeof e.message == `string` && e.message !== ``
        ? e.message
        : t instanceof Error
          ? t.message
          : `the worker script failed to load (the error event carries no message)`;
  return new ne(
    `WorkerPoolManager: worker failed: ${n}`,
    t instanceof Error ? { cause: t } : void 0,
  );
}
var Ae = r();
function je(e) {
  return new Worker(`/assets/worker-zhNdh9K3.js`, { name: e?.name });
}
var X = e(n(), 1),
  Z = e(i(), 1),
  Me = class extends o()(`DiffWorkerError`, {
    operation: a([`create-worker`, `get-render-options`, `set-render-options`]),
    themeName: a([`pierre-light`, `pierre-dark`]),
    cause: s(),
  }) {
    get message() {
      return `Diff worker operation ${this.operation} failed for theme ${this.themeName}.`;
    }
  },
  Ne = 3e4;
function Pe() {
  let e = typeof navigator > `u` ? 4 : Math.max(1, navigator.hardwareConcurrency || 4);
  return Math.max(2, Math.min(6, Math.floor(e / 2)));
}
var Q;
function Fe(e) {
  let t = S(c()),
    n = `get-render-options`;
  (async () => {
    try {
      let r = e.getDiffRenderOptions();
      if (r.theme === t) return;
      ((n = `set-render-options`), await e.setRenderOptions({ ...r, theme: t }));
    } catch (e) {
      console.error(new Me({ operation: n, themeName: t, cause: e }));
    }
  })();
}
function Ie(e) {
  let t = S(c()),
    n = new De(
      {
        workerFactory: () => {
          try {
            return new je();
          } catch (e) {
            throw new Me({ operation: `create-worker`, themeName: t, cause: e });
          }
        },
        poolSize: e,
        totalASTLRUCacheSize: 240,
      },
      { theme: t, preferredHighlighter: ue, tokenizeMaxLineLength: 1e3, useTokenTransformer: !0 },
    );
  return { pool: n, unsubscribeTheme: l(() => Fe(n)), consumers: 0, idleTimer: void 0 };
}
function Le(e) {
  let t = (Q ??= Ie(e));
  return (clearTimeout(t.idleTimer), (t.idleTimer = void 0), (t.consumers += 1), t);
}
function Re(e) {
  let t = (0, Ae.c)(10),
    { children: n } = e,
    r = te(),
    [i, a] = (0, X.useState)(),
    o;
  t[0] !== i || t[1] !== r
    ? ((o = r ? i === r || r.isInitialized() || !r.isWorkingPool() : typeof window > `u`),
      (t[0] = i),
      (t[1] = r),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c,
    l;
  (t[3] !== s || t[4] !== r
    ? ((c = () => {
        if (s || !r) return;
        let e = !0,
          t = () => {
            e && a(r);
          };
        return (
          r.initialize().then(t, t),
          () => {
            e = !1;
          }
        );
      }),
      (l = [s, r]),
      (t[3] = s),
      (t[4] = r),
      (t[5] = c),
      (t[6] = l))
    : ((c = t[5]), (l = t[6])),
    (0, X.useEffect)(c, l));
  let u;
  return (
    t[7] !== n || t[8] !== s
      ? ((u = s
          ? n
          : (0, Z.jsx)(`div`, {
              role: `status`,
              className: `flex min-h-0 flex-1 items-center justify-center p-4 text-xs text-muted-foreground`,
              children: `Loading code...`,
            })),
        (t[7] = n),
        (t[8] = s),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function ze(e) {
  if (typeof window > `u`) return () => {};
  let t = Le(Pe());
  return (
    e(),
    () => {
      (--t.consumers,
        t.consumers === 0 &&
          (t.idleTimer = setTimeout(() => {
            ((t.idleTimer = void 0),
              t.unsubscribeTheme(),
              t.pool.terminate(),
              Q === t && (Q = void 0));
          }, Ne)));
    }
  );
}
function $() {
  return (0, X.useSyncExternalStore)(ze, Ve, Be);
}
function Be() {}
function Ve() {
  return Q?.pool;
}
function He(e) {
  let t = (0, Ae.c)(5),
    { children: n } = e,
    r = $(),
    i;
  t[0] === n ? (i = t[1]) : ((i = (0, Z.jsx)(Re, { children: n })), (t[0] = n), (t[1] = i));
  let a;
  return (
    t[2] !== i || t[3] !== r
      ? ((a = (0, Z.jsx)(ee, { value: r, children: i })), (t[2] = i), (t[3] = r), (t[4] = a))
      : (a = t[4]),
    a
  );
}
export { P as a, N as c, F as i, A as l, $ as n, he as o, U as r, ge as s, He as t };
//# sourceMappingURL=DiffWorkerPoolProvider-BENB1zWt.js.map
