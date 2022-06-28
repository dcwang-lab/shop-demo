import request from 'network/request';
import service from '@/network/service';

export function listCategories(query) {
  return request({
    url: '/category/listCategories',
    method: 'get',
    params: query,
    urlType: service.shopCommodity
  });
}