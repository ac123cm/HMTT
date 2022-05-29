// auth:权限
const TOKEN = 'token'

/**
 * @description: 取出token
 * @return token对象
 */
export function getToken () {
  return JSON.parse(localStorage.getItem(TOKEN))
}

/**
 * @description: 设置token
 */
export function setToken (obj) {
  localStorage.setItem(TOKEN, JSON.stringify(obj))
}

export function removeToken () {
  localStorage.removeItem(TOKEN)
}
