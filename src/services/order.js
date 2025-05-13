import api from '../services/api.js';

//create an order after converting cart
export const createOrder = async (userId, items, total) => {
    let payload = {userId: userId, items: items, total: total};
    const request = await api.post("/order", payload);
    return request.data;
}