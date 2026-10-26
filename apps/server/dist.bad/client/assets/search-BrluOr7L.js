import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
var n = e(t()),
  r = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  c = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  l = (0, n.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: i = 2,
        absoluteStrokeWidth: a,
        className: o = ``,
        children: l,
        iconNode: u,
        ...d
      },
      f,
    ) =>
      (0, n.createElement)(
        `svg`,
        {
          ref: f,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: a ? (Number(i) * 24) / Number(t) : i,
          className: r(`lucide`, o),
          ...(!l && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [...u.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(l) ? l : [l])],
      ),
  ),
  u = (e, t) => {
    let a = (0, n.forwardRef)(({ className: a, ...s }, c) =>
      (0, n.createElement)(l, {
        ref: c,
        iconNode: t,
        className: r(`lucide-${i(o(e))}`, `lucide-${e}`, a),
        ...s,
      }),
    );
    return ((a.displayName = o(e)), a);
  },
  d = u(`brain`, [
    [`path`, { d: `M12 18V5`, key: `adv99a` }],
    [`path`, { d: `M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`, key: `1e3is1` }],
    [`path`, { d: `M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`, key: `1gqd8o` }],
    [`path`, { d: `M17.997 5.125a4 4 0 0 1 2.526 5.77`, key: `iwvgf7` }],
    [`path`, { d: `M18 18a4 4 0 0 0 2-7.464`, key: `efp6ie` }],
    [`path`, { d: `M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`, key: `1gq6am` }],
    [`path`, { d: `M6 18a4 4 0 0 1-2-7.464`, key: `k1g0md` }],
    [`path`, { d: `M6.003 5.125a4 4 0 0 0-2.526 5.77`, key: `q97ue3` }],
  ]),
  f = u(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  p = u(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  m = u(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  h = u(`gauge`, [
    [`path`, { d: `m12 14 4-4`, key: `9kzdfg` }],
    [`path`, { d: `M3.34 19a10 10 0 1 1 17.32 0`, key: `19p75a` }],
  ]),
  g = u(`loader-circle`, [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]]),
  _ = u(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]);
export { p as a, u as c, m as i, l, g as n, f as o, h as r, d as s, _ as t };
//# sourceMappingURL=search-BrluOr7L.js.map
