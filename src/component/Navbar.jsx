import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-gray-400'
            }
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
          >
            Stopwatch
          </NavLink>
        </li> 

      </ul>
    </nav>
  );
};

export default Navbar;
