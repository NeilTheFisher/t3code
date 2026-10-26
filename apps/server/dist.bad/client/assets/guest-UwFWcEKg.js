import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { t as i } from "./arrow-up-C4Pl9k3l.js";
import { t as a } from "./paperclip-BKjZQ1dX.js";
import { t as o } from "./x-Blp0Exqg.js";
import {
  Bo as s,
  Dr as c,
  Dv as l,
  G_ as u,
  Hy as d,
  Ib as f,
  JC as p,
  Lf as m,
  Lo as h,
  Q_ as g,
  Rl as _,
  Ro as v,
  Tv as y,
  Vy as b,
  ZC as x,
  _r as S,
  ay as C,
  bC as w,
  cg as T,
  dS as E,
  eb as D,
  ew as O,
  ey as k,
  fy as A,
  gn as j,
  hb as M,
  hv as N,
  iS as P,
  ib as F,
  iy as ee,
  jS as I,
  lg as L,
  mn as R,
  ny as z,
  oy as B,
  sy as V,
  t as H,
  tb as U,
  tm as W,
  ty as G,
  wv as K,
  xy as te,
  yy as ne,
  zf as re,
} from "./utils-CPoejuy5.js";
import { Dt as ie, Ot as ae, at as oe } from "./runtime-CY2dlMEg.js";
import { K as se } from "./useSettings-N-JG2LFZ.js";
import { N as ce, n as le, r as ue, t as de } from "./useTimelineFollow-a8NU2yzT.js";
import { t as fe } from "./useStableCallback-XvXMCrxI.js";
import { d as pe, f as me } from "./queries-B4W1CgUo.js";
import { t as he } from "./observeResize-SVLLrLKP.js";
import { v as ge } from "./contextPresentationRegistry-bLqqn4rn.js";
import { n as _e } from "./textDirection-fZMxgoU7.js";
import { d as q, i as J, l as Y, m as ve, o as X, u as ye } from "./htmlRender-CPzSv8Q7.js";
import { c as be, r as xe } from "./session-logic-BpDG__2x.js";
import { Dr as Se, Er as Ce, Or as we, li as Te, ui as Ee, xi as De } from "./main-BZa0O6xN.js";
var Z = n(),
  Q = e(t(), 1),
  $ = e(r(), 1);
