import React from 'react'
import spark from "/assets/images/collect-details-pages/iconoir_spark.svg"
import sparkblack from "/assets/images/collect-details-pages/spark-balck.svg"
import logo from "/assets/images/custommike-navbar-logo.svg"
import check from "/assets/images/collect-details-pages/icon-park-solid_check-one.svg"
import shortline from "/assets/images/collect-details-pages/short-line.svg"
import dot from "/assets/images/collect-details-pages/mingcute_dots-line.svg"
import { Switch } from '@mui/material'


function PromotionCampaign() {
  return (
    <div>
      <div className='flex justify-center items-center w-[340px] h-[48px] bg-primary-black rounded-full ml-125'>
          <img src={spark} alt="Spark Icon" className='mr-1'/>
          <h2 className='text-white text-2xl font-semibold flex justify-center items-center h-full'>
            Promotion & Campaign
          </h2>
      </div>
      <div className='text-[32px] font-bold flex justify-center gap-4 mt-4'>
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
          <img src={shortline} />
        </div>
        <div className='mt-10 mx-[70px] flex items-center'>
          <img src={dot} className='mr-2' />
          <p className='text-[20px] ml-1'>On average, campaigns that join our Promotion Network</p>
          <p className='text-[24px] text-primary-blue-500 font-medium ml-1'>see a 70% increase in sales!</p>
          <p className='text-[20px] ml-1'>It's risk-free and free of charge!</p>
        </div>
         <div className='mt-4 mx-[70px] flex items-center'>
          <img src={dot} className='mr-2' />
          <p className='text-[20px] ml-1'>For any sales generated through our network, we operate on a 50/50 profit share. For all sales made outside the network,<br />
          you keep 100% of the profit.</p>
        </div>
        <hr className='border-secondary-dark-gray-300 h-[2px] mt-6 mb-14'/>
        
        <div className='w-full h-[40px] flex justify-center items-center'>
          <img src={sparkblack} className='w-[18px] h-[18px]'/>
          <h2 className='font-bold text-[32px] m-2'>Join this campaign!</h2>
          <Switch />
        </div>
    </div>
  )
}

export default PromotionCampaign