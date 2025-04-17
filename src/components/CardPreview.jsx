import React from "react";

// Template field positions configuration
const templateConfigs = {
  1: { // Classic ID
    photo: { top: '13%', left: '25%', width: '60%', height: '60%' },
    name: { top: '46%', left: '18%', width: '68%' },
    designation: { top: '52%', left: '16%', width: '68%' },
    employeeId: { top: '62%', left: '17%', width: '68%' },
    department: { top: '67%', left: '17%', width: '68%' },
    phone: { top: '72%', left: '17%', width: '68%' },
    email: { top: '77%', left: '17%', width: '68%' },
    joinDate: { top: '66%', left: '17%', width: '80%' },
    expiryDate: { top: '71%', left: '17%', width: '80%' },
    copyright: { top: '88%', left: '10%', width: '80%' },
    backLogo: { top: '2%', left: '10%', width: '80%', height: '10%' },
    backCompanyName: { top: '13%', left: '10%', width: '80%' },
    frontLogo: { top: '2%', left: '5%', width: '20%', height: '15%' },
    frontCompanyName: { top: '5%', left: '28%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' }
  },
  2: { // Corporate ID
    photo: { top: '15%', left: '5%', width: '25%', height: '25%' },
    name: { top: '15%', left: '35%', width: '60%' },
    designation: { top: '30%', left: '35%', width: '60%' },
    employeeId: { top: '45%', left: '35%', width: '60%' },
    department: { top: '60%', left: '35%', width: '60%' },
    email: { top: '75%', left: '35%', width: '60%' },
    phone: { top: '85%', left: '35%', width: '60%' },
    joinDate: { top: '25%', left: '10%', width: '80%' },
    expiryDate: { top: '35%', left: '10%', width: '80%' },
    copyright: { top: '85%', left: '10%', width: '80%' },
    backLogo: { top: '10%', left: '10%', width: '80%', height: '15%' },
    backCompanyName: { top: '15%', left: '10%', width: '80%' },
    frontLogo: { top: '2%', left: '2%', width: '20%', height: '15%' },
    frontCompanyName: { top: '5%', left: '25%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' }
  },
  3: { // Student ID
    photo: { top: '10%', left: '5%', width: '30%', height: '30%' },
    name: { top: '10%', left: '40%', width: '55%' },
    designation: { top: '25%', left: '40%', width: '55%' },
    employeeId: { top: '40%', left: '40%', width: '55%' },
    department: { top: '55%', left: '40%', width: '55%' },
    email: { top: '70%', left: '40%', width: '55%' },
    phone: { top: '85%', left: '40%', width: '55%' },
    joinDate: { top: '25%', left: '10%', width: '80%' },
    expiryDate: { top: '35%', left: '10%', width: '80%' },
    copyright: { top: '85%', left: '10%', width: '80%' },
    backLogo: { top: '10%', left: '10%', width: '80%', height: '15%' },
    backCompanyName: { top: '15%', left: '10%', width: '80%' },
    frontLogo: { top: '2%', left: '2%', width: '20%', height: '15%' },
    frontCompanyName: { top: '5%', left: '25%', width: '70%' },
    termsTitle: { top: '25%', left: '10%', width: '80%' },
    termsContent: { top: '30%', left: '10%', width: '80%', height: '30%' }
  }
};

