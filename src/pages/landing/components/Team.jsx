import React from "react";

const Team = () => {
  const teams=[{
    image:"src/images/team1.png",
    name:"Alice Johnson",
    designation:"Creative Head",
    description:"Leads the creative team with a passion for innovative design and branding strategies.",
  },
  {
    image: "src/images/team2.png",
     name:"Max Carlson",
    designation:"Lead Developer",
    description:"Specialises in web development, ensuring seamless, responsive digital experiences.",
  },
  {
    image: "src/images/team3.png",
     name:"Michael Lee",
    designation:"Business Strategist",
    description:"Leads the business with online visibility and engagement.",
  },
]

  return (
    <div className="min-h-[90vh] bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-8 text-emerald-500">Meet Our Team</h1>
      <p className="text-center py-4 text-gray-600">
        Discover the talented professionals behind our success and innovation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-16 py-8">
        {/* Team Members */}
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-emerald-500">{team.name}</h2>
              <p className="text-sm  font-medium">
                {team.designation}
              </p>
              <p className="text-gray-600 text-sm mt-1">{team.description}</p>
            </div>
          </div>
        ))}



      </div>
    </div>
  );
};

export default Team;
