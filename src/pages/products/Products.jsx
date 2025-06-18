import React from "react";
import { motion } from "framer-motion";
const Products = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <h1 className="text-center text-emerald-500 text-lg sm:text-xl font-semibold mb-4">
        PRODUCTS
      </h1>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-emerald-100 shadow-md rounded-lg p-4">
          <h1 className="text-emerald-500 text-lg sm:text-xl text-center font-semibold">
            Heading
          </h1>
          <p className="text-justify">
            Description : Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Molestias optio a cumque error doloribus aspernatur, eaque sit
            velit dolorum adipisci, fugit dolor, illum facere pariatur sunt
            commodi obcaecati. Ipsam, praesentium.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 text-sm sm:text-base">
            More Details
          </button>
        </div>
        <div className="bg-emerald-100 shadow-md rounded-lg p-4">
          <h1 className="text-emerald-500 text-lg sm:text-xl text-center font-semibold">
            Heading
          </h1>
          <p className="text-justify">
            Description : Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Molestias optio a cumque error doloribus aspernatur, eaque sit
            velit dolorum adipisci, fugit dolor, illum facere pariatur sunt
            commodi obcaecati. Ipsam, praesentium.
          </p>
        </div>
        <div className="bg-emerald-100 shadow-md rounded-lg p-4">
          <h1 className="text-emerald-500 text-lg sm:text-xl text-center font-semibold">
            Heading
          </h1>
          <p className="text-justify">
            Description : Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Molestias optio a cumque error doloribus aspernatur, eaque sit
            velit dolorum adipisci, fugit dolor, illum facere pariatur sunt
            commodi obcaecati. Ipsam, praesentium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
