import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { r as i, t as a } from "./lucideIconByName-CcsyMUbC.js";
import { Dr as o, _r as s, ab as c, t as l, wg as u } from "./utils-CPoejuy5.js";
import { t as d } from "./scroll-area-B6188Bq9.js";
import { a as ee, c as te, l as f, n as p, o as m, s as h, u as g } from "./dialog-BjeWpelT.js";
import { i as _, n as v, r as ne, t as y } from "./ProjectMonogram-PEH8MyMh.js";
import { Bs as b, zs as x } from "./main-BZa0O6xN.js";
var S = e(t(), 1),
  C = n(),
  w = [
    `folder-code`,
    `code-2`,
    `terminal`,
    `globe-2`,
    `server`,
    `database`,
    `bot`,
    `sparkles`,
    `smartphone`,
    `monitor`,
    `cloud-cog`,
    `package`,
    `book-open`,
    `flask-conical`,
    `shield-check`,
    `rocket`,
    `gamepad-2`,
    `music`,
    `image`,
    `shopping-bag`,
    `git-branch`,
    `workflow`,
    `wrench`,
    `layers-3`,
  ],
  T = [
    { emoji: `💻`, label: `Computer` },
    { emoji: `🛠️`, label: `Tools` },
    { emoji: `🚀`, label: `Rocket` },
    { emoji: `🤖`, label: `Robot` },
    { emoji: `✨`, label: `Sparkles` },
    { emoji: `⚡`, label: `Lightning` },
    { emoji: `🌐`, label: `Web` },
    { emoji: `📱`, label: `Mobile` },
    { emoji: `🖥️`, label: `Desktop` },
    { emoji: `⌨️`, label: `Keyboard` },
    { emoji: `⚙️`, label: `Gear` },
    { emoji: `🗄️`, label: `Database` },
    { emoji: `☁️`, label: `Cloud` },
    { emoji: `📦`, label: `Package` },
    { emoji: `📚`, label: `Books` },
    { emoji: `🧪`, label: `Test tube` },
    { emoji: `🔒`, label: `Lock` },
    { emoji: `🎮`, label: `Game` },
    { emoji: `🎵`, label: `Music` },
    { emoji: `🎬`, label: `Movie` },
    { emoji: `🖼️`, label: `Picture` },
    { emoji: `🛍️`, label: `Shopping` },
    { emoji: `🔥`, label: `Fire` },
    { emoji: `💡`, label: `Idea` },
    { emoji: `🧩`, label: `Puzzle` },
    { emoji: `📊`, label: `Chart` },
    { emoji: `🧠`, label: `Brain` },
    { emoji: `🦄`, label: `Unicorn` },
    { emoji: `🐙`, label: `Octopus` },
    { emoji: `🌱`, label: `Seedling` },
  ];
