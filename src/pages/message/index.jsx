import React, {useState, useEffect} from 'react'
import Comments from '../../components/Comments'
import AddComment from '../../components/AddComment'
import { getMessage } from '../../api/message'
import { Pagination } from 'antd'
import './index.less'

export default function Message() {
  const [message, setMessage]= useState([])
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  useEffect (() => { 
    const _getMessage = async() => {
      const result = await getMessage(params)
      if (result.code === 200) {
        console.log(result);
        setMessage(result.data)
      }
    }
    _getMessage()
  },[params])
  // 翻页
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
    // _getMessage()
  } 

  return (
    <div>
      <Comments  message = {message}/>
      <Pagination defaultCurrent={1} total={50} onChange = {handlePageChange} />
      <AddComment />
    </div>
  )
}
