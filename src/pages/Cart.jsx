import React, { useEffect, useState, useCallback } from 'react'; // Import useCallback
import CartBox from '../components/CartBox';
import GiftCard from '../components/GiftCard';
import Questions from '../components/Questions';
import AdBox from '../components/AdBox';
import { getCart, deleteCartItem } from '../services/cart.js';

const Cart = () => {
  const [orderItem, setOrderItem] = useState([]);
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = '681f06a48872b623329fd31b';

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
            productImages: item.selectedImages,
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
        <button className="w-[800px] h-[56px] bg-black font-semibold text-white text-xl hover:scale-105 duration-300 hover:cursor-pointer">
          Check Out
        </button>
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
