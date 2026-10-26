import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { Da as t } from "./utils-CPoejuy5.js";
var n = e(t(), 1),
  r = null,
  i = new Map();
function a(e) {
  let t = new Map();
  for (let n of e) {
    let e = i.get(n.target);
    if (!e) continue;
    let r = e.subscriptions;
    if (e.waiting) {
      let t = e.last?.contentRect;
      (t?.width === n.contentRect.width && t.height === n.contentRect.height && (r = e.waiting),
        (e.waiting = null));
    }
    e.last = n;
    for (let e of r) {
      let r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    }
  }
  t.size !== 0 &&
    (0, n.flushSync)(() => {
      for (let [e, n] of t)
        if (e.active)
          try {
            e.callback(n);
          } catch (e) {
            queueMicrotask(() => {
              throw e;
            });
          }
    });
}
function o(e, t) {
  if (typeof ResizeObserver > `u`) return () => {};
  let n = (r ??= new ResizeObserver(a)),
    o = { callback: t, active: !0 },
    s = Array.isArray(e) ? e : [e];
  for (let e of s) {
    let t = i.get(e);
    t
      ? (t.subscriptions.add(o),
        t.last && ((t.waiting ??= new Set()).add(o), n.unobserve(e), n.observe(e)))
      : (i.set(e, { subscriptions: new Set([o]), waiting: null, last: null }), n.observe(e));
  }
  return () => {
    if (!o.active) return;
    o.active = !1;
    let e = s.filter((e) => {
      let t = i.get(e);
      return t?.subscriptions.delete(o)
        ? (t.waiting?.delete(o), t.subscriptions.size === 0 && i.delete(e))
        : !1;
    });
    if (i.size > 0) for (let t of e) n.unobserve(t);
    else (r?.disconnect(), (r = null));
  };
}
export { o as t };
//# sourceMappingURL=observeResize-SVLLrLKP.js.map
