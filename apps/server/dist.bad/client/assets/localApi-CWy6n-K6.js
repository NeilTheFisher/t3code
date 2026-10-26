import { Ic as e, Pc as t, jm as n } from "./utils-CPoejuy5.js";
var r = { status: `idle` },
  i = r,
  a = null,
  o = [],
  s = 0,
  c = new Set();
function l(e) {
  i = e;
  for (let e of c) e();
}
function u(e) {
  a?.resolve(e);
  for (let t of o) t.resolve(e);
  ((a = null), (o = []));
}
function d() {
  return i;
}
function f(e) {
  return (
    c.add(e),
    () => {
      c.delete(e);
    }
  );
}
function p() {
  s += 1;
  let e = !0;
  return () => {
    e && ((e = !1), (s = Math.max(0, s - 1)), s === 0 && (u(!1), l(r)));
  };
}
function m(e, t) {
  if (s !== 0)
    return new Promise((n) => {
      let r = { message: e, variant: t?.variant ?? `default`, resolve: n };
      a || i.status === `closing`
        ? o.push(r)
        : ((a = r), l({ status: `confirming`, message: e, variant: r.variant }));
    });
}
function h() {
  return i.status !== `idle` || a !== null || o.length > 0;
}
function g(e) {
  if (i.status !== `confirming` || !a) return;
  let t = a;
  ((a = null), t.resolve(e), l({ status: `closing`, message: i.message, variant: i.variant }));
}
function _() {
  if (i.status !== `closing`) return;
  let e = o.shift();
  e ? ((a = e), l({ status: `confirming`, message: e.message, variant: e.variant })) : l(r);
}
var v = `http://www.w3.org/2000/svg`,
  y = {
    archive: [
      { tag: `rect`, attrs: { width: `20`, height: `5`, x: `2`, y: `3`, rx: `1` } },
      { tag: `path`, attrs: { d: `M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8` } },
      { tag: `path`, attrs: { d: `M10 12h4` } },
    ],
    check: [{ tag: `path`, attrs: { d: `M20 6 9 17l-5-5` } }],
    timer: [
      { tag: `line`, attrs: { x1: `10`, x2: `14`, y1: `2`, y2: `2` } },
      { tag: `line`, attrs: { x1: `12`, x2: `15`, y1: `14`, y2: `11` } },
      { tag: `circle`, attrs: { cx: `12`, cy: `14`, r: `8` } },
    ],
    "chevron-right": [{ tag: `path`, attrs: { d: `m9 19 7-7-7-7` } }],
    "circle-check": [
      { tag: `circle`, attrs: { cx: `12`, cy: `12`, r: `10` } },
      { tag: `path`, attrs: { d: `m9 12 2 2 4-4` } },
    ],
    clock: [
      { tag: `path`, attrs: { d: `M12 6v6l4 2` } },
      { tag: `circle`, attrs: { cx: `12`, cy: `12`, r: `10` } },
    ],
    pencil: [
      {
        tag: `path`,
        attrs: {
          d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        },
      },
      { tag: `path`, attrs: { d: `m15 5 4 4` } },
    ],
    copy: [
      { tag: `rect`, attrs: { width: `14`, height: `14`, x: `8`, y: `8`, rx: `2`, ry: `2` } },
      { tag: `path`, attrs: { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2` } },
    ],
    folder: [
      {
        tag: `path`,
        attrs: {
          d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,
        },
      },
    ],
    download: [
      { tag: `path`, attrs: { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4` } },
      { tag: `path`, attrs: { d: `m7 10 5 5 5-5` } },
      { tag: `path`, attrs: { d: `M12 15V3` } },
    ],
    "git-branch": [
      { tag: `line`, attrs: { x1: `6`, x2: `6`, y1: `3`, y2: `15` } },
      { tag: `circle`, attrs: { cx: `18`, cy: `6`, r: `3` } },
      { tag: `circle`, attrs: { cx: `6`, cy: `18`, r: `3` } },
      { tag: `path`, attrs: { d: `M18 9a9 9 0 0 1-9 9` } },
    ],
    hash: [
      { tag: `line`, attrs: { x1: `4`, x2: `20`, y1: `9`, y2: `9` } },
      { tag: `line`, attrs: { x1: `4`, x2: `20`, y1: `15`, y2: `15` } },
      { tag: `line`, attrs: { x1: `10`, x2: `8`, y1: `3`, y2: `21` } },
      { tag: `line`, attrs: { x1: `16`, x2: `14`, y1: `3`, y2: `21` } },
    ],
    "mail-open": [
      {
        tag: `path`,
        attrs: {
          d: `M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z`,
        },
      },
      { tag: `path`, attrs: { d: `m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10` } },
    ],
    "message-square-plus": [
      {
        tag: `path`,
        attrs: {
          d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,
        },
      },
      { tag: `path`, attrs: { d: `M12 8v6` } },
      { tag: `path`, attrs: { d: `M9 11h6` } },
    ],
    pin: [
      { tag: `path`, attrs: { d: `M12 17v5` } },
      {
        tag: `path`,
        attrs: {
          d: `M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,
        },
      },
    ],
    "pin-off": [
      { tag: `path`, attrs: { d: `M12 17v5` } },
      { tag: `path`, attrs: { d: `M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89` } },
      { tag: `path`, attrs: { d: `m2 2 20 20` } },
      {
        tag: `path`,
        attrs: { d: `M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11` },
      },
    ],
    "refresh-cw": [
      { tag: `path`, attrs: { d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8` } },
      { tag: `path`, attrs: { d: `M21 3v5h-5` } },
      { tag: `path`, attrs: { d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16` } },
      { tag: `path`, attrs: { d: `M8 16H3v5` } },
    ],
    settings: [
      {
        tag: `path`,
        attrs: {
          d: `M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`,
        },
      },
      { tag: `circle`, attrs: { cx: `12`, cy: `12`, r: `3` } },
    ],
    "user-plus": [
      { tag: `path`, attrs: { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2` } },
      { tag: `circle`, attrs: { cx: `9`, cy: `7`, r: `4` } },
      { tag: `line`, attrs: { x1: `19`, x2: `19`, y1: `8`, y2: `14` } },
      { tag: `line`, attrs: { x1: `22`, x2: `16`, y1: `11`, y2: `11` } },
    ],
    "folder-tree": [
      {
        tag: `path`,
        attrs: {
          d: `M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,
        },
      },
      {
        tag: `path`,
        attrs: {
          d: `M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,
        },
      },
      { tag: `path`, attrs: { d: `M3 5a2 2 0 0 0 2 2h3` } },
      { tag: `path`, attrs: { d: `M3 3v13a2 2 0 0 0 2 2h3` } },
    ],
    trash: [
      { tag: `path`, attrs: { d: `M3 6h18` } },
      { tag: `path`, attrs: { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6` } },
      { tag: `path`, attrs: { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2` } },
      { tag: `line`, attrs: { x1: `10`, x2: `10`, y1: `11`, y2: `17` } },
      { tag: `line`, attrs: { x1: `14`, x2: `14`, y1: `11`, y2: `17` } },
    ],
  };
