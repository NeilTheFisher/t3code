import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { Rs as r } from "./main-BZa0O6xN.js";
import { _ as i } from "./settingsLayout-2i87rQY9.js";
var a = t(),
  o = e(n(), 1);
function s(e) {
  let t = (0, a.c)(8),
    n,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (s = t[2]), (c = t[3]))
    : (({ settingKeys: c, checked: n, ...s } = e), (t[0] = e), (t[1] = n), (t[2] = s), (t[3] = c));
  let l = i(c),
    u = !l && n,
    d;
  return (
    t[4] !== l || t[5] !== s || t[6] !== u
      ? ((d = (0, o.jsx)(r, { ...s, mixed: l, checked: u })),
        (t[4] = l),
        (t[5] = s),
        (t[6] = u),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
export { s as t };
//# sourceMappingURL=ScopedSwitch-eETzzyfB.js.map
