import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { n as i } from "./users-CM0ubiXW.js";
import { f as a } from "./workflow-BDTBfiWX.js";
import { n as o, t as s } from "./triangle-alert-Ca4wixX0.js";
import { t as c } from "./cloud-H2DGA1t_.js";
import { t as l } from "./folder-git-2-CaBMup3m.js";
import { t as u } from "./refresh-cw-CKI8yyvS.js";
import { t as d } from "./trash-2-Dt6v2wPw.js";
import { Dr as f, Pb as p, R_ as m, Xl as h, iu as g, t as _ } from "./utils-CPoejuy5.js";
import { Y as v } from "./ChatMarkdown-BSLpN1nk.js";
import { a as y } from "./session-0UrRHIau.js";
import { t as b } from "./use-atom-command-DGAuqAck.js";
import { n as x } from "./localApi-CWy6n-K6.js";
import { i as S } from "./toast-B4KPIJDZ.js";
import { t as C } from "./toastHelpers-CSQRKo4F.js";
import { n as w } from "./vcs-DOY0Hs9B.js";
import { n as T } from "./pullRequestIcons-CfNS1kGB.js";
import { Sl as E } from "./main-BZa0O6xN.js";
import { d as ee, f as te, m as ne } from "./_chat-LvMSbSFt.js";
var D = e(t(), 1),
  O = n();
function re(e) {
  let t = e.sha.slice(0, 8);
  return e.threads.length === 0 ? t : `${t} (${e.threads.map((e) => v(e.id, e.title)).join(`, `)})`;
}
function k(e) {
  let t = [],
    n = new Set(e.map((e) => e.sha)),
    r = [],
    i = 0;
  for (let a of e) {
    let e = t.indexOf(a.sha),
      o = e !== -1;
    e === -1 && ((e = t.indexOf(null)), e === -1 && ((e = t.length), t.push(null)));
    let s = t.slice();
    for (; s.length <= e;) s.push(null);
    s[e] = a.sha;
    let c = [];
    for (let t = 0; t < s.length; t += 1) t !== e && s[t] !== null && c.push(t);
    for (; t.length <= e;) t.push(null);
    t[e] = null;
    let l = [];
    for (let [r, i] of a.parents.entries()) {
      if (!n.has(i)) continue;
      let a = t.indexOf(i);
      (a === -1 &&
        ((a = r === 0 && t[e] === null ? e : t.indexOf(null)),
        a === -1 ? ((a = t.length), t.push(i)) : (t[a] = i)),
        l.push({ sha: i, lane: a }));
    }
    ((i = Math.max(i, s.length, t.length)),
      r.push({ sha: a.sha, lane: e, lanesBefore: s, hasIncoming: o, through: c, parentLanes: l }));
  }
  return { rows: r, laneCount: i };
}
function ie(e) {
  return e.slice(0, 8);
}
function A(e, t, n) {
  if (t === null) return null;
  let r = e.findIndex((e) => e.sha === t);
  if (r === -1) return null;
  let i = n === null ? r : e.findIndex((e) => e.sha === n),
    a = i === -1 ? r : i,
    o = Math.min(r, a),
    s = Math.max(r, a),
    c = e.slice(o, s + 1),
    l = c[0],
    u = c[c.length - 1];
  return l === void 0 || u === void 0
    ? null
    : { shas: new Set(c.map((e) => e.sha)), top: l, bottom: u };
}
function j(e) {
  let t = e.top.sha === e.bottom.sha;
  return {
    from: e.bottom.parents[0] ?? `4b825dc642cb6eb9a060e54bf8d69288fbee4904`,
    to: e.top.sha,
    label: t ? ie(e.top.sha) : `${ie(e.bottom.sha)}..${ie(e.top.sha)}`,
  };
}
function M(e, t) {
  let n = [];
  for (let r of e) {
    let e = t?.shas.has(r.sha) ?? !1,
      i = n[n.length - 1];
    i !== void 0 && i.selected === e ? i.commits.push(r) : n.push({ selected: e, commits: [r] });
  }
  return n;
}
var N = e(r(), 1),
  P = 46,
  F = 14,
  I = 9,
  L = `2px solid color-mix(in oklab, var(--primary) 60%, transparent)`,
  R = [
    `oklch(0.63 0.09 250)`,
    `oklch(0.66 0.09 165)`,
    `oklch(0.71 0.09 80)`,
    `oklch(0.64 0.10 20)`,
    `oklch(0.63 0.09 300)`,
  ],
  z = [
    `oklch(0.68 0.13 250)`,
    `oklch(0.70 0.13 155)`,
    `oklch(0.74 0.13 80)`,
    `oklch(0.68 0.14 25)`,
  ];
