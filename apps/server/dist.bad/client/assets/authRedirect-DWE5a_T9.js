function e(e, t) {
  if (t) {
    let t = new URL(e);
    return (
      (t.pathname = `/`),
      (t.search = ``),
      { forceRedirectUrl: t.toString(), signUpForceRedirectUrl: t.toString() }
    );
  }
  return { forceRedirectUrl: e, signUpForceRedirectUrl: e };
}
export { e as t };
//# sourceMappingURL=authRedirect-DWE5a_T9.js.map
