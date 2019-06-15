

// const serverUrl = "http://localhost/api"
// const serverUrl = 'http://192.168.0.130:8080';
// const serverUrl = 'http://192.168.0.111:8080';
const serverUrl = 'https://isadream.cn';
// const serverUrl = 'http://localhost:8080'

const getParams = (url) => {
  const paramStr = url.split('?')[1];
  if (!paramStr) return {};
  const params = paramStr.split('&');
  const paramData = {};
  for (let i = 0; i < params.length; i++) {
    const kv = params[i].split('=');
    paramData[kv[0]] = kv[1];
  }
  return paramData;
};

const toLoginPage = () => {
  
  window.location.href = '#/user/loginType';
};
export { getParams, serverUrl, toLoginPage };
