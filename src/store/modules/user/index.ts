import { defineStore } from 'pinia';
import { setToken, clearToken } from '../../../utils/auth';
import { UserState } from './type';

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userId: undefined,
    username: undefined,
    password: undefined,
    token: undefined,
    userEmail: undefined,
    roleList: undefined,
    ruleId: undefined,
    deptID: undefined,
    state: undefined,
    createTime: undefined,
    lastUpdateTime: undefined,
    _id: undefined,
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state };
    },
  },
  actions: {
    // 保存用户信息
    saveUserInfo(partial: Partial<UserState>) {
      this.$patch(partial);
      console.log(partial);
    },
    // 清除用户信息
    clearUserUnfo() {
      this.$reset();
    },
    // 保存
  },
});
