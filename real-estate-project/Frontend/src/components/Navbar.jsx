import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [isPropertyOpen, setIsPropertyOpen] = useState(false); // desktop dropdown
  const [isMobilePropertyOpen, setIsMobilePropertyOpen] = useState(false); // mobile dropdown
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Resources", path: "/resources" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
    { name: "News & Articles", path: "/news-articles" },
  ];

  const propertyLinks = [
    { name: "Lakeview Meadows", path: "/property/lakeview-meadows" },
    { name: "Pulera Affordable Flats, Haridwar", path: "/property/pulera-haridwar" },
    { name: "Kia Farms, Jaipur", path: "/property/kia-farms" },
    { name: "Township in Khatushyamji", path: "/property/khatushyamji" },
  ];

  return (
    <nav className="bg-blue-50 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-15" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-gray-800 font-medium transition duration-300 group ${
                location.pathname === link.path ? "text-blue-600" : ""
              }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Property Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPropertyOpen(true)}
            onMouseLeave={() => setIsPropertyOpen(false)}
          >
            <button
              className={`relative text-gray-800 font-medium transition duration-300 group ${
                isPropertyOpen ? "text-blue-600" : ""
              }`}
            >
              Property
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <div
              className={`absolute left-0 mt-2 w-60 bg-white shadow-lg border rounded-lg transition-all duration-300 overflow-hidden ${
                isPropertyOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {propertyLinks.map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining Links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-gray-800 font-medium transition duration-300 group ${
                location.pathname === link.path ? "text-blue-600" : ""
              }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t transition-all duration-300">
          <div className="flex flex-col space-y-2 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-gray-800 font-medium transition duration-300 ${
                  location.pathname === link.path ? "text-blue-600" : ""
                } hover:underline`}
              >
                {link.name}
              </Link>
            ))}

            {/* Property dropdown mobile */}
            <div className="border-t pt-3">
              <button
                onClick={() => setIsMobilePropertyOpen(!isMobilePropertyOpen)}
                className="flex justify-between w-full text-gray-800 font-medium"
              >
                Property
                <span
                  className={`transform transition-transform duration-300 ${
                    isMobilePropertyOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isMobilePropertyOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                {propertyLinks.map((p) => (
                  <Link
                    key={p.name}
                    to={p.path}
                    onClick={() => setIsOpen(false)}
                    className="block pl-4 py-1 text-gray-600 hover:text-blue-600 transition duration-200"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
