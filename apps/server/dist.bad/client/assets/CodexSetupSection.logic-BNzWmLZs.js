import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./external-link-DV7LH7eG.js";
import {
  Am as s,
  Dr as c,
  Gv as l,
  Mm as u,
  P_ as d,
  QC as f,
  Wv as p,
  Xl as m,
  _r as h,
  eb as g,
  iu as _,
  jc as v,
  l as y,
} from "./utils-CPoejuy5.js";
import { n as b, t as x } from "./radio-group-0_879w-T.js";
import { D as S, E as ee, P as C, m as te } from "./useSettings-N-JG2LFZ.js";
import { m as w } from "./server-3D32GveR.js";
import { a as ne, r as T } from "./session-0UrRHIau.js";
import { n as re } from "./query-LKSVgBQH.js";
import { t as E } from "./use-atom-command-DGAuqAck.js";
import { t as ie } from "./localApi-CWy6n-K6.js";
import { a as ae, l as oe, n as D, o as O, s as se, u as k } from "./dialog-BjeWpelT.js";
import { g as ce } from "./Icons-Blot99re.js";
import { t as A } from "./preview-BuXyUmSo.js";
import {
  L as le,
  _s as ue,
  bs as de,
  fo as fe,
  it as pe,
  po as me,
  vs as he,
  ys as ge,
} from "./main-BZa0O6xN.js";
import { a as _e } from "./settingsLayout-2i87rQY9.js";
import { t as ve } from "./RedactedSensitiveText-24HhEgVA.js";
var j = e(t(), 1),
  M = n(),
  N = e(r(), 1);
function ye(e) {
  let t = (0, M.c)(7),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ children: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, N.jsx)(ce, { className: `size-4 shrink-0`, "aria-hidden": `true` })), (t[3] = i))
    : (i = t[3]);
  let a = n ?? `Continue with ChatGPT`,
    o;
  return (
    t[4] !== r || t[5] !== a
      ? ((o = (0, N.jsxs)(c, { ...r, children: [i, a] })), (t[4] = r), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function be(e) {
  let t = (0, M.c)(23),
    { open: n, methods: r, onClose: i, onSelect: a } = e,
    o = r.filter(F),
    [s, c] = (0, j.useState)(null),
    l =
      s === `chatgpt-change-account`
        ? s
        : (o.find((e) => e.id === s)?.id ?? o[0]?.id ?? `chatgpt-change-account`),
    u = D,
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = d));
  let f = oe,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, N.jsxs)(se, {
        children: [
          (0, N.jsx)(k, { children: `Reconnect ChatGPT` }),
          (0, N.jsx)(ae, { children: `On OpenAI, sign in with the account you choose here.` }),
        ],
      })),
      (t[2] = p))
    : (p = t[2]);
  let m = b,
    h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (e) => c(e)), (t[3] = h)) : (h = t[3]);
  let g = o.map(P),
    _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, N.jsxs)(`label`, {
        className: `flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm`,
        children: [
          (0, N.jsx)(x, { value: `chatgpt-change-account` }),
          (0, N.jsx)(`span`, { className: `font-medium`, children: `Use a different account` }),
        ],
      })),
      (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] !== m || t[6] !== l || t[7] !== h || t[8] !== g
    ? ((v = (0, N.jsx)(`div`, {
        className: `px-6 pb-6`,
        children: (0, N.jsxs)(m, {
          "aria-label": `ChatGPT account to connect`,
          value: l,
          onValueChange: h,
          children: [g, _],
        }),
      })),
      (t[5] = m),
      (t[6] = l),
      (t[7] = h),
      (t[8] = g),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== a || t[11] !== l
    ? ((y = (0, N.jsx)(O, { children: (0, N.jsx)(ye, { onClick: () => a(l) }) })),
      (t[10] = a),
      (t[11] = l),
      (t[12] = y))
    : (y = t[12]);
  let S;
  t[13] !== f || t[14] !== p || t[15] !== v || t[16] !== y
    ? ((S = (0, N.jsxs)(f, { children: [p, v, y] })),
      (t[13] = f),
      (t[14] = p),
      (t[15] = v),
      (t[16] = y),
      (t[17] = S))
    : (S = t[17]);
  let ee;
  return (
    t[18] !== u || t[19] !== n || t[20] !== d || t[21] !== S
      ? ((ee = (0, N.jsx)(u, { open: n, onOpenChange: d, children: S })),
        (t[18] = u),
        (t[19] = n),
        (t[20] = d),
        (t[21] = S),
        (t[22] = ee))
      : (ee = t[22]),
    ee
  );
}
function P(e) {
  return (0, N.jsxs)(
    `label`,
    {
      className: `flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm`,
      children: [
        (0, N.jsx)(x, { value: e.id }),
        (0, N.jsx)(`span`, { className: `min-w-0 break-all font-medium`, children: e.name }),
      ],
    },
    e.id,
  );
}
function F(e) {
  return e.id.startsWith(`chatgpt-profile:`);
}
function I(e) {
  let t = (0, M.c)(36),
    { environmentId: n, onClose: r, renderSetup: i, onAccountCreated: a } = e,
    o = ne(n, d),
    s = te(n),
    u;
  t[0] === n ? (u = t[1]) : ((u = w.providersValueAtom(n)), (t[0] = n), (t[1] = u));
  let f = v(u),
    m = E(w.updateSettings, `Add ChatGPT account`),
    [g, _] = (0, j.useState)(`Personal`),
    b;
  t[2] === g ? (b = t[3]) : ((b = g.trim()), (t[2] = g), (t[3] = b));
  let x = `ChatGPT - ${b}`,
    [S, ee] = (0, j.useState)(null),
    [C, re] = (0, j.useState)(!1),
    ie = f?.find((e) => e.instanceId === S),
    ae = pe(ie),
    oe = (0, j.useEffectEvent)(r);
  (0, j.useEffect)(() => {
    ae && oe();
  }, [ae]);
  let O;
  t[4] !== x ||
  t[5] !== n ||
  t[6] !== g ||
  t[7] !== a ||
  t[8] !== r ||
  t[9] !== C ||
  t[10] !== s ||
  t[11] !== m
    ? ((O = async () => {
        if (C || !g.trim() || !T(n, `providers:manage`)) return;
        re(!0);
        let e = l.make(`codex_${y()}`);
        ((
          await m({
            environmentId: n,
            input: {
              patch: {
                providerInstances: {
                  ...s.providerInstances,
                  [e]: {
                    driver: p.make(`codex`),
                    displayName: x,
                    enabled: !0,
                    config: { enabled: !0, setupMode: `managed` },
                  },
                },
              },
            },
          })
        )._tag === `Success` && (a ? (a(e, x), r()) : ee(e)),
          re(!1));
      }),
      (t[4] = x),
      (t[5] = n),
      (t[6] = g),
      (t[7] = a),
      (t[8] = r),
      (t[9] = C),
      (t[10] = s),
      (t[11] = m),
      (t[12] = O))
    : (O = t[12]);
  let se = O,
    k = D,
    ce = !ae,
    A;
  t[13] === r
    ? (A = t[14])
    : ((A = (e) => {
        e || r();
      }),
      (t[13] = r),
      (t[14] = A));
  let le = de,
    fe = S ? x : `Add ChatGPT account`,
    me;
  t[15] === fe
    ? (me = t[16])
    : ((me = (0, N.jsx)(he, {
        title: fe,
        description: `Each account has its own Codex instance and sign-in. Choose the other account on the sign-in page.`,
      })),
      (t[15] = fe),
      (t[16] = me));
  let ve = ge,
    ye = S
      ? ie?.setup
        ? i(S, ie)
        : (0, N.jsx)(_e, { title: `Codex runtime`, description: `Preparing managed setup.` })
      : (0, N.jsx)(`form`, {
          id: `add-codex-account`,
          onSubmit: (e) => {
            (e.preventDefault(), se());
          },
          children: (0, N.jsx)(_e, {
            title: `Account name`,
            description: `Shown in the provider list and model picker.`,
            control: (0, N.jsx)(h, {
              "aria-label": `Account name`,
              value: g,
              disabled: C,
              onChange: (e) => _(e.target.value),
              placeholder: `e.g. Personal or Work`,
            }),
          }),
        }),
    be;
  t[17] !== ve || t[18] !== ye
    ? ((be = (0, N.jsx)(ve, { children: ye })), (t[17] = ve), (t[18] = ye), (t[19] = be))
    : (be = t[19]);
  let P;
  t[20] !== o || t[21] !== S || t[22] !== g || t[23] !== r || t[24] !== C
    ? ((P = (0, N.jsx)(ue, {
        children: S
          ? (0, N.jsx)(c, { variant: `outline`, onClick: r, children: `Finish later` })
          : (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(c, { variant: `outline`, disabled: C, onClick: r, children: `Cancel` }),
                (0, N.jsx)(c, {
                  type: `submit`,
                  form: `add-codex-account`,
                  disabled: C || !g.trim() || !o,
                  children: C ? `Adding account…` : `Continue`,
                }),
              ],
            }),
      })),
      (t[20] = o),
      (t[21] = S),
      (t[22] = g),
      (t[23] = r),
      (t[24] = C),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== le || t[27] !== be || t[28] !== P || t[29] !== me
    ? ((F = (0, N.jsxs)(le, { size: `wide`, children: [me, be, P] })),
      (t[26] = le),
      (t[27] = be),
      (t[28] = P),
      (t[29] = me),
      (t[30] = F))
    : (F = t[30]);
  let I;
  return (
    t[31] !== k || t[32] !== F || t[33] !== ce || t[34] !== A
      ? ((I = (0, N.jsx)(k, { open: ce, onOpenChange: A, children: F })),
        (t[31] = k),
        (t[32] = F),
        (t[33] = ce),
        (t[34] = A),
        (t[35] = I))
      : (I = t[35]),
    I
  );
}
var L = g(s),
  xe = g(u),
  Se = /^[A-Za-z0-9_./:\\-]+$/;
