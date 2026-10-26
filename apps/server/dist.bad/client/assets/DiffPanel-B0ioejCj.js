import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./arrow-right-JFWisfUC.js";
import { n as s } from "./workflow-BDTBfiWX.js";
import { n as c } from "./triangle-alert-Ca4wixX0.js";
import { n as l, r as u, t as d } from "./rows-3-Dbn401hK.js";
import { t as f } from "./folder-tree-B14jOoVx.js";
import {
  A as p,
  Ay as m,
  Bn as h,
  Cv as g,
  Dr as _,
  Gl as v,
  Iu as y,
  Lc as b,
  Lf as x,
  Lp as S,
  Mc as C,
  N as ee,
  Ob as w,
  Qn as T,
  S_ as E,
  Ul as te,
  Vf as D,
  Vl as O,
  Vn as k,
  Wl as A,
  Wn as j,
  Xl as ne,
  ar as re,
  dr as ie,
  du as M,
  fr as ae,
  ir as oe,
  iu as se,
  jc as ce,
  mr as le,
  nx as ue,
  op as de,
  or as fe,
  ox as pe,
  pr as me,
  t as he,
  tS as ge,
  z as N,
  zf as _e,
} from "./utils-CPoejuy5.js";
import { D as ve, j as ye, w as be } from "./entities-CgVpsCCl.js";
import { t as P } from "./runtime-CY2dlMEg.js";
import "./errors-CNOtAr8A.js";
import { n as xe, t as Se } from "./MorphIcon-DCVwjy7i.js";
import { a as Ce, i as we, n as Te, r as Ee, t as De } from "./DiffFileTree-DBOPPWQw.js";
import { n as Oe } from "./filesystem-DxEoLhpA.js";
import { G as ke, c as F, l as Ae } from "./useSettings-N-JG2LFZ.js";
import { m as je } from "./server-3D32GveR.js";
import { n as Me } from "./query-LKSVgBQH.js";
import { t as Ne } from "./use-atom-command-DGAuqAck.js";
import {
  B as Pe,
  F as Fe,
  I as Ie,
  L as Le,
  R as Re,
  V as ze,
} from "./useTimelineFollow-a8NU2yzT.js";
import { a as Be, g as I } from "./toast-B4KPIJDZ.js";
import { t as Ve } from "./useStableCallback-XvXMCrxI.js";
import { t as He } from "./queries-B4W1CgUo.js";
import { n as Ue } from "./vcs-DOY0Hs9B.js";
import { B as We, G as Ge, H as Ke, U as qe, W as Je } from "./PanelLayoutControls-CBiOLaSo.js";
import { t as Ye } from "./DiffCommentAnnotation-BI53TMYr.js";
import { l as Xe } from "./timestampFormat-BBUHLb6E.js";
import { n as Ze } from "./fileCommentAnnotations-BgdL_7u9.js";
import {
  i as Qe,
  l as $e,
  n as et,
  o as tt,
  r as nt,
  s as rt,
  t as it,
} from "./combobox-HagV04Wz.js";
import { t as at } from "./observeIntersection-CBNyKQ0_.js";
import {
  $c as ot,
  $s as L,
  Bs as st,
  Gs as ct,
  Js as lt,
  Qs as ut,
  Rs as dt,
  Vs as ft,
  Ws as pt,
  Xs as mt,
  Ys as ht,
  Zc as gt,
  Zs as _t,
  ec as vt,
  sl as R,
  zs as yt,
} from "./main-BZa0O6xN.js";
import { C as bt, E as xt, T as St, w as Ct } from "./_chat-LvMSbSFt.js";
var z = e(t(), 1),
  wt = xe(),
  Tt = n();
