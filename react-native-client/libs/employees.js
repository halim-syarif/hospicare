import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:3000/employees'
    baseURL: 'http://192.168.1.3:3000/employees'
})