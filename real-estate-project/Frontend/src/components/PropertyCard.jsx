import React from 'react';
import phuleraimage from "../assets/phuleraflat.jpg"
import haridwarplot from "../assets/haridwar plot.jpg"
import farmhouse from "../assets/farmhouse.jpg"


const PropertyCard = ({ 
  image, 
  place,  
  type = "Apartment", 
  bedrooms, 
  bathrooms, 
  area,
  tag = "For Sale" 
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container with Tag */}
      <div className="relative">
        <img 
          src={image} 
          alt={place} 
          className="w-full h-48 object-cover"
        />
        
        {/* For Sale Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {tag}
          </span>
        </div>

        {/* Property Type Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
            {type}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 truncate">{place}</h3>
        </div>

        {/* Price */}
        {/* <div className="mb-3">
          <p className="text-2xl font-bold text-gray-900">₹{price}</p>
        </div> */}

        {/* Property Features */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{bedrooms} Beds</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{bathrooms} Baths</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
            <span>{area} sq ft</span>
          </div>
        </div>

        {/* Enquiry Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Enquire Now
        </button>
      </div>
    </div>
  );
};

// Example usage component with 6 properties
const PropertyListing = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      place: "Khatushyam",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1500",
      tag: "For Sale"
    },
    {
      id: 2,
      image: phuleraimage,
      place: "Phulera",
      type: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200",
      tag: "Premium"
    },
    {
      id: 3,
      image: haridwarplot,
      place: "Haridwar",
      price: "95 L",
      type: "Plot",
      area: "1200",
      tag: "For Sale"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      place: "New Delhi",
      price: "3.2 Cr",
      type: "Penthouse",
      bedrooms: 4,
      bathrooms: 3,
      area: "2200",
      tag: "Luxury"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      place: "Jaipur",
      price: "1.2 Cr",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "1800",
      tag: "For Sale"
    },
    {
      id: 6,
      image: farmhouse,
      place: "Alwar",
      price: "2.1 Cr",
      type: "Farmhouse",
      bedrooms: 3,
      bathrooms: 3,
      area: "1800",
      tag: "Premium"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Featured Properties
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              image={property.image}
              place={property.place}
              price={property.price}
              type={property.type}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              tag={property.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;