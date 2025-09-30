import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Broken Plate Animation */}
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full opacity-20"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full opacity-15"></div>
              {/* Crack lines */}
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-600 transform -translate-x-0.5 rotate-12"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-0.5 rotate-45"></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-0.5 bg-gray-600 transform rotate-75"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Oops! Plate Not Found</h2>
            <p className="text-gray-600 mb-8">
              Looks like this page has been consumed! Don't worry, we have plenty more delicious content to serve you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <Link to="/" className="btn-primary inline-flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="pt-4">
              <button
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-gray-800 inline-flex items-center space-x-2 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
          >
            <p className="text-yellow-800 text-sm">
              🍛 While you're here, why not check out our menu or contact us for your next catering event?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;