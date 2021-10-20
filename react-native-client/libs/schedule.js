import axios from 'axios'
import baseURL from './baseUrl';

const instance = axios.create({
    baseURL: baseURL + 'schedules',
    timeout: 1000,
  });

export default instance