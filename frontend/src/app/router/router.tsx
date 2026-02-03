import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { UsersPage } from "../../pages/UsersPage/UsersPage";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ROUTES } from "../../shared/config/routes";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
