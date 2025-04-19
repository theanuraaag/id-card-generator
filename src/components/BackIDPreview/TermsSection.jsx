import React from 'react';

const TermsSection = ({ config, templateId }) => {
  if (Number(templateId) === 5) return null;

  return (
    <>
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
    </>
  );
};

export default TermsSection; 