import React from 'react';
import tshirt from '../../assets/images/Products/shirt/prove/prove-shirt-white-front.png';
import bags from '../../assets/images/Products/bag/prove/prove-bag-white-front.png';
import cups from '../../assets/images/Products/cup/prove/prove-cup-white-front.png';
import line from '../../assets/images/collect-details-pages/Line.svg';

function PriceAndStockTable({ createData }) {
  const previews = createData?.createdesign?.previewImages || [];

  const productMap = {
    tshirt: { label: 'T-Shirt', fallback: tshirt },
    bags: { label: 'Bags', fallback: bags },
    cups: { label: 'Cup', fallback: cups },
  };

  // Extract unique preview entries by product + color
  const previewEntries = previews.map((p) => {
    const matchedType = Object.keys(productMap).find((type) =>
      p.url.includes(type)
    );

    return {
      type: matchedType,
      color: p.color || 'unknown',
      url: p.url,
    };
  }).filter(p => p.type); // filter out unknown types

  return (
    <div className="w-[1000px] bg-white rounded-lg shadow-xl p-4 items-center">
      <h1 className="text-xl font-semibold mb-2">Price and Stock</h1>

      {previewEntries.map((entry, index) => {
        const product = productMap[entry.type];
        if (!product) return null;

        return (
          <React.Fragment key={`${entry.type}-${entry.color}`}>
            <div className="h-[166px] flex justify-between">
              <img src={entry.url || product.fallback} alt={`${product.label} - ${entry.color}`} />
              <div className="flex flex-col justify-center items-start w-[320px]">
                <h2 className="font-semibold text-xl">Custommike?</h2>
                <p>{product.label} ({entry.color})</p>
              </div>
              <div className="flex justify-between w-[392px] mr-10">
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p>Price</p>
                  <p>APH</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-0.5">Add Quantity</p>
                  <input
                    type="text"
                    className="bg-white outline-1 outline-secondary-dark-gray-300 rounded-md w-[120px] h-[52px] mt-0.5"
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p>Profit/Unit</p>
                  <p>56 THB</p>
                </div>
              </div>
            </div>

            {index !== previewEntries.length - 1 && (
              <div><img src={line} alt="Line Divider" /></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default PriceAndStockTable;
