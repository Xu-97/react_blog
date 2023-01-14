import React from 'react'
import { Empty } from 'antd';
import src from '@/assets/images/404.svg'
export default function NotFound() {
  return (
    <>
      <Empty
        style={{
          height: '100vh',
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: ' center',
          alignItems: 'center'
        }}
        image={src}
        description="你访问的资源不存在"
        imageStyle={{ minHeight: 200, width: '100%' }} />
    </>
  )
}
