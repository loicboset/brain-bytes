import axios from 'axios';

const getWithAxios = (url) => {
  return axios.get(url);
}

const csrfToken = document.querySelector("[name=csrf-token]").content;

axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

const postWithAxios = (apiEndPoint, body = {}) => {
  return axios.post(apiEndPoint, body);
}

const patchWithAxios = (apiEndPoint, body = {}) => {
  return axios.patch(apiEndPoint, body);
}

const deleteWithAxios = (apiEndPoint) => {
  return axios.delete(apiEndPoint);
}

export {
  postWithAxios,
  deleteWithAxios,
  getWithAxios,
  patchWithAxios
};
