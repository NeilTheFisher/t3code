import { T_ as e, U_ as t } from "./utils-CPoejuy5.js";
function n(n) {
  if (n.hasSessionError)
    return {
      canReadDiagnostics: !1,
      isPending: !1,
      error: `Could not check this connection's access to diagnostics and usage.`,
    };
  if (n.session === null) {
    let e =
      n.connectionPhase === `connected` ||
      n.connectionPhase === `connecting` ||
      n.connectionPhase === `reconnecting`;
    return {
      canReadDiagnostics: !1,
      isPending: e,
      error: e ? null : `This environment is not connected.`,
    };
  }
  let r = t(n.session, e);
  return {
    canReadDiagnostics: r,
    isPending: !1,
    error: r ? null : `This connection does not have access to diagnostics and usage.`,
  };
}
export { n as t };
//# sourceMappingURL=usageAccess-Du6DzPyC.js.map
