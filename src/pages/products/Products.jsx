import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import hrms from "/images/HRMS.jpg";
import am from "/images/AM.png";
import pm from "/images/pm.jpeg";
import bm from "/images/bm.png";
import eb from "/images/eb.png";

const productDetails = [
  {
    id: 1,
    productName: "HRMS Software",
    image: hrms,
    description:
      "In today’s fast-paced business environment, managing human resources efficiently is more crucial than ever. Our cutting-edge HRMS (Human Resource Management System) Software is designed to simplify and automate your HR processes, allowing your team to focus on what truly matters – driving your business forward. Empower your HR department with our comprehensive, easy-to-use HRMS solution.",
    detail: "",
  },

  {
    id: 2,
    productName: "Affiliate Marketing Software",
    image: am,
    description:
      "In today’s digital era, affiliate marketing stands out as an effective strategy to boost sales and enhance online visibility. Our Affiliate Marketing Software is here to transform how you manage your affiliate programs. Tailored for excellence, our software simplifies affiliate marketing processes, allowing you to focus on what truly matters – growing your business.",
    detail: "",
  },
  {
    id: 3,
    productName: "Project Management Software",
    image: pm,
    description:
      "In the fast-paced business world, managing projects efficiently is crucial for success. Our Project Management Software is designed to empower teams, streamline workflows, and ensure project success from inception to completion.",
    detail: "",
  },
  {
    id: 4,
    productName: "Brand Management",
    image: bm,
    description:
      "In the  digital era , standing out is no longer just an option—it’s a necessity. Our innovative Brand Management Software is crafted to empower your business with a suite of powerful tools, designed to not only establish and maintain your brand’s presence but to take it to unprecedented heights. This solution is your key to unlocking a new realm of branding efficiency, where your message is not just seen but remembered, and your visual identity not just recognized but revered. ",
    detail: "",
  },
  {
    id: 5,
    productName: "Event Booking Software",
    image: eb,
    description:
      "Discover the ultimate solution for seamless event organization with our Event Booking Software. Designed to simplify and automate the booking process, our software is the perfect tool for event planners, venues, and businesses looking to streamline their event management tasks. With an intuitive interface and powerful features, organizing events has never been easier or more efficient.",
    detail: "",
  },
];

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <h1 className="text-center text-emerald-500 text-lg sm:text-xl font-semibold mb-4">
        PRODUCTS
      </h1>
      {/* card */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productDetails.map((product, index) => (
          <div key={index} className="bg-emerald-100 shadow-md rounded-lg p-4">
            <h1 className="text-emerald-500 text-lg sm:text-xl text-center font-semibold">
              {product.productName}
            </h1>
            <p className="text-justify line-clamp-4">{product.description}</p>
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 mt-4 text-sm sm:text-base flex items-center"
              onClick={() =>
                navigate(`/product/${product.id}`, { state: product })
              }
            >
              More Details{" "}
              <FontAwesomeIcon
                className="ml-1 text-emerald-500 px-2 py-1 bg-white rounded-full"
                icon={faChevronRight}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
