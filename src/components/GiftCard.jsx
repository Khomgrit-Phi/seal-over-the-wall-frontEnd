import React from 'react'

export default function GiftCard({giftImage, giftName, giftPrize}) {
  return (
    <div >
        <div className="bg-secondary-light-gray-200 h-[318px] w-[392px]">
          <img src={giftImage}/>
        </div>
        <div className="relative bg-[#F4F4F5] h-[156px] w-[392px]">
          <div className="px-[16px] pb-[16px] pt-[36px]">
            <p className="mb-[16px] text-xl font-medium">{giftName} THB Gift Card</p>
            <div>
              <p className="text-lg font-medium">Everpress</p>
              <p className="text-lg font-medium">{giftPrize} THB</p>
            </div>
          </div>
          <button className="absolute bottom-4 right-4 w-[176px] h-[44px] border-1 rounded-4xl mt-[12px] bg-white hover:scale-105 duration-300 hover:cursor-pointer">Add to Cart</button>
        </div>
    </div>
  )
}
