import React, { useState } from 'react';
import tshirt from '../../assets/images/Products/shirt/prove/prove-shirt-white-front.png';
import bags from '../../assets/images/Products/bag/prove/prove-bag-white-front.png';
import cups from '../../assets/images/Products/cup/prove/prove-cup-white-front.png';
import line from '../../assets/images/collect-details-pages/Line.svg';

function PriceAndStockTable({ createData }) {
  const previews = createData?.createdesign?.previewImages || [];

  const productMap = {
    tshirt: { label: 'T-Shirt', fallback: tshirt, baseCost: 99 },
    bags: { label: 'Bags', fallback: bags, baseCost: 79 },
    cups: { label: 'Cup', fallback: cups, baseCost: 59 },
  };

  // Build table rows from previews
  const initialEntries = previews
    .map((p) => {
      const matchedType = Object.keys(productMap).find((type) =>
        p.url.includes(type)
      );

      if (!matchedType) return null;

      return {
        type: matchedType,
        color: p.color || 'unknown',
        url: p.url,
        price: 0,
        quantity: 0,
      };
    })
    .filter(Boolean);

  const [rows, setRows] = useState(initialEntries);

  const handleInputChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = parseInt(value) || 0;
    setRows(updated);
  };

  const calculateProfitPerUnit = (type, price) =>
    price - (productMap[type]?.baseCost || 0);

  return (
    <div className="w-[1000px] bg-white rounded-lg shadow-xl p-4 items-center">
      <h1 className="text-xl font-semibold mb-2">Price and Stock</h1>

      {rows.map((entry, index) => {
        const product = productMap[entry.type];
        const profit = calculateProfitPerUnit(entry.type, entry.price);

        return (
          <React.Fragment key={`${entry.type}-${entry.color}`}>
            <div className="h-[166px] flex justify-between">
              <img
                src={entry.url || product.fallback}
                alt={`${product.label} - ${entry.color}`}
              />
              <div className="flex flex-col justify-center items-start w-[320px]">
                <h2 className="font-semibold text-xl">Custommike?</h2>
                <p>
                  {product.label} ({entry.color})
                </p>
              </div>

              <div className="flex justify-between w-[392px] mr-10">
                {/* Price */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1">Price</p>
                  <input
                    type="number"
                    value={entry.price}
                    onChange={(e) =>
                      handleInputChange(index, 'price', e.target.value)
                    }
                    className="bg-white border px-2 py-1 rounded-md w-[120px] h-[52px]"
                    placeholder="THB"
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1">Quantity</p>
                  <input
                    type="number"
                    value={entry.quantity}
                    onChange={(e) =>
                      handleInputChange(index, 'quantity', e.target.value)
                    }
                    className="bg-white border px-2 py-1 rounded-md w-[120px] h-[52px]"
                    placeholder="Qty"
                  />
                </div>

                {/* Profit */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1">Profit/Unit</p>
                  <p className="font-semibold text-primary-blue-500">
                    {profit > 0 ? `${profit} THB` : '0 THB'}
                  </p>
                </div>
              </div>
            </div>

            {index !== rows.length - 1 && (
              <div>
                <img src={line} alt="Divider" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default PriceAndStockTable;
