import { n as e } from "./jsx-runtime-BQExFN_X.js";
import { Yn as t } from "./utils-CPoejuy5.js";
import { c as n } from "./dist-BdqWmeee.js";
import { t as r } from "./authRedirect-DWE5a_T9.js";
var i = e();
function a() {
  let e = (0, i.c)(2),
    a = n(),
    o;
  return (
    e[0] === a
      ? (o = e[1])
      : ((o = {
          authPrompt: null,
          openAuthPrompt: () => {
            a.openSignIn(r(window.location.href, t));
          },
        }),
        (e[0] = a),
        (e[1] = o)),
    o
  );
}
export { a as t };
//# sourceMappingURL=useT3ConnectAuthPrompt-KcWxnf8S.js.map
