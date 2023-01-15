import request  from '../utils/service'

// 网站日志
export const getWebLog = (data) => 
  request({
    url: '/weblog',
    method: 'GET',
    params: data
  })

//关于我
export const getAboutMe = () => 
  request({
    url: '/my',
    method: 'GET'
  })

  // 获取网站统计
export const querySiteInfo = () =>
request({
  url:'/common/statistics',
  method: 'GET'
})

// 获取所有标签
export const getAllTags = () => 
request({
  url: '/label',
  method: 'GET'
})


// 获取客户端信息

export const getClientInfo = () => 
request({
  url: '/common/ip',
  method: 'get'
})