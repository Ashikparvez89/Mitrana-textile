// pages/under-construction.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-gray-800"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-white drop-shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        This Page is Under Construction 🚧
      </motion.h1>
      <motion.p
        className="mt-5 text-lg font-medium text-center text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        We’re crafting something special for you. Check back soon for updates!
      </motion.p>
      <motion.div
        className="mt-8 p-4 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <p className="text-sm text-center text-gray-600">
          Thank you for your patience! We can’t wait to show you what’s coming.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default UnderConstruction;
