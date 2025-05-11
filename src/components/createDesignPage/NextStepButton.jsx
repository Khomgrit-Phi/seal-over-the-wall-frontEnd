import React from 'react';
import arrowright from "../../assets/images/create-design-pages/arrow-right.svg";

function NextStepButton({ onNext }) {
  return (
    <button
      type="button"
      onClick={onNext}
      className='w-[256px] h-[48px] bg-primary-black text-white font-medium py-2 px-4 rounded-[8px] relative flex items-center justify-center cursor-pointer'
    >
      Next Step
      <img src={arrowright} alt="Arrow right" className='ml-4' />
    </button>
  );
}

export default NextStepButton;
