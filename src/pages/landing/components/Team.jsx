import React from "react";

const Team = () => {
  const images = [
    "src/images/team1.png",
    "src/images/team2.png",
    "src/images/team3.png",
  ];
  const name = ["Alice Johnson", "Max Carlson", "Michael Lee"];
  const designation = [
    "Creative Head",
    "Lead Developer",
    "Business Strategist",
  ];
  const description = [
    "Leads the creative team with a passion for innovative design and branding strategies.",
    "Specialises in web development, ensuring seamless, responsive digital experiences.",
    "Leads the business with online visibility and engagement.",
  ];

  return (
    <div className="min-h-[90vh] bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-8">Meet Our Team</h1>
      <p className="text-center py-4 text-gray-600">
        Discover the talented professionals behind our success and innovation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 py-8">
        {/* Team Members */}
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6"
          >
            <img
              src={img}
              alt={name[index]}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{name[index]}</h2>
              <p className="text-sm text-emerald-600 font-medium">
                {designation[index]}
              </p>
              <p className="text-gray-600 text-sm mt-1">{description[index]}</p>
            </div>
          </div>
        ))}



      </div>
    </div>
  );
};

export default Team;
