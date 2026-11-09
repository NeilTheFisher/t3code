# Speech output (TTS)

Reading a reply aloud is the reverse of dictation: text leaves the conversation and
audio comes back. It is additive — nothing here creates, edits, or sends a turn, and
the [voice input](voice-input.md) page owns the microphone side.

## Synthesis is the server's job

Every client synthesizes through the environment, not through a URL it chose
locally. [`client-runtime`](../../packages/client-runtime/src/state/ttsSpeech.ts)
posts to the environment's `POST /api/tts/speech` over the same authenticated
connection it uses for RPC, so a remote or relay-connected client gets audio from
the machine that owns the thread. `tts.serverUrl` is empty by default, which means
"same origin"; a non-empty value points the client at a Kokoro-compatible server on
another origin.

The environment supervises the engine itself in
[`apps/server/src/voice/managedTts.ts`](../../apps/server/src/voice/managedTts.ts).
`paradee-tts` speaks the OpenAI-compatible `/v1/audio/speech` contract on
`127.0.0.1:8880`. An already-answering bind is adopted, otherwise the server spawns
it, polls health, and respawns with backoff. `T3CODE_MANAGED_TTS=0` disables
supervision for a developer pointing at their own engine, `T3CODE_MANAGED_TTS_DIR`
selects the checkout, and `TTS_HOST`/`TTS_PORT` move the bind.

A `503` from the endpoint means the on-demand engine is waking, so the fetch layer
polls before surfacing an error; with streaming requested the server emits raw
s16le mono 24 kHz chunks, so playback starts before the reply's audio all exists.

## Why messages are split

A reply is synthesized per paragraph, then played in order. That is what makes the
current paragraph highlightable, clickable, and seekable — including to a paragraph
the engine has not reached yet. One request per whole message would make seeking a
re-synthesis and would delay playback behind the slowest paragraph.

## The `t3_speak` tool

Agents reach the same player through an MCP tool rather than by asking the user to
press play. The tool result carries only `text`, `speed`, and `interrupt`
([`packages/shared/src/speak.ts`](../../packages/shared/src/speak.ts)); nothing is
stored server-side, so every client that sees the tool result can speak it, and one
that is not watching the thread does not.
