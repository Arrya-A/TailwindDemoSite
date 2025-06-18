import { motion } from "framer-motion";

const heading = "Crafting Digital Experiences for You";

const letterVariants = {
  initial: { y: -50, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  }),
};

const Heading = () => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-wrap mb-3">
      {heading.split(" ").map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};

export default Heading;
