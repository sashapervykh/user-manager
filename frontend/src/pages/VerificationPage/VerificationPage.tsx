import Title from "antd/es/typography/Title";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { apiClient } from "../../shared/api/apiClient";
import { API_ROUTES } from "../../shared/api/apiRoutes";
import { ROUTES } from "../../shared/config/routes";

export function VerificationPage() {
  const [searchParams, _] = useSearchParams();
  const token = searchParams.get("token");
  const [result, setResult] = useState("Verifying your email...");
  const hasVerified = useRef<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasVerified.current) return;
    const verifyEmail = async () => {
      hasVerified.current = true;
      try {
        await apiClient.post(`${API_ROUTES.AUTH.VERIFY_EMAIL}${token}`);
        setResult("Email successfully verified");
        navigate(ROUTES.USERS);
      } catch {
        setResult(
          "Verification failed. The link may be expired or already used.",
        );
      }
    };

    verifyEmail();
  }, []);

  return (
    <>
      <div className="d-flex flex-column w-100 h-100">
        <Title className="text-center mt-0 mb-2">{result}</Title>
      </div>
    </>
  );
}
