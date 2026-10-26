#!/usr/bin/env node

import {
  J as flatMap,
  Mi as isFailure,
  ct as gen,
  gn as sync,
  n as acquireRelease,
  sn as scoped,
  tn as runPromiseExit,
} from "./Effect-JLyBLa-C.mjs";
import {
  Et as encodeSync,
  O as NonEmptyString,
  Y as Tuple,
  jt as fromJsonString,
  yt as decodeUnknownEffect,
} from "./Schema-CNU5AVWm.mjs";
import {
  a as Response,
  i as Request,
  r as RESPONSE_BYTES,
  s as readFrame,
  t as COMMAND_TIMEOUT_MS,
} from "./CodexManagedTokenProtocol-DEELEHfa.mjs";
import * as NodeNet from "node:net";
// src/cli/managedChatGptToken.ts
const decodeArguments = decodeUnknownEffect(
  Tuple([
    NonEmptyString,
    Request.fields.instanceId,
    Request.fields.environmentId,
    Request.fields.profileKey,
  ]),
);
const encodeRequest = encodeSync(fromJsonString(Request));
const decodeResponse = decodeUnknownEffect(fromJsonString(Response), { onExcessProperty: "error" });
/** Codex's auth.command protocol is a bare token on stdout, never a CLI diagnostic. */
async function runManagedChatGptTokenCli(args) {
  const program = gen(function* () {
    const [endpoint, instanceId, environmentId, profileKey] = yield* decodeArguments(args);
    const socket = yield* acquireRelease(
      sync(() => NodeNet.createConnection(endpoint)),
      (socket) => sync(() => socket.destroy()),
    );
    socket.on("error", () => {});
    socket.once("connect", () =>
      socket.write(
        encodeRequest({
          version: 1,
          instanceId,
          environmentId,
          profileKey,
        }) + "\n",
      ),
    );
    return yield* readFrame(socket, RESPONSE_BYTES, COMMAND_TIMEOUT_MS).pipe(
      flatMap(decodeResponse),
    );
  }).pipe(scoped);
  const result = await runPromiseExit(program);
  if (isFailure(result)) {
    process.stderr.write(
      "Could not access the managed ChatGPT connection. Reconnect in T3 Code.\n",
    );
    process.exitCode = 1;
    return;
  }
  process.stdout.write(result.value.token);
}
export { runManagedChatGptTokenCli };

//# sourceMappingURL=managedChatGptToken-DJxIGuBF.mjs.map
