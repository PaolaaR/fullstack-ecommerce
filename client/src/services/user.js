import axios from 'axios';

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/user`;

export const loginService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/login`, data);
    console.log(response.data);
    return response.data;
}

export const signupService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/signup`, data);
    console.log(response.data);
    return response.data;