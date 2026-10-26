import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./bug-DlIKxWwP.js";
import { t as a } from "./flask-conical-DZhOVoEX.js";
import { t as o } from "./hammer-BlA2TBr3.js";
import { t as s } from "./list-checks-BdlQceUX.js";
import { t as c } from "./wrench-Cg4kFLzp.js";
import {
  Dr as l,
  L_ as u,
  Xl as ee,
  Xp as d,
  _r as te,
  eb as f,
  iu as ne,
  j_ as p,
  kh as m,
  sn as re,
} from "./utils-CPoejuy5.js";
import { a as ie, r as ae } from "./session-0UrRHIau.js";
import { t as oe } from "./textarea-C9Xds9D7.js";
import { a as h, c as se, l as g, n as _, o as ce, s as v, u as le } from "./dialog-BjeWpelT.js";
import { D as ue, E as de } from "./keybindings-b_9MjE1R.js";
import { f as y } from "./projectFilesQueryState-U0XPiqIE.js";
import { t as b } from "./t3ProjectFile-7gwVsbWF.js";
import { u as x } from "./KeybindingsSettings.logic-B3BUIgft.js";
import {
  Gi as fe,
  Hi as S,
  Ji as pe,
  Ki as me,
  Mi as C,
  Rs as w,
  Ui as T,
  Wi as E,
  as as D,
  es as he,
  ll as O,
  qi as k,
  rs as ge,
} from "./main-BZa0O6xN.js";
var _e = n(),
  A = [];
function j(e, t) {
  let n = (0, _e.c)(8),
    r = y(e, t ?? ``, d, t !== null),
    i = r.data && !r.data.truncated ? r.data.contents : null,
    a = r.isPending;
  if (i === null) {
    let e = a ? `loading` : `missing`,
      t;
    return (
      n[0] === e
        ? (t = n[1])
        : ((t = { status: e, file: null, scripts: A }), (n[0] = e), (n[1] = t)),
      t
    );
  }
  let o;
  n[2] === i ? (o = n[3]) : ((o = b(i)), (n[2] = i), (n[3] = o));
  let s = o;
  if (s === null) {
    let e;
    return (
      n[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { status: `invalid`, file: null, scripts: A }), (n[4] = e))
        : (e = n[4]),
      e
    );
  }
  let c = s.scripts ?? A,
    l;
  return (
    n[5] !== s || n[6] !== c
      ? ((l = { status: `valid`, file: s, scripts: c }), (n[5] = s), (n[6] = c), (n[7] = l))
      : (l = n[7]),
    l
  );
}
function M(e, t) {
  return j(e, t).scripts;
}
var N = e(t(), 1),
  P = `Invalid keybinding.`,
  F = f(m);
function I(e) {
  let t = e?.trim() ?? ``;
  return t.length > 0 ? t : null;
}
function ve(e) {
  let t = I(e.keybinding);
  if (!t) return null;
  if (e.command === null) throw Error(P);
  let n = F({ key: t, command: e.command });
  if (n._tag === `None`) throw Error(P);
  return n.value;
}
function ye(e, t) {
  if (t === null) return null;
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (!r || r.command !== t) continue;
    let i = [];
    (r.shortcut.modKey && i.push(`mod`),
      r.shortcut.ctrlKey && i.push(`ctrl`),
      r.shortcut.metaKey && i.push(`meta`),
      r.shortcut.altKey && i.push(`alt`),
      r.shortcut.shiftKey && i.push(`shift`));
    let a = r.shortcut.key === ` ` ? `space` : r.shortcut.key === `escape` ? `esc` : r.shortcut.key;
    return (i.push(a), i.join(`+`));
  }
  return null;
}
var L = e(r(), 1),
  be = [
    { id: `play`, label: `Play` },
    { id: `test`, label: `Test` },
    { id: `lint`, label: `Lint` },
    { id: `configure`, label: `Configure` },
    { id: `build`, label: `Build` },
    { id: `debug`, label: `Debug` },
  ];
