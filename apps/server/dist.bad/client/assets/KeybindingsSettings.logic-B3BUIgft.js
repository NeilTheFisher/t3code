import { Dp as e, Ip as t, Mh as n, Op as r, Pp as i, Tp as a } from "./utils-CPoejuy5.js";
import "./keybindings-b_9MjE1R.js";
import { n as o, t as s } from "./usageShortcuts-EXgoAHb0.js";
var c = new Map([`usage.open`, ...[...s, ...o].map((e) => e.command)].map((e, t) => [e, t])),
  l = s[0].command;
function u(e, t, n) {
  let r = c.get(e),
    i = c.get(t);
  return r !== void 0 && i !== void 0
    ? r - i
    : n(r === void 0 ? e : l).localeCompare(n(i === void 0 ? t : l));
}
var d = [`terminalFocus`, `terminalOpen`, `isWeb`, `isDesktop`, `true`, `false`],
  f = new Set(d);
for (let e of a) j(e.whenAst, f);
var p = [...f].find((e) => e !== `true` && e !== `false`) ?? `terminalFocus`,
  m = new Set(f);
function h(e) {
  let t = [];
  return (
    e.modKey && t.push(`mod`),
    e.metaKey && t.push(`meta`),
    e.ctrlKey && t.push(`ctrl`),
    e.altKey && t.push(`alt`),
    e.shiftKey && t.push(`shift`),
    t.push(e.key === ` ` ? `space` : e.key === `escape` ? `esc` : e.key),
    t.join(`+`)
  );
}
function g(e) {
  if (!e) return ``;
  switch (e.type) {
    case `identifier`:
      return e.name;
    case `not`:
      return `!${v(e.node)}`;
    case `and`:
      return `${v(e.left)} && ${v(e.right)}`;
    case `or`:
      return `${v(e.left)} || ${v(e.right)}`;
  }
}
function _(e, t) {
  return t === 0
    ? `Clear all conditions`
    : e.type === `identifier` || (e.type === `not` && e.node.type === `identifier`)
      ? `Remove condition`
      : `Remove group and its conditions`;
}
function v(e) {
  return e.type === `identifier` || e.type === `not` ? g(e) : `(${g(e)})`;
}
function y(e) {
  let t = e.trim();
  if (t.length === 0) return { ok: !0, value: void 0 };
  let n = i(t);
  return n
    ? { ok: !0, value: n }
    : { ok: !1, message: `Use variables with !, &&, ||, and parentheses.` };
}
function b(e) {
  if (String(e.command).startsWith(`script.`)) return `Project`;
  let t = h(e.shortcut),
    n = g(e.whenAst);
  return a.some((r) => r.command === e.command && h(r.shortcut) === t && g(r.whenAst) === n)
    ? `Default`
    : `Custom`;
}
function x(e) {
  let t = h(e.shortcut),
    n = g(e.whenAst);
  return (
    a.find((r) => r.command === e.command && h(r.shortcut) === t && g(r.whenAst) === n) ??
    a.find((t) => t.command === e.command && g(t.whenAst) === n) ??
    a.find((t) => t.command === e.command)
  );
}
function S(e, t, n) {
  return `${e}\u0000${t}\u0000${n}`;
}
function C(e, t) {
  return e.length === 0 || t.length === 0 || e === t;
}
function w(e, t) {
  if (t.key.trim().length === 0) return [];
  let n = [];
  for (let r of e) r.id !== t.rowId && r.key === t.key && C(r.when, t.when) && n.push(I(r.command));
  return [...new Set(n)].toSorted();
}
var T = [
    {
      id: `navigation`,
      title: `Navigation`,
      prefixes: [
        `sidebar`,
        `rightPanel`,
        `commandPalette`,
        `filePicker`,
        `projectSearch`,
        `editor`,
      ],
    },
    { id: `threads`, title: `Threads`, prefixes: [`thread`, `chat`, `pullRequest`] },
    { id: `composer`, title: `Composer`, prefixes: [`composer`, `modelPicker`] },
    { id: `terminal`, title: `Terminal`, prefixes: [`terminal`] },
    { id: `preview`, title: `Preview & diff`, prefixes: [`preview`, `diff`] },
    { id: `appearance`, title: `Appearance`, prefixes: [`theme`, `appearance`, `themeEditor`] },
    { id: `scripts`, title: `Project scripts`, prefixes: [`script`] },
  ],
  E = { id: `other`, title: `Other` };
