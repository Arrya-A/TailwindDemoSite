import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Project = () => {
  const images = [
    "/src/images/1.jfif",
    "/src/images/2.jpg",
    "/src/images/3.jpg",
    "/src/images/4.png",
    "/src/images/5.webp",
    "/src/images/4.png",
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCenter = (index) => {
    const container = scrollRef.current;
    const child = container?.children[index];
    if (child && container) {
      const containerCenter = container.offsetWidth / 2;
      const childCenter =
        child.offsetLeft - container.offsetLeft + child.offsetWidth / 2;
      container.scrollTo({
        left: childCenter - containerCenter,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (direction) => {
    let newIndex = activeIndex;
    if (direction === "next" && activeIndex < images.length - 1) {
      newIndex++;
    } else if (direction === "prev" && activeIndex > 0) {
      newIndex--;
    }
    setActiveIndex(newIndex);
    scrollToCenter(newIndex);
  };

  useEffect(() => {
    scrollToCenter(activeIndex);
  }, []);

  return (
    <motion.div
      className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="p-8 pt-20 sm:px-8 md:px-12 lg:px-16 bg-white relative overflow-hidden">
        <h4 className="text-lg sm:text-xl font-semibold text-emerald-500 py-2">
          PROJECT
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Our Project
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl">Gallery.</h1>

        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll overflow-y-hidden space-x-6 snap-x snap-mandatory px-8 no-scrollbar"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`shrink-0 snap-center transition-all duration-300 rounded-xl shadow-lg ${
                  index === activeIndex
                    ? "w-72 h-96 scale-105 z-10"
                    : "w-60 h-80 opacity-60 scale-95"
                }`}
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={() => handleScroll("prev")}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full shadow-md hover:bg-emerald-700 z-20"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleScroll("next")}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full shadow-md hover:bg-emerald-700 z-20"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
