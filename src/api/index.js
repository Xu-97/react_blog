import request  from '../utils/service'

export const getWebLog = () => 
  request({
    url: '/weblog',
    method: 'GET'
  })