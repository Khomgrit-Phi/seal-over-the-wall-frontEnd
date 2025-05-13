import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import gif from "../assets/images/gif/custommike-motion.gif"



const Preview = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col items-center">
            <div className="w-full mb-10 pl-[288px]">
                <h1 className="text-4xl font-bold">Preview</h1>
                <p className="text-lg mt-4 mb-6">
                    Preview your design before publishing.<br/>This page will display the image, color, size, product type, and description you provided earlier.
                 </p>
                <div className="flex justify-end items-center gap-4 pr-[152px] mt-1.5 ">
                <button>
                <BackButton onBack={onBack} />
                </button>

                <button >
                <NextStepButton onNext={onNext} />
                </button>
                </div>
        </div>
        <h2 className="text-2xl font-semibold text-primary-black mb-2">Preview Content here!</h2>
        <img src={gif} className="w-3/6 h-auto"/>
        
      <Outlet />
    </div>
  );
};

export default Preview;
