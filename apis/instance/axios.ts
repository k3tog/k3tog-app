import axios from 'axios';

const TIME_OUT_DEFAULT = 60_000 * 10;

export const apiClient = axios.create({
  baseURL: 'https://k3tog-api.onrender.com',
  timeout: TIME_OUT_DEFAULT,
});
