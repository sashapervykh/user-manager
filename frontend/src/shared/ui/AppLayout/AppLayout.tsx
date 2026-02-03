import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Footer } = Layout;

export function AppLayout() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "gray" }}>
      <Flex gap="middle" wrap>
        <Layout>
          <Header style={{ backgroundColor: "gray", display: "flex" }}>
            <p
              style={{
                background: "linear-gradient(45deg, #1890ff, #722ed1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              THE APP
            </p>
            <p>Some Buttons</p>
          </Header>
          <Outlet />
          <Footer>Made by Sasha Pervykh</Footer>
        </Layout>
      </Flex>
    </div>
  );
}
