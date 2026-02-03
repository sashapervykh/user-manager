import { useLocation } from "react-router-dom";
import { Button } from "antd";
import { AddressLink } from "../../AddressLink/AddressLink";
import { AUTH_ACTIONS_TEXT } from "../../../const/authActionsText";
import { ROUTES } from "../../../config/routes";

export function HeaderActions() {
  const { pathname } = useLocation();
  const isAuthorized = false;
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
