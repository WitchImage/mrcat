import axios, { AxiosInstance } from 'axios';

export const requestApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
});
