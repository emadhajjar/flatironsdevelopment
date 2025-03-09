import axios from 'redaxios';

declare const API_URL: string;

export const cancelToken = axios.CancelToken;

export const http = axios.create({
  baseURL: API_URL,
  headers: { 'content-type': 'application/json' },
});
