import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
var r = n(),
  i = e(t(), 1);
function a(e) {
  let t = (0, r.c)(3),
    n = (0, i.useRef)(e),
    a;
  (t[0] === e
    ? (a = t[1])
    : ((a = () => {
        n.current = e;
      }),
      (t[0] = e),
      (t[1] = a)),
    (0, i.useLayoutEffect)(a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o =
        () =>
        (...e) => {
          let t = e;
          return n.current(...t);
        }),
      (t[2] = o))
    : (o = t[2]);
  let [s] = (0, i.useState)(o);
  return s;
}
export { a as t };
//# sourceMappingURL=useStableCallback-XvXMCrxI.js.map
