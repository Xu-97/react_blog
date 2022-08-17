import React from 'react'

export default function MessageItem(props) {
  console.log(props);
  const {item} = props
  // 作递归
  const nestedMessage = (item.children || []).map((el, i) => {
    return (
      <MessageItem
      item = {el}
      key = {i}
      />
    )
  })
  return (
    <div>
    <div className='message-item' style={{border:'1px solid #cf0000'}}>
      <div>id:{item.id}</div>
      <div>message:{item.message}</div>
    </div>
    <div style={{ marginLeft: '10px' }}>{nestedMessage}</div>
    </div>
  )
}
