import React,{useEffect, useState} from 'react'
import { Avatar, List } from 'antd'
import "./index.css"
import { parseTime } from '../../utils/help'
import { getWebLog } from '../../api/index'

export default function WebLog() {
  const [moods, setMoods] = useState([])

  useEffect(() => {
    const _getWebLog = async() => {
      const result = await getWebLog() 
      if(result.code === 200) {
        const {data} = result
        setMoods(data)
      }
    }
    _getWebLog()
  },[])


  return (
  <div className='web-log'>
     <List
       itemLayout="horizontal"
       dataSource={moods}
       renderItem={(item) => (
       <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="http://cdn.xrblogs.cn/avatar.jpg" />}
          title={<div><span className='head-name'>博主</span><span className='create-time'>{parseTime(item.create_time)}</span></div>}
          description={item.log}
        />
      </List.Item>
      )}
    />
  </div>
  )
}
