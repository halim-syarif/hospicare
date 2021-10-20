import axios from "axios"

const instance = axios.create({
    baseURL: "http://192.168.100.17:3000/medicines"
})

export default instance