function D(e) {
  let t = String(e).split(`.`)[0] ?? ``;
  return T.find((e) => e.prefixes.includes(t)) ?? E;
}
function O(e) {
  let t = new Map();
  for (let n of e) {
    let e = D(n.command),
      r = t.get(e.id);
    r ? r.push(n) : t.set(e.id, [n]);
  }
  return [...T, E].flatMap((e) => {
    let n = t.get(e.id);
    return n ? [{ id: e.id, title: e.title, rows: n }] : [];
  });
}
function k(e) {
  let t = new Map();
  for (let n of e) {
    let e = x(n),
      r = h(n.shortcut),
      i = g(n.whenAst),
      a = S(n.command, r, i);
    t.set(a, {
      id: a,
      command: n.command,
      key: r,
      when: i,
      source: b(n),
      defaultKey: e ? h(e.shortcut) : null,
      defaultWhen: g(e?.whenAst),
      binding: n,
      conflicts: [],
    });
  }
  let n = [...t.values()],
    r = n.map((e) => {
      let t = w(n, { rowId: e.id, key: e.key, when: e.when });
      return t.length > 0 ? Object.assign({}, e, { conflicts: [...new Set(t)].toSorted() }) : e;
    });
  return (
    r.sort((e, t) => {
      let n = u(e.command, t.command, (e) => e);
      return n === 0 ? e.key.localeCompare(t.key) : n;
    }),
    r
  );
}
function A(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0
    ? e
    : e.filter(
        (e) =>
          e.command.toLowerCase().includes(n) ||
          I(e.command).toLowerCase().includes(n) ||
          e.key.toLowerCase().includes(n) ||
          e.when.toLowerCase().includes(n) ||
          e.source.toLowerCase().includes(n),
      );
}
function j(e, t) {
  if (e)
    switch (e.type) {
      case `identifier`:
        t.add(e.name);
        return;
      case `not`:
        j(e.node, t);
        return;
      case `and`:
      case `or`:
        (j(e.left, t), j(e.right, t));
        return;
    }
}
function M(e) {
  return m.has(e);
}
function N(e) {
  let t = new Set();
  return (j(e, t), [...t].filter((e) => !M(e)).toSorted());
}
function P() {
  return [...m].toSorted((e, t) => {
    let n = d.indexOf(e),
      r = d.indexOf(t);
    return n !== -1 || r !== -1
      ? (n === -1 ? 2 ** 53 - 1 : n) - (r === -1 ? 2 ** 53 - 1 : r)
      : e.localeCompare(t);
  });
}
function F(e) {
  let t = new Set(n);
  for (let n of e) t.add(n.command);
  return [...t].toSorted((e, t) => u(e, t, I));
}
function I(e) {
  if (e === `composer.sendAlternate`) return `Composer: Opposite Queue or Steer Action`;
  if (e === `composer.sendBackground`) return `Composer: Start in Background`;
  if (e === `composer.sendAndNewThread`) return `Composer: Send and Start New Thread`;
  if (e === `thread.steerQueuedMessage`) return `Queue: Send First Queued Message`;
  if (e === `thread.editQueuedMessage`) return `Queue: Edit Last Queued Message`;
  if (e === `thread.copyReference`) return `Pull Request: Copy Link or Thread ID`;
  let t = s.find((t) => t.command === e);
  if (t) return `Usage: ${t.label}`;
  let n = o.find((t) => t.command === e);
  if (n) return `Usage: Period: ${n.label}`;
  if (e === `view.reopenClosed`) return `Reopen Closed Tab`;
  if (e === `preview.focusUrl`) return `Preview: Focus URL`;
  let r = String(e);
  return r.startsWith(`script.`) && r.endsWith(`.run`)
    ? `Run Script: ${L(r.slice(7, -4))}`
    : r.split(`.`).map(L).join(`: `);
}
function L(e) {
  let t = [];
  for (let n of e.replace(/([a-z0-9])([A-Z])/g, `$1 $2`).split(/[-_\s]+/))
    n.length > 0 && t.push(n.slice(0, 1).toUpperCase() + n.slice(1));
  return t.join(` `);
}
function R(n) {
  let r = t(n),
    i = n.key.toLowerCase();
  return n.altKey || i.length !== 1 || (n.shiftKey ? e.get(i) : void 0) === r ? r : i;
}
function z(e) {
  let t = e.toLowerCase();
  return t === `meta` ||
    t === `control` ||
    t === `ctrl` ||
    t === `shift` ||
    t === `alt` ||
    t === `option`
    ? null
    : t === ` `
      ? `space`
      : t === `escape`
        ? `esc`
        : t === `arrowup`
          ? `arrowup`
          : t === `arrowdown`
            ? `arrowdown`
            : t === `arrowleft`
              ? `arrowleft`
              : t === `arrowright`
                ? `arrowright`
                : t.length === 1 ||
                    /^f\d{1,2}$/.test(t) ||
                    t === `enter` ||
                    t === `tab` ||
                    t === `backspace` ||
                    t === `delete` ||
                    t === `home` ||
                    t === `end` ||
                    t === `pageup` ||
                    t === `pagedown`
                  ? t
                  : null;
}
function B(e, n, i) {
  let a = z(i?.layoutCharacter ? R(e) : t(e));
  if (!a) return null;
  let o = [];
  return (
    r(n)
      ? (e.metaKey && o.push(`mod`), e.ctrlKey && o.push(`ctrl`))
      : (e.ctrlKey && o.push(`mod`), e.metaKey && o.push(`meta`)),
    e.altKey && o.push(`alt`),
    e.shiftKey && o.push(`shift`),
    o.push(a),
    o.join(`+`)
  );
}
export {
  I as a,
  M as c,
  y as d,
  h as f,
  _ as h,
  P as i,
  w as l,
  g as m,
  F as n,
  A as o,
  N as p,
  k as r,
  O as s,
  p as t,
  B as u,
};
//# sourceMappingURL=KeybindingsSettings.logic-B3BUIgft.js.map
