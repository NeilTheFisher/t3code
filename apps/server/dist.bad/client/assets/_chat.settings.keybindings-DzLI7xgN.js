import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, t as a } from "./search-BrluOr7L.js";
import { t as o } from "./triangle-alert-Ca4wixX0.js";
import { t as s } from "./circle-x-CYgyy81Z.js";
import { t as c } from "./ellipsis-C2hnEJ6l.js";
import { t as l } from "./file-braces-BTPXTNCB.js";
import { t as u } from "./minus-Czm2HkK6.js";
import { t as d } from "./plus-B20TfFan.js";
import { t as f } from "./x-Blp0Exqg.js";
import {
  Bn as p,
  Dr as m,
  L_ as h,
  Qn as g,
  Vn as _,
  Wn as v,
  Xl as y,
  Yn as b,
  Zn as x,
  _r as S,
  ir as C,
  iu as w,
  j_ as T,
  jp as E,
  mr as D,
  nr as O,
  t as k,
} from "./utils-CPoejuy5.js";
import { a as A, c as j, o as M, s as N, t as P } from "./select-CBCDohvC.js";
import { m as F } from "./server-3D32GveR.js";
import { a as I, r as L, s as R } from "./session-0UrRHIau.js";
import { t as ee } from "./use-atom-command-DGAuqAck.js";
import { i as te } from "./toast-B4KPIJDZ.js";
import { t as ne } from "./useLocation-Be_QVulB.js";
import { t as re } from "./toggle-t7gUeZ3o.js";
import { r as ie } from "./keybindings-b_9MjE1R.js";
import { n as ae, r as oe, t as se } from "./input-group-C7DCv8iP.js";
import { n as z, t as B } from "./kbd-C7it_Fud.js";
import {
  a as V,
  c as ce,
  d as le,
  h as ue,
  i as de,
  l as fe,
  m as H,
  n as pe,
  o as me,
  p as he,
  r as ge,
  s as _e,
  t as ve,
  u as ye,
} from "./KeybindingsSettings.logic-B3BUIgft.js";
import { l as be, s as xe } from "./settingsSearch-CrEaqXdW.js";
import { Zc as Se, as as Ce, es as we, rs as Te } from "./main-BZa0O6xN.js";
import { a as Ee, i as De, p as Oe, s as ke, x as Ae } from "./settingsLayout-2i87rQY9.js";
var U = n(),
  W = e(t(), 1),
  G = e(r(), 1);
