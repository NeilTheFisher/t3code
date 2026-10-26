import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { a as n, r, x as i } from "./useParams-JSmvSNOU.js";
var a = e(t(), 1);
function o(e) {
  let t = n(),
    o = (0, a.useRef)(void 0);
  return r(t.stores.location, (n) => {
    let r = e?.select ? e.select(n) : n;
    if (e?.structuralSharing ?? t.options.defaultStructuralSharing) {
      let e = i(o.current, r);
      return ((o.current = e), e);
    }
    return r;
  });
}
export { o as t };
//# sourceMappingURL=useLocation-Be_QVulB.js.map
