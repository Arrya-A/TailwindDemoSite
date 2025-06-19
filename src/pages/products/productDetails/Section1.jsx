import React from "react";
import { useLocation } from "react-router-dom";

const Section1 = () => {
  const { state: product } = useLocation();
  console.log(product);
  console.log(product.image);

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-3">
        Key Features of Our {product.productName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt="Product visual"
          className="w-full max-h-[500px] rounded-l-[3rem] rounded-br-[3rem] object-cover"
        />
        <div>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Section1;
