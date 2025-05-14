import React from 'react';
import CreateStepper from "../components/createDesignPage/CreateStepper";
import CreateDesign from "./CreateDesign";
import CollectDetails from "./CollectDetails";
import ExpressAndPublish from "./ExpressAndPublish";
import Preview from "./Preview";

function Create() {
  const [step, setStep] = React.useState(() => {
    const saved = localStorage.getItem('create-step');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [createData, setCreateData] = React.useState({
    createdesign: {},
    collectdetails: {},
    expressandpublish: {}
  });

  const updateCreateData = (newData) => {
    setCreateData((prev) => ({
      ...prev,
      ...newData
    }));
  };

  

 const handleNext = (newData = {}) => {
  updateCreateData(newData);
  setStep((prev) => prev + 1);
};
  const handleBack = () => setStep((prev) => prev - 1);
  const handleReset = () => {
    localStorage.removeItem('create-step'); // ✅ consistent key
    setStep(0);
  };
  const handleEdit = () => setStep(0);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <CreateDesign
            onNext={handleNext}
            updateCreateData={updateCreateData}
          />
        );
      case 1:
        return (
          <CollectDetails
            createData={createData}
            onNext={handleNext}
            onBack={handleBack}
            updateCreateData={updateCreateData}
          />
        );
      case 2:
        return (
          <ExpressAndPublish
            onNext={handleNext}
            onBack={handleBack}
            onEdit={handleEdit}
            createData={createData}
          />
        );
      case 3:
        return (
          <Preview
            createData={createData}
            onReset={handleReset}
            onBack={handleBack}
            onEdit={handleEdit}
          />
        );
      default:
        return null;
    }
  };


  React.useEffect(() => {
    localStorage.setItem('create-step', step.toString());
  }, [step]);

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <CreateStepper step={step} setStep={setStep} />
      {renderStepContent()}
    </div>
  );
}

export default Create;
//  Products Data
//  Creatros Data