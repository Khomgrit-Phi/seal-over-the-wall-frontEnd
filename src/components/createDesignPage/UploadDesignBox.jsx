import React from 'react'
import fileicon from "../../assets/images/create-design-pages/file-icon.svg";

function UploadDesignBox() {
  return (
    <div className='step-2 flex flex-col items-center justify-center w-[296px] h-[340px] outline-3 outline-dashed outline-gray-200'>
      <p className='font-semibold text-2xl'>Upload you design</p>
      <p className='font-medium text-lg'>Drag & Drop it here</p>
      <img src={fileicon} alt="File Icon" className='w-[56px] h-[72px] my-10' />
      <div className='flex items-center justify-center gap-2'>
      <p className='font-medium text-lg text-secondary-dark-gray-300'>or</p>
      <button className='font-medium text-lg text-primary-blue-500 underline cursor-pointer hover:text-primary-blue-700'>Upload</button>
      <p className='font-medium text-lg text-secondary-dark-gray-300'>your file</p>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-secondary-dark-gray-300'>Max file size </p>
        <p className='font-medium text-lg text-secondary-dark-gray-300'>: 25MB</p>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-secondary-dark-gray-300'>Supported file types </p>
        <p className='font-medium text-lg text-secondary-dark-gray-300'>: JPG, PNG</p>
      </div>
    </div>
  )
}

export default UploadDesignBox