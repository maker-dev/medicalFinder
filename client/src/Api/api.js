import axios from 'axios';
import config from './config'

const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': config.apiKey
    },
    validateStatus: function (status) {
        return status < 500;
    }
});

export default api;