import React from 'react';
import { QRCodeSVG } from "qrcode.react";
import TermsSection from './BackIDPreview/TermsSection';
import DatesSection from './BackIDPreview/DatesSection';
import ContactIcons from './BackIDPreview/ContactIcons';
import { formatText } from '../utils/formatting';
import { templateConfigs } from '../config/templateConfigs';
const BackIDPreview = ({ templateId, data }) => {
  const getTemplateBackground = () => {
    switch (templateId) {
      case 1: return 'url(/templates/classic-id-back.png)';
      case 2: return 'url(/templates/corporate-id-back.png)';
      case 3: return 'url(/templates/student-id-back.png)';
      case 4: return 'url(/templates/modern-id-back.png)';
      case 5: return 'url(/templates/professional-id-back.png)';
      default: return 'url(/templates/classic-id-back.png)';
    }
  };

  
  const config = templateConfigs[templateId] || templateConfigs[1];

  const generateQRData = () => {
    const qrText = `Name: ${data.fullName}
ID: ${data.employeeId}
Designation: ${data.designation}
${templateId !== 2 ? `Department: ${data.department}\n` : ''}Company: ${data.companyName}
Email: ${data.email}
Phone: ${data.phone}
Join Date: ${data.joinDate}
Expiry Date: ${data.expiryDate}`;
    return qrText;
  };

  return (
    <div className="flex justify-center">
      <div
        className="w-64 h-110 bg-white rounded-xl shadow-lg overflow-hidden relative"
        style={{
          backgroundImage: getTemplateBackground(),
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          width: '256px'
        }}
      >
        {/* Company Info at Top */}
        {data.companyLogo && (
          <div
            style={{
              position: 'absolute',
              top: config.backLogo.top,
              left: config.backLogo.left,
              width: config.backLogo.width,
              height: config.backLogo.height,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={data.companyLogo}
              alt="Company Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
        )}
        {data.companyName && (
          <div
            style={{
              position: 'absolute',
              top: config.backCompanyName.top,
              left: config.backCompanyName.left,
              width: config.backCompanyName.width,
              textAlign: 'center',
              zIndex: 10
            }}
          >
            <div className={`text-[16px] font-bold ${config.textColor.companyNameBack}`}>
              {formatText(data.companyName, 25)}
            </div>
          </div>
        )}

        <TermsSection config={config} templateId={templateId} />
        <DatesSection config={config} data={data} />
        <ContactIcons config={config} data={data} templateId={templateId} />

        {/* QR Code - Only for template 1 */}
        {Number(templateId) === 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: config.qrCode.bottom,
              right: config.qrCode.right,
              width: config.qrCode.width,
              height: config.qrCode.height,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <QRCodeSVG
              value={generateQRData()}
              size={120}
              level="M"
              includeMargin={true}
              className="w-full h-full"
              bgColor="transparent"
              fgColor="black"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackIDPreview; 