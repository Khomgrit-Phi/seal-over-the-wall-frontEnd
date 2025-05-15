import { useEffect, useMemo, useState } from "react"; // Import hooks
import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop";
import FilterLeftSidebar from "../components/productPage/FilterLeftSidebar";
import ProductList from "../components/productPage/ProductList";
import { getProducts } from "../services/product";
import productDataStore from "../stores/productDataStore"; // Import your Zustand store

const Shop = () => {
  const allItems = productDataStore((state) => state.items); // Get all items from the store
  const setItems = productDataStore((state) => state.setItems);
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all', 'shirt', 'cup', 'bag'

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (Array.isArray(products)) {
        setItems(products);
      } else {
        console.error("Fetched data is not an array:", products);
        // Depending on the actual structure, you might need to access a property, e.g.:
        // setItems(products.data);
        // setItems(products.items);
      }
    };
    fetchProducts();

  }, []);

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') {
      return allItems;
    }
    return allItems.filter(item => item.productType === selectedFilter);
  }, [allItems, selectedFilter]); // Re-filter when allItems or selectedFilter changes

  const handleFilterClick = (filterType) => {
    setSelectedFilter(filterType);
  };

  const getFilterButtonClass = (filterType) => {
    const baseClass = "cursor-pointer px-4 py-2 rounded-xl transition-colors duration-200";
    if (selectedFilter === filterType) {
      return `${baseClass} text-white bg-primary-blue-500`; // Active style
    }
    return `${baseClass} hover:text-white hover:bg-primary-blue-500`; // Inactive style
  };

  return (
    <>
      <div className="mt-25 mb-4 pl-10">
        <BreadcrumbTop />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h5 className="text-[32px] font-bold text-[#2639A1]">New Arrivals</h5>
        <div className="flex justify-center items-center my-8 gap-x-4 text-xl text-black">
          <p className={getFilterButtonClass('all')} onClick={() => handleFilterClick('all')}>All</p>
          <p className={getFilterButtonClass('shirt')} onClick={() => handleFilterClick('shirt')}>T-shirt</p>
          <p className={getFilterButtonClass('cup')} onClick={() => handleFilterClick('cup')}>cup</p>
          <p className={getFilterButtonClass('bag')} onClick={() => handleFilterClick('bag')}>bags</p>
        </div>
      </div>
      <FilterLeftSidebar />
      <ProductList items={filteredItems} />
    </>
  )
}
export default Shop