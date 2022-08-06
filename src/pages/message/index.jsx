import React, {useState, useEffect} from 'react'
// import { Comment, List,  } from 'antd'
// import moment from 'moment'Tooltip
import { getMessage } from '../../api/message'

export default function Message() {
  const [message, setMessage]= useState([])
  useEffect (() => {
    _getMessage()
  },[])
  async function _getMessage() {
    const result = await getMessage({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setMessage(result.data)
      // console.log(message);
    }
  }
  return (
    <div>
      {
        message.map(item => 
          <li key={item.id}>{item.message}</li>
        )
      }
    </div>
  )
}