function Ce(e, t, n) {
  return Se.test(e) && (n === `windows` || !e.includes(`\\`))
    ? e
    : n === `windows`
      ? `& '${e.replaceAll(`'`, `''`)}'`
      : n === `darwin` || n === `linux`
        ? e.startsWith(`~/`) || e.startsWith(`~\\`)
          ? `~/'${e.slice(2).replaceAll(`'`, `'"'"'`)}'`
          : `'${e.replaceAll(`'`, `'"'"'`)}'`
        : t;
}
function we(e) {
  return e === void 0
    ? `checking`
    : !e.enabled || e.status === `disabled`
      ? `disabled`
      : !e.installed && e.status === `warning` && e.auth.status === `unknown`
        ? `checking`
        : e.installed
          ? e.auth.status === `unauthenticated`
            ? `signIn`
            : e.status === `ready`
              ? `ready`
              : `attention`
          : `install`;
}
var R = { checking: 0, disabled: 1, install: 2, attention: 3, signIn: 4, ready: 5 };
function Te(e) {
  let t = new Map();
  for (let n of e ?? []) {
    let e = t.get(n.driver);
    (e === void 0 || R[we(n)] > R[we(e)]) && t.set(n.driver, n);
  }
  return t;
}
var Ee = {
  claudeAgent: {
    windows: `irm https://claude.ai/install.ps1 | iex`,
    posix: `curl -fsSL https://claude.ai/install.sh | bash`,
  },
  codex: {
    windows: `irm https://chatgpt.com/codex/install.ps1 | iex`,
    posix: `curl -fsSL https://chatgpt.com/codex/install.sh | sh`,
  },
};
function De(e, t) {
  let n = Ee[e];
  return t === `windows` ? n.windows : n.posix;
}
function Oe(e, t, n) {
  let r = t.providerInstances[e.instanceId];
  if (e.driver === `claudeAgent`) {
    let e = L(r?.config ?? {});
    return `${Ce(f(e) ? e.value.binaryPath : `claude`, `claude`, n)} auth login`;
  }
  if (e.driver === `codex`) {
    let e = xe(r?.config ?? {});
    return `${Ce(f(e) ? e.value.binaryPath : `codex`, `codex`, n)} login`;
  }
  return e.driver;
}
var ke = {
  disabled: { dot: `bg-muted-foreground/50` },
  error: { dot: `bg-destructive` },
  neutral: { dot: `bg-muted-foreground` },
  ready: { dot: `bg-success` },
  warning: { dot: `bg-warning` },
};
function Ae(e) {
  return (
    e.driver === `antigravity` &&
    e.installed &&
    e.status === `warning` &&
    e.auth.status === `unknown` &&
    (e.auth.type === void 0 || e.auth.type === `oauth-personal` || e.auth.type === `oauth-business`)
  );
}
function je(e) {
  return e && !e.enabled ? `disabled` : e && Ae(e) ? `neutral` : (e?.status ?? `warning`);
}
function Me(e) {
  if (!e)
    return {
      headline: `Checking provider status`,
      detail: `Waiting for the server to report installation and authentication details.`,
    };
  if (!e.enabled || e.status === `disabled`)
    return {
      headline: `Disabled`,
      detail: e.message ?? `This provider is installed but disabled for new sessions in T3 Code.`,
    };
  if (!e.installed)
    return { headline: `Not found`, detail: e.message ?? `CLI not detected on PATH.` };
  if (e.auth.status === `unauthenticated`) {
    let t = e.auth.label ?? e.auth.type;
    return {
      headline: t ? `Not authenticated · ${t}` : `Not authenticated`,
      detail: e.message ?? null,
    };
  }
  if (Ae(e)) return { headline: `Installed · Sign-in not checked`, detail: e.message ?? null };
  if (e.status === `warning`)
    return {
      headline: `Needs attention`,
      detail: e.message ?? `The provider is installed, but the server could not fully verify it.`,
    };
  if (e.status === `error`)
    return {
      headline: `Unavailable`,
      detail: e.message ?? `The provider failed its startup checks.`,
    };
  if (e.auth.status === `authenticated`) {
    let t = e.auth.label ?? e.auth.type;
    return { headline: t ? `Authenticated · ${t}` : `Authenticated`, detail: e.message ?? null };
  }
  return { headline: `Available`, detail: e.message ?? null };
}
function Ne(e) {
  if (!e) return null;
  let t = /^agy_acp_server_(\d{4})(\d{2})(\d{2})_\d+(?:_(\w+))?$/.exec(e);
  if (t) {
    let [, e, n, r, i] = t;
    return `${e}-${n}-${r}${i ? ` ${i}` : ``}`;
  }
  return /^\d/.test(e) ? `v${e}` : e;
}
var z = {
  graceful: `Limited support`,
  unsupported: `Unsupported version`,
  broken: `Known broken version`,
};
function B(e, t, n = !0) {
  let r = t?.latestVersionStatus === `broken` || t?.latestVersionStatus === `unsupported`;
  if (n && t && (t.status === `graceful` || t.status === `unsupported` || t.status === `broken`)) {
    let n = t.recommendedVersion,
      i = Ne(n) ?? t.recommendedRange,
      a = e?.status === `current`;
    return {
      title: z[t.status],
      detail: t.message ?? (i ? `Use ${i} for full support.` : `Update for full support.`),
      updateCommand: n || r || a ? null : (e?.updateCommand ?? null),
      emphasis: t.status === `graceful` ? `normal` : `strong`,
      targetVersion: n,
    };
  }
  if (!e || e.status === `current` || e.status === `unknown` || r) return null;
  let i = `Update available`,
    a = e.latestVersion,
    o = Ne(a);
  return {
    title: i,
    detail: e.message ?? (o ? `${i}: install ${o}.` : `${i}: install the latest provider version.`),
    updateCommand: e.updateCommand,
    emphasis: `normal`,
    targetVersion: null,
  };
}
var Pe = () => void 0;
function Fe(e) {
  let t = (0, M.c)(11),
    [n, r] = (0, j.useState)(!1),
    i;
  t[0] === e.provider ? (i = t[1]) : ((i = we(e.provider)), (t[0] = e.provider), (t[1] = i));
  let o = i,
    s = e.enabled && o === `ready`,
    l = e.provider?.auth.status === `authenticated`,
    u = o === `checking`,
    d;
  t[2] === e.provider ? (d = t[3]) : ((d = Me(e.provider)), (t[2] = e.provider), (t[3] = d));
  let f = d,
    p;
  return (
    t[4] !== l || t[5] !== u || t[6] !== s || t[7] !== f || t[8] !== e || t[9] !== n
      ? ((p =
          e.mode === `existing` && e.presentation === `onboarding`
            ? (0, N.jsx)(Ge, {
                title: e.displayName || e.provider?.displayName || `Codex`,
                description: s
                  ? e.provider?.auth.email?.trim()
                    ? (0, N.jsxs)(N.Fragment, {
                        children: [
                          `Signed in as`,
                          ` `,
                          (0, N.jsx)(ve, {
                            value: e.provider.auth.email.trim(),
                            ariaLabel: `Toggle account email visibility`,
                            revealTooltip: `Click to reveal email`,
                            hideTooltip: `Click to hide email`,
                            className: `break-all`,
                          }),
                          `.`,
                        ],
                      })
                    : `Connected with your Codex CLI.`
                  : u
                    ? `Checking your Codex CLI...`
                    : e.provider?.installed
                      ? f.headline
                      : `Code with your ChatGPT subscription.`,
                control: s
                  ? (0, N.jsxs)(`span`, {
                      className: `inline-flex items-center gap-1.5 text-xs font-medium text-success-foreground`,
                      children: [(0, N.jsx)(a, { className: `size-3.5` }), `Ready`],
                    })
                  : u
                    ? (0, N.jsx)(`span`, {
                        className: `text-xs text-muted-foreground`,
                        children: `Checking...`,
                      })
                    : l
                      ? (0, N.jsx)(`span`, {
                          className: `text-xs text-muted-foreground`,
                          children: f.headline,
                        })
                      : (0, N.jsx)(ye, {
                          size: `sm`,
                          disabled: e.readOnly,
                          onClick: () => {
                            (r(!0), e.onModeChange(`managed`));
                          },
                          children: `Continue with ChatGPT`,
                        }),
                secondaryControl:
                  !l && !s && !u
                    ? (0, N.jsx)(c, {
                        size: `sm`,
                        variant: `ghost-muted`,
                        onClick: () => e.onModeChange(`existing`),
                        children: `Use existing CLI`,
                      })
                    : null,
              })
            : e.mode === `existing`
              ? null
              : e.provider?.setup?.canAuthenticate
                ? (0, N.jsx)(
                    Le,
                    {
                      ...e,
                      autoStart: n || e.autoStart === !0,
                      onAutoStartConsumed: () => {
                        (r(!1), e.onAutoStartConsumed?.());
                      },
                    },
                    `${e.environmentId}:${e.instanceId}`,
                  )
                : e.presentation === `onboarding`
                  ? (0, N.jsx)(Ge, {
                      title: e.displayName || e.provider?.displayName || `Codex`,
                      description: (0, N.jsx)(We, {}),
                      control: (0, N.jsx)(c, {
                        size: `sm`,
                        variant: `outline`,
                        className: `min-w-44`,
                        disabled: !0,
                        children: `Open sign-in page`,
                      }),
                      secondaryControl: (0, N.jsx)(c, {
                        size: `sm`,
                        variant: `ghost-muted`,
                        disabled: !0,
                        children: `Cancel`,
                      }),
                    })
                  : (0, N.jsx)(_e, {
                      title: `ChatGPT account`,
                      description: `Preparing sign-in.`,
                    })),
        (t[4] = l),
        (t[5] = u),
        (t[6] = s),
        (t[7] = f),
        (t[8] = e),
        (t[9] = n),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
function Ie(e) {
  let t = (0, M.c)(9),
    { environmentId: n, onClose: r, onAccountCreated: i } = e,
    a = ne(n, d),
    o;
  t[0] !== a || t[1] !== n || t[2] !== r
    ? ((o = (e, t) =>
        (0, N.jsx)(
          Le,
          {
            environmentId: n,
            instanceId: e,
            provider: t,
            mode: `managed`,
            enabled: !0,
            readOnly: !a,
            autoStart: !0,
            onAutoStartConsumed: Pe,
            onModeChange: Pe,
            onSignInCancelled: r,
            allowExistingCli: !1,
          },
          e,
        )),
      (t[0] = a),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== i || t[6] !== r || t[7] !== o
      ? ((s = (0, N.jsx)(I, { environmentId: n, onClose: r, onAccountCreated: i, renderSetup: o })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = r),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function Le(e) {
  let t = (0, M.c)(250),
    {
      environmentId: n,
      instanceId: r,
      provider: i,
      enabled: s,
      readOnly: l,
      onModeChange: u,
      autoStart: d,
      onAutoStartConsumed: f,
      allowExistingCli: p,
      presentation: g,
      displayName: v,
      onSignInCancelled: y,
    } = e,
    b = p === void 0 || p,
    x = { environmentId: n, input: { instanceId: r } },
    te = re(w.providerAuthState(x)),
    ne = re(w.providerInstallState(x)),
    [T, ae] = (0, j.useState)(null),
    oe;
  t[0] === T ? (oe = t[1]) : ((oe = T ? w.chatGptHandoffState(T) : null), (t[0] = T), (t[1] = oe));
  let D = re(oe),
    O = D.data?.phase === `auth` ? D.data.state : te.data,
    [se, k] = (0, j.useState)(!1),
    [ce, ue] = (0, j.useState)(`chatgpt`),
    de;
  t[2] === O?.methods
    ? (de = t[3])
    : ((de = O?.methods?.find(He)?.accountEmail), (t[2] = O?.methods), (t[3] = de));
  let pe = de,
    he;
  t[4] !== O?.methods || t[5] !== ce
    ? ((he = O?.methods?.find((e) => e.id === ce)?.accountEmail),
      (t[4] = O?.methods),
      (t[5] = ce),
      (t[6] = he))
    : (he = t[6]);
  let ge = he,
    P;
  t[7] === O?.methods ? (P = t[8]) : ((P = O?.methods?.some(Ve)), (t[7] = O?.methods), (t[8] = P));
  let F = P,
    I = O?.interaction?.type === `browser` ? O.interaction.url : O?.authorizationUrl,
    L = ne.data,
    xe = S(n),
    Se;
  t[9] === xe
    ? (Se = t[10])
    : ((Se = xe !== null && A(new URL(xe).hostname)), (t[9] = xe), (t[10] = Se));
  let Ce = Se,
    we;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = { reportFailure: !1, reportDefect: !1 }), (t[11] = we))
    : (we = t[11]);
  let R = we,
    Te = E(w.startProviderAuth, R),
    Ee = E(w.refreshProviders, R),
    De = E(w.completeProviderAuth, R),
    Oe = E(w.cancelProviderAuth, R),
    ke = E(w.logoutProviderAuth, R),
    Ae = E(w.startProviderInstall, R),
    je = E(w.cancelProviderInstall, R),
    Me = E(w.chatGptReconnectProfile, R),
    Ne = E(w.chatGptImportProfile, R),
    z = !T && (!Ce || window.desktopBridge?.receiveProviderAuthCallback !== void 0),
    B = z && !window.desktopBridge?.receiveProviderAuthCallback,
    Pe = C(),
    Fe = ee(Pe),
    Ie = S(Pe),
    Le;
  t[12] !== Ce || t[13] !== Fe?.connection || t[14] !== Pe || t[15] !== Ie
    ? ((Le =
        !Ce &&
        Pe &&
        Fe?.connection.phase === `connected` &&
        Ie &&
        A(new URL(Ie).hostname) &&
        (window.desktopBridge !== void 0 || A(window.location.hostname))
          ? Pe
          : null),
      (t[12] = Ce),
      (t[13] = Fe?.connection),
      (t[14] = Pe),
      (t[15] = Ie),
      (t[16] = Le))
    : (Le = t[16]);
  let Ue = Le,
    Ke = new URL(window.location.href);
  (Ke.pathname === `/welcome` && (Ke.hash = `agents:${n}`),
    Ke.pathname === `/settings/providers` && Ke.searchParams.set(`instanceId`, r));
  let qe = B,
    V = (0, j.useId)(),
    [Je, Ye] = (0, j.useState)(!1),
    Xe;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = { flowId: ``, value: `` }), (t[17] = Xe))
    : (Xe = t[17]);
  let [Ze, Qe] = (0, j.useState)(Xe),
    $e = Ze.flowId === O?.flowId ? Ze.value : ``,
    [H, et] = (0, j.useState)(!1),
    [U, tt] = (0, j.useState)(null),
    nt = (0, j.useRef)(!1),
    [rt, it] = (0, j.useState)(null),
    at = (0, j.useRef)(null),
    ot = (0, j.useRef)(!1),
    st = (0, j.useRef)(null),
    [ct, lt] = (0, j.useState)(!1),
    W = L?.installedVersion != null,
    G = i?.auth.status === `authenticated`,
    ut = W && L?.source !== `local` && L?.version != null && L.version !== L.installedVersion,
    K = U !== null && !G && (O?.phase === `succeeded` || U === `handoff`);
  U !== null && (G || O?.phase === `failed` || O?.phase === `cancelled`) && tt(null);
  let dt;
  t[18] !== O?.phase || t[19] !== U || t[20] !== n || t[21] !== r || t[22] !== Ee
    ? ((dt = () => {
        U && O?.phase === `succeeded` && Ee({ environmentId: n, input: { instanceId: r } });
      }),
      (t[18] = O?.phase),
      (t[19] = U),
      (t[20] = n),
      (t[21] = r),
      (t[22] = Ee),
      (t[23] = dt))
    : (dt = t[23]);
  let ft = O?.phase,
    pt;
  (t[24] !== U || t[25] !== n || t[26] !== r || t[27] !== Ee || t[28] !== ft
    ? ((pt = [U, ft, Ee, n, r]),
      (t[24] = U),
      (t[25] = n),
      (t[26] = r),
      (t[27] = Ee),
      (t[28] = ft),
      (t[29] = pt))
    : (pt = t[29]),
    (0, j.useEffect)(dt, pt));
  let mt = d && !ct,
    ht = U === `sign-in` && !G && (O === null || O.phase === `idle`),
    gt =
      K ||
      ht ||
      T !== null ||
      O?.phase === `starting` ||
      O?.phase === `waiting` ||
      O?.phase === `verifying`,
    q = L?.phase === `downloading` || L?.phase === `extracting` || L?.phase === `verifying`,
    J = mt || gt || (H && !q),
    Y = l || !s || H || te.error !== null || ne.error !== null,
    X = H || gt || q,
    _t;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = async (e, t) => {
        if (nt.current) return !1;
        ((nt.current = !0), et(!0), it(null));
        let n = !1;
        try {
          let r = await e();
          if (r._tag === `Failure`) {
            if (!m(r)) {
              let e = _(r);
              it(e instanceof Error ? e.message : `Codex setup failed. Try again.`);
            }
          } else ((n = !0), t?.(r.value));
        } catch {
          it(`Codex setup failed. Try again.`);
        }
        return ((nt.current = !1), et(!1), n);
      }),
      (t[30] = _t))
    : (_t = t[30]);
  let Z = _t,
    vt = (0, j.useId)(),
    yt = (0, j.useRef)(0),
    bt = (0, j.useRef)(null),
    [xt, St] = (0, j.useState)(!1),
    Ct;
  t[31] !== n || t[32] !== Ne || t[33] !== r || t[34] !== Z
    ? ((Ct = async (e) => {
        let t = await Z(() => Ne({ environmentId: n, input: { instanceId: r, profile: e } }));
        (t && (tt(`handoff`), ae(null)), St(!t));
      }),
      (t[31] = n),
      (t[32] = Ne),
      (t[33] = r),
      (t[34] = Z),
      (t[35] = Ct))
    : (Ct = t[35]);
  let wt = Ct,
    Tt;
  t[36] === wt ? (Tt = t[37]) : ((Tt = (e) => wt(e)), (t[36] = wt), (t[37] = Tt));
  let Et = (0, j.useEffectEvent)(Tt),
    Dt;
  t[38] !== T || t[39] !== D.data || t[40] !== Et
    ? ((Dt = () => {
        if (!T || D.data?.phase !== `finished`) return;
        let e = T.input.attemptId;
        bt.current !== e && ((bt.current = e), Et(D.data.profile));
      }),
      (t[38] = T),
      (t[39] = D.data),
      (t[40] = Et),
      (t[41] = Dt))
    : (Dt = t[41]);
  let Ot;
  (t[42] !== T || t[43] !== D.data
    ? ((Ot = [T, D.data]), (t[42] = T), (t[43] = D.data), (t[44] = Ot))
    : (Ot = t[44]),
    (0, j.useEffect)(Dt, Ot),
    T &&
      (D.error ||
        (D.data?.phase === `auth` && [`failed`, `cancelled`].includes(D.data.state.phase))) &&
      (it(
        D.data?.phase === `auth`
          ? (D.data.state.message ?? `ChatGPT sign-in could not finish. Try again.`)
          : `ChatGPT sign-in on the primary environment was interrupted. Try again.`,
      ),
      ae(null)));
  let kt;
  t[45] !== O || t[46] !== Oe || t[47] !== n || t[48] !== T || t[49] !== r || t[50] !== Z
    ? ((kt = () => (
        tt(null),
        T
          ? (ae(null), Promise.resolve())
          : Z(() => Oe({ environmentId: n, input: { instanceId: r, flowId: O.flowId } }))
      )),
      (t[45] = O),
      (t[46] = Oe),
      (t[47] = n),
      (t[48] = T),
      (t[49] = r),
      (t[50] = Z),
      (t[51] = kt))
    : (kt = t[51]);
  let At = kt,
    jt;
  t[52] !== z ||
  t[53] !== n ||
  t[54] !== vt ||
  t[55] !== r ||
  t[56] !== Ue ||
  t[57] !== Me ||
  t[58] !== Z ||
  t[59] !== Te
    ? ((jt = async (e) => {
        let t = e === void 0 ? `chatgpt` : e;
        if (nt.current) return;
        ((ot.current = !0), St(!1), ue(t));
        let i = new URL(window.location.href);
        if (
          (i.pathname === `/welcome` && (i.hash = `agents:${n}`),
          i.pathname === `/settings/providers` && i.searchParams.set(`instanceId`, r),
          Ue)
        ) {
          let e = `${vt}:${(yt.current += 1)}`;
          (await Z(
            () => Me({ environmentId: n, input: { instanceId: r, methodId: t } }),
            (t) =>
              ae({
                environmentId: Ue,
                input: {
                  instanceId: r,
                  environmentId: n,
                  attemptId: e,
                  returnUrl: i.toString(),
                  profile: t,
                },
              }),
          )) || (ot.current = !1);
        } else
          (await Z(
            () =>
              Te({
                environmentId: n,
                input: {
                  instanceId: r,
                  methodId: t,
                  returnUrl: i.toString(),
                  callbackMode: z ? `client` : `server`,
                },
              }),
            () => tt(`sign-in`),
          )) || (ot.current = !1);
      }),
      (t[52] = z),
      (t[53] = n),
      (t[54] = vt),
      (t[55] = r),
      (t[56] = Ue),
      (t[57] = Me),
      (t[58] = Z),
      (t[59] = Te),
      (t[60] = jt))
    : (jt = t[60]);
  let Mt = jt,
    Nt;
  t[61] !== X ||
  t[62] !== n ||
  t[63] !== W ||
  t[64] !== r ||
  t[65] !== Z ||
  t[66] !== Mt ||
  t[67] !== Ae ||
  t[68] !== Y ||
  t[69] !== ut
    ? ((Nt = async (e) => {
        let t = e === void 0 ? `chatgpt` : e;
        Y ||
          X ||
          (W && !ut
            ? await Mt(t)
            : ((at.current = t),
              (await Z(() => Ae({ environmentId: n, input: { instanceId: r } }))) ||
                (at.current = null)));
      }),
      (t[61] = X),
      (t[62] = n),
      (t[63] = W),
      (t[64] = r),
      (t[65] = Z),
      (t[66] = Mt),
      (t[67] = Ae),
      (t[68] = Y),
      (t[69] = ut),
      (t[70] = Nt))
    : (Nt = t[70]);
  let Q = Nt;
  d && !ct && !Y && !X && L !== null && i?.setup?.canInstall && lt(!0);
  let Pt;
  t[71] !== f || t[72] !== Q
    ? ((Pt = () => {
        (f(), Q());
      }),
      (t[71] = f),
      (t[72] = Q),
      (t[73] = Pt))
    : (Pt = t[73]);
  let Ft = (0, j.useEffectEvent)(Pt),
    It;
  t[74] !== ct || t[75] !== Ft
    ? ((It = () => {
        ct && Ft();
      }),
      (t[74] = ct),
      (t[75] = Ft),
      (t[76] = It))
    : (It = t[76]);
  let Lt;
  (t[77] === ct ? (Lt = t[78]) : ((Lt = [ct]), (t[77] = ct), (t[78] = Lt)),
    (0, j.useEffect)(It, Lt));
  let Rt;
  t[79] === Mt ? (Rt = t[80]) : ((Rt = (e) => Mt(e)), (t[79] = Mt), (t[80] = Rt));
  let zt = (0, j.useEffectEvent)(Rt),
    Bt;
  t[81] !== q || t[82] !== L?.phase || t[83] !== W || t[84] !== H || t[85] !== zt
    ? ((Bt = () => {
        if (!(!at.current || H || q)) {
          if (L?.phase === `failed` || L?.phase === `cancelled`) at.current = null;
          else if (W) {
            let e = at.current;
            ((at.current = null), zt(e));
          }
        }
      }),
      (t[81] = q),
      (t[82] = L?.phase),
      (t[83] = W),
      (t[84] = H),
      (t[85] = zt),
      (t[86] = Bt))
    : (Bt = t[86]);
  let Vt = L?.phase,
    Ht;
  (t[87] !== q || t[88] !== W || t[89] !== H || t[90] !== Vt
    ? ((Ht = [H, q, Vt, W]), (t[87] = q), (t[88] = W), (t[89] = H), (t[90] = Vt), (t[91] = Ht))
    : (Ht = t[91]),
    (0, j.useEffect)(Bt, Ht));
  let Ut = (0, j.useRef)(null),
    Wt = O?.flowId,
    Gt;
  t[92] !== z || t[93] !== De || t[94] !== n || t[95] !== Wt || t[96] !== r || t[97] !== Z
    ? ((Gt = async (e) => {
        try {
          let t = window.desktopBridge?.receiveProviderAuthCallback;
          if (t && z && Wt) {
            if (Ut.current === e) {
              await ie().shell.openExternal(e);
              return;
            }
            Ut.current = e;
            let i = await t(e);
            if (Ut.current !== e) return;
            ((Ut.current = null),
              await Z(() =>
                De({ environmentId: n, input: { instanceId: r, flowId: Wt, callbackUrl: i } }),
              ));
          } else await ie().shell.openExternal(e);
        } catch {
          it(
            `Could not finish sign-in on this computer. Try again or paste the redirect URL below.`,
          );
        }
      }),
      (t[92] = z),
      (t[93] = De),
      (t[94] = n),
      (t[95] = Wt),
      (t[96] = r),
      (t[97] = Z),
      (t[98] = Gt))
    : (Gt = t[98]);
  let Kt = Gt,
    qt;
  t[99] === Kt
    ? (qt = t[100])
    : ((qt = (e) => {
        Kt(e);
      }),
      (t[99] = Kt),
      (t[100] = qt));
  let Jt = (0, j.useEffectEvent)(qt),
    Yt,
    Xt;
  (t[101] !== z || t[102] !== I
    ? ((Yt = () => {
        if (z && I && window.desktopBridge?.cancelProviderAuthCallback)
          return () => {
            (Ut.current === I && (Ut.current = null),
              window.desktopBridge?.cancelProviderAuthCallback?.(I).catch(Be));
          };
      }),
      (Xt = [z, I]),
      (t[101] = z),
      (t[102] = I),
      (t[103] = Yt),
      (t[104] = Xt))
    : ((Yt = t[103]), (Xt = t[104])),
    (0, j.useEffect)(Yt, Xt));
  let Zt;
  t[105] !== O || t[106] !== Jt || t[107] !== B || t[108] !== I
    ? ((Zt = () => {
        ot.current &&
          O?.phase === `waiting` &&
          O.flowId &&
          I &&
          st.current !== O.flowId &&
          ((st.current = O.flowId), (ot.current = !1), B || Jt(I));
      }),
      (t[105] = O),
      (t[106] = Jt),
      (t[107] = B),
      (t[108] = I),
      (t[109] = Zt))
    : (Zt = t[109]);
  let Qt = O?.phase,
    $t = O?.flowId,
    en;
  (t[110] !== B || t[111] !== Qt || t[112] !== $t || t[113] !== I
    ? ((en = [Qt, $t, I, B]),
      (t[110] = B),
      (t[111] = Qt),
      (t[112] = $t),
      (t[113] = I),
      (t[114] = en))
    : (en = t[114]),
    (0, j.useEffect)(Zt, en));
  let tn;
  t[115] !== L || t[116] !== W
    ? ((tn =
        L?.phase === `downloading`
          ? `Downloading ${(L.downloadedBytes / 1e6).toFixed(1)}${L.totalBytes === null ? `` : ` of ${(L.totalBytes / 1e6).toFixed(1)}`} MB.`
          : L?.phase === `extracting`
            ? `Installing Codex.`
            : L?.phase === `verifying`
              ? `Checking Codex.`
              : W
                ? `${L?.source === `local` ? `Using your installed Codex` : `Managed by T3 Code`}${L?.installedVersion ? ` · v${L.installedVersion}` : ``}.`
                : (L?.message ?? `T3 Code downloads and manages Codex for you.`)),
      (t[115] = L),
      (t[116] = W),
      (t[117] = tn))
    : (tn = t[117]);
  let nn = tn,
    rn;
  t[118] !== O?.message ||
  t[119] !== O?.phase ||
  t[120] !== J ||
  t[121] !== G ||
  t[122] !== K ||
  t[123] !== q ||
  t[124] !== i ||
  t[125] !== pe ||
  t[126] !== ge ||
  t[127] !== nn
    ? ((rn = K
        ? `Finishing sign-in...`
        : q
          ? nn
          : J || O?.phase === `failed` || O?.phase === `cancelled`
            ? O?.phase === `waiting` && ge
              ? `Continue as ${ge} on OpenAI.`
              : (O?.message ?? `Finish signing in in your browser.`)
            : G
              ? i?.auth.email?.trim()
                ? (0, N.jsxs)(N.Fragment, {
                    children: [
                      `Signed in as`,
                      ` `,
                      (0, N.jsx)(ve, {
                        value: i.auth.email.trim(),
                        ariaLabel: `Toggle account email visibility`,
                        revealTooltip: `Click to reveal email`,
                        hideTooltip: `Click to hide email`,
                      }),
                      `.`,
                    ],
                  })
                : `Signed in with ChatGPT.`
              : (pe ?? `Use your ChatGPT subscription.`)),
      (t[118] = O?.message),
      (t[119] = O?.phase),
      (t[120] = J),
      (t[121] = G),
      (t[122] = K),
      (t[123] = q),
      (t[124] = i),
      (t[125] = pe),
      (t[126] = ge),
      (t[127] = nn),
      (t[128] = rn))
    : (rn = t[128]);
  let an = rn,
    on =
      qe && I && O?.flowId && me(Ke.toString())
        ? fe(
            {
              authorizationUrl: I,
              returnUrl: Ke.toString(),
              environmentId: n,
              instanceId: r,
              flowId: O.flowId,
            },
            !1,
          )
        : null,
    sn = B ? `default` : `outline`,
    cn = g === `onboarding` ? `min-w-44` : void 0,
    ln = D.data?.phase === `finished` ? H || !xt : !I || O?.phase !== `waiting`,
    un;
  t[129] !== D.data || t[130] !== Kt || t[131] !== wt || t[132] !== I
    ? ((un = () => {
        D.data?.phase === `finished` ? wt(D.data.profile) : I && Kt(I);
      }),
      (t[129] = D.data),
      (t[130] = Kt),
      (t[131] = wt),
      (t[132] = I),
      (t[133] = un))
    : (un = t[133]);
  let dn = K
      ? `Finishing sign-in...`
      : D.data?.phase === `finished`
        ? xt
          ? `Retry connection`
          : `Finishing sign-in...`
        : O?.phase === `waiting`
          ? B
            ? `Open ChatGPT sign-in`
            : `Open sign-in page`
          : g === `onboarding`
            ? `Open sign-in page`
            : `Signing in...`,
    fn;
  t[134] !== sn || t[135] !== cn || t[136] !== ln || t[137] !== un || t[138] !== dn
    ? ((fn = (0, N.jsx)(c, {
        size: `sm`,
        variant: sn,
        className: cn,
        disabled: ln,
        onClick: un,
        children: dn,
      })),
      (t[134] = sn),
      (t[135] = cn),
      (t[136] = ln),
      (t[137] = un),
      (t[138] = dn),
      (t[139] = fn))
    : (fn = t[139]);
  let pn = fn,
    mn;
  t[140] !== O ||
  t[141] !== $e ||
  t[142] !== De ||
  t[143] !== n ||
  t[144] !== T ||
  t[145] !== on ||
  t[146] !== r ||
  t[147] !== H ||
  t[148] !== l ||
  t[149] !== B ||
  t[150] !== Z ||
  t[151] !== Qe ||
  t[152] !== I
    ? ((mn =
        !T && O?.phase === `waiting` && I
          ? (0, N.jsxs)(`div`, {
              className: `flex w-full flex-col gap-3 text-xs leading-relaxed text-muted-foreground`,
              children: [
                (0, N.jsx)(`p`, {
                  children: `If sign-in doesn't return to T3 Code, paste the URL from the final localhost page.`,
                }),
                (0, N.jsxs)(`form`, {
                  className: `flex flex-col gap-2 sm:flex-row sm:items-center`,
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !O.flowId || !$e.trim())) return;
                    let t = $e.trim(),
                      i = O.flowId;
                    Z(() =>
                      De({ environmentId: n, input: { instanceId: r, flowId: i, callbackUrl: t } }),
                    ).then((e) => {
                      e && Qe({ flowId: i, value: `` });
                    });
                  },
                  children: [
                    (0, N.jsx)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: (0, N.jsx)(h, {
                        "aria-label": `ChatGPT sign-in redirect URL`,
                        type: `password`,
                        autoComplete: `off`,
                        placeholder: `Paste the URL from the sign-in tab`,
                        value: $e,
                        maxLength: 16384,
                        disabled: H || l,
                        onChange: (e) => Qe({ flowId: O.flowId ?? ``, value: e.target.value }),
                      }),
                    }),
                    (0, N.jsx)(c, {
                      variant: `outline`,
                      type: `submit`,
                      disabled: H || l || !$e.trim(),
                      children: `Connect`,
                    }),
                  ],
                }),
                B
                  ? null
                  : (0, N.jsx)(`div`, {
                      children: (0, N.jsxs)(c, {
                        size: `xs`,
                        variant: `ghost-muted`,
                        onClick: () => void ie().shell.openExternal(I),
                        children: [
                          `Try sign-in in your browser`,
                          (0, N.jsx)(o, { className: `size-3.5` }),
                        ],
                      }),
                    }),
                on
                  ? (0, N.jsxs)(`details`, {
                      children: [
                        (0, N.jsx)(`summary`, {
                          className: `cursor-pointer`,
                          children: `Other ways to connect`,
                        }),
                        (0, N.jsx)(c, {
                          className: `mt-2`,
                          size: `sm`,
                          variant: `outline`,
                          render: (0, N.jsx)(`a`, { href: on }),
                          children: `Use T3 desktop for automatic return`,
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[140] = O),
      (t[141] = $e),
      (t[142] = De),
      (t[143] = n),
      (t[144] = T),
      (t[145] = on),
      (t[146] = r),
      (t[147] = H),
      (t[148] = l),
      (t[149] = B),
      (t[150] = Z),
      (t[151] = Qe),
      (t[152] = I),
      (t[153] = mn))
    : (mn = t[153]);
  let $ = mn,
    hn;
  t[154] !== $ || t[155] !== V || t[156] !== Je
    ? ((hn =
        $ && Je
          ? (0, N.jsx)(`div`, {
              id: V,
              className: `w-full border-t border-border/50 pt-3`,
              children: $,
            })
          : null),
      (t[154] = $),
      (t[155] = V),
      (t[156] = Je),
      (t[157] = hn))
    : (hn = t[157]);
  let gn = hn,
    _n;
  t[158] !== $ || t[159] !== gn || t[160] !== V || t[161] !== Je || t[162] !== qe || t[163] !== Ye
    ? ((_n = qe
        ? $
        : $
          ? (0, N.jsxs)(`div`, {
              className: `space-y-3 text-xs leading-relaxed text-muted-foreground`,
              children: [
                (0, N.jsx)(We, {
                  label: `Having trouble signing in?`,
                  expanded: Je,
                  controls: V,
                  onToggle: () => Ye(ze),
                }),
                gn,
              ],
            })
          : null),
      (t[158] = $),
      (t[159] = gn),
      (t[160] = V),
      (t[161] = Je),
      (t[162] = qe),
      (t[163] = Ye),
      (t[164] = _n))
    : (_n = t[164]);
  let vn = _n,
    yn;
  t[165] === O?.methods
    ? (yn = t[166])
    : ((yn = O?.methods ?? []), (t[165] = O?.methods), (t[166] = yn));
  let bn;
  t[167] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bn = () => k(!1)), (t[167] = bn))
    : (bn = t[167]);
  let xn;
  t[168] !== O?.methods || t[169] !== Q
    ? ((xn = (e) => {
        (k(!1), Q(O?.methods?.some((t) => t.id === e) ? e : `chatgpt-change-account`));
      }),
      (t[168] = O?.methods),
      (t[169] = Q),
      (t[170] = xn))
    : (xn = t[170]);
  let Sn;
  t[171] !== se || t[172] !== yn || t[173] !== xn
    ? ((Sn = (0, N.jsx)(be, { open: se, methods: yn, onClose: bn, onSelect: xn })),
      (t[171] = se),
      (t[172] = yn),
      (t[173] = xn),
      (t[174] = Sn))
    : (Sn = t[174]);
  let Cn = Sn,
    wn;
  t[175] === O
    ? (wn = t[176])
    : ((wn =
        O?.phase === `idle` && O.message?.startsWith(`Signed out locally.`) ? O.message : null),
      (t[175] = O),
      (t[176] = wn));
  let Tn = wn;
  if (g === `onboarding`) {
    let e =
        Tn ??
        rt ??
        (te.error || ne.error
          ? `Could not read setup status. Reconnect and try again.`
          : L?.phase === `failed`
            ? L.message
            : null),
      o = v || i?.displayName || `Codex`,
      s;
    t[177] !== an ||
    t[178] !== O?.phase ||
    t[179] !== J ||
    t[180] !== G ||
    t[181] !== $ ||
    t[182] !== V ||
    t[183] !== Je ||
    t[184] !== q ||
    t[185] !== qe ||
    t[186] !== H ||
    t[187] !== i ||
    t[188] !== nn ||
    t[189] !== Ye ||
    t[190] !== mt ||
    t[191] !== ht
      ? ((s = q
          ? nn
          : G
            ? i?.auth.email?.trim()
              ? (0, N.jsxs)(N.Fragment, {
                  children: [
                    `Signed in as`,
                    ` `,
                    (0, N.jsx)(ve, {
                      value: i.auth.email.trim(),
                      ariaLabel: `Toggle account email visibility`,
                      revealTooltip: `Click to reveal email`,
                      hideTooltip: `Click to hide email`,
                      className: `break-all`,
                    }),
                    `.`,
                  ],
                })
              : `Connected to ChatGPT.`
            : $ && !qe
              ? (0, N.jsx)(We, { expanded: Je, controls: V, onToggle: () => Ye(Re) })
              : mt || ht || O?.phase === `starting` || O?.phase === `waiting` || (H && !q)
                ? (0, N.jsx)(We, {})
                : J || O?.phase === `failed` || O?.phase === `cancelled`
                  ? an
                  : `Code with your ChatGPT subscription.`),
        (t[177] = an),
        (t[178] = O?.phase),
        (t[179] = J),
        (t[180] = G),
        (t[181] = $),
        (t[182] = V),
        (t[183] = Je),
        (t[184] = q),
        (t[185] = qe),
        (t[186] = H),
        (t[187] = i),
        (t[188] = nn),
        (t[189] = Ye),
        (t[190] = mt),
        (t[191] = ht),
        (t[192] = s))
      : (s = t[192]);
    let d;
    t[193] !== J ||
    t[194] !== G ||
    t[195] !== X ||
    t[196] !== F ||
    t[197] !== q ||
    t[198] !== W ||
    t[199] !== H ||
    t[200] !== i?.setup?.canAuthenticate ||
    t[201] !== i?.setup?.canInstall ||
    t[202] !== Q ||
    t[203] !== Y ||
    t[204] !== pn
      ? ((d =
          G && !X
            ? (0, N.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5 text-xs font-medium text-success-foreground`,
                children: [(0, N.jsx)(a, { className: `size-3.5` }), `Ready`],
              })
            : J
              ? pn
              : (0, N.jsx)(ye, {
                  size: `sm`,
                  disabled: Y || X || (W ? !i?.setup?.canAuthenticate : !i?.setup?.canInstall),
                  onClick: () => {
                    F ? k(!0) : Q();
                  },
                  children:
                    q || H ? `Setting up...` : F ? `Reconnect account` : `Continue with ChatGPT`,
                })),
        (t[193] = J),
        (t[194] = G),
        (t[195] = X),
        (t[196] = F),
        (t[197] = q),
        (t[198] = W),
        (t[199] = H),
        (t[200] = i?.setup?.canAuthenticate),
        (t[201] = i?.setup?.canInstall),
        (t[202] = Q),
        (t[203] = Y),
        (t[204] = pn),
        (t[205] = d))
      : (d = t[205]);
    let f;
    t[206] !== b ||
    t[207] !== O?.flowId ||
    t[208] !== J ||
    t[209] !== G ||
    t[210] !== X ||
    t[211] !== je ||
    t[212] !== At ||
    t[213] !== n ||
    t[214] !== K ||
    t[215] !== T ||
    t[216] !== F ||
    t[217] !== q ||
    t[218] !== L ||
    t[219] !== r ||
    t[220] !== u ||
    t[221] !== H ||
    t[222] !== l ||
    t[223] !== Z ||
    t[224] !== Q ||
    t[225] !== Y
      ? ((f =
          (J && !K) || q
            ? (0, N.jsx)(c, {
                size: `sm`,
                variant: `ghost-muted`,
                disabled: H || l,
                onClick: () => {
                  ((ot.current = !1),
                    (at.current = null),
                    T || (J && O?.flowId)
                      ? At()
                      : L?.operationId &&
                        Z(() =>
                          je({
                            environmentId: n,
                            input: { instanceId: r, operationId: L.operationId },
                          }),
                        ));
                },
                children: `Cancel`,
              })
            : !J && !G && F
              ? (0, N.jsx)(c, {
                  size: `sm`,
                  variant: `ghost-muted`,
                  disabled: Y || X,
                  onClick: () => void Q(`chatgpt-change-account`),
                  children: `Use a different account`,
                })
              : !J && !G && b
                ? (0, N.jsx)(c, {
                    size: `sm`,
                    variant: `ghost-muted`,
                    disabled: l || X,
                    onClick: () => u(`existing`),
                    children: `Use existing CLI`,
                  })
                : null),
        (t[206] = b),
        (t[207] = O?.flowId),
        (t[208] = J),
        (t[209] = G),
        (t[210] = X),
        (t[211] = je),
        (t[212] = At),
        (t[213] = n),
        (t[214] = K),
        (t[215] = T),
        (t[216] = F),
        (t[217] = q),
        (t[218] = L),
        (t[219] = r),
        (t[220] = u),
        (t[221] = H),
        (t[222] = l),
        (t[223] = Z),
        (t[224] = Q),
        (t[225] = Y),
        (t[226] = f))
      : (f = t[226]);
    let p = qe ? vn : gn,
      m;
    t[227] === e
      ? (m = t[228])
      : ((m = e
          ? (0, N.jsx)(`p`, { role: `alert`, className: `text-xs text-destructive`, children: e })
          : null),
        (t[227] = e),
        (t[228] = m));
    let h;
    t[229] !== o || t[230] !== s || t[231] !== d || t[232] !== f || t[233] !== p || t[234] !== m
      ? ((h = (0, N.jsxs)(Ge, {
          title: o,
          description: s,
          control: d,
          secondaryControl: f,
          children: [p, m],
        })),
        (t[229] = o),
        (t[230] = s),
        (t[231] = d),
        (t[232] = f),
        (t[233] = p),
        (t[234] = m),
        (t[235] = h))
      : (h = t[235]);
    let g;
    return (
      t[236] !== Cn || t[237] !== h
        ? ((g = (0, N.jsxs)(N.Fragment, { children: [Cn, h] })),
          (t[236] = Cn),
          (t[237] = h),
          (t[238] = g))
        : (g = t[238]),
      g
    );
  }
  let En;
  t[239] === G
    ? (En = t[240])
    : ((En = G
        ? (0, N.jsx)(`div`, {
            className: `flex justify-end px-3 py-1 sm:px-4`,
            children: (0, N.jsx)(le, {}),
          })
        : null),
      (t[239] = G),
      (t[240] = En));
  let Dn;
  t[241] === Tn
    ? (Dn = t[242])
    : ((Dn = Tn
        ? (0, N.jsx)(`p`, {
            role: `alert`,
            className: `px-3 py-2 text-xs text-muted-foreground sm:px-4`,
            children: Tn,
          })
        : null),
      (t[241] = Tn),
      (t[242] = Dn));
  let On;
  t[243] === vn
    ? (On = t[244])
    : ((On = vn ? (0, N.jsx)(`div`, { className: `px-3 py-3 sm:px-4`, children: vn }) : null),
      (t[243] = vn),
      (t[244] = On));
  let kn;
  return (
    t[245] !== te || t[246] !== rt || t[247] !== ne.error || t[248] !== L
      ? ((kn =
          rt || te.error || ne.error || L?.phase === `failed`
            ? (0, N.jsx)(`p`, {
                role: `alert`,
                className: `px-3 py-2 text-xs text-destructive sm:px-4`,
                children:
                  rt ??
                  (L?.phase === `failed`
                    ? L.message
                    : `Could not read Codex setup status. Reconnect and try again.`),
              })
            : null),
        (t[245] = te),
        (t[246] = rt),
        (t[247] = ne.error),
        (t[248] = L),
        (t[249] = kn))
      : (kn = t[249]),
    (0, N.jsxs)(`section`, {
      "aria-label": `Codex setup`,
      className: `divide-y divide-border/50`,
      children: [
        Cn,
        (0, N.jsx)(_e, {
          title: `ChatGPT account`,
          description: an,
          control: (0, N.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-end gap-2`,
            children: J
              ? (0, N.jsxs)(N.Fragment, {
                  children: [
                    pn,
                    !K &&
                      (0, N.jsx)(c, {
                        size: `sm`,
                        variant: `ghost`,
                        disabled: H || l,
                        onClick: () => {
                          (T || O?.flowId) && ((ot.current = !1), At(), y?.());
                        },
                        children: `Cancel`,
                      }),
                  ],
                })
              : q
                ? (0, N.jsx)(c, {
                    size: `sm`,
                    variant: `ghost`,
                    disabled: H || l,
                    onClick: () => {
                      L?.operationId &&
                        ((at.current = null),
                        Z(() =>
                          je({
                            environmentId: n,
                            input: { instanceId: r, operationId: L.operationId },
                          }),
                        ));
                    },
                    children: `Cancel`,
                  })
                : G
                  ? (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(c, {
                          size: `sm`,
                          variant: `outline`,
                          disabled: Y || X,
                          onClick: () => k(!0),
                          children: `Change account`,
                        }),
                        (0, N.jsx)(c, {
                          size: `sm`,
                          variant: `ghost`,
                          disabled: Y || X,
                          onClick: () => void Z(() => ke(x)),
                          children: `Disconnect`,
                        }),
                      ],
                    })
                  : (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(ye, {
                          size: `sm`,
                          disabled:
                            Y || X || (W ? !i?.setup?.canAuthenticate : !i?.setup?.canInstall),
                          onClick: () => {
                            F ? k(!0) : Q();
                          },
                          children: H
                            ? `Setting up...`
                            : F
                              ? `Reconnect account`
                              : `Continue with ChatGPT`,
                        }),
                        F
                          ? (0, N.jsx)(c, {
                              size: `sm`,
                              variant: `ghost`,
                              disabled: Y || X,
                              onClick: () => void Q(`chatgpt-change-account`),
                              children: `Use a different account`,
                            })
                          : null,
                      ],
                    }),
          }),
        }),
        En,
        Dn,
        On,
        kn,
      ],
    })
  );
}
function Re(e) {
  return !e;
}
function ze(e) {
  return !e;
}
function Be() {}
function Ve(e) {
  return e.id.startsWith(`chatgpt-profile:`);
}
function He(e) {
  return e.id === `chatgpt`;
}
function Ue(e) {
  let t = (0, M.c)(20),
    { environmentId: n, instanceId: r, provider: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = w.providerInstallState({ environmentId: n, input: { instanceId: r } })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o = re(a),
    s = o.data?.executablePath ?? ``,
    c = o.error ? `Could not read runtime path` : `Not installed`,
    l;
  t[3] !== s || t[4] !== c
    ? ((l = (0, N.jsx)(_e, {
        title: `Binary path`,
        description: `Selected by T3 Code.`,
        control: (0, N.jsx)(`div`, {
          className: `w-full sm:w-80`,
          children: (0, N.jsx)(h, {
            "aria-label": `Codex binary path`,
            value: s,
            title: s,
            placeholder: c,
            disabled: !0,
          }),
        }),
      })),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u = i?.runtimePaths?.homePath ?? ``,
    d = i?.runtimePaths?.homePath,
    f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, N.jsx)(_e, {
        title: `CODEX_HOME path`,
        description: `Shared Codex config, sessions, and state.`,
        control: (0, N.jsx)(`div`, {
          className: `w-full sm:w-80`,
          children: (0, N.jsx)(h, {
            "aria-label": `Codex home path`,
            value: u,
            title: d,
            placeholder: `Unavailable`,
            disabled: !0,
          }),
        }),
      })),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p = i?.runtimePaths?.shadowHomePath
      ? `Account-specific home sharing the Codex state above.`
      : `This instance uses the shared Codex home directly.`,
    m = i?.runtimePaths?.shadowHomePath ?? ``,
    g = i?.runtimePaths?.shadowHomePath ?? void 0,
    _ = i?.runtimePaths ? `Not used` : `Unavailable`,
    v;
  t[9] !== _ || t[10] !== m || t[11] !== g
    ? ((v = (0, N.jsx)(`div`, {
        className: `w-full sm:w-80`,
        children: (0, N.jsx)(h, {
          "aria-label": `Codex shadow home path`,
          value: m,
          title: g,
          placeholder: _,
          disabled: !0,
        }),
      })),
      (t[9] = _),
      (t[10] = m),
      (t[11] = g),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== v || t[14] !== p
    ? ((y = (0, N.jsx)(_e, { title: `Shadow home path`, description: p, control: v })),
      (t[13] = v),
      (t[14] = p),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== y || t[17] !== l || t[18] !== f
      ? ((b = (0, N.jsxs)(N.Fragment, { children: [l, f, y] })),
        (t[16] = y),
        (t[17] = l),
        (t[18] = f),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function We(e) {
  let t = (0, M.c)(10),
    { label: n, expanded: r, controls: a, onToggle: o } = e,
    s = n === void 0 ? `Complete sign-in in your browser.` : n,
    c = r !== void 0 && r;
  if (!o) {
    let e;
    return (
      t[0] === s
        ? (e = t[1])
        : ((e = (0, N.jsx)(`div`, { className: `leading-relaxed`, children: s })),
          (t[0] = s),
          (t[1] = e)),
      e
    );
  }
  let l = `size-3 shrink-0 ${c ? `rotate-90` : ``}`,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = (0, N.jsx)(i, { "aria-hidden": !0, className: l })), (t[2] = l), (t[3] = u));
  let d;
  return (
    t[4] !== a || t[5] !== c || t[6] !== s || t[7] !== o || t[8] !== u
      ? ((d = (0, N.jsxs)(`button`, {
          type: `button`,
          className: `inline-flex items-center gap-1.5 rounded-sm text-left leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
          "aria-label": `Having trouble signing in?`,
          "aria-expanded": c,
          "aria-controls": a,
          onClick: o,
          children: [s, u],
        })),
        (t[4] = a),
        (t[5] = c),
        (t[6] = s),
        (t[7] = o),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function Ge(e) {
  let t = (0, M.c)(21),
    { title: n, description: r, control: i, secondaryControl: a, children: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = j.Children.toArray(o)), (t[0] = o), (t[1] = s));
  let c = s,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, N.jsx)(ce, { className: `size-5 shrink-0 fill-foreground` })), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, N.jsx)(`h3`, { className: `text-sm font-medium`, children: n })),
      (t[3] = n),
      (t[4] = u));
  let d;
  t[5] === r
    ? (d = t[6])
    : ((d = (0, N.jsx)(`div`, {
        className: `mt-0.5 text-xs leading-relaxed text-muted-foreground`,
        children: r,
      })),
      (t[5] = r),
      (t[6] = d));
  let f;
  t[7] !== u || t[8] !== d
    ? ((f = (0, N.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [u, d] })),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== i || t[11] !== a
    ? ((p =
        i || a
          ? (0, N.jsxs)(`div`, {
              className: `flex shrink-0 flex-wrap items-center justify-end gap-2 has-[button]:w-full has-[button]:flex-col-reverse has-[button]:items-end sm:has-[button]:w-auto sm:has-[button]:flex-row sm:has-[button]:items-center`,
              children: [a, i],
            })
          : null),
      (t[10] = i),
      (t[11] = a),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== f || t[14] !== p
    ? ((m = (0, N.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-3`,
        children: [l, f, p],
      })),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === c
    ? (h = t[17])
    : ((h =
        c.length > 0
          ? (0, N.jsx)(`div`, {
              className: `ml-8 mt-2 flex flex-wrap items-center gap-2`,
              children: c,
            })
          : null),
      (t[16] = c),
      (t[17] = h));
  let g;
  return (
    t[18] !== m || t[19] !== h
      ? ((g = (0, N.jsxs)(`div`, {
          className: `rounded-lg border border-border bg-background px-4 py-4`,
          children: [m, h],
        })),
        (t[18] = m),
        (t[19] = h),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function Ke(e) {
  return typeof e == `object` && e && `setupMode` in e && e.setupMode === `managed`
    ? `managed`
    : `existing`;
}
export {
  ke as a,
  B as c,
  De as d,
  Oe as f,
  Fe as i,
  Ne as l,
  ye as m,
  Ie as n,
  je as o,
  Te as p,
  Ue as r,
  Me as s,
  Ke as t,
  we as u,
};
//# sourceMappingURL=CodexSetupSection.logic-BNzWmLZs.js.map
