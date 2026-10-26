import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { _r as r } from "./utils-CPoejuy5.js";
import { t as i } from "./draft-input-C3knK-UD.js";
var a = t(),
  o = e(n(), 1);
function s(e) {
  let t = (0, a.c)(16),
    n,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (s = t[2]), (c = t[3]), (l = t[4]))
    : (({ configured: l, placeholder: s, onCommit: n, ...c } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l));
  let u = l !== void 0 && l,
    d = u ? `Stored secret, enter a new value to replace` : (s ?? `Not set`),
    f;
  t[5] !== c || t[6] !== d
    ? ((f = { ...c, type: `password`, autoComplete: `off`, spellCheck: !1, placeholder: d }),
      (t[5] = c),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let p = f;
  if (n) {
    let e;
    t[8] !== u || t[9] !== n
      ? ((e = (e) => {
          (u && e === ``) || n(e);
        }),
        (t[8] = u),
        (t[9] = n),
        (t[10] = e))
      : (e = t[10]);
    let r;
    return (
      t[11] !== p || t[12] !== e
        ? ((r = (0, o.jsx)(i, { ...p, onCommit: e })), (t[11] = p), (t[12] = e), (t[13] = r))
        : (r = t[13]),
      r
    );
  }
  let m;
  return (t[14] === p ? (m = t[15]) : ((m = (0, o.jsx)(r, { ...p })), (t[14] = p), (t[15] = m)), m);
}
export { s as t };
//# sourceMappingURL=SecretInput-CtEGQlh1.js.map
