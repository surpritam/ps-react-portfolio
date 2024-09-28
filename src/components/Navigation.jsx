import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-sm">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-secondary text-accent font-semibold'
                : 'text-accent hover:border-b-2 hover:border-secondary'
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-secondary text-accent font-semibold'
                : 'text-accent hover:border-b-2 hover:border-secondary'
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-secondary text-accent font-semibold'
                : 'text-accent hover:border-b-2 hover:border-secondary'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-secondary text-accent font-semibold'
                : 'text-accent hover:border-b-2 hover:border-secondary'
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;