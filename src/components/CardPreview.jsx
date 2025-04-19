import React from "react";
import { QRCodeSVG } from "qrcode.react";

// Template field positions configuration
const templateConfigs = {
  1: { // Classic ID
    photo: { top: '13%', left: '27%', width: '132px', height: '132px' },
    name: { top: '46%', left: '17%', width: '68%' },
    designation: { top: '52%', left: '16%', width: '68%' },
    employeeId: { top: '62%', left: '17%', width: '68%' },
    department: { top: '67%', left: '17%', width: '60%' },
    phone: { top: '72%', left: '17%', width: '68%' },
    email: { top: '77%', left: '17%', width: '68%' },
    joinDate: { top: '60%', left: '17%', width: '80%' },
    expiryDate: { top: '64%', left: '17%', width: '80%' },
    backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
    backCompanyName: { top: '13%', left: '10%', width: '80%' },
    frontLogo: { top: '3%', left: '5%', width: '15%', height: '15%' },
    frontCompanyName: { top: '5%', left: '25%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
    textColor: {
      fullName: 'text-gray-800',
      designation: 'text-gray-600',
      employeeId: 'text-black',
      department: 'text-black',
      phone: 'text-black',
      email: 'text-black',
      companyName: 'text-white',
      companyAddress: 'text-white',
      companyNameBack: 'text-white',
      termsTitle: 'text-black',
      termsContent: 'text-black',
      dates: 'text-black'
    },
    qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
  },
  2: { // Corporate ID
    photo: { top: '23%', left: '24%', width: '132px', height: '132px' },
    name: { top: '53%', left: '16%', width: '68%' },
    designation: { top: '59%', left: '17%', width: '68%' },
    employeeId: { top: '65%', left: '17%', width: '68%' },
    department: { top: '64%', left: '17%', width: '60%' },
    email: { top: '73%', left: '17%', width: '68%' },
    phone: { top: '69%', left: '17%', width: '60%' },
    joinDate: { top: '74%', left: '30%', width: '80%' },
    expiryDate: { top: '78%', left: '30%', width: '80%' },
    frontQrCode: { bottom: '0%', right: '38%', width: '25%', height: '25%' },
    backLogo: { top: '10%', left: '10%', width: '80%', height: '15%' },
    backCompanyName: { top: '25%', left: '10%', width: '80%' },
    frontLogo: { top: '2%', left: '25%', width: '15%', height: '15%' },
    frontCompanyName: { top: '4%', left: '45%', width: '70%' },
    termsTitle: { top: '35%', left: '10%', width: '80%' },
    termsContent: { top: '43%', left: '10%', width: '80%', height: '30%' },
    textColor: {
      fullName: 'text-blue-900',
      designation: 'text-white',
      employeeId: 'text-black',
      phone: 'text-black',
      email: 'text-black',
      companyName: 'text-black',
      companyAddress: 'text-black',
      companyNameBack: 'text-black',
      termsTitle: 'text-black',
      termsContent: 'text-black',
      dates: 'text-black'
    },
    qrCode: { bottom: '-3%', right: '31%', width: '35%', height: '35%' },
  },
  3: { // Student ID
    photo: { top: '15%', left: '27%', width: '120px', height: '120px' },
    name: { top: '47%', left: '16%', width: '68%' },
    designation: { top: '52%', left: '15%', width: '68%' },
    employeeId: { top: '64%', left: '17%', width: '68%' },
    department: { top: '55%', left: '40%', width: '55%' },
    email: { top: '72%', left: '17%', width: '68%' },
    phone: { top: '68%', left: '17%', width: '68%' },
    joinDate: { top: '49%', left: '28%', width: '80%' },
    expiryDate: { top: '54%', left: '28%', width: '80%' },
    frontQrCode: { bottom: '5%', right: '10%', width: '25%', height: '25%' },
    backLogo: { top: '70%', left: '10%', width: '80%', height: '15%' },
    backCompanyName: { top: '88%', left: '10%', width: '80%' },
    frontLogo: { top: '3%', left: '25%', width: '15%', height: '15%' },
    frontCompanyName: { top: '5%', left: '45%', width: '70%' },
    termsTitle: { top: '6%', left: '10%', width: '80%' },
    termsContent: { top: '15%', left: '10%', width: '80%', height: '30%' },
    textColor: {
      fullName: 'text-white',
      designation: 'text-white',
      employeeId: 'text-white',
      department: 'text-white',
      phone: 'text-white',
      email: 'text-white',
      companyName: 'text-white',
      companyAddress: 'text-white',
      companyNameBack: 'text-white',
      termsTitle: 'text-white',
      termsContent: 'text-white',
      dates: 'text-white'
    },
    qrCode: { bottom: '-5%', right: '31%', width: '35%', height: '35%' },
  },
  4: { // Modern ID
    photo: { top: '13%', left: '27%', width: '132px', height: '132px' },
    name: { top: '46%', left: '17%', width: '68%' },
    designation: { top: '52%', left: '16%', width: '68%' },
    employeeId: { top: '62%', left: '17%', width: '68%' },
    department: { top: '67%', left: '17%', width: '60%' },
    phone: { top: '72%', left: '17%', width: '68%' },
    email: { top: '77%', left: '17%', width: '68%' },
    joinDate: { top: '60%', left: '17%', width: '80%' },
    expiryDate: { top: '64%', left: '17%', width: '80%' },
    backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
    backCompanyName: { top: '13%', left: '10%', width: '80%' },
    frontLogo: { top: '3%', left: '5%', width: '15%', height: '15%' },
    frontCompanyName: { top: '5%', left: '25%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
    textColor: {
      fullName: 'text-gray-800',
      designation: 'text-gray-600',
      employeeId: 'text-black',
      department: 'text-black',
      phone: 'text-white',
      email: 'text-white',
      companyName: 'text-white',
      companyAddress: 'text-white',
      companyNameBack: 'text-white',
      termsTitle: 'text-black',
      termsContent: 'text-black',
      dates: 'text-black'
    },
    qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
  },
  5: { // Professional ID
    photo: { top: '13%', left: '27%', width: '132px', height: '132px' },
    name: { top: '46%', left: '17%', width: '68%' },
    designation: { top: '52%', left: '16%', width: '68%' },
    employeeId: { top: '62%', left: '17%', width: '68%' },
    department: { top: '67%', left: '17%', width: '60%' },
    phone: { top: '72%', left: '17%', width: '68%' },
    email: { top: '77%', left: '17%', width: '68%' },
    joinDate: { top: '60%', left: '17%', width: '80%' },
    expiryDate: { top: '64%', left: '17%', width: '80%' },
    backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
    backCompanyName: { top: '13%', left: '10%', width: '80%' },
    frontLogo: { top: '3%', left: '5%', width: '15%', height: '15%' },
    frontCompanyName: { top: '5%', left: '25%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' },
    textColor: {
      fullName: 'text-white',
      designation: 'text-white',
      employeeId: 'text-white',
      department: 'text-white',
      phone: 'text-white',
      email: 'text-white',
      companyName: 'text-white',
      companyAddress: 'text-white',
      companyNameBack: 'text-white',
      termsTitle: 'text-black',
      termsContent: 'text-black',
      dates: 'text-black'
    },
    qrCode: { bottom: '2%', right: '35%', width: '35%', height: '35%' },
  }
};

const CardPreview = ({ data, designImage, templateId, showBackSide = false }) => {
  // Get template background based on templateId
  const getTemplateBackground = (isBack = false) => {
    if (designImage) return `url(${designImage})`;

    if (isBack) {
      switch (String(templateId)) {
        case '1': // Classic ID
          return `url(/templates/classic-id-back.png)`;
        case '2': // Corporate ID
          return `url(/templates/corporate-id-back.png)`;
        case '3': // Student ID
          return `url(/templates/student-id-back.png)`;
        case '4': // Moder ID
          return `url(/templates/modern-id-back.png)`;
        case '5': // Professional ID
          return `url(/templates/professional-id-back.png)`;
        default:
          return `url(/templates/classic-id-back.png)`;
      }
    }

    switch (String(templateId)) {
      case '1': // Classic ID
        return `url(/templates/classic-id.png)`;
      case '2': // Corporate ID
        return `url(/templates/corporate-id.png)`;
      case '3': // Student ID
        return `url(/templates/student-id.png)`;
      case '4': // Modern ID
        return `url(/templates/modern-id.png)`;
      case '5': // Professional ID
        return `url(/templates/professional-id.png)`;
      default:
        return '#f8f8f8';
    }
  };

  // Get template-specific styles
  const getTemplateStyles = () => {
    switch (String(templateId)) {
      case '1': // Classic ID
        return {
          cardClass: "bg-white",
          textClass: "text-gray-800",
          headerClass: "bg-blue-600 text-white",
          photoClass: "border-4 border-blue-500"
        };
      case '2': // Corporate ID
        return {
          cardClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
          textClass: "text-white",
          headerClass: "bg-white text-purple-600",
          photoClass: "border-4 border-white"
        };
      case '3': // Student ID
        return {
          cardClass: "bg-gradient-to-r from-green-400 to-blue-500",
          textClass: "text-white",
          headerClass: "bg-white text-green-600",
          photoClass: "border-4 border-white"
        };
      case '4': // Modern ID
        return {
          cardClass: "bg-gradient-to-r from-blue-400 to-purple-500",
          textClass: "text-white",
          headerClass: "bg-white text-blue-600",
          photoClass: "border-4 border-white"
        };
      case '5': // Professional ID
        return {
          cardClass: "bg-gradient-to-r from-red-400 to-orange-500",
          textClass: "text-white",
          headerClass: "bg-white text-red-600",
          photoClass: "border-4 border-white"
        };
      default:
        return {
          cardClass: "bg-gray-100",
          textClass: "text-gray-800",
          headerClass: "bg-gray-200",
          photoClass: "border-2 border-gray-300"
        };
    }
  };

  const styles = getTemplateStyles();
  const config = templateConfigs[Number(templateId)] || templateConfigs[1];

  // Format text to prevent overflow
  const formatText = (text, maxLength = 25) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Format email to break into multiple lines
  const formatEmail = (email) => {
    if (!email) return '';
    if (email.length <= 25) return email;

    // Find the last @ symbol before the 25th character
    const atIndex = email.lastIndexOf('@', 25);
    if (atIndex === -1) return email.substring(0, 25) + '...';

    // Split at @ and format each part
    const [username, domain] = email.split('@');
    if (username.length > 25) {
      return username.substring(0, 25) + '...@' + domain;
    }
    return username + '@' + domain;
  };

  // Generate QR code data
  const generateQRData = () => {
    // Add more details but keep the simple format
    const qrText = `Name: ${data.fullName}
ID: ${data.employeeId}
Designation: ${data.designation}
Department: ${data.department}
Company: ${data.companyName}
Email: ${data.email}
Phone: ${data.phone}
Join Date: ${data.joinDate}
Expiry Date: ${data.expiryDate}`;
    return qrText;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center">
      {/* Front Side */}
      <div
        id="id-card-front"
        className={`relative w-64 h-110 rounded-lg overflow-hidden ${styles.cardClass}`}
        style={{
          backgroundImage: getTemplateBackground(),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'transparent'
        }}
      >
        {/* Front Company Logo */}
        {data.companyLogo && (
          <div
            style={{
              position: 'absolute',
              top: config.frontLogo.top,
              left: config.frontLogo.left,
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

        {/* Front Company Name */}
        {data.companyName && (
          <div
            style={{
              position: 'absolute',
              top: config.frontCompanyName.top,
              left: config.frontCompanyName.left,
              width: config.frontCompanyName.width,
              textAlign: 'left',
              zIndex: 10
            }}
          >
            <div className={`text-[10px] font-bold ${config.textColor.companyName}`}>
              {formatText(data.companyName, 25)}
            </div>
            {data.companyAddress && (
              <div className={`text-[8px] font-bold ${config.textColor.companyAddress}`}>
                {formatText(data.companyAddress, 35)}
              </div>
            )}
          </div>
        )}

        {/* Profile Photo */}
        {data.photo && (
          <div
            className="absolute"
            style={{
              top: config.photo.top,
              left: config.photo.left,
              width: config.photo.width,  // Fixed width
              height: config.photo.height, // Same as width for perfect circle
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={data.photo}
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
        )}

        {/* Standard Fields */}
        {data.fullName && (
          <div
            className={`font-bold text-lg ${config.textColor.fullName}`}
            style={{
              position: 'absolute',
              top: config.name.top,
              left: config.name.left,
              width: config.name.width,
              textAlign: 'center',
              zIndex: 10,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {Number(templateId) === 3 ? data.fullName : formatText(data.fullName, 38)}
          </div>
        )}
        {data.designation && (
          <div
            className={`py-1 text-[12px] font-semibold ${config.textColor.designation}`}
            style={{
              position: 'absolute',
              top: config.designation.top,
              left: config.designation.left,
              width: config.designation.width,
              textAlign: 'center',
              zIndex: 10
            }}
          >
            <span className="font-semibold"></span> {formatText(data.designation, 20)}
          </div>
        )}
        {data.employeeId && (
          <div
            className={`text-[10px] font-semibold ${config.textColor.employeeId}`}
            style={{
              position: 'absolute',
              top: config.employeeId.top,
              left: config.employeeId.left,
              width: config.employeeId.width,
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px',
              alignItems: 'center'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>ID</span>
            <span className="font-semibold" style={{ width: '8px' }}>:</span>
            <span>{formatText(data.employeeId, 15)}</span>
          </div>
        )}
        {data.department && Number(templateId) !== 2 && Number(templateId) !== 3 && Number(templateId) !== 4 && Number(templateId) !== 5 && (
          <div
            className={`text-[10px] font-semibold ${config.textColor.department}`}
            style={{
              position: 'absolute',
              top: config.department?.top || '64%',
              left: config.department?.left || '20%',
              width: config.department?.width || '60%',
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px',
              alignItems: 'center'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Dept</span>
            <span className="font-semibold" style={{ width: '8px' }}>:</span>
            <span>{formatText(data.department, 15)}</span>
          </div>
        )}
        {data.phone && (
          <div
            className={`text-[10px] font-semibold  ${config.textColor.phone}`}
            style={{
              position: 'absolute',
              top: config.phone.top,
              left: config.phone.left,
              width: config.phone.width,
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px',
              alignItems: 'center'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Phone</span>
            <span className="font-semibold" style={{ width: '8px' }}>:</span>
            <span>{formatText(data.phone, 15)}</span>
          </div>
        )}
        {data.email && (
          <div
            className={`text-[10px] font-semibold ${config.textColor.email}`}
            style={{
              position: 'absolute',
              top: config.email.top,
              left: config.email.left,
              width: config.email.width,
              textAlign: 'left',
              zIndex: 10,
              padding: 0,
              margin: 0,
              display: 'flex',
              gap: '2px',
              alignItems: 'center'
            }}
          >
            <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Email</span>
            <span className="font-semibold" style={{ width: '8px' }}>:</span>
            <span style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 'calc(100% - 45px)' // 35px for label + 8px for colon + 2px gap
            }}>{formatEmail(data.email)}</span>
          </div>
        )}

        {/* Front Side QR Code - For templates 2, 3, and 5 */}
        {(Number(templateId) === 2 || Number(templateId) === 3 || Number(templateId) === 4 || Number(templateId) === 5) && (
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
            <div
              style={{
                backgroundColor: (Number(templateId) === 3 || Number(templateId) === 5) ? 'white' : 'transparent',
                padding: (Number(templateId) === 3 || Number(templateId) === 5) ? '2px' : '0',
                borderRadius: (Number(templateId) === 3 || Number(templateId) === 5) ? '8px' : '0'
              }}
            >
              <QRCodeSVG
                value={generateQRData()}
                size={80}
                level="M"
                includeMargin={true}
                className="w-full h-full"
                bgColor={(Number(templateId) === 3 || Number(templateId) === 5) ? 'white' : 'transparent'}
                fgColor="black"
              />
            </div>
          </div>
        )}
      </div>

      {/* Back Side - Only show if showBackSide is true */}
      {showBackSide && (
        <div
          id="id-card-back"
          className={`relative w-64 h-110 rounded-lg overflow-hidden ${styles.cardClass}`}
          style={{
            backgroundImage: getTemplateBackground(true),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'transparent'
          }}
        >
          {/* Back Logo */}
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

          {/* Back Company Name */}
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

          {/* Back Side QR Code - Only for template 1 */}
          {Number(templateId) === 1 && (
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
                backgroundColor: Number(templateId) === 5 ? 'white' : 'transparent',
                padding: Number(templateId) === 5 ? '8px' : '0',
                borderRadius: Number(templateId) === 5 ? '8px' : '0'
              }}
            >
              <QRCodeSVG
                value={generateQRData()}
                size={120}
                level="M"
                includeMargin={true}
                className="w-full h-full"
                bgColor={Number(templateId) === 5 ? 'white' : 'transparent'}
                fgColor="black"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardPreview;