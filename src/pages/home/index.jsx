import React,{useEffect, useState} from 'react'
import { Card, Tag, Pagination} from 'antd'
import { parseTime, getRandColor } from '../../utils/help'
import { useNavigate } from "react-router-dom"
import { getArticleData } from '../../api/home'
import "./index.css"
const { Meta } = Card;

export default function Home() {
  const [articles, setArticles] = useState([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  const navigate = useNavigate()
  
  useEffect(() => {
    _getArticleData()
  },[])

  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      const {data, total} = result
      setArticles(data)
      setTotal(total)
    }
  }

  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 

  const handleClick = async(id) => {
    navigate(`/detail?id=${id}`, {replace: true,})
  }

  return (
    <div className='home'>
      <div className='article'>
      {
        articles.map(item => 
          <Card bordered={false}
          style={{ maxWidth: 400 }}
            onClick={() => {handleClick(item.id)}}
            cover={
              <img
                alt="找不到图片了"
                src={item.cover_img}
              />
            }
            title={item.title}
            key={item.id}
            >
            <Meta
              title={<Tag color={ getRandColor()}>{item.label_name}</Tag>}
              description={ parseTime(item.create_time)}
            />
          </Card>)
      }    
          </div>
        <Pagination 
            current={params.pageNum} 
            total={total} 
            onChange={handlePageChange} 
            showTotal={(total) => `总共 ${total}条`}
          />  
      </div>
  )
}
