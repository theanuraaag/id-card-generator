import React, { useState } from "react";

const Form = ({ onSubmit, existingData, setDesignImage, designImage }) => {
  const [photo, setPhoto] = useState(existingData.photo || null);
  const [dynamicFields, setDynamicFields] = useState(existingData.dynamicFields || [{ key: "", value: "" }]);

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...dynamicFields];
    updatedFields[index][field] = value;
    setDynamicFields(updatedFields);
  };

  const addField = () => {
    setDynamicFields([...dynamicFields, { key: "", value: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = dynamicFields.filter((_, i) => i !== index);
    setDynamicFields(updatedFields);
  };

  // const handleDesignUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setDesignImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ photo, dynamicFields });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Enter Details</h2>

      {/* Upload Photo */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Upload Profile Photo</label>

        {!photo ? (
          <label
            htmlFor="photo"
            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Choose Photo
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPhoto(URL.createObjectURL(file));
                }
              }}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-24 h-24">
            <img
              src={photo}
              alt="Uploaded"
              className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
            />
            <button
              type="button"
              onClick={() => setPhoto(null)}
              className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm shadow-md"
            >
              &times;
            </button>
          </div>
        )}
      </div>



      {/* Upload Design Background */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Upload ID Card Design (optional)</label>

        {!designImage ? (
          <label
            htmlFor="design-upload"
            className="cursor-pointer inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Choose Design
            <input
              type="file"
              id="design-upload"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setDesignImage(URL.createObjectURL(file));
                }
              }}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative w-32 h-20 mt-2">
            <img
              src={designImage}
              alt="Design Preview"
              className="w-32 h-20 rounded-lg border-4 border-green-500 object-cover"
            />
            <button
              type="button"
              onClick={() => setDesignImage(null)}
              className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm shadow-md"
            >
              &times;
            </button>
          </div>
        )}
      </div>


      {/* Dynamic Fields */}
      <div className="mb-4">
        {dynamicFields.map((field, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Field Name (e.g., Name)"
              value={field.key}
              onChange={(e) => handleFieldChange(index, "key", e.target.value)}
              className="flex-1 p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Field Value (e.g., Anurag)"
              value={field.value}
              onChange={(e) => handleFieldChange(index, "value", e.target.value)}
              className="flex-1 p-2 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => removeField(index)}
              className="bg-red-500 text-white px-3 rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <button
          type="button"
          onClick={addField}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add More Fields
        </button>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Show Preview
        </button>
      </div>
    </form>
  );
};

export default Form;
