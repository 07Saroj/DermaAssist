import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Website Name */}
        <div className="text-2xl font-bold text-green-600">DermAssist</div>

        {/* Menu Links */}
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
    
          <a href="#" className="text-gray-700 hover:text-green-600">Help</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          <a href="#" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Sign In</a>
        </div>
      </div>
    </nav>
  );
}
