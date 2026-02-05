import { useContext } from "react";
import { UsersListContext } from "./usersList.context";

export function useUsersList() {
  const context = useContext(UsersListContext);
  if (!context) {
    throw new Error("useUsersList must be used within a UsersListProvider");
  }
  return context;
}
