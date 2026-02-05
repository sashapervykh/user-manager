import { useState } from "react";
import { UsersListContext } from "./usersList.context";
import type { User } from "../../../entities/user/model/types/user";
import type { UsersListContextType } from "./types/usersListContextType";
import type { TableUser } from "./types/TableUser";
import { showNotification } from "../../../shared/ui/showNotification/showNotification";
import { getErrorMessage } from "../../../shared/lib/getErrorMessage";
import { API_ROUTES } from "../../../shared/api/apiRoutes";
import { apiClient } from "../../../shared/api/apiClient";

interface Props {
  children: React.ReactNode;
}

export function UsersListProvider({ children }: Props) {
  const [users, setUsers] = useState<TableUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
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

  const blockUsers = async () => {
    try {
      setIsLoading(true);
      await apiClient.put(API_ROUTES.USERS.BLOCK, { userIds: selectedUsers });
      await getUsers();
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Blocking users failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const value: UsersListContextType = {
    selectedUsers,
    setSelectedUsers,
    blockUsers,
    getUsers,
    users,
    isLoading,
  };

  return (
    <UsersListContext.Provider value={value}>
      {children}
    </UsersListContext.Provider>
  );
}
