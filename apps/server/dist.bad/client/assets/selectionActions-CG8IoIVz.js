function e(e) {
  let { bounds: t, selectionRect: n, pointer: r, viewport: i } = e,
    a = r ?? { x: n?.right ?? t.left + t.width - 140, y: n ? n.bottom + 4 : t.top + 12 };
  return {
    x: Math.max(8, Math.min(Math.max(t.left, a.x), t.left + t.width, i.width - 8)),
    y: Math.max(8, Math.min(Math.max(t.top, a.y), t.top + t.height, i.height - 8)),
  };
}
function t(e, t) {
  let { left: n, top: r, right: i, bottom: a } = e;
  for (let e of t)
    ((n = Math.max(n, e.left)),
      (r = Math.max(r, e.top)),
      (i = Math.min(i, e.right)),
      (a = Math.min(a, e.bottom)));
  return i > n && a > r;
}
function n({
  element: e,
  getActionElement: t,
  restoreAfterScroll: n = !1,
  onSelection: r,
  onDismiss: i,
}) {
  let a = e.ownerDocument,
    o = a.defaultView,
    s = !1,
    c = !1,
    l = !1,
    u = !1,
    d = null,
    f = null,
    p = null,
    m = (e) => e !== null && (t?.()?.contains(e) ?? !1),
    h = () => {
      (f !== null && o.clearTimeout(f), p !== null && o.cancelAnimationFrame(p), (f = p = null));
    },
    g = () => {
      (h(), (s = c = !1), (d = null), (l = !0), (u = !1));
    },
    _ = () => {
      (g(), i(`cancel`));
    },
    v = () => {
      (g(), i(`interaction`));
    },
    y = (e) => {
      ((u = !0),
        h(),
        (f = o.setTimeout(() => {
          ((f = null),
            (p = o.requestAnimationFrame(() => {
              ((p = null), r(d));
            })));
        }, e)));
    },
    b = (n) => {
      if (!n.isPrimary) return;
      if (m(n.target)) {
        g();
        return;
      }
      (h(), (s = n.button === 0));
      let r = e.contains(n.target);
      ((c = !1), (l = !0), (u = !1), (d = null), r ? i(`interaction`) : t?.() && i(`cancel`));
    },
    x = (e) => {
      e.isPrimary &&
        (e.target?.closest(`button, [role=button]`) ||
          ((c = e.button === 0 && !e.defaultPrevented), (l = !c)));
    },
    S = (e) => {
      e.isPrimary && e.button === 0 && (s = !1);
    },
    C = (e) => {
      e.button === 0 &&
        ((s = !1),
        c && ((c = !1), (d = { x: e.clientX, y: e.clientY }), y(e.detail >= 2 ? 500 : 0)));
    },
    w = (e) => {
      (m(e.target) && e.key !== `Escape`) ||
        (e.key === `Escape` ? _() : s || (h(), (c = !1), (d = null), (l = !1)));
    },
    T = (e) => {
      m(e.target) ? g() : !s && t?.() && _();
    },
    E = () => {
      (h(), s || ((d = null), n && !l && u ? y(150) : (l = !0)), i(`cancel`));
    };
  return (
    a.addEventListener(`pointerdown`, b, !0),
    e.addEventListener(`pointerdown`, x),
    o.addEventListener(`pointerup`, S),
    o.addEventListener(`mouseup`, C),
    o.addEventListener(`pointercancel`, _),
    a.addEventListener(`keydown`, w),
    a.addEventListener(`focusin`, T),
    e.addEventListener(`contextmenu`, v, !0),
    e.addEventListener(`scroll`, E, !0),
    o.addEventListener(`blur`, _),
    o.addEventListener(`resize`, _),
    {
      get pending() {
        return f !== null || p !== null;
      },
      cancel: g,
      selectionChanged() {
        m(a.activeElement) || (s || c ? i(`cancel`) : !l && f === null && p === null && y(0));
      },
      dispose() {
        (g(),
          a.removeEventListener(`pointerdown`, b, !0),
          e.removeEventListener(`pointerdown`, x),
          o.removeEventListener(`pointerup`, S),
          o.removeEventListener(`mouseup`, C),
          o.removeEventListener(`pointercancel`, _),
          a.removeEventListener(`keydown`, w),
          a.removeEventListener(`focusin`, T),
          e.removeEventListener(`contextmenu`, v, !0),
          e.removeEventListener(`scroll`, E, !0),
          o.removeEventListener(`blur`, _),
          o.removeEventListener(`resize`, _));
      },
    }
  );
}
export { n, e as r, t };
//# sourceMappingURL=selectionActions-CG8IoIVz.js.map
