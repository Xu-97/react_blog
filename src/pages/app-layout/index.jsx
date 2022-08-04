import { Layout, Menu } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import routers from '../../router'
import "./index.less"
const { Header, Content, Footer } = Layout
const AppLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={routers[0].children}
      />
    </Header>
    <Content className="main-content">
      <Outlet/>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default AppLayout;