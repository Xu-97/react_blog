import request  from '../utils/service'

export const getArticleData = (params) => request({
  url: '/article',
  method: 'GET',
  params
}) 