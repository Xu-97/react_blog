import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { add, push, del } from '../../store/modules/counter'
import Comments from '../../components/Comments'
import AddComment from '../../components/AddComment'
import { getMessage } from '../../api/message'
import { Pagination } from 'antd'
import './index.less'

export default function Message() {
  const dispatch = useDispatch()
  const { count, list } = useSelector(state => state.counter)
   const { isRefresh } = useSelector(state => state.refresh)
  const [message, setMessage]= useState([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  const [refresh, setRefresh] = useState(false)
  // 请求数据
  useEffect (() => { 
    const _getMessage = async() => {
      const result = await getMessage(params)
      if (result.code === 200) {
        setMessage(result.data)
        setTotal(result.total)
      }
    }
    _getMessage()
  },[params, refresh])
  // 翻页
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 
  
  return (
    <div>
      <Comments  message={message} />
      <Pagination 
        current={params.pageNum} 
        total={total} 
        onChange={handlePageChange} 
        showTotal={(total) => `总共 ${total}条`}
      />
      <AddComment firstComment={true}  handleFefresh = {(refresh)=> {setRefresh(refresh)}}/>
      <span>{count}</span>
      <div onClick={() => dispatch(add())}><button>add</button></div>
      <ul>
        {
          list.map( (item,i) => (
            <li onClick={()=> dispatch(del(i))} key={item}>{item}</li>
          ))
        }
      </ul>
      <div><button onClick={() => dispatch(push())}>push</button></div>
      <span>{isRefresh? 'hh':'xx'}</span>
    </div>
  )
}
