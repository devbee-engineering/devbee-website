import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  logo?: React.ReactNode;
  siteName?: string;
}

const loaderVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -60, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Loader: React.FC<LoaderProps> = ({ logo, siteName = 'DevBee Inc.' }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loaderVariants}
        >
          <div className="flex flex-col items-center">
            {logo ? (
              <div className="mb-4">{logo}</div>
            ) : (
              <img src="/Devbee.png" alt="DevBee Logo" className="w-30 h-24 mb-4" />
            )}
            <span className="text-3xl font-bold text-yellow-600 tracking-wide animate-pulse">
              {siteName}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
