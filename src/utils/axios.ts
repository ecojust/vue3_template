import axios from "axios";

const globalConfig = window.config;
const host = globalConfig.api;
// 格式化时间
function calctime() {
  var now = new Date();
  now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
  var year = now.getFullYear(); //得到年份
  var month = now.getMonth() + 1; //得到月份
  var day = now.getDate(); //得到日期
  var hour = now.getHours(); //得到小时
  var min = now.getMinutes(); //得到分钟
  var sec = now.getSeconds(); //得到秒
  return year + "-" + (month > 9 ? month : "0" + month) + "-" + day;
}

const xhr = axios.create({
  xsrfCookieName: "xsrf-token",
});

//请求拦截器
xhr.interceptors.request.use(
  function (config: any) {
    config = setConfig(config);
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

//响应拦截器
xhr.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (res: any) {
    return Promise.reject({
      messageCode: "sysError",
      res: res,
    });
  }
);

//设置请求头相关配置
function setConfig(config: any) {
  const url = config.url;
  const storage = window.localStorage;
  const token = localStorage.getItem("token");
  config.headers = {
    Authorization: "Bearer " + token || "",
  };
  if (~url.indexOf("trusted")) {
  } else {
    config.url = host + url;
  }
  return config;
}

export function get(url: any, params: any) {
  const time = {
    time: calctime(),
  };
  return xhr({
    method: "GET",
    url: url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // params: Object.assign(params || {}, time)
    params: params,
  });
}

//query string parameters
export function postQuery(url: string, params: any) {
  const time = {
    time: calctime(),
  };
  return xhr({
    method: "POST",
    url: url,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // params: Object.assign(params || {}, time)
    params: params,
  });
}

//request payload
export function postPayload(url: string, data: any) {
  const time = {
    time: calctime(),
  };
  return xhr({
    method: "POST",
    url: url,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: data,
  });
}

//request payload
export function postBlob(url: string, data: any) {
  const time = {
    time: calctime(),
  };
  return xhr({
    method: "POST",
    url: url,
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: data,
    responseType: "blob",
  });
}

//form data
export function postFormdata(url: string, data: any) {
  return xhr({
    method: "POST",
    url: url,
    headers: { "Content-Type": "multipart/form-data" },
    data: data,
  });
}

export function put(url: string, data: any) {
  return xhr({
    method: "PUT",
    url: url,
    headers: { "Content-Type": "application/json" },
    data: data,
  });
}

export function del(url: string, data: any) {
  return xhr({
    method: "DELETE",
    url: url,
    headers: { "Content-Type": "Content-Type: application/json" },
    data: data,
  });
}