function Oe(e) {
  let t = (0, Z.c)(23),
    { itemId: n, reference: r, shareId: i } = e,
    a = ge(),
    o = (0, Q.useRef)(null),
    s = (0, Q.useRef)(null),
    [c, l] = (0, Q.useState)(728),
    [u, d] = (0, Q.useState)(),
    f;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((f = () => `${C}?${V}=${encodeURIComponent(i)}&item=${encodeURIComponent(n)}${Y(a)}`),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = f))
    : (f = t[3]);
  let [p] = (0, Q.useState)(f),
    m,
    h;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        let e = o.current;
        if (e)
          return (
            l(e.clientWidth),
            he(e, (e) => {
              let [t] = e;
              t && l(t.contentRect.width);
            })
          );
      }),
      (h = []),
      (t[4] = m),
      (t[5] = h))
    : ((m = t[4]), (h = t[5])),
    (0, Q.useLayoutEffect)(m, h));
  let g, _;
  (t[6] === a
    ? ((g = t[7]), (_ = t[8]))
    : ((g = () => {
        s.current?.contentWindow?.postMessage(ye(a), `*`);
      }),
      (_ = [a]),
      (t[6] = a),
      (t[7] = g),
      (t[8] = _)),
    (0, Q.useEffect)(g, _));
  let v, y;
  (t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        let e = (e) => {
          let t = s.current;
          if (t === null || e.source !== t.contentWindow) return;
          let n = q(e.data);
          if (n !== void 0) {
            d(n);
            return;
          }
          let r = ve(e.data);
          r !== void 0 &&
            document.activeElement === t &&
            navigator.userActivation?.isActive !== !1 &&
            (window.open(r.url, `_blank`, `noopener,noreferrer`),
            t.contentWindow?.postMessage(X(r.id), `*`));
        };
        return (
          window.addEventListener(`message`, e), () => window.removeEventListener(`message`, e)
        );
      }),
      (y = []),
      (t[9] = v),
      (t[10] = y))
    : ((v = t[9]), (y = t[10])),
    (0, Q.useEffect)(v, y));
  let b;
  t[11] !== u || t[12] !== r || t[13] !== c
    ? ((b = J(r, c, u)), (t[11] = u), (t[12] = r), (t[13] = c), (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === b ? (x = t[16]) : ((x = { height: b }), (t[15] = b), (t[16] = x));
  let S;
  t[17] !== r.title || t[18] !== p
    ? ((S = (0, $.jsx)(`iframe`, {
        ref: s,
        src: p,
        title: r.title,
        sandbox: `allow-scripts allow-forms allow-popups allow-downloads`,
        className: `block size-full rounded-lg border border-border`,
      })),
      (t[17] = r.title),
      (t[18] = p),
      (t[19] = S))
    : (S = t[19]);
  let w;
  return (
    t[20] !== S || t[21] !== x
      ? ((w = (0, $.jsx)(`div`, { ref: o, style: x, children: S })),
        (t[20] = S),
        (t[21] = x),
        (t[22] = w))
      : (w = t[22]),
    w
  );
}
var ke = {
    view: null,
    projection: null,
    sequence: 0,
    partial: null,
    ended: !1,
    awaitingRowIds: new Set(),
  },
  Ae = (e) => (e.type === `user_message` ? e.context?.guest?.guestMessageId : void 0);
function je(e, t) {
  let n = t.messages.filter((e) => e.status === `pending`);
  return n.every((t) => e.has(t.id)) ? e : new Set([...e, ...n.map((e) => e.id)]);
}
function Me(e, t) {
  let n = t.flatMap((t) => {
    let n = Ae(t);
    return n !== void 0 && e.has(n) ? [n] : [];
  });
  if (n.length === 0) return e;
  let r = new Set(e);
  for (let e of n) r.delete(e);
  return r;
}
var Ne = D(F(M(W))),
  Pe = (e) => p(Ne(e));
function Fe(e, t) {
  switch (t.type) {
    case `view`:
      return e.view !== null && e.view.shareId !== t.view.shareId
        ? { ...e, ended: !0 }
        : { ...e, view: t.view, awaitingRowIds: je(e.awaitingRowIds, t.view) };
    case `thread`: {
      let n = t.item;
      if (n.kind === `snapshot`) {
        let t = ae(n);
        return {
          ...e,
          projection: t,
          sequence: n.snapshotSequence,
          partial:
            n.hasMoreHistory === !0 || (n.historyCursor ?? null) !== null
              ? { latestLocalTurnOrdinal: n.latestLocalTurnOrdinal ?? null }
              : null,
          awaitingRowIds: Me(
            e.awaitingRowIds,
            t.visibleTurnItems.map((e) => e.item),
          ),
        };
      }
      if (n.kind === `synchronized` || n.sequence <= e.sequence) return e;
      if (n.kind === `unknown-event`) return { ...e, sequence: n.sequence };
      let r =
          ie(
            e.projection,
            n.event,
            e.partial === null ? void 0 : { partialTimeline: !0, ...e.partial },
          ) ?? e.projection,
        i = n.event.type === `turn-item.updated` ? n.event.payload : null,
        a = e.partial?.latestLocalTurnOrdinal ?? null;
      return {
        ...e,
        projection: r,
        sequence: n.sequence,
        partial:
          e.partial !== null && i !== null && (a === null || i.ordinal > a)
            ? { latestLocalTurnOrdinal: i.ordinal }
            : e.partial,
        awaitingRowIds: i === null ? e.awaitingRowIds : Me(e.awaitingRowIds, [i]),
      };
    }
    case `ended`:
      return { ...e, ended: !0 };
  }
}
function Ie(e, t, n) {
  let r = new Set(t.flatMap((e) => Ae(e.item) ?? []));
  return e
    .filter((e) => !r.has(e.id) && (e.status === `pending` || n.has(e.id)))
    .toSorted((e, t) => e.submittedAt.localeCompare(t.submittedAt));
}
function Le(e, t) {
  let n = Math.floor((Date.parse(e) - t) / 6e4);
  return n <= 0 ? `Expired` : n >= 60 ? `${Math.floor(n / 60)}h left` : `${n}m left`;
}
function Re(e) {
  let [t, n] = e.split(`.`);
  return t && n ? t : null;
}
var ze = (e, t) => `${k}?${V}=${encodeURIComponent(e)}&id=${encodeURIComponent(t)}`;
function Be(e) {
  return e.length > 4
    ? `Attach up to 4 files to a message.`
    : e.reduce((e, t) => e + t.size, 0) > 10485760
      ? `Attached files can total up to 10 MB per message.`
      : e.some((e) => e.size === 0 || (e.type.toLowerCase().startsWith(`image/`) && !A(e.type)))
        ? `This file cannot be attached. Images must be PNG, JPEG, GIF, or WebP.`
        : null;
}
function Ve(e) {
  let t = null,
    n = new Map();
  return (r) => (
    r === t ||
      ((t = r),
      (n = new Map(
        r.flatMap(({ item: t }) =>
          t.type === `user_message` ? t.attachments.map((t) => [t.id, ze(e, t.id)]) : [],
        ),
      ))),
    n
  );
}
var He = class extends w(`GuestItemReadError`) {},
  Ue = U(M(L)),
  We = D(F(T)),
  Ge = (e, t, n) => `${e}?${V}=${encodeURIComponent(t)}&item=${encodeURIComponent(n)}`;
async function Ke(e, t) {
  let n = await fetch(Ge(z, e, t));
  if (n.status === 403) return { item: null };
  if (!n.ok) throw Error(`Guest item request failed with ${n.status}.`);
  return Ue(await n.json());
}
var qe = m((e) => {
    let [t, n] = JSON.parse(e);
    return re(
      E({ try: () => Ke(t, n), catch: () => new He({ message: `Could not load this item.` }) }),
    );
  }),
  Je = m((e) => {
    let [t, n] = JSON.parse(e),
      r = u((e) =>
        f(
          P(() => {
            let r = new EventSource(Ge(G, t, n));
            return (
              r.addEventListener(`message`, (t) => {
                let n = We(t.data);
                x(n) || (l(e, n.value), n.value.running || (r.close(), K(e)));
              }),
              r.addEventListener(`error`, () => {
                r.readyState === EventSource.CLOSED &&
                  y(e, I(new He({ message: `Output is no longer available.` })));
              }),
              r
            );
          }),
          (e) => P(() => e.close()),
        ),
      );
    return re(
      r.pipe(
        N(() => pe, me),
        g((e) => e !== pe),
      ),
    );
  }),
  Ye = (e) => ({
    detail: ({ itemId: t, revision: n }) => qe(JSON.stringify([e, t, n])),
    commandOutput: ({ itemId: t }) => Je(JSON.stringify([e, t])),
  }),
  Xe = null,
  Ze = `t3:guest-awaiting-rows`;
function Qe() {
  try {
    let e = JSON.parse(sessionStorage.getItem(Ze) ?? `[]`);
    return new Set(
      Array.isArray(e) ? e.filter((e) => typeof e == `string`).map((e) => te.make(e)) : [],
    );
  } catch {
    return new Set();
  }
}
function $e(e) {
  try {
    sessionStorage.setItem(Ze, JSON.stringify([...e].slice(-50)));
  } catch {}
}
function et() {
  if (Xe === null) {
    let e = ``;
    try {
      e = decodeURIComponent(window.location.hash.slice(1)).trim();
    } catch {}
    let t = e === `` ? new URLSearchParams(window.location.search).get(V) : Re(e);
    (window.history.replaceState(
      window.history.state,
      ``,
      t === null
        ? window.location.pathname
        : `${window.location.pathname}?${V}=${encodeURIComponent(t)}`,
    ),
      (Xe = { credential: e === `` ? null : e, shareId: t }));
  }
  return Xe;
}
var tt = D(d({ message: b }));
async function nt(e, t) {
  try {
    let n = await fetch(
      `${B}/${e}`,
      t instanceof FormData
        ? { method: `POST`, body: t }
        : {
            method: `POST`,
            headers: { "content-type": `application/json` },
            body: JSON.stringify(t),
          },
    );
    if (n.ok) return null;
    let r = await n.json().catch(() => null);
    return O(tt(r), {
      onNone: () => `Something went wrong. Try again.`,
      onSome: ({ message: e }) => e,
    });
  } catch {
    return `Could not reach the server.`;
  }
}
var rt = { pending: `Waiting for approval`, sent: `Sent`, dismissed: `Not sent` },
  it = `chat-content-lane px-4`;
function at() {
  let e = (0, Z.c)(9),
    [t] = (0, Q.useState)(et),
    { credential: n, shareId: r } = t,
    [i, a] = (0, Q.useState)(r === null ? `none` : `checking`),
    o,
    s;
  (e[0] !== n || e[1] !== r
    ? ((o = () => {
        if (r === null) return;
        let e = !0;
        return (
          fetch(`${B}/session?${V}=${encodeURIComponent(r)}`)
            .then(
              (e) => (e.ok ? `session` : n === null ? `none` : `name`),
              () => (n === null ? `session` : `name`),
            )
            .then((t) => {
              e && a(t);
            }),
          () => {
            e = !1;
          }
        );
      }),
      (s = [n, r]),
      (e[0] = n),
      (e[1] = r),
      (e[2] = o),
      (e[3] = s))
    : ((o = e[2]), (s = e[3])),
    (0, Q.useEffect)(o, s));
  let c;
  (e[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (e[4] = c)) : (c = e[4]),
    (0, Q.useEffect)(ot, c));
  let l;
  return (
    e[5] !== i || e[6] !== n || e[7] !== r
      ? ((l = (0, $.jsx)(`div`, {
          className: `flex h-dvh flex-col bg-background text-foreground`,
          children:
            i === `checking`
              ? (0, $.jsx)(ut, { title: `Connecting...` })
              : i === `name` && n !== null
                ? (0, $.jsx)(dt, {
                    credential: n,
                    onJoined: () => {
                      ((Xe = { credential: null, shareId: r }), a(`session`));
                    },
                  })
                : i === `session` && r !== null
                  ? (0, $.jsx)(ct, { shareId: r })
                  : (0, $.jsx)(ut, {
                      title: `This link has ended or is not valid`,
                      detail: `Ask the owner for a new link. Each link works in one browser.`,
                    }),
        })),
        (e[5] = i),
        (e[6] = n),
        (e[7] = r),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
function ot() {
  let e = st;
  return (
    window.addEventListener(`hashchange`, e), () => window.removeEventListener(`hashchange`, e)
  );
}
function st() {
  window.location.hash !== `` && window.location.reload();
}
function ct(e) {
  let t = (0, Z.c)(17),
    { shareId: n } = e,
    [r, i] = (0, Q.useReducer)(Fe, null, lt),
    a,
    o;
  (t[0] === r.awaitingRowIds
    ? ((a = t[1]), (o = t[2]))
    : ((a = () => $e(r.awaitingRowIds)),
      (o = [r.awaitingRowIds]),
      (t[0] = r.awaitingRowIds),
      (t[1] = a),
      (t[2] = o)),
    (0, Q.useEffect)(a, o));
  let [s, c] = (0, Q.useState)(!1),
    l,
    u;
  (t[3] === r.view
    ? ((l = t[4]), (u = t[5]))
    : ((l = () => {
        r.view && (document.title = r.view.title);
      }),
      (u = [r.view]),
      (t[3] = r.view),
      (t[4] = l),
      (t[5] = u)),
    (0, Q.useEffect)(l, u));
  let d, f;
  if (
    (t[6] === n
      ? ((d = t[7]), (f = t[8]))
      : ((d = () => {
          let e = new EventSource(`${B}/stream?${V}=${encodeURIComponent(n)}`);
          return (
            e.addEventListener(`message`, (t) => {
              let n = Pe(t.data);
              n !== null && (i(n), n.type === `ended` && e.close());
            }),
            e.addEventListener(`error`, () => {
              e.readyState === EventSource.CLOSED && c(!0);
            }),
            () => e.close()
          );
        }),
        (f = [n]),
        (t[6] = n),
        (t[7] = d),
        (t[8] = f)),
    (0, Q.useEffect)(d, f),
    r.ended || (s && r.view !== null))
  ) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ut, {
            title: `This link has ended`,
            detail: `The owner stopped sharing this thread.`,
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (r.view !== null) {
    if (r.projection === null) {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(ut, { title: `Connecting...` })), (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    let e;
    return (
      t[11] !== r.awaitingRowIds || t[12] !== r.projection || t[13] !== r.view
        ? ((e = (0, $.jsx)(_t, {
            view: r.view,
            projection: r.projection,
            awaitingRowIds: r.awaitingRowIds,
          })),
          (t[11] = r.awaitingRowIds),
          (t[12] = r.projection),
          (t[13] = r.view),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  if (!s) {
    let e;
    return (
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ut, { title: `Connecting...` })), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let p;
  return (
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, $.jsx)(ut, {
          title: `This link has ended or is not valid`,
          detail: `Ask the owner for a new link. Each link works in one browser.`,
        })),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function lt() {
  return { ...ke, awaitingRowIds: Qe() };
}
function ut(e) {
  let t = (0, Z.c)(7),
    { title: n, detail: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, $.jsx)(`p`, { className: `text-sm font-medium`, children: n })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = r
        ? (0, $.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: r })
        : null),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, $.jsxs)(`div`, {
          className: `m-auto flex max-w-sm flex-col gap-1 p-6 text-center`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function dt(e) {
  let t = (0, Z.c)(22),
    { credential: n, onJoined: r } = e,
    [i, a] = (0, Q.useState)(``),
    [o, s] = (0, Q.useState)(!1),
    [l, u] = (0, Q.useState)(null),
    d;
  t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== o
    ? ((d = async (e) => {
        e.preventDefault();
        let t = i.trim();
        if (t === `` || o) return;
        s(!0);
        let a = await nt(`redeem`, { credential: n, name: t });
        (s(!1), a === null ? r() : u(a));
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`h1`, {
        className: `text-base font-medium`,
        children: `Join a shared thread`,
      })),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => a(e.target.value)), (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === i
    ? (h = t[8])
    : ((h = (0, $.jsxs)(`label`, {
        className: `flex flex-col gap-1.5 text-sm`,
        htmlFor: `guest-name`,
        children: [
          `Your name`,
          (0, $.jsx)(S, {
            id: `guest-name`,
            autoFocus: !0,
            autoComplete: `name`,
            maxLength: 40,
            value: i,
            onChange: m,
          }),
        ],
      })),
      (t[7] = i),
      (t[8] = h));
  let g;
  t[9] === l
    ? (g = t[10])
    : ((g =
        l === null
          ? null
          : (0, $.jsx)(`p`, { role: `alert`, className: `text-sm text-destructive`, children: l })),
      (t[9] = l),
      (t[10] = g));
  let _;
  t[11] !== i || t[12] !== o
    ? ((_ = o || i.trim() === ``), (t[11] = i), (t[12] = o), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === _
    ? (v = t[15])
    : ((v = (0, $.jsx)(c, { type: `submit`, disabled: _, children: `Join` })),
      (t[14] = _),
      (t[15] = v));
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `The owner sees your name and approves each message before the agent gets it.`,
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== f || t[18] !== h || t[19] !== g || t[20] !== v
      ? ((b = (0, $.jsxs)(`form`, {
          className: `m-auto flex w-full max-w-xs flex-col gap-3 p-6`,
          onSubmit: f,
          children: [p, h, g, v, y],
        })),
        (t[17] = f),
        (t[18] = h),
        (t[19] = g),
        (t[20] = v),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
var ft = ne.make(`guest`),
  pt = (0, Q.createRef)(),
  mt = [],
  ht = [],
  gt = () => {};
function _t(e) {
  let t = (0, Z.c)(70),
    { view: n, projection: r, awaitingRowIds: i } = e,
    { shareId: a, title: o, expiresAt: c, messages: l, model: u } = n,
    d = `guest-${a}`,
    f = (0, Q.useRef)(null),
    { resolvedTheme: p } = se(),
    [m] = (0, Q.useState)(yt),
    g = m(r),
    _;
  t[0] === a ? (_ = t[1]) : ((_ = () => Ve(a)), (t[0] = a), (t[1] = _));
  let [y] = (0, Q.useState)(_),
    b;
  t[2] === a ? (b = t[3]) : ((b = () => Ye(a)), (t[2] = a), (t[3] = b));
  let [x] = (0, Q.useState)(b),
    S = y(g),
    C = ue(d, {
      visibleTurnItems: g,
      optimisticMessages: ht,
      attachmentUrlById: S,
      attempts: r.attempts,
      nodes: r.nodes,
      plans: r.plans,
    }),
    w;
  t[4] === a ? (w = t[5]) : ((w = (e) => St(ze(a, e.id))), (t[4] = a), (t[5] = w));
  let T = fe(w),
    E,
    D,
    O,
    k;
  if (t[6] !== r) {
    ((E = v(r)), (O = s(r)));
    let e = h(r);
    ((D = be(O) === `running` || e !== null),
      (k = xe(E, O, null) ?? e),
      (t[6] = r),
      (t[7] = E),
      (t[8] = D),
      (t[9] = O),
      (t[10] = k));
  } else ((E = t[7]), (D = t[8]), (O = t[9]), (k = t[10]));
  let A = k,
    j = O?.activeRunId ?? null,
    M;
  t[11] !== E || t[12] !== C || t[13] !== j || t[14] !== d
    ? ((M = {
        legendListRef: f,
        composerRef: pt,
        composerOverlayElement: null,
        composerTimelineInset: 0,
        routeThreadKey: d,
        activeThreadKey: d,
        activeThreadId: void 0,
        isServerThread: !1,
        serverProjection: null,
        threadStatus: `live`,
        activeActivityRun: E,
        activeRunningTurnId: j,
        timelineEntries: C,
        timelineAnchorMessageId: null,
        setTimelineAnchor: gt,
      }),
      (t[11] = E),
      (t[12] = C),
      (t[13] = j),
      (t[14] = d),
      (t[15] = M))
    : (M = t[15]);
  let N = de(M),
    P;
  t[16] === a
    ? (P = t[17])
    : ((P = (e) => (0, $.jsx)(Oe, { itemId: e.id, reference: e.htmlRender, shareId: a })),
      (t[16] = a),
      (t[17] = P));
  let F = fe(P),
    ee = Ie(l, g, i),
    I = ee.map(vt).join(`,`),
    L = (0, Q.useRef)(I),
    R = (0, Q.useRef)(N.timelineLiveFollowEnabled),
    z = fe(N.scrollToEnd);
  (0, Q.useEffect)(() => {
    R.current = N.timelineLiveFollowEnabled;
    let e = new Set(L.current.split(`,`));
    ((L.current = I), I.split(`,`).some((t) => t !== `` && !e.has(t)) && z(!0));
  }, [N.timelineLiveFollowEnabled, I, z, R, L]);
  let B = (0, Q.useRef)(null),
    V = ee.length > 0,
    U;
  (t[18] !== R || t[19] !== V || t[20] !== z
    ? ((U = [V, z, R]), (t[18] = R), (t[19] = V), (t[20] = z), (t[21] = U))
    : (U = t[21]),
    (0, Q.useEffect)(() => {
      let e = B.current;
      if (V && e !== null)
        return he(e, () => {
          R.current && z();
        });
    }, U));
  let W;
  t[22] === o
    ? (W = t[23])
    : ((W = (0, $.jsx)(`h1`, {
        className: `min-w-0 flex-1 truncate text-sm font-medium`,
        children: o,
      })),
      (t[22] = o),
      (t[23] = W));
  let G;
  t[24] === c ? (G = t[25]) : ((G = (0, $.jsx)(bt, { expiresAt: c })), (t[24] = c), (t[25] = G));
  let K;
  t[26] !== G || t[27] !== W
    ? ((K = (0, $.jsxs)(`header`, {
        className: `flex shrink-0 items-center gap-3 border-b border-border px-4 py-2.5`,
        children: [W, G],
      })),
      (t[26] = G),
      (t[27] = W),
      (t[28] = K))
    : (K = t[28]);
  let te = le,
    ne = mt,
    re = gt,
    ie = gt,
    ae = gt,
    oe = Ct,
    pe = ft,
    me = gt,
    ge = gt,
    _e =
      ee.length === 0
        ? null
        : (0, $.jsx)(`ol`, {
            ref: B,
            className: `chat-content-lane flex flex-col gap-4 pb-4`,
            children: ee.map((e) =>
              (0, $.jsx)(`li`, { children: (0, $.jsx)(wt, { shareId: a, message: e }) }, e.id),
            ),
          }),
    q;
  t[29] !== te ||
  t[30] !== E ||
  t[31] !== C ||
  t[32] !== N.cancelPositionRestoreRef ||
  t[33] !== N.cancelTimelineLiveFollowForUserNavigationStable ||
  t[34] !== N.onIsAtEndChangeStable ||
  t[35] !== N.timelineLiveFollowEnabled ||
  t[36] !== D ||
  t[37] !== T ||
  t[38] !== r.runs ||
  t[39] !== F ||
  t[40] !== p ||
  t[41] !== j ||
  t[42] !== ne ||
  t[43] !== re ||
  t[44] !== ie ||
  t[45] !== ae ||
  t[46] !== oe ||
  t[47] !== pe ||
  t[48] !== void 0 ||
  t[49] !== void 0 ||
  t[50] !== me ||
  t[51] !== ge ||
  t[52] !== _e ||
  t[53] !== d ||
  t[54] !== x ||
  t[55] !== A
    ? ((q = (0, $.jsx)(te, {
        listRef: f,
        timelineEntries: C,
        isWorking: D,
        activeTurnInProgress: D,
        activeTurnStartedAt: A,
        latestRun: E,
        runningRunId: j,
        turnDiffSummaries: ne,
        runs: r.runs,
        routeThreadKey: d,
        onOpenThread: re,
        onRollbackCheckpoint: ie,
        supportsConversationRollback: !1,
        onRevertToTurnCount: ae,
        isRevertingCheckpoint: !1,
        onImageExpand: oe,
        onFileOpen: T,
        onFileDownload: T,
        renderHtmlRender: F,
        turnItemSource: x,
        activeThreadEnvironmentId: pe,
        markdownCwd: void 0,
        resolvedTheme: p,
        timestampFormat: `locale`,
        workspaceRoot: void 0,
        anchorMessageId: null,
        onAnchorReady: me,
        onAnchorSizeChanged: ge,
        contentInsetEndAdjustment: 0,
        emptyPlaceholderInset: 0,
        liveFollowEnabled: N.timelineLiveFollowEnabled,
        onIsAtEndChange: N.onIsAtEndChangeStable,
        onManualNavigation: N.cancelTimelineLiveFollowForUserNavigationStable,
        cancelPositionRestoreRef: N.cancelPositionRestoreRef,
        footer: _e,
      })),
      (t[29] = te),
      (t[30] = E),
      (t[31] = C),
      (t[32] = N.cancelPositionRestoreRef),
      (t[33] = N.cancelTimelineLiveFollowForUserNavigationStable),
      (t[34] = N.onIsAtEndChangeStable),
      (t[35] = N.timelineLiveFollowEnabled),
      (t[36] = D),
      (t[37] = T),
      (t[38] = r.runs),
      (t[39] = F),
      (t[40] = p),
      (t[41] = j),
      (t[42] = ne),
      (t[43] = re),
      (t[44] = ie),
      (t[45] = ae),
      (t[46] = oe),
      (t[47] = pe),
      (t[48] = void 0),
      (t[49] = void 0),
      (t[50] = me),
      (t[51] = ge),
      (t[52] = _e),
      (t[53] = d),
      (t[54] = x),
      (t[55] = A),
      (t[56] = q))
    : (q = t[56]);
  let J;
  t[57] === N
    ? (J = t[58])
    : ((J = N.showScrollToBottom
        ? (0, $.jsx)(ce, { bottom: 4, onScrollToEnd: () => N.scrollToEnd(!0) })
        : null),
      (t[57] = N),
      (t[58] = J));
  let Y;
  t[59] !== q || t[60] !== J
    ? ((Y = (0, $.jsxs)(`div`, { className: `relative min-h-0 flex-1`, children: [q, J] })),
      (t[59] = q),
      (t[60] = J),
      (t[61] = Y))
    : (Y = t[61]);
  let ve;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = H(it, `shrink-0 pb-4`)), (t[62] = ve))
    : (ve = t[62]);
  let X;
  t[63] !== u || t[64] !== a
    ? ((X = (0, $.jsx)(`div`, {
        className: ve,
        children: (0, $.jsx)(Dt, { shareId: a, model: u }),
      })),
      (t[63] = u),
      (t[64] = a),
      (t[65] = X))
    : (X = t[65]);
  let ye;
  return (
    t[66] !== K || t[67] !== Y || t[68] !== X
      ? ((ye = (0, $.jsxs)($.Fragment, { children: [K, Y, X] })),
        (t[66] = K),
        (t[67] = Y),
        (t[68] = X),
        (t[69] = ye))
      : (ye = t[69]),
    ye
  );
}
function vt(e) {
  return e.id;
}
function yt() {
  return oe();
}
function bt(e) {
  let t = (0, Z.c)(5),
    { expiresAt: n } = e,
    r = De(),
    i;
  t[0] !== n || t[1] !== r
    ? ((i = Le(n, Date.parse(`${r}Z`))), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, $.jsx)(`span`, {
          className: `shrink-0 text-xs text-muted-foreground tabular-nums`,
          children: i,
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
var xt = `flex min-w-0 max-w-[80%] flex-col gap-2 rounded-2xl p-3 text-sm whitespace-pre-wrap [overflow-wrap:anywhere]`,
  St = (e) => window.open(e, `_blank`, `noopener,noreferrer`),
  Ct = (e) => {
    let t = e.images[e.index]?.src;
    t && St(t);
  };
function wt(e) {
  let t = (0, Z.c)(31),
    { shareId: n, message: r } = e,
    i = r.status !== `dismissed`,
    a;
  t[0] === n ? (a = t[1]) : ((a = (e) => ze(n, e.id)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(Ce, { name: `You` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r.status
    ? (c = t[4])
    : ((c = H(
        xt,
        Se(r.status !== `sent`),
        r.status === `dismissed` ? `text-muted-foreground` : `text-message-foreground`,
      )),
      (t[3] = r.status),
      (t[4] = c));
  let l;
  t[5] === r.attachments
    ? (l = t[6])
    : ((l = r.attachments ?? []), (t[5] = r.attachments), (t[6] = l));
  let u;
  t[7] !== i || t[8] !== o
    ? ((u = (e) => (i ? o(e) : void 0)), (t[7] = i), (t[8] = o), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === o ? (d = t[11]) : ((d = (e) => St(o(e))), (t[10] = o), (t[11] = d));
  let f;
  t[12] !== i || t[13] !== o
    ? ((f = i ? { fileHref: o } : {}), (t[12] = i), (t[13] = o), (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] !== l || t[16] !== u || t[17] !== d || t[18] !== f
    ? ((p = (0, $.jsx)(we, { attachments: l, imageUrl: u, onOpenImage: d, ...f })),
      (t[15] = l),
      (t[16] = u),
      (t[17] = d),
      (t[18] = f),
      (t[19] = p))
    : (p = t[19]);
  let m;
  t[20] === r.text
    ? (m = t[21])
    : ((m = r.text ? (0, $.jsx)(`span`, { children: r.text }) : null),
      (t[20] = r.text),
      (t[21] = m));
  let h;
  t[22] !== c || t[23] !== p || t[24] !== m
    ? ((h = (0, $.jsxs)(`div`, { className: c, children: [p, m] })),
      (t[22] = c),
      (t[23] = p),
      (t[24] = m),
      (t[25] = h))
    : (h = t[25]);
  let g = rt[r.status],
    _;
  t[26] === g
    ? (_ = t[27])
    : ((_ = (0, $.jsx)(`p`, { className: `me-1 text-2xs text-muted-foreground`, children: g })),
      (t[26] = g),
      (t[27] = _));
  let v;
  return (
    t[28] !== h || t[29] !== _
      ? ((v = (0, $.jsxs)(`div`, {
          className: `flex flex-col items-end gap-1`,
          children: [s, h, _],
        })),
        (t[28] = h),
        (t[29] = _),
        (t[30] = v))
      : (v = t[30]),
    v
  );
}
function Tt(e) {
  let t = (0, Z.c)(12),
    { model: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Te({ slug: n.name, ...n })), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`span`, {})), (t[2] = a))
    : (a = t[2]);
  let o = `Model: ${i}`,
    s;
  t[3] !== i || t[4] !== n.driver
    ? ((s =
        n.driver === null
          ? null
          : (0, $.jsx)(Ee, {
              driverKind: n.driver,
              displayName: i,
              className: `size-4`,
              iconClassName: `size-4`,
            })),
      (t[3] = i),
      (t[4] = n.driver),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === i
    ? (c = t[7])
    : ((c = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate`,
        "data-chat-provider-model-picker-label": `true`,
        children: i,
      })),
      (t[6] = i),
      (t[7] = c));
  let l;
  return (
    t[8] !== o || t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsxs)(R, {
          render: a,
          "aria-label": o,
          className: `pointer-events-none min-w-0 shrink`,
          children: [s, c],
        })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Et(e) {
  let t = (0, Z.c)(5),
    { file: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => {
        if (!e) return;
        let t = URL.createObjectURL(n);
        return ((e.src = t), () => URL.revokeObjectURL(t));
      }),
      (t[0] = n),
      (t[1] = r));
  let i;
  return (
    t[2] !== n.name || t[3] !== r
      ? ((i = (0, $.jsx)(`img`, { alt: n.name, className: `size-full object-cover`, ref: r })),
        (t[2] = n.name),
        (t[3] = r),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function Dt(e) {
  let t = (0, Z.c)(49),
    { shareId: n, model: r } = e,
    [s, l] = (0, Q.useState)(``),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = []), (t[0] = u)) : (u = t[0]);
  let [d, f] = (0, Q.useState)(u),
    [p, m] = (0, Q.useState)(!1),
    [h, g] = (0, Q.useState)(null),
    v = (0, Q.useRef)(null),
    y = (0, Q.useRef)(0),
    { resolvedTheme: b } = se(),
    x;
  t[1] === d
    ? (x = t[2])
    : ((x = (e) => {
        if (e.length === 0) return;
        let t = [
            ...d,
            ...e.map((e) => ((y.current += 1), { key: `staged-${y.current}`, file: e })),
          ],
          n = Be(t.map(At));
        (g(n), n === null && f(t));
      }),
      (t[1] = d),
      (t[2] = x));
  let S = x,
    C;
  t[3] !== d || t[4] !== p || t[5] !== n || t[6] !== s
    ? ((C = async () => {
        let e = s.trim();
        if ((e === `` && d.length === 0) || p) return;
        m(!0);
        let t = d,
          r = new FormData();
        (r.append(`shareId`, n), r.append(`text`, e));
        for (let e of t) r.append(`file`, e.file, e.file.name);
        let i = await nt(`messages?${V}=${encodeURIComponent(n)}`, r);
        (m(!1),
          g(i),
          i === null &&
            (l((t) => (t.trim() === e ? `` : t)), f((e) => e.filter((e) => !t.includes(e)))));
      }),
      (t[3] = d),
      (t[4] = p),
      (t[5] = n),
      (t[6] = s),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === w
    ? (T = t[9])
    : ((T = (e) => {
        e.key === `Enter` && !e.shiftKey && !e.nativeEvent.isComposing && (e.preventDefault(), w());
      }),
      (t[8] = w),
      (t[9] = T));
  let E = T,
    D;
  t[10] === S
    ? (D = t[11])
    : ((D = (e) => {
        let t = Array.from(e.clipboardData.files),
          n = t.some(kt);
        t.length === 0 ||
          (!n && e.clipboardData.getData(`text/plain`) !== ``) ||
          (e.preventDefault(), S(t));
      }),
      (t[10] = S),
      (t[11] = D));
  let O = D,
    k;
  t[12] === w
    ? (k = t[13])
    : ((k = (e) => {
        (e.preventDefault(), w());
      }),
      (t[12] = w),
      (t[13] = k));
  let A;
  t[14] === S
    ? (A = t[15])
    : ((A = (e) => {
        e.dataTransfer.files.length !== 0 &&
          (e.preventDefault(), S(Array.from(e.dataTransfer.files)));
      }),
      (t[14] = S),
      (t[15] = A));
  let M;
  t[16] !== d || t[17] !== b
    ? ((M =
        d.length > 0
          ? (0, $.jsx)(`ul`, {
              className: `flex flex-wrap gap-2`,
              "aria-label": `Attached files`,
              children: d.map((e) =>
                (0, $.jsxs)(
                  `li`,
                  {
                    className: `flex h-14 min-w-0 items-center gap-2 overflow-hidden rounded-lg border border-border/80 bg-background/70 pe-1`,
                    children: [
                      e.file.type.startsWith(`image/`)
                        ? (0, $.jsx)(`span`, {
                            className: `size-14 shrink-0`,
                            children: (0, $.jsx)(Et, { file: e.file }),
                          })
                        : (0, $.jsxs)(`span`, {
                            className: `flex min-w-0 items-center gap-2 ps-2 text-sm`,
                            children: [
                              (0, $.jsx)(_e, { pathValue: e.file.name, kind: `file`, theme: b }),
                              (0, $.jsx)(`span`, {
                                className: `max-w-40 truncate`,
                                children: e.file.name,
                              }),
                              (0, $.jsx)(`span`, {
                                className: `shrink-0 text-xs text-muted-foreground`,
                                children: _(e.file.size),
                              }),
                            ],
                          }),
                      (0, $.jsx)(c, {
                        size: `icon-xs`,
                        variant: `ghost-muted`,
                        "aria-label": `Remove ${e.file.name}`,
                        onClick: () => {
                          (g(null), f((t) => t.filter((t) => t !== e)));
                        },
                        children: (0, $.jsx)(o, {}),
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
            })
          : null),
      (t[16] = d),
      (t[17] = b),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => l(e.target.value)), (t[19] = N))
    : (N = t[19]);
  let P;
  t[20] !== E || t[21] !== O || t[22] !== s
    ? ((P = (0, $.jsx)(`textarea`, {
        "aria-label": `Message`,
        placeholder: `Message`,
        rows: 2,
        maxLength: ee,
        value: s,
        onChange: N,
        onKeyDown: E,
        onPaste: O,
        className: `max-h-60 min-h-12 w-full resize-none bg-transparent text-sm outline-none field-sizing-content placeholder:text-placeholder`,
      })),
      (t[20] = E),
      (t[21] = O),
      (t[22] = s),
      (t[23] = P))
    : (P = t[23]);
  let F;
  t[24] === S
    ? (F = t[25])
    : ((F = (0, $.jsx)(`input`, {
        ref: v,
        type: `file`,
        multiple: !0,
        hidden: !0,
        "aria-label": `Files to attach`,
        onChange: (e) => {
          (S(Array.from(e.target.files ?? [])), (e.target.value = ``));
        },
      })),
      (t[24] = S),
      (t[25] = F));
  let I;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(R, {
        "aria-label": `Attach files`,
        onClick: () => v.current?.click(),
        children: (0, $.jsx)(j, { icon: a }),
      })),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === r ? (L = t[28]) : ((L = (0, $.jsx)(Tt, { model: r })), (t[27] = r), (t[28] = L));
  let z;
  t[29] === h
    ? (z = t[30])
    : ((z =
        h === null
          ? (0, $.jsx)(`p`, {
              className: `min-w-0 flex-1 truncate text-xs text-muted-foreground`,
              children: `The owner approves each message`,
            })
          : (0, $.jsx)(`p`, {
              role: `alert`,
              className: `min-w-0 flex-1 text-xs text-destructive`,
              children: h,
            })),
      (t[29] = h),
      (t[30] = z));
  let B;
  t[31] !== d.length || t[32] !== p || t[33] !== s
    ? ((B = p || (s.trim() === `` && d.length === 0)),
      (t[31] = d.length),
      (t[32] = p),
      (t[33] = s),
      (t[34] = B))
    : (B = t[34]);
  let H;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(i, { "aria-hidden": !0, className: `size-4` })), (t[35] = H))
    : (H = t[35]);
  let U;
  t[36] === B
    ? (U = t[37])
    : ((U = (0, $.jsx)(`button`, {
        type: `submit`,
        "aria-label": `Send`,
        disabled: B,
        className: `flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-message-action text-message-action-foreground shadow-xs hover:bg-message-action-hover focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-64`,
        children: H,
      })),
      (t[36] = B),
      (t[37] = U));
  let W;
  t[38] !== F || t[39] !== L || t[40] !== z || t[41] !== U
    ? ((W = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [F, I, L, z, U],
      })),
      (t[38] = F),
      (t[39] = L),
      (t[40] = z),
      (t[41] = U),
      (t[42] = W))
    : (W = t[42]);
  let G;
  return (
    t[43] !== P || t[44] !== W || t[45] !== k || t[46] !== A || t[47] !== M
      ? ((G = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-2 rounded-3xl border border-border bg-card px-4 pt-3 pb-2.5 shadow-composer dark:shadow-composer-dark`,
          onSubmit: k,
          onDragOver: Ot,
          onDrop: A,
          children: [M, P, W],
        })),
        (t[43] = P),
        (t[44] = W),
        (t[45] = k),
        (t[46] = A),
        (t[47] = M),
        (t[48] = G))
      : (G = t[48]),
    G
  );
}
function Ot(e) {
  e.dataTransfer.types.includes(`Files`) && e.preventDefault();
}
function kt(e) {
  return e.type.startsWith(`image/`);
}
function At(e) {
  return e.file;
}
var jt = at;
export { jt as component };
//# sourceMappingURL=guest-UwFWcEKg.js.map
