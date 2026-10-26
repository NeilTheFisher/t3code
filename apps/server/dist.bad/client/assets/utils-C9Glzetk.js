function e(e, t, n) {
  let { style: r, dataset: i, children: a, ...o } = t ?? {},
    s = document.createElement(e);
  return (
    Object.assign(s, o),
    r !== void 0 && (typeof r == `string` ? (s.style.cssText = r) : Object.assign(s.style, r)),
    i !== void 0 &&
      (typeof i == `string`
        ? (s.dataset[i] = ``)
        : Array.isArray(i)
          ? i.forEach((e) => {
              s.dataset[e] = ``;
            })
          : Object.assign(s.dataset, i)),
    a !== void 0 && s.replaceChildren(...a),
    n !== void 0 && n.appendChild(s),
    s
  );
}
function t(e, t, n, r) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function n(e, t = `line`) {
  let n = e.dataset[t];
  if (n === void 0) return;
  let r = parseInt(n, 10);
  if (!Number.isNaN(r)) return r;
}
function r(e, t) {
  if (e.nodeType === 3) {
    let n = e.textContent?.length ?? 0;
    return Math.max(0, Math.min(t, n));
  }
  return e.nodeType === 1 ? Math.max(0, Math.min(t, e.childNodes.length)) : 0;
}
function i(e, t) {
  return Object.assign(e, t);
}
function a(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n), (n = setTimeout(() => e.apply(this, r), t)));
  };
}
function o(e, t = 1e3) {
  return Math.round(e * t) / t;
}
function s(e) {
  return (
    e.endsWith(`
`) || e.endsWith(`\r`)
  );
}
function c(e) {
  if (typeof Intl < `u` && typeof Intl.Segmenter == `function`)
    return new Intl.Segmenter(void 0, e);
}
var l,
  u = !1;
function d() {
  return ((u ||= ((l = c({ granularity: `grapheme` })), !0)), l);
}
function f(e) {
  let t = e.ownerDocument,
    n = e.parentElement;
  for (; n != null && n !== t.body && n !== t.documentElement;) {
    let e = n.ownerDocument.defaultView?.getComputedStyle(n).overflowY;
    if (e === `auto` || e === `scroll` || e === `overlay`) return n;
    n = n.parentElement;
  }
  return t;
}
export { s as a, n as c, o as d, a as i, e as l, r as n, i as o, c as r, d as s, t, f as u };
//# sourceMappingURL=utils-C9Glzetk.js.map
