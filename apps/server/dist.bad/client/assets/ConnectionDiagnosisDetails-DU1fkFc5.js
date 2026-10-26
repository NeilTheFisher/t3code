import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i } from "./search-BrluOr7L.js";
import {
  Dr as a,
  JC as o,
  Xu as s,
  Yu as c,
  cp as l,
  jc as u,
  qC as d,
  rf as f,
  t as p,
  tw as m,
} from "./utils-CPoejuy5.js";
import { F as h, Gt as g, Kt as _ } from "./runtime-CY2dlMEg.js";
import { I as v } from "./useSettings-N-JG2LFZ.js";
import { t as y } from "./catalog-BMZrLgnL.js";
import { g as b, i as x } from "./toast-B4KPIJDZ.js";
import { t as S } from "./toastHelpers-CSQRKo4F.js";
var C = n(),
  w = e(t(), 1),
  T = e(r(), 1);
function E(e) {
  let t = (0, C.c)(11),
    n = e.environmentId,
    r;
  t[0] === n ? (r = t[1]) : ((r = y.stateAtom(n)), (t[0] = n), (t[1] = r));
  let i = d(l(u(r)), D),
    a = v().environments.get(n)?.status,
    f;
  t[2] === e.entry ? (f = t[3]) : ((f = c(e.entry)), (t[2] = e.entry), (t[3] = f));
  let p = f,
    g;
  t[4] !== e.entry || t[5] !== p.length
    ? ((g = p.length === 1 && s(e.entry)), (t[4] = e.entry), (t[5] = p.length), (t[6] = g))
    : (g = t[6]);
  let b = g,
    x = e.connection.phase,
    S =
      e.entry.enabled && x !== `connected` && x !== `unsupported`
        ? _({
            hostLabel: e.label,
            state: i,
            via: b ? `relay` : `direct`,
            relayStatus: b ? o(a ?? m()) : null,
            clientVersion: h,
            serverVersion: e.serverConfig?.environment.serverVersion,
          })
        : null,
    w;
  return (
    t[7] !== S || t[8] !== b || t[9] !== i
      ? ((w = { diagnosis: S, state: i, relayOnly: b }),
        (t[7] = S),
        (t[8] = b),
        (t[9] = i),
        (t[10] = w))
      : (w = t[10]),
    w
  );
}
function D() {
  return f;
}
function O(e) {
  let { environment: t } = e;
  return E(t).diagnosis?.headline ?? null;
}
var k = { ok: `✓`, failed: `✕`, unchecked: `–` },
  A = { ok: ``, failed: `Failed`, unchecked: `Not checked` };
