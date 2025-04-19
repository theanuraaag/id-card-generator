import React from "react";
import CardPreview from "./CardPreview";
import { Link } from "react-router-dom";

// Dummy data for preview
const dummyData = {
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  fullName: "John Doe",
  designation: "Software Engineer",
  employeeId: "EMP12345",
  department: "Engineering",
  phone: "+1 234 567 8900",
  email: "john.doe@company.com",
  companyName: "TechCorp Inc.",
  companyAddress: "Silicon Valley",
  companyLogo: "https://randomuser.me/api/portraits/men/32.jpg",
  joinDate: "2023-01-15",
  expiryDate: "2025-01-15"
};

const Preview = () => {
  return (
    <section id="preview" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">Preview</h2>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <CardPreview 
                data={dummyData} 
                templateId={1}
                showBackSide={true}
              />
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6">
            *Preview of our Classic ID Card template with sample data
          </p>

          <Link 
            to="/generate" 
            className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Preview;
