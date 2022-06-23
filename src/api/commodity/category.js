import request from 'network/request';
import service from '@/network/service';
let serviceNmae = service.shopCommodity;

export function listCategories(query) {
  return request({
    url: '/category/listCategories',
    method: 'get',
    params: query,
    serviceNmae
  });
}