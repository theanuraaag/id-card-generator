import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide">
        <Link to="/" className="flex items-center gap-2">
          <span>🪪</span> {/* Icon emoji for ID Card */}
          ID Card Generator
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6 text-gray-700 text-base font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
          Features
        </Link>
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
          How it Works
        </Link>
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
          Preview
        </Link>
        <Link to="/generate">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md">
            Get Started
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
