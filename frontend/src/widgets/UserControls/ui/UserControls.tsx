import { TooltipButton } from "../../../shared/ui/TooltipButton/TooltipButton";
import { useControlsActions } from "../model/useControlsActions";

export function UsersControls() {
  const { controlsActions } = useControlsActions();
  return (
    <div className="d-flex gap-1 h-3rem ms-auto me-0 mb-3">
      {controlsActions.map((action) => (
        <TooltipButton {...action} />
      ))}
    </div>
  );
}
