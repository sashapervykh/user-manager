import type { TableUser } from "./TableUser";

export interface UsersListContextType {
  users: TableUser[];
  selectedUsers: React.Key[];
  setSelectedUsers: (selectedUsersId: React.Key[]) => void;
  blockUsers: () => Promise<void>;
  unblockUsers: () => Promise<void>;
  getUsers: () => Promise<void>;
  isLoading: boolean;
}
