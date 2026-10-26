import {
  $f as e,
  AS as t,
  Sc as n,
  Zl as r,
  bC as i,
  bc as a,
  jS as o,
  uc as s,
  vc as c,
  xc as l,
} from "./utils-CPoejuy5.js";
import { l as u, o as d } from "./rightPanelStore-DEayojei.js";
import { t as f } from "./mediaReference-CNOhBe6n.js";
import { f as p } from "./assets-C17tnlzf.js";
import "./assetUrls-D6noVjB5.js";
import { C as m, S as h, c as g, d as _, s as v } from "./browserHistoryStore-heVS6T5j.js";
var y = (e) => /\.(?:html?|pdf)$/i.test(e.split(/[?#]/, 1)[0] ?? ``),
  b = class extends i(`BrowserPreviewUnavailableError`) {},
  x = class extends i(`BrowserSettingsReadError`) {
    get message() {
      return `Saved browser settings could not be loaded.`;
    }
  };
async function S(t) {
  let i = await _().catch((e) => new x({ cause: e }));
  if (i instanceof x) return e(o(i));
  let f = m(t.threadRef.environmentId),
    p = c(t.threadRef).activeTabId,
    h = () => d(u.getState().byThreadKey, t.threadRef)?.id ?? null,
    y = h(),
    b = await t.openPreview({
      environmentId: t.threadRef.environmentId,
      input: {
        threadId: t.threadRef.threadId,
        url: t.url,
        viewport: g(i),
        profileId: t.profileId ?? v(i),
        ...(f === void 0 ? {} : { runtime: f }),
      },
    });
  return r(b, (e) => {
    (a(t.threadRef, t.url),
      t.background
        ? (n(t.threadRef, e),
          p && c(t.threadRef).activeTabId === e.tabId && h() === y && l(t.threadRef, p))
        : (s(t.threadRef, e), u.getState().openBrowser(t.threadRef, e.tabId)));
  });
}
async function C(n) {
  if (!h(n.threadRef.environmentId))
    return e(o(new b({ message: `The integrated browser is unavailable in this runtime.` })));
  let r = f(n.filePath, n.workspaceRoot).relativePath !== void 0,
    i = await n.createAssetUrl({
      environmentId: n.threadRef.environmentId,
      input: {
        resource: {
          _tag: r ? `workspace-file` : `media-file`,
          threadId: n.threadRef.threadId,
          path: n.filePath,
        },
      },
    });
  if (i._tag === `Failure`) return e(i.cause);
  let a = p(n.httpBaseUrl, i.value.relativeUrl);
  return a === null
    ? e(t(Error(`The environment returned an invalid asset URL.`)))
    : S({ threadRef: n.threadRef, url: a, openPreview: n.openPreview });
}
export { S as a, C as i, x as n, y as r, b as t };
//# sourceMappingURL=openFileInPreview-CSVdCknG.js.map