const CardPreview = ({ data, designImage, templateId }) => {
  // Get template background based on templateId
  const getTemplateBackground = (isBack = false) => {
    if (designImage) return `url(${designImage})`;
    
    if (isBack) {
      return `url(/templates/classic-id-back.png)`;
    }
    
    switch (templateId) {
      case 1: // Classic ID
        return `url(/templates/classic-id.png)`;
      case 2: // Corporate ID
        return `url(/templates/corporate-id.png)`;
      case 3: // Student ID
        return `url(/templates/student-id.png)`;
      default:
        return '#f8f8f8';
    }
  };

  // Get template-specific styles
  const getTemplateStyles = () => {
    switch (templateId) {
      case 1: // Classic ID
        return {
          cardClass: "bg-white",
          textClass: "text-gray-800",
          headerClass: "bg-blue-600 text-white",
          photoClass: "border-4 border-blue-500",
          fieldClass: "border-b border-gray-200"
        };
      case 2: // Corporate ID
        return {
          cardClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
          textClass: "text-white",
          headerClass: "bg-white text-purple-600",
          photoClass: "border-4 border-white",
          fieldClass: "border-b border-purple-300"
        };
      case 3: // Student ID
        return {
          cardClass: "bg-gradient-to-r from-green-400 to-blue-500",
          textClass: "text-white",
          headerClass: "bg-white text-green-600",
          photoClass: "border-4 border-white",
          fieldClass: "border-b border-green-300"
        };
      default:
        return {
          cardClass: "bg-gray-100",
          textClass: "text-gray-800",
          headerClass: "bg-gray-200",
          photoClass: "border-2 border-gray-300",
          fieldClass: "border-b border-gray-200"
        };
    }
  };

  const styles = getTemplateStyles();
  const config = templateConfigs[templateId] || templateConfigs[1];

  // Format text to prevent overflow
  const formatText = (text, maxLength = 25) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Format email to break into multiple lines
  const formatEmail = (email) => {
    if (!email) return '';
    if (email.length <= 18) return email;
    
    // Find the last @ symbol before the 18th character
    const atIndex = email.lastIndexOf('@', 18);
    if (atIndex === -1) return email.substring(0, 18) + '...';
    
    // Split at @ and format each part
    const [username, domain] = email.split('@');
    if (username.length > 18) {
      return username.substring(0, 18) + '...\n@' + domain;
    }
    return username + '\n@' + domain;
  };

  return (
    <div className="grid grid-cols-1 gap-8">
      {/* Front Side Card Container */}
      <div className="p-4 rounded-lg">
      <div
        id="id-card-front"
          className={`relative w-56 h-96 rounded-lg overflow-hidden ${styles.cardClass} mx-auto`}
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
                width: config.frontLogo.width,
                height: config.frontLogo.height,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={data.companyLogo}
                alt="Company Logo"
                className="w-full h-full object-contain"
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
              <div className="text-[10px] font-semibold text-white">
                {formatText(data.companyName, 25)}
              </div>
              {data.companyAddress && (
                <div className="text-[8px] text-white">
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
                width: '120px',  // Fixed width
                height: '120px', // Same as width for perfect circle
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
              className="font-bold text-lg"
              style={{
                position: 'absolute',
                top: config.name.top,
                left: config.name.left,
                width: config.name.width,
                textAlign: 'center',
                zIndex: 10
              }}
            >
              {formatText(data.fullName, 38)}
            </div>
          )}
          {data.designation && (
            <div 
              className={`${styles.fieldClass} py-1 text-[11px] font-semibold`}
              style={{
                position: 'absolute',
                top: config.designation.top,
                left: config.designation.left,
                width: config.designation.width,
                textAlign: 'center',
                zIndex: 10
              }}
            >
              <span className="font-semibold"></span> {formatText(data.designation, 15)}
            </div>
          )}
          {data.employeeId && (
            <div 
              className={`${styles.fieldClass} text-[10px] font-semibold`}
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
                gap: '2px'
              }}
            >
              <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>ID</span>
              <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
              <span>{formatText(data.employeeId, 15)}</span>
            </div>
          )}
          {data.department && (
            <div 
              className={`${styles.fieldClass} text-[10px] font-semibold`}
              style={{
                position: 'absolute',
                top: config.department.top,
                left: config.department.left,
                width: config.department.width,
                textAlign: 'left',
                zIndex: 10,
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '2px'
              }}
            >
              <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Dept</span>
              <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
              <span>{formatText(data.department, 15)}</span>
            </div>
          )}
          {data.phone && (
            <div 
              className={`${styles.fieldClass} text-[10px] font-semibold`}
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
                gap: '2px'
              }}
            >
              <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Phone</span>
              <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
              <span>{formatText(data.phone, 15)}</span>
            </div>
          )}
          {data.email && (
            <div 
              className={`${styles.fieldClass} text-[10px] font-semibold`}
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
                whiteSpace: 'pre-line'
              }}
            >
              <span className="font-semibold whitespace-nowrap" style={{ width: '35px' }}>Email</span>
              <span className="font-semibold" style={{ marginRight: '8px' }}>:</span>
              <span>{formatEmail(data.email)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Back Side Card Container */}
      <div className="p-4 rounded-lg">
      <div
        id="id-card-back"
          className={`relative w-56 h-96 rounded-lg overflow-hidden ${styles.cardClass} mx-auto`}
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
                className="w-full h-full object-contain"
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
              <div className="text-[10px] font-semibold text-white">
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
            <div className="text-[12px] mt-2 font-bold ">
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
            <div className="text-[10px] font-semibold space-y-0 mt-4">
              <p>1. Identification: Carry the ID card at all times during working hours for identification purposes.</p>
              <p>2. Authorized Use: The ID card is strictly for official use and should not be shared or used for unauthorized purposes.</p>
            </div>
          </div>

          {/* Join Date */}
          {data.joinDate && (
            <div 
              className={`${styles.fieldClass} text-[10px] font-semibold`}
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
              className={`${styles.fieldClass} text-[10px] font-semibold`}
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

          {/* Copyright Text */}
          <div 
            className={`${styles.textClass} text-xs font-semibold`}
            style={{
              position: 'absolute',
              top: config.copyright.top,
              left: config.copyright.left,
              width: config.copyright.width,
              textAlign: 'center',
              zIndex: 10
            }}
          >
            {templateId === 1 && `© ${new Date().getFullYear()} ${data.companyName || 'Company Name'}`}
            {templateId === 2 && "CONFIDENTIAL - INTERNAL USE ONLY"}
            {templateId === 3 && `Valid for Academic Year ${new Date().getFullYear()}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
