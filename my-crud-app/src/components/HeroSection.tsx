import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <h2>Welcome to My Creative Space</h2>
      <p>I am a developer passionate about building seamless digital experiences using modern frameworks and modular architectures.</p>
      <div style={{ marginTop: '2rem' }}>
        <button className="primary-btn" style={{ padding: '0.8rem 2rem', borderRadius: '8px', background: '#3498db', border: 'none', color: 'white', cursor: 'pointer' }}>Explore Projects</button>
      </div>
    </section>
  );
};

export default HeroSection;
