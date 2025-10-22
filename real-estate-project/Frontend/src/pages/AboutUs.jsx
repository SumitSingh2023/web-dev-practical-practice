

// components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            We are dedicated to providing the best real estate services with transparency and trust
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Properties Sold" },
              { number: "50+", label: "Expert Agents" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 group"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We Help You Find Your Dream Home
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 15 years of experience in the real estate industry, we have helped 
                thousands of families find their perfect homes. Our team of expert agents 
                is dedicated to providing personalized service and expert guidance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that finding a home should be an exciting journey, not a stressful 
                experience. That's why we go above and beyond to ensure our clients feel 
                supported every step of the way.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Verified Properties",
                  "Legal Documentation", 
                  "Best Price Guarantee",
                  "24/7 Support"
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300 hover:translate-x-2 group"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Custom Button with Left to Right Hover Effect */}
              <button className="relative bg-transparent text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-900 overflow-hidden group transition-all duration-500 hover:border-green-600">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
                <div className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=1000&q=80" 
                    alt="Modern House" 
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&w=1000&q=80" 
                    alt="Luxury Villa" 
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&w=1000&q=80" 
                    alt="Apartment Interior" 
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&w=1000&q=80" 
                    alt="Beautiful Home" 
                    className="w-full h-72 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our experienced real estate agents are ready to help you find your dream property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Senior Real Estate Agent",
                description: "With 10+ years of experience, Rajesh specializes in luxury properties and commercial real estate.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=1000&q=80"
              },
              {
                name: "Priya Sharma",
                role: "Property Consultant",
                description: "Priya has helped over 200 families find their perfect homes with her exceptional customer service.",
                image: "https://suggesticbuildcon.com/wp-content/uploads/2025/06/1.png"
              },
              {
                name: "Amit Patel",
                role: "Legal & Documentation Expert",
                description: "Amit ensures all property transactions are legally sound and documentation is properly handled.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=1000&q=80"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 group-hover:bg-green-50 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700">{member.role}</p>
                  <p className="text-gray-600 mb-6 text-sm group-hover:text-gray-700">
                    {member.description}
                  </p>
                  {/* <div className="flex space-x-4">
                    {['📞', '✉️', '💼'].map((icon, iconIndex) => (
                      <button 
                        key={iconIndex}
                        className="text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-125 transform"
                      >
                        {icon}
                      </button>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Hear from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anjali Singh",
                location: "Mumbai",
                testimonial: "The team helped us find our dream home in just 2 weeks! Their professionalism and attention to detail made the entire process smooth.",
                initials: "AS"
              },
              {
                name: "Rohit Verma",
                location: "Delhi", 
                testimonial: "Excellent service! They understood exactly what we were looking for and found the perfect property within our budget.",
                initials: "RS"
              },
              {
                name: "Mohan Kumar",
                location: "Bangalore",
                testimonial: "From start to finish, the experience was fantastic. The legal documentation was handled perfectly. Highly recommended!",
                initials: "MK"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-green-500 text-2xl group-hover:scale-110 transition-transform duration-300">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {testimonial.testimonial}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="font-semibold text-green-600">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm group-hover:text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white group hover:scale-105 transition-transform duration-500">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            Contact us today and let our experts help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Button 1 */}
            <button className="relative bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white overflow-hidden group transition-all duration-500 hover:border-green-400 hover:scale-105">
              <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">Browse Properties</span>
              <div className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
            </button>
            
            {/* Button 2 */}
            <button className="relative bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-white overflow-hidden group transition-all duration-500 hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Agent</span>
              <div className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;