import React, {useState, useEffect} from 'react'
import Comments from '../../components/Comments'
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
      <Comments  message = {message}/>
    </div>
  )
}
