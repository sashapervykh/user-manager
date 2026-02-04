import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../entities/user/model/useUser";
import { ROUTES } from "../../../../shared/config/routes";

export function PublicOnlyRoute() {
  const { user } = useUser();

  return user ? <Navigate to={ROUTES.USERS} replace /> : <Outlet />;
}
