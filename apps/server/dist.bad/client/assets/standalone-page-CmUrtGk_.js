import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
var r = t(),
  i = e(n(), 1),
  a = {
    pairing: `absolute inset-x-0 top-0 h-44 bg-[radial-gradient(44rem_16rem_at_top,color-mix(in_srgb,var(--color-emerald-500)_14%,transparent),transparent)]`,
    error: `absolute inset-x-0 top-0 h-44 bg-[radial-gradient(44rem_16rem_at_top,color-mix(in_srgb,var(--color-red-500)_16%,transparent),transparent)]`,
    brand: `absolute inset-x-0 top-0 h-72 bg-[radial-gradient(48rem_20rem_at_top,color-mix(in_srgb,var(--color-blue-500)_12%,transparent),transparent)]`,
  };
function o(e) {
  let t = (0, r.c)(19),
    { tone: n, masthead: o, children: s } = e,
    c = a[n],
    l;
  t[0] === c ? (l = t[1]) : ((l = (0, i.jsx)(`div`, { className: c })), (t[0] = c), (t[1] = l));
  let u;
  t[2] === n
    ? (u = t[3])
    : ((u =
        n === `pairing`
          ? (0, i.jsx)(`div`, {
              className: `absolute inset-y-0 left-0 w-72 bg-[radial-gradient(28rem_18rem_at_left,color-mix(in_srgb,var(--color-sky-500)_10%,transparent),transparent)]`,
            })
          : null),
      (t[2] = n),
      (t[3] = u));
  let d =
      n === `brand`
        ? `absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--background)_94%,var(--color-black))_0%,var(--background)_62%)]`
        : `absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--background)_90%,var(--color-black))_0%,var(--background)_55%)]`,
    f;
  t[4] === d ? (f = t[5]) : ((f = (0, i.jsx)(`div`, { className: d })), (t[4] = d), (t[5] = f));
  let p;
  t[6] !== l || t[7] !== u || t[8] !== f
    ? ((p = (0, i.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0 opacity-80`,
        "aria-hidden": !0,
        children: [l, u, f],
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m = `relative w-full max-w-xl rounded-2xl border border-border/80 shadow-2xl shadow-black/20 backdrop-blur-md ${n === `brand` ? `overflow-hidden bg-card/94` : `bg-card/90`}`,
    h;
  t[10] === s
    ? (h = t[11])
    : ((h = (0, i.jsx)(`div`, { className: `p-6 sm:p-8`, children: s })), (t[10] = s), (t[11] = h));
  let g;
  t[12] !== o || t[13] !== m || t[14] !== h
    ? ((g = (0, i.jsx)(`div`, {
        className: `relative flex h-full items-center-safe justify-center overflow-y-auto scrollbar-gutter-both px-4 py-10 sm:px-6`,
        children: (0, i.jsxs)(`section`, { className: m, children: [o, h] }),
      })),
      (t[12] = o),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== p || t[17] !== g
      ? ((_ = (0, i.jsxs)(`div`, {
          className: `relative h-full overflow-hidden bg-background text-foreground`,
          children: [p, g],
        })),
        (t[16] = p),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function s(e) {
  let t = (0, r.c)(10),
    { eyebrow: n, title: a, description: o } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = (0, i.jsx)(`p`, {
        className: `text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c = (0, i.jsx)(`h1`, {
        className: `mt-3 text-2xl font-semibold tracking-tight sm:text-3xl`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] === o
    ? (l = t[5])
    : ((l = (0, i.jsx)(`p`, {
        className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
        children: o,
      })),
      (t[4] = o),
      (t[5] = l));
  let u;
  return (
    t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, i.jsxs)(i.Fragment, { children: [s, c, l] })),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
export { s as n, o as t };
//# sourceMappingURL=standalone-page-CmUrtGk_.js.map