function E(e) {
  let t = e.trim().toLowerCase().replaceAll(/\s+/g, `-`);
  return t ? i.filter((e) => e.includes(t)).slice(0, 60) : w;
}
function re(e) {
  let t = e.trim();
  if (!t) return null;
  let n = new Intl.Segmenter(void 0, { granularity: `grapheme` })
      .segment(t)
      [Symbol.iterator]()
      .next().value?.segment,
    r = /^\p{Regional_Indicator}{2}$/u.test(n ?? ``),
    i = /^[#*0-9]\uFE0F?\u20E3$/u.test(n ?? ``);
  return !n || (!/\p{Extended_Pictographic}/u.test(n) && !r && !i) ? null : n;
}
var D = e(r(), 1),
  O = `folder-code`,
  ie = c(u);
function k({ name: e }) {
  let t = a(e);
  return t ? (0, S.createElement)(t, { className: `size-5` }) : null;
}
function A(e) {
  return e
    .split(`-`)
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(` `);
}
function j(e) {
  let t = (0, C.c)(11),
    { current: n, projectName: r, open: i, onOpenChange: a, onSelect: o } = e,
    s;
  t[0] === a ? (s = t[1]) : ((s = () => a(!1)), (t[0] = a), (t[1] = s));
  let c;
  t[2] !== n || t[3] !== o || t[4] !== r || t[5] !== s
    ? ((c = (0, D.jsx)(f, {
        className: `w-full sm:w-[32rem]`,
        children: (0, D.jsx)(M, { current: n, projectName: r, onClose: s, onSelect: o }),
      })),
      (t[2] = n),
      (t[3] = o),
      (t[4] = r),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== a || t[8] !== i || t[9] !== c
      ? ((l = (0, D.jsx)(p, { open: i, onOpenChange: a, children: c })),
        (t[7] = a),
        (t[8] = i),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function M(e) {
  let t = (0, C.c)(62),
    { current: n, projectName: r, onClose: i, onSelect: a } = e,
    c;
  t[0] === r ? (c = t[1]) : ((c = v(r)), (t[0] = r), (t[1] = c));
  let u = c,
    [f, p] = (0, S.useState)(n?.kind ?? `lucide`),
    [w, j] = (0, S.useState)(n?.kind === `lucide` ? n.name : O),
    [M, N] = (0, S.useState)(n && n.kind !== `emoji` ? n.color : u.color),
    [P, ae] = (0, S.useState)(n?.kind === `monogram` ? n.text : u.monogram),
    [F, I] = (0, S.useState)(n?.kind === `emoji` ? n.emoji : `💻`),
    [L, oe] = (0, S.useState)(``),
    [R, z] = (0, S.useState)(``),
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    q;
  if (
    t[2] !== u ||
    t[3] !== M ||
    t[4] !== R ||
    t[5] !== F ||
    t[6] !== w ||
    t[7] !== P ||
    t[8] !== f ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== L
  ) {
    let e = E(L),
      n = _(M),
      r,
      o;
    (t[20] === P
      ? ((r = t[21]), (o = t[22]))
      : ((r = P.normalize(`NFKC`).trim().toUpperCase()),
        (o = ie(r)),
        (t[20] = P),
        (t[21] = r),
        (t[22] = o)),
      (q = o));
    let c;
    (t[23] !== M ||
    t[24] !== F ||
    t[25] !== w ||
    t[26] !== f ||
    t[27] !== r ||
    t[28] !== i ||
    t[29] !== a ||
    t[30] !== q
      ? ((c = () => {
          (f !== `monogram` || q) &&
            (a(
              f === `monogram`
                ? { kind: `monogram`, text: r, color: M }
                : f === `lucide`
                  ? { kind: `lucide`, name: w, color: M }
                  : { kind: `emoji`, emoji: F },
            ),
            i());
        }),
        (t[23] = M),
        (t[24] = F),
        (t[25] = w),
        (t[26] = f),
        (t[27] = r),
        (t[28] = i),
        (t[29] = a),
        (t[30] = q),
        (t[31] = c))
      : (c = t[31]),
      (V = c),
      t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((K = (0, D.jsxs)(h, {
            children: [
              (0, D.jsx)(g, { children: `Choose project icon` }),
              (0, D.jsx)(ee, { children: `Choose an icon, emoji, or monogram.` }),
            ],
          })),
          (t[32] = K))
        : (K = t[32]),
      (B = te),
      (H = `flex min-h-0 flex-col`));
    let m;
    t[33] === f ? (m = t[34]) : ((m = [f]), (t[33] = f), (t[34] = m));
    let v, S, C, O;
    (t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (e) => {
          let t = e[0];
          (t === `lucide` || t === `emoji` || t === `monogram`) && p(t);
        }),
        (S = (0, D.jsx)(x, { value: `lucide`, children: `Icons` })),
        (C = (0, D.jsx)(x, { value: `emoji`, children: `Emoji` })),
        (O = (0, D.jsx)(x, { value: `monogram`, children: `Monogram` })),
        (t[35] = v),
        (t[36] = S),
        (t[37] = C),
        (t[38] = O))
      : ((v = t[35]), (S = t[36]), (C = t[37]), (O = t[38])),
      t[39] === m
        ? (U = t[40])
        : ((U = (0, D.jsxs)(b, {
            "aria-label": `Icon type`,
            variant: `segmented`,
            value: m,
            onValueChange: v,
            children: [S, C, O],
          })),
          (t[39] = m),
          (t[40] = U)),
      t[41] !== M || t[42] !== f
        ? ((W =
            f === `emoji`
              ? null
              : (0, D.jsxs)(`div`, {
                  children: [
                    (0, D.jsx)(`div`, {
                      className: `mb-2 text-xs font-medium text-muted-foreground`,
                      children: `Color`,
                    }),
                    (0, D.jsx)(`div`, {
                      className: `flex flex-wrap gap-1.5`,
                      role: `group`,
                      "aria-label": `Icon color`,
                      children: ne.map((e) =>
                        (0, D.jsx)(
                          `button`,
                          {
                            type: `button`,
                            "aria-label": e.label,
                            "aria-pressed": M === e.value,
                            className: l(
                              `flex size-6 items-center justify-center rounded-full border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                              M === e.value && `border-foreground/64`,
                            ),
                            onClick: () => N(e.value),
                            children: (0, D.jsx)(`span`, {
                              className: l(`size-4 rounded-full`, e.swatchClassName),
                            }),
                          },
                          e.value,
                        ),
                      ),
                    }),
                  ],
                })),
          (t[41] = M),
          (t[42] = f),
          (t[43] = W))
        : (W = t[43]),
      (G =
        f === `lucide`
          ? (0, D.jsxs)(D.Fragment, {
              children: [
                (0, D.jsx)(s, {
                  type: `search`,
                  value: L,
                  "aria-label": `Search Lucide icons`,
                  placeholder: `Search all Lucide icons`,
                  onChange: (e) => oe(e.currentTarget.value),
                }),
                (0, D.jsx)(d, {
                  scrollFade: !0,
                  className: `max-h-64`,
                  children: (0, D.jsx)(`div`, {
                    className: `grid grid-cols-8 gap-1 p-0.5 sm:grid-cols-10`,
                    children: e.map((e) =>
                      (0, D.jsx)(
                        `button`,
                        {
                          type: `button`,
                          "aria-label": A(e),
                          "aria-pressed": w === e,
                          className: l(
                            `flex aspect-square items-center justify-center rounded-md border border-transparent outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                            w === e && `border-border bg-accent`,
                            n,
                          ),
                          onClick: () => j(e),
                          children: (0, D.jsx)(k, { name: e }),
                        },
                        e,
                      ),
                    ),
                  }),
                }),
                e.length === 0
                  ? (0, D.jsx)(`p`, {
                      className: `py-8 text-center text-sm text-muted-foreground`,
                      children: `No icons found.`,
                    })
                  : null,
              ],
            })
          : f === `monogram`
            ? (0, D.jsxs)(`div`, {
                className: `flex items-center gap-4 py-2`,
                children: [
                  (0, D.jsx)(y, { text: q ? r : u.monogram, color: M, className: `size-12` }),
                  (0, D.jsxs)(`div`, {
                    className: `flex-1 space-y-2`,
                    children: [
                      (0, D.jsx)(`label`, {
                        htmlFor: `project-monogram`,
                        className: `text-sm font-medium`,
                        children: `Letters`,
                      }),
                      (0, D.jsx)(s, {
                        id: `project-monogram`,
                        value: P,
                        onChange: (e) => ae(e.currentTarget.value),
                        "aria-describedby": `project-monogram-hint`,
                        "aria-invalid": !q,
                        autoComplete: `off`,
                      }),
                      (0, D.jsx)(`p`, {
                        id: `project-monogram-hint`,
                        className: `text-xs text-muted-foreground`,
                        children: `One or two letters or numbers.`,
                      }),
                    ],
                  }),
                ],
              })
            : (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsx)(d, {
                    scrollFade: !0,
                    className: `max-h-64`,
                    children: (0, D.jsx)(`div`, {
                      className: `grid grid-cols-8 gap-1 p-0.5 sm:grid-cols-10`,
                      children: T.map((e) =>
                        (0, D.jsx)(
                          `button`,
                          {
                            type: `button`,
                            "aria-label": e.label,
                            "aria-pressed": F === e.emoji,
                            className: l(
                              `flex aspect-square items-center justify-center rounded-md border border-transparent text-xl outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                              F === e.emoji && `border-border bg-accent`,
                            ),
                            onClick: () => I(e.emoji),
                            children: e.emoji,
                          },
                          e.emoji,
                        ),
                      ),
                    }),
                  }),
                  (0, D.jsxs)(`div`, {
                    children: [
                      (0, D.jsx)(`div`, {
                        className: `mb-2 text-xs font-medium text-muted-foreground`,
                        children: `Or paste any emoji`,
                      }),
                      (0, D.jsx)(s, {
                        value: R,
                        "aria-label": `Custom emoji`,
                        placeholder: `Paste an emoji`,
                        onChange: (e) => {
                          let t = e.currentTarget.value;
                          z(t);
                          let n = re(t);
                          n && I(n);
                        },
                      }),
                    ],
                  }),
                ],
              })),
      (t[2] = u),
      (t[3] = M),
      (t[4] = R),
      (t[5] = F),
      (t[6] = w),
      (t[7] = P),
      (t[8] = f),
      (t[9] = i),
      (t[10] = a),
      (t[11] = L),
      (t[12] = B),
      (t[13] = V),
      (t[14] = H),
      (t[15] = U),
      (t[16] = W),
      (t[17] = G),
      (t[18] = K),
      (t[19] = q));
  } else
    ((B = t[12]),
      (V = t[13]),
      (H = t[14]),
      (U = t[15]),
      (W = t[16]),
      (G = t[17]),
      (K = t[18]),
      (q = t[19]));
  let J;
  t[44] !== B || t[45] !== H || t[46] !== U || t[47] !== W || t[48] !== G
    ? ((J = (0, D.jsxs)(B, { className: H, children: [U, W, G] })),
      (t[44] = B),
      (t[45] = H),
      (t[46] = U),
      (t[47] = W),
      (t[48] = G),
      (t[49] = J))
    : (J = t[49]);
  let Y;
  t[50] === i
    ? (Y = t[51])
    : ((Y = (0, D.jsx)(o, { variant: `outline`, onClick: i, children: `Cancel` })),
      (t[50] = i),
      (t[51] = Y));
  let X = f === `monogram` && !q,
    Z;
  t[52] !== V || t[53] !== X
    ? ((Z = (0, D.jsx)(o, { onClick: V, disabled: X, children: `Save icon` })),
      (t[52] = V),
      (t[53] = X),
      (t[54] = Z))
    : (Z = t[54]);
  let Q;
  t[55] !== Z || t[56] !== Y
    ? ((Q = (0, D.jsxs)(m, { children: [Y, Z] })), (t[55] = Z), (t[56] = Y), (t[57] = Q))
    : (Q = t[57]);
  let $;
  return (
    t[58] !== Q || t[59] !== K || t[60] !== J
      ? (($ = (0, D.jsxs)(D.Fragment, { children: [K, J, Q] })),
        (t[58] = Q),
        (t[59] = K),
        (t[60] = J),
        (t[61] = $))
      : ($ = t[61]),
    $
  );
}
export { j as ProjectIconPickerDialog };
//# sourceMappingURL=ProjectIconPickerDialog-DXH7J-dq.js.map
