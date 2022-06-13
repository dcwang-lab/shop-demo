import request from 'network/request';

export function listCategories(query) {
  return request({
    url: '/category/listCategories',
    method: 'get',
    params: query
  });
}