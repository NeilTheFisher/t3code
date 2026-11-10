/**
 * Pure playback math for streamed TTS: duration estimation from spoken text
 * and seek scheduling over a chunk timeline. No WebAudio — `useTtsPlayer`
 * applies it; tests exercise it standalone.
 */

/**
 * Kokoro synthesizes English at roughly this many characters per second of
 * audio. Used to estimate the total duration before the stream finishes, so
 * the scrub bar is stable instead of growing chunk by chunk.
 */
export const TTS_CHARS_PER_SECOND = 15;

/** Estimated wall-clock duration of synthesizing `text` played back at `rate`. */
export function estimateSpokenDuration(text: string, rate: number): number {
  if (rate <= 0) return 0;
  return text.length / (TTS_CHARS_PER_SECOND * rate);
}

/**
 * Converging estimate: known audio extent plus the estimated remainder,
 * scaled by the observed chars/sec from already-synthesized text. Early
 * paragraphs calibrate the estimate so the scrub bar rarely snaps at the end.
 */
export function convergeEstimatedDuration(params: {
  scheduled: number;
  spokenCharsSynthesized: number;
  remainingChars: number;
  fallbackCharsPerSecond: number;
  speed: number;
}): number {
  const { scheduled, spokenCharsSynthesized, remainingChars, fallbackCharsPerSecond, speed } =
    params;
  if (remainingChars <= 0) return scheduled;
  const observed = spokenCharsSynthesized > 0 ? spokenCharsSynthesized / scheduled : 0;
  const charsPerSecond = observed > 0 ? observed * speed : fallbackCharsPerSecond * speed;
  return scheduled + remainingChars / charsPerSecond;
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

/** One chunk of the narration as it is scheduled on the audio clock. */
export interface ScheduledChunk {
  /** Message-time offset where this chunk's audio begins, after any seek offset. */
  at: number;
  /** Context time this chunk starts at. */
  startedAt: number;
  /** Context-time seconds left to play. */
  duration: number;
  /** Index of the spoken paragraph this chunk belongs to. */
  paragraph: number;
}

export interface PlaybackPosition {
  /** Message-time of the audio being heard. */
  head: number;
  /** Paragraph of the audio being heard, or null before the first chunk starts. */
  paragraph: number | null;
}

/**
 * The audible position, read off the schedule instead of the audio clock.
 * Synthesis runs ahead of and behind realtime, so the clock alone runs into
 * audio that does not exist yet and the highlight follows it there. In a gap
 * the last started chunk's end holds until the next chunk begins.
 */
export function playbackPosition(
  schedule: readonly ScheduledChunk[],
  ctxNow: number,
): PlaybackPosition {
  let head = 0;
  let paragraph: number | null = null;
  for (const chunk of schedule) {
    if (chunk.startedAt > ctxNow) break;
    head = chunk.at + Math.min(ctxNow - chunk.startedAt, chunk.duration);
    paragraph = chunk.paragraph;
  }
  return { head, paragraph };
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
