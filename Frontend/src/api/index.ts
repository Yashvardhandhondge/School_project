import axios from "axios";
const BASE_URL = process.env.API_URL;


export const signUp = async (data:{
    email: string,
    password: string,
    role: string,
    name: string
}) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/signup`, data);
        return response;
    } catch (error) {
        return error;
    }
}

export const signIn = async (data:{
    email: string,
    password: string,
}) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, data);
        return response;
    } catch (error) {
        return error;
    }
}