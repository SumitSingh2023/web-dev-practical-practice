

import React from "react";

const AboutSection = () => {
  const services = [
    {
      id: "01.",
      title: "Buy A New Home",
      description:
        "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: "02.",
      title: "Buy New Plot",
      description:
        "Buying a new plot in Pulera, Khatushyam, Jaipur, or Haridwar offers an excellent opportunity to build your dream home in a peaceful and well-developed environment. These locations are known for their clean surroundings, strong connectivity, and growing infrastructure.",
    },
    {
      id: "03.",
      title: "Sell A Home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="uppercase text-1xl tracking-widest text-gray-500 font-semibold mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Building Dreams, One <br /> Home At A Time
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission goes beyond real estate — it's about guiding you through
            one of life's biggest milestones with heart, expertise, and
            unwavering commitment.
          </p>
          
          {/* Button with smooth left-to-right hover effect */}
          <button className="relative bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <span className="relative z-10">View Properties</span>
            {/* Hover background that slides from left to right */}
            <div className="absolute inset-0 bg-[#afdd51] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          {services.map((service) => (
            <div key={service.id} className="flex gap-6 group cursor-pointer transition-all duration-300 hover:translate-x-2">
              <h3 className="text-3xl md:text-4xl font-bold text-black min-w-[40px] group-hover:text-[#afdd51] transition-colors duration-300">
                {service.id}
              </h3>
              <div className="transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
