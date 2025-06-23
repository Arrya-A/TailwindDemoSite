import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const ProductDetails = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="sticky top-0 h-screen z-0">
        <Section1 />
      </div>

      {/* Section2 scrolling above */}
      <div className="relative z-10">
        <Section2 />
      <hr />
        <Section3 />
      </div>
    </div>
  );
};

export default ProductDetails;
