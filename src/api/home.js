import request  from '../utils/service'

// 获取文章列表
export const getArticleData = (params) => request({
  url: '/article',
  method: 'GET',
  params
}) 

// 详情页
export const articleDetail = (id) => request({
  url: `/article/query?id=${id}`,
  method: 'GET',
})

// 文章标题关键字搜索
export const getArticleByTitle = (title) => request({
  url: `/article/queryTitle?title=${title}`,
  method: 'GET'
})
