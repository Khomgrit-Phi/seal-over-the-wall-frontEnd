import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NextStepButton from '../components/createDesignPage/NextStepButton';
import BackButton from '../components/collectDetailsPage/BackButton';
import ProductType from '../components/expressAndPublish/ProductType';
import iconUplodeFile from '../assets/images/expressAndPublish/icon-uplodeFile.png';
import iconAdd from '../assets/images/expressAndPublish/iconAdd.png';
import iconArrowLeft from '../assets/images/expressAndPublish/iconArrowLeft.png';
import iconArrowRight from '../assets/images/expressAndPublish/iconArrowRight.png';
import shirtProvWhiteFront from '../../src/assets/images/Products/shirt/prove/prove-shirt-white-front.png';
import shirtProveBlueFront from '../../src/assets/images/Products/shirt/prove/prove-shirt-blue-front.png';
import shirtProveGrayFront from '../../src/assets/images/Products/shirt/prove/prove-shirt-gray-back.png';
import shirtProveBlackFront from '../../src/assets/images/Products/shirt/prove/prove-shirt-black-front.png';

const ExpressAndPublish = ({ onNext, onBack }) => {
  const [productPreview, setProductPreview] = useState(shirtProvWhiteFront);
  const [productPreviewChild1, setProductPreviewChild1] = useState(shirtProveBlueFront);
  const [productPreviewChild2, setProductPreviewChild2] = useState(shirtProveGrayFront);
  const [productPreviewChild3, setProductPreviewChild3] = useState(shirtProveBlackFront);
  const [selectedCategory, setSelectedCategory] = useState('Shirt');
  const [productName, setProductName] = useState('');
  const [concept, setConcept] = useState('');

  const handleChildImageClick = (image) => setProductPreview(image);
  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleProductNameChange = (e) => setProductName(e.target.value);
  const handleConceptChange = (e) => setConcept(e.target.value);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-10 pl-[288px]">
        <h1 className="text-4xl font-bold">Express & Publish</h1>
        <p className="text-lg mt-4 mb-12">
          Ready to showcase your creation? Fill in your product details and click to present your work to buyers!
        </p>
        <div className="flex justify-end items-center gap-4 pr-[128px] mt-1.5">
          <button><BackButton onBack={onBack} /></button>
          <button><NextStepButton onNext={onNext} /></button>
        </div>
      </div>

      <div className="w-full px-[152px]">
        <div className="mt-2 flex items-center">
          <ProductType
            sendImage={setProductPreview}
            sendChild1={setProductPreviewChild1}
            sendChild2={setProductPreviewChild2}
            sendChild3={setProductPreviewChild3}
            onCategoryChange={handleCategoryChange}
          />
          <img src={productPreview} alt="Preview" className="w-132 h-132" />
        </div>

        <div className="mt-4 flex flex-row overflow-x-auto items-center">
          <div className="gap-4 flex flex-row">
            <div className='bg-white w-98 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center'></div>
            <button onClick={() => handleChildImageClick(productPreviewChild1)} className="preview-thumb">
              <img src={iconArrowLeft} alt="arrow left" className="icon-left" />
              <img src={productPreviewChild1} alt="Child 1" className="thumb-img" />
            </button>
            <button onClick={() => handleChildImageClick(productPreviewChild2)} className="preview-thumb">
              <img src={productPreviewChild2} alt="Child 2" className="thumb-img" />
            </button>
            <button onClick={() => handleChildImageClick(productPreviewChild3)} className="preview-thumb">
              <img src={iconArrowRight} alt="arrow right" className="icon-right" />
              <img src={productPreviewChild3} alt="Child 3" className="thumb-img" />
            </button>
          </div>

          <div className="ml-16 border-dashed w-74 h-56 border-2 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-2xl font-semibold">Upload your image</p>
              <p className="text-lg font-medium">Drag & Drop it here</p>
              <img src={iconUplodeFile} alt="upload icon" className="w-10 h-10" />
              <p className="text-xl font-medium text-[#91919B]">or <span className="underline text-[#334DD8]">Choose file</span></p>
              <p className="text-base text-[#91919B]">Max file size : <span className="font-medium">25 MB</span></p>
              <p className="text-base text-[#91919B]">Supported file types : <span className="font-medium">JPG, PNG</span></p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-38 mt-20">
          <div className="grow">
            <h3 className="text-2xl font-semibold mb-8">General Information</h3>
            <label className="block mb-2 text-xl">Product Name</label>
            <input type="text" className="input-field" placeholder="Product Name" value={productName} onChange={handleProductNameChange} />
            <label className="block mb-2 text-xl mt-6">Category</label>
            <input type="text" className="input-field" value={selectedCategory} readOnly />
          </div>

          <div className="grow">
            <h3 className="text-2xl font-semibold">Product Tags</h3>
            <div className="mt-3 flex flex-wrap gap-4">
              {["custom", "t-shirt", "collection", "Artists Lalala"].map(tag => (
                <button key={tag} className="tag-button">{tag}</button>
              ))}
              <button className="tag-button border-dashed border-2 flex gap-2 items-center">Add
                <img src={iconAdd} alt="add icon" className="h-6 w-6" />
              </button>
            </div>
            <label className="block mb-2 text-xl mt-6">Concept</label>
            <textarea
              className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-166 h-50 resize-none overflow-hidden"
              placeholder="Concept"
              style={{ lineHeight: '1.2', paddingTop: '8px' }}
              value={concept}
              onChange={handleConceptChange}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ExpressAndPublish;