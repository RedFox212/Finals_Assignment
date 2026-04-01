import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <Header />
      <div style={{ padding: '4rem 0' }}>
        <h1 style={{ fontSize: '6rem', margin: 0, color: '#e74c3c' }}>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The bridge to this destination hasn't been built yet.</p>
        <Link to="/" style={{ display: 'inline-block', marginTop: '2rem', padding: '0.8rem 2rem', background: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
