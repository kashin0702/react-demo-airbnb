import axios from "axios";
import {BASE_URL, TIMEOUT} from './config'

class Http {
  constructor(baseURL, timeout) {
    // 创建axios实例
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 添加拦截器
    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      console.log('err===>', err)
      return err
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({method: 'get', ...config})
  }
  post(config) {
    return this.request({method: 'post', ...config})
  }
}
// eslint-disable-next-line
export default new Http(BASE_URL, TIMEOUT)