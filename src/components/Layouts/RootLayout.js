import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Content, Footer } = Layout;
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <div
          className="site-layout-content min-h-screen px-6"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        PC Builder ©2023 Created by Fathe Karim
      </Footer>
    </Layout>
  );
};
export default RootLayout;
