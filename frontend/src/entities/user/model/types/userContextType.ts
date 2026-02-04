import type { User } from "./user";

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}
