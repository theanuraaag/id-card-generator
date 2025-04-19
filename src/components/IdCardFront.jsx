import React, { forwardRef } from "react";
import Svg from "../assets/Vector1.svg";
import Svg2 from "../assets/Vector2.svg";
import Svg3 from "../assets/bottomVector1.svg";
import Svg4 from "../assets/bottomVector2.svg";
import GoogleLogo from "../assets/GoogleLogo.png";

const IdCardFront = forwardRef(({
    name,
    // photo,
    dob,
    bloodGroup,
    phone,
    email,
    designation,
    idNo,
    designImage
}, ref) => {
    return (
        <div ref={ref} className="w-[204px] h-[322px] border rounded shadow-md text-center relative overflow-hidden bg-white"
            style={{
                backgroundImage: `url(${designImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
            


            <div className="mt-10">
                <svg width="200" height="40">
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="12%" style={{ stopColor: "#2E9DA6", stopOpacity: 1 }} />
                            <stop offset="78%" style={{ stopColor: "#000F30", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <text
                        x="35"
                        y="30"
                        fontSize="16"
                        fontWeight="bold"
                        fill="url(#grad)"
                        textTransform="uppercase"
                    >
                        {name}
                    </text>
                </svg>
                <p className="text-[#2E9DA6] text-[10px] font-semibold uppercase">{designation}</p>

                <div className="mt-4 text-sm text-left text-[8px] space-y-1 px-4">
                    <div className="flex">
                        <span className="text-gray-600 font-bold w-[60px]">ID NO</span>
                        <span className="text-gray-600 font-bold">:</span>
                        <span className="text-gray-900 font-medium ml-2">{idNo}</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-600 font-bold w-[60px]">DOB</span>
                        <span className="text-gray-600 font-bold">:</span>
                        <span className="text-gray-900 font-medium ml-2">{dob}</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-600 font-bold w-[60px]">Blood</span>
                        <span className="text-gray-600 font-bold">:</span>
                        <span className="text-gray-900 font-medium ml-2">{bloodGroup}</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-600 font-bold w-[60px]">Phone</span>
                        <span className="text-gray-600 font-bold">:</span>
                        <span className="text-gray-900 font-medium ml-2">{phone}</span>
                    </div>
                    <div className="flex">
                        <span className="text-gray-600 font-bold w-[60px]">E-mail</span>
                        <span className="text-gray-600 font-bold">:</span>
                        <span className="text-gray-900 font-medium ml-2">{email}</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 left-[25px] z-20 text-white text-left">
                <img src={GoogleLogo} alt="Company Logo" className="w-8 h-8 rounded-full object-cover border-2 border-gray-200 mb-1" />
                <h3 className="text-[12px] font-semibold">Google</h3>
            </div>
            {/* <div className="absolute bottom-0 w-full h-[54px]">
                <img src={Svg4} alt="bottom-bg" className="absolute top-0 left-0 w-full h-[54px] object-cover z-0" />
                <img src={Svg3} alt="bottom-overlay" className="absolute top-0 left-0 w-full h-[56px] object-cover z-10" />
            </div> */}
        </div>
    );
});

export default IdCardFront;
