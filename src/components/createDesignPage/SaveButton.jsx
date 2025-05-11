import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function SaveButton({ onSave }) {
  return (
    <motion.button
      type="button"
      onClick={onSave}
      className="w-[120px] h-[48px] bg-primary-blue-500 text-white font-medium py-2 px-4 rounded-[8px] cursor-pointer"
      whileHover={{
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      Save
    </motion.button>
  );
}

export default SaveButton;
