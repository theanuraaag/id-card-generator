import React from "react";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Preview />
      <Footer />
    </div>
  );
};

export default LandingPage;
