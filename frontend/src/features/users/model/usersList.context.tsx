import { createContext } from "react";
import type { UsersListContextType } from "./types/usersListContextType";

export const UsersListContext = createContext<UsersListContextType | undefined>(
  undefined,
);
