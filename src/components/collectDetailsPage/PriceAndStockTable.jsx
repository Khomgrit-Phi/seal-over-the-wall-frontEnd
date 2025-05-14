import React from 'react';
import tshirt from '../../assets/images/Products/shirt/prove/prove-shirt-white-front.png';
import bags from '../../assets/images/Products/bag/prove/prove-bag-white-front.png';
import cups from '../../assets/images/Products/cup/prove/prove-cup-white-front.png';
import line from '../../assets/images/collect-details-pages/Line.svg';

function PriceAndStockTable({ createData, entries, setEntries }) {
  const productMap = {
    tshirt: { label: 'T-Shirt', fallback: tshirt, baseCost: 150 },
    bags: { label: 'Bags', fallback: bags, baseCost: 120 },
    cups: { label: 'Cup', fallback: cups, baseCost: 100 },
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = field === 'price' || field === 'quantity' ? parseInt(value) || 0 : value;
    setEntries(updated);
  };

  const calculateProfitPerUnit = (type, price) =>
    price - (productMap[type]?.baseCost || 0);

  return (
    <div className="w-[1000px] bg-white rounded-lg shadow-xl p-4 items-center">
      <h1 className="text-xl font-semibold mb-2">Price and Stock</h1>

      {entries.map((entry, index) => {
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
                <p>{product.label} ({entry.color})</p>
              </div>

              <div className="flex justify-between w-[392px] mr-10">
                {/* Price */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1 text-xl font-medium">Price</p>
                  <select
                    value={entry.price}
                    onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                    className="bg-white border px-2 py-1 rounded-md w-[120px] h-[52px] font-semibold text-xl text-center"
                  >
                    {[199, 299, 399, 499].map((price) => (
                      <option key={price} value={price}>{price} THB</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1 text-xl font-medium">Quantity</p>
                  <input
                    type="number"
                    value={entry.quantity}
                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    className="bg-white border px-2 py-1 rounded-md w-[120px] h-[52px] font-semibold text-xl text-center"
                    placeholder="Qty"
                  />
                </div>

                {/* Profit */}
                <div className="flex flex-col justify-center items-center w-[120px]">
                  <p className="mb-1 text-xl font-medium">Profit/Unit</p>
                  <p className="font-bold text-2xl text-primary-blue-500">
                    {profit > 0 ? `${profit} THB` : '0 THB'}
                  </p>
                </div>
              </div>
            </div>

            {index !== entries.length - 1 && (
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
