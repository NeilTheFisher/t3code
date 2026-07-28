export function synthesizeUnifiedDiff(oldText: string, newText: string): string {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const oldCount = oldLines.length;
  const newCount = newLines.length;
  const lines: string[] = [];
  lines.push(`@@ -1,${oldCount} +1,${newCount} @@`);
  for (const line of oldLines) {
    lines.push(`-${line}`);
  }
  for (const line of newLines) {
    lines.push(`+${line}`);
  }
  return lines.join("\n");
}
