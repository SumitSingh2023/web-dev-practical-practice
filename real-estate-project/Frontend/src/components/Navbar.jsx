
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [propertyOpen, setPropertyOpen] = useState(false); // property dropdown (mobile)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-blue-400"
          >
            SUGGESTIC
          </Link>

          {/* ✅ Hamburger Menu for Mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>

            {/* 🏠 Property Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-400 transition flex items-center gap-1">
                Property ▾
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 rounded-md shadow-lg mt-2 w-44">
                <Link
                  to="/property/phulera"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Lake View Meadows,Phulera
                </Link>
                <Link
                  to="/property/haridwar"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Affordable Flats,Haridwar
                </Link>
                <Link
                  to="/property/jaipur"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Kia Farms,Jaipur
                </Link>
                <Link
                  to="property/khatushyamji"
                  className="block px-4 py-2 hover:bg-gray-700"

                >  Township in Khatushyamji
                </Link>
              </div>
            </div>

            <Link to="/career" className="hover:text-blue-400 transition">Career</Link>
            <Link to="/resources" className="hover:text-blue-400 transition">Resources</Link>
            <Link to="/joinus" className="hover:text-blue-400 transition">Join</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/article" className="hover:text-blue-400 transition">Article</Link>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 animate-slideDown">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            About
          </Link>

          {/* 🏠 Property Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setPropertyOpen(!propertyOpen)}
              className="w-full text-left px-4 py-2 border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center"
            >
              Property
              <span>{propertyOpen ? "▲" : "▼"}</span>
            </button>
            {propertyOpen && (
              <div className="bg-gray-700">
                <Link
                  to="/property/phulera"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-2 border-b border-gray-600 hover:bg-gray-600"
                >
                  Lake View Meadows, Phulera
                </Link>
                <Link
                  to="/property/haridwar"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-2 border-b border-gray-600 hover:bg-gray-600"
                >
                  Affordable Flats, Haridwar
                </Link>
                <Link
                  to="/property/jaipur"
                  onClick={() => setOpen(false)}
                  className="block px-6 py-2 hover:bg-gray-600"
                >
                  Kia Farms, Jaipur
                </Link>
                <Link 
                  to="/property/khatushyamji"
                  onClick={()=>setOpen(false)}
                  className="block px-6 py-2 hover:bg-gray-600"
                
                >Township in Khatushyamji</Link>
              </div>
            )}
          </div>

          <Link
            to="/career"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            Career
          </Link>
          <Link
            to="/resources"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            Resources
          </Link>
          <Link
            to="/joinus"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            Join
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700"
          >
            Contact
          </Link>
          <Link
            to="/article"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Article
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

