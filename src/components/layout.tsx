import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons"
import { Menu, Breadcrumb, Layout as ALayout } from "antd"
import { Header, Content } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import SubMenu from "antd/lib/menu/SubMenu"
import { Link, PageProps } from "gatsby"
import React from "react"

export default function Layout({ children, path }: PageProps) {
  return (
    <ALayout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <ALayout>
        <Sider className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[path]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="/">
                <Link to="/">Index Page</Link>
              </Menu.Item>
              <Menu.Item key="/list/">
                <Link to="/list/">List Page</Link>
              </Menu.Item>
              <Menu.Item key="/clear/">
                <Link to="/clear">Clear Page</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <ALayout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 768,
            }}
          >
            {children}
          </Content>
        </ALayout>
      </ALayout>
    </ALayout>
  )
}
