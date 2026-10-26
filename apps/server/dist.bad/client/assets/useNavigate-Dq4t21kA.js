import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { a as n } from "./useParams-JSmvSNOU.js";
var r = e(t(), 1),
  i = r.use,
  a = typeof window < `u` ? r.useLayoutEffect : r.useEffect;
function o(e) {
  let t = r.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function s(e, t, n = {}, i = {}) {
  r.useEffect(() => {
    if (!e.current || i.disabled || typeof IntersectionObserver != `function`) return;
    let r = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      r.observe(e.current),
      () => {
        r.disconnect();
      }
    );
  }, [t, n, i.disabled, e]);
}
function c(e) {
  let t = r.useRef(null);
  return (r.useImperativeHandle(e, () => t.current, []), t);
}
function l(e) {
  let t = n();
  return r.useCallback((n) => t.navigate({ ...n, from: n.from ?? e?.from }), [e?.from, t]);
}
function u(e) {
  let t = n(),
    i = l(),
    o = r.useRef(null);
  return (
    a(() => {
      o.current !== e && (i(e), (o.current = e));
    }, [t, e, i]),
    null
  );
}
export { s as a, c as i, l as n, a as o, i as r, o as s, u as t };
//# sourceMappingURL=useNavigate-Dq4t21kA.js.map
