import React from "react";

const testimonials = [
  {
    image: "src/images/team1.png",
    name: "Emily Johnson",
    designation: "Marketing Director",
    company: "GreenTech Solutions",
    description:
      "DigiCraft transformed our online presence with a stunning website and effective marketing strategies. Their team was professional, creative, and dedicated to our success. We highly recommend DigiCraft for any business seeking digital excellence.",
  },
  {
    image: "src/images/team2.png",
    name: "Michael Lee",
    designation: "CEO",
    company: "GreenTech Solutions",
    description:
      "Working with DigiCraft was a game-changer for our brand. Their expertise in digital marketing helped us reach a wider audience and increase sales significantly. The team was responsive and innovative throughout the project",
  },
  {
    image: "src/images/team3.png",
    name: "Martin",
    designation: "Founder",
    company: "Techwiz Solutions",
    description:
      "DigiCraft's web development team created a beautiful, user-friendly e-commerce site for us. The process was smooth, and the results exceeded our expectations. Our sales ha grown, and our customers love new platform.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-emerald-100">
      <h1 className="text-3xl font-bold text-center pt-8">
        Client Testimonials
      </h1>
      <p className="text-center py-4 text-gray-600">
        Trusted by top brands worldwide — see what they say about us.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-8 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex mb-2">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt=""
              />
              <div className="ml-4">
                <p className="font-bold text-sm">{testimonial.name}</p>
                <p className="font-semibold text-sm">
                  {testimonial.designation}, {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-sm">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
