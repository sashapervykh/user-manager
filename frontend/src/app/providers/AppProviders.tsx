import { UserProvider } from "../../entities/user/model/user.provider";
import { UsersListProvider } from "../../features/users/model/usersList.provider";

interface Props {
  children: React.ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <UserProvider>
      <UsersListProvider>{children}</UsersListProvider>
    </UserProvider>
  );
}
