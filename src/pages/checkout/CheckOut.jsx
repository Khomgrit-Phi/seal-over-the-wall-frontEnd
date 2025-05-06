
import React from 'react';
import CheckoutStepper from "./CheckoutStepper";
import CheckoutShipping from './CheckoutShipping';
import CheckoutPaymentCard from './CheckoutPaymentCard';
import CheckoutSummary from './CheckoutSummary';
import CheckoutSuccess from './CheckoutSuccess';


function CheckOut() {

    const [step, setStep] = React.useState(() => {
    const saved = localStorage.getItem('checkout-step');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [checkoutData, setCheckoutData] = React.useState({
    shippingInfo: {},
    paymentInfo: {}
  })

  const updateCheckoutData = (newData) => {
    setCheckoutData((prev) => ({
      ...prev,
      ...newData
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleReset = () => {
    localStorage.removeItem('checkout-step');
    setStep(0);
  };
  const handleEdit = () => setStep(0);

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <CheckoutShipping onNext={handleNext} updateData = {updateCheckoutData}/>;
      case 1:
        return <CheckoutPaymentCard onNext={handleNext} onBack={handleBack} updateData = {updateCheckoutData}/>;
      case 2:
        return <CheckoutSummary onNext={handleNext} onEdit={handleEdit} checkoutData={checkoutData}/>;
      case 3:
        return <CheckoutSuccess onReset={handleReset}/>;
      default:
        return null;
    }
  };

  const renderTitle = () => {
    switch (step) {
      case 0:
        return <div><h1 className='text-5xl font-bold text-primary-black mb-[72px]'>Checkout</h1></div>;
      case 1:
        return <div><h1 className='text-5xl font-bold text-primary-black mb-[72px]'>Checkout</h1></div>;
      case 2:
        return <div><h1 className='text-5xl font-bold text-primary-black mb-[72px]'>Checkout</h1></div>;
      case 3:
        return <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-bold text-primary-black mb-[16px]'>Payment Successful!</h1>
                    <p className='text-2xl font-normal text-primary-black mb-[16px]'>Thank you. Your order has been confirmed</p>
                </div>;
      default:
        return null;
    }
  };

  React.useEffect(() => {
    localStorage.setItem('checkout-step', step.toString());
  }, [step]);


  return (
    <div className='flex flex-col items-center'>
      {renderTitle()}
      <CheckoutStepper step={step} setStep={setStep} />
      {renderStepContent()}
      <p></p>
    </div>
  );
}

export default CheckOut;