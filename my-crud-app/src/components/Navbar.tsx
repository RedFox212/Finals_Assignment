import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, Theme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: Theme; label: string; icon: string }[] = [
    { id: 'dark', label: 'Dark', icon: '🌙' },
    { id: 'light', label: 'Light', icon: '☀️' },
    { id: 'midnight', label: 'Midnight', icon: '🎆' },
    { id: 'emerald', label: 'Emerald', icon: '🍃' },
    { id: 'solarized', label: 'Solarized', icon: '🌅' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
      
      <div className="theme-switcher">
        <select 
          value={theme} 
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="theme-select"
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.icon} {t.label}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
