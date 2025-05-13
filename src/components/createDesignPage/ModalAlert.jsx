import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 }
  },
  exit: { opacity: 0, y: -50, scale: 0.95 }
};

const ModalAlert = ({ isOpen, onClose, title, message }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Animate backdrop */}
            <Dialog.Overlay asChild>
              <motion.div
                className="bg-black/50 fixed inset-0 z-40"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </Dialog.Overlay>

            {/* Animate modal content */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex justify-center items-center">
                  <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
                  <Dialog.Close asChild>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="mt-4 text-gray-700">
                  {message}
                </Dialog.Description>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={onClose}
                    className="bg-primary-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 "
                  >
                    OK
                  </button>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default ModalAlert;
