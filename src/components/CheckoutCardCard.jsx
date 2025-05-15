import React from 'react'

function CheckoutCard({cardNumber, expire}) {
  return (
    <div>
      <p className="mb-6 text-[20px] text-[#A1A1AA] font-[600]">Payment Methods</p>
      <div className="w-auto h-auto flex justify-start items-center">
      <img className='pr-[40px]' src='/assets/images/master-card logo.png'></img>
          <div className="w-auto h-auto">
              <span className="text-[#202020] font-[400] text-xl">{cardNumber}</span><br/>
              <span className="text-[#A1A1AA] font-[400] text-xl">Expire {expire}</span>
          </div>
          </div>
    </div>
  )
}

export default CheckoutCard