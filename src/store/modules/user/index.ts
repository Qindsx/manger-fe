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
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state };
    },
  },
  actions: {
    saveUeerInfo(partial: Partial<UserState>) {
      this.$patch(partial);
      console.log(partial);
    },
  },
});
