import React from 'react';
import { formatText } from '../../utils/formatting';

const DatesSection = ({ config, data }) => {
  return (
    <>
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
    </>
  );
};

export default DatesSection; 