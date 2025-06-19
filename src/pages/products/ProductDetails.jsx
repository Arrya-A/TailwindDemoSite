import React from "react";
import image from "../../images/about.png";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { state: product } = useLocation();
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-3">
        Key Features of Our {product.productName}
      </h1>

      {/* section1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <img
          src={image}
          alt="Product visual"
          className="w-full max-h-[500px] rounded-l-[3rem] rounded-br-[3rem] object-cover"
        />
        <div>
          <p>{product.description}</p>
        </div>
      </div>

      {/* section2 */}
      <div className="py-8 sm:py-32">
        <h1 className="text-2xl md:text-4xl font-semibold text-center pb-8">
          Benefits of Our {product.productName}
        </h1>
        <p className="text-center">
 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corporis sed aliquam consequatur distinctio animi commodi? Commodi, corrupti accusantium! A officia inventore vel unde commodi, laborum quo provident dolore amet.
        </p>
      </div>

      <hr />

      {/* section3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 sm:py-32">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold pb-4">
            How Does {product.productName} Work?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure numquam repellendus tempore minima repudiandae maxime id similique. Excepturi sunt consequuntur nobis voluptates recusandae, iste inventore sit ab obcaecati ullam!
          </p>
        </div>
        <img
          src={image}
          alt="Product in action"
          className="w-full max-h-[500px] rounded-r-[3rem] rounded-bl-[3rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
