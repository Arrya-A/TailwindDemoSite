import React from "react";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const Section2 = () => {
  const { state: product } = useLocation();
  return (
    <>
      <div className="py-8 sm:py-32 bg-white">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-8">
          {product.heading2}
        </h1>
        <p className=" text-center px-12">{product.detail}</p>
      </div>
      
    </>
  );
};

export default Section2;
