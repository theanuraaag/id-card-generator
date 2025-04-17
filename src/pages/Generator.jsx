import React, { useState, useRef } from "react";
import Form from "../components/Form";
import CardPreview from "../components/CardPreview";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Template data
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

// Dummy data for template previews
const dummyData = {
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  fullName: "John Doe",
  designation: "Software Engineer",
  employeeId: "EMP12345",
  department: "Engineering",
  phone: "+1 234 567 8900",
  email: "john.doe@company.com",
  companyName: "TechCorp Inc.",
  companyAddress: " Silicon Valley",
  companyLogo: "https://randomuser.me/api/portraits/men/32.jpg",
  joinDate: "2023-01-15",
  expiryDate: "2025-01-15"
};

const Generator = () => {
  const [formData, setFormData] = useState({
    photo: null,
    dynamicFields: [],
  });

  const [showCard, setShowCard] = useState(false);
  const [showTemplateSelection, setShowTemplateSelection] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const cardRef = useRef(null);
  const [designImage, setDesignImage] = useState(null);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setShowTemplateSelection(false);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowCard(true);
  };

  const handleEdit = () => {
    setShowCard(false);
  };

  const handleBackToTemplates = () => {
    setShowTemplateSelection(true);
    setSelectedTemplate(null);
  };

  const handleDownload = async () => {
    try {
      const canvas = await html2canvas(cardRef.current, {
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "id-card.png";
      link.click();
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  const handleDownloadPDF = async () => {
    const frontCard = document.getElementById("id-card-front");
    const backCard = document.getElementById("id-card-back");
    
    if (!frontCard || !backCard) return;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4"
    });

    // Convert pixels to millimeters (1 inch = 25.4 mm, 1 inch = 96 pixels)
    const mmPerPixel = 25.4 / 96;
    
    // Get the actual dimensions of the cards
    const cardWidth = frontCard.offsetWidth * mmPerPixel;
    const cardHeight = frontCard.offsetHeight * mmPerPixel;
    
    // Calculate scaling to fit on A4 page (297mm x 210mm)
    const scale = Math.min(
      (297 - 20) / cardWidth,  // Leave 10mm margin on each side
      (210 - 20) / cardHeight  // Leave 10mm margin on top and bottom
    );
    
    // Calculate final dimensions after scaling
    const finalWidth = cardWidth * scale;
    const finalHeight = cardHeight * scale;
    
    // Calculate center position
    const x = (297 - finalWidth) / 2;
    const y = (210 - finalHeight) / 2;

    // Add front card
    const frontImage = await html2canvas(frontCard, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: null
    });
    
    pdf.addImage(
      frontImage.toDataURL("image/png"),
      "PNG",
      x,
      y,
      finalWidth,
      finalHeight
    );

    // Add back card on new page
    pdf.addPage();
    const backImage = await html2canvas(backCard, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: null
    });
    
    pdf.addImage(
      backImage.toDataURL("image/png"),
      "PNG",
      x,
      y,
      finalWidth,
      finalHeight
    );

    pdf.save("id-card.pdf");
  };

  return (
    <div className="App bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-200">
        <h1 className="text-center text-3xl font-bold mb-8">✨ Generate Your ID Card ✨</h1>

        {showTemplateSelection && (
          <div className="max-w-[80%] mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Select an ID Card Template</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <div className="p-4 border-b bg-white bg-opacity-50">
                    <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                  <div className="p-4">
                    <CardPreview 
                      data={template.id === 1 ? dummyData : {}} 
                      templateId={template.id} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!showTemplateSelection && !showCard && (
          <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Fill in Your Information</h2>
              <button
                onClick={handleBackToTemplates}
                className="text-blue-600 hover:text-blue-800"
              >
                ← Back to Templates
              </button>
            </div>
            <Form
              onSubmit={handleFormSubmit}
              existingData={formData}
              setDesignImage={setDesignImage}
              templateId={selectedTemplate}
            />
          </div>
        )}

        {showCard && (
          <div className="flex flex-col items-center mt-8">
            {/* Card Preview Section */}
            <div ref={cardRef} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <CardPreview data={formData} designImage={designImage} templateId={selectedTemplate} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-6 print:hidden">
              <button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
              >
                📷 Download as Image
              </button>
              <button
                onClick={handleDownloadPDF}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
              >
                📄 Download as PDF
              </button>
              <button
                onClick={handleEdit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
              >
                ✏️ Edit Information
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Generator;
