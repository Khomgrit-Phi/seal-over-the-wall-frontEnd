import React from "react";
import { Outlet } from "react-router-dom";
import NextStepButton from "../components/createDesignPage/NextStepButton";
import BackButton from "../components/collectDetailsPage/BackButton";
import shirtProvWhiteFront from "../../src/assets/images/Products/shirt/prove/prove-shirt-white-front.png";
// import bagWhiteFront from "../../src/assets/images/Products/bag/prove/prove-bag-white-front.png";
// import cupWhiteFront from "../../src/assets/images/Products/cup/prove/prove-cup-white-front.png";
// import shirtProvWhiteBack from "../../src/assets/images/Products/shirt/prove/prove-shirt-white-back.png";
// import shirtProvWhiteFrontPreviewWomen from "../../src/assets/images/expressAndPublish/prove-shirt-white-front-preview-women-1.jpg";
// import shirtProvWhiteBackPreviewWomen from "../../src/assets/images/expressAndPublish/prove-shirt-white-back-preview-women-1.jpg";
import iconUplodeFile from "../../src/assets/images/expressAndPublish/icon-uplodeFile.png";
import shirtProveBlueFront from "../../src/assets/images/Products/shirt/prove/prove-shirt-blue-front.png";
import shirtProveGrayFront from "../../src/assets/images/Products/shirt/prove/prove-shirt-gray-back.png";
import shirtProveBlackFront from "../../src/assets/images/Products/shirt/prove/prove-shirt-black-front.png";
import iconAdd from "../assets/images/expressAndPublish/iconAdd.png";
import iconArrowLeft from "../assets/images/expressAndPublish/iconArrowLeft.png";
import iconArrowRight from "../assets/images/expressAndPublish/iconArrowRight.png";
import ProductType from '../components/expressAndPublish/ProductType.jsx';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "../components/ui/carousel.js";


