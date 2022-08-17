import React, {useState, useEffect} from 'react'
// import { Comment, List,  } from 'antd'
// import moment from 'moment'Tooltip
import Comments from '../../components/Comments/Comments' //评论组件
import MessageItem from '../../components/MessageItem'
import { getMessage } from '../../api/message'
import './index.less'

export default function Message() {
  const [message, setMessage]= useState([])
  useEffect (() => {
    _getMessage()
  },[])
  async function _getMessage() {
    const result = await getMessage({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setMessage(result.data)
    }
  }
  return (
    <div>
      <div style={{display:'none'}}>
      <Comments message={message}></Comments>
      </div>
      <br/>
      {
        message.map((item, index) => {
          return (
          <MessageItem
            item = {item}
            key = {index}
          />
          )
        })
      }
    </div>
  )
}
