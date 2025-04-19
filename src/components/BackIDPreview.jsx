import React from 'react';
import { QRCodeSVG } from "qrcode.react";
import TermsSection from './BackIDPreview/TermsSection';
import DatesSection from './BackIDPreview/DatesSection';
import ContactIcons from './BackIDPreview/ContactIcons';

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

  const formatText = (text, maxLength = 25) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const templateConfigs = {
    1: {
      termsTitle: { top: '25%', left: '10%', width: '80%' },
      termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '60%', left: '17%', width: '80%' },
      expiryDate: { top: '64%', left: '17%', width: '80%' },
      backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
      backCompanyName: { top: '13%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-black',
        termsContent: 'text-black',
        dates: 'text-black'
      },
    },
    2: {
      termsTitle: { top: '35%', left: '10%', width: '80%' },
      termsContent: { top: '43%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '74%', left: '30%', width: '80%' },
      expiryDate: { top: '78%', left: '30%', width: '80%' },
      backLogo: { top: '10%', left: '10%', width: '80%', height: '15%' },
      backCompanyName: { top: '25%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-black',
        termsContent: 'text-black',
        dates: 'text-black'
      },
    },
    3: {
      termsTitle: { top: '6%', left: '10%', width: '80%' },
      termsContent: { top: '15%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '49%', left: '28%', width: '80%' },
      expiryDate: { top: '54%', left: '28%', width: '80%' },
      backLogo: { top: '70%', left: '10%', width: '80%', height: '15%' },
      backCompanyName: { top: '88%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-black',
        termsContent: 'text-black',
        dates: 'text-black'
      },
    },
    4: {
      termsTitle: { top: '17%', left: '10%', width: '80%' },
      termsContent: { top: '25%', left: '15%', width: '60%', height: '30%' },
      joinDate: { top: '61%', left: '29%', width: '80%' },
      expiryDate: { top: '66%', left: '29%', width: '80%' },
      backLogo: { top: '5%', left: '1%', width: '60%', height: '10%' },
      backCompanyName: { top: '7%', left: '15%', width: '80%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-black',
        termsContent: 'text-black',
        dates: 'text-black'
      },
    },
    5: {
      termsTitle: { top: '25%', left: '10%', width: '80%' },
      termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '66%', left: '17%', width: '80%' },
      expiryDate: { top: '71%', left: '17%', width: '80%' },
      backLogo: { top: '15%', left: '0%', width: '50%', height: '10%' },
      backCompanyName: { top: '16%', left: '18%', width: '80%' },
      employeeAddress: { top: '58%', left: '30%', width: '68%' },
      icons: {
        phone: { bottom: '55%', left: '15%', size: 20 },
        email: { bottom: '46%', left: '15%', size: 20 },
        location: { bottom: '35%', left: '15%', size: 20 }
      },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-black',
        termsContent: 'text-black',
        dates: 'text-black',
        icons: 'text-[#edc74f]',
        employeeAddress: 'text-white'
      },
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