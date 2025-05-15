import api from '../services/api.js';

//Get an order from last created cart
export const getOrder = async (orderId) => {
    const request = await api.get(`/order/${orderId}`);
    return request.data.existOrder;
}

//Get user's orders from DB
export const getUserOrders = async (userId) => {
    const request = await api.get(`/order/getUserOrders/:${userId}`)
    return request.data;
}

export const createOrder = async (items, shippingMethod, total, address, payment) => {
    try {
        let payload = { items, shippingMethod, total, address, payment };
        const request = await api.post(`/order/createOrder`, payload);
        return request.data;
    } catch (error) {
        console.error('Error in createOrder:', error.response?.data || error.message);
        throw error;
    }
};