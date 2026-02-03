import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./header/AppHeader";
import { AppFooter } from "./footer/AppFooter";

export function AppLayout() {
  return (
    <Layout className="container-fluid min-vh-100 d-flex bg-white">
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </Layout>
  );
}
