# Speech output (TTS)

Reading a reply aloud is the reverse of dictation: text leaves the conversation and
audio comes back. It is additive — nothing here creates, edits, or sends a turn, and
the [voice input](voice-input.md) page owns the microphone side.

## Which engine speaks

Web and desktop synthesize on the device with [Phonon](https://github.com/blixt/phonon),
a browser runtime that runs on WebGPU and falls back to WebAssembly. The app serves the
engine's prebuilt bundle itself (`vite/phononAssets.ts`), so nothing is fetched from a
CDN at play time; the model's files come from the environment through
`GET /v1/audio/model/*`, which mirrors the pinned Hub path and keeps what it downloads
under `caches/tts-assets`. Every client of an environment therefore speaks from that
environment's copy, offline once warm, and a pinned revision stays pinned.

Two things still go to the server, both deliberately:

- **Speeds above 1.3×.** The model's speed control spans about 0.77×–1.3×; the player
  offers up to 2×, synthesized server-side so pitch is preserved. Falling back keeps
  every step sounding like the same voice.
- **Any origin that is not a secure context**, such as a tailnet address over plain
  http. Cache Storage needs a secure context, so the model could not be kept and every
  paragraph would re-download 44 MB.

A unit the engine fails to produce (no WebAssembly SIMD, a lost device, a failed
download) is retried on the server unless it already scheduled audio, and the session
stops attempting the engine after that. The player above this — paragraph spans,
click-to-seek, highlight, mini-player, autoplay, speed — reads only the PCM stream and
does not know which engine made it.

Mobile cannot run Phonon: React Native's Hermes has neither WebGPU nor WebAssembly. A
hidden WebView was the only candidate and was rejected — iOS suspends it in the
background, so lock-screen seeking would stall, and it costs a second 44 MB model plus
~150 MB of memory per device. Mobile keeps the authenticated `POST /api/tts/speech`
path in [`client-runtime`](../../packages/client-runtime/src/state/ttsSpeech.ts), and
[`apps/web/src/lib/phononSpeech.ts`](../../apps/web/src/lib/phononSpeech.ts) is the
only place that knows about the browser engine.

## The server engine

The environment still supervises `paradee-tts`, which speaks the OpenAI-compatible
`/v1/audio/speech` contract on `127.0.0.1:8880`. An already-answering bind is adopted,
otherwise the server spawns it, polls health, and respawns with backoff.
`T3CODE_MANAGED_TTS=0` disables supervision for a developer pointing at their own
engine, `T3CODE_MANAGED_TTS_DIR` selects the checkout, and `TTS_HOST`/`TTS_PORT` move
the bind.

The server proxies `/v1/audio/speech` so every client synthesizes through this
environment's own origin, including remote and relay-connected ones. A `503` means the
on-demand engine is waking, so the fetch layer polls before surfacing an error; with
streaming requested the server emits raw s16le mono 24 kHz chunks, so playback starts
before the reply's audio all exists.

Voice names are the model's, and the engine's catalog fills the settings dropdown. The
six Kokoro voices this fork shipped before map onto the closest Phonon voice, and map
back when the server synthesizes, so an existing setting keeps working in both.

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
