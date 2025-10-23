import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);
  const [isMobilePropertyOpen, setIsMobilePropertyOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Resources", path: "/resourses" },
    { name: "Join Us", path: "/JoinUs" },
    { name: "Contact", path: "/contact" },
    { name: "News & Articles", path: "/newsAndarticle" },
  ];

  const propertyLinks = [
    { name: "Lakeview Meadows", path: "/property/lakeview-meadows" },
    { name: "Pulera Affordable Flats, Haridwar", path: "/property/pulera-haridwar" },
    { name: "Kia Farms, Jaipur", path: "/property/kia-farms" },
    { name: "Township in Khatushyamji", path: "/property/khatushyamji" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-18 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-gray-800 font-medium transition duration-300 group ${location.pathname === link.path ? "text-[#afdd51]" : ""
                }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#afdd51] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Property Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPropertyOpen(true)}
            onMouseLeave={() => setIsPropertyOpen(false)}
          >
            <button
              className={`flex items-center gap-1 relative text-gray-800 font-medium transition duration-300 group ${isPropertyOpen ? "text-[#afdd51]" : ""
                }`}
            >
              Property
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isPropertyOpen ? "rotate-180" : ""
                  }`}
              />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#afdd51] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <div
              className={`absolute left-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 transform origin-top overflow-hidden ${isPropertyOpen
                  ? "opacity-100 scale-y-100 max-h-96"
                  : "opacity-0 scale-y-0 max-h-0"
                }`}
            >
              {propertyLinks.map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  className="block px-4 py-2 text-gray-700 border-b border-gray-100 hover:bg-green-50 hover:text-black transition-all duration-300"
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
              className={`relative text-gray-800 font-medium transition duration-300 group ${location.pathname === link.path ? "text-[#afdd51]" : ""
                }`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#afdd51] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* 🔥 Login/Register Button */}
          <Link
            to="/login"
            className="relative overflow-hidden text-white font-medium px-6 py-2 rounded-lg border border-black bg-black transition-all duration-500 ease-in-out group"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Login/Register
            </span>
            <span className="absolute inset-0 bg-[#afdd51] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-3xl transition-transform duration-500 transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg border-t transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col space-y-2 py-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-gray-800 font-medium transition duration-300 ${location.pathname === link.path ? "text-[#afdd51]" : ""
                } hover:text-[#afdd51]`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Property Dropdown */}
          <div className="border-t pt-3">
            <button
              onClick={() => setIsMobilePropertyOpen(!isMobilePropertyOpen)}
              className="flex justify-between w-full text-gray-800 font-medium"
            >
              Property
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${isMobilePropertyOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobilePropertyOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              {propertyLinks.map((p) => (
                <Link
                  key={p.name}
                  to={p.path}
                  onClick={() => setIsOpen(false)}
                  className="block pl-4 py-2 text-gray-700 border border-gray-100 rounded-md mb-2 shadow-sm hover:bg-[#afdd51] hover:text-grey-800 transition-all duration-300"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 🔥 Same Hover Effect for Mobile Button */}
          <div className="border-t pt-4 mt-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="relative overflow-hidden text-white font-medium px-4 py-3 rounded-lg border border-black bg-black transition-all duration-500 ease-in-out group text-center block"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Login/Register
              </span>
              <span className="absolute inset-0 bg-[#afdd51] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
