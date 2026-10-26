import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { ot as r } from "./ChatMarkdown-BSLpN1nk.js";
import i from "./katex-DJhrJSbw.js";
var a = t(),
  o = e(n(), 1),
  s = new r(1e3, 4194304);
function c(e, t) {
  let n = `${t ? `display` : `inline`}:${e}`,
    r = s.get(n);
  if (r !== null) return r;
  let a = ``;
  try {
    a = i.renderToString(e, {
      displayMode: t,
      output: `htmlAndMathml`,
      throwOnError: !0,
      trust: !1,
      strict: `ignore`,
      maxSize: 20,
      maxExpand: 1e3,
    });
  } catch {}
  return (s.set(n, a, (n.length + a.length) * 2), a);
}
function l(e) {
  let t = (0, a.c)(5),
    n;
  t[0] !== e.display || t[1] !== e.tex
    ? ((n = c(e.tex, e.display)), (t[0] = e.display), (t[1] = e.tex), (t[2] = n))
    : (n = t[2]);
  let r = n;
  if (!r) return e.fallback;
  let i;
  return (
    t[3] === r
      ? (i = t[4])
      : ((i = (0, o.jsx)(`span`, { dangerouslySetInnerHTML: { __html: r } })),
        (t[3] = r),
        (t[4] = i)),
    i
  );
}
export { l as default };
//# sourceMappingURL=MathTypeset-BJRLGMWx.js.map
