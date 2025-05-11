import api from '../services/api.js';


//Product upload
export const uploadProduct = async () => {
    const response = await api.post("/product");
    return response.data;
}