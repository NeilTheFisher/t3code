#!/usr/bin/env node

import {
  L as fail,
  Pn as void_,
  fn as succeed,
  g as callback,
  gn as sync,
  wn as timeoutOrElse,
} from "./Effect-JLyBLa-C.mjs";
import {
  B as String,
  H as Struct,
  Kt as isPattern,
  O as NonEmptyString,
  S as Literal,
  W as TaggedError,
} from "./Schema-CNU5AVWm.mjs";
// src/provider/CodexManagedTokenProtocol.ts
const Request = Struct({
  version: Literal(1),
  instanceId: NonEmptyString,
  environmentId: NonEmptyString,
  profileKey: String.check(isPattern(/^[a-f0-9]{64}$/u)),
});
const Response = Struct({ token: NonEmptyString });
const REQUEST_BYTES = 1024;
const RESPONSE_BYTES = 65536;
const SOCKET_IDLE_MS = 5e3;
const COMMAND_TIMEOUT_MS = 8e4;
var ProtocolError = class extends TaggedError()("ManagedTokenProtocolError", {}) {
  get message() {
    return "The managed token frame was invalid or incomplete.";
  }
};
const readFrame = (socket, maxBytes, timeoutMs) =>
  callback((resume) => {
    let bytes = Buffer.alloc(0);
    const fail$1 = () => resume(fail(new ProtocolError()));
    const onData = (chunk) => {
      if (bytes.length + chunk.length > maxBytes) return fail$1();
      bytes = Buffer.concat([bytes, chunk]);
      const end = bytes.indexOf(10);
      if (end < 0) return;
      if (end !== bytes.length - 1) return fail$1();
      resume(succeed(bytes.subarray(0, end).toString("utf8")));
    };
    socket.on("data", onData);
    socket.once("error", fail$1);
    socket.once("close", fail$1);
    socket.once("end", fail$1);
    return sync(() => {
      socket.off("data", onData);
      socket.off("error", fail$1);
      socket.off("close", fail$1);
      socket.off("end", fail$1);
    });
  }).pipe(
    timeoutOrElse({
      duration: timeoutMs,
      orElse: () => fail(new ProtocolError()),
    }),
  );
const writeFrame = (socket, frame, maxBytes) =>
  callback((resume) => {
    if (socket.destroyed || Buffer.byteLength(frame) + 1 > maxBytes) {
      resume(fail(new ProtocolError()));
      return;
    }
    const fail$2 = () => resume(fail(new ProtocolError()));
    socket.once("error", fail$2);
    socket.once("close", fail$2);
    socket.end(`${frame}\n`, () => resume(void_));
    return sync(() => {
      socket.off("error", fail$2);
      socket.off("close", fail$2);
    });
  }).pipe(
    timeoutOrElse({
      duration: SOCKET_IDLE_MS,
      orElse: () => fail(new ProtocolError()),
    }),
  );
export {
  Response as a,
  writeFrame as c,
  Request as i,
  REQUEST_BYTES as n,
  SOCKET_IDLE_MS as o,
  RESPONSE_BYTES as r,
  readFrame as s,
  COMMAND_TIMEOUT_MS as t,
};

//# sourceMappingURL=CodexManagedTokenProtocol-DEELEHfa.mjs.map
