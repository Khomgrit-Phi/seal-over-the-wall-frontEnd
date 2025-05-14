import api from '../services/api.js';

//Product upload
export const uploadProduct = async () => {
  const response = await api.post('/product');
  return response.data;
};

export const getProducts = async () => {
  const response = await api.get('/product');
  console.log(response.data.products);
  return response.data.products;
};
