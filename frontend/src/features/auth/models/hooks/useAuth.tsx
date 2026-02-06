import { useCallback, useState } from "react";
import { useUser } from "../../../../entities/user/model/useUser";
import { apiClient } from "../../../../shared/api/apiClient";
import type { UserResponseDto } from "../types/userResponseDto";
import { TOKEN_STORAGE } from "../../../../shared/lib/tokenStorage";
import type { UserRegisterDto } from "../types/userRegisterDro";
import type { User } from "../../../../entities/user/model/types/user";
import type { UserCreateDto } from "../types/userCreateDto";
import { API_ROUTES } from "../../../../shared/api/apiRoutes";
import { showNotification } from "../../../../shared/ui/showNotification/showNotification";
import { getErrorMessage } from "../../../../shared/lib/getErrorMessage";

export function useAuth() {
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    const token = TOKEN_STORAGE.get();
    if (!token) {
      setIsLoading(false);
      return;
    }
    try {
      const { user } = await apiClient.post<{ user: User }>(
        API_ROUTES.USERS.ME,
        {
          token,
        },
      );
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
      setIsLoading(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        API_ROUTES.AUTH.REGISTER,
        userRegisterDto,
      );
      TOKEN_STORAGE.set(token);
      setUser(user);
      showNotification({
        title: "Successful registration",
        description: "Welcome! We are glad you join us!",
      });
      const timeout = setTimeout(() => {
        showNotification({
          type: "warning",
          title: "Email confirmation required",
          description:
            "You need to confirm your email. Click the link from the letter sent to your email.",
        });
        clearTimeout(timeout);
      }, 1000);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Registration failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (userCreateDto: UserCreateDto) => {
    try {
      setIsLoading(true);
      const { user, token } = await apiClient.post<UserResponseDto>(
        API_ROUTES.AUTH.LOGIN,
        userCreateDto,
      );
      TOKEN_STORAGE.set(token);
      setUser(user);
      showNotification({
        title: "Successful authentication",
        description: `Welcome back! We missed you!`,
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Authentication failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    TOKEN_STORAGE.remove();
    setUser(null);
  };

  return {
    register,
    isLoading,
    setIsLoading,
    checkAuth,
    logout,
    login,
  };
}
