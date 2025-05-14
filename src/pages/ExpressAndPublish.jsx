import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NextStepButton from '../components/createDesignPage/NextStepButton.jsx';
import BackButton from '../components/collectDetailsPage/BackButton.jsx';
import iconAdd from '../assets/images/expressAndPublish/iconAdd.png';
const ExpressAndPublish = ({ onNext, onBack, createData }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const previewImages = createData?.createdesign?.previewImages || [];
    const productTypes = createData?.createdesign?.productTypes || [];
    const grouped = productTypes.map((type) => {
      const images = previewImages.filter((p) => p.url.includes(type));
      return {
        type,
        productName: `Custommike ${type}`,
        concept: '',
        images
      };
    });
    setProducts(grouped);
  }, [createData]);
  const handleProductChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-10 pl-[288px]">
        <h1 className="text-4xl font-bold">Express & Publish</h1>
        <p className="text-lg mt-4 mb-13">
          Ready to showcase your creation? Fill in your product details and click to present your work to buyers!
        </p>
        <div className="flex justify-end items-center gap-4 pr-[128px] mt-1.5">
          <button>
            <BackButton onBack={onBack} />
          </button>
          <button>
            <NextStepButton onNext={onNext} />
          </button>
        </div>
      </div>
      <div className="w-full px-[152px] flex flex-col gap-20 mb-20">
        {products.map((product, idx) => (
          <div key={idx} className="flex gap-40">
            {/* Image Preview */}
            <div>
              <img src={product.images[0]?.url} alt="Preview" className="w-150 h-150" />
            </div>
            {/* Form */}
            <div className="flex flex-col gap-8 grow">
              <div>
                <h3 className="text-2xl font-semibold text-[#202020] mb-4">General Information</h3>
                <label className="block mb-2 text-xl font-normal">Product Name</label>
                <input
                  type="text"
                  className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132"
                  value={product.productName}
                  onChange={(e) => handleProductChange(idx, 'productName', e.target.value)}
                />
                <label className="block mb-2 text-xl font-normal mt-6">Category</label>
                <input type="text" className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132" value={product.type} readOnly />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#202020] mb-2">Product Tags</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">custom</button>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">{product.type}</button>
                  <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">collection</button>
                  <button className="bg-[#fff] text-[#91919B] text-xl font-medium px-2 py-2 rounded-sm flex items-center gap-2 border border-dashed border-[#E1E1E4]">
                    Add <img src={iconAdd} alt="add" className="h-6 w-6" />
                  </button>
                </div>
                <label className="block mb-2 text-xl font-normal">Concept</label>
                <textarea
                  className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-166 h-50 resize-none"
                  placeholder="Concept"
                  value={product.concept}
                  onChange={(e) => handleProductChange(idx, 'concept', e.target.value)}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
export default ExpressAndPublish;
