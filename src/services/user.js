import api from '../services/api.js';

//Login User
export const signIn = async () => {
    const response = await api.post("/user/register");
    return response.data;
}