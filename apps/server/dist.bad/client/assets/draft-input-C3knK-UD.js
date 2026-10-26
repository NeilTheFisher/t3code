import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { _r as i } from "./utils-CPoejuy5.js";
var a = n(),
  o = e(t(), 1);
function s(e, t) {
  let n = (0, a.c)(11),
    [r, i] = (0, o.useState)(null),
    s = r ?? e,
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        i(e.target.value);
      }),
      (n[0] = l))
    : (l = n[0]);
  let u;
  n[1] === e
    ? (u = n[2])
    : ((u = () => {
        i(e);
      }),
      (n[1] = e),
      (n[2] = u));
  let d;
  n[3] !== r || n[4] !== t || n[5] !== e
    ? ((d = () => {
        let n = r ?? e;
        (i(null), n !== e && t(n));
      }),
      (n[3] = r),
      (n[4] = t),
      (n[5] = e),
      (n[6] = d))
    : (d = n[6]);
  let f;
  return (
    n[7] !== s || n[8] !== u || n[9] !== d
      ? ((f = { value: s, onChange: l, onFocus: u, onBlur: d, onKeyDown: c }),
        (n[7] = s),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
function c(e) {
  e.nativeEvent.isComposing ||
    e.keyCode === 229 ||
    (e.key === `Enter` && (e.preventDefault(), e.target.blur()));
}
var l = e(r(), 1);
function u(e) {
  let t = (0, a.c)(7),
    n,
    r,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (o = t[3]))
    : (({ value: o, onCommit: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = o));
  let c = s(o, n),
    u;
  return (
    t[4] !== c || t[5] !== r
      ? ((u = (0, l.jsx)(i, { ...r, ...c })), (t[4] = c), (t[5] = r), (t[6] = u))
      : (u = t[6]),
    u
  );
}
export { u as t };
//# sourceMappingURL=draft-input-C3knK-UD.js.map
