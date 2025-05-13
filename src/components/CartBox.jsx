import React, { useState, useEffect } from 'react';
import CheckedBox from './ui/CheckedBox';

export default function CartBox({ imageArray, initialImage, name, size, price, quantity, color, updateTotalPrice }) {
  const colorArray = ['black', 'blue', 'gray', 'white'];
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const [selectedSize, setSelectedSize] = useState(size);
  const [currentPrice, setCurrentPrice] = useState(price * quantity);

  const colorImageMap = {
    black: 0,
    blue: 1,
    gray: 2,
    white: 3
  };

  const testArray = [
    'src/assets/images/Products/shirt/fetch/fetch-shirt-black-back.png',
    'src/assets/images/Products/shirt/fetch/fetch-shirt-blue-front.png',
    'src/assets/images/Products/shirt/fetch/fetch-shirt-gray-front.png',
    'src/assets/images/Products/shirt/fetch/fetch-shirt-white-front.png'
  ];
  // Determine the current image based on selected color
  const currentImage = imageArray[colorImageMap[selectedColor]];

  const sizeOptions = [
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' }
  ];

  useEffect(() => {
    setCurrentPrice(price * selectedQuantity);
    // if (updateTotalPrice) { // Make sure the function exists before calling
    //   updateTotalPrice(price * selectedQuantity);
    // }
  }, [selectedQuantity, price]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleIncreaseQuantityChange = () => {
    setSelectedQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantityChange = () => {
    setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" mr-[64px]"></div>
      <div className="flex w-[1072px] h-[204px] items-center border-b-2 border-secondary-light-gray-300">
        <img src={currentImage} className="w-[204px] h-[200px]" alt={name} />
        <div className="flex w-full justify-between items-center py-[60px] pl-[68px]">
          <div className="grid grid-cols-2">
            <h3 className="col-span-2 text-2xl font-semibold">{name}</h3>
            {/* color selection */}
            <div className="flex col-span-1 items-center mr-4">
              <label htmlFor="colors" className="mr-2 ">
                color:{' '}
                <span
                  className="inline-block w-6 h-6 rounded-full outline-1 align-middle"
                  style={{ backgroundColor: selectedColor }}
                ></span>
              </label>
              <select
                id="colors"
                name="colors"
                value={selectedColor}
                onChange={handleColorChange}
                className="appearance-none pr-8 pl-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primary-500"
              >
                {colorArray.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <img src="src\assets\images\arrow-down.svg" className="w-[16px] h-[16px] ml-2" alt="arrow down" />
            </div>

            {/* size selection */}
            <div className="flex col-span-1 items-center">
              <label htmlFor="sizes" className="mr-2">
                size:
              </label>
              <select
                id="sizes"
                name="sizes"
                value={selectedSize}
                onChange={handleSizeChange}
                className="appearance-none pr-8 pl-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primary-500"
              >
                {sizeOptions.map((sizeOption) => (
                  <option key={sizeOption.value} value={sizeOption.value}>
                    {sizeOption.label}
                  </option>
                ))}
              </select>
              <img src="src\assets\images\arrow-down.svg" className="w-[16px] h-[16px] ml-2" alt="arrow down" />
            </div>
            <p className="col-span-2">{price} THB</p>
          </div>
          <div className="flex gap-[16px]">
            <button
              onClick={handleIncreaseQuantityChange}
              className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer"
            >
              +
            </button>
            <p>{selectedQuantity}</p>
            <button
              onClick={handleDecreaseQuantityChange}
              className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer"
            >
              -
            </button>
          </div>
          <button>
            <div className="flex gap-[8px] items-center">
              <p>{currentPrice} THB</p>
              <img
                src="src\assets\images\circle-xmark-solid.svg"
                className="flex items-center justify-center w-[16px] h-[16px]"
                alt="remove"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
