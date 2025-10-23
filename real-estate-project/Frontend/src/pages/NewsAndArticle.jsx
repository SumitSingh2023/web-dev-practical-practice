

// components/PaperCuttings.jsx
import React from 'react';
import news1 from "../assets/news-1.jpg"
import news2 from "../assets/news-2.jpg"

const PaperCuttings = () => {
  // Paper cuttings data
  const paperCuttings = [
    {
      id: 1,
      title: "Times of India",
      date: "January 15, 2024",
      description: "Featured article about our latest real estate project launch in prime location",
      image: news1,
      category: "Newspaper"
    },
    {
      id: 2,
      title: "Economic Times",
      date: "January 12, 2024",
      description: "Coverage of our innovative sustainable housing project",
      image: news2,
      category: "Business"
    },
    {
      id: 3,
      title: "Hindustan Times",
      date: "January 10, 2024",
      description: "Interview with our CEO about market trends and future projects",
      image: news1,
      category: "Newspaper"
    },
    {
      id: 4,
      title: "Business Standard",
      date: "January 8, 2024",
      description: "Feature on our commercial real estate developments",
      image: news2,
      category: "Business"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Media Coverage</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Featured in leading newspapers and business publications
          </p>
        </div>
      </section>

      {/* Paper Cuttings Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press & Media</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our work has been featured in various national and regional publications
            </p>
          </div>

          {/* Paper Cuttings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paperCuttings.map((cutting) => (
              <div 
                key={cutting.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Newspaper Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={cutting.image} 
                    alt={cutting.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      cutting.category === 'Newspaper' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {cutting.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#afdd51] transition-colors duration-300">
                      {cutting.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4">
                    {cutting.date}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {cutting.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#afdd51] transition-all duration-300 hover:scale-105">
                      View Full Article
                    </button>
                    <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#afdd51] hover:text-[#afdd51] transition-all duration-300">
                      ⬇️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Media Features</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Newspaper Coverage</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Business Publications</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaperCuttings;