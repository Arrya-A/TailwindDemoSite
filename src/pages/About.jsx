import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <div className="flex flex-col justify-center px-32">
          <h4 className="text-lg font-bold text-emerald-500">ABOUT US</h4>
          <h1 className="text-3xl font-bold py-2">
            Boosts Your Business With Analay.
          </h1>
          <p className="pb-3">
            Analay has over 100 ambitious and dedicated employees working for
            more than 50 partners, like Telenet, Proximus, Bolero, KLM,... We
            stand for all-inclusive digital experience with a focus on long-term
            vision.
          </p>
          <div>
            <button className="bg-emerald-500 rounded-full py-2 px-4 mr-3">
              More Details
            </button>
          </div>{" "}
        </div>
        <div className="flex justify-center items-center">
          <img className="rounded-l-[3rem] rounded-br-[3rem] h-auto" src="src/images/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
