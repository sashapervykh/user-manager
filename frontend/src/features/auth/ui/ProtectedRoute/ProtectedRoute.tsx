import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../../entities/user/model/useUser";
import { ROUTES } from "../../../../shared/config/routes";

export function ProtectedRoute() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
}
