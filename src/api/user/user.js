import request from 'network/request';
import service from '@/network/service';

export function getUser(id) {
  return request({
    url: '/user/getUser/' + id,
    method: 'get',
    urlType: service.shopUser
  });
}