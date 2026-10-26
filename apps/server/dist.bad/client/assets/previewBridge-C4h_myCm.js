import { Hp as e, QC as t, eb as n } from "./utils-CPoejuy5.js";
var r = n(e);
function i(e) {
  let n = r(e);
  if (t(n)) throw n.value;
  return e;
}
var a = typeof window > `u` ? null : (window.desktopBridge?.preview ?? null),
  o = a
    ? {
        ...a,
        captureScreenshot: async (e) => i(await a.captureScreenshot(e)),
        recording: {
          ...a.recording,
          startScreencast: async (e) => i(await a.recording.startScreencast(e)),
        },
      }
    : null;
export { o as t };
//# sourceMappingURL=previewBridge-C4h_myCm.js.map
