import api from '../services/api.js';

/**
 * Fetch all products
 */
export const getProducts = async () => {
  try {
    const response = await api.get('/product');
    console.log("🧪 Full products API response:", response.data);

    // Try to return array of products directly or fallback
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (Array.isArray(response.data.products)) {
      return response.data.products;
    } else {
      console.warn("⚠️ Unexpected response format:", response.data);
      return []; // fallback to empty array to avoid breaking frontend
    }
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    return [];
  }
};

/**
 * Fetch a single product by ID
 */
export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
    console.log("🧪 Single product API response:", response.data);

    if (response.data && response.data.product) {
      return response.data.product;
    } else {
      console.warn("⚠️ Unexpected product response format:", response.data);
      return null;
    }
  } catch (err) {
    console.error(`❌ Failed to fetch product ID ${productId}:`, err);
    return null;
  }
};

/**
 * Upload a new product
 */
const uploadProduct = async (data) => {
  try {
    console.log("📦 Uploading product:", data);
    const response = await api.post("/product", data);
    console.log("✅ Product upload response:", response.data);
    return response.data;
  } catch (err) {
    console.error("❌ Failed to upload product:", err);
    throw err;
  }
};

export default uploadProduct;
