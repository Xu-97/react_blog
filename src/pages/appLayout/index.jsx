import { Layout, Affix, Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.less"
import AppMenu from '../appMenu'
import LeftBar from '../leftBar'
import Bottom from '../bottom'
const { Header, Content, Footer } = Layout
const AppLayout = () => (
  <Layout className="layout">
    <Affix offsetTop={0}>
    <Header>
      <div className="logo" />
      <AppMenu/>
    </Header>
    </Affix>
    <div className='container'>
      <Content className="main-content">
         <Row>
           <Col span={18} className="flex-center">
             <Outlet/>  
           </Col>
           <Col span={6}>
           <Affix offsetTop={70}>
             <LeftBar/>
             </Affix>
           </Col>
         </Row>      
        </Content>
    </div>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <Bottom/>
    </Footer>
  </Layout>
);

export default AppLayout;