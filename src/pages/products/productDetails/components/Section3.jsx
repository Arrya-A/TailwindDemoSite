import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Section3 = () => {
  const { state: product } = useLocation();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 sm:py-32 bg-white flex  justify-center items-center">
        <div className="">
          <h1 className="text-xl md:text-2xl font-semibold pb-4 text-emerald-500">
            How Does {product.productName} Work?
          </h1>
          <p className="pb-5">{product.working}</p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 text-sm sm:text-base">
            Purchase Package
          </button>
        </div>
        <img
          src={product.image}
          alt="Product in action"
          className="w-full max-h-[500px] rounded-l-[3rem] rounded-br-[3rem] object-cover"
        />
      </div>
    </>
  );
};

export default Section3;
