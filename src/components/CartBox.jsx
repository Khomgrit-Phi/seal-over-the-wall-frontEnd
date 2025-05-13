import React, { useState, useEffect } from 'react';
import CheckedBox from './ui/CheckedBox';
import { updateDetail } from '../services/cart';

export default function CartBox({
  imageArray,
  cartItemId,
  name,
  size,
  price,
  quantity,
  color,
  onQuantityChange,
  onSizeChange,
  onColorChange,
  productType,
  onDeleteData,
  onDeleteFront
}) {
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
  const [selectedImage, setSelectedImage] = useState(imageArray[colorImageMap[selectedColor]]);

  const sizeOptions = [
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' }
  ];

  useEffect(() => {
    setCurrentPrice(price * selectedQuantity);
  }, [selectedQuantity, price]);

  const handleColorChange = async (event) => {
    const newColor = event.target.value;
    const newImage = imageArray[[colorImageMap[newColor]]];
    setSelectedImage(newImage);
    setSelectedColor(newColor);
    console.log(newColor);
    onColorChange(cartItemId, newColor, newImage);

    try {
      await updateDetail(cartItemId, newColor, selectedSize, selectedQuantity, newImage);
    } catch (error) {
      console.error('Failed to update size in DB:', error);
    }
  };

  const handleSizeChange = async (event) => {
    const newSize = event.target.value;
    console.log(newSize);
    setSelectedSize(newSize);
    onSizeChange(cartItemId, newSize);
    console.log(cartItemId);

    try {
      await updateDetail(cartItemId, selectedColor, newSize, selectedQuantity, selectedImage);
    } catch (error) {
      console.error('Failed to update size in DB:', error);
    }
  };

  const handleIncreaseQuantityChange = async () => {
    const newQuantity = selectedQuantity + 1;
    setSelectedQuantity(newQuantity);
    onQuantityChange(cartItemId, newQuantity); // Call the callback send back ID & quantity

    try {
      await updateDetail(cartItemId, selectedColor, selectedSize, newQuantity, selectedImage);
    } catch (error) {
      console.error('Failed to update size in DB:', error);
    }
  };

  const handleDecreaseQuantityChange = async () => {
    const newQuantity = selectedQuantity > 1 ? selectedQuantity - 1 : 1;
    setSelectedQuantity(newQuantity);
    onQuantityChange(cartItemId, newQuantity); // Call the callback send back ID & quantity

    try {
      await updateDetail(cartItemId, selectedColor, selectedSize, newQuantity, selectedImage);
    } catch (error) {
      console.error('Failed to update size in DB:', error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" mr-[64px]"></div>
      <div className="flex w-[1072px] h-[204px] items-center border-b-2 border-secondary-light-gray-300">
        <img src={selectedImage} className="w-[204px] h-[200px]" alt={name} />
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
              {productType === 'shirt' ? (
                <>
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
                </>
              ) : (
                <select
                  id="sizes"
                  name="sizes"
                  value="one size"
                  className="appearance-none pr-8 pl-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primary-500"
                  disabled
                >
                  <option value="one size">One Size</option>
                </select>
              )}
            </div>
            <p className="col-span-2">{price} THB</p>
          </div>

          {/* quantity selection */}
          <div className="flex gap-[16px]">
            <button
              onClick={handleIncreaseQuantityChange}
              className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              +
            </button>
            <p>{selectedQuantity}</p>
            <button
              onClick={handleDecreaseQuantityChange}
              className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              -
            </button>
          </div>
          <button>
            <div className="flex gap-[8px] items-center">
              <p>{currentPrice} THB</p>

              {/* Delete button */}
              <button
                onClick={() => {
                  onDeleteData(cartItemId);
                  onDeleteFront(cartItemId);
                }}
                className="transition-transform duration-300 hover:scale-140 hover:cursor-pointer"
              >
                <img
                  src="src\assets\images\circle-xmark-solid.svg"
                  className="flex items-center justify-center w-[16px] h-[16px]"
                  alt="remove"
                />
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
