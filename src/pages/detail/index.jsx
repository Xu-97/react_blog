import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { parseTime } from '../../utils/help'
import HighLight from '../../components/HighLight'
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


  function htmlUnEscape(str) { //反转义
    var unescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '<br/>': '\n'
      },
      reEscapedHtml = new RegExp(/&(?:amp|lt|gt|quot|#39);/g);
    return (str && reEscapedHtml.test(str)) ? str.replace(reEscapedHtml, function(entity) {
      return unescapes[entity];
    }) : (str || '')
  }

  return (
    <div className='editor-content-view'>
      <div className='title'>
        {detail.title}
      </div>
      <div className='info-desc'>
        <span>标签： {detail.label_name}</span>
        <span> 更新时间：{parseTime(detail.update_time)}</span>
      </div>
      <HighLight code={ htmlUnEscape(detail.content) } />
    </div>
  )
}
