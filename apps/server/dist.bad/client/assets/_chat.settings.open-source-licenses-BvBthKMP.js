import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i, t as a } from "./search-BrluOr7L.js";
import { t as o } from "./external-link-DV7LH7eG.js";
import {
  $g as s,
  Ac as c,
  Bn as l,
  Dr as u,
  MS as d,
  Mx as f,
  Nf as p,
  Vn as m,
  Wn as h,
  Xb as g,
  bC as _,
  ew as v,
  fS as y,
  hx as b,
  jc as x,
  nx as S,
  qf as C,
  uS as w,
  zf as T,
} from "./utils-CPoejuy5.js";
import { n as E, r as D, t as O } from "./collapsible-Dp2CGco9.js";
import { n as k, r as A, t as j } from "./input-group-C7DCv8iP.js";
import { i as M, s as N } from "./settingsLayout-2i87rQY9.js";
var P = e(t(), 1),
  F = n();
function I(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function L(e) {
  return Array.isArray(e) && e.every((e) => typeof e == `string`);
}
function R(e) {
  if (typeof e != `string`) return !1;
  try {
    let t = new URL(e).protocol;
    return t === `http:` || t === `https:`;
  } catch {
    return !1;
  }
}
function z(e, t) {
  if (!I(e)) throw Error(`License entry ${String(t + 1)} is not an object.`);
  if (
    !L(e.bundles) ||
    e.bundles.length === 0 ||
    (e.kind !== `custom` && e.kind !== `package`) ||
    typeof e.license != `string` ||
    typeof e.name != `string` ||
    typeof e.noticeText != `string` ||
    (e.sourceUrl !== null && !R(e.sourceUrl)) ||
    (e.version !== null && typeof e.version != `string`)
  )
    throw Error(`License entry ${String(t + 1)} has an invalid shape.`);
  return {
    bundles: e.bundles,
    kind: e.kind,
    license: e.license,
    name: e.name,
    noticeText: e.noticeText,
    sourceUrl: e.sourceUrl,
    version: e.version,
  };
}
function B(e) {
  if (!I(e) || e.schemaVersion !== 1 || !Array.isArray(e.entries))
    throw Error(`The open-source license manifest has an unsupported format.`);
  let t = e.entries.map(z),
    n = new Set();
  for (let e of t) {
    let t = W(e);
    if (n.has(t)) throw Error(`The open-source license manifest contains a duplicate entry: ${t}`);
    n.add(t);
  }
  return { schemaVersion: 1, entries: t };
}
function V(e, t) {
  let n = t
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((e) => e.length > 0);
  return n.length === 0
    ? e
    : e.filter((e) => {
        let t = [e.name, e.version, e.license, ...e.bundles]
          .filter((e) => e !== null)
          .join(` `)
          .toLowerCase();
        return n.every((e) => t.includes(e));
      });
}
var H = {
  android: `Android`,
  assets: `Assets`,
  desktop: `Desktop`,
  "device-tools": `Device tools`,
  ios: `iOS`,
  mobile: `Mobile`,
  server: `Server`,
  web: `Web`,
};
function U(e) {
  return e.map((e) => (Object.prototype.hasOwnProperty.call(H, e) ? H[e] : e)).join(`, `);
}
function W(e) {
  return encodeURIComponent(JSON.stringify([e.kind, e.name, e.version]));
}
var G = e(r(), 1),
  K = class extends _(`LicenseManifestLoadError`) {},
  q = T(
    b(function* () {
      let e = yield* s(`${`/`.replace(/\/$/, ``)}/third-party-licenses.json`);
      if (e.status < 200 || e.status >= 300)
        return yield* new K({
          message: `The license manifest request failed with status ${String(e.status)}.`,
        });
      let t = yield* e.json;
      return yield* y({
        try: () => B(t),
        catch: (e) =>
          new K({
            message: e instanceof Error ? e.message : `The license manifest could not load.`,
          }),
      });
    }).pipe(
      g({ HttpClientError: (e) => S(new K({ message: e.message })) }),
      w({
        duration: `30 seconds`,
        orElse: () => S(new K({ message: `The license manifest took too long to load.` })),
      }),
      f(p),
    ),
  ).pipe(C(`settings:open-source-licenses`));
function J(e) {
  let t = (0, F.c)(34),
    { entry: n, open: r, onOpenChange: a } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(i, {
        "aria-hidden": !0,
        className: `size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-90`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === n.name
    ? (c = t[2])
    : ((c = (0, G.jsx)(`span`, {
        className: `truncate font-medium text-foreground`,
        children: n.name,
      })),
      (t[1] = n.name),
      (t[2] = c));
  let l;
  t[3] === n.version
    ? (l = t[4])
    : ((l = n.version
        ? (0, G.jsx)(`code`, {
            className: `shrink-0 text-xs text-muted-foreground`,
            children: n.version,
          })
        : null),
      (t[3] = n.version),
      (t[4] = l));
  let d;
  t[5] !== c || t[6] !== l
    ? ((d = (0, G.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-baseline gap-2`,
        children: [c, l],
      })),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d))
    : (d = t[7]);
  let f = n.license,
    p;
  t[8] === n.bundles ? (p = t[9]) : ((p = U(n.bundles)), (t[8] = n.bundles), (t[9] = p));
  let m;
  t[10] !== n.license || t[11] !== p
    ? ((m = (0, G.jsxs)(`span`, {
        className: `max-w-[42%] shrink-0 truncate text-xs text-muted-foreground`,
        children: [f, ` · `, p],
      })),
      (t[10] = n.license),
      (t[11] = p),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== d || t[14] !== m
    ? ((h = (0, G.jsxs)(D, {
        className: `group flex min-h-10 min-w-0 flex-1 items-center gap-2.5 px-3 text-left sm:min-h-9 sm:px-4`,
        children: [s, d, m],
      })),
      (t[13] = d),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== n.name || t[17] !== n.sourceUrl
    ? ((g = n.sourceUrl
        ? (0, G.jsx)(u, {
            "aria-label": `View project source for ${n.name}`,
            className: `me-3 shrink-0 sm:me-4`,
            render: (0, G.jsx)(`a`, {
              href: n.sourceUrl,
              rel: `noreferrer noopener`,
              target: `_blank`,
            }),
            size: `icon-micro`,
            title: `Project source`,
            variant: `ghost-muted`,
            children: (0, G.jsx)(o, { "aria-hidden": !0, className: `size-3` }),
          })
        : null),
      (t[16] = n.name),
      (t[17] = n.sourceUrl),
      (t[18] = g))
    : (g = t[18]);
  let _;
  t[19] !== h || t[20] !== g
    ? ((_ = (0, G.jsxs)(`div`, {
        className: `flex min-h-10 items-center hover:bg-muted/35 sm:min-h-9`,
        children: [h, g],
      })),
      (t[19] = h),
      (t[20] = g),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  t[22] !== n.noticeText || t[23] !== r
    ? ((v = r
        ? (0, G.jsx)(`div`, {
            className: `px-9 pt-1 pb-4 sm:px-10`,
            children: (0, G.jsx)(`pre`, {
              className: `max-w-[76ch] whitespace-pre-wrap break-words font-mono text-xs/5 text-foreground/80`,
              children: n.noticeText,
            }),
          })
        : null),
      (t[22] = n.noticeText),
      (t[23] = r),
      (t[24] = v))
    : (v = t[24]);
  let y;
  t[25] === v ? (y = t[26]) : ((y = (0, G.jsx)(E, { children: v })), (t[25] = v), (t[26] = y));
  let b;
  t[27] !== _ || t[28] !== y
    ? ((b = (0, G.jsxs)(`article`, { children: [_, y] })), (t[27] = _), (t[28] = y), (t[29] = b))
    : (b = t[29]);
  let x;
  return (
    t[30] !== a || t[31] !== r || t[32] !== b
      ? ((x = (0, G.jsx)(O, { open: r, onOpenChange: a, children: b })),
        (t[30] = a),
        (t[31] = r),
        (t[32] = b),
        (t[33] = x))
      : (x = t[33]),
    x
  );
}
function Y(e) {
  let t = (0, F.c)(2),
    { filteredCount: n, totalCount: r } = e,
    i = n === r ? `${String(r)} notices` : `${String(n)} of ${String(r)}`,
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, G.jsx)(`p`, {
          className: `whitespace-nowrap text-xs font-normal text-muted-foreground tabular-nums`,
          children: i,
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function X(e) {
  let t = (0, F.c)(34),
    {
      query: n,
      onQueryChange: r,
      searchOpen: i,
      onSearchOpenChange: o,
      filteredCount: s,
      totalCount: c,
    } = e;
  if (!i) {
    let e;
    t[0] !== s || t[1] !== c
      ? ((e = (0, G.jsx)(Y, { filteredCount: s, totalCount: c })),
        (t[0] = s),
        (t[1] = c),
        (t[2] = e))
      : (e = t[2]);
    let n;
    t[3] === o ? (n = t[4]) : ((n = () => o(!0)), (t[3] = o), (t[4] = n));
    let r;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, G.jsx)(a, { className: `size-3` })), (t[5] = r))
      : (r = t[5]);
    let i;
    t[6] === n
      ? (i = t[7])
      : ((i = (0, G.jsx)(h, {
          render: (0, G.jsx)(u, {
            "aria-label": `Search open-source licenses`,
            onClick: n,
            size: `icon-micro`,
            type: `button`,
            variant: `ghost-muted`,
            children: r,
          }),
        })),
        (t[6] = n),
        (t[7] = i));
    let d;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, G.jsx)(m, { side: `top`, children: `Search licenses` })), (t[8] = d))
      : (d = t[8]);
    let f;
    t[9] === i
      ? (f = t[10])
      : ((f = (0, G.jsxs)(l, { children: [i, d] })), (t[9] = i), (t[10] = f));
    let p;
    return (
      t[11] !== e || t[12] !== f
        ? ((p = (0, G.jsxs)(`div`, { className: `flex items-center gap-1.5`, children: [e, f] })),
          (t[11] = e),
          (t[12] = f),
          (t[13] = p))
        : (p = t[13]),
      p
    );
  }
  let d;
  t[14] !== s || t[15] !== c
    ? ((d = (0, G.jsx)(`div`, {
        className: `hidden sm:block`,
        children: (0, G.jsx)(Y, { filteredCount: s, totalCount: c }),
      })),
      (t[14] = s),
      (t[15] = c),
      (t[16] = d))
    : (d = t[16]);
  let f;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(k, { children: (0, G.jsx)(a, { "aria-hidden": !0, className: `size-3` }) })),
      (t[17] = f))
    : (f = t[17]);
  let p;
  t[18] !== o || t[19] !== n.length
    ? ((p = () => {
        n.length === 0 && o(!1);
      }),
      (t[18] = o),
      (t[19] = n.length),
      (t[20] = p))
    : (p = t[20]);
  let g;
  t[21] === r ? (g = t[22]) : ((g = (e) => r(e.currentTarget.value)), (t[21] = r), (t[22] = g));
  let _;
  t[23] !== r || t[24] !== o
    ? ((_ = (e) => {
        e.key === `Escape` && (e.preventDefault(), r(``), o(!1));
      }),
      (t[23] = r),
      (t[24] = o),
      (t[25] = _))
    : (_ = t[25]);
  let v;
  t[26] !== n || t[27] !== p || t[28] !== g || t[29] !== _
    ? ((v = (0, G.jsxs)(j, {
        className: `w-36 sm:w-44`,
        children: [
          f,
          (0, G.jsx)(A, {
            "aria-label": `Search open-source licenses`,
            autoFocus: !0,
            onBlur: p,
            onChange: g,
            onKeyDown: _,
            placeholder: `Search licenses`,
            size: `sm`,
            type: `search`,
            value: n,
          }),
        ],
      })),
      (t[26] = n),
      (t[27] = p),
      (t[28] = g),
      (t[29] = _),
      (t[30] = v))
    : (v = t[30]);
  let y;
  return (
    t[31] !== d || t[32] !== v
      ? ((y = (0, G.jsxs)(`div`, { className: `flex items-center gap-2`, children: [d, v] })),
        (t[31] = d),
        (t[32] = v),
        (t[33] = y))
      : (y = t[33]),
    y
  );
}
function Z(e) {
  let t = (0, F.c)(8),
    { message: n, onRetry: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, G.jsx)(`h3`, {
        className: `text-sm font-medium text-foreground`,
        children: `Open-source notices are unavailable`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n
    ? (a = t[2])
    : ((a = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          i,
          (0, G.jsx)(`p`, {
            className: `max-w-[70ch] text-pretty text-xs leading-normal text-muted-foreground/80`,
            children: n,
          }),
        ],
      })),
      (t[1] = n),
      (t[2] = a));
  let o;
  t[3] === r
    ? (o = t[4])
    : ((o = (0, G.jsx)(u, {
        type: `button`,
        size: `xs`,
        variant: `outline`,
        onClick: r,
        children: `Try again`,
      })),
      (t[3] = r),
      (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, G.jsxs)(`div`, {
          className: `flex flex-col items-start gap-3 px-3 py-5 sm:px-4`,
          children: [a, o],
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Q() {
  let e = (0, F.c)(28),
    t = x(q),
    n = c(q),
    [r, i] = (0, P.useState)(``),
    [a, o] = (0, P.useState)(!1),
    [s, l] = (0, P.useState)(null),
    u = t._tag === `Success` ? t.value : null,
    f;
  e[0] === u?.entries ? (f = e[1]) : ((f = u?.entries ?? []), (e[0] = u?.entries), (e[1] = f));
  let p = f,
    m,
    h,
    g,
    _,
    y;
  if (
    e[2] !== p ||
    e[3] !== u ||
    e[4] !== s ||
    e[5] !== r ||
    e[6] !== t._tag ||
    e[7] !== t.cause ||
    e[8] !== t.waiting ||
    e[9] !== n ||
    e[10] !== a
  ) {
    let c = V(p, r),
      f;
    e[16] !== t._tag || e[17] !== t.cause || e[18] !== t.waiting
      ? ((f = t._tag === `Failure` && !t.waiting ? v(d(t.cause), { onNone: ee, onSome: $ }) : null),
        (e[16] = t._tag),
        (e[17] = t.cause),
        (e[18] = t.waiting),
        (e[19] = f))
      : (f = e[19]);
    let b = f;
    ((h = M),
      (m = N),
      (g = `Third-party notices`),
      (_ = u
        ? (0, G.jsx)(X, {
            query: r,
            onQueryChange: i,
            searchOpen: a,
            onSearchOpenChange: o,
            filteredCount: c.length,
            totalCount: p.length,
          })
        : null),
      (y = u
        ? (0, G.jsx)(`div`, {
            className: `text-base sm:text-sm`,
            children:
              c.length > 0
                ? c.map((e) => {
                    let t = W(e);
                    return (0, G.jsx)(
                      J,
                      { entry: e, open: s === t, onOpenChange: (e) => l(e ? t : null) },
                      t,
                    );
                  })
                : (0, G.jsx)(`p`, {
                    className: `px-3 py-8 text-center text-sm/6 text-muted-foreground sm:px-4`,
                    children: `No licenses match that search.`,
                  }),
          })
        : b === null
          ? (0, G.jsx)(`p`, {
              className: `px-3 py-5 text-sm/6 text-muted-foreground sm:px-4`,
              children: `Loading open-source notices…`,
            })
          : (0, G.jsx)(Z, { message: b, onRetry: n })),
      (e[2] = p),
      (e[3] = u),
      (e[4] = s),
      (e[5] = r),
      (e[6] = t._tag),
      (e[7] = t.cause),
      (e[8] = t.waiting),
      (e[9] = n),
      (e[10] = a),
      (e[11] = m),
      (e[12] = h),
      (e[13] = g),
      (e[14] = _),
      (e[15] = y));
  } else ((m = e[11]), (h = e[12]), (g = e[13]), (_ = e[14]), (y = e[15]));
  let b;
  e[20] !== m || e[21] !== g || e[22] !== _ || e[23] !== y
    ? ((b = (0, G.jsx)(m, { title: g, headerAction: _, children: y })),
      (e[20] = m),
      (e[21] = g),
      (e[22] = _),
      (e[23] = y),
      (e[24] = b))
    : (b = e[24]);
  let S;
  return (
    e[25] !== h || e[26] !== b
      ? ((S = (0, G.jsx)(h, { children: b })), (e[25] = h), (e[26] = b), (e[27] = S))
      : (S = e[27]),
    S
  );
}
function $(e) {
  return e.message;
}
function ee() {
  return `The license manifest could not load.`;
}
var te = Q;
export { te as component };
//# sourceMappingURL=_chat.settings.open-source-licenses-BvBthKMP.js.map
