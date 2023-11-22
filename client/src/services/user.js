import axios from 'axios';

const URL_ROOT = `${import.meta.REACT_APP_BACKEND_URL}/user`;

export const loginService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/Teacupdesign/login`, data);
    console.log(response.data);
    return response.data;
}

export const signupService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/Teacupdesign/register`, data);
    console.log(response.data);
    return response.data;
}