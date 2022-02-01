import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3010/api/',
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config
    },
    error => {
        return Promise.reject(error)
    })

axiosInstance.interceptors.response.use(
    response => {
        let data = response.data
        return Promise.resolve(data)
    },
    error => {
        let data = error.response.data
        return Promise.reject(data)
    })

export default axiosInstance