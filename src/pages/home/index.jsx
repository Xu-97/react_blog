import React,{useEffect, useState} from 'react'
import { getArticleData } from '../../api/home'

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    _getArticleData()
  },[])
  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setArticles(result.data)
    }
  }
  return (
    <div>
      home
      {
        articles.map(item => <li key={item.id}>{item.title}</li>)
      }
    </div>
  )
}
