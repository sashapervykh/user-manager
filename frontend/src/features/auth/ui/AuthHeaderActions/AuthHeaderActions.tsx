import { useLocation } from "react-router-dom";
import { Button } from "antd";
import { AddressLink } from "../../../../shared/ui/AddressLink/AddressLink";
import { AUTH_ACTIONS_TEXT } from "../../../../shared/const/authActionsText";
import { ROUTES } from "../../../../shared/config/routes";

interface Props {
  isAuthorized: boolean;
}

export function AuthHeaderActions({ isAuthorized }: Props) {
  const { pathname } = useLocation();
  if (isAuthorized)
    return (
      <Button type="link" className="fs-5">
        {AUTH_ACTIONS_TEXT.LOG_OUT}
      </Button>
    );
  if (pathname === "/login")
    return (
      <AddressLink text={AUTH_ACTIONS_TEXT.SIGN_UP} address={ROUTES.REGISTER} />
    );
  return (
    <AddressLink text={AUTH_ACTIONS_TEXT.SIGN_IN} address={ROUTES.LOGIN} />
  );
}
