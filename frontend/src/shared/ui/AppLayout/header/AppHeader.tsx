import { Layout } from "antd";
import { Logo } from "./Logo";
import type React from "react";

const { Header } = Layout;

interface Props {
  headerActions: React.ReactNode;
}

export function AppHeader({ headerActions }: Props) {
  return (
    <Header className="bg-white d-flex justify-content-between align-items-center p-3 border-bottom mb-3">
      <Logo />
      {headerActions}
    </Header>
  );
}
