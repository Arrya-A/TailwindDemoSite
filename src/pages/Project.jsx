import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Project = () => {
  const images = [
    "/images/1.jfif",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.png",
    "/images/5.webp",
    "/images/4.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="pt-12 pb-12 px-4 md:px-16 w-full bg-white">
        <h4 className="text-lg sm:text-xl font-semibold text-emerald-500">
          PROJECT
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Our Project
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl pb-6">Gallery.</h1>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex flex-col items-center px-20">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="h-[200px] w-[200px] object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
              />
              <h3 className="text-center mt-3 font-medium text-gray-700">
                Project {index + 1}
              </h3>
            </div>
          ))}
        </Slider>
      </section>
    </motion.div>
  );
};

export default Project;
