/**
 * Pure playback math for streamed TTS: duration estimation from spoken text
 * and seek scheduling over a chunk timeline. No WebAudio — `useTtsPlayer`
 * applies it; tests exercise it standalone.
 */

/**
 * Kokoro synthesizes English at roughly this many characters per second of
 * audio at 1x speed. Used to estimate the total duration before the stream
 * finishes, so the scrub bar is stable instead of growing chunk by chunk.
 */
export const TTS_CHARS_PER_SECOND = 15;

/** Estimated wall-clock duration of synthesizing `text` played back at `rate`. */
export function estimateSpokenDuration(text: string, rate: number): number {
  if (rate <= 0) return 0;
  return text.length / (TTS_CHARS_PER_SECOND * rate);
}

export interface ChunkSpan {
  /** Message-time offset where this chunk starts. */
  at: number;
  /** Message-time duration of this chunk. */
  duration: number;
}

export interface SeekEntry {
  index: number;
  /** Seconds into the chunk's buffer where playback resumes. */
  offset: number;
}

/**
 * Which chunks to (re)schedule after seeking to `target`, in order: chunks
 * that end at/before the target are dropped; the chunk containing the target
 * resumes mid-buffer; later chunks play whole.
 */
export function seekSchedule(chunks: readonly ChunkSpan[], target: number): SeekEntry[] {
  const entries: SeekEntry[] = [];
  for (let index = 0; index < chunks.length; index++) {
    const { at, duration } = chunks[index]!;
    if (at + duration <= target) continue;
    entries.push({ index, offset: Math.max(0, target - at) });
  }
  return entries;
}
