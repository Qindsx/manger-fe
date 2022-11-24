import request from '../utils/request';
import { User, ResponseType, CustomErrors } from '../types';
export type AuthLoginRequest = {
  username: string;
  password: string;
};
type UserResponse = ResponseType<'user', User>;

export const userRepository = {
  login(paylod: AuthLoginRequest): any {
    return request.post('/users/login', { data: paylod });
  },
};
