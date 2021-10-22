import axios from 'axios'

const appApi = axios.create({
    // baseURL: 'https://hospicare-server.herokuapp.com/',
    baseURL: 'http://localhost:3000'
})

export default appApi