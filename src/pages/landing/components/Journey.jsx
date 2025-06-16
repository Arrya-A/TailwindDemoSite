import React from "react";
const Journey = () => {
  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 py-8 gap-8">
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h4 className="text-2xl font-bold mb-4">Our Journey</h4>
        <p>
          At DigiCraft, we have been transforming digital visions into reality
          since our inception. Our dedicated team of experts is passionate about
          delivering innovative, tailored solutions that help businesses succeed
          online. Discover how our commitment to creativity and integrity sets
          us apart in the digital landscape.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 py-8">
          {/* Grid 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">150+</h2>
            <p>happy clients.</p>
          </div>

          {/* Grid 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">300+</h2>
            <p>successful projects.</p>
          </div>

          {/* Grid 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">75+</h2>
            <p>satisfied partners.</p>
          </div>

          {/* Grid 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">100+</h2>
            <p>industry awards.</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="src/images/journey.jpg"
          alt="Our Journey"
          className="max-h-[500px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Journey;
