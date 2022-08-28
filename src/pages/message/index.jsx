import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Comments from '../../components/Comments'
import AddComment from '../../components/AddComment'
import { loadComment } from '../../store/modules/comment'
import { Pagination } from 'antd'
import './index.less'

export default function Message() {
  const dispatch = useDispatch()
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
      <div className='send-word'>
        <h3>如果对本站有兴趣或者idea, 请在下方发表留言</h3>
      </div>
      <AddComment firstComment={true} />      
      <Comments  message={data} />
      <Pagination 
        current={params.pageNum} 
        total={total} 
        onChange={handlePageChange} 
        showTotal={(total) => `总共 ${total}条`}
      />
    </div>
  )
}