function Et(e, t) {
  let n = (0, Tt.c)(4),
    r = He(e, t),
    i;
  return (
    n[0] !== r.data || n[1] !== r.error || n[2] !== r.isPending
      ? ((i = { data: r.data, error: r.error, isPending: r.isPending }),
        (n[0] = r.data),
        (n[1] = r.error),
        (n[2] = r.isPending),
        (n[3] = i))
      : (i = n[3]),
    i
  );
}
var B = e(r(), 1);
function Dt(e) {
  let t = (0, Tt.c)(17),
    { filePath: n } = e,
    r = (0, z.useRef)(null),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { onCopy: () => Re(r), onError: (e) => Le(r, e), timeout: Ie }), (t[0] = i))
    : (i = t[0]);
  let { copyToClipboard: a, isCopied: o } = I(i),
    s;
  t[1] !== a || t[2] !== n
    ? ((s = (0, B.jsx)(_, {
        ref: r,
        size: `icon-micro`,
        variant: `ghost-muted`,
        "aria-label": `Copy file path`,
        onClick: () => a(n, void 0),
      })),
      (t[1] = a),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c = o && `text-success`,
    l;
  t[4] === c ? (l = t[5]) : ((l = he(`size-3`, c)), (t[4] = c), (t[5] = l));
  let u = o ? wt.Check : wt.Copy,
    d;
  t[6] !== l || t[7] !== u
    ? ((d = (0, B.jsx)(Se, { className: l, icon: u })), (t[6] = l), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== s || t[10] !== d
    ? ((f = (0, B.jsx)(j, { render: s, children: d })), (t[9] = s), (t[10] = d), (t[11] = f))
    : (f = t[11]);
  let p = o ? `Copied` : `Copy path`,
    m;
  t[12] === p
    ? (m = t[13])
    : ((m = (0, B.jsx)(k, { children: (0, B.jsx)(`p`, { children: p }) })),
      (t[12] = p),
      (t[13] = m));
  let g;
  return (
    t[14] !== f || t[15] !== m
      ? ((g = (0, B.jsxs)(h, { children: [f, m] })), (t[14] = f), (t[15] = m), (t[16] = g))
      : (g = t[16]),
    g
  );
}
var Ot = [];
function kt(e) {
  return (e.endSide ?? e.side) === `deletions` ? `deletions` : `additions`;
}
function V(e, t, n) {
  let r = kt(t),
    i = e.findIndex((e) => e.side === r && e.lineNumber === t.end);
  return i < 0
    ? [...e, { side: r, lineNumber: t.end, metadata: { entries: [n] } }]
    : e.map((e, t) => (t === i ? { ...e, metadata: { entries: [...e.metadata.entries, n] } } : e));
}
function At(e) {
  let t = (0, Tt.c)(66),
    {
      codeViewKey: n,
      files: r,
      pendingFiles: i,
      sectionId: a,
      sectionTitle: o,
      composerDraftTarget: s,
      options: c,
      viewerRef: l,
      className: u,
      renderCodeViewFooter: d,
      unsafeCSSExtra: f,
      renderHeaderMetadata: m,
      renderHeaderFilenameSuffix: h,
      renderHeaderPrefix: g,
      onRevealSearchMatch: _,
    } = e,
    v = p(Nt),
    y = p(W),
    b;
  t[0] === s
    ? (b = t[1])
    : ((b = (e) => e.getComposerDraft(s)?.reviewComments ?? Ot), (t[0] = s), (t[1] = b));
  let x = p(b),
    [S, C] = (0, z.useState)(null),
    [w, T] = (0, z.useState)(null),
    [E, te] = (0, z.useState)(``),
    D;
  t[2] === r ? (D = t[3]) : ((D = new Map(r.map(U))), (t[2] = r), (t[3] = D));
  let O = D;
  w !== null &&
    !O.has(w.fileKey) &&
    !i.some((e) => L(e) === w.filePath && vt(e) === w.previousFilePath) &&
    (T(null), te(``), C(null));
  let k;
  if (t[4] !== w || t[5] !== r || t[6] !== x || t[7] !== a) {
    let e;
    (t[9] !== w || t[10] !== x || t[11] !== a
      ? ((e = (e) => {
          let { fileDiff: t, filePath: n, fileKey: r, fileVersion: i, collapsed: o } = e,
            s = x
              .filter(
                (e) =>
                  e.sectionId === a && e.filePath === n && (e.fenceLanguage ?? `diff`) === `diff`,
              )
              .reduce((e, n) => {
                let r = N(t, n);
                return r
                  ? V(e, r, {
                      id: n.id,
                      kind: `comment`,
                      range: r,
                      rangeLabel: n.rangeLabel,
                      text: n.text,
                    })
                  : e;
              }, []),
            c = w?.fileKey === r ? [...s, w.annotation] : s;
          return {
            id: r,
            type: `diff`,
            fileDiff: t,
            annotations: c,
            collapsed: o,
            version: lt(`${i}:${o ? `1` : `0`}:${c.flatMap(Mt).join(`:`)}`),
          };
        }),
        (t[9] = w),
        (t[10] = x),
        (t[11] = a),
        (t[12] = e))
      : (e = t[12]),
      (k = r.map(e)),
      (t[4] = w),
      (t[5] = r),
      (t[6] = x),
      (t[7] = a),
      (t[8] = k));
  } else k = t[8];
  let A = k,
    j;
  t[13] !== s || t[14] !== w?.annotation || t[15] !== y
    ? ((j = (e) => {
        (C(null),
          w?.annotation.metadata.entries.some((t) => t.id === e) ? (T(null), te(``)) : y(s, e));
      }),
      (t[13] = s),
      (t[14] = w?.annotation),
      (t[15] = y),
      (t[16] = j))
    : (j = t[16]);
  let ne = j,
    re;
  t[17] !== v || t[18] !== s || t[19] !== w || t[20] !== O || t[21] !== a || t[22] !== o
    ? ((re = (e, t) => {
        let n = w?.annotation.metadata.entries.find((t) => t.id === e),
          r = w ? O.get(w.fileKey) : void 0;
        if (!n || !r) return;
        let i = ee({
          id: n.id,
          sectionId: a,
          sectionTitle: o,
          filePath: r.filePath,
          fileDiff: r.fileDiff,
          range: n.range,
          text: t,
        });
        (i && v(s, i), C(null), T(null), te(``));
      }),
      (t[17] = v),
      (t[18] = s),
      (t[19] = w),
      (t[20] = O),
      (t[21] = a),
      (t[22] = o),
      (t[23] = re))
    : (re = t[23]);
  let ie = re,
    M;
  t[24] !== a || t[25] !== o
    ? ((M = (e, t) => {
        if (!e) return;
        let n = t.item;
        if (n.type !== `diff`) return;
        let r = Ze(),
          i = L(n.fileDiff),
          s = ee({
            id: r,
            sectionId: a,
            sectionTitle: o,
            filePath: i,
            fileDiff: n.fileDiff,
            range: e,
            text: ``,
          });
        s &&
          (te(``),
          T({
            fileKey: n.id,
            filePath: i,
            previousFilePath: vt(n.fileDiff),
            annotation: {
              side: kt(e),
              lineNumber: e.end,
              metadata: {
                entries: [{ id: r, kind: `draft`, range: e, rangeLabel: s.rangeLabel, text: `` }],
              },
            },
          }));
      }),
      (t[24] = a),
      (t[25] = o),
      (t[26] = M))
    : (M = t[26]);
  let ae = M,
    oe;
  t[27] === l ? (oe = t[28]) : ((oe = l ? { viewerRef: l } : {}), (t[27] = l), (t[28] = oe));
  let se;
  t[29] === u ? (se = t[30]) : ((se = u ? { className: u } : {}), (t[29] = u), (t[30] = se));
  let ce;
  t[31] === f ? (ce = t[32]) : ((ce = f ? { unsafeCSSExtra: f } : {}), (t[31] = f), (t[32] = ce));
  let le;
  t[33] === m
    ? (le = t[34])
    : ((le = m ? { renderHeaderMetadata: (e) => (e.type === `diff` ? m(e.fileDiff) : null) } : {}),
      (t[33] = m),
      (t[34] = le));
  let ue;
  t[35] === d
    ? (ue = t[36])
    : ((ue = d ? { renderCodeViewFooter: d } : {}), (t[35] = d), (t[36] = ue));
  let de;
  t[37] === _ ? (de = t[38]) : ((de = (e) => _(e.id)), (t[37] = _), (t[38] = de));
  let fe = w === null,
    pe = w === null,
    me;
  t[39] !== ae || t[40] !== c || t[41] !== fe || t[42] !== pe
    ? ((me = { ...c, enableGutterUtility: fe, enableLineSelection: pe, onGutterUtilityClick: ae }),
      (t[39] = ae),
      (t[40] = c),
      (t[41] = fe),
      (t[42] = pe),
      (t[43] = me))
    : (me = t[43]);
  let he;
  t[44] === h
    ? (he = t[45])
    : ((he = (e) => (e.type === `diff` ? h(e.fileDiff) : null)), (t[44] = h), (t[45] = he));
  let ge;
  t[46] === g
    ? (ge = t[47])
    : ((ge = (e) => (e.type === `diff` ? g(e.fileDiff, e.id, e.collapsed === !0) : null)),
      (t[46] = g),
      (t[47] = ge));
  let _e;
  t[48] !== E || t[49] !== ne || t[50] !== ie
    ? ((_e = (...e) => {
        let [t] = e,
          n = t.metadata.entries.some(jt);
        return (0, B.jsx)(`div`, {
          className: n ? `py-1` : `divide-y divide-border/30 border-y border-border/30`,
          children: t.metadata.entries.map((e) =>
            (0, B.jsx)(
              Ye,
              {
                kind: e.kind,
                rangeLabel: e.rangeLabel,
                text: e.kind === `draft` ? E : e.text,
                onTextChange: te,
                onCancel: () => ne(e.id),
                onComment: (t) => ie(e.id, t),
                onDelete: () => ne(e.id),
              },
              e.id,
            ),
          ),
        });
      }),
      (t[48] = E),
      (t[49] = ne),
      (t[50] = ie),
      (t[51] = _e))
    : (_e = t[51]);
  let ve;
  return (
    t[52] !== n ||
    t[53] !== A ||
    t[54] !== S ||
    t[55] !== le ||
    t[56] !== ue ||
    t[57] !== de ||
    t[58] !== me ||
    t[59] !== he ||
    t[60] !== ge ||
    t[61] !== _e ||
    t[62] !== oe ||
    t[63] !== se ||
    t[64] !== ce
      ? ((ve = (0, B.jsx)(
          Ke,
          {
            ...oe,
            ...se,
            ...ce,
            ...le,
            ...ue,
            items: A,
            selectedLines: S,
            onSelectedLinesChange: C,
            onRevealSearchMatch: de,
            options: me,
            renderHeaderFilenameSuffix: he,
            renderHeaderPrefix: ge,
            renderAnnotation: _e,
          },
          n,
        )),
        (t[52] = n),
        (t[53] = A),
        (t[54] = S),
        (t[55] = le),
        (t[56] = ue),
        (t[57] = de),
        (t[58] = me),
        (t[59] = he),
        (t[60] = ge),
        (t[61] = _e),
        (t[62] = oe),
        (t[63] = se),
        (t[64] = ce),
        (t[65] = ve))
      : (ve = t[65]),
    ve
  );
}
function jt(e) {
  return e.kind === `draft`;
}
function Mt(e) {
  return e.metadata.entries.map(H);
}
function H(e) {
  return `${e.id}:${e.rangeLabel}:${e.text}`;
}
function U(e) {
  return [e.fileKey, e];
}
function W(e) {
  return e.removeReviewComment;
}
function Nt(e) {
  return e.addReviewComment;
}
function Pt(e) {
  let t = g(4),
    n = O();
  return {
    diffPreview: v(e, {
      label: `environment-data:review:diff-preview`,
      tag: S.reviewGetDiffPreview,
      staleTimeMs: 5e3,
    }),
    diffFilePatch: te(e, {
      label: `environment-data:review:diff-file-patch`,
      staleTimeMs: 3e5,
      execute: (e) =>
        M(S.reviewGetDiffPreview, e.request).pipe(
          t.withPermit,
          pe((t) => {
            let n = t.sources.find((t) => t.kind === e.request.file.sourceKind);
            return n
              ? ge(n)
              : ue(
                  new E({
                    operation: `review.diffFilePatch`,
                    kind: `git`,
                    detail: `Diff no longer available. Refresh the comparison.`,
                  }),
                );
          }),
        ),
    }),
    diffFileContents: A(e, {
      label: `environment-data:review:diff-file-contents`,
      tag: S.reviewGetDiffFileContents,
      scheduler: n,
      concurrency: {
        mode: `singleFlight`,
        key: ({ environmentId: e, input: t }) =>
          JSON.stringify([
            e,
            t.cwd,
            t.sourceKind,
            t.baseRef,
            t.headRef,
            t.oldPath,
            t.newPath,
            t.changeType,
          ]),
      },
    }),
  };
}
var Ft = Pt(P);
function It(e) {
  return e.remoteName && e.name.startsWith(`${e.remoteName}/`)
    ? e.name.slice(e.remoteName.length + 1)
    : e.name;
}
function Lt(e, t) {
  let n = new Set(t),
    r = e.map((e) => {
      let r = t.filter((t) => n.has(t) && It(t) === e.name),
        i = r.find((e) => e.remoteName === `origin`) ?? r[0] ?? null;
      return (i && n.delete(i), { id: `local:${e.name}`, label: e.name, local: e, remote: i });
    }),
    i = t
      .filter((e) => n.has(e))
      .map((e) => ({ id: `remote:${e.name}`, label: e.name, local: null, remote: e }));
  return [...r, ...i];
}
function Rt(e, t) {
  let n = t.trim().toLocaleLowerCase();
  return n.length === 0
    ? e
    : e.filter(
        (e) =>
          e.label.toLocaleLowerCase().includes(n) ||
          e.local?.name.toLocaleLowerCase().includes(n) === !0 ||
          e.remote?.name.toLocaleLowerCase().includes(n) === !0,
      );
}
var G = new Intl.Collator(void 0, { numeric: !0, sensitivity: `base` }),
  zt = [0, 1, 2, 3];
function Bt(e) {
  let { source: t, file: n } = e,
    r = t.baseRef !== null && t.headRef !== null ? { from: t.baseRef, to: t.headRef } : null;
  return {
    cwd: e.cwd,
    ...(e.baseRef ? { baseRef: e.baseRef } : {}),
    ...(t.kind === `commit-range` && r ? { commitRange: r } : {}),
    ...(t.kind === `submodule-range` && r && e.submodulePath
      ? { submodule: { path: e.submodulePath, ...r } }
      : {}),
    ignoreWhitespace: e.ignoreWhitespace,
    file: { path: n.path, previousPath: n.previousPath, sourceKind: t.kind },
  };
}
function Vt(e) {
  let t = (0, Tt.c)(66),
    {
      environmentId: n,
      cwd: r,
      source: i,
      baseRef: a,
      submodulePath: o,
      ignoreWhitespace: s,
      theme: c,
      revision: l,
      preview: u,
    } = e,
    d = (0, z.useContext)(C),
    f;
  t[0] !== a ||
  t[1] !== r ||
  t[2] !== n ||
  t[3] !== s ||
  t[4] !== i?.diffHash ||
  t[5] !== i?.kind ||
  t[6] !== o
    ? ((f = JSON.stringify([n, r, i?.kind, i?.diffHash, a, o, s])),
      (t[0] = a),
      (t[1] = r),
      (t[2] = n),
      (t[3] = s),
      (t[4] = i?.diffHash),
      (t[5] = i?.kind),
      (t[6] = o),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] === p ? (m = t[9]) : ((m = () => ({ scope: p, indices: zt })), (t[8] = p), (t[9] = m));
  let [h, g] = (0, z.useState)(m),
    _,
    v;
  t[10] !== a ||
  t[11] !== r ||
  t[12] !== n ||
  t[13] !== s ||
  t[14] !== h ||
  t[15] !== p ||
  t[16] !== i ||
  t[17] !== o ||
  t[18] !== c
    ? ((_ = Gt({
        environmentId: n,
        cwd: r,
        source: i,
        baseRef: a,
        submodulePath: o,
        ignoreWhitespace: s,
        scope: p,
        requested: h,
      })),
      (v = Jt(JSON.stringify([c, _.map(Wt)]))),
      (t[10] = a),
      (t[11] = r),
      (t[12] = n),
      (t[13] = s),
      (t[14] = h),
      (t[15] = p),
      (t[16] = i),
      (t[17] = o),
      (t[18] = c),
      (t[19] = _),
      (t[20] = v))
    : ((_ = t[19]), (v = t[20]));
  let y = v,
    b;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = []), (t[21] = b)) : (b = t[21]);
  let x;
  t[22] !== l || t[23] !== p
    ? ((x = { scope: p, revision: l, queries: b }), (t[22] = l), (t[23] = p), (t[24] = x))
    : (x = t[24]);
  let S = (0, z.useRef)(x),
    ee,
    w;
  (t[25] !== _ || t[26] !== d || t[27] !== l || t[28] !== p
    ? ((ee = () => {
        let e = S.current;
        S.current = { scope: p, revision: l, queries: _ };
        for (let { query: t } of _) {
          let n = e.scope === p && e.revision !== l,
            r =
              !e.queries.some((e) => e.query === t) &&
              d.get(t)._tag !== `Initial` &&
              !d.get(t).waiting;
          (n || r) && d.refresh(t);
        }
      }),
      (w = [p, l, _, d]),
      (t[25] = _),
      (t[26] = d),
      (t[27] = l),
      (t[28] = p),
      (t[29] = ee),
      (t[30] = w))
    : ((ee = t[29]), (w = t[30])),
    (0, z.useEffect)(ee, w));
  let T = ce(y),
    E;
  t[31] !== _ || t[32] !== d || t[33] !== i
    ? ((E = (e) => {
        let t = Kt(i),
          n = _.find((n) => {
            let { index: r } = n;
            return t[r]?.path === e;
          })?.query;
        n && d.refresh(n);
      }),
      (t[31] = _),
      (t[32] = d),
      (t[33] = i),
      (t[34] = E))
    : (E = t[34]);
  let te = Ve(E),
    D,
    O,
    k,
    A,
    j,
    ne;
  if (t[35] !== T || t[36] !== u || t[37] !== _ || t[38] !== p || t[39] !== i) {
    let e = Kt(i),
      n;
    t[46] === T
      ? (n = t[47])
      : ((n = (e, t) => {
          let n = T.get(t);
          return !n || n._tag === `Initial`;
        }),
        (t[46] = T),
        (t[47] = n));
    let r = e.findIndex(n);
    j = i ? (r < 0 ? e.length : r) : u?.kind === `files` ? u.files.length : 0;
    let a;
    t[48] === p
      ? (a = t[49])
      : ((a = (e) =>
          g((t) => {
            let n = t.scope === p ? t.indices : [0, 1, 2, 3],
              r = e.filter((e) => !n.includes(e));
            return r.length === 0 ? t : { scope: p, indices: [...n, ...r] };
          })),
        (t[48] = p),
        (t[49] = a));
    let o = a;
    O = () => {
      _.some((e) => {
        let { index: t } = e;
        return t === j;
      }) || o(Array.from({ length: 4 }, (e, t) => j + t));
    };
    let s;
    (t[50] === o ? (s = t[51]) : ((s = (e) => o([e])), (t[50] = o), (t[51] = s)),
      (A = s),
      (k = i
        ? e.map((e, t) => {
            let n = T.get(t);
            if (n?._tag === `Success` && n.value.patch?.kind === `files`) {
              let t = n.value.patch.files.find((t) => L(t) === e.path);
              if (t) return t;
            }
            return {
              name: e.path,
              ...(e.previousPath ? { prevName: e.previousPath } : {}),
              type: e.previousPath ? `rename-changed` : `change`,
              hunks: [],
              additionLines: [],
              deletionLines: [],
              additionCharacterCount: 0,
              deletionCharacterCount: 0,
              splitLineCount: 0,
              unifiedLineCount: 0,
              isPartial: !0,
              cacheKey: `${p}:${e.path}:pending`,
            };
          })
        : (u?.kind === `files` ? u.files : []).toSorted(K)));
    let c;
    (t[52] === T
      ? (c = t[53])
      : ((c = (e, t) => {
          let n = T.get(t);
          return [
            e.path,
            {
              error:
                n?._tag === `Failure` ||
                (n?._tag === `Success` &&
                  (n.value.patch?.kind !== `files` ||
                    !n.value.patch.files.some((t) => L(t) === e.path))),
              truncated: n?._tag === `Success` && n.value.source.truncated,
            },
          ];
        }),
        (t[52] = T),
        (t[53] = c)),
      (D = new Map(e.map(c))));
    let l;
    (t[54] === T
      ? (l = t[55])
      : ((l = (e, t) => {
          let n = T.get(t);
          return n && n._tag !== `Initial`;
        }),
        (t[54] = T),
        (t[55] = l)),
      (ne = new Set(e.filter(l).map(Ut))),
      (t[35] = T),
      (t[36] = u),
      (t[37] = _),
      (t[38] = p),
      (t[39] = i),
      (t[40] = D),
      (t[41] = O),
      (t[42] = k),
      (t[43] = A),
      (t[44] = j),
      (t[45] = ne));
  } else ((D = t[40]), (O = t[41]), (k = t[42]), (A = t[43]), (j = t[44]), (ne = t[45]));
  let re = ne,
    ie = [...T.values()].some(Ht),
    M;
  return (
    t[56] !== D ||
    t[57] !== O ||
    t[58] !== re ||
    t[59] !== k ||
    t[60] !== A ||
    t[61] !== te ||
    t[62] !== p ||
    t[63] !== j ||
    t[64] !== ie
      ? ((M = {
          scope: p,
          fileStates: D,
          isPending: ie,
          retry: te,
          requestFile: A,
          readyFilePaths: re,
          renderableFiles: k,
          settledFileCount: j,
          loadNextFiles: O,
        }),
        (t[56] = D),
        (t[57] = O),
        (t[58] = re),
        (t[59] = k),
        (t[60] = A),
        (t[61] = te),
        (t[62] = p),
        (t[63] = j),
        (t[64] = ie),
        (t[65] = M))
      : (M = t[65]),
    M
  );
}
function Ht(e) {
  return e._tag === `Initial` || e.waiting;
}
function Ut(e) {
  return e.path;
}
function K(e, t) {
  return G.compare(L(e), L(t));
}
function Wt(e) {
  let { index: t, target: n } = e;
  return [t, n];
}
function Gt({
  environmentId: e,
  cwd: t,
  source: n,
  baseRef: r,
  submodulePath: i,
  ignoreWhitespace: a,
  scope: o,
  requested: s,
}) {
  let c = s.scope === o ? s.indices : zt,
    l = Kt(n);
  return !e || !t || !n
    ? []
    : c
        .filter((e) => e < l.length)
        .map((s) => {
          let c = l[s],
            u = {
              environmentId: e,
              input: {
                cacheKey: o,
                request: Bt({
                  cwd: t,
                  baseRef: r,
                  submodulePath: i,
                  ignoreWhitespace: a,
                  source: n,
                  file: c,
                }),
              },
            };
          return { index: s, target: u, query: Ft.diffFilePatch(u) };
        });
}
function Kt(e) {
  return e?.files?.toSorted((e, t) => G.compare(e.path, t.path)) ?? [];
}
var qt = x((e) => {
    let [t, n] = JSON.parse(e);
    return D(Ft.diffFilePatch(n), (e) =>
      de(e, (e) => {
        let n = _t(e.diff, `diff-panel:${t}`, { compactPartialHunkOffsets: !0 });
        if (n?.kind === `files` && n.files.length === 1 && e.files?.length === 1) {
          let t = e.files[0],
            r = { ...n.files[0], name: t.path };
          (t.previousPath === null ? delete r.prevName : (r.prevName = t.previousPath),
            (n = { ...n, files: [r] }));
        }
        return { source: e, patch: n };
      }),
    );
  }),
  Jt = x((e) => {
    let [t, n] = JSON.parse(e),
      r = n.map(([e, n]) => [e, qt(JSON.stringify([t, n]))]);
    return _e((e) => new Map(r.map(([t, n]) => [t, e(n)])));
  });
