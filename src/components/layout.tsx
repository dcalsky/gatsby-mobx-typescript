import {
  UserOutlined,
  LaptopOutlined,
  LoginOutlined, GithubOutlined
} from "@ant-design/icons"
import { Menu, Layout as ALayout, Button, Dropdown, Tooltip } from "antd"
import { Header, Content, Footer } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import SubMenu from "antd/lib/menu/SubMenu"
import { Link } from "gatsby"
import { observer } from "mobx-react-lite"
import React, {} from "react"
import { userStore } from "../stores"
import "./layout.less"

const AccountMenu = observer(() => {
  const onLogout = () => {
    userStore.logout()
  }
  return (
    <Menu>
      <Menu.Item onClick={onLogout} icon={<LoginOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  )
})

export default observer(({ children, path }: {
  children: React.ReactNode,
  path: string
}) => {
  const user = userStore.user
  if (!user) {
    return null
  }
  return (
    <ALayout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="site-layout-background"
      >
        <Menu
          mode="inline"
          theme="dark"
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
      <ALayout className="site-layout">
        <Header className="site-layout-sub-header-background">
          <div style={{ flex: "1 1 0" }} />
          <div className="header-menus">
            <Tooltip className="header-menu" placement="bottom" title={"Github"}>
              <Button href="https://github.com/dcalsky/gatsby-mobx-typescript" type="text" icon={<GithubOutlined />} />
            </Tooltip>
            <Dropdown
              className="header-menu"
              overlay={<AccountMenu />}
              placement="bottomCenter"
            >
              <Button icon={<UserOutlined />} type="text">
                {user.name}
              </Button>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 768
          }}
        >
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </ALayout>
    </ALayout>
  )
})
