function e(e, t) {
  let n = e(),
    r,
    i = new Set(),
    a = () => {
      r = setTimeout(
        () => {
          r = void 0;
          let t = e();
          if (t !== n) {
            n = t;
            for (let e of i) e();
          }
          i.size > 0 && r === void 0 && a();
        },
        t - (Date.now() % t),
      );
    };
  return {
    subscribe: (t) => (
      i.size === 0 && ((n = e()), a()),
      i.add(t),
      () => {
        (i.delete(t), i.size === 0 && (clearTimeout(r), (r = void 0)));
      }
    ),
    getSnapshot: () => (r === void 0 && (n = e()), n),
  };
}
var t = e(() => Math.floor(Date.now() / 1e3) * 1e3, 1e3),
  n = e(() => new Date().toISOString().slice(0, 16), 6e4),
  r = { subscribe: () => () => {}, getSnapshot: () => !1, refresh: () => {} },
  i = new Map();
function a(e) {
  (clearTimeout(e.timer), (e.timer = void 0), (e.passed = !0));
  for (let t of e.listeners) t();
}
function o(e, t) {
  let n = t - Date.now();
  n <= 0 ? a(e) : (e.timer = setTimeout(() => o(e, t), Math.min(n, 2147483647)));
}
function s(e) {
  if (e === null || !Number.isFinite(e)) return r;
  let t = i.get(e);
  if (t !== void 0) return t.store;
  let n = {
    subscribe: (t) => {
      let r = i.get(e);
      r === void 0 &&
        ((r = { store: n, listeners: new Set(), passed: Date.now() >= e, timer: void 0 }),
        i.set(e, r),
        r.passed || o(r, e));
      let a = r;
      return (
        a.listeners.add(t),
        () => {
          (a.listeners.delete(t),
            !(a.listeners.size > 0) &&
              (clearTimeout(a.timer), (a.timer = void 0), i.get(e) === a && i.delete(e)));
        }
      );
    },
    getSnapshot: () => i.get(e)?.passed ?? Date.now() >= e,
    refresh: () => {
      let t = i.get(e);
      t !== void 0 && !t.passed && Date.now() >= e && a(t);
    },
  };
  return n;
}
export { n, t as r, s as t };
//# sourceMappingURL=clock-CE1G-Nf4.js.map
