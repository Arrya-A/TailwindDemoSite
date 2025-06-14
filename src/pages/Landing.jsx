import React from "react";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

const Landing = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Landing;
