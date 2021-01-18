import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://backend.sbbabyshop.com',
  timeout: 300000,
  headers: {
    'access-control-allow-origin': '*',
  },
});

export default instance;
