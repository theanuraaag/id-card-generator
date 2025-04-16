import React from "react";
import IdCardFront from "./IdCardFront";
import IdCardBack from "./IdCardBack";

const CardPreview = ({ data }) => (
  <div className="p-6 pt-20 flex justify-center space-x-8 bg-white text-black print:flex print:items-center print:justify-center print:gap-8 print:p-4 print:bg-white">
    <div id="id-card-front" className="print:break-inside-avoid">
      <IdCardFront {...data} />
    </div>
    <div id="id-card-back" className="print:break-inside-avoid">
      <IdCardBack
        joinDate={data.joinDate}
        expiryDate={data.expiryDate}
        address={data.address}
      />
    </div>
  </div>
);

export default CardPreview;
