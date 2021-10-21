import axios from 'axios'
import baseURL from './baseUrl';

const instance = axios.create({
    baseURL: baseURL + 'bookings',
    timeout: 1000,
  });

export default instance