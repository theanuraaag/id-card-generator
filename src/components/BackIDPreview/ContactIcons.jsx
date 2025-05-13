import React from 'react';
import { PiPhoneFill, PiEnvelopeFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { formatText } from '../../utils/formatting';

const ContactIcons = ({ config, data, templateId }) => {
  if (Number(templateId) !== 5) return null;

  return (
    <>
      {data?.phone && data.phone.trim() !== '' && (
        <div
          style={{
            position: 'absolute',
            bottom: config.icons.phone.bottom,
            left: config.icons.phone.left,
            zIndex: 10
          }}
          className={`flex items-center gap-2 ${config.textColor.icons}`}
        >
          <PiPhoneFill size={config.icons.phone.size} className="text-[#edc74f]" />
          <span className="text-xs text-white">{formatText(data.phone, 15)}</span>
        </div>
      )}

      {data?.email && data.email.trim() !== '' && (
        <div
          style={{
            position: 'absolute',
            bottom: config.icons.email.bottom,
            left: config.icons.email.left,
            zIndex: 10
          }}
          className={`flex items-center gap-2 ${config.textColor.icons}`}
        >
          <PiEnvelopeFill size={config.icons.email.size} className="text-[#edc74f]" />
          <span className="text-xs text-white">{formatText(data.email, 20)}</span>
        </div>
      )}

      {data?.employeeAddress && data.employeeAddress.trim() !== '' && (
        <div
          style={{
            position: 'absolute',
            bottom: config.icons.location.bottom,
            left: config.icons.location.left,
            zIndex: 10
          }}
          className={`flex items-center gap-2 ${config.textColor.icons}`}
        >
          <MdLocationPin size={config.icons.location.size} className="text-[#edc74f]" />
          <span className="text-xs text-white">{formatText(data.employeeAddress, 25)}</span>
        </div>
      )}
    </>
  );
};

export default ContactIcons; 