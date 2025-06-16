import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start min-h-screen bg-[url('/src/images/bg.jpg')] bg-no-repeat bg-cover mt-16 px-4 sm:px-8">
            <div className="w-full lg:w-3/5 max-w-4xl pt-20 sm:pt-24 lg:pt-32">
              <div className="bg-white/70  p-6 sm:p-8 rounded-lg text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Crafting Digital <br /> Experiences for You
                </h1>
                <p className="mt-6 sm:mt-8 text-sm sm:text-base">
                  At DigiCraft, we specialize in creating innovative digital
                  solutions tailored to your unique needs. Let us help you transform
                  your vision into a stunning online reality.
                </p>
                <Link to="/login">
                  <button className="bg-black text-white rounded-full py-2 px-4 mt-6 flex items-center gap-x-2 mx-auto lg:mx-0">
                    Get Started
                    <FontAwesomeIcon
                      className="rounded-full bg-white text-black p-1 px-2"
                      icon={faChevronRight}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
    
  )
}

export default Information