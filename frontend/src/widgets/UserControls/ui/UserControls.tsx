import { useUsersList } from "../../../features/users/model/useUsersList";
import { TooltipButton } from "../../../shared/ui/TooltipButton/TooltipButton";
import { useControlsActions } from "../model/useControlsActions";

export function UsersControls() {
  const { controlsActions } = useControlsActions();
  const { isLoading } = useUsersList();
  return (
    <div className="d-flex gap-1 h-3rem ms-auto me-0 mb-3">
      {controlsActions.map((action) => {
        const { key, ...parameters } = action;
        return <TooltipButton key={key} {...parameters} disabled={isLoading} />;
      })}
    </div>
  );
}
