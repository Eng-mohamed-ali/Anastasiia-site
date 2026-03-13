import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyMe from "../components/sections/WhyMe";
import Episodes from "../components/sections/Episodes";
import Publications from "../components/sections/Publications";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Episodes />
      <Publications />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default HomePage;