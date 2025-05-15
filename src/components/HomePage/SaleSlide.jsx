import product1 from "../../assets/images/home/slide/don_t-kill-gray.png";
import product2 from "../../assets/images/home/slide/fetch-this-black.png";
import product3 from "../../assets/images/home/slide/more-espresso-white.png";
import product4 from "../../assets/images/home/slide/prove-them-back-gray.png";
import product5 from "../../assets/images/home/slide/prove-them-back-white.png";
import product6 from "../../assets/images/home/slide/prove-them-white.png";
import product7 from "../../assets/images/home/slide/screaming-blue.png";
import product8 from "../../assets/images/home/slide/think-out-side-the-box-back-white.png";
import product9 from "../../assets/images/home/slide/think-out-side-the-box-backt-black.png";
import logoads from "../../assets/images/home/slide/logo-ads.svg";
import { Link } from "react-router";

import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SaleSlide = () => {
const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <>
    <section className="h-[590px] bg-primary-blue-500">
        <div className="flex flex-col items-center">
          <img src={logoads} alt="" className="w-[207px] mt-10" />
          <h3 className="text-3xl font-bold text-white mt-6">CLEARANCE SALE</h3>
          <p className=" text-white mt-3">UP TO</p>
          <h4 className="text-[76px] font-bold text-white">25% OFF</h4>
        </div>

        <div ref={ref} className="overflow-hidden w-full  py-4 text-white">
          <motion.div
            className="whitespace-nowrap inline-flex gap-4"
            variants={{
              animate: {
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                  },
                },
              },
            }}
            initial={false}
            animate={controls}
          >
            {[...Array(2)].map((_, i) => (
              <div data-aos="fade-left" key={i} className="flex gap-4 min-w-[180px]">
                {[
                  product1,
                  product2,
                  product3,
                  product4,
                  product5,
                  product6,
                  product7,
                  product8,
                  product9,
                ].map((src, index) => (
                  <div key={index} className="min-w-[180px] flex-shrink-0">
                    <img
                      src={src}
                      alt={`product-${index}`}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/shop">
          <button className="text-lg bg-white px-8 py-2 rounded-full mt-4 text-primary-blue-500 cursor-pointer">
            Go to Shop
          </button>
          </Link>
        </div>
      </section>
    </>
  )
}
export default SaleSlide