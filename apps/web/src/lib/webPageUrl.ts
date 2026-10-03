/** URL normalization for the web-client iframe browser surface. */

/**
 * Normalizes user-entered text into a loadable URL.
 * - Trims whitespace.
 * - Prepends `http://` when no scheme is present (e.g. `localhost:3000`).
 * - Returns null for empty input or input that cannot form a valid http(s) URL.
 */
export function normalizeWebPageUrl(input: string): string | null {
  const trimmed = input.trim();
  if (trimmed.length === 0) return null;
  const withScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed) ? trimmed : `http://${trimmed}`;
  try {
    const url = new URL(withScheme);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (url.hostname.length === 0) return null;
    return url.href;
  } catch {
    return null;
  }
}
