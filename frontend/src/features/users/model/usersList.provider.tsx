import { useState } from "react";
import { UsersListContext } from "./usersList.context";
import type { User } from "../../../entities/user/model/types/user";
import type { UsersListContextType } from "./types/usersListContextType";
import type { TableUser } from "./types/TableUser";
import { showNotification } from "../../../shared/ui/showNotification/showNotification";
import { getErrorMessage } from "../../../shared/lib/getErrorMessage";
import { API_ROUTES } from "../../../shared/api/apiRoutes";
import { apiClient } from "../../../shared/api/apiClient";
import { castTableUsers } from "../lib/castTableUser";
import { shouldRedirect } from "../lib/shouldRedirect";
import { useNavigate } from "react-router-dom";
import { TOKEN_STORAGE } from "../../../shared/lib/tokenStorage";
import { useUser } from "../../../entities/user/model/useUser";

interface Props {
  children: React.ReactNode;
}

export function UsersListProvider({ children }: Props) {
  const { setUser } = useUser();
  const [users, setUsers] = useState<TableUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const users = await apiClient.get<User[]>(API_ROUTES.USERS.MAIN);
      const tableUsers = castTableUsers(users);
      setUsers(tableUsers);
    } catch (error) {
      if (shouldRedirect(error)) {
        TOKEN_STORAGE.remove();
        setUser(null);
      }
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
      setSelectedUsers([]);
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

  const unblockUsers = async () => {
    try {
      setIsLoading(true);
      await apiClient.put(API_ROUTES.USERS.UNBLOCK, { userIds: selectedUsers });
      await getUsers();
      setSelectedUsers([]);
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

  const deleteUsers = async () => {
    try {
      setIsLoading(true);
      await apiClient.delete(API_ROUTES.USERS.MAIN, {
        userIds: selectedUsers,
      });
      await getUsers();
      setSelectedUsers([]);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Deleting users failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUnverified = async () => {
    try {
      setIsLoading(true);
      await apiClient.delete(API_ROUTES.USERS.DELETE_UNVERIFIED);
      await getUsers();
      setSelectedUsers([]);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      showNotification({
        type: "error",
        title: "Deleting unverified failed",
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
    unblockUsers,
    users,
    isLoading,
    deleteUnverified,
    deleteUsers,
  };

  return (
    <UsersListContext.Provider value={value}>
      {children}
    </UsersListContext.Provider>
  );
}
