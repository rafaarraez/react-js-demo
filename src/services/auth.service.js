import * as axios from "axios";

export const loginRequest = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data);
};