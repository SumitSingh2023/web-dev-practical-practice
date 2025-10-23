
import React from "react";
import image1 from "../assets/img-12.jpg";
import image2 from "../assets/img-13.jpg";
import image3 from "../assets/img-7.jpg";
import image4 from "../assets/img-3.jpg";
import image5 from "../assets/img-6.jpg";
import image6 from "../assets/img-12.jpg";

const ConstructionProjects = () => {
  const projects = [
    { id: 1, location: "Rajasthan", type: "Duplex", image: image1 },
    { id: 2, location: "Alwar", type: "Farmhouse", image: image2 },
    { id: 3, location: "Phulera", type: "Farmhouse", image: image3 },
    { id: 4, location: "KhatuShyam", type: "Duplex", image: image4 },
    { id: 5, location: "Jaipur", type: "Farmhouse", image: image5 },
    { id: 6, location: "Alwar", type: "Villa", image: image6 },
  ];

  const getTypeColor = () => "bg-green-500 text-white";

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-black font-semibold text-lg mb-2 block">
            ONGOING PROJECTS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Construction Projects
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our diverse range of ongoing construction projects across different property types.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="bg-[#afdd51] rounded-2xl p-2"
                  >
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-800">
                  <svg
                    className="w-5 h-5 mr-2 text-[#afdd51]"
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
                  <span className="text-lg font-medium">
                    {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Any of These Projects?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Contact us for more details and site visits
            </p>

            {/* Smooth Hover Button */}
            <button className="relative px-8 py-3 rounded-lg font-semibold text-lg text-black bg-white overflow-hidden group transition-all duration-300">
              <span className="absolute inset-0 bg-[#afdd51] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10">Contact Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProjects;
