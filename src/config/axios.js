/* eslint-disable */
import {
  baseUrl
} from './env'
import axios from 'axios'
import {Message} from 'element-ui'
import router from '@/router'
// 配置项通过一定的规则合并，request config > instance.defaults > 系统默认，优先级高的覆盖优先级低的。
// const instance = axios.create({
//     baseURL: baseUrl,
//     timeout: 30000

// });

axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// let instance = axios.create({
//   responseType: 'blob' // 返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
// })
// instance.interceptors.request.use(function (config) {
//   let user = JSON.parse(window.sessionStorage.getItem('access-user'));
//   config.headers.common['token'] = user.token
//   return config;
// }, function (error) {
//   // Do something with request error
//   console.info("error: ");
//   console.info(error);
//   return Promise.reject(error);
// })
// 导出
// export const EXPORT = (url, params) => {
//   return instance({
//     method: 'post',
//     url: url,
//     params: params
//   }).then(res => {
//     return Promise.resolve(res.data)
//   })
// }

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
  // Do something before request is sent
  config.data = config.data
  // if (config.url.indexOf('export/sku') > 0) {
  //   config.responseType='blob'
  //   console.log('---'+config.data)
  // }
  config.headers = {
    // 'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  // Do something with request error
  console.log('err22' + error)
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
  // Do something with response data
  // if (response.config.url.indexOf('export/sku') > 0) {
  //   response.config.responseType='blob'
  //   console.log(response)
  // }
  return response
}, error => {
  console.log(error) // for debug
  if (error.response.status === '401') {
    router.replace('/login')
    return
  }

  Message({
    message: error.message,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(error)
})

export default axios
