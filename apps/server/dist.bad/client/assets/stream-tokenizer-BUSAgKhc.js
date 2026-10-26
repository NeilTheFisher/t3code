import { i as e, n as t } from "./appendItems-C5MDJzmY.js";
import { Cc as n, Sc as r, xc as i } from "./main-BZa0O6xN.js";
function a(n, r, i, a = !1) {
  let o = [0];
  if (i.decorations?.some((e) => typeof e.start == `number` || typeof e.end == `number`) === !0)
    for (
      let e = n.indexOf(`
`);
      e !== -1;
      e = n.indexOf(
        `
`,
        e + 1,
      )
    )
      o.push(e + 1);
  let s = { type: `element`, tagName: `code`, properties: {}, children: [] },
    c = t(r.tokens, {
      decorations: i.decorations,
      mergeWhitespaces: i.mergeWhitespaces,
      lineOffsets: o,
      cacheHtmlStyles: a,
    });
  for (let e = 0; e < c.length; e++)
    (e > 0 &&
      s.children.push({
        type: `text`,
        value: `
`,
      }),
      s.children.push(c[e]));
  let l = {
    type: `root`,
    children: [
      {
        type: `element`,
        tagName: `pre`,
        properties: {
          class: `diffs`,
          style:
            r.rootStyle === !1
              ? void 0
              : (r.rootStyle ??
                [
                  r.fg == null ? `` : `color:${r.fg}`,
                  r.bg == null ? `` : `background-color:${r.bg}`,
                ]
                  .filter(Boolean)
                  .join(`;`)),
          tabIndex: 0,
        },
        children: [s],
      },
    ],
  };
  return e(l);
}
var o = class {
    name;
    themeResolver;
    disposed = !1;
    constructor(e, t) {
      ((this.name = e), (this.themeResolver = t), r(e));
    }
    codeToHtml(e, t) {
      return a(e, this.codeToTokens(e, t), t, this.name === `highlights`);
    }
    get isDisposed() {
      return this.disposed;
    }
    dispose() {
      this.disposed || ((this.disposed = !0), this.releaseResources(), n());
    }
    assertNotDisposed() {
      if (this.disposed) throw new i();
    }
  },
  s = class {
    disposed = !1;
    stableOffset = 0;
    unstable = [];
    pendingCarriageReturn = ``;
    enqueue(e) {
      (this.assertActive(),
        (e = this.pendingCarriageReturn + e),
        (this.pendingCarriageReturn = e.endsWith(`\r`) ? `\r` : ``),
        this.pendingCarriageReturn !== `` && (e = e.slice(0, -1)));
      let t = this.unstable.length,
        n = [],
        { unstable: r, tailLength: i } = this.tokenizeChunk(e, n);
      return (
        this.pendingCarriageReturn !== `` &&
          r.push({ content: `\r`, offset: this.stableOffset + i }),
        (this.unstable = r),
        { recall: t, stable: n, unstable: r }
      );
    }
    pushLineBreak(e, t, n) {
      for (let r = 0; r < n.length; r++)
        e.push({ content: n[r], offset: this.stableOffset + t + r });
      this.stableOffset += t + n.length;
    }
    close() {
      let e = this.unstable;
      return (this.dispose(), { stable: e });
    }
    clear() {
      (this.assertActive(),
        (this.stableOffset = 0),
        (this.unstable = []),
        (this.pendingCarriageReturn = ``),
        this.resetSource());
    }
    dispose() {
      this.disposed || ((this.disposed = !0), (this.unstable = []), this.releaseSource());
    }
    copyStateTo(e) {
      ((e.stableOffset = this.stableOffset),
        (e.unstable = this.unstable.slice()),
        (e.pendingCarriageReturn = this.pendingCarriageReturn));
    }
    assertActive() {
      if (this.disposed) throw Error(`stream tokenizer is disposed`);
    }
  };
export { o as n, s as t };
//# sourceMappingURL=stream-tokenizer-BUSAgKhc.js.map
