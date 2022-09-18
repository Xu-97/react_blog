import { Layout,Affix } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppMenu from '../appMenu'
const { Header, Content, Footer } = Layout
const AppLayout = () => (
  <Layout className="layout">
    <Affix offsetTop={0}>
    <Header>
      <div className="logo" />
      <AppMenu/>
    </Header>
    </Affix>
    <Content className="main-content">
      <div className='container'>
            <Outlet/>    
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    皖ICP备2021012350号-1
    </Footer>
  </Layout>
);

export default AppLayout;