import React from 'react';
import CheckoutAddressCard from '../../components/CheckoutAddressCard';
import CheckoutShippingCard from '../../components/CheckoutShippingCard';
import CheckoutCardCard from '../../components/CheckoutCardCard';
import CheckoutButtonCard from '../../components/CheckoutButtonCard';
import { useAuth } from '../../context/AuthContext';
const CheckoutSummary = ({ onNext, onEdit, checkoutData, checkoutOrder }) => {
  return (
    <div id="summary" className="flex flex-col w-[1072px] gap-2 items-center mx-auto">
      <div
        id="shippingInformation"
        className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secondary-light-gray-500"
      >
        <CheckoutAddressCard
          name={`${checkoutData.shippingInfo.firstName} ${checkoutData.shippingInfo.lastName}`}
          address={`${checkoutData.shippingInfo.address}, ${checkoutData.shippingInfo.specific}, ${checkoutData.shippingInfo.subDistrict}, ${checkoutData.shippingInfo.district}, ${checkoutData.shippingInfo.postal}, ${checkoutData.shippingInfo.city}`}
          tel={checkoutData.shippingInfo.phone}
        />
        <button onClick={onEdit} className="text-lg font-[500] items-center hover:cursor-pointer hover:scale-100 duration-300 p-4">
          Edit
        </button>
      </div>
      <div
        id="shippingInformation"
        className="flex justify-between border-[1.25px] p-6 w-full h-auto items-center border-secondary-light-gray-500"
      >
        <CheckoutShippingCard
          method={
            checkoutData.shippingInfo.shipping === 'Fastest Delivery'
              ? 'Fastest Delivery'
              : checkoutData.shippingInfo.shipping === 'Standard Delivery'
              ? 'Standard Delivery'
              : 'Cash on Delivery (COD)'
          }
          methodPrice={
            checkoutData.shippingInfo.shipping === 'Fastest Delivery' ? 120 : checkoutData.shippingInfo.shipping === 'Standard Delivery' ? 60 : 120
          }
          date="3 - 5 days"
        />
      </div>
      <div id="paymentMethod" className=" border-[1.25px] border-secondary-light-gray-500 p-6 w-full h-auto mb-14 ">
        <CheckoutCardCard cardNumber={`${checkoutData.paymentInfo.cardNumber}`} expire={`${checkoutData.paymentInfo.expDate}`} />
      </div>
      <button
        onClick={() => {
          onNext();
          checkoutOrder();
        }}
        className="w-full"
      >
        <CheckoutButtonCard currentStep="summary" />
      </button>
      <div className="items-start flex w-full">
        <p className="text-gray-500 mt-[12px] col-span-2 text-wrap inline-flex">
          By continuing, I confirm that I have read and accept the&nbsp;
          <a href="#" className="underline inline-flex">
            Terms and Conditions&nbsp;
          </a>{' '}
          and the&nbsp;
          <a href="#" className="underline inline-flex">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
export default CheckoutSummary;
