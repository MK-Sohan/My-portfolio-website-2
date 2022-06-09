import React from "react";
import About from "../About";
import Brands from "../Brands";
import Contact from "../Contact";
import Hero from "../Hero";
import Portfolio from "../Portfolio";
import Services from "../Services";
import Skills from "../Skills";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Brands /> */}
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
