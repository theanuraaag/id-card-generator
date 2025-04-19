import React from 'react';
import { QRCodeSVG } from "qrcode.react";

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
    1: { // Classic ID
      termsTitle: { top: '25%', left: '10%', width: '80%' },
      termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '60%', left: '17%', width: '80%' },
      expiryDate: { top: '64%', left: '17%', width: '80%' },
      backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
      backCompanyName: { top: '13%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-white',
        termsContent: 'text-white',
        dates: 'text-white'
      },
    },
    2: { // Corporate ID
      termsTitle: { top: '35%', left: '10%', width: '80%' },
      termsContent: { top: '43%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '74%', left: '30%', width: '80%' },
      expiryDate: { top: '78%', left: '30%', width: '80%' },
      backLogo: { top: '10%', left: '10%', width: '80%', height: '15%' },
      backCompanyName: { top: '25%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-white',
        termsContent: 'text-white',
        dates: 'text-white'
      },
    },
    3: { // Student ID
      termsTitle: { top: '6%', left: '10%', width: '80%' },
      termsContent: { top: '15%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '49%', left: '28%', width: '80%' },
      expiryDate: { top: '54%', left: '28%', width: '80%' },
      backLogo: { top: '70%', left: '10%', width: '80%', height: '15%' },
      backCompanyName: { top: '88%', left: '10%', width: '80%' },
      qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-white',
        termsContent: 'text-white',
        dates: 'text-white'
      },
    },
    4: { // Modern ID
      termsTitle: { top: '25%', left: '10%', width: '80%' },
      termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '66%', left: '17%', width: '80%' },
      expiryDate: { top: '71%', left: '17%', width: '80%' },
      backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
      backCompanyName: { top: '13%', left: '10%', width: '80%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-white',
        termsContent: 'text-white',
        dates: 'text-white'
      },
    },
    5: { // Professional ID
      termsTitle: { top: '25%', left: '10%', width: '80%' },
      termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
      joinDate: { top: '66%', left: '17%', width: '80%' },
      expiryDate: { top: '71%', left: '17%', width: '80%' },
      backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
      backCompanyName: { top: '13%', left: '10%', width: '80%' },
      textColor: {
        companyNameBack: 'text-white',
        termsTitle: 'text-white',
        termsContent: 'text-white',
        dates: 'text-white'
      },
    }
  };

  const config = templateConfigs[templateId] || templateConfigs[1];
  const generateQRData = () => {
    // Add more details but keep the simple format
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

        {/* Terms and Conditions Title */}
        <div
          style={{
            position: 'absolute',
            top: config.termsTitle.top,
            left: config.termsTitle.left,
            width: config.termsTitle.width,
            textAlign: 'center',
            zIndex: 10
          }}
        >
          <div className={`text-[14px] mt-4 font-bold ${config.textColor.termsTitle}`}>
            TERMS & CONDITIONS
          </div>
        </div>

        {/* Terms and Conditions Content */}
        <div
          style={{
            position: 'absolute',
            top: config.termsContent.top,
            left: config.termsContent.left,
            width: config.termsContent.width,
            height: config.termsContent.height,
            textAlign: 'left',
            zIndex: 10
          }}
        >
          <div className={`text-[10px] font-semibold text-justify space-y-0 mt-4 ${config.textColor.termsContent}`}>
            <div className="flex gap-2">
              <span> &#8226;</span>
              <p> Identification: Carry the ID card at all times during working hours for identification purposes.</p>
            </div>

            <div className="flex gap-2">
              <span> &#8226;</span>
              <p> Authorized Use: The ID card is strictly for official use and should not be shared or used for unauthorized purposes.</p>
            </div>
          </div>
        </div>

        {/* Join Date */}
        {data.joinDate && (
          <div
            className={`text-[10px] font-semibold ${config.textColor.dates}`}
            style={{
              position: 'absolute',
              top: config.joinDate.top,
              left: config.joinDate.left,
              width: config.joinDate.width,
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Join</span>
            <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
            <span>{formatText(data.joinDate, 15)}</span>
          </div>
        )}

        {/* Expiry Date */}
        {data.expiryDate && (
          <div
            className={`text-[10px] font-semibold ${config.textColor.dates}`}
            style={{
              position: 'absolute',
              top: config.expiryDate.top,
              left: config.expiryDate.left,
              width: config.expiryDate.width,
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Exp</span>
            <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
            <span>{formatText(data.expiryDate, 15)}</span>
          </div>
        )}
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