function Yt(e) {
  let t = (0, Tt.c)(8),
    { load: n, count: r } = e,
    [i, a] = (0, z.useState)(!1),
    o = Ve(n),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (e) => {
        if (e) return at(e, (e) => a(e.isIntersecting), { rootMargin: `600px` });
      }),
      (t[0] = s))
    : (s = t[0]);
  let c = s,
    l,
    u;
  (t[1] !== r || t[2] !== i || t[3] !== o
    ? ((l = () => {
        i && r > 0 && o();
      }),
      (u = [i, r, o]),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = l),
      (t[5] = u))
    : ((l = t[4]), (u = t[5])),
    (0, z.useEffect)(l, u));
  let d;
  return (
    t[6] === r
      ? (d = t[7])
      : ((d = (0, B.jsx)(`div`, {
          ref: c,
          role: `status`,
          "aria-label": `Loading diff…`,
          children: Array.from({ length: Math.min(r, 4) }, Xt),
        })),
        (t[6] = r),
        (t[7] = d)),
    d
  );
}
function Xt(e, t) {
  return (0, B.jsx)(
    `div`,
    {
      "aria-hidden": !0,
      className: `border-b border-border/40`,
      children: (0, B.jsx)(qe, { titleWidth: `medium` }),
    },
    t,
  );
}
function Zt(e) {
  let t = (0, Tt.c)(16),
    { error: n, truncated: r, retry: i } = e;
  if (!n && !r) return null;
  let a = n ? `Retry loading diff` : `Partial diff preview`,
    o;
  t[0] !== n || t[1] !== i
    ? ((o = (e) => {
        (e.stopPropagation(), n && i());
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== a || t[4] !== o
    ? ((s = (0, B.jsx)(_, {
        size: `icon-micro`,
        variant: `ghost-muted`,
        "aria-label": a,
        onClick: o,
      })),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s))
    : (s = t[5]);
  let l;
  t[6] === n
    ? (l = t[7])
    : ((l = n ? (0, B.jsx)(R, { className: `size-3` }) : (0, B.jsx)(c, { className: `size-3` })),
      (t[6] = n),
      (t[7] = l));
  let u;
  t[8] !== s || t[9] !== l
    ? ((u = (0, B.jsx)(j, { render: s, children: l })), (t[8] = s), (t[9] = l), (t[10] = u))
    : (u = t[10]);
  let d = n
      ? `Retry loading diff`
      : `This file is too large to show in full. Counts include all changes.`,
    f;
  t[11] === d ? (f = t[12]) : ((f = (0, B.jsx)(k, { children: d })), (t[11] = d), (t[12] = f));
  let p;
  return (
    t[13] !== u || t[14] !== f
      ? ((p = (0, B.jsxs)(h, { children: [u, f] })), (t[13] = u), (t[14] = f), (t[15] = p))
      : (p = t[15]),
    p
  );
}
var Qt = `__automatic_base_ref__`,
  $t = `t3code.diffFileTreeOpen`,
  en = new WeakMap();
function tn(e) {
  let t = en.get(e);
  if (t) return t;
  let n = { fileDiff: e, fileKey: ct(e), fileVersion: pt(e) };
  return (en.set(e, n), n);
}
var nn = new Set();
function rn(e) {
  let t = (0, Tt.c)(21),
    { filePath: n, fileKey: r, collapsed: i, unavailable: a, iconClassName: o, onToggle: s } = e,
    c = i ? `Expand ${n}` : `Collapse ${n}`,
    l = !i,
    u;
  t[0] !== r || t[1] !== s
    ? ((u = (e) => {
        (e.stopPropagation(), s(r));
      }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== a
    ? ((d = (0, B.jsx)(_, {
        size: `icon-micro`,
        variant: `ghost`,
        className: `-ms-0.5`,
        "aria-label": c,
        "aria-expanded": l,
        disabled: a,
        onClick: u,
      })),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = a),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === o ? (f = t[9]) : ((f = he(`size-4`, o)), (t[8] = o), (t[9] = f));
  let p = i ? wt.ChevronRight : wt.ChevronDown,
    m;
  t[10] !== f || t[11] !== p
    ? ((m = (0, B.jsx)(Se, { className: f, icon: p })), (t[10] = f), (t[11] = p), (t[12] = m))
    : (m = t[12]);
  let g;
  t[13] !== d || t[14] !== m
    ? ((g = (0, B.jsx)(j, { render: d, children: m })), (t[13] = d), (t[14] = m), (t[15] = g))
    : (g = t[15]);
  let v = i ? `Expand diff` : `Collapse diff`,
    y;
  t[16] === v
    ? (y = t[17])
    : ((y = (0, B.jsx)(k, { side: `top`, children: v })), (t[16] = v), (t[17] = y));
  let b;
  return (
    t[18] !== y || t[19] !== g
      ? ((b = (0, B.jsxs)(h, { children: [g, y] })), (t[18] = y), (t[19] = g), (t[20] = b))
      : (b = t[20]),
    b
  );
}
function an(e) {
  let t = (0, Tt.c)(11),
    { filePath: n, hasStat: r, error: i, truncated: a, onRetry: o } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = (0, B.jsx)(Dt, { filePath: n })), (t[0] = n), (t[1] = s));
  let c;
  t[2] !== i || t[3] !== n || t[4] !== r || t[5] !== o || t[6] !== a
    ? ((c = r ? (0, B.jsx)(Zt, { error: i, truncated: a, retry: () => o(n) }) : null),
      (t[2] = i),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o),
      (t[6] = a),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== s || t[9] !== c
      ? ((l = (0, B.jsxs)(B.Fragment, { children: [s, c] })), (t[8] = s), (t[9] = c), (t[10] = l))
      : (l = t[10]),
    l
  );
}
function on(e) {
  let t = (0, Tt.c)(305),
    { mode: n, composerDraftTarget: r, workspaceMutationId: c, visible: p } = e,
    g = n === void 0 ? `inline` : n,
    v = ke(),
    x = Ae(xn),
    S = x.diffLayout,
    [C, ee] = (0, z.useState)(x.wordWrap),
    [E, te] = (0, z.useState)(x.diffIgnoreWhitespace),
    [D, O] = b($t, !1, m),
    [A, M] = (0, z.useState)(``),
    [ue, de] = (0, z.useState)(0),
    [pe, ge] = (0, z.useState)(null),
    N = Be(),
    _e = N?.threadId ?? null,
    P = ve(N),
    xe = Oe(P?.environmentId ?? null),
    { canReadFiles: F } = xe,
    Ie = P?.projectId ?? null,
    Le;
  t[0] !== Ie || t[1] !== P
    ? ((Le = P && Ie ? { environmentId: P.environmentId, projectId: Ie } : null),
      (t[0] = Ie),
      (t[1] = P),
      (t[2] = Le))
    : (Le = t[2]);
  let Re = be(Le),
    I = P?.worktreePath ?? Re?.workspaceRoot,
    He = P?.worktreePath ? void 0 : Re?.repositoryIdentity?.rootPath,
    Ke;
  t[3] === P?.environmentId
    ? (Ke = t[4])
    : ((Ke = je.configValueAtom(P?.environmentId ?? null)), (t[3] = P?.environmentId), (t[4] = Ke));
  let qe = ce(Ke),
    Ye = Pe(P?.environmentId ?? null),
    Ze;
  t[5] === qe?.availableEditors
    ? (Ze = t[6])
    : ((Ze = qe?.availableEditors ?? []), (t[5] = qe?.availableEditors), (t[6] = Ze));
  let at = gt(P?.environmentId ?? null, Ze),
    ct = Ne(Ft.diffFileContents),
    lt;
  t[7] !== I || t[8] !== P
    ? ((lt =
        P != null && I != null
          ? Ue.status({ environmentId: P.environmentId, input: { cwd: I } })
          : null),
      (t[7] = I),
      (t[8] = P),
      (t[9] = lt))
    : (lt = t[9]);
  let pt = Me(lt),
    vt;
  t[10] === N ? (vt = t[11]) : ((vt = (e) => Ct(e.byThreadKey, N)), (t[10] = N), (t[11] = vt));
  let R = xt(vt),
    Dt = pt.data?.isRepo ?? !0,
    Ot = ye(N),
    kt;
  t[12] === Ot ? (kt = t[13]) : ((kt = Ot.toSorted(bn)), (t[12] = Ot), (t[13] = kt));
  let V = kt,
    jt;
  t[14] !== R.kind || t[15] !== V || t[16] !== N
    ? ((jt = () => {
        N && R.kind === `turn` && xt.getState().reconcileTurnSelection(N, V.map(yn));
      }),
      (t[14] = R.kind),
      (t[15] = V),
      (t[16] = N),
      (t[17] = jt))
    : (jt = t[17]);
  let Mt;
  (t[18] !== R || t[19] !== V || t[20] !== N
    ? ((Mt = [R, V, N]), (t[18] = R), (t[19] = V), (t[20] = N), (t[21] = Mt))
    : (Mt = t[21]),
    (0, z.useEffect)(jt, Mt));
  let H = R.kind === `turn` ? R.turnId : null,
    U = R.kind === `unstaged` ? `unstaged` : `branch`,
    W = R.kind === `branch` ? R.baseRef : null,
    Nt = R.kind === `turn` ? R.filePath : null,
    Pt = R.kind === `turn` ? R.revealRequestId : 0,
    It;
  t[22] !== V || t[23] !== H
    ? ((It = H === null ? void 0 : (V.find((e) => e.runId === H) ?? V[0])),
      (t[22] = V),
      (t[23] = H),
      (t[24] = It))
    : (It = t[24]);
  let G = It,
    zt = G?.checkpointTurnCount,
    Bt = V[0],
    Ht =
      H === null
        ? U === `unstaged`
          ? `Uncommitted`
          : `Changes`
        : G?.runId === Bt?.runId
          ? `Latest turn`
          : `Turn ${zt ?? `?`}`,
    Ut = G ? `turn:${G.runId}` : U,
    K = N ? `${N.environmentId}:${N.threadId}:${Ut}` : null,
    Wt = `${K ?? Ut}:${ue}`,
    Gt = G ? `Turn ${zt ?? `?`}` : U === `unstaged` ? `Uncommitted` : `Changes`,
    Kt;
  t[25] === zt
    ? (Kt = t[26])
    : ((Kt =
        typeof zt == `number` ? { fromTurnCount: Math.max(0, zt - 1), toTurnCount: zt } : null),
      (t[25] = zt),
      (t[26] = Kt));
  let qt = Kt,
    Jt = P?.environmentId ?? null,
    Xt = qt?.fromTurnCount ?? null,
    Zt = qt?.toTurnCount ?? null,
    en = G ? `turn:${G.runId}` : null,
    on;
  t[27] !== _e || t[28] !== E || t[29] !== Jt || t[30] !== Xt || t[31] !== Zt || t[32] !== en
    ? ((on = {
        environmentId: Jt,
        threadId: _e,
        fromTurnCount: Xt,
        toTurnCount: Zt,
        ignoreWhitespace: E,
        cacheScope: en,
      }),
      (t[27] = _e),
      (t[28] = E),
      (t[29] = Jt),
      (t[30] = Xt),
      (t[31] = Zt),
      (t[32] = en),
      (t[33] = on))
    : (on = t[33]);
  let Sn = Dt && G !== void 0,
    Cn;
  t[34] === Sn ? (Cn = t[35]) : ((Cn = { enabled: Sn }), (t[34] = Sn), (t[35] = Cn));
  let wn = Et(on, Cn),
    Tn;
  t[36] !== I || t[37] !== P || t[38] !== F || t[39] !== E || t[40] !== W || t[41] !== H
    ? ((Tn =
        F && H === null && P && I
          ? Ft.diffPreview({
              environmentId: P.environmentId,
              input: { cwd: I, ...(W ? { baseRef: W } : {}), ignoreWhitespace: E },
            })
          : null),
      (t[36] = I),
      (t[37] = P),
      (t[38] = F),
      (t[39] = E),
      (t[40] = W),
      (t[41] = H),
      (t[42] = Tn))
    : (Tn = t[42]);
  let q = Me(Tn),
    J = Dt && H === null && P != null && I != null,
    En = N ? `${N.environmentId}:${N.threadId}` : null,
    Dn,
    On,
    kn,
    An,
    Y,
    jn,
    Mn,
    X,
    Z,
    Nn,
    Pn,
    Fn;
  if (
    t[43] !== wn ||
    t[44] !== P ||
    t[45] !== q ||
    t[46] !== F ||
    t[47] !== ct ||
    t[48] !== v ||
    t[49] !== U ||
    t[50] !== H ||
    t[51] !== G
  ) {
    ((Z = q.data?.sources.find(
      (e) => e.kind === (U === `unstaged` ? `working-tree` : `branch-range`),
    )),
      (Mn = q.refresh),
      (jn = Mn));
    let e = q.data,
      n = Z?.diff,
      r = G ? wn.data?.diff : n;
    An = !G && Z?.truncated === !0;
    let i = G ? wn : q;
    ((kn = i.isPending && i.data === null),
      (Nn = G ? wn.error : q.error),
      (On = typeof r == `string` && r.trim().length === 0),
      (Y = !G && Z?.truncated && Z.files ? Z : null),
      (X = _t(Y ? void 0 : r, `diff-panel:${v}`, { compactPartialHunkOffsets: H === null })),
      (Dn = new Map(Y?.files?.map(vn))),
      (Pn = !G && Z?.files ? Z.files.reduce(_n, { additions: 0, deletions: 0 }) : null),
      (Fn =
        H === null && P && e && Z && F
          ? We(ct, {
              environmentId: P.environmentId,
              cwd: e.cwd,
              sourceKind: Z.kind,
              baseRef: Z.baseRef,
              headRef: Z.headRef,
              cacheKey: Z.diffHash,
            })
          : void 0),
      (t[43] = wn),
      (t[44] = P),
      (t[45] = q),
      (t[46] = F),
      (t[47] = ct),
      (t[48] = v),
      (t[49] = U),
      (t[50] = H),
      (t[51] = G),
      (t[52] = Dn),
      (t[53] = On),
      (t[54] = kn),
      (t[55] = An),
      (t[56] = Y),
      (t[57] = jn),
      (t[58] = Mn),
      (t[59] = X),
      (t[60] = Z),
      (t[61] = Nn),
      (t[62] = Pn),
      (t[63] = Fn));
  } else
    ((Dn = t[52]),
      (On = t[53]),
      (kn = t[54]),
      (An = t[55]),
      (Y = t[56]),
      (jn = t[57]),
      (Mn = t[58]),
      (X = t[59]),
      (Z = t[60]),
      (Nn = t[61]),
      (Pn = t[62]),
      (Fn = t[63]));
  let In = Fn,
    Ln;
  t[64] === In
    ? (Ln = t[65])
    : ((Ln = async (e) => {
        if (!In) throw Error(`Diff file contents are unavailable for this selection.`);
        return In(e);
      }),
      (t[64] = In),
      (t[65] = Ln));
  let Rn = Ve(Ln),
    zn;
  t[66] !== P || t[67] !== A || t[68] !== q.data || t[69] !== U || t[70] !== H
    ? ((zn =
        H === null && U === `branch` && P && q.data?.cwd
          ? Ue.listRefs({
              environmentId: P.environmentId,
              input: {
                cwd: q.data.cwd,
                includeMatchingRemoteRefs: !0,
                refKind: `local`,
                ...(A.trim().length > 0 ? { query: A.trim() } : {}),
                limit: 100,
              },
            })
          : null),
      (t[66] = P),
      (t[67] = A),
      (t[68] = q.data),
      (t[69] = U),
      (t[70] = H),
      (t[71] = zn))
    : (zn = t[71]);
  let Bn = Me(zn),
    Vn;
  t[72] !== P || t[73] !== A || t[74] !== q.data || t[75] !== U || t[76] !== H
    ? ((Vn =
        H === null && U === `branch` && P && q.data?.cwd
          ? Ue.listRefs({
              environmentId: P.environmentId,
              input: {
                cwd: q.data.cwd,
                includeMatchingRemoteRefs: !0,
                refKind: `remote`,
                ...(A.trim().length > 0 ? { query: A.trim() } : {}),
                limit: 100,
              },
            })
          : null),
      (t[72] = P),
      (t[73] = A),
      (t[74] = q.data),
      (t[75] = U),
      (t[76] = H),
      (t[77] = Vn))
    : (Vn = t[77]);
  let Hn = Me(Vn),
    Un = Lt(Bn.data?.refs.filter((e) => e.name !== Z?.headRef) ?? [], Hn.data?.refs ?? []),
    Wn = Rt(Un, A),
    Gn;
  t[78] === W
    ? (Gn = t[79])
    : ((Gn = (e) => (W && W === e.remote?.name ? W : (e.local?.name ?? e.remote?.name ?? e.id))),
      (t[78] = W),
      (t[79] = Gn));
  let Kn = Gn,
    qn = [Qt, ...Un.map(Kn)],
    Jn = [...(A.trim().length === 0 ? [Qt] : []), ...Wn.map(Kn)],
    Yn = P?.environmentId,
    Xn = q.data?.cwd,
    Zn = Y?.baseRef ?? W,
    Qn;
  t[80] === q.data
    ? (Qn = t[81])
    : ((Qn = q.data ? w(q.data.generatedAt) : void 0), (t[80] = q.data), (t[81] = Qn));
  let $n;
  t[82] !== E ||
  t[83] !== Y ||
  t[84] !== X ||
  t[85] !== v ||
  t[86] !== Yn ||
  t[87] !== Xn ||
  t[88] !== Zn ||
  t[89] !== Qn
    ? (($n = {
        environmentId: Yn,
        cwd: Xn,
        source: Y,
        baseRef: Zn,
        ignoreWhitespace: E,
        theme: v,
        revision: Qn,
        preview: X,
      }),
      (t[82] = E),
      (t[83] = Y),
      (t[84] = X),
      (t[85] = v),
      (t[86] = Yn),
      (t[87] = Xn),
      (t[88] = Zn),
      (t[89] = Qn),
      (t[90] = $n))
    : ($n = t[90]);
  let {
      scope: er,
      isPending: tr,
      fileStates: nr,
      retry: rr,
      requestFile: ir,
      readyFilePaths: ar,
      renderableFiles: Q,
      settledFileCount: or,
      loadNextFiles: sr,
    } = Vt($n),
    cr = Mn,
    lr = (0, z.useRef)(!1),
    ur;
  t[91] === cr
    ? (ur = t[92])
    : ((ur = () => {
        ((lr.current = !0), cr());
      }),
      (t[91] = cr),
      (t[92] = ur));
  let dr = Ve(ur),
    fr = `diff:${En ?? ``}`,
    pr;
  (t[93] !== J || t[94] !== dr || t[95] !== fr || t[96] !== c
    ? ((pr = { enabled: J, mutationId: c, refresh: dr, resourceKey: fr }),
      (t[93] = J),
      (t[94] = dr),
      (t[95] = fr),
      (t[96] = c),
      (t[97] = pr))
    : (pr = t[97]),
    bt(pr));
  let mr, hr;
  (t[98] !== q.data ||
  t[99] !== q.isPending ||
  t[100] !== F ||
  t[101] !== J ||
  t[102] !== cr ||
  t[103] !== p
    ? ((mr = () => {
        !p || !F || !J
          ? (lr.current = !1)
          : lr.current || ((lr.current = !0), q.data !== null && !q.isPending && cr());
      }),
      (hr = [q.data, q.isPending, F, J, cr, p]),
      (t[98] = q.data),
      (t[99] = q.isPending),
      (t[100] = F),
      (t[101] = J),
      (t[102] = cr),
      (t[103] = p),
      (t[104] = mr),
      (t[105] = hr))
    : ((mr = t[104]), (hr = t[105])),
    (0, z.useEffect)(mr, hr));
  let gr, _r;
  (t[106] !== J || t[107] !== cr
    ? ((gr = () => {
        if (!J) return;
        let e = () => cr();
        return (window.addEventListener(`focus`, e), () => window.removeEventListener(`focus`, e));
      }),
      (_r = [J, cr]),
      (t[106] = J),
      (t[107] = cr),
      (t[108] = gr),
      (t[109] = _r))
    : ((gr = t[108]), (_r = t[109])),
    (0, z.useEffect)(gr, _r));
  let vr = q.isPending || tr,
    yr = Q.map(tn),
    br = yr.map(gn),
    xr = x.diffFilesCollapsed ? new Set(br) : nn,
    Sr;
  t[110] === K
    ? (Sr = t[111])
    : ((Sr = (e) => (K ? e.collapsedFileKeysByScopeKey[K] : void 0)), (t[110] = K), (t[111] = Sr));
  let Cr = St(Sr) ?? xr,
    $ = (e) => {
      K && St.getState().updateCollapsedFileKeys(K, xr, e);
    },
    wr;
  t[112] !== sr || t[113] !== Q.length || t[114] !== or
    ? ((wr = () => (or < Q.length ? (0, B.jsx)(Yt, { load: sr, count: Q.length - or }) : null)),
      (t[112] = sr),
      (t[113] = Q.length),
      (t[114] = or),
      (t[115] = wr))
    : (wr = t[115]);
  let Tr = wr,
    Er;
  t[116] !== Y || t[117] !== ar
    ? ((Er = (e) => {
        let { fileDiff: t } = e;
        return !Y || !ar || ar.has(L(t));
      }),
      (t[116] = Y),
      (t[117] = ar),
      (t[118] = Er))
    : (Er = t[118]);
  let Dr = yr.filter(Er).map((e) => {
      let { fileDiff: t, fileKey: n, fileVersion: r } = e;
      return {
        fileDiff: t,
        filePath: L(t),
        fileKey: n,
        fileVersion: r,
        collapsed: Cr.has(n) || t.cacheKey?.endsWith(`:pending`) === !0,
      };
    }),
    Or = Dr.map(hn),
    kr;
  t[119] === Q ? (kr = t[120]) : ((kr = Q.filter(mn)), (t[119] = Q), (t[120] = kr));
  let Ar = kr,
    jr = Ee(br, Cr),
    Mr;
  t[121] !== Q || t[122] !== Pn
    ? ((Mr = Pn ?? mt(Q)), (t[121] = Q), (t[122] = Pn), (t[123] = Mr))
    : (Mr = t[123]);
  let Nr = Mr,
    Pr;
  t[124] === Q ? (Pr = t[125]) : ((Pr = Te(Q)), (t[124] = Q), (t[125] = Pr));
  let Fr = Pr,
    Ir;
  t[126] !== K || t[127] !== R
    ? ((Ir = { collapseScopeKey: K, diffSelection: R }), (t[126] = K), (t[127] = R), (t[128] = Ir))
    : (Ir = t[128]);
  let Lr = Ce(pe, Ir, Or),
    Rr;
  t[129] !== Y || t[130] !== yr || t[131] !== ir || t[132] !== Lr || t[133] !== or || t[134] !== $
    ? ((Rr = (e) => {
        let t = yr.findIndex((t) => L(t.fileDiff) === e),
          n = yr[t];
        return n
          ? ($((e) => {
              let t = new Set(e);
              return (t.delete(n.fileKey), t);
            }),
            Y && t >= or && ir(t),
            Lr(n.fileKey),
            !0)
          : !1;
      }),
      (t[129] = Y),
      (t[130] = yr),
      (t[131] = ir),
      (t[132] = Lr),
      (t[133] = or),
      (t[134] = $),
      (t[135] = Rr))
    : (Rr = t[135]);
  let zr = Rr,
    Br = (0, z.useRef)(null),
    Vr,
    Hr;
  (t[136] !== K || t[137] !== zr || t[138] !== Nt || t[139] !== Pt
    ? ((Vr = () => {
        if (!Nt) {
          Br.current = null;
          return;
        }
        let e = JSON.stringify([K, Nt, Pt]);
        Br.current !== e && zr(Nt) && (Br.current = e);
      }),
      (Hr = [K, Nt, Pt, zr]),
      (t[136] = K),
      (t[137] = zr),
      (t[138] = Nt),
      (t[139] = Pt),
      (t[140] = Vr),
      (t[141] = Hr))
    : ((Vr = t[140]), (Hr = t[141])),
    (0, z.useEffect)(Vr, Hr));
  let Ur;
  t[142] !== I || t[143] !== He || t[144] !== at || t[145] !== N
    ? ((Ur = (e) => {
        ze({
          threadRef: N,
          filePath: e,
          activeCwd: I,
          repositoryRoot: He,
          openInEditor: (e) => {
            (async () => {
              let t = await at(e);
              t._tag === `Failure` &&
                !ne(t) &&
                console.warn(`Failed to open diff file in editor.`, {
                  operation: `open-diff-file`,
                  ...(N ? { environmentId: N.environmentId, threadId: N.threadId } : {}),
                  ...y(se(t)),
                });
            })();
          },
        });
      }),
      (t[142] = I),
      (t[143] = He),
      (t[144] = at),
      (t[145] = N),
      (t[146] = Ur))
    : (Ur = t[146]);
  let Wr = Ur,
    Gr;
  t[147] === $
    ? (Gr = t[148])
    : ((Gr = (e) => {
        $((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        });
      }),
      (t[147] = $),
      (t[148] = Gr));
  let Kr = Ve(Gr),
    qr;
  t[149] === $
    ? (qr = t[150])
    : ((qr = (e) => {
        $((t) => {
          if (!t.has(e)) return t;
          let n = new Set(t);
          return (n.delete(e), n);
        });
      }),
      (t[149] = $),
      (t[150] = qr));
  let Jr = Ve(qr),
    Yr;
  t[151] !== br || t[152] !== $
    ? ((Yr = () => {
        (de(pn), $((e) => we(br, e)));
      }),
      (t[151] = br),
      (t[152] = $),
      (t[153] = Yr))
    : (Yr = t[153]);
  let Xr = Yr,
    Zr;
  t[154] === N
    ? (Zr = t[155])
    : ((Zr = (e) => {
        N && xt.getState().selectTurn(N, e);
      }),
      (t[154] = N),
      (t[155] = Zr));
  let Qr = Zr,
    $r;
  t[156] === N
    ? ($r = t[157])
    : (($r = (e) => {
        N && xt.getState().selectGitScope(N, e);
      }),
      (t[156] = N),
      (t[157] = $r));
  let ei = $r,
    ti;
  t[158] === N
    ? (ti = t[159])
    : ((ti = (e) => {
        N && xt.getState().selectBranchBaseRef(N, e);
      }),
      (t[158] = N),
      (t[159] = ti));
  let ni = ti,
    ri = G ? `turn:${G.runId}` : ``,
    ii = H === null ? U : G?.runId === Bt?.runId ? `latest` : ri,
    ai;
  t[160] !== Bt || t[161] !== V || t[162] !== ei || t[163] !== Qr
    ? ((ai = (e) => {
        if (e === `unstaged` || e === `branch`) ei(e);
        else if (e === `latest`) Bt && Qr(Bt.runId);
        else {
          let t = V.find((t) => `turn:${t.runId}` === e);
          t && Qr(t.runId);
        }
      }),
      (t[160] = Bt),
      (t[161] = V),
      (t[162] = ei),
      (t[163] = Qr),
      (t[164] = ai))
    : (ai = t[164]);
  let oi = ai,
    si;
  t[165] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((si = (0, B.jsx)(_, { size: `xs`, variant: `secondary` })), (t[165] = si))
    : (si = t[165]);
  let ci = `Diff scope: ${Ht}`,
    li;
  t[166] === Ht
    ? (li = t[167])
    : ((li = (0, B.jsx)(`span`, { className: `truncate`, children: Ht })),
      (t[166] = Ht),
      (t[167] = li));
  let ui;
  t[168] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ui = (0, B.jsx)(i, { className: `size-3.5 shrink-0 opacity-70` })), (t[168] = ui))
    : (ui = t[168]);
  let di;
  t[169] !== ci || t[170] !== li
    ? ((di = (0, B.jsxs)(le, {
        render: si,
        className: `max-w-full`,
        "aria-label": ci,
        children: [li, ui],
      })),
      (t[169] = ci),
      (t[170] = li),
      (t[171] = di))
    : (di = t[171]);
  let fi;
  t[172] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fi = (0, B.jsx)(fe, {
        value: `branch`,
        closeOnClick: !0,
        children: (0, B.jsx)(`span`, { children: `Changes` }),
      })),
      (t[172] = fi))
    : (fi = t[172]);
  let pi;
  t[173] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pi = (0, B.jsx)(fe, {
        value: `unstaged`,
        closeOnClick: !0,
        children: (0, B.jsx)(`span`, { children: `Uncommitted` }),
      })),
      (t[173] = pi))
    : (pi = t[173]);
  let mi;
  t[174] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mi = (0, B.jsx)(fe, {
        value: `latest`,
        closeOnClick: !0,
        children: (0, B.jsx)(`span`, { children: `Latest turn` }),
      })),
      (t[174] = mi))
    : (mi = t[174]);
  let hi;
  t[175] !== oi || t[176] !== ii
    ? ((hi = (0, B.jsxs)(re, { value: ii, onValueChange: oi, children: [fi, pi, mi] })),
      (t[175] = oi),
      (t[176] = ii),
      (t[177] = hi))
    : (hi = t[177]);
  let gi;
  t[178] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gi = (0, B.jsx)(me, { children: `Turn` })), (t[178] = gi))
    : (gi = t[178]);
  let _i;
  if (t[179] !== V || t[180] !== x.timestampFormat) {
    let e;
    (t[182] === x.timestampFormat
      ? (e = t[183])
      : ((e = (e) => {
          let t = e.checkpointTurnCount;
          return (0, B.jsx)(
            fe,
            {
              value: `turn:${e.runId}`,
              closeOnClick: !0,
              children: (0, B.jsxs)(`span`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, B.jsxs)(`span`, { children: [`Turn `, t] }),
                  (0, B.jsx)(`span`, {
                    className: `ml-auto text-xs tabular-nums text-muted-foreground`,
                    children: Xe(e.completedAt, x.timestampFormat),
                  }),
                ],
              }),
            },
            e.runId,
          );
        }),
        (t[182] = x.timestampFormat),
        (t[183] = e)),
      (_i = V.map(e)),
      (t[179] = V),
      (t[180] = x.timestampFormat),
      (t[181] = _i));
  } else _i = t[181];
  let vi;
  t[184] !== oi || t[185] !== ri || t[186] !== _i
    ? ((vi = (0, B.jsxs)(ie, {
        children: [
          gi,
          (0, B.jsx)(ae, {
            children: (0, B.jsx)(re, { value: ri, onValueChange: oi, children: _i }),
          }),
        ],
      })),
      (t[184] = oi),
      (t[185] = ri),
      (t[186] = _i),
      (t[187] = vi))
    : (vi = t[187]);
  let yi;
  t[188] !== hi || t[189] !== vi
    ? ((yi = (0, B.jsxs)(oe, { align: `start`, children: [hi, vi] })),
      (t[188] = hi),
      (t[189] = vi),
      (t[190] = yi))
    : (yi = t[190]);
  let bi;
  t[191] !== di || t[192] !== yi
    ? ((bi = (0, B.jsxs)(T, { children: [di, yi] })), (t[191] = di), (t[192] = yi), (t[193] = bi))
    : (bi = t[193]);
  let xi =
      H === null &&
      U === `branch` &&
      Z?.baseRef &&
      (0, B.jsxs)(`div`, {
        className: `flex min-w-0 max-w-full items-center gap-2 overflow-hidden text-xs text-muted-foreground`,
        "aria-label": `Comparing ${Z.headRef ?? `HEAD`} against ${Z.baseRef}`,
        children: [
          (0, B.jsxs)(h, {
            children: [
              (0, B.jsxs)(j, {
                render: (0, B.jsx)(`span`, {
                  className: `flex min-w-[min(3rem,calc(100%-2.75rem))] items-center gap-2 overflow-hidden`,
                }),
                children: [
                  (0, B.jsx)(`span`, {
                    className: `min-w-0 max-w-48 truncate`,
                    children: Z.headRef ?? `HEAD`,
                  }),
                  (0, B.jsx)(o, { className: `size-3.5 shrink-0 opacity-70` }),
                ],
              }),
              (0, B.jsx)(k, { side: `top`, children: `${Z.headRef ?? `HEAD`} → ${Z.baseRef}` }),
            ],
          }),
          (0, B.jsxs)(it, {
            items: qn,
            filteredItems: Jn,
            value: W ?? Qt,
            onOpenChange: (e) => {
              e || M(``);
            },
            onValueChange: (e) => {
              e && ni(e === Qt ? null : e);
            },
            children: [
              (0, B.jsxs)($e, {
                render: (0, B.jsx)(_, { variant: `ghost-muted`, size: `xs` }),
                className: `min-w-9 max-w-48 shrink`,
                "aria-label": `Change comparison target. Currently ${Z.baseRef}`,
                children: [
                  (0, B.jsx)(`span`, { className: `min-w-0 truncate`, children: Z.baseRef }),
                  (0, B.jsx)(i, { className: `size-3.5 shrink-0 opacity-70` }),
                ],
              }),
              (0, B.jsxs)(tt, {
                align: `start`,
                className: `w-72 min-w-0 max-w-[calc(100vw-1rem)] overflow-hidden`,
                children: [
                  (0, B.jsx)(rt, {
                    placeholder: `Search refs...`,
                    value: A,
                    onChange: (e) => M(e.target.value),
                  }),
                  (0, B.jsxs)(`div`, {
                    className: `grid shrink-0 grid-cols-[1rem_minmax(0,1fr)] items-center gap-2 border-b border-border/70 ps-3 pe-6.5 pt-2 pb-1.5 font-medium text-3xs text-muted-foreground uppercase tracking-wide`,
                    children: [
                      (0, B.jsx)(`span`, { "aria-hidden": `true` }),
                      (0, B.jsxs)(`div`, {
                        className: `grid min-w-0 grid-cols-[minmax(0,1fr)_2rem] items-center`,
                        children: [
                          (0, B.jsx)(`span`, { children: `Branch` }),
                          (0, B.jsx)(`span`, { className: `text-right`, children: `Remote` }),
                        ],
                      }),
                    ],
                  }),
                  (0, B.jsx)(et, { children: `No matching refs.` }),
                  (0, B.jsxs)(Qe, {
                    className: `max-h-64 min-w-0 overflow-x-hidden`,
                    children: [
                      (0, B.jsx)(nt, {
                        className: `w-full min-w-0 grid-cols-[1rem_minmax(0,1fr)]`,
                        value: Qt,
                        children: (0, B.jsx)(`span`, {
                          className: `block min-w-0 truncate`,
                          children: `Automatic`,
                        }),
                      }),
                      Un.map((e) => {
                        let t = Kn(e),
                          n = e.local !== null && e.remote !== null,
                          r = e.remote?.name === t;
                        return (0, B.jsx)(
                          nt,
                          {
                            className: `w-full min-w-0 grid-cols-[1rem_minmax(0,1fr)]`,
                            value: t,
                            children: (0, B.jsxs)(`div`, {
                              className: `grid w-full min-w-0 grid-cols-[minmax(0,1fr)_2rem] items-center overflow-hidden`,
                              children: [
                                (0, B.jsx)(`span`, {
                                  className: `block min-w-0 truncate pe-2`,
                                  children: e.label,
                                }),
                                n
                                  ? (0, B.jsx)(`div`, {
                                      className: `flex justify-end`,
                                      onClick: fn,
                                      onPointerDown: dn,
                                      children: (0, B.jsx)(dt, {
                                        "aria-label": `Use remote version of ${e.label}`,
                                        checked: r,
                                        className: `[--thumb-size:--spacing(3)]`,
                                        onCheckedChange: (t) => {
                                          let n = t ? e.remote?.name : e.local?.name;
                                          n && ni(n);
                                        },
                                      }),
                                    })
                                  : e.remote
                                    ? (0, B.jsxs)(h, {
                                        children: [
                                          (0, B.jsx)(j, {
                                            render: (0, B.jsx)(`span`, {
                                              className: `flex justify-end text-muted-foreground`,
                                              children: (0, B.jsx)(a, {
                                                role: `img`,
                                                "aria-label": `Remote only`,
                                                className: `size-3`,
                                              }),
                                            }),
                                          }),
                                          (0, B.jsx)(k, { side: `top`, children: `Remote only` }),
                                        ],
                                      })
                                    : null,
                              ],
                            }),
                          },
                          e.id,
                        );
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    Si;
  t[194] !== bi || t[195] !== xi
    ? ((Si = (0, B.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 items-center gap-3 [-webkit-app-region:no-drag]`,
        children: [bi, xi],
      })),
      (t[194] = bi),
      (t[195] = xi),
      (t[196] = Si))
    : (Si = t[196]);
  let Ci;
  t[197] !== Dr.length || t[198] !== Nr || t[199] !== Z?.files?.length || t[200] !== G
    ? ((Ci =
        Dr.length > 0 || (!G && Z?.files?.length)
          ? (0, B.jsx)(Fe, {
              additions: Nr.additions,
              deletions: Nr.deletions,
              className: `mr-1 text-2xs`,
              layout: `inline`,
            })
          : null),
      (t[197] = Dr.length),
      (t[198] = Nr),
      (t[199] = Z?.files?.length),
      (t[200] = G),
      (t[201] = Ci))
    : (Ci = t[201]);
  let wi;
  t[202] !== J || t[203] !== vr || t[204] !== jn
    ? ((wi =
        J &&
        (0, B.jsxs)(h, {
          children: [
            (0, B.jsx)(j, {
              render: (0, B.jsx)(_, {
                type: `button`,
                size: `icon-sm`,
                variant: `ghost`,
                "aria-label": vr ? `Refreshing diff` : `Refresh diff`,
                onClick: jn,
              }),
              children: (0, B.jsx)(ot, { size: `sm`, refreshing: vr }),
            }),
            (0, B.jsx)(k, { side: `top`, children: vr ? `Refreshing diff…` : `Refresh diff` }),
          ],
        })),
      (t[202] = J),
      (t[203] = vr),
      (t[204] = jn),
      (t[205] = wi))
    : (wi = t[205]);
  let Ti;
  t[206] !== jr || t[207] !== br.length || t[208] !== Xr
    ? ((Ti =
        br.length > 0 &&
        (0, B.jsxs)(h, {
          children: [
            (0, B.jsx)(j, {
              render: (0, B.jsx)(_, {
                type: `button`,
                size: `icon-sm`,
                variant: `ghost`,
                "aria-label": jr ? `Expand all files` : `Collapse all files`,
                onClick: Xr,
              }),
              children: (0, B.jsx)(Se, {
                className: `size-3.5`,
                icon: jr ? wt.ChevronsUpDown : wt.ChevronsDownUp,
              }),
            }),
            (0, B.jsx)(k, {
              side: `top`,
              children: jr ? `Expand all files` : `Collapse all files`,
            }),
          ],
        })),
      (t[206] = jr),
      (t[207] = br.length),
      (t[208] = Xr),
      (t[209] = Ti))
    : (Ti = t[209]);
  let Ei;
  t[210] === S ? (Ei = t[211]) : ((Ei = [S]), (t[210] = S), (t[211] = Ei));
  let Di;
  t[212] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Di = (0, B.jsx)(yt, {
        "aria-label": `Stacked diff view`,
        value: `stacked`,
        children: (0, B.jsx)(d, { className: `size-3.5` }),
      })),
      (t[212] = Di))
    : (Di = t[212]);
  let Oi;
  t[213] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oi = (0, B.jsx)(yt, {
        "aria-label": `Split diff view`,
        value: `split`,
        children: (0, B.jsx)(u, { className: `size-3.5` }),
      })),
      (t[213] = Oi))
    : (Oi = t[213]);
  let ki;
  t[214] === Ei
    ? (ki = t[215])
    : ((ki = (0, B.jsxs)(st, {
        "aria-label": `Diff layout`,
        className: `shrink-0`,
        variant: `segmented`,
        value: Ei,
        onValueChange: un,
        children: [Di, Oi],
      })),
      (t[214] = Ei),
      (t[215] = ki));
  let Ai = C ? `Disable diff line wrapping` : `Enable diff line wrapping`,
    ji;
  t[216] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ji = (e) => {
        ee(!!e);
      }),
      (t[216] = ji))
    : (ji = t[216]);
  let Mi;
  t[217] !== Ai || t[218] !== C
    ? ((Mi = (0, B.jsx)(yt, {
        "aria-label": Ai,
        variant: `ghost`,
        size: `sm`,
        pressed: C,
        onPressedChange: ji,
      })),
      (t[217] = Ai),
      (t[218] = C),
      (t[219] = Mi))
    : (Mi = t[219]);
  let Ni;
  t[220] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ni = (0, B.jsx)(s, { className: `size-3.5` })), (t[220] = Ni))
    : (Ni = t[220]);
  let Pi;
  t[221] === Mi
    ? (Pi = t[222])
    : ((Pi = (0, B.jsx)(j, { render: Mi, children: Ni })), (t[221] = Mi), (t[222] = Pi));
  let Fi = C ? `Disable line wrapping` : `Enable line wrapping`,
    Ii;
  t[223] === Fi
    ? (Ii = t[224])
    : ((Ii = (0, B.jsx)(k, { side: `top`, children: Fi })), (t[223] = Fi), (t[224] = Ii));
  let Li;
  t[225] !== Pi || t[226] !== Ii
    ? ((Li = (0, B.jsxs)(h, { children: [Pi, Ii] })), (t[225] = Pi), (t[226] = Ii), (t[227] = Li))
    : (Li = t[227]);
  let Ri = E ? `Show whitespace changes` : `Hide whitespace changes`,
    zi;
  t[228] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zi = (e) => {
        te(!!e);
      }),
      (t[228] = zi))
    : (zi = t[228]);
  let Bi;
  t[229] !== E || t[230] !== Ri
    ? ((Bi = (0, B.jsx)(yt, {
        "aria-label": Ri,
        variant: `ghost`,
        size: `sm`,
        pressed: E,
        onPressedChange: zi,
      })),
      (t[229] = E),
      (t[230] = Ri),
      (t[231] = Bi))
    : (Bi = t[231]);
  let Vi;
  t[232] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vi = (0, B.jsx)(l, { className: `size-3.5` })), (t[232] = Vi))
    : (Vi = t[232]);
  let Hi;
  t[233] === Bi
    ? (Hi = t[234])
    : ((Hi = (0, B.jsx)(j, { render: Bi, children: Vi })), (t[233] = Bi), (t[234] = Hi));
  let Ui = E ? `Show whitespace changes` : `Hide whitespace changes`,
    Wi;
  t[235] === Ui
    ? (Wi = t[236])
    : ((Wi = (0, B.jsx)(k, { side: `top`, children: Ui })), (t[235] = Ui), (t[236] = Wi));
  let Gi;
  t[237] !== Hi || t[238] !== Wi
    ? ((Gi = (0, B.jsxs)(h, { children: [Hi, Wi] })), (t[237] = Hi), (t[238] = Wi), (t[239] = Gi))
    : (Gi = t[239]);
  let Ki;
  t[240] !== br.length || t[241] !== D || t[242] !== O
    ? ((Ki =
        br.length > 0 &&
        (0, B.jsxs)(h, {
          children: [
            (0, B.jsx)(j, {
              render: (0, B.jsx)(yt, {
                "aria-label": D ? `Hide file tree` : `Show file tree`,
                variant: `ghost`,
                size: `sm`,
                pressed: D,
                onPressedChange: (e) => O(!!e),
              }),
              children: (0, B.jsx)(f, { className: `size-3.5` }),
            }),
            (0, B.jsx)(k, { side: `top`, children: D ? `Hide file tree` : `Show file tree` }),
          ],
        })),
      (t[240] = br.length),
      (t[241] = D),
      (t[242] = O),
      (t[243] = Ki))
    : (Ki = t[243]);
  let qi;
  t[244] !== Ci ||
  t[245] !== wi ||
  t[246] !== Ti ||
  t[247] !== ki ||
  t[248] !== Li ||
  t[249] !== Gi ||
  t[250] !== Ki
    ? ((qi = (0, B.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1 [-webkit-app-region:no-drag]`,
        children: [Ci, wi, Ti, ki, Li, Gi, Ki],
      })),
      (t[244] = Ci),
      (t[245] = wi),
      (t[246] = Ti),
      (t[247] = ki),
      (t[248] = Li),
      (t[249] = Gi),
      (t[250] = Ki),
      (t[251] = qi))
    : (qi = t[251]);
  let Ji;
  t[252] !== Si || t[253] !== qi
    ? ((Ji = (0, B.jsxs)(B.Fragment, { children: [Si, qi] })),
      (t[252] = Si),
      (t[253] = qi),
      (t[254] = Ji))
    : (Ji = t[254]);
  let Yi = Ji,
    Xi;
  t[255] !== I ||
  t[256] !== He ||
  t[257] !== P ||
  t[258] !== F ||
  t[259] !== Dr ||
  t[260] !== Wt ||
  t[261] !== K ||
  t[262] !== Cr ||
  t[263] !== r ||
  t[264] !== In ||
  t[265] !== S ||
  t[266] !== xe.error ||
  t[267] !== xe.isPending ||
  t[268] !== er ||
  t[269] !== nr ||
  t[270] !== Dn ||
  t[271] !== Fr ||
  t[272] !== D ||
  t[273] !== On ||
  t[274] !== Dt ||
  t[275] !== kn ||
  t[276] !== An ||
  t[277] !== Y ||
  t[278] !== Rn ||
  t[279] !== Ye ||
  t[280] !== Wr ||
  t[281] !== V.length ||
  t[282] !== Ar ||
  t[283] !== Tr ||
  t[284] !== X ||
  t[285] !== v ||
  t[286] !== rr ||
  t[287] !== zr ||
  t[288] !== Ut ||
  t[289] !== Gt ||
  t[290] !== Nt ||
  t[291] !== Pt ||
  t[292] !== U ||
  t[293] !== Z?.files ||
  t[294] !== Nn ||
  t[295] !== H ||
  t[296] !== G ||
  t[297] !== Kr ||
  t[298] !== Jr ||
  t[299] !== C
    ? ((Xi = P
        ? Dt
          ? H !== null && V.length === 0
            ? (0, B.jsx)(`div`, {
                className: `flex flex-1 items-center justify-center px-5 text-center text-xs text-muted-foreground/70`,
                children: `No completed turns yet.`,
              })
            : H === null && !F
              ? xe.isPending
                ? (0, B.jsx)(Je, { label: `Checking file access...` })
                : (0, B.jsx)(`div`, {
                    className: `flex flex-1 items-center justify-center px-5 text-center text-xs text-muted-foreground/70`,
                    children: xe.error ?? `This connection cannot read local diffs.`,
                  })
              : (0, B.jsx)(B.Fragment, {
                  children: (0, B.jsxs)(`div`, {
                    className: `flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-background`,
                    children: [
                      An &&
                        !Y &&
                        (0, B.jsxs)(`p`, {
                          className: `shrink-0 border-b border-border/70 bg-muted/40 px-3 py-1.5 text-2xs text-muted-foreground`,
                          children: [
                            `This preview exceeds the size limit. Changes shown are incomplete.`,
                            Z?.files ? ` Totals include all changes.` : ``,
                          ],
                        }),
                      Nn &&
                        !X &&
                        (0, B.jsx)(`div`, {
                          className: `px-3`,
                          children: (0, B.jsx)(`p`, {
                            className: `mb-2 text-2xs text-error/80`,
                            children: Nn,
                          }),
                        }),
                      !X && !Y
                        ? kn
                          ? (0, B.jsx)(Je, {
                              label: G
                                ? `Loading checkpoint diff...`
                                : U === `unstaged`
                                  ? `Loading uncommitted changes...`
                                  : `Loading changes...`,
                            })
                          : (0, B.jsx)(`div`, {
                              className: `flex h-full items-center justify-center px-3 py-2 text-xs text-muted-foreground/70`,
                              children: (0, B.jsx)(`p`, {
                                children: On
                                  ? `No net changes in this selection.`
                                  : `No patch available for this selection.`,
                              }),
                            })
                        : Y || X?.kind === `files`
                          ? (0, B.jsxs)(`div`, {
                              className: `flex min-h-0 flex-1 overflow-hidden`,
                              children: [
                                (0, B.jsx)(`div`, {
                                  className: `min-h-0 min-w-0 flex-1`,
                                  onClickCapture: (e) => {
                                    let t = e.nativeEvent.composedPath?.() ?? [];
                                    for (let e of t)
                                      if (
                                        e instanceof HTMLElement &&
                                        (e instanceof HTMLButtonElement ||
                                          e instanceof HTMLAnchorElement)
                                      )
                                        return;
                                    let n = t.find(ln)?.textContent;
                                    if (n) {
                                      Wr(n);
                                      return;
                                    }
                                    let r = t.find(cn)?.querySelector(`[data-title]`)?.textContent;
                                    if (!r) return;
                                    let i = Dr.find((e) => e.filePath === r);
                                    i && Kr(i.fileKey);
                                  },
                                  onContextMenuCapture: (e) => {
                                    let t = (e.nativeEvent.composedPath?.() ?? [])
                                      .find(sn)
                                      ?.textContent?.trim();
                                    t &&
                                      (e.preventDefault(),
                                      Ye(
                                        {
                                          environmentId: P?.environmentId ?? null,
                                          filePath: t,
                                          workspaceRoot: I,
                                          repositoryRoot: He,
                                        },
                                        e,
                                      ));
                                  },
                                  children: (0, B.jsx)(
                                    At,
                                    {
                                      viewerRef: ge,
                                      codeViewKey: `${Wt}:${Y ? er : `preview`}`,
                                      className: `h-full min-h-0 overflow-auto`,
                                      files: Dr,
                                      pendingFiles: Ar,
                                      renderCodeViewFooter: Tr,
                                      sectionId: Ut,
                                      sectionTitle: Gt,
                                      composerDraftTarget: r,
                                      renderHeaderFilenameSuffix: (e) => {
                                        let t = L(e),
                                          n = nr.get(t);
                                        return (0, B.jsx)(an, {
                                          filePath: t,
                                          hasStat: Dn.has(t),
                                          error: n?.error ?? !1,
                                          truncated: n?.truncated ?? !1,
                                          onRetry: rr,
                                        });
                                      },
                                      ...(Y
                                        ? {
                                            unsafeCSSExtra: `[data-additions-count], [data-deletions-count] { display: none; }`,
                                            renderHeaderMetadata: (e) => {
                                              let t = Dn.get(L(e));
                                              return t
                                                ? (0, B.jsx)(Fe, {
                                                    additions: t.additions,
                                                    deletions: t.deletions,
                                                  })
                                                : null;
                                            },
                                          }
                                        : {}),
                                      onRevealSearchMatch: Jr,
                                      renderHeaderPrefix: (e, t) => {
                                        let n = e.cacheKey?.endsWith(`:pending`) === !0;
                                        return (0, B.jsx)(rn, {
                                          filePath: L(e),
                                          fileKey: t,
                                          collapsed: n || Cr.has(t),
                                          unavailable: n,
                                          iconClassName: ht(e),
                                          onToggle: Kr,
                                        });
                                      },
                                      options: {
                                        diffStyle: S === `split` ? `split` : `unified`,
                                        lineDiffType: `none`,
                                        overflow: C ? `wrap` : `scroll`,
                                        theme: ut(v),
                                        preferredHighlighter: ft,
                                        themeType: v,
                                        stickyHeaders: !0,
                                        ...(In ? { loadDiffFiles: Rn } : {}),
                                      },
                                    },
                                    K ?? Ut,
                                  ),
                                }),
                                D
                                  ? (0, B.jsx)(`aside`, {
                                      className: `flex w-[min(16rem,40%)] min-w-40 shrink-0 border-l border-border/60`,
                                      children: (0, B.jsx)(De, {
                                        ariaLabel: `${Gt} files`,
                                        entries: Fr,
                                        selectedPath: Nt,
                                        revealRequestId: Pt,
                                        onSelectFile: zr,
                                      }),
                                    })
                                  : null,
                              ],
                            })
                          : (0, B.jsx)(`div`, {
                              className: `min-h-0 flex-1 overflow-auto p-2`,
                              children: (0, B.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, B.jsx)(`p`, {
                                    className: `text-2xs text-muted-foreground/75`,
                                    children: X?.kind === `raw` ? X.reason : null,
                                  }),
                                  (0, B.jsx)(`pre`, {
                                    className: he(
                                      `max-h-[72vh] rounded-md border border-border/70 bg-background/70 p-3 font-mono text-2xs leading-relaxed text-muted-foreground/90`,
                                      C
                                        ? `overflow-auto whitespace-pre-wrap wrap-break-word`
                                        : `overflow-auto`,
                                    ),
                                    children: X?.kind === `raw` ? X.text : null,
                                  }),
                                ],
                              }),
                            }),
                    ],
                  }),
                })
          : (0, B.jsx)(`div`, {
              className: `flex flex-1 items-center justify-center px-5 text-center text-xs text-muted-foreground/70`,
              children: `Turn diffs are unavailable because this project is not a git repository.`,
            })
        : (0, B.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center px-5 text-center text-xs text-muted-foreground/70`,
            children: `Select a thread to inspect turn diffs.`,
          })),
      (t[255] = I),
      (t[256] = He),
      (t[257] = P),
      (t[258] = F),
      (t[259] = Dr),
      (t[260] = Wt),
      (t[261] = K),
      (t[262] = Cr),
      (t[263] = r),
      (t[264] = In),
      (t[265] = S),
      (t[266] = xe.error),
      (t[267] = xe.isPending),
      (t[268] = er),
      (t[269] = nr),
      (t[270] = Dn),
      (t[271] = Fr),
      (t[272] = D),
      (t[273] = On),
      (t[274] = Dt),
      (t[275] = kn),
      (t[276] = An),
      (t[277] = Y),
      (t[278] = Rn),
      (t[279] = Ye),
      (t[280] = Wr),
      (t[281] = V.length),
      (t[282] = Ar),
      (t[283] = Tr),
      (t[284] = X),
      (t[285] = v),
      (t[286] = rr),
      (t[287] = zr),
      (t[288] = Ut),
      (t[289] = Gt),
      (t[290] = Nt),
      (t[291] = Pt),
      (t[292] = U),
      (t[293] = Z?.files),
      (t[294] = Nn),
      (t[295] = H),
      (t[296] = G),
      (t[297] = Kr),
      (t[298] = Jr),
      (t[299] = C),
      (t[300] = Xi))
    : (Xi = t[300]);
  let Zi;
  return (
    t[301] !== Yi || t[302] !== g || t[303] !== Xi
      ? ((Zi = (0, B.jsx)(Ge, { mode: g, header: Yi, children: Xi })),
        (t[301] = Yi),
        (t[302] = g),
        (t[303] = Xi),
        (t[304] = Zi))
      : (Zi = t[304]),
    Zi
  );
}
function sn(e) {
  return e instanceof HTMLElement && e.hasAttribute(`data-title`);
}
function cn(e) {
  return e instanceof HTMLElement && e.hasAttribute(`data-diffs-header`);
}
function ln(e) {
  return e instanceof HTMLElement && e.hasAttribute(`data-title`);
}
function un(e) {
  let t = e[0];
  (t === `stacked` || t === `split`) && F({ diffLayout: t });
}
function dn(e) {
  return e.stopPropagation();
}
function fn(e) {
  return e.stopPropagation();
}
function pn(e) {
  return e + 1;
}
function mn(e) {
  return e.cacheKey?.endsWith(`:pending`);
}
function hn(e) {
  return e.fileKey;
}
function gn(e) {
  return e.fileKey;
}
function _n(e, t) {
  return { additions: e.additions + t.additions, deletions: e.deletions + t.deletions };
}
function vn(e) {
  return [e.path, e];
}
function yn(e) {
  return e.runId;
}
function bn(e, t) {
  return e.checkpointTurnCount === t.checkpointTurnCount
    ? t.completedAt.localeCompare(e.completedAt)
    : t.checkpointTurnCount - e.checkpointTurnCount;
}
function xn(e) {
  return {
    diffFilesCollapsed: e.diffFilesCollapsed,
    diffIgnoreWhitespace: e.diffIgnoreWhitespace,
    diffLayout: e.diffLayout,
    timestampFormat: e.timestampFormat,
    wordWrap: e.wordWrap,
  };
}
export { on as default };
//# sourceMappingURL=DiffPanel-B0ioejCj.js.map
