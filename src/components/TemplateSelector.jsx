import React from 'react';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 1,
    name: 'Classic ID Card',
    thumbnail: '/templates/classic-id.png',
    description: 'A professional ID card with a clean, modern design'
  },
  {
    id: 2,
    name: 'Corporate ID Card',
    thumbnail: '/templates/corporate-id.png',
    description: 'Perfect for corporate employees with a sophisticated look'
  },
  {
    id: 3,
    name: 'Student ID Card',
    thumbnail: '/templates/student-id.png',
    description: 'Ideal for educational institutions'
  }
];

const TemplateSelector = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    navigate(`/fill-data/${templateId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Select an ID Card Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleTemplateSelect(template.id)}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector; 