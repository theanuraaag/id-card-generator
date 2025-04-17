import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload Your Template",
      description: "Choose your ID card design template or upload your own image."
    },
    {
      title: "Fill in Details",
      description: "Enter name, branch, ID number, expiry date, and more using dynamic fields."
    },
    {
      title: "Generate & Download",
      description: "Preview your ID card and download it as high-quality PNG or PDF."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
