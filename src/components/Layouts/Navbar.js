import React, { useState } from "react";
import { Layout, Button, Drawer, Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import "@/styles/Home.module.css";

import { MenuOutlined } from "@ant-design/icons";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const { data: categories } = useGetCategoriesQuery();

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <Link href={"/"}>
              <h3 className="brand-font">Walton PC Store</h3>
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <Menu mode="horizontal">
                <Menu mode="horizontal">
                  <Menu.SubMenu title="Categories">
                    {categories?.map((category) => (
                      <Link
                        key={category.categoryId}
                        href={`/categoryProducts/${category.categoryId}`}
                      >
                        <Menu.Item>{category.name}</Menu.Item>
                      </Link>
                    ))}
                  </Menu.SubMenu>
                </Menu>
              </Menu>
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>

            <Link href="/PcBuilder">
              <Button type="primary" className="mt-4">
                Pc Builder
              </Button>
            </Link>

            <Drawer
              title={"Walton Pc Store"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu mode="inline">
                <Menu mode="inline">
                  <Menu.SubMenu title="Categories">
                    {categories?.map((category) => (
                      <Link
                        key={category.categoryId}
                        href={`/categoryProducts/${category.categoryId}`}
                      >
                        <Menu.Item>{category.name}</Menu.Item>
                      </Link>
                    ))}
                  </Menu.SubMenu>
                </Menu>
              </Menu>
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
