import { Button } from "antd";
import { AUTH_ACTIONS_TEXT } from "../../../../shared/const/authActionsText";
import { useAuth } from "../../models/hooks/useAuth";

export function LogoutButton() {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };

  return (
    <Button type="link" className="fs-5" onClick={handleClick}>
      {AUTH_ACTIONS_TEXT.LOG_OUT}
    </Button>
  );
}
