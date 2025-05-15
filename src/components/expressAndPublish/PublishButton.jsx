import React from "react";
import { motion } from "framer-motion";
import arrowright from "../assets/images/preview/iconArrowRight.png"; // update path if needed

function PublishButton({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="w-[256px] h-[48px] bg-primary-black text-white font-medium py-2 px-4 rounded-[8px] relative flex items-center justify-center cursor-pointer overflow-hidden"
      whileHover={{ x: 10 }}
      whileTap={{ scale: 0.96 }}
    >
      Publish
      <motion.img
        src={arrowright}
        alt="Arrow right"
        className="ml-4"
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </motion.button>
  );
}

export default PublishButton;
