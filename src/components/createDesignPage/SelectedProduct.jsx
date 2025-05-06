import React from 'react'
import shirtblack from "../../assets/images/Products/shirt/prove/prove-shirt-black-front.png";
import shirtwhite from "../../assets/images/Products/shirt/prove/prove-shirt-white-front.png";
import shirtblue from "../../assets/images/Products/shirt/prove/prove-shirt-blue-front.png";
import shirtgray from "../../assets/images/Products/shirt/prove/prove-shirt-gray-front.png";

function SelectedProduct() {
  return (
    <div className='flex flex-col items-center justify-center w-[1344px] h-[400px]'>
     <h2 className='font-semibold text-xl mb-4'>
      Created Products
     </h2>
      <div className='flex gap-12'>
          <img src={shirtblack} alt="Black T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtwhite} alt="White T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtblue} alt="Blue T-shirt" className='w-[280px] h-[280px]' />
          <img src={shirtgray} alt="Gray T-shirt" className='w-[280px] h-[280px]' />
        </div>
     </div>
  )
}

export default SelectedProduct