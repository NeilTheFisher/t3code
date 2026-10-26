import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { a as r } from "./useParams-JSmvSNOU.js";
import { A as i, O as a, k as o } from "./main-BZa0O6xN.js";
var s = t(),
  c = e(n());
function l() {
  let e = (0, s.c)(9),
    t = r(),
    { authGateState: n } = a.useRouteContext();
  if (!n) return null;
  if (n.status === `hosted-pairing`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, c.jsx)(o, {})), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let l;
  e[1] === t.history
    ? (l = e[2])
    : ((l = () => {
        (t.history.replace(`/`), t.history.flush(), window.location.reload());
      }),
      (e[1] = t.history),
      (e[2] = l));
  let u;
  e[3] === n.errorMessage
    ? (u = e[4])
    : ((u = n.errorMessage ? { initialErrorMessage: n.errorMessage } : {}),
      (e[3] = n.errorMessage),
      (e[4] = u));
  let d;
  return (
    e[5] !== n.auth || e[6] !== l || e[7] !== u
      ? ((d = (0, c.jsx)(i, { auth: n.auth, onAuthenticated: l, ...u })),
        (e[5] = n.auth),
        (e[6] = l),
        (e[7] = u),
        (e[8] = d))
      : (d = e[8]),
    d
  );
}
export { l as component };
//# sourceMappingURL=pair-BuyU-5l1.js.map
