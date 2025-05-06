import React from 'react'
import CaretLeft from "../../assets/images/collect-details-pages/CaretLeft.svg"

function BackButton() {
  return (
    <button  className="w-[72px] h-[48px] px-4 py-3 bg-white rounded-lg outline-1 outline-primary-black cursor-pointer">
        <div className='flex justify-center items-center gap-2'>
            <img src={CaretLeft} alt="Left Arrow" className='' />
        </div>
    </button>
    
  )
}

export default BackButton