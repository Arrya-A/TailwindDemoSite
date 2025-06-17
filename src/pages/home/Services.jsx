import { faUikit } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faCircleCheck,
  faCloud,
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const services = [
  {
    icon: faCode,
    title: "Web Development",
    description:
      "We create stunning, responsive websites tailored to your brand. From simple landing pages to full-scale web apps, our development team ensures a smooth, fast, and secure digital experience.",
  },
  {
    icon: faUikit,
    title: " UI/UX Analysis",
    description:
      "Our designers craft intuitive, user-centric interfaces that enhance usability and engagement. We focus on clean design, smooth navigation, and delightful user journeys.",
  },
  {
    icon: faMobileScreenButton,
    title: "Mobile App Development",
    description:
      "Reach your audience on the go with custom iOS and Android apps. We build scalable, high-performance mobile solutions using the latest technologies.",
  },
  {
    icon: faCircleCheck,
    title: "Digital Marketing",
    description:
      "Amplify your brand’s online presence with SEO, social media marketing, and paid ad campaigns. We develop strategies that drive traffic, increase conversions, and grow your business.",
  },
  {
    icon: faAt,
    title: "E-Commerce Solutions",
    description:
      "Whether you’re launching a new store or scaling an existing one, we deliver seamless e-commerce experiences that convert visitors into loyal customers.",
  },
  {
    icon: faCloud,
    title: "Cloud & DevOps",
    description:
      "Our team offers scalable cloud infrastructure, CI/CD setup, and automation support to ensure your applications run smoothly and securely.",
  },
];

const Services = () => {
  return (
    <>
      <div className="pt-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-emerald-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl text-emerald-500 mb-2">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h2 className="text-lg font-semibold my-1">{service.title}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
