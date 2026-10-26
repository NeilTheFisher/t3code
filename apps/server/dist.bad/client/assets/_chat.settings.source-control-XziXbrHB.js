import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i } from "./search-BrluOr7L.js";
import { t as a } from "./external-link-DV7LH7eG.js";
import { t as o } from "./eye-off-D6V5VC8c.js";
import { t as s } from "./eye-DIOzx3kY.js";
import {
  Bc as c,
  Bn as l,
  Dr as u,
  FC as d,
  Ft as f,
  Ht as p,
  JC as m,
  Ls as h,
  Lt as g,
  Nt as _,
  Om as v,
  Or as y,
  PC as b,
  Rs as x,
  Um as S,
  Vm as C,
  Vn as w,
  Wn as T,
  Wt as E,
  Xl as D,
  Yt as O,
  Zn as k,
  _r as A,
  an as j,
  iu as M,
  t as N,
} from "./utils-CPoejuy5.js";
import { a as P, i as F, n as I, r as L, t as R } from "./number-field-D11YcDFl.js";
import { a as z, c as ee, o as te, s as ne, t as re } from "./select-CBCDohvC.js";
import { j as ie, m as ae } from "./useSettings-N-JG2LFZ.js";
import { H as oe, I as se, L as ce, R as le, m as ue, t as de, z as B } from "./server-3D32GveR.js";
import { n as V } from "./query-LKSVgBQH.js";
import { t as fe } from "./use-atom-command-DGAuqAck.js";
import { i as H } from "./toast-B4KPIJDZ.js";
import { n as pe } from "./useNavigate-Dq4t21kA.js";
import { t as U } from "./skeleton-BRqz2fzS.js";
import { t as W } from "./textarea-C9Xds9D7.js";
import { a as G, i as me, n as he, o as ge, r as _e, t as ve } from "./empty-CgJfsiJ2.js";
import { n as ye, t as be } from "./collapsible-Dp2CGco9.js";
import { t as K } from "./sourceControl-DEiLEb7m.js";
import { d as xe, u as Se } from "./Icons-Blot99re.js";
import { n as Ce } from "./pullRequestIcons-CfNS1kGB.js";
import { d as we, l as q } from "./settingsSearch-CrEaqXdW.js";
import { $c as Te, Mi as J, Rs as Ee, Xo as De } from "./main-BZa0O6xN.js";
import {
  _ as Oe,
  a as ke,
  d as Ae,
  g as je,
  i as Me,
  n as Ne,
  o as Y,
  r as Pe,
  s as Fe,
  t as Ie,
  x as Le,
  y as Re,
} from "./settingsLayout-2i87rQY9.js";
import { t as ze } from "./ProviderModelPicker-5TbK_TR9.js";
import { t as Be } from "./useScopedModelAvailability-DCWbURg7.js";
import { t as Ve } from "./SecretInput-CtEGQlh1.js";
import { t as He } from "./ProjectDefaultsSettings-BNpE-_Mp.js";
import { t as Ue } from "./ProviderSettingsForm-Bsf4x-U6.js";
import { n as We, t as Ge } from "./RedactedSensitiveText-24HhEgVA.js";
var X = n(),
  Z = e(t(), 1),
  Q = e(r(), 1);
