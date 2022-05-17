import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const service = axios.create({
  // 请求url公共部分
  baseURL: '',
  // 超时时间
  timeout: 10000
});

// request拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error);
  Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(res => {
  return res.data;
}, error => {
  console.log(error);
});

export default service;