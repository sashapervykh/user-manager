import { useState } from "react";
import type { User } from "./types/user";
import { UserContext } from "./user.context";
import type { UserContextType } from "./types/userContextType";

interface Props {
  children: React.ReactNode;
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const removeUser = () => {
    setUser(null);
  };

  const value: UserContextType = {
    user,
    setUser,
    removeUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
