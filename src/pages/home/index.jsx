import React,{useEffect, useState} from 'react'
import { Card, Tag, Pagination, Input } from 'antd'
import { parseTime, getRandColor, debounde } from '../../utils/help'
import { useNavigate} from "react-router-dom"
import { getArticleData, getArticleByTitle } from '../../api/home'
import "./index.css"
const { Meta } = Card
const { Search } = Input

export default function Home() {
  const [articles, setArticles] = useState([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({pageNum:1,pageSize:10})
  const navigate = useNavigate()
  
  useEffect(() => {
    _getArticleData()
  },[])
  // 接口拿数据
  async function _getArticleData() {
    const result = await getArticleData({pageNum:1,pageSize:10})
    if (result.code === 200) {
      const {data, total} = result
      setArticles(data)
      setTotal(total)
    }
  }
  // 分页切换
  function handlePageChange (pageNum, pageSize) {
    setParams({pageNum,pageSize})
  } 
  //点击进详情
  const handleClick = async(id) => {
    navigate(`/detail?id=${id}`, {replace: true,})
  }

  // 点击搜索
  const onSearch = async(value) => {
    const result = await getArticleByTitle(value)
    if (result.code === 200) {
      const {data} = result
      setArticles(data)
      setTotal(data.length)
    }
  }

  // 点击搜索添加防抖
  const onSearchClick = (value) => {
    debounde(onSearch(value), 2000, true)
  } 

  return (
    <div className='home'>
      <div className='search-bar'>
        <Search allowClear style={{ width: 400 }} placeholder="请输入文章标题关键字" onSearch={onSearchClick} enterButton />
      </div>
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
