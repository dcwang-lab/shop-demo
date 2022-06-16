import request from 'network/request';
let urlType = '/shop-user';

export function getUser(id) {
  return request({
    url: '/user/getUser/' + id,
    method: 'get',
    urlType
  });
}