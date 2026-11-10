# Speech output (TTS)

Reading a reply aloud is the reverse of dictation: text leaves the conversation and
audio comes back. It is additive — nothing here creates, edits, or sends a turn, and
the [voice input](voice-input.md) page owns the microphone side.

## Synthesis happens on the client

Every client speaks with [Phonon](https://github.com/blixt/phonon), a text-to-speech
runtime for WebGPU with a WebAssembly CPU tier. No environment synthesizes speech; the
old `paradee-tts` child process and the `/api/tts/speech` endpoint are gone, and no
client has a fallback that calls one.

The environment still serves two things, both by plain URL:

- **The engine bundle**, at `GET /v1/audio/engine/*`, read from the `phonon-webgpu`
  dependency. Its CPU worker and WebAssembly load from paths relative to the bundle,
  so the files stay together.
- **The model's files**, at `GET /v1/audio/model/*`, which mirrors the pinned Hub
  path and keeps what it downloads under `caches/tts-assets`. Every client of an
  environment therefore speaks from that environment's copy, offline once warm, and a
  pinned revision stays pinned.

The web and desktop clients serve the engine from their own Vite build and keep the
model in Cache Storage. A page that is not a secure context has no Cache Storage, so a
plain-http tailnet address would download the 44 MB model for every narration; those
pages refuse to play with a visible message instead of moving synthesis elsewhere.

## Speed

Phonon makes speech itself between about 0.77× and 1.3×. The player still offers five
steps (0.75×, 1×, 1.25×, 1.5×, 2×): outside the model's range it synthesizes at the
nearest bound and resamples the PCM. Audio above 1.3× is therefore shorter and higher
pitched, not time-stretched; below 0.77× it is longer and lower. That is the honest
trade for never sending text to another machine.

Mobile keeps the same five steps but changes the playlist's `playbackRate`, which
time-stretches natively, so its pitch does not move.

## Voices

The settings dropdown lists the pinned catalog's English voices and nothing else. The
stored value is the catalog name (`Delia`, `Trevor`, …). A stored pre-Phonon Kokoro id
such as `af_heart` is not translated: the player falls back to `Delia`, and a name the
model does not know also falls back once the engine rejects it. There is no alias map
in either direction.

## Mobile

React Native's Hermes has neither WebGPU nor WebAssembly, so mobile runs the CPU tier
in a hidden WebView (`apps/mobile/src/features/threads/phononEngine.ts`). The page is
the app's own HTML; the engine and the weights load from the environment's HTTP origin,
on the same connection the app uses, and the weights stay in the WebView's cache.

The WebView does not play audio. Before playback starts, the player synthesizes every
paragraph of the message to a WAV file in the cache directory, then hands those files to
the same native `expo-audio` playlist as before. That pre-synthesis is what makes the
design acceptable: iOS may suspend a backgrounded WebView at any moment, but the audio
it already produced is on disk, so lock-screen playback, per-paragraph seek, skip,
speed and highlight all keep working. A paragraph that was never synthesized cannot be
sought to, but there is no such paragraph once playback begins.

The cost is the model in WebView memory (~150–200 MB) plus the WAV files on disk.

## Why messages are split

A reply is synthesized per paragraph, then played in order. That is what makes the
current paragraph highlightable, clickable, and seekable. On web the engine streams PCM
as it speaks; on mobile the paragraphs are pre-produced. One request per whole message
would have made seeking a re-synthesis.

## Starting from a paragraph

Ctrl/cmd-click on a paragraph of an assistant reply starts narration there instead of at
the top; while that reply is already playing, the click is the ordinary seek-to-paragraph
gesture. A reply that is still streaming keeps the session open, so paragraphs that
arrive are synthesized onto the same timeline.

From a live reply the player speaks only sentences that have ended: the trailing,
unfinished one waits for its punctuation, because a fragment already spoken cannot be
taken back. A paragraph the reader started or seeked to directly is the exception and is
spoken as it stands. A live session that stops receiving text settles after a short wait,
so a client that navigated away cannot leave the player "playing" over silence.

## The `t3_speak` tool

Agents reach the same player through an MCP tool rather than by asking the user to
press play. The tool result carries only `text`, `speed`, and `interrupt`
([`packages/shared/src/speak.ts`](../../packages/shared/src/speak.ts)); nothing is
stored server-side, so every client that sees the tool result can speak it, and one
that is not watching the thread does not.
