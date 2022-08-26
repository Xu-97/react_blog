import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { add, push, del } from '../../store/modules/counter'
import Comments from '../../components/Comments'
import AddComment from '../../components/AddComment'
import { loadComment } from '../../store/modules/comment'
import { Pagination } from 'antd'
import './index.less'

export default function Message() {
  const dispatch = useDispatch()
  const { count, list } = useSelector(state => state.counter)
  const { data, total,lister } = useSelector(state => state.comment)
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  // 请求数据
  useEffect (() => { 
    dispatch(loadComment(params))
  },[params,lister,dispatch])
  // 翻页
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 
  return (
    <div>
      <Comments  message={data} />
      <Pagination 
        current={params.pageNum} 
        total={total} 
        onChange={handlePageChange} 
        showTotal={(total) => `总共 ${total}条`}
      />
      <AddComment firstComment={true} />
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
    </div>
  )
}
