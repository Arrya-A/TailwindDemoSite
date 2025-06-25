import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="py-8 px-4 bg-emerald-500 text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        <div className="hidden lg:block lg:col-span-1"></div>

        <div className="lg:col-span-4">
          <h1 id="brand" className=" font-bold text-lg mb-2">
            <FontAwesomeIcon icon={faAtom} className="mr-1" />
            DigiCraft
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eum
            recusandae itaque distinctio quia illum, accusantium sint qui quasi
            inventore.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h1 className=" font-bold mb-2">Service</h1>
          <ul className="space-y-1 ">
            <li>Web Design</li>
            <li>Development</li>
            <li>WordPress</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h1 className=" font-bold mb-2">About Us</h1>
          <ul className="space-y-1 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h1 className=" font-bold mb-2">Our Address</h1>
          <p>Bangladesh, India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
