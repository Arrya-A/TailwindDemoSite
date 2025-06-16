import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-500 px-6">
        <div className="flex justify-between items-center py-4 text-white">
          <div className="text-xl font-bold">ANALAY</div>

          <ul className="hidden md:flex space-x-6">
            <li className="hover:font-bold">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/project"> Our Projects</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <div className="hidden md:block pr-16">
            <Link to="/login">
              <button className="bg-white text-emerald-500 rounded-full py-2 px-4">
                Sign In
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-emerald-500 text-white py-4 space-y-4 text-sm font-medium">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/aboutus" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              <button className="bg-white text-emerald-500 rounded-full py-2 px-4">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
