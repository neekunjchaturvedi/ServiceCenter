import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            ErisTech
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Book Now
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              Profile
            </NavLink>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-800 hover:text-blue-600"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 md:hidden">
            <NavLink
              to="/"
              className="block py-2 text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="block py-2 text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/booking"
              className="block py-2 text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </NavLink>
            <NavLink
              to="/profile"
              className="block py-2 text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
