import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3005';

export const axiosClient = axios.create({
  baseURL,
});

export default axiosClient;
