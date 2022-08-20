import React, { useState } from 'react'

export default function MessageItem(props) {
  const {item} = props
  const [showReplyForm, setShowReplyForm] = useState(false);
  // 点击回复做处理
  const hanleReplyForm = () => {
    setShowReplyForm(true);
  };
  // 作递归
  const recursiveMessage = (item.children || []).map((el, i) => {
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
      {
        !showReplyForm ? (<div className='reply' onClick={ hanleReplyForm }>回复</div>)
        :
        (<div className='reply-form'>

        </div>)
      }
    </div>
    <div style={{ marginLeft: '10px' }}>{recursiveMessage}</div>
    </div>
  )
}