function Ke(e) {
  let t = (0, X.c)(29),
    { environmentId: n, definition: r, onSaved: i } = e,
    a;
  t[0] === r.kind
    ? (a = t[1])
    : ((a = (e) => e.sourceControlHosts[r.kind]), (t[0] = r.kind), (t[1] = a));
  let o = ae(n, a),
    s = `save ${r.label} settings`,
    c;
  t[2] === s ? (c = t[3]) : ((c = { label: s }), (t[2] = s), (t[3] = c));
  let l = fe(ue.updateSettings, c),
    [d, f] = (0, Z.useState)(!1),
    p;
  t[4] === r.settings
    ? (p = t[5])
    : ((p = { settingsSchema: r.settings }), (t[4] = r.settings), (t[5] = p));
  let m = p,
    h = Object.values(o ?? {}).some(Ye),
    g;
  t[6] !== r.kind || t[7] !== n || t[8] !== i || t[9] !== l
    ? ((g = async (e) => {
        f(!0);
        let t = await l({
          environmentId: n,
          input: { patch: { sourceControlHosts: { [r.kind]: e } } },
        });
        (f(!1), t._tag === `Success` && i());
      }),
      (t[6] = r.kind),
      (t[7] = n),
      (t[8] = i),
      (t[9] = l),
      (t[10] = g))
    : (g = t[10]);
  let _ = g,
    v;
  t[11] === o ? (v = t[12]) : ((v = o ?? {}), (t[11] = o), (t[12] = v));
  let y = `source-control-${r.kind}-${n}`,
    b;
  t[13] !== _ || t[14] !== o
    ? ((b = (e) => {
        let t = e ?? {},
          n = Object.fromEntries(
            Object.entries(t).filter((e) => {
              let [t, n] = e;
              return o?.[t] !== n;
            }),
          ),
          r = Object.keys(o ?? {}).filter((e) => !(e in t));
        _({ ...n, ...Object.fromEntries(r.map(Je)) });
      }),
      (t[13] = _),
      (t[14] = o),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] !== m || t[17] !== v || t[18] !== y || t[19] !== b
    ? ((x = (0, Q.jsx)(Ue, {
        definition: m,
        value: v,
        idPrefix: y,
        variant: `settings`,
        onChange: b,
      })),
      (t[16] = m),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== h || t[22] !== _ || t[23] !== o
    ? ((S = h
        ? (0, Q.jsx)(`div`, {
            className: `flex justify-end pt-2`,
            children: (0, Q.jsx)(u, {
              size: `xs`,
              variant: `outline`,
              onClick: () => void _(Object.fromEntries(Object.keys(o ?? {}).map(qe))),
              children: `Remove`,
            }),
          })
        : null),
      (t[21] = h),
      (t[22] = _),
      (t[23] = o),
      (t[24] = S))
    : (S = t[24]);
  let C;
  return (
    t[25] !== d || t[26] !== S || t[27] !== x
      ? ((C = (0, Q.jsxs)(`fieldset`, { disabled: d, className: `contents`, children: [x, S] })),
        (t[25] = d),
        (t[26] = S),
        (t[27] = x),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function qe(e) {
  return [e, ``];
}
function Je(e) {
  return [e, ``];
}
function Ye(e) {
  return e !== ``;
}
function Xe(e) {
  return [...new Set(e.map((e) => e.host))].map((t) => {
    let n = e.filter((e) => e.host === t),
      r = n.filter((e) => e.environmentVariable === void 0),
      i = r.filter((e) => e.authenticated);
    return {
      host: t,
      activeAccount: (i.find((e) => e.active) ?? i[0])?.account ?? null,
      selectable: i.map((e) => e.account),
      broken: r.filter((e) => !e.authenticated),
      environmentVariable: n.find((e) => e.environmentVariable)?.environmentVariable ?? null,
    };
  });
}
function Ze(e, t, n) {
  let r = e[t],
    i = n.enabled ?? r?.enabled ?? !0,
    a = n.account === void 0 ? r?.account : (n.account ?? void 0),
    { [t]: o, ...s } = e;
  return i && a === void 0
    ? s
    : { ...s, [t]: { enabled: i, ...(a === void 0 ? {} : { account: a }) } };
}
var Qe = `active cli account`;
function $(e) {
  let t = (0, X.c)(4),
    n;
  return (
    t[0] !== e.account || t[1] !== e.label || t[2] !== e.revealed
      ? ((n = e.revealed
          ? (0, Q.jsx)(`span`, {
              className: `min-w-0 truncate font-mono text-2xs`,
              children: e.account,
            })
          : (0, Q.jsxs)(`span`, {
              className: `min-w-0 truncate font-mono text-2xs`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `select-none blur-xs`,
                  "aria-hidden": !0,
                  children: We(e.account),
                }),
                (0, Q.jsx)(`span`, { className: `sr-only`, children: e.label ?? `Hidden account` }),
              ],
            })),
        (t[0] = e.account),
        (t[1] = e.label),
        (t[2] = e.revealed),
        (t[3] = n))
      : (n = t[3]),
    n
  );
}
function $e(e) {
  let t = (0, X.c)(49),
    { environmentId: n, definition: r, credentials: i, auth: a, onSaved: c } = e,
    l;
  t[0] === r.kind ? (l = t[1]) : ((l = (e) => h(e, r.kind)), (t[0] = r.kind), (t[1] = l));
  let { hosts: d } = ae(n, l),
    { label: f } = r,
    { cliName: p } = i,
    m = `save ${f} account settings`,
    g;
  t[2] === m ? (g = t[3]) : ((g = { label: m }), (t[2] = m), (t[3] = g));
  let _ = fe(ue.updateSettings, g),
    [v, y] = (0, Z.useState)(!1),
    [b, x] = (0, Z.useState)(!1),
    S,
    C;
  if (
    t[4] !== a.accounts ||
    t[5] !== p ||
    t[6] !== i.loginCommand ||
    t[7] !== r.kind ||
    t[8] !== n ||
    t[9] !== d ||
    t[10] !== f ||
    t[11] !== c ||
    t[12] !== b ||
    t[13] !== v ||
    t[14] !== _
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[17] === a.accounts
        ? (e = t[18])
        : ((e = a.accounts ?? []), (t[17] = a.accounts), (t[18] = e));
      let l = Xe(e),
        m;
      t[19] !== r.kind || t[20] !== n || t[21] !== d || t[22] !== c || t[23] !== _
        ? ((m = async (e, t) => {
            y(!0);
            let i = await _({
              environmentId: n,
              input: { patch: { sourceControlHosts: { [r.kind]: { hosts: Ze(d, e, t) } } } },
            });
            (y(!1), i._tag === `Success` && c());
          }),
          (t[19] = r.kind),
          (t[20] = n),
          (t[21] = d),
          (t[22] = c),
          (t[23] = _),
          (t[24] = m))
        : (m = t[24]);
      let h = m;
      if (l.length === 0) {
        let e;
        (t[25] === i.loginCommand
          ? (e = t[26])
          : ((e = (0, Q.jsxs)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: [
                `Sign in with`,
                ` `,
                (0, Q.jsx)(`code`, {
                  className: `rounded bg-muted px-1 py-px text-2xs`,
                  children: i.loginCommand,
                }),
                ` on the server host, then rescan to choose accounts here.`,
              ],
            })),
            (t[25] = i.loginCommand),
            (t[26] = e)),
          (C = e));
        break bb0;
      }
      let g;
      t[27] === p
        ? (g = t[28])
        : ((g = (0, Q.jsx)(`code`, {
            className: `rounded bg-muted px-1 py-px text-2xs`,
            children: p,
          })),
          (t[27] = p),
          (t[28] = g));
      let w;
      t[29] !== f || t[30] !== g
        ? ((w = (0, Q.jsxs)(`p`, {
            className: `max-w-2xl text-xs leading-relaxed text-muted-foreground`,
            children: [`Choose which `, g, ` login each `, f, ` host uses, or turn a host off.`],
          })),
          (t[29] = f),
          (t[30] = g),
          (t[31] = w))
        : (w = t[31]);
      let T;
      t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((T = () => x(et)), (t[32] = T))
        : (T = t[32]);
      let E = b ? `Hide ${f} accounts` : `Reveal ${f} accounts`,
        D;
      t[33] === b
        ? (D = t[34])
        : ((D = b ? (0, Q.jsx)(o, {}) : (0, Q.jsx)(s, {})), (t[33] = b), (t[34] = D));
      let O;
      t[35] !== b || t[36] !== E || t[37] !== D
        ? ((O = (0, Q.jsx)(u, {
            size: `icon-xs`,
            variant: `ghost-muted`,
            onClick: T,
            "aria-label": E,
            "aria-pressed": b,
            children: D,
          })),
          (t[35] = b),
          (t[36] = E),
          (t[37] = D),
          (t[38] = O))
        : (O = t[38]);
      let k;
      t[39] !== O || t[40] !== w
        ? ((k = (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            children: [w, O],
          })),
          (t[39] = O),
          (t[40] = w),
          (t[41] = k))
        : (k = t[41]);
      let A;
      (t[42] !== p || t[43] !== d || t[44] !== f || t[45] !== b || t[46] !== h || t[47] !== v
        ? ((A = (e) => {
            let t = d[e.host],
              n = t?.enabled ?? !0,
              r = t?.account !== void 0 && !e.selectable.includes(t.account),
              i = t?.account !== void 0 && !r ? t.account : Qe;
            return (0, Q.jsxs)(
              `div`,
              {
                className: `grid gap-2`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `min-w-0 space-y-0.5`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-xs font-medium text-foreground`,
                            children: e.host,
                          }),
                          e.selectable.length === 1 && e.selectable[0] !== void 0
                            ? (0, Q.jsxs)(`p`, {
                                className: `flex min-w-0 items-center gap-1 text-xs text-muted-foreground`,
                                children: [
                                  (0, Q.jsx)(`span`, { children: `Signed in as` }),
                                  (0, Q.jsx)($, { revealed: b, account: e.selectable[0] }),
                                ],
                              })
                            : null,
                        ],
                      }),
                      (0, Q.jsx)(Ee, {
                        checked: n,
                        disabled: v,
                        "aria-label": `Use ${f} on ${e.host}`,
                        onCheckedChange: (t) => void h(e.host, { enabled: t }),
                      }),
                    ],
                  }),
                  e.selectable.length > 1
                    ? (0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-3`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `text-xs text-muted-foreground`,
                            children: `Account`,
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `w-64 max-w-full`,
                            children: (0, Q.jsxs)(re, {
                              value: i,
                              disabled: v || !n,
                              onValueChange: (t) => {
                                typeof t == `string` && h(e.host, { account: t === Qe ? null : t });
                              },
                              children: [
                                (0, Q.jsx)(ne, {
                                  size: `sm`,
                                  "aria-label": `${f} account for ${e.host}`,
                                  children: (0, Q.jsx)(ee, {
                                    children: (t) =>
                                      t === Qe
                                        ? (0, Q.jsxs)(`span`, {
                                            className: `flex min-w-0 items-center gap-1`,
                                            children: [
                                              `Active `,
                                              p,
                                              ` account`,
                                              e.activeAccount
                                                ? (0, Q.jsxs)(Q.Fragment, {
                                                    children: [
                                                      `(`,
                                                      (0, Q.jsx)($, {
                                                        revealed: b,
                                                        account: e.activeAccount,
                                                      }),
                                                      `)`,
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          })
                                        : (0, Q.jsx)($, { revealed: b, account: t }),
                                  }),
                                }),
                                (0, Q.jsxs)(te, {
                                  align: `end`,
                                  alignItemWithTrigger: !1,
                                  children: [
                                    (0, Q.jsx)(z, {
                                      value: Qe,
                                      children: (0, Q.jsxs)(`span`, {
                                        className: `flex min-w-0 items-center gap-1`,
                                        children: [
                                          `Active `,
                                          p,
                                          ` account`,
                                          e.activeAccount
                                            ? (0, Q.jsxs)(Q.Fragment, {
                                                children: [
                                                  `(`,
                                                  (0, Q.jsx)($, {
                                                    revealed: b,
                                                    account: e.activeAccount,
                                                  }),
                                                  `)`,
                                                ],
                                              })
                                            : null,
                                        ],
                                      }),
                                    }),
                                    e.selectable.map((e, t) =>
                                      (0, Q.jsx)(
                                        z,
                                        {
                                          value: e,
                                          children: (0, Q.jsx)($, {
                                            revealed: b,
                                            account: e,
                                            label: `Account ${t + 1}`,
                                          }),
                                        },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : null,
                  r
                    ? (0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-3`,
                        children: [
                          (0, Q.jsxs)(`p`, {
                            className: `text-xs text-warning`,
                            children: [
                              `The chosen login is no longer signed in, so the active `,
                              p,
                              ` login is used.`,
                            ],
                          }),
                          (0, Q.jsx)(u, {
                            size: `xs`,
                            variant: `outline`,
                            disabled: v,
                            onClick: () => void h(e.host, { account: null }),
                            children: `Use active login`,
                          }),
                        ],
                      })
                    : null,
                  e.broken.map((e) =>
                    (0, Q.jsxs)(
                      `p`,
                      {
                        className: `flex min-w-0 flex-wrap items-center gap-1 text-xs text-muted-foreground/70`,
                        children: [
                          (0, Q.jsx)($, { revealed: b, account: e.account }),
                          (0, Q.jsxs)(`span`, {
                            children: [
                              `can't be used: `,
                              e.error ?? `${p} reports this login as invalid.`,
                            ],
                          }),
                        ],
                      },
                      e.account,
                    ),
                  ),
                  e.environmentVariable
                    ? (0, Q.jsxs)(`p`, {
                        className: `text-xs text-warning`,
                        children: [
                          e.environmentVariable,
                          ` is set on the server, so it overrides the account chosen here until it is unset.`,
                        ],
                      })
                    : null,
                ],
              },
              e.host,
            );
          }),
          (t[42] = p),
          (t[43] = d),
          (t[44] = f),
          (t[45] = b),
          (t[46] = h),
          (t[47] = v),
          (t[48] = A))
        : (A = t[48]),
        (S = (0, Q.jsxs)(`div`, { className: `grid gap-4`, children: [k, l.map(A)] })));
    }
    ((t[4] = a.accounts),
      (t[5] = p),
      (t[6] = i.loginCommand),
      (t[7] = r.kind),
      (t[8] = n),
      (t[9] = d),
      (t[10] = f),
      (t[11] = c),
      (t[12] = b),
      (t[13] = v),
      (t[14] = _),
      (t[15] = S),
      (t[16] = C));
  } else ((S = t[15]), (C = t[16]));
  return C === Symbol.for(`react.early_return_sentinel`) ? S : C;
}
function et(e) {
  return !e;
}
function tt(e) {
  let t = (0, X.c)(83),
    { environmentId: n, definition: r, credentials: i, onSaved: o } = e,
    s;
  t[0] === r.kind ? (s = t[1]) : ((s = (e) => h(e, r.kind)), (t[0] = r.kind), (t[1] = s));
  let { tokens: c } = ae(n, s),
    l = `save ${r.label} token`,
    d;
  t[2] === l ? (d = t[3]) : ((d = { label: l }), (t[2] = l), (t[3] = d));
  let f = fe(ue.updateSettings, d),
    p = r.publicHost ?? ``,
    [m, g] = (0, Z.useState)(p),
    [_, v] = (0, Z.useState)(``),
    [b, x] = (0, Z.useState)(!1),
    S;
  t[4] === m ? (S = t[5]) : ((S = m.trim().toLowerCase()), (t[4] = m), (t[5] = S));
  let C = S,
    w = (c[C] ?? ``).length > 0,
    T;
  t[6] === c ? (T = t[7]) : ((T = Object.entries(c).filter(rt).map(nt)), (t[6] = c), (t[7] = T));
  let E = T,
    D;
  t[8] !== r.kind || t[9] !== n || t[10] !== o || t[11] !== c || t[12] !== f
    ? ((D = async (e, t) => {
        x(!0);
        let i = await f({
          environmentId: n,
          input: { patch: { sourceControlHosts: { [r.kind]: { tokens: { ...c, [e]: t } } } } },
        });
        (x(!1), i._tag === `Success` && (v(``), o()));
      }),
      (t[8] = r.kind),
      (t[9] = n),
      (t[10] = o),
      (t[11] = c),
      (t[12] = f),
      (t[13] = D))
    : (D = t[13]);
  let O = D,
    k;
  t[14] !== _ || t[15] !== C || t[16] !== O
    ? ((k = (e) => {
        (e.preventDefault(), C && _.trim() && O(C, _.trim()));
      }),
      (t[14] = _),
      (t[15] = C),
      (t[16] = O),
      (t[17] = k))
    : (k = t[17]);
  let j;
  t[18] === i.tokenEnvVar
    ? (j = t[19])
    : ((j = (0, Q.jsx)(`code`, {
        className: `rounded bg-muted px-1 py-px text-2xs`,
        children: i.tokenEnvVar,
      })),
      (t[18] = i.tokenEnvVar),
      (t[19] = j));
  let M;
  t[20] === i.cliName
    ? (M = t[21])
    : ((M = (0, Q.jsx)(`code`, {
        className: `rounded bg-muted px-1 py-px text-2xs`,
        children: i.cliName,
      })),
      (t[20] = i.cliName),
      (t[21] = M));
  let N;
  t[22] !== i || t[23] !== p || t[24] !== C
    ? ((N =
        C || p
          ? (0, Q.jsxs)(y, {
              render: (0, Q.jsx)(`a`, {
                href: i.newTokenUrl(C || p),
                target: `_blank`,
                rel: `noreferrer noopener`,
              }),
              children: [
                `Create a token`,
                (0, Q.jsx)(a, { "aria-hidden": !0, className: `size-3` }),
              ],
            })
          : null),
      (t[22] = i),
      (t[23] = p),
      (t[24] = C),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== i.cliLabel ||
  t[27] !== i.tokenAccess ||
  t[28] !== r.label ||
  t[29] !== N ||
  t[30] !== j ||
  t[31] !== M
    ? ((P = (0, Q.jsxs)(`p`, {
        className: `max-w-2xl text-xs leading-relaxed text-muted-foreground`,
        children: [
          `A token saved here is used before`,
          ` `,
          j,
          ` `,
          `and the`,
          ` `,
          M,
          ` login, so `,
          r.label,
          ` works without the `,
          i.cliLabel,
          `. Give it`,
          ` `,
          i.tokenAccess,
          `.`,
          ` `,
          N,
        ],
      })),
      (t[26] = i.cliLabel),
      (t[27] = i.tokenAccess),
      (t[28] = r.label),
      (t[29] = N),
      (t[30] = j),
      (t[31] = M),
      (t[32] = P))
    : (P = t[32]);
  let F = `${r.kind}-token-host-${n}`,
    I;
  t[33] === F
    ? (I = t[34])
    : ((I = (0, Q.jsx)(J, { htmlFor: F, children: `Host` })), (t[33] = F), (t[34] = I));
  let L = `${r.kind}-token-host-${n}`,
    R;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => g(e.target.value)), (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] !== p || t[37] !== m || t[38] !== L
    ? ((z = (0, Q.jsx)(A, {
        id: L,
        autoComplete: `off`,
        size: `sm`,
        placeholder: p,
        value: m,
        onChange: R,
      })),
      (t[36] = p),
      (t[37] = m),
      (t[38] = L),
      (t[39] = z))
    : (z = t[39]);
  let ee;
  t[40] !== I || t[41] !== z
    ? ((ee = (0, Q.jsxs)(`div`, { className: `grid gap-1.5`, children: [I, z] })),
      (t[40] = I),
      (t[41] = z),
      (t[42] = ee))
    : (ee = t[42]);
  let te = `${r.kind}-token-${n}`,
    ne;
  t[43] === te
    ? (ne = t[44])
    : ((ne = (0, Q.jsx)(J, { htmlFor: te, children: `Token` })), (t[43] = te), (t[44] = ne));
  let re = `${r.kind}-token-${n}`,
    ie;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (e) => v(e.target.value)), (t[45] = ie))
    : (ie = t[45]);
  let oe;
  t[46] !== _ || t[47] !== w || t[48] !== re
    ? ((oe = (0, Q.jsx)(Ve, { id: re, size: `sm`, configured: w, value: _, onChange: ie })),
      (t[46] = _),
      (t[47] = w),
      (t[48] = re),
      (t[49] = oe))
    : (oe = t[49]);
  let se;
  t[50] !== ne || t[51] !== oe
    ? ((se = (0, Q.jsxs)(`div`, { className: `grid gap-1.5`, children: [ne, oe] })),
      (t[50] = ne),
      (t[51] = oe),
      (t[52] = se))
    : (se = t[52]);
  let ce;
  t[53] !== ee || t[54] !== se
    ? ((ce = (0, Q.jsxs)(`div`, {
        className: `grid gap-3 sm:grid-cols-[12rem_1fr]`,
        children: [ee, se],
      })),
      (t[53] = ee),
      (t[54] = se),
      (t[55] = ce))
    : (ce = t[55]);
  let le =
      E.length === 0
        ? `No token saved; the server uses ${i.tokenEnvVar} or the ${i.cliName} login.`
        : `Saved for ${E.join(`, `)}.`,
    de;
  t[56] === le
    ? (de = t[57])
    : ((de = (0, Q.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: le })),
      (t[56] = le),
      (t[57] = de));
  let B;
  t[58] !== w || t[59] !== C || t[60] !== O || t[61] !== b
    ? ((B = w
        ? (0, Q.jsx)(u, {
            size: `xs`,
            variant: `outline`,
            disabled: b,
            onClick: () => void O(C, ``),
            children: `Remove`,
          })
        : null),
      (t[58] = w),
      (t[59] = C),
      (t[60] = O),
      (t[61] = b),
      (t[62] = B))
    : (B = t[62]);
  let V;
  t[63] !== _ || t[64] !== C || t[65] !== b
    ? ((V = !C || !_.trim() || b), (t[63] = _), (t[64] = C), (t[65] = b), (t[66] = V))
    : (V = t[66]);
  let H;
  t[67] === V
    ? (H = t[68])
    : ((H = (0, Q.jsx)(u, { type: `submit`, size: `xs`, disabled: V, children: `Save` })),
      (t[67] = V),
      (t[68] = H));
  let pe;
  t[69] !== B || t[70] !== H
    ? ((pe = (0, Q.jsxs)(`div`, { className: `flex shrink-0 gap-2`, children: [B, H] })),
      (t[69] = B),
      (t[70] = H),
      (t[71] = pe))
    : (pe = t[71]);
  let U;
  t[72] !== de || t[73] !== pe
    ? ((U = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [de, pe],
      })),
      (t[72] = de),
      (t[73] = pe),
      (t[74] = U))
    : (U = t[74]);
  let W;
  t[75] !== b || t[76] !== P || t[77] !== ce || t[78] !== U
    ? ((W = (0, Q.jsxs)(`fieldset`, { disabled: b, className: `contents`, children: [P, ce, U] })),
      (t[75] = b),
      (t[76] = P),
      (t[77] = ce),
      (t[78] = U),
      (t[79] = W))
    : (W = t[79]);
  let G;
  return (
    t[80] !== W || t[81] !== k
      ? ((G = (0, Q.jsx)(`form`, { className: `grid gap-3`, onSubmit: k, children: W })),
        (t[80] = W),
        (t[81] = k),
        (t[82] = G))
      : (G = t[82]),
    G
  );
}
function nt(e) {
  let [t] = e;
  return t;
}
function rt(e) {
  let [, t] = e;
  return t.length > 0;
}
function it(e) {
  let t = (0, X.c)(25),
    { environmentId: n, onSaved: r } = e,
    i = ae(n, at),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { label: `save Gerrit token`, reportFailure: !1 }), (t[0] = a))
    : (a = t[0]);
  let o = fe(ue.updateSettings, a),
    [s, c] = (0, Z.useState)(``),
    [l, d] = (0, Z.useState)(!1),
    f;
  t[1] === s ? (f = t[2]) : ((f = s.trim()), (t[1] = s), (t[2] = f));
  let p = f,
    m;
  t[3] === p ? (m = t[4]) : ((m = p ? { token: p } : null), (t[3] = p), (t[4] = m));
  let h = m,
    g = h !== null,
    _;
  t[5] !== n || t[6] !== r || t[7] !== o
    ? ((_ = async (e) => {
        d(!0);
        try {
          let t = await o({ environmentId: n, input: { patch: { gerrit: e } } });
          if (t._tag === `Success`)
            (c(``), H.add({ type: `success`, title: `Gerrit token saved` }), r());
          else if (!D(t)) {
            let e = M(t);
            H.add({
              type: `error`,
              title: `Gerrit token not saved`,
              description: e instanceof Error ? e.message : `An error occurred.`,
            });
          }
        } catch (e) {
          let t = e;
          H.add({
            type: `error`,
            title: `Gerrit token not saved`,
            description: t instanceof Error ? t.message : `An error occurred.`,
          });
        }
        d(!1);
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = o),
      (t[8] = _))
    : (_ = t[8]);
  let v = _,
    y;
  t[9] !== g || t[10] !== h || t[11] !== v
    ? ((y = (e) => {
        (e.preventDefault(), g && h && v(h));
      }),
      (t[9] = g),
      (t[10] = h),
      (t[11] = v),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(`p`, {
        className: `text-xs leading-normal text-muted-foreground`,
        children: `Only needed for replies, thread resolution and the reviewer picker; reads, writes and the diff use SSH. Host and username come from the project's git remote. Generate a token in Gerrit → Settings → HTTP Credentials.`,
      })),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(J, { htmlFor: `gerrit-token`, children: `HTTP token` })), (t[14] = x))
    : (x = t[14]);
  let S = i.token.length > 0 ? `Stored token, enter a new value to replace` : `Not set`,
    C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (e) => c(e.target.value)), (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== S || t[17] !== s
    ? ((w = (0, Q.jsxs)(`div`, {
        className: `grid gap-2`,
        children: [
          x,
          (0, Q.jsx)(A, {
            id: `gerrit-token`,
            type: `password`,
            size: `sm`,
            autoComplete: `off`,
            placeholder: S,
            value: s,
            onChange: C,
          }),
        ],
      })),
      (t[16] = S),
      (t[17] = s),
      (t[18] = w))
    : (w = t[18]);
  let T = !g || l,
    E;
  t[19] === T
    ? (E = t[20])
    : ((E = (0, Q.jsx)(`div`, {
        className: `flex justify-end`,
        children: (0, Q.jsx)(u, { type: `submit`, size: `sm`, disabled: T, children: `Save` }),
      })),
      (t[19] = T),
      (t[20] = E));
  let O;
  return (
    t[21] !== w || t[22] !== E || t[23] !== y
      ? ((O = (0, Q.jsxs)(`form`, { className: `grid gap-4`, onSubmit: y, children: [b, w, E] })),
        (t[21] = w),
        (t[22] = E),
        (t[23] = y),
        (t[24] = O))
      : (O = t[24]),
    O
  );
}
function at(e) {
  return e.gerrit;
}
var ot = { static: `Static prefix`, semantic: `Semantic prefix`, custom: `Custom instructions` };
function st() {
  let e = (0, X.c)(40),
    t = je(),
    { targets: n } = Le(),
    r;
  e[0] === n ? (r = e[1]) : ((r = n.map(ut).join(`,`)), (e[0] = n), (e[1] = r));
  let i = r,
    a = (0, Z.useRef)(!1),
    o = (0, Z.useRef)(!1),
    s = Re(),
    c;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = [`branchNamingMode`]), (e[2] = c))
    : (c = e[2]);
  let l = Oe(c),
    u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [`branchNamePrefix`]), (e[3] = u))
    : (u = e[3]);
  let d = Oe(u),
    f;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = [`branchNameInstructions`]), (e[4] = f))
    : (f = e[4]);
  let p = Oe(f),
    m,
    h;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [`branchNamingMode`]), (h = q(`worktree-branch-naming`)), (e[5] = m), (e[6] = h))
    : ((m = e[5]), (h = e[6]));
  let g =
      !l && t.branchNamingMode === `semantic`
        ? `The model chooses a prefix that describes the work, such as feat/add-search, fix/login-timeout, or refactor/auth.`
        : void 0,
    _;
  e[7] !== l || e[8] !== t.branchNamingMode || e[9] !== s
    ? ((_ =
        t.branchNamingMode !== C.branchNamingMode || l
          ? (0, Q.jsx)(Pe, {
              label: `branch naming`,
              onClick: () => s({ branchNamingMode: C.branchNamingMode }),
            })
          : null),
      (e[7] = l),
      (e[8] = t.branchNamingMode),
      (e[9] = s),
      (e[10] = _))
    : (_ = e[10]);
  let y = l ? null : t.branchNamingMode,
    b;
  e[11] === s
    ? (b = e[12])
    : ((b = (e) => {
        v.literals.includes(e) && s({ branchNamingMode: e });
      }),
      (e[11] = s),
      (e[12] = b));
  let x;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(ne, {
        size: `sm`,
        "aria-label": `Worktree branch naming`,
        children: (0, Q.jsx)(ee, { children: lt }),
      })),
      (e[13] = x))
    : (x = e[13]);
  let S;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(te, {
        align: `end`,
        alignItemWithTrigger: !1,
        children: v.literals.map(ct),
      })),
      (e[14] = S))
    : (S = e[14]);
  let w;
  e[15] !== y || e[16] !== b
    ? ((w = (0, Q.jsxs)(re, { value: y, onValueChange: b, children: [x, S] })),
      (e[15] = y),
      (e[16] = b),
      (e[17] = w))
    : (w = e[17]);
  let T;
  e[18] !== w || e[19] !== g || e[20] !== _
    ? ((T = (0, Q.jsx)(ke, {
        serverScoped: !0,
        settingKeys: m,
        ...h,
        description: `Choose how new worktree branches are named from your first message.`,
        status: g,
        resetAction: _,
        control: w,
      })),
      (e[18] = w),
      (e[19] = g),
      (e[20] = _),
      (e[21] = T))
    : (T = e[21]);
  let E;
  e[22] !== l ||
  e[23] !== d ||
  e[24] !== i ||
  e[25] !== t.branchNamePrefix ||
  e[26] !== t.branchNamingMode ||
  e[27] !== s
    ? ((E =
        !l && t.branchNamingMode === `static`
          ? (0, Q.jsx)(ke, {
              serverScoped: !0,
              settingKeys: [`branchNamePrefix`],
              title: `Branch prefix`,
              description: `For example, t3 or t3/ produces t3/add-search. Leave empty for no prefix.`,
              resetAction:
                d || t.branchNamePrefix !== C.branchNamePrefix
                  ? (0, Q.jsx)(Pe, {
                      label: `branch prefix`,
                      onClick: () => s({ branchNamePrefix: C.branchNamePrefix }),
                    })
                  : null,
              control: (0, Q.jsx)(
                A,
                {
                  "aria-label": `Branch prefix`,
                  autoCapitalize: `none`,
                  spellCheck: !1,
                  onChange: () => {
                    a.current = !0;
                  },
                  placeholder: d ? `Mixed` : `No prefix`,
                  defaultValue: d ? `` : t.branchNamePrefix,
                  onBlur: (e) => {
                    let n = e.target.value.trim();
                    (a.current && (d || n !== t.branchNamePrefix) && s({ branchNamePrefix: n }),
                      (a.current = !1));
                  },
                },
                `${i}:${d}:${t.branchNamePrefix}`,
              ),
            })
          : null),
      (e[22] = l),
      (e[23] = d),
      (e[24] = i),
      (e[25] = t.branchNamePrefix),
      (e[26] = t.branchNamingMode),
      (e[27] = s),
      (e[28] = E))
    : (E = e[28]);
  let D;
  e[29] !== p ||
  e[30] !== l ||
  e[31] !== i ||
  e[32] !== t.branchNameInstructions ||
  e[33] !== t.branchNamingMode ||
  e[34] !== s
    ? ((D =
        !l && t.branchNamingMode === `custom`
          ? (0, Q.jsx)(ke, {
              serverScoped: !0,
              settingKeys: [`branchNameInstructions`],
              title: `Branch naming instructions`,
              description: `Appended to the naming prompt. The model returns the complete branch name; no prefix or suffix is added.`,
              resetAction:
                p || t.branchNameInstructions !== ``
                  ? (0, Q.jsx)(Pe, {
                      label: `branch naming instructions`,
                      onClick: () => s({ branchNameInstructions: `` }),
                    })
                  : null,
              children: (0, Q.jsx)(`div`, {
                className: `mt-3 max-w-2xl pb-3.5`,
                children: (0, Q.jsx)(
                  W,
                  {
                    "aria-label": `Branch naming instructions`,
                    onChange: () => {
                      o.current = !0;
                    },
                    rows: 4,
                    defaultValue: p ? `` : t.branchNameInstructions,
                    placeholder: p
                      ? `Mixed. Enter instructions to apply to all selected targets.`
                      : `Use julius/ followed by the issue ID and a short description.`,
                    onBlur: (e) => {
                      let n = e.target.value.trim();
                      (o.current &&
                        (p || n !== t.branchNameInstructions) &&
                        s({ branchNameInstructions: n }),
                        (o.current = !1));
                    },
                  },
                  `${i}:${p}:${t.branchNameInstructions}`,
                ),
              }),
            })
          : null),
      (e[29] = p),
      (e[30] = l),
      (e[31] = i),
      (e[32] = t.branchNameInstructions),
      (e[33] = t.branchNamingMode),
      (e[34] = s),
      (e[35] = D))
    : (D = e[35]);
  let O;
  return (
    e[36] !== T || e[37] !== E || e[38] !== D
      ? ((O = (0, Q.jsxs)(Q.Fragment, { children: [T, E, D] })),
        (e[36] = T),
        (e[37] = E),
        (e[38] = D),
        (e[39] = O))
      : (O = e[39]),
    O
  );
}
function ct(e) {
  return (0, Q.jsx)(z, { value: e, children: ot[e] }, e);
}
function lt(e) {
  return e === null ? `Mixed` : ot[e];
}
function ut(e) {
  return `${e.environmentId}:${e.projectId}`;
}
var dt = {
  repo_conventions: {
    label: `Repository conventions`,
    description: `In each project, matches recent change descriptions and change request titles.`,
  },
  conventional_commits: {
    label: `Conventional Commits`,
    description: `Use Conventional Commit prefixes and keep change request text concise.`,
  },
  custom: {
    label: `Custom instructions`,
    description: `Use your instructions for change descriptions and change requests in every project.`,
  },
};
function ft() {
  let e = (0, X.c)(80),
    t = je(),
    n = Re(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [`reviewGuidesEnabled`]), (e[0] = r))
    : (r = e[0]);
  let i = Oe(r),
    a = pe(),
    { environment: o, connectedEnvironments: s, targets: l, target: d } = Le(),
    m = o?.environmentId ?? null,
    h = s.length > 0,
    v = ie(),
    y = (o?.serverConfig ? v.get(o.environmentId) : void 0) ?? de,
    b;
  e[1] === l
    ? (b = e[2])
    : ((b = (e) => {
        let t = l[0];
        return (
          t !== void 0 &&
          l.some(
            (n) =>
              n.settings.sourceControlWritingStyle[e] !== t.settings.sourceControlWritingStyle[e],
          )
        );
      }),
      (e[1] = l),
      (e[2] = b));
  let x = b,
    C;
  e[3] === x ? (C = e[4]) : ((C = x(`mode`)), (e[3] = x), (e[4] = C));
  let w = C,
    T;
  e[5] === x ? (T = e[6]) : ((T = x(`customInstructions`)), (e[5] = x), (e[6] = T));
  let D = T,
    k;
  e[7] === x ? (k = e[8]) : ((k = x(`followChangeRequestTemplates`)), (e[7] = x), (e[8] = k));
  let A = k,
    M = w || D,
    N;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = [`sourceControlWriterModelSelection`]), (e[9] = N))
    : (N = e[9]);
  let P = Oe(N),
    F;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [`reviewGuideModelSelection`]), (e[10] = F))
    : (F = e[10]);
  let I = Oe(F),
    L;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = [`reviewGuideInstructions`]), (e[11] = L))
    : (L = e[11]);
  let R = Oe(L),
    z = (0, Z.useRef)(!1),
    ae;
  e[12] === l ? (ae = e[13]) : ((ae = l.map(vt).join(`,`)), (e[12] = l), (e[13] = ae));
  let oe = ae,
    le = (0, Z.useRef)(null),
    [ue, B] = (0, Z.useState)(!1),
    [V, fe] = (0, Z.useState)(null),
    U = t.sourceControlWritingStyle,
    G = S.sourceControlWritingStyle,
    me = M || U.mode !== G.mode || U.customInstructions !== G.customInstructions,
    he = y.filter(_t),
    ge = O(p(E(he), t, d?.projectId ?? null)),
    _e = new Set(ge.filter(gt).map(ht)),
    ve = he.filter((e) => _e.has(e.instanceId)),
    ye = f(t, ve),
    be = t.sourceControlWriterModelSelection !== null,
    K = f({ ...t, textGenerationModelSelection: ce(t, ve, d?.projectId ?? null) }, ve),
    xe = ge.some((e) => e.instanceId === ye.instanceId && e.enabled && e.isAvailable),
    Se = _(t, ve, K.instanceId, K.model),
    Ce = Be(t, ge),
    we = ge.find((e) => e.instanceId === K.instanceId),
    Te = t.reviewGuideModelSelection !== null,
    J = f({ ...t, textGenerationModelSelection: se(t, he, d?.projectId ?? null) }, he),
    De = _(t, he, J.instanceId, J.model),
    Ae = ge.find((e) => e.instanceId === J.instanceId),
    Me = Fe,
    Y;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(st, {})), (e[14] = Y))
    : (Y = e[14]);
  let Ie;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = [`sourceControlWritingStyle`]), (e[15] = Ie))
    : (Ie = e[15]);
  let Ve;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = q(`source-control-writing-style`)), (e[16] = Ve))
    : (Ve = e[16]);
  let He = dt[U.mode],
    Ue;
  e[17] !== me || e[18] !== n
    ? ((Ue = me
        ? (0, Q.jsx)(Pe, {
            label: `source control writing style`,
            onClick: () =>
              n({
                sourceControlWritingStyle: {
                  mode: G.mode,
                  customInstructions: G.customInstructions,
                },
              }),
          })
        : null),
      (e[17] = me),
      (e[18] = n),
      (e[19] = Ue))
    : (Ue = e[19]);
  let We = w ? null : U.mode,
    Ge;
  e[20] === n
    ? (Ge = e[21])
    : ((Ge = (e) => {
        let t = le.current?.value.trim();
        n({
          sourceControlWritingStyle: {
            mode: e,
            ...(t === void 0 ? {} : { customInstructions: t }),
          },
        });
      }),
      (e[20] = n),
      (e[21] = Ge));
  let Ke;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, Q.jsx)(ne, {
        size: `sm`,
        className: `w-full sm:w-56`,
        "aria-label": `Source control writing style`,
        children: (0, Q.jsx)(ee, { children: mt }),
      })),
      (e[22] = Ke))
    : (Ke = e[22]);
  let qe;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = Object.keys(dt)), (e[23] = qe))
    : (qe = e[23]);
  let Je;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, Q.jsx)(te, { align: `end`, alignItemWithTrigger: !1, children: qe.map(pt) })),
      (e[24] = Je))
    : (Je = e[24]);
  let Ye;
  e[25] !== We || e[26] !== Ge
    ? ((Ye = (0, Q.jsxs)(re, { value: We, onValueChange: Ge, children: [Ke, Je] })),
      (e[25] = We),
      (e[26] = Ge),
      (e[27] = Ye))
    : (Ye = e[27]);
  let Xe;
  e[28] !== V ||
  e[29] !== ue ||
  e[30] !== U.customInstructions ||
  e[31] !== U.mode ||
  e[32] !== n ||
  e[33] !== M
    ? ((Xe = M
        ? (0, Q.jsx)(`div`, {
            className: `mt-3 max-w-2xl space-y-2 pb-3.5`,
            children: ue
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(W, {
                      value: V ?? ``,
                      onChange: (e) => fe(e.target.value),
                      rows: 4,
                      "aria-label": `Custom source control instructions for all selected environments`,
                      placeholder: `Write the instructions each selected environment should use.`,
                    }),
                    (0, Q.jsx)(u, {
                      size: `sm`,
                      variant: `outline`,
                      disabled: V === null,
                      onClick: () => {
                        V !== null &&
                          (n({
                            sourceControlWritingStyle: {
                              mode: `custom`,
                              customInstructions: V.trim(),
                            },
                          }),
                          B(!1));
                      },
                      children: `Apply instructions to all`,
                    }),
                  ],
                })
              : (0, Q.jsx)(u, {
                  size: `sm`,
                  variant: `outline`,
                  onClick: () => {
                    (fe(null), B(!0));
                  },
                  children: `Write custom instructions for all`,
                }),
          })
        : U.mode === `custom`
          ? (0, Q.jsx)(`div`, {
              className: `mt-3 max-w-2xl pb-3.5`,
              children: (0, Q.jsx)(
                W,
                {
                  ref: le,
                  defaultValue: U.customInstructions,
                  onBlur: (e) => {
                    let t = e.target.value.trim();
                    t !== U.customInstructions &&
                      n({ sourceControlWritingStyle: { customInstructions: t } });
                  },
                  rows: 4,
                  placeholder: `Keep titles concise. Use short bullet points in descriptions.`,
                  "aria-label": `Custom source control writing instructions`,
                },
                U.customInstructions,
              ),
            })
          : null),
      (e[28] = V),
      (e[29] = ue),
      (e[30] = U.customInstructions),
      (e[31] = U.mode),
      (e[32] = n),
      (e[33] = M),
      (e[34] = Xe))
    : (Xe = e[34]);
  let Ze;
  e[35] !== He.description || e[36] !== Ue || e[37] !== Ye || e[38] !== Xe || e[39] !== M
    ? ((Ze = (0, Q.jsx)(ke, {
        serverScoped: !0,
        settingKeys: Ie,
        mixed: M,
        ...Ve,
        description: He.description,
        resetAction: Ue,
        control: Ye,
        children: Xe,
      })),
      (e[35] = He.description),
      (e[36] = Ue),
      (e[37] = Ye),
      (e[38] = Xe),
      (e[39] = M),
      (e[40] = Ze))
    : (Ze = e[40]);
  let Qe;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = [`sourceControlWritingStyle`]), (e[41] = Qe))
    : (Qe = e[41]);
  let $;
  e[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($ = q(`follow-change-request-templates`)), (e[42] = $))
    : ($ = e[42]);
  let $e;
  e[43] !== U.followChangeRequestTemplates || e[44] !== A || e[45] !== n
    ? (($e =
        A || U.followChangeRequestTemplates !== G.followChangeRequestTemplates
          ? (0, Q.jsx)(Pe, {
              label: `change request templates`,
              onClick: () =>
                n({
                  sourceControlWritingStyle: {
                    followChangeRequestTemplates: G.followChangeRequestTemplates,
                  },
                }),
            })
          : null),
      (e[43] = U.followChangeRequestTemplates),
      (e[44] = A),
      (e[45] = n),
      (e[46] = $e))
    : ($e = e[46]);
  let et = !A && U.followChangeRequestTemplates,
    tt;
  e[47] === n
    ? (tt = e[48])
    : ((tt = (e) => n({ sourceControlWritingStyle: { followChangeRequestTemplates: !!e } })),
      (e[47] = n),
      (e[48] = tt));
  let nt;
  e[49] !== et || e[50] !== tt || e[51] !== A
    ? ((nt = (0, Q.jsx)(Ee, {
        mixed: A,
        checked: et,
        onCheckedChange: tt,
        "aria-label": `Follow change request templates`,
      })),
      (e[49] = et),
      (e[50] = tt),
      (e[51] = A),
      (e[52] = nt))
    : (nt = e[52]);
  let rt;
  e[53] !== $e || e[54] !== nt || e[55] !== A
    ? ((rt = (0, Q.jsx)(ke, {
        serverScoped: !0,
        settingKeys: Qe,
        mixed: A,
        ...$,
        description: `Use the repository's template for change request descriptions when available.`,
        resetAction: $e,
        control: nt,
      })),
      (e[53] = $e),
      (e[54] = nt),
      (e[55] = A),
      (e[56] = rt))
    : (rt = e[56]);
  let it, at;
  e[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = [`sourceControlWriterModelSelection`]),
      (at = q(`source-control-writer-model`)),
      (e[57] = it),
      (e[58] = at))
    : ((it = e[57]), (at = e[58]));
  let ot = h
      ? (0, Q.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-end gap-2`,
          children: [
            be && !xe
              ? (0, Q.jsx)(`span`, {
                  className: `text-sm text-muted-foreground`,
                  children: `No text generation providers available.`,
                })
              : null,
            be && xe
              ? (0, Q.jsx)(ze, {
                  environmentId: m,
                  activeInstanceId: K.instanceId,
                  model: K.model,
                  lockedProvider: null,
                  instanceEntries: ge,
                  modelOptionsByInstance: Se,
                  triggerClassName: Ne,
                  triggerAriaLabel: `Source control writer model`,
                  ...(P ? { triggerLabel: `Mixed` } : {}),
                  ...(m
                    ? {
                        onOpenProviderSetup: (e) => {
                          a({
                            to: `/settings/providers`,
                            search: { environmentId: m, instanceId: e },
                          });
                        },
                      }
                    : {}),
                  getModelDisabledReason: Ce,
                  onInstanceModelChange: (e, t) => {
                    let r = Ce(e, t);
                    r
                      ? H.add({
                          type: `error`,
                          title: `Source control writer model not saved`,
                          description: r,
                        })
                      : n({ sourceControlWriterModelSelection: c(e, t) });
                  },
                })
              : null,
            be && xe && !P && we
              ? (0, Q.jsx)(j, {
                  provider: we.driverKind,
                  models: we.models,
                  model: K.model,
                  modelOptions: K.options ?? [],
                  allowPromptInjectedEffort: !1,
                  planModeEnabled: t.planModeEnabled || g(K.options),
                  triggerClassName: Ne,
                  onModelOptionsChange: (e) =>
                    n({ sourceControlWriterModelSelection: c(K.instanceId, K.model, e) }),
                })
              : null,
            (0, Q.jsx)(Ee, {
              checked: be,
              disabled: !be && !xe,
              onCheckedChange: (e) =>
                n({
                  sourceControlWriterModelSelection: e
                    ? c(ye.instanceId, ye.model, ye.options)
                    : null,
                }),
              "aria-label": `Use a separate source control writer model`,
            }),
          ],
        })
      : (0, Q.jsx)(`span`, {
          className: `text-sm text-muted-foreground`,
          children: `Connect an environment to choose its source control writer model.`,
        }),
    ct;
  e[59] === ot
    ? (ct = e[60])
    : ((ct = (0, Q.jsx)(ke, {
        serverScoped: !0,
        settingKeys: it,
        ...at,
        description: `Model for source control text and branch or bookmark names. Off uses the environment's text generation model.`,
        control: ot,
      })),
      (e[59] = ot),
      (e[60] = ct));
  let lt;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = [`reviewGuidesEnabled`]), (e[61] = lt))
    : (lt = e[61]);
  let ut;
  e[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = q(`review-guides`)), (e[62] = ut))
    : (ut = e[62]);
  let ft = !i && t.reviewGuidesEnabled,
    yt;
  e[63] === n
    ? (yt = e[64])
    : ((yt = (e) => n({ reviewGuidesEnabled: !!e })), (e[63] = n), (e[64] = yt));
  let bt;
  e[65] !== i || e[66] !== ft || e[67] !== yt
    ? ((bt = (0, Q.jsx)(Ee, {
        mixed: i,
        checked: ft,
        onCheckedChange: yt,
        "aria-label": `Review guides`,
      })),
      (e[65] = i),
      (e[66] = ft),
      (e[67] = yt),
      (e[68] = bt))
    : (bt = e[68]);
  let xt;
  e[69] !== i || e[70] !== bt
    ? ((xt = (0, Q.jsx)(ke, {
        serverScoped: !0,
        settingKeys: lt,
        mixed: i,
        ...ut,
        description: `Adds a Guide tab to pull requests: an agent writes a tour of the change, stop by stop, with the calls a maintainer should make.`,
        control: bt,
      })),
      (e[69] = i),
      (e[70] = bt),
      (e[71] = xt))
    : (xt = e[71]);
  let St =
      t.reviewGuidesEnabled || i
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(ke, {
                serverScoped: !0,
                settingKeys: [`reviewGuideModelSelection`],
                ...q(`review-guide-model`),
                description: `Model that reads a pull request to write its review guide. It reads the change itself over many steps, so a stronger model helps. Off uses the source control writer model.`,
                control: h
                  ? (0, Q.jsxs)(`div`, {
                      className: `flex flex-wrap items-center justify-end gap-2`,
                      children: [
                        (Te || I) && xe
                          ? (0, Q.jsx)(ze, {
                              environmentId: m,
                              activeInstanceId: J.instanceId,
                              model: J.model,
                              lockedProvider: null,
                              instanceEntries: ge,
                              modelOptionsByInstance: De,
                              triggerClassName: Ne,
                              triggerAriaLabel: `Review guide model`,
                              ...(I ? { triggerLabel: `Mixed` } : {}),
                              getModelDisabledReason: Ce,
                              onInstanceModelChange: (e, t) => {
                                let r = Ce(e, t);
                                r
                                  ? H.add({
                                      type: `error`,
                                      title: `Review guide model not saved`,
                                      description: r,
                                    })
                                  : n({ reviewGuideModelSelection: c(e, t) });
                              },
                            })
                          : null,
                        Te && xe && !I && Ae
                          ? (0, Q.jsx)(j, {
                              provider: Ae.driverKind,
                              models: Ae.models,
                              model: J.model,
                              modelOptions: J.options ?? [],
                              allowPromptInjectedEffort: !1,
                              planModeEnabled: t.planModeEnabled || g(J.options),
                              triggerClassName: Ne,
                              onModelOptionsChange: (e) =>
                                n({ reviewGuideModelSelection: c(J.instanceId, J.model, e) }),
                            })
                          : null,
                        (0, Q.jsx)(Ee, {
                          mixed: I,
                          checked: !I && Te,
                          disabled: !Te && !xe,
                          onCheckedChange: (e) => {
                            if (!e) {
                              n({ reviewGuideModelSelection: null });
                              return;
                            }
                            let t = Ce(K.instanceId, K.model);
                            t
                              ? H.add({
                                  type: `error`,
                                  title: `Review guide model not saved`,
                                  description: t,
                                })
                              : n({
                                  reviewGuideModelSelection: c(K.instanceId, K.model, K.options),
                                });
                          },
                          "aria-label": `Use a separate review guide model`,
                        }),
                      ],
                    })
                  : (0, Q.jsx)(`span`, {
                      className: `text-sm text-muted-foreground`,
                      children: `Connect an environment to choose its review guide model.`,
                    }),
              }),
              (0, Q.jsx)(ke, {
                serverScoped: !0,
                settingKeys: [`reviewGuideInstructions`],
                ...q(`review-guide-instructions`),
                description: `Your preferences for review guides: what to show first, dwell on, or skip. The guide's format and coverage stay the same.`,
                resetAction:
                  R || t.reviewGuideInstructions !== ``
                    ? (0, Q.jsx)(Pe, {
                        label: `review guide instructions`,
                        onClick: () => n({ reviewGuideInstructions: `` }),
                      })
                    : null,
                children: (0, Q.jsx)(`div`, {
                  className: `mt-3 max-w-2xl pb-3.5`,
                  children: (0, Q.jsx)(
                    W,
                    {
                      "aria-label": `Review guide instructions`,
                      onChange: () => {
                        z.current = !0;
                      },
                      rows: 4,
                      defaultValue: R ? `` : t.reviewGuideInstructions,
                      placeholder: R
                        ? `Mixed. Enter instructions to apply to all selected targets.`
                        : `Show service interfaces before implementations. Skip test files unless they change behavior. Keep summaries to two sentences.`,
                      onBlur: (e) => {
                        let r = e.target.value.trim();
                        (z.current &&
                          (R || r !== t.reviewGuideInstructions) &&
                          n({ reviewGuideInstructions: r }),
                          (z.current = !1));
                      },
                    },
                    `${oe}:${R}:${t.reviewGuideInstructions}`,
                  ),
                }),
              }),
            ],
          })
        : null,
    Ct;
  return (
    e[72] !== Me ||
    e[73] !== Y ||
    e[74] !== Ze ||
    e[75] !== rt ||
    e[76] !== ct ||
    e[77] !== xt ||
    e[78] !== St
      ? ((Ct = (0, Q.jsxs)(Me, {
          id: `source-control-text-generation`,
          title: `Text generation`,
          children: [Y, Ze, rt, ct, xt, St],
        })),
        (e[72] = Me),
        (e[73] = Y),
        (e[74] = Ze),
        (e[75] = rt),
        (e[76] = ct),
        (e[77] = xt),
        (e[78] = St),
        (e[79] = Ct))
      : (Ct = e[79]),
    Ct
  );
}
function pt(e) {
  return (0, Q.jsx)(z, { hideIndicator: !0, value: e, children: dt[e].label }, e);
}
function mt(e) {
  return e === null ? `Mixed` : dt[e].label;
}
function ht(e) {
  return e.instanceId;
}
function gt(e) {
  return e.enabled && e.isAvailable;
}
function _t(e) {
  return e.supportsTextGeneration !== !1;
}
function vt(e) {
  return `${e.environmentId}:${e.projectId}`;
}
var yt = { versionControlSystems: [], sourceControlProviders: [] },
  bt = { git: Se, jj: xe },
  xt = [`primary`, `secondary`],
  St = 5;
