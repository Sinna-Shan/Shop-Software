/* eslint-disable no-unused-vars */
import { Layout, Menu, MenuProps } from "antd";
import { Content, Footer} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { NavLink, Outlet,} from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number] & { link?: string };
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  link?:string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    link,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to="/dashboard">Dashboard</NavLink>, 1, <DashboardOutlined />),
  getItem(<NavLink to="/place-order">Place Order</NavLink>, 2, <ShoppingCartOutlined />),
  getItem(<NavLink to="/customers">Customers</NavLink>, 3, <UserOutlined />),
  getItem(<NavLink to="/items">Items</NavLink>, 4, <ShoppingOutlined />),
  getItem(<NavLink to="/orders">Orders</NavLink>, 5, <FileTextOutlined />),
];


function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="flex ">
      <Sider
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="fixed h-screen max-w-72"
      >
        <div className="text-white text-3xl text-center flex gap-2 justify-center py-8">
          <span>
            <ShopOutlined />
          </span>
          <span
            className={`${collapsed ? "hidden" : ""} duration-300 ease-linear`}
          >
            SHOP
          </span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="min-h-screen ml-[200px]">
        <Content>
          <Outlet />
        </Content>
        <Footer className="flex items-center justify-center w-full bg-slate-300">
          &copy; {new Date().getFullYear() > 2024 && "2024 -"}{" "}
          {new Date().getFullYear()} developed by Noah Shan
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
