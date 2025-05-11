import React from 'react';
import tshirt from '../../assets/images/Products/shirt/prove/prove-shirt-white-front.png';
import bags from '../../assets/images/Products/bag/prove/prove-bag-white-front.png';
import cups from '../../assets/images/Products/cup/prove/prove-cup-white-front.png';
import line from '../../assets/images/collect-details-pages/Line.svg';


function PriceAndStockTable() {
  return (
    <div className="w-[1000px] h-[600px] bg-white rounded-lg shadow-xl p-4 items-center">
      <h1 className="text-xl font-semibold mb-2">Price and Stock</h1>

      {/* first line */}
      <div className=" h-[166px] flex justify-between">
        <img src={tshirt} alt="T-shirt" />
        <div className="flex flex-col justify-center items-start w-[320px]">
          <h2 className="font-semibold text-xl">Custommike?</h2>
          <p>T-Shirt</p>
        </div>
        <div className="flex justify-between w-[392px] mr-10">
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Price</p>
            <p>APH</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p className="mb-0.5">Add Quantity</p>
            <input type="text" className="bg-white outline-1 outline-secondary-dark-gray-300 rounded-md w-[120px] h-[52px] mt-0.5" />
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Profit/Unit</p>
            <p>56 THB</p>
          </div>
        </div>
      </div>
      <div>
        <img src={line} alt="Line" />
      </div>

      {/* second line */}
      <div className=" h-[166px] flex justify-between">
        <img src={bags} alt="Bags" />
        <div className="flex flex-col justify-center items-start w-[320px]">
          <h2 className="font-semibold text-xl">Custommike?</h2>
          <p>Bags</p>
        </div>
        <div className="flex justify-between w-[392px] mr-10">
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Price</p>
            <p>APH</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p className="mb-0.5">Add Quantity</p>
            <input type="text" className="bg-white outline-1 outline-secondary-dark-gray-300 rounded-md w-[120px] h-[52px] mt-0.5" />
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Profit/Unit</p>
            <p>56 THB</p>
          </div>
        </div>
      </div>
      <div>
        <img src={line} alt="Line" />
      </div>

      {/* third line */}
      <div className=" h-[166px] flex justify-between">
        <img src={cups} alt="Cup" />
        <div className="flex flex-col justify-center items-start w-[320px]">
          <h2 className="font-semibold text-xl">Custommike?</h2>
          <p>Cup</p>
        </div>
        <div className="flex justify-between w-[392px] mr-10">
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Price</p>
            <p>APH</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p className="mb-0.5">Add Quantity</p>
            <input type="text" className="bg-white outline-1 outline-secondary-dark-gray-300 rounded-md w-[120px] h-[52px] mt-0.5" />
          </div>
          <div className="flex flex-col justify-center items-center w-[120px]">
            <p>Profit/Unit</p>
            <p>56 THB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceAndStockTable;
