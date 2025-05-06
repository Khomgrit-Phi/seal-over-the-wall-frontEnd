import React, { useState } from 'react';
import Printareas from './Printareas';


function ColorSelection() {
  const [selected, setSelected] = useState([]);

  const colors = [
    { name: 'white', className: 'bg-primary-white' },
    { name: 'gray', className: 'bg-secondary-light-gray-500' },
    { name: 'black', className: 'bg-primary-black' },
    { name: 'blue', className: 'bg-primary-blue-500' },
  ];

  const toggleColor = (colorName) => {
    setSelected((prevSelected) =>
      prevSelected.includes(colorName)
        ? prevSelected.filter((name) => name !== colorName)
        : [...prevSelected, colorName]
    );
  };

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Colors</h2>
      <div className="step-4 flex gap-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => toggleColor(color.name)}
            className={`
              ${color.className}
              rounded-full
              size-[40px]
              cursor-pointer
              transition-all
              duration-300
              ${color.name === 'white' ? 'border border-black' : ''}
              ${selected.includes(color.name) ? 'ring-4 ring-primary-blue-500 ring-offset-2' : ''}
            `}
          />
        ))}
      </div>
      {<div className='step-3 mt-10'>
      <Printareas />
      </div>}
    </div>
  );
  
}

export default ColorSelection;
