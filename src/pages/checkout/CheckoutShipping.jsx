import React from 'react';
import CheckoutButton from '../../components/CheckoutButtonCard';
import { useState } from 'react';

const CheckoutShipping = ({ onNext, updateData }) => {
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    specific: '',
    district: '',
    subDistrict: '',
    city: '',
    postal: '',
    email: '',
    phone: '',
    smsPromotion: false,
    emailPromotion: false,
    shipping: ''
  });

  const handleOnchange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !shippingData.firstName ||
      !shippingData.lastName ||
      !shippingData.address ||
      !shippingData.specific ||
      !shippingData.district ||
      !shippingData.subDistrict ||
      !shippingData.postal ||
      !shippingData.city ||
      !shippingData.email ||
      !shippingData.phone ||
      !shippingData.shipping
    ) {
      alert('Please fill out all required fields before continuing.');
      return;
    }

    console.log('Submitting', shippingData);
    updateData(shippingData);

    setShippingData({
      firstName: '',
      lastName: '',
      address: '',
      specific: '',
      district: '',
      subDistrict: '',
      postal: '',
      city: '',
      email: '',
      phone: '',
      smsPromotion: false,
      emailPromotion: false,
      shipping: ''
    });

    onNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-[1072px] mx-auto mb-10">
        {/* General information */}
        <div className="mb-[40px]">
          <h1 className="text-[2rem] font-semibold col-span-2">Shipping Address</h1>
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="col-span-1">
              <p className="mt-[24px] font-semibold text-[1.25rem]">
                First name<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={shippingData.firstName}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-1">
              <p className="mt-[24px] font-semibold text-[1.25rem]">
                Last name<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={shippingData.lastName}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[1.25rem]">
                Shipping address detail<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Name of the address, building, apt"
                name="address"
                value={shippingData.address}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[1.25rem]">
                Specific detail of the address<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Specify company, apt, suite, unit"
                name="specific"
                value={shippingData.specific}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                District<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="District"
                name="district"
                value={shippingData.district}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                Subdistrict<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Subdistrict"
                name="subDistrict"
                value={shippingData.subDistrict}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                Postal code<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Postal code"
                name="postal"
                value={shippingData.postal}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
                maxLength="5"
              />
            </div>
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                City<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={shippingData.city}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <h3 className="mt-[40px] text-[2rem] font-semibold col-span-2">Contact Information</h3>
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                Email<span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={shippingData.email}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-span-1">
              <p className=" font-semibold text-[1.25rem]">
                Mobile phone number<span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Mobile phone number"
                name="phone"
                value={shippingData.phone}
                className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                onChange={handleOnchange}
                maxLength="10"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-[8px] mt-[24px] items-center">
            <input
              type="checkbox"
              name="smsPromotion"
              checked={shippingData.smsPromotion}
              onChange={handleOnchange}
              className="border-1 border-[#a1aaa2] w-[24px] h-[24px]"
            />
            <p className="text-xl font-semibold">Please send me SMS shipping updates about my order</p>
          </div>
          <div className="flex flex-row gap-[8px] mt-[8px] items-center">
            <input
              type="checkbox"
              name="emailPromotion"
              checked={shippingData.emailPromotion}
              onChange={handleOnchange}
              className="border-1 border-[#A1A1AA] w-[24px] h-[24px]"
            />
            <p className="text-xl font-semibold">Please add me to the Custommike? email list</p>
          </div>
        </div>

        {/* Shipping method */}
        <div className="mb-[56px]">
          <div className="flex justify-between pb-4 mt-[64px] mb-[20px] border-b-[1.25px] border-secondary-light-gray-500">
            <p className="text-[2rem] font-semibold">Select a Shipping</p>
          </div>

          {/* Standard */}
          <label className="flex text-xl justify-between items-center w-full mb-[20px] border-b-[1.25px] pb-4 border-secondary-light-gray-500 cursor-pointer">
            <div className="flex flex-col w-[705px]">
              <div className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="shipping"
                  value="Standard Delivery"
                  checked={shippingData.shipping === 'Standard Delivery'}
                  onChange={handleOnchange}
                  className="delivery-checkbox appearance-none w-[24px] h-[24px] rounded-full border pb-4 border-[#A1A1AA] checked:bg-black"
                />
                <p className="font-semibold text-xl text-primary-black">Standard Delivery</p>
              </div>
              <p className="text-secondary-light-gray-500 font-normal text-xl mb-2">
                Economy or standard shipping takes approximately 3-5 business days.
              </p>
              <p className="text-secondary-light-gray-500 font-normal text-xl">{`16 March - 21 March, 2025`}</p>
            </div>
            <span className="font-[500] text-xl w-[120px] text-center">{`60`} THB</span>
          </label>

          {/* Fastest */}
          <label className="flex text-xl justify-between items-center w-full mb-[20px] border-b-[1.25px] pb-4 border-secondary-light-gray-500 cursor-pointer">
            <div className="flex flex-col w-[705px]">
              <div className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="shipping"
                  value="Fastest Deliver"
                  checked={shippingData.shipping === 'Fastest Deliver'}
                  onChange={handleOnchange}
                  className="delivery-checkbox appearance-none w-[24px] h-[24px] rounded-full border border-[#A1A1AA] checked:bg-black"
                />
                <p className="font-semibold text-xl text-primary-black">Fastest Delivery</p>
              </div>
              <p className="text-secondary-light-gray-500 font-normal text-xl mb-2">
                1 day! Order optimized based on customer location (for Bangkok orders only).
              </p>
              <p className="text-secondary-light-gray-500 font-normal text-xl">{`19 March 2025`}</p>
            </div>
            <span className="font-[500] text-xl w-[120px] text-center">{`120`} THB</span>
          </label>

          {/* COD */}
          <label className="flex text-xl justify-between items-center w-full mb-[20px] border-b-[1.25px] pb-4 border-secondary-light-gray-500 cursor-pointer">
            <div className="flex flex-col w-[705px]">
              <div className="flex gap-2 items-center mb-2">
                <input
                  type="radio"
                  name="shipping" // This should match your state key
                  value="Cash on Delivery"
                  checked={shippingData.shipping === 'Cash on Delivery'}
                  onChange={handleOnchange}
                  className="delivery-checkbox appearance-none w-[24px] h-[24px] rounded-full border border-[#A1A1AA] checked:bg-black"
                />
                <p className="font-semibold text-xl text-primary-black">Cash on Delivery (COD)</p>
              </div>
              <p className="text-secondary-light-gray-500 font-normal text-xl mb-2">
                Payment for the goods must be made in full at the time of delivery before receiving the product. If payment is not made at
                the delivery point, the item cannot be handed over to the recipient and will be returned to the sender. Please ensure you
                have the exact amount ready for payment.
              </p>
              <p className="text-secondary-light-gray-500 font-normal text-xl">{`16 March - 21 March, 2025.`}</p>
            </div>
            <span className="font-[500] text-xl w-[120px] text-center">{`120`} THB</span>
          </label>
        </div>

        <button type="submit">
          <CheckoutButton currentStep="shipping" />
        </button>
        <p className="text-gray-500 mt-[12px]">
          By continuing, I confirm that I have read and accept the&nbsp;
          <a href="#" className="underline">
            Terms and Conditions
          </a>{' '}
          and the&nbsp;
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </>
  );
};

export default CheckoutShipping;
