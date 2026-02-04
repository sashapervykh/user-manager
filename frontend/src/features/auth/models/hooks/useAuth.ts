import { useState } from "react";
import { useUser } from "../../../../entities/user/model/useUser";
import { apiClient } from "../../../../shared/api/apiClient";
import type { UserResponseDto } from "../types/userResponseDto";
import { TOKEN_STORAGE } from "../../../../shared/lib/tokenStorage";
import type { UserRegisterDto } from "../types/userRegisterDro";
import type { User } from "../../../../entities/user/model/types/user";

export function useAuth() {
  const { setUser } = useUser();
  const [error, setError] = useState<unknown | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuth = async () => {
    setIsLoading(true);
    const token = TOKEN_STORAGE.get();
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      const user = await apiClient.get<User>("users/me", { token });
      setUser(user);
    } catch {
      TOKEN_STORAGE.remove();
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userRegisterDto: UserRegisterDto) => {
    try {
      setError(null);
      setIsLoading(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        "/auth/register",
        userRegisterDto,
      );
      console.log(user, token);
      setUser(user);
      TOKEN_STORAGE.set(token);
    } catch (error) {
      setError(error);
    }
  };

  return {
    register,
    isLoading,
    error,
    setError,
    setIsLoading,
    checkAuth,
  };
}
