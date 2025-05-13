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

const ModalAlert = ({ isOpen, onClose, title, message, hideActions = false, disableClose = false }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="bg-black/50 fixed inset-0 z-40"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative flex justify-center items-center">
                  <Dialog.Title className="text- font-bold">{title}</Dialog.Title>
                  {!disableClose && (
                    <Dialog.Close asChild>
                      <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  )}
                </div>

                <Dialog.Description className="mt-4 text-center font-semibold text-gray-700">
                  {message}
                </Dialog.Description>

                {!hideActions && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={onClose}
                      className="bg-primary-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                    >
                      OK
                    </button>
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default ModalAlert;