const ExpressAndPublish = ({ onNext, onBack }) => {
    const [productPreview, setProductPreview] = React.useState(shirtProvWhiteFront);
    const [productPreviewChild1, setproductPreviewChild1] = React.useState(shirtProveBlueFront);
    const [productPreviewChild2, setproductPreviewChild2] = React.useState(shirtProveGrayFront);
    const [productPreviewChild3, setproductPreviewChild3] = React.useState(shirtProveBlackFront);
    const [selectedCategory, setSelectedCategory] = React.useState('Shirt');
    const [productName, setProductName] = React.useState('');
    const [concept, setConcept] = React.useState('');

    const handleChildImageClick = (image) => {
        setProductPreview(image);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleConceptChange = (event) => {
        setConcept(event.target.value);
    };
    return (
        <div className=" flex flex-col items-center">
            <div className="w-full mb-10 pl-[288px]">
                <h1 className="text-4xl font-bold">Express & Publish</h1>
                <p className="text-lg mt-4 mb-13">
                    Ready to showcase your creation? Fill in your product details and click to present your work to buyers!
                    <br />
                </p>
                <div className="flex justify-end items-center gap-4 pr-[128px] mt-1.5 ">
                    <button>
                        <BackButton onBack={onBack} />
                    </button>

                    <button >
                        <NextStepButton onNext={onNext} />
                    </button>
                </div>
            </div>
            <div className='w-full px-[152px]'>
                {/* Main Content in ExpressAndPlubish page*/}
                <div className='mt-2'>

                    {/* Product type col and Product preview image*/}
                    <div className='flex items-center'>
                        {/* Product type col for select */}
                        <ProductType sendImage={setProductPreview}
                            sendChild1={setproductPreviewChild1}
                            sendChild2={setproductPreviewChild2}
                            sendChild3={setproductPreviewChild3}
                            onCategoryChange={handleCategoryChange} />
                        {/* <div className='flex flex-col gap-4 ml-34 mr-72'>
                        <img src= {shirtProvWhiteFront} alt="T-shirt" className="h-30 w-30 rounded-lg" />
                        <img src= {bagWhiteFront} alt="Bag" className="h-30 w-30 rounded-lg" />
                        <img src= {cupWhiteFront} alt="Cup" className="h-30 w-30 rounded-lg" />
                    </div> */}
                        {/* Product preview image */}
                        <img src={productPreview} alt="T-shirt" className='w-132 h-132' />
                    </div>

                    {/* add image slice */}
                    <div className='mt-4 flex flex-row overflow-x-auto items-center'>
                        {/* added images */}
                        <div className='gap-4 flex flex-row'>
                            <button className='cursor-pointer bg-white w-98 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center relative '
                                onClick={() => handleChildImageClick(productPreviewChild1)}>
                                <img src={iconArrowLeft} alt="icon arrow left" className='h-6 w-3 absolute left-4 top-1/2 transform -translate-y-1/2' />
                                <img src={productPreviewChild1} alt="T-shirt" className="h-full max-w-full object-contain" />
                            </button>
                            <button className='cursor-pointer bg-white w-98 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center'
                                onClick={() => handleChildImageClick(productPreviewChild2)}>
                                <img src={productPreviewChild2} alt="T-shirt" className="h-full max-w-full object-contain" />
                            </button>
                            <button className='cursor-pointer bg-white w-98 h-58 rounded-lg border border-[#DBDBDC] shadow-md flex items-center justify-center relative'
                                onClick={() => handleChildImageClick(productPreviewChild3)}>
                                <img src={iconArrowRight} alt="icon arrow left" className='h-6 w-3 absolute right-4 top-1/2 transform -translate-y-1/2' />
                                <img src={productPreviewChild3} alt="T-shirt" className="h-full max-w-full object-contain" />
                            </button>
                        </div>

                        {/* add image */}
                        <div className='ml-16'>
                            <div className=' border-[#DBDBDC] border-dashed w-74 h-56 border-2 flex justify-center items-center'>
                                <div className='flex flex-col justify-center items-center gap-1'>
                                    <p className='text-2xl text-[#202020] font-semibold'>Upload your image</p>
                                    <p className="text-lg text-[#202020] font-medium">Drag & Drop it here</p>
                                    <img src={iconUplodeFile} alt="icon uplode file" className='w-10 h-10' />
                                    <p className="text-xl text-[#91919B] font-medium">or <span className="text-lg text-[#334DD8] font-medium underline">Choose file</span> your files</p>
                                    <p className="text-base text-[#91919B] font-normal">Max file size : <span className="text-xl text-[#91919B] font-medium">25 MB</span></p>
                                    <p className="text-base text-[#91919B] font-normal">Supported file types : <span className="text-xl text-[#91919B] font-medium">JPG, PNG</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Sections about product*/}
                <div className='flex flex-row gap-38 mt-20'>
                    {/* input left */}
                    <div className='grow'>
                        <h3 className='text-2xl text-[#202020] font-semibold mb-8'>General Information</h3>
                        <div className='flex flex-col'>
                            <label className="block mb-2 text-xl font-normal">Product Name</label>
                            <input
                                type="text"
                                className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132"
                                placeholder="Product Name"
                                value={productName}
                                onChange={handleProductNameChange}
                            />
                            <label className="block mb-2 text-xl font-normal mt-6 ">Category</label>
                            <input
                                type="text"
                                className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-132"
                                placeholder="Shirt"
                                value={selectedCategory}
                                readOnly
                            />

                        </div>
                    </div>

                    {/* input right */}
                    <div className='grow'>
                        {/* <h3 className='text-2xl text-[#202020] font-semibold mb-8'>About Me</h3>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-4 items-center'>
                            <div className="w-14 h-14 rounded-full bg-primary-blue-500 flex items-center justify-center text-primary-white text-2xl font-semibold">
                                    AL
                            </div>
                            <div className="ml-2 font-semibold text-2xl text-primary-black">Artists Lalala</div>
                        </div>
                    </div>
                    <input
                                    type="text"
                                    className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-192 h-29 mt-6"
                                    placeholder="Give everyone a little peek into who you are here! You can totally share your social media links as well."
                                /> */}
                        <div>
                            <h3 className='text-2xl text-[#202020] font-semibold'>Product Tags</h3>
                            <div className='mt-3 flex flex-wrap gap-4'>
                                <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">custom</button>
                                <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">t-shirt</button>
                                <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">collection</button>
                                <button className="bg-[#E1E1E4] text-[#202020] text-xl font-medium px-2 py-2 rounded-sm">Artists Lalala</button>
                                <button className="bg-[#fff] text-[#91919B] text-xl font-medium px-2 py-2 rounded-sm flex flex-row gap-2 border-[#E1E1E4] border-dashed border-2 items-center">Add
                                    <img src={iconAdd} alt="Icon add" className='h-6 w-6' />
                                </button>
                            </div>
                            <label className="block mb-2 text-xl font-normal mt-6">Concept</label>
                            <textarea
                                className="border border-[#DBDBDC] rounded-lg px-4 py-3 w-166 h-50 resize-none overflow-hidden align-top"
                                placeholder="Concept"
                                style={{ lineHeight: '1.2', paddingTop: '8px' }}
                                value={concept}
                                onChange={handleConceptChange}
                                onInput={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = e.target.scrollHeight + 'px';
                                }}
                            />
                        </div>
                    </div>
                </div>


            </div>
            <Outlet />
        </div>
    );
};

export default ExpressAndPublish;