import React from 'react';
import { motion } from 'framer-motion';

function SaveButton({ onSave, disabled = false }) {
  const baseClasses =
    'w-[120px] h-[48px] font-medium py-2 px-4 rounded-[8px] transition';

  const enabledClasses = 'bg-primary-blue-500 text-white cursor-pointer';
  const disabledClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed';

  return (
    <motion.button
      type="button"
      onClick={!disabled ? onSave : undefined}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
      {...(!disabled && {
        whileHover: {
          scale: [1, 1.2, 1],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'loop',
          },
        },
        whileTap: { scale: 0.95 },
      })}
    >
      Save
    </motion.button>
  );
}

export default SaveButton;






