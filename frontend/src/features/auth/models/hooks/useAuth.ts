import { useState } from "react";
import { useUser } from "../../../../entities/user/model/useUser";
import { apiClient } from "../../../../shared/api/apiClient";
import type { UserResponseDto } from "../types/userResponseDto";
import { TOKEN_STORAGE } from "../../../../shared/lib/tokenStorage";
import type { UserRegisterDto } from "../types/userRegisterDro";

export function useAuth() {
  const { setUser } = useUser();
  const [error, setError] = useState<unknown | null>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const register = async (userRegisterDto: UserRegisterDto) => {
    try {
      setError(null);
      setIsSubmitting(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        "/auth/register",
        userRegisterDto,
      );
      setUser(user);
      TOKEN_STORAGE.set(token);
    } catch (error) {
      setError(error);
    }
  };

  return {
    register,
    isSubmitting,
    error,
    setError,
    setIsSubmitting,
  };
}
