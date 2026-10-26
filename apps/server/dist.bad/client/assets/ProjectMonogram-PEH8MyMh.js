import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { t as r } from "./utils-CPoejuy5.js";
var i = [
    {
      value: `gray`,
      label: `Gray`,
      className: `text-gray-600 dark:text-gray-400`,
      swatchClassName: `bg-gray-500`,
    },
    {
      value: `red`,
      label: `Red`,
      className: `text-red-600 dark:text-red-400`,
      swatchClassName: `bg-red-500`,
    },
    {
      value: `orange`,
      label: `Orange`,
      className: `text-orange-600 dark:text-orange-400`,
      swatchClassName: `bg-orange-500`,
    },
    {
      value: `amber`,
      label: `Amber`,
      className: `text-amber-600 dark:text-amber-400`,
      swatchClassName: `bg-amber-500`,
    },
    {
      value: `yellow`,
      label: `Yellow`,
      className: `text-yellow-600 dark:text-yellow-400`,
      swatchClassName: `bg-yellow-500`,
    },
    {
      value: `lime`,
      label: `Lime`,
      className: `text-lime-600 dark:text-lime-400`,
      swatchClassName: `bg-lime-500`,
    },
    {
      value: `green`,
      label: `Green`,
      className: `text-green-600 dark:text-green-400`,
      swatchClassName: `bg-green-500`,
    },
    {
      value: `emerald`,
      label: `Emerald`,
      className: `text-emerald-600 dark:text-emerald-400`,
      swatchClassName: `bg-emerald-500`,
    },
    {
      value: `teal`,
      label: `Teal`,
      className: `text-teal-600 dark:text-teal-400`,
      swatchClassName: `bg-teal-500`,
    },
    {
      value: `cyan`,
      label: `Cyan`,
      className: `text-cyan-600 dark:text-cyan-400`,
      swatchClassName: `bg-cyan-500`,
    },
    {
      value: `sky`,
      label: `Sky`,
      className: `text-sky-600 dark:text-sky-400`,
      swatchClassName: `bg-sky-500`,
    },
    {
      value: `blue`,
      label: `Blue`,
      className: `text-blue-600 dark:text-blue-400`,
      swatchClassName: `bg-blue-500`,
    },
    {
      value: `indigo`,
      label: `Indigo`,
      className: `text-indigo-600 dark:text-indigo-400`,
      swatchClassName: `bg-indigo-500`,
    },
    {
      value: `violet`,
      label: `Violet`,
      className: `text-violet-600 dark:text-violet-400`,
      swatchClassName: `bg-violet-500`,
    },
    {
      value: `purple`,
      label: `Purple`,
      className: `text-purple-600 dark:text-purple-400`,
      swatchClassName: `bg-purple-500`,
    },
    {
      value: `fuchsia`,
      label: `Fuchsia`,
      className: `text-fuchsia-600 dark:text-fuchsia-400`,
      swatchClassName: `bg-fuchsia-500`,
    },
    {
      value: `pink`,
      label: `Pink`,
      className: `text-pink-600 dark:text-pink-400`,
      swatchClassName: `bg-pink-500`,
    },
    {
      value: `rose`,
      label: `Rose`,
      className: `text-rose-600 dark:text-rose-400`,
      swatchClassName: `bg-rose-500`,
    },
  ],
  a = Object.fromEntries(i.map(({ value: e, className: t }) => [e, t]));
function o(e) {
  return a[e];
}
function s(e) {
  return e.normalize(`NFKC`).trim();
}
function c(e) {
  let t = s(e).match(/[\p{L}\p{N}]+/gu) ?? [],
    n = t[0];
  if (!n) return `PR`;
  let r = Array.from(n),
    i = r[0] ?? `P`,
    a =
      r.slice(1).find((e) => /\p{N}/u.test(e)) ??
      (t.length > 1 ? Array.from(t.at(-1) ?? ``)[0] : r.at(-1)) ??
      i;
  return Array.from(`${i}${a}`.toUpperCase()).slice(0, 2).join(``);
}
function l(e) {
  let t = s(e).toLocaleLowerCase(`en-US`) || `project`,
    n = 0;
  for (let e of t) n = (n * 31 + (e.codePointAt(0) ?? 0)) % i.length;
  return i[n]?.value ?? `blue`;
}
function u(e) {
  return { monogram: c(e), color: l(e) };
}
var d = t(),
  f = e(n(), 1),
  p = new Intl.Segmenter(void 0, { granularity: `grapheme` });
function m(e) {
  let t = (0, d.c)(14),
    { text: n, color: i, className: a } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = r(`inline-flex size-4 shrink-0 items-center justify-center`, a)),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === i
    ? (c = t[3])
    : ((c = r(`size-full overflow-hidden rounded-[25%] font-mono select-none`, o(i))),
      (t[2] = i),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { backgroundColor: `color-mix(in srgb, currentColor 14%, transparent)` }), (t[4] = l))
    : (l = t[4]);
  let u = Array.from(p.segment(n)).length === 1 ? 6 : 12,
    m;
  t[5] !== u || t[6] !== n
    ? ((m = (0, f.jsx)(`text`, {
        x: `8`,
        y: `10.8`,
        textAnchor: `middle`,
        fill: `currentColor`,
        className: `font-mono`,
        fontSize: `8.25`,
        fontWeight: `700`,
        textLength: u,
        lengthAdjust: `spacingAndGlyphs`,
        textRendering: `geometricPrecision`,
        children: n,
      })),
      (t[5] = u),
      (t[6] = n),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== c || t[9] !== m
    ? ((h = (0, f.jsx)(`svg`, { viewBox: `0 0 16 16`, className: c, style: l, children: m })),
      (t[8] = c),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g;
  return (
    t[11] !== s || t[12] !== h
      ? ((g = (0, f.jsx)(`span`, { "aria-hidden": `true`, className: s, children: h })),
        (t[11] = s),
        (t[12] = h),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
export { o as i, u as n, i as r, m as t };
//# sourceMappingURL=ProjectMonogram-PEH8MyMh.js.map
