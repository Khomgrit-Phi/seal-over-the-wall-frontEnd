import React from 'react';
import CheckoutAddressCard from '../../components/CheckoutAddressCard';
import OrderStatusCard from '../../components/OrderStatusCard';
import TotalCard from '../../components/TotalCard';
import ProductDataStore from '../../stores/productDataStore';
import SaleSlide from '../../components/HomePage/SaleSlide';

const Success = ({ orderId, onReset, orderDetail }) => {
  const order = orderDetail;
  console.log('This is in summary', order);

  const items = ProductDataStore((state) => state.orders);

  return (
    <div className="w-auto flex flex-col items-center">
      <div className="flex flex-col w-[1616px] content-center">
        <article className="w-full">
          <div className="space-y-4">
            <h2 className="text-left text-[32px] font-semibold border-b-1 border-[#A1A1AA] pb-2">Your Oder</h2>
            <p className="text-left text-2xl font-normal border-b-1 border-[#A1A1AA] pb-4">Order ID: {orderId}</p>
            <h2 className="text-left text-[32px] font-semibold mb-8 pt-2">Order Summary</h2>
          </div>
        </article>
        <section className="flex flex-row gap-4">
          <div className="flex flex-row w-[936px] min-h-[875px] h-auto">
            <div className="product w-full flex flex-col border border-[#A1A1AA] px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-4 sm:py-6 md:py-10 lg:py-12 xl:py-14 gap-y-6 mb-40">
              {items.orderProduct.map((product) => (
                <React.Fragment key={product.productId}>
                  {/* Products detail */}
                  <div className="flex flex-wrap outline-1 items-center w-full max-w-full hover:shadow-lg hover:scale-105 hover:transition duration-300 cursor-pointer">
                    <div className="w-41 h-41 flex-shrink-0">
                      <img src={product.variants.image} alt="Mug navy color" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col p-5 flex-1">
                      <h4 className="text-2xl font-semibold">{product.styleName}</h4>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-2">
                        <div className="flex items-center gap-2 mr-4">
                          <span className="text-lg font-normal">color:</span>
                          <div className="w-6 h-6 rounded-full bg-[#202020]"></div>
                          <i className="fa-solid fa-angle-down w-4 h-4"></i>
                        </div>
                        <div className="flex items-center gap-2 mr-auto">
                          <span className="text-lg font-normal">size: {product.variants.size}</span>
                          <i className="fa-solid fa-angle-down w-4 h-4"></i>
                        </div>
                        <span className="text-xl font-medium text-right ml-auto">{product.basePrice} THB</span>
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
              <CheckoutAddressCard name={items.addressDetail.name} address={items.addressDetail.address} tel={items.addressDetail.tel} />
            </div>

            {/* Order status */}
            <div className="border border-[#A1A1AA] w-full p-6">
              <OrderStatusCard
                orderId="356945678"
                method={items.shippingDetail.shippingMethod.method}
                date={items.shippingDetail.date}
                status={items.shippingDetail.status}
              />
            </div>

            {/* Summary detail */}

            <div className="w-full">
              <button className="w-full" onClick={onReset}>
                <TotalCard
                  subTotal="1696"
                  shippingCost={items.shippingDetail.shippingMethod.cost}
                  orderValue="1816"
                  currentStep="successful"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
      <SaleSlide />
    </div>
  );
};

export default Success;
