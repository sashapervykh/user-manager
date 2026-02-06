import { useEffect, useRef } from "react";
import { useAuth } from "../../features/auth/models/hooks/useAuth";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { useUser } from "../../entities/user/model/useUser";
import { AuthHeaderActions } from "../../features/auth/ui/AuthHeaderActions/AuthHeaderActions";
import { Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import { apiClient } from "../../shared/api/apiClient";
import { API_ROUTES } from "../../shared/api/apiRoutes";

export function AuthLayout() {
  const { checkAuth, isLoading, setVerificationResult } = useAuth();
  const { user } = useUser();
  const [searchParams, _] = useSearchParams();
  const token = searchParams.get("token");
  const hasVerified = useRef(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (hasVerified.current) return;
    const verifyEmail = async () => {
      hasVerified.current = true;
      try {
        await apiClient.post(`${API_ROUTES.AUTH.VERIFY_EMAIL}${token}`);
        setVerificationResult("Email successfully verified");
      } catch {
        setVerificationResult(
          "Verification failed. The link may be expired or already used.",
        );
      }
    };

    verifyEmail();
  }, []);

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
