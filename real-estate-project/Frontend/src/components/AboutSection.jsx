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
        "Buying a new plot in Pulera, Khatushyam, Jaipur, or Haridwar offers an excellent opportunity to build your dream home in a peaceful and well-developed environment. These locations are known for their clean surroundings, strong connectivity, and growing infrastructure, making them ideal for both residential and investment purposes.",
    },
    {
      id: "03.",
      title: "Sell A Home",
      description:
        "Sell confidently with expert guidance and effective strategies, showcasing your property’s best features for a successful sale.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Building Dreams, One <br /> Home At A Time
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our mission goes beyond real estate — it’s about guiding you through
            one of life’s biggest milestones with heart, expertise, and
            unwavering commitment.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition-all">
            View Properties
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          {services.map((service) => (
            <div key={service.id} className="flex gap-6">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 min-w-[60px]">
                {service.id}
              </h3>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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
