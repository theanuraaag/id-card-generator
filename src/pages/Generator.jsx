import React, { useState, useRef, useEffect } from "react";
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
  },
  {
    id: 4,
    name: 'Modern ID Card',
    thumbnail: '/templates/classic-id.png', // temporarily using classic template
    description: 'A sleek and modern design for contemporary organizations'
  },
  {
    id: 5,
    name: 'Professional ID Card',
    thumbnail: '/templates/classic-id.png', // temporarily using classic template
    description: 'An elegant design suitable for all professional settings'
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
  expiryDate: "2025-01-15",
  employeeAddress: "123 Main St, Anytown, USA"
};

const Generator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [formData, setFormData] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showTemplateSelection, setShowTemplateSelection] = useState(true);
  const [showTemplatePopup, setShowTemplatePopup] = useState(false);
  const [tempSelectedTemplate, setTempSelectedTemplate] = useState(null);
  const cardRef = useRef(null);

  // Log state changes
  useEffect(() => {
    console.log("Generator State Updated:", {
      showTemplateSelection,
      showCard,
      formData: formData ? 'Data present' : 'No data',
      selectedTemplate
    });
  }, [showTemplateSelection, showCard, formData, selectedTemplate]);

  const handleTemplateSelect = (templateId) => {
    setTempSelectedTemplate(templateId);
    setShowTemplatePopup(true);
  };

  const handleProceedWithTemplate = () => {
    setSelectedTemplate(tempSelectedTemplate);
    setShowTemplatePopup(false);
    setShowTemplateSelection(false);
    console.log("Proceeding with template, setting showTemplateSelection=false");
  };

  const handleClosePopup = () => {
    setShowTemplatePopup(false);
    setTempSelectedTemplate(null);
  };

  const handleFormSubmit = (data) => {
    console.log("handleFormSubmit called with data:", data);
    setFormData(data);
    setShowCard(true);
    console.log("After setting state in handleFormSubmit: showCard should be true");
  };

  const handleEdit = () => {
    console.log("handleEdit called, setting showCard=false");
    setShowCard(false);
  };

  const handleBackToTemplates = () => {
    setShowTemplateSelection(true);
    setSelectedTemplate(null);
    setFormData(null);
    setShowCard(false);
    console.log("handleBackToTemplates called");
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

  console.log("Generator Rendering with State:", { showTemplateSelection, showCard });

  return (
    <div className="App bg-white text-black min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-200">
      <Header />

      <main className="flex-1 container mx-auto p-6 ">
        <h1 className="text-center text-3xl font-bold mb-8">✨ Generate Your ID Card ✨</h1>

        {showTemplateSelection && (
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Choose Your ID Card Template</h2>
            <div className="flex flex-col gap-12">
              {/* First row - 3 templates */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
                {templates.slice(0, 3).map((template) => (
                  <div
                    key={template.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 h-[120px] flex flex-col">
                      <h3 className="text-2xl font-semibold mb-3 text-white">{template.name}</h3>
                      <p className="text-blue-100 text-base">{template.description}</p>
                    </div>
                    <div className="p-8 bg-gray-50">
                      <CardPreview 
                        data={dummyData} 
                        templateId={template.id}
                        showBackSide={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Second row - 2 templates */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                
                {templates.slice(3).map((template) => (
                  <div
                    key={template.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full  "
                    onClick={() => handleTemplateSelect(template.id)}
                  >
                    <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 h-[120px] flex flex-col ">
                      <h3 className="text-2xl font-semibold mb-3 text-white">{template.name}</h3>
                      <p className="text-blue-100 text-base">{template.description}</p>
                    </div>
                    <div className="p-8 bg-gray-50">
                      <CardPreview
                        data={dummyData} 
                        templateId={template.id}
                        showBackSide={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showTemplatePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Preview Template</h2>
                <button
                  onClick={handleClosePopup}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-center mb-6">
                <CardPreview
                  data={dummyData}
                  templateId={tempSelectedTemplate}
                  showBackSide={true}
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleProceedWithTemplate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all"
                >
                  Proceed with this Template
                </button>
              </div>
             
            </div>
          </div>
        )}

        {!showTemplateSelection && !showCard && (
          <div className="max-w-4xl mx-auto ">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 ">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Fill in Your Information</h2>
                  <button
                    onClick={handleBackToTemplates}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30  px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Templates
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className=" ">
            <Form
                    onFormSubmit={handleFormSubmit}
              existingData={formData}
                    templateId={selectedTemplate}
            />
                </div>
                
              </div>
            </div>
          </div>
        )}

        {showCard && (
          <div className="flex flex-col items-center mt-8">
            <div className="max-w-4xl w-full">
              <div ref={cardRef} className="flex flex-col md:flex-row justify-center gap-8">
                <CardPreview
                  data={formData}
                  templateId={selectedTemplate}
                  showBackSide={true}
                />
            </div>

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
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Generator;
