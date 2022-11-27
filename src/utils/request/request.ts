// import axios from 'axios';
// import { ElMessage } from 'element-plus';
// import router from '../../router';
// const TOKEN_INVALID = 'Token认证失败，请重新登录';

// // 创建axios 添加全局配置
// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:4523/m1/1977336-0-default', //本地MOCK
//   // baseURL: 'http://localhost:3001/api',
//   timeout: 10000,
// });

// // 请求拦截
// instance.interceptors.request.use(
//   (config) => {
//     // TODO : Token
//     return config;
//     // const heraders = config.headers.
//     // if (heraders.Authorization) return heraders.Authorization; = "Bear Test";
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// // 响应拦截
// instance.interceptors.response.use(
//   (res) => {
//     const { status, data, statusText } = res;
//     if (status === 200) {
//       return data;
//     } else if (status === 401) {
//       ElMessage.error(TOKEN_INVALID);
//       setTimeout(() => {
//         router.push('/login');
//       }, 1500);

//       return Promise.reject(TOKEN_INVALID);
//     }
//   },
//   (err) => {
//     // window.$message.error('network error');

//     return Promise.reject(err || TOKEN_INVALID);
//   }
// );

// export default instance;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showMessage } from './status';
import { IResponse } from './type';
import { getToken, TokenPrefix } from '../auth';

// 创建axios 添加全局配置
const instance = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/1977336-0-default', //本地MOCK
  baseURL: 'http://localhost:3001/api',
  timeout: 10000,
  withCredentials: false, // 表示跨域请求时是否需要使用凭证
  headers: {
    post: { 'Access-Control-Allow-Origin-Type': '*' }, // 允许跨域
  },
});

// axios实例拦截响应
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.headers.authorization) {
    //   localStorage.setItem('app_token', response.headers.authorization)
    // } else if (response.data && response.data.token) {
    //   localStorage.setItem('app_token', response.data.token)
    // }

    if (response.status === 200) {
      return response;
    }
    showMessage(response.status);
    return response;
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);
      return Promise.reject(response.data);
    }
    showMessage('网络连接异常,请稍后再试!');
  }
);

// axios实例拦截请求
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers!.Authorization = `${TokenPrefix}${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config;
  return new Promise((resolve) => {
    instance
      .request<any, AxiosResponse<IResponse>>(conf)
      .then((res: AxiosResponse<IResponse>) => {
        // resolve(res as unknown as Promise<T>);
        const result = res.data;
        resolve(result as T);
      });
  });
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' });
}

export default request;
export type { AxiosInstance, AxiosResponse };
