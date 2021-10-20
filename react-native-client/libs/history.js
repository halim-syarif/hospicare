import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://10.0.2.2:3000/history/',
    // baseURL: 'http://192.168.1.3:3000/history/',
    baseURL: 'http://192.168.100.17:3000/history/',
    timeout: 1000,
  });

export default instance