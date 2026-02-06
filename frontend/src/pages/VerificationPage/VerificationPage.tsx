import Title from "antd/es/typography/Title";
import { memo } from "react";
import { useAuth } from "../../features/auth/models/hooks/useAuth";

export const VerificationPage = memo(function VerificationPage() {
  const { verificationResult } = useAuth();
  return (
    <>
      <div className="d-flex flex-column w-100 h-100">
        <Title className="text-center mt-0 mb-2">{verificationResult}</Title>
      </div>
    </>
  );
});
