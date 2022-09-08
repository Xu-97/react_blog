import React,{useEffect, useState} from 'react'
import { getArticleData, articleDetail } from '../../api/home'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [detail, setDetail] = useState('')

  useEffect(() => {
    _getArticleData()
  },[])
  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setArticles(result.data)
    }
  }
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
  const handleClick = async(i) => {
    const result = await articleDetail(i.id)
    if(result.code === 200) {
      setDetail(result.data[0].content)
    }
  }
  return (
    <div>
      {
        articles.map(item => <li 
          onClick={() => {handleClick(item)}} 
          key={item.id}
          >{item.title}</li>)
      }
      <div className='content' dangerouslySetInnerHTML={{__html: htmlUnEscape(detail)}}>
      </div>
    </div>
  )
}
