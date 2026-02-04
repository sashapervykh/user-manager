import { useEffect } from "react";
import { useAuth } from "../../features/auth/models/hooks/useAuth";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { useUser } from "../../entities/user/model/useUser";
import { AuthHeaderActions } from "../../features/auth/ui/AuthHeaderActions/AuthHeaderActions";
import { Spin } from "antd";
import { notification } from "antd";

export function AuthLayout() {
  const { checkAuth, isLoading } = useAuth();
  const { user } = useUser();
  const [_, contextHolder] = notification.useNotification();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading)
    return (
      <div className="d-flex m-auto">
        <Spin size="large" className="d-flex m-auto" />
      </div>
    );

  return (
    <>
      <AppLayout headerActions={<AuthHeaderActions isAuthorized={!!user} />} />
    </>
  );
}
