import React from 'react';
import cupTemplate from "/assets/images/create-design-pages/selection-cups.svg";

function CupTemplate() {


  return (
      <div className="relative w-[607.31px] h-[480px] flex justify-center items-center ml-40">
        <img
          src={cupTemplate}
          alt="Cup template"
          className="w-full h-full object-contain"
        />
      </div>
  );
}

export default CupTemplate;
