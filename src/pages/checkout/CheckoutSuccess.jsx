import React from 'react';
import CheckoutAddressCard from '../../components/CheckoutAddressCard';
import OrderStatusCard from '../../components/OrderStatusCard';
import TotalCard from '../../components/TotalCard';
import ProductDataStore from '../../stores/productDataStore';
import SaleSlide from '../../components/HomePage/SaleSlide';
import { Link } from 'react-router';

const Success = ({ onReset, orderDetail }) => {
  const order = orderDetail;
  console.log('This is in success', order);

  const colorMap = {
    black: 0,
    blue: 1,
    gray: 2,
    white: 3,
  }
  const colorArray = ["202020", "1A2C8B", "ADADAF", "FFFFFF"];



  const items = ProductDataStore((state) => state.orders);

  if (!orderDetail) {
    return <p className='text-8xl mx-auto'>Loading order details...</p>;
  }

  return (
    <div className="w-auto flex flex-col items-center">
      <div className="flex flex-col w-[1616px] content-center">
        <article className="w-full">
          <div className="space-y-4">
            <h2 className="text-left text-[32px] font-semibold border-b-1 border-[#A1A1AA] pb-2">Your Oder</h2>
            <p className="text-left text-2xl font-normal border-b-1 border-[#A1A1AA] pb-4">Order ID: {order._id}</p>
            <h2 className="text-left text-[32px] font-semibold mb-8 pt-2">Order Summary</h2>
          </div>
        </article>
        <section className="flex flex-row gap-4">
          <div className="flex flex-row w-[936px] min-h-[875px] h-auto">
            <div className="product w-full min-h-[875px] flex flex-col border border-[#A1A1AA] px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-4 sm:py-6 md:py-10 lg:py-12 xl:py-14 gap-y-6 mb-40">
              {order && order.items.map((product) => (
                <React.Fragment key={product._id}>
                  {/* Products detail */}
                  <div className="flex flex-wrap outline-1 items-center w-full max-w-full hover:shadow-lg hover:scale-105 hover:transition duration-300 cursor-pointer">
                    <div className="w-41 h-41 flex-shrink-0">
                      <img src={product.selectedImage} alt={product.productId.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col p-5 flex-1">
                      <h4 className="text-2xl font-semibold">{product.productId.title} <br/> <span className='mb-6 text-[20px] text-[#A1A1AA] font-semibold"'>quantity: {product.quantity} </span></h4>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-2">
                        {/* Color circle div */}
                        <div className="flex items-center gap-2 mr-4">
                          <span className="text-lg font-normal">color:</span>
                          <div
                              className="w-6 h-6 outline-1 rounded-full"
                              style={{ backgroundColor: `#${colorArray[colorMap[product.selectedColor]]}` }}
                            ></div>
                          
                        </div>
                        {/* Size div */}
                        <div className="flex items-center gap-2 mr-auto">
                          <span className="text-lg font-normal">size: {product.selectedSize}</span>
                          
                        </div>
                        <span className="text-xl font-medium text-right ml-auto">{product.totalPrice} THB</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Other detail*/}
          <div className="flex flex-col gap-4 w-[664px] min-h[875px]">
            {/* Shipping detail */}
            <div className="border border-[#A1A1AA] w-full p-6">
              <CheckoutAddressCard firstName={order.address.firstName}
              lastName={order.address.lastName}
              address={order.address.address}
              specific={order.address.specific}
              subDistrict={order.address.subDistrict}
              district={order.address.district}
              city={order.address.city}
              postal={order.address.postal}
              tel={order.address.phone} />
            </div>

            {/* Order status */}
              <div className="border border-[#A1A1AA] w-full p-6">
                <OrderStatusCard
                  orderId={order._id}
                  method={order.shippingMethod}
                  date={new Date(new Date(order.orderDate).getTime() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                  status={items.shippingDetail.status}
                />
              </div>

            {/* Summary detail */}

            <div className="w-full">
              <Link to = "/"><button className="w-full" onClick={onReset}>
                <TotalCard
                  subTotal={order.total}
                  shippingMethod={order.shippingMethod}
                  orderValue={order.total}
                  currentStep="successful"
                />
              </button></Link>
            </div>
          </div>
        </section>
      </div>
      <SaleSlide />
    </div>
  );
};

export default Success;
