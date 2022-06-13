import request from 'network/request';

export function listCommodities(query) {
  return request({
    url: '/commodity/listCommodities',
    method: 'get',
    params: query
  });
}