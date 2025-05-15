import bluecup from "/assets/images/home/cup-blue.png";
import whitebag from "/assets/images/home/bag-white.png";
import grayshirt from "/assets/images/home/t-shirt-gray.png";

import { Link } from 'react-router';

const ExpressTheWorld = () => {
  return (
    <>
    <section className="flex justify-between items-center h-[576px] w-400 mx-auto ">
            <div data-aos="fade-right" className="text-primary-blue-500 w-[544px]">
              <h2 className="text-5xl font-bold">Express to the world</h2>
              <p className="text-2xl mt-2">
                with no words in our <span className="font-bold">shop</span>
              </p>
              <button className="text-xl bg-primary-blue-500 px-8 py-2 rounded-full mt-4 text-white">
                <Link to="/shop">Go to Shop</Link>
              </button>
            </div>
            <div className="flex items-end gap-8">
              <div data-aos="fade-left"   data-aos-duration="1500" className="w-60">
                <img src={bluecup} alt="blue-cup" />
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="w-80">
                <img src={whitebag} alt="white-bag" />
              </div>
              <div data-aos="fade-left" data-aos-duration="4500" className="w-100">
                <img src={grayshirt} alt="gray-shirt" />
              </div>
            </div>
          </section>
    </>
  )
}
export default ExpressTheWorld