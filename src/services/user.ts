import { http } from '../http/request'

/**
 * 用户接口相关的类型定义描述
 */
export interface UserInfo {
  id: string
  username: string
  nickname: string
  avatar: string
}

/**
 * 用户相关业务接口 (Service 层)
 * 极简调用，直达业务数据
 */
export const userService = {
  /**
   * 获取当前登录用户信息
   */
  getUserInfo: () => http.get<UserInfo>('user/info'),

  /**
   * 更新用户个人资料
   */
  updateProfile: (data: Partial<UserInfo>) => http.post<void>('user/update', data),
}
