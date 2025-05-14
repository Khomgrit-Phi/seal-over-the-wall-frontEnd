import React from 'react';

function CheckoutAddress({ name, address, tel, className }) {
  return (
    <div id="shipping" className={`w-[504px] h-auto ${className}`}>
      <p className="mb-6 text-[20px] text-[#A1A1AA] font-semibold">Shipping Address</p>
      <p id="name" className="mb-3 text-[24px] font-medium">
        {name}
      </p>
      <p id="Address" className="text-[24px] font-[500] text-wrap">
        {address}
      </p>
      <p id="tel" className="text-[24px] font-[500] text-wrap">
        {tel}
      </p>
    </div>
  );
}

export default CheckoutAddress;
