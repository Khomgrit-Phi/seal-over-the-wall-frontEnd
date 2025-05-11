import React from 'react';
import tshirtTemplate from "../../assets/images/create-design-pages/selection-t-shirt.svg";



function TShirtTemplate() {


  return (
    <div className="flex flex-col items-center gap-6">
     

      <div className="relative w-[607.31px] h-[480px] flex justify-center items-center">
        <img
          src={tshirtTemplate}
          alt="T-shirt template"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default TShirtTemplate;
