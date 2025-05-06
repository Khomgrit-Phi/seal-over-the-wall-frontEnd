import React from 'react'
import PropTypes from "prop-types";

function CheckoutButton({currentStep, orderValue, className}) {
  let buttonText = "";

  switch (currentStep) {
    case "shipping":
        buttonText = "Continue to payment";
        break;
    case "payment":
        buttonText = `Total ${orderValue} THB`;
        break;
    case "successful":
        buttonText =  <div className="flex justify-between w-full px-3">
                        <p>Total</p>
                        <span>{orderValue} THB</span>
                      </div>;
        break;
    case "summary":
        buttonText = "Confirm your order";
        break;
  }
    return (
    <div className={`bg-[#202020] w-full h-auto flex py-2 justify-center hover:scale-105 duration-300 text-[#FFFFFF] font-semibold text-2xl hover:cursor-pointer ${className}`}>
        {buttonText}
    </div>
  )
}

CheckoutButton.PropTypes = {
  currentStep : PropTypes.oneOf(["shipping", "payment", "summary"])
}




export default CheckoutButton