function j(e) {
  let t = (0, C.c)(5),
    { retryAt: n } = e,
    [r, i] = (0, w.useState)(Date.now),
    a,
    o;
  (t[0] === n
    ? ((a = t[1]), (o = t[2]))
    : ((a = () => {
        if (n <= Date.now()) return;
        let e = setInterval(() => i(Date.now()), 1e3);
        return () => clearInterval(e);
      }),
      (o = [n]),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o)),
    (0, w.useEffect)(a, o));
  let s = Math.ceil((n - r) / 1e3),
    c = s > 0 ? `retrying in ${s}s` : `retrying`,
    l;
  return (
    t[3] === c
      ? (l = t[4])
      : ((l = (0, T.jsx)(T.Fragment, { children: c })), (t[3] = c), (t[4] = l)),
    l
  );
}
function M(e) {
  let t = (0, C.c)(29),
    { diagnosis: n, retryAt: r, attempt: a, expanded: o, onToggle: s } = e,
    c;
  t[0] === n.headline
    ? (c = t[1])
    : ((c = (0, T.jsx)(`p`, { className: `text-destructive`, children: n.headline })),
      (t[0] = n.headline),
      (t[1] = c));
  let l;
  t[2] === r
    ? (l = t[3])
    : ((l = r === null ? null : (0, T.jsx)(j, { retryAt: r })), (t[2] = r), (t[3] = l));
  let u;
  t[4] !== a || t[5] !== r
    ? ((u = r !== null && a > 0 ? (0, T.jsx)(`span`, { "aria-hidden": !0, children: `·` }) : null),
      (t[4] = a),
      (t[5] = r),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === a
    ? (d = t[8])
    : ((d = a > 0 ? (0, T.jsxs)(`span`, { children: [`attempt `, a] }) : null),
      (t[7] = a),
      (t[8] = d));
  let f;
  t[9] !== a || t[10] !== r
    ? ((f = r !== null || a > 0 ? (0, T.jsx)(`span`, { "aria-hidden": !0, children: `·` }) : null),
      (t[9] = a),
      (t[10] = r),
      (t[11] = f))
    : (f = t[11]);
  let m = o && `rotate-90`,
    h;
  t[12] === m
    ? (h = t[13])
    : ((h = p(`size-3 transition-transform duration-150 motion-reduce:transition-none`, m)),
      (t[12] = m),
      (t[13] = h));
  let g;
  t[14] === h
    ? (g = t[15])
    : ((g = (0, T.jsx)(i, { "aria-hidden": !0, className: h })), (t[14] = h), (t[15] = g));
  let _;
  t[16] !== o || t[17] !== s || t[18] !== g
    ? ((_ = (0, T.jsxs)(`button`, {
        type: `button`,
        "aria-expanded": o,
        onClick: s,
        className: `inline-flex items-center gap-0.5 rounded-sm outline-none hover:text-foreground focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring`,
        children: [`Details`, g],
      })),
      (t[16] = o),
      (t[17] = s),
      (t[18] = g),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  t[20] !== l || t[21] !== u || t[22] !== d || t[23] !== f || t[24] !== _
    ? ((v = (0, T.jsxs)(`p`, {
        className: `flex flex-wrap items-center gap-1 text-muted-foreground`,
        children: [l, u, d, f, _],
      })),
      (t[20] = l),
      (t[21] = u),
      (t[22] = d),
      (t[23] = f),
      (t[24] = _),
      (t[25] = v))
    : (v = t[25]);
  let y;
  return (
    t[26] !== c || t[27] !== v
      ? ((y = (0, T.jsxs)(`div`, { className: `text-xs`, children: [c, v] })),
        (t[26] = c),
        (t[27] = v),
        (t[28] = y))
      : (y = t[28]),
    y
  );
}
function N(e) {
  let t = (0, C.c)(36),
    { hostLabel: n, diagnosis: r, onRetry: i, onAddRoute: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { target: `connection diagnostics`, onCopy: R, onError: L }), (t[0] = s))
    : (s = t[0]);
  let { copyToClipboard: c } = b(s),
    l;
  t[1] === r.hops ? (l = t[2]) : ((l = r.hops.map(I)), (t[1] = r.hops), (t[2] = l));
  let u;
  t[3] === l
    ? (u = t[4])
    : ((u = (0, T.jsx)(`ol`, { className: `grid gap-0.5`, children: l })), (t[3] = l), (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, T.jsx)(`p`, { className: `font-medium text-foreground`, children: `What to try` })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === r.steps ? (f = t[7]) : ((f = r.steps.map(F)), (t[6] = r.steps), (t[7] = f));
  let p;
  t[8] === f
    ? (p = t[9])
    : ((p = (0, T.jsx)(`ol`, {
        className: `list-decimal pl-4 text-muted-foreground`,
        children: f,
      })),
      (t[8] = f),
      (t[9] = p));
  let m;
  t[10] === r.moreInfoUrl
    ? (m = t[11])
    : ((m = r.moreInfoUrl
        ? (0, T.jsx)(`a`, {
            href: r.moreInfoUrl,
            target: `_blank`,
            rel: `noreferrer`,
            className: `text-muted-foreground underline underline-offset-2 hover:text-foreground`,
            children: `More info`,
          })
        : null),
      (t[10] = r.moreInfoUrl),
      (t[11] = m));
  let h;
  t[12] !== p || t[13] !== m
    ? ((h = (0, T.jsxs)(`div`, { children: [d, p, m] })), (t[12] = p), (t[13] = m), (t[14] = h))
    : (h = t[14]);
  let _;
  t[15] === r.facts ? (_ = t[16]) : ((_ = r.facts.map(P)), (t[15] = r.facts), (t[16] = _));
  let v;
  t[17] === _
    ? (v = t[18])
    : ((v = (0, T.jsx)(`dl`, {
        className: `grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 font-mono text-muted-foreground`,
        children: _,
      })),
      (t[17] = _),
      (t[18] = v));
  let y;
  t[19] === i
    ? (y = t[20])
    : ((y = (0, T.jsx)(a, {
        type: `button`,
        size: `xs`,
        variant: `outline`,
        onClick: i,
        children: `Retry now`,
      })),
      (t[19] = i),
      (t[20] = y));
  let x;
  t[21] !== c || t[22] !== r || t[23] !== n
    ? ((x = (0, T.jsx)(a, {
        type: `button`,
        size: `xs`,
        variant: `outline`,
        onClick: () => {
          let e = g(n, r);
          c(e, void 0);
        },
        children: `Copy diagnostics`,
      })),
      (t[21] = c),
      (t[22] = r),
      (t[23] = n),
      (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] === o
    ? (S = t[26])
    : ((S = o
        ? (0, T.jsx)(a, {
            type: `button`,
            size: `xs`,
            variant: `outline`,
            onClick: o,
            children: `Add direct route`,
          })
        : null),
      (t[25] = o),
      (t[26] = S));
  let w;
  t[27] !== y || t[28] !== x || t[29] !== S
    ? ((w = (0, T.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [y, x, S] })),
      (t[27] = y),
      (t[28] = x),
      (t[29] = S),
      (t[30] = w))
    : (w = t[30]);
  let E;
  return (
    t[31] !== v || t[32] !== w || t[33] !== u || t[34] !== h
      ? ((E = (0, T.jsxs)(`div`, {
          className: `mt-2 grid gap-3 border-t border-border/50 pt-2 text-xs`,
          children: [u, h, v, w],
        })),
        (t[31] = v),
        (t[32] = w),
        (t[33] = u),
        (t[34] = h),
        (t[35] = E))
      : (E = t[35]),
    E
  );
}
function P(e) {
  let [t, n] = e;
  return (0, T.jsxs)(
    `div`,
    {
      className: `contents`,
      children: [
        (0, T.jsx)(`dt`, { children: t }),
        (0, T.jsx)(`dd`, { className: `break-all text-foreground`, children: n }),
      ],
    },
    t,
  );
}
function F(e) {
  return (0, T.jsx)(`li`, { children: e }, e);
}
function I(e) {
  return (0, T.jsxs)(
    `li`,
    {
      className: p(
        `flex gap-2`,
        e.result === `failed` ? `text-destructive` : `text-muted-foreground`,
      ),
      children: [
        (0, T.jsx)(`span`, {
          "aria-hidden": !0,
          className: `w-3 text-center`,
          children: k[e.result],
        }),
        (0, T.jsx)(`span`, {
          className: p(e.result === `ok` && `text-foreground`),
          children: e.label,
        }),
        (0, T.jsx)(`span`, { children: A[e.result] }),
      ],
    },
    e.hop,
  );
}
function L(e) {
  return x.add(S({ type: `error`, title: `Could not copy diagnostics`, description: e.message }));
}
function R() {
  return x.add({ type: `success`, title: `Diagnostics copied` });
}
export { E as i, N as n, M as r, O as t };
//# sourceMappingURL=ConnectionDiagnosisDetails-DU1fkFc5.js.map
