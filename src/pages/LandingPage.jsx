import React from "react";
import { Link } from "react-router-dom";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Header */}
      {/* <header className="py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          ID Card Generator
        </h1>
      </header> */}
      <Header/>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-12">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Create Custom ID Cards <br className="hidden md:block" /> in Minutes
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Upload your own ID card template, add dynamic fields, and download your professional ID card instantly. Perfect for businesses, events, and organizations.
          </p>
          <Link to="/generate">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300">
              🚀 Get Started Now
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972552.png"
            alt="ID Card Illustration"
            className="w-80 md:w-96 drop-shadow-xl"
          />
        </div>
      </main>

      <Features/>
      <HowItWorks/>
      <Preview/>
      

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default LandingPage;
