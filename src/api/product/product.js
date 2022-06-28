import request from 'network/request';
import service from '@/network/service';

export function listCommodities(query) {
  return request({
    url: '/commodity/listCommodities',
    method: 'get',
    params: query,
    urlType: service.shopProduct
  });
}