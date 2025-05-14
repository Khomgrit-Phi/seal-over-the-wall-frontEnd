import React from 'react'

function CheckoutButton({currentStep, orderValue}) {
  let buttonText = "";

  switch (currentStep) {
    case "shipping":
        buttonText = "Continue to payment";
        break;
    case "payment":
        buttonText = `Total ${orderValue} THB`;
        break;
    case "summary":
        buttonText = "Confirm your order";
        break;
  }
    return (
    <button class="bg-[#202020] w-full h-auto flex py-2 justify-center hover:scale-105 duration-300 text-[#FFFFFF] font-semibold text-2xl hover:cursor-pointer">
        {buttonText}
    </button>
  )
}

export default CheckoutButton