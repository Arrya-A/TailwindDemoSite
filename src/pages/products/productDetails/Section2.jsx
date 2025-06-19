import React from "react";
import { useLocation } from "react-router-dom";

const Section2 = () => {
  const { state: product } = useLocation();
  return (
    <>
      <div className="py-8 sm:py-32">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-8">
          Benefits of Our {product.productName}
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          corporis sed aliquam consequatur distinctio animi commodi? Commodi,
          corrupti accusantium! A officia inventore vel unde commodi, laborum
          quo provident dolore amet.
        </p>
      </div>
    </>
  );
};

export default Section2;
