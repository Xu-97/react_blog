import { Menu } from 'antd'
import React,{ useState } from 'react'
import routers from '../../router'
import { useNavigate } from "react-router-dom"

export default function AppMenu() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('home')
  const handleClick = (e) => {
    const {key} = e
    key === 'home' ?  navigate('/') : navigate(key)
    setCurrent(key)
  }
  return (
    <>
    <Menu
    theme="dark"
    mode="horizontal"
    selectedKeys={[current]}
    items={routers[0].children}
    onClick = { handleClick }
  />
  </>
  )
}
