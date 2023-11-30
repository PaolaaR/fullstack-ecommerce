import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3005';

export const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
