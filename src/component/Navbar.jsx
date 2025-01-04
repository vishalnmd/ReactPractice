import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      {/* Header Section */}
      <div className="flex md:inline-flex justify-between items-center">
        <div className="mr-4 text-white text-lg font-bold">My App</div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Links Section */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:inline-flex md:space-x-4 mt-4 md:mt-0`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clock"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Clock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Others
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Forms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/redux"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Redux
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stopwatch"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Stopwatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/callback"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
            onClick={()=>setIsMenuOpen(false)}
          >
            Callback
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/axios"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }onClick={()=>setIsMenuOpen(false)}        
          >
            Axios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
