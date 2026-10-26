import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import { $l as r, Mc as i } from "./utils-CPoejuy5.js";
var a = n(),
  o = e(t(), 1);
function s(e, t) {
  let n = (0, a.c)(6),
    s = (0, o.useContext)(i),
    c = typeof t == `string` ? t : (t?.label ?? e.label),
    l = typeof t == `string` ? !0 : (t?.reportFailure ?? !0),
    u = typeof t == `string` ? !0 : (t?.reportDefect ?? !0),
    d;
  return (
    n[0] !== e || n[1] !== c || n[2] !== s || n[3] !== u || n[4] !== l
      ? ((d = (t) => r(s, e, t, { label: c, reportFailure: l, reportDefect: u })),
        (n[0] = e),
        (n[1] = c),
        (n[2] = s),
        (n[3] = u),
        (n[4] = l),
        (n[5] = d))
      : (d = n[5]),
    d
  );
}
export { s as t };
//# sourceMappingURL=use-atom-command-DGAuqAck.js.map
