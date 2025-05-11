import React from 'react'
import CaretLeft from "../../assets/images/collect-details-pages/CaretLeft.svg"

function BackButton({ onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="w-[72px] h-[48px] outline-1 text-black font-medium py-2 px-4 rounded-[8px] cursor-pointer"
    >
      <img src={CaretLeft} className='ml-2'/>
    </button>
  );
}

export default BackButton