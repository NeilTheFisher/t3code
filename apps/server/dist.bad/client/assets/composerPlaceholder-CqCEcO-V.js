import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n, t as r } from "./jsx-runtime-BQExFN_X.js";
import { a as i, o as a } from "./search-BrluOr7L.js";
import { t as o } from "./message-circle-OtEHOhlm.js";
import { t as s } from "./mouse-pointer-click-CD8GgTSR.js";
import {
  At as c,
  Bn as l,
  Cl as u,
  Da as d,
  Dr as f,
  Dt as p,
  Et as m,
  Jv as h,
  Li as g,
  Op as _,
  Ri as v,
  Rl as y,
  Sl as b,
  Tt as x,
  Vn as S,
  Wn as C,
  Zv as w,
  _p as T,
  at as E,
  dp as D,
  dt as ee,
  jt as te,
  lp as ne,
  mm as re,
  mt as ie,
  nt as ae,
  ot as O,
  pt as k,
  rt as oe,
  t as se,
  tt as ce,
  ut as le,
  vp as ue,
  wt as de,
  xp as fe,
  xt as pe,
  y as me,
} from "./utils-CPoejuy5.js";
import {
  A as he,
  D as ge,
  E as _e,
  O as ve,
  S as ye,
  T as be,
  U as A,
  b as xe,
  d as Se,
  i as Ce,
  j as we,
  k as Te,
  n as Ee,
  t as De,
  w as Oe,
  x as ke,
  y as Ae,
} from "./ChatMarkdown-BSLpN1nk.js";
import { G as je, K as Me } from "./useSettings-N-JG2LFZ.js";
import { t as Ne } from "./useStableCallback-XvXMCrxI.js";
import { n as Pe, o as Fe } from "./pierre-icons-apai9Vrm.js";
import {
  i as Ie,
  l as Le,
  n as Re,
  o as ze,
  r as Be,
  s as Ve,
  t as He,
} from "./combobox-HagV04Wz.js";
import {
  a as Ue,
  n as We,
  r as Ge,
  s as Ke,
  t as qe,
} from "./contextPresentationRegistry-bLqqn4rn.js";
import { F as Je, P as Ye } from "./AttachmentImage-CVVc-nYA.js";
import { n as Xe } from "./pullRequestIcons-CfNS1kGB.js";
import { n as Ze, t as Qe } from "./textDirection-fZMxgoU7.js";
import {
  Gn as $e,
  Hs as et,
  Jn as tt,
  Kn as nt,
  Mn as rt,
  Nn as it,
  Qs as at,
  Rn as ot,
  Un as st,
  qn as ct,
} from "./main-BZa0O6xN.js";
var j = n();
function lt(e) {
  return e.replaceAll(`\\`, `/`);
}
function ut(e) {
  let t = new Set();
  return e.filter((e) => {
    let n = e.name.trim().toLowerCase();
    return !t.has(n) && (t.add(n), !0);
  });
}
function dt(e) {
  return e.enabled && e.userInvocable !== !1;
}
function ft(e, t) {
  return t ? ut(e.filter(dt)) : [];
}
function pt(e, t) {
  let n = new Set(t.map((e) => e.name.trim().toLowerCase()));
  return e.filter((e) => !n.has(e.name.trim().toLowerCase()));
}
function M(e) {
  let t = lt(e.path);
  if (t.includes(`/.codex/plugins/`) || t.includes(`/.agents/plugins/`)) return `app`;
  switch (e.scope?.trim().toLowerCase()) {
    case `repo`:
    case `repository`:
      return `repo`;
    case `project`:
    case `workspace`:
    case `local`:
      return `project`;
    case `user`:
    case `personal`:
      return `personal`;
    case `system`:
      return `system`;
    case void 0:
    case ``:
      return `other`;
    default:
      return `other`;
  }
}
function mt(e, t) {
  if (t) return e.workspaceSnapshots?.find((e) => e.cwd === t);
}
function ht(e, t) {
  let n = e && mt(e, t);
  return !(!n || n.slashCommandsPending);
}
function gt(e, t, n) {
  let r = e && mt(e, t);
  return !!(r && !r.slashCommandsPending && re(r, n));
}
function _t(e, t) {
  return mt(e, t)?.skills ?? e.skills;
}
function vt(e, t) {
  return mt(e, t)?.slashCommands ?? e.slashCommands;
}
var yt = Object.defineProperty,
  bt = (e, t) => {
    let n = {};
    for (var r in e) yt(n, r, { get: e[r], enumerable: !0 });
    return (t || yt(n, Symbol.toStringTag, { value: `Module` }), n);
  };
function N(e) {
  this.content = e;
}
((N.prototype = {
  constructor: N,
  find: function (e) {
    for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
    return -1;
  },
  get: function (e) {
    var t = this.find(e);
    return t == -1 ? void 0 : this.content[t + 1];
  },
  update: function (e, t, n) {
    var r = n && n != e ? this.remove(n) : this,
      i = r.find(e),
      a = r.content.slice();
    return (i == -1 ? a.push(n || e, t) : ((a[i + 1] = t), n && (a[i] = n)), new N(a));
  },
  remove: function (e) {
    var t = this.find(e);
    if (t == -1) return this;
    var n = this.content.slice();
    return (n.splice(t, 2), new N(n));
  },
  addToStart: function (e, t) {
    return new N([e, t].concat(this.remove(e).content));
  },
  addToEnd: function (e, t) {
    var n = this.remove(e).content.slice();
    return (n.push(e, t), new N(n));
  },
  addBefore: function (e, t, n) {
    var r = this.remove(t),
      i = r.content.slice(),
      a = r.find(e);
    return (i.splice(a == -1 ? i.length : a, 0, t, n), new N(i));
  },
  forEach: function (e) {
    for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
  },
  prepend: function (e) {
    return ((e = N.from(e)), e.size ? new N(e.content.concat(this.subtract(e).content)) : this);
  },
  append: function (e) {
    return ((e = N.from(e)), e.size ? new N(this.subtract(e).content.concat(e.content)) : this);
  },
  subtract: function (e) {
    var t = this;
    e = N.from(e);
    for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
    return t;
  },
  toObject: function () {
    var e = {};
    return (
      this.forEach(function (t, n) {
        e[t] = n;
      }),
      e
    );
  },
  get size() {
    return this.content.length >> 1;
  },
}),
  (N.from = function (e) {
    if (e instanceof N) return e;
    var t = [];
    if (e) for (var n in e) t.push(n, e[n]);
    return new N(t);
  }));
function xt(e, t, n) {
  for (let r = 0; ; r++) {
    if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
    let i = e.child(r),
      a = t.child(r);
    if (i == a) n += i.nodeSize;
    else {
      if (!i.sameMarkup(a)) return n;
      if (i.isText && i.text != a.text) {
        let e = i.text,
          t = a.text,
          r = 0;
        for (; e[r] == t[r]; r++) n++;
        return (
          r &&
            r < e.length &&
            r < t.length &&
            wt(e.charCodeAt(r - 1)) &&
            Ct(e.charCodeAt(r)) &&
            n--,
          n
        );
      }
      if (i.content.size || a.content.size) {
        let e = xt(i.content, a.content, n + 1);
        if (e != null) return e;
      }
      n += i.nodeSize;
    }
  }
}
function St(e, t, n, r) {
  for (let i = e.childCount, a = t.childCount; ;) {
    if (i == 0 || a == 0) return i == a ? null : { a: n, b: r };
    let o = e.child(--i),
      s = t.child(--a),
      c = o.nodeSize;
    if (o == s) ((n -= c), (r -= c));
    else {
      if (!o.sameMarkup(s)) return { a: n, b: r };
      if (o.isText && o.text != s.text) {
        let e = o.text,
          t = s.text,
          i = e.length,
          a = t.length;
        for (; i > 0 && a > 0 && e[i - 1] == t[a - 1];) (i--, a--, n--, r--);
        return (
          i && a && i < e.length && wt(e.charCodeAt(i - 1)) && Ct(e.charCodeAt(i)) && (n++, r++),
          { a: n, b: r }
        );
      }
      if (o.content.size || s.content.size) {
        let e = St(o.content, s.content, n - 1, r - 1);
        if (e) return e;
      }
      ((n -= c), (r -= c));
    }
  }
}
function Ct(e) {
  return e >= 56320 && e < 57344;
}
function wt(e) {
  return e >= 55296 && e < 56320;
}
var P = class e {
  constructor(e, t) {
    if (((this.content = e), (this.size = t || 0), t == null))
      for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
  }
  nodesBetween(e, t, n, r = 0, i) {
    for (let a = 0, o = 0; o < t; a++) {
      let s = this.content[a],
        c = o + s.nodeSize;
      if (c > e && n(s, r + o, i || null, a) !== !1 && s.content.size) {
        let i = o + 1;
        s.nodesBetween(Math.max(0, e - i), Math.min(s.content.size, t - i), n, r + i);
      }
      o = c;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, n, r) {
    let i = ``,
      a = !0;
    return (
      this.nodesBetween(
        e,
        t,
        (o, s) => {
          let c = o.isText
            ? o.text.slice(Math.max(e, s) - s, t - s)
            : o.isLeaf
              ? r
                ? typeof r == `function`
                  ? r(o)
                  : r
                : o.type.spec.leafText
                  ? o.type.spec.leafText(o)
                  : ``
              : ``;
          (o.isBlock && ((o.isLeaf && c) || o.isTextblock) && n && (a ? (a = !1) : (i += n)),
            (i += c));
        },
        0,
      ),
      i
    );
  }
  append(t) {
    if (!t.size) return this;
    if (!this.size) return t;
    let n = this.lastChild,
      r = t.firstChild,
      i = this.content.slice(),
      a = 0;
    for (
      n.isText && n.sameMarkup(r) && ((i[i.length - 1] = n.withText(n.text + r.text)), (a = 1));
      a < t.content.length;
      a++
    )
      i.push(t.content[a]);
    return new e(i, this.size + t.size);
  }
  cut(t, n = this.size) {
    if (t == 0 && n == this.size) return this;
    let r = [],
      i = 0;
    if (n > t)
      for (let e = 0, a = 0; a < n; e++) {
        let o = this.content[e],
          s = a + o.nodeSize;
        (s > t &&
          ((a < t || s > n) &&
            (o = o.isText
              ? o.cut(Math.max(0, t - a), Math.min(o.text.length, n - a))
              : o.cut(Math.max(0, t - a - 1), Math.min(o.content.size, n - a - 1))),
          r.push(o),
          (i += o.nodeSize)),
          (a = s));
      }
    return new e(r, i);
  }
  cutByIndex(t, n) {
    return t == n
      ? e.empty
      : t == 0 && n == this.content.length
        ? this
        : new e(this.content.slice(t, n));
  }
  replaceChild(t, n) {
    let r = this.content[t];
    if (r == n) return this;
    let i = this.content.slice(),
      a = this.size + n.nodeSize - r.nodeSize;
    return ((i[t] = n), new e(i, a));
  }
  addToStart(t) {
    return new e([t].concat(this.content), this.size + t.nodeSize);
  }
  addToEnd(t) {
    return new e(this.content.concat(t), this.size + t.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length) return !1;
    for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let t = this.content[e];
    if (!t) throw RangeError(`Index ` + e + ` out of range for ` + this);
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let r = this.content[t];
      (e(r, n, t), (n += r.nodeSize));
    }
  }
  findDiffStart(e, t = 0) {
    return xt(this, e, t);
  }
  findDiffEnd(e, t = this.size, n = e.size) {
    return St(this, e, t, n);
  }
  findIndex(e) {
    if (e == 0) return Et(0, e);
    if (e == this.size) return Et(this.content.length, e);
    if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, n = 0; ; t++) {
      let r = this.child(t),
        i = n + r.nodeSize;
      if (i >= e) return i == e ? Et(t + 1, i) : Et(t, n);
      n = i;
    }
  }
  toString() {
    return `<` + this.toStringInner() + `>`;
  }
  toStringInner() {
    return this.content.join(`, `);
  }
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  static fromJSON(t, n) {
    if (!n) return e.empty;
    if (!Array.isArray(n)) throw RangeError(`Invalid input for Fragment.fromJSON`);
    return e.fromArray(n.map(t.nodeFromJSON));
  }
  static fromArray(t) {
    if (!t.length) return e.empty;
    let n,
      r = 0;
    for (let e = 0; e < t.length; e++) {
      let i = t[e];
      ((r += i.nodeSize),
        e && i.isText && t[e - 1].sameMarkup(i)
          ? ((n ||= t.slice(0, e)), (n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)))
          : n && n.push(i));
    }
    return new e(n || t, r);
  }
  static from(t) {
    if (!t) return e.empty;
    if (t instanceof e) return t;
    if (Array.isArray(t)) return this.fromArray(t);
    if (t.attrs) return new e([t], t.nodeSize);
    throw RangeError(
      `Can not convert ` +
        t +
        ` to a Fragment` +
        (t.nodesBetween ? ` (looks like multiple versions of prosemirror-model were loaded)` : ``),
    );
  }
};
P.empty = new P([], 0);
var Tt = { index: 0, offset: 0 };
function Et(e, t) {
  return ((Tt.index = e), (Tt.offset = t), Tt);
}
function Dt(e, t) {
  if (e === t) return !0;
  if (!(e && typeof e == `object`) || !(t && typeof t == `object`)) return !1;
  let n = Array.isArray(e);
  if (Array.isArray(t) != n) return !1;
  if (n) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
  } else {
    for (let n in e) if (!(n in t) || !Dt(e[n], t[n])) return !1;
    for (let n in t) if (!(n in e)) return !1;
  }
  return !0;
}
var F = class e {
  constructor(e, t) {
    ((this.type = e), (this.attrs = t));
  }
  addToSet(e) {
    let t,
      n = !1;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.eq(i)) return e;
      if (this.type.excludes(i.type)) t ||= e.slice(0, r);
      else if (i.type.excludes(this.type)) return e;
      else
        (!n && i.type.rank > this.type.rank && ((t ||= e.slice(0, r)), t.push(this), (n = !0)),
          t && t.push(i));
    }
    return ((t ||= e.slice()), n || t.push(this), t);
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
    return !1;
  }
  eq(e) {
    return this == e || (this.type == e.type && Dt(this.attrs, e.attrs));
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t) throw RangeError(`Invalid input for Mark.fromJSON`);
    let n = e.marks[t.type];
    if (!n) throw RangeError(`There is no mark type ${t.type} in this schema`);
    let r = n.create(t.attrs);
    return (n.checkAttrs(r.attrs), r);
  }
  static sameSet(e, t) {
    if (e == t) return !0;
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
    return !0;
  }
  static setFrom(t) {
    if (!t || (Array.isArray(t) && t.length == 0)) return e.none;
    if (t instanceof e) return [t];
    let n = t.slice();
    return (n.sort((e, t) => e.type.rank - t.type.rank), n);
  }
};
F.none = [];
var Ot = class extends Error {},
  I = class e {
    constructor(e, t, n) {
      ((this.content = e), (this.openStart = t), (this.openEnd = n));
    }
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(t, n) {
      let r = At(this.content, t + this.openStart, n, this.openStart + 1, this.openEnd + 1);
      return r && new e(r, this.openStart, this.openEnd);
    }
    removeBetween(t, n) {
      return new e(
        kt(this.content, t + this.openStart, n + this.openStart),
        this.openStart,
        this.openEnd,
      );
    }
    eq(e) {
      return (
        this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
      );
    }
    toString() {
      return this.content + `(` + this.openStart + `,` + this.openEnd + `)`;
    }
    toJSON() {
      if (!this.content.size) return null;
      let e = { content: this.content.toJSON() };
      return (
        this.openStart > 0 && (e.openStart = this.openStart),
        this.openEnd > 0 && (e.openEnd = this.openEnd),
        e
      );
    }
    static fromJSON(t, n) {
      if (!n) return e.empty;
      let r = n.openStart || 0,
        i = n.openEnd || 0;
      if (typeof r != `number` || typeof i != `number`)
        throw RangeError(`Invalid input for Slice.fromJSON`);
      return new e(P.fromJSON(t, n.content), r, i);
    }
    static maxOpen(t, n = !0) {
      let r = 0,
        i = 0;
      for (let e = t.firstChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.firstChild)
        r++;
      for (let e = t.lastChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.lastChild)
        i++;
      return new e(t, r, i);
    }
  };
I.empty = new I(P.empty, 0, 0);
function kt(e, t, n) {
  let { index: r, offset: i } = e.findIndex(t),
    a = e.maybeChild(r),
    { index: o, offset: s } = e.findIndex(n);
  if (i == t || a.isText) {
    if (s != n && !e.child(o).isText) throw RangeError(`Removing non-flat range`);
    return e.cut(0, t).append(e.cut(n));
  }
  if (r != o) throw RangeError(`Removing non-flat range`);
  return e.replaceChild(r, a.copy(kt(a.content, t - i - 1, n - i - 1)));
}
function At(e, t, n, r, i, a) {
  let { index: o, offset: s } = e.findIndex(t),
    c = e.maybeChild(o);
  if (s == t || c.isText)
    return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n)
      ? null
      : e.cut(0, t).append(n).append(e.cut(t));
  let l = At(c.content, t - s - 1, n, o == 0 ? r - 1 : 0, o == e.childCount - 1 ? i - 1 : 0, c);
  return l && e.replaceChild(o, c.copy(l));
}
function jt(e, t, n) {
  if (n.openStart > e.depth) throw new Ot(`Inserted content deeper than insertion position`);
  if (e.depth - n.openStart != t.depth - n.openEnd) throw new Ot(`Inconsistent open depths`);
  return Mt(e, t, n, 0);
}
function Mt(e, t, n, r) {
  let i = e.index(r),
    a = e.node(r);
  if (i == t.index(r) && r < e.depth - n.openStart) {
    let o = Mt(e, t, n, r + 1);
    return a.copy(a.content.replaceChild(i, o));
  }
  if (!n.content.size) return Lt(a, zt(e, t, r));
  if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
    let r = e.parent,
      i = r.content;
    return Lt(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
  }
  {
    let { start: i, end: o } = Bt(n, e);
    return Lt(a, Rt(e, i, o, t, r));
  }
}
function Nt(e, t) {
  if (!t.type.compatibleContent(e.type))
    throw new Ot(`Cannot join ` + t.type.name + ` onto ` + e.type.name);
}
function Pt(e, t, n) {
  let r = e.node(n);
  return (Nt(r, t.node(n)), r);
}
function Ft(e, t) {
  let n = t.length - 1;
  n >= 0 && e.isText && e.sameMarkup(t[n]) ? (t[n] = e.withText(t[n].text + e.text)) : t.push(e);
}
function It(e, t, n, r) {
  let i = (t || e).node(n),
    a = 0,
    o = t ? t.index(n) : i.childCount;
  e && ((a = e.index(n)), e.depth > n ? a++ : e.textOffset && (Ft(e.nodeAfter, r), a++));
  for (let e = a; e < o; e++) Ft(i.child(e), r);
  t && t.depth == n && t.textOffset && Ft(t.nodeBefore, r);
}
function Lt(e, t) {
  if (!e.type.validContent(t)) throw new Ot(`Invalid content for node ` + e.type.name);
  return e.copy(t);
}
function Rt(e, t, n, r, i) {
  let a = e.depth > i && Pt(e, t, i + 1),
    o = r.depth > i && Pt(n, r, i + 1),
    s = [];
  return (
    It(null, e, i, s),
    a && o && t.index(i) == n.index(i)
      ? (Nt(a, o), Ft(Lt(a, Rt(e, t, n, r, i + 1)), s))
      : (a && Ft(Lt(a, zt(e, t, i + 1)), s), It(t, n, i, s), o && Ft(Lt(o, zt(n, r, i + 1)), s)),
    It(r, null, i, s),
    new P(s)
  );
}
function zt(e, t, n) {
  let r = [];
  return (
    It(null, e, n, r),
    e.depth > n && Ft(Lt(Pt(e, t, n + 1), zt(e, t, n + 1)), r),
    It(t, null, n, r),
    new P(r)
  );
}
function Bt(e, t) {
  let n = t.depth - e.openStart,
    r = t.node(n).copy(e.content);
  for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(P.from(r));
  return {
    start: r.resolveNoCache(e.openStart + n),
    end: r.resolveNoCache(r.content.size - e.openEnd - n),
  };
}
var Vt = class e {
    constructor(e, t, n) {
      ((this.pos = e), (this.path = t), (this.parentOffset = n), (this.depth = t.length / 3 - 1));
    }
    resolveDepth(e) {
      return e == null ? this.depth : e < 0 ? this.depth + e : e;
    }
    get parent() {
      return this.node(this.depth);
    }
    get doc() {
      return this.node(0);
    }
    node(e) {
      return this.path[this.resolveDepth(e) * 3];
    }
    index(e) {
      return this.path[this.resolveDepth(e) * 3 + 1];
    }
    indexAfter(e) {
      return (
        (e = this.resolveDepth(e)), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
      );
    }
    start(e) {
      return ((e = this.resolveDepth(e)), e == 0 ? 0 : this.path[e * 3 - 1] + 1);
    }
    end(e) {
      return ((e = this.resolveDepth(e)), this.start(e) + this.node(e).content.size);
    }
    before(e) {
      if (((e = this.resolveDepth(e)), !e))
        throw RangeError(`There is no position before the top-level node`);
      return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
    }
    after(e) {
      if (((e = this.resolveDepth(e)), !e))
        throw RangeError(`There is no position after the top-level node`);
      return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
    }
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
      let e = this.parent,
        t = this.index(this.depth);
      if (t == e.childCount) return null;
      let n = this.pos - this.path[this.path.length - 1],
        r = e.child(t);
      return n ? e.child(t).cut(n) : r;
    }
    get nodeBefore() {
      let e = this.index(this.depth),
        t = this.pos - this.path[this.path.length - 1];
      return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
    }
    posAtIndex(e, t) {
      t = this.resolveDepth(t);
      let n = this.path[t * 3],
        r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
      for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
      return r;
    }
    marks() {
      let e = this.parent,
        t = this.index();
      if (e.content.size == 0) return F.none;
      if (this.textOffset) return e.child(t).marks;
      let n = e.maybeChild(t - 1),
        r = e.maybeChild(t);
      if (!n) {
        let e = n;
        ((n = r), (r = e));
      }
      let i = n.marks;
      for (var a = 0; a < i.length; a++)
        i[a].type.spec.inclusive !== !1 ||
          (r && i[a].isInSet(r.marks)) ||
          (i = i[a--].removeFromSet(i));
      return i;
    }
    marksAcross(e) {
      let t = this.parent.maybeChild(this.index());
      if (!t || !t.isInline) return null;
      let n = t.marks,
        r = e.parent.maybeChild(e.index());
      for (var i = 0; i < n.length; i++)
        n[i].type.spec.inclusive !== !1 ||
          (r && n[i].isInSet(r.marks)) ||
          (n = n[i--].removeFromSet(n));
      return n;
    }
    sharedDepth(e) {
      for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
      return 0;
    }
    blockRange(e = this, t) {
      if (e.pos < this.pos) return e.blockRange(this);
      for (
        let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0);
        n >= 0;
        n--
      )
        if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new Gt(this, e, n);
      return null;
    }
    sameParent(e) {
      return this.pos - this.parentOffset == e.pos - e.parentOffset;
    }
    max(e) {
      return e.pos > this.pos ? e : this;
    }
    min(e) {
      return e.pos < this.pos ? e : this;
    }
    toString() {
      let e = ``;
      for (let t = 1; t <= this.depth; t++)
        e += (e ? `/` : ``) + this.node(t).type.name + `_` + this.index(t - 1);
      return e + `:` + this.parentOffset;
    }
    static resolve(t, n) {
      if (!(n >= 0 && n <= t.content.size)) throw RangeError(`Position ` + n + ` out of range`);
      let r = [],
        i = 0,
        a = n;
      for (let e = t; ;) {
        let { index: t, offset: n } = e.content.findIndex(a),
          o = a - n;
        if ((r.push(e, t, i + n), !o || ((e = e.child(t)), e.isText))) break;
        ((a = o - 1), (i += n + 1));
      }
      return new e(n, r, a);
    }
    static resolveCached(t, n) {
      let r = Wt.get(t);
      if (r)
        for (let e = 0; e < r.elts.length; e++) {
          let t = r.elts[e];
          if (t.pos == n) return t;
        }
      else Wt.set(t, (r = new Ht()));
      let i = (r.elts[r.i] = e.resolve(t, n));
      return ((r.i = (r.i + 1) % Ut), i);
    }
  },
  Ht = class {
    constructor() {
      ((this.elts = []), (this.i = 0));
    }
  },
  Ut = 12,
  Wt = new WeakMap(),
  Gt = class {
    constructor(e, t, n) {
      ((this.$from = e), (this.$to = t), (this.depth = n));
    }
    get start() {
      return this.$from.before(this.depth + 1);
    }
    get end() {
      return this.$to.after(this.depth + 1);
    }
    get parent() {
      return this.$from.node(this.depth);
    }
    get startIndex() {
      return this.$from.index(this.depth);
    }
    get endIndex() {
      return this.$to.indexAfter(this.depth);
    }
  },
  Kt = Object.create(null),
  qt = class e {
    constructor(e, t, n, r = F.none) {
      ((this.type = e), (this.attrs = t), (this.marks = r), (this.content = n || P.empty));
    }
    get children() {
      return this.content.content;
    }
    get nodeSize() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
    get childCount() {
      return this.content.childCount;
    }
    child(e) {
      return this.content.child(e);
    }
    maybeChild(e) {
      return this.content.maybeChild(e);
    }
    forEach(e) {
      this.content.forEach(e);
    }
    nodesBetween(e, t, n, r = 0) {
      this.content.nodesBetween(e, t, n, r, this);
    }
    descendants(e) {
      this.nodesBetween(0, this.content.size, e);
    }
    get textContent() {
      return this.isLeaf && this.type.spec.leafText
        ? this.type.spec.leafText(this)
        : this.textBetween(0, this.content.size, ``);
    }
    textBetween(e, t, n, r) {
      return this.content.textBetween(e, t, n, r);
    }
    get firstChild() {
      return this.content.firstChild;
    }
    get lastChild() {
      return this.content.lastChild;
    }
    eq(e) {
      return this == e || (this.sameMarkup(e) && this.content.eq(e.content));
    }
    sameMarkup(e) {
      return this.hasMarkup(e.type, e.attrs, e.marks);
    }
    hasMarkup(e, t, n) {
      return (
        this.type == e &&
        Dt(this.attrs, t || e.defaultAttrs || Kt) &&
        F.sameSet(this.marks, n || F.none)
      );
    }
    copy(t = null) {
      return t == this.content ? this : new e(this.type, this.attrs, t, this.marks);
    }
    mark(t) {
      return t == this.marks ? this : new e(this.type, this.attrs, this.content, t);
    }
    cut(e, t = this.content.size) {
      return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
    }
    slice(e, t = this.content.size, n = !1) {
      if (e == t) return I.empty;
      let r = this.resolve(e),
        i = this.resolve(t),
        a = n ? 0 : r.sharedDepth(t),
        o = r.start(a);
      return new I(r.node(a).content.cut(r.pos - o, i.pos - o), r.depth - a, i.depth - a);
    }
    replace(e, t, n) {
      return jt(this.resolve(e), this.resolve(t), n);
    }
    nodeAt(e) {
      for (let t = this; ;) {
        let { index: n, offset: r } = t.content.findIndex(e);
        if (((t = t.maybeChild(n)), !t)) return null;
        if (r == e || t.isText) return t;
        e -= r + 1;
      }
    }
    childAfter(e) {
      let { index: t, offset: n } = this.content.findIndex(e);
      return { node: this.content.maybeChild(t), index: t, offset: n };
    }
    childBefore(e) {
      if (e == 0) return { node: null, index: 0, offset: 0 };
      let { index: t, offset: n } = this.content.findIndex(e);
      if (n < e) return { node: this.content.child(t), index: t, offset: n };
      let r = this.content.child(t - 1);
      return { node: r, index: t - 1, offset: n - r.nodeSize };
    }
    resolve(e) {
      return Vt.resolveCached(this, e);
    }
    resolveNoCache(e) {
      return Vt.resolve(this, e);
    }
    rangeHasMark(e, t, n) {
      let r = !1;
      return (t > e && this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)), r);
    }
    get isBlock() {
      return this.type.isBlock;
    }
    get isTextblock() {
      return this.type.isTextblock;
    }
    get inlineContent() {
      return this.type.inlineContent;
    }
    get isInline() {
      return this.type.isInline;
    }
    get isText() {
      return this.type.isText;
    }
    get isLeaf() {
      return this.type.isLeaf;
    }
    get isAtom() {
      return this.type.isAtom;
    }
    toString() {
      if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
      let e = this.type.name;
      return (
        this.content.size && (e += `(` + this.content.toStringInner() + `)`), Yt(this.marks, e)
      );
    }
    contentMatchAt(e) {
      let t = this.type.contentMatch.matchFragment(this.content, 0, e);
      if (!t) throw Error(`Called contentMatchAt on a node with invalid content`);
      return t;
    }
    canReplace(e, t, n = P.empty, r = 0, i = n.childCount) {
      let a = this.contentMatchAt(e).matchFragment(n, r, i),
        o = a && a.matchFragment(this.content, t);
      if (!o || !o.validEnd) return !1;
      for (let e = r; e < i; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
      return !0;
    }
    canReplaceWith(e, t, n, r) {
      if (r && !this.type.allowsMarks(r)) return !1;
      let i = this.contentMatchAt(e).matchType(n),
        a = i && i.matchFragment(this.content, t);
      return a ? a.validEnd : !1;
    }
    canAppend(e) {
      return e.content.size
        ? this.canReplace(this.childCount, this.childCount, e.content)
        : this.type.compatibleContent(e.type);
    }
    check() {
      (this.type.checkContent(this.content), this.type.checkAttrs(this.attrs));
      let e = F.none;
      for (let t = 0; t < this.marks.length; t++) {
        let n = this.marks[t];
        (n.type.checkAttrs(n.attrs), (e = n.addToSet(e)));
      }
      if (!F.sameSet(e, this.marks))
        throw RangeError(
          `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`,
        );
      this.content.forEach((e) => e.check());
    }
    toJSON() {
      let e = { type: this.type.name };
      for (let t in this.attrs) {
        e.attrs = this.attrs;
        break;
      }
      return (
        this.content.size && (e.content = this.content.toJSON()),
        this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())),
        e
      );
    }
    static fromJSON(e, t) {
      if (!t) throw RangeError(`Invalid input for Node.fromJSON`);
      let n;
      if (t.marks) {
        if (!Array.isArray(t.marks)) throw RangeError(`Invalid mark data for Node.fromJSON`);
        n = t.marks.map(e.markFromJSON);
      }
      if (t.type == `text`) {
        if (typeof t.text != `string`) throw RangeError(`Invalid text node in JSON`);
        return e.text(t.text, n);
      }
      let r = P.fromJSON(e, t.content),
        i = e.nodeType(t.type).create(t.attrs, r, n);
      return (i.type.checkAttrs(i.attrs), i);
    }
  };
qt.prototype.text = void 0;
var Jt = class e extends qt {
  constructor(e, t, n, r) {
    if ((super(e, t, null, r), !n)) throw RangeError(`Empty text nodes are not allowed`);
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString
      ? this.type.spec.toDebugString(this)
      : Yt(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(t) {
    return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
  }
  withText(t) {
    return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return ((e.text = this.text), e);
  }
};
function Yt(e, t) {
  for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + `(` + t + `)`;
  return t;
}
var Xt = class e {
  constructor(e) {
    ((this.validEnd = e), (this.next = []), (this.wrapCache = []));
  }
  static parse(t, n) {
    let r = new Zt(t, n);
    if (r.next == null) return e.empty;
    let i = Qt(r);
    r.next && r.err(`Unexpected trailing text`);
    let a = ln(on(i));
    return (un(a, r), a);
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
    return null;
  }
  matchFragment(e, t = 0, n = e.childCount) {
    let r = this;
    for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
    return r;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs())) return t;
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
    return !1;
  }
  fillBefore(e, t = !1, n = 0) {
    let r = [this];
    function i(a, o) {
      let s = a.matchFragment(e, n);
      if (s && (!t || s.validEnd)) return P.from(o.map((e) => e.createAndFill()));
      for (let e = 0; e < a.next.length; e++) {
        let { type: t, next: n } = a.next[e];
        if (!(t.isText || t.hasRequiredAttrs()) && r.indexOf(n) == -1) {
          r.push(n);
          let e = i(n, o.concat(t));
          if (e) return e;
        }
      }
      return null;
    }
    return i(this, []);
  }
  findWrapping(e) {
    for (let t = 0; t < this.wrapCache.length; t += 2)
      if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
    let t = this.computeWrapping(e);
    return (this.wrapCache.push(e, t), t);
  }
  computeWrapping(e) {
    let t = Object.create(null),
      n = [{ match: this, type: null, via: null }];
    for (; n.length;) {
      let r = n.shift(),
        i = r.match;
      if (i.matchType(e)) {
        let e = [];
        for (let t = r; t.type; t = t.via) e.push(t.type);
        return e.reverse();
      }
      for (let e = 0; e < i.next.length; e++) {
        let { type: a, next: o } = i.next[e];
        a.isLeaf ||
          a.hasRequiredAttrs() ||
          a.name in t ||
          (r.type && !o.validEnd) ||
          (n.push({ match: a.contentMatch, type: a, via: r }), (t[a.name] = !0));
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length) throw RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let r = 0; r < n.next.length; r++) e.indexOf(n.next[r].next) == -1 && t(n.next[r].next);
    }
    return (
      t(this),
      e.map((t, n) => {
        let r = n + (t.validEnd ? `*` : ` `) + ` `;
        for (let n = 0; n < t.next.length; n++)
          r += (n ? `, ` : ``) + t.next[n].type.name + `->` + e.indexOf(t.next[n].next);
        return r;
      }).join(`
`)
    );
  }
};
Xt.empty = new Xt(!0);
var Zt = class {
  constructor(e, t) {
    ((this.string = e),
      (this.nodeTypes = t),
      (this.inline = null),
      (this.pos = 0),
      (this.tokens = e.split(/\s*(?=\b|\W|$)/)),
      this.tokens[this.tokens.length - 1] == `` && this.tokens.pop(),
      this.tokens[0] == `` && this.tokens.shift());
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw SyntaxError(e + ` (in content expression '` + this.string + `')`);
  }
};
function Qt(e) {
  let t = [];
  do t.push($t(e));
  while (e.eat(`|`));
  return t.length == 1 ? t[0] : { type: `choice`, exprs: t };
}
function $t(e) {
  let t = [];
  do t.push(en(e));
  while (e.next && e.next != `)` && e.next != `|`);
  return t.length == 1 ? t[0] : { type: `seq`, exprs: t };
}
function en(e) {
  let t = an(e);
  for (;;)
    if (e.eat(`+`)) t = { type: `plus`, expr: t };
    else if (e.eat(`*`)) t = { type: `star`, expr: t };
    else if (e.eat(`?`)) t = { type: `opt`, expr: t };
    else if (e.eat(`{`)) t = nn(e, t);
    else break;
  return t;
}
function tn(e) {
  /\D/.test(e.next) && e.err(`Expected number, got '` + e.next + `'`);
  let t = Number(e.next);
  return (e.pos++, t);
}
function nn(e, t) {
  let n = tn(e),
    r = n;
  return (
    e.eat(`,`) && (r = e.next == `}` ? -1 : tn(e)),
    e.eat(`}`) || e.err(`Unclosed braced range`),
    { type: `range`, min: n, max: r, expr: t }
  );
}
function rn(e, t) {
  let n = e.nodeTypes,
    r = n[t];
  if (r) return [r];
  let i = [];
  for (let e in n) {
    let r = n[e];
    r.isInGroup(t) && i.push(r);
  }
  return (i.length == 0 && e.err(`No node type or group '` + t + `' found`), i);
}
function an(e) {
  if (e.eat(`(`)) {
    let t = Qt(e);
    return (e.eat(`)`) || e.err(`Missing closing paren`), t);
  }
  if (/\W/.test(e.next)) e.err(`Unexpected token '` + e.next + `'`);
  else {
    let t = rn(e, e.next).map(
      (t) => (
        e.inline == null
          ? (e.inline = t.isInline)
          : e.inline != t.isInline && e.err(`Mixing inline and block content`),
        { type: `name`, value: t }
      ),
    );
    return (e.pos++, t.length == 1 ? t[0] : { type: `choice`, exprs: t });
  }
}
function on(e) {
  let t = [[]];
  return (i(a(e, 0), n()), t);
  function n() {
    return t.push([]) - 1;
  }
  function r(e, n, r) {
    let i = { term: r, to: n };
    return (t[e].push(i), i);
  }
  function i(e, t) {
    e.forEach((e) => (e.to = t));
  }
  function a(e, t) {
    if (e.type == `choice`) return e.exprs.reduce((e, n) => e.concat(a(n, t)), []);
    if (e.type == `seq`)
      for (let r = 0; ; r++) {
        let o = a(e.exprs[r], t);
        if (r == e.exprs.length - 1) return o;
        i(o, (t = n()));
      }
    else if (e.type == `star`) {
      let o = n();
      return (r(t, o), i(a(e.expr, o), o), [r(o)]);
    } else if (e.type == `plus`) {
      let o = n();
      return (i(a(e.expr, t), o), i(a(e.expr, o), o), [r(o)]);
    } else if (e.type == `opt`) return [r(t)].concat(a(e.expr, t));
    else if (e.type == `range`) {
      let o = t;
      for (let t = 0; t < e.min; t++) {
        let t = n();
        (i(a(e.expr, o), t), (o = t));
      }
      if (e.max == -1) i(a(e.expr, o), o);
      else
        for (let t = e.min; t < e.max; t++) {
          let t = n();
          (r(o, t), i(a(e.expr, o), t), (o = t));
        }
      return [r(o)];
    } else if (e.type == `name`) return [r(t, void 0, e.value)];
    else throw Error(`Unknown expr type`);
  }
}
function sn(e, t) {
  return t - e;
}
function cn(e, t) {
  let n = [];
  return (r(t), n.sort(sn));
  function r(t) {
    let i = e[t];
    if (i.length == 1 && !i[0].term) return r(i[0].to);
    n.push(t);
    for (let e = 0; e < i.length; e++) {
      let { term: t, to: a } = i[e];
      !t && n.indexOf(a) == -1 && r(a);
    }
  }
}
function ln(e) {
  let t = Object.create(null);
  return n(cn(e, 0));
  function n(r) {
    let i = [];
    r.forEach((t) => {
      e[t].forEach(({ term: t, to: n }) => {
        if (!t) return;
        let r;
        for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
        cn(e, n).forEach((e) => {
          (r || i.push([t, (r = [])]), r.indexOf(e) == -1 && r.push(e));
        });
      });
    });
    let a = (t[r.join(`,`)] = new Xt(r.indexOf(e.length - 1) > -1));
    for (let e = 0; e < i.length; e++) {
      let r = i[e][1].sort(sn);
      a.next.push({ type: i[e][0], next: t[r.join(`,`)] || n(r) });
    }
    return a;
  }
}
function un(e, t) {
  for (let n = 0, r = [e]; n < r.length; n++) {
    let e = r[n],
      i = !e.validEnd,
      a = [];
    for (let t = 0; t < e.next.length; t++) {
      let { type: n, next: o } = e.next[t];
      (a.push(n.name),
        i && !(n.isText || n.hasRequiredAttrs()) && (i = !1),
        r.indexOf(o) == -1 && r.push(o));
    }
    i &&
      t.err(
        `Only non-generatable nodes (` +
          a.join(`, `) +
          `) in a required position (see https://prosemirror.net/docs/guide/#generatable)`,
      );
  }
}
function dn(e) {
  let t = Object.create(null);
  for (let n in e) {
    let r = e[n];
    if (!r.hasDefault) return null;
    t[n] = r.default;
  }
  return t;
}
function fn(e, t) {
  let n = Object.create(null);
  for (let r in e) {
    let i = t && t[r];
    if (i === void 0) {
      let t = e[r];
      if (t.hasDefault) i = t.default;
      else throw RangeError(`No value supplied for attribute ` + r);
    }
    n[r] = i;
  }
  return n;
}
function pn(e, t, n, r) {
  for (let i in t)
    if (!(i in e)) throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
  for (let n in e) e[n].validate && e[n].validate(t[n]);
}
function mn(e, t) {
  let n = Object.create(null);
  if (t) for (let r in t) n[r] = new _n(e, r, t[r]);
  return n;
}
var hn = class e {
  constructor(e, t, n) {
    ((this.name = e),
      (this.schema = t),
      (this.spec = n),
      (this.markSet = null),
      (this.groups = n.group ? n.group.split(` `) : []),
      (this.attrs = mn(e, n.attrs)),
      (this.defaultAttrs = dn(this.attrs)),
      (this.contentMatch = null),
      (this.inlineContent = null),
      (this.isBlock = !(n.inline || e == `text`)),
      (this.isText = e == `text`));
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == Xt.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? `pre` : `normal`);
  }
  hasRequiredAttrs() {
    for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
    return !1;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : fn(this.attrs, e);
  }
  create(e = null, t, n) {
    if (this.isText) throw Error(`NodeType.create can't construct text nodes`);
    return new qt(this, this.computeAttrs(e), P.from(t), F.setFrom(n));
  }
  createChecked(e = null, t, n) {
    return (
      (t = P.from(t)), this.checkContent(t), new qt(this, this.computeAttrs(e), t, F.setFrom(n))
    );
  }
  createAndFill(e = null, t, n) {
    if (((e = this.computeAttrs(e)), (t = P.from(t)), t.size)) {
      let e = this.contentMatch.fillBefore(t);
      if (!e) return null;
      t = e.append(t);
    }
    let r = this.contentMatch.matchFragment(t),
      i = r && r.fillBefore(P.empty, !0);
    return i ? new qt(this, e, t.append(i), F.setFrom(n)) : null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd) return !1;
    for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
    return !0;
  }
  checkContent(e) {
    if (!this.validContent(e))
      throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  checkAttrs(e) {
    pn(this.attrs, e, `node`, this.name);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null) return !0;
    for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
    return !0;
  }
  allowedMarks(e) {
    if (this.markSet == null) return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : (t ||= e.slice(0, n));
    return t ? (t.length ? t : F.none) : e;
  }
  static compile(t, n) {
    let r = Object.create(null);
    t.forEach((t, i) => (r[t] = new e(t, n, i)));
    let i = n.spec.topNode || `doc`;
    if (!r[i]) throw RangeError(`Schema is missing its top node type ('` + i + `')`);
    if (!r.text) throw RangeError(`Every schema needs a 'text' type`);
    for (let e in r.text.attrs) throw RangeError(`The text node type should not have attributes`);
    return r;
  }
};
function gn(e, t, n) {
  let r = n.split(`|`);
  return (n) => {
    let i = n === null ? `null` : typeof n;
    if (r.indexOf(i) < 0)
      throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
  };
}
var _n = class {
    constructor(e, t, n) {
      ((this.hasDefault = Object.prototype.hasOwnProperty.call(n, `default`)),
        (this.default = n.default),
        (this.validate = typeof n.validate == `string` ? gn(e, t, n.validate) : n.validate));
    }
    get isRequired() {
      return !this.hasDefault;
    }
  },
  vn = class e {
    constructor(e, t, n, r) {
      ((this.name = e),
        (this.rank = t),
        (this.schema = n),
        (this.spec = r),
        (this.attrs = mn(e, r.attrs)),
        (this.excluded = null));
      let i = dn(this.attrs);
      this.instance = i ? new F(this, i) : null;
    }
    create(e = null) {
      return !e && this.instance ? this.instance : new F(this, fn(this.attrs, e));
    }
    static compile(t, n) {
      let r = Object.create(null),
        i = 0;
      return (t.forEach((t, a) => (r[t] = new e(t, i++, n, a))), r);
    }
    removeFromSet(e) {
      for (var t = 0; t < e.length; t++)
        e[t].type == this && ((e = e.slice(0, t).concat(e.slice(t + 1))), t--);
      return e;
    }
    isInSet(e) {
      for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
    }
    checkAttrs(e) {
      pn(this.attrs, e, `mark`, this.name);
    }
    excludes(e) {
      return this.excluded.indexOf(e) > -1;
    }
  },
  yn = class {
    constructor(e) {
      ((this.linebreakReplacement = null), (this.cached = Object.create(null)));
      let t = (this.spec = {});
      for (let n in e) t[n] = e[n];
      ((t.nodes = N.from(e.nodes)),
        (t.marks = N.from(e.marks || {})),
        (this.nodes = hn.compile(this.spec.nodes, this)),
        (this.marks = vn.compile(this.spec.marks, this)));
      let n = Object.create(null);
      for (let e in this.nodes) {
        if (e in this.marks) throw RangeError(e + ` can not be both a node and a mark`);
        let t = this.nodes[e],
          r = t.spec.content || ``,
          i = t.spec.marks;
        if (
          ((t.contentMatch = n[r] || (n[r] = Xt.parse(r, this.nodes))),
          (t.inlineContent = t.contentMatch.inlineContent),
          t.spec.linebreakReplacement)
        ) {
          if (this.linebreakReplacement) throw RangeError(`Multiple linebreak nodes defined`);
          if (!t.isInline || !t.isLeaf)
            throw RangeError(`Linebreak replacement nodes must be inline leaf nodes`);
          this.linebreakReplacement = t;
        }
        t.markSet =
          i == `_` ? null : i ? bn(this, i.split(` `)) : i == `` || !t.inlineContent ? [] : null;
      }
      for (let e in this.marks) {
        let t = this.marks[e],
          n = t.spec.excludes;
        t.excluded = n == null ? [t] : n == `` ? [] : bn(this, n.split(` `));
      }
      ((this.nodeFromJSON = (e) => qt.fromJSON(this, e)),
        (this.markFromJSON = (e) => F.fromJSON(this, e)),
        (this.topNodeType = this.nodes[this.spec.topNode || `doc`]),
        (this.cached.wrappings = Object.create(null)));
    }
    node(e, t = null, n, r) {
      if (typeof e == `string`) e = this.nodeType(e);
      else if (!(e instanceof hn)) throw RangeError(`Invalid node type: ` + e);
      else if (e.schema != this)
        throw RangeError(`Node type from different schema used (` + e.name + `)`);
      return e.createChecked(t, n, r);
    }
    text(e, t) {
      let n = this.nodes.text;
      return new Jt(n, n.defaultAttrs, e, F.setFrom(t));
    }
    mark(e, t) {
      return (typeof e == `string` && (e = this.marks[e]), e.create(t));
    }
    nodeType(e) {
      let t = this.nodes[e];
      if (!t) throw RangeError(`Unknown node type: ` + e);
      return t;
    }
  };
function bn(e, t) {
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r],
      a = e.marks[i],
      o = a;
    if (a) n.push(a);
    else
      for (let t in e.marks) {
        let r = e.marks[t];
        (i == `_` || (r.spec.group && r.spec.group.split(` `).indexOf(i) > -1)) && n.push((o = r));
      }
    if (!o) throw SyntaxError(`Unknown mark type: '` + t[r] + `'`);
  }
  return n;
}
function xn(e) {
  return e.tag != null;
}
function Sn(e) {
  return e.style != null;
}
var Cn = class e {
    constructor(e, t) {
      ((this.schema = e), (this.rules = t), (this.tags = []), (this.styles = []));
      let n = (this.matchedStyles = []);
      (t.forEach((e) => {
        if (xn(e)) this.tags.push(e);
        else if (Sn(e)) {
          let t = /[^=]*/.exec(e.style)[0];
          (n.indexOf(t) < 0 && n.push(t), this.styles.push(e));
        }
      }),
        (this.normalizeLists = !this.tags.some((t) => {
          if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
          let n = e.nodes[t.node];
          return n.contentMatch.matchType(n);
        })));
    }
    parse(e, t = {}) {
      let n = new Mn(this, t, !1);
      return (n.addAll(e, F.none, t.from, t.to), n.finish());
    }
    parseSlice(e, t = {}) {
      let n = new Mn(this, t, !0);
      return (n.addAll(e, F.none, t.from, t.to), I.maxOpen(n.finish()));
    }
    matchTag(e, t, n) {
      for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
        let n = this.tags[r];
        if (
          Pn(e, n.tag) &&
          (n.namespace === void 0 || e.namespaceURI == n.namespace) &&
          (!n.context || t.matchesContext(n.context))
        ) {
          if (n.getAttrs) {
            let t = n.getAttrs(e);
            if (t === !1) continue;
            n.attrs = t || void 0;
          }
          return n;
        }
      }
    }
    matchStyle(e, t, n, r) {
      for (let i = r ? this.styles.indexOf(r) + 1 : 0; i < this.styles.length; i++) {
        let r = this.styles[i],
          a = r.style;
        if (
          !(
            a.indexOf(e) != 0 ||
            (r.context && !n.matchesContext(r.context)) ||
            (a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))
          )
        ) {
          if (r.getAttrs) {
            let e = r.getAttrs(t);
            if (e === !1) continue;
            r.attrs = e || void 0;
          }
          return r;
        }
      }
    }
    static schemaRules(e) {
      let t = [];
      function n(e) {
        let n = e.priority == null ? 50 : e.priority,
          r = 0;
        for (; r < t.length; r++) {
          let e = t[r];
          if ((e.priority == null ? 50 : e.priority) < n) break;
        }
        t.splice(r, 0, e);
      }
      for (let t in e.marks) {
        let r = e.marks[t].spec.parseDOM;
        r &&
          r.forEach((e) => {
            (n((e = Fn(e))), e.mark || e.ignore || e.clearMark || (e.mark = t));
          });
      }
      for (let t in e.nodes) {
        let r = e.nodes[t].spec.parseDOM;
        r &&
          r.forEach((e) => {
            (n((e = Fn(e))), e.node || e.ignore || e.mark || (e.node = t));
          });
      }
      return t;
    }
    static fromSchema(t) {
      return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
    }
  },
  wn = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    body: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0,
  },
  Tn = { head: !0, noscript: !0, object: !0, script: !0, style: !0, title: !0 },
  En = { ol: !0, ul: !0 },
  Dn = 1,
  On = 2,
  kn = 4;
function An(e, t, n) {
  return t == null
    ? e && e.whitespace == `pre`
      ? 3
      : n & -5
    : (t ? Dn : 0) | (t === `full` ? On : 0);
}
var jn = class {
    constructor(e, t, n, r, i, a) {
      ((this.type = e),
        (this.attrs = t),
        (this.marks = n),
        (this.solid = r),
        (this.options = a),
        (this.content = []),
        (this.activeMarks = F.none),
        (this.match = i || (a & kn ? null : e.contentMatch)));
    }
    findWrapping(e) {
      if (!this.match) {
        if (!this.type) return [];
        let t = this.type.contentMatch.fillBefore(P.from(e));
        if (t) this.match = this.type.contentMatch.matchFragment(t);
        else {
          let t = this.type.contentMatch,
            n;
          return (n = t.findWrapping(e.type)) ? ((this.match = t), n) : null;
        }
      }
      return this.match.findWrapping(e.type);
    }
    finish(e) {
      if (!(this.options & Dn)) {
        let e = this.content[this.content.length - 1],
          t;
        if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
          let n = e;
          e.text.length == t[0].length
            ? this.content.pop()
            : (this.content[this.content.length - 1] = n.withText(
                n.text.slice(0, n.text.length - t[0].length),
              ));
        }
      }
      let t = P.from(this.content);
      return (
        !e && this.match && (t = t.append(this.match.fillBefore(P.empty, !0))),
        this.type ? this.type.create(this.attrs, t, this.marks) : t
      );
    }
    inlineContext(e) {
      return this.type
        ? this.type.inlineContent
        : this.content.length
          ? this.content[0].isInline
          : e.parentNode && !wn.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
    }
  },
  Mn = class {
    constructor(e, t, n) {
      ((this.parser = e),
        (this.options = t),
        (this.isOpen = n),
        (this.open = 0),
        (this.localPreserveWS = !1));
      let r = t.topNode,
        i,
        a = An(null, t.preserveWhitespace, 0) | (n ? kn : 0);
      ((i = r
        ? new jn(r.type, r.attrs, F.none, !0, t.topMatch || r.type.contentMatch, a)
        : n
          ? new jn(null, null, F.none, !0, null, a)
          : new jn(e.schema.topNodeType, null, F.none, !0, null, a)),
        (this.nodes = [i]),
        (this.find = t.findPositions),
        (this.needsBlock = !1));
    }
    get top() {
      return this.nodes[this.open];
    }
    addDOM(e, t) {
      e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
    }
    addTextNode(e, t) {
      let n = e.nodeValue,
        r = this.top,
        i = r.options & On ? `full` : this.localPreserveWS || (r.options & Dn) > 0,
        { schema: a } = this.parser;
      if (i === `full` || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
        if (!i) {
          if (
            ((n = n.replace(/[ \t\r\n\u000c]+/g, ` `)),
            /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1)
          ) {
            let t = r.content[r.content.length - 1],
              i = e.previousSibling;
            (!t || (i && i.nodeName == `BR`) || (t.isText && /[ \t\r\n\u000c]$/.test(t.text))) &&
              (n = n.slice(1));
          }
        } else if (i === `full`)
          n = n.replace(
            /\r\n?/g,
            `
`,
          );
        else if (
          a.linebreakReplacement &&
          /[\r\n]/.test(n) &&
          this.top.findWrapping(a.linebreakReplacement.create())
        ) {
          let e = n.split(/\r?\n|\r/);
          for (let n = 0; n < e.length; n++)
            (n && this.insertNode(a.linebreakReplacement.create(), t, !0),
              e[n] && this.insertNode(a.text(e[n]), t, !/\S/.test(e[n])));
          n = ``;
        } else n = n.replace(/\r?\n|\r/g, ` `);
        (n && this.insertNode(a.text(n), t, !/\S/.test(n)), this.findInText(e));
      } else this.findInside(e);
    }
    addElement(e, t, n) {
      let r = this.localPreserveWS,
        i = this.top;
      (e.tagName == `PRE` || /pre/.test(e.style && e.style.whiteSpace)) &&
        (this.localPreserveWS = !0);
      let a = e.nodeName.toLowerCase(),
        o;
      En.hasOwnProperty(a) && this.parser.normalizeLists && Nn(e);
      let s =
        (this.options.ruleFromNode && this.options.ruleFromNode(e)) ||
        (o = this.parser.matchTag(e, this, n));
      out: if (s ? s.ignore : Tn.hasOwnProperty(a)) (this.findInside(e), this.ignoreFallback(e, t));
      else if (!s || s.skip || s.closeParent) {
        s && s.closeParent
          ? (this.open = Math.max(0, this.open - 1))
          : s && s.skip.nodeType && (e = s.skip);
        let n,
          r = this.needsBlock;
        if (wn.hasOwnProperty(a))
          (i.content.length && i.content[0].isInline && this.open && (this.open--, (i = this.top)),
            (n = !0),
            i.type || (this.needsBlock = !0));
        else if (!e.firstChild) {
          this.leafFallback(e, t);
          break out;
        }
        let o = s && s.skip ? t : this.readStyles(e, t);
        (o && this.addAll(e, o), n && this.sync(i), (this.needsBlock = r));
      } else {
        let n = this.readStyles(e, t);
        n && this.addElementByRule(e, s, n, s.consuming === !1 ? o : void 0);
      }
      this.localPreserveWS = r;
    }
    leafFallback(e, t) {
      e.nodeName == `BR` &&
        this.top.type &&
        this.top.type.inlineContent &&
        this.addTextNode(
          e.ownerDocument.createTextNode(`
`),
          t,
        );
    }
    ignoreFallback(e, t) {
      e.nodeName != `BR` ||
        (this.top.type && this.top.type.inlineContent) ||
        this.findPlace(this.parser.schema.text(`-`), t, !0);
    }
    readStyles(e, t) {
      let n = e.style;
      if (n && n.length)
        for (let e = 0; e < this.parser.matchedStyles.length; e++) {
          let r = this.parser.matchedStyles[e],
            i = n.getPropertyValue(r);
          if (i)
            for (let e; ;) {
              let n = this.parser.matchStyle(r, i, this, e);
              if (!n) break;
              if (n.ignore) return null;
              if (
                ((t = n.clearMark
                  ? t.filter((e) => !n.clearMark(e))
                  : t.concat(this.parser.schema.marks[n.mark].create(n.attrs))),
                n.consuming === !1)
              )
                e = n;
              else break;
            }
        }
      return t;
    }
    addElementByRule(e, t, n, r) {
      let i, a;
      if (t.node) {
        if (((a = this.parser.schema.nodes[t.node]), a.isLeaf))
          this.insertNode(a.create(t.attrs), n, e.nodeName == `BR`) || this.leafFallback(e, n);
        else {
          let e = this.enter(a, t.attrs || null, n, t.preserveWhitespace);
          e && ((i = !0), (n = e));
        }
      } else {
        let e = this.parser.schema.marks[t.mark];
        n = n.concat(e.create(t.attrs));
      }
      let o = this.top;
      if (a && a.isLeaf) this.findInside(e);
      else if (r) this.addElement(e, n, r);
      else if (t.getContent)
        (this.findInside(e),
          t.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e, n, !1)));
      else {
        let r = e;
        (typeof t.contentElement == `string`
          ? (r = e.querySelector(t.contentElement))
          : typeof t.contentElement == `function`
            ? (r = t.contentElement(e))
            : t.contentElement && (r = t.contentElement),
          this.findAround(e, r, !0),
          this.addAll(r, n),
          this.findAround(e, r, !1));
      }
      i && this.sync(o) && this.open--;
    }
    addAll(e, t, n, r) {
      let i = n || 0;
      for (
        let a = n ? e.childNodes[n] : e.firstChild, o = r == null ? null : e.childNodes[r];
        a != o;
        a = a.nextSibling, ++i
      )
        (this.findAtPoint(e, i), this.addDOM(a, t));
      this.findAtPoint(e, i);
    }
    findPlace(e, t, n) {
      let r, i;
      for (let t = this.open, a = 0; t >= 0; t--) {
        let o = this.nodes[t],
          s = o.findWrapping(e);
        if (s && (!r || r.length > s.length + a) && ((r = s), (i = o), !s.length)) break;
        if (o.solid) {
          if (n) break;
          a += 2;
        }
      }
      if (!r) return null;
      this.sync(i);
      for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
      return t;
    }
    insertNode(e, t, n) {
      if (e.isInline && this.needsBlock && !this.top.type) {
        let e = this.textblockFromContext();
        e && (t = this.enterInner(e, null, t));
      }
      let r = this.findPlace(e, t, n);
      if (r) {
        this.closeExtra();
        let t = this.top;
        t.match &&= t.match.matchType(e.type);
        let n = F.none;
        for (let i of r.concat(e.marks))
          (t.type ? t.type.allowsMarkType(i.type) : In(i.type, e.type)) && (n = i.addToSet(n));
        return (t.content.push(e.mark(n)), !0);
      }
      return !1;
    }
    enter(e, t, n, r) {
      let i = this.findPlace(e.create(t), n, !1);
      return ((i &&= this.enterInner(e, t, n, !0, r)), i);
    }
    enterInner(e, t, n, r = !1, i) {
      this.closeExtra();
      let a = this.top;
      a.match = a.match && a.match.matchType(e);
      let o = An(e, i, a.options);
      a.options & kn && a.content.length == 0 && (o |= kn);
      let s = F.none;
      return (
        (n = n.filter(
          (t) =>
            !(a.type ? a.type.allowsMarkType(t.type) : In(t.type, e)) || ((s = t.addToSet(s)), !1),
        )),
        this.nodes.push(new jn(e, t, s, r, null, o)),
        this.open++,
        n
      );
    }
    closeExtra(e = !1) {
      let t = this.nodes.length - 1;
      if (t > this.open) {
        for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
        this.nodes.length = this.open + 1;
      }
    }
    finish() {
      return (
        (this.open = 0),
        this.closeExtra(this.isOpen),
        this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
      );
    }
    sync(e) {
      for (let t = this.open; t >= 0; t--)
        if (this.nodes[t] == e) return ((this.open = t), !0);
        else this.localPreserveWS && (this.nodes[t].options |= Dn);
      return !1;
    }
    get currentPos() {
      this.closeExtra();
      let e = 0;
      for (let t = this.open; t >= 0; t--) {
        let n = this.nodes[t].content;
        for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
        t && e++;
      }
      return e;
    }
    findAtPoint(e, t) {
      if (this.find)
        for (let n = 0; n < this.find.length; n++)
          this.find[n].node == e &&
            this.find[n].offset == t &&
            (this.find[n].pos = this.currentPos);
    }
    findInside(e) {
      if (this.find)
        for (let t = 0; t < this.find.length; t++)
          this.find[t].pos == null &&
            e.nodeType == 1 &&
            e.contains(this.find[t].node) &&
            (this.find[t].pos = this.currentPos);
    }
    findAround(e, t, n) {
      if (e != t && this.find)
        for (let r = 0; r < this.find.length; r++)
          this.find[r].pos == null &&
            e.nodeType == 1 &&
            e.contains(this.find[r].node) &&
            t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
            (this.find[r].pos = this.currentPos);
    }
    findInText(e) {
      if (this.find)
        for (let t = 0; t < this.find.length; t++)
          this.find[t].node == e &&
            (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
    matchesContext(e) {
      if (e.indexOf(`|`) > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
      let t = e.split(`/`),
        n = this.options.context,
        r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
        i = -(n ? n.depth + 1 : 0) + +!r,
        a = (e, o) => {
          for (; e >= 0; e--) {
            let s = t[e];
            if (s == ``) {
              if (e == t.length - 1 || e == 0) continue;
              for (; o >= i; o--) if (a(e - 1, o)) return !0;
              return !1;
            }
            {
              let e =
                o > 0 || (o == 0 && r)
                  ? this.nodes[o].type
                  : n && o >= i
                    ? n.node(o - i).type
                    : null;
              if (!e || (e.name != s && !e.isInGroup(s))) return !1;
              o--;
            }
          }
          return !0;
        };
      return a(t.length - 1, this.open);
    }
    textblockFromContext() {
      let e = this.options.context;
      if (e)
        for (let t = e.depth; t >= 0; t--) {
          let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
          if (n && n.isTextblock && n.defaultAttrs) return n;
        }
      for (let e in this.parser.schema.nodes) {
        let t = this.parser.schema.nodes[e];
        if (t.isTextblock && t.defaultAttrs) return t;
      }
    }
  };
function Nn(e) {
  for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
    let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
    e && En.hasOwnProperty(e) && n
      ? (n.appendChild(t), (t = n))
      : e == `li`
        ? (n = t)
        : e && (n = null);
  }
}
function Pn(e, t) {
  return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(
    e,
    t,
  );
}
function Fn(e) {
  let t = {};
  for (let n in e) t[n] = e[n];
  return t;
}
function In(e, t) {
  let n = t.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(e)) continue;
    let a = [],
      o = (e) => {
        a.push(e);
        for (let n = 0; n < e.edgeCount; n++) {
          let { type: r, next: i } = e.edge(n);
          if (r == t || (a.indexOf(i) < 0 && o(i))) return !0;
        }
      };
    if (o(i.contentMatch)) return !0;
  }
}
var Ln = class e {
  constructor(e, t) {
    ((this.nodes = e), (this.marks = t));
  }
  serializeFragment(e, t = {}, n) {
    n ||= zn(t).createDocumentFragment();
    let r = n,
      i = [];
    return (
      e.forEach((e) => {
        if (i.length || e.marks.length) {
          let n = 0,
            a = 0;
          for (; n < i.length && a < e.marks.length;) {
            let t = e.marks[a];
            if (!this.marks[t.type.name]) a++;
            else {
              if (!t.eq(i[n][0]) || t.type.spec.spanning === !1) break;
              (n++, a++);
            }
          }
          for (; n < i.length;) r = i.pop()[1];
          for (; a < e.marks.length;) {
            let n = e.marks[a++],
              o = this.serializeMark(n, e.isInline, t);
            o && (i.push([n, r]), r.appendChild(o.dom), (r = o.contentDOM || o.dom));
          }
        }
        r.appendChild(this.serializeNodeInner(e, t));
      }),
      n
    );
  }
  serializeNodeInner(e, t) {
    if (e.isText) return zn(t).createTextNode(e.text);
    let { dom: n, contentDOM: r } = Un(zn(t), this.nodes[e.type.name](e), null, e.attrs);
    if (r) {
      if (e.isLeaf) throw RangeError(`Content hole not allowed in a leaf node spec`);
      this.serializeFragment(e.content, t, r);
    }
    return n;
  }
  serializeNode(e, t = {}) {
    let n = this.serializeNodeInner(e, t);
    for (let r = e.marks.length - 1; r >= 0; r--) {
      let i = this.serializeMark(e.marks[r], e.isInline, t);
      i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
    }
    return n;
  }
  serializeMark(e, t, n = {}) {
    let r = this.marks[e.type.name];
    return r && Un(zn(n), r(e, t), null, e.attrs);
  }
  static renderSpec(e, t, n = null, r) {
    return typeof t == `string` ? { dom: e.createTextNode(t) } : Un(e, t, n, r);
  }
  static fromSchema(t) {
    return (
      t.cached.domSerializer ||
      (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)))
    );
  }
  static nodesFromSchema(e) {
    let t = Rn(e.nodes);
    return ((t.text ||= (e) => e.text), t);
  }
  static marksFromSchema(e) {
    return Rn(e.marks);
  }
};
function Rn(e) {
  let t = {};
  for (let n in e) {
    let r = e[n].spec.toDOM;
    r && (t[n] = r);
  }
  return t;
}
function zn(e) {
  return e.document || window.document;
}
var Bn = new WeakMap();
function Vn(e) {
  let t = Bn.get(e);
  return (t === void 0 && Bn.set(e, (t = Hn(e))), t);
}
function Hn(e) {
  let t = null;
  function n(e) {
    if (e && typeof e == `object`) {
      if (Array.isArray(e)) {
        if (typeof e[0] == `string`) ((t ||= []), t.push(e));
        else for (let t = 0; t < e.length; t++) n(e[t]);
      } else for (let t in e) n(e[t]);
    }
  }
  return (n(e), t);
}
function Un(e, t, n, r) {
  if (t.nodeType == 1) return { dom: t };
  if (t.dom && t.dom.nodeType == 1) return t;
  let i = t[0],
    a;
  if (typeof i != `string`) throw RangeError(`Invalid array passed to renderSpec`);
  if (r && (a = Vn(r)) && a.indexOf(t) > -1)
    throw RangeError(
      `Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`,
    );
  let o = i.indexOf(` `);
  o > 0 && ((n = i.slice(0, o)), (i = i.slice(o + 1)));
  let s,
    c = n ? e.createElementNS(n, i) : e.createElement(i),
    l = t[1],
    u = 1;
  if (l && typeof l == `object` && l.nodeType == null && !Array.isArray(l)) {
    u = 2;
    for (let e in l)
      if (l[e] != null) {
        let t = e.indexOf(` `);
        t > 0
          ? c.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e])
          : e == `style` && c.style
            ? (c.style.cssText = l[e])
            : c.setAttribute(e, l[e]);
      }
  }
  for (let i = u; i < t.length; i++) {
    let a = t[i];
    if (a === 0) {
      if (i < t.length - 1 || i > u)
        throw RangeError(`Content hole must be the only child of its parent node`);
      return { dom: c, contentDOM: c };
    }
    if (typeof a == `string`) c.appendChild(e.createTextNode(a));
    else {
      let { dom: t, contentDOM: i } = Un(e, a, n, r);
      if ((c.appendChild(t), i)) {
        if (s) throw RangeError(`Multiple content holes`);
        s = i;
      }
    }
  }
  return { dom: c, contentDOM: s };
}
var Wn = 65535,
  Gn = 2 ** 16;
function Kn(e, t) {
  return e + t * Gn;
}
function qn(e) {
  return e & Wn;
}
function Jn(e) {
  return (e - (e & Wn)) / Gn;
}
var Yn = 1,
  Xn = 2,
  Zn = 4,
  Qn = 8,
  $n = class {
    constructor(e, t, n) {
      ((this.pos = e), (this.delInfo = t), (this.recover = n));
    }
    get deleted() {
      return (this.delInfo & Qn) > 0;
    }
    get deletedBefore() {
      return (this.delInfo & 5) > 0;
    }
    get deletedAfter() {
      return (this.delInfo & 6) > 0;
    }
    get deletedAcross() {
      return (this.delInfo & Zn) > 0;
    }
  },
  er = class e {
    constructor(t, n = !1) {
      if (((this.ranges = t), (this.inverted = n), !t.length && e.empty)) return e.empty;
    }
    recover(e) {
      let t = 0,
        n = qn(e);
      if (!this.inverted)
        for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
      return this.ranges[n * 3] + t + Jn(e);
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    map(e, t = 1) {
      return this._map(e, t, !0);
    }
    _map(e, t, n) {
      let r = 0,
        i = this.inverted ? 2 : 1,
        a = this.inverted ? 1 : 2;
      for (let o = 0; o < this.ranges.length; o += 3) {
        let s = this.ranges[o] - (this.inverted ? r : 0);
        if (s > e) break;
        let c = this.ranges[o + i],
          l = this.ranges[o + a],
          u = s + c;
        if (e <= u) {
          let i = c ? (e == s ? -1 : e == u ? 1 : t) : t,
            a = s + r + (i < 0 ? 0 : l);
          if (n) return a;
          let d = e == (t < 0 ? s : u) ? null : Kn(o / 3, e - s),
            f = e == s ? Xn : e == u ? Yn : Zn;
          return ((t < 0 ? e != s : e != u) && (f |= Qn), new $n(a, f, d));
        }
        r += l - c;
      }
      return n ? e + r : new $n(e + r, 0, null);
    }
    touches(e, t) {
      let n = 0,
        r = qn(t),
        i = this.inverted ? 2 : 1,
        a = this.inverted ? 1 : 2;
      for (let t = 0; t < this.ranges.length; t += 3) {
        let o = this.ranges[t] - (this.inverted ? n : 0);
        if (o > e) break;
        let s = this.ranges[t + i];
        if (e <= o + s && t == r * 3) return !0;
        n += this.ranges[t + a] - s;
      }
      return !1;
    }
    forEach(e) {
      let t = this.inverted ? 2 : 1,
        n = this.inverted ? 1 : 2;
      for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
        let a = this.ranges[r],
          o = a - (this.inverted ? i : 0),
          s = a + (this.inverted ? 0 : i),
          c = this.ranges[r + t],
          l = this.ranges[r + n];
        (e(o, o + c, s, s + l), (i += l - c));
      }
    }
    invert() {
      return new e(this.ranges, !this.inverted);
    }
    toString() {
      return (this.inverted ? `-` : ``) + JSON.stringify(this.ranges);
    }
    static offset(t) {
      return t == 0 ? e.empty : new e(t < 0 ? [0, -t, 0] : [0, 0, t]);
    }
  };
er.empty = new er([]);
var tr = class e {
    constructor(e, t, n = 0, r = e ? e.length : 0) {
      ((this.mirror = t),
        (this.from = n),
        (this.to = r),
        (this._maps = e || []),
        (this.ownData = !(e || t)));
    }
    get maps() {
      return this._maps;
    }
    slice(t = 0, n = this.maps.length) {
      return new e(this._maps, this.mirror, t, n);
    }
    appendMap(e, t) {
      ((this.ownData ||=
        ((this._maps = this._maps.slice()),
        (this.mirror = this.mirror && this.mirror.slice()),
        !0)),
        (this.to = this._maps.push(e)),
        t != null && this.setMirror(this._maps.length - 1, t));
    }
    appendMapping(e) {
      for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
        let r = e.getMirror(t);
        this.appendMap(e._maps[t], r != null && r < t ? n + r : void 0);
      }
    }
    getMirror(e) {
      if (this.mirror) {
        for (let t = 0; t < this.mirror.length; t++)
          if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
      }
    }
    setMirror(e, t) {
      ((this.mirror ||= []), this.mirror.push(e, t));
    }
    appendMappingInverted(e) {
      for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
        let r = e.getMirror(t);
        this.appendMap(e._maps[t].invert(), r != null && r > t ? n - r - 1 : void 0);
      }
    }
    invert() {
      let t = new e();
      return (t.appendMappingInverted(this), t);
    }
    map(e, t = 1) {
      if (this.mirror) return this._map(e, t, !0);
      for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
      return e;
    }
    mapResult(e, t = 1) {
      return this._map(e, t, !1);
    }
    _map(e, t, n) {
      let r = 0;
      for (let n = this.from; n < this.to; n++) {
        let i = this._maps[n].mapResult(e, t);
        if (i.recover != null) {
          let t = this.getMirror(n);
          if (t != null && t > n && t < this.to) {
            ((n = t), (e = this._maps[t].recover(i.recover)));
            continue;
          }
        }
        ((r |= i.delInfo), (e = i.pos));
      }
      return n ? e : new $n(e, r, null);
    }
  },
  nr = Object.create(null),
  rr = class {
    getMap() {
      return er.empty;
    }
    merge(e) {
      return null;
    }
    static fromJSON(e, t) {
      if (!t || !t.stepType) throw RangeError(`Invalid input for Step.fromJSON`);
      let n = nr[t.stepType];
      if (!n) throw RangeError(`No step type ${t.stepType} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in nr) throw RangeError(`Duplicate use of step JSON ID ` + e);
      return ((nr[e] = t), (t.prototype.jsonID = e), t);
    }
  },
  ir = class e {
    constructor(e, t) {
      ((this.doc = e), (this.failed = t));
    }
    static ok(t) {
      return new e(t, null);
    }
    static fail(t) {
      return new e(null, t);
    }
    static fromReplace(t, n, r, i) {
      try {
        return e.ok(t.replace(n, r, i));
      } catch (t) {
        if (t instanceof Ot) return e.fail(t.message);
        throw t;
      }
    }
  };
function ar(e, t, n) {
  let r = [];
  for (let i = 0; i < e.childCount; i++) {
    let a = e.child(i);
    (a.content.size && (a = a.copy(ar(a.content, t, a))),
      a.isInline && (a = t(a, n, i)),
      r.push(a));
  }
  return P.fromArray(r);
}
var or = class e extends rr {
  constructor(e, t, n) {
    (super(), (this.from = e), (this.to = t), (this.mark = n));
  }
  apply(e) {
    let t = e.slice(this.from, this.to),
      n = e.resolve(this.from),
      r = n.node(n.sharedDepth(this.to)),
      i = new I(
        ar(
          t.content,
          (e, t) =>
            !e.isAtom || !t.type.allowsMarkType(this.mark.type)
              ? e
              : e.mark(this.mark.addToSet(e.marks)),
          r,
        ),
        t.openStart,
        t.openEnd,
      );
    return ir.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new sr(this.from, this.to, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
  }
  merge(t) {
    return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from
      ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
      : null;
  }
  toJSON() {
    return { stepType: `addMark`, mark: this.mark.toJSON(), from: this.from, to: this.to };
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for AddMarkStep.fromJSON`);
    return new e(n.from, n.to, t.markFromJSON(n.mark));
  }
};
rr.jsonID(`addMark`, or);
var sr = class e extends rr {
  constructor(e, t, n) {
    (super(), (this.from = e), (this.to = t), (this.mark = n));
  }
  apply(e) {
    let t = e.slice(this.from, this.to),
      n = new I(
        ar(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
        t.openStart,
        t.openEnd,
      );
    return ir.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new or(this.from, this.to, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1);
    return (n.deleted && r.deleted) || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
  }
  merge(t) {
    return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from
      ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark)
      : null;
  }
  toJSON() {
    return { stepType: `removeMark`, mark: this.mark.toJSON(), from: this.from, to: this.to };
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);
    return new e(n.from, n.to, t.markFromJSON(n.mark));
  }
};
rr.jsonID(`removeMark`, sr);
var cr = class e extends rr {
  constructor(e, t) {
    (super(), (this.pos = e), (this.mark = t));
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return ir.fail(`No node at mark step's position`);
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ir.fromReplace(e, this.pos, this.pos + 1, new I(P.from(n), 0, +!t.isLeaf));
  }
  invert(t) {
    let n = t.nodeAt(this.pos);
    if (n) {
      let t = this.mark.addToSet(n.marks);
      if (t.length == n.marks.length) {
        for (let r = 0; r < n.marks.length; r++)
          if (!n.marks[r].isInSet(t)) return new e(this.pos, n.marks[r]);
        return new e(this.pos, this.mark);
      }
    }
    return new lr(this.pos, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: `addNodeMark`, pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number`) throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);
    return new e(n.pos, t.markFromJSON(n.mark));
  }
};
rr.jsonID(`addNodeMark`, cr);
var lr = class e extends rr {
  constructor(e, t) {
    (super(), (this.pos = e), (this.mark = t));
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return ir.fail(`No node at mark step's position`);
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ir.fromReplace(e, this.pos, this.pos + 1, new I(P.from(n), 0, +!t.isLeaf));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new cr(this.pos, this.mark);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: `removeNodeMark`, pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number`) throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);
    return new e(n.pos, t.markFromJSON(n.mark));
  }
};
rr.jsonID(`removeNodeMark`, lr);
var ur = class e extends rr {
  constructor(e, t, n, r = !1) {
    (super(), (this.from = e), (this.to = t), (this.slice = n), (this.structure = r));
  }
  apply(e) {
    return this.structure && fr(e, this.from, this.to)
      ? ir.fail(`Structure replace would overwrite content`)
      : ir.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new er([this.from, this.to - this.from, this.slice.size]);
  }
  invert(t) {
    return new e(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
  }
  map(t) {
    let n = t.mapResult(this.to, -1),
      r = this.from == this.to && e.MAP_BIAS < 0 ? n : t.mapResult(this.from, 1);
    return r.deletedAcross && n.deletedAcross
      ? null
      : new e(r.pos, Math.max(r.pos, n.pos), this.slice, this.structure);
  }
  merge(t) {
    if (!(t instanceof e) || t.structure || this.structure) return null;
    if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
      let n =
        this.slice.size + t.slice.size == 0
          ? I.empty
          : new I(
              this.slice.content.append(t.slice.content),
              this.slice.openStart,
              t.slice.openEnd,
            );
      return new e(this.from, this.to + (t.to - t.from), n, this.structure);
    }
    if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
      let n =
        this.slice.size + t.slice.size == 0
          ? I.empty
          : new I(
              t.slice.content.append(this.slice.content),
              t.slice.openStart,
              this.slice.openEnd,
            );
      return new e(t.from, this.to, n, this.structure);
    }
    return null;
  }
  toJSON() {
    let e = { stepType: `replace`, from: this.from, to: this.to };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    );
  }
  static fromJSON(t, n) {
    if (typeof n.from != `number` || typeof n.to != `number`)
      throw RangeError(`Invalid input for ReplaceStep.fromJSON`);
    return new e(n.from, n.to, I.fromJSON(t, n.slice), !!n.structure);
  }
};
((ur.MAP_BIAS = 1), rr.jsonID(`replace`, ur));
var dr = class e extends rr {
  constructor(e, t, n, r, i, a, o = !1) {
    (super(),
      (this.from = e),
      (this.to = t),
      (this.gapFrom = n),
      (this.gapTo = r),
      (this.slice = i),
      (this.insert = a),
      (this.structure = o));
  }
  apply(e) {
    if (this.structure && (fr(e, this.from, this.gapFrom) || fr(e, this.gapTo, this.to)))
      return ir.fail(`Structure gap-replace would overwrite content`);
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd) return ir.fail(`Gap is not a flat range`);
    let n = this.slice.insertAt(this.insert, t.content);
    return n ? ir.fromReplace(e, this.from, this.to, n) : ir.fail(`Content does not fit in gap`);
  }
  getMap() {
    return new er([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(t) {
    let n = this.gapTo - this.gapFrom;
    return new e(
      this.from,
      this.from + this.slice.size + n,
      this.from + this.insert,
      this.from + this.insert + n,
      t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(t) {
    let n = t.mapResult(this.from, 1),
      r = t.mapResult(this.to, -1),
      i = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1),
      a = this.to == this.gapTo ? r.pos : t.map(this.gapTo, 1);
    return (n.deletedAcross && r.deletedAcross) || i < n.pos || a > r.pos
      ? null
      : new e(n.pos, r.pos, i, a, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: `replaceAround`,
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    return (
      this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    );
  }
  static fromJSON(t, n) {
    if (
      typeof n.from != `number` ||
      typeof n.to != `number` ||
      typeof n.gapFrom != `number` ||
      typeof n.gapTo != `number` ||
      typeof n.insert != `number`
    )
      throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);
    return new e(n.from, n.to, n.gapFrom, n.gapTo, I.fromJSON(t, n.slice), n.insert, !!n.structure);
  }
};
rr.jsonID(`replaceAround`, dr);
function fr(e, t, n) {
  let r = e.resolve(t),
    i = n - t,
    a = r.depth;
  for (; i > 0 && a > 0 && r.indexAfter(a) == r.node(a).childCount;) (a--, i--);
  if (i > 0) {
    let e = r.node(a).maybeChild(r.indexAfter(a));
    for (; i > 0;) {
      if (!e || e.isLeaf) return !0;
      ((e = e.firstChild), i--);
    }
  }
  return !1;
}
function pr(e, t, n, r) {
  let i = [],
    a = [],
    o,
    s;
  (e.doc.nodesBetween(t, n, (e, c, l) => {
    if (!e.isInline) return;
    let u = e.marks;
    if (!r.isInSet(u) && l.type.allowsMarkType(r.type)) {
      let l = Math.max(c, t),
        d = Math.min(c + e.nodeSize, n),
        f = r.addToSet(u);
      for (let e = 0; e < u.length; e++)
        u[e].isInSet(f) ||
          (o && o.to == l && o.mark.eq(u[e]) ? (o.to = d) : i.push((o = new sr(l, d, u[e]))));
      s && s.to == l ? (s.to = d) : a.push((s = new or(l, d, r)));
    }
  }),
    i.forEach((t) => e.step(t)),
    a.forEach((t) => e.step(t)));
}
function mr(e, t, n, r) {
  let i = [],
    a = 0;
  (e.doc.nodesBetween(t, n, (e, o) => {
    if (!e.isInline) return;
    a++;
    let s = null;
    if (r instanceof vn) {
      let t = e.marks,
        n;
      for (; (n = r.isInSet(t));) ((s ||= []).push(n), (t = n.removeFromSet(t)));
    } else r ? r.isInSet(e.marks) && (s = [r]) : (s = e.marks);
    if (s && s.length) {
      let r = Math.min(o + e.nodeSize, n);
      for (let e = 0; e < s.length; e++) {
        let n = s[e],
          c;
        for (let e = 0; e < i.length; e++) {
          let t = i[e];
          t.step == a - 1 && n.eq(i[e].style) && (c = t);
        }
        c ? ((c.to = r), (c.step = a)) : i.push({ style: n, from: Math.max(o, t), to: r, step: a });
      }
    }
  }),
    i.forEach((t) => e.step(new sr(t.from, t.to, t.style))));
}
function hr(e, t, n, r = n.contentMatch, i = !0) {
  let a = e.doc.nodeAt(t),
    o = [],
    s = t + 1;
  for (let t = 0; t < a.childCount; t++) {
    let c = a.child(t),
      l = s + c.nodeSize,
      u = r.matchType(c.type);
    if (!u) o.push(new ur(s, l, I.empty));
    else {
      r = u;
      for (let t = 0; t < c.marks.length; t++)
        n.allowsMarkType(c.marks[t].type) || e.step(new sr(s, l, c.marks[t]));
      if (i && c.isText && n.whitespace != `pre`) {
        let e,
          t = /\r?\n|\r/g,
          r;
        for (; (e = t.exec(c.text));)
          ((r ||= new I(P.from(n.schema.text(` `, n.allowedMarks(c.marks))), 0, 0)),
            o.push(new ur(s + e.index, s + e.index + e[0].length, r)));
      }
    }
    s = l;
  }
  if (!r.validEnd) {
    let t = r.fillBefore(P.empty, !0);
    e.replace(s, s, new I(t, 0, 0));
  }
  for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function gr(e, t, n) {
  return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function _r(e) {
  let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
  for (let n = e.depth, r = 0, i = 0; ; --n) {
    let a = e.$from.node(n),
      o = e.$from.index(n) + r,
      s = e.$to.indexAfter(n) - i;
    if (n < e.depth && a.canReplace(o, s, t)) return n;
    if (n == 0 || a.type.spec.isolating || !gr(a, o, s)) break;
    (o && (r = 1), s < a.childCount && (i = 1));
  }
  return null;
}
function vr(e, t, n) {
  let { $from: r, $to: i, depth: a } = t,
    o = r.before(a + 1),
    s = i.after(a + 1),
    c = o,
    l = s,
    u = P.empty,
    d = 0;
  for (let e = a, t = !1; e > n; e--)
    t || r.index(e) > 0 ? ((t = !0), (u = P.from(r.node(e).copy(u))), d++) : c--;
  let f = P.empty,
    p = 0;
  for (let e = a, t = !1; e > n; e--)
    t || i.after(e + 1) < i.end(e) ? ((t = !0), (f = P.from(i.node(e).copy(f))), p++) : l++;
  e.step(new dr(c, l, o, s, new I(u.append(f), d, p), u.size - d, !0));
}
function yr(e, t, n = null, r = e) {
  let i = xr(e, t),
    a = i && Sr(r, t);
  return a ? i.map(br).concat({ type: t, attrs: n }).concat(a.map(br)) : null;
}
function br(e) {
  return { type: e, attrs: null };
}
function xr(e, t) {
  let { parent: n, startIndex: r, endIndex: i } = e,
    a = n.contentMatchAt(r).findWrapping(t);
  if (!a) return null;
  let o = a.length ? a[0] : t;
  return n.canReplaceWith(r, i, o) ? a : null;
}
function Sr(e, t) {
  let { parent: n, startIndex: r, endIndex: i } = e,
    a = n.child(r),
    o = t.contentMatch.findWrapping(a.type);
  if (!o) return null;
  let s = (o.length ? o[o.length - 1] : t).contentMatch;
  for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
  return !s || !s.validEnd ? null : o;
}
function Cr(e, t, n) {
  let r = P.empty;
  for (let e = n.length - 1; e >= 0; e--) {
    if (r.size) {
      let t = n[e].type.contentMatch.matchFragment(r);
      if (!t || !t.validEnd)
        throw RangeError(
          `Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`,
        );
    }
    r = P.from(n[e].type.create(n[e].attrs, r));
  }
  let i = t.start,
    a = t.end;
  e.step(new dr(i, a, i, a, new I(r, 0, 0), n.length, !0));
}
function wr(e, t, n, r, i) {
  if (!r.isTextblock) throw RangeError(`Type given to setBlockType should be a textblock`);
  let a = e.steps.length;
  e.doc.nodesBetween(t, n, (t, n) => {
    let o = typeof i == `function` ? i(t) : i;
    if (t.isTextblock && !t.hasMarkup(r, o) && Dr(e.doc, e.mapping.slice(a).map(n), r)) {
      let i = null;
      if (r.schema.linebreakReplacement) {
        let e = r.whitespace == `pre`,
          t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        e && !t ? (i = !1) : !e && t && (i = !0);
      }
      (i === !1 && Er(e, t, n, a), hr(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null));
      let s = e.mapping.slice(a),
        c = s.map(n, 1),
        l = s.map(n + t.nodeSize, 1);
      return (
        e.step(new dr(c, l, c + 1, l - 1, new I(P.from(r.create(o, null, t.marks)), 0, 0), 1, !0)),
        i === !0 && Tr(e, t, n, a),
        !1
      );
    }
  });
}
function Tr(e, t, n, r) {
  t.forEach((i, a) => {
    if (i.isText) {
      let o,
        s = /\r?\n|\r/g;
      for (; (o = s.exec(i.text));) {
        let i = e.mapping.slice(r).map(n + 1 + a + o.index);
        e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Er(e, t, n, r) {
  t.forEach((i, a) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let i = e.mapping.slice(r).map(n + 1 + a);
      e.replaceWith(
        i,
        i + 1,
        t.type.schema.text(`
`),
      );
    }
  });
}
function Dr(e, t, n) {
  let r = e.resolve(t),
    i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function Or(e, t, n, r, i) {
  let a = e.doc.nodeAt(t);
  if (!a) throw RangeError(`No node at given position`);
  n ||= a.type;
  let o = n.create(r, null, i || a.marks);
  if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
  if (!n.validContent(a.content)) throw RangeError(`Invalid content for node type ` + n.name);
  e.step(new dr(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new I(P.from(o), 0, 0), 1, !0));
}
function kr(e, t, n = 1, r) {
  let i = e.resolve(t),
    a = i.depth - n,
    o = (r && r[r.length - 1]) || i.parent;
  if (
    a < 0 ||
    i.parent.type.spec.isolating ||
    !i.parent.canReplace(i.index(), i.parent.childCount) ||
    !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))
  )
    return !1;
  for (let e = i.depth - 1, t = n - 2; e > a; e--, t--) {
    let n = i.node(e),
      a = i.index(e);
    if (n.type.spec.isolating) return !1;
    let o = n.content.cutByIndex(a, n.childCount),
      s = r && r[t + 1];
    s && (o = o.replaceChild(0, s.type.create(s.attrs)));
    let c = (r && r[t]) || n;
    if (!n.canReplace(a + 1, n.childCount) || !c.type.validContent(o)) return !1;
  }
  let s = i.indexAfter(a),
    c = r && r[0];
  return i.node(a).canReplaceWith(s, s, c ? c.type : i.node(a + 1).type);
}
function Ar(e, t, n = 1, r) {
  let i = e.doc.resolve(t),
    a = P.empty,
    o = P.empty;
  for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
    a = P.from(i.node(e).copy(a));
    let t = r && r[s];
    o = P.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
  }
  e.step(new ur(t, t, new I(a.append(o), n, n), !0));
}
function jr(e, t) {
  let n = e.resolve(t),
    r = n.index();
  return Nr(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Mr(e, t) {
  t.content.size || e.type.compatibleContent(t.type);
  let n = e.contentMatchAt(e.childCount),
    { linebreakReplacement: r } = e.type.schema;
  for (let i = 0; i < t.childCount; i++) {
    let a = t.child(i),
      o = a.type == r ? e.type.schema.nodes.text : a.type;
    if (((n = n.matchType(o)), !n || !e.type.allowsMarks(a.marks))) return !1;
  }
  return n.validEnd;
}
function Nr(e, t) {
  return !!(e && t && !e.isLeaf && Mr(e, t));
}
function Pr(e, t, n = -1) {
  let r = e.resolve(t);
  for (let e = r.depth; ; e--) {
    let i,
      a,
      o = r.index(e);
    if (
      (e == r.depth
        ? ((i = r.nodeBefore), (a = r.nodeAfter))
        : n > 0
          ? ((i = r.node(e + 1)), o++, (a = r.node(e).maybeChild(o)))
          : ((i = r.node(e).maybeChild(o - 1)), (a = r.node(e + 1))),
      i && !i.isTextblock && Nr(i, a) && r.node(e).canReplace(o, o + 1))
    )
      return t;
    if (e == 0) break;
    t = n < 0 ? r.before(e) : r.after(e);
  }
}
function Fr(e, t, n) {
  let r = null,
    { linebreakReplacement: i } = e.doc.type.schema,
    a = e.doc.resolve(t - n),
    o = a.node().type;
  if (i && o.inlineContent) {
    let e = o.whitespace == `pre`,
      t = !!o.contentMatch.matchType(i);
    e && !t ? (r = !1) : !e && t && (r = !0);
  }
  let s = e.steps.length;
  if (r === !1) {
    let r = e.doc.resolve(t + n);
    Er(e, r.node(), r.before(), s);
  }
  o.inlineContent && hr(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
  let c = e.mapping.slice(s),
    l = c.map(t - n);
  if ((e.step(new ur(l, c.map(t + n, -1), I.empty, !0)), r === !0)) {
    let t = e.doc.resolve(l);
    Tr(e, t.node(), t.before(), e.steps.length);
  }
  return e;
}
function Ir(e, t, n) {
  let r = e.resolve(t);
  if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
  if (r.parentOffset == 0)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.index(e);
      if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
      if (t > 0) return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.indexAfter(e);
      if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
      if (t < r.node(e).childCount) return null;
    }
  return null;
}
function Lr(e, t, n) {
  let r = e.resolve(t);
  if (!n.content.size) return t;
  let i = n.content;
  for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
  for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++)
    for (let t = r.depth; t >= 0; t--) {
      let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1,
        a = r.index(t) + +(n > 0),
        o = r.node(t),
        s = !1;
      if (e == 1) s = o.canReplace(a, a, i);
      else {
        let e = o.contentMatchAt(a).findWrapping(i.firstChild.type);
        s = e && o.canReplaceWith(a, a, e[0]);
      }
      if (s) return n == 0 ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
    }
  return null;
}
function Rr(e, t, n = t, r = I.empty) {
  if (t == n && !r.size) return null;
  let i = e.resolve(t),
    a = e.resolve(n);
  return zr(i, a, r) ? new ur(t, n, r) : new Br(i, a, r).fit();
}
function zr(e, t, n) {
  return (
    !n.openStart &&
    !n.openEnd &&
    e.start() == t.start() &&
    e.parent.canReplace(e.index(), t.index(), n.content)
  );
}
var Br = class {
  constructor(e, t, n) {
    ((this.$from = e),
      (this.$to = t),
      (this.unplaced = n),
      (this.frontier = []),
      (this.placed = P.empty));
    for (let t = 0; t <= e.depth; t++) {
      let n = e.node(t);
      this.frontier.push({ type: n.type, match: n.contentMatchAt(e.indexAfter(t)) });
    }
    for (let t = e.depth; t > 0; t--) this.placed = P.from(e.node(t).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size;) {
      let e = this.findFittable();
      e ? this.placeNodes(e) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(),
      t = this.placed.size - this.depth - this.$from.depth,
      n = this.$from,
      r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!r) return null;
    let i = this.placed,
      a = n.depth,
      o = r.depth;
    for (; a && o && i.childCount == 1;) ((i = i.firstChild.content), a--, o--);
    let s = new I(i, a, o);
    return e > -1
      ? new dr(n.pos, e, this.$to.pos, this.$to.end(), s, t)
      : s.size || n.pos != this.$to.pos
        ? new ur(n.pos, r.pos, s)
        : null;
  }
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
      let i = t.firstChild;
      if ((t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)) {
        e = n;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let e,
          r = null;
        n
          ? ((r = Ur(this.unplaced.content, n - 1).firstChild), (e = r.content))
          : (e = this.unplaced.content);
        let i = e.firstChild;
        for (let e = this.depth; e >= 0; e--) {
          let { type: a, match: o } = this.frontier[e],
            s,
            c = null;
          if (
            t == 1 &&
            (i
              ? o.matchType(i.type) || (c = o.fillBefore(P.from(i), !1))
              : r && a.compatibleContent(r.type))
          )
            return { sliceDepth: n, frontierDepth: e, parent: r, inject: c };
          if (t == 2 && i && (s = o.findWrapping(i.type)))
            return { sliceDepth: n, frontierDepth: e, parent: r, wrap: s };
          if (r && o.matchType(r.type)) break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced;
    return Jr(e, -1) <= t
      ? !1
      : (this.unplaced.size > 1 && Jr(e, 1) > n && n++, (this.unplaced = new I(e, t + 1, n)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced,
      r = Ur(e, t);
    if (r.childCount <= 1 && t > 0) {
      let i = e.size - t <= t + r.size;
      this.unplaced = new I(Vr(e, t - 1, 1), t - 1, i ? t - 1 : n);
    } else this.unplaced = new I(Vr(e, t, 1), t, n);
  }
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: r, wrap: i }) {
    for (; this.depth > t;) this.closeFrontierNode();
    if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
    let a = this.unplaced,
      o = n ? n.content : a.content,
      s = a.openStart - e,
      c = 0,
      l = [],
      { match: u, type: d } = this.frontier[t];
    if (r) {
      for (let e = 0; e < r.childCount; e++) l.push(r.child(e));
      u = u.matchFragment(r);
    }
    let f = o.size + e - (a.content.size - a.openEnd);
    for (; c < o.childCount;) {
      let e = o.child(c),
        t = u.matchType(e.type);
      if (!t) break;
      (c++,
        (c > 1 || s == 0 || e.content.size) &&
          ((u = t),
          l.push(Wr(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1))));
    }
    let p = c == o.childCount;
    (p || (f = -1),
      (this.placed = Hr(this.placed, t, P.from(l))),
      (this.frontier[t].match = u),
      p &&
        f < 0 &&
        n &&
        n.type == this.frontier[this.depth].type &&
        this.frontier.length > 1 &&
        this.closeFrontierNode());
    for (let e = 0, t = o; e < f; e++) {
      let e = t.lastChild;
      (this.frontier.push({ type: e.type, match: e.contentMatchAt(e.childCount) }),
        (t = e.content));
    }
    this.unplaced = p
      ? e == 0
        ? I.empty
        : new I(Vr(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1)
      : new I(Vr(a.content, e, c), a.openStart, a.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let e = this.frontier[this.depth],
      t;
    if (
      !e.type.isTextblock ||
      !Gr(this.$to, this.$to.depth, e.type, e.match, !1) ||
      (this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
    )
      return -1;
    let { depth: n } = this.$to,
      r = this.$to.after(n);
    for (; n > 1 && r == this.$to.end(--n);) ++r;
    return r;
  }
  findCloseLevel(e) {
    scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: n, type: r } = this.frontier[t],
        i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
        a = Gr(e, t, r, n, i);
      if (a) {
        for (let n = t - 1; n >= 0; n--) {
          let { match: t, type: r } = this.frontier[n],
            i = Gr(e, n, r, t, !0);
          if (!i || i.childCount) continue scan;
        }
        return { depth: t, fit: a, move: i ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t) return null;
    for (; this.depth > t.depth;) this.closeFrontierNode();
    (t.fit.childCount && (this.placed = Hr(this.placed, t.depth, t.fit)), (e = t.move));
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let t = e.node(n),
        r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
      this.openFrontierNode(t.type, t.attrs, r);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let r = this.frontier[this.depth];
    ((r.match = r.match.matchType(e)),
      (this.placed = Hr(this.placed, this.depth, P.from(e.create(t, n)))),
      this.frontier.push({ type: e, match: e.contentMatch }));
  }
  closeFrontierNode() {
    let e = this.frontier.pop().match.fillBefore(P.empty, !0);
    e.childCount && (this.placed = Hr(this.placed, this.frontier.length, e));
  }
};
function Vr(e, t, n) {
  return t == 0
    ? e.cutByIndex(n, e.childCount)
    : e.replaceChild(0, e.firstChild.copy(Vr(e.firstChild.content, t - 1, n)));
}
function Hr(e, t, n) {
  return t == 0
    ? e.append(n)
    : e.replaceChild(e.childCount - 1, e.lastChild.copy(Hr(e.lastChild.content, t - 1, n)));
}
function Ur(e, t) {
  for (let n = 0; n < t; n++) e = e.firstChild.content;
  return e;
}
function Wr(e, t, n) {
  if (t <= 0) return e;
  let r = e.content;
  return (
    t > 1 && (r = r.replaceChild(0, Wr(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))),
    t > 0 &&
      ((r = e.type.contentMatch.fillBefore(r).append(r)),
      n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(P.empty, !0)))),
    e.copy(r)
  );
}
function Gr(e, t, n, r, i) {
  let a = e.node(t),
    o = i ? e.indexAfter(t) : e.index(t);
  if (o == a.childCount && !n.compatibleContent(a.type)) return null;
  let s = r.fillBefore(a.content, !0, o);
  return s && !Kr(n, a.content, o) ? s : null;
}
function Kr(e, t, n) {
  for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
  return !1;
}
function qr(e) {
  return e.spec.defining || e.spec.definingForContent;
}
function Jr(e, t) {
  for (let n = 0; ; n++) {
    let r = t < 0 ? e.firstChild : e.lastChild;
    if (!r || r.isAtom) return n;
    e = r.content;
  }
}
function Yr(e, t, n, r) {
  if (!r.size) return e.deleteRange(t, n);
  let i = e.doc.resolve(t),
    a = e.doc.resolve(n);
  if (zr(i, a, r)) return e.step(new ur(t, n, r));
  let o = $r(i, a);
  o[o.length - 1] == 0 && o.pop();
  let s = -(i.depth + 1);
  o.unshift(s);
  for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
    let n = i.node(e).type.spec;
    if (n.defining || n.definingAsContext || n.isolating) break;
    o.indexOf(e) > -1 ? (s = e) : i.before(e) == t && o.splice(1, 0, -e);
  }
  let c = o.indexOf(s),
    l = [],
    u = r.openStart;
  for (let e = r.content, t = 0; ; t++) {
    let n = e.firstChild;
    if ((l.push(n), t == r.openStart)) break;
    e = n.content;
  }
  for (let e = u - 1; e >= 0; e--) {
    let t = l[e],
      n = qr(t.type);
    if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
    else if (n || !t.type.isTextblock) break;
  }
  for (let t = r.openStart; t >= 0; t--) {
    let s = (t + u + 1) % (r.openStart + 1),
      d = l[s];
    if (d)
      for (let t = 0; t < o.length; t++) {
        let l = o[(t + c) % o.length],
          u = !0;
        l < 0 && ((u = !1), (l = -l));
        let f = i.node(l - 1),
          p = i.index(l - 1);
        if (f.canReplaceWith(p, p, d.type, d.marks))
          return e.replace(
            i.before(l),
            u ? a.after(l) : n,
            new I(Xr(r.content, 0, r.openStart, s), s, r.openEnd),
          );
      }
  }
  let d = e.steps.length;
  for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
    let e = o[s];
    e < 0 || ((t = i.before(e)), (n = a.after(e)));
  }
}
function Xr(e, t, n, r, i) {
  if (t < n) {
    let i = e.firstChild;
    e = e.replaceChild(0, i.copy(Xr(i.content, t + 1, n, r, i)));
  }
  if (t > r) {
    let t = i.contentMatchAt(0),
      n = t.fillBefore(e).append(e);
    e = n.append(t.matchFragment(n).fillBefore(P.empty, !0));
  }
  return e;
}
function Zr(e, t, n, r) {
  if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
    let i = Ir(e.doc, t, r.type);
    i != null && (t = n = i);
  }
  e.replaceRange(t, n, new I(P.from(r), 0, 0));
}
function Qr(e, t, n) {
  let r = e.doc.resolve(t),
    i = e.doc.resolve(n);
  if (
    r.parent.isTextblock &&
    i.parent.isTextblock &&
    r.start() != i.start() &&
    r.parentOffset == 0 &&
    i.parentOffset == 0
  ) {
    let a = r.sharedDepth(n),
      o = !1;
    for (let e = r.depth; e > a; e--) r.node(e).type.spec.isolating && (o = !0);
    for (let e = i.depth; e > a; e--) i.node(e).type.spec.isolating && (o = !0);
    if (!o) {
      for (let e = r.depth; e > 0 && t == r.start(e); e--) t = r.before(e);
      for (let e = i.depth; e > 0 && n == i.start(e); e--) n = i.before(e);
      ((r = e.doc.resolve(t)), (i = e.doc.resolve(n)));
    }
  }
  let a = $r(r, i);
  for (let t = 0; t < a.length; t++) {
    let n = a[t],
      o = t == a.length - 1;
    if ((o && n == 0) || r.node(n).type.contentMatch.validEnd)
      return e.delete(r.start(n), i.end(n));
    if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1))))
      return e.delete(r.before(n), i.after(n));
  }
  for (let a = 1; a <= r.depth && a <= i.depth; a++)
    if (
      t - r.start(a) == r.depth - a &&
      n > r.end(a) &&
      i.end(a) - n != i.depth - a &&
      r.start(a - 1) == i.start(a - 1) &&
      r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))
    )
      return e.delete(r.before(a), n);
  e.delete(t, n);
}
function $r(e, t) {
  let n = [],
    r = Math.min(e.depth, t.depth);
  for (let i = r; i >= 0; i--) {
    let r = e.start(i);
    if (
      r < e.pos - (e.depth - i) ||
      t.end(i) > t.pos + (t.depth - i) ||
      e.node(i).type.spec.isolating ||
      t.node(i).type.spec.isolating
    )
      break;
    (r == t.start(i) ||
      (i == e.depth &&
        i == t.depth &&
        e.parent.inlineContent &&
        t.parent.inlineContent &&
        i &&
        t.start(i - 1) == r - 1)) &&
      n.push(i);
  }
  return n;
}
var ei = class e extends rr {
  constructor(e, t, n) {
    (super(), (this.pos = e), (this.attr = t), (this.value = n));
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t) return ir.fail(`No node at attribute step's position`);
    let n = Object.create(null);
    for (let e in t.attrs) n[e] = t.attrs[e];
    n[this.attr] = this.value;
    let r = t.type.create(n, null, t.marks);
    return ir.fromReplace(e, this.pos, this.pos + 1, new I(P.from(r), 0, +!t.isLeaf));
  }
  getMap() {
    return er.empty;
  }
  invert(t) {
    return new e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
  }
  map(t) {
    let n = t.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new e(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: `attr`, pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(t, n) {
    if (typeof n.pos != `number` || typeof n.attr != `string`)
      throw RangeError(`Invalid input for AttrStep.fromJSON`);
    return new e(n.pos, n.attr, n.value);
  }
};
rr.jsonID(`attr`, ei);
var ti = class e extends rr {
  constructor(e, t) {
    (super(), (this.attr = e), (this.value = t));
  }
  apply(e) {
    let t = Object.create(null);
    for (let n in e.attrs) t[n] = e.attrs[n];
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return ir.ok(n);
  }
  getMap() {
    return er.empty;
  }
  invert(t) {
    return new e(this.attr, t.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: `docAttr`, attr: this.attr, value: this.value };
  }
  static fromJSON(t, n) {
    if (typeof n.attr != `string`) throw RangeError(`Invalid input for DocAttrStep.fromJSON`);
    return new e(n.attr, n.value);
  }
};
rr.jsonID(`docAttr`, ti);
var ni = class extends Error {};
((ni = function e(t) {
  let n = Error.call(this, t);
  return ((n.__proto__ = e.prototype), n);
}),
  (ni.prototype = Object.create(Error.prototype)),
  (ni.prototype.constructor = ni),
  (ni.prototype.name = `TransformError`));
var ri = class {
    constructor(e) {
      ((this.doc = e), (this.steps = []), (this.docs = []), (this.mapping = new tr()));
    }
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    step(e) {
      let t = this.maybeStep(e);
      if (t.failed) throw new ni(t.failed);
      return this;
    }
    maybeStep(e) {
      let t = e.apply(this.doc);
      return (t.failed || this.addStep(e, t.doc), t);
    }
    get docChanged() {
      return this.steps.length > 0;
    }
    changedRange() {
      let e = 1e9,
        t = -1e9;
      for (let n = 0; n < this.mapping.maps.length; n++) {
        let r = this.mapping.maps[n];
        (n && ((e = r.map(e, 1)), (t = r.map(t, -1))),
          r.forEach((n, r, i, a) => {
            ((e = Math.min(e, i)), (t = Math.max(t, a)));
          }));
      }
      return e == 1e9 ? null : { from: e, to: t };
    }
    addStep(e, t) {
      (this.docs.push(this.doc),
        this.steps.push(e),
        this.mapping.appendMap(e.getMap()),
        (this.doc = t));
    }
    replace(e, t = e, n = I.empty) {
      let r = Rr(this.doc, e, t, n);
      return (r && this.step(r), this);
    }
    replaceWith(e, t, n) {
      return this.replace(e, t, new I(P.from(n), 0, 0));
    }
    delete(e, t) {
      return this.replace(e, t, I.empty);
    }
    insert(e, t) {
      return this.replaceWith(e, e, t);
    }
    replaceRange(e, t, n) {
      return (Yr(this, e, t, n), this);
    }
    replaceRangeWith(e, t, n) {
      return (Zr(this, e, t, n), this);
    }
    deleteRange(e, t) {
      return (Qr(this, e, t), this);
    }
    lift(e, t) {
      return (vr(this, e, t), this);
    }
    join(e, t = 1) {
      return (Fr(this, e, t), this);
    }
    wrap(e, t) {
      return (Cr(this, e, t), this);
    }
    setBlockType(e, t = e, n, r = null) {
      return (wr(this, e, t, n, r), this);
    }
    setNodeMarkup(e, t, n = null, r) {
      return (Or(this, e, t, n, r), this);
    }
    setNodeAttribute(e, t, n) {
      return (this.step(new ei(e, t, n)), this);
    }
    setDocAttribute(e, t) {
      return (this.step(new ti(e, t)), this);
    }
    addNodeMark(e, t) {
      return (this.step(new cr(e, t)), this);
    }
    removeNodeMark(e, t) {
      let n = this.doc.nodeAt(e);
      if (!n) throw RangeError(`No node at position ` + e);
      if (t instanceof F) t.isInSet(n.marks) && this.step(new lr(e, t));
      else {
        let r = n.marks,
          i,
          a = [];
        for (; (i = t.isInSet(r));) (a.push(new lr(e, i)), (r = i.removeFromSet(r)));
        for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
      }
      return this;
    }
    split(e, t = 1, n) {
      return (Ar(this, e, t, n), this);
    }
    addMark(e, t, n) {
      return (pr(this, e, t, n), this);
    }
    removeMark(e, t, n) {
      return (mr(this, e, t, n), this);
    }
    clearIncompatible(e, t, n) {
      return (hr(this, e, t, n), this);
    }
  },
  ii = Object.create(null),
  L = class {
    constructor(e, t, n) {
      ((this.$anchor = e), (this.$head = t), (this.ranges = n || [new ai(e.min(t), e.max(t))]));
    }
    get anchor() {
      return this.$anchor.pos;
    }
    get head() {
      return this.$head.pos;
    }
    get from() {
      return this.$from.pos;
    }
    get to() {
      return this.$to.pos;
    }
    get $from() {
      return this.ranges[0].$from;
    }
    get $to() {
      return this.ranges[0].$to;
    }
    get empty() {
      let e = this.ranges;
      for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
      return !0;
    }
    content() {
      return this.$from.doc.slice(this.from, this.to, !0);
    }
    replace(e, t = I.empty) {
      let n = t.content.lastChild,
        r = null;
      for (let e = 0; e < t.openEnd; e++) ((r = n), (n = n.lastChild));
      let i = e.steps.length,
        a = this.ranges;
      for (let o = 0; o < a.length; o++) {
        let { $from: s, $to: c } = a[o],
          l = e.mapping.slice(i);
        (e.replaceRange(l.map(s.pos), l.map(c.pos), o ? I.empty : t),
          o == 0 && pi(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1));
      }
    }
    replaceWith(e, t) {
      let n = e.steps.length,
        r = this.ranges;
      for (let i = 0; i < r.length; i++) {
        let { $from: a, $to: o } = r[i],
          s = e.mapping.slice(n),
          c = s.map(a.pos),
          l = s.map(o.pos);
        i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), pi(e, n, t.isInline ? -1 : 1));
      }
    }
    static findFrom(e, t, n = !1) {
      let r = e.parent.inlineContent ? new R(e) : fi(e.node(0), e.parent, e.pos, e.index(), t, n);
      if (r) return r;
      for (let r = e.depth - 1; r >= 0; r--) {
        let i =
          t < 0
            ? fi(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n)
            : fi(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
        if (i) return i;
      }
      return null;
    }
    static near(e, t = 1) {
      return this.findFrom(e, t) || this.findFrom(e, -t) || new ui(e.node(0));
    }
    static atStart(e) {
      return fi(e, e, 0, 0, 1) || new ui(e);
    }
    static atEnd(e) {
      return fi(e, e, e.content.size, e.childCount, -1) || new ui(e);
    }
    static fromJSON(e, t) {
      if (!t || !t.type) throw RangeError(`Invalid input for Selection.fromJSON`);
      let n = ii[t.type];
      if (!n) throw RangeError(`No selection type ${t.type} defined`);
      return n.fromJSON(e, t);
    }
    static jsonID(e, t) {
      if (e in ii) throw RangeError(`Duplicate use of selection JSON ID ` + e);
      return ((ii[e] = t), (t.prototype.jsonID = e), t);
    }
    getBookmark() {
      return R.between(this.$anchor, this.$head).getBookmark();
    }
  };
L.prototype.visible = !0;
var ai = class {
    constructor(e, t) {
      ((this.$from = e), (this.$to = t));
    }
  },
  oi = !1;
function si(e) {
  !oi &&
    !e.parent.inlineContent &&
    ((oi = !0),
    console.warn(
      `TextSelection endpoint not pointing into a node with inline content (` +
        e.parent.type.name +
        `)`,
    ));
}
var R = class e extends L {
  constructor(e, t = e) {
    (si(e), si(t), super(e, t));
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(t, n) {
    let r = t.resolve(n.map(this.head));
    if (!r.parent.inlineContent) return L.near(r);
    let i = t.resolve(n.map(this.anchor));
    return new e(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = I.empty) {
    if ((super.replace(e, t), t == I.empty)) {
      let t = this.$from.marksAcross(this.$to);
      t && e.ensureMarks(t);
    }
  }
  eq(t) {
    return t instanceof e && t.anchor == this.anchor && t.head == this.head;
  }
  getBookmark() {
    return new ci(this.anchor, this.head);
  }
  toJSON() {
    return { type: `text`, anchor: this.anchor, head: this.head };
  }
  static fromJSON(t, n) {
    if (typeof n.anchor != `number` || typeof n.head != `number`)
      throw RangeError(`Invalid input for TextSelection.fromJSON`);
    return new e(t.resolve(n.anchor), t.resolve(n.head));
  }
  static create(e, t, n = t) {
    let r = e.resolve(t);
    return new this(r, n == t ? r : e.resolve(n));
  }
  static between(t, n, r) {
    let i = t.pos - n.pos;
    if (((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent)) {
      let e = L.findFrom(n, r, !0) || L.findFrom(n, -r, !0);
      if (e) n = e.$head;
      else return L.near(n, r);
    }
    return (
      t.parent.inlineContent ||
        (i == 0
          ? (t = n)
          : ((t = (L.findFrom(t, -r, !0) || L.findFrom(t, r, !0)).$anchor),
            t.pos < n.pos != i < 0 && (t = n))),
      new e(t, n)
    );
  }
};
L.jsonID(`text`, R);
var ci = class e {
    constructor(e, t) {
      ((this.anchor = e), (this.head = t));
    }
    map(t) {
      return new e(t.map(this.anchor), t.map(this.head));
    }
    resolve(e) {
      return R.between(e.resolve(this.anchor), e.resolve(this.head));
    }
  },
  z = class e extends L {
    constructor(e) {
      let t = e.nodeAfter,
        n = e.node(0).resolve(e.pos + t.nodeSize);
      (super(e, n), (this.node = t));
    }
    map(t, n) {
      let { deleted: r, pos: i } = n.mapResult(this.anchor),
        a = t.resolve(i);
      return r ? L.near(a) : new e(a);
    }
    content() {
      return new I(P.from(this.node), 0, 0);
    }
    eq(t) {
      return t instanceof e && t.anchor == this.anchor;
    }
    toJSON() {
      return { type: `node`, anchor: this.anchor };
    }
    getBookmark() {
      return new li(this.anchor);
    }
    static fromJSON(t, n) {
      if (typeof n.anchor != `number`) throw RangeError(`Invalid input for NodeSelection.fromJSON`);
      return new e(t.resolve(n.anchor));
    }
    static create(t, n) {
      return new e(t.resolve(n));
    }
    static isSelectable(e) {
      return !e.isText && e.type.spec.selectable !== !1;
    }
  };
((z.prototype.visible = !1), L.jsonID(`node`, z));
var li = class e {
    constructor(e) {
      this.anchor = e;
    }
    map(t) {
      let { deleted: n, pos: r } = t.mapResult(this.anchor);
      return n ? new ci(r, r) : new e(r);
    }
    resolve(e) {
      let t = e.resolve(this.anchor),
        n = t.nodeAfter;
      return n && z.isSelectable(n) ? new z(t) : L.near(t);
    }
  },
  ui = class e extends L {
    constructor(e) {
      super(e.resolve(0), e.resolve(e.content.size));
    }
    replace(e, t = I.empty) {
      if (t == I.empty) {
        e.delete(0, e.doc.content.size);
        let t = L.atStart(e.doc);
        t.eq(e.selection) || e.setSelection(t);
      } else super.replace(e, t);
    }
    toJSON() {
      return { type: `all` };
    }
    static fromJSON(t) {
      return new e(t);
    }
    map(t) {
      return new e(t);
    }
    eq(t) {
      return t instanceof e;
    }
    getBookmark() {
      return di;
    }
  };
L.jsonID(`all`, ui);
var di = {
  map() {
    return this;
  },
  resolve(e) {
    return new ui(e);
  },
};
function fi(e, t, n, r, i, a = !1) {
  if (t.inlineContent) return R.create(e, n);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
    let r = t.child(o);
    if (!r.isAtom) {
      let t = fi(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
      if (t) return t;
    } else if (!a && z.isSelectable(r)) return z.create(e, n - (i < 0 ? r.nodeSize : 0));
    n += r.nodeSize * i;
  }
  return null;
}
function pi(e, t, n) {
  let r = e.steps.length - 1;
  if (r < t) return;
  let i = e.steps[r];
  if (!(i instanceof ur || i instanceof dr)) return;
  let a = e.mapping.maps[r],
    o;
  (a.forEach((e, t, n, r) => {
    o ??= r;
  }),
    e.setSelection(L.near(e.doc.resolve(o), n)));
}
var mi = 1,
  hi = 2,
  gi = 4,
  _i = class extends ri {
    constructor(e) {
      (super(e.doc),
        (this.curSelectionFor = 0),
        (this.updated = 0),
        (this.meta = Object.create(null)),
        (this.time = Date.now()),
        (this.curSelection = e.selection),
        (this.storedMarks = e.storedMarks));
    }
    get selection() {
      return (
        this.curSelectionFor < this.steps.length &&
          ((this.curSelection = this.curSelection.map(
            this.doc,
            this.mapping.slice(this.curSelectionFor),
          )),
          (this.curSelectionFor = this.steps.length)),
        this.curSelection
      );
    }
    setSelection(e) {
      if (e.$from.doc != this.doc)
        throw RangeError(`Selection passed to setSelection must point at the current document`);
      return (
        (this.curSelection = e),
        (this.curSelectionFor = this.steps.length),
        (this.updated = (this.updated | mi) & -3),
        (this.storedMarks = null),
        this
      );
    }
    get selectionSet() {
      return (this.updated & mi) > 0;
    }
    setStoredMarks(e) {
      return ((this.storedMarks = e), (this.updated |= hi), this);
    }
    ensureMarks(e) {
      return (
        F.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e),
        this
      );
    }
    addStoredMark(e) {
      return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    removeStoredMark(e) {
      return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    get storedMarksSet() {
      return (this.updated & hi) > 0;
    }
    addStep(e, t) {
      (super.addStep(e, t), (this.updated &= -3), (this.storedMarks = null));
    }
    setTime(e) {
      return ((this.time = e), this);
    }
    replaceSelection(e) {
      return (this.selection.replace(this, e), this);
    }
    replaceSelectionWith(e, t = !0) {
      let n = this.selection;
      return (
        t &&
          (e = e.mark(
            this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || F.none),
          )),
        n.replaceWith(this, e),
        this
      );
    }
    deleteSelection() {
      return (this.selection.replace(this), this);
    }
    insertText(e, t, n) {
      let r = this.doc.type.schema;
      if (t == null) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
      {
        if (((n ??= t), !e)) return this.deleteRange(t, n);
        let i = this.storedMarks;
        if (!i) {
          let e = this.doc.resolve(t);
          i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
        }
        return (
          this.replaceRangeWith(t, n, r.text(e, i)),
          !this.selection.empty &&
            this.selection.to == t + e.length &&
            this.setSelection(L.near(this.selection.$to)),
          this
        );
      }
    }
    setMeta(e, t) {
      return ((this.meta[typeof e == `string` ? e : e.key] = t), this);
    }
    getMeta(e) {
      return this.meta[typeof e == `string` ? e : e.key];
    }
    get isGeneric() {
      for (let e in this.meta) return !1;
      return !0;
    }
    scrollIntoView() {
      return ((this.updated |= gi), this);
    }
    get scrolledIntoView() {
      return (this.updated & gi) > 0;
    }
  };
function vi(e, t) {
  return !t || !e ? e : e.bind(t);
}
var yi = class {
    constructor(e, t, n) {
      ((this.name = e), (this.init = vi(t.init, n)), (this.apply = vi(t.apply, n)));
    }
  },
  bi = [
    new yi(`doc`, {
      init(e) {
        return e.doc || e.schema.topNodeType.createAndFill();
      },
      apply(e) {
        return e.doc;
      },
    }),
    new yi(`selection`, {
      init(e, t) {
        return e.selection || L.atStart(t.doc);
      },
      apply(e) {
        return e.selection;
      },
    }),
    new yi(`storedMarks`, {
      init(e) {
        return e.storedMarks || null;
      },
      apply(e, t, n, r) {
        return r.selection.$cursor ? e.storedMarks : null;
      },
    }),
    new yi(`scrollToSelection`, {
      init() {
        return 0;
      },
      apply(e, t) {
        return e.scrolledIntoView ? t + 1 : t;
      },
    }),
  ],
  xi = class {
    constructor(e, t) {
      ((this.schema = e),
        (this.plugins = []),
        (this.pluginsByKey = Object.create(null)),
        (this.fields = bi.slice()),
        t &&
          t.forEach((e) => {
            if (this.pluginsByKey[e.key])
              throw RangeError(`Adding different instances of a keyed plugin (` + e.key + `)`);
            (this.plugins.push(e),
              (this.pluginsByKey[e.key] = e),
              e.spec.state && this.fields.push(new yi(e.key, e.spec.state, e)));
          }));
    }
  },
  Si = class e {
    constructor(e) {
      this.config = e;
    }
    get schema() {
      return this.config.schema;
    }
    get plugins() {
      return this.config.plugins;
    }
    apply(e) {
      return this.applyTransaction(e).state;
    }
    filterTransaction(e, t = -1) {
      for (let n = 0; n < this.config.plugins.length; n++)
        if (n != t) {
          let t = this.config.plugins[n];
          if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
        }
      return !0;
    }
    applyTransaction(e) {
      if (!this.filterTransaction(e)) return { state: this, transactions: [] };
      let t = [e],
        n = this.applyInner(e),
        r = null;
      for (;;) {
        let i = !1;
        for (let a = 0; a < this.config.plugins.length; a++) {
          let o = this.config.plugins[a];
          if (o.spec.appendTransaction) {
            let s = r ? r[a].n : 0,
              c = r ? r[a].state : this,
              l = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
            if (l && n.filterTransaction(l, a)) {
              if ((l.setMeta(`appendedTransaction`, e), !r)) {
                r = [];
                for (let e = 0; e < this.config.plugins.length; e++)
                  r.push(e < a ? { state: n, n: t.length } : { state: this, n: 0 });
              }
              (t.push(l), (n = n.applyInner(l)), (i = !0));
            }
            r && (r[a] = { state: n, n: t.length });
          }
        }
        if (!i) return { state: n, transactions: t };
      }
    }
    applyInner(t) {
      if (!t.before.eq(this.doc)) throw RangeError(`Applying a mismatched transaction`);
      let n = new e(this.config),
        r = this.config.fields;
      for (let e = 0; e < r.length; e++) {
        let i = r[e];
        n[i.name] = i.apply(t, this[i.name], this, n);
      }
      return n;
    }
    get tr() {
      return new _i(this);
    }
    static create(t) {
      let n = new xi(t.doc ? t.doc.type.schema : t.schema, t.plugins),
        r = new e(n);
      for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
      return r;
    }
    reconfigure(t) {
      let n = new xi(this.schema, t.plugins),
        r = n.fields,
        i = new e(n);
      for (let e = 0; e < r.length; e++) {
        let n = r[e].name;
        i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
      }
      return i;
    }
    toJSON(e) {
      let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
      if (
        (this.storedMarks && (t.storedMarks = this.storedMarks.map((e) => e.toJSON())),
        e && typeof e == `object`)
      )
        for (let n in e) {
          if (n == `doc` || n == `selection`)
            throw RangeError("The JSON fields `doc` and `selection` are reserved");
          let r = e[n],
            i = r.spec.state;
          i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
        }
      return t;
    }
    static fromJSON(t, n, r) {
      if (!n) throw RangeError(`Invalid input for EditorState.fromJSON`);
      if (!t.schema) throw RangeError(`Required config field 'schema' missing`);
      let i = new xi(t.schema, t.plugins),
        a = new e(i);
      return (
        i.fields.forEach((e) => {
          if (e.name == `doc`) a.doc = qt.fromJSON(t.schema, n.doc);
          else if (e.name == `selection`) a.selection = L.fromJSON(a.doc, n.selection);
          else if (e.name == `storedMarks`)
            n.storedMarks && (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
          else {
            if (r)
              for (let i in r) {
                let o = r[i],
                  s = o.spec.state;
                if (
                  o.key == e.name &&
                  s &&
                  s.fromJSON &&
                  Object.prototype.hasOwnProperty.call(n, i)
                ) {
                  a[e.name] = s.fromJSON.call(o, t, n[i], a);
                  return;
                }
              }
            a[e.name] = e.init(t, a);
          }
        }),
        a
      );
    }
  };
function Ci(e, t, n) {
  for (let r in e) {
    let i = e[r];
    (i instanceof Function ? (i = i.bind(t)) : r == `handleDOMEvents` && (i = Ci(i, t, {})),
      (n[r] = i));
  }
  return n;
}
var B = class {
    constructor(e) {
      ((this.spec = e),
        (this.props = {}),
        e.props && Ci(e.props, this, this.props),
        (this.key = e.key ? e.key.key : Ti(`plugin`)));
    }
    getState(e) {
      return e[this.key];
    }
  },
  wi = Object.create(null);
function Ti(e) {
  return e in wi ? e + `$` + ++wi[e] : ((wi[e] = 0), e + `$`);
}
var V = class {
    constructor(e = `key`) {
      this.key = Ti(e);
    }
    get(e) {
      return e.config.pluginsByKey[this.key];
    }
    getState(e) {
      return e[this.key];
    }
  },
  Ei = (e, t) => !e.selection.empty && (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function Di(e, t) {
  let { $cursor: n } = e.selection;
  return !n || (t ? !t.endOfTextblock(`backward`, e) : n.parentOffset > 0) ? null : n;
}
var Oi = (e, t, n) => {
    let r = Di(e, n);
    if (!r) return !1;
    let i = Pi(r);
    if (!i) {
      let n = r.blockRange(),
        i = n && _r(n);
      return i != null && (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
    }
    let a = i.nodeBefore;
    if ($i(e, i, t, -1)) return !0;
    if (r.parent.content.size == 0 && (Mi(a, `end`) || z.isSelectable(a)))
      for (let n = r.depth; ; n--) {
        let o = Rr(e.doc, r.before(n), r.after(n), I.empty);
        if (o && o.slice.size < o.to - o.from) {
          if (t) {
            let n = e.tr.step(o);
            (n.setSelection(
              Mi(a, `end`)
                ? L.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1)
                : z.create(n.doc, i.pos - a.nodeSize),
            ),
              t(n.scrollIntoView()));
          }
          return !0;
        }
        if (n == 1 || r.node(n - 1).childCount > 1) break;
      }
    return a.isAtom && i.depth == r.depth - 1
      ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0)
      : !1;
  },
  ki = (e, t, n) => {
    let r = Di(e, n);
    if (!r) return !1;
    let i = Pi(r);
    return i ? ji(e, i, t) : !1;
  },
  Ai = (e, t, n) => {
    let r = Fi(e, n);
    if (!r) return !1;
    let i = Ri(r);
    return i ? ji(e, i, t) : !1;
  };
function ji(e, t, n) {
  let r = t.nodeBefore,
    i = t.pos - 1;
  for (; !r.isTextblock; i--) {
    if (r.type.spec.isolating) return !1;
    let e = r.lastChild;
    if (!e) return !1;
    r = e;
  }
  let a = t.nodeAfter,
    o = t.pos + 1;
  for (; !a.isTextblock; o++) {
    if (a.type.spec.isolating) return !1;
    let e = a.firstChild;
    if (!e) return !1;
    a = e;
  }
  let s = Rr(e.doc, i, o, I.empty);
  if (!s || s.from != i || (s instanceof ur && s.slice.size >= o - i)) return !1;
  if (n) {
    let t = e.tr.step(s);
    (t.setSelection(R.create(t.doc, i)), n(t.scrollIntoView()));
  }
  return !0;
}
function Mi(e, t, n = !1) {
  for (let r = e; r; r = t == `start` ? r.firstChild : r.lastChild) {
    if (r.isTextblock) return !0;
    if (n && r.childCount != 1) return !1;
  }
  return !1;
}
var Ni = (e, t, n) => {
  let { $head: r, empty: i } = e.selection,
    a = r;
  if (!i) return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock(`backward`, e) : r.parentOffset > 0) return !1;
    a = Pi(r);
  }
  let o = a && a.nodeBefore;
  return !o || !z.isSelectable(o)
    ? !1
    : (t && t(e.tr.setSelection(z.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Pi(e) {
  if (!e.parent.type.spec.isolating)
    for (let t = e.depth - 1; t >= 0; t--) {
      if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
      if (e.node(t).type.spec.isolating) break;
    }
  return null;
}
function Fi(e, t) {
  let { $cursor: n } = e.selection;
  return !n || (t ? !t.endOfTextblock(`forward`, e) : n.parentOffset < n.parent.content.size)
    ? null
    : n;
}
var Ii = (e, t, n) => {
    let r = Fi(e, n);
    if (!r) return !1;
    let i = Ri(r);
    if (!i) return !1;
    let a = i.nodeAfter;
    if ($i(e, i, t, 1)) return !0;
    if (r.parent.content.size == 0 && (Mi(a, `start`) || z.isSelectable(a))) {
      let n = Rr(e.doc, r.before(), r.after(), I.empty);
      if (n && n.slice.size < n.to - n.from) {
        if (t) {
          let r = e.tr.step(n);
          (r.setSelection(
            Mi(a, `start`)
              ? L.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1)
              : z.create(r.doc, r.mapping.map(i.pos)),
          ),
            t(r.scrollIntoView()));
        }
        return !0;
      }
    }
    return a.isAtom && i.depth == r.depth - 1
      ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0)
      : !1;
  },
  Li = (e, t, n) => {
    let { $head: r, empty: i } = e.selection,
      a = r;
    if (!i) return !1;
    if (r.parent.isTextblock) {
      if (n ? !n.endOfTextblock(`forward`, e) : r.parentOffset < r.parent.content.size) return !1;
      a = Ri(r);
    }
    let o = a && a.nodeAfter;
    return !o || !z.isSelectable(o)
      ? !1
      : (t && t(e.tr.setSelection(z.create(e.doc, a.pos)).scrollIntoView()), !0);
  };
function Ri(e) {
  if (!e.parent.type.spec.isolating)
    for (let t = e.depth - 1; t >= 0; t--) {
      let n = e.node(t);
      if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
      if (n.type.spec.isolating) break;
    }
  return null;
}
var zi = (e, t) => {
    let n = e.selection,
      r = n instanceof z,
      i;
    if (r) {
      if (n.node.isTextblock || !jr(e.doc, n.from)) return !1;
      i = n.from;
    } else if (((i = Pr(e.doc, n.from, -1)), i == null)) return !1;
    if (t) {
      let n = e.tr.join(i);
      (r && n.setSelection(z.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)),
        t(n.scrollIntoView()));
    }
    return !0;
  },
  Bi = (e, t) => {
    let n = e.selection,
      r;
    if (n instanceof z) {
      if (n.node.isTextblock || !jr(e.doc, n.to)) return !1;
      r = n.to;
    } else if (((r = Pr(e.doc, n.to, 1)), r == null)) return !1;
    return (t && t(e.tr.join(r).scrollIntoView()), !0);
  },
  Vi = (e, t) => {
    let { $from: n, $to: r } = e.selection,
      i = n.blockRange(r),
      a = i && _r(i);
    return a != null && (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
  },
  Hi = (e, t) => {
    let { $head: n, $anchor: r } = e.selection;
    return !n.parent.type.spec.code || !n.sameParent(r)
      ? !1
      : (t &&
          t(
            e.tr
              .insertText(`
`)
              .scrollIntoView(),
          ),
        !0);
  };
function Ui(e) {
  for (let t = 0; t < e.edgeCount; t++) {
    let { type: n } = e.edge(t);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
var Wi = (e, t) => {
    let { $head: n, $anchor: r } = e.selection;
    if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
    let i = n.node(-1),
      a = n.indexAfter(-1),
      o = Ui(i.contentMatchAt(a));
    if (!o || !i.canReplaceWith(a, a, o)) return !1;
    if (t) {
      let r = n.after(),
        i = e.tr.replaceWith(r, r, o.createAndFill());
      (i.setSelection(L.near(i.doc.resolve(r), 1)), t(i.scrollIntoView()));
    }
    return !0;
  },
  Gi = (e, t) => {
    let n = e.selection,
      { $from: r, $to: i } = n;
    if (n instanceof ui || r.parent.inlineContent || i.parent.inlineContent) return !1;
    let a = Ui(i.parent.contentMatchAt(i.indexAfter()));
    if (!a || !a.isTextblock) return !1;
    if (t) {
      let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos,
        o = e.tr.insert(n, a.createAndFill());
      (o.setSelection(R.create(o.doc, n + 1)), t(o.scrollIntoView()));
    }
    return !0;
  },
  Ki = (e, t) => {
    let { $cursor: n } = e.selection;
    if (!n || n.parent.content.size) return !1;
    if (n.depth > 1 && n.after() != n.end(-1)) {
      let r = n.before();
      if (kr(e.doc, r)) return (t && t(e.tr.split(r).scrollIntoView()), !0);
    }
    let r = n.blockRange(),
      i = r && _r(r);
    return i != null && (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
  };
function qi(e) {
  return (t, n) => {
    if (t.selection instanceof z && t.selection.node.isBlock) {
      let { $from: e } = t.selection;
      return !e.parentOffset || !kr(t.doc, e.pos)
        ? !1
        : (n && n(t.tr.split(e.pos).scrollIntoView()), !0);
    }
    if (!t.selection.$from.depth) return !1;
    let r = t.tr;
    !t.selection.empty &&
      (t.selection instanceof R || t.selection instanceof ui) &&
      r.deleteSelection();
    let { $from: i } = r.selection,
      a = r.steps.length,
      o = [],
      s,
      c,
      l = !1,
      u = !1;
    for (let t = i.depth; ; t--)
      if (i.node(t).isBlock) {
        ((l = i.end(t) == i.pos + (i.depth - t)),
          (u = i.start(t) == i.pos - (i.depth - t)),
          (c = Ui(i.node(t - 1).contentMatchAt(i.indexAfter(t - 1)))));
        let n = e && e(i.parent, l, i);
        (o.unshift(n || (l && c ? { type: c } : null)), (s = t));
        break;
      } else {
        if (t == 1) return !1;
        o.unshift(null);
      }
    let d = i.pos,
      f = kr(r.doc, d, o.length, o);
    if (((f ||= ((o[0] = c ? { type: c } : null), kr(r.doc, d, o.length, o))), !f)) return !1;
    if ((r.split(d, o.length, o), !l && u && i.node(s).type != c)) {
      let e = r.mapping.slice(a),
        t = e.map(i.before(s)),
        n = r.doc.resolve(t);
      c &&
        i.node(s - 1).canReplaceWith(n.index(), n.index() + 1, c) &&
        r.setNodeMarkup(e.map(i.before(s)), c);
    }
    return (n && n(r.scrollIntoView()), !0);
  };
}
var Ji = qi(),
  Yi = (e, t) =>
    Ji(
      e,
      t &&
        ((n) => {
          let r = e.storedMarks || (e.selection.$to.parentOffset && e.selection.$from.marks());
          (r && n.ensureMarks(r), t(n));
        }),
    ),
  Xi = (e, t) => {
    let { $from: n, to: r } = e.selection,
      i,
      a = n.sharedDepth(r);
    return a != 0 && ((i = n.before(a)), t && t(e.tr.setSelection(z.create(e.doc, i))), !0);
  },
  Zi = (e, t) => (t && t(e.tr.setSelection(new ui(e.doc))), !0);
function Qi(e, t, n) {
  let r = t.nodeBefore,
    i = t.nodeAfter,
    a = t.index();
  return !r || !i || !r.type.compatibleContent(i.type)
    ? !1
    : !r.content.size && t.parent.canReplace(a - 1, a)
      ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0)
      : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || jr(e.doc, t.pos))
        ? !1
        : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function $i(e, t, n, r) {
  let i = t.nodeBefore,
    a = t.nodeAfter,
    o,
    s,
    c = i.type.spec.isolating || a.type.spec.isolating;
  if (!c && Qi(e, t, n)) return !0;
  let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
  if (
    l &&
    (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) &&
    s.matchType(o[0] || a.type).validEnd
  ) {
    if (n) {
      let r = t.pos + a.nodeSize,
        s = P.empty;
      for (let e = o.length - 1; e >= 0; e--) s = P.from(o[e].create(null, s));
      s = P.from(i.copy(s));
      let c = e.tr.step(new dr(t.pos - 1, r, t.pos, r, new I(s, 1, 0), o.length, !0)),
        l = c.doc.resolve(r + 2 * o.length);
      (l.nodeAfter && l.nodeAfter.type == i.type && jr(c.doc, l.pos) && c.join(l.pos),
        n(c.scrollIntoView()));
    }
    return !0;
  }
  let u = a.type.spec.isolating || (r > 0 && c) ? null : L.findFrom(t, 1),
    d = u && u.$from.blockRange(u.$to),
    f = d && _r(d);
  if (f != null && f >= t.depth) return (n && n(e.tr.lift(d, f).scrollIntoView()), !0);
  if (l && Mi(a, `start`, !0) && Mi(i, `end`)) {
    let r = i,
      o = [];
    for (; o.push(r), !r.isTextblock;) r = r.lastChild;
    let s = a,
      c = 1;
    for (; !s.isTextblock; s = s.firstChild) c++;
    if (r.canReplace(r.childCount, r.childCount, s.content)) {
      if (n) {
        let r = P.empty;
        for (let e = o.length - 1; e >= 0; e--) r = P.from(o[e].copy(r));
        n(
          e.tr
            .step(
              new dr(
                t.pos - o.length,
                t.pos + a.nodeSize,
                t.pos + c,
                t.pos + a.nodeSize - c,
                new I(r, o.length, 0),
                0,
                !0,
              ),
            )
            .scrollIntoView(),
        );
      }
      return !0;
    }
  }
  return !1;
}
function ea(e) {
  return function (t, n) {
    let r = t.selection,
      i = e < 0 ? r.$from : r.$to,
      a = i.depth;
    for (; i.node(a).isInline;) {
      if (!a) return !1;
      a--;
    }
    return i.node(a).isTextblock
      ? (n && n(t.tr.setSelection(R.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0)
      : !1;
  };
}
var ta = ea(-1),
  na = ea(1);
function ra(e, t = null) {
  return function (n, r) {
    let { $from: i, $to: a } = n.selection,
      o = i.blockRange(a),
      s = o && yr(o, e, t);
    return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
  };
}
function ia(e, t = null) {
  return function (n, r) {
    let i = !1;
    for (let r = 0; r < n.selection.ranges.length && !i; r++) {
      let {
        $from: { pos: a },
        $to: { pos: o },
      } = n.selection.ranges[r];
      n.doc.nodesBetween(a, o, (r, a) => {
        if (i) return !1;
        if (r.isTextblock && !r.hasMarkup(e, t)) {
          if (r.type == e) i = !0;
          else {
            let t = n.doc.resolve(a),
              r = t.index();
            i = t.parent.canReplaceWith(r, r + 1, e);
          }
        }
      });
    }
    if (!i) return !1;
    if (r) {
      let i = n.tr;
      for (let r = 0; r < n.selection.ranges.length; r++) {
        let {
          $from: { pos: a },
          $to: { pos: o },
        } = n.selection.ranges[r];
        i.setBlockType(a, o, e, t);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
function aa(...e) {
  return function (t, n, r) {
    for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
    return !1;
  };
}
var oa = aa(Ei, Oi, Ni),
  sa = aa(Ei, Ii, Li),
  ca = {
    Enter: aa(Hi, Gi, Ki, Ji),
    "Mod-Enter": Wi,
    Backspace: oa,
    "Mod-Backspace": oa,
    "Shift-Backspace": oa,
    Delete: sa,
    "Mod-Delete": sa,
    "Mod-a": Zi,
  },
  la = {
    "Ctrl-h": ca.Backspace,
    "Alt-Backspace": ca[`Mod-Backspace`],
    "Ctrl-d": ca.Delete,
    "Ctrl-Alt-Backspace": ca[`Mod-Delete`],
    "Alt-Delete": ca[`Mod-Delete`],
    "Alt-d": ca[`Mod-Delete`],
    "Ctrl-a": ta,
    "Ctrl-e": na,
  };
for (let e in ca) la[e] = ca[e];
typeof navigator < `u`
  ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
  : typeof os < `u` && os.platform && os.platform();
function ua(e, t = null) {
  return function (n, r) {
    let { $from: i, $to: a } = n.selection,
      o = i.blockRange(a);
    if (!o) return !1;
    let s = r ? n.tr : null;
    return da(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
  };
}
function da(e, t, n, r = null) {
  let i = !1,
    a = t,
    o = t.$from.doc;
  if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
    if (t.$from.index(t.depth - 1) == 0) return !1;
    let e = o.resolve(t.start - 2);
    ((a = new Gt(e, e, t.depth)),
      t.endIndex < t.parent.childCount &&
        (t = new Gt(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)),
      (i = !0));
  }
  let s = yr(a, n, r, t);
  return s ? (e && fa(e, t, s, i, n), !0) : !1;
}
function fa(e, t, n, r, i) {
  let a = P.empty;
  for (let e = n.length - 1; e >= 0; e--) a = P.from(n[e].type.create(n[e].attrs, a));
  e.step(new dr(t.start - (r ? 2 : 0), t.end, t.start, t.end, new I(a, 0, 0), n.length, !0));
  let o = 0;
  for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
  let s = n.length - o,
    c = t.start + n.length - (r ? 2 : 0),
    l = t.parent;
  for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1)
    (!i && kr(e.doc, c, s) && (e.split(c, s), (c += 2 * s)), (c += l.child(n).nodeSize));
  return e;
}
function pa(e) {
  return function (t, n) {
    let { $from: r, $to: i } = t.selection,
      a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
    return a ? (n ? (r.node(a.depth - 1).type == e ? ma(t, n, e, a) : ha(t, n, a)) : !0) : !1;
  };
}
function ma(e, t, n, r) {
  let i = e.tr,
    a = r.end,
    o = r.$to.end(r.depth);
  a < o &&
    (i.step(new dr(a - 1, o, a, o, new I(P.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)),
    (r = new Gt(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth)));
  let s = _r(r);
  if (s == null) return !1;
  i.lift(r, s);
  let c = i.doc.resolve(i.mapping.map(a, -1) - 1);
  return (
    jr(i.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && i.join(c.pos),
    t(i.scrollIntoView()),
    !0
  );
}
function ha(e, t, n) {
  let r = e.tr,
    i = n.parent;
  for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--)
    ((e -= i.child(t).nodeSize), r.delete(e - 1, e + 1));
  let a = r.doc.resolve(n.start),
    o = a.nodeAfter;
  if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
  let s = n.startIndex == 0,
    c = n.endIndex == i.childCount,
    l = a.node(-1),
    u = a.index(-1);
  if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? P.empty : P.from(i)))) return !1;
  let d = a.pos,
    f = d + o.nodeSize;
  return (
    r.step(
      new dr(
        d - +!!s,
        f + +!!c,
        d + 1,
        f - 1,
        new I(
          (s ? P.empty : P.from(i.copy(P.empty))).append(c ? P.empty : P.from(i.copy(P.empty))),
          +!s,
          +!c,
        ),
        +!s,
      ),
    ),
    t(r.scrollIntoView()),
    !0
  );
}
function ga(e) {
  return function (t, n) {
    let { $from: r, $to: i } = t.selection,
      a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
    if (!a) return !1;
    let o = a.startIndex;
    if (o == 0) return !1;
    let s = a.parent,
      c = s.child(o - 1);
    if (c.type != e) return !1;
    if (n) {
      let r = c.lastChild && c.lastChild.type == s.type,
        i = P.from(r ? e.create() : null),
        o = new I(P.from(e.create(null, P.from(s.type.create(null, i)))), r ? 3 : 1, 0),
        l = a.start,
        u = a.end;
      n(t.tr.step(new dr(l - (r ? 3 : 1), u, l, u, o, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var _a = function (e) {
    for (var t = 0; ; t++) if (((e = e.previousSibling), !e)) return t;
  },
  va = function (e) {
    let t = e.assignedSlot || e.parentNode;
    return t && t.nodeType == 11 ? t.host : t;
  },
  ya = null,
  ba = function (e, t, n) {
    let r = (ya ||= document.createRange());
    return (r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r);
  },
  xa = function () {
    ya = null;
  },
  Sa = function (e, t, n, r) {
    return n && (wa(e, t, n, r, -1) || wa(e, t, n, r, 1));
  },
  Ca = /^(img|br|input|textarea|hr)$/i;
function wa(e, t, n, r, i) {
  for (;;) {
    if (e == n && t == r) return !0;
    if (t == (i < 0 ? 0 : Ta(e))) {
      let n = e.parentNode;
      if (!n || n.nodeType != 1 || ka(e) || Ca.test(e.nodeName) || e.contentEditable == `false`)
        return !1;
      ((t = _a(e) + (i < 0 ? 0 : 1)), (e = n));
    } else if (e.nodeType == 1) {
      let n = e.childNodes[t + (i < 0 ? -1 : 0)];
      if (n.nodeType == 1 && n.contentEditable == `false`) {
        if (n.pmViewDesc?.ignoreForSelection) t += i;
        else return !1;
      } else ((e = n), (t = i < 0 ? Ta(e) : 0));
    } else return !1;
  }
}
function Ta(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function Ea(e, t) {
  for (;;) {
    if (e.nodeType == 3 && t) return e;
    if (e.nodeType == 1 && t > 0) {
      if (e.contentEditable == `false`) return null;
      ((e = e.childNodes[t - 1]), (t = Ta(e)));
    } else if (e.parentNode && !ka(e)) ((t = _a(e)), (e = e.parentNode));
    else return null;
  }
}
function Da(e, t) {
  for (;;) {
    if (e.nodeType == 3 && t < e.nodeValue.length) return e;
    if (e.nodeType == 1 && t < e.childNodes.length) {
      if (e.contentEditable == `false`) return null;
      ((e = e.childNodes[t]), (t = 0));
    } else if (e.parentNode && !ka(e)) ((t = _a(e) + 1), (e = e.parentNode));
    else return null;
  }
}
function Oa(e, t, n) {
  for (let r = t == 0, i = t == Ta(e); r || i;) {
    if (e == n) return !0;
    let t = _a(e);
    if (((e = e.parentNode), !e)) return !1;
    ((r &&= t == 0), (i &&= t == Ta(e)));
  }
}
function ka(e) {
  let t;
  for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
  return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var Aa = function (e) {
  return e.focusNode && Sa(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function ja(e, t) {
  let n = document.createEvent(`Event`);
  return (n.initEvent(`keydown`, !0, !0), (n.keyCode = e), (n.key = n.code = t), n);
}
function Ma(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
  return t;
}
function Na(e, t, n) {
  if (e.caretPositionFromPoint)
    try {
      let r = e.caretPositionFromPoint(t, n);
      if (r) return { node: r.offsetNode, offset: Math.min(Ta(r.offsetNode), r.offset) };
    } catch {}
  if (e.caretRangeFromPoint) {
    let r = e.caretRangeFromPoint(t, n);
    if (r) return { node: r.startContainer, offset: Math.min(Ta(r.startContainer), r.startOffset) };
  }
}
var Pa = typeof navigator < `u` ? navigator : null,
  Fa = typeof document < `u` ? document : null,
  Ia = (Pa && Pa.userAgent) || ``,
  La = /Edge\/(\d+)/.exec(Ia),
  Ra = /MSIE \d/.exec(Ia),
  za = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ia),
  Ba = !!(Ra || za || La),
  Va = Ra ? document.documentMode : za ? +za[1] : La ? +La[1] : 0,
  Ha = !Ba && /gecko\/(\d+)/i.test(Ia);
Ha && +(/Firefox\/(\d+)/.exec(Ia) || [0, 0])[1];
var Ua = !Ba && /Chrome\/(\d+)/.exec(Ia),
  Wa = !!Ua,
  Ga = Ua ? +Ua[1] : 0,
  Ka = !Ba && !!Pa && /Apple Computer/.test(Pa.vendor),
  qa = Ka && (/Mobile\/\w+/.test(Ia) || (!!Pa && Pa.maxTouchPoints > 2)),
  Ja = qa || (Pa ? /Mac/.test(Pa.platform) : !1),
  Ya = Pa ? /Win/.test(Pa.platform) : !1,
  Xa = /Android \d/.test(Ia),
  Za = !!Fa && `webkitFontSmoothing` in Fa.documentElement.style,
  Qa = Za ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function $a(e) {
  let t = e.defaultView && e.defaultView.visualViewport;
  return t
    ? { left: 0, right: t.width, top: 0, bottom: t.height }
    : {
        left: 0,
        right: e.documentElement.clientWidth,
        top: 0,
        bottom: e.documentElement.clientHeight,
      };
}
function eo(e, t) {
  return typeof e == `number` ? e : e[t];
}
function to(e) {
  let t = e.getBoundingClientRect(),
    n = t.width / e.offsetWidth || 1,
    r = t.height / e.offsetHeight || 1;
  return {
    left: t.left,
    right: t.left + e.clientWidth * n,
    top: t.top,
    bottom: t.top + e.clientHeight * r,
  };
}
function no(e, t, n) {
  if (!vo(t) && t.left == 0) return;
  let r = e.someProp(`scrollThreshold`) || 0,
    i = e.someProp(`scrollMargin`) || 5,
    a = e.dom.ownerDocument;
  for (let o = n || e.dom; o;) {
    if (o.nodeType != 1) {
      o = va(o);
      continue;
    }
    let e = o,
      n = e == a.body,
      s = n ? $a(a) : to(e),
      c = 0,
      l = 0;
    if (
      (t.top < s.top + eo(r, `top`)
        ? (l = -(s.top - t.top + eo(i, `top`)))
        : t.bottom > s.bottom - eo(r, `bottom`) &&
          (l =
            t.bottom - t.top > s.bottom - s.top
              ? t.top + eo(i, `top`) - s.top
              : t.bottom - s.bottom + eo(i, `bottom`)),
      t.left < s.left + eo(r, `left`)
        ? (c = -(s.left - t.left + eo(i, `left`)))
        : t.right > s.right - eo(r, `right`) && (c = t.right - s.right + eo(i, `right`)),
      c || l)
    ) {
      if (n) a.defaultView.scrollBy(c, l);
      else {
        let n = e.scrollLeft,
          r = e.scrollTop;
        (l && (e.scrollTop += l), c && (e.scrollLeft += c));
        let i = e.scrollLeft - n,
          a = e.scrollTop - r;
        t = { left: t.left - i, top: t.top - a, right: t.right - i, bottom: t.bottom - a };
      }
    }
    let u = n ? `fixed` : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(u)) break;
    o = u == `absolute` ? o.offsetParent : va(o);
  }
}
function ro(e) {
  let t = e.dom.getBoundingClientRect(),
    n = Math.max(0, t.top),
    r,
    i;
  for (let a = (t.left + t.right) / 2, o = n + 1; o < Math.min(innerHeight, t.bottom); o += 5) {
    let t = e.root.elementFromPoint(a, o);
    if (!t || t == e.dom || !e.dom.contains(t)) continue;
    let s = t.getBoundingClientRect();
    if (s.top >= n - 20) {
      ((r = t), (i = s.top));
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: io(e.dom) };
}
function io(e) {
  let t = [],
    n = e.ownerDocument;
  for (
    let r = e;
    r && (t.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), e != n);
    r = va(r)
  );
  return t;
}
function ao({ refDOM: e, refTop: t, stack: n }) {
  let r = e ? e.getBoundingClientRect().top : 0;
  oo(n, r == 0 ? 0 : r - t);
}
function oo(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { dom: r, top: i, left: a } = e[n];
    (r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a));
  }
}
var so = null;
function co(e) {
  if (e.setActive) return e.setActive();
  if (so) return e.focus(so);
  let t = io(e);
  (e.focus(
    so == null
      ? {
          get preventScroll() {
            return ((so = { preventScroll: !0 }), !0);
          },
        }
      : void 0,
  ),
    so || ((so = !1), oo(t, 0)));
}
function lo(e, t) {
  let n,
    r = 2e8,
    i,
    a = 0,
    o = t.top,
    s = t.top,
    c,
    l;
  for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let e;
    if (u.nodeType == 1) e = u.getClientRects();
    else if (u.nodeType == 3) e = ba(u).getClientRects();
    else continue;
    for (let f = 0; f < e.length; f++) {
      let p = e[f];
      if (p.top <= o && p.bottom >= s) {
        ((o = Math.max(p.bottom, o)), (s = Math.min(p.top, s)));
        let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
        if (e < r) {
          ((n = u),
            (r = e),
            (i =
              e && n.nodeType == 3 ? { left: p.right < t.left ? p.right : p.left, top: t.top } : t),
            u.nodeType == 1 && e && (a = d + +(t.left >= (p.left + p.right) / 2)));
          continue;
        }
      } else
        p.top > t.top &&
          !c &&
          p.left <= t.left &&
          p.right >= t.left &&
          ((c = u), (l = { left: Math.max(p.left, Math.min(p.right, t.left)), top: p.top }));
      !n &&
        ((t.left >= p.right && t.top >= p.top) || (t.left >= p.left && t.top >= p.bottom)) &&
        (a = d + 1);
    }
  }
  return (
    !n && c && ((n = c), (i = l), (r = 0)),
    n && n.nodeType == 3
      ? uo(n, i)
      : !n || (r && n.nodeType == 1)
        ? { node: e, offset: a }
        : lo(n, i)
  );
}
function uo(e, t) {
  let n = e.nodeValue.length,
    r = document.createRange(),
    i;
  for (let a = 0; a < n; a++) {
    (r.setEnd(e, a + 1), r.setStart(e, a));
    let n = yo(r, 1);
    if (n.top != n.bottom && fo(t, n)) {
      i = { node: e, offset: a + +(t.left >= (n.left + n.right) / 2) };
      break;
    }
  }
  return (r.detach(), i || { node: e, offset: 0 });
}
function fo(e, t) {
  return (
    e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
  );
}
function po(e, t) {
  let n = e.parentNode;
  return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function mo(e, t, n) {
  let { node: r, offset: i } = lo(t, n),
    a = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let e = r.getBoundingClientRect();
    a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
  }
  return e.docView.posFromDOM(r, i, a);
}
function ho(e, t, n, r) {
  let i = -1;
  for (let n = t, a = !1; n != e.dom;) {
    let t = e.docView.nearestDesc(n, !0),
      o;
    if (!t) return null;
    if (
      t.dom.nodeType == 1 &&
      ((t.node.isBlock && t.parent) || !t.contentDOM) &&
      ((o = t.dom.getBoundingClientRect()).width || o.height) &&
      (t.node.isBlock &&
        t.parent &&
        !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) &&
        ((!a && o.left > r.left) || o.top > r.top
          ? (i = t.posBefore)
          : ((!a && o.right < r.left) || o.bottom < r.top) && (i = t.posAfter),
        (a = !0)),
      !t.contentDOM && i < 0 && !t.node.isText)
    )
      return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2)
        ? t.posBefore
        : t.posAfter;
    n = t.dom.parentNode;
  }
  return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function go(e, t, n) {
  let r = e.childNodes.length;
  if (r && n.top < n.bottom)
    for (
      let i = Math.max(
          0,
          Math.min(r - 1, Math.floor((r * (t.top - n.top)) / (n.bottom - n.top)) - 2),
        ),
        a = i;
      ;
    ) {
      let n = e.childNodes[a];
      if (n.nodeType == 1) {
        let e = n.getClientRects();
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          if (fo(t, i)) return go(n, t, i);
        }
      }
      if ((a = (a + 1) % r) == i) break;
    }
  return e;
}
function _o(e, t) {
  let n = e.dom.ownerDocument,
    r,
    i = 0,
    a = Na(n, t.left, t.top);
  a && ({ node: r, offset: i } = a);
  let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top),
    s;
  if (!o || !e.dom.contains(o.nodeType == 1 ? o : o.parentNode)) {
    let n = e.dom.getBoundingClientRect();
    if (!fo(t, n) || ((o = go(e.dom, t, n)), !o)) return null;
  }
  if (Ka) for (let e = o; r && e; e = va(e)) e.draggable && (r = void 0);
  if (((o = po(o, t)), r)) {
    if (
      Ha &&
      r.nodeType == 1 &&
      ((i = Math.min(i, r.childNodes.length)), i < r.childNodes.length)
    ) {
      let e = r.childNodes[i],
        n;
      e.nodeName == `IMG` &&
        (n = e.getBoundingClientRect()).right <= t.left &&
        n.bottom > t.top &&
        i++;
    }
    let n;
    (Za &&
      i &&
      r.nodeType == 1 &&
      (n = r.childNodes[i - 1]).nodeType == 1 &&
      n.contentEditable == `false` &&
      n.getBoundingClientRect().top >= t.top &&
      i--,
      r == e.dom &&
      i == r.childNodes.length - 1 &&
      r.lastChild.nodeType == 1 &&
      t.top > r.lastChild.getBoundingClientRect().bottom
        ? (s = e.state.doc.content.size)
        : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != `BR`) &&
          (s = ho(e, r, i, t)));
  }
  s ??= mo(e, o, t);
  let c = e.docView.nearestDesc(o, !0);
  return { pos: s, inside: c ? c.posAtStart - c.border : -1 };
}
function vo(e) {
  return e.top < e.bottom || e.left < e.right;
}
function yo(e, t) {
  let n = e.getClientRects();
  if (n.length) {
    let e = n[t < 0 ? 0 : n.length - 1];
    if (vo(e)) return e;
  }
  return Array.prototype.find.call(n, vo) || e.getBoundingClientRect();
}
var bo = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function xo(e, t, n) {
  let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
    o = Za || Ha;
  if (r.nodeType == 3) {
    if (o && (bo.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let e = yo(ba(r, i, i), n);
      if (Ha && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let t = yo(ba(r, i - 1, i - 1), -1);
        if (t.top == e.top) {
          let n = yo(ba(r, i, i + 1), -1);
          if (n.top != e.top) return So(n, n.left < t.left);
        }
      }
      return e;
    }
    {
      let e = i,
        t = i,
        a = n < 0 ? 1 : -1;
      return (
        n < 0 && !i
          ? (t++, (a = -1))
          : n >= 0 && i == r.nodeValue.length
            ? (e--, (a = 1))
            : n < 0
              ? e--
              : t++,
        So(yo(ba(r, e, t), a), a < 0)
      );
    }
  }
  if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
    if (a == null && i && (n < 0 || i == Ta(r))) {
      let e = r.childNodes[i - 1];
      if (e.nodeType == 1) return Co(e.getBoundingClientRect(), !1);
    }
    if (a == null && i < Ta(r)) {
      let e = r.childNodes[i];
      if (e.nodeType == 1) return Co(e.getBoundingClientRect(), !0);
    }
    return Co(r.getBoundingClientRect(), n >= 0);
  }
  if (a == null && i && (n < 0 || i == Ta(r))) {
    let e = r.childNodes[i - 1],
      t =
        e.nodeType == 3
          ? ba(e, Ta(e) - +!o)
          : e.nodeType == 1 && (e.nodeName != `BR` || !e.nextSibling)
            ? e
            : null;
    if (t) return So(yo(t, 1), !1);
  }
  if (a == null && i < Ta(r)) {
    let e = r.childNodes[i];
    for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
    let t = e ? (e.nodeType == 3 ? ba(e, 0, +!o) : e.nodeType == 1 ? e : null) : null;
    if (t) return So(yo(t, -1), !0);
  }
  return So(yo(r.nodeType == 3 ? ba(r) : r, -n), n >= 0);
}
function So(e, t) {
  if (e.width == 0) return e;
  let n = t ? e.left : e.right;
  return { top: e.top, bottom: e.bottom, left: n, right: n };
}
function Co(e, t) {
  if (e.height == 0) return e;
  let n = t ? e.top : e.bottom;
  return { top: n, bottom: n, left: e.left, right: e.right };
}
function wo(e, t, n) {
  let r = e.state,
    i = e.root.activeElement;
  (r != t && e.updateState(t), i != e.dom && e.focus());
  try {
    return n();
  } finally {
    (r != t && e.updateState(r), i != e.dom && i && i.focus());
  }
}
function To(e, t, n) {
  let r = t.selection,
    i = n == `up` ? r.$from : r.$to;
  return wo(e, t, () => {
    let { node: t } = e.docView.domFromPos(i.pos, n == `up` ? -1 : 1);
    for (;;) {
      let n = e.docView.nearestDesc(t, !0);
      if (!n) break;
      if (n.node.isBlock) {
        t = n.contentDOM || n.dom;
        break;
      }
      t = n.dom.parentNode;
    }
    let r = xo(e, i.pos, 1);
    for (let e = t.firstChild; e; e = e.nextSibling) {
      let t;
      if (e.nodeType == 1) t = e.getClientRects();
      else if (e.nodeType == 3) t = ba(e, 0, e.nodeValue.length).getClientRects();
      else continue;
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        if (
          i.bottom > i.top + 1 &&
          (n == `up`
            ? r.top - i.top > (i.bottom - r.top) * 2
            : i.bottom - r.bottom > (r.bottom - i.top) * 2)
        )
          return !1;
      }
    }
    return !0;
  });
}
var Eo = /[\u0590-\u08ac]/;
function Do(e, t, n) {
  let { $head: r } = t.selection;
  if (!r.parent.isTextblock) return !1;
  let i = r.parentOffset,
    a = !i,
    o = i == r.parent.content.size,
    s = e.domSelection();
  return s
    ? !Eo.test(r.parent.textContent) || !s.modify
      ? n == `left` || n == `backward`
        ? a
        : o
      : wo(e, t, () => {
          let {
              focusNode: t,
              focusOffset: i,
              anchorNode: a,
              anchorOffset: o,
            } = e.domSelectionRange(),
            c = s.caretBidiLevel;
          s.modify(`move`, n, `character`);
          let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom,
            { focusNode: u, focusOffset: d } = e.domSelectionRange(),
            f = (u && !l.contains(u.nodeType == 1 ? u : u.parentNode)) || (t == u && i == d);
          try {
            (s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i));
          } catch {}
          return (c != null && (s.caretBidiLevel = c), f);
        })
    : r.pos == r.start() || r.pos == r.end();
}
var Oo = null,
  ko = null,
  Ao = !1;
function jo(e, t, n) {
  return Oo == t && ko == n
    ? Ao
    : ((Oo = t), (ko = n), (Ao = n == `up` || n == `down` ? To(e, t, n) : Do(e, t, n)));
}
var Mo = 0,
  No = 1,
  Po = 2,
  Fo = 3,
  Io = class {
    constructor(e, t, n, r) {
      ((this.parent = e),
        (this.children = t),
        (this.dom = n),
        (this.contentDOM = r),
        (this.dirty = Mo),
        (n.pmViewDesc = this));
    }
    matchesWidget(e) {
      return !1;
    }
    matchesMark(e) {
      return !1;
    }
    matchesNode(e, t, n) {
      return !1;
    }
    matchesHack(e) {
      return !1;
    }
    parseRule(e) {
      return null;
    }
    stopEvent(e) {
      return !1;
    }
    get size() {
      let e = 0;
      for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
      return e;
    }
    get border() {
      return 0;
    }
    destroy() {
      ((this.parent = void 0), this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0));
      for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
    }
    posBeforeChild(e) {
      for (let t = 0, n = this.posAtStart; ; t++) {
        let r = this.children[t];
        if (r == e) return n;
        n += r.size;
      }
    }
    get posBefore() {
      return this.parent.posBeforeChild(this);
    }
    get posAtStart() {
      return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
    get posAfter() {
      return this.posBefore + this.size;
    }
    get posAtEnd() {
      return this.posAtStart + this.size - 2 * this.border;
    }
    localPosFromDOM(e, t, n) {
      if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) {
        if (n < 0) {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t - 1];
          else {
            for (; e.parentNode != this.contentDOM;) e = e.parentNode;
            n = e.previousSibling;
          }
          for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.previousSibling;
          return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
        }
        {
          let n, r;
          if (e == this.contentDOM) n = e.childNodes[t];
          else {
            for (; e.parentNode != this.contentDOM;) e = e.parentNode;
            n = e.nextSibling;
          }
          for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.nextSibling;
          return n ? this.posBeforeChild(r) : this.posAtEnd;
        }
      }
      let r;
      if (e == this.dom && this.contentDOM) r = t > _a(this.contentDOM);
      else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
        r = e.compareDocumentPosition(this.contentDOM) & 2;
      else if (this.dom.firstChild) {
        if (t == 0)
          for (let t = e; ; t = t.parentNode) {
            if (t == this.dom) {
              r = !1;
              break;
            }
            if (t.previousSibling) break;
          }
        if (r == null && t == e.childNodes.length)
          for (let t = e; ; t = t.parentNode) {
            if (t == this.dom) {
              r = !0;
              break;
            }
            if (t.nextSibling) break;
          }
      }
      return (r ?? n > 0) ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(e, t = !1) {
      for (let n = !0, r = e; r; r = r.parentNode) {
        let i = this.getDesc(r),
          a;
        if (i && (!t || i.node)) {
          if (
            n &&
            (a = i.nodeDOM) &&
            !(a.nodeType == 1 ? a.contains(e.nodeType == 1 ? e : e.parentNode) : a == e)
          )
            n = !1;
          else return i;
        }
      }
    }
    getDesc(e) {
      let t = e.pmViewDesc;
      for (let e = t; e; e = e.parent) if (e == this) return t;
    }
    posFromDOM(e, t, n) {
      for (let r = e; r; r = r.parentNode) {
        let i = this.getDesc(r);
        if (i) return i.localPosFromDOM(e, t, n);
      }
      return -1;
    }
    descAt(e) {
      for (let t = 0, n = 0; t < this.children.length; t++) {
        let r = this.children[t],
          i = n + r.size;
        if (n == e && i != n) {
          for (; !r.border && r.children.length;)
            for (let e = 0; e < r.children.length; e++) {
              let t = r.children[e];
              if (t.size) {
                r = t;
                break;
              }
            }
          return r;
        }
        if (e < i) return r.descAt(e - n - r.border);
        n = i;
      }
    }
    domFromPos(e, t) {
      if (!this.contentDOM) return { node: this.dom, offset: 0, atom: e + 1 };
      let n = 0,
        r = 0;
      for (let t = 0; n < this.children.length; n++) {
        let i = this.children[n],
          a = t + i.size;
        if (a > e || i instanceof Uo) {
          r = e - t;
          break;
        }
        t = a;
      }
      if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
      for (let e; n && !(e = this.children[n - 1]).size && e instanceof Lo && e.side >= 0; n--);
      if (t <= 0) {
        let e,
          r = !0;
        for (
          ;
          (e = n ? this.children[n - 1] : null), e && e.dom.parentNode != this.contentDOM;
          n--, r = !1
        );
        return e && t && r && !e.border && !e.domAtom
          ? e.domFromPos(e.size, t)
          : { node: this.contentDOM, offset: e ? _a(e.dom) + 1 : 0 };
      }
      {
        let e,
          r = !0;
        for (
          ;
          (e = n < this.children.length ? this.children[n] : null),
            e && e.dom.parentNode != this.contentDOM;
          n++, r = !1
        );
        return e && r && !e.border && !e.domAtom
          ? e.domFromPos(0, t)
          : { node: this.contentDOM, offset: e ? _a(e.dom) : this.contentDOM.childNodes.length };
      }
    }
    parseRange(e, t, n = 0) {
      if (this.children.length == 0)
        return {
          node: this.contentDOM,
          from: e,
          to: t,
          fromOffset: 0,
          toOffset: this.contentDOM.childNodes.length,
        };
      let r = -1,
        i = -1;
      for (let a = n, o = 0; ; o++) {
        let n = this.children[o],
          s = a + n.size;
        if (r == -1 && e <= s) {
          let i = a + n.border;
          if (
            e >= i &&
            t <= s - n.border &&
            n.node &&
            n.contentDOM &&
            this.contentDOM.contains(n.contentDOM)
          )
            return n.parseRange(e, t, i);
          e = a;
          for (let t = o; t > 0; t--) {
            let n = this.children[t - 1];
            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
              r = _a(n.dom) + 1;
              break;
            }
            e -= n.size;
          }
          r == -1 && (r = 0);
        }
        if (r > -1 && (s > t || o == this.children.length - 1)) {
          t = s;
          for (let e = o + 1; e < this.children.length; e++) {
            let n = this.children[e];
            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
              i = _a(n.dom);
              break;
            }
            t += n.size;
          }
          i == -1 && (i = this.contentDOM.childNodes.length);
          break;
        }
        a = s;
      }
      return { node: this.contentDOM, from: e, to: t, fromOffset: r, toOffset: i };
    }
    emptyChildAt(e) {
      if (this.border || !this.contentDOM || !this.children.length) return !1;
      let t = this.children[e < 0 ? 0 : this.children.length - 1];
      return t.size == 0 || t.emptyChildAt(e);
    }
    domAfterPos(e) {
      let { node: t, offset: n } = this.domFromPos(e, 0);
      if (t.nodeType != 1 || n == t.childNodes.length) throw RangeError(`No node after pos ` + e);
      return t.childNodes[n];
    }
    setSelection(e, t, n, r = !1) {
      let i = Math.min(e, t),
        a = Math.max(e, t);
      for (let o = 0, s = 0; o < this.children.length; o++) {
        let c = this.children[o],
          l = s + c.size;
        if (i > s && a < l) return c.setSelection(e - s - c.border, t - s - c.border, n, r);
        s = l;
      }
      let o = this.domFromPos(e, e ? -1 : 1),
        s = t == e ? o : this.domFromPos(t, t ? -1 : 1),
        c = n.root.getSelection(),
        l = n.domSelectionRange(),
        u = !1;
      if ((Ha || Ka) && e == t) {
        let { node: e, offset: t } = o;
        if (e.nodeType == 3) {
          if (
            ((u = !!(
              t &&
              e.nodeValue[t - 1] ==
                `
`
            )),
            u && t == e.nodeValue.length)
          )
            for (let t = e, n; t; t = t.parentNode) {
              if ((n = t.nextSibling)) {
                n.nodeName == `BR` && (o = s = { node: n.parentNode, offset: _a(n) + 1 });
                break;
              }
              let e = t.pmViewDesc;
              if (e && e.node && e.node.isBlock) break;
            }
        } else {
          let n = e.childNodes[t - 1];
          u = n && (n.nodeName == `BR` || n.contentEditable == `false`);
        }
      }
      if (Ha && l.focusNode && l.focusNode != s.node && l.focusNode.nodeType == 1) {
        let e = l.focusNode.childNodes[l.focusOffset];
        e && e.contentEditable == `false` && (r = !0);
      }
      if (
        !(r || (u && Ka)) &&
        Sa(o.node, o.offset, l.anchorNode, l.anchorOffset) &&
        Sa(s.node, s.offset, l.focusNode, l.focusOffset)
      )
        return;
      let d = !1;
      if ((c.extend || e == t) && !(u && Ha)) {
        c.collapse(o.node, o.offset);
        try {
          (e != t && c.extend(s.node, s.offset), (d = !0));
        } catch {}
      }
      if (!d) {
        if (e > t) {
          let e = o;
          ((o = s), (s = e));
        }
        let n = document.createRange();
        (n.setEnd(s.node, s.offset),
          n.setStart(o.node, o.offset),
          c.removeAllRanges(),
          c.addRange(n));
      }
    }
    ignoreMutation(e) {
      return !this.contentDOM && e.type != `selection`;
    }
    get contentLost() {
      return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }
    markDirty(e, t) {
      for (let n = 0, r = 0; r < this.children.length; r++) {
        let i = this.children[r],
          a = n + i.size;
        if (n == a ? e <= a && t >= n : e < a && t > n) {
          let r = n + i.border,
            o = a - i.border;
          if (e >= r && t <= o) {
            ((this.dirty = e == n || t == a ? Po : No),
              e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM)
                ? (i.dirty = Fo)
                : i.markDirty(e - r, t - r));
            return;
          }
          i.dirty =
            i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length
              ? Po
              : Fo;
        }
        n = a;
      }
      this.dirty = Po;
    }
    markParentsDirty() {
      let e = 1;
      for (let t = this.parent; t; t = t.parent, e++) {
        let n = e == 1 ? Po : No;
        t.dirty < n && (t.dirty = n);
      }
    }
    get domAtom() {
      return !1;
    }
    get ignoreForCoords() {
      return !1;
    }
    get ignoreForSelection() {
      return !1;
    }
    isText(e) {
      return !1;
    }
  },
  Lo = class extends Io {
    constructor(e, t, n, r) {
      let i,
        a = t.type.toDOM;
      if (
        (typeof a == `function` &&
          (a = a(n, () => {
            if (!i) return r;
            if (i.parent) return i.parent.posBeforeChild(i);
          })),
        !t.type.spec.raw)
      ) {
        if (a.nodeType != 1) {
          let e = document.createElement(`span`);
          (e.appendChild(a), (a = e));
        }
        (a.hasAttribute(`contenteditable`) || (a.contentEditable = `false`),
          a.classList.add(`ProseMirror-widget`));
      }
      (super(e, [], a, null), (this.widget = t), (this.widget = t), (i = this));
    }
    matchesWidget(e) {
      return this.dirty == Mo && e.type.eq(this.widget.type);
    }
    parseRule() {
      return { ignore: !0 };
    }
    stopEvent(e) {
      let t = this.widget.spec.stopEvent;
      return t ? t(e) : !1;
    }
    ignoreMutation(e) {
      return e.type != `selection` || this.widget.spec.ignoreSelection;
    }
    destroy() {
      (this.widget.type.destroy(this.dom), super.destroy());
    }
    get domAtom() {
      return !0;
    }
    get ignoreForSelection() {
      return !!this.widget.type.spec.relaxedSide;
    }
    get side() {
      return this.widget.type.side;
    }
  },
  Ro = class extends Io {
    constructor(e, t, n, r) {
      (super(e, [], t, null), (this.textDOM = n), (this.text = r));
    }
    get size() {
      return this.text.length;
    }
    localPosFromDOM(e, t) {
      return e == this.textDOM ? this.posAtStart + t : this.posAtStart + (t ? this.size : 0);
    }
    domFromPos(e) {
      return { node: this.textDOM, offset: e };
    }
    ignoreMutation(e) {
      return e.type === `characterData` && e.target.nodeValue == e.oldValue;
    }
  },
  zo = class e extends Io {
    constructor(e, t, n, r, i) {
      (super(e, [], n, r), (this.mark = t), (this.spec = i));
    }
    static create(t, n, r, i) {
      let a = i.nodeViews[n.type.name],
        o = a && a(n, i, r);
      return (
        (o && o.dom) || (o = Ln.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)),
        new e(t, n, o.dom, o.contentDOM || o.dom, o)
      );
    }
    parseRule() {
      return this.dirty & Fo || this.mark.type.spec.reparseInView
        ? null
        : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
    }
    matchesMark(e) {
      return this.dirty != Fo && this.mark.eq(e);
    }
    markDirty(e, t) {
      if ((super.markDirty(e, t), this.dirty != Mo)) {
        let e = this.parent;
        for (; !e.node;) e = e.parent;
        (e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = Mo));
      }
    }
    slice(t, n, r) {
      let i = e.create(this.parent, this.mark, !0, r),
        a = this.children,
        o = this.size;
      (n < o && (a = ss(a, n, o, r)), t > 0 && (a = ss(a, 0, t, r)));
      for (let e = 0; e < a.length; e++) a[e].parent = i;
      return ((i.children = a), i);
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
    }
    destroy() {
      (this.spec.destroy && this.spec.destroy(), super.destroy());
    }
  },
  Bo = class e extends Io {
    constructor(e, t, n, r, i, a, o) {
      (super(e, [], i, a),
        (this.node = t),
        (this.outerDeco = n),
        (this.innerDeco = r),
        (this.nodeDOM = o));
    }
    static create(t, n, r, i, a, o) {
      let s = a.nodeViews[n.type.name],
        c,
        l =
          s &&
          s(
            n,
            a,
            () => {
              if (!c) return o;
              if (c.parent) return c.parent.posBeforeChild(c);
            },
            r,
            i,
          ),
        u = l && l.dom,
        d = l && l.contentDOM;
      if (n.isText) {
        if (!u) u = document.createTextNode(n.text);
        else if (u.nodeType != 3) throw RangeError(`Text must be rendered as a DOM text node`);
      } else if (!u) {
        let e = Ln.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
        ({ dom: u, contentDOM: d } = e);
      }
      !d &&
        !n.isText &&
        u.nodeName != `BR` &&
        (u.hasAttribute(`contenteditable`) || (u.contentEditable = `false`),
        n.type.spec.draggable && (u.draggable = !0));
      let f = u;
      return (
        (u = Zo(u, r, n)),
        l
          ? (c = new Wo(t, n, r, i, u, d || null, f, l))
          : n.isText
            ? new Ho(t, n, r, i, u, f)
            : new e(t, n, r, i, u, d || null, f)
      );
    }
    parseRule(e) {
      if (this.node.type.spec.reparseInView) return null;
      let t = { node: this.node.type.name, attrs: this.node.attrs };
      if ((this.node.type.whitespace == `pre` && (t.preserveWhitespace = `full`), !this.contentDOM))
        t.getContent = () => this.node.content;
      else if (!this.contentLost) t.contentElement = this.contentDOM;
      else {
        for (let e = this.children.length - 1; e >= 0; e--) {
          let n = this.children[e];
          if (this.dom.contains(n.dom.parentNode)) {
            t.contentElement = n.dom.parentNode;
            break;
          }
        }
        if (!t.contentElement) {
          let n =
            e &&
            e.find((t) => t.nodeType == 1 && e.indexOf(t.parentNode) < 0 && this.dom.contains(t));
          n ? (t.contentElement = n) : (t.getContent = () => P.empty);
        }
      }
      return t;
    }
    matchesNode(e, t, n) {
      return this.dirty == Mo && e.eq(this.node) && Qo(t, this.outerDeco) && n.eq(this.innerDeco);
    }
    get size() {
      return this.node.nodeSize;
    }
    get border() {
      return +!this.node.isLeaf;
    }
    updateChildren(e, t) {
      let n = this.node.inlineContent,
        r = t,
        i = e.composing ? this.localCompositionInfo(e, t) : null,
        a = i && i.pos > -1 ? i : null,
        o = i && i.pos < 0,
        s = new es(this, a && a.node, e);
      (rs(
        this.node,
        this.innerDeco,
        (t, i, a) => {
          (t.spec.marks
            ? s.syncToMarks(t.spec.marks, n, e, i)
            : t.type.side >= 0 &&
              !a &&
              s.syncToMarks(i == this.node.childCount ? F.none : this.node.child(i).marks, n, e, i),
            s.placeWidget(t, e, r));
        },
        (t, a, c, l) => {
          s.syncToMarks(t.marks, n, e, l);
          let u;
          (s.findNodeMatch(t, a, c, l) ||
            (o &&
              e.state.selection.from > r &&
              e.state.selection.to < r + t.nodeSize &&
              (u = s.findIndexWithChild(i.node)) > -1 &&
              s.updateNodeAt(t, a, c, u, e)) ||
            s.updateNextNode(t, a, c, e, l, r) ||
            s.addNode(t, a, c, e, r),
            (r += t.nodeSize));
        },
      ),
        s.syncToMarks([], n, e, 0),
        this.node.isTextblock && s.addTextblockHacks(),
        s.destroyRest(),
        (s.changed || this.dirty == Po) &&
          (a && this.protectLocalComposition(e, a),
          Go(this.contentDOM, this.children, e),
          qa && is(this.dom)));
    }
    localCompositionInfo(e, t) {
      let { from: n, to: r } = e.state.selection;
      if (!(e.state.selection instanceof R) || n < t || r > t + this.node.content.size) return null;
      let i = e.input.compositionNode;
      if (!i || !this.dom.contains(i.parentNode)) return null;
      if (this.node.inlineContent) {
        let e = i.nodeValue,
          a = as(this.node.content, e, n - t, r - t);
        return a < 0 ? null : { node: i, pos: a, text: e };
      }
      return { node: i, pos: -1, text: `` };
    }
    protectLocalComposition(e, { node: t, pos: n, text: r }) {
      if (this.getDesc(t)) return;
      let i = t;
      for (; i.parentNode != this.contentDOM; i = i.parentNode) {
        for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
        for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
        i.pmViewDesc && (i.pmViewDesc = void 0);
      }
      let a = new Ro(this, i, t, r);
      (e.input.compositionNodes.push(a),
        (this.children = ss(this.children, n, n + r.length, e, a)));
    }
    update(e, t, n, r) {
      return this.dirty == Fo || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
    }
    updateInner(e, t, n, r) {
      (this.updateOuterDeco(t),
        (this.node = e),
        (this.innerDeco = n),
        this.contentDOM && this.updateChildren(r, this.posAtStart),
        (this.dirty = Mo));
    }
    updateOuterDeco(e) {
      if (Qo(e, this.outerDeco)) return;
      let t = this.nodeDOM.nodeType != 1,
        n = this.dom;
      ((this.dom = Yo(
        this.dom,
        this.nodeDOM,
        Jo(this.outerDeco, this.node, t),
        Jo(e, this.node, t),
      )),
        this.dom != n && ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
        (this.outerDeco = e));
    }
    selectNode() {
      this.nodeDOM.nodeType == 1 &&
        (this.nodeDOM.classList.add(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
    }
    deselectNode() {
      this.nodeDOM.nodeType == 1 &&
        (this.nodeDOM.classList.remove(`ProseMirror-selectednode`),
        (this.contentDOM || !this.node.type.spec.draggable) &&
          this.nodeDOM.removeAttribute(`draggable`));
    }
    get domAtom() {
      return this.node.isAtom;
    }
  };
function Vo(e, t, n, r, i) {
  Zo(r, t, e);
  let a = new Bo(void 0, e, t, n, r, r, r);
  return (a.contentDOM && a.updateChildren(i, 0), a);
}
var Ho = class e extends Bo {
    constructor(e, t, n, r, i, a) {
      super(e, t, n, r, i, null, a);
    }
    parseRule() {
      let e = this.nodeDOM.parentNode;
      for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
      return { skip: e || !0 };
    }
    update(e, t, n, r) {
      return this.dirty == Fo || (this.dirty != Mo && !this.inParent()) || !e.sameMarkup(this.node)
        ? !1
        : (this.updateOuterDeco(t),
          (this.dirty != Mo || e.text != this.node.text) &&
            e.text != this.nodeDOM.nodeValue &&
            ((this.nodeDOM.nodeValue = e.text),
            r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
          (this.node = e),
          (this.dirty = Mo),
          !0);
    }
    inParent() {
      let e = this.parent.contentDOM;
      for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
      return !1;
    }
    domFromPos(e) {
      return { node: this.nodeDOM, offset: e };
    }
    localPosFromDOM(e, t, n) {
      return e == this.nodeDOM
        ? this.posAtStart + Math.min(t, this.node.text.length)
        : super.localPosFromDOM(e, t, n);
    }
    ignoreMutation(e) {
      return e.type != `characterData` && e.type != `selection`;
    }
    slice(t, n, r) {
      let i = this.node.cut(t, n),
        a = document.createTextNode(i.text);
      return new e(this.parent, i, this.outerDeco, this.innerDeco, a, a);
    }
    markDirty(e, t) {
      (super.markDirty(e, t),
        this.dom != this.nodeDOM &&
          (e == 0 || t == this.nodeDOM.nodeValue.length) &&
          (this.dirty = Fo));
    }
    get domAtom() {
      return !1;
    }
    isText(e) {
      return this.node.text == e;
    }
  },
  Uo = class extends Io {
    parseRule() {
      return { ignore: !0 };
    }
    matchesHack(e) {
      return this.dirty == Mo && this.dom.nodeName == e;
    }
    get domAtom() {
      return !0;
    }
    get ignoreForCoords() {
      return this.dom.nodeName == `IMG`;
    }
  },
  Wo = class extends Bo {
    constructor(e, t, n, r, i, a, o, s) {
      (super(e, t, n, r, i, a, o), (this.spec = s));
    }
    update(e, t, n, r) {
      if (this.dirty == Fo) return !1;
      if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
        let i = this.spec.update(e, t, n);
        return (i && this.updateInner(e, t, n, r), i);
      }
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, r);
    }
    selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(e, t, n, r) {
      this.spec.setSelection
        ? this.spec.setSelection(e, t, n.root)
        : super.setSelection(e, t, n, r);
    }
    destroy() {
      (this.spec.destroy && this.spec.destroy(), super.destroy());
    }
    stopEvent(e) {
      return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
    }
    ignoreMutation(e) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
    }
  };
function Go(e, t, n) {
  let r = e.firstChild,
    i = !1;
  for (let a = 0; a < t.length; a++) {
    let o = t[a],
      s = o.dom;
    if (s.parentNode == e) {
      for (; s != r;) ((r = $o(r)), (i = !0));
      r = r.nextSibling;
    } else ((i = !0), e.insertBefore(s, r));
    if (o instanceof zo) {
      let t = r ? r.previousSibling : e.lastChild;
      (Go(o.contentDOM, o.children, n), (r = t ? t.nextSibling : e.firstChild));
    }
  }
  for (; r;) ((r = $o(r)), (i = !0));
  i && n.trackWrites == e && (n.trackWrites = null);
}
var Ko = function (e) {
  e && (this.nodeName = e);
};
Ko.prototype = Object.create(null);
var qo = [new Ko()];
function Jo(e, t, n) {
  if (e.length == 0) return qo;
  let r = n ? qo[0] : new Ko(),
    i = [r];
  for (let a = 0; a < e.length; a++) {
    let o = e[a].type.attrs;
    if (o) {
      o.nodeName && i.push((r = new Ko(o.nodeName)));
      for (let e in o) {
        let a = o[e];
        a != null &&
          (n && i.length == 1 && i.push((r = new Ko(t.isInline ? `span` : `div`))),
          e == `class`
            ? (r.class = (r.class ? r.class + ` ` : ``) + a)
            : e == `style`
              ? (r.style = (r.style ? r.style + `;` : ``) + a)
              : e != `nodeName` && (r[e] = a));
      }
    }
  }
  return i;
}
function Yo(e, t, n, r) {
  if (n == qo && r == qo) return t;
  let i = t;
  for (let t = 0; t < r.length; t++) {
    let a = r[t],
      o = n[t];
    if (t) {
      let t;
      ((o &&
        o.nodeName == a.nodeName &&
        i != e &&
        (t = i.parentNode) &&
        t.nodeName.toLowerCase() == a.nodeName) ||
        ((t = document.createElement(a.nodeName)),
        (t.pmIsDeco = !0),
        t.appendChild(i),
        (o = qo[0])),
        (i = t));
    }
    Xo(i, o || qo[0], a);
  }
  return i;
}
function Xo(e, t, n) {
  for (let r in t)
    r != `class` && r != `style` && r != `nodeName` && !(r in n) && e.removeAttribute(r);
  for (let r in n)
    r != `class` && r != `style` && r != `nodeName` && n[r] != t[r] && e.setAttribute(r, n[r]);
  if (t.class != n.class) {
    let r = t.class ? t.class.split(` `).filter(Boolean) : [],
      i = n.class ? n.class.split(` `).filter(Boolean) : [];
    for (let t = 0; t < r.length; t++) i.indexOf(r[t]) == -1 && e.classList.remove(r[t]);
    for (let t = 0; t < i.length; t++) r.indexOf(i[t]) == -1 && e.classList.add(i[t]);
    e.classList.length == 0 && e.removeAttribute(`class`);
  }
  if (t.style != n.style) {
    if (t.style) {
      let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        r;
      for (; (r = n.exec(t.style));) e.style.removeProperty(r[1]);
    }
    n.style && (e.style.cssText += n.style);
  }
}
function Zo(e, t, n) {
  return Yo(e, e, qo, Jo(t, n, e.nodeType != 1));
}
function Qo(e, t) {
  if (e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
  return !0;
}
function $o(e) {
  let t = e.nextSibling;
  return (e.parentNode.removeChild(e), t);
}
var es = class {
  constructor(e, t, n) {
    ((this.lock = t),
      (this.view = n),
      (this.index = 0),
      (this.stack = []),
      (this.changed = !1),
      (this.top = e),
      (this.preMatch = ts(e.node.content, e)));
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let n = e; n < t; n++) this.top.children[n].destroy();
      (this.top.children.splice(e, t - e), (this.changed = !0));
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, n, r) {
    let i = 0,
      a = this.stack.length >> 1,
      o = Math.min(a, e.length);
    for (
      ;
      i < o &&
      (i == a - 1 ? this.top : this.stack[(i + 1) << 1]).matchesMark(e[i]) &&
      e[i].type.spec.spanning !== !1;
    )
      i++;
    for (; i < a;)
      (this.destroyRest(),
        (this.top.dirty = Mo),
        (this.index = this.stack.pop()),
        (this.top = this.stack.pop()),
        a--);
    for (; a < e.length;) {
      this.stack.push(this.top, this.index + 1);
      let i = -1,
        o = this.top.children.length;
      r < this.preMatch.index && (o = Math.min(this.index + 3, o));
      for (let t = this.index; t < o; t++) {
        let n = this.top.children[t];
        if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
          i = t;
          break;
        }
      }
      if (i < 0 && this.index < this.top.children.length) {
        let t = this.top.children[this.index];
        t instanceof zo &&
          t.dirty != Fo &&
          t.mark.type == e[a].type &&
          t.spec.update &&
          !this.isLocked(t.dom) &&
          t.spec.update(e[a]) &&
          ((t.mark = e[a]), (i = this.index), (this.changed = !0));
      }
      if (i > -1)
        (i > this.index && ((this.changed = !0), this.destroyBetween(this.index, i)),
          (this.top = this.top.children[this.index]));
      else {
        let r = zo.create(this.top, e[a], t, n);
        (this.top.children.splice(this.index, 0, r), (this.top = r), (this.changed = !0));
      }
      ((this.index = 0), a++);
    }
  }
  findNodeMatch(e, t, n, r) {
    let i = -1,
      a;
    if (
      r >= this.preMatch.index &&
      (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top &&
      a.matchesNode(e, t, n)
    )
      i = this.top.children.indexOf(a, this.index);
    else
      for (let r = this.index, a = Math.min(this.top.children.length, r + 5); r < a; r++) {
        let a = this.top.children[r];
        if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
          i = r;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(e, t, n, r, i) {
    let a = this.top.children[r];
    return (
      a.dirty == Fo && a.dom == a.contentDOM && (a.dirty = Po),
      a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1
    );
  }
  findIndexWithChild(e) {
    for (;;) {
      let t = e.parentNode;
      if (!t) return -1;
      if (t == this.top.contentDOM) {
        let t = e.pmViewDesc;
        if (t) {
          for (let e = this.index; e < this.top.children.length; e++)
            if (this.top.children[e] == t) return e;
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, n, r, i, a) {
    for (let o = this.index; o < this.top.children.length; o++) {
      let s = this.top.children[o];
      if (s instanceof Bo) {
        let c = this.preMatch.matched.get(s);
        if (c != null && c != i) return !1;
        let l = s.dom,
          u,
          d =
            this.isLocked(l) &&
            !(
              e.isText &&
              s.node &&
              s.node.isText &&
              s.nodeDOM.nodeValue == e.text &&
              s.dirty != Fo &&
              Qo(t, s.outerDeco)
            );
        if (!d && s.update(e, t, n, r))
          return (
            this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0
          );
        if (!d && (u = this.recreateWrapper(s, e, t, n, r, a)))
          return (
            this.destroyBetween(this.index, o),
            (this.top.children[this.index] = u),
            u.contentDOM && ((u.dirty = Po), u.updateChildren(r, a + 1), (u.dirty = Mo)),
            (this.changed = !0),
            this.index++,
            !0
          );
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e, t, n, r, i, a) {
    if (
      e.dirty ||
      t.isAtom ||
      !e.children.length ||
      !e.node.content.eq(t.content) ||
      !Qo(n, e.outerDeco) ||
      !r.eq(e.innerDeco)
    )
      return null;
    let o = Bo.create(this.top, t, n, r, i, a);
    if (o.contentDOM) {
      ((o.children = e.children), (e.children = []));
      for (let e of o.children) e.parent = o;
    }
    return (e.destroy(), o);
  }
  addNode(e, t, n, r, i) {
    let a = Bo.create(this.top, e, t, n, r, i);
    (a.contentDOM && a.updateChildren(r, i + 1),
      this.top.children.splice(this.index++, 0, a),
      (this.changed = !0));
  }
  placeWidget(e, t, n) {
    let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
    else {
      let r = new Lo(this.top, e, t, n);
      (this.top.children.splice(this.index++, 0, r), (this.changed = !0));
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1],
      t = this.top;
    for (; e instanceof zo;) ((t = e), (e = t.children[t.children.length - 1]));
    (!e ||
      !(e instanceof Ho) ||
      /\n$/.test(e.node.text) ||
      (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
      ((Ka || Wa) && e && e.dom.contentEditable == `false` && this.addHackNode(`IMG`, t),
      this.addHackNode(`BR`, this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let n = document.createElement(e);
      (e == `IMG` && ((n.className = `ProseMirror-separator`), (n.alt = ``)),
        e == `BR` && (n.className = `ProseMirror-trailingBreak`));
      let r = new Uo(this.top, [], n, null);
      (t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r),
        (this.changed = !0));
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || (e.nodeType == 1 && e.contains(this.lock.parentNode)));
  }
};
function ts(e, t) {
  let n = t,
    r = n.children.length,
    i = e.childCount,
    a = new Map(),
    o = [];
  outer: for (; i > 0;) {
    let s;
    for (;;)
      if (r) {
        let e = n.children[r - 1];
        if (e instanceof zo) ((n = e), (r = e.children.length));
        else {
          ((s = e), r--);
          break;
        }
      } else if (n == t) break outer;
      else ((r = n.parent.children.indexOf(n)), (n = n.parent));
    let c = s.node;
    if (c) {
      if (c != e.child(i - 1)) break;
      (--i, a.set(s, i), o.push(s));
    }
  }
  return { index: i, matched: a, matches: o.reverse() };
}
function ns(e, t) {
  return e.type.side - t.type.side;
}
function rs(e, t, n, r) {
  let i = t.locals(e),
    a = 0;
  if (i.length == 0) {
    for (let n = 0; n < e.childCount; n++) {
      let o = e.child(n);
      (r(o, i, t.forChild(a, o), n), (a += o.nodeSize));
    }
    return;
  }
  let o = 0,
    s = [],
    c = null;
  for (let l = 0; ;) {
    let u, d;
    for (; o < i.length && i[o].to == a;) {
      let e = i[o++];
      e.widget && (u ? (d ||= [u]).push(e) : (u = e));
    }
    if (u) {
      if (d) {
        d.sort(ns);
        for (let e = 0; e < d.length; e++) n(d[e], l, !!c);
      } else n(u, l, !!c);
    }
    let f, p;
    if (c) ((p = -1), (f = c), (c = null));
    else if (l < e.childCount) ((p = l), (f = e.child(l++)));
    else break;
    for (let e = 0; e < s.length; e++) s[e].to <= a && s.splice(e--, 1);
    for (; o < i.length && i[o].from <= a && i[o].to > a;) s.push(i[o++]);
    let m = a + f.nodeSize;
    if (f.isText) {
      let e = m;
      o < i.length && i[o].from < e && (e = i[o].from);
      for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
      e < m && ((c = f.cut(e - a)), (f = f.cut(0, e - a)), (m = e), (p = -1));
    } else for (; o < i.length && i[o].to < m;) o++;
    let h = f.isInline && !f.isLeaf ? s.filter((e) => !e.inline) : s.slice();
    (r(f, h, t.forChild(a, f), p), (a = m));
  }
}
function is(e) {
  if (e.nodeName == `UL` || e.nodeName == `OL`) {
    let t = e.style.cssText;
    ((e.style.cssText = t + `; list-style: square !important`),
      window.getComputedStyle(e).listStyle,
      (e.style.cssText = t));
  }
}
function as(e, t, n, r) {
  for (let i = 0, a = 0; i < e.childCount && a <= r;) {
    let o = e.child(i++),
      s = a;
    if (((a += o.nodeSize), !o.isText)) continue;
    let c = o.text;
    for (; i < e.childCount;) {
      let t = e.child(i++);
      if (((a += t.nodeSize), !t.isText)) break;
      c += t.text;
    }
    if (a >= n) {
      if (a >= r && c.slice(r - t.length - s, r - s) == t) return r - t.length;
      let e = s < r ? c.lastIndexOf(t, r - s - 1) : -1;
      if (e >= 0 && e + t.length + s >= n) return s + e;
      if (n == r && c.length >= r + t.length - s && c.slice(r - s, r - s + t.length) == t) return r;
    }
  }
  return -1;
}
function ss(e, t, n, r, i) {
  let a = [];
  for (let o = 0, s = 0; o < e.length; o++) {
    let c = e[o],
      l = s,
      u = (s += c.size);
    l >= n || u <= t
      ? a.push(c)
      : (l < t && a.push(c.slice(0, t - l, r)),
        (i &&= (a.push(i), void 0)),
        u > n && a.push(c.slice(n - l, c.size, r)));
  }
  return a;
}
function cs(e, t = null) {
  let n = e.domSelectionRange(),
    r = e.state.doc;
  if (!n.focusNode) return null;
  let i = e.docView.nearestDesc(n.focusNode),
    a = i && i.size == 0,
    o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0) return null;
  let s = r.resolve(o),
    c,
    l;
  if (Aa(n)) {
    for (c = o; i && !i.node;) i = i.parent;
    let e = i.node;
    if (
      i &&
      e.isAtom &&
      z.isSelectable(e) &&
      i.parent &&
      !(e.isInline && Oa(n.focusNode, n.focusOffset, i.dom))
    ) {
      let e = i.posBefore;
      l = new z(o == e ? s : r.resolve(e));
    }
  } else {
    if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let t = o,
        i = o;
      for (let r = 0; r < n.rangeCount; r++) {
        let a = n.getRangeAt(r);
        ((t = Math.min(t, e.docView.posFromDOM(a.startContainer, a.startOffset, 1))),
          (i = Math.max(i, e.docView.posFromDOM(a.endContainer, a.endOffset, -1))));
      }
      if (t < 0) return null;
      (([c, o] = i == e.state.selection.anchor ? [i, t] : [t, i]), (s = r.resolve(o)));
    } else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (c < 0) return null;
  }
  let u = r.resolve(c);
  if (!l) {
    let n = t == `pointer` || (e.state.selection.head < s.pos && !a) ? 1 : -1;
    l = ys(e, u, s, n);
  }
  return l;
}
function ls(e) {
  return e.editable
    ? e.hasFocus()
    : xs(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function us(e, t = !1) {
  let n = e.state.selection;
  if ((_s(e, n), !ls(e))) return;
  let r = e.input.mouseDown;
  if (!t && Wa && r) {
    let t = e.domSelectionRange(),
      n = e.domObserver.currentSelection;
    if (
      t.anchorNode &&
      n.anchorNode &&
      Sa(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) &&
      r.delaySelUpdate()
    ) {
      e.domObserver.setCurSelection();
      return;
    }
  }
  if ((e.domObserver.disconnectSelection(), e.cursorWrapper)) gs(e);
  else {
    let { anchor: r, head: i } = n,
      a,
      o;
    (ds &&
      !(n instanceof R) &&
      (n.$from.parent.inlineContent || (a = fs(e, n.from)),
      !n.empty && !n.$from.parent.inlineContent && (o = fs(e, n.to))),
      e.docView.setSelection(r, i, e, t),
      ds && (a && ms(a), o && ms(o)),
      n.visible
        ? e.dom.classList.remove(`ProseMirror-hideselection`)
        : (e.dom.classList.add(`ProseMirror-hideselection`),
          `onselectionchange` in document && hs(e)));
  }
  (e.domObserver.setCurSelection(), e.domObserver.connectSelection());
}
var ds = Ka || (Wa && Ga < 63);
function fs(e, t) {
  let { node: n, offset: r } = e.docView.domFromPos(t, 0),
    i = r < n.childNodes.length ? n.childNodes[r] : null,
    a = r ? n.childNodes[r - 1] : null;
  if (Ka && i && i.contentEditable == `false`) return ps(i);
  if ((!i || i.contentEditable == `false`) && (!a || a.contentEditable == `false`)) {
    if (i) return ps(i);
    if (a) return ps(a);
  }
}
function ps(e) {
  return (
    (e.contentEditable = `true`),
    Ka && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
    e
  );
}
function ms(e) {
  ((e.contentEditable = `false`), (e.wasDraggable &&= ((e.draggable = !0), null)));
}
function hs(e) {
  let t = e.dom.ownerDocument;
  t.removeEventListener(`selectionchange`, e.input.hideSelectionGuard);
  let n = e.domSelectionRange(),
    r = n.anchorNode,
    i = n.anchorOffset;
  t.addEventListener(
    `selectionchange`,
    (e.input.hideSelectionGuard = () => {
      (n.anchorNode != r || n.anchorOffset != i) &&
        (t.removeEventListener(`selectionchange`, e.input.hideSelectionGuard),
        setTimeout(() => {
          (!ls(e) || e.state.selection.visible) &&
            e.dom.classList.remove(`ProseMirror-hideselection`);
        }, 20));
    }),
  );
}
function gs(e) {
  let t = e.domSelection();
  if (!t) return;
  let n = e.cursorWrapper.dom,
    r = n.nodeName == `IMG`;
  (r ? t.collapse(n.parentNode, _a(n) + 1) : t.collapse(n, 0),
    !r && !e.state.selection.visible && Ba && Va <= 11 && ((n.disabled = !0), (n.disabled = !1)));
}
function _s(e, t) {
  if (t instanceof z) {
    let n = e.docView.descAt(t.from);
    n != e.lastSelectedViewDesc && (vs(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
  } else vs(e);
}
function vs(e) {
  e.lastSelectedViewDesc &&=
    (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function ys(e, t, n, r) {
  return e.someProp(`createSelectionBetween`, (r) => r(e, t, n)) || R.between(t, n, r);
}
function bs(e) {
  return e.editable && !e.hasFocus() ? !1 : xs(e);
}
function xs(e) {
  let t = e.domSelectionRange();
  if (!t.anchorNode) return !1;
  try {
    return (
      e.dom.contains(t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode) &&
      (e.editable ||
        e.dom.contains(t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode))
    );
  } catch {
    return !1;
  }
}
function Ss(e) {
  let t = e.docView.domFromPos(e.state.selection.anchor, 0),
    n = e.domSelectionRange();
  return Sa(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function Cs(e, t) {
  let { $anchor: n, $head: r } = e.selection,
    i = t > 0 ? n.max(r) : n.min(r),
    a = i.parent.inlineContent
      ? i.depth
        ? e.doc.resolve(t > 0 ? i.after() : i.before())
        : null
      : i;
  return a && L.findFrom(a, t);
}
function ws(e, t) {
  return (e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0);
}
function Ts(e, t, n) {
  let r = e.state.selection;
  if (r instanceof R) {
    if (n.indexOf(`s`) > -1) {
      let { $head: n } = r,
        i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
      if (!i || i.isText || !i.isLeaf) return !1;
      let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
      return ws(e, new R(r.$anchor, a));
    }
    if (!r.empty) return !1;
    if (e.endOfTextblock(t > 0 ? `forward` : `backward`)) {
      let n = Cs(e.state, t);
      return n && n instanceof z ? ws(e, n) : !1;
    }
    if (!(Ja && n.indexOf(`m`) > -1)) {
      let n = r.$head,
        i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter,
        a;
      if (!i || i.isText) return !1;
      let o = t < 0 ? n.pos - i.nodeSize : n.pos;
      return i.isAtom || ((a = e.docView.descAt(o)) && !a.contentDOM)
        ? z.isSelectable(i)
          ? ws(e, new z(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n))
          : Za
            ? ws(e, new R(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize)))
            : !1
        : !1;
    }
  } else if (r instanceof z && r.node.isInline) return ws(e, new R(t > 0 ? r.$to : r.$from));
  else {
    let n = Cs(e.state, t);
    return n ? ws(e, n) : !1;
  }
}
function Es(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function Ds(e, t) {
  let n = e.pmViewDesc;
  return n && n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != `BR`);
}
function Os(e, t) {
  return t < 0 ? ks(e) : As(e);
}
function ks(e) {
  let t = e.domSelectionRange(),
    n = t.focusNode,
    r = t.focusOffset;
  if (!n) return;
  let i,
    a,
    o = !1;
  for (Ha && n.nodeType == 1 && r < Es(n) && Ds(n.childNodes[r], -1) && (o = !0); ;)
    if (r > 0) {
      if (n.nodeType != 1) break;
      {
        let e = n.childNodes[r - 1];
        if (Ds(e, -1)) ((i = n), (a = --r));
        else if (e.nodeType == 3) ((n = e), (r = n.nodeValue.length));
        else break;
      }
    } else if (js(n)) break;
    else {
      let t = n.previousSibling;
      for (; t && Ds(t, -1);) ((i = n.parentNode), (a = _a(t)), (t = t.previousSibling));
      if (t) ((n = t), (r = Es(n)));
      else {
        if (((n = n.parentNode), n == e.dom)) break;
        r = 0;
      }
    }
  o ? Ps(e, n, r) : i && Ps(e, i, a);
}
function As(e) {
  let t = e.domSelectionRange(),
    n = t.focusNode,
    r = t.focusOffset;
  if (!n) return;
  let i = Es(n),
    a,
    o;
  for (;;)
    if (r < i) {
      if (n.nodeType != 1) break;
      let e = n.childNodes[r];
      if (Ds(e, 1)) ((a = n), (o = ++r));
      else break;
    } else if (js(n)) break;
    else {
      let t = n.nextSibling;
      for (; t && Ds(t, 1);) ((a = t.parentNode), (o = _a(t) + 1), (t = t.nextSibling));
      if (t) ((n = t), (r = 0), (i = Es(n)));
      else {
        if (((n = n.parentNode), n == e.dom)) break;
        r = i = 0;
      }
    }
  a && Ps(e, a, o);
}
function js(e) {
  let t = e.pmViewDesc;
  return t && t.node && t.node.isBlock;
}
function Ms(e, t) {
  for (; e && t == e.childNodes.length && !ka(e);) ((t = _a(e) + 1), (e = e.parentNode));
  for (; e && t < e.childNodes.length;) {
    let n = e.childNodes[t];
    if (n.nodeType == 3) return n;
    if (n.nodeType == 1 && n.contentEditable == `false`) break;
    ((e = n), (t = 0));
  }
}
function Ns(e, t) {
  for (; e && !t && !ka(e);) ((t = _a(e)), (e = e.parentNode));
  for (; e && t;) {
    let n = e.childNodes[t - 1];
    if (n.nodeType == 3) return n;
    if (n.nodeType == 1 && n.contentEditable == `false`) break;
    ((e = n), (t = e.childNodes.length));
  }
}
function Ps(e, t, n) {
  if (t.nodeType != 3) {
    let e, r;
    (r = Ms(t, n)) ? ((t = r), (n = 0)) : (e = Ns(t, n)) && ((t = e), (n = e.nodeValue.length));
  }
  let r = e.domSelection();
  if (!r) return;
  if (Aa(r)) {
    let e = document.createRange();
    (e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e));
  } else r.extend && r.extend(t, n);
  e.domObserver.setCurSelection();
  let { state: i } = e;
  setTimeout(() => {
    e.state == i && us(e);
  }, 50);
}
function Fs(e, t) {
  let n = e.state.doc.resolve(t);
  if (!(Wa || Ya) && n.parent.inlineContent) {
    let r = e.coordsAtPos(t);
    if (t > n.start()) {
      let n = e.coordsAtPos(t - 1),
        i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
        return n.left < r.left ? `ltr` : `rtl`;
    }
    if (t < n.end()) {
      let n = e.coordsAtPos(t + 1),
        i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1)
        return n.left > r.left ? `ltr` : `rtl`;
    }
  }
  return getComputedStyle(e.dom).direction == `rtl` ? `rtl` : `ltr`;
}
function Is(e, t, n) {
  let r = e.state.selection;
  if ((r instanceof R && !r.empty) || n.indexOf(`s`) > -1 || (Ja && n.indexOf(`m`) > -1)) return !1;
  let { $from: i, $to: a } = r;
  if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? `up` : `down`)) {
    let n = Cs(e.state, t);
    if (n && n instanceof z) return ws(e, n);
  }
  if (!i.parent.inlineContent) {
    let n = t < 0 ? i : a,
      o = r instanceof ui ? L.near(n, t) : L.findFrom(n, t);
    return o ? ws(e, o) : !1;
  }
  return !1;
}
function Ls(e, t) {
  if (!(e.state.selection instanceof R)) return !0;
  let { $head: n, $anchor: r, empty: i } = e.state.selection;
  if (!n.sameParent(r)) return !0;
  if (!i) return !1;
  if (e.endOfTextblock(t > 0 ? `forward` : `backward`)) return !0;
  let a = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
  if (a && !a.isText) {
    let r = e.state.tr;
    return (
      t < 0 ? r.delete(n.pos - a.nodeSize, n.pos) : r.delete(n.pos, n.pos + a.nodeSize),
      e.dispatch(r),
      !0
    );
  }
  return !1;
}
function Rs(e, t, n) {
  (e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start());
}
function zs(e) {
  if (!Ka || e.state.selection.$head.parentOffset > 0) return !1;
  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
  if (t && t.nodeType == 1 && n == 0 && t.firstChild && t.firstChild.contentEditable == `false`) {
    let n = t.firstChild;
    (Rs(e, n, `true`), setTimeout(() => Rs(e, n, `false`), 20));
  }
  return !1;
}
function Bs(e) {
  let t = ``;
  return (
    e.ctrlKey && (t += `c`),
    e.metaKey && (t += `m`),
    e.altKey && (t += `a`),
    e.shiftKey && (t += `s`),
    t
  );
}
function Vs(e, t) {
  let n = t.keyCode,
    r = Bs(t);
  if (n == 8 || (Ja && n == 72 && r == `c`)) return Ls(e, -1) || Os(e, -1);
  if ((n == 46 && !t.shiftKey) || (Ja && n == 68 && r == `c`)) return Ls(e, 1) || Os(e, 1);
  if (n == 13 || n == 27) return !0;
  if (n == 37 || (Ja && n == 66 && r == `c`)) {
    let t = n == 37 ? (Fs(e, e.state.selection.from) == `ltr` ? -1 : 1) : -1;
    return Ts(e, t, r) || Os(e, t);
  }
  if (n == 39 || (Ja && n == 70 && r == `c`)) {
    let t = n == 39 ? (Fs(e, e.state.selection.from) == `ltr` ? 1 : -1) : 1;
    return Ts(e, t, r) || Os(e, t);
  }
  return n == 38 || (Ja && n == 80 && r == `c`)
    ? Is(e, -1, r) || Os(e, -1)
    : n == 40 || (Ja && n == 78 && r == `c`)
      ? zs(e) || Is(e, 1, r) || Os(e, 1)
      : !(r != (Ja ? `m` : `c`) || (n != 66 && n != 73 && n != 89 && n != 90));
}
function Hs(e, t) {
  e.someProp(`transformCopied`, (n) => {
    t = n(t, e);
  });
  let n = [],
    { content: r, openStart: i, openEnd: a } = t;
  for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
    (i--, a--);
    let e = r.firstChild;
    (n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), (r = e.content));
  }
  let o = e.someProp(`clipboardSerializer`) || Ln.fromSchema(e.state.schema),
    s = Qs(),
    c = s.createElement(`div`);
  c.appendChild(o.serializeFragment(r, { document: s }));
  let l = c.firstChild,
    u,
    d = 0;
  for (; l && l.nodeType == 1 && (u = Zs[l.nodeName.toLowerCase()]);) {
    for (let e = u.length - 1; e >= 0; e--) {
      let t = s.createElement(u[e]);
      for (; c.firstChild;) t.appendChild(c.firstChild);
      (c.appendChild(t), d++);
    }
    l = c.firstChild;
  }
  return (
    l &&
      l.nodeType == 1 &&
      l.setAttribute(`data-pm-slice`, `${i} ${a}${d ? ` -${d}` : ``} ${JSON.stringify(n)}`),
    {
      dom: c,
      text:
        e.someProp(`clipboardTextSerializer`, (n) => n(t, e)) ||
        t.content.textBetween(
          0,
          t.content.size,
          `

`,
        ),
      slice: t,
    }
  );
}
function Us(e, t, n, r, i) {
  let a = i.parent.type.spec.code,
    o,
    s;
  if (!n && !t) return null;
  let c = !!t && (r || a || !n);
  if (c) {
    if (
      (e.someProp(`transformPastedText`, (n) => {
        t = n(t, a || r, e);
      }),
      a)
    )
      return (
        (s = new I(
          P.from(
            e.state.schema.text(
              t.replace(
                /\r\n?/g,
                `
`,
              ),
            ),
          ),
          0,
          0,
        )),
        e.someProp(`transformPasted`, (t) => {
          s = t(s, e, !0);
        }),
        s
      );
    let n = e.someProp(`clipboardTextParser`, (n) => n(t, i, r, e));
    if (n) s = n;
    else {
      let n = i.marks(),
        { schema: r } = e.state,
        a = Ln.fromSchema(r);
      ((o = document.createElement(`div`)),
        t.split(/(?:\r\n?|\n)+/).forEach((e) => {
          let t = o.appendChild(document.createElement(`p`));
          e && t.appendChild(a.serializeNode(r.text(e, n)));
        }));
    }
  } else
    (e.someProp(`transformPastedHTML`, (t) => {
      n = t(n, e);
    }),
      (o = tc(n)),
      Za && nc(o));
  let l = o && o.querySelector(`[data-pm-slice]`),
    u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute(`data-pm-slice`) || ``);
  if (u && u[3])
    for (let e = +u[3]; e > 0; e--) {
      let e = o.firstChild;
      for (; e && e.nodeType != 1;) e = e.nextSibling;
      if (!e) break;
      o = e;
    }
  if (
    ((s ||= (
      e.someProp(`clipboardParser`) ||
      e.someProp(`domParser`) ||
      Cn.fromSchema(e.state.schema)
    ).parseSlice(o, {
      preserveWhitespace: !!(c || u),
      context: i,
      ruleFromNode(e) {
        return e.nodeName == `BR` &&
          !e.nextSibling &&
          e.parentNode &&
          !Ws.test(e.parentNode.nodeName)
          ? { ignore: !0 }
          : null;
      },
    })),
    u)
  )
    s = rc(Xs(s, +u[1], +u[2]), u[4]);
  else if (((s = I.maxOpen(Gs(s.content, i), !0)), s.openStart || s.openEnd)) {
    let e = 0,
      t = 0;
    for (
      let t = s.content.firstChild;
      e < s.openStart && !t.type.spec.isolating;
      e++, t = t.firstChild
    );
    for (
      let e = s.content.lastChild;
      t < s.openEnd && !e.type.spec.isolating;
      t++, e = e.lastChild
    );
    s = Xs(s, e, t);
  }
  return (
    e.someProp(`transformPasted`, (t) => {
      s = t(s, e, c);
    }),
    s
  );
}
var Ws =
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Gs(e, t) {
  if (e.childCount < 2) return e;
  for (let n = t.depth; n >= 0; n--) {
    let r = t.node(n).contentMatchAt(t.index(n)),
      i,
      a = [];
    if (
      (e.forEach((e) => {
        if (!a) return;
        let t = r.findWrapping(e.type),
          n;
        if (!t) return (a = null);
        if ((n = a.length && i.length && qs(t, i, e, a[a.length - 1], 0))) a[a.length - 1] = n;
        else {
          a.length && (a[a.length - 1] = Js(a[a.length - 1], i.length));
          let n = Ks(e, t);
          (a.push(n), (r = r.matchType(n.type)), (i = t));
        }
      }),
      a)
    )
      return P.from(a);
  }
  return e;
}
function Ks(e, t, n = 0) {
  for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, P.from(e));
  return e;
}
function qs(e, t, n, r, i) {
  if (i < e.length && i < t.length && e[i] == t[i]) {
    let a = qs(e, t, n, r.lastChild, i + 1);
    if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
    if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1]))
      return r.copy(r.content.append(P.from(Ks(n, e, i + 1))));
  }
}
function Js(e, t) {
  if (t == 0) return e;
  let n = e.content.replaceChild(e.childCount - 1, Js(e.lastChild, t - 1)),
    r = e.contentMatchAt(e.childCount).fillBefore(P.empty, !0);
  return e.copy(n.append(r));
}
function Ys(e, t, n, r, i, a) {
  let o = t < 0 ? e.firstChild : e.lastChild,
    s = o.content;
  return (
    e.childCount > 1 && (a = 0),
    i < r - 1 && (s = Ys(s, t, n, r, i + 1, a)),
    i >= n &&
      (s =
        t < 0
          ? o
              .contentMatchAt(0)
              .fillBefore(s, a <= i)
              .append(s)
          : s.append(o.contentMatchAt(o.childCount).fillBefore(P.empty, !0))),
    e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s))
  );
}
function Xs(e, t, n) {
  return (
    t < e.openStart && (e = new I(Ys(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)),
    n < e.openEnd && (e = new I(Ys(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)),
    e
  );
}
var Zs = {
  thead: [`table`],
  tbody: [`table`],
  tfoot: [`table`],
  caption: [`table`],
  colgroup: [`table`],
  col: [`table`, `colgroup`],
  tr: [`table`, `tbody`],
  td: [`table`, `tbody`, `tr`],
  th: [`table`, `tbody`, `tr`],
};
function Qs() {
  return document.implementation.createHTMLDocument(`title`);
}
var $s = null;
function ec(e) {
  let t = window.trustedTypes;
  if (!t) return e;
  if (!$s) {
    if (($s = t.defaultPolicy))
      try {
        return $s.createHTML(e);
      } catch {}
    $s = t.createPolicy(`ProseMirrorClipboard`, { createHTML: (e) => e });
  }
  return $s.createHTML(e);
}
function tc(e) {
  let t = /^(\s*<meta [^>]*>)*/.exec(e);
  t && (e = e.slice(t[0].length));
  let n = Qs(),
    r = n.body,
    i = /<([a-z][^>\s]+)/i.exec(e),
    a;
  if (
    ((a = i && Zs[i[1].toLowerCase()]) &&
      (e =
        a.map((e) => `<` + e + `>`).join(``) +
        e +
        a
          .map((e) => `</` + e + `>`)
          .reverse()
          .join(``)),
    (r.innerHTML = ec(e)),
    a)
  )
    for (let e = 0; e < a.length; e++) r = r.querySelector(a[e]) || r;
  for (let e = 0; e < n.styleSheets.length; e++) {
    let t = n.styleSheets[e];
    for (let e = 0; e < t.rules.length; e++) {
      let n = t.rules[e];
      if (n instanceof CSSStyleRule) {
        let e = r.querySelectorAll(n.selectorText);
        for (let t = 0; t < e.length; t++) e[t].style.cssText += n.style.cssText;
      }
    }
  }
  return r;
}
function nc(e) {
  let t = e.querySelectorAll(Wa ? `span:not([class]):not([style])` : `span.Apple-converted-space`);
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    r.childNodes.length == 1 &&
      r.textContent == `\xA0` &&
      r.parentNode &&
      r.parentNode.replaceChild(e.ownerDocument.createTextNode(` `), r);
  }
}
function rc(e, t) {
  if (!e.size) return e;
  let n = e.content.firstChild.type.schema,
    r;
  try {
    r = JSON.parse(t);
  } catch {
    return e;
  }
  let { content: i, openStart: a, openEnd: o } = e;
  for (let e = r.length - 2; e >= 0; e -= 2) {
    let t = n.nodes[r[e]];
    if (!t || t.hasRequiredAttrs()) break;
    try {
      t.checkAttrs(r[e + 1]);
    } catch {
      break;
    }
    ((i = P.from(t.create(r[e + 1], i))), a++, o++);
  }
  return new I(i, a, o);
}
var ic = {},
  ac = {},
  oc = { touchstart: !0, touchmove: !0 },
  sc = class {
    constructor() {
      ((this.shiftKey = !1),
        (this.mouseDown = null),
        (this.lastKeyCode = null),
        (this.lastKeyCodeTime = 0),
        (this.lastClick = { time: 0, x: 0, y: 0, type: ``, button: 0 }),
        (this.lastSelectionOrigin = null),
        (this.lastSelectionTime = 0),
        (this.lastIOSEnter = 0),
        (this.lastIOSEnterFallbackTimeout = -1),
        (this.lastFocus = 0),
        (this.lastTouch = 0),
        (this.lastChromeDelete = 0),
        (this.composing = !1),
        (this.compositionNode = null),
        (this.composingTimeout = -1),
        (this.compositionNodes = []),
        (this.compositionEndedAt = -2e8),
        (this.compositionID = 1),
        (this.badSafariComposition = !1),
        (this.compositionPendingChanges = 0),
        (this.domChangeCount = 0),
        (this.eventHandlers = Object.create(null)),
        (this.hideSelectionGuard = null));
    }
  };
function cc(e) {
  for (let t in ic) {
    let n = ic[t];
    e.dom.addEventListener(
      t,
      (e.input.eventHandlers[t] = (t) => {
        pc(e, t) && !fc(e, t) && (e.editable || !(t.type in ac)) && n(e, t);
      }),
      oc[t] ? { passive: !0 } : void 0,
    );
  }
  (Ka && e.dom.addEventListener(`input`, () => null), dc(e));
}
function lc(e, t) {
  ((e.input.lastSelectionOrigin = t), (e.input.lastSelectionTime = Date.now()));
}
function uc(e) {
  (e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop());
  for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
  (clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout));
}
function dc(e) {
  e.someProp(`handleDOMEvents`, (t) => {
    for (let n in t)
      e.input.eventHandlers[n] ||
        e.dom.addEventListener(n, (e.input.eventHandlers[n] = (t) => fc(e, t)));
  });
}
function fc(e, t) {
  return e.someProp(`handleDOMEvents`, (n) => {
    let r = n[t.type];
    return r ? r(e, t) || t.defaultPrevented : !1;
  });
}
function pc(e, t) {
  if (!t.bubbles) return !0;
  if (t.defaultPrevented) return !1;
  for (let n = t.target; n != e.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || (n.pmViewDesc && n.pmViewDesc.stopEvent(t))) return !1;
  return !0;
}
function mc(e, t) {
  !fc(e, t) && ic[t.type] && (e.editable || !(t.type in ac)) && ic[t.type](e, t);
}
((ac.keydown = (e, t) => {
  let n = t;
  if (
    ((e.input.shiftKey = n.keyCode == 16 || n.shiftKey),
    !jc(e) &&
      ((e.input.lastKeyCode = n.keyCode),
      (e.input.lastKeyCodeTime = Date.now()),
      !(Xa && Wa && n.keyCode == 13)))
  ) {
    if (
      (n.keyCode != 229 && e.domObserver.forceFlush(),
      qa && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey)
    ) {
      let t = Date.now();
      ((e.input.lastIOSEnter = t),
        (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
          e.input.lastIOSEnter == t &&
            (e.someProp(`handleKeyDown`, (t) => t(e, ja(13, `Enter`))), (e.input.lastIOSEnter = 0));
        }, 200)));
    } else
      e.someProp(`handleKeyDown`, (t) => t(e, n)) || Vs(e, n) ? n.preventDefault() : lc(e, `key`);
  }
}),
  (ac.keyup = (e, t) => {
    t.keyCode == 16 && (e.input.shiftKey = !1);
  }),
  (ac.keypress = (e, t) => {
    let n = t;
    if (jc(e) || !n.charCode || (n.ctrlKey && !n.altKey) || (Ja && n.metaKey)) return;
    if (e.someProp(`handleKeyPress`, (t) => t(e, n))) {
      n.preventDefault();
      return;
    }
    let r = e.state.selection;
    if (!(r instanceof R) || !r.$from.sameParent(r.$to)) {
      let t = String.fromCharCode(n.charCode),
        i = () => e.state.tr.insertText(t).scrollIntoView();
      (!/[\r\n]/.test(t) &&
        !e.someProp(`handleTextInput`, (n) => n(e, r.$from.pos, r.$to.pos, t, i)) &&
        e.dispatch(i()),
        n.preventDefault());
    }
  }));
function hc(e) {
  return { left: e.clientX, top: e.clientY };
}
function gc(e, t) {
  let n = t.x - e.clientX,
    r = t.y - e.clientY;
  return n * n + r * r < 100;
}
function _c(e, t, n, r, i) {
  if (r == -1) return !1;
  let a = e.state.doc.resolve(r);
  for (let r = a.depth + 1; r > 0; r--)
    if (
      e.someProp(t, (t) =>
        r > a.depth
          ? t(e, n, a.nodeAfter, a.before(r), i, !0)
          : t(e, n, a.node(r), a.before(r), i, !1),
      )
    )
      return !0;
  return !1;
}
function vc(e, t, n) {
  if ((e.focused || e.focus(), e.state.selection.eq(t))) return;
  let r = e.state.tr.setSelection(t);
  (n == `pointer` && r.setMeta(`pointer`, !0), e.dispatch(r));
}
function yc(e, t) {
  if (t == -1) return !1;
  let n = e.state.doc.resolve(t),
    r = n.nodeAfter;
  return r && r.isAtom && z.isSelectable(r) ? (vc(e, new z(n), `pointer`), !0) : !1;
}
function bc(e, t) {
  if (t == -1) return !1;
  let n = e.state.selection,
    r,
    i;
  n instanceof z && (r = n.node);
  let a = e.state.doc.resolve(t);
  for (let e = a.depth + 1; e > 0; e--) {
    let t = e > a.depth ? a.nodeAfter : a.node(e);
    if (z.isSelectable(t)) {
      i =
        r && n.$from.depth > 0 && e >= n.$from.depth && a.before(n.$from.depth + 1) == n.$from.pos
          ? a.before(n.$from.depth)
          : a.before(e);
      break;
    }
  }
  return i != null && (vc(e, z.create(e.state.doc, i), `pointer`), !0);
}
function xc(e, t, n, r, i) {
  return (
    _c(e, `handleClickOn`, t, n, r) ||
    e.someProp(`handleClick`, (n) => n(e, t, r)) ||
    (i ? bc(e, n) : yc(e, n))
  );
}
function Sc(e, t, n, r) {
  return (
    _c(e, `handleDoubleClickOn`, t, n, r) || e.someProp(`handleDoubleClick`, (n) => n(e, t, r))
  );
}
function Cc(e, t, n, r) {
  return (
    _c(e, `handleTripleClickOn`, t, n, r) ||
    e.someProp(`handleTripleClick`, (n) => n(e, t, r)) ||
    wc(e, n, r)
  );
}
function wc(e, t, n) {
  if (n.button != 0) return !1;
  let r = Tc(e, t, !0),
    i = e.state.doc;
  return r
    ? (vc(e, r, `pointer`),
      r instanceof R && i.eq(e.state.doc) && (e.input.mouseDown = new Ac(e, r)),
      !0)
    : !1;
}
function Tc(e, t, n) {
  let r = e.state.doc;
  if (t == -1) return r.inlineContent ? R.create(r, 0, r.content.size) : null;
  let i = r.resolve(t);
  for (let e = i.depth + 1; e > 0; e--) {
    let t = e > i.depth ? i.nodeAfter : i.node(e),
      a = i.before(e);
    if (t.inlineContent) return R.create(r, a + 1, a + 1 + t.content.size);
    if (n && z.isSelectable(t)) return z.create(r, a);
  }
  return null;
}
function Ec(e) {
  return Lc(e);
}
var Dc = Ja ? `metaKey` : `ctrlKey`;
ic.mousedown = (e, t) => {
  let n = t;
  e.input.shiftKey = n.shiftKey;
  let r = Ec(e),
    i = Date.now(),
    a = `singleClick`;
  (i - e.input.lastClick.time < 500 &&
    gc(n, e.input.lastClick) &&
    !n[Dc] &&
    e.input.lastClick.button == n.button &&
    (e.input.lastClick.type == `singleClick`
      ? (a = `doubleClick`)
      : e.input.lastClick.type == `doubleClick` && (a = `tripleClick`)),
    (e.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: a, button: n.button }),
    e.input.mouseDown && e.input.mouseDown.done());
  let o = e.posAtCoords(hc(n));
  o &&
    (a == `singleClick`
      ? (e.input.mouseDown = new kc(e, o, n, !!r))
      : (a == `doubleClick` ? Sc : Cc)(e, o.pos, o.inside, n)
        ? n.preventDefault()
        : lc(e, `pointer`));
};
var Oc = class {
    constructor(e) {
      ((this.view = e),
        (this.mightDrag = null),
        e.root.addEventListener(`mouseup`, (this.up = this.up.bind(this))),
        e.root.addEventListener(`mousemove`, (this.move = this.move.bind(this))));
    }
    up(e) {
      this.done();
    }
    move(e) {
      e.buttons == 0 && this.done();
    }
    done() {
      (this.view.root.removeEventListener(`mouseup`, this.up),
        this.view.root.removeEventListener(`mousemove`, this.move),
        this.view.input.mouseDown == this && (this.view.input.mouseDown = null));
    }
    delaySelUpdate() {
      return !1;
    }
  },
  kc = class extends Oc {
    constructor(e, t, n, r) {
      (super(e),
        (this.pos = t),
        (this.event = n),
        (this.flushed = r),
        (this.delayedSelectionSync = !1),
        (this.startDoc = e.state.doc),
        (this.selectNode = !!n[Dc]),
        (this.allowDefault = n.shiftKey));
      let i, a;
      if (t.inside > -1) ((i = e.state.doc.nodeAt(t.inside)), (a = t.inside));
      else {
        let n = e.state.doc.resolve(t.pos);
        ((i = n.parent), (a = n.depth ? n.before() : 0));
      }
      let o = r ? null : n.target,
        s = o ? e.docView.nearestDesc(o, !0) : null;
      this.target = s && s.nodeDOM.nodeType == 1 ? s.nodeDOM : null;
      let { selection: c } = e.state;
      (n.button == 0 &&
        ((i.type.spec.draggable && i.type.spec.selectable !== !1) ||
          (c instanceof z && c.from <= a && c.to > a)) &&
        (this.mightDrag = {
          node: i,
          pos: a,
          addAttr: !(!this.target || this.target.draggable),
          setUneditable: !!(this.target && Ha && !this.target.hasAttribute(`contentEditable`)),
        }),
        this.target &&
          this.mightDrag &&
          (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && (this.target.draggable = !0),
          this.mightDrag.setUneditable &&
            setTimeout(() => {
              this.view.input.mouseDown == this &&
                this.target.setAttribute(`contentEditable`, `false`);
            }, 20),
          this.view.domObserver.start()),
        lc(e, `pointer`));
    }
    done() {
      (super.done(),
        this.mightDrag &&
          this.target &&
          (this.view.domObserver.stop(),
          this.mightDrag.addAttr && this.target.removeAttribute(`draggable`),
          this.mightDrag.setUneditable && this.target.removeAttribute(`contentEditable`),
          this.view.domObserver.start()),
        this.delayedSelectionSync &&
          setTimeout(() => {
            this.view.isDestroyed || us(this.view);
          }));
    }
    up(e) {
      if ((this.done(), !this.view.dom.contains(e.target))) return;
      let t = this.pos;
      (this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(hc(e))),
        this.updateAllowDefault(e),
        this.allowDefault || !t
          ? lc(this.view, `pointer`)
          : xc(this.view, t.pos, t.inside, e, this.selectNode)
            ? e.preventDefault()
            : e.button == 0 &&
                (this.flushed ||
                  (Ka && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (Wa &&
                    !this.view.state.selection.visible &&
                    Math.min(
                      Math.abs(t.pos - this.view.state.selection.from),
                      Math.abs(t.pos - this.view.state.selection.to),
                    ) <= 2))
              ? (vc(this.view, L.near(this.view.state.doc.resolve(t.pos)), `pointer`),
                e.preventDefault())
              : lc(this.view, `pointer`));
    }
    move(e) {
      (this.updateAllowDefault(e), lc(this.view, `pointer`), super.move(e));
    }
    updateAllowDefault(e) {
      !this.allowDefault &&
        (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) &&
        (this.allowDefault = !0);
    }
    delaySelUpdate() {
      return this.allowDefault ? ((this.delayedSelectionSync = !0), !0) : !1;
    }
  },
  Ac = class extends Oc {
    constructor(e, t) {
      (super(e), (this.startSelection = t), (this.startDoc = e.state.doc));
    }
    move(e) {
      if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
        this.done();
        return;
      }
      (e.preventDefault(), lc(this.view, `pointer`));
      let t = this.view.posAtCoords(hc(e)),
        n = t && Tc(this.view, t.inside, !1);
      if (!n) return;
      let { doc: r } = this.view.state,
        i = this.startSelection,
        [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
      vc(this.view, R.create(r, a, o), `pointer`);
    }
  };
((ic.touchstart = (e) => {
  ((e.input.lastTouch = Date.now()), Ec(e), lc(e, `pointer`));
}),
  (ic.touchmove = (e) => {
    ((e.input.lastTouch = Date.now()), lc(e, `pointer`));
  }),
  (ic.contextmenu = (e) => Ec(e)));
function jc(e, t) {
  return e.composing
    ? !0
    : Ka && Math.abs(Date.now() - e.input.compositionEndedAt) < 500
      ? ((e.input.compositionEndedAt = -2e8), !0)
      : !1;
}
var Mc = Xa ? 5e3 : -1;
ac.compositionstart = ac.compositionupdate = (e) => {
  if (!e.composing) {
    e.domObserver.flush();
    let { state: t } = e,
      n = t.selection.$to;
    if (
      t.selection instanceof R &&
      (t.storedMarks ||
        (!n.textOffset &&
          n.parentOffset &&
          n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1)) ||
        (Wa && Ya && Nc(e)))
    )
      ((e.markCursor = e.state.storedMarks || n.marks()), Lc(e, !0), (e.markCursor = null));
    else if (
      (Lc(e, !t.selection.empty),
      Ha && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length)
    ) {
      let t = e.domSelectionRange();
      for (let n = t.focusNode, r = t.focusOffset; n && n.nodeType == 1 && r != 0;) {
        let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
        if (!t) break;
        if (t.nodeType == 3) {
          let n = e.domSelection();
          n && n.collapse(t, t.nodeValue.length);
          break;
        }
        ((n = t), (r = -1));
      }
    }
    e.input.composing = !0;
  }
  Pc(e, Mc);
};
function Nc(e) {
  let { focusNode: t, focusOffset: n } = e.domSelectionRange();
  if (!t || t.nodeType != 1 || n >= t.childNodes.length) return !1;
  let r = t.childNodes[n];
  return r.nodeType == 1 && r.contentEditable == `false`;
}
ac.compositionend = (e, t) => {
  e.composing &&
    ((e.input.composing = !1),
    (e.input.compositionEndedAt = Date.now()),
    (e.input.compositionPendingChanges = e.domObserver.pendingRecords().length
      ? e.input.compositionID
      : 0),
    (e.input.compositionNode = null),
    e.input.badSafariComposition
      ? e.domObserver.forceFlush()
      : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()),
    e.input.compositionID++,
    Pc(e, 20));
};
function Pc(e, t) {
  (clearTimeout(e.input.composingTimeout),
    t > -1 && (e.input.composingTimeout = setTimeout(() => Lc(e), t)));
}
function Fc(e) {
  for (
    e.composing && ((e.input.composing = !1), (e.input.compositionEndedAt = Date.now()));
    e.input.compositionNodes.length > 0;
  )
    e.input.compositionNodes.pop().markParentsDirty();
}
function Ic(e) {
  let t = e.domSelectionRange();
  if (!t.focusNode) return null;
  let n = Ea(t.focusNode, t.focusOffset),
    r = Da(t.focusNode, t.focusOffset);
  if (n && r && n != r) {
    let t = r.pmViewDesc,
      i = e.domObserver.lastChangedTextNode;
    if (n == i || r == i) return i;
    if (!t || !t.isText(r.nodeValue)) return r;
    if (e.input.compositionNode == r) {
      let e = n.pmViewDesc;
      if (e && e.isText(n.nodeValue)) return r;
    }
  }
  return n || r;
}
function Lc(e, t = !1) {
  if (!(Xa && e.domObserver.flushingSoon >= 0)) {
    if ((e.domObserver.forceFlush(), Fc(e), t || (e.docView && e.docView.dirty))) {
      let n = cs(e),
        r = e.state.selection;
      return (
        n && !n.eq(r)
          ? e.dispatch(e.state.tr.setSelection(n))
          : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent
            ? e.dispatch(e.state.tr.deleteSelection())
            : e.updateState(e.state),
        !0
      );
    }
    return !1;
  }
}
function Rc(e, t) {
  if (!e.dom.parentNode) return;
  let n = e.dom.parentNode.appendChild(document.createElement(`div`));
  (n.appendChild(t), (n.style.cssText = `position: fixed; left: -10000px; top: 10px`));
  let r = getSelection(),
    i = document.createRange();
  (i.selectNodeContents(t),
    e.dom.blur(),
    r.removeAllRanges(),
    r.addRange(i),
    setTimeout(() => {
      (n.parentNode && n.parentNode.removeChild(n), e.focus());
    }, 50));
}
var zc = (Ba && Va < 15) || (qa && Qa < 604);
ic.copy = ac.cut = (e, t) => {
  let n = t,
    r = e.state.selection,
    i = n.type == `cut`;
  if (r.empty) return;
  let a = zc ? null : n.clipboardData,
    { dom: o, text: s } = Hs(e, r.content());
  (a
    ? (n.preventDefault(),
      a.clearData(),
      a.setData(`text/html`, o.innerHTML),
      a.setData(`text/plain`, s))
    : Rc(e, o),
    i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta(`uiEvent`, `cut`)));
};
function Bc(e) {
  return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1
    ? e.content.firstChild
    : null;
}
function Vc(e, t) {
  if (!e.dom.parentNode) return;
  let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
    r = e.dom.parentNode.appendChild(document.createElement(n ? `textarea` : `div`));
  (n || (r.contentEditable = `true`),
    (r.style.cssText = `position: fixed; left: -10000px; top: 10px`),
    r.focus());
  let i = e.input.shiftKey && e.input.lastKeyCode != 45;
  setTimeout(() => {
    (e.focus(),
      r.parentNode && r.parentNode.removeChild(r),
      n ? Hc(e, r.value, null, i, t) : Hc(e, r.textContent, r.innerHTML, i, t));
  }, 50);
}
function Hc(e, t, n, r, i) {
  let a = Us(e, t, n, r, e.state.selection.$from);
  if (e.someProp(`handlePaste`, (t) => t(e, i, a || I.empty))) return !0;
  if (!a) return !1;
  let o = Bc(a),
    s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
  return (e.dispatch(s.scrollIntoView().setMeta(`paste`, !0).setMeta(`uiEvent`, `paste`)), !0);
}
function Uc(e) {
  let t = e.getData(`text/plain`) || e.getData(`Text`);
  if (t) return t;
  let n = e.getData(`text/uri-list`);
  return n ? n.replace(/\r?\n/g, ` `) : ``;
}
ac.paste = (e, t) => {
  let n = t;
  if (e.composing && !Xa) return;
  let r = zc ? null : n.clipboardData,
    i = e.input.shiftKey && e.input.lastKeyCode != 45;
  r && Hc(e, Uc(r), r.getData(`text/html`), i, n) ? n.preventDefault() : Vc(e, n);
};
var Wc = class {
    constructor(e, t, n) {
      ((this.slice = e), (this.move = t), (this.node = n));
    }
  },
  Gc = Ja ? `altKey` : `ctrlKey`;
function Kc(e, t) {
  let n;
  return (
    e.someProp(`dragCopies`, (e) => {
      n ||= e(t);
    }),
    n == null ? !t[Gc] : !n
  );
}
((ic.dragstart = (e, t) => {
  let n = t,
    r = e.input.mouseDown;
  if ((r && r.done(), !n.dataTransfer)) return;
  let i = e.state.selection,
    a = i.empty ? null : e.posAtCoords(hc(n)),
    o;
  if (!(a && a.pos >= i.from && a.pos <= (i instanceof z ? i.to - 1 : i.to))) {
    if (r && r.mightDrag) o = z.create(e.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let t = e.docView.nearestDesc(n.target, !0);
      t && t.node.type.spec.draggable && t != e.docView && (o = z.create(e.state.doc, t.posBefore));
    }
  }
  let { dom: s, text: c, slice: l } = Hs(e, (o || e.state.selection).content());
  ((!n.dataTransfer.files.length || !Wa || Ga > 120) && n.dataTransfer.clearData(),
    n.dataTransfer.setData(zc ? `Text` : `text/html`, s.innerHTML),
    (n.dataTransfer.effectAllowed = `copyMove`),
    zc || n.dataTransfer.setData(`text/plain`, c),
    (e.dragging = new Wc(l, Kc(e, n), o)));
}),
  (ic.dragend = (e) => {
    let t = e.dragging;
    window.setTimeout(() => {
      e.dragging == t && (e.dragging = null);
    }, 50);
  }),
  (ac.dragover = ac.dragenter = (e, t) => t.preventDefault()),
  (ac.drop = (e, t) => {
    try {
      qc(e, t, e.dragging);
    } finally {
      e.dragging = null;
    }
  }));
function qc(e, t, n) {
  if (!t.dataTransfer) return;
  let r = e.posAtCoords(hc(t));
  if (!r) return;
  let i = e.state.doc.resolve(r.pos),
    a = n && n.slice;
  a
    ? e.someProp(`transformPasted`, (t) => {
        a = t(a, e, !1);
      })
    : (a = Us(e, Uc(t.dataTransfer), zc ? null : t.dataTransfer.getData(`text/html`), !1, i));
  let o = !!(n && Kc(e, t));
  if (e.someProp(`handleDrop`, (n) => n(e, t, a || I.empty, o))) {
    t.preventDefault();
    return;
  }
  if (!a) return;
  t.preventDefault();
  let s = a ? Lr(e.state.doc, i.pos, a) : i.pos;
  s ??= i.pos;
  let c = e.state.tr;
  if (o) {
    let { node: e } = n;
    e ? e.replace(c) : c.deleteSelection();
  }
  let l = c.mapping.map(s),
    u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1,
    d = c.doc;
  if ((u ? c.replaceRangeWith(l, l, a.content.firstChild) : c.replaceRange(l, l, a), c.doc.eq(d)))
    return;
  let f = c.doc.resolve(l);
  if (
    u &&
    z.isSelectable(a.content.firstChild) &&
    f.nodeAfter &&
    f.nodeAfter.sameMarkup(a.content.firstChild)
  )
    c.setSelection(new z(f));
  else {
    let t = c.mapping.map(s);
    (c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => (t = i)),
      c.setSelection(ys(e, f, c.doc.resolve(t))));
  }
  (e.focus(), e.dispatch(c.setMeta(`uiEvent`, `drop`)));
}
((ic.focus = (e) => {
  ((e.input.lastFocus = Date.now()),
    e.focused ||
      (e.domObserver.stop(),
      e.dom.classList.add(`ProseMirror-focused`),
      e.domObserver.start(),
      (e.focused = !0),
      setTimeout(() => {
        e.docView &&
          e.hasFocus() &&
          !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
          us(e);
      }, 20)));
}),
  (ic.blur = (e, t) => {
    let n = t;
    e.focused &&=
      (e.domObserver.stop(),
      e.dom.classList.remove(`ProseMirror-focused`),
      e.domObserver.start(),
      n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(),
      !1);
  }),
  (ic.beforeinput = (e, t) => {
    if (Xa && t.inputType == `deleteContentBackward`) {
      e.domObserver.flushSoon();
      let { domChangeCount: t } = e.input;
      setTimeout(() => {
        if (
          e.input.domChangeCount != t ||
          (e.dom.blur(), e.focus(), e.someProp(`handleKeyDown`, (t) => t(e, ja(8, `Backspace`))))
        )
          return;
        let { $cursor: n } = e.state.selection;
        n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
      }, 50);
    }
  }));
for (let e in ac) ic[e] = ac[e];
function Jc(e, t) {
  if (e == t) return !0;
  for (let n in e) if (e[n] !== t[n]) return !1;
  for (let n in t) if (!(n in e)) return !1;
  return !0;
}
var Yc = class e {
    constructor(e, t) {
      ((this.toDOM = e), (this.spec = t || el), (this.side = this.spec.side || 0));
    }
    map(e, t, n, r) {
      let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
      return a ? null : new Qc(i - n, i - n, this);
    }
    valid() {
      return !0;
    }
    eq(t) {
      return (
        this == t ||
        (t instanceof e &&
          ((this.spec.key && this.spec.key == t.spec.key) ||
            (this.toDOM == t.toDOM && Jc(this.spec, t.spec))))
      );
    }
    destroy(e) {
      this.spec.destroy && this.spec.destroy(e);
    }
  },
  Xc = class e {
    constructor(e, t) {
      ((this.attrs = e), (this.spec = t || el));
    }
    map(e, t, n, r) {
      let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
        a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
      return i >= a ? null : new Qc(i, a, this);
    }
    valid(e, t) {
      return t.from < t.to;
    }
    eq(t) {
      return this == t || (t instanceof e && Jc(this.attrs, t.attrs) && Jc(this.spec, t.spec));
    }
    static is(t) {
      return t.type instanceof e;
    }
    destroy() {}
  },
  Zc = class e {
    constructor(e, t) {
      ((this.attrs = e), (this.spec = t || el));
    }
    map(e, t, n, r) {
      let i = e.mapResult(t.from + r, 1);
      if (i.deleted) return null;
      let a = e.mapResult(t.to + r, -1);
      return a.deleted || a.pos <= i.pos ? null : new Qc(i.pos - n, a.pos - n, this);
    }
    valid(e, t) {
      let { index: n, offset: r } = e.content.findIndex(t.from),
        i;
      return r == t.from && !(i = e.child(n)).isText && r + i.nodeSize == t.to;
    }
    eq(t) {
      return this == t || (t instanceof e && Jc(this.attrs, t.attrs) && Jc(this.spec, t.spec));
    }
    destroy() {}
  },
  Qc = class e {
    constructor(e, t, n) {
      ((this.from = e), (this.to = t), (this.type = n));
    }
    copy(t, n) {
      return new e(t, n, this.type);
    }
    eq(e, t = 0) {
      return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
    }
    map(e, t, n) {
      return this.type.map(e, this, t, n);
    }
    static widget(t, n, r) {
      return new e(t, t, new Yc(n, r));
    }
    static inline(t, n, r, i) {
      return new e(t, n, new Xc(r, i));
    }
    static node(t, n, r, i) {
      return new e(t, n, new Zc(r, i));
    }
    get spec() {
      return this.type.spec;
    }
    get inline() {
      return this.type instanceof Xc;
    }
    get widget() {
      return this.type instanceof Yc;
    }
  },
  $c = [],
  el = {},
  H = class e {
    constructor(e, t) {
      ((this.local = e.length ? e : $c), (this.children = t.length ? t : $c));
    }
    static create(e, t) {
      return t.length ? cl(t, e, 0, el) : tl;
    }
    find(e, t, n) {
      let r = [];
      return (this.findInner(e ?? 0, t ?? 1e9, r, 0, n), r);
    }
    findInner(e, t, n, r, i) {
      for (let a = 0; a < this.local.length; a++) {
        let o = this.local[a];
        o.from <= t && o.to >= e && (!i || i(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
      }
      for (let a = 0; a < this.children.length; a += 3)
        if (this.children[a] < t && this.children[a + 1] > e) {
          let o = this.children[a] + 1;
          this.children[a + 2].findInner(e - o, t - o, n, r + o, i);
        }
    }
    map(e, t, n) {
      return this == tl || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || el);
    }
    mapInner(t, n, r, i, a) {
      let o;
      for (let e = 0; e < this.local.length; e++) {
        let s = this.local[e].map(t, r, i);
        s && s.type.valid(n, s) ? (o ||= []).push(s) : a.onRemove && a.onRemove(this.local[e].spec);
      }
      return this.children.length
        ? rl(this.children, o || [], t, n, r, i, a)
        : o
          ? new e(o.sort(ll), $c)
          : tl;
    }
    add(t, n) {
      return n.length ? (this == tl ? e.create(t, n) : this.addInner(t, n, 0)) : this;
    }
    addInner(t, n, r) {
      let i,
        a = 0;
      t.forEach((e, t) => {
        let o = t + r,
          s;
        if ((s = ol(n, e, o))) {
          for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
          (i[a] == t
            ? (i[a + 2] = i[a + 2].addInner(e, s, o + 1))
            : i.splice(a, 0, t, t + e.nodeSize, cl(s, e, o + 1, el)),
            (a += 3));
        }
      });
      let o = il(a ? sl(n) : n, -r);
      for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || o.splice(e--, 1);
      return new e(o.length ? this.local.concat(o).sort(ll) : this.local, i || this.children);
    }
    remove(e) {
      return e.length == 0 || this == tl ? this : this.removeInner(e, 0);
    }
    removeInner(t, n) {
      let r = this.children,
        i = this.local;
      for (let e = 0; e < r.length; e += 3) {
        let i,
          a = r[e] + n,
          o = r[e + 1] + n;
        for (let e = 0, n; e < t.length; e++)
          (n = t[e]) && n.from > a && n.to < o && ((t[e] = null), (i ||= []).push(n));
        if (!i) continue;
        r == this.children && (r = this.children.slice());
        let s = r[e + 2].removeInner(i, a + 1);
        s == tl ? (r.splice(e, 3), (e -= 3)) : (r[e + 2] = s);
      }
      if (i.length) {
        for (let e = 0, r; e < t.length; e++)
          if ((r = t[e]))
            for (let e = 0; e < i.length; e++)
              i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
      }
      return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : tl;
    }
    forChild(t, n) {
      if (this == tl) return this;
      if (n.isLeaf) return e.empty;
      let r, i;
      for (let e = 0; e < this.children.length; e += 3)
        if (this.children[e] >= t) {
          this.children[e] == t && (r = this.children[e + 2]);
          break;
        }
      let a = t + 1,
        o = a + n.content.size;
      for (let e = 0; e < this.local.length; e++) {
        let t = this.local[e];
        if (t.from < o && t.to > a && t.type instanceof Xc) {
          let e = Math.max(a, t.from) - a,
            n = Math.min(o, t.to) - a;
          e < n && (i ||= []).push(t.copy(e, n));
        }
      }
      if (i) {
        let t = new e(i.sort(ll), $c);
        return r ? new nl([t, r]) : t;
      }
      return r || tl;
    }
    eq(t) {
      if (this == t) return !0;
      if (
        !(t instanceof e) ||
        this.local.length != t.local.length ||
        this.children.length != t.children.length
      )
        return !1;
      for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
      for (let e = 0; e < this.children.length; e += 3)
        if (
          this.children[e] != t.children[e] ||
          this.children[e + 1] != t.children[e + 1] ||
          !this.children[e + 2].eq(t.children[e + 2])
        )
          return !1;
      return !0;
    }
    locals(e) {
      return ul(this.localsInner(e));
    }
    localsInner(e) {
      if (this == tl) return $c;
      if (e.inlineContent || !this.local.some(Xc.is)) return this.local;
      let t = [];
      for (let e = 0; e < this.local.length; e++)
        this.local[e].type instanceof Xc || t.push(this.local[e]);
      return t;
    }
    forEachSet(e) {
      e(this);
    }
  };
((H.empty = new H([], [])), (H.removeOverlap = ul));
var tl = H.empty,
  nl = class e {
    constructor(e) {
      this.members = e;
    }
    map(t, n) {
      let r = this.members.map((e) => e.map(t, n, el));
      return e.from(r);
    }
    forChild(t, n) {
      if (n.isLeaf) return H.empty;
      let r = [];
      for (let i = 0; i < this.members.length; i++) {
        let a = this.members[i].forChild(t, n);
        a != tl && (a instanceof e ? (r = r.concat(a.members)) : r.push(a));
      }
      return e.from(r);
    }
    eq(t) {
      if (!(t instanceof e) || t.members.length != this.members.length) return !1;
      for (let e = 0; e < this.members.length; e++)
        if (!this.members[e].eq(t.members[e])) return !1;
      return !0;
    }
    locals(e) {
      let t,
        n = !0;
      for (let r = 0; r < this.members.length; r++) {
        let i = this.members[r].localsInner(e);
        if (i.length) {
          if (!t) t = i;
          else {
            n &&= ((t = t.slice()), !1);
            for (let e = 0; e < i.length; e++) t.push(i[e]);
          }
        }
      }
      return t ? ul(n ? t : t.sort(ll)) : $c;
    }
    static from(t) {
      switch (t.length) {
        case 0:
          return tl;
        case 1:
          return t[0];
        default:
          return new e(
            t.every((e) => e instanceof H)
              ? t
              : t.reduce((e, t) => e.concat(t instanceof H ? t : t.members), []),
          );
      }
    }
    forEachSet(e) {
      for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
    }
  };
function rl(e, t, n, r, i, a, o) {
  let s = e.slice();
  for (let e = 0, t = a; e < n.maps.length; e++) {
    let r = 0;
    (n.maps[e].forEach((e, n, i, a) => {
      let o = a - i - (n - e);
      for (let i = 0; i < s.length; i += 3) {
        let a = s[i + 1];
        if (a < 0 || e > a + t - r) continue;
        let c = s[i] + t - r;
        n >= c ? (s[i + 1] = e <= c ? -2 : -1) : e >= t && o && ((s[i] += o), (s[i + 1] += o));
      }
      r += o;
    }),
      (t = n.maps[e].map(t, -1)));
  }
  let c = !1;
  for (let t = 0; t < s.length; t += 3)
    if (s[t + 1] < 0) {
      if (s[t + 1] == -2) {
        ((c = !0), (s[t + 1] = -1));
        continue;
      }
      let l = n.map(e[t] + a),
        u = l - i;
      if (u < 0 || u >= r.content.size) {
        c = !0;
        continue;
      }
      let d = n.map(e[t + 1] + a, -1) - i,
        { index: f, offset: p } = r.content.findIndex(u),
        m = r.maybeChild(f);
      if (m && p == u && p + m.nodeSize == d) {
        let r = s[t + 2].mapInner(n, m, l + 1, e[t] + a + 1, o);
        r == tl ? ((s[t + 1] = -2), (c = !0)) : ((s[t] = u), (s[t + 1] = d), (s[t + 2] = r));
      } else c = !0;
    }
  if (c) {
    let c = cl(al(s, e, t, n, i, a, o), r, 0, o);
    t = c.local;
    for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), (e -= 3));
    for (let e = 0, t = 0; e < c.children.length; e += 3) {
      let n = c.children[e];
      for (; t < s.length && s[t] < n;) t += 3;
      s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
    }
  }
  return new H(t.sort(ll), s);
}
function il(e, t) {
  if (!t || !e.length) return e;
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    n.push(new Qc(i.from + t, i.to + t, i.type));
  }
  return n;
}
function al(e, t, n, r, i, a, o) {
  function s(e, t) {
    for (let a = 0; a < e.local.length; a++) {
      let s = e.local[a].map(r, i, t);
      s ? n.push(s) : o.onRemove && o.onRemove(e.local[a].spec);
    }
    for (let n = 0; n < e.children.length; n += 3) s(e.children[n + 2], e.children[n] + t + 1);
  }
  for (let n = 0; n < e.length; n += 3) e[n + 1] == -1 && s(e[n + 2], t[n] + a + 1);
  return n;
}
function ol(e, t, n) {
  if (t.isLeaf) return null;
  let r = n + t.nodeSize,
    i = null;
  for (let t = 0, a; t < e.length; t++)
    (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), (e[t] = null));
  return i;
}
function sl(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
  return t;
}
function cl(e, t, n, r) {
  let i = [],
    a = !1;
  t.forEach((t, o) => {
    let s = ol(e, t, o + n);
    if (s) {
      a = !0;
      let e = cl(s, t, n + o + 1, r);
      e != tl && i.push(o, o + t.nodeSize, e);
    }
  });
  let o = il(a ? sl(e) : e, -n).sort(ll);
  for (let e = 0; e < o.length; e++)
    o[e].type.valid(t, o[e]) || (r.onRemove && r.onRemove(o[e].spec), o.splice(e--, 1));
  return o.length || i.length ? new H(o, i) : tl;
}
function ll(e, t) {
  return e.from - t.from || e.to - t.to;
}
function ul(e) {
  let t = e;
  for (let n = 0; n < t.length - 1; n++) {
    let r = t[n];
    if (r.from != r.to)
      for (let i = n + 1; i < t.length; i++) {
        let a = t[i];
        if (a.from == r.from)
          a.to != r.to &&
            (t == e && (t = e.slice()),
            (t[i] = a.copy(a.from, r.to)),
            dl(t, i + 1, a.copy(r.to, a.to)));
        else {
          a.from < r.to &&
            (t == e && (t = e.slice()),
            (t[n] = r.copy(r.from, a.from)),
            dl(t, i, r.copy(a.from, r.to)));
          break;
        }
      }
  }
  return t;
}
function dl(e, t, n) {
  for (; t < e.length && ll(n, e[t]) > 0;) t++;
  e.splice(t, 0, n);
}
function fl(e) {
  let t = [];
  return (
    e.someProp(`decorations`, (n) => {
      let r = n(e.state);
      r && r != tl && t.push(r);
    }),
    e.cursorWrapper && t.push(H.create(e.state.doc, [e.cursorWrapper.deco])),
    nl.from(t)
  );
}
var pl = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0,
  },
  ml = Ba && Va <= 11,
  hl = class {
    constructor() {
      ((this.anchorNode = null),
        (this.anchorOffset = 0),
        (this.focusNode = null),
        (this.focusOffset = 0));
    }
    set(e) {
      ((this.anchorNode = e.anchorNode),
        (this.anchorOffset = e.anchorOffset),
        (this.focusNode = e.focusNode),
        (this.focusOffset = e.focusOffset));
    }
    clear() {
      this.anchorNode = this.focusNode = null;
    }
    eq(e) {
      return (
        e.anchorNode == this.anchorNode &&
        e.anchorOffset == this.anchorOffset &&
        e.focusNode == this.focusNode &&
        e.focusOffset == this.focusOffset
      );
    }
  },
  gl = class {
    constructor(e, t) {
      ((this.view = e),
        (this.handleDOMChange = t),
        (this.queue = []),
        (this.flushingSoon = -1),
        (this.observer = null),
        (this.currentSelection = new hl()),
        (this.onCharData = null),
        (this.suppressingSelectionUpdates = !1),
        (this.lastChangedTextNode = null),
        (this.observer =
          window.MutationObserver &&
          new window.MutationObserver((t) => {
            for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
            Ba &&
            Va <= 11 &&
            t.some(
              (e) =>
                (e.type == `childList` && e.removedNodes.length) ||
                (e.type == `characterData` && e.oldValue.length > e.target.nodeValue.length),
            )
              ? this.flushSoon()
              : Ka &&
                  e.composing &&
                  t.some((e) => e.type == `childList` && e.target.nodeName == `TR`)
                ? ((e.input.badSafariComposition = !0), this.flushSoon())
                : this.flush();
          })),
        ml &&
          (this.onCharData = (e) => {
            (this.queue.push({ target: e.target, type: `characterData`, oldValue: e.prevValue }),
              this.flushSoon());
          }),
        (this.onSelectionChange = this.onSelectionChange.bind(this)));
    }
    flushSoon() {
      this.flushingSoon < 0 &&
        (this.flushingSoon = window.setTimeout(() => {
          ((this.flushingSoon = -1), this.flush());
        }, 20));
    }
    forceFlush() {
      this.flushingSoon > -1 &&
        (window.clearTimeout(this.flushingSoon), (this.flushingSoon = -1), this.flush());
    }
    start() {
      (this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, pl)),
        this.onCharData &&
          this.view.dom.addEventListener(`DOMCharacterDataModified`, this.onCharData),
        this.connectSelection());
    }
    stop() {
      if (this.observer) {
        let e = this.observer.takeRecords();
        if (e.length) {
          for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
          window.setTimeout(() => this.flush(), 20);
        }
        this.observer.disconnect();
      }
      (this.onCharData &&
        this.view.dom.removeEventListener(`DOMCharacterDataModified`, this.onCharData),
        this.disconnectSelection());
    }
    connectSelection() {
      this.view.dom.ownerDocument.addEventListener(`selectionchange`, this.onSelectionChange);
    }
    disconnectSelection() {
      this.view.dom.ownerDocument.removeEventListener(`selectionchange`, this.onSelectionChange);
    }
    suppressSelectionUpdates() {
      ((this.suppressingSelectionUpdates = !0),
        setTimeout(() => (this.suppressingSelectionUpdates = !1), 50));
    }
    onSelectionChange() {
      if (bs(this.view)) {
        if (this.suppressingSelectionUpdates) return us(this.view);
        if (Ba && Va <= 11 && !this.view.state.selection.empty) {
          let e = this.view.domSelectionRange();
          if (e.focusNode && Sa(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
            return this.flushSoon();
        }
        this.flush();
      }
    }
    setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(e) {
      if (!e.focusNode) return !0;
      let t = new Set(),
        n;
      for (let n = e.focusNode; n; n = va(n)) t.add(n);
      for (let r = e.anchorNode; r; r = va(r))
        if (t.has(r)) {
          n = r;
          break;
        }
      let r = n && this.view.docView.nearestDesc(n);
      if (r && r.ignoreMutation({ type: `selection`, target: n.nodeType == 3 ? n.parentNode : n }))
        return (this.setCurSelection(), !0);
    }
    pendingRecords() {
      if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
      return this.queue;
    }
    flush() {
      let { view: e } = this;
      if (!e.docView || this.flushingSoon > -1) return;
      let t = this.pendingRecords();
      t.length && (this.queue = []);
      let n = e.domSelectionRange(),
        r =
          !this.suppressingSelectionUpdates &&
          !this.currentSelection.eq(n) &&
          bs(e) &&
          !this.ignoreSelectionChange(n),
        i = -1,
        a = -1,
        o = !1,
        s = [];
      if (e.editable)
        for (let e = 0; e < t.length; e++) {
          let n = this.registerMutation(t[e], s);
          n &&
            ((i = i < 0 ? n.from : Math.min(n.from, i)),
            (a = a < 0 ? n.to : Math.max(n.to, a)),
            n.typeOver && (o = !0));
        }
      if (
        s.some((e) => e.nodeName == `BR`) &&
        (e.input.lastKeyCode == 8 ||
          e.input.lastKeyCode == 46 ||
          (Wa &&
            (e.composing || e.input.compositionEndedAt > Date.now() - 50) &&
            t.some((e) => e.type == `childList` && e.removedNodes.length)))
      ) {
        for (let e of s)
          if (e.nodeName == `BR` && e.parentNode) {
            let t = e.nextSibling;
            for (; t && t.nodeType == 1;) {
              if (t.contentEditable == `false`) {
                e.parentNode.removeChild(e);
                break;
              }
              t = t.firstChild;
            }
          }
      } else if (Ha && s.length) {
        let t = s.filter((e) => e.nodeName == `BR`);
        if (t.length == 2) {
          let [e, n] = t;
          e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
        } else {
          let { focusNode: n } = this.currentSelection;
          for (let r of t) {
            let t = r.parentNode;
            t && t.nodeName == `LI` && (!n || Sl(e, n) != t) && r.remove();
          }
        }
      }
      let c = null;
      i < 0 &&
      r &&
      e.input.lastFocus > Date.now() - 200 &&
      Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 &&
      Aa(n) &&
      (c = cs(e)) &&
      c.eq(L.near(e.state.doc.resolve(0), 1))
        ? ((e.input.lastFocus = 0), us(e), this.currentSelection.set(n), e.scrollToSelection())
        : (i > -1 || r) &&
          (i > -1 && (e.docView.markDirty(i, a), yl(e)),
          e.input.badSafariComposition && ((e.input.badSafariComposition = !1), Cl(e, s)),
          this.handleDOMChange(i, a, o, s),
          e.docView && e.docView.dirty
            ? e.updateState(e.state)
            : this.currentSelection.eq(n) || us(e),
          this.currentSelection.set(n));
    }
    registerMutation(e, t) {
      if (t.indexOf(e.target) > -1) return null;
      let n = this.view.docView.nearestDesc(e.target);
      if (
        (e.type == `attributes` &&
          (n == this.view.docView ||
            e.attributeName == `contenteditable` ||
            (e.attributeName == `style` && !e.oldValue && !e.target.getAttribute(`style`)))) ||
        !n ||
        n.ignoreMutation(e)
      )
        return null;
      if (e.type == `childList`) {
        for (let n = 0; n < e.addedNodes.length; n++) {
          let r = e.addedNodes[n];
          (t.push(r), r.nodeType == 3 && (this.lastChangedTextNode = r));
        }
        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target))
          return { from: n.posBefore, to: n.posAfter };
        let r = e.previousSibling,
          i = e.nextSibling;
        if (Ba && Va <= 11 && e.addedNodes.length)
          for (let t = 0; t < e.addedNodes.length; t++) {
            let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
            ((!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n),
              (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a));
          }
        let a = r && r.parentNode == e.target ? _a(r) + 1 : 0,
          o = n.localPosFromDOM(e.target, a, -1),
          s = i && i.parentNode == e.target ? _a(i) : e.target.childNodes.length;
        return { from: o, to: n.localPosFromDOM(e.target, s, 1) };
      }
      return e.type == `attributes`
        ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
        : ((this.lastChangedTextNode = e.target),
          { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue });
    }
  },
  _l = new WeakMap(),
  vl = !1;
function yl(e) {
  if (
    !_l.has(e) &&
    (_l.set(e, null),
    [`normal`, `nowrap`, `pre-line`].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)
  ) {
    if (((e.requiresGeckoHackNode = Ha), vl)) return;
    (console.warn(
      `ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.`,
    ),
      (vl = !0));
  }
}
function bl(e, t) {
  let n = t.startContainer,
    r = t.startOffset,
    i = t.endContainer,
    a = t.endOffset,
    o = e.domAtPos(e.state.selection.anchor);
  return (
    Sa(o.node, o.offset, i, a) && ([n, r, i, a] = [i, a, n, r]),
    { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: a }
  );
}
function xl(e, t) {
  if (t.getComposedRanges) {
    let n = t.getComposedRanges(e.root)[0];
    if (n) return bl(e, n);
  }
  let n;
  function r(e) {
    (e.preventDefault(), e.stopImmediatePropagation(), (n = e.getTargetRanges()[0]));
  }
  return (
    e.dom.addEventListener(`beforeinput`, r, !0),
    document.execCommand(`indent`),
    e.dom.removeEventListener(`beforeinput`, r, !0),
    n ? bl(e, n) : null
  );
}
function Sl(e, t) {
  for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
    let t = e.docView.nearestDesc(n, !0);
    if (t && t.node.isBlock) return n;
  }
  return null;
}
function Cl(e, t) {
  let { focusNode: n, focusOffset: r } = e.domSelectionRange();
  for (let i of t)
    if (i.parentNode?.nodeName == `TR`) {
      let t = i.nextSibling;
      for (; t && t.nodeName != `TD` && t.nodeName != `TH`;) t = t.nextSibling;
      if (t) {
        let a = t;
        for (;;) {
          let e = a.firstChild;
          if (
            !e ||
            e.nodeType != 1 ||
            e.contentEditable == `false` ||
            /^(BR|IMG)$/.test(e.nodeName)
          )
            break;
          a = e;
        }
        (a.insertBefore(i, a.firstChild), n == i && e.domSelection().collapse(i, r));
      } else i.parentNode.removeChild(i);
    }
}
function wl(e, t, n, r) {
  let { node: i, fromOffset: a, toOffset: o, from: s, to: c } = e.docView.parseRange(t, n),
    l = e.domSelectionRange(),
    u,
    d = l.anchorNode;
  if (
    (d &&
      e.dom.contains(d.nodeType == 1 ? d : d.parentNode) &&
      ((u = [{ node: d, offset: l.anchorOffset }]),
      Aa(l) || u.push({ node: l.focusNode, offset: l.focusOffset })),
    Wa && e.input.lastKeyCode === 8)
  )
    for (let e = o; e > a; e--) {
      let t = i.childNodes[e - 1],
        n = t.pmViewDesc;
      if (t.nodeName == `BR` && !n) {
        o = e;
        break;
      }
      if (!n || n.size) break;
    }
  let f = e.state.doc,
    p = e.someProp(`domParser`) || Cn.fromSchema(e.state.schema),
    m = f.resolve(s),
    h = null,
    g = p.parse(i, {
      topNode: m.parent,
      topMatch: m.parent.contentMatchAt(m.index()),
      topOpen: !0,
      from: a,
      to: o,
      preserveWhitespace: m.parent.type.whitespace != `pre` || `full`,
      findPositions: u,
      ruleFromNode: Tl(r),
      context: m,
    });
  if (u && u[0].pos != null) {
    let e = u[0].pos,
      t = u[1] && u[1].pos;
    ((t ??= e), (h = { anchor: e + s, head: t + s }));
  }
  return { doc: g, sel: h, from: s, to: c };
}
var Tl = (e) => (t) => {
    let n = t.pmViewDesc;
    if (n) return n.parseRule(e);
    if (t.nodeName == `BR` && t.parentNode) {
      if (Ka && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
        let e = document.createElement(`div`);
        return (e.appendChild(document.createElement(`li`)), { skip: e });
      }
      if (t.parentNode.lastChild == t || (Ka && /^(tr|table)$/i.test(t.parentNode.nodeName)))
        return { ignore: !0 };
    } else if (t.nodeName == `IMG` && t.getAttribute(`mark-placeholder`)) return { ignore: !0 };
    return null;
  },
  El =
    /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Dl(e, t, n, r, i) {
  let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
  if (((e.input.compositionPendingChanges = 0), t < 0)) {
    let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
      n = cs(e, t);
    if (n && !e.state.selection.eq(n)) {
      if (
        Wa &&
        Xa &&
        e.input.lastKeyCode === 13 &&
        Date.now() - 100 < e.input.lastKeyCodeTime &&
        e.someProp(`handleKeyDown`, (t) => t(e, ja(13, `Enter`)))
      )
        return;
      let r = e.state.tr.setSelection(n);
      (t == `pointer` ? r.setMeta(`pointer`, !0) : t == `key` && r.scrollIntoView(),
        a && r.setMeta(`composition`, a),
        e.dispatch(r));
    }
    return;
  }
  let o = e.state.doc.resolve(t),
    s = o.sharedDepth(n);
  ((t = o.before(s + 1)), (n = e.state.doc.resolve(n).after(s + 1)));
  let c = e.state.selection,
    l = wl(e, t, n, i),
    u = e.state.doc,
    d = u.slice(l.from, l.to),
    f,
    p;
  (e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime
    ? ((f = e.state.selection.to), (p = `end`))
    : ((f = e.state.selection.from), (p = `start`)),
    (e.input.lastKeyCode = null));
  let m = Ml(d.content, l.doc.content, l.from, f, p);
  if (
    (m && e.input.domChangeCount++,
    ((qa && e.input.lastIOSEnter > Date.now() - 225) || Xa) &&
      i.some((e) => e.nodeType == 1 && !El.test(e.nodeName)) &&
      (!m || m.endA >= m.endB) &&
      e.someProp(`handleKeyDown`, (t) => t(e, ja(13, `Enter`))))
  ) {
    e.input.lastIOSEnter = 0;
    return;
  }
  if (!m) {
    if (
      r &&
      c instanceof R &&
      !c.empty &&
      c.$head.sameParent(c.$anchor) &&
      !e.composing &&
      !(l.sel && l.sel.anchor != l.sel.head)
    )
      m = { start: c.from, endA: c.to, endB: c.to };
    else {
      if (l.sel) {
        let t = Ol(e, e.state.doc, l.sel);
        if (t && !t.eq(e.state.selection)) {
          let n = e.state.tr.setSelection(t);
          (a && n.setMeta(`composition`, a), e.dispatch(n));
        }
      }
      return;
    }
  }
  (e.state.selection.from < e.state.selection.to &&
    m.start == m.endB &&
    e.state.selection instanceof R &&
    (m.start > e.state.selection.from &&
    m.start <= e.state.selection.from + 2 &&
    e.state.selection.from >= l.from
      ? (m.start = e.state.selection.from)
      : m.endA < e.state.selection.to &&
        m.endA >= e.state.selection.to - 2 &&
        e.state.selection.to <= l.to &&
        ((m.endB += e.state.selection.to - m.endA), (m.endA = e.state.selection.to))),
    Ba &&
      Va <= 11 &&
      m.endB == m.start + 1 &&
      m.endA == m.start &&
      m.start > l.from &&
      l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == ` \xA0` &&
      (m.start--, m.endA--, m.endB--));
  let h = l.doc.resolveNoCache(m.start - l.from),
    g = l.doc.resolveNoCache(m.endB - l.from),
    _ = u.resolve(m.start),
    v = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
  if (
    ((qa &&
      e.input.lastIOSEnter > Date.now() - 225 &&
      (!v || i.some((e) => e.nodeName == `DIV` || e.nodeName == `P`))) ||
      (!v &&
        h.pos < l.doc.content.size &&
        (!h.sameParent(g) || !h.parent.inlineContent) &&
        h.pos < g.pos &&
        !/\S/.test(l.doc.textBetween(h.pos, g.pos, ``, ``)))) &&
    e.someProp(`handleKeyDown`, (t) => t(e, ja(13, `Enter`)))
  ) {
    e.input.lastIOSEnter = 0;
    return;
  }
  if (
    e.state.selection.anchor > m.start &&
    Al(u, m.start, m.endA, h, g) &&
    e.someProp(`handleKeyDown`, (t) => t(e, ja(8, `Backspace`)))
  ) {
    Xa && Wa && e.domObserver.suppressSelectionUpdates();
    return;
  }
  (Wa && m.endB == m.start && (e.input.lastChromeDelete = Date.now()),
    Xa &&
      !v &&
      h.start() != g.start() &&
      g.parentOffset == 0 &&
      h.depth == g.depth &&
      l.sel &&
      l.sel.anchor == l.sel.head &&
      l.sel.head == m.endA &&
      ((m.endB -= 2),
      (g = l.doc.resolveNoCache(m.endB - l.from)),
      setTimeout(() => {
        e.someProp(`handleKeyDown`, function (t) {
          return t(e, ja(13, `Enter`));
        });
      }, 20)));
  let y = m.start,
    b = m.endA,
    x = (t) => {
      let n = t || e.state.tr.replace(y, b, l.doc.slice(m.start - l.from, m.endB - l.from));
      if (l.sel) {
        let t = Ol(e, n.doc, l.sel);
        t &&
          !(
            (Wa &&
              e.composing &&
              t.empty &&
              (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) &&
              (t.head == y || t.head == n.mapping.map(b) - 1)) ||
            (Ba && t.empty && t.head == y)
          ) &&
          n.setSelection(t);
      }
      return (a && n.setMeta(`composition`, a), n.scrollIntoView());
    },
    S;
  if (v) {
    if (h.pos == g.pos) {
      Ba &&
        Va <= 11 &&
        h.parentOffset == 0 &&
        (e.domObserver.suppressSelectionUpdates(), setTimeout(() => us(e), 20));
      let t = x(e.state.tr.delete(y, b)),
        n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
      (n && t.ensureMarks(n), e.dispatch(t));
    } else if (
      m.endA == m.endB &&
      (S = kl(
        h.parent.content.cut(h.parentOffset, g.parentOffset),
        _.parent.content.cut(_.parentOffset, m.endA - _.start()),
      ))
    ) {
      let t = x(e.state.tr);
      (S.type == `add` ? t.addMark(y, b, S.mark) : t.removeMark(y, b, S.mark), e.dispatch(t));
    } else if (h.parent.child(h.index()).isText && h.index() == g.index() - +!g.textOffset) {
      let t = h.parent.textBetween(h.parentOffset, g.parentOffset),
        n = () => x(e.state.tr.insertText(t, y, b));
      e.someProp(`handleTextInput`, (r) => r(e, y, b, t, n)) || e.dispatch(n());
    } else e.dispatch(x());
  } else e.dispatch(x());
}
function Ol(e, t, n) {
  return Math.max(n.anchor, n.head) > t.content.size
    ? null
    : ys(e, t.resolve(n.anchor), t.resolve(n.head));
}
function kl(e, t) {
  let n = e.firstChild.marks,
    r = t.firstChild.marks,
    i = n,
    a = r,
    o,
    s,
    c;
  for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
  for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
  if (i.length == 1 && a.length == 0)
    ((s = i[0]), (o = `add`), (c = (e) => e.mark(s.addToSet(e.marks))));
  else if (i.length == 0 && a.length == 1)
    ((s = a[0]), (o = `remove`), (c = (e) => e.mark(s.removeFromSet(e.marks))));
  else return null;
  let l = [];
  for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
  if (P.from(l).eq(e)) return { mark: s, type: o };
}
function Al(e, t, n, r, i) {
  if (n - t <= i.pos - r.pos || jl(r, !0, !1) < i.pos) return !1;
  let a = e.resolve(t);
  if (!r.parent.isTextblock) {
    let e = a.nodeAfter;
    return e != null && n == t + e.nodeSize;
  }
  if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
  let o = e.resolve(jl(a, !0, !0));
  return !o.parent.isTextblock || o.pos > n || jl(o, !0, !1) < n
    ? !1
    : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function jl(e, t, n) {
  let r = e.depth,
    i = t ? e.end() : e.pos;
  for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) (r--, i++, (t = !1));
  if (n) {
    let t = e.node(r).maybeChild(e.indexAfter(r));
    for (; t && !t.isLeaf;) ((t = t.firstChild), i++);
  }
  return i;
}
function Ml(e, t, n, r, i) {
  let a = e.findDiffStart(t, n),
    o = n + e.size,
    s = n + t.size;
  if (a == null) return null;
  let { a: c, b: l } = e.findDiffEnd(t, o, s);
  if (i == `end`) {
    let e = Math.max(0, a - Math.min(c, l));
    r -= c + e - a;
  }
  if (c < a && o < s) {
    let e = r <= a && r >= c ? a - r : 0;
    ((a -= e), (l = a + (l - c)), (c = a));
  } else if (l < a) {
    let e = r <= a && r >= l ? a - r : 0;
    ((a -= e), (c = a + (c - l)), (l = a));
  }
  return { start: a, endA: c, endB: l };
}
var Nl = class {
  constructor(e, t) {
    ((this._root = null),
      (this.focused = !1),
      (this.trackWrites = null),
      (this.mounted = !1),
      (this.markCursor = null),
      (this.cursorWrapper = null),
      (this.lastSelectedViewDesc = void 0),
      (this.input = new sc()),
      (this.prevDirectPlugins = []),
      (this.pluginViews = []),
      (this.requiresGeckoHackNode = !1),
      (this.dragging = null),
      (this._props = t),
      (this.state = t.state),
      (this.directPlugins = t.plugins || []),
      this.directPlugins.forEach(Bl),
      (this.dispatch = this.dispatch.bind(this)),
      (this.dom = (e && e.mount) || document.createElement(`div`)),
      e &&
        (e.appendChild
          ? e.appendChild(this.dom)
          : typeof e == `function`
            ? e(this.dom)
            : e.mount && (this.mounted = !0)),
      (this.editable = Il(this)),
      Fl(this),
      (this.nodeViews = Rl(this)),
      (this.docView = Vo(this.state.doc, Pl(this), fl(this), this.dom, this)),
      (this.domObserver = new gl(this, (e, t, n, r) => Dl(this, e, t, n, r))),
      this.domObserver.start(),
      cc(this),
      this.updatePluginViews());
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e) this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && dc(this);
    let t = this._props;
    ((this._props = e),
      e.plugins && (e.plugins.forEach(Bl), (this.directPlugins = e.plugins)),
      this.updateStateInner(e.state, t));
  }
  setProps(e) {
    let t = {};
    for (let e in this._props) t[e] = this._props[e];
    t.state = this.state;
    for (let n in e) t[n] = e[n];
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let n = this.state,
      r = !1,
      i = !1;
    (e.storedMarks && this.composing && (Fc(this), (i = !0)), (this.state = e));
    let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
    if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let e = Rl(this);
      zl(e, this.nodeViews) && ((this.nodeViews = e), (r = !0));
    }
    ((a || t.handleDOMEvents != this._props.handleDOMEvents) && dc(this),
      (this.editable = Il(this)),
      Fl(this));
    let o = fl(this),
      s = Pl(this),
      c =
        n.plugins != e.plugins && !n.doc.eq(e.doc)
          ? `reset`
          : e.scrollToSelection > n.scrollToSelection
            ? `to selection`
            : `preserve`,
      l = r || !this.docView.matchesNode(e.doc, s, o);
    (l || !e.selection.eq(n.selection)) && (i = !0);
    let u = c == `preserve` && i && this.dom.style.overflowAnchor == null && ro(this);
    if (i) {
      this.domObserver.stop();
      let t =
        l &&
        (Ba || Wa) &&
        !this.composing &&
        !n.selection.empty &&
        !e.selection.empty &&
        Ll(n.selection, e.selection);
      if (l) {
        let n = Wa ? (this.trackWrites = this.domSelectionRange().focusNode) : null;
        (this.composing && (this.input.compositionNode = Ic(this)),
          (r || !this.docView.update(e.doc, s, o, this)) &&
            (this.docView.updateOuterDeco(s),
            this.docView.destroy(),
            (this.docView = Vo(e.doc, s, o, this.dom, this))),
          !n || (this.trackWrites && this.dom.contains(this.trackWrites)) || (t = !0));
      }
      let i = this.input.mouseDown;
      (t ||
      !(
        i &&
        this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
        Ss(this) &&
        i.delaySelUpdate()
      )
        ? us(this, t)
        : (_s(this, e.selection), this.domObserver.setCurSelection()),
        this.domObserver.start());
    }
    (this.updatePluginViews(n),
      this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n),
      c == `reset`
        ? (this.dom.scrollTop = 0)
        : c == `to selection`
          ? this.scrollToSelection()
          : u && ao(u));
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (
      e &&
      this.dom.contains(e.nodeType == 1 ? e : e.parentNode) &&
      !this.someProp(`handleScrollToSelection`, (e) => e(this))
    ) {
      if (this.state.selection instanceof z) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && no(this, t.getBoundingClientRect(), e);
      } else no(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; (e = this.pluginViews.pop());) e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      ((this.prevDirectPlugins = this.directPlugins), this.destroyPluginViews());
      for (let e = 0; e < this.directPlugins.length; e++) {
        let t = this.directPlugins[e];
        t.spec.view && this.pluginViews.push(t.spec.view(this));
      }
      for (let e = 0; e < this.state.plugins.length; e++) {
        let t = this.state.plugins[e];
        t.spec.view && this.pluginViews.push(t.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let n = this.pluginViews[t];
        n.update && n.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let n = e.node,
      r = -1;
    if (n.from < this.state.doc.content.size && this.state.doc.nodeAt(n.from) == n.node) r = n.from;
    else {
      let e = n.from + (this.state.doc.content.size - t.doc.content.size);
      (e > 0 && e < this.state.doc.content.size && this.state.doc.nodeAt(e)) == n.node && (r = e);
    }
    this.dragging = new Wc(e.slice, e.move, r < 0 ? void 0 : z.create(this.state.doc, r));
  }
  someProp(e, t) {
    let n = this._props && this._props[e],
      r;
    if (n != null && (r = t ? t(n) : n)) return r;
    for (let n = 0; n < this.directPlugins.length; n++) {
      let i = this.directPlugins[n].props[e];
      if (i != null && (r = t ? t(i) : i)) return r;
    }
    let i = this.state.plugins;
    if (i)
      for (let n = 0; n < i.length; n++) {
        let a = i[n].props[e];
        if (a != null && (r = t ? t(a) : a)) return r;
      }
  }
  hasFocus() {
    if (Ba) {
      let e = this.root.activeElement;
      if (e == this.dom) return !0;
      if (!e || !this.dom.contains(e)) return !1;
      for (; e && this.dom != e && this.dom.contains(e);) {
        if (e.contentEditable == `false`) return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    (this.domObserver.stop(), this.editable && co(this.dom), us(this), this.domObserver.start());
  }
  get root() {
    let e = this._root;
    if (e == null) {
      for (let e = this.dom.parentNode; e; e = e.parentNode)
        if (e.nodeType == 9 || (e.nodeType == 11 && e.host))
          return (
            e.getSelection ||
              (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()),
            (this._root = e)
          );
    }
    return e || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return _o(this, e);
  }
  coordsAtPos(e, t = 1) {
    return xo(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  posAtDOM(e, t, n = -1) {
    let r = this.docView.posFromDOM(e, t, n);
    if (r == null) throw RangeError(`DOM position not inside the editor`);
    return r;
  }
  endOfTextblock(e, t) {
    return jo(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return Hc(this, ``, e, !1, t || new ClipboardEvent(`paste`));
  }
  pasteText(e, t) {
    return Hc(this, e, null, !0, t || new ClipboardEvent(`paste`));
  }
  serializeForClipboard(e) {
    return Hs(this, e);
  }
  destroy() {
    this.docView &&
      (uc(this),
      this.destroyPluginViews(),
      this.mounted
        ? (this.docView.update(this.state.doc, [], fl(this), this), (this.dom.textContent = ``))
        : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
      this.docView.destroy(),
      (this.docView = null),
      xa());
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return mc(this, e);
  }
  domSelectionRange() {
    let e = this.domSelection();
    return e
      ? (Ka &&
          this.root.nodeType === 11 &&
          Ma(this.dom.ownerDocument) == this.dom &&
          xl(this, e)) ||
          e
      : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  domSelection() {
    return this.root.getSelection();
  }
};
Nl.prototype.dispatch = function (e) {
  let t = this._props.dispatchTransaction;
  t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function Pl(e) {
  let t = Object.create(null);
  return (
    (t.class = `ProseMirror`),
    (t.contenteditable = String(e.editable)),
    e.someProp(`attributes`, (n) => {
      if ((typeof n == `function` && (n = n(e.state)), n))
        for (let e in n)
          e == `class`
            ? (t.class += ` ` + n[e])
            : e == `style`
              ? (t.style = (t.style ? t.style + `;` : ``) + n[e])
              : !t[e] && e != `contenteditable` && e != `nodeName` && (t[e] = String(n[e]));
    }),
    (t.translate ||= `no`),
    [Qc.node(0, e.state.doc.content.size, t)]
  );
}
function Fl(e) {
  if (e.markCursor) {
    let t = document.createElement(`img`);
    ((t.className = `ProseMirror-separator`),
      t.setAttribute(`mark-placeholder`, `true`),
      t.setAttribute(`alt`, ``),
      (e.cursorWrapper = {
        dom: t,
        deco: Qc.widget(e.state.selection.from, t, { raw: !0, marks: e.markCursor }),
      }));
  } else e.cursorWrapper = null;
}
function Il(e) {
  return !e.someProp(`editable`, (t) => t(e.state) === !1);
}
function Ll(e, t) {
  let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
  return e.$anchor.start(n) != t.$anchor.start(n);
}
function Rl(e) {
  let t = Object.create(null);
  function n(e) {
    for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
  }
  return (e.someProp(`nodeViews`, n), e.someProp(`markViews`, n), t);
}
function zl(e, t) {
  let n = 0,
    r = 0;
  for (let r in e) {
    if (e[r] != t[r]) return !0;
    n++;
  }
  for (let e in t) r++;
  return n != r;
}
function Bl(e) {
  if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
    throw RangeError(`Plugins passed directly to the view must not have a state component`);
}
for (
  var Vl = {
      8: `Backspace`,
      9: `Tab`,
      10: `Enter`,
      12: `NumLock`,
      13: `Enter`,
      16: `Shift`,
      17: `Control`,
      18: `Alt`,
      20: `CapsLock`,
      27: `Escape`,
      32: ` `,
      33: `PageUp`,
      34: `PageDown`,
      35: `End`,
      36: `Home`,
      37: `ArrowLeft`,
      38: `ArrowUp`,
      39: `ArrowRight`,
      40: `ArrowDown`,
      44: `PrintScreen`,
      45: `Insert`,
      46: `Delete`,
      59: `;`,
      61: `=`,
      91: `Meta`,
      92: `Meta`,
      106: `*`,
      107: `+`,
      108: `,`,
      109: `-`,
      110: `.`,
      111: `/`,
      144: `NumLock`,
      145: `ScrollLock`,
      160: `Shift`,
      161: `Shift`,
      162: `Control`,
      163: `Control`,
      164: `Alt`,
      165: `Alt`,
      173: `-`,
      186: `;`,
      187: `=`,
      188: `,`,
      189: `-`,
      190: `.`,
      191: `/`,
      192: "`",
      219: `[`,
      220: `\\`,
      221: `]`,
      222: `'`,
    },
    Hl = {
      48: `)`,
      49: `!`,
      50: `@`,
      51: `#`,
      52: `$`,
      53: `%`,
      54: `^`,
      55: `&`,
      56: `*`,
      57: `(`,
      59: `:`,
      61: `+`,
      173: `_`,
      186: `:`,
      187: `+`,
      188: `<`,
      189: `_`,
      190: `>`,
      191: `?`,
      192: `~`,
      219: `{`,
      220: `|`,
      221: `}`,
      222: `"`,
    },
    Ul = typeof navigator < `u` && /Mac/.test(navigator.platform),
    Wl =
      typeof navigator < `u` &&
      /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
    Gl = 0;
  Gl < 10;
  Gl++
)
  Vl[48 + Gl] = Vl[96 + Gl] = String(Gl);
for (var Gl = 1; Gl <= 24; Gl++) Vl[Gl + 111] = `F` + Gl;
for (var Gl = 65; Gl <= 90; Gl++)
  ((Vl[Gl] = String.fromCharCode(Gl + 32)), (Hl[Gl] = String.fromCharCode(Gl)));
for (var Kl in Vl) Hl.hasOwnProperty(Kl) || (Hl[Kl] = Vl[Kl]);
function ql(e) {
  var t =
    (!(
      (Ul && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
      (Wl && e.shiftKey && e.key && e.key.length == 1) ||
      e.key == `Unidentified`
    ) &&
      e.key) ||
    (e.shiftKey ? Hl : Vl)[e.keyCode] ||
    e.key ||
    `Unidentified`;
  return (
    t == `Esc` && (t = `Escape`),
    t == `Del` && (t = `Delete`),
    t == `Left` && (t = `ArrowLeft`),
    t == `Up` && (t = `ArrowUp`),
    t == `Right` && (t = `ArrowRight`),
    t == `Down` && (t = `ArrowDown`),
    t
  );
}
var Jl = typeof navigator < `u` && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
  Yl = typeof navigator < `u` && /Win/.test(navigator.platform);
function Xl(e) {
  let t = e.split(/-(?!$)/),
    n = t[t.length - 1];
  n == `Space` && (n = ` `);
  let r, i, a, o;
  for (let e = 0; e < t.length - 1; e++) {
    let n = t[e];
    if (/^(cmd|meta|m)$/i.test(n)) o = !0;
    else if (/^a(lt)?$/i.test(n)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
    else if (/^s(hift)?$/i.test(n)) a = !0;
    else if (/^mod$/i.test(n)) Jl ? (o = !0) : (i = !0);
    else throw Error(`Unrecognized modifier name: ` + n);
  }
  return (
    r && (n = `Alt-` + n),
    i && (n = `Ctrl-` + n),
    o && (n = `Meta-` + n),
    a && (n = `Shift-` + n),
    n
  );
}
function Zl(e) {
  let t = Object.create(null);
  for (let n in e) t[Xl(n)] = e[n];
  return t;
}
function Ql(e, t, n = !0) {
  return (
    t.altKey && (e = `Alt-` + e),
    t.ctrlKey && (e = `Ctrl-` + e),
    t.metaKey && (e = `Meta-` + e),
    n && t.shiftKey && (e = `Shift-` + e),
    e
  );
}
function $l(e) {
  return new B({ props: { handleKeyDown: eu(e) } });
}
function eu(e) {
  let t = Zl(e);
  return function (e, n) {
    let r = ql(n),
      i,
      a = t[Ql(r, n)];
    if (a && a(e.state, e.dispatch, e)) return !0;
    if (r.length == 1 && r != ` `) {
      if (n.shiftKey) {
        let i = t[Ql(r, n, !1)];
        if (i && i(e.state, e.dispatch, e)) return !0;
      }
      if (
        (n.altKey || n.metaKey || n.ctrlKey) &&
        !(Yl && n.ctrlKey && n.altKey) &&
        (i = Vl[n.keyCode]) &&
        i != r
      ) {
        let r = t[Ql(i, n)];
        if (r && r(e.state, e.dispatch, e)) return !0;
      }
    }
    return !1;
  };
}
function tu(e) {
  let { state: t, transaction: n } = e,
    { selection: r } = n,
    { doc: i } = n,
    { storedMarks: a } = n;
  return {
    ...t,
    apply: t.apply.bind(t),
    applyTransaction: t.applyTransaction.bind(t),
    plugins: t.plugins,
    schema: t.schema,
    reconfigure: t.reconfigure.bind(t),
    toJSON: t.toJSON.bind(t),
    get storedMarks() {
      return a;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return ((r = n.selection), (i = n.doc), (a = n.storedMarks), n);
    },
  };
}
var nu = class e {
    constructor(e) {
      ((this.editor = e.editor),
        (this.rawCommands = this.editor.extensionManager.commands),
        (this.customState = e.state));
    }
    get hasCustomState() {
      return !!this.customState;
    }
    get state() {
      return this.customState || this.editor.state;
    }
    get commands() {
      let { rawCommands: e, editor: t, state: n } = this,
        { view: r } = t,
        { tr: i } = n,
        a = this.buildProps(i);
      return Object.fromEntries(
        Object.entries(e).map(([e, t]) => [
          e,
          (...e) => {
            let n = t(...e)(a);
            return (!i.getMeta(`preventDispatch`) && !this.hasCustomState && r.dispatch(i), n);
          },
        ]),
      );
    }
    get chain() {
      return () => this.createChain();
    }
    get can() {
      return () => this.createCan();
    }
    createChain(e, t = !0) {
      let { rawCommands: n, editor: r, state: i } = this,
        { view: a } = r,
        o = [],
        s = !!e,
        c = e || i.tr,
        l = () => (
          !s && t && !c.getMeta(`preventDispatch`) && !this.hasCustomState && a.dispatch(c),
          o.every((e) => e === !0)
        ),
        u = {
          ...Object.fromEntries(
            Object.entries(n).map(([e, n]) => [
              e,
              (...e) => {
                let r = this.buildProps(c, t),
                  i = n(...e)(r);
                return (o.push(i), u);
              },
            ]),
          ),
          run: l,
        };
      return u;
    }
    static createFakeChain() {
      let e = new Proxy(
        {},
        {
          get: (t, n) => {
            if (n !== `then`) return n === `run` ? () => !1 : () => e;
          },
        },
      );
      return e;
    }
    createCan(e) {
      let { rawCommands: t, state: n } = this,
        r = e || n.tr,
        i = this.buildProps(r, !1);
      return {
        ...Object.fromEntries(
          Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({ ...i, dispatch: void 0 })]),
        ),
        chain: () => this.createChain(r, !1),
      };
    }
    static createFallbackCan() {
      let t = e.createFakeChain();
      return new Proxy(
        { chain: () => t },
        {
          get: (e, t) => {
            if (t !== `then`) return t === `chain` ? e.chain : () => !1;
          },
        },
      );
    }
    buildProps(e, t = !0) {
      let { rawCommands: n, editor: r, state: i } = this,
        { view: a } = r,
        o = {
          tr: e,
          editor: r,
          view: a,
          state: tu({ state: i, transaction: e }),
          dispatch: t ? () => void 0 : void 0,
          chain: () => this.createChain(e, t),
          can: () => this.createCan(e),
          get commands() {
            return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(o)]));
          },
        };
      return o;
    }
  },
  ru =
    () =>
    ({ editor: e, view: t }) => (
      requestAnimationFrame(() => {
        if (!e.isDestroyed) {
          var n;
          (t.dom.blur(),
            (n = window) == null || (n = n.getSelection()) == null || n.removeAllRanges());
        }
      }),
      !0
    ),
  iu =
    (e = !0) =>
    ({ commands: t }) =>
      t.setContent(``, { emitUpdate: e }),
  au =
    () =>
    ({ state: e, tr: t, dispatch: n }) => {
      let { selection: r } = t,
        { ranges: i } = r;
      return (
        n &&
          i.forEach(({ $from: n, $to: r }) => {
            e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
              if (e.type.isText) return;
              let { doc: r, mapping: i } = t,
                a = r.resolve(i.map(n)),
                o = r.resolve(i.map(n + e.nodeSize)),
                s = a.blockRange(o);
              if (!s) return;
              let c = _r(s);
              if (e.type.isTextblock) {
                let { defaultType: e } = a.parent.contentMatchAt(a.index());
                t.setNodeMarkup(s.start, e);
              }
              (c || c === 0) && t.lift(s, c);
            });
          }),
        !0
      );
    },
  ou = (e) => (t) => e(t),
  su =
    () =>
    ({ state: e, dispatch: t }) =>
      Gi(e, t),
  cu =
    (e, t) =>
    ({ editor: n, tr: r }) => {
      let { state: i } = n,
        a = i.doc.slice(e.from, e.to);
      r.deleteRange(e.from, e.to);
      let o = r.mapping.map(t);
      return (r.insert(o, a.content), r.setSelection(new R(r.doc.resolve(Math.max(o - 1, 0)))), !0);
    },
  lu =
    () =>
    ({ tr: e, dispatch: t }) => {
      let { selection: n } = e,
        r = n.$anchor.node();
      if (r.content.size > 0) return !1;
      let i = e.selection.$anchor;
      for (let n = i.depth; n > 0; --n)
        if (i.node(n).type === r.type) {
          if (t) {
            let t = i.before(n),
              r = i.after(n);
            e.delete(t, r).scrollIntoView();
          }
          return !0;
        }
      return !1;
    };
function U(e, t) {
  if (typeof e == `string`) {
    if (!t.nodes[e])
      throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
    return t.nodes[e];
  }
  return e;
}
var uu =
    (e) =>
    ({ tr: t, state: n, dispatch: r }) => {
      let i = U(e, n.schema),
        a = t.selection.$anchor;
      for (let e = a.depth; e > 0; --e)
        if (a.node(e).type === i) {
          if (r) {
            let n = a.before(e),
              r = a.after(e);
            t.delete(n, r).scrollIntoView();
          }
          return !0;
        }
      return !1;
    },
  du =
    (e) =>
    ({ tr: t, dispatch: n }) => {
      let { from: r, to: i } = e;
      return (n && t.delete(r, i), !0);
    },
  fu = (e) => (e.content ? /^text(\*|\+)/.test(e.content) : !1),
  pu = (e, t, n) => {
    if (
      !e.parent.isInline ||
      (n === `left` && e.pos > e.start()) ||
      (n === `right` && e.pos < e.end())
    )
      return e.pos;
    let r = t.nodes[e.parent.type.name].spec;
    return fu(r) ? (n === `left` ? e.start() - 1 : e.end() + 1) : e.pos;
  },
  mu = (e, t, n) => ({ from: pu(e, n, `left`), to: pu(t, n, `right`) }),
  hu =
    () =>
    ({ state: e, dispatch: t }) => {
      if (e.selection.empty) return !1;
      if (t) {
        let n = e.tr,
          { ranges: r } = e.selection,
          i = n.steps.length;
        (r.forEach((t) => {
          let r = n.mapping.slice(i),
            { from: a, to: o } = mu(
              n.doc.resolve(r.map(t.$from.pos)),
              n.doc.resolve(r.map(t.$to.pos)),
              e.schema,
            );
          n.deleteRange(a, o);
        }),
          n.selection.empty || n.setSelection(R.near(n.doc.resolve(n.selection.from))),
          n.scrollIntoView(),
          t(n));
      }
      return !0;
    },
  gu =
    () =>
    ({ commands: e }) =>
      e.keyboardShortcut(`Enter`),
  _u =
    () =>
    ({ state: e, dispatch: t }) =>
      Wi(e, t);
function vu(e) {
  return Object.prototype.toString.call(e) === `[object RegExp]`;
}
function yu(e, t, n = { strict: !0 }) {
  let r = Object.keys(t);
  return (
    !r.length ||
    r.every((r) => (n.strict ? t[r] === e[r] : vu(t[r]) ? t[r].test(e[r]) : t[r] === e[r]))
  );
}
function bu(e, t, n = {}) {
  return e.find(
    (e) => e.type === t && yu(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n),
  );
}
function xu(e, t, n = {}) {
  return !!bu(e, t, n);
}
function Su(e, t, n) {
  if (!e || !t) return;
  let r = e.parent.childAfter(e.parentOffset);
  if (
    ((r.node && r.node.marks.some((e) => e.type === t)) ||
      (r = e.parent.childBefore(e.parentOffset)),
    !r.node || !r.node.marks.some((e) => e.type === t))
  )
    return;
  if (!n) {
    let e = r.node.marks.find((e) => e.type === t);
    e && (n = e.attrs);
  }
  if (!bu([...r.node.marks], t, n)) return;
  let i = r.index,
    a = e.start() + r.offset,
    o = i + 1,
    s = a + r.node.nodeSize;
  for (; i > 0 && xu([...e.parent.child(i - 1).marks], t, n);)
    (--i, (a -= e.parent.child(i).nodeSize));
  for (; o < e.parent.childCount && xu([...e.parent.child(o).marks], t, n);)
    ((s += e.parent.child(o).nodeSize), (o += 1));
  return { from: a, to: s };
}
function Cu(e, t) {
  if (typeof e == `string`) {
    if (!t.marks[e])
      throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
    return t.marks[e];
  }
  return e;
}
var wu =
    (e, t) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let a = Cu(e, r.schema),
        { doc: o, selection: s } = n,
        { $from: c, from: l, to: u } = s;
      if (i) {
        let e = Su(c, a, t);
        if (e && e.from <= l && e.to >= u) {
          let t = R.create(o, e.from, e.to);
          n.setSelection(t);
        }
      }
      return !0;
    },
  Tu = (e) => (t) => {
    let n = typeof e == `function` ? e(t) : e;
    for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
    return !1;
  };
function Eu(e) {
  return e instanceof R;
}
function Du(e = 0, t = 0, n = 0) {
  return Math.min(Math.max(e, t), n);
}
function Ou(e, t = null) {
  if (!t) return null;
  let n = L.atStart(e),
    r = L.atEnd(e);
  if (t === `start` || t === !0) return n;
  if (t === `end`) return r;
  let i = n.from,
    a = r.to;
  return t === `all`
    ? R.create(e, Du(0, i, a), Du(e.content.size, i, a))
    : R.create(e, Du(t, i, a), Du(t, i, a));
}
function ku() {
  return [`Android`].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function Au() {
  return (
    [`iPad Simulator`, `iPhone Simulator`, `iPod Simulator`, `iPad`, `iPhone`, `iPod`].includes(
      navigator.platform,
    ) ||
    (navigator.userAgent.includes(`Mac`) && `ontouchend` in document)
  );
}
function ju() {
  return typeof navigator < `u` && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var Mu =
    (e = null, t = {}) =>
    ({ editor: n, view: r, tr: i, dispatch: a }) => {
      t = { scrollIntoView: !0, ...t };
      let o = () => {
        ((Au() || ku()) && r.dom.focus(),
          ju() && !Au() && !ku() && r.dom.focus({ preventScroll: !0 }),
          requestAnimationFrame(() => {
            n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
          }));
      };
      try {
        if ((r.hasFocus() && e === null) || e === !1) return !0;
      } catch {
        return !1;
      }
      if (a && e === null && !Eu(n.state.selection)) return (o(), !0);
      let s = Ou(i.doc, e) || n.state.selection,
        c = n.state.selection.eq(s);
      return (
        a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()),
        !0
      );
    },
  Nu = (e, t) => (n) => e.every((e, r) => t(e, { ...n, index: r })),
  Pu =
    (e, t) =>
    ({ tr: n, commands: r }) =>
      r.insertContentAt({ from: n.selection.from, to: n.selection.to }, e, t),
  Fu = (e) => {
    let t = e.childNodes;
    for (let n = t.length - 1; n >= 0; --n) {
      let r = t[n];
      r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue)
        ? e.removeChild(r)
        : r.nodeType === 1 && Fu(r);
    }
    return e;
  };
function Iu(e) {
  if (typeof window > `u`)
    throw Error(
      `[tiptap error]: there is no window object available, so this function cannot be used`,
    );
  let t = `<body>${e}</body>`,
    n = new window.DOMParser().parseFromString(t, `text/html`).body;
  return Fu(n);
}
function Lu(e) {
  return typeof e?.nodesBetween == `function`;
}
function Ru(e, t, n) {
  if (Lu(e)) return e;
  let r = typeof e == `object` && !!e;
  n = { slice: !0, parseOptions: {}, ...n };
  let i = typeof e == `string`;
  if (r)
    try {
      if (Array.isArray(e) && e.length > 0) return P.fromArray(e.map((e) => t.nodeFromJSON(e)));
      let r = t.nodeFromJSON(e);
      return (n.errorOnInvalidContent && r.check(), r);
    } catch (r) {
      if (n.errorOnInvalidContent)
        throw Error(`[tiptap error]: Invalid JSON content`, { cause: r });
      return (
        console.warn(`[tiptap warn]: Invalid content.`, `Passed value:`, e, `Error:`, r),
        Ru(``, t, n)
      );
    }
  if (i) {
    if (n.errorOnInvalidContent) {
      let r = !1,
        i = ``,
        a = new yn({
          topNode: t.spec.topNode,
          marks: t.spec.marks,
          nodes: t.spec.nodes.append({
            __tiptap__private__unknown__catch__all__node: {
              content: `inline*`,
              group: `block`,
              parseDOM: [
                {
                  tag: `*`,
                  getAttrs: (e) => ((r = !0), (i = typeof e == `string` ? e : e.outerHTML), null),
                },
              ],
            },
          }),
        });
      if (
        (n.slice
          ? Cn.fromSchema(a).parseSlice(Iu(e), n.parseOptions)
          : Cn.fromSchema(a).parse(Iu(e), n.parseOptions),
        n.errorOnInvalidContent && r)
      )
        throw Error(`[tiptap error]: Invalid HTML content`, {
          cause: Error(`Invalid element found: ${i}`),
        });
    }
    let r = Cn.fromSchema(t);
    return n.slice ? r.parseSlice(Iu(e), n.parseOptions).content : r.parse(Iu(e), n.parseOptions);
  }
  return Ru(``, t, n);
}
function zu(e) {
  return !(`type` in e);
}
function Bu(e, t, n) {
  let r = e.steps.length - 1;
  if (r < t) return;
  let i = e.steps[r];
  if (!(i instanceof ur || i instanceof dr)) return;
  let a = e.mapping.maps[r],
    o = 0;
  (a.forEach((e, t, n, r) => {
    o === 0 && (o = r);
  }),
    e.setSelection(L.near(e.doc.resolve(o), n)));
}
var Vu =
  (e, t, n) =>
  ({ tr: r, dispatch: i, editor: a }) => {
    if (i) {
      n = {
        parseOptions: a.options.parseOptions,
        updateSelection: !0,
        applyInputRules: !1,
        applyPasteRules: !1,
        ...n,
      };
      let i,
        o = (e) => {
          a.emit(`contentError`, {
            editor: a,
            error: e,
            disableCollaboration: () => {
              `collaboration` in a.storage &&
                typeof a.storage.collaboration == `object` &&
                a.storage.collaboration &&
                (a.storage.collaboration.isDisabled = !0);
            },
          });
        },
        s = { preserveWhitespace: `full`, ...n.parseOptions };
      if (!n.errorOnInvalidContent && !a.options.enableContentCheck && a.options.emitContentError)
        try {
          Ru(t, a.schema, { parseOptions: s, errorOnInvalidContent: !0 });
        } catch (e) {
          o(e);
        }
      try {
        i = Ru(t, a.schema, {
          parseOptions: s,
          errorOnInvalidContent: n.errorOnInvalidContent ?? a.options.enableContentCheck,
        });
      } catch (e) {
        return (o(e), !1);
      }
      let { from: c, to: l } =
          typeof e == `number` ? { from: e, to: e } : { from: e.from, to: e.to },
        u = !0,
        d = !0,
        f = zu(i) ? i.content : [i];
      if (
        (f.forEach((e) => {
          (e.check(), (u = u ? e.isText && e.marks.length === 0 : !1), (d = d ? e.isBlock : !1));
        }),
        c === l && d)
      ) {
        let { parent: e } = r.doc.resolve(c);
        e.isTextblock && !e.type.spec.code && !e.childCount && (--c, (l += 1));
      }
      let p;
      if (u)
        ((p = Array.isArray(t)
          ? t.map((e) => e.text || ``).join(``)
          : Lu(t)
            ? f.map((e) => e.text ?? ``).join(``)
            : typeof t == `object` && t && t.text
              ? t.text
              : t),
          r.insertText(p, c, l));
      else {
        p = P.from(f);
        let e = r.doc.resolve(c),
          t = e.node(),
          n = e.parentOffset === 0,
          i = t.isText || t.isTextblock,
          a = t.content.size > 0;
        (n && i && a && d && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f));
      }
      (n.updateSelection && Bu(r, r.steps.length - 1, -1),
        n.applyInputRules && r.setMeta(`applyInputRules`, { from: c, text: p }),
        n.applyPasteRules && r.setMeta(`applyPasteRules`, { from: c, text: p }));
    }
    return !0;
  };
function Hu(e) {
  for (let t = 0; t < e.edgeCount; t += 1) {
    let { type: n } = e.edge(t);
    if (n.isTextblock && !n.hasRequiredAttrs()) return n;
  }
  return null;
}
var Uu =
    (e = {}) =>
    ({ tr: t, dispatch: n, editor: r }) => {
      let { pos: i, attrs: a, content: o, updateSelection: s = !0 } = e,
        c;
      c = typeof i == `number` ? t.doc.resolve(i) : i || t.selection.$from;
      let l = Hu(c.parent.contentMatchAt(c.index()));
      if (!l) return !1;
      let u = Object.keys(l.spec.attrs || {}),
        d = a ? Object.fromEntries(Object.entries(a).filter(([e]) => u.includes(e))) : {},
        f;
      if (o) {
        let e = Ru(o, r.schema);
        f = l.createAndFill(d, e);
      } else f = l.createAndFill(d);
      return f ? (n && (t.insert(c.pos, f), s && Bu(t, t.steps.length - 1, -1)), !0) : !1;
    },
  Wu =
    () =>
    ({ state: e, dispatch: t }) =>
      zi(e, t),
  Gu =
    () =>
    ({ state: e, dispatch: t }) =>
      Bi(e, t),
  Ku =
    () =>
    ({ state: e, dispatch: t }) =>
      Oi(e, t),
  qu =
    () =>
    ({ state: e, dispatch: t }) =>
      Ii(e, t),
  Ju =
    () =>
    ({ state: e, dispatch: t, tr: n }) => {
      try {
        let r = Pr(e.doc, e.selection.$from.pos, -1);
        return r != null && (n.join(r, 2), t && t(n), !0);
      } catch {
        return !1;
      }
    },
  Yu =
    () =>
    ({ state: e, dispatch: t, tr: n }) => {
      try {
        let r = Pr(e.doc, e.selection.$from.pos, 1);
        return r != null && (n.join(r, 2), t && t(n), !0);
      } catch {
        return !1;
      }
    },
  Xu =
    () =>
    ({ state: e, dispatch: t }) =>
      ki(e, t),
  Zu =
    () =>
    ({ state: e, dispatch: t }) =>
      Ai(e, t);
function Qu() {
  return typeof navigator < `u` && /Mac/.test(navigator.platform);
}
function $u(e) {
  let t = e.split(/-(?!$)/),
    n = t[t.length - 1];
  n === `Space` && (n = ` `);
  let r, i, a, o;
  for (let e = 0; e < t.length - 1; e += 1) {
    let n = t[e];
    if (/^(cmd|meta|m)$/i.test(n)) o = !0;
    else if (/^a(lt)?$/i.test(n)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
    else if (/^s(hift)?$/i.test(n)) a = !0;
    else if (/^mod$/i.test(n)) Au() || Qu() ? (o = !0) : (i = !0);
    else throw Error(`Unrecognized modifier name: ${n}`);
  }
  return (
    r && (n = `Alt-${n}`),
    i && (n = `Ctrl-${n}`),
    o && (n = `Meta-${n}`),
    a && (n = `Shift-${n}`),
    n
  );
}
var ed =
  (e) =>
  ({ editor: t, view: n, tr: r, dispatch: i }) => {
    let a = $u(e).split(/-(?!$)/),
      o = a.find((e) => ![`Alt`, `Ctrl`, `Meta`, `Shift`].includes(e)),
      s = new KeyboardEvent(`keydown`, {
        key: o === `Space` ? ` ` : o,
        altKey: a.includes(`Alt`),
        ctrlKey: a.includes(`Ctrl`),
        metaKey: a.includes(`Meta`),
        shiftKey: a.includes(`Shift`),
        bubbles: !0,
        cancelable: !0,
      });
    return (
      t
        .captureTransaction(() => {
          n.someProp(`handleKeyDown`, (e) => e(n, s));
        })
        ?.steps.forEach((e) => {
          let t = e.map(r.mapping);
          t && i && r.maybeStep(t);
        }),
      !0
    );
  };
function td(e, t, n = {}) {
  let { from: r, to: i, empty: a } = e.selection,
    o = t ? U(t, e.schema) : null,
    s = [];
  e.doc.nodesBetween(r, i, (e, t) => {
    if (e.isText) return;
    let n = Math.max(r, t),
      a = Math.min(i, t + e.nodeSize);
    s.push({ node: e, from: n, to: a });
  });
  let c = i - r,
    l = s
      .filter((e) => !o || o.name === e.node.type.name)
      .filter((e) => yu(e.node.attrs, n, { strict: !1 }));
  return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var nd =
    (e, t = {}) =>
    ({ state: n, dispatch: r }) =>
      td(n, U(e, n.schema), t) ? Vi(n, r) : !1,
  rd =
    () =>
    ({ state: e, dispatch: t }) =>
      Ki(e, t),
  id =
    (e) =>
    ({ state: t, dispatch: n }) =>
      pa(U(e, t.schema))(t, n),
  ad =
    () =>
    ({ state: e, dispatch: t }) =>
      Hi(e, t);
function od(e, t) {
  return t.nodes[e] ? `node` : t.marks[e] ? `mark` : null;
}
function sd(e, t) {
  let n = typeof t == `string` ? [t] : t;
  return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var cd =
    (e, t) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let a = null,
        o = null,
        s = od(typeof e == `string` ? e : e.name, r.schema);
      if (!s) return !1;
      (s === `node` && (a = U(e, r.schema)), s === `mark` && (o = Cu(e, r.schema)));
      let c = !1;
      return (
        n.selection.ranges.forEach((e) => {
          r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
            (a && a === e.type && ((c = !0), i && n.setNodeMarkup(r, void 0, sd(e.attrs, t))),
              o &&
                e.marks.length &&
                e.marks.forEach((a) => {
                  o === a.type &&
                    ((c = !0), i && n.addMark(r, r + e.nodeSize, o.create(sd(a.attrs, t))));
                }));
          });
        }),
        c
      );
    },
  ld =
    () =>
    ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0),
  ud =
    () =>
    ({ tr: e, dispatch: t }) => {
      if (t) {
        let t = new ui(e.doc);
        e.setSelection(t);
      }
      return !0;
    },
  dd =
    () =>
    ({ state: e, dispatch: t }) =>
      Ni(e, t),
  fd =
    () =>
    ({ state: e, dispatch: t }) =>
      Li(e, t),
  pd =
    () =>
    ({ state: e, dispatch: t }) =>
      Xi(e, t),
  md =
    () =>
    ({ state: e, dispatch: t }) =>
      na(e, t),
  hd =
    () =>
    ({ state: e, dispatch: t }) =>
      ta(e, t);
function gd(e, t, n = {}, r = {}) {
  return Ru(e, t, { slice: !1, parseOptions: n, errorOnInvalidContent: r.errorOnInvalidContent });
}
var _d =
  (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) =>
  ({ editor: i, tr: a, dispatch: o, commands: s }) => {
    let { doc: c } = a;
    if (r.preserveWhitespace !== `full`) {
      let s = gd(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
      if (o) {
        let e = zu(s) ? s.content : [s];
        a.replaceWith(0, c.content.size, e).setMeta(`preventUpdate`, !n);
      }
      return !0;
    }
    return (
      o && a.setMeta(`preventUpdate`, !n),
      s.insertContentAt({ from: 0, to: c.content.size }, e, {
        parseOptions: r,
        errorOnInvalidContent: t ?? i.options.enableContentCheck,
      })
    );
  };
function vd(e, t) {
  let n = Cu(t, e.schema),
    { from: r, to: i, empty: a } = e.selection,
    o = [];
  a
    ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks()))
    : e.doc.nodesBetween(r, i, (e) => {
        o.push(...e.marks);
      });
  let s = o.find((e) => e.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function yd(e, t) {
  let n = new ri(e);
  return (
    t.forEach((e) => {
      e.steps.forEach((e) => {
        n.step(e);
      });
    }),
    n
  );
}
function bd(e, t) {
  let n = [];
  return (
    e.descendants((e, r) => {
      t(e) && n.push({ node: e, pos: r });
    }),
    n
  );
}
function xd(e, t, n) {
  let r = [];
  return (
    e.nodesBetween(t.from, t.to, (e, t) => {
      n(e) && r.push({ node: e, pos: t });
    }),
    r
  );
}
function Sd(e, t) {
  for (let n = e.depth; n > 0; --n) {
    let r = e.node(n);
    if (t(r)) return { pos: n > 0 ? e.before(n) : 0, start: e.start(n), depth: n, node: r };
  }
}
function Cd(e) {
  return (t) => Sd(t.$from, e);
}
function W(e, t, n) {
  return e.config[t] === void 0 && e.parent
    ? W(e.parent, t, n)
    : typeof e.config[t] == `function`
      ? e.config[t].bind({ ...n, parent: e.parent ? W(e.parent, t, n) : null })
      : e.config[t];
}
function wd(e) {
  return e
    .map((e) => {
      let t = W(e, `addExtensions`, { name: e.name, options: e.options, storage: e.storage });
      return t ? [e, ...wd(t())] : e;
    })
    .flat(10);
}
function Td(e, t) {
  let n = Ln.fromSchema(t).serializeFragment(e),
    r = document.implementation.createHTMLDocument().createElement(`div`);
  return (r.appendChild(n), r.innerHTML);
}
function Ed(e) {
  return typeof e == `function`;
}
function G(e, t = void 0, ...n) {
  return Ed(e) ? (t ? e.bind(t)(...n) : e(...n)) : e;
}
function Dd(e = {}) {
  return Object.keys(e).length === 0 && e.constructor === Object;
}
function Od(e) {
  return {
    baseExtensions: e.filter((e) => e.type === `extension`),
    nodeExtensions: e.filter((e) => e.type === `node`),
    markExtensions: e.filter((e) => e.type === `mark`),
  };
}
function kd(e) {
  let t = [],
    { nodeExtensions: n, markExtensions: r } = Od(e),
    i = [...n, ...r],
    a = {
      default: null,
      validate: void 0,
      rendered: !0,
      renderHTML: null,
      parseHTML: null,
      keepOnSplit: !0,
      isRequired: !1,
    },
    o = n.filter((e) => e.name !== `text`).map((e) => e.name),
    s = r.map((e) => e.name),
    c = [...o, ...s];
  return (
    e.forEach((e) => {
      let n = W(e, `addGlobalAttributes`, {
        name: e.name,
        options: e.options,
        storage: e.storage,
        extensions: i,
      });
      n &&
        n().forEach((e) => {
          let n;
          ((n = Array.isArray(e.types)
            ? e.types
            : e.types === `*`
              ? c
              : e.types === `nodes`
                ? o
                : e.types === `marks`
                  ? s
                  : []),
            n.forEach((n) => {
              Object.entries(e.attributes).forEach(([e, r]) => {
                t.push({ type: n, name: e, attribute: { ...a, ...r } });
              });
            }));
        });
    }),
    i.forEach((e) => {
      let n = W(e, `addAttributes`, { name: e.name, options: e.options, storage: e.storage });
      if (!n) return;
      let r = n();
      Object.entries(r).forEach(([n, r]) => {
        let i = { ...a, ...r };
        (typeof i?.default == `function` && (i.default = i.default()),
          i?.isRequired && i?.default === void 0 && delete i.default,
          t.push({ type: e.name, name: n, attribute: i }));
      });
    }),
    t
  );
}
function Ad(e) {
  let t = [],
    n = ``,
    r = !1,
    i = !1,
    a = 0,
    o = e.length;
  for (let s = 0; s < o; s += 1) {
    let o = e[s];
    if (o === `'` && !i) ((r = !r), (n += o));
    else if (o === `"` && !r) ((i = !i), (n += o));
    else {
      if (!r && !i) {
        if (o === `(`) {
          ((a += 1), (n += o));
          continue;
        }
        if (o === `)` && a > 0) {
          (--a, (n += o));
          continue;
        }
        if (o === `;` && a === 0) {
          (t.push(n), (n = ``));
          continue;
        }
      }
      n += o;
    }
  }
  return (n && t.push(n), t);
}
function jd(e) {
  let t = [],
    n = Ad(e || ``),
    r = n.length;
  for (let e = 0; e < r; e += 1) {
    let r = n[e],
      i = r.indexOf(`:`);
    if (i === -1) continue;
    let a = r.slice(0, i).trim(),
      o = r.slice(i + 1).trim();
    a && o && t.push([a, o]);
  }
  return t;
}
function K(...e) {
  return e
    .filter((e) => !!e)
    .reduce((e, t) => {
      let n = { ...e };
      return (
        Object.entries(t).forEach(([e, t]) => {
          if (e === `__proto__`)
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          else if (!n[e]) n[e] = t;
          else if (e === `class`) {
            let r = t ? String(t).split(` `) : [],
              i = n[e] ? n[e].split(` `) : [],
              a = r.filter((e) => !i.includes(e));
            n[e] = [...i, ...a].join(` `);
          } else if (e === `style`) {
            let r = new Map([...jd(n[e]), ...jd(t)]);
            n[e] = Array.from(r.entries())
              .map(([e, t]) => `${e}: ${t}`)
              .join(`; `);
          } else n[e] = t;
        }),
        n
      );
    }, {});
}
function Md(e, t) {
  return t
    .filter((t) => t.type === e.type.name)
    .filter((e) => e.attribute.rendered)
    .map((t) =>
      t.attribute.renderHTML
        ? t.attribute.renderHTML(e.attrs) || {}
        : { [t.name]: e.attrs[t.name] },
    )
    .reduce((e, t) => K(e, t), {});
}
function Nd(e) {
  return typeof e == `string`
    ? e.match(/^[+-]?(?:\d*\.)?\d+$/)
      ? Number(e)
      : e === `true` || (e !== `false` && e)
    : e;
}
function Pd(e, t) {
  return `style` in e
    ? e
    : {
        ...e,
        getAttrs: (n) => {
          let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
          if (r === !1) return !1;
          let i = t.reduce((e, t) => {
            let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : Nd(n.getAttribute(t.name));
            return r == null ? e : { ...e, [t.name]: r };
          }, {});
          return { ...r, ...i };
        },
      };
}
function Fd(e) {
  return Object.fromEntries(
    Object.entries(e).filter(([e, t]) => (e === `attrs` && Dd(t) ? !1 : t != null)),
  );
}
function Id(e) {
  var t, n;
  let r = {};
  return (
    !(e != null && (t = e.attribute) != null && t.isRequired) &&
      `default` in (e?.attribute || {}) &&
      (r.default = e.attribute.default),
    (e == null || (n = e.attribute) == null ? void 0 : n.validate) !== void 0 &&
      (r.validate = e.attribute.validate),
    [e.name, r]
  );
}
function Ld(e, t) {
  let n = kd(e),
    { nodeExtensions: r, markExtensions: i } = Od(e),
    a = r.find((e) => W(e, `topNode`))?.name;
  return new yn({
    topNode: a,
    nodes: Object.fromEntries(
      r.map((r) => {
        let i = n.filter((e) => e.type === r.name),
          a = { name: r.name, options: r.options, storage: r.storage, editor: t },
          o = Fd({
            ...e.reduce((e, t) => {
              let n = W(t, `extendNodeSchema`, a);
              return { ...e, ...(n ? n(r) : {}) };
            }, {}),
            content: G(W(r, `content`, a)),
            marks: G(W(r, `marks`, a)),
            group: G(W(r, `group`, a)),
            inline: G(W(r, `inline`, a)),
            atom: G(W(r, `atom`, a)),
            selectable: G(W(r, `selectable`, a)),
            draggable: G(W(r, `draggable`, a)),
            code: G(W(r, `code`, a)),
            whitespace: G(W(r, `whitespace`, a)),
            linebreakReplacement: G(W(r, `linebreakReplacement`, a)),
            defining: G(W(r, `defining`, a)),
            isolating: G(W(r, `isolating`, a)),
            attrs: Object.fromEntries(i.map(Id)),
          }),
          s = G(W(r, `parseHTML`, a));
        s && (o.parseDOM = s.map((e) => Pd(e, i)));
        let c = W(r, `renderHTML`, a);
        c && (o.toDOM = (e) => c({ node: e, HTMLAttributes: Md(e, i) }));
        let l = W(r, `renderText`, a);
        return (l && (o.toText = l), [r.name, o]);
      }),
    ),
    marks: Object.fromEntries(
      i.map((r) => {
        let i = n.filter((e) => e.type === r.name),
          a = { name: r.name, options: r.options, storage: r.storage, editor: t },
          o = Fd({
            ...e.reduce((e, t) => {
              let n = W(t, `extendMarkSchema`, a);
              return { ...e, ...(n ? n(r) : {}) };
            }, {}),
            inclusive: G(W(r, `inclusive`, a)),
            excludes: G(W(r, `excludes`, a)),
            group: G(W(r, `group`, a)),
            spanning: G(W(r, `spanning`, a)),
            code: G(W(r, `code`, a)),
            attrs: Object.fromEntries(i.map(Id)),
          }),
          s = G(W(r, `parseHTML`, a));
        s && (o.parseDOM = s.map((e) => Pd(e, i)));
        let c = W(r, `renderHTML`, a);
        return (c && (o.toDOM = (e) => c({ mark: e, HTMLAttributes: Md(e, i) })), [r.name, o]);
      }),
    ),
  });
}
function Rd(e) {
  let t = e.filter((t, n) => e.indexOf(t) !== n);
  return Array.from(new Set(t));
}
function zd(e) {
  return e.sort((e, t) => {
    let n = W(e, `priority`) || 100,
      r = W(t, `priority`) || 100;
    return n > r ? -1 : +(n < r);
  });
}
function Bd(e) {
  let t = zd(wd(e)),
    n = Rd(t.map((e) => e.name));
  return (
    n.length &&
      console.warn(
        `[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(`, `)}]. This can lead to issues.`,
      ),
    t
  );
}
function Vd(e, t, n) {
  let { from: r, to: i } = t,
    {
      blockSeparator: a = `

`,
      textSerializers: o = {},
    } = n || {},
    s = ``;
  return (
    e.nodesBetween(r, i, (e, n, c, l) => {
      e.isBlock && n > r && (s += a);
      let u = o?.[e.type.name];
      if (u) return (c && (s += u({ node: e, pos: n, parent: c, index: l, range: t })), !1);
      if (e.isText) {
        var d;
        s += e == null || (d = e.text) == null ? void 0 : d.slice(Math.max(r, n) - n, i - n);
      }
    }),
    s
  );
}
function Hd(e, t) {
  return Vd(e, { from: 0, to: e.content.size }, t);
}
function Ud(e) {
  return Object.fromEntries(
    Object.entries(e.nodes)
      .filter(([, e]) => e.spec.toText)
      .map(([e, t]) => [e, t.spec.toText]),
  );
}
function Wd(e, t) {
  let n = U(t, e.schema),
    { from: r, to: i } = e.selection,
    a = [];
  e.doc.nodesBetween(r, i, (e) => {
    a.push(e);
  });
  let o = a.reverse().find((e) => e.type.name === n.name);
  return o ? { ...o.attrs } : {};
}
function Gd(e, t) {
  let n = od(typeof t == `string` ? t : t.name, e.schema);
  return n === `node` ? Wd(e, t) : n === `mark` ? vd(e, t) : {};
}
function Kd(e, t = JSON.stringify) {
  let n = {};
  return e.filter((e) => {
    let r = t(e);
    return Object.prototype.hasOwnProperty.call(n, r) ? !1 : (n[r] = !0);
  });
}
function qd(e) {
  let t = Kd(e);
  return t.length === 1
    ? t
    : t.filter(
        (e, n) =>
          !t
            .filter((e, t) => t !== n)
            .some(
              (t) =>
                e.oldRange.from >= t.oldRange.from &&
                e.oldRange.to <= t.oldRange.to &&
                e.newRange.from >= t.newRange.from &&
                e.newRange.to <= t.newRange.to,
            ),
      );
}
function Jd(e) {
  let { mapping: t, steps: n } = e,
    r = [];
  return (
    t.maps.forEach((e, i) => {
      let a = [];
      if (e.ranges.length)
        e.forEach((e, t) => {
          a.push({ from: e, to: t });
        });
      else {
        let { from: e, to: t } = n[i];
        if (e === void 0 || t === void 0) return;
        a.push({ from: e, to: t });
      }
      a.forEach(({ from: e, to: n }) => {
        let a = t.slice(i).map(e, -1),
          o = t.slice(i).map(n),
          s = t.invert().map(a, -1),
          c = t.invert().map(o);
        r.push({ oldRange: { from: s, to: c }, newRange: { from: a, to: o } });
      });
    }),
    qd(r)
  );
}
function Yd(e, t, n) {
  let r = [];
  return (
    e === t
      ? n
          .resolve(e)
          .marks()
          .forEach((t) => {
            let i = Su(n.resolve(e), t.type);
            i && r.push({ mark: t, ...i });
          })
      : n.nodesBetween(e, t, (e, t) => {
          e &&
            e?.nodeSize !== void 0 &&
            r.push(...e.marks.map((n) => ({ from: t, to: t + e.nodeSize, mark: n })));
        }),
    r
  );
}
var Xd = (e, t, n, r = 20) => {
    let i = e.doc.resolve(n),
      a = r,
      o = null;
    for (; a > 0 && o === null;) {
      let e = i.node(a);
      e?.type.name === t ? (o = e) : --a;
    }
    return [o, a];
  },
  Zd = (e) => {
    let t = e.depth - 1;
    if (t < 0) return null;
    let n = e.index(t);
    return n === 0 ? null : e.node(t).child(n - 1);
  };
function Qd(e, t) {
  return t.nodes[e] || t.marks[e] || null;
}
function $d(e, t, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([n]) => {
      let r = e.find((e) => e.type === t && e.name === n);
      return r ? r.attribute.keepOnSplit : !1;
    }),
  );
}
var ef = (e, t = 500) => {
  let n = ``,
    r = e.parentOffset;
  return (
    e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, i, a) => {
      var o;
      let s =
        (o = e.type.spec).toText?.call(o, { node: e, pos: t, parent: i, index: a }) ||
        e.textContent ||
        `%leaf%`;
      n += e.isAtom && !e.isText ? s : s.slice(0, Math.max(0, r - t));
    }),
    n
  );
};
function tf(e, t, n = {}) {
  let { empty: r, ranges: i } = e.selection,
    a = t ? Cu(t, e.schema) : null;
  if (r)
    return !!(e.storedMarks || e.selection.$from.marks())
      .filter((e) => !a || a.name === e.type.name)
      .find((e) => yu(e.attrs, n, { strict: !1 }));
  let o = 0,
    s = [];
  if (
    (i.forEach(({ $from: t, $to: n }) => {
      let r = t.pos,
        i = n.pos;
      e.doc.nodesBetween(r, i, (e, t) => {
        if (a && e.inlineContent && !e.type.allowsMarkType(a)) return !1;
        if (!e.isText && !e.marks.length) return;
        let n = Math.max(r, t),
          c = Math.min(i, t + e.nodeSize),
          l = c - n;
        ((o += l), s.push(...e.marks.map((e) => ({ mark: e, from: n, to: c }))));
      });
    }),
    o === 0)
  )
    return !1;
  let c = s
      .filter((e) => !a || a.name === e.mark.type.name)
      .filter((e) => yu(e.mark.attrs, n, { strict: !1 }))
      .reduce((e, t) => e + t.to - t.from, 0),
    l = s
      .filter((e) => !a || (e.mark.type !== a && e.mark.type.excludes(a)))
      .reduce((e, t) => e + t.to - t.from, 0);
  return (c > 0 ? c + l : c) >= o;
}
function nf(e, t, n = {}) {
  if (!t) return td(e, null, n) || tf(e, null, n);
  let r = od(t, e.schema);
  return r === `node` ? td(e, t, n) : r === `mark` && tf(e, t, n);
}
var rf = (e, t) => {
    let { $from: n, $to: r, $anchor: i } = e.selection;
    if (t) {
      let n = Cd((e) => e.type.name === t)(e.selection);
      if (!n) return !1;
      let r = e.doc.resolve(n.pos + 1);
      return i.pos + 1 === r.end();
    }
    return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
  },
  af = (e) => {
    let { $from: t, $to: n } = e.selection;
    return !(t.parentOffset > 0 || t.pos !== n.pos);
  };
function of(e, t) {
  return Array.isArray(t) ? t.some((t) => (typeof t == `string` ? t : t.name) === e.name) : t;
}
function sf(e, t) {
  let { nodeExtensions: n } = Od(t),
    r = n.find((t) => t.name === e);
  if (!r) return !1;
  let i = G(W(r, `group`, { name: r.name, options: r.options, storage: r.storage }));
  return typeof i == `string` && i.split(` `).includes(`list`);
}
function cf(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
  if (n) {
    if (e.type.name === `hardBreak`) return !0;
    if (e.isText) return !/\S/.test(e.text ?? ``);
  }
  if (e.isText) return !e.text;
  if (e.isAtom || e.isLeaf) return !1;
  if (e.content.childCount === 0) return !0;
  if (t) {
    let r = !0;
    return (
      e.content.forEach((e) => {
        r !== !1 && (cf(e, { ignoreWhitespace: n, checkChildren: t }) || (r = !1));
      }),
      r
    );
  }
  return !1;
}
function lf(e) {
  return e instanceof z;
}
var uf = class e {
  constructor(e) {
    this.position = e;
  }
  static fromJSON(t) {
    return new e(t.position);
  }
  toJSON() {
    return { position: this.position };
  }
};
function df(e, t) {
  let n = t.mapping.mapResult(e.position);
  return { position: new uf(n.pos), mapResult: n };
}
function ff(e) {
  return new uf(e);
}
function pf(e, t, n) {
  let { selection: r } = t,
    i = null;
  if ((Eu(r) && (i = r.$cursor), i)) {
    let t = e.storedMarks ?? i.marks();
    return (
      i.parent.type.allowsMarkType(n) && (!!n.isInSet(t) || !t.some((e) => e.type.excludes(n)))
    );
  }
  let { ranges: a } = r;
  return a.some(({ $from: t, $to: r }) => {
    let i = t.depth === 0 && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
    return (
      e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
        if (i) return !1;
        if (e.isInline) {
          let t = !r || r.type.allowsMarkType(n),
            a = !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
          i = t && a;
        }
        return !i;
      }),
      i
    );
  });
}
var mf =
    (e, t = {}) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let { selection: a } = n,
        { empty: o, ranges: s } = a,
        c = Cu(e, r.schema);
      if (i) {
        if (o) {
          let e = vd(r, c);
          n.addStoredMark(c.create({ ...e, ...t }));
        } else
          s.forEach((e) => {
            let i = e.$from.pos,
              a = e.$to.pos;
            r.doc.nodesBetween(i, a, (e, r) => {
              let o = Math.max(r, i),
                s = Math.min(r + e.nodeSize, a);
              e.marks.find((e) => e.type === c)
                ? e.marks.forEach((e) => {
                    c === e.type && n.addMark(o, s, c.create({ ...e.attrs, ...t }));
                  })
                : n.addMark(o, s, c.create(t));
            });
          });
      }
      return pf(r, n, c);
    },
  hf =
    (e, t) =>
    ({ tr: n }) => (n.setMeta(e, t), !0),
  gf =
    (e, t = {}) =>
    ({ state: n, dispatch: r, chain: i }) => {
      let a = U(e, n.schema),
        o;
      return (
        n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs),
        a.isTextblock
          ? i()
              .command(({ commands: e }) => (ia(a, { ...o, ...t })(n) ? !0 : e.clearNodes()))
              .command(({ state: e }) => ia(a, { ...o, ...t })(e, r))
              .run()
          : (console.warn(`[tiptap warn]: Currently "setNode()" only supports text block nodes.`),
            !1)
      );
    },
  _f =
    (e) =>
    ({ tr: t, dispatch: n }) => {
      if (n) {
        let { doc: n } = t,
          r = Du(e, 0, n.content.size),
          i = z.create(n, r);
        t.setSelection(i);
      }
      return !0;
    },
  vf =
    (e, t) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let { selection: a } = r,
        o,
        s;
      return (
        typeof t == `number`
          ? ((o = t), (s = t))
          : t && `from` in t && `to` in t
            ? ((o = t.from), (s = t.to))
            : ((o = a.from), (s = a.to)),
        i &&
          n.doc.nodesBetween(o, s, (t, r) => {
            t.isText || n.setNodeMarkup(r, void 0, { ...t.attrs, dir: e });
          }),
        !0
      );
    },
  yf =
    (e) =>
    ({ tr: t, dispatch: n }) => {
      if (n) {
        let { doc: n } = t,
          { from: r, to: i } = typeof e == `number` ? { from: e, to: e } : e,
          a = R.atStart(n).from,
          o = R.atEnd(n).to,
          s = Du(r, a, o),
          c = Du(i, a, o),
          l = R.create(n, s, c);
        t.setSelection(l);
      }
      return !0;
    },
  bf =
    (e) =>
    ({ state: t, dispatch: n }) =>
      ga(U(e, t.schema))(t, n);
function xf(e, t) {
  let n = e.storedMarks || (e.selection.$to.parentOffset && e.selection.$from.marks());
  if (n) {
    let r = n.filter((e) => t?.includes(e.type.name));
    e.tr.ensureMarks(r);
  }
}
var Sf =
    ({ keepMarks: e = !0 } = {}) =>
    ({ tr: t, state: n, dispatch: r, editor: i }) => {
      let { selection: a, doc: o } = t,
        { $from: s, $to: c } = a,
        l = i.extensionManager.attributes,
        u = $d(l, s.node().type.name, s.node().attrs);
      if (a instanceof z && a.node.isBlock)
        return !s.parentOffset || !kr(o, s.pos)
          ? !1
          : (r && (e && xf(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()),
            !0);
      if (!s.parent.isBlock) return !1;
      let d = c.parentOffset === c.parent.content.size,
        f = s.depth === 0 ? void 0 : Hu(s.node(-1).contentMatchAt(s.indexAfter(-1))),
        p = d && f ? [{ type: f, attrs: u }] : void 0,
        m = kr(t.doc, t.mapping.map(s.pos), 1, p);
      if (
        (!p &&
          !m &&
          kr(t.doc, t.mapping.map(s.pos), 1, f ? [{ type: f }] : void 0) &&
          ((m = !0), (p = f ? [{ type: f, attrs: u }] : void 0)),
        r)
      ) {
        if (
          m &&
          (a instanceof R && t.deleteSelection(),
          t.split(t.mapping.map(s.pos), 1, p),
          f && !d && !s.parentOffset && s.parent.type !== f)
        ) {
          let e = t.mapping.map(s.before()),
            n = t.doc.resolve(e);
          s.node(-1).canReplaceWith(n.index(), n.index() + 1, f) &&
            t.setNodeMarkup(t.mapping.map(s.before()), f);
        }
        (e && xf(n, i.extensionManager.splittableMarks), t.scrollIntoView());
      }
      return m;
    },
  Cf =
    (e, t = {}) =>
    ({ tr: n, state: r, dispatch: i, editor: a }) => {
      let o = U(e, r.schema),
        { $from: s, $to: c } = r.selection,
        l = r.selection.node;
      if ((l && l.isBlock) || s.depth < 2 || !s.sameParent(c)) return !1;
      let u = s.node(-1);
      if (u.type !== o) return !1;
      let d = a.extensionManager.attributes;
      if (s.parent.content.size === 0 && s.node(-1).childCount === s.indexAfter(-1)) {
        if (s.depth === 2 || s.node(-3).type !== o || s.index(-2) !== s.node(-2).childCount - 1)
          return !1;
        if (i) {
          let e = P.empty,
            r = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
          for (let t = s.depth - r; t >= s.depth - 3; --t) e = P.from(s.node(t).copy(e));
          let i =
              s.indexAfter(-1) < s.node(-2).childCount
                ? 1
                : s.indexAfter(-2) < s.node(-3).childCount
                  ? 2
                  : 3,
            a = { ...$d(d, s.node().type.name, s.node().attrs), ...t },
            c = o.contentMatch.defaultType?.createAndFill(a) || void 0;
          e = e.append(P.from(o.createAndFill(null, c) || void 0));
          let l = s.before(s.depth - (r - 1));
          n.replace(l, s.after(-i), new I(e, 4 - r, 0));
          let u = -1;
          (n.doc.nodesBetween(l, n.doc.content.size, (e, t) => {
            if (u > -1) return !1;
            e.isTextblock && e.content.size === 0 && (u = t + 1);
          }),
            u > -1 && n.setSelection(R.near(n.doc.resolve(u))),
            n.scrollIntoView());
        }
        return !0;
      }
      let f = c.pos === s.end() ? u.contentMatchAt(0).defaultType : null,
        p = { ...$d(d, u.type.name, u.attrs), ...t },
        m = { ...$d(d, s.node().type.name, s.node().attrs), ...t };
      n.delete(s.pos, c.pos);
      let h = f
        ? [
            { type: o, attrs: p },
            { type: f, attrs: m },
          ]
        : [{ type: o, attrs: p }];
      if (!kr(n.doc, s.pos, 2)) return !1;
      if (i) {
        let { selection: e, storedMarks: t } = r,
          { splittableMarks: o } = a.extensionManager,
          c = t || (e.$to.parentOffset && e.$from.marks());
        if ((n.split(s.pos, 2, h).scrollIntoView(), !c || !i)) return !0;
        let l = c.filter((e) => o.includes(e.type.name));
        n.ensureMarks(l);
      }
      return !0;
    };
function wf(e) {
  return !e || e === `1` ? null : e;
}
function Tf(e, t) {
  return wf(e) === wf(t);
}
var Ef = (e, t) => {
    let n = Cd((e) => e.type === t)(e.selection);
    if (!n) return !0;
    let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
    if (r === void 0) return !0;
    let i = e.doc.nodeAt(r);
    return (
      !(n.node.type === i?.type && jr(e.doc, n.pos)) ||
        !Tf(n.node.attrs.type, i?.attrs.type) ||
        e.join(n.pos),
      !0
    );
  },
  Df = (e, t) => {
    let n = Cd((e) => e.type === t)(e.selection);
    if (!n) return !0;
    let r = e.doc.resolve(n.start).after(n.depth);
    if (r === void 0) return !0;
    let i = e.doc.nodeAt(r);
    return (
      !(n.node.type === i?.type && jr(e.doc, r)) ||
        !Tf(n.node.attrs.type, i?.attrs.type) ||
        e.join(r),
      !0
    );
  };
function Of(e) {
  let t = e.doc,
    n = t.firstChild;
  if (!n) return null;
  let r = t.resolve(1),
    i = t.resolve(n.nodeSize - 1);
  return R.between(r, i);
}
var kf =
    (e, t, n, r = {}) =>
    ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
      let { extensions: d, splittableMarks: f } = i.extensionManager,
        p = U(e, o.schema),
        m = U(t, o.schema),
        { selection: h, storedMarks: g } = o,
        { $from: _, $to: v } = h,
        y = _.blockRange(v),
        b = g || (h.$to.parentOffset && h.$from.marks());
      if (!y) return !1;
      let x = Cd((e) => sf(e.type.name, d))(h),
        S = h.from === 0 && h.to === o.doc.content.size,
        C = o.doc.content.content,
        w = C.length === 1 ? C[0] : null,
        T = S && w && sf(w.type.name, d) ? { node: w, pos: 0, depth: 0 } : null,
        E = x ?? T,
        D = !!x && y.depth >= 1 && y.depth - x.depth <= 1,
        ee = !!T;
      if ((D || ee) && E) {
        if (E.node.type === p)
          return S && ee
            ? c()
                .command(({ tr: e, dispatch: t }) => {
                  let n = Of(e);
                  return n ? (e.setSelection(n), t && t(e), !0) : !1;
                })
                .liftListItem(m)
                .run()
            : l.liftListItem(m);
        if (sf(E.node.type.name, d) && p.validContent(E.node.content))
          return c()
            .command(() => (a.setNodeMarkup(E.pos, p), !0))
            .command(() => Ef(a, p))
            .command(() => Df(a, p))
            .run();
      }
      return !n || !b || !s
        ? c()
            .command(() => (u().wrapInList(p, r) ? !0 : l.clearNodes()))
            .wrapInList(p, r)
            .command(() => Ef(a, p))
            .command(() => Df(a, p))
            .run()
        : c()
            .command(() => {
              let e = u().wrapInList(p, r),
                t = b.filter((e) => f.includes(e.type.name));
              return (a.ensureMarks(t), e ? !0 : l.clearNodes());
            })
            .wrapInList(p, r)
            .command(() => Ef(a, p))
            .command(() => Df(a, p))
            .run();
    },
  Af =
    (e, t = {}, n = {}) =>
    ({ state: r, commands: i }) => {
      let { extendEmptyMarkRange: a = !1 } = n,
        o = Cu(e, r.schema);
      return tf(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
    },
  jf =
    (e, t, n = {}) =>
    ({ state: r, commands: i }) => {
      let a = U(e, r.schema),
        o = U(t, r.schema),
        s = td(r, a, n),
        c;
      return (
        r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs),
        s ? i.setNode(o, c) : i.setNode(a, { ...c, ...n })
      );
    },
  Mf =
    (e, t = {}) =>
    ({ state: n, commands: r }) => {
      let i = U(e, n.schema);
      return td(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
    },
  Nf =
    () =>
    ({ state: e, dispatch: t }) => {
      let n = e.plugins;
      for (let r = 0; r < n.length; r += 1) {
        let i = n[r],
          a;
        if (i.spec.isInputRules && (a = i.getState(e))) {
          if (t) {
            let t = e.tr,
              n = a.transform;
            for (let e = n.steps.length - 1; e >= 0; --e) t.step(n.steps[e].invert(n.docs[e]));
            if (a.text) {
              let n = t.doc.resolve(a.from).marks();
              t.replaceWith(a.from, a.to, e.schema.text(a.text, n));
            } else t.delete(a.from, a.to);
          }
          return !0;
        }
      }
      return !1;
    },
  Pf =
    (e = {}) =>
    ({ tr: t, dispatch: n, editor: r }) => {
      let { ignoreClearable: i = !1 } = e,
        { selection: a } = t,
        { empty: o, ranges: s } = a;
      if (o) return !0;
      let { nonClearableMarks: c } = r.extensionManager;
      if (n) {
        let e = Object.values(r.schema.marks).filter((e) => i || !c.includes(e.name));
        s.forEach((n) => {
          for (let r of e) t.removeMark(n.$from.pos, n.$to.pos, r);
        });
      }
      return !0;
    },
  Ff =
    (e, t = {}) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let { extendEmptyMarkRange: a = !1 } = t,
        { selection: o } = n,
        s = Cu(e, r.schema),
        { $from: c, empty: l, ranges: u } = o;
      if (!i) return !0;
      if (l && a) {
        let { from: e, to: t } = o,
          r = Su(c, s, c.marks().find((e) => e.type === s)?.attrs);
        (r && ((e = r.from), (t = r.to)), n.removeMark(e, t, s));
      } else
        u.forEach((e) => {
          n.removeMark(e.$from.pos, e.$to.pos, s);
        });
      return (n.removeStoredMark(s), !0);
    },
  If =
    (e) =>
    ({ tr: t, state: n, dispatch: r }) => {
      let { selection: i } = n,
        a,
        o;
      return (
        typeof e == `number`
          ? ((a = e), (o = e))
          : e && `from` in e && `to` in e
            ? ((a = e.from), (o = e.to))
            : ((a = i.from), (o = i.to)),
        r &&
          t.doc.nodesBetween(a, o, (e, n) => {
            if (e.isText) return;
            let r = { ...e.attrs };
            (delete r.dir, t.setNodeMarkup(n, void 0, r));
          }),
        !0
      );
    },
  Lf =
    (e, t = {}) =>
    ({ tr: n, state: r, dispatch: i }) => {
      let a = null,
        o = null,
        s = od(typeof e == `string` ? e : e.name, r.schema);
      if (!s) return !1;
      (s === `node` && (a = U(e, r.schema)), s === `mark` && (o = Cu(e, r.schema)));
      let c = !1;
      return (
        n.selection.ranges.forEach((e) => {
          let s = e.$from.pos,
            l = e.$to.pos,
            u,
            d,
            f,
            p;
          (n.selection.empty
            ? r.doc.nodesBetween(s, l, (e, t) => {
                a &&
                  a === e.type &&
                  ((c = !0),
                  (f = Math.max(t, s)),
                  (p = Math.min(t + e.nodeSize, l)),
                  (u = t),
                  (d = e));
              })
            : r.doc.nodesBetween(s, l, (e, r) => {
                (r < s &&
                  a &&
                  a === e.type &&
                  ((c = !0),
                  (f = Math.max(r, s)),
                  (p = Math.min(r + e.nodeSize, l)),
                  (u = r),
                  (d = e)),
                  r >= s &&
                    r <= l &&
                    (a &&
                      a === e.type &&
                      ((c = !0), i && n.setNodeMarkup(r, void 0, { ...e.attrs, ...t })),
                    o &&
                      e.marks.length &&
                      e.marks.forEach((a) => {
                        if (o === a.type && ((c = !0), i)) {
                          let i = Math.max(r, s),
                            c = Math.min(r + e.nodeSize, l);
                          n.addMark(i, c, o.create({ ...a.attrs, ...t }));
                        }
                      })));
              }),
            d &&
              (u !== void 0 && i && n.setNodeMarkup(u, void 0, { ...d.attrs, ...t }),
              o &&
                d.marks.length &&
                d.marks.forEach((e) => {
                  o === e.type && i && n.addMark(f, p, o.create({ ...e.attrs, ...t }));
                })));
        }),
        c
      );
    },
  Rf = new V(`__tiptap_decorations__`),
  zf =
    (e) =>
    ({ tr: t, dispatch: n }) => (n && t.setMeta(Rf, { type: `force`, name: e }), !0),
  Bf =
    (e, t = {}) =>
    ({ state: n, dispatch: r }) =>
      ra(U(e, n.schema), t)(n, r),
  Vf =
    (e, t = {}) =>
    ({ state: n, dispatch: r }) =>
      ua(U(e, n.schema), t)(n, r),
  Hf = bt({
    blur: () => ru,
    clearContent: () => iu,
    clearNodes: () => au,
    command: () => ou,
    createParagraphNear: () => su,
    cut: () => cu,
    deleteCurrentNode: () => lu,
    deleteNode: () => uu,
    deleteRange: () => du,
    deleteSelection: () => hu,
    enter: () => gu,
    exitCode: () => _u,
    extendMarkRange: () => wu,
    first: () => Tu,
    focus: () => Mu,
    forEach: () => Nu,
    insertContent: () => Pu,
    insertContentAt: () => Vu,
    insertDefaultBlock: () => Uu,
    joinBackward: () => Ku,
    joinDown: () => Gu,
    joinForward: () => qu,
    joinItemBackward: () => Ju,
    joinItemForward: () => Yu,
    joinTextblockBackward: () => Xu,
    joinTextblockForward: () => Zu,
    joinUp: () => Wu,
    keyboardShortcut: () => ed,
    lift: () => nd,
    liftEmptyBlock: () => rd,
    liftListItem: () => id,
    newlineInCode: () => ad,
    resetAttributes: () => cd,
    scrollIntoView: () => ld,
    selectAll: () => ud,
    selectNodeBackward: () => dd,
    selectNodeForward: () => fd,
    selectParentNode: () => pd,
    selectTextblockEnd: () => md,
    selectTextblockStart: () => hd,
    setContent: () => _d,
    setMark: () => mf,
    setMeta: () => hf,
    setNode: () => gf,
    setNodeSelection: () => _f,
    setTextDirection: () => vf,
    setTextSelection: () => yf,
    sinkListItem: () => bf,
    splitBlock: () => Sf,
    splitListItem: () => Cf,
    toggleList: () => kf,
    toggleMark: () => Af,
    toggleNode: () => jf,
    toggleWrap: () => Mf,
    undoInputRule: () => Nf,
    unsetAllMarks: () => Pf,
    unsetMark: () => Ff,
    unsetTextDirection: () => If,
    updateAttributes: () => Lf,
    updateDecorations: () => zf,
    wrapIn: () => Bf,
    wrapInList: () => Vf,
  }),
  Uf = new WeakMap();
function Wf(e, t) {
  Uf.set(e, (Uf.get(e) ?? 0) + 1);
  try {
    return t();
  } finally {
    let t = (Uf.get(e) ?? 1) - 1;
    t > 0 ? Uf.set(e, t) : Uf.delete(e);
  }
}
function Gf(e) {
  return Uf.has(e);
}
var Kf = class {
    constructor() {
      this.callbacks = {};
    }
    on(e, t) {
      return (this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this);
    }
    emit(e, ...t) {
      let n = this.callbacks[e];
      return (n && n.forEach((e) => e.apply(this, t)), this);
    }
    off(e, t) {
      let n = this.callbacks[e];
      return (
        n && (t ? (this.callbacks[e] = n.filter((e) => e !== t)) : delete this.callbacks[e]), this
      );
    }
    once(e, t) {
      let n = (...r) => {
        (this.off(e, n), t.apply(this, r));
      };
      return this.on(e, n);
    }
    removeAllListeners() {
      this.callbacks = {};
    }
  },
  qf = typeof process < `u` && !1;
function Jf(e) {
  return e.kind === `widget`;
}
function Yf(e, t) {
  let n = [],
    r = new Set();
  for (let i of e) (i.kind === `widget` && Jf(i) && r.add(i.key), n.push(i.toPMDecoration(t)));
  return { decorations: n, widgetKeys: r };
}
function Xf(e, t, n) {
  let { decorations: r, widgetKeys: i } = Yf(t, n);
  return { set: H.create(e, r), widgetKeys: i };
}
function Zf({ position: e, from: t, to: n, docSize: r }) {
  return e < t ? !1 : e < n || (e === n && n === r);
}
function Qf({ decorations: e, from: t, to: n, docSize: r, extensionName: i, warnedExtensions: a }) {
  return e.filter((e) =>
    Zf({ position: e.anchor, from: t, to: n, docSize: r })
      ? !0
      : (e.anchor === n ||
          a.has(i) ||
          (a.add(i),
          console.warn(
            `[tiptap warn]: Extension "${i}" returned a decoration outside the requested range [${t}, ${n}). It was ignored.`,
          )),
        !1),
  );
}
function $f(e) {
  let t = e.spec?.key;
  return typeof t == `string` ? t : void 0;
}
function ep(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e.find()) {
    let e = $f(r);
    if (!e) continue;
    let i = r.spec.extensionName ?? `unknown`,
      a = t.get(e) ?? new Set();
    (a.add(i), t.set(e, a), n.set(e, (n.get(e) ?? 0) + 1));
  }
  return Array.from(t, ([e, t]) => ({ key: e, extensions: t })).filter(
    ({ key: e }) => (n.get(e) ?? 0) > 1,
  );
}
function tp(e) {
  return e.jsonID === `attr`;
}
function np(e) {
  let t = !1;
  if (
    (e.getMap().forEach(() => {
      t = !0;
    }),
    t || tp(e))
  )
    return !0;
  let n = e;
  return typeof n.from == `number` && typeof n.to == `number`;
}
function rp(e, t) {
  let n = null,
    r = 0,
    i = 0;
  for (let a = 0; a < e.childCount && !(i > t.to); a += 1) {
    let o = i + e.child(a).nodeSize;
    (o >= t.from && (n === null && (n = i), (r = o)), (i = o));
  }
  return n === null ? null : { from: n, to: r };
}
function ip(e, t) {
  if (e.steps.some((e) => !np(e))) return { type: `full` };
  let n = Jd(e).map(({ newRange: e }) => e);
  e.steps.forEach((t, r) => {
    if (!tp(t)) return;
    let i = e.mapping.slice(r);
    n.push({ from: i.map(t.pos, -1), to: i.map(t.pos + 1) });
  });
  let r = [];
  for (let e of n) {
    let n = rp(t, e);
    n && r.push(n);
  }
  r.sort((e, t) => e.from - t.from);
  let i = [];
  for (let e of r) {
    let t = i[i.length - 1];
    t && e.from <= t.to ? (t.to = Math.max(t.to, e.to)) : i.push({ ...e });
  }
  return { type: `ranges`, ranges: i };
}
function ap(e, t, n, r) {
  return e.map(t, n, {
    onRemove: (e) => {
      let t = e?.key;
      typeof t == `string` && r.delete(t);
    },
  });
}
function op(e, t, n) {
  let r = t.decorationSetsByExtension[e] ?? H.empty,
    i = new Set(t.widgetKeysByExtension[e] ?? []);
  return { set: ap(r, n.mapping, n.doc, i), widgetKeys: i };
}
function sp(e, t) {
  let n = Object.values(t).flatMap((e) => e.find());
  return H.create(e, n);
}
function cp(e) {
  let t = new Set();
  for (let n of Object.values(e)) for (let e of n) t.add(e);
  return t;
}
function lp(e, t) {
  switch (t.update ?? `document`) {
    case `document`:
      if (t.createInRange)
        throw Error(
          `[tiptap error]: Extension "${e}" provides createInRange() but does not use the "changedRanges" decoration update strategy.`,
        );
      return;
    case `changedRanges`:
      if (!t.createInRange)
        throw Error(
          `[tiptap error]: Extension "${e}" uses the "changedRanges" decoration update strategy but does not provide createInRange().`,
        );
      return;
    case `manual`:
      if (t.createInRange)
        throw Error(
          `[tiptap error]: Extension "${e}" uses the "manual" decoration update strategy, which is not compatible with createInRange(). createInRange() requires the "changedRanges" strategy.`,
        );
      if (t.shouldUpdate)
        throw Error(
          `[tiptap error]: Extension "${e}" cannot combine the "manual" decoration update strategy with shouldUpdate().`,
        );
      return;
    default:
      throw Error(
        `[tiptap error]: Extension "${e}" uses an unknown decoration update strategy. Expected "document", "changedRanges", or "manual".`,
      );
  }
}
function up(e, t, n) {
  return n ? !0 : e.update === `manual` ? !1 : e.shouldUpdate ? e.shouldUpdate(t) : t.tr.docChanged;
}
var dp = new Set(),
  fp = class {
    constructor(e) {
      ((this.warnedWidgetKeys = new Set()),
        (this.warnedOutOfRangeExtensions = new Set()),
        (this.handleBeforeTransaction = ({ nextState: e }) => {
          let t = Rf.getState(e);
          t && this.warnDuplicateWidgetKeys(t);
        }),
        (this.editor = e.editor),
        (this.entries = this.resolveEntries(e.entries)),
        this.entries.forEach(({ name: e, spec: t }) => lp(e, t)),
        (this.plugin = this.entries.length > 0 ? this.createPlugin() : null),
        this.editor.on(`beforeTransaction`, this.handleBeforeTransaction));
    }
    destroy() {
      this.editor.off(`beforeTransaction`, this.handleBeforeTransaction);
    }
    liveWidgetKeys() {
      return Rf.getState(this.editor.state)?.widgetKeys ?? dp;
    }
    get mountedView() {
      return this.editor.isDestroyed ? null : this.editor.view;
    }
    resolveEntries(e) {
      let t = [];
      for (let { name: n, addDecorations: r } of e) {
        let e = r();
        e && t.push({ name: n, spec: e });
      }
      return t;
    }
    createPlugin() {
      let { editor: e, entries: t } = this;
      return new B({
        key: Rf,
        state: {
          init: (e, n) => {
            let r = {},
              i = {};
            for (let { name: e, spec: a } of t) {
              let { set: t, widgetKeys: o } = this.buildFullSet(e, a, n);
              ((r[e] = t), (i[e] = o));
            }
            let a = {
              decorationSetsByExtension: r,
              widgetKeysByExtension: i,
              mergedDecorationSet: this.buildMergedSet(n.doc, r),
              widgetKeys: cp(i),
            };
            return (this.warnDuplicateWidgetKeys(a), a);
          },
          apply: (n, r, i, a) => {
            let o = n.getMeta(Rf),
              s = o?.type === `force` && !o.name,
              c = o?.type === `force` ? o.name : void 0,
              l = {},
              u = {},
              d = new Set();
            return (
              Wf(e, () => {
                for (let { name: o, spec: f } of t) {
                  let t = s || c === o;
                  if (!up(f, { editor: e, tr: n, oldState: i, newState: a }, t)) {
                    let e = op(o, r, n);
                    ((l[o] = e.set), (u[o] = e.widgetKeys));
                  } else if (f.update === `changedRanges` && n.docChanged && !t) {
                    let e = this.applyChangedRangesRecompute(o, f, r, n, a);
                    ((l[o] = e.set), (u[o] = e.widgetKeys), d.add(o));
                  } else {
                    let { set: e, widgetKeys: t } = this.buildFullSet(o, f, a);
                    ((l[o] = e), (u[o] = t), d.add(o));
                  }
                }
              }),
              d.size === 0 && !n.docChanged
                ? r
                : {
                    decorationSetsByExtension: l,
                    widgetKeysByExtension: u,
                    mergedDecorationSet: this.mergeAfterApply({
                      entries: t,
                      previous: r,
                      tr: n,
                      decorationSetsByExtension: l,
                      recomputedNames: d,
                    }),
                    widgetKeys: cp(u),
                  }
            );
          },
        },
        props: {
          decorations(e) {
            return Rf.getState(e)?.mergedDecorationSet ?? H.empty;
          },
        },
      });
    }
    applyChangedRangesRecompute(e, t, n, r, i) {
      let a = ip(r, i.doc);
      return a.type === `full`
        ? this.buildFullSet(e, t, i)
        : this.rebuildRanges(e, t, n, r, i, a.ranges);
    }
    rebuildRanges(e, t, n, r, i, a) {
      let o = n.decorationSetsByExtension[e] ?? H.empty,
        s = new Set(n.widgetKeysByExtension[e] ?? []),
        c = ap(o, r.mapping, r.doc, s),
        l = i.doc.content.size;
      for (let { from: n, to: r } of a) {
        let a = c.find(n, r).filter((e) => Zf({ position: e.from, from: n, to: r, docSize: l }));
        for (let e of a) {
          let t = $f(e);
          t && s.delete(t);
        }
        c = c.remove(a);
        let { decorations: o, widgetKeys: u } = Yf(
          Qf({
            decorations: this.runCreate(e, `createInRange`, () =>
              t.createInRange({
                editor: this.editor,
                state: i,
                view: this.mountedView,
                from: n,
                to: r,
              }),
            ),
            from: n,
            to: r,
            docSize: l,
            extensionName: e,
            warnedExtensions: this.warnedOutOfRangeExtensions,
          }),
          e,
        );
        c = c.add(i.doc, o);
        for (let e of u) s.add(e);
      }
      return { set: c, widgetKeys: s };
    }
    buildFullSet(e, t, n) {
      let r = this.runCreate(e, `create`, () =>
        t.create({ editor: this.editor, state: n, view: this.mountedView }),
      );
      return Xf(n.doc, r, e);
    }
    runCreate(e, t, n) {
      try {
        return n();
      } catch (n) {
        return (
          console.error(
            `[tiptap error]: Extension "${e}" threw in \`addDecorations().${t}()\`. Its decorations were dropped for this update.`,
            n,
          ),
          []
        );
      }
    }
    warnDuplicateWidgetKeys(e) {
      if (!qf) return;
      if (e.widgetKeys.size === 0) {
        this.warnedWidgetKeys.clear();
        return;
      }
      let t = ep(e.mergedDecorationSet),
        n = new Set(t.map(({ key: e }) => e));
      for (let { key: e, extensions: n } of t) {
        if (this.warnedWidgetKeys.has(e)) continue;
        let t = Array.from(n)
          .map((e) => `"${e}"`)
          .join(`, `);
        console.warn(
          `[tiptap warn]: Duplicate widget decoration key "${e}" in extension${n.size === 1 ? `` : `s`} ${t}. Widget decoration keys must be globally unique, otherwise ProseMirror misplaces the widget DOM. Use a stable, unique key (e.g. \`comment-\${id}\`).`,
        );
      }
      this.warnedWidgetKeys = n;
    }
    buildMergedSet(e, t) {
      let n = Object.keys(t);
      return n.length === 1 ? t[n[0]] : sp(e, t);
    }
    mergeAfterApply({
      entries: e,
      previous: t,
      tr: n,
      decorationSetsByExtension: r,
      recomputedNames: i,
    }) {
      return e.length === 1
        ? r[e[0].name]
        : i.size === 0
          ? t.mergedDecorationSet.map(n.mapping, n.doc)
          : sp(n.doc, r);
    }
  };
function pp(e, t) {
  let { selection: n } = e,
    { $from: r } = n;
  if (n instanceof z) {
    let e = r.index();
    return r.parent.canReplaceWith(e, e + 1, t);
  }
  let i = r.depth;
  for (; i >= 0;) {
    let e = r.index(i);
    if (r.node(i).contentMatchAt(e).matchType(t)) return !0;
    --i;
  }
  return !1;
}
function mp(e, t, n) {
  let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ``}]`);
  if (r !== null) return r;
  let i = document.createElement(`style`);
  return (
    t && i.setAttribute(`nonce`, t),
    i.setAttribute(`data-tiptap-style${n ? `-${n}` : ``}`, ``),
    (i.innerHTML = e),
    document.getElementsByTagName(`head`)[0].appendChild(i),
    i
  );
}
function hp(e) {
  return typeof e == `number`;
}
function gp(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function _p(e) {
  return (
    gp(e) === `Object` && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype
  );
}
function vp(e, t, n) {
  let r = e.split(`
`),
    i = [],
    a = ``,
    o = 0,
    s = t.baseIndentSize || 2;
  for (; o < r.length;) {
    let e = r[o],
      u = e.match(t.itemPattern);
    if (!u) {
      if (i.length > 0) break;
      if (e.trim() === ``) {
        ((o += 1), (a = `${a}${e}\n`));
        continue;
      }
      return;
    }
    let d = t.extractItemData(u),
      { indentLevel: f, mainContent: p } = d;
    a = `${a}${e}\n`;
    let m = [p];
    for (o += 1; o < r.length;) {
      var c;
      let e = r[o];
      if (e.trim() === ``) {
        var l;
        let t = r.slice(o + 1).findIndex((e) => e.trim() !== ``);
        if (t === -1) break;
        if (
          (((l = r[o + 1 + t].match(/^(\s*)/)) == null || (l = l[1]) == null ? void 0 : l.length) ||
            0) > f
        ) {
          (m.push(e), (a = `${a}${e}\n`), (o += 1));
          continue;
        }
        break;
      }
      if ((((c = e.match(/^(\s*)/)) == null || (c = c[1]) == null ? void 0 : c.length) || 0) > f)
        (m.push(e), (a = `${a}${e}\n`), (o += 1));
      else break;
    }
    let h,
      g = m.slice(1);
    if (g.length > 0) {
      let e = g.map((e) => e.slice(f + s)).join(`
`);
      e.trim() && (h = t.customNestedParser ? t.customNestedParser(e) : n.blockTokens(e));
    }
    let _ = t.createToken(d, h);
    i.push(_);
  }
  if (i.length !== 0) return { items: i, raw: a };
}
var yp = 4;
function bp(e) {
  let t = 0;
  for (let n of e) t = n === `	` ? t + yp - (t % yp) : t + 1;
  return t;
}
function xp(e, t, n, r, i) {
  if (!e || !Array.isArray(e.content)) return ``;
  let a = typeof n == `function` ? n(r) : n,
    [o, ...s] = e.content,
    c = `${a}${t.renderChildren([o])}`;
  return (
    s &&
      s.length > 0 &&
      s.forEach((e, n) => {
        let r = t.renderChild?.call(t, e, n + 1) ?? t.renderChildren([e]);
        if (r != null) {
          let n = (e) => {
              if (!i?.alignNestedToPrefix) return t.indent(e);
              let n = t.indent(``),
                r = bp(a);
              return (bp(n) >= r ? n : ` `.repeat(r)) + e;
            },
            o = r
              .split(`
`)
              .map((e) => n(e || ``)).join(`
`);
          c += e.type === `paragraph` ? `\n\n${o}` : `\n${o}`;
        }
      }),
    c
  );
}
function Sp(e, t) {
  let n = { ...e };
  return (
    _p(e) &&
      _p(t) &&
      Object.keys(t).forEach((r) => {
        _p(t[r]) && _p(e[r]) ? (n[r] = Sp(e[r], t[r])) : (n[r] = t[r]);
      }),
    n
  );
}
function Cp(e, t, n = {}) {
  let { state: r } = t,
    { doc: i, tr: a } = r,
    o = e;
  (i.descendants((t, r) => {
    let i = a.mapping.map(r),
      s = a.mapping.map(r) + t.nodeSize,
      c = null;
    if (
      (t.marks.forEach((e) => {
        if (e !== o) return !1;
        c = e;
      }),
      !c)
    )
      return;
    let l = !1;
    if (
      (Object.keys(n).forEach((e) => {
        n[e] !== c.attrs[e] && (l = !0);
      }),
      l)
    ) {
      let t = e.type.create({ ...e.attrs, ...n });
      (a.removeMark(i, s, e.type), a.addMark(i, s, t));
    }
  }),
    a.docChanged && t.view.dispatch(a));
}
var wp = class {
    constructor(e) {
      ((this.find = e.find), (this.handler = e.handler), (this.undoable = e.undoable ?? !0));
    }
  },
  Tp = (e, t) => {
    if (vu(t)) return t.exec(e);
    let n = t(e);
    if (!n) return null;
    let r = [n.text];
    return (
      (r.index = n.index),
      (r.input = e),
      (r.data = n.data),
      n.replaceWith &&
        (n.text.includes(n.replaceWith) ||
          console.warn(
            `[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".`,
          ),
        r.push(n.replaceWith)),
      r
    );
  };
function Ep(e) {
  let { editor: t, from: n, to: r, text: i, rules: a, plugin: o } = e,
    { view: s } = t;
  if (s.composing) return !1;
  let c = s.state.doc.resolve(n);
  if (c.parent.type.spec.code || (c.nodeBefore || c.nodeAfter)?.marks.find((e) => e.type.spec.code))
    return !1;
  let l = !1,
    u = ef(c) + i;
  return (
    a.forEach((e) => {
      if (l) return;
      let a = Tp(u, e.find);
      if (!a) return;
      let d = a[0].length - i.length;
      if (d > 0) {
        let e = c.parentOffset - d;
        if (e < 0 || c.parent.textBetween(e, c.parentOffset) !== a[0].slice(0, d)) return;
      }
      let f = s.state.tr,
        p = tu({ state: s.state, transaction: f }),
        m = { from: n - (a[0].length - i.length), to: r },
        { commands: h, chain: g, can: _ } = new nu({ editor: t, state: p });
      e.handler({ state: p, range: m, match: a, commands: h, chain: g, can: _ }) !== null &&
        f.steps.length &&
        (e.undoable && f.setMeta(o, { transform: f, from: n, to: r, text: i }),
        s.dispatch(f),
        (l = !0));
    }),
    l
  );
}
function Dp(e) {
  let { editor: t, rules: n } = e,
    r = new B({
      state: {
        init() {
          return null;
        },
        apply(e, i, a) {
          let o = e.getMeta(r);
          if (o) return o;
          let s = e.getMeta(`applyInputRules`);
          return (
            s &&
              setTimeout(() => {
                let { text: e } = s;
                e = typeof e == `string` ? e : Td(P.from(e), a.schema);
                let { from: i } = s,
                  o = i + e.length;
                Ep({ editor: t, from: i, to: o, text: e, rules: n, plugin: r });
              }),
            e.selectionSet || e.docChanged ? null : i
          );
        },
      },
      props: {
        handleTextInput(e, i, a, o) {
          return Ep({ editor: t, from: i, to: a, text: o, rules: n, plugin: r });
        },
        handleDOMEvents: {
          compositionend: (e) => (
            setTimeout(() => {
              let { $cursor: i } = e.state.selection;
              i && Ep({ editor: t, from: i.pos, to: i.pos, text: ``, rules: n, plugin: r });
            }),
            !1
          ),
        },
        handleKeyDown(e, i) {
          if (i.key !== `Enter`) return !1;
          let { $cursor: a } = e.state.selection;
          return a
            ? Ep({
                editor: t,
                from: a.pos,
                to: a.pos,
                text: `
`,
                rules: n,
                plugin: r,
              })
            : !1;
        },
      },
      isInputRules: !0,
    });
  return r;
}
var Op = class {
    constructor(e = {}) {
      ((this.type = `extendable`),
        (this.parent = null),
        (this.child = null),
        (this.name = ``),
        (this.config = { name: this.name }),
        (this.config = { ...this.config, ...e }),
        (this.name = this.config.name));
    }
    get options() {
      return { ...G(W(this, `addOptions`, { name: this.name })) };
    }
    get storage() {
      return { ...G(W(this, `addStorage`, { name: this.name, options: this.options })) };
    }
    configure(e = {}) {
      let t = this.extend({ ...this.config, addOptions: () => Sp(this.options, e) });
      return ((t.name = this.name), (t.parent = this.parent), (this.child = null), t);
    }
    extend(e = {}) {
      let t = new this.constructor({ ...this.config, ...e });
      return (
        (t.parent = this), (this.child = t), (t.name = `name` in e ? e.name : t.parent.name), t
      );
    }
  },
  kp = class e extends Op {
    constructor(...e) {
      (super(...e), (this.type = `mark`));
    }
    static create(t = {}) {
      let n = typeof t == `function` ? t() : t;
      return new e(n);
    }
    static handleExit({ editor: e, mark: t }) {
      let { tr: n } = e.state,
        r = e.state.selection.$from;
      if (r.pos === r.end()) {
        let i = r.marks();
        if (!i.find((e) => e?.type.name === t.name)) return !1;
        let a = i.find((e) => e?.type.name === t.name);
        return (a && n.removeStoredMark(a), n.insertText(` `, r.pos), e.view.dispatch(n), !0);
      }
      return !1;
    }
    configure(e) {
      return super.configure(e);
    }
    extend(e) {
      let t = typeof e == `function` ? e() : e;
      return super.extend(t);
    }
  },
  Ap = class {
    constructor(e) {
      ((this.find = e.find), (this.handler = e.handler));
    }
  },
  jp = (e, t, n) => {
    if (vu(t)) return [...e.matchAll(t)];
    let r = t(e, n);
    return r
      ? r.map((t) => {
          let n = [t.text];
          return (
            (n.index = t.index),
            (n.input = e),
            (n.data = t.data),
            t.replaceWith &&
              (t.text.includes(t.replaceWith) ||
                console.warn(
                  `[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".`,
                ),
              n.push(t.replaceWith)),
            n
          );
        })
      : [];
  };
function Mp(e) {
  let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e,
    { commands: c, chain: l, can: u } = new nu({ editor: t, state: n }),
    d = [];
  return (
    n.doc.nodesBetween(r, i, (e, t) => {
      var f;
      if (
        ((f = e.type) != null && (f = f.spec) != null && f.code) ||
        !(e.isText || e.isTextblock || e.isInline)
      )
        return;
      let p = e.content?.size ?? e.nodeSize ?? 0,
        m = Math.max(r, t),
        h = Math.min(i, t + p);
      m >= h ||
        jp(e.isText ? e.text || `` : e.textBetween(m - t, h - t, void 0, `￼`), a.find, o).forEach(
          (e) => {
            if (e.index === void 0) return;
            let t = m + e.index + 1,
              r = t + e[0].length,
              i = { from: n.tr.mapping.map(t), to: n.tr.mapping.map(r) },
              f = a.handler({
                state: n,
                range: i,
                match: e,
                commands: c,
                chain: l,
                can: u,
                pasteEvent: o,
                dropEvent: s,
              });
            d.push(f);
          },
        );
    }),
    d.every((e) => e !== null)
  );
}
var Np = null,
  Pp = (e) => {
    var t;
    let n = new ClipboardEvent(`paste`, { clipboardData: new DataTransfer() });
    return ((t = n.clipboardData) == null || t.setData(`text/html`, e), n);
  };
function Fp(e) {
  let { editor: t, rules: n } = e,
    r = null,
    i = !1,
    a = !1,
    o = typeof ClipboardEvent < `u` ? new ClipboardEvent(`paste`) : null,
    s;
  try {
    s = typeof DragEvent < `u` ? new DragEvent(`drop`) : null;
  } catch {
    s = null;
  }
  let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
    let c = e.tr,
      l = tu({ state: e, transaction: c });
    if (
      Mp({
        editor: t,
        state: l,
        from: Math.max(n - 1, 0),
        to: r.b - 1,
        rule: i,
        pasteEvent: a,
        dropEvent: s,
      }) &&
      c.steps.length
    ) {
      try {
        s = typeof DragEvent < `u` ? new DragEvent(`drop`) : null;
      } catch {
        s = null;
      }
      return ((o = typeof ClipboardEvent < `u` ? new ClipboardEvent(`paste`) : null), c);
    }
  };
  return n.map(
    (e) =>
      new B({
        view(e) {
          let n = (n) => {
              ((r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null),
                r && (Np = t));
            },
            i = () => {
              Np &&= null;
            };
          return (
            window.addEventListener(`dragstart`, n),
            window.addEventListener(`dragend`, i),
            {
              destroy() {
                (window.removeEventListener(`dragstart`, n),
                  window.removeEventListener(`dragend`, i));
              },
            }
          );
        },
        props: {
          handleDOMEvents: {
            drop: (e, t) => {
              if (((a = r === e.dom.parentElement), (s = t), !a)) {
                let e = Np;
                e?.isEditable &&
                  setTimeout(() => {
                    let t = e.state.selection;
                    t && e.commands.deleteRange({ from: t.from, to: t.to });
                  }, 10);
              }
              return !1;
            },
            paste: (e, t) => {
              let n = t.clipboardData?.getData(`text/html`);
              return ((o = t), (i = !!n?.includes(`data-pm-slice`)), !1);
            },
          },
        },
        appendTransaction: (t, n, r) => {
          let s = t[0],
            l = s.getMeta(`uiEvent`) === `paste` && !i,
            u = s.getMeta(`uiEvent`) === `drop` && !a,
            d = s.getMeta(`applyPasteRules`),
            f = !!d;
          if (!l && !u && !f) return;
          if (f) {
            let { text: t } = d;
            t = typeof t == `string` ? t : Td(P.from(t), r.schema);
            let { from: n } = d,
              i = n + t.length,
              a = Pp(t);
            return c({ rule: e, state: r, from: n, to: { b: i }, pasteEvt: a });
          }
          let p = n.doc.content.findDiffStart(r.doc.content),
            m = n.doc.content.findDiffEnd(r.doc.content);
          if (hp(p) && m && p !== m.b) return c({ rule: e, state: r, from: p, to: m, pasteEvt: o });
        },
      }),
  );
}
var Ip = class {
  constructor(e, t) {
    ((this.splittableMarks = []),
      (this.nonClearableMarks = []),
      (this.decorationManager = null),
      (this.editor = t),
      (this.baseExtensions = e),
      (this.extensions = Bd(e)),
      (this.schema = Ld(this.extensions, t)),
      this.setupExtensions());
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      let n = W(t, `addCommands`, {
        name: t.name,
        options: t.options,
        storage: this.editor.extensionStorage[t.name],
        editor: this.editor,
        type: Qd(t.name, this.schema),
      });
      return n ? { ...e, ...n() } : e;
    }, {});
  }
  get plugins() {
    let { editor: e } = this,
      t = zd([...this.extensions].reverse()).flatMap((t) => {
        let n = {
            name: t.name,
            options: t.options,
            storage: this.editor.extensionStorage[t.name],
            editor: e,
            type: Qd(t.name, this.schema),
          },
          r = [],
          i = W(t, `addKeyboardShortcuts`, n),
          a = {};
        if (
          (t.type === `mark` &&
            W(t, `exitable`, n) &&
            (a.ArrowRight = () => kp.handleExit({ editor: e, mark: t })),
          i)
        ) {
          let t = Object.fromEntries(
            Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]),
          );
          a = { ...a, ...t };
        }
        let o = $l(a);
        r.push(o);
        let s = W(t, `addInputRules`, n);
        if (of(t, e.options.enableInputRules) && s) {
          let t = s();
          if (t && t.length) {
            let n = Dp({ editor: e, rules: t }),
              i = Array.isArray(n) ? n : [n];
            r.push(...i);
          }
        }
        let c = W(t, `addPasteRules`, n);
        if (of(t, e.options.enablePasteRules) && c) {
          let t = c();
          if (t && t.length) {
            let n = Fp({ editor: e, rules: t });
            r.push(...n);
          }
        }
        let l = W(t, `addProseMirrorPlugins`, n);
        if (l) {
          let e = l();
          r.push(...e);
        }
        return r;
      }),
      n = this.createDecorationPlugin();
    return (n && t.push(n), t);
  }
  createDecorationPlugin() {
    var e;
    let { editor: t } = this;
    (e = this.decorationManager) == null || e.destroy();
    let n = [];
    return (
      this.extensions.forEach((e) => {
        let r = W(e, `addDecorations`, {
          name: e.name,
          options: e.options,
          storage: this.editor.extensionStorage[e.name],
          editor: t,
          type: Qd(e.name, this.schema),
        });
        r && n.push({ name: e.name, addDecorations: r });
      }),
      (this.decorationManager = new fp({ editor: t, entries: n })),
      this.decorationManager.plugin
    );
  }
  get attributes() {
    return kd(this.extensions);
  }
  get nodeViews() {
    let { editor: e } = this,
      { nodeExtensions: t } = Od(this.extensions);
    return Object.fromEntries(
      t
        .filter((e) => !!W(e, `addNodeView`))
        .map((t) => {
          let n = this.attributes.filter((e) => e.type === t.name),
            r = W(t, `addNodeView`, {
              name: t.name,
              options: t.options,
              storage: this.editor.extensionStorage[t.name],
              editor: e,
              type: U(t.name, this.schema),
            });
          if (!r) return [];
          let i = r();
          return i
            ? [
                t.name,
                (r, a, o, s, c) => {
                  let l = Md(r, n);
                  return i({
                    node: r,
                    view: a,
                    getPos: o,
                    decorations: s,
                    innerDecorations: c,
                    editor: e,
                    extension: t,
                    HTMLAttributes: l,
                  });
                },
              ]
            : [];
        }),
    );
  }
  dispatchTransaction(e) {
    let { editor: t } = this;
    return zd([...this.extensions].reverse()).reduceRight((e, n) => {
      let r = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: Qd(n.name, this.schema),
        },
        i = W(n, `dispatchTransaction`, r);
      return i
        ? (t) => {
            i.call(r, { transaction: t, next: e });
          }
        : e;
    }, e);
  }
  transformPastedHTML(e) {
    let { editor: t } = this;
    return zd([...this.extensions]).reduce(
      (e, n) => {
        let r = {
            name: n.name,
            options: n.options,
            storage: this.editor.extensionStorage[n.name],
            editor: t,
            type: Qd(n.name, this.schema),
          },
          i = W(n, `transformPastedHTML`, r);
        return i
          ? (t, n) => {
              let a = e(t, n);
              return i.call(r, a);
            }
          : e;
      },
      e || ((e) => e),
    );
  }
  get markViews() {
    let { editor: e } = this,
      { markExtensions: t } = Od(this.extensions);
    return Object.fromEntries(
      t
        .filter((e) => !!W(e, `addMarkView`))
        .map((t) => {
          let n = this.attributes.filter((e) => e.type === t.name),
            r = W(t, `addMarkView`, {
              name: t.name,
              options: t.options,
              storage: this.editor.extensionStorage[t.name],
              editor: e,
              type: Cu(t.name, this.schema),
            });
          return r
            ? [
                t.name,
                (i, a, o) => {
                  let s = Md(i, n);
                  return r()({
                    mark: i,
                    view: a,
                    inline: o,
                    editor: e,
                    extension: t,
                    HTMLAttributes: s,
                    updateAttributes: (t) => {
                      Cp(i, e, t);
                    },
                  });
                },
              ]
            : [];
        }),
    );
  }
  destroy() {
    var e;
    ((e = this.decorationManager) == null || e.destroy(),
      this.extensions.forEach((e) => {
        let t = e;
        for (; t.parent;) {
          let e = t.parent;
          (e.child === t && (e.child = null), (t = e));
        }
      }),
      (this.extensions = []),
      (this.baseExtensions = []),
      (this.decorationManager = null),
      (this.schema = null),
      (this.editor = null));
  }
  setupExtensions() {
    let e = this.extensions;
    ((this.editor.extensionStorage = Object.fromEntries(e.map((e) => [e.name, e.storage]))),
      e.forEach((e) => {
        let t = {
          name: e.name,
          options: e.options,
          storage: this.editor.extensionStorage[e.name],
          editor: this.editor,
          type: Qd(e.name, this.schema),
        };
        e.type === `mark` &&
          ((G(W(e, `keepOnSplit`, t)) ?? !0) && this.splittableMarks.push(e.name),
          (G(W(e, `clearable`, t)) ?? !0) || this.nonClearableMarks.push(e.name));
        let n = W(e, `onBeforeCreate`, t),
          r = W(e, `onCreate`, t),
          i = W(e, `onUpdate`, t),
          a = W(e, `onSelectionUpdate`, t),
          o = W(e, `onTransaction`, t),
          s = W(e, `onFocus`, t),
          c = W(e, `onBlur`, t),
          l = W(e, `onDestroy`, t);
        (n && this.editor.on(`beforeCreate`, n),
          r && this.editor.on(`create`, r),
          i && this.editor.on(`update`, i),
          a && this.editor.on(`selectionUpdate`, a),
          o && this.editor.on(`transaction`, o),
          s && this.editor.on(`focus`, s),
          c && this.editor.on(`blur`, c),
          l && this.editor.on(`destroy`, l));
      }));
  }
};
((Ip.resolve = Bd), (Ip.sort = zd), (Ip.flatten = wd));
var q = class e extends Op {
    constructor(...e) {
      (super(...e), (this.type = `extension`));
    }
    static create(t = {}) {
      let n = typeof t == `function` ? t() : t;
      return new e(n);
    }
    configure(e) {
      return super.configure(e);
    }
    extend(e) {
      let t = typeof e == `function` ? e() : e;
      return super.extend(t);
    }
  },
  Lp = q.create({
    name: `clipboardTextSerializer`,
    addOptions() {
      return { blockSeparator: void 0 };
    },
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`clipboardTextSerializer`),
          props: {
            clipboardTextSerializer: () => {
              let { editor: e } = this,
                { state: t, schema: n } = e,
                { doc: r, selection: i } = t,
                a = Ud(n),
                { blockSeparator: o } = this.options,
                s = { ...(o === void 0 ? {} : { blockSeparator: o }), textSerializers: a };
              return [...i.ranges]
                .sort((e, t) => e.$from.pos - t.$from.pos)
                .map(({ $from: e, $to: t }) => Vd(r, { from: e.pos, to: t.pos }, s))
                .join(
                  o ??
                    `

`,
                );
            },
          },
        }),
      ];
    },
  }),
  Rp = q.create({
    name: `commands`,
    addCommands() {
      return { ...Hf };
    },
  }),
  zp = q.create({
    name: `delete`,
    onUpdate({ transaction: e, appendedTransactions: t }) {
      var n;
      let r = () => {
        var n, r;
        if (
          ((n = this.editor.options.coreExtensionOptions) == null ||
          (n = n.delete) == null ||
          (r = n.filterTransaction) == null
            ? void 0
            : r.call(n, e)) ??
          e.getMeta(`y-sync$`)
        )
          return;
        let i = yd(e.before, [e, ...t]);
        Jd(i).forEach((t) => {
          i.mapping.mapResult(t.oldRange.from).deletedAfter &&
            i.mapping.mapResult(t.oldRange.to).deletedBefore &&
            i.before.nodesBetween(t.oldRange.from, t.oldRange.to, (n, r) => {
              let a = r + n.nodeSize - 2,
                o = t.oldRange.from <= r && a <= t.oldRange.to;
              this.editor.emit(`delete`, {
                type: `node`,
                node: n,
                from: r,
                to: a,
                newFrom: i.mapping.map(r),
                newTo: i.mapping.map(a),
                deletedRange: t.oldRange,
                newRange: t.newRange,
                partial: !o,
                editor: this.editor,
                transaction: e,
                combinedTransform: i,
              });
            });
        });
        let a = i.mapping;
        i.steps.forEach((t, n) => {
          if (t instanceof sr) {
            let r = a.slice(n).map(t.from, -1),
              o = a.slice(n).map(t.to),
              s = a.invert().map(r, -1),
              c = a.invert().map(o),
              l = r > 0 && i.doc.nodeAt(r - 1)?.marks.some((e) => e.eq(t.mark)),
              u = i.doc.nodeAt(o)?.marks.some((e) => e.eq(t.mark));
            this.editor.emit(`delete`, {
              type: `mark`,
              mark: t.mark,
              from: t.from,
              to: t.to,
              deletedRange: { from: s, to: c },
              newRange: { from: r, to: o },
              partial: !!(u || l),
              editor: this.editor,
              transaction: e,
              combinedTransform: i,
            });
          }
        });
      };
      (((n = this.editor.options.coreExtensionOptions) == null || (n = n.delete) == null
        ? void 0
        : n.async) ?? !0)
        ? setTimeout(r, 0)
        : r();
    },
  }),
  Bp = q.create({
    name: `drop`,
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`tiptapDrop`),
          props: {
            handleDrop: (e, t, n, r) => {
              this.editor.emit(`drop`, { editor: this.editor, event: t, slice: n, moved: r });
            },
          },
        }),
      ];
    },
  }),
  Vp = q.create({
    name: `editable`,
    addProseMirrorPlugins() {
      return [
        new B({ key: new V(`editable`), props: { editable: () => this.editor.options.editable } }),
      ];
    },
  }),
  Hp = new V(`focusEvents`),
  Up = q.create({
    name: `focusEvents`,
    addProseMirrorPlugins() {
      let { editor: e } = this;
      return [
        new B({
          key: Hp,
          props: {
            handleDOMEvents: {
              focus: (t, n) => {
                e.isFocused = !0;
                let r = e.state.tr.setMeta(`focus`, { event: n }).setMeta(`addToHistory`, !1);
                return (t.dispatch(r), !1);
              },
              blur: (t, n) => {
                e.isFocused = !1;
                let r = e.state.tr.setMeta(`blur`, { event: n }).setMeta(`addToHistory`, !1);
                return (t.dispatch(r), !1);
              },
            },
          },
        }),
      ];
    },
  }),
  Wp = q.create({
    name: `keymap`,
    addKeyboardShortcuts() {
      let e = () =>
          this.editor.commands.first(({ commands: e }) => [
            () => e.undoInputRule(),
            () =>
              e.command(({ tr: t }) => {
                let { selection: n, doc: r } = t,
                  { empty: i, $anchor: a } = n,
                  { pos: o, parent: s } = a,
                  c = a.parent.isTextblock && o > 0 ? t.doc.resolve(o - 1) : a,
                  l = c.parent.type.spec.isolating,
                  u = a.pos - a.parentOffset,
                  d = l && c.parent.childCount === 1 ? u === a.pos : L.atStart(r).from === o;
                return !i ||
                  !s.type.isTextblock ||
                  s.textContent.length ||
                  !d ||
                  (d && a.parent.type.name === `paragraph`)
                  ? !1
                  : e.clearNodes();
              }),
            () => e.deleteSelection(),
            () => e.joinBackward(),
            () => e.selectNodeBackward(),
          ]),
        t = () =>
          this.editor.commands.first(({ commands: e }) => [
            () => e.deleteSelection(),
            () => e.deleteCurrentNode(),
            () => e.joinForward(),
            () => e.selectNodeForward(),
          ]),
        n = {
          Enter: () =>
            this.editor.commands.first(({ commands: e }) => [
              () => e.newlineInCode(),
              () => e.createParagraphNear(),
              () => e.liftEmptyBlock(),
              () => e.splitBlock(),
            ]),
          "Mod-Enter": () => this.editor.commands.exitCode(),
          Backspace: e,
          "Mod-Backspace": e,
          "Shift-Backspace": e,
          Delete: t,
          "Mod-Delete": t,
          "Mod-a": () => this.editor.commands.selectAll(),
        },
        r = { ...n },
        i = {
          ...n,
          "Ctrl-h": e,
          "Alt-Backspace": e,
          "Ctrl-d": t,
          "Ctrl-Alt-Backspace": t,
          "Alt-Delete": t,
          "Alt-d": t,
          "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
          "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
        };
      return Au() || Qu() ? i : r;
    },
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`clearDocument`),
          appendTransaction: (e, t, n) => {
            if (e.some((e) => e.getMeta(`composition`))) return;
            let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc),
              i = e.some((e) => e.getMeta(`preventClearDocument`));
            if (!r || i) return;
            let { empty: a, from: o, to: s } = t.selection,
              c = L.atStart(t.doc).from,
              l = L.atEnd(t.doc).to;
            if (a || o !== c || s !== l || !cf(n.doc)) return;
            let u = n.tr,
              d = tu({ state: n, transaction: u }),
              { commands: f } = new nu({ editor: this.editor, state: d });
            if ((f.clearNodes(), u.steps.length)) return u;
          },
        }),
      ];
    },
  }),
  Gp = q.create({
    name: `paste`,
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`tiptapPaste`),
          props: {
            handlePaste: (e, t, n) => {
              this.editor.emit(`paste`, { editor: this.editor, event: t, slice: n });
            },
          },
        }),
      ];
    },
  }),
  Kp = q.create({
    name: `tabindex`,
    addOptions() {
      return { value: void 0 };
    },
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`tabindex`),
          props: {
            attributes: () =>
              !this.editor.isEditable && this.options.value === void 0
                ? {}
                : { tabindex: this.options.value ?? `0` },
          },
        }),
      ];
    },
  }),
  qp = q.create({
    name: `textDirection`,
    addOptions() {
      return { direction: void 0 };
    },
    addGlobalAttributes() {
      if (!this.options.direction) return [];
      let { nodeExtensions: e } = Od(this.extensions);
      return [
        {
          types: e.filter((e) => e.name !== `text`).map((e) => e.name),
          attributes: {
            dir: {
              default: this.options.direction,
              parseHTML: (e) => {
                let t = e.getAttribute(`dir`);
                return t && (t === `ltr` || t === `rtl` || t === `auto`)
                  ? t
                  : this.options.direction;
              },
              renderHTML: (e) => (e.dir ? { dir: e.dir } : {}),
            },
          },
        },
      ];
    },
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`textDirection`),
          props: {
            attributes: () => {
              let e = this.options.direction;
              return e ? { dir: e } : {};
            },
          },
        }),
      ];
    },
  }),
  Jp = !1;
function Yp(e) {
  if (Jp) return;
  Jp = !0;
  let t;
  try {
    t = ur.fromJSON(e, { from: 0, to: 0 }).slice.content;
  } catch {
    return;
  }
  t instanceof P ||
    console.warn(
      `[tiptap warn]: prosemirror-model is loaded more than once. Wrapping and splitting nodes will fail. Deduplicate it in your lock file, or alias it to a single copy in your bundler.`,
    );
}
var Xp = class e {
    get name() {
      return this.node.type.name;
    }
    constructor(e, t, n = !1, r = null) {
      ((this.currentNode = null),
        (this.actualDepth = null),
        (this.isBlock = n),
        (this.resolvedPos = e),
        (this.editor = t),
        (this.currentNode = r));
    }
    get node() {
      return this.currentNode || this.resolvedPos.node();
    }
    get element() {
      return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
      return this.actualDepth ?? this.resolvedPos.depth;
    }
    get pos() {
      return this.resolvedPos.pos;
    }
    get content() {
      return this.node.content;
    }
    set content(e) {
      let t = this.from,
        n = this.to;
      if (this.isBlock) {
        if (this.content.size === 0) {
          console.error(
            `You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`,
          );
          return;
        }
        ((t = this.from + 1), (n = this.to - 1));
      }
      this.editor.commands.insertContentAt({ from: t, to: n }, e);
    }
    get attributes() {
      return this.node.attrs;
    }
    get textContent() {
      return this.node.textContent;
    }
    get size() {
      return this.node.nodeSize;
    }
    get from() {
      return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
      return { from: this.from, to: this.to };
    }
    get to() {
      return this.isBlock
        ? this.pos + this.size
        : this.resolvedPos.end(this.resolvedPos.depth) + +!this.node.isText;
    }
    get parent() {
      if (this.depth === 0) return null;
      let t = this.resolvedPos.start(this.resolvedPos.depth - 1),
        n = this.resolvedPos.doc.resolve(t);
      return new e(n, this.editor);
    }
    get before() {
      let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
      return (
        t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)),
        new e(t, this.editor)
      );
    }
    get after() {
      let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
      return (
        t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)),
        new e(t, this.editor)
      );
    }
    get children() {
      let t = [];
      return (
        this.node.content.forEach((n, r) => {
          let i = n.isBlock && !n.isTextblock,
            a = n.isAtom && !n.isText,
            o = n.isInline,
            s = this.pos + r + +!a;
          if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
          let c = this.resolvedPos.doc.resolve(s);
          if (!i && !o && c.depth <= this.depth) return;
          let l = new e(c, this.editor, i, i || o ? n : null);
          (i && (l.actualDepth = this.depth + 1), t.push(l));
        }),
        t
      );
    }
    get firstChild() {
      return this.children[0] || null;
    }
    get lastChild() {
      let e = this.children;
      return e[e.length - 1] || null;
    }
    closest(e, t = {}) {
      let n = null,
        r = this.parent;
      for (; r && !n;) {
        if (r.node.type.name === e) {
          if (Object.keys(t).length > 0) {
            let e = r.node.attrs,
              n = Object.keys(t);
            for (let r = 0; r < n.length; r += 1) {
              let i = n[r];
              if (e[i] !== t[i]) break;
            }
          } else n = r;
        }
        r = r.parent;
      }
      return n;
    }
    querySelector(e, t = {}) {
      return this.querySelectorAll(e, t, !0)[0] || null;
    }
    querySelectorAll(e, t = {}, n = !1) {
      let r = [];
      if (!this.children || this.children.length === 0) return r;
      let i = Object.keys(t);
      return (
        this.children.forEach((a) => {
          (n && r.length > 0) ||
            (a.node.type.name === e && i.every((e) => t[e] === a.node.attrs[e]) && r.push(a),
            !(n && r.length > 0) && (r = r.concat(a.querySelectorAll(e, t, n))));
        }),
        r
      );
    }
    setAttribute(e) {
      let { tr: t } = this.editor.state;
      (t.setNodeMarkup(this.from, void 0, { ...this.node.attrs, ...e }),
        this.editor.view.dispatch(t));
    }
  },
  Zp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`,
  Qp = class extends Kf {
    constructor(e = {}) {
      (super(),
        (this.css = null),
        (this.className = `tiptap`),
        (this.editorView = null),
        (this.isFocused = !1),
        (this.destroyed = !1),
        (this.isInitialized = !1),
        (this.extensionStorage = {}),
        (this.instanceId = Math.random().toString(36).slice(2, 9)),
        (this.hasWarnedStaleDecorationRead = !1),
        (this.options = {
          element: typeof document < `u` ? document.createElement(`div`) : null,
          content: ``,
          injectCSS: !0,
          injectNonce: void 0,
          extensions: [],
          autofocus: !1,
          editable: !0,
          textDirection: void 0,
          editorProps: {},
          parseOptions: {},
          coreExtensionOptions: {},
          enableInputRules: !0,
          enablePasteRules: !0,
          enableCoreExtensions: !0,
          enableContentCheck: !1,
          emitContentError: !1,
          onBeforeCreate: () => null,
          onCreate: () => null,
          onMount: () => null,
          onUnmount: () => null,
          onUpdate: () => null,
          onSelectionUpdate: () => null,
          onTransaction: () => null,
          onFocus: () => null,
          onBlur: () => null,
          onDestroy: () => null,
          onContentError: ({ error: e }) => {
            throw e;
          },
          onPaste: () => null,
          onDrop: () => null,
          onDelete: () => null,
          enableExtensionDispatchTransaction: !0,
        }),
        (this.isCapturingTransaction = !1),
        (this.capturedTransaction = null),
        (this.utils = { getUpdatedPosition: df, createMappablePosition: ff }),
        this.setOptions(e),
        this.createExtensionManager(),
        this.createCommandManager(),
        this.createSchema(),
        this.on(`beforeCreate`, this.options.onBeforeCreate),
        this.emit(`beforeCreate`, { editor: this }),
        this.on(`mount`, this.options.onMount),
        this.on(`unmount`, this.options.onUnmount),
        this.on(`contentError`, this.options.onContentError),
        this.on(`create`, this.options.onCreate),
        this.on(`update`, this.options.onUpdate),
        this.on(`selectionUpdate`, this.options.onSelectionUpdate),
        this.on(`transaction`, this.options.onTransaction),
        this.on(`focus`, this.options.onFocus),
        this.on(`blur`, this.options.onBlur),
        this.on(`destroy`, this.options.onDestroy),
        this.on(`drop`, ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)),
        this.on(`paste`, ({ event: e, slice: t }) => this.options.onPaste(e, t)),
        this.on(`delete`, this.options.onDelete));
      let t = this.createDoc();
      if (!this.editorState) {
        let e = Ou(t, this.options.autofocus);
        this.editorState = Si.create({ doc: t, schema: this.schema, selection: e || void 0 });
      }
      (Yp(this.schema), this.options.element && this.mount(this.options.element));
    }
    mount(e) {
      if (typeof document > `u`)
        throw Error(
          `[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.`,
        );
      (this.createView(e),
        this.emit(`mount`, { editor: this }),
        this.css && !document.head.contains(this.css) && document.head.appendChild(this.css),
        window.setTimeout(() => {
          this.isDestroyed ||
            (this.options.autofocus !== !1 &&
              this.options.autofocus !== null &&
              this.commands.focus(this.options.autofocus),
            this.emit(`create`, { editor: this }),
            (this.isInitialized = !0));
        }, 0));
    }
    unmount() {
      if (this.editorView) {
        this.editorState = this.editorView.state;
        let e = this.editorView.dom;
        (e?.editor && delete e.editor, this.editorView.destroy());
      }
      if (
        ((this.editorView = null),
        (this.isInitialized = !1),
        this.css && !document.querySelectorAll(`.${this.className}`).length)
      )
        try {
          typeof this.css.remove == `function`
            ? this.css.remove()
            : this.css.parentNode && this.css.parentNode.removeChild(this.css);
        } catch (e) {
          console.warn(`Failed to remove CSS element:`, e);
        }
      ((this.css = null), this.emit(`unmount`, { editor: this }));
    }
    get storage() {
      return this.extensionStorage;
    }
    get commands() {
      return this.commandManager.commands;
    }
    chain() {
      return this.commandManager ? this.commandManager.chain() : nu.createFakeChain();
    }
    can() {
      return this.commandManager ? this.commandManager.can() : nu.createFallbackCan();
    }
    injectCSS() {
      this.options.injectCSS &&
        typeof document < `u` &&
        (this.css = mp(Zp, this.options.injectNonce));
    }
    setOptions(e = {}) {
      ((this.options = { ...this.options, ...e }),
        this.editorView &&
          this.state &&
          !this.isDestroyed &&
          (this.options.editorProps && this.view.setProps(this.options.editorProps),
          this.view.updateState(this.state)));
    }
    setEditable(e, t = !0) {
      (this.setOptions({ editable: e }),
        t &&
          this.emit(`update`, {
            editor: this,
            transaction: this.state.tr,
            appendedTransactions: [],
          }));
    }
    get isEditable() {
      return this.options.editable && this.view && this.view.editable;
    }
    get view() {
      return this.editorView
        ? this.editorView
        : new Proxy(
            {
              state: this.editorState,
              updateState: (e) => {
                this.editorState = e;
              },
              dispatch: (e) => {
                this.dispatchTransaction(e);
              },
              composing: !1,
              dragging: null,
              editable: !0,
              isDestroyed: !1,
            },
            {
              get: (e, t) => {
                if (this.editorView) return this.editorView[t];
                if (t === `state`) return this.editorState;
                if (t in e) return Reflect.get(e, t);
                throw Error(
                  `[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`,
                );
              },
            },
          );
    }
    get state() {
      return (
        qf &&
          !this.hasWarnedStaleDecorationRead &&
          Gf(this) &&
          ((this.hasWarnedStaleDecorationRead = !0),
          console.warn(
            "[tiptap warn]: `editor.state` was read while decoration `create()` was running. It returns the pre-transaction document. Use the `state` argument passed to `create()` instead. Helpers like `editor.isActive()` read `editor.state` too, so pass `state` to their standalone versions instead of calling them on the editor.",
          )),
        this.editorView && (this.editorState = this.view.state),
        this.editorState
      );
    }
    registerPlugin(e, t) {
      let n = Ed(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e],
        r = this.state.reconfigure({ plugins: n });
      return (this.view.updateState(r), r);
    }
    unregisterPlugin(e) {
      if (this.isDestroyed) return;
      let t = this.state.plugins,
        n = t;
      if (
        ([].concat(e).forEach((e) => {
          let t = typeof e == `string` ? `${e}$` : e.key;
          n = n.filter((e) => !e.key.startsWith(t));
        }),
        t.length === n.length)
      )
        return;
      let r = this.state.reconfigure({ plugins: n });
      return (this.view.updateState(r), r);
    }
    createExtensionManager() {
      var e, t;
      let n = [
        ...(this.options.enableCoreExtensions
          ? [
              Vp,
              Lp.configure({
                blockSeparator:
                  (e = this.options.coreExtensionOptions) == null ||
                  (e = e.clipboardTextSerializer) == null
                    ? void 0
                    : e.blockSeparator,
              }),
              Rp,
              Up,
              Wp,
              Kp.configure({
                value:
                  (t = this.options.coreExtensionOptions) == null || (t = t.tabindex) == null
                    ? void 0
                    : t.value,
              }),
              Bp,
              Gp,
              zp,
              qp.configure({ direction: this.options.textDirection }),
            ].filter(
              (e) =>
                typeof this.options.enableCoreExtensions != `object` ||
                this.options.enableCoreExtensions[e.name] !== !1,
            )
          : []),
        ...this.options.extensions,
      ].filter((e) => [`extension`, `node`, `mark`].includes(e?.type));
      this.extensionManager = new Ip(n, this);
    }
    createCommandManager() {
      this.commandManager = new nu({ editor: this });
    }
    createSchema() {
      this.schema = this.extensionManager.schema;
    }
    createDoc() {
      let e;
      try {
        e = gd(this.options.content, this.schema, this.options.parseOptions, {
          errorOnInvalidContent: this.options.enableContentCheck,
        });
      } catch (e) {
        if (
          !(e instanceof Error) ||
          ![
            `[tiptap error]: Invalid JSON content`,
            `[tiptap error]: Invalid HTML content`,
          ].includes(e.message)
        )
          throw e;
        let t = gd(this.options.content, this.schema, this.options.parseOptions, {
          errorOnInvalidContent: !1,
        });
        return (
          (this.editorState = Si.create({
            doc: t,
            schema: this.schema,
            selection: Ou(t, this.options.autofocus) || void 0,
          })),
          this.emit(`contentError`, {
            editor: this,
            error: e,
            disableCollaboration: () => {
              (`collaboration` in this.storage &&
                typeof this.storage.collaboration == `object` &&
                this.storage.collaboration &&
                (this.storage.collaboration.isDisabled = !0),
                (this.options.extensions = this.options.extensions.filter(
                  (e) => e.name !== `collaboration`,
                )),
                this.createExtensionManager());
            },
          }),
          this.editorState.doc
        );
      }
      return e;
    }
    createView(e) {
      let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options,
        r = t.dispatchTransaction || this.dispatchTransaction.bind(this),
        i = n ? this.extensionManager.dispatchTransaction(r) : r,
        a = t.transformPastedHTML,
        o = this.extensionManager.transformPastedHTML(a);
      this.editorView = new Nl(e, {
        ...t,
        attributes: { role: `textbox`, ...t?.attributes },
        dispatchTransaction: i,
        transformPastedHTML: o,
        state: this.editorState,
        markViews: this.extensionManager.markViews,
        nodeViews: this.extensionManager.nodeViews,
      });
      let s = this.state.reconfigure({ plugins: this.extensionManager.plugins });
      (this.view.updateState(s), this.prependClass(), this.injectCSS());
      let c = this.view.dom;
      c.editor = this;
    }
    createNodeViews() {
      this.view.isDestroyed ||
        this.view.setProps({
          markViews: this.extensionManager.markViews,
          nodeViews: this.extensionManager.nodeViews,
        });
    }
    prependClass() {
      this.view.dom.className = `${this.className} ${this.view.dom.className}`;
    }
    captureTransaction(e) {
      ((this.isCapturingTransaction = !0), e(), (this.isCapturingTransaction = !1));
      let t = this.capturedTransaction;
      return ((this.capturedTransaction = null), t);
    }
    dispatchTransaction(e) {
      if (this.view.isDestroyed) return;
      if (this.isCapturingTransaction) {
        if (!this.capturedTransaction) {
          this.capturedTransaction = e;
          return;
        }
        e.steps.forEach((e) => this.capturedTransaction?.step(e));
        return;
      }
      let { state: t, transactions: n } = this.state.applyTransaction(e),
        r = !this.state.selection.eq(t.selection),
        i = n.includes(e),
        a = this.state;
      if ((this.emit(`beforeTransaction`, { editor: this, transaction: e, nextState: t }), !i))
        return;
      (this.view.updateState(t),
        this.emit(`transaction`, {
          editor: this,
          transaction: e,
          appendedTransactions: n.slice(1),
        }),
        r && this.emit(`selectionUpdate`, { editor: this, transaction: e }));
      let o = n.findLast((e) => e.getMeta(`focus`) || e.getMeta(`blur`)),
        s = o?.getMeta(`focus`),
        c = o?.getMeta(`blur`);
      (s && this.emit(`focus`, { editor: this, event: s.event, transaction: o }),
        c && this.emit(`blur`, { editor: this, event: c.event, transaction: o }),
        !(e.getMeta(`preventUpdate`) || !n.some((e) => e.docChanged) || a.doc.eq(t.doc)) &&
          this.emit(`update`, { editor: this, transaction: e, appendedTransactions: n.slice(1) }));
    }
    getAttributes(e) {
      return Gd(this.state, e);
    }
    isActive(e, t) {
      let n = typeof e == `string` ? e : null,
        r = typeof e == `string` ? t : e;
      return nf(this.state, n, r);
    }
    getJSON() {
      return this.state.doc.toJSON();
    }
    getHTML() {
      return Td(this.state.doc.content, this.schema);
    }
    getText(e) {
      let {
        blockSeparator: t = `

`,
        textSerializers: n = {},
      } = e || {};
      return Hd(this.state.doc, {
        blockSeparator: t,
        textSerializers: { ...Ud(this.schema), ...n },
      });
    }
    get isEmpty() {
      return cf(this.state.doc);
    }
    destroy() {
      this.destroyed ||
        ((this.destroyed = !0),
        this.emit(`destroy`),
        this.unmount(),
        this.removeAllListeners(),
        this.extensionManager.destroy(),
        (this.extensionManager = null),
        (this.schema = null),
        (this.commandManager = null),
        (this.extensionStorage = {}));
    }
    get isDestroyed() {
      return this.editorView?.isDestroyed ?? !0;
    }
    $node(e, t) {
      return this.$doc?.querySelector(e, t) || null;
    }
    $nodes(e, t) {
      return this.$doc?.querySelectorAll(e, t) || null;
    }
    $pos(e) {
      let t = this.state.doc.resolve(e),
        n = e > 0 && t.nodeAfter && !t.nodeAfter.isText && t.nodeAfter.isAtom ? t.nodeAfter : null;
      return new Xp(t, this, !1, n);
    }
    get $doc() {
      return this.$pos(0);
    }
  };
function $p(e) {
  return new wp({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      let i = G(e.getAttributes, void 0, r);
      if (i === !1 || i === null) return null;
      let { tr: a } = t,
        o = r[r.length - 1],
        s = r[0];
      if (o) {
        let r = s.search(/\S/),
          c = n.from + s.indexOf(o),
          l = c + o.length;
        if (
          Yd(n.from, n.to, t.doc)
            .filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type))
            .filter((e) => e.to > c).length
        )
          return null;
        (l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c));
        let u = n.from + r + o.length;
        (a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type));
      }
    },
    undoable: e.undoable,
  });
}
function em(e) {
  return new wp({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      let i = G(e.getAttributes, void 0, r) || {},
        { tr: a } = t,
        o = n.from,
        s = n.to,
        c = e.type.create(i);
      if (r[1]) {
        let e = o + r[0].lastIndexOf(r[1]);
        e > s ? (e = s) : (s = e + r[1].length);
        let t = r[0][r[0].length - 1];
        (a.insertText(t, o + r[0].length - 1), a.replaceWith(e, s, c));
      } else if (r[0]) {
        let t = e.type.isInline ? o : o - 1;
        a.insert(t, e.type.create(i)).delete(a.mapping.map(o), a.mapping.map(s));
      }
      a.scrollIntoView();
    },
    undoable: e.undoable,
  });
}
function tm(e) {
  return new wp({
    find: e.find,
    handler: ({ state: t, range: n, match: r }) => {
      let i = t.doc.resolve(n.from),
        a = G(e.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), e.type)) return null;
      t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, a);
    },
    undoable: e.undoable,
  });
}
function nm(e) {
  return new wp({
    find: e.find,
    handler: ({ state: t, range: n, match: r, chain: i }) => {
      let a = G(e.getAttributes, void 0, r) || {},
        o = t.tr.delete(n.from, n.to),
        s = o.doc.resolve(n.from).blockRange(),
        c = s && yr(s, e.type, a);
      if (!c) return null;
      if ((o.wrap(s, c), e.keepMarks && e.editor)) {
        let { selection: n, storedMarks: r } = t,
          { splittableMarks: i } = e.editor.extensionManager,
          a = r || (n.$to.parentOffset && n.$from.marks());
        if (a) {
          let e = a.filter((e) => i.includes(e.type.name));
          o.ensureMarks(e);
        }
      }
      if (e.keepAttributes) {
        let t =
          e.type.name === `bulletList` || e.type.name === `orderedList` ? `listItem` : `taskList`;
        i().updateAttributes(t, a).run();
      }
      let l = o.doc.resolve(n.from - 1).nodeBefore;
      l &&
        l.type === e.type &&
        jr(o.doc, n.from - 1) &&
        (!e.joinPredicate || e.joinPredicate(r, l)) &&
        o.join(n.from - 1);
    },
    undoable: e.undoable,
  });
}
var rm = class e extends Op {
    constructor(...e) {
      (super(...e), (this.type = `node`));
    }
    static create(t = {}) {
      let n = typeof t == `function` ? t() : t;
      return new e(n);
    }
    configure(e) {
      return super.configure(e);
    }
    extend(e) {
      let t = typeof e == `function` ? e() : e;
      return super.extend(t);
    }
  },
  im = class {
    constructor(e, t, n) {
      ((this.isDragging = !1),
        (this.component = e),
        (this.editor = t.editor),
        (this.options = { stopEvent: null, ignoreMutation: null, ...n }),
        (this.extension = t.extension),
        (this.node = t.node),
        (this.decorations = t.decorations),
        (this.innerDecorations = t.innerDecorations),
        (this.view = t.view),
        (this.HTMLAttributes = t.HTMLAttributes),
        (this.getPos = () => {
          try {
            return t.getPos();
          } catch {
            return;
          }
        }),
        this.mount());
    }
    mount() {}
    get dom() {
      return this.editor.view.dom;
    }
    get contentDOM() {
      return null;
    }
    onDragStart(e) {
      let { view: t } = this.editor,
        n = e.target,
        r =
          n.nodeType === 3
            ? n.parentElement?.closest(`[data-drag-handle]`)
            : n.closest(`[data-drag-handle]`);
      if (!this.dom || this.contentDOM?.contains(n) || !r) return;
      let i = 0,
        a = 0;
      if (this.dom !== r) {
        let t = this.dom.getBoundingClientRect(),
          n = r.getBoundingClientRect(),
          o = e.offsetX ?? e.nativeEvent?.offsetX,
          s = e.offsetY ?? e.nativeEvent?.offsetY;
        ((i = n.x - t.x + o), (a = n.y - t.y + s));
      }
      let o = this.dom.cloneNode(!0);
      try {
        let e = this.dom.getBoundingClientRect();
        ((o.style.width = `${Math.round(e.width)}px`),
          (o.style.height = `${Math.round(e.height)}px`),
          (o.style.boxSizing = `border-box`),
          (o.style.pointerEvents = `none`));
      } catch {}
      let s = null;
      try {
        var c;
        ((s = document.createElement(`div`)),
          (s.style.position = `absolute`),
          (s.style.top = `-9999px`),
          (s.style.left = `-9999px`),
          (s.style.pointerEvents = `none`),
          s.appendChild(o),
          document.body.appendChild(s),
          (c = e.dataTransfer) == null || c.setDragImage(o, i, a));
      } finally {
        s &&
          setTimeout(() => {
            try {
              s?.remove();
            } catch {}
          }, 0);
      }
      let l = this.getPos();
      if (typeof l != `number`) return;
      let u = z.create(t.state.doc, l),
        d = t.state.tr.setSelection(u);
      t.dispatch(d);
    }
    stopEvent(e) {
      if (!this.dom) return !1;
      if (typeof this.options.stopEvent == `function`) return this.options.stopEvent({ event: e });
      let t = e.target;
      if (!this.dom.contains(t) || this.contentDOM?.contains(t)) return !1;
      let n = e.type.startsWith(`drag`),
        r = e.type === `dragover` || e.type === `dragenter`,
        i = e.type === `drop`;
      if (
        ([`INPUT`, `BUTTON`, `SELECT`, `TEXTAREA`].includes(t.tagName) || t.isContentEditable) &&
        !i &&
        !n
      )
        return !0;
      let { isEditable: a } = this.editor,
        { isDragging: o } = this,
        s = !!this.node.type.spec.draggable,
        c = z.isSelectable(this.node),
        l = e.type === `copy`,
        u = e.type === `paste`,
        d = e.type === `cut`,
        f = e.type === `mousedown`;
      if (
        (!s && c && n && e.target === this.dom && e.preventDefault(),
        s && n && !o && e.target === this.dom)
      )
        return (e.preventDefault(), !1);
      if (s && a && !o && f) {
        let e = t.closest(`[data-drag-handle]`);
        e &&
          (this.dom === e || this.dom.contains(e)) &&
          ((this.isDragging = !0),
          document.addEventListener(
            `dragend`,
            () => {
              this.isDragging = !1;
            },
            { once: !0 },
          ),
          document.addEventListener(
            `drop`,
            () => {
              this.isDragging = !1;
            },
            { once: !0 },
          ),
          document.addEventListener(
            `mouseup`,
            () => {
              this.isDragging = !1;
            },
            { once: !0 },
          ));
      }
      return !(o || r || i || l || u || d || (f && c));
    }
    ignoreMutation(e) {
      return !this.dom || !this.contentDOM
        ? !0
        : typeof this.options.ignoreMutation == `function`
          ? this.options.ignoreMutation({ mutation: e })
          : this.node.isLeaf || this.node.isAtom
            ? !0
            : e.type === `selection` ||
                (this.contentDOM.contains(e.target) &&
                  e.type === `childList` &&
                  (Au() || ku()) &&
                  this.editor.isFocused &&
                  [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every(
                    (e) => e.isContentEditable,
                  ))
              ? !1
              : (this.contentDOM === e.target && e.type === `attributes`) ||
                !this.contentDOM.contains(e.target);
    }
    updateAttributes(e) {
      this.editor.commands.command(({ tr: t }) => {
        let n = this.getPos();
        return (
          typeof n == `number` && (t.setNodeMarkup(n, void 0, { ...this.node.attrs, ...e }), !0)
        );
      });
    }
    deleteNode() {
      let e = this.getPos();
      if (typeof e != `number`) return;
      let t = e + this.node.nodeSize;
      this.editor.commands.deleteRange({ from: e, to: t });
    }
  };
function am(e) {
  return new Ap({
    find: e.find,
    handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
      let a = G(e.getAttributes, void 0, r, i);
      if (a === !1 || a === null) return null;
      let { tr: o } = t,
        s = r[r.length - 1],
        c = r[0],
        l = n.to;
      if (s) {
        let i = c.search(/\S/),
          u = n.from + c.indexOf(s),
          d = u + s.length;
        if (
          Yd(n.from, n.to, t.doc)
            .filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type))
            .filter((e) => e.to > u).length
        )
          return null;
        (d < n.to && o.delete(d, n.to),
          u > n.from && o.delete(n.from + i, u),
          (l = n.from + i + s.length),
          o.addMark(n.from + i, l, e.type.create(a || {})),
          (r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length) ||
            o.removeStoredMark(e.type));
      }
    },
  });
}
var J = e(t(), 1),
  Y = e(r(), 1),
  om = e(d(), 1),
  sm = v(),
  { getOwnPropertyNames: cm, getOwnPropertySymbols: lm } = Object,
  { hasOwnProperty: um } = Object.prototype;
function dm(e, t) {
  return function (n, r, i) {
    return e(n, r, i) && t(n, r, i);
  };
}
function fm(e) {
  return function (t, n, r) {
    if (!t || !n || typeof t != `object` || typeof n != `object`) return e(t, n, r);
    let { cache: i } = r,
      a = i.get(t),
      o = i.get(n);
    if (a && o) return a === n && o === t;
    (i.set(t, n), i.set(n, t));
    let s = e(t, n, r);
    return (i.delete(t), i.delete(n), s);
  };
}
function pm(e) {
  return e?.[Symbol.toStringTag];
}
function mm(e) {
  return cm(e).concat(lm(e));
}
var hm = Object.hasOwn || ((e, t) => um.call(e, t));
function gm(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var _m = `__v`,
  vm = `__o`,
  ym = `_owner`,
  bm = typeof Float16Array < `u`,
  { getOwnPropertyDescriptor: xm, keys: Sm } = Object;
function Cm(e, t) {
  return e.byteLength === t.byteLength && Im(new Uint8Array(e), new Uint8Array(t));
}
function wm(e, t, n) {
  let r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
  return !0;
}
function Tm(e, t) {
  return (
    e.byteLength === t.byteLength &&
    Im(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function Em(e, t) {
  return gm(e.getTime(), t.getTime());
}
function Dm(e, t, n) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.stack === t.stack &&
    n.equals(e.cause, t.cause, `cause`, `cause`, e, t, n)
  );
}
function Om(e, t) {
  return e === t;
}
function km(e, t, n) {
  let r = e.size;
  if (r !== t.size) return !1;
  if (!r) return !0;
  let i = Array(r),
    a = e.entries(),
    o,
    s,
    c = 0;
  for (; (o = a.next()) && !o.done;) {
    let r = t.entries(),
      a = !1,
      l = 0;
    for (; (s = r.next()) && !s.done;) {
      if (i[l]) {
        l++;
        continue;
      }
      let r = o.value,
        u = s.value;
      if (n.equals(r[0], u[0], c, l, e, t, n) && n.equals(r[1], u[1], r[0], u[0], e, t, n)) {
        a = i[l] = !0;
        break;
      }
      l++;
    }
    if (!a) return !1;
    c++;
  }
  return !0;
}
var Am = gm;
function jm(e, t, n) {
  let r = Sm(e),
    i = r.length;
  if (Sm(t).length !== i) return !1;
  for (; i-- > 0;) if (!Bm(e, t, n, r[i])) return !1;
  return !0;
}
function Mm(e, t, n) {
  let r = mm(e),
    i = r.length;
  if (mm(t).length !== i) return !1;
  let a, o, s;
  for (; i-- > 0;)
    if (
      ((a = r[i]),
      !Bm(e, t, n, a) ||
        ((o = xm(e, a)),
        (s = xm(t, a)),
        (o || s) &&
          (!o ||
            !s ||
            o.configurable !== s.configurable ||
            o.enumerable !== s.enumerable ||
            o.writable !== s.writable)))
    )
      return !1;
  return !0;
}
function Nm(e, t) {
  return gm(e.valueOf(), t.valueOf());
}
function Pm(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Fm(e, t, n) {
  let r = e.size;
  if (r !== t.size) return !1;
  if (!r) return !0;
  let i = Array(r),
    a = e.values(),
    o,
    s;
  for (; (o = a.next()) && !o.done;) {
    let r = t.values(),
      a = !1,
      c = 0;
    for (; (s = r.next()) && !s.done;) {
      if (!i[c] && n.equals(o.value, s.value, o.value, s.value, e, t, n)) {
        a = i[c] = !0;
        break;
      }
      c++;
    }
    if (!a) return !1;
  }
  return !0;
}
function Im(e, t) {
  let n = e.length;
  if (t.length !== n || e.byteOffset !== t.byteOffset) return !1;
  if (e instanceof Float64Array || e instanceof Float32Array || (bm && e instanceof Float16Array)) {
    for (; n-- > 0;) if (e[n] !== t[n] && (e[n] === e[n] || t[n] === t[n])) return !1;
    return !0;
  }
  for (; n-- > 0;) if (e[n] !== t[n]) return !1;
  return !0;
}
function Lm(e, t) {
  return (
    e.href === t.href ||
    (e.protocol === t.protocol &&
      e.username === t.username &&
      e.password === t.password &&
      e.host === t.host &&
      e.pathname === t.pathname &&
      e.hash === t.hash &&
      Rm(e.searchParams, t.searchParams))
  );
}
function Rm(e, t) {
  let n = e.toString(),
    r = t.toString();
  return n === r || zm(n) === zm(r);
}
function zm(e) {
  return e.split(`&`).sort().join(`&`);
}
function Bm(e, t, n, r) {
  return (r === ym || r === vm || r === _m) && (e.$$typeof || t.$$typeof)
    ? !0
    : hm(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var Vm = `[object ArrayBuffer]`,
  Hm = `[object Arguments]`,
  Um = `[object Boolean]`,
  Wm = `[object DataView]`,
  Gm = `[object Date]`,
  Km = `[object Error]`,
  qm = `[object Map]`,
  Jm = `[object Number]`,
  Ym = `[object Object]`,
  Xm = `[object RegExp]`,
  Zm = `[object Set]`,
  Qm = `[object String]`,
  $m = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  eh = `[object URL]`,
  th = Object.prototype.toString;
function nh({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: n,
  areDatesEqual: r,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: s,
  areObjectsEqual: c,
  arePrimitiveWrappersEqual: l,
  areRegExpsEqual: u,
  areSetsEqual: d,
  areTypedArraysEqual: f,
  areUrlsEqual: p,
  unknownTagComparators: m,
}) {
  return function (h, g, _) {
    if (h === g) return !0;
    if (h == null || g == null) return !1;
    let v = typeof h;
    if (v !== typeof g) return !1;
    if (v !== `object`) return v === `number` ? s(h, g, _) : v === `function` && a(h, g, _);
    let y = h.constructor;
    if (y !== g.constructor) return !1;
    if (y === Object) return c(h, g, _);
    if (Array.isArray(h)) return t(h, g, _);
    if (y === Date) return r(h, g, _);
    if (y === RegExp) return u(h, g, _);
    if (y === Map) return o(h, g, _);
    if (y === Set) return d(h, g, _);
    let b = th.call(h);
    if (b === Gm) return r(h, g, _);
    if (b === Xm) return u(h, g, _);
    if (b === qm) return o(h, g, _);
    if (b === Zm) return d(h, g, _);
    if (b === Ym) return typeof h.then != `function` && typeof g.then != `function` && c(h, g, _);
    if (b === eh) return p(h, g, _);
    if (b === Km) return i(h, g, _);
    if (b === Hm) return c(h, g, _);
    if ($m[b]) return f(h, g, _);
    if (b === Vm) return e(h, g, _);
    if (b === Wm) return n(h, g, _);
    if (b === Um || b === Jm || b === Qm) return l(h, g, _);
    if (m) {
      let e = m[b];
      if (!e) {
        let t = pm(h);
        t && (e = m[t]);
      }
      if (e) return e(h, g, _);
    }
    return !1;
  };
}
function rh({ circular: e, createCustomConfig: t, strict: n }) {
  let r = {
    areArrayBuffersEqual: Cm,
    areArraysEqual: n ? Mm : wm,
    areDataViewsEqual: Tm,
    areDatesEqual: Em,
    areErrorsEqual: n ? dm(Dm, Mm) : dm(Dm, jm),
    areFunctionsEqual: Om,
    areMapsEqual: n ? dm(km, Mm) : km,
    areNumbersEqual: Am,
    areObjectsEqual: n ? Mm : jm,
    arePrimitiveWrappersEqual: Nm,
    areRegExpsEqual: Pm,
    areSetsEqual: n ? dm(Fm, Mm) : Fm,
    areTypedArraysEqual: n ? dm(Im, Mm) : Im,
    areUrlsEqual: Lm,
    unknownTagComparators: void 0,
  };
  if ((t && (r = Object.assign({}, r, t(r))), e)) {
    let e = fm(r.areArraysEqual),
      t = fm(r.areErrorsEqual),
      n = fm(r.areMapsEqual),
      i = fm(r.areObjectsEqual),
      a = fm(r.areSetsEqual);
    r = Object.assign({}, r, {
      areArraysEqual: e,
      areErrorsEqual: t,
      areMapsEqual: n,
      areObjectsEqual: i,
      areSetsEqual: a,
    });
  }
  return r;
}
function ih(e) {
  return function (t, n, r, i, a, o, s) {
    return e(t, n, s);
  };
}
function ah({ circular: e, comparator: t, createState: n, equals: r, strict: i }) {
  if (n)
    return function (a, o) {
      let { cache: s = e ? new WeakMap() : void 0, meta: c } = n();
      return t(a, o, { cache: s, equals: r, meta: c, strict: i });
    };
  if (e)
    return function (e, n) {
      return t(e, n, { cache: new WeakMap(), equals: r, meta: void 0, strict: i });
    };
  let a = { cache: void 0, equals: r, meta: void 0, strict: i };
  return function (e, n) {
    return t(e, n, a);
  };
}
var oh = sh();
(sh({ strict: !0 }),
  sh({ circular: !0 }),
  sh({ circular: !0, strict: !0 }),
  sh({ createInternalComparator: () => gm }),
  sh({ strict: !0, createInternalComparator: () => gm }),
  sh({ circular: !0, createInternalComparator: () => gm }),
  sh({ circular: !0, createInternalComparator: () => gm, strict: !0 }));
function sh(e = {}) {
  let { circular: t = !1, createInternalComparator: n, createState: r, strict: i = !1 } = e,
    a = nh(rh(e));
  return ah({ circular: t, comparator: a, createState: r, equals: n ? n(a) : ih(a), strict: i });
}
var ch = g(),
  lh =
    (...e) =>
    (t) => {
      e.forEach((e) => {
        typeof e == `function` ? e(t) : e && (e.current = t);
      });
    },
  uh = ({ contentComponent: e }) => {
    let t = (0, sm.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getServerSnapshot);
    return (0, Y.jsx)(Y.Fragment, { children: Object.values(t) });
  };
function dh() {
  let e = new Set(),
    t = {},
    n = !1,
    r = () => {
      !n &&
        e.size &&
        ((n = !0),
        queueMicrotask(() => {
          ((n = !1), e.forEach((e) => e()));
        }));
    };
  return {
    subscribe(t) {
      return (
        e.add(t),
        () => {
          e.delete(t);
        }
      );
    },
    getSnapshot() {
      return t;
    },
    getServerSnapshot() {
      return t;
    },
    setRenderer(e, n) {
      ((t = { ...t, [e]: om.createPortal(n.reactElement, n.element, e) }), r());
    },
    removeRenderer(e) {
      let n = { ...t };
      (delete n[e], (t = n), r());
    },
  };
}
var fh = class extends J.Component {
    constructor(e) {
      (super(e), (this.editorContentRef = J.createRef()));
    }
    componentDidMount() {
      this.init();
    }
    componentDidUpdate() {
      this.init();
    }
    init() {
      let e = this.props.editor;
      if (e && !e.isDestroyed && e.view.dom?.parentNode) {
        if (e.contentComponent) return;
        let t = this.editorContentRef.current;
        (t.append(...e.view.dom.parentNode.childNodes),
          e.setOptions({ element: t }),
          (e.contentComponent = dh()),
          e.createNodeViews(),
          (e.isEditorContentInitialized = !0),
          this.forceUpdate());
      }
    }
    componentWillUnmount() {
      let e = this.props.editor;
      if (e) {
        ((e.isEditorContentInitialized = !1),
          e.isDestroyed || e.view.setProps({ nodeViews: {} }),
          (e.contentComponent = null));
        try {
          if (!e.view.dom?.parentNode) return;
          let t = document.createElement(`div`);
          (t.append(...e.view.dom.parentNode.childNodes), e.setOptions({ element: t }));
        } catch {}
      }
    }
    render() {
      let { editor: e, innerRef: t, ...n } = this.props;
      return (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, { ref: lh(t, this.editorContentRef), ...n }),
          e?.contentComponent && (0, Y.jsx)(uh, { contentComponent: e.contentComponent }),
        ],
      });
    }
  },
  ph = (0, J.forwardRef)((e, t) => {
    let n = J.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [e.editor]);
    return J.createElement(fh, { key: n, innerRef: t, ...e });
  }),
  mh = J.memo(ph),
  hh = typeof window < `u` ? J.useLayoutEffect : J.useEffect,
  gh = class {
    constructor(e) {
      ((this.transactionNumber = 0),
        (this.lastTransactionNumber = 0),
        (this.subscribers = new Set()),
        (this.editor = e),
        (this.lastSnapshot = { editor: e, transactionNumber: 0 }),
        (this.getSnapshot = this.getSnapshot.bind(this)),
        (this.getServerSnapshot = this.getServerSnapshot.bind(this)),
        (this.watch = this.watch.bind(this)),
        (this.subscribe = this.subscribe.bind(this)));
    }
    getSnapshot() {
      return (
        this.transactionNumber === this.lastTransactionNumber ||
          ((this.lastTransactionNumber = this.transactionNumber),
          (this.lastSnapshot = { editor: this.editor, transactionNumber: this.transactionNumber })),
        this.lastSnapshot
      );
    }
    getServerSnapshot() {
      return { editor: null, transactionNumber: 0 };
    }
    subscribe(e) {
      return (
        this.subscribers.add(e),
        () => {
          this.subscribers.delete(e);
        }
      );
    }
    watch(e) {
      if (((this.editor = e), this.editor)) {
        let e,
          t = (t) => {
            (t?.transaction === void 0 || t.transaction !== e) &&
              ((e = t?.transaction),
              (this.transactionNumber += 1),
              this.subscribers.forEach((e) => e()));
          },
          n = this.editor;
        return (
          n.on(`transaction`, t),
          n.on(`update`, t),
          () => {
            (n.off(`transaction`, t), n.off(`update`, t));
          }
        );
      }
    }
  };
function _h(e) {
  let [t] = (0, J.useState)(() => new gh(e.editor)),
    n = (0, ch.useSyncExternalStoreWithSelector)(
      t.subscribe,
      t.getSnapshot,
      t.getServerSnapshot,
      e.selector,
      e.equalityFn ?? oh,
    );
  return (hh(() => t.watch(e.editor), [e.editor, t]), (0, J.useDebugValue)(n), n);
}
var vh = typeof window > `u`,
  yh = vh || !!(typeof window < `u` && window.next),
  bh = class e {
    constructor(e) {
      ((this.editor = null),
        (this.subscriptions = new Set()),
        (this.isComponentMounted = !1),
        (this.previousDeps = null),
        (this.instanceId = ``),
        (this.options = e),
        (this.subscriptions = new Set()),
        this.setEditor(this.getInitialEditor()),
        this.scheduleDestroy(),
        (this.getEditor = this.getEditor.bind(this)),
        (this.getServerSnapshot = this.getServerSnapshot.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.refreshEditorInstance = this.refreshEditorInstance.bind(this)),
        (this.scheduleDestroy = this.scheduleDestroy.bind(this)),
        (this.onRender = this.onRender.bind(this)),
        (this.createEditor = this.createEditor.bind(this)));
    }
    setEditor(e) {
      ((this.editor = e),
        (this.instanceId = Math.random().toString(36).slice(2, 9)),
        this.subscriptions.forEach((e) => e()));
    }
    getInitialEditor() {
      let e = this.options.current.immediatelyRender,
        t = e ?? !0;
      return ((vh || (yh && e === void 0)) && (t = !1), t ? this.createEditor() : null);
    }
    createEditor() {
      return new Qp({
        ...this.options.current,
        onBeforeCreate: (...e) => {
          var t;
          return (t = this.options.current).onBeforeCreate?.call(t, ...e);
        },
        onBlur: (...e) => {
          var t;
          return (t = this.options.current).onBlur?.call(t, ...e);
        },
        onCreate: (...e) => {
          var t;
          return (t = this.options.current).onCreate?.call(t, ...e);
        },
        onDestroy: (...e) => {
          var t;
          return (t = this.options.current).onDestroy?.call(t, ...e);
        },
        onFocus: (...e) => {
          var t;
          return (t = this.options.current).onFocus?.call(t, ...e);
        },
        onSelectionUpdate: (...e) => {
          var t;
          return (t = this.options.current).onSelectionUpdate?.call(t, ...e);
        },
        onTransaction: (...e) => {
          var t;
          return (t = this.options.current).onTransaction?.call(t, ...e);
        },
        onUpdate: (...e) => {
          var t;
          return (t = this.options.current).onUpdate?.call(t, ...e);
        },
        onContentError: (...e) => {
          var t;
          return (t = this.options.current).onContentError?.call(t, ...e);
        },
        onDrop: (...e) => {
          var t;
          return (t = this.options.current).onDrop?.call(t, ...e);
        },
        onPaste: (...e) => {
          var t;
          return (t = this.options.current).onPaste?.call(t, ...e);
        },
        onDelete: (...e) => {
          var t;
          return (t = this.options.current).onDelete?.call(t, ...e);
        },
        onMount: (...e) => {
          var t;
          return (t = this.options.current).onMount?.call(t, ...e);
        },
        onUnmount: (...e) => {
          var t;
          return (t = this.options.current).onUnmount?.call(t, ...e);
        },
      });
    }
    getEditor() {
      return this.editor;
    }
    getServerSnapshot() {
      return null;
    }
    subscribe(e) {
      return (
        this.subscriptions.add(e),
        () => {
          this.subscriptions.delete(e);
        }
      );
    }
    static compareOptions(e, t) {
      return Object.keys(e).every((n) =>
        [
          `onCreate`,
          `onBeforeCreate`,
          `onDestroy`,
          `onUpdate`,
          `onTransaction`,
          `onFocus`,
          `onBlur`,
          `onSelectionUpdate`,
          `onContentError`,
          `onDrop`,
          `onPaste`,
        ].includes(n)
          ? !0
          : n === `extensions` && e.extensions && t.extensions
            ? e.extensions.length === t.extensions.length &&
              e.extensions.every((e, n) => e === t.extensions?.[n])
            : e[n] === t[n],
      );
    }
    onRender(t) {
      return () => (
        (this.isComponentMounted = !0),
        clearTimeout(this.scheduledDestructionTimeout),
        this.editor && !this.editor.isDestroyed && t.length === 0
          ? e.compareOptions(this.options.current, this.editor.options) ||
            this.editor.setOptions({ ...this.options.current, editable: this.editor.isEditable })
          : this.refreshEditorInstance(t),
        () => {
          ((this.isComponentMounted = !1), this.scheduleDestroy());
        }
      );
    }
    refreshEditorInstance(e) {
      if (this.editor && !this.editor.isDestroyed) {
        if (this.previousDeps === null) {
          this.previousDeps = e;
          return;
        }
        if (this.previousDeps.length === e.length && this.previousDeps.every((t, n) => t === e[n]))
          return;
      }
      (this.editor && !this.editor.isDestroyed && this.editor.destroy(),
        this.setEditor(this.createEditor()),
        (this.previousDeps = e));
    }
    scheduleDestroy() {
      let e = this.instanceId,
        t = this.editor;
      this.scheduledDestructionTimeout = setTimeout(() => {
        this.isComponentMounted && this.instanceId === e
          ? t && t.setOptions(this.options.current)
          : t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
      }, 1);
    }
  };
function xh(e = {}, t = []) {
  let n = (0, J.useRef)(e);
  n.current = e;
  let [r] = (0, J.useState)(() => new bh(n)),
    i = (0, sm.useSyncExternalStore)(r.subscribe, r.getEditor, r.getServerSnapshot);
  return (
    (0, J.useDebugValue)(i),
    (0, J.useEffect)(r.onRender(t)),
    _h({
      editor: i,
      selector: ({ transactionNumber: t }) =>
        e.shouldRerenderOnTransaction === !1 || e.shouldRerenderOnTransaction === void 0
          ? null
          : e.immediatelyRender && t === 0
            ? 0
            : t + 1,
    }),
    i
  );
}
var Sh = (0, J.createContext)({ editor: null });
Sh.Consumer;
var Ch = (0, J.createContext)({
    onDragStart: () => {},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: () => {},
  }),
  wh = () => (0, J.useContext)(Ch);
function Th({ as: e = `div`, ...t }) {
  let { nodeViewContentRef: n, nodeViewContentChildren: r } = wh();
  return (0, Y.jsx)(e, {
    ...t,
    ref: n,
    "data-node-view-content": ``,
    style: { whiteSpace: `pre-wrap`, ...t.style },
    children: r,
  });
}
var Eh = J.forwardRef((e, t) => {
  let { onDragStart: n } = wh(),
    r = e.as || `div`;
  return (0, Y.jsx)(r, {
    ...e,
    ref: t,
    "data-node-view-wrapper": ``,
    onDragStart: n,
    style: { whiteSpace: `normal`, ...e.style },
  });
});
function Dh(e) {
  return !!(typeof e == `function` && e.prototype && e.prototype.isReactComponent);
}
function Oh(e) {
  return !(
    typeof e != `object` ||
    !e.$$typeof ||
    (e.$$typeof.toString() !== `Symbol(react.forward_ref)` &&
      e.$$typeof.description !== `react.forward_ref`)
  );
}
function kh(e) {
  return !(
    typeof e != `object` ||
    !e.$$typeof ||
    (e.$$typeof.toString() !== `Symbol(react.memo)` && e.$$typeof.description !== `react.memo`)
  );
}
function Ah(e) {
  if (Dh(e) || Oh(e)) return !0;
  if (kh(e)) {
    let t = e.type;
    if (t) return Dh(t) || Oh(t);
  }
  return !1;
}
function jh() {
  try {
    if (J.version) return parseInt(J.version.split(`.`)[0], 10) >= 19;
  } catch {}
  return !1;
}
var Mh = class {
  constructor(e, { editor: t, props: n = {}, as: r = `div`, className: i = `` }) {
    ((this.ref = null),
      (this.destroyed = !1),
      (this.id = Math.floor(Math.random() * 4294967295).toString()),
      (this.component = e),
      (this.editor = t),
      (this.props = n),
      (this.element = document.createElement(r)),
      this.element.classList.add(`react-renderer`),
      i && this.element.classList.add(...i.split(` `)),
      this.editor.isEditorContentInitialized
        ? (0, om.flushSync)(() => {
            this.render();
          })
        : queueMicrotask(() => {
            this.destroyed || this.render();
          }));
  }
  render() {
    var e;
    if (this.destroyed) return;
    let t = this.component,
      n = this.props,
      r = this.editor,
      i = jh(),
      a = Ah(t),
      o = { ...n };
    (o.ref && !(i || a) && delete o.ref,
      !o.ref &&
        (i || a) &&
        (o.ref = (e) => {
          this.ref = e;
        }),
      (this.reactElement = (0, Y.jsx)(t, { ...o })),
      r == null || (e = r.contentComponent) == null || e.setRenderer(this.id, this));
  }
  updateProps(e = {}) {
    if (this.destroyed) return;
    let t = !1,
      n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1) {
      let i = n[r];
      if (e[i] !== this.props[i]) {
        t = !0;
        break;
      }
    }
    t && ((this.props = { ...this.props, ...e }), this.render());
  }
  destroy() {
    var e;
    this.destroyed = !0;
    let t = this.editor;
    t == null || (e = t.contentComponent) == null || e.removeRenderer(this.id);
    try {
      this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
    } catch {}
  }
  updateAttributes(e) {
    Object.keys(e).forEach((t) => {
      this.element.setAttribute(t, e[t]);
    });
  }
};
J.createContext({ markViewContentRef: () => {} });
function Nh(e) {
  var t;
  let n = e.getRootNode(),
    r =
      typeof n.getSelection == `function`
        ? n.getSelection()
        : (t = e.ownerDocument) == null || (t = t.defaultView) == null
          ? void 0
          : t.getSelection();
  if (!r || r.rangeCount === 0) return null;
  let { anchorNode: i, anchorOffset: a, focusNode: o, focusOffset: s } = r;
  return !i || !o || !e.contains(i) || !e.contains(o)
    ? null
    : () => {
        try {
          r.setBaseAndExtent(i, a, o, s);
        } catch {}
      };
}
function Ph(e, t, n) {
  return e.node(n) === t.node(n) && e.before(n) === t.before(n);
}
function Fh(e) {
  if (!Eu(e)) return [];
  let { $from: t, $to: n } = e,
    r = [],
    i = Math.min(t.depth, n.depth);
  for (let e = 1; e <= i && Ph(t, n, e); e += 1) r.push(t.before(e));
  return r;
}
var Ih = class {
    constructor(e) {
      ((this.views = new WeakMap()),
        (this.viewCount = 0),
        (this.insideViews = new Set()),
        (this.syncQueued = !1),
        (this.scheduleSync = () => {
          this.syncQueued ||
            ((this.syncQueued = !0),
            queueMicrotask(() => {
              ((this.syncQueued = !1), this.sync());
            }));
        }),
        (this.handleTransaction = () => this.scheduleSync()),
        (this.editor = e));
    }
    register(e) {
      (this.viewCount === 0 && this.editor.on(`transaction`, this.handleTransaction),
        this.views.set(e.dom, e),
        (this.viewCount += 1),
        this.scheduleSync());
    }
    unregister(e) {
      (this.views.delete(e.dom),
        --this.viewCount,
        this.insideViews.delete(e),
        this.viewCount === 0 && this.editor.off(`transaction`, this.handleTransaction));
    }
    sync() {
      if (this.viewCount === 0 || this.editor.isDestroyed) return;
      let e = this.findInsideViews();
      (this.updateViews(this.insideViews, e, !1),
        this.updateViews(e, this.insideViews, !0),
        (this.insideViews = e));
    }
    updateViews(e, t, n) {
      for (let r of e) t.has(r) || r.setSelectionInside(n);
    }
    findInsideViews() {
      let e = new Set();
      for (let t of Fh(this.editor.state.selection)) {
        let n = this.editor.view.nodeDOM(t),
          r = n ? this.views.get(n) : void 0;
        r && e.add(r);
      }
      return e;
    }
  },
  Lh = new WeakMap();
function Rh(e) {
  let t = Lh.get(e);
  return (t || ((t = new Ih(e)), Lh.set(e, t)), t);
}
var zh = class extends im {
  constructor(e, t, n) {
    if (
      (super(e, t, n),
      (this.nodeSelected = !1),
      (this.handlePositionUpdate = () => {
        let e = this.getPos();
        typeof e == `number` &&
          e !== this.currentPos &&
          ((this.currentPos = e),
          this.renderer.updateProps({ getPos: () => this.getPos() }),
          typeof this.options.attrs == `function` && this.updateElementAttributes());
      }),
      (this.cachedExtensionWithSyncedStorage = null),
      !this.node.isLeaf)
    ) {
      ((this.contentDOMElement = this.options.contentDOMElementTag
        ? document.createElement(this.options.contentDOMElementTag)
        : document.createElement(this.node.isInline ? `span` : `div`)),
        (this.contentDOMElement.dataset.nodeViewContentReact = ``),
        (this.contentDOMElement.dataset.nodeViewWrapper = ``),
        (this.contentDOMElement.style.whiteSpace = `inherit`));
      let e = this.dom.querySelector(`[data-node-view-content]`);
      e ? e.appendChild(this.contentDOMElement) : this.dom.appendChild(this.contentDOMElement);
    }
    this.options.trackNodeViewPosition && this.editor.on(`update`, this.handlePositionUpdate);
  }
  get extensionWithSyncedStorage() {
    if (!this.cachedExtensionWithSyncedStorage) {
      let e = this.editor,
        t = this.extension;
      this.cachedExtensionWithSyncedStorage = new Proxy(t, {
        get(n, r, i) {
          return r === `storage` ? (e.storage[t.name] ?? {}) : Reflect.get(n, r, i);
        },
      });
    }
    return this.cachedExtensionWithSyncedStorage;
  }
  mount() {
    let e = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      selectionInside: !1,
      extension: this.extensionWithSyncedStorage,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (e = {}) => this.updateAttributes(e),
      deleteNode: () => this.deleteNode(),
      ref: (0, J.createRef)(),
    };
    if (!this.component.displayName) {
      let e = (e) => e.charAt(0).toUpperCase() + e.substring(1);
      this.component.displayName = e(this.extension.name);
    }
    let t = {
        onDragStart: this.onDragStart.bind(this),
        nodeViewContentRef: (e) => {
          if (e && this.contentDOMElement && e.firstChild !== this.contentDOMElement) {
            e.hasAttribute(`data-node-view-wrapper`) && e.removeAttribute(`data-node-view-wrapper`);
            let t = Nh(this.contentDOMElement);
            (e.appendChild(this.contentDOMElement), t?.());
          }
        },
      },
      n = this.component,
      r = (0, J.memo)((e) =>
        (0, Y.jsx)(Ch.Provider, { value: t, children: (0, J.createElement)(n, e) }),
      );
    r.displayName = `ReactNodeView`;
    let i = this.node.isInline ? `span` : `div`;
    this.options.as && (i = this.options.as);
    let { className: a = `` } = this.options;
    ((this.renderer = new Mh(r, {
      editor: this.editor,
      props: e,
      as: i,
      className: `node-${this.node.type.name} ${a}`.trim(),
    })),
      Rh(this.editor).register(this),
      this.updateElementAttributes(),
      (this.currentPos = this.getPos()));
  }
  get dom() {
    if (
      this.renderer.element.firstElementChild &&
      !this.renderer.element.firstElementChild?.hasAttribute(`data-node-view-wrapper`)
    )
      throw Error(`Please use the NodeViewWrapper component for your node view.`);
    return this.renderer.element;
  }
  get contentDOM() {
    return this.node.isLeaf ? null : this.contentDOMElement;
  }
  update(e, t, n) {
    let r = (e) => {
      (this.renderer.updateProps(e),
        typeof this.options.attrs == `function` && this.updateElementAttributes());
    };
    if (e.type !== this.node.type) return !1;
    if (typeof this.options.update == `function`) {
      let i = this.node,
        a = this.decorations,
        o = this.innerDecorations;
      return (
        (this.node = e),
        (this.decorations = t),
        (this.innerDecorations = n),
        (this.currentPos = this.getPos()),
        this.options.update({
          oldNode: i,
          oldDecorations: a,
          newNode: e,
          newDecorations: t,
          oldInnerDecorations: o,
          innerDecorations: n,
          updateProps: () =>
            r({
              node: e,
              decorations: t,
              innerDecorations: n,
              extension: this.extensionWithSyncedStorage,
            }),
        })
      );
    }
    if (e === this.node)
      return ((this.node = e), (this.decorations = t), (this.innerDecorations = n), !0);
    let i = this.getPos();
    ((this.node = e), (this.decorations = t), (this.innerDecorations = n), (this.currentPos = i));
    let a = {
      node: e,
      decorations: t,
      innerDecorations: n,
      extension: this.extensionWithSyncedStorage,
    };
    return (this.options.trackNodeViewPosition && (a.getPos = () => this.getPos()), r(a), !0);
  }
  selectNode() {
    ((this.nodeSelected = !0), this.updateSelectedState(!0));
  }
  deselectNode() {
    ((this.nodeSelected = !1),
      this.updateSelectedState(
        this.options.selectedOnTextSelection === !0 && this.isTextSelectionInside(),
      ));
  }
  setSelectionInside(e) {
    let t = this.nodeSelected || (this.options.selectedOnTextSelection === !0 && e);
    (this.renderer.updateProps({ selectionInside: e, selected: t }),
      this.renderer.element.classList.toggle(`ProseMirror-selectednode`, t));
  }
  updateSelectedState(e) {
    (this.renderer.updateProps({ selected: e }),
      this.renderer.element.classList.toggle(`ProseMirror-selectednode`, e));
  }
  isTextSelectionInside() {
    let e = this.getPos();
    return typeof e == `number` && Fh(this.editor.state.selection).includes(e);
  }
  destroy() {
    (this.renderer.destroy(),
      Rh(this.editor).unregister(this),
      this.options.trackNodeViewPosition && this.editor.off(`update`, this.handlePositionUpdate),
      (this.contentDOMElement = null));
  }
  updateElementAttributes() {
    if (this.options.attrs) {
      let e = {};
      if (typeof this.options.attrs == `function`) {
        let t = this.editor.extensionManager.attributes,
          n = Md(this.node, t);
        e = this.options.attrs({ node: this.node, HTMLAttributes: n });
      } else e = this.options.attrs;
      this.renderer.updateAttributes(e);
    }
  }
};
function Bh(e, t) {
  return (n) =>
    n.editor.contentComponent
      ? new zh(e, n, t)
      : {
          dom: document.createElement(`span`),
          contentDOM: null,
          update: () => !1,
          destroy: () => {},
          selectNode: () => {},
          deselectNode: () => {},
          stopEvent: () => !1,
          ignoreMutation: () => !0,
        };
}
var Vh = (0, J.createContext)({
  get editor() {
    throw Error(`useTiptap must be used within a <Tiptap> provider`);
  },
});
Vh.displayName = `TiptapContext`;
var Hh = () => (0, J.useContext)(Vh);
function Uh({ children: e, ...t }) {
  let n = `editor` in t ? t.editor : t.instance;
  if (!n) throw Error("Tiptap: An editor instance is required. Pass a non-null `editor` prop.");
  let r = (0, J.useMemo)(() => ({ editor: n }), [n]),
    i = (0, J.useMemo)(() => ({ editor: n }), [n]);
  return (0, Y.jsx)(Sh.Provider, {
    value: i,
    children: (0, Y.jsx)(Vh.Provider, { value: r, children: e }),
  });
}
Uh.displayName = `Tiptap`;
function Wh({ ...e }) {
  let { editor: t } = Hh();
  return (0, Y.jsx)(mh, { editor: t, ...e });
}
((Wh.displayName = `Tiptap.Content`), Object.assign(Uh, { Content: Wh }));
var Gh = new WeakSet(),
  Kh = new WeakSet();
function qh(e) {
  let t = e;
  return (Gh.add(t), t);
}
function Jh(e) {
  return Array.isArray(e) && Gh.has(e);
}
function Yh(e) {
  return e.flatMap((e) => (e == null ? [] : Array.isArray(e) && Kh.has(e) && !Jh(e) ? Yh(e) : [e]));
}
function Xh(e, t) {
  if (e === `slot`) return 0;
  if (e instanceof Function) {
    let n = e(t);
    return Array.isArray(n) && !Jh(n) && !Kh.has(n) ? qh(n) : n;
  }
  let { children: n, ...r } = t ?? {};
  if (e === `svg`)
    throw Error(`SVG elements are not supported in the JSX syntax, use the array syntax instead`);
  if (Array.isArray(n)) {
    if (Jh(n)) return qh([e, r, n]);
    if (n.length === 0) return qh([e, r]);
    let t = Yh(n);
    return t.length === 0 ? qh([e, r]) : qh([e, r, ...t]);
  }
  return qh(n == null ? [e, r] : [e, r, n]);
}
var Zh = (e, t) => Xh(e, t),
  Qh = (e, t) => {
    let { state: n } = e,
      { selection: r } = n;
    if (!r.empty) return !1;
    let { $from: i } = r;
    if (i.parentOffset !== 0) return !1;
    let a = i.depth - 1;
    if (a < 0) return !1;
    let o = i.node(a),
      s = i.index(a);
    if (s === 0) return !1;
    if (o.type === t) return e.commands.lift(t.name);
    let c = o.child(s - 1);
    if (c.type !== t || !c.lastChild?.isTextblock) return !1;
    let l = i.before() - 1 - 1;
    return e.commands.command(({ tr: e, dispatch: t }) => {
      if (!t) return !0;
      let n = i.parent.content,
        r = new I(n, 0, 0);
      return (
        e.replace(l, i.after(), r),
        e.setSelection(R.create(e.doc, l + n.size)),
        e.scrollIntoView(),
        t(e),
        !0
      );
    });
  },
  $h = /^\s*>\s$/,
  eg = rm.create({
    name: `blockquote`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    content: `block+`,
    group: `block`,
    defining: !0,
    parseHTML() {
      return [{ tag: `blockquote` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return Zh(`blockquote`, { ...K(this.options.HTMLAttributes, e), children: Zh(`slot`, {}) });
    },
    parseMarkdown: (e, t) => {
      let n = t.parseBlockChildren ?? t.parseChildren;
      return t.createNode(`blockquote`, void 0, n(e.tokens || []));
    },
    renderMarkdown: (e, t) => {
      if (!e.content) return ``;
      let n = [];
      return (
        e.content.forEach((e, r) => {
          let i = (t.renderChild?.call(t, e, r) ?? t.renderChildren([e]))
            .split(`
`)
            .map((e) => (e.trim() === `` ? `>` : `> ${e}`));
          n.push(
            i.join(`
`),
          );
        }),
        n.join(`
>
`)
      );
    },
    addCommands() {
      return {
        setBlockquote:
          () =>
          ({ commands: e }) =>
            e.wrapIn(this.name),
        toggleBlockquote:
          () =>
          ({ commands: e }) =>
            e.toggleWrap(this.name),
        unsetBlockquote:
          () =>
          ({ commands: e }) =>
            e.lift(this.name),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Shift-b": () => this.editor.commands.toggleBlockquote(),
        Backspace: () => Qh(this.editor, this.type),
      };
    },
    addInputRules() {
      return [nm({ find: $h, type: this.type })];
    },
  }),
  tg = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
  ng = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
  rg = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
  ig = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
  ag = kp.create({
    name: `bold`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: `strong` },
        { tag: `b`, getAttrs: (e) => e.style.fontWeight !== `normal` && null },
        { style: `font-weight=400`, clearMark: (e) => e.type.name === this.name },
        { style: `font-weight`, getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null },
      ];
    },
    renderHTML({ HTMLAttributes: e }) {
      return Zh(`strong`, { ...K(this.options.HTMLAttributes, e), children: Zh(`slot`, {}) });
    },
    markdownTokenName: `strong`,
    parseMarkdown: (e, t) => t.applyMark(`bold`, t.parseInline(e.tokens || [])),
    markdownOptions: { htmlReopen: { open: `<strong>`, close: `</strong>` } },
    renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
    addCommands() {
      return {
        setBold:
          () =>
          ({ commands: e }) =>
            e.setMark(this.name),
        toggleBold:
          () =>
          ({ commands: e }) =>
            e.toggleMark(this.name),
        unsetBold:
          () =>
          ({ commands: e }) =>
            e.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-b": () => this.editor.commands.toggleBold(),
        "Mod-B": () => this.editor.commands.toggleBold(),
      };
    },
    addInputRules() {
      return [$p({ find: tg, type: this.type }), $p({ find: rg, type: this.type })];
    },
    addPasteRules() {
      return [am({ find: ng, type: this.type }), am({ find: ig, type: this.type })];
    },
  }),
  og = (e) => {
    let t = /`([^`]+)`(?!`)$/.exec(e);
    return !t || (t.index > 0 && e[t.index - 1] === "`")
      ? null
      : { index: t.index, text: t[0], replaceWith: t[1] };
  },
  sg = (e) => {
    let t = /`([^`]+)`(?!`)/g,
      n = [],
      r;
    for (; (r = t.exec(e)) !== null;)
      (r.index > 0 && e[r.index - 1] === "`") ||
        n.push({ index: r.index, text: r[0], replaceWith: r[1] });
    return n;
  },
  cg = kp.create({
    name: `code`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    excludes: `_`,
    code: !0,
    exitable: !0,
    parseHTML() {
      return [{ tag: `code` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`code`, K(this.options.HTMLAttributes, e), 0];
    },
    markdownTokenName: `codespan`,
    parseMarkdown: (e, t) => t.applyMark(`code`, [{ type: `text`, text: e.text || `` }]),
    renderMarkdown: (e, t) => (e.content ? `\`${t.renderChildren(e.content)}\`` : ``),
    addCommands() {
      return {
        setCode:
          () =>
          ({ commands: e }) =>
            e.setMark(this.name),
        toggleCode:
          () =>
          ({ commands: e }) =>
            e.toggleMark(this.name),
        unsetCode:
          () =>
          ({ commands: e }) =>
            e.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-e": () => this.editor.commands.toggleCode() };
    },
    addInputRules() {
      return [$p({ find: og, type: this.type })];
    },
    addPasteRules() {
      return [am({ find: sg, type: this.type })];
    },
  }),
  lg = 4,
  ug = /^```([a-z]+)?[\s\n]$/,
  dg = /^~~~([a-z]+)?[\s\n]$/,
  fg = rm.create({
    name: `codeBlock`,
    addOptions() {
      return {
        languageClassPrefix: `language-`,
        exitOnTripleEnter: !0,
        exitOnArrowDown: !0,
        exitOnArrowUp: !0,
        defaultLanguage: null,
        enableTabIndentation: !1,
        tabSize: lg,
        HTMLAttributes: {},
      };
    },
    content: `text*`,
    marks: ``,
    group: `block`,
    code: !0,
    defining: !0,
    addAttributes() {
      return {
        language: {
          default: this.options.defaultLanguage,
          parseHTML: (e) => {
            let { languageClassPrefix: t } = this.options;
            return (
              (t &&
                [...(e.firstElementChild?.classList || [])]
                  .filter((e) => e.startsWith(t))
                  .map((e) => e.replace(t, ``))[0]) ||
              null
            );
          },
          rendered: !1,
        },
      };
    },
    parseHTML() {
      return [{ tag: `pre`, preserveWhitespace: `full` }];
    },
    renderHTML({ node: e, HTMLAttributes: t }) {
      return [
        `pre`,
        K(this.options.HTMLAttributes, t),
        [
          `code`,
          { class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null },
          0,
        ],
      ];
    },
    markdownTokenName: `code`,
    parseMarkdown: (e, t) =>
      e.raw?.startsWith("```") === !1 &&
      e.raw?.startsWith(`~~~`) === !1 &&
      e.codeBlockStyle !== `indented`
        ? []
        : t.createNode(
            `codeBlock`,
            { language: e.lang || null },
            e.text ? [t.createTextNode(e.text)] : [],
          ),
    renderMarkdown: (e, t) => {
      let n = ``,
        r = e.attrs?.language || ``;
      return (
        (n = e.content
          ? [`\`\`\`${r}`, t.renderChildren(e.content), "```"].join(`
`)
          : `\`\`\`${r}\n\n\`\`\``),
        n
      );
    },
    addCommands() {
      return {
        setCodeBlock:
          (e) =>
          ({ commands: t }) =>
            t.setNode(this.name, e),
        toggleCodeBlock:
          (e) =>
          ({ commands: t }) =>
            t.toggleNode(this.name, `paragraph`, e),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
        Backspace: () => {
          let { empty: e, $anchor: t } = this.editor.state.selection,
            n = t.pos === 1;
          return !e || t.parent.type.name !== this.name
            ? !1
            : n || !t.parent.textContent.length
              ? this.editor.commands.clearNodes()
              : !1;
        },
        Tab: ({ editor: e }) => {
          if (!this.options.enableTabIndentation) return !1;
          let t = this.options.tabSize ?? lg,
            { state: n } = e,
            { selection: r } = n,
            { $from: i, empty: a } = r;
          if (i.parent.type !== this.type) return !1;
          let o = ` `.repeat(t);
          return a
            ? e.commands.insertContent(o)
            : e.commands.command(({ tr: e }) => {
                let { from: t, to: i } = r,
                  a = n.doc
                    .textBetween(
                      t,
                      i,
                      `
`,
                      `
`,
                    )
                    .split(`
`)
                    .map((e) => o + e).join(`
`);
                return (e.replaceWith(t, i, n.schema.text(a)), !0);
              });
        },
        "Shift-Tab": ({ editor: e }) => {
          if (!this.options.enableTabIndentation) return !1;
          let t = this.options.tabSize ?? lg,
            { state: n } = e,
            { selection: r } = n,
            { $from: i, empty: a } = r;
          return i.parent.type === this.type
            ? a
              ? e.commands.command(({ tr: e }) => {
                  let { pos: r } = i,
                    a = i.start(),
                    o = i.end(),
                    s = n.doc.textBetween(
                      a,
                      o,
                      `
`,
                      `
`,
                    ).split(`
`),
                    c = 0,
                    l = 0,
                    u = r - a;
                  for (let e = 0; e < s.length; e += 1) {
                    if (l + s[e].length >= u) {
                      c = e;
                      break;
                    }
                    l += s[e].length + 1;
                  }
                  let d = s[c].match(/^ */)?.[0] || ``,
                    f = Math.min(d.length, t);
                  if (f === 0) return !0;
                  let p = a;
                  for (let e = 0; e < c; e += 1) p += s[e].length + 1;
                  return (e.delete(p, p + f), r - p <= f && e.setSelection(R.create(e.doc, p)), !0);
                })
              : e.commands.command(({ tr: e }) => {
                  let { from: i, to: a } = r,
                    o = n.doc
                      .textBetween(
                        i,
                        a,
                        `
`,
                        `
`,
                      )
                      .split(`
`)
                      .map((e) => {
                        let n = e.match(/^ */)?.[0] || ``,
                          r = Math.min(n.length, t);
                        return e.slice(r);
                      }).join(`
`);
                  return (e.replaceWith(i, a, n.schema.text(o)), !0);
                })
            : !1;
        },
        Enter: ({ editor: e }) => {
          if (!this.options.exitOnTripleEnter) return !1;
          let { state: t } = e,
            { selection: n } = t,
            { $from: r, empty: i } = n;
          if (!i || r.parent.type !== this.type) return !1;
          let a = r.parentOffset === r.parent.nodeSize - 2,
            o = r.parent.textContent.endsWith(`

`);
          return !a || !o
            ? !1
            : e
                .chain()
                .command(({ tr: e }) => (e.delete(r.pos - 2, r.pos), !0))
                .exitCode()
                .run();
        },
        ArrowUp: ({ editor: e }) => {
          if (!this.options.exitOnArrowUp) return !1;
          let { state: t } = e,
            { selection: n } = t,
            { $from: r, empty: i } = n;
          if (!i || r.parent.type !== this.type || r.parentOffset !== 0) return !1;
          let a = r.before();
          return a > 0 ? !1 : e.commands.insertDefaultBlock({ pos: a });
        },
        ArrowDown: ({ editor: e }) => {
          if (!this.options.exitOnArrowDown) return !1;
          let { state: t } = e,
            { selection: n, doc: r } = t,
            { $from: i, empty: a } = n;
          if (!a || i.parent.type !== this.type || i.parentOffset !== i.parent.nodeSize - 2)
            return !1;
          let o = i.after();
          return o === void 0
            ? !1
            : r.nodeAt(o)
              ? e.commands.command(({ tr: e }) => (e.setSelection(L.near(r.resolve(o))), !0))
              : e.commands.exitCode();
        },
      };
    },
    addInputRules() {
      return [
        tm({ find: ug, type: this.type, getAttributes: (e) => ({ language: e[1] }) }),
        tm({ find: dg, type: this.type, getAttributes: (e) => ({ language: e[1] }) }),
      ];
    },
    addProseMirrorPlugins() {
      return [
        new B({
          key: new V(`codeBlockVSCodeHandler`),
          props: {
            handlePaste: (e, t) => {
              if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
              let n = t.clipboardData.getData(`text/plain`),
                r = t.clipboardData.getData(`vscode-editor-data`),
                i = (r ? JSON.parse(r) : void 0)?.mode;
              if (!n || !i) return !1;
              let { tr: a, schema: o } = e.state,
                s = o.text(
                  n.replace(
                    /\r\n?/g,
                    `
`,
                  ),
                );
              return (
                a.replaceSelectionWith(this.type.create({ language: i }, s)),
                a.selection.$from.parent.type !== this.type &&
                  a.setSelection(R.near(a.doc.resolve(Math.max(0, a.selection.from - 2)))),
                a.setMeta(`paste`, !0),
                e.dispatch(a),
                !0
              );
            },
          },
        }),
      ];
    },
  }),
  pg = rm.create({
    name: `doc`,
    topNode: !0,
    content: `block+`,
    renderMarkdown: (e, t) =>
      e.content
        ? t.renderChildren(
            e.content,
            `

`,
          )
        : ``,
  }),
  mg = rm.create({
    name: `hardBreak`,
    markdownTokenName: `br`,
    addOptions() {
      return { keepMarks: !0, HTMLAttributes: {} };
    },
    inline: !0,
    group: `inline`,
    selectable: !1,
    linebreakReplacement: !0,
    parseHTML() {
      return [{ tag: `br` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`br`, K(this.options.HTMLAttributes, e)];
    },
    renderText() {
      return `
`;
    },
    renderMarkdown: () => `  
`,
    parseMarkdown: () => ({ type: `hardBreak` }),
    addCommands() {
      return {
        setHardBreak:
          () =>
          ({ commands: e, chain: t, state: n, editor: r }) =>
            e.first([
              () => e.exitCode(),
              () =>
                e.command(() => {
                  let { selection: e, storedMarks: i } = n;
                  if (e.$from.parent.type.spec.isolating) return !1;
                  let { keepMarks: a } = this.options,
                    { splittableMarks: o } = r.extensionManager,
                    s = i || (e.$to.parentOffset && e.$from.marks());
                  return t()
                    .insertContent({ type: this.name })
                    .command(({ tr: e, dispatch: t }) => {
                      if (t && s && a) {
                        let t = s.filter((e) => o.includes(e.type.name));
                        e.ensureMarks(t);
                      }
                      return !0;
                    })
                    .scrollIntoView()
                    .run();
                }),
            ]),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-Enter": () => this.editor.commands.setHardBreak(),
        "Shift-Enter": () => this.editor.commands.setHardBreak(),
      };
    },
  }),
  hg = rm.create({
    name: `heading`,
    addOptions() {
      return { levels: [1, 2, 3, 4, 5, 6], HTMLAttributes: {} };
    },
    content: `inline*`,
    group: `block`,
    defining: !0,
    addAttributes() {
      return { level: { default: 1, rendered: !1 } };
    },
    parseHTML() {
      return this.options.levels.map((e) => ({ tag: `h${e}`, attrs: { level: e } }));
    },
    renderHTML({ node: e, HTMLAttributes: t }) {
      return [
        `h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`,
        K(this.options.HTMLAttributes, t),
        0,
      ];
    },
    parseMarkdown: (e, t) =>
      t.createNode(`heading`, { level: e.depth || 1 }, t.parseInline(e.tokens || [])),
    renderMarkdown: (e, t) => {
      let n = e.attrs?.level ? parseInt(e.attrs.level, 10) : 1,
        r = `#`.repeat(n);
      return e.content ? `${r} ${t.renderChildren(e.content)}` : ``;
    },
    addCommands() {
      return {
        setHeading:
          (e) =>
          ({ commands: t }) =>
            this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
        toggleHeading:
          (e) =>
          ({ commands: t }) =>
            this.options.levels.includes(e.level) ? t.toggleNode(this.name, `paragraph`, e) : !1,
      };
    },
    addKeyboardShortcuts() {
      return this.options.levels.reduce(
        (e, t) => ({
          ...e,
          [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t }),
        }),
        {},
      );
    },
    addInputRules() {
      return this.options.levels.map((e) =>
        tm({
          find: RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
          type: this.type,
          getAttributes: { level: e },
        }),
      );
    },
  }),
  gg = rm.create({
    name: `horizontalRule`,
    addOptions() {
      return { HTMLAttributes: {}, nextNodeType: `paragraph` };
    },
    group: `block`,
    parseHTML() {
      return [{ tag: `hr` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`hr`, K(this.options.HTMLAttributes, e)];
    },
    markdownTokenName: `hr`,
    parseMarkdown: (e, t) => t.createNode(`horizontalRule`),
    renderMarkdown: () => `---`,
    addCommands() {
      return {
        setHorizontalRule:
          () =>
          ({ chain: e, state: t }) => {
            if (!pp(t, t.schema.nodes[this.name])) return !1;
            let { selection: n } = t,
              { $to: r } = n,
              i = e();
            return (
              lf(n)
                ? i.insertContentAt(r.pos, { type: this.name })
                : i.insertContent({ type: this.name }),
              i
                .command(({ state: e, tr: t, dispatch: n }) => {
                  if (n) {
                    let { $to: n } = t.selection,
                      r = n.end();
                    if (n.nodeAfter)
                      n.nodeAfter.isTextblock
                        ? t.setSelection(R.create(t.doc, n.pos + 1))
                        : n.nodeAfter.isBlock
                          ? t.setSelection(z.create(t.doc, n.pos))
                          : t.setSelection(R.create(t.doc, n.pos));
                    else {
                      let i = (
                        e.schema.nodes[this.options.nextNodeType] ||
                        n.parent.type.contentMatch.defaultType
                      )?.create();
                      i && (t.insert(r, i), t.setSelection(R.create(t.doc, r + 1)));
                    }
                    t.scrollIntoView();
                  }
                  return !0;
                })
                .run()
            );
          },
      };
    },
    addInputRules() {
      return [em({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type })];
    },
  }),
  _g = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
  vg = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
  yg = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
  bg = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
  xg = kp.create({
    name: `italic`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: `em` },
        { tag: `i`, getAttrs: (e) => e.style.fontStyle !== `normal` && null },
        { style: `font-style=normal`, clearMark: (e) => e.type.name === this.name },
        { style: `font-style=italic` },
      ];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`em`, K(this.options.HTMLAttributes, e), 0];
    },
    addCommands() {
      return {
        setItalic:
          () =>
          ({ commands: e }) =>
            e.setMark(this.name),
        toggleItalic:
          () =>
          ({ commands: e }) =>
            e.toggleMark(this.name),
        unsetItalic:
          () =>
          ({ commands: e }) =>
            e.unsetMark(this.name),
      };
    },
    markdownTokenName: `em`,
    parseMarkdown: (e, t) => t.applyMark(`italic`, t.parseInline(e.tokens || [])),
    markdownOptions: { htmlReopen: { open: `<em>`, close: `</em>` } },
    renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
    addKeyboardShortcuts() {
      return {
        "Mod-i": () => this.editor.commands.toggleItalic(),
        "Mod-I": () => this.editor.commands.toggleItalic(),
      };
    },
    addInputRules() {
      return [$p({ find: _g, type: this.type }), $p({ find: yg, type: this.type })];
    },
    addPasteRules() {
      return [am({ find: vg, type: this.type }), am({ find: bg, type: this.type })];
    },
  }),
  Sg = `aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2`,
  Cg = `ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2`,
  wg = `numeric`,
  Tg = `ascii`,
  Eg = `alpha`,
  Dg = `asciinumeric`,
  Og = `alphanumeric`,
  kg = `domain`,
  Ag = `emoji`,
  jg = `scheme`,
  Mg = `slashscheme`,
  Ng = `whitespace`;
function Pg(e, t) {
  return (e in t || (t[e] = []), t[e]);
}
function Fg(e, t, n) {
  (t[wg] && ((t[Dg] = !0), (t[Og] = !0)),
    t[Tg] && ((t[Dg] = !0), (t[Eg] = !0)),
    t[Dg] && (t[Og] = !0),
    t[Eg] && (t[Og] = !0),
    t[Og] && (t[kg] = !0),
    t[Ag] && (t[kg] = !0));
  for (let r in t) {
    let t = Pg(r, n);
    t.indexOf(e) < 0 && t.push(e);
  }
}
function Ig(e, t) {
  let n = {};
  for (let r in t) t[r].indexOf(e) >= 0 && (n[r] = !0);
  return n;
}
function Lg(e = null) {
  ((this.j = {}), (this.jr = []), (this.jd = null), (this.t = e));
}
((Lg.groups = {}),
  (Lg.prototype = {
    accepts() {
      return !!this.t;
    },
    go(e) {
      let t = this,
        n = t.j[e];
      if (n) return n;
      for (let n = 0; n < t.jr.length; n++) {
        let r = t.jr[n][0],
          i = t.jr[n][1];
        if (i && r.test(e)) return i;
      }
      return t.jd;
    },
    has(e, t = !1) {
      return t ? e in this.j : !!this.go(e);
    },
    ta(e, t, n, r) {
      for (let i = 0; i < e.length; i++) this.tt(e[i], t, n, r);
    },
    tr(e, t, n, r) {
      r ||= Lg.groups;
      let i;
      return (
        t && t.j ? (i = t) : ((i = new Lg(t)), n && r && Fg(t, n, r)), this.jr.push([e, i]), i
      );
    },
    ts(e, t, n, r) {
      let i = this,
        a = e.length;
      if (!a) return i;
      for (let t = 0; t < a - 1; t++) i = i.tt(e[t]);
      return i.tt(e[a - 1], t, n, r);
    },
    tt(e, t, n, r) {
      r ||= Lg.groups;
      let i = this;
      if (t && t.j) return ((i.j[e] = t), t);
      let a = t,
        o,
        s = i.go(e);
      return (
        s
          ? ((o = new Lg()),
            Object.assign(o.j, s.j),
            o.jr.push.apply(o.jr, s.jr),
            (o.jd = s.jd),
            (o.t = s.t))
          : (o = new Lg()),
        a &&
          (r &&
            (o.t && typeof o.t == `string`
              ? Fg(a, Object.assign(Ig(o.t, r), n), r)
              : n && Fg(a, n, r)),
          (o.t = a)),
        (i.j[e] = o),
        o
      );
    },
  }));
var X = (e, t, n, r, i) => e.ta(t, n, r, i),
  Z = (e, t, n, r, i) => e.tr(t, n, r, i),
  Rg = (e, t, n, r, i) => e.ts(t, n, r, i),
  Q = (e, t, n, r, i) => e.tt(t, n, r, i),
  zg = `WORD`,
  Bg = `UWORD`,
  Vg = `ASCIINUMERICAL`,
  Hg = `ALPHANUMERICAL`,
  Ug = `LOCALHOST`,
  Wg = `TLD`,
  Gg = `UTLD`,
  Kg = `SCHEME`,
  qg = `SLASH_SCHEME`,
  Jg = `NUM`,
  Yg = `WS`,
  Xg = `NL`,
  Zg = `OPENBRACE`,
  Qg = `CLOSEBRACE`,
  $g = `OPENBRACKET`,
  e_ = `CLOSEBRACKET`,
  t_ = `OPENPAREN`,
  n_ = `CLOSEPAREN`,
  r_ = `OPENANGLEBRACKET`,
  i_ = `CLOSEANGLEBRACKET`,
  a_ = `FULLWIDTHLEFTPAREN`,
  o_ = `FULLWIDTHRIGHTPAREN`,
  s_ = `LEFTCORNERBRACKET`,
  c_ = `RIGHTCORNERBRACKET`,
  l_ = `LEFTWHITECORNERBRACKET`,
  u_ = `RIGHTWHITECORNERBRACKET`,
  d_ = `FULLWIDTHLESSTHAN`,
  f_ = `FULLWIDTHGREATERTHAN`,
  p_ = `AMPERSAND`,
  m_ = `APOSTROPHE`,
  h_ = `ASTERISK`,
  g_ = `AT`,
  __ = `BACKSLASH`,
  v_ = `BACKTICK`,
  y_ = `CARET`,
  b_ = `COLON`,
  x_ = `COMMA`,
  S_ = `DOLLAR`,
  C_ = `DOT`,
  w_ = `EQUALS`,
  T_ = `EXCLAMATION`,
  E_ = `HYPHEN`,
  D_ = `PERCENT`,
  O_ = `PIPE`,
  k_ = `PLUS`,
  A_ = `POUND`,
  j_ = `QUERY`,
  M_ = `QUOTE`,
  N_ = `FULLWIDTHMIDDLEDOT`,
  P_ = `SEMI`,
  F_ = `SLASH`,
  I_ = `TILDE`,
  L_ = `UNDERSCORE`,
  R_ = `EMOJI`,
  z_ = `SYM`,
  B_ = Object.freeze({
    __proto__: null,
    ALPHANUMERICAL: Hg,
    AMPERSAND: p_,
    APOSTROPHE: m_,
    ASCIINUMERICAL: Vg,
    ASTERISK: h_,
    AT: g_,
    BACKSLASH: __,
    BACKTICK: v_,
    CARET: y_,
    CLOSEANGLEBRACKET: i_,
    CLOSEBRACE: Qg,
    CLOSEBRACKET: e_,
    CLOSEPAREN: n_,
    COLON: b_,
    COMMA: x_,
    DOLLAR: S_,
    DOT: C_,
    EMOJI: R_,
    EQUALS: w_,
    EXCLAMATION: T_,
    FULLWIDTHGREATERTHAN: f_,
    FULLWIDTHLEFTPAREN: a_,
    FULLWIDTHLESSTHAN: d_,
    FULLWIDTHMIDDLEDOT: N_,
    FULLWIDTHRIGHTPAREN: o_,
    HYPHEN: E_,
    LEFTCORNERBRACKET: s_,
    LEFTWHITECORNERBRACKET: l_,
    LOCALHOST: Ug,
    NL: Xg,
    NUM: Jg,
    OPENANGLEBRACKET: r_,
    OPENBRACE: Zg,
    OPENBRACKET: $g,
    OPENPAREN: t_,
    PERCENT: D_,
    PIPE: O_,
    PLUS: k_,
    POUND: A_,
    QUERY: j_,
    QUOTE: M_,
    RIGHTCORNERBRACKET: c_,
    RIGHTWHITECORNERBRACKET: u_,
    SCHEME: Kg,
    SEMI: P_,
    SLASH: F_,
    SLASH_SCHEME: qg,
    SYM: z_,
    TILDE: I_,
    TLD: Wg,
    UNDERSCORE: L_,
    UTLD: Gg,
    UWORD: Bg,
    WORD: zg,
    WS: Yg,
  }),
  V_ = /[a-z]/,
  H_ = /\p{L}/u,
  U_ = /\p{Emoji}/u,
  W_ = /\d/,
  G_ = /\s/,
  K_ = `\r`,
  q_ = `
`,
  J_ = `️`,
  Y_ = `‍`,
  X_ = `￼`,
  Z_ = null,
  Q_ = null;
function $_(e = []) {
  let t = {};
  Lg.groups = t;
  let n = new Lg();
  ((Z_ ??= rv(Sg)),
    (Q_ ??= rv(Cg)),
    Q(n, `'`, m_),
    Q(n, `{`, Zg),
    Q(n, `}`, Qg),
    Q(n, `[`, $g),
    Q(n, `]`, e_),
    Q(n, `(`, t_),
    Q(n, `)`, n_),
    Q(n, `<`, r_),
    Q(n, `>`, i_),
    Q(n, `（`, a_),
    Q(n, `）`, o_),
    Q(n, `「`, s_),
    Q(n, `」`, c_),
    Q(n, `『`, l_),
    Q(n, `』`, u_),
    Q(n, `＜`, d_),
    Q(n, `＞`, f_),
    Q(n, `&`, p_),
    Q(n, `*`, h_),
    Q(n, `@`, g_),
    Q(n, "`", v_),
    Q(n, `^`, y_),
    Q(n, `:`, b_),
    Q(n, `,`, x_),
    Q(n, `$`, S_),
    Q(n, `.`, C_),
    Q(n, `=`, w_),
    Q(n, `!`, T_),
    Q(n, `-`, E_),
    Q(n, `%`, D_),
    Q(n, `|`, O_),
    Q(n, `+`, k_),
    Q(n, `#`, A_),
    Q(n, `?`, j_),
    Q(n, `"`, M_),
    Q(n, `/`, F_),
    Q(n, `;`, P_),
    Q(n, `~`, I_),
    Q(n, `_`, L_),
    Q(n, `\\`, __),
    Q(n, `・`, N_));
  let r = Z(n, W_, Jg, { [wg]: !0 });
  Z(r, W_, r);
  let i = Z(r, V_, Vg, { [Dg]: !0 }),
    a = Z(r, H_, Hg, { [Og]: !0 }),
    o = Z(n, V_, zg, { [Tg]: !0 });
  (Z(o, W_, i), Z(o, V_, o), Z(i, W_, i), Z(i, V_, i));
  let s = Z(n, H_, Bg, { [Eg]: !0 });
  (Z(s, V_), Z(s, W_, a), Z(s, H_, s), Z(a, W_, a), Z(a, V_), Z(a, H_, a));
  let c = Q(n, q_, Xg, { [Ng]: !0 }),
    l = Q(n, K_, Yg, { [Ng]: !0 }),
    u = Z(n, G_, Yg, { [Ng]: !0 });
  (Q(n, X_, u),
    Q(l, q_, c),
    Q(l, X_, u),
    Z(l, G_, u),
    Q(u, K_),
    Q(u, q_),
    Z(u, G_, u),
    Q(u, X_, u));
  let d = Z(n, U_, R_, { [Ag]: !0 });
  (Q(d, `#`), Z(d, U_, d), Q(d, J_, d));
  let f = Q(d, Y_);
  (Q(f, `#`), Z(f, U_, d));
  let p = [
      [V_, o],
      [W_, i],
    ],
    m = [
      [V_, null],
      [H_, s],
      [W_, a],
    ];
  for (let e = 0; e < Z_.length; e++) nv(n, Z_[e], Wg, zg, p);
  for (let e = 0; e < Q_.length; e++) nv(n, Q_[e], Gg, Bg, m);
  (Fg(Wg, { tld: !0, ascii: !0 }, t),
    Fg(Gg, { utld: !0, alpha: !0 }, t),
    nv(n, `file`, Kg, zg, p),
    nv(n, `mailto`, Kg, zg, p),
    nv(n, `http`, qg, zg, p),
    nv(n, `https`, qg, zg, p),
    nv(n, `ftp`, qg, zg, p),
    nv(n, `ftps`, qg, zg, p),
    Fg(Kg, { scheme: !0, ascii: !0 }, t),
    Fg(qg, { slashscheme: !0, ascii: !0 }, t),
    (e = e.sort((e, t) => (e[0] > t[0] ? 1 : -1))));
  for (let t = 0; t < e.length; t++) {
    let r = e[t][0],
      i = e[t][1] ? { [jg]: !0 } : { [Mg]: !0 };
    (r.indexOf(`-`) >= 0
      ? (i[kg] = !0)
      : V_.test(r)
        ? W_.test(r)
          ? (i[Dg] = !0)
          : (i[Tg] = !0)
        : (i[wg] = !0),
      Rg(n, r, r, i));
  }
  return (
    Rg(n, `localhost`, Ug, { ascii: !0 }),
    (n.jd = new Lg(z_)),
    { start: n, tokens: Object.assign({ groups: t }, B_) }
  );
}
function ev(e, t) {
  let n = tv(t.replace(/[A-Z]/g, (e) => e.toLowerCase())),
    r = n.length,
    i = [],
    a = 0,
    o = 0;
  for (; o < r;) {
    let s = e,
      c = null,
      l = 0,
      u = null,
      d = -1,
      f = -1;
    for (; o < r && (c = s.go(n[o]));)
      ((s = c),
        s.accepts() ? ((d = 0), (f = 0), (u = s)) : d >= 0 && ((d += n[o].length), f++),
        (l += n[o].length),
        (a += n[o].length),
        o++);
    ((a -= d), (o -= f), (l -= d), i.push({ t: u.t, v: t.slice(a - l, a), s: a - l, e: a }));
  }
  return i;
}
function tv(e) {
  let t = [],
    n = e.length,
    r = 0;
  for (; r < n;) {
    let i = e.charCodeAt(r),
      a,
      o =
        i < 55296 || i > 56319 || r + 1 === n || (a = e.charCodeAt(r + 1)) < 56320 || a > 57343
          ? e[r]
          : e.slice(r, r + 2);
    (t.push(o), (r += o.length));
  }
  return t;
}
function nv(e, t, n, r, i) {
  let a,
    o = t.length;
  for (let n = 0; n < o - 1; n++) {
    let o = t[n];
    (e.j[o] ? (a = e.j[o]) : ((a = new Lg(r)), (a.jr = i.slice()), (e.j[o] = a)), (e = a));
  }
  return ((a = new Lg(n)), (a.jr = i.slice()), (e.j[t[o - 1]] = a), a);
}
function rv(e) {
  let t = [],
    n = [],
    r = 0;
  for (; r < e.length;) {
    let i = 0;
    for (; `0123456789`.indexOf(e[r + i]) >= 0;) i++;
    if (i > 0) {
      t.push(n.join(``));
      for (let t = parseInt(e.substring(r, r + i), 10); t > 0; t--) n.pop();
      r += i;
    } else (n.push(e[r]), r++);
  }
  return t;
}
var iv = {
  defaultProtocol: `http`,
  events: null,
  format: ov,
  formatHref: ov,
  nl2br: !1,
  tagName: `a`,
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null,
};
function av(e, t = null) {
  let n = Object.assign({}, iv);
  e && (n = Object.assign(n, e instanceof av ? e.o : e));
  let r = n.ignoreTags,
    i = [];
  for (let e = 0; e < r.length; e++) i.push(r[e].toUpperCase());
  ((this.o = n), t && (this.defaultRender = t), (this.ignoreTags = i));
}
av.prototype = {
  o: iv,
  ignoreTags: [],
  defaultRender(e) {
    return e;
  },
  check(e) {
    return this.get(`validate`, e.toString(), e);
  },
  get(e, t, n) {
    let r = t != null,
      i = this.o[e];
    return (
      i &&
      (typeof i == `object`
        ? ((i = n.t in i ? i[n.t] : iv[e]), typeof i == `function` && r && (i = i(t, n)))
        : typeof i == `function` && r && (i = i(t, n.t, n)),
      i)
    );
  },
  getObj(e, t, n) {
    let r = this.o[e];
    return (typeof r == `function` && t != null && (r = r(t, n.t, n)), r);
  },
  render(e) {
    let t = e.render(this);
    return (this.get(`render`, null, e) || this.defaultRender)(t, e.t, e);
  },
};
function ov(e) {
  return e;
}
function sv(e, t) {
  ((this.t = `token`), (this.v = e), (this.tk = t));
}
sv.prototype = {
  isLink: !1,
  toString() {
    return this.v;
  },
  toHref(e) {
    return this.toString();
  },
  toFormattedString(e) {
    let t = this.toString(),
      n = e.get(`truncate`, t, this),
      r = e.get(`format`, t, this);
    return n && r.length > n ? r.substring(0, n) + `…` : r;
  },
  toFormattedHref(e) {
    return e.get(`formatHref`, this.toHref(e.get(`defaultProtocol`)), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(e = iv.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  validate(e) {
    return e.get(`validate`, this.toString(), this);
  },
  render(e) {
    let t = this,
      n = this.toHref(e.get(`defaultProtocol`)),
      r = e.get(`formatHref`, n, this),
      i = e.get(`tagName`, n, t),
      a = this.toFormattedString(e),
      o = {},
      s = e.get(`className`, n, t),
      c = e.get(`target`, n, t),
      l = e.get(`rel`, n, t),
      u = e.getObj(`attributes`, n, t),
      d = e.getObj(`events`, n, t);
    return (
      (o.href = r),
      s && (o.class = s),
      c && (o.target = c),
      l && (o.rel = l),
      u && Object.assign(o, u),
      { tagName: i, attributes: o, content: a, eventListeners: d }
    );
  },
};
function cv(e, t) {
  class n extends sv {
    constructor(t, n) {
      (super(t, n), (this.t = e));
    }
  }
  for (let e in t) n.prototype[e] = t[e];
  return ((n.t = e), n);
}
var lv = cv(`email`, {
    isLink: !0,
    toHref() {
      return `mailto:` + this.toString();
    },
  }),
  uv = cv(`text`),
  dv = cv(`nl`),
  fv = cv(`url`, {
    isLink: !0,
    toHref(e = iv.defaultProtocol) {
      return this.hasProtocol() ? this.v : `${e}://${this.v}`;
    },
    hasProtocol() {
      let e = this.tk;
      return e.length >= 2 && e[0].t !== Ug && e[1].t === b_;
    },
  }),
  pv = (e) => new Lg(e);
function mv({ groups: e }) {
  let t = e.domain.concat([p_, h_, g_, __, v_, y_, S_, w_, E_, Jg, D_, O_, k_, A_, F_, z_, I_, L_]),
    n = [
      m_,
      b_,
      x_,
      C_,
      T_,
      D_,
      j_,
      M_,
      P_,
      r_,
      i_,
      Zg,
      Qg,
      e_,
      $g,
      t_,
      n_,
      a_,
      o_,
      s_,
      c_,
      l_,
      u_,
      d_,
      f_,
    ],
    r = [p_, m_, h_, __, v_, y_, S_, w_, E_, Zg, Qg, D_, O_, k_, A_, j_, F_, z_, I_, L_],
    i = pv(),
    a = Q(i, I_);
  (X(a, r, a), X(a, e.domain, a));
  let o = pv(),
    s = pv(),
    c = pv();
  (X(i, e.domain, o), X(i, e.scheme, s), X(i, e.slashscheme, c), X(o, r, a), X(o, e.domain, o));
  let l = Q(o, g_);
  (Q(a, g_, l), Q(s, g_, l), Q(c, g_, l));
  let u = Q(a, C_);
  (X(u, r, a), X(u, e.domain, a));
  let d = pv();
  (X(l, e.domain, d), X(d, e.domain, d));
  let f = Q(d, C_);
  X(f, e.domain, d);
  let p = pv(lv);
  (X(f, e.tld, p), X(f, e.utld, p), Q(l, Ug, p));
  let m = Q(d, E_);
  (Q(m, E_, m), X(m, e.domain, d), X(p, e.domain, d), Q(p, C_, f), Q(p, E_, m));
  let h = Q(o, E_),
    g = Q(o, C_);
  (Q(h, E_, h), X(h, e.domain, o), X(g, r, a), X(g, e.domain, o));
  let _ = pv(fv);
  (X(g, e.tld, _),
    X(g, e.utld, _),
    X(_, e.domain, o),
    X(_, r, a),
    Q(_, C_, g),
    Q(_, E_, h),
    Q(_, g_, l));
  let v = Q(_, b_),
    y = pv(fv);
  X(v, e.numeric, y);
  let b = pv(fv),
    x = pv();
  (X(b, t, b), X(b, n, x), X(x, t, b), X(x, n, x), Q(_, F_, b), Q(y, F_, b));
  let S = Q(s, b_),
    C = Q(Q(Q(c, b_), F_), F_);
  (X(s, e.domain, o),
    Q(s, C_, g),
    Q(s, E_, h),
    X(c, e.domain, o),
    Q(c, C_, g),
    Q(c, E_, h),
    X(S, e.domain, b),
    Q(S, F_, b),
    Q(S, j_, b),
    X(C, e.domain, b),
    X(C, t, b),
    Q(C, F_, b));
  let w = [
    [Zg, Qg],
    [$g, e_],
    [t_, n_],
    [r_, i_],
    [a_, o_],
    [s_, c_],
    [l_, u_],
    [d_, f_],
  ];
  for (let e = 0; e < w.length; e++) {
    let [r, i] = w[e],
      a = Q(b, r);
    Q(x, r, a);
    let o = pv(fv);
    X(a, t, o);
    let s = pv();
    (X(a, n, s),
      Q(a, i, b),
      X(o, t, o),
      X(o, n, s),
      X(s, t, o),
      X(s, n, s),
      Q(o, i, b),
      Q(s, i, b));
  }
  return (Q(i, Ug, _), Q(i, Xg, dv), { start: i, tokens: B_ });
}
function hv(e, t, n) {
  let r = n.length,
    i = 0,
    a = [],
    o = [];
  for (; i < r;) {
    let s = e,
      c = null,
      l = null,
      u = 0,
      d = null,
      f = -1;
    for (; i < r && !(c = s.go(n[i].t));) o.push(n[i++]);
    for (; i < r && (l = c || s.go(n[i].t));)
      ((c = null), (s = l), s.accepts() ? ((f = 0), (d = s)) : f >= 0 && f++, i++, u++);
    if (f < 0) ((i -= u), i < r && (o.push(n[i]), i++));
    else {
      (o.length > 0 && (a.push(gv(uv, t, o)), (o = [])), (i -= f), (u -= f));
      let e = d.t,
        r = n.slice(i - u, i);
      a.push(gv(e, t, r));
    }
  }
  return (o.length > 0 && a.push(gv(uv, t, o)), a);
}
function gv(e, t, n) {
  let r = n[0].s,
    i = n[n.length - 1].e;
  return new e(t.slice(r, i), n);
}
var _v = (typeof console < `u` && console && console.warn) || (() => {}),
  vv = `until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`,
  $ = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: !1,
  };
function yv() {
  return (
    (Lg.groups = {}),
    ($.scanner = null),
    ($.parser = null),
    ($.tokenQueue = []),
    ($.pluginQueue = []),
    ($.customSchemes = []),
    ($.initialized = !1),
    $
  );
}
function bv(e, t = !1) {
  if (
    ($.initialized &&
      _v(`linkifyjs: already initialized - will not register custom scheme "${e}" ${vv}`),
    !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
  )
    throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  $.customSchemes.push([e, t]);
}
function xv() {
  $.scanner = $_($.customSchemes);
  for (let e = 0; e < $.tokenQueue.length; e++) $.tokenQueue[e][1]({ scanner: $.scanner });
  $.parser = mv($.scanner.tokens);
  for (let e = 0; e < $.pluginQueue.length; e++)
    $.pluginQueue[e][1]({ scanner: $.scanner, parser: $.parser });
  return (($.initialized = !0), $);
}
function Sv(e) {
  return ($.initialized || xv(), hv($.parser.start, e, ev($.scanner.start, e)));
}
Sv.scan = ev;
function Cv(e, t = null, n = null) {
  if (t && typeof t == `object`) {
    if (n) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    ((n = t), (t = null));
  }
  let r = new av(n),
    i = Sv(e),
    a = [];
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    n.isLink && (!t || n.t === t) && r.check(n) && a.push(n.toFormattedObject(r));
  }
  return a;
}
var wv = `[\0- \xA0 ᠎ -\u2029 　]`,
  Tv = new RegExp(wv),
  Ev = RegExp(`${wv}$`),
  Dv = new RegExp(wv, `g`);
function Ov(e) {
  return e.length === 1
    ? e[0].isLink
    : e.length === 3 && e[1].isLink
      ? [`()`, `[]`].includes(e[0].value + e[2].value)
      : !1;
}
function kv(e) {
  return new B({
    key: new V(`autolink`),
    appendTransaction: (t, n, r) => {
      let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc),
        a = t.some((e) => e.getMeta(`preventAutolink`));
      if (!i || a) return;
      let { tr: o } = r;
      if (
        (Jd(yd(n.doc, [...t])).forEach(({ newRange: t }) => {
          let n = xd(r.doc, t, (e) => e.isTextblock),
            i,
            a;
          if (n.length > 1)
            ((i = n[0]), (a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, ` `)));
          else if (n.length) {
            let e = r.doc.textBetween(t.from, t.to, ` `, ` `);
            if (!Ev.test(e)) return;
            ((i = n[0]), (a = r.doc.textBetween(i.pos, t.to, void 0, ` `)));
          }
          if (i && a) {
            let t = a.split(Tv).filter(Boolean);
            if (t.length <= 0) return !1;
            let n = t[t.length - 1],
              s = i.pos + a.lastIndexOf(n);
            if (!n) return !1;
            let c = Sv(n).map((t) => t.toObject(e.defaultProtocol));
            if (!Ov(c)) return !1;
            c.filter((e) => e.isLink)
              .map((e) => ({ ...e, from: s + e.start + 1, to: s + e.end + 1 }))
              .filter(
                (e) =>
                  !r.schema.marks.code || !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code),
              )
              .filter((t) => e.validate(t.value))
              .filter((t) => e.shouldAutoLink(t.value))
              .forEach((t) => {
                Yd(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) ||
                  o.addMark(t.from, t.to, e.type.create({ href: t.href }));
              });
          }
        }),
        o.steps.length)
      )
        return o;
    },
  });
}
function Av(e) {
  return new B({
    key: new V(`handleClickLink`),
    props: {
      handleClick: (t, n, r) => {
        if (r.button !== 0 || !t.editable) return !1;
        let i = null;
        if (r.target instanceof HTMLAnchorElement) i = r.target;
        else {
          let t = r.target;
          if (!t) return !1;
          let n = e.editor.view.dom;
          ((i = t.closest(`a`)), i && !n.contains(i) && (i = null));
        }
        if (!i) return !1;
        let a = !1;
        if (
          (e.enableClickSelection && (a = e.editor.commands.extendMarkRange(e.type.name)),
          e.openOnClick)
        ) {
          let n = Gd(t.state, e.type.name),
            r = i.href ?? n.href,
            o = i.target ?? n.target;
          r && (window.open(r, o), (a = !0));
        }
        return a;
      },
    },
  });
}
var jv = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)$/,
  Mv = /\[([^[\]]+)\]\(((?:[^\s()]|\([^\s()]*\))+)(?:\s+(?:(["'])(.*?)\3|“(.*?)”|‘(.*?)’))?\)/g;
function Nv(e, t) {
  let n = 0;
  for (let r = t - 1; r >= 0 && e[r] === `\\`; --r) n += 1;
  return n % 2 == 1;
}
function Pv(e, t) {
  let n = 0,
    r = 0;
  for (; r < t;) {
    if (e[r] !== "`" || (n === 0 && Nv(e, r))) {
      r += 1;
      continue;
    }
    let i = 0;
    for (; r < t && e[r] === "`";) ((i += 1), (r += 1));
    n === 0 ? (n = i) : i === n && (n = 0);
  }
  return n > 0;
}
function Fv(e, t, n) {
  let [, r, i] = t;
  return (t.index ? e[t.index - 1] : void 0) === `!` || Nv(e, t.index ?? 0) || Pv(e, t.index ?? 0)
    ? !1
    : !!r.trim() && n(i);
}
function Iv(e) {
  let [t, n, r, , i, a, o] = e,
    s = i ?? a ?? o;
  return {
    index: e.index ?? 0,
    text: t,
    replaceWith: n,
    data: { href: r, title: s || null, markdown: !0 },
  };
}
function Lv(e, t) {
  return e.index < t.index + t.text.length && t.index < e.index + e.text.length;
}
function Rv(e) {
  return { href: e.data?.href, title: e.data?.title ?? null };
}
function zv(e) {
  let t = $p({
    find: (t) => {
      let n = jv.exec(t);
      return !n || !Fv(t, n, e.isAllowedHref) ? null : Iv(n);
    },
    type: e.type,
    getAttributes: Rv,
  });
  return new wp({
    find: t.find,
    handler: (e) => {
      let n = t.handler(e);
      return (
        n !== null && e.state.tr.steps.length && e.state.tr.setMeta(`preventAutolink`, !0), n
      );
    },
  });
}
function Bv(e) {
  let t = am({
    find: (t) => {
      let n = [];
      for (let r of t.matchAll(Mv)) Fv(t, r, e.isAllowedHref) && n.push(Iv(r));
      let r = (e.findPlainUrls?.call(e, t) ?? []).filter((e) => !n.some((t) => Lv(t, e)));
      return [...n, ...r];
    },
    type: e.type,
    getAttributes: Rv,
  });
  return new Ap({
    find: t.find,
    handler: (e) => {
      let n = t.handler(e);
      return (
        n !== null &&
          e.state.tr.steps.length &&
          e.match.data?.markdown &&
          e.state.tr.setMeta(`preventAutolink`, !0),
        n
      );
    },
  });
}
function Vv(e) {
  return new B({
    key: new V(`handlePasteLink`),
    props: {
      handlePaste: (t, n, r) => {
        let { shouldAutoLink: i } = e,
          { state: a } = t,
          { selection: o } = a,
          { empty: s } = o;
        if (s) return !1;
        let c = ``;
        r.content.forEach((e) => {
          c += e.textContent;
        });
        let l = Cv(c, { defaultProtocol: e.defaultProtocol }).find(
          (e) => e.isLink && e.value === c,
        );
        return !c || !l || (i !== void 0 && !i(l.value))
          ? !1
          : e.editor.commands.setMark(e.type, { href: l.href });
      },
    },
  });
}
function Hv(e, t) {
  let n = [`http`, `https`, `ftp`, `ftps`, `mailto`, `tel`, `callto`, `sms`, `cid`, `xmpp`];
  return (
    t &&
      t.forEach((e) => {
        let t = typeof e == `string` ? e : e.scheme;
        t && n.push(t);
      }),
    !e ||
      e
        .replace(Dv, ``)
        .match(
          RegExp(
            `^(?:(?:${n.map((e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, `\\$&`)).join(`|`)}):|[^a-z]|[a-z0-9+.\\-]+(?:[^a-z+.\\-:]|$))`,
            `i`,
          ),
        )
  );
}
var Uv = kp.create({
    name: `link`,
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate() {
      (this.options.validate &&
        !this.options.shouldAutoLink &&
        ((this.options.shouldAutoLink = this.options.validate),
        console.warn(
          "The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.",
        )),
        this.options.protocols.forEach((e) => {
          typeof e == `string` ? bv(e) : bv(e.scheme, e.optionalSlashes);
        }));
    },
    onDestroy() {
      yv();
    },
    inclusive() {
      return this.options.autolink;
    },
    addOptions() {
      return {
        openOnClick: !0,
        enableClickSelection: !1,
        linkOnPaste: !0,
        markdownLinks: !1,
        autolink: !0,
        protocols: [],
        defaultProtocol: `http`,
        HTMLAttributes: { target: `_blank`, rel: `noopener noreferrer nofollow`, class: null },
        isAllowedUri: (e, t) => !!Hv(e, t.protocols),
        validate: (e) => !!e,
        shouldAutoLink: (e) => {
          let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e),
            n = /^[a-z][a-z0-9+.-]*:/i.test(e);
          if (t || (n && !e.includes(`@`))) return !0;
          let r = (e.includes(`@`) ? e.split(`@`).pop() : e).split(/[/?#:]/)[0];
          return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(r) || !/\./.test(r));
        },
      };
    },
    addAttributes() {
      return {
        href: {
          default: null,
          parseHTML(e) {
            return e.getAttribute(`href`);
          },
        },
        target: { default: this.options.HTMLAttributes.target ?? null },
        rel: { default: this.options.HTMLAttributes.rel ?? null },
        class: { default: this.options.HTMLAttributes.class ?? null },
        title: { default: null },
      };
    },
    parseHTML() {
      return [
        {
          tag: `a[href]`,
          getAttrs: (e) => {
            let t = e.getAttribute(`href`);
            return !t ||
              !this.options.isAllowedUri(t, {
                defaultValidate: (e) => !!Hv(e, this.options.protocols),
                protocols: this.options.protocols,
                defaultProtocol: this.options.defaultProtocol,
              })
              ? !1
              : null;
          },
        },
      ];
    },
    renderHTML({ HTMLAttributes: e }) {
      return this.options.isAllowedUri(e.href, {
        defaultValidate: (e) => !!Hv(e, this.options.protocols),
        protocols: this.options.protocols,
        defaultProtocol: this.options.defaultProtocol,
      })
        ? [`a`, K(this.options.HTMLAttributes, e), 0]
        : [`a`, K(this.options.HTMLAttributes, { ...e, href: `` }), 0];
    },
    markdownTokenName: `link`,
    parseMarkdown: (e, t) =>
      t.applyMark(`link`, t.parseInline(e.tokens || []), { href: e.href, title: e.title || null }),
    renderMarkdown: (e, t) => {
      let n = e.attrs?.href ?? ``,
        r = e.attrs?.title ?? ``,
        i = t.renderChildren(e);
      return r ? `[${i}](${n} "${r}")` : `[${i}](${n})`;
    },
    addCommands() {
      return {
        setLink:
          (e) =>
          ({ chain: t }) => {
            let { href: n } = e;
            return this.options.isAllowedUri(n, {
              defaultValidate: (e) => !!Hv(e, this.options.protocols),
              protocols: this.options.protocols,
              defaultProtocol: this.options.defaultProtocol,
            })
              ? t().setMark(this.name, e).setMeta(`preventAutolink`, !0).run()
              : !1;
          },
        toggleLink:
          (e) =>
          ({ chain: t }) => {
            let { href: n } = e || {};
            return n &&
              !this.options.isAllowedUri(n, {
                defaultValidate: (e) => !!Hv(e, this.options.protocols),
                protocols: this.options.protocols,
                defaultProtocol: this.options.defaultProtocol,
              })
              ? !1
              : t()
                  .toggleMark(this.name, e, { extendEmptyMarkRange: !0 })
                  .setMeta(`preventAutolink`, !0)
                  .run();
          },
        unsetLink:
          () =>
          ({ chain: e }) =>
            e()
              .unsetMark(this.name, { extendEmptyMarkRange: !0 })
              .setMeta(`preventAutolink`, !0)
              .run(),
      };
    },
    addInputRules() {
      return this.options.markdownLinks
        ? [
            zv({
              type: this.type,
              isAllowedHref: (e) =>
                this.options.isAllowedUri(e, {
                  defaultValidate: (e) => !!Hv(e, this.options.protocols),
                  protocols: this.options.protocols,
                  defaultProtocol: this.options.defaultProtocol,
                }),
            }),
          ]
        : [];
    },
    addPasteRules() {
      let e = (e) => {
        let t = [];
        if (e) {
          let { protocols: n, defaultProtocol: r } = this.options;
          Cv(e)
            .filter(
              (e) =>
                e.isLink &&
                this.options.isAllowedUri(e.value, {
                  defaultValidate: (e) => !!Hv(e, n),
                  protocols: n,
                  defaultProtocol: r,
                }),
            )
            .forEach((e) => {
              this.options.shouldAutoLink(e.value) &&
                t.push({ text: e.value, data: { href: e.href }, index: e.start });
            });
        }
        return t;
      };
      return this.options.markdownLinks
        ? [
            Bv({
              type: this.type,
              isAllowedHref: (e) =>
                this.options.isAllowedUri(e, {
                  defaultValidate: (e) => !!Hv(e, this.options.protocols),
                  protocols: this.options.protocols,
                  defaultProtocol: this.options.defaultProtocol,
                }),
              findPlainUrls: e,
            }),
          ]
        : [am({ find: e, type: this.type, getAttributes: (e) => ({ href: e.data?.href }) })];
    },
    addProseMirrorPlugins() {
      let e = [],
        { protocols: t, defaultProtocol: n } = this.options;
      return (
        this.options.autolink &&
          e.push(
            kv({
              type: this.type,
              defaultProtocol: this.options.defaultProtocol,
              validate: (e) =>
                this.options.isAllowedUri(e, {
                  defaultValidate: (e) => !!Hv(e, t),
                  protocols: t,
                  defaultProtocol: n,
                }),
              shouldAutoLink: this.options.shouldAutoLink,
            }),
          ),
        e.push(
          Av({
            type: this.type,
            editor: this.editor,
            openOnClick: this.options.openOnClick === `whenNotEditable` || this.options.openOnClick,
            enableClickSelection: this.options.enableClickSelection,
          }),
        ),
        this.options.linkOnPaste &&
          e.push(
            Vv({
              editor: this.editor,
              defaultProtocol: this.options.defaultProtocol,
              type: this.type,
              shouldAutoLink: this.options.shouldAutoLink,
            }),
          ),
        e
      );
    },
  }),
  Wv = `listItem`,
  Gv = `textStyle`,
  Kv = /^\s*([-+*])\s$/,
  qv = rm.create({
    name: `bulletList`,
    addOptions() {
      return { itemTypeName: `listItem`, HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 };
    },
    group: `block list`,
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [{ tag: `ul` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`ul`, K(this.options.HTMLAttributes, e), 0];
    },
    markdownTokenName: `list`,
    parseMarkdown: (e, t) =>
      e.type !== `list` || e.ordered
        ? []
        : { type: `bulletList`, content: e.items ? t.parseChildren(e.items) : [] },
    renderMarkdown: (e, t) =>
      e.content
        ? t.renderChildren(
            e.content,
            `
`,
          )
        : ``,
    markdownOptions: { indentsContent: !0 },
    addCommands() {
      return {
        toggleBulletList:
          () =>
          ({ commands: e, chain: t }) =>
            this.options.keepAttributes
              ? t()
                  .toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                  .updateAttributes(Wv, this.editor.getAttributes(Gv))
                  .run()
              : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-8": () => this.editor.commands.toggleBulletList() };
    },
    addInputRules() {
      let e = nm({ find: Kv, type: this.type });
      return (
        (this.options.keepMarks || this.options.keepAttributes) &&
          (e = nm({
            find: Kv,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: () => this.editor.getAttributes(Gv),
            editor: this.editor,
          })),
        [e]
      );
    },
  }),
  Jv = (e, t, n) => {
    let { selection: r } = e;
    if (!r.empty) return null;
    let { $from: i } = r;
    if (!i.parent.isTextblock || i.parentOffset !== i.parent.content.size) return null;
    let a = -1;
    for (let e = i.depth; e > 0; --e)
      if (i.node(e).type.name === t) {
        a = e;
        break;
      }
    if (a < 0) return null;
    let o = i.node(a),
      s = i.index(a);
    if (s + 1 >= o.childCount) return null;
    let c = o.child(s + 1);
    if (!n.includes(c.type.name)) return null;
    let l = e.schema.nodes[t],
      u = !1;
    if (
      (c.forEach((e) => {
        e.type === l && e.childCount > 1 && (u = !0);
      }),
      !u)
    )
      return null;
    let d = e.doc.resolve(i.after()).nodeAfter;
    if (!d || !n.includes(d.type.name)) return null;
    let f = [];
    return (
      d.forEach((e) => {
        f.push(e);
      }),
      f.length === 0
        ? null
        : {
            listItemDepth: a,
            nestedList: d,
            nestedListPos: i.after(),
            insertPos: i.after(a),
            items: f,
          }
    );
  },
  Yv = (e, t, n, r) => {
    let i = Jv(e, n, r);
    if (!i) return !1;
    let { selection: a } = e,
      { nestedList: o, nestedListPos: s, insertPos: c, items: l } = i,
      u = e.tr;
    u.delete(s, s + o.nodeSize);
    let d = u.mapping.map(c);
    return (u.insert(d, P.from(l)), u.setSelection(a.map(u.doc, u.mapping)), t && t(u), !0);
  },
  Xv = (e, t, n) => Yv(e.state, e.view.dispatch, t, n),
  Zv = (e, t) =>
    q.create({
      name: `${e}BranchingDeleteKeymap`,
      priority: 101,
      addKeyboardShortcuts() {
        let n = () => Xv(this.editor, e, t);
        return { Delete: n, "Mod-Delete": n };
      },
    }),
  Qv = [
    [1e3, `m`],
    [900, `cm`],
    [500, `d`],
    [400, `cd`],
    [100, `c`],
    [90, `xc`],
    [50, `l`],
    [40, `xl`],
    [10, `x`],
    [9, `ix`],
    [5, `v`],
    [4, `iv`],
    [1, `i`],
  ],
  $v = `abcdefghijklmnopqrstuvwxyz`,
  ey = String.raw`\d+|[ivxlcdmIVXLCDM]+|${`[a-zA-Z]{1,2}`}`;
function ty(e) {
  let t = e,
    n = ``;
  for (let [e, r] of Qv) for (; t >= e;) ((n += r), (t -= e));
  return n;
}
function ny(e) {
  return ty(e).toUpperCase();
}
function ry(e) {
  let t = e.toLowerCase(),
    n = 0,
    r = 0;
  for (; n < t.length;) {
    let e = !1;
    for (let [i, a] of Qv)
      if (t.startsWith(a, n)) {
        ((r += i), (n += a.length), (e = !0));
        break;
      }
    if (!e) return 0;
  }
  return r;
}
function iy(e) {
  if (!/^[ivxlcdmIVXLCDM]+$/.test(e)) return !1;
  let t = ry(e);
  return t <= 0 ? !1 : (e === e.toLowerCase() ? ty(t) : ny(t)) === e;
}
function ay(e) {
  let t = e.toLowerCase();
  if (t.length === 1) return t.charCodeAt(0) - 97 + 1;
  if (t.length === 2) {
    let e = t.charCodeAt(0) - 97,
      n = t.charCodeAt(1) - 97;
    return (e + 1) * 26 + n + 1;
  }
  return 0;
}
function oy(e) {
  if (e <= 26) return $v[e - 1];
  let t = Math.floor((e - 1) / 26) - 1,
    n = (e - 1) % 26;
  return t < 0 ? $v[n] : $v[t] + $v[n];
}
function sy(e) {
  if (e && !/^\d+$/.test(e)) {
    if (iy(e)) return e === e.toLowerCase() ? `i` : `I`;
    if (/^[a-z]{1,2}$/.test(e)) return `a`;
    if (/^[A-Z]{1,2}$/.test(e)) return `A`;
  }
}
function cy(e) {
  if (/^\d+$/.test(e)) return parseInt(e, 10);
  let t = sy(e);
  if (t === `i` || t === `I`) return ry(e);
  if (t === `a` || t === `A`) {
    let t = ay(e);
    return t > 0 ? t : 1;
  }
  let n = parseInt(e, 10);
  return Number.isNaN(n) ? 1 : n;
}
function ly(e, t) {
  if (e === `numeric`) return String(t);
  switch (e) {
    case `a`:
      return oy(t);
    case `A`:
      return oy(t).toUpperCase();
    case `i`:
      return ty(t);
    case `I`:
      return ny(t);
    default:
      return String(t);
  }
}
function uy(e) {
  if (e.length === 0) return !1;
  let t = sy(e[0]) ?? `numeric`,
    n = cy(e[0]);
  if (n < 1) return !1;
  for (let r = 0; r < e.length; r++) {
    let i = ly(t, n + r);
    if (e[r] !== i) return !1;
  }
  return !0;
}
function dy(e) {
  return { type: sy(e), start: cy(e) };
}
function fy(e) {
  let { type: t, start: n } = dy(e),
    r = {};
  return (t && (r.type = t), n !== 1 && (r.start = n), r);
}
function py(e, t, n = `. `) {
  let r = t + 1;
  if (!e || e === `1`) return `${r}${n}`;
  switch (e) {
    case `a`:
      return `${oy(r)}${n}`;
    case `A`:
      return `${oy(r).toUpperCase()}${n}`;
    case `i`:
      return `${ty(r)}${n}`;
    case `I`:
      return `${ny(r)}${n}`;
    default:
      return `${r}${n}`;
  }
}
function my(e) {
  let t = e.tokens?.[0];
  return !!(
    e.text &&
    e.tokens?.length === 1 &&
    t?.type === `list` &&
    t.ordered &&
    t.raw === e.text
  );
}
function hy(e, t) {
  return t.tokenizeInline
    ? t.parseInline(t.tokenizeInline(e))
    : t.parseInline([{ type: `text`, raw: e, text: e }]);
}
var gy = rm.create({
    name: `listItem`,
    addOptions() {
      return {
        HTMLAttributes: {},
        bulletListTypeName: `bulletList`,
        orderedListTypeName: `orderedList`,
      };
    },
    content: `paragraph block*`,
    defining: !0,
    parseHTML() {
      return [{ tag: `li` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`li`, K(this.options.HTMLAttributes, e), 0];
    },
    markdownTokenName: `list_item`,
    parseMarkdown: (e, t) => {
      if (e.type !== `list_item`) return [];
      let n = t.parseBlockChildren ?? t.parseChildren,
        r = [];
      if (e.tokens && e.tokens.length > 0) {
        if (my(e))
          return {
            type: `listItem`,
            content: [{ type: `paragraph`, content: hy(e.text || ``, t) }],
          };
        if (e.tokens.some((e) => e.type === `paragraph`)) r = n(e.tokens);
        else {
          let i = e.tokens[0];
          if (i && i.type === `text` && i.tokens && i.tokens.length > 0) {
            if (
              ((r = [{ type: `paragraph`, content: t.parseInline(i.tokens) }]), e.tokens.length > 1)
            ) {
              let t = n(e.tokens.slice(1));
              r.push(...t);
            }
          } else r = n(e.tokens);
        }
      }
      return (
        r.length === 0 && (r = [{ type: `paragraph`, content: [] }]),
        { type: `listItem`, content: r }
      );
    },
    renderMarkdown: (e, t, n) =>
      xp(
        e,
        t,
        (e) => {
          if (e.parentType === `bulletList`) return `- `;
          if (e.parentType === `orderedList`) {
            var t, n;
            let r = ((t = e.meta) == null || (t = t.parentAttrs) == null ? void 0 : t.start) || 1;
            return py(
              (n = e.meta) == null || (n = n.parentAttrs) == null ? void 0 : n.type,
              r - 1 + (e.index || 0),
              `. `,
            );
          }
          return `- `;
        },
        n,
        { alignNestedToPrefix: n?.parentType === `orderedList` },
      ),
    addExtensions() {
      return [Zv(this.name, [this.options.bulletListTypeName, this.options.orderedListTypeName])];
    },
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.splitListItem(this.name),
        Tab: () => this.editor.commands.sinkListItem(this.name),
        "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
      };
    },
  }),
  _y = (e, t) => {
    let { $from: n } = t.selection,
      r = U(e, t.schema),
      i = null,
      a = n.depth,
      o = n.pos,
      s = null;
    for (; a > 0 && s === null;) ((i = n.node(a)), i.type === r ? (s = a) : (--a, --o));
    return s === null ? null : { $pos: t.doc.resolve(o), depth: s };
  },
  vy = (e, t) => {
    let n = _y(e, t);
    if (!n) return !1;
    let [, r] = Xd(t, e, n.$pos.pos + 4);
    return r;
  },
  yy = (e, t, n) => {
    let { $anchor: r } = e.selection,
      i = Math.max(0, r.pos - 2),
      a = e.doc.resolve(i).node();
    return !(!a || !n.includes(a.type.name));
  },
  by = (e, t, n) => {
    if (e.commands.undoInputRule()) return !0;
    if (e.state.selection.from !== e.state.selection.to) return !1;
    if (!td(e.state, t) && yy(e.state, t, n)) {
      let { $anchor: n } = e.state.selection,
        r = e.state.doc.resolve(n.before() - 1),
        i = [];
      r.node().descendants((e, n) => {
        e.type.name === t && i.push({ node: e, pos: n });
      });
      let a = i.at(-1);
      if (!a) return !1;
      let o = e.state.doc.resolve(r.start() + a.pos + 1);
      return e
        .chain()
        .cut({ from: n.start() - 1, to: n.end() + 1 }, o.end())
        .joinForward()
        .run();
    }
    if (!td(e.state, t) || !af(e.state)) return !1;
    let { $from: r } = e.state.selection,
      i = r.depth - 1;
    return r.node(i).type !== e.schema.nodes[t] || r.index(i) !== 0
      ? !1
      : e.chain().liftListItem(t).run();
  },
  xy = (e, t) => {
    let n = vy(e, t),
      r = _y(e, t);
    return !r || !n ? !1 : n > r.depth;
  },
  Sy = (e, t) => {
    let n = vy(e, t),
      r = _y(e, t);
    return !r || !n ? !1 : n < r.depth;
  },
  Cy = (e, t) => {
    if (!td(e.state, t) || !rf(e.state, t)) return !1;
    let { selection: n } = e.state,
      { $from: r, $to: i } = n;
    return !n.empty && r.sameParent(i)
      ? !1
      : xy(t, e.state)
        ? e
            .chain()
            .focus(e.state.selection.from + 4)
            .lift(t)
            .joinBackward()
            .run()
        : Sy(t, e.state)
          ? e.chain().joinForward().joinBackward().run()
          : e.commands.joinItemForward();
  },
  wy = (e, t, n) => {
    let { state: r } = e,
      { selection: i } = r;
    if (!i.empty) return !1;
    let { $from: a } = i;
    if (a.parentOffset !== 0 || !a.parent.isTextblock || td(r, t)) return !1;
    let o = Zd(a);
    if (!o || !n.includes(o.type.name)) return !1;
    let s = o.lastChild;
    if (!s || s.type.name !== t) return !1;
    let c = a.parent;
    if (!s.canReplace(s.childCount, s.childCount, P.from(c))) return !1;
    let l = a.before(),
      u = a.after(),
      d = l - 2;
    return e.commands.command(
      ({ tr: e, dispatch: t }) => (
        t &&
          (e.delete(l, u).insert(d, P.from(c)),
          e.setSelection(R.create(e.doc, d + 1)),
          e.scrollIntoView()),
        !0
      ),
    );
  },
  Ty = q.create({
    name: `listKeymap`,
    addOptions() {
      return {
        listTypes: [
          { itemName: `listItem`, wrapperNames: [`bulletList`, `orderedList`] },
          { itemName: `taskItem`, wrapperNames: [`taskList`] },
        ],
      };
    },
    addKeyboardShortcuts() {
      return {
        Delete: ({ editor: e }) => {
          let t = !1;
          return (
            this.options.listTypes.forEach(({ itemName: n }) => {
              e.state.schema.nodes[n] !== void 0 && Cy(e, n) && (t = !0);
            }),
            t
          );
        },
        "Mod-Delete": ({ editor: e }) => {
          let t = !1;
          return (
            this.options.listTypes.forEach(({ itemName: n }) => {
              e.state.schema.nodes[n] !== void 0 && Cy(e, n) && (t = !0);
            }),
            t
          );
        },
        Backspace: ({ editor: e }) => {
          let t = !1;
          return (
            this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
              e.state.schema.nodes[n] !== void 0 && by(e, n, r) && (t = !0);
            }),
            t
          );
        },
        "Mod-Backspace": ({ editor: e }) => {
          let t = !1;
          return (
            this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
              e.state.schema.nodes[n] !== void 0 && by(e, n, r) && (t = !0);
            }),
            t
          );
        },
        Tab: ({ editor: e }) => {
          for (let { itemName: t, wrapperNames: n } of this.options.listTypes)
            if (e.state.schema.nodes[t] !== void 0 && wy(e, t, n)) return !0;
          return !1;
        },
      };
    },
  }),
  Ey = RegExp(`^(\\s*)(${ey})([.)])\\s+(.*)$`),
  Dy = /^\s/,
  Oy = {
    heading: /^#{1,6}(?:\s|$)/,
    bulletItem: /^[-+*]\s+/,
    codeFence: /^(?:```|~~~)/,
    blockMath: /^\$\$/,
    thematicBreak: /^(?:(?:-[ \t]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})$/,
  };
function ky(e) {
  return Ey.test(e.trimStart());
}
function Ay(e) {
  let t = e.trimStart();
  return (
    Oy.bulletItem.test(t) ||
    ky(t) ||
    Oy.heading.test(t) ||
    (Oy.thematicBreak.test(t) && !t.startsWith(`-`)) ||
    /^>\s?/.test(t) ||
    Oy.codeFence.test(t) ||
    Oy.blockMath.test(t)
  );
}
function jy(e) {
  return Object.values(Oy).some((t) => t.test(e));
}
function My(e) {
  let t = [],
    n = [],
    r = !1;
  return (
    e.forEach((e) => {
      r
        ? n.push(e)
        : e.trim() === `` || (t.length > 0 && Ay(e))
          ? ((r = !0), n.push(e))
          : t.push(e);
    }),
    { paragraphLines: t, blockLines: n }
  );
}
function Ny(e) {
  let t = [],
    n = 0,
    r = 0;
  for (; n < e.length;) {
    let i = e[n],
      a = i.match(Ey);
    if (!a) break;
    let [, o, s, c, l] = a,
      u = o.length,
      d = parseInt(s, 10),
      f = isNaN(d) ? sy(s) : void 0,
      p = isNaN(d) ? cy(s) : d,
      m = [l],
      h = n + 1,
      g = [i],
      _ = !1;
    for (; h < e.length;) {
      let t = e[h];
      if (t.match(Ey)) break;
      if (t.trim() === ``) (g.push(t), m.push(``), (_ = !0), (h += 1));
      else if (t.match(Dy)) {
        let e = t.length - t.trimStart().length,
          n = u + s.length + 1;
        (g.push(t), m.push(t.slice(Math.min(e, n))), (h += 1));
      } else {
        if (_ || jy(t)) break;
        (g.push(t), m.push(t), (h += 1));
      }
    }
    (t.push({
      indent: u,
      number: p,
      type: f,
      content: m
        .join(`
`)
        .trim(),
      contentLines: m,
      raw: g.join(`
`),
    }),
      (r = h),
      (n = h));
  }
  return [t, r];
}
var Py = RegExp(`^(${ey})([.)])\\s+(.+)$`);
function Fy(e) {
  let t = e
    .split(`
`)
    .filter((e) => e.trim().length > 0);
  if (t.length === 0) return null;
  let n = [];
  for (let e of t) {
    let t = e.trim().match(Py);
    if (!t) return null;
    n.push({ marker: t[1], content: t[3] });
  }
  return uy(n.map((e) => e.marker))
    ? {
        type: `orderedList`,
        attrs: fy(n[0].marker),
        content: n.map((e) => ({
          type: `listItem`,
          content: [{ type: `paragraph`, content: [{ type: `text`, text: e.content }] }],
        })),
      }
    : null;
}
function Iy(e, t, n) {
  let r = [],
    i = 0;
  for (; i < e.length;) {
    let a = e[i];
    if (a.indent === t) {
      let { paragraphLines: o, blockLines: s } = My(a.contentLines),
        c = o
          .join(`
`)
          .trim(),
        l = [];
      c && l.push({ type: `paragraph`, raw: c, tokens: n.inlineTokens(c) });
      let u = s
        .join(`
`)
        .trim();
      if (u) {
        let e = n.blockTokens(u);
        l.push(...e);
      }
      let d = i + 1,
        f = [];
      for (; d < e.length && e[d].indent > t;) (f.push(e[d]), (d += 1));
      if (f.length > 0) {
        let e = Iy(f, Math.min(...f.map((e) => e.indent)), n);
        l.push({
          type: `list`,
          ordered: !0,
          start: f[0].number,
          typeMarker: f[0].type,
          items: e,
          raw: f.map((e) => e.raw).join(`
`),
        });
      }
      (r.push({ type: `list_item`, raw: a.raw, tokens: l }), (i = d));
    } else i += 1;
  }
  return r;
}
function Ly(e, t) {
  return e.map((e) => {
    if (e.type !== `list_item`) return t.parseChildren([e])[0];
    let n = [];
    return (
      e.tokens &&
        e.tokens.length > 0 &&
        e.tokens.forEach((e) => {
          if (
            e.type === `paragraph` ||
            e.type === `list` ||
            e.type === `blockquote` ||
            e.type === `code`
          )
            n.push(...t.parseChildren([e]));
          else if (e.type === `text` && e.tokens) {
            let r = t.parseChildren([e]);
            n.push({ type: `paragraph`, content: r });
          } else {
            let r = t.parseChildren([e]);
            r.length > 0 && n.push(...r);
          }
        }),
      { type: `listItem`, content: n }
    );
  });
}
var Ry = `listItem`,
  zy = `textStyle`,
  By = /^(\d+)\.\s$/;
function Vy(e) {
  let t = e.match(/list-style-type\s*:\s*([^;]+)/i);
  if (!t) return null;
  switch (t[1].trim().toLowerCase()) {
    case `upper-roman`:
      return `I`;
    case `lower-roman`:
      return `i`;
    case `upper-alpha`:
    case `upper-latin`:
      return `A`;
    case `lower-alpha`:
    case `lower-latin`:
      return `a`;
    default:
      return null;
  }
}
var Hy = rm.create({
    name: `orderedList`,
    addOptions() {
      return { itemTypeName: `listItem`, HTMLAttributes: {}, keepMarks: !1, keepAttributes: !1 };
    },
    group: `block list`,
    content() {
      return `${this.options.itemTypeName}+`;
    },
    addAttributes() {
      return {
        start: {
          default: 1,
          parseHTML: (e) =>
            e.hasAttribute(`start`) ? parseInt(e.getAttribute(`start`) || ``, 10) : 1,
        },
        type: {
          default: null,
          parseHTML: (e) => {
            let t = e.getAttribute(`type`);
            if (t) return t;
            let n = e.getAttribute(`style`);
            if (n) {
              let e = Vy(n);
              if (e) return e;
            }
            let r = e.querySelector(`li`);
            if (r) {
              let e = r.getAttribute(`style`);
              if (e) {
                let t = Vy(e);
                if (t) return t;
              }
            }
            return null;
          },
        },
      };
    },
    parseHTML() {
      return [{ tag: `ol` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      let { start: t, type: n, ...r } = e,
        i = K(this.options.HTMLAttributes, r);
      return (t !== 1 && (i.start = t), n && n !== `1` && (i.type = n), [`ol`, i, 0]);
    },
    markdownTokenName: `list`,
    parseMarkdown: (e, t) => {
      if (e.type !== `list` || !e.ordered) return [];
      let n = e.start || 1,
        r = e.typeMarker,
        i = e.items ? Ly(e.items, t) : [],
        a = {};
      return (
        n !== 1 && (a.start = n),
        r && (a.type = r),
        Object.keys(a).length > 0
          ? { type: `orderedList`, attrs: a, content: i }
          : { type: `orderedList`, content: i }
      );
    },
    renderMarkdown: (e, t) =>
      e.content
        ? t.renderChildren(
            e.content,
            `
`,
          )
        : ``,
    markdownTokenizer: {
      name: `orderedList`,
      level: `block`,
      start: () => -1,
      tokenize: (e, t, n) => {
        let r = e.split(`
`),
          [i, a] = Ny(r);
        if (i.length === 0) return;
        let o = Iy(i, i[0].indent, n);
        if (o.length !== 0)
          return {
            type: `list`,
            ordered: !0,
            start: i[0]?.number || 1,
            typeMarker: i[0]?.type,
            items: o,
            raw: r.slice(0, a).join(`
`),
          };
      },
    },
    markdownOptions: { indentsContent: !0 },
    addCommands() {
      return {
        toggleOrderedList:
          () =>
          ({ commands: e, chain: t }) =>
            this.options.keepAttributes
              ? t()
                  .toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                  .updateAttributes(Ry, this.editor.getAttributes(zy))
                  .run()
              : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-7": () => this.editor.commands.toggleOrderedList() };
    },
    addProseMirrorPlugins() {
      return [
        new B({
          props: {
            handlePaste: (e, t) => {
              if (t.clipboardData?.getData(`text/html`)?.trim()) return !1;
              let n = t.clipboardData?.getData(`text/plain`);
              if (!n) return !1;
              let r = Fy(n);
              if (!r) return !1;
              try {
                let t = e.state.schema.nodeFromJSON(r),
                  n = e.state.tr.replaceSelectionWith(t);
                return (e.dispatch(n), !0);
              } catch {
                return !1;
              }
            },
          },
        }),
      ];
    },
    addInputRules() {
      let e = (e, t) =>
          (!t.attrs.type || t.attrs.type === `1`) && t.childCount + t.attrs.start === +e[1],
        t = nm({
          find: By,
          type: this.type,
          getAttributes: (e) => ({ start: +e[1] }),
          joinPredicate: e,
        });
      return (
        (this.options.keepMarks || this.options.keepAttributes) &&
          (t = nm({
            find: By,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(zy) }),
            joinPredicate: e,
            editor: this.editor,
          })),
        [t]
      );
    },
  }),
  Uy = /^\s*(\[([( |x])?\])\s$/,
  Wy = `position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0`,
  Gy = (e, t, n) => {
    var r;
    return (
      (n == null || (r = n.checkboxLabel) == null ? void 0 : r.call(n, e, t)) ||
      `Task item checkbox for ${e.textContent || `empty task item`}`
    );
  },
  Ky = rm.create({
    name: `taskItem`,
    addOptions() {
      return { nested: !1, HTMLAttributes: {}, taskListTypeName: `taskList`, a11y: void 0 };
    },
    content() {
      return this.options.nested ? `paragraph block*` : `paragraph+`;
    },
    defining: !0,
    addAttributes() {
      return {
        checked: {
          default: !1,
          keepOnSplit: !1,
          parseHTML: (e) => {
            let t = e.getAttribute(`data-checked`);
            return t === `` || t === `true`;
          },
          renderHTML: (e) => ({ "data-checked": e.checked }),
        },
      };
    },
    parseHTML() {
      return [
        {
          tag: `li[data-type="${this.name}"]`,
          priority: 51,
          contentElement: (e) => e.querySelector(`div`) ?? e,
        },
      ];
    },
    renderHTML({ node: e, HTMLAttributes: t }) {
      return [
        `li`,
        K(this.options.HTMLAttributes, t, { "data-type": this.name }),
        [
          `label`,
          [`input`, { type: `checkbox`, checked: e.attrs.checked ? `checked` : null }],
          [`span`],
        ],
        [`div`, 0],
      ];
    },
    parseMarkdown: (e, t) => {
      let n = [];
      if (
        (e.tokens && e.tokens.length > 0
          ? n.push(t.createNode(`paragraph`, {}, t.parseInline(e.tokens)))
          : e.text
            ? n.push(t.createNode(`paragraph`, {}, [t.createNode(`text`, { text: e.text })]))
            : n.push(t.createNode(`paragraph`, {}, [])),
        e.nestedTokens && e.nestedTokens.length > 0)
      ) {
        let r = t.parseChildren(e.nestedTokens);
        n.push(...r);
      }
      return t.createNode(`taskItem`, { checked: e.checked || !1 }, n);
    },
    renderMarkdown: (e, t) => xp(e, t, `- [${e.attrs?.checked ? `x` : ` `}] `),
    addExtensions() {
      return this.options.nested ? [Zv(this.name, [this.options.taskListTypeName])] : [];
    },
    addKeyboardShortcuts() {
      let e = {
        Enter: () => this.editor.commands.splitListItem(this.name),
        "Shift-Tab": () => this.editor.commands.liftListItem(this.name),
      };
      return this.options.nested
        ? { ...e, Tab: () => this.editor.commands.sinkListItem(this.name) }
        : e;
    },
    addNodeView() {
      return ({ node: e, HTMLAttributes: t, getPos: n, editor: r }) => {
        let i = document.createElement(`li`),
          a = document.createElement(`label`),
          o = document.createElement(`span`),
          s = document.createElement(`input`),
          c = document.createElement(`div`);
        o.style.cssText = Wy;
        let l = (e) => {
          let t = Gy(e, e.attrs.checked, this.options.a11y);
          (s.setAttribute(`aria-label`, t), (o.textContent = t));
        };
        (l(e),
          (a.contentEditable = `false`),
          (s.type = `checkbox`),
          s.addEventListener(`mousedown`, (e) => e.preventDefault()),
          s.addEventListener(`change`, (t) => {
            if (!r.isEditable && !this.options.onReadOnlyChecked) {
              s.checked = !s.checked;
              return;
            }
            let { checked: i } = t.target;
            (r.isEditable &&
              typeof n == `function` &&
              r
                .chain()
                .focus(void 0, { scrollIntoView: !1 })
                .command(({ tr: e }) => {
                  let t = n();
                  if (typeof t != `number`) return !1;
                  let r = e.doc.nodeAt(t);
                  return (e.setNodeMarkup(t, void 0, { ...r?.attrs, checked: i }), !0);
                })
                .run(),
              !r.isEditable &&
                this.options.onReadOnlyChecked &&
                (this.options.onReadOnlyChecked(e, i) || (s.checked = !s.checked)));
          }),
          Object.entries(this.options.HTMLAttributes).forEach(([e, t]) => {
            i.setAttribute(e, t);
          }),
          (i.dataset.checked = e.attrs.checked),
          (s.checked = e.attrs.checked),
          a.append(s, o),
          i.append(a, c),
          Object.entries(t).forEach(([e, t]) => {
            i.setAttribute(e, t);
          }));
        let u = new Set(Object.keys(t));
        return {
          dom: i,
          contentDOM: c,
          update: (e) => {
            if (e.type !== this.type) return !1;
            ((i.dataset.checked = e.attrs.checked), (s.checked = e.attrs.checked), l(e));
            let t = r.extensionManager.attributes,
              n = Md(e, t),
              a = new Set(Object.keys(n)),
              o = this.options.HTMLAttributes;
            return (
              u.forEach((e) => {
                a.has(e) || (e in o ? i.setAttribute(e, o[e]) : i.removeAttribute(e));
              }),
              Object.entries(n).forEach(([e, t]) => {
                t == null
                  ? e in o
                    ? i.setAttribute(e, o[e])
                    : i.removeAttribute(e)
                  : i.setAttribute(e, t);
              }),
              (u = a),
              !0
            );
          },
        };
      };
    },
    addInputRules() {
      return [
        nm({
          find: Uy,
          type: this.type,
          getAttributes: (e) => ({ checked: e[e.length - 1] === `x` }),
        }),
      ];
    },
  }),
  qy = rm.create({
    name: `taskList`,
    addOptions() {
      return { itemTypeName: `taskItem`, HTMLAttributes: {} };
    },
    group: `block list`,
    content() {
      return `${this.options.itemTypeName}+`;
    },
    parseHTML() {
      return [{ tag: `ul[data-type="${this.name}"]`, priority: 51 }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`ul`, K(this.options.HTMLAttributes, e, { "data-type": this.name }), 0];
    },
    parseMarkdown: (e, t) => t.createNode(`taskList`, {}, t.parseChildren(e.items || [])),
    renderMarkdown: (e, t) =>
      e.content
        ? t.renderChildren(
            e.content,
            `
`,
          )
        : ``,
    markdownTokenizer: {
      name: `taskList`,
      level: `block`,
      start(e) {
        let t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)?.index;
        return t === void 0 ? -1 : t;
      },
      tokenize(e, t, n) {
        let r = (e) => {
            let t = vp(
              e,
              {
                itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                extractItemData: (e) => ({
                  indentLevel: e[1].length,
                  mainContent: e[4],
                  checked: e[3].toLowerCase() === `x`,
                }),
                createToken: (e, t) => ({
                  type: `taskItem`,
                  raw: ``,
                  mainContent: e.mainContent,
                  indentLevel: e.indentLevel,
                  checked: e.checked,
                  text: e.mainContent,
                  tokens: n.inlineTokens(e.mainContent),
                  nestedTokens: t,
                }),
                customNestedParser: r,
              },
              n,
            );
            if (t) {
              let r = { type: `taskList`, raw: t.raw, items: t.items },
                i = e.slice(t.raw.length);
              return i.trim() ? [r, ...n.blockTokens(i)] : [r];
            }
            return n.blockTokens(e);
          },
          i = vp(
            e,
            {
              itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
              extractItemData: (e) => ({
                indentLevel: e[1].length,
                mainContent: e[4],
                checked: e[3].toLowerCase() === `x`,
              }),
              createToken: (e, t) => ({
                type: `taskItem`,
                raw: ``,
                mainContent: e.mainContent,
                indentLevel: e.indentLevel,
                checked: e.checked,
                text: e.mainContent,
                tokens: n.inlineTokens(e.mainContent),
                nestedTokens: t,
              }),
              customNestedParser: r,
            },
            n,
          );
        if (i) return { type: `taskList`, raw: i.raw, items: i.items };
      },
    },
    markdownOptions: { indentsContent: !0 },
    addCommands() {
      return {
        toggleTaskList:
          () =>
          ({ commands: e }) =>
            e.toggleList(this.name, this.options.itemTypeName),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-9": () => this.editor.commands.toggleTaskList() };
    },
  });
q.create({
  name: `listKit`,
  addExtensions() {
    let e = [];
    return (
      this.options.bulletList !== !1 && e.push(qv.configure(this.options.bulletList)),
      this.options.listItem !== !1 && e.push(gy.configure(this.options.listItem)),
      this.options.listKeymap !== !1 && e.push(Ty.configure(this.options.listKeymap)),
      this.options.orderedList !== !1 && e.push(Hy.configure(this.options.orderedList)),
      this.options.taskItem !== !1 && e.push(Ky.configure(this.options.taskItem)),
      this.options.taskList !== !1 && e.push(qy.configure(this.options.taskList)),
      e
    );
  },
});
var Jy = `&nbsp;`,
  Yy = `\xA0`,
  Xy = rm.create({
    name: `paragraph`,
    priority: 1e3,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    group: `block`,
    content: `inline*`,
    parseHTML() {
      return [{ tag: `p` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`p`, K(this.options.HTMLAttributes, e), 0];
    },
    parseMarkdown: (e, t) => {
      let n = e.tokens || [];
      if (n.length === 1 && n[0].type === `image`) return t.parseChildren([n[0]]);
      let r = t.parseInline(n);
      return n.length === 1 &&
        n[0].type === `text` &&
        (n[0].raw === Jy || n[0].text === Jy || n[0].raw === Yy || n[0].text === Yy) &&
        r.length === 1 &&
        r[0].type === `text` &&
        (r[0].text === Jy || r[0].text === Yy)
        ? t.createNode(`paragraph`, void 0, [])
        : t.createNode(`paragraph`, void 0, r);
    },
    renderMarkdown: (e, t, n) => {
      if (!e) return ``;
      let r = Array.isArray(e.content) ? e.content : [];
      if (r.length === 0) {
        var i, a;
        let e = Array.isArray(n == null || (i = n.previousNode) == null ? void 0 : i.content)
          ? n.previousNode.content
          : [];
        return (n == null || (a = n.previousNode) == null ? void 0 : a.type) === `paragraph` &&
          e.length === 0
          ? Jy
          : ``;
      }
      return t.renderChildren(r);
    },
    addCommands() {
      return {
        setParagraph:
          () =>
          ({ commands: e }) =>
            e.setNode(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Alt-0": () => this.editor.commands.setParagraph() };
    },
  }),
  Zy = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
  Qy = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
  $y = kp.create({
    name: `strike`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: `s` },
        { tag: `del` },
        { tag: `strike` },
        {
          style: `text-decoration`,
          consuming: !1,
          getAttrs: (e) => (e.includes(`line-through`) ? {} : !1),
        },
      ];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`s`, K(this.options.HTMLAttributes, e), 0];
    },
    markdownTokenName: `del`,
    parseMarkdown: (e, t) => t.applyMark(`strike`, t.parseInline(e.tokens || [])),
    renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
    addCommands() {
      return {
        setStrike:
          () =>
          ({ commands: e }) =>
            e.setMark(this.name),
        toggleStrike:
          () =>
          ({ commands: e }) =>
            e.toggleMark(this.name),
        unsetStrike:
          () =>
          ({ commands: e }) =>
            e.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
    },
    addInputRules() {
      return [$p({ find: Zy, type: this.type })];
    },
    addPasteRules() {
      return [am({ find: Qy, type: this.type })];
    },
  }),
  eb = rm.create({
    name: `text`,
    group: `inline`,
    parseMarkdown: (e) => ({ type: `text`, text: e.text || `` }),
    renderMarkdown: (e) => e.text || ``,
  }),
  tb = kp.create({
    name: `underline`,
    addOptions() {
      return { HTMLAttributes: {} };
    },
    parseHTML() {
      return [
        { tag: `u` },
        {
          style: `text-decoration`,
          consuming: !1,
          getAttrs: (e) => (e.includes(`underline`) ? {} : !1),
        },
      ];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`u`, K(this.options.HTMLAttributes, e), 0];
    },
    parseMarkdown(e, t) {
      return t.applyMark(this.name || `underline`, t.parseInline(e.tokens || []));
    },
    renderMarkdown(e, t) {
      return `++${t.renderChildren(e)}++`;
    },
    markdownTokenizer: {
      name: `underline`,
      level: `inline`,
      start(e) {
        return e.indexOf(`++`);
      },
      tokenize(e, t, n) {
        let r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
        if (!r) return;
        let i = r[2].trim();
        return { type: `underline`, raw: r[0], text: i, tokens: n.inlineTokens(i) };
      },
    },
    addCommands() {
      return {
        setUnderline:
          () =>
          ({ commands: e }) =>
            e.setMark(this.name),
        toggleUnderline:
          () =>
          ({ commands: e }) =>
            e.toggleMark(this.name),
        unsetUnderline:
          () =>
          ({ commands: e }) =>
            e.unsetMark(this.name),
      };
    },
    addKeyboardShortcuts() {
      return {
        "Mod-u": () => this.editor.commands.toggleUnderline(),
        "Mod-U": () => this.editor.commands.toggleUnderline(),
      };
    },
  });
function nb(e = {}) {
  return new B({
    view(t) {
      return new rb(t, e);
    },
  });
}
var rb = class {
    constructor(e, t) {
      ((this.editorView = e),
        (this.cursorPos = null),
        (this.element = null),
        (this.timeout = -1),
        (this.lastDragEvent = null),
        (this.width = t.width ?? 1),
        (this.color = t.color === !1 ? void 0 : t.color || `black`),
        (this.class = t.class),
        (this.handlers = [`dragover`, `dragend`, `drop`, `dragleave`].map((t) => {
          let n = (e) => {
            this[t](e);
          };
          return (e.dom.addEventListener(t, n), { name: t, handler: n });
        })));
    }
    destroy() {
      this.handlers.forEach(({ name: e, handler: t }) =>
        this.editorView.dom.removeEventListener(e, t),
      );
    }
    update(e, t) {
      if (this.cursorPos != null && t.doc != e.state.doc) {
        if (this.lastDragEvent) {
          let e = this.computeTarget(this.lastDragEvent);
          e == this.cursorPos ? this.updateOverlay() : this.setCursor(e);
        } else this.updateOverlay();
      }
    }
    setCursor(e) {
      e != this.cursorPos &&
        ((this.cursorPos = e),
        e == null
          ? (this.element.parentNode.removeChild(this.element), (this.element = null))
          : this.updateOverlay());
    }
    updateOverlay() {
      let e = this.editorView.state.doc.resolve(this.cursorPos),
        t = !e.parent.inlineContent,
        n,
        r = this.editorView.dom,
        i = r.getBoundingClientRect(),
        a = i.width / r.offsetWidth,
        o = i.height / r.offsetHeight;
      if (t) {
        let t = e.nodeBefore,
          r = e.nodeAfter;
        if (t || r) {
          let e = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
          if (e) {
            let i = e.getBoundingClientRect(),
              a = t ? i.bottom : i.top;
            t &&
              r &&
              (a = (a + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
            let s = (this.width / 2) * o;
            n = { left: i.left, right: i.right, top: a - s, bottom: a + s };
          }
        }
      }
      if (!n) {
        let e = this.editorView.coordsAtPos(this.cursorPos),
          t = (this.width / 2) * a;
        n = { left: e.left - t, right: e.left + t, top: e.top, bottom: e.bottom };
      }
      let s = this.editorView.dom.offsetParent;
      (this.element ||
        ((this.element = s.appendChild(document.createElement(`div`))),
        this.class && (this.element.className = this.class),
        (this.element.style.cssText = `position: absolute; z-index: 50; pointer-events: none;`),
        this.color && (this.element.style.backgroundColor = this.color)),
        this.element.classList.toggle(`prosemirror-dropcursor-block`, t),
        this.element.classList.toggle(`prosemirror-dropcursor-inline`, !t));
      let c, l;
      if (!s || (s == document.body && getComputedStyle(s).position == `static`))
        ((c = -pageXOffset), (l = -pageYOffset));
      else {
        let e = s.getBoundingClientRect(),
          t = e.width / s.offsetWidth,
          n = e.height / s.offsetHeight;
        ((c = e.left - s.scrollLeft * t), (l = e.top - s.scrollTop * n));
      }
      ((this.element.style.left = (n.left - c) / a + `px`),
        (this.element.style.top = (n.top - l) / o + `px`),
        (this.element.style.width = (n.right - n.left) / a + `px`),
        (this.element.style.height = (n.bottom - n.top) / o + `px`));
    }
    scheduleRemoval(e) {
      (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.setCursor(null), e)));
    }
    computeTarget(e) {
      let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }),
        n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside),
        r = n && n.type.spec.disableDropCursor,
        i = typeof r == `function` ? r(this.editorView, t, e) : r;
      if (!t || i) return null;
      let a = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let e = Lr(this.editorView.state.doc, a, this.editorView.dragging.slice);
        e != null && (a = e);
      }
      return a;
    }
    dragover(e) {
      if (!this.editorView.editable) return;
      this.lastDragEvent = e;
      let t = this.computeTarget(e);
      t != null && (this.setCursor(t), this.scheduleRemoval(5e3));
    }
    dragend() {
      this.scheduleRemoval(20);
    }
    drop() {
      this.scheduleRemoval(20);
    }
    dragleave(e) {
      this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
    }
  },
  ib = class e extends L {
    constructor(e) {
      super(e, e);
    }
    map(t, n) {
      let r = t.resolve(n.map(this.head));
      return e.valid(r) ? new e(r) : L.near(r);
    }
    content() {
      return I.empty;
    }
    eq(t) {
      return t instanceof e && t.head == this.head;
    }
    toJSON() {
      return { type: `gapcursor`, pos: this.head };
    }
    static fromJSON(t, n) {
      if (typeof n.pos != `number`) throw RangeError(`Invalid input for GapCursor.fromJSON`);
      return new e(t.resolve(n.pos));
    }
    getBookmark() {
      return new ab(this.anchor);
    }
    static valid(e) {
      let t = e.parent;
      if (t.inlineContent || !sb(e) || !cb(e)) return !1;
      let n = t.type.spec.allowGapCursor;
      if (n != null) return n;
      let r = t.contentMatchAt(e.index()).defaultType;
      return r && r.isTextblock;
    }
    static findGapCursorFrom(t, n, r = !1) {
      search: for (;;) {
        if (!r && e.valid(t)) return t;
        let i = t.pos,
          a = null;
        for (let r = t.depth; ; r--) {
          let o = t.node(r);
          if (n > 0 ? t.indexAfter(r) < o.childCount : t.index(r) > 0) {
            a = o.child(n > 0 ? t.indexAfter(r) : t.index(r) - 1);
            break;
          }
          if (r == 0) return null;
          i += n;
          let s = t.doc.resolve(i);
          if (e.valid(s)) return s;
        }
        for (;;) {
          let o = n > 0 ? a.firstChild : a.lastChild;
          if (!o) {
            if (a.isAtom && !a.isText && !z.isSelectable(a)) {
              ((t = t.doc.resolve(i + a.nodeSize * n)), (r = !1));
              continue search;
            }
            break;
          }
          ((a = o), (i += n));
          let s = t.doc.resolve(i);
          if (e.valid(s)) return s;
        }
        return null;
      }
    }
  };
((ib.prototype.visible = !1), (ib.findFrom = ib.findGapCursorFrom), L.jsonID(`gapcursor`, ib));
var ab = class e {
  constructor(e) {
    this.pos = e;
  }
  map(t) {
    return new e(t.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return ib.valid(t) ? new ib(t) : L.near(t);
  }
};
function ob(e) {
  return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function sb(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t),
      r = e.node(t);
    if (n == 0) {
      if (r.type.spec.isolating) return !0;
    } else
      for (let e = r.child(n - 1); ; e = e.lastChild) {
        if ((e.childCount == 0 && !e.inlineContent) || ob(e.type)) return !0;
        if (e.inlineContent) return !1;
      }
  }
  return !0;
}
function cb(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t),
      r = e.node(t);
    if (n == r.childCount) {
      if (r.type.spec.isolating) return !0;
    } else
      for (let e = r.child(n); ; e = e.firstChild) {
        if ((e.childCount == 0 && !e.inlineContent) || ob(e.type)) return !0;
        if (e.inlineContent) return !1;
      }
  }
  return !0;
}
function lb() {
  return new B({
    props: {
      decorations: mb,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && ib.valid(n) ? new ib(n) : null;
      },
      handleClick: fb,
      handleKeyDown: ub,
      handleDOMEvents: { beforeinput: pb },
    },
  });
}
var ub = eu({
  ArrowLeft: db(`horiz`, -1),
  ArrowRight: db(`horiz`, 1),
  ArrowUp: db(`vert`, -1),
  ArrowDown: db(`vert`, 1),
});
function db(e, t) {
  let n = e == `vert` ? (t > 0 ? `down` : `up`) : t > 0 ? `right` : `left`;
  return function (e, r, i) {
    let a = e.selection,
      o = t > 0 ? a.$to : a.$from,
      s = a.empty;
    if (a instanceof R) {
      if (!i.endOfTextblock(n) || o.depth == 0) return !1;
      ((s = !1), (o = e.doc.resolve(t > 0 ? o.after() : o.before())));
    }
    let c = ib.findGapCursorFrom(o, t, s);
    return c ? (r && r(e.tr.setSelection(new ib(c))), !0) : !1;
  };
}
function fb(e, t, n) {
  if (!e || !e.editable) return !1;
  let r = e.state.doc.resolve(t);
  if (!ib.valid(r)) return !1;
  let i = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && z.isSelectable(e.state.doc.nodeAt(i.inside))
    ? !1
    : (e.dispatch(e.state.tr.setSelection(new ib(r))), !0);
}
function pb(e, t) {
  if (t.inputType != `insertCompositionText` || !(e.state.selection instanceof ib)) return !1;
  let { $from: n } = e.state.selection,
    r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
  if (!r) return !1;
  let i = P.empty;
  for (let e = r.length - 1; e >= 0; e--) i = P.from(r[e].createAndFill(null, i));
  let a = e.state.tr.replace(n.pos, n.pos, new I(i, 0, 0));
  return (a.setSelection(R.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1);
}
function mb(e) {
  if (!(e.selection instanceof ib)) return null;
  let t = document.createElement(`div`);
  return (
    (t.className = `ProseMirror-gapcursor`),
    H.create(e.doc, [Qc.widget(e.selection.head, t, { key: `gapcursor` })])
  );
}
var hb = 200,
  gb = function () {};
((gb.prototype.append = function (e) {
  return e.length
    ? ((e = gb.from(e)),
      (!this.length && e) ||
        (e.length < hb && this.leafAppend(e)) ||
        (this.length < hb && e.leafPrepend(this)) ||
        this.appendInner(e))
    : this;
}),
  (gb.prototype.prepend = function (e) {
    return e.length ? gb.from(e).append(this) : this;
  }),
  (gb.prototype.appendInner = function (e) {
    return new vb(this, e);
  }),
  (gb.prototype.slice = function (e, t) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = this.length),
      e >= t ? gb.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
    );
  }),
  (gb.prototype.get = function (e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e);
  }),
  (gb.prototype.forEach = function (e, t, n) {
    (t === void 0 && (t = 0),
      n === void 0 && (n = this.length),
      t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0));
  }),
  (gb.prototype.map = function (e, t, n) {
    (t === void 0 && (t = 0), n === void 0 && (n = this.length));
    var r = [];
    return (
      this.forEach(
        function (t, n) {
          return r.push(e(t, n));
        },
        t,
        n,
      ),
      r
    );
  }),
  (gb.from = function (e) {
    return e instanceof gb ? e : e && e.length ? new _b(e) : gb.empty;
  }));
var _b = (function (e) {
  function t(t) {
    (e.call(this), (this.values = t));
  }
  (e && (t.__proto__ = e),
    (t.prototype = Object.create(e && e.prototype)),
    (t.prototype.constructor = t));
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return (
    (t.prototype.flatten = function () {
      return this.values;
    }),
    (t.prototype.sliceInner = function (e, n) {
      return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
    }),
    (t.prototype.getInner = function (e) {
      return this.values[e];
    }),
    (t.prototype.forEachInner = function (e, t, n, r) {
      for (var i = t; i < n; i++) if (e(this.values[i], r + i) === !1) return !1;
    }),
    (t.prototype.forEachInvertedInner = function (e, t, n, r) {
      for (var i = t - 1; i >= n; i--) if (e(this.values[i], r + i) === !1) return !1;
    }),
    (t.prototype.leafAppend = function (e) {
      if (this.length + e.length <= hb) return new t(this.values.concat(e.flatten()));
    }),
    (t.prototype.leafPrepend = function (e) {
      if (this.length + e.length <= hb) return new t(e.flatten().concat(this.values));
    }),
    (n.length.get = function () {
      return this.values.length;
    }),
    (n.depth.get = function () {
      return 0;
    }),
    Object.defineProperties(t.prototype, n),
    t
  );
})(gb);
gb.empty = new _b([]);
var vb = (function (e) {
    function t(t, n) {
      (e.call(this),
        (this.left = t),
        (this.right = n),
        (this.length = t.length + n.length),
        (this.depth = Math.max(t.depth, n.depth) + 1));
    }
    return (
      e && (t.__proto__ = e),
      (t.prototype = Object.create(e && e.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.flatten = function () {
        return this.left.flatten().concat(this.right.flatten());
      }),
      (t.prototype.getInner = function (e) {
        return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
      }),
      (t.prototype.forEachInner = function (e, t, n, r) {
        var i = this.left.length;
        if (
          (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1) ||
          (n > i &&
            this.right.forEachInner(e, Math.max(t - i, 0), Math.min(this.length, n) - i, r + i) ===
              !1)
        )
          return !1;
      }),
      (t.prototype.forEachInvertedInner = function (e, t, n, r) {
        var i = this.left.length;
        if (
          (t > i && this.right.forEachInvertedInner(e, t - i, Math.max(n, i) - i, r + i) === !1) ||
          (n < i && this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1)
        )
          return !1;
      }),
      (t.prototype.sliceInner = function (e, t) {
        if (e == 0 && t == this.length) return this;
        var n = this.left.length;
        return t <= n
          ? this.left.slice(e, t)
          : e >= n
            ? this.right.slice(e - n, t - n)
            : this.left.slice(e, n).append(this.right.slice(0, t - n));
      }),
      (t.prototype.leafAppend = function (e) {
        var n = this.right.leafAppend(e);
        if (n) return new t(this.left, n);
      }),
      (t.prototype.leafPrepend = function (e) {
        var n = this.left.leafPrepend(e);
        if (n) return new t(n, this.right);
      }),
      (t.prototype.appendInner = function (e) {
        return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
          ? new t(this.left, new t(this.right, e))
          : new t(this, e);
      }),
      t
    );
  })(gb),
  yb = 500,
  bb = class e {
    constructor(e, t) {
      ((this.items = e), (this.eventCount = t));
    }
    popEvent(t, n) {
      if (this.eventCount == 0) return null;
      let r = this.items.length;
      for (; ; r--)
        if (this.items.get(r - 1).selection) {
          --r;
          break;
        }
      let i, a;
      n && ((i = this.remapping(r, this.items.length)), (a = i.maps.length));
      let o = t.tr,
        s,
        c,
        l = [],
        u = [];
      return (
        this.items.forEach(
          (t, n) => {
            if (!t.step)
              (i || ((i = this.remapping(r, n + 1)), (a = i.maps.length)), a--, u.push(t));
            else {
              if (i) {
                u.push(new Sb(t.map));
                let e = t.step.map(i.slice(a)),
                  n;
                (e &&
                  o.maybeStep(e).doc &&
                  ((n = o.mapping.maps[o.mapping.maps.length - 1]),
                  l.push(new Sb(n, void 0, void 0, l.length + u.length))),
                  a--,
                  n && i.appendMap(n, a));
              } else o.maybeStep(t.step);
              if (t.selection)
                return (
                  (s = i ? t.selection.map(i.slice(a)) : t.selection),
                  (c = new e(
                    this.items.slice(0, r).append(u.reverse().concat(l)),
                    this.eventCount - 1,
                  )),
                  !1
                );
            }
          },
          this.items.length,
          0,
        ),
        { remaining: c, transform: o, selection: s }
      );
    }
    addTransform(t, n, r, i) {
      let a = [],
        o = this.eventCount,
        s = this.items,
        c = !i && s.length ? s.get(s.length - 1) : null;
      for (let e = 0; e < t.steps.length; e++) {
        let r = t.steps[e].invert(t.docs[e]),
          l = new Sb(t.mapping.maps[e], r, n),
          u;
        ((u = c && c.merge(l)) && ((l = u), e ? a.pop() : (s = s.slice(0, s.length - 1))),
          a.push(l),
          (n &&= (o++, void 0)),
          i || (c = l));
      }
      let l = o - r.depth;
      return (l > wb && ((s = xb(s, l)), (o -= l)), new e(s.append(a), o));
    }
    remapping(e, t) {
      let n = new tr();
      return (
        this.items.forEach(
          (t, r) => {
            let i =
              t.mirrorOffset != null && r - t.mirrorOffset >= e
                ? n.maps.length - t.mirrorOffset
                : void 0;
            n.appendMap(t.map, i);
          },
          e,
          t,
        ),
        n
      );
    }
    addMaps(t) {
      return this.eventCount == 0
        ? this
        : new e(this.items.append(t.map((e) => new Sb(e))), this.eventCount);
    }
    rebased(t, n) {
      if (!this.eventCount) return this;
      let r = [],
        i = Math.max(0, this.items.length - n),
        a = t.mapping,
        o = t.steps.length,
        s = this.eventCount;
      this.items.forEach((e) => {
        e.selection && s--;
      }, i);
      let c = n;
      this.items.forEach((e) => {
        let n = a.getMirror(--c);
        if (n == null) return;
        o = Math.min(o, n);
        let i = a.maps[n];
        if (e.step) {
          let o = t.steps[n].invert(t.docs[n]),
            l = e.selection && e.selection.map(a.slice(c + 1, n));
          (l && s++, r.push(new Sb(i, o, l)));
        } else r.push(new Sb(i));
      }, i);
      let l = [];
      for (let e = n; e < o; e++) l.push(new Sb(a.maps[e]));
      let u = this.items.slice(0, i).append(l).append(r),
        d = new e(u, s);
      return (d.emptyItemCount() > yb && (d = d.compress(this.items.length - r.length)), d);
    }
    emptyItemCount() {
      let e = 0;
      return (
        this.items.forEach((t) => {
          t.step || e++;
        }),
        e
      );
    }
    compress(t = this.items.length) {
      let n = this.remapping(0, t),
        r = n.maps.length,
        i = [],
        a = 0;
      return (
        this.items.forEach(
          (e, o) => {
            if (o >= t) (i.push(e), e.selection && a++);
            else if (e.step) {
              let t = e.step.map(n.slice(r)),
                o = t && t.getMap();
              if ((r--, o && n.appendMap(o, r), t)) {
                let s = e.selection && e.selection.map(n.slice(r));
                s && a++;
                let c = new Sb(o.invert(), t, s),
                  l,
                  u = i.length - 1;
                (l = i.length && i[u].merge(c)) ? (i[u] = l) : i.push(c);
              }
            } else e.map && r--;
          },
          this.items.length,
          0,
        ),
        new e(gb.from(i.reverse()), a)
      );
    }
  };
bb.empty = new bb(gb.empty, 0);
function xb(e, t) {
  let n;
  return (
    e.forEach((e, r) => {
      if (e.selection && t-- == 0) return ((n = r), !1);
    }),
    e.slice(n)
  );
}
var Sb = class e {
    constructor(e, t, n, r) {
      ((this.map = e), (this.step = t), (this.selection = n), (this.mirrorOffset = r));
    }
    merge(t) {
      if (this.step && t.step && !t.selection) {
        let n = t.step.merge(this.step);
        if (n) return new e(n.getMap().invert(), n, this.selection);
      }
    }
  },
  Cb = class {
    constructor(e, t, n, r, i) {
      ((this.done = e),
        (this.undone = t),
        (this.prevRanges = n),
        (this.prevTime = r),
        (this.prevComposition = i));
    }
  },
  wb = 20;
function Tb(e, t, n, r) {
  let i = n.getMeta(Pb),
    a;
  if (i) return i.historyState;
  n.getMeta(Fb) && (e = new Cb(e.done, e.undone, null, 0, -1));
  let o = n.getMeta(`appendedTransaction`);
  if (n.steps.length == 0) return e;
  if (o && o.getMeta(Pb))
    return o.getMeta(Pb).redo
      ? new Cb(
          e.done.addTransform(n, void 0, r, Mb(t)),
          e.undone,
          Db(n.mapping.maps),
          e.prevTime,
          e.prevComposition,
        )
      : new Cb(
          e.done,
          e.undone.addTransform(n, void 0, r, Mb(t)),
          null,
          e.prevTime,
          e.prevComposition,
        );
  if (n.getMeta(`addToHistory`) !== !1 && !(o && o.getMeta(`addToHistory`) === !1)) {
    let i = n.getMeta(`composition`),
      a =
        e.prevTime == 0 ||
        (!o &&
          e.prevComposition != i &&
          (e.prevTime < (n.time || 0) - r.newGroupDelay || !Eb(n, e.prevRanges))),
      s = o ? Ob(e.prevRanges, n.mapping) : Db(n.mapping.maps);
    return new Cb(
      e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, Mb(t)),
      bb.empty,
      s,
      n.time,
      i ?? e.prevComposition,
    );
  }
  return (a = n.getMeta(`rebased`))
    ? new Cb(
        e.done.rebased(n, a),
        e.undone.rebased(n, a),
        Ob(e.prevRanges, n.mapping),
        e.prevTime,
        e.prevComposition,
      )
    : new Cb(
        e.done.addMaps(n.mapping.maps),
        e.undone.addMaps(n.mapping.maps),
        Ob(e.prevRanges, n.mapping),
        e.prevTime,
        e.prevComposition,
      );
}
function Eb(e, t) {
  if (!t) return !1;
  if (!e.docChanged) return !0;
  let n = !1;
  return (
    e.mapping.maps[0].forEach((e, r) => {
      for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
    }),
    n
  );
}
function Db(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0 && t.length == 0; n--)
    e[n].forEach((e, n, r, i) => t.push(r, i));
  return t;
}
function Ob(e, t) {
  if (!e) return null;
  let n = [];
  for (let r = 0; r < e.length; r += 2) {
    let i = t.map(e[r], 1),
      a = t.map(e[r + 1], -1);
    i <= a && n.push(i, a);
  }
  return n;
}
function kb(e, t, n) {
  let r = Mb(t),
    i = Pb.get(t).spec.config,
    a = (n ? e.undone : e.done).popEvent(t, r);
  if (!a) return null;
  let o = a.selection.resolve(a.transform.doc),
    s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r),
    c = new Cb(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
  return a.transform.setSelection(o).setMeta(Pb, { redo: n, historyState: c });
}
var Ab = !1,
  jb = null;
function Mb(e) {
  let t = e.plugins;
  if (jb != t) {
    ((Ab = !1), (jb = t));
    for (let e = 0; e < t.length; e++)
      if (t[e].spec.historyPreserveItems) {
        Ab = !0;
        break;
      }
  }
  return Ab;
}
function Nb(e) {
  return e.setMeta(Fb, !0);
}
var Pb = new V(`history`),
  Fb = new V(`closeHistory`);
function Ib(e = {}) {
  return (
    (e = { depth: e.depth || 100, newGroupDelay: e.newGroupDelay || 500 }),
    new B({
      key: Pb,
      state: {
        init() {
          return new Cb(bb.empty, bb.empty, null, 0, -1);
        },
        apply(t, n, r) {
          return Tb(n, r, t, e);
        },
      },
      config: e,
      props: {
        handleDOMEvents: {
          beforeinput(e, t) {
            let n = t.inputType,
              r = n == `historyUndo` ? Rb : n == `historyRedo` ? zb : null;
            return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
          },
        },
      },
    })
  );
}
function Lb(e, t) {
  return (n, r) => {
    let i = Pb.getState(n);
    if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
    if (r) {
      let a = kb(i, n, e);
      a && r(t ? a.scrollIntoView() : a);
    }
    return !0;
  };
}
var Rb = Lb(!1, !0),
  zb = Lb(!0, !0);
function Bb(e) {
  return e.getMeta(Pb) != null;
}
q.create({
  name: `characterCount`,
  addOptions() {
    return {
      limit: null,
      autoTrim: !0,
      mode: `textSize`,
      textCounter: (e) => e.length,
      wordCounter: (e) => e.split(` `).filter((e) => e !== ``).length,
    };
  },
  addStorage() {
    return { characters: () => 0, words: () => 0 };
  },
  onBeforeCreate() {
    ((this.storage.characters = (e) => {
      let t = e?.node || this.editor.state.doc;
      if ((e?.mode || this.options.mode) === `textSize`) {
        let e = t.textBetween(0, t.content.size, void 0, ` `);
        return this.options.textCounter(e);
      }
      return t.nodeSize;
    }),
      (this.storage.words = (e) => {
        let t = e?.node || this.editor.state.doc,
          n = t.textBetween(0, t.content.size, ` `, ` `);
        return this.options.wordCounter(n);
      }));
  },
  addProseMirrorPlugins() {
    let e = !1;
    return [
      new B({
        key: new V(`characterCount`),
        appendTransaction: (t, n, r) => {
          if (e) return;
          let i = this.options.limit,
            a = this.options.autoTrim;
          if (i == null || i === 0 || a === !1) {
            e = !0;
            return;
          }
          let o = this.storage.characters({ node: r.doc });
          if (o > i) {
            let t = o - i;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`,
            );
            let n = r.tr.deleteRange(0, t);
            return ((e = !0), n);
          }
          e = !0;
        },
        filterTransaction: (e, t) => {
          let n = this.options.limit;
          if (!e.docChanged || n === 0 || n == null) return !0;
          let r = this.storage.characters({ node: t.doc }),
            i = this.storage.characters({ node: e.doc });
          if (i <= n || (r > n && i > n && i <= r)) return !0;
          if ((r > n && i > n && i > r) || !e.getMeta(`paste`)) return !1;
          let a = e.selection.$head.pos,
            o = a - (i - n),
            s = a;
          return (e.deleteRange(o, s), !(this.storage.characters({ node: e.doc }) > n));
        },
      }),
    ];
  },
});
var Vb = q.create({
  name: `dropCursor`,
  addOptions() {
    return { color: `currentColor`, width: 1, class: void 0 };
  },
  addProseMirrorPlugins() {
    return [nb(this.options)];
  },
});
q.create({
  name: `focus`,
  addOptions() {
    return { className: `has-focus`, mode: `all` };
  },
  addProseMirrorPlugins() {
    return [
      new B({
        key: new V(`focus`),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            let { isEditable: n, isFocused: r } = this.editor,
              { anchor: i } = t,
              a = [];
            if (!n || !r) return H.create(e, []);
            let o = 0;
            this.options.mode === `deepest` &&
              e.descendants((e, t) => {
                if (!e.isText) {
                  if (!(i >= t && i <= t + e.nodeSize - 1)) return !1;
                  o += 1;
                }
              });
            let s = 0;
            return (
              e.descendants((e, t) => {
                if (e.isText || !(i >= t && i <= t + e.nodeSize - 1)) return !1;
                if (
                  ((s += 1),
                  (this.options.mode === `deepest` && o - s > 0) ||
                    (this.options.mode === `shallowest` && s > 1))
                )
                  return this.options.mode === `deepest`;
                a.push(Qc.node(t, t + e.nodeSize, { class: this.options.className }));
              }),
              H.create(e, a)
            );
          },
        },
      }),
    ];
  },
});
var Hb = q.create({
    name: `gapCursor`,
    addProseMirrorPlugins() {
      return [lb()];
    },
    extendNodeSchema(e) {
      return {
        allowGapCursor:
          G(W(e, `allowGapCursor`, { name: e.name, options: e.options, storage: e.storage })) ??
          null,
      };
    },
  }),
  Ub = `placeholder`,
  Wb = new V(`tiptap__placeholder`);
function Gb(e) {
  let {
      editor: t,
      placeholder: n,
      dataAttribute: r,
      pos: i,
      node: a,
      isEmptyDoc: o,
      hasAnchor: s,
      classes: { emptyNode: c, emptyEditor: l },
    } = e,
    u = [c];
  return (
    o && u.push(l),
    Qc.node(i, i + a.nodeSize, {
      class: u.join(` `),
      [r]: typeof n == `function` ? n({ editor: t, node: a, pos: i, hasAnchor: s }) : n,
    })
  );
}
function Kb(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function qb({ editor: e, options: t, dataAttribute: n, doc: r, selection: i, from: a, to: o }) {
  let { anchor: s } = i,
    c = [],
    l = e.isEmpty;
  return (
    r.nodesBetween(a, o, (r, i) => {
      let a = s >= i && s <= i + r.nodeSize,
        o = !r.isLeaf && cf(r);
      return (
        r.type.isTextblock &&
          (a || !t.showOnlyCurrent) &&
          o &&
          c.push(
            Gb({
              editor: e,
              isEmptyDoc: l,
              dataAttribute: n,
              hasAnchor: a,
              placeholder: t.placeholder,
              classes: {
                emptyEditor: t.emptyEditorClass,
                emptyNode: Kb(t.emptyNodeClass, { editor: e, node: r, pos: i, hasAnchor: a }),
              },
              node: r,
              pos: i,
            }),
          ),
        t.includeChildren
      );
    }),
    c
  );
}
function Jb({ editor: e, options: t, dataAttribute: n, doc: r, selection: i }) {
  if (!e.isEditable && t.showOnlyWhenEditable) return null;
  let { anchor: a } = i,
    o = [],
    s = e.isEmpty;
  if (t.showOnlyCurrent && !t.includeChildren) {
    let i = r.resolve(a),
      c = i.depth > 0 ? i.node(1) : i.nodeAfter,
      l = i.depth > 0 ? i.before(1) : a;
    if (c && c.type.isTextblock && cf(c)) {
      let r = a >= l && a <= l + c.nodeSize;
      o.push(
        Gb({
          editor: e,
          isEmptyDoc: s,
          dataAttribute: n,
          hasAnchor: r,
          placeholder: t.placeholder,
          classes: {
            emptyEditor: t.emptyEditorClass,
            emptyNode: Kb(t.emptyNodeClass, { editor: e, node: c, pos: l, hasAnchor: r }),
          },
          node: c,
          pos: l,
        }),
      );
    }
  } else
    o.push(
      ...qb({
        editor: e,
        options: t,
        dataAttribute: n,
        doc: r,
        selection: i,
        from: 0,
        to: r.content.size,
      }),
    );
  return H.create(r, o);
}
function Yb(e, t) {
  let n = e.resolve(t);
  if (n.depth === 0) {
    let e = n.nodeAfter ?? n.nodeBefore;
    if (!e) return { from: t, to: t };
    let r = n.nodeAfter ? t : t - e.nodeSize;
    return { from: r, to: r + e.nodeSize };
  }
  let r = n.before(1);
  return { from: r, to: r + n.node(1).nodeSize };
}
function Xb(e, t) {
  return { from: Math.max(0, t.from - 1), to: Math.min(e.content.size, t.to - 1) };
}
function Zb(e, t, n) {
  let r = [];
  return (
    e.forEach((e, i) => {
      let a = i,
        o = a + e.nodeSize,
        s = a + 1,
        c = o + 1;
      s < n && c > t && r.push({ from: a, to: o });
    }),
    r
  );
}
function Qb(e) {
  if (e.length === 0) return [];
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [{ ...t[0] }];
  for (let e = 1; e < t.length; e += 1) {
    let r = n[n.length - 1],
      i = t[e];
    i.from <= r.to ? (r.to = Math.max(r.to, i.to)) : n.push({ ...i });
  }
  return n;
}
function $b(e, t) {
  let n = Zb(e, t.from, t.to);
  return (
    n.push(Xb(e, Yb(e, t.from))),
    t.to > t.from
      ? n.push(Xb(e, Yb(e, Math.min(t.to, e.content.size + 1) - 1)))
      : t.from < e.content.size + 1 && n.push(Xb(e, Yb(e, Math.min(t.from + 1, e.content.size)))),
    n
  );
}
function ex(e, t, n) {
  let r = [];
  if (e.docChanged) {
    let t = Jd(e);
    for (let e of t) r.push(...$b(n.doc, e.newRange));
  }
  return (
    e.selectionSet &&
      (r.push(Xb(n.doc, Yb(n.doc, e.mapping.map(t.selection.anchor)))),
      r.push(Xb(n.doc, Yb(n.doc, n.selection.anchor)))),
    Qb(r)
  );
}
function tx(e, t, n) {
  let r = Math.max(0, Math.min(e, n.content.size));
  return { from: r, to: Math.max(r, Math.min(t, n.content.size)) };
}
function nx({
  decorations: e,
  ranges: t,
  editor: n,
  options: r,
  dataAttribute: i,
  doc: a,
  selection: o,
}) {
  let s = e;
  for (let e of t) {
    let { from: t, to: c } = tx(e.from, e.to, a),
      l = s.find(t, c).filter((e) => e.from >= t && e.to <= c);
    l.length && (s = s.remove(l));
    let u = qb({ editor: n, options: r, dataAttribute: i, doc: a, selection: o, from: t, to: c });
    u.length && (s = s.add(a, u));
  }
  return s;
}
function rx({ editor: e, options: t, dataAttribute: n }) {
  return {
    init(r, i) {
      return (
        Jb({ editor: e, options: t, dataAttribute: n, doc: i.doc, selection: i.selection }) ??
        H.empty
      );
    },
    apply(r, i, a, o) {
      return !r.docChanged && !r.selectionSet
        ? i
        : nx({
            decorations: i.map(r.mapping, r.doc),
            ranges: ex(r, a, o),
            editor: e,
            options: t,
            dataAttribute: n,
            doc: o.doc,
            selection: o.selection,
          });
    },
  };
}
function ix(e) {
  return e
    .replace(/\s+/g, `-`)
    .replace(/[^a-zA-Z0-9-]/g, ``)
    .replace(/^[0-9-]+/, ``)
    .replace(/^-+/, ``)
    .toLowerCase();
}
function ax({ editor: e, options: t }) {
  let n = t.dataAttribute ? `data-${ix(t.dataAttribute)}` : `data-${Ub}`,
    r = t.showOnlyCurrent && !t.includeChildren;
  return new B({
    key: Wb,
    ...(r ? {} : { state: rx({ editor: e, options: t, dataAttribute: n }) }),
    props: {
      decorations: r
        ? ({ doc: r, selection: i }) =>
            Jb({ editor: e, options: t, dataAttribute: n, doc: r, selection: i })
        : (n) => (t.showOnlyWhenEditable && !e.isEditable ? H.empty : (Wb.getState(n) ?? H.empty)),
    },
  });
}
q.create({
  name: `placeholder`,
  addOptions() {
    return {
      emptyEditorClass: `is-editor-empty`,
      emptyNodeClass: `is-empty`,
      dataAttribute: Ub,
      placeholder: `Write something …`,
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1,
    };
  },
  addProseMirrorPlugins() {
    return [ax({ editor: this.editor, options: this.options })];
  },
});
function ox(e, t) {
  return !e.selection.empty && !lf(e.selection) && t.isEditable;
}
function sx(e, t) {
  return ox(e, t) && !t.isFocused && !t.view.dragging;
}
function cx() {
  var e;
  (e = window.getSelection()) == null || e.removeAllRanges();
}
function lx(e) {
  e.focus();
}
q.create({
  name: `selection`,
  addOptions() {
    return { className: `selection` };
  },
  addProseMirrorPlugins() {
    let { editor: e, options: t } = this;
    return [
      new B({
        key: new V(`selection`),
        props: {
          decorations(n) {
            return sx(n, e)
              ? H.create(n.doc, [
                  Qc.inline(n.selection.from, n.selection.to, { class: t.className }),
                ])
              : null;
          },
          handleDOMEvents: {
            blur(t) {
              return (ox(t.state, e) && cx(), !1);
            },
            focus(t) {
              return (
                ox(t.state, e) &&
                  requestAnimationFrame(() => {
                    !e.isDestroyed && t.hasFocus() && lx(t);
                  }),
                !1
              );
            },
          },
        },
      }),
    ];
  },
});
function ux({ types: e, node: t }) {
  return (t && Array.isArray(e) && e.includes(t.type)) || t?.type === e;
}
var dx = q.create({
    name: `trailingNode`,
    addOptions() {
      return { node: void 0, notAfter: [] };
    },
    addProseMirrorPlugins() {
      let e = new V(this.name),
        t =
          this.options.node ||
          this.editor.schema.topNodeType.contentMatch.defaultType?.name ||
          `paragraph`,
        n = Object.entries(this.editor.schema.nodes)
          .map(([, e]) => e)
          .filter((e) => (this.options.notAfter || []).concat(t).includes(e.name));
      return [
        new B({
          key: e,
          appendTransaction: (n, r, i) => {
            let { doc: a, tr: o, schema: s } = i,
              c = e.getState(i),
              l = a.content.size,
              u = s.nodes[t];
            if (!n.some((e) => e.getMeta(`skipTrailingNode`)) && c) return o.insert(l, u.create());
          },
          state: {
            init: (e, t) => {
              let r = t.tr.doc.lastChild;
              return !ux({ node: r, types: n });
            },
            apply: (e, t) => {
              if (!e.docChanged || e.getMeta(`__uniqueIDTransaction`)) return t;
              let r = e.doc.lastChild;
              return !ux({ node: r, types: n });
            },
          },
        }),
      ];
    },
  }),
  fx = q.create({
    name: `undoRedo`,
    addOptions() {
      return { depth: 100, newGroupDelay: 500 };
    },
    addCommands() {
      return {
        undo:
          () =>
          ({ state: e, dispatch: t }) =>
            Rb(e, t),
        redo:
          () =>
          ({ state: e, dispatch: t }) =>
            zb(e, t),
      };
    },
    addProseMirrorPlugins() {
      return [Ib(this.options)];
    },
    addKeyboardShortcuts() {
      return {
        "Mod-z": () => this.editor.commands.undo(),
        "Shift-Mod-z": () => this.editor.commands.redo(),
        "Mod-y": () => this.editor.commands.redo(),
        "Mod-я": () => this.editor.commands.undo(),
        "Shift-Mod-я": () => this.editor.commands.redo(),
      };
    },
  }),
  px = q.create({
    name: `starterKit`,
    addExtensions() {
      let e = [];
      return (
        this.options.bold !== !1 && e.push(ag.configure(this.options.bold)),
        this.options.blockquote !== !1 && e.push(eg.configure(this.options.blockquote)),
        this.options.bulletList !== !1 && e.push(qv.configure(this.options.bulletList)),
        this.options.code !== !1 && e.push(cg.configure(this.options.code)),
        this.options.codeBlock !== !1 && e.push(fg.configure(this.options.codeBlock)),
        this.options.document !== !1 && e.push(pg.configure(this.options.document)),
        this.options.dropcursor !== !1 && e.push(Vb.configure(this.options.dropcursor)),
        this.options.gapcursor !== !1 && e.push(Hb.configure(this.options.gapcursor)),
        this.options.hardBreak !== !1 && e.push(mg.configure(this.options.hardBreak)),
        this.options.heading !== !1 && e.push(hg.configure(this.options.heading)),
        this.options.undoRedo !== !1 && e.push(fx.configure(this.options.undoRedo)),
        this.options.horizontalRule !== !1 && e.push(gg.configure(this.options.horizontalRule)),
        this.options.italic !== !1 && e.push(xg.configure(this.options.italic)),
        this.options.listItem !== !1 && e.push(gy.configure(this.options.listItem)),
        this.options.listKeymap !== !1 && e.push(Ty.configure(this.options?.listKeymap)),
        this.options.link !== !1 && e.push(Uv.configure(this.options?.link)),
        this.options.orderedList !== !1 && e.push(Hy.configure(this.options.orderedList)),
        this.options.paragraph !== !1 && e.push(Xy.configure(this.options.paragraph)),
        this.options.strike !== !1 && e.push($y.configure(this.options.strike)),
        this.options.text !== !1 && e.push(eb.configure(this.options.text)),
        this.options.underline !== !1 && e.push(tb.configure(this.options?.underline)),
        this.options.trailingNode !== !1 && e.push(dx.configure(this.options?.trailingNode)),
        e
      );
    },
  }),
  mx = new WeakMap(),
  hx = new WeakMap();
function gx(e) {
  let t = ``;
  return (
    e.descendants((e) => {
      e.isText
        ? (t += e.marks.some((e) => e.type.spec.code) ? ` ` : e.text)
        : (e.isBlock || e.isAtom) && (t += ` `);
    }),
    t
  );
}
function _x(e) {
  let t = mx.get(e);
  return (t === void 0 && ((t = Qe(gx(e)) ?? null), mx.set(e, t)), t);
}
function vx(e) {
  let t = hx.get(e);
  if (t) return t;
  let n = [],
    r = [],
    i = null;
  e.forEach((e, t) => {
    if (e.type.spec.code) {
      n.push(`ltr`);
      return;
    }
    let a = _x(e) ?? i;
    (n.push(a), a && r.push(Qc.node(t, t + e.nodeSize, { dir: a })), (i = a));
  });
  let a = { blocks: n, decorations: H.create(e, r) };
  return (hx.set(e, a), a);
}
function yx(e) {
  return vx(e.doc).blocks[e.selection.$head.index(0)] ?? null;
}
var bx = q.create({
  name: `composer-text-direction`,
  addProseMirrorPlugins() {
    return [
      new B({
        key: new V(`composer-text-direction`),
        props: {
          decorations: (e) => vx(e.doc).decorations,
          attributes: (e) => {
            let t = yx(e);
            return t ? { dir: t } : {};
          },
        },
      }),
    ];
  },
});
function xx(e) {
  let t = e.match(/^[ \t]*/)?.[0] ?? ``,
    n = e.slice(t.length),
    r = n.match(/^(\d+)([.)])((?:[ \t]+)|\s*$)/);
  if (r && r[1] !== void 0 && r[2] !== void 0)
    return {
      marker: {
        kind: `ordered`,
        indent: t,
        numberText: r[1],
        delimiter: r[2] === `)` ? `)` : `.`,
        space: r[3] ?? ``,
      },
      markerEnd: t.length + r[0].length,
    };
  let i = n.match(/^-\s\[[ xX]\]((?:[ \t]+)|\s*$)/);
  if (i)
    return {
      marker: { kind: `task`, indent: t, space: i[1] ?? `` },
      markerEnd: t.length + i[0].length,
    };
  let a = n.match(/^([-*+])((?:[ \t]+)|\s*$)/);
  return a && a[1] !== void 0
    ? {
        marker: { kind: `bullet`, indent: t, bullet: a[1], space: a[2] ?? `` },
        markerEnd: t.length + a[0].length,
      }
    : null;
}
function Sx(e) {
  let t = e.slice(0, -1),
    n = e.slice(-1),
    r = Number.parseInt(t, 10);
  return `${Number.isSafeInteger(r) ? String(r + 1).padStart(t.length, `0`) : t}${n}`;
}
function Cx(e) {
  return e.kind === `ordered`
    ? `${e.indent}${Sx(`${e.numberText}${e.delimiter}`)} `
    : e.kind === `task`
      ? `${e.indent}- [ ] `
      : `${e.indent}${e.bullet} `;
}
function wx(e) {
  let t = 0;
  for (let n of e)
    if (n === ` `) t += 1;
    else if (n === `	`) t += 4 - (t % 4);
    else break;
  return t;
}
function Tx(e, t, n, r) {
  let i = wx(n.indent),
    a = [],
    o = Number.parseInt(n.numberText, 10) + 2,
    s = t,
    c = t,
    l = 0;
  for (; s < e.length && Number.isSafeInteger(o);) {
    let t = s + 1,
      u = e.indexOf(
        `
`,
        t,
      ),
      d = u === -1 ? e.length : u;
    s = d;
    let f = r[l];
    for (; f && f.end <= t;) ((l += 1), (f = r[l]));
    if (f && f.start < t) continue;
    let p = e.slice(t, d),
      m = wx(p);
    if (p.trim() === `` || m < i) break;
    if (m > i) continue;
    let h = xx(p);
    if (h?.marker.kind !== `ordered` || h.marker.delimiter !== n.delimiter) break;
    let g = h.marker,
      _ = t + g.indent.length,
      v = _ + g.numberText.length,
      y = g.numberText.startsWith(`0`) ? String(o).padStart(g.numberText.length, `0`) : String(o);
    (y !== g.numberText && (a.push(e.slice(c, _), y), (c = v)), (o += 1));
  }
  return a.length === 0 ? null : { end: c, text: a.join(``) };
}
function Ex(e) {
  let t = [],
    n = 0;
  for (let r of ct(e)) {
    let e =
      n + (r.type === `text` ? r.text.length : r.type === `terminal-context` ? 1 : r.source.length);
    (r.type !== `text` && t.push({ start: n, end: e }), (n = e));
  }
  return t;
}
function Dx(e, t) {
  return e.some((e) => t > e.start && t < e.end);
}
function Ox(e, t) {
  let n =
      e.lastIndexOf(
        `
`,
        t - 1,
      ) + 1,
    r = e.indexOf(
      `
`,
      t,
    ),
    i = r === -1 ? e.length : r;
  return { start: n, end: i, text: e.slice(n, i) };
}
function kx(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > e.length) return null;
  let n = Ox(e, t),
    r = xx(n.text);
  if (!r || r.marker.space === ``) return null;
  let i = n.start + r.markerEnd;
  if (t < i) return null;
  let a = Ex(e);
  if (Dx(a, t)) return null;
  if (e.slice(i, n.end).trim() === ``)
    return { start: n.start, end: Math.max(t, i), replacement: ``, cursorAfter: n.start };
  let o = `\n${Cx(r.marker)}`,
    s = t + o.length,
    { marker: c } = r;
  if (c.kind === `ordered`) {
    let r = Tx(e, n.end, c, a);
    if (r)
      return { start: t, end: r.end, replacement: o + e.slice(t, n.end) + r.text, cursorAfter: s };
  }
  return { start: t, end: t, replacement: o, cursorAfter: s };
}
function Ax(e, t, n) {
  if (!Number.isInteger(t) || t !== n || t < 0 || t > e.length) return null;
  let r = Ox(e, t);
  return !xx(r.text) || Dx(Ex(e), t)
    ? null
    : { start: r.start, end: r.start, replacement: `  `, cursorAfter: t + 2 };
}
var jx = { bold: `**`, italic: `*`, strike: `~~`, code: "`" };
function Mx(e, t, n) {
  if (!t) return;
  let r = e[e.length - 1];
  r && r.marks.length === n.length && r.marks.every((e, t) => e === n[t])
    ? (r.text += t)
    : e.push({ text: t, marks: n });
}
function Nx(e) {
  let t = [],
    n = [],
    r = () => n.at(-1)?.spans ?? t,
    i = 0;
  for (; i < e.length;) {
    let t = e[i];
    if (t === `\\`) {
      (Mx(r(), e.slice(i, i + 2), []), (i += 2));
      continue;
    }
    if (t === "`") {
      let t = e.slice(i).match(/^`+/)[0],
        n = e.indexOf(t, i + t.length);
      t.length === 1 &&
      n > i + 1 &&
      !e.slice(i, n).includes(`
`) &&
      e[n + 1] !== "`"
        ? (Mx(r(), e.slice(i + 1, n), [`code`]), (i = n + 1))
        : (Mx(r(), t, []), (i += t.length));
      continue;
    }
    if (t !== `*` && t !== `_` && t !== `~`) {
      (Mx(r(), t, []), (i += 1));
      continue;
    }
    let a = i;
    for (; e[a] === t;) a += 1;
    let o = e[i - 1] ?? ``,
      s = e[a] ?? ``,
      c = o !== `` && !/\s/.test(o) && (t !== `_` || !/\w/.test(s)),
      l = s !== `` && !/\s/.test(s) && (t !== `_` || !/\w/.test(o));
    for (; i < a;) {
      let o = n.at(-1);
      if (
        (o?.mark !== `italic` ||
          a - i !== 2 ||
          !l ||
          (t !== `*` && t !== `_`) ||
          n.some((e) => e.mark === `bold`)) &&
        c &&
        o &&
        e.startsWith(o.delimiter, i) &&
        i + o.delimiter.length <= a
      ) {
        n.pop();
        for (let e of o.spans) Mx(r(), e.text, [o.mark, ...e.marks]);
        i += o.delimiter.length;
      } else if (l && (t !== `~` || a - i >= 2)) {
        let o = t === `~` || a - i >= 2 ? 2 : 1,
          s = t === `~` ? `strike` : o === 2 ? `bold` : `italic`;
        if (n.some((e) => e.mark === s)) {
          (Mx(r(), e.slice(i, a), []), (i = a));
          continue;
        }
        (n.push({ delimiter: t.repeat(o), mark: s, spans: [] }), (i += o));
      } else (Mx(r(), e.slice(i, a), []), (i = a));
    }
  }
  for (; n.length > 0;) {
    let e = n.pop();
    Mx(r(), e.delimiter, []);
    for (let t of e.spans) Mx(r(), t.text, t.marks);
  }
  return t;
}
var Px = [`strike`, `bold`, `italic`, `code`],
  Fx = { bold: `bold`, italic: `italic`, strike: `strike`, code: `code` },
  Ix = { bold: `bold`, italic: `italic`, strike: `strike`, code: `code` },
  Lx = new V(`typedBacktickPairs`);
function Rx(e) {
  return new B({
    key: Lx,
    state: {
      init: () => [],
      apply(e, t) {
        let n = t.flatMap((t) => {
            let n = e.mapping.mapResult(t.from, 1),
              r = e.mapping.mapResult(t.to, -1);
            return n.deleted || r.deleted ? [] : [{ from: n.pos, to: r.pos }];
          }),
          r = e.getMeta(Lx);
        return r ? [...n, r] : n;
      },
    },
    props: {
      handleTextInput(e, t, n, r, i) {
        if (e.composing || t !== n || r !== "`") return !1;
        let a = e.state.doc.resolve(t);
        return !a.parent.isTextblock ||
          a.parent.type.spec.code ||
          !/(^|[^`])`$/.test(a.nodeBefore?.text ?? ``)
          ? !1
          : (e.dispatch(i().setMeta(Lx, { from: t - 1, to: t + 1 })), !0);
      },
    },
    appendTransaction(t, n, r) {
      if (
        !r.selection.empty ||
        n.selection.from === r.selection.from ||
        t.some((e) => e.docChanged)
      )
        return null;
      let i = Lx.getState(r)?.find(({ to: e }) => e === r.selection.from);
      if (!i) return null;
      let a = r.doc.resolve(i.from),
        o = r.selection.$from;
      if (
        !a.sameParent(o) ||
        a.parent.type.spec.code ||
        a.nodeBefore?.text?.endsWith("`") ||
        o.nodeAfter?.text?.startsWith("`") ||
        !/^`[^`]+`$/.test(r.doc.textBetween(i.from, i.to))
      )
        return null;
      let s = !0;
      if (
        (r.doc.nodesBetween(i.from, i.to, (e) => {
          e.isInline && (!e.isText || e.marks.length > 0) && (s = !1);
        }),
        !s)
      )
        return null;
      let c = r.tr.delete(i.to - 1, i.to).delete(i.from, i.from + 1);
      return (
        c.addMark(i.from, i.to - 2, e.create()),
        c.setSelection(R.create(c.doc, i.to - 2)),
        c.removeStoredMark(e),
        c
      );
    },
  });
}
var zx = cg.extend({
    excludes: `code`,
    exitable: !1,
    addOptions() {
      return { ...this.parent(), HTMLAttributes: { dir: `ltr` } };
    },
    addProseMirrorPlugins() {
      return [...(this.parent?.() ?? []), Rx(this.type)];
    },
  }),
  Bx = xg.extend({
    addInputRules() {
      return [$p({ find: _g, type: this.type })];
    },
    addPasteRules() {
      return [am({ find: vg, type: this.type })];
    },
  }),
  Vx = q.create({
    name: `composerBoldSelectionOnly`,
    priority: 1e3,
    addKeyboardShortcuts() {
      let e = () => this.editor.state.selection.empty;
      return { "Mod-b": e, "Mod-B": e };
    },
  });
function Hx(e, t) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([e]) => !t.includes(e)));
}
var Ux = `paragraph list*`,
  Wx = qy.extend({
    addKeyboardShortcuts() {
      return Hx(this.parent?.(), [`Mod-Shift-9`]);
    },
  }),
  Gx = [`Tab`, `Shift-Tab`],
  Kx = Ky.extend({
    content: Ux,
    addAttributes() {
      return {
        ...this.parent?.(),
        indent: { default: `` },
        markerSpace: { default: ` ` },
        contentSpace: { default: null },
      };
    },
    addKeyboardShortcuts() {
      return Hx(this.parent?.(), Gx);
    },
  }).configure({ nested: !0 }),
  qx = fg.extend({
    addAttributes() {
      return {
        ...this.parent?.(),
        language: { default: `` },
        fence: { default: "```" },
        close: { default: "\n```" },
      };
    },
    addKeyboardShortcuts() {
      return { ...Hx(this.parent?.(), [`Mod-Alt-c`]), Backspace: () => Jx(this.editor) };
    },
  });
function Jx(e) {
  let { $from: t, empty: n } = e.state.selection;
  if (!n || t.parent.type.name !== `codeBlock` || t.parentOffset !== 0) return !1;
  let { schema: r } = e.state,
    i = t.parent.textContent
      .split(`
`)
      .map((e) => r.nodes.paragraph.create(null, e ? r.text(e) : null)),
    a = t.before(),
    o = e.state.tr.replaceWith(a, t.after(), i);
  return (e.view.dispatch(o.setSelection(R.create(o.doc, a + 1))), !0);
}
function Yx(e, t) {
  let n = e.attrs,
    r = typeof n.fence == `string` && n.fence ? n.fence : "```",
    i = typeof n.language == `string` ? n.language : ``,
    a = typeof n.close == `string` ? n.close : ``,
    o = e.textContent,
    s = Math.max(
      0,
      ...o
        .split(`
`)
        .filter((e) => aS(e, r))
        .map((e) => /^[`~]+/.exec(e)[0].length),
    );
  return (
    s > 0 && ((r = r[0].repeat(s + 1)), (a &&= `\n${r}`)),
    !a && t && (a = `\n${r}`),
    {
      open: `${r}${i}${
        o
          ? `
`
          : ``
      }`,
      content: o,
      close: a,
    }
  );
}
var Xx = gy.extend({
    content: Ux,
    addAttributes() {
      return {
        ...this.parent?.(),
        indent: { default: `` },
        marker: { default: `-` },
        space: { default: ` ` },
      };
    },
    addKeyboardShortcuts() {
      return {
        ...Hx(this.parent?.(), Gx),
        Backspace: () => TS(this.editor),
        Delete: () => ES(this.editor),
      };
    },
    renderHTML({ node: e, HTMLAttributes: t }) {
      let n = String(e.attrs.marker);
      return [`li`, K(t, { "data-marker": n, "data-marker-width": Math.min(n.length, 10) }), 0];
    },
  }),
  Zx = [
    qv.extend({
      addKeyboardShortcuts() {
        return Hx(this.parent?.(), [`Mod-Shift-8`]);
      },
    }),
    Hy.extend({
      addKeyboardShortcuts() {
        return Hx(this.parent?.(), [`Mod-Shift-7`]);
      },
    }),
    Xx,
  ],
  Qx = eg.extend({
    content: `paragraph+`,
    addAttributes() {
      return { ...this.parent?.(), prefix: { default: `> ` } };
    },
    addKeyboardShortcuts() {
      return Hx(this.parent?.(), [`Mod-Shift-b`]);
    },
  }),
  $x = gg.extend({
    addAttributes() {
      return { ...this.parent?.(), source: { default: `---` } };
    },
    addProseMirrorPlugins() {
      return [
        ...(this.parent?.() ?? []),
        new B({
          appendTransaction: (e, t, n) =>
            !e.some((e) => e.docChanged) || n.doc.lastChild?.type.name !== `horizontalRule`
              ? null
              : n.tr.insert(n.doc.content.size, n.schema.nodes.paragraph.create()),
        }),
      ];
    },
  });
function eS(e, t) {
  let n = e.child(t);
  return (
    t === e.childCount - 1 &&
    t > 0 &&
    n.type.name === `paragraph` &&
    n.content.size === 0 &&
    e.child(t - 1).type.name === `horizontalRule`
  );
}
var tS = [
  Qx,
  $x,
  hg.extend({
    addAttributes() {
      return { ...this.parent?.(), space: { default: ` ` } };
    },
    addKeyboardShortcuts() {
      return {};
    },
  }),
];
function nS() {
  return `tiptap-${Math.random().toString(36).slice(2)}`;
}
function rS(e) {
  let t = e.match(/^([ \t]*)-([ \t]+)\[([ xX])\]([ \t]*)/);
  return !t || (e.slice(t[0].length).length > 0 && !t[4])
    ? null
    : {
        prefix: {
          indent: t[1] ?? ``,
          checked: (t[3] ?? ` `).toLowerCase() === `x`,
          markerSpace: t[2],
          contentSpace: t[4],
        },
        markerLength: t[0].length,
      };
}
function iS(e) {
  let t = /^(`{3,}|~{3,})([^\n]*)$/.exec(e);
  if (!t) return null;
  let n = t[1],
    r = t[2];
  return n.startsWith("`") && r.includes("`") ? null : { fence: n, language: r };
}
function aS(e, t) {
  let n = /^(`{3,}|~{3,})[ \t]*\r?$/.exec(e);
  if (!n) return !1;
  let r = n[1];
  return r[0] === t[0] && r.length >= t.length;
}
function oS(e) {
  let t = rS(e);
  if (t) return { prefix: { kind: `task`, ...t.prefix }, markerLength: t.markerLength };
  let n = /^([ \t]*)(\d+[.)])((?:[ \t]+)|$)/.exec(e);
  if (n)
    return {
      prefix: { kind: `ordered`, indent: n[1], marker: n[2], space: n[3] },
      markerLength: n[0].length,
    };
  let r = /^([ \t]*)([-*+])((?:[ \t]+)|$)/.exec(e);
  return r
    ? {
        prefix: { kind: `bullet`, indent: r[1], marker: r[2], space: r[3] },
        markerLength: r[0].length,
      }
    : null;
}
function sS(e) {
  return e.kind === `task`
    ? `task`
    : e.kind === `ordered`
      ? `ordered:${e.marker.slice(-1)}`
      : `bullet:${e.marker}`;
}
function cS(e, t) {
  if (e.type === `mention`)
    return { type: `composer-mention`, attrs: { path: e.path, source: e.source } };
  if (e.type === `skill`) {
    let n = t(e.name);
    return n
      ? {
          type: `composer-skill`,
          attrs: { skillName: e.name, skillLabel: n.label, skillDescription: n.description },
        }
      : null;
  }
  if (e.type === `citation`)
    return {
      type: `composer-citation`,
      attrs: { citation: e.citation, source: e.source, citeKey: nS() },
    };
  if (e.type === `terminal-context`) {
    if (!e.context) return { type: `text`, text: `￼` };
    let t = pe(e.context);
    return {
      type: `composer-context-reference`,
      attrs: { kind: t.kind, contextId: t.contextId, label: t.label, source: D(t) },
    };
  }
  return {
    type: `composer-context-reference`,
    attrs: { kind: e.kind, contextId: e.contextId, label: e.label, source: e.source },
  };
}
function lS(e) {
  let t = e.items[0].prefix,
    n = e.items.map((e) => {
      let t = [{ type: `paragraph`, content: e.content }, ...e.children.map((e) => lS(e))];
      return e.prefix.kind === `task`
        ? {
            type: `taskItem`,
            attrs: {
              checked: e.prefix.checked,
              indent: e.prefix.indent,
              markerSpace: e.prefix.markerSpace,
              contentSpace: e.prefix.contentSpace,
            },
            content: t,
          }
        : {
            type: `listItem`,
            attrs: { indent: e.prefix.indent, marker: e.prefix.marker, space: e.prefix.space },
            content: t,
          };
    });
  return t.kind === `task`
    ? { type: `taskList`, content: n }
    : t.kind === `ordered`
      ? { type: `orderedList`, attrs: { start: Number.parseInt(t.marker, 10) || 1 }, content: n }
      : { type: `bulletList`, content: n };
}
function uS(e, t) {
  let n = { type: `text`, text: e };
  return (
    t.length > 0 &&
      (n.marks = [...t]
        .sort((e, t) => Px.indexOf(e) - Px.indexOf(t))
        .map((e) => ({ type: Fx[e] }))),
    n
  );
}
function dS(e, t, n) {
  if (n?.literalText)
    return e
      .split(`
`)
      .map((e) => ({ type: `paragraph`, ...(e ? { content: [{ type: `text`, text: e }] } : {}) }));
  let r = n?.styling ?? !0,
    i = r && (n?.blocks ?? !0),
    a = `￼`;
  for (let t = 57344; e.includes(a); t += 1) a = String.fromCodePoint(t);
  let o = [],
    s = [],
    c = e.slice(0, n?.literalLength ?? 0),
    l = e.slice(c.length),
    u = tt(l),
    d = 0,
    f = [];
  for (let e of u) (f.push({ text: l.slice(d, e.start) }, { source: e.source }), (d = e.end));
  f.push({ text: l.slice(d) });
  let p = f
      .map((e) =>
        `source` in e
          ? (o.push(uS(e.source, [])), s.push(e.source), a)
          : ct(e.text)
              .map((e) => {
                if (e.type === `text`) return e.text;
                let n = cS(e, t),
                  r = e.type === `terminal-context` ? `￼` : e.source;
                return n ? (o.push(n), s.push(r), a) : r;
              })
              .join(``),
      )
      .join(``),
    m = 0,
    h = (e) => {
      let t = r ? Nx(e) : [{ text: e, marks: [] }],
        n = [];
      for (let e of t)
        e.text.split(a).forEach((t, r) => {
          if (r > 0) {
            let t = o[m++];
            n.push({ ...t, marks: uS(``, e.marks).marks });
          }
          t && n.push(uS(t, e.marks));
        });
      return n;
    },
    g = (e) => {
      let t = i ? oS(e) : null,
        n = t ? e.slice(t.markerLength) : e;
      return { list: t?.prefix ?? null, inline: h(n) };
    },
    _ = p.split(`
`),
    v = [],
    y = (e) => e.split(a).reduce((e, t, n) => (n === 0 ? t : ((m += 1), e + s[m - 1] + t)), ``);
  for (let e = 0; e < _.length; e += 1) {
    let t = _[e];
    if (e === 0 && c) {
      v.push({ line: { list: null, inline: [uS(c, []), ...h(t)] } });
      continue;
    }
    let n = i ? iS(t) : null;
    if (!n) {
      if (i && /^([-*_])(?:[ \t]*\1){2,}[ \t]*\r?$/.test(t)) {
        v.push({ rule: t });
        continue;
      }
      let e = i ? /^(#{1,6})([ \t]+)([^\n]*)$/.exec(t) : null;
      if (e) {
        v.push({ heading: { level: e[1].length, space: e[2], inline: h(e[3]) } });
        continue;
      }
      let n = i ? /^(>[ \t]*)([^\n]*)$/.exec(t) : null;
      n ? v.push({ quote: { prefix: n[1], inline: h(n[2]) } }) : v.push({ line: g(t) });
      continue;
    }
    let r = y(n.language),
      a = [],
      o = e + 1,
      s = ``;
    for (; o < _.length;) {
      let e = _[o];
      if (aS(e, n.fence)) {
        s = `\n${e}`;
        break;
      }
      (a.push(y(e)), (o += 1));
    }
    let l = o < _.length,
      u = a.join(`
`);
    (v.push({
      code: {
        type: `codeBlock`,
        attrs: { language: r, fence: n.fence, close: s },
        ...(u ? { content: [{ type: `text`, text: u }] } : {}),
      },
    }),
      (e = l ? o : _.length));
  }
  let b = [],
    x = [],
    S = [],
    C = () => {
      for (let e of x) b.push(lS(e));
      ((x = []), (S = []));
    },
    w = (e, t) => {
      let n = { key: t, items: [] };
      return (e.push(n), n);
    },
    T = null,
    E = () => {
      T &&=
        (b.push({
          type: `blockquote`,
          attrs: { prefix: T.prefix },
          content: T.content.map((e) => ({ type: `paragraph`, content: e })),
        }),
        null);
    };
  for (let e of v) {
    if (`quote` in e) {
      (C(),
        T && T.prefix !== e.quote.prefix && E(),
        (T ??= { prefix: e.quote.prefix, content: [] }),
        T.content.push(e.quote.inline));
      continue;
    }
    if ((E(), `code` in e)) {
      (C(), b.push(e.code));
      continue;
    }
    if (`rule` in e) {
      (C(), b.push({ type: `horizontalRule`, attrs: { source: e.rule } }));
      continue;
    }
    if (`heading` in e) {
      (C(),
        b.push({
          type: `heading`,
          attrs: { level: e.heading.level, space: e.heading.space },
          content: e.heading.inline,
        }));
      continue;
    }
    let t = e.line;
    if (!t.list) {
      (C(), b.push({ type: `paragraph`, content: t.inline }));
      continue;
    }
    let n = { prefix: t.list, content: t.inline, children: [] },
      r = sS(t.list),
      i = t.list.indent;
    for (;;) {
      let e = S[S.length - 1];
      if (!e) {
        S.push({ indent: i, list: w(x, r), container: x });
        continue;
      }
      if (e.indent === i) {
        (e.list.key !== r && (e.list = w(e.container, r)), e.list.items.push(n));
        break;
      }
      if (e.indent !== `` && !i.startsWith(e.indent)) {
        if (S.length > 1) {
          S.pop();
          continue;
        }
        ((e.indent = i), e.list.key !== r && (e.list = w(e.container, r)), e.list.items.push(n));
        break;
      }
      let t = e.list.items[e.list.items.length - 1];
      if (!t) {
        e.list.items.push(n);
        break;
      }
      let a = w(t.children, r);
      (S.push({ indent: i, list: a, container: t.children }), a.items.push(n));
      break;
    }
  }
  return (E(), C(), b);
}
function fS(e, t, n) {
  let r = dS(e, t, n);
  return (
    r.at(-1)?.type === `horizontalRule` && r.push({ type: `paragraph` }),
    { type: `doc`, content: r }
  );
}
function pS(e) {
  let t = e.attrs;
  switch (e.type.name) {
    case `composer-mention`:
    case `composer-citation`:
    case `composer-context-reference`:
      return typeof t.source == `string` ? t.source : ``;
    case `composer-skill`: {
      let e = typeof t.skillName == `string` ? t.skillName : ``;
      return e ? `$${e}` : ``;
    }
    default:
      return ``;
  }
}
function mS(e, t) {
  let n = e.runs[e.runs.length - 1],
    r = t ?? (n ? n.pmPos + n.docLen : 1);
  (e.runs.push({
    kind: `break`,
    flatStart: e.flat,
    docLen: 1,
    mdLen: 1,
    openLen: 0,
    closeLen: 0,
    pmPos: r,
    mdStart: e.md,
  }),
    (e.value += `
`),
    (e.flat += 1),
    (e.md += 1));
}
function hS(e, t) {
  return e.type.name === `blockquote` && t.type.name === `paragraph` && t.content.size > 0;
}
function gS(e, t) {
  (e.runs.push({
    kind: `prefix`,
    flatStart: e.flat,
    docLen: 0,
    mdLen: 1,
    openLen: 0,
    closeLen: 0,
    pmPos: t,
    mdStart: e.md,
  }),
    (e.value += `
`),
    (e.md += 1));
}
function _S(e, t, n) {
  let r = [];
  e.forEach((e) => {
    if (!e.isText || e.marks.some((e) => e.type.name === `code`)) {
      r.push(e);
      return;
    }
    let t = e.text,
      n = t.length - t.trimStart().length,
      i = Math.max(n, t.trimEnd().length),
      a = 0;
    for (let o of [n, i, t.length]) (o > a && r.push(e.cut(a, o)), (a = o));
  });
  for (let e of Px)
    if (e !== `code`)
      for (let t of [1, -1]) {
        let n = !1;
        for (let i = t === 1 ? 0 : r.length - 1; i >= 0 && i < r.length; i += t) {
          let t = r[i];
          t.type.name === `hardBreak` || !t.marks.some((t) => t.type.name === e)
            ? (n = !1)
            : t.isText && !t.marks.some((e) => e.type.name === `code`) && /^\s+$/.test(t.text)
              ? n || (r[i] = t.mark(t.marks.filter((t) => t.type.name !== e)))
              : (n = !0);
        }
      }
  let i = new Map(),
    a = [];
  for (let e = r.length - 1; e >= 0; --e) {
    let t = r[e],
      n = t.type.name === `hardBreak` ? [] : t.marks.map((e) => Ix[e.type.name]).filter((e) => !!e);
    for (let t of Px) n.includes(t) ? i.has(t) || i.set(t, e) : i.delete(t);
    a[e] = n.sort((e, t) => i.get(t) - i.get(e) || Px.indexOf(e) - Px.indexOf(t));
  }
  for (let e = 1; e < a.length; e += 1) {
    let t = a[e],
      n = [];
    for (let r of a[e - 1]) {
      if (!t.includes(r)) break;
      n.push(r);
    }
    a[e] = [...n, ...t.filter((e) => !n.includes(e))];
  }
  let o = (e, t) => {
      let n = 0;
      for (; n < e.length && e[n] === t[n];) n += 1;
      return n;
    },
    s = 0;
  (r.forEach((e, r) => {
    let i = t + s;
    if (((s += e.nodeSize), e.type.name === `hardBreak`)) {
      mS(n, i);
      return;
    }
    let c = a[r],
      l = c
        .slice(o(c, a[r - 1] ?? []))
        .map((e) => jx[e])
        .join(``),
      u = c
        .slice(o(c, a[r + 1] ?? []))
        .toReversed()
        .map((e) => jx[e])
        .join(``),
      d = e.isText ? e.text : pS(e),
      f = e.isText ? d.length : 1,
      p = l + d + u;
    (n.runs.push({
      kind: e.isText ? `text` : `token`,
      flatStart: n.flat,
      docLen: f,
      mdLen: p.length,
      openLen: l.length,
      closeLen: u.length,
      pmPos: i,
      mdStart: n.md,
      ...(e.isText ? {} : { nodeName: e.type.name }),
    }),
      (n.value += p),
      (n.flat += f),
      (n.md += p.length));
  }),
    r.length === 0 &&
      n.runs.push({
        kind: `text`,
        flatStart: n.flat,
        docLen: 0,
        mdLen: 0,
        openLen: 0,
        closeLen: 0,
        pmPos: t,
        mdStart: n.md,
      }));
}
var vS = new Set([`taskList`, `bulletList`, `orderedList`]),
  yS = new Set([`taskItem`, `listItem`]);
function bS(e, t) {
  let n = e.selection.$from;
  if (n.depth < 3 || n.node(-1).type.name !== t) return;
  let r = n.node(-1),
    i = n.node(-2),
    a = n.index(-2),
    o = a > 0 ? i.child(a - 1) : a + 1 < i.childCount ? i.child(a + 1) : null;
  if (!o) return;
  let s = { ...r.attrs, indent: o.attrs.indent };
  if (r.type.name === `taskItem`) s.markerSpace = o.attrs.markerSpace;
  else {
    let e = typeof o.attrs.marker == `string` ? o.attrs.marker : `-`;
    s.marker = a > 0 && /^\d+[.)]$/.test(e) ? Sx(e) : e;
  }
  (e.setNodeMarkup(n.before(-1), void 0, s),
    typeof s.marker == `string` && /^\d+[.)]$/.test(s.marker) && xS(e, n.before(-2), a, s.marker));
}
function xS(e, t, n, r) {
  let i = e.doc.nodeAt(t);
  if (!i) return;
  let a = t + 1,
    o = r;
  i.forEach((t, r, i) => {
    (i > n &&
      ((o = Sx(o)), t.attrs.marker !== o && e.setNodeMarkup(a, void 0, { ...t.attrs, marker: o })),
      (a += t.nodeSize));
  });
}
function SS(e) {
  let t = e.state.selection.$from,
    n = wS(t);
  if (!n) return !1;
  let r = t.parent.content.size === 0,
    i = ({ commands: e, tr: t }) => {
      let i =
        e.splitListItem(n, n === `taskItem` ? { checked: !1 } : { space: ` ` }) ||
        (r && e.liftListItem(n));
      return (i && bS(t, n), i);
    };
  return e.can().command(i) && e.chain().command(i).run();
}
function CS(e, t, n, r) {
  e.delete(t, n);
  let i = e.doc.resolve(t),
    a = i.node(-1),
    o = i.node(-2),
    s = i.index(-2),
    { schema: c } = e.doc.type,
    l = [],
    u = [];
  o.forEach((e, t, n) => {
    n < s ? l.push(e) : n > s && u.push(e);
  });
  let d = typeof a.attrs.space == `string` && a.attrs.space ? a.attrs.space : ` `,
    f = c.nodes.taskItem.create({ checked: r, indent: a.attrs.indent, markerSpace: d }, a.content),
    p = [
      ...(l.length > 0 ? [o.copy(P.from(l))] : []),
      c.nodes.taskList.create(null, f),
      ...(u.length > 0 ? [o.copy(P.from(u))] : []),
    ],
    m = i.before(-2);
  e.replaceWith(m, m + o.nodeSize, p);
  let h = m + (l.length > 0 ? p[0].nodeSize : 0) + 3;
  e.setSelection(R.create(e.doc, h));
}
function wS(e) {
  let t = e.depth > 1 ? e.node(-1).type.name : null;
  return t === `listItem` || t === `taskItem` ? t : null;
}
function TS(e) {
  let { state: t } = e,
    { $from: n, empty: r } = t.selection;
  if (!r || n.parentOffset !== 0) return !1;
  let i = wS(n);
  if (i && n.index(-1) === 0)
    return (
      e
        .chain()
        .command(({ commands: e, tr: t }) => {
          let n = e.liftListItem(i);
          return (n && bS(t, i), n);
        })
        .run() || Oi(t, e.view.dispatch)
    );
  let a = n.depth === 1 ? n.node(0).maybeChild(n.index(0) - 1) : null;
  return a && vS.has(a.type.name) && n.parent.type.name !== `codeBlock`
    ? ki(t, e.view.dispatch)
    : !1;
}
function ES(e) {
  let { state: t } = e,
    { $from: n, empty: r } = t.selection;
  if (!r || !n.parent.isTextblock || n.depth === 0 || n.parentOffset !== n.parent.content.size)
    return !1;
  let i = L.findFrom(t.doc.resolve(n.after()), 1, !0);
  return i
    ? i.$from.parent.type.name === `codeBlock`
      ? n.parent.type.name !== `codeBlock`
      : !wS(n) && !wS(i.$from)
        ? !1
        : Ai(t, e.view.dispatch)
    : !1;
}
function DS(e, t) {
  let n = e.attrs,
    r = typeof n.indent == `string` ? n.indent : ``;
  if (e.type.name === `taskItem`) {
    let e = typeof n.markerSpace == `string` ? n.markerSpace : ` `,
      i = (typeof n.contentSpace == `string` && n.contentSpace) || (t ? `` : ` `);
    return `${r}-${e}[${n.checked === !0 ? `x` : ` `}]${i}`;
  }
  return `${r}${typeof n.marker == `string` && n.marker ? n.marker : `-`}${(typeof n.space == `string` && n.space) || (t ? `` : ` `)}`;
}
function OS(e, t, n) {
  let r = t + 1,
    i = !0;
  e.content.forEach((e) => {
    (i || mS(n), (i = !1));
    let t = r + 1,
      a = e.firstChild,
      o = DS(e, a?.type.name === `paragraph` && a.content.childCount === 0);
    (n.runs.push({
      kind: `prefix`,
      flatStart: n.flat,
      docLen: 0,
      mdLen: o.length,
      openLen: 0,
      closeLen: 0,
      pmPos: t + 1,
      mdStart: n.md,
    }),
      (n.value += o),
      (n.md += o.length));
    let s = t,
      c = !0;
    (e.content.forEach((e) => {
      (c || mS(n),
        (c = !1),
        vS.has(e.type.name) ? OS(e, s, n) : e.type.name === `paragraph` && _S(e, s + 1, n),
        (s += e.nodeSize));
    }),
      (r += e.nodeSize));
  });
}
function kS(e, t, n, r) {
  let { open: i, content: a, close: o } = Yx(e, n),
    s = i.length + a.length + o.length;
  (r.runs.push({
    kind: `text`,
    flatStart: r.flat,
    docLen: a.length,
    mdLen: s,
    openLen: i.length,
    closeLen: o.length,
    pmPos: t,
    mdStart: r.md,
    nodeName: `codeBlock`,
  }),
    (r.flat += a.length),
    (r.md += s),
    (r.value += i + a + o));
}
function AS(e, t, n) {
  let r = e.attrs,
    i = typeof r.prefix == `string` ? r.prefix : `> `,
    a = t + 1,
    o = !0;
  e.content.forEach((e) => {
    (o || mS(n),
      (o = !1),
      n.runs.push({
        kind: `prefix`,
        flatStart: n.flat,
        docLen: 0,
        mdLen: i.length,
        openLen: 0,
        closeLen: 0,
        pmPos: a + 1,
        mdStart: n.md,
      }),
      (n.value += i),
      (n.md += i.length),
      e.type.name === `paragraph` && _S(e, a + 1, n),
      (a += e.nodeSize));
  });
}
function jS(e, t, n) {
  let r = e.slice(t, n),
    i = e.resolve(t),
    a = i.sharedDepth(n),
    o = r.content;
  if (r.content.firstChild?.isInline) o = e.type.schema.nodes.paragraph.create(null, r.content);
  else
    for (; a > 0;) {
      let e = i.node(a);
      if (((o = e.copy(P.from(o))), !yS.has(e.type.name))) break;
      --a;
    }
  return MS(e.type.create(null, o)).value;
}
function MS(e) {
  let t = { runs: [], value: ``, flat: 0, md: 0 },
    n = [];
  e.content.forEach((e) => {
    n.push(e);
  });
  let r = 0;
  return (
    n.forEach((i, a) => {
      if (
        (a > 0 && !eS(e, a) && mS(t), a > 0 && hS(n[a - 1], i) && gS(t, r + 1), vS.has(i.type.name))
      )
        OS(i, r, t);
      else if (i.type.name === `codeBlock`) kS(i, r + 1, a < n.length - 1, t);
      else if (i.type.name === `blockquote`) AS(i, r, t);
      else if (i.type.name === `heading`) {
        let e = i.attrs,
          n = typeof e.level == `number` ? e.level : 1,
          a = typeof e.space == `string` ? e.space : ` `,
          o = `${`#`.repeat(n)}${a}`;
        (t.runs.push({
          kind: `prefix`,
          flatStart: t.flat,
          docLen: 0,
          mdLen: o.length,
          openLen: 0,
          closeLen: 0,
          pmPos: r + 1,
          mdStart: t.md,
        }),
          (t.value += o),
          (t.md += o.length),
          _S(i, r + 1, t));
      } else if (i.type.name === `horizontalRule`) {
        let e = i.attrs,
          n = typeof e.source == `string` && e.source ? e.source : `---`;
        (t.runs.push({
          kind: `prefix`,
          flatStart: t.flat,
          docLen: 0,
          mdLen: n.length,
          openLen: 0,
          closeLen: 0,
          pmPos: r + i.nodeSize,
          mdStart: t.md,
        }),
          (t.value += n),
          (t.md += n.length));
      } else i.type.name === `paragraph` && _S(i, r + 1, t);
      r += i.nodeSize;
    }),
    {
      value: t.value,
      runs: t.runs,
      docLength: t.flat,
      contextIds: Array.from(new Set(ne(t.value))),
    }
  );
}
function NS(e, t) {
  let n = e.type.schema,
    r = n.nodes[`composer-skill`];
  if (!r) return [];
  let i = [];
  e.descendants((e, a) => {
    if (e.type !== r) return;
    let o = typeof e.attrs.skillName == `string` ? e.attrs.skillName : ``;
    o && !t(o) && i.push({ from: a, to: a + e.nodeSize, node: n.text(pS(e), e.marks) });
  });
  let a = MS(e),
    o = 0;
  for (let n of ct(a.value)) {
    let s = o;
    if (
      ((o +=
        n.type === `text` ? n.text.length : n.type === `terminal-context` ? 1 : n.source.length),
      n.type !== `skill`)
    )
      continue;
    let c = t(n.name);
    if (!c) continue;
    let l = a.runs.find(
      (e) =>
        e.kind === `text` &&
        e.nodeName !== `codeBlock` &&
        s >= e.mdStart + e.openLen &&
        o <= e.mdStart + e.openLen + e.docLen,
    );
    if (!l) continue;
    let u = l.pmPos + (s - l.mdStart - l.openLen);
    i.push({
      from: u,
      to: u + n.source.length,
      node: r.create(
        { skillName: n.name, skillLabel: c.label, skillDescription: c.description },
        null,
        e.nodeAt(u)?.marks,
      ),
    });
  }
  return i.sort((e, t) => t.from - e.from);
}
function PS(e, t) {
  let n = e.flatStart + e.docLen;
  return t < n || (t === n && e.nodeName === `codeBlock`);
}
function FS(e, t) {
  let n = Math.max(0, Math.min(t, e.docLength));
  for (let t of e.runs)
    if (PS(t, n))
      return t.kind === `text` || t.kind === `token`
        ? t.mdStart + t.openLen + (n - t.flatStart)
        : t.mdStart + (n - t.flatStart);
  let r = e.runs[e.runs.length - 1];
  return r ? r.mdStart + r.mdLen : 0;
}
function IS(e, t) {
  for (let n of e.runs)
    if (t < n.mdStart + n.mdLen) {
      if (n.kind === `prefix`) return n.flatStart;
      if (n.kind === `text` || n.kind === `token`) {
        let e = t - n.mdStart;
        return e <= n.openLen
          ? n.flatStart
          : n.kind === `token` || e >= n.openLen + n.docLen
            ? n.flatStart + n.docLen
            : n.flatStart + (e - n.openLen);
      }
      return n.flatStart + (t - n.mdStart);
    }
  return e.docLength;
}
function LS(e, t) {
  let n = Math.max(0, Math.min(t, e.docLength));
  for (let t of e.runs) if (n < t.flatStart + t.docLen) return t.pmPos + (n - t.flatStart);
  let r = e.runs[e.runs.length - 1];
  return r ? r.pmPos + r.docLen : 1;
}
function RS(e, t) {
  for (let n of e.runs)
    if (t >= n.pmPos && t <= n.pmPos + n.docLen)
      return n.kind === `token` && t === n.pmPos + n.docLen
        ? n.flatStart + n.docLen
        : n.flatStart + Math.min(t - n.pmPos, n.docLen);
  let n = 0;
  for (let r of e.runs) r.pmPos <= t && (n = r.flatStart + r.docLen);
  return Math.max(0, Math.min(n, e.docLength));
}
function zS(e) {
  let { selection: t } = e;
  if (!t.empty) return null;
  let { $from: n } = t;
  if (!n.parent.inlineContent) return null;
  let r = n.nodeBefore?.marks ?? F.none,
    i = n.nodeAfter?.marks ?? F.none;
  return F.sameSet(r, i) ? null : { before: r, after: i, current: e.storedMarks ?? n.marks() };
}
function BS(e) {
  let t = zS(e);
  return t !== null && F.sameSet(t.current, t.before);
}
function VS(e, t) {
  let n = zS(e);
  if (!n || (!F.sameSet(n.current, n.before) && !F.sameSet(n.current, n.after))) return null;
  let r = t === -1 ? n.before : n.after;
  return F.sameSet(n.current, r) ? null : e.tr.setStoredMarks(r);
}
var HS = `  `;
function US(e) {
  return /^[ \t]*/.exec(e)?.[0] ?? ``;
}
function WS(e) {
  return e.startsWith(HS) ? e.slice(2) : e.startsWith(`	`) || e.startsWith(` `) ? e.slice(1) : e;
}
function GS(e, t) {
  return e.map((e) => (t === `in` ? (e.length === 0 ? e : `${HS}${e}`) : WS(e)));
}
function KS(e) {
  let { $from: t, $to: n } = e.selection;
  return t.parent.type.spec.code === !0 && t.sameParent(n);
}
function qS(e) {
  let { $from: t, $to: n } = e.selection,
    r = t.parent;
  if (r.type.spec.code !== !0 || !t.sameParent(n)) return null;
  let i = t.start();
  return { from: i, to: i + r.content.size, text: r.textContent };
}
function JS(e, t) {
  let n = qS(e);
  if (!n) return !1;
  let { from: r, to: i } = e.selection,
    a = n.text.slice(0, r - n.from),
    o = US(
      a.slice(
        a.lastIndexOf(`
`) + 1,
      ),
    );
  if (o.length === 0) return !1;
  if (t) {
    let n = `\n${o}`,
      a = e.tr.insertText(n, r, i),
      s = r + n.length;
    (a.setSelection(R.create(a.doc, s)), t(a.scrollIntoView()));
  }
  return !0;
}
function YS(e) {
  let { $from: t, empty: n } = e.state.selection;
  if (!n || t.parent.type.spec.code !== !0 || t.parentOffset !== t.parent.content.size) return !1;
  let r = /\n[ \t]*\n[ \t]*$/.exec(t.parent.textContent);
  if (!r) return !1;
  let i = e.state.tr.delete(t.pos - r[0].length, t.pos);
  return (
    t.parent.attrs.close || i.setNodeAttribute(t.before(), `close`, `\n${t.parent.attrs.fence}`),
    e.dispatch(i),
    Wi(e.state, (t) => e.dispatch(t.scrollIntoView()))
  );
}
function XS(e, t) {
  let n = qS(e);
  if (!n || !e.selection.empty) return !1;
  let r = e.selection.from - n.from,
    i =
      n.text.lastIndexOf(
        `
`,
        r - 1,
      ) + 1,
    a = n.text.indexOf(
      `
`,
      r,
    ),
    o = a === -1 ? n.text.length : a,
    s = n.text.slice(i, o),
    c = e.selection.$from.parent;
  if (r !== o || !aS(s, String(c.attrs.fence))) return !1;
  if (t) {
    let { schema: r } = e,
      o = (e) => r.nodes.paragraph.create(null, e ? r.text(e) : null),
      l = n.text.slice(0, Math.max(0, i - 1)),
      u =
        a === -1
          ? []
          : n.text.slice(a + 1).split(`
`),
      d = c.type.create({ ...c.attrs, close: `\n${s}` }, l ? r.text(l) : null),
      f = e.selection.$from.before(),
      p = e.tr.replaceWith(f, f + c.nodeSize, [d, o(``), ...u.map(o)]);
    (p.setSelection(R.create(p.doc, f + d.nodeSize + 1)), t(p.scrollIntoView()));
  }
  return !0;
}
function ZS(e, t, n) {
  let r = qS(e);
  if (!r) return !1;
  let { from: i, to: a } = e.selection,
    o = i - r.from,
    s = a - r.from;
  if (i === a && t === `in`) return (n && n(e.tr.insertText(HS, i, a).scrollIntoView()), !0);
  let c =
      r.text.lastIndexOf(
        `
`,
        Math.max(0, o - 1),
      ) + 1,
    l = r.text.indexOf(
      `
`,
      Math.max(o, s - 1),
    ),
    u = l === -1 ? r.text.length : l,
    d = r.text.slice(c, u).split(`
`),
    f = GS(d, t);
  if (
    f.join(`
`) ===
    d.join(`
`)
  )
    return !0;
  if (n) {
    let t = e.tr.insertText(
        f.join(`
`),
        r.from + c,
        r.from + u,
      ),
      o = (f[0]?.length ?? 0) - (d[0]?.length ?? 0),
      s =
        f.join(`
`).length -
        d.join(`
`).length,
      l = Math.max(r.from + c, i + o),
      p = Math.max(l, a + s);
    (t.setSelection(R.create(t.doc, l, p)), n(t.scrollIntoView()));
  }
  return !0;
}
function QS(e, t) {
  let { $from: n, empty: r } = e.selection;
  if (
    !r ||
    n.parent.type.name !== `paragraph` ||
    n.depth !== 1 ||
    n.parentOffset !== n.parent.content.size
  )
    return !1;
  let i = iS(jS(e.doc, n.start(), n.end())),
    a = e.schema.nodes.codeBlock;
  if (!i || !a) return !1;
  if (t) {
    let r = n.before(),
      { fence: o, language: s } = i,
      c = e.tr.replaceWith(
        r,
        r + n.parent.nodeSize,
        a.create({ language: s, fence: o, close: `\n${o}` }),
      );
    (c.setSelection(R.create(c.doc, r + 1)), t(c.scrollIntoView()));
  }
  return !0;
}
var $S = 1e3;
function eC(e, t) {
  return e.setMeta(`uiEvent`, t);
}
function tC(e) {
  if (!e.docChanged) return null;
  let t = e.getMeta(`uiEvent`);
  if (t === `paste` || t === `drop` || t === `cut`) return `other`;
  if (e.getMeta(`composition`) != null) return `insert`;
  let n = null;
  for (let t of e.steps) {
    if (!(t instanceof ur)) return `other`;
    let e = t.slice.size > 0,
      r = t.to > t.from,
      i = e && !r ? `insert` : r && !e ? `delete` : `other`;
    if (n !== null && n !== i) return `other`;
    n = i;
  }
  return n;
}
function nC(e, t) {
  if (Bb(e)) return `other`;
  let n = tC(e);
  return n === null ? t : (t !== null && (n !== t || n === `other`) && Nb(e), n);
}
function rC(e) {
  let t = 0;
  for (let n of e.imageIds) {
    let r = e.uploadsByImageId[n];
    (r?.status === `failed` && r.environmentId === e.environmentId) ||
      (r?.status === `ready` && r.environmentId === e.environmentId) ||
      (t += 1);
  }
  return t > 0 ? (t === 1 ? `Attachment still uploading` : `Attachments still uploading`) : null;
}
function iC(e) {
  return `${Math.floor(Math.max(0, Math.min(1, Number.isFinite(e) ? e : 0)) * 100)}%`;
}
function aC(e) {
  let t = (0, j.c)(8),
    { context: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = c(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === n ? (a = t[3]) : ((a = te(n)), (t[2] = n), (t[3] = a));
  let o = a,
    s = o
      ? `Terminal context expired. Remove and re-add ${i} to include it in your message.`
      : n.text,
    l;
  return (
    t[4] !== o || t[5] !== i || t[6] !== s
      ? ((l = (0, Y.jsx)(Ge, { label: i, tooltipText: s, expired: o })),
        (t[4] = o),
        (t[5] = i),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
var oC = (0, J.createContext)({
    environmentId: null,
    expandImage: () => {},
    expandVideo: () => {},
    openFile: () => {},
    openMention: () => {},
    openPullRequest: () => {},
  }),
  sC = new Map();
function cC(e) {
  return e.kind !== `image` && e.kind !== `file` ? null : de(e.record, e.upload);
}
var lC = (0, J.createContext)(sC);
function uC(e) {
  let t = new Map();
  for (let n of e.images ?? [])
    t.set(ae(n).contextId, { kind: `image`, record: n, upload: e.uploadsByImageId?.[n.id] });
  for (let n of e.files ?? [])
    t.set(ce(n).contextId, { kind: `file`, record: n, upload: e.uploadsByImageId?.[n.id] });
  for (let n of e.terminalContexts) t.set(pe(n).contextId, { kind: `terminal`, record: n });
  for (let n of e.reviewComments ?? []) t.set(k(n.id), { kind: `review-comment`, record: n });
  let n = new Map((e.images ?? []).map((e) => [e.id, e]));
  for (let r of e.previewAnnotations ?? [])
    t.set(E(r.id), { kind: `preview-annotation`, record: r, screenshot: n.get(r.id) });
  for (let n of e.threadContexts ?? []) t.set(n.contextId, { kind: `thread`, record: n });
  for (let n of e.commitContexts ?? []) t.set(n.contextId, { kind: `commit`, record: n });
  return t;
}
function dC(e) {
  let t = (0, j.c)(12);
  if (e.detailsMode === `popover`) {
    let n = e.kindLabel + `, ` + e.label,
      r;
    return (
      t[0] !== e.details || t[1] !== e.icon || t[2] !== e.kind || t[3] !== e.label || t[4] !== n
        ? ((r = (0, Y.jsx)(be, {
            kind: e.kind,
            icon: e.icon,
            label: e.label,
            accessibleLabel: n,
            children: e.details,
          })),
          (t[0] = e.details),
          (t[1] = e.icon),
          (t[2] = e.kind),
          (t[3] = e.label),
          (t[4] = n),
          (t[5] = r))
        : (r = t[5]),
      r
    );
  }
  let n = e.detailsMode === `tooltip` ? `${e.kindLabel}, ${e.label}` : void 0,
    r = e.detailsMode === `tooltip` ? e.details : void 0,
    i;
  return (
    t[6] !== e.icon || t[7] !== e.kind || t[8] !== e.label || t[9] !== n || t[10] !== r
      ? ((i = (0, Y.jsx)(_e, {
          kind: e.kind,
          icon: e.icon,
          label: e.label,
          "aria-label": n,
          tooltip: r,
        })),
        (t[6] = e.icon),
        (t[7] = e.kind),
        (t[8] = e.label),
        (t[9] = n),
        (t[10] = r),
        (t[11] = i))
      : (i = t[11]),
    i
  );
}
function fC(e) {
  return e?.status === `uploading`
    ? iC(e.progress)
    : e?.status === `failed`
      ? `upload failed`
      : null;
}
function pC(e, t) {
  let n = [e.name, y(e.sizeBytes)];
  return (
    t?.status === `failed` && n.push(``, t.reason),
    n.join(`
`)
  );
}
function mC(e) {
  let t = (0, j.c)(21),
    n = (0, J.use)(oC),
    r = e.record.name,
    i = e.record.previewUrl,
    a;
  t[0] === e.record.sizeBytes
    ? (a = t[1])
    : ((a = y(e.record.sizeBytes)), (t[0] = e.record.sizeBytes), (t[1] = a));
  let o;
  t[2] === e.upload ? (o = t[3]) : ((o = fC(e.upload)), (t[2] = e.upload), (t[3] = o));
  let s;
  t[4] !== n || t[5] !== e.record.id
    ? ((s = () => n.expandImage(e.record.id)), (t[4] = n), (t[5] = e.record.id), (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== e.record.name || t[8] !== e.record.previewUrl || t[9] !== a || t[10] !== o || t[11] !== s
    ? ((c = (0, Y.jsx)(C, {
        render: (0, Y.jsx)(ve, { name: r, previewUrl: i, size: a, suffix: o, onClick: s }),
      })),
      (t[7] = e.record.name),
      (t[8] = e.record.previewUrl),
      (t[9] = a),
      (t[10] = o),
      (t[11] = s),
      (t[12] = c))
    : (c = t[12]);
  let u;
  t[13] !== e.record || t[14] !== e.upload
    ? ((u = pC(e.record, e.upload)), (t[13] = e.record), (t[14] = e.upload), (t[15] = u))
    : (u = t[15]);
  let d;
  t[16] === u
    ? (d = t[17])
    : ((d = (0, Y.jsx)(S, { side: `top`, className: `whitespace-pre-wrap`, children: u })),
      (t[16] = u),
      (t[17] = d));
  let f;
  return (
    t[18] !== c || t[19] !== d
      ? ((f = (0, Y.jsxs)(l, { children: [c, d] })), (t[18] = c), (t[19] = d), (t[20] = f))
      : (f = t[20]),
    f
  );
}
function hC(e) {
  let t = (0, j.c)(32),
    n = (0, J.use)(oC),
    { resolvedTheme: r } = Me(),
    i;
  t[0] === e.record ? (i = t[1]) : ((i = me(e.record)), (t[0] = e.record), (t[1] = i));
  let a = i,
    o;
  t[2] !== a || t[3] !== e.upload
    ? ((o = a ? `attach again` : fC(e.upload)), (t[2] = a), (t[3] = e.upload), (t[4] = o))
    : (o = t[4]);
  let s = o,
    c;
  t[5] === e.record.sizeBytes
    ? (c = t[6])
    : ((c = y(e.record.sizeBytes)), (t[5] = e.record.sizeBytes), (t[6] = c));
  let l = c,
    d;
  t[7] === e.record ? (d = t[8]) : ((d = b(e.record)), (t[7] = e.record), (t[8] = d));
  let f = d !== null,
    p;
  t[9] === e.record
    ? (p = t[10])
    : ((p = u(e.record)
        ? {
            file: e.record.file,
            environmentId: e.record.uploadEnvironmentId,
            attachmentId: e.record.uploadedAttachmentId,
          }
        : void 0),
      (t[9] = e.record),
      (t[10] = p));
  let m = e.upload?.status === `failed`,
    h = `${f && !a ? `Preview video` : `File`} attachment, ${e.record.name}, ${l}`,
    g;
  t[11] !== n || t[12] !== f || t[13] !== a || t[14] !== e.record.id
    ? ((g = a ? void 0 : () => (f ? n.expandVideo(e.record.id) : n.openFile(e.record.id))),
      (t[11] = n),
      (t[12] = f),
      (t[13] = a),
      (t[14] = e.record.id),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] !== a || t[17] !== e.record || t[18] !== e.upload
    ? ((_ = a
        ? `${e.record.name} was not saved with this draft. Attach it again to send it.`
        : pC(e.record, e.upload)),
      (t[16] = a),
      (t[17] = e.record),
      (t[18] = e.upload),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== f ||
    t[21] !== a ||
    t[22] !== e.record.name ||
    t[23] !== r ||
    t[24] !== l ||
    t[25] !== s ||
    t[26] !== p ||
    t[27] !== m ||
    t[28] !== h ||
    t[29] !== g ||
    t[30] !== _
      ? ((v = (0, Y.jsx)(ge, {
          name: e.record.name,
          svgPreview: p,
          size: l,
          isVideo: f,
          theme: r,
          error: m,
          unresolved: a,
          suffix: s,
          accessibleLabel: h,
          onOpen: g,
          tooltip: _,
        })),
        (t[20] = f),
        (t[21] = a),
        (t[22] = e.record.name),
        (t[23] = r),
        (t[24] = l),
        (t[25] = s),
        (t[26] = p),
        (t[27] = m),
        (t[28] = h),
        (t[29] = g),
        (t[30] = _),
        (t[31] = v))
      : (v = t[31]),
    v
  );
}
function gC(e) {
  let t = (0, j.c)(11),
    n = (0, J.use)(oC),
    r = e.record.pullRequest;
  if (r === void 0) return null;
  let i = n.environmentId,
    a;
  t[0] === e.record ? (a = t[1]) : ((a = ie(e.record)), (t[0] = e.record), (t[1] = a));
  let o;
  t[2] === e.record ? (o = t[3]) : ((o = ee(e.record)), (t[2] = e.record), (t[3] = o));
  let s;
  return (
    t[4] !== n.environmentId ||
    t[5] !== n.openPullRequest ||
    t[6] !== r ||
    t[7] !== e.kind ||
    t[8] !== a ||
    t[9] !== o
      ? ((s = (0, Y.jsx)(he, {
          metadata: r,
          environmentId: i,
          label: a,
          kindLabel: o,
          kind: e.kind,
          onOpen: n.openPullRequest,
        })),
        (t[4] = n.environmentId),
        (t[5] = n.openPullRequest),
        (t[6] = r),
        (t[7] = e.kind),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
function _C(e) {
  let t = [e.pageTitle?.trim() || e.pageUrl];
  e.comment.trim() && t.push(``, e.comment.trim());
  let n = [],
    r = (e, t) => `${e} ${t}${e === 1 ? `` : `s`}`;
  return (
    e.elements.length > 0 && n.push(r(e.elements.length, `element`)),
    e.regions.length > 0 && n.push(r(e.regions.length, `region`)),
    e.strokes.length > 0 && n.push(r(e.strokes.length, `drawing`)),
    e.styleChanges.length > 0 && n.push(r(e.styleChanges.length, `style change`)),
    n.length > 0 && t.push(``, n.join(`, `)),
    t.join(`
`)
  );
}
function vC(e) {
  let t = (0, j.c)(16),
    { comment: n } = e,
    r;
  t[0] === n.filePath
    ? (r = t[1])
    : ((r = (0, Y.jsx)(`div`, {
        className: `truncate text-xs font-medium text-foreground`,
        children: n.filePath,
      })),
      (t[0] = n.filePath),
      (t[1] = r));
  let i;
  t[2] !== n.rangeLabel || t[3] !== n.sectionTitle
    ? ((i = (0, Y.jsxs)(`div`, {
        className: `text-secondary-label text-2xs`,
        children: [n.sectionTitle, ` · `, n.rangeLabel],
      })),
      (t[2] = n.rangeLabel),
      (t[3] = n.sectionTitle),
      (t[4] = i))
    : (i = t[4]);
  let a;
  t[5] !== r || t[6] !== i
    ? ((a = (0, Y.jsxs)(`div`, { className: `space-y-1`, children: [r, i] })),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a))
    : (a = t[7]);
  let o;
  t[8] === n.text
    ? (o = t[9])
    : ((o = n.text.trim() ? (0, Y.jsx)(De, { text: n.text.trim(), cwd: void 0 }) : null),
      (t[8] = n.text),
      (t[9] = o));
  let s;
  t[10] === n.diff
    ? (s = t[11])
    : ((s = n.diff.trim()
        ? (0, Y.jsx)(`div`, {
            className: `flex h-64 min-h-0 flex-col overflow-hidden rounded-md border border-border`,
            children: (0, Y.jsx)(Ke, { name: `review.diff`, text: n.diff }),
          })
        : null),
      (t[10] = n.diff),
      (t[11] = s));
  let c;
  return (
    t[12] !== a || t[13] !== o || t[14] !== s
      ? ((c = (0, Y.jsxs)(`div`, {
          className: `space-y-2 overflow-hidden rounded-lg border border-border/70 bg-background/70 p-3`,
          children: [a, o, s],
        })),
        (t[12] = a),
        (t[13] = o),
        (t[14] = s),
        (t[15] = c))
      : (c = t[15]),
    c
  );
}
function yC(e) {
  let t = (0, j.c)(9),
    { annotation: n, screenshot: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = _C(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o = n.screenshot?.dataUrl || r?.previewUrl,
    s;
  t[2] === o
    ? (s = t[3])
    : ((s = o
        ? (0, Y.jsx)(`img`, {
            src: o,
            alt: `Annotated preview crop`,
            className: `max-h-64 w-full border-border/70 border-b bg-muted object-contain`,
          })
        : (0, Y.jsx)(`div`, {
            className: `border-border/70 border-b bg-muted/40 px-3 py-2 text-secondary-label text-xs`,
            children: `Screenshot unavailable`,
          })),
      (t[2] = o),
      (t[3] = s));
  let c;
  t[4] === a
    ? (c = t[5])
    : ((c = (0, Y.jsx)(`div`, {
        className: `whitespace-pre-wrap wrap-break-word px-3 py-2.5 text-sm text-foreground`,
        children: a,
      })),
      (t[4] = a),
      (t[5] = c));
  let l;
  return (
    t[6] !== s || t[7] !== c
      ? ((l = (0, Y.jsxs)(`div`, {
          className: `overflow-hidden rounded-lg border border-border/70 bg-background/70`,
          children: [s, c],
        })),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function bC(e) {
  let t = (0, j.c)(3),
    { environmentId: n } = (0, J.use)(oC),
    r = n !== null && e.record.environmentId !== n,
    i;
  return (
    t[0] !== e.record || t[1] !== r
      ? ((i = (0, Y.jsx)(ke, { record: e.record, unreadable: r })),
        (t[0] = e.record),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function xC(e) {
  let t = (0, j.c)(2),
    n;
  return (
    t[0] === e.label
      ? (n = t[1])
      : ((n = (0, Y.jsx)(we, {
          label: e.label,
          tooltip: `This context is no longer available. Remove it or attach it again.`,
        })),
        (t[0] = e.label),
        (t[1] = n)),
    n
  );
}
var SC = qe({
  requiredKinds: [
    `image`,
    `file`,
    `terminal`,
    `review-comment`,
    `preview-annotation`,
    `thread`,
    `commit`,
  ],
  handlers: [
    {
      kind: `terminal`,
      canRender: (e) => e.kind === `terminal`,
      render: (e, t, n) =>
        e.kind === `terminal`
          ? (0, Y.jsx)(aC, { context: e.record, detailsMode: n.capabilities.details })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
    {
      kind: `image`,
      canRender: (e) => e.kind === `image`,
      render: (e, t) =>
        e.kind === `image`
          ? (0, Y.jsx)(mC, { record: e.record, upload: e.upload })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
    {
      kind: `file`,
      canRender: (e) => e.kind === `file`,
      render: (e, t) =>
        e.kind === `file`
          ? (0, Y.jsx)(hC, { record: e.record, upload: e.upload })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
    {
      kind: `review-comment`,
      canRender: (e) => e.kind === `review-comment`,
      render: (e, t, n) => {
        if (e.kind !== `review-comment`) return (0, Y.jsx)(xC, { label: t.label });
        let r = oe(e.record),
          i = le(e.record) ?? `unknown`;
        return r && e.record.pullRequest !== void 0
          ? (0, Y.jsx)(gC, { record: e.record, kind: Te[i] })
          : (0, Y.jsx)(dC, {
              icon: r ? (0, Y.jsx)(Xe.pullRequest, {}) : (0, Y.jsx)(o, {}),
              label: ie(e.record),
              kindLabel: r ? ee(e.record) : `Review comment`,
              details: (0, Y.jsx)(vC, { comment: e.record }),
              detailsMode: n.capabilities.details,
              kind: r ? Te[i] : `review-comment`,
            });
      },
    },
    {
      kind: `preview-annotation`,
      canRender: (e) => e.kind === `preview-annotation`,
      render: (e, t, n) =>
        e.kind === `preview-annotation`
          ? (0, Y.jsx)(dC, {
              icon: (0, Y.jsx)(s, {}),
              label: O(e.record),
              kindLabel: `Preview annotation`,
              details: (0, Y.jsx)(yC, { annotation: e.record, screenshot: e.screenshot }),
              detailsMode: n.capabilities.details,
              kind: `preview-annotation`,
            })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
    {
      kind: `thread`,
      canRender: (e) => e.kind === `thread`,
      render: (e, t) =>
        e.kind === `thread`
          ? (0, Y.jsx)(bC, { record: e.record })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
    {
      kind: `commit`,
      canRender: (e) => e.kind === `commit`,
      render: (e, t) =>
        e.kind === `commit`
          ? (0, Y.jsx)(We, { record: e.record })
          : (0, Y.jsx)(xC, { label: t.label }),
    },
  ],
  fallback: (e, t, n) => (0, Y.jsx)(xC, { label: n.label }),
});
function CC(e) {
  let t = (0, J.use)(lC);
  return SC.render(e.kind, t.get(e.contextId), { label: e.label });
}
var wC = [
    { id: ``, label: `Plain text` },
    { id: `bash`, label: `Bash` },
    { id: `c`, label: `C` },
    { id: `cpp`, label: `C++` },
    { id: `csharp`, label: `C#` },
    { id: `css`, label: `CSS` },
    { id: `dart`, label: `Dart` },
    { id: `diff`, label: `Diff` },
    { id: `dockerfile`, label: `Dockerfile` },
    { id: `elixir`, label: `Elixir` },
    { id: `go`, label: `Go` },
    { id: `graphql`, label: `GraphQL` },
    { id: `haskell`, label: `Haskell` },
    { id: `html`, label: `HTML` },
    { id: `java`, label: `Java` },
    { id: `javascript`, label: `JavaScript` },
    { id: `json`, label: `JSON` },
    { id: `jsx`, label: `JSX` },
    { id: `kotlin`, label: `Kotlin` },
    { id: `lua`, label: `Lua` },
    { id: `markdown`, label: `Markdown` },
    { id: `php`, label: `PHP` },
    { id: `powershell`, label: `PowerShell` },
    { id: `python`, label: `Python` },
    { id: `r`, label: `R` },
    { id: `ruby`, label: `Ruby` },
    { id: `rust`, label: `Rust` },
    { id: `scala`, label: `Scala` },
    { id: `scss`, label: `SCSS` },
    { id: `sql`, label: `SQL` },
    { id: `svelte`, label: `Svelte` },
    { id: `swift`, label: `Swift` },
    { id: `toml`, label: `TOML` },
    { id: `tsx`, label: `TSX` },
    { id: `typescript`, label: `TypeScript` },
    { id: `vue`, label: `Vue` },
    { id: `xml`, label: `XML` },
    { id: `yaml`, label: `YAML` },
    { id: `zig`, label: `Zig` },
  ],
  TC = {
    cs: `csharp`,
    "c++": `cpp`,
    js: `javascript`,
    md: `markdown`,
    py: `python`,
    rb: `ruby`,
    rs: `rust`,
    sh: `bash`,
    shell: `bash`,
    ts: `typescript`,
    yml: `yaml`,
  };
function EC(e) {
  return e.trim().split(/\s+/, 1)[0] ?? ``;
}
function DC(e, t) {
  let n = /^\s*/.exec(e)[0],
    r = e.slice(n.length + EC(e).length);
  return t ? `${n}${t}${r}` : r.trim() ? `${n}text${r}` : ``;
}
function OC(e) {
  let t = e === `text` ? `` : (TC[e.toLowerCase()] ?? e);
  return wC.find((e) => e.id === t.toLowerCase()) ?? null;
}
function kC(e) {
  return OC(e)?.label ?? e;
}
function AC(e) {
  let t = (0, j.c)(5),
    n;
  t[0] === e.language
    ? (n = t[1])
    : ((n = e.language ? Fe(e.language) : `file.txt`), (t[0] = e.language), (t[1] = n));
  let r = n,
    i;
  return (
    t[2] !== r || t[3] !== e.theme
      ? ((i = (0, Y.jsx)(Ze, {
          pathValue: r,
          kind: `file`,
          theme: e.theme,
          className: `size-3.5`,
        })),
        (t[2] = r),
        (t[3] = e.theme),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function jC(e) {
  let t = (0, j.c)(45),
    [n, r] = (0, J.useState)(``),
    o = OC(e.language)?.id ?? e.language,
    s,
    c;
  if (t[0] !== o || t[1] !== n) {
    s = wC.some((e) => e.id === o) ? [...wC] : [{ id: o, label: o }, ...wC];
    let e = n.trim().toLowerCase();
    ((c = e ? s.filter((t) => t.label.toLowerCase().includes(e) || t.id.includes(e)) : s),
      (t[0] = o),
      (t[1] = n),
      (t[2] = s),
      (t[3] = c));
  } else ((s = t[2]), (c = t[3]));
  let l = c,
    u;
  t[4] !== o || t[5] !== s
    ? ((u = s.find((e) => e.id === o) ?? null), (t[4] = o), (t[5] = s), (t[6] = u))
    : (u = t[6]);
  let d = u,
    p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => {
        e || r(``);
      }),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== o || t[9] !== e
    ? ((m = (t) => {
        t && t.id !== o && e.onChange(t.id);
      }),
      (t[8] = o),
      (t[9] = e),
      (t[10] = m))
    : (m = t[10]);
  let h = e.disabled,
    g;
  t[11] === e.language ? (g = t[12]) : ((g = kC(e.language)), (t[11] = e.language), (t[12] = g));
  let _ = `Code language: ${g}`,
    v;
  t[13] !== e.disabled || t[14] !== _
    ? ((v = (0, Y.jsx)(f, {
        type: `button`,
        variant: `ghost-muted`,
        size: `xs`,
        disabled: h,
        "aria-label": _,
      })),
      (t[13] = e.disabled),
      (t[14] = _),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== o || t[17] !== e.theme
    ? ((y = (0, Y.jsx)(AC, { language: o, theme: e.theme })),
      (t[16] = o),
      (t[17] = e.theme),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === e.language ? (b = t[20]) : ((b = kC(e.language)), (t[19] = e.language), (t[20] = b));
  let x;
  t[21] === b
    ? (x = t[22])
    : ((x = (0, Y.jsx)(`span`, { className: `max-w-40 truncate`, children: b })),
      (t[21] = b),
      (t[22] = x));
  let S;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(i, { className: `opacity-60` })), (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== x || t[25] !== v || t[26] !== y
    ? ((C = (0, Y.jsxs)(Le, { render: v, children: [y, x, S] })),
      (t[24] = x),
      (t[25] = v),
      (t[26] = y),
      (t[27] = C))
    : (C = t[27]);
  let w;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (e) => r(e.target.value)), (t[28] = w))
    : (w = t[28]);
  let T;
  t[29] === n
    ? (T = t[30])
    : ((T = (0, Y.jsx)(Ve, {
        "aria-label": `Search languages`,
        placeholder: `Search languages`,
        value: n,
        onChange: w,
      })),
      (t[29] = n),
      (t[30] = T));
  let E;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(Re, { children: `No matching languages.` })), (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] !== o || t[33] !== e.theme
    ? ((D = (0, Y.jsx)(Ie, {
        children: (t) =>
          (0, Y.jsxs)(
            Be,
            {
              value: t,
              children: [
                (0, Y.jsx)(AC, { language: t.id, theme: e.theme }),
                (0, Y.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: t.label }),
                t.id === o ? (0, Y.jsx)(a, { className: `ml-auto` }) : null,
              ],
            },
            t.id || `plain`,
          ),
      })),
      (t[32] = o),
      (t[33] = e.theme),
      (t[34] = D))
    : (D = t[34]);
  let ee;
  t[35] !== T || t[36] !== D
    ? ((ee = (0, Y.jsxs)(ze, { align: `start`, className: `w-56`, children: [T, E, D] })),
      (t[35] = T),
      (t[36] = D),
      (t[37] = ee))
    : (ee = t[37]);
  let te;
  return (
    t[38] !== l || t[39] !== s || t[40] !== d || t[41] !== C || t[42] !== ee || t[43] !== m
      ? ((te = (0, Y.jsx)(`span`, {
          className: `-ml-1.5 flex min-w-0`,
          children: (0, Y.jsxs)(He, {
            items: s,
            filteredItems: l,
            autoHighlight: !0,
            itemToStringLabel: NC,
            isItemEqualToValue: MC,
            value: d,
            onOpenChange: p,
            onValueChange: m,
            children: [C, ee],
          }),
        })),
        (t[38] = l),
        (t[39] = s),
        (t[40] = d),
        (t[41] = C),
        (t[42] = ee),
        (t[43] = m),
        (t[44] = te))
      : (te = t[44]),
    te
  );
}
function MC(e, t) {
  return e.id === t.id;
}
function NC(e) {
  return e.label;
}
function PC(e) {
  let t = (0, j.c)(19),
    { node: n, editor: r, getPos: i, updateAttributes: a } = e,
    o = je(),
    s = typeof n.attrs.language == `string` ? n.attrs.language : ``,
    c;
  t[0] === s ? (c = t[1]) : ((c = EC(s)), (t[0] = s), (t[1] = c));
  let l = c,
    u;
  t[2] !== r || t[3] !== i || t[4] !== s || t[5] !== n.content || t[6] !== a
    ? ((u = (e) => {
        a({ language: DC(s, e) });
        let t = i();
        typeof t == `number` &&
          r
            .chain()
            .focus(t + 1 + n.content.size)
            .run();
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = s),
      (t[5] = n.content),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d = u,
    f = l || `text`,
    p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { contentEditable: !1 }), (t[8] = p))
    : (p = t[8]);
  let m = !r.isEditable,
    h;
  t[9] !== d || t[10] !== l || t[11] !== o || t[12] !== m
    ? ((h = (0, Y.jsx)(jC, { language: l, theme: o, disabled: m, onChange: d })),
      (t[9] = d),
      (t[10] = l),
      (t[11] = o),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(`div`, {
        className: `chat-markdown-shiki`,
        children: (0, Y.jsx)(`pre`, {
          className: `max-w-full overflow-x-auto px-3 pt-1 pb-2`,
          children: (0, Y.jsx)(Th, {
            as: `code`,
            className: `block min-h-[1lh] font-mono whitespace-pre-wrap text-inherit [overflow-wrap:anywhere]`,
          }),
        }),
      })),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== o || t[16] !== f || t[17] !== h
      ? ((_ = (0, Y.jsx)(Se, {
          as: Eh,
          language: f,
          fenceTitle: null,
          theme: o,
          headerProps: p,
          title: h,
          children: g,
        })),
        (t[15] = o),
        (t[16] = f),
        (t[17] = h),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
var FC = new V(`composerCodeBlockHighlight`),
  IC = 2e4,
  LC = 2e3,
  RC = 300;
function zC(e) {
  return e.length <= IC;
}
function BC(e, t) {
  return [t, String(e.attrs.language ?? ``), e.textContent].join(`\0`);
}
function VC(e) {
  let t = [];
  return (
    e.doc.forEach((e, n) => {
      e.type.name === `codeBlock` && t.push({ node: e, pos: n });
    }),
    t
  );
}
function HC(e) {
  return q.create({
    name: `composerCodeBlockHighlight`,
    addProseMirrorPlugins() {
      let t = new Map(),
        n = new Set();
      return [
        new B({
          key: FC,
          state: {
            init: () => H.empty,
            apply(n, r, i, a) {
              let o = r.map(n.mapping, n.doc);
              return !n.docChanged && !n.getMeta(FC) ? o : WC(a, t, e.resolveTheme(), o);
            },
          },
          props: {
            decorations(e) {
              return FC.getState(e);
            },
          },
          view(r) {
            let i = !1,
              a = e.resolveTheme(),
              o = null,
              s,
              c = (l) => {
                let u = e.resolveTheme(),
                  d = u !== a;
                if (((a = u), !d && r.state.doc === o)) return;
                (clearTimeout(s), (o = r.state.doc));
                let f = VC(r.state),
                  p = new Set(f.map(({ node: e }) => BC(e, u)));
                n = p;
                for (let e of t.keys()) n.has(e) || t.delete(e);
                let m = f.filter(({ node: e }) => zC(e.textContent) && !t.has(BC(e, u))),
                  h = l && !d ? m.filter(({ node: e }) => e.textContent.length <= LC) : m;
                (h.length < m.length &&
                  (s = setTimeout(() => {
                    ((o = null), c(!1));
                  }, RC)),
                  h.length === 0
                    ? d && r.dispatch(r.state.tr.setMeta(FC, !0))
                    : Promise.allSettled(
                        h.map(async ({ node: e }) => {
                          let r = EC(String(e.attrs.language ?? ``)) || `text`,
                            a = BC(e, u),
                            o = await et(r).catch(() => null);
                          i ||
                            n !== p ||
                            t.has(a) ||
                            t.set(a, {
                              signature: a,
                              decorations: o ? UC(o, e.textContent, r, u) : [],
                            });
                        }),
                      ).then(() => {
                        i || n !== p || r.dispatch(r.state.tr.setMeta(FC, !0));
                      }));
              };
            c(!1);
            let l = new MutationObserver(() => c(!1));
            return (
              l.observe(document.documentElement, { attributeFilter: [`class`] }),
              {
                update: () => c(!0),
                destroy() {
                  ((i = !0), clearTimeout(s), l.disconnect());
                },
              }
            );
          },
        }),
      ];
    },
  });
}
function UC(e, t, n, r) {
  let i;
  try {
    i = e.codeToTokens(t, { lang: n, theme: r }).tokens;
  } catch {
    return [];
  }
  let a = [],
    o = 0;
  for (let [e, n] of i.entries()) {
    e > 0 &&
      (o += t.startsWith(
        `\r
`,
        o,
      )
        ? 2
        : 1);
    for (let e of n) {
      let t = e.content.length;
      (e.color && e.content.trim() && a.push({ from: o, to: o + t, color: e.color }), (o += t));
    }
  }
  return a;
}
function WC(e, t, n, r) {
  let i = [];
  for (let { node: a, pos: o } of VC(e)) {
    if (!zC(a.textContent)) continue;
    let e = t.get(BC(a, n));
    if (!e) {
      let e = o + 1,
        t = e + a.content.size;
      for (let n of r.find(e, t)) {
        if (n.from >= e && n.to <= t) {
          i.push(n);
          continue;
        }
        let r = Math.max(n.from, e),
          a = Math.min(n.to, t);
        r < a && i.push(GC(r, a, n.spec.color));
      }
      continue;
    }
    if (a.content.size !== a.textContent.length) continue;
    let s = o + 1;
    for (let t of e.decorations) i.push(GC(s + t.from, s + t.to, t.color));
  }
  return H.create(e.doc, i);
}
function GC(e, t, n) {
  return Qc.inline(e, t, { style: `color:${n}` }, { color: n });
}
function KC(e) {
  let t = e.getData(`text/plain`),
    n = m(e.getData(`web application/x-t3-context-fragment+json`)) ?? x(e.getData(`text/html`));
  if (n === null) return null;
  let r = new Set(T(t).map((e) => e.contextId));
  for (let e of n.records)
    e.kind === `preview-annotation` &&
      !(`payload` in e) &&
      r.has(e.contextId) &&
      e.screenshotContextId &&
      r.add(e.screenshotContextId);
  return { ...n, records: n.records.filter((e) => r.has(e.contextId)) };
}
function qC(e, t) {
  let n = e.getData(`text/plain`),
    r = t ? KC(e) : null,
    i = r && r.records.length > 0 ? t(r) : null;
  return i && i.size > 0
    ? fe(n, (e) => {
        let t = i.get(e.contextId);
        return t
          ? ue({
              ...e,
              contextId: w.make(t),
              kind: e.kind === `element` ? `preview-annotation` : e.kind,
            })
          : e.source;
      })
    : n;
}
function JC(e, t) {
  return t !== null && t.start !== t.end && (t.start !== e.start || t.end !== e.end);
}
var YC = (0, J.createContext)({
    openComment: null,
    onOpenChange: () => {},
    onDraftChange: () => {},
    onSubmitAndSend: () => {},
  }),
  XC = (0, J.createContext)([]),
  ZC = {
    "(": `)`,
    "[": `]`,
    "{": `}`,
    "'": `'`,
    '"': `"`,
    "“": `”`,
    "`": "`",
    "<": `>`,
    "«": `»`,
    "*": `*`,
    _: `_`,
  };
function QC() {
  return document.documentElement.classList.contains(`dark`) ? `dark` : `light`;
}
var $C = `relative inline-flex select-none items-center align-middle leading-none data-[composer-chip-selected]:after:pointer-events-none data-[composer-chip-selected]:after:absolute data-[composer-chip-selected]:after:inset-0 data-[composer-chip-selected]:after:rounded-sm data-[composer-chip-selected]:after:bg-[Highlight] data-[composer-chip-selected]:after:opacity-30 data-[composer-chip-selected]:after:content-['']`,
  ew = rm.create({
    name: `composer-mention`,
    group: `inline`,
    inline: !0,
    atom: !0,
    selectable: !0,
    addAttributes() {
      return { path: { default: `` }, source: { default: `` } };
    },
    parseHTML() {
      return [{ tag: `span[data-composer-mention]` }];
    },
    renderHTML({ HTMLAttributes: e }) {
      return [`span`, { "data-composer-mention": ``, ...e }];
    },
    addNodeView() {
      return Bh(tw);
    },
  });
function tw(e) {
  let t = (0, j.c)(25),
    { node: n } = e,
    r = (0, J.use)(oC),
    i = n.attrs.path ?? ``,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(`button`, { type: `button` })), (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== r || t[2] !== i
    ? ((o = () => r.openMention(i)), (t[1] = r), (t[2] = i), (t[3] = o))
    : (o = t[3]);
  let s = `Preview ${i}`,
    c = r.environmentId,
    u = r.cwd,
    d;
  t[4] === i ? (d = t[5]) : ((d = Pe(i)), (t[4] = i), (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = QC()), (t[6] = f)) : (f = t[6]);
  let p;
  t[7] !== r.cwd || t[8] !== r.environmentId || t[9] !== i || t[10] !== d
    ? ((p = (0, Y.jsx)(Ee, { path: i, environmentId: c, cwd: u, label: d, theme: f })),
      (t[7] = r.cwd),
      (t[8] = r.environmentId),
      (t[9] = i),
      (t[10] = d),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== o || t[13] !== s || t[14] !== p
    ? ((m = (0, Y.jsx)(A, {
        kind: `mention`,
        dir: `ltr`,
        render: a,
        onClick: o,
        "aria-label": s,
        contentEditable: !1,
        spellCheck: !1,
        "data-composer-mention-chip": `true`,
        children: p,
      })),
      (t[12] = o),
      (t[13] = s),
      (t[14] = p),
      (t[15] = m))
    : (m = t[15]);
  let h = m,
    g;
  t[16] === h ? (g = t[17]) : ((g = (0, Y.jsx)(C, { render: h })), (t[16] = h), (t[17] = g));
  let _;
  t[18] !== r.cwd || t[19] !== r.environmentId || t[20] !== i
    ? ((_ = (0, Y.jsx)(S, {
        side: `top`,
        children: (0, Y.jsx)(Ce, { path: i, environmentId: r.environmentId, cwd: r.cwd }),
      })),
      (t[18] = r.cwd),
      (t[19] = r.environmentId),
      (t[20] = i),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  return (
    t[22] !== g || t[23] !== _
      ? ((v = (0, Y.jsx)(Eh, {
          as: `span`,
          className: $C,
          children: (0, Y.jsxs)(l, { children: [g, _] }),
        })),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
var nw = rm.create({
  name: `composer-skill`,
  group: `inline`,
  inline: !0,
  atom: !0,
  selectable: !0,
  addAttributes() {
    return {
      skillName: { default: `` },
      skillLabel: { default: `` },
      skillDescription: { default: null },
    };
  },
  parseHTML() {
    return [{ tag: `span[data-composer-skill]` }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [`span`, { "data-composer-skill": ``, ...e }];
  },
  addNodeView() {
    return Bh(iw);
  },
});
function rw(e, t) {
  let n = e.find((e) => e.name === t && dt(e));
  if (!n) return null;
  let r = n.shortDescription?.trim();
  return { label: xe(n), description: r || n.description?.trim() || null };
}
function iw(e) {
  let t = (0, j.c)(25),
    { node: n } = e,
    r = (0, J.use)(oC),
    i = (0, J.use)(XC),
    a = n.attrs.skillName ?? ``,
    o = n.attrs.skillDescription ?? null,
    s,
    c,
    l;
  if (t[0] !== n.attrs.skillLabel || t[1] !== o || t[2] !== a || t[3] !== i) {
    let e;
    (t[7] === a ? (e = t[8]) : ((e = (e) => e.name === a && dt(e)), (t[7] = a), (t[8] = e)),
      (c = i.find(e)),
      (s = c ? c.description?.trim() || c.shortDescription?.trim() : o),
      (l = c ? xe(c) : n.attrs.skillLabel || a),
      (t[0] = n.attrs.skillLabel),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l));
  } else ((s = t[4]), (c = t[5]), (l = t[6]));
  let u = l,
    d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Y.jsx)(Ae, {})), (t[9] = d))
    : (d = t[9]);
  let p = `Skill ${u}`,
    m;
  t[10] === u
    ? (m = t[11])
    : ((m = (0, Y.jsx)(`p`, { className: `font-medium`, children: u })), (t[10] = u), (t[11] = m));
  let h = s || `No description is available for this skill.`,
    g;
  t[12] === h ? (g = t[13]) : ((g = (0, Y.jsx)(`p`, { children: h })), (t[12] = h), (t[13] = g));
  let _;
  t[14] !== r || t[15] !== c
    ? ((_ =
        c?.path && r.environmentId
          ? (0, Y.jsx)(f, {
              variant: `outline`,
              size: `sm`,
              onClick: () => r.openMention(c.path),
              children: `View instructions`,
            })
          : null),
      (t[14] = r),
      (t[15] = c),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== m || t[18] !== g || t[19] !== _
    ? ((v = (0, Y.jsxs)(`div`, { className: `space-y-3 p-2 text-sm`, children: [m, g, _] })),
      (t[17] = m),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== u || t[22] !== p || t[23] !== v
      ? ((y = (0, Y.jsx)(Eh, {
          as: `span`,
          className: $C,
          children: (0, Y.jsx)(be, {
            kind: `skill`,
            icon: d,
            label: u,
            accessibleLabel: p,
            children: v,
          }),
        })),
        (t[21] = u),
        (t[22] = p),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
var aw = rm.create({
  name: `composer-citation`,
  group: `inline`,
  inline: !0,
  atom: !0,
  selectable: !0,
  addAttributes() {
    return { citation: { default: null }, source: { default: `` }, citeKey: { default: `` } };
  },
  parseHTML() {
    return [{ tag: `span[data-composer-citation]` }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [`span`, { "data-composer-citation": ``, ...e }];
  },
  addNodeView() {
    return Bh(ow);
  },
});
function ow(e) {
  let t = (0, j.c)(48),
    { node: n, editor: r, getPos: i } = e,
    a = (0, J.use)(YC),
    o = n.attrs.citation,
    s = n.attrs.citeKey,
    c = a.openComment?.key === s ? a.openComment : null,
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = () => {
        let e = typeof i == `function` ? i() : null;
        return typeof e == `number` ? e : null;
      }),
      (t[0] = i),
      (t[1] = l));
  let u = l,
    d;
  t[2] !== r.isEditable || t[3] !== r.state || t[4] !== r.view || t[5] !== u
    ? ((d = (e) => {
        if (!r.isEditable) return !1;
        let t = u();
        if (t === null) return !1;
        let n = r.state.doc.nodeAt(t);
        if (!n || n.type.name !== `composer-citation`) return !1;
        let i = n.attrs.citation,
          a = Je(i, e),
          o = r.state.tr.setNodeMarkup(t, void 0, { ...n.attrs, citation: a, source: Ye(a) });
        return (r.view.dispatch(o), !0);
      }),
      (t[2] = r.isEditable),
      (t[3] = r.state),
      (t[4] = r.view),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p = c?.removeOnCancel,
    m;
  t[7] !== r || t[8] !== u || t[9] !== p
    ? ((m = () => {
        if (!r.isEditable || !p) return;
        let e = u();
        if (e === null) return;
        let { doc: t } = r.state,
          n = t.nodeAt(e);
        if (!n) return;
        let i = e + n.nodeSize,
          a = p.before && t.textBetween(e - 1, e) === ` ` ? e - 1 : e,
          o = p.after && t.textBetween(i, i + 1) === ` ` ? i + 1 : i;
        r.chain().focus().deleteRange({ from: a, to: o }).run();
      }),
      (t[7] = r),
      (t[8] = u),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m,
    g;
  t[11] !== r.commands || t[12] !== r.isEditable || t[13] !== r.state || t[14] !== u
    ? ((g = () => {
        if (!r.isEditable) return;
        let e = u();
        if (e === null) return;
        let t = r.state.doc.nodeAt(e);
        t && t.type.name === `composer-citation` && r.commands.focus(e + t.nodeSize);
      }),
      (t[11] = r.commands),
      (t[12] = r.isEditable),
      (t[13] = r.state),
      (t[14] = u),
      (t[15] = g))
    : (g = t[15]);
  let _ = g,
    v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = se($C, `min-w-0 max-w-full`)), (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== r.isEditable || t[18] !== _
    ? ((y = (e) => {
        !r.isEditable ||
          e.key !== `Tab` ||
          e.shiftKey ||
          e.altKey ||
          e.metaKey ||
          e.ctrlKey ||
          !(e.target instanceof HTMLElement) ||
          e.target.dataset.citationCommentTrigger === void 0 ||
          (e.preventDefault(), _());
      }),
      (t[17] = r.isEditable),
      (t[18] = _),
      (t[19] = y))
    : (y = t[19]);
  let b = c !== null,
    x = c?.sourceAnchor,
    S;
  t[20] !== s || t[21] !== a || t[22] !== r.isEditable
    ? ((S = (e) => {
        (!e || r.isEditable) && a.onOpenChange(s, e);
      }),
      (t[20] = s),
      (t[21] = a),
      (t[22] = r.isEditable),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== h || t[25] !== p
    ? ((C = p ? { onCancel: h } : {}), (t[24] = h), (t[25] = p), (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] !== s || t[28] !== a
    ? ((w = (e) => a.onDraftChange(s, e)), (t[27] = s), (t[28] = a), (t[29] = w))
    : (w = t[29]);
  let T;
  t[30] !== a || t[31] !== f
    ? ((T = (e) => (f(e) ? (a.onSubmitAndSend(), !0) : !1)), (t[30] = a), (t[31] = f), (t[32] = T))
    : (T = t[32]);
  let E;
  t[33] !== _ ||
  t[34] !== f ||
  t[35] !== C ||
  t[36] !== w ||
  t[37] !== T ||
  t[38] !== b ||
  t[39] !== x ||
  t[40] !== S
    ? ((E = {
        open: b,
        sourceAnchor: x,
        onOpenChange: S,
        ...C,
        onSave: f,
        onDraftChange: w,
        onSaveAndSend: T,
        onRestoreFocus: _,
      }),
      (t[33] = _),
      (t[34] = f),
      (t[35] = C),
      (t[36] = w),
      (t[37] = T),
      (t[38] = b),
      (t[39] = x),
      (t[40] = S),
      (t[41] = E))
    : (E = t[41]);
  let D;
  t[42] !== o || t[43] !== E
    ? ((D = (0, Y.jsx)(ye, { citation: o, composer: !0, commentEditor: E })),
      (t[42] = o),
      (t[43] = E),
      (t[44] = D))
    : (D = t[44]);
  let ee;
  return (
    t[45] !== D || t[46] !== y
      ? ((ee = (0, Y.jsx)(Eh, {
          as: `span`,
          className: v,
          contentEditable: !1,
          spellCheck: !1,
          "data-composer-citation-chip": `true`,
          onKeyDown: y,
          children: D,
        })),
        (t[45] = D),
        (t[46] = y),
        (t[47] = ee))
      : (ee = t[47]),
    ee
  );
}
var sw = rm.create({
  name: `composer-context-reference`,
  group: `inline`,
  inline: !0,
  atom: !0,
  selectable: !0,
  addAttributes() {
    return {
      kind: { default: `` },
      contextId: { default: `` },
      label: { default: `` },
      source: { default: `` },
    };
  },
  parseHTML() {
    return [{ tag: `span[data-composer-context-reference]` }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [`span`, { "data-composer-context-reference": ``, ...e }];
  },
  addNodeView() {
    return Bh(cw);
  },
});
function cw(e) {
  let t = (0, j.c)(4),
    { node: n } = e,
    r = n.attrs.kind ?? ``,
    i = n.attrs.contextId ?? ``,
    a = n.attrs.label ?? ``,
    o;
  return (
    t[0] !== r || t[1] !== i || t[2] !== a
      ? ((o = (0, Y.jsx)(Eh, {
          as: `span`,
          className: $C,
          children: (0, Y.jsx)(CC, { kind: r, contextId: i, label: a }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function lw(e) {
  let t = [],
    n = MS(e),
    r = null,
    i = 0;
  for (let e of n.runs)
    if (
      e.nodeName !== `codeBlock` &&
      (e.openLen > 0 &&
        ((r ??= { from: e.pmPos, to: e.pmPos, markers: [] }),
        r.markers.push({
          at: e.pmPos,
          side: -1,
          text: n.value.slice(e.mdStart, e.mdStart + e.openLen),
        })),
      r !== null)
    ) {
      if (((r.to = e.pmPos + e.docLen), e.closeLen > 0)) {
        let t = e.mdStart + e.mdLen;
        r.markers.push({ at: r.to, side: -2, text: n.value.slice(t - e.closeLen, t) });
      }
      ((i += e.openLen - e.closeLen), i === 0 && (t.push(r), (r = null)));
    }
  return t;
}
function uw(e, t) {
  return new wp({
    find: e,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      let a = r.groups?.marker ?? `-`,
        o = r.groups?.space ?? ` `,
        s = r.groups?.carried ?? ``,
        c = e.doc.resolve(n.from);
      if (c.parent.type.name !== `paragraph` || c.depth !== 1) return null;
      let l = i()
        .deleteRange(n)
        .wrapInList(t, t === `orderedList` ? { start: Number.parseInt(a, 10) || 1 } : {})
        .updateAttributes(`listItem`, { marker: a, space: o });
      (s ? l.insertContent(s) : l).run();
    },
  });
}
var dw = new wp({
  find: /^\[([ xX])\] $/,
  handler: ({ state: e, range: t, match: n, chain: r }) => {
    let i = e.doc.resolve(t.from),
      a = i.node(-1);
    if (
      i.parent.type.name !== `paragraph` ||
      a?.type.name !== `listItem` ||
      ![`-`, `*`, `+`].includes(a.attrs.marker ?? ``)
    )
      return null;
    let o = (n[1] ?? ` `).toLowerCase() === `x`;
    r()
      .command(({ tr: e }) => (CS(e, t.from, t.to, o), !0))
      .run();
  },
});
function fw(e) {
  let t = nm({
    find: /^- \[([ xX])\] $/,
    type: e,
    getAttributes: (e) => ({ checked: e[1]?.toLowerCase() === `x` }),
  });
  return new wp({
    find: t.find,
    handler: (e) => (e.state.doc.resolve(e.range.from).depth === 1 ? t.handler(e) : null),
  });
}
function pw(e, t) {
  for (let n = e.depth; n > 0; --n) if (e.node(n).type.name === t) return !0;
  return !1;
}
var mw = new wp({
    find: /^>(\s)$/,
    handler: ({ state: e, range: t, match: n, chain: r }) => {
      let i = e.doc.resolve(t.from);
      if (i.parent.type.name !== `paragraph` || i.depth !== 1) return null;
      r()
        .deleteRange(t)
        .wrapIn(`blockquote`, { prefix: `>${n[1] ?? ` `}` })
        .run();
    },
  }),
  hw = new wp({
    find: /^(---|\*\*\*|___)\s?$/,
    handler: ({ state: e, range: t, match: n, chain: r }) => {
      let i = n[0] ?? `---`;
      if (!i.startsWith(`---`) && !/\s$/.test(i)) return null;
      let a = e.doc.resolve(t.from);
      if (a.parent.type.name !== `paragraph` || a.depth !== 1) return null;
      r()
        .deleteRange(t)
        .setHorizontalRule()
        .command(({ tr: e }) => {
          let t = e.selection.$from,
            n = t.index(0) - 1;
          if (n < 0) return !0;
          let r = t.posAtIndex(n, 0),
            a = e.doc.nodeAt(r);
          return (
            a?.type.name === `horizontalRule` &&
              e.setNodeMarkup(r, void 0, { ...a.attrs, source: i }),
            !0
          );
        })
        .run();
    },
  }),
  gw = new wp({
    find: /^(#{1,6})(\s)$/,
    handler: ({ state: e, range: t, match: n, chain: r }) => {
      let i = e.doc.resolve(t.from);
      if (i.parent.type.name !== `paragraph` || i.depth !== 1) return null;
      r()
        .deleteRange(t)
        .setNode(`heading`, { level: n[1]?.length ?? 1, space: n[2] ?? ` ` })
        .run();
    },
  });
function _w(e) {
  return e.state.selection.$from.parent.type.spec.code === !0;
}
var vw = new V(`composer-rich-markers`),
  yw = new B({
    key: vw,
    state: {
      init: (e, t) => bw(t),
      apply: (e, t, n, r) => (e.docChanged || e.selectionSet || e.storedMarksSet ? bw(r) : t),
    },
    props: {
      decorations(e) {
        return vw.getState(e);
      },
    },
  });
function bw(e) {
  let { doc: t, selection: n } = e,
    r = BS(e) ? 3 : 0,
    i = yx(e) === `rtl`,
    a = [];
  n.empty ||
    t.nodesBetween(
      n.from,
      n.to,
      (e, t) =>
        !e.type.name.startsWith(`composer-`) ||
        (a.push(Qc.node(t, t + e.nodeSize, { class: `composer-chip-range-selected` })), !1),
    );
  for (let e of lw(t))
    if (n.empty ? n.from >= e.from && n.from <= e.to : n.from < e.to && n.to > e.from)
      for (let { at: o, side: s, text: c } of e.markers) {
        let e = n.empty && o === n.from ? s + r : s,
          l = document.createElement(`span`);
        ((l.className = `composer-rich-marker`),
          (l.textContent = c),
          l.setAttribute(`aria-hidden`, `true`));
        let u =
          i && s === -1 && /^`+$/.test(c)
            ? t.resolve(o).nodeAfter?.marks.filter((e) => e.type.spec.code)
            : void 0;
        a.push(
          Qc.widget(o, l, {
            side: e,
            key: `marker-${o}-${e}-${l.textContent}`,
            ...(u?.length ? { marks: u } : {}),
          }),
        );
      }
  return H.create(t, a);
}
var xw = q.create({
  name: `composer-rich-markers`,
  addProseMirrorPlugins() {
    return [yw];
  },
});
function Sw(e, t) {
  let n = e.state.tr.setMeta(`addToHistory`, !1);
  for (let { from: e, to: r, node: i } of t) n.replaceWith(e, r, i);
  e.view.dispatch(n);
}
function Cw(e) {
  let t = (0, j.c)(12),
    n = (0, J.useRef)(!1),
    { onChange: r } = e,
    [i, a] = (0, J.useState)(null),
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (e, t, n, ...i) => {
        let o = i;
        (a({ value: e, cursor: t, expandedCursor: n }), r(e, t, n, ...o));
      }),
      (t[0] = r),
      (t[1] = o));
  let s = o,
    c = `${e.draftKey ?? ``}:${e.literalText ? `literal` : e.richTextEnabled ? `rich` : `plain`}`,
    l;
  t[2] !== e.cursor || t[3] !== e.literalText || t[4] !== e.value || t[5] !== i
    ? ((l =
        i?.value === e.value && i.cursor === e.cursor
          ? i.expandedCursor
          : ot(e.value, e.cursor, e.literalText)),
      (t[2] = e.cursor),
      (t[3] = e.literalText),
      (t[4] = e.value),
      (t[5] = i),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== s || t[8] !== e || t[9] !== c || t[10] !== l
      ? ((u = (0, Y.jsx)(
          Ow,
          { ...e, restoreFocusRef: n, initialExpandedCursor: l, onChange: s },
          c,
        )),
        (t[7] = s),
        (t[8] = e),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var ww = q.create({
  name: `composer-undo-grouping`,
  addStorage() {
    return { previous: null };
  },
  dispatchTransaction({ transaction: e, next: t }) {
    ((this.storage.previous = nC(e, this.storage.previous)), t(e));
  },
});
function Tw(e) {
  return [
    px.configure({
      blockquote: !1,
      bulletList: !1,
      codeBlock: !1,
      heading: !1,
      horizontalRule: !1,
      listItem: !1,
      link: !1,
      orderedList: !1,
      underline: !1,
      dropcursor: !1,
      gapcursor: !1,
      trailingNode: !1,
      code: !1,
      listKeymap: !1,
      undoRedo: { newGroupDelay: $S },
      italic: !1,
      ...(e ? {} : { bold: !1, strike: !1 }),
    }),
    ww,
    bx,
    ew,
    nw,
    aw,
    sw,
    xw,
    ...(e
      ? [
          Vx,
          Bx,
          zx,
          qx.extend({
            addNodeView() {
              return Bh(PC, {
                stopEvent: ({ event: e }) =>
                  e.target instanceof Element &&
                  e.target.closest(`.chat-markdown-codeblock-header`) !== null,
              });
            },
            addInputRules() {
              return [];
            },
          }),
          HC({
            resolveTheme: () =>
              at(document.documentElement.classList.contains(`dark`) ? `dark` : `light`),
          }),
          ...tS.map((e) =>
            e.name === `blockquote`
              ? e.extend({
                  addInputRules() {
                    return [mw];
                  },
                })
              : e.name === `horizontalRule`
                ? e.extend({
                    addInputRules() {
                      return [hw];
                    },
                  })
                : e.name === `heading`
                  ? e.extend({
                      addInputRules() {
                        return [gw];
                      },
                    })
                  : e,
          ),
          ...Zx.map((e) =>
            e.name === `listItem`
              ? e
              : e.extend({
                  addInputRules() {
                    return this.name === `bulletList`
                      ? [
                          uw(/^(?<marker>[*+])(?<space>\s)$/, `bulletList`),
                          uw(/^(?<marker>-)(?<space>[ \t]+)(?<carried>[^\s[])$/, `bulletList`),
                        ]
                      : [uw(/^(?<marker>\d+[.)])(?<space>\s)$/, `orderedList`)];
                  },
                }),
          ),
          Wx,
          Kx.extend({
            addInputRules() {
              return [fw(this.type), dw];
            },
          }),
        ]
      : []),
  ];
}
var Ew = Tw(!0),
  Dw = Tw(!1);
function Ow(e) {
  let t = (0, j.c)(182),
    {
      value: n,
      cursor: r,
      richTextEnabled: i,
      literalText: a,
      contextRecords: o,
      buildContextClipboardFragment: s,
      importContextFragment: c,
      skills: l,
      disabled: u,
      placeholder: d,
      ariaLabel: f,
      suggestionListId: m,
      activeSuggestionId: g,
      isPathQueryActive: v,
      containerClassName: y,
      className: b,
      placeholderClassName: x,
      onChange: S,
      onVisibleSelectionChange: C,
      onCommandKeyDown: w,
      onPageScrollKeyDown: T,
      onPageScrollKeyUp: E,
      onPageScrollRelease: D,
      onCitationSubmitAndSend: ee,
      onCitationDraftSave: te,
      onPaste: re,
      editorRef: ie,
      restoreFocusRef: ae,
    } = e,
    O = a !== void 0 && a,
    k = !O && (i ?? !1),
    oe;
  t[0] === O
    ? (oe = t[1])
    : ((oe = (e, t) =>
        O
          ? Math.max(0, Math.min(e.length, Number.isFinite(t) ? Math.floor(t) : e.length))
          : rt(e, t)),
      (t[0] = O),
      (t[1] = oe));
  let ce = oe,
    le;
  t[2] === O ? (le = t[3]) : ((le = (e, t) => (O ? t : ot(e, t))), (t[2] = O), (t[3] = le));
  let ue = le,
    de = (0, J.useRef)(n),
    fe;
  t[4] !== c || t[5] !== v || t[6] !== S || t[7] !== w || t[8] !== C
    ? ((fe = () => ({
        onChange: S,
        onVisibleSelectionChange: C,
        onCommandKeyDown: w,
        isPathQueryActive: v,
        importContextFragment: c,
      })),
      (t[4] = c),
      (t[5] = v),
      (t[6] = S),
      (t[7] = w),
      (t[8] = C),
      (t[9] = fe))
    : (fe = t[9]);
  let pe = Ne(fe),
    me;
  t[10] === l ? (me = t[11]) : ((me = (e) => rw(l, e)), (t[10] = l), (t[11] = me));
  let he = Ne(me),
    ge;
  t[12] !== ce || t[13] !== r || t[14] !== n
    ? ((ge = ce(n, r)), (t[12] = ce), (t[13] = r), (t[14] = n), (t[15] = ge))
    : (ge = t[15]);
  let _e = ge,
    ve = Math.max(0, Math.min(n.length, e.initialExpandedCursor)),
    ye;
  t[16] !== O || t[17] !== n
    ? ((ye = O ? [] : ne(n)), (t[16] = O), (t[17] = n), (t[18] = ye))
    : (ye = t[18]);
  let be;
  t[19] !== _e || t[20] !== ve || t[21] !== ye || t[22] !== n
    ? ((be = { value: n, cursor: _e, expandedCursor: ve, contextIds: ye }),
      (t[19] = _e),
      (t[20] = ve),
      (t[21] = ye),
      (t[22] = n),
      (t[23] = be))
    : (be = t[23]);
  let A = (0, J.useRef)(be),
    xe;
  t[24] === ve ? (xe = t[25]) : ((xe = { start: ve, end: ve }), (t[24] = ve), (t[25] = xe));
  let Se = (0, J.useRef)(xe),
    Ce = (0, J.useRef)(!1),
    we = (0, J.useRef)(!1),
    Te = (0, J.useRef)(null),
    [Ee, De] = (0, J.useState)(null),
    ke = (0, J.useRef)(null),
    [Ae, je] = (0, J.useState)(n.length === 0),
    Me,
    Pe;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (e, t) => {
        (!t && ke.current?.key === e && (ke.current = null),
          De((n) => (t ? (n?.key === e ? n : { key: e }) : n?.key === e ? null : n)));
      }),
      (Me = (e, t) => {
        ke.current = { key: e, comment: t };
      }),
      (t[26] = Me),
      (t[27] = Pe))
    : ((Me = t[26]), (Pe = t[27]));
  let Fe = ee ?? Pw,
    Ie;
  t[28] !== Ee || t[29] !== Fe
    ? ((Ie = { openComment: Ee, onOpenChange: Pe, onDraftChange: Me, onSubmitAndSend: Fe }),
      (t[28] = Ee),
      (t[29] = Fe),
      (t[30] = Ie))
    : (Ie = t[30]);
  let Le = Ie,
    Re;
  t[31] !== O || t[32] !== pe
    ? ((Re = (e) => {
        let t = MS(e.state.doc),
          n = O ? [] : t.contextIds,
          { from: r, to: i } = e.state.selection,
          a = RS(t, r),
          o = RS(t, i),
          s = t.value,
          c = Math.max(0, Math.min(t.value.length, FS(t, a))),
          l = it(t.value, c, O),
          u = { start: Math.min(c, FS(t, o)), end: Math.max(c, FS(t, o)) },
          d = Se.current;
        ((Se.current = u), je(s.length === 0));
        let f = A.current,
          p = !(
            f.value === s &&
            f.cursor === l &&
            f.expandedCursor === c &&
            f.contextIds.length === n.length &&
            f.contextIds.every((e, t) => e === n[t])
          );
        if (Ce.current) return;
        if (!p) {
          JC(d, u) && pe().onVisibleSelectionChange?.();
          return;
        }
        if (f.value === s && s !== de.current) return;
        A.current = { value: s, cursor: l, expandedCursor: c, contextIds: n };
        let m = e.state.selection.$from.parent.type.spec.code === !0,
          h =
            O ||
            m ||
            [e.state.selection.$from.nodeBefore, e.state.selection.$from.nodeAfter].some(Nw);
        pe().onChange(s, l, c, h, n);
      }),
      (t[31] = O),
      (t[32] = pe),
      (t[33] = Re))
    : (Re = t[33]);
  let ze = Re,
    Be;
  t[34] === b
    ? (Be = t[35])
    : ((Be = se(
        `composer-tiptap -m-1 block max-h-52 min-h-19.5 redesign:min-h-12 overflow-y-auto p-1 whitespace-pre-wrap wrap-break-word bg-transparent leading-relaxed text-foreground focus:outline-none`,
        b,
      )),
      (t[34] = b),
      (t[35] = Be));
  let Ve = k ? `true` : `false`,
    He;
  t[36] === f ? (He = t[37]) : ((He = f ? { "aria-label": f } : {}), (t[36] = f), (t[37] = He));
  let We;
  t[38] === u
    ? (We = t[39])
    : ((We = u ? { "aria-readonly": `true` } : {}), (t[38] = u), (t[39] = We));
  let Ge;
  t[40] !== g || t[41] !== u || t[42] !== m
    ? ((Ge =
        !u && m
          ? {
              "aria-autocomplete": `list`,
              "aria-haspopup": `listbox`,
              ...(g ? { "aria-controls": m, "aria-activedescendant": g } : {}),
            }
          : {}),
      (t[40] = g),
      (t[41] = u),
      (t[42] = m),
      (t[43] = Ge))
    : (Ge = t[43]);
  let Ke;
  t[44] !== d || t[45] !== Be || t[46] !== Ve || t[47] !== He || t[48] !== We || t[49] !== Ge
    ? ((Ke = {
        class: Be,
        "data-testid": `composer-editor`,
        "data-composer-rich-text": Ve,
        role: `textbox`,
        "aria-multiline": `true`,
        ...He,
        ...We,
        ...Ge,
        "aria-placeholder": d,
      }),
      (t[44] = d),
      (t[45] = Be),
      (t[46] = Ve),
      (t[47] = He),
      (t[48] = We),
      (t[49] = Ge),
      (t[50] = Ke))
    : (Ke = t[50]);
  let qe = Ke,
    Xe = k ? Ew : Dw,
    Ze;
  t[51] === l ? (Ze = t[52]) : ((Ze = (e) => rw(l, e)), (t[51] = l), (t[52] = Ze));
  let Qe;
  t[53] !== O || t[54] !== k || t[55] !== Ze || t[56] !== n
    ? ((Qe = fS(n, Ze, { styling: k, literalText: O })),
      (t[53] = O),
      (t[54] = k),
      (t[55] = Ze),
      (t[56] = n),
      (t[57] = Qe))
    : (Qe = t[57]);
  let et = !u,
    tt;
  t[58] !== pe || t[59] !== k
    ? ((tt = (e, t) => {
        let n = yx(e.state) === `rtl` ? `ArrowRight` : `ArrowLeft`,
          r = t.metaKey
            ? t.key === `ArrowLeft` || t.key === `ArrowRight`
              ? `lineboundary`
              : t.key === `ArrowUp` || t.key === `ArrowDown`
                ? `documentboundary`
                : null
            : t.key === `Home` || t.key === `End`
              ? `lineboundary`
              : null;
        if (_(navigator.platform) && r && !t.altKey && !t.ctrlKey && !t.isComposing) {
          let i = window.getSelection();
          if (i?.anchorNode && e.dom.contains(i.anchorNode) && typeof i.modify == `function`) {
            (t.preventDefault(), t.stopPropagation());
            let a = t.key === `Home` || t.key === `ArrowUp` || t.key === n;
            if (
              (i.modify(t.shiftKey ? `extend` : `move`, a ? `backward` : `forward`, r),
              i.anchorNode && i.focusNode)
            ) {
              let t = e.state.tr.setSelection(
                R.create(
                  e.state.doc,
                  e.posAtDOM(i.anchorNode, i.anchorOffset),
                  e.posAtDOM(i.focusNode, i.focusOffset),
                ),
              );
              if (k && t.selection.empty) {
                let { $head: e } = t.selection;
                t.setStoredMarks((a ? e.nodeBefore : e.nodeAfter)?.marks ?? []);
              }
              e.dispatch(t.scrollIntoView());
            }
            return !0;
          }
        }
        if (
          [`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`].includes(t.key) &&
          !t.shiftKey &&
          !t.altKey &&
          !t.metaKey &&
          !t.ctrlKey &&
          !t.isComposing &&
          e.state.selection.empty
        ) {
          let { $from: r } = e.state.selection,
            i = t.key === `ArrowUp` || t.key === n ? -1 : 1,
            a = t.key === `ArrowLeft` || t.key === `ArrowRight`,
            o = r.pos === (i === -1 ? R.atStart(e.state.doc).from : R.atEnd(e.state.doc).to),
            s = a || o ? VS(e.state, i) : null;
          if (s) return (t.preventDefault(), t.stopPropagation(), e.dispatch(s), !0);
          let c = i === -1 ? r.nodeBefore : r.nodeAfter;
          if (a && c?.type.name.startsWith(`composer-`))
            return (
              t.preventDefault(),
              t.stopPropagation(),
              e.dispatch(
                e.state.tr
                  .setSelection(R.create(e.state.doc, r.pos + i * c.nodeSize))
                  .scrollIntoView(),
              ),
              !0
            );
        }
        if (
          t.key === `Tab` &&
          t.shiftKey &&
          !t.altKey &&
          !t.metaKey &&
          !t.ctrlKey &&
          e.state.selection.empty
        ) {
          let { $from: n } = e.state.selection,
            r = n.nodeBefore;
          if (r?.type.name === `composer-citation`) {
            let i = e.nodeDOM(n.pos - r.nodeSize),
              a =
                i instanceof HTMLElement
                  ? i.querySelector(`[data-citation-comment-trigger]`)
                  : null;
            if (a) return (t.preventDefault(), t.stopPropagation(), a.focus(), !0);
          }
        }
        if (t.key === `Enter` && (t.isComposing || t.keyCode === 229))
          return (t.stopPropagation(), !0);
        if (t.key === `Enter` && t.target instanceof HTMLInputElement)
          return (t.preventDefault(), !0);
        if (t.key === `Tab` && !t.metaKey && !t.ctrlKey && KS(e.state))
          return (
            t.preventDefault(),
            t.stopPropagation(),
            ZS(e.state, t.shiftKey ? `out` : `in`, (t) => e.dispatch(t))
          );
        if (t.key === `Enter` && k && !t.metaKey && !t.ctrlKey && !t.isComposing) {
          if (KS(e.state)) {
            (t.preventDefault(), t.stopPropagation());
            let n = (t) => e.dispatch(t.scrollIntoView());
            return XS(e.state, n) || YS(e) || JS(e.state, n) || Hi(e.state, n);
          }
          if (QS(e.state, (t) => e.dispatch(t)))
            return (t.preventDefault(), t.stopPropagation(), !0);
        }
        let i = pe().onCommandKeyDown;
        if (t.key === `Enter`) {
          let n = e.dom.editor,
            r = k && (n?.isActive(`taskItem`) ?? !1),
            a = k && (n?.isActive(`listItem`) ?? !1);
          return (i?.(`Enter`, t, r || a) ?? !1)
            ? (t.preventDefault(), t.stopPropagation(), !0)
            : (t.preventDefault(),
              ((r || a) && n && SS(n)) ||
              (k &&
                n &&
                pw(e.state.selection.$from, `blockquote`) &&
                e.state.selection.$from.parent.content.size === 0 &&
                n.commands.lift(`blockquote`))
                ? !0
                : Yi(e.state, (t) => {
                    e.dispatch(t.scrollIntoView());
                  }));
        }
        if (!i) return !1;
        let a = i(t.key, t);
        return (a && (t.preventDefault(), t.stopPropagation()), a);
      }),
      (t[58] = pe),
      (t[59] = k),
      (t[60] = tt))
    : (tt = t[60]);
  let at;
  t[61] === O
    ? (at = t[62])
    : ((at = (e, t, n, r) => {
        if (O || e.composing || r.length !== 1) return !1;
        let i = ZC[r],
          { selection: a } = e.state;
        if (!i || !(a instanceof R) || a.empty || a.from !== t || a.to !== n) return !1;
        let o = !1;
        if (
          (e.state.doc.nodesBetween(t, n, (e) =>
            (e.isAtom && e.isInline && !e.isText) || (e.isText && e.marks.length > 0)
              ? ((o = !0), !1)
              : !0,
          ),
          o)
        )
          return !1;
        let s = MS(e.state.doc),
          c = FS(s, RS(s, t)),
          l = FS(s, RS(s, n));
        if (nt(s.value, c, l)) return !1;
        let u = e.state.tr.insertText(i, n).insertText(r, t);
        return (u.setSelection(R.create(u.doc, t + r.length, n + r.length)), e.dispatch(u), !0);
      }),
      (t[61] = O),
      (t[62] = at));
  let ct;
  t[63] !== O || t[64] !== pe || t[65] !== k || t[66] !== he
    ? ((ct = (e, t) => {
        let n = t.clipboardData;
        if (!n || n.files.length > 0) return !1;
        let r = n.getData(`text/plain`);
        if (!r) return !1;
        if ((t.preventDefault(), _w(e))) {
          let { from: t, to: n } = e.state.selection;
          return (e.dispatch(eC(e.state.tr.insertText(r, t, n), `paste`).scrollIntoView()), !0);
        }
        let i = pe().importContextFragment,
          a = !O && i ? qC(n, i) : r,
          o = O ? [] : $e(`${a}\n`),
          s = (e) => e?.type === `mention` || (e?.type === `skill` && he(e.value) !== null),
          c = o.at(-1);
        if ((s(c) && c?.end === a.length && (a += ` `), s(o[0]) && o[0]?.start === 0)) {
          let t = MS(e.state.doc),
            n = FS(t, RS(t, e.state.selection.from));
          n > 0 && !/\s/.test(t.value[n - 1]) && (a = ` ${a}`);
        }
        let { $from: l } = e.state.selection,
          u = l.parent.textBetween(0, l.parentOffset, void 0, `￼`),
          d = O ? 0 : st(u, a, pe().isPathQueryActive?.()),
          f = e.dom.editor;
        if (f) {
          let t = e.state.selection.$from,
            n = [`listItem`, `taskItem`, `blockquote`].some((e) => pw(t, e));
          (Fw(a, he, { styling: k, blocks: !n, literalText: O, literalLength: d }, (e) => {
            f.chain().command(Mw).insertContent(e).command(jw).run();
          }),
            Iw(f));
        }
        return !0;
      }),
      (t[63] = O),
      (t[64] = pe),
      (t[65] = k),
      (t[66] = he),
      (t[67] = ct))
    : (ct = t[67]);
  let lt;
  t[68] !== qe || t[69] !== tt || t[70] !== at || t[71] !== ct
    ? ((lt = { attributes: qe, handleKeyDown: tt, handleTextInput: at, handlePaste: ct }),
      (t[68] = qe),
      (t[69] = tt),
      (t[70] = at),
      (t[71] = ct),
      (t[72] = lt))
    : (lt = t[72]);
  let ut;
  t[73] !== ze || t[74] !== O || t[75] !== he
    ? ((ut = (e) => {
        let { editor: t, transaction: n } = e;
        if (!O && Bb(n)) {
          let e = NS(t.state.doc, he).filter(Aw);
          if (e.length > 0) {
            Sw(t, e);
            return;
          }
        }
        ze(t);
      }),
      (t[73] = ze),
      (t[74] = O),
      (t[75] = he),
      (t[76] = ut))
    : (ut = t[76]);
  let dt;
  t[77] === ze
    ? (dt = t[78])
    : ((dt = (e) => {
        let { editor: t } = e;
        ze(t);
      }),
      (t[77] = ze),
      (t[78] = dt));
  let ft;
  t[79] !== Xe || t[80] !== Qe || t[81] !== et || t[82] !== lt || t[83] !== ut || t[84] !== dt
    ? ((ft = {
        extensions: Xe,
        content: Qe,
        editable: et,
        editorProps: lt,
        onUpdate: ut,
        onSelectionUpdate: dt,
      }),
      (t[79] = Xe),
      (t[80] = Qe),
      (t[81] = et),
      (t[82] = lt),
      (t[83] = ut),
      (t[84] = dt),
      (t[85] = ft))
    : (ft = t[85]);
  let pt;
  t[86] === Symbol.for(`react.memo_cache_sentinel`) ? ((pt = []), (t[86] = pt)) : (pt = t[86]);
  let M = xh(ft, pt),
    mt,
    ht;
  (t[87] !== u || t[88] !== M
    ? ((mt = () => {
        M?.setEditable(!u);
      }),
      (ht = [u, M]),
      (t[87] = u),
      (t[88] = M),
      (t[89] = mt),
      (t[90] = ht))
    : ((mt = t[89]), (ht = t[90])),
    (0, J.useEffect)(mt, ht));
  let gt, _t;
  (t[91] !== M || t[92] !== qe
    ? ((gt = () => {
        M?.isInitialized && M.view.setProps({ attributes: qe });
      }),
      (_t = [M, qe]),
      (t[91] = M),
      (t[92] = qe),
      (t[93] = gt),
      (t[94] = _t))
    : ((gt = t[93]), (_t = t[94])),
    (0, J.useLayoutEffect)(gt, _t));
  let vt;
  t[95] !== M || t[96] !== O
    ? ((vt = () => {
        let e = A.current;
        if (!M) return e;
        let t = MS(M.state.doc),
          { from: n, to: r } = M.state.selection,
          i = RS(t, n),
          a = Math.max(0, Math.min(t.value.length, FS(t, i))),
          o = {
            value: t.value,
            cursor: it(t.value, a, O),
            expandedCursor: a,
            contextIds: O ? [] : t.contextIds,
          },
          s = RS(t, r);
        return (
          (Se.current = {
            start: Math.min(o.expandedCursor, FS(t, s)),
            end: Math.max(o.expandedCursor, FS(t, s)),
          }),
          (A.current = o),
          o
        );
      }),
      (t[95] = M),
      (t[96] = O),
      (t[97] = vt))
    : (vt = t[97]);
  let yt = vt,
    bt;
  t[98] === te
    ? (bt = t[99])
    : ((bt = (e, t) => {
        let n = ke.current;
        if (((ke.current = null), !n || !te)) return;
        let [r] = bd(
          e.state.doc,
          (e) => e.type.name === `composer-citation` && e.attrs.citeKey === n.key,
        );
        if (!r) return;
        let { node: i, pos: a } = r,
          o = i.attrs.citation,
          s = Oe({ reason: `none`, draft: n.comment, savedComment: o.comment });
        if (s.kind !== `commit`) return;
        let c = Je(o, s.comment);
        (e.view.dispatch(
          e.state.tr
            .setNodeMarkup(a, void 0, { ...i.attrs, citation: c, source: Ye(c) })
            .setMeta(`addToHistory`, !1),
        ),
          te(t, MS(e.state.doc).value));
      }),
      (t[98] = te),
      (t[99] = bt));
  let N = (0, J.useEffectEvent)(bt),
    xt;
  t[100] !== ce ||
  t[101] !== r ||
  t[102] !== M ||
  t[103] !== ue ||
  t[104] !== ve ||
  t[105] !== O ||
  t[106] !== k ||
  t[107] !== N ||
  t[108] !== he ||
  t[109] !== n
    ? ((xt = () => {
        if (((de.current = n), !M)) return;
        let e = !we.current;
        we.current = !0;
        let t = ce(n, r),
          i = A.current;
        if (!e && i.value === n && i.cursor === t) return;
        let a = e ? ve : ue(n, t);
        ((A.current = { value: n, cursor: t, expandedCursor: a, contextIds: ne(n) }),
          (Se.current = { start: a, end: a }),
          je(n.length === 0));
        let o = M.view.dom,
          s = !!(o && document.activeElement === o);
        if (!e && i.value === n && !s) return;
        Ce.current = !0;
        let c = Te.current?.value === n ? Te.current : null;
        i.value !== n &&
          (N(M, i.value),
          M.commands.setContent(fS(n, he, { styling: k, literalText: O }), { emitUpdate: !1 }));
        let l = MS(M.state.doc),
          u = IS(l, a);
        if ((M.commands.setTextSelection(LS(l, u)), s && Iw(M), c)) {
          Te.current = null;
          let e = l.runs.find(
            (e) =>
              e.kind === `token` &&
              e.nodeName === `composer-citation` &&
              e.mdStart === c.citationStart,
          );
          if (e) {
            let t = M.state.doc.nodeAt(e.pmPos)?.attrs?.citeKey;
            t && De({ key: t, sourceAnchor: c.sourceAnchor, removeOnCancel: c.insertedSpaces });
          }
        }
        queueMicrotask(() => {
          Ce.current = !1;
        });
      }),
      (t[100] = ce),
      (t[101] = r),
      (t[102] = M),
      (t[103] = ue),
      (t[104] = ve),
      (t[105] = O),
      (t[106] = k),
      (t[107] = N),
      (t[108] = he),
      (t[109] = n),
      (t[110] = xt))
    : (xt = t[110]);
  let St;
  (t[111] !== ce ||
  t[112] !== r ||
  t[113] !== M ||
  t[114] !== ue ||
  t[115] !== ve ||
  t[116] !== O ||
  t[117] !== k ||
  t[118] !== he ||
  t[119] !== n
    ? ((St = [ce, r, M, ue, ve, O, k, he, n]),
      (t[111] = ce),
      (t[112] = r),
      (t[113] = M),
      (t[114] = ue),
      (t[115] = ve),
      (t[116] = O),
      (t[117] = k),
      (t[118] = he),
      (t[119] = n),
      (t[120] = St))
    : (St = t[120]),
    (0, J.useLayoutEffect)(xt, St));
  let Ct, wt;
  (t[121] !== M || t[122] !== O || t[123] !== l
    ? ((Ct = () => {
        if (!M || O) return;
        let e = NS(M.state.doc, (e) => rw(l, e));
        e.length > 0 && Sw(M, e);
      }),
      (wt = [M, O, l]),
      (t[121] = M),
      (t[122] = O),
      (t[123] = l),
      (t[124] = Ct),
      (t[125] = wt))
    : ((Ct = t[124]), (wt = t[125])),
    (0, J.useEffect)(Ct, wt));
  let P, Tt;
  (t[126] !== M || t[127] !== ae
    ? ((P = () => {
        if (M)
          return (
            ae.current && ((ae.current = !1), M.view.focus(), Iw(M)),
            () => {
              ae.current = M.view.hasFocus();
            }
          );
      }),
      (Tt = [M, ae]),
      (t[126] = M),
      (t[127] = ae),
      (t[128] = P),
      (t[129] = Tt))
    : ((P = t[128]), (Tt = t[129])),
    (0, J.useLayoutEffect)(P, Tt));
  let Et;
  t[130] !== ce || t[131] !== M || t[132] !== ue || t[133] !== O || t[134] !== pe
    ? ((Et = (e, t) => {
        if (!M || (M.view.focus(), A.current.value !== de.current)) return;
        let n = ce(A.current.value, e),
          r = t ?? ue(A.current.value, n),
          i = MS(M.state.doc);
        (M.commands.setTextSelection(LS(i, IS(i, r))),
          Iw(M),
          n !== A.current.cursor &&
            ((A.current = {
              value: A.current.value,
              cursor: n,
              expandedCursor: r,
              contextIds: A.current.contextIds,
            }),
            (Se.current = { start: A.current.expandedCursor, end: A.current.expandedCursor }),
            pe().onChange(A.current.value, n, A.current.expandedCursor, O, A.current.contextIds)));
      }),
      (t[130] = ce),
      (t[131] = M),
      (t[132] = ue),
      (t[133] = O),
      (t[134] = pe),
      (t[135] = Et))
    : (Et = t[135]);
  let Dt = Et,
    F,
    Ot;
  (t[136] !== M || t[137] !== Dt || t[138] !== O || t[139] !== yt
    ? ((F = () => ({
        focus: () => {
          Dt(A.current.cursor, A.current.expandedCursor);
        },
        focusAt: (e) => Dt(e),
        focusAtEnd: () => {
          Dt(O ? A.current.value.length : it(A.current.value, A.current.value.length));
        },
        readSelectionRange: () => (yt(), Se.current),
        requestCitationComment: (e) => {
          if (((Te.current = e), !M)) return;
          let t = MS(M.state.doc);
          if (t.value !== e.value) return;
          let n = t.runs.find(
            (t) =>
              t.kind === `token` &&
              t.nodeName === `composer-citation` &&
              t.mdStart === e.citationStart,
          );
          if (!n) return;
          let r = M.state.doc.nodeAt(n.pmPos)?.attrs?.citeKey;
          r &&
            ((Te.current = null),
            De({ key: r, sourceAnchor: e.sourceAnchor, removeOnCancel: e.insertedSpaces }));
        },
        readSnapshot: yt,
        isCaretOnVisualEdge: (e) => {
          let t = yt();
          if (t.value.length === 0) return !0;
          let n = t.value.slice(0, t.expandedCursor),
            r = t.value.slice(t.expandedCursor);
          if (
            e === `start`
              ? n.includes(`
`)
              : r.includes(`
`)
          )
            return !1;
          let i = M?.view.dom,
            a = window.getSelection();
          if (
            !i ||
            !a ||
            !a.isCollapsed ||
            a.rangeCount === 0 ||
            !a.anchorNode ||
            !i.contains(a.anchorNode)
          )
            return !1;
          let o = Lw(a.getRangeAt(0), e);
          if (!o) return !1;
          let s = (
              (e === `start` ? i.firstElementChild : i.lastElementChild) ?? i
            ).getBoundingClientRect(),
            c = o.height / 2;
          return e === `start` ? o.top - s.top < c : s.bottom - o.bottom < c;
        },
      })),
      (Ot = [M, Dt, O, yt]),
      (t[136] = M),
      (t[137] = Dt),
      (t[138] = O),
      (t[139] = yt),
      (t[140] = F),
      (t[141] = Ot))
    : ((F = t[140]), (Ot = t[141])),
    (0, J.useImperativeHandle)(ie, F, Ot));
  let I;
  t[142] !== s || t[143] !== M || t[144] !== O
    ? ((I = (e, t) => {
        let n = s;
        if (!M || (t && !M.isEditable)) return;
        let r = e.clipboardData,
          { from: i, to: a } = M.state.selection;
        if (i === a) return;
        let o = jS(M.state.doc, i, a),
          c = O ? [] : Array.from(new Set(ne(o))),
          l = c.length > 0 ? n?.(c) : null;
        (e.preventDefault(),
          r.setData(`text/plain`, o),
          l && (r.setData(h, l), r.setData(`text/html`, p(o, l))),
          t && M.chain().focus().command(kw).deleteSelection().run());
      }),
      (t[142] = s),
      (t[143] = M),
      (t[144] = O),
      (t[145] = I))
    : (I = t[145]);
  let kt = I,
    At;
  t[146] === y
    ? (At = t[147])
    : ((At = se(
        `relative flow-root font-(family-name:--font-composer,var(--font-sans)) text-(length:--font-size-prompt,var(--text-sm)) max-sm:pointer-coarse:text-(length:--font-size-prompt-touch)`,
        y,
      )),
      (t[146] = y),
      (t[147] = At));
  let jt;
  t[148] !== T || t[149] !== D
    ? ((jt = (e) => {
        if (
          ((e.key === `Control` || e.key === `Meta` || e.key === `Alt` || e.key === `Shift`) &&
            D?.(),
          e.key !== `PageUp` && e.key !== `PageDown`)
        )
          return;
        let t = e.currentTarget.querySelector(`[data-testid="composer-editor"]`);
        if (!t) return;
        let n = Ue({
          altKey: e.altKey,
          clientHeight: t.clientHeight,
          ctrlKey: e.ctrlKey,
          defaultPrevented: e.defaultPrevented,
          isComposing: e.nativeEvent.isComposing,
          key: e.key,
          keyCode: e.keyCode,
          metaKey: e.metaKey,
          scrollHeight: t.scrollHeight,
          scrollTop: t.scrollTop,
          shiftKey: e.shiftKey,
        });
        n ? T && (e.preventDefault(), T(n)) : D?.();
      }),
      (t[148] = T),
      (t[149] = D),
      (t[150] = jt))
    : (jt = t[150]);
  let Mt;
  t[151] === E ? (Mt = t[152]) : ((Mt = (e) => E?.(e.key)), (t[151] = E), (t[152] = Mt));
  let Nt, Pt;
  t[153] === kt
    ? ((Nt = t[154]), (Pt = t[155]))
    : ((Nt = (e) => kt(e, !1)),
      (Pt = (e) => kt(e, !0)),
      (t[153] = kt),
      (t[154] = Nt),
      (t[155] = Pt));
  let Ft;
  t[156] !== M ||
  t[157] !== D ||
  t[158] !== re ||
  t[159] !== jt ||
  t[160] !== Mt ||
  t[161] !== Nt ||
  t[162] !== Pt
    ? ((Ft = (0, Y.jsx)(mh, {
        editor: M,
        onKeyDown: jt,
        onKeyUp: Mt,
        onBlur: D,
        onPasteCapture: re,
        onCopyCapture: Nt,
        onCutCapture: Pt,
      })),
      (t[156] = M),
      (t[157] = D),
      (t[158] = re),
      (t[159] = jt),
      (t[160] = Mt),
      (t[161] = Nt),
      (t[162] = Pt),
      (t[163] = Ft))
    : (Ft = t[163]);
  let It;
  t[164] !== o || t[165] !== Ae || t[166] !== d || t[167] !== x
    ? ((It =
        Ae && o.size === 0 && d
          ? (0, Y.jsx)(`div`, {
              className: se(
                `pointer-events-none absolute inset-0 leading-relaxed text-placeholder`,
                x,
              ),
              children: d,
            })
          : null),
      (t[164] = o),
      (t[165] = Ae),
      (t[166] = d),
      (t[167] = x),
      (t[168] = It))
    : (It = t[168]);
  let Lt;
  t[169] !== At || t[170] !== Ft || t[171] !== It
    ? ((Lt = (0, Y.jsxs)(`div`, { className: At, children: [Ft, It] })),
      (t[169] = At),
      (t[170] = Ft),
      (t[171] = It),
      (t[172] = Lt))
    : (Lt = t[172]);
  let Rt;
  t[173] !== Le || t[174] !== Lt
    ? ((Rt = (0, Y.jsx)(YC, { value: Le, children: Lt })),
      (t[173] = Le),
      (t[174] = Lt),
      (t[175] = Rt))
    : (Rt = t[175]);
  let zt;
  t[176] !== o || t[177] !== Rt
    ? ((zt = (0, Y.jsx)(lC, { value: o, children: Rt })),
      (t[176] = o),
      (t[177] = Rt),
      (t[178] = zt))
    : (zt = t[178]);
  let Bt;
  return (
    t[179] !== l || t[180] !== zt
      ? ((Bt = (0, Y.jsx)(XC, { value: l, children: zt })),
        (t[179] = l),
        (t[180] = zt),
        (t[181] = Bt))
      : (Bt = t[181]),
    Bt
  );
}
function kw(e) {
  let { tr: t } = e;
  return (eC(t, `cut`), !0);
}
function Aw(e) {
  let { node: t } = e;
  return t.isText;
}
function jw(e) {
  let { tr: t } = e,
    { selection: n } = t;
  return (
    !(n instanceof z) ||
      !n.node.isBlock ||
      (t.doc.resolve(n.to).nodeAfter?.isTextblock ||
        t.insert(n.to, t.doc.type.schema.nodes.paragraph.create()),
      t.setSelection(R.create(t.doc, n.to + 1))),
    !0
  );
}
function Mw(e) {
  let { tr: t } = e;
  return (eC(t, `paste`), !0);
}
function Nw(e) {
  return e?.isInline && e.isAtom && !e.isText && e.type.name !== `hardBreak`;
}
function Pw() {}
function Fw(e, t, n, r) {
  let i = dS(e, t, n);
  if (i.length === 1 && i[0]?.type === `paragraph`) {
    let e = i[0]?.content ?? [];
    if (e.length === 0) return;
    r(e);
  } else r(i);
}
function Iw(e) {
  e.view.dispatch(e.state.tr.scrollIntoView());
}
function Lw(e, t) {
  let n = Array.from(e.getClientRects()).filter((e) => e.height > 0),
    r = t === `start` ? n.at(-1) : n[0];
  if (r) return r;
  let i = e.startContainer;
  if (i.nodeType === 3) {
    let n = i;
    if (n.data.length === 0) return null;
    let r = Math.max(
        0,
        Math.min(t === `start` ? e.startOffset : e.startOffset - 1, n.data.length - 1),
      ),
      a = document.createRange();
    (a.setStart(n, r), a.setEnd(n, r + 1));
    let o = Array.from(a.getClientRects()).find((e) => e.height > 0);
    if (o) return o;
    let s = a.getBoundingClientRect();
    return s.height > 0 ? s : null;
  }
  if (!(i instanceof HTMLElement)) return null;
  let a = i.childNodes[Math.max(0, e.startOffset - 1)] ?? i.childNodes[e.startOffset];
  if (a instanceof HTMLElement) {
    let e = a.getBoundingClientRect();
    if (e.height > 0) return e;
  } else if (a instanceof Text && a.data.length > 0) {
    let t = a === i.childNodes[e.startOffset - 1] ? a.data.length - 1 : 0,
      n = document.createRange();
    (n.setStart(a, t), n.setEnd(a, t + 1));
    let r = Array.from(n.getClientRects()).find((e) => e.height > 0);
    if (r) return r;
  }
  let o = i.getBoundingClientRect();
  return o.height > 0 ? o : null;
}
function Rw(e) {
  let t = (0, j.c)(2),
    n;
  return (t[0] === e ? (n = t[1]) : ((n = (0, Y.jsx)(Cw, { ...e })), (t[0] = e), (t[1] = n)), n);
}
var zw = `Ask anything. @ files, $ skills, / commands`;
export {
  gt as _,
  oC as a,
  _t as b,
  cC as c,
  kx as d,
  Ax as f,
  ht as g,
  pt as h,
  KC as i,
  rC as l,
  ft as m,
  Rw as n,
  sC as o,
  ut as p,
  qC as r,
  uC as s,
  zw as t,
  iC as u,
  dt as v,
  vt as x,
  M as y,
};
//# sourceMappingURL=composerPlaceholder-CqCEcO-V.js.map
