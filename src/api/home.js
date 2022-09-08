import request  from '../utils/service'

export const getArticleData = (params) => request({
  url: '/article',
  method: 'GET',
  params
}) 

export const articleDetail = (id) => request({
  url: `/article/query?id=${id}`,
  method: 'GET',
})