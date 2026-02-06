import { useState } from "react";
import { UsersListContext } from "./usersList.context";
import type { User } from "../../../entities/user/model/types/user";
import type { UsersListContextType } from "./types/usersListContextType";
import type { TableUser } from "./types/TableUser";
import { showNotification } from "../../../shared/ui/showNotification/showNotification";
import { API_ROUTES } from "../../../shared/api/apiRoutes";
import { apiClient } from "../../../shared/api/apiClient";
import { castTableUsers } from "../lib/castTableUser";
import { TOKEN_STORAGE } from "../../../shared/lib/tokenStorage";
import { useUser } from "../../../entities/user/model/useUser";
import { getErrorDetails } from "../lib/getErrorDetails";
import { ERRORS_TITLE } from "../lib/errorsTitle";

interface Props {
  children: React.ReactNode;
}

export function UsersListProvider({ children }: Props) {
  const { setUser } = useUser();
  const [users, setUsers] = useState<TableUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<React.Key[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const requestUserApi = async (
    errorTitle: string,
    callback?: () => Promise<void>,
  ) => {
    try {
      setIsLoading(true);
      if (callback) await callback();
      const users = await apiClient.get<User[]>(API_ROUTES.USERS.MAIN);
      const tableUsers = castTableUsers(users);
      setUsers(tableUsers);
      setSelectedUsers([]);
    } catch (error) {
      const { message, isRedirecting } = getErrorDetails(error);
      if (isRedirecting) {
        TOKEN_STORAGE.remove();
        setUser(null);
      }
      showNotification({
        type: "error",
        title: errorTitle,
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getUsers = async () => {
    await requestUserApi(ERRORS_TITLE.GET_ERROR);
  };

  const blockUsers = async () => {
    requestUserApi(ERRORS_TITLE.UPDATE_ERROR, async () => {
      await apiClient.put(API_ROUTES.USERS.BLOCK, { userIds: selectedUsers });
    });
  };

  const unblockUsers = async () => {
    requestUserApi(ERRORS_TITLE.UPDATE_ERROR, async () => {
      await apiClient.put(API_ROUTES.USERS.UNBLOCK, { userIds: selectedUsers });
    });
  };

  const deleteUsers = async () => {
    requestUserApi(ERRORS_TITLE.UPDATE_ERROR, async () => {
      await apiClient.delete(API_ROUTES.USERS.MAIN, {
        userIds: selectedUsers,
      });
    });
  };

  const deleteUnverified = async () => {
    requestUserApi(ERRORS_TITLE.UPDATE_ERROR, async () => {
      await apiClient.delete(API_ROUTES.USERS.DELETE_UNVERIFIED);
    });
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
