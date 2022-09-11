import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { getArticleData } from '../../api/home'
import "./index.css"

export default function Home() {
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    _getArticleData()
  },[])

  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      setArticles(result.data)
    }
  }

  const handleClick = async(id) => {
    navigate(`/detail?id=${id}`, {replace: true,})
  }

  return (
    <div>
      {
        articles.map(item => <li 
          onClick={() => {handleClick(item.id)}} 
          key={item.id}
          >{item.title}</li>)
      }
   
    </div>
  )
}
