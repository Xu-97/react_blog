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
      <Content className="main-content">
         <Row>
           <Col xs={24} sm={24} md={24} lg={18} xl={19} className="flex-center">
             <Outlet/>  
           </Col>
           <Col xs={0} sm={0} md={0} lg={4} xl={5}>
           <Affix offsetTop={70}>
             <LeftBar/>
             </Affix>
           </Col>
         </Row>      
        </Content>
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