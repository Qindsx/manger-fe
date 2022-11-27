// import request from '../utils/request/request';
import { get, post } from '../utils/request/request';
import { User, ResponseType, CustomErrors } from '../types';
export type AuthLoginRequest = {
  username: string;
  password: string;
};
type UserResponse = ResponseType<'user', User>;

enum URL {
  login = '/users/login',
  messageNum = '/users/messageNum',
}

// export const userRepository = {
//   login(paylod: AuthLoginRequest): any {
//     return request.post('/users/login', { data: paylod });
//   },
//   messageNum() {
//     return request.get('/users/messageNum');
//   },
// };

const login = async (paylod: AuthLoginRequest) =>
  post<any>({ url: URL.login, data: paylod });
const getMessageNum = async () =>
  get({
    url: URL.messageNum,
  });
export { login, getMessageNum };
