import React from "react";
import { useLocation } from "react-router-dom";

const Section3 = () => {
  const { state: product } = useLocation();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 sm:py-32">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold pb-4 ">
            How Does {product.productName} Work?
          </h1>
          <p className="text-justify">{product.working}</p>
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
