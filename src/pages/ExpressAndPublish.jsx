import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import gif from "../assets/images/gif/custommike-motion.gif"



const ExpressAndPublish = ({ onNext, onBack }) => {
  return (
    <div className=" flex flex-col items-center">
            <div className="w-full mb-10 pl-[288px]">
                <h1 className="text-4xl font-bold">Express & Publish</h1>
                <p className="text-lg mt-4 mb-13">
                    Ready to showcase your creation? Fill in your product details and click to present your work to buyers!
                    <br />
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
          
      <Outlet />
    </div>
  );
};

export default ExpressAndPublish;
