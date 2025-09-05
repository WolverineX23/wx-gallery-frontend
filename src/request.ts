import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建 Axios 实例  https://axios-http.com/docs/instance
const myAxios = axios.create({
  baseURL: 'http://localhost:8101',   // 后端路由
  // baseURL: "",    // 若前端配置代理解决 CORS, 则 baseURL 应为前端地址或留空
  timeout: 60000,   // ms
  withCredentials: true   // true：支持发请求时携带 Cookie
});

// Axios 拦截 https://axios-http.com/docs/interceptors
// 全局请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  // { synchronous: true, runWhen: () => /* This function returns true */}
);

// 全局响应拦截器
axios.interceptors.response.use(
  function(response) {
    const { data } = response;
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息的请求，并且用户目前不在登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/get/login") &&
        !window.location.pathname.includes("/user/login")
      ) {
        message.warning("请先登录");
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default myAxios;
