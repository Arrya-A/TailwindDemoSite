import React from "react";

const Footer = () => {
  return (
    <div className="py-8 bg-emerald-200 flex items-center justify-center">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1"></div>

        <div className="col-span-4">
          <h1 className="text-emerald-500 font-bold text-lg">Analay</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eum
            recusandae itaque distinctio quia illum, accusantium sint qui quasi
            inventore.
          </p>
        </div>
        <div className="col-span-2">
          <h1 className=" font-bold ">Service</h1>
          <ul>
            <li>Web Design</li>
            <li>Development</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className=" font-bold ">About Us</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="col-span-3">
          <h1 className=" font-bold ">Our Address</h1>
          <p>Bangladesh, India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
