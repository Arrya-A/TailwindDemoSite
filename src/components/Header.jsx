import { faAtom, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentTab = location.pathname;
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isSignedIn = !!localStorage.getItem("accessToken");

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-500 px-6">
      <div className="flex justify-between items-center py-4 text-white">
        <div id="brand" className="text-xl font-bold">
          <FontAwesomeIcon icon={faAtom} className="mr-1" />
          DigiCraft
        </div>

        {/* signed-in and not landing */}
        {isSignedIn && (
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/home"
                className={`px-3 py-1 rounded-full ${
                  currentTab === "/home" ? "bg-white text-emerald-500" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={`px-3 py-1 rounded-full ${
                  currentTab === "/aboutus" ? "bg-white text-emerald-500" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className={`px-3 py-1 rounded-full ${
                  currentTab === "/project" ? "bg-white text-emerald-500" : ""
                }`}
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`px-3 py-1 rounded-full ${
                  currentTab === "/product" ? "bg-white text-emerald-500" : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`px-3 py-1 rounded-full ${
                  currentTab === "/contact" ? "bg-white text-emerald-500" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop signin hidden  */}
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <button
              onClick={handleSignOut}
              className="bg-white text-emerald-500 rounded-full py-2 px-4"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-white text-emerald-500 rounded-full py-2 px-4">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile  */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faX : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="md:hidden flex flex-col items-center bg-emerald-500 text-white py-4 space-y-4 text-sm font-medium">
              {isSignedIn && (
                <>
                  <Link to="/home" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link to="/aboutus" onClick={toggleMenu}>
                    About Us
                  </Link>
                  <Link to="/project" onClick={toggleMenu}>
                    Our Projects
                  </Link>
                  <Link to="/project" onClick={toggleMenu}>
                    Products
                  </Link>
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact Us
                  </Link>
                </>
              )}

              {isSignedIn ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="bg-white text-emerald-500 rounded-full py-2 px-4"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login" onClick={toggleMenu}>
                  <button className="bg-white text-emerald-500 rounded-full py-2 px-4">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;
