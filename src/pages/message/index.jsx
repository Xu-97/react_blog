import React, {useState, useEffect} from 'react'
import Comments from '../../components/Comments'
import AddComment from '../../components/AddComment'
import { getMessage } from '../../api/message'
import { Pagination } from 'antd'
import './index.less'

export default function Message() {
  const [message, setMessage]= useState([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  useEffect (() => { 
    const _getMessage = async() => {
      const result = await getMessage(params)
      if (result.code === 200) {
        setMessage(result.data)
        setTotal(result.total)
      }
    }
    _getMessage()
  },[params])
  // 翻页
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 

  return (
    <div>
      <Comments  message={message}/>
      <Pagination 
        current={params.pageNum} 
        total={total} 
        onChange={handlePageChange} 
        showTotal={(total) => `总共 ${total}条`}
      />
      <AddComment firstComment={true}/>
    </div>
  )
}
