

import React from "react";

const RealEstateServices = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Buy Your Dream Home",
      description:
        "We help you find your dream home with modern and transparent real estate services.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Experienced Team",
      description:
        "Get guidance from our professional agents who know the real estate market inside out.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Budget Friendly Options",
      description:
        "Select from affordable housing and investment properties without compromise on quality.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Wide Property Range",
      description:
        "Explore premium, mid-range, and luxury options — all verified and ready for you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect Real Estate Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover trusted real estate assistance with elegant simplicity and
            professionalism.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl shadow-md p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center text-gray-700 mb-6 group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 w-10 h-1 bg-gray-300 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-black"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-black text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Connect with our experts and explore verified listings tailored for
            your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-500">
              <span className="relative z-10 group-hover:text-white">
                Schedule a Consultation
              </span>
              <span className="absolute inset-0 bg-gray-900 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>

            <button className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500">
              <span className="relative z-10 group-hover:text-black">
                View All Properties
              </span>
              <span className="absolute inset-0 bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateServices;
