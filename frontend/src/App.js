import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PatientForm from "./components/PatientForm";

function App() {
  const [file, setFile] = useState(null);

 /* const handleSubmit = async () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    // mock API call
    alert(`Image "${file.name}" sent for analysis. Report will be generated!`);
  };*/

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Patient Form Section */}
      <div className="w-full max-w-lg my-6">
        <PatientForm />
      </div>
    </div>
  );
}

export default App;
