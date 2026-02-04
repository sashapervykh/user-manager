import { useCallback, useState } from "react";
import { useUser } from "../../../../entities/user/model/useUser";
import { apiClient } from "../../../../shared/api/apiClient";
import type { UserResponseDto } from "../types/userResponseDto";
import { TOKEN_STORAGE } from "../../../../shared/lib/tokenStorage";
import type { UserRegisterDto } from "../types/userRegisterDro";
import type { User } from "../../../../entities/user/model/types/user";
import type { UserCreateDto } from "../types/userCreateDto";

export function useAuth() {
  const { setUser } = useUser();
  const [error, setError] = useState<unknown | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    const token = TOKEN_STORAGE.get();
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      const { user } = await apiClient.post<{ user: User }>("/users/me", {
        token,
      });
      setUser(user);
    } catch (error) {
      console.log(error);
      TOKEN_STORAGE.remove();
    } finally {
      setIsLoading(false);
    }
  }, [setUser]);

  const register = async (userRegisterDto: UserRegisterDto) => {
    try {
      setError(null);
      setIsLoading(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        "/auth/register",
        userRegisterDto,
      );
      console.log(user, token);
      TOKEN_STORAGE.set(token);
      setUser(user);
    } catch (error) {
      setError(error);
    }
  };

  const login = async (userCreateDto: UserCreateDto) => {
    try {
      setError(null);
      setIsLoading(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        "/auth/login",
        userCreateDto,
      );
      TOKEN_STORAGE.set(token);
      setUser(user);
    } catch (error) {
      setError(error);
    }
  };

  const logout = () => {
    TOKEN_STORAGE.remove();
    setUser(null);
  };

  return {
    register,
    isLoading,
    error,
    setError,
    setIsLoading,
    checkAuth,
    logout,
    login,
  };
}
