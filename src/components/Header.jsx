import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-500">
        <ul className="flex justify-center items-center space-x-6 py-5 text-white">
          <Link to={"/"} ><li>Home</li></Link>
          <Link to={"/aboutus"} ><li>About Us</li></Link>
          <Link to={"/services"} ><li>Services</li></Link>
          <Link to={"/contact"} ><li>Contact Us</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
