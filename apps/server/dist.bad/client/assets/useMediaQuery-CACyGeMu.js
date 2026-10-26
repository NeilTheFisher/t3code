import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
var r = n(),
  i = e(t(), 1),
  a = { "2xl": 1536, "3xl": 1600, "4xl": 2e3, lg: 1024, md: 768, sm: 640, xl: 1280 };
function o(e) {
  return `(min-width: ${typeof e == `number` ? e : a[e]}px)`;
}
function s(e) {
  return `(max-width: ${(typeof e == `number` ? e : a[e]) - 1}px)`;
}
function c(e) {
  if (typeof e != `string`) {
    let t = [];
    return (
      e.min != null && t.push(o(e.min)),
      e.max != null && t.push(s(e.max)),
      e.pointer === `coarse` && t.push(`(pointer: coarse)`),
      e.pointer === `fine` && t.push(`(pointer: fine)`),
      t.length === 0 ? `(min-width: 0px)` : t.join(` and `)
    );
  }
  if (e.startsWith(`(`)) return e;
  let t = [];
  for (let n of e.split(`:`))
    if (n.startsWith(`max-`)) {
      let e = n.slice(4);
      e in a && t.push(s(e));
    } else n in a && t.push(o(n));
  return t.length > 0 ? t.join(` and `) : e;
}
function l() {
  return !1;
}
function u(e) {
  let t = (0, r.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = c(e)), (t[0] = e), (t[1] = n));
  let a = n,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = (e) => {
        if (typeof window > `u`) return d;
        let t = window.matchMedia(a);
        return (t.addEventListener(`change`, e), () => t.removeEventListener(`change`, e));
      }),
      (t[2] = a),
      (t[3] = o));
  let s = o,
    u;
  return (
    t[4] === a
      ? (u = t[5])
      : ((u = () => (typeof window > `u` ? !1 : window.matchMedia(a).matches)),
        (t[4] = a),
        (t[5] = u)),
    (0, i.useSyncExternalStore)(s, u, l)
  );
}
function d() {}
function f() {
  return u(`max-md`);
}
export { u as n, f as t };
//# sourceMappingURL=useMediaQuery-CACyGeMu.js.map
