import request from 'network/request';
let urlType = '/shop-commodity';

export function listCategories(query) {
  return request({
    url: '/category/listCategories',
    method: 'get',
    params: query,
    urlType
  });
}