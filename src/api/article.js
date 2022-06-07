import request from '@/utils/request'

/**
 * @description: 获取评论或评论回复
 * @param {*} params
 */
export function comments (params) {
  return request({
    url: '/v1_0/comments',
    params
  })
}

/**
 * @description: 对文章或者评论进行评论
 * @param {*} data
 */
export function commentsPost (data) {
  return request({
    url: '/v1_0/comments',
    method: 'post',
    data
  })
}
