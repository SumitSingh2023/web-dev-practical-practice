// ConstructionUpdates.jsx
import React, { useState } from "react";
import SimpleEnquiryForm from "./EnquiryForm";

const images = [
  "https://images.unsplash.com/photo-1599911164625-6f7db1c38f35?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1560448204-74fcb3f1d71c?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1599911164625-6f7db1c38f35?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1560448204-74fcb3f1d71c?auto=format&fit=crop&w=800",
];

const ConstructionUpdates = () => {
    const [buttonClicked, setbuttonClicked] = useState(false)

    function buttonClick(){
        setbuttonClicked(true)
        console.log(buttonClicked)
    }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Construction Updates as on April 2025</h2>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
        onClick={buttonClick}
        >
          Enquire Now
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md">
            <img src={img} alt={`Construction ${i}`} className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionUpdates;
