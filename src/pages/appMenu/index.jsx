import { Menu } from 'antd'
import React from 'react'
import {menu} from './menu'
import { useNavigate, useLocation } from "react-router-dom"
import "./index.css"

export default function AppMenu() {
  const navigate = useNavigate()
  const loation = useLocation()
  const { pathname } = loation 

  const handleClick = (e) => {
    navigate(e.key)
  }
  return (
    <>
    <Menu
    theme="lignt"
    mode="horizontal"
    selectedKeys={[pathname]}
    items={menu}
    onClick = { handleClick }
  />
  </>
  )
}
