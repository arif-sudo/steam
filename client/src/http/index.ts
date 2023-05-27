import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true, //cookie will attach automatically
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.request.use((config) => {
    return config
}, async (err) => {
    const originalRequest = err.config
    if(err.response.status === 401 && err.config && !err.config._isRetry ){
        originalRequest._isRetry = true
       try {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
         localStorage.setItem('token', response.data.accessToken)
         return $api.request(originalRequest)
       } catch (error) {
            console.log(error)
       }
    }
    throw Error
} )

export default $api;