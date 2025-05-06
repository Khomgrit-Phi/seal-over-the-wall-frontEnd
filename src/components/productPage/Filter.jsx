import { useState } from "react";

const options = ["S", "M", "L", "one size"];

const Filter = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    setSelectedOptions(
      (prev) =>
        prev.includes(option)
          ? prev.filter((item) => item !== option) // ถ้ามีอยู่ เอาออก
          : [...prev, option] // ถ้ายังไม่มี เพิ่มเข้า
    );
  };
  return (
    <div className="p-2 w-full mt-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl">Filter</span>
        <button className=" hover:underline cursor-pointer">Reset all</button>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl">Sort By</span>
        <button className=" hover:underline cursor-pointer">Clear</button>
      </div>

      <div className="space-y-3 mt-5">
        <label className="flex items-center gap-2 text-lg">
          <input type="checkbox" className="form-checkbox w-6 h-6" />
          Fresh Picks
        </label>
        <label className="flex items-center gap-2 text-lg">
          <input type="checkbox" className="form-checkbox w-6 h-6" />
          Top Picks
        </label>
      </div>

      <hr className="border-gray-300 mt-6" />

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl">Print Areas</span>
        <button className="hover:underline cursor-pointer">Clear</button>
      </div>

      <div className="space-y-3 mt-5">
        <label className="flex items-center gap-2 text-lg">
          <input type="checkbox" className="form-checkbox w-6 h-6" />
          Front print
        </label>
        <label className="flex items-center gap-2 text-lg">
          <input type="checkbox" className="form-checkbox w-6 h-6" />
          Back print
        </label>
        <label className="flex items-center gap-2 text-lg">
          <input type="checkbox" className="form-checkbox w-6 h-6" />
          Underside print
        </label>
      </div>

      <hr className="border-gray-300 mt-6" />

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl">Size</span>
        <button className="hover:underline cursor-pointer">Clear</button>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleOption(option)}
            className={`border-2 py-1 rounded text-xl transition 
            ${
              selectedOptions.includes(option)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-400 hover:bg-blue-100"
            }
          `}
          >
            {option}
          </button>
        ))}
      </div>
      <hr className="border-gray-300 mt-6" />

      <div className="flex justify-between items-center mt-6">
        <span className="text-xl">Color</span>
        <button className="hover:underline cursor-pointer">Clear</button>
      </div>

      <div className="flex justify-between text-center mt-6">
        {[
          { color: "bg-white", label: "White", border: "border" },
          { color: "bg-gray-400", label: "Grey" },
          { color: "bg-black", label: "Black" },
          { color: "bg-blue-600", label: "Blue" },
        ].map(({ color, label, border }) => (
          <div key={label} className="flex flex-col items-center space-y-1 cursor-pointer">
            <div
              className={`w-10 h-10 rounded-full ${color} ${border ?? ""}`}
            />
            <span className="text-lg">{label}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-black text-white py-2 mt-10 cursor-pointer">Apply</button>
    </div>
  );
};
export default Filter;
