import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="p-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="min-h-0 flex flex-col lg:flex-row items-center pt-24 pb-6">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-semibold text-emerald-500">
              CONTACT US
            </h4>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              Let's Talk About Your Information
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Call us for immediate support to this number
            </p>
            <p className="font-bold">+971548563542</p>

            <div className="text-2xl">
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#0866FF" }}
                  className="me-3 "
                />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#029EEC" }}
                  className="me-3 "
                />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faPinterest}
                  style={{ color: "#B7081B" }}
                  className="me-3 "
                />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#007AB5" }}
                  className="me-3 "
                />
              </Link>
              <Link to={"/"}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#BB0383" }}
                  className="me-3 "
                />
              </Link>
            </div>
          </div>

          {/* form Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 md:py-6">
            <div className="h-full w-full bg-cover bg-center flex items-center justify-center bg-emerald-500">
              <div className=" p-8  w-[70%] ">
                <label className="block text-sm/6 font-medium text-white">
                  Name
                </label>

                <div class="mb-2">
                  <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="text"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Enter your Full Name"
                    />
                  </div>
                </div>
                <label className="block text-sm/6 font-medium text-white">
                  Web Link
                </label>

                <div class="mb-2">
                  <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="text"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Enter your Web Link"
                    />
                  </div>
                </div>
                <label className="block text-sm/6 font-medium text-white">
                  Message
                </label>

                <div class="mb-2">
                  <div class="flex items-center  bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <textarea
                      type="text"
                      class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Write your information..."
                    />
                  </div>
                </div>
                <button className=" mt-3 rounded-full text-white bg-emerald-700 hover:bg-emerald-900   py-2 px-3 ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
