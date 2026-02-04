import { UserProvider } from "../../entities/user/model/user.provider";

interface Props {
  children: React.ReactNode;
}

export function AppProviders({ children }: Props) {
  return <UserProvider>{children}</UserProvider>;
}
