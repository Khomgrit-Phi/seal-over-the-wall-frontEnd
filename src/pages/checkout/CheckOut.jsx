import React from 'react';
import CheckoutStepper from './CheckoutStepper';
import CheckoutShipping from './CheckoutShipping';
import CheckoutPaymentCard from './CheckoutPaymentCard';
import CheckoutSummary from './CheckoutSummary';
import CheckoutSuccess from './CheckoutSuccess';
import { useAuth } from '../../context/AuthContext';
import { createOrder } from '../../services/order';

function CheckOut() {
  const [step, setStep] = React.useState(0);

  const { cart } = useAuth();

  console.log(cart);

  const [checkoutData, setCheckoutData] = React.useState({
    shippingInfo: {},
    paymentInfo: {}
  });

  const updateShippingInfo = (newData) => {
    setCheckoutData((prev) => ({
      ...prev,
      shippingInfo: {
        ...prev.shippingInfo,
        ...newData
      }
    }));
  };

  const updatePaymentInfo = (newData) => {
    setCheckoutData((prev) => ({
      ...prev,
      paymentInfo: {
        ...prev.paymentInfo,
        ...newData
      }
    }));
    console.log(checkoutData);
  };

  const handleOrderCreate = async () => {
    // const userId = user._id;
    const items = cart.items;
    const shippingMethod = checkoutData.shippingInfo.shipping;
    const total = cart.total;
    const address = {
      firstName: checkoutData.shippingInfo.firstName,
      lastName: checkoutData.shippingInfo.lastName,
      address: checkoutData.shippingInfo.address,
      specific: checkoutData.shippingInfo.specific,
      district: checkoutData.shippingInfo.district,
      subDistrict: checkoutData.shippingInfo.subDistrict,
      city: checkoutData.shippingInfo.city,
      postal: checkoutData.shippingInfo.postal,
      email: checkoutData.shippingInfo.email,
      phone: checkoutData.shippingInfo.phone,
      smsPromotion: checkoutData.shippingInfo.smsPromotion,
      emailPromotion: checkoutData.shippingInfo.emailPromotion
    };
    const payment = {
      firstName: checkoutData.paymentInfo.firstName,
      lastName: checkoutData.paymentInfo.lastName,
      cardNumber: checkoutData.paymentInfo.cardNumber,
      exp: checkoutData.paymentInfo.exp,
      cvv: checkoutData.paymentInfo.cvv
    };
    console.log('The handleOrderCreate is called', items, shippingMethod, total, address, payment);

    const res = await createOrder(items, shippingMethod, total, address, payment);
    console.log(res);
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
        return <CheckoutShipping onNext={handleNext} updateData={updateShippingInfo} />;
      case 1:
        return <CheckoutPaymentCard onNext={handleNext} onBack={handleBack} updateData={updatePaymentInfo} />;
      case 2:
        return <CheckoutSummary onNext={handleNext} onEdit={handleEdit} checkoutData={checkoutData} checkoutOrder={handleOrderCreate} />;
      case 3:
        return <CheckoutSuccess onReset={handleReset} />;
      default:
        return null;
    }
  };

  const renderTitle = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h1 className="text-5xl font-bold text-primary-black mb-[72px]">Checkout</h1>
          </div>
        );
      case 1:
        return (
          <div>
            <h1 className="text-5xl font-bold text-primary-black mb-[72px]">Checkout</h1>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className="text-5xl font-bold text-primary-black mb-[72px]">Checkout</h1>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-primary-black mb-[16px]">Payment Successful!</h1>
            <p className="text-2xl font-normal text-primary-black mb-[16px]">Thank you. Your order has been confirmed</p>
          </div>
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    localStorage.setItem('checkout-step', step.toString());
  }, [step]);

  return (
    <div className="flex flex-col items-center mt-28">
      {renderTitle()}
      <CheckoutStepper step={step} setStep={setStep} />
      {renderStepContent()}
    </div>
  );
}

export default CheckOut;