function b(e, t) {
  let n = y[e];
  if (!n || typeof document.createElementNS != `function`) return null;
  let r = document.createElementNS(v, `svg`);
  (r.setAttribute(`xmlns`, v),
    r.setAttribute(`viewBox`, `0 0 24 24`),
    r.setAttribute(`fill`, `none`),
    r.setAttribute(`stroke`, `currentColor`),
    r.setAttribute(`stroke-width`, `2`),
    r.setAttribute(`stroke-linecap`, `round`),
    r.setAttribute(`stroke-linejoin`, `round`),
    r.setAttribute(
      `class`,
      t === `destructive`
        ? `size-4.5 shrink-0 sm:size-4`
        : `size-4.5 shrink-0 text-muted-foreground sm:size-4`,
    ));
  for (let e of n) {
    let t = document.createElementNS(v, e.tag);
    for (let [n, r] of Object.entries(e.attrs)) t.setAttribute(n, r);
    r.appendChild(t);
  }
  return r;
}
function x(e, t, n) {
  let r = e.getBoundingClientRect(),
    i = Math.min(Math.max(4, t), Math.max(4, window.innerWidth - r.width - 4)),
    a = Math.min(Math.max(4, n), Math.max(4, window.innerHeight - r.height - 4));
  ((e.style.left = `${i}px`), (e.style.top = `${a}px`));
}
function S(e, t) {
  if (typeof Node < `u` && e instanceof Node) return t.some((t) => t.contains(e));
  if (!e || typeof e != `object`) return !1;
  let n = e;
  for (; n && typeof n == `object`;) {
    if (t.includes(n)) return !0;
    n = n.parent;
  }
  return !1;
}
var C = null;
function w() {
  return C !== null;
}
function T() {
  (C?.(), (C = null));
}
function E(e, t) {
  return new Promise((n) => {
    let r = document.activeElement instanceof HTMLElement ? document.activeElement : null,
      i = [],
      a = [],
      o = !1,
      s = !1,
      c = () => l(null),
      l = (e) => {
        if (o) return;
        ((o = !0),
          C === c && (C = null),
          document.removeEventListener(`keydown`, u),
          document.removeEventListener(`pointerdown`, d, !0),
          document.removeEventListener(`contextmenu`, f, !0));
        let t = S(document.activeElement, i);
        for (let e of i) e.remove();
        (t && r?.isConnected && r.focus({ preventScroll: !0 }), n(e));
      },
      u = (e) => {
        e.key === `Escape` && (e.preventDefault(), l(null));
      },
      d = (e) => {
        s && !S(e.target, i) && l(null);
      },
      f = (e) => {
        s && !S(e.target, i) && (e.preventDefault(), l(null));
      },
      p = (e) => {
        for (; i.length > e;) (a.pop()?.setAttribute(`aria-expanded`, `false`), i.pop()?.remove());
      },
      m = (e, t, n, r, o) => {
        p(r);
        let c = document.createElement(`div`);
        ((c.className = `dropdown-glass fixed z-[10000] min-w-32 max-w-sm overflow-hidden rounded-lg bg-clip-padding text-popover-foreground outline-none`),
          (c.style.cssText = `position:fixed;z-index:10000;min-width:8rem;max-width:24rem;overflow:hidden;border-radius:var(--radius-lg);background-clip:padding-box;color:var(--contrast-popover-foreground);outline:none;pointer-events:auto;`),
          (c.style.left = `${t}px`),
          (c.style.top = `${n}px`),
          (c.dataset.level = String(r)));
        let u = document.createElement(`div`);
        ((u.className = `max-h-[calc(100vh-0.5rem)] min-w-0 max-w-sm overflow-y-auto overflow-x-hidden p-1`),
          (u.style.cssText = `max-height:calc(100vh - 0.5rem);min-width:0;max-width:24rem;overflow-x:hidden;overflow-y:auto;padding:0.25rem;`));
        for (let t of e) {
          if (t.separatorBefore === !0 && u.children.length > 0) {
            let e = document.createElement(`div`);
            ((e.className = `mx-2 my-1 h-px bg-border`),
              (e.style.cssText = `height:1px;margin:0.25rem 0.5rem;background:var(--contrast-border);`),
              (e.dataset.contextMenuSeparator = `true`),
              e.setAttribute(`role`, `separator`),
              u.appendChild(e));
          }
          if (t.header === !0) {
            let e = document.createElement(`div`);
            ((e.className = `px-2 py-1.5 font-medium text-muted-foreground text-xs`),
              (e.textContent = t.label),
              u.appendChild(e));
            continue;
          }
          let e = Array.isArray(t.children) && t.children.length > 0,
            n = !e && (t.destructive === !0 || t.id === `delete`),
            a = document.createElement(`button`);
          a.type = `button`;
          let o = t.disabled === !0;
          a.disabled = o;
          let c = `flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-left outline-none transition-colors sm:min-h-7 sm:text-sm min-h-8 text-base`;
          if (
            ((a.className = o
              ? `${c} pointer-events-none cursor-not-allowed text-muted-foreground opacity-64`
              : n
                ? `${c} text-destructive-foreground hover:bg-destructive/10 hover:text-destructive-foreground`
                : `${c} text-foreground hover:bg-accent hover:text-accent-foreground`),
            (a.style.cssText = `display:flex;width:100%;min-height:1.75rem;align-items:center;gap:0.5rem;border:0;border-radius:var(--radius-sm);background:transparent;padding:0.25rem 0.5rem;color:var(--contrast-foreground);font-family:var(--font-sans,system-ui,sans-serif);font-size:0.875rem;line-height:1.25rem;text-align:left;cursor:default;`),
            n && (a.style.color = `var(--destructive-foreground)`),
            o &&
              ((a.style.color = `var(--contrast-muted-foreground)`),
              (a.style.opacity = `0.64`),
              (a.style.pointerEvents = `none`)),
            typeof t.checked == `boolean`)
          ) {
            (a.setAttribute(`role`, `menuitemradio`),
              a.setAttribute(`aria-checked`, t.checked ? `true` : `false`));
            let e = t.checked ? b(`check`, `neutral`) : null;
            if (e) a.appendChild(e);
            else {
              let e = document.createElement(`span`);
              ((e.className = `size-4.5 shrink-0 sm:size-4`),
                (e.style.cssText = `display:inline-block;width:1rem;height:1rem;flex-shrink:0;`),
                e.setAttribute(`aria-hidden`, `true`),
                a.appendChild(e));
            }
          } else if (typeof t.icon == `string`) {
            let e = b(t.icon, n ? `destructive` : `neutral`);
            e && a.appendChild(e);
          }
          let d = document.createElement(`span`);
          if (
            ((d.className = `min-w-0 flex-1 truncate`),
            (d.textContent = t.label),
            a.appendChild(d),
            e)
          ) {
            (a.setAttribute(`aria-haspopup`, `menu`), a.setAttribute(`aria-expanded`, `false`));
            let e = b(`chevron-right`, `neutral`);
            e &&
              (e.setAttribute(
                `class`,
                `-me-0.5 ms-auto size-4.5 shrink-0 text-muted-foreground opacity-80 sm:size-4`,
              ),
              e.setAttribute(`aria-hidden`, `true`),
              (e.dataset.contextMenuChevron = `true`),
              a.appendChild(e));
          }
          if (!o) {
            let o = !1,
              c = !1,
              u = () => {
                let e = o || c;
                ((a.style.background = e
                  ? n
                    ? `color-mix(in srgb, var(--destructive) 10%, transparent)`
                    : `var(--accent)`
                  : `transparent`),
                  (a.style.color = e
                    ? n
                      ? `var(--destructive-foreground)`
                      : `var(--contrast-accent-foreground)`
                    : n
                      ? `var(--destructive-foreground)`
                      : `var(--contrast-foreground)`));
              };
            if (
              (a.addEventListener(`mouseenter`, () => {
                (a.focus({ preventScroll: !0 }), (o = !0), u());
              }),
              a.addEventListener(`mouseleave`, () => {
                ((o = !1), u());
              }),
              a.addEventListener(`focus`, () => {
                ((c = !0), u());
              }),
              a.addEventListener(`blur`, () => {
                ((c = !1), u());
              }),
              e)
            ) {
              let e = (e = !1) => {
                let n = a.getBoundingClientRect(),
                  o = n.right + 4,
                  s = n.top;
                (m(t.children, o, s, r + 1, a), a.setAttribute(`aria-expanded`, `true`));
                let c = i[r + 1];
                if (!c) return;
                let l = c.getBoundingClientRect();
                (l.right > window.innerWidth && x(c, n.left - l.width - 4, n.top),
                  e && [...c.querySelectorAll(`button`)].find((e) => !e.disabled)?.focus());
              };
              (a.addEventListener(`mouseenter`, () => {
                e();
              }),
                a.addEventListener(`click`, (t) => {
                  (t.preventDefault(), e(!0));
                }));
            } else
              (a.addEventListener(`mouseenter`, () => {
                p(r + 1);
              }),
                a.addEventListener(`click`, () => {
                  s && l(t.id);
                }));
          }
          u.appendChild(a);
        }
        (c.appendChild(u),
          c.addEventListener(`mouseenter`, () => {
            p(r + 1);
          }),
          document.body.appendChild(c),
          (i[r] = c),
          (a[r] = o),
          requestAnimationFrame(() => {
            x(c, t, n);
          }));
      };
    (document.addEventListener(`keydown`, u),
      document.addEventListener(`pointerdown`, d, !0),
      document.addEventListener(`contextmenu`, f, !0),
      m(e, t?.x ?? 0, t?.y ?? 0, 0),
      C && C(),
      (C = c),
      requestAnimationFrame(() => {
        s = !0;
      }));
  });
}
var D = `t3code:client-settings:v1`;
function O() {
  return typeof window < `u`;
}
function k() {
  return O() ? t(D, n) : null;
}
function A(t) {
  O() && e(D, t, n);
}
var j;
function M() {
  return {
    dialogs: {
      pickFolder: async (e) => (window.desktopBridge ? window.desktopBridge.pickFolder(e) : null),
      confirm: async (e, t) => m(e, t) ?? !1,
    },
    shell: {
      openExternal: async (e) => {
        if (window.desktopBridge) {
          if (!(await window.desktopBridge.openExternal(e))) throw Error(`Unable to open link.`);
        } else window.open(e, `_blank`, `noopener,noreferrer`);
      },
      openSystemSettings: async (e) => {
        if (
          !window.desktopBridge?.openSystemSettings ||
          !(await window.desktopBridge.openSystemSettings(e))
        )
          throw Error(`Unable to open System Settings.`);
      },
    },
    contextMenu: {
      show: async (e, t) =>
        window.desktopBridge ? window.desktopBridge.showContextMenu(e, t) : E(e, t),
      close: async () => {
        window.desktopBridge || T();
      },
    },
    persistence: {
      getClientSettings: async () =>
        window.desktopBridge ? window.desktopBridge.getClientSettings() : k(),
      setClientSettings: async (e) => {
        if (window.desktopBridge) return window.desktopBridge.setClientSettings(e);
        A(e);
      },
    },
  };
}
function N() {
  return M();
}
function P() {
  if (typeof window < `u`) return j || ((j = N()), j);
}
function F() {
  let e = P();
  if (!e) throw Error(`Local API not found`);
  return e;
}
export { h as a, m as c, _ as i, g as l, P as n, d as o, w as r, p as s, F as t, f as u };
//# sourceMappingURL=localApi-CWy6n-K6.js.map
