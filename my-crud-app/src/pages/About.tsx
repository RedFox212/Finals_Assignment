import React from 'react';
import Header from '../components/Header';
import BioContent from '../components/BioContent';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <BioContent />
      <Footer />
    </div>
  );
};

export default About;
