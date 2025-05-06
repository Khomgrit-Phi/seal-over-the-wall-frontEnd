import React, { useState } from 'react';
import frontprint from "../../assets/images/create-design-pages/t-shirt-front-print.svg";
import backprint from "../../assets/images/create-design-pages/t-shirt-back-print.svg";

function Printareas() {
  const [selected, setSelected] = useState([]);
  const printareas = [
    { name: 'frontprint', icon: frontprint },
    { name: 'backprint', icon: backprint },
  ];

  const togglePrintArea = (name) => {
    setSelected((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name) // Remove if already selected
        : [...prevSelected, name] // Add if not selected
    );
  };

  return (
    <div>
      <h2 className="font-semibold text-xl mb-[16px]">Print areas</h2>
      <div className="flex gap-[24px]">
        {printareas.map((printarea) => (
          <button
            key={printarea.name}
            onClick={() => togglePrintArea(printarea.name)}
            className="group relative cursor-pointer pb-2"
          >
            <img src={printarea.icon} alt={printarea.name} />

            {/* Animated underline */}
            <div className={`
              absolute bottom-0 left-0 h-1 w-full rounded-sm
              origin-down
              bg-primary-blue-500
              transition-transform duration-300
              ${selected.includes(printarea.name) ? 'scale-x-70' : 'scale-x-0'}
            `} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Printareas;
