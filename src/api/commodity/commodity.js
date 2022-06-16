import request from 'network/request';
let urlType = '/shop-commodity';

export function listCommodities(query) {
  return request({
    url: '/commodity/listCommodities',
    method: 'get',
    params: query,
    urlType
  });
}