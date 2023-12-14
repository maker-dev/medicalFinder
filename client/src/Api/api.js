import axios from 'axios';
import config from './config'

const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': config.apiKey
    }
});

export default api;