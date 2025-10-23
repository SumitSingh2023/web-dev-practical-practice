// components/ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Get in touch with our real estate experts for personalized assistance
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about properties? Our team is here to help you find your dream home.
                  Reach out to us and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-[#afdd51] text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      +91 92660-50607
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-[#afdd51] text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      sales@suggesticbuildcon.com
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-[#afdd51] text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Delhi Office</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Near Kotak Mahindra Bank,<br />
                      Delhi, 110001<br />
                      Prime Location
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-[#afdd51] text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: '📘', label: 'Facebook' },
                    { icon: '📷', label: 'Instagram' },
                    { icon: '💼', label: 'LinkedIn' },
                    { icon: '🐦', label: 'Twitter' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:scale-110 transition-all duration-300"
                      title={social.label}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="site-visit">Schedule Site Visit</option>
                      <option value="property-valuation">Property Valuation</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden group transition-all duration-500 hover:scale-105 w-full"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-[#afdd51] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Your Exact Embed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Delhi Office</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located near Kotak Mahindra Bank in prime Delhi location, easily accessible from all areas.
            </p>
          </div>

          {/* Your Exact Map Embed Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500">
            {/* Your Google Map Embed */}
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.962290851117!2d77.04712242816649!3d28.5925588750475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad9c928a727%3A0x733721483b3b6984!2sKotak%20Mahindra%20Bank!5e0!3m2!1sen!2sin!4v1761148212552!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delhi Office Location - Kotak Mahindra Bank"
                className="hover:scale-105 transition-transform duration-700"
              ></iframe>
            </div>

            {/* Map Info */}
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 hover:bg-green-50 rounded-lg transition-colors duration-300">
                  <div className="text-2xl mb-2">🚗</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Parking Available</h4>
                  <p className="text-gray-600 text-sm">Secure parking facility</p>
                </div>
                <div className="p-4 hover:bg-green-50 rounded-lg transition-colors duration-300">
                  <div className="text-2xl mb-2">🚇</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Metro Access</h4>
                  <p className="text-gray-600 text-sm">Near Delhi Metro stations</p>
                </div>
                <div className="p-4 hover:bg-green-50 rounded-lg transition-colors duration-300">
                  <div className="text-2xl mb-2">🛣️</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Easy Access</h4>
                  <p className="text-gray-600 text-sm">Connected to major roads</p>
                </div>
              </div>

              {/* Additional Delhi Location Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📍 Location Details:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>Landmark:</strong> Near Kotak Mahindra Bank
                  </div>
                  <div>
                    <strong>Area:</strong> Prime Delhi Location
                  </div>
                  <div>
                    <strong>Accessibility:</strong> Well connected via all transport
                  </div>
                  <div>
                    <strong>Pincode:</strong> 110001
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Locations in Delhi */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2">🏪</div>
              <h4 className="font-semibold text-gray-900 mb-1">Shopping Centers</h4>
              <p className="text-gray-600 text-sm">Multiple options nearby</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2">🏨</div>
              <h4 className="font-semibold text-gray-900 mb-1">Hotels</h4>
              <p className="text-gray-600 text-sm">Comfortable stays nearby</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2">🏦</div>
              <h4 className="font-semibold text-gray-900 mb-1">Banks & ATMs</h4>
              <p className="text-gray-600 text-sm">Multiple banking options</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2">🍽️</div>
              <h4 className="font-semibold text-gray-900 mb-1">Restaurants</h4>
              <p className="text-gray-600 text-sm">Variety of dining options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Find Your Dream Property in Delhi?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and property site visit across Delhi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold overflow-hidden group transition-all duration-500 hover:scale-105">
              <span className="relative z-10">Call Now: +91 90517 45525</span>
              <div className="absolute inset-0 bg-[#afdd51] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
            </button>
            <button className="relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold overflow-hidden group transition-all duration-500 hover:scale-105">
              <span className="relative z-10">WhatsApp Us</span>
              <div className="absolute inset-0 bg-[#afdd51] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;