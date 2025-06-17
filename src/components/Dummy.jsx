import { faUikit } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faObjectUngroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  return (
    <div className="h-screen bg-emerald-100">
      <div className="grid grid-cols-3 gap-24">
        {/* col1 */}
        <div className="grid grid-rows-2 gap-2 p-16">
          <div className="grid grid-cols-1 gap-2">
            <div className="pt-8"> </div>
            {/* row1 */}
            <div className="bg-white p-8">
              <h1 className="text-4xl text-emerald-500">{"{ }"}</h1>
              <h4 className="text-lg font-semibold my-1">Web Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                quia aperiam, repellendus.
              </p>
              <button className="text-white mt-2 bg-emerald-500 rounded-full py-2 px-4 ">
                More Details
              </button>
            </div>
            {/* row2 */}
            <div className="bg-white p-8">
              <h1 className="text-4xl text-emerald-500">
                <FontAwesomeIcon icon={faCircleCheck} />
              </h1>
              <h4 className="text-lg font-semibold my-1">SEO & Marketing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                quia aperiam, repellendus
              </p>
              <button className="text-white mt-2 bg-emerald-500 rounded-full py-2 px-4 ">
                More Details
              </button>
            </div>
          </div>
        </div>
        {/* col2 */}
        <div className="grid grid-rows-2 gap-2 p-16">
          <div className="grid grid-cols-1 gap-2">
            {/* row1 */}
            <div className="bg-emerald-400 p-8">
              <h1>
                <FontAwesomeIcon
                  icon={faUikit}
                  className="text-white text-4xl"
                />
              </h1>
              <h4 className="text-lg text-white font-semibold my-1">
                UI/UX Analysis
              </h4>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                quia aperiam, repellendus
              </p>
              <button className="text-white bg-emerald-700 mt-2 rounded-full py-2 px-4 ">
                More Details
              </button>
            </div>
            {/* row2 */}
            <div className="bg-white p-8">
              <h1 className="text-4xl text-emerald-500">
                <FontAwesomeIcon icon={faObjectUngroup} />
              </h1>
              <h4 className="text-lg font-semibold my-1">Graphics Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                quia aperiam, repellendus
              </p>
              <button className="text-white mt-2 bg-emerald-500 rounded-full py-2 px-4 ">
                More Details
              </button>
            </div>
          </div>
        </div>
        {/* col3 */}
        <div className="grid grid-rows-2 gap-2 p-16">
          <div className="grid grid-cols-1 gap-2">
            <div className="p-8"></div>
            <div className="bg-white p-6">
              <h4 className="text-lg font-bold my-1 text-emerald-500">
                SERVICES
              </h4>
              <h1 className="text-xl font-bold">Our Services Include.</h1>
              <p>
                Analay has over 100 ambitious and dedicated employees
                all-inclusive digital experience with a focus on long-term
                vision.
              </p>
              <button className="text-white mt-2 bg-emerald-500 rounded-full py-2 px-4 ">
                All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