function je(e) {
  let t = (0, U.c)(6),
    { value: n } = e,
    r,
    i;
  if (t[0] !== n) {
    let e = new Map(),
      a = n.split(`+`).map((t) => {
        let n = e.get(t) ?? 0;
        return (e.set(t, n + 1), { part: t, key: n === 0 ? t : `${t}-${n}` });
      });
    ((r = z), (i = a.map(Me)), (t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  let a;
  return (
    t[3] !== r || t[4] !== i
      ? ((a = (0, G.jsx)(r, { children: i })), (t[3] = r), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function Me(e) {
  let { part: t, key: n } = e;
  return (0, G.jsx)(
    B,
    {
      children:
        t === `mod`
          ? navigator.platform.toLowerCase().includes(`mac`)
            ? `⌘`
            : `Ctrl`
          : t === `shift`
            ? `⇧`
            : t === `alt`
              ? navigator.platform.toLowerCase().includes(`mac`)
                ? `⌥`
                : `Alt`
              : t === `ctrl`
                ? `⌃`
                : t.length === 1
                  ? t.toUpperCase()
                  : t,
    },
    n,
  );
}
function Ne(e) {
  let t = (0, U.c)(11),
    { query: n, onChange: r, inputRef: i } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(ae, {
        children: (0, G.jsx)(a, { "aria-hidden": !0, className: `size-3.5` }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === r ? (s = t[2]) : ((s = (e) => r(e.currentTarget.value)), (t[1] = r), (t[2] = s));
  let c;
  t[3] !== r || t[4] !== n
    ? ((c = (e) => {
        e.key === `Escape` && (e.preventDefault(), n.length > 0 ? r(``) : e.currentTarget.blur());
      }),
      (t[3] = r),
      (t[4] = n),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== i || t[7] !== n || t[8] !== s || t[9] !== c
      ? ((l = (0, G.jsxs)(se, {
          className: `min-w-0 basis-full **:[input]:h-9 sm:basis-0 sm:flex-1 sm:**:[input]:h-8`,
          children: [
            o,
            (0, G.jsx)(oe, {
              ref: i,
              type: `search`,
              value: n,
              onChange: s,
              onKeyDown: c,
              placeholder: `Search keybindings`,
              "aria-label": `Search keybindings`,
              size: `sm`,
            }),
          ],
        })),
        (t[6] = i),
        (t[7] = n),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Pe(e, t) {
  return e.type === t ? [...Pe(e.left, t), ...Pe(e.right, t)] : [e];
}
function K(e, t) {
  let n = e[0];
  if (n) return e.slice(1).reduce((e, n) => ({ type: t, left: e, right: n }), n);
}
function q(e) {
  return e.type === `identifier`
    ? { identifier: e.name, negated: !1 }
    : e.type === `not` && e.node.type === `identifier`
      ? { identifier: e.node.name, negated: !0 }
      : null;
}
function Fe(e, t) {
  let n = q(e);
  if (!n) return e;
  let r = { type: `identifier`, name: t };
  return n.negated ? { type: `not`, node: r } : r;
}
function Ie(e, t) {
  let n = q(e);
  if (!n) return t ? { type: `not`, node: e } : e;
  let r = { type: `identifier`, name: n.identifier };
  return t ? { type: `not`, node: r } : r;
}
function J() {
  return { type: `identifier`, name: ve };
}
function Le(e = `and`) {
  return { type: e, left: J(), right: { type: `not`, node: J() } };
}
function Y(e) {
  let t = (0, U.c)(14),
    { label: n, focusable: r, className: i, children: a } = e,
    s = r === void 0 || r ? 0 : void 0,
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = k(
        `inline-flex size-5 shrink-0 items-center justify-center rounded-sm text-warning outline-none transition-colors hover:bg-warning/10 focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-warning/25`,
        i,
      )),
      (t[0] = i),
      (t[1] = c));
  let l;
  t[2] !== n || t[3] !== s || t[4] !== c
    ? ((l = (0, G.jsx)(`span`, { tabIndex: s, "aria-label": n, className: c })),
      (t[2] = n),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(o, { className: `size-3.5` })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d = (0, G.jsx)(v, { render: l, children: u })), (t[7] = l), (t[8] = d));
  let f;
  t[9] === a
    ? (f = t[10])
    : ((f = (0, G.jsx)(_, { side: `top`, children: a })), (t[9] = a), (t[10] = f));
  let m;
  return (
    t[11] !== d || t[12] !== f
      ? ((m = (0, G.jsxs)(p, { children: [d, f] })), (t[11] = d), (t[12] = f), (t[13] = m))
      : (m = t[13]),
    m
  );
}
function X(e) {
  let t = (0, U.c)(5),
    { identifiers: n, focusable: r } = e,
    i = r === void 0 || r;
  if (n.length === 0) return null;
  let a;
  t[0] === n
    ? (a = t[1])
    : ((a = n.length === 1 ? `Unknown condition: ${n[0]}` : `Unknown conditions: ${n.join(`, `)}`),
      (t[0] = n),
      (t[1] = a));
  let o = a,
    s;
  return (
    t[2] !== i || t[3] !== o
      ? ((s = (0, G.jsx)(Y, {
          label: o,
          focusable: i,
          className: `size-4.5`,
          children: `T3 Code does not recognize this condition yet. It can still be saved, but it may not match unless the runtime provides it.`,
        })),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Z(e) {
  let t = (0, U.c)(4),
    { labels: n } = e;
  if (n.length === 0) return null;
  let r;
  t[0] === n
    ? (r = t[1])
    : ((r =
        n.length === 1
          ? `Conflicts with ${n[0]}.`
          : `Conflicts with ${n.slice(0, 3).join(`, `)}${n.length > 3 ? `, and more` : ``}.`),
      (t[0] = n),
      (t[1] = r));
  let i = r,
    a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, G.jsxs)(Y, {
          label: i,
          children: [i, ` The most recent matching binding wins when both conditions can apply.`],
        })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function Re(e) {
  let t = (0, U.c)(25),
    { value: n, variables: r, unknownIdentifiers: i, onChange: a } = e,
    o;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e === n), (t[3] = n), (t[4] = e)),
      (o = r.find(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o));
  } else o = t[2];
  let s = o,
    c;
  t[5] !== s || t[6] !== n || t[7] !== r
    ? ((c = s || r.some((e) => e === n) ? r : [n, ...r]),
      (t[5] = s),
      (t[6] = n),
      (t[7] = r),
      (t[8] = c))
    : (c = t[8]);
  let l = c,
    u;
  t[9] === a ? (u = t[10]) : ((u = (e) => e && a(e)), (t[9] = a), (t[10] = u));
  let d;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, G.jsx)(j, { placeholder: `Condition` })), (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] === i
    ? (f = t[13])
    : ((f = i && i.length > 0 ? (0, G.jsx)(X, { identifiers: i, focusable: !1 }) : null),
      (t[12] = i),
      (t[13] = f));
  let p;
  t[14] === f
    ? (p = t[15])
    : ((p = (0, G.jsxs)(N, { size: `compact`, className: `min-w-0 flex-1`, children: [d, f] })),
      (t[14] = f),
      (t[15] = p));
  let m;
  t[16] === l ? (m = t[17]) : ((m = l.map(ze)), (t[16] = l), (t[17] = m));
  let h;
  t[18] === m
    ? (h = t[19])
    : ((h = (0, G.jsx)(M, {
        alignItemWithTrigger: !1,
        matchTriggerWidth: !1,
        className: `max-h-72`,
        children: m,
      })),
      (t[18] = m),
      (t[19] = h));
  let g;
  return (
    t[20] !== u || t[21] !== p || t[22] !== h || t[23] !== n
      ? ((g = (0, G.jsxs)(P, { value: n, onValueChange: u, children: [p, h] })),
        (t[20] = u),
        (t[21] = p),
        (t[22] = h),
        (t[23] = n),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function ze(e) {
  return (0, G.jsx)(
    A,
    {
      value: e,
      className: `w-full`,
      children: (0, G.jsx)(`span`, { className: `truncate`, children: e }),
    },
    e,
  );
}
function Q(e) {
  let t = (0, U.c)(14),
    { label: n, className: r, onRemove: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = k(`size-7`, r)), (t[0] = r), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== i || t[4] !== a
    ? ((o = (0, G.jsx)(m, {
        type: `button`,
        variant: `ghost`,
        size: `icon-sm`,
        className: a,
        "aria-label": n,
        onClick: i,
      })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(u, { "aria-hidden": !0, className: `size-3.5` })), (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === o
    ? (c = t[8])
    : ((c = (0, G.jsx)(v, { delay: 200, render: o, children: s })), (t[7] = o), (t[8] = c));
  let l;
  t[9] === n
    ? (l = t[10])
    : ((l = (0, G.jsx)(_, { side: `top`, children: n })), (t[9] = n), (t[10] = l));
  let d;
  return (
    t[11] !== c || t[12] !== l
      ? ((d = (0, G.jsxs)(p, { children: [c, l] })), (t[11] = c), (t[12] = l), (t[13] = d))
      : (d = t[13]),
    d
  );
}
function $(e) {
  let t = (0, U.c)(81),
    { node: n, variables: r, depth: i, onChange: a, onRemove: o } = e,
    s = i === void 0 ? 0 : i,
    c;
  if (t[0] !== s || t[1] !== n || t[2] !== a || t[3] !== o || t[4] !== r) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = q(n);
      if (e) {
        let i = ce(e.identifier) ? [] : [e.identifier],
          l;
        t[6] !== n || t[7] !== a
          ? ((l = (e) => a(Ie(n, e))), (t[6] = n), (t[7] = a), (t[8] = l))
          : (l = t[8]);
        let u = `Negate ${e.identifier}`,
          d;
        t[9] !== e || t[10] !== l || t[11] !== u
          ? ((d = (0, G.jsx)(re, {
              pressed: e.negated,
              onPressedChange: l,
              "aria-label": u,
              variant: `outline`,
              size: `compact`,
              className: `min-w-10`,
              children: `Not`,
            })),
            (t[9] = e),
            (t[10] = l),
            (t[11] = u),
            (t[12] = d))
          : (d = t[12]);
        let f;
        t[13] !== n || t[14] !== a
          ? ((f = (e) => a(Fe(n, e))), (t[13] = n), (t[14] = a), (t[15] = f))
          : (f = t[15]);
        let p;
        t[16] !== e || t[17] !== f || t[18] !== i || t[19] !== r
          ? ((p = (0, G.jsx)(Re, {
              value: e.identifier,
              variables: r,
              unknownIdentifiers: i,
              onChange: f,
            })),
            (t[16] = e),
            (t[17] = f),
            (t[18] = i),
            (t[19] = r),
            (t[20] = p))
          : (p = t[20]);
        let m;
        t[21] !== s || t[22] !== n || t[23] !== o
          ? ((m = o ? (0, G.jsx)(Q, { label: ue(n, s), onRemove: o }) : null),
            (t[21] = s),
            (t[22] = n),
            (t[23] = o),
            (t[24] = m))
          : (m = t[24]);
        let h;
        (t[25] !== d || t[26] !== p || t[27] !== m
          ? ((h = (0, G.jsxs)(`div`, {
              className: `flex items-center gap-2 rounded-md border border-border/70 bg-background/60 px-2 py-2`,
              children: [d, p, m],
            })),
            (t[25] = d),
            (t[26] = p),
            (t[27] = m),
            (t[28] = h))
          : (h = t[28]),
          (c = h));
        break bb0;
      }
    }
    ((t[0] = s), (t[1] = n), (t[2] = a), (t[3] = o), (t[4] = r), (t[5] = c));
  } else c = t[5];
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  if (n.type === `not`) {
    let e = s > 0 && `border-border/50 bg-background/50`,
      i;
    t[29] === e
      ? (i = t[30])
      : ((i = k(`space-y-2 rounded-lg border border-border/70 bg-muted/20 p-2`, e)),
        (t[29] = e),
        (t[30] = i));
    let c;
    t[31] !== n || t[32] !== a
      ? ((c = (0, G.jsx)(re, {
          pressed: !0,
          onPressedChange: (e) => a(e ? n : n.node),
          "aria-label": `Negate group`,
          variant: `outline`,
          size: `compact`,
          className: `min-w-10`,
          children: `Not`,
        })),
        (t[31] = n),
        (t[32] = a),
        (t[33] = c))
      : (c = t[33]);
    let l;
    t[34] !== s || t[35] !== n || t[36] !== o
      ? ((l = o ? (0, G.jsx)(Q, { label: ue(n, s), className: `ml-auto`, onRemove: o }) : null),
        (t[34] = s),
        (t[35] = n),
        (t[36] = o),
        (t[37] = l))
      : (l = t[37]);
    let u;
    t[38] !== c || t[39] !== l
      ? ((u = (0, G.jsxs)(`div`, { className: `flex items-center gap-2`, children: [c, l] })),
        (t[38] = c),
        (t[39] = l),
        (t[40] = u))
      : (u = t[40]);
    let d, f;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, G.jsx)(`span`, {
          className: `absolute top-0 bottom-0 left-1.5 w-px bg-border/70`,
          "aria-hidden": !0,
        })),
        (f = (0, G.jsx)(`span`, {
          className: `absolute top-4 left-1.5 h-px w-2.5 bg-border/70`,
          "aria-hidden": !0,
        })),
        (t[41] = d),
        (t[42] = f))
      : ((d = t[41]), (f = t[42]));
    let p = s + 1,
      m;
    t[43] === a
      ? (m = t[44])
      : ((m = (e) => a({ type: `not`, node: e })), (t[43] = a), (t[44] = m));
    let h;
    t[45] !== n.node || t[46] !== p || t[47] !== m || t[48] !== r
      ? ((h = (0, G.jsxs)(`div`, {
          className: `relative pl-4`,
          children: [d, f, (0, G.jsx)($, { node: n.node, variables: r, depth: p, onChange: m })],
        })),
        (t[45] = n.node),
        (t[46] = p),
        (t[47] = m),
        (t[48] = r),
        (t[49] = h))
      : (h = t[49]);
    let g;
    return (
      t[50] !== h || t[51] !== i || t[52] !== u
        ? ((g = (0, G.jsxs)(`div`, { className: i, children: [u, h] })),
          (t[50] = h),
          (t[51] = i),
          (t[52] = u),
          (t[53] = g))
        : (g = t[53]),
      g
    );
  }
  let l = n.type === `or` ? `or` : `and`,
    u,
    f,
    p,
    h;
  if (t[54] !== s || t[55] !== n || t[56] !== a || t[57] !== o || t[58] !== l || t[59] !== r) {
    let e = Pe(n, l),
      i = new Map(),
      c = e.map((e) => {
        let t = `${e.type}-${H(e)}`,
          n = i.get(t) ?? 0;
        return (i.set(t, n + 1), { child: e, key: n === 0 ? t : `${t}-${n}` });
      }),
      g = (t, n) => {
        let r = !1,
          i = K(
            e.map((e) => (!r && e === t ? ((r = !0), n) : e)),
            l,
          );
        i && a(i);
      },
      _ = (t) => {
        let n = !1,
          r = K(
            e.filter((e) => (!n && e === t ? ((n = !0), !1) : !0)),
            l,
          );
        a(r || J());
      },
      v = (t) => {
        if (t === l) return;
        let n = K(e, t);
        n && a(n);
      },
      y = () => {
        let t = K([...e, J()], l);
        t && a(t);
      },
      b = () => {
        let t = { type: l === `and` ? `or` : `and`, left: J(), right: { type: `not`, node: J() } },
          n = K([...e, t], l);
        n && a(n);
      },
      x = s > 0 && `border-border/70 bg-background/55`;
    t[64] === x
      ? (p = t[65])
      : ((p = k(`space-y-2 rounded-lg border border-border/60 bg-muted/10 p-2`, x)),
        (t[64] = x),
        (t[65] = p));
    let S;
    t[66] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, G.jsx)(N, { size: `compact`, className: `w-24`, children: (0, G.jsx)(j, {}) })),
        (t[66] = S))
      : (S = t[66]);
    let C;
    t[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, G.jsxs)(M, {
          alignItemWithTrigger: !1,
          matchTriggerWidth: !1,
          children: [
            (0, G.jsx)(A, { value: `and`, children: `and` }),
            (0, G.jsx)(A, { value: `or`, children: `or` }),
          ],
        })),
        (t[67] = C))
      : (C = t[67]);
    let w;
    t[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, G.jsx)(d, { className: `size-3.5` })), (t[68] = w))
      : (w = t[68]);
    let T;
    t[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, G.jsx)(d, { className: `size-3.5` })), (t[69] = T))
      : (T = t[69]);
    let E;
    (t[70] !== s || t[71] !== n || t[72] !== o
      ? ((E = o ? (0, G.jsx)(Q, { label: ue(n, s), className: `ml-auto`, onRemove: o }) : null),
        (t[70] = s),
        (t[71] = n),
        (t[72] = o),
        (t[73] = E))
      : (E = t[73]),
      (h = (0, G.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [
          (0, G.jsxs)(P, { value: l, onValueChange: (e) => v(e), children: [S, C] }),
          (0, G.jsxs)(m, {
            type: `button`,
            variant: `outline`,
            size: `compact`,
            onClick: y,
            children: [w, `Condition`],
          }),
          (0, G.jsxs)(m, {
            type: `button`,
            variant: `outline`,
            size: `compact`,
            onClick: b,
            children: [T, `Group`],
          }),
          E,
        ],
      })),
      (u = `space-y-2`),
      (f = c.map((e) => {
        let { child: t, key: n } = e;
        return (0, G.jsxs)(
          `div`,
          {
            className: `relative pl-4`,
            children: [
              (0, G.jsx)(`span`, {
                className: k(
                  `absolute top-0 bottom-0 left-1.5 w-px`,
                  s === 0 ? `bg-border` : `bg-border/70`,
                ),
                "aria-hidden": !0,
              }),
              (0, G.jsx)(`span`, {
                className: k(
                  `absolute top-4 left-1.5 h-px w-2.5`,
                  s === 0 ? `bg-border` : `bg-border/70`,
                ),
                "aria-hidden": !0,
              }),
              (0, G.jsx)($, {
                node: t,
                variables: r,
                depth: s + 1,
                onChange: (e) => g(t, e),
                onRemove: () => _(t),
              }),
            ],
          },
          n,
        );
      })),
      (t[54] = s),
      (t[55] = n),
      (t[56] = a),
      (t[57] = o),
      (t[58] = l),
      (t[59] = r),
      (t[60] = u),
      (t[61] = f),
      (t[62] = p),
      (t[63] = h));
  } else ((u = t[60]), (f = t[61]), (p = t[62]), (h = t[63]));
  let g;
  t[74] !== u || t[75] !== f
    ? ((g = (0, G.jsx)(`div`, { className: u, children: f })),
      (t[74] = u),
      (t[75] = f),
      (t[76] = g))
    : (g = t[76]);
  let _;
  return (
    t[77] !== p || t[78] !== h || t[79] !== g
      ? ((_ = (0, G.jsxs)(`div`, { className: p, children: [h, g] })),
        (t[77] = p),
        (t[78] = h),
        (t[79] = g),
        (t[80] = _))
      : (_ = t[80]),
    _
  );
}
function Be(e) {
  let t = (0, U.c)(58),
    { value: n, variables: r, onChange: i, onValidityChange: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = H(n)), (t[0] = n), (t[1] = o));
  let [c, l] = (0, W.useState)(o),
    u,
    f;
  if (t[2] !== c) {
    let e = le(c);
    ((u = e.ok ? null : e.message),
      (f = e.ok ? he(e.value) : []),
      (t[2] = c),
      (t[3] = u),
      (t[4] = f));
  } else ((u = t[3]), (f = t[4]));
  let p = f,
    h;
  t[5] !== i || t[6] !== a
    ? ((h = (e) => {
        l(e);
        let t = le(e);
        (a?.(t.ok), t.ok && i(t.value));
      }),
      (t[5] = i),
      (t[6] = a),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _;
  t[8] !== i || t[9] !== a
    ? ((_ = (e) => {
        (l(H(e)), a?.(!0), i(e));
      }),
      (t[8] = i),
      (t[9] = a),
      (t[10] = _))
    : (_ = t[10]);
  let v = _,
    y;
  t[11] !== v || t[12] !== n
    ? ((y = () => {
        v(n ? { type: `and`, left: n, right: J() } : J());
      }),
      (t[11] = v),
      (t[12] = n),
      (t[13] = y))
    : (y = t[13]);
  let b = y,
    x;
  t[14] !== v || t[15] !== n
    ? ((x = () => {
        let e = Le(`or`);
        v(n ? { type: `and`, left: n, right: e } : e);
      }),
      (t[14] = v),
      (t[15] = n),
      (t[16] = x))
    : (x = t[16]);
  let S = x,
    C;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, G.jsx)(`div`, {
        className: `min-w-0`,
        children: (0, G.jsx)(`div`, {
          className: `text-sm font-medium text-foreground`,
          children: `When`,
        }),
      })),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, G.jsx)(d, { className: `size-3.5` })), (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === b
    ? (T = t[20])
    : ((T = (0, G.jsxs)(m, {
        type: `button`,
        variant: `outline`,
        size: `compact`,
        onClick: b,
        children: [w, `Condition`],
      })),
      (t[19] = b),
      (t[20] = T));
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, G.jsx)(d, { className: `size-3.5` })), (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] === S
    ? (D = t[23])
    : ((D = (0, G.jsxs)(m, {
        type: `button`,
        variant: `outline`,
        size: `compact`,
        onClick: S,
        children: [E, `Group`],
      })),
      (t[22] = S),
      (t[23] = D));
  let O;
  t[24] !== D || t[25] !== T
    ? ((O = (0, G.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          C,
          (0, G.jsxs)(`div`, { className: `flex shrink-0 items-center gap-2`, children: [T, D] }),
        ],
      })),
      (t[24] = D),
      (t[25] = T),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] === g ? (k = t[28]) : ((k = (e) => g(e.currentTarget.value)), (t[27] = g), (t[28] = k));
  let A = !!u,
    j;
  t[29] !== c || t[30] !== k || t[31] !== A
    ? ((j = (0, G.jsx)(oe, {
        value: c,
        onChange: k,
        placeholder: `Always`,
        "aria-invalid": A,
        "aria-label": `When expression`,
        size: `compact`,
        font: `mono`,
      })),
      (t[29] = c),
      (t[30] = k),
      (t[31] = A),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === p
    ? (M = t[34])
    : ((M =
        p.length > 0
          ? (0, G.jsx)(ae, { align: `inline-end`, children: (0, G.jsx)(X, { identifiers: p }) })
          : null),
      (t[33] = p),
      (t[34] = M));
  let N;
  t[35] !== j || t[36] !== M
    ? ((N = (0, G.jsxs)(se, { children: [j, M] })), (t[35] = j), (t[36] = M), (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] === u
    ? (P = t[39])
    : ((P = u
        ? (0, G.jsxs)(`div`, {
            className: `flex items-center gap-1.5 text-2xs text-destructive`,
            children: [(0, G.jsx)(s, { className: `size-3.5` }), u],
          })
        : null),
      (t[38] = u),
      (t[39] = P));
  let F;
  t[40] !== N || t[41] !== P
    ? ((F = (0, G.jsxs)(`div`, { className: `space-y-1.5`, children: [N, P] })),
      (t[40] = N),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== b || t[44] !== S || t[45] !== v || t[46] !== n || t[47] !== r
    ? ((I = n
        ? (0, G.jsx)($, { node: n, variables: r, onChange: v, onRemove: () => v(void 0) })
        : (0, G.jsx)(`div`, {
            className: `rounded-md border border-dashed border-border/80 bg-muted/15 p-3`,
            children: (0, G.jsxs)(`div`, {
              className: `flex flex-wrap gap-2`,
              children: [
                (0, G.jsxs)(m, {
                  type: `button`,
                  size: `compact`,
                  onClick: b,
                  children: [(0, G.jsx)(d, { className: `size-3.5` }), `Condition`],
                }),
                (0, G.jsxs)(m, {
                  type: `button`,
                  variant: `outline`,
                  size: `compact`,
                  onClick: S,
                  children: [(0, G.jsx)(d, { className: `size-3.5` }), `Group`],
                }),
              ],
            }),
          })),
      (t[43] = b),
      (t[44] = S),
      (t[45] = v),
      (t[46] = n),
      (t[47] = r),
      (t[48] = I))
    : (I = t[48]);
  let L;
  t[49] === u
    ? (L = t[50])
    : ((L = u
        ? (0, G.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg border border-destructive/30 bg-background/75 p-4 text-center text-xs text-destructive backdrop-blur-xs`,
            children: `Fix the expression above to continue editing visually.`,
          })
        : null),
      (t[49] = u),
      (t[50] = L));
  let R;
  t[51] !== I || t[52] !== L
    ? ((R = (0, G.jsxs)(`div`, { className: `relative`, children: [I, L] })),
      (t[51] = I),
      (t[52] = L),
      (t[53] = R))
    : (R = t[53]);
  let ee;
  return (
    t[54] !== O || t[55] !== F || t[56] !== R
      ? ((ee = (0, G.jsxs)(`div`, {
          className: `w-[min(34rem,calc(100vw-2rem))] space-y-3`,
          children: [O, F, R],
        })),
        (t[54] = O),
        (t[55] = F),
        (t[56] = R),
        (t[57] = ee))
      : (ee = t[57]),
    ee
  );
}
function Ve(e) {
  return { keyDraft: e.key, whenDraft: e.binding.whenAst, isRecording: !1, isWhenDraftValid: !0 };
}
function He(e, t) {
  return { ...e, ...t };
}
function Ue(e) {
  return { command: e.command, key: e.key, ...(e.when.trim().length > 0 ? { when: e.when } : {}) };
}
function We(e) {
  let t = (0, U.c)(27),
    { row: n, allRows: r, onSave: i } = e,
    [a, o] = (0, W.useReducer)(He, n, Ve),
    { keyDraft: s, whenDraft: c, isRecording: l, isWhenDraftValid: u } = a,
    d,
    f,
    p;
  t[0] !== r || t[1] !== s || t[2] !== n.id || t[3] !== n.key || t[4] !== n.when || t[5] !== c
    ? ((p = H(c)),
      (d = s !== n.key || p !== n.when),
      (f = fe(r, { rowId: n.id, key: s, when: p })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = n.id),
      (t[3] = n.key),
      (t[4] = n.when),
      (t[5] = c),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p))
    : ((d = t[6]), (f = t[7]), (p = t[8]));
  let m = f,
    h;
  t[9] !== s || t[10] !== i || t[11] !== n || t[12] !== p
    ? ((h = () => {
        i({ command: n.command, key: s, when: p.trim().length > 0 ? p : void 0, replace: Ue(n) });
      }),
      (t[9] = s),
      (t[10] = i),
      (t[11] = n),
      (t[12] = p),
      (t[13] = h))
    : (h = t[13]);
  let g = h,
    _;
  t[14] !== l || t[15] !== n.key
    ? ((_ = (e) => {
        if (e.key === `Tab` && !l) return;
        if ((e.preventDefault(), e.key === `Escape`)) {
          o({ keyDraft: n.key, isRecording: !1 });
          return;
        }
        let t = ye(e.nativeEvent, navigator.platform, { layoutCharacter: !0 });
        t && o({ keyDraft: t, isRecording: !1 });
      }),
      (t[14] = l),
      (t[15] = n.key),
      (t[16] = _))
    : (_ = t[16]);
  let v = _,
    y;
  return (
    t[17] !== v ||
    t[18] !== m ||
    t[19] !== d ||
    t[20] !== l ||
    t[21] !== u ||
    t[22] !== s ||
    t[23] !== g ||
    t[24] !== c ||
    t[25] !== p
      ? ((y = {
          keyDraft: s,
          whenDraft: c,
          isRecording: l,
          isWhenDraftValid: u,
          whenDraftExpression: p,
          isDirty: d,
          conflictLabels: m,
          setDraft: o,
          save: g,
          captureKeybinding: v,
        }),
        (t[17] = v),
        (t[18] = m),
        (t[19] = d),
        (t[20] = l),
        (t[21] = u),
        (t[22] = s),
        (t[23] = g),
        (t[24] = c),
        (t[25] = p),
        (t[26] = y))
      : (y = t[26]),
    y
  );
}
function Ge(e) {
  let t = (0, U.c)(19),
    { row: n, editor: r, isSaving: i, pillClassName: a } = e,
    {
      keyDraft: o,
      isRecording: s,
      isDirty: c,
      isWhenDraftValid: l,
      setDraft: u,
      save: d,
      captureKeybinding: f,
    } = r,
    p = !s && o === n.key && n.key.length > 0 && !c,
    h;
  t[0] !== c || t[1] !== i || t[2] !== l || t[3] !== o || t[4] !== d
    ? ((h = c
        ? (0, G.jsx)(m, {
            size: `sm`,
            disabled: i || o.trim().length === 0 || !l,
            onClick: d,
            children: i ? `Saving` : `Save`,
          })
        : null),
      (t[0] = c),
      (t[1] = i),
      (t[2] = l),
      (t[3] = o),
      (t[4] = d),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] !== f ||
  t[7] !== s ||
  t[8] !== o ||
  t[9] !== a ||
  t[10] !== n.binding ||
  t[11] !== n.command ||
  t[12] !== n.key ||
  t[13] !== u ||
  t[14] !== p
    ? ((g = p
        ? (0, G.jsx)(`button`, {
            type: `button`,
            onClick: () => u({ isRecording: !0 }),
            "aria-label": `Edit shortcut for ${V(n.command)}: ${ie(n.binding.shortcut)}`,
            className: k(
              `inline-flex h-8 cursor-pointer items-center rounded-md border border-transparent px-1.5 sm:h-7 outline-none transition-colors hover:border-border/70 hover:bg-accent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/24`,
              a,
            ),
            children: (0, G.jsx)(je, { value: n.key }),
          })
        : (0, G.jsx)(S, {
            "data-keybinding-capture": ``,
            autoFocus: s,
            "aria-label": `Keybinding for ${V(n.command)}`,
            value: s ? `` : o,
            placeholder: s ? `Press shortcut` : `Unassigned`,
            size: `sm`,
            font: `mono`,
            className: `w-44`,
            onFocus: () => u({ isRecording: !0 }),
            onBlur: () => u({ isRecording: !1 }),
            onChange: (e) => u({ keyDraft: e.currentTarget.value }),
            onKeyDown: f,
          })),
      (t[6] = f),
      (t[7] = s),
      (t[8] = o),
      (t[9] = a),
      (t[10] = n.binding),
      (t[11] = n.command),
      (t[12] = n.key),
      (t[13] = u),
      (t[14] = p),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== h || t[17] !== g
      ? ((_ = (0, G.jsxs)(G.Fragment, { children: [h, g] })), (t[16] = h), (t[17] = g), (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function Ke(e) {
  let t = (0, U.c)(17),
    { label: n, expression: r, value: a, variables: o, onChange: s, onValidityChange: c } = e,
    l = r ? `ghost` : `ghost-muted`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = (0, G.jsx)(m, { variant: l, size: `micro`, className: `min-w-0 shrink` })),
      (t[0] = l),
      (t[1] = u));
  let d = `Edit when clause for ${n}`,
    f = r || `Always`,
    p;
  t[2] === f
    ? (p = t[3])
    : ((p = (0, G.jsx)(`span`, { className: `truncate font-mono`, children: f })),
      (t[2] = f),
      (t[3] = p));
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, G.jsx)(i, { className: `size-3.5 shrink-0 opacity-60` })), (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== u || t[6] !== d || t[7] !== p
    ? ((g = (0, G.jsxs)(Ce, { render: u, "aria-label": d, children: [p, h] })),
      (t[5] = u),
      (t[6] = d),
      (t[7] = p),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== s || t[10] !== c || t[11] !== a || t[12] !== o
    ? ((_ = (0, G.jsx)(Te, {
        align: `start`,
        sideOffset: 6,
        children: (0, G.jsx)(Be, { value: a, variables: o, onChange: s, onValidityChange: c }),
      })),
      (t[9] = s),
      (t[10] = c),
      (t[11] = a),
      (t[12] = o),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  return (
    t[14] !== g || t[15] !== _
      ? ((v = (0, G.jsxs)(we, { children: [g, _] })), (t[14] = g), (t[15] = _), (t[16] = v))
      : (v = t[16]),
    v
  );
}
function qe(e) {
  let t = (0, U.c)(24),
    { row: n, isSaving: r, onReset: i, onRemove: a } = e,
    o = n.source === `Custom` && n.defaultKey !== null,
    s = n.source !== `Default`;
  if (!o && !s) return null;
  let l;
  t[0] === n.command ? (l = t[1]) : ((l = V(n.command)), (t[0] = n.command), (t[1] = l));
  let u = `Actions for ${l}`,
    d;
  t[2] !== r || t[3] !== u
    ? ((d = (0, G.jsx)(m, {
        type: `button`,
        variant: `ghost-muted`,
        size: `icon-sm`,
        disabled: r,
        "aria-label": u,
      })),
      (t[2] = r),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, G.jsx)(c, { className: `size-3.5` })), (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === d
    ? (p = t[7])
    : ((p = (0, G.jsx)(D, { render: d, children: f })), (t[6] = d), (t[7] = p));
  let h;
  t[8] !== o || t[9] !== r || t[10] !== i || t[11] !== n
    ? ((h = o
        ? (0, G.jsx)(O, { disabled: r, onClick: () => i(n), children: `Reset to default` })
        : null),
      (t[8] = o),
      (t[9] = r),
      (t[10] = i),
      (t[11] = n),
      (t[12] = h))
    : (h = t[12]);
  let _;
  t[13] !== s || t[14] !== r || t[15] !== a || t[16] !== n
    ? ((_ = s
        ? (0, G.jsx)(O, {
            variant: `destructive`,
            disabled: r,
            onClick: () => a(n),
            children: `Remove`,
          })
        : null),
      (t[13] = s),
      (t[14] = r),
      (t[15] = a),
      (t[16] = n),
      (t[17] = _))
    : (_ = t[17]);
  let v;
  t[18] !== h || t[19] !== _
    ? ((v = (0, G.jsxs)(C, { align: `end`, children: [h, _] })),
      (t[18] = h),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== p || t[22] !== v
      ? ((y = (0, G.jsxs)(g, { children: [p, v] })), (t[21] = p), (t[22] = v), (t[23] = y))
      : (y = t[23]),
    y
  );
}
function Je(e) {
  let t = (0, U.c)(2),
    { source: n } = e;
  if (n === `Default`) return null;
  let r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, G.jsx)(x, { variant: `outline`, size: `sm`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ye(e) {
  let t = (0, U.c)(13),
    { row: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, G.jsx)(`span`, { className: `flex items-center gap-2` })), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n.command ? (i = t[2]) : ((i = V(n.command)), (t[1] = n.command), (t[2] = i));
  let a;
  t[3] === n.source
    ? (a = t[4])
    : ((a = (0, G.jsx)(Je, { source: n.source })), (t[3] = n.source), (t[4] = a));
  let o;
  t[5] !== i || t[6] !== a
    ? ((o = (0, G.jsxs)(v, { render: r, children: [i, a] })), (t[5] = i), (t[6] = a), (t[7] = o))
    : (o = t[7]);
  let s;
  t[8] === n.command
    ? (s = t[9])
    : ((s = (0, G.jsx)(_, { side: `top`, children: n.command })), (t[8] = n.command), (t[9] = s));
  let c;
  return (
    t[10] !== o || t[11] !== s
      ? ((c = (0, G.jsxs)(p, { children: [o, s] })), (t[10] = o), (t[11] = s), (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Xe(e) {
  let t = (0, U.c)(13),
    { row: n, editor: r, variables: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, G.jsx)(`span`, {
        className: `text-xs leading-none text-muted-foreground/70`,
        children: `When`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === n.command ? (o = t[2]) : ((o = V(n.command)), (t[1] = n.command), (t[2] = o));
  let s, c;
  t[3] === r
    ? ((s = t[4]), (c = t[5]))
    : ((s = (e) => r.setDraft({ whenDraft: e })),
      (c = (e) => r.setDraft({ isWhenDraftValid: e })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = c));
  let l;
  return (
    t[6] !== r.whenDraft ||
    t[7] !== r.whenDraftExpression ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== i
      ? ((l = (0, G.jsxs)(`span`, {
          className: `flex h-6 items-center gap-1.5`,
          children: [
            a,
            (0, G.jsx)(Ke, {
              label: o,
              expression: r.whenDraftExpression,
              value: r.whenDraft,
              variables: i,
              onChange: s,
              onValidityChange: c,
            }),
          ],
        })),
        (t[6] = r.whenDraft),
        (t[7] = r.whenDraftExpression),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = i),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function Ze(e) {
  let t = (0, U.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, G.jsx)(`span`, {
          className: `flex items-center opacity-0 transition-opacity group-focus-within/row:opacity-100 group-hover/row:opacity-100 has-data-popup-open:opacity-100 pointer-coarse:opacity-100`,
          children: (0, G.jsx)(qe, { ...e }),
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function Qe(e) {
  let t = (0, U.c)(30),
    {
      row: n,
      isSaving: r,
      anchorId: i,
      allRows: a,
      variables: o,
      onSave: s,
      onReset: c,
      onRemove: l,
    } = e,
    u;
  t[0] !== a || t[1] !== s || t[2] !== n
    ? ((u = { row: n, allRows: a, onSave: s }), (t[0] = a), (t[1] = s), (t[2] = n), (t[3] = u))
    : (u = t[3]);
  let d = We(u),
    f;
  t[4] === n ? (f = t[5]) : ((f = (0, G.jsx)(Ye, { row: n })), (t[4] = n), (t[5] = f));
  let p;
  t[6] !== d || t[7] !== n || t[8] !== o
    ? ((p = (0, G.jsx)(Xe, { row: n, editor: d, variables: o })),
      (t[6] = d),
      (t[7] = n),
      (t[8] = o),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === d.conflictLabels
    ? (m = t[11])
    : ((m = (0, G.jsx)(Z, { labels: d.conflictLabels })), (t[10] = d.conflictLabels), (t[11] = m));
  let h;
  t[12] !== r || t[13] !== l || t[14] !== c || t[15] !== n
    ? ((h = (0, G.jsx)(Ze, { row: n, isSaving: r, onReset: c, onRemove: l })),
      (t[12] = r),
      (t[13] = l),
      (t[14] = c),
      (t[15] = n),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== d || t[18] !== r || t[19] !== n
    ? ((g = (0, G.jsx)(Ge, { row: n, editor: d, isSaving: r, pillClassName: `-mr-1.5` })),
      (t[17] = d),
      (t[18] = r),
      (t[19] = n),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] !== m || t[22] !== h || t[23] !== g
    ? ((_ = (0, G.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-1.5`,
        children: [m, h, g],
      })),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  return (
    t[25] !== i || t[26] !== f || t[27] !== p || t[28] !== _
      ? ((v = (0, G.jsx)(Ee, {
          id: i,
          className: `group/row rounded-none`,
          title: f,
          description: p,
          control: _,
        })),
        (t[25] = i),
        (t[26] = f),
        (t[27] = p),
        (t[28] = _),
        (t[29] = v))
      : (v = t[29]),
    v
  );
}
function $e(e) {
  let t = (0, U.c)(30),
    { allRows: n, onSave: r } = e,
    [i, a] = (0, W.useState)(``),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { keyDraft: ``, whenDraft: void 0, isRecording: !1, isWhenDraftValid: !0 }), (t[0] = o))
    : (o = t[0]);
  let [s, c] = (0, W.useReducer)(He, o),
    { keyDraft: l, whenDraft: u, isRecording: d, isWhenDraftValid: f } = s,
    p,
    m;
  t[1] !== n || t[2] !== l || t[3] !== u
    ? ((m = H(u)),
      (p = fe(n, { rowId: `new`, key: l, when: m })),
      (t[1] = n),
      (t[2] = l),
      (t[3] = u),
      (t[4] = p),
      (t[5] = m))
    : ((p = t[4]), (m = t[5]));
  let h = p,
    g;
  t[6] === i ? (g = t[7]) : ((g = i ? V(i) : `new keybinding`), (t[6] = i), (t[7] = g));
  let _ = g,
    v;
  t[8] !== i || t[9] !== f || t[10] !== l
    ? ((v = !!i && l.trim().length > 0 && f), (t[8] = i), (t[9] = f), (t[10] = l), (t[11] = v))
    : (v = t[11]);
  let y = v,
    b;
  t[12] !== i || t[13] !== l || t[14] !== r || t[15] !== m
    ? ((b = () => {
        i && r({ command: i, key: l, ...(m.trim().length > 0 ? { when: m } : {}) });
      }),
      (t[12] = i),
      (t[13] = l),
      (t[14] = r),
      (t[15] = m),
      (t[16] = b))
    : (b = t[16]);
  let x = b,
    S;
  t[17] === d
    ? (S = t[18])
    : ((S = (e) => {
        if (e.key === `Tab` && !d) return;
        if ((e.preventDefault(), e.key === `Escape`)) {
          c({ keyDraft: ``, isRecording: !1 });
          return;
        }
        let t = ye(e.nativeEvent, navigator.platform, { layoutCharacter: !0 });
        t && c({ keyDraft: t, isRecording: !1 });
      }),
      (t[17] = d),
      (t[18] = S));
  let C = S,
    w;
  return (
    t[19] !== y ||
    t[20] !== C ||
    t[21] !== i ||
    t[22] !== _ ||
    t[23] !== h ||
    t[24] !== d ||
    t[25] !== l ||
    t[26] !== x ||
    t[27] !== u ||
    t[28] !== m
      ? ((w = {
          commandDraft: i,
          setCommandDraft: a,
          keyDraft: l,
          whenDraft: u,
          whenDraftExpression: m,
          isRecording: d,
          conflictLabels: h,
          commandLabelText: _,
          canSave: y,
          setDraft: c,
          save: x,
          captureKeybinding: C,
        }),
        (t[19] = y),
        (t[20] = C),
        (t[21] = i),
        (t[22] = _),
        (t[23] = h),
        (t[24] = d),
        (t[25] = l),
        (t[26] = x),
        (t[27] = u),
        (t[28] = m),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function et(e) {
  let t = (0, U.c)(14),
    { draft: n, commandOptions: r, className: i } = e,
    a = n.commandDraft,
    o;
  t[0] === n ? (o = t[1]) : ((o = (e) => n.setCommandDraft(e)), (t[0] = n), (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(j, { placeholder: `Command` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === i
    ? (c = t[4])
    : ((c = (0, G.jsx)(N, { size: `sm`, className: i, children: s })), (t[3] = i), (t[4] = c));
  let l;
  t[5] === r ? (l = t[6]) : ((l = r.map(tt)), (t[5] = r), (t[6] = l));
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, G.jsx)(M, {
        alignItemWithTrigger: !1,
        matchTriggerWidth: !1,
        className: `max-h-72`,
        children: l,
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  return (
    t[9] !== n.commandDraft || t[10] !== o || t[11] !== c || t[12] !== u
      ? ((d = (0, G.jsxs)(P, { value: a, onValueChange: o, children: [c, u] })),
        (t[9] = n.commandDraft),
        (t[10] = o),
        (t[11] = c),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function tt(e) {
  return (0, G.jsx)(
    A,
    {
      value: e,
      className: `w-full`,
      children: (0, G.jsx)(`span`, { className: `truncate`, children: V(e) }),
    },
    e,
  );
}
function nt(e) {
  let t = (0, U.c)(14),
    { draft: n, autoFocus: r, className: i } = e,
    a = r !== void 0 && r,
    o = `Keybinding for ${n.commandLabelText}`,
    s = n.isRecording ? `` : n.keyDraft,
    c = n.isRecording ? `Press shortcut` : `Unassigned`,
    l,
    u,
    d;
  t[0] === n
    ? ((l = t[1]), (u = t[2]), (d = t[3]))
    : ((l = () => n.setDraft({ isRecording: !0 })),
      (u = () => n.setDraft({ isRecording: !1 })),
      (d = (e) => n.setDraft({ keyDraft: e.currentTarget.value })),
      (t[0] = n),
      (t[1] = l),
      (t[2] = u),
      (t[3] = d));
  let f;
  return (
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== n.captureKeybinding ||
    t[7] !== o ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== d
      ? ((f = (0, G.jsx)(S, {
          "data-keybinding-capture": ``,
          autoFocus: a,
          "aria-label": o,
          value: s,
          placeholder: c,
          size: `sm`,
          font: `mono`,
          className: i,
          onFocus: l,
          onBlur: u,
          onChange: d,
          onKeyDown: n.captureKeybinding,
        })),
        (t[4] = a),
        (t[5] = i),
        (t[6] = n.captureKeybinding),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function rt(e) {
  let t = (0, U.c)(10),
    { draft: n, variables: r } = e,
    i,
    a;
  t[0] === n
    ? ((i = t[1]), (a = t[2]))
    : ((i = (e) => n.setDraft({ whenDraft: e })),
      (a = (e) => n.setDraft({ isWhenDraftValid: e })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a));
  let o;
  return (
    t[3] !== n.commandLabelText ||
    t[4] !== n.whenDraft ||
    t[5] !== n.whenDraftExpression ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== r
      ? ((o = (0, G.jsx)(Ke, {
          label: n.commandLabelText,
          expression: n.whenDraftExpression,
          value: n.whenDraft,
          variables: r,
          onChange: i,
          onValidityChange: a,
        })),
        (t[3] = n.commandLabelText),
        (t[4] = n.whenDraft),
        (t[5] = n.whenDraftExpression),
        (t[6] = i),
        (t[7] = a),
        (t[8] = r),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function it(e) {
  let t = (0, U.c)(9),
    { isSaving: n, onCancel: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (0, G.jsx)(m, {
        type: `button`,
        variant: `ghost-muted`,
        size: `icon-sm`,
        disabled: n,
        "aria-label": `Cancel new keybinding`,
        onClick: r,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, G.jsx)(f, { className: `size-3.5` })), (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === i
    ? (o = t[5])
    : ((o = (0, G.jsx)(v, { render: i, children: a })), (t[4] = i), (t[5] = o));
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, G.jsx)(_, { side: `top`, children: `Cancel` })), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] === o ? (c = t[8]) : ((c = (0, G.jsxs)(p, { children: [o, s] })), (t[7] = o), (t[8] = c)),
    c
  );
}
function at(e) {
  let t = (0, U.c)(30),
    { commandOptions: n, allRows: r, variables: i, isSaving: a, onSave: o, onCancel: s } = e,
    c;
  t[0] !== r || t[1] !== o
    ? ((c = { allRows: r, onSave: o }), (t[0] = r), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let l = $e(c),
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(`span`, {
        className: `text-xs leading-none text-muted-foreground/70`,
        children: `When`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== l || t[5] !== i
    ? ((d = (0, G.jsxs)(`span`, {
        className: `flex h-6 items-center gap-1.5`,
        children: [u, (0, G.jsx)(rt, { draft: l, variables: i })],
      })),
      (t[4] = l),
      (t[5] = i),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== n || t[8] !== l
    ? ((f = (0, G.jsx)(et, { draft: l, commandOptions: n, className: `w-56` })),
      (t[7] = n),
      (t[8] = l),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === l.conflictLabels
    ? (p = t[11])
    : ((p = (0, G.jsx)(Z, { labels: l.conflictLabels })), (t[10] = l.conflictLabels), (t[11] = p));
  let h;
  t[12] === l
    ? (h = t[13])
    : ((h = (0, G.jsx)(nt, { draft: l, className: `w-44` })), (t[12] = l), (t[13] = h));
  let g = a || !l.canSave,
    _ = a ? `Saving` : `Save`,
    v;
  t[14] !== l.save || t[15] !== g || t[16] !== _
    ? ((v = (0, G.jsx)(m, { size: `sm`, disabled: g, onClick: l.save, children: _ })),
      (t[14] = l.save),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== a || t[19] !== s
    ? ((y = (0, G.jsx)(it, { isSaving: a, onCancel: s })), (t[18] = a), (t[19] = s), (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== f || t[22] !== p || t[23] !== h || t[24] !== v || t[25] !== y
    ? ((b = (0, G.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [f, p, h, v, y],
      })),
      (t[21] = f),
      (t[22] = p),
      (t[23] = h),
      (t[24] = v),
      (t[25] = y),
      (t[26] = b))
    : (b = t[26]);
  let x;
  return (
    t[27] !== b || t[28] !== d
      ? ((x = (0, G.jsx)(Ee, {
          className: `bg-muted/15`,
          title: `New keybinding`,
          description: d,
          control: b,
        })),
        (t[27] = b),
        (t[28] = d),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function ot(e) {
  let { groups: t, anchorIds: n, savingCommand: r, ...i } = e;
  return t.map((e) =>
    (0, G.jsx)(
      ke,
      {
        id: `keybindings-${e.id}`,
        title: e.title,
        children: e.rows.map((e) =>
          (0, G.jsx)(Qe, { row: e, anchorId: n.get(e.id), isSaving: r === e.command, ...i }, e.id),
        ),
      },
      e.id,
    ),
  );
}
function st() {
  let e = (0, U.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, G.jsxs)(p, {
          children: [
            (0, G.jsx)(v, {
              delay: 200,
              render: (0, G.jsx)(m, {
                size: `icon-micro`,
                variant: `ghost-muted`,
                "aria-label": `The browser may claim some shortcuts first. The desktop app receives them all.`,
                children: (0, G.jsx)(o, { className: `size-3.5 text-warning` }),
              }),
            }),
            (0, G.jsx)(_, {
              side: `top`,
              className: `max-w-72`,
              children: `The browser may claim some shortcuts first. The desktop app receives them all.`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ct(e) {
  let t = new Map(),
    n = new Set();
  for (let r of e) n.has(r.command) || (n.add(r.command), t.set(r.id, xe(r.command)));
  return t;
}
function lt() {
  let e = (0, U.c)(6),
    t = Ae().environment?.serverConfig?.keybindings,
    n,
    r;
  if (e[0] !== t) {
    let i = E(t ?? []);
    ((n = pe(i)), (r = ge(i)), (e[0] = t), (e[1] = n), (e[2] = r));
  } else ((n = e[1]), (r = e[2]));
  let i;
  return (
    e[3] !== n || e[4] !== r
      ? ((i = { commandOptions: n, allRows: r }), (e[3] = n), (e[4] = r), (e[5] = i))
      : (i = e[5]),
    i
  );
}
function ut() {
  let e = (0, U.c)(74),
    { environment: t, connectedEnvironments: n } = Ae(),
    r = I(t?.environmentId ?? null, T),
    i = R(n, h),
    a;
  e[0] !== n || e[1] !== i
    ? ((a = n.length > 0 && n.every((e) => i.has(e.environmentId))),
      (e[0] = n),
      (e[1] = i),
      (e[2] = a))
    : (a = e[2]);
  let o = a,
    s = t?.serverConfig?.keybindingsConfigPath ?? null,
    c;
  e[3] === t?.serverConfig?.availableEditors
    ? (c = e[4])
    : ((c = t?.serverConfig?.availableEditors ?? []),
      (e[3] = t?.serverConfig?.availableEditors),
      (e[4] = c));
  let u = c,
    f;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { reportFailure: !1 }), (e[5] = f))
    : (f = e[5]);
  let g = ee(F.upsertKeybinding, f),
    x;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { reportFailure: !1 }), (e[6] = x))
    : (x = e[6]);
  let S = ee(F.removeKeybinding, x),
    C = Se(t?.environmentId ?? null, u),
    [E, D] = (0, W.useState)(``),
    O = (0, W.useRef)(null),
    [k, A] = (0, W.useState)(null),
    [j, M] = (0, W.useState)(!1),
    N;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = { select: ht }), (e[7] = N))
    : (N = e[7]);
  let P = ne(N),
    [re, ie] = (0, W.useState)(P);
  P !== re && (ie(P), P.startsWith(`keybinding-`) && D(``));
  let ae;
  e[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((ae = de()), (e[8] = ae)) : (ae = e[8]);
  let oe = ae,
    { commandOptions: se, allRows: z } = lt(),
    B,
    V;
  if (e[9] !== z || e[10] !== E) {
    let t = me(z, E);
    ((B = _e(t)), (V = ct(t)), (e[9] = z), (e[10] = E), (e[11] = B), (e[12] = V));
  } else ((B = e[11]), (V = e[12]));
  let ce = V,
    le;
  e[13] !== s || e[14] !== C || e[15] !== t
    ? ((le = () => {
        s &&
          t &&
          L(t.environmentId, `orchestration:operate`) &&
          (async () => {
            let e = await C(s);
            if (e._tag === `Success` || y(e)) return;
            let t = w(e);
            te.add({
              title: `Unable to open keybindings file`,
              description: t instanceof Error ? t.message : `The keybindings file was not opened.`,
              type: `error`,
            });
          })();
      }),
      (e[13] = s),
      (e[14] = C),
      (e[15] = t),
      (e[16] = le))
    : (le = e[16]);
  let ue = le,
    fe;
  e[17] !== n || e[18] !== t || e[19] !== g
    ? ((fe = (e) => {
        if (!t || !n.every(mt)) return;
        A(e.command);
        let r = {
          command: e.command,
          key: e.key.trim(),
          ...(e.when?.trim() ? { when: e.when.trim() } : {}),
          ...(e.replace ? { replace: e.replace } : {}),
        };
        (async () => {
          let e = await Promise.all(n.map((e) => g({ environmentId: e.environmentId, input: r })));
          A(null);
          let t = e.find(pt);
          if (!t) M(!1);
          else if (!y(t)) {
            let e = w(t);
            te.add({
              title: `Unable to save keybinding`,
              description: e instanceof Error ? e.message : `The keybinding was not saved.`,
              type: `error`,
            });
          }
        })();
      }),
      (e[17] = n),
      (e[18] = t),
      (e[19] = g),
      (e[20] = fe))
    : (fe = e[20]);
  let H = fe,
    pe;
  e[21] !== n || e[22] !== t || e[23] !== S
    ? ((pe = (e) => {
        t &&
          n.every(ft) &&
          (A(e.command),
          (async () => {
            let t = await Promise.all(
              n.map((t) => S({ environmentId: t.environmentId, input: Ue(e) })),
            );
            A(null);
            let r = t.find(dt) ?? t[0];
            if (r?._tag === `Failure` && !y(r)) {
              let e = w(r);
              te.add({
                title: `Unable to remove keybinding`,
                description: e instanceof Error ? e.message : `The keybinding was not removed.`,
                type: `error`,
              });
            }
          })());
      }),
      (e[21] = n),
      (e[22] = t),
      (e[23] = S),
      (e[24] = pe))
    : (pe = e[24]);
  let he = pe,
    ge;
  e[25] === H
    ? (ge = e[26])
    : ((ge = (e) => {
        e.defaultKey &&
          H({
            command: e.command,
            key: e.defaultKey,
            when: e.defaultWhen.trim().length > 0 ? e.defaultWhen : void 0,
            replace: {
              command: e.command,
              key: e.key,
              ...(e.when.trim().length > 0 ? { when: e.when } : {}),
            },
          });
      }),
      (e[25] = H),
      (e[26] = ge));
  let ve = ge,
    ye;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = () => M(!1)), (e[27] = ye))
    : (ye = e[27]);
  let xe = ye,
    Ce;
  e[28] !== z || e[29] !== he || e[30] !== ve || e[31] !== H
    ? ((Ce = { allRows: z, variables: oe, onSave: H, onReset: ve, onRemove: he }),
      (e[28] = z),
      (e[29] = he),
      (e[30] = ve),
      (e[31] = H),
      (e[32] = Ce))
    : (Ce = e[32]);
  let we = Ce,
    Te,
    Ee;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = be(`keybindings`)), (Ee = b ? null : (0, G.jsx)(st, {})), (e[33] = Te), (e[34] = Ee))
    : ((Te = e[33]), (Ee = e[34]));
  let je;
  e[35] === E
    ? (je = e[36])
    : ((je = (0, G.jsx)(Ne, { query: E, onChange: D, inputRef: O })), (e[35] = E), (e[36] = je));
  let Me = j || !o,
    Pe,
    K;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = () => M(!0)),
      (K = (0, G.jsx)(d, { "aria-hidden": !0, className: `size-4` })),
      (e[37] = Pe),
      (e[38] = K))
    : ((Pe = e[37]), (K = e[38]));
  let q;
  e[39] === Me
    ? (q = e[40])
    : ((q = (0, G.jsxs)(m, {
        type: `button`,
        variant: `outline`,
        disabled: Me,
        onClick: Pe,
        children: [K, `Add keybinding`],
      })),
      (e[39] = Me),
      (e[40] = q));
  let Fe = !s || !r,
    Ie;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, G.jsx)(l, { "aria-hidden": !0, className: `size-4` })), (e[41] = Ie))
    : (Ie = e[41]);
  let J;
  e[42] !== ue || e[43] !== Fe
    ? ((J = (0, G.jsx)(v, {
        render: (0, G.jsx)(m, {
          type: `button`,
          variant: `outline`,
          size: `icon`,
          disabled: Fe,
          onClick: ue,
          "aria-label": `Open keybindings.json`,
          children: Ie,
        }),
      })),
      (e[42] = ue),
      (e[43] = Fe),
      (e[44] = J))
    : (J = e[44]);
  let Le;
  e[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, G.jsx)(_, { side: `top`, children: `Open keybindings.json` })), (e[45] = Le))
    : (Le = e[45]);
  let Y;
  e[46] === J
    ? (Y = e[47])
    : ((Y = (0, G.jsxs)(p, { children: [J, Le] })), (e[46] = J), (e[47] = Y));
  let X;
  e[48] !== je || e[49] !== q || e[50] !== Y
    ? ((X = (0, G.jsx)(ke, {
        ...Te,
        headerAction: Ee,
        children: (0, G.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2 px-3 py-3 sm:px-4`,
          children: [je, q, Y],
        }),
      })),
      (e[48] = je),
      (e[49] = q),
      (e[50] = Y),
      (e[51] = X))
    : (X = e[51]);
  let Z;
  e[52] !== o || e[53] !== n.length
    ? ((Z = o
        ? null
        : (0, G.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children:
              n.length === 0
                ? `Connect an environment to change keybindings.`
                : `This connection can view keybindings but cannot change them.`,
          })),
      (e[52] = o),
      (e[53] = n.length),
      (e[54] = Z))
    : (Z = e[54]);
  let Re = !o,
    ze;
  e[55] !== z || e[56] !== se || e[57] !== j || e[58] !== H || e[59] !== k
    ? ((ze = j
        ? (0, G.jsx)(Oe, {
            children: (0, G.jsx)(at, {
              commandOptions: se,
              allRows: z,
              variables: oe,
              isSaving: k !== null,
              onSave: H,
              onCancel: xe,
            }),
          })
        : null),
      (e[55] = z),
      (e[56] = se),
      (e[57] = j),
      (e[58] = H),
      (e[59] = k),
      (e[60] = ze))
    : (ze = e[60]);
  let Q;
  e[61] !== ce || e[62] !== B || e[63] !== we || e[64] !== k
    ? ((Q =
        B.length > 0
          ? (0, G.jsx)(ot, { groups: B, anchorIds: ce, savingCommand: k, ...we })
          : (0, G.jsx)(Oe, {
              children: (0, G.jsx)(`div`, {
                className: `px-4 py-12 text-center text-sm text-muted-foreground`,
                children: `No keybindings match your search.`,
              }),
            })),
      (e[61] = ce),
      (e[62] = B),
      (e[63] = we),
      (e[64] = k),
      (e[65] = Q))
    : (Q = e[65]);
  let $;
  e[66] !== Re || e[67] !== ze || e[68] !== Q
    ? (($ = (0, G.jsxs)(`div`, { inert: Re, className: `flex flex-col gap-8`, children: [ze, Q] })),
      (e[66] = Re),
      (e[67] = ze),
      (e[68] = Q),
      (e[69] = $))
    : ($ = e[69]);
  let Be;
  return (
    e[70] !== X || e[71] !== Z || e[72] !== $
      ? ((Be = (0, G.jsxs)(De, { children: [X, Z, $] })),
        (e[70] = X),
        (e[71] = Z),
        (e[72] = $),
        (e[73] = Be))
      : (Be = e[73]),
    Be
  );
}
function dt(e) {
  return e._tag === `Failure`;
}
function ft(e) {
  return L(e.environmentId, h);
}
function pt(e) {
  return e._tag === `Failure`;
}
function mt(e) {
  return L(e.environmentId, h);
}
function ht(e) {
  return e.hash.replace(/^#/, ``);
}
var gt = ut;
export { gt as component };
//# sourceMappingURL=_chat.settings.keybindings-DzLI7xgN.js.map
