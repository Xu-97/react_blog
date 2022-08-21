import request from '../utils/service'

export const getMessage = (params) => request({
  url:'/users',
  method:'GET',
  params
})

export const addMessage = (data) => request({
  url: '/users/add',
  method: 'POST',
  data
}) 