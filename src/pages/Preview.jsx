import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import shirtProvWhiteFront from "../../src/assets/images/Products/shirt/prove/prove-shirt-white-front.png";
import bagWhiteFront from "../../src/assets/images/Products/bag/prove/prove-bag-white-front.png";
import cupWhiteFront from "../../src/assets/images/Products/cup/prove/prove-cup-white-front.png";
import shirtProvWhiteFrontPreviewWomen from "../../src/assets/images/expressAndPublish/prove-shirt-white-front-preview-women-1.jpg";
import shirtProvWhiteBackPreviewWomen from "../../src/assets/images/expressAndPublish/prove-shirt-white-back-preview-women-1.jpg";
import iconArrowLeft from "../assets/images/expressAndPublish/iconArrowLeft.png";
import shirtProvWhiteFrontPreviewWomenWithglasses from "../assets/images/preview/prove-shirt-white-font-preview-women-2.jpg";
import shirtProvWhiteBackPreviewWomenWithBag from "../assets/images/preview/prove-shirt-white-back-preview-women-2.jpg";
import iconArrowRight from "../assets/images/preview/iconArrowRight.png";
import logoCustommike from "../assets/images/preview/custommike-navbar-logo.svg";
import logoResponsible from "../assets/images/preview/Responsible.svg";
import logoEco from "../assets/images/preview/ECO.svg";
import logoOrganic from "../assets/images/preview/Organic.svg";
import iconIg from "../assets/images/preview/icon-ig.svg";
import iconX from "../assets/images/preview/icon-x.svg";
import iconFb from "../assets/images/preview/icon-fb.svg";
import iconShirtFrontArea from "../assets/images/preview/iconShirtFrontArea.svg";
import iconShirtBackArea from "../assets/images/preview/iconShirtBackArea.svg";




