import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import QRCodeSVG from 'qrcode.react';

const IDCardPreview = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [cardData, setCardData] = useState(null);

  const getTemplateBackground = (isBack = false) => {
    if (isBack) {
      switch (templateId) {
        case '1': return 'url(/templates/classic-id-back.png)';
        case '2': return 'url(/templates/corporate-id-back.png)';
        case '3': return 'url(/templates/student-id-back.png)';
        case '4': return 'url(/templates/classic-id-back.png)'; // temporarily using classic template
        case '5': return 'url(/templates/classic-id-back.png)'; // temporarily using classic template
        default: return 'url(/templates/classic-id-back.png)';
      }
    }

    switch (templateId) {
      case '1': return 'url(/templates/classic-id.png)';
      case '2': return 'url(/templates/corporate-id.png)';
      case '3': return 'url(/templates/student-id.png)';
      case '4': return 'url(/templates/classic-id.png)'; // temporarily using classic template
      case '5': return 'url(/templates/classic-id.png)'; // temporarily using classic template
      default: return 'url(/templates/classic-id.png)';
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('idCardData');
    if (savedData) {
      setCardData(JSON.parse(savedData));
    } else {
      setCardData({
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
      });
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

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          {/* Front Side */}
          <div
            ref={cardRef}
            className="w-56 h-110 bg-white rounded-xl shadow-lg overflow-hidden"
            style={{
              backgroundImage: getTemplateBackground(),
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col h-full ">
              {/* Company Logo */}
              <div className="absolute top-2 left-0 w-full ">
                {cardData.companyLogo && (
                  <div className="flex justify-center">
                    <img
                      src={cardData.companyLogo}
                      alt="Company Logo"
                      className="h-12 w-12 rounded-full object-cover border-2 border-gray-200 "
                    />
                  </div>
                )}
              </div>

              {/* Profile Photo */}
              <div className="relative mt-16 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {cardData.photo && (
                    <img
                      src={cardData.photo}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Personal Info */}
              <div className="text-center mt-4 px-4">
                <h2 className="text-xl font-bold text-gray-800">{cardData.fullName}</h2>
                <p className="text-gray-600 font-medium mt-1">{cardData.designation}</p>
                <p className="text-sm text-gray-500 mt-1">ID: {cardData.employeeId}</p>
                {templateId !== '2' && (
                  <p className="text-sm text-gray-500">{cardData.department}</p>
                )}

                <div className="mt-4 text-sm text-gray-500">
                  <p>{cardData.email}</p>
                  <p>{cardData.phone}</p>
                </div>
              </div>

              {/* Front Side QR Code - For templates 2 and 3 */}
              {(templateId === '2' || templateId === '3') && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '10%',
                    width: '25%',
                    height: '25%',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: templateId === '3' ? 'white' : 'transparent',
                    padding: templateId === '3' ? '8px' : '0',
                    borderRadius: templateId === '3' ? '8px' : '0'
                  }}
                >
                  <QRCodeSVG
                    value={`Name: ${cardData.fullName}
ID: ${cardData.employeeId}
Designation: ${cardData.designation}
${templateId !== '2' ? `Department: ${cardData.department}\n` : ''}Company: ${cardData.companyName}
Email: ${cardData.email}
Phone: ${cardData.phone}
Join Date: ${cardData.joinDate}
Expiry Date: ${cardData.expiryDate}`}
                    size={80}
                    level="M"
                    includeMargin={true}
                    className="w-full h-full"
                    bgColor={templateId === '3' ? 'white' : 'transparent'}
                    fgColor="black"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Back Side */}
          <div
            className="w-56 h-110 bg-white rounded-xl shadow-lg overflow-hidden"
            style={{
              backgroundImage: getTemplateBackground(true),
              backgroundSize: 'cover',
              backgroundPosition: 'right center'
            }}
          >
            <div className="p-2">
              {/* Terms and Conditions */}
              <div className="text-center mt-4">
                <h3 className="font-bold text-sm mb-2">TERMS & CONDITIONS</h3>
                <div className="text-xs font-semibold space-y-2 text-left px-4">
                  <div className="flex gap-2">
                    <span>1.</span>
                    <p>Identification: Carry the ID card at all times during working hours for identification purposes.</p>
                  </div>
                  <div className="flex gap-2">
                    <span>2.</span>
                    <p>Authorized Use: The ID card is strictly for official use and should not be shared or used for unauthorized purposes.</p>
                  </div>
                </div>
              </div>

              {/* Back Side QR Code - Only for template 1 */}
              {templateId === '1' && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '2%',
                    right: '35%',
                    width: '35%',
                    height: '35%',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: templateId === '5' ? 'white' : 'transparent',
                    padding: templateId === '5' ? '8px' : '0',
                    borderRadius: templateId === '5' ? '8px' : '0'
                  }}
                >
                  <QRCodeSVG
                    value={`Name: ${cardData.fullName}
ID: ${cardData.employeeId}
Designation: ${cardData.designation}
Department: ${cardData.department}
Company: ${cardData.companyName}
Email: ${cardData.email}
Phone: ${cardData.phone}
Join Date: ${cardData.joinDate}
Expiry Date: ${cardData.expiryDate}`}
                    size={120}
                    level="M"
                    includeMargin={true}
                    className="w-full h-full"
                    bgColor={templateId === '5' ? 'white' : 'transparent'}
                    fgColor="black"
                  />
                </div>
              )}

              {/* Dates at Bottom */}
              <div className="mt-6 ml-10 text-xs font-semibold">
                <div className="flex flex-col justify-between">
                  <span>Join Date: {cardData.joinDate}</span>
                  <span>Expiry Date: {cardData.expiryDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default IDCardPreview; 