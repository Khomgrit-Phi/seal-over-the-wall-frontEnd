import React from 'react';

function CheckoutAddress({ firstName,lastName, address, specific, subDistrict, district, city,postal , tel, className }) {
  return (
    <div id="shipping" className={`w-[504px] h-auto ${className}`}>
      <p className="mb-6 text-[20px] text-[#A1A1AA] font-semibold">Shipping Address</p>
      <p id="name" className="mb-3 text-[24px] font-medium">
        {firstName} {lastName}
      </p>
      <p id="Address" className="text-[24px] font-[500] text-wrap">
        {address} {specific} {subDistrict} {district} {city} {postal}
      </p>
      <p id="tel" className="text-[24px] font-[500] text-wrap">
        {tel}
      </p>
    </div>
  );
}

export default CheckoutAddress;
