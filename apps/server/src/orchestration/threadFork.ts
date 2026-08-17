export function isInheritedForkMessage(threadId: string, messageId: string): boolean {
  return messageId.startsWith(`${threadId}:fork:`);
}
