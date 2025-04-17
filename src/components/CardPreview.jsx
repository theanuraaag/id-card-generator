import React from "react";

const CardPreview = ({ data, designImage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">

      {/* Front Side */}
      <div
        id="id-card-front"
        className="relative w-56 h-96 border rounded overflow-hidden shadow-lg"
        style={{
          backgroundImage: designImage ? `url(${designImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: designImage ? 'transparent' : '#f8f8f8'
        }}
      >
        {/* Profile Photo */}
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            className="absolute top-4 left-4 w-20 h-20 object-cover rounded-full border-2 border-white"
          />
        )}

        {/* Dynamic Fields */}
        <div className="absolute top-4 left-28 right-4 text-black text-sm space-y-1">
          {data.dynamicFields.map((field, index) => (
            <div key={index}>
              <strong>{field.key}:</strong> {field.value}
            </div>
          ))}
        </div>
      </div>

      {/* Back Side (Optional) */}
      <div
        id="id-card-back"
        className="relative w-56 h-96 border rounded overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center"
      >
        <span className="text-gray-500">Back Side (Optional Content)</span>
      </div>

    </div>
  );
};

export default CardPreview;
