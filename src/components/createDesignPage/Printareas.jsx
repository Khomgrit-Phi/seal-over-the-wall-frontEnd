import React from 'react';

function Printareas({ printareas = [], selected, setSelected }) {
  const togglePrintArea = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Print Areas</h2>
      <div className="flex gap-6">
        {printareas.map((printarea) => (
          <button
            key={printarea.name}
            onClick={() => togglePrintArea(printarea.name)}
            className="group relative cursor-pointer pb-2 focus:outline-none"
            aria-pressed={selected.includes(printarea.name)}
          >
            <img
              src={printarea.icon}
              alt={`${printarea.label || printarea.name} preview`}
              className="w-[80px] h-auto"
            />
            <div className={`
              absolute bottom-0 left-0 h-1 w-full rounded-sm
              bg-primary-blue-500 transition-transform duration-300
              ${selected.includes(printarea.name) ? 'scale-x-100' : 'scale-x-0'}
              transform origin-left
            `} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Printareas;
