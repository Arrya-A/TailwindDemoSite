import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import hrms from "/images/HRMS.jpg";
import am from "/images/AM.png";
import pm from "/images/pm.jpeg";
import bm from "/images/bm.png";
import eb from "/images/eb.png";

const productDetails = [
  {
    id: 1,
    productName: "HRMS Software",
    image: hrms,
    key_features:
      "In today’s fast-paced business environment, managing human resources efficiently is more crucial than ever. Our cutting-edge HRMS (Human Resource Management System) Software is designed to simplify and automate your HR processes, allowing your team to focus on what truly matters – driving your business forward. Empower your HR department with our comprehensive, easy-to-use HRMS solution.",
    heading2: "The Importance of HRMS",
    detail:
      "HRMS is crucial for modern businesses, acting as a central hub for managing all HR activities. It simplifies many day-to-day tasks, such as hiring, payroll, and tracking employee performance, allowing HR teams to focus more on strategic growth rather than routine tasks. Additionally, it offers powerful insights through data analysis, helping businesses make smarter decisions. In short, an HRMS streamlines operations, boosts efficiency, and supports a more engaged and productive workplace.",
    working:
      "Choosing the right HR software for your business involves a careful evaluation of your organization’s specific needs and goals. Start by assessing the key HR processes that require optimization, such as recruitment, payroll, performance management, or employee engagement. Look for software that not only addresses these needs but also offers scalability to grow with your business. Consider the software’s user-friendliness, as it should be accessible to all employees, not just HR professionals. Integration capabilities with your existing systems and compliance with regulatory standards are also crucial. Additionally, evaluate the vendor’s customer support and the software’s security features to protect sensitive data.",
  },

  {
    id: 2,
    productName: "Affiliate Marketing Software",
    image: am,
    key_features:
      "In today’s digital era, affiliate marketing stands out as an effective strategy to boost sales and enhance online visibility. Our Affiliate Marketing Software is here to transform how you manage your affiliate programs. Tailored for excellence, our software simplifies affiliate marketing processes, allowing you to focus on what truly matters – growing your business.",

    heading2: "The complete solution to grow your business online.",
    detail:
      "Our all-encompassing online growth solution offers a powerful blend of tools and services designed to elevate your business to new heights. With our state-of-the-art affiliate marketing software at its core, we provide seamless affiliate management, robust analytics, and marketing optimization to drive your sales and expand your reach.",
    working:
      "Our Affiliate Marketing Software is specifically designed to help entrepreneurs expand their online business by leveraging the power of affiliate marketing. By providing a comprehensive, easy-to-use platform, our software simplifies the complexities of managing affiliate programs, enabling you to focus on growth and innovation. With features such as automated affiliate management, real-time tracking and analytics, and customizable commission structures, our software ensures that you can efficiently recruit, manage, and reward affiliates who contribute to your business success.",
  },
  {
    id: 3,
    productName: "Project Management Software",
    image: pm,
    key_features:
      "In the fast-paced business world, managing projects efficiently is crucial for success. Our Project Management Software is designed to empower teams, streamline workflows, and ensure project success from inception to completion.",

    heading2: "Why do you need project management software?.",
    detail:
      "Project management software has become an indispensable tool for organizations looking to more efficiently operate and enhance productivity. The complexity and dynamic nature of modern projects demands a solution that can efficiently manage tasks, deadlines, resources, and communication in a centralized platform. Project management software facilitates precise planning, tracking, and execution of projects, ensuring that teams can collaborate effectively regardless of their location. It provides real-time visibility into project progress, helping managers make informed decisions and adjust strategies promptly to avoid delays and stay within budget.",
    working:
      "Choosing the right project management software is a pivotal decision that can significantly influence your team’s efficiency and project outcomes. Start by assessing your project needs and the specific challenges you aim to address with the software. Consider factors such as ease of use, customization options, and the ability to scale as your team or projects grow. Look for software that offers comprehensive features like task assignment, collaboration tools, time tracking, and real-time analytics, ensuring it supports both your current and future project management requirements. Integration capabilities are also crucial, as the software should seamlessly blend with your existing tools and workflows.",
  },
  {
    id: 4,
    productName: "Brand Management",
    image: bm,
    key_features:
      "In the  digital era , standing out is no longer just an option—it’s a necessity. Our innovative Brand Management Software is crafted to empower your business with a suite of powerful tools, designed to not only establish and maintain your brand’s presence but to take it to unprecedented heights. This solution is your key to unlocking a new realm of branding efficiency, where your message is not just seen but remembered, and your visual identity not just recognized but revered. ",

    heading2: "Benefits of Our Brand Management System.",
    detail:
      "The benefits of our Brand Management System extend far beyond simple brand consistency. This powerful solution is designed to transform how your business approaches branding, offering significant advantages that contribute to both short-term success and long-term brand equity. Firstly, it amplifies your brand’s visibility, ensuring that your message reaches a wider audience in a more impactful way. By maintaining a consistent brand image and voice across all platforms, it significantly enhances brand recognition, fostering a deeper connection with your audience. This, in turn, leads to increased brand loyalty as customers become more attached to your brand’s identity. Additionally, our system streamlines branding processes, reducing the time and resources required to manage your brand’s presence. This efficiency not only cuts costs but also allows your team to focus on innovation and strategy, rather than getting bogged down in administrative tasks. Ultimately, our Brand Management System empowers your business with the tools it needs to navigate the complex landscape of digital branding, turning challenges into opportunities for growth and differentiation.",
    working:
      "Our Brand Management System simplifies and streamlines the process of managing your brand’s identity and presence. It centralizes brand assets in a secure, accessible location, ensuring consistency across all communication channels. With intuitive analytics, it offers insights into brand performance, helping to fine-tune strategies for better engagement. Additionally, its collaborative features enable efficient teamwork and faster content approvals. Essentially, it acts as a command center for your brand, aligning strategies and optimizing operations with ease, ensuring your brand’s message is consistently impactful.",
  },
  {
    id: 5,
    productName: "Event Booking Software",
    image: eb,
    key_features:
      "Discover the ultimate solution for seamless event organization with our Event Booking Software. Designed to simplify and automate the booking process, our software is the perfect tool for event planners, venues, and businesses looking to streamline their event management tasks. With an intuitive interface and powerful features, organizing events has never been easier or more efficient.",

    heading2: "Benefits of Our Event Booking Software.",
    detail:
      "Our Event Booking Software offers a multitude of benefits designed to simplify and enhance the event management process. By automating key tasks such as bookings, confirmations, and payments, it significantly reduces the administrative burden on organizers, allowing them to focus on creating memorable experiences. The software’s real-time availability and integrated payment system streamline the booking process, improving efficiency and minimizing the risk of overbooking. Additionally, customizable event pages and automated reminders elevate the attendee experience, boosting satisfaction and engagement. With detailed analytics and reporting capabilities, organizers gain valuable insights into event performance, enabling data-driven decision-making.",
    working:
      "Our Event Booking Software operates through a streamlined, user-friendly process designed to make event management as efficient as possible. Initially, organizers set up their event in the system by inputting crucial details such as dates, locations, pricing, and capacity. They can then customize their event pages with descriptions, images, and other key information to attract attendees. Once the event is live, attendees can easily browse and book their spots online at any time, from any device. The software automatically updates availability in real time to prevent overbooking and manages all aspects of the booking process, including secure payment processing. Automated confirmations and reminders are sent to attendees to ensure high engagement and attendance. After the event, organizers can access detailed analytics and reports through the software, providing insights into attendance, revenue, and overall event performance, facilitating continuous improvement and planning for future events. This end-to-end solution simplifies event management, from planning and booking to analysis and optimization.",
  },
];

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
      <h1 className="text-center text-emerald-500 text-lg sm:text-xl font-semibold mb-4">
        PRODUCTS
      </h1>
      {/* card */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productDetails.map((product, index) => (
          <div key={index} className="bg-emerald-100 shadow-md rounded-lg p-4">
            <h1 className="text-emerald-500 text-lg sm:text-xl text-center font-semibold">
              {product.productName}
            </h1>
            <p className="text-justify line-clamp-4">{product.key_features}</p>
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white rounded-full py-2 px-6 mt-4 text-sm sm:text-base flex items-center"
              onClick={() =>
                navigate(`/product/${product.id}`, { state: product })
              }
            >
              More Details{" "}
              <FontAwesomeIcon
                className="ml-1 text-emerald-500 px-2 py-1 bg-white rounded-full"
                icon={faChevronRight}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
