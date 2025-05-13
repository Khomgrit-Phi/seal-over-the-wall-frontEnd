import api from '../services/api.js';


//create an cart along when user is registered
export const createCart = async (userId) => {
    const response = await api.post("/cart", userId);
    return response.data;
}

//get User cart for cart page
export const getCart = async (userId) => {
    try {
      const response = await api.get(`/cart/populated/${userId}`); // Assuming your base API URL is /api
      return response;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error; // Re-throw the error for the component to catch
    }
  };

//delete cartItem from Cart and CartItem table
export const deleteCartItem = async (cartId, itemId) => {
  try {
    const request = await api.delete(`/cart/${cartId}/item/${itemId}`)
    return console.log(request)

  } catch (error) {
    console.log("Error deleting item: ", error)
  }
  }


//to Update a cart
export const updateCart = async () => {
    const response = await api.patch("/cart/:userId");
    return response.data;
}

//to Update cart items color / size / quantity
export const updateDetail = async ( itemId, color, size, quantity, image) => {
  try {
  const payload = {selectedColor:color, selectedSize:size, quantity:quantity, selectedImage:image}
  const request = await api.patch(`/cart/items/${itemId}`, payload)
  return console.log(payload, request)
  } catch (error) {
    console.log("error updating cart item: ", error )
    throw error;
  }
}


