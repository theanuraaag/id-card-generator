import React from "react";
import PreviewImg1 from "/1.png"
import PreviewImg2 from "/2.png"

const Preview = () => {
  return (
    <section id="preview" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">Preview</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src={PreviewImg1}
            alt="ID Card Preview 1"
            className="w-56 h-96 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
          <img
            src={PreviewImg2}
            alt="ID Card Preview 2"
            className="w-56 h-96 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
          />
        </div>

        <p className="text-center text-gray-600 mt-6">
          *Actual ID card generated from your own uploaded design & data
        </p>
      </div>
    </section>
  );
};

export default Preview;
