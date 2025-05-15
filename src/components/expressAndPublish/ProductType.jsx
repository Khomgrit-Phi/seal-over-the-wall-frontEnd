import React, { useState } from 'react';
import shirtProvWhiteFront from "/assets/images/Products/shirt/prove/prove-shirt-white-front.png";
import bagWhiteFront from "/assets/images/Products/bag/prove/prove-bag-white-front.png";
import cupWhiteFront from "/assets/images/Products/cup/prove/prove-cup-white-front.png";
import shirtProveBlueFront from "/assets/images/Products/shirt/prove/prove-shirt-blue-front.png";
import shirtProveGrayFront from "/assets/images/Products/shirt/prove/prove-shirt-gray-front.png";
import shirtProveBlackFront from "/assets/images/Products/shirt/prove/prove-shirt-black-front.png";
import bagProveBlue from "/assets/images/Products/bag/prove/prove-bag-blue-front.png";
import bagProveGray from "/assets/images/Products/bag/prove/prove-bag-gray-front.png";
import bagProveBlack from "/assets/images/Products/bag/prove/prove-bag-black-front.png";
import cupProveBlue from "/assets/images/Products/cup/prove/prove-cup-blue-front.png";
import cupProveGray from "/assets/images/Products/cup/prove/prove-cup-gray-front.png";
import cupProveBlack from "/assets/images/Products/cup/prove/prove-cup-black-front.png";

function ProductType({ sendImage, sendChild1, sendChild2, sendChild3, onCategoryChange }) {
  const [selectedProductType, setSelectedProductType] = useState('shirt');

  const handleProductTypeClick = (type, image1, image2, image3, image4) => {
    setSelectedProductType(type);
    sendImage(image1);
    sendChild1(image2);
    sendChild2(image3);
    sendChild3(image4);
    onCategoryChange(type.charAt(0).toUpperCase() + type.slice(1));
  };

  return (
    <div>
      {/* Product type selection */}
      <div className='flex flex-col gap-4 ml-34 mr-72'>
        <button
          className={`cursor-pointer ${selectedProductType === 'shirt' ? 'shadow-md border border-[#DBDBDC] rounded-lg' : ''}`}
          onClick={() => handleProductTypeClick('shirt', shirtProvWhiteFront, shirtProveBlueFront, shirtProveGrayFront, shirtProveBlackFront)}
        >
          <img src={shirtProvWhiteFront} alt="T-shirt" className="h-30 w-30 rounded-lg" />
        </button>
        <button
          className={`cursor-pointer ${selectedProductType === 'bag' ? 'shadow-md border border-[#DBDBDC] rounded-lg' : ''}`}
          onClick={() => handleProductTypeClick('bag', bagWhiteFront, bagProveBlue,   bagProveGray, bagProveBlack)}
        >
          <img src={bagWhiteFront} alt="Bag" className="h-30 w-30 rounded-lg" />
        </button>
        <button
          className={`cursor-pointer ${selectedProductType === 'cup' ? 'shadow-md border border-[#DBDBDC] rounded-lg' : ''}`}
          onClick={() => handleProductTypeClick('cup', cupWhiteFront, cupProveBlue, cupProveGray, cupProveBlack)}
        >
          <img src={cupWhiteFront} alt="Cup" className="h-30 w-30 rounded-lg" />
        </button>
      </div>
    </div>
  );
}

export default ProductType;