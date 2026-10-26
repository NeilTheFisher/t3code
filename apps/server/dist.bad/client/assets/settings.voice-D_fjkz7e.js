import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as ee } from "./jsx-runtime-BQExFN_X.js";
import { r as te } from "./search-BrluOr7L.js";
import { r as ne } from "./triangle-alert-Ca4wixX0.js";
import { t as re } from "./earth-Bwix7kw-.js";
import { t as ie } from "./history-BmVqg-o-.js";
import { n as ae, t as r } from "./loader-BoeYlPKv.js";
import { t as oe } from "./mic-vocal-DNKyWUpJ.js";
import { t as se } from "./trash-2-Dt6v2wPw.js";
import { Dr as i, JC as ce, _r as le, cp as ue, iu as a, jc as de } from "./utils-CPoejuy5.js";
import { a as o, c as s, o as c, s as fe, t as l } from "./select-CBCDohvC.js";
import { N as pe } from "./useSettings-N-JG2LFZ.js";
import { m as u } from "./server-3D32GveR.js";
import { t as d } from "./use-atom-command-DGAuqAck.js";
import {
  _ as f,
  a as me,
  c as he,
  d as ge,
  f as _e,
  g as ve,
  h as ye,
  i as be,
  l as xe,
  m as Se,
  n as Ce,
  o as we,
  p as Te,
  r as Ee,
  s as De,
  t as Oe,
  u as ke,
  v as Ae,
  y as p,
} from "./main-BZa0O6xN.js";
import { a as m, i as je, s as Me } from "./settingsLayout-2i87rQY9.js";
var Ne = n(),
  h = e(t(), 1),
  g = e(ee(), 1);
