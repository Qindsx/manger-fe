import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '../router';
const TOKEN_INVALID = 'Token认证失败，请重新登录';

// 创建axios 添加全局配置
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    // TODO : Token
    return config;
    // const heraders = config.headers.
    // if (heraders.Authorization) return heraders.Authorization; = "Bear Test";
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    const { status, data, statusText } = res;
    if (status === 200) {
      return data;
    } else if (status === 401) {
      ElMessage.error(TOKEN_INVALID);
      setTimeout(() => {
        router.push('/login');
      }, 1500);

      return Promise.reject(TOKEN_INVALID);
    }
  },
  (err) => {
    // window.$message.error('network error');

    return Promise.reject(err || TOKEN_INVALID);
  }
);

export default instance;
