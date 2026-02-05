import { Button, Tooltip } from "antd";
import type { ReactNode } from "react";

interface Props {
  tooltip: string;
  children: ReactNode;
  handleClick: () => void;
}

export function TooltipButton({ tooltip, children, handleClick }: Props) {
  return (
    <Tooltip placement="topLeft" title={tooltip}>
      <Button
        className="h-100"
        type="primary"
        size="large"
        onClick={handleClick}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
