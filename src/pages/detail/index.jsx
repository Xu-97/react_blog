import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { parseTime } from '../../utils/help'
import HightLight from '../../components/HightLight'
import { articleDetail } from '../../api/home'
import "./index.css"

export default function Detail() {
  const [params] = useSearchParams()
  const id = params.get('id')
  const [detail, setDetail] = useState({})

  useEffect( () => {
    async function _articleDetail() {
      const result = await articleDetail(id)
      if(result.code === 200) {
        setDetail((result.data[0]))
      }
    }
    _articleDetail()
  }, [id])

  return (
    <div className='editor-content-view'>
      <div className='title'>
        {detail.title}
      </div>
      <div className='info-desc'>
        <span>标签： {detail.label_name}</span>
        <span> 更新时间：{parseTime(detail.update_time)}</span>
      </div>
      <HightLight code={ detail.content } />
    </div>
  )
}