function B(e, t) {
  return {
    repository: t,
    currentBranch: e.currentBranch ?? `HEAD`,
    ahead: 0,
    behind: 0,
    commits: e.commits.map((e) => ({
      sha: e.sha,
      subject: e.subject,
      parents: [...e.parents],
      author: e.authorName,
      authoredAt: p(e.authoredAt),
      refs: e.refs.map((e) => ({ kind: e.kind, name: e.name })),
      threadIds: [],
      turn: null,
      pullRequest: null,
    })),
    threads: [],
    worktrees: [],
    observedAt: new Date(),
  };
}
function V(e) {
  let t = (0, O.c)(8),
    n;
  t[0] === e.title
    ? (n = t[1])
    : ((n = (0, N.jsx)(`p`, {
        className: `text-xs font-medium text-foreground`,
        children: e.title,
      })),
      (t[0] = e.title),
      (t[1] = n));
  let r;
  t[2] === e.body
    ? (r = t[3])
    : ((r = (0, N.jsx)(`p`, {
        className: `max-w-[28ch] text-2xs text-muted-foreground`,
        children: e.body,
      })),
      (t[2] = e.body),
      (t[3] = r));
  let i;
  return (
    t[4] !== e.action || t[5] !== n || t[6] !== r
      ? ((i = (0, N.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-2 px-6 text-center`,
          children: [n, r, e.action],
        })),
        (t[4] = e.action),
        (t[5] = n),
        (t[6] = r),
        (t[7] = i))
      : (i = t[7]),
    i
  );
}
function H() {
  let e = (0, O.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, N.jsx)(`div`, {
          "aria-busy": `true`,
          "aria-label": `Loading commit graph`,
          className: `min-h-0 flex-1 overflow-hidden`,
          children: Array.from({ length: 9 }, U),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function U(e, t) {
  return (0, N.jsxs)(
    `div`,
    {
      className: `flex items-stretch gap-1 pr-2`,
      style: { height: P },
      children: [
        (0, N.jsx)(`div`, {
          className: `w-[80px] shrink-0 border-r border-border/40`,
          children: (0, N.jsx)(`div`, { className: `mt-3 ml-3 h-8 w-px bg-border/50` }),
        }),
        (0, N.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col justify-center gap-1.5`,
          children: [
            (0, N.jsx)(`div`, { className: `h-3 w-[62%] rounded-sm bg-muted/70` }),
            (0, N.jsx)(`div`, { className: `h-2.5 w-[40%] rounded-sm bg-muted/50` }),
          ],
        }),
      ],
    },
    t,
  );
}
function ae(e) {
  return new Intl.DateTimeFormat(void 0, {
    day: `2-digit`,
    month: `short`,
    year: `numeric`,
  }).format(e);
}
function oe(e) {
  let t = (0, O.c)(28),
    { row: n, laneCount: r, isTip: i } = e,
    a = 18 + Math.max(1, r) * F,
    o = P / 2,
    s = se,
    c = W,
    l = `0 0 ${a} ${P}`,
    u;
  t[0] !== n.hasIncoming || t[1] !== n.lane
    ? ((u = n.hasIncoming
        ? (0, N.jsx)(`line`, {
            x1: s(n.lane),
            y1: 0,
            x2: s(n.lane),
            y2: o,
            stroke: c(n.lane),
            strokeWidth: 1.75,
            strokeLinecap: `round`,
            opacity: 0.85,
          })
        : null),
      (t[0] = n.hasIncoming),
      (t[1] = n.lane),
      (t[2] = u))
    : (u = t[2]);
  let d;
  if (t[3] !== n.through) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) =>
          (0, N.jsx)(
            `line`,
            {
              x1: s(e),
              y1: 0,
              x2: s(e),
              y2: P,
              stroke: c(e),
              strokeWidth: 1.75,
              strokeLinecap: `round`,
              opacity: 0.6,
            },
            `through-${e}`,
          )),
        (t[5] = e))
      : (e = t[5]),
      (d = n.through.map(e)),
      (t[3] = n.through),
      (t[4] = d));
  } else d = t[4];
  let f;
  if (t[6] !== n.lane || t[7] !== n.parentLanes) {
    let e;
    (t[9] === n.lane
      ? (e = t[10])
      : ((e = (e) => {
          let t = s(n.lane),
            r = s(e.lane);
          return (0, N.jsx)(
            `path`,
            {
              d: t === r ? `M ${t} ${o} V ${P}` : `M ${t} ${o} C ${t} 32, ${r} 37, ${r} ${P}`,
              fill: `none`,
              stroke: c(e.lane),
              strokeWidth: 1.75,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              opacity: 0.85,
            },
            `parent-${e.sha}`,
          );
        }),
        (t[9] = n.lane),
        (t[10] = e)),
      (f = n.parentLanes.map(e)),
      (t[6] = n.lane),
      (t[7] = n.parentLanes),
      (t[8] = f));
  } else f = t[8];
  let p = s(n.lane),
    m = i ? 4.5 : 3.5,
    h;
  t[11] !== i || t[12] !== n.lane
    ? ((h = i ? c(n.lane) : `var(--background)`), (t[11] = i), (t[12] = n.lane), (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === n.lane ? (g = t[15]) : ((g = c(n.lane)), (t[14] = n.lane), (t[15] = g));
  let _;
  t[16] !== p || t[17] !== m || t[18] !== h || t[19] !== g
    ? ((_ = (0, N.jsx)(`circle`, { cx: p, cy: o, r: m, fill: h, stroke: g, strokeWidth: 2 })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== l || t[22] !== u || t[23] !== d || t[24] !== f || t[25] !== _ || t[26] !== a
      ? ((v = (0, N.jsxs)(`svg`, {
          "aria-hidden": !0,
          className: `pointer-events-none block shrink-0`,
          width: a,
          height: P,
          viewBox: l,
          children: [u, d, f, _],
        })),
        (t[21] = l),
        (t[22] = u),
        (t[23] = d),
        (t[24] = f),
        (t[25] = _),
        (t[26] = a),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function W(e) {
  return R[e % R.length];
}
function se(e) {
  return I + e * F;
}
function ce(e) {
  let t = (0, O.c)(11),
    { kind: n, name: r, current: o } = e,
    s = n === `tag` ? i : n === `remote` ? c : E,
    l =
      n === `tag`
        ? `border-warning/25 bg-warning/10 text-warning-foreground`
        : o
          ? `border-primary/25 bg-primary/10 text-primary`
          : n === `remote`
            ? `border-dashed border-border text-muted-foreground`
            : `border-border/70 bg-muted/60 text-muted-foreground`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = _(
        `inline-flex max-w-32 items-center gap-1 rounded-sm border px-1 py-px align-middle text-3xs leading-4 font-medium`,
        l,
      )),
      (t[0] = l),
      (t[1] = u));
  let d;
  t[2] !== s || t[3] !== n
    ? ((d =
        n === `head`
          ? (0, N.jsx)(a, { className: `size-2.5 shrink-0` })
          : (0, N.jsx)(s, { className: `size-2.5 shrink-0` })),
      (t[2] = s),
      (t[3] = n),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === r
    ? (f = t[6])
    : ((f = (0, N.jsx)(`span`, { className: `truncate`, children: r })), (t[5] = r), (t[6] = f));
  let p;
  return (
    t[7] !== u || t[8] !== d || t[9] !== f
      ? ((p = (0, N.jsxs)(`span`, { className: u, children: [d, f] })),
        (t[7] = u),
        (t[8] = d),
        (t[9] = f),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
function le(e) {
  let t = (0, O.c)(33),
    { thread: n, color: r, turn: i, active: a, onClick: o } = e,
    s = i === null ? n.title : `${n.title}, turn ${i}`,
    c = n.state === `running`,
    l;
  t[0] !== r || t[1] !== c
    ? ((l = c
        ? (0, N.jsx)(`span`, {
            className: `absolute -inset-0.5 rounded-full opacity-35`,
            style: { backgroundColor: r },
          })
        : null),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = !c && `border bg-transparent`,
    d;
  t[3] === u ? (d = t[4]) : ((d = _(`relative size-2 rounded-full`, u)), (t[3] = u), (t[4] = d));
  let f;
  t[5] !== r || t[6] !== c
    ? ((f = c ? { backgroundColor: r } : { borderColor: r }), (t[5] = r), (t[6] = c), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== d || t[9] !== f
    ? ((p = (0, N.jsx)(`span`, { className: d, style: f })), (t[8] = d), (t[9] = f), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== l || t[12] !== p
    ? ((m = (0, N.jsxs)(`span`, {
        "aria-hidden": !0,
        className: `relative flex size-2 shrink-0 items-center justify-center`,
        children: [l, p],
      })),
      (t[11] = l),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === n.title
    ? (h = t[15])
    : ((h = (0, N.jsx)(`span`, {
        className: `max-w-28 truncate @max-[20rem]/graph:hidden`,
        children: n.title,
      })),
      (t[14] = n.title),
      (t[15] = h));
  let g;
  t[16] === i
    ? (g = t[17])
    : ((g =
        i === null
          ? null
          : (0, N.jsxs)(`span`, {
              className: `shrink-0 tabular-nums opacity-65`,
              children: [`·`, i],
            })),
      (t[16] = i),
      (t[17] = g));
  let v;
  t[18] === c
    ? (v = t[19])
    : ((v = c ? (0, N.jsx)(`span`, { className: `sr-only`, children: `(running)` }) : null),
      (t[18] = c),
      (t[19] = v));
  let y;
  t[20] !== m || t[21] !== h || t[22] !== g || t[23] !== v
    ? ((y = (0, N.jsxs)(N.Fragment, { children: [m, h, g, v] })),
      (t[20] = m),
      (t[21] = h),
      (t[22] = g),
      (t[23] = v),
      (t[24] = y))
    : (y = t[24]);
  let b = y,
    x = a
      ? `border-primary/35 bg-primary/10 text-foreground`
      : `border-transparent bg-muted/70 text-muted-foreground`,
    S = o !== void 0 && `cursor-pointer hover:bg-accent hover:text-foreground`,
    C;
  t[25] !== x || t[26] !== S
    ? ((C = _(
        `inline-flex items-center gap-1 rounded-full border px-1.5 py-px text-3xs leading-4`,
        x,
        S,
      )),
      (t[25] = x),
      (t[26] = S),
      (t[27] = C))
    : (C = t[27]);
  let w = C,
    T;
  return (
    t[28] !== w || t[29] !== b || t[30] !== s || t[31] !== o
      ? ((T = o
          ? (0, N.jsx)(`button`, {
              type: `button`,
              "aria-label": s,
              className: w,
              onClick: o,
              children: b,
            })
          : (0, N.jsx)(`span`, { "aria-label": s, className: w, children: b })),
        (t[28] = w),
        (t[29] = b),
        (t[30] = s),
        (t[31] = o),
        (t[32] = T))
      : (T = t[32]),
    T
  );
}
function ue(e) {
  let t = (0, O.c)(12),
    { pullRequest: n, className: r } = e,
    i = n.state === `merged`,
    a = n.state === `draft`,
    o = i ? T.merged : a ? T.draft : T.pullRequest,
    s = i
      ? `border-primary/25 bg-primary/10 text-primary`
      : a
        ? `border-border bg-muted/60 text-muted-foreground`
        : `border-success/25 bg-success/10 text-success-foreground`,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = _(
        `inline-flex items-center gap-1 rounded-full border px-1.5 py-px text-3xs leading-4`,
        s,
        r,
      )),
      (t[0] = r),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === o
    ? (l = t[4])
    : ((l = (0, N.jsx)(o, { className: `size-2.5 shrink-0` })), (t[3] = o), (t[4] = l));
  let u = i ? `merged` : a ? `draft` : `open`,
    d;
  t[5] === u
    ? (d = t[6])
    : ((d = (0, N.jsxs)(`span`, { className: `sr-only`, children: [u, ` pull request`] })),
      (t[5] = u),
      (t[6] = d));
  let f;
  return (
    t[7] !== n.number || t[8] !== c || t[9] !== l || t[10] !== d
      ? ((f = (0, N.jsxs)(`span`, { className: c, children: [l, `#`, n.number, d] })),
        (t[7] = n.number),
        (t[8] = c),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function G(e) {
  let t = (0, O.c)(111),
    {
      commit: n,
      row: r,
      laneCount: i,
      isTip: a,
      isSelected: o,
      isDimmed: s,
      threadsById: c,
      threadColor: l,
      onSelect: u,
      onOpenDiff: d,
      uncommitted: f,
      onOpenWorkingTreeDiff: p,
      repositoryPath: m,
      onFilterThread: h,
      onOpenMenu: g,
    } = e,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    k,
    A,
    j,
    M,
    F,
    I,
    L,
    R,
    z;
  if (
    t[0] !== n ||
    t[1] !== s ||
    t[2] !== o ||
    t[3] !== a ||
    t[4] !== i ||
    t[5] !== h ||
    t[6] !== d ||
    t[7] !== g ||
    t[8] !== p ||
    t[9] !== u ||
    t[10] !== m ||
    t[11] !== r ||
    t[12] !== l ||
    t[13] !== c ||
    t[14] !== f
  ) {
    let e;
    t[34] === c ? (e = t[35]) : ((e = (e) => c.get(e)), (t[34] = c), (t[35] = e));
    let O = n.threadIds.map(e).filter(ye),
      B = O.slice(0, 2),
      V = O.length - B.length,
      H;
    t[36] === n.refs ? (H = t[37]) : ((H = n.refs.some(ve)), (t[36] = n.refs), (t[37] = H));
    let U = H;
    ((L = `option`),
      (R = o),
      (z = -1),
      (b = n.sha),
      (x = !0),
      (S = (e) => {
        ((e.dataTransfer.effectAllowed = `move`),
          e.dataTransfer.setData(`text/plain`, re({ ...n, threads: O })),
          m !== null &&
            m.trim().length > 0 &&
            e.dataTransfer.setData(
              ee,
              ne({
                sha: n.sha,
                subject: n.subject,
                repositoryPath: m.trim(),
                threadIds: O.map(_e),
              }),
            ),
          e.dataTransfer.setData(te, re({ sha: n.sha, threads: O.map(ge) })));
        let t = document.createElement(`div`);
        ((t.textContent = `${ie(n.sha)}  ${n.subject}`),
          Object.assign(t.style, {
            position: `fixed`,
            top: `-1000px`,
            left: `-1000px`,
            maxWidth: `300px`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
            padding: `6px 10px`,
            borderRadius: `8px`,
            border: `1px solid var(--border)`,
            background: `var(--popover)`,
            color: `var(--foreground)`,
            font: `500 12px/1.4 system-ui, sans-serif`,
            boxShadow: `0 8px 24px rgb(0 0 0 / 18%)`,
          }),
          document.body.append(t),
          e.dataTransfer.setDragImage(t, 14, 14),
          window.setTimeout(() => t.remove(), 0));
      }),
      (C = u),
      t[38] === d ? (w = t[39]) : ((w = () => d()), (t[38] = d), (t[39] = w)),
      t[40] !== n || t[41] !== g
        ? ((T = (e) => {
            (e.preventDefault(), g(n, { x: e.clientX, y: e.clientY }));
          }),
          (t[40] = n),
          (t[41] = g),
          (t[42] = T))
        : (T = t[42]));
    let W = o ? `bg-primary/10` : `hover:bg-accent/35`,
      se = s && `opacity-35`;
    (t[43] !== W || t[44] !== se
      ? ((E = _(`group relative flex cursor-default select-none items-stretch gap-1 pr-2`, W, se)),
        (t[43] = W),
        (t[44] = se),
        (t[45] = E))
      : (E = t[45]),
      t[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = { height: P }), (t[46] = D))
        : (D = t[46]),
      t[47] !== a || t[48] !== i || t[49] !== r
        ? ((k = (0, N.jsx)(`div`, {
            className: `shrink-0 border-r border-border/40`,
            children: (0, N.jsx)(oe, { row: r, laneCount: i, isTip: a }),
          })),
          (t[47] = a),
          (t[48] = i),
          (t[49] = r),
          (t[50] = k))
        : (k = t[50]),
      (F = `flex min-w-0 flex-1 flex-col justify-center py-1`));
    let G;
    t[51] === U
      ? (G = t[52])
      : ((G = U
          ? (0, N.jsx)(ce, {
              kind: `head`,
              name: `HEAD`,
              current: !0,
              className: `@max-[26rem]/graph:hidden`,
            })
          : null),
        (t[51] = U),
        (t[52] = G));
    let be;
    t[53] !== U || t[54] !== p || t[55] !== f
      ? ((be =
          U && f !== null
            ? (0, N.jsxs)(`button`, {
                type: `button`,
                "aria-label": `Open ${f.changedFiles} uncommitted changes`,
                title: `${f.changedFiles} uncommitted path(s), +${f.additions} -${f.deletions}`,
                onClick: (e) => {
                  (e.stopPropagation(), p());
                },
                className: `inline-flex shrink-0 items-center gap-1 rounded-sm border border-warning/25 bg-warning/10 px-1 py-px text-3xs leading-4 font-medium text-warning-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
                children: [
                  (0, N.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `size-1.5 rounded-full bg-warning`,
                  }),
                  f.changedFiles,
                  ` uncommitted`,
                ],
              })
            : null),
        (t[53] = U),
        (t[54] = p),
        (t[55] = f),
        (t[56] = be))
      : (be = t[56]);
    let K;
    t[57] === n.refs
      ? (K = t[58])
      : ((K = n.refs.filter(he).slice(0, 2).map(me)), (t[57] = n.refs), (t[58] = K));
    let q;
    t[59] === n.refs
      ? (q = t[60])
      : ((q =
          n.refs.filter(pe).length > 2
            ? (0, N.jsxs)(`span`, {
                className: `shrink-0 rounded-sm border border-border/70 bg-muted/60 px-1 text-3xs leading-4 text-muted-foreground`,
                children: [`+`, n.refs.filter(fe).length - 2],
              })
            : null),
        (t[59] = n.refs),
        (t[60] = q));
    let xe = o ? `text-foreground` : `text-foreground/90`,
      J;
    t[61] === xe
      ? (J = t[62])
      : ((J = _(`min-w-0 flex-1 truncate text-xs leading-4`, xe)), (t[61] = xe), (t[62] = J));
    let Y;
    t[63] !== n.subject || t[64] !== J
      ? ((Y = (0, N.jsx)(`span`, { className: J, children: n.subject })),
        (t[63] = n.subject),
        (t[64] = J),
        (t[65] = Y))
      : (Y = t[65]);
    let X;
    (t[66] === n.pullRequest
      ? (X = t[67])
      : ((X = n.pullRequest
          ? (0, N.jsx)(ue, { pullRequest: n.pullRequest, className: `@max-[26rem]/graph:hidden` })
          : null),
        (t[66] = n.pullRequest),
        (t[67] = X)),
      t[68] !== G || t[69] !== be || t[70] !== K || t[71] !== q || t[72] !== Y || t[73] !== X
        ? ((I = (0, N.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1.5`,
            children: [G, be, K, q, Y, X],
          })),
          (t[68] = G),
          (t[69] = be),
          (t[70] = K),
          (t[71] = q),
          (t[72] = Y),
          (t[73] = X),
          (t[74] = I))
        : (I = t[74]),
      (v = `mt-0.5 flex min-w-0 items-center gap-1.5 text-3xs leading-3.5 text-muted-foreground`));
    let Z;
    (t[75] === n.sha ? (Z = t[76]) : ((Z = n.sha.slice(0, 8)), (t[75] = n.sha), (t[76] = Z)),
      t[77] === Z
        ? (y = t[78])
        : ((y = (0, N.jsx)(`span`, {
            className: `shrink-0 font-mono text-3xs text-muted-foreground/80`,
            children: Z,
          })),
          (t[77] = Z),
          (t[78] = y)));
    let Q;
    (t[79] === n.author
      ? (Q = t[80])
      : ((Q = n.author.split(` `)), (t[79] = n.author), (t[80] = Q)),
      t[81] === Q[0]
        ? (A = t[82])
        : ((A = (0, N.jsx)(`span`, {
            className: `hidden shrink-0 @[26rem]/graph:inline`,
            children: Q[0],
          })),
          (t[81] = Q[0]),
          (t[82] = A)));
    let $;
    (t[83] === n.authoredAt
      ? ($ = t[84])
      : (($ = ae(n.authoredAt)), (t[83] = n.authoredAt), (t[84] = $)),
      t[85] === $
        ? (j = t[86])
        : ((j = (0, N.jsx)(`span`, { className: `shrink-0 tabular-nums`, children: $ })),
          (t[85] = $),
          (t[86] = j)),
      (M =
        O.length > 0
          ? (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(`span`, { "aria-hidden": !0, children: `·` }),
                n.turn === null
                  ? (0, N.jsxs)(`span`, {
                      className: `flex shrink-0 items-center -space-x-0.5`,
                      "aria-label": `Touched by ${O.map(de).join(`, `)}`,
                      children: [
                        O.slice(0, 3).map((e) =>
                          (0, N.jsx)(
                            `span`,
                            {
                              className: `size-2 rounded-full ring-2 ring-background`,
                              style: { backgroundColor: l(e.id) },
                            },
                            e.id,
                          ),
                        ),
                        O.length > 3
                          ? (0, N.jsxs)(`span`, {
                              className: `pl-1 text-3xs tabular-nums`,
                              children: [`+`, O.length - 3],
                            })
                          : null,
                      ],
                    })
                  : (0, N.jsxs)(N.Fragment, {
                      children: [
                        B.map((e) =>
                          (0, N.jsx)(
                            le,
                            {
                              thread: e,
                              color: l(e.id),
                              turn: e.id === n.threadIds[0] ? n.turn : null,
                              active: !1,
                              onClick: () => h(e.id),
                            },
                            e.id,
                          ),
                        ),
                        V > 0
                          ? (0, N.jsxs)(`span`, {
                              className: `shrink-0 rounded-full bg-muted/70 px-1.5 py-px text-3xs`,
                              children: [`+`, V],
                            })
                          : null,
                      ],
                    }),
              ],
            })
          : null),
      (t[0] = n),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a),
      (t[4] = i),
      (t[5] = h),
      (t[6] = d),
      (t[7] = g),
      (t[8] = p),
      (t[9] = u),
      (t[10] = m),
      (t[11] = r),
      (t[12] = l),
      (t[13] = c),
      (t[14] = f),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D),
      (t[25] = k),
      (t[26] = A),
      (t[27] = j),
      (t[28] = M),
      (t[29] = F),
      (t[30] = I),
      (t[31] = L),
      (t[32] = R),
      (t[33] = z));
  } else
    ((v = t[15]),
      (y = t[16]),
      (b = t[17]),
      (x = t[18]),
      (S = t[19]),
      (C = t[20]),
      (w = t[21]),
      (T = t[22]),
      (E = t[23]),
      (D = t[24]),
      (k = t[25]),
      (A = t[26]),
      (j = t[27]),
      (M = t[28]),
      (F = t[29]),
      (I = t[30]),
      (L = t[31]),
      (R = t[32]),
      (z = t[33]));
  let B;
  t[87] !== v || t[88] !== y || t[89] !== A || t[90] !== j || t[91] !== M
    ? ((B = (0, N.jsxs)(`div`, { className: v, children: [y, A, j, M] })),
      (t[87] = v),
      (t[88] = y),
      (t[89] = A),
      (t[90] = j),
      (t[91] = M),
      (t[92] = B))
    : (B = t[92]);
  let V;
  t[93] !== B || t[94] !== F || t[95] !== I
    ? ((V = (0, N.jsxs)(`div`, { className: F, children: [I, B] })),
      (t[93] = B),
      (t[94] = F),
      (t[95] = I),
      (t[96] = V))
    : (V = t[96]);
  let H;
  return (
    t[97] !== b ||
    t[98] !== x ||
    t[99] !== S ||
    t[100] !== C ||
    t[101] !== w ||
    t[102] !== T ||
    t[103] !== E ||
    t[104] !== D ||
    t[105] !== k ||
    t[106] !== V ||
    t[107] !== L ||
    t[108] !== R ||
    t[109] !== z
      ? ((H = (0, N.jsxs)(`div`, {
          role: L,
          "aria-selected": R,
          tabIndex: z,
          "data-sha": b,
          draggable: x,
          onDragStart: S,
          onClick: C,
          onDoubleClick: w,
          onContextMenu: T,
          className: E,
          style: D,
          children: [k, V],
        })),
        (t[97] = b),
        (t[98] = x),
        (t[99] = S),
        (t[100] = C),
        (t[101] = w),
        (t[102] = T),
        (t[103] = E),
        (t[104] = D),
        (t[105] = k),
        (t[106] = V),
        (t[107] = L),
        (t[108] = R),
        (t[109] = z),
        (t[110] = H))
      : (H = t[110]),
    H
  );
}
function de(e) {
  return e.title;
}
function fe(e) {
  return e.kind !== `head`;
}
function pe(e) {
  return e.kind !== `head`;
}
function me(e) {
  return (0, N.jsx)(
    ce,
    { kind: e.kind, name: e.name, current: e.kind === `branch` && e.name === `main` },
    `${e.kind}-${e.name}`,
  );
}
function he(e) {
  return e.kind !== `head`;
}
function ge(e) {
  return { id: e.id, title: e.title };
}
function _e(e) {
  return e.id;
}
function ve(e) {
  return e.kind === `head`;
}
function ye(e) {
  return e !== void 0;
}
function be(e) {
  let t = (0, O.c)(32),
    {
      worktree: n,
      thread: r,
      threadColor: i,
      confirming: a,
      onAskRemove: o,
      onCancelRemove: s,
    } = e,
    c = !n.managed || r?.state === `running`,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, N.jsx)(`span`, {
        className: `mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm border border-border/60 bg-muted/40 text-muted-foreground`,
        children: (0, N.jsx)(l, { className: `size-3.5` }),
      })),
      (t[0] = u))
    : (u = t[0]);
  let p;
  t[1] === n.branch
    ? (p = t[2])
    : ((p = (0, N.jsx)(`span`, {
        className: `truncate text-xs font-medium text-foreground`,
        children: n.branch,
      })),
      (t[1] = n.branch),
      (t[2] = p));
  let m = n.managed ? `managed` : `main checkout`,
    h;
  t[3] === m
    ? (h = t[4])
    : ((h = (0, N.jsx)(`span`, {
        className: `shrink-0 rounded-sm border border-border/60 px-1 text-4xs leading-4 text-muted-foreground`,
        children: m,
      })),
      (t[3] = m),
      (t[4] = h));
  let g;
  t[5] === n.dirty
    ? (g = t[6])
    : ((g = n.dirty
        ? (0, N.jsxs)(`span`, {
            className: `inline-flex shrink-0 items-center gap-1 text-3xs text-warning-foreground`,
            children: [
              (0, N.jsx)(`span`, { className: `size-1.5 rounded-full bg-warning` }),
              ` dirty`,
            ],
          })
        : null),
      (t[5] = n.dirty),
      (t[6] = g));
  let v;
  t[7] === n.stale
    ? (v = t[8])
    : ((v = n.stale
        ? (0, N.jsx)(`span`, {
            className: `shrink-0 text-3xs text-muted-foreground`,
            children: `no thread`,
          })
        : null),
      (t[7] = n.stale),
      (t[8] = v));
  let y;
  t[9] !== p || t[10] !== h || t[11] !== g || t[12] !== v
    ? ((y = (0, N.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [p, h, g, v],
      })),
      (t[9] = p),
      (t[10] = h),
      (t[11] = g),
      (t[12] = v),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] === n.path
    ? (b = t[15])
    : ((b = (0, N.jsx)(`div`, {
        className: `mt-0.5 truncate font-mono text-3xs text-muted-foreground/80`,
        children: n.path,
      })),
      (t[14] = n.path),
      (t[15] = b));
  let x;
  t[16] !== r || t[17] !== i
    ? ((x = r
        ? (0, N.jsx)(`div`, {
            className: `mt-1 flex items-center gap-1.5`,
            children: (0, N.jsx)(le, { thread: r, color: i, turn: null, active: !1 }),
          })
        : null),
      (t[16] = r),
      (t[17] = i),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] !== y || t[20] !== b || t[21] !== x
    ? ((S = (0, N.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [y, b, x] })),
      (t[19] = y),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== c || t[24] !== a || t[25] !== o || t[26] !== s || t[27] !== n.branch
    ? ((C = a
        ? (0, N.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-1`,
            children: [
              (0, N.jsxs)(f, {
                variant: `destructive`,
                size: `xs`,
                onClick: o,
                children: [(0, N.jsx)(d, {}), ` Remove`],
              }),
              (0, N.jsx)(f, { variant: `ghost-muted`, size: `xs`, onClick: s, children: `Cancel` }),
            ],
          })
        : (0, N.jsx)(`span`, {
            className: _(
              `shrink-0`,
              !c && `opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100`,
            ),
            children: (0, N.jsx)(f, {
              variant: `ghost-destructive`,
              size: `icon-xs`,
              "aria-label": `Remove ${n.branch}`,
              disabled: c,
              onClick: o,
              children: (0, N.jsx)(d, {}),
            }),
          })),
      (t[23] = c),
      (t[24] = a),
      (t[25] = o),
      (t[26] = s),
      (t[27] = n.branch),
      (t[28] = C))
    : (C = t[28]);
  let w;
  return (
    t[29] !== C || t[30] !== S
      ? ((w = (0, N.jsx)(`div`, {
          className: `group border-b border-border/40 px-3 py-2.5 last:border-b-0 hover:bg-accent/25`,
          children: (0, N.jsxs)(`div`, {
            className: `flex items-start gap-2`,
            children: [u, S, C],
          }),
        })),
        (t[29] = C),
        (t[30] = S),
        (t[31] = w))
      : (w = t[31]),
    w
  );
}
function K(e) {
  let [t, n] = (0, D.useState)(null),
    [r, i] = (0, D.useState)(null),
    [l, d] = (0, D.useState)(!0),
    [p, v] = (0, D.useState)(null),
    [T, ee] = (0, D.useState)(0),
    [te, ne] = (0, D.useState)(120),
    [O, re] = (0, D.useState)(!1),
    [ie, P] = (0, D.useState)(`graph`),
    [F, I] = (0, D.useState)(!0),
    [R, U] = (0, D.useState)(null),
    [ae, oe] = (0, D.useState)(null),
    [W, se] = (0, D.useState)(null),
    [ce, ue] = (0, D.useState)(null),
    [de, fe] = (0, D.useState)(null),
    pe = (0, D.useRef)(null),
    me = b(w.logGraph, { reportFailure: !1 }),
    he = b(w.switchRef, { reportFailure: !1 }),
    ge = y(e.environmentId, m),
    _e = (0, D.useRef)(me);
  ((_e.current = me),
    (0, D.useEffect)(() => {
      let t = e.cwd;
      if (t === null) {
        (d(!1), n(null));
        return;
      }
      let r = !1,
        a = null,
        o = (s) => {
          (re(!0),
            v(null),
            _e
              .current({
                environmentId: e.environmentId,
                input: { cwd: t, limit: te, includeRemotes: F },
              })
              .then((e) => {
                r ||
                  (e._tag === `Success`
                    ? (n(e.value), i(e.value.workingTree ?? null), d(!1), re(!1))
                    : s < 3
                      ? (a = window.setTimeout(() => o(s + 1), 350 * s))
                      : (n(null), v(`Could not read this repository's history.`), d(!1), re(!1)));
              }));
        };
      return (
        o(1),
        () => {
          ((r = !0), a !== null && window.clearTimeout(a));
        }
      );
    }, [e.cwd, e.environmentId, te, T, F]));
  let ve = t === null ? null : B(t, e.repositoryLabel ?? ``),
    ye = ve?.commits ?? [],
    K = ve?.threads ?? [],
    q = ve?.worktrees ?? [],
    xe = ve?.currentBranch ?? `HEAD`,
    J = q.length > 0;
  (0, D.useEffect)(
    () => () => {
      pe.current !== null && window.clearTimeout(pe.current);
    },
    [],
  );
  let Y = (e) => {
      (fe(e),
        pe.current !== null && window.clearTimeout(pe.current),
        (pe.current = window.setTimeout(() => fe(null), 3e3)));
    },
    X = new Map(K.map((e) => [e.id, e])),
    Z = (e) => {
      let t = K.findIndex((t) => t.id === e);
      return z[(t < 0 ? 0 : t) % z.length];
    },
    Q = ye,
    $ = k(Q.map(({ sha: e, parents: t }) => ({ sha: e, parents: t }))),
    Se = new Map($.rows.map((e) => [e.sha, e])),
    Ce = A(Q, R, ae),
    we = (e, t) => {
      ((t && R !== null) || U(e), oe(e));
    },
    Te = (t) => {
      let n =
        (Ce?.shas.has(t.sha) ?? !1) && Ce !== null
          ? Ce
          : { top: t, bottom: t, shas: new Set([t.sha]) };
      e.onOpenCommitDiff(j(n));
    },
    Ee = new Set(Q.filter((e) => e.refs.length > 0).map((e) => e.sha)),
    De = (e) => {
      (se(e), Ne());
    },
    Oe = K.filter((e) => e.state === `running`).length,
    ke = async (e, t) => {
      try {
        (await Promise.race([
          navigator.clipboard.writeText(e),
          new Promise((e, t) => window.setTimeout(() => t(Error(`timeout`)), 1500)),
        ]),
          Y(`${t} copied`));
        return;
      } catch {}
      let n = document.createElement(`textarea`);
      ((n.value = e),
        n.setAttribute(`readonly`, ``),
        (n.style.position = `fixed`),
        (n.style.opacity = `0`),
        document.body.append(n),
        n.select());
      let r = document.execCommand(`copy`);
      (n.remove(), Y(r ? `${t} copied` : `Could not copy to the clipboard`));
    },
    Ae = async (t) => {
      let n = e.cwd;
      if (n === null) return;
      let r = await he({ environmentId: e.environmentId, input: { cwd: n, refName: t } });
      if (r._tag === `Success`) {
        (Y(`Checked out ${r.value.refName ?? t}`), ee((e) => e + 1));
        return;
      }
      if (h(r)) return;
      let i = g(r);
      S.add(
        C({
          type: `error`,
          title: `Could not check out ${t}.`,
          description: i instanceof Error ? i.message : `An error occurred.`,
        }),
      );
    },
    je = async (e, t) => {
      let n = Ce?.shas.has(e.sha) ?? !1;
      n || (U(e.sha), oe(e.sha));
      let r = x();
      if (!r) return;
      let i = n && Ce !== null ? Ce : { top: e, bottom: e, shas: new Set([e.sha]) },
        a = j(i),
        o =
          i.top.sha === i.bottom.sha
            ? `Open diff ${a.label}`
            : `Open diff ${a.label} (${i.shas.size} commits)`,
        s = e.threadIds[0] ? X.get(e.threadIds[0]) : void 0,
        c = e.refs.find((e) => e.kind === `branch`),
        l = c ?? e.refs.find((e) => e.kind === `remote`),
        u = l !== void 0 && l.name === xe,
        d = [
          { id: `open-diff`, label: o },
          { id: `copy-sha`, label: `Copy SHA` },
          { id: `copy-subject`, label: `Copy subject` },
          {
            id: `filter-thread`,
            disabled: s === void 0,
            label: `Filter by thread`,
            separatorBefore: !0,
          },
          {
            id: `checkout`,
            disabled: l === void 0 || u || !ge,
            label:
              l === void 0 ? `Checkout` : u ? `${l.name} is checked out` : `Checkout ${l.name}`,
            separatorBefore: !0,
          },
          { id: `create-branch`, label: `Create branch here` },
        ];
      switch (
        (c && d.push({ id: `rename-branch`, label: `Rename ${c.name}…` }),
        d.push({ id: `cherry-pick`, label: `Cherry-pick onto current branch` }),
        await r.contextMenu.show(d, t))
      ) {
        case `open-diff`:
          Te(e);
          break;
        case `copy-sha`:
          await ke(e.sha, `SHA`);
          break;
        case `copy-subject`:
          await ke(e.subject, `Subject`);
          break;
        case `filter-thread`:
          s && De(W === s.id ? null : s.id);
          break;
        case `checkout`:
          l && (await Ae(l.name));
          break;
        case `create-branch`:
          Y(`Create branch is not wired yet`);
          break;
        case `rename-branch`:
          Y(`Rename branch is not wired yet`);
          break;
        case `cherry-pick`:
          Y(`Cherry-pick is not wired yet`);
      }
    },
    Me = (e) => {
      let t = Q.findIndex((e) => e.sha === ae),
        n = t === -1 ? (e === 1 ? 0 : Q.length - 1) : Math.min(Q.length - 1, Math.max(0, t + e)),
        r = Q[n];
      r &&
        (U(r.sha),
        oe(r.sha),
        document.querySelector(`[data-sha="${r.sha}"]`)?.scrollIntoView({ block: `nearest` }));
    },
    Ne = () => {
      (U(null), oe(null));
    };
  return (0, N.jsxs)(`div`, {
    className: `@container/graph flex h-full min-w-0 flex-col overflow-x-hidden bg-background`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/60 px-2`,
        children: [
          J
            ? (0, N.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Repository view`,
                className: `inline-flex items-center gap-0.5 rounded-(--control-radius) bg-muted/60 p-0.5`,
                children: [
                  { id: `graph`, label: `Graph`, count: Q.length },
                  { id: `worktrees`, label: `Worktrees`, count: q.length },
                ].map((e) =>
                  (0, N.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": ie === e.id,
                      onClick: () => P(e.id),
                      className: _(
                        `inline-flex h-6 items-center gap-1.5 rounded-sm px-2 text-2xs font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none`,
                        ie === e.id
                          ? `bg-background text-foreground shadow-xs`
                          : `text-muted-foreground hover:text-foreground`,
                      ),
                      children: [
                        e.label,
                        (0, N.jsx)(`span`, {
                          className: `text-3xs tabular-nums opacity-60 @max-[26rem]/graph:hidden`,
                          children: e.count,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              })
            : (0, N.jsx)(`span`, {
                className: `px-1 text-2xs font-medium text-foreground`,
                children: `Graph`,
              }),
          (0, N.jsxs)(`div`, {
            className: `flex items-center gap-0.5`,
            children: [
              (0, N.jsx)(f, {
                variant: F ? `secondary` : `ghost-muted`,
                size: `icon-sm`,
                "aria-pressed": F,
                "aria-label": F ? `Hide remote branches` : `Show remote branches`,
                onClick: () => I((e) => !e),
                children: (0, N.jsx)(c, {}),
              }),
              (0, N.jsx)(f, {
                variant: `ghost-muted`,
                size: `icon-sm`,
                "aria-label": `Refresh graph`,
                children: (0, N.jsx)(u, {}),
              }),
            ],
          }),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: `flex h-8 shrink-0 items-center gap-1.5 border-b border-border/40 px-2 text-2xs text-muted-foreground`,
        children: [
          (0, N.jsx)(E, { className: `size-3 shrink-0` }),
          (0, N.jsx)(`span`, { className: `font-medium text-foreground`, children: xe }),
          (0, N.jsx)(`span`, {
            className: `min-w-0 shrink truncate opacity-70 @max-[26rem]/graph:hidden`,
            children: e.repositoryLabel ?? ``,
          }),
        ],
      }),
      e.cwd === null
        ? (0, N.jsx)(V, {
            title: `No repository`,
            body: `Open a project to browse its commit history.`,
          })
        : l
          ? (0, N.jsx)(H, {})
          : p === null
            ? t !== null && !t.isRepo
              ? (0, N.jsx)(V, {
                  title: `Not a Git repository`,
                  body: `This project has no Git history to show.`,
                })
              : ie === `graph` || !J
                ? (0, N.jsxs)(N.Fragment, {
                    children: [
                      K.length > 0
                        ? (0, N.jsxs)(`div`, {
                            className: `flex h-9 shrink-0 items-center gap-1 overflow-x-auto border-b border-border/40 px-2 [mask-image:linear-gradient(to_right,black_92%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
                            children: [
                              (0, N.jsx)(`button`, {
                                type: `button`,
                                "aria-pressed": W === null,
                                onClick: () => De(null),
                                className: _(
                                  `inline-flex h-5 shrink-0 items-center rounded-full border px-2 text-3xs`,
                                  W === null
                                    ? `border-primary/35 bg-primary/10 text-foreground`
                                    : `border-transparent bg-muted/60 text-muted-foreground hover:text-foreground`,
                                ),
                                children: `All threads`,
                              }),
                              K.map((e) =>
                                (0, N.jsx)(
                                  le,
                                  {
                                    thread: e,
                                    color: Z(e.id),
                                    turn: null,
                                    active: W === e.id,
                                    onClick: () => De(W === e.id ? null : e.id),
                                  },
                                  e.id,
                                ),
                              ),
                            ],
                          })
                        : null,
                      (0, N.jsxs)(`div`, {
                        role: `listbox`,
                        "aria-label": `Commits`,
                        tabIndex: 0,
                        onScroll: (e) => {
                          if (O || !t?.truncated) return;
                          let n = e.currentTarget;
                          n.scrollTop + n.clientHeight < n.scrollHeight - 240 ||
                            ne((e) => Math.min(e + 120, 1e3));
                        },
                        onKeyDown: (e) => {
                          if (e.key === `ArrowDown`) (e.preventDefault(), Me(1));
                          else if (e.key === `ArrowUp`) (e.preventDefault(), Me(-1));
                          else if (e.key === `Escape`) Ne();
                          else if (
                            R !== null &&
                            (e.key === `ContextMenu` || (e.shiftKey && e.key === `F10`))
                          ) {
                            let t = Q.find((e) => e.sha === R),
                              n = document.querySelector(`[data-sha="${R}"]`);
                            if (t && n) {
                              e.preventDefault();
                              let r = n.getBoundingClientRect();
                              je(t, { x: r.left + 32, y: r.top + r.height / 2 });
                            }
                          }
                        },
                        className: `min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable] focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset focus-visible:outline-none`,
                        children: [
                          M(Q, Ce).map((t) => {
                            let n = t.commits.map((n) => {
                                let i = Se.get(n.sha);
                                if (!i) return null;
                                let a = W === null || n.threadIds.includes(W);
                                return (0, N.jsx)(
                                  G,
                                  {
                                    commit: n,
                                    row: i,
                                    laneCount: $.laneCount,
                                    isTip: Ee.has(n.sha),
                                    isSelected: t.selected,
                                    isDimmed: !a,
                                    threadsById: X,
                                    threadColor: Z,
                                    onSelect: (e) =>
                                      we(n.sha, e.shiftKey || e.metaKey || e.ctrlKey),
                                    onOpenDiff: () => Te(n),
                                    uncommitted: r,
                                    onOpenWorkingTreeDiff: e.onOpenWorkingTreeDiff,
                                    repositoryPath: e.cwd,
                                    onFilterThread: (e) => De(W === e ? null : e),
                                    onOpenMenu: (e, t) => {
                                      je(e, t);
                                    },
                                  },
                                  n.sha,
                                );
                              }),
                              i = t.commits[0];
                            return !t.selected || i === void 0
                              ? (0, N.jsx)(D.Fragment, { children: n }, `run:${i?.sha ?? `end`}`)
                              : (0, N.jsx)(
                                  `div`,
                                  {
                                    className: `bg-primary/10`,
                                    style: { outline: L, outlineOffset: -2 },
                                    children: n,
                                  },
                                  `selected:${i.sha}`,
                                );
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex items-center gap-2 px-3 py-3 text-3xs text-muted-foreground/70`,
                            children: [
                              (0, N.jsx)(a, { className: `size-3` }),
                              O
                                ? `Loading more commits…`
                                : t?.truncated
                                  ? `Scroll for more commits`
                                  : `End of history`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, N.jsxs)(`div`, {
                    className: `min-h-0 flex-1 overflow-y-auto`,
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `flex h-8 items-center justify-between border-b border-border/40 px-3 text-3xs text-muted-foreground`,
                        children: [
                          (0, N.jsxs)(`span`, {
                            children: [
                              q.length,
                              ` checkouts ·`,
                              ` `,
                              q.filter((e) => e.managed).length,
                              ` managed`,
                            ],
                          }),
                          (0, N.jsxs)(`span`, {
                            className: `inline-flex items-center gap-1`,
                            children: [
                              (0, N.jsx)(s, { className: `size-3 text-warning-foreground` }),
                              Oe,
                              ` running`,
                            ],
                          }),
                        ],
                      }),
                      q.map((e) => {
                        let t = e.threadId ? (X.get(e.threadId) ?? null) : null;
                        return (0, N.jsx)(
                          be,
                          {
                            worktree: e,
                            thread: t,
                            threadColor: t ? Z(t.id) : z[0],
                            confirming: ce === e.path,
                            onAskRemove: () => ue(e.path),
                            onCancelRemove: () => ue(null),
                          },
                          e.path,
                        );
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `m-3 flex items-start gap-2 rounded-(--control-radius) border border-border/60 bg-muted/30 p-2.5 text-2xs leading-4 text-muted-foreground`,
                        children: [
                          (0, N.jsx)(o, { className: `mt-px size-3.5 shrink-0` }),
                          (0, N.jsx)(`span`, {
                            children: `Removing a checkout keeps its branch, commits, and thread history. A thread that still uses it recreates it on the next turn. Checkouts with a running thread cannot be removed.`,
                          }),
                        ],
                      }),
                    ],
                  })
            : (0, N.jsx)(V, {
                title: `Could not load the graph`,
                body: p,
                action: (0, N.jsx)(f, {
                  size: `sm`,
                  variant: `outline`,
                  onClick: () => ee((e) => e + 1),
                  children: `Retry`,
                }),
              }),
      (0, N.jsxs)(`div`, {
        className: `flex h-7 shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap border-t border-border/50 px-2 text-3xs text-muted-foreground`,
        children: [
          (0, N.jsxs)(`span`, {
            className: `inline-flex items-center gap-1`,
            children: [
              (0, N.jsx)(`span`, { className: `size-1.5 rounded-full bg-success` }),
              `live`,
            ],
          }),
          (0, N.jsx)(`span`, {
            "aria-hidden": !0,
            className: `@max-[26rem]/graph:hidden`,
            children: `·`,
          }),
          (0, N.jsxs)(`span`, {
            className: `@max-[26rem]/graph:hidden`,
            children: [Q.length, ` commits`],
          }),
          K.length > 0
            ? (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `@max-[26rem]/graph:hidden`,
                    children: `·`,
                  }),
                  (0, N.jsxs)(`span`, {
                    className: `@max-[26rem]/graph:hidden`,
                    children: [K.length, ` threads`],
                  }),
                ],
              })
            : null,
          (0, N.jsx)(`span`, {
            className: _(
              `ml-auto min-w-0 truncate`,
              de === null ? `opacity-70` : `font-medium text-foreground`,
            ),
            children: de ?? `git log --topo-order`,
          }),
        ],
      }),
    ],
  });
}
export { K as GitGraphPanel };
//# sourceMappingURL=GitGraphPanel-DwixVKkb.js.map
