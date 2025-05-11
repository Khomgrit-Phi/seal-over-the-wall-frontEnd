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
import axios from 'axios';

function CreateDesign({ onNext, updateCreateData }) {
  const [selectedProduct, setSelectedProduct] = useState('tshirt');
  const [designURL, setDesignURL] = useState('');
  const [selectedColor, setSelectedColor] = useState('white'); // optional

  const handleSave = async () => {
    try {
      const payload = {
        userId: 'USER_ID_HERE', //
        imageUrl: designURL,
        productType: selectedProduct,
        color: selectedColor,
      };

      const response = await axios.post('http://localhost:6000/api/design', payload, {
        withCredentials: true,
      });

      alert('Design saved!');
    } catch (error) {
      console.error('Error saving design:', error);
      alert('Failed to save design.');
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
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="step-1 flex justify-center mb-6">
          <ProductSelection
            selected={selectedProduct}
            setSelected={setSelectedProduct}
          />
        </div>

        <div className="absolute w-[1615px] flex justify-center items-center">
          <div className="w-full flex justify-between items-start pr-[127px]">
            <ColorSelection
              productType={selectedProduct}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <div className="flex justify-end items-center gap-4 mt-6">
              <SaveButton onSave={handleSave} />
              <NextStepButton onNext={onNext} />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-8 px-4 my-10">
          <div className="absolute z-10 mt-25">
            <UploadDesignBox onUpload={setDesignURL} />
          </div>
          <div className="relative">{renderProductTemplate()}</div>
        </div>

        <div className="flex justify-center mt-2">
          <SelectedProduct />
        </div>

        <Walkthrough />
      </form>
    </>
  );
}

export default CreateDesign;