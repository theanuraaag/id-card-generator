import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeSVG from 'qrcode.react';

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
};

const templates = [
  {
    id: 1,
    name: 'Classic ID Card',
    description: 'A professional ID card with a clean, modern design'
  },
  {
    id: 2,
    name: 'Corporate ID Card',
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

  useEffect(() => {
    console.log('TemplateSelector component rendered');
  }, []);

  const handleTemplateSelect = (templateId) => {
    navigate(`/fill-data/${templateId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your ID Card Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {templates.map((template) => (
          <div
            key={template.id}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleTemplateSelect(template.id)}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <h3 className="text-xl font-semibold text-white">{template.name}</h3>
              <p className="text-white/80 text-sm mt-1">{template.description}</p>
            </div>

            {/* Card Preview */}
            <div className="p-6 flex justify-center items-center bg-gray-50">
              {template.id === 1 ? (
                <div
                  className="w-56 h-110 bg-white rounded-xl shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url(/templates/classic-id.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="flex flex-col h-full relative">
                    {/* Company Logo */}
                    <div className="absolute top-2 left-0 w-full">
                      <div className="flex justify-center">
                        <img 
                          src={dummyData.companyLogo} 
                          alt="Company Logo" 
                          className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                        />
                      </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="relative mt-16 flex justify-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={dummyData.photo}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Personal Info */}
                    <div className="text-center mt-4 px-4">
                      <h2 className="text-xl font-bold text-gray-800">{dummyData.fullName}</h2>
                      <p className="text-gray-600 font-medium mt-1">{dummyData.designation}</p>
                      <p className="text-sm text-gray-500 mt-1">ID: {dummyData.employeeId}</p>
                      <p className="text-sm text-gray-500">Dept: {dummyData.department}</p>
                      <div className="mt-4 text-sm text-gray-500">
                        <p>Phone: {dummyData.phone}</p>
                        <p>Email: {dummyData.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : template.id === 2 ? (
                <div
                  className="w-56 h-110 bg-white rounded-xl shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: 'url(/templates/corporate-id.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Orange Bar */}
                  <div className="absolute top-1/2 left-0 w-full">
                    <div className="h-8 bg-orange-500"></div>
                  </div>

                  {/* QR Code */}
                  <div className="absolute bottom-8 left-0 w-full flex justify-center">
                    <QRCodeSVG
                      value="Sample QR Code"
                      size={80}
                      level="M"
                      includeMargin={true}
                      className="bg-white p-2 rounded"
                    />
                  </div>
                </div>
              ) : (
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-56 h-110 object-cover rounded-xl shadow-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector; 