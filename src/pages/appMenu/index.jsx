import { Menu } from 'antd'
import React,{ useState, useEffect} from 'react'
import {menu} from './menu'
import { useNavigate, useLocation } from "react-router-dom"
import "./index.css"

export default function AppMenu() {
  const navigate = useNavigate()
  const loation = useLocation()
  const { pathname } = loation 
  const [current, setCurrent] = useState('home')
  useEffect(() =>{
    if(pathname !== '/') {
    const key = pathname.replace(/\//g,'')
    setCurrent(key)
    }
  },[pathname])

  const handleClick = (e) => {
    const {key} = e
    key === 'home' ?  navigate('/') : navigate(key)
    setCurrent(key)
  }
  return (
    <>
    <Menu
    theme="lignt"
    mode="horizontal"
    selectedKeys={[current]}
    items={menu}
    onClick = { handleClick }
  />
  </>
  )
}
