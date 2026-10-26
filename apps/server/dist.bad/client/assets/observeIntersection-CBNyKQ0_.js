var e = new Map(),
  t = new WeakMap();
function n(e, t) {
  for (let n of t) {
    let t = e.targets.get(n.target);
    if (!t) continue;
    let r = t.subscriptions;
    ((t.waiting &&= (t.last?.isIntersecting === n.isIntersecting && (r = t.waiting), null)),
      (t.last = n));
    for (let e of r)
      if (e.active)
        try {
          e.callback(n);
        } catch (e) {
          queueMicrotask(() => {
            throw e;
          });
        }
  }
}
function r(e) {
  let n = t.get(e);
  return (n || ((n = new Map()), t.set(e, n)), n);
}
function i(i, a, o = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let s = o.root ?? null,
    c = `${o.rootMargin ?? ``}|${o.threshold ?? 0}`,
    l = s === null ? e : r(s),
    u = l.get(c);
  if (!u) {
    let e = {
      targets: new Map(),
      observer: new IntersectionObserver((t) => n(e, t), {
        ...(s === null ? {} : { root: s }),
        ...(o.rootMargin === void 0 ? {} : { rootMargin: o.rootMargin }),
        ...(o.threshold === void 0 ? {} : { threshold: o.threshold }),
      }),
    };
    ((u = e), l.set(c, u));
  }
  let d = u,
    f = { callback: a, active: !0 },
    p = d.targets.get(i);
  return (
    p
      ? (p.subscriptions.add(f),
        p.last &&
          ((p.waiting ??= new Set()).add(f), d.observer.unobserve(i), d.observer.observe(i)))
      : (d.targets.set(i, { subscriptions: new Set([f]), waiting: null, last: null }),
        d.observer.observe(i)),
    () => {
      if (!f.active) return;
      f.active = !1;
      let e = d.targets.get(i);
      e?.subscriptions.delete(f) &&
        (e.waiting?.delete(f),
        !(e.subscriptions.size > 0) &&
          (d.targets.delete(i),
          d.targets.size > 0
            ? d.observer.unobserve(i)
            : (d.observer.disconnect(), l.delete(c), s !== null && l.size === 0 && t.delete(s))));
    }
  );
}
export { i as t };
//# sourceMappingURL=observeIntersection-CBNyKQ0_.js.map
