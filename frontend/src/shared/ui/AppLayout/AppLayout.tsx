import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./header/AppHeader";
import { AppFooter } from "./footer/AppFooter";

export function AppLayout() {
  return (
    <Layout className="container-fluid min-vh-100 d-flex bg-white">
      <AppHeader />
      <main className="d-flex flex-grow-1 pt-2 pb-4">
        <Outlet />
      </main>
      <AppFooter />
    </Layout>
  );
}
