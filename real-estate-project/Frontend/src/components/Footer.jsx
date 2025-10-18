import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-10 relative">
      {/* Scroll to Top Arrow */}
      <div className="absolute -top-5 right-10 cursor-pointer p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition" onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Us / Social Media */}
        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Upcoming Projects</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p>🏢 Address: 123 Main Street, City, Country</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>✉️ Email: info@example.com</p>
        </div>

        {/* Optional: Newsletter or Extra */}
        <div>
          <h2 className="font-bold text-lg mb-4">Stay Connected</h2>
          <p>Subscribe to our newsletter for latest updates.</p>
          <input 
            type="email" 
            placeholder="Your email" 
            className="mt-2 p-2 w-full rounded text-black"
          />
          <button className="mt-2 w-full bg-blue-600 p-2 rounded hover:bg-blue-500 transition">Subscribe</button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 text-center py-4">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
