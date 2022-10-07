import React,{useEffect, useState} from 'react'
import { Avatar, List, Pagination } from 'antd'
import "./index.css"
import { parseTime } from '../../utils/help'
import { getWebLog } from '../../api/index'

export default function WebLog() {
  const [moods, setMoods] = useState([])
  const [params, setParams] = useState({pageNum:1, pageSize:10})
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const _getWebLog = async() => {
      const result = await getWebLog(params) 
      if(result.code === 200) {
        const {data, total} = result
        setMoods(data)
        setTotal(total)
      }
    }
    _getWebLog()
  },[params])

  // 分页切换
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 

  return (
  <div className='web-log'>
     <List
       itemLayout="horizontal"
       dataSource={moods}
       renderItem={(item) => (
       <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://cdn.xrblogs.cn/avatar.jpg" />}
          title={<div><span className='head-name'>博主</span><span className='create-time'>{parseTime(item.create_time)}</span></div>}
          description={item.log}
        />
      </List.Item>
      )}
    />
      <Pagination 
      style={{marginTop:'20px'}}
      current={params.pageNum} 
      total={total} 
      onChange={handlePageChange} 
      showTotal={(total) => `总共 ${total}条`}
      />  
  </div>
  )
}
