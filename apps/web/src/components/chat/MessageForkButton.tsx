import type { MessageId } from "@t3tools/contracts";
import { GitForkIcon } from "lucide-react";
import { memo } from "react";

import { Button } from "../ui/button";

export interface ForkMessageConfig {
  isForking: boolean;
  onFork: (messageId: MessageId) => void;
}

export const MessageForkButton = memo(function MessageForkButton(props: {
  messageId: MessageId;
  config: ForkMessageConfig;
}) {
  const { config, messageId } = props;
  return (
    <Button
      type="button"
      size="xs"
      variant="ghost"
      className="text-muted-foreground hover:text-foreground"
      aria-label="Fork from this message"
      disabled={config.isForking}
      onClick={() => config.onFork(messageId)}
    >
      <GitForkIcon className="size-3" />
    </Button>
  );
});
