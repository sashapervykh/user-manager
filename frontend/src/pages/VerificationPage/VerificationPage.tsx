import Title from "antd/es/typography/Title";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiClient } from "../../shared/api/apiClient";
import { API_ROUTES } from "../../shared/api/apiRoutes";

export function VerificationPage() {
  const [searchParams, _] = useSearchParams();
  const token = searchParams.get("token");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setResult("Invalid verification link");
      setIsLoading(false);
      return;
    }

    const verifyEmail = async () => {
      try {
        await apiClient.post(`${API_ROUTES.AUTH.VERIFY_EMAIL}${token}`);
        setResult("Email successfully verified");
      } catch {
        setResult(
          "Verification failed. The link may be expired or already used.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmail();
  }, []);

  return (
    <>
      <div className="d-flex flex-column w-100 h-100">
        <Title className="text-center mt-0 mb-2">
          {isLoading ? "Verifying your email..." : result}
        </Title>
      </div>
    </>
  );
}
