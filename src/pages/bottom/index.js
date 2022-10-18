import React from 'react'

export default function Footer() {
 const handleClick = () => {
    window.open('https://beian.miit.gov.cn/')
  }
  return (
    <div style={{fontSize:'12px',color:'#AAA'} }>
      <p>Copyright © 2021 劲夫随笔</p>
      <p onClick={handleClick}><img src='https://cdn.heblogs.cn/beian.png' alt='' />皖ICP备2021012350号-1</p>
    </div>
  )
}
