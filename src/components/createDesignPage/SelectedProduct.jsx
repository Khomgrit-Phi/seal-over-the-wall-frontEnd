import React from 'react';

// Import all mockup images
import shirtblack from "../../assets/images/Products/shirt/empty/empty-shirt-black-front.png";
import shirtwhite from "../../assets/images/Products/shirt/empty/empty-shirt-white-front.png";
import shirtblue from "../../assets/images/Products/shirt/empty/empty-shirt-blue-front.png";
import shirtgray from "../../assets/images/Products/shirt/empty/empty-shirt-gray-front.png";

import bagblack from "../../assets/images/Products/bag/empty/empty-bag-black-front.png";
import bagwhite from "../../assets/images/Products/bag/empty/empty-bag-white-front.png";
import bagblue from "../../assets/images/Products/bag/empty/empty-bag-blue-front.png";
import baggray from "../../assets/images/Products/bag/empty/empty-bag-gray-front.png";

import cupblack from "../../assets/images/Products/cup/empty/empty-cup-black-front.png";
import cupwhite from "../../assets/images/Products/cup/empty/empty-cup-white-front.png";
import cupblue from "../../assets/images/Products/cup/empty/empty-cup-blue-front.png";
import cupgray from "../../assets/images/Products/cup/empty/empty-cup-gray-front.png";

const productMockups = {
  tshirt: [
    { color: 'white', src: shirtwhite },
    { color: 'gray', src: shirtgray },
    { color: 'black', src: shirtblack },
    { color: 'blue', src: shirtblue },
  ],
  bags: [
    { color: 'white', src: bagwhite },
    { color: 'gray', src: baggray },
    { color: 'black', src: bagblack },
    { color: 'blue', src: bagblue },
  ],
  cups: [
    { color: 'white', src: cupwhite },
    { color: 'gray', src: cupgray },
    { color: 'black', src: cupblack },
    { color: 'blue', src: cupblue },
  ],
};

const printAreas = {
  tshirt: { top: '32%', left: '20%', width: '60%', height: '40%' },
  bags: { top: '50%', left: '26%', width: '43%', height: '30%' },
  cups: { top: '40%', left: '29%', width: '40%', height: '30%', transform: 'rotate(-20deg)' },
};

function SelectedProduct({ selectedProduct, selectedColors, uploadedImage }) {
  const allMockups = productMockups[selectedProduct] || [];

  const mockups = allMockups.filter((mockup) =>
    selectedColors.includes(mockup.color.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center justify-center w-[1344px] mt-8'>
      <h2 className='font-semibold text-xl capitalize'>
        {selectedProduct} Preview
      </h2>
      <div className='flex gap-12 flex-wrap justify-center mt-10'>
        {mockups.map(({ color, src }, i) => (
          <div key={i} className='relative w-[280px] h-[280px]'>
            <img src={src} alt={`${color} ${selectedProduct}`} className='w-full h-full object-contain' />
            {uploadedImage && (
             <img
              src={uploadedImage}
              alt='Design Overlay'
              className='absolute object-contain pointer-events-none'
              style={{
              zIndex: 5,
              opacity: 0.85,
              filter: 'contrast(1.2) brightness(0.95)',
              mixBlendMode: 'mutiply',
               ...printAreas[selectedProduct] // 
              }}
              />
              )}
          </div>
        ))}
        {mockups.length === 0 && (
          <p className="text-gray-500 italic mt-4">Please select at least one color</p>
        )}
      </div>
    </div>
  );
}

export default SelectedProduct;
