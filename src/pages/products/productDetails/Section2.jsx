import React from "react";
import { useLocation } from "react-router-dom";
import { Parallax, useParallax } from "react-scroll-parallax";

const Section2 = () => {
  const { state: product } = useLocation();
  // const { ref } = useParallax();
  return (
    <>
      <Parallax scale={[0.5, 1.2]} opacity={[0.1, 2]} speed={30}>
        <div className="py-8 sm:py-32 bg-emerald-100 sticky">
          <h1 className="text-2xl md:text-4xl font-semibold text-center pb-8">
            {product.heading2}
          </h1>
          <p className=" text-center px-12">{product.detail}</p>
        </div>
      </Parallax>
    </>
  );
};

export default Section2;
