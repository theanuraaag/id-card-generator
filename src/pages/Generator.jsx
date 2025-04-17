import React, { useState, useRef } from "react";
import Form from "../components/Form";
import CardPreview from "../components/CardPreview";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Generator = () => {
  const [formData, setFormData] = useState({
    photo: null,
    dynamicFields: [],
  });

  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);
  const [designImage, setDesignImage] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowCard(true);
  };

  const handleEdit = () => {
    setShowCard(false);
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
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    try {
      const frontCard = document.getElementById("id-card-front");
      const backCard = document.getElementById("id-card-back");

      const frontCanvas = await html2canvas(frontCard, {
        useCORS: true,
        backgroundColor: "#ffffff",
        scale: 2,
      });
      const frontImgData = frontCanvas.toDataURL("image/png");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const frontHeight = (frontCanvas.height * pageWidth) / frontCanvas.width;
      pdf.addImage(frontImgData, "PNG", 0, 0, pageWidth, frontHeight);

      pdf.addPage();

      const backCanvas = await html2canvas(backCard, {
        useCORS: true,
        backgroundColor: "#ffffff",
        scale: 2,
      });
      const backImgData = backCanvas.toDataURL("image/png");
      const backHeight = (backCanvas.height * pageWidth) / backCanvas.width;
      pdf.addImage(backImgData, "PNG", 0, 0, pageWidth, backHeight);

      pdf.save("id-card.pdf");
    } catch (error) {
      console.error("PDF Download Error:", error);
    }
  };

  return (
    <div className="App bg-white text-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-200">
        <h1 className="text-center text-3xl font-bold mb-8">✨ Generate Your ID Card ✨</h1>

        {!showCard && (
          <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg">
            <Form
              onSubmit={handleFormSubmit}
              existingData={formData}
              setDesignImage={setDesignImage}
            />
          </div>
        )}

        {showCard && (
          <div className="flex flex-col items-center mt-8">
            {/* Card Preview Section */}
            <div ref={cardRef} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <CardPreview data={formData} designImage={designImage} />
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
