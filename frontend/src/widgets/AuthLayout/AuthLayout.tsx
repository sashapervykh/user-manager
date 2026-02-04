import { useEffect } from "react";
import { useAuth } from "../../features/auth/models/hooks/useAuth";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { useUser } from "../../entities/user/model/useUser";
import { AuthHeaderActions } from "../../features/auth/ui/AuthHeaderActions/AuthHeaderActions";

export function AuthLayout() {
  const { checkAuth } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AppLayout headerActions={<AuthHeaderActions isAuthorized={!!user} />} />
  );
}