function _(e) {
  return e instanceof Error
    ? e.message
    : typeof e == `object` && e && `message` in e
      ? String(e.message)
      : `The voice request failed.`;
}
function Pe(e) {
  let t = (0, Ne.c)(262),
    { environmentId: n } = e,
    ee;
  t[0] === n
    ? (ee = t[1])
    : ((ee = u.voiceCredentialStatus({ environmentId: n, input: {} })), (t[0] = n), (t[1] = ee));
  let o = de(ee),
    pe;
  t[2] === o ? (pe = t[3]) : ((pe = ce(ue(o))), (t[2] = o), (t[3] = pe));
  let p = pe,
    Pe;
  t[4] === n
    ? (Pe = t[5])
    : ((Pe = u.parallelCredentialStatus({ environmentId: n, input: {} })), (t[4] = n), (t[5] = Pe));
  let it = de(Pe),
    at;
  t[6] === it ? (at = t[7]) : ((at = ce(ue(it))), (t[6] = it), (t[7] = at));
  let ot = at,
    st;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = { reportFailure: !1 }), (t[8] = st))
    : (st = t[8]);
  let ct = d(u.setVoiceCredential, st),
    lt;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = { reportFailure: !1 }), (t[9] = lt))
    : (lt = t[9]);
  let ut = d(u.removeVoiceCredential, lt),
    dt;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = { reportFailure: !1 }), (t[10] = dt))
    : (dt = t[10]);
  let ft = d(u.createVoiceSession, dt),
    pt;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = { reportFailure: !1 }), (t[11] = pt))
    : (pt = t[11]);
  let mt = d(u.setParallelCredential, pt),
    ht;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = { reportFailure: !1 }), (t[12] = ht))
    : (ht = t[12]);
  let gt = d(u.removeParallelCredential, ht),
    _t;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = { reportFailure: !1 }), (t[13] = _t))
    : (_t = t[13]);
  let vt = d(u.searchVoiceWeb, _t),
    [v, yt] = (0, h.useState)(``),
    [y, bt] = (0, h.useState)(!1),
    [b, x] = (0, h.useState)(null),
    [xt, S] = (0, h.useState)(null),
    [C, St] = (0, h.useState)(``),
    [w, Ct] = (0, h.useState)(!1),
    [T, E] = (0, h.useState)(null),
    [wt, D] = (0, h.useState)(null),
    O = Oe(rt),
    Tt = Oe(nt),
    k = f(tt),
    A = f(et),
    j = f($e),
    M = f(Qe),
    N = f(Ze),
    P = f(Xe),
    F = f(Ye),
    Et = f(Je),
    Dt = f(qe),
    Ot = f(Ke),
    kt = f(Ge),
    At = f(We),
    jt = f(Ue),
    Mt = f(He),
    Nt,
    Pt;
  (t[14] === p
    ? ((Nt = t[15]), (Pt = t[16]))
    : ((Nt = () => {
        p && bt(p.configured);
      }),
      (Pt = [p]),
      (t[14] = p),
      (t[15] = Nt),
      (t[16] = Pt)),
    (0, h.useEffect)(Nt, Pt));
  let Ft, It;
  (t[17] === ot
    ? ((Ft = t[18]), (It = t[19]))
    : ((Ft = () => {
        ot && Ct(ot.configured);
      }),
      (It = [ot]),
      (t[17] = ot),
      (t[18] = Ft),
      (t[19] = It)),
    (0, h.useEffect)(Ft, It));
  let Lt;
  t[20] !== v || t[21] !== b || t[22] !== n || t[23] !== ct
    ? ((Lt = async () => {
        if (!n || v.trim().length === 0 || b) return;
        (x(`save`), S(null));
        let e = await ct({ environmentId: n, input: { apiKey: v } });
        (x(null),
          e._tag === `Success`
            ? (bt(!0), yt(``), S(`API key saved securely on this T3 Code environment.`))
            : S(_(a(e))));
      }),
      (t[20] = v),
      (t[21] = b),
      (t[22] = n),
      (t[23] = ct),
      (t[24] = Lt))
    : (Lt = t[24]);
  let Rt = Lt,
    zt;
  t[25] !== b || t[26] !== y || t[27] !== ft || t[28] !== n || t[29] !== k
    ? ((zt = async () => {
        if (!n || !y || b) return;
        (x(`test`), S(null));
        let e = await ft({ environmentId: n, input: { model: k } });
        (x(null),
          S(e._tag === `Success` ? `Connection successful. OpenAI Realtime is ready.` : _(a(e))));
      }),
      (t[25] = b),
      (t[26] = y),
      (t[27] = ft),
      (t[28] = n),
      (t[29] = k),
      (t[30] = zt))
    : (zt = t[30]);
  let Bt = zt,
    Vt;
  t[31] !== b || t[32] !== y || t[33] !== n || t[34] !== ut
    ? ((Vt = async () => {
        if (!n || !y || b) return;
        (x(`remove`), S(null));
        let e = await ut({ environmentId: n, input: {} });
        (x(null), e._tag === `Success` ? (bt(!1), S(`Saved OpenAI API key removed.`)) : S(_(a(e))));
      }),
      (t[31] = b),
      (t[32] = y),
      (t[33] = n),
      (t[34] = ut),
      (t[35] = Vt))
    : (Vt = t[35]);
  let Ht = Vt,
    Ut;
  t[36] !== n || t[37] !== C || t[38] !== T || t[39] !== mt
    ? ((Ut = async () => {
        if (!n || C.trim().length === 0 || T) return;
        (E(`save`), D(null));
        let e = await mt({ environmentId: n, input: { apiKey: C } });
        (E(null),
          e._tag === `Success`
            ? (Ct(!0), St(``), D(`Parallel API key saved securely on this T3 Code environment.`))
            : D(_(a(e))));
      }),
      (t[36] = n),
      (t[37] = C),
      (t[38] = T),
      (t[39] = mt),
      (t[40] = Ut))
    : (Ut = t[40]);
  let Wt = Ut,
    Gt;
  t[41] !== n || t[42] !== T || t[43] !== w || t[44] !== vt
    ? ((Gt = async () => {
        if (!n || !w || T) return;
        (E(`test`), D(null));
        let e = await vt({
          environmentId: n,
          input: {
            objective: `Verify that Parallel Search is available.`,
            searchQueries: [`Parallel AI official website`],
          },
        });
        (E(null),
          D(e._tag === `Success` ? `Connection successful. Parallel Search is ready.` : _(a(e))));
      }),
      (t[41] = n),
      (t[42] = T),
      (t[43] = w),
      (t[44] = vt),
      (t[45] = Gt))
    : (Gt = t[45]);
  let Kt = Gt,
    qt;
  t[46] !== n || t[47] !== T || t[48] !== w || t[49] !== gt
    ? ((qt = async () => {
        if (!n || !w || T) return;
        (E(`remove`), D(null));
        let e = await gt({ environmentId: n, input: {} });
        (E(null),
          e._tag === `Success` ? (Ct(!1), D(`Saved Parallel API key removed.`)) : D(_(a(e))));
      }),
      (t[46] = n),
      (t[47] = T),
      (t[48] = w),
      (t[49] = gt),
      (t[50] = qt))
    : (qt = t[50]);
  let Jt = qt,
    Yt;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = (0, g.jsxs)(`div`, {
        children: [
          (0, g.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight`,
            children: `Voice`,
          }),
          (0, g.jsx)(`p`, {
            className: `mt-1 text-sm text-muted-foreground`,
            children: `Configure the global OpenAI Realtime voice layer for T3 Code.`,
          }),
        ],
      })),
      (t[51] = Yt))
    : (Yt = t[51]);
  let Xt;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xt = (0, g.jsx)(oe, { className: `size-3.5` })), (t[52] = Xt))
    : (Xt = t[52]);
  let Zt = y ? `text-success-foreground dark:text-success-foreground` : void 0,
    Qt = y ? `Configured` : `Not configured`,
    I;
  t[53] !== Zt || t[54] !== Qt
    ? ((I = (0, g.jsx)(`span`, { className: Zt, children: Qt })),
      (t[53] = Zt),
      (t[54] = Qt),
      (t[55] = I))
    : (I = t[55]);
  let $t;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = (e) => yt(e.currentTarget.value)), (t[56] = $t))
    : ($t = t[56]);
  let en = y ? `Enter a replacement OpenAI API key` : `sk-…`,
    L;
  t[57] !== v || t[58] !== en
    ? ((L = (0, g.jsx)(le, {
        nativeInput: !0,
        type: `password`,
        autoComplete: `off`,
        value: v,
        onChange: $t,
        placeholder: en,
        "aria-label": `OpenAI API key`,
      })),
      (t[57] = v),
      (t[58] = en),
      (t[59] = L))
    : (L = t[59]);
  let R;
  t[60] === Rt ? (R = t[61]) : ((R = () => void Rt()), (t[60] = Rt), (t[61] = R));
  let z;
  t[62] !== v || t[63] !== b || t[64] !== n
    ? ((z = !n || v.trim().length === 0 || b !== null),
      (t[62] = v),
      (t[63] = b),
      (t[64] = n),
      (t[65] = z))
    : (z = t[65]);
  let B;
  t[66] === b
    ? (B = t[67])
    : ((B =
        b === `save`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(ae, { className: `size-3.5` })),
      (t[66] = b),
      (t[67] = B));
  let V;
  t[68] !== R || t[69] !== z || t[70] !== B
    ? ((V = (0, g.jsxs)(i, {
        className: `shrink-0`,
        size: `sm`,
        onClick: R,
        disabled: z,
        children: [B, `Save key`],
      })),
      (t[68] = R),
      (t[69] = z),
      (t[70] = B),
      (t[71] = V))
    : (V = t[71]);
  let H;
  t[72] !== L || t[73] !== V
    ? ((H = (0, g.jsxs)(`div`, {
        className: `mt-3 flex flex-col gap-2 pb-4 sm:flex-row`,
        children: [L, V],
      })),
      (t[72] = L),
      (t[73] = V),
      (t[74] = H))
    : (H = t[74]);
  let U;
  t[75] !== I || t[76] !== H
    ? ((U = (0, g.jsx)(m, {
        title: `API key`,
        description: `Stored only by the selected T3 Code server. The app uses it to mint short-lived browser credentials.`,
        status: I,
        children: H,
      })),
      (t[75] = I),
      (t[76] = H),
      (t[77] = U))
    : (U = t[77]);
  let W;
  t[78] === Bt ? (W = t[79]) : ((W = () => void Bt()), (t[78] = Bt), (t[79] = W));
  let tn = !n || !y || b !== null,
    G;
  t[80] === b
    ? (G = t[81])
    : ((G =
        b === `test`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(ne, { className: `size-3.5` })),
      (t[80] = b),
      (t[81] = G));
  let K;
  t[82] !== W || t[83] !== tn || t[84] !== G
    ? ((K = (0, g.jsxs)(i, {
        size: `sm`,
        variant: `outline`,
        onClick: W,
        disabled: tn,
        children: [G, `Test`],
      })),
      (t[82] = W),
      (t[83] = tn),
      (t[84] = G),
      (t[85] = K))
    : (K = t[85]);
  let q;
  t[86] === Ht ? (q = t[87]) : ((q = () => void Ht()), (t[86] = Ht), (t[87] = q));
  let nn = !n || !y || b !== null,
    J;
  t[88] === b
    ? (J = t[89])
    : ((J =
        b === `remove`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(se, { className: `size-3.5` })),
      (t[88] = b),
      (t[89] = J));
  let Y;
  t[90] !== q || t[91] !== nn || t[92] !== J
    ? ((Y = (0, g.jsxs)(i, {
        size: `sm`,
        variant: `ghost-destructive`,
        onClick: q,
        disabled: nn,
        children: [J, `Remove`],
      })),
      (t[90] = q),
      (t[91] = nn),
      (t[92] = J),
      (t[93] = Y))
    : (Y = t[93]);
  let X;
  t[94] !== K || t[95] !== Y
    ? ((X = (0, g.jsxs)(`div`, { className: `flex gap-2`, children: [K, Y] })),
      (t[94] = K),
      (t[95] = Y),
      (t[96] = X))
    : (X = t[96]);
  let Z;
  t[97] !== xt || t[98] !== X
    ? ((Z = (0, g.jsx)(m, {
        title: `Connection`,
        description: `Validate the saved key by requesting a short-lived OpenAI Realtime client secret.`,
        status: xt,
        control: X,
      })),
      (t[97] = xt),
      (t[98] = X),
      (t[99] = Z))
    : (Z = t[99]);
  let Q;
  t[100] !== U || t[101] !== Z
    ? ((Q = (0, g.jsxs)(Me, { title: `OpenAI Realtime`, icon: Xt, children: [U, Z] })),
      (t[100] = U),
      (t[101] = Z),
      (t[102] = Q))
    : (Q = t[102]);
  let rn;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rn = (0, g.jsx)(re, { className: `size-3.5` })), (t[103] = rn))
    : (rn = t[103]);
  let an = w ? `text-success-foreground dark:text-success-foreground` : void 0,
    on = w ? `Configured` : `Not configured`,
    sn;
  t[104] !== an || t[105] !== on
    ? ((sn = (0, g.jsx)(`span`, { className: an, children: on })),
      (t[104] = an),
      (t[105] = on),
      (t[106] = sn))
    : (sn = t[106]);
  let cn;
  t[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((cn = (e) => St(e.currentTarget.value)), (t[107] = cn))
    : (cn = t[107]);
  let ln = w ? `Enter a replacement Parallel API key` : `Parallel API key`,
    un;
  t[108] !== C || t[109] !== ln
    ? ((un = (0, g.jsx)(le, {
        nativeInput: !0,
        type: `password`,
        autoComplete: `off`,
        value: C,
        onChange: cn,
        placeholder: ln,
        "aria-label": `Parallel API key`,
      })),
      (t[108] = C),
      (t[109] = ln),
      (t[110] = un))
    : (un = t[110]);
  let dn;
  t[111] === Wt ? (dn = t[112]) : ((dn = () => void Wt()), (t[111] = Wt), (t[112] = dn));
  let fn;
  t[113] !== n || t[114] !== C || t[115] !== T
    ? ((fn = !n || C.trim().length === 0 || T !== null),
      (t[113] = n),
      (t[114] = C),
      (t[115] = T),
      (t[116] = fn))
    : (fn = t[116]);
  let pn;
  t[117] === T
    ? (pn = t[118])
    : ((pn =
        T === `save`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(ae, { className: `size-3.5` })),
      (t[117] = T),
      (t[118] = pn));
  let mn;
  t[119] !== dn || t[120] !== fn || t[121] !== pn
    ? ((mn = (0, g.jsxs)(i, {
        className: `shrink-0`,
        size: `sm`,
        onClick: dn,
        disabled: fn,
        children: [pn, `Save key`],
      })),
      (t[119] = dn),
      (t[120] = fn),
      (t[121] = pn),
      (t[122] = mn))
    : (mn = t[122]);
  let hn;
  t[123] !== un || t[124] !== mn
    ? ((hn = (0, g.jsxs)(`div`, {
        className: `mt-3 flex flex-col gap-2 pb-4 sm:flex-row`,
        children: [un, mn],
      })),
      (t[123] = un),
      (t[124] = mn),
      (t[125] = hn))
    : (hn = t[125]);
  let gn;
  t[126] !== sn || t[127] !== hn
    ? ((gn = (0, g.jsx)(m, {
        title: `API key`,
        description: `Stored only by the selected T3 Code server. The voice agent uses Parallel Search and Extract through server-side tools.`,
        status: sn,
        children: hn,
      })),
      (t[126] = sn),
      (t[127] = hn),
      (t[128] = gn))
    : (gn = t[128]);
  let _n;
  t[129] === Kt ? (_n = t[130]) : ((_n = () => void Kt()), (t[129] = Kt), (t[130] = _n));
  let vn = !n || !w || T !== null,
    yn;
  t[131] === T
    ? (yn = t[132])
    : ((yn =
        T === `test`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(ne, { className: `size-3.5` })),
      (t[131] = T),
      (t[132] = yn));
  let bn;
  t[133] !== _n || t[134] !== vn || t[135] !== yn
    ? ((bn = (0, g.jsxs)(i, {
        size: `sm`,
        variant: `outline`,
        onClick: _n,
        disabled: vn,
        children: [yn, `Test`],
      })),
      (t[133] = _n),
      (t[134] = vn),
      (t[135] = yn),
      (t[136] = bn))
    : (bn = t[136]);
  let xn;
  t[137] === Jt ? (xn = t[138]) : ((xn = () => void Jt()), (t[137] = Jt), (t[138] = xn));
  let Sn = !n || !w || T !== null,
    Cn;
  t[139] === T
    ? (Cn = t[140])
    : ((Cn =
        T === `remove`
          ? (0, g.jsx)(r, { className: `size-3.5 animate-spin motion-reduce:animate-none` })
          : (0, g.jsx)(se, { className: `size-3.5` })),
      (t[139] = T),
      (t[140] = Cn));
  let wn;
  t[141] !== xn || t[142] !== Sn || t[143] !== Cn
    ? ((wn = (0, g.jsxs)(i, {
        size: `sm`,
        variant: `ghost-destructive`,
        onClick: xn,
        disabled: Sn,
        children: [Cn, `Remove`],
      })),
      (t[141] = xn),
      (t[142] = Sn),
      (t[143] = Cn),
      (t[144] = wn))
    : (wn = t[144]);
  let Tn;
  t[145] !== bn || t[146] !== wn
    ? ((Tn = (0, g.jsxs)(`div`, { className: `flex gap-2`, children: [bn, wn] })),
      (t[145] = bn),
      (t[146] = wn),
      (t[147] = Tn))
    : (Tn = t[147]);
  let En;
  t[148] !== wt || t[149] !== Tn
    ? ((En = (0, g.jsx)(m, {
        title: `Search and Extract`,
        description: `Validate the saved key with a small live Search request. Extract is used only when ranked search excerpts are insufficient.`,
        status: wt,
        control: Tn,
      })),
      (t[148] = wt),
      (t[149] = Tn),
      (t[150] = En))
    : (En = t[150]);
  let Dn;
  t[151] !== gn || t[152] !== En
    ? ((Dn = (0, g.jsxs)(Me, { title: `Parallel Web`, icon: rn, children: [gn, En] })),
      (t[151] = gn),
      (t[152] = En),
      (t[153] = Dn))
    : (Dn = t[153]);
  let On;
  t[154] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((On = (0, g.jsx)(te, { className: `size-3.5` })), (t[154] = On))
    : (On = t[154]);
  let kn;
  t[155] === Et
    ? (kn = t[156])
    : ((kn = (e) => {
        Se(e) && Et(e);
      }),
      (t[155] = Et),
      (t[156] = kn));
  let An;
  t[157] === k
    ? (An = t[158])
    : ((An = Ee.find((e) => e.value === k)?.label), (t[157] = k), (t[158] = An));
  let jn;
  t[159] === An
    ? (jn = t[160])
    : ((jn = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `Realtime model`,
        children: (0, g.jsx)(s, { children: An }),
      })),
      (t[159] = An),
      (t[160] = jn));
  let Mn;
  t[161] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mn = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: Ee.map(Ve) })),
      (t[161] = Mn))
    : (Mn = t[161]);
  let Nn;
  t[162] !== kn || t[163] !== jn || t[164] !== k
    ? ((Nn = (0, g.jsx)(m, {
        title: `Model`,
        description: `Mini is the recommended default for conversational speed and cost. The full model is stronger for difficult explanations and tool decisions. Changes apply to the next session.`,
        control: (0, g.jsxs)(l, { value: k, onValueChange: kn, children: [jn, Mn] }),
      })),
      (t[162] = kn),
      (t[163] = jn),
      (t[164] = k),
      (t[165] = Nn))
    : (Nn = t[165]);
  let Pn;
  t[166] === Dt
    ? (Pn = t[167])
    : ((Pn = (e) => {
        _e(e) && Dt(e);
      }),
      (t[166] = Dt),
      (t[167] = Pn));
  let Fn;
  t[168] === A
    ? (Fn = t[169])
    : ((Fn = me.find((e) => e.value === A)?.label), (t[168] = A), (t[169] = Fn));
  let In;
  t[170] === Fn
    ? (In = t[171])
    : ((In = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `OpenAI voice`,
        children: (0, g.jsx)(s, { children: Fn }),
      })),
      (t[170] = Fn),
      (t[171] = In));
  let Ln;
  t[172] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ln = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: me.map(Be) })),
      (t[172] = Ln))
    : (Ln = t[172]);
  let Rn;
  t[173] !== Pn || t[174] !== In || t[175] !== A
    ? ((Rn = (0, g.jsx)(m, {
        title: `Voice`,
        description: `Choose the generated voice. OpenAI recommends Marin or Cedar. The voice is fixed after a session first speaks.`,
        control: (0, g.jsxs)(l, { value: A, onValueChange: Pn, children: [In, Ln] }),
      })),
      (t[173] = Pn),
      (t[174] = In),
      (t[175] = A),
      (t[176] = Rn))
    : (Rn = t[176]);
  let zn, Bn, Vn;
  t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zn = he.toFixed(2)),
      (Bn = (1).toFixed(1)),
      (Vn = De.toFixed(1)),
      (t[177] = zn),
      (t[178] = Bn),
      (t[179] = Vn))
    : ((zn = t[177]), (Bn = t[178]), (Vn = t[179]));
  let Hn;
  t[180] === j ? (Hn = t[181]) : ((Hn = j.toFixed(2)), (t[180] = j), (t[181] = Hn));
  let Un = `${Hn} times speed`,
    Wn;
  t[182] === Ot
    ? (Wn = t[183])
    : ((Wn = (e) => Ot(e.currentTarget.valueAsNumber)), (t[182] = Ot), (t[183] = Wn));
  let Gn;
  t[184] !== Un || t[185] !== Wn || t[186] !== j
    ? ((Gn = (0, g.jsx)(`input`, {
        id: `voice-speech-pace`,
        className: `h-5 min-w-0 flex-1 cursor-pointer accent-primary`,
        type: `range`,
        min: he,
        max: De,
        step: xe,
        value: j,
        "aria-label": `OpenAI speech pace`,
        "aria-valuetext": Un,
        onChange: Wn,
      })),
      (t[184] = Un),
      (t[185] = Wn),
      (t[186] = j),
      (t[187] = Gn))
    : (Gn = t[187]);
  let Kn;
  t[188] === j ? (Kn = t[189]) : ((Kn = j.toFixed(2)), (t[188] = j), (t[189] = Kn));
  let qn;
  t[190] === Kn
    ? (qn = t[191])
    : ((qn = (0, g.jsxs)(`output`, {
        htmlFor: `voice-speech-pace`,
        className: `w-11 shrink-0 text-right font-mono text-xs font-medium tabular-nums`,
        children: [Kn, `×`],
      })),
      (t[190] = Kn),
      (t[191] = qn));
  let Jn;
  t[192] !== Gn || t[193] !== qn
    ? ((Jn = (0, g.jsx)(m, {
        title: `Speech pace`,
        description: `Adjust OpenAI's post-processing playback speed. Changes are applied between model turns.`,
        status: `${zn}× minimum · ${Bn}× recommended · ${Vn}× maximum`,
        control: (0, g.jsxs)(`div`, {
          className: `flex w-full items-center gap-3 sm:w-64`,
          children: [Gn, qn],
        }),
      })),
      (t[192] = Gn),
      (t[193] = qn),
      (t[194] = Jn))
    : (Jn = t[194]);
  let Yn;
  t[195] === kt
    ? (Yn = t[196])
    : ((Yn = (e) => {
        ge(e) && kt(e);
      }),
      (t[195] = kt),
      (t[196] = Yn));
  let Xn;
  t[197] === M ? (Xn = t[198]) : ((Xn = Ae(M)), (t[197] = M), (t[198] = Xn));
  let Zn;
  t[199] === Xn
    ? (Zn = t[200])
    : ((Zn = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `Input transcription language`,
        children: (0, g.jsx)(s, { children: Xn }),
      })),
      (t[199] = Xn),
      (t[200] = Zn));
  let Qn;
  t[201] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qn = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: Ce.map(ze) })),
      (t[201] = Qn))
    : (Qn = t[201]);
  let $n;
  t[202] !== Yn || t[203] !== Zn || t[204] !== M
    ? (($n = (0, g.jsx)(m, {
        title: `Input language`,
        description: `Optionally bias input transcription with an ISO-639-1 language code. Auto is recommended for multilingual conversations and does not restrict the language OpenAI speaks.`,
        control: (0, g.jsxs)(l, { value: M, onValueChange: Yn, children: [Zn, Qn] }),
      })),
      (t[202] = Yn),
      (t[203] = Zn),
      (t[204] = M),
      (t[205] = $n))
    : ($n = t[205]);
  let er;
  t[206] === At
    ? (er = t[207])
    : ((er = (e) => {
        ye(e) && At(e);
      }),
      (t[206] = At),
      (t[207] = er));
  let $;
  t[208] === N
    ? ($ = t[209])
    : (($ = we.find((e) => e.value === N)?.label), (t[208] = N), (t[209] = $));
  let tr;
  t[210] === $
    ? (tr = t[211])
    : ((tr = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `Reasoning effort`,
        children: (0, g.jsx)(s, { children: $ }),
      })),
      (t[210] = $),
      (t[211] = tr));
  let nr;
  t[212] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nr = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: we.map(Re) })),
      (t[212] = nr))
    : (nr = t[212]);
  let rr;
  t[213] !== N || t[214] !== er || t[215] !== tr
    ? ((rr = (0, g.jsx)(m, {
        title: `Reasoning effort`,
        description: `Controls the latency and depth tradeoff. OpenAI recommends Low for most production voice agents.`,
        control: (0, g.jsxs)(l, { value: N, onValueChange: er, children: [tr, nr] }),
      })),
      (t[213] = N),
      (t[214] = er),
      (t[215] = tr),
      (t[216] = rr))
    : (rr = t[216]);
  let ir;
  t[217] === jt
    ? (ir = t[218])
    : ((ir = (e) => {
        ve(e) && jt(e);
      }),
      (t[217] = jt),
      (t[218] = ir));
  let ar;
  t[219] === P
    ? (ar = t[220])
    : ((ar = ke.find((e) => e.value === P)?.label), (t[219] = P), (t[220] = ar));
  let or;
  t[221] === ar
    ? (or = t[222])
    : ((or = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `Turn-taking eagerness`,
        children: (0, g.jsx)(s, { children: ar }),
      })),
      (t[221] = ar),
      (t[222] = or));
  let sr;
  t[223] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((sr = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: ke.map(Le) })),
      (t[223] = sr))
    : (sr = t[223]);
  let cr;
  t[224] !== ir || t[225] !== or || t[226] !== P
    ? ((cr = (0, g.jsx)(m, {
        title: `Turn taking`,
        description: `Semantic VAD waits for the meaning of your sentence, not only a fixed silence. Patient waits longer; Quick responds sooner.`,
        control: (0, g.jsxs)(l, { value: P, onValueChange: ir, children: [or, sr] }),
      })),
      (t[224] = ir),
      (t[225] = or),
      (t[226] = P),
      (t[227] = cr))
    : (cr = t[227]);
  let lr;
  t[228] === Mt
    ? (lr = t[229])
    : ((lr = (e) => {
        Te(e) && Mt(e);
      }),
      (t[228] = Mt),
      (t[229] = lr));
  let ur;
  t[230] === F
    ? (ur = t[231])
    : ((ur = be.find((e) => e.value === F)?.label), (t[230] = F), (t[231] = ur));
  let dr;
  t[232] === ur
    ? (dr = t[233])
    : ((dr = (0, g.jsx)(fe, {
        className: `w-full sm:w-72`,
        "aria-label": `Microphone noise profile`,
        children: (0, g.jsx)(s, { children: ur }),
      })),
      (t[232] = ur),
      (t[233] = dr));
  let fr;
  t[234] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fr = (0, g.jsx)(c, { align: `end`, alignItemWithTrigger: !1, children: be.map(Ie) })),
      (t[234] = fr))
    : (fr = t[234]);
  let pr;
  t[235] !== F || t[236] !== lr || t[237] !== dr
    ? ((pr = (0, g.jsx)(m, {
        title: `Microphone profile`,
        description: `OpenAI filters audio before turn detection and model input. Choose the profile matching the microphone distance.`,
        control: (0, g.jsxs)(l, { value: F, onValueChange: lr, children: [dr, fr] }),
      })),
      (t[235] = F),
      (t[236] = lr),
      (t[237] = dr),
      (t[238] = pr))
    : (pr = t[238]);
  let mr;
  t[239] !== rr ||
  t[240] !== cr ||
  t[241] !== pr ||
  t[242] !== Nn ||
  t[243] !== Rn ||
  t[244] !== Jn ||
  t[245] !== $n
    ? ((mr = (0, g.jsxs)(Me, {
        title: `Voice preferences`,
        icon: On,
        children: [Nn, Rn, Jn, $n, rr, cr, pr],
      })),
      (t[239] = rr),
      (t[240] = cr),
      (t[241] = pr),
      (t[242] = Nn),
      (t[243] = Rn),
      (t[244] = Jn),
      (t[245] = $n),
      (t[246] = mr))
    : (mr = t[246]);
  let hr;
  t[247] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((hr = (0, g.jsxs)(Me, {
        title: `Behavior`,
        children: [
          (0, g.jsx)(m, {
            title: `One global session`,
            description: `Voice stays active while you move between tasks or other applications. Starting voice elsewhere reopens the existing session instead of creating another one.`,
          }),
          (0, g.jsx)(m, {
            title: `Context and composer access`,
            description: `The latest AI message is shared initially. OpenAI can page older messages from that task, search and extract web sources through Parallel, and edit unsent composer text, but it cannot send prompts.`,
          }),
        ],
      })),
      (t[247] = hr))
    : (hr = t[247]);
  let gr;
  t[248] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gr = (0, g.jsx)(ie, { className: `size-3.5` })), (t[248] = gr))
    : (gr = t[248]);
  let _r;
  t[249] !== Tt || t[250] !== O.length
    ? ((_r =
        O.length > 0
          ? (0, g.jsx)(i, { size: `xs`, variant: `ghost`, onClick: Tt, children: `Clear history` })
          : null),
      (t[249] = Tt),
      (t[250] = O.length),
      (t[251] = _r))
    : (_r = t[251]);
  let vr;
  t[252] === O
    ? (vr = t[253])
    : ((vr =
        O.length === 0
          ? (0, g.jsx)(`div`, {
              className: `px-5 py-8 text-center text-xs text-muted-foreground`,
              children: `Completed conversations and tool traces will appear here.`,
            })
          : O.map(Fe)),
      (t[252] = O),
      (t[253] = vr));
  let yr;
  t[254] !== _r || t[255] !== vr
    ? ((yr = (0, g.jsx)(Me, {
        title: `Conversation history`,
        icon: gr,
        headerAction: _r,
        children: vr,
      })),
      (t[254] = _r),
      (t[255] = vr),
      (t[256] = yr))
    : (yr = t[256]);
  let br;
  return (
    t[257] !== mr || t[258] !== yr || t[259] !== Q || t[260] !== Dn
      ? ((br = (0, g.jsxs)(je, { children: [Yt, Q, Dn, mr, hr, yr] })),
        (t[257] = mr),
        (t[258] = yr),
        (t[259] = Q),
        (t[260] = Dn),
        (t[261] = br))
      : (br = t[261]),
    br
  );
}
function Fe(e) {
  return (0, g.jsxs)(
    `details`,
    {
      className: `group border-t border-border/60 first:border-t-0`,
      children: [
        (0, g.jsxs)(`summary`, {
          className: `flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 marker:hidden sm:px-5`,
          children: [
            (0, g.jsx)(`span`, {
              className:
                e.status === `error`
                  ? `size-2 rounded-full bg-destructive`
                  : e.status === `active`
                    ? `size-2 rounded-full bg-success`
                    : `size-2 rounded-full bg-muted-foreground/45`,
            }),
            (0, g.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-xs font-medium`,
              children: e.title,
            }),
            (0, g.jsx)(`time`, {
              className: `shrink-0 text-2xs text-muted-foreground`,
              children: new Date(e.startedAt).toLocaleString(),
            }),
          ],
        }),
        (0, g.jsx)(`div`, {
          className: `border-t border-border/50`,
          children: (0, g.jsx)(p, { entries: e.entries, className: `max-h-80` }),
        }),
      ],
    },
    e.id,
  );
}
function Ie(e) {
  return (0, g.jsx)(o, { value: e.value, children: e.label }, e.value);
}
function Le(e) {
  return (0, g.jsx)(o, { value: e.value, children: e.label }, e.value);
}
function Re(e) {
  return (0, g.jsx)(o, { value: e.value, children: e.label }, e.value);
}
function ze(e) {
  return (0, g.jsx)(o, { value: e.value, children: e.label }, e.value);
}
function Be(e) {
  return (0, g.jsx)(o, { value: e.value, children: e.label }, e.value);
}
function Ve(e) {
  return (0, g.jsx)(
    o,
    {
      value: e.value,
      children: (0, g.jsxs)(`div`, {
        children: [
          (0, g.jsx)(`div`, { children: e.label }),
          (0, g.jsx)(`div`, {
            className: `text-2xs text-muted-foreground`,
            children: e.description,
          }),
        ],
      }),
    },
    e.value,
  );
}
function He(e) {
  return e.setNoiseReduction;
}
function Ue(e) {
  return e.setTurnEagerness;
}
function We(e) {
  return e.setReasoningEffort;
}
function Ge(e) {
  return e.setLanguage;
}
function Ke(e) {
  return e.setSpeed;
}
function qe(e) {
  return e.setVoice;
}
function Je(e) {
  return e.setModel;
}
function Ye(e) {
  return e.noiseReduction;
}
function Xe(e) {
  return e.turnEagerness;
}
function Ze(e) {
  return e.reasoningEffort;
}
function Qe(e) {
  return e.language;
}
function $e(e) {
  return e.speed;
}
function et(e) {
  return e.voice;
}
function tt(e) {
  return e.model;
}
function nt(e) {
  return e.clearHistory;
}
function rt(e) {
  return e.sessions;
}
function it() {
  let e = (0, Ne.c)(3),
    t = pe();
  if (!t) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, g.jsx)(je, {
            children: (0, g.jsx)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: `Connecting to the primary environment…`,
            }),
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  return (
    e[1] === t.environmentId
      ? (n = e[2])
      : ((n = (0, g.jsx)(Pe, { environmentId: t.environmentId })),
        (e[1] = t.environmentId),
        (e[2] = n)),
    n
  );
}
function at() {
  let e = (0, Ne.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsx)(it, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { at as component };
//# sourceMappingURL=settings.voice-D_fjkz7e.js.map
