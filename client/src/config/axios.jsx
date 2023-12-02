import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL || 'https://fullstack-ecommerce-sed7.onrender.com';

export const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
