import axios from 'axios';

const URL_USER = import.meta.env.VITE_REACT_APP_BACKEND_URL + '/user';

export const loginService = async (data) => {
    const response = await axios.post(`${URL_USER}/login`, data);
    return response.data;
}

export const signupService = async (data) => {
    const response = await axios.post(`${URL_USER}/create`, data);
    return response.data;
}