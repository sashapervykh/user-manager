import Title from "antd/es/typography/Title";
import { useSearchParams } from "react-router-dom";
import { memo, useEffect, useRef, useState } from "react";
import { apiClient } from "../../shared/api/apiClient";
import { API_ROUTES } from "../../shared/api/apiRoutes";

export const VerificationPage = memo(function VerificationPage() {
  const [searchParams, _] = useSearchParams();
  const token = searchParams.get("token");
  const [result, setResult] = useState("Verifying your email...");
  const hasVerified = useRef<boolean>(false);

  useEffect(() => {
    if (hasVerified.current) return;
    const verifyEmail = async () => {
      hasVerified.current = true;
      try {
        await apiClient.post(`${API_ROUTES.AUTH.VERIFY_EMAIL}${token}`);
        setResult("Email successfully verified");
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
});
