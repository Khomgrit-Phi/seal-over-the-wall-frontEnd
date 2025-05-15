import React from 'react';
import bagTemplate from "/assets/images/create-design-pages/bags-template.svg";

function BagTemplate() {


  return (
    <div className="flex flex-col items-center gap-6">

      <div className="relative w-[607.31px] h-[480px] flex justify-center items-center">
        <img
          src={bagTemplate}
          alt="Bag template"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default BagTemplate;
