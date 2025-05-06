import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import Hero from "../components/HomePage/Hero";
import ExpressTheWorld from "../components/HomePage/ExpressTheWorld";
import TodayTrend from "../components/HomePage/TodayTrend";
import Banner from "../components/HomePage/banner";
import OwnIt from "../components/HomePage/OwnIt";
import SaleSlide from "../components/HomePage/SaleSlide";

import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const itemVariants1 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // เปลี่ยน once: false เพื่อให้เล่นตอน scroll ขึ้นด้วย
        variants={itemVariants1}
        className="w-full"
      >
        <ExpressTheWorld />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // เปลี่ยน once: false เพื่อให้เล่นตอน scroll ขึ้นด้วย
        variants={itemVariants1}
        className="w-full"
      >
        <TodayTrend />
      </motion.div>

      <Banner />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // เปลี่ยน once: false เพื่อให้เล่นตอน scroll ขึ้นด้วย
        variants={itemVariants1}
        className="w-full"
      >
        <OwnIt />
      </motion.div>

      <SaleSlide />
    </>
  );
};
export default Home;
