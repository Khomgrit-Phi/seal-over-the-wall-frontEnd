import React, { useState, useCallback } from 'react';
import CheckoutButton from '../../components/CheckoutButtonCard';
import CheckoutPaymentQR from './CheckoutPaymentQR';

const CheckoutPaymentCard = ({ onNext, updateData }) => {
  const [cardData, setCardData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    saveDetail: false
  });

  const handleOnchange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    let formattedValue = newValue;

    if (name === 'cardNumber') {
      formattedValue = newValue.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (name === 'expDate') {
      formattedValue = newValue.replace(/\D/g, '').substring(0, 4);
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
    } else if (name === 'cvv') {
      formattedValue = newValue.replace(/\D/g, '').substring(0, 4);
    }

    setCardData((prev) => ({
      ...prev,
      [name]: formattedValue
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardData.firstName || !cardData.lastName || !cardData.cardNumber || !cardData.expDate || !cardData.cvv) {
      alert('Please fill out all required fields before continuing.');
      return;
    }

    updateData(cardData);

    console.log('Submitting', cardData);
    setCardData({
      firstName: '',
      lastName: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
      saveDetail: false
    });
    onNext();
  };
  const [method, setMethod] = useState('card');

  return (
    <main className="flex flex-row gap-[16px] mx-[152px] mb-auto">
      {/* */}
      <div className="flex flex-col w-[1072px] mx-auto mb-10">
        <h1 className="text-[2rem] font-semibold col-span-2">Payment methods</h1>
        <div className="flex flex-row gap-[32px] mt-[16px] mb-6 ">
          {/* Card logo */}
          <button
            onClick={() => {
              setMethod('card');
            }}
            className="flex justify-center  w-[140px] h-[57px]border-zinc-400 hover:border-[2px] hover:border-[#334DD8] "
          >
            <img src="src/assets/images/card-icon.svg" alt="Card" />
          </button>
          {/* PromptPay logo */}
          <button
            onClick={() => {
              setMethod('promptPay');
            }}
            className="w-[140px] h-[57px] border-zinc-400 hover:border-[2px] hover:border-[#334DD8]"
          >
            <img src="src/assets/images/promt-pay logo.png" alt="PromptPay" />
          </button>
        </div>

        {/* */}

        {/* If card */}
        {method === 'card' && (
          <form onSubmit={handleSubmit} className="flex flex-col items-start w-full h-auto">
            <button className="flex flex-row w-full h-[28px] items-center hover: cursor-pointer hover:scale-105 duration-300">
              <img src="src/assets/images/circle-plus.png" className="inline-flex w-[20px] h-[20px] mt-0.5 mr-2.5" alt="Add Card" />
              <span className="inline-flex font-semibold text-xl px-2">Add other credit card</span>
            </button>

            <div className="grid grid-cols-2 gap-[24px] w-full">
              <div className="col-span-1">
                <p className="mt-[24px] font-semibold text-[1.25rem]">
                  First name<span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={cardData.firstName}
                  onChange={handleOnchange}
                  className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                  required
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
                  value={cardData.lastName}
                  onChange={handleOnchange}
                  className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                  required
                />
              </div>
              <div className="col-span-2">
                <p className="font-semibold text-[1.25rem]">
                  All transactions are encrypted and secure<span className="text-red-500">*</span>
                </p>
                <div className="flex flex-col gap-[24px]">
                  <input
                    type="text"
                    placeholder="Card number (XXXX XXXX XXXX XXXX)"
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleOnchange}
                    className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                    maxLength="19"
                    pattern="\d{4} \d{4} \d{4} \d{4}|\d{16}"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Expiration date (MM/YY)"
                    name="expDate"
                    value={cardData.expDate}
                    onChange={handleOnchange}
                    className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                    maxLength="5"
                    pattern="(0[1-9]|1[0-2])\/\d{2}"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Security code (CVV)"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleOnchange}
                    className="w-full h-[56px] border-secondary-light-gray-500 border-[1.25px] p-[20px]"
                    maxLength="4"
                    pattern="\d{3,4}"
                    required
                  />
                </div>
              </div>
              <div className="col-span-2 flex gap-2 w-full">
                <img src="src\assets\images\mingcute_information-fill.svg" alt="Info" />
                <p className="w-full text-secondary-light-gray-500 ">Credit card payments may take up to 24h to be processed</p>
              </div>
            </div>
            <div className="flex flex-row gap-[8px] align-center items-center mt-6 mb-14">
              <input
                type="checkbox"
                name="saveDetail"
                checked={cardData.saveDetail}
                onChange={handleOnchange}
                className="w-[24px] h-[24px]"
              />
              <p className="text-xl font-semibold">Save my payment details for future purchases</p>
            </div>
            <div className="w-full">
              <button type="submit" className="w-full">
                <CheckoutButton currentStep="payment" orderValue="1234" />
              </button>
              <p className="text-secondary-light-gray-500 mt-[12px] col-span-2 text-wrap">
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
            </div>
          </form>
        )}

        {/* If QR */}

        {method === 'promptPay' && (
          <div>
            <CheckoutPaymentQR orderId="123456789" orderValue={1816} />
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPaymentCard;
