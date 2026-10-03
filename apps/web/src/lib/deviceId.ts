function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export function getDeviceId(): string {
  const signals = [navigator.userAgent, navigator.language, navigator.platform]
    .filter(Boolean)
    .join("|");
  return hashString(signals);
}
