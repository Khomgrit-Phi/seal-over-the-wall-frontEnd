import React from 'react'
import tshirticon from "/assets/images/create-design-pages/selection-t-shirt.svg"
import bagsicon from "/assets/images/create-design-pages/selection-bags.svg"
import cupsicon from "/assets/images/create-design-pages/selection-cups.svg"

function ProductSelection({ selected, setSelected }) {
    const products = [
        { name: 'tshirt', icon: tshirticon },
        { name: 'bags', icon: bagsicon, className: 'size-w-[100px]' },
        { name: 'cups', icon: cupsicon },
    ];

    return (
        <div className='flex gap-[48px]'>
            {products.map((product) => (
                <button
                    key={product.name}
                    onClick={() => setSelected(product.name)}
                    className="group relative cursor-pointer pb-2
                    transition-all duration-300 ease-in-out hover:scale-110"
                    
                >
                    <img src={product.icon} alt={product.name} />
                    <div className={`
                        absolute bottom-0 left-0 h-1 w-full rounded-sm
                        origin-down scale-x-0
                        bg-primary-blue-500
                        transition-transform duration-300
                        ${selected === product.name ? 'scale-x-100' : ''}
                    `} />
                </button>
            ))}
        </div>
    );
}

export default ProductSelection
