import ProductPreview from "../components/ProductDetailPage/ProductPreview";

import BreadcrumbTop from "../components/mainMenu/BreadcrumbTop";
import Creator from "../components/ProductDetailPage/creator";


import logoFrontShirt from "../assets/images/productDetail/front.svg"
import logoBackShirt from "../assets/images/productDetail/back.svg"
import fast from "../assets/images/productDetail/fast.svg"
import wash from "../assets/images/productDetail/Wash.svg"
import park from "../assets/images/productDetail/park.svg"
import thaiFlag from "../assets/images/productDetail/thai-flag.svg"
import FavoriteMenu from "../components/productPage/FavoriteMenu";

import ProductRelate from "../components/ProductDetailPage/ProductRelate";




import { RiArrowRightSLine } from "react-icons/ri";


import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
    <div className="mt-25 mb-4 pl-10">
    <BreadcrumbTop  />
    </div>
    <ProductPreview />
    <section className="w-400 mx-auto">
      <Creator />

     

      <div className="flex justify-between py-8">
        <div>
          <h5 className="text-[40px] font-semibold">T-Shirt Basic</h5>
          <p className="text-2xl mt-4">599 THB</p>
          <div className="flex gap-4 mt-6">
            <p className="text-2xl font-semibold">Sizes</p>
            <p className="underline">View size chart</p>
          </div>
          <div className="flex gap-4 mt-4">
            <div
              className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold"
            >
              S
            </div>
            <div
              className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold"
            >
              M
            </div>
            <div
              className="w-12 h-10 rounded-md flex items-center justify-center border-2 text-xl font-semibold"
            >
              L
            </div>
          </div>
          <p className="text-2xl font-semibold mt-6">Colors</p>
          <div className="flex gap-4 mt-4">
            <div className="w-10 h-10 rounded-full border-1"></div>
            <div className="w-10 h-10 rounded-full bg-[#5A5959]"></div>
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <div className="w-10 h-10 rounded-full bg-[#334DD8]"></div>
          </div>
        </div>

        <div className="w-1/2">
          <h5 className="text-2xl font-semibold">Print areas</h5>
          <div className="flex gap-8">
            <img
              src={logoFrontShirt}
              alt=""
              className="h-[72px] w-auto"
            />
            <img
              src={logoBackShirt}
              alt=""
              className="h-[72px] w-auto"
            />
          </div>
          <p className="text-xl mt-6">
            30% of the money made from this campaign will be donated to Shelter,
            a TH based housing charity. Designed by @Artists Lalala on
            instagram.
          </p>
          <button className="p-2 rounded-md border-1 border-gray-200 mt-2">
            Read More
          </button>
          <div className="flex gap-4 mt-6">
            <button className="p-2 rounded-md bg-gray-300 text-xl">custom</button>
            <button className="p-2 rounded-md bg-gray-300 text-xl">t-shirt</button>
            <button className="p-2 rounded-md bg-gray-300 text-xl">
              collection
            </button>
            <button className="p-2 rounded-md bg-gray-300 text-xl">
              Artists Lalala
            </button>
          </div>
          <div className="flex gap-4 justify-end mt-12">
            <button className="bg-[#334DD8] px-12 py-2 rounded-full text-white">
              Add to cart
            </button>
            < FavoriteMenu />
          </div>
        </div>
      </div>

      <div className="flex p-4 border-1 rounded-2xl">
        <div className="w-2/5 px-10 border-r-1">
          <img src={wash} alt="" className="inline w-12" />
          <h6 className="inline text-2xl font-semibold">Garment care</h6>
          <p className="text-xl">
            Love your garment and it will love you back. Being gentle is easy
            and better for the planet, it also protects the print and helps
            maintain shape and colour for longer.
          </p>
          <ul className="mt-2 ">
            <li className=" flex item-center" >
              <span className=" text-xl align-middle"><RiArrowRightSLine /></span>
              Wash garment inside out</li>
            <li  className=" flex item-center">
            <span className=" text-xl align-middle"><RiArrowRightSLine /></span> Only wash your garment on a cold cycle</li>
            <li  className=" flex item-center">
            <span className=" text-xl align-middle"><RiArrowRightSLine /></span> Do not tumble dry (it’s the worst)</li>
            <li  className=" flex item-center">
            <span className=" text-xl align-middle"><RiArrowRightSLine /></span> Iron your garment inside out</li>
          </ul>
        </div>
        <div className="w-3/5 pl-20 pr-10">
          <div className="flex gap-8 border-b-1 pb-4">
            <div>
              <img src={park} alt="" className="inline w-12" />
              <h6 className="inline text-2xl font-semibold">
                Most shipping options
              </h6>
              <p className="text-xl">
                From <strong className="text-2xl font-semibold">60 THB</strong>
              </p>
              <p>Choose from our Economy or Standard shipping</p>
            </div>
            <div>
              <img src={fast} alt="" className="inline w-12" />
              <h6 className="inline text-2xl font-semibold">Fastest Delivery</h6>
              <p className="text-xl">1 day!</p>
              <p>
                Order optimized based on customer location<br />
                (for Bangkok orders only)
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="text-xl">Location</h6>
            <div className="flex gap-2 items-center">
              <img
                src={thaiFlag}
                alt=""
                className="w-6 h-auto mt-2"
              />
              <p>Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProductRelate />

      </>
  )
}
export default ProductDetail