import api from '../services/api.js';

//Login User
export const signUp = async () => {
    const response = await api.post("/user/register");
    return response.data;
}

export const address = async () => {
    const response = await api.post("/new-address")
    return response.data;
}

export const signIn = async () => {
    const response = await api.post(`/user/cookie/signIn`)
    return response.data
}