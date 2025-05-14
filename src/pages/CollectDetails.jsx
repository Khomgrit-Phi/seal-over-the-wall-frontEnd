import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import PriceAndStockTable from "../components/collectDetailsPage/PriceAndStockTable";
import TotalProfitTable from "../components/collectDetailsPage/TotalProfitTable";
import PromotionCampaign from "../components/collectDetailsPage/PromotionCampaign";

function CollectDetails({ createData, onNext, onBack, updateCreateData }) {
  const [productEntries, setProductEntries] = React.useState(() => {
    const previews = createData?.createdesign?.previewImages || [];
    const initialized = previews.map((preview) => {
      const typeMatch = ['tshirt', 'bags', 'cups'].find((t) => preview.url.includes(t));
      return {
        type: typeMatch || 'tshirt',
        price: 199, // default
        quantity: 0, // default
        color: preview.color || 'white',
        url: preview.url,
      };
    });
    return initialized;
  });

  return (
    <form>
      <div className="flex flex-col items-center">
        <div className="w-full mb-10 pl-[288px]">
          <h1 className="text-4xl font-bold">Collect Details</h1>
          <p className="text-lg mt-4 mb-6">
            Okay, let's get your product ready to shine! Tell us the price and how many you've got. Wanna do a sale? Set it up here! We'll even show your potential
            <br />profit per item and the total after our small fee and your costs. Go ahead and fill it in!
          </p>
          <div className="flex justify-end items-center gap-4 pr-[152px] mt-1.5">
            <button>
              <BackButton onBack={onBack} />
            </button>
            <button>
              <NextStepButton onNext={onNext} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-15 mx-[152px] mt-3.5 p-1.5">
          <PriceAndStockTable
            createData={createData}
            entries={productEntries}
            setEntries={setProductEntries}
          />
          <TotalProfitTable entries={productEntries} />
        </div>

        <div className="w-full flex justify-center items-center mt-10 mb-10">
          <PromotionCampaign />
        </div>
        <Outlet />
      </div>
    </form>
  );
}

export default CollectDetails;
