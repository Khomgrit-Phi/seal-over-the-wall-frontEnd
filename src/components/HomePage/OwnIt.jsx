import ownshirt from "../../assets/images/home/own-shirt.png";
import owncup from "../../assets/images/home/own-cup.png";
import ownbag from "../../assets/images/home/own-bag.png";

import { BiRightArrowAlt } from "react-icons/bi";

const OwnIt = () => {
  return (
    <>
    <section className="flex justify-center items-center h-[576px] w-400 mx-auto ">
        <div data-aos="fade-right" className="text-primary-blue-500 w-[422px]">
          <h2 className="text-5xl font-bold">Own it.</h2>
          <p className="text-2xl mt-2">
            with exclusives <span className="font-bold"> collaboration </span>
          </p>
          <button className="text-xl bg-primary-blue-500 px-8 py-2 rounded-full mt-4 text-white inline-flex items-center gap-2">
            Explore Collection
            <BiRightArrowAlt />
          </button>
        </div>
        <div className="flex items-end gap-8">
          <div  data-aos="fade-left"   data-aos-duration="1500"  className="">
            <img src={ownshirt} alt="own-shirt" />
          </div>
          <div  data-aos="fade-left"   data-aos-duration="3000" className="">
            <img src={ownbag} alt="own-bag" />
          </div>
          <div  data-aos="fade-left"   data-aos-duration="4500">
            <img src={owncup} alt="own-cup" />
          </div>
        </div>
      </section>
    </>
  )
}
export default OwnIt