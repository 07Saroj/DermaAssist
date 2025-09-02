import React, { useState } from "react";

function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    whatsapp: "", // new field
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle file input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.image) {
      alert("Please upload an image first!");
      return;
    }

    // mock API call
    //alert(`Image "${file.name}" sent for analysis. Report will be generated!`);
    alert(`Form submitted:\nName: ${formData.name}\nAge: ${formData.age}\nGender: ${formData.gender}\nWhatsApp: ${formData.whatsapp}\nImage "${formData.image.name}" sent for analysis. Report will be generated!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Patient Details</h2>

      {/* Name */}
      <div>
        <label className="block text-gray-600 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-gray-600 mb-1">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-gray-600 mb-1">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* WhatsApp Number */}
      <div>
        <label className="block text-gray-600 mb-1">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="+91 9876543210"
          pattern="[0-9]{10,15}" // ensures valid number
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>
      {/* Upload  Section */}
      <div className="bg-white  p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Image Upload</h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full mb-4 text-sm text-gray-600"
        />
        {/*
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Upload & Analyze
        </button>*/} 
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default PatientForm;
