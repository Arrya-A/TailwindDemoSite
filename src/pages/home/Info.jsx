import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <>
      <motion.div
        className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
          <div className="min-h-0 flex flex-col lg:flex-row items-center pt-16 pb-6">
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h4 className="text-lg sm:text-xl font-semibold text-emerald-600">
                Best Agency in India
              </h4>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
                Digital Agency and Solutions
              </h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                Quickly grow your business & boost up sales with professional
                startup Tanviro
              </p>
              <div className="flex sm:flex-row justify-center lg:justify-start items-center gap-4 ">
                <Link to="">
                  <button className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-4 flex items-center gap-x-2">
                    Get Started
                    <FontAwesomeIcon
                      className="rounded-full bg-white text-emerald-500 p-1 px-2"
                      icon={faChevronRight}
                    />
                  </button>
                </Link>
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 text-sm sm:text-base">
                  See Live Demo
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="src/images/home.png"
                alt="Hero"
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
