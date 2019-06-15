import axios from 'axios';
import { serverUrl } from '../pages/url';
import { createHashHistory } from 'history';

axios.defaults.withCredentials = true;

axios.interceptors.response.use(function (response) {
  // token 已过期，重定向到登录页面
  if (response.data.code == 9) {
    const history = createHashHistory();
    history.push('/user/loginType');
    return
  } else {
    return response
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export const randomCode = () => {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678asfnvhaiwjfgbkakfnoijwalnfaw4561385165546144545214151356141';
  let start = Math.floor(Math.random() * 106);
  let code = chars.slice(start, start + 3) + chars.slice(start + 4, start + 7) + new Date().getTime()
  return code
}

export const hashUrl = (api) => {
  let url = serverUrl + api + '?' + randomCode()
  return url
}

export async function shopLogin(params) {
  return axios({
    url: serverUrl + '/shop/shopUserLogin' + '?' + randomCode(),
    method: 'post',
    params: params,
  });
}

export async function adminLogin(params) {
  return axios({
    url: serverUrl + '/admin/adminLogin' + '?' + randomCode(),
    method: 'post',
    params: params,
  });
}

export async function agentLogin(params) {
  return axios({
    url: serverUrl + '/agent/agentLogin' + '?' + randomCode(),
    method: 'post',
    params: params,
  });
}

export async function postUserLogout() {
  return axios(serverUrl + '/index/logout'+ '?' + randomCode());
}

export async function getUserProfile() {
  return axios({
    url: serverUrl + '/index/profile' + '?' + randomCode(),
    method: 'get',
  });
}

export async function getDictType() {
  return axios({
    url: serverUrl + '/dicttable/getDictByType?' + randomCode(),
    method: 'get',
  });
}

export async function getServer(url, params) {
  return axios({
    url: serverUrl + url + '?' + randomCode(),
    method: 'get',
    params: params,
  });
}

export async function postServer(url, data) {
  return axios({
    url: serverUrl + url + '?' + randomCode(),
    method: 'post',
    data: data,
  });
}

export async function postParamServer(url, data) {
  return axios({
    url: serverUrl + url + '?' + randomCode(),
    method: 'post',
    params: data,
  });
}

export async function postFormServer(url, data) {
  return axios({
    url: serverUrl + url + '?' + randomCode(),
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export function downloadServer(url, params) {
  return axios({
    url: serverUrl + url + '?' + randomCode(),
    method: 'post',
    data: params,
    responseType: 'blob'
  })
}
