import axios from 'axios';
import { API_BASE_URL } from '@/config';

const loginConfig = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}
export const LoginAPIInstance = axios.create(loginConfig);

const defaultConfig = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'authorization': ''
    }
}

// const uploadConfig = {
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'authorization': ''
//     }
// }

const token = localStorage.getItem('token');
if (token) {
    defaultConfig.headers['authorization'] = `Bearer ${token}`;
    //uploadConfig.headers['authorization'] = `Bearer ${token}`;
}

export const DefaultAPIInstance = axios.create(defaultConfig);
//export const UploadAPIInstance = axios.create(uploadConfig);