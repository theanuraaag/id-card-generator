import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const IDCardPreview = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [cardData, setCardData] = useState(null);

  const getTemplateBackground = () => {
    switch (templateId) {
      case '1': return 'url(/templates/classic-id.png)';
      case '2': return 'url(/templates/corporate-id.png)';
      case '3': return 'url(/templates/student-id.png)';
      default: return '#f8f8f8';
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('idCardData');
    if (savedData) {
      setCardData(JSON.parse(savedData));
    }
  }, []);

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          scale: 2,
          useCORS: true,
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('id-card.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    }
  };

  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ID Card Preview</h1>
      
      <div className="max-w-2xl mx-auto">
        <div
          ref={cardRef}
          className="bg-white p-8 rounded-lg shadow-lg border"
          style={{
            width: '85.6mm',
            height: '53.98mm',
            margin: '0 auto',
            backgroundImage: getTemplateBackground()
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-32 h-40 bg-gray-100 rounded overflow-hidden">
              {cardData.photo && (
                <img
                  src={cardData.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">{cardData.fullName}</h2>
              <p className="text-gray-600 mb-1">{cardData.designation}</p>
              <p className="text-sm text-gray-500 mb-1">ID: {cardData.employeeId}</p>
              <p className="text-sm text-gray-500 mb-1">{cardData.department}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{cardData.email}</p>
                <p className="text-sm text-gray-500">{cardData.phone}</p>
                <p className="text-sm text-gray-500">{cardData.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDCardPreview; 