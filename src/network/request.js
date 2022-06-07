import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

// 创建axios实例
const service = axios.create({
  // 请求url公共部分
  baseURL: 'http://127.0.0.1/shop-commodity',
  // baseURL: 'http://127.0.0.1:8070',
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
service.interceptors.response.use(response => {
  console.log(111);
  console.log(response);
  return response.data;
}, error => {
  console.log(error);
});

export default service;