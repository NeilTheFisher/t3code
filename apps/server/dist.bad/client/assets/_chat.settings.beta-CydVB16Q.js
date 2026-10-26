import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { n as t, t as n } from "./jsx-runtime-BQExFN_X.js";
import { Dr as r, Um as i } from "./utils-CPoejuy5.js";
import { s as a } from "./runtime-CSDWbn8h.js";
import { t as o } from "./link-BAk08nHo.js";
import { o as s } from "./dist-BdqWmeee.js";
import { t as c } from "./useT3ConnectAuthPrompt-KcWxnf8S.js";
import { l } from "./settingsSearch-CrEaqXdW.js";
import { Rs as u } from "./main-BZa0O6xN.js";
import { a as d, g as f, i as p, r as m, s as h, y as g } from "./settingsLayout-2i87rQY9.js";
import { t as _ } from "./ScopedSwitch-eETzzyfB.js";
var v = t(),
  y = e(n(), 1);
function b() {
  let e = (0, v.c)(28),
    t = f(),
    n = g(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = l(`new-design`)), (e[0] = r))
    : (r = e[0]);
  let o;
  e[1] !== t.redesignEnabled || e[2] !== n
    ? ((o =
        t.redesignEnabled === i.redesignEnabled
          ? null
          : (0, y.jsx)(m, {
              label: `new design`,
              onClick: () => n({ redesignEnabled: i.redesignEnabled }),
            })),
      (e[1] = t.redesignEnabled),
      (e[2] = n),
      (e[3] = o))
    : (o = e[3]);
  let s;
  e[4] === n ? (s = e[5]) : ((s = (e) => n({ redesignEnabled: !!e })), (e[4] = n), (e[5] = s));
  let c;
  e[6] !== t.redesignEnabled || e[7] !== s
    ? ((c = (0, y.jsx)(u, {
        checked: t.redesignEnabled,
        onCheckedChange: s,
        "aria-label": `New design`,
      })),
      (e[6] = t.redesignEnabled),
      (e[7] = s),
      (e[8] = c))
    : (c = e[8]);
  let _;
  e[9] !== o || e[10] !== c
    ? ((_ = (0, y.jsx)(d, {
        ...r,
        description: `Try the quieter design: gray sidebar icons, dimmer read threads, and simpler composer controls.`,
        resetAction: o,
        control: c,
      })),
      (e[9] = o),
      (e[10] = c),
      (e[11] = _))
    : (_ = e[11]);
  let b;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = l(`working-shelf`)), (e[12] = b))
    : (b = e[12]);
  let C;
  e[13] !== t.sidebarWorkingShelfEnabled || e[14] !== n
    ? ((C =
        t.sidebarWorkingShelfEnabled === i.sidebarWorkingShelfEnabled
          ? null
          : (0, y.jsx)(m, {
              label: `working section`,
              onClick: () => n({ sidebarWorkingShelfEnabled: i.sidebarWorkingShelfEnabled }),
            })),
      (e[13] = t.sidebarWorkingShelfEnabled),
      (e[14] = n),
      (e[15] = C))
    : (C = e[15]);
  let w;
  e[16] === n
    ? (w = e[17])
    : ((w = (e) => n({ sidebarWorkingShelfEnabled: !!e })), (e[16] = n), (e[17] = w));
  let T;
  e[18] !== t.sidebarWorkingShelfEnabled || e[19] !== w
    ? ((T = (0, y.jsx)(u, {
        checked: t.sidebarWorkingShelfEnabled,
        onCheckedChange: w,
        "aria-label": `Working section`,
      })),
      (e[18] = t.sidebarWorkingShelfEnabled),
      (e[19] = w),
      (e[20] = T))
    : (T = e[20]);
  let E;
  e[21] !== C || e[22] !== T
    ? ((E = (0, y.jsx)(d, {
        ...b,
        description: `Fold working and monitoring threads into a Working section. They return to the top of the inbox when they need you.`,
        resetAction: C,
        control: T,
      })),
      (e[21] = C),
      (e[22] = T),
      (e[23] = E))
    : (E = e[23]);
  let D;
  e[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = a() ? (0, y.jsx)(x, {}) : (0, y.jsx)(S, {})), (e[24] = D))
    : (D = e[24]);
  let O;
  return (
    e[25] !== _ || e[26] !== E
      ? ((O = (0, y.jsx)(p, {
          children: (0, y.jsxs)(h, { id: `beta`, title: `Beta`, children: [_, E, D] }),
        })),
        (e[25] = _),
        (e[26] = E),
        (e[27] = O))
      : (O = e[27]),
    O
  );
}
function x() {
  let e = (0, v.c)(4),
    { isSignedIn: t } = s(),
    { openAuthPrompt: n } = c();
  if (t !== !1) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, y.jsx)(S, {})), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = l(`guest-links`)), (e[1] = i))
    : (i = e[1]);
  let a;
  return (
    e[2] === n
      ? (a = e[3])
      : ((a = (0, y.jsx)(d, {
          ...i,
          description: `Share a thread with a guest who watches it live in their browser and sends messages you approve. Sign in to T3 Connect to use guest links.`,
          control: (0, y.jsx)(r, {
            size: `sm`,
            variant: `outline`,
            onClick: n,
            children: `Sign in`,
          }),
        })),
        (e[2] = n),
        (e[3] = a)),
    a
  );
}
function S() {
  let e = (0, v.c)(9),
    t = f(),
    n = g(),
    r,
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = l(`guest-links`)), (i = [`guestSharingEnabled`]), (e[0] = r), (e[1] = i))
    : ((r = e[0]), (i = e[1]));
  let a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, y.jsxs)(y.Fragment, {
        children: [
          `Share a thread with a guest who watches it live in their browser and sends messages you approve. Needs T3 Connect: sign in and link this machine in`,
          ` `,
          (0, y.jsx)(o, {
            to: `/settings/connections`,
            className: `underline underline-offset-2`,
            children: `Connections`,
          }),
          `. While it is off, every guest link stops working.`,
        ],
      })),
      (e[2] = a))
    : (a = e[2]);
  let s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = [`guestSharingEnabled`]), (e[3] = s))
    : (s = e[3]);
  let c;
  e[4] === n ? (c = e[5]) : ((c = (e) => n({ guestSharingEnabled: !!e })), (e[4] = n), (e[5] = c));
  let u;
  return (
    e[6] !== t.guestSharingEnabled || e[7] !== c
      ? ((u = (0, y.jsx)(d, {
          serverScoped: !0,
          ...r,
          settingKeys: i,
          description: a,
          control: (0, y.jsx)(_, {
            settingKeys: s,
            checked: t.guestSharingEnabled,
            onCheckedChange: c,
            "aria-label": `Guest links`,
          }),
        })),
        (e[6] = t.guestSharingEnabled),
        (e[7] = c),
        (e[8] = u))
      : (u = e[8]),
    u
  );
}
var C = b;
export { C as component };
//# sourceMappingURL=_chat.settings.beta-CydVB16Q.js.map
