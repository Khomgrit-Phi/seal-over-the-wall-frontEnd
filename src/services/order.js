import api from '../services/api.js';

//Get an order from last created cart
export const getOrder = async (orderId) => {
    const request = await api.get(`/order/${orderId}`);
    return request.data;
}

//Create an order after finishing the checkout
export const createOrder = async (items, shippingMethod, total, address, payment) => {
    let payload = {items, shippingMethod, total, address, payment};
    const request = await api.post(`/order/createOrder`, payload);
    return request.data;
}