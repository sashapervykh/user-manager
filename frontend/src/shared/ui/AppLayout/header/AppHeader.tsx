import { Layout } from "antd";
import { Logo } from "./Logo";
import { HeaderActions } from "./HeaderActions";

const { Header } = Layout;

export function AppHeader() {
  return (
    <Header className="bg-white d-flex justify-content-between align-items-center p-3 border-bottom mb-3">
      <Logo />
      <HeaderActions />
    </Header>
  );
}
