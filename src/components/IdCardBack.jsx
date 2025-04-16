import React, { forwardRef } from "react";
import Svg3 from "../assets/bottomVector1.svg";
import Svg4 from "../assets/bottomVector2.svg";
import backVector1 from "../assets/backVector1.svg";
import backVector2 from "../assets/backVector2.svg";
import GoogleLogo from "../assets/GoogleLogo.png";

const IdCardBack = forwardRef(({ joinDate, expiryDate, address },ref) => {
  return (
    <div ref={ref} className="w-[204px] h-[322px] border rounded shadow-md text-center relative overflow-hidden bg-white">
      <img src={backVector2} alt="bg" className="absolute top-[5px] left-0 w-full h-[84px] object-cover z-0" />
      <img src={backVector1} alt="overlay" className="absolute top-0 left-0 w-full h-[83px] object-cover z-10" />

      <div className="absolute top-4 left-[25px] z-20 text-white text-left">
        <img src={GoogleLogo} alt="Company Logo" className="w-8 h-8 mb-1" />
        <h3 className="text-[12px] font-semibold">Google</h3>
      </div>

      <div className="absolute top-[90px] left-0 w-full px-3 text-left text-[8px] text-gray-700 space-y-2 z-20 mt-6">
        <h1 className="text-[10px] font-bold px-4 text-[#2E9DA6]">TERMS AND CONDITIONS</h1>

        <ul className="list-disc list-inside space-y-1 px-4 text-[8px]">
          <li>Carry this card at all times.</li>
          <li>Report if card is lost or stolen.</li>
        </ul>

        <div className="mt-4 text-sm text-left text-[8px] space-y-1 px-4">
          <div className="flex">
            <span className="text-gray-600 font-bold w-[60px]">Join Date</span>
            <span className="text-gray-600 font-bold">:</span>
            <span className="text-gray-900 font-medium ml-2">{joinDate}</span>
          </div>
          <div className="flex">
            <span className="text-gray-600 font-bold w-[60px]">Expiry Date</span>
            <span className="text-gray-600 font-bold">:</span>
            <span className="text-gray-900 font-medium ml-2">{expiryDate}</span>
          </div>
        </div>

        <div className="px-4 mt-6">
          <div className="border-t border-dashed border-gray-500 w-20  mb-1" />
          <p className="text-[8px] font-bold italic text-gray-600">Your Signature</p>
        </div>

        <div className="mt-1 text-[8px] font-medium px-4">
          <p className="font-bold">Address:</p>
          <p className="text-gray-800">{address}</p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[54px]">
        <img src={Svg4} alt="bottom-bg" className="absolute top-0 left-0 w-full h-[54px] object-cover z-0" />
        <img src={Svg3} alt="bottom-overlay" className="absolute top-0 left-0 w-full h-[56px] object-cover z-10" />
      </div>
    </div>
  );
});

export default IdCardBack;
