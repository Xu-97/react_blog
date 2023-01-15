import { Layout, Affix, Col, Row } from 'antd'
// import { SwitchTransition, CSSTransition } from "react-transition-group";
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import "./index.less"
import AppMenu from '../appMenu'
import LeftBar from '../leftBar'
import Bottom from '../bottom'
import DrawerMenu from '../drawerMenu'
//import { menu } from '../appMenu/menu'
const { Header, Content, Footer } = Layout
const AppLayout = () => {
  const location = useLocation()
  // const { nodeRef } = menu.find(item => item.path === location.pathname) ?? {}
  console.log(location);
  return (
    <Layout className="layout">
      <Affix offsetTop={0}>
        <Header>
          <div className="logo" />
          <AppMenu />
          <DrawerMenu />
        </Header>
      </Affix>
      <Content className="main-content">
        <Row>
          <Col xs={24} sm={24} md={24} lg={18} xl={19} className="flex-center">
            {/* <SwitchTransition mode="out-in">
              <CSSTransition
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                key={location}
                timeout={1000}
                classNames="fade"
                nodeRef={nodeRef}
                unmountOnExit
                mountOnEnter
                exit={false}
              >
              </CSSTransition>
            </SwitchTransition> */}
            <Outlet />
          </Col>
          <Col xs={0} sm={0} md={0} lg={4} xl={5}>
            <Affix offsetTop={70}>
              <LeftBar />
            </Affix>
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <Bottom />
      </Footer>
    </Layout>
  )
}

export default AppLayout;