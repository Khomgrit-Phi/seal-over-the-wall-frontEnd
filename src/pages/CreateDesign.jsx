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
import { createdProduct } from "../services/created";
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';


function CreateDesign({ onNext, updateCreateData }) {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [designURL, setDesignURL] = useState('');
  const [selectedColors, setSelectedColors] = useState(['white']);

  const CLOUD_NAME = 'dvpnipb6g';
const UPLOAD_PRESET = 'upload_designs';

const handleSaveDesign = async () => {
  const originalElements = document.querySelectorAll('.preview-to-capture');
  if (!originalElements.length) {
    alert('No previews found.');
    return;
  }

  const upscale = 3; // Capture 3x bigger
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.top = '-9999px';
  tempContainer.style.left = '-9999px';
  document.body.appendChild(tempContainer);

  for (let i = 0; i < originalElements.length; i++) {
    const el = originalElements[i];
    const color = el.getAttribute('data-color') || `color_${i + 1}`;

    // Clone element
    const clone = el.cloneNode(true);
    const origWidth = el.offsetWidth;
    const origHeight = el.offsetHeight;

    // Scale the clone
    clone.style.transform = `scale(${upscale})`;
    clone.style.transformOrigin = 'top left';
    clone.style.width = `${origWidth}px`;
    clone.style.height = `${origHeight}px`;

    tempContainer.appendChild(clone);

    try {
      const canvas = await html2canvas(clone, {
        backgroundColor: null,
        useCORS: true,
        scale: 1, // Already scaled manually
      });

      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = origWidth * upscale;
      finalCanvas.height = origHeight * upscale;

      const ctx = finalCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, 0);

      const blob = await new Promise((resolve) =>
        finalCanvas.toBlob(resolve, 'image/png')
      );

      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('public_id', `final_preview_${selectedProduct}_${color}_${Date.now()}`);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        console.log(`✅ Uploaded ${color}: ${data.secure_url}`);
      } else {
        console.error(`❌ Failed to upload ${color}`);
      }
    } catch (err) {
      console.error(`Error uploading ${color}:`, err);
    }

    // Cleanup after each capture
    tempContainer.removeChild(clone);
  }

  document.body.removeChild(tempContainer);
  alert('All high-res previews saved!');
};




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
  let TemplateComponent;
  switch (selectedProduct) {
    case 'bags':
      TemplateComponent = <BagTemplate />;
      break;
    case 'cups':
      TemplateComponent = <CupTemplate />;
      break;
    case 'tshirt':
    default:
      TemplateComponent = <TShirtTemplate />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedProduct}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.2 }}
      >
        {TemplateComponent}
      </motion.div>
    </AnimatePresence>
  );
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
              <SaveButton onSave={handleSaveDesign} />
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
