


import React, { useState } from 'react';
import logo from "../assets/logo-2.png";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-center lg:items-start mb-4">
              {/* Simple logo — all styling removed */}
              <img
                className="w-20 h-auto object-contain"
                src={logo}
                alt="Suggestic Buildcon Logo"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left mt-4">
              Suggestic Buildcon Pvt. Ltd., where dreams find their foundation and aspirations take shape.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", link: "/about" },
                { label: "Contact Us", link: "/contact" },
                { label: "Get My Registry", link: "/registry" },
                { label: "Upcoming Projects", link: "/projects" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Office TS-T6, 3rd Floor, Pankaj Arcade, Sector 5, Dwarka, New Delhi, 110075</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 8929520607</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@suggesticbuilder.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Don't Miss Out</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Join our newsletter for insider updates, special deals, and expert real estate tips.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-sm"
              />
              <button
                type="submit"
                className="relative w-full px-6 py-3 rounded-lg font-semibold text-sm text-black bg-white overflow-hidden group transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10">Subscribe Now</span>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Suggestic Buildcon Pvt. Ltd. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex justify-center space-x-6">
            {["#","#","#","#"].map((link, i) => (
              <a key={i} href={link} className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
