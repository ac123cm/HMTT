import request from '@/utils/request'

/**
 * @description: 获取用户的频道
 */
export const userChannel = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}

/**
 * @description: 获取文章新闻推荐
 * @param {*} params: channel_id, timestamp
 */
export const articles = params => {
  return request({
    url: '/v1_0/articles',
    params
  })
}
