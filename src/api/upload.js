import request from '../utils/service'

// 详情页
export const getFileByUpload = (id) => request({
  url: `/upload/?id=${id}`,
  method: 'GET',
})