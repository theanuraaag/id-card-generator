import React, { useState, useRef} from "react";
import Form from "./components/Form";
import CardPreview from "./components/CardPreview";

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    dob: "",
    bloodGroup: "",
    phone: "",
    email: "",
    joinDate: "",
    expiryDate: "",
    address: "",
    idNo: "",
    designation: "",
  });
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

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
    <div className="App bg-white text-black min-h-screen">
      <h1 className="text-center text-2xl font-bold my-4">ID Card Generator</h1>

      {!showCard && <Form onSubmit={handleFormSubmit} existingData={formData} />}

      {showCard && (
        <>
          {/* Card Preview Section */}
          <div ref={cardRef}>
            <CardPreview data={formData} />
          </div>



          {/* Action Buttons */}
          <div className="text-center mt-4 print:hidden">
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download as Image
            </button>
            <button
              onClick={handleDownloadPDF}
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Download as PDF
            </button>
            
            <button
              onClick={handleEdit}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
