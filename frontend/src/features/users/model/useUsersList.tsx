import { useState } from "react";
import { getErrorMessage } from "../../../shared/lib/getErrorMessage";
import { showNotification } from "../../../shared/ui/showNotification/showNotification";
import { apiClient } from "../../../shared/api/apiClient";
import { API_ROUTES } from "../../../shared/api/apiRoutes";
import type { TableUser } from "./types/TableUser";
import type { User } from "../../../entities/user/model/types/user";

export function useUsersList() {
  const [users, setUsers] = useState<TableUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const users = await apiClient.get<User[]>(API_ROUTES.USERS.MAIN);
      console.log(users);
      const tableUsers = users.map((user) => {
        const {
          id: key,
          firstName,
          lastName,
          status,
          job,
          email,
          lastLoginAt,
        } = user;
        return {
          key,
          name: firstName + " " + lastName,
          status,
          job: job ?? "N/A",
          email,
          lastLoginAt: lastLoginAt
            ? new Date(lastLoginAt).toLocaleString()
            : "-",
        };
      });
      setUsers(tableUsers);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Getting users failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const blockUsers = async (users: React.Key[]) => {
    try {
      setIsLoading(true);
      await apiClient.put(API_ROUTES.USERS.BLOCK, { userIds: users });
      await getUsers();
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Getting users failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { users, getUsers, isLoading, setIsLoading, blockUsers };
}
