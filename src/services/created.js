import api from '../services/api.js';

//Created Design
export const createdProduct = async (productData) => {
  const response = await api.post("/design/upload", productData);
  return response.data;
};