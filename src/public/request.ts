import axios, {type AxiosRequestConfig } from 'axios';

// 定义请求接口
interface RequestOptions {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any;
  params?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // 从环境变量中获取基础URL
  timeout: 15000, // 超时时间15秒
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可以在这里添加token等身份验证信息
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: any) => {
    const res = response.data;

    // 根据业务状态码判断请求是否成功
    if (res.code !== 0 && res.code !== 200) {
      // 可以在这里统一处理错误，比如提示错误信息
      console.error(`请求错误: ${res.message}`);

      // 特定错误码处理，例如未授权或token过期
      if (res.code === 401 || res.code === 403) {
        // 可以在这里执行登出操作
        localStorage.removeItem('token');
        // 可以在这里跳转到登录页面
      }

      return Promise.reject(new Error(res.message || '请求失败'));
    }

    return res;
  },
  (error) => {
    // 处理HTTP错误状态
    if (error.response) {
      const { status } = error.response;
      let message = '';

      switch (status) {
        case 400:
          message = '请求错误';
          break;
        case 401:
          message = '未授权，请登录';
          // 可以在这里执行登出操作
          localStorage.removeItem('token');
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = '请求地址不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `连接错误 ${status}`;
      }

      console.error(`HTTP错误: ${message}`);
    } else if (error.request) {
      // 请求已经发出，但没有收到响应
      console.error('网络错误，请检查您的网络连接');
    } else {
      // 请求配置有错误
      console.error(`请求错误: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

// 封装request方法
const request = <T = any>(options: RequestOptions): Promise<T> => {
  const { path, method, data, params, headers, timeout } = options;

  const config: AxiosRequestConfig = {
    url: path,
    method,
    headers,
    timeout,
  };

  // 根据请求方法处理参数
  if (method === 'GET' || method === 'DELETE') {
    config.params = params || data;
  } else {
    config.data = data;
    config.params = params;
  }

  return axiosInstance(config)
    .then((res: any) => res.data as T)
    .catch((error) => {
      throw error;
    });
};

export default request;
