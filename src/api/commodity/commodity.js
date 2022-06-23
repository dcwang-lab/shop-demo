import request from 'network/request';
import service from '@/network/service';
let serviceNmae = service.shopCommodity;

export function listCommodities(query) {
  return request({
    url: '/commodity/listCommodities',
    method: 'get',
    params: query,
    serviceNmae
  });
}