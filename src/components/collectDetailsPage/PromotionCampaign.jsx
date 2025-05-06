import React from 'react'
import spark from "../../assets/images/collect-details-pages/iconoir_spark.svg"
import logo from "../../assets/images/custommike-navbar-logo.svg"
import check from "../../assets/images/collect-details-pages/icon-park-solid_check-one.svg"
import shortline from "../../assets/images/collect-details-pages/short-line.svg"

function PromotionCampaign() {
  return (
    <div>
      <div className='flex justify-center items-center w-[340px] h-[48px] bg-primary-black rounded-full ml-130'>
          <img src={spark} alt="Spark Icon" className='mr-1'/>
          <h2 className='text-white text-2xl font-semibold flex justify-center items-center h-full'>
            Promotion & Campaign
          </h2>
      </div>
      <div className='text-xl font-bold flex justify-center gap-2 mt-4'>
        <h2 className='pt-1'>
          Boost Your Sales with
        </h2>
        <img src={logo} alt="Logo" />
      </div>
        <p className='w-[1344px] text-center mt-6'>Elevate your products and reach more customers! Join our promotion network and gain premium visibility in our shop, special collections,
          <br/>social media, and advertising campaigns.
        </p>
        <div className='flex justify-center items-baseline mt-10 mb-10'>
          <span className='font-bold text-5xl'>
            Why
          </span>
          <span className='text-2xl font-bold'>
            Join
          </span>
          <img src={logo} alt="Logo"  className='ml-4'/>
        </div>
        <div className='flex justify-center gap-4'>

        <div className='flex items-center bg-primary-blue-500 w-[600px] h-[108px] rounded-2xl p-4'>
          <img src={check} alt="" className='w-[40px] h-[40px] mr-2' />
          <p className='text-white font-medium w-[704] h-[56]'>
            Increased Visibility: Your products will be promoted widely, reaching a<br/> larger audience.
          </p>
        </div>

        <div className='flex items-center bg-primary-blue-500 w-[600px] h-[108px] rounded-2xl p-4'>
          <img src={check} alt="" className='w-[40px] h-[40px] mr-2' />
          <p className='text-white font-medium w-[704] h-[56]'>
          Higher Sales Potential: On average, sellers who join experience 
          (mention a percentage increase or compelling statement about sales growth).
          </p>
        </div>
        </div>
        <div className='flex justify-center gap-4 mt-4'>

        <div className='flex items-center bg-primary-blue-500 w-[600px] h-[108px] rounded-2xl p-4'>
          <img src={check} alt="" className='w-[40px] h-[40px] mr-2' />
          <p className='text-white font-medium w-[704] h-[56]'>
          Reach New Customers: Expand your customer base to those interested in similar products.
          </p>
        </div>

        <div className='flex items-center bg-primary-blue-500 w-[600px] h-[108px] rounded-2xl p-4'>
          <img src={check} alt="" className='w-[40px] h-[40px] mr-2' />
          <p className='text-white font-medium w-[704] h-[56]'>
          Partner for Success: We work with you to increase your sales opportunities.
          </p>
        </div>
        </div>
        <div className='mt-10 flex justify-center'>
          <img src={shortline} alt=""/>

        </div>
    </div>
  )
}

export default PromotionCampaign