import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
