import axios from "axios";

const instance = axios.create({
  baseURL: '/development',
  timeout: 5 * 1000
})

console.log(process.env.NODE_ENV)

// 请求拦截器, 请求之前需要做什么
instance.interceptors.request.use(config => {
  return config
})

const handleException = (code) => {
  switch (code) {
    case '403':
      break
    case '500':
      break
    case '502':
      break
    default:
      break
  }
}

// 请求响应，数据响应之后
instance.interceptors.response.use(config => {
  return config.data
},error => {
  // 对错误响应进行处理
  const {status} = error.response
  handleException(status+'')
  return Promise.reject(error)
})


export default instance

