import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import { a as r, d as i, p as a } from "./timestampFormat-BBUHLb6E.js";
var o = n(),
  s = e(t(), 1);
function c(e) {
  let t = (0, o.c)(10),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (t) => {
        if (e === null) return l;
        let n,
          r = () => {
            let a = i(e);
            a !== null &&
              (n = setTimeout(() => {
                (t(), r());
              }, a));
          };
        return (r(), () => clearTimeout(n));
      }),
      (t[0] = e),
      (t[1] = n));
  let c = n,
    u;
  t[2] === e ? (u = t[3]) : ((u = () => (e === null ? null : a(e))), (t[2] = e), (t[3] = u));
  let d = u,
    f = (0, s.useSyncExternalStore)(c, d, d);
  if (e === null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { status: `missing` }), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (f === null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { status: `invalid` }), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let p;
  t[6] === f ? (p = t[7]) : ((p = r(f)), (t[6] = f), (t[7] = p));
  let m;
  return (
    t[8] === p ? (m = t[9]) : ((m = { status: `relative`, ...p }), (t[8] = p), (t[9] = m)), m
  );
}
function l() {}
export { c as t };
//# sourceMappingURL=useRelativeTimeState-De-F8N-l.js.map
