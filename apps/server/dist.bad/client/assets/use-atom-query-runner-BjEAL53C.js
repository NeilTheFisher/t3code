import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import { Mc as r, Yl as i } from "./utils-CPoejuy5.js";
var a = n(),
  o = e(t(), 1);
function s(e, t) {
  let n = (0, a.c)(7),
    s = (0, o.useContext)(r),
    c = typeof t == `string` ? t : t?.label,
    l = typeof t == `string` ? !0 : (t?.reportFailure ?? !0),
    u = typeof t == `string` ? !0 : (t?.reportDefect ?? !0),
    d = typeof t == `string` ? !1 : (t?.refresh ?? !1),
    f;
  return (
    n[0] !== c || n[1] !== e || n[2] !== d || n[3] !== s || n[4] !== u || n[5] !== l
      ? ((f = (t) => {
          let n = e(t);
          return i(s, n, {
            label: c ?? n.label?.[0] ?? `atom query`,
            reportFailure: l,
            reportDefect: u,
            refresh: d,
          });
        }),
        (n[0] = c),
        (n[1] = e),
        (n[2] = d),
        (n[3] = s),
        (n[4] = u),
        (n[5] = l),
        (n[6] = f))
      : (f = n[6]),
    f
  );
}
export { s as t };
//# sourceMappingURL=use-atom-query-runner-BjEAL53C.js.map