const Preview = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col items-center">
            <div className="w-full mb-10 pl-[288px]">
                <h1 className="text-4xl font-bold">Preview</h1>
                <p className="text-lg mt-4 mb-6">
                    Preview your design before publishing.<br/>This page will display the image, color, size, product type, and description you provided earlier.
                 </p>
                <div className="flex justify-end items-center gap-4 pr-[136px] mt-1.5 ">
                <button>
                <BackButton onBack={onBack} />
                </button>

                <button >
                <NextStepButton onNext={onNext} />
                </button>
                </div>
        </div>
        <div className='w-full px-[152px]'>

        {/* Main Content in ExpressAndPlublish page*/}
        <div className='mb-33'>

        {/* Product Preview */}
        <div className='mt-2'>
            {/* Product type col and Product preview image*/}
            <div className='flex items-center'>
              {/* Product type col for select */}
              <div className='flex flex-col gap-4 ml-34 mr-72'>
                <button className='cursor-pointer'>
                    <img src= {shirtProvWhiteFront} alt="T-shirt" className="h-30 w-30 rounded-lg" />
                </button>
                <button className='cursor-pointer'> 
                    <img src= {bagWhiteFront} alt="Bag" className="h-30 w-30 rounded-lg" />
                </button>
                <button className='cursor-pointer'>
                    <img src= {cupWhiteFront} alt="Cup" className="h-30 w-30 rounded-lg" />
                </button>
              </div>

              {/* Product preview image */}
              <img src={shirtProvWhiteFront} alt="T-shirt" className='w-195 h-195' />
            </div>
        
            {/* add image slice */}
            <div className='mt-4 flex flex-row overflow-x-auto items-center'>
              {/* added images */}
              <div className='gap-4 flex flex-row'>
                <button className='bg-white w-97 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center relative'>
                    <img src={iconArrowLeft} alt="icon arrow left" className='h-6 w-3 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer'/>
                    <button className='h-full w-full flex items-center justify-center cursor-pointer'>
                        <img src={shirtProvWhiteFrontPreviewWomen} alt="T-shirt" className="h-full max-w-full object-contain" />
                    </button>
                </button>
                <button className='bg-white w-97 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center cursor-pointer'>
                    <img src={shirtProvWhiteBackPreviewWomen} alt="T-shirt" className="h-full max-w-full object-contain" />
                </button>
                <button className='bg-white w-97 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center cursor-pointer'>
                    <img src={shirtProvWhiteFrontPreviewWomenWithglasses} alt="T-shirt" className="h-full max-w-full object-contain" />
                </button>
                <button className='bg-white w-97 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center relative'>
                    <img src={iconArrowRight} alt="icon arrow right" className='h-6 w-3 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'/>
                    <button className='h-full w-full flex items-center justify-center cursor-pointer'>
                        <img src={shirtProvWhiteBackPreviewWomenWithBag} alt="T-shirt" className="h-full max-w-full object-contain" />
                    </button>
                </button>
            </div>
            </div>
        </div>
            
          {/* Create Collect and Express */}
        <div className="flex items-center gap-8 pb-8 pt-12 border-b-1 border-gray-200">
            <div className="flex flex-col">
                <img src={logoCustommike} alt="" className="w-[272px]" />
                <p className="text-xl font-semibold">Create Collect and Express</p>
            </div>
            <div className="flex gap-4">
                <img src={logoResponsible} alt="" className="h-[56px] w-auto" />
                <img src={logoEco} alt="" className="h-[56px] w-auto" />
                <img src={logoOrganic} alt="" className="h-[56px] w-auto" />
            </div>
        </div>

          <div className="flex justify-between items-center p-4 border-b-1 border-gray-200">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#334DD8] rounded-full text-white flex items-center justify-center text-2xl font-semibold">
                    AL
                  </div>
                  <p className="pl-4 text-2xl font-semibold">Artists Lalala</p>
                  <button className="bg-[#334DD8] px-12 py-2 rounded-full text-white ml-20">
                    Follow
                  </button>
                </div>
        
                <div className="w-1/2">
                  <p className="text-xl ">
                    Playful lines, dreamy vibes.  Artists Lalala creates illustrations that spark joy and imagination one doodle at a time.
                  </p>
                  <div className="flex gap-5 mt-4 text-xl font-semibold">
                    <p className="flex items-center gap-2">
                      <img src={iconIg} alt="Instagram Icon" /> Artists Lalala
                    </p>
        
                    <p className="flex items-center gap-2">
                      <img src={iconX} alt="Instagram Icon" /> Artists Lalala
                    </p>
        
                    <p className="flex items-center gap-2">
                      <img src={iconFb} alt="Instagram Icon" /> Artists Lalala
                    </p>
                  </div>
                </div>
              </div>

               <div className="flex justify-between py-8">
        <div>
          <h5 className="text-[40px] font-semibold">Prove them wrong -shirt</h5>
          <p className="text-2xl mt-4">499 THB</p>
          <div className="flex gap-4 mt-6">
            <p className="text-2xl font-semibold">Sizes</p>
            <button className="underline">View size chart</button>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold">S</button>
            <button className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold">M</button>
            <button className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold">L</button>
          </div>
          <p className="text-2xl font-semibold mt-6">Colors</p>
          <div className="flex gap-4 mt-4">
            <button className="w-10 h-10 rounded-full border-1 bg-[#ffffff]"></button>
            <button className="w-10 h-10 rounded-full bg-[#5A5959]"></button>
            <button className="w-10 h-10 rounded-full bg-black"></button>
            <button className="w-10 h-10 rounded-full bg-[#334DD8]"></button>
          </div>
        </div>

        <div className="w-1/2">
          <h5 className="text-2xl font-semibold">Print areas</h5>
          <div className="flex gap-8">
            <img
              src={iconShirtFrontArea}
              alt="Icon shirt fontside show mark print area"
              className="h-[72px] w-auto"
            />
            <img
              src={iconShirtBackArea}
              alt="Icon shirt backside show mark print area"
              className="h-[72px] w-auto"
            />
          </div>
          <p className="text-xl mt-6 w-190 wrap-text">
            Prove Them Wrong" is about answering doubt with action. It’s not about words 
            it’s about results. This design symbolizes those who refuse to be limited by others' 
            expectations and choose to win by proving themselves through real achievements.
          </p>
          <button className="p-2 rounded-md border-1 border-gray-200 mt-2">
            Read More
          </button>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">custom</button>
            <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">t-shirt</button>
            <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">collection</button>
            <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">Artists Lalala</button>
          </div>
        </div>
      </div>
        </div>
    </div>
        
      <Outlet />
    </div>
  );
};

export default Preview;
