import request  from '../utils/service'

// 网站日志
export const getWebLog = () => 
  request({
    url: '/weblog',
    method: 'GET'
  })

//关于我
export const getAboutMe = () => 
  request({
    url: '/my',
    method: 'GET'
  })
