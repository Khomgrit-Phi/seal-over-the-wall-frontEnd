import React, { useState } from 'react';
import ProductSelection from '../components/createDesignPage/ProductSelection';
import ColorSelection from '../components/createDesignPage/ColorSelection';
import TShirtTemplate from '../components/createDesignPage/TShirtTemplate';
import BagTemplate from '../components/createDesignPage/BagTemplate';
import CupTemplate from '../components/createDesignPage/CupTemplate';
import UploadDesignBox from '../components/createDesignPage/UploadDesignBox';
import SelectedProduct from '../components/createDesignPage/SelectedProduct';
import Walkthrough from '../components/createDesignPage/Walkthrough';
import NextStepButton from '../components/createDesignPage/NextStepButton';
import SaveButton from '../components/createDesignPage/SaveButton';
import { createdProduct } from "../services/created"; // Ensure this points to your API helper

function CreateDesign({ onNext, updateCreateData }) {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [designURL, setDesignURL] = useState('');
  const [selectedColors, setSelectedColors] = useState(['white']);

  const handleSave = async () => {
    if (!designURL || selectedColors.length === 0 || !selectedProduct) {
      alert("Please complete all required fields before saving.");
      return;
    }

    try {
      const payload = {
        productType: selectedProduct,
        selectedColors,
        designUrl: designURL,
        title: "",           // Will be updated in next step
        description: "",     // Optional for now
        price: 0,            // Set later
        isPublished: false   // Default to false
      };

      const result = await createdProduct(payload);
      alert("Design saved successfully!");

      console.log("Saved design:", result);

      // Optional: forward data to next step
      if (updateCreateData) {
        updateCreateData({ createdesign: result.design });
      }

      // Optional: move to next step
      if (onNext) onNext();

    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save design.");
    }
  };

  const renderProductTemplate = () => {
    switch (selectedProduct) {
      case 'bags':
        return <BagTemplate />;
      case 'cups':
        return <CupTemplate />;
      case 'tshirt':
      default:
        return <TShirtTemplate />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Product Selection */}
        <div className="step-1 flex justify-center mb-6">
          <ProductSelection
            selected={selectedProduct}
            setSelected={setSelectedProduct}
          />
        </div>

        {/* Color & Action Buttons */}
        <div className="absolute w-[1615px] flex justify-center items-center">
          <div className="w-full flex justify-between items-start pr-[127px]">
            <ColorSelection
              productType={selectedProduct}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
            />
            <div className="flex justify-end items-center gap-4 mt-6">
              <SaveButton onSave={handleSave} />
              <NextStepButton onNext={onNext} />
            </div>
          </div>
        </div>

        {/* Upload Area & Mockup */}
        <div className="w-full flex flex-col items-center gap-8 px-4 my-10">
          <div className="absolute z-10 mt-25">
            <UploadDesignBox onUpload={setDesignURL} />
          </div>
          <div className="relative">{renderProductTemplate()}</div>
        </div>

        {/* Preview Section */}
        <div className="flex justify-center mt-10">
          <SelectedProduct
            selectedProduct={selectedProduct}
            selectedColors={selectedColors}
            uploadedImage={designURL}
          />
        </div>

        <Walkthrough />
      </form>
    </>
  );
}

export default CreateDesign;
