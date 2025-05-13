import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-12 bg-white relative overflow-hidden">
      
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Create Custom ID Cards <br className="hidden md:block" /> in Minutes
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Upload your own ID card template, add dynamic fields, and download your professional ID card instantly. Perfect for businesses, events, and organizations.
        </p>
        <Link to="/generate">
          <Button title={"🚀 Get Started Now"}/>
        </Link>
      </div>

      {/* Right Image + Background Shape */}
      <div className="md:w-1/2 flex justify-center items-center relative z-10">
        
        {/* Abstract background behind the image */}
        <div className="absolute w-[300px] h-[300px] bg-blue-200 rounded-[60%] blur-3xl opacity-50 -z-10"></div>
        
        <img
          src="/heroImg.png"
          alt="ID Card Illustration"
          className="w-80 md:w-96 drop-shadow-xl relative z-10"
        />
      </div>
    </main>
  );
};

export default Hero;