function Ct(e) {
  return Math.round(d(e) / 1e3);
}
function wt(e) {
  return e === null || !Number.isFinite(e) ? 0 : Math.max(0, Math.round(e));
}
function Tt(e, t) {
  let n = { ...e.overrides, ...t };
  for (let [e, t] of Object.entries(n)) t === void 0 && delete n[e];
  return {
    backgroundActivity: { schemaVersion: 1, profile: `custom`, baseProfile: le(e), overrides: n },
  };
}
function Et(e) {
  return m(e);
}
function Dt(e) {
  return `auth` in e;
}
function Ot(e) {
  return !Dt(e) && !e.implemented;
}
function kt(e) {
  return e.status === `authenticated`
    ? { label: `Authenticated`, badge: null }
    : e.status === `unauthenticated`
      ? { label: `Not authenticated`, badge: `warning` }
      : { label: `Status unknown`, badge: null };
}
function At(e) {
  let t = (0, X.c)(2),
    n;
  return (
    t[0] === e.account
      ? (n = t[1])
      : ((n = (0, Q.jsx)(Ge, {
          value: e.account,
          ariaLabel: `Toggle source control account visibility`,
          revealTooltip: `Click to reveal account`,
          hideTooltip: `Click to hide account`,
        })),
        (t[0] = e.account),
        (t[1] = n)),
    n
  );
}
function jt(e) {
  return Dt(e) && e.kind === `gerrit` && e.auth.status === `unknown`;
}
function Mt(e) {
  return Ot(e)
    ? `bg-muted-foreground/35`
    : e.status !== `available` || (Dt(e) && e.auth.status !== `authenticated` && !jt(e))
      ? `bg-warning`
      : `bg-success`;
}
function Nt(e) {
  let t = (0, X.c)(13),
    { item: n } = e,
    r,
    i,
    a,
    o;
  if (t[0] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = Mt(n),
        s = Dt(n) ? De(n.kind).Icon : bt[n.kind];
      if (!s) {
        o = (0, Q.jsx)(`span`, {
          className: N(`size-2 shrink-0 rounded-full`, e),
          "aria-hidden": !0,
        });
        break bb0;
      }
      ((i = `relative inline-flex size-5 shrink-0 items-center justify-center`),
        t[5] === s
          ? (a = t[6])
          : ((a = (0, Q.jsx)(s, { className: `size-4.5 text-foreground/80`, "aria-hidden": !0 })),
            (t[5] = s),
            (t[6] = a)),
        (r = N(
          `pointer-events-none absolute -left-0.5 -top-0.5 size-2 rounded-full ring-2 ring-background`,
          e,
        )));
    }
    ((t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), (t[4] = o));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s;
  t[7] === r
    ? (s = t[8])
    : ((s = (0, Q.jsx)(`span`, { className: r, "aria-hidden": !0 })), (t[7] = r), (t[8] = s));
  let c;
  return (
    t[9] !== i || t[10] !== a || t[11] !== s
      ? ((c = (0, Q.jsxs)(`span`, { className: i, children: [a, s] })),
        (t[9] = i),
        (t[10] = a),
        (t[11] = s),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Pt({ item: e, auth: t, authAccount: n }) {
  if (Ot(e))
    return (0, Q.jsxs)(`span`, { children: [`Support for `, e.label, ` is coming soon.`] });
  if (e.status !== `available`)
    return (0, Q.jsxs)(`span`, { children: [`Not available on this server: `, e.installHint] });
  if (t) {
    if (jt(e)) {
      let n = Et(t.detail);
      return (0, Q.jsx)(`span`, { children: n ?? e.installHint });
    }
    if (t.status === `authenticated`) {
      let e = Et(t.detail);
      return (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(`span`, { children: `Authenticated` }),
          n
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(`span`, { "aria-hidden": !0, children: `as` }),
                  (0, Q.jsx)(At, { account: n }),
                ],
              })
            : null,
          e ? (0, Q.jsxs)(`span`, { children: [`· `, e] }) : null,
        ],
      });
    }
    if (!e.executable && t.status === `unauthenticated`)
      return (0, Q.jsxs)(`span`, { children: [`Available. `, e.installHint] });
    if (t.status === `unauthenticated` && t.accounts?.some((e) => e.authenticated))
      return (0, Q.jsx)(`span`, {
        children: Et(t.detail) ?? `Every ${e.label} host is turned off.`,
      });
    if (t.status === `unauthenticated`)
      return (0, Q.jsxs)(`span`, {
        children: [
          e.label,
          ` is not authenticated on this server. Sign in or configure credentials using the `,
          (0, Q.jsx)(`code`, {
            className: `rounded bg-muted px-1 py-px text-2xs`,
            children: e.executable,
          }),
          ` tool on the server host to enable change request features.`,
        ],
      });
    let r = Et(t.detail);
    return (0, Q.jsxs)(`span`, {
      children: [`Could not verify `, e.label, `. `, r ?? e.installHint],
    });
  }
  return (0, Q.jsx)(`span`, { children: `Available` });
}
function Ft(e) {
  let t = (0, X.c)(52),
    { item: n, children: r } = e,
    a;
  t[0] === n.version ? (a = t[1]) : ((a = Et(n.version)), (t[0] = n.version), (t[1] = a));
  let o = a,
    s;
  t[2] === n
    ? (s = t[3])
    : ((s = Dt(n)
        ? n.status === `available` && (n.auth.status === `authenticated` || jt(n))
        : n.status === `available` && n.implemented),
      (t[2] = n),
      (t[3] = s));
  let c = s,
    l = Dt(n) ? n.auth : null,
    d;
  t[4] === l ? (d = t[5]) : ((d = l ? kt(l) : null), (t[4] = l), (t[5] = d));
  let f = d,
    p = l ? Et(l.account) : null,
    [m, h] = (0, Z.useState)(!1),
    g = r !== void 0,
    _ = Ae(),
    [v, y] = (0, Z.useState)(null);
  (((n.kind === `git` && _ === q(`git-fetch-interval`).id) || _ === we(n.kind)) &&
    !m &&
    v !== _ &&
    h(!0),
    v !== _ && y(_));
  let b;
  t[6] === n
    ? (b = t[7])
    : ((b = N(
        `first:rounded-t-xl last:rounded-b-xl transition-colors hover:bg-muted/20`,
        Ot(n) && `opacity-80`,
      )),
      (t[6] = n),
      (t[7] = b));
  let x;
  t[8] === n ? (x = t[9]) : ((x = (0, Q.jsx)(Nt, { item: n })), (t[8] = n), (t[9] = x));
  let S;
  t[10] === n.label
    ? (S = t[11])
    : ((S = (0, Q.jsx)(`span`, {
        className: `truncate text-sm font-medium text-foreground`,
        children: n.label,
      })),
      (t[10] = n.label),
      (t[11] = S));
  let C;
  t[12] === o
    ? (C = t[13])
    : ((C = o
        ? (0, Q.jsx)(`code`, { className: `text-xs text-muted-foreground`, children: o })
        : null),
      (t[12] = o),
      (t[13] = C));
  let w;
  t[14] === n
    ? (w = t[15])
    : ((w = Ot(n)
        ? (0, Q.jsx)(k, { variant: `warning`, size: `sm`, children: `Coming Soon` })
        : null),
      (t[14] = n),
      (t[15] = w));
  let T;
  t[16] === f
    ? (T = t[17])
    : ((T = f?.badge ? (0, Q.jsx)(k, { variant: f.badge, size: `sm`, children: f.label }) : null),
      (t[16] = f),
      (t[17] = T));
  let E;
  t[18] !== C || t[19] !== w || t[20] !== T || t[21] !== x || t[22] !== S
    ? ((E = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [x, S, C, w, T],
      })),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = x),
      (t[22] = S),
      (t[23] = E))
    : (E = t[23]);
  let D = Pt({ item: n, auth: l, authAccount: p }),
    O;
  t[24] === D
    ? (O = t[25])
    : ((O = (0, Q.jsx)(`p`, {
        className: `flex min-w-0 flex-wrap items-center gap-x-1 text-xs leading-normal text-muted-foreground/80`,
        children: D,
      })),
      (t[24] = D),
      (t[25] = O));
  let A;
  t[26] !== E || t[27] !== O
    ? ((A = (0, Q.jsxs)(`div`, { className: `min-w-0 flex-1 space-y-1`, children: [E, O] })),
      (t[26] = E),
      (t[27] = O),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== g || t[30] !== m || t[31] !== n.label || t[32] !== h
    ? ((j = g
        ? (0, Q.jsx)(u, {
            size: `icon-xs`,
            variant: `ghost-muted`,
            onClick: () => h(It),
            "aria-expanded": m,
            "aria-label": `Toggle ${n.label} details`,
            children: (0, Q.jsx)(i, {
              className: N(`size-3.5 transition-transform`, m && `rotate-180`),
            }),
          })
        : null),
      (t[29] = g),
      (t[30] = m),
      (t[31] = n.label),
      (t[32] = h),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] !== c || t[35] !== n
    ? ((M = Ot(n)
        ? null
        : (0, Q.jsx)(Ee, { checked: c, disabled: !0, "aria-label": `${n.label} availability` })),
      (t[34] = c),
      (t[35] = n),
      (t[36] = M))
    : (M = t[36]);
  let P;
  t[37] !== j || t[38] !== M
    ? ((P = (0, Q.jsxs)(`div`, {
        className: `flex w-full shrink-0 items-center gap-2 sm:w-auto sm:justify-end`,
        children: [j, M],
      })),
      (t[37] = j),
      (t[38] = M),
      (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] !== A || t[41] !== P
    ? ((F = (0, Q.jsx)(`div`, {
        className: `px-3 py-3 sm:px-4`,
        children: (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
          children: [A, P],
        }),
      })),
      (t[40] = A),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I;
  t[43] !== r || t[44] !== g || t[45] !== m || t[46] !== h
    ? ((I = g
        ? (0, Q.jsx)(be, {
            open: m,
            onOpenChange: h,
            children: (0, Q.jsx)(ye, {
              children: (0, Q.jsx)(`div`, { className: `px-3 pb-4 pt-1 sm:px-4`, children: r }),
            }),
          })
        : null),
      (t[43] = r),
      (t[44] = g),
      (t[45] = m),
      (t[46] = h),
      (t[47] = I))
    : (I = t[47]);
  let L;
  return (
    t[48] !== F || t[49] !== I || t[50] !== b
      ? ((L = (0, Q.jsxs)(`div`, { className: b, children: [F, I] })),
        (t[48] = F),
        (t[49] = I),
        (t[50] = b),
        (t[51] = L))
      : (L = t[51]),
    L
  );
}
function It(e) {
  return !e;
}
function Lt() {
  let e = (0, X.c)(33),
    t = je(),
    n = Re(),
    r;
  e[0] === t ? (r = e[1]) : ((r = Ct(oe(t).automaticGitFetchInterval)), (e[0] = t), (e[1] = r));
  let i = r,
    a;
  e[2] === t.backgroundActivity
    ? (a = e[3])
    : ((a = Ct(B(le(t.backgroundActivity)).automaticGitFetchInterval)),
      (e[2] = t.backgroundActivity),
      (e[3] = a));
  let o = i !== a,
    s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = q(`git-fetch-interval`)), (e[4] = s))
    : (s = e[4]);
  let c = s,
    l = c.id,
    u,
    d;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(`span`, {
        className: `text-xs font-medium text-foreground`,
        children: c.title,
      })),
      (d = (0, Q.jsx)(Ie, {
        children: `This interval is configured for Git only. The shared Background activity policy still decides whether Git refreshes may run when the timer fires. Custom intervals appear as Advanced in General settings.`,
      })),
      (e[5] = u),
      (e[6] = d))
    : ((u = e[5]), (d = e[6]));
  let f = o ? `opacity-100` : `pointer-events-none opacity-0`,
    p;
  e[7] === f
    ? (p = e[8])
    : ((p = N(`inline-flex size-5 shrink-0 items-center justify-center transition-opacity`, f)),
      (e[7] = f),
      (e[8] = p));
  let m = !o,
    h;
  e[9] !== o || e[10] !== t.backgroundActivity || e[11] !== n
    ? ((h = o
        ? (0, Q.jsx)(Pe, {
            label: `fetch interval`,
            onClick: () => n(Tt(t.backgroundActivity, { automaticGitFetchInterval: void 0 })),
          })
        : null),
      (e[9] = o),
      (e[10] = t.backgroundActivity),
      (e[11] = n),
      (e[12] = h))
    : (h = e[12]);
  let g;
  e[13] !== p || e[14] !== m || e[15] !== h
    ? ((g = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [u, d, (0, Q.jsx)(`span`, { className: p, "aria-hidden": m, children: h })],
      })),
      (e[13] = p),
      (e[14] = m),
      (e[15] = h),
      (e[16] = g))
    : (g = e[16]);
  let _;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(`p`, {
        className: `max-w-2xl text-xs leading-relaxed text-muted-foreground`,
        children: `Refresh remote branches in the background. Set to 0 to avoid automatic Git prompts.`,
      })),
      (e[17] = _))
    : (_ = e[17]);
  let v;
  e[18] === g
    ? (v = e[19])
    : ((v = (0, Q.jsxs)(`div`, { className: `min-w-0 space-y-1`, children: [g, _] })),
      (e[18] = g),
      (e[19] = v));
  let y;
  e[20] !== t.backgroundActivity || e[21] !== n
    ? ((y = (e) => n(Tt(t.backgroundActivity, { automaticGitFetchInterval: b(wt(e)) }))),
      (e[20] = t.backgroundActivity),
      (e[21] = n),
      (e[22] = y))
    : (y = e[22]);
  let x;
  e[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsxs)(L, {
        children: [
          (0, Q.jsx)(I, { "aria-label": `Decrease fetch interval` }),
          (0, Q.jsx)(P, { "aria-label": `Automatic Git fetch interval in seconds` }),
          (0, Q.jsx)(F, { "aria-label": `Increase fetch interval` }),
        ],
      })),
      (e[23] = x))
    : (x = e[23]);
  let S;
  e[24] !== i || e[25] !== y
    ? ((S = (0, Q.jsx)(R, {
        value: i,
        min: 0,
        step: St,
        size: `sm`,
        className: `w-32`,
        onValueChange: y,
        children: x,
      })),
      (e[24] = i),
      (e[25] = y),
      (e[26] = S))
    : (S = e[26]);
  let C;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(`span`, {
        className: `text-xs text-muted-foreground`,
        children: `seconds`,
      })),
      (e[27] = C))
    : (C = e[27]);
  let w;
  e[28] === S
    ? (w = e[29])
    : ((w = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2`,
        children: [S, C],
      })),
      (e[28] = S),
      (e[29] = w));
  let T;
  return (
    e[30] !== v || e[31] !== w
      ? ((T = (0, Q.jsx)(Y, {
          id: l,
          className: `grid gap-3`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`,
            children: [v, w],
          }),
        })),
        (e[30] = v),
        (e[31] = w),
        (e[32] = T))
      : (T = e[32]),
    T
  );
}
function Rt(e) {
  let t = (0, X.c)(4),
    { title: n, headerAction: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = xt.map(zt)), (t[0] = i)) : (i = t[0]);
  let a;
  return (
    t[1] !== r || t[2] !== n
      ? ((a = (0, Q.jsx)(Fe, { title: n, headerAction: r, children: i })),
        (t[1] = r),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function zt(e) {
  return (0, Q.jsx)(
    `div`,
    {
      className: `first:rounded-t-xl last:rounded-b-xl px-3 py-3 sm:px-4`,
      children: (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `min-w-0 flex-1 space-y-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Q.jsxs)(`span`, {
                    className: `relative inline-flex size-5 shrink-0 items-center justify-center`,
                    children: [
                      (0, Q.jsx)(U, { className: `size-4.5` }),
                      (0, Q.jsx)(U, {
                        shape: `pill`,
                        className: `pointer-events-none absolute -left-0.5 -top-0.5 size-2`,
                        "aria-hidden": !0,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(U, { shape: `pill`, className: `h-4 w-28` }),
                  (0, Q.jsx)(U, { shape: `pill`, className: `h-5 w-14` }),
                ],
              }),
              (0, Q.jsx)(U, { shape: `pill`, className: `h-3 w-full max-w-xs` }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            children: [
              (0, Q.jsx)(U, { className: `size-7` }),
              (0, Q.jsx)(U, { shape: `pill`, className: `h-5 w-9` }),
            ],
          }),
        ],
      }),
    },
    e,
  );
}
function Bt(e) {
  let t = (0, X.c)(18),
    { error: n, isPending: r, onScan: i } = e,
    a = n !== null,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = q(`source-control`)), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(G, { variant: `icon`, children: (0, Q.jsx)(Ce.pullRequest, {}) })),
      (t[1] = s))
    : (s = t[1]);
  let c = a ? `Could not scan the server environment` : `Nothing detected yet`,
    l;
  t[2] === c ? (l = t[3]) : ((l = (0, Q.jsx)(ge, { children: c })), (t[2] = c), (t[3] = l));
  let d = a
      ? n
      : `Install Git on the server, add optional hosting integrations or credentials your workspace needs, then rescan.`,
    f;
  t[4] === d ? (f = t[5]) : ((f = (0, Q.jsx)(_e, { children: d })), (t[4] = d), (t[5] = f));
  let p;
  t[6] !== l || t[7] !== f
    ? ((p = (0, Q.jsxs)(me, { children: [l, f] })), (t[6] = l), (t[7] = f), (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === r
    ? (m = t[10])
    : ((m = (0, Q.jsx)(Te, { size: `sm`, refreshing: r })), (t[9] = r), (t[10] = m));
  let h;
  t[11] !== r || t[12] !== i || t[13] !== m
    ? ((h = (0, Q.jsx)(he, {
        children: (0, Q.jsxs)(u, {
          size: `sm`,
          variant: `outline`,
          onClick: i,
          disabled: r,
          children: [m, `Scan`],
        }),
      })),
      (t[11] = r),
      (t[12] = i),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== p || t[16] !== h
      ? ((g = (0, Q.jsx)(Fe, {
          id: o.id,
          title: `Server environment`,
          children: (0, Q.jsxs)(ve, { children: [s, p, h] }),
        })),
        (t[15] = p),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Vt() {
  let e = (0, X.c)(33),
    { scope: t, environment: n, connectedEnvironments: r } = Le(),
    i = n?.connection.phase === `connected` ? n.environmentId : null,
    a = t.environmentIds.length !== 1 && r.length > 1 && n ? ` · ${n.label}` : ``,
    o;
  e[0] === i
    ? (o = e[1])
    : ((o = i === null ? null : K.discovery({ environmentId: i, input: {} })),
      (e[0] = i),
      (e[1] = o));
  let s = V(o),
    c = s.data ?? yt,
    d = c.versionControlSystems.length > 0,
    f = d || c.sourceControlProviders.length > 0,
    p = s.isPending && s.data === null,
    m;
  e[2] === s
    ? (m = e[3])
    : ((m = () => {
        s.refresh();
      }),
      (e[2] = s),
      (e[3] = m));
  let h = m,
    g;
  e[4] !== i || e[5] !== h
    ? ((g = (e) => {
        if (e.kind === `gerrit` && i !== null)
          return (0, Q.jsx)(Y, {
            id: q(`gerrit-credentials`).id,
            children: (0, Q.jsx)(it, { environmentId: i, onSaved: h }, `gerrit-${i}`),
          });
        let t = x.find(e.kind);
        if (!t?.settings || i === null) return;
        let { credentials: n } = t;
        return n
          ? (0, Q.jsx)(Y, {
              id: we(e.kind),
              children: (0, Q.jsxs)(`div`, {
                className: `grid gap-6`,
                children: [
                  (0, Q.jsx)(
                    tt,
                    { environmentId: i, definition: t, credentials: n, onSaved: h },
                    `token-${i}`,
                  ),
                  e.status === `available`
                    ? (0, Q.jsx)(
                        $e,
                        {
                          environmentId: i,
                          definition: t,
                          credentials: n,
                          auth: e.auth,
                          onSaved: h,
                        },
                        i,
                      )
                    : null,
                ],
              }),
            })
          : (0, Q.jsx)(Y, {
              id: we(e.kind),
              children: (0, Q.jsx)(
                Ke,
                { environmentId: i, definition: { ...t, settings: t.settings }, onSaved: h },
                i,
              ),
            });
      }),
      (e[4] = i),
      (e[5] = h),
      (e[6] = g))
    : (g = e[6]);
  let _ = g,
    v;
  e[7] === s.isPending
    ? (v = e[8])
    : ((v = (0, Q.jsx)(Te, { refreshing: s.isPending })), (e[7] = s.isPending), (e[8] = v));
  let y;
  e[9] !== s.isPending || e[10] !== h || e[11] !== v
    ? ((y = (0, Q.jsx)(T, {
        render: (0, Q.jsx)(u, {
          size: `icon-xs`,
          variant: `ghost-muted`,
          onClick: h,
          disabled: s.isPending,
          "aria-label": `Rescan server environment`,
          children: v,
        }),
      })),
      (e[9] = s.isPending),
      (e[10] = h),
      (e[11] = v),
      (e[12] = y))
    : (y = e[12]);
  let b;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(w, { side: `top`, children: `Rescan Git and hosting integrations` })),
      (e[13] = b))
    : (b = e[13]);
  let S;
  e[14] === y
    ? (S = e[15])
    : ((S = (0, Q.jsxs)(l, { children: [y, b] })), (e[14] = y), (e[15] = S));
  let C = S,
    E;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(He, { category: `source-control` })), (e[16] = E))
    : (E = e[16]);
  let D;
  e[17] !== s.error ||
  e[18] !== s.isPending ||
  e[19] !== i ||
  e[20] !== a ||
  e[21] !== h ||
  e[22] !== f ||
  e[23] !== d ||
  e[24] !== _ ||
  e[25] !== p ||
  e[26] !== c.sourceControlProviders ||
  e[27] !== c.versionControlSystems ||
  e[28] !== C
    ? ((D =
        i === null
          ? (0, Q.jsx)(Fe, {
              id: q(`source-control`).id,
              title: `Server environment`,
              children: (0, Q.jsx)(`p`, {
                className: `px-4 py-3 text-sm text-muted-foreground`,
                children: `Connect an environment to inspect its version control tools and hosting integrations.`,
              }),
            })
          : p
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(Rt, { title: `Version Control${a}`, headerAction: C }),
                  (0, Q.jsx)(Rt, { title: `Source Control Providers` }),
                ],
              })
            : f
              ? (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    d
                      ? (0, Q.jsx)(Fe, {
                          id: q(`source-control`).id,
                          title: `Version Control${a}`,
                          headerAction: C,
                          children: c.versionControlSystems.map(Ht),
                        })
                      : null,
                    c.sourceControlProviders.length > 0
                      ? (0, Q.jsx)(Fe, {
                          id: d ? void 0 : q(`source-control`).id,
                          title: d ? `Source Control Providers` : `Source Control Providers${a}`,
                          headerAction: d ? null : C,
                          children: c.sourceControlProviders.map((e) =>
                            (0, Q.jsx)(Ft, { item: e, children: _(e) }, `provider:${e.kind}`),
                          ),
                        })
                      : null,
                  ],
                })
              : (0, Q.jsx)(Bt, { error: s.error, isPending: s.isPending, onScan: h })),
      (e[17] = s.error),
      (e[18] = s.isPending),
      (e[19] = i),
      (e[20] = a),
      (e[21] = h),
      (e[22] = f),
      (e[23] = d),
      (e[24] = _),
      (e[25] = p),
      (e[26] = c.sourceControlProviders),
      (e[27] = c.versionControlSystems),
      (e[28] = C),
      (e[29] = D))
    : (D = e[29]);
  let O;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(ft, {})), (e[30] = O))
    : (O = e[30]);
  let k;
  return (
    e[31] === D
      ? (k = e[32])
      : ((k = (0, Q.jsxs)(Me, { children: [E, D, O] })), (e[31] = D), (e[32] = k)),
    k
  );
}
function Ht(e) {
  return (0, Q.jsx)(
    Ft,
    { item: e, children: e.kind === `git` ? (0, Q.jsx)(Lt, {}) : void 0 },
    `vcs:${e.kind}`,
  );
}
var Ut = Vt;
export { Ut as component };
//# sourceMappingURL=_chat.settings.source-control-XziXbrHB.js.map
