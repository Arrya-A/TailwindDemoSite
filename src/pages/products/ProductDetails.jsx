import React from "react";
import Section1 from "./productDetails/Section1";
import Section2 from "./productDetails/Section2";
import Section3 from "./productDetails/Section3";

const ProductDetails = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <Section1 />
      <Section2 />
      <hr />
      <Section3 />
    </div>
  );
};

export default ProductDetails;
