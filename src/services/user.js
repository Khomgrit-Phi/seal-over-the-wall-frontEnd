import api from '../services/api.js';

//Login User
export const signIn = async () => {
    const response = await api.post("/user/register");
    return response.data;
}

export const address = async () => {
    const response = await api.post("/new-address")
    return response.data;
}