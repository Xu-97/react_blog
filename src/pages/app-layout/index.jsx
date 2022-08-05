import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppMenu from '../app-menu'
const { Header, Content, Footer } = Layout
const AppLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <AppMenu/>
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