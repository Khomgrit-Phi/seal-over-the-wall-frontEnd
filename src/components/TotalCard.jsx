import React from 'react'
import CheckoutButton from './CheckoutButtonCard'

function TotalCard({subTotal, tax="7" ,shippingCost, orderValue,currentStep}) {
  return (
    <div className='w-full flex flex-col gap-8'>
        <div className='flex flex-col gap-[30px] w-full'>
            <div className='flex justify-between text-primary-black text-[20px] font-[600]'>
                <span>Subtotal</span>
                {`${subTotal} THB`}
            </div>
            <div className='flex justify-between text-primary-black text-[20px] font-[600]'>
                <span>Tax inclusive</span>
                {`${tax}%`}
            </div>
            <div className='flex justify-between text-primary-black text-[20px] font-[600]'>
                <span>Shipping costs</span>
                {`${shippingCost} THB`}
            </div>
        </div>
        <CheckoutButton orderValue={orderValue} currentStep={currentStep} className="justify-between" />
    </div>
  )
}

export default TotalCard