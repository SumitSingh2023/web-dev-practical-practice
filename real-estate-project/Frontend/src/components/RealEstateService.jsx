import React from 'react';

const RealEstateServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Buy your Dream Home",
      description: "We help you find a new home by offering a smart real estate experience"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Experienced Team",
      description: "Talk to our experienced team member for the property that suits you."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Budget Friendly Flats",
      description: "Choose the property that matches your budget."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Multiple Properties to Choose From",
      description: "Choose the list of properties that matches your requirement."
    }
  ];

  const builders = [
    {
      name: "Lodha Group",
      logo: "https://via.placeholder.com/120x60/3B82F6/white?text=Lodha",
      projects: "50+ Projects"
    },
    {
      name: "Godrej Properties",
      logo: "https://via.placeholder.com/120x60/EF4444/white?text=Godrej",
      projects: "45+ Projects"
    },
    {
      name: "Prestige Group",
      logo: "https://via.placeholder.com/120x60/10B981/white?text=Prestige",
      projects: "60+ Projects"
    },
    {
      name: "DLF Limited",
      logo: "https://via.placeholder.com/120x60/8B5CF6/white?text=DLF",
      projects: "55+ Projects"
    },
    {
      name: "Sobha Limited",
      logo: "https://via.placeholder.com/120x60/F59E0B/white?text=Sobha",
      projects: "40+ Projects"
    },
    {
      name: "Brigade Group",
      logo: "https://via.placeholder.com/120x60/EC4899/white?text=Brigade",
      projects: "35+ Projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            We Offer Perfect <span className="text-blue-600">Real Estate Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your dream property with our comprehensive real estate solutions and trusted builder partnerships.
          </p>
        </div>

        {/* Featured Builders Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Builders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {builders.map((builder, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gray-100 rounded-lg p-4 mb-4 h-20 flex items-center justify-center">
                  <div className="text-lg font-semibold text-gray-800">
                    {builder.name}
                  </div>
                </div>
                <p className="text-sm text-blue-600 font-semibold">{builder.projects}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-6 w-12 h-1 bg-blue-600 rounded-full transform transition-all duration-300 group-hover:w-16"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team and let us help you find the perfect property that matches your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View All Properties
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RealEstateServices;