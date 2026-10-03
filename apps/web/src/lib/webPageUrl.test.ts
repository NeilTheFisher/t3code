import { describe, expect, it } from "vite-plus/test";

import { normalizeWebPageUrl } from "./webPageUrl";

describe("normalizeWebPageUrl", () => {
  it("returns null for empty or whitespace input", () => {
    expect(normalizeWebPageUrl("")).toBeNull();
    expect(normalizeWebPageUrl("   ")).toBeNull();
  });

  it("prepends http:// when the scheme is missing", () => {
    expect(normalizeWebPageUrl("localhost:3000")).toBe("http://localhost:3000/");
    expect(normalizeWebPageUrl("example.com/path?q=1")).toBe("http://example.com/path?q=1");
    expect(normalizeWebPageUrl("127.0.0.1:5173")).toBe("http://127.0.0.1:5173/");
  });

  it("keeps explicit http and https schemes", () => {
    expect(normalizeWebPageUrl("http://localhost:3000")).toBe("http://localhost:3000/");
    expect(normalizeWebPageUrl("https://example.com")).toBe("https://example.com/");
  });

  it("trims surrounding whitespace", () => {
    expect(normalizeWebPageUrl("  localhost:3000  ")).toBe("http://localhost:3000/");
  });

  it("rejects non-http(s) schemes", () => {
    expect(normalizeWebPageUrl("javascript://alert(1)")).toBeNull();
    expect(normalizeWebPageUrl("file:///etc/passwd")).toBeNull();
    expect(normalizeWebPageUrl("ftp://example.com")).toBeNull();
  });

  it("rejects input without a usable host", () => {
    expect(normalizeWebPageUrl("http://")).toBeNull();
  });
});
