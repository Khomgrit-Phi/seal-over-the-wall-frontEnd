import api from '../services/api.js';

// Product upload
const uploadProduct = async (data) => {
  console.log("📦 Uploading product:", data); // <- debug line
  const response = await api.post("/product", data);
  return response.data;
};

export default uploadProduct;
