import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FacilitiesSection from "../components/Facilitysection";
import FloorPlanComponent from "../components/FloorPlan";
import SimpleEnquiryForm from "../components/EnquiryForm"; // Modal form
import ConstructionUpdates from "../components/ContructionUpdate";

// Sample property data
const properties = [
  {
    id: 1,
    type: "Land",
    price: "₹50,00,000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    type: "Flat",
    price: "₹35,00,000",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    type: "House",
    price: "₹75,00,000",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    type: "Villa",
    price: "₹1,25,00,000",
    img: "https://images.unsplash.com/photo-1600585154380-6f4c7d7d7a3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    type: "Commercial Plot",
    price: "₹90,00,000",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false); // Modal state

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === properties.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? properties.length - 1 : current - 1);

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* Hero Carousel */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {properties.map((prop, index) => (
          <div
            key={prop.id}
            className={`absolute w-full h-full transition-all duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={prop.img}
              alt={prop.type}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
              <h2 className="text-lg font-bold">{prop.type}</h2>
              <p>{prop.price}</p>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded opacity-70 hover:opacity-100"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded opacity-70 hover:opacity-100"
        >
          ▶
        </button>
      </div>

      {/* Enquire Now Button */}
      <div className="text-center my-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Enquire Now
        </button>
      </div>

      {/* Property Cards */}
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={prop.img}
              alt={prop.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{prop.type}</h3>
              <p className="text-gray-700 mt-2">{prop.price}</p>
              <Link
                to={`/property/${prop.type.toLowerCase()}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sections */}
      <FacilitiesSection />
      <FloorPlanComponent />
      <ConstructionUpdates />

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setShowForm(false)}
          />

          {/* form modal */}
          <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-md z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Enquiry Form</h2>
              <button
                className="text-gray-500 text-lg"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <SimpleEnquiryForm />

            <button
              onClick={() => setShowForm(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
