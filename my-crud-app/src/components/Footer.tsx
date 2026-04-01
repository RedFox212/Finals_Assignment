import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Personal Portfolio. Built with React & Vite.</p>
    </footer>
  );
};

export default Footer;
