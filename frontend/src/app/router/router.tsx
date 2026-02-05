import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { UsersPage } from "../../pages/UsersPage/UsersPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ROUTES } from "../../shared/config/routes";
import { AuthLayout } from "../../widgets/AuthLayout/AuthLayout";
import { PublicOnlyRoute } from "../../features/auth/ui/PublicOnlyRoute/PublicOnlyRoute";
import { ProtectedRoute } from "../../features/auth/ui/ProtectedRoute/ProtectedRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<PublicOnlyRoute />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.USERS} element={<UsersPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
