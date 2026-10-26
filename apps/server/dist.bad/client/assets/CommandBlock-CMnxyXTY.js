import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { Dr as r, t as i } from "./utils-CPoejuy5.js";
import { n as a, t as o } from "./MorphIcon-DCVwjy7i.js";
import { g as s } from "./toast-B4KPIJDZ.js";
var c = t(),
  l = a(),
  u = e(n(), 1);
function d(e) {
  let t = (0, c.c)(19),
    { command: n, className: a, prominent: d } = e,
    f = d !== void 0 && d,
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { timeout: 1500, target: `command` }), (t[0] = p))
    : (p = t[0]);
  let { copyToClipboard: m, isCopied: h } = s(p),
    g = f ? `px-4 py-3.5 text-base` : `px-3 py-2.5 text-sm`,
    _;
  t[1] !== a || t[2] !== g
    ? ((_ = i(
        `flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/50 font-mono`,
        g,
        a,
      )),
      (t[1] = a),
      (t[2] = g),
      (t[3] = _))
    : (_ = t[3]);
  let v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, u.jsx)(`span`, { className: `mr-2 text-muted-foreground`, children: `$` })),
      (t[4] = v))
    : (v = t[4]);
  let y;
  t[5] === n
    ? (y = t[6])
    : ((y = (0, u.jsxs)(`span`, { className: `min-w-0 truncate`, children: [v, n] })),
      (t[5] = n),
      (t[6] = y));
  let b;
  t[7] !== n || t[8] !== m
    ? ((b = () => m(n, void 0)), (t[7] = n), (t[8] = m), (t[9] = b))
    : (b = t[9]);
  let x = h ? l.Check : l.Copy,
    S;
  t[10] === x
    ? (S = t[11])
    : ((S = (0, u.jsx)(o, { className: `size-3.5`, icon: x })), (t[10] = x), (t[11] = S));
  let C;
  t[12] !== b || t[13] !== S
    ? ((C = (0, u.jsx)(r, {
        size: `icon-xs`,
        variant: `ghost`,
        "aria-label": `Copy command`,
        onClick: b,
        children: S,
      })),
      (t[12] = b),
      (t[13] = S),
      (t[14] = C))
    : (C = t[14]);
  let w;
  return (
    t[15] !== C || t[16] !== _ || t[17] !== y
      ? ((w = (0, u.jsxs)(`div`, { className: _, children: [y, C] })),
        (t[15] = C),
        (t[16] = _),
        (t[17] = y),
        (t[18] = w))
      : (w = t[18]),
    w
  );
}
export { d as t };
//# sourceMappingURL=CommandBlock-CMnxyXTY.js.map
