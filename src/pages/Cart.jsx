import React, { useEffect, useState, useCallback } from 'react'; // Import useCallback
import CartBox from '../components/CartBox';
import GiftCard from '../components/GiftCard';
import Questions from '../components/Questions';
import AdBox from '../components/AdBox';
import { getCart, deleteCartItem, updateDetail } from '../services/cart.js';
import { createOrder } from '../services/order.js';
import { Link } from 'react-router';

const Cart = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = '6821de629f107d6ad0c88355';

  // Fetch cart data
  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getCart(userId);
        const fetchedCartData = response.data.cart;
        setCartData(fetchedCartData);
        setOrderItem(
          fetchedCartData.items.map((item) => ({
            imageArray: item.productId?.images || [],
            productImage: item.selectedImage,
            name: item.productId?.title || '',
            size: item.selectedSize,
            color: item.selectedColor,
            quantity: item.quantity,
            price: item.unitPrice,
            productId: item.productId?._id,
            cartItemId: item._id,
            productType: item.productId?.productType,
            _id: item._id // keep an id for deletion
          }))
        );
        setTotalPrice(fetchedCartData.total);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, [userId]);

  // Update quantity
  const handleQuantityChange = (cartItemId, newQuantity) => {
    setOrderItem((prevItems) => prevItems.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item)));
  };

  // Delete item and prepare for order convertion (Front End)
  const handleDeleteItem = (itemIdToDelete) => {
    setOrderItem((prevItems) => prevItems.filter((item) => item._id !== itemIdToDelete));
  };

  // Update color
  const handleColorChange = (cartItemId, newColor, newImage) => {
    setOrderItem((prevItems) =>
      prevItems.map((item) => (item.cartItemId === cartItemId ? { ...item, color: newColor, productImage: newImage } : item))
    );
  };

  const handleSizeChange = (cartItemId, newSize) => {
    setOrderItem((prevItems) => prevItems.map((item) => (item.cartItemId === cartItemId ? { ...item, size: newSize } : item)));
  };

  // Delete item in DB and and re-render the Cart
  // Get item ID
  const handleRemoveFromCart = useCallback(
    async (cartItemIdToRemove) => {
      if (!cartData?._id) {
        console.error('Cart ID is not available.  Cannot delete.');
        return;
      }
      // call DELETE method
      try {
        const cartId = cartData._id;
        const response = await deleteCartItem(cartId, cartItemIdToRemove);
        console.log('Item removed from cart:', response);

        // Re-fetch cart data *and* update state
        const updatedCartResponse = await getCart(userId);
        const updatedCartData = updatedCartResponse.data.cart;

        setCartData(updatedCartData); // Update cartData
        setOrderItem(
          updatedCartData.items.map((item) => ({
            imageArray: item.productId?.images || [],
            productImages: item.selectedImages,
            name: item.productId?.title || '',
            size: item.selectedSize,
            color: item.selectedColor,
            quantity: item.quantity,
            price: item.unitPrice,
            productId: item.productId?._id,
            cartItemId: item._id,
            productType: item.productId?.productType,
            _id: item._id
          }))
        );
        setTotalPrice(updatedCartData.total);
      } catch (error) {
        console.error('Error removing item from cart:', error);
        setError('Failed to remove item. Please try again.');
      }
    },
    [cartData?._id, userId]
  );

  // Re-update the DB everytime use select a new color, size, quantity

  // Submitting the finalized Cart and convert it to order
  const handleCheckoutOrder = async () => {
    const formattedOrderItems = orderItem.map((item) => ({
      productId: item.productId,
      selectedSize: item.size,
      selectedColor: item.color,
      selectedImage: item.productImage,
      quantity: item.quantity,
      unitPrice: item.price
    }));
    console.log('Formatted order items:', formattedOrderItems);
    try {
      await createOrder(userId, formattedOrderItems, cartData.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Recalculate total price
  useEffect(() => {
    const newTotal = orderItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  }, [orderItem]);

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error loading cart: {error}</div>;
  }

  return (
    <div className="flex flex-col ">
      <h2 className="text-center text-4xl font-bold mt-[132px]">Cart</h2>
      <div className="flex justify-center  items-center w-full pl-[88px]">
        <div className="w-[1072px] flex justify-between mt-[50px] pb-[25px] border-b-2 border-secondary-light-gray-300"></div>
      </div>
      {orderItem.map((item) => (
        <CartBox
          key={item.cartItemId}
          imageArray={item.imageArray}
          name={item.name}
          size={item.size}
          color={item.color}
          quantity={item.quantity}
          price={item.price}
          productId={item.productId}
          productType={item.productType}
          cartItemId={item.cartItemId}
          onQuantityChange={handleQuantityChange}
          onDeleteData={handleRemoveFromCart}
          onDeleteFront={handleDeleteItem}
          onSizeChange={handleSizeChange}
          onColorChange={handleColorChange}
        />
      ))}
      <div className="flex flex-col justify-center items-center w-full mt-[42px] pl-[360px] mb-[72px]">
        <div className="flex w-[800px] mb-[32px]">
          <input
            type="text"
            placeholder="Apply a promo code"
            className="w-[664px] h-[56px] text-center border-2 border-secondary-light-gray-300"
          />
          <button className="w-[120px] h-[56px] ml-[16px] bg-secondary-light-gray-500 text-xl font-semibold hover:scale-105 duration-300 hover:cursor-pointer">
            Apply
          </button>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Your savings</p>
          <p className="text-right font-semibold text-lg">0.00 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Shipping costs</p>
          <p className="text-right font-semibold text-lg">120 THB</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Tax inclusive</p>
          <p className="text-right font-semibold text-lg">7 %</p>
        </div>
        <div className="grid grid-cols-2 w-[800px] pb-[12px]">
          <p className="font-semibold text-lg">Total</p>
          <p className=" font-semibold text-lg text-right">{totalPrice} THB</p>
        </div>
        <Link to="/Checkout">
          <button
            onClick={handleCheckoutOrder}
            className="w-[800px] h-[56px] bg-black font-semibold text-white text-xl hover:scale-105 duration-300 hover:cursor-pointer"
          >
            Check Out
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-[32px] w-[1616px] text-start">Gift Cards</h2>
        <div className="flex mb-[160px] gap-[16px]">
          <GiftCard giftImage="src/assets/images/GFC-500.png" giftName="500" giftPrize="500" />
          <GiftCard giftImage="src/assets/images/GFC-1000.png" giftName="1,000" giftPrize="1,000" />
          <GiftCard giftImage="src/assets/images/GFC-1500.png" giftName="1,500" giftPrize="1,500" />
          <GiftCard giftImage="src/assets/images/GFC-2000.png" giftName="2,000" giftPrize="2,000" />
        </div>
      </div>
      <AdBox />
      <Questions />
    </div>
  );
};
export default Cart;
