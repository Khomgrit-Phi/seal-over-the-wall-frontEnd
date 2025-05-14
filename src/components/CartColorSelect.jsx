import React, { useState } from 'react';

const colorArray = [
  { name: 'white', colorCode: 'bg-primary-white' },
  { name: 'gray', colorCode: 'bg-[#5A5959]' },
  { name: 'black', colorCode: 'bg-primary-black' },
  { name: 'blue', colorCode: 'bg-primary-blue-500' }
];

export default function ColorDropdown({ selectedColor, onColorChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleColorSelect = (color) => {
    onColorChange(color);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className={`flex items-center gap-1 px-2 py-1 border-2 rounded ${selectedColor.colorCode}`}>
        <div className={`w-6 h-6 rounded-full ${selectedColor.colorCode}`} />
        <span className="ml-1">▼</span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 bg-white border rounded shadow-md">
          {colorArray.map((color) => (
            <div key={color.name} className={`flex items-center gap-2 p-2 cursor-pointer `} onClick={() => handleColorSelect(color)}>
              <div className={`w-6 h-6 rounded-full ${color.colorCode}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
