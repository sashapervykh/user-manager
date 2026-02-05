import { TooltipButton } from "../../../shared/ui/TooltipButton/TooltipButton";
import { UserControlsActions } from "./userControlsActions";

export function UsersControls() {
  return (
    <div className="d-flex gap-1 h-3rem ms-auto me-0 mb-3">
      {UserControlsActions.map((elem) => {
        const { tooltip, buttonContent } = elem;
        return (
          <TooltipButton
            tooltip={tooltip}
            handleClick={() => {
              console.log(elem.type);
            }}
          >
            {buttonContent}
          </TooltipButton>
        );
      })}
    </div>
  );
}
