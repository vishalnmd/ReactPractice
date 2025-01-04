import React, { useState } from "react";

const Temp2 = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:bg-blue-500 px-3 py-2 rounded">
              Home
            </a>
            <a href="/about" className="hover:bg-blue-500 px-3 py-2 rounded">
              About
            </a>
            <a href="/services" className="hover:bg-blue-500 px-3 py-2 rounded">
              Services
            </a>
            <a href="/contact" className="hover:bg-blue-500 px-3 py-2 rounded">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Temp2;
