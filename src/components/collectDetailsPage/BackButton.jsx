import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CaretLeft from "../../assets/images/collect-details-pages/CaretLeft.svg";

function BackButton({ onBack }) {
  return (
    <motion.button
      type="button"
      onClick={onBack}
      className="w-[72px] h-[48px] outline-1 text-black font-medium py-2 px-4 rounded-[8px] cursor-pointer flex items-center justify-center overflow-hidden"
      whileHover={{ x: -10 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.img
        src={CaretLeft}
        alt="Caret Left"
        className="ml-2"
        initial={{ x: 0 }}
        whileHover={{ x: -6 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </motion.button>
  );
}

export default BackButton;
