import React from 'react'
import ProductSelection from '../components/createDesignPage/ProductSelection';
import ColorSelection from '../components/createDesignPage/ColorSelection';
import TShirtTemplate from '../components/createDesignPage/TShirtTemplate';
import UploadDesignBox from '../components/createDesignPage/UploadDesignBox';
import SelectedProduct from '../components/createDesignPage/SelectedProduct';
import Test from "../components/createDesignPage/Test";
import Test2 from "../components/createDesignPage/Test2";
import Walkthrough from '../components/createDesignPage/Walkthrough';
import NextStepButton from '../components/createDesignPage/NextStepButton';
import SaveButton from '../components/createDesignPage/SaveButton';




function CreateDesign() {

  return (
    <>
    <div className="font-semibold text--fs-xl flex justify-center items-center h-16 bg-gray-200 mb-7">
        Stepper Placeholder
    </div>

    <div className='step-1 flex justify-center mt-6 mb-6'>
        <ProductSelection />
    </div>
    <div className='absolute w-full flex justify-center items-center'>
    <div className='w-full px-40 flex justify-between items-start pr-[152px]'>
        <ColorSelection />
        <div className="flex justify-end items-center gap-4 mt-6">
            <button>
            <SaveButton />
            </button>
            <button>
            <NextStepButton />
            </button>
        </div>
        </div>
    </div>
    <div className="w-full flex flex-col items-center gap-8 px-4 my-10">
        <div className='absolute z-10 mt-25'>
        <UploadDesignBox />
        </div>
        <div className='relative'>
        {<TShirtTemplate />}
        </div>
    </div>
    <div className='flex justify-center mt-2'>
        <SelectedProduct />
    </div>


    {/* <section>
        <Test />
        <Test2 />
    </section> */}

    <Walkthrough />
    </>
  )
}

export default CreateDesign;