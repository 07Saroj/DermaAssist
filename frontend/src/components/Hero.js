import React from "react";
import heroImage from "../components/Images/Doctor3.png"; // import local image
export default function Hero() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Text */}
        <div className="md:w-1/2 px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Quick <span className="text-green-600">Medical Services</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Access top-notch medical services from the comfort of your home. We are here to help you 24/7.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
            Get Services
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 px-6 mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Doctor"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
}
