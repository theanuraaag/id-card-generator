import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page and then scroll
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide">
          <Link to="/" className="flex items-center gap-2">
            <span>🪪</span> {/* Icon emoji for ID Card */}
            ID Card Generator
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-base font-medium">
          <button 
            onClick={() => scrollToSection('features')} 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('preview')} 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Preview
          </button>
          <Link to="/generate">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md">
              Get Started
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className={`flex flex-col py-4 px-6 space-y-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('preview')} 
            className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Preview
          </button>
          <Link to="/generate" className="block">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300 shadow-md">
              Get Started
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
