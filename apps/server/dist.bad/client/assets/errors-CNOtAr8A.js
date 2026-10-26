import { ab as e, ff as t, nm as n, pf as r } from "./utils-CPoejuy5.js";
var i = e(n);
function a(e) {
  return i(e) && e.bootstrapThreadDisposition === `deleted`;
}
function o(e) {
  return i(e) && e.bootstrapThreadDisposition === `not-created`;
}
var s = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`),
  c = [
    /\bSocketCloseError\b/i,
    /\bSocketOpenError\b/i,
    /\bSocket is not connected\b/i,
    /Unable to connect to the T3 server WebSocket\./i,
    RegExp(
      `\\b(?:is not connected|disconnected|stopped responding|could not establish a WebSocket connection)\\.(?: ${s(t)})?$`,
      `i`,
    ),
    RegExp(`\\bstopped responding for \\d+s\\. ${s(r)}$`, `i`),
    /\bClientProtocolError\b/i,
    /\bRpcClientError\b/i,
    /\bping timeout\b/i,
  ];
function l(e) {
  if (typeof e != `string`) return !1;
  let t = e.trim();
  return t.length !== 0 && c.some((e) => e.test(t));
}
function u(e) {
  return l(e) ? null : (e ?? null);
}
export { a as n, o as r, u as t };
//# sourceMappingURL=errors-CNOtAr8A.js.map
