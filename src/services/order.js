import api from '../services/api.js';

//create an order after converting cart
export const createOrder = async () => {
    const response = await api.post("/order");
    return response.data;
}