import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Section1 = () => {
  const { state: product } = useLocation();
  console.log(product);

  return (
    <>
      <div className="relative overflow-hidden py-3 px-0 ">
        <motion.div
          className="absolute inset-0 bg-emerald-500 z-0"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeIn" }}
        />

        <div className="relative z-10 text-white">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Key Features of Our {product.productName}
          </h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <img
            src={product.image}
            alt="Product visual"
            className="w-full max-h-[500px] rounded-bl-[3rem] rounded-r-[3rem] object-cover"
          />
          <div className="flex justify-center items-center p-4">
            <p className="text-justify">{product.key_features}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Section1;
