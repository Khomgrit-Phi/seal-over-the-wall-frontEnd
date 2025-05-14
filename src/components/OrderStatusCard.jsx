import React from 'react';

function OrderStatusCard({ orderId, method, date, status, className }) {
  return (
    <div id="shipping" className={`w-[504px] h-auto flex flex-col gap-6 ${className}`}>
      <p className="text-[20px] text-[#A1A1AA] font-semibold">Order Status</p>
      <p id="name" className="text-[24px] font-[600] text-primary-black">{`Order ID: ${orderId}`}</p>
      <div className="flex gap-2 items-center">
        <img src="src/assets/images/fast-delivery-Icon.svg" />
        <p className="text-[24px] font-[600] text-primary-black">{method}</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="src/assets/images/on-delivering-icon.svg" />
        <p className="text-[24px] font-[600] text-primary-black">{status}</p>
      </div>
      <div id="tel" className="flex text-[24px] font-[500] text-primary-black">
        You will receive your order on&nbsp;{<p className="text-[24px] font-[500] text-primary-blue-500">{date}</p>}
      </div>
    </div>
  );
}

export default OrderStatusCard;
