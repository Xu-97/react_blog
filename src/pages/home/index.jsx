import React, { useEffect, useState } from 'react'
import { Card, Tag, Pagination, Input } from 'antd'
import { parseTime, setRandColor, debounde } from '@/utils/help'
import { useNavigate } from "react-router-dom"
import { getArticleData, getArticleByTitle, loadArticleSById } from '@/api/home'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { resetLabelId } from '../../store/modules/article'
import "./index.css"
const { Meta } = Card
const { Search } = Input

export default function Home() {
  const dispatch = useDispatch()
  const { labelId } = useSelector(state => state.article)
  const [articles, setArticles] = useState([])
  const [total, setTotal] = useState(0)
  const [params, setParams] = useState({ pageNum: 1, pageSize: 10 })
  const navigate = useNavigate()

  useEffect(() => {
    _getArticleData(params)
  }, [params])
  // 接口拿数据
  async function _getArticleData(params) {
    const result = await getArticleData(params)
    if (result.code === 200) {
      const { data, total } = result
      setArticles(data)
      setTotal(total)
    }
  }
  // 分页切换
  function handlePageChange(pageNum, pageSize) {
    console.log(pageNum, pageSize)
    setParams({ pageNum, pageSize })
  }
  //点击进详情
  const handleClick = async (id) => {
    navigate(`/detail?id=${id}`, { replace: true, })
  }

  // 点击搜索
  const onSearch = async (value) => {
    const result = await getArticleByTitle(value)
    if (result.code === 200) {
      const { data } = result
      setArticles(data)
      setTotal(data.length)
    }
  }

  // 点击搜索添加防抖
  const onSearchClick = (value) => {
    debounde(onSearch(value), 2000, true)
  }

  // 通过labelId晒选数据 其实可以在后端做的，这里写的很麻烦
  const _loadArticleSById = async (labelId) => {
    const result = await loadArticleSById(labelId)
    if (result.code === 200) {
      const { data } = result
      setArticles(data)
      setTotal(data.length)
      dispatch(resetLabelId())
    }
  }
  if (labelId) {
    _loadArticleSById(labelId)

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
              onClick={() => { handleClick(item.id) }}
              cover={
                <img
                  alt="找不到图片了"
                  src={item.cover_img}
                  style={{padding: '0 8px'}}
                />
              }
              title={item.title}
              key={item.id}
            >
              <Meta
                title={<Tag color={setRandColor()}>{item.label_name}</Tag>}
                description={parseTime(item.create_time)}
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
