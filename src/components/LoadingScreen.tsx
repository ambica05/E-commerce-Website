import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-brightness-60"
      style={{
        backgroundImage: "url('../assets/loading_page.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-full border-4 border-white border-opacity-30 relative">
            <div className="absolute inset-2 rounded-full bg-white bg-opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-white bg-opacity-40"></div>
            <div className="absolute inset-6 rounded-full bg-white"></div>
          </div>
        </motion.div>

        {/* Brand Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Shiva Sai Caterers
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-opacity-80"
        >
          Preparing something delicious...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
