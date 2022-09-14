import request  from '../utils/service'

export const getFrinedLinks = () => request({
  url: '/links',
  method: 'GET',
}) 