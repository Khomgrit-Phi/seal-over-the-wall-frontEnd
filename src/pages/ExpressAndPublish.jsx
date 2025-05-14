import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton.jsx";
import BackButton from "../components/collectDetailsPage/BackButton.jsx";
import iconUplodeFile from "../../src/assets/images/expressAndPublish/icon-uplodeFile.png";
import iconAdd from "../assets/images/expressAndPublish/iconAdd.png";
import iconArrowLeft from "../assets/images/expressAndPublish/iconArrowLeft.png";
import iconArrowRight from "../assets/images/expressAndPublish/iconArrowRight.png";
import PublishButton from "../components/expressAndPublish/PublishButton.jsx";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const ExpressAndPublish = ({ onNext, onBack, createData }) => {
  const [groupedPreviews, setGroupedPreviews] = useState({});
  const [productDetails, setProductDetails] = useState({});
  const sliderRefs = useRef({});
  const sliderInstances = useRef({});

  useEffect(() => {
    const previews = createData?.createdesign?.previewImages || [];
    const grouped = previews.reduce((acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    }, {});
    setGroupedPreviews(grouped);

    const defaultDetails = {};
    Object.keys(grouped).forEach((type) => {
      grouped[type].forEach((entry, idx) => {
        defaultDetails[`${type}-${idx}`] = {
          name: `Custommike ${type}`,
          concept: "",
        };
      });
    });
    setProductDetails(defaultDetails);
  }, [createData]);

  useEffect(() => {
    Object.keys(sliderRefs.current).forEach((type) => {
      if (sliderRefs.current[type] && !sliderInstances.current[type]) {
        sliderInstances.current[type] = new KeenSlider(sliderRefs.current[type], {
          loop: false,
          slides: { perView: 1 },
        });
      }
    });
    return () => {
      Object.values(sliderInstances.current).forEach((instance) => instance.destroy());
      sliderInstances.current = {};
    };
  }, [groupedPreviews]);

  const handleChange = (key, field, value) => {
    setProductDetails((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-10 pl-[288px]">
        <h1 className="text-4xl font-bold">Express & Publish</h1>
        <p className="text-lg mt-4 mb-13">
          Ready to showcase your creation? Fill in your product details and click to present your work to buyers!
        </p>
        <div className="flex justify-end items-center gap-4 pr-[128px] mt-1.5 ">
          <button><BackButton onBack={onBack} /></button>
          <button><NextStepButton onNext={onNext} /></button>
        </div>
      </div>

      {Object.entries(groupedPreviews).map(([type, items]) => (
        <div key={type} className='w-full h-auto flex gap-40 px-[152px] mb-20'>
          <div className='w-132'>
            <div ref={(el) => (sliderRefs.current[type] = el)} className="keen-slider">
              {items.map((img, idx) => (
                <div key={`${type}-${idx}`} className="keen-slider__slide flex justify-center items-center">
                  <img src={img.url} alt={`Preview ${type}`} className='w-150 h-150 object-contain' />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={() => sliderInstances.current[type]?.prev()}>
                <img src={iconArrowLeft} alt="Prev" className="cursor-pointer w-5 " />
              </button>
              <button onClick={() => sliderInstances.current[type]?.next()}>
                <img src={iconArrowRight} alt="Next" className="cursor-pointer w-5 " />
              </button>
            </div>
          </div>

          <div className='gap-38 w-1/2'>
            <div className='grow'>
              <h3 className='text-2xl text-[#202020] font-semibold mb-8'>General Information</h3>
              <div className='flex flex-col'>
                <label className="block mb-2 text-xl font-normal">Product Name</label>
                <input
                  type="text"
                  className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132"
                  placeholder="Product Name"
                  value={productDetails[`${type}-0`]?.name || ''}
                  onChange={(e) => handleChange(`${type}-0`, 'name', e.target.value)}
                />
                <label className="block mb-2 text-xl font-normal mt-6 ">Category</label>
                <input
                  type="text"
                  className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132"
                  placeholder="Shirt"
                  value={type.charAt(0).toUpperCase() + type.slice(1)}
                  readOnly
                />
              </div>
            </div>

            <div className='grow'>
              <div>
                <h3 className='text-2xl text-[#202020] font-semibold'>Product Tags</h3>
                <div className='mt-3 flex flex-wrap gap-4'>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">custom</button>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">t-shirt</button>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">collection</button>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">Artists Lalala</button>
                  <button className="bg-[#fff] text-[#91919B] text-xl font-medium px-2 py-2 rounded-sm flex flex-row gap-2 border-[#E1E1E4] border-dashed border-2 items-center">Add
                    <img src={iconAdd} alt="Icon add" className='h-6 w-6' />
                  </button>
                </div>
                <label className="block mb-2 text-xl font-normal mt-6">Concept</label>
                <textarea
                  className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-166 h-50 resize-none overflow-hidden align-top"
                  placeholder="Concept"
                  style={{ lineHeight: '1.2', paddingTop: '8px' }}
                  value={productDetails[`${type}-0`]?.concept || ''}
                  onChange={(e) => handleChange(`${type}-0`, 'concept', e.target.value)}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Outlet />
    </div>
  );
};

export default ExpressAndPublish;
