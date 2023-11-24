import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: "127.0.0.1:3005"
})

export default axiosClient