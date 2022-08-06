import request from '../utils/service'

export const getMessage = (params) => request({
  url:'/users',
  method:'GET',
  params
})