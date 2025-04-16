import React, { useState, useEffect } from "react";

const Form = ({ onSubmit, existingData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    dob: "",
    bloodGroup: "",
    phone: "",
    email: "",
    joinDate: "",
    expiryDate: "",
    address: "",
    idNo: "",
    designation: "",
  });
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemovePhoto = () => {
    setFormData((prev) => ({
      ...prev,
      photo: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) validationErrors.phone = "Valid phone number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Valid email is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      {/* Photo Upload */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Upload Photo</label>
        {!formData.photo ? (
          <label
            htmlFor="photo"
            className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Choose File
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="relative">
            <img
              src={formData.photo}
              alt="Uploaded"
              className="w-20 h-20 rounded-full border-4 border-gray-300"
            />
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="absolute top-0 right-0 text-red-600 font-bold text-xl"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-semibold">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bloodGroup" className="block text-sm font-semibold">Blood Group</label>
        <input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="idNo" className="block text-sm font-semibold">ID Number</label>
        <input
          type="text"
          id="idNo"
          name="idNo"
          value={formData.idNo}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="designation" className="block text-sm font-semibold">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="joinDate" className="block text-sm font-semibold">Join Date</label>
        <input
          type="date"
          id="joinDate"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-sm font-semibold">Expiry Date</label>
        <input
          type="date"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-semibold">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate ID Card
      </button>
    </form>
  );
};

export default Form;
