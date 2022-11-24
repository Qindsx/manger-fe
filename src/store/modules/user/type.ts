// 0: 用户角色 1:普通角色
export type RoleType = 0 | 1;
// 1:在职 2:离职 3:试用期
export type StateType = 0 | 1;
export interface UserState {
  userId?: string;
  username?: string;
  password?: string;
  token?: string;
  userEmail?: string;
  roleList?: string[];
  ruleId?: RoleType;
  deptID?: string[];
  state?: StateType;
}
