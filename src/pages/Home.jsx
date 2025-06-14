import React from "react";

const Home = () => {
  return (
    <>
      <div className="pt-16">
        <div className=" h-[90vh]">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="flex flex-col justify-center px-32">
              <h4 className="text-xl font-semibold">Best Agency in India</h4>
              <h1 className="text-4xl font-bold py-2">Digital Ageny and Solutions</h1>
              <p className="pb-3">
                Quickly grow your business & boost up sale with professional
                startup Tanviro
              </p>
              <div>
                <button className="bg-emerald-500 rounded-full py-2 px-4 mr-3">Get Started </button>
                <button className="bg-emerald-500 rounded-full py-2 px-4">See Live Demo</button>
              </div>
            </div>
            <div>
              <img className="h-full w-full object-cover" src="src/images/home.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
