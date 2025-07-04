import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="min-h-0 flex flex-col lg:flex-row items-center pt-16 pb-6">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-emerald-500">
              ABOUT US
            </h4>
            <p className="text-gray-600 text-md sm:text-base max-w-md mx-auto lg:mx-0">
              Driving digital growth through innovation and collaboration.
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold ">
              Boosts Your Business With DigiCraft.
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              DigiCraft has over 100 ambitious and dedicated employees working
              for more than 50 partners, like Telenet, Proximus, Bolero, KLM,...
              We stand for all-inclusive digital experience with a focus on
              long-term vision.
            </p>
            <div>
              <button className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 text-sm sm:text-base">
                More Details
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/images/about.png"
              className="w-full h-auto max-h-[500px] rounded-l-[3rem] rounded-br-[3rem] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
