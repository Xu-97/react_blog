import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { useNavigate } from "react-router-dom"
import {menu} from './menu'
import "./index.css"

export default function DrawerMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const handleClick = (path) => {
    navigate(path)
    setOpen(false)
  }
  return (
    <div className='drawer-menu'>

      <div className='phone-header'>
        <Button type="primary" onClick={showDrawer}>
          Menu
        </Button>
        <div className='article-title'><span>劲夫随笔</span></div>
      </div>
      <Drawer  width={300} title="菜单" placement="left" onClose={onClose} open={open}>
        {
          menu.map(i => <div onClick={() => handleClick(i.path)} className='menu-item' key={i.key}>{i.label}</div>)
        }
      </Drawer>
    </div>
  )
}
