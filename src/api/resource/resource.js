import request from '@/network/request';
import service from '@/network/service';

export function listBanners(query) {
  return request({
    url: '/banner/listBanners',
    method: 'get',
    params: query,
    urlType: service.shopResource
  });
}