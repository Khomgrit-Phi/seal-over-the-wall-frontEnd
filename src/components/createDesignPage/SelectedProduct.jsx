import React from 'react';
import shirtblack from "../../assets/images/Products/shirt/prove/prove-shirt-black-front.png";
import shirtwhite from "../../assets/images/Products/shirt/prove/prove-shirt-white-front.png";
import shirtblue from "../../assets/images/Products/shirt/prove/prove-shirt-blue-front.png";
import shirtgray from "../../assets/images/Products/shirt/prove/prove-shirt-gray-front.png";

const mockups = [
  { color: 'Black', src: shirtblack },
  { color: 'White', src: shirtwhite },
  { color: 'Blue', src: shirtblue },
  { color: 'Gray', src: shirtgray },
];

function SelectedProduct({ uploadedImage }) {
  return (
    <div className='flex flex-col items-center justify-center w-[1344px] h-[400px]'>
      <h2 className='font-semibold text-xl mb-4'>Created Products</h2>
      <div className='flex gap-12'>
        {mockups.map(({ color, src }, i) => (
          <div key={i} className='relative w-[280px] h-[280px]'>
            <img src={src} alt={`${color} T-shirt`} className='w-full h-full object-contain' />
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt='Design Overlay'
                className='absolute top-[30%] left-[20%] w-[60%] h-[60%] object-contain pointer-events-none'
                style={{ zIndex: 5 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedProduct;