function xe(e) {
  let t = (0, _e.c)(12),
    { icon: n, className: r } = e,
    l = r === void 0 ? `size-3.5` : r;
  if (n === `test`) {
    let e;
    return (
      t[0] === l ? (e = t[1]) : ((e = (0, L.jsx)(a, { className: l })), (t[0] = l), (t[1] = e)), e
    );
  }
  if (n === `lint`) {
    let e;
    return (
      t[2] === l ? (e = t[3]) : ((e = (0, L.jsx)(s, { className: l })), (t[2] = l), (t[3] = e)), e
    );
  }
  if (n === `configure`) {
    let e;
    return (
      t[4] === l ? (e = t[5]) : ((e = (0, L.jsx)(c, { className: l })), (t[4] = l), (t[5] = e)), e
    );
  }
  if (n === `build`) {
    let e;
    return (
      t[6] === l ? (e = t[7]) : ((e = (0, L.jsx)(o, { className: l })), (t[6] = l), (t[7] = e)), e
    );
  }
  if (n === `debug`) {
    let e;
    return (
      t[8] === l ? (e = t[9]) : ((e = (0, L.jsx)(i, { className: l })), (t[8] = l), (t[9] = e)), e
    );
  }
  let u;
  return (
    t[10] === l ? (u = t[11]) : ((u = (0, L.jsx)(O, { className: l })), (t[10] = l), (t[11] = u)), u
  );
}
var R = {
  name: ``,
  command: ``,
  icon: `play`,
  runOnWorktreeCreate: !1,
  waitForSetup: !1,
  runOnSettle: !1,
  keybinding: null,
  previewUrl: null,
  autoOpenPreview: !1,
};
function Se(e, t) {
  return {
    scriptId: e.id,
    initial: {
      name: e.name,
      command: e.command,
      icon: e.icon,
      runOnWorktreeCreate: e.runOnWorktreeCreate,
      waitForSetup: e.runOnWorktreeCreate && e.async === !1,
      runOnSettle: e.runOnSettle ?? !1,
      keybinding: ye(t, de(e.id)),
      previewUrl: e.previewUrl ?? null,
      autoOpenPreview: e.autoOpenPreview ?? !1,
    },
  };
}
function z(e) {
  let t = (0, _e.c)(49),
    {
      environmentId: n,
      editScope: r,
      request: i,
      scripts: a,
      onSubmit: o,
      onDelete: s,
      onClose: c,
    } = e,
    u = r === void 0 ? p : r,
    ee = ie(n, u),
    [d, te] = (0, N.useState)(null),
    f = i === null ? null : d?.request === i ? d.message : (i.error ?? null),
    ne;
  t[0] === i
    ? (ne = t[1])
    : ((ne = (e) => {
        i !== null && te({ request: i, message: e });
      }),
      (t[0] = i),
      (t[1] = ne));
  let m = ne,
    oe;
  t[2] === i
    ? (oe = t[3])
    : ((oe = i === null ? null : { request: i, key: 0 }), (t[2] = i), (t[3] = oe));
  let [h, se] = (0, N.useState)(oe);
  i !== null && i !== h?.request && se({ request: i, key: (h?.key ?? 0) + 1 });
  let [ce, v] = re(!ee),
    [le, ue] = (0, N.useState)(``),
    de = i !== null,
    y;
  t[4] === c
    ? (y = t[5])
    : ((y = (e) => {
        e || c();
      }),
      (t[4] = c),
      (t[5] = y));
  let b;
  t[6] !== u ||
  t[7] !== n ||
  t[8] !== c ||
  t[9] !== o ||
  t[10] !== a ||
  t[11] !== v ||
  t[12] !== m ||
  t[13] !== h ||
  t[14] !== f
    ? ((b = h
        ? (0, L.jsx)(
            Ce,
            {
              environmentId: n,
              editScope: u,
              request: h.request,
              scripts: a,
              validationError: f,
              onValidationError: m,
              onSubmit: o,
              onRequestDelete: (e) => {
                (ue(e), v(!0));
              },
              onClose: c,
            },
            h.key,
          )
        : null),
      (t[6] = u),
      (t[7] = n),
      (t[8] = c),
      (t[9] = o),
      (t[10] = a),
      (t[11] = v),
      (t[12] = m),
      (t[13] = h),
      (t[14] = f),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === b ? (x = t[17]) : ((x = (0, L.jsx)(g, { children: b })), (t[16] = b), (t[17] = x));
  let C;
  t[18] !== de || t[19] !== y || t[20] !== x
    ? ((C = (0, L.jsx)(_, { open: de, onOpenChange: y, children: x })),
      (t[18] = de),
      (t[19] = y),
      (t[20] = x),
      (t[21] = C))
    : (C = t[21]);
  let w = ce && ee,
    D;
  t[22] === le
    ? (D = t[23])
    : ((D = (0, L.jsxs)(pe, { children: [`Delete action "`, le, `"?`] })),
      (t[22] = le),
      (t[23] = D));
  let he;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, L.jsx)(E, { children: `This action cannot be undone.` })), (t[24] = he))
    : (he = t[24]);
  let O;
  t[25] === D
    ? (O = t[26])
    : ((O = (0, L.jsxs)(me, { children: [D, he] })), (t[25] = D), (t[26] = O));
  let ge;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, L.jsx)(T, { render: (0, L.jsx)(l, { variant: `outline` }), children: `Cancel` })),
      (t[27] = ge))
    : (ge = t[27]);
  let A = !ee,
    j;
  t[28] !== u ||
  t[29] !== n ||
  t[30] !== c ||
  t[31] !== s ||
  t[32] !== i ||
  t[33] !== v ||
  t[34] !== m
    ? ((j = () => {
        i?.scriptId &&
          (ae(n, u)
            ? (v(!1), c(), s(i.scriptId))
            : m(`This connection cannot change project actions.`));
      }),
      (t[28] = u),
      (t[29] = n),
      (t[30] = c),
      (t[31] = s),
      (t[32] = i),
      (t[33] = v),
      (t[34] = m),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== A || t[37] !== j
    ? ((M = (0, L.jsxs)(fe, {
        children: [
          ge,
          (0, L.jsx)(l, {
            variant: `destructive`,
            disabled: A,
            onClick: j,
            children: `Delete action`,
          }),
        ],
      })),
      (t[36] = A),
      (t[37] = j),
      (t[38] = M))
    : (M = t[38]);
  let P;
  t[39] !== O || t[40] !== M
    ? ((P = (0, L.jsxs)(k, { children: [O, M] })), (t[39] = O), (t[40] = M), (t[41] = P))
    : (P = t[41]);
  let F;
  t[42] !== v || t[43] !== P || t[44] !== w
    ? ((F = (0, L.jsx)(S, { open: w, onOpenChange: v, children: P })),
      (t[42] = v),
      (t[43] = P),
      (t[44] = w),
      (t[45] = F))
    : (F = t[45]);
  let I;
  return (
    t[46] !== F || t[47] !== C
      ? ((I = (0, L.jsxs)(L.Fragment, { children: [C, F] })), (t[46] = F), (t[47] = C), (t[48] = I))
      : (I = t[48]),
    I
  );
}
function Ce(e) {
  let t = (0, _e.c)(134),
    {
      environmentId: n,
      editScope: r,
      request: i,
      scripts: a,
      validationError: o,
      onValidationError: s,
      onSubmit: c,
      onRequestDelete: d,
      onClose: f,
    } = e,
    p = ie(n, r),
    m = ie(n, u),
    g = N.useId(),
    [_, y] = (0, N.useState)(i.initial.name),
    [b, fe] = (0, N.useState)(i.initial.command),
    [S, pe] = (0, N.useState)(i.initial.icon),
    [me, T] = re(!p),
    [E, O] = (0, N.useState)(i.initial.runOnWorktreeCreate),
    [k, A] = (0, N.useState)(i.initial.waitForSetup),
    [j, M] = (0, N.useState)(i.initial.runOnSettle),
    [P, F] = (0, N.useState)(i.initial.keybinding ?? ``),
    [I, ye] = (0, N.useState)(i.initial.previewUrl ?? ``),
    [R, Se] = (0, N.useState)(i.initial.autoOpenPreview),
    [z, Ce] = (0, N.useState)(!1),
    B = (0, N.useRef)(null),
    Te,
    Ee;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = () => () => {
        B.current = null;
      }),
      (Ee = []),
      (t[0] = Te),
      (t[1] = Ee))
    : ((Te = t[0]), (Ee = t[1])),
    (0, N.useEffect)(Te, Ee));
  let V = i.scriptId != null,
    De;
  t[2] !== f || t[3] !== T
    ? ((De = () => {
        ((B.current = null), Ce(!1), T(!1), f());
      }),
      (t[2] = f),
      (t[3] = T),
      (t[4] = De))
    : (De = t[4]);
  let H = De,
    Oe;
  t[5] !== r || t[6] !== n
    ? ((Oe = (e) => {
        if (!ae(n, r) || !ae(n, `settings:write`) || e.key === `Tab`) return;
        if ((e.preventDefault(), e.key === `Backspace` || e.key === `Delete`)) {
          F(``);
          return;
        }
        let t = x(e, navigator.platform);
        t && F(t);
      }),
      (t[5] = r),
      (t[6] = n),
      (t[7] = Oe))
    : (Oe = t[7]);
  let ke = Oe,
    Ae;
  t[8] !== R ||
  t[9] !== H ||
  t[10] !== b ||
  t[11] !== r ||
  t[12] !== n ||
  t[13] !== S ||
  t[14] !== P ||
  t[15] !== _ ||
  t[16] !== c ||
  t[17] !== I ||
  t[18] !== i.initial.keybinding ||
  t[19] !== i.scriptId ||
  t[20] !== j ||
  t[21] !== E ||
  t[22] !== a ||
  t[23] !== T ||
  t[24] !== s ||
  t[25] !== k
    ? ((Ae = async (e) => {
        if ((e.preventDefault(), B.current !== null)) return;
        if (!ae(n, r)) {
          s(`This connection cannot change project actions.`);
          return;
        }
        let t = (P.trim() || null) !== (i.initial.keybinding?.trim() || null),
          o = ae(n, u);
        if (t && !o) {
          s(`This connection cannot change keyboard shortcuts.`);
          return;
        }
        let l = _.trim(),
          d = b.trim();
        if (l.length === 0) {
          s(`Name is required.`);
          return;
        }
        if (d.length === 0) {
          s(`Command is required.`);
          return;
        }
        s(null);
        let te;
        try {
          let e = i.scriptId ?? ue(l, a.map(we)),
            n = ve({ keybinding: P, command: de(e) }),
            r = I.trim();
          te = {
            name: l,
            command: d,
            icon: S,
            runOnWorktreeCreate: E,
            waitForSetup: E && k,
            runOnSettle: j,
            ...((i.scriptId === null && o) || t ? { keybinding: n?.key ?? null } : {}),
            previewUrl: r.length > 0 ? r : null,
            autoOpenPreview: r.length > 0 && R,
          };
        } catch (e) {
          let t = e;
          s(t instanceof Error ? t.message : `Failed to save action.`);
          return;
        }
        let f = {};
        ((B.current = f), Ce(!0), T(!1));
        try {
          let e = await c(i.scriptId, te);
          if (B.current === f) {
            if (e._tag === `Failure`) {
              if (!ee(e)) {
                let t = ne(e);
                s(t instanceof Error ? t.message : `Failed to save action.`);
              }
            } else H();
          }
        } catch (e) {
          let t = e;
          B.current === f && s(t instanceof Error ? t.message : `Failed to save action.`);
        }
        B.current === f && ((B.current = null), Ce(!1));
      }),
      (t[8] = R),
      (t[9] = H),
      (t[10] = b),
      (t[11] = r),
      (t[12] = n),
      (t[13] = S),
      (t[14] = P),
      (t[15] = _),
      (t[16] = c),
      (t[17] = I),
      (t[18] = i.initial.keybinding),
      (t[19] = i.scriptId),
      (t[20] = j),
      (t[21] = E),
      (t[22] = a),
      (t[23] = T),
      (t[24] = s),
      (t[25] = k),
      (t[26] = Ae))
    : (Ae = t[26]);
  let je = Ae,
    Me = V ? `Edit Action` : `Add Action`,
    U;
  t[27] === Me ? (U = t[28]) : ((U = (0, L.jsx)(le, { children: Me })), (t[27] = Me), (t[28] = U));
  let Ne;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, L.jsx)(h, {
        children: `Actions are project-scoped commands you can run from the top bar or keybindings.`,
      })),
      (t[29] = Ne))
    : (Ne = t[29]);
  let W;
  t[30] === U
    ? (W = t[31])
    : ((W = (0, L.jsxs)(v, { children: [U, Ne] })), (t[30] = U), (t[31] = W));
  let Pe = z || !p,
    Fe;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, L.jsx)(C, { htmlFor: `script-name`, children: `Name` })), (t[32] = Fe))
    : (Fe = t[32]);
  let Ie;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, L.jsx)(l, {
        type: `button`,
        variant: `outline`,
        className: `size-9 shrink-0`,
        "aria-label": `Choose icon`,
      })),
      (t[33] = Ie))
    : (Ie = t[33]);
  let G;
  t[34] === S
    ? (G = t[35])
    : ((G = (0, L.jsx)(D, {
        render: Ie,
        children: (0, L.jsx)(xe, { icon: S, className: `size-4.5` }),
      })),
      (t[34] = S),
      (t[35] = G));
  let K;
  t[36] !== S || t[37] !== T
    ? ((K = be.map((e) => {
        let t = e.id === S;
        return (0, L.jsxs)(
          `button`,
          {
            type: `button`,
            className: `relative flex flex-col items-center gap-2 rounded-md border px-2 py-2 text-xs dark:border-transparent ${t ? `border-primary/70 bg-primary/10 ring-inset dark:ring-1 dark:ring-primary/30` : `border-border/70 hover:bg-accent/60 dark:bg-white/[0.035]`}`,
            onClick: () => {
              (pe(e.id), T(!1));
            },
            children: [
              (0, L.jsx)(xe, { icon: e.id, className: `size-4` }),
              (0, L.jsx)(`span`, { children: e.label }),
            ],
          },
          e.id,
        );
      })),
      (t[36] = S),
      (t[37] = T),
      (t[38] = K))
    : (K = t[38]);
  let q;
  t[39] === K
    ? (q = t[40])
    : ((q = (0, L.jsx)(ge, {
        align: `start`,
        children: (0, L.jsx)(`div`, { className: `grid grid-cols-3 gap-2`, children: K }),
      })),
      (t[39] = K),
      (t[40] = q));
  let J;
  t[41] !== me || t[42] !== T || t[43] !== G || t[44] !== q
    ? ((J = (0, L.jsxs)(he, { onOpenChange: T, open: me, children: [G, q] })),
      (t[41] = me),
      (t[42] = T),
      (t[43] = G),
      (t[44] = q),
      (t[45] = J))
    : (J = t[45]);
  let Le;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (e) => y(e.target.value)), (t[46] = Le))
    : (Le = t[46]);
  let Re;
  t[47] === _
    ? (Re = t[48])
    : ((Re = (0, L.jsx)(te, {
        id: `script-name`,
        autoFocus: !0,
        placeholder: `Test`,
        value: _,
        onChange: Le,
      })),
      (t[47] = _),
      (t[48] = Re));
  let Y;
  t[49] !== J || t[50] !== Re
    ? ((Y = (0, L.jsxs)(`div`, {
        className: `space-y-1.5`,
        children: [
          Fe,
          (0, L.jsxs)(`div`, { className: `flex items-center gap-2`, children: [J, Re] }),
        ],
      })),
      (t[49] = J),
      (t[50] = Re),
      (t[51] = Y))
    : (Y = t[51]);
  let ze;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, L.jsx)(C, { htmlFor: `script-keybinding`, children: `Keybinding` })), (t[52] = ze))
    : (ze = t[52]);
  let Be = !m,
    X;
  t[53] !== ke || t[54] !== P || t[55] !== Be
    ? ((X = (0, L.jsx)(te, {
        disabled: Be,
        id: `script-keybinding`,
        placeholder: `Press shortcut`,
        value: P,
        readOnly: !0,
        onKeyDown: ke,
      })),
      (t[53] = ke),
      (t[54] = P),
      (t[55] = Be),
      (t[56] = X))
    : (X = t[56]);
  let Ve;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, L.jsxs)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: [
          `Press a shortcut. Use `,
          (0, L.jsx)(`code`, { children: `Backspace` }),
          ` to clear. Shortcuts are environment-wide. Projects using the same action share its shortcut.`,
        ],
      })),
      (t[57] = Ve))
    : (Ve = t[57]);
  let Z;
  t[58] === X
    ? (Z = t[59])
    : ((Z = (0, L.jsxs)(`div`, { className: `space-y-1.5`, children: [ze, X, Ve] })),
      (t[58] = X),
      (t[59] = Z));
  let He;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, L.jsx)(C, { htmlFor: `script-command`, children: `Command` })), (t[60] = He))
    : (He = t[60]);
  let Ue;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (e) => fe(e.target.value)), (t[61] = Ue))
    : (Ue = t[61]);
  let We;
  t[62] === b
    ? (We = t[63])
    : ((We = (0, L.jsxs)(`div`, {
        className: `space-y-1.5`,
        children: [
          He,
          (0, L.jsx)(oe, { id: `script-command`, placeholder: `bun test`, value: b, onChange: Ue }),
        ],
      })),
      (t[62] = b),
      (t[63] = We));
  let Ge;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, L.jsx)(C, { htmlFor: `script-preview-url`, children: `Preview URL (optional)` })),
      (t[64] = Ge))
    : (Ge = t[64]);
  let Ke;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (e) => ye(e.target.value)), (t[65] = Ke))
    : (Ke = t[65]);
  let qe;
  t[66] === I
    ? (qe = t[67])
    : ((qe = (0, L.jsx)(te, {
        id: `script-preview-url`,
        placeholder: `http://localhost:5173`,
        value: I,
        onChange: Ke,
      })),
      (t[66] = I),
      (t[67] = qe));
  let Je;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, L.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Open this URL in the in-app preview when this action runs.`,
      })),
      (t[68] = Je))
    : (Je = t[68]);
  let Ye;
  t[69] === qe
    ? (Ye = t[70])
    : ((Ye = (0, L.jsxs)(`div`, { className: `space-y-1.5`, children: [Ge, qe, Je] })),
      (t[69] = qe),
      (t[70] = Ye));
  let Xe;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (0, L.jsx)(`span`, { children: `Run automatically on worktree creation` })),
      (t[71] = Xe))
    : (Xe = t[71]);
  let Ze;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (e) => O(!!e)), (t[72] = Ze))
    : (Ze = t[72]);
  let Qe;
  t[73] === E
    ? (Qe = t[74])
    : ((Qe = (0, L.jsxs)(`label`, {
        className: `flex items-center justify-between gap-3 rounded-md border border-border/70 px-3 py-2 text-sm dark:border-transparent dark:bg-white/[0.035]`,
        children: [Xe, (0, L.jsx)(w, { checked: E, onCheckedChange: Ze })],
      })),
      (t[73] = E),
      (t[74] = Qe));
  let $e = `flex items-center justify-between gap-3 rounded-md border border-border/70 px-3 py-2 text-sm dark:border-transparent dark:bg-white/[0.035] ${E ? `` : `opacity-60`}`,
    et;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, L.jsx)(`span`, { children: `Wait for it to finish before the agent starts` })),
      (t[75] = et))
    : (et = t[75]);
  let tt = !E,
    nt;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (e) => A(!!e)), (t[76] = nt))
    : (nt = t[76]);
  let rt;
  t[77] !== tt || t[78] !== k
    ? ((rt = (0, L.jsx)(w, { checked: k, disabled: tt, onCheckedChange: nt })),
      (t[77] = tt),
      (t[78] = k),
      (t[79] = rt))
    : (rt = t[79]);
  let it;
  t[80] !== $e || t[81] !== rt
    ? ((it = (0, L.jsxs)(`label`, { className: $e, children: [et, rt] })),
      (t[80] = $e),
      (t[81] = rt),
      (t[82] = it))
    : (it = t[82]);
  let at;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, L.jsx)(`span`, {
        children: `Run in the thread's worktree when the thread settles`,
      })),
      (t[83] = at))
    : (at = t[83]);
  let ot;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (e) => M(!!e)), (t[84] = ot))
    : (ot = t[84]);
  let st;
  t[85] === j
    ? (st = t[86])
    : ((st = (0, L.jsxs)(`label`, {
        className: `flex items-center justify-between gap-3 rounded-md border border-border/70 px-3 py-2 text-sm dark:border-transparent dark:bg-white/[0.035]`,
        children: [at, (0, L.jsx)(w, { checked: j, onCheckedChange: ot })],
      })),
      (t[85] = j),
      (t[86] = st));
  let ct = `flex items-center justify-between gap-3 rounded-md border border-border/70 px-3 py-2 text-sm dark:border-transparent dark:bg-white/[0.035] ${I.trim().length === 0 ? `opacity-60` : ``}`,
    lt;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, L.jsx)(`span`, { children: `Open preview automatically when this action runs` })),
      (t[87] = lt))
    : (lt = t[87]);
  let ut;
  t[88] === I ? (ut = t[89]) : ((ut = I.trim()), (t[88] = I), (t[89] = ut));
  let dt = ut.length === 0,
    ft;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (e) => Se(!!e)), (t[90] = ft))
    : (ft = t[90]);
  let pt;
  t[91] !== R || t[92] !== dt
    ? ((pt = (0, L.jsx)(w, { checked: R, disabled: dt, onCheckedChange: ft })),
      (t[91] = R),
      (t[92] = dt),
      (t[93] = pt))
    : (pt = t[93]);
  let Q;
  t[94] !== ct || t[95] !== pt
    ? ((Q = (0, L.jsxs)(`label`, { className: ct, children: [lt, pt] })),
      (t[94] = ct),
      (t[95] = pt),
      (t[96] = Q))
    : (Q = t[96]);
  let mt;
  t[97] === o
    ? (mt = t[98])
    : ((mt = o && (0, L.jsx)(`p`, { className: `text-sm text-destructive`, children: o })),
      (t[97] = o),
      (t[98] = mt));
  let ht;
  t[99] !== Pe ||
  t[100] !== Y ||
  t[101] !== Z ||
  t[102] !== We ||
  t[103] !== Ye ||
  t[104] !== Qe ||
  t[105] !== it ||
  t[106] !== st ||
  t[107] !== Q ||
  t[108] !== mt
    ? ((ht = (0, L.jsxs)(`fieldset`, {
        className: `space-y-4`,
        disabled: Pe,
        children: [Y, Z, We, Ye, Qe, it, st, Q, mt],
      })),
      (t[99] = Pe),
      (t[100] = Y),
      (t[101] = Z),
      (t[102] = We),
      (t[103] = Ye),
      (t[104] = Qe),
      (t[105] = it),
      (t[106] = st),
      (t[107] = Q),
      (t[108] = mt),
      (t[109] = ht))
    : (ht = t[109]);
  let gt;
  t[110] !== g || t[111] !== je || t[112] !== ht
    ? ((gt = (0, L.jsx)(se, {
        children: (0, L.jsx)(`form`, { id: g, onSubmit: je, children: ht }),
      })),
      (t[110] = g),
      (t[111] = je),
      (t[112] = ht),
      (t[113] = gt))
    : (gt = t[113]);
  let _t;
  t[114] !== p || t[115] !== V || t[116] !== z || t[117] !== _ || t[118] !== d
    ? ((_t =
        V &&
        (0, L.jsx)(l, {
          type: `button`,
          variant: `destructive-outline`,
          className: `mr-auto`,
          disabled: z || !p,
          onClick: () => d(_),
          children: `Delete`,
        })),
      (t[114] = p),
      (t[115] = V),
      (t[116] = z),
      (t[117] = _),
      (t[118] = d),
      (t[119] = _t))
    : (_t = t[119]);
  let vt;
  t[120] === H
    ? (vt = t[121])
    : ((vt = (0, L.jsx)(l, { type: `button`, variant: `outline`, onClick: H, children: `Cancel` })),
      (t[120] = H),
      (t[121] = vt));
  let yt = z || !p,
    bt = z ? `Saving…` : V ? `Save changes` : `Save action`,
    xt;
  t[122] !== g || t[123] !== yt || t[124] !== bt
    ? ((xt = (0, L.jsx)(l, { form: g, type: `submit`, disabled: yt, children: bt })),
      (t[122] = g),
      (t[123] = yt),
      (t[124] = bt),
      (t[125] = xt))
    : (xt = t[125]);
  let $;
  t[126] !== _t || t[127] !== vt || t[128] !== xt
    ? (($ = (0, L.jsxs)(ce, { variant: `bare`, children: [_t, vt, xt] })),
      (t[126] = _t),
      (t[127] = vt),
      (t[128] = xt),
      (t[129] = $))
    : ($ = t[129]);
  let St;
  return (
    t[130] !== gt || t[131] !== $ || t[132] !== W
      ? ((St = (0, L.jsxs)(L.Fragment, { children: [W, gt, $] })),
        (t[130] = gt),
        (t[131] = $),
        (t[132] = W),
        (t[133] = St))
      : (St = t[133]),
    St
  );
}
function we(e) {
  return e.id;
}
function B(e, t) {
  let n = e.projectSettingsOverrides[t.id]?.defaultProjectScripts;
  if (n !== void 0) return n;
  if (e.projectSettingsFolded) return e.defaultProjectScripts;
  let r = e.projectScriptOverrides[t.id];
  return r === null
    ? e.defaultProjectScripts
    : (r ?? (t.scripts.length > 0 ? t.scripts : e.defaultProjectScripts));
}
function Te(e) {
  return e.worktreePath ?? e.project.cwd;
}
function Ee(e) {
  let t = { T3CODE_PROJECT_ROOT: e.project.cwd };
  return (
    e.worktreePath && (t.T3CODE_WORKTREE_PATH = e.worktreePath),
    e.extraEnv ? { ...t, ...e.extraEnv } : t
  );
}
function V(e) {
  let t = [...(e.runOnWorktreeCreate ? [`setup`] : []), ...(e.runOnSettle ? [`on settle`] : [])];
  return t.length === 0 ? e.name : `${e.name} (${t.join(`, `)})`;
}
function De(e) {
  return ` ${e}\r`;
}
export {
  B as a,
  xe as c,
  ye as d,
  M as f,
  De as i,
  Se as l,
  V as n,
  R as o,
  j as p,
  Ee as r,
  z as s,
  Te as t,
  ve as u,
};
//# sourceMappingURL=projectScripts-DiZbIoYI.js.map
