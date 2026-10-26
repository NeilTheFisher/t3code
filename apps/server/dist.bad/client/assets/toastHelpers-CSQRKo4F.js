function e(e) {
  let {
      type: t,
      title: n,
      description: r,
      timeout: i,
      priority: a,
      actionProps: o,
      actionVariant: s,
      data: c,
    } = e,
    l = { ...(c === void 0 ? {} : c), actionLayout: `stacked-end` };
  s !== void 0 && (l.actionVariant = s);
  let u = { type: t, title: n, data: l };
  return (
    r !== void 0 && (u.description = r),
    i !== void 0 && (u.timeout = i),
    a !== void 0 && (u.priority = a),
    o !== void 0 && (u.actionProps = o),
    u
  );
}
export { e as t };
//# sourceMappingURL=toastHelpers-CSQRKo4F.js.map
