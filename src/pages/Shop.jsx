import ProductList from "../components/productPage/ProductList"
import FilterLeftSidebar from "../components/productPage/FilterLeftSidebar";
import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const Shop = () => {
  return (
    <>
    <div className="mt-25 mb-4 pl-10">
    <BreadcrumbTop />
    </div>
    
    <div className="flex flex-col justify-center items-center">
      <h5 className="text-[32px] font-bold text-[#2639A1]">New Arrivals</h5>
      <div className="flex justify-center items-center my-8  text-xl text-black">
        <p className="cursor-pointer hover:text-white hover:bg-primary-blue-500 px-4 py-2 rounded-xl" >T-shirt</p> 
        <p className="cursor-pointer hover:text-white hover:bg-primary-blue-500 px-4 py-2 rounded-xl">cup</p>
        <p className="cursor-pointer hover:text-white hover:bg-primary-blue-500 px-4 py-2 rounded-xl">bags</p>
      </div>
    </div>
    <FilterLeftSidebar />
    <ProductList />
    </>
  )
}
export default Shop