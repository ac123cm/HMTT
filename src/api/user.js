import request from '@/utils/request'

/**
 * @description: 用户认证（登录注册）
 * @param {*} data mobile, code
 */
export const authorizations = data => {
  return request({
    url: '/v1_0/authorizations',
    method: 'post',
    data
  })
}
