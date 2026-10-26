var e = (e, t) => {
  let n = Object.entries(t.query);
  return n.length === 0
    ? e
    : `${e}${e.includes(`?`) ? `&` : `?`}${new URLSearchParams(n).toString()}`;
};
export { e as t };
//# sourceMappingURL=hubAccess-CsZ8CNmg.js.map
