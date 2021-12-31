import axios from 'axios';

const baseURL = '';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  req => {
    return req;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  res => {
    return res;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default axiosInstance;
