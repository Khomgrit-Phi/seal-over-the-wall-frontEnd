import React, { useState, useEffect } from 'react';
import { updateDetail } from '../services/cart'; // Import the updateDetail service
import { useAuth } from '../context/AuthContext.jsx'; // Import the AuthContext to use the updateCartData

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
    const { updateCartData } = useAuth(); // Destructure the updateCartData function from the context
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

    // Generalized function to handle data changes and update the cart
    const handleDataChange = async (newColor, newSize, newQuantity, newImage) => {
        try {
            // Update the cart item details in the database
            await updateDetail(cartItemId, newColor, newSize, newQuantity, newImage);
            // Trigger the cart context update by calling updateCartData from AuthContext
            await updateCartData();
        } catch (error) {
            console.error('Failed to update cart item:', error);
            // Consider showing a user-friendly error message here
        }
    };

    // Handle color change
    const handleColorChangeInternal = (event) => {
        const newColor = event.target.value;
        const newImage = imageArray[colorImageMap[newColor]];
        setSelectedColor(newColor);
        setSelectedImage(newImage);
        onColorChange(cartItemId, newColor, newImage); // Call the prop to update the parent
        handleDataChange(newColor, selectedSize, selectedQuantity, newImage); // Call combined function
    };

    // Handle size change
    const handleSizeChangeInternal = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
        onSizeChange(cartItemId, newSize);  // Call the prop to update the parent
        handleDataChange(selectedColor, newSize, selectedQuantity, selectedImage); // Call combined function
    };

    // Handle quantity increase
    const handleIncreaseQuantityChangeInternal = () => {
        const newQuantity = selectedQuantity + 1;
        setSelectedQuantity(newQuantity);
        onQuantityChange(cartItemId, newQuantity); // Call the prop to update the parent
        handleDataChange(selectedColor, selectedSize, newQuantity, selectedImage); // Call combined function
    };

    // Handle quantity decrease
    const handleDecreaseQuantityChangeInternal = () => {
        const newQuantity = Math.max(1, selectedQuantity - 1);  // prevent negative
        setSelectedQuantity(newQuantity);
        onQuantityChange(cartItemId, newQuantity); // Call the prop to update the parent
        handleDataChange(selectedColor, selectedSize, newQuantity, selectedImage); // Call combined function
    };

    // Handle item removal
      const handleRemoveItem = () => {
        onDeleteData(cartItemId);
        onDeleteFront(cartItemId);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="mr-[64px]"></div>
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
                                onChange={handleColorChangeInternal}
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
                                        onChange={handleSizeChangeInternal}
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
                                    value="one-size"
                                    className="appearance-none pr-8 pl-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primary-500"
                                    disabled
                                >
                                    <option value="one-size">One Size</option>
                                </select>
                            )}
                        </div>
                        <p className="col-span-2">{price} THB</p>
                    </div>

                    {/* quantity selection */}
                    <div className="flex gap-[16px]">
                        <button
                            onClick={handleIncreaseQuantityChangeInternal}
                            className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-110"
                        >
                            +
                        </button>
                        <p>{selectedQuantity}</p>
                        <button
                            onClick={handleDecreaseQuantityChangeInternal}
                            className="flex items-center justify-center w-[24px] h-[24px] font-bold border-1 rounded-full hover:cursor-pointer transition-transform duration-300 hover:scale-110"
                        >
                            -
                        </button>
                    </div>
                    <button onClick={handleRemoveItem}>
                        <div className="flex gap-[8px] items-center">
                            <p>{currentPrice} THB</p>

                            {/* Delete button */}
                            <img
                                src="src\assets\images\circle-xmark-solid.svg"
                                className="flex items-center justify-center w-[16px] h-[16px] transition-transform duration-300 hover:scale-140 hover:cursor-pointer"
                                alt="remove"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

