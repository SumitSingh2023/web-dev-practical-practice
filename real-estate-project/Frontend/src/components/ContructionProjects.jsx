// import React from 'react';
// import image1 from "../assets/img-12.jpg"
// import image2 from "../assets/img-13.jpg"
// import image3 from "../assets/img-7.jpg"
// import image4 from "../assets/img-3.jpg"
// import image5 from "../assets/img-6.jpg"
// import image6 from "../assets/img-12.jpg"

// const ConstructionProjects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Skyline Apartments",
//       location: "Bandra West, Mumbai",
//       type: "Flat",
//       image: ""
//     },
//     {
//       id: 2,
//       title: "Luxury Duplex",
//       location: "Juhu, Mumbai",
//       type: "Duplex",
//       image: image2
//     },
//     {
//       id: 3,
//       title: "Green Valley Farmhouse",
//       location: "Lonavala, Maharashtra",
//       type: "Farmhouse",
//       image: image3
//     },
//     {
//       id: 4,
//       title: "Prime Residential Plot",
//       location: "Panvel, Navi Mumbai",
//       type: "Plot",
//       image: image4
//     },
//     {
//       id: 5,
//       title: "Modern Studio Apartments",
//       location: "Andheri East, Mumbai",
//       type: "Studio",
//       image: image5
//     },
//     {
//       id: 6,
//       title: "Luxury Villa Project",
//       location: "Alibaug, Maharashtra",
//       type: "Villa",
//       image: image6
//     }
//   ];

//   const getTypeColor = (type) => {
//     switch (type) {
//       case 'Flat': return 'bg-[#0d6efd]';
//       case 'Duplex': return 'bg-[#20c997]';
//       case 'Farmhouse': return 'bg-[#fd7e14]';
//       case 'Plot': return 'bg-[#6f42c1]';
//       case 'Studio': return 'bg-[#e83e8c]';
//       case 'Villa': return 'bg-[#ffc107]';
//       default: return 'bg-gray-500';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <span className="text-[#0d6efd] font-semibold text-lg mb-2 block">ONGOING PROJECTS</span>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[#0d6efd]">Construction</span> Projects
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our diverse range of ongoing construction projects across different property types.
//           </p>
//         </div>

//         {/* Projects Grid - Simple Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map(project => (
//             <div 
//               key={project.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
//             >
//               {/* Project Image */}
//               <div className="relative">
//                 <img 
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover"
//                 />
                
//                 {/* Property Type Badge */}
//                 <div className="absolute top-4 left-4">
//                   <span className={`${getTypeColor(project.type)} text-white px-3 py-2 rounded-lg text-sm font-semibold`}>
//                     {project.type}
//                   </span>
//                 </div>

//                 Overlay on Hover
//                 <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
//                   <button className="bg-[#0d6efd] text-white px-6 py-3 rounded-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>

//               {/* Project Details - Only Location */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#0d6efd] transition-colors">
//                   {project.title}
//                 </h3>
//                 <div className="flex items-center text-gray-600">
//                   <svg className="w-5 h-5 mr-2 text-[#0d6efd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <span className="text-lg font-medium">{project.location}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-[#0d6efd] to-[#0b5ed7] rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">
//               Interested in Any of These Projects?
//             </h3>
//             <p className="text-blue-100 mb-6 text-lg">
//               Contact us for more details and site visits
//             </p>
//             <button className="bg-white text-[#0d6efd] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-lg">
//               Contact Now
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ConstructionProjects;


import React from 'react';
import image1 from "../assets/img-12.jpg";
import image2 from "../assets/img-13.jpg";
import image3 from "../assets/img-7.jpg";
import image4 from "../assets/img-3.jpg";
import image5 from "../assets/img-6.jpg";
import image6 from "../assets/img-12.jpg";

const ConstructionProjects = () => {
  const projects = [
    {
      id: 1,
      location: "Rajasthan",
      type: "Duplex",
      image: image1 // Fixed: added image1
    },
    {
      id: 2,
      location: "Alwar",
      type: "Farmhouse",
      image: image2
    },
    {
      id: 3,
      location: "Phulera",
      type: "Farmhouse",
      image: image3
    },
    {
      id: 4,
      location: "KhatuShyam",
      type: "Duplex",
      image: image4
    },
    {
      id: 5,
      location: "Jaipur",
      type: "Farmhouse",
      image: image5
    },
    {
      id: 6,
      location: "Alwar",
      type: "Villa",
      image: image6
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Flat': return 'bg-[#0d6efd]';
      case 'Duplex': return 'bg-[#20c997]';
      case 'Farmhouse': return 'bg-[#fd7e14]';
      case 'Plot': return 'bg-[#6f42c1]';
      case 'Studio': return 'bg-[#e83e8c]';
      case 'Villa': return 'bg-[#ffc107] text-gray-900';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#0d6efd] font-semibold text-lg mb-2 block">ONGOING PROJECTS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0d6efd]">Construction</span> Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of ongoing construction projects across different property types.
          </p>
        </div>

        {/* Projects Grid - Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
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
                  <span className={`${getTypeColor(project.type)} px-3 py-2 rounded-lg text-sm font-semibold`}>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Details - Only Location */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#0d6efd] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-[#0d6efd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg font-medium">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0d6efd] to-[#0b5ed7] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Any of These Projects?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Contact us for more details and site visits
            </p>
            <button className="bg-white text-[#0d6efd] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-lg">
              Contact Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConstructionProjects;