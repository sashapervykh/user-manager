import { Button, Tooltip } from "antd";
import type { ReactNode } from "react";

interface Props {
  tooltip: string;
  children: ReactNode;
  handleClick: () => void;
  disabled?: boolean;
}

export function TooltipButton({
  tooltip,
  children,
  handleClick,
  disabled = false,
}: Props) {
  return (
    <Tooltip placement="topLeft" title={tooltip}>
      <Button
        className="h-100"
        type="primary"
        size="large"
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
