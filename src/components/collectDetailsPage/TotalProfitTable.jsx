import React from 'react'
import shortline from "../../assets/images/collect-details-pages/short-line.svg"

function TotalProfitTable() {
  return (
    <div className='w-[560px] h-[600px] bg-white rounded-lg shadow-xl p-4 items-center'>
        <h1 className='text-xl font-semibold mb-2'>Total Profit</h1>
        <div className='flex flex-col justify-center w-[512px] h-[104px]'>
            <h2 className='text-5xl font-bold text-primary-blue-500 mb-1'>86,000 THB</h2>
            <p className='mt-1'>Total Profit from All Items per Campaign</p>
        </div>
            <h2 className='font-semibold text-xl my-2' >Profit byt Item</h2>
              
              <div className=' flex flex-col justify-center items-center w-[512px] h-[350px]'>
              {/* first line */}
              <div className='flex justify-between w-[512px] h-[82px] mt-4'>
                <div>
                    <h2 className='font-semibold text-xl'>Custommike?</h2>
                    <p>T-Shirt</p>
                    <p>499 THB</p>
                </div>
                <p>100 items</p>
                <p className='font-semibold text-xl'>26,000 THB</p>
              </div>
              <div>
                    <img src={shortline} alt="" />
                </div>
             
             {/* second line */}
             <div className='flex justify-between w-[512px] h-[82px] mt-4'>
                <div>
                    <h2 className='font-semibold text-xl'>Custommike?</h2>
                    <p>Bag</p>
                    <p>299 THB</p>
                </div>
                <p>100 items</p>
                <p className='font-semibold text-xl'>32,000 THB</p>
              </div>
              <div>
                    <img src={shortline} alt="" />
                </div>
            
             {/* third line */}
             <div className='flex justify-between w-[512px] h-[82px] mt-4'>
                <div>
                    <h2 className='font-semibold text-xl'>Custommike?</h2>
                    <p>Cup</p>
                    <p>399 THB</p>
                </div>
                <p>100 items</p>
                <p className='font-semibold text-xl'>28,000 THB</p>
              </div>
              <div>
                    <img src={shortline} alt="" />
                </div>
                </div>


        </div>

  )
}

export default TotalProfitTable