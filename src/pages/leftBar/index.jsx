import React from 'react'
import { Col, Row, } from 'antd'
import "./index.css"

export default function LeftBar() {
  return (
    <div className='left-bar'>
      <Col>
        <Row span={4}>000001</Row>
        <Row span={4}>000002</Row>
        <Row span={4}>000003</Row>
      </Col> 
    </div>
  )
}
