import React from "react";
import phuleraimage from "../assets/phuleraflat.jpg";
import haridwarplot from "../assets/haridwar plot.jpg";
import farmhouse from "../assets/farmhouse.jpg";

const PropertyCard = ({
  image,
  place,
  type = "Apartment",
  bedrooms,
  bathrooms,
  area,
  tag = "For Sale",
}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={place}
          className="w-full h-56 object-cover transition-transform duration-700 ease-in-out hover:scale-110"
        />

        {/* Overlay hover dark effect */}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-500"></div>

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#afdd51] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {tag}
          </span>
        </div>

        {/* Property Type */}
        <div className="absolute top-3 right-3">
          <span className="bg-white text-emerald-700 px-2 py-1 rounded text-xs font-semibold border border-emerald-600">
            {type}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 text-[#afdd51] mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 cursor-pointer hover:text-emerald-600">
            {place}
          </h3>
        </div>

        {/* Property Features */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          {bedrooms && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{bathrooms} Baths</span>
            </div>
          )}
          {area && (
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
              <span>{area} sq ft</span>
            </div>
          )}
        </div>

        {/* Enquiry Button with ORIGIN HOVER EFFECT */}
        {/* Enquiry Button with ORIGIN HOVER EFFECT */}
        <button className="group relative w-full overflow-hidden rounded-lg bg-black text-white font-semibold py-3 transition-all duration-500">
          <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
            Enquire Now
          </span>
          <span className="absolute inset-0 bg-[#afdd51] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        </button>

      </div>
    </div>
  );
};

const PropertyListing = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80",
      place: "Khatushyam",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1500",
      tag: "For Sale",
    },
    {
      id: 2,
      image: phuleraimage,
      place: "Phulera",
      type: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200",
      tag: "Premium",
    },
    {
      id: 3,
      image: haridwarplot,
      place: "Haridwar",
      type: "Plot",
      area: "1200",
      tag: "For Sale",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      place: "New Delhi",
      type: "Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      area: "2200",
      tag: "Luxury",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
      place: "Jaipur",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "1800",
      tag: "For Sale",
    },
    {
      id: 6,
      image: farmhouse,
      place: "Alwar",
      type: "Farmhouse",
      bedrooms: 3,
      bathrooms: 3,
      area: "1800",
      tag: "Premium",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Featured Properties
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;





