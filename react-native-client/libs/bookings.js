import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://10.0.2.2:3000/bookings/',
    baseURL: 'http://192.168.1.3:3000/bookings/',
    timeout: 1000,
  });

export default instance