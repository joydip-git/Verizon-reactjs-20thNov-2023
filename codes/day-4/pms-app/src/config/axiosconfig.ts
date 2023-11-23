import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3003/',
    timeout: 2000,
    timeoutErrorMessage: 'request timed out'
})

export default axiosInstance

