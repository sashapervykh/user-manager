import { useLocation } from "react-router-dom";
import { Button } from "antd";
import { HeaderLink } from "./HeaderLink";

export function HeaderActions() {
  const { pathname } = useLocation();
  const isAuthorized = false;

  if (isAuthorized)
    return (
      <Button type="link" className="fs-5">
        Log out
      </Button>
    );

  if (pathname === "/login")
    return <HeaderLink text="Sign Up" address="/register" />;

  return <HeaderLink text="Sign In" address="/login" />;
